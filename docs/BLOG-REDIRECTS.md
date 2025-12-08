# Blog URL Redirects

This document explains how to set up redirects from the old blog URLs (without `/blog/` prefix) to the new URLs (with `/blog/` prefix).

## Background

The previous site had blog posts at the root level (e.g., `/seo-challenges-for-manufacturing-companies`). The new site uses `/blog/` prefix for all posts (e.g., `/blog/seo-challenges-for-manufacturing-companies`).

To preserve SEO value and prevent broken links, redirects need to be configured.

## Recommended Solution: Cloudflare Bulk Redirects

Cloudflare Bulk Redirects are recommended because they:
- Execute at the edge (fast, before hitting the origin server)
- Are portable across domains (important for future domain migration)
- Support both pattern matching and explicit URL lists

### Setup Instructions

1. Log in to the [Cloudflare Dashboard](https://dash.cloudflare.com)
2. Select your account and zone (domain)
3. Navigate to **Rules** > **Redirect Rules**
4. Click **Create rule**

### Option A: Explicit Redirect List (Recommended)

Create a Bulk Redirect List with all blog slugs:

1. Go to **Rules** > **Bulk Redirects**
2. Click **Create a Bulk Redirect List**
3. Name it `blog-legacy-redirects`
4. Add each redirect with:
   - Source URL: `/{slug}`
   - Target URL: `/blog/{slug}`
   - Status: `301` (Permanent)
   - Preserve query string: `Yes`

### Option B: Dynamic Redirect Rule

If you want a pattern-based approach, create a Redirect Rule:

1. Go to **Rules** > **Redirect Rules**
2. Create a rule with:
   - **If**: Custom filter expression
   - **Expression**: `(http.request.uri.path in {"/how-valuable-is-seo-to-manufacturers" "/seo-challenges-for-manufacturing-companies" ...})`
   - **Then**: Dynamic redirect
   - **Expression**: `concat("/blog", http.request.uri.path)`
   - **Status code**: 301

Note: Cloudflare free plans have limited redirect rules. Bulk Redirects may be more suitable for large lists.

## Blog Slugs to Redirect

The following 36 slugs need redirects from `/{slug}` to `/blog/{slug}`:

```
how-valuable-is-seo-to-manufacturers
seo-challenges-for-manufacturing-companies
the-future-of-seo-and-manufacturing
seo-benefits-for-manufacturing-companies
importance-of-seo-for-manufacturing-businesses
how-seo-drives-business-for-industrial-manufacturing
seo-strategies-and-tactics-for-manufacturers
types-of-seo-for-manufacturing
how-seo-for-manufacturing-work
keyword-stuffing-seo
how-to-do-keyword-research
meta-description
internal-linking-seo
duplicate-content-seo
guest-posting-seo
how-do-search-engines-use-sitemaps
content-cluster
technical-seo
topical-authority
types-of-keywords
white-hat-vs-black-hat-seo
search-intent
how-to-reduce-bounce-rate
on-page-vs-off-page-seo
copywriting
anchor-link
how-to-do-seo-audit
domain-authority
seo-vs-ppc
how-to-build-backlinks
how-to-recover-from-google-algorithm-update
how-to-use-google-analytics-for-seo
benefits-of-local-seo
how-to-do-local-keyword-research
how-to-rank-higher-on-google-maps
how-to-do-seo-for-google-my-business
how-to-build-local-citations
```

## CSV Format for Bulk Import

You can import redirects via CSV. Format:

```csv
source_url,target_url,status_code
/how-valuable-is-seo-to-manufacturers,/blog/how-valuable-is-seo-to-manufacturers,301
/seo-challenges-for-manufacturing-companies,/blog/seo-challenges-for-manufacturing-companies,301
/the-future-of-seo-and-manufacturing,/blog/the-future-of-seo-and-manufacturing,301
/seo-benefits-for-manufacturing-companies,/blog/seo-benefits-for-manufacturing-companies,301
/importance-of-seo-for-manufacturing-businesses,/blog/importance-of-seo-for-manufacturing-businesses,301
/how-seo-drives-business-for-industrial-manufacturing,/blog/how-seo-drives-business-for-industrial-manufacturing,301
/seo-strategies-and-tactics-for-manufacturers,/blog/seo-strategies-and-tactics-for-manufacturers,301
/types-of-seo-for-manufacturing,/blog/types-of-seo-for-manufacturing,301
/how-seo-for-manufacturing-work,/blog/how-seo-for-manufacturing-work,301
/keyword-stuffing-seo,/blog/keyword-stuffing-seo,301
/how-to-do-keyword-research,/blog/how-to-do-keyword-research,301
/meta-description,/blog/meta-description,301
/internal-linking-seo,/blog/internal-linking-seo,301
/duplicate-content-seo,/blog/duplicate-content-seo,301
/guest-posting-seo,/blog/guest-posting-seo,301
/how-do-search-engines-use-sitemaps,/blog/how-do-search-engines-use-sitemaps,301
/content-cluster,/blog/content-cluster,301
/technical-seo,/blog/technical-seo,301
/topical-authority,/blog/topical-authority,301
/types-of-keywords,/blog/types-of-keywords,301
/white-hat-vs-black-hat-seo,/blog/white-hat-vs-black-hat-seo,301
/search-intent,/blog/search-intent,301
/how-to-reduce-bounce-rate,/blog/how-to-reduce-bounce-rate,301
/on-page-vs-off-page-seo,/blog/on-page-vs-off-page-seo,301
/copywriting,/blog/copywriting,301
/anchor-link,/blog/anchor-link,301
/how-to-do-seo-audit,/blog/how-to-do-seo-audit,301
/domain-authority,/blog/domain-authority,301
/seo-vs-ppc,/blog/seo-vs-ppc,301
/how-to-build-backlinks,/blog/how-to-build-backlinks,301
/how-to-recover-from-google-algorithm-update,/blog/how-to-recover-from-google-algorithm-update,301
/how-to-use-google-analytics-for-seo,/blog/how-to-use-google-analytics-for-seo,301
/benefits-of-local-seo,/blog/benefits-of-local-seo,301
/how-to-do-local-keyword-research,/blog/how-to-do-local-keyword-research,301
/how-to-rank-higher-on-google-maps,/blog/how-to-rank-higher-on-google-maps,301
/how-to-do-seo-for-google-my-business,/blog/how-to-do-seo-for-google-my-business,301
/how-to-build-local-citations,/blog/how-to-build-local-citations,301
```

## Testing

After setting up redirects:

1. Clear your browser cache
2. Visit an old URL (e.g., `https://yourdomain.com/technical-seo`)
3. Verify it redirects to `https://yourdomain.com/blog/technical-seo`
4. Check that the response is a 301 (permanent redirect)

Use curl to verify:
```bash
curl -I https://yourdomain.com/technical-seo
```

Expected response includes:
```
HTTP/2 301
location: https://yourdomain.com/blog/technical-seo
```

## Domain Migration Notes

When migrating to a new domain:

1. **Cloudflare Bulk Redirects stay with the zone** - If you transfer the domain to a new Cloudflare zone, you'll need to recreate the redirects
2. **Export before migration** - Export your Bulk Redirect List before making changes
3. **Update target URLs** - If the new domain uses the same `/blog/` structure, you can reuse the same redirect configuration
4. **Chain redirects** - You may need to redirect from old domain to new domain, then from root slug to `/blog/` slug. Cloudflare handles redirect chains, but try to minimize hops for SEO

## Alternative: Server-Side Redirects

If you prefer server-side redirects (handled by Cloudflare Workers or the application):

```typescript
// In a Cloudflare Worker or middleware
const LEGACY_BLOG_SLUGS = new Set([
  'how-valuable-is-seo-to-manufacturers',
  'seo-challenges-for-manufacturing-companies',
  // ... all slugs
]);

export function handleRequest(request: Request): Response | null {
  const url = new URL(request.url);
  const slug = url.pathname.slice(1); // Remove leading slash
  
  if (LEGACY_BLOG_SLUGS.has(slug)) {
    return Response.redirect(`${url.origin}/blog/${slug}`, 301);
  }
  
  return null; // Continue to origin
}
```

This approach keeps redirects in code and version control, but executes slightly slower than Cloudflare's edge redirects.
