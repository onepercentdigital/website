# CLAUDE.md - Project Context for AI Assistants

## Project Overview

This is a **full-stack TypeScript web application** being developed as a replacement for **onepercentseo.com**. Built on a comprehensive TanStack starter template, it showcases modern React patterns and will be adapted for SEO-focused features and services.

### Repository
- **Name**: seo-website
- **Organization**: onepercentdigital
- **Git Repository**: https://github.com/onepercentdigital/seo-website.git
- **Current Branch**: feat/new-build
- **Package Manager**: Bun 1.3.2

## Tech Stack

### Core Framework
- **TanStack Start** - Full-stack React framework with SSR, streaming, and server functions
- **TanStack Router** - File-based routing with type-safe navigation
- **React 19.2.0** - Latest React with concurrent features
- **TypeScript 5.9.3** - Strict mode with no unused variables
- **Vite 7.2.2** - Lightning-fast build tool and dev server

### State Management & Data Fetching
- **TanStack Query** - Async state management, caching, and server synchronization
- **TanStack Store** - Lightweight client state with derived state support
- **TanStack Form** - Type-safe form handling with validation
- **Convex 1.29.2** - Real-time backend database with TypeScript schema

### UI & Styling
- **Tailwind CSS 4.1.17** - Utility-first CSS framework (latest v4)
- **Shadcn/ui** - High-quality component library on Radix UI primitives
- **Radix UI** - Unstyled, accessible component primitives
- **Lucide React** - Beautiful, consistent icon system
- **tw-animate-css** - Tailwind animation utilities
- **class-variance-authority** - Type-safe component variants

### AI Integration
- **Anthropic AI SDK 2.0.44** - Claude AI integration for chat and assistance
- **Vercel AI SDK 5.0.93** - Unified AI/ML interface
- **MCP (Model Context Protocol)** - AI context management and tool use

### Authentication & Backend
- **Clerk 5.55.0** - Complete authentication and user management
- **Convex** - Real-time backend with:
  - Schema: `todos` (text, completed), `products` (title, imageId, price)
  - CRUD operations for todos (list, add, toggle, remove)
  - Automatic indexing by creation time

### Deployment & Monitoring
- **Cloudflare Workers** - Edge deployment with global CDN
- **Wrangler 4.47.0** - Cloudflare deployment tooling
- **Sentry 10.25.0** - Error tracking, performance monitoring, and instrumentation
- **Node.js compatibility** - Enabled for Cloudflare Workers

### Developer Experience
- **Biome 2.3.6** - Ultra-fast linting and formatting (ESLint/Prettier replacement)
- **Vitest 4.0.10** - Blazing fast unit test framework
- **Testing Library** - React component testing utilities
- **TanStack DevTools** - Integrated debugging for Router, Query, and Store
- **TypeScript path aliases**: `@/*` → `./src/*`

## Project Structure

```
seo-website/
├── src/                      # Source code (~320KB, 1,229 LOC)
│   ├── components/          # React components
│   │   ├── ui/             # Shadcn components (button, input, select, slider, etc.)
│   │   ├── Header.tsx      # Main navigation with collapsible sidebar
│   │   ├── example-AIAssistant.tsx
│   │   └── example-GuitarRecommendation.tsx
│   ├── routes/             # File-based routing (TanStack Router)
│   │   ├── __root.tsx      # Root layout with providers (Clerk → Convex → Query)
│   │   ├── index.tsx       # Landing page showcasing TanStack Start
│   │   ├── demo/           # 19+ demo routes showcasing features
│   │   └── example.guitars/
│   ├── integrations/       # Third-party service wrappers
│   │   ├── clerk/          # Authentication provider and components
│   │   ├── convex/         # Database provider setup
│   │   └── tanstack-query/ # Query client configuration and devtools
│   ├── hooks/              # Custom React hooks (forms, contexts)
│   ├── lib/                # Utilities, stores, and helpers
│   │   ├── demo-store.ts   # TanStack Store examples
│   │   └── utils.ts        # Shared utilities (cn, etc.)
│   ├── data/               # Mock data and examples
│   ├── utils/              # Helper functions and tools
│   ├── env.ts              # Type-safe environment variables (T3 Env)
│   ├── router.tsx          # Router configuration with Sentry
│   ├── routeTree.gen.ts    # Auto-generated route tree (do not edit)
│   └── styles.css          # Global styles and Tailwind directives
│
├── convex/                  # Convex backend
│   ├── schema.ts           # Database schema definitions
│   ├── todos.ts            # Todo CRUD operations (queries & mutations)
│   ├── tsconfig.json       # Convex TypeScript config
│   └── _generated/         # Auto-generated Convex types
│
├── public/                  # Static assets
│
├── .cursorrules            # Cursor IDE rules (Convex, Sentry, Shadcn patterns)
├── biome.json              # Biome linting and formatting config
├── tsconfig.json           # TypeScript configuration
├── vite.config.ts          # Vite build configuration
├── wrangler.jsonc          # Cloudflare Workers deployment config
├── package.json            # Dependencies and scripts
└── README.md               # Getting started documentation
```

## Key Features & Capabilities

### Current Demo Features
The starter includes comprehensive examples of:

1. **TanStack Start Capabilities**
   - Server Functions (type-safe RPC)
   - API Routes
   - SSR Modes: SPA, Full SSR, Data-only
   - Streaming responses

