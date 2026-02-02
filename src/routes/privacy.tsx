import { createFileRoute, Link } from '@tanstack/react-router';
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
    <article className="mx-auto max-w-3xl px-6 py-12 lg:py-16">
      <h1 className="mb-2 font-bold text-3xl tracking-tight lg:text-4xl">
        Privacy Policy
      </h1>
      <p className="mb-8 text-muted-foreground text-sm">
        Last updated: February 2, 2026
      </p>

      <div className="space-y-6 text-muted-foreground leading-relaxed">
        <p>This website does not collect personal information from visitors.</p>

        <h2 className="font-semibold text-foreground text-xl">
          1. Information We Collect
        </h2>
        <p>We do not collect personal data. Specifically:</p>
        <ul className="list-disc space-y-1 pl-5">
          <li>We do not use cookies</li>
          <li>We do not use tracking pixels or web beacons</li>
          <li>We do not embed third-party analytics or advertising scripts</li>
          <li>
            We count page views in aggregate for operational purposes (anonymous
            counts only, no individual tracking)
          </li>
        </ul>

        <h2 className="font-semibold text-foreground text-xl">
          2. Third-Party Services
        </h2>
        <p>
          Our website is served through infrastructure providers that may log
          standard server access information (such as IP addresses) for security
          purposes. We do not access or use this data for tracking.
        </p>
        <p>
          When you schedule a call through our website, Calendly collects
          information you provide (name, email, company) to facilitate the
          booking. Calendly's use of this data is governed by their privacy
          policy at{' '}
          <a
            href="https://calendly.com/privacy"
            target="_blank"
            rel="noopener noreferrer"
            className="text-primary underline underline-offset-4"
          >
            calendly.com/privacy
          </a>
          .
        </p>
        <p>
          We use AccessPro to provide accessibility customization options.
          AccessPro may store your accessibility preferences locally in your
          browser. AccessPro's privacy practices are governed by their privacy
          policy at{' '}
          <a
            href="https://accesspro.ai/privacy"
            target="_blank"
            rel="noopener noreferrer"
            className="text-primary underline underline-offset-4"
          >
            accesspro.ai/privacy
          </a>
          .
        </p>

        <h2 className="font-semibold text-foreground text-xl">
          3. Data Retention
        </h2>
        <p>
          If you contact us through our application form, we retain your contact
          information for as long as necessary to respond to your inquiry and
          maintain our business relationship. You may request deletion of this
          information at any time by contacting us.
        </p>

        <h2 className="font-semibold text-foreground text-xl">
          4. International Visitors
        </h2>
        <p>
          If you are visiting from the European Economic Area (EEA), United
          Kingdom, or other regions with data protection laws, please note that
          we process minimal personal data as described above. For visitors from
          California, we do not sell personal information as defined by the
          California Consumer Privacy Act (CCPA).
        </p>

        <h2 className="font-semibold text-foreground text-xl">
          5. Your Rights
        </h2>
        <p>
          Since we do not collect personal data through website browsing, there
          is no information to request, correct, or delete. If you contact us
          directly (for example, through our application form), you can request
          access to, correction of, or deletion of that information at any time.
        </p>

        <h2 className="font-semibold text-foreground text-xl">
          6. Changes to This Policy
        </h2>
        <p>
          We may update this Privacy Policy from time to time. We will notify
          you of any changes by posting the new Privacy Policy on this page with
          a new "Last updated" date. Your continued use of the Website after any
          changes constitutes your acceptance of the updated policy.
        </p>

        <h2 className="font-semibold text-foreground text-xl">7. Contact</h2>
        <p>
          Questions about this policy:{' '}
          <a
            href="mailto:hello@op.digital"
            className="text-primary underline underline-offset-4"
          >
            hello@op.digital
          </a>
        </p>

        <div className="pt-4">
          <p className="text-sm">
            See also:{' '}
            <Link
              to="/terms"
              className="text-primary underline underline-offset-4"
            >
              Terms of Service
            </Link>{' '}
            and{' '}
            <Link
              to="/accessibility"
              className="text-primary underline underline-offset-4"
            >
              Accessibility Statement
            </Link>
          </p>
        </div>
      </div>
    </article>
  );
}
