import {
  ArrowRight01Icon,
  Calendar01Icon,
  Clock01Icon,
  UserIcon,
} from '@hugeicons/core-free-icons';
import { HugeiconsIcon } from '@hugeicons/react';
import { createFileRoute, Link, notFound } from '@tanstack/react-router';
import { useQuery } from 'convex/react';
import ReactMarkdown from 'react-markdown';
import rehypeHighlight from 'rehype-highlight';
import rehypeRaw from 'rehype-raw';
import rehypeSanitize from 'rehype-sanitize';
import remarkGfm from 'remark-gfm';
import { SEO } from '@/components/SEO';
import { Button } from '@/components/ui/button';
import { generateMetaTags, getArticleSchema } from '@/lib/seo';
import { api } from '../../convex/_generated/api';
import 'highlight.js/styles/github-dark.css';

export const Route = createFileRoute('/blog/$slug')({
  component: BlogPostPage,
  head: () => {
    // Static meta tags for SSR
    // Dynamic meta tags would require server-side data fetching
    return generateMetaTags({
      title: 'Blog Post | One Percent Digital',
      description:
        'Expert insights on GEO, SEO, and search optimization strategies.',
      url: 'https://op.digital/blog',
    });
  },
});

function BlogPostPage() {
  const { slug } = Route.useParams();
  const postData = useQuery(api.posts.getBySlug, { slug });

  // Handle loading state
  if (postData === undefined) {
    return (
      <div className="flex min-h-[60vh] items-center justify-center">
        <div className="text-center">
          <div className="mb-4 inline-flex h-12 w-12 animate-spin rounded-full border-4 border-primary border-t-transparent" />
          <p className="text-muted-foreground">Loading post...</p>
        </div>
      </div>
    );
  }

  // Handle not found
  if (postData === null) {
    throw notFound();
  }

  const { category, ...post } = postData;

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

  // Generate Article structured data
  const articleSchema = getArticleSchema({
    headline: post.title,
    description: post.excerpt || '',
    url: `https://op.digital/blog/${post.slug}`,
    image: post.featuredImage || '',
    datePublished: post.publishedAt
      ? new Date(post.publishedAt).toISOString()
      : new Date(post.modifiedAt).toISOString(),
    dateModified: new Date(post.modifiedAt).toISOString(),
    author: post.authorName,
  });

  return (
    <>
      <SEO structuredData={[{ type: 'Article', data: articleSchema }]} />

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
            {post.publishedAt && post.modifiedAt > post.publishedAt + 60000 && (
              <p className="mt-3 text-muted-foreground text-xs">
                Last updated: {modifiedDate}
              </p>
            )}
          </header>

          {/* Featured Image */}
          {post.featuredImage && (
            <div className="mb-12">
              <img
                src={post.featuredImage}
                alt={post.title}
                width={1200}
                height={630}
                loading="lazy"
                className="w-full rounded-2xl object-cover shadow-lg"
              />
            </div>
          )}

          {/* Content */}
          <div className="prose prose-lg prose-slate dark:prose-invert max-w-none">
            <ReactMarkdown
              remarkPlugins={[remarkGfm]}
              rehypePlugins={[rehypeHighlight, rehypeRaw, rehypeSanitize]}
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
              }}
            >
              {post.content}
            </ReactMarkdown>
          </div>
        </div>
      </article>

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
