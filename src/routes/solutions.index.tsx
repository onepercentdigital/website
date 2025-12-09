import { createFileRoute, Link } from '@tanstack/react-router';
import {
  ArrowRight,
  Briefcase,
  Building2,
  Code,
  Factory,
  Gavel,
  Handshake,
  Heart,
  Home,
  Landmark,
  Package,
  ShoppingCart,
  Tractor,
  Truck,
  Utensils,
} from 'lucide-react';
import { SEO } from '@/components/SEO';
import { Button } from '@/components/ui/button';
import { getAllSolutions } from '@/data/solutions';
import { generateMetaTags } from '@/lib/seo';

export const Route = createFileRoute('/solutions/')({
  component: SolutionsLandingPage,
  head: () =>
    generateMetaTags({
      title: 'Industry-Specific SEO Solutions | Tailored Strategies',
      description:
        'Discover SEO, GEO, and Performance Marketing strategies tailored to your industry. From hospitality to technology, we drive results for businesses in 12 key verticals.',
      url: 'https://onepercentseo.com/solutions',
    }),
});

function SolutionsLandingPage() {
  const solutions = getAllSolutions();

  // Icon mapping for industries
  const industryIcons: Record<
    string,
    React.ComponentType<{ className?: string }>
  > = {
    hospitality: Utensils,
    ecommerce: ShoppingCart,
    manufacturing: Factory,
    logistics: Truck,
    automotive: Package,
    construction: Building2,
    agriculture: Tractor,
    technology: Code,
    'health-wellness': Heart,
    'finance-insurance': Landmark,
    legal: Gavel,
    'real-estate': Home,
  };

  return (
    <div className="overflow-hidden">
      <SEO />

      {/* Hero Section */}
      <section className="relative overflow-hidden bg-background px-6 py-12 lg:py-16">
        <div className="mx-auto max-w-7xl">
          <div className="mx-auto max-w-4xl text-center">
            <h1 className="mb-6 font-extrabold text-5xl leading-[0.95] tracking-tighter lg:text-7xl xl:text-8xl">
              Industry-Specific Search Solutions
            </h1>
            <p className="mx-auto mb-8 max-w-2xl text-muted-foreground text-xl leading-relaxed tracking-wide lg:text-2xl">
              Tailored SEO, GEO, and Performance Marketing strategies for your
              industry. We understand your market, your customers, and what it
              takes to win search in your vertical.
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
        </div>
      </section>

      {/* Why Industry-Specific Matters */}
      <section className="px-6 py-20 lg:py-32">
        <div className="mx-auto max-w-7xl">
          <div className="mb-16 text-center">
            <h2 className="font-bold text-4xl tracking-tight lg:text-6xl">
              Why Industry-Specific SEO Matters
            </h2>
            <p className="mx-auto mt-6 max-w-3xl text-lg text-muted-foreground leading-relaxed tracking-wide">
              Generic SEO strategies fail because they don't understand your
              unique challenges, customer behavior, and competitive landscape.
              Our industry-specific approach delivers results because we know
              your business.
            </p>
          </div>
          <div className="grid gap-8 md:grid-cols-3">
            <div className="rounded-2xl border border-border bg-card p-8">
              <div className="mb-4 inline-flex h-12 w-12 items-center justify-center rounded-xl bg-accent/10 p-3">
                <Handshake className="h-6 w-6 text-accent" />
              </div>
              <h3 className="mb-3 font-bold text-2xl leading-tight">
                We Speak Your Language
              </h3>
              <p className="text-muted-foreground leading-relaxed tracking-wide">
                From hospitality booking flows to manufacturing B2B cycles, we
                understand the nuances of how customers search in your industry.
              </p>
            </div>
            <div className="rounded-2xl border border-border bg-card p-8">
              <div className="mb-4 inline-flex h-12 w-12 items-center justify-center rounded-xl bg-accent/10 p-3">
                <Building2 className="h-6 w-6 text-accent" />
              </div>
              <h3 className="mb-3 font-bold text-2xl leading-tight">
                Proven Industry Results
              </h3>
              <p className="text-muted-foreground leading-relaxed tracking-wide">
                We've driven results across 12 industries with strategies
                tailored to each vertical's unique challenges and opportunities.
              </p>
            </div>
            <div className="rounded-2xl border border-border bg-card p-8">
              <div className="mb-4 inline-flex h-12 w-12 items-center justify-center rounded-xl bg-accent/10 p-3">
                <ArrowRight className="h-6 w-6 text-accent" />
              </div>
              <h3 className="mb-3 font-bold text-2xl leading-tight">
                Faster Time to Results
              </h3>
              <p className="text-muted-foreground leading-relaxed tracking-wide">
                Industry-specific strategies mean we don't waste time learning
                your market. We hit the ground running with proven playbooks.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Industry Solutions Grid */}
      <section className="px-6 py-20 lg:py-32">
        <div className="mx-auto max-w-7xl">
          <div className="mb-16 text-center">
            <h2 className="font-bold text-4xl tracking-tight lg:text-6xl">
              Find Your Industry
            </h2>
            <p className="mx-auto mt-6 max-w-2xl text-lg text-muted-foreground leading-relaxed tracking-wide">
              Explore our industry-specific SEO, GEO, and Performance Marketing
              solutions tailored to your vertical.
            </p>
          </div>
          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
            {solutions.map((solution) => {
              const Icon = industryIcons[solution.slug] || Briefcase;
              return (
                <Link
                  key={solution.id}
                  to={
                    // biome-ignore lint/suspicious/noExplicitAny: TanStack Router requires exact route paths, but solution.slug is dynamic from data - all slugs are valid routes
                    `/solutions/${solution.slug}` as any
                  }
                  className="group flex flex-col rounded-2xl border border-border bg-card p-6 transition-all hover:border-accent/50 hover:shadow-lg"
                >
                  <div className="mb-4 inline-flex h-14 w-14 items-center justify-center rounded-xl bg-accent/10 p-3 transition-colors group-hover:bg-accent group-hover:text-accent-foreground">
                    <Icon className="h-7 w-7 text-accent transition-colors group-hover:text-accent-foreground" />
                  </div>
                  <h3 className="mb-3 font-bold text-2xl leading-tight">
                    {solution.name}
                  </h3>
                  <p className="mb-4 flex-1 text-muted-foreground leading-relaxed tracking-wide">
                    {solution.description}
                  </p>
                  <div className="flex items-center font-semibold text-accent text-sm">
                    Learn More
                    <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
                  </div>
                </Link>
              );
            })}
          </div>
        </div>
      </section>

      {/* Final CTA Section */}
      <section className="px-6 py-20 lg:py-32">
        <div className="mx-auto max-w-4xl text-center">
          <h2 className="mb-6 font-bold text-4xl leading-tight tracking-tight lg:text-5xl">
            Don't See Your Industry?
          </h2>
          <p className="mx-auto mb-8 max-w-2xl text-lg text-muted-foreground leading-relaxed tracking-wide">
            We work with businesses across all verticals. Our industry-specific
            approach applies to any market. Let's discuss your unique
            challenges.
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
              <Link to="/case-studies">View All Case Studies</Link>
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
}
