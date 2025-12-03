import { createFileRoute, Link } from '@tanstack/react-router';
import {
  ArrowRight,
  Award,
  Briefcase,
  Building2,
  CheckCircle2,
  Factory,
  Laptop,
  TrendingUp,
  Users,
  UtensilsCrossed,
} from 'lucide-react';
import { Button } from '@/components/ui/button';
import {
  customerCategories,
  customers,
  getCustomersByIndustry,
  getCustomersWithTestimonials,
  getFeaturedCustomer,
} from '@/data/customers';
import { getImageUrl } from '@/lib/cloudflare-images';
import { generateMetaTags } from '@/lib/seo';

export const Route = createFileRoute('/customers')({
  component: CustomersPage,
  head: () =>
    generateMetaTags({
      title: 'Our Customers - Industry Leaders Powered by One Percent SEO',
      description:
        'Join industry-leading companies like Grove Bay Hospitality, Afni Careers, Sorting Robotics, and more who trust One Percent SEO to dominate search results and drive real revenue growth.',
      url: 'https://onepercentseo.com/customers',
    }),
});

// Icon mapping for customer categories
const iconMap: Record<string, React.ComponentType<{ className?: string }>> = {
  UtensilsCrossed,
  Laptop,
  Factory,
  Briefcase,
};

