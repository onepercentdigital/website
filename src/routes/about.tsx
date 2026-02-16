import {
  ArrowRight01Icon,
  Award01Icon,
  Briefcase01Icon,
  ChartIncreaseIcon,
  Clock01Icon,
  UserGroupIcon,
} from '@hugeicons/core-free-icons';
import { HugeiconsIcon } from '@hugeicons/react';
import { createFileRoute, Link } from '@tanstack/react-router';
import { Image } from '@/components/Image';
import { SEO } from '@/components/SEO';
import { Button } from '@/components/ui/button';
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from '@/components/ui/card';
import { getAllTeamMembers } from '@/data/team';
import { generateMetaTags } from '@/lib/seo';

export const Route = createFileRoute('/about')({
  component: AboutPage,
  head: () =>
    generateMetaTags({
      title: 'About One Percent Digital - Our Team & Approach',
      description:
        'Entrepreneurs who built and sold their own brands. We bring 10+ years of experience in GEO, SEO, and lead generation to help you dominate your market.',
      url: 'https://op.digital/about',
    }),
});

function AboutPage() {
  const teamMembers = getAllTeamMembers();

  const organizationSchema = {
    type: 'Organization' as const,
    data: {
      '@type': 'Organization',
      name: 'One Percent Digital',
      url: 'https://op.digital',
      description:
        'Enterprise-grade GEO, SEO, and PPL services for businesses that demand results at scale.',
      founder: [
        {
          '@type': 'Person',
          name: 'Luke Jordon',
          jobTitle: 'Co-Founder & Lead Optimization Architect',
        },
        {
          '@type': 'Person',
          name: 'Mackey Martin',
          jobTitle: 'Co-Founder & Lead Optimization Architect',
        },
      ],
    },
  };

  return (
    <>
      <SEO structuredData={[organizationSchema]} />

      {/* Hero Section */}
      <section className="px-6 py-16 lg:py-20">
        <div className="mx-auto max-w-7xl">
          <div className="mx-auto max-w-4xl text-center">
            <h1 className="mb-6 font-extrabold text-5xl leading-[0.95] tracking-tighter lg:mb-8 lg:text-7xl xl:text-8xl">
              Meet the One Percent Digital Team
            </h1>
            <p className="mx-auto mb-10 max-w-2xl text-muted-foreground leading-relaxed lg:text-lg">
              We're not just marketing experts. We're entrepreneurs with a
              proven track record. We understand the challenges you face because
              we face them too.
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

      {/* Our Story Section */}
      <section className="px-6 py-16 lg:py-20">
        <div className="mx-auto max-w-7xl">
          <div className="grid gap-12 lg:grid-cols-2 lg:gap-16">
            <div>
              <h2 className="mb-4 font-bold text-4xl leading-[1.1] tracking-tight lg:text-5xl">
                Our Story
              </h2>
              <p className="mb-6 text-muted-foreground leading-relaxed">
                One Percent Digital was founded on a simple principle: the best
                marketing experts are the ones who run their own businesses.
                We're not consultants who learned SEO from textbooks. We're
                entrepreneurs who built and successfully exited multiple
                E-commerce brands, and now we're helping others do the same.
              </p>
              <p className="mb-6 text-muted-foreground leading-relaxed">
                Since 2015, our team has worked with over 100 brands across
                every industry imaginable. We've navigated countless Google
                algorithm updates, scaled businesses through multiple economic
                cycles, and helped our clients capture maximum market share in
                their industries. But what truly sets us apart is our hands-on
                experience running our own companies.
              </p>
              <p className="text-muted-foreground leading-relaxed">
                When you work with One Percent Digital, you're not just hiring
                an agency. You're partnering with fellow entrepreneurs who treat
                your business like our own. We understand ROI, budget
                constraints, competitive pressures, and the need for strategies
                that actually move the needle. That's the One Percent
                difference.
              </p>
            </div>
            <div className="flex items-center justify-center">
              <svg
                className="h-48 w-48 lg:h-64 lg:w-64"
                viewBox="0 0 300 178"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                role="img"
                aria-label="One Percent logo"
              >
                <title>One Percent logo</title>
                <path
                  d="M157.015 85.7143C180.684 85.7143 199.872 66.5265 199.872 42.8571C199.872 19.1878 180.684 0 157.015 0C133.346 0 114.158 19.1878 114.158 42.8571C114.158 66.5265 133.346 85.7143 157.015 85.7143Z"
                  fill="currentColor"
                  className="text-primary"
                />
                <path
                  d="M257.143 177.119C280.812 177.119 300 157.931 300 134.261C300 110.592 280.812 91.4043 257.143 91.4043C233.473 91.4043 214.286 110.592 214.286 134.261C214.286 157.931 233.473 177.119 257.143 177.119Z"
                  fill="currentColor"
                  className="text-primary"
                />
                <path
                  d="M85.7143 174.463H0V88.7485C0 41.3401 38.3059 3.03418 85.7143 3.03418V174.463Z"
                  fill="currentColor"
                  className="text-primary"
                />
                <path
                  d="M266.248 3.03418L137.677 174.463H148.296L276.868 3.03418H266.248Z"
                  fill="currentColor"
                  className="text-primary"
                />
              </svg>
            </div>
          </div>
        </div>
      </section>

      {/* Company Stats */}
      <section className="border-border border-y px-6 py-16 lg:py-20">
        <div className="mx-auto max-w-7xl">
          <div className="grid gap-8 sm:grid-cols-3">
            <div className="text-center">
              <HugeiconsIcon
                icon={Clock01Icon}
                size={28}
                strokeWidth={1.5}
                className="mx-auto mb-3 text-primary"
              />
              <div className="mb-1 font-extrabold text-4xl tracking-tight lg:text-5xl">
                10+
              </div>
              <div className="text-muted-foreground text-sm">
                Years Experience
              </div>
            </div>
            <div className="text-center">
              <HugeiconsIcon
                icon={Briefcase01Icon}
                size={28}
                strokeWidth={1.5}
                className="mx-auto mb-3 text-primary"
              />
              <div className="mb-1 font-extrabold text-4xl tracking-tight lg:text-5xl">
                100+
              </div>
              <div className="text-muted-foreground text-sm">
                Brands Served Since 2015
              </div>
            </div>
            <div className="text-center">
              <HugeiconsIcon
                icon={ChartIncreaseIcon}
                size={28}
                strokeWidth={1.5}
                className="mx-auto mb-3 text-primary"
              />
              <div className="mb-1 font-extrabold text-4xl tracking-tight lg:text-5xl">
                $200M
              </div>
              <div className="text-muted-foreground text-sm">
                Total Traffic Generated
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Meet the Team Section */}
      <section className="px-6 py-16 lg:py-20">
        <div className="mx-auto max-w-7xl">
          <div className="mb-12 text-center">
            <h2 className="mb-4 font-bold text-4xl leading-[1.1] tracking-tight lg:text-5xl">
              Meet the Team
            </h2>
            <p className="mx-auto max-w-3xl text-muted-foreground leading-relaxed">
              Entrepreneurs first, marketing experts second. Meet the people who
              will become your partners in growth.
            </p>
          </div>

          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
            {teamMembers.map((member) => (
              <Card key={member.name}>
                <CardHeader className="justify-items-center text-center">
                  <Image
                    src={member.imageId}
                    variant="thumbnail"
                    alt={member.name}
                    width={80}
                    height={80}
                    layout="fixed"
                    className="size-20 rounded-full object-cover grayscale"
                  />
                  <CardTitle className="text-xl">{member.name}</CardTitle>
                  <CardDescription className="text-primary">
                    {member.title}
                  </CardDescription>
                </CardHeader>
                <CardContent className="space-y-4">
                  {member.bio.map((paragraph) => (
                    <p
                      key={paragraph.slice(0, 50)}
                      className="text-muted-foreground leading-relaxed"
                    >
                      {paragraph}
                    </p>
                  ))}
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Our Approach / Values Section */}
      <section className="px-6 py-16 lg:py-20">
        <div className="mx-auto max-w-7xl">
          <div className="mb-12 text-right">
            <h2 className="mb-4 font-bold text-4xl leading-[1.1] tracking-tight lg:text-5xl">
              Our Approach
            </h2>
            <p className="ml-auto max-w-2xl text-muted-foreground">
              What sets us apart from traditional SEO agencies.
            </p>
          </div>

          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
            <Card>
              <CardHeader>
                <HugeiconsIcon
                  icon={Briefcase01Icon}
                  size={28}
                  strokeWidth={1.5}
                  className="mb-2 text-primary"
                />
                <CardTitle>Entrepreneur-First Mindset</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="leading-relaxed">
                  We built and exited our own E-commerce brands using GEO, SEO,
                  and paid advertising. We're not consultants reading from a
                  playbook. We're entrepreneurs who've been through the journey
                  and now help others achieve similar success.
                </CardDescription>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <HugeiconsIcon
                  icon={UserGroupIcon}
                  size={28}
                  strokeWidth={1.5}
                  className="mb-2 text-primary"
                />
                <CardTitle>Hands-On Partnership</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="leading-relaxed">
                  We treat your business like our own because we know what it
                  takes to succeed. From onboarding to execution, we delve deep
                  into your unique needs, understand your market, and deliver
                  strategies that add real value, not just vanity metrics.
                </CardDescription>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <HugeiconsIcon
                  icon={Award01Icon}
                  size={28}
                  strokeWidth={1.5}
                  className="mb-2 text-primary"
                />
                <CardTitle>Proven at Scale</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="leading-relaxed">
                  With over 100 brands served since 2015 and multiple co-founded
                  and exited E-commerce ventures, our strategies aren't
                  theoretical. They're battle-tested. We've scaled businesses
                  through algorithm updates, market changes, and competitive
                  pressures. We know what works.
                </CardDescription>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Final CTA Section */}
      <section className="border-border border-y px-6 py-16 lg:py-20">
        <div className="mx-auto max-w-3xl text-center">
          <h2 className="mb-4 font-bold text-3xl tracking-tight lg:text-4xl">
            Ready to Work with a Team That Gets It?
          </h2>
          <p className="mx-auto mb-8 max-w-xl text-muted-foreground">
            Join the 100+ brands that have partnered with entrepreneurs who
            understand GEO, SEO, and PPL.
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
