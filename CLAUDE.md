# CLAUDE.md

## Quick Reference

**Stack:** TanStack Start + React 19 + Convex + Tailwind 4 + shadcn/ui Maia  
**Icons:** HugeIcons (not Lucide)  
**Deploy:** Cloudflare Workers  
**Reference:** `src/routes/index.tsx` (homepage is the canonical implementation)

---

## Page Audit Checklist

When auditing a page against homepage standards, check **every** element:

### Hero Section
- [ ] H1: `mb-6 lg:mb-8` (responsive margin)
- [ ] Paragraph: `text-muted-foreground leading-relaxed lg:text-lg` (no `text-lg` or `tracking-wide`)
- [ ] CTA container: `gap-3` (not `gap-4`)
- [ ] Button icon: `size={18}` (not `size={20}`)

### Section Headers
- [ ] Container margin: `mb-12` (not `mb-16`)
- [ ] H2: `font-bold text-4xl leading-[1.1] tracking-tight lg:text-5xl`
- [ ] Paragraph: `text-muted-foreground` (no `text-lg`)

### Stats
- [ ] Icon: `size={28}` (not `size={32}`)
- [ ] Value: `mb-1 font-extrabold text-4xl tracking-tight lg:text-5xl`
- [ ] Label: `text-muted-foreground text-sm`

### Cards
- [ ] Use Card component (not manual `ring-1 ring-foreground/10`)
- [ ] CardTitle: no className override
- [ ] CardDescription: no className override (except `leading-relaxed` if needed)

### Final CTA Section
- [ ] Border: `border-y` (both top and bottom)
- [ ] Container: `max-w-3xl`
- [ ] H2: `mb-4 font-bold text-3xl tracking-tight lg:text-4xl`
- [ ] Paragraph: `mb-8 max-w-xl text-muted-foreground`
- [ ] CTA container: `mb-6 ... gap-3`
- [ ] Button icon: `size={18}`

---

## Do Not

- Use `asChild` on Button (use `render` prop)
- Use Lucide icons (use HugeIcons)
- Override CardTitle/CardDescription typography
- Use manual borders/rings (use Card, Separator components)
- Use `<a>` tags (use `Link` from TanStack Router)
- Use `bg-primary/10` icon containers (use bare icons)
- Use em-dashes in copy
- Add emojis unless requested
- Use `tracking-wide` (not part of design system)

When auditing pages, compare element-by-element against the homepage. Use the Page Audit Checklist above.

---

## Component Patterns

### Buttons with Links
```tsx
// CORRECT
<Button render={<Link to="/apply" />} size="lg">
  Apply To Work With Us
  <HugeiconsIcon icon={ArrowRight01Icon} size={18} strokeWidth={2} data-icon="inline-end" />
</Button>

// WRONG - never use asChild
<Button asChild><Link>...</Link></Button>
```

### Cards
```tsx
<Card>
  <CardHeader>
    <CardTitle>Title</CardTitle>           {/* default: font-medium text-base */}
    <CardDescription>Desc</CardDescription> {/* default: text-muted-foreground text-sm */}
  </CardHeader>
  <CardContent>...</CardContent>
  <CardFooter>...</CardFooter>
</Card>
```

### Icons (HugeIcons)
```tsx
import { HugeiconsIcon } from '@hugeicons/react'
import { ArrowRight01Icon } from '@hugeicons/core-free-icons'

// Bare icons (preferred)
<HugeiconsIcon icon={Brain01Icon} size={32} strokeWidth={1.5} className="text-primary" />

// In buttons
<HugeiconsIcon icon={ArrowRight01Icon} size={18} strokeWidth={2} data-icon="inline-end" />
```

### Image Cards
```tsx
<Card className="group overflow-hidden pt-0">
  <div className="relative aspect-video overflow-hidden">
    <div className="absolute inset-0 z-30 bg-primary opacity-50 mix-blend-color" />
    <img 
      src={url}
      alt="..."
      className="relative z-20 aspect-video w-full object-cover brightness-[0.6] grayscale transition-transform duration-300 group-hover:scale-105" 
    />
  </div>
  <CardHeader>
    <CardTitle>Title</CardTitle>
    <CardDescription>Description</CardDescription>
  </CardHeader>
</Card>
```

---

## Typography

| Element | Classes |
|---------|---------|
| Hero H1 | `font-extrabold text-5xl leading-[0.95] tracking-tighter lg:text-7xl xl:text-8xl` |
| Hero paragraph | `text-muted-foreground leading-relaxed lg:text-lg` |
| Section H2 | `font-bold text-4xl leading-[1.1] tracking-tight lg:text-5xl` |
| Section paragraph | `text-muted-foreground` or `text-muted-foreground leading-relaxed` |
| Subsection H3 | `font-bold text-3xl lg:text-4xl` |
| Stats value | `font-extrabold text-4xl tracking-tight lg:text-5xl` |
| CardTitle | Component default (`font-medium text-base`) |
| CardDescription | Component default (`text-muted-foreground text-sm`) |

