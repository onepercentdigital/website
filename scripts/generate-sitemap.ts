#!/usr/bin/env bun
/**
 * Generate sitemap.xml at build time
 *
 * This script generates a static sitemap.xml file in the public directory.
 * It includes all static pages and dynamic solution pages.
 *
 * Run: bun run scripts/generate-sitemap.ts
 */

import { writeFileSync } from 'node:fs';
import { resolve } from 'node:path';
import { getAllSolutions } from '../src/data/solutions';

const baseUrl = 'https://onepercentseo.com';
const currentDate = new Date().toISOString().split('T')[0];

// Static pages with their priorities and change frequencies
const staticPages = [
  { url: '', priority: '1.0', changefreq: 'weekly' }, // Homepage
  { url: '/seo', priority: '0.9', changefreq: 'monthly' },
  { url: '/geo', priority: '0.9', changefreq: 'monthly' },
  { url: '/customers', priority: '0.8', changefreq: 'monthly' },
  { url: '/case-studies', priority: '0.8', changefreq: 'weekly' },
  { url: '/audit', priority: '0.9', changefreq: 'monthly' },
  { url: '/about', priority: '0.7', changefreq: 'monthly' },
  { url: '/solutions', priority: '0.8', changefreq: 'monthly' },
  { url: '/enterprise', priority: '0.7', changefreq: 'monthly' },
  { url: '/blog', priority: '0.7', changefreq: 'daily' },
];

// Get dynamic solution pages
const solutions = getAllSolutions();
const solutionPages = solutions.map((solution) => ({
  url: `/solutions/${solution.slug}`,
  priority: '0.8',
  changefreq: 'monthly',
}));

// Combine all pages
const allPages = [...staticPages, ...solutionPages];

// Generate XML
const xml = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${allPages
  .map(
    (page) => `  <url>
    <loc>${baseUrl}${page.url}</loc>
    <lastmod>${currentDate}</lastmod>
    <changefreq>${page.changefreq}</changefreq>
    <priority>${page.priority}</priority>
  </url>`,
  )
  .join('\n')}
</urlset>
`;

// Write to public directory
const outputPath = resolve(process.cwd(), 'public', 'sitemap.xml');
writeFileSync(outputPath, xml, 'utf-8');

console.log(`✅ Sitemap generated successfully!`);
console.log(`   Location: public/sitemap.xml`);
console.log(`   Pages: ${allPages.length} total`);
console.log(`   - Static pages: ${staticPages.length}`);
console.log(`   - Solution pages: ${solutionPages.length}`);
