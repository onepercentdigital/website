export interface Customer {
  id: string;
  name: string;
  industry: string;
  logo?: string;
  testimonial?: {
    quote: string;
    author: string;
    role: string;
    initials: string;
  };
  metrics?: {
    label: string;
    value: string;
    description: string;
  }[];
  caseStudyUrl?: string;
}

export interface CustomerCategory {
  id: string;
  name: string;
  description: string;
  icon: string; // Lucide icon name
}

export const customerCategories: CustomerCategory[] = [
  {
    id: 'hospitality',
    name: 'Hospitality & Restaurants',
    description:
      'Fine dining establishments and hospitality groups dominating local and AI search',
    icon: 'UtensilsCrossed',
  },
  {
    id: 'technology',
    name: 'Technology & Innovation',
    description:
      'Software companies and tech innovators leading their categories in organic visibility',
    icon: 'Laptop',
  },
  {
    id: 'manufacturing',
    name: 'Manufacturing & Industrial',
    description:
      'Industrial and manufacturing leaders capturing market share through strategic SEO',
    icon: 'Factory',
  },
  {
    id: 'services',
    name: 'Professional Services',
    description:
      'Service providers and consultants achieving top rankings in competitive markets',
    icon: 'Briefcase',
  },
];

export const customers: Customer[] = [
  {
    id: 'grove-bay',
    name: 'Grove Bay Hospitality Group',
    industry: 'hospitality',
    logo: '9e0346f0-bc70-4d85-b6dc-c8400746ce00',
    testimonial: {
      quote:
        "One Percent SEO transformed our entire restaurant group's online presence. We now dominate search results across all our locations, and our reservation rates have skyrocketed. They understand hospitality and know how to drive real revenue.",
      author: 'Grove Bay Hospitality',
      role: 'Multi-Location Restaurant Group',
      initials: 'GB',
    },
    metrics: [
      {
        label: 'Reservation Increase',
        value: '425%',
        description: 'Online reservations from organic search',
      },
      {
        label: 'Local Visibility',
        value: '#1',
        description: 'Rankings across all locations',
      },
      {
        label: 'Revenue Growth',
        value: '$2.8M',
        description: 'SEO-driven annual revenue increase',
      },
    ],
  },
  {
    id: 'stubborn-seed',
    name: 'Stubborn Seed',
    industry: 'hospitality',
    logo: 'c98add49-898a-4f13-b6b1-563939a50d00',
    testimonial: {
      quote:
        'As a Michelin-recognized restaurant, our online presence needed to match our culinary excellence. One Percent SEO delivered results that exceeded our expectations, dominating both traditional and AI search.',
      author: 'Stubborn Seed',
      role: 'Fine Dining Restaurant',
      initials: 'SS',
    },
  },
  {
    id: 'stiltsville',
    name: 'Stiltsville Fish Bar',
    industry: 'hospitality',
    logo: '9a913ac9-0c6c-4d5f-21b3-e6a722fa4300',
  },
  {
    id: 'afni',
    name: 'Afni Careers',
    industry: 'services',
    logo: '5149085e-50ad-45b9-c670-9f0cc73c7800',
    testimonial: {
      quote:
        "Working with One Percent SEO has been game-changing for our business. Their strategic approach to both traditional SEO and generative engine optimization has positioned us as the go-to solution in our industry. We're capturing leads we never reached before.",
      author: 'AFNI',
      role: 'Business Process Outsourcing',
      initials: 'AF',
    },
    metrics: [
      {
        label: 'Organic Traffic',
        value: '890%',
        description: 'Year-over-year growth',
      },
      {
        label: 'Lead Quality',
        value: '3.2x',
        description: 'Improvement in qualified leads',
      },
    ],
  },
  {
    id: 'hr-agripower',
    name: 'H&R Agri-Power',
    industry: 'manufacturing',
    logo: 'a3ace45a-c036-4a4e-30e6-58fd8c9bcf00',
    testimonial: {
      quote:
        'In the agricultural equipment industry, being found online is critical. One Percent SEO helped us dominate our category across multiple states. Our website now drives more qualified leads than any other marketing channel.',
      author: 'H&R Agri-Power',
      role: 'Agricultural Equipment',
      initials: 'HR',
    },
  },
  {
    id: 'service-allies',
    name: 'Service Allies',
    industry: 'services',
    logo: '20119f59-be9a-4233-101c-02bf4639cf00',
  },
  {
    id: 'revology',
    name: 'Revology',
    industry: 'manufacturing',
    logo: '7ab278bc-37c8-4d7e-21ee-ba2d463fa200',
    testimonial: {
      quote:
        'Our custom Mustang builds are one-of-a-kind, and we needed a search strategy to match. One Percent SEO positioned us as the authority in resto-mod vehicles. We now get inquiries from customers worldwide who find us through search.',
      author: 'Revology',
      role: 'Custom Automotive Manufacturing',
      initials: 'RV',
    },
  },
  {
    id: 'sorting-robotics',
    name: 'Sorting Robotics',
    industry: 'technology',
    logo: 'f002aaf8-4eb2-44f9-5657-5eff64cf8500',
    testimonial: {
      quote:
        'As a robotics company in a highly technical space, we needed SEO that understood our industry and our buyers. One Percent SEO delivered a strategy that put us in front of decision-makers at exactly the right moment. Our demo requests have tripled.',
      author: 'Sorting Robotics',
      role: 'Industrial Automation',
      initials: 'SR',
    },
    metrics: [
      {
        label: 'Demo Requests',
        value: '312%',
        description: 'Increase in qualified demos',
      },
      {
        label: 'Market Position',
        value: 'Top 3',
        description: 'For all key search terms',
      },
    ],
  },
  {
    id: 'modern-house-numbers',
    name: 'Modern House Numbers',
    industry: 'manufacturing',
    logo: 'b1f89b63-89bd-4d15-adee-bcd4bb958c00',
  },
  {
    id: 'goldfarb',
    name: 'Goldfarb & Associates',
    industry: 'services',
    logo: '51e5ac33-a0d2-4cdb-668e-581cba411a00',
    testimonial: {
      quote:
        'In the competitive world of turbo and fuel injection systems, standing out online is crucial. One Percent SEO helped us capture the top positions for our most valuable keywords, resulting in a significant increase in qualified inquiries.',
      author: 'Goldfarb & Associates',
      role: 'Performance Auto Parts',
      initials: 'GA',
    },
  },
];

// Helper function to get customers by industry
export function getCustomersByIndustry(industryId: string): Customer[] {
  return customers.filter((customer) => customer.industry === industryId);
}

// Helper function to get customers with testimonials
export function getCustomersWithTestimonials(): Customer[] {
  return customers.filter((customer) => customer.testimonial);
}

// Helper function to get featured customer (with most metrics)
export function getFeaturedCustomer(): Customer | undefined {
  return customers.find(
    (customer) => customer.metrics && customer.metrics.length > 0,
  );
}
