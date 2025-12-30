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
import { SEO } from '@/components/SEO';
import { Button } from '@/components/ui/button';
import { getAllTeamMembers } from '@/data/team';
import { generateMetaTags } from '@/lib/seo';

export const Route = createFileRoute('/about')({
  component: AboutPage,
  head: () =>
    generateMetaTags({
      title: 'About One Percent Digital | Meet the Team Behind Your Success',
      description:
        'Meet the entrepreneurs behind One Percent Digital. With 10+ years of combined experience and multiple successful E-commerce brands, we understand what it takes to grow your business.',
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
          jobTitle: 'Co-Founder & SEO Lead Architect',
        },
        {
          '@type': 'Person',
          name: 'Mackey Martin',
          jobTitle: 'Co-Founder & SEO Lead Architect',
        },
      ],
    },
  };

  return (
    <>
      <SEO structuredData={[organizationSchema]} />

      {/* Hero Section */}
      <section className="px-6 py-20 lg:py-32">
        <div className="mx-auto max-w-7xl">
          <div className="mx-auto max-w-4xl text-center">
            <h1 className="mb-6 font-extrabold text-5xl leading-[0.95] tracking-tighter lg:text-7xl xl:text-8xl">
              Meet the Team Behind Your Success
            </h1>
            <p className="mx-auto mb-10 max-w-2xl text-lg text-muted-foreground leading-relaxed tracking-wide lg:text-xl">
              We're not just marketing experts. We're entrepreneurs who run our
              own successful E-commerce brands. From GEO and SEO to PPL, we
              understand the challenges you face because we face them too.
            </p>
            <div className="flex flex-col items-center justify-center gap-4 sm:flex-row">
              <Button render={<Link to="/apply" />} size="lg">
                Apply To Work With Us
                <HugeiconsIcon
                  icon={ArrowRight01Icon}
                  size={20}
                  strokeWidth={2}
                  data-icon="inline-end"
                />
              </Button>
              <Button
                render={<Link to="/case-studies" />}
                size="lg"
                variant="outline"
              >
                View Our Work
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Company Stats */}
      <section className="border-border border-y px-6 py-20 lg:py-32">
        <div className="mx-auto max-w-7xl">
          <div className="grid gap-8 sm:grid-cols-3">
            <div className="text-center">
              <HugeiconsIcon
                icon={Clock01Icon}
                size={32}
                strokeWidth={1.5}
                className="mx-auto mb-3 text-primary"
              />
              <div className="mb-2 font-extrabold text-5xl text-primary leading-none tracking-tight lg:text-7xl">
                10+
              </div>
              <div className="text-muted-foreground tracking-wide">
                Years Experience
              </div>
            </div>
            <div className="text-center">
              <HugeiconsIcon
                icon={Briefcase01Icon}
                size={32}
                strokeWidth={1.5}
                className="mx-auto mb-3 text-primary"
              />
              <div className="mb-2 font-extrabold text-5xl text-primary leading-none tracking-tight lg:text-7xl">
                100+
              </div>
              <div className="text-muted-foreground tracking-wide">
                Brands Served Since 2015
              </div>
            </div>
            <div className="text-center">
              <HugeiconsIcon
                icon={ChartIncreaseIcon}
                size={32}
                strokeWidth={1.5}
                className="mx-auto mb-3 text-primary"
              />
              <div className="mb-2 font-extrabold text-5xl text-primary leading-none tracking-tight lg:text-7xl">
                $200M
              </div>
              <div className="text-muted-foreground tracking-wide">
                Total Traffic Generated
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Our Story Section */}
      <section className="px-6 py-20 lg:py-32">
        <div className="mx-auto max-w-7xl">
          <div className="grid gap-12 lg:grid-cols-2 lg:gap-16">
            <div>
              <h2 className="mb-6 font-bold text-4xl leading-[1.1] tracking-tight lg:text-6xl">
                Our Story
              </h2>
              <p className="mb-6 text-lg text-muted-foreground leading-relaxed tracking-wide">
                One Percent Digital was founded on a simple principle: the best
                marketing experts are the ones who run their own businesses.
                We're not consultants who learned SEO from textbooks. We're
                entrepreneurs who've scaled multiple E-commerce brands from the
                ground up and understand the real challenges of growing a
                business online.
              </p>
              <p className="mb-6 text-lg text-muted-foreground leading-relaxed tracking-wide">
                Since 2015, our team has worked with over 100 brands across
                every industry imaginable. We've navigated countless Google
                algorithm updates, scaled businesses through multiple economic
                cycles, and helped our clients capture maximum market share in
                their industries. But what truly sets us apart is our hands-on
                experience running our own companies.
              </p>
              <p className="text-lg text-muted-foreground leading-relaxed tracking-wide">
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

      {/* Meet the Team Section */}
      <section className="border-border border-y px-6 py-20 lg:py-32">
        <div className="mx-auto max-w-7xl">
          <div className="mb-16 text-center">
            <h2 className="mb-4 font-bold text-4xl leading-[1.1] tracking-tight lg:text-6xl">
              Meet the Team
            </h2>
            <p className="mx-auto max-w-3xl text-lg text-muted-foreground leading-relaxed tracking-wide">
              Entrepreneurs first, marketing experts second. Meet the people who
              will become your partners in growth.
            </p>
          </div>

          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
            {teamMembers.map((member) => (
              <div
                key={member.name}
                className="rounded-2xl bg-card p-8 ring-1 ring-foreground/10 transition-all hover:shadow-lg hover:shadow-primary/10 hover:ring-primary/50"
              >
                <div className="mb-6 flex justify-center">
                  <div className="flex size-20 items-center justify-center rounded-full bg-primary/10 font-bold text-2xl text-primary">
                    {member.initials}
                  </div>
                </div>
                <h3 className="mb-2 text-center font-bold text-2xl">
                  {member.name}
                </h3>
                <p className="mb-6 text-center text-muted-foreground text-sm tracking-wide">
                  {member.title}
                </p>
                <div className="space-y-4">
                  {member.bio.map((paragraph) => (
                    <p
                      key={paragraph.slice(0, 50)}
                      className="text-muted-foreground leading-relaxed tracking-wide"
                    >
                      {paragraph}
                    </p>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Our Approach / Values Section */}
      <section className="px-6 py-20 lg:py-32">
        <div className="mx-auto max-w-7xl">
          <div className="mb-16 text-center">
            <h2 className="mb-4 font-bold text-4xl leading-[1.1] tracking-tight lg:text-6xl">
              Our Approach
            </h2>
            <p className="mx-auto max-w-3xl text-lg text-muted-foreground leading-relaxed tracking-wide">
              What sets us apart from traditional SEO agencies.
            </p>
          </div>

          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
            <div className="rounded-2xl bg-card p-8 ring-1 ring-foreground/10">
              <HugeiconsIcon
                icon={Briefcase01Icon}
                size={32}
                strokeWidth={1.5}
                className="mb-4 text-primary"
              />
              <h3 className="mb-3 font-bold text-2xl lg:text-3xl">
                Entrepreneur-First Mindset
              </h3>
              <p className="text-muted-foreground leading-relaxed tracking-wide">
                We run our own successful E-commerce brands, so we understand
                the challenges you face. We're not consultants reading from a
                playbook. We're business owners who live and breathe the same
                struggles and victories you experience every day.
              </p>
            </div>

            <div className="rounded-2xl bg-card p-8 ring-1 ring-foreground/10">
              <HugeiconsIcon
                icon={UserGroupIcon}
                size={32}
                strokeWidth={1.5}
                className="mb-4 text-primary"
              />
              <h3 className="mb-3 font-bold text-2xl lg:text-3xl">
                Hands-On Partnership
              </h3>
              <p className="text-muted-foreground leading-relaxed tracking-wide">
                We treat your business like our own because we know what it
                takes to succeed. From onboarding to execution, we delve deep
                into your unique needs, understand your market, and deliver
                strategies that add real value, not just vanity metrics.
              </p>
            </div>

            <div className="rounded-2xl bg-card p-8 ring-1 ring-foreground/10">
              <HugeiconsIcon
                icon={Award01Icon}
                size={32}
                strokeWidth={1.5}
                className="mb-4 text-primary"
              />
              <h3 className="mb-3 font-bold text-2xl lg:text-3xl">
                Proven at Scale
              </h3>
              <p className="text-muted-foreground leading-relaxed tracking-wide">
                With over 100 brands served since 2015 and multiple co-founded
                E-commerce ventures, our strategies aren't theoretical. They're
                battle-tested. We've scaled businesses through algorithm
                updates, market changes, and competitive pressures. We know what
                works.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Final CTA Section */}
      <section className="border-border border-t px-6 py-20 lg:py-32">
        <div className="mx-auto max-w-4xl text-center">
          <h2 className="mb-6 font-bold text-4xl leading-[1.1] tracking-tight lg:text-6xl">
            Ready to Work with a Team That Gets It?
          </h2>
          <p className="mx-auto mb-10 max-w-2xl text-lg text-muted-foreground leading-relaxed tracking-wide">
            Join the 100+ brands that have partnered with entrepreneurs who
            understand GEO, SEO, and PPL. Let's grow your company together.
          </p>
          <div className="flex flex-col items-center justify-center gap-4 sm:flex-row">
            <Button render={<Link to="/apply" />} size="lg">
              Schedule a Consultation
              <HugeiconsIcon
                icon={ArrowRight01Icon}
                size={20}
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
          <p className="mt-6 text-muted-foreground text-sm">
            No obligation. No sales pressure. Just a conversation between
            entrepreneurs.
          </p>
        </div>
      </section>
    </>
  );
}
