# CLAUDE.md - Project Context for AI Assistants

## Critical Rules

### Design System (Maia Style)

This project uses the **shadcn/ui Maia style** - a soft, rounded aesthetic with OKLCH colors.

- **Primary color**: `#00cccc` cyan (OKLCH: `oklch(0.75 0.12 195)`)
- **Font**: DM Sans Variable
- **Style**: `base-maia` with aggressive rounding
- **Icons**: HugeIcons (not Lucide)
- **Color format**: OKLCH in CSS variables

### Color Usage
- `primary` = Brand/action color (cyan) - use for CTAs, links, accents
- `accent` = Neutral gray for subtle backgrounds (Maia convention)
- `muted` = Subdued backgrounds and text
- `secondary` = Alternative button style

### Border Radius Scale
- `rounded-4xl` (32px) - Buttons, inputs, badges (pill shape)
- `rounded-2xl` - Cards, dropdowns
- `rounded-xl` - Icon containers
- `rounded-lg` - Nav items, smaller elements

### Button Patterns
```tsx
// Primary CTA (default variant)
<Button render={<Link to="/apply" />} size="lg">
  Apply To Work With Us
  <HugeiconsIcon icon={ArrowRight01Icon} size={18} strokeWidth={2} data-icon="inline-end" />
</Button>

// Outline variant
<Button render={<Link to="/case-studies" />} variant="outline">
  View Case Studies
</Button>

// IMPORTANT: Use render prop, NOT asChild
// WRONG: <Button asChild><Link>...</Link></Button>
// RIGHT: <Button render={<Link to="..." />}>...</Button>
```

### Card Patterns
```tsx
// Cards use ring instead of border
<Card className="group">
  <CardHeader>
    <CardTitle>Title</CardTitle>
    <CardDescription>Description</CardDescription>
  </CardHeader>
  <CardContent>...</CardContent>
  <CardFooter>...</CardFooter>
</Card>
```

### Icon Usage (HugeIcons)
```tsx
import { HugeiconsIcon } from '@hugeicons/react';
import { ArrowRight01Icon, Brain01Icon } from '@hugeicons/core-free-icons';

// In buttons - add data-icon attribute
<HugeiconsIcon icon={ArrowRight01Icon} size={18} strokeWidth={2} data-icon="inline-end" />

// Bare icons (preferred - no containers)
<HugeiconsIcon icon={Brain01Icon} size={32} strokeWidth={1.5} className="text-primary" />

// Stats icons (centered, bare)
<HugeiconsIcon icon={Brain01Icon} size={32} strokeWidth={1.5} className="mx-auto mb-3 text-primary" />
```

### Image Cards with Color Overlay
```tsx
<Card className="group flex flex-col overflow-hidden pt-0">
  <div className="relative aspect-video overflow-hidden">
    <div className="absolute inset-0 z-30 bg-primary opacity-50 mix-blend-color" />
    <img 
      src="https://images.unsplash.com/photo-xxx?w=800&h=450&fit=crop" 
      alt="Description"
      className="relative z-20 aspect-video w-full object-cover brightness-[0.6] grayscale transition-transform duration-300 group-hover:scale-105" 
    />
  </div>
  <CardHeader>
    <CardTitle>Title</CardTitle>
    <CardDescription>Description</CardDescription>
  </CardHeader>
</Card>
```

### Grayscale Avatar Images
```tsx
// For testimonials and team members
<img 
  src="https://images.unsplash.com/photo-xxx?w=96&h=96&fit=crop&crop=face" 
  alt="Person Name"
  className="size-12 rounded-full object-cover grayscale"
/>
```

### Process Steps Pattern
```tsx
// Step number as primary visual, icon as secondary
<div className="rounded-2xl bg-card p-8">
  <div className="mb-4 flex items-start justify-between">
    <div className="font-bold text-4xl text-primary">01</div>
    <HugeiconsIcon icon={StepIcon} size={24} strokeWidth={1.5} className="text-muted-foreground" />
  </div>
  <h3 className="mb-2 font-semibold text-xl">Step Title</h3>
  <p className="text-muted-foreground">Step description.</p>
</div>
```

