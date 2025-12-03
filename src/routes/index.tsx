import { createFileRoute, Link } from '@tanstack/react-router';
import {
  ArrowRight,
  Award,
  Brain,
  CheckCircle2,
  Target,
  TrendingUp,
  Users,
} from 'lucide-react';
import { SEO } from '@/components/SEO';
import { Button } from '@/components/ui/button';
import {
  generateMetaTags,
  getLocalBusinessSchema,
  getOrganizationSchema,
} from '@/lib/seo';

export const Route = createFileRoute('/')({
  component: HomePage,
  head: () =>
    generateMetaTags({
      title: 'Takeover Your Industry With AI and Search Optimization',
      description:
        'Dominate Both AI and Traditional Search with proven GEO and SEO strategies.',
      url: 'https://onepercentseo.com/',
    }),
});

function HomePage() {
  return (
    <>
      {/* Structured Data */}
      <SEO
        structuredData={[
          { type: 'Organization', data: getOrganizationSchema() },
          { type: 'LocalBusiness', data: getLocalBusinessSchema() },
        ]}
      />

      {/* Hero Section */}
      <section className="relative overflow-hidden bg-background px-6 py-12 lg:py-16">
        <div className="mx-auto max-w-7xl">
          <div className="mx-auto max-w-4xl text-center">
            <h1 className="mb-6 font-extrabold text-5xl leading-[0.95] tracking-tighter lg:text-7xl xl:text-8xl">
              Dominate AI and Traditional Search
            </h1>
            <p className="mx-auto mb-8 max-w-2xl text-muted-foreground text-xl leading-relaxed tracking-wide lg:text-2xl">
              Your customers search on Google, ask ChatGPT, and use AI
              Overviews. We make you the authoritative answer in all three.
            </p>
            <div className="flex flex-col items-center justify-center gap-4 sm:flex-row">
              <Button
                asChild
                size="lg"
                className="bg-accent text-accent-foreground hover:bg-accent/90"
              >
                <Link to="/apply">
                  Apply To Work With Us
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

      {/* Services Overview Section */}
      <section className="px-6 py-20 lg:py-32">
        <div className="mx-auto max-w-7xl">
          <div className="mb-16 text-center">
            <h2 className="mb-4 font-bold text-4xl leading-[1.1] tracking-tight lg:text-6xl">
              Rank in Google. Get Cited by ChatGPT. Own Your Market.
            </h2>
            <p className="mx-auto max-w-2xl text-lg text-muted-foreground tracking-wide">
              From Google's first page to ChatGPT, Claude, and Perplexity, we
              position your brand as the authoritative answer across every
              search channel.
            </p>
          </div>

          <div className="grid gap-8 lg:grid-cols-2">
            {/* GEO Service */}
            <div className="group relative overflow-hidden rounded-2xl border border-border bg-card p-8 transition-all hover:border-accent/50 hover:shadow-accent/10 hover:shadow-lg">
              <div className="mb-6 inline-flex rounded-lg bg-accent/10 p-3">
                <Brain className="h-8 w-8 text-accent" />
              </div>
              <h3 className="mb-4 font-bold text-3xl leading-tight lg:text-4xl xl:text-5xl">
                GEO
              </h3>
              <p className="mb-6 text-lg text-muted-foreground leading-relaxed tracking-wide">
                Generative Engine Optimization (GEO) positions your brand at the
                forefront of AI-powered search experiences. Be the answer when
                AI assistants recommend solutions to your target audience.
              </p>
              <ul className="mb-6 space-y-3">
                <li className="flex items-start gap-3">
                  <CheckCircle2 className="mt-1 h-5 w-5 shrink-0 text-accent" />
                  <span className="text-foreground">
                    AI model optimization and prompt engineering
                  </span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle2 className="mt-1 h-5 w-5 shrink-0 text-accent" />
                  <span className="text-foreground">
                    Strategic content structuring for LLM comprehension
                  </span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle2 className="mt-1 h-5 w-5 shrink-0 text-accent" />
                  <span className="text-foreground">
                    Voice and conversational search optimization
                  </span>
                </li>
              </ul>
              <Button
                asChild
                variant="outline"
                className="group-hover:border-accent"
              >
                <Link to="/geo">
                  Learn More About GEO
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </Button>
            </div>

            {/* SEO Service */}
            <div className="group relative overflow-hidden rounded-2xl border border-border bg-card p-8 transition-all hover:border-accent/50 hover:shadow-accent/10 hover:shadow-lg">
              <div className="mb-6 inline-flex rounded-lg bg-accent/10 p-3">
                <TrendingUp className="h-8 w-8 text-accent" />
              </div>
              <h3 className="mb-4 font-bold text-3xl leading-tight lg:text-4xl xl:text-5xl">
                SEO
              </h3>
              <p className="mb-6 text-lg text-muted-foreground leading-relaxed tracking-wide">
                Search Engine Optimization (SEO) delivers sustainable organic
                growth through proven strategies that drive qualified traffic
                and convert visitors into customers.
              </p>
              <ul className="mb-6 space-y-3">
                <li className="flex items-start gap-3">
                  <CheckCircle2 className="mt-1 h-5 w-5 shrink-0 text-accent" />
                  <span className="text-foreground">
                    Technical SEO and site architecture optimization
                  </span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle2 className="mt-1 h-5 w-5 shrink-0 text-accent" />
                  <span className="text-foreground">
                    Content strategy and authority building
                  </span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle2 className="mt-1 h-5 w-5 shrink-0 text-accent" />
                  <span className="text-foreground">
                    Local and national search domination
                  </span>
                </li>
              </ul>
              <Button
                asChild
                variant="outline"
                className="group-hover:border-accent"
              >
                <Link to="/seo">
                  Learn More About SEO
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Social Proof Section */}
      <section className="border-border border-y bg-background px-6 py-20">
        <div className="mx-auto max-w-7xl">
          <div className="grid gap-8 lg:grid-cols-3">
            <div className="text-center">
              <div className="mb-4 inline-flex rounded-full bg-accent/10 p-4">
                <Award className="h-8 w-8 text-accent" />
              </div>
              <div className="mb-2 font-extrabold text-5xl leading-none tracking-tight lg:text-7xl xl:text-8xl">
                300+
              </div>
              <div className="text-muted-foreground tracking-wide">
                Businesses served since 2012
              </div>
            </div>
            <div className="text-center">
              <div className="mb-4 inline-flex rounded-full bg-accent/10 p-4">
                <Target className="h-8 w-8 text-accent" />
              </div>
              <div className="mb-2 font-extrabold text-5xl leading-none tracking-tight lg:text-7xl xl:text-8xl">
                $200M+
              </div>
              <div className="text-muted-foreground tracking-wide">
                SEO-driven revenue generated for clients
              </div>
            </div>
            <div className="text-center">
              <div className="mb-4 inline-flex rounded-full bg-accent/10 p-4">
                <Users className="h-8 w-8 text-accent" />
              </div>
              <div className="mb-2 font-extrabold text-5xl leading-none tracking-tight lg:text-7xl xl:text-8xl">
                300%
              </div>
              <div className="text-muted-foreground tracking-wide">
                Average organic traffic growth
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Case Study Highlight */}
      <section className="px-6 py-20 lg:py-32">
        <div className="mx-auto max-w-7xl">
          <div className="overflow-hidden rounded-2xl border-2 border-border bg-card">
            <div className="grid gap-8 lg:grid-cols-2">
              <div className="p-8 lg:p-12">
                <div className="mb-4 inline-block rounded-full bg-accent/10 px-4 py-1 font-semibold text-accent text-xs uppercase tracking-widest">
                  Featured Case Study
                </div>
                <h2 className="mb-4 font-bold text-3xl lg:text-4xl">
                  Revology Cars: The Acquisition Story
                </h2>
                <p className="mb-6 text-lg text-muted-foreground leading-relaxed">
                  See how we helped a luxury restomod manufacturer dominate
                  search for classic Mustangs, get cited by ChatGPT, and
                  ultimately achieve a successful exit.
                </p>
                <div className="mb-8 space-y-4">
                  <div className="flex items-center gap-4">
                    <div className="font-bold text-3xl text-accent">Exit</div>
                    <div className="text-muted-foreground tracking-wide">
                      Successful company acquisition
                    </div>
                  </div>
                  <div className="flex items-center gap-4">
                    <div className="font-bold text-3xl text-accent">Page 1</div>
                    <div className="text-muted-foreground tracking-wide">
                      Rankings for competitive classic car terms
                    </div>
                  </div>
                  <div className="flex items-center gap-4">
                    <div className="font-bold text-3xl text-accent">
                      ChatGPT
                    </div>
                    <div className="text-muted-foreground tracking-wide">
                      Consistent AI platform citations
                    </div>
                  </div>
                </div>
                <Button
                  asChild
                  className="bg-accent text-accent-foreground hover:bg-accent/90"
                >
                  <Link to="/case-studies">
                    Read Full Case Study
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </Link>
                </Button>
              </div>
              <div className="relative min-h-[300px] bg-secondary lg:min-h-[400px]">
                <div className="flex h-full items-center justify-center p-8">
                  <div className="text-center">
                    <div className="mb-4 font-bold text-6xl text-accent">
                      RC
                    </div>
                    <div className="font-semibold text-foreground text-xl">
                      Revology Cars
                    </div>
                    <div className="text-muted-foreground">
                      Automotive · Restomod
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="bg-background px-6 py-20 lg:py-32">
        <div className="mx-auto max-w-7xl">
          <div className="mb-16 text-center">
            <h2 className="mb-4 font-bold text-4xl lg:text-5xl">
              Trusted by Industry Leaders
            </h2>
            <p className="mx-auto max-w-2xl text-lg text-muted-foreground">
              Don't just take our word for it. Here's what our clients say about
              working with us.
            </p>
          </div>

          <div className="mx-auto grid max-w-4xl gap-8 lg:grid-cols-2">
            {/* Testimonial 1 - Goldfarb */}
            <div className="rounded-2xl border-2 border-border bg-card p-8 shadow-sm">
              <div className="mb-6 text-2xl text-accent">"</div>
              <p className="mb-6 text-foreground leading-relaxed">
                Working with One Percent SEO transformed our online presence. We
                went from being invisible to dominating our market. They
                understand e-commerce and deliver real results. We're now one of
                the top recommendations in ChatGPT for diesel injection pumps.
              </p>
              <div className="flex items-center gap-3">
                <div className="flex h-12 w-12 items-center justify-center rounded-full bg-accent/10 font-bold text-accent">
                  SG
                </div>
                <div>
                  <div className="font-semibold text-foreground">
                    Scott Goldfarb
                  </div>
                  <div className="text-muted-foreground text-sm">
                    Owner, Goldfarb & Associates
                  </div>
                </div>
              </div>
            </div>

            {/* Testimonial 2 - Royal Covers */}
            <div className="rounded-2xl border-2 border-border bg-card p-8 shadow-sm">
              <div className="mb-6 text-2xl text-accent">"</div>
              <p className="mb-6 text-foreground leading-relaxed">
                After 40+ years in business, One Percent SEO helped us finally
                dominate online. We're now the #1 patio cover company in Arizona
                with three straight years of record-breaking revenue. Their
                local SEO strategy changed everything for us.
              </p>
              <div className="flex items-center gap-3">
                <div className="flex h-12 w-12 items-center justify-center rounded-full bg-accent/10 font-bold text-accent">
                  TB
                </div>
                <div>
                  <div className="font-semibold text-foreground">
                    Tanner Bishop
                  </div>
                  <div className="text-muted-foreground text-sm">
                    Owner, Royal Covers
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Final CTA Section */}
      <section className="border-border border-t px-6 py-20 lg:py-32">
        <div className="mx-auto max-w-7xl text-center">
          <h2 className="mb-4 font-bold text-4xl tracking-tight lg:text-5xl">
            Ready to Join the Top 1%?
          </h2>
          <p className="mx-auto mb-8 max-w-2xl text-lg text-muted-foreground">
            Let's discuss how we'll position your brand to dominate both
            traditional and AI search.
          </p>
          <div className="flex flex-col items-center justify-center gap-4 sm:flex-row">
            <Button
              asChild
              size="lg"
              className="bg-accent text-accent-foreground hover:bg-accent/90"
            >
              <Link to="/apply">
                Apply To Work With Us
                <ArrowRight className="ml-2 h-5 w-5" />
              </Link>
            </Button>
            <Button asChild size="lg" variant="outline">
              <Link to="/case-studies">View Case Studies</Link>
            </Button>
          </div>
        </div>
      </section>
    </>
  );
}
