import {
  Analytics01Icon,
  ArrowRight01Icon,
  ChartIncreaseIcon,
  CheckmarkCircle02Icon,
  Clock01Icon,
  CustomerSupportIcon,
  DollarCircleIcon,
  FilterIcon,
  LayoutGridIcon,
  LockIcon,
  Megaphone01Icon,
  NeuralNetworkIcon,
  Notification01Icon,
  PaintBrushIcon,
  SecurityCheckIcon,
  SmartPhone01Icon,
  Target01Icon,
  UserCheck01Icon,
  UserGroupIcon,
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
import { Separator } from '@/components/ui/separator';
import { generateMetaTags, getFAQSchema } from '@/lib/seo';

export const Route = createFileRoute('/ppl')({
  component: PayPerLeadPage,
  head: () =>
    generateMetaTags({
      title: 'Pay Per Lead - Exclusive Leads on Demand',
      description:
        'Pre-qualified leads delivered exclusively to you. No retainers, no contracts, no setup fees. We fund your marketing, you only pay for results.',
      url: 'https://op.digital/ppl',
    }),
});

const processSteps = [
  {
    number: '01',
    icon: FilterIcon,
    title: 'Define Your Ideal Customer',
    description:
      'Tell us exactly who you want to reach. Set precise filters for industry, company size, location, budget, and any other criteria that defines a qualified prospect.',
  },
  {
    number: '02',
    icon: PaintBrushIcon,
    title: 'We Build Your Campaigns',
    description:
      'Our team creates high-converting ad creatives, landing pages, and lead capture forms. We handle all integrations with your existing tools and CRM.',
  },
  {
    number: '03',
    icon: DollarCircleIcon,
    title: 'We Fund Your Marketing',
    description:
      'We invest in the advertising spend across all channels. You pay nothing until we deliver leads that match your qualification criteria.',
  },
  {
    number: '04',
    icon: UserGroupIcon,
    title: 'Receive Exclusive Pre-Qualified Leads',
    description:
      'Pre-qualified prospects are delivered to you in real-time via your preferred method: CRM, email, webhook, or custom integration.',
  },
];

const benefits = [
  {
    icon: SecurityCheckIcon,
    title: 'Zero Risk',
    description:
      'No monthly retainers, no long-term contracts, cancel anytime. You only pay when we deliver qualified prospects to your pipeline.',
  },
  {
    icon: ChartIncreaseIcon,
    title: 'Predictable Growth',
    description:
      'Know exactly what you pay per customer acquisition. Scale your investment based on your capacity and growth goals.',
  },
  {
    icon: Clock01Icon,
    title: 'Immediate Results',
    description:
      'Start receiving qualified leads within 7 days of setup. No waiting months for SEO to kick in or brand awareness to build.',
  },
  {
    icon: CheckmarkCircle02Icon,
    title: 'Pre-Qualified Prospects',
    description:
      'Every lead meets your specific criteria before delivery. Stop wasting time on unqualified inquiries that never convert.',
  },
  {
    icon: Analytics01Icon,
    title: 'Scalable Pipeline',
    description:
      'Increase or decrease lead volume to match your sales capacity. Scale up during growth periods, dial back when needed.',
  },
  {
    icon: LockIcon,
    title: 'Exclusive To You',
    description:
      'Your leads are never shared or resold. Every prospect goes directly to you. You are the first and only stop. No competing with other buyers for the same lead.',
  },
];

const leadQualityItems = [
  {
    icon: SmartPhone01Icon,
    title: 'Verified Contact Info',
    description:
      'One-time passcode verification ensures every phone number is real and contactable. No more dead numbers or fake contacts.',
  },
  {
    icon: CheckmarkCircle02Icon,
    title: 'Validated Qualifications',
    description:
      'We verify stated information like credit scores, asset sizes, and budget ranges before delivery. What prospects tell us is confirmed, not guessed.',
  },
  {
    icon: LockIcon,
    title: 'Exclusive Delivery',
    description:
      'Unlike Zillow, SmartAsset, and other platforms that share leads with multiple buyers, your leads go only to you. First and last stop.',
  },
  {
    icon: Target01Icon,
    title: 'Higher Intent Prospects',
    description:
      'Longer qualification quizzes mean prospects invest more time before reaching you. AI-powered live transfers and follow-up systems increase conversion rates.',
  },
];

const services = [
  {
    icon: UserCheck01Icon,
    title: 'Lead Qualification',
    features: [
      'Custom intake form design',
      'Qualification criteria setup',
      'Real-time lead filtering',
      'CRM integration',
      'Lead scoring implementation',
    ],
  },
  {
    icon: Megaphone01Icon,
    title: 'Campaign Management',
    features: [
      'Multi-channel advertising',
      'A/B testing and optimization',
      'Audience targeting refinement',
      'Budget optimization',
      'Creative development',
    ],
  },
  {
    icon: LayoutGridIcon,
    title: 'Landing Page Optimization',
    features: [
      'High-converting page design',
      'Mobile-first optimization',
      'Form optimization',
      'Page speed optimization',
      'Conversion tracking setup',
    ],
  },
  {
    icon: Notification01Icon,
    title: 'Real-Time Delivery',
    features: [
      'Instant lead notifications',
      'Webhook integrations',
      'CRM synchronization',
      'Custom delivery options',
      'Lead routing rules',
    ],
  },
  {
    icon: NeuralNetworkIcon,
    title: 'AI Integration',
    features: [
      'AI-powered lead qualification',
      'Automated follow-up sequences',
      'Intelligent lead scoring',
      'Predictive conversion modeling',
      'Smart routing optimization',
    ],
  },
  {
    icon: CustomerSupportIcon,
    title: 'Dedicated Support',
    features: [
      'Account management',
      'Strategy sessions',
      'Performance reviews',
      'Scaling consultation',
      'Priority support access',
    ],
  },
];

const faqs = [
  {
    question: 'How do you ensure leads are actually qualified?',
    answer:
      'Unlike platforms that share leads or deliver unverified information, we validate everything before delivery. Phone numbers are verified through one-time passcode confirmation, so every number you receive is contactable. Stated qualifications like credit scores, 401k sizes, and budget ranges are validated against our criteria. Our longer intake quizzes filter out casual browsers, ensuring prospects are invested before they reach you. AI-assisted qualification and follow-up systems further increase lead quality and conversion rates.',
  },
  {
    question: 'How quickly can I start receiving leads?',
    answer:
      'Most clients start receiving qualified leads within 7 days of campaign launch. The setup process (defining criteria, building landing pages, creating ads) typically takes 3-5 business days. Once live, leads flow immediately.',
  },
  {
    question: 'What industries do you work with?',
    answer:
      'We work across B2B and B2C industries including professional services, SaaS, healthcare, finance, real estate, home services, and more. If you have a clear target customer profile and can handle inbound leads, we can likely help. Schedule a call to discuss your specific market.',
  },
  {
    question: 'Can I adjust my lead volume?',
    answer:
      'Absolutely. Scale up when you need more pipeline, scale down when your team is at capacity. There are no minimum commitments or long-term contracts. You control the volume based on your business needs.',
  },
  {
    question: 'How are leads delivered to me?',
    answer:
      'Leads are delivered in real-time through your preferred method. Options include direct CRM integration (Salesforce, HubSpot, etc.), email notifications, webhook to your systems, or custom API integration. We adapt to your existing workflow.',
  },
  {
    question: 'What if lead quality is unsatisfactory?',
    answer:
      'We stand behind our qualification process. If a lead does not meet the agreed-upon criteria, we replace it at no charge. Our model only works when you succeed, so we are invested in delivering leads that actually convert for your business.',
  },
];

function PayPerLeadPage() {
  const serviceSchema = {
    type: 'Service' as const,
    data: {
      name: 'PPL (Pay Per Lead Generation)',
      description:
        'Exclusive pre-qualified leads delivered on demand. No retainers, no contracts, no set-up fees. We fund your marketing. You only pay for results.',
      url: 'https://op.digital/ppl',
      serviceType: 'Lead Generation',
      provider: {
        '@type': 'Organization',
        name: 'One Percent Digital',
        url: 'https://op.digital',
      },
      areaServed: 'Worldwide',
    },
  };

  const faqSchema = getFAQSchema(faqs);
  const schemas = faqSchema ? [serviceSchema, faqSchema] : [serviceSchema];

  return (
    <div className="overflow-hidden">
      <SEO structuredData={schemas} />

      {/* Hero Section */}
      <section className="px-6 py-16 lg:py-20">
        <div className="mx-auto max-w-7xl">
          <div className="mx-auto max-w-4xl text-center">
            <h1 className="mb-6 font-extrabold text-5xl leading-[0.95] tracking-tighter lg:mb-8 lg:text-7xl xl:text-8xl">
              Exclusive Pre-Qualified Leads. Pay Only for Results.
            </h1>
            <p className="mx-auto mb-10 max-w-2xl text-muted-foreground leading-relaxed lg:text-lg">
              No retainers. No long-term contracts. No upfront fees. We fund
              your marketing and deliver pre-qualified leads in real-time. You
              only pay for prospects ready to buy.
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
            </div>
          </div>
        </div>
      </section>

      {/* What is Pay Per Lead Generation Section */}
      <section className="px-6 py-16 lg:py-20">
        <div className="mx-auto max-w-7xl">
          <div className="grid gap-12 lg:grid-cols-2 lg:gap-16">
            <div className="flex flex-col justify-center">
              <h2 className="mb-4 font-bold text-4xl leading-[1.1] tracking-tight lg:text-5xl">
                What is Pay Per Lead Generation?
              </h2>
              <p className="mb-4 text-muted-foreground leading-relaxed">
                PPL (Pay Per Lead Generation) is a results-based model where you
                only pay for qualified leads delivered to your business. We
                invest in your marketing campaigns (creating ads, landing pages,
                and conversion funnels) while you pay exclusively for prospects
                that meet your criteria.
              </p>
              <p className="mb-6 text-muted-foreground leading-relaxed">
                Unlike traditional agencies that charge monthly retainers
                regardless of results, our model aligns our success with yours.
                No qualified lead, no cost. It is the purest form of
                performance-based marketing.
              </p>
              <div className="grid gap-4 sm:grid-cols-3">
                <Card className="p-4">
                  <div className="mb-1 font-extrabold text-4xl tracking-tight lg:text-5xl">
                    100+
                  </div>
                  <div className="text-muted-foreground text-sm">
                    Businesses Served
                  </div>
                </Card>
                <Card className="p-4">
                  <div className="mb-1 font-extrabold text-4xl tracking-tight lg:text-5xl">
                    100%
                  </div>
                  <div className="text-muted-foreground text-sm">
                    Exclusive Leads
                  </div>
                </Card>
                <Card className="p-4">
                  <div className="mb-1 font-extrabold text-4xl tracking-tight lg:text-5xl">
                    $0
                  </div>
                  <div className="text-muted-foreground text-sm">
                    Set-Up Fees
                  </div>
                </Card>
              </div>
            </div>

            {/* Expanded Lead Pipeline Component */}
            <div className="flex items-center">
              <Card className="w-full gap-0 overflow-hidden py-0">
                <div className="flex items-center justify-between px-4 py-3">
                  <div className="flex items-center gap-2">
                    <HugeiconsIcon
                      icon={UserGroupIcon}
                      size={18}
                      className="text-primary"
                    />
                    <span className="font-medium text-sm">Lead Pipeline</span>
                  </div>
                  <span className="font-bold text-primary text-sm">
                    63 this week
                  </span>
                </div>
                <Separator />
                <div className="space-y-2 p-4">
                  {[
                    {
                      name: 'Thomas Hartley',
                      company: 'Financial Planning',
                      time: '2 min ago',
                    },
                    {
                      name: 'Frederick Mills',
                      company: 'Financial Planning',
                      time: '8 min ago',
                    },
                    {
                      name: 'Arthur Pemberton',
                      company: 'Financial Planning',
                      time: '15 min ago',
                    },
                    {
                      name: 'Edmund Sinclair',
                      company: 'Financial Planning',
                      time: '23 min ago',
                    },
                    {
                      name: 'Richard Caldwell',
                      company: 'Financial Planning',
                      time: '31 min ago',
                    },
                  ].map((lead) => (
                    <div
                      key={lead.name}
                      className="flex items-center gap-3 rounded-xl bg-muted/50 p-3"
                    >
                      <div className="flex size-10 shrink-0 items-center justify-center rounded-full bg-muted font-medium text-muted-foreground text-sm">
                        {lead.name
                          .split(' ')
                          .map((n) => n[0])
                          .join('')}
                      </div>
                      <div className="min-w-0 flex-1">
                        <div className="flex items-center gap-2">
                          <span className="truncate font-medium text-sm">
                            {lead.name}
                          </span>
                        </div>
                        <div className="flex items-center gap-2 text-muted-foreground text-xs">
                          <span className="truncate">{lead.company}</span>
                          <span>•</span>
                          <span className="shrink-0">{lead.time}</span>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
                <Separator />
                <div className="px-4 py-2.5 text-center">
                  <span className="text-muted-foreground text-xs">
                    Showing 5 of 63 leads
                  </span>
                </div>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* How It Works Section */}
      <section className="px-6 py-16 lg:py-20">
        <div className="mx-auto max-w-7xl">
          <div className="mb-12 text-center">
            <h2 className="mb-4 font-bold text-4xl leading-[1.1] tracking-tight lg:text-5xl">
              How It Works
            </h2>
            <p className="mx-auto max-w-3xl text-muted-foreground">
              From setup to qualified leads in your pipeline, we handle
              everything
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
                  <CardTitle>{step.title}</CardTitle>
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
              Why Pay Per Lead Generation
            </h2>
            <p className="mx-auto max-w-3xl text-muted-foreground">
              Eliminate risk and only pay for results that matter
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

      {/* Lead Quality Guarantee Section */}
      <section className="px-6 py-16 lg:py-20">
        <div className="mx-auto max-w-7xl">
          <div className="mb-12 text-center">
            <h2 className="mb-4 font-bold text-4xl leading-[1.1] tracking-tight lg:text-5xl">
              Lead Quality Guarantee
            </h2>
            <p className="mx-auto max-w-3xl text-muted-foreground">
              Unlike platforms that share leads or deliver unverified prospects,
              we validate everything before delivery
            </p>
          </div>
          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4">
            {leadQualityItems.map((item) => (
              <Card key={item.title}>
                <CardHeader>
                  <HugeiconsIcon
                    icon={item.icon}
                    size={28}
                    strokeWidth={1.5}
                    className="mb-2 text-primary"
                  />
                  <CardTitle>{item.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription className="leading-relaxed">
                    {item.description}
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
              What We Handle
            </h2>
            <p className="mx-auto max-w-3xl text-muted-foreground">
              End-to-end lead generation managed by our team
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
                Reliable Revenue, On Demand
              </h2>
              <p className="mb-6 text-muted-foreground leading-relaxed">
                Our clients have built predictable, scalable revenue streams by
                removing the uncertainty from lead generation. When you know
                exactly what each customer costs to acquire, growth becomes a
                simple equation.
              </p>
              <div className="grid gap-6 sm:grid-cols-2">
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
                    100%
                  </div>
                  <div className="text-muted-foreground text-sm">
                    Exclusive Leads
                  </div>
                </div>
                <div>
                  <div className="mb-1 font-extrabold text-4xl tracking-tight lg:text-5xl">
                    $0
                  </div>
                  <div className="text-muted-foreground text-sm">
                    Set-Up Fees
                  </div>
                </div>
                <div>
                  <div className="mb-1 font-extrabold text-4xl tracking-tight lg:text-5xl">
                    ∞
                  </div>
                  <div className="text-muted-foreground text-sm">
                    Scaling Potential
                  </div>
                </div>
              </div>
            </div>

            {/* Revenue Growth Graph */}
            <div className="flex items-center">
              <Card className="w-full gap-0 overflow-hidden py-0">
                <div className="flex items-center justify-between px-4 py-3">
                  <div className="flex items-center gap-2">
                    <HugeiconsIcon
                      icon={DollarCircleIcon}
                      size={18}
                      className="text-primary"
                    />
                    <span className="font-medium text-sm">
                      PPL Revenue Growth
                    </span>
                  </div>
                </div>
                <Separator />
                <div className="p-4">
                  {/* Main metric */}
                  <div className="mb-4">
                    <div className="font-extrabold text-3xl tracking-tight">
                      $20.4M
                    </div>
                    <div className="text-muted-foreground text-sm">
                      Total PPL Revenue Generated
                    </div>
                  </div>

                  {/* Graph with Y-axis */}
                  <div className="flex gap-2">
                    {/* Y-axis labels */}
                    <div className="flex flex-col justify-between py-1 text-muted-foreground text-xs">
                      <span>$25M</span>
                      <span>$20M</span>
                      <span>$15M</span>
                      <span>$10M</span>
                      <span>$5M</span>
                      <span>$0</span>
                    </div>

                    {/* SVG Graph - Exponential curve */}
                    <div className="flex-1">
                      <svg
                        viewBox="0 0 400 120"
                        className="h-32 w-full"
                        preserveAspectRatio="none"
                        aria-label="Revenue growth showing exponential increase"
                        role="img"
                      >
                        {/* Grid lines */}
                        <line
                          x1="0"
                          y1="24"
                          x2="400"
                          y2="24"
                          stroke="currentColor"
                          strokeWidth="1"
                          className="text-muted-foreground/20"
                        />
                        <line
                          x1="0"
                          y1="48"
                          x2="400"
                          y2="48"
                          stroke="currentColor"
                          strokeWidth="1"
                          className="text-muted-foreground/20"
                        />
                        <line
                          x1="0"
                          y1="72"
                          x2="400"
                          y2="72"
                          stroke="currentColor"
                          strokeWidth="1"
                          className="text-muted-foreground/20"
                        />
                        <line
                          x1="0"
                          y1="96"
                          x2="400"
                          y2="96"
                          stroke="currentColor"
                          strokeWidth="1"
                          className="text-muted-foreground/20"
                        />

                        {/* Exponential growth curve */}
                        <path
                          d="M0,115 C50,114 100,112 150,105 C200,95 250,70 300,35 C350,10 375,5 400,3"
                          fill="none"
                          stroke="currentColor"
                          strokeWidth="2.5"
                          className="text-primary"
                        />

                        {/* Fill under curve with gradient effect */}
                        <path
                          d="M0,115 C50,114 100,112 150,105 C200,95 250,70 300,35 C350,10 375,5 400,3 L400,120 L0,120 Z"
                          fill="currentColor"
                          className="text-primary/10"
                        />
                      </svg>

                      {/* X-axis labels */}
                      <div className="mt-2 flex justify-between text-muted-foreground text-xs">
                        <span>Q1</span>
                        <span>Q2</span>
                        <span>Q3</span>
                        <span>Q4</span>
                      </div>
                    </div>
                  </div>
                </div>
              </Card>
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
              Everything you need to know about pay per lead generation
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
            Stop Paying for Marketing That Does Not Convert
          </h2>
          <p className="mx-auto mb-8 max-w-xl text-muted-foreground">
            Your competitors are wasting budget on agencies with no
            accountability. With pay per lead generation, every dollar you spend
            delivers a qualified prospect ready to become a customer.
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
          </div>
        </div>
      </section>
    </div>
  );
}
