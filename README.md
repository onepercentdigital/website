# One Percent SEO - Marketing Website

Modern, high-performance marketing website built with TanStack Start for One Percent SEO/GEO services.

## 🚀 Overview

Production-ready full-stack TypeScript marketing website featuring:
- **25 production-ready routes**: 20 marketing pages + 5 blog/admin routes
- **Complete Blog CMS**: Public blog, admin panel, markdown editor with image uploads
- **Industry-specific solutions**: 9 tailored landing pages covering Hospitality, E-commerce, Manufacturing, Logistics, Automotive, Construction, Agriculture, Technology, and Health & Wellness
- **Enterprise solutions**: Comprehensive page with pricing ($15K-$75K+/month), SLA guarantees, and white-glove service details
- **Team showcase**: About page with full bios for all team members and company story
- **Server-side rendering (SSR)** for optimal SEO/GEO performance
- **Extreme typography scale** with Plus Jakarta Sans Variable font
- **Real-time blog CMS** powered by Convex with Cloudflare Images
- **Dark/light theme** with system preference detection and synchronized toggles
- **Vercel-inspired design** with Tailwind CSS v4 and dramatic visual hierarchy
- **Type-safe routing** and data fetching with TanStack ecosystem
- **Flat URL structure** for better UX and SEO (`/seo`, `/geo`, `/solutions/hospitality`)
- **Comprehensive FAQs** on service pages with accordion UI
- **Data-driven content** with TypeScript interfaces for easy updates
- **WordPress migration** scripts for importing existing blog content

## 🛠️ Tech Stack

### Framework & Routing
- **TanStack Start 1.139.14** - Full-stack React framework with SSR and streaming
- **TanStack Router 1.139.14** - File-based, type-safe routing with built-in code splitting
- **TanStack Query 5.90.11** - Powerful server state management and caching
- **React 19.2.1** - Latest React with concurrent features

### Backend & Database
- **Convex 1.30.0** - Real-time database with TypeScript schema and reactive queries
- **Clerk 5.57.1** - Authentication and user management
- **Zod 4.1.13** - TypeScript-first schema validation

### Styling & UI
- **Tailwind CSS 4.1.17** - Utility-first CSS framework (latest v4)
- **Plus Jakarta Sans Variable** - Primary font family (weights 200-800 via @fontsource-variable)
- **Shadcn/ui** - High-quality, accessible component library on Radix UI
- **Lucide React** - Beautiful, consistent icon system
- **Design System**: `#00cccc` accent color, extreme typography scale, high-contrast themes

### Developer Experience
- **TypeScript 5.9.3** - Strict mode with comprehensive type safety
- **Biome 2.3.8** - Ultra-fast linting and formatting (replaces ESLint/Prettier)
- **Vitest 4.0.15** - Blazing fast unit testing framework
- **Bun 1.3.3** - Fast package manager and JavaScript runtime

### Deployment & Monitoring
- **Cloudflare Workers** - Edge deployment with global CDN
- **Cloudflare Images** - Image optimization and delivery ✅ **CONFIGURED**
- **Wrangler 4.52.1** - Cloudflare deployment tooling
- **Sentry 10.28.0** - Error tracking, performance monitoring, and instrumentation

## 📋 Prerequisites

