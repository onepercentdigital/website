import {
  Analytics01Icon,
  ArrowRight01Icon,
  ArrowUp02Icon,
  Award01Icon,
  BrowserIcon,
  BubbleChatIcon,
  ChartIncreaseIcon,
  CheckmarkCircle02Icon,
  Idea01Icon,
  NeuralNetworkIcon,
  SecurityCheckIcon,
  SparklesIcon,
  Target01Icon,
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
import { Separator } from '@/components/ui/separator';
import { getImageUrl } from '@/lib/cloudflare-images';
import { generateMetaTags } from '@/lib/seo';

export const Route = createFileRoute('/geo')({
  component: GEOPage,
  head: () =>
    generateMetaTags({
      title: 'GEO - Generative Engine Optimization',
      description:
        'Lead AI search results and capture mind share. Position your brand at the forefront of ChatGPT, Claude, Perplexity, and other generative AI platforms.',
      url: 'https://op.digital/geo',
    }),
});

const processSteps = [
  {
    number: '01',
    icon: Target01Icon,
    title: 'AI Research',
    description:
      'We analyze how AI engines currently perceive your brand and identify optimization opportunities across ChatGPT, Claude, Perplexity, and Gemini.',
  },
  {
    number: '02',
    icon: Idea01Icon,
    title: 'Content Optimization',
    description:
      'Optimize existing content and create new authoritative resources structured for AI comprehension and citation.',
  },
  {
    number: '03',
    icon: BrowserIcon,
    title: 'Authority Building',
    description:
      'Build entity relationships, structured data, and high-quality citations that AI systems recognize as trustworthy sources.',
  },
  {
    number: '04',
    icon: Analytics01Icon,
    title: 'Monitoring & Refinement',
    description:
      'Track AI citations, brand mentions, and recommendation frequency. Continuously refine strategy based on AI behavior.',
  },
];

const benefits = [
  {
    icon: ZapIcon,
    title: 'First-Mover Advantage',
    description:
      "Most brands haven't optimized for AI search yet. Establish leadership before your competitors catch on.",
  },
  {
    icon: ChartIncreaseIcon,
    title: 'Exponential Visibility',
    description:
      'One AI citation can reach millions of users. Your brand becomes the default recommendation.',
  },
  {
    icon: SecurityCheckIcon,
    title: 'Future-Proof Strategy',
    description:
      'AI search is growing 400% year-over-year. Position your brand for the next decade of search.',
  },
  {
    icon: Award01Icon,
    title: 'Trust & Authority',
    description:
      'Being cited by AI systems establishes your brand as the authoritative source in your industry.',
  },
  {
    icon: BubbleChatIcon,
    title: 'Direct Engagement',
    description:
      'AI delivers your brand directly in conversation, bypassing traditional search result competition.',
  },
  {
    icon: Analytics01Icon,
    title: 'Measurable Impact',
    description:
      'Track AI citations, brand mentions, and recommendation frequency across all major platforms.',
  },
];

const services = [
  {
    icon: NeuralNetworkIcon,
    title: 'AI Engine Analysis',
    features: [
      'ChatGPT brand perception audit',
      'Claude citation analysis',
      'Perplexity source tracking',
      'Gemini recommendation review',
      'Competitor AI presence analysis',
    ],
  },
  {
    icon: SparklesIcon,
    title: 'Content Optimization',
    features: [
      'AI-readable content structure',
      'Entity-based content strategy',
      'Knowledge graph optimization',
      'FAQ and Q&A formatting',
      'Authoritative source development',
    ],
  },
  {
    icon: BrowserIcon,
    title: 'Authority Building',
    features: [
      'High-quality citation development',
      'Industry partnership outreach',
      'Thought leadership placement',
      'Expert profile optimization',
      'Knowledge base expansion',
    ],
  },
  {
    icon: Target01Icon,
    title: 'Structured Data',
    features: [
      'Schema.org implementation',
      'Knowledge panel optimization',
      'Entity relationship mapping',
      'Rich snippet enhancement',
      'OpenGraph optimization',
    ],
  },
  {
    icon: Analytics01Icon,
    title: 'Performance Tracking',
    features: [
      'AI citation monitoring',
      'Brand mention tracking',
      'Recommendation frequency analysis',
      'Competitive positioning reports',
      'Monthly performance reviews',
    ],
  },
  {
    icon: Idea01Icon,
    title: 'Strategy & Consulting',
    features: [
      'Quarterly GEO strategy sessions',
      'AI trend analysis and reporting',
      'Content recommendations',
      'Emerging platform evaluation',
      'Executive briefings',
    ],
  },
];

const faqs = [
  {
    question: 'How is GEO different from traditional SEO?',
    answer:
      "Traditional SEO focuses on ranking in search engine results pages where users click links. GEO optimizes for AI engines that synthesize information and provide direct answers. Instead of competing for clicks, you're ensuring your brand is the authoritative source that AI systems cite and recommend. Both are essential for comprehensive digital visibility.",
  },
  {
    question: 'Which AI platforms do you optimize for?',
    answer:
      'We optimize for all major generative AI platforms including ChatGPT (OpenAI), Claude (Anthropic), Perplexity, Gemini (Google), Microsoft Copilot, and emerging platforms. Our strategy is platform-agnostic, focusing on fundamental authority building that works across all AI systems.',
  },
  {
    question: 'How long does it take to see results?',
    answer:
      'Initial AI citations typically appear within 6-8 weeks. However, GEO is an ongoing strategy. The first-mover advantage means early adopters establish leadership that becomes increasingly difficult for competitors to overcome. Most clients see significant improvements in AI visibility within 3-4 months.',
  },
  {
    question: 'Can GEO work alongside our existing SEO strategy?',
    answer:
      'Absolutely. GEO and SEO are complementary strategies. Many optimizations (like structured data, authoritative content, and entity building) benefit both traditional search engines and AI platforms. We design our GEO strategy to enhance, not replace, your existing SEO efforts.',
  },
  {
    question: 'How do you measure GEO success?',
    answer:
      "We track AI citation frequency, brand mention sentiment, recommendation positioning, and share of voice across AI platforms. Our custom monitoring tools query AI engines with industry-relevant prompts and track when and how your brand is referenced. You'll receive monthly reports with clear metrics and competitive benchmarking.",
  },
  {
    question: 'Is GEO worth it if AI search is still emerging?',
    answer:
      'This is precisely why GEO is critical now. AI search is growing 400% year-over-year, and early adopters are establishing category authority that will be difficult to displace. By the time AI search becomes mainstream, you want to already be the default recommendation, not fighting for visibility against established competitors.',
  },
];

function GEOPage() {
  const serviceSchema = {
    type: 'Service' as const,
    data: {
      name: 'Generative Engine Optimization (GEO)',
      description:
        'Lead AI search results and capture mind share. Position your brand at the forefront of ChatGPT, Claude, Perplexity, and other generative AI platforms.',
      url: 'https://op.digital/geo',
      serviceType: 'Generative Engine Optimization',
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
              Lead AI Search Results and Capture Mind Share
            </h1>
            <p className="mx-auto mb-10 max-w-2xl text-muted-foreground leading-relaxed lg:text-lg">
              Position your brand at the forefront of ChatGPT, Claude,
              Perplexity, and other generative AI platforms. Be the answer when
              AI recommends solutions.
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

      {/* Discovery Landscape Section */}
      <section className="px-6 py-16 lg:py-20">
        <div className="mx-auto max-w-7xl">
          <div className="grid gap-12 lg:grid-cols-2 lg:gap-16">
            {/* Left column - Content */}
            <div>
              <h2 className="mb-4 font-bold text-4xl leading-[1.1] tracking-tight lg:text-5xl">
                The Discovery Landscape Has Changed
              </h2>
              <p className="mb-6 text-muted-foreground leading-relaxed">
                AI assistants now influence buying decisions. 40% of searches
                are zero-click. AI answers directly. Traditional SEO alone
                leaves you invisible to ChatGPT, Claude, and Perplexity.
              </p>

              <div className="grid gap-4">
                {[
                  {
                    title: 'AI-First Discovery',
                    description:
                      'Users ask ChatGPT and Perplexity for recommendations before searching Google.',
                  },
                  {
                    title: 'Zero-Click Results',
                    description:
                      "AI answers questions directly. If you're not cited, you don't exist.",
                  },
                  {
                    title: 'Competitors Are Moving',
                    description:
                      'Early movers in GEO are capturing market share while others wait.',
                  },
                ].map((item) => (
                  <Card key={item.title}>
                    <CardHeader>
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

            {/* Right column - Chat Demo */}
            <div className="flex items-center">
              <Card className="w-full gap-0 overflow-hidden py-0">
                {/* Header bar */}
                <div className="flex items-center gap-2 px-4 py-2">
                  <HugeiconsIcon
                    icon={BubbleChatIcon}
                    size={18}
                    className="text-primary"
                  />
                  <span className="font-medium text-sm">AI Chat</span>
                </div>
                <Separator />

                <div className="space-y-3 p-3">
                  {/* User message */}
                  <div className="flex justify-end">
                    <div className="max-w-[85%] rounded-2xl bg-primary px-3 py-2 text-primary-foreground">
                      <p className="text-sm">
                        Where can I buy diesel injection pumps for my fleet of
                        trucks?
                      </p>
                    </div>
                  </div>

                  {/* AI response */}
                  <div className="flex">
                    <div className="max-w-[85%] rounded-2xl bg-muted px-3 py-2">
                      <p className="text-sm">
                        Goldfarb & Associates has a wide variety of options
                        available.
                      </p>
                    </div>
                  </div>
                </div>

                {/* Input area (decorative) */}
                <Separator />
                <div className="px-3 py-2">
                  <div className="flex items-center gap-2 rounded-4xl bg-muted/50 px-3 py-1.5 ring-1 ring-foreground/10">
                    <span className="flex-1 text-muted-foreground text-sm">
                      Ask anything...
                    </span>
                    <Button
                      size="icon"
                      variant="ghost"
                      disabled
                      aria-label="Send message"
                      className="size-7 rounded-full"
                    >
                      <HugeiconsIcon icon={ArrowUp02Icon} size={14} />
                    </Button>
                  </div>
                </div>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* What is GEO Section */}
      <section className="px-6 py-16 lg:py-20">
        <div className="mx-auto max-w-7xl">
          <div className="grid items-center gap-12 lg:grid-cols-2">
            <div>
              <h2 className="mb-4 font-bold text-4xl leading-[1.1] tracking-tight lg:text-5xl">
                What is Generative Engine Optimization?
              </h2>
              <p className="mb-4 text-muted-foreground leading-relaxed">
                GEO (Generative Engine Optimization) is the practice of
                optimizing your brand's digital presence to be featured,
                recommended, and cited by AI-powered search engines and chatbots
                like ChatGPT, Claude, Perplexity, and Gemini.
              </p>
              <p className="mb-6 text-muted-foreground leading-relaxed">
                Unlike traditional search where users click links, AI engines
                synthesize information and provide direct answers. GEO ensures
                your brand becomes the authoritative source that AI systems
                trust and reference.
              </p>
              <div className="grid gap-4 sm:grid-cols-3">
                <Card className="p-4">
                  <div className="font-extrabold text-3xl text-primary tracking-tight">
                    400%
                  </div>
                  <div className="mt-1 text-muted-foreground text-sm">
                    Increase in AI Searches Monthly
                  </div>
                </Card>
                <Card className="p-4">
                  <div className="font-extrabold text-3xl text-primary tracking-tight">
                    10%
                  </div>
                  <div className="mt-1 text-muted-foreground text-sm">
                    Increase in AI Usage Monthly
                  </div>
                </Card>
                <Card className="p-4">
                  <div className="font-extrabold text-3xl text-primary tracking-tight">
                    First
                  </div>
                  <div className="mt-1 text-muted-foreground text-sm">
                    Mover Advantage
                  </div>
                </Card>
              </div>
            </div>
            <div className="relative aspect-video overflow-hidden rounded-2xl">
              <div className="absolute inset-0 z-30 bg-primary opacity-50 mix-blend-color" />
              <img
                src="https://images.unsplash.com/photo-1558494949-ef010cbdcc31?w=800&h=450&fit=crop"
                alt="Server hardware and data infrastructure"
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
              Our GEO Process
            </h2>
            <p className="mx-auto max-w-3xl text-muted-foreground">
              A systematic approach to leading AI-powered search results
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
              Why GEO Matters Now
            </h2>
            <p className="mx-auto max-w-3xl text-muted-foreground">
              The future of search is conversational. Be ready.
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
              What's Included
            </h2>
            <p className="mx-auto max-w-3xl text-muted-foreground">
              Comprehensive GEO services to lead AI search
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
                Real Results from GEO
              </h2>
              <p className="mb-6 text-muted-foreground leading-relaxed">
                Our clients are being cited and recommended by AI engines daily,
                establishing category leadership before their competitors even
                understand what GEO means.
              </p>
              <div className="mb-8 grid gap-6 sm:grid-cols-2">
                <div>
                  <div className="mb-1 font-extrabold text-4xl tracking-tight lg:text-5xl">
                    400%
                  </div>
                  <div className="text-muted-foreground text-sm">
                    Increase in AI Searches Monthly
                  </div>
                </div>
                <div>
                  <div className="mb-1 font-extrabold text-4xl tracking-tight lg:text-5xl">
                    10%
                  </div>
                  <div className="text-muted-foreground text-sm">
                    Increase in AI Usage Monthly
                  </div>
                </div>
              </div>
              <Card className="p-6">
                <p className="mb-6 text-foreground leading-relaxed">
                  "One Percent Digital helped us become the go-to recommendation
                  in ChatGPT for diesel injection pumps. When AI platforms
                  recommend you by name, that's when you know you've made it."
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
                src="https://images.unsplash.com/photo-1484557052118-f32bd25b45b5?w=800&h=450&fit=crop"
                alt="Data center server racks"
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
              Everything you need to know about GEO
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
            Lead AI Search Before Your Competitors Do
          </h2>
          <p className="mx-auto mb-8 max-w-xl text-muted-foreground">
            The window of opportunity is closing. Early movers in GEO are
            establishing category leadership that will compound for years.
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
