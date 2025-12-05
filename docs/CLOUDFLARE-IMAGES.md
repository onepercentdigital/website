# Cloudflare Images Integration Guide

This project uses Cloudflare Images for image upload, optimization, and CDN delivery.

## Current Implementation

### Environment Variables

Added to `src/env.ts` and `.env.local`:
- `CLOUDFLARE_ACCOUNT_ID` (server-only)
- `CLOUDFLARE_API_TOKEN` (server-only)

### Utility Library

`src/lib/cloudflare-images.ts` provides:
- `uploadImage(file, metadata)` - Upload files from browser
- `uploadImageFromUrl(url, metadata)` - Upload from URLs (WordPress migration)
- `getImageUrl(imageId, variant)` - Generate CDN URLs (client-safe)
- `deleteImage(imageId)` - Delete images
- `getResponsiveImageUrls(imageId)` - Generate srcset for responsive images

### Image Variants Configured

In Cloudflare Dashboard:
- `thumbnail` - 400px wide, auto height, scale-down
- `medium` - 800px wide, auto height, scale-down
- `large` - 1200px wide, auto height, scale-down
- `og` - 1200x630px, cover (Open Graph social sharing)
- `public` - Original size (default variant)

## Setup Guide for New Projects

### Step 1: Enable Cloudflare Images

1. Go to Cloudflare Dashboard → Images
2. Enable Cloudflare Images ($5/month + $1 per 100k images delivered)
3. Note your Account Hash from the sidebar (format: `uIVQ6NXJhv6uJPgWapIyVQ`)

### Step 2: Create API Token

1. Profile → API Tokens → Create Token
2. Use template: "Edit Cloudflare Images"
3. Permissions: Account → Cloudflare Images → Edit
4. Copy the token (shown only once!)

### Step 3: Configure Image Variants

In Cloudflare Dashboard → Images → Variants:

```
thumbnail:
- Width: 400px
- Height: (leave blank for auto)
- Fit: Scale down

medium:
- Width: 800px
- Height: (leave blank for auto)
- Fit: Scale down

large:
- Width: 1200px
- Height: (leave blank for auto)
- Fit: Scale down

og:
- Width: 1200px
- Height: 630px
- Fit: Cover
```

### Step 4: Add Environment Variables

Add to `src/env.ts` (server-side validation):
```typescript
export const env = createEnv({
  server: {
    CLOUDFLARE_ACCOUNT_ID: z.string().min(1),
    CLOUDFLARE_API_TOKEN: z.string().min(1),
  },
})
```

Add to `.env.local`:
```bash
CLOUDFLARE_ACCOUNT_ID=your_account_id_here
CLOUDFLARE_API_TOKEN=your_api_token_here
```

### Step 5: Create Utility Library

Create `src/lib/cloudflare-images.ts`:

```typescript
// Hardcode account hash (safe - it's public in image URLs anyway)
const ACCOUNT_HASH = 'your_account_hash_here';

export async function uploadImage(
  file: File,
  metadata?: Record<string, string>
): Promise<string> {
  const apiUrl = `https://api.cloudflare.com/client/v4/accounts/${process.env.CLOUDFLARE_ACCOUNT_ID}/images/v1`;
  
  const formData = new FormData();
  formData.append('file', file);
  if (metadata) {
    formData.append('metadata', JSON.stringify(metadata));
  }

  const response = await fetch(apiUrl, {
    method: 'POST',
    headers: {
      Authorization: `Bearer ${process.env.CLOUDFLARE_API_TOKEN}`,
    },
    body: formData,
  });

  const data = await response.json();
  if (!data.success || !data.result) {
    throw new Error(`Upload failed: ${data.errors?.[0]?.message}`);
  }
  
  return data.result.id;
}

export function getImageUrl(
  imageId: string,
  variant: string = 'public'
): string {
  return `https://imagedelivery.net/${ACCOUNT_HASH}/${imageId}/${variant}`;
}
```

### Step 6: Create Server Function for Uploads

```typescript
import { createServerFn } from '@tanstack/react-start';
import { uploadImage } from '@/lib/cloudflare-images';

const uploadImageServer = createServerFn({ method: 'POST' })
  .inputValidator((data) => {
    if (!(data instanceof FormData)) {
      throw new Error('Expected FormData');
    }
    const file = data.get('file');
    if (!file || !(file instanceof File)) {
      throw new Error('No file provided');
    }
    return { file, alt: data.get('alt')?.toString() || '' };
  })
  .handler(async ({ data }) => {
    const { file, alt } = data;
    const imageId = await uploadImage(file, { alt });
    return { imageId };
  });
```

### Step 7: Use in Component

```typescript
function UploadComponent() {
  const handleUpload = async (file: File) => {
    const formData = new FormData();
    formData.append('file', file);
    formData.append('alt', 'My image');
    
    const result = await uploadImageServer({ data: formData });
    const imageUrl = getImageUrl(result.imageId, 'large');
    // Use imageUrl...
  };
  
  return <input type="file" onChange={(e) => handleUpload(e.target.files[0])} />;
}
```

## Critical Security Notes

1. **NEVER** use `VITE_` prefix for Cloudflare credentials - they're secrets!
2. **ALWAYS** use `process.env` in server functions (not imported `env` object)
3. **Account hash is public** - safe to hardcode for client-side URL generation
4. **Server functions only** - Upload/delete operations must happen server-side
5. **FormData validation** - Always validate file type and size in server functions

## Troubleshooting

### "Attempted to access a server-side environment variable on the client"

**Solution:** Ensure server functions use `process.env` directly, not imported `env` object. Client code should use hardcoded ACCOUNT_HASH for URLs.

### "createServerFn(...).validator is not a function"

**Solution:** Use `.inputValidator()` not `.validator()` (correct method name in TanStack Start v1.138+)

### Images not displaying

**Solution:** Verify account hash is correct from Cloudflare Dashboard sidebar. Test with:
```
https://imagedelivery.net/{ACCOUNT_HASH}/{imageId}/public
```

### Build failing with sitemap errors

**Solution:** Ensure `VITE_CONVEX_URL` is set in `.env.local`
