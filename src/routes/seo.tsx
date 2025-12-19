import {
  Analytics01Icon,
  ArrowRight01Icon,
  Award01Icon,
  BrowserIcon,
  CheckmarkCircle02Icon,
  Clock01Icon,
  DollarCircleIcon,
  File01Icon,
  Link01Icon,
  Search01Icon,
  SecurityCheckIcon,
  Target01Icon,
  UserGroupIcon,
  ZapIcon,
} from '@hugeicons/core-free-icons';
import { HugeiconsIcon } from '@hugeicons/react';
import { createFileRoute, Link } from '@tanstack/react-router';
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
        'Drive sustainable growth through search excellence. Proven SEO strategies that deliver qualified traffic, higher rankings, and measurable ROI.',
      url: 'https://onepercentseo.com/seo',
    }),
});

const processSteps = [
  {
    number: '01',
    icon: Search01Icon,
    title: 'Comprehensive Audit',
    description:
      'Deep analysis of your current SEO performance, technical issues, content gaps, and competitive landscape to identify opportunities.',
  },
  {
    number: '02',
    icon: Target01Icon,
    title: 'Strategic Planning',
    description:
      'Custom SEO strategy aligned with your business goals, focusing on high-value keywords and conversion-driving content.',
  },
  {
    number: '03',
    icon: ZapIcon,
    title: 'Technical Implementation',
    description:
      'Execute technical optimizations, content creation, link building, and on-page improvements that drive rankings.',
  },
  {
    number: '04',
    icon: Analytics01Icon,
    title: 'Continuous Growth',
    description:
      'Monitor performance, refine strategy, and scale successful tactics. SEO compounds over time—we maximize that advantage.',
  },
];

const benefits = [
  {
    icon: DollarCircleIcon,
    title: 'Highest ROI Channel',
    description:
      'SEO delivers the best return on investment of any marketing channel. Organic traffic costs nothing and compounds over time.',
  },
  {
    icon: Target01Icon,
    title: 'Qualified Traffic',
    description:
      'Users searching for your solutions have high intent. SEO targets people actively looking for what you offer.',
  },
  {
    icon: Clock01Icon,
    title: 'Compounding Returns',
    description:
      "Every month's work builds on the last. SEO results accelerate over time as authority and rankings improve.",
  },
  {
    icon: SecurityCheckIcon,
    title: 'Sustainable Growth',
    description:
      'Unlike paid ads that stop when budgets end, organic rankings provide consistent traffic month after month.',
  },
  {
    icon: UserGroupIcon,
    title: 'Brand Authority',
    description:
      'High search rankings establish credibility. Users trust organic results more than paid advertisements.',
  },
  {
    icon: Award01Icon,
    title: 'Competitive Advantage',
    description:
      'Outrank competitors for valuable keywords and capture market share. The top 3 results get 75% of all clicks.',
  },
];

const services = [
  {
    icon: ZapIcon,
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
    icon: File01Icon,
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
    icon: Link01Icon,
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
    icon: Target01Icon,
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
    icon: BrowserIcon,
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
    icon: Analytics01Icon,
    title: 'Analytics & Reporting',
    features: [
      'Comprehensive ranking tracking',
      'Traffic and conversion analysis',
      'Competitor monitoring',
      'Custom performance dashboards',
      'Monthly strategy reviews',
    ],
  },
];

