import { ArrowRight01Icon } from '@hugeicons/core-free-icons';
import { HugeiconsIcon } from '@hugeicons/react';
import { createFileRoute, Link } from '@tanstack/react-router';
import { SEO } from '@/components/SEO';
import { Button } from '@/components/ui/button';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { getImageUrl } from '@/lib/cloudflare-images';
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
      url: 'https://op.digital/',
    }),
});

// Client logos for the logo strip
const clientLogos = [
  {
    name: 'Grove Bay Hospitality Group',
    logo: '9e0346f0-bc70-4d85-b6dc-c8400746ce00',
  },
  { name: 'Stubborn Seed', logo: 'c98add49-898a-4f13-b6b1-563939a50d00' },
  { name: 'Afni Careers', logo: '5149085e-50ad-45b9-c670-9f0cc73c7800' },
  { name: 'H&R Agri-Power', logo: 'a3ace45a-c036-4a4e-30e6-58fd8c9bcf00' },
  { name: 'Revology', logo: '7ab278bc-37c8-4d7e-21ee-ba2d463fa200' },
  {
    name: 'Goldfarb & Associates',
    logo: '51e5ac33-a0d2-4cdb-668e-581cba411a00',
  },
  { name: 'Royal Covers', logo: '5bacc41c-abd7-4b66-feeb-da11c01c8f00' },
  {
    name: 'Modern House Numbers',
    logo: 'b1f89b63-89bd-4d15-adee-bcd4bb958c00',
  },
];

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
      <section className="relative overflow-hidden bg-background px-6 py-16 lg:py-24">
        {/* Grid Pattern Background */}
        <div
          className="pointer-events-none absolute inset-0 bg-grid-pattern"
          aria-hidden="true"
        />

        <div className="relative mx-auto max-w-7xl">
          <div className="mx-auto max-w-4xl text-center">
            <h1 className="mb-6 font-extrabold text-5xl leading-[0.95] tracking-tighter lg:mb-8 lg:text-7xl xl:text-8xl">
              Dominate Your Industry
            </h1>

            <p className="mx-auto mb-10 max-w-2xl text-muted-foreground leading-relaxed lg:text-lg">
              Recommended by ChatGPT. Page 1 on Google. Exclusive pre-qualified
              leads on demand. This is what market dominance looks like.
            </p>

            {/* CTAs */}
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

      {/* Client Logo Strip - Ticker Style */}
      <section className="border-border border-y bg-muted/30 py-8">
        <div className="mx-auto max-w-5xl px-6">
          <div className="group relative overflow-hidden">
            {/* Fade edges */}
            <div className="pointer-events-none absolute top-0 left-0 z-10 h-full w-20 bg-gradient-to-r from-[color-mix(in_oklab,var(--color-muted)_30%,var(--color-background))] to-transparent" />
            <div className="pointer-events-none absolute top-0 right-0 z-10 h-full w-20 bg-gradient-to-l from-[color-mix(in_oklab,var(--color-muted)_30%,var(--color-background))] to-transparent" />

            {/* Scrolling track */}
            <div className="flex w-fit animate-marquee group-hover:[animation-play-state:paused]">
              {/* First set of logos */}
              {clientLogos.map((client) => (
                <div
                  key={client.name}
                  className="flex h-12 w-40 shrink-0 items-center justify-center px-6"
                >
                  <img
                    src={getImageUrl(client.logo, 'thumbnail')}
                    alt={client.name}
                    className="h-8 max-w-full object-contain opacity-60 grayscale transition-opacity hover:opacity-100 lg:h-10 dark:invert"
                  />
                </div>
              ))}
              {/* Duplicate set for seamless loop */}
              {clientLogos.map((client) => (
                <div
                  key={`${client.name}-dup`}
                  className="flex h-12 w-40 shrink-0 items-center justify-center px-6"
                >
                  <img
                    src={getImageUrl(client.logo, 'thumbnail')}
                    alt={client.name}
                    className="h-8 max-w-full object-contain opacity-60 grayscale transition-opacity hover:opacity-100 lg:h-10 dark:invert"
                  />
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Tabbed Services Section */}
      <section className="px-6 py-16 lg:py-24">
        <div className="mx-auto max-w-7xl">
          <div className="mb-12 text-center lg:mb-16">
            <h2 className="mb-4 font-bold text-4xl leading-[1.1] tracking-tight lg:text-5xl">
              How We Help You Scale
            </h2>
            <p className="mx-auto max-w-2xl text-muted-foreground">
              From AI citations to search rankings to qualified leads, we
              position your brand for growth across every channel.
            </p>
          </div>

          <Tabs defaultValue="geo" className="mx-auto max-w-5xl">
            <TabsList className="mx-auto mb-8 w-fit">
              <TabsTrigger value="geo">GEO</TabsTrigger>
              <TabsTrigger value="aeo">AEO</TabsTrigger>
              <TabsTrigger value="seo">SEO</TabsTrigger>
              <TabsTrigger value="ppl">PPL</TabsTrigger>
            </TabsList>

            {/* GEO Tab Content */}
            <TabsContent value="geo">
              <div className="rounded-2xl p-8 ring-1 ring-foreground/10 lg:p-10">
                <div className="grid gap-8 lg:grid-cols-2 lg:gap-12">
                  {/* Left: Stats + Testimonial as prose */}
                  <div className="flex flex-col justify-center">
                    <div className="mb-6">
                      <span className="font-extrabold text-5xl text-primary tracking-tight lg:text-6xl">
                        8X
                      </span>
                      <span className="ml-3 text-muted-foreground">
                        Average Organic Traffic Growth
                      </span>
                    </div>
                    <p className="text-foreground leading-relaxed">
                      <span className="font-semibold">Scott Goldfarb</span> of
                      Goldfarb & Associates says: "We're now one of the top
                      recommendations in ChatGPT for diesel injection pumps."
                    </p>
                  </div>

                  {/* Right: Description + CTA */}
                  <div className="flex flex-col justify-center">
                    <h3 className="mb-3 font-bold text-2xl">
                      Generative Engine Optimization
                    </h3>
                    <p className="mb-6 text-muted-foreground leading-relaxed">
                      Get cited by ChatGPT, Claude, Perplexity, and other AI
                      platforms. Position your brand as the answer when AI
                      recommends solutions.
                    </p>
                    <div>
                      <Button render={<Link to="/geo" />} variant="outline">
                        Learn about GEO
                        <HugeiconsIcon
                          icon={ArrowRight01Icon}
                          size={16}
                          strokeWidth={2}
                          data-icon="inline-end"
                        />
                      </Button>
                    </div>
                  </div>
                </div>
              </div>
            </TabsContent>

            {/* AEO Tab Content */}
            <TabsContent value="aeo">
              <div className="rounded-2xl p-8 ring-1 ring-foreground/10 lg:p-10">
                <div className="grid gap-8 lg:grid-cols-2 lg:gap-12">
                  {/* Left: Stats as prose */}
                  <div className="flex flex-col justify-center">
                    <div className="mb-6">
                      <span className="font-extrabold text-5xl text-primary tracking-tight lg:text-6xl">
                        1000%
                      </span>
                      <span className="ml-3 text-muted-foreground">
                        Brand Visibility Growth
                      </span>
                    </div>
                    <p className="text-foreground leading-relaxed">
                      Answer Engine Optimization is the next evolution of
                      search. When users ask AI for recommendations, your brand
                      needs to be the answer.
                    </p>
                  </div>

                  {/* Right: Description + CTA */}
                  <div className="flex flex-col justify-center">
                    <h3 className="mb-3 font-bold text-2xl">
                      Answer Engine Optimization
                    </h3>
                    <p className="mb-6 text-muted-foreground leading-relaxed">
                      Ensure your brand appears in AI-generated answers across
                      all platforms. Dominate the conversation before your
                      competitors catch on.
                    </p>
                    <div>
                      <Button render={<Link to="/geo" />} variant="outline">
                        Learn about AEO
                        <HugeiconsIcon
                          icon={ArrowRight01Icon}
                          size={16}
                          strokeWidth={2}
                          data-icon="inline-end"
                        />
                      </Button>
                    </div>
                  </div>
                </div>
              </div>
            </TabsContent>

            {/* SEO Tab Content */}
            <TabsContent value="seo">
              <div className="rounded-2xl p-8 ring-1 ring-foreground/10 lg:p-10">
                <div className="grid gap-8 lg:grid-cols-2 lg:gap-12">
                  {/* Left: Stats + Testimonial as prose */}
                  <div className="flex flex-col justify-center">
                    <div className="mb-6">
                      <span className="font-extrabold text-5xl text-primary tracking-tight lg:text-6xl">
                        300+
                      </span>
                      <span className="ml-3 text-muted-foreground">
                        Businesses Served Since 2012
                      </span>
                    </div>
                    <p className="text-foreground leading-relaxed">
                      <span className="font-semibold">Tanner Bishop</span> of
                      Royal Covers says: "After 40+ years in business, One
                      Percent Digital helped us finally break through online.
                      We're now the #1 patio cover company in Arizona."
                    </p>
                  </div>

                  {/* Right: Description + CTA */}
                  <div className="flex flex-col justify-center">
                    <h3 className="mb-3 font-bold text-2xl">
                      Search Engine Optimization
                    </h3>
                    <p className="mb-6 text-muted-foreground leading-relaxed">
                      Rank on page 1 of Google and other search engines.
                      Sustainable organic growth through proven strategies that
                      deliver qualified traffic.
                    </p>
                    <div>
                      <Button render={<Link to="/seo" />} variant="outline">
                        Learn about SEO
                        <HugeiconsIcon
                          icon={ArrowRight01Icon}
                          size={16}
                          strokeWidth={2}
                          data-icon="inline-end"
                        />
                      </Button>
                    </div>
                  </div>
                </div>
              </div>
            </TabsContent>

            {/* PPL Tab Content */}
            <TabsContent value="ppl">
              <div className="rounded-2xl p-8 ring-1 ring-foreground/10 lg:p-10">
                <div className="grid gap-8 lg:grid-cols-2 lg:gap-12">
                  {/* Left: Stats as prose */}
                  <div className="flex flex-col justify-center">
                    <div className="mb-6">
                      <span className="font-extrabold text-5xl text-primary tracking-tight lg:text-6xl">
                        $200M+
                      </span>
                      <span className="ml-3 text-muted-foreground">
                        Revenue Generated
                      </span>
                    </div>
                    <p className="text-foreground leading-relaxed">
                      Our pay per lead model has generated over $200 million in
                      revenue for clients. Zero risk, maximum reward.
                    </p>
                  </div>

                  {/* Right: Description + CTA */}
                  <div className="flex flex-col justify-center">
                    <h3 className="mb-3 font-bold text-2xl">
                      Pay Per Lead Generation
                    </h3>
                    <p className="mb-6 text-muted-foreground leading-relaxed">
                      Exclusive pre-qualified leads delivered on demand. We fund
                      your marketing campaigns. You only pay for results.
                    </p>
                    <div>
                      <Button render={<Link to="/ppl" />} variant="outline">
                        Learn about PPL
                        <HugeiconsIcon
                          icon={ArrowRight01Icon}
                          size={16}
                          strokeWidth={2}
                          data-icon="inline-end"
                        />
                      </Button>
                    </div>
                  </div>
                </div>
              </div>
            </TabsContent>
          </Tabs>
        </div>
      </section>

      {/* Final CTA Section */}
      <section className="border-border border-t px-6 py-16 lg:py-24">
        <div className="mx-auto max-w-3xl text-center">
          <h2 className="mb-4 font-bold text-3xl tracking-tight lg:text-4xl">
            Ready to Scale Your Business?
          </h2>
          <p className="mx-auto mb-8 max-w-xl text-muted-foreground">
            Whether through GEO, SEO, or PPL, we help you generate the leads you
            need to grow.
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
      </section>
    </>
  );
}
