# CLAUDE.md

## Project Overview

**seo-website** is a modern full-stack React application built for onepercentseo.com using the TanStack Start framework. The project is configured for deployment on Cloudflare Workers and emphasizes SEO optimization, server-side rendering, and type safety.

## Architecture

### Tech Stack

- **Framework:** TanStack Start (full-stack React with SSR)
- **Runtime:** Cloudflare Workers (edge deployment)
- **Package Manager:** Bun 1.3.2
- **Language:** TypeScript 5.9.3
- **Build Tool:** Vite 7.2.2
- **Styling:** Tailwind CSS v4 with @tailwindcss/vite plugin
- **UI Components:** Shadcn/ui + Radix UI primitives
- **Icons:** Lucide React

### Core Libraries

- **TanStack Router v1.136.3** - File-based routing with SSR support
- **TanStack Query v5.90.9** - Server state management
- **TanStack Form v1.25.0** - Form handling with validation
- **Zod v4.1.12** - Schema validation
- **React 19.2.0** - UI library

### Development Tools

- **Biome v2.3.5** - Linting, formatting, and code organization
- **Vitest v4.0.9** - Unit testing
- **Testing Library** - React component testing
- **Wrangler v4.48.0** - Cloudflare Workers deployment

## Project Structure

```
seo-website/
├── src/
│   ├── components/
│   │   ├── ui/              # Shadcn UI components
│   │   ├── Header.tsx       # Main navigation component
│   │   └── demo.*           # Demo components (can be removed)
│   ├── routes/
│   │   ├── __root.tsx       # Root layout with shell
│   │   ├── index.tsx        # Home page
│   │   └── demo/            # Demo routes (can be removed)
│   ├── integrations/
│   │   └── tanstack-query/  # Query client configuration
│   ├── hooks/               # Custom React hooks
│   ├── lib/
│   │   └── utils.ts         # Utility functions (cn, etc.)
│   ├── data/                # Static data
│   ├── router.tsx           # Router configuration
│   ├── routeTree.gen.ts     # Auto-generated route tree
│   └── styles.css           # Global Tailwind styles
├── public/                  # Static assets
├── dist/                    # Build output
├── package.json             # Dependencies and scripts
├── tsconfig.json            # TypeScript configuration
├── vite.config.ts           # Vite configuration
├── wrangler.jsonc           # Cloudflare Workers config
├── biome.json               # Biome configuration
├── components.json          # Shadcn configuration
└── .cursorrules             # Cursor IDE rules

```

## Configuration

### TypeScript (`tsconfig.json`)

- **Target:** ES2022
- **Module Resolution:** Bundler
- **Strict Mode:** Enabled
- **Path Aliases:** `@/*` maps to `./src/*`
- **JSX:** react-jsx (automatic runtime)

### Biome (`biome.json`)

- **Formatter:** Spaces, single quotes for JS/TS
- **Linter:** Recommended rules + sorted classes
- **VCS:** Git integration enabled
- **Ignored Files:** routeTree.gen.ts, styles.css

### Cloudflare (`wrangler.jsonc`)

- **Name:** seo-website
- **Compatibility Date:** 2025-09-02
- **Compatibility Flags:** nodejs_compat
- **Entry Point:** @tanstack/react-start/server-entry
- **Observability:** Enabled

### Vite (`vite.config.ts`)

Plugins in order:
1. `vite-tsconfig-paths` - Path alias resolution
2. `@cloudflare/vite-plugin` - SSR environment
3. `@tailwindcss/vite` - Tailwind CSS processing
4. `@tanstack/react-start/plugin/vite` - TanStack Start integration
5. `@vitejs/plugin-react` - React support

## Development Workflow

### Available Scripts

```bash
# Development
bun run dev              # Start dev server on port 3000

# Building
bun run build            # Build for production + type check
bun run preview          # Preview production build (builds with bun runtime)
bun run serve            # Serve production build with Vite preview

# Deployment
bun run deploy           # Build with bun runtime, deploy to Cloudflare Workers

# Code Quality
bun run lint             # Run Biome linter
bun run lint-fix         # Fix auto-fixable issues
bun run lint-fix-unsafe  # Fix with unsafe transformations
bun run format           # Format code
bun run check            # Full Biome check
bun run type             # TypeScript type checking
bun run check:all        # Type check + Biome check

# Testing
bun run test             # Run Vitest tests

# Cloudflare
bun run cf-typegen       # Generate Cloudflare types
```

### Adding New Routes

TanStack Router uses file-based routing. To add a new route:

1. Create a new file in `src/routes/` (e.g., `about.tsx`)
2. The route tree will auto-regenerate in `src/routeTree.gen.ts`
3. Add navigation links using `<Link to="/about">About</Link>`

**Route Naming Conventions:**
- `index.tsx` - Root of directory (`/`)
- `about.tsx` - `/about`
- `blog.post.tsx` - `/blog/post`
- `_layout.tsx` - Layout without route segment
- `__root.tsx` - Root layout (special file)

### Adding UI Components

This project uses Shadcn/ui. To add components:

```bash
pnpx shadcn@latest add button
pnpx shadcn@latest add card
pnpx shadcn@latest add dialog
```

Components are installed to `src/components/ui/` and can be customized.

### Path Aliases

Use `@/*` to import from `src/`:

```typescript
import { Button } from '@/components/ui/button'
import { cn } from '@/lib/utils'
```

## Key Features

### Server-Side Rendering (SSR)

- **Full-document SSR** - Entire HTML rendered on server
- **Streaming** - Progressive content delivery
- **Multiple modes:**
  - SPA mode (client-side only)
  - Full SSR (complete server rendering)
  - Data-only (SSR data, client rendering)

