/**
 * Blog TypeScript Interfaces
 *
 * These types define the structure of blog posts and categories
 * for the static MDX-based blog system.
 */

/**
 * SEO metadata for a blog post
 */
export interface BlogPostSEO {
  metaTitle?: string;
  metaDescription?: string;
  ogImage?: string;
  noindex?: boolean;
}

/**
 * Blog post frontmatter (metadata stored in MDX file header)
 */
export interface BlogPostFrontmatter {
  title: string;
  slug: string;
  excerpt?: string;
  featuredImage?: string;
  category?: string;
  authorName: string;
  status: 'draft' | 'published' | 'scheduled';
  publishedAt?: string;
  modifiedAt: string;
  seo?: BlogPostSEO;
}

/**
 * Full blog post including content
 */
export interface BlogPost extends BlogPostFrontmatter {
  content: string;
}

/**
 * Blog post for list views (without full content)
 */
export interface BlogPostListItem extends BlogPostFrontmatter {
  content: string; // Needed for read time calculation and excerpt generation
}

/**
 * Blog category
 */
export interface BlogCategory {
  name: string;
  slug: string;
  description?: string;
}
