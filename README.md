# One Percent SEO - Marketing Website

Modern, high-performance marketing website built with TanStack Start for One Percent SEO/GEO services.

## 🚀 Overview

Full-stack TypeScript marketing website featuring:
- **19 production-ready pages**: Homepage, GEO, SEO, Customers, Case Studies, Audit (Calendly), 11 Solutions pages, Blog Skeleton, and branded 404
- **Industry-specific solutions**: 10 tailored landing pages covering Hospitality, E-commerce, Manufacturing, Logistics, Automotive, Construction, Agriculture, Technology, Health & Wellness, and Consulting & Coaching
- **Server-side rendering (SSR)** for optimal SEO/GEO performance
- **Extreme typography scale** with Plus Jakarta Sans Variable font
- **Real-time blog CMS** powered by Convex (to be implemented)
- **Dark/light theme** with system preference detection and synchronized toggles
- **Vercel-inspired design** with Tailwind CSS v4 and dramatic visual hierarchy
- **Type-safe routing** and data fetching with TanStack ecosystem
- **Flat URL structure** for better UX and SEO (`/seo`, `/geo`, `/solutions/hospitality`)
- **Comprehensive FAQs** on service pages with accordion UI
- **Data-driven content** with TypeScript interfaces for easy updates

## 🛠️ Tech Stack

### Framework & Routing
- **TanStack Start** - Full-stack React framework with SSR and streaming
- **TanStack Router** - File-based, type-safe routing with built-in code splitting
- **TanStack Query** - Powerful server state management and caching
- **React 19.2.0** - Latest React with concurrent features

### Backend & Database
- **Convex 1.29.2** - Real-time database with TypeScript schema and reactive queries
- **Clerk 5.55.0** - Authentication and user management

### Styling & UI
- **Tailwind CSS 4.1.17** - Utility-first CSS framework (latest v4)
- **Plus Jakarta Sans Variable** - Primary font family (weights 200-800 via @fontsource-variable)
- **Shadcn/ui** - High-quality, accessible component library on Radix UI
- **Lucide React** - Beautiful, consistent icon system
- **Design System**: `#00cccc` accent color, extreme typography scale, high-contrast themes

### Developer Experience
- **TypeScript 5.9.3** - Strict mode with comprehensive type safety
- **Biome 2.3.6** - Ultra-fast linting and formatting (replaces ESLint/Prettier)
- **Vitest 4.0.10** - Blazing fast unit testing framework
- **Bun 1.3.2** - Fast package manager and JavaScript runtime

### Deployment & Monitoring
- **Cloudflare Workers** - Edge deployment with global CDN
- **Cloudflare Images** - Image optimization and delivery ✅ **CONFIGURED**
- **Sentry 10.25.0** - Error tracking, performance monitoring, and instrumentation

## 📋 Prerequisites

