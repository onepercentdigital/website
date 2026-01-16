import {
  ArrowRight01Icon,
  Building01Icon,
  ChartIncreaseIcon,
  CheckmarkCircle02Icon,
  UserGroupIcon,
} from '@hugeicons/core-free-icons';
import { HugeiconsIcon } from '@hugeicons/react';
import { createFileRoute, Link } from '@tanstack/react-router';
import { memo } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import {
  type CaseStudy,
  getAggregateMetrics,
  getAllCaseStudies,
  getFeaturedCaseStudies,
} from '@/data/case-studies';
import { getImageUrl } from '@/lib/cloudflare-images';
import { generateMetaTags } from '@/lib/seo';

// Map case study IDs to their logo image IDs
const caseStudyLogos: Record<string, string> = {
  'revology-cars': '7ab278bc-37c8-4d7e-21ee-ba2d463fa200',
  'goldfarb-associates': '51e5ac33-a0d2-4cdb-668e-581cba411a00',
  'royal-covers': '5bacc41c-abd7-4b66-feeb-da11c01c8f00',
};

export const Route = createFileRoute('/case-studies')({
  component: CaseStudiesPage,
  head: () =>
    generateMetaTags({
      title: 'Case Studies - Real Results From Real Businesses',
      description:
        'See how we helped Revology Cars exit, grew Goldfarb 10x, and made Royal Covers #1 in Arizona through GEO, SEO, and targeted lead generation.',
      url: 'https://op.digital/case-studies',
    }),
});

