import { createFileRoute, Link } from '@tanstack/react-router';
import {
  ArrowRight,
  BarChart3,
  Building2,
  CheckCircle2,
  FileText,
  Globe2,
  GraduationCap,
  Headphones,
  Lock,
  Network,
  Shield,
  Target,
  TrendingUp,
  Users2,
  Zap,
} from 'lucide-react';
import { SEO } from '@/components/SEO';
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from '@/components/ui/accordion';
import { Button } from '@/components/ui/button';
import { generateMetaTags } from '@/lib/seo';

export const Route = createFileRoute('/enterprise')({
  component: EnterprisePage,
  head: () =>
    generateMetaTags({
      title: 'Enterprise SEO Solutions | Custom Search Strategies at Scale',
      description:
        'Enterprise-grade SEO for multi-location businesses and brands. Dedicated support, custom reporting, SLA guarantees, and white-glove service for organizations that demand results at scale.',
      url: 'https://onepercentseo.com/enterprise',
    }),
});

function EnterprisePage() {
  const serviceSchema = {
    type: 'Service' as const,
    data: {
      name: 'Enterprise SEO Solutions',
      description:
        'Enterprise-grade search engine optimization services for large organizations with multiple locations, brands, or complex needs.',
      url: 'https://onepercentseo.com/enterprise',
      serviceType: 'Search Engine Optimization',
      provider: {
        '@type': 'Organization',
        name: 'One Percent SEO',
        url: 'https://onepercentseo.com',
      },
      areaServed: 'Worldwide',
    },
  };

  return (
    <>
      <SEO structuredData={[serviceSchema]} />

      {/* Hero Section */}
      <section className="px-6 py-20 lg:py-32">
        <div className="mx-auto max-w-7xl">
          <div className="mx-auto max-w-4xl text-center">
            <h1 className="mb-6 font-extrabold text-5xl leading-[0.95] tracking-tighter lg:text-7xl xl:text-8xl">
              Enterprise-Grade Search Optimization at Scale
            </h1>
            <p className="mx-auto mb-10 max-w-2xl text-lg text-muted-foreground leading-relaxed tracking-wide lg:text-xl">
              Custom solutions for multi-location businesses, enterprise brands,
              and organizations that demand white-glove service, dedicated
              support, and guaranteed results.
            </p>
            <div className="flex flex-col items-center justify-center gap-4 sm:flex-row">
              <Button
                asChild
                size="lg"
                className="bg-accent text-accent-foreground hover:bg-accent/90"
              >
                <Link to="/apply">
                  Schedule Enterprise Demo
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Link>
              </Button>
              <Button asChild size="lg" variant="outline">
                <Link to="/case-studies">View Case Studies</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* What Makes Enterprise Different */}
      <section className="border-border border-y bg-muted/30 px-6 py-20 lg:py-32">
        <div className="mx-auto max-w-7xl">
          <div className="grid gap-12 lg:grid-cols-2 lg:gap-16">
            <div>
              <h2 className="mb-6 font-bold text-4xl tracking-tight lg:text-6xl">
                What Makes Enterprise Different
              </h2>
              <p className="mb-6 text-lg text-muted-foreground leading-relaxed tracking-wide">
                Enterprise SEO isn't just about doing more—it's about doing
                things differently. When you're managing multiple locations,
                brands, or complex organizational structures, you need
                strategies that scale, systems that integrate, and support that
                understands your unique challenges.
              </p>
              <p className="mb-6 text-lg text-muted-foreground leading-relaxed tracking-wide">
                Our enterprise solutions provide dedicated account management,
                custom reporting dashboards, and white-glove service designed
                for enterprise companies, multi-location businesses, and
                organizations with complex compliance needs.
              </p>
              <p className="text-lg text-muted-foreground leading-relaxed tracking-wide">
                From stakeholder training to enterprise tool integration, we
                become an extension of your team—delivering results at scale
                while maintaining the precision and attention to detail that
                drives success.
              </p>
            </div>
            <div className="flex items-center justify-center">
              {/* Placeholder for future visualization */}
              <div className="h-full w-full" />
            </div>
          </div>

          {/* Mini Stats */}
          <div className="mt-16 grid gap-8 sm:grid-cols-2">
            <div className="rounded-2xl border border-border bg-card p-8 text-center">
              <div className="mb-2 font-extrabold text-4xl text-accent tracking-tight lg:text-6xl">
                Worldwide
              </div>
              <div className="text-muted-foreground text-sm tracking-wide">
                Brand Visibility
              </div>
            </div>
            <div className="rounded-2xl border border-border bg-card p-8 text-center">
              <div className="mb-2 font-extrabold text-5xl text-accent tracking-tight lg:text-7xl">
                24/7
              </div>
              <div className="text-muted-foreground text-sm tracking-wide">
                Priority Support Access
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Our Enterprise Process */}
      <section className="px-6 py-20 lg:py-32">
        <div className="mx-auto max-w-7xl">
          <div className="mb-16 text-center">
            <h2 className="mb-4 font-bold text-4xl tracking-tight lg:text-6xl">
              Our Enterprise Process
            </h2>
            <p className="mx-auto max-w-3xl text-lg text-muted-foreground leading-relaxed tracking-wide">
              A systematic approach designed for organizations with complex
              needs and multiple stakeholders.
            </p>
          </div>

          <div className="grid gap-8 lg:grid-cols-4">
            <div className="rounded-2xl border border-border bg-card p-8 transition-all hover:border-accent/50 hover:shadow-lg">
              <div className="mb-4 font-bold text-3xl text-accent/30">01</div>
              <div className="mb-4 inline-flex rounded-lg bg-accent/10 p-3">
                <Target className="h-8 w-8 text-accent" />
              </div>
              <h3 className="mb-3 font-bold text-2xl">
                Discovery & Enterprise Audit
              </h3>
              <p className="text-muted-foreground text-sm leading-relaxed tracking-wide">
                Multi-stakeholder assessment across all locations, brands, and
                digital properties. We analyze your enterprise tech stack,
                compliance requirements, and organizational structure.
              </p>
            </div>

            <div className="rounded-2xl border border-border bg-card p-8 transition-all hover:border-accent/50 hover:shadow-lg">
              <div className="mb-4 font-bold text-3xl text-accent/30">02</div>
              <div className="mb-4 inline-flex rounded-lg bg-accent/10 p-3">
                <FileText className="h-8 w-8 text-accent" />
              </div>
              <h3 className="mb-3 font-bold text-2xl">
                Custom Strategy Development
              </h3>
              <p className="text-muted-foreground text-sm leading-relaxed tracking-wide">
                Scalable frameworks tailored to your organization. Custom
                reporting dashboards, governance models, and strategies that
                work across multiple markets and stakeholders.
              </p>
            </div>

            <div className="rounded-2xl border border-border bg-card p-8 transition-all hover:border-accent/50 hover:shadow-lg">
              <div className="mb-4 font-bold text-3xl text-accent/30">03</div>
              <div className="mb-4 inline-flex rounded-lg bg-accent/10 p-3">
                <Network className="h-8 w-8 text-accent" />
              </div>
              <h3 className="mb-3 font-bold text-2xl">
                Implementation & Integration
              </h3>
              <p className="text-muted-foreground text-sm leading-relaxed tracking-wide">
                Seamless integration with your enterprise tools (Salesforce,
                HubSpot, analytics platforms). White-glove onboarding with
                dedicated training for all stakeholder groups.
              </p>
            </div>

            <div className="rounded-2xl border border-border bg-card p-8 transition-all hover:border-accent/50 hover:shadow-lg">
              <div className="mb-4 font-bold text-3xl text-accent/30">04</div>
              <div className="mb-4 inline-flex rounded-lg bg-accent/10 p-3">
                <TrendingUp className="h-8 w-8 text-accent" />
              </div>
              <h3 className="mb-3 font-bold text-2xl">
                Ongoing Optimization & Support
              </h3>
              <p className="text-muted-foreground text-sm leading-relaxed tracking-wide">
                Dedicated account team with priority support. Regular executive
                reporting, quarterly business reviews, and continuous
                optimization across all properties.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Enterprise Features */}
      <section className="border-border border-y bg-muted/30 px-6 py-20 lg:py-32">
        <div className="mx-auto max-w-7xl">
          <div className="mb-16 text-center">
            <h2 className="mb-4 font-bold text-4xl tracking-tight lg:text-6xl">
              Enterprise Features
            </h2>
            <p className="mx-auto max-w-3xl text-lg text-muted-foreground leading-relaxed tracking-wide">
              Premium capabilities designed for organizations that demand the
              highest standards.
            </p>
          </div>

          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
            <div className="rounded-2xl border border-border bg-card p-8">
              <div className="mb-4 inline-flex rounded-lg bg-accent/10 p-3">
                <Users2 className="h-8 w-8 text-accent" />
              </div>
              <h3 className="mb-3 font-bold text-xl lg:text-2xl">
                Dedicated Account Management
              </h3>
              <p className="text-muted-foreground text-sm leading-relaxed tracking-wide">
                Your own dedicated account team who understands your business,
                industry, and goals. Direct access to senior strategists and
                technical specialists.
              </p>
            </div>

            <div className="rounded-2xl border border-border bg-card p-8">
              <div className="mb-4 inline-flex rounded-lg bg-accent/10 p-3">
                <BarChart3 className="h-8 w-8 text-accent" />
              </div>
              <h3 className="mb-3 font-bold text-xl lg:text-2xl">
                Custom Reporting & Analytics
              </h3>
              <p className="text-muted-foreground text-sm leading-relaxed tracking-wide">
                Executive dashboards tailored to your KPIs. Automated reporting,
                competitive intelligence, and insights that align with your
                business objectives.
              </p>
            </div>

            <div className="rounded-2xl border border-border bg-card p-8">
              <div className="mb-4 inline-flex rounded-lg bg-accent/10 p-3">
                <Shield className="h-8 w-8 text-accent" />
              </div>
              <h3 className="mb-3 font-bold text-xl lg:text-2xl">
                Enterprise Security & Compliance
              </h3>
              <p className="text-muted-foreground text-sm leading-relaxed tracking-wide">
                SOC 2 compliance, GDPR adherence, and enterprise-grade security
                protocols. Custom NDAs and security requirements accommodated.
              </p>
            </div>

            <div className="rounded-2xl border border-border bg-card p-8">
              <div className="mb-4 inline-flex rounded-lg bg-accent/10 p-3">
                <Globe2 className="h-8 w-8 text-accent" />
              </div>
              <h3 className="mb-3 font-bold text-xl lg:text-2xl">
                Multi-Location/Brand Coordination
              </h3>
              <p className="text-muted-foreground text-sm leading-relaxed tracking-wide">
                Centralized strategy with local execution. Manage hundreds of
                locations or multiple brands with consistent governance and
                scalable processes.
              </p>
            </div>

            <div className="rounded-2xl border border-border bg-card p-8">
              <div className="mb-4 inline-flex rounded-lg bg-accent/10 p-3">
                <Headphones className="h-8 w-8 text-accent" />
              </div>
              <h3 className="mb-3 font-bold text-xl lg:text-2xl">
                White-Glove Support
              </h3>
              <p className="text-muted-foreground text-sm leading-relaxed tracking-wide">
                24/7 priority support with dedicated account management.
                Personalized service and quarterly business reviews tailored to
                your needs.
              </p>
            </div>

            <div className="rounded-2xl border border-border bg-card p-8">
              <div className="mb-4 inline-flex rounded-lg bg-accent/10 p-3">
                <Zap className="h-8 w-8 text-accent" />
              </div>
              <h3 className="mb-3 font-bold text-xl lg:text-2xl">
                Advanced Integration Capabilities
              </h3>
              <p className="text-muted-foreground text-sm leading-relaxed tracking-wide">
                API access for custom integrations. Seamless connections to
                Salesforce, HubSpot, analytics platforms, and proprietary
                enterprise systems.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Comprehensive Services Included */}
      <section className="px-6 py-20 lg:py-32">
        <div className="mx-auto max-w-7xl">
          <div className="mb-16 text-center">
            <h2 className="mb-4 font-bold text-4xl tracking-tight lg:text-6xl">
              Comprehensive Services Included
            </h2>
            <p className="mx-auto max-w-3xl text-lg text-muted-foreground leading-relaxed tracking-wide">
              Everything you need to dominate search at enterprise scale.
            </p>
          </div>

          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
            <div className="rounded-2xl border border-border bg-card p-8">
              <div className="mb-4 inline-flex rounded-lg bg-accent/10 p-3">
                <Target className="h-8 w-8 text-accent" />
              </div>
              <h3 className="mb-4 font-bold text-xl lg:text-2xl">
                Strategic Consulting & Planning
              </h3>
              <ul className="space-y-3">
                <li className="flex items-start gap-3">
                  <CheckCircle2 className="mt-1 h-5 w-5 shrink-0 text-accent" />
                  <span className="text-muted-foreground text-sm tracking-wide">
                    Quarterly strategic planning sessions
                  </span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle2 className="mt-1 h-5 w-5 shrink-0 text-accent" />
                  <span className="text-muted-foreground text-sm tracking-wide">
                    Executive stakeholder reporting
                  </span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle2 className="mt-1 h-5 w-5 shrink-0 text-accent" />
                  <span className="text-muted-foreground text-sm tracking-wide">
                    Competitive intelligence & market analysis
                  </span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle2 className="mt-1 h-5 w-5 shrink-0 text-accent" />
                  <span className="text-muted-foreground text-sm tracking-wide">
                    Multi-year roadmap development
                  </span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle2 className="mt-1 h-5 w-5 shrink-0 text-accent" />
                  <span className="text-muted-foreground text-sm tracking-wide">
                    Budget planning & ROI forecasting
                  </span>
                </li>
              </ul>
            </div>

            <div className="rounded-2xl border border-border bg-card p-8">
              <div className="mb-4 inline-flex rounded-lg bg-accent/10 p-3">
                <Building2 className="h-8 w-8 text-accent" />
              </div>
              <h3 className="mb-4 font-bold text-xl lg:text-2xl">
                Technical SEO at Scale
              </h3>
              <ul className="space-y-3">
                <li className="flex items-start gap-3">
                  <CheckCircle2 className="mt-1 h-5 w-5 shrink-0 text-accent" />
                  <span className="text-muted-foreground text-sm tracking-wide">
                    Enterprise site architecture optimization
                  </span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle2 className="mt-1 h-5 w-5 shrink-0 text-accent" />
                  <span className="text-muted-foreground text-sm tracking-wide">
                    International SEO & hreflang management
                  </span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle2 className="mt-1 h-5 w-5 shrink-0 text-accent" />
                  <span className="text-muted-foreground text-sm tracking-wide">
                    Advanced schema markup & structured data
                  </span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle2 className="mt-1 h-5 w-5 shrink-0 text-accent" />
                  <span className="text-muted-foreground text-sm tracking-wide">
                    Core Web Vitals optimization at scale
                  </span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle2 className="mt-1 h-5 w-5 shrink-0 text-accent" />
                  <span className="text-muted-foreground text-sm tracking-wide">
                    Mobile-first indexing compliance
                  </span>
                </li>
              </ul>
            </div>

            <div className="rounded-2xl border border-border bg-card p-8">
              <div className="mb-4 inline-flex rounded-lg bg-accent/10 p-3">
                <FileText className="h-8 w-8 text-accent" />
              </div>
              <h3 className="mb-4 font-bold text-xl lg:text-2xl">
                Content Operations & Governance
              </h3>
              <ul className="space-y-3">
                <li className="flex items-start gap-3">
                  <CheckCircle2 className="mt-1 h-5 w-5 shrink-0 text-accent" />
                  <span className="text-muted-foreground text-sm tracking-wide">
                    Content governance framework
                  </span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle2 className="mt-1 h-5 w-5 shrink-0 text-accent" />
                  <span className="text-muted-foreground text-sm tracking-wide">
                    Scalable content production systems
                  </span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle2 className="mt-1 h-5 w-5 shrink-0 text-accent" />
                  <span className="text-muted-foreground text-sm tracking-wide">
                    Multi-location content coordination
                  </span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle2 className="mt-1 h-5 w-5 shrink-0 text-accent" />
                  <span className="text-muted-foreground text-sm tracking-wide">
                    Quality assurance & compliance checks
                  </span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle2 className="mt-1 h-5 w-5 shrink-0 text-accent" />
                  <span className="text-muted-foreground text-sm tracking-wide">
                    Brand consistency across properties
                  </span>
                </li>
              </ul>
            </div>

            <div className="rounded-2xl border border-border bg-card p-8">
              <div className="mb-4 inline-flex rounded-lg bg-accent/10 p-3">
                <Globe2 className="h-8 w-8 text-accent" />
              </div>
              <h3 className="mb-4 font-bold text-xl lg:text-2xl">
                Multi-Location Management
              </h3>
              <ul className="space-y-3">
                <li className="flex items-start gap-3">
                  <CheckCircle2 className="mt-1 h-5 w-5 shrink-0 text-accent" />
                  <span className="text-muted-foreground text-sm tracking-wide">
                    Centralized local listings management
                  </span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle2 className="mt-1 h-5 w-5 shrink-0 text-accent" />
                  <span className="text-muted-foreground text-sm tracking-wide">
                    Multi-location review management
                  </span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle2 className="mt-1 h-5 w-5 shrink-0 text-accent" />
                  <span className="text-muted-foreground text-sm tracking-wide">
                    Location-specific landing pages
                  </span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle2 className="mt-1 h-5 w-5 shrink-0 text-accent" />
                  <span className="text-muted-foreground text-sm tracking-wide">
                    Regional performance tracking
                  </span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle2 className="mt-1 h-5 w-5 shrink-0 text-accent" />
                  <span className="text-muted-foreground text-sm tracking-wide">
                    Franchise/dealer network optimization
                  </span>
                </li>
              </ul>
            </div>

            <div className="rounded-2xl border border-border bg-card p-8">
              <div className="mb-4 inline-flex rounded-lg bg-accent/10 p-3">
                <GraduationCap className="h-8 w-8 text-accent" />
              </div>
              <h3 className="mb-4 font-bold text-xl lg:text-2xl">
                Enterprise Training & Onboarding
              </h3>
              <ul className="space-y-3">
                <li className="flex items-start gap-3">
                  <CheckCircle2 className="mt-1 h-5 w-5 shrink-0 text-accent" />
                  <span className="text-muted-foreground text-sm tracking-wide">
                    Custom training programs for stakeholders
                  </span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle2 className="mt-1 h-5 w-5 shrink-0 text-accent" />
                  <span className="text-muted-foreground text-sm tracking-wide">
                    White-glove onboarding process
                  </span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle2 className="mt-1 h-5 w-5 shrink-0 text-accent" />
                  <span className="text-muted-foreground text-sm tracking-wide">
                    Documentation & playbook development
                  </span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle2 className="mt-1 h-5 w-5 shrink-0 text-accent" />
                  <span className="text-muted-foreground text-sm tracking-wide">
                    Ongoing education & certification
                  </span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle2 className="mt-1 h-5 w-5 shrink-0 text-accent" />
                  <span className="text-muted-foreground text-sm tracking-wide">
                    Change management support
                  </span>
                </li>
              </ul>
            </div>

            <div className="rounded-2xl border border-border bg-card p-8">
              <div className="mb-4 inline-flex rounded-lg bg-accent/10 p-3">
                <Lock className="h-8 w-8 text-accent" />
              </div>
              <h3 className="mb-4 font-bold text-xl lg:text-2xl">
                Custom Tools & Automation
              </h3>
              <ul className="space-y-3">
                <li className="flex items-start gap-3">
                  <CheckCircle2 className="mt-1 h-5 w-5 shrink-0 text-accent" />
                  <span className="text-muted-foreground text-sm tracking-wide">
                    API access for custom integrations
                  </span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle2 className="mt-1 h-5 w-5 shrink-0 text-accent" />
                  <span className="text-muted-foreground text-sm tracking-wide">
                    Automated reporting dashboards
                  </span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle2 className="mt-1 h-5 w-5 shrink-0 text-accent" />
                  <span className="text-muted-foreground text-sm tracking-wide">
                    CRM & marketing automation integration
                  </span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle2 className="mt-1 h-5 w-5 shrink-0 text-accent" />
                  <span className="text-muted-foreground text-sm tracking-wide">
                    Custom workflow automation
                  </span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle2 className="mt-1 h-5 w-5 shrink-0 text-accent" />
                  <span className="text-muted-foreground text-sm tracking-wide">
                    Enterprise analytics platform access
                  </span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Enterprise Client Results */}
      <section className="border-border border-y bg-muted/30 px-6 py-20 lg:py-32">
        <div className="mx-auto max-w-7xl">
          <div className="mb-16 text-center">
            <h2 className="mb-4 font-bold text-4xl tracking-tight lg:text-6xl">
              Enterprise Client Results
            </h2>
            <p className="mx-auto max-w-3xl text-lg text-muted-foreground leading-relaxed tracking-wide">
              Results that matter to organizations at scale.
            </p>
          </div>

          <div className="grid gap-12 lg:grid-cols-2 lg:gap-16">
            <div>
              <p className="mb-8 text-lg text-muted-foreground leading-relaxed tracking-wide">
                Our enterprise clients don't just see incremental
                improvements—they achieve transformational results that impact
                every location, brand, and market they serve. From enterprise
                companies to rapidly scaling multi-location businesses, we
                deliver measurable ROI with white-glove service.
              </p>

              <div className="grid gap-6 sm:grid-cols-3">
                <div className="rounded-2xl border border-border bg-card p-6">
                  <div className="mb-2 font-extrabold text-3xl text-accent tracking-tight sm:text-4xl">
                    $200M
                  </div>
                  <div className="text-muted-foreground text-sm leading-relaxed tracking-wide">
                    Revenue Generated
                  </div>
                </div>
                <div className="rounded-2xl border border-border bg-card p-6">
                  <div className="mb-2 font-extrabold text-3xl text-accent tracking-tight sm:text-4xl">
                    8X
                  </div>
                  <div className="text-muted-foreground text-sm leading-relaxed tracking-wide">
                    Average Organic Traffic Growth
                  </div>
                </div>
                <div className="rounded-2xl border border-border bg-card p-6">
                  <div className="mb-2 font-extrabold text-3xl text-accent tracking-tight sm:text-4xl">
                    1000%
                  </div>
                  <div className="text-muted-foreground text-sm leading-relaxed tracking-wide">
                    Brand Visibility Growth
                  </div>
                </div>
              </div>
            </div>
            <div className="flex items-center justify-center">
              {/* Placeholder for future visualization */}
              <div className="h-full w-full" />
            </div>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="px-6 py-20 lg:py-32">
        <div className="mx-auto max-w-4xl">
          <div className="mb-12 text-center">
            <h2 className="mb-4 font-bold text-4xl tracking-tight lg:text-6xl">
              Frequently Asked Questions
            </h2>
            <p className="text-lg text-muted-foreground leading-relaxed tracking-wide">
              Everything you need to know about our enterprise solutions.
            </p>
          </div>

          <Accordion type="single" collapsible className="w-full">
            <AccordionItem value="item-1">
              <AccordionTrigger className="text-left font-semibold text-lg">
                What's the minimum engagement for enterprise services?
              </AccordionTrigger>
              <AccordionContent className="text-muted-foreground leading-relaxed">
                Our enterprise solutions are designed for organizations with
                significant search presence and complex needs. Typically, this
                means businesses with 10+ locations, multiple brands, or
                enterprise-level complexity. Minimum engagement is an annual
                contract starting at $15,000/month. This includes dedicated
                account management, custom reporting, SLA guarantees, and access
                to our full suite of enterprise services. We customize each
                engagement based on your specific needs, number of locations,
                and strategic objectives.
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="item-2">
              <AccordionTrigger className="text-left font-semibold text-lg">
                How does enterprise pricing work?
              </AccordionTrigger>
              <AccordionContent className="text-muted-foreground leading-relaxed">
                Enterprise pricing is customized based on several factors:
                number of locations/brands, complexity of your digital
                ecosystem, scope of services required, and your strategic
                objectives. Most enterprise clients invest between
                $15,000-$75,000+ per month on annual contracts. Pricing includes
                dedicated account management, unlimited stakeholder support,
                custom reporting dashboards, SLA guarantees, and access to all
                enterprise features. We provide transparent ROI projections and
                work within your budget to maximize impact. Volume discounts and
                multi-year agreements are available for qualifying
                organizations.
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="item-3">
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

            <AccordionItem value="item-4">
              <AccordionTrigger className="text-left font-semibold text-lg">
                What makes your enterprise solution different from standard SEO
                services?
              </AccordionTrigger>
              <AccordionContent className="text-muted-foreground leading-relaxed">
                Enterprise SEO isn't just "more SEO"—it's a fundamentally
                different approach. You get a dedicated account team (not shared
                resources), custom reporting dashboards tailored to your KPIs,
                white-glove support with priority response times, 24/7 access,
                enterprise-grade security and compliance (SOC 2, GDPR), and
                integration with your existing enterprise tools (Salesforce,
                HubSpot, etc.). We become an extension of your team with
                quarterly business reviews, executive reporting, stakeholder
                training, and strategic planning. Our systems are built to
                manage complexity at scale—whether that's multiple locations,
                brands, or international markets.
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="item-5">
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

            <AccordionItem value="item-6">
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

            <AccordionItem value="item-7">
              <AccordionTrigger className="text-left font-semibold text-lg">
                How do you handle multi-location or franchise networks?
              </AccordionTrigger>
              <AccordionContent className="text-muted-foreground leading-relaxed">
                Multi-location management is one of our core competencies. We
                provide centralized strategy with local execution—meaning
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
      <section className="border-border border-t px-6 py-20 lg:py-32">
        <div className="mx-auto max-w-4xl text-center">
          <h2 className="mb-6 font-bold text-4xl tracking-tight lg:text-6xl">
            Ready to Scale Your Search Presence?
          </h2>
          <p className="mx-auto mb-10 max-w-2xl text-lg text-muted-foreground leading-relaxed tracking-wide">
            Join the enterprise companies and multi-location businesses that
            trust One Percent Digital for enterprise-grade search optimization.
            Schedule a personalized demo to see how we can transform your search
            presence at scale.
          </p>
          <Button
            asChild
            size="lg"
            className="bg-accent text-accent-foreground hover:bg-accent/90"
          >
            <Link to="/apply">
              Schedule Enterprise Demo
              <ArrowRight className="ml-2 h-5 w-5" />
            </Link>
          </Button>
          <p className="mt-6 text-muted-foreground text-sm">
            Enterprise consultations typically take 45-60 minutes and include a
            customized assessment of your current search presence.
          </p>
        </div>
      </section>
    </>
  );
}
