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
 * Current Brand: One Percent SEO (transitioning to One Percent GEO)
 */
export const brand: BrandConfig = {
  name: 'onepercentseo',
  displayName: 'One Percent SEO',
  tagline: 'Capture total mind share through AI and search optimization',
  domain: 'onepercentgeo.com', // Future domain
  appDomain: 'app.onepercentgeo.com',

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
        { label: 'GEO', href: '/services/geo' },
        { label: 'SEO', href: '/services/seo' },
      ],
    },
    {
      label: 'Resources',
      type: 'dropdown' as const,
      items: [
        { label: 'Customers', href: '/resources/customers' },
        { label: 'Blog', href: '/blog' },
        { label: 'Case Studies', href: '/resources/case-studies' },
      ],
    },
    {
      label: 'Solutions',
      type: 'dropdown' as const,
      items: [{ label: 'Coming Soon', href: '/solutions' }],
    },
    {
      label: 'Enterprise',
      type: 'link' as const,
      href: '/enterprise',
    },
  ],
  cta: {
    label: 'Schedule a Call',
    href: '/schedule',
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
        { label: 'GEO', href: '/services/geo' },
        { label: 'SEO', href: '/services/seo' },
      ],
    },
    {
      title: 'Resources',
      links: [
        { label: 'Customers', href: '/resources/customers' },
        { label: 'Blog', href: '/blog' },
        { label: 'Case Studies', href: '/resources/case-studies' },
      ],
    },
    {
      title: 'Company',
      links: [
        { label: 'About', href: '/about' },
        { label: 'Enterprise', href: '/enterprise' },
        { label: 'Contact', href: '/schedule' },
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
    label: 'Schedule a Call',
    href: '/schedule',
  },
};
