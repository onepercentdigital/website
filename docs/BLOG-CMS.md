# Blog CMS Implementation Guide

This project includes a complete blog CMS built with Convex, TanStack Start, and Cloudflare Images.

## Overview

- **Backend**: Convex (real-time database with TypeScript schema)
- **Frontend**: TanStack Start (SSR-ready React framework)
- **Images**: Cloudflare Images (CDN-hosted optimization)
- **Content**: Markdown rendering with syntax highlighting
- **Migration**: WordPress XML import with automatic image migration

## Architecture

### Data Flow

1. Blog posts stored in Convex `posts` table
2. Categories stored in Convex `categories` table
3. Images uploaded to Cloudflare Images via server functions
4. Public routes fetch published posts client-side
5. Admin routes allow CRUD operations on posts
6. Sitemap auto-generates at build time

### Key Design Decisions

- **Client-side data fetching**: Uses Convex's native `useQuery` hook (not TanStack Query)
- **SSR-compatible**: All routes work with server-side rendering
- **Simple editor**: Markdown textarea with live preview (upgradeable to WYSIWYG)
- **Manual publishing**: Scheduled posts require manual publish action (upgradeable to cron)
- **Single author**: Built for single-author blogs (multi-author ready via schema)

## Setup Instructions

### Prerequisites

1. **Convex Account**: Sign up at https://convex.dev
2. **Cloudflare Images**: Enable in Cloudflare dashboard ($5/month + $1/100k images)
3. **Environment Variables**: Configure Convex and Cloudflare credentials

### Step 1: Install Dependencies

```bash
# Core blog dependencies (already installed)
bun add react-markdown remark-gfm rehype-highlight rehype-raw rehype-sanitize highlight.js

# WordPress migration dependencies
bun add xml2js turndown
bun add -d @types/xml2js
```

### Step 2: Configure Convex

1. **Initialize Convex** (if not already done):
```bash
npx convex dev
```

2. **Deploy Schema**: The schema is in `convex/schema.ts`:
```typescript
posts: defineTable({
  title: v.string(),
  slug: v.string(),
  content: v.string(),
  excerpt: v.optional(v.string()),
  featuredImage: v.optional(v.string()),
  categoryId: v.optional(v.id('categories')),
  authorId: v.string(),
  authorName: v.string(),
  status: v.union(v.literal('draft'), v.literal('published'), v.literal('scheduled')),
  publishedAt: v.optional(v.number()),
  scheduledFor: v.optional(v.number()),
  modifiedAt: v.number(),
  seo: v.object({
    metaTitle: v.optional(v.string()),
    metaDescription: v.optional(v.string()),
    ogImage: v.optional(v.string()),
    noindex: v.optional(v.boolean()),
  }),
  relatedPostIds: v.optional(v.array(v.id('posts'))),
})
```

### Step 3: Create Initial Categories

Create categories via Convex dashboard or script:

```typescript
// scripts/seed-categories.ts
import { ConvexHttpClient } from 'convex/browser'
import { api } from '../convex/_generated/api'

const convex = new ConvexHttpClient(process.env.VITE_CONVEX_URL!)

const categories = [
  { name: 'SEO', slug: 'seo', description: 'Search Engine Optimization articles' },
  { name: 'GEO', slug: 'geo', description: 'Generative Engine Optimization articles' },
  { name: 'Case Studies', slug: 'case-studies', description: 'Client success stories' },
]

for (const category of categories) {
  await convex.mutation(api.categories.create, category)
  console.log(`Created category: ${category.name}`)
}
```

### Step 4: Test Blog Routes

**Public Routes:**
- `/blog` - Blog index with post cards
- `/blog/{slug}` - Individual post pages

**Admin Routes (currently disabled):**
- `/admin` - Redirects to posts listing
- `/admin/posts` - Post management table
- `/admin/posts/new` - Create new post
- `/admin/posts/{id}/edit` - Edit existing post

## Blog Features

### Content Management

**Create Post:**
1. Navigate to `/admin/posts/new`
2. Fill in title (slug auto-generates)
3. Write content in Markdown
4. Upload featured image (Cloudflare)
5. Select category
6. Set status (draft/published/scheduled)
7. Add SEO meta fields
8. Click "Create Post"