const faqs = [
  {
    question: 'How long does SEO take to show results?',
    answer:
      'Most clients see initial improvements within 3-4 months, with significant growth by month 6-8. SEO is a compound investment— results accelerate over time as authority builds. Unlike paid ads with immediate but temporary results, SEO creates lasting value that continues growing month after month.',
  },
  {
    question: 'Do you guarantee first-page rankings?',
    answer:
      "We don't make ranking guarantees because Google's algorithm is constantly evolving and no agency can control it. Instead, we focus on the metrics that matter: qualified traffic, lead generation, and revenue growth. Our industry-leading client retention speaks to the consistent results we deliver.",
  },
  {
    question: 'What makes your SEO approach different?',
    answer:
      "We focus on sustainable, white-hat strategies that create long-term value rather than quick wins that risk penalties. Our approach combines technical excellence, high-quality content, and strategic link building with a deep understanding of your business goals. We're not just driving traffic—we're driving revenue.",
  },
  {
    question: 'Is SEO a one-time project or ongoing work?',
    answer:
      'SEO requires ongoing optimization to maintain and improve rankings. Search algorithms evolve, competitors adjust their strategies, and new content opportunities emerge. Our clients see the best results with continuous optimization that adapts to changes and scales successful tactics over time.',
  },
  {
    question: 'What kind of reporting do you provide?',
    answer:
      "We provide comprehensive monthly reports covering ranking improvements, traffic growth, conversion metrics, and competitive analysis. You'll also have access to a real-time dashboard showing your key SEO metrics. Most importantly, we translate data into actionable insights and strategic recommendations.",
  },
  {
    question: 'Can SEO work for my industry/business type?',
    answer:
      "Yes. We've successfully implemented SEO strategies across B2B SaaS, E-commerce, professional services, healthcare, finance, and more. Every industry has people searching for solutions. Our approach adapts to your specific market dynamics, competition level, and business model to deliver results.",
  },
  {
    question: "What's the investment for SEO services?",
    answer:
      "Investment varies based on your goals, market competition, and current SEO foundation. Most clients invest between $5,000- $15,000 per month for comprehensive SEO services. We'll provide a custom proposal after understanding your specific needs and growth objectives. Schedule a call to discuss your situation.",
  },
];

