/**
 * Case Studies Data
 *
 * Real client success stories showcasing measurable results from SEO and GEO services.
 * This data structure follows the same pattern as customers.ts for consistency.
 */

export interface CaseStudyMetric {
  label: string;
  value: string;
  description: string;
}

export interface CaseStudyTestimonial {
  quote: string;
  author: string;
  role: string;
  initials: string;
}

export interface CaseStudy {
  id: string;
  title: string;
  client: string;
  industry: string;
  featured?: boolean;
  thumbnail?: string;
  services: string[]; // ['SEO', 'GEO', 'Link Building', etc.]
  challenge: string;
  solution: string;
  results: string;
  metrics: CaseStudyMetric[];
  testimonial?: CaseStudyTestimonial;
}

export const caseStudies: CaseStudy[] = [
  {
    id: 'revology-cars',
    title: 'The Acquisition Story',
    client: 'Revology Cars',
    industry: 'Automotive',
    featured: true,
    services: ['SEO', 'GEO', 'Content Strategy', 'Link Building'],
    challenge:
      'Revology manufactures brand-new reproduction 1967-1969 Mustangs and Shelby GTs - a highly specialized niche. They needed to educate a luxury market that their engineered reproductions were superior to traditional restorations, while competing against countless classic car shops for visibility.',
    solution:
      'We built a comprehensive content and link building strategy targeting classic car enthusiasts and collectors. Through strategic content positioning and authority building, we established Revology as the definitive source for engineered classic Mustangs, while optimizing for AI visibility to ensure consistent citations in ChatGPT and other platforms.',
    results:
      'We helped take Revology to an exit, heavily relying on traditional search. The company that acquired them continued on with us - a testament to the sustainable value we built.',
    metrics: [
      {
        label: 'Outcome',
        value: 'Acquisition',
        description: 'Successful company exit',
      },
      {
        label: 'Search Rankings',
        value: 'Page 1',
        description: 'Competitive classic car terms',
      },
      {
        label: 'AI Visibility',
        value: 'ChatGPT',
        description: 'Consistent platform citations',
      },
      {
        label: 'Client Retention',
        value: 'Acquirer',
        description: 'New owner retained partnership',
      },
    ],
    testimonial: {
      quote:
        'The SEO strategy One Percent built for us was foundational to our success. When we were acquired, the new ownership immediately recognized the value and kept the partnership going.',
      author: 'Revology Cars',
      role: 'Restomod Manufacturer',
      initials: 'RC',
    },
  },
  {
    id: 'goldfarb-associates',
    title: '10x Revenue Growth',
    client: 'Goldfarb & Associates',
    industry: 'E-commerce',
    featured: false,
    services: ['SEO', 'GEO', 'E-commerce Optimization'],
    challenge:
      'Goldfarb sells new, used, and remanufactured diesel parts to buyers worldwide - managing tens of thousands of SKUs with complex part compatibility requirements. They struggled to stand out in a crowded E-commerce space where technical specifications matter more than brand recognition.',
    solution:
      'Our E-commerce optimization strategy focused on product visibility, technical SEO for their massive catalog, and content that addressed buyer questions at every stage. We optimized for both traditional search and AI platforms, positioning Goldfarb as the go-to source for diesel parts information.',
    results:
      'Goldfarb became one of the most recommended injection pump online stores in ChatGPT, along with dominating traditional search. They increased revenue by 10x while moving tens of thousands of SKUs to buyers around the world.',
    metrics: [
      {
        label: 'Revenue Growth',
        value: '10x',
        description: 'Overall business growth',
      },
      {
        label: 'AI Recognition',
        value: '#1',
        description: 'Top ChatGPT recommendation for injection pumps',
      },
      {
        label: 'SKUs Sold',
        value: 'Millions',
        description: 'Products sold globally',
      },
      {
        label: 'Market Position',
        value: 'Authority',
        description: 'E-commerce category leader',
      },
    ],
    testimonial: {
      quote:
        'Working with One Percent SEO transformed our online presence. We went from being invisible to dominating our market. The team understands E-commerce and delivers real results.',
      author: 'Scott Goldfarb',
      role: 'Owner, Goldfarb & Associates',
      initials: 'SG',
    },
  },
  {
    id: 'royal-covers',
    title: 'Record-Breaking Success',
    client: 'Royal Covers',
    industry: 'Home Services',
    featured: false,
    services: ['SEO', 'GEO', 'Local SEO', 'Maps Optimization'],
    challenge:
      "Royal Covers, established in 1979, faced fierce local competition in the Phoenix patio cover market. Despite 40+ years of experience, they weren't appearing where Arizona homeowners were searching - neither in organic results nor local maps.",
    solution:
      "We implemented a comprehensive local SEO and GEO strategy, optimizing their presence across all Arizona service areas. We dominated local maps for patio cover searches throughout the state while building content authority that positioned them as Arizona's premier installer.",
    results:
      "Royal Covers became the #1 patio cover company in Arizona, achieving top local maps rankings across the entire state. They've now had record-breaking revenue 3 years in a row.",
    metrics: [
      {
        label: 'Market Position',
        value: '#1',
        description: 'Top patio cover company in Arizona',
      },
      {
        label: 'Local Maps',
        value: 'Top 3',
        description: 'Rankings across all Arizona service areas',
      },
      {
        label: 'Revenue Records',
        value: '3 Years',
        description: 'Consecutive record-breaking revenue',
      },
      {
        label: 'Legacy Amplified',
        value: '40+',
        description: 'Years of experience now visible online',
      },
    ],
    testimonial: {
      quote:
        "After 40+ years in business, One Percent SEO helped us finally dominate online. We're now the #1 patio cover company in Arizona with three straight years of record revenue.",
      author: 'Tanner Bishop',
      role: 'Owner, Royal Covers',
      initials: 'TB',
    },
  },
];

/**
 * Industry categories for filtering
 */
export const industries = [
  'Automotive',
  'E-commerce',
  'Home Services',
] as const;

export type Industry = (typeof industries)[number];

/**
 * Service types offered
 */
export const services = [
  'SEO',
  'GEO',
  'Local SEO',
  'E-commerce Optimization',
  'Content Strategy',
  'Link Building',
  'Maps Optimization',
] as const;

export type Service = (typeof services)[number];

/**
 * Helper Functions
 */

/**
 * Get featured case studies (shown prominently on pages)
 */
export function getFeaturedCaseStudies(): CaseStudy[] {
  return caseStudies.filter((study) => study.featured === true);
}

/**
 * Get case studies by industry
 */
export function getCaseStudiesByIndustry(industry: Industry): CaseStudy[] {
  return caseStudies.filter((study) => study.industry === industry);
}

/**
 * Get case studies by service
 */
export function getCaseStudiesByService(service: Service): CaseStudy[] {
  return caseStudies.filter((study) => study.services.includes(service));
}

/**
 * Get all case studies
 */
export function getAllCaseStudies(): CaseStudy[] {
  return caseStudies;
}

/**
 * Get case study by ID
 */
export function getCaseStudyById(id: string): CaseStudy | undefined {
  return caseStudies.find((study) => study.id === id);
}

/**
 * Get aggregate metrics across all case studies
 */
export function getAggregateMetrics() {
  return {
    totalClients: 300,
    averageGrowth: '8X',
    industriesServed: 'All',
  };
}
