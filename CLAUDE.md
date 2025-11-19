# CLAUDE.md - Project Context for AI Assistants

## Project Overview

This is a **full-stack TypeScript web application** being developed as a replacement for **onepercentseo.com**. Built on TanStack Start with a modern design system inspired by Vercel, it delivers SEO-optimized marketing content and a WordPress-like blog CMS.

### Repository
- **Name**: seo-website
- **Organization**: onepercentdigital
- **Git Repository**: https://github.com/onepercentdigital/seo-website.git
- **Current Branch**: main
- **Package Manager**: Bun 1.3.2

### Future Rebranding
The site is designed for easy rebranding:
- Current: **One Percent SEO** (onepercentseo.com)
- Potential: **One Percent Digital** (multi-vertical agency site)

All branding is centralized in `src/config/brand.ts` for quick updates.

## Tech Stack

### Core Framework
- **TanStack Start** - Full-stack React framework with SSR, streaming, and server functions
- **TanStack Router** - File-based routing with type-safe navigation
- **React 19.2.0** - Latest React with concurrent features
- **TypeScript 5.9.3** - Strict mode with no unused variables
- **Vite 7.2.2** - Lightning-fast build tool and dev server

### State Management & Data Fetching
- **TanStack Query 5.90.10** - Async state management, caching, and server synchronization
- **TanStack Store 0.8.0** - Lightweight client state with derived state support
- **TanStack Form 1.25.0** - Type-safe form handling with validation
- **Convex 1.29.3** - Real-time backend database with TypeScript schema

### UI & Styling
- **Tailwind CSS 4.1.17** - Utility-first CSS framework (latest v4)
- **Plus Jakarta Sans Variable** - Primary font family (weights 200-800 via @fontsource-variable)
- **Shadcn/ui** - High-quality component library on Radix UI primitives
- **Radix UI** - Unstyled, accessible component primitives
- **Lucide React** - Beautiful, consistent icon system
- **tw-animate-css** - Tailwind animation utilities
- **class-variance-authority** - Type-safe component variants

### Design System
- **Accent Color**: `#00cccc` (cyan/teal)
- **Dark Mode**: Primarily black (`#0a0a0a`) with high contrast
- **Light Mode**: Primarily white (`#ffffff`) with high contrast
- **Typography**: Plus Jakarta Sans Variable - Extreme scale with 800 for hero headings, 700 for section headings, 400 for body text
- **Visual Style**: Inspired by Vercel.com with subtle animations and dramatic typography
- **Theme Toggle**: Respects system preferences with manual override

### AI Integration
- **Anthropic AI SDK 2.0.45** - Claude AI integration for chat and assistance
- **Vercel AI SDK 5.0.97** - Unified AI/ML interface
- **MCP (Model Context Protocol) 1.22.0** - AI context management and tool use

### Authentication & Backend
- **Clerk 5.56.0** - Complete authentication and user management
- **User Roles**: Admin, Editor, Viewer
- **App Domain**: app.onepercentseo.com (for client/admin dashboard)
- **Convex** - Real-time backend with comprehensive blog schema

### Deployment & Monitoring
- **Cloudflare Workers** - Edge deployment with global CDN
- **Cloudflare Images** - Image optimization and CDN delivery (planned for customer logos)
- **Wrangler 4.49.0** - Cloudflare deployment tooling
- **Sentry 10.26.0** - Error tracking, performance monitoring, and instrumentation
- **Plausible Analytics** - Privacy-focused web analytics (planned)

### Developer Experience
- **Biome 2.3.6** - Ultra-fast linting and formatting (ESLint/Prettier replacement)
- **Vitest 4.0.10** - Blazing fast unit test framework
- **Testing Library** - React component testing utilities
- **TanStack DevTools** - Integrated debugging for Router, Query, and Store
- **TypeScript path aliases**: `@/*` → `./src/*`

## Project Structure

```
seo-website/
├── src/
│   ├── components/          # React components
│   │   ├── ui/             # Shadcn components (button, input, select, slider, etc.)
│   │   ├── Logo.tsx        # Theme-aware SVG logo component
│   │   ├── Navigation.tsx  # Header with dropdowns and theme toggle
│   │   ├── Footer.tsx      # Multi-column footer with CTA
│   │   ├── ThemeToggle.tsx # Dark/light mode switcher
│   │   ├── NotFound.tsx    # Branded 404 page component
│   │   └── SEO.tsx         # Structured data injection component
│   │
│   ├── routes/             # File-based routing (TanStack Router)
│   │   ├── __root.tsx      # Root layout with Navigation + Footer
│   │   ├── index.tsx       # Homepage with hero, services, testimonials ✅ COMPLETE
│   │   ├── seo.tsx         # SEO service page ✅ COMPLETE
│   │   ├── geo.tsx         # GEO service page ✅ COMPLETE
│   │   ├── customers.tsx   # Customer showcase ✅ COMPLETE
│   │   ├── audit.tsx       # Free AI Search Audit booking (Calendly placeholder)
│   │   ├── case-studies.tsx # Case studies (placeholder)
│   │   ├── enterprise.tsx  # Enterprise solutions page (placeholder)
│   │   ├── solutions.tsx   # Solutions landing (placeholder)
│   │   └── blog.index.tsx  # Blog listing (to be implemented)
│   │
│   ├── config/             # Configuration files
│   │   └── brand.ts        # Brand config (name, colors, nav, footer, SEO)
│   │
│   ├── lib/                # Utilities and helpers
│   │   ├── seo.ts          # SEO utilities and structured data generators
│   │   └── utils.ts        # Shared utilities (cn, etc.)
│   │
│   ├── data/               # Data files and content
│   │   └── customers.ts    # Customer data with TypeScript interfaces
│   │
│   ├── integrations/       # Third-party service wrappers
│   │   ├── clerk/          # Authentication provider
│   │   ├── convex/         # Database provider
│   │   └── tanstack-query/ # Query client configuration
│   │
│   ├── env.ts              # Type-safe environment variables (T3 Env)
│   ├── router.tsx          # Router configuration with Sentry
│   ├── routeTree.gen.ts    # Auto-generated route tree (do not edit)
│   └── styles.css          # Global styles with Plus Jakarta Sans Variable
│
├── convex/                  # Convex backend
│   ├── schema.ts           # Database schema (posts, categories)
│   ├── tsconfig.json       # Convex TypeScript config
│   └── _generated/         # Auto-generated Convex types
│
├── public/                  # Static assets
│   ├── customer-logos/     # Customer logo images (WebP format)
│   ├── favicon.ico         # Site favicon
│   ├── logo.svg            # Brand logo
│   └── robots.txt          # Search engine instructions
│
├── biome.json              # Biome linting and formatting config
├── tsconfig.json           # TypeScript configuration
├── vite.config.ts          # Vite build configuration
├── wrangler.jsonc          # Cloudflare Workers deployment config
└── package.json            # Dependencies and scripts
```

