import { Link } from '@tanstack/react-router';
import { ArrowRight, Calendar, Home, Search } from 'lucide-react';

export function NotFound() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-background via-background to-secondary/20">
      {/* Hero Section */}
      <div className="relative overflow-hidden py-20 md:py-32">
        <div className="absolute inset-0 bg-gradient-radial from-accent/10 via-transparent to-transparent opacity-50" />
        <div className="container mx-auto px-4 relative">
          <div className="max-w-4xl mx-auto text-center">
            <div className="inline-flex items-center justify-center w-24 h-24 rounded-full bg-accent/10 mb-8">
              <Search className="w-12 h-12 text-accent" />
            </div>
            <h1 className="text-5xl md:text-7xl font-bold mb-6">404</h1>
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Page Not Found
            </h2>
            <p className="text-xl text-muted-foreground mb-12 max-w-2xl mx-auto">
              The page you're looking for doesn't exist or has been moved. Let's
              get you back on track.
            </p>

            {/* Primary CTA */}
            <div className="flex flex-col sm:flex-row gap-4 justify-center mb-16">
              <Link
                to="/"
                className="inline-flex items-center justify-center gap-2 px-8 py-4 rounded-lg bg-accent text-white font-medium hover:bg-accent/90 transition-colors"
              >
                <Home className="w-5 h-5" />
                Back to Home
              </Link>
              <Link
                to="/schedule"
                className="inline-flex items-center justify-center gap-2 px-8 py-4 rounded-lg border border-border hover:border-accent/50 transition-colors"
              >
                <Calendar className="w-5 h-5" />
                Schedule a Call
              </Link>
            </div>

            {/* Quick Links Grid */}
            <div className="max-w-3xl mx-auto">
              <h3 className="text-lg font-medium mb-6">Popular Pages</h3>
              <div className="grid md:grid-cols-2 gap-4">
                <Link
                  to="/services/geo"
                  className="group p-6 rounded-2xl border border-border bg-card hover:border-accent/50 hover:shadow-lg hover:shadow-accent/10 transition-all text-left"
                >
                  <div className="flex items-center justify-between mb-2">
                    <h4 className="font-medium text-lg">GEO Services</h4>
                    <ArrowRight className="w-5 h-5 text-muted-foreground group-hover:text-accent transition-colors" />
                  </div>
                  <p className="text-sm text-muted-foreground">
                    Generative Engine Optimization for AI search
                  </p>
                </Link>

                <Link
                  to="/services/seo"
                  className="group p-6 rounded-2xl border border-border bg-card hover:border-accent/50 hover:shadow-lg hover:shadow-accent/10 transition-all text-left"
                >
                  <div className="flex items-center justify-between mb-2">
                    <h4 className="font-medium text-lg">SEO Services</h4>
                    <ArrowRight className="w-5 h-5 text-muted-foreground group-hover:text-accent transition-colors" />
                  </div>
                  <p className="text-sm text-muted-foreground">
                    Traditional search engine optimization
                  </p>
                </Link>

                <Link
                  to="/resources/case-studies"
                  className="group p-6 rounded-2xl border border-border bg-card hover:border-accent/50 hover:shadow-lg hover:shadow-accent/10 transition-all text-left"
                >
                  <div className="flex items-center justify-between mb-2">
                    <h4 className="font-medium text-lg">Case Studies</h4>
                    <ArrowRight className="w-5 h-5 text-muted-foreground group-hover:text-accent transition-colors" />
                  </div>
                  <p className="text-sm text-muted-foreground">
                    Real results from our client partnerships
                  </p>
                </Link>

                <Link
                  to="/blog"
                  className="group p-6 rounded-2xl border border-border bg-card hover:border-accent/50 hover:shadow-lg hover:shadow-accent/10 transition-all text-left"
                >
                  <div className="flex items-center justify-between mb-2">
                    <h4 className="font-medium text-lg">Blog</h4>
                    <ArrowRight className="w-5 h-5 text-muted-foreground group-hover:text-accent transition-colors" />
                  </div>
                  <p className="text-sm text-muted-foreground">
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
