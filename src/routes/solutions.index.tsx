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
import { Card, CardContent } from '@/components/ui/card';
import { getAllSolutions } from '@/data/solutions';
import { generateMetaTags } from '@/lib/seo';

export const Route = createFileRoute('/solutions/')({
  component: SolutionsLandingPage,
  head: () =>
    generateMetaTags({
      title: 'Industry Solutions - GEO, SEO & Lead Generation by Vertical',
      description:
        'Discover AI visibility, search optimization, and lead generation strategies tailored to your industry. We drive results across 12 key verticals.',
      url: 'https://op.digital/solutions',
    }),
});

// Icon mapping for industries - hoisted outside component to avoid recreation on each render
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

function SolutionsLandingPage() {
  const solutions = getAllSolutions();

  return (
    <div className="overflow-hidden">
      <SEO
        structuredData={{
          type: 'BreadcrumbList',
          data: {
            itemListElement: [
              {
                '@type': 'ListItem',
                position: 1,
                name: 'Home',
                item: 'https://op.digital/',
              },
              {
                '@type': 'ListItem',
                position: 2,
                name: 'Solutions',
                item: 'https://op.digital/solutions',
              },
            ],
          },
        }}
      />

      {/* Hero Section */}
      <section className="px-6 py-16 lg:py-20">
        <div className="mx-auto max-w-7xl">
          <div className="mx-auto max-w-4xl text-center">
            <h1 className="mb-6 font-extrabold text-5xl leading-[0.95] tracking-tighter lg:mb-8 lg:text-7xl xl:text-8xl">
              Industry-Specific Search Solutions
            </h1>
            <p className="mx-auto mb-8 max-w-2xl text-muted-foreground leading-relaxed lg:text-lg">
              Tailored GEO, SEO, and PPL strategies for your industry. We
              understand your market, your customers, and what it takes to win
              search in your vertical.
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
        </div>
      </section>

      {/* Why Industry-Specific Matters */}
      <section className="px-6 py-16 lg:py-20">
        <div className="mx-auto max-w-7xl">
          <div className="mb-12 text-center">
            <h2 className="mb-4 font-bold text-4xl leading-[1.1] tracking-tight lg:text-5xl">
              Why Industry-Specific SEO Matters
            </h2>
            <p className="mx-auto mt-4 max-w-3xl text-muted-foreground leading-relaxed">
              Generic SEO strategies fail because they don't understand your
              unique challenges, customer behavior, and competitive landscape.
              Our industry-specific approach delivers results because we know
              your business.
            </p>
          </div>
          <div className="grid gap-8 md:grid-cols-3">
            <Card>
              <CardContent>
                <HugeiconsIcon
                  icon={Agreement01Icon}
                  size={28}
                  strokeWidth={1.5}
                  className="mb-4 text-primary"
                />
                <h3 className="mb-3 font-bold text-xl">
                  We Speak Your Language
                </h3>
                <p className="text-muted-foreground leading-relaxed">
                  From hospitality booking flows to manufacturing B2B cycles, we
                  understand the nuances of how customers search in your
                  industry.
                </p>
              </CardContent>
            </Card>
            <Card>
              <CardContent>
                <HugeiconsIcon
                  icon={Building06Icon}
                  size={28}
                  strokeWidth={1.5}
                  className="mb-4 text-primary"
                />
                <h3 className="mb-3 font-bold text-xl">
                  Proven Industry Results
                </h3>
                <p className="text-muted-foreground leading-relaxed">
                  We've driven results across 12 industries with strategies
                  tailored to each vertical's unique challenges and
                  opportunities.
                </p>
              </CardContent>
            </Card>
            <Card>
              <CardContent>
                <HugeiconsIcon
                  icon={ArrowRight01Icon}
                  size={28}
                  strokeWidth={1.5}
                  className="mb-4 text-primary"
                />
                <h3 className="mb-3 font-bold text-xl">
                  Faster Time to Results
                </h3>
                <p className="text-muted-foreground leading-relaxed">
                  Industry-specific strategies mean we don't waste time learning
                  your market. We hit the ground running with proven playbooks.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Industry Solutions Grid */}
      <section className="px-6 py-16 lg:py-20">
        <div className="mx-auto max-w-7xl">
          <div className="mb-12 text-center">
            <h2 className="mb-4 font-bold text-4xl leading-[1.1] tracking-tight lg:text-5xl">
              Find Your Industry
            </h2>
            <p className="mx-auto mt-4 max-w-2xl text-muted-foreground leading-relaxed">
              Explore our industry-specific GEO, SEO, and PPL solutions tailored
              to your vertical.
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
                  className="group"
                >
                  <Card className="flex h-full flex-col transition-all group-hover:shadow-lg group-hover:shadow-primary/10 group-hover:ring-primary/50">
                    <CardContent className="flex flex-1 flex-col">
                      <HugeiconsIcon
                        icon={icon}
                        size={28}
                        strokeWidth={1.5}
                        className="mb-4 text-primary"
                      />
                      <h3 className="mb-3 font-bold text-xl">
                        {solution.name}
                      </h3>
                      <p className="mb-4 flex-1 text-muted-foreground leading-relaxed">
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
                    </CardContent>
                  </Card>
                </Link>
              );
            })}
          </div>
        </div>
      </section>

      {/* Final CTA Section */}
      <section className="border-border border-y px-6 py-16 lg:py-20">
        <div className="mx-auto max-w-3xl text-center">
          <h2 className="mb-4 font-bold text-3xl tracking-tight lg:text-4xl">
            Ready to Generate More Leads?
          </h2>
          <p className="mx-auto mb-8 max-w-xl text-muted-foreground">
            No matter your industry, we help you scale with qualified leads
            through GEO, SEO, and PPL. Let's discuss which approach fits your
            goals.
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
              View All Case Studies
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
}
