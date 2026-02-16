/**
 * Solutions Data
 *
 * Industry-specific solutions showcasing GEO, SEO, and PPL expertise
 * across different verticals. Each industry has tailored challenges, approach, services, and FAQs.
 */

export interface IndustryChallenge {
  title: string;
  description: string;
  icon: string; // HugeIcons key from solution-icons.ts
}

export interface ApproachStep {
  title: string;
  description: string;
  icon: string; // HugeIcons key from solution-icons.ts
}

export interface IndustryService {
  title: string;
  description: string;
  features: string[];
}

export interface IndustryFAQ {
  question: string;
  answer: string;
}

export interface FeaturedClient {
  caseStudyId: string; // Reference to case-studies.ts
  name: string;
  tagline: string;
}

export interface IndustrySolution {
  id: string;
  name: string;
  slug: string;
  description: string; // For landing page cards
  heroHeadline: string;
  heroSubheadline: string;
  challenges: IndustryChallenge[];
  approach: ApproachStep[];
  services: IndustryService[];
  resultsHeadline: string;
  aggregateStats: {
    label: string;
    value: string;
    description: string;
  }[];
  featuredClient?: FeaturedClient;
  faqs: IndustryFAQ[];
  ctaHeadline: string;
  ctaDescription: string;
}

export const solutions: IndustrySolution[] = [
  // 1. HOSPITALITY & RESTAURANTS
  {
    id: 'hospitality',
    name: 'Hospitality & Restaurants',
    slug: 'hospitality',
    description:
      'Own local search and AI recommendations for restaurants, hotels, and hospitality venues. Fill every table and room with search-driven customers.',
    heroHeadline: 'Fill Every Table with Restaurant & Hotel SEO',
    heroSubheadline:
      'Fill tables and drive reservations with GEO and SEO strategies built for hospitality. Beat OTAs, outrank chains, and capture your local market.',
    challenges: [
      {
        title: 'OTAs Controlling Discovery',
        description:
          'Third-party platforms like OpenTable and Resy appear above your website in search and AI recommendations, taking commissions and owning customer relationships.',
        icon: 'ChartDecreaseIcon',
      },
      {
        title: 'Competing with National Chains',
        description:
          'Chain restaurants and hotels have massive marketing budgets. Independent venues struggle to compete for visibility across search and AI platforms.',
        icon: 'Building06Icon',
      },
      {
        title: 'Review Management Across Platforms',
        description:
          'Managing reviews across Google, Yelp, TripAdvisor, and social media is overwhelming. Negative reviews hurt visibility and bookings.',
        icon: 'Comment01Icon',
      },
      {
        title: 'Converting Interest to Reservations',
        description:
          'Visitors find your site but bounce without booking. Poor mobile experience, slow load times, and confusing reservation flows kill conversions.',
        icon: 'Touch01Icon',
      },
    ],
    approach: [
      {
        title: 'Analyze',
        description:
          'Audit your visibility across search engines, AI assistants, and lead channels. Identify quick wins and long-term growth opportunities.',
        icon: 'Search01Icon',
      },
      {
        title: 'Optimize',
        description:
          'Improve your Google Business Profile, website performance, and content structure for both traditional search and AI recommendations.',
        icon: 'Settings01Icon',
      },
      {
        title: 'Amplify',
        description:
          'Build visibility through SEO, GEO optimization for AI assistants, review generation, and targeted lead generation campaigns.',
        icon: 'ChartIncreaseIcon',
      },
      {
        title: 'Scale',
        description:
          'Track performance across all channels, refine strategy based on data, and scale what drives reservations and revenue.',
        icon: 'Award01Icon',
      },
    ],
    services: [
      {
        title: 'Local SEO & Google Business Profile',
        description:
          'Own the local pack and map results for your area. Get found by hungry customers searching nearby.',
        features: [
          'Google Business Profile optimization',
          'Local citation building and cleanup',
          'Location-specific landing pages',
          'Near me search optimization',
        ],
      },
      {
        title: 'GEO (Generative Engine Optimization)',
        description:
          'Ensure AI assistants recommend your venue when people ask ChatGPT, Perplexity, or voice assistants for dining suggestions.',
        features: [
          'AI search visibility optimization',
          'Conversational query targeting',
          'Entity optimization for AI understanding',
          'Featured snippet capture',
        ],
      },
      {
        title: 'Review Generation & Reputation Management',
        description:
          'Turn happy customers into 5-star reviews that boost rankings and drive more bookings.',
        features: [
          'Automated review request campaigns',
          'Multi-platform review monitoring',
          'Negative review response strategy',
          'Review schema implementation',
        ],
      },
      {
        title: 'Content Marketing for Hospitality',
        description:
          'Create content that answers questions diners ask and positions you as the obvious choice.',
        features: [
          'Menu and cuisine-focused content',
          'Event and seasonal promotions',
          'Chef and story-driven narratives',
          'Blog content for long-tail keywords',
        ],
      },
      {
        title: 'Technical SEO & Site Speed',
        description:
          'Fast, mobile-friendly websites that convert searchers into customers. No more losing bookings to slow load times.',
        features: [
          'Core Web Vitals optimization',
          'Mobile-first responsive design',
          'Image optimization and CDN setup',
          'Structured data for menus and events',
        ],
      },
      {
        title: 'Analytics & Conversion Tracking',
        description:
          'Know exactly which keywords, pages, and campaigns drive reservations and revenue.',
        features: [
          'Goal and conversion tracking setup',
          'Reservation attribution reporting',
          'ROI measurement and reporting',
          'Competitive benchmarking',
        ],
      },
    ],
    resultsHeadline: 'Results That Fill Tables and Drive Revenue',
    aggregateStats: [],
    faqs: [
      {
        question: 'What is GEO and why does it matter for restaurants?',
        answer:
          "GEO (Generative Engine Optimization) ensures AI assistants like ChatGPT, Perplexity, and voice assistants recommend your restaurant when people ask for dining suggestions. When someone asks 'What's the best Italian restaurant near me?' or 'Where should I eat in downtown Miami?', GEO optimization determines whether your venue appears in that recommendation. As more diners use AI to discover restaurants, GEO is becoming as important as traditional search visibility.",
      },
      {
        question:
          'How do we compete with OpenTable and Resy in search results?',
        answer:
          "You can't outrank OTAs for generic terms like 'restaurant reservations,' but you can win where it matters: your restaurant name, local searches, and specific cuisine or experience queries. Focus on owning branded searches, appearing in the local pack for 'best Italian restaurant [city]' type queries, and capturing long-tail searches where OTAs don't rank. GEO optimization means AI assistants recommend YOUR restaurant directly, bypassing OTAs entirely.",
      },
      {
        question: 'How long until we see results from SEO?',
        answer:
          "You'll see initial improvements within 30-60 days from quick wins like Google Business Profile optimization and citation cleanup. Significant results typically appear around the 3-6 month mark. Local SEO moves faster than national SEO because you're competing in a specific geographic area. Restaurants that commit to 12+ months see the most dramatic results as content marketing and authority building compound over time.",
      },
      {
        question: 'Can you help with multiple restaurant locations?',
        answer:
          'Absolutely. Multi-location hospitality groups are our specialty. Each location gets its own optimized Google Business Profile, location-specific landing pages, GEO optimization for local AI recommendations, and PPL campaigns targeting its specific market. We implement enterprise-level tracking so you can see performance by location, and our strategies scale efficiently across your entire portfolio.',
      },
    ],
    ctaHeadline: 'Fill More Tables, Book More Rooms',
    ctaDescription:
      "Let's fill your tables and drive reservations with proven GEO and SEO strategies built for restaurants and hospitality businesses.",
  },

  // 2. E-COMMERCE & RETAIL
  {
    id: 'ecommerce',
    name: 'E-commerce & Retail',
    slug: 'ecommerce',
    description:
      'Drive qualified traffic and sales for online retailers. Compete with Amazon and win product searches with GEO, SEO, and PPL.',
    heroHeadline: 'E-commerce SEO That Drives More Sales',
    heroSubheadline:
      'Compete with Amazon, outrank competitors, and capture high-intent buyers with GEO and SEO built for e-commerce. Turn search traffic into revenue.',
    challenges: [
      {
        title: 'Competing with Amazon and Marketplaces',
        description:
          'Amazon dominates product discovery across search and AI. Independent retailers need strategic visibility to capture customers before they default to marketplaces.',
        icon: 'ShoppingCart01Icon',
      },
      {
        title: 'Product Discoverability',
        description:
          'Thin content and poor optimization prevent product pages from appearing in search results and AI recommendations. Your inventory stays invisible.',
        icon: 'DeliveryBox01Icon',
      },
      {
        title: 'Low Conversion Rates',
        description:
          "Traffic arrives but doesn't convert. Slow load times, poor mobile experience, and unclear value propositions kill sales.",
        icon: 'Touch01Icon',
      },
      {
        title: 'Fragmented Customer Acquisition',
        description:
          'Relying solely on paid ads is expensive and unsustainable. You need diversified channels including organic search, AI recommendations, and direct lead generation.',
        icon: 'SparklesIcon',
      },
    ],
    approach: [
      {
        title: 'Audit',
        description:
          'Analyze your visibility across search engines, AI assistants, and customer acquisition channels. Identify quick wins and revenue opportunities.',
        icon: 'Search01Icon',
      },
      {
        title: 'Optimize',
        description:
          'Improve site speed, product pages, and content structure for both traditional search and AI recommendations.',
        icon: 'Settings01Icon',
      },
      {
        title: 'Expand',
        description:
          'Build visibility through SEO, GEO optimization, buying guides, and targeted lead generation that captures buyers at every stage.',
        icon: 'ChartIncreaseIcon',
      },
      {
        title: 'Convert',
        description:
          'Track performance across all channels, refine conversion funnels, and scale strategies that drive revenue.',
        icon: 'Target01Icon',
      },
    ],
    services: [
      {
        title: 'Product Page SEO',
        description:
          'Optimize product titles, descriptions, images, and structured data to rank higher and convert better.',
        features: [
          'Keyword-optimized product titles',
          'Unique, compelling product descriptions',
          'Image ALT text and optimization',
          'Product schema markup implementation',
        ],
      },
      {
        title: 'Technical SEO for E-commerce',
        description:
          'Fix crawling issues, improve site speed, handle faceted navigation, and ensure search engines index your inventory correctly.',
        features: [
          'Site architecture optimization',
          'Pagination and faceted navigation fixes',
          'Canonical tag implementation',
          'Core Web Vitals optimization',
        ],
      },
      {
        title: 'Content Marketing & Buying Guides',
        description:
          'Create helpful content that answers buyer questions, compares products, and drives organic traffic at every funnel stage.',
        features: [
          'Category and buying guide pages',
          'Product comparison content',
          'How-to and educational articles',
          'FAQ and support content optimization',
        ],
      },
      {
        title: 'GEO for E-commerce',
        description:
          'Ensure AI assistants recommend your products when shoppers ask for product suggestions and recommendations.',
        features: [
          'Product entity optimization',
          'AI-friendly content structure',
          'Review and rating optimization',
          'Conversational commerce targeting',
        ],
      },
      {
        title: 'Link Building & Authority',
        description:
          'Build high-quality backlinks from relevant publications, blogs, and industry sites to boost product rankings.',
        features: [
          'Product review outreach',
          'Industry publication features',
          'Influencer and blogger partnerships',
          'Digital PR for product launches',
        ],
      },
      {
        title: 'Conversion Rate Optimization',
        description:
          'Turn more search traffic into paying customers with optimized product pages, checkout flows, and user experience.',
        features: [
          'A/B testing product pages',
          'Checkout flow optimization',
          'Trust signal implementation',
          'Conversion tracking and analysis',
        ],
      },
    ],
    resultsHeadline: 'Results That Drive Revenue and Market Share',
    aggregateStats: [],
    faqs: [
      {
        question: 'How does GEO help e-commerce stores compete with Amazon?',
        answer:
          "GEO (Generative Engine Optimization) ensures AI assistants recommend your products when shoppers ask for suggestions. When someone asks ChatGPT 'What's the best running shoe for flat feet?' or 'Recommend a coffee grinder under $100,' GEO optimization determines whether your products appear. Amazon dominates traditional search, but AI recommendations are a new battlefield where specialized retailers can win by having better, more helpful product information.",
      },
      {
        question: 'How do we compete with Amazon in traditional search?',
        answer:
          "You can't beat Amazon for ultra-generic terms like 'buy headphones,' but you can win profitable long-tail searches where Amazon lacks advantage. Focus on specific product variations, niche categories, comparison keywords, and informational queries that capture buyers early in their journey. Amazon is weak at educational content, buying guides, and specific use-case searches. Target 'best [product] for [specific use case]' and capture buyers with helpful content before they reach Amazon.",
      },
      {
        question: 'How long does e-commerce SEO take to show results?',
        answer:
          'Quick wins like technical SEO fixes and product page optimization can show results in 30-60 days. Significant traffic and revenue growth typically appears around the 4-6 month mark as content gains traction and authority builds. E-commerce SEO is a compounding investment - stores that commit to 12+ months see the most dramatic results, often replacing paid ads as their primary customer acquisition channel.',
      },
      {
        question: 'How do you handle constantly changing inventory?',
        answer:
          "We build SEO and GEO strategies that maintain rankings even as individual products sell out. This includes optimizing category pages that remain stable, creating evergreen content around product types you consistently stock, and using structured data that updates automatically with inventory feeds. For seasonal products, we optimize pages year-round to maintain authority, ensuring you're already ranking when demand peaks.",
      },
    ],
    ctaHeadline: 'Turn Browsers Into Buyers',
    ctaDescription:
      "Let's drive revenue and capture market share with proven GEO and SEO strategies built for online retailers.",
  },

  // 3. MANUFACTURING & INDUSTRIAL
  {
    id: 'manufacturing',
    name: 'Manufacturing & Industrial',
    slug: 'manufacturing',
    description:
      'Drive qualified B2B leads for manufacturers and industrial companies. Lead high-value searches and reach decision-makers.',
    heroHeadline: 'Manufacturing SEO for B2B Lead Generation',
    heroSubheadline:
      'Generate qualified leads and reach procurement decision-makers with GEO and SEO strategies built for complex B2B sales cycles.',
    challenges: [
      {
        title: 'Long, Complex Sales Cycles',
        description:
          'Manufacturing sales involve multiple stakeholders, long research phases, and high-value contracts. Your visibility strategy must support the entire buyer journey.',
        icon: 'Clock01Icon',
      },
      {
        title: 'Technical Product Complexity',
        description:
          'Explaining complex products and specifications in ways that resonate with both search engines and AI assistants is challenging.',
        icon: 'Wrench01Icon',
      },
      {
        title: 'Niche Market Visibility',
        description:
          'Niche industrial products have low search volumes but high value. You need strategies that reach buyers across search, AI, and direct outreach.',
        icon: 'ChartDecreaseIcon',
      },
      {
        title: 'Competing with Industry Giants',
        description:
          'Large manufacturers dominate online visibility with massive content operations. Smaller players need smarter, more targeted approaches.',
        icon: 'Building06Icon',
      },
    ],
    approach: [
      {
        title: 'Research',
        description:
          'Understand buyer personas, map the decision journey, and identify opportunities across search, AI recommendations, and direct lead generation.',
        icon: 'Search01Icon',
      },
      {
        title: 'Optimize',
        description:
          'Improve product pages and technical content for visibility across search engines and AI assistants.',
        icon: 'Settings01Icon',
      },
      {
        title: 'Educate',
        description:
          'Create technical content, application guides, and case studies that position you as the industry expert across all discovery channels.',
        icon: 'Book02Icon',
      },
      {
        title: 'Convert',
        description:
          'Track lead quality across SEO, GEO, and PPL channels. Optimize conversion paths and refine strategy based on closed deals.',
        icon: 'Target01Icon',
      },
    ],
    services: [
      {
        title: 'Technical SEO for Manufacturing',
        description:
          'Optimize complex product catalogs, handle technical documentation, and ensure search engines understand your offerings.',
        features: [
          'Product catalog architecture',
          'Technical documentation optimization',
          'PDF content optimization',
          'Manufacturing schema markup',
        ],
      },
      {
        title: 'B2B Content Marketing',
        description:
          'Create authoritative content that educates buyers, demonstrates expertise, and supports long sales cycles.',
        features: [
          'Application guides and technical resources',
          'Case studies and success stories',
          'Industry trend analysis and thought leadership',
          'Problem-solution content for buyer pain points',
        ],
      },
      {
        title: 'Industrial Link Building',
        description:
          'Build authority through industry publications, trade associations, and relevant B2B directories.',
        features: [
          'Trade publication features',
          'Industry association partnerships',
          'B2B directory optimization',
          'Manufacturing influencer outreach',
        ],
      },
      {
        title: 'GEO for B2B Manufacturing',
        description:
          'Ensure AI assistants recommend your company when procurement teams research suppliers and solutions.',
        features: [
          'Entity optimization for AI understanding',
          'Conversational B2B query targeting',
          'Technical specification optimization',
          'Industry authority building',
        ],
      },
      {
        title: 'Lead Generation Optimization',
        description:
          'Turn search traffic into qualified leads with optimized quote forms, RFQ processes, and conversion paths.',
        features: [
          'RFQ and quote form optimization',
          'Lead magnet creation (specs, guides)',
          'Conversion tracking for B2B journeys',
          'Sales-qualified lead attribution',
        ],
      },
      {
        title: 'Analytics & ROI Tracking',
        description:
          'Measure what matters: qualified leads, closed deals, and revenue attributed to search visibility.',
        features: [
          'Lead quality scoring and tracking',
          'Deal attribution reporting',
          'Industry keyword ranking monitoring',
          'Competitive intelligence tracking',
        ],
      },
    ],
    resultsHeadline: 'Results That Drive High-Value B2B Leads',
    aggregateStats: [],
    faqs: [
      {
        question: 'How does GEO help manufacturers reach procurement teams?',
        answer:
          "GEO (Generative Engine Optimization) ensures AI assistants recommend your company when procurement professionals research suppliers. When a buyer asks ChatGPT 'Who manufactures custom aluminum enclosures?' or 'Best suppliers for industrial automation components,' GEO optimization determines whether your company appears. As more B2B buyers use AI for supplier research, being optimized for these recommendations is becoming critical for lead generation.",
      },
      {
        question: 'How do you handle low search volume industrial keywords?',
        answer:
          "Low volume doesn't mean low value in manufacturing. A keyword with only 50 monthly searches might represent significant contract potential. We use a portfolio approach: target a large number of niche, high-intent keywords rather than chasing high-volume generic terms. We also focus on informational queries in the research phase, capturing buyers early. One qualified procurement lead can justify the entire investment.",
      },
      {
        question: 'Can SEO work for highly technical or niche products?',
        answer:
          "Technical and niche products often see BETTER results because there's less competition and higher buyer intent. The key is understanding how buyers search (they rarely use technical jargon initially) and creating content that bridges the gap between problem and solution. We create content hierarchies: problem-aware content for top-of-funnel, technical specifications for bottom-of-funnel, and everything in between.",
      },
      {
        question: 'How long does B2B manufacturing SEO take?',
        answer:
          "B2B SEO typically takes 6-12 months for significant results but delivers much higher per-lead value than consumer SEO. Industrial buyers have long research cycles, so early content investments pay dividends for years. You'll see initial ranking improvements within 90 days, qualified lead increases around month 6, and compounding returns after month 12. Manufacturers who commit to multi-year strategies lead their niches.",
      },
    ],
    ctaHeadline: 'Fill Your Pipeline With Qualified Leads',
    ctaDescription:
      "Let's generate qualified B2B leads and grow your manufacturing business with proven GEO and SEO strategies.",
  },

  // 4. LOGISTICS & TRANSPORTATION
  {
    id: 'logistics',
    name: 'Logistics & Transportation',
    slug: 'logistics',
    description:
      'Generate qualified shipping and logistics leads through search. Capture industry keywords and reach shippers searching for reliable partners.',
    heroHeadline: 'Logistics SEO That Generates Freight Leads',
    heroSubheadline:
      'Generate high-value shipping contracts and freight leads with GEO and SEO built for logistics. Get found by shippers who need you.',
    challenges: [
      {
        title: 'Competing with Load Boards',
        description:
          'Load boards and marketplaces dominate shipper discovery. Independent logistics providers need direct channels to reach shippers.',
        icon: 'DeliveryTruck01Icon',
      },
      {
        title: 'Low Brand Differentiation',
        description:
          'Logistics companies all sound similar online. Differentiating your services and expertise across search and AI is difficult.',
        icon: 'FingerPrintIcon',
      },
      {
        title: 'Geographic Coverage Complexity',
        description:
          'Operating across multiple regions, lanes, and service areas creates visibility challenges. How do you reach shippers for hundreds of location combinations?',
        icon: 'MapsLocation01Icon',
      },
      {
        title: 'High Customer Acquisition Costs',
        description:
          'Relying on brokers, cold calling, and paid ads is expensive. You need sustainable channels including organic visibility and direct lead generation.',
        icon: 'DollarCircleIcon',
      },
    ],
    approach: [
      {
        title: 'Map',
        description:
          'Identify high-value shipping lanes, service area opportunities, and competitive gaps across search, AI, and lead generation channels.',
        icon: 'Location01Icon',
      },
      {
        title: 'Optimize',
        description:
          'Build location-specific pages and service content optimized for both traditional search and AI recommendations.',
        icon: 'Settings01Icon',
      },
      {
        title: 'Build Authority',
        description:
          'Create industry content and earn trust signals that drive visibility across search engines, AI assistants, and shipper communities.',
        icon: 'Award01Icon',
      },
      {
        title: 'Scale',
        description:
          'Expand to new lanes and services. Track lead quality across SEO, GEO, and PPL channels. Optimize what drives booked freight.',
        icon: 'ChartIncreaseIcon',
      },
    ],
    services: [
      {
        title: 'Location & Lane-Specific SEO',
        description:
          'Rank for shipping searches in every lane and region you serve. Win "freight from [city] to [city]" searches.',
        features: [
          'Lane-specific landing pages',
          'Geographic coverage optimization',
          'Local business listings for terminals',
          'Multi-location schema markup',
        ],
      },
      {
        title: 'Service-Based Content Strategy',
        description:
          'Optimize for different freight types, equipment, and specialized services you offer.',
        features: [
          'LTL, FTL, and specialized freight pages',
          'Equipment type optimization (flatbed, reefer, etc)',
          'Industry-specific logistics content',
          'Service differentiator content',
        ],
      },
      {
        title: 'B2B Logistics Link Building',
        description:
          'Build authority through industry publications, associations, and freight-focused directories.',
        features: [
          'Logistics publication features',
          'Industry association partnerships',
          'Freight directory optimization',
          'Shipper community engagement',
        ],
      },
      {
        title: 'GEO for Logistics Searches',
        description:
          'Ensure AI assistants recommend your company when shippers ask for freight solutions and logistics partners.',
        features: [
          'Conversational freight query targeting',
          'Service capability optimization for AI',
          'Coverage area entity optimization',
          'Industry authority signals for AI',
        ],
      },
      {
        title: 'Quote & Lead Conversion Optimization',
        description:
          'Turn shipper searches into qualified quote requests and booked loads with optimized conversion funnels.',
        features: [
          'Instant quote form optimization',
          'Load booking UX improvement',
          'Trust signal implementation',
          'Quote-to-booking tracking',
        ],
      },
      {
        title: 'Shipper Intent Tracking',
        description:
          'Understand what shippers search for, which lanes drive leads, and optimize for high-value freight opportunities.',
        features: [
          'Lane performance analytics',
          'Lead source attribution',
          'Shipper behavior tracking',
          'Competitive lane analysis',
        ],
      },
    ],
    resultsHeadline: 'Results That Drive Profitable Freight Contracts',
    aggregateStats: [],
    faqs: [
      {
        question: 'How does GEO help logistics companies reach shippers?',
        answer:
          "GEO (Generative Engine Optimization) ensures AI assistants recommend your company when shippers ask for freight solutions. When someone asks ChatGPT 'Who handles refrigerated freight from Florida to Texas?' or 'Best logistics companies for e-commerce fulfillment,' GEO optimization determines whether you appear in that recommendation. As more shippers use AI to research logistics partners, being optimized for these queries is becoming essential.",
      },
      {
        question: 'How do we compete with load boards like DAT and Freightos?',
        answer:
          "Load boards are transactional platforms, not service providers. You compete by targeting different parts of the buyer journey. Focus on educational content ('how to choose a freight broker'), service-specific searches ('refrigerated freight Florida to Texas'), and building direct relationships through content marketing. Many shippers prefer working directly with logistics providers rather than bidding on load boards.",
      },
      {
        question: 'How do you handle SEO for hundreds of shipping lanes?',
        answer:
          "We use scalable, template-based approaches for lane-specific pages while ensuring each page has unique, valuable content. We prioritize your highest-volume and highest-margin lanes first, then expand systematically. The strategy includes programmatic SEO for lane combinations, location-specific schema markup, and comprehensive resources for each lane. It's a balance of scale and quality.",
      },
      {
        question: 'Can SEO help us reduce dependence on freight brokers?',
        answer:
          "Absolutely. That's the primary goal for many logistics clients - building a direct shipper customer base rather than relying on brokered freight. SEO generates direct shipper relationships by capturing searches when they need freight services. Over 12-24 months, you can build a sustainable pipeline of direct customers who find you through search rather than brokers.",
      },
    ],
    ctaHeadline: 'Move More Freight',
    ctaDescription:
      "Let's generate qualified shipping leads and grow your logistics business with proven GEO and SEO strategies.",
  },

  // 5. AUTOMOTIVE
  {
    id: 'automotive',
    name: 'Automotive',
    slug: 'automotive',
    description:
      'Drive qualified leads for automotive businesses. Excel in local and specialty vehicle searches with proven GEO, SEO, and PPL.',
    heroHeadline: 'Automotive SEO That Moves More Inventory',
    heroSubheadline:
      'Fill your lot and drive revenue with GEO and SEO built for automotive businesses. From classic cars to luxury rentals.',
    challenges: [
      {
        title: 'Competing with National Dealer Groups',
        description:
          'Large dealer networks and automotive marketplaces dominate online visibility with massive budgets and established authority.',
        icon: 'Building06Icon',
      },
      {
        title: 'Inventory Turnover and Listings',
        description:
          'Vehicle inventory changes constantly. Maintaining visibility for hundreds of listings while vehicles come and go is challenging.',
        icon: 'RecycleIcon',
      },
      {
        title: 'Lead Quality vs. Quantity',
        description:
          'Generating traffic is easy. Attracting qualified buyers ready to purchase rather than tire-kickers is the real challenge.',
        icon: 'UserCheck01Icon',
      },
      {
        title: 'Local Market Competition',
        description:
          'Multiple dealers compete for the same buyers. Standing out across search, AI recommendations, and lead channels requires strategic differentiation.',
        icon: 'Location01Icon',
      },
    ],
    approach: [
      {
        title: 'Analyze',
        description:
          'Audit your visibility across search engines, AI assistants, and lead channels. Identify high-value opportunities for qualified buyers.',
        icon: 'Search01Icon',
      },
      {
        title: 'Optimize',
        description:
          'Improve vehicle listings and local presence for visibility across traditional search and AI recommendations.',
        icon: 'Settings01Icon',
      },
      {
        title: 'Attract',
        description:
          'Build visibility through SEO, GEO optimization, review generation, and targeted lead generation campaigns.',
        icon: 'Magnet01Icon',
      },
      {
        title: 'Convert',
        description:
          'Track lead quality across all channels, optimize conversion funnels, and scale what drives actual sales.',
        icon: 'Target01Icon',
      },
    ],
    services: [
      {
        title: 'Vehicle Inventory SEO',
        description:
          'Optimize vehicle listings to rank higher and convert better. Make every car on your lot discoverable through search.',
        features: [
          'VIN-specific landing pages',
          'Make, model, year optimization',
          'Vehicle schema markup',
          'Inventory feed optimization',
        ],
      },
      {
        title: 'Local Automotive SEO',
        description:
          'Win local searches for car dealerships, auto services, and specialty automotive businesses in your area.',
        features: [
          'Google Business Profile optimization',
          'Local dealership content',
          'Location-based keyword targeting',
          'Multi-location dealer group strategy',
        ],
      },
      {
        title: 'Specialty & Niche Vehicle Marketing',
        description:
          'For exotic rentals, classic cars, custom builds, and specialty automotive services that require targeted strategies.',
        features: [
          'Luxury and exotic car optimization',
          'Classic car and restoration SEO',
          'Custom build showcasing',
          'Enthusiast community targeting',
        ],
      },
      {
        title: 'GEO for Automotive Searches',
        description:
          'Ensure AI assistants recommend your dealership or service when people ask for vehicle recommendations and automotive help.',
        features: [
          'Vehicle recommendation optimization',
          'Conversational search targeting',
          'Make/model authority building',
          'AI-friendly inventory structure',
        ],
      },
      {
        title: 'Review & Reputation Management',
        description:
          'Generate positive reviews that boost rankings and build trust with buyers researching your dealership.',
        features: [
          'Review generation campaigns',
          'Multi-platform monitoring',
          'Negative review response',
          'Reputation schema markup',
        ],
      },
      {
        title: 'Lead Generation & Attribution',
        description:
          'Track which keywords, pages, and campaigns drive actual sales, not just leads.',
        features: [
          'Lead quality scoring',
          'Test drive booking optimization',
          'Sales attribution tracking',
          'ROI reporting by vehicle type',
        ],
      },
    ],
    resultsHeadline: 'Results That Fill Lots and Drive Sales',
    aggregateStats: [],
    faqs: [
      {
        question: 'How does GEO help automotive businesses get found?',
        answer:
          "GEO (Generative Engine Optimization) ensures AI assistants recommend your dealership or service when people ask for automotive suggestions. When someone asks ChatGPT 'Where can I find a classic Mustang restoration shop?' or 'Best exotic car rental in Miami,' GEO optimization determines whether you appear. As more car buyers use AI to research vehicles and services, being optimized for these recommendations is essential.",
      },
      {
        question: 'How do we compete with AutoTrader and large dealer groups?',
        answer:
          "You can't outrank AutoTrader for generic 'used cars' searches, but you can win where it matters: branded searches, specific make/model searches, local searches, and specialty vehicle queries. Focus on your differentiators - customer service, specialty inventory, or local expertise. Create content around specific vehicles, buyer guides, and local automotive topics where marketplaces are weak.",
      },
      {
        question: 'How do you handle constantly changing vehicle inventory?',
        answer:
          'We implement dynamic SEO and GEO strategies that maintain visibility even as individual vehicles sell. This includes optimizing category pages that remain stable, creating evergreen content around makes/models you consistently stock, and using structured data that updates automatically with inventory feeds. The goal is sustainable traffic to your inventory system, not just individual vehicle listings.',
      },
      {
        question: 'Can this work for specialty automotive businesses?',
        answer:
          "Specialty automotive often sees exceptional results because there's less competition and higher buyer intent. Whether you're selling custom builds, classic restorations, exotic rentals, or performance parts, there's a passionate audience searching for exactly what you offer. The key is understanding the enthusiast mindset and building authority in your specific niche through SEO, GEO, and targeted lead generation.",
      },
    ],
    ctaHeadline: 'Sell More Vehicles',
    ctaDescription:
      "Let's drive qualified leads and grow your automotive business with proven GEO and SEO strategies.",
  },

  // 6. CONSTRUCTION & CONTRACTORS
  {
    id: 'construction',
    name: 'Construction & Contractors',
    slug: 'construction',
    description:
      'Generate qualified project leads for construction and contracting businesses. Win local searches and reach property owners who need you.',
    heroHeadline: 'Win More Projects with Construction SEO',
    heroSubheadline:
      'Fill your pipeline with qualified project leads through GEO and SEO. Get found by property owners searching for trusted contractors.',
    challenges: [
      {
        title: 'Intense Local Competition',
        description:
          'Dozens of contractors compete for the same property owners. Standing out across search, AI, and lead channels requires more than a website.',
        icon: 'UserGroupIcon',
      },
      {
        title: 'Lead Quality Issues',
        description:
          'Generating leads is easy. Attracting serious property owners with real projects and budgets is the challenge.',
        icon: 'Target01Icon',
      },
      {
        title: 'Seasonal Demand Fluctuations',
        description:
          'Construction demand varies by season. Maintaining visibility and pipeline during slow periods requires year-round strategy.',
        icon: 'CloudIcon',
      },
      {
        title: 'Review and Reputation Challenges',
        description:
          'Online reviews heavily influence contractor selection. Reviews impact both search rankings and AI recommendations.',
        icon: 'StarIcon',
      },
    ],
    approach: [
      {
        title: 'Research',
        description:
          'Analyze your visibility across search, AI, and lead channels. Identify high-value project types and service area opportunities.',
        icon: 'Search01Icon',
      },
      {
        title: 'Optimize',
        description:
          'Improve your Google Business Profile and service pages for visibility across search engines and AI recommendations.',
        icon: 'Settings01Icon',
      },
      {
        title: 'Build Trust',
        description:
          'Generate reviews, create portfolio content, and build credibility signals that boost rankings and AI recommendations.',
        icon: 'Shield01Icon',
      },
      {
        title: 'Convert',
        description:
          'Track lead quality across SEO, GEO, and PPL channels. Optimize quote forms and scale what drives profitable projects.',
        icon: 'Tick02Icon',
      },
    ],
    services: [
      {
        title: 'Local Contractor SEO',
        description:
          'Win local searches for your services in your service area. Get found by property owners searching nearby.',
        features: [
          'Google Business Profile optimization',
          'Local citation building and cleanup',
          'Service area page creation',
          'Near me search optimization',
        ],
      },
      {
        title: 'Service-Specific Optimization',
        description:
          'Rank for every service you offer, from general contracting to specialized trades.',
        features: [
          'Service page optimization',
          'Trade-specific keyword targeting',
          'Project type content',
          'Specialty service differentiation',
        ],
      },
      {
        title: 'Portfolio & Project Showcase',
        description:
          'Display your best work in ways that rank in search and convert visitors into leads.',
        features: [
          'Project gallery optimization',
          'Before/after content',
          'Case study creation',
          'Video content optimization',
        ],
      },
      {
        title: 'Review Generation & Management',
        description:
          'Turn happy customers into 5-star reviews that boost rankings and win more projects.',
        features: [
          'Post-project review campaigns',
          'Multi-platform review monitoring',
          'Review response strategy',
          'Reputation schema markup',
        ],
      },
      {
        title: 'GEO for Contractor Searches',
        description:
          'Ensure AI assistants recommend your company when property owners ask for contractor recommendations.',
        features: [
          'Conversational contractor query targeting',
          'Service capability optimization',
          'Local authority signals',
          'AI-friendly content structure',
        ],
      },
      {
        title: 'Lead Quality Optimization',
        description:
          'Filter out tire-kickers and attract property owners with real projects and budgets.',
        features: [
          'Qualification form optimization',
          'Project type targeting',
          'Budget qualifier implementation',
          'Lead scoring and tracking',
        ],
      },
    ],
    resultsHeadline: 'Results That Fill Your Project Pipeline',
    aggregateStats: [],
    faqs: [
      {
        question: 'How does GEO help contractors get found by property owners?',
        answer:
          "GEO (Generative Engine Optimization) ensures AI assistants recommend your company when property owners ask for contractor suggestions. When someone asks ChatGPT 'Who's the best roofer in Austin?' or 'Recommend a kitchen remodeler near me,' GEO optimization determines whether you appear. As more homeowners use AI to find contractors, being optimized for these recommendations gives you an edge over competitors.",
      },
      {
        question: 'How long does local contractor SEO take?',
        answer:
          "Local SEO moves faster than national SEO because you're competing in a specific geographic area. You'll see initial improvements within 30-45 days from Google Business Profile optimization and citation cleanup. Significant lead increases typically appear around month 3-6 as content gains traction. Contractors who commit to 12+ months build sustainable pipelines with better lead quality.",
      },
      {
        question: 'How important are reviews for contractor visibility?',
        answer:
          'Critical. Reviews directly impact local search rankings and heavily influence whether property owners contact you. We implement systematic review generation - requesting reviews from happy customers immediately after project completion. We also monitor and respond to all reviews professionally. Strong reviews boost both your SEO rankings and your GEO visibility in AI recommendations.',
      },
      {
        question: 'Can you help if we serve multiple trade specialties?',
        answer:
          "Yes. We create service-specific content and optimization for each offering, ensuring you rank for all your capabilities across SEO and GEO. The strategy balances broad 'general contractor' visibility with specific service rankings. We often find specialized services drive higher-quality leads, so we identify and prioritize your most profitable service areas for both search and lead generation.",
      },
    ],
    ctaHeadline: 'Book More Projects',
    ctaDescription:
      "Let's generate qualified project leads and grow your construction business with proven GEO and SEO strategies.",
  },

  // 7. AGRICULTURE & EQUIPMENT
  {
    id: 'agriculture',
    name: 'Agriculture & Equipment',
    slug: 'agriculture',
    description:
      'Drive qualified leads for agricultural equipment dealers and agribusinesses. Reach farmers and ranchers searching for machinery and solutions.',
    heroHeadline: 'Sell More Equipment with Agriculture SEO',
    heroSubheadline:
      'Reach farmers researching equipment purchases. Generate qualified leads for tractors, implements, and agricultural services with GEO and SEO.',
    challenges: [
      {
        title: 'Competing with National Brands',
        description:
          'Manufacturers like John Deere and Case IH dominate online visibility. Independent dealers need targeted strategies to reach local farmers.',
        icon: 'Building06Icon',
      },
      {
        title: 'Complex Product Catalogs',
        description:
          'Hundreds of equipment models, implements, and parts create visibility challenges. Organizing and optimizing massive inventories is complex.',
        icon: 'PackageSearchIcon',
      },
      {
        title: 'Geographic Coverage',
        description:
          'Serving multiple locations across rural areas requires visibility strategies for dispersed markets with varying equipment needs.',
        icon: 'Location01Icon',
      },
      {
        title: 'Long Research Cycles',
        description:
          'Farmers research equipment for months before purchasing. Your visibility strategy must support the entire buyer journey.',
        icon: 'Clock01Icon',
      },
    ],
    approach: [
      {
        title: 'Research',
        description:
          'Understand farmer research patterns and identify opportunities across search, AI recommendations, and direct lead generation.',
        icon: 'Search01Icon',
      },
      {
        title: 'Optimize',
        description:
          'Improve equipment pages and location content for visibility across search engines and AI assistants.',
        icon: 'Settings01Icon',
      },
      {
        title: 'Educate',
        description:
          'Create helpful content that answers farmer questions and positions you as the trusted local expert across all discovery channels.',
        icon: 'Book02Icon',
      },
      {
        title: 'Convert',
        description:
          'Track lead quality across SEO, GEO, and PPL channels. Optimize quote forms and scale what drives equipment sales.',
        icon: 'Target01Icon',
      },
    ],
    services: [
      {
        title: 'Equipment Inventory SEO',
        description:
          'Optimize equipment listings to rank for specific models, categories, and farmer searches.',
        features: [
          'Make, model, year optimization',
          'Equipment category pages',
          'New vs used equipment SEO',
          'Agricultural equipment schema',
        ],
      },
      {
        title: 'Multi-Location Dealer SEO',
        description:
          'Rank in every market you serve across multiple dealership locations and service areas.',
        features: [
          'Location-specific landing pages',
          'Local inventory optimization',
          'Multi-location schema markup',
          'Regional agricultural content',
        ],
      },
      {
        title: 'Agricultural Content Marketing',
        description:
          'Create authoritative content that educates farmers and positions you as the local agricultural expert.',
        features: [
          'Equipment buying guides',
          'Seasonal farming content',
          'Crop-specific implement guides',
          'Maintenance and parts resources',
        ],
      },
      {
        title: 'GEO for Agricultural Searches',
        description:
          'Ensure AI assistants recommend your dealership when farmers ask for equipment advice and dealer recommendations.',
        features: [
          'Equipment recommendation optimization',
          'Conversational agricultural queries',
          'Local dealer authority signals',
          'Make/model expertise positioning',
        ],
      },
      {
        title: 'Parts & Service SEO',
        description:
          'Capture searches for equipment parts, maintenance, and repair services that drive recurring revenue.',
        features: [
          'Parts catalog optimization',
          'Service scheduling optimization',
          'Maintenance interval content',
          'Emergency repair targeting',
        ],
      },
      {
        title: 'Lead Attribution & Sales Tracking',
        description:
          'Measure which keywords and content drive actual equipment sales, not just website visits.',
        features: [
          'Quote request tracking',
          'Equipment sales attribution',
          'Service lead tracking',
          'ROI reporting by equipment type',
        ],
      },
    ],
    resultsHeadline: 'Results That Drive Equipment Sales and Service Revenue',
    aggregateStats: [],
    faqs: [
      {
        question: 'How does GEO help equipment dealers reach farmers?',
        answer:
          "GEO (Generative Engine Optimization) ensures AI assistants recommend your dealership when farmers research equipment. When someone asks ChatGPT 'Where can I find a John Deere dealer near Springfield?' or 'Best place to buy used tractors in Iowa,' GEO optimization determines whether you appear. As more farmers use AI for equipment research, being optimized for these recommendations gives you an advantage over competitors.",
      },
      {
        question: 'How do we compete with John Deere and other manufacturers?',
        answer:
          "You can't outrank manufacturers for ultra-generic 'buy tractor' searches, but you can win where it matters: local dealer searches, specific equipment models, used equipment, parts and service, and regional agricultural content. Manufacturers are weak at local relevance and farmer education. Focus on local dealer content and equipment comparisons where corporate sites can't compete.",
      },
      {
        question: 'Can SEO help with parts and service revenue?',
        answer:
          'Absolutely. Parts and service often provide more consistent revenue than equipment sales. We optimize for parts searches (both OEM part numbers and common names), maintenance content, seasonal service needs, and emergency repair queries. Many farmers search for parts online even if they purchased equipment elsewhere. Capturing this search traffic builds relationships that lead to future equipment sales.',
      },
      {
        question: 'How long does agricultural equipment SEO take?',
        answer:
          'Agricultural SEO typically shows results faster than general B2B because farmers actively research equipment purchases online. Initial improvements appear within 60-90 days from technical fixes and inventory optimization. Significant lead increases typically arrive around month 4-6. The long research cycles mean early investments pay dividends for months - a farmer who discovers you in January may purchase in March.',
      },
    ],
    ctaHeadline: 'Grow Your Customer Base',
    ctaDescription:
      "Let's drive qualified leads and grow your agricultural business with proven GEO and SEO strategies.",
  },

  // 8. TECHNOLOGY & SAAS
  {
    id: 'technology',
    name: 'Technology & SaaS',
    slug: 'technology',
    description:
      'Drive qualified leads for technology companies and SaaS products. Command competitive tech searches and reach decision-makers.',
    heroHeadline: 'SaaS & Tech SEO That Drives Signups',
    heroSubheadline:
      'Generate qualified enterprise leads and product signups with GEO and SEO built for technology companies. Reach decision-makers searching for solutions.',
    challenges: [
      {
        title: 'Highly Competitive Markets',
        description:
          'Tech and SaaS markets are extremely competitive. Breaking through requires strategic visibility across search, AI, and direct channels.',
        icon: 'ChartIncreaseIcon',
      },
      {
        title: 'Complex Product Positioning',
        description:
          'Explaining technical products in ways that resonate with both search engines and AI assistants requires expertise.',
        icon: 'CodeIcon',
      },
      {
        title: 'Long B2B Sales Cycles',
        description:
          'Enterprise tech sales involve multiple stakeholders and long evaluation periods. Your visibility strategy must support the entire journey.',
        icon: 'Clock01Icon',
      },
      {
        title: 'Evolving Discovery Channels',
        description:
          'Buyers increasingly use AI assistants to research software. You need visibility across traditional search, AI recommendations, and direct outreach.',
        icon: 'SparklesIcon',
      },
    ],
    approach: [
      {
        title: 'Research',
        description:
          'Analyze buyer personas, map the customer journey, and identify opportunities across search, AI recommendations, and direct lead generation.',
        icon: 'Search01Icon',
      },
      {
        title: 'Optimize',
        description:
          'Improve product pages and content structure for visibility across search engines and AI assistants.',
        icon: 'Settings01Icon',
      },
      {
        title: 'Educate',
        description:
          'Create authoritative content that positions your product as the solution across all discovery channels.',
        icon: 'Book02Icon',
      },
      {
        title: 'Convert',
        description:
          'Track demo and signup quality across SEO, GEO, and PPL channels. Optimize funnels and scale what drives customers.',
        icon: 'Target01Icon',
      },
    ],
    services: [
      {
        title: 'SaaS Product Page SEO',
        description:
          'Optimize product pages, feature pages, and use case content to rank for high-intent software searches.',
        features: [
          'Feature and benefit optimization',
          'Use case landing pages',
          'Integration and compatibility SEO',
          'SaaS product schema markup',
        ],
      },
      {
        title: 'Technical Content Marketing',
        description:
          'Create authoritative content that educates buyers, demonstrates expertise, and captures traffic at every funnel stage.',
        features: [
          'Comparison and alternative pages',
          'How-to and tutorial content',
          'Industry trend analysis',
          'Technical documentation optimization',
        ],
      },
      {
        title: 'Competitive Alternative SEO',
        description:
          'Capture searches from customers evaluating competitors and position your solution as the better alternative.',
        features: [
          'Competitor comparison pages',
          '[Competitor] alternative targeting',
          'Feature gap content',
          'Migration guide creation',
        ],
      },
      {
        title: 'GEO for Technology Searches',
        description:
          'Ensure AI assistants recommend your product when people ask ChatGPT, Perplexity, or voice assistants for software suggestions.',
        features: [
          'Conversational product query targeting',
          'AI-friendly feature descriptions',
          'Technical authority signals',
          'Entity optimization for AI understanding',
        ],
      },
      {
        title: 'B2B Tech Link Building',
        description:
          'Build authority through industry publications, tech blogs, SaaS directories, and strategic partnerships.',
        features: [
          'Tech publication features',
          'SaaS review site optimization',
          'Industry influencer outreach',
          'Partnership co-marketing',
        ],
      },
      {
        title: 'Conversion & Signup Optimization',
        description:
          'Turn search traffic into qualified demos, trials, and paying customers with optimized conversion funnels.',
        features: [
          'Demo request form optimization',
          'Free trial funnel improvement',
          'Signup attribution tracking',
          'Product-led growth SEO',
        ],
      },
    ],
    resultsHeadline: 'Results That Drive Product Growth and Enterprise Deals',
    aggregateStats: [],
    faqs: [
      {
        question: 'Why is GEO critical for SaaS and technology companies?',
        answer:
          "More tech buyers are asking ChatGPT, Perplexity, and AI assistants for software recommendations instead of Googling comparison lists. If your product doesn't appear in AI-generated recommendations, you're invisible to a growing segment of buyers. GEO optimization ensures AI assistants understand your product, recommend it for relevant queries, and cite your content. Most SaaS companies haven't optimized for GEO yet, so early movers have a significant advantage.",
      },
      {
        question: 'How do we compete in expensive, competitive SaaS markets?',
        answer:
          'You compete by being smarter, not just spending more. Focus on long-tail keywords, alternative and comparison pages (capturing competitor traffic), use case content for specific industries or roles, and educational content for problem-aware searches. Well-researched, helpful content often outranks bigger competitors. Combine SEO with GEO to capture buyers across both traditional search and AI recommendations.',
      },
      {
        question: 'How long does SaaS SEO take to generate qualified leads?',
        answer:
          'SaaS SEO typically takes 4-8 months to generate meaningful lead volume. Tech markets are competitive, requiring sustained effort to build authority. However, quick wins like alternative pages and comparison content can drive leads within 60-90 days. SaaS SEO is a compounding investment - companies that commit to 18-24 months often see organic search become their primary enterprise lead source.',
      },
      {
        question: 'Should we focus on product keywords or educational content?',
        answer:
          'Both, strategically. Product keywords drive demos and trials but are highly competitive. Educational content is easier to rank for and captures buyers early in their research. The optimal strategy: create educational content to build authority, then use internal linking to guide visitors to product pages. This builds authority for both SEO and GEO while converting ready buyers.',
      },
    ],
    ctaHeadline: 'Reach More Decision-Makers',
    ctaDescription:
      "Let's accelerate your SaaS growth and reach decision-makers with proven GEO and SEO strategies.",
  },

  // 9. HEALTH & WELLNESS
  {
    id: 'health-wellness',
    name: 'Health & Wellness',
    slug: 'health-wellness',
    description:
      'Drive qualified clients for health and wellness businesses. Lead local searches and reach people seeking health solutions.',
    heroHeadline: 'Health & Wellness SEO to Attract More Patients',
    heroSubheadline:
      'Fill your calendar with qualified clients through GEO and SEO. Get found by people ready to invest in their wellbeing.',
    challenges: [
      {
        title: 'Strict Content Standards',
        description:
          'Google and AI assistants apply strict standards to health content. Visibility requires exceptional expertise, authority, and trustworthiness.',
        icon: 'Shield01Icon',
      },
      {
        title: 'Local Service Competition',
        description:
          'Multiple wellness providers compete for the same clients. Differentiating across search, AI, and lead channels is critical.',
        icon: 'UserGroupIcon',
      },
      {
        title: 'Building Trust Online',
        description:
          'Health and wellness require high trust. Converting interest into clients means demonstrating credibility and expertise.',
        icon: 'FavouriteIcon',
      },
      {
        title: 'Compliance and Regulations',
        description:
          'Healthcare marketing regulations limit claims you can make. Balancing effective visibility with compliance is challenging.',
        icon: 'File01Icon',
      },
    ],
    approach: [
      {
        title: 'Establish Authority',
        description:
          'Build E-E-A-T signals that search engines and AI assistants require for health content recommendations.',
        icon: 'Award01Icon',
      },
      {
        title: 'Optimize Locally',
        description:
          'Build local visibility through Google Business Profile, location content, and AI recommendation optimization.',
        icon: 'Location01Icon',
      },
      {
        title: 'Educate & Engage',
        description:
          'Create helpful, compliant content that builds trust and positions you as the expert across all discovery channels.',
        icon: 'Book02Icon',
      },
      {
        title: 'Convert',
        description:
          'Track lead quality across SEO, GEO, and PPL channels. Optimize booking funnels and scale what fills your calendar.',
        icon: 'Calendar01Icon',
      },
    ],
    services: [
      {
        title: 'Local Health & Wellness SEO',
        description:
          'Lead local searches for your services. Get found by people nearby searching for wellness solutions.',
        features: [
          'Google Business Profile optimization',
          'Local citation building',
          'Service area targeting',
          'Near me search optimization',
        ],
      },
      {
        title: 'E-E-A-T Authority Building',
        description:
          'Build the expertise, experience, authoritativeness, and trustworthiness signals Google requires for health content.',
        features: [
          'Provider credential highlighting',
          'Professional certification display',
          'Medical review implementation',
          'Trust signal optimization',
        ],
      },
      {
        title: 'Compliant Content Marketing',
        description:
          'Create educational content that ranks, converts, and complies with healthcare marketing regulations.',
        features: [
          'Condition and treatment education',
          'FAQ and Q&A content',
          'Client success stories (compliant)',
          'Wellness tips and resources',
        ],
      },
      {
        title: 'GEO for Health Searches',
        description:
          'Ensure AI assistants recommend your practice when people ask for health and wellness provider suggestions.',
        features: [
          'Conversational health query targeting',
          'Service recommendation optimization',
          'Provider authority signals',
          'Local wellness expertise positioning',
        ],
      },
      {
        title: 'Review & Reputation Management',
        description:
          'Generate authentic reviews that boost rankings and build trust with prospective clients.',
        features: [
          'Post-service review requests',
          'Multi-platform monitoring',
          'Compliant review response',
          'Reputation schema markup',
        ],
      },
      {
        title: 'Appointment Conversion Optimization',
        description:
          'Turn searchers into booked appointments with optimized scheduling and conversion funnels.',
        features: [
          'Online booking optimization',
          'Appointment funnel improvement',
          'New patient forms streamlining',
          'Conversion tracking and analysis',
        ],
      },
    ],
    resultsHeadline: 'Results That Fill Your Calendar and Grow Your Practice',
    aggregateStats: [],
    faqs: [
      {
        question: 'How does GEO help health and wellness practices get found?',
        answer:
          "GEO (Generative Engine Optimization) ensures AI assistants recommend your practice when people ask for health provider suggestions. When someone asks ChatGPT 'Best chiropractor near me' or 'Recommend a wellness clinic in Denver,' GEO optimization determines whether you appear. As more people use AI for health research, being optimized for these recommendations helps you reach clients your competitors miss.",
      },
      {
        question:
          "How do we rank with Google's strict health content standards?",
        answer:
          'Google applies YMYL (Your Money Your Life) standards to health content, requiring strong E-E-A-T signals. We build authority through comprehensive provider profiles showcasing credentials, content reviewed by qualified professionals, citation of reputable sources, and authentic client testimonials. Health businesses that invest in proper authority signals can absolutely lead local searches.',
      },
      {
        question:
          'How important are reviews for health and wellness visibility?',
        answer:
          'Critical. Reviews are a major ranking factor for local SEO, a key signal for GEO recommendations, and the primary trust factor potential clients use to evaluate providers. We implement systematic review generation and professional response strategies. Practices with strong reviews typically outrank competitors across both traditional search and AI recommendations.',
      },
      {
        question: 'What about HIPAA and healthcare compliance?',
        answer:
          "All our health and wellness strategies are built with compliance in mind. This means proper authorization for testimonials, compliant review request processes, secure form handling, and proper consent mechanisms for marketing. We work within healthcare privacy regulations while maximizing visibility across SEO, GEO, and lead generation. Compliance and effective marketing aren't mutually exclusive.",
      },
    ],
    ctaHeadline: 'Attract More Clients',
    ctaDescription:
      "Let's attract qualified clients and grow your wellness business with proven GEO and SEO strategies.",
  },

  // 10. FINANCE & INSURANCE
  {
    id: 'finance-insurance',
    name: 'Finance & Insurance',
    slug: 'finance-insurance',
    description:
      'Drive qualified leads for financial services and insurance providers. Capture high-value searches and reach clients seeking financial guidance.',
    heroHeadline: 'Finance & Insurance SEO for Client Growth',
    heroSubheadline:
      'Generate qualified leads for financial advisors, insurance agents, and financial services firms through GEO, SEO, and PPL. Reach clients actively searching for guidance.',
    challenges: [
      {
        title: 'Strict Content Standards',
        description:
          'Google and AI assistants apply strict standards to financial content. Visibility requires exceptional expertise, authority, and trustworthiness.',
        icon: 'Shield01Icon',
      },
      {
        title: 'Regulatory Compliance',
        description:
          'SEC, FINRA, and state insurance regulations limit marketing claims. Balancing effective visibility with compliance is critical.',
        icon: 'JusticeScale01Icon',
      },
      {
        title: 'Competing with National Firms',
        description:
          'Large banks and national RIAs dominate online visibility. Independent advisors need targeted strategies to reach local clients.',
        icon: 'Building06Icon',
      },
      {
        title: 'Trust and Credibility',
        description:
          'Financial decisions require high trust. Converting interest into clients means demonstrating credentials and fiduciary commitment.',
        icon: 'CheckmarkBadge01Icon',
      },
    ],
    approach: [
      {
        title: 'Establish Authority',
        description:
          'Build E-E-A-T signals that search engines and AI assistants require for financial content recommendations.',
        icon: 'Award01Icon',
      },
      {
        title: 'Optimize Locally',
        description:
          'Build local visibility through Google Business Profile, location content, and AI recommendation optimization.',
        icon: 'Location01Icon',
      },
      {
        title: 'Educate',
        description:
          'Create compliant educational content that builds trust and positions you as the expert across all discovery channels.',
        icon: 'Book02Icon',
      },
      {
        title: 'Convert',
        description:
          'Track lead quality across SEO, GEO, and PPL channels. Optimize consultation booking and scale what drives clients.',
        icon: 'Target01Icon',
      },
    ],
    services: [
      {
        title: 'Local Financial Services SEO',
        description:
          'Capture local searches for financial advisors, insurance agents, and wealth managers in your service area.',
        features: [
          'Google Business Profile optimization',
          'Local citation building',
          'Service area targeting',
          'Near me search optimization',
        ],
      },
      {
        title: 'E-E-A-T Authority Building',
        description:
          'Build the expertise and trust signals Google requires for financial content to rank.',
        features: [
          'Credential and certification display',
          'Fiduciary and regulatory compliance',
          'Professional bio optimization',
          'Trust signal implementation',
        ],
      },
      {
        title: 'Compliant Content Marketing',
        description:
          'Create educational financial content that ranks, converts, and meets regulatory requirements.',
        features: [
          'Retirement planning guides',
          'Insurance comparison content',
          'Tax strategy resources',
          'Investment education content',
        ],
      },
      {
        title: 'GEO for Financial Searches',
        description:
          'Ensure AI assistants recommend your firm when people ask for financial advisor or insurance agent suggestions.',
        features: [
          'Conversational financial query targeting',
          'Service recommendation optimization',
          'Advisor authority signals',
          'Local financial expertise positioning',
        ],
      },
      {
        title: 'Review & Reputation Management',
        description:
          'Generate authentic reviews that boost rankings and build trust with prospective clients.',
        features: [
          'Client review generation campaigns',
          'Multi-platform monitoring',
          'Compliant review response',
          'Reputation schema markup',
        ],
      },
      {
        title: 'Consultation Conversion Optimization',
        description:
          'Turn searchers into booked consultations with optimized scheduling and lead capture.',
        features: [
          'Consultation booking optimization',
          'Lead qualification forms',
          'Follow-up sequence optimization',
          'Conversion tracking and analysis',
        ],
      },
      {
        title: 'Pay Per Lead Generation',
        description:
          'Pay-per-lead campaigns that deliver clients ready to invest. No retainers, pay only for results.',
        features: [
          'Pay only for qualified client leads',
          'Real-time lead delivery',
          'Exclusive leads (not shared)',
          'Scalable AUM growth',
        ],
      },
    ],
    resultsHeadline: 'Results That Grow Your Client Base and AUM',
    aggregateStats: [],
    faqs: [
      {
        question: 'How does GEO help financial advisors get found?',
        answer:
          "GEO (Generative Engine Optimization) ensures AI assistants recommend your firm when people ask for financial advisor suggestions. When someone asks ChatGPT 'Best financial advisor in Phoenix' or 'Recommend a fee-only wealth manager,' GEO optimization determines whether you appear. As more people use AI for financial research, being optimized for these recommendations gives you an edge over competitors who only focus on traditional search.",
      },
      {
        question: 'What is Pay Per Lead for financial services?',
        answer:
          'PPL for financial services delivers clients actively seeking advisory relationships. You only pay for verified leads - consultation requests from qualified prospects - not for website traffic or impressions. Leads are exclusive to you and delivered in real-time. This model is ideal for financial advisors because each new client relationship represents significant lifetime value.',
      },
      {
        question:
          "How do we rank with Google's strict financial content standards?",
        answer:
          'Google applies YMYL (Your Money Your Life) standards to financial content, requiring strong E-E-A-T signals. We build authority through comprehensive advisor profiles showcasing credentials (CFP, CFA, Series licenses), regulatory compliance documentation, and authentic client testimonials. Financial advisors who invest in proper authority signals can lead local searches for wealth management and financial planning.',
      },
      {
        question: 'How do we balance marketing with SEC/FINRA compliance?',
        answer:
          'All our financial services strategies are built with compliance in mind. We focus on educational content rather than performance claims, handle testimonials according to ADV disclosure requirements, include necessary disclaimers, and avoid guarantees. We work within your compliance framework while maximizing visibility across SEO, GEO, and lead generation.',
      },
      {
        question: 'How do we compete with large banks and national RIAs?',
        answer:
          'National firms have brand recognition but are weak where independent advisors excel: personalized service, local expertise, fiduciary commitment, and specialized planning. Focus on your differentiators through targeted SEO content and GEO optimization. Create content around specific planning scenarios where you have expertise. Many clients actively prefer independent advisors and search specifically for alternatives to large firms.',
      },
    ],
    ctaHeadline: 'Acquire More Clients',
    ctaDescription:
      "Let's generate qualified client leads with proven GEO, SEO, and PPL strategies built for financial advisors and insurance professionals.",
  },

  // 11. LAW FIRMS & LEGAL
  {
    id: 'legal',
    name: 'Law Firms & Legal',
    slug: 'legal',
    description:
      'Drive qualified client inquiries for law firms. Own local legal searches and reach potential clients actively seeking legal representation.',
    heroHeadline: 'Law Firm SEO That Builds Your Caseload',
    heroSubheadline:
      'Fill your caseload with qualified client inquiries through GEO, SEO, and PPL. Get found by people searching for legal representation.',
    challenges: [
      {
        title: 'Strict Content Standards',
        description:
          'Google and AI assistants apply strict standards to legal content. Visibility requires demonstrating expertise and credentials.',
        icon: 'Shield01Icon',
      },
      {
        title: 'Extreme Local Competition',
        description:
          'Personal injury, family law, and criminal defense are intensely competitive. Standing out across search and AI requires strategic positioning.',
        icon: 'UserGroupIcon',
      },
      {
        title: 'High Customer Acquisition Costs',
        description:
          'Relying solely on paid ads is expensive and unsustainable. You need diversified channels including organic visibility and direct lead generation.',
        icon: 'DollarCircleIcon',
      },
      {
        title: 'Bar Association Regulations',
        description:
          'State bar advertising rules limit claims and require disclaimers. Balancing effective visibility with compliance is essential.',
        icon: 'JusticeScale01Icon',
      },
    ],
    approach: [
      {
        title: 'Establish Authority',
        description:
          'Build E-E-A-T signals that search engines and AI assistants require for legal content recommendations.',
        icon: 'Award01Icon',
      },
      {
        title: 'Own Locally',
        description:
          'Build local visibility through Google Business Profile, practice area content, and AI recommendation optimization.',
        icon: 'Location01Icon',
      },
      {
        title: 'Educate',
        description:
          'Create compliant legal content that builds trust and positions you as the expert across all discovery channels.',
        icon: 'Book02Icon',
      },
      {
        title: 'Convert',
        description:
          'Track lead quality across SEO, GEO, and PPL channels. Optimize intake forms and scale what generates signed retainers.',
        icon: 'SignatureIcon',
      },
    ],
    services: [
      {
        title: 'Local Law Firm SEO',
        description:
          'Own local searches for attorneys in your practice areas and service area.',
        features: [
          'Google Business Profile optimization',
          'Local citation building',
          'Practice area landing pages',
          'Multi-location firm strategy',
        ],
      },
      {
        title: 'Practice Area Content',
        description:
          'Create comprehensive content for each practice area that ranks and converts.',
        features: [
          'Practice area pillar pages',
          'Legal FAQ content',
          'Process and procedure guides',
          'State-specific legal information',
        ],
      },
      {
        title: 'Attorney Authority Building',
        description:
          'Build the expertise and trust signals Google requires for legal content.',
        features: [
          'Attorney profile optimization',
          'Case results showcasing',
          'Bar and credential display',
          'Speaking and publication features',
        ],
      },
      {
        title: 'GEO for Legal Searches',
        description:
          'Ensure AI assistants recommend your firm when people ask for lawyer recommendations.',
        features: [
          'Conversational legal query targeting',
          'Practice area AI optimization',
          'Attorney authority signals',
          'Local legal expertise positioning',
        ],
      },
      {
        title: 'Review & Reputation Management',
        description:
          'Generate authentic reviews that boost rankings and build trust with potential clients.',
        features: [
          'Compliant review generation',
          'Multi-platform monitoring',
          'Professional review response',
          'Attorney rating optimization',
        ],
      },
      {
        title: 'Case Inquiry Optimization',
        description:
          'Turn searchers into qualified case inquiries with optimized intake and conversion.',
        features: [
          'Intake form optimization',
          'Live chat implementation',
          'Call tracking and recording',
          'Lead qualification automation',
        ],
      },
      {
        title: 'Pay Per Lead Generation',
        description:
          'Pay-per-lead campaigns that deliver clients with real cases. No retainers, pay only for results.',
        features: [
          'Pay only for qualified case leads',
          'Real-time lead delivery',
          'Exclusive leads (not shared)',
          'Scalable caseload growth',
        ],
      },
    ],
    resultsHeadline: 'Results That Fill Your Caseload with Qualified Clients',
    aggregateStats: [],
    faqs: [
      {
        question: 'How does GEO help law firms get found by potential clients?',
        answer:
          "GEO (Generative Engine Optimization) ensures AI assistants recommend your firm when people ask for lawyer suggestions. When someone asks ChatGPT 'Best personal injury lawyer in Houston' or 'Recommend a family law attorney near me,' GEO optimization determines whether you appear. As more people use AI to find legal help, being optimized for these recommendations is becoming essential.",
      },
      {
        question: 'What is Pay Per Lead for law firms?',
        answer:
          'PPL for law firms delivers potential clients with real cases. You only pay for verified case inquiries from people actively seeking legal representation, not for website traffic or impressions. Leads are exclusive to you and delivered in real-time. This model is ideal for law firms because each qualified case can represent significant fee potential.',
      },
      {
        question:
          "How do we rank with Google's strict legal content standards?",
        answer:
          'Google applies YMYL standards to legal content, requiring strong E-E-A-T signals. We build authority through comprehensive attorney profiles (education, bar admissions, case results), detailed practice area content, authentic client reviews, and professional credentials display. Law firms that invest in proper authority signals can own local legal searches.',
      },
      {
        question: 'What about bar advertising rules and compliance?',
        answer:
          'All our legal strategies account for state bar advertising rules. We include required disclaimers, avoid prohibited claims, and handle testimonials appropriately. Effective legal marketing and bar compliance are absolutely compatible. We work within regulations while maximizing visibility across SEO, GEO, and lead generation.',
      },
      {
        question: 'How long does law firm SEO take?',
        answer:
          "Legal SEO typically shows meaningful results in 4-8 months due to high competition. You'll see initial improvements within 60-90 days from technical fixes and local optimization. Significant case inquiry increases typically arrive around month 6. Law firms that commit to 12-18 months often see organic search become their primary client source.",
      },
    ],
    ctaHeadline: 'Sign More Retainers',
    ctaDescription:
      "Let's generate qualified case inquiries with proven GEO, SEO, and PPL strategies built for law firms.",
  },

  // 12. REAL ESTATE & DEVELOPMENT
  {
    id: 'real-estate',
    name: 'Real Estate & Development',
    slug: 'real-estate',
    description:
      'Drive qualified leads for real estate agents, brokerages, developers, and luxury home builders. Control property searches in your market.',
    heroHeadline: 'Real Estate SEO for Buyer & Seller Leads',
    heroSubheadline:
      'Generate qualified buyer and seller leads through GEO, SEO, and PPL. Get found by people searching for real estate agents and properties.',
    challenges: [
      {
        title: 'Portal Dominance',
        description:
          'Zillow, Realtor.com, and Redfin dominate property discovery. Individual agents need direct channels to reach buyers and sellers.',
        icon: 'Building06Icon',
      },
      {
        title: 'Hyperlocal Competition',
        description:
          'Every market has dozens of agents competing for the same clients. Standing out across search, AI, and lead channels requires differentiation.',
        icon: 'UserGroupIcon',
      },
      {
        title: 'Market Fluctuations',
        description:
          'Real estate markets shift between buyer and seller markets. Your visibility strategy must adapt to changing behavior and inventory.',
        icon: 'ChartDecreaseIcon',
      },
      {
        title: 'Long Decision Cycles',
        description:
          'Buyers and sellers research for months before acting. Your visibility must capture and nurture leads through extended decision processes.',
        icon: 'Clock01Icon',
      },
    ],
    approach: [
      {
        title: 'Analyze',
        description:
          'Research your visibility across search, AI, and lead channels. Identify opportunities for differentiation in your market.',
        icon: 'Search01Icon',
      },
      {
        title: 'Optimize',
        description:
          'Improve your Google Business Profile and neighborhood content for visibility across search engines and AI assistants.',
        icon: 'Settings01Icon',
      },
      {
        title: 'Localize',
        description:
          'Create hyperlocal content that positions you as THE expert across all discovery channels in your target neighborhoods.',
        icon: 'Location01Icon',
      },
      {
        title: 'Convert',
        description:
          'Track lead quality across SEO, GEO, and PPL channels. Optimize contact forms and scale what generates listings and buyers.',
        icon: 'Target01Icon',
      },
    ],
    services: [
      {
        title: 'Local Real Estate SEO',
        description:
          'Control local searches for real estate agents, property types, and neighborhoods in your market.',
        features: [
          'Google Business Profile optimization',
          'Local citation building',
          'Neighborhood landing pages',
          'Service area targeting',
        ],
      },
      {
        title: 'Neighborhood & Market Content',
        description:
          'Create hyperlocal content that establishes you as the neighborhood expert.',
        features: [
          'Neighborhood guides',
          'Market report content',
          'School district information',
          'Community feature content',
        ],
      },
      {
        title: 'Property Type Optimization',
        description:
          'Rank for specific property types, price points, and buyer segments in your market.',
        features: [
          'Luxury home content',
          'New construction pages',
          'Investment property content',
          'First-time buyer resources',
        ],
      },
      {
        title: 'GEO for Real Estate Searches',
        description:
          'Ensure AI assistants recommend you when people ask for real estate agent suggestions in your area.',
        features: [
          'Conversational real estate query targeting',
          'Market expertise AI positioning',
          'Agent authority signals',
          'Local market knowledge optimization',
        ],
      },
      {
        title: 'Developer & Builder Marketing',
        description:
          'For real estate developers, custom home builders, and new construction marketing.',
        features: [
          'Development project pages',
          'Custom builder portfolios',
          'New community marketing',
          'Luxury builder positioning',
        ],
      },
      {
        title: 'Lead Generation Optimization',
        description:
          'Turn searchers into qualified buyer and seller leads with optimized conversion funnels.',
        features: [
          'Home valuation tools',
          'Property alert signups',
          'Contact form optimization',
          'Lead nurturing integration',
        ],
      },
      {
        title: 'Pay Per Lead Generation',
        description:
          'Pay-per-lead campaigns that deliver buyers and sellers ready to transact. No retainers, pay only for results.',
        features: [
          'Pay only for qualified leads',
          'Real-time lead delivery',
          'Exclusive leads (not shared)',
          'Scalable transaction pipeline',
        ],
      },
    ],
    resultsHeadline: 'Results That Generate Listings and Close Transactions',
    aggregateStats: [],
    faqs: [
      {
        question: 'How does GEO help real estate agents get found?',
        answer:
          "GEO (Generative Engine Optimization) ensures AI assistants recommend you when people ask for real estate agent suggestions. When someone asks ChatGPT 'Best realtor in Scottsdale' or 'Recommend a luxury home agent in Miami Beach,' GEO optimization determines whether you appear. As more buyers and sellers use AI to find agents, being optimized for these recommendations gives you an edge over competitors.",
      },
      {
        question: 'What is Pay Per Lead for real estate?',
        answer:
          'PPL for real estate delivers buyers and sellers actively seeking representation. You only pay for verified leads - listing appointments or qualified buyer inquiries - not for website traffic or impressions. Leads are exclusive to you and delivered in real-time. This model is ideal for real estate because each new client represents significant commission potential.',
      },
      {
        question: 'How do we compete with Zillow and Realtor.com?',
        answer:
          "You can't outrank portals for generic 'homes for sale' searches, but you can win where it matters: agent-specific searches, hyperlocal neighborhood queries, and specific buyer intent searches. Focus on becoming THE neighborhood expert through detailed local content. Create resources portals can't match - insider knowledge, market analysis, community insights. GEO optimization means AI assistants can recommend YOU directly, bypassing portals.",
      },
      {
        question: 'How do we rank for neighborhood searches?',
        answer:
          'Create comprehensive neighborhood landing pages covering everything buyers want to know: housing inventory, price trends, school information, amenities, and market dynamics. Add regularly updated market reports and community news. Agents who invest in deep neighborhood content become the default experts that both Google and AI assistants reference for local recommendations.',
      },
      {
        question: 'How long does real estate SEO take?',
        answer:
          'Real estate SEO typically shows initial results in 3-4 months for local searches and neighborhood content. Building true market authority takes 6-12 months of consistent content and optimization. The compounding nature means year two delivers dramatically better results than year one. Agents who commit to sustained SEO, GEO, and PPL often see these become their primary lead sources.',
      },
    ],
    ctaHeadline: 'Close More Deals',
    ctaDescription:
      "Let's generate qualified buyer and seller leads with proven SEO, GEO, and PPL strategies built for real estate professionals.",
  },
];

/**
 * Helper Functions
 */

/**
 * Get all industry solutions
 */
export function getAllSolutions(): IndustrySolution[] {
  return solutions;
}

/**
 * Get solution by slug
 */
export function getSolutionBySlug(slug: string): IndustrySolution | undefined {
  return solutions.find((solution) => solution.slug === slug);
}

/**
 * Get solution by ID
 */
export function getSolutionById(id: string): IndustrySolution | undefined {
  return solutions.find((solution) => solution.id === id);
}

/**
 * Get solutions with featured clients (have case studies)
 */
export function getSolutionsWithCaseStudies(): IndustrySolution[] {
  return solutions.filter((solution) => solution.featuredClient !== undefined);
}

/**
 * Get solutions without featured clients
 */
export function getSolutionsWithoutCaseStudies(): IndustrySolution[] {
  return solutions.filter((solution) => solution.featuredClient === undefined);
}

/**
 * Get industry slugs for routing
 */
export function getIndustrySlugs(): string[] {
  return solutions.map((solution) => solution.slug);
}