2. **State Management**
   - TanStack Store with derived state
   - TanStack Query for server state caching
   - Real-time updates via Convex

3. **Forms & Validation**
   - Simple forms
   - Complex multi-field forms (address example)
   - TanStack Form integration

4. **Data Display**
   - TanStack Table with sorting, filtering, pagination
   - Example implementations with mock data

5. **Third-Party Integrations**
   - Clerk authentication (sign in/up/out flows)
   - Convex real-time database
   - Sentry error tracking and performance monitoring
   - Claude AI chat assistant

6. **Example Applications**
   - AI-powered chat interface
   - Guitar recommendation system
   - Todo list with real-time sync
   - Product catalog

### Planned: SEO Website Features
This foundation will be adapted to replace **onepercentseo.com** with features such as:
- SEO service pages and marketing content
- Lead generation and contact forms
- Case studies and portfolio
- Blog/content management
- Analytics and performance tracking
- Client dashboards (potential)

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

# AI Integration
ANTHROPIC_API_KEY=sk-ant-...

# Optional
VITE_APP_TITLE=OnePercent SEO
SERVER_URL=https://...
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

### Code Quality & Testing
```bash
# Type checking
bun run type
# or
tsc --noEmit

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
- **Files included**: `src/**/*`, `.vscode/**/*`, root config files
- **Files excluded**: `src/routeTree.gen.ts`, `src/styles.css`

### React Patterns
- **Functional components** only
- **Hooks** for state and side effects
- **File-based routing** - Add files to `src/routes/` for new pages
- **Provider composition** - Root layout wraps Clerk → Convex → TanStack Query
- **Type-safe routing** - Use `Link` component from `@tanstack/react-router`

### Component Organization
- **UI components** in `src/components/ui/` (Shadcn managed)
- **Feature components** in `src/components/`
- **Route components** in `src/routes/`
- **One component per file** for better code splitting

## Key Configuration Files

### `vite.config.ts`
Plugins in order:
1. TanStack DevTools
2. Cloudflare integration (SSR environment)
3. vite-tsconfig-paths (path aliases)
4. Tailwind CSS
5. TanStack Start
6. Vite React

### `tsconfig.json`
- Target: ES2022
- Module: ESNext
- Module resolution: bundler
- JSX: react-jsx
- Path aliases: `@/*` → `./src/*`

### `wrangler.jsonc`
- Name: seo-website
- Compatibility: 2025-09-02
- Node.js compatibility enabled
- Entry: `@tanstack/react-start/server-entry`

## Important Notes for AI Assistants

### Sentry Instrumentation
When creating server functions, wrap with Sentry spans:
```tsx
import * as Sentry from '@sentry/tanstackstart-react'

Sentry.startSpan({ name: 'Operation name' }, async () => {
  // Server function logic
})
```

### Convex Schema Patterns
- Use `v.id("tableName")` for foreign keys
- All documents have `_id` and `_creationTime` automatically
- Create indexes for common queries: `.index("indexName", ["field1", "field2"])`
- Use `v.union()` for discriminated unions
- Use `v.optional()` for nullable fields

### Shadcn Component Installation
```bash
# Always use latest version
pnpx shadcn@latest add <component-name>
```

### File Naming Conventions
- **Demo files** prefixed with `demo.` can be safely deleted
- **Example files** prefixed with `example.` are reference implementations
- **Route files** follow TanStack Router conventions:
  - `index.tsx` for index routes
  - `route.tsx` for layout routes
  - `$param.tsx` for dynamic segments

### Auto-Generated Files (Do Not Edit)
- `src/routeTree.gen.ts` - Generated by TanStack Router
- `convex/_generated/` - Generated by Convex

## Common Tasks

### Adding a New Route
1. Create file in `src/routes/` (e.g., `src/routes/about.tsx`)
2. Use `createFileRoute` from `@tanstack/react-router`
3. Export component from route definition
4. TanStack Router auto-generates route tree

### Adding a Shadcn Component
```bash
pnpx shadcn@latest add button
```

### Creating a Convex Table
1. Add table to `convex/schema.ts`
2. Create query/mutation file in `convex/`
3. Use `useQuery` or `useMutation` hooks in React

### Adding Environment Variables
1. Add to `.env.local`
2. Define in `src/env.ts` with Zod schema
3. Access via `import { env } from '@/env'`

## Resources & Documentation

- [TanStack Start Docs](https://tanstack.com/start)
- [TanStack Router Docs](https://tanstack.com/router)
- [TanStack Query Docs](https://tanstack.com/query)
- [TanStack Form Docs](https://tanstack.com/form)
- [TanStack Store Docs](https://tanstack.com/store)
- [TanStack Table Docs](https://tanstack.com/table)
- [Convex Docs](https://docs.convex.dev)
- [Clerk Docs](https://clerk.com/docs)
- [Shadcn UI](https://ui.shadcn.com)
- [Tailwind CSS](https://tailwindcss.com)
- [Biome](https://biomejs.dev)

## Project Status

- **Phase**: Foundation setup complete
- **Next Steps**: Adapt for onepercentseo.com requirements
- **Clean State**: No uncommitted changes
- **Ready for**: Feature development and customization

---

*Last Updated: 2025-11-17*
*Maintained for: AI-assisted development with Claude and other AI tools*
