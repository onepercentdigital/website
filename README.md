# One Percent Digital - Marketing Website

Modern, high-performance marketing website built with TanStack Start for One Percent Digital's GEO, SEO, and Performance Marketing services. Production-ready with 23 routes, 12 industry-specific solution pages, and a Convex-powered blog CMS.

## Quick Start

### Prerequisites
- [Bun](https://bun.sh) 1.3+
- [Node.js](https://nodejs.org) 18+
- [Convex](https://convex.dev) account

### Setup

```bash
# Install dependencies
bun install

# Create .env.local with required variables:
# VITE_CONVEX_URL, VITE_CLERK_PUBLISHABLE_KEY, CLOUDFLARE_ACCOUNT_ID, CLOUDFLARE_API_TOKEN

# Start Convex (terminal 1)
npx convex dev

# Start dev server (terminal 2)
bun run dev
```

Visit [http://localhost:3000](http://localhost:3000)

## Tech Stack

- **Framework**: TanStack Start + React 19 + TypeScript
- **Routing**: TanStack Router (file-based, type-safe)
- **Database**: Convex (real-time, TypeScript schema)
- **Styling**: Tailwind CSS v4 + Shadcn/ui + Plus Jakarta Sans
- **Images**: Cloudflare Images (CDN delivery)
- **Deployment**: Cloudflare Workers
- **Auth**: Clerk (disabled for launch)
- **Linting**: Biome

## Project Structure

```
website/
├── src/
│   ├── components/       # React components + Shadcn UI
│   ├── routes/           # File-based routing (TanStack Router)
│   ├── config/brand.ts   # Centralized brand configuration
│   ├── lib/              # Utilities (seo.ts, cloudflare-images.ts)
│   └── data/             # TypeScript data files (customers, solutions, team)
├── convex/               # Backend schema and functions
├── scripts/              # Build scripts (sitemap, WordPress migration)
└── public/               # Static assets (sitemap.xml, robots.txt)
```

## Development

| Command | Description |
|---------|-------------|
| `bun run dev` | Start development server |
| `bun run build` | Production build |
| `bun run type` | TypeScript check |
| `bun run lint` | Biome linting |
| `bun run check-all` | Run all checks |
| `bun run deploy` | Deploy to Cloudflare |

## Routes

**Marketing (21 pages):**
- `/` `/seo` `/geo` `/performance-marketing` `/enterprise` `/about` `/customers` `/case-studies` `/apply`
- `/solutions` + 12 industries (hospitality, ecommerce, manufacturing, logistics, automotive, construction, agriculture, technology, health-wellness, finance-insurance, legal, real-estate)

**Blog (2 pages):**
- `/blog` - Post listing
- `/blog/[slug]` - Individual posts

## Documentation

For detailed documentation including:
- Architecture decisions and code standards
- SEO best practices and structured data
- Blog CMS implementation guide
- Cloudflare Images setup
- Design system (colors, typography, components)
- Restoration guide for admin routes

See **[CLAUDE.md](./CLAUDE.md)**

## License

Proprietary - © 2025 One Percent Digital. All rights reserved.
