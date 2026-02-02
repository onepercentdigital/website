import { createFileRoute, Link } from '@tanstack/react-router';
import { generateMetaTags } from '@/lib/seo';

export const Route = createFileRoute('/terms')({
  component: TermsPage,
  head: () =>
    generateMetaTags({
      title: 'Terms of Service',
      description:
        'Terms and conditions for using op.digital. Read our terms of service before using our website.',
      url: 'https://op.digital/terms',
    }),
});

function TermsPage() {
  return (
    <article className="mx-auto max-w-3xl px-6 py-12 lg:py-16">
      <h1 className="mb-2 font-bold text-3xl tracking-tight lg:text-4xl">
        Terms of Service
      </h1>
      <p className="mb-8 text-muted-foreground text-sm">
        Last updated: February 2, 2026
      </p>

      <div className="space-y-6 text-muted-foreground leading-relaxed">
        <p>
          Please read these Terms of Service carefully before using op.digital
          (the "Website") operated by One Percent Digital ("we," "us," or
          "our").
        </p>

        <h2 className="font-semibold text-foreground text-xl">
          1. Acceptance of Terms
        </h2>
        <p>
          By accessing or using this Website, you agree to be bound by these
          Terms of Service and all applicable laws and regulations. If you do
          not agree with any of these terms, you are prohibited from using or
          accessing this Website.
        </p>

        <h2 className="font-semibold text-foreground text-xl">
          2. Use of Website
        </h2>
        <p>
          You may use this Website only for lawful purposes and in accordance
          with these Terms. You agree not to:
        </p>
        <ul className="list-disc space-y-1 pl-5">
          <li>
            Use the Website in any way that violates any applicable federal,
            state, local, or international law or regulation
          </li>
          <li>
            Attempt to interfere with, compromise the system integrity or
            security of, or decipher any transmissions to or from the servers
            running the Website
          </li>
          <li>
            Use any robot, spider, or other automatic device to access the
            Website for any purpose without our express written permission
          </li>
          <li>
            Introduce any viruses, trojan horses, worms, or other material that
            is malicious or technologically harmful
          </li>
        </ul>

        <h2 className="font-semibold text-foreground text-xl">
          3. Intellectual Property
        </h2>
        <p>
          The Website and its original content, features, and functionality are
          owned by One Percent Digital and are protected by international
          copyright, trademark, patent, trade secret, and other intellectual
          property laws. You may not reproduce, distribute, modify, create
          derivative works of, publicly display, or otherwise use any content
          from this Website without our prior written consent.
        </p>

        <h2 className="font-semibold text-foreground text-xl">
          4. Disclaimer of Warranties
        </h2>
        <p>
          This Website and its content are provided "as is" and "as available"
          without warranty of any kind, express or implied, including but not
          limited to the warranties of merchantability, fitness for a particular
          purpose, and non-infringement. We do not warrant that the Website will
          be uninterrupted, secure, or error-free, that defects will be
          corrected, or that the Website is free of viruses or other harmful
          components.
        </p>

        <h2 className="font-semibold text-foreground text-xl">
          5. Limitation of Liability
        </h2>
        <p>
          In no event shall One Percent Digital, its directors, employees,
          partners, agents, suppliers, or affiliates be liable for any indirect,
          incidental, special, consequential, or punitive damages, including
          without limitation, loss of profits, data, use, goodwill, or other
          intangible losses, resulting from:
        </p>
        <ul className="list-disc space-y-1 pl-5">
          <li>
            Your access to or use of or inability to access or use the Website
          </li>
          <li>Any conduct or content of any third party on the Website</li>
          <li>Any content obtained from the Website</li>
          <li>
            Unauthorized access, use, or alteration of your transmissions or
            content
          </li>
        </ul>

        <h2 className="font-semibold text-foreground text-xl">
          6. Indemnification
        </h2>
        <p>
          You agree to defend, indemnify, and hold harmless One Percent Digital
          and its licensees, licensors, employees, contractors, agents,
          officers, and directors from and against any claims, damages,
          obligations, losses, liabilities, costs, or debt arising from your use
          of and access to the Website.
        </p>

        <h2 className="font-semibold text-foreground text-xl">
          7. Third-Party Links
        </h2>
        <p>
          This Website may contain links to third-party websites or services
          that are not owned or controlled by One Percent Digital. We have no
          control over, and assume no responsibility for, the content, privacy
          policies, or practices of any third-party websites or services. You
          acknowledge and agree that One Percent Digital shall not be
          responsible or liable for any damage or loss caused by your use of any
          such third-party websites or services.
        </p>

        <h2 className="font-semibold text-foreground text-xl">
          8. Governing Law
        </h2>
        <p>
          These Terms shall be governed and construed in accordance with the
          laws of the State of Arizona, United States, without regard to its
          conflict of law provisions. Any legal action or proceeding arising out
          of or relating to these Terms or your use of the Website shall be
          brought exclusively in the state or federal courts located in Arizona.
        </p>

        <h2 className="font-semibold text-foreground text-xl">
          9. Dispute Resolution
        </h2>
        <p>
          Any dispute arising from these Terms or your use of the Website shall
          first be attempted to be resolved through good-faith negotiation. If
          the dispute cannot be resolved through negotiation within thirty (30)
          days, either party may pursue legal remedies in accordance with the
          Governing Law section above.
        </p>

        <h2 className="font-semibold text-foreground text-xl">
          10. Modifications
        </h2>
        <p>
          We reserve the right to modify or replace these Terms at any time. If
          a revision is material, we will provide at least 30 days' notice prior
          to any new terms taking effect by posting the updated Terms on this
          page with a new "Last updated" date. Your continued use of the Website
          after any such changes constitutes your acceptance of the new Terms.
        </p>

        <h2 className="font-semibold text-foreground text-xl">
          11. Severability
        </h2>
        <p>
          If any provision of these Terms is held to be invalid or unenforceable
          by a court, the remaining provisions of these Terms will remain in
          effect.
        </p>

        <h2 className="font-semibold text-foreground text-xl">12. Contact</h2>
        <p>
          Questions about these Terms:{' '}
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
              to="/privacy"
              className="text-primary underline underline-offset-4"
            >
              Privacy Policy
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
