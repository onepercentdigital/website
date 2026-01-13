import {
  ArrowRight01Icon,
  ArrowUpRight01Icon,
  Brain01Icon,
  ChartIncreaseIcon,
  ChartLineData01Icon,
  CheckmarkCircle02Icon,
  DollarCircleIcon,
  File01Icon,
  FlashIcon,
  Globe02Icon,
  GraduationScrollIcon,
  HeadphonesIcon,
  HierarchySquare01Icon,
  Search01Icon,
  Shield01Icon,
  Target01Icon,
  UserGroupIcon,
  UserIcon,
} from '@hugeicons/core-free-icons';
import { HugeiconsIcon } from '@hugeicons/react';
import { createFileRoute, Link } from '@tanstack/react-router';
import { SEO } from '@/components/SEO';
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from '@/components/ui/accordion';
import { Button } from '@/components/ui/button';
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from '@/components/ui/card';
import { Separator } from '@/components/ui/separator';
import { generateMetaTags } from '@/lib/seo';

export const Route = createFileRoute('/enterprise')({
  component: EnterprisePage,
  head: () =>
    generateMetaTags({
      title: 'Enterprise Solutions - GEO, SEO & Lead Generation at Scale',
      description:
        'White-glove GEO, SEO, and PPL for multi-location enterprises. Dedicated support, custom reporting, and strategies built for organizations that demand results.',
      url: 'https://op.digital/enterprise',
    }),
});