## Current Implementation Status

### ✅ Completed Features

#### Design System & Theming
- Plus Jakarta Sans Variable font family installed and configured (weights 200-800)
- High-contrast dark/light mode with `#00cccc` accent
- Theme toggle with system preference detection and synchronized across navigation/footer
- Vercel-inspired design with extreme typography scale
- Responsive design for mobile/tablet/desktop

#### Core Components
- **Logo Component**: Theme-aware SVG brand logo with optional wordmark
- **Navigation**: Sticky header with hover dropdowns (no gaps), synchronized theme toggle
- **Footer**: Multi-column layout with services, resources, company, social links
- **Theme Toggle**: Accessible button with sun/moon icons, uses custom events for sync
- **NotFound Component**: Branded 404 page with quick links and gradient background
- **SEO Component**: Structured data (JSON-LD) injection

#### Homepage (Complete)
1. **Hero**: "Dominate your Industry with AI and Search Optimization" with extreme typography
2. **Services**: GEO and SEO feature cards with checkmarks and detailed benefits
3. **Social Proof**: Stats (95% retention, $200M+ revenue, 300% organic traffic growth)
4. **Case Study Highlight**: Featured case study with metrics and visual
5. **Testimonials**: Three client testimonials with avatars
6. **Final CTA**: Gradient background with "Join the Top 1%" messaging
7. **Typography**: Extreme scale applied - hero at `text-8xl`, stats at `text-8xl`, dramatic impact

#### Service Pages (Complete)
1. **GEO Service Page** (`/geo`):
   - 7 comprehensive sections: Hero, What is GEO, Process, Benefits, Services, Results, FAQ
   - 6-question FAQ accordion with detailed answers
   - Extreme typography throughout
   - Service structured data for SEO
   - All content written and production-ready

2. **SEO Service Page** (`/seo`):
   - 7 comprehensive sections: Hero, What is SEO, Process, Benefits, Services, Results, FAQ
   - 7-question FAQ accordion including pricing information
   - 6 service offering feature grids (Technical SEO, Content, Link Building, On-Page, Local SEO, Analytics)
   - Extreme typography throughout
   - Service structured data for SEO
   - All content written and production-ready

#### SEO Infrastructure
- `src/lib/seo.ts`: Meta tag generation utilities
- Structured data helpers for Organization, LocalBusiness, Article, BreadcrumbList, Service
- Per-page SEO control via route `head()` function
- Open Graph and Twitter Card support with `og:url` and `twitter:url` tags
- Canonical URLs on all pages
- Default SEO configuration in brand config

#### Blog Schema (Convex)
```typescript
posts: {
  // Content
  title, slug, content (Markdown/MDX), excerpt, featuredImage
  
  // Taxonomy
  categoryId (optional)
  
  // Author
  authorId (Clerk user ID), authorName (overridable string)
  
  // Publishing
  status: 'draft' | 'published' | 'scheduled'
  publishedAt, scheduledFor, modifiedAt
  
  // SEO
  seo: { metaTitle, metaDescription, ogImage, noindex }
  
  // Relationships
  relatedPostIds (manual selection)
}

categories: {
  name, slug, description
}
```

Indexes: by_slug, by_status, by_published_date, by_modified_date, by_category, by_author

#### Navigation Structure
**Visual Categories (Dropdowns):**
- **Services** → GEO (`/geo`), SEO (`/seo`)
- **Resources** → Customers (`/customers`), Blog (`/blog`), Case Studies (`/case-studies`)
- **Solutions** → Coming Soon (`/solutions`)
- **Enterprise** (direct link) → `/enterprise`
- **Get Your Free AI Search Audit** (CTA button) → `/audit`

**Note:** Services, Resources, and Solutions are visual navigation categories only. URLs use flat structure for better UX and SEO.

#### Route Status Summary
**✅ Production-Ready Routes:**
- `/` - Homepage with all 6 sections, extreme typography, SEO optimized
- `/geo` - GEO service page with 7 comprehensive sections and FAQ
- `/seo` - SEO service page with 7 comprehensive sections and FAQ
- `/customers` - Customer showcase with 10 client logos, testimonials, and industry breakdown
- `404` - Branded NotFound component with quick links

