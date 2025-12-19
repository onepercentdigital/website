# Maia Design System Style Guide

## Overview

This document defines the visual patterns and component guidelines for the One Percent Digital website using the **shadcn/ui Maia style system**. All pages follow these patterns for consistency.

---

## Core Design Principles

1. **Bare Icons** - Use icons without background containers for cleaner visuals
2. **Image Cards** - Feature cards use images with primary color overlay
3. **Grayscale Avatars** - Testimonials use grayscale avatar images
4. **Step Numbers** - Process steps use large numbers as primary visual
5. **OKLCH Colors** - Use OKLCH color format for better color consistency

---

## Visual Patterns

### 1. Bare Icons (Stats & Benefits)

Icons in stats and benefit sections render without background containers.

```tsx
// Stats section
<div className="text-center">
  <HugeiconsIcon
    icon={ChartIncreaseIcon}
    size={32}
    strokeWidth={1.5}
    className="mx-auto mb-3 text-primary"
  />
  <div className="mb-1 font-extrabold text-4xl tracking-tight lg:text-5xl">
    300+
  </div>
  <div className="text-muted-foreground text-sm">
    Clients Served
  </div>
</div>

// Benefits/Features
<div className="rounded-2xl bg-card p-8 ring-1 ring-foreground/10">
  <HugeiconsIcon
    icon={DollarCircleIcon}
    size={32}
    strokeWidth={1.5}
    className="mb-4 text-primary"
  />
  <h3 className="mb-3 font-bold text-xl lg:text-2xl">
    Highest ROI Channel
  </h3>
  <p className="text-muted-foreground leading-relaxed">
    Description text here.
  </p>
</div>
```

### 2. Image Cards with Color Overlay

Feature cards on the homepage use images with a primary color overlay.

```tsx
<Card className="overflow-hidden pt-0">
  <div className="relative aspect-video overflow-hidden">
    <div className="absolute inset-0 z-30 bg-primary opacity-50 mix-blend-color" />
    <img
      src="https://images.unsplash.com/photo-..."
      alt="Description"
      className="relative z-20 aspect-video w-full object-cover brightness-[0.6] grayscale transition-transform duration-300 group-hover:scale-105"
    />
  </div>
  <CardHeader>
    <CardTitle>Title</CardTitle>
    <CardDescription>Description</CardDescription>
  </CardHeader>
  <CardFooter>
    <Button render={<Link to="/path" />} variant="outline">
      Learn More
      <HugeiconsIcon icon={ArrowRight01Icon} size={16} strokeWidth={2} data-icon="inline-end" />
    </Button>
  </CardFooter>
</Card>
```

### 3. Grayscale Avatar Images (Testimonials)

Testimonials use actual images instead of initials.

```tsx
<div className="flex items-center gap-3">
  <img
    src="https://images.unsplash.com/photo-...?w=96&h=96&fit=crop&crop=face"
    alt="Person Name"
    className="size-12 rounded-full object-cover grayscale"
  />
  <div>
    <div className="font-semibold">Scott Goldfarb</div>
    <div className="text-muted-foreground text-sm">Owner, Company Name</div>
  </div>
</div>
```

### 4. Process Steps (Step Number Primary)

Process/approach sections use large step numbers as the primary visual with bare icons as secondary.

```tsx
<div className="rounded-2xl bg-card p-8 ring-1 ring-foreground/10 transition-all hover:shadow-lg hover:shadow-primary/10 hover:ring-primary/50">
  <div className="mb-4 flex items-start justify-between">
    <div className="font-bold text-4xl text-primary">01</div>
    <HugeiconsIcon
      icon={Search01Icon}
      size={24}
      strokeWidth={1.5}
      className="text-muted-foreground"
    />
  </div>
  <h3 className="mb-3 font-bold text-2xl">Step Title</h3>
  <p className="text-muted-foreground leading-relaxed">
    Step description.
  </p>
</div>
```

---

## Configuration

### components.json
```json
{
  "style": "base-maia",
  "iconLibrary": "hugeicons",
  "tailwind": {
    "baseColor": "neutral",
    "cssVariables": true
  }
}
```

### Color System (OKLCH)
```css
:root {
  --primary: oklch(0.75 0.12 195);  /* #00cccc cyan */
  --primary-foreground: oklch(0.145 0 0);
  --radius: 0.625rem;
}
```

