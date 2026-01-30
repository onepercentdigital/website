# AGENTS.md

Guidelines for AI agents working on this codebase.

## Project Context

One Percent Digital marketing website built with TanStack Start + React 19 + Tailwind 4 + shadcn/ui Maia. Primary services: GEO (Generative Engine Optimization), SEO, and PPL (Pay Per Lead).

## Before Starting Work

1. Read `CLAUDE.md` for code patterns and design system rules
2. Check `docs/` folder for extended documentation
3. Run `bun run check-all` to verify current state
4. Reference `src/routes/index.tsx` as the canonical implementation

## Task Handoff Guidelines

When completing work or handing off to another agent:

- Document what was done and what remains
- Note any deviations from the original plan
- List files modified
- Include verification steps taken
- Mention any new issues discovered

## Common Pitfalls

Avoid these frequent mistakes:

- Using Lucide icons instead of HugeIcons
- Using `asChild` on Button instead of `render` prop
- Using `<img>` tags instead of the `Image` component
- Using `<a>` tags instead of `Link` from TanStack Router
- Forgetting to update related documentation after changes
- Not running type check before completing work
- Overriding CardTitle/CardDescription typography classes
- Adding emojis to copy (unless explicitly requested)

## Quality Checklist

Before marking work complete:

- [ ] `bun run check-all` passes (TypeScript + lint)
- [ ] Changes follow patterns in `CLAUDE.md`
- [ ] Related documentation updated if needed
- [ ] No console errors in browser (if applicable)
- [ ] Code uses `@/` path aliases for imports

## Extended Documentation

- `docs/ACCESSIBILITY.md` - Color contrast requirements (WCAG AA)
- `docs/CLOUDFLARE-IMAGES.md` - Image CDN setup and variants
- `docs/CLOUDFLARE-CACHE-RULES.md` - Caching configuration
- `docs/KNOWN-ISSUES.md` - Platform limitations (iOS Safari)

## Key Commands

```bash
bun run dev          # Start dev server (port 3000)
bun run check-all    # Type check + lint
bun run fix          # Auto-fix issues
bun run build        # Production build
```
