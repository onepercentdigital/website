/**
 * Blog Library
 *
 * Helper functions for querying blog posts from the static index.
 * All data is loaded at build time from MDX files via content-collections.
 */

import { allPosts } from 'content-collections';
import { getCategoryBySlug } from '@/data/categories';
import type { BlogPost, BlogPostListItem } from '@/types/blog';

// Map content-collections posts to our BlogPost type
const posts: BlogPost[] = allPosts;

/**
 * Get all published posts, sorted by date (newest first)
 */
export function getAllPosts(): BlogPostListItem[] {
  return posts
    .filter((post) => post.status === 'published')
    .sort((a, b) => {
      const dateA = a.publishedAt
        ? new Date(a.publishedAt).getTime()
        : new Date(a.modifiedAt).getTime();
      const dateB = b.publishedAt
        ? new Date(b.publishedAt).getTime()
        : new Date(b.modifiedAt).getTime();
      return dateB - dateA;
    });
}

/**
 * Get a single post by slug
 * Returns null if not found or not published
 */
export function getPostBySlug(slug: string): BlogPost | null {
  const post = posts.find((p) => p.slug === slug);

  if (!post) {
    return null;
  }

  // Only return published posts for public viewing
  if (post.status !== 'published') {
    return null;
  }

  return post;
}

/**
 * Get posts by category slug
 */
export function getPostsByCategory(categorySlug: string): BlogPostListItem[] {
  return getAllPosts().filter((post) => post.category === categorySlug);
}

/**
 * Get a post with its category data
 */
export function getPostWithCategory(slug: string): {
  post: BlogPost;
  category: { name: string; slug: string; description?: string } | null;
} | null {
  const post = getPostBySlug(slug);

  if (!post) {
    return null;
  }

  const category = post.category
    ? getCategoryBySlug(post.category) || null
    : null;

  return {
    post,
    category,
  };
}

/**
 * Get recent posts (limited count)
 */
export function getRecentPosts(limit = 5): BlogPostListItem[] {
  return getAllPosts().slice(0, limit);
}

/**
 * Search posts by title or content
 */
export function searchPosts(query: string): BlogPostListItem[] {
  const searchLower = query.toLowerCase();
  return getAllPosts().filter(
    (post) =>
      post.title.toLowerCase().includes(searchLower) ||
      post.excerpt?.toLowerCase().includes(searchLower) ||
      post.content.toLowerCase().includes(searchLower),
  );
}

/**
 * Get posts modified around the same time as the given post.
 * Sorts by proximity to current post's modifiedAt date.
 */
export function getRelatedPosts(
  currentSlug: string,
  limit = 3,
): BlogPostListItem[] {
  const allPosts = getAllPosts().filter((p) => p.slug !== currentSlug);
  const currentPost = getPostBySlug(currentSlug);

  if (!currentPost || allPosts.length <= limit) {
    return allPosts.slice(0, limit);
  }

  const currentTime = new Date(currentPost.modifiedAt).getTime();

  return [...allPosts]
    .sort((a, b) => {
      const diffA = Math.abs(new Date(a.modifiedAt).getTime() - currentTime);
      const diffB = Math.abs(new Date(b.modifiedAt).getTime() - currentTime);
      return diffA - diffB;
    })
    .slice(0, limit);
}
