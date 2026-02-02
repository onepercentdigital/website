import { ArrowRight01Icon } from '@hugeicons/core-free-icons';
import { HugeiconsIcon } from '@hugeicons/react';
import { createFileRoute, Link } from '@tanstack/react-router';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { generateMetaTags } from '@/lib/seo';

export const Route = createFileRoute('/privacy')({
  component: PrivacyPage,
  head: () =>
    generateMetaTags({
      title: 'Privacy Policy',
      description:
        'Our privacy policy explains how we respect your privacy. We do not use cookies or collect personal data.',
      url: 'https://op.digital/privacy',
    }),
});

function PrivacyPage() {
  return (
    <>
      {/* Hero Section */}
      <section className="px-6 py-16 lg:py-20">
        <div className="mx-auto max-w-3xl">
          <h1 className="mb-6 font-extrabold text-5xl leading-[0.95] tracking-tighter lg:mb-8 lg:text-7xl">
            Privacy Policy
          </h1>
          <p className="text-muted-foreground leading-relaxed lg:text-lg">
            We believe in transparency and respecting your privacy. This policy
            explains our approach to data collection, which is simple: we
            collect as little as possible.
          </p>
        </div>
      </section>

      {/* Summary Section */}
      <section className="px-6 py-16 lg:py-20">
        <div className="mx-auto max-w-3xl">
          <Card>
            <CardHeader>
              <CardTitle className="text-xl">The Short Version</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-muted-foreground leading-relaxed">
                We respect your privacy. We do not use cookies, we do not
                collect personal information, and we do not track individual
                users. Our website simply serves pages to visitors, and we only
                track aggregate page view counts for operational purposes.
              </p>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* What We Don't Collect */}
      <section className="px-6 py-16 lg:py-20">
        <div className="mx-auto max-w-3xl">
          <h2 className="mb-4 font-bold text-4xl leading-[1.1] tracking-tight lg:text-5xl">
            What We Don't Collect
          </h2>
          <p className="mb-8 text-muted-foreground leading-relaxed">
            We have intentionally designed our website to minimize data
            collection. Here's what we do not collect:
          </p>
          <div className="space-y-4">
            {[
              {
                title: 'No Cookies',
                description:
                  'We do not use cookies of any kind, including analytics, advertising, or session cookies.',
              },
              {
                title: 'No Personal Information',
                description:
                  'We do not collect names, email addresses, phone numbers, or any other personal identifiers through passive tracking.',
              },
              {
                title: 'No Tracking Pixels',
                description:
                  'We do not use tracking pixels, web beacons, or similar technologies to monitor your behavior.',
              },
              {
                title: 'No Third-Party Trackers',
                description:
                  'We do not embed third-party tracking scripts such as Google Analytics, Facebook Pixel, or similar services.',
              },
            ].map((item) => (
              <Card key={item.title}>
                <CardContent className="pt-6">
                  <h3 className="mb-2 font-medium">{item.title}</h3>
                  <p className="text-muted-foreground text-sm leading-relaxed">
                    {item.description}
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* What We Track */}
      <section className="px-6 py-16 lg:py-20">
        <div className="mx-auto max-w-3xl">
          <h2 className="mb-4 font-bold text-4xl leading-[1.1] tracking-tight lg:text-5xl">
            What We Track
          </h2>
          <p className="mb-4 text-muted-foreground leading-relaxed">
            For basic operational purposes, we track anonymous, aggregate
            metrics:
          </p>
          <Card>
            <CardContent className="pt-6">
              <h3 className="mb-2 font-medium">Page View Counts</h3>
              <p className="text-muted-foreground text-sm leading-relaxed">
                We count the number of times pages are served to visitors. This
                data is completely anonymous, contains no personal information,
                and is only used in aggregate to understand which pages are
                visited. We cannot identify individual users or track behavior
                across pages or sessions.
              </p>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Third-Party Services */}
      <section className="px-6 py-16 lg:py-20">
        <div className="mx-auto max-w-3xl">
          <h2 className="mb-4 font-bold text-4xl leading-[1.1] tracking-tight lg:text-5xl">
            Third-Party Services
          </h2>
          <p className="text-muted-foreground leading-relaxed">
            We do not use any third-party services that collect personal data
            from our visitors. Our website is served through infrastructure
            providers that may log standard server access information (such as
            IP addresses) for security and operational purposes, but we do not
            access or use this data for tracking purposes.
          </p>
        </div>
      </section>

      {/* Your Rights */}
      <section className="px-6 py-16 lg:py-20">
        <div className="mx-auto max-w-3xl">
          <h2 className="mb-4 font-bold text-4xl leading-[1.1] tracking-tight lg:text-5xl">
            Your Rights
          </h2>
          <p className="text-muted-foreground leading-relaxed">
            Since we do not collect personal data, there is no personal
            information to request, correct, or delete. You can browse our
            website with confidence that your privacy is respected. If you
            choose to contact us directly (for example, through our application
            form), that information is handled separately and you can request
            its deletion at any time.
          </p>
        </div>
      </section>

      {/* Contact */}
      <section className="px-6 py-16 lg:py-20">
        <div className="mx-auto max-w-3xl">
          <h2 className="mb-4 font-bold text-4xl leading-[1.1] tracking-tight lg:text-5xl">
            Questions?
          </h2>
          <p className="mb-6 text-muted-foreground leading-relaxed">
            If you have any questions about our privacy practices, please
            contact us at{' '}
            <a
              href="mailto:hello@op.digital"
              className="text-primary underline underline-offset-4"
            >
              hello@op.digital
            </a>
            .
          </p>
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