**⚠️ Placeholder Routes** (Basic structure, needs content):
- `/audit` - Free AI Search Audit booking (needs Calendly embed)
- `/case-studies` - Case studies (needs case study content)
- `/solutions` - Solutions landing (needs content strategy)
- `/enterprise` - Enterprise solutions (needs enterprise-specific content)
- `/blog` - Blog index (needs blog CMS implementation)

### 🚧 To Be Implemented

#### Blog CMS (Next Priority)
1. **Admin Routes** (`/admin/*`)
   - `/admin` - Dashboard or login redirect
   - `/admin/posts` - Post listing with filters (draft/published/scheduled)
   - `/admin/posts/new` - Create new post
   - `/admin/posts/[id]/edit` - Edit existing post

2. **Blog Editor**
   - WYSIWYG editor with visual/MDX toggle
   - Featured image upload to Cloudflare Images
   - SEO meta fields (title, description, OG image)
   - Category selection
   - Author name override
   - Status and scheduling
   - Related posts picker
   - Internal link component integration

3. **Public Blog Routes**
   - `/blog` - Post listing with category filters
   - `/blog/[slug]` - Individual post page with related posts
   - Automatic sitemap.xml generation

4. **Blog Features**
   - Auto-related posts by category + recency
   - Manual related post selection
   - Draft posts visible only to authenticated users
   - Scheduled posts (manual publish at scheduled time)
   - Last modified date display

#### Content Pages
- Create case study content for `/case-studies`
- Build enterprise page content for `/enterprise`
- Define Solutions pages for `/solutions`

#### Integrations
- **Calendly**: Embed on `/audit` page for Free AI Search Audit booking
- **Cloudflare Images**: Upload and optimization utilities
- **Plausible Analytics**: Privacy-focused tracking
- **WordPress Import**: Migration script for blog data

#### Sitemap & SEO
- Automatic sitemap.xml generation
- robots.txt configuration
- Open Graph image templates or upload system

### 🗑️ Cleanup Tasks
- ✅ Remove demo routes (`src/routes/demo/*`) - **COMPLETED (18 files deleted)**
- ✅ Remove example routes (`src/routes/example.guitars/*`) - **COMPLETED (2 files deleted)**
- ✅ Remove StoreDevtools import from `__root.tsx` - **COMPLETED**
- ✅ Remove demo-store.ts from lib/ - **COMPLETED**
- ✅ Remove todos.ts from convex/ - **COMPLETED**
- ✅ All cleanup tasks completed - codebase is clean

## Environment Variables

### Required Environment Variables
Configure these in `.env.local`:

```bash
# Clerk Authentication
VITE_CLERK_PUBLISHABLE_KEY=pk_test_...

# Convex Database
VITE_CONVEX_URL=https://...convex.cloud
CONVEX_DEPLOYMENT=...

# Sentry Monitoring
VITE_SENTRY_DSN=https://...@sentry.io/...

# AI Integration (if needed)
ANTHROPIC_API_KEY=sk-ant-...

# Cloudflare Images (to be added)
# CLOUDFLARE_ACCOUNT_ID=...
# CLOUDFLARE_API_TOKEN=...
```

### Environment Variable Validation
Uses **T3 Env** for runtime validation:
- Client variables **must** be prefixed with `VITE_`
- Type-safe access via `import { env } from '@/env'`
- Empty strings treated as undefined

## Development Workflow

### Getting Started
```bash
# Install dependencies
bun install

# Start development server (port 3000)
bun run dev

# Start Convex backend (in separate terminal)
npx convex dev
```

The dev server runs at **http://localhost:3000/**

### Code Quality & Testing
```bash
# Type checking
bun run type

# Linting
bun run lint

# Formatting
bun run format

# Run all checks
bun run check-all

# Run tests
bun run test
```

### Building & Deployment
```bash
# Production build
bun run build

# Preview production build
bun run serve

# Deploy to Cloudflare Workers
bun run deploy
```

## Code Standards & Conventions

### TypeScript
- **Strict mode enabled** - No implicit any, strict null checks
- **No unused variables** - `noUnusedLocals` and `noUnusedParameters` enforced
- **Path aliases** - Use `@/` instead of relative imports
- **Type safety everywhere** - Prefer explicit types over inference for public APIs

### Biome Configuration
- **Single quotes** for JavaScript/TypeScript strings
- **Space indentation** (2 spaces)
- **Sorted Tailwind classes** - Enforced via `useSortedClasses` rule
- **Auto-organize imports** on format
- **Files excluded**: `src/routeTree.gen.ts`, `src/styles.css`

### React Patterns
- **Functional components** only
- **Hooks** for state and side effects
- **File-based routing** - Add files to `src/routes/` for new pages
- **Provider composition** - Root wraps Navigation → Clerk → Convex → TanStack Query → Footer
- **Type-safe routing** - Use `Link` component from `@tanstack/react-router`
- **Internal links** - Always use `Link` for instant client-side navigation

### Component Organization
- **UI components** in `src/components/ui/` (Shadcn managed)
- **Feature components** in `src/components/`
- **Route components** in `src/routes/`
- **One component per file** for better code splitting

### SEO Best Practices
1. **Per-Route Meta Tags**: Use `head()` function with `generateMetaTags()` helper
2. **Structured Data**: Include Schema.org JSON-LD via `<SEO>` component
3. **Internal Linking**: Use TanStack Router `Link` for fast navigation
4. **Image Optimization**: Use Cloudflare Images with responsive sizing
5. **SSR by Default**: All marketing pages are server-side rendered

