import {
  ArrowRight01Icon,
  CheckmarkCircle02Icon,
  CloudIcon,
  Search01Icon,
  Settings01Icon,
  Shield01Icon,
  StarIcon,
  Target01Icon,
  Tick02Icon,
  UserGroupIcon,
} from '@hugeicons/core-free-icons';

import { HugeiconsIcon } from '@hugeicons/react';
import { createFileRoute, Link } from '@tanstack/react-router';
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

export const Route = createFileRoute('/solutions/construction')({
  component: ConstructionPage,
  head: () =>
    generateMetaTags({
      title: 'Construction & Contractors SEO | Generate Project Leads',
      description:
        'Generate qualified project leads for construction and contracting businesses. Win local searches and reach property owners who need you.',
      url: 'https://op.digital/solutions/construction',
    }),
});

function ConstructionPage() {
  const solution = getSolutionBySlug('construction');

  if (!solution) {
    return <div>Solution not found</div>;
  }

  const serviceSchema = {
    type: 'Service' as const,
    data: {
      name: 'Construction & Contractors SEO',
      description: solution.description,
      url: 'https://op.digital/solutions/construction',
      serviceType: 'Search Engine Optimization',
      provider: {
        '@type': 'Organization',
        name: 'One Percent Digital',
        url: 'https://op.digital',
      },
      areaServed: 'Worldwide',
    },
  };

  const iconMap: Record<string, typeof UserGroupIcon> = {
    Users: UserGroupIcon,
    Target: Target01Icon,
    CloudRain: CloudIcon,
    Star: StarIcon,
    Search: Search01Icon,
    Settings: Settings01Icon,
    Shield: Shield01Icon,
    CheckCircle: Tick02Icon,
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

      {/* Industry Challenges Section */}
      <section className="px-6 py-20 lg:py-32">
        <div className="mx-auto max-w-7xl">
          <div className="mb-16 text-center">
            <h2 className="font-bold text-4xl tracking-tight lg:text-6xl">
              Challenges Facing Construction Businesses
            </h2>
            <p className="mx-auto mt-6 max-w-2xl text-lg text-muted-foreground leading-relaxed tracking-wide">
              Construction and contracting businesses face unique challenges.
              Here's what we help you overcome.
            </p>
          </div>
          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4">
            {solution.challenges.map((challenge, _index) => {
              const icon = iconMap[challenge.icon];
              return (
                <div
                  key={challenge.title}
                  className="flex flex-col rounded-2xl bg-card p-6 ring-1 ring-foreground/10 transition-all hover:shadow-lg hover:shadow-primary/10 hover:ring-primary/50"
                >
                  <HugeiconsIcon
                    icon={icon}
                    size={32}
                    strokeWidth={1.5}
                    className="mb-4 text-primary"
                  />
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
              A systematic process designed specifically for construction
              businesses to generate project leads.
            </p>
          </div>
          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4">
            {solution.approach.map((step, index) => {
              const icon = iconMap[step.icon];
              return (
                <div key={step.title} className="relative">
                  <div className="flex flex-col rounded-2xl bg-card p-6 ring-1 ring-foreground/10">
                    <div className="mb-4 flex items-start justify-between">
                      <div className="font-bold text-4xl text-primary">
                        0{index + 1}
                      </div>
                      <HugeiconsIcon
                        icon={icon}
                        size={24}
                        strokeWidth={1.5}
                        className="text-muted-foreground"
                      />
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
              Comprehensive GEO, SEO, and PPL solutions tailored for
              construction and contracting businesses.
            </p>
          </div>
          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
            {solution.services.map((service, _index) => (
              <div
                key={service.title}
                className="flex flex-col rounded-2xl bg-card p-6 ring-1 ring-foreground/10 transition-all hover:shadow-lg hover:shadow-primary/10 hover:ring-primary/50"
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
                      <HugeiconsIcon
                        icon={CheckmarkCircle02Icon}
                        size={16}
                        strokeWidth={1.5}
                        className="mt-0.5 shrink-0 text-primary"
                      />
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
          <Accordion className="w-full">
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
            Book More Projects
          </h2>
          <p className="mx-auto mb-8 max-w-2xl text-lg text-muted-foreground leading-relaxed tracking-wide">
            Let's generate qualified project leads and grow your construction
            business with proven GEO, SEO, and PPL strategies.
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
              View Our Results
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
}
