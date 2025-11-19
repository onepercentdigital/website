import { defineSchema, defineTable } from 'convex/server'
import { v } from 'convex/values'

export default defineSchema({
  // Blog categories
  categories: defineTable({
    name: v.string(),
    slug: v.string(),
    description: v.optional(v.string()),
  }).index('by_slug', ['slug']),

  // Blog posts
  posts: defineTable({
    // Content
    title: v.string(),
    slug: v.string(),
    content: v.string(), // Markdown/MDX content
    excerpt: v.optional(v.string()),
    featuredImage: v.optional(v.string()), // Cloudflare Images URL

    // Taxonomy
    categoryId: v.optional(v.id('categories')),

    // Author
    authorId: v.optional(v.string()), // Clerk user ID
    authorName: v.string(), // Display name (can be overridden)

    // Publishing
    status: v.union(
      v.literal('draft'),
      v.literal('published'),
      v.literal('scheduled')
    ),
    publishedAt: v.optional(v.number()), // Timestamp
    scheduledFor: v.optional(v.number()), // Timestamp for scheduled posts
    modifiedAt: v.number(), // Timestamp - last modified

    // SEO
    seo: v.object({
      metaTitle: v.optional(v.string()),
      metaDescription: v.optional(v.string()),
      ogImage: v.optional(v.string()),
      noindex: v.optional(v.boolean()),
    }),

    // Relationships
    relatedPostIds: v.optional(v.array(v.id('posts'))),
  })
    .index('by_slug', ['slug'])
    .index('by_status', ['status'])
    .index('by_published_date', ['publishedAt'])
    .index('by_modified_date', ['modifiedAt'])
    .index('by_category', ['categoryId'])
    .index('by_author', ['authorId']),
})