function EnterprisePage() {
  const serviceSchema = {
    type: 'Service' as const,
    data: {
      name: 'Enterprise GEO, SEO & PPL Solutions',
      description:
        'Enterprise-grade GEO, SEO, and PPL services for large organizations with multiple locations, brands, or complex needs.',
      url: 'https://op.digital/enterprise',
      serviceType: 'Search Engine Optimization',
      provider: {
        '@type': 'Organization',
        name: 'One Percent Digital',
        url: 'https://op.digital',
      },
      areaServed: 'Worldwide',
    },
  };

  return (
    <>
      <SEO structuredData={[serviceSchema]} />

      {/* Hero Section */}
      <section className="px-6 py-16 lg:py-20">
        <div className="mx-auto max-w-7xl">
          <div className="mx-auto max-w-4xl text-center">
            <h1 className="mb-6 font-extrabold text-5xl leading-[0.95] tracking-tighter lg:mb-8 lg:text-7xl xl:text-8xl">
              Enterprise-Grade GEO, SEO & PPL at Scale
            </h1>
            <p className="mx-auto mb-10 max-w-2xl text-muted-foreground leading-relaxed lg:text-lg">
              Custom solutions for multi-location businesses, enterprise brands,
              and organizations that demand white-glove service, dedicated
              support, and guaranteed results.
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

      {/* What Makes Enterprise Different */}
      <section className="px-6 py-16 lg:py-20">
        <div className="mx-auto max-w-7xl">
          <div className="grid gap-12 lg:grid-cols-2 lg:gap-16">
            <div className="flex flex-col justify-center">
              <h2 className="mb-4 font-bold text-4xl leading-[1.1] tracking-tight lg:text-5xl">
                What Makes Enterprise Different
              </h2>
              <p className="mb-6 text-muted-foreground leading-relaxed">
                Enterprise marketing requires more than just scale, it demands a
                tailored approach. When you're managing multiple locations,
                brands, or complex organizational structures, you need
                strategies that scale, systems that integrate, and support that
                understands your unique challenges.
              </p>
              <p className="mb-6 text-muted-foreground leading-relaxed">
                Our enterprise solutions provide dedicated account management,
                custom reporting dashboards, and white-glove service designed
                for enterprise companies, multi-location businesses, and
                organizations with complex compliance needs.
              </p>
              <p className="text-muted-foreground leading-relaxed">
                From stakeholder training to enterprise tool integration, we
                become an extension of your team, delivering results at scale
                while maintaining the precision and attention to detail that
                drives success.
              </p>
            </div>

            {/* Client Portal Dashboard Component */}
            <div className="flex items-center">
              <Card className="w-full gap-0 overflow-hidden py-0">
                <div className="flex items-center gap-2 px-4 py-3">
                  <HugeiconsIcon
                    icon={UserIcon}
                    size={18}
                    className="text-primary"
                  />
                  <span className="font-medium text-sm">Client Portal</span>
                </div>
                <Separator />

                {/* Metrics Summary Row */}
                <div className="grid grid-cols-3 gap-3 p-4">
                  <div className="rounded-xl bg-muted/50 p-3">
                    <div className="mb-1 text-muted-foreground text-xs">
                      AI Citations
                    </div>
                    <div className="flex items-center justify-between">
                      <span className="font-bold text-lg">1,247</span>
                      <div className="flex items-center gap-0.5 text-green-600 dark:text-green-500">
                        <HugeiconsIcon
                          icon={ArrowUpRight01Icon}
                          size={12}
                          strokeWidth={2}
                        />
                        <span className="font-medium text-xs">+23%</span>
                      </div>
                    </div>
                  </div>
                  <div className="rounded-xl bg-muted/50 p-3">
                    <div className="mb-1 text-muted-foreground text-xs">
                      Organic Traffic
                    </div>
                    <div className="flex items-center justify-between">
                      <span className="font-bold text-lg">156K</span>
                      <div className="flex items-center gap-0.5 text-green-600 dark:text-green-500">
                        <HugeiconsIcon
                          icon={ArrowUpRight01Icon}
                          size={12}
                          strokeWidth={2}
                        />
                        <span className="font-medium text-xs">+18%</span>
                      </div>
                    </div>
                  </div>
                  <div className="rounded-xl bg-muted/50 p-3">
                    <div className="mb-1 text-muted-foreground text-xs">
                      Qualified Leads
                    </div>
                    <div className="flex items-center justify-between">
                      <span className="font-bold text-lg">89</span>
                      <span className="text-muted-foreground text-xs">
                        this month
                      </span>
                    </div>
                  </div>
                </div>

                {/* Mini Charts Section */}
                <div className="grid grid-cols-2 gap-3 px-4 pb-4">
                  {/* Traffic sparkline */}
                  <div className="rounded-xl bg-muted/50 p-3">
                    <div className="mb-2 text-muted-foreground text-xs">
                      Traffic (30 days)
                    </div>
                    <svg
                      viewBox="0 0 100 32"
                      className="h-8 w-full"
                      preserveAspectRatio="none"
                      aria-hidden="true"
                    >
                      <path
                        d="M0,28 Q15,26 25,24 T50,18 T75,10 T100,6"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2"
                        className="text-primary"
                      />
                      <path
                        d="M0,28 Q15,26 25,24 T50,18 T75,10 T100,6 L100,32 L0,32 Z"
                        fill="currentColor"
                        className="text-primary/10"
                      />
                    </svg>
                  </div>
                  {/* Conversion rate */}
                  <div className="rounded-xl bg-muted/50 p-3">
                    <div className="mb-2 text-muted-foreground text-xs">
                      Conversion Rate
                    </div>
                    <div className="flex items-center gap-3">
                      <div className="relative size-8">
                        <svg
                          viewBox="0 0 36 36"
                          className="size-8 -rotate-90"
                          aria-hidden="true"
                        >
                          <circle
                            cx="18"
                            cy="18"
                            r="15"
                            fill="none"
                            stroke="currentColor"
                            strokeWidth="3"
                            className="text-muted"
                          />
                          <circle
                            cx="18"
                            cy="18"
                            r="15"
                            fill="none"
                            stroke="currentColor"
                            strokeWidth="3"
                            strokeDasharray="94.2"
                            strokeDashoffset="82.5"
                            className="text-primary"
                          />
                        </svg>
                      </div>
                      <span className="font-bold text-lg">12.4%</span>
                    </div>
                  </div>
                </div>

                <Separator />

                {/* Recent Activity */}
                <div className="p-4">
                  <div className="mb-2 text-muted-foreground text-xs">
                    Recent Activity
                  </div>
                  <div className="space-y-2">
                    {[
                      {
                        text: 'New lead: Jonathan Ashworth',
                        time: '2 min ago',
                      },
                      {
                        text: 'AI citation detected: ChatGPT',
                        time: '15 min ago',
                      },
                      {
                        text: 'Traffic milestone: 150K monthly visitors',
                        time: '1 hour ago',
                      },
                    ].map((activity) => (
                      <div
                        key={activity.text}
                        className="flex items-center justify-between text-sm"
                      >
                        <span className="truncate">{activity.text}</span>
                        <span className="shrink-0 text-muted-foreground text-xs">
                          {activity.time}
                        </span>
                      </div>
                    ))}
                  </div>
                </div>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Our Enterprise Process */}
      <section className="px-6 py-16 lg:py-20">
        <div className="mx-auto max-w-7xl">
          <div className="mb-12 text-center">
            <h2 className="mb-4 font-bold text-4xl leading-[1.1] tracking-tight lg:text-5xl">
              Our Enterprise Process
            </h2>
            <p className="mx-auto max-w-2xl text-muted-foreground">
              A systematic approach designed for organizations with complex
              needs and multiple stakeholders.
            </p>
          </div>

          <div className="grid gap-8 lg:grid-cols-4">
            <Card>
              <CardHeader>
                <div className="mb-2 flex items-start justify-between">
                  <div className="font-bold text-4xl text-primary">01</div>
                  <HugeiconsIcon
                    icon={Target01Icon}
                    size={28}
                    strokeWidth={1.5}
                    className="text-muted-foreground"
                  />
                </div>
                <CardTitle>Discovery & Enterprise Audit</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="leading-relaxed">
                  Multi-stakeholder assessment across all locations, brands, and
                  digital properties. We analyze your enterprise tech stack,
                  compliance requirements, and organizational structure.
                </CardDescription>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <div className="mb-2 flex items-start justify-between">
                  <div className="font-bold text-4xl text-primary">02</div>
                  <HugeiconsIcon
                    icon={File01Icon}
                    size={28}
                    strokeWidth={1.5}
                    className="text-muted-foreground"
                  />
                </div>
                <CardTitle>Custom Strategy Development</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="leading-relaxed">
                  Scalable frameworks tailored to your organization. Custom
                  reporting dashboards, governance models, and strategies that
                  work across multiple markets and stakeholders.
                </CardDescription>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <div className="mb-2 flex items-start justify-between">
                  <div className="font-bold text-4xl text-primary">03</div>
                  <HugeiconsIcon
                    icon={HierarchySquare01Icon}
                    size={28}
                    strokeWidth={1.5}
                    className="text-muted-foreground"
                  />
                </div>
                <CardTitle>Implementation & Integration</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="leading-relaxed">
                  Seamless integration with your enterprise tools (Salesforce,
                  HubSpot, analytics platforms). White-glove onboarding with
                  dedicated training for all stakeholder groups.
                </CardDescription>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <div className="mb-2 flex items-start justify-between">
                  <div className="font-bold text-4xl text-primary">04</div>
                  <HugeiconsIcon
                    icon={ChartIncreaseIcon}
                    size={28}
                    strokeWidth={1.5}
                    className="text-muted-foreground"
                  />
                </div>
                <CardTitle>Ongoing Optimization & Support</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="leading-relaxed">
                  Dedicated account team with priority support. Regular
                  executive reporting, quarterly business reviews, and
                  continuous optimization across all properties.
                </CardDescription>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Enterprise Features */}
      <section className="px-6 py-16 lg:py-20">
        <div className="mx-auto max-w-7xl">
          <div className="mb-12 text-right">
            <h2 className="mb-4 font-bold text-4xl leading-[1.1] tracking-tight lg:text-5xl">
              Enterprise Features
            </h2>
            <p className="ml-auto max-w-2xl text-muted-foreground">
              Premium capabilities designed for organizations that demand the
              highest standards.
            </p>
          </div>

          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
            <Card>
              <CardHeader>
                <HugeiconsIcon
                  icon={UserGroupIcon}
                  size={28}
                  strokeWidth={1.5}
                  className="mb-2 text-primary"
                />
                <CardTitle>Dedicated Account Management</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="leading-relaxed">
                  Your own dedicated account team who understands your business,
                  industry, and goals. Direct access to senior strategists and
                  technical specialists.
                </CardDescription>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <HugeiconsIcon
                  icon={ChartLineData01Icon}
                  size={28}
                  strokeWidth={1.5}
                  className="mb-2 text-primary"
                />
                <CardTitle>Custom Reporting & Analytics</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="leading-relaxed">
                  Executive dashboards tailored to your KPIs. Automated
                  reporting, competitive intelligence, and insights that align
                  with your business objectives.
                </CardDescription>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <HugeiconsIcon
                  icon={Shield01Icon}
                  size={28}
                  strokeWidth={1.5}
                  className="mb-2 text-primary"
                />
                <CardTitle>Enterprise Security & Compliance</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="leading-relaxed">
                  SOC 2 compliance, GDPR adherence, and enterprise-grade
                  security protocols. Custom NDAs and security requirements
                  accommodated.
                </CardDescription>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <HugeiconsIcon
                  icon={Globe02Icon}
                  size={28}
                  strokeWidth={1.5}
                  className="mb-2 text-primary"
                />
                <CardTitle>Multi-Location/Brand Coordination</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="leading-relaxed">
                  Centralized strategy with local execution. Manage hundreds of
                  locations or multiple brands with consistent governance and
                  scalable processes.
                </CardDescription>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <HugeiconsIcon
                  icon={HeadphonesIcon}
                  size={28}
                  strokeWidth={1.5}
                  className="mb-2 text-primary"
                />
                <CardTitle>White-Glove Support</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="leading-relaxed">
                  24/7 priority support with dedicated account management.
                  Personalized service and quarterly business reviews tailored
                  to your needs.
                </CardDescription>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <HugeiconsIcon
                  icon={FlashIcon}
                  size={28}
                  strokeWidth={1.5}
                  className="mb-2 text-primary"
                />
                <CardTitle>Advanced Integration Capabilities</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="leading-relaxed">
                  API access for custom integrations. Seamless connections to
                  Salesforce, HubSpot, analytics platforms, and proprietary
                  enterprise systems.
                </CardDescription>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Comprehensive Services Included */}
      <section className="px-6 py-16 lg:py-20">
        <div className="mx-auto max-w-7xl">
          <div className="mb-12">
            <h2 className="mb-4 font-bold text-4xl leading-[1.1] tracking-tight lg:text-5xl">
              Comprehensive Services Included
            </h2>
            <p className="max-w-2xl text-muted-foreground">
              GEO, SEO, and PPL capabilities designed for enterprise scale.
            </p>
          </div>

          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
            <Card>
              <CardHeader>
                <HugeiconsIcon
                  icon={Target01Icon}
                  size={28}
                  strokeWidth={1.5}
                  className="mb-2 text-primary"
                />
                <CardTitle>Strategic Consulting & Planning</CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="space-y-3">
                  <li className="flex items-start gap-3">
                    <HugeiconsIcon
                      icon={CheckmarkCircle02Icon}
                      size={20}
                      strokeWidth={1.5}
                      className="mt-1 shrink-0 text-primary"
                    />
                    <span className="text-muted-foreground text-sm">
                      Quarterly strategic planning sessions
                    </span>
                  </li>
                  <li className="flex items-start gap-3">
                    <HugeiconsIcon
                      icon={CheckmarkCircle02Icon}
                      size={20}
                      strokeWidth={1.5}
                      className="mt-1 shrink-0 text-primary"
                    />
                    <span className="text-muted-foreground text-sm">
                      Executive stakeholder reporting
                    </span>
                  </li>
                  <li className="flex items-start gap-3">
                    <HugeiconsIcon
                      icon={CheckmarkCircle02Icon}
                      size={20}
                      strokeWidth={1.5}
                      className="mt-1 shrink-0 text-primary"
                    />
                    <span className="text-muted-foreground text-sm">
                      Competitive intelligence & market analysis
                    </span>
                  </li>
                  <li className="flex items-start gap-3">
                    <HugeiconsIcon
                      icon={CheckmarkCircle02Icon}
                      size={20}
                      strokeWidth={1.5}
                      className="mt-1 shrink-0 text-primary"
                    />
                    <span className="text-muted-foreground text-sm">
                      Multi-year roadmap development
                    </span>
                  </li>
                  <li className="flex items-start gap-3">
                    <HugeiconsIcon
                      icon={CheckmarkCircle02Icon}
                      size={20}
                      strokeWidth={1.5}
                      className="mt-1 shrink-0 text-primary"
                    />
                    <span className="text-muted-foreground text-sm">
                      Budget planning & ROI forecasting
                    </span>
                  </li>
                </ul>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <HugeiconsIcon
                  icon={Search01Icon}
                  size={28}
                  strokeWidth={1.5}
                  className="mb-2 text-primary"
                />
                <CardTitle>Enterprise SEO</CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="space-y-3">
                  <li className="flex items-start gap-3">
                    <HugeiconsIcon
                      icon={CheckmarkCircle02Icon}
                      size={20}
                      strokeWidth={1.5}
                      className="mt-1 shrink-0 text-primary"
                    />
                    <span className="text-muted-foreground text-sm">
                      Enterprise site architecture optimization
                    </span>
                  </li>
                  <li className="flex items-start gap-3">
                    <HugeiconsIcon
                      icon={CheckmarkCircle02Icon}
                      size={20}
                      strokeWidth={1.5}
                      className="mt-1 shrink-0 text-primary"
                    />
                    <span className="text-muted-foreground text-sm">
                      International SEO & hreflang management
                    </span>
                  </li>
                  <li className="flex items-start gap-3">
                    <HugeiconsIcon
                      icon={CheckmarkCircle02Icon}
                      size={20}
                      strokeWidth={1.5}
                      className="mt-1 shrink-0 text-primary"
                    />
                    <span className="text-muted-foreground text-sm">
                      Advanced schema markup & structured data
                    </span>
                  </li>
                  <li className="flex items-start gap-3">
                    <HugeiconsIcon
                      icon={CheckmarkCircle02Icon}
                      size={20}
                      strokeWidth={1.5}
                      className="mt-1 shrink-0 text-primary"
                    />
                    <span className="text-muted-foreground text-sm">
                      Core Web Vitals optimization at scale
                    </span>
                  </li>
                  <li className="flex items-start gap-3">
                    <HugeiconsIcon
                      icon={CheckmarkCircle02Icon}
                      size={20}
                      strokeWidth={1.5}
                      className="mt-1 shrink-0 text-primary"
                    />
                    <span className="text-muted-foreground text-sm">
                      Multi-location search presence
                    </span>
                  </li>
                </ul>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <HugeiconsIcon
                  icon={Brain01Icon}
                  size={28}
                  strokeWidth={1.5}
                  className="mb-2 text-primary"
                />
                <CardTitle>Enterprise GEO</CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="space-y-3">
                  <li className="flex items-start gap-3">
                    <HugeiconsIcon
                      icon={CheckmarkCircle02Icon}
                      size={20}
                      strokeWidth={1.5}
                      className="mt-1 shrink-0 text-primary"
                    />
                    <span className="text-muted-foreground text-sm">
                      Multi-brand AI visibility strategy
                    </span>
                  </li>
                  <li className="flex items-start gap-3">
                    <HugeiconsIcon
                      icon={CheckmarkCircle02Icon}
                      size={20}
                      strokeWidth={1.5}
                      className="mt-1 shrink-0 text-primary"
                    />
                    <span className="text-muted-foreground text-sm">
                      ChatGPT, Claude & Perplexity optimization
                    </span>
                  </li>
                  <li className="flex items-start gap-3">
                    <HugeiconsIcon
                      icon={CheckmarkCircle02Icon}
                      size={20}
                      strokeWidth={1.5}
                      className="mt-1 shrink-0 text-primary"
                    />
                    <span className="text-muted-foreground text-sm">
                      Enterprise knowledge graph development
                    </span>
                  </li>
                  <li className="flex items-start gap-3">
                    <HugeiconsIcon
                      icon={CheckmarkCircle02Icon}
                      size={20}
                      strokeWidth={1.5}
                      className="mt-1 shrink-0 text-primary"
                    />
                    <span className="text-muted-foreground text-sm">
                      AI citation monitoring at scale
                    </span>
                  </li>
                  <li className="flex items-start gap-3">
                    <HugeiconsIcon
                      icon={CheckmarkCircle02Icon}
                      size={20}
                      strokeWidth={1.5}
                      className="mt-1 shrink-0 text-primary"
                    />
                    <span className="text-muted-foreground text-sm">
                      Competitive AI positioning
                    </span>
                  </li>
                </ul>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <HugeiconsIcon
                  icon={Globe02Icon}
                  size={28}
                  strokeWidth={1.5}
                  className="mb-2 text-primary"
                />
                <CardTitle>Multi-Location Management</CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="space-y-3">
                  <li className="flex items-start gap-3">
                    <HugeiconsIcon
                      icon={CheckmarkCircle02Icon}
                      size={20}
                      strokeWidth={1.5}
                      className="mt-1 shrink-0 text-primary"
                    />
                    <span className="text-muted-foreground text-sm">
                      Centralized local listings management
                    </span>
                  </li>
                  <li className="flex items-start gap-3">
                    <HugeiconsIcon
                      icon={CheckmarkCircle02Icon}
                      size={20}
                      strokeWidth={1.5}
                      className="mt-1 shrink-0 text-primary"
                    />
                    <span className="text-muted-foreground text-sm">
                      Multi-location review management
                    </span>
                  </li>
                  <li className="flex items-start gap-3">
                    <HugeiconsIcon
                      icon={CheckmarkCircle02Icon}
                      size={20}
                      strokeWidth={1.5}
                      className="mt-1 shrink-0 text-primary"
                    />
                    <span className="text-muted-foreground text-sm">
                      Location-specific landing pages
                    </span>
                  </li>
                  <li className="flex items-start gap-3">
                    <HugeiconsIcon
                      icon={CheckmarkCircle02Icon}
                      size={20}
                      strokeWidth={1.5}
                      className="mt-1 shrink-0 text-primary"
                    />
                    <span className="text-muted-foreground text-sm">
                      Regional performance tracking
                    </span>
                  </li>
                  <li className="flex items-start gap-3">
                    <HugeiconsIcon
                      icon={CheckmarkCircle02Icon}
                      size={20}
                      strokeWidth={1.5}
                      className="mt-1 shrink-0 text-primary"
                    />
                    <span className="text-muted-foreground text-sm">
                      Franchise/dealer network optimization
                    </span>
                  </li>
                </ul>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <HugeiconsIcon
                  icon={GraduationScrollIcon}
                  size={28}
                  strokeWidth={1.5}
                  className="mb-2 text-primary"
                />
                <CardTitle>Enterprise Training & Onboarding</CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="space-y-3">
                  <li className="flex items-start gap-3">
                    <HugeiconsIcon
                      icon={CheckmarkCircle02Icon}
                      size={20}
                      strokeWidth={1.5}
                      className="mt-1 shrink-0 text-primary"
                    />
                    <span className="text-muted-foreground text-sm">
                      Custom training programs for stakeholders
                    </span>
                  </li>
                  <li className="flex items-start gap-3">
                    <HugeiconsIcon
                      icon={CheckmarkCircle02Icon}
                      size={20}
                      strokeWidth={1.5}
                      className="mt-1 shrink-0 text-primary"
                    />
                    <span className="text-muted-foreground text-sm">
                      White-glove onboarding process
                    </span>
                  </li>
                  <li className="flex items-start gap-3">
                    <HugeiconsIcon
                      icon={CheckmarkCircle02Icon}
                      size={20}
                      strokeWidth={1.5}
                      className="mt-1 shrink-0 text-primary"
                    />
                    <span className="text-muted-foreground text-sm">
                      Documentation & playbook development
                    </span>
                  </li>
                  <li className="flex items-start gap-3">
                    <HugeiconsIcon
                      icon={CheckmarkCircle02Icon}
                      size={20}
                      strokeWidth={1.5}
                      className="mt-1 shrink-0 text-primary"
                    />
                    <span className="text-muted-foreground text-sm">
                      Ongoing education & certification
                    </span>
                  </li>
                  <li className="flex items-start gap-3">
                    <HugeiconsIcon
                      icon={CheckmarkCircle02Icon}
                      size={20}
                      strokeWidth={1.5}
                      className="mt-1 shrink-0 text-primary"
                    />
                    <span className="text-muted-foreground text-sm">
                      Change management support
                    </span>
                  </li>
                </ul>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <HugeiconsIcon
                  icon={DollarCircleIcon}
                  size={28}
                  strokeWidth={1.5}
                  className="mb-2 text-primary"
                />
                <CardTitle>Enterprise Lead Generation</CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="space-y-3">
                  <li className="flex items-start gap-3">
                    <HugeiconsIcon
                      icon={CheckmarkCircle02Icon}
                      size={20}
                      strokeWidth={1.5}
                      className="mt-1 shrink-0 text-primary"
                    />
                    <span className="text-muted-foreground text-sm">
                      Scalable pay-per-lead programs
                    </span>
                  </li>
                  <li className="flex items-start gap-3">
                    <HugeiconsIcon
                      icon={CheckmarkCircle02Icon}
                      size={20}
                      strokeWidth={1.5}
                      className="mt-1 shrink-0 text-primary"
                    />
                    <span className="text-muted-foreground text-sm">
                      Multi-location campaign management
                    </span>
                  </li>
                  <li className="flex items-start gap-3">
                    <HugeiconsIcon
                      icon={CheckmarkCircle02Icon}
                      size={20}
                      strokeWidth={1.5}
                      className="mt-1 shrink-0 text-primary"
                    />
                    <span className="text-muted-foreground text-sm">
                      Enterprise CRM integration
                    </span>
                  </li>
                  <li className="flex items-start gap-3">
                    <HugeiconsIcon
                      icon={CheckmarkCircle02Icon}
                      size={20}
                      strokeWidth={1.5}
                      className="mt-1 shrink-0 text-primary"
                    />
                    <span className="text-muted-foreground text-sm">
                      Volume-based pricing tiers
                    </span>
                  </li>
                  <li className="flex items-start gap-3">
                    <HugeiconsIcon
                      icon={CheckmarkCircle02Icon}
                      size={20}
                      strokeWidth={1.5}
                      className="mt-1 shrink-0 text-primary"
                    />
                    <span className="text-muted-foreground text-sm">
                      Dedicated lead quality management
                    </span>
                  </li>
                </ul>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Enterprise Client Results */}
      <section className="px-6 py-16 lg:py-20">
        <div className="mx-auto max-w-7xl">
          <div className="mb-12 text-right">
            <h2 className="mb-4 font-bold text-4xl leading-[1.1] tracking-tight lg:text-5xl">
              Enterprise Client Results
            </h2>
            <p className="ml-auto max-w-2xl text-muted-foreground">
              Results that matter to organizations at scale.
            </p>
          </div>

          <div className="grid gap-12 lg:grid-cols-2 lg:gap-16">
            {/* Monthly Performance Component */}
            <div className="flex items-center lg:order-1">
              <Card className="w-full gap-0 overflow-hidden py-0">
                <div className="flex items-center gap-2 px-4 py-3">
                  <HugeiconsIcon
                    icon={ChartLineData01Icon}
                    size={18}
                    className="text-primary"
                  />
                  <span className="font-medium text-sm">
                    Monthly Performance
                  </span>
                </div>
                <Separator />
                <div className="p-4">
                  {/* 2x2 Performance Grid */}
                  <div className="grid grid-cols-2 gap-4">
                    {/* SEO Performance */}
                    <div className="space-y-3 rounded-xl bg-muted/50 p-3">
                      <div className="font-medium text-muted-foreground text-xs">
                        SEO Performance
                      </div>
                      <div className="space-y-2">
                        <div className="flex items-center justify-between">
                          <span className="text-muted-foreground text-xs">
                            Sessions
                          </span>
                          <span className="font-bold text-sm">43,892</span>
                        </div>
                        <div className="flex items-center justify-between">
                          <span className="text-muted-foreground text-xs">
                            Bounce Rate
                          </span>
                          <span className="font-bold text-sm">34.2%</span>
                        </div>
                      </div>
                    </div>

                    {/* GEO Performance */}
                    <div className="space-y-3 rounded-xl bg-muted/50 p-3">
                      <div className="font-medium text-muted-foreground text-xs">
                        GEO Performance
                      </div>
                      <div className="space-y-2">
                        <div className="flex items-center justify-between">
                          <span className="text-muted-foreground text-xs">
                            AI Mentions
                          </span>
                          <span className="font-bold text-sm">312</span>
                        </div>
                        <div className="flex items-center justify-between">
                          <span className="text-muted-foreground text-xs">
                            Avg Position
                          </span>
                          <span className="font-bold text-sm">2.1</span>
                        </div>
                      </div>
                    </div>

                    {/* Lead Generation */}
                    <div className="space-y-3 rounded-xl bg-muted/50 p-3">
                      <div className="font-medium text-muted-foreground text-xs">
                        Lead Generation
                      </div>
                      <div className="space-y-2">
                        <div className="flex items-center justify-between">
                          <span className="text-muted-foreground text-xs">
                            New Leads
                          </span>
                          <span className="font-bold text-sm">89</span>
                        </div>
                        <div className="flex items-center justify-between">
                          <span className="text-muted-foreground text-xs">
                            Qualified
                          </span>
                          <span className="font-bold text-sm">67</span>
                        </div>
                      </div>
                    </div>

                    {/* Revenue Impact */}
                    <div className="space-y-3 rounded-xl bg-muted/50 p-3">
                      <div className="font-medium text-muted-foreground text-xs">
                        Revenue Impact
                      </div>
                      <div className="space-y-2">
                        <div className="flex items-center justify-between">
                          <span className="text-muted-foreground text-xs">
                            Pipeline Value
                          </span>
                          <span className="font-bold text-sm">$847K</span>
                        </div>
                        <div className="flex items-center justify-between">
                          <span className="text-muted-foreground text-xs">
                            Closed Won
                          </span>
                          <span className="font-bold text-sm">$234K</span>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <Separator />
                <div className="px-4 py-2.5 text-center">
                  <span className="text-muted-foreground text-xs">
                    Full analytics available in dashboard
                  </span>
                </div>
              </Card>
            </div>
            <div className="lg:order-2">
              <p className="mb-8 text-muted-foreground leading-relaxed">
                Our enterprise clients don't just see incremental improvements.
                They achieve transformational results that impact every
                location, brand, and market they serve. From enterprise
                companies to rapidly scaling multi-location businesses, we
                deliver measurable ROI with white-glove service.
              </p>

              <div className="grid gap-6 sm:grid-cols-2">
                <div>
                  <div className="mb-1 font-extrabold text-4xl tracking-tight lg:text-5xl">
                    $200M
                  </div>
                  <div className="text-muted-foreground text-sm">
                    Revenue Generated
                  </div>
                </div>
                <div>
                  <div className="mb-1 font-extrabold text-4xl tracking-tight lg:text-5xl">
                    Exponential
                  </div>
                  <div className="text-muted-foreground text-sm">
                    Page 1 Growth Rate
                  </div>
                </div>
                <div>
                  <div className="mb-1 font-extrabold text-4xl tracking-tight lg:text-5xl">
                    1000%
                  </div>
                  <div className="text-muted-foreground text-sm">
                    Brand Visibility Growth
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="px-6 py-16 lg:py-20">
        <div className="mx-auto max-w-4xl">
          <div className="mb-12 text-center">
            <h2 className="mb-4 font-bold text-4xl leading-[1.1] tracking-tight lg:text-5xl">
              Frequently Asked Questions
            </h2>
            <p className="text-muted-foreground leading-relaxed">
              Everything you need to know about our enterprise solutions.
            </p>
          </div>

          <Accordion className="w-full">
            <AccordionItem value="item-1">
              <AccordionTrigger className="text-left font-semibold text-lg">
                What's the typical onboarding timeline?
              </AccordionTrigger>
              <AccordionContent className="text-muted-foreground leading-relaxed">
                Enterprise onboarding is a comprehensive process designed to set
                you up for long-term success. The initial discovery and audit
                phase takes 2-3 weeks, where we assess all locations, brands,
                and digital properties. Strategy development and stakeholder
                alignment takes another 2-3 weeks. Full implementation typically
                begins in month 2, with white-glove onboarding including custom
                training programs, documentation development, and tool
                integration. Most enterprise clients are fully operational
                within 60-90 days. We assign a dedicated onboarding team to
                ensure a smooth transition and minimal disruption to your
                business.
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="item-2">
              <AccordionTrigger className="text-left font-semibold text-lg">
                What makes your enterprise solution different from standard
                marketing services?
              </AccordionTrigger>
              <AccordionContent className="text-muted-foreground leading-relaxed">
                Enterprise marketing isn't just "more marketing." It's a
                fundamentally different approach across GEO, SEO, and Pay Per
                Lead Generation. You get a dedicated account team (not shared
                resources), custom reporting dashboards tailored to your KPIs,
                white-glove support with priority response times, 24/7 access,
                enterprise-grade security and compliance (SOC 2, GDPR), and
                integration with your existing enterprise tools (Salesforce,
                HubSpot, etc.). We become an extension of your team with
                quarterly business reviews, executive reporting, stakeholder
                training, and strategic planning. Our systems are built to
                manage complexity at scale, whether that's multiple locations,
                brands, or international markets.
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="item-3">
              <AccordionTrigger className="text-left font-semibold text-lg">
                What kind of support do enterprise clients receive?
              </AccordionTrigger>
              <AccordionContent className="text-muted-foreground leading-relaxed">
                Enterprise clients receive white-glove support with dedicated
                account management and priority response times. Our standard
                enterprise support includes: rapid response for critical issues,
                priority handling for high-priority requests, quarterly business
                reviews with executive stakeholders, and monthly performance
                reporting against agreed KPIs. We also provide performance
                commitments in our contracts, with success metrics defined
                during the strategy phase. Support terms are customizable based
                on your organization's specific needs and can include custom
                reporting schedules, dedicated Slack channels, and escalation
                procedures.
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="item-4">
              <AccordionTrigger className="text-left font-semibold text-lg">
                Can you integrate with our existing enterprise tools and
                systems?
              </AccordionTrigger>
              <AccordionContent className="text-muted-foreground leading-relaxed">
                Absolutely. Enterprise integration is a core part of our
                service. We have proven integrations with major platforms
                including Salesforce, HubSpot, Marketo, Google Analytics 360,
                Adobe Analytics, Tableau, Power BI, and most major CRM and
                marketing automation systems. Our team includes integration
                specialists who work with your IT and MarTech teams to ensure
                seamless data flow. We also provide API access for custom
                integrations and can work with proprietary systems. All
                integrations follow enterprise security protocols and can
                accommodate custom authentication, VPN access, and compliance
                requirements. Integration timelines are included in the
                onboarding process.
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="item-5">
              <AccordionTrigger className="text-left font-semibold text-lg">
                How do you handle multi-location or franchise networks?
              </AccordionTrigger>
              <AccordionContent className="text-muted-foreground leading-relaxed">
                Multi-location management is one of our core competencies. We
                provide centralized strategy with local execution, meaning
                consistent brand governance while optimizing for each location's
                unique market. Our systems manage everything from local listings
                and review monitoring to location-specific landing pages and
                regional performance tracking. For franchise networks, we offer
                franchisee training programs, co-op marketing support, and tools
                that allow individual locations to manage their presence within
                brand guidelines. We've successfully managed networks ranging
                from 10 to 500+ locations across multiple states and countries,
                with custom reporting that shows performance at the corporate,
                regional, and individual location levels.
              </AccordionContent>
            </AccordionItem>
          </Accordion>
        </div>
      </section>

      {/* Final CTA */}
      <section className="border-border border-y px-6 py-16 lg:py-20">
        <div className="mx-auto max-w-3xl text-center">
          <h2 className="mb-4 font-bold text-3xl tracking-tight lg:text-4xl">
            Ready to Scale Your Growth?
          </h2>
          <p className="mx-auto mb-8 max-w-xl text-muted-foreground">
            Join the enterprise companies and multi-location businesses that
            trust One Percent Digital for enterprise-grade GEO, SEO, and PPL.
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
