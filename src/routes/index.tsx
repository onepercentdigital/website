import {
  AnalyticsUpIcon,
  ArrowRight01Icon,
  Award01Icon,
  Brain01Icon,
  CheckmarkCircle02Icon,
  Dollar01Icon,
  Target01Icon,
  UserGroupIcon,
} from '@hugeicons/core-free-icons';
import { HugeiconsIcon } from '@hugeicons/react';
import { createFileRoute, Link } from '@tanstack/react-router';
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
      <section className="relative overflow-hidden bg-background px-6 py-12 lg:py-20">
        <div className="mx-auto max-w-7xl">
          <div className="mx-auto max-w-5xl text-center">
            <h1 className="mb-6 font-extrabold text-5xl leading-[0.95] tracking-tighter lg:mb-8 lg:text-7xl xl:text-8xl">
              Dominate Your Industry
            </h1>

            {/* Supporting Text */}
            <p className="mx-auto mb-8 max-w-3xl text-lg text-muted-foreground leading-relaxed tracking-wide lg:text-xl">
              Recommended by ChatGPT. Page 1 on Google. Exclusive pre-qualified
              leads on demand. This is what market dominance looks like.
            </p>

            {/* CTAs */}
            <div className="mb-16 flex flex-col items-center justify-center gap-4 sm:flex-row">
              <Button
                render={<Link to="/apply" />}
                size="lg"
                className="bg-primary text-primary-foreground hover:bg-primary/80"
              >
                Apply To Work With Us
                <HugeiconsIcon
                  icon={ArrowRight01Icon}
                  size={20}
                  strokeWidth={2}
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

            {/* Three Service Columns */}
            <div className="mb-6 grid grid-cols-1 gap-4 md:grid-cols-3 lg:gap-8">
              {/* GEO */}
              <div className="group flex flex-col items-center rounded-2xl border border-border bg-card p-6 text-center transition-all hover:border-accent/50 lg:p-8">
                <h2 className="mb-2 font-bold text-2xl tracking-tight lg:mb-4 lg:text-4xl">
                  GEO
                </h2>
                <p className="mb-4 text-muted-foreground text-xs leading-relaxed tracking-wide lg:mb-6 lg:text-base">
                  Get Cited by ChatGPT and other AI models
                </p>
                <Button
                  render={<Link to="/geo" />}
                  variant="outline"
                  size="sm"
                  className="group-hover:border-primary lg:size-default"
                >
                  More about GEO
                  <HugeiconsIcon
                    icon={ArrowRight01Icon}
                    size={12}
                    strokeWidth={2}
                    className="lg:size-4"
                  />
                </Button>
              </div>

              {/* SEO */}
              <div className="group flex flex-col items-center rounded-2xl border border-border bg-card p-6 text-center transition-all hover:border-accent/50 lg:p-8">
                <h2 className="mb-2 font-bold text-2xl tracking-tight lg:mb-4 lg:text-4xl">
                  SEO
                </h2>
                <p className="mb-4 text-muted-foreground text-xs leading-relaxed tracking-wide lg:mb-6 lg:text-base">
                  Rank in Google and other search engines
                </p>
                <Button
                  render={<Link to="/seo" />}
                  variant="outline"
                  size="sm"
                  className="group-hover:border-primary lg:size-default"
                >
                  More about SEO
                  <HugeiconsIcon
                    icon={ArrowRight01Icon}
                    size={12}
                    strokeWidth={2}
                    className="lg:size-4"
                  />
                </Button>
              </div>

              {/* PM */}
              <div className="group flex flex-col items-center rounded-2xl border border-border bg-card p-6 text-center transition-all hover:border-accent/50 lg:p-8">
                <h2 className="mb-2 font-bold text-2xl tracking-tight lg:mb-4 lg:text-4xl">
                  PM
                </h2>
                <p className="mb-4 text-muted-foreground text-xs leading-relaxed tracking-wide lg:mb-6 lg:text-base">
                  Pay Per Exclusive Pre-Qualified Lead
                </p>
                <Button
                  render={<Link to="/pm" />}
                  variant="outline"
                  size="sm"
                  className="group-hover:border-primary lg:size-default"
                >
                  More about PM
                  <HugeiconsIcon
                    icon={ArrowRight01Icon}
                    size={12}
                    strokeWidth={2}
                    className="lg:size-4"
                  />
                </Button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Services Overview Section */}
      <section className="border-border border-t px-6 py-12 lg:py-20">
        <div className="mx-auto max-w-7xl">
          <div className="mb-16 text-center">
            <h2 className="mb-4 font-bold text-4xl leading-[1.1] tracking-tight lg:text-6xl">
              How We Help You Scale
            </h2>
            <p className="mx-auto max-w-2xl text-lg text-muted-foreground tracking-wide">
              From AI citations to search rankings to qualified leads, we
              position your brand for growth across every channel.
            </p>
          </div>

          <div className="grid gap-8 lg:grid-cols-3">
            {/* GEO Service */}
            <div className="group relative overflow-hidden rounded-2xl border border-border bg-card p-8 transition-all hover:border-accent/50 hover:shadow-accent/10 hover:shadow-lg">
              <div className="mb-6 inline-flex rounded-lg bg-accent/10 p-3">
                <HugeiconsIcon
                  icon={Brain01Icon}
                  size={32}
                  strokeWidth={1.5}
                  className="text-primary"
                />
              </div>
              <h3 className="mb-4 font-bold text-2xl leading-tight lg:text-3xl">
                Generative Engine Optimization
              </h3>
              <p className="mb-6 text-muted-foreground leading-relaxed tracking-wide">
                Position your brand at the forefront of AI-powered search. Be
                the answer when AI assistants recommend solutions to your target
                audience.
              </p>
              <ul className="mb-6 space-y-3">
                <li className="flex items-start gap-3">
                  <HugeiconsIcon
                    icon={CheckmarkCircle02Icon}
                    size={20}
                    strokeWidth={1.5}
                    className="mt-1 shrink-0 text-primary"
                  />
                  <span className="text-foreground text-sm">
                    AI model optimization and prompt engineering
                  </span>
                </li>
                <li className="flex items-start gap-3">
                  <HugeiconsIcon
                    icon={CheckmarkCircle02Icon}
                    size={20}
                    strokeWidth={1.5}
                    className="mt-1 shrink-0 text-primary"
                  />
                  <span className="text-foreground text-sm">
                    Strategic content structuring for LLM comprehension
                  </span>
                </li>
                <li className="flex items-start gap-3">
                  <HugeiconsIcon
                    icon={CheckmarkCircle02Icon}
                    size={20}
                    strokeWidth={1.5}
                    className="mt-1 shrink-0 text-primary"
                  />
                  <span className="text-foreground text-sm">
                    Voice and conversational search optimization
                  </span>
                </li>
              </ul>
              <Button
                render={<Link to="/geo" />}
                variant="outline"
                className="group-hover:border-primary"
              >
                More about GEO
                <HugeiconsIcon
                  icon={ArrowRight01Icon}
                  size={16}
                  strokeWidth={2}
                />
              </Button>
            </div>

            {/* SEO Service */}
            <div className="group relative overflow-hidden rounded-2xl border border-border bg-card p-8 transition-all hover:border-accent/50 hover:shadow-accent/10 hover:shadow-lg">
              <div className="mb-6 inline-flex rounded-lg bg-accent/10 p-3">
                <HugeiconsIcon
                  icon={AnalyticsUpIcon}
                  size={32}
                  strokeWidth={1.5}
                  className="text-primary"
                />
              </div>
              <h3 className="mb-4 font-bold text-2xl leading-tight lg:text-3xl">
                Search Engine Optimization
              </h3>
              <p className="mb-6 text-muted-foreground leading-relaxed tracking-wide">
                Sustainable organic growth through proven strategies that drive
                qualified traffic and convert visitors into customers.
              </p>
              <ul className="mb-6 space-y-3">
                <li className="flex items-start gap-3">
                  <HugeiconsIcon
                    icon={CheckmarkCircle02Icon}
                    size={20}
                    strokeWidth={1.5}
                    className="mt-1 shrink-0 text-primary"
                  />
                  <span className="text-foreground text-sm">
                    Technical SEO and site architecture optimization
                  </span>
                </li>
                <li className="flex items-start gap-3">
                  <HugeiconsIcon
                    icon={CheckmarkCircle02Icon}
                    size={20}
                    strokeWidth={1.5}
                    className="mt-1 shrink-0 text-primary"
                  />
                  <span className="text-foreground text-sm">
                    Content strategy and authority building
                  </span>
                </li>
                <li className="flex items-start gap-3">
                  <HugeiconsIcon
                    icon={CheckmarkCircle02Icon}
                    size={20}
                    strokeWidth={1.5}
                    className="mt-1 shrink-0 text-primary"
                  />
                  <span className="text-foreground text-sm">
                    Local and national search domination
                  </span>
                </li>
              </ul>
              <Button
                render={<Link to="/seo" />}
                variant="outline"
                className="group-hover:border-primary"
              >
                More about SEO
                <HugeiconsIcon
                  icon={ArrowRight01Icon}
                  size={16}
                  strokeWidth={2}
                />
              </Button>
            </div>

            {/* Performance Marketing Service */}
            <div className="group relative overflow-hidden rounded-2xl border border-border bg-card p-8 transition-all hover:border-accent/50 hover:shadow-accent/10 hover:shadow-lg">
              <div className="mb-6 inline-flex rounded-lg bg-accent/10 p-3">
                <HugeiconsIcon
                  icon={Dollar01Icon}
                  size={32}
                  strokeWidth={1.5}
                  className="text-primary"
                />
              </div>
              <h3 className="mb-4 font-bold text-2xl leading-tight lg:text-3xl">
                Performance Marketing
              </h3>
              <p className="mb-6 text-muted-foreground leading-relaxed tracking-wide">
                We fund your marketing campaigns and deliver pre-qualified leads
                directly to your pipeline. You only pay for results.
              </p>
              <ul className="mb-6 space-y-3">
                <li className="flex items-start gap-3">
                  <HugeiconsIcon
                    icon={CheckmarkCircle02Icon}
                    size={20}
                    strokeWidth={1.5}
                    className="mt-1 shrink-0 text-primary"
                  />
                  <span className="text-foreground text-sm">
                    Zero upfront investment or retainers
                  </span>
                </li>
                <li className="flex items-start gap-3">
                  <HugeiconsIcon
                    icon={CheckmarkCircle02Icon}
                    size={20}
                    strokeWidth={1.5}
                    className="mt-1 shrink-0 text-primary"
                  />
                  <span className="text-foreground text-sm">
                    Live exclusive pre-qualified leads
                  </span>
                </li>
                <li className="flex items-start gap-3">
                  <HugeiconsIcon
                    icon={CheckmarkCircle02Icon}
                    size={20}
                    strokeWidth={1.5}
                    className="mt-1 shrink-0 text-primary"
                  />
                  <span className="text-foreground text-sm">
                    Scale volume based on your capacity
                  </span>
                </li>
              </ul>
              <Button
                render={<Link to="/pm" />}
                variant="outline"
                className="group-hover:border-primary"
              >
                More about PM
                <HugeiconsIcon
                  icon={ArrowRight01Icon}
                  size={16}
                  strokeWidth={2}
                />
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
                <HugeiconsIcon
                  icon={Award01Icon}
                  size={32}
                  strokeWidth={1.5}
                  className="text-primary"
                />
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
                <HugeiconsIcon
                  icon={Target01Icon}
                  size={32}
                  strokeWidth={1.5}
                  className="text-primary"
                />
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
                <HugeiconsIcon
                  icon={UserGroupIcon}
                  size={32}
                  strokeWidth={1.5}
                  className="text-primary"
                />
              </div>
              <div className="mb-2 font-extrabold text-5xl leading-none tracking-tight lg:text-7xl xl:text-8xl">
                8X
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
                  render={<Link to="/case-studies" />}
                  className="bg-primary text-primary-foreground hover:bg-primary/80"
                >
                  Read Full Case Study
                  <HugeiconsIcon
                    icon={ArrowRight01Icon}
                    size={16}
                    strokeWidth={2}
                  />
                </Button>
              </div>
              <div className="relative min-h-75 bg-secondary lg:min-h-100">
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
                Working with One Percent Digital transformed our online
                presence. We went from being invisible to showing up everywhere
                our customers search. They understand E-commerce and deliver
                real results. We're now one of the top recommendations in
                ChatGPT for diesel injection pumps.
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
                After 40+ years in business, One Percent Digital helped us
                finally break through online. We're now the #1 patio cover
                company in Arizona with three straight years of record-breaking
                revenue. Their local SEO strategy changed everything for us.
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
            Ready to Scale Your Business?
          </h2>
          <p className="mx-auto mb-8 max-w-2xl text-lg text-muted-foreground">
            Whether through SEO, GEO, or Performance Marketing, we help you
            generate the leads you need to grow. Choose one service or combine
            all three for maximum impact.
          </p>
          <div className="flex flex-col items-center justify-center gap-4 sm:flex-row">
            <Button
              render={<Link to="/apply" />}
              size="lg"
              className="bg-primary text-primary-foreground hover:bg-primary/80"
            >
              Apply To Work With Us
              <HugeiconsIcon
                icon={ArrowRight01Icon}
                size={20}
                strokeWidth={2}
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
    </>
  );
}
