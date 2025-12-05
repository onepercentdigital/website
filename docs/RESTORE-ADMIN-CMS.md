# Restoration Guide: Admin CMS, Clerk & Sentry

This document explains how to restore the admin CMS with proper authentication after launch.

## Prerequisites

- Clerk account configured at clerk.com
- Sentry project configured at sentry.io (optional)
- Environment variables preserved in `.env.local`

## Step 1: Restore Clerk Integration

### 1.1 Install Clerk

```bash
bun add @clerk/clerk-react
```

### 1.2 Create `src/integrations/clerk/provider.tsx`

```typescript
import { ClerkProvider } from '@clerk/clerk-react';

const PUBLISHABLE_KEY = import.meta.env.VITE_CLERK_PUBLISHABLE_KEY;
if (!PUBLISHABLE_KEY) {
  throw new Error('Add your Clerk Publishable Key to the .env.local file');
}

export default function AppClerkProvider({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <ClerkProvider publishableKey={PUBLISHABLE_KEY} afterSignOutUrl="/">
      {children}
    </ClerkProvider>
  );
}
```

### 1.3 Create `src/integrations/clerk/header-user.tsx`

```typescript
import {
  SignedIn,
  SignedOut,
  SignInButton,
  UserButton,
} from '@clerk/clerk-react';

export default function HeaderUser() {
  return (
    <>
      <SignedIn>
        <UserButton />
      </SignedIn>
      <SignedOut>
        <SignInButton />
      </SignedOut>
    </>
  );
}
```

### 1.4 Update `src/routes/__root.tsx`

```typescript
// Add import
import ClerkProvider from '../integrations/clerk/provider';

// In RootDocument, wrap ConvexProvider:
<body>
  <ClerkProvider>
    <ConvexProvider>{children}</ConvexProvider>
  </ClerkProvider>
  <Scripts />
</body>
```

## Step 2: Restore Admin Routes with Authentication

### 2.1 Create `src/lib/auth-guard.ts`

```typescript
import { useUser } from '@clerk/clerk-react';

/**
 * Hook to get current user info in components
 */
export function useCurrentUser() {
  const { user, isLoaded } = useUser();
  
  if (!isLoaded) {
    return { userId: null, name: null, email: null, isLoading: true };
  }
  
  return {
    userId: user?.id || null,
    name: user?.fullName || user?.firstName || 'Admin',
    email: user?.primaryEmailAddress?.emailAddress || null,
    isLoading: false,
  };
}
```

### 2.2 Restore admin routes from git

```bash
# View original implementations
git log --all --full-history -- src/routes/admin.posts.index.tsx
git show <commit-hash>:src/routes/admin.posts.index.tsx > src/routes/admin.posts.index.tsx

# Files to restore:
# - src/routes/admin.index.tsx
# - src/routes/admin.posts.index.tsx
# - src/routes/admin.posts.new.tsx
# - src/routes/admin.posts.$id.edit.tsx
```

### 2.3 Add route protection with Clerk

Each admin route should check authentication. Example pattern:

```typescript
import { useUser } from '@clerk/clerk-react';
import { Navigate } from '@tanstack/react-router';

function AdminPage() {
  const { isSignedIn, isLoaded } = useUser();
  
  if (!isLoaded) return <div>Loading...</div>;
  if (!isSignedIn) return <Navigate to="/" />;
  
  return <div>Admin content...</div>;
}
```

## Step 3: Restore Sentry (Optional)

### 3.1 Install Sentry

```bash
bun add @sentry/tanstackstart-react
```

### 3.2 Create `instrument.server.mjs`

```javascript
import * as Sentry from '@sentry/tanstackstart-react'

const dsn = process.env.VITE_SENTRY_DSN

if (dsn) {
  Sentry.init({
    dsn,
    sendDefaultPii: true,
  })
}
```

### 3.3 Update `src/router.tsx`

```typescript
import * as Sentry from '@sentry/tanstackstart-react';

// In getRouter(), after router creation:
if (!router.isServer) {
  Sentry.init({
    dsn: import.meta.env.VITE_SENTRY_DSN,
    integrations: [],
  });
}
```

### 3.4 Update `package.json` scripts

```json
"dev": "NODE_OPTIONS='--import ./instrument.server.mjs' vite dev --port 3000",
"build": "bun run scripts/generate-sitemap.ts && vite build && cp instrument.server.mjs dist/server && tsc --noEmit",
"start": "node --import ./dist/server/instrument.server.mjs dist/server/index.js"
```

## Step 4: Update Configuration

### 4.1 Update `public/robots.txt`

```
Disallow: /admin/
```

### 4.2 Update CLAUDE.md

- Restore tech stack sections
- Update route counts
- Remove restoration guide reference or mark as complete

## Key Files Reference

| Component | File Path | Status |
|-----------|-----------|--------|
| BlogEditor | `src/components/BlogEditor.tsx` | Preserved |
| Posts Backend | `convex/posts.ts` | Active |
| Categories Backend | `convex/categories.ts` | Active |
| Public Blog | `src/routes/blog.index.tsx` | Active |
| Blog Post | `src/routes/blog.$slug.tsx` | Active |
| Admin Routes | `src/routes/admin.*.tsx` | In Git History |
| Clerk Provider | `src/integrations/clerk/` | In Git History |
| Auth Guard | `src/lib/auth-guard.ts` | In Git History |

## Git History Reference

All removed files are preserved in git. To view original implementations:

```bash
# List commits that touched admin files
git log --all --full-history -- src/routes/admin.posts.index.tsx

# Show file content at specific commit
git show <commit-hash>:src/routes/admin.posts.index.tsx

# Restore a file from history
git checkout <commit-hash> -- src/routes/admin.posts.index.tsx
```
