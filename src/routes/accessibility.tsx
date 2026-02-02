import { createFileRoute, Link } from '@tanstack/react-router';
import { generateMetaTags } from '@/lib/seo';

export const Route = createFileRoute('/accessibility')({
  component: AccessibilityPage,
  head: () =>
    generateMetaTags({
      title: 'Accessibility Statement',
      description:
        'Accessibility information for op.digital. We aim to meet WCAG 2.2 Level AA standards.',
      url: 'https://op.digital/accessibility',
    }),
});

function AccessibilityPage() {
  return (
    <article className="mx-auto max-w-3xl px-6 py-12 lg:py-16">
      <h1 className="mb-2 font-bold text-3xl tracking-tight lg:text-4xl">
        Accessibility Statement
      </h1>
      <p className="mb-8 text-muted-foreground text-sm">
        Last updated: February 2, 2026
      </p>

      <div className="space-y-6 text-muted-foreground leading-relaxed">
        <p>
          This website aims to be accessible to all users, including those using
          assistive technologies.
        </p>

        <h2 className="font-semibold text-foreground text-xl">
          1. Conformance Status
        </h2>
        <p>
          We target WCAG 2.2 Level AA conformance. The website is partially
          conformant with WCAG 2.2 Level AA, meaning some parts of the content
          may not fully conform to the accessibility standard. We are actively
          working toward full compliance.
        </p>

        <h2 className="font-semibold text-foreground text-xl">2. Standards</h2>
        <p>We work to meet the following accessibility standards:</p>
        <ul className="list-disc space-y-1 pl-5">
          <li>Web Content Accessibility Guidelines (WCAG) 2.2 Level AA</li>
          <li>Americans with Disabilities Act (ADA) requirements</li>
          <li>Section 508 of the Rehabilitation Act</li>
        </ul>

        <h2 className="font-semibold text-foreground text-xl">
          3. Accessibility Features
        </h2>
        <p>This website includes the following accessibility features:</p>
        <ul className="list-disc space-y-1 pl-5">
          <li>Keyboard navigation for all interactive elements</li>
          <li>Screen reader compatibility</li>
          <li>Color contrast meeting WCAG requirements</li>
          <li>Text resizable up to 200%</li>
          <li>Alternative text on images</li>
          <li>Semantic HTML with proper heading structure</li>
          <li>Visible focus indicators</li>
          <li>Reduced motion support for users who prefer it</li>
        </ul>

        <h2 className="font-semibold text-foreground text-xl">
          4. Known Limitations
        </h2>
        <p>
          Despite our efforts, some areas of the website may have accessibility
          limitations:
        </p>
        <ul className="list-disc space-y-1 pl-5">
          <li>
            Third-party embedded content (such as our Calendly booking
            integration) may not fully meet accessibility standards. As a
            workaround, you can email us directly to schedule a call.
          </li>
          <li>
            Some older content may not yet have been updated to meet current
            accessibility standards.
          </li>
        </ul>

        <h2 className="font-semibold text-foreground text-xl">
          5. Assessment Methods
        </h2>
        <p>
          We assess the accessibility of this website through the following
          methods:
        </p>
        <ul className="list-disc space-y-1 pl-5">
          <li>Self-evaluation by our development team</li>
          <li>Automated testing using accessibility auditing tools</li>
          <li>Manual testing with keyboard-only navigation</li>
          <li>Screen reader testing</li>
        </ul>

        <h2 className="font-semibold text-foreground text-xl">
          6. Third-Party Content
        </h2>
        <p>
          Our website integrates with Calendly for scheduling consultations. We
          select third-party vendors with accessibility commitments, but we
          cannot guarantee their full compliance with WCAG standards. If you
          have difficulty using any third-party features, please contact us for
          alternative arrangements.
        </p>

        <h2 className="font-semibold text-foreground text-xl">
          7. Updates to This Statement
        </h2>
        <p>
          We review and update this accessibility statement periodically to
          ensure it reflects the current state of our website. The "Last
          updated" date at the top of this page indicates when the statement was
          most recently revised.
        </p>

        <h2 className="font-semibold text-foreground text-xl">8. Feedback</h2>
        <p>
          We welcome your feedback on the accessibility of this website. If you
          encounter accessibility barriers or have suggestions for improvement,
          please contact us at{' '}
          <a
            href="mailto:hello@op.digital"
            className="text-primary underline underline-offset-4"
          >
            hello@op.digital
          </a>
          . We aim to respond to accessibility feedback within 5 business days.
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
              to="/privacy"
              className="text-primary underline underline-offset-4"
            >
              Privacy Policy
            </Link>
          </p>
        </div>
      </div>
    </article>
  );
}
