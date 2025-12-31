import {
  ArrowRight01Icon,
  ChartIncreaseIcon,
  ChartLineData01Icon,
  DollarCircleIcon,
  Idea01Icon,
  Shield01Icon,
  Target01Icon,
  UserGroupIcon,
} from '@hugeicons/core-free-icons';
import { HugeiconsIcon } from '@hugeicons/react';
import { createFileRoute } from '@tanstack/react-router';
import { useEffect } from 'react';
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from '@/components/ui/accordion';
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from '@/components/ui/card';
import { generateMetaTags } from '@/lib/seo';

export const Route = createFileRoute('/apply')({
  component: ApplyPage,
  head: () =>
    generateMetaTags({
      title: 'Apply To Work With Us | One Percent Digital',
      description:
        'Apply to see if you qualify to work with us. We help serious brands grow through GEO, SEO, and PPL.',
      url: 'https://op.digital/apply',
    }),
});

function ApplyPage() {
  return (
    <>
      {/* Hero Section with Calendly Embed */}
      <section className="bg-background px-6 py-16 lg:py-20">
        <div className="mx-auto max-w-7xl">
          <div className="grid items-start gap-12 lg:grid-cols-2">
            {/* Left: Hero Content */}
            <div className="lg:py-12">
              <h1 className="mb-6 font-extrabold text-5xl leading-[0.95] tracking-tighter lg:text-7xl">
                Apply To Work With Us
              </h1>
              <p className="mb-10 text-muted-foreground leading-relaxed lg:text-lg">
                We partner with serious brands ready to grow through GEO, SEO,
                and PPL. Apply to see if you qualify. We'll evaluate your
                business and determine if we're the right fit.
              </p>

              {/* Key Benefits List */}
              <div className="space-y-4">
                <div className="flex items-start gap-3">
                  <HugeiconsIcon
                    icon={Target01Icon}
                    size={28}
                    strokeWidth={1.5}
                    className="mt-0.5 shrink-0 text-primary"
                  />
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
                  <HugeiconsIcon
                    icon={ChartIncreaseIcon}
                    size={28}
                    strokeWidth={1.5}
                    className="mt-0.5 shrink-0 text-primary"
                  />
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
                  <HugeiconsIcon
                    icon={Idea01Icon}
                    size={28}
                    strokeWidth={1.5}
                    className="mt-0.5 shrink-0 text-primary"
                  />
                  <div>
                    <h3 className="mb-1 font-semibold text-foreground">
                      Growth Strategy Discussion
                    </h3>
                    <p className="text-muted-foreground text-sm leading-relaxed">
                      Explore how GEO, SEO, and PPL campaigns can accelerate
                      your growth
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <HugeiconsIcon
                    icon={DollarCircleIcon}
                    size={28}
                    strokeWidth={1.5}
                    className="mt-0.5 shrink-0 text-primary"
                  />
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
                  <HugeiconsIcon
                    icon={Shield01Icon}
                    size={28}
                    strokeWidth={1.5}
                    className="mt-0.5 shrink-0 text-primary"
                  />
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
      <section className="bg-background px-6 py-16 lg:py-20">
        <div className="mx-auto max-w-7xl">
          <div className="mb-12 text-center">
            <h2 className="mb-4 font-bold text-4xl leading-[1.1] tracking-tight lg:text-5xl">
              What to Expect
            </h2>
            <p className="mx-auto max-w-2xl text-muted-foreground">
              Here's how our consultation process works.
            </p>
          </div>

          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4">
            {/* Step 1 */}
            <Card>
              <CardHeader>
                <div className="mb-2 flex items-start justify-between">
                  <div className="font-bold text-4xl text-primary">01</div>
                  <HugeiconsIcon
                    icon={ArrowRight01Icon}
                    size={28}
                    strokeWidth={1.5}
                    className="text-muted-foreground"
                  />
                </div>
                <CardTitle className="text-xl">Schedule a Call</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="leading-relaxed">
                  Choose a convenient time using the scheduler above. Takes less
                  than 2 minutes.
                </CardDescription>
              </CardContent>
            </Card>

            {/* Step 2 */}
            <Card>
              <CardHeader>
                <div className="mb-2 flex items-start justify-between">
                  <div className="font-bold text-4xl text-primary">02</div>
                  <HugeiconsIcon
                    icon={Target01Icon}
                    size={28}
                    strokeWidth={1.5}
                    className="text-muted-foreground"
                  />
                </div>
                <CardTitle className="text-xl">We Do Our Homework</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="leading-relaxed">
                  Before our call, we research your business, industry, and
                  current search presence.
                </CardDescription>
              </CardContent>
            </Card>

            {/* Step 3 */}
            <Card>
              <CardHeader>
                <div className="mb-2 flex items-start justify-between">
                  <div className="font-bold text-4xl text-primary">03</div>
                  <HugeiconsIcon
                    icon={UserGroupIcon}
                    size={28}
                    strokeWidth={1.5}
                    className="text-muted-foreground"
                  />
                </div>
                <CardTitle className="text-xl">Qualification Call</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="leading-relaxed">
                  A quick video call to discuss your goals and determine if
                  we're the right fit.
                </CardDescription>
              </CardContent>
            </Card>

            {/* Step 4 */}
            <Card>
              <CardHeader>
                <div className="mb-2 flex items-start justify-between">
                  <div className="font-bold text-4xl text-primary">04</div>
                  <HugeiconsIcon
                    icon={Idea01Icon}
                    size={28}
                    strokeWidth={1.5}
                    className="text-muted-foreground"
                  />
                </div>
                <CardTitle className="text-xl">Next Steps</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="leading-relaxed">
                  If we're a good fit, we'll outline a custom strategy and
                  partnership proposal.
                </CardDescription>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Social Proof Section */}
      <section className="border-border border-y bg-background px-6 py-16 lg:py-20">
        <div className="mx-auto max-w-7xl">
          <div className="grid gap-8 lg:grid-cols-3">
            <div className="text-center">
              <HugeiconsIcon
                icon={ChartIncreaseIcon}
                size={28}
                strokeWidth={1.5}
                className="mx-auto mb-3 text-primary"
              />
              <div className="mb-1 font-extrabold text-4xl tracking-tight lg:text-5xl">
                100+
              </div>
              <div className="text-muted-foreground text-sm">
                Businesses Served Since 2015
              </div>
            </div>

            <div className="text-center">
              <HugeiconsIcon
                icon={DollarCircleIcon}
                size={28}
                strokeWidth={1.5}
                className="mx-auto mb-3 text-primary"
              />
              <div className="mb-1 font-extrabold text-4xl tracking-tight lg:text-5xl">
                $200M+
              </div>
              <div className="text-muted-foreground text-sm">
                Revenue Driven for Clients
              </div>
            </div>

            <div className="text-center">
              <HugeiconsIcon
                icon={ChartLineData01Icon}
                size={28}
                strokeWidth={1.5}
                className="mx-auto mb-3 text-primary"
              />
              <div className="mb-1 font-extrabold text-4xl tracking-tight lg:text-5xl">
                8X
              </div>
              <div className="text-muted-foreground text-sm">
                Average Organic Growth
              </div>
            </div>
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
            <p className="mx-auto max-w-2xl text-muted-foreground">
              Common questions about working with us
            </p>
          </div>

          <Accordion className="w-full">
            <AccordionItem value="item-1">
              <AccordionTrigger className="text-left font-semibold text-lg">
                What happens during the qualification call?
              </AccordionTrigger>
              <AccordionContent className="text-muted-foreground">
                Before our call, we research your business and current search
                presence. During our call, we discuss your goals, challenges,
                and growth opportunities. We'll share insights about your
                competitive landscape and determine if our GEO, SEO, or PPL
                services are a fit. If you qualify, we'll outline next steps for
                a partnership.
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="item-2">
              <AccordionTrigger className="text-left font-semibold text-lg">
                Who is a good fit for your services?
              </AccordionTrigger>
              <AccordionContent className="text-muted-foreground">
                We work with serious brands ready to invest in growth through AI
                and traditional search. Ideal clients vary by service: GEO
                clients want to appear in AI-powered search results, SEO clients
                seek sustainable organic growth, and PPL clients need qualified
                leads immediately. Whether you're building long-term visibility
                or generating leads now, we tailor our approach to your timeline
                and goals. We're selective because we're invested in delivering
                real results.
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="item-3">
              <AccordionTrigger className="text-left font-semibold text-lg">
                What industries do you work with?
              </AccordionTrigger>
              <AccordionContent className="text-muted-foreground">
                Since 2015, we've helped over 100 businesses across North
                America in diverse industries, from hospitality and E-commerce
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
    <div className="overflow-hidden rounded-2xl border border-border shadow-lg dark:shadow-primary/5 dark:[&_.calendly-inline-widget]:hue-rotate-180 dark:[&_.calendly-inline-widget]:invert">
      <div
        className="calendly-inline-widget"
        data-url="https://calendly.com/onepercentseo/marketing-strategy-session?hide_gdpr_banner=1&text_color=121212&primary_color=00cccc"
        style={{ minWidth: '320px', height: '700px' }}
      />
    </div>
  );
}