function SEOPage() {
  const serviceSchema = {
    type: 'Service' as const,
    data: {
      name: 'Search Engine Optimization (SEO)',
      description:
        'Drive sustainable growth through search excellence. Proven SEO strategies that deliver qualified traffic, higher rankings, and measurable ROI.',
      url: 'https://onepercentseo.com/seo',
      serviceType: 'Search Engine Optimization',
      provider: {
        '@type': 'Organization',
        name: 'One Percent Digital',
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
              Drive Sustainable Growth Through Search Excellence
            </h1>
            <p className="mx-auto mb-8 max-w-2xl text-muted-foreground text-xl leading-relaxed tracking-wide lg:text-2xl">
              Proven SEO strategies that deliver qualified traffic, higher
              rankings, and measurable ROI. Turn search engines into your most
              reliable growth channel.
            </p>
            <div className="flex flex-col items-center justify-center gap-4 sm:flex-row">
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
                <div className="rounded-xl bg-card p-4 ring-1 ring-foreground/10">
                  <div className="font-extrabold text-3xl text-primary tracking-tight">
                    300+
                  </div>
                  <div className="mt-1 text-muted-foreground text-sm tracking-wide">
                    Businesses Served
                  </div>
                </div>
                <div className="rounded-xl bg-card p-4 ring-1 ring-foreground/10">
                  <div className="font-extrabold text-3xl text-primary tracking-tight">
                    8X
                  </div>
                  <div className="mt-1 text-muted-foreground text-sm tracking-wide">
                    Avg Traffic Growth
                  </div>
                </div>
                <div className="rounded-xl bg-card p-4 ring-1 ring-foreground/10">
                  <div className="font-extrabold text-3xl text-primary tracking-tight">
                    $200M+
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
            {processSteps.map((step) => (
              <div
                key={step.number}
                className="group rounded-2xl bg-card p-8 ring-1 ring-foreground/10 transition-all hover:shadow-lg hover:shadow-primary/10 hover:ring-primary/50"
              >
                <div className="mb-4 flex items-start justify-between">
                  <div className="rounded-xl bg-primary/10 p-3">
                    <HugeiconsIcon
                      icon={step.icon}
                      size={24}
                      strokeWidth={2}
                      className="text-primary"
                    />
                  </div>
                  <div className="font-bold text-3xl text-primary/30 tracking-tight">
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
            {benefits.map((benefit) => (
              <div
                key={benefit.title}
                className="rounded-2xl bg-card p-8 ring-1 ring-foreground/10"
              >
                <div className="mb-4 inline-flex rounded-xl bg-primary/10 p-3">
                  <HugeiconsIcon
                    icon={benefit.icon}
                    size={24}
                    strokeWidth={2}
                    className="text-primary"
                  />
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
              Everything you need to lead search results
            </p>
          </div>
          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
            {services.map((service) => (
              <div
                key={service.title}
                className="rounded-2xl bg-card p-8 ring-1 ring-foreground/10"
              >
                <div className="mb-4 inline-flex rounded-xl bg-primary/10 p-3">
                  <HugeiconsIcon
                    icon={service.icon}
                    size={24}
                    strokeWidth={2}
                    className="text-primary"
                  />
                </div>
                <h3 className="mb-4 font-bold text-xl lg:text-2xl">
                  {service.title}
                </h3>
                <ul className="space-y-2">
                  {service.features.map((feature) => (
                    <li key={feature} className="flex items-start gap-2">
                      <HugeiconsIcon
                        icon={CheckmarkCircle02Icon}
                        size={20}
                        strokeWidth={2}
                        className="mt-0.5 shrink-0 text-primary"
                      />
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
                  <div className="font-extrabold text-5xl text-primary tracking-tight lg:text-7xl">
                    $200M+
                  </div>
                  <div className="mt-2 text-muted-foreground tracking-wide">
                    Client Revenue Generated
                  </div>
                </div>
                <div>
                  <div className="font-extrabold text-5xl text-primary tracking-tight lg:text-7xl">
                    8X
                  </div>
                  <div className="mt-2 text-muted-foreground tracking-wide">
                    Average Traffic Increase
                  </div>
                </div>
                <div>
                  <div className="font-extrabold text-5xl text-primary tracking-tight lg:text-7xl">
                    300+
                  </div>
                  <div className="mt-2 text-muted-foreground tracking-wide">
                    Businesses Served
                  </div>
                </div>
                <div>
                  <div className="font-extrabold text-5xl text-primary tracking-tight lg:text-7xl">
                    13+
                  </div>
                  <div className="mt-2 text-muted-foreground tracking-wide">
                    Years of Experience
                  </div>
                </div>
              </div>
              <div className="mt-10 rounded-2xl bg-card p-6 ring-1 ring-foreground/10">
                <p className="text-muted-foreground italic leading-relaxed tracking-wide">
                  "Working with One Percent Digital transformed our online
                  presence. We went from page 5 to the top 3 results for our key
                  terms. The leads just keep coming."
                </p>
                <div className="mt-4 flex items-center gap-3">
                  <div className="flex size-12 items-center justify-center rounded-full bg-primary/10">
                    <HugeiconsIcon
                      icon={UserGroupIcon}
                      size={24}
                      strokeWidth={2}
                      className="text-primary"
                    />
                  </div>
                  <div>
                    <div className="font-semibold">Scott Goldfarb</div>
                    <div className="text-muted-foreground text-sm">
                      Owner, Goldfarb & Associates
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
          <Accordion className="w-full">
            {faqs.map((faq, index) => (
              <AccordionItem key={faq.question} value={`item-${index + 1}`}>
                <AccordionTrigger className="text-left font-semibold text-lg">
                  {faq.question}
                </AccordionTrigger>
                <AccordionContent className="text-muted-foreground">
                  {faq.answer}
                </AccordionContent>
              </AccordionItem>
            ))}
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
            <Button render={<Link to="/apply" />} size="lg">
              Apply To Work With Us
              <HugeiconsIcon
                icon={ArrowRight01Icon}
                size={18}
                strokeWidth={2}
                data-icon="inline-end"
              />
            </Button>
          </div>
          <p className="mt-6 text-muted-foreground text-sm tracking-wide">
            No obligation • No sales pressure • Just a conversation
          </p>
        </div>
      </section>
    </div>
  );
}
