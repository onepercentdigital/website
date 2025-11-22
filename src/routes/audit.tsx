import { createFileRoute } from '@tanstack/react-router';
import {
  ArrowRight,
  BarChart3,
  DollarSign,
  Lightbulb,
  Shield,
  Target,
  TrendingUp,
  Users,
} from 'lucide-react';
import { useEffect } from 'react';
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from '@/components/ui/accordion';
import { generateMetaTags } from '@/lib/seo';

export const Route = createFileRoute('/audit')({
  component: AuditPage,
  head: () =>
    generateMetaTags({
      title: 'Free AI Search Audit | One Percent SEO',
      description:
        "Discover how you're performing in AI search engines like ChatGPT, Perplexity, and Claude. Get a free 30-minute strategy session and custom roadmap.",
      url: 'https://onepercentseo.com/audit',
    }),
});

function AuditPage() {
  return (
    <>
      {/* Hero Section with Calendly Embed */}
      <section className="bg-background px-6 py-12 lg:py-16">
        <div className="mx-auto max-w-7xl">
          <div className="grid items-start gap-12 lg:grid-cols-2">
            {/* Left: Hero Content */}
            <div className="lg:py-12">
              <h1 className="mb-6 font-extrabold text-5xl leading-[0.95] tracking-tighter lg:text-7xl">
                Get Your Free AI Search Audit
              </h1>
              <p className="mb-8 text-muted-foreground text-xl leading-relaxed tracking-wide lg:text-2xl">
                Discover exactly how you're performing in AI search engines like
                ChatGPT, Perplexity, and Claude. Get a personalized 30-minute
                strategy session and actionable roadmap — completely free.
              </p>

              {/* Key Benefits List */}
              <div className="space-y-4">
                <div className="flex items-start gap-3">
                  <div className="mt-1 rounded-lg bg-accent/10 p-2">
                    <Target className="size-5 text-accent" />
                  </div>
                  <div>
                    <h3 className="mb-1 font-semibold text-foreground">
                      AI Search Visibility Analysis
                    </h3>
                    <p className="text-muted-foreground text-sm leading-relaxed">
                      See where you're losing traffic to AI engines
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <div className="mt-1 rounded-lg bg-accent/10 p-2">
                    <TrendingUp className="size-5 text-accent" />
                  </div>
                  <div>
                    <h3 className="mb-1 font-semibold text-foreground">
                      Competitive Intelligence
                    </h3>
                    <p className="text-muted-foreground text-sm leading-relaxed">
                      Learn how competitors rank in AI vs traditional search
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <div className="mt-1 rounded-lg bg-accent/10 p-2">
                    <Lightbulb className="size-5 text-accent" />
                  </div>
                  <div>
                    <h3 className="mb-1 font-semibold text-foreground">
                      Actionable Roadmap
                    </h3>
                    <p className="text-muted-foreground text-sm leading-relaxed">
                      Prioritized strategy for SEO + GEO optimization
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <div className="mt-1 rounded-lg bg-accent/10 p-2">
                    <DollarSign className="size-5 text-accent" />
                  </div>
                  <div>
                    <h3 className="mb-1 font-semibold text-foreground">
                      Revenue Projections
                    </h3>
                    <p className="text-muted-foreground text-sm leading-relaxed">
                      Understand the ROI potential of AI visibility
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <div className="mt-1 rounded-lg bg-accent/10 p-2">
                    <Shield className="size-5 text-accent" />
                  </div>
                  <div>
                    <h3 className="mb-1 font-semibold text-foreground">
                      Zero Risk, Zero Obligation
                    </h3>
                    <p className="text-muted-foreground text-sm leading-relaxed">
                      Completely free with no credit card required
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Right: Calendly Embed */}
            <div className="lg:py-0">
              <div className="sticky top-6">
                <CalendlyEmbed />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* What to Expect Section */}
      <section className="border-border border-y bg-background px-6 py-20 lg:py-32">
        <div className="mx-auto max-w-7xl">
          <div className="mb-12 text-center">
            <h2 className="mb-4 font-bold text-4xl leading-[1.1] tracking-tight lg:text-6xl">
              What to Expect
            </h2>
            <p className="mx-auto max-w-2xl text-lg text-muted-foreground tracking-wide">
              Here's exactly how the process works from booking to
              implementation.
            </p>
          </div>

          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4">
            {/* Step 1 */}
            <div className="text-center">
              <div className="mb-4 flex items-center justify-between">
                <div className="rounded-lg bg-accent/10 p-3">
                  <ArrowRight className="size-6 text-accent" />
                </div>
                <div className="font-bold text-3xl text-accent/30 tracking-tight">
                  01
                </div>
              </div>
              <h3 className="mb-3 font-bold text-2xl">Book Your Call</h3>
              <p className="text-muted-foreground leading-relaxed tracking-wide">
                Choose a convenient time using the scheduler above. Takes less
                than 2 minutes.
              </p>
            </div>

            {/* Step 2 */}
            <div className="text-center">
              <div className="mb-4 flex items-center justify-between">
                <div className="rounded-lg bg-accent/10 p-3">
                  <Target className="size-6 text-accent" />
                </div>
                <div className="font-bold text-3xl text-accent/30 tracking-tight">
                  02
                </div>
              </div>
              <h3 className="mb-3 font-bold text-2xl">We Do the Research</h3>
              <p className="text-muted-foreground leading-relaxed tracking-wide">
                Within 24 hours, we analyze your current search presence across
                Google and AI engines.
              </p>
            </div>

            {/* Step 3 */}
            <div className="text-center">
              <div className="mb-4 flex items-center justify-between">
                <div className="rounded-lg bg-accent/10 p-3">
                  <Users className="size-6 text-accent" />
                </div>
                <div className="font-bold text-3xl text-accent/30 tracking-tight">
                  03
                </div>
              </div>
              <h3 className="mb-3 font-bold text-2xl">Strategy Session</h3>
              <p className="text-muted-foreground leading-relaxed tracking-wide">
                30-minute video call where we walk through findings,
                opportunities, and competitive insights.
              </p>
            </div>

            {/* Step 4 */}
            <div className="text-center">
              <div className="mb-4 flex items-center justify-between">
                <div className="rounded-lg bg-accent/10 p-3">
                  <Lightbulb className="size-6 text-accent" />
                </div>
                <div className="font-bold text-3xl text-accent/30 tracking-tight">
                  04
                </div>
              </div>
              <h3 className="mb-3 font-bold text-2xl">Custom Roadmap</h3>
              <p className="text-muted-foreground leading-relaxed tracking-wide">
                Receive your personalized action plan with prioritized tactics
                you can implement immediately.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Social Proof Section */}
      <section className="border-border border-b bg-background px-6 py-20">
        <div className="mx-auto max-w-7xl">
          <div className="grid gap-8 lg:grid-cols-3">
            <div className="text-center">
              <div className="mb-4 inline-flex rounded-full bg-accent/10 p-4">
                <TrendingUp className="h-8 w-8 text-accent" />
              </div>
              <div className="mb-2 font-extrabold text-5xl leading-none tracking-tight lg:text-7xl">
                95%
              </div>
              <div className="text-muted-foreground tracking-wide">
                Client Retention Rate
              </div>
            </div>

            <div className="text-center">
              <div className="mb-4 inline-flex rounded-full bg-accent/10 p-4">
                <DollarSign className="h-8 w-8 text-accent" />
              </div>
              <div className="mb-2 font-extrabold text-5xl leading-none tracking-tight lg:text-7xl">
                $200M+
              </div>
              <div className="text-muted-foreground tracking-wide">
                Revenue Driven for Clients
              </div>
            </div>

            <div className="text-center">
              <div className="mb-4 inline-flex rounded-full bg-accent/10 p-4">
                <BarChart3 className="h-8 w-8 text-accent" />
              </div>
              <div className="mb-2 font-extrabold text-5xl leading-none tracking-tight lg:text-7xl">
                300%+
              </div>
              <div className="text-muted-foreground tracking-wide">
                Average Organic Growth
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="px-6 py-24">
        <div className="mx-auto max-w-4xl">
          <div className="mb-12 text-center">
            <h2 className="font-bold text-4xl tracking-tight lg:text-6xl">
              Frequently Asked Questions
            </h2>
            <p className="mx-auto mt-4 max-w-2xl text-lg text-muted-foreground tracking-wide">
              Everything you need to know about your free audit
            </p>
          </div>

          <Accordion type="single" collapsible className="w-full">
            <AccordionItem value="item-1">
              <AccordionTrigger className="text-left font-semibold text-lg">
                What happens during the audit?
              </AccordionTrigger>
              <AccordionContent className="text-muted-foreground">
                Before our call, we analyze your current search visibility
                across Google, ChatGPT, Perplexity, Claude, and other AI search
                engines. We research your competitors, identify ranking gaps,
                and assess your content's AI visibility. During our 30-minute
                video consultation, we walk through these findings, explain the
                opportunities we've identified, and answer all your questions.
                After the call, you'll receive a custom roadmap with prioritized
                action items specific to your business.
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="item-2">
              <AccordionTrigger className="text-left font-semibold text-lg">
                Is this really free? What's the catch?
              </AccordionTrigger>
              <AccordionContent className="text-muted-foreground">
                Yes, it's completely free. No credit card required, no hidden
                fees, no obligations. We offer these audits because we're
                confident in the value we provide — most businesses are shocked
                by how much opportunity they're missing in AI search. If you
                decide you want help implementing the strategy, we'd love to
                work together. But there's zero pressure. Many companies use our
                audit to improve their search presence on their own, and we're
                happy to help either way.
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="item-3">
              <AccordionTrigger className="text-left font-semibold text-lg">
                Who should book this audit?
              </AccordionTrigger>
              <AccordionContent className="text-muted-foreground">
                This audit is perfect for businesses that depend on search
                traffic and want to stay ahead of the AI search revolution.
                Ideal candidates include B2B companies, professional services,
                e-commerce brands, multi-location businesses, and anyone who's
                noticed their organic traffic declining or plateauing. If you're
                investing in SEO but not seeing results, or if you're curious
                about AI search but don't know where to start, this audit will
                give you clarity and direction.
              </AccordionContent>
            </AccordionItem>
          </Accordion>
        </div>
      </section>
    </>
  );
}

/**
 * Calendly Embed Component
 * Loads the Calendly widget script and renders the inline booking widget
 * Note: Calendly inline widgets don't support custom background colors,
 * so we use CSS invert filter in dark mode to make the white background dark
 */
function CalendlyEmbed() {
  useEffect(() => {
    // Load Calendly script
    const script = document.createElement('script');
    script.src = 'https://assets.calendly.com/assets/external/widget.js';
    script.async = true;
    document.body.appendChild(script);

    // Cleanup on unmount
    return () => {
      if (document.body.contains(script)) {
        document.body.removeChild(script);
      }
    };
  }, []);

  return (
    <div className="overflow-hidden rounded-2xl border border-border shadow-lg dark:shadow-accent/5 dark:[&_.calendly-inline-widget]:hue-rotate-180 dark:[&_.calendly-inline-widget]:invert">
      <div
        className="calendly-inline-widget"
        data-url="https://calendly.com/onepercentseo/marketing-strategy-session?hide_gdpr_banner=1&text_color=121212&primary_color=00cccc"
        style={{ minWidth: '320px', height: '700px' }}
      />
    </div>
  );
}
