#!/usr/bin/env bun
/**
 * Generate sitemap.xml at build time
 *
 * This script generates a static sitemap.xml file in the public directory.
 * It includes all static pages, dynamic solution pages, and published blog posts.
 *
 * Modification dates are determined from git commit history for accuracy.
 *
 * Run: bun run scripts/generate-sitemap.ts
 */

import { execFileSync } from 'node:child_process'
import { writeFileSync } from 'node:fs'
import { resolve } from 'node:path'
import { getAllSolutions } from '../src/data/solutions'
import { getPostsForSitemap } from '../src/lib/blog'

const baseUrl = 'https://op.digital'
const fallbackDate = new Date().toISOString().split('T')[0]

/**
 * Get the last modification date from git history for a file
 * Returns YYYY-MM-DD format or null if unavailable
 */
function getGitLastModified(filepath: string): string | null {
  try {
    const result = execFileSync('git', ['log', '-1', '--format=%cI', '--', filepath], {
      encoding: 'utf-8',
      stdio: ['pipe', 'pipe', 'pipe'],
    }).trim()
    return result ? result.split('T')[0] : null
  } catch {
    return null
  }
}

// Static pages with their source files, priorities, and change frequencies
const staticPageSources: Record<string, string> = {
  '': 'src/routes/index.tsx',
  '/seo': 'src/routes/seo.tsx',
  '/geo': 'src/routes/geo.tsx',
  '/ppl': 'src/routes/ppl.tsx',
  '/maps': 'src/routes/maps.tsx',
  '/customers': 'src/routes/customers.tsx',
  '/case-studies': 'src/routes/case-studies.tsx',
  '/apply': 'src/routes/apply.tsx',
  '/about': 'src/routes/about.tsx',
  '/solutions': 'src/routes/solutions.index.tsx',
  '/enterprise': 'src/routes/enterprise.tsx',
  '/blog': 'src/routes/blog.index.tsx',
}

const staticPages = [
  { url: '', priority: '1.0', changefreq: 'weekly' }, // Homepage
  { url: '/seo', priority: '0.9', changefreq: 'monthly' },
  { url: '/geo', priority: '0.9', changefreq: 'monthly' },
  { url: '/ppl', priority: '0.9', changefreq: 'monthly' },
  { url: '/maps', priority: '0.9', changefreq: 'monthly' },
  { url: '/customers', priority: '0.8', changefreq: 'monthly' },
  { url: '/case-studies', priority: '0.8', changefreq: 'weekly' },
  { url: '/apply', priority: '0.9', changefreq: 'monthly' },
  { url: '/about', priority: '0.7', changefreq: 'monthly' },
  { url: '/solutions', priority: '0.8', changefreq: 'monthly' },
  { url: '/enterprise', priority: '0.7', changefreq: 'monthly' },
  { url: '/blog', priority: '0.7', changefreq: 'daily' },
]

/**
 * Get blog posts with git-based modification dates
 */
function fetchBlogPosts() {
  try {
    const posts = getPostsForSitemap()
    return posts.map((post) => {
      const filepath = `src/content/blog/${post.slug}.mdx`
      const gitDate = getGitLastModified(filepath)

      if (!gitDate) {
        console.warn(`⚠️  No git history for blog post: ${post.slug}, using fallback date`)
      }

      return {
        url: `/blog/${post.slug}`,
        lastmod: gitDate ?? fallbackDate,
        priority: '0.7',
        changefreq: 'weekly',
      }
    })
  } catch (error) {
    console.warn('⚠️  Could not fetch blog posts:', error)
    console.warn('   Sitemap will be generated without blog posts')
    return []
  }
}

/**
 * Main sitemap generation function
 */
function generateSitemap() {
  console.log('🗺️  Generating sitemap.xml...')

  // Get static pages with git-based dates
  const staticPagesWithDates = staticPages.map((page) => {
    const sourceFile = staticPageSources[page.url]
    const gitDate = sourceFile ? getGitLastModified(sourceFile) : null

    if (!gitDate && sourceFile) {
      console.warn(`⚠️  No git history for: ${sourceFile}, using fallback date`)
    }

    return {
      ...page,
      lastmod: gitDate ?? fallbackDate,
    }
  })

  // Get dynamic solution pages with git-based dates
  const solutions = getAllSolutions()
  const solutionPages = solutions.map((solution) => {
    const filepath = `src/routes/solutions.${solution.slug}.tsx`
    const gitDate = getGitLastModified(filepath)

    if (!gitDate) {
      console.warn(`⚠️  No git history for solution: ${solution.slug}, using fallback date`)
    }

    return {
      url: `/solutions/${solution.slug}`,
      lastmod: gitDate ?? fallbackDate,
      priority: '0.8',
      changefreq: 'monthly',
    }
  })

  // Fetch blog posts with git-based dates
  const blogPosts = fetchBlogPosts()

  // Combine all pages
  const allPages = [...staticPagesWithDates, ...solutionPages, ...blogPosts]

  // Generate XML
  const xml = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${allPages
  .map(
    (page) => `  <url>
    <loc>${baseUrl}${page.url}</loc>
    <lastmod>${page.lastmod}</lastmod>
    <changefreq>${page.changefreq}</changefreq>
    <priority>${page.priority}</priority>
  </url>`
  )
  .join('\n')}
</urlset>
`

  // Write to public directory
  const outputPath = resolve(process.cwd(), 'public', 'sitemap.xml')
  writeFileSync(outputPath, xml, 'utf-8')

  console.log(`✅ Sitemap generated successfully!`)
  console.log(`   Location: public/sitemap.xml`)
  console.log(`   Pages: ${allPages.length} total`)
  console.log(`   - Static pages: ${staticPages.length}`)
  console.log(`   - Solution pages: ${solutionPages.length}`)
  console.log(`   - Blog posts: ${blogPosts.length}`)
}

// Run sitemap generation
try {
  generateSitemap()
} catch (error) {
  console.error('❌ Failed to generate sitemap:', error)
  process.exit(1)
}
