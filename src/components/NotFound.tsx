import {
  ArrowRight01Icon,
  Calendar01Icon,
  Home01Icon,
  Search01Icon,
} from '@hugeicons/core-free-icons';
import { HugeiconsIcon } from '@hugeicons/react';
import { Link } from '@tanstack/react-router';
import { Button } from '@/components/ui/button';

const popularPages = [
  {
    to: '/geo',
    title: 'GEO Services',
    description: 'Generative Engine Optimization for AI search',
  },
  {
    to: '/seo',
    title: 'SEO Services',
    description: 'Traditional search engine optimization',
  },
  {
    to: '/case-studies',
    title: 'Case Studies',
    description: 'Real results from our client partnerships',
  },
  {
    to: '/blog',
    title: 'Blog',
    description: 'Insights and strategies for modern search',
  },
];

export function NotFound() {
  return (
    <div className="min-h-screen bg-linear-to-b from-background via-background to-secondary/20">
      {/* Hero Section */}
      <div className="relative overflow-hidden py-20 md:py-32">
        <div className="absolute inset-0 bg-gradient-radial from-primary/10 via-transparent to-transparent opacity-50" />
        <div className="container relative mx-auto px-4">
          <div className="mx-auto max-w-4xl text-center">
            <div className="mb-8 inline-flex h-24 w-24 items-center justify-center rounded-full bg-primary/10">
              <HugeiconsIcon
                icon={Search01Icon}
                size={48}
                strokeWidth={2}
                className="text-primary"
              />
            </div>
            <h1 className="mb-6 font-bold text-5xl md:text-7xl">404</h1>
            <h2 className="mb-4 font-bold text-3xl md:text-4xl">
              Page Not Found
            </h2>
            <p className="mx-auto mb-12 max-w-2xl text-muted-foreground text-xl">
              The page you're looking for doesn't exist or has been moved. Let's
              get you back on track.
            </p>

            {/* Primary CTA */}
            <div className="mb-16 flex flex-col justify-center gap-4 sm:flex-row">
              <Button render={<Link to="/" />} size="lg">
                <HugeiconsIcon
                  icon={Home01Icon}
                  size={20}
                  strokeWidth={2}
                  className="mr-2"
                />
                Back to Home
              </Button>
              <Button render={<Link to="/apply" />} size="lg" variant="outline">
                <HugeiconsIcon
                  icon={Calendar01Icon}
                  size={20}
                  strokeWidth={2}
                  className="mr-2"
                />
                Apply To Work With Us
              </Button>
            </div>

            {/* Quick Links Grid */}
            <div className="mx-auto max-w-3xl">
              <h3 className="mb-6 font-medium text-lg">Popular Pages</h3>
              <div className="grid gap-4 md:grid-cols-2">
                {popularPages.map((page) => (
                  <Link
                    key={page.to}
                    to={page.to}
                    className="group rounded-2xl bg-card p-6 text-left ring-1 ring-foreground/10 transition-all hover:shadow-lg hover:shadow-primary/10 hover:ring-primary/50"
                  >
                    <div className="mb-2 flex items-center justify-between">
                      <h4 className="font-medium text-lg">{page.title}</h4>
                      <HugeiconsIcon
                        icon={ArrowRight01Icon}
                        size={20}
                        strokeWidth={2}
                        className="text-muted-foreground transition-colors group-hover:text-primary"
                      />
                    </div>
                    <p className="text-muted-foreground text-sm">
                      {page.description}
                    </p>
                  </Link>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
