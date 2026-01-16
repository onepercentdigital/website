/**
 * Blog Categories
 *
 * Static category definitions for the blog.
 * These were migrated from the Convex database.
 */

import type { BlogCategory } from '@/types/blog';

export const categories: BlogCategory[] = [
  {
    name: 'Blog',
    slug: 'blog',
  },
];

/**
 * Get a category by its slug
 */
export function getCategoryBySlug(slug: string): BlogCategory | undefined {
  return categories.find((category) => category.slug === slug);
}

/**
 * Get all categories
 */
export function getAllCategories(): BlogCategory[] {
  return categories;
}
