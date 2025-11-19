# One Percent SEO - Marketing Website

Modern, high-performance marketing website built with TanStack Start for One Percent SEO/GEO services.

## 🚀 Overview

Full-stack TypeScript marketing website featuring:
- **Production-ready pages**: Homepage, GEO service page, SEO service page, and branded 404
- **Server-side rendering (SSR)** for optimal SEO/GEO performance
- **Extreme typography scale** with Plus Jakarta Sans Variable font
- **Real-time blog CMS** powered by Convex (to be implemented)
- **Dark/light theme** with system preference detection and synchronized toggles
- **Vercel-inspired design** with Tailwind CSS v4 and dramatic visual hierarchy
- **Type-safe routing** and data fetching with TanStack ecosystem
- **Flat URL structure** for better UX and SEO (`/seo`, `/geo`, `/customers`)
- **Comprehensive FAQs** on service pages with accordion UI

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
- **Cloudflare Images** - Image optimization and delivery (planned)
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
│   │   ├── audit.tsx       # Free AI Search Audit (placeholder)
│   │   ├── case-studies.tsx # Case studies (placeholder)
│   │   ├── enterprise.tsx  # Enterprise solutions (placeholder)
│   │   ├── solutions.tsx   # Solutions landing (placeholder)
│   │   └── blog.index.tsx  # Blog index (to be implemented)
│   │
│   ├── config/
│   │   └── brand.ts        # Centralized brand configuration
│   │
│   ├── lib/
│   │   ├── seo.ts          # SEO utilities and meta tag generators
│   │   └── utils.ts        # Shared utility functions
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

**✅ Production-Ready Pages:**
- `/` - Homepage (6 sections, extreme typography, fully optimized)
- `/seo` - SEO service page (7 sections with FAQ accordion)
- `/geo` - GEO service page (7 sections with FAQ accordion)
- `/customers` - Customer showcase (10 client logos, testimonials, industry breakdown)
- `404` - Branded NotFound component with quick links

**⚠️ Placeholder Pages (Need Content):**
- `/audit` - Free AI Search Audit booking (needs Calendly integration)
- `/case-studies` - Case studies
- `/enterprise` - Enterprise solutions
- `/solutions` - Solutions landing
- `/blog` - Blog index (needs CMS implementation)

**Note:** Services, Resources, and Solutions are visual navigation categories only. They don't appear in URLs.

## 📚 Key Features

### SEO Optimization
- Server-side rendering for all pages
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

See **[CLAUDE.md](./CLAUDE.md)**

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
