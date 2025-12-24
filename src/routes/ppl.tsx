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
import { generateMetaTags } from '@/lib/seo';

export const Route = createFileRoute('/ppl')({
  component: PayPerLeadPage,
  head: () =>
    generateMetaTags({
      title: 'PPL - Pay Per Lead Generation',
      description:
        'Exclusive pre-qualified leads delivered on demand. No retainers, no contracts, no set-up fees. We fund your marketing—you only pay for results.',
      url: 'https://onepercentseo.com/ppl',
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
      'Pre-qualified prospects are delivered to you in real-time via your preferred method—CRM, email, webhook, or custom integration.',
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
      'Start receiving qualified leads within 24 hours of setup. No waiting months for SEO to kick in or brand awareness to build.',
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
      'Your leads are never shared or resold. Every prospect goes directly to you—you are the first and only stop. No competing with other buyers for the same lead.',
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
      'We verify stated information—credit scores, asset sizes, budget ranges—before delivery. What prospects tell us is confirmed, not guessed.',
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
    question: 'How much does it cost per lead?',
    answer:
      'Lead pricing varies based on your industry, target audience, and qualification criteria. More specific targeting and higher-value leads command premium pricing. We will provide transparent pricing during our initial consultation based on your exact requirements.',
  },
  {
    question: 'How do you ensure leads are actually qualified?',
    answer:
      'Unlike platforms that share leads or deliver unverified information, we validate everything before delivery. Phone numbers are verified through one-time passcode confirmation—every number you receive is contactable. Stated qualifications like credit scores, 401k sizes, and budget ranges are validated against our criteria. Our longer intake quizzes filter out casual browsers, ensuring prospects are invested before they reach you. AI-assisted qualification and follow-up systems further increase lead quality and conversion rates.',
  },
  {
    question: 'How quickly can I start receiving leads?',
    answer:
      'Most clients start receiving qualified leads within 24 hours of campaign launch. The setup process—defining criteria, building landing pages, creating ads—typically takes 3-5 business days. Once live, leads flow immediately.',
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
      'We stand behind our qualification process. If a lead does not meet the agreed-upon criteria, we replace it at no charge. Our model only works when you succeed—we are invested in delivering leads that actually convert for your business.',
  },
];

function PayPerLeadPage() {
  const serviceSchema = {
    type: 'Service' as const,
    data: {
      name: 'PPL (Pay Per Lead Generation)',
      description:
        'Exclusive pre-qualified leads delivered on demand. No retainers, no contracts, no set-up fees. We fund your marketing—you only pay for results.',
      url: 'https://onepercentseo.com/ppl',
      serviceType: 'Lead Generation',
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
              Exclusive Pre-Qualified Leads. Pay Only for Results.
            </h1>
            <p className="mx-auto mb-8 max-w-2xl text-muted-foreground text-xl leading-relaxed tracking-wide lg:text-2xl">
              No retainers. No long-term contracts. No upfront fees. We fund
              your marketing and deliver pre-qualified leads in real-time—you
              only pay for prospects ready to buy.
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

      {/* What is Pay Per Lead Generation Section */}
      <section className="px-6 py-20 lg:py-32">
        <div className="mx-auto max-w-7xl">
          <div className="grid items-center gap-12 lg:grid-cols-2">
            <div>
              <h2 className="mb-4 font-bold text-4xl leading-[1.1] tracking-tight lg:text-6xl">
                What is PPL (Pay Per Lead Generation)?
              </h2>
              <p className="mt-6 text-lg text-muted-foreground leading-relaxed tracking-wide">
                Pay per lead generation is a results-based model where you only
                pay for qualified leads delivered to your business. We invest in
                your marketing campaigns—creating ads, landing pages, and
                conversion funnels—while you pay exclusively for prospects that
                meet your criteria.
              </p>
              <p className="mt-4 text-lg text-muted-foreground leading-relaxed tracking-wide">
                Unlike traditional agencies that charge monthly retainers
                regardless of results, our model aligns our success with yours.
                No qualified lead, no cost. It is the purest form of
                performance-based marketing.
              </p>
              <div className="mt-8 grid gap-4 sm:grid-cols-3">
                <div className="rounded-xl bg-card p-4 ring-1 ring-foreground/10">
                  <div className="font-extrabold text-3xl text-primary tracking-tight">
                    100+
                  </div>
                  <div className="mt-1 text-muted-foreground text-sm tracking-wide">
                    Businesses Served
                  </div>
                </div>
                <div className="rounded-xl bg-card p-4 ring-1 ring-foreground/10">
                  <div className="font-extrabold text-3xl text-primary tracking-tight">
                    100%
                  </div>
                  <div className="mt-1 text-muted-foreground text-sm tracking-wide">
                    Exclusive Leads
                  </div>
                </div>
                <div className="rounded-xl bg-card p-4 ring-1 ring-foreground/10">
                  <div className="font-extrabold text-3xl text-primary tracking-tight">
                    $0
                  </div>
                  <div className="mt-1 text-muted-foreground text-sm tracking-wide">
                    Set-Up Fees
                  </div>
                </div>
              </div>
            </div>
            <div className="relative aspect-video overflow-hidden rounded-2xl">
              <div className="absolute inset-0 z-30 bg-primary opacity-50 mix-blend-color" />
              <img
                src="https://images.unsplash.com/photo-1553877522-43269d4ea984?w=800&h=450&fit=crop"
                alt="Business meeting and lead generation"
                className="relative z-20 h-full w-full object-cover brightness-[0.6] grayscale"
              />
            </div>
          </div>
        </div>
      </section>

      {/* How It Works Section */}
      <section className="px-6 py-24">
        <div className="mx-auto max-w-7xl">
          <div className="mb-16 text-center">
            <h2 className="font-bold text-4xl tracking-tight lg:text-6xl">
              How It Works
            </h2>
            <p className="mx-auto mt-4 max-w-3xl text-lg text-muted-foreground tracking-wide">
              From setup to qualified leads in your pipeline—we handle
              everything
            </p>
          </div>
          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4">
            {processSteps.map((step) => (
              <div
                key={step.number}
                className="group rounded-2xl bg-card p-8 ring-1 ring-foreground/10 transition-all hover:shadow-lg hover:shadow-primary/10 hover:ring-primary/50"
              >
                <div className="mb-4 flex items-start justify-between">
                  <div className="font-bold text-4xl text-primary">
                    {step.number}
                  </div>
                  <HugeiconsIcon
                    icon={step.icon}
                    size={24}
                    strokeWidth={1.5}
                    className="text-muted-foreground"
                  />
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
              Why Pay Per Lead Generation
            </h2>
            <p className="mx-auto mt-4 max-w-3xl text-lg text-muted-foreground tracking-wide">
              Eliminate risk and only pay for results that matter
            </p>
          </div>
          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
            {benefits.map((benefit) => (
              <div
                key={benefit.title}
                className="rounded-2xl bg-card p-8 ring-1 ring-foreground/10"
              >
                <HugeiconsIcon
                  icon={benefit.icon}
                  size={32}
                  strokeWidth={1.5}
                  className="mb-4 text-primary"
                />
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

      {/* Lead Quality Guarantee Section */}
      <section className="px-6 py-24">
        <div className="mx-auto max-w-7xl">
          <div className="mb-16 text-center">
            <h2 className="font-bold text-4xl tracking-tight lg:text-6xl">
              Lead Quality Guarantee
            </h2>
            <p className="mx-auto mt-4 max-w-3xl text-lg text-muted-foreground tracking-wide">
              Unlike platforms that share leads or deliver unverified prospects,
              we validate everything before delivery
            </p>
          </div>
          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4">
            {leadQualityItems.map((item) => (
              <div
                key={item.title}
                className="rounded-2xl bg-card p-8 ring-1 ring-foreground/10"
              >
                <HugeiconsIcon
                  icon={item.icon}
                  size={32}
                  strokeWidth={1.5}
                  className="mb-4 text-primary"
                />
                <h3 className="mb-3 font-bold text-xl lg:text-2xl">
                  {item.title}
                </h3>
                <p className="text-muted-foreground leading-relaxed tracking-wide">
                  {item.description}
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
              What We Handle
            </h2>
            <p className="mx-auto mt-4 max-w-3xl text-lg text-muted-foreground tracking-wide">
              End-to-end lead generation managed by our team
            </p>
          </div>
          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
            {services.map((service) => (
              <div
                key={service.title}
                className="rounded-2xl bg-card p-8 ring-1 ring-foreground/10"
              >
                <HugeiconsIcon
                  icon={service.icon}
                  size={32}
                  strokeWidth={1.5}
                  className="mb-4 text-primary"
                />
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
                Reliable Revenue, On Demand
              </h2>
              <p className="mt-6 text-lg text-muted-foreground leading-relaxed tracking-wide">
                Our clients have built predictable, scalable revenue streams by
                removing the uncertainty from lead generation. When you know
                exactly what each customer costs to acquire, growth becomes a
                simple equation.
              </p>
              <div className="mt-8 grid gap-6 sm:grid-cols-2">
                <div>
                  <div className="font-extrabold text-5xl text-primary tracking-tight lg:text-7xl">
                    100+
                  </div>
                  <div className="mt-2 text-muted-foreground tracking-wide">
                    Businesses Served
                  </div>
                </div>
                <div>
                  <div className="font-extrabold text-5xl text-primary tracking-tight lg:text-7xl">
                    100%
                  </div>
                  <div className="mt-2 text-muted-foreground tracking-wide">
                    Exclusive Leads
                  </div>
                </div>
                <div>
                  <div className="font-extrabold text-5xl text-primary tracking-tight lg:text-7xl">
                    $0
                  </div>
                  <div className="mt-2 text-muted-foreground tracking-wide">
                    Set-Up Fees
                  </div>
                </div>
                <div>
                  <div className="font-extrabold text-5xl text-primary tracking-tight lg:text-7xl">
                    ∞
                  </div>
                  <div className="mt-2 text-muted-foreground tracking-wide">
                    Scaling Potential
                  </div>
                </div>
              </div>
            </div>
            <div className="relative aspect-video overflow-hidden rounded-2xl">
              <div className="absolute inset-0 z-30 bg-primary opacity-50 mix-blend-color" />
              <img
                src="https://images.unsplash.com/photo-1552664730-d307ca884978?w=800&h=450&fit=crop"
                alt="Team collaboration and lead pipeline"
                className="relative z-20 h-full w-full object-cover brightness-[0.6] grayscale"
              />
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
      <section className="relative overflow-hidden bg-background px-6 py-20 lg:py-32">
        <div className="mx-auto max-w-4xl text-center">
          <h2 className="font-bold text-4xl tracking-tight lg:text-6xl">
            Stop Paying for Marketing That Does Not Convert
          </h2>
          <p className="mx-auto mt-6 max-w-2xl text-lg text-muted-foreground leading-relaxed tracking-wide">
            Your competitors are wasting budget on agencies with no
            accountability. With pay per lead generation, every dollar you spend
            delivers a qualified prospect ready to become a customer.
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
