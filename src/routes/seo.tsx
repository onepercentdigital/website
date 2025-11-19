import { createFileRoute, Link } from '@tanstack/react-router';
import {
  ArrowRight,
  Award,
  BarChart3,
  CheckCircle2,
  Clock,
  DollarSign,
  FileText,
  Globe,
  Link2,
  Search,
  Shield,
  Target,
  Users,
  Zap,
} from 'lucide-react';
import { SEO } from '@/components/SEO';
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from '@/components/ui/accordion';
import { Button } from '@/components/ui/button';
import { generateMetaTags } from '@/lib/seo';

export const Route = createFileRoute('/seo')({
  component: SEOPage,
  head: () =>
    generateMetaTags({
      title: 'SEO - Search Engine Optimization',
      description:
        'Drive sustainable growth through search dominance. Proven SEO strategies that deliver qualified traffic, higher rankings, and measurable ROI.',
      url: 'https://onepercentseo.com/seo',
    }),
});

function SEOPage() {
  const serviceSchema = {
    type: 'Service' as const,
    data: {
      name: 'Search Engine Optimization (SEO)',
      description:
        'Drive sustainable growth through search dominance. Proven SEO strategies that deliver qualified traffic, higher rankings, and measurable ROI.',
      url: 'https://onepercentseo.com/seo',
      serviceType: 'Search Engine Optimization',
      provider: {
        '@type': 'Organization',
        name: 'One Percent SEO',
        url: 'https://onepercentseo.com',
      },
      areaServed: 'Worldwide',
    },
  };

  return (
    <div className="overflow-hidden">
      <SEO structuredData={[serviceSchema]} />

      {/* Hero Section */}
      <section className="relative overflow-hidden bg-background px-6 py-12 lg:py-16">
        <div className="mx-auto max-w-7xl">
          <div className="mx-auto max-w-4xl text-center">
            <h1 className="mb-6 font-extrabold text-5xl leading-[0.95] tracking-tighter lg:text-7xl xl:text-8xl">
              Drive Sustainable Growth Through Search Dominance
            </h1>
            <p className="mx-auto mb-8 max-w-2xl text-muted-foreground text-xl leading-relaxed tracking-wide lg:text-2xl">
              Proven SEO strategies that deliver qualified traffic, higher
              rankings, and measurable ROI. Turn search engines into your most
              reliable growth channel.
            </p>
            <div className="flex flex-col items-center justify-center gap-4 sm:flex-row">
              <Button
                asChild
                size="lg"
                className="bg-accent text-accent-foreground hover:bg-accent/90"
              >
                <Link to="/audit">
                  Get Your Free SEO Audit
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Link>
              </Button>
              <Button asChild size="lg" variant="outline">
                <Link to="/case-studies">View Case Studies</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* What is SEO Section */}
      <section className="px-6 py-20 lg:py-32">
        <div className="mx-auto max-w-7xl">
          <div className="grid items-center gap-12 lg:grid-cols-2">
            <div>
              <h2 className="mb-4 font-bold text-4xl leading-[1.1] tracking-tight lg:text-6xl">
                What is Search Engine Optimization?
              </h2>
              <p className="mt-6 text-lg text-muted-foreground leading-relaxed tracking-wide">
                SEO (Search Engine Optimization) is the practice of improving
                your website's visibility in organic search results. When
                potential customers search for solutions you provide, strategic
                SEO ensures you appear at the top.
              </p>
              <p className="mt-4 text-lg text-muted-foreground leading-relaxed tracking-wide">
                Unlike paid advertising that stops when the budget runs out, SEO
                builds compounding value. Every optimization creates lasting
                improvements that continue driving qualified traffic, leads, and
                revenue month after month.
              </p>
              <div className="mt-8 grid gap-4 sm:grid-cols-3">
                <div className="rounded-xl border border-border bg-card p-4">
                  <div className="font-extrabold text-3xl text-accent tracking-tight">
                    95%
                  </div>
                  <div className="mt-1 text-muted-foreground text-sm tracking-wide">
                    Client Retention
                  </div>
                </div>
                <div className="rounded-xl border border-border bg-card p-4">
                  <div className="font-extrabold text-3xl text-accent tracking-tight">
                    300%
                  </div>
                  <div className="mt-1 text-muted-foreground text-sm tracking-wide">
                    Avg Traffic Growth
                  </div>
                </div>
                <div className="rounded-xl border border-border bg-card p-4">
                  <div className="font-extrabold text-3xl text-accent tracking-tight">
                    1444%
                  </div>
                  <div className="mt-1 text-muted-foreground text-sm tracking-wide">
                    Client Revenue Impact
                  </div>
                </div>
              </div>
            </div>
            <div className="flex items-center justify-center">
              {/* Placeholder for future visualization */}
            </div>
          </div>
        </div>
      </section>

      {/* How It Works Section */}
      <section className="px-6 py-24">
        <div className="mx-auto max-w-7xl">
          <div className="mb-16 text-center">
            <h2 className="font-bold text-4xl tracking-tight lg:text-6xl">
              Our SEO Process
            </h2>
            <p className="mx-auto mt-4 max-w-3xl text-lg text-muted-foreground tracking-wide">
              A proven methodology that delivers consistent, measurable results
            </p>
          </div>
          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4">
            {[
              {
                number: '01',
                icon: Search,
                title: 'Comprehensive Audit',
                description:
                  'Deep analysis of your current SEO performance, technical issues, content gaps, and competitive landscape to identify opportunities.',
              },
              {
                number: '02',
                icon: Target,
                title: 'Strategic Planning',
                description:
                  'Custom SEO strategy aligned with your business goals, focusing on high-value keywords and conversion-driving content.',
              },
              {
                number: '03',
                icon: Zap,
                title: 'Technical Implementation',
                description:
                  'Execute technical optimizations, content creation, link building, and on-page improvements that drive rankings.',
              },
              {
                number: '04',
                icon: BarChart3,
                title: 'Continuous Growth',
                description:
                  'Monitor performance, refine strategy, and scale successful tactics. SEO compounds over time—we maximize that advantage.',
              },
            ].map((step) => (
              <div
                key={step.number}
                className="group rounded-2xl border border-border bg-card p-8 transition-all hover:border-accent/50 hover:shadow-accent/10 hover:shadow-lg"
              >
                <div className="mb-4 flex items-start justify-between">
                  <div className="rounded-lg bg-accent/10 p-3">
                    <step.icon className="size-6 text-accent" />
                  </div>
                  <div className="font-bold text-3xl text-accent/30 tracking-tight">
                    {step.number}
                  </div>
                </div>
                <h3 className="mb-3 font-bold text-2xl">{step.title}</h3>
                <p className="text-muted-foreground leading-relaxed tracking-wide">
                  {step.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Key Benefits Section */}
      <section className="px-6 py-20 lg:py-32">
        <div className="mx-auto max-w-7xl">
          <div className="mb-16 text-center">
            <h2 className="font-bold text-4xl tracking-tight lg:text-6xl">
              Why SEO Drives Business Growth
            </h2>
            <p className="mx-auto mt-4 max-w-3xl text-lg text-muted-foreground tracking-wide">
              The most cost-effective, sustainable marketing channel
            </p>
          </div>
          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
            {[
              {
                icon: DollarSign,
                title: 'Highest ROI Channel',
                description:
                  'SEO delivers the best return on investment of any marketing channel. Organic traffic costs nothing and compounds over time.',
              },
              {
                icon: Target,
                title: 'Qualified Traffic',
                description:
                  'Users searching for your solutions have high intent. SEO targets people actively looking for what you offer.',
              },
              {
                icon: Clock,
                title: 'Compounding Returns',
                description:
                  "Every month's work builds on the last. SEO results accelerate over time as authority and rankings improve.",
              },
              {
                icon: Shield,
                title: 'Sustainable Growth',
                description:
                  'Unlike paid ads that stop when budgets end, organic rankings provide consistent traffic month after month.',
              },
              {
                icon: Users,
                title: 'Brand Authority',
                description:
                  'High search rankings establish credibility. Users trust organic results more than paid advertisements.',
              },
              {
                icon: Award,
                title: 'Competitive Advantage',
                description:
                  'Outrank competitors for valuable keywords and capture market share. The top 3 results get 75% of all clicks.',
              },
            ].map((benefit, index) => (
              <div
                key={index}
                className="rounded-2xl border border-border bg-card p-8"
              >
                <div className="mb-4 inline-flex rounded-lg bg-accent/10 p-3">
                  <benefit.icon className="size-6 text-accent" />
                </div>
                <h3 className="mb-3 font-bold text-xl lg:text-2xl">
                  {benefit.title}
                </h3>
                <p className="text-muted-foreground leading-relaxed tracking-wide">
                  {benefit.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Service Offerings Section */}
      <section className="px-6 py-24">
        <div className="mx-auto max-w-7xl">
          <div className="mb-16 text-center">
            <h2 className="font-bold text-4xl tracking-tight lg:text-6xl">
              Comprehensive SEO Services
            </h2>
            <p className="mx-auto mt-4 max-w-3xl text-lg text-muted-foreground tracking-wide">
              Everything you need to dominate search results
            </p>
          </div>
          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
            {[
              {
                icon: Zap,
                title: 'Technical SEO',
                features: [
                  'Site speed optimization',
                  'Mobile responsiveness',
                  'Core Web Vitals improvement',
                  'Crawlability and indexation',
                  'Schema markup implementation',
                ],
              },
              {
                icon: FileText,
                title: 'Content Strategy',
                features: [
                  'Keyword research and mapping',
                  'Content gap analysis',
                  'SEO-optimized content creation',
                  'Editorial calendar management',
                  'Content refresh and updates',
                ],
              },
              {
                icon: Link2,
                title: 'Link Building',
                features: [
                  'High-authority backlink acquisition',
                  'Strategic outreach campaigns',
                  'Digital PR and media placement',
                  'Competitor backlink analysis',
                  'Link profile monitoring',
                ],
              },
              {
                icon: Target,
                title: 'On-Page Optimization',
                features: [
                  'Title and meta description optimization',
                  'Header tag structure',
                  'Internal linking strategy',
                  'Image optimization and alt text',
                  'URL structure improvements',
                ],
              },
              {
                icon: Globe,
                title: 'Local SEO',
                features: [
                  'Google Business Profile optimization',
                  'Local citation building',
                  'Review management strategy',
                  'Local content creation',
                  'Map pack optimization',
                ],
              },
              {
                icon: BarChart3,
                title: 'Analytics & Reporting',
                features: [
                  'Comprehensive ranking tracking',
                  'Traffic and conversion analysis',
                  'Competitor monitoring',
                  'Custom performance dashboards',
                  'Monthly strategy reviews',
                ],
              },
            ].map((service, index) => (
              <div
                key={index}
                className="rounded-2xl border border-border bg-card p-8"
              >
                <div className="mb-4 inline-flex rounded-lg bg-accent/10 p-3">
                  <service.icon className="size-6 text-accent" />
                </div>
                <h3 className="mb-4 font-bold text-xl lg:text-2xl">
                  {service.title}
                </h3>
                <ul className="space-y-2">
                  {service.features.map((feature, idx) => (
                    <li key={idx} className="flex items-start gap-2">
                      <CheckCircle2 className="mt-0.5 size-5 shrink-0 text-accent" />
                      <span className="text-muted-foreground text-sm tracking-wide">
                        {feature}
                      </span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Results Section */}
      <section className="px-6 py-20 lg:py-32">
        <div className="mx-auto max-w-7xl">
          <div className="grid items-center gap-12 lg:grid-cols-2">
            <div>
              <h2 className="mb-4 font-bold text-4xl leading-[1.1] tracking-tight lg:text-6xl">
                Real Growth from Real Clients
              </h2>
              <p className="mt-6 text-lg text-muted-foreground leading-relaxed tracking-wide">
                Our clients don't just see incremental improvements—they
                experience transformative growth that fundamentally changes
                their business trajectory.
              </p>
              <div className="mt-8 grid gap-6 sm:grid-cols-2">
                <div>
                  <div className="font-extrabold text-5xl text-accent tracking-tight lg:text-7xl">
                    1444%
                  </div>
                  <div className="mt-2 text-muted-foreground tracking-wide">
                    Revenue Growth Impact
                  </div>
                </div>
                <div>
                  <div className="font-extrabold text-5xl text-accent tracking-tight lg:text-7xl">
                    300%
                  </div>
                  <div className="mt-2 text-muted-foreground tracking-wide">
                    Average Traffic Increase
                  </div>
                </div>
                <div>
                  <div className="font-extrabold text-5xl text-accent tracking-tight lg:text-7xl">
                    $150M+
                  </div>
                  <div className="mt-2 text-muted-foreground tracking-wide">
                    Client Revenue Generated
                  </div>
                </div>
                <div>
                  <div className="font-extrabold text-5xl text-accent tracking-tight lg:text-7xl">
                    95%
                  </div>
                  <div className="mt-2 text-muted-foreground tracking-wide">
                    Client Retention Rate
                  </div>
                </div>
              </div>
              <div className="mt-10 rounded-2xl border border-border bg-card p-6">
                <p className="text-muted-foreground italic leading-relaxed tracking-wide">
                  "Our organic traffic grew 420% in the first year. SEO went
                  from a cost center to our highest-ROI channel. The compound
                  growth effect is incredible."
                </p>
                <div className="mt-4 flex items-center gap-3">
                  <div className="flex size-12 items-center justify-center rounded-full bg-accent/10">
                    <Users className="size-6 text-accent" />
                  </div>
                  <div>
                    <div className="font-semibold">Michael Rodriguez</div>
                    <div className="text-muted-foreground text-sm">
                      VP Marketing, SaaS Company
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="flex items-center justify-center">
              {/* Placeholder for future chart/visualization */}
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
              Everything you need to know about SEO
            </p>
          </div>
          <Accordion type="single" collapsible className="w-full">
            <AccordionItem value="item-1">
              <AccordionTrigger className="text-left font-semibold text-lg">
                How long does SEO take to show results?
              </AccordionTrigger>
              <AccordionContent className="text-muted-foreground">
                Most clients see initial improvements within 3-4 months, with
                significant growth by month 6-8. SEO is a compound investment—
                results accelerate over time as authority builds. Unlike paid
                ads with immediate but temporary results, SEO creates lasting
                value that continues growing month after month.
              </AccordionContent>
            </AccordionItem>
            <AccordionItem value="item-2">
              <AccordionTrigger className="text-left font-semibold text-lg">
                Do you guarantee first-page rankings?
              </AccordionTrigger>
              <AccordionContent className="text-muted-foreground">
                We don't make ranking guarantees because Google's algorithm is
                constantly evolving and no agency can control it. Instead, we
                focus on the metrics that matter: qualified traffic, lead
                generation, and revenue growth. Our 95% client retention rate
                speaks to the consistent results we deliver.
              </AccordionContent>
            </AccordionItem>
            <AccordionItem value="item-3">
              <AccordionTrigger className="text-left font-semibold text-lg">
                What makes your SEO approach different?
              </AccordionTrigger>
              <AccordionContent className="text-muted-foreground">
                We focus on sustainable, white-hat strategies that create
                long-term value rather than quick wins that risk penalties. Our
                approach combines technical excellence, high-quality content,
                and strategic link building with a deep understanding of your
                business goals. We're not just driving traffic—we're driving
                revenue.
              </AccordionContent>
            </AccordionItem>
            <AccordionItem value="item-4">
              <AccordionTrigger className="text-left font-semibold text-lg">
                Is SEO a one-time project or ongoing work?
              </AccordionTrigger>
              <AccordionContent className="text-muted-foreground">
                SEO requires ongoing optimization to maintain and improve
                rankings. Search algorithms evolve, competitors adjust their
                strategies, and new content opportunities emerge. Our clients
                see the best results with continuous optimization that adapts to
                changes and scales successful tactics over time.
              </AccordionContent>
            </AccordionItem>
            <AccordionItem value="item-5">
              <AccordionTrigger className="text-left font-semibold text-lg">
                What kind of reporting do you provide?
              </AccordionTrigger>
              <AccordionContent className="text-muted-foreground">
                We provide comprehensive monthly reports covering ranking
                improvements, traffic growth, conversion metrics, and
                competitive analysis. You'll also have access to a real-time
                dashboard showing your key SEO metrics. Most importantly, we
                translate data into actionable insights and strategic
                recommendations.
              </AccordionContent>
            </AccordionItem>
            <AccordionItem value="item-6">
              <AccordionTrigger className="text-left font-semibold text-lg">
                Can SEO work for my industry/business type?
              </AccordionTrigger>
              <AccordionContent className="text-muted-foreground">
                Yes. We've successfully implemented SEO strategies across B2B
                SaaS, e-commerce, professional services, healthcare, finance,
                and more. Every industry has people searching for solutions. Our
                approach adapts to your specific market dynamics, competition
                level, and business model to deliver results.
              </AccordionContent>
            </AccordionItem>
            <AccordionItem value="item-7">
              <AccordionTrigger className="text-left font-semibold text-lg">
                What's the investment for SEO services?
              </AccordionTrigger>
              <AccordionContent className="text-muted-foreground">
                Investment varies based on your goals, market competition, and
                current SEO foundation. Most clients invest between $5,000-
                $15,000 per month for comprehensive SEO services. We'll provide
                a custom proposal after understanding your specific needs and
                growth objectives. Schedule a call to discuss your situation.
              </AccordionContent>
            </AccordionItem>
          </Accordion>
        </div>
      </section>

      {/* Final CTA Section */}
      <section className="relative overflow-hidden bg-background px-6 py-20 lg:py-32">
        <div className="mx-auto max-w-4xl text-center">
          <h2 className="font-bold text-4xl tracking-tight lg:text-6xl">
            Turn Search Into Your Most Profitable Channel
          </h2>
          <p className="mx-auto mt-6 max-w-2xl text-lg text-muted-foreground leading-relaxed tracking-wide">
            Stop leaving money on the table. Your competitors are already
            investing in SEO. The question isn't whether to start—it's whether
            you can afford to wait any longer.
          </p>
          <div className="mt-10">
            <Button
              asChild
              size="lg"
              className="bg-accent text-accent-foreground hover:bg-accent/90"
            >
              <Link to="/audit">
                Get Your Free SEO Audit
                <ArrowRight className="ml-2 h-5 w-5" />
              </Link>
            </Button>
          </div>
          <p className="mt-6 text-muted-foreground text-sm tracking-wide">
            Free comprehensive audit • Custom growth roadmap • No obligation
          </p>
        </div>
      </section>
    </div>
  );
}
