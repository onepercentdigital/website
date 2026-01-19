import {
  ArrowRight01Icon,
  Calendar01Icon,
  Clock01Icon,
  File01Icon,
  UserIcon,
} from '@hugeicons/core-free-icons';
import { HugeiconsIcon } from '@hugeicons/react';
import { createFileRoute, Link } from '@tanstack/react-router';
import { memo } from 'react';
import { Image } from '@/components/Image';
import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';
import { getAllPosts } from '@/lib/blog';
import { generateMetaTags } from '@/lib/seo';
import type { BlogPostListItem } from '@/types/blog';

export const Route = createFileRoute('/blog/')({
  component: BlogIndexPage,
  head: () =>
    generateMetaTags({
      title: 'GEO & SEO Insights - One Percent Digital Blog',
      description:
        'Expert strategies for ranking in AI search and Google. Learn how to dominate both generative engines and traditional search.',
      url: 'https://op.digital/blog',
    }),
});

function BlogIndexPage() {
  // Get all published posts from static data
  const posts = getAllPosts();

  return (
    <>
      {/* Hero Section */}
      <section className="bg-background px-6 py-16 lg:py-20">
        <div className="mx-auto max-w-7xl">
          <div className="mx-auto max-w-3xl text-center">
            <h1 className="mb-6 font-extrabold text-5xl leading-[0.95] tracking-tighter lg:mb-8 lg:text-7xl xl:text-8xl">
              Latest Insights
            </h1>
            <p className="text-muted-foreground leading-relaxed lg:text-lg">
              Expert strategies, case studies, and insights on GEO, SEO, and
              PPL. Learn how to lead in traditional search, AI discovery, and
              lead generation.
            </p>
          </div>
        </div>
      </section>

      {/* Blog Posts Grid */}
      <section className="bg-background px-6 py-16 lg:py-20">
        <div className="mx-auto max-w-7xl">
          {posts.length === 0 ? (
            <div className="flex min-h-100 items-center justify-center">
              <div className="text-center">
                <HugeiconsIcon
                  icon={File01Icon}
                  size={28}
                  strokeWidth={1.5}
                  className="mx-auto mb-3 text-primary"
                />
                <h2 className="mb-2 font-bold text-xl">No Posts Yet</h2>
                <p className="max-w-sm text-muted-foreground text-sm leading-relaxed">
                  Blog posts will appear here once they're published. Check back
                  soon for expert insights on GEO and SEO.
                </p>
              </div>
            </div>
          ) : (
            <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
              {posts.map((post) => (
                <BlogPostCard key={post.slug} post={post} />
              ))}
            </div>
          )}
        </div>
      </section>

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
            <Button
              render={<Link to="/case-studies" />}
              size="lg"
              variant="outline"
            >
              View Case Studies
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
  post: BlogPostListItem;
}

const BlogPostCard = memo(function BlogPostCard({ post }: BlogPostCardProps) {
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
    <Link
      to="/blog/$slug"
      params={{ slug: post.slug }}
      className="block h-full"
    >
      <Card className="flex h-full flex-col overflow-hidden pt-0 transition-all hover:shadow-lg hover:shadow-primary/10 hover:ring-primary/50">
        {/* Featured Image */}
        {post.featuredImage ? (
          <Image
            src={post.featuredImage}
            alt={post.title}
            width={640}
            height={360}
            layout="constrained"
            className="aspect-video w-full object-cover"
          />
        ) : (
          <div className="flex aspect-video items-center justify-center bg-muted">
            <HugeiconsIcon
              icon={File01Icon}
              size={28}
              strokeWidth={1.5}
              className="text-muted-foreground/50"
            />
          </div>
        )}

        {/* Content */}
        <div className="flex flex-1 flex-col p-6">
          {/* Title */}
          <h3 className="mb-3 font-bold text-xl leading-tight lg:text-2xl">
            {post.title}
          </h3>

          {/* Excerpt */}
          <p className="mb-4 flex-1 text-muted-foreground text-sm leading-relaxed">
            {excerpt}
          </p>

          {/* Metadata */}
          <div className="flex flex-wrap items-center gap-4 pt-4 text-muted-foreground text-xs">
            <div className="flex items-center gap-1">
              <HugeiconsIcon
                icon={Calendar01Icon}
                size={16}
                strokeWidth={1.5}
              />
              <span>{formattedDate}</span>
            </div>
            <div className="flex items-center gap-1">
              <HugeiconsIcon icon={Clock01Icon} size={16} strokeWidth={1.5} />
              <span>{readTime} min read</span>
            </div>
            <div className="flex items-center gap-1">
              <HugeiconsIcon icon={UserIcon} size={16} strokeWidth={1.5} />
              <span>{post.authorName}</span>
            </div>
          </div>
        </div>
      </Card>
    </Link>
  );
});