### Markdown Support

**Supported Syntax:**
- Headings (`# H1` through `###### H6`)
- Bold, italic, strikethrough
- Ordered and unordered lists
- Links (internal and external)
- Images (via Markdown or HTML)
- Code blocks with syntax highlighting
- Tables (GitHub Flavored Markdown)
- Blockquotes
- Horizontal rules
- HTML (sanitized for security)

### Image Management

**Featured Images:**
- Upload via admin form
- Automatically resizes to multiple variants
- CDN delivery with global edge network
- WebP conversion for performance

**Image Variants:**
- `thumbnail` - 400px (blog index cards)
- `medium` - 800px (inline content)
- `large` - 1200px (featured images)
- `og` - 1200x630 (social sharing)

### SEO Features

**Per-Post Optimization:**
- Custom meta title (defaults to post title)
- Custom meta description (defaults to excerpt)
- Custom Open Graph image (defaults to featured image)
- `noindex` flag for draft/test posts

**Automatic Features:**
- Article structured data (Schema.org)
- Canonical URLs
- Open Graph tags
- Twitter Card tags
- Breadcrumb navigation

## SSR & SEO Technical Details

### Server-Side Rendering

**How it works:**
1. TanStack Start renders initial HTML on server
2. Page shell includes loading state
3. Client hydrates and fetches data from Convex
4. Content displays with smooth transition

**SSR-Compatible Patterns:**
- No `window` or `document` access before mount
- Loading states for all async data
- Error boundaries for graceful failures
- Server functions for uploads (marked with `createServerFn`)

### SEO Implementation

**Meta Tags:**
```typescript
head: () => generateMetaTags({
  title: 'Blog | SEO & GEO Insights',
  description: 'Expert insights on search optimization...',
  url: 'https://op.digital/blog',
})
```

**Structured Data:**
```typescript
const articleSchema = getArticleSchema({
  headline: post.title,
  description: post.excerpt || '',
  url: `https://op.digital/blog/${post.slug}`,
  image: post.featuredImage || '',
  datePublished: new Date(post.publishedAt!).toISOString(),
  dateModified: new Date(post.modifiedAt).toISOString(),
  author: post.authorName,
})
```

## Troubleshooting

### Blog posts not loading with "No queryFn" error

**Solution**: Use Convex native hooks, not TanStack Query:
```typescript
// WRONG
import { convexQuery } from '@convex-dev/react-query'
const { data } = useQuery(convexQuery(api.posts.list, {}))

// CORRECT
import { useQuery } from 'convex/react'
const posts = useQuery(api.posts.list, {})
```

### TypeScript errors about missing Convex types

**Solution**: Start Convex dev server:
```bash
npx convex dev
```

### Navigation causing full page reloads

**Solution**: Use `Link` component for internal navigation:
```typescript
import { Link } from '@tanstack/react-router'

// WRONG
<a href={`/blog/${post.slug}`}>

// CORRECT
<Link to={`/blog/${post.slug}` as any}>
```

## File Structure

```
convex/
├── schema.ts              # Database schema (posts, categories)
├── posts.ts               # Post queries/mutations
├── categories.ts          # Category queries/mutations
└── _generated/            # Auto-generated types

src/
├── routes/
│   ├── blog.index.tsx     # Blog listing page
│   ├── blog.$slug.tsx     # Individual post page
│   └── admin.*.tsx        # Admin routes (in git history)
│
├── components/
│   └── BlogEditor.tsx     # Markdown editor component
│
└── lib/
    ├── cloudflare-images.ts  # Image upload utilities
    └── seo.ts                # SEO helpers

scripts/
├── migrate-wordpress.ts      # WordPress import script
├── fix-featured-images.ts    # Featured image repair
└── generate-sitemap.ts       # Sitemap generation
```

## Extension Ideas

**Short-term:**
- Add Clerk authentication to admin routes
- Implement category filtering on blog index
- Add reading time calculation
- Implement pagination or infinite scroll

**Long-term:**
- Rich WYSIWYG editor (TipTap or Lexical)
- Related posts UI with manual selection
- Blog search with full-text indexing
- Comment system
- Post analytics and engagement metrics
- Scheduled publishing via Convex cron