---

## Component Patterns

### Button with Link
```tsx
// Use render prop (Base UI pattern)
<Button render={<Link to="/apply" />} size="lg">
  Apply To Work With Us
  <HugeiconsIcon icon={ArrowRight01Icon} size={18} strokeWidth={2} data-icon="inline-end" />
</Button>

// DO NOT use asChild (Radix pattern - not supported)
// <Button asChild><Link>...</Link></Button>  // WRONG
```

### HugeIcons
```tsx
import { HugeiconsIcon } from '@hugeicons/react';
import { ArrowRight01Icon, Brain01Icon } from '@hugeicons/core-free-icons';

// In buttons
<HugeiconsIcon icon={ArrowRight01Icon} size={18} strokeWidth={2} data-icon="inline-end" />

// Standalone (bare)
<HugeiconsIcon icon={Brain01Icon} size={32} strokeWidth={1.5} className="text-primary" />
```

### Card Component
```tsx
<Card className="group">
  <CardHeader>
    <CardTitle>Title</CardTitle>
    <CardDescription>Description</CardDescription>
  </CardHeader>
  <CardContent>Content</CardContent>
  <CardFooter>Footer</CardFooter>
</Card>
```

---

## Icon Mapping (Lucide to HugeIcons)

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

---

## Border Radius Scale

| Class | Size | Usage |
|-------|------|-------|
| `rounded-4xl` | 32px | Buttons, inputs, badges (pill shape) |
| `rounded-2xl` | 24px | Cards, dropdowns |
| `rounded-xl` | 16px | Smaller containers |
| `rounded-lg` | 10px | Nav items |

---

## Color Conventions

- **`primary`** = Brand/action color (cyan `#00cccc`)
- **`accent`** = Neutral gray for subtle backgrounds
- **`muted`** = Subdued backgrounds and text
- **`secondary`** = Alternative button style
- **`foreground/10`** = Subtle ring/border for cards

---

## Typography Scale

| Context | Classes |
|---------|---------|
| Hero | `text-5xl lg:text-7xl xl:text-8xl font-extrabold leading-[0.95] tracking-tighter` |
| Section | `text-4xl lg:text-6xl font-bold tracking-tight` |
| Subsection | `text-3xl lg:text-4xl font-bold` |
| Card Title | `text-xl lg:text-2xl` (use CardTitle component) |
| Body | `text-muted-foreground leading-relaxed tracking-wide` |
| Stats | `text-4xl lg:text-5xl font-extrabold tracking-tight` |

---

## Placeholder Images

Using Unsplash for placeholder images until real images are uploaded to Cloudflare Images:

| Context | Suggested Images |
|---------|------------------|
| GEO/AI | Abstract tech, neural networks, AI visualization |
| SEO | Search, analytics, growth charts |
| PM/Leads | Business meetings, handshakes, conversion |
| Case studies | Success, achievement, business growth |
| Team/Avatars | Professional headshots |
| Industries | Relevant industry imagery |

Format: `https://images.unsplash.com/photo-{id}?w=800&h=450&fit=crop`

For avatars: `https://images.unsplash.com/photo-{id}?w=96&h=96&fit=crop&crop=face`

---

## Do Not Use

1. **Icon containers with `bg-primary/10`** for stats and feature icons (use bare icons)
2. **`asChild` prop on buttons** (use `render` prop)
3. **Lucide icons** (use HugeIcons)
4. **Initials in testimonials** (use grayscale avatar images)
5. **`border border-border` on cards** (use Card component with ring)
6. **Two-tone headlines with `<span className="text-primary">`**
7. **Emojis** (unless user explicitly requests them)

---

## Files Reference

### Key Files
| Purpose | File Path |
|---------|-----------|
| Global styles (OKLCH) | `src/styles.css` |
| Shadcn config | `components.json` |
| Brand config | `src/config/brand.ts` |
| Homepage (reference) | `src/routes/index.tsx` |
| Navigation | `src/components/Navigation.tsx` |

### Component Directory
All shadcn/ui components are in `src/components/ui/`:
- button.tsx, card.tsx, badge.tsx, separator.tsx
- input.tsx, label.tsx, textarea.tsx, select.tsx
- accordion.tsx, dropdown-menu.tsx, alert-dialog.tsx
- And more...

---

*Last updated: December 19, 2025*
