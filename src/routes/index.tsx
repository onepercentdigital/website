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
      title: 'Capture total mind share through AI and search optimization',
      description:
        'Helping companies become the top 1% talked about brands in AI and traditional search through GEO and SEO optimization.',
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
      <section className="relative overflow-hidden bg-gradient-to-b from-background via-background to-secondary/20 px-6 py-20 lg:py-32">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,_var(--accent-color)_0%,_transparent_50%)] opacity-10" />
        <div className="relative mx-auto max-w-7xl">
          <div className="mx-auto max-w-4xl text-center">
            <h1 className="mb-6 font-bold text-5xl leading-tight tracking-tight lg:text-7xl">
              Capture total mind share through{' '}
              <span className="bg-gradient-to-r from-accent to-accent/70 bg-clip-text text-transparent">
                AI and search optimization
              </span>
            </h1>
            <p className="mx-auto mb-8 max-w-2xl text-muted-foreground text-xl leading-relaxed lg:text-2xl">
              Helping companies become the top 1% talked about brands in AI and
              traditional search through{' '}
              <span className="font-semibold text-foreground">GEO</span> and{' '}
              <span className="font-semibold text-foreground">SEO</span>{' '}
              optimization.
            </p>
            <div className="flex flex-col items-center justify-center gap-4 sm:flex-row">
              <Button
                asChild
                size="lg"
                className="bg-accent text-accent-foreground hover:bg-accent/90"
              >
                <Link to="/schedule">
                  Schedule a Call
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Link>
              </Button>
              <Button asChild size="lg" variant="outline">
                <Link to="/resources/case-studies">View Case Studies</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Services Overview Section */}
      <section className="px-6 py-20 lg:py-32">
        <div className="mx-auto max-w-7xl">
          <div className="mb-16 text-center">
            <h2 className="mb-4 font-bold text-4xl lg:text-5xl">
              Dominate Both AI and Traditional Search
            </h2>
            <p className="mx-auto max-w-2xl text-muted-foreground text-lg">
              Our comprehensive approach ensures your brand is discovered
              everywhere your customers are looking.
            </p>
          </div>

          <div className="grid gap-8 lg:grid-cols-2">
            {/* GEO Service */}
            <div className="group relative overflow-hidden rounded-2xl border border-border bg-card p-8 transition-all hover:border-accent/50 hover:shadow-lg hover:shadow-accent/10">
              <div className="mb-6 inline-flex rounded-lg bg-accent/10 p-3">
                <Brain className="h-8 w-8 text-accent" />
              </div>
              <h3 className="mb-4 font-bold text-3xl">GEO</h3>
              <p className="mb-6 text-muted-foreground text-lg leading-relaxed">
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
                <Link to="/services/geo">
                  Learn More About GEO
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </Button>
            </div>

            {/* SEO Service */}
            <div className="group relative overflow-hidden rounded-2xl border border-border bg-card p-8 transition-all hover:border-accent/50 hover:shadow-lg hover:shadow-accent/10">
              <div className="mb-6 inline-flex rounded-lg bg-accent/10 p-3">
                <TrendingUp className="h-8 w-8 text-accent" />
              </div>
              <h3 className="mb-4 font-bold text-3xl">SEO</h3>
              <p className="mb-6 text-muted-foreground text-lg leading-relaxed">
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
                <Link to="/services/seo">
                  Learn More About SEO
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Social Proof Section */}
      <section className="bg-secondary/30 px-6 py-20">
        <div className="mx-auto max-w-7xl">
          <div className="grid gap-8 lg:grid-cols-3">
            <div className="text-center">
              <div className="mb-4 inline-flex rounded-full bg-accent/10 p-4">
                <Award className="h-8 w-8 text-accent" />
              </div>
              <div className="mb-2 font-bold text-4xl lg:text-5xl">95%</div>
              <div className="text-muted-foreground">
                Client retention rate year-over-year
              </div>
            </div>
            <div className="text-center">
              <div className="mb-4 inline-flex rounded-full bg-accent/10 p-4">
                <Target className="h-8 w-8 text-accent" />
              </div>
              <div className="mb-2 font-bold text-4xl lg:text-5xl">$150M+</div>
              <div className="text-muted-foreground">
                SEO-driven revenue generated for clients
              </div>
            </div>
            <div className="text-center">
              <div className="mb-4 inline-flex rounded-full bg-accent/10 p-4">
                <Users className="h-8 w-8 text-accent" />
              </div>
              <div className="mb-2 font-bold text-4xl lg:text-5xl">1444%</div>
              <div className="text-muted-foreground">
                Average organic traffic growth
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Case Study Highlight */}
      <section className="px-6 py-20 lg:py-32">
        <div className="mx-auto max-w-7xl">
          <div className="overflow-hidden rounded-2xl border border-border bg-gradient-to-br from-card to-secondary/20">
            <div className="grid gap-8 lg:grid-cols-2">
              <div className="p-8 lg:p-12">
                <div className="mb-4 inline-block rounded-full bg-accent/10 px-4 py-1 text-accent text-sm font-medium">
                  Case Study
                </div>
                <h2 className="mb-4 font-bold text-3xl lg:text-4xl">
                  From Invisible to Industry Leader
                </h2>
                <p className="mb-6 text-muted-foreground text-lg leading-relaxed">
                  See how we helped a B2B SaaS company achieve 1444% organic
                  traffic growth and dominate their market through our combined
                  GEO and SEO strategy.
                </p>
                <div className="mb-8 space-y-4">
                  <div className="flex items-center gap-4">
                    <div className="font-bold text-3xl text-accent">1444%</div>
                    <div className="text-muted-foreground">
                      Organic traffic growth
                    </div>
                  </div>
                  <div className="flex items-center gap-4">
                    <div className="font-bold text-3xl text-accent">320%</div>
                    <div className="text-muted-foreground">
                      Increase in qualified leads
                    </div>
                  </div>
                  <div className="flex items-center gap-4">
                    <div className="font-bold text-3xl text-accent">$8.2M</div>
                    <div className="text-muted-foreground">
                      Revenue attributed to organic search
                    </div>
                  </div>
                </div>
                <Button
                  asChild
                  className="bg-accent text-accent-foreground hover:bg-accent/90"
                >
                  <Link to="/resources/case-studies">
                    Read Full Case Study
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </Link>
                </Button>
              </div>
              <div className="relative min-h-[300px] bg-gradient-to-br from-accent/20 to-accent/5 lg:min-h-[400px]">
                {/* Placeholder for case study image or chart */}
                <div className="flex h-full items-center justify-center p-8">
                  <div className="text-center text-muted-foreground">
                    [Case Study Visual / Chart]
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="bg-secondary/30 px-6 py-20 lg:py-32">
        <div className="mx-auto max-w-7xl">
          <div className="mb-16 text-center">
            <h2 className="mb-4 font-bold text-4xl lg:text-5xl">
              Trusted by Industry Leaders
            </h2>
            <p className="mx-auto max-w-2xl text-muted-foreground text-lg">
              Don't just take our word for it. Here's what our clients say about
              working with us.
            </p>
          </div>

          <div className="grid gap-8 lg:grid-cols-3">
            {/* Testimonial 1 */}
            <div className="rounded-2xl border border-border bg-card p-8">
              <div className="mb-6 text-2xl text-accent">"</div>
              <p className="mb-6 text-foreground leading-relaxed">
                One Percent SEO transformed our online presence. We went from
                barely ranking to dominating our industry keywords in just 6
                months.
              </p>
              <div className="flex items-center gap-3">
                <div className="flex h-12 w-12 items-center justify-center rounded-full bg-accent/10 font-bold text-accent">
                  JD
                </div>
                <div>
                  <div className="font-semibold text-foreground">John Doe</div>
                  <div className="text-muted-foreground text-sm">
                    CEO, TechCorp
                  </div>
                </div>
              </div>
            </div>

            {/* Testimonial 2 */}
            <div className="rounded-2xl border border-border bg-card p-8">
              <div className="mb-6 text-2xl text-accent">"</div>
              <p className="mb-6 text-foreground leading-relaxed">
                The ROI from our SEO investment has been incredible. We're now
                the go-to solution when our customers search for answers.
              </p>
              <div className="flex items-center gap-3">
                <div className="flex h-12 w-12 items-center justify-center rounded-full bg-accent/10 font-bold text-accent">
                  SK
                </div>
                <div>
                  <div className="font-semibold text-foreground">Sarah Kim</div>
                  <div className="text-muted-foreground text-sm">
                    VP Marketing, GrowthCo
                  </div>
                </div>
              </div>
            </div>

            {/* Testimonial 3 */}
            <div className="rounded-2xl border border-border bg-card p-8">
              <div className="mb-6 text-2xl text-accent">"</div>
              <p className="mb-6 text-foreground leading-relaxed">
                Their GEO strategy has positioned us perfectly for the AI-first
                future. We're already seeing traffic from AI-powered search
                tools.
              </p>
              <div className="flex items-center gap-3">
                <div className="flex h-12 w-12 items-center justify-center rounded-full bg-accent/10 font-bold text-accent">
                  MP
                </div>
                <div>
                  <div className="font-semibold text-foreground">
                    Michael Park
                  </div>
                  <div className="text-muted-foreground text-sm">
                    Founder, InnovateAI
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Final CTA Section */}
      <section className="px-6 py-20 lg:py-32">
        <div className="mx-auto max-w-7xl">
          <div className="relative overflow-hidden rounded-2xl bg-gradient-to-r from-accent/90 to-accent p-12 text-center lg:p-16">
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_bottom_left,_rgba(255,255,255,0.1)_0%,_transparent_50%)]" />
            <div className="relative">
              <h2 className="mb-4 font-bold text-4xl text-white lg:text-5xl">
                Ready to Join the Top 1%?
              </h2>
              <p className="mx-auto mb-8 max-w-2xl text-lg text-white/90">
                Let's discuss how our GEO and SEO strategies can transform your
                online presence and drive sustainable growth for your business.
              </p>
              <Button
                asChild
                size="lg"
                className="bg-white text-accent hover:bg-white/90"
              >
                <Link to="/schedule">
                  Schedule Your Free Consultation
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Link>
              </Button>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
