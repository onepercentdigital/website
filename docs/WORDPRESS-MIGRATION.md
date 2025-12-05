# WordPress Migration Guide

This guide explains how to migrate content from WordPress to the Convex-based blog CMS.

## Prerequisites

- WordPress XML export file
- Convex backend running (`npx convex dev`)
- Cloudflare Images configured (see `docs/CLOUDFLARE-IMAGES.md`)
- Environment variables set in `.env.local`

## Step 1: Export WordPress Content

1. WordPress Admin → Tools → Export
2. Select "All content"
3. Download XML file (e.g., `wordpress-export.xml`)

## Step 2: Run Migration Script

The migration script is at `scripts/migrate-wordpress.ts`. It will:
1. Parse WordPress XML export
2. Extract posts, categories, authors, dates
3. Download images from live WordPress site
4. Upload images to Cloudflare Images
5. Convert HTML content to Markdown
6. Create categories in Convex
7. Create posts in Convex with updated image URLs
8. Preserve all metadata (publish dates, authors, etc.)

### Dry Run (Recommended First)

```bash
bun run scripts/migrate-wordpress.ts /path/to/wordpress-export.xml --dry-run
```

### Full Migration

```bash
bun run scripts/migrate-wordpress.ts /path/to/wordpress-export.xml
```

## Migration Features

- **Idempotent**: Safe to re-run, skips existing posts
- **Retry logic**: 3 attempts per image with delays
- **Rate limiting**: 500ms between uploads to avoid API throttling
- **Error handling**: Collects errors, continues processing
- **Progress logging**: Detailed output for monitoring
- **Image migration**: Automatic download and upload to Cloudflare
- **HTML to Markdown**: Preserves formatting, links, images
- **Metadata preservation**: Publish dates, authors, categories, excerpts

## Example Output

```
Migration Summary:
Posts processed: 38
Posts created: 38
Posts skipped: 0
Images uploaded: 37
Images failed: 1
Categories created: 5
Errors: 1

Errors encountered:
- Post "Example Post" (ID: xxx): No featured image found in WordPress data
```

## Step 3: Fix Missing Featured Images

If some posts are missing featured images after migration, use the fix script:

```bash
# Dry run
bun run scripts/fix-featured-images.ts --dry-run

# Real fix
bun run scripts/fix-featured-images.ts
```

This script will:
1. Fetch all posts from Convex
2. Check for missing featured images
3. Re-download from WordPress XML
4. Upload to Cloudflare
5. Update posts in Convex

## Step 4: Verify Migration

1. **Check blog index**: http://localhost:3000/blog
2. **Verify post count**: Should match WordPress post count
3. **Check featured images**: All posts should have images
4. **Review content**: Spot-check Markdown conversion
5. **Test internal links**: Verify links work correctly
6. **Check categories**: All categories migrated

## Troubleshooting

### Images not downloading

**Cause:** WordPress site may require authentication or have rate limiting.

**Solutions:**
- Check if images are publicly accessible
- Add delays between requests in script
- Download images manually and use `uploadImageFromUrl()`

### HTML not converting properly

**Cause:** Complex HTML structures may not convert cleanly to Markdown.

**Solutions:**
- Review posts with complex layouts manually
- Edit Markdown directly in Convex dashboard
- Consider keeping some HTML (markdown supports inline HTML)

### Duplicate posts

**Cause:** Running migration multiple times without cleanup.

**Solution:** The migration script checks for existing slugs and skips duplicates. If needed, delete posts from Convex dashboard and re-run.

### Missing categories

**Cause:** Category IDs in WordPress don't match Convex.

**Solution:** The script creates categories automatically. If categories exist with different slugs, update the mapping in the migration script.

## Post-Migration Checklist

- [ ] All posts visible on `/blog`
- [ ] Featured images displaying correctly
- [ ] Categories assigned properly
- [ ] Internal links working
- [ ] Markdown rendering correctly
- [ ] Code blocks syntax highlighted
- [ ] SEO meta tags populated
- [ ] Sitemap regenerated (`bun run build`)
