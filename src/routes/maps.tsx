import {
  Analytics01Icon,
  ArrowRight01Icon,
  Award01Icon,
  Building03Icon,
  CheckmarkCircle02Icon,
  Clock01Icon,
  Comment01Icon,
  GpsSignal01Icon,
  Location01Icon,
  Location09Icon,
  MapsLocation01Icon,
  Search01Icon,
  SecurityCheckIcon,
  StarIcon,
  Target01Icon,
  UserGroupIcon,
  ZapIcon,
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
import { generateMetaTags, getFAQSchema } from '@/lib/seo';

export const Route = createFileRoute('/maps')({
  component: MapsPage,
  head: () =>
    generateMetaTags({
      title: 'Maps Optimization - Own Local Search Results',
      description:
        'Own Google Maps and local search. Get found when customers search nearby with comprehensive GBP optimization, local pack rankings, and multi-location management.',
      url: 'https://op.digital/maps',
    }),
});

const processSteps = [
  {
    number: '01',
    icon: Search01Icon,
    title: 'GBP Audit & Setup',
    description:
      'Complete audit of your Google Business Profile. Optimize categories, attributes, services, and ensure NAP consistency across all platforms.',
  },
  {
    number: '02',
    icon: Target01Icon,
    title: 'Ranking Strategy',
    description:
      'Develop targeted local keyword strategy. Analyze competitor positions and identify opportunities to own your service area.',
  },
  {
    number: '03',
    icon: Building03Icon,
    title: 'Multi-Location Expansion',
    description:
      'Scale your local presence across multiple locations. Unified management with location-specific optimization for each market.',
  },
  {
    number: '04',
    icon: Analytics01Icon,
    title: 'Ongoing Optimization',
    description:
      'Continuous monitoring, review management, and geo-grid tracking. Adapt strategy based on ranking changes and competitor movements.',
  },
];

const benefits = [
  {
    icon: ZapIcon,
    title: 'Capture High-Intent Searches',
    description:
      '"Near me" searches have 500% higher conversion rates. When customers search locally, they\'re ready to buy.',
  },
  {
    icon: Location01Icon,
    title: 'Own Your Service Area',
    description:
      'Rank #1 across your entire service radius. Multiple #1 positions mean more visibility, more calls, more customers.',
  },
  {
    icon: UserGroupIcon,
    title: 'Beat Larger Competitors',
    description:
      'Local search levels the playing field. Small businesses can outrank national chains in their own neighborhood.',
  },
  {
    icon: Clock01Icon,
    title: 'Immediate Visibility',
    description:
      'Maps results appear above organic listings. Be the first thing customers see when searching for your services.',
  },
  {
    icon: SecurityCheckIcon,
    title: 'Build Local Trust',
    description:
      'Reviews, photos, and complete profiles build credibility. Customers trust businesses they can verify on Maps.',
  },
  {
    icon: Award01Icon,
    title: 'Sustainable Results',
    description:
      'Unlike paid ads, Maps rankings compound over time. Strong profiles and reviews create lasting competitive moats.',
  },
];

const services = [
  {
    icon: MapsLocation01Icon,
    title: 'GBP Optimization',
    features: [
      'Complete profile optimization',
      'Category and attribute setup',
      'Service area configuration',
      'Photo and video optimization',
      'Q&A management',
    ],
  },
  {
    icon: StarIcon,
    title: 'Review Management',
    features: [
      'Review generation strategy',
      'Response templates and monitoring',
      'Reputation improvement tactics',
      'Negative review mitigation',
      'Review velocity tracking',
    ],
  },
  {
    icon: Location09Icon,
    title: 'Local Citations',
    features: [
      'NAP consistency audit',
      'Citation building and cleanup',
      'Directory submission',
      'Data aggregator management',
      'Duplicate listing removal',
    ],
  },
  {
    icon: GpsSignal01Icon,
    title: 'Geo-Grid Tracking',
    features: [
      'Rank tracking across service area',
      'Competitor position monitoring',
      'Heat map visualization',
      'Ranking trend analysis',
      'Monthly performance reports',
    ],
  },
  {
    icon: Building03Icon,
    title: 'Multi-Location Management',
    features: [
      'Scalable location setup',
      'Unified brand consistency',
      'Location-specific optimization',
      'Centralized reporting',
      'Franchise and chain support',
    ],
  },
  {
    icon: Comment01Icon,
    title: 'Local Content Strategy',
    features: [
      'Google Posts creation',
      'Local landing pages',
      'Service area content',
      'Event and offer promotion',
      'Seasonal campaign management',
    ],
  },
];

const faqs = [
  {
    question: 'How is Maps optimization different from regular SEO?',
    answer:
      'Maps optimization focuses specifically on local search visibility and Google Business Profile rankings. While traditional SEO targets organic website rankings, Maps SEO ensures you appear in the local pack, Maps results, and "near me" searches. Both are complementary, but Maps optimization requires specialized tactics like citation building, review management, and geo-grid tracking.',
  },
  {
    question: 'How long does it take to rank in the local pack?',
    answer:
      'Initial improvements typically appear within 4-8 weeks, with significant ranking gains by month 3-4. Factors like competition level, current profile health, and review velocity affect timeline. Unlike paid ads, Maps rankings build sustainable value, and early investments compound over time as your profile authority grows.',
  },
  {
    question: 'Do you work with multi-location businesses?',
    answer:
      'Yes, multi-location optimization is a core specialty. We help franchises, chains, and businesses with multiple service areas maintain brand consistency while optimizing each location individually. Our centralized management approach ensures efficient scaling without sacrificing local relevance.',
  },
  {
    question: 'How do you track Maps rankings?',
    answer:
      'We use geo-grid tracking technology that measures rankings across your entire service area, not just from one point. This gives you heat map visualization of where you rank #1, #2, #3, etc. across different neighborhoods. You see exactly where you rank #1 and where opportunities exist.',
  },
  {
    question: 'Can you help with negative reviews?',
    answer:
      'Yes, review management is essential to Maps success. We help develop response strategies, implement review generation systems to improve your rating over time, and can assist with flagging policy-violating reviews. We focus on building such strong positive review velocity that occasional negatives have minimal impact.',
  },
  {
    question: 'What industries benefit most from Maps optimization?',
    answer:
      'Any business serving local customers benefits from Maps optimization. This includes restaurants, contractors, healthcare providers, law firms, automotive services, retail stores, and professional services. If customers search for what you offer plus a location, Maps optimization drives real business results.',
  },
];

function MapsPage() {
  const serviceSchema = {
    type: 'Service' as const,
    data: {
      name: 'Maps Optimization',
      description:
        'Own Google Maps and local search results. Comprehensive GBP optimization, local pack rankings, and multi-location management.',
      url: 'https://op.digital/maps',
      serviceType: 'Local Search Engine Optimization',
      provider: {
        '@type': 'Organization',
        name: 'One Percent Digital',
        url: 'https://op.digital',
      },
      areaServed: 'Worldwide',
    },
  };

  const faqSchema = getFAQSchema(faqs);
  const schemas = faqSchema ? [serviceSchema, faqSchema] : [serviceSchema];

  return (
    <div className="overflow-hidden">
      <SEO structuredData={schemas} />

      {/* Hero Section */}
      <section className="px-6 py-16 lg:py-20">
        <div className="mx-auto max-w-7xl">
          <div className="mx-auto max-w-4xl text-center">
            <h1 className="mb-6 font-extrabold text-5xl leading-[0.95] tracking-tighter lg:mb-8 lg:text-7xl xl:text-8xl">
              Own Local Search with Maps Optimization
            </h1>
            <p className="mx-auto mb-10 max-w-2xl text-muted-foreground leading-relaxed lg:text-lg">
              Get found when customers search nearby. Rank #1 in Maps across
              your entire service area with comprehensive GBP optimization and
              local search dominance.
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

      {/* What is Maps Optimization Section */}
      <section className="px-6 py-16 lg:py-20">
        <div className="mx-auto max-w-7xl">
          <div className="grid gap-12 lg:grid-cols-2 lg:gap-16">
            <div className="flex flex-col justify-center">
              <h2 className="mb-4 font-bold text-4xl leading-[1.1] tracking-tight lg:text-5xl">
                What is Maps Optimization?
              </h2>
              <p className="mb-4 text-muted-foreground leading-relaxed">
                Maps optimization focuses on ranking your business in Google
                Maps and the local pack, the prominent 3-business listing that
                appears for local searches. When customers search "restaurants
                near me" or "plumber in Miami," this is where you need to be.
              </p>
              <p className="mb-6 text-muted-foreground leading-relaxed">
                Through Google Business Profile optimization, review management,
                local citations, and geo-targeted strategies, we ensure your
                business appears first when local customers are ready to buy.
              </p>
              <div className="grid gap-4 sm:grid-cols-3">
                <Card className="p-4">
                  <div className="mb-1 font-extrabold text-4xl tracking-tight lg:text-5xl">
                    46%
                  </div>
                  <div className="text-muted-foreground text-sm">
                    Of All Searches Have Local Intent
                  </div>
                </Card>
                <Card className="p-4">
                  <div className="mb-1 font-extrabold text-4xl tracking-tight lg:text-5xl">
                    76%
                  </div>
                  <div className="text-muted-foreground text-sm">
                    Visit Within 24 Hours
                  </div>
                </Card>
                <Card className="p-4">
                  <div className="mb-1 font-extrabold text-4xl tracking-tight lg:text-5xl">
                    28%
                  </div>
                  <div className="text-muted-foreground text-sm">
                    Convert to Purchase
                  </div>
                </Card>
              </div>
            </div>

            {/* Three Pack Component */}
            <div className="flex items-center">
              <div className="w-full space-y-4">
                {/* Google-style search bar */}
                <div className="flex items-center gap-3 rounded-full bg-background px-5 py-3 shadow-sm ring-1 ring-foreground/10">
                  <HugeiconsIcon
                    icon={Search01Icon}
                    size={18}
                    className="shrink-0 text-muted-foreground"
                  />
                  <span className="text-sm">fine dining miami beach</span>
                </div>

                <Card className="w-full gap-0 overflow-hidden py-0">
                  <div className="flex items-center gap-2 px-4 py-3">
                    <HugeiconsIcon
                      icon={MapsLocation01Icon}
                      size={18}
                      className="text-primary"
                    />
                    <span className="font-medium text-sm">Local Results</span>
                  </div>
                  <Separator />

                  <div className="grid md:grid-cols-5">
                    {/* Business listings */}
                    <div className="space-y-0 md:col-span-3">
                      {[
                        {
                          name: 'Stubborn Seed',
                          rating: 4.7,
                          reviews: 1842,
                          type: 'Fine Dining Restaurant',
                          address: '101 Washington Ave, Miami Beach',
                          highlight: true,
                        },
                        {
                          name: 'Juvia',
                          rating: 4.4,
                          reviews: 2156,
                          type: 'Fine Dining Restaurant',
                          address: '1111 Lincoln Rd, Miami Beach',
                          highlight: false,
                        },
                        {
                          name: 'Cecconi Miami Beach',
                          rating: 4.3,
                          reviews: 1654,
                          type: 'Italian Restaurant',
                          address: '4385 Collins Ave, Miami Beach',
                          highlight: false,
                        },
                      ].map((business, index) => (
                        <div
                          key={business.name}
                          className={`flex gap-3 p-3 ${business.highlight ? 'bg-primary/5' : ''} ${index < 2 ? 'border-border border-b' : ''}`}
                        >
                          <div
                            className={`flex size-6 shrink-0 items-center justify-center rounded-full font-bold text-xs ${business.highlight ? 'bg-primary text-primary-foreground' : 'bg-muted text-muted-foreground'}`}
                          >
                            {index + 1}
                          </div>
                          <div className="min-w-0 flex-1">
                            <div
                              className={`font-medium text-sm ${business.highlight ? 'text-primary' : ''}`}
                            >
                              {business.name}
                            </div>
                            <div className="flex items-center gap-1.5">
                              <span className="font-medium text-xs">
                                {business.rating}
                              </span>
                              <div className="flex">
                                {[...Array(5)].map((_, i) => (
                                  <HugeiconsIcon
                                    key={`star-${business.name}-${i}`}
                                    icon={StarIcon}
                                    size={12}
                                    className={
                                      i < Math.floor(business.rating)
                                        ? 'fill-amber-400 text-amber-400'
                                        : 'text-muted-foreground/30'
                                    }
                                  />
                                ))}
                              </div>
                              <span className="text-muted-foreground text-xs">
                                ({business.reviews.toLocaleString()})
                              </span>
                            </div>
                            <div className="text-muted-foreground text-xs">
                              {business.type}
                            </div>
                            <div className="text-muted-foreground text-xs">
                              {business.address}
                            </div>
                          </div>
                        </div>
                      ))}
                    </div>

                    {/* Map snippet */}
                    <div className="relative hidden bg-muted/30 md:col-span-2 md:block">
                      <div className="absolute inset-0 flex items-center justify-center">
                        <div className="relative h-full w-full">
                          {/* Simplified map lines */}
                          <svg
                            className="h-full w-full opacity-20"
                            viewBox="0 0 100 150"
                            preserveAspectRatio="none"
                            aria-hidden="true"
                          >
                            <line
                              x1="20"
                              y1="0"
                              x2="20"
                              y2="150"
                              stroke="currentColor"
                              strokeWidth="0.5"
                            />
                            <line
                              x1="50"
                              y1="0"
                              x2="50"
                              y2="150"
                              stroke="currentColor"
                              strokeWidth="0.5"
                            />
                            <line
                              x1="80"
                              y1="0"
                              x2="80"
                              y2="150"
                              stroke="currentColor"
                              strokeWidth="0.5"
                            />
                            <line
                              x1="0"
                              y1="30"
                              x2="100"
                              y2="30"
                              stroke="currentColor"
                              strokeWidth="0.5"
                            />
                            <line
                              x1="0"
                              y1="75"
                              x2="100"
                              y2="75"
                              stroke="currentColor"
                              strokeWidth="0.5"
                            />
                            <line
                              x1="0"
                              y1="120"
                              x2="100"
                              y2="120"
                              stroke="currentColor"
                              strokeWidth="0.5"
                            />
                          </svg>
                          {/* Map pins */}
                          <div className="absolute top-[25%] left-[30%] flex size-6 items-center justify-center rounded-full bg-primary font-bold text-primary-foreground text-xs shadow-md">
                            1
                          </div>
                          <div className="absolute top-[50%] left-[60%] flex size-5 items-center justify-center rounded-full bg-muted-foreground font-bold text-background text-xs">
                            2
                          </div>
                          <div className="absolute top-[70%] left-[40%] flex size-5 items-center justify-center rounded-full bg-muted-foreground font-bold text-background text-xs">
                            3
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>

                  <Separator />
                  <div className="px-4 py-2.5">
                    <span className="text-primary text-xs">
                      View all results
                    </span>
                  </div>
                </Card>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* How It Works Section */}
      <section className="px-6 py-16 lg:py-20">
        <div className="mx-auto max-w-7xl">
          <div className="mb-12 text-center">
            <h2 className="mb-4 font-bold text-4xl leading-[1.1] tracking-tight lg:text-5xl">
              Our Maps Optimization Process
            </h2>
            <p className="mx-auto max-w-3xl text-muted-foreground">
              A systematic approach to dominating local search results
            </p>
          </div>
          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4">
            {processSteps.map((step) => (
              <Card key={step.number}>
                <CardHeader>
                  <div className="mb-2 flex items-start justify-between">
                    <div className="font-bold text-4xl text-primary">
                      {step.number}
                    </div>
                    <HugeiconsIcon
                      icon={step.icon}
                      size={28}
                      strokeWidth={1.5}
                      className="text-muted-foreground"
                    />
                  </div>
                  <CardTitle>{step.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription className="leading-relaxed">
                    {step.description}
                  </CardDescription>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Key Benefits Section */}
      <section className="px-6 py-16 lg:py-20">
        <div className="mx-auto max-w-7xl">
          <div className="mb-12 text-center">
            <h2 className="mb-4 font-bold text-4xl leading-[1.1] tracking-tight lg:text-5xl">
              Why Maps Rankings Matter
            </h2>
            <p className="mx-auto max-w-3xl text-muted-foreground">
              Local search drives real customers to your door
            </p>
          </div>
          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
            {benefits.map((benefit) => (
              <Card key={benefit.title}>
                <CardHeader>
                  <HugeiconsIcon
                    icon={benefit.icon}
                    size={28}
                    strokeWidth={1.5}
                    className="mb-2 text-primary"
                  />
                  <CardTitle>{benefit.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription className="leading-relaxed">
                    {benefit.description}
                  </CardDescription>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Service Offerings Section */}
      <section className="px-6 py-16 lg:py-20">
        <div className="mx-auto max-w-7xl">
          <div className="mb-12 text-center">
            <h2 className="mb-4 font-bold text-4xl leading-[1.1] tracking-tight lg:text-5xl">
              What's Included
            </h2>
            <p className="mx-auto max-w-3xl text-muted-foreground">
              Comprehensive local search services to own Maps
            </p>
          </div>
          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
            {services.map((service) => (
              <Card key={service.title}>
                <CardHeader>
                  <HugeiconsIcon
                    icon={service.icon}
                    size={28}
                    strokeWidth={1.5}
                    className="mb-2 text-primary"
                  />
                  <CardTitle>{service.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-2">
                    {service.features.map((feature) => (
                      <li key={feature} className="flex items-start gap-2">
                        <HugeiconsIcon
                          icon={CheckmarkCircle02Icon}
                          size={20}
                          strokeWidth={2}
                          className="mt-0.5 shrink-0 text-primary"
                        />
                        <span className="text-muted-foreground text-sm">
                          {feature}
                        </span>
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Results Section */}
      <section className="px-6 py-16 lg:py-20">
        <div className="mx-auto max-w-7xl">
          <div className="grid items-center gap-12 lg:grid-cols-2">
            <div>
              <h2 className="mb-4 font-bold text-4xl leading-[1.1] tracking-tight lg:text-5xl">
                Own Your Entire Service Area
              </h2>
              <p className="mb-6 text-muted-foreground leading-relaxed">
                Our geo-grid tracking shows exactly where you rank across your
                service area. See your #1 positions multiply as our optimization
                takes effect.
              </p>
              <div className="mb-8 grid gap-6 sm:grid-cols-2">
                <div>
                  <div className="mb-1 font-extrabold text-4xl tracking-tight lg:text-5xl">
                    #1
                  </div>
                  <div className="text-muted-foreground text-sm">
                    Across Service Area
                  </div>
                </div>
                <div>
                  <div className="mb-1 font-extrabold text-4xl tracking-tight lg:text-5xl">
                    312%
                  </div>
                  <div className="text-muted-foreground text-sm">
                    Increase in Map Views
                  </div>
                </div>
              </div>
            </div>

            {/* Radius Coverage Map Component */}
            <div className="flex items-center">
              <Card className="w-full gap-0 overflow-hidden py-0">
                <div className="flex items-center justify-between px-4 py-3">
                  <div className="flex items-center gap-2">
                    <HugeiconsIcon
                      icon={GpsSignal01Icon}
                      size={18}
                      className="text-primary"
                    />
                    <span className="font-medium text-sm">
                      Geo-Grid Tracker
                    </span>
                  </div>
                  <span className="text-muted-foreground text-xs">
                    5-mile radius
                  </span>
                </div>
                <Separator />
                <div className="relative p-6">
                  {/* Concentric circles */}
                  <div className="relative mx-auto aspect-square max-w-[280px]">
                    <svg
                      viewBox="0 0 200 200"
                      className="h-full w-full"
                      role="img"
                      aria-label="Service area coverage map showing #1 rankings"
                    >
                      {/* Grid pattern background */}
                      <defs>
                        <pattern
                          id="grid"
                          width="20"
                          height="20"
                          patternUnits="userSpaceOnUse"
                        >
                          <path
                            d="M 20 0 L 0 0 0 20"
                            fill="none"
                            stroke="currentColor"
                            strokeWidth="0.5"
                            className="text-muted-foreground/10"
                          />
                        </pattern>
                      </defs>
                      <rect width="200" height="200" fill="url(#grid)" />

                      {/* Radius circles */}
                      <circle
                        cx="100"
                        cy="100"
                        r="90"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="1"
                        strokeDasharray="4 4"
                        className="text-muted-foreground/30"
                      />
                      <circle
                        cx="100"
                        cy="100"
                        r="60"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="1"
                        strokeDasharray="4 4"
                        className="text-muted-foreground/30"
                      />
                      <circle
                        cx="100"
                        cy="100"
                        r="30"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="1"
                        strokeDasharray="4 4"
                        className="text-muted-foreground/30"
                      />

                      {/* Center point (business location) */}
                      <circle
                        cx="100"
                        cy="100"
                        r="8"
                        className="fill-primary"
                      />
                      <circle
                        cx="100"
                        cy="100"
                        r="4"
                        className="fill-primary-foreground"
                      />
                    </svg>

                    {/* #1 Rank pins scattered across the radius */}
                    {[
                      { top: '15%', left: '45%' },
                      { top: '25%', left: '70%' },
                      { top: '35%', left: '25%' },
                      { top: '30%', left: '55%' },
                      { top: '55%', left: '20%' },
                      { top: '50%', left: '75%' },
                      { top: '65%', left: '35%' },
                      { top: '70%', left: '60%' },
                      { top: '80%', left: '45%' },
                      { top: '45%', left: '40%' },
                      { top: '40%', left: '65%' },
                      { top: '60%', left: '55%' },
                    ].map((pos) => (
                      <div
                        key={`pin-${pos.top}-${pos.left}`}
                        className="absolute flex size-6 items-center justify-center rounded-full bg-green-500 font-bold text-white text-xs shadow-md"
                        style={{ top: pos.top, left: pos.left }}
                      >
                        1
                      </div>
                    ))}
                  </div>
                </div>
                <Separator />
                <div className="flex items-center justify-between px-4 py-3">
                  <div className="flex items-center gap-4">
                    <div className="flex items-center gap-2">
                      <div className="size-3 rounded-full bg-green-500" />
                      <span className="text-muted-foreground text-xs">
                        Rank #1
                      </span>
                    </div>
                    <div className="flex items-center gap-2">
                      <div className="size-3 rounded-full bg-primary" />
                      <span className="text-muted-foreground text-xs">
                        Your Location
                      </span>
                    </div>
                  </div>
                  <span className="font-medium text-green-600 text-xs dark:text-green-500">
                    12/12 #1 Rankings
                  </span>
                </div>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="px-6 py-16 lg:py-20">
        <div className="mx-auto max-w-4xl">
          <div className="mb-12 text-center">
            <h2 className="mb-4 font-bold text-4xl leading-[1.1] tracking-tight lg:text-5xl">
              Frequently Asked Questions
            </h2>
            <p className="mx-auto max-w-2xl text-muted-foreground">
              Everything you need to know about Maps optimization
            </p>
          </div>
          <Accordion className="w-full">
            {faqs.map((faq, index) => (
              <AccordionItem key={faq.question} value={`item-${index + 1}`}>
                <AccordionTrigger className="text-left font-semibold text-lg">
                  {faq.question}
                </AccordionTrigger>
                <AccordionContent className="text-muted-foreground">
                  {faq.answer}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </section>

      {/* Final CTA Section */}
      <section className="border-border border-y px-6 py-16 lg:py-20">
        <div className="mx-auto max-w-3xl text-center">
          <h2 className="mb-4 font-bold text-3xl tracking-tight lg:text-4xl">
            Ready to Own Your Local Market?
          </h2>
          <p className="mx-auto mb-8 max-w-xl text-muted-foreground">
            Every day you're not ranking #1 in Maps, customers are finding your
            competitors instead. Let's change that.
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
    </div>
  );
}
