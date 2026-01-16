# CLAUDE.md

## Quick Reference

**Stack:** TanStack Start + React 19 + Tailwind 4 + shadcn/ui Maia
**Icons:** HugeIcons (not Lucide)  
**Deploy:** Railway  
**Reference:** `src/routes/index.tsx` (homepage is the canonical implementation)

---

## Page Audit Checklist

When auditing a page against homepage standards, check **every** element:

### Hero Section
- [ ] H1: `mb-6 lg:mb-8` (responsive margin)
- [ ] Paragraph: `text-muted-foreground leading-relaxed lg:text-lg` (responsive size ok, no base `text-lg`)
- [ ] CTA container: `gap-3` (not `gap-4`)
- [ ] Button icon: `size={18}` (not `size={20}`)

### Section Headers
- [ ] Container margin: `mb-12` (not `mb-16`)
- [ ] H2: `font-bold text-4xl leading-[1.1] tracking-tight lg:text-5xl`
- [ ] Paragraph: `text-muted-foreground` (no `text-lg`)

### Stats
- [ ] Icon: `size={28}`
- [ ] Value: `mb-1 font-extrabold text-4xl tracking-tight lg:text-5xl`
- [ ] Label: `text-muted-foreground text-sm`

### Icons (General Rule)
- [ ] All non-button icons: `size={28}` (feature icons, card icons, stats icons, decorative icons)
- [ ] Button icons only: `size={18}`

### Cards
- [ ] Use Card component (not manual `ring-1 ring-foreground/10`)
- [ ] CardTitle: no className override (exception: team cards use `text-xl`)
- [ ] CardDescription: no className override (exceptions: `leading-relaxed`, team cards use `text-primary`)

### Icon Size Exceptions
- [ ] Theme toggle icons: `size={16}` acceptable
- [ ] Inline list checkmarks (CheckmarkCircle02Icon): `size={20}` acceptable
- [ ] Dense feature list checkmarks (SolutionPageTemplate): `size={16}` acceptable
- [ ] Breadcrumb separator icons: `size={16}` acceptable
- [ ] Inline metadata icons (dates, read time, author): `size={16}` acceptable

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
- Add `cursor-pointer`, `group`, or hover effects to non-clickable cards

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

**Note:** Card has `has-[>img:first-child]:pt-0` rule. If your first child isn't an image but padding looks wrong, wrap content in CardContent.

### Icons (HugeIcons)
```tsx
import { HugeiconsIcon } from '@hugeicons/react'
import { ArrowRight01Icon } from '@hugeicons/core-free-icons'

// Bare icons (preferred)
<HugeiconsIcon icon={Brain01Icon} size={28} strokeWidth={1.5} className="text-primary" />

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

### Two-Column Service Sections
Used for GEO/SEO/PPL sections with faux visual demos. Alternate visual position for variety.
```tsx
<section className="px-6 py-16 lg:py-20">
  <div className="mx-auto max-w-7xl">
    <div className="grid gap-12 lg:grid-cols-2 lg:gap-16">
      {/* Content column */}
      <div className="flex flex-col justify-center">
        <h2 className="mb-4 font-bold text-4xl leading-[1.1] tracking-tight lg:text-5xl">
          Section Title
        </h2>
        <p className="mb-6 text-muted-foreground leading-relaxed">
          Description text.
        </p>
        <div>
          <Button render={<Link to="/page" />} size="lg">
            CTA Text
            <HugeiconsIcon icon={ArrowRight01Icon} size={18} strokeWidth={2} data-icon="inline-end" />
          </Button>
        </div>
      </div>
      {/* Visual demo column */}
      <div className="flex items-center">
        <Card className="w-full">...</Card>
      </div>
    </div>
  </div>
</section>
```
To alternate layout, add `lg:order-1` and `lg:order-2` to swap columns on desktop.

### Testimonial Cards
Use inline quotes with italic text, not standalone quote icons.
```tsx
<Card>
  <CardContent>
    <p className="mb-4 italic leading-relaxed">
      "Customer quote text here."
    </p>
    <p className="font-medium">Customer Name</p>
    <p className="text-muted-foreground text-sm">Title, Company</p>
  </CardContent>
</Card>
```

### Centered Grids
When a grid has fewer items than columns, center them to avoid "missing item" appearance.
```tsx
{/* For 2 items that would look odd in 3-column layout */}
<div className="mx-auto grid max-w-4xl justify-center gap-8 lg:grid-cols-2">
  ...
</div>
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

---

## Spacing

| Context | Classes |
|---------|---------|
| Standard section | `py-16 lg:py-20` |
| Hero section | `py-16 lg:py-20` (same as standard) |
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
bun run check-all    # Type check + lint
bun run fix          # Auto-fix issues
bun run build        # Production build (generates blog index + sitemap)
bun run start        # Start production server
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
├── lib/blog.ts        # Blog helper functions
├── content/blog/      # Blog posts as MDX files
└── data/              # Static data (customers, case-studies, team, categories)
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
- Auto-generated (do not edit): `src/routeTree.gen.ts`, `src/content/blog/_index.ts`

---

## Extended Docs

- `docs/CLOUDFLARE-IMAGES.md` - Image CDN setup
- `docs/KNOWN-ISSUES.md` - Platform limitations (iOS Safari)

## Blog (Static MDX)

Blog posts are stored as MDX files in `src/content/blog/`. Each file has YAML frontmatter with metadata.

**To add a new post:**
1. Create `src/content/blog/your-slug.mdx` with frontmatter and content
2. Run `bun run scripts/generate-blog-index.ts` to regenerate the index
3. The post will appear on `/blog` if status is "published"

**Frontmatter schema:**
```yaml
---
title: "Post Title"
slug: "post-slug"
excerpt: "Brief description..."
featuredImage: "https://imagedelivery.net/..."
category: "seo"
authorName: "One Percent Digital"
status: "published"
publishedAt: "2024-01-15T00:00:00.000Z"
modifiedAt: "2024-03-20T00:00:00.000Z"
seo:
  metaTitle: "Custom SEO Title"
  metaDescription: "Custom meta description..."
---
```
