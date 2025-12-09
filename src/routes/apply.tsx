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

export const Route = createFileRoute('/apply')({
  component: ApplyPage,
  head: () =>
    generateMetaTags({
      title: 'Apply To Work With Us | One Percent SEO',
      description:
        'Apply to see if you qualify to work with us. We help serious brands grow through SEO, GEO, and Performance Marketing.',
      url: 'https://onepercentseo.com/apply',
    }),
});

function ApplyPage() {
  return (
    <>
      {/* Hero Section with Calendly Embed */}
      <section className="bg-background px-6 py-12 lg:py-16">
        <div className="mx-auto max-w-7xl">
          <div className="grid items-start gap-12 lg:grid-cols-2">
            {/* Left: Hero Content */}
            <div className="lg:py-12">
              <h1 className="mb-6 font-extrabold text-5xl leading-[0.95] tracking-tighter lg:text-7xl">
                Apply To Work With Us
              </h1>
              <p className="mb-8 text-muted-foreground text-xl leading-relaxed tracking-wide lg:text-2xl">
                We partner with serious brands ready to grow through SEO, GEO,
                and Performance Marketing. Apply to see if you qualify—we'll
                evaluate your business and determine if we're the right fit.
              </p>

              {/* Key Benefits List */}
              <div className="space-y-4">
                <div className="flex items-start gap-3">
                  <div className="mt-1 rounded-lg bg-accent/10 p-2">
                    <Target className="size-5 text-accent" />
                  </div>
                  <div>
                    <h3 className="mb-1 font-semibold text-foreground">
                      Strategic Assessment
                    </h3>
                    <p className="text-muted-foreground text-sm leading-relaxed">
                      We'll evaluate your current search presence and growth
                      potential
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <div className="mt-1 rounded-lg bg-accent/10 p-2">
                    <TrendingUp className="size-5 text-accent" />
                  </div>
                  <div>
                    <h3 className="mb-1 font-semibold text-foreground">
                      Competitive Analysis
                    </h3>
                    <p className="text-muted-foreground text-sm leading-relaxed">
                      Understand where you stand against competitors in AI and
                      traditional search
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <div className="mt-1 rounded-lg bg-accent/10 p-2">
                    <Lightbulb className="size-5 text-accent" />
                  </div>
                  <div>
                    <h3 className="mb-1 font-semibold text-foreground">
                      Growth Strategy Discussion
                    </h3>
                    <p className="text-muted-foreground text-sm leading-relaxed">
                      Explore how SEO, GEO, and pay-per-lead campaigns can
                      accelerate your growth
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <div className="mt-1 rounded-lg bg-accent/10 p-2">
                    <DollarSign className="size-5 text-accent" />
                  </div>
                  <div>
                    <h3 className="mb-1 font-semibold text-foreground">
                      Custom Recommendations
                    </h3>
                    <p className="text-muted-foreground text-sm leading-relaxed">
                      Receive tailored insights specific to your industry and
                      goals
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <div className="mt-1 rounded-lg bg-accent/10 p-2">
                    <Shield className="size-5 text-accent" />
                  </div>
                  <div>
                    <h3 className="mb-1 font-semibold text-foreground">
                      Selective Partnership
                    </h3>
                    <p className="text-muted-foreground text-sm leading-relaxed">
                      We only work with brands we can genuinely help succeed
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
              Here's how our consultation process works.
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
              <h3 className="mb-3 font-bold text-2xl">Schedule a Call</h3>
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
              <h3 className="mb-3 font-bold text-2xl">We Do Our Homework</h3>
              <p className="text-muted-foreground leading-relaxed tracking-wide">
                Before our call, we research your business, industry, and
                current search presence.
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
              <h3 className="mb-3 font-bold text-2xl">Qualification Call</h3>
              <p className="text-muted-foreground leading-relaxed tracking-wide">
                A 30-minute video call to discuss your goals and determine if
                we're the right fit.
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
              <h3 className="mb-3 font-bold text-2xl">Next Steps</h3>
              <p className="text-muted-foreground leading-relaxed tracking-wide">
                If we're a good fit, we'll outline a custom strategy and
                partnership proposal.
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
                300+
              </div>
              <div className="text-muted-foreground tracking-wide">
                Businesses Served Since 2012
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
              Common questions about working with us
            </p>
          </div>

          <Accordion type="single" collapsible className="w-full">
            <AccordionItem value="item-1">
              <AccordionTrigger className="text-left font-semibold text-lg">
                What happens during the qualification call?
              </AccordionTrigger>
              <AccordionContent className="text-muted-foreground">
                Before our call, we research your business and current search
                presence. During our 30-minute video call, we discuss your
                goals, challenges, and growth opportunities. We'll share
                insights about your competitive landscape and determine if our
                SEO, GEO, or Performance Marketing services are a fit. If you
                qualify, we'll outline next steps for a partnership.
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="item-2">
              <AccordionTrigger className="text-left font-semibold text-lg">
                Who is a good fit for your services?
              </AccordionTrigger>
              <AccordionContent className="text-muted-foreground">
                We work with serious brands ready to invest in long-term growth
                through search. Ideal clients include established businesses
                with proven products or services, companies with realistic
                expectations about SEO timelines, and organizations committed to
                building sustainable competitive advantages. We're selective
                about partnerships because we're invested in delivering real
                results.
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="item-3">
              <AccordionTrigger className="text-left font-semibold text-lg">
                What industries do you work with?
              </AccordionTrigger>
              <AccordionContent className="text-muted-foreground">
                Since 2012, we've helped over 300 businesses across North
                America in diverse industries — from hospitality and E-commerce
                to manufacturing and professional services. We're frequently
                approached by multinational companies, digital marketing
                agencies, and other SEO agencies for consulting. Our strategies
                adapt to your specific market and competitive landscape.
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
