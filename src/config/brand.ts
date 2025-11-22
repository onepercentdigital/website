/**
 * Brand Configuration
 *
 * Centralized brand configuration for easy rebranding and multi-brand support.
 * Update these values to rebrand the entire site.
 */

export interface BrandConfig {
  name: string;
  displayName: string;
  tagline: string;
  domain: string;
  appDomain: string;
  logo: {
    text: string;
    iconColor: string;
  };
  social: {
    twitter?: string;
    linkedin?: string;
    facebook?: string;
    instagram?: string;
    github?: string;
  };
  contact: {
    phone?: string;
    email: string;
    address?: string;
  };
  seo: {
    defaultTitle: string;
    titleTemplate: string;
    defaultDescription: string;
    defaultOgImage: string;
    twitterHandle?: string;
  };
}

/**
 * Current Brand: One Percent SEO
 */
export const brand: BrandConfig = {
  name: 'onepercentseo',
  displayName: 'One Percent SEO',
  tagline: 'Dominate Your Industry With AI and Search Optimization',
  domain: 'onepercentseo.com',
  appDomain: 'app.onepercentseo.com',

  logo: {
    text: 'One Percent SEO',
    iconColor: '#00cccc',
  },

  social: {
    twitter: '@onepercentseo',
    linkedin: 'company/onepercentseo',
    // Add other social handles as needed
  },

  contact: {
    email: 'hello@onepercentseo.com',
    phone: '+1 (555) 123-4567', // Update with real number
    address: 'Gilbert, AZ',
  },

  seo: {
    defaultTitle: 'One Percent SEO',
    titleTemplate: '%s | One Percent SEO',
    defaultDescription:
      'Helping companies become the top 1% talked about brands in AI and traditional search through GEO and SEO optimization.',
    defaultOgImage: '/og-image.png', // We'll create this
    twitterHandle: '@onepercentseo',
  },
};

/**
 * Navigation structure
 */
export const navigation = {
  main: [
    {
      label: 'Services',
      type: 'dropdown' as const,
      items: [
        { label: 'GEO', href: '/geo' },
        { label: 'SEO', href: '/seo' },
      ],
    },
    {
      label: 'Resources',
      type: 'dropdown' as const,
      items: [
        { label: 'Customers', href: '/customers' },
        { label: 'Blog', href: '/blog' },
        { label: 'Case Studies', href: '/case-studies' },
      ],
    },
    {
      label: 'Solutions',
      type: 'dropdown' as const,
      items: [
        { label: 'Agriculture & Equipment', href: '/solutions/agriculture' },
        { label: 'Automotive', href: '/solutions/automotive' },
        {
          label: 'Consulting & Coaching',
          href: '/solutions/consulting-coaching',
        },
        {
          label: 'Construction & Contractors',
          href: '/solutions/construction',
        },
        { label: 'E-commerce & Retail', href: '/solutions/ecommerce' },
        { label: 'Health & Wellness', href: '/solutions/health-wellness' },
        { label: 'Hospitality & Restaurants', href: '/solutions/hospitality' },
        { label: 'Logistics & Transportation', href: '/solutions/logistics' },
        {
          label: 'Manufacturing & Industrial',
          href: '/solutions/manufacturing',
        },
        { label: 'Technology & SaaS', href: '/solutions/technology' },
      ],
    },
    {
      label: 'Enterprise',
      type: 'link' as const,
      href: '/enterprise',
    },
  ],
  cta: {
    label: 'Get Your Free AI Search Audit',
    href: '/audit',
  },
};

/**
 * Footer structure
 */
export const footer = {
  sections: [
    {
      title: 'Services',
      links: [
        { label: 'GEO', href: '/geo' },
        { label: 'SEO', href: '/seo' },
      ],
    },
    {
      title: 'Resources',
      links: [
        { label: 'Customers', href: '/customers' },
        { label: 'Blog', href: '/blog' },
        { label: 'Case Studies', href: '/case-studies' },
      ],
    },
    {
      title: 'Company',
      links: [
        { label: 'About', href: '/about' },
        { label: 'Enterprise', href: '/enterprise' },
        { label: 'Contact', href: '/audit' },
      ],
    },
    {
      title: 'Social',
      links: [
        { label: 'Twitter', href: '#' }, // Update with real links
        { label: 'LinkedIn', href: '#' },
      ],
    },
  ],
  cta: {
    label: 'Get Your Free AI Search Audit',
    href: '/audit',
  },
};