### Type Safety

- End-to-end TypeScript from server to client
- Router context typing via `createRootRouteWithContext`
- Zod schema validation for forms and data
- Generated route types for type-safe navigation

### Data Fetching

**TanStack Query Integration:**
```typescript
const { data } = useQuery({
  queryKey: ['todos'],
  queryFn: fetchTodos,
})
```

**Router Loaders:**
```typescript
export const Route = createFileRoute('/posts')({
  loader: async () => fetchPosts(),
  component: PostsPage,
})
```

### Forms

Using TanStack Form with Zod validation:

```typescript
const form = useForm({
  defaultValues: { email: '' },
  validators: {
    onChange: z.object({
      email: z.string().email(),
    }),
  },
})
```

## Code Style Guidelines

### Biome Configuration

- **Indentation:** 2 spaces
- **Quotes:** Single quotes for JS/TS
- **Line Width:** Default (80 characters)
- **Import Organization:** Auto-organized on save
- **Class Sorting:** Tailwind classes must be sorted

### Best Practices

1. **Use path aliases:** `@/components/ui/button` instead of `../../../components/ui/button`
2. **Type everything:** No implicit `any` types
3. **Validate user input:** Use Zod schemas for all forms
4. **Server functions:** Prefix with `'use server'` directive
5. **Client components:** Use `'use client'` when needed
6. **Component structure:**
   ```typescript
   // 1. Imports
   import { createFileRoute } from '@tanstack/react-router'
   
   // 2. Route export
   export const Route = createFileRoute('/page')({ component: Page })
   
   // 3. Component
   function Page() {
     return <div>Content</div>
   }
   ```

## Testing

### Unit Tests with Vitest

```bash
bun run test
```

Test files should be colocated with source files or in `__tests__` directories:
- `component.test.tsx`
- `utils.test.ts`

### Testing Library

```typescript
import { render, screen } from '@testing-library/react'
import { expect, test } from 'vitest'

test('renders button', () => {
  render(<Button>Click me</Button>)
  expect(screen.getByText('Click me')).toBeInTheDocument()
})
```

## Deployment

### Cloudflare Workers

```bash
# Deploy to production
bun run deploy

# Deploy with wrangler directly
wrangler deploy
```

### Build Output

- **Client Bundle:** `dist/client/` - Static assets
- **Server Bundle:** `dist/server/` - Worker script
- **Manifest:** Auto-generated asset manifest

### Environment Variables

Configure in Cloudflare dashboard or `wrangler.jsonc`:

```jsonc
{
  "vars": {
    "API_URL": "https://api.example.com"
  }
}
```

## Common Tasks

### Cleaning Demo Files

Demo files are prefixed with `demo` and can be safely removed:

```bash
# Remove demo routes
rm -rf src/routes/demo/

# Remove demo components
rm src/components/demo.*

# Remove demo hooks
rm src/hooks/demo.*

# Remove demo data
rm src/data/demo.*
```

Don't forget to update `src/components/Header.tsx` to remove demo navigation links.

### Adding SEO Meta Tags

Edit `src/routes/__root.tsx`:

```typescript
export const Route = createRootRouteWithContext<MyRouterContext>()({
  head: () => ({
    meta: [
      { charSet: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { title: 'Your SEO Title' },
      { name: 'description', content: 'Your meta description' },
      { property: 'og:title', content: 'Your OG Title' },
      { property: 'og:description', content: 'Your OG Description' },
    ],
  }),
})
```

### Adding Analytics

Add tracking scripts in `src/routes/__root.tsx`:

```typescript
function RootDocument({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <head>
        <HeadContent />
        <script async src="https://analytics.example.com/script.js" />
      </head>
      <body>{children}</body>
    </html>
  )
}
```

## Troubleshooting

### Type Errors

```bash
# Regenerate route tree
bun run dev  # Auto-generates routeTree.gen.ts

# Check types manually
bun run type
```

### Build Failures

```bash
# Clear dist and node_modules
rm -rf dist node_modules

# Reinstall dependencies
bun install

# Rebuild
bun run build
```

### Biome Issues

```bash
# Auto-fix safe issues
bun run lint-fix

# Auto-fix with unsafe transformations
bun run lint-fix-unsafe

# Check what would be changed
bun run check
```

## Resources

- [TanStack Start Documentation](https://tanstack.com/start)
- [TanStack Router Documentation](https://tanstack.com/router)
- [TanStack Query Documentation](https://tanstack.com/query)
- [TanStack Form Documentation](https://tanstack.com/form)
- [Tailwind CSS v4 Documentation](https://tailwindcss.com)
- [Shadcn/ui Documentation](https://ui.shadcn.com)
- [Cloudflare Workers Documentation](https://developers.cloudflare.com/workers)
- [Biome Documentation](https://biomejs.dev)
- [Vitest Documentation](https://vitest.dev)

## Git Information

- **Current Branch:** main
- **Remote:** https://github.com/onepercentdigital/seo-website.git
- **Recent Commits:**
  - build(wrangler): name and dep update
  - Fix/biome
  - Package/cloudflare
  - build(repo): init

## Notes for AI Assistants

- **Demo Content:** Files prefixed with `demo` are example code and can be removed
- **Auto-Generated Files:** `src/routeTree.gen.ts` is auto-generated, never edit manually
- **Styling:** Use Tailwind utility classes, sorted alphabetically
- **Component Library:** Prefer Shadcn/ui components over custom implementations
- **Type Safety:** Always maintain strict TypeScript typing
- **SSR Consideration:** Be mindful of client-only code (use `'use client'` when needed)
- **Edge Runtime:** Code runs on Cloudflare Workers, avoid Node.js-specific APIs
