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
 * Current Brand: One Percent Digital
 */
export const brand: BrandConfig = {
  name: 'onepercentdigital',
  displayName: 'One Percent Digital',
  tagline: 'Dominate Your Industry With GEO, SEO, and PPL',
  domain: 'op.digital',
  appDomain: 'app.op.digital',

  logo: {
    text: 'One Percent Digital',
    iconColor: 'oklch(0.75 0.13 195)',
  },

  social: {
    // Social handles not set up yet
  },

  contact: {
    email: 'hello@op.digital',
    phone: '', // Update with real number
  },

  seo: {
    defaultTitle: 'One Percent Digital',
    titleTemplate: '%s | One Percent Digital',
    defaultDescription:
      'Recommended by ChatGPT. Page 1 on Google. Exclusive pre-qualified leads on demand. This is what market dominance looks like.',
    defaultOgImage: '/og-image.png', // We'll create this
  },
};

/**
 * Navigation structure
 */
export const navigation = {
  main: [
    {
      label: 'Organic Leads',
      type: 'dropdown' as const,
      items: [
        { label: 'GEO', href: '/geo' },
        { label: 'SEO', href: '/seo' },
        { label: 'Maps', href: '/maps' },
      ],
    },
    {
      label: 'Pay Per Lead',
      type: 'link' as const,
      href: '/ppl',
    },
    {
      label: 'Resources',
      type: 'dropdown' as const,
      items: [
        { label: 'Customers', href: '/customers' },
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
          label: 'Construction & Contractors',
          href: '/solutions/construction',
        },
        { label: 'E-commerce & Retail', href: '/solutions/ecommerce' },
        { label: 'Finance & Insurance', href: '/solutions/finance-insurance' },
        { label: 'Health & Wellness', href: '/solutions/health-wellness' },
        { label: 'Hospitality & Restaurants', href: '/solutions/hospitality' },
        { label: 'Law Firms & Legal', href: '/solutions/legal' },
        { label: 'Logistics & Transportation', href: '/solutions/logistics' },
        {
          label: 'Manufacturing & Industrial',
          href: '/solutions/manufacturing',
        },
        { label: 'Real Estate & Development', href: '/solutions/real-estate' },
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
    label: 'Apply To Work With Us',
    href: '/apply',
  },
};

/**
 * Footer structure
 */
export const footer = {
  sections: [
    {
      title: 'Organic Leads',
      links: [
        { label: 'GEO', href: '/geo' },
        { label: 'SEO', href: '/seo' },
        { label: 'Maps', href: '/maps' },
      ],
    },
    {
      title: 'Pay Per Lead',
      links: [{ label: 'Pay Per Lead', href: '/ppl' }],
    },
    {
      title: 'Resources',
      links: [
        { label: 'Customers', href: '/customers' },
        { label: 'Case Studies', href: '/case-studies' },
      ],
    },
    {
      title: 'Company',
      links: [
        { label: 'About', href: '/about' },
        { label: 'Enterprise', href: '/enterprise' },
        { label: 'Contact', href: '/apply' },
      ],
    },
  ],
  cta: {
    label: 'Apply To Work With Us',
    href: '/apply',
  },
};
