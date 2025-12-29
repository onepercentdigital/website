import {
  ArrowRight01Icon,
  Award01Icon,
  Brain01Icon,
  Building03Icon,
  Car01Icon,
  Factory02Icon,
  Home03Icon,
  Restaurant01Icon,
  ShoppingBag02Icon,
  Target01Icon,
  UserGroupIcon,
} from '@hugeicons/core-free-icons';
import { HugeiconsIcon } from '@hugeicons/react';
import { createFileRoute, Link } from '@tanstack/react-router';
import { SEO } from '@/components/SEO';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from '@/components/ui/card';
import { Separator } from '@/components/ui/separator';
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

// High-ROI industries
const industries = [
  {
    name: 'Manufacturing & Industrial',
    icon: Factory02Icon,
    href: '/solutions/manufacturing',
  },
  {
    name: 'E-commerce & Retail',
    icon: ShoppingBag02Icon,
    href: '/solutions/ecommerce',
  },
  {
    name: 'Construction & Contractors',
    icon: Building03Icon,
    href: '/solutions/construction',
  },
  { name: 'Automotive', icon: Car01Icon, href: '/solutions/automotive' },
  {
    name: 'Hospitality & Restaurants',
    icon: Restaurant01Icon,
    href: '/solutions/hospitality',
  },
  {
    name: 'Health & Wellness',
    icon: Home03Icon,
    href: '/solutions/health-wellness',
  },
] as const;

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
      <section className="px-6 pt-16 pb-8 lg:pt-24 lg:pb-12">
        <div className="mx-auto max-w-7xl">
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
      <section className="overflow-hidden py-8">
        <div className="mx-auto max-w-5xl px-6">
          <div className="group relative overflow-hidden">
            {/* Fade edges */}
            <div className="pointer-events-none absolute top-0 left-0 z-10 h-full w-20 bg-gradient-to-r from-background to-transparent" />
            <div className="pointer-events-none absolute top-0 right-0 z-10 h-full w-20 bg-gradient-to-l from-background to-transparent" />

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
      {/* Three Service Cards */}
      <section className="px-6 py-8 lg:py-12">
        <div className="mx-auto max-w-4xl">
          <div className="grid grid-cols-1 gap-4 md:grid-cols-3">
            {[
              {
                title: 'GEO',
                description: 'Get Cited by ChatGPT and other AI models',
                href: '/geo',
              },
              {
                title: 'SEO',
                description: 'Rank in Google and other search engines',
                href: '/seo',
              },
              {
                title: 'PPL',
                description: 'Exclusive Pre-Qualified Pay Per Lead Generation',
                href: '/ppl',
              },
            ].map((service) => (
              <Card key={service.title} className="group text-center">
                <CardHeader className="items-center">
                  <CardTitle className="text-2xl lg:text-3xl">
                    {service.title}
                  </CardTitle>
                  <CardDescription>{service.description}</CardDescription>
                </CardHeader>
                <CardFooter className="justify-center">
                  <Button
                    render={<Link to={service.href} />}
                    variant="outline"
                    size="sm"
                  >
                    More about {service.title}
                    <HugeiconsIcon
                      icon={ArrowRight01Icon}
                      size={14}
                      strokeWidth={2}
                      data-icon="inline-end"
                    />
                  </Button>
                </CardFooter>
              </Card>
            ))}
          </div>
        </div>
      </section>
      {/* Metrics Block */}
      <section className="px-6 py-12 lg:py-16">
        <div className="mx-auto max-w-7xl">
          <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
            {[
              {
                icon: Award01Icon,
                value: '300+',
                label: 'Brands Served Since 2012',
              },
              {
                icon: Target01Icon,
                value: '$200M+',
                label: 'Revenue Generated',
              },
              {
                icon: UserGroupIcon,
                value: '8X',
                label: 'Avg Organic Traffic Growth',
              },
              {
                icon: Brain01Icon,
                value: '12+',
                label: 'Years of Experience',
              },
            ].map((stat) => (
              <div key={stat.label} className="text-center">
                <HugeiconsIcon
                  icon={stat.icon}
                  size={28}
                  strokeWidth={1.5}
                  className="mx-auto mb-3 text-primary"
                />
                <div className="mb-1 font-extrabold text-4xl tracking-tight lg:text-5xl">
                  {stat.value}
                </div>
                <div className="text-muted-foreground text-sm">
                  {stat.label}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
      <section className="px-6 py-16 lg:py-24">
        <div className="mx-auto max-w-7xl">
          <div className="mx-auto max-w-3xl text-center">
            <h2 className="mb-6 font-bold text-4xl leading-[1.1] tracking-tight lg:text-5xl">
              The Discovery Landscape Has Changed
            </h2>
            <p className="mb-10 text-muted-foreground lg:text-lg">
              AI assistants now influence buying decisions. 40% of searches are
              zero-click — AI answers directly. Traditional SEO alone leaves you
              invisible to ChatGPT, Claude, and Perplexity.
            </p>
          </div>

          <div className="mx-auto grid max-w-4xl gap-6 lg:grid-cols-3">
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
              <div
                key={item.title}
                className="rounded-2xl p-6 ring-1 ring-foreground/10"
              >
                <h3 className="mb-2 font-semibold text-lg">{item.title}</h3>
                <p className="text-muted-foreground text-sm leading-relaxed">
                  {item.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>
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
            {/* GEO Tab Content */}
            <TabsContent value="geo">
              <div className="rounded-2xl p-8 ring-1 ring-foreground/10 lg:p-10">
                <div className="mb-8 grid gap-8 lg:grid-cols-5 lg:gap-12">
                  {/* Left: Stats + Copy (3/5 width) */}
                  <div className="flex flex-col justify-center lg:col-span-3">
                    <div className="mb-4 flex flex-wrap items-baseline gap-x-6 gap-y-2">
                      <div>
                        <span className="font-extrabold text-5xl text-primary tracking-tight lg:text-6xl">
                          #1
                        </span>
                        <span className="ml-2 text-muted-foreground">
                          ChatGPT Recommendation
                        </span>
                      </div>
                      <div>
                        <span className="font-extrabold text-3xl text-primary tracking-tight lg:text-4xl">
                          10X
                        </span>
                        <span className="ml-2 text-muted-foreground text-sm">
                          Revenue Growth
                        </span>
                      </div>
                    </div>
                    <p className="text-muted-foreground text-sm">
                      Goldfarb & Associates
                    </p>
                    <p className="mt-4 text-foreground leading-relaxed">
                      When users ask ChatGPT, Claude, or Perplexity for
                      recommendations, your brand needs to be the answer. GEO
                      positions you at the forefront of AI-powered discovery.
                    </p>
                  </div>

                  {/* Right: Description (2/5 width) */}
                  <div className="flex flex-col justify-center lg:col-span-2">
                    <p className="text-muted-foreground leading-relaxed">
                      Get cited by AI platforms and become the trusted
                      recommendation in your industry.
                    </p>
                  </div>
                </div>

                {/* Bottom row: Tabs left, CTA right */}
                <div className="flex flex-wrap items-center justify-between gap-4">
                  <TabsList className="w-fit">
                    <TabsTrigger value="geo">GEO</TabsTrigger>
                    <TabsTrigger value="seo">SEO</TabsTrigger>
                    <TabsTrigger value="ppl">PPL</TabsTrigger>
                  </TabsList>
                  <Button render={<Link to="/geo" />} variant="outline">
                    Generative Engine Optimization For Your Brand
                    <HugeiconsIcon
                      icon={ArrowRight01Icon}
                      size={16}
                      strokeWidth={2}
                      data-icon="inline-end"
                    />
                  </Button>
                </div>
              </div>
            </TabsContent>

            {/* SEO Tab Content */}
            <TabsContent value="seo">
              <div className="rounded-2xl p-8 ring-1 ring-foreground/10 lg:p-10">
                <div className="mb-8 grid gap-8 lg:grid-cols-5 lg:gap-12">
                  {/* Left: Stats + Copy (3/5 width) */}
                  <div className="flex flex-col justify-center lg:col-span-3">
                    <div className="mb-6">
                      <span className="font-extrabold text-5xl text-primary tracking-tight lg:text-6xl">
                        300+
                      </span>
                      <span className="ml-3 text-muted-foreground">
                        Businesses Served Since 2012
                      </span>
                    </div>
                    <p className="text-foreground leading-relaxed">
                      Rank on page 1 of Google and other search engines.
                      Sustainable organic growth through proven strategies that
                      deliver qualified traffic to your business.
                    </p>
                  </div>

                  {/* Right: Description (2/5 width) */}
                  <div className="flex flex-col justify-center lg:col-span-2">
                    <p className="text-muted-foreground leading-relaxed">
                      Technical SEO, content strategy, and authority building
                      that compounds over time.
                    </p>
                  </div>
                </div>

                {/* Bottom row: Tabs left, CTA right */}
                <div className="flex flex-wrap items-center justify-between gap-4">
                  <TabsList className="w-fit">
                    <TabsTrigger value="geo">GEO</TabsTrigger>
                    <TabsTrigger value="seo">SEO</TabsTrigger>
                    <TabsTrigger value="ppl">PPL</TabsTrigger>
                  </TabsList>
                  <Button render={<Link to="/seo" />} variant="outline">
                    Search Engine Optimization For Your Brand
                    <HugeiconsIcon
                      icon={ArrowRight01Icon}
                      size={16}
                      strokeWidth={2}
                      data-icon="inline-end"
                    />
                  </Button>
                </div>
              </div>
            </TabsContent>

            {/* PPL Tab Content */}
            <TabsContent value="ppl">
              <div className="rounded-2xl p-8 ring-1 ring-foreground/10 lg:p-10">
                <div className="mb-8 grid gap-8 lg:grid-cols-5 lg:gap-12">
                  {/* Left: Stats + Copy (3/5 width) */}
                  <div className="flex flex-col justify-center lg:col-span-3">
                    <div className="mb-6">
                      <span className="font-extrabold text-5xl text-primary tracking-tight lg:text-6xl">
                        $200M+
                      </span>
                      <span className="ml-3 text-muted-foreground">
                        Revenue Generated
                      </span>
                    </div>
                    <p className="text-foreground leading-relaxed">
                      We fund your marketing campaigns and deliver pre-qualified
                      leads directly to your pipeline. You only pay for results.
                    </p>
                  </div>

                  {/* Right: Description (2/5 width) */}
                  <div className="flex flex-col justify-center lg:col-span-2">
                    <p className="text-muted-foreground leading-relaxed">
                      Zero upfront investment. Scale volume based on your
                      capacity.
                    </p>
                  </div>
                </div>

                {/* Bottom row: Tabs left, CTA right */}
                <div className="flex flex-wrap items-center justify-between gap-4">
                  <TabsList className="w-fit">
                    <TabsTrigger value="geo">GEO</TabsTrigger>
                    <TabsTrigger value="seo">SEO</TabsTrigger>
                    <TabsTrigger value="ppl">PPL</TabsTrigger>
                  </TabsList>
                  <Button render={<Link to="/ppl" />} variant="outline">
                    Pay Per Lead Generation For Your Brand
                    <HugeiconsIcon
                      icon={ArrowRight01Icon}
                      size={16}
                      strokeWidth={2}
                      data-icon="inline-end"
                    />
                  </Button>
                </div>
              </div>
            </TabsContent>
          </Tabs>
        </div>
      </section>
      <section className="px-6 py-16 lg:py-24">
        <div className="mx-auto max-w-7xl">
          <div className="mb-12 text-center">
            <h2 className="mb-4 font-bold text-4xl leading-[1.1] tracking-tight lg:text-5xl">
              Real Results, Real Exits
            </h2>
            <p className="mx-auto max-w-2xl text-muted-foreground">
              See how we've helped businesses dominate search and achieve
              measurable outcomes.
            </p>
          </div>

          <div className="grid gap-6 lg:grid-cols-2">
            {/* Revology Case Study */}
            <Card className="overflow-hidden p-0">
              <div className="grid md:grid-cols-2">
                <div className="flex flex-col gap-4 p-6 lg:p-8">
                  <Badge variant="secondary" className="w-fit">
                    Featured Case Study
                  </Badge>
                  <div>
                    <h3 className="mb-2 font-bold text-xl lg:text-2xl">
                      Revology Cars: The Acquisition Story
                    </h3>
                    <p className="text-muted-foreground text-sm leading-relaxed">
                      Helped a luxury restomod manufacturer dominate search for
                      classic Mustangs and achieve a successful exit.
                    </p>
                  </div>
                  <div className="space-y-2">
                    {[
                      { metric: 'Exit', detail: 'Successful acquisition' },
                      { metric: 'Page 1', detail: 'Competitive terms' },
                      { metric: 'ChatGPT', detail: 'AI citations' },
                    ].map((item) => (
                      <div
                        key={item.metric}
                        className="flex items-center gap-3"
                      >
                        <span className="font-bold text-primary">
                          {item.metric}
                        </span>
                        <Separator orientation="vertical" className="h-4" />
                        <span className="text-muted-foreground text-sm">
                          {item.detail}
                        </span>
                      </div>
                    ))}
                  </div>
                  <Button
                    render={<Link to="/case-studies" />}
                    variant="outline"
                    size="sm"
                    className="w-fit"
                  >
                    Read Case Study
                    <HugeiconsIcon
                      icon={ArrowRight01Icon}
                      size={14}
                      strokeWidth={2}
                      data-icon="inline-end"
                    />
                  </Button>
                </div>
                <div className="flex items-center justify-center bg-muted/30 p-8">
                  <img
                    src={getImageUrl(
                      '7ab278bc-37c8-4d7e-21ee-ba2d463fa200',
                      'medium',
                    )}
                    alt="Revology Cars"
                    className="h-16 w-auto object-contain lg:h-20 dark:invert"
                  />
                </div>
              </div>
            </Card>

            {/* Goldfarb Case Study */}
            <Card className="overflow-hidden p-0">
              <div className="grid md:grid-cols-2">
                <div className="flex flex-col gap-4 p-6 lg:p-8">
                  <Badge variant="secondary" className="w-fit">
                    Featured Case Study
                  </Badge>
                  <div>
                    <h3 className="mb-2 font-bold text-xl lg:text-2xl">
                      Goldfarb & Associates: 10X Revenue
                    </h3>
                    <p className="text-muted-foreground text-sm leading-relaxed">
                      Transformed a diesel parts supplier into the top ChatGPT
                      recommendation for injection pumps.
                    </p>
                  </div>
                  <div className="space-y-2">
                    {[
                      { metric: '10X', detail: 'Revenue growth' },
                      { metric: '#1', detail: 'ChatGPT recommendation' },
                      { metric: 'Millions', detail: 'SKUs sold globally' },
                    ].map((item) => (
                      <div
                        key={item.metric}
                        className="flex items-center gap-3"
                      >
                        <span className="font-bold text-primary">
                          {item.metric}
                        </span>
                        <Separator orientation="vertical" className="h-4" />
                        <span className="text-muted-foreground text-sm">
                          {item.detail}
                        </span>
                      </div>
                    ))}
                  </div>
                  <Button
                    render={<Link to="/case-studies" />}
                    variant="outline"
                    size="sm"
                    className="w-fit"
                  >
                    Read Case Study
                    <HugeiconsIcon
                      icon={ArrowRight01Icon}
                      size={14}
                      strokeWidth={2}
                      data-icon="inline-end"
                    />
                  </Button>
                </div>
                <div className="flex items-center justify-center bg-muted/30 p-8">
                  <img
                    src={getImageUrl(
                      '51e5ac33-a0d2-4cdb-668e-581cba411a00',
                      'medium',
                    )}
                    alt="Goldfarb & Associates"
                    className="h-16 w-auto object-contain lg:h-20 dark:invert"
                  />
                </div>
              </div>
            </Card>
          </div>
        </div>
      </section>
      <section className="px-6 py-16 lg:py-24">
        <div className="mx-auto max-w-7xl">
          <div className="mb-12 text-center">
            <h2 className="mb-4 font-bold text-4xl leading-[1.1] tracking-tight lg:text-5xl">
              Why One Percent Digital
            </h2>
            <p className="mx-auto max-w-2xl text-muted-foreground">
              We're not another agency. We're operators who've built and scaled
              businesses ourselves.
            </p>
          </div>

          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {[
              {
                icon: UserGroupIcon,
                title: 'Entrepreneur-Led',
                description:
                  'We run our own businesses, not just consultancies. We understand growth from the inside.',
              },
              {
                icon: Target01Icon,
                title: 'Results-Focused',
                description:
                  'We measure ROI and revenue, not vanity metrics. Your success is our success.',
              },
              {
                icon: Brain01Icon,
                title: 'Full-Stack Approach',
                description:
                  'GEO + SEO + PPL = complete funnel coverage. We own your entire discovery journey.',
              },
              {
                icon: Award01Icon,
                title: 'Proven Scale',
                description:
                  "300+ brands across every industry. We've seen what works and what doesn't.",
              },
            ].map((item) => (
              <Card key={item.title}>
                <CardHeader>
                  <HugeiconsIcon
                    icon={item.icon}
                    size={28}
                    strokeWidth={1.5}
                    className="mb-2 text-primary"
                  />
                  <CardTitle className="text-lg">{item.title}</CardTitle>
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
      <section className="px-6 py-16 lg:py-24">
        <div className="mx-auto max-w-7xl">
          <div className="mb-12 text-center">
            <h2 className="mb-4 font-bold text-4xl leading-[1.1] tracking-tight lg:text-5xl">
              Trusted by Industry Leaders
            </h2>
            <p className="mx-auto max-w-2xl text-muted-foreground">
              Don't just take our word for it. Here's what our clients say.
            </p>
          </div>

          <div className="mx-auto grid max-w-5xl gap-6 lg:grid-cols-2">
            {/* Goldfarb Testimonial */}
            <Card>
              <CardContent className="pt-6">
                <p className="mb-6 text-foreground leading-relaxed">
                  "Working with One Percent Digital transformed our online
                  presence. We went from being invisible to showing up
                  everywhere our customers search. We're now one of the top
                  recommendations in ChatGPT for diesel injection pumps."
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
              </CardContent>
            </Card>

            {/* Royal Covers Testimonial */}
            <Card>
              <CardContent className="pt-6">
                <p className="mb-6 text-foreground leading-relaxed">
                  "After 40+ years in business, One Percent Digital helped us
                  finally break through online. We're now the #1 patio cover
                  company in Arizona with three straight years of
                  record-breaking revenue."
                </p>
                <div className="flex items-center gap-4">
                  <img
                    src={getImageUrl(
                      '5bacc41c-abd7-4b66-feeb-da11c01c8f00',
                      'thumbnail',
                    )}
                    alt="Royal Covers"
                    className="h-10 w-auto object-contain dark:invert"
                  />
                  <div>
                    <div className="font-medium text-foreground text-sm">
                      Tanner Bishop
                    </div>
                    <div className="text-muted-foreground text-sm">
                      Owner, Royal Covers
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>
      <section className="border-border border-t px-6 py-16 lg:py-24">
        <div className="mx-auto max-w-7xl">
          <div className="mb-12 text-center">
            <h2 className="mb-4 font-bold text-4xl leading-[1.1] tracking-tight lg:text-5xl">
              Proven Across High-Value Industries
            </h2>
            <p className="mx-auto max-w-2xl text-muted-foreground">
              From manufacturing to hospitality, we've helped businesses in
              every vertical dominate their markets.
            </p>
          </div>

          <div className="mx-auto grid max-w-4xl gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {industries.map((industry) => (
              <Link
                key={industry.href}
                to={industry.href}
                className="group flex items-center gap-4 rounded-2xl p-4 ring-1 ring-foreground/10 transition-colors hover:bg-muted/50"
              >
                <HugeiconsIcon
                  icon={industry.icon}
                  size={24}
                  strokeWidth={1.5}
                  className="text-primary"
                />
                <span className="font-medium">{industry.name}</span>
                <HugeiconsIcon
                  icon={ArrowRight01Icon}
                  size={16}
                  strokeWidth={2}
                  className="ml-auto text-muted-foreground opacity-0 transition-opacity group-hover:opacity-100"
                />
              </Link>
            ))}
          </div>

          <div className="mt-8 text-center">
            <Button render={<Link to="/solutions" />} variant="outline">
              View All Industry Solutions
              <HugeiconsIcon
                icon={ArrowRight01Icon}
                size={16}
                strokeWidth={2}
                data-icon="inline-end"
              />
            </Button>
          </div>
        </div>
      </section>
      <section className="border-border border-t px-6 py-16 lg:py-24">
        <div className="mx-auto max-w-3xl text-center">
          <h2 className="mb-4 font-bold text-3xl tracking-tight lg:text-4xl">
            Ready to Dominate Your Industry?
          </h2>
          <p className="mx-auto mb-8 max-w-xl text-muted-foreground">
            Whether through GEO, SEO, or PPL, we help you generate the leads you
            need to grow.
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
          <div className="flex flex-wrap items-center justify-center gap-x-6 gap-y-2 text-muted-foreground text-sm">
            <Link to="/geo" className="transition-colors hover:text-foreground">
              Learn About GEO
            </Link>
            <Link to="/seo" className="transition-colors hover:text-foreground">
              Learn About SEO
            </Link>
            <Link to="/ppl" className="transition-colors hover:text-foreground">
              Learn About PPL
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