### Icon Mapping (Lucide to HugeIcons)
| Lucide | HugeIcons |
|--------|-----------|
| ArrowRight | ArrowRight01Icon |
| ArrowLeft | ArrowLeft01Icon |
| ArrowDown | ArrowDown01Icon |
| Check | Tick02Icon |
| ChevronDown | ArrowDown01Icon |
| Menu | Menu01Icon |
| X | Cancel01Icon |
| Sun | Sun01Icon |
| Moon | Moon01Icon |
| Plus | PlusSignIcon |
| Search | Search01Icon |
| ExternalLink | LinkSquare01Icon |

### Typography Scale
- **Hero**: `text-5xl lg:text-7xl xl:text-8xl font-extrabold leading-[0.95] tracking-tighter`
- **Section**: `text-4xl lg:text-5xl font-bold tracking-tight`
- **Subsection**: `text-3xl lg:text-4xl font-bold`
- **Card Title**: `text-xl lg:text-2xl` (use CardTitle component)
- **Body**: `text-muted-foreground leading-relaxed`
- **Stats**: `text-4xl lg:text-5xl font-extrabold tracking-tight`

### Hover & Focus States
- Buttons: Built-in via variants (`hover:bg-primary/80` for default)
- Cards: Use `group` class, minimal hover changes
- Focus: `focus-visible:ring-[3px] focus-visible:ring-ring/50`
- Transitions: `transition-all` or `transition-colors`

### Required Patterns
- Always use `Link` from `@tanstack/react-router` for internal navigation
- Use `render` prop on Button for links (not `asChild`)
- Use `generateMetaTags()` helper for SEO in route `head()` functions
- Use `@/` path alias instead of relative imports
- Use Card/CardHeader/CardContent/CardFooter for card layouts
- Use Badge component for labels/tags
- Use Separator component for dividers

### CTA Standard
- **Text**: "Apply To Work With Us"
- **Route**: `/apply`
- **Style**: Default Button with ArrowRight01Icon

