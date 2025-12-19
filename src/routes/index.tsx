import {
  ArrowRight01Icon,
  Award01Icon,
  CheckmarkCircle02Icon,
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
      <section className="relative overflow-hidden bg-background px-6 py-16 lg:py-24">
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
            <div className="mb-16 flex flex-col items-center justify-center gap-3 sm:flex-row">
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

            {/* Three Service Cards */}
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
                  title: 'PM',
                  description: 'Pay Per Exclusive Pre-Qualified Lead',
                  href: '/pm',
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
                      Learn more
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
        </div>
      </section>

      {/* Services Overview Section */}
      <section className="border-border border-t px-6 py-16 lg:py-24">
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

          <div className="grid gap-6 lg:grid-cols-3">
            {[
              {
                title: 'Generative Engine Optimization',
                description:
                  'Position your brand at the forefront of AI-powered search. Be the answer when AI assistants recommend solutions.',
                features: [
                  'AI model optimization and prompt engineering',
                  'Strategic content structuring for LLM comprehension',
                  'Voice and conversational search optimization',
                ],
                href: '/geo',
                cta: 'More about GEO',
                image:
                  'https://images.unsplash.com/photo-1484557052118-f32bd25b45b5?w=800&h=450&fit=crop',
              },
              {
                title: 'Search Engine Optimization',
                description:
                  'Sustainable organic growth through proven strategies that drive qualified traffic and convert visitors.',
                features: [
                  'Technical SEO and site architecture optimization',
                  'Content strategy and authority building',
                  'Local and national search domination',
                ],
                href: '/seo',
                cta: 'More about SEO',
                image:
                  'https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=800&h=450&fit=crop',
              },
              {
                title: 'Performance Marketing',
                description:
                  'We fund your campaigns and deliver pre-qualified leads directly to your pipeline. Pay only for results.',
                features: [
                  'Zero upfront investment or retainers',
                  'Live exclusive pre-qualified leads',
                  'Scale volume based on your capacity',
                ],
                href: '/pm',
                cta: 'More about PM',
                image:
                  'https://images.unsplash.com/photo-1553877522-43269d4ea984?w=800&h=450&fit=crop',
              },
            ].map((service) => (
              <Card
                key={service.title}
                className="group flex flex-col overflow-hidden pt-0"
              >
                <div className="relative aspect-video overflow-hidden">
                  <div className="absolute inset-0 z-30 bg-primary opacity-50 mix-blend-color" />
                  <img
                    src={service.image}
                    alt={service.title}
                    className="relative z-20 aspect-video w-full object-cover brightness-[0.6] grayscale transition-transform duration-300 group-hover:scale-105"
                  />
                </div>
                <CardHeader>
                  <CardTitle>{service.title}</CardTitle>
                  <CardDescription className="leading-relaxed">
                    {service.description}
                  </CardDescription>
                </CardHeader>
                <CardContent className="flex-1">
                  <ul className="space-y-2">
                    {service.features.map((feature) => (
                      <li key={feature} className="flex items-start gap-2">
                        <HugeiconsIcon
                          icon={CheckmarkCircle02Icon}
                          size={16}
                          strokeWidth={1.5}
                          className="mt-0.5 shrink-0 text-primary"
                        />
                        <span className="text-foreground text-sm">
                          {feature}
                        </span>
                      </li>
                    ))}
                  </ul>
                </CardContent>
                <CardFooter>
                  <Button
                    render={<Link to={service.href} />}
                    variant="outline"
                    size="sm"
                  >
                    {service.cta}
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

      {/* Social Proof Section */}
      <section className="border-border border-y bg-muted/30 px-6 py-16 lg:py-20">
        <div className="mx-auto max-w-7xl">
          <div className="grid gap-8 md:grid-cols-3">
            {[
              {
                icon: Award01Icon,
                value: '300+',
                label: 'Businesses served since 2012',
              },
              {
                icon: Target01Icon,
                value: '$200M+',
                label: 'SEO-driven revenue generated',
              },
              {
                icon: UserGroupIcon,
                value: '8X',
                label: 'Average organic traffic growth',
              },
            ].map((stat) => (
              <div key={stat.label} className="text-center">
                <HugeiconsIcon
                  icon={stat.icon}
                  size={32}
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

      {/* Case Study Highlight */}
      <section className="px-6 py-16 lg:py-24">
        <div className="mx-auto max-w-7xl">
          <Card className="overflow-hidden p-0">
            <div className="grid lg:grid-cols-2">
              <div className="flex flex-col gap-6 p-6 lg:p-10">
                <Badge variant="secondary" className="w-fit">
                  Featured Case Study
                </Badge>
                <div>
                  <h2 className="mb-2 font-bold text-2xl lg:text-3xl">
                    Revology Cars: The Acquisition Story
                  </h2>
                  <p className="text-muted-foreground">
                    See how we helped a luxury restomod manufacturer dominate
                    search for classic Mustangs, get cited by ChatGPT, and
                    achieve a successful exit.
                  </p>
                </div>
                <div className="space-y-2">
                  {[
                    {
                      metric: 'Exit',
                      detail: 'Successful company acquisition',
                    },
                    {
                      metric: 'Page 1',
                      detail: 'Rankings for competitive terms',
                    },
                    {
                      metric: 'ChatGPT',
                      detail: 'Consistent AI platform citations',
                    },
                  ].map((item) => (
                    <div key={item.metric} className="flex items-center gap-3">
                      <span className="font-bold text-primary text-xl">
                        {item.metric}
                      </span>
                      <Separator orientation="vertical" className="h-4" />
                      <span className="text-muted-foreground text-sm">
                        {item.detail}
                      </span>
                    </div>
                  ))}
                </div>
                <div>
                  <Button render={<Link to="/case-studies" />}>
                    Read Full Case Study
                    <HugeiconsIcon
                      icon={ArrowRight01Icon}
                      size={16}
                      strokeWidth={2}
                      data-icon="inline-end"
                    />
                  </Button>
                </div>
              </div>
              <div className="relative min-h-48 overflow-hidden lg:min-h-0">
                <div className="absolute inset-0 z-30 bg-primary opacity-50 mix-blend-color" />
                <img
                  src={getImageUrl(
                    '7ab278bc-37c8-4d7e-21ee-ba2d463fa200',
                    'large',
                  )}
                  alt="Revology Cars"
                  className="relative z-20 h-full w-full object-contain p-8 dark:invert"
                />
              </div>
            </div>
          </Card>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="bg-background px-6 py-16 lg:py-24">
        <div className="mx-auto max-w-7xl">
          <div className="mb-12 text-center">
            <h2 className="mb-3 font-bold text-3xl lg:text-4xl">
              Trusted by Industry Leaders
            </h2>
            <p className="mx-auto max-w-xl text-muted-foreground">
              Don't just take our word for it. Here's what our clients say.
            </p>
          </div>

          <div className="mx-auto grid max-w-4xl gap-6 lg:grid-cols-2">
            {[
              {
                quote:
                  "Working with One Percent Digital transformed our online presence. We went from being invisible to showing up everywhere our customers search. We're now one of the top recommendations in ChatGPT for diesel injection pumps.",
                name: 'Scott Goldfarb',
                title: 'Owner, Goldfarb & Associates',
                logo: '51e5ac33-a0d2-4cdb-668e-581cba411a00',
              },
              {
                quote:
                  "After 40+ years in business, One Percent Digital helped us finally break through online. We're now the #1 patio cover company in Arizona with three straight years of record-breaking revenue.",
                name: 'Tanner Bishop',
                title: 'Owner, Royal Covers',
                logo: '5bacc41c-abd7-4b66-feeb-da11c01c8f00',
              },
            ].map((testimonial) => (
              <Card key={testimonial.name}>
                <CardContent className="pt-6">
                  <p className="mb-6 text-foreground leading-relaxed">
                    "{testimonial.quote}"
                  </p>
                  <div className="flex items-center gap-3">
                    <img
                      src={getImageUrl(testimonial.logo, 'thumbnail')}
                      alt={testimonial.name}
                      className="h-10 w-auto object-contain dark:invert"
                    />
                    <div>
                      <div className="font-medium text-foreground text-sm">
                        {testimonial.name}
                      </div>
                      <div className="text-muted-foreground text-xs">
                        {testimonial.title}
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Final CTA Section */}
      <section className="border-border border-t px-6 py-16 lg:py-24">
        <div className="mx-auto max-w-3xl text-center">
          <h2 className="mb-4 font-bold text-3xl tracking-tight lg:text-4xl">
            Ready to Scale Your Business?
          </h2>
          <p className="mx-auto mb-8 max-w-xl text-muted-foreground">
            Whether through SEO, GEO, or Performance Marketing, we help you
            generate the leads you need to grow.
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
