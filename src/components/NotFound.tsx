import { Link } from '@tanstack/react-router';
import { ArrowRight, Calendar, Home, Search } from 'lucide-react';

export function NotFound() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-background via-background to-secondary/20">
      {/* Hero Section */}
      <div className="relative overflow-hidden py-20 md:py-32">
        <div className="absolute inset-0 bg-gradient-radial from-accent/10 via-transparent to-transparent opacity-50" />
        <div className="container relative mx-auto px-4">
          <div className="mx-auto max-w-4xl text-center">
            <div className="mb-8 inline-flex h-24 w-24 items-center justify-center rounded-full bg-accent/10">
              <Search className="h-12 w-12 text-accent" />
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
              <Link
                to="/"
                className="inline-flex items-center justify-center gap-2 rounded-lg bg-accent px-8 py-4 font-medium text-white transition-colors hover:bg-accent/90"
              >
                <Home className="h-5 w-5" />
                Back to Home
              </Link>
              <Link
                to="/audit"
                className="inline-flex items-center justify-center gap-2 rounded-lg border border-border px-8 py-4 transition-colors hover:border-accent/50"
              >
                <Calendar className="h-5 w-5" />
                Get Your Free AI Search Audit
              </Link>
            </div>

            {/* Quick Links Grid */}
            <div className="mx-auto max-w-3xl">
              <h3 className="mb-6 font-medium text-lg">Popular Pages</h3>
              <div className="grid gap-4 md:grid-cols-2">
                <Link
                  to="/geo"
                  className="group rounded-2xl border border-border bg-card p-6 text-left transition-all hover:border-accent/50 hover:shadow-accent/10 hover:shadow-lg"
                >
                  <div className="mb-2 flex items-center justify-between">
                    <h4 className="font-medium text-lg">GEO Services</h4>
                    <ArrowRight className="h-5 w-5 text-muted-foreground transition-colors group-hover:text-accent" />
                  </div>
                  <p className="text-muted-foreground text-sm">
                    Generative Engine Optimization for AI search
                  </p>
                </Link>

                <Link
                  to="/seo"
                  className="group rounded-2xl border border-border bg-card p-6 text-left transition-all hover:border-accent/50 hover:shadow-accent/10 hover:shadow-lg"
                >
                  <div className="mb-2 flex items-center justify-between">
                    <h4 className="font-medium text-lg">SEO Services</h4>
                    <ArrowRight className="h-5 w-5 text-muted-foreground transition-colors group-hover:text-accent" />
                  </div>
                  <p className="text-muted-foreground text-sm">
                    Traditional search engine optimization
                  </p>
                </Link>

                <Link
                  to="/case-studies"
                  className="group rounded-2xl border border-border bg-card p-6 text-left transition-all hover:border-accent/50 hover:shadow-accent/10 hover:shadow-lg"
                >
                  <div className="mb-2 flex items-center justify-between">
                    <h4 className="font-medium text-lg">Case Studies</h4>
                    <ArrowRight className="h-5 w-5 text-muted-foreground transition-colors group-hover:text-accent" />
                  </div>
                  <p className="text-muted-foreground text-sm">
                    Real results from our client partnerships
                  </p>
                </Link>

                <Link
                  to="/blog"
                  className="group rounded-2xl border border-border bg-card p-6 text-left transition-all hover:border-accent/50 hover:shadow-accent/10 hover:shadow-lg"
                >
                  <div className="mb-2 flex items-center justify-between">
                    <h4 className="font-medium text-lg">Blog</h4>
                    <ArrowRight className="h-5 w-5 text-muted-foreground transition-colors group-hover:text-accent" />
                  </div>
                  <p className="text-muted-foreground text-sm">
                    Insights and strategies for modern search
                  </p>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