### Do Not
- Use `asChild` prop on buttons (use `render` prop instead)
- Use Lucide icons (use HugeIcons)
- Use `border border-border` on cards (use Card component's ring)
- Add emojis unless user requests them
- Use `<a>` tags for internal navigation (use `Link`)
- Add two-tone coloring to headlines with `<span className="text-primary">`
- Use `bg-primary/10` icon containers (use bare icons instead)
- Use initials in colored circles for avatars (use grayscale images)

---

## Project Overview

**One Percent Digital** - Full-stack TypeScript marketing website with blog CMS.

- **Framework**: TanStack Start + React 19
- **Database**: Convex (real-time)
- **Deployment**: Cloudflare Workers
- **Images**: Cloudflare Images CDN

### Current State
- **25 routes** (9 marketing + 2 blog + 13 solutions + 1 root layout)
- **Admin CMS**: Disabled for launch (manage via Convex dashboard)
- **Code quality**: 0 TypeScript errors, 0 linting errors

---

## Tech Stack

### Core Framework
- **TanStack Start 1** - Full-stack React framework with SSR
- **TanStack Router 1** - File-based routing with type-safe navigation
- **React 19** - Latest React with concurrent features
- **TypeScript 5** - Strict mode enabled
- **Vite 7** - Build tool and dev server

### State & Data
- **TanStack Query 5** - Async state management
- **TanStack Form 1** - Type-safe form handling
- **Convex 1** - Real-time backend database
- **Zod 4** - Schema validation (v4 breaking changes from v3)

### UI & Styling
- **Tailwind CSS 4** - Utility-first CSS with OKLCH colors
- **Shadcn/ui (Maia style)** - Component library on Base UI
- **HugeIcons** - Icon system (`@hugeicons/react`, `@hugeicons/core-free-icons`)
- **DM Sans Variable** - Primary font

### Deployment
- **Cloudflare Workers** - Edge deployment
- **Cloudflare Images** - Image CDN (5 variants configured)
- **Wrangler 4** - Deployment tooling

### Dev Tools
- **Biome 2** - Linting and formatting
- **Vitest 4** - Unit testing

### Removed (Restorable)
- **Clerk** - Authentication (see `docs/RESTORE-ADMIN-CMS.md`)
- **Sentry** - Error tracking (see `docs/RESTORE-ADMIN-CMS.md`)
- **Admin CMS routes** - Blog management (code in git history)

---

## Project Structure

```
website/
├── src/
│   ├── components/
│   │   ├── ui/              # Shadcn Maia components
│   │   ├── BlogEditor.tsx   # Markdown editor
│   │   ├── Logo.tsx         # Theme-aware logo
│   │   ├── Navigation.tsx   # Header with dropdowns
│   │   ├── Footer.tsx       # Multi-column footer
│   │   ├── ThemeToggle.tsx  # Dark/light mode
│   │   ├── NotFound.tsx     # 404 page
│   │   └── SEO.tsx          # Structured data
│   │
│   ├── routes/              # File-based routing
│   │   ├── __root.tsx       # Root layout
│   │   ├── index.tsx        # Homepage (reference implementation)
│   │   ├── seo.tsx          # SEO service page
│   │   ├── geo.tsx          # GEO service page
│   │   ├── pm.tsx           # Performance Marketing page
│   │   ├── customers.tsx    # Customer showcase
│   │   ├── case-studies.tsx # Case studies
│   │   ├── apply.tsx        # Calendly booking
│   │   ├── about.tsx        # Team bios
│   │   ├── enterprise.tsx   # Enterprise solutions
│   │   ├── blog.index.tsx   # Blog listing
│   │   ├── blog.$slug.tsx   # Blog post
│   │   ├── solutions.index.tsx # Solutions hub
│   │   └── solutions.*.tsx  # 12 industry pages
│   │
│   ├── config/
│   │   └── brand.ts         # Brand config (nav, footer, SEO)
│   │
│   ├── lib/
│   │   ├── seo.ts           # SEO utilities
│   │   ├── cloudflare-images.ts # Image upload
│   │   └── utils.ts         # Shared utilities (cn helper)
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
├── convex/                  # Backend
│   ├── schema.ts            # Database schema
│   ├── posts.ts             # Post queries/mutations
│   └── categories.ts        # Category operations
│
├── docs/                    # Extended documentation
│   ├── MAIA-MIGRATION-CONVERSATION.md # Design system migration notes
│   └── ...
│
└── public/
    ├── sitemap.xml
    └── robots.txt
```

---

## Key Files Reference

| Purpose | File Path |
|---------|-----------|
| Global styles (OKLCH colors) | `src/styles.css` |
| Shadcn config | `components.json` |
| Brand config | `src/config/brand.ts` |
| Homepage (reference) | `src/routes/index.tsx` |
| Navigation | `src/components/Navigation.tsx` |
| Button component | `src/components/ui/button.tsx` |
| Card component | `src/components/ui/card.tsx` |

---

## Development Workflow

### Commands

```bash
# Install dependencies
bun install

# Start dev server (port 3000)
bun run dev

# Start Convex backend (separate terminal)
bunx convex dev

# Type check
bun run type

# Lint + format check
bun run check

# Auto-fix issues
bun run fix

# Run all checks (types + lint)
bun run check-all

# Build for production
bun run build

# Deploy to Cloudflare
bun run deploy
```

### Adding a Shadcn Component

```bash
bunx shadcn@latest add button
```

Components are installed with Maia style (configured in `components.json`).

---

## Code Standards

### TypeScript
- Strict mode enabled
- No unused variables
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
- Use `render` prop for Button links

### Auto-Generated Files (Do Not Edit)
- `src/routeTree.gen.ts`
- `convex/_generated/`

---

## Common Tasks

### Adding a New Page

```tsx
import { createFileRoute, Link } from '@tanstack/react-router'
import { HugeiconsIcon } from '@hugeicons/react'
import { ArrowRight01Icon } from '@hugeicons/core-free-icons'
import { Button } from '@/components/ui/button'
import { Card, CardHeader, CardTitle, CardContent } from '@/components/ui/card'
import { generateMetaTags } from '@/lib/seo'

export const Route = createFileRoute('/example')({
  component: ExamplePage,
  head: () => generateMetaTags({
    title: 'Example Page',
    description: 'Page description.',
    url: 'https://onepercentseo.com/example',
  }),
})

function ExamplePage() {
  return (
    <section className="px-6 py-16 lg:py-24">
      <div className="mx-auto max-w-7xl">
        <h1 className="mb-6 font-extrabold text-5xl tracking-tighter lg:text-7xl">
          Page Title
        </h1>
        <p className="mb-8 text-muted-foreground lg:text-lg">
          Description text.
        </p>
        <Button render={<Link to="/apply" />} size="lg">
          Apply To Work With Us
          <HugeiconsIcon icon={ArrowRight01Icon} size={18} strokeWidth={2} data-icon="inline-end" />
        </Button>
      </div>
    </section>
  )
}
```

### Creating Image Card Grids

```tsx
<div className="grid gap-6 lg:grid-cols-3">
  {items.map((item) => (
    <Card key={item.id} className="group flex flex-col overflow-hidden pt-0">
      <div className="relative aspect-video overflow-hidden">
        <div className="absolute inset-0 z-30 bg-primary opacity-50 mix-blend-color" />
        <img 
          src={item.image} 
          alt={item.title}
          className="relative z-20 aspect-video w-full object-cover brightness-[0.6] grayscale transition-transform duration-300 group-hover:scale-105" 
        />
      </div>
      <CardHeader>
        <CardTitle>{item.title}</CardTitle>
        <CardDescription>{item.description}</CardDescription>
      </CardHeader>
      <CardFooter className="mt-auto">
        <Button render={<Link to={item.href} />} variant="outline" size="sm">
          Learn more
          <HugeiconsIcon icon={ArrowRight01Icon} size={14} strokeWidth={2} data-icon="inline-end" />
        </Button>
      </CardFooter>
    </Card>
  ))}
</div>
```

### Creating Stats Sections

```tsx
<div className="grid gap-8 lg:grid-cols-4">
  {stats.map((stat) => (
    <div key={stat.label} className="text-center">
      <HugeiconsIcon icon={stat.icon} size={32} strokeWidth={1.5} className="mx-auto mb-3 text-primary" />
      <div className="mb-1 font-extrabold text-4xl tracking-tight lg:text-5xl">{stat.value}</div>
      <div className="text-muted-foreground text-sm">{stat.label}</div>
    </div>
  ))}
</div>
```

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

---

## Blog System

### Current State
- Public routes active (`/blog`, `/blog/[slug]`)
- Admin routes disabled (manage via Convex dashboard)

### Using Convex Queries
```typescript
// CORRECT - Use Convex native hooks
import { useQuery } from 'convex/react'
const posts = useQuery(api.posts.list, {})
```

---

## External Documentation

- **[docs/MAIA-STYLE-GUIDE.md](docs/MAIA-STYLE-GUIDE.md)** - Comprehensive visual style guide
- **[docs/RESTORE-ADMIN-CMS.md](docs/RESTORE-ADMIN-CMS.md)** - Re-enable admin routes
- **[docs/BLOG-CMS.md](docs/BLOG-CMS.md)** - Blog system architecture
- **[docs/CLOUDFLARE-IMAGES.md](docs/CLOUDFLARE-IMAGES.md)** - Image upload setup

---

## Resources

- [TanStack Start Docs](https://tanstack.com/start)
- [Shadcn UI](https://ui.shadcn.com)
- [HugeIcons](https://hugeicons.com)
- [Tailwind CSS v4](https://tailwindcss.com)