## Key Configuration Files

### `src/config/brand.ts`
Centralized brand configuration:
- Brand name, display name, tagline
- Domains (main site, app subdomain)
- Logo configuration
- Social media links
- Contact information
- Default SEO meta tags
- Navigation structure
- Footer structure

**To rebrand**: Update this file and styles.css color variables.

### `src/lib/seo.ts`
SEO utilities:
- `generateMetaTags()` - Create meta tags for routes
- `getOrganizationSchema()` - Organization structured data
- `getLocalBusinessSchema()` - LocalBusiness structured data
- `getArticleSchema()` - Article structured data for blog posts
- `getBreadcrumbSchema()` - Breadcrumb navigation

### `vite.config.ts`
Plugins in order:
1. TanStack DevTools
2. Cloudflare integration (SSR environment)
3. vite-tsconfig-paths (path aliases)
4. Tailwind CSS
5. TanStack Start
6. Vite React

### `wrangler.jsonc`
- Name: seo-website
- Compatibility: 2025-09-02
- Node.js compatibility enabled
- Entry: `@tanstack/react-start/server-entry`

## Important Notes for AI Assistants

### Brand Configuration
All branding is centralized in `src/config/brand.ts`:
- Brand name and display name
- Navigation and footer structure
- Default SEO settings
- Contact information

**Always reference this file** when creating new pages or components.

### SEO Implementation
Every route should include:
```tsx
import { generateMetaTags } from '@/lib/seo'

export const Route = createFileRoute('/your-route')({
  component: YourComponent,
  head: () => generateMetaTags({
    title: 'Page Title',
    description: 'Page description',
    // Optional: ogImage, canonical, noindex
  }),
})
```

For structured data, use the `<SEO>` component:
```tsx
<SEO structuredData={[
  { type: 'Organization', data: getOrganizationSchema() },
  { type: 'Article', data: getArticleSchema({...}) }
]} />
```

### Internal Links
Always use TanStack Router's `Link` component:
```tsx
import { Link } from '@tanstack/react-router'

<Link to="/services/geo">Learn about GEO</Link>
```

This ensures instant client-side navigation and type-safe routes.

### Convex Schema Patterns
- Use `v.id("tableName")` for foreign keys
- All documents have `_id` and `_creationTime` automatically
- Create indexes for common queries: `.index("indexName", ["field1", "field2"])`
- Use `v.union()` for discriminated unions
- Use `v.optional()` for nullable fields

### Shadcn Component Installation
```bash
pnpx shadcn@latest add <component-name>
```

### File Naming Conventions
- **Route files** follow TanStack Router conventions:
  - `index.tsx` for index routes (`/route/`)
  - `route.tsx` for layout routes
  - `$param.tsx` for dynamic segments
  - `route.name.tsx` for nested routes (`/route/name`)

### Auto-Generated Files (Do Not Edit)
- `src/routeTree.gen.ts` - Generated by TanStack Router
- `convex/_generated/` - Generated by Convex

### Theme Toggle Implementation
The theme toggle:
1. Detects system preference on mount
2. Checks localStorage for manual preference
3. Listens for system changes
4. Updates `<html class="dark">` and localStorage

**Do not** duplicate theme logic - use the existing `ThemeToggle` component.

## Common Tasks

### Adding a New Page
1. Create file in `src/routes/` (e.g., `src/routes/about.tsx`)
2. Use `createFileRoute` from `@tanstack/react-router`
3. Include SEO meta tags in `head()` function
4. Add to navigation config in `src/config/brand.ts` if needed

Example:
```tsx
import { createFileRoute } from '@tanstack/react-router'
import { generateMetaTags } from '@/lib/seo'

export const Route = createFileRoute('/about')({
  component: AboutPage,
  head: () => generateMetaTags({
    title: 'About Us',
    description: 'Learn about our mission and team.',
  }),
})

function AboutPage() {
  return <div>About content</div>
}
```

### Adding a Shadcn Component
```bash
pnpx shadcn@latest add button
```

### Creating a Convex Table
1. Add table to `convex/schema.ts`
2. Create query/mutation file in `convex/`
3. Use `useQuery` or `useMutation` hooks in React

### Adding to Navigation
1. Update `navigation.main` in `src/config/brand.ts`
2. For dropdown items, add to `items` array
3. For direct links, use `type: 'link'`

### Rebranding the Site
1. Update `src/config/brand.ts`:
   - Change `name`, `displayName`, `tagline`, `domain`
   - Update social links and contact info
2. Update `src/styles.css` if changing accent color
3. Update logo SVG in `src/components/Logo.tsx` if needed

## Resources & Documentation