function CustomersPage() {
  const featuredCustomer = getFeaturedCustomer();
  const testimonialsCustomers = getCustomersWithTestimonials().slice(0, 3);

  return (
    <div className="flex min-h-screen flex-col">
      {/* Hero Section */}
      <section className="relative overflow-hidden bg-background px-6 py-12 lg:py-16">
        <div className="mx-auto max-w-7xl">
          <div className="mx-auto max-w-4xl text-center">
            <h1 className="mb-6 font-extrabold text-5xl leading-[0.95] tracking-tighter lg:text-7xl xl:text-8xl">
              Industry Leaders Who Trust Us
            </h1>
            <p className="mx-auto mb-8 max-w-2xl text-muted-foreground text-xl leading-relaxed tracking-wide lg:text-2xl">
              From Michelin-recognized restaurants to cutting-edge robotics
              companies, we help ambitious businesses dominate search and
              capture total mind share in their industries.
            </p>
            <div className="flex flex-col items-center justify-center gap-4 sm:flex-row">
              <Button
                asChild
                size="lg"
                className="bg-accent text-accent-foreground hover:bg-accent/90"
              >
                <Link to="/apply">
                  Apply To Work With Us <ArrowRight className="ml-2 h-5 w-5" />
                </Link>
              </Button>
              <Button asChild size="lg" variant="outline">
                <Link to="/case-studies">View Case Studies</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Aggregate Stats Section */}
      <section className="border-border border-y bg-background px-6 py-20">
        <div className="mx-auto max-w-7xl">
          <div className="mb-16 text-center">
            <h2 className="mb-4 font-bold text-4xl leading-[1.1] tracking-tight lg:text-6xl">
              Proven Results Across Industries
            </h2>
            <p className="mx-auto max-w-2xl text-lg text-muted-foreground leading-relaxed tracking-wide">
              Our clients don't just rank well—they dominate their categories
              and drive measurable revenue growth.
            </p>
          </div>

          <div className="grid gap-8 lg:grid-cols-3">
            <div className="text-center">
              <div className="mb-4 inline-flex rounded-full bg-accent/10 p-4">
                <Building2 className="h-8 w-8 text-accent" />
              </div>
              <div className="mb-2 font-extrabold text-5xl text-accent leading-none tracking-tight lg:text-7xl xl:text-8xl">
                10+
              </div>
              <div className="text-muted-foreground tracking-wide">
                Industry-Leading Companies
              </div>
            </div>

            <div className="text-center">
              <div className="mb-4 inline-flex rounded-full bg-accent/10 p-4">
                <TrendingUp className="h-8 w-8 text-accent" />
              </div>
              <div className="mb-2 font-extrabold text-5xl text-accent leading-none tracking-tight lg:text-7xl xl:text-8xl">
                500%
              </div>
              <div className="text-muted-foreground tracking-wide">
                Average Traffic Growth
              </div>
            </div>

            <div className="text-center">
              <div className="mb-4 inline-flex rounded-full bg-accent/10 p-4">
                <Award className="h-8 w-8 text-accent" />
              </div>
              <div className="mb-2 font-extrabold text-4xl text-accent leading-none tracking-tight lg:text-5xl xl:text-6xl">
                Industry
              </div>
              <div className="text-muted-foreground tracking-wide">
                Leading Retention
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Customer Logo Grid */}
      <section className="px-6 py-20 lg:py-32">
        <div className="mx-auto max-w-7xl">
          <div className="mb-16 text-center">
            <h2 className="mb-4 font-bold text-4xl leading-[1.1] tracking-tight lg:text-6xl">
              Trusted by the Best
            </h2>
            <p className="mx-auto max-w-2xl text-lg text-muted-foreground leading-relaxed tracking-wide">
              Companies across diverse industries choose us to power their
              search domination strategy.
            </p>
          </div>

          <div className="grid grid-cols-2 gap-6 md:grid-cols-3 lg:grid-cols-5">
            {customers.map((customer) => (
              <div
                key={customer.id}
                className="group flex items-center justify-center rounded-2xl border border-border bg-card p-6 transition-all hover:border-accent/50 hover:shadow-accent/10 hover:shadow-lg"
              >
                {customer.logo ? (
                  <img
                    src={getImageUrl(customer.logo, 'thumbnail')}
                    alt={customer.name}
                    className="h-auto w-full max-w-[120px] object-contain dark:invert"
                  />
                ) : (
                  <div className="text-center font-bold text-foreground text-sm transition-colors group-hover:text-accent lg:text-base">
                    {customer.name}
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Testimonials */}
      {testimonialsCustomers.length > 0 && (
        <section className="border-border border-y bg-background px-6 py-20 lg:py-32">
          <div className="mx-auto max-w-7xl">
            <div className="mb-16 text-center">
              <h2 className="mb-4 font-bold text-4xl leading-[1.1] tracking-tight lg:text-6xl">
                What Our Clients Say
              </h2>
              <p className="mx-auto max-w-2xl text-lg text-muted-foreground leading-relaxed tracking-wide">
                Real results from real businesses that trust us to drive their
                growth.
              </p>
            </div>

            <div className="grid gap-8 lg:grid-cols-3">
              {testimonialsCustomers.map((customer) => (
                <div
                  key={customer.id}
                  className="rounded-2xl border-2 border-border bg-card p-8 shadow-sm"
                >
                  <div className="mb-6 text-2xl text-accent">"</div>
                  <p className="mb-6 text-foreground leading-relaxed">
                    {customer.testimonial?.quote}
                  </p>
                  <div className="flex items-center gap-3">
                    <div className="flex h-12 w-12 items-center justify-center rounded-full bg-accent/10 font-bold text-accent">
                      {customer.testimonial?.initials}
                    </div>
                    <div>
                      <div className="font-semibold text-foreground">
                        {customer.testimonial?.author}
                      </div>
                      <div className="text-muted-foreground text-sm">
                        {customer.testimonial?.role}
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* By Industry Breakdown */}
      <section className="px-6 py-20 lg:py-32">
        <div className="mx-auto max-w-7xl">
          <div className="mb-16 text-center">
            <h2 className="mb-4 font-bold text-4xl leading-[1.1] tracking-tight lg:text-6xl">
              Dominating Across Industries
            </h2>
            <p className="mx-auto max-w-2xl text-lg text-muted-foreground leading-relaxed tracking-wide">
              Deep expertise in diverse verticals means we understand your
              market and know how to win.
            </p>
          </div>

          <div className="grid gap-8 md:grid-cols-2">
            {customerCategories.map((category) => {
              const Icon = iconMap[category.icon] || Briefcase;
              const categoryCustomers = getCustomersByIndustry(category.id);

              return (
                <div
                  key={category.id}
                  className="rounded-2xl border border-border bg-card p-8"
                >
                  <div className="mb-4 inline-flex rounded-lg bg-accent/10 p-3">
                    <Icon className="size-6 text-accent" />
                  </div>
                  <h3 className="mb-3 font-bold text-2xl lg:text-3xl">
                    {category.name}
                  </h3>
                  <p className="mb-6 text-muted-foreground leading-relaxed tracking-wide">
                    {category.description}
                  </p>
                  {categoryCustomers.length > 0 && (
                    <div className="space-y-2">
                      <div className="mb-3 font-semibold text-foreground text-sm uppercase tracking-wider">
                        Featured Clients:
                      </div>
                      {categoryCustomers.map((customer) => (
                        <div
                          key={customer.id}
                          className="flex items-center gap-2 text-foreground"
                        >
                          <CheckCircle2 className="h-4 w-4 shrink-0 text-accent" />
                          <span>{customer.name}</span>
                        </div>
                      ))}
                    </div>
                  )}
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Featured Case Study */}
      {featuredCustomer?.metrics && (
        <section className="border-border border-y bg-background px-6 py-20 lg:py-32">
          <div className="mx-auto max-w-7xl">
            <div className="overflow-hidden rounded-2xl border-2 border-border bg-card">
              <div className="grid gap-8 lg:grid-cols-2">
                <div className="p-8 lg:p-12">
                  <div className="mb-4 inline-block rounded-full bg-accent/10 px-4 py-1 font-semibold text-accent text-xs uppercase tracking-widest">
                    Featured Success Story
                  </div>
                  <h2 className="mb-4 font-bold text-3xl leading-tight lg:text-4xl xl:text-5xl">
                    {featuredCustomer.name}
                  </h2>
                  <p className="mb-8 text-lg text-muted-foreground leading-relaxed tracking-wide">
                    {featuredCustomer.testimonial?.quote}
                  </p>
                  <div className="mb-8 space-y-4">
                    {featuredCustomer.metrics.map((metric) => (
                      <div
                        key={metric.label}
                        className="flex items-center gap-4"
                      >
                        <div className="font-bold text-3xl text-accent tracking-tight lg:text-4xl">
                          {metric.value}
                        </div>
                        <div className="text-muted-foreground tracking-wide">
                          {metric.description}
                        </div>
                      </div>
                    ))}
                  </div>
                  {featuredCustomer.caseStudyUrl && (
                    <Button
                      asChild
                      className="bg-accent text-accent-foreground hover:bg-accent/90"
                    >
                      <Link to={featuredCustomer.caseStudyUrl}>
                        Read Full Case Study{' '}
                        <ArrowRight className="ml-2 h-4 w-4" />
                      </Link>
                    </Button>
                  )}
                </div>
                <div className="relative min-h-[300px] bg-secondary/50 lg:min-h-[400px]">
                  <div className="flex h-full items-center justify-center p-8">
                    <div className="text-center">
                      <Users className="mx-auto mb-4 h-24 w-24 text-accent/30" />
                      <div className="font-bold text-2xl text-foreground/50">
                        Success Story
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      )}

      {/* Final CTA Section */}
      <section className="px-6 py-20 lg:py-32">
        <div className="mx-auto max-w-7xl">
          <div className="mx-auto max-w-3xl text-center">
            <h2 className="mb-6 font-bold text-4xl leading-[1.1] tracking-tight lg:text-6xl">
              Join These Industry Leaders
            </h2>
            <p className="mb-8 text-lg text-muted-foreground leading-relaxed tracking-wide lg:text-xl">
              Whether you're in hospitality, technology, manufacturing, or
              professional services, we have the expertise to help you dominate
              search and drive revenue growth. Let's talk about your goals.
            </p>
            <div className="flex flex-col items-center justify-center gap-4 sm:flex-row">
              <Button
                asChild
                size="lg"
                className="bg-accent text-accent-foreground hover:bg-accent/90"
              >
                <Link to="/apply">
                  Apply To Work With Us <ArrowRight className="ml-2 h-5 w-5" />
                </Link>
              </Button>
              <Button asChild size="lg" variant="outline">
                <Link to="/case-studies">View All Case Studies</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
