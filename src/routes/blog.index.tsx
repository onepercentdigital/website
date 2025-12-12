import { createFileRoute, Link } from '@tanstack/react-router';
import { useQuery } from 'convex/react';
import { ArrowRight, Calendar, Clock, FileText, User } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { generateMetaTags } from '@/lib/seo';
import { api } from '../../convex/_generated/api';

export const Route = createFileRoute('/blog/')({
  component: BlogIndexPage,
  head: () =>
    generateMetaTags({
      title: 'Blog | SEO & GEO Insights',
      description:
        'Expert insights, strategies, and case studies on SEO, GEO, and search optimization. Learn how to excel in traditional and AI-powered search.',
      url: 'https://onepercentseo.com/blog',
    }),
});

function BlogIndexPage() {
  // Fetch published posts from Convex
  const posts = useQuery(api.posts.list, { status: 'published' });
  const isLoading = posts === undefined;

  return (
    <>
      {/* Hero Section */}
      <section className="bg-background px-6 py-12 lg:py-16">
        <div className="mx-auto max-w-7xl">
          <div className="mx-auto max-w-3xl text-center">
            <h1 className="mb-4 font-bold text-4xl leading-tight tracking-tight lg:text-5xl">
              Latest Insights
            </h1>
            <p className="text-lg text-muted-foreground leading-relaxed tracking-wide lg:text-xl">
              Expert strategies, case studies, and insights on SEO, GEO, and
              search optimization. Learn how to lead in traditional search, AI
              discovery, and performance marketing.
            </p>
          </div>
        </div>
      </section>

      {/* Blog Posts Grid */}
      <section className="bg-background px-6 py-20 lg:py-32">
        <div className="mx-auto max-w-7xl">
          {isLoading ? (
            <div className="flex min-h-100 items-center justify-center">
              <div className="text-center">
                <div className="mb-4 inline-flex rounded-full bg-accent/10 p-4">
                  <FileText className="h-8 w-8 animate-pulse text-accent" />
                </div>
                <p className="text-muted-foreground">Loading posts...</p>
              </div>
            </div>
          ) : !posts || posts.length === 0 ? (
            <div className="flex min-h-100 items-center justify-center">
              <div className="text-center">
                <div className="mb-4 inline-flex rounded-full bg-accent/10 p-4">
                  <FileText className="h-8 w-8 text-accent" />
                </div>
                <h2 className="mb-3 font-bold text-2xl">No Posts Yet</h2>
                <p className="text-muted-foreground leading-relaxed tracking-wide">
                  Blog posts will appear here once they're published. Check back
                  soon for expert insights on SEO and GEO.
                </p>
              </div>
            </div>
          ) : (
            <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
              {posts.map((post) => (
                <BlogPostCard key={post._id} post={post} />
              ))}
            </div>
          )}
        </div>
      </section>

      {/* Final CTA Section */}
      <section className="border-border border-t px-6 py-20 lg:py-32">
        <div className="mx-auto max-w-4xl text-center">
          <h2 className="mb-6 font-bold text-4xl leading-tight tracking-tight lg:text-5xl">
            Ready to Put These Insights Into Action?
          </h2>
          <p className="mx-auto mb-8 max-w-2xl text-lg text-muted-foreground leading-relaxed tracking-wide">
            From SEO and GEO to Performance Marketing, we turn strategy into
            leads. Let's discuss how to scale your business.
          </p>
          <div className="flex flex-col items-center justify-center gap-4 sm:flex-row">
            <Button
              asChild
              size="lg"
              className="bg-accent text-accent-foreground hover:bg-accent/90"
            >
              <Link to="/apply">
                Apply To Work With Us
                <ArrowRight className="ml-2 h-5 w-5" />
              </Link>
            </Button>
            <Button asChild size="lg" variant="outline">
              <Link to="/case-studies">View Case Studies</Link>
            </Button>
          </div>
        </div>
      </section>
    </>
  );
}

/**
 * Blog Post Card Component
 */
interface BlogPostCardProps {
  post: {
    _id: string;
    title: string;
    slug: string;
    excerpt?: string;
    featuredImage?: string;
    authorName: string;
    publishedAt?: number;
    modifiedAt: number;
    content: string;
  };
}

function BlogPostCard({ post }: BlogPostCardProps) {
  // Calculate read time (rough estimate: 200 words per minute)
  const wordCount = post.content.split(/\s+/).length;
  const readTime = Math.ceil(wordCount / 200);

  // Format date
  const date = post.publishedAt || post.modifiedAt;
  const formattedDate = new Date(date).toLocaleDateString('en-US', {
    year: 'numeric',
    month: 'long',
    day: 'numeric',
  });

  // Get excerpt or generate from content
  const excerpt =
    post.excerpt ||
    `${post.content
      .replace(/[#*`]/g, '')
      .split('\n')
      .filter((line) => line.trim().length > 0)
      .slice(0, 2)
      .join(' ')
      .substring(0, 160)}...`;

  return (
    <Link to={`/blog/${post.slug}` as any} className="block h-full">
      <article className="flex h-full flex-col rounded-2xl border border-border bg-card transition-all hover:border-accent/50 hover:shadow-accent/10 hover:shadow-lg">
        {/* Featured Image */}
        {post.featuredImage ? (
          <img
            src={post.featuredImage}
            alt={post.title}
            className="aspect-video w-full rounded-t-2xl object-cover"
          />
        ) : (
          <div className="flex aspect-video items-center justify-center rounded-t-2xl bg-muted">
            <FileText className="h-12 w-12 text-muted-foreground/30" />
          </div>
        )}

        {/* Content */}
        <div className="flex flex-1 flex-col p-6">
          {/* Title */}
          <h3 className="mb-3 font-bold text-xl leading-tight lg:text-2xl">
            {post.title}
          </h3>

          {/* Excerpt */}
          <p className="mb-4 flex-1 text-muted-foreground text-sm leading-relaxed tracking-wide">
            {excerpt}
          </p>

          {/* Metadata */}
          <div className="flex flex-wrap items-center gap-4 border-border border-t pt-4 text-muted-foreground text-xs tracking-wide">
            <div className="flex items-center gap-1">
              <Calendar className="h-3.5 w-3.5" />
              <span>{formattedDate}</span>
            </div>
            <div className="flex items-center gap-1">
              <Clock className="h-3.5 w-3.5" />
              <span>{readTime} min read</span>
            </div>
            <div className="flex items-center gap-1">
              <User className="h-3.5 w-3.5" />
              <span>{post.authorName}</span>
            </div>
          </div>
        </div>
      </article>
    </Link>
  );
}
