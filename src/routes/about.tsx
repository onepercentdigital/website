import { createFileRoute, Link } from '@tanstack/react-router';
import {
  ArrowRight,
  Award,
  Briefcase,
  Clock,
  TrendingUp,
  Users2,
} from 'lucide-react';
import { SEO } from '@/components/SEO';
import { Button } from '@/components/ui/button';
import { getAllTeamMembers } from '@/data/team';
import { generateMetaTags } from '@/lib/seo';

export const Route = createFileRoute('/about')({
  component: AboutPage,
  head: () =>
    generateMetaTags({
      title: 'About One Percent SEO | Meet the Team Behind Your Success',
      description:
        'Meet the entrepreneurs behind One Percent SEO. With 14+ years of combined experience and multiple successful eCommerce brands, we understand what it takes to grow your business.',
      url: 'https://onepercentseo.com/about',
    }),
});

function AboutPage() {
  const teamMembers = getAllTeamMembers();

  const organizationSchema = {
    type: 'Organization' as const,
    data: {
      '@type': 'Organization',
      name: 'One Percent SEO',
      url: 'https://onepercentseo.com',
      description:
        'Enterprise-grade SEO and GEO services for businesses that demand results at scale.',
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
              We're not just SEO experts—we're entrepreneurs who run our own
              successful eCommerce brands. We understand the challenges you face
              because we face them too.
            </p>
            <div className="flex flex-col items-center justify-center gap-4 sm:flex-row">
              <Button
                asChild
                size="lg"
                className="bg-accent text-accent-foreground hover:bg-accent/90"
              >
                <Link to="/audit">
                  Get Your Free AI Search Audit
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Link>
              </Button>
              <Button asChild size="lg" variant="outline">
                <Link to="/case-studies">View Our Work</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Company Stats */}
      <section className="border-border border-y bg-muted/30 px-6 py-20 lg:py-32">
        <div className="mx-auto max-w-7xl">
          <div className="grid gap-8 sm:grid-cols-3">
            <div className="text-center">
              <div className="mb-4 inline-flex rounded-full bg-accent/10 p-4">
                <Clock className="h-8 w-8 text-accent" />
              </div>
              <div className="mb-2 font-extrabold text-5xl text-accent leading-none tracking-tight lg:text-7xl">
                14+
              </div>
              <div className="text-muted-foreground tracking-wide">
                Years Combined Experience
              </div>
            </div>
            <div className="text-center">
              <div className="mb-4 inline-flex rounded-full bg-accent/10 p-4">
                <Briefcase className="h-8 w-8 text-accent" />
              </div>
              <div className="mb-2 font-extrabold text-5xl text-accent leading-none tracking-tight lg:text-7xl">
                300+
              </div>
              <div className="text-muted-foreground tracking-wide">
                Brands Served Since 2011
              </div>
            </div>
            <div className="text-center">
              <div className="mb-4 inline-flex rounded-full bg-accent/10 p-4">
                <TrendingUp className="h-8 w-8 text-accent" />
              </div>
              <div className="mb-2 font-extrabold text-5xl text-accent leading-none tracking-tight lg:text-7xl">
                10+
              </div>
              <div className="text-muted-foreground tracking-wide">
                eCommerce Brands Co-Founded
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
                One Percent SEO was founded on a simple principle: the best SEO
                experts are the ones who run their own businesses. We're not
                consultants who learned SEO from textbooks—we're entrepreneurs
                who've scaled multiple eCommerce brands from the ground up and
                understand the real challenges of growing a business online.
              </p>
              <p className="mb-6 text-lg text-muted-foreground leading-relaxed tracking-wide">
                Since 2011, our team has worked with over 300 brands across
                every industry imaginable. We've navigated countless Google
                algorithm updates, scaled businesses through multiple economic
                cycles, and helped our clients capture maximum market share in
                their industries. But what truly sets us apart is our hands-on
                experience running our own companies.
              </p>
              <p className="text-lg text-muted-foreground leading-relaxed tracking-wide">
                When you work with One Percent SEO, you're not just hiring an
                agency—you're partnering with fellow entrepreneurs who treat
                your business like our own. We understand ROI, budget
                constraints, competitive pressures, and the need for strategies
                that actually move the needle. That's the One Percent
                difference.
              </p>
            </div>
            <div className="flex items-center justify-center">
              {/* Placeholder for future visualization */}
              <div className="h-full w-full" />
            </div>
          </div>
        </div>
      </section>

      {/* Meet the Team Section */}
      <section className="border-border border-y bg-muted/30 px-6 py-20 lg:py-32">
        <div className="mx-auto max-w-7xl">
          <div className="mb-16 text-center">
            <h2 className="mb-4 font-bold text-4xl leading-[1.1] tracking-tight lg:text-6xl">
              Meet the Team
            </h2>
            <p className="mx-auto max-w-3xl text-lg text-muted-foreground leading-relaxed tracking-wide">
              Entrepreneurs first, SEO experts second. Meet the people who will
              become your partners in growth.
            </p>
          </div>

          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
            {teamMembers.map((member) => (
              <div
                key={member.name}
                className="rounded-2xl border border-border bg-card p-8 transition-all hover:border-accent/50 hover:shadow-lg"
              >
                <div className="mb-6 flex justify-center">
                  <div className="flex h-20 w-20 items-center justify-center rounded-full bg-accent/10 font-bold text-2xl text-accent">
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
            <div className="rounded-2xl border border-border bg-card p-8">
              <div className="mb-4 inline-flex rounded-lg bg-accent/10 p-3">
                <Briefcase className="h-8 w-8 text-accent" />
              </div>
              <h3 className="mb-3 font-bold text-2xl lg:text-3xl">
                Entrepreneur-First Mindset
              </h3>
              <p className="text-muted-foreground leading-relaxed tracking-wide">
                We run our own successful eCommerce brands, so we understand the
                challenges you face. We're not consultants reading from a
                playbook—we're business owners who live and breathe the same
                struggles and victories you experience every day.
              </p>
            </div>

            <div className="rounded-2xl border border-border bg-card p-8">
              <div className="mb-4 inline-flex rounded-lg bg-accent/10 p-3">
                <Users2 className="h-8 w-8 text-accent" />
              </div>
              <h3 className="mb-3 font-bold text-2xl lg:text-3xl">
                Hands-On Partnership
              </h3>
              <p className="text-muted-foreground leading-relaxed tracking-wide">
                We treat your business like our own because we know what it
                takes to succeed. From onboarding to execution, we delve deep
                into your unique needs, understand your market, and deliver
                strategies that add real value—not just vanity metrics.
              </p>
            </div>

            <div className="rounded-2xl border border-border bg-card p-8">
              <div className="mb-4 inline-flex rounded-lg bg-accent/10 p-3">
                <Award className="h-8 w-8 text-accent" />
              </div>
              <h3 className="mb-3 font-bold text-2xl lg:text-3xl">
                Proven at Scale
              </h3>
              <p className="text-muted-foreground leading-relaxed tracking-wide">
                With over 300 brands served since 2011 and multiple co-founded
                eCommerce ventures, our strategies aren't theoretical—they're
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
            Join the 300+ brands that have partnered with entrepreneurs who
            understand both SEO and business. Let's grow your company together.
          </p>
          <div className="flex flex-col items-center justify-center gap-4 sm:flex-row">
            <Button
              asChild
              size="lg"
              className="bg-accent text-accent-foreground hover:bg-accent/90"
            >
              <Link to="/audit">
                Schedule Your Free Audit
                <ArrowRight className="ml-2 h-5 w-5" />
              </Link>
            </Button>
            <Button asChild size="lg" variant="outline">
              <Link to="/case-studies">View Case Studies</Link>
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
