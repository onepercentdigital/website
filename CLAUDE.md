# CLAUDE.md - Project Context for AI Assistants

## Critical Rules

### Design System
- **Accent color**: `#00cccc` (cyan/teal)
- **Font**: Plus Jakarta Sans Variable (weights 200-800)
- **Single-color headlines only** - NO two-tone coloring with accent spans
- **No gradients** on marketing pages
- **Dark mode**: Black (`#0a0a0a`) with high contrast
- **Light mode**: White (`#ffffff`) with high contrast

### Typography Scale
- **Hero**: `text-5xl lg:text-7xl xl:text-8xl font-extrabold leading-tight tracking-tight`
- **Section**: `text-4xl lg:text-6xl font-bold tracking-tight`
- **Subsection**: `text-3xl lg:text-4xl font-bold`
- **Body**: `text-lg tracking-wide leading-relaxed`
- **Stats**: `text-5xl lg:text-7xl font-extrabold tracking-tight`

### Required Patterns
- Always use `Link` from `@tanstack/react-router` for internal navigation
- Use `generateMetaTags()` helper for SEO in route `head()` functions
- Include `url` parameter for social sharing meta tags
- Use `Accordion` component from shadcn/ui for FAQs
- Use `@/` path alias instead of relative imports

### CTA Standard
- **Text**: "Apply To Work With Us"
- **Route**: `/apply`

### Do Not
- Create documentation files unless explicitly requested
- Add emojis unless user requests them
- Use `<a>` tags for internal navigation (use `Link`)
- Add two-tone coloring to headlines with `<span className="text-accent">`

---

## Project Overview

**One Percent Digital** - Full-stack TypeScript marketing website with blog CMS.

- **Framework**: TanStack Start + React 19
- **Database**: Convex (real-time)
- **Deployment**: Cloudflare Workers
- **Images**: Cloudflare Images CDN

### Current State
- **23 routes** (21 marketing + 2 public blog)
- **Admin CMS**: Disabled for launch (manage via Convex dashboard)
- **Code quality**: 0 TypeScript errors, 0 linting errors

---

## Tech Stack

### Core Framework
- **TanStack Start 1.139.14** - Full-stack React framework with SSR
- **TanStack Router 1.139.14** - File-based routing with type-safe navigation
- **React 19.2.1** - Latest React with concurrent features
- **TypeScript 5.9.3** - Strict mode enabled
- **Vite 7.2.6** - Build tool and dev server

### State & Data
- **TanStack Query 5.90.11** - Async state management
- **TanStack Form 1.27.0** - Type-safe form handling
- **Convex 1.30.0** - Real-time backend database
- **Zod 4.1.13** - Schema validation (v4 breaking changes from v3)

### UI & Styling
- **Tailwind CSS 4.1.17** - Utility-first CSS (v4)
- **Shadcn/ui** - Component library on Radix UI
- **Lucide React** - Icon system
- **Plus Jakarta Sans Variable** - Primary font

### Deployment
- **Cloudflare Workers** - Edge deployment
- **Cloudflare Images** - Image CDN (5 variants configured)
- **Wrangler 4.52.1** - Deployment tooling

### Dev Tools
- **Biome 2.3.8** - Linting and formatting
- **Vitest 4.0.15** - Unit testing

### Temporarily Disabled
- **Clerk** - Authentication (see `docs/RESTORE-ADMIN-CMS.md`)
- **Sentry** - Error tracking (see `docs/RESTORE-ADMIN-CMS.md`)
- **Admin CMS routes** - Blog management (code in git history)

---

## Project Structure

