import {
  ArrowRight01Icon,
  CheckmarkCircle02Icon,
} from '@hugeicons/core-free-icons';
import { HugeiconsIcon } from '@hugeicons/react';
import { Link } from '@tanstack/react-router';
import { SEO } from '@/components/SEO';
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from '@/components/ui/accordion';
import { Button } from '@/components/ui/button';
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from '@/components/ui/card';
import type { IndustrySolution } from '@/data/solutions';
import { getFAQSchema } from '@/lib/seo';
import { type SolutionIconKey, solutionIcons } from '@/lib/solution-icons';

interface SolutionPageTemplateProps {
  solution: IndustrySolution;
}

export function SolutionPageTemplate({ solution }: SolutionPageTemplateProps) {
  // Derive SEO values from solution object
  const seoTitle = `${solution.name} SEO`;
  const seoUrl = `https://op.digital/solutions/${solution.slug}`;

  const serviceSchema = {
    type: 'Service' as const,
    data: {
      name: seoTitle,
      description: solution.description,
      url: seoUrl,
      serviceType: 'Digital Marketing',
      provider: {
        '@type': 'Organization',
        name: 'One Percent Digital',
        url: 'https://op.digital',
      },
      areaServed: 'Worldwide',
    },
  };

  const faqSchema = getFAQSchema(solution.faqs);
  const schemas = faqSchema ? [serviceSchema, faqSchema] : [serviceSchema];

  return (
    <>
      <SEO structuredData={schemas} />

      {/* Hero Section */}
      <section className="px-6 py-16 lg:py-20">
        <div className="mx-auto max-w-7xl">
          <div className="mx-auto max-w-4xl text-center">
            <h1 className="mb-6 font-extrabold text-5xl leading-[0.95] tracking-tighter lg:mb-8 lg:text-7xl xl:text-8xl">
              {solution.heroHeadline}
            </h1>
            <p className="mx-auto mb-8 max-w-2xl text-muted-foreground leading-relaxed lg:text-lg">
              {solution.heroSubheadline}
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

      {/* Industry Challenges Section */}
      <section className="px-6 py-16 lg:py-20">
        <div className="mx-auto max-w-7xl">
          <div className="mb-12 text-center">
            <h2 className="mb-4 font-bold text-4xl leading-[1.1] tracking-tight lg:text-5xl">
              Challenges Facing {solution.name} Businesses
            </h2>
            <p className="mx-auto mt-4 max-w-2xl text-muted-foreground leading-relaxed">
              The {solution.name.toLowerCase()} industry faces unique
              challenges. Here's what we help you overcome.
            </p>
          </div>
          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4">
            {solution.challenges.map((challenge) => {
              const IconComponent =
                solutionIcons[challenge.icon as SolutionIconKey];
              return (
                <Card key={challenge.title}>
                  <CardHeader>
                    {IconComponent && (
                      <HugeiconsIcon
                        icon={IconComponent}
                        size={28}
                        strokeWidth={1.5}
                        className="mb-2 text-primary"
                      />
                    )}
                    <CardTitle>{challenge.title}</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <CardDescription className="leading-relaxed">
                      {challenge.description}
                    </CardDescription>
                  </CardContent>
                </Card>
              );
            })}
          </div>
        </div>
      </section>

      {/* Our Approach Section */}
      <section className="px-6 py-16 lg:py-20">
        <div className="mx-auto max-w-7xl">
          <div className="mb-12 text-center">
            <h2 className="mb-4 font-bold text-4xl leading-[1.1] tracking-tight lg:text-5xl">
              Our Proven 4-Step Approach
            </h2>
            <p className="mx-auto mt-4 max-w-2xl text-muted-foreground leading-relaxed">
              A systematic process designed specifically for{' '}
              {solution.name.toLowerCase()} businesses to drive results.
            </p>
          </div>
          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4">
            {solution.approach.map((step, index) => {
              const IconComponent = solutionIcons[step.icon as SolutionIconKey];
              return (
                <Card key={step.title}>
                  <CardHeader>
                    <div className="mb-2 flex items-start justify-between">
                      <div className="font-bold text-4xl text-primary">
                        0{index + 1}
                      </div>
                      {IconComponent && (
                        <HugeiconsIcon
                          icon={IconComponent}
                          size={28}
                          strokeWidth={1.5}
                          className="text-muted-foreground"
                        />
                      )}
                    </div>
                    <CardTitle>{step.title}</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <CardDescription className="leading-relaxed">
                      {step.description}
                    </CardDescription>
                  </CardContent>
                </Card>
              );
            })}
          </div>
        </div>
      </section>

      {/* Services We Provide Section */}
      <section className="px-6 py-16 lg:py-20">
        <div className="mx-auto max-w-7xl">
          <div className="mb-12 text-center">
            <h2 className="mb-4 font-bold text-4xl leading-[1.1] tracking-tight lg:text-5xl">
              Services We Provide
            </h2>
            <p className="mx-auto mt-4 max-w-2xl text-muted-foreground leading-relaxed">
              Comprehensive GEO, SEO, and PPL solutions tailored for{' '}
              {solution.name.toLowerCase()} businesses.
            </p>
          </div>
          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
            {solution.services.map((service) => (
              <Card key={service.title}>
                <CardHeader>
                  <CardTitle>{service.title}</CardTitle>
                  <CardDescription className="leading-relaxed">
                    {service.description}
                  </CardDescription>
                </CardHeader>
                <CardContent>
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
                        <span>{feature}</span>
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="px-6 py-16 lg:py-20">
        <div className="mx-auto max-w-4xl">
          <div className="mb-12 text-center">
            <h2 className="mb-4 font-bold text-4xl leading-[1.1] tracking-tight lg:text-5xl">
              Frequently Asked Questions
            </h2>
          </div>
          <Accordion className="w-full">
            {solution.faqs.map((faq, index) => (
              <AccordionItem key={faq.question} value={`item-${index}`}>
                <AccordionTrigger className="text-left font-semibold text-lg">
                  {faq.question}
                </AccordionTrigger>
                <AccordionContent className="text-muted-foreground leading-relaxed">
                  {faq.answer}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </section>

      {/* Final CTA Section */}
      <section className="border-border border-y px-6 py-16 lg:py-20">
        <div className="mx-auto max-w-3xl text-center">
          <h2 className="mb-4 font-bold text-3xl tracking-tight lg:text-4xl">
            {solution.ctaHeadline}
          </h2>
          <p className="mx-auto mb-8 max-w-xl text-muted-foreground">
            {solution.ctaDescription}
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
      </section>
    </>
  );
}