function CaseStudiesPage() {
  const allCaseStudies = getAllCaseStudies();
  const featuredCaseStudies = getFeaturedCaseStudies();
  const featuredStudy = featuredCaseStudies[0];
  const otherCaseStudies = allCaseStudies.filter((study) => !study.featured);
  const metrics = getAggregateMetrics();

  return (
    <>
      {/* Hero Section */}
      <section className="relative overflow-hidden bg-background px-6 py-16 lg:py-20">
        <div className="mx-auto max-w-7xl">
          <div className="mx-auto max-w-4xl text-center">
            <h1 className="mb-6 font-extrabold text-5xl leading-[0.95] tracking-tighter lg:text-7xl xl:text-8xl">
              Real Results from Real Businesses
            </h1>
            <p className="mx-auto mb-10 max-w-2xl text-muted-foreground leading-relaxed lg:text-lg">
              Don't just take our word for it. See how we've helped businesses
              across industries lead search results, capture AI visibility, and
              drive measurable revenue growth.
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
                render={<Link to="/customers" />}
                size="lg"
                variant="outline"
              >
                View Featured Customers
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Aggregate Stats Section */}
      <section className="border-border border-y bg-background px-6 py-16 lg:py-20">
        <div className="mx-auto max-w-7xl">
          <div className="grid gap-8 lg:grid-cols-3">
            {/* Stat 1 */}
            <div className="text-center">
              <HugeiconsIcon
                icon={ChartIncreaseIcon}
                size={28}
                strokeWidth={1.5}
                className="mx-auto mb-3 text-primary"
              />
              <div className="mb-1 font-extrabold text-4xl tracking-tight lg:text-5xl">
                {metrics.averageGrowth}
              </div>
              <div className="text-muted-foreground text-sm">
                Average Growth Rate
              </div>
            </div>

            {/* Stat 2 */}
            <div className="text-center">
              <HugeiconsIcon
                icon={UserGroupIcon}
                size={28}
                strokeWidth={1.5}
                className="mx-auto mb-3 text-primary"
              />
              <div className="mb-1 font-extrabold text-4xl tracking-tight lg:text-5xl">
                {metrics.totalClients}+
              </div>
              <div className="text-muted-foreground text-sm">
                Success Stories
              </div>
            </div>

            {/* Stat 3 */}
            <div className="text-center">
              <HugeiconsIcon
                icon={Building01Icon}
                size={28}
                strokeWidth={1.5}
                className="mx-auto mb-3 text-primary"
              />
              <div className="mb-1 font-extrabold text-4xl tracking-tight lg:text-5xl">
                {metrics.industriesServed}
              </div>
              <div className="text-muted-foreground text-sm">
                Industries Served
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Case Study Section */}
      {featuredStudy && (
        <section className="bg-background px-6 py-16 lg:py-20">
          <div className="mx-auto max-w-7xl">
            <div className="mb-12 text-center">
              <div className="mb-4 inline-block rounded-full bg-accent px-4 py-1 font-semibold text-primary text-xs uppercase">
                Featured Case Study
              </div>
              <h2 className="mb-4 font-bold text-4xl leading-[1.1] tracking-tight lg:text-5xl">
                {featuredStudy.title}
              </h2>
              <p className="mx-auto max-w-2xl text-muted-foreground">
                {featuredStudy.client} · {featuredStudy.industry}
              </p>
            </div>

            <Card className="p-8 lg:p-12">
              {/* Metrics Grid */}
              <div className="mb-12 grid gap-6 md:grid-cols-2 lg:grid-cols-4">
                {featuredStudy.metrics.map((metric) => (
                  <div key={metric.label} className="text-center">
                    <div className="mb-2 font-extrabold text-4xl tracking-tight lg:text-5xl">
                      {metric.value}
                    </div>
                    <div className="mb-1 font-semibold text-foreground text-sm">
                      {metric.label}
                    </div>
                    <div className="text-muted-foreground text-xs">
                      {metric.description}
                    </div>
                  </div>
                ))}
              </div>

              {/* Services Used */}
              <div className="mb-8 flex flex-wrap items-center justify-center gap-2">
                {featuredStudy.services.map((service) => (
                  <span
                    key={service}
                    className="rounded-full bg-accent px-3 py-1 font-medium text-primary text-xs uppercase"
                  >
                    {service}
                  </span>
                ))}
              </div>

              {/* Challenge, Solution, Results */}
              <div className="space-y-8">
                <div>
                  <h3 className="mb-3 font-bold text-2xl">The Challenge</h3>
                  <p className="text-muted-foreground leading-relaxed">
                    {featuredStudy.challenge}
                  </p>
                </div>

                <div>
                  <h3 className="mb-3 font-bold text-2xl">Our Solution</h3>
                  <p className="text-muted-foreground leading-relaxed">
                    {featuredStudy.solution}
                  </p>
                </div>

                <div>
                  <h3 className="mb-3 font-bold text-2xl">The Results</h3>
                  <p className="text-muted-foreground leading-relaxed">
                    {featuredStudy.results}
                  </p>
                </div>
              </div>

              {/* Testimonial */}
              {featuredStudy.testimonial && (
                <div className="mt-8 border-border border-t pt-8">
                  <p className="mb-6 text-foreground italic leading-relaxed">
                    "{featuredStudy.testimonial.quote}"
                  </p>
                  <div className="flex items-center gap-3">
                    {caseStudyLogos[featuredStudy.id] ? (
                      <img
                        src={getImageUrl(
                          caseStudyLogos[featuredStudy.id],
                          'thumbnail',
                        )}
                        alt={featuredStudy.client}
                        width={100}
                        height={40}
                        className="h-10 w-auto object-contain dark:invert"
                      />
                    ) : null}
                    <div>
                      <div className="font-semibold text-foreground">
                        {featuredStudy.testimonial.author}
                      </div>
                      <div className="text-muted-foreground text-sm">
                        {featuredStudy.testimonial.role}
                      </div>
                    </div>
                  </div>
                </div>
              )}
            </Card>
          </div>
        </section>
      )}

      {/* Case Studies Grid Section */}
      <section className="bg-background px-6 py-16 lg:py-20">
        <div className="mx-auto max-w-7xl">
          <div className="mb-12 text-center">
            <h2 className="mb-4 font-bold text-4xl leading-[1.1] tracking-tight lg:text-5xl">
              More Success Stories
            </h2>
            <p className="mx-auto max-w-2xl text-muted-foreground">
              Every client brings unique challenges. Here's how we deliver
              consistent, measurable results across industries.
            </p>
          </div>

          <div className="mx-auto grid max-w-4xl justify-center gap-8 lg:grid-cols-2">
            {otherCaseStudies.map((study) => (
              <CaseStudyCard key={study.id} study={study} />
            ))}
          </div>
        </div>
      </section>

      {/* Final CTA Section */}
      <section className="border-border border-y px-6 py-16 lg:py-20">
        <div className="mx-auto max-w-7xl">
          <div className="mx-auto max-w-3xl text-center">
            <h2 className="mb-4 font-bold text-3xl tracking-tight lg:text-4xl">
              Your Success Story Is Next
            </h2>
            <p className="mx-auto mb-8 max-w-xl text-muted-foreground">
              Every case study started with a conversation. Let's talk about how
              GEO, SEO, and PPL can drive the leads you need to scale.
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
              <Button render={<Link to="/geo" />} size="lg" variant="outline">
                Learn About GEO
              </Button>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