```
website/
├── src/
│   ├── components/
│   │   ├── ui/              # Shadcn components
│   │   ├── BlogEditor.tsx   # Markdown editor (preserved)
│   │   ├── Logo.tsx         # Theme-aware logo
│   │   ├── Navigation.tsx   # Header with dropdowns
│   │   ├── Footer.tsx       # Multi-column footer
│   │   ├── ThemeToggle.tsx  # Dark/light mode
│   │   ├── NotFound.tsx     # 404 page
│   │   └── SEO.tsx          # Structured data
│   │
│   ├── routes/              # File-based routing
│   │   ├── __root.tsx       # Root layout
│   │   ├── index.tsx        # Homepage
│   │   ├── seo.tsx          # SEO service page
│   │   ├── geo.tsx          # GEO service page
│   │   ├── performance-marketing.tsx # Performance Marketing service page
│   │   ├── customers.tsx    # Customer showcase
│   │   ├── case-studies.tsx # Case studies
│   │   ├── apply.tsx        # Calendly booking
│   │   ├── about.tsx        # Team bios
│   │   ├── enterprise.tsx   # Enterprise solutions
│   │   ├── blog.index.tsx   # Blog listing
│   │   ├── blog.$slug.tsx   # Blog post
│   │   └── solutions.*.tsx  # 12 industry pages
│   │
│   ├── config/
│   │   └── brand.ts         # Brand config (nav, footer, SEO)
│   │
│   ├── lib/
│   │   ├── seo.ts           # SEO utilities
│   │   ├── cloudflare-images.ts # Image upload
│   │   └── utils.ts         # Shared utilities
│   │
│   ├── data/
│   │   ├── customers.ts     # Customer data
│   │   ├── case-studies.ts  # Case study data
│   │   ├── solutions.ts     # Industry solutions
│   │   └── team.ts          # Team bios
│   │
│   └── integrations/
│       ├── convex/          # Database provider
│       └── tanstack-query/  # Query client
│
├── convex/
│   ├── schema.ts            # Database schema
│   ├── posts.ts             # Post queries/mutations
│   └── categories.ts        # Category operations
│
├── scripts/
│   ├── generate-sitemap.ts  # Sitemap generation
│   ├── migrate-wordpress.ts # WordPress import
│   └── fix-featured-images.ts
│
├── docs/                    # Extended documentation
│   ├── RESTORE-ADMIN-CMS.md
│   ├── BLOG-CMS.md
│   ├── CLOUDFLARE-IMAGES.md
│   └── WORDPRESS-MIGRATION.md
│
└── public/
    ├── sitemap.xml          # Auto-generated
    └── robots.txt
```

---

## Key Files Reference

| Purpose | File Path |
|---------|-----------|
| Brand config | `src/config/brand.ts` |
| SEO utilities | `src/lib/seo.ts` |
| Image upload | `src/lib/cloudflare-images.ts` |
| Blog schema | `convex/schema.ts` |
| Post operations | `convex/posts.ts` |
| Category operations | `convex/categories.ts` |
| Blog editor | `src/components/BlogEditor.tsx` |
| Global styles | `src/styles.css` |
| Root layout | `src/routes/__root.tsx` |
| Navigation | `src/components/Navigation.tsx` |

---

## Development Workflow

### Commands

```bash
# Install dependencies
bun install

# Start dev server (port 3000)
bun run dev

# Start Convex backend (separate terminal)
npx convex dev

# Type check
bun run type

# Lint
bun run lint

# Format
bun run format

# Run all checks
bun run check-all

# Build for production
bun run build

# Deploy to Cloudflare
bun run deploy
```

### Environment Variables

Required in `.env.local`:
```bash
VITE_CONVEX_URL=https://...convex.cloud
CONVEX_DEPLOYMENT=...
CLOUDFLARE_ACCOUNT_ID=...
CLOUDFLARE_API_TOKEN=...
```

---

## Code Standards

### TypeScript
- Strict mode enabled
- No unused variables (`noUnusedLocals`, `noUnusedParameters`)
- Use `@/` path alias for imports

### Biome
- Single quotes for strings
- 2-space indentation
- Sorted Tailwind classes
- Auto-organize imports

### React
- Functional components only
- File-based routing in `src/routes/`
- Use `Link` for internal navigation

### Auto-Generated Files (Do Not Edit)
- `src/routeTree.gen.ts`
- `convex/_generated/`

