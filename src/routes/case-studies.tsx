import {
  ArrowRight01Icon,
  Building01Icon,
  ChartIncreaseIcon,
  ChartLineData01Icon,
  CheckmarkCircle02Icon,
  UserGroupIcon,
} from '@hugeicons/core-free-icons';
import { HugeiconsIcon } from '@hugeicons/react';
import { createFileRoute, Link } from '@tanstack/react-router';
import { Button } from '@/components/ui/button';
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
      title: 'Case Studies | Proven GEO & SEO Results',
      description:
        'Real results from real businesses. See how our GEO and SEO strategies helped Revology Cars exit, grew Goldfarb 10x, and made Royal Covers #1 in Arizona.',
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
      <section className="relative overflow-hidden bg-background px-6 py-12 lg:py-16">
        <div className="mx-auto max-w-7xl">
          <div className="mx-auto max-w-4xl text-center">
            <h1 className="mb-6 font-extrabold text-5xl leading-[0.95] tracking-tighter lg:text-7xl xl:text-8xl">
              Real Results from Real Businesses
            </h1>
            <p className="mx-auto mb-8 max-w-2xl text-muted-foreground text-xl leading-relaxed tracking-wide lg:text-2xl">
              Don't just take our word for it. See how we've helped businesses
              across industries lead search results, capture AI visibility, and
              drive measurable revenue growth.
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
      <section className="border-border border-y bg-background px-6 py-20">
        <div className="mx-auto max-w-7xl">
          <div className="grid gap-8 lg:grid-cols-3">
            {/* Stat 1 */}
            <div className="text-center">
              <HugeiconsIcon
                icon={ChartIncreaseIcon}
                size={32}
                strokeWidth={1.5}
                className="mx-auto mb-3 text-primary"
              />
              <div className="mb-2 font-extrabold text-5xl leading-none tracking-tight lg:text-7xl xl:text-8xl">
                {metrics.averageGrowth}
              </div>
              <div className="text-muted-foreground tracking-wide">
                Average Growth Rate
              </div>
              <p className="mx-auto mt-2 max-w-xs text-muted-foreground text-sm tracking-wide">
                Across all clients in their first 12 months
              </p>
            </div>

            {/* Stat 2 */}
            <div className="text-center">
              <HugeiconsIcon
                icon={UserGroupIcon}
                size={32}
                strokeWidth={1.5}
                className="mx-auto mb-3 text-primary"
              />
              <div className="mb-2 font-extrabold text-5xl leading-none tracking-tight lg:text-7xl xl:text-8xl">
                {metrics.totalClients}+
              </div>
              <div className="text-muted-foreground tracking-wide">
                Success Stories
              </div>
              <p className="mx-auto mt-2 max-w-xs text-muted-foreground text-sm tracking-wide">
                Documented case studies with verified results
              </p>
            </div>

            {/* Stat 3 */}
            <div className="text-center">
              <HugeiconsIcon
                icon={Building01Icon}
                size={32}
                strokeWidth={1.5}
                className="mx-auto mb-3 text-primary"
              />
              <div className="mb-2 font-extrabold text-5xl leading-none tracking-tight lg:text-7xl xl:text-8xl">
                {metrics.industriesServed}
              </div>
              <div className="text-muted-foreground tracking-wide">
                Industries Served
              </div>
              <p className="mx-auto mt-2 max-w-xs text-muted-foreground text-sm tracking-wide">
                Proven strategies across diverse markets
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Case Study Section */}
      {featuredStudy && (
        <section className="bg-background px-6 py-20 lg:py-32">
          <div className="mx-auto max-w-7xl">
            <div className="mb-12 text-center">
              <div className="mb-4 inline-block rounded-full bg-primary/10 px-4 py-1 font-semibold text-primary text-xs uppercase tracking-widest">
                Featured Case Study
              </div>
              <h2 className="mb-4 font-bold text-4xl leading-[1.1] tracking-tight lg:text-6xl">
                {featuredStudy.title}
              </h2>
              <p className="mx-auto max-w-2xl text-lg text-muted-foreground tracking-wide">
                {featuredStudy.client} · {featuredStudy.industry}
              </p>
            </div>

            <div className="rounded-2xl border-2 border-border bg-card p-8 shadow-sm lg:p-12">
              {/* Metrics Grid */}
              <div className="mb-12 grid gap-6 md:grid-cols-2 lg:grid-cols-4">
                {featuredStudy.metrics.map((metric) => (
                  <div key={metric.label} className="text-center">
                    <div className="mb-2 font-extrabold text-3xl text-primary tracking-tight lg:text-4xl">
                      {metric.value}
                    </div>
                    <div className="mb-1 font-semibold text-foreground text-sm">
                      {metric.label}
                    </div>
                    <div className="text-muted-foreground text-xs tracking-wide">
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
                    className="rounded-full bg-primary/10 px-3 py-1 font-medium text-primary text-xs uppercase tracking-wider"
                  >
                    {service}
                  </span>
                ))}
              </div>

              {/* Challenge, Solution, Results */}
              <div className="space-y-8">
                <div>
                  <h3 className="mb-3 font-bold text-2xl">The Challenge</h3>
                  <p className="text-muted-foreground leading-relaxed tracking-wide">
                    {featuredStudy.challenge}
                  </p>
                </div>

                <div>
                  <h3 className="mb-3 font-bold text-2xl">Our Solution</h3>
                  <p className="text-muted-foreground leading-relaxed tracking-wide">
                    {featuredStudy.solution}
                  </p>
                </div>

                <div>
                  <h3 className="mb-3 font-bold text-2xl">The Results</h3>
                  <p className="text-muted-foreground leading-relaxed tracking-wide">
                    {featuredStudy.results}
                  </p>
                </div>
              </div>

              {/* Testimonial */}
              {featuredStudy.testimonial && (
                <div className="mt-8 border-border border-t pt-8">
                  <div className="mb-4 text-3xl text-primary">"</div>
                  <p className="mb-6 text-foreground text-lg leading-relaxed">
                    {featuredStudy.testimonial.quote}
                  </p>
                  <div className="flex items-center gap-3">
                    {caseStudyLogos[featuredStudy.id] && (
                      <img
                        src={getImageUrl(
                          caseStudyLogos[featuredStudy.id],
                          'thumbnail',
                        )}
                        alt={featuredStudy.client}
                        className="h-10 w-auto object-contain dark:invert"
                      />
                    )}
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
            </div>
          </div>
        </section>
      )}

      {/* Case Studies Grid Section */}
      <section className="bg-background px-6 py-20 lg:py-32">
        <div className="mx-auto max-w-7xl">
          <div className="mb-12 text-center">
            <h2 className="mb-4 font-bold text-4xl leading-[1.1] tracking-tight lg:text-6xl">
              More Success Stories
            </h2>
            <p className="mx-auto max-w-2xl text-lg text-muted-foreground tracking-wide">
              Every client brings unique challenges. Here's how we deliver
              consistent, measurable results across industries.
            </p>
          </div>

          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
            {otherCaseStudies.map((study) => (
              <CaseStudyCard key={study.id} study={study} />
            ))}
          </div>
        </div>
      </section>

      {/* Final CTA Section */}
      <section className="bg-background px-6 py-20 lg:py-32">
        <div className="mx-auto max-w-7xl">
          <div className="mx-auto max-w-3xl text-center">
            <h2 className="mb-6 font-bold text-4xl leading-tight tracking-tight lg:text-5xl xl:text-6xl">
              Your Success Story Is Next
            </h2>
            <p className="mb-8 text-muted-foreground text-xl leading-relaxed tracking-wide lg:text-2xl">
              Every case study started with a conversation. Let's talk about how
              GEO, SEO, and PPL can drive the leads you need to scale.
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

function CaseStudyCard({ study }: CaseStudyCardProps) {
  // TODO: When individual case study pages are implemented, link to `/case-studies/${study.id}`
  // For now, cards are non-clickable but styled to indicate future interactivity

  return (
    <div className="group flex h-full cursor-pointer flex-col rounded-2xl border border-border bg-card p-8 transition-all hover:border-primary/50 hover:shadow-lg hover:shadow-primary/10">
      {/* Industry Badge */}
      <div className="mb-4 inline-block self-start rounded-full bg-primary/10 px-3 py-1 font-medium text-primary text-xs uppercase tracking-wider">
        {study.industry}
      </div>

      {/* Client Name */}
      <h3 className="mb-2 font-bold text-2xl leading-tight">{study.client}</h3>

      {/* Services */}
      <div className="mb-4 flex flex-wrap gap-1">
        {study.services.map((service, index) => (
          <span
            key={service}
            className="text-muted-foreground text-xs tracking-wide"
          >
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
              <div className="text-muted-foreground text-xs tracking-wide">
                {metric.description}
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Challenge Preview */}
      <p className="mb-6 line-clamp-3 text-muted-foreground text-sm leading-relaxed tracking-wide">
        {study.challenge}
      </p>

      {/* Testimonial or Learn More */}
      {study.testimonial ? (
        <div className="border-border border-t pt-4">
          <div className="mb-2 text-primary text-xl">"</div>
          <p className="mb-3 line-clamp-2 text-foreground text-sm italic leading-relaxed">
            {study.testimonial.quote}
          </p>
          <div className="flex items-center gap-2">
            {caseStudyLogos[study.id] && (
              <img
                src={getImageUrl(caseStudyLogos[study.id], 'thumbnail')}
                alt={study.client}
                className="h-8 w-auto object-contain dark:invert"
              />
            )}
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
      ) : (
        <div className="flex items-center gap-2 font-semibold text-primary text-sm transition-all group-hover:gap-3">
          <HugeiconsIcon
            icon={ChartLineData01Icon}
            size={16}
            strokeWidth={1.5}
          />
          <span>Read Full Case Study</span>
          <HugeiconsIcon
            icon={ArrowRight01Icon}
            size={16}
            strokeWidth={1.5}
            className="opacity-0 transition-opacity group-hover:opacity-100"
          />
        </div>
      )}
    </div>
  );
}
