import {
  ArrowRight01Icon,
  CheckmarkCircle02Icon,
} from '@hugeicons/core-free-icons';
import { HugeiconsIcon } from '@hugeicons/react';
import { createFileRoute, Link } from '@tanstack/react-router';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { generateMetaTags } from '@/lib/seo';

export const Route = createFileRoute('/accessibility')({
  component: AccessibilityPage,
  head: () =>
    generateMetaTags({
      title: 'Accessibility Statement',
      description:
        'Our commitment to web accessibility. Learn about our efforts to make our website accessible to all users.',
      url: 'https://op.digital/accessibility',
    }),
});

const ACCESSIBILITY_FEATURES = [
  {
    title: 'Keyboard Navigation',
    description:
      'All interactive elements can be accessed and operated using only a keyboard.',
  },
  {
    title: 'Screen Reader Compatibility',
    description:
      'Our website is designed to work with assistive technologies including screen readers.',
  },
  {
    title: 'Sufficient Color Contrast',
    description:
      'Text and interactive elements meet WCAG color contrast requirements for readability.',
  },
  {
    title: 'Resizable Text',
    description:
      'Content remains functional and readable when text is resized up to 200%.',
  },
  {
    title: 'Alternative Text',
    description:
      'Images include descriptive alternative text for users who cannot see them.',
  },
  {
    title: 'Semantic HTML',
    description:
      'We use proper HTML structure with headings, landmarks, and ARIA labels where appropriate.',
  },
  {
    title: 'Focus Indicators',
    description:
      'Visible focus indicators help keyboard users track their position on the page.',
  },
  {
    title: 'Reduced Motion Support',
    description:
      'Animations respect user preferences for reduced motion when configured in their system.',
  },
];

const COMPLIANCE_STANDARDS = [
  {
    title: 'WCAG 2.2 (Level AA)',
    description:
      'Web Content Accessibility Guidelines provide the foundation for our accessibility efforts.',
  },
  {
    title: 'ADA Compliance',
    description:
      'We strive to meet the Americans with Disabilities Act requirements for digital accessibility.',
  },
  {
    title: 'Section 508',
    description:
      'Our website aims to meet federal accessibility standards for electronic and information technology.',
  },
];

function AccessibilityPage() {
  return (
    <>
      {/* Hero Section */}
      <section className="px-6 py-16 lg:py-20">
        <div className="mx-auto max-w-3xl">
          <h1 className="mb-6 font-extrabold text-5xl leading-[0.95] tracking-tighter lg:mb-8 lg:text-7xl">
            Accessibility Statement
          </h1>
          <p className="text-muted-foreground leading-relaxed lg:text-lg">
            We are committed to ensuring our website is accessible to all users,
            regardless of ability or technology. Accessibility is not a one-time
            effort but an ongoing commitment.
          </p>
        </div>
      </section>

      {/* Our Commitment */}
      <section className="px-6 py-16 lg:py-20">
        <div className="mx-auto max-w-3xl">
          <h2 className="mb-4 font-bold text-4xl leading-[1.1] tracking-tight lg:text-5xl">
            Our Commitment
          </h2>
          <p className="text-muted-foreground leading-relaxed">
            We believe the web should be accessible to everyone. We continually
            work to improve the accessibility of our website, making it easier
            for all visitors to access our content and services. This includes
            people with visual, hearing, motor, and cognitive disabilities.
          </p>
        </div>
      </section>

      {/* Compliance Standards */}
      <section className="px-6 py-16 lg:py-20">
        <div className="mx-auto max-w-3xl">
          <h2 className="mb-4 font-bold text-4xl leading-[1.1] tracking-tight lg:text-5xl">
            Compliance Standards
          </h2>
          <p className="mb-8 text-muted-foreground leading-relaxed">
            We work to meet or exceed the following accessibility standards:
          </p>
          <div className="space-y-4">
            {COMPLIANCE_STANDARDS.map((standard) => (
              <Card key={standard.title}>
                <CardHeader>
                  <CardTitle className="text-lg">{standard.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground text-sm leading-relaxed">
                    {standard.description}
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Accessibility Features */}
      <section className="px-6 py-16 lg:py-20">
        <div className="mx-auto max-w-3xl">
          <h2 className="mb-4 font-bold text-4xl leading-[1.1] tracking-tight lg:text-5xl">
            Accessibility Features
          </h2>
          <p className="mb-8 text-muted-foreground leading-relaxed">
            We have implemented the following accessibility features throughout
            our website:
          </p>
          <div className="space-y-3">
            {ACCESSIBILITY_FEATURES.map((feature) => (
              <div key={feature.title} className="flex gap-3">
                <HugeiconsIcon
                  icon={CheckmarkCircle02Icon}
                  size={20}
                  className="mt-0.5 shrink-0 text-primary"
                />
                <div>
                  <h3 className="font-medium">{feature.title}</h3>
                  <p className="text-muted-foreground text-sm leading-relaxed">
                    {feature.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Continuous Improvement */}
      <section className="px-6 py-16 lg:py-20">
        <div className="mx-auto max-w-3xl">
          <h2 className="mb-4 font-bold text-4xl leading-[1.1] tracking-tight lg:text-5xl">
            Continuous Improvement
          </h2>
          <p className="text-muted-foreground leading-relaxed">
            Accessibility is an ongoing effort. We regularly review our website
            to identify and address accessibility barriers. We test with various
            assistive technologies and work to ensure new content and features
            meet accessibility standards before release.
          </p>
        </div>
      </section>

      {/* Feedback */}
      <section className="px-6 py-16 lg:py-20">
        <div className="mx-auto max-w-3xl">
          <h2 className="mb-4 font-bold text-4xl leading-[1.1] tracking-tight lg:text-5xl">
            Feedback
          </h2>
          <p className="mb-4 text-muted-foreground leading-relaxed">
            We welcome feedback on the accessibility of our website. If you
            encounter any accessibility barriers or have suggestions for
            improvement, please contact us:
          </p>
          <Card>
            <CardContent className="pt-6">
              <p className="text-muted-foreground leading-relaxed">
                Email:{' '}
                <a
                  href="mailto:hello@op.digital"
                  className="text-primary underline underline-offset-4"
                >
                  hello@op.digital
                </a>
              </p>
              <p className="mt-2 text-muted-foreground text-sm leading-relaxed">
                We aim to respond to accessibility feedback within 5 business
                days and will work to resolve any issues as quickly as possible.
              </p>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Last Updated */}
      <section className="px-6 pb-16 lg:pb-20">
        <div className="mx-auto max-w-3xl">
          <p className="text-muted-foreground text-sm">
            Last updated: February 2, 2025
          </p>
        </div>
      </section>

      {/* Final CTA Section */}
      <section className="border-border border-y px-6 py-16 lg:py-20">
        <div className="mx-auto max-w-3xl text-center">
          <h2 className="mb-4 font-bold text-3xl tracking-tight lg:text-4xl">
            Ready to Dominate Your Industry?
          </h2>
          <p className="mx-auto mb-8 max-w-xl text-muted-foreground">
            Learn how we can help you grow with GEO, SEO, and PPL.
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
      </section>
    </>
  );
}
