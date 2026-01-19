import { defineCollection, defineConfig } from '@content-collections/core';
import { z } from 'zod';

const posts = defineCollection({
  name: 'posts',
  directory: './src/content/blog',
  include: '*.mdx',
  schema: z.object({
    title: z.string(),
    slug: z.string(),
    excerpt: z.string().optional(),
    featuredImage: z.string().optional(),
    category: z.string().optional(),
    authorName: z.string(),
    status: z.enum(['draft', 'published', 'scheduled']),
    publishedAt: z.string().optional(),
    modifiedAt: z.string(),
    content: z.string(),
    seo: z
      .object({
        metaTitle: z.string().optional(),
        metaDescription: z.string().optional(),
        ogImage: z.string().optional(),
        noindex: z.boolean().optional(),
      })
      .optional(),
  }),
});

export default defineConfig({
  collections: [posts],
});
