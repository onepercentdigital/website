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
      'GEO, SEO, and pay-per-lead services from One Percent Digital. Get found in AI search, rank on Google, and generate exclusive leads.',
    defaultOgImage: '/og-image.png', // We'll create this
  },
};

/**
 * Navigation structure
 */
export const navigation = {
  main: [
    {
      label: 'Organic Visibility',
      type: 'dropdown' as const,
      items: [
        { label: 'GEO', href: '/geo' },
        { label: 'SEO', href: '/seo' },
        { label: 'Maps', href: '/maps' },
        { label: 'Solutions', href: '/solutions' },
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
      label: 'Enterprise',
      type: 'link' as const,
      href: '/enterprise',
    },
    {
      label: 'About',
      type: 'link' as const,
      href: '/about',
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
      title: 'Organic Visibility',
      links: [
        { label: 'GEO', href: '/geo' },
        { label: 'SEO', href: '/seo' },
        { label: 'Maps', href: '/maps' },
        { label: 'Solutions', href: '/solutions' },
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
