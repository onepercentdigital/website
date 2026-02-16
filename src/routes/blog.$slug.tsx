import {
  ArrowRight01Icon,
  Calendar01Icon,
  Clock01Icon,
  UserIcon,
} from '@hugeicons/core-free-icons';
import { HugeiconsIcon } from '@hugeicons/react';
import { createFileRoute, Link, notFound } from '@tanstack/react-router';
import ReactMarkdown from 'react-markdown';
import rehypeHighlight from 'rehype-highlight';
import rehypeRaw from 'rehype-raw';
import remarkGfm from 'remark-gfm';
import { AuthorBox } from '@/components/AuthorBox';
import { Image } from '@/components/Image';
import { RelatedPosts } from '@/components/RelatedPosts';
import { SEO } from '@/components/SEO';
import { Button } from '@/components/ui/button';
import { getPostWithCategory } from '@/lib/blog';
import {
  generateMetaTags,
  getArticleSchema,
  getBreadcrumbSchema,
} from '@/lib/seo';
import 'highlight.js/styles/github-dark.css';

export const Route = createFileRoute('/blog/$slug')({
  component: BlogPostPage,
  headers: () => ({
    // Cache 1 hour, serve stale up to 7 days while revalidating
    'Cache-Control': 'public, max-age=3600, stale-while-revalidate=604800',
  }),
  head: ({ params }) => {
    // Get post data for SSR meta tags
    const postData = getPostWithCategory(params.slug);

    if (!postData) {
      return generateMetaTags({
        title: 'Post Not Found | One Percent Digital',
        description: 'The requested blog post could not be found.',
        url: `https://op.digital/blog/${params.slug}`,
      });
    }

    const { post, category } = postData;

    // Generate keywords from title and category
    const keywords = generateKeywordsFromTitle(post.title, category?.name);

    return generateMetaTags({
      title: post.seo?.metaTitle || post.title,
      description:
        post.seo?.metaDescription ||
        post.excerpt ||
        'Expert insights on GEO, SEO, and search optimization strategies.',
      url: `https://op.digital/blog/${post.slug}`,
      ogImage: post.seo?.ogImage || post.featuredImage,
      ogType: 'article',
      article: {
        publishedTime: post.publishedAt,
        modifiedTime: post.modifiedAt,
        author: post.authorName,
        section: category?.name || 'SEO',
        tags: keywords,
      },
    });
  },
});

/**
 * Generate keywords from post title and category
 */
function generateKeywordsFromTitle(
  title: string,
  categoryName?: string,
): string[] {
  const keywords: string[] = [];

  // Add category as first keyword
  if (categoryName) {
    keywords.push(categoryName);
  }

  // Extract meaningful words from title (exclude common stop words)
  const stopWords = new Set([
    'a',
    'an',
    'the',
    'is',
    'are',
    'was',
    'were',
    'be',
    'been',
    'being',
    'have',
    'has',
    'had',
    'do',
    'does',
    'did',
    'will',
    'would',
    'could',
    'should',
    'may',
    'might',
    'must',
    'shall',
    'can',
    'need',
    'dare',
    'ought',
    'used',
    'to',
    'of',
    'in',
    'for',
    'on',
    'with',
    'at',
    'by',
    'from',
    'as',
    'into',
    'through',
    'during',
    'before',
    'after',
    'above',
    'below',
    'between',
    'under',
    'again',
    'further',
    'then',
    'once',
    'here',
    'there',
    'when',
    'where',
    'why',
    'how',
    'all',
    'each',
    'few',
    'more',
    'most',
    'other',
    'some',
    'such',
    'no',
    'nor',
    'not',
    'only',
    'own',
    'same',
    'so',
    'than',
    'too',
    'very',
    'just',
    'and',
    'but',
    'if',
    'or',
    'because',
    'until',
    'while',
    'what',
    'which',
    'who',
    'whom',
    'this',
    'that',
    'these',
    'those',
    'am',
    'vs',
  ]);

  const words = title
    .toLowerCase()
    .replace(/[?!.,]/g, '')
    .split(/\s+/)
    .filter((word) => word.length > 2 && !stopWords.has(word));

  // Add unique words as keywords
  for (const word of words) {
    if (!keywords.includes(word)) {
      keywords.push(word);
    }
  }

  // Add common SEO-related keywords if relevant
  const lowerTitle = title.toLowerCase();
  if (
    lowerTitle.includes('seo') &&
    !keywords.includes('search engine optimization')
  ) {
    keywords.push('search engine optimization');
  }
  if (lowerTitle.includes('local') && !keywords.includes('local search')) {
    keywords.push('local search');
  }
  if (
    lowerTitle.includes('manufacturing') &&
    !keywords.includes('industrial marketing')
  ) {
    keywords.push('industrial marketing');
  }

  return keywords.slice(0, 10); // Limit to 10 keywords
}

