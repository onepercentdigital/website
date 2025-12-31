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
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from '@/components/ui/card';
import { getImageUrl } from '@/lib/cloudflare-images';
import { generateMetaTags } from '@/lib/seo';

export const Route = createFileRoute('/seo')({
  component: SEOPage,
  head: () =>
    generateMetaTags({
      title: 'SEO - Search Engine Optimization',
      description:
        'Drive sustainable growth through search excellence. Proven SEO strategies that deliver qualified traffic, higher rankings, and measurable ROI.',
      url: 'https://op.digital/seo',
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
      'Monitor performance, refine strategy, and scale successful tactics. SEO compounds over time, and we maximize that advantage.',
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
      'Most clients see initial improvements within 3-4 months, with significant growth by month 6-8. SEO is a compound investment, and results accelerate over time as authority builds. Unlike paid ads with immediate but temporary results, SEO creates lasting value that continues growing month after month.',
  },
  {
    question: 'Do you guarantee first-page rankings?',
    answer:
      "We don't make ranking guarantees because Google's algorithm is constantly evolving and no agency can control it. Instead, we focus on the metrics that matter: qualified traffic, lead generation, and revenue growth. Our industry-leading client retention speaks to the consistent results we deliver.",
  },
  {
    question: 'What makes your SEO approach different?',
    answer:
      "We focus on sustainable, white-hat strategies that create long-term value rather than quick wins that risk penalties. Our approach combines technical excellence, high-quality content, and strategic link building with a deep understanding of your business goals. We're not just driving traffic. We're driving revenue.",
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
];

function SEOPage() {
  const serviceSchema = {
    type: 'Service' as const,
    data: {
      name: 'Search Engine Optimization (SEO)',
      description:
        'Drive sustainable growth through search excellence. Proven SEO strategies that deliver qualified traffic, higher rankings, and measurable ROI.',
      url: 'https://op.digital/seo',
      serviceType: 'Search Engine Optimization',
      provider: {
        '@type': 'Organization',
        name: 'One Percent Digital',
        url: 'https://op.digital',
      },
      areaServed: 'Worldwide',
    },
  };

  return (
    <div className="overflow-hidden">
      <SEO structuredData={[serviceSchema]} />

      {/* Hero Section */}
      <section className="px-6 py-16 lg:py-20">
        <div className="mx-auto max-w-7xl">
          <div className="mx-auto max-w-4xl text-center">
            <h1 className="mb-6 font-extrabold text-5xl leading-[0.95] tracking-tighter lg:mb-8 lg:text-7xl xl:text-8xl">
              Drive Sustainable Growth Through Search Excellence
            </h1>
            <p className="mx-auto mb-10 max-w-2xl text-muted-foreground leading-relaxed lg:text-lg">
              Proven SEO strategies that deliver qualified traffic, higher
              rankings, and measurable ROI. Turn search engines into your most
              reliable growth channel.
            </p>
            <div className="flex flex-col items-center justify-center gap-3 sm:flex-row">
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
      <section className="px-6 py-16 lg:py-20">
        <div className="mx-auto max-w-7xl">
          <div className="grid items-center gap-12 lg:grid-cols-2">
            <div>
              <h2 className="mb-4 font-bold text-4xl leading-[1.1] tracking-tight lg:text-5xl">
                What is Search Engine Optimization?
              </h2>
              <p className="mb-4 text-muted-foreground leading-relaxed">
                SEO (Search Engine Optimization) is the practice of improving
                your website's visibility in organic search results. When
                potential customers search for solutions you provide, strategic
                SEO ensures you appear at the top.
              </p>
              <p className="mb-6 text-muted-foreground leading-relaxed">
                Unlike paid advertising that stops when the budget runs out, SEO
                builds compounding value. Every optimization creates lasting
                improvements that continue driving qualified traffic, leads, and
                revenue month after month.
              </p>
              <div className="grid gap-4 sm:grid-cols-3">
                <Card className="p-4">
                  <div className="font-extrabold text-3xl text-primary tracking-tight">
                    100+
                  </div>
                  <div className="mt-1 text-muted-foreground text-sm">
                    Businesses Served
                  </div>
                </Card>
                <Card className="p-4">
                  <div className="font-extrabold text-3xl text-primary tracking-tight">
                    8X
                  </div>
                  <div className="mt-1 text-muted-foreground text-sm">
                    Avg Traffic Growth
                  </div>
                </Card>
                <Card className="p-4">
                  <div className="font-extrabold text-3xl text-primary tracking-tight">
                    $200M+
                  </div>
                  <div className="mt-1 text-muted-foreground text-sm">
                    Client Revenue Impact
                  </div>
                </Card>
              </div>
            </div>
            <div className="relative aspect-video overflow-hidden rounded-2xl">
              <div className="absolute inset-0 z-30 bg-primary opacity-50 mix-blend-color" />
              <img
                src="https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=800&h=450&fit=crop"
                alt="Search analytics and data visualization"
                className="relative z-20 h-full w-full object-cover brightness-60 grayscale"
              />
            </div>
          </div>
        </div>
      </section>

      {/* How It Works Section */}
      <section className="px-6 py-16 lg:py-20">
        <div className="mx-auto max-w-7xl">
          <div className="mb-12 text-center">
            <h2 className="mb-4 font-bold text-4xl leading-[1.1] tracking-tight lg:text-5xl">
              Our SEO Process
            </h2>
            <p className="mx-auto max-w-3xl text-muted-foreground">
              A proven methodology that delivers consistent, measurable results
            </p>
          </div>
          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4">
            {processSteps.map((step) => (
              <Card key={step.number}>
                <CardHeader>
                  <div className="mb-2 flex items-start justify-between">
                    <div className="font-bold text-4xl text-primary">
                      {step.number}
                    </div>
                    <HugeiconsIcon
                      icon={step.icon}
                      size={28}
                      strokeWidth={1.5}
                      className="text-muted-foreground"
                    />
                  </div>
                  <CardTitle className="text-xl">{step.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription className="leading-relaxed">
                    {step.description}
                  </CardDescription>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Key Benefits Section */}
      <section className="px-6 py-16 lg:py-20">
        <div className="mx-auto max-w-7xl">
          <div className="mb-12 text-center">
            <h2 className="mb-4 font-bold text-4xl leading-[1.1] tracking-tight lg:text-5xl">
              Why SEO Drives Business Growth
            </h2>
            <p className="mx-auto max-w-3xl text-muted-foreground">
              The most cost-effective, sustainable marketing channel
            </p>
          </div>
          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
            {benefits.map((benefit) => (
              <Card key={benefit.title}>
                <CardHeader>
                  <HugeiconsIcon
                    icon={benefit.icon}
                    size={28}
                    strokeWidth={1.5}
                    className="mb-2 text-primary"
                  />
                  <CardTitle>{benefit.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription className="leading-relaxed">
                    {benefit.description}
                  </CardDescription>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Service Offerings Section */}
      <section className="px-6 py-16 lg:py-20">
        <div className="mx-auto max-w-7xl">
          <div className="mb-12 text-center">
            <h2 className="mb-4 font-bold text-4xl leading-[1.1] tracking-tight lg:text-5xl">
              Comprehensive SEO Services
            </h2>
            <p className="mx-auto max-w-3xl text-muted-foreground">
              Everything you need to lead search results
            </p>
          </div>
          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
            {services.map((service) => (
              <Card key={service.title}>
                <CardHeader>
                  <HugeiconsIcon
                    icon={service.icon}
                    size={28}
                    strokeWidth={1.5}
                    className="mb-2 text-primary"
                  />
                  <CardTitle>{service.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-2">
                    {service.features.map((feature) => (
                      <li key={feature} className="flex items-start gap-2">
                        <HugeiconsIcon
                          icon={CheckmarkCircle02Icon}
                          size={20}
                          strokeWidth={2}
                          className="mt-0.5 shrink-0 text-primary"
                        />
                        <span className="text-muted-foreground text-sm">
                          {feature}
                        </span>
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Results Section */}
      <section className="px-6 py-16 lg:py-20">
        <div className="mx-auto max-w-7xl">
          <div className="grid items-center gap-12 lg:grid-cols-2">
            <div>
              <h2 className="mb-4 font-bold text-4xl leading-[1.1] tracking-tight lg:text-5xl">
                Real Growth from Real Clients
              </h2>
              <p className="mb-6 text-muted-foreground leading-relaxed">
                Our clients don't just see incremental improvements. They
                experience transformative growth that fundamentally changes
                their business trajectory.
              </p>
              <div className="mb-8 grid gap-6 sm:grid-cols-2">
                <div>
                  <div className="mb-1 font-extrabold text-4xl tracking-tight lg:text-5xl">
                    $200M+
                  </div>
                  <div className="text-muted-foreground text-sm">
                    Client Revenue Generated
                  </div>
                </div>
                <div>
                  <div className="mb-1 font-extrabold text-4xl tracking-tight lg:text-5xl">
                    8X
                  </div>
                  <div className="text-muted-foreground text-sm">
                    Average Traffic Increase
                  </div>
                </div>
                <div>
                  <div className="mb-1 font-extrabold text-4xl tracking-tight lg:text-5xl">
                    100+
                  </div>
                  <div className="text-muted-foreground text-sm">
                    Businesses Served
                  </div>
                </div>
                <div>
                  <div className="mb-1 font-extrabold text-4xl tracking-tight lg:text-5xl">
                    10+
                  </div>
                  <div className="text-muted-foreground text-sm">
                    Years of Experience
                  </div>
                </div>
              </div>
              <Card className="p-6">
                <p className="mb-6 text-foreground leading-relaxed">
                  "Working with One Percent Digital transformed our online
                  presence. We went from page 5 to the top 3 results for our key
                  terms. The leads just keep coming."
                </p>
                <div className="flex items-center gap-4">
                  <img
                    src={getImageUrl(
                      '51e5ac33-a0d2-4cdb-668e-581cba411a00',
                      'thumbnail',
                    )}
                    alt="Goldfarb & Associates"
                    className="h-10 w-auto object-contain dark:invert"
                  />
                  <div>
                    <div className="font-medium text-foreground text-sm">
                      Scott Goldfarb
                    </div>
                    <div className="text-muted-foreground text-sm">
                      Owner, Goldfarb & Associates
                    </div>
                  </div>
                </div>
              </Card>
            </div>
            <div className="relative aspect-video overflow-hidden rounded-2xl">
              <div className="absolute inset-0 z-30 bg-primary opacity-50 mix-blend-color" />
              <img
                src="https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800&h=450&fit=crop"
                alt="Growth charts and analytics dashboard"
                className="relative z-20 h-full w-full object-cover brightness-60 grayscale"
              />
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
      <section className="border-border border-y px-6 py-16 lg:py-20">
        <div className="mx-auto max-w-3xl text-center">
          <h2 className="mb-4 font-bold text-3xl tracking-tight lg:text-4xl">
            Turn Search Into Your Most Profitable Channel
          </h2>
          <p className="mx-auto mb-8 max-w-xl text-muted-foreground">
            Stop leaving money on the table. Your competitors are already
            investing in SEO. The question isn't whether to start, it's whether
            you can afford to wait any longer.
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
    </div>
  );
}
