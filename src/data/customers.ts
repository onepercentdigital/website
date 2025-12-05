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
  },
  {
    id: 'stubborn-seed',
    name: 'Stubborn Seed',
    industry: 'hospitality',
    logo: 'c98add49-898a-4f13-b6b1-563939a50d00',
  },
  {
    id: 'afni',
    name: 'Afni Careers',
    industry: 'services',
    logo: '5149085e-50ad-45b9-c670-9f0cc73c7800',
  },
  {
    id: 'hr-agripower',
    name: 'H&R Agri-Power',
    industry: 'manufacturing',
    logo: 'a3ace45a-c036-4a4e-30e6-58fd8c9bcf00',
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
  },
  {
    id: 'sorting-robotics',
    name: 'Sorting Robotics',
    industry: 'technology',
    logo: 'f002aaf8-4eb2-44f9-5657-5eff64cf8500',
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
        "Working with One Percent SEO transformed our online presence. We went from being invisible to dominating our market. They understand E-commerce and deliver real results. We're now one of the top recommendations in ChatGPT for diesel injection pumps.",
      author: 'Scott Goldfarb',
      role: 'Owner, Goldfarb & Associates',
      initials: 'SG',
    },
  },
  {
    id: 'royal-covers',
    name: 'Royal Covers',
    industry: 'services',
    logo: '5bacc41c-abd7-4b66-feeb-da11c01c8f00',
    testimonial: {
      quote:
        "After 40+ years in business, One Percent SEO helped us finally dominate online. We're now the #1 patio cover company in Arizona with three straight years of record-breaking revenue. Their local SEO strategy changed everything for us.",
      author: 'Tanner Bishop',
      role: 'Owner, Royal Covers',
      initials: 'TB',
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