- **Bun** 1.3.2 or later ([Install Bun](https://bun.sh))
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
│   │   ├── audit.tsx       # Free AI Search Audit with Calendly ✅ COMPLETE
│   │   ├── blog.index.tsx  # Blog visual skeleton 🎨 SKELETON
│   │   ├── solutions.index.tsx # Solutions landing page ✅ COMPLETE
│   │   ├── solutions.hospitality.tsx # Hospitality solutions ✅ COMPLETE
│   │   ├── solutions.ecommerce.tsx # E-commerce solutions ✅ COMPLETE
│   │   ├── solutions.manufacturing.tsx # Manufacturing solutions ✅ COMPLETE
│   │   ├── solutions.logistics.tsx # Logistics solutions ✅ COMPLETE
│   │   ├── solutions.automotive.tsx # Automotive solutions ✅ COMPLETE
│   │   ├── solutions.construction.tsx # Construction solutions ✅ COMPLETE
│   │   ├── solutions.agriculture.tsx # Agriculture solutions ✅ COMPLETE
│   │   ├── solutions.technology.tsx # Technology solutions ✅ COMPLETE
│   │   ├── solutions.health-wellness.tsx # Health & Wellness solutions ✅ COMPLETE
│   │   ├── solutions.consulting-coaching.tsx # Consulting solutions ✅ COMPLETE
│   │   └── enterprise.tsx  # Enterprise solutions (placeholder)
│   │
│   ├── config/
│   │   └── brand.ts        # Centralized brand configuration
│   │
│   ├── lib/
│   │   ├── seo.ts          # SEO utilities and meta tag generators
│   │   └── utils.ts        # Shared utility functions
│   │
│   ├── data/               # Data files and content
│   │   ├── customers.ts    # Customer data with TypeScript interfaces
│   │   ├── case-studies.ts # Case study data with TypeScript interfaces
│   │   └── solutions.ts    # Industry solutions data (~2000 lines, 10 industries)
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
│   ├── posts.ts            # Post queries/mutations (to be implemented)
│   ├── categories.ts       # Category queries/mutations (to be implemented)
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

**✅ Production-Ready Pages (19 total):**

**Core Pages:**
- `/` - Homepage (6 sections, extreme typography, fully optimized)
- `/seo` - SEO service page (7 sections with FAQ accordion)
- `/geo` - GEO service page (7 sections with FAQ accordion)
- `/customers` - Customer showcase (10 client logos, testimonials, industry breakdown)
- `/case-studies` - Case studies page (5 detailed case studies, featured study, aggregate stats)
- `/audit` - Free AI Search Audit with Calendly (above-fold booking, 30-min sessions)
- `404` - Branded NotFound component with quick links

**Solutions Pages (11 total):**
- `/solutions` - Solutions landing page (directory of all industries)
- `/solutions/hospitality` - Hospitality & Restaurants SEO
- `/solutions/ecommerce` - E-commerce & Retail SEO
- `/solutions/manufacturing` - Manufacturing & Industrial SEO
- `/solutions/logistics` - Logistics & Transportation SEO
- `/solutions/automotive` - Automotive SEO
- `/solutions/construction` - Construction & Contractors SEO
- `/solutions/agriculture` - Agriculture & Equipment SEO
- `/solutions/technology` - Technology & SaaS SEO
- `/solutions/health-wellness` - Health & Wellness SEO
- `/solutions/consulting-coaching` - Consulting & Coaching SEO

**🎨 Visual Skeleton:**
- `/blog` - Blog index skeleton (6 placeholder posts, category filters, realistic design)

**⚠️ Placeholder Pages (Need Content):**
- `/enterprise` - Enterprise solutions (1 page remaining)

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

## 📖 Documentation

For comprehensive project documentation, including:
- Detailed implementation roadmap
- Code standards and conventions
- SEO best practices
- Common tasks and recipes
- Recent updates and decisions
- **Cloudflare Images setup guide** (complete step-by-step instructions)

See **[CLAUDE.md](./CLAUDE.md)**

## 🚧 Current Implementation Status

**Completed (Production-Ready - 19 pages):**
- ✅ Homepage with 6 sections and extreme typography
- ✅ SEO service page (7 sections + FAQ)
- ✅ GEO service page (7 sections + FAQ)
- ✅ **Solutions pages (11 total)** - Landing page + 10 industry-specific pages covering all 23 client companies
  - Hospitality & Restaurants, E-commerce & Retail, Manufacturing & Industrial
  - Logistics & Transportation, Automotive, Construction & Contractors
  - Agriculture & Equipment, Technology & SaaS, Health & Wellness, Consulting & Coaching
  - Each with 6 sections: Hero, Challenges, Approach, Services, Results, FAQ
- ✅ Customers page (10 client logos + testimonials)
- ✅ Case studies page (5 case studies + featured layout)
- ✅ Audit page with Calendly (above-fold booking, conversion-optimized)
- ✅ Blog visual skeleton (styled placeholder for reviewers)
- ✅ Branded 404 page
- ✅ Navigation with dropdowns (including Solutions dropdown) and theme toggle
- ✅ **Cloudflare Images integration** (upload, delivery, 5 variants configured)
- ✅ **Data-driven architecture** - solutions.ts (~2000 lines), customers.ts, case-studies.ts
- ✅ **SEO Infrastructure** - sitemap.xml (build-time generation), robots.txt configured
- ✅ **Code Quality** - 0 TypeScript errors, 0 linting errors, 0 linting warnings, 100% type-safe
- ✅ **Suppression Hygiene** - All 9 code suppressions documented and legitimate (FOUC prevention, UX patterns, SEO standards)

**In Progress:**
- 🚧 Blog CMS (Convex queries/mutations next)
- 🚧 Admin routes for blog management
- 🚧 Blog editor with markdown preview
- 🚧 Public blog routes (/blog/[slug])
- 🚧 WordPress migration script

**Remaining Placeholder:**
- ⏳ Enterprise page (1 page)

**Next Steps:**
1. Build Convex queries/mutations for blog posts
2. Create blog editor component with Cloudflare Images upload
3. Build admin authentication and routes
4. Implement public blog pages
5. WordPress content migration
6. Optional: Fill enterprise placeholder page

See [CLAUDE.md](./CLAUDE.md) for detailed next steps and implementation plan.

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
