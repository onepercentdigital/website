import { createFileRoute } from '@tanstack/react-router';
import { Calendar, Clock, FileText, User } from 'lucide-react';
import { generateMetaTags } from '@/lib/seo';

export const Route = createFileRoute('/blog/')({
  component: BlogIndexPage,
  head: () =>
    generateMetaTags({
      title: 'Blog | SEO & GEO Insights',
      description:
        'Expert insights, strategies, and case studies on SEO, GEO, and search optimization. Learn how to dominate traditional and AI-powered search.',
      url: 'https://onepercentseo.com/blog',
    }),
});

// Placeholder blog posts for visual skeleton
const placeholderPosts = [
  {
    id: '1',
    title: 'How AI Search is Changing SEO Strategy in 2025',
    excerpt:
      'Generative Engine Optimization (GEO) is reshaping how businesses approach search visibility. Learn the key differences between traditional SEO and AI search optimization.',
    category: 'GEO',
    date: 'March 15, 2025',
    readTime: '8 min read',
    author: 'SEO Team',
  },
  {
    id: '2',
    title: '5 Technical SEO Mistakes That Are Killing Your Rankings',
    excerpt:
      'Avoid these common technical SEO pitfalls that prevent search engines from properly crawling and indexing your site. Simple fixes with major impact.',
    category: 'SEO',
    date: 'March 10, 2025',
    readTime: '6 min read',
    author: 'SEO Team',
  },
  {
    id: '3',
    title: 'Grove Bay Hospitality: 425% Growth in 12 Months',
    excerpt:
      "A deep dive into how we helped Grove Bay Hospitality dominate Miami's competitive restaurant market through strategic SEO and GEO optimization.",
    category: 'Case Study',
    date: 'March 5, 2025',
    readTime: '10 min read',
    author: 'SEO Team',
  },
  {
    id: '4',
    title: 'The Complete Guide to Local SEO for Multi-Location Businesses',
    excerpt:
      'Managing SEO for multiple locations requires a strategic approach. Learn how to optimize each location while maintaining brand consistency.',
    category: 'SEO',
    date: 'February 28, 2025',
    readTime: '12 min read',
    author: 'SEO Team',
  },
  {
    id: '5',
    title: "Why AI Assistants Aren't Recommending Your Business",
    excerpt:
      "ChatGPT, Perplexity, and Google's AI Overviews are answering user queries without your business. Here's how to fix that with GEO strategies.",
    category: 'GEO',
    date: 'February 20, 2025',
    readTime: '7 min read',
    author: 'SEO Team',
  },
  {
    id: '6',
    title: 'Link Building in 2025: Quality Over Quantity',
    excerpt:
      'The link building landscape has evolved. Discover modern strategies that prioritize authoritative, relevant backlinks over volume.',
    category: 'SEO',
    date: 'February 15, 2025',
    readTime: '9 min read',
    author: 'SEO Team',
  },
];

const categories = ['All Posts', 'SEO', 'GEO', 'Case Studies', 'Industry News'];

function BlogIndexPage() {
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
              search optimization. Learn how to dominate both traditional and
              AI-powered search.
            </p>
          </div>
        </div>
      </section>

      {/* Category Filter Tabs (Non-functional skeleton) */}
      <section className="border-border border-y bg-background px-6 py-6">
        <div className="mx-auto max-w-7xl">
          <div className="flex flex-wrap items-center justify-center gap-2">
            {categories.map((category, index) => (
              <button
                key={category}
                type="button"
                disabled
                className={`rounded-full border px-4 py-2 font-medium text-sm transition-colors ${
                  index === 0
                    ? 'border-accent bg-accent/10 text-accent'
                    : 'border-border bg-card text-muted-foreground hover:border-accent/50 hover:text-foreground'
                }`}
              >
                {category}
              </button>
            ))}
          </div>
          <p className="mt-4 text-center text-muted-foreground text-xs tracking-wide">
            Categories are non-functional placeholders - full blog coming soon
          </p>
        </div>
      </section>

      {/* Blog Posts Grid */}
      <section className="bg-background px-6 py-20 lg:py-32">
        <div className="mx-auto max-w-7xl">
          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
            {placeholderPosts.map((post) => (
              <BlogPostCard key={post.id} post={post} />
            ))}
          </div>

          {/* Load More Button (Non-functional) */}
          <div className="mt-12 text-center">
            <button
              type="button"
              disabled
              className="rounded-lg border border-border bg-card px-8 py-3 font-semibold text-foreground transition-colors hover:border-accent/50 hover:bg-accent/5"
            >
              Load More Posts
            </button>
            <p className="mt-3 text-muted-foreground text-sm tracking-wide">
              Pagination is a non-functional placeholder
            </p>
          </div>
        </div>
      </section>

      {/* Coming Soon Notice */}
      <section className="border-border border-t bg-muted/30 px-6 py-12">
        <div className="mx-auto max-w-3xl text-center">
          <div className="mb-4 inline-flex rounded-full bg-accent/10 p-3">
            <FileText className="h-6 w-6 text-accent" />
          </div>
          <h2 className="mb-3 font-bold text-2xl">
            Full Blog Functionality Coming Soon
          </h2>
          <p className="text-muted-foreground leading-relaxed tracking-wide">
            This is a visual skeleton showing the planned blog layout and
            design. The actual blog with real articles, search, filtering, and
            CMS integration is currently under development.
          </p>
        </div>
      </section>
    </>
  );
}

/**
 * Blog Post Card Component (Skeleton/Placeholder)
 */
interface BlogPostCardProps {
  post: {
    id: string;
    title: string;
    excerpt: string;
    category: string;
    date: string;
    readTime: string;
    author: string;
  };
}

function BlogPostCard({ post }: BlogPostCardProps) {
  return (
    <article className="flex h-full flex-col rounded-2xl border border-border bg-card transition-all hover:border-accent/50 hover:shadow-accent/10 hover:shadow-lg">
      {/* Featured Image Placeholder */}
      <div className="flex aspect-video items-center justify-center rounded-t-2xl bg-muted">
        <FileText className="h-12 w-12 text-muted-foreground/30" />
      </div>

      {/* Content */}
      <div className="flex flex-1 flex-col p-6">
        {/* Category Badge */}
        <div className="mb-3 inline-block self-start rounded-full bg-accent/10 px-3 py-1 font-medium text-accent text-xs uppercase tracking-wider">
          {post.category}
        </div>

        {/* Title */}
        <h3 className="mb-3 font-bold text-xl leading-tight lg:text-2xl">
          {post.title}
        </h3>

        {/* Excerpt */}
        <p className="mb-4 flex-1 text-muted-foreground text-sm leading-relaxed tracking-wide">
          {post.excerpt}
        </p>

        {/* Metadata */}
        <div className="flex flex-wrap items-center gap-4 border-border border-t pt-4 text-muted-foreground text-xs tracking-wide">
          <div className="flex items-center gap-1">
            <Calendar className="h-3.5 w-3.5" />
            <span>{post.date}</span>
          </div>
          <div className="flex items-center gap-1">
            <Clock className="h-3.5 w-3.5" />
            <span>{post.readTime}</span>
          </div>
          <div className="flex items-center gap-1">
            <User className="h-3.5 w-3.5" />
            <span>{post.author}</span>
          </div>
        </div>
      </div>
    </article>
  );
}