**Exception:** Homepage GEO/SEO/PPL cards use `text-2xl lg:text-3xl` on CardTitle as sub-hero elements.

---

## Spacing

| Context | Classes |
|---------|---------|
| Standard section | `py-16 lg:py-20` |
| Hero section | `pt-16 pb-8 lg:pt-20 lg:pb-10` |
| Bordered section | `border-border border-y px-6 py-16 lg:py-20` |
| Section container | `px-6` with `mx-auto max-w-7xl` |

---

## Icon Mapping (Lucide to HugeIcons)

| Lucide | HugeIcons |
|--------|-----------|
| ArrowRight | ArrowRight01Icon |
| ArrowLeft | ArrowLeft01Icon |
| Check | Tick02Icon |
| Menu | Menu01Icon |
| X | Cancel01Icon |
| Sun | Sun01Icon |
| Moon | Moon02Icon |
| Search | Search01Icon |
| ExternalLink | LinkSquare01Icon |

---

## New Page Template

```tsx
import { createFileRoute, Link } from '@tanstack/react-router'
import { HugeiconsIcon } from '@hugeicons/react'
import { ArrowRight01Icon } from '@hugeicons/core-free-icons'
import { Button } from '@/components/ui/button'
import { generateMetaTags } from '@/lib/seo'

export const Route = createFileRoute('/example')({
  component: ExamplePage,
  head: () => generateMetaTags({
    title: 'Page Title',
    description: 'Description under 160 chars.',
    url: 'https://op.digital/example',
  }),
})

function ExamplePage() {
  return (
    <section className="px-6 py-16 lg:py-20">
      <div className="mx-auto max-w-7xl">
        <h1 className="mb-6 font-extrabold text-5xl tracking-tighter lg:text-7xl">
          Page Title
        </h1>
        <p className="mb-8 text-muted-foreground leading-relaxed lg:text-lg">
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

---

## Commands

```bash
bun run dev          # Start dev server (port 3000)
bunx convex dev      # Start Convex backend (separate terminal)
bun run check-all    # Type check + lint
bun run fix          # Auto-fix issues
bun run build        # Production build
bun run deploy       # Deploy to Cloudflare
```

---

## Project Structure

```
src/
├── components/ui/     # shadcn Maia components (52 components)
├── routes/            # File-based routing
│   ├── index.tsx      # Homepage (reference implementation)
│   ├── seo.tsx, geo.tsx, ppl.tsx  # Service pages
│   ├── blog.index.tsx, blog.$slug.tsx  # Blog
│   └── solutions.*.tsx  # 12 industry pages
├── config/brand.ts    # Nav, footer, SEO config
├── lib/seo.ts         # generateMetaTags(), schema helpers
└── data/              # Static data (customers, case-studies, team)

convex/                # Backend (schema, queries, mutations)
```

---

## Key Files

| Purpose | Path |
|---------|------|
| Homepage (reference) | `src/routes/index.tsx` |
| Global styles | `src/styles.css` |
| Card component | `src/components/ui/card.tsx` |
| Button component | `src/components/ui/button.tsx` |
| SEO utilities | `src/lib/seo.ts` |
| Brand config | `src/config/brand.ts` |

---

## Design System

- **Style:** shadcn/ui Maia (soft, rounded, OKLCH colors)
- **Primary:** Blue (`oklch(0.61 0.11 222)` light / `oklch(0.71 0.13 215)` dark)
- **Font:** DM Sans Variable
- **Radius:** `rounded-4xl` buttons, `rounded-2xl` cards

### Color Semantics
- `primary` = CTAs, links, accents (blue)
- `accent` = Subtle backgrounds (gray)
- `muted` = Subdued backgrounds/text
- `secondary` = Alternative button style

---

## Code Standards

- Use `@/` path alias for imports
- Functional components only
- No unused variables (strict TypeScript)
- Biome: single quotes, 2-space indent, sorted Tailwind classes
- Auto-generated (do not edit): `src/routeTree.gen.ts`, `convex/_generated/`

---

## Extended Docs

- `docs/MAIA-STYLE-GUIDE.md` - Visual design patterns
- `docs/RESTORE-ADMIN-CMS.md` - Re-enable admin routes
- `docs/BLOG-CMS.md` - Blog architecture
- `docs/CLOUDFLARE-IMAGES.md` - Image CDN setup
