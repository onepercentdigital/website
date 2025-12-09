import { createFileRoute, Link, notFound } from '@tanstack/react-router';
import { useQuery } from 'convex/react';
import { Calendar, ChevronRight, Clock, User } from 'lucide-react';
import ReactMarkdown from 'react-markdown';
import rehypeHighlight from 'rehype-highlight';
import rehypeRaw from 'rehype-raw';
import rehypeSanitize from 'rehype-sanitize';
import remarkGfm from 'remark-gfm';
import { SEO } from '@/components/SEO';
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
        'Expert insights on SEO, GEO, and search optimization strategies.',
      url: 'https://onepercentseo.com/blog',
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
          <div className="mb-4 inline-flex h-12 w-12 animate-spin rounded-full border-4 border-accent border-t-transparent" />
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
    url: `https://onepercentseo.com/blog/${post.slug}`,
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
      <nav className="border-border border-b bg-muted/30 px-6 py-4">
        <div className="mx-auto max-w-4xl">
          <div className="flex items-center gap-2 text-sm">
            <Link
              to="/"
              className="text-muted-foreground transition-colors hover:text-foreground"
            >
              Home
            </Link>
            <ChevronRight className="h-4 w-4 text-muted-foreground" />
            <Link
              to="/blog"
              className="text-muted-foreground transition-colors hover:text-foreground"
            >
              Blog
            </Link>
            <ChevronRight className="h-4 w-4 text-muted-foreground" />
            <span className="text-foreground">{post.title}</span>
          </div>
        </div>
      </nav>

      <article className="bg-background px-6 py-12 lg:py-20">
        <div className="mx-auto max-w-4xl">
          {/* Header */}
          <header className="mb-12">
            {/* Category Badge */}
            {category && (
              <div className="mb-4 inline-block rounded-full bg-accent/10 px-3 py-1 font-medium text-accent text-xs uppercase tracking-wider">
                {category.name}
              </div>
            )}

            {/* Title */}
            <h1 className="mb-6 font-bold text-4xl leading-tight tracking-tight lg:text-5xl xl:text-6xl">
              {post.title}
            </h1>

            {/* Metadata */}
            <div className="flex flex-wrap items-center gap-4 border-border border-y py-4 text-muted-foreground text-sm tracking-wide">
              <div className="flex items-center gap-2">
                <User className="h-4 w-4" />
                <span>{post.authorName}</span>
              </div>
              {publishedDate && (
                <div className="flex items-center gap-2">
                  <Calendar className="h-4 w-4" />
                  <span>{publishedDate}</span>
                </div>
              )}
              <div className="flex items-center gap-2">
                <Clock className="h-4 w-4" />
                <span>{readTime} min read</span>
              </div>
            </div>

            {/* Last Modified */}
            {post.publishedAt && post.modifiedAt > post.publishedAt + 60000 && (
              <p className="mt-3 text-muted-foreground text-xs tracking-wide">
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

      {/* Back to Blog CTA */}
      <section className="border-border border-t bg-muted/30 px-6 py-12">
        <div className="mx-auto max-w-4xl text-center">
          <Link
            to="/blog"
            className="inline-flex items-center gap-2 rounded-lg border border-border bg-card px-6 py-3 font-semibold text-foreground transition-colors hover:border-accent hover:bg-accent/5"
          >
            ← Back to All Posts
          </Link>
        </div>
      </section>
    </>
  );
}