/**
 * Case Study Card Component
 */
interface CaseStudyCardProps {
  study: CaseStudy;
}

const CaseStudyCard = memo(function CaseStudyCard({
  study,
}: CaseStudyCardProps) {
  return (
    <Card className="flex h-full flex-col">
      <CardContent className="flex flex-1 flex-col">
        {/* Industry Badge */}
        <div className="mb-4 inline-block self-start rounded-full bg-accent px-3 py-1 font-medium text-primary text-xs uppercase">
          {study.industry}
        </div>

        {/* Client Name */}
        <h3 className="mb-2 font-bold text-2xl leading-tight">
          {study.client}
        </h3>

        {/* Services */}
        <div className="mb-4 flex flex-wrap gap-1">
          {study.services.map((service, index) => (
            <span key={service} className="text-muted-foreground text-xs">
              {service}
              {index < study.services.length - 1 && ' ·'}
            </span>
          ))}
        </div>

        {/* Key Metrics (First 3) */}
        <div className="mb-6 flex-1 space-y-3">
          {study.metrics.slice(0, 3).map((metric) => (
            <div key={metric.label} className="flex items-start gap-2">
              <HugeiconsIcon
                icon={CheckmarkCircle02Icon}
                size={20}
                strokeWidth={1.5}
                className="mt-0.5 shrink-0 text-primary"
              />
              <div>
                <div className="font-semibold text-foreground text-sm">
                  {metric.value} {metric.label}
                </div>
                <div className="text-muted-foreground text-xs">
                  {metric.description}
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Challenge Preview */}
        <p className="mb-6 line-clamp-3 text-muted-foreground text-sm leading-relaxed">
          {study.challenge}
        </p>

        {/* Testimonial or Learn More */}
        {study.testimonial ? (
          <div className="border-border border-t pt-4">
            <p className="mb-3 line-clamp-2 text-foreground text-sm italic leading-relaxed">
              "{study.testimonial.quote}"
            </p>
            <div className="flex items-center gap-2">
              {caseStudyLogos[study.id] ? (
                <img
                  src={getImageUrl(caseStudyLogos[study.id], 'thumbnail')}
                  alt={study.client}
                  width={80}
                  height={32}
                  className="h-8 w-auto object-contain dark:invert"
                />
              ) : null}
              <div className="text-xs">
                <div className="font-semibold text-foreground">
                  {study.testimonial.author}
                </div>
                <div className="text-muted-foreground">
                  {study.testimonial.role}
                </div>
              </div>
            </div>
          </div>
        ) : null}
      </CardContent>
    </Card>
  );
});
