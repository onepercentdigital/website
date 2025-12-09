import { createFileRoute, Link } from '@tanstack/react-router';
import {
  ArrowRight,
  Award,
  CheckCircle2,
  DollarSign,
  Fingerprint,
  Map as MapIcon,
  MapPin,
  Settings,
  TrendingUp,
  Truck,
} from 'lucide-react';
import { SEO } from '@/components/SEO';
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from '@/components/ui/accordion';
import { Button } from '@/components/ui/button';
import { getSolutionBySlug } from '@/data/solutions';
import { generateMetaTags } from '@/lib/seo';

export const Route = createFileRoute('/solutions/logistics')({
  component: LogisticsPage,
  head: () =>
    generateMetaTags({
      title: 'Logistics & Transportation SEO | Generate Shipping Leads',
      description:
        'Generate qualified shipping and logistics leads through search. Capture industry keywords and reach shippers searching for reliable partners.',
      url: 'https://onepercentseo.com/solutions/logistics',
    }),
});

function LogisticsPage() {
  const solution = getSolutionBySlug('logistics');

  if (!solution) {
    return <div>Solution not found</div>;
  }

  const serviceSchema = {
    type: 'Service' as const,
    data: {
      name: 'Logistics & Transportation SEO',
      description: solution.description,
      url: 'https://onepercentseo.com/solutions/logistics',
      serviceType: 'Search Engine Optimization',
      provider: {
        '@type': 'Organization',
        name: 'One Percent SEO',
        url: 'https://onepercentseo.com',
      },
      areaServed: 'Worldwide',
    },
  };

  const iconMap: Record<string, React.ComponentType<{ className?: string }>> = {
    Truck,
    Fingerprint,
    Map: MapIcon,
    DollarSign,
    MapPin,
    Settings,
    Award,
    TrendingUp,
  };

  return (
    <div className="overflow-hidden">
      <SEO structuredData={[serviceSchema]} />

      {/* Hero Section */}
      <section className="relative overflow-hidden bg-background px-6 py-12 lg:py-16">
        <div className="mx-auto max-w-7xl">
          <div className="mx-auto max-w-4xl text-center">
            <h1 className="mb-6 font-extrabold text-5xl leading-[0.95] tracking-tighter lg:text-7xl xl:text-8xl">
              {solution.heroHeadline}
            </h1>
            <p className="mx-auto mb-8 max-w-2xl text-muted-foreground text-xl leading-relaxed tracking-wide lg:text-2xl">
              {solution.heroSubheadline}
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

      {/* Industry Challenges Section */}
      <section className="px-6 py-20 lg:py-32">
        <div className="mx-auto max-w-7xl">
          <div className="mb-16 text-center">
            <h2 className="font-bold text-4xl tracking-tight lg:text-6xl">
              Challenges Facing Logistics Businesses
            </h2>
            <p className="mx-auto mt-6 max-w-2xl text-lg text-muted-foreground leading-relaxed tracking-wide">
              Logistics and transportation companies face unique digital
              challenges. Here's what we help you overcome.
            </p>
          </div>
          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4">
            {solution.challenges.map((challenge, _index) => {
              const Icon = iconMap[challenge.icon];
              return (
                <div
                  key={challenge.title}
                  className="flex flex-col rounded-2xl border border-border bg-card p-6 transition-all hover:border-accent/50 hover:shadow-lg"
                >
                  <div className="mb-4 inline-flex h-12 w-12 items-center justify-center rounded-xl bg-accent/10 p-3">
                    <Icon className="h-6 w-6 text-accent" />
                  </div>
                  <h3 className="mb-3 font-bold text-xl leading-tight">
                    {challenge.title}
                  </h3>
                  <p className="text-muted-foreground text-sm leading-relaxed tracking-wide">
                    {challenge.description}
                  </p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Our Approach Section */}
      <section className="px-6 py-20 lg:py-32">
        <div className="mx-auto max-w-7xl">
          <div className="mb-16 text-center">
            <h2 className="font-bold text-4xl tracking-tight lg:text-6xl">
              Our Proven 4-Step Approach
            </h2>
            <p className="mx-auto mt-6 max-w-2xl text-lg text-muted-foreground leading-relaxed tracking-wide">
              A systematic process designed specifically for logistics and
              transportation companies to generate shipping leads.
            </p>
          </div>
          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4">
            {solution.approach.map((step, index) => {
              const Icon = iconMap[step.icon];
              return (
                <div key={step.title} className="relative">
                  <div className="flex flex-col rounded-2xl border border-border bg-card p-6">
                    <div className="mb-4 inline-flex h-12 w-12 items-center justify-center rounded-xl bg-accent/10 p-3">
                      <Icon className="h-6 w-6 text-accent" />
                    </div>
                    <div className="mb-2 font-semibold text-accent text-sm uppercase tracking-widest">
                      Step {index + 1}
                    </div>
                    <h3 className="mb-3 font-bold text-2xl leading-tight">
                      {step.title}
                    </h3>
                    <p className="text-muted-foreground text-sm leading-relaxed tracking-wide">
                      {step.description}
                    </p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Services We Provide Section */}
      <section className="px-6 py-20 lg:py-32">
        <div className="mx-auto max-w-7xl">
          <div className="mb-16 text-center">
            <h2 className="font-bold text-4xl tracking-tight lg:text-6xl">
              Services We Provide
            </h2>
            <p className="mx-auto mt-6 max-w-2xl text-lg text-muted-foreground leading-relaxed tracking-wide">
              Comprehensive SEO, GEO, and Performance Marketing solutions
              tailored for logistics and transportation companies.
            </p>
          </div>
          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
            {solution.services.map((service, _index) => (
              <div
                key={service.title}
                className="flex flex-col rounded-2xl border border-border bg-card p-6 transition-all hover:border-accent/50 hover:shadow-lg"
              >
                <h3 className="mb-3 font-bold text-xl leading-tight">
                  {service.title}
                </h3>
                <p className="mb-4 text-muted-foreground text-sm leading-relaxed tracking-wide">
                  {service.description}
                </p>
                <ul className="space-y-2">
                  {service.features.map((feature) => (
                    <li
                      key={feature}
                      className="flex items-start gap-2 text-muted-foreground text-sm"
                    >
                      <CheckCircle2 className="mt-0.5 h-4 w-4 shrink-0 text-accent" />
                      <span className="tracking-wide">{feature}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="px-6 py-20 lg:py-32">
        <div className="mx-auto max-w-4xl">
          <div className="mb-12 text-center">
            <h2 className="font-bold text-4xl tracking-tight lg:text-6xl">
              Frequently Asked Questions
            </h2>
          </div>
          <Accordion type="single" collapsible className="w-full">
            {solution.faqs.map((faq, index) => (
              <AccordionItem key={faq.question} value={`item-${index}`}>
                <AccordionTrigger className="text-left font-semibold text-lg">
                  {faq.question}
                </AccordionTrigger>
                <AccordionContent className="text-muted-foreground leading-relaxed tracking-wide">
                  {faq.answer}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </section>

      {/* Final CTA Section */}
      <section className="px-6 py-20 lg:py-32">
        <div className="mx-auto max-w-4xl text-center">
          <h2 className="mb-6 font-bold text-4xl leading-tight tracking-tight lg:text-5xl">
            Ready to Capture Logistics Search?
          </h2>
          <p className="mx-auto mb-8 max-w-2xl text-lg text-muted-foreground leading-relaxed tracking-wide">
            Let's generate qualified shipping leads and grow your logistics
            business with proven SEO, GEO, and Performance Marketing strategies.
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
              <Link to="/case-studies">View Our Results</Link>
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
}