- **Bun** 1.3.3 or later ([Install Bun](https://bun.sh))
- **Node.js** 18 or later
- **Convex account** ([Sign up](https://www.convex.dev))
- **Clerk account** ([Sign up](https://clerk.com))

## 🚦 Getting Started

### 1. Install Dependencies
```bash
bun install
```

### 2. Set Up Environment Variables

Create `.env.local` in the root directory:

```env
# Clerk Authentication
VITE_CLERK_PUBLISHABLE_KEY=pk_test_...

# Convex Database
VITE_CONVEX_URL=https://...convex.cloud
CONVEX_DEPLOYMENT=prod:...

# Cloudflare Images (for blog image uploads)
CLOUDFLARE_ACCOUNT_ID=your_account_id
CLOUDFLARE_API_TOKEN=your_api_token

# Sentry Monitoring (optional but recommended)
VITE_SENTRY_DSN=https://...@sentry.io/...

# AI Integration (optional, for chat features)
ANTHROPIC_API_KEY=sk-ant-...
```

### 3. Initialize Convex

First time setup:
```bash
npx convex dev
```

This will:
- Create a new Convex project (if needed)
- Generate environment variables
- Set up the database schema

### 4. Start Development Server

```bash
bun run dev
```

**Keep Convex running in a separate terminal:**
```bash
npx convex dev
```

Visit [http://localhost:3000](http://localhost:3000) 🎉

## 📁 Project Structure

```
seo-website/
├── src/
│   ├── components/          # React components
│   │   ├── ui/             # Shadcn components (button, input, etc.)
│   │   ├── BlogEditor.tsx  # Full-featured markdown editor ✅ COMPLETE
│   │   ├── Navigation.tsx  # Header with dropdown menus
│   │   ├── Footer.tsx      # Multi-column footer
│   │   ├── Logo.tsx        # Theme-aware SVG logo
│   │   ├── ThemeToggle.tsx # Dark/light mode switcher
│   │   ├── NotFound.tsx    # Branded 404 page
│   │   └── SEO.tsx         # Structured data injection
│   │
│   ├── routes/             # File-based routing (TanStack Router)
│   │   ├── __root.tsx      # Root layout with providers
│   │   ├── index.tsx       # Homepage ✅ COMPLETE
│   │   ├── seo.tsx         # SEO service page ✅ COMPLETE
│   │   ├── geo.tsx         # GEO service page ✅ COMPLETE
│   │   ├── customers.tsx   # Customer showcase ✅ COMPLETE
│   │   ├── case-studies.tsx # Case studies page ✅ COMPLETE
│   │   ├── apply.tsx       # Apply To Work With Us with Calendly ✅ COMPLETE
│   │   ├── about.tsx       # About page with team bios ✅ COMPLETE
│   │   ├── enterprise.tsx  # Enterprise solutions ✅ COMPLETE
│   │   ├── blog.index.tsx  # Blog listing page ✅ COMPLETE
│   │   ├── blog.$slug.tsx  # Individual blog post ✅ COMPLETE
│   │   ├── admin.index.tsx # Admin redirect ✅ COMPLETE
│   │   ├── admin.posts.index.tsx    # Post management ✅ COMPLETE
│   │   ├── admin.posts.new.tsx      # Create new post ✅ COMPLETE
│   │   ├── admin.posts.$id.edit.tsx # Edit existing post ✅ COMPLETE
│   │   ├── solutions.index.tsx      # Solutions landing ✅ COMPLETE
│   │   └── solutions.*.tsx          # 9 industry pages ✅ COMPLETE
│   │
│   ├── config/
│   │   └── brand.ts        # Centralized brand configuration
│   │
│   ├── lib/
│   │   ├── seo.ts          # SEO utilities and meta tag generators
│   │   ├── cloudflare-images.ts # Image upload/delivery ✅ COMPLETE
│   │   ├── auth-guard.ts   # Auth placeholder
│   │   └── utils.ts        # Shared utility functions
│   │
│   ├── data/               # Data files and content
│   │   ├── customers.ts    # Customer data (10 companies)
│   │   ├── case-studies.ts # Case study data (5 studies)
│   │   ├── solutions.ts    # Industry solutions (10 industries)
│   │   └── team.ts         # Team member bios
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
│   ├── posts.ts            # Post queries/mutations (8 functions) ✅ COMPLETE
│   ├── categories.ts       # Category queries/mutations (5 functions) ✅ COMPLETE
│   └── _generated/         # Auto-generated Convex types
│
├── scripts/                 # Build and migration scripts
│   ├── generate-sitemap.ts      # Build-time sitemap generation
│   ├── migrate-wordpress.ts     # WordPress XML import
│   ├── fix-featured-images.ts   # Image migration repair
│   └── seed-categories.ts       # Initial category seeding
│
├── public/                  # Static assets
│   ├── sitemap.xml         # Auto-generated sitemap (19 pages)
│   ├── robots.txt          # Search engine instructions
│   ├── favicon.ico         # Site favicon
│   └── logo.svg            # Brand logo
│
├── biome.json              # Biome linting and formatting config
├── tsconfig.json           # TypeScript configuration
├── vite.config.ts          # Vite build configuration
├── wrangler.jsonc          # Cloudflare Workers deployment config
└── package.json            # Dependencies and scripts
```

## 🧪 Development Workflow

### Code Quality Commands

```bash
# Type checking
bun run type

# Linting
bun run lint

# Formatting
bun run format

# Run all checks at once
bun run check-all

# Run tests
bun run test
```

### Development Tips

- **Hot reload**: Changes to routes, components, and styles reload instantly
- **Type errors**: Check the terminal for TypeScript errors
- **DevTools**: TanStack Router and Query DevTools available in bottom-right corner
- **Theme testing**: Use the theme toggle to test dark/light modes

## 🏗️ Building for Production

```bash
# Production build
bun run build

# Preview production build locally
bun run serve

# Deploy to Cloudflare Workers
bun run deploy
```

The build process:
1. Type checks all TypeScript
2. Generates optimized route tree
3. Bundles and minifies code
4. Outputs to `.output/` directory

## 🎨 Design System

### Colors
- **Accent**: `#00cccc` (cyan/teal) - Brand color for CTAs and highlights
- **Background** (Dark): `#0a0a0a` (near black)
- **Background** (Light): `#ffffff` (white)
- **Foreground**: High contrast text colors
- **Secondary**: Subtle background variations

### Typography
- **Primary Font**: Plus Jakarta Sans Variable (Google Fonts via @fontsource-variable)
- **Variable Weights**: 200-800 available, primarily using 400 (regular), 700 (bold), 800 (extrabold)
- **Extreme Scale**: Up to `text-8xl` on desktop for hero headlines and stats
- **Headings**: 
  - Hero: `text-5xl lg:text-7xl xl:text-8xl` with `font-extrabold` and `tracking-tighter`
  - Stats: `text-5xl lg:text-7xl xl:text-8xl` with `font-extrabold` and `tracking-tight`
  - H2: `text-4xl lg:text-6xl` with `font-bold` and `tracking-tight`
  - H3: `text-3xl lg:text-4xl xl:text-5xl` with `font-bold` and `leading-tight`
- **Body Text**: Regular (400) with `tracking-wide` for generous letter spacing
- **Labels/Badges**: `text-xs font-semibold uppercase tracking-widest`
- **Philosophy**: Massive, dramatic headlines balanced with readable body text

### Visual Style
- Inspired by **Vercel.com** design language
- Subtle gradient backgrounds
- Smooth hover transitions with accent glow effects
- Rounded corners (`rounded-2xl` for cards, `rounded-lg` for buttons)
- High contrast for accessibility

### Component Patterns
- **Cards**: `rounded-2xl` with border and shadow on hover
- **Buttons**: `rounded-lg` with accent color for primary actions
- **Dropdowns**: Smooth animations with no hover gaps
- **Icons**: Lucide React for consistency

## 🌐 URL Structure

This project uses **flat URLs** for better UX, SEO, and AI citations:

**✅ Production-Ready Routes (25 total):**

**Marketing Pages (20):**
- `/` - Homepage (6 sections, extreme typography, fully optimized)
- `/seo` - SEO service page (7 sections with FAQ accordion)
- `/geo` - GEO service page (7 sections with FAQ accordion)
- `/enterprise` - Enterprise solutions page (8 sections, 7-question FAQ, pricing $15K-$75K+/month)
- `/about` - About page (team bios, company story, 6 sections)
- `/customers` - Customer showcase (10 client logos, testimonials, industry breakdown)
- `/case-studies` - Case studies page (3 detailed case studies, featured study, aggregate stats)
- `/apply` - Apply To Work With Us with Calendly (above-fold booking, 30-min sessions)
- `/solutions` - Solutions landing page (directory of all industries)
- `/solutions/*` - 9 industry-specific pages (hospitality, ecommerce, manufacturing, logistics, automotive, construction, agriculture, technology, health-wellness)
- `404` - Branded NotFound component with quick links

**Blog CMS Routes (5):**
- `/blog` - Blog listing with real posts from Convex
- `/blog/[slug]` - Individual post page with markdown rendering
- `/admin` - Admin redirect to posts listing
- `/admin/posts` - Post management table with status filters
- `/admin/posts/new` - Create new post with full editor
- `/admin/posts/[id]/edit` - Edit existing post

**⚠️ No Placeholder Pages** - All planned pages are complete!

**Note:** Services, Resources, and Solutions are visual navigation categories in the header. Each solution page covers industry-specific challenges, approach, services, results, and FAQs.

## 📚 Key Features

### SEO Optimization
- Server-side rendering for all pages
- **Sitemap.xml** - Auto-generated at build time, includes all 19 pages
- **robots.txt** - Configured with sitemap reference and admin route blocking
- Structured data (JSON-LD) for Organization, LocalBusiness, Articles
- Comprehensive meta tags (Open Graph, Twitter Cards)
- `og:url` and `twitter:url` for better social sharing
- Semantic HTML with proper heading hierarchy
- Fast page loads with code splitting

### Responsive Design
- Mobile-first approach
- Breakpoints: `sm`, `md`, `lg`, `xl`, `2xl`
- Hamburger menu on mobile
- Touch-friendly tap targets

### Accessibility
- WCAG 2.1 AA compliant components (via Radix UI)
- Keyboard navigation support
- ARIA labels on interactive elements
- High contrast color ratios
- Focus visible states

### Theme System
- Dark/light mode toggle
- System preference detection
- Synchronized toggles across navigation and footer
- Persistent selection via localStorage
- Smooth transitions

## 📝 Blog CMS

This project includes a production-ready blog CMS built with Convex and Cloudflare Images.

### Quick Start

**1. Create Categories:**
```bash
# Create initial blog categories
bun run scripts/seed-categories.ts
```

**2. Create Your First Post:**
1. Navigate to http://localhost:3000/admin/posts/new
2. Fill in the title (slug auto-generates)
3. Write content in Markdown
4. Upload a featured image
5. Select category and set status
6. Click "Create Post"

**3. View Your Blog:**
- **Blog index**: http://localhost:3000/blog
- **Individual posts**: http://localhost:3000/blog/{slug}
- **Admin panel**: http://localhost:3000/admin/posts

### Blog Workflow

**Writing Posts:**
- Use Markdown syntax for formatting
- Upload images via the featured image uploader (Cloudflare Images)
- Preview your content in real-time
- Save as draft or publish immediately

**Publishing Posts:**
- **Draft**: Work-in-progress, not visible on public site
- **Published**: Live on the blog immediately
- **Scheduled**: Set a future publish date (manual trigger for now)

**Managing Posts:**
- Edit existing posts at `/admin/posts/{id}/edit`
- Delete posts from the post listing page
- Filter posts by status (draft, published, scheduled)
- Posts display by most recently modified

### WordPress Migration

If you have an existing WordPress blog:

**1. Export from WordPress:**
- WordPress Admin → Tools → Export
- Select "All content" and download XML file

**2. Run Migration Script:**
```bash
# Dry run first (no changes)
bun run scripts/migrate-wordpress.ts /path/to/export.xml --dry-run

# Real migration
bun run scripts/migrate-wordpress.ts /path/to/export.xml
```

**What gets migrated:**
- ✅ All posts (with publish dates preserved)
- ✅ Categories
- ✅ Featured images (auto-uploaded to Cloudflare)
- ✅ Post content (HTML converted to Markdown)
- ✅ Authors and metadata
- ✅ SEO meta information

**3. Verify Migration:**
Check your blog at http://localhost:3000/blog to ensure all posts migrated correctly.

**4. Fix Any Missing Images (if needed):**
```bash
bun run scripts/fix-featured-images.ts
```

### Blog Features

**Content:**
- Markdown editing with live preview
- Syntax highlighting for code blocks
- Image optimization via Cloudflare CDN
- Internal link suggestions (TanStack Router)

**SEO:**
- Custom meta titles and descriptions per post
- Automatic Article structured data (Schema.org)
- Open Graph and Twitter Card tags
- Dynamic sitemap generation (updates at build time)
- Canonical URLs

**Performance:**
- Server-side rendering (SSR) support
- Code splitting per route
- Cloudflare CDN delivery for images
- Optimized Markdown rendering

### Markdown Support

**Basic Formatting:**
```markdown
# Heading 1
## Heading 2
### Heading 3

**Bold text**
*Italic text*
~~Strikethrough~~

- Unordered list
- Another item

1. Ordered list
2. Another item

[Link text](https://example.com)
![Image alt text](image-url)
```

**Code Blocks:**
```markdown
\`\`\`typescript
const greeting = "Hello World"
console.log(greeting)
\`\`\`
```

**Tables:**
```markdown
| Column 1 | Column 2 |
|----------|----------|
| Value 1  | Value 2  |
```

### Troubleshooting

**Blog posts not loading?**
- Ensure Convex is running: `npx convex dev`
- Check environment variable: `VITE_CONVEX_URL`
- Verify schema is deployed in Convex dashboard

**Images not uploading?**
- Check Cloudflare environment variables in `.env.local`
- Verify API token has "Edit Cloudflare Images" permission
- Ensure image variants are configured in Cloudflare dashboard

**Navigation causing full page reload?**
- This was a known issue and has been fixed
- All blog post cards now use TanStack Router's `<Link>` component

For detailed technical documentation, troubleshooting, and architecture details, see the **[Blog CMS Implementation Guide](./CLAUDE.md#blog-cms-implementation-guide)** section in CLAUDE.md.

## 📖 Documentation

For comprehensive project documentation, including:
- Detailed implementation roadmap
- Code standards and conventions
- SEO best practices
- Common tasks and recipes
- Recent updates and decisions
- **Cloudflare Images setup guide** (complete step-by-step instructions)

See **[CLAUDE.md](./CLAUDE.md)**

## ✅ Current Implementation Status

**✅ COMPLETE - Full-stack marketing site with blog CMS (25 production-ready routes)**

**Marketing Pages (20):**
- ✅ Homepage with 6 sections and extreme typography
- ✅ SEO service page (7 sections + FAQ)
- ✅ GEO service page (7 sections + FAQ)
- ✅ Enterprise solutions page (8 sections + 7-question FAQ, pricing $15K-$75K+/month)
- ✅ About page with team bios (6 sections)
- ✅ Customers page (10 client logos + testimonials)
- ✅ Case studies page (3 case studies + featured layout)
- ✅ Apply page with Calendly (above-fold booking, conversion-optimized)
- ✅ 10 industry-specific solutions pages (landing + 9 industries)
- ✅ Branded 404 page

**Blog CMS (5 routes):**
- ✅ `/blog` - Blog listing with real posts from Convex
- ✅ `/blog/[slug]` - Individual post pages with markdown rendering, Article schema
- ✅ `/admin/posts` - Post management table with status filters
- ✅ `/admin/posts/new` - Create new post with full editor
- ✅ `/admin/posts/[id]/edit` - Edit existing post

**Blog Backend (Convex):**
- ✅ `convex/posts.ts` - 8 queries/mutations (list, getBySlug, getById, create, update, deletePost, publish, updateFeaturedImage)
- ✅ `convex/categories.ts` - 5 queries/mutations (list, getBySlug, create, update, deleteCategory)

**Blog Editor Features:**
- ✅ Markdown textarea with live preview toggle
- ✅ Featured image upload to Cloudflare Images
- ✅ Inline image upload (inserts markdown syntax)
- ✅ Category selector
- ✅ Status selector (draft/published/scheduled)
- ✅ SEO fields (meta title, description, OG image, noindex)
- ✅ Auto-slug generation from title

**WordPress Migration:**
- ✅ `scripts/migrate-wordpress.ts` - Full migration script with image handling
- ✅ `scripts/fix-featured-images.ts` - Repair script for failed migrations
- ✅ `scripts/seed-categories.ts` - Initial category seeding

**Site Infrastructure:**
- ✅ Navigation with dropdowns and theme toggle
- ✅ Cloudflare Images integration (upload, delivery, 5 variants)
- ✅ Data-driven architecture (4 data files)
- ✅ SEO Infrastructure - sitemap.xml (19 pages), robots.txt
- ✅ Code Quality - 0 TypeScript errors, 0 linting errors

**🎯 Optional Future Enhancements:**
- Full Clerk authentication in admin routes (currently placeholder)
- Role-based permissions (Admin/Editor/Viewer)
- Auto-publish for scheduled posts (Convex cron)
- Blog search and category filtering
- WYSIWYG editor upgrade (TipTap)
- Plausible Analytics integration

See [CLAUDE.md](./CLAUDE.md) for detailed documentation.

## 🔐 Environment Variables

All environment variables are validated using **T3 Env**:

- **Client variables** must be prefixed with `VITE_`
- Type-safe access via `import { env } from '@/env'`
- Empty strings treated as undefined
- Runtime validation on app start

## 🤝 Contributing

This is a private project for One Percent Digital. For questions or issues:
- Contact the development team
- Review [CLAUDE.md](./CLAUDE.md) for architecture decisions

## 📄 License

Proprietary - © 2025 One Percent Digital. All rights reserved.

---

Built with ❤️ using [TanStack Start](https://tanstack.com/start)
