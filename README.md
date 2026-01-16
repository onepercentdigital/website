# One Percent Digital - Marketing Website

Modern, high-performance marketing website built with TanStack Start for One Percent Digital's GEO, SEO, and PPL services. Production-ready with 25 routes (9 marketing + 2 blog + 13 solutions + 1 root layout) and a Convex-powered blog CMS.

## Quick Start

### Prerequisites
- [Bun](https://bun.sh) 1.3+
- [Convex](https://convex.dev) account

### Setup

```bash
# Install dependencies
bun install

# Create .env.local with required variables:
# VITE_CONVEX_URL, CONVEX_DEPLOYMENT, CLOUDFLARE_ACCOUNT_ID, CLOUDFLARE_API_TOKEN

# Start Convex (terminal 1)
bunx convex dev

# Start dev server (terminal 2)
bun run dev
```

Visit [http://localhost:3000](http://localhost:3000)

## Tech Stack

- **Framework**: TanStack Start + React 19 + TypeScript
- **Routing**: TanStack Router (file-based, type-safe)
- **Database**: Convex (real-time, TypeScript schema)
- **Styling**: Tailwind CSS v4 + Shadcn/ui (Maia style) + DM Sans
- **Images**: Cloudflare Images (CDN delivery)
- **Deployment**: Railway
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
| `bun run check` | Lint + format check |
| `bun run fix` | Auto-fix issues |
| `bun run check-all` | Full check (types + lint) |
| `bun run start` | Start production server |

## Routes

**Marketing (10 pages):**
`/` `/seo` `/geo` `/ppl` `/enterprise` `/about` `/customers` `/case-studies` `/apply`

**Solutions (13 pages):**
`/solutions` + 12 industries: hospitality, ecommerce, manufacturing, logistics, automotive, construction, agriculture, technology, health-wellness, finance-insurance, legal, real-estate

**Blog (2 pages):**
`/blog` `/blog/[slug]`

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

Proprietary - © 2026 One Percent Digital. All rights reserved.
