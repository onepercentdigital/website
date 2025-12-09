import { createFileRoute, Link } from '@tanstack/react-router';
import {
  ArrowRight,
  Award,
  BarChart3,
  Brain,
  CheckCircle2,
  Globe,
  Lightbulb,
  MessageSquare,
  Shield,
  Sparkles,
  Target,
  TrendingUp,
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

export const Route = createFileRoute('/geo')({
  component: GEOPage,
  head: () =>
    generateMetaTags({
      title: 'GEO - Generative Engine Optimization',
      description:
        'Lead AI search results and capture mind share. Position your brand at the forefront of ChatGPT, Claude, Perplexity, and other generative AI platforms.',
      url: 'https://onepercentseo.com/geo',
    }),
});

function GEOPage() {
  const serviceSchema = {
    type: 'Service' as const,
    data: {
      name: 'Generative Engine Optimization (GEO)',
      description:
        'Lead AI search results and capture mind share. Position your brand at the forefront of ChatGPT, Claude, Perplexity, and other generative AI platforms.',
      url: 'https://onepercentseo.com/geo',
      serviceType: 'Generative Engine Optimization',
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
              Lead AI Search Results and Capture Mind Share
            </h1>
            <p className="mx-auto mb-8 max-w-2xl text-muted-foreground text-xl leading-relaxed tracking-wide lg:text-2xl">
              Position your brand at the forefront of ChatGPT, Claude,
              Perplexity, and other generative AI platforms. Be the answer when
              AI recommends solutions.
            </p>
            <div className="flex flex-col items-center justify-center gap-4 sm:flex-row">
              <Button
                asChild
                size="lg"
                className="bg-accent text-accent-foreground hover:bg-accent/90"
              >
                <Link to="/apply">
                  Get Your Free GEO Audit
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

      {/* What is GEO Section */}
      <section className="px-6 py-20 lg:py-32">
        <div className="mx-auto max-w-7xl">
          <div className="grid items-center gap-12 lg:grid-cols-2">
            <div>
              <h2 className="mb-4 font-bold text-4xl leading-[1.1] tracking-tight lg:text-6xl">
                What is Generative Engine Optimization?
              </h2>
              <p className="mt-6 text-lg text-muted-foreground leading-relaxed tracking-wide">
                GEO (Generative Engine Optimization) is the practice of
                optimizing your brand's digital presence to be featured,
                recommended, and cited by AI-powered search engines and chatbots
                like ChatGPT, Claude, Perplexity, and Gemini.
              </p>
              <p className="mt-4 text-lg text-muted-foreground leading-relaxed tracking-wide">
                Unlike traditional search where users click links, AI engines
                synthesize information and provide direct answers. GEO ensures
                your brand becomes the authoritative source that AI systems
                trust and reference.
              </p>
              <div className="mt-8 grid gap-4 sm:grid-cols-3">
                <div className="rounded-xl border border-border bg-card p-4">
                  <div className="font-extrabold text-3xl text-accent tracking-tight">
                    400%
                  </div>
                  <div className="mt-1 text-muted-foreground text-sm tracking-wide">
                    Increase in AI Searches Monthly
                  </div>
                </div>
                <div className="rounded-xl border border-border bg-card p-4">
                  <div className="font-extrabold text-3xl text-accent tracking-tight">
                    1000%
                  </div>
                  <div className="mt-1 text-muted-foreground text-sm tracking-wide">
                    Brand Visibility Growth
                  </div>
                </div>
                <div className="rounded-xl border border-border bg-card p-4">
                  <div className="font-extrabold text-3xl text-accent tracking-tight">
                    First
                  </div>
                  <div className="mt-1 text-muted-foreground text-sm tracking-wide">
                    Mover Advantage
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
              Our GEO Process
            </h2>
            <p className="mx-auto mt-4 max-w-3xl text-lg text-muted-foreground tracking-wide">
              A systematic approach to dominating AI-powered search results
            </p>
          </div>
          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4">
            {[
              {
                number: '01',
                icon: Target,
                title: 'AI Research',
                description:
                  'We analyze how AI engines currently perceive your brand and identify optimization opportunities across ChatGPT, Claude, Perplexity, and Gemini.',
              },
              {
                number: '02',
                icon: Lightbulb,
                title: 'Content Optimization',
                description:
                  'Optimize existing content and create new authoritative resources structured for AI comprehension and citation.',
              },
              {
                number: '03',
                icon: Globe,
                title: 'Authority Building',
                description:
                  'Build entity relationships, structured data, and high-quality citations that AI systems recognize as trustworthy sources.',
              },
              {
                number: '04',
                icon: BarChart3,
                title: 'Monitoring & Refinement',
                description:
                  'Track AI citations, brand mentions, and recommendation frequency. Continuously refine strategy based on AI behavior.',
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
              Why GEO Matters Now
            </h2>
            <p className="mx-auto mt-4 max-w-3xl text-lg text-muted-foreground tracking-wide">
              The future of search is conversational. Be ready.
            </p>
          </div>
          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
            {[
              {
                icon: Zap,
                title: 'First-Mover Advantage',
                description:
                  "Most brands haven't optimized for AI search yet. Establish dominance before your competitors catch on.",
              },
              {
                icon: TrendingUp,
                title: 'Exponential Visibility',
                description:
                  'One AI citation can reach millions of users. Your brand becomes the default recommendation.',
              },
              {
                icon: Shield,
                title: 'Future-Proof Strategy',
                description:
                  'AI search is growing 400% year-over-year. Position your brand for the next decade of search.',
              },
              {
                icon: Users,
                title: 'Trust & Authority',
                description:
                  'Being cited by AI systems establishes your brand as the authoritative source in your industry.',
              },
              {
                icon: MessageSquare,
                title: 'Direct Engagement',
                description:
                  'AI delivers your brand directly in conversation, bypassing traditional search result competition.',
              },
              {
                icon: Award,
                title: 'Measurable Impact',
                description:
                  'Track AI citations, brand mentions, and recommendation frequency across all major platforms.',
              },
            ].map((benefit) => (
              <div
                key={benefit.title}
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
              What's Included
            </h2>
            <p className="mx-auto mt-4 max-w-3xl text-lg text-muted-foreground tracking-wide">
              Comprehensive GEO services to dominate AI search
            </p>
          </div>
          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
            {[
              {
                icon: Brain,
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
                icon: Sparkles,
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
                icon: Globe,
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
                icon: Target,
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
                icon: BarChart3,
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
                icon: Lightbulb,
                title: 'Strategy & Consulting',
                features: [
                  'Quarterly GEO strategy sessions',
                  'AI trend analysis and reporting',
                  'Content recommendations',
                  'Emerging platform evaluation',
                  'Executive briefings',
                ],
              },
            ].map((service) => (
              <div
                key={service.title}
                className="rounded-2xl border border-border bg-card p-8"
              >
                <div className="mb-4 inline-flex rounded-lg bg-accent/10 p-3">
                  <service.icon className="size-6 text-accent" />
                </div>
                <h3 className="mb-4 font-bold text-xl lg:text-2xl">
                  {service.title}
                </h3>
                <ul className="space-y-2">
                  {service.features.map((feature) => (
                    <li key={feature} className="flex items-start gap-2">
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
                Real Results from GEO
              </h2>
              <p className="mt-6 text-lg text-muted-foreground leading-relaxed tracking-wide">
                Our clients are being cited and recommended by AI engines daily,
                establishing category dominance before their competitors even
                understand what GEO means.
              </p>
              <div className="mt-8 grid gap-6 sm:grid-cols-2">
                <div>
                  <div className="font-extrabold text-5xl text-accent tracking-tight lg:text-7xl">
                    400%
                  </div>
                  <div className="mt-2 text-muted-foreground tracking-wide">
                    Increase in AI Searches Monthly
                  </div>
                </div>
                <div>
                  <div className="font-extrabold text-5xl text-accent tracking-tight lg:text-7xl">
                    1000%
                  </div>
                  <div className="mt-2 text-muted-foreground tracking-wide">
                    Brand Visibility Growth
                  </div>
                </div>
              </div>
              <div className="mt-10 rounded-2xl border border-border bg-card p-6">
                <p className="text-muted-foreground italic leading-relaxed tracking-wide">
                  "One Percent SEO helped us become the go-to recommendation in
                  ChatGPT for diesel injection pumps. When AI platforms
                  recommend you by name, that's when you know you've made it."
                </p>
                <div className="mt-4 flex items-center gap-3">
                  <div className="flex size-12 items-center justify-center rounded-full bg-accent/10">
                    <Users className="size-6 text-accent" />
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
              Everything you need to know about GEO
            </p>
          </div>
          <Accordion type="single" collapsible className="w-full">
            <AccordionItem value="item-1">
              <AccordionTrigger className="text-left font-semibold text-lg">
                How is GEO different from traditional SEO?
              </AccordionTrigger>
              <AccordionContent className="text-muted-foreground">
                Traditional SEO focuses on ranking in search engine results
                pages where users click links. GEO optimizes for AI engines that
                synthesize information and provide direct answers. Instead of
                competing for clicks, you're ensuring your brand is the
                authoritative source that AI systems cite and recommend. Both
                are essential for comprehensive digital visibility.
              </AccordionContent>
            </AccordionItem>
            <AccordionItem value="item-2">
              <AccordionTrigger className="text-left font-semibold text-lg">
                Which AI platforms do you optimize for?
              </AccordionTrigger>
              <AccordionContent className="text-muted-foreground">
                We optimize for all major generative AI platforms including
                ChatGPT (OpenAI), Claude (Anthropic), Perplexity, Gemini
                (Google), Microsoft Copilot, and emerging platforms. Our
                strategy is platform-agnostic, focusing on fundamental authority
                building that works across all AI systems.
              </AccordionContent>
            </AccordionItem>
            <AccordionItem value="item-3">
              <AccordionTrigger className="text-left font-semibold text-lg">
                How long does it take to see results?
              </AccordionTrigger>
              <AccordionContent className="text-muted-foreground">
                Initial AI citations typically appear within 6-8 weeks. However,
                GEO is an ongoing strategy. The first-mover advantage means
                early adopters establish dominance that becomes increasingly
                difficult for competitors to overcome. Most clients see
                significant improvements in AI visibility within 3-4 months.
              </AccordionContent>
            </AccordionItem>
            <AccordionItem value="item-4">
              <AccordionTrigger className="text-left font-semibold text-lg">
                Can GEO work alongside our existing SEO strategy?
              </AccordionTrigger>
              <AccordionContent className="text-muted-foreground">
                Absolutely. GEO and SEO are complementary strategies. Many
                optimizations (like structured data, authoritative content, and
                entity building) benefit both traditional search engines and AI
                platforms. We design our GEO strategy to enhance, not replace,
                your existing SEO efforts.
              </AccordionContent>
            </AccordionItem>
            <AccordionItem value="item-5">
              <AccordionTrigger className="text-left font-semibold text-lg">
                How do you measure GEO success?
              </AccordionTrigger>
              <AccordionContent className="text-muted-foreground">
                We track AI citation frequency, brand mention sentiment,
                recommendation positioning, and share of voice across AI
                platforms. Our custom monitoring tools query AI engines with
                industry-relevant prompts and track when and how your brand is
                referenced. You'll receive monthly reports with clear metrics
                and competitive benchmarking.
              </AccordionContent>
            </AccordionItem>
            <AccordionItem value="item-6">
              <AccordionTrigger className="text-left font-semibold text-lg">
                Is GEO worth it if AI search is still emerging?
              </AccordionTrigger>
              <AccordionContent className="text-muted-foreground">
                This is precisely why GEO is critical now. AI search is growing
                400% year-over-year, and early adopters are establishing
                category authority that will be difficult to displace. By the
                time AI search becomes mainstream, you want to already be the
                default recommendation—not fighting for visibility against
                established competitors.
              </AccordionContent>
            </AccordionItem>
          </Accordion>
        </div>
      </section>

      {/* Final CTA Section */}
      <section className="relative overflow-hidden bg-background px-6 py-20 lg:py-32">
        <div className="mx-auto max-w-4xl text-center">
          <h2 className="font-bold text-4xl tracking-tight lg:text-6xl">
            Dominate AI Search Before Your Competitors Do
          </h2>
          <p className="mx-auto mt-6 max-w-2xl text-lg text-muted-foreground leading-relaxed tracking-wide">
            The window of opportunity is closing. Early movers in GEO are
            establishing category dominance that will compound for years. Don't
            let your competitors define your category to AI.
          </p>
          <div className="mt-10">
            <Button
              asChild
              size="lg"
              className="bg-accent text-accent-foreground hover:bg-accent/90"
            >
              <Link to="/apply">
                Get Your Free GEO Audit
                <ArrowRight className="ml-2 h-5 w-5" />
              </Link>
            </Button>
          </div>
          <p className="mt-6 text-muted-foreground text-sm tracking-wide">
            Free comprehensive audit • No obligation • Custom strategy preview
          </p>
        </div>
      </section>
    </div>
  );
}