function BlogPostPage() {
  const { slug } = Route.useParams();
  const postData = getPostWithCategory(slug);

  // Handle not found
  if (!postData) {
    throw notFound();
  }

  const { post, category } = postData;

  // Calculate read time
  const wordCount = post.content.split(/\s+/).length;
  const readTime = Math.ceil(wordCount / 200);

  // Format dates
  const publishedDate = post.publishedAt
    ? new Date(post.publishedAt).toLocaleDateString('en-US', {
        year: 'numeric',
        month: 'long',
        day: 'numeric',
      })
    : null;

  const modifiedDate = new Date(post.modifiedAt).toLocaleDateString('en-US', {
    year: 'numeric',
    month: 'long',
    day: 'numeric',
  });

  // Generate keywords for structured data
  const keywords = generateKeywordsFromTitle(post.title, category?.name);

  // Generate Article structured data (GEO-optimized)
  const articleSchema = getArticleSchema({
    headline: post.title,
    description: post.seo?.metaDescription || post.excerpt || '',
    url: `https://op.digital/blog/${post.slug}`,
    image: post.featuredImage || '',
    datePublished: post.publishedAt || post.modifiedAt,
    dateModified: post.modifiedAt,
    author: post.authorName,
    keywords,
    articleSection: category?.name || 'SEO',
  });

  // Generate BreadcrumbList structured data
  const breadcrumbSchema = getBreadcrumbSchema([
    { name: 'Home', url: 'https://op.digital/' },
    { name: 'Blog', url: 'https://op.digital/blog' },
    { name: post.title, url: `https://op.digital/blog/${post.slug}` },
  ]);

  return (
    <>
      <SEO
        structuredData={[
          { type: 'Article', data: articleSchema },
          { type: 'BreadcrumbList', data: breadcrumbSchema },
        ]}
      />

      {/* Breadcrumbs */}
      <nav className="px-6 py-4">
        <div className="mx-auto max-w-4xl">
          <div className="flex items-center gap-2 text-sm">
            <Link
              to="/"
              className="text-muted-foreground transition-colors hover:text-foreground"
            >
              Home
            </Link>
            <HugeiconsIcon
              icon={ArrowRight01Icon}
              size={16}
              strokeWidth={1.5}
              className="text-muted-foreground"
            />
            <Link
              to="/blog"
              className="text-muted-foreground transition-colors hover:text-foreground"
            >
              Blog
            </Link>
            <HugeiconsIcon
              icon={ArrowRight01Icon}
              size={16}
              strokeWidth={1.5}
              className="text-muted-foreground"
            />
            <span className="text-foreground">{post.title}</span>
          </div>
        </div>
      </nav>

      <article className="bg-background px-6 py-16 lg:py-20">
        <div className="mx-auto max-w-4xl">
          {/* Header */}
          <header className="mb-12">
            {/* Category Badge */}
            {category && (
              <div className="mb-4 inline-block rounded-full bg-muted px-3 py-1 font-medium text-primary text-xs uppercase">
                {category.name}
              </div>
            )}

            {/* Title */}
            <h1 className="mb-6 font-extrabold text-5xl leading-[0.95] tracking-tighter lg:mb-8 lg:text-7xl xl:text-8xl">
              {post.title}
            </h1>

            {/* Metadata */}
            <div className="flex flex-wrap items-center gap-4 border-border border-y py-4 text-muted-foreground text-sm">
              <div className="flex items-center gap-2">
                <HugeiconsIcon icon={UserIcon} size={16} strokeWidth={1.5} />
                <span>{post.authorName}</span>
              </div>
              {publishedDate && (
                <div className="flex items-center gap-2">
                  <HugeiconsIcon
                    icon={Calendar01Icon}
                    size={16}
                    strokeWidth={1.5}
                  />
                  <span>{publishedDate}</span>
                </div>
              )}
              <div className="flex items-center gap-2">
                <HugeiconsIcon icon={Clock01Icon} size={16} strokeWidth={1.5} />
                <span>{readTime} min read</span>
              </div>
            </div>

            {/* Last Modified */}
            {post.publishedAt &&
              new Date(post.modifiedAt).getTime() >
                new Date(post.publishedAt).getTime() + 60000 && (
                <p className="mt-3 text-muted-foreground text-xs">
                  Last updated: {modifiedDate}
                </p>
              )}
          </header>

          {/* Featured Image */}
          {post.featuredImage && (
            <div className="mb-12">
              <Image
                src={post.featuredImage}
                alt={post.title}
                width={1200}
                height={630}
                priority
                layout="constrained"
                className="w-full rounded-2xl object-cover shadow-lg"
              />
            </div>
          )}

          {/* Content */}
          <div className="prose prose-lg prose-slate dark:prose-invert max-w-none">
            <ReactMarkdown
              remarkPlugins={[remarkGfm]}
              rehypePlugins={[rehypeHighlight, rehypeRaw]}
              components={{
                // Custom link component for internal links
                a: ({ node, ...props }) => {
                  const href = props.href || '';
                  if (href.startsWith('/')) {
                    return <Link to={href}>{props.children}</Link>;
                  }
                  return (
                    <a {...props} target="_blank" rel="noopener noreferrer" />
                  );
                },
                // Custom image component for Cloudflare images
                img: ({ node, ...props }) => {
                  const src = props.src || '';
                  // Extract image ID from Cloudflare URL
                  const cloudflareMatch = src.match(
                    /imagedelivery\.net\/[^/]+\/([^/]+)\//,
                  );
                  if (cloudflareMatch) {
                    const imageId = cloudflareMatch[1];
                    return (
                      <Image
                        src={imageId}
                        alt={props.alt || ''}
                        width={800}
                        height={450}
                        layout="constrained"
                        className="rounded-lg"
                      />
                    );
                  }
                  // Fallback for non-Cloudflare images
                  return (
                    <img {...props} alt={props.alt || ''} loading="lazy" />
                  );
                },
              }}
            >
              {post.content}
            </ReactMarkdown>
          </div>
        </div>
      </article>

      {/* Author Box */}
      <section className="px-6 py-12">
        <div className="mx-auto max-w-4xl">
          <AuthorBox authorName={post.authorName} />
        </div>
      </section>

      {/* Related Posts */}
      <RelatedPosts currentSlug={post.slug} />

      {/* Final CTA Section */}
      <section className="border-border border-y px-6 py-16 lg:py-20">
        <div className="mx-auto max-w-3xl text-center">
          <h2 className="mb-4 font-bold text-3xl tracking-tight lg:text-4xl">
            Ready to Put These Insights Into Action?
          </h2>
          <p className="mx-auto mb-8 max-w-xl text-muted-foreground">
            From GEO and SEO to PPL, we turn strategy into leads. Let's discuss
            how to scale your business.
          </p>
          <div className="flex flex-col items-center justify-center gap-3 sm:flex-row">
            <Button render={<Link to="/apply" />} size="lg">
              Apply To Work With Us
              <HugeiconsIcon
                icon={ArrowRight01Icon}
                size={18}
                strokeWidth={2}
                data-icon="inline-end"
              />
            </Button>
            <Button render={<Link to="/blog" />} size="lg" variant="outline">
              Back to All Posts
            </Button>
          </div>
        </div>
      </section>
    </>
  );
}
