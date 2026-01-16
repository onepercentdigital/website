#!/usr/bin/env bun
/**
 * Generate sitemap.xml at build time
 *
 * This script generates a static sitemap.xml file in the public directory.
 * It includes all static pages, dynamic solution pages, and published blog posts.
 *
 * Run: bun run scripts/generate-sitemap.ts
 */

import { writeFileSync } from 'node:fs'
import { resolve } from 'node:path'
import { getAllSolutions } from '../src/data/solutions'
import { getPostsForSitemap } from '../src/lib/blog'

const baseUrl = 'https://op.digital'
const currentDate = new Date().toISOString().split('T')[0]

// Static pages with their priorities and change frequencies
const staticPages = [
  { url: '', priority: '1.0', changefreq: 'weekly' }, // Homepage
  { url: '/seo', priority: '0.9', changefreq: 'monthly' },
  { url: '/geo', priority: '0.9', changefreq: 'monthly' },
  { url: '/ppl', priority: '0.9', changefreq: 'monthly' },
  { url: '/customers', priority: '0.8', changefreq: 'monthly' },
  { url: '/case-studies', priority: '0.8', changefreq: 'weekly' },
  { url: '/apply', priority: '0.9', changefreq: 'monthly' },
  { url: '/about', priority: '0.7', changefreq: 'monthly' },
  { url: '/solutions', priority: '0.8', changefreq: 'monthly' },
  { url: '/enterprise', priority: '0.7', changefreq: 'monthly' },
  { url: '/blog', priority: '0.7', changefreq: 'daily' },
]

/**
 * Get blog posts from static index
 */
function fetchBlogPosts() {
  try {
    const posts = getPostsForSitemap()
    return posts.map((post) => ({
      url: `/blog/${post.slug}`,
      lastmod: new Date(post.modifiedAt).toISOString().split('T')[0],
      priority: '0.7',
      changefreq: 'weekly',
    }))
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

  // Get dynamic solution pages
  const solutions = getAllSolutions()
  const solutionPages = solutions.map((solution) => ({
    url: `/solutions/${solution.slug}`,
    lastmod: currentDate,
    priority: '0.8',
    changefreq: 'monthly',
  }))

  // Fetch blog posts from static index
  const blogPosts = fetchBlogPosts()

  // Combine all pages
  const allPages = [
    ...staticPages.map((page) => ({ ...page, lastmod: currentDate })),
    ...solutionPages,
    ...blogPosts,
  ]

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