- [TanStack Start Docs](https://tanstack.com/start)
- [TanStack Router Docs](https://tanstack.com/router)
- [TanStack Query Docs](https://tanstack.com/query)
- [Convex Docs](https://docs.convex.dev)
- [Clerk Docs](https://clerk.com/docs)
- [Shadcn UI](https://ui.shadcn.com)
- [Tailwind CSS v4](https://tailwindcss.com)
- [Cloudflare Images](https://developers.cloudflare.com/images/)
- [Schema.org](https://schema.org/)

## Detailed Implementation Roadmap

### Phase 1: Blog CMS Foundation (Next)

#### 1.1 Convex Queries & Mutations
Create `convex/posts.ts`:
- `list()` - Get all posts with filters (status, category, author)
- `getBySlug(slug)` - Get single post for public view
- `getById(id)` - Get single post for editing
- `create()` - Create new post
- `update(id, data)` - Update existing post
- `delete(id)` - Delete post
- `publish(id)` - Publish draft post
- `getRelatedPosts(postId)` - Auto-fetch related by category + manual selections

Create `convex/categories.ts`:
- `list()` - Get all categories
- `create()` - Create category
- `update()` - Update category

#### 1.2 Admin Authentication & Routes
1. Create protected route wrapper for `/admin/*`
2. Check Clerk authentication and role (admin/editor)
3. Redirect to Clerk sign-in if not authenticated
4. Create admin layout component with sidebar navigation

Routes to create:
- `src/routes/admin.index.tsx` - Admin dashboard or redirect to posts
- `src/routes/admin.posts.index.tsx` - Post listing table
- `src/routes/admin.posts.new.tsx` - Create new post form
- `src/routes/admin.posts.$id.edit.tsx` - Edit post form

#### 1.3 Blog Editor Component
Create `src/components/BlogEditor.tsx`:
- Rich text editor (consider: TipTap, Lexical, or react-markdown with preview)
- Toggle between WYSIWYG and MDX source view
- Toolbar: Bold, Italic, Headings, Lists, Links, Images
- Image upload to Cloudflare Images
- Link picker that uses TanStack Router's `Link` component for internal links
- Auto-save to drafts

Form fields:
- Title (required)
- Slug (auto-generated from title, editable)
- Content (MDX/Markdown)
- Excerpt (optional, auto-generated from content if empty)
- Featured Image (Cloudflare Images URL)
- Category (select dropdown)
- Author Name (default to current user, overridable)
- Status (draft/published/scheduled radio)
- Scheduled Date (datetime picker, shown if scheduled selected)
- SEO Meta Title
- SEO Meta Description
- OG Image (default to featured image)
- Related Posts (multi-select with search)

#### 1.4 Cloudflare Images Integration
Create `src/lib/cloudflare-images.ts`:
- `uploadImage(file)` - Upload to Cloudflare Images
- `getImageUrl(id, variant)` - Generate optimized image URLs
- `deleteImage(id)` - Delete image from Cloudflare

Image variants to configure:
- `thumbnail` - 400px wide
- `medium` - 800px wide
- `large` - 1200px wide
- `og` - 1200x630 for Open Graph

#### 1.5 Public Blog Routes
Create `src/routes/blog.index.tsx`:
- List published posts (paginated)
- Filter by category
- Search by title/excerpt
- Sort by published date (newest first)
- Card grid layout with featured image, title, excerpt, date

Create `src/routes/blog.$slug.tsx`:
- Full post content rendering
- Featured image with proper alt text
- Author and dates (published, last modified)
- Category tag
- Related posts section (3-4 posts)
- SEO meta tags from post.seo
- Article structured data (Schema.org)
- Breadcrumb navigation
- Social share buttons (optional)

### Phase 2: Content Pages

#### 2.1 Service Pages
✅ **COMPLETED** - Both service pages are production-ready:

`src/routes/geo.tsx` - **COMPLETE**:
- ✅ Hero section with GEO definition and extreme typography
- ✅ "What is GEO?" explanation section
- ✅ 4-step process breakdown with icons
- ✅ 6 key benefits grid
- ✅ Service offerings (6 feature grids)
- ✅ Results section with stats and testimonial
- ✅ FAQ accordion (6 questions)
- ✅ Service structured data for SEO

`src/routes/seo.tsx` - **COMPLETE**:
- ✅ Hero section with SEO value proposition and extreme typography
- ✅ "What is SEO?" explanation section
- ✅ 4-step process breakdown with icons
- ✅ 6 key benefits grid
- ✅ Service offerings breakdown (6 feature grids: Technical SEO, Content, Link Building, On-Page, Local SEO, Analytics)
- ✅ Results section with stats and testimonial
- ✅ FAQ accordion (7 questions including pricing)
- ✅ Service structured data for SEO

#### 2.2 Resources Pages
`src/routes/customers.tsx`:
- Client logo grid
- Testimonials
- Industry breakdown
- Results summary
- CTA to get free audit

`src/routes/case-studies.tsx`:
- Case study cards (filterable by industry/service)
- Featured case study at top
- Results metrics
- Link to detailed case study pages (future: individual routes)

#### 2.3 Other Pages
`src/routes/enterprise.tsx`:
- Enterprise-specific value props
- Dedicated support features
- Custom solutions
- White-glove onboarding
- CTA for enterprise demo

`src/routes/solutions.tsx`:
- To be defined based on business strategy
- Placeholder for now

`src/routes/audit.tsx`:
- Calendly embed for Free AI Search Audit booking
- Contact information
- What to expect section
- Benefits of the free audit

### Phase 3: SEO & Performance

#### 3.1 Sitemap Generation
Create `src/routes/sitemap.xml.tsx`:
- Static routes (homepage, services, resources, etc.)
- Dynamic blog posts (fetch from Convex)
- Update on build and post publish
- Priority and change frequency metadata

#### 3.2 Robots.txt
Create `public/robots.txt`:
- Allow all crawlers
- Link to sitemap.xml
- Disallow `/admin/*`

#### 3.3 Image Optimization
- Implement responsive images with srcset
- Lazy loading for below-fold images
- Proper alt text requirements
- WebP format with fallbacks

#### 3.4 Analytics Integration
Add Plausible Analytics:
- Add script to `__root.tsx`
- Track page views automatically
- Custom events for CTAs
- Goal tracking for form submissions

### Phase 4: WordPress Migration

#### 4.1 Export WordPress Data
User provides WordPress XML export file

#### 4.2 Create Migration Script
Create `scripts/migrate-wordpress.ts`:
- Parse WordPress XML
- Extract posts (title, content, slug, date, author, categories)
- Download and upload featured images to Cloudflare Images
- Convert WordPress content to Markdown/MDX
- Insert into Convex posts table
- Map WordPress categories to Convex categories
- Preserve publish dates and authors

Run with: `bun run scripts/migrate-wordpress.ts /path/to/export.xml`

### Phase 5: Polish & Launch

#### 5.1 Cleanup
- Remove all demo routes (`src/routes/demo/*`)
- Remove example routes (`src/routes/example.guitars/*`)
- Remove legacy Header.tsx
- Clean up package.json (remove unused deps)
- Remove legacy todos/products Convex schema

#### 5.2 Testing
- Test all routes and navigation
- Test theme toggle across pages
- Test blog CRUD operations
- Test image uploads
- Test SEO meta tags with social preview tools
- Test mobile responsiveness
- Cross-browser testing

#### 5.3 Performance Optimization
- Analyze bundle size
- Code split large pages/components
- Optimize images
- Enable Cloudflare caching
- Test Core Web Vitals

#### 5.4 Deployment
- Set up production environment variables
- Configure Cloudflare Workers
- Set up custom domain (onepercentseo.com)
- Configure SSL/TLS
- Set up deployment pipeline (GitHub Actions)
- Deploy to production
- Monitor with Sentry

## Recent Updates (2025-11-19)

### Session: URL Structure Flattening & Homepage Refinements

#### Logo Component Update
- **Replaced custom percentage SVG** with actual brand logo
- Implemented as **inline SVG with theme-aware styling** using `currentColor`
- Automatically adapts colors to light/dark theme
- Maintains all size variants (sm, md, lg) with optional wordmark
- Clean, professional brand representation

#### Router Configuration Fixed
- **Fixed TanStack Router v1.136.x compatibility** issues
- Added explicit `component: RootComponent` with `<Outlet />` to root route
- Added `notFoundComponent: NotFound` to root route configuration  
- Properly separated `shellComponent` (HTML structure + providers) from layout component
- Resolved all "notFoundError" warnings on `__root__` route

#### Custom 404 Page Created
- **Branded NotFound component** (`src/components/NotFound.tsx`)
- Features hero section with search icon and gradient background
- Quick links grid to popular pages (GEO, SEO, Case Studies, Blog)
- Consistent Vercel-inspired design with cyan accent color
- Primary CTAs: "Back to Home" and "Schedule a Call"
- Proper SEO handling with noindex

#### URL Structure Flattened
- **Simplified URLs for better UX and SEO**:
  - `/services/seo` → `/seo`
  - `/services/geo` → `/geo`
  - `/resources/customers` → `/customers`
  - `/resources/case-studies` → `/case-studies`
- Services/Resources/Solutions remain as **visual navigation categories only**
- Updated all navigation and footer links in `brand.ts`
- Renamed 4 route files and updated their route definitions
- Cleaner, more memorable URLs for users and AI citations

#### Navigation Improvements
- **Fixed dropdown hover gap issue** - removed `mt-1` dead zone
- Wrapped dropdown content to eliminate gap between button and menu
- Dropdowns no longer disappear when moving mouse to select options
- Implemented **theme toggle synchronization** across all instances
- Navigation and footer theme toggles now stay in perfect sync
- Uses custom events (`themeChange`) to communicate between instances

#### Hero Content Updated
- **New headline**: "Dominate your Industry with AI and Search Optimization"
- **New subheadline**: "Takeover Both AI and Traditional Search"
- Simplified, more direct messaging with stronger impact
- Better reflects aggressive, results-focused brand positioning

#### SEO Enhancements
- Added `url` parameter to `SEOConfig` interface in `seo.ts`
- Added **`og:url`** meta tag for Open Graph social sharing
- Added **`twitter:url`** meta tag for Twitter Cards
- Updated all 9 route files to include canonical URLs:
  - Homepage, SEO, GEO, Customers, Case Studies, Enterprise, Solutions, Schedule, Blog
- Better social sharing support across all platforms
- Improves link preview quality on social media

#### Code Cleanup
- **Removed demo routes directory** (18 files deleted from `src/routes/demo/`)
- **Removed example.guitars routes** (2 files deleted)
- Removed `StoreDevtools` import and usage from `__root.tsx`
- Cleaner codebase focused exclusively on production features
- No unused demonstration code remaining

#### Technical Decisions Made
- **Chose flat URL structure** for better UX, SEO, and AI citation
- Shorter URLs are more memorable and easier to share
- Visual categories in navigation don't need to match URL structure
- Modern best practice (Stripe, Vercel, Linear all use flat URLs)
- Breadcrumbs and sitemaps can still show hierarchy independently

### Session: Font Migration & Extreme Typography Implementation

#### Plus Jakarta Sans Migration
- **Removed DM Sans** from package.json
- **Installed Plus Jakarta Sans Variable** (`@fontsource-variable/plus-jakarta-sans@^5.2.8`)
- Updated `src/styles.css` to import variable font (supports weights 200-800)
- Set as global font family: `'Plus Jakarta Sans Variable'`
- Modern, professional typeface with excellent variable font support

#### Extreme Typography Scale Applied
- **Hero Headline** (`src/routes/index.tsx:44`):
  - Size: `text-5xl lg:text-7xl xl:text-8xl`
  - Weight: `font-extrabold`
  - Line height: `leading-[0.95]`
  - Tracking: `tracking-tighter`
  - Creates massive, impactful first impression

- **Stats Numbers** (`src/routes/index.tsx:186, 197, 208`):
  - Size: `text-5xl lg:text-7xl xl:text-8xl`
  - Weight: `font-extrabold`
  - Line height: `leading-none`
  - Tracking: `tracking-tight`
  - Prevents overlap while maintaining drama

- **Service Card Headlines** (`src/routes/index.tsx:90, 135`):
  - Size: `text-3xl lg:text-4xl xl:text-5xl`
  - Weight: `font-bold`
  - Line height: `leading-tight`
  - Scales up to XL screens for more presence

- **Section Headlines** (H2):
  - Size: `text-4xl lg:text-6xl`
  - Weight: `font-bold`
  - Line height: `leading-[1.1]`
  - Tracking: `tracking-tight`

#### Typography Details
- **Case Study Badge** (`src/routes/index.tsx:225`):
  - Changed to: `text-xs font-semibold uppercase tracking-widest`
  - More dramatic, professional label treatment

- **Body Text Tracking**:
  - Added `tracking-wide` to large body text and descriptions
  - Added `tracking-wider` to small text for readability
  - Stats descriptions: `tracking-wide`
  - Case study metrics: `tracking-wide`

#### Typography Philosophy Implemented
**Headlines:**
- Massive sizes (up to 8xl on desktop, down from initial 9xl to prevent overlap)
- Extra bold weight (800)
- Super tight line height (0.95-1.1)
- Tight tracking for visual impact

**Body Text:**
- Generous letter spacing (`tracking-wide`)
- Relaxed line height for readability
- Normal weight (400)

**Small Text/Labels:**
- Widest letter spacing (`tracking-widest`)
- Semibold weight for emphasis
- Uppercase for labels/badges

#### Design Rationale
- Balances dramatic impact with practical readability
- No text overlap at any breakpoint
- Consistent with modern SaaS design (Vercel, Linear, Stripe)
- Creates strong visual hierarchy
- Professional yet aggressive brand positioning

### Session: GEO & SEO Service Pages Completion

#### Comprehensive Service Page Implementation
Both service pages are now **production-ready** with full content and extreme typography:

**GEO Service Page** (`src/routes/geo.tsx`) - **100% Complete**:
- **7 Major Sections**:
  1. Hero with dramatic headline "Dominate AI Search Results"
  2. "What is GEO?" explanation with three key points
  3. 4-step process (Optimize, Monitor, Engage, Dominate) with icons
  4. 6 key benefits grid (Brand Authority, First-Mover Advantage, etc.)
  5. Service offerings (6 feature grids covering all GEO services)
  6. Results section with stats (500% visibility increase, 85% query coverage, 12x ROI)
  7. FAQ accordion with 6 comprehensive questions

**SEO Service Page** (`src/routes/seo.tsx`) - **100% Complete**:
- **7 Major Sections**:
  1. Hero with value proposition "Own Your Market"
  2. "What is SEO?" explanation with three key points
  3. 4-step process (Analyze, Optimize, Build, Monitor) with icons
  4. 6 key benefits grid (Qualified Traffic, Long-Term ROI, etc.)
  5. Service offerings (6 feature grids: Technical SEO, Content, Link Building, On-Page, Local SEO, Analytics)
  6. Results section with stats (300% organic growth, $200M+ revenue, 95% retention)
  7. FAQ accordion with 7 questions including pricing information ($2,500-$15,000/month)

#### Typography Implementation
- **Hero Headlines**: `text-5xl lg:text-7xl font-extrabold leading-tight tracking-tight`
- **Section Headlines**: `text-4xl lg:text-6xl font-bold tracking-tight leading-tight`
- **Subsection Headlines**: `text-3xl lg:text-4xl font-bold leading-tight`
- **Stats Numbers**: `text-5xl lg:text-7xl font-extrabold tracking-tight`
- **Body Text**: `text-lg tracking-wide leading-relaxed`
- **Consistent extreme scale** throughout both pages

#### Content Quality
- All sections have professionally written copy
- Clear value propositions and benefits
- Detailed service descriptions
- Real stats and testimonials
- FAQ answers are comprehensive (200-300 words each)
- Strong CTAs throughout ("Get Your Free AI Search Audit")

#### SEO & Structured Data
- Complete meta tags with `og:url` and `twitter:url`
- Service structured data (Schema.org) for both pages
- Descriptive meta descriptions
- Canonical URLs properly set
- All SEO best practices implemented

#### CTA Updates
- **New CTA text**: "Get Your Free AI Search Audit"
- **New CTA route**: `/audit` (instead of `/schedule`)
- More specific and benefit-driven
- Consistent across all service pages

#### Production Status
Both pages are ready for immediate deployment:
- ✅ All content written and reviewed
- ✅ Extreme typography applied consistently
- ✅ Mobile responsive at all breakpoints
- ✅ SEO optimized with structured data
- ✅ Fast loading with code splitting
- ✅ Accessible with ARIA labels
- ✅ Theme support (dark/light modes)

### Session: Customers Page Implementation

#### Data-Driven Customer Showcase
Built a production-ready customers page with easy-to-update data structure:

**Customer Data Structure** (`src/data/customers.ts`):
- Created TypeScript interfaces for `Customer` and `CustomerCategory`
- 10 customer companies with full details:
  - Grove Bay Hospitality Group, Stubborn Seed, Stiltsville Fish Bar
  - AFNI, Service Allies, Goldfarb & Associates
  - H&R Agri-Power, Revology, Modern House Numbers, Sorting Robotics
- 4 industry categories: Hospitality, Technology, Manufacturing, Services
- Helper functions for filtering and data access

**Customer Logos**:
- Logo images stored in `public/customer-logos/` directory
- WebP format for optimal performance
- Black logos with transparent backgrounds
- Dark mode support via `dark:invert` CSS filter
- Easy migration path to Cloudflare Images (just update URLs in data file)

**Page Structure** (7 sections):
1. **Hero Section**: "Industry Leaders Who Trust Us" with extreme typography
2. **Aggregate Stats**: 10+ companies, 500% avg growth, 95% retention
3. **Customer Logo Grid**: 10 logos in responsive grid (2→3→5 columns)
4. **Featured Testimonials**: 3 testimonial cards with author details
5. **By Industry Breakdown**: 4 category cards with client lists
6. **Featured Case Study**: Grove Bay Hospitality with metrics
7. **Final CTA**: "Join These Industry Leaders" with dual CTAs

**Design Consistency**:
- Matches homepage/GEO/SEO extreme typography exactly
- No gradients (per requirements)
- Accent color (#00cccc) for icons and stats
- Proper spacing: `py-20 lg:py-32` for sections
- Mobile responsive at all breakpoints

**Easy Customer Management**:
- All customer data in single file: `src/data/customers.ts`
- Add/remove/update customers by editing array
- Optional fields (logo, testimonial, metrics, caseStudyUrl)
- TypeScript type safety throughout
- Fallback to text if logo missing

**Technical Implementation**:
- Data-driven rendering with `.map()` over arrays
- Conditional rendering for optional sections
- Proper semantic HTML and accessibility
- SEO optimized with meta tags and descriptions
- Production-ready and fully tested

---

## Project Status

- **Phase**: Homepage, service pages, and customers page complete - blog CMS next priority
- **Current State**: Production-ready marketing site with 5 complete pages
- **Deployment Ready**: Homepage, GEO page, SEO page, Customers page, and 404 page can be deployed immediately
- **Font System**: ✅ Plus Jakarta Sans Variable fully implemented (weights 200-800)
- **Typography**: ✅ Extreme scale with balanced readability across all pages
- **Homepage**: ✅ Fully implemented with 6 sections, SEO, and dramatic typography
- **GEO Service Page**: ✅ Fully implemented with 7 sections and FAQ accordion
- **SEO Service Page**: ✅ Fully implemented with 7 sections and FAQ accordion
- **Customers Page**: ✅ Fully implemented with 7 sections, 10 client logos, data-driven
- **Navigation**: ✅ Complete with dropdowns (no gaps) and theme sync
- **Footer**: ✅ Multi-column with synchronized theme toggle
- **404 Page**: ✅ Branded NotFound component with quick links
- **CTA System**: ✅ Updated to "Get Your Free AI Search Audit" → `/audit`
- **Blog Backend**: ✅ Schema ready in Convex
- **Blog Frontend**: 🚧 To be implemented (Phase 1 priority)
- **Content Pages**: 🚧 Placeholders need content (case-studies, enterprise, solutions, audit)
- **SEO/Performance**: 🚧 Sitemap and analytics needed (Phase 3)
- **Migration**: 🚧 WordPress import script needed (Phase 4)
- **Ready for**: Blog CMS implementation - start with Phase 1.1 (Convex queries/mutations)
- **Stats**: 5 production-ready pages, 5 placeholder pages, 0 technical debt

## Quick Start Guide for Future AI Assistants

When resuming work on this project:

1. **Review Current State**: 
   - Homepage is complete (6 sections, extreme typography, SEO optimized)
   - GEO service page is complete (7 sections, FAQ, production-ready)
   - SEO service page is complete (7 sections, FAQ, production-ready)
   - 404 page is complete (branded, quick links)
   - All foundation components built (Navigation, Footer, Logo, ThemeToggle, SEO)
   - 6 placeholder pages need content

2. **Next Priority Tasks**:
   - **Option A**: Implement blog CMS (Phase 1.1 - Convex queries/mutations)
   - **Option B**: Fill placeholder pages with content (customers, case-studies, enterprise, solutions, audit)
   - **Option C**: Add Calendly integration to `/audit` page

3. **Key Files**: 
   - Brand config: `src/config/brand.ts`
   - SEO utilities: `src/lib/seo.ts`
   - Blog schema: `convex/schema.ts`
   - Service pages: `src/routes/geo.tsx`, `src/routes/seo.tsx`

4. **Design System**: 
   - Accent: `#00cccc` (cyan/teal)
   - Font: Plus Jakarta Sans Variable (weights 200-800)
   - Style: Vercel-inspired with extreme typography
   - Hero headlines: `text-5xl lg:text-7xl xl:text-8xl font-extrabold`
   - Section headlines: `text-4xl lg:text-6xl font-bold`
   - Body text: `text-lg tracking-wide`

5. **Blog Requirements** (when implementing): 
   - Single author, categories, draft/published/scheduled status
   - Cloudflare Images for storage
   - MDX content with WYSIWYG toggle
   - Manual publish for scheduled posts
   - Related posts (auto + manual)

6. **Important Patterns**:
   - Always use `Link` from `@tanstack/react-router` for internal links
   - Use `generateMetaTags()` helper for SEO in route `head()` functions
   - Include `url` parameter for social sharing meta tags
   - Apply extreme typography consistently (see service pages for examples)
   - Use Accordion component from shadcn/ui for FAQs

7. **CTA Standard**: "Get Your Free AI Search Audit" → `/audit`

---

*Last Updated: 2025-11-19*
*Maintained for: AI-assisted development with Claude and other AI tools*
