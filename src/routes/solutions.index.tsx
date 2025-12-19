import {
  Agreement01Icon,
  ArrowRight01Icon,
  Briefcase01Icon,
  Building06Icon,
  CodeIcon,
  DeliveryBox01Icon,
  DeliveryTruck01Icon,
  Factory01Icon,
  FavouriteIcon,
  Home01Icon,
  JusticeScale01Icon,
  LibraryIcon,
  Restaurant01Icon,
  ShoppingCart01Icon,
  TractorIcon,
} from '@hugeicons/core-free-icons';
import { HugeiconsIcon } from '@hugeicons/react';
import { createFileRoute, Link } from '@tanstack/react-router';
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
  const industryIcons: Record<string, typeof Restaurant01Icon> = {
    hospitality: Restaurant01Icon,
    ecommerce: ShoppingCart01Icon,
    manufacturing: Factory01Icon,
    logistics: DeliveryTruck01Icon,
    automotive: DeliveryBox01Icon,
    construction: Building06Icon,
    agriculture: TractorIcon,
    technology: CodeIcon,
    'health-wellness': FavouriteIcon,
    'finance-insurance': LibraryIcon,
    legal: JusticeScale01Icon,
    'real-estate': Home01Icon,
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
              <Button render={<Link to="/apply" />} size="lg">
                Apply To Work With Us
                <HugeiconsIcon
                  icon={ArrowRight01Icon}
                  size={20}
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
              <HugeiconsIcon
                icon={Agreement01Icon}
                size={32}
                strokeWidth={1.5}
                className="mb-4 text-primary"
              />
              <h3 className="mb-3 font-bold text-2xl leading-tight">
                We Speak Your Language
              </h3>
              <p className="text-muted-foreground leading-relaxed tracking-wide">
                From hospitality booking flows to manufacturing B2B cycles, we
                understand the nuances of how customers search in your industry.
              </p>
            </div>
            <div className="rounded-2xl border border-border bg-card p-8">
              <HugeiconsIcon
                icon={Building06Icon}
                size={32}
                strokeWidth={1.5}
                className="mb-4 text-primary"
              />
              <h3 className="mb-3 font-bold text-2xl leading-tight">
                Proven Industry Results
              </h3>
              <p className="text-muted-foreground leading-relaxed tracking-wide">
                We've driven results across 12 industries with strategies
                tailored to each vertical's unique challenges and opportunities.
              </p>
            </div>
            <div className="rounded-2xl border border-border bg-card p-8">
              <HugeiconsIcon
                icon={ArrowRight01Icon}
                size={32}
                strokeWidth={1.5}
                className="mb-4 text-primary"
              />
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
              const icon = industryIcons[solution.slug] || Briefcase01Icon;
              return (
                <Link
                  key={solution.id}
                  // biome-ignore lint/suspicious/noExplicitAny: Solutions use static routes, slug from data maps to valid routes
                  to={`/solutions/${solution.slug}` as any}
                  className="group flex flex-col rounded-2xl border border-border bg-card p-6 transition-all hover:border-primary/50 hover:shadow-lg"
                >
                  <HugeiconsIcon
                    icon={icon}
                    size={32}
                    strokeWidth={1.5}
                    className="mb-4 text-primary"
                  />
                  <h3 className="mb-3 font-bold text-2xl leading-tight">
                    {solution.name}
                  </h3>
                  <p className="mb-4 flex-1 text-muted-foreground leading-relaxed tracking-wide">
                    {solution.description}
                  </p>
                  <div className="flex items-center font-semibold text-primary text-sm">
                    Learn More
                    <HugeiconsIcon
                      icon={ArrowRight01Icon}
                      size={16}
                      strokeWidth={2}
                      className="ml-2 transition-transform group-hover:translate-x-1"
                    />
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
            Ready to Generate More Leads?
          </h2>
          <p className="mx-auto mb-8 max-w-2xl text-lg text-muted-foreground leading-relaxed tracking-wide">
            No matter your industry, we help you scale with qualified leads
            through SEO, GEO, and Performance Marketing. Let's discuss which
            approach fits your goals.
          </p>
          <div className="flex flex-col items-center justify-center gap-4 sm:flex-row">
            <Button render={<Link to="/apply" />} size="lg">
              Apply To Work With Us
              <HugeiconsIcon
                icon={ArrowRight01Icon}
                size={20}
                strokeWidth={2}
                data-icon="inline-end"
              />
            </Button>
            <Button
              render={<Link to="/case-studies" />}
              size="lg"
              variant="outline"
            >
              View All Case Studies
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
}
