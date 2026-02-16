import {
  ArrowRight01Icon,
  Award01Icon,
  Briefcase01Icon,
  Building01Icon,
  ChartIncreaseIcon,
  Factory01Icon,
  LaptopIcon,
  Restaurant01Icon,
  UserGroupIcon,
} from '@hugeicons/core-free-icons';
import { HugeiconsIcon } from '@hugeicons/react';
import { createFileRoute, Link } from '@tanstack/react-router';
import { Image } from '@/components/Image';
import { SEO } from '@/components/SEO';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import {
  customerCategories,
  customers,
  getCustomersWithTestimonials,
  getFeaturedCustomer,
} from '@/data/customers';
import { generateMetaTags } from '@/lib/seo';

export const Route = createFileRoute('/customers')({
  component: CustomersPage,
  head: () =>
    generateMetaTags({
      title: 'Our Clients & Results - One Percent Digital',
      description:
        'Grove Bay Hospitality, Sorting Robotics, Revology Cars, and other brands that trust One Percent Digital for GEO, SEO, and lead generation.',
      url: 'https://op.digital/customers',
    }),
});

// Icon mapping for customer categories
const iconMap: Record<string, typeof Restaurant01Icon> = {
  UtensilsCrossed: Restaurant01Icon,
  Laptop: LaptopIcon,
  Factory: Factory01Icon,
  Briefcase: Briefcase01Icon,
};