---

## Common Tasks

### Adding a New Page

1. Create file in `src/routes/` (e.g., `src/routes/pricing.tsx`)
2. Use `createFileRoute` from `@tanstack/react-router`
3. Include SEO meta tags in `head()` function
4. Add to navigation in `src/config/brand.ts` if needed

```tsx
import { createFileRoute } from '@tanstack/react-router'
import { generateMetaTags } from '@/lib/seo'

export const Route = createFileRoute('/pricing')({
  component: PricingPage,
  head: () => generateMetaTags({
    title: 'Pricing',
    description: 'Our pricing plans.',
    url: 'https://onepercentseo.com/pricing',
  }),
})

function PricingPage() {
  return <div>Pricing content</div>
}
```

### Adding a Shadcn Component

```bash
pnpx shadcn@latest add button
```

### Adding SEO Structured Data

```tsx
import { SEO } from '@/components/SEO'
import { getServiceSchema } from '@/lib/seo'

<SEO structuredData={[
  { type: 'Service', data: getServiceSchema({...}) }
]} />
```

### Creating a Convex Table

1. Add table to `convex/schema.ts`
2. Create query/mutation file in `convex/`
3. Use `useQuery` or `useMutation` hooks in React

### Adding to Navigation

Update `navigation.main` in `src/config/brand.ts`:
- For dropdown items, add to `items` array
- For direct links, use `type: 'link'`

---

## SEO Implementation

Every route should include meta tags:

```tsx
head: () => generateMetaTags({
  title: 'Page Title',
  description: 'Page description under 160 chars.',
  url: 'https://onepercentseo.com/page',
})
```

For structured data:
```tsx
<SEO structuredData={[
  { type: 'Organization', data: getOrganizationSchema() },
]} />
```

Available schema helpers in `src/lib/seo.ts`:
- `getOrganizationSchema()`
- `getLocalBusinessSchema()`
- `getArticleSchema()`
- `getBreadcrumbSchema()`
- `getServiceSchema()`

---

## Blog System

### Current State
- Public routes active (`/blog`, `/blog/[slug]`)
- Admin routes disabled (manage via Convex dashboard)
- BlogEditor component preserved for future use

### Convex Schema
```typescript
posts: {
  title, slug, content, excerpt, featuredImage,
  categoryId, authorId, authorName,
  status: 'draft' | 'published' | 'scheduled',
  publishedAt, scheduledFor, modifiedAt,
  seo: { metaTitle, metaDescription, ogImage, noindex }
}
```

### Using Convex Queries
```typescript
// CORRECT - Use Convex native hooks
import { useQuery } from 'convex/react'
const posts = useQuery(api.posts.list, {})

// WRONG - Don't use TanStack Query wrapper
import { useQuery } from '@tanstack/react-query'
```

---

## External Documentation

Detailed guides for specific features:

- **[docs/RESTORE-ADMIN-CMS.md](docs/RESTORE-ADMIN-CMS.md)** - Re-enable admin routes with Clerk auth
- **[docs/BLOG-CMS.md](docs/BLOG-CMS.md)** - Blog system architecture and features
- **[docs/CLOUDFLARE-IMAGES.md](docs/CLOUDFLARE-IMAGES.md)** - Image upload setup guide
- **[docs/WORDPRESS-MIGRATION.md](docs/WORDPRESS-MIGRATION.md)** - WordPress import instructions
- **[docs/SOLUTIONS-NAMING.md](docs/SOLUTIONS-NAMING.md)** - Why "Solutions" vs "Industries" naming

---

## Resources

- [TanStack Start Docs](https://tanstack.com/start)
- [TanStack Router Docs](https://tanstack.com/router)
- [Convex Docs](https://docs.convex.dev)
- [Shadcn UI](https://ui.shadcn.com)
- [Tailwind CSS v4](https://tailwindcss.com)
- [Cloudflare Images](https://developers.cloudflare.com/images/)
