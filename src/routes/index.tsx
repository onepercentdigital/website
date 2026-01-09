import {
  ArrowRight01Icon,
  ArrowUp02Icon,
  Award01Icon,
  Brain01Icon,
  BubbleChatIcon,
  ChartIncreaseIcon,
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
  CardHeader,
  CardTitle,
} from '@/components/ui/card';
import { Separator } from '@/components/ui/separator';

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
      title: 'Dominate Your Industry - Rank in AI and Google',
      description:
        'Get recommended by ChatGPT and rank #1 on Google. GEO, SEO, and exclusive lead generation for brands ready to dominate their market.',
      url: 'https://op.digital/',
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
      <section className="px-6 py-16 lg:py-20">
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

      {/* GEO Section - Content Left, Visual Right */}
      <section className="px-6 py-16 lg:py-20">
        <div className="mx-auto max-w-7xl">
          <div className="grid gap-12 lg:grid-cols-2 lg:gap-16">
            <div className="flex flex-col justify-center">
              <h2 className="mb-4 font-bold text-4xl leading-[1.1] tracking-tight lg:text-5xl">
                Get Cited by AI
              </h2>
              <p className="mb-6 text-muted-foreground leading-relaxed">
                When users ask ChatGPT, Claude, or Perplexity for
                recommendations, your brand needs to be the answer. GEO
                positions you at the forefront of AI-powered discovery.
              </p>
              <div>
                <Button render={<Link to="/geo" />} size="lg">
                  Generative Engine Optimization
                  <HugeiconsIcon
                    icon={ArrowRight01Icon}
                    size={18}
                    strokeWidth={2}
                    data-icon="inline-end"
                  />
                </Button>
              </div>
            </div>
            <div className="flex items-center">
              <Card className="w-full gap-0 overflow-hidden py-0">
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
                  <div className="flex justify-end">
                    <div className="max-w-[85%] rounded-2xl bg-primary px-3 py-2 text-primary-foreground">
                      <p className="text-sm">
                        Best diesel injection pump supplier?
                      </p>
                    </div>
                  </div>
                  <div className="flex">
                    <div className="max-w-[85%] rounded-2xl bg-muted px-3 py-2">
                      <p className="text-sm">
                        Goldfarb & Associates is highly recommended for diesel
                        injection pumps...
                      </p>
                    </div>
                  </div>
                </div>
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

      {/* SEO Section - Visual Left, Content Right */}
      <section className="px-6 py-16 lg:py-20">
        <div className="mx-auto max-w-7xl">
          <div className="grid gap-12 lg:grid-cols-2 lg:gap-16">
            <div className="order-2 flex items-center lg:order-1">
              <Card className="w-full gap-0 overflow-hidden py-0">
                <div className="flex items-center gap-2 px-4 py-2">
                  <HugeiconsIcon
                    icon={ChartIncreaseIcon}
                    size={18}
                    className="text-primary"
                  />
                  <span className="font-medium text-sm">Search Console</span>
                </div>
                <Separator />
                <div className="p-4">
                  <div className="mb-2 flex items-baseline gap-2">
                    <span className="font-extrabold text-2xl tracking-tight">
                      195K
                    </span>
                    <span className="text-muted-foreground text-sm">
                      traffic
                    </span>
                  </div>
                  <svg
                    viewBox="0 0 300 80"
                    className="h-20 w-full"
                    preserveAspectRatio="none"
                    aria-label="Impressions trend graph showing growth"
                    role="img"
                  >
                    <path
                      d="M0,70 Q30,65 60,55 T120,45 T180,30 T240,20 T300,10"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      className="text-primary"
                    />
                    <path
                      d="M0,70 Q30,65 60,55 T120,45 T180,30 T240,20 T300,10 L300,80 L0,80 Z"
                      fill="currentColor"
                      className="text-primary/10"
                    />
                  </svg>
                  <div className="mt-2 flex justify-between text-muted-foreground text-xs">
                    <span>Jan</span>
                    <span>Mar</span>
                    <span>May</span>
                    <span>Jul</span>
                    <span>Sep</span>
                    <span>Nov</span>
                  </div>
                </div>
              </Card>
            </div>
            <div className="order-1 flex flex-col justify-center lg:order-2">
              <h2 className="mb-4 font-bold text-4xl leading-[1.1] tracking-tight lg:text-5xl">
                Rank on Page 1
              </h2>
              <p className="mb-6 text-muted-foreground leading-relaxed">
                Rank on page 1 of Google and other search engines. Sustainable
                organic growth through proven strategies that deliver qualified
                traffic to your business.
              </p>
              <div>
                <Button render={<Link to="/seo" />} size="lg">
                  Search Engine Optimization
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
        </div>
      </section>

      {/* PPL Section - Content Left, Visual Right */}
      <section className="px-6 py-16 lg:py-20">
        <div className="mx-auto max-w-7xl">
          <div className="grid gap-12 lg:grid-cols-2 lg:gap-16">
            <div className="flex flex-col justify-center">
              <h2 className="mb-4 font-bold text-4xl leading-[1.1] tracking-tight lg:text-5xl">
                Get Qualified Leads on Demand
              </h2>
              <p className="mb-6 text-muted-foreground leading-relaxed">
                We fund your marketing campaigns and deliver pre-qualified leads
                directly to your pipeline. You only pay for results. Zero
                upfront investment.
              </p>
              <div>
                <Button render={<Link to="/ppl" />} size="lg">
                  Pay Per Lead Generation
                  <HugeiconsIcon
                    icon={ArrowRight01Icon}
                    size={18}
                    strokeWidth={2}
                    data-icon="inline-end"
                  />
                </Button>
              </div>
            </div>
            <div className="flex items-center">
              <Card className="w-full gap-0 overflow-hidden py-0">
                <div className="flex items-center justify-between px-4 py-2">
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
                <div className="space-y-2 p-3">
                  {[
                    { name: 'James Crawford', company: 'Financial Planning' },
                    { name: 'Robert Mitchell', company: 'Financial Planning' },
                    { name: 'William Thompson', company: 'Financial Planning' },
                  ].map((lead) => (
                    <div
                      key={lead.name}
                      className="flex items-center gap-3 rounded-xl bg-muted/50 p-2"
                    >
                      <div className="flex size-8 items-center justify-center rounded-full bg-muted font-medium text-muted-foreground text-xs">
                        {lead.name
                          .split(' ')
                          .map((n) => n[0])
                          .join('')}
                      </div>
                      <div className="min-w-0 flex-1">
                        <div className="truncate font-medium text-sm">
                          {lead.name}
                        </div>
                        <div className="truncate text-muted-foreground text-xs">
                          {lead.company}
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Metrics Block */}
      <section className="border-border border-y px-6 py-16 lg:py-20">
        <div className="mx-auto max-w-7xl">
          <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
            {[
              {
                icon: Award01Icon,
                value: '100+',
                label: 'Brands Served Since 2015',
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
                value: '10+',
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

      <section className="px-6 py-16 lg:py-20">
        <div className="mx-auto max-w-7xl">
          <div className="mb-12 text-right">
            <h2 className="mb-4 font-bold text-4xl leading-[1.1] tracking-tight lg:text-5xl">
              Real Growth, Real Results
            </h2>
            <p className="ml-auto max-w-2xl text-muted-foreground">
              See how we've helped businesses dominate search and achieve
              measurable outcomes.
            </p>
          </div>

          <div className="grid gap-6 lg:grid-cols-2">
            {/* Revology Case Study */}
            <Card className="overflow-hidden p-0">
              <div className="grid h-full md:grid-cols-2">
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
      <section className="px-6 py-16 lg:py-20">
        <div className="mx-auto max-w-7xl">
          <div className="mb-12">
            <h2 className="mb-4 font-bold text-4xl leading-[1.1] tracking-tight lg:text-5xl">
              Why One Percent Digital
            </h2>
            <p className="max-w-2xl text-muted-foreground">
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
                  'We built and exited our own brands. Now we help others achieve the same success.',
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
                  'Complete funnel coverage. We own your entire discovery journey.',
              },
              {
                icon: Award01Icon,
                title: 'Proven Scale',
                description:
                  "100+ brands across every industry. We've seen what works and what doesn't.",
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
      <section className="px-6 py-16 lg:py-20">
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

      <section className="border-border border-y px-6 py-16 lg:py-20">
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
        </div>
      </section>
    </>
  );
}