function CustomersPage() {
  const featuredCustomer = getFeaturedCustomer();
  const testimonialsCustomers = getCustomersWithTestimonials().slice(0, 3);

  return (
    <div className="flex min-h-screen flex-col">
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
                name: 'Customers',
                item: 'https://op.digital/customers',
              },
            ],
          },
        }}
      />

      {/* Hero Section */}
      <section className="relative overflow-hidden bg-background px-6 py-16 lg:py-20">
        <div className="mx-auto max-w-7xl">
          <div className="mx-auto max-w-4xl text-center">
            <h1 className="mb-6 font-extrabold text-5xl leading-[0.95] tracking-tighter lg:text-7xl xl:text-8xl">
              Our Clients and Their Results
            </h1>
            <p className="mx-auto mb-10 max-w-2xl text-muted-foreground leading-relaxed lg:text-lg">
              From Michelin-recognized restaurants to cutting-edge robotics
              companies, we help ambitious businesses win search and capture
              total mind share in their industries.
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

      {/* Customer Logo Grid */}
      <section className="px-6 py-16 lg:py-20">
        <div className="mx-auto max-w-7xl">
          <div className="mb-12 text-center">
            <h2 className="mb-4 font-bold text-4xl leading-[1.1] tracking-tight lg:text-5xl">
              Trusted by the Best
            </h2>
            <p className="mx-auto max-w-2xl text-muted-foreground">
              Companies across diverse industries choose us to power their
              search success strategy.
            </p>
          </div>

          <div className="grid grid-cols-2 gap-6 md:grid-cols-3 lg:grid-cols-5">
            {customers.map((customer) => (
              <Card key={customer.id}>
                <CardContent className="flex items-center justify-center">
                  {customer.logo ? (
                    <Image
                      src={customer.logo}
                      variant="thumbnail"
                      alt={customer.name}
                      width={120}
                      height={48}
                      layout="fixed"
                      className="h-auto w-full max-w-30 object-contain dark:invert"
                    />
                  ) : (
                    <div className="text-center font-bold text-foreground text-sm lg:text-base">
                      {customer.name}
                    </div>
                  )}
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Aggregate Stats Section */}
      <section className="border-border border-y px-6 py-16 lg:py-20">
        <div className="mx-auto max-w-7xl">
          <div className="mb-12 text-center">
            <h2 className="mb-4 font-bold text-4xl leading-[1.1] tracking-tight lg:text-5xl">
              Proven Results Across Industries
            </h2>
            <p className="mx-auto max-w-2xl text-muted-foreground">
              Our clients don't just rank well. They own their categories and
              drive measurable revenue growth.
            </p>
          </div>

          <div className="grid gap-8 lg:grid-cols-3">
            <div className="text-center">
              <HugeiconsIcon
                icon={Building01Icon}
                size={28}
                strokeWidth={1.5}
                className="mx-auto mb-3 text-primary"
              />
              <div className="mb-1 font-extrabold text-4xl tracking-tight lg:text-5xl">
                100+
              </div>
              <div className="text-muted-foreground text-sm">
                Industry-Leading Companies
              </div>
            </div>

            <div className="text-center">
              <HugeiconsIcon
                icon={ChartIncreaseIcon}
                size={28}
                strokeWidth={1.5}
                className="mx-auto mb-3 text-primary"
              />
              <div className="mb-1 font-extrabold text-4xl tracking-tight lg:text-5xl">
                Exponential
              </div>
              <div className="text-muted-foreground text-sm">
                Page 1 Growth Rate
              </div>
            </div>

            <div className="text-center">
              <HugeiconsIcon
                icon={Award01Icon}
                size={28}
                strokeWidth={1.5}
                className="mx-auto mb-3 text-primary"
              />
              <div className="mb-1 font-extrabold text-4xl tracking-tight lg:text-5xl">
                $200M+
              </div>
              <div className="text-muted-foreground text-sm">
                Revenue Generated for Clients
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Testimonials */}
      {testimonialsCustomers.length > 0 && (
        <section className="px-6 py-16 lg:py-20">
          <div className="mx-auto max-w-7xl">
            <div className="mb-12 text-center">
              <h2 className="mb-4 font-bold text-4xl leading-[1.1] tracking-tight lg:text-5xl">
                What Our Clients Say
              </h2>
              <p className="mx-auto max-w-2xl text-muted-foreground">
                Real results from real businesses that trust us to drive their
                growth.
              </p>
            </div>

            <div className="mx-auto grid max-w-4xl justify-center gap-8 lg:grid-cols-2">
              {testimonialsCustomers.map((customer) => (
                <Card key={customer.id}>
                  <CardContent>
                    <p className="mb-6 text-foreground italic leading-relaxed">
                      "{customer.testimonial?.quote}"
                    </p>
                    <div className="flex items-center gap-3">
                      {customer.logo ? (
                        <Image
                          src={customer.logo}
                          variant="thumbnail"
                          alt={customer.name}
                          width={100}
                          height={40}
                          layout="fixed"
                          className="h-10 w-auto object-contain dark:invert"
                        />
                      ) : null}
                      <div>
                        <div className="font-semibold text-foreground">
                          {customer.testimonial?.author}
                        </div>
                        <div className="text-muted-foreground text-sm">
                          {customer.testimonial?.role}
                        </div>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* By Industry Breakdown */}
      <section className="px-6 py-16 lg:py-20">
        <div className="mx-auto max-w-7xl">
          <div className="mb-12 text-center">
            <h2 className="mb-4 font-bold text-4xl leading-[1.1] tracking-tight lg:text-5xl">
              Winning Across Industries
            </h2>
            <p className="mx-auto max-w-2xl text-muted-foreground">
              Deep expertise in diverse verticals means we understand your
              market and know how to win.
            </p>
          </div>

          <div className="grid gap-8 md:grid-cols-2">
            {customerCategories.map((category) => {
              const IconComponent = iconMap[category.icon] || Briefcase01Icon;

              return (
                <Card key={category.id}>
                  <CardHeader>
                    <HugeiconsIcon
                      icon={IconComponent}
                      size={28}
                      strokeWidth={1.5}
                      className="mb-2 text-primary"
                    />
                    <CardTitle>{category.name}</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-muted-foreground leading-relaxed">
                      {category.description}
                    </p>
                  </CardContent>
                </Card>
              );
            })}
          </div>
        </div>
      </section>

      {/* Featured Case Study */}
      {featuredCustomer?.metrics && (
        <section className="border-border border-y bg-background px-6 py-16 lg:py-20">
          <div className="mx-auto max-w-7xl">
            <Card className="overflow-hidden">
              <div className="grid gap-8 lg:grid-cols-2">
                <div className="p-8 lg:p-12">
                  <div className="mb-4 inline-block rounded-full bg-accent px-4 py-1 font-semibold text-primary text-xs uppercase">
                    Featured Success Story
                  </div>
                  <h2 className="mb-4 font-bold text-3xl leading-tight lg:text-4xl xl:text-5xl">
                    {featuredCustomer.name}
                  </h2>
                  <p className="mb-8 text-muted-foreground leading-relaxed">
                    {featuredCustomer.testimonial?.quote}
                  </p>
                  <div className="mb-8 space-y-4">
                    {featuredCustomer.metrics.map((metric) => (
                      <div
                        key={metric.label}
                        className="flex items-center gap-4"
                      >
                        <div className="font-bold text-4xl tracking-tight lg:text-5xl">
                          {metric.value}
                        </div>
                        <div className="text-muted-foreground">
                          {metric.description}
                        </div>
                      </div>
                    ))}
                  </div>
                  {featuredCustomer.caseStudyUrl && (
                    <Button
                      render={<Link to={featuredCustomer.caseStudyUrl} />}
                    >
                      Read Full Case Study
                      <HugeiconsIcon
                        icon={ArrowRight01Icon}
                        size={18}
                        strokeWidth={2}
                        data-icon="inline-end"
                      />
                    </Button>
                  )}
                </div>
                <div className="relative min-h-75 bg-secondary/50 lg:min-h-100">
                  <div className="flex h-full items-center justify-center p-8">
                    <div className="text-center">
                      <HugeiconsIcon
                        icon={UserGroupIcon}
                        size={96}
                        strokeWidth={1}
                        className="mx-auto mb-4 text-primary/30"
                      />
                      <div className="font-bold text-2xl text-foreground/50">
                        Success Story
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </Card>
          </div>
        </section>
      )}

      {/* Final CTA Section */}
      <section className="border-border border-y px-6 py-16 lg:py-20">
        <div className="mx-auto max-w-7xl">
          <div className="mx-auto max-w-3xl text-center">
            <h2 className="mb-4 font-bold text-3xl tracking-tight lg:text-4xl">
              Your Growth Story Starts Here
            </h2>
            <p className="mx-auto mb-8 max-w-xl text-muted-foreground">
              SEO for organic visibility. GEO for AI discovery. PPL for
              immediate leads. Pick one or combine all three. We help you scale
              with the right leads for your business.
            </p>
            <div className="mb-6 flex flex-col items-center justify-center gap-3 sm:flex-row">
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
    </div>
  );
}
