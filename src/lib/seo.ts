import { brand } from '@/config/brand';

export interface SEOConfig {
  title?: string;
  description?: string;
  url?: string;
  ogImage?: string;
  ogType?: 'website' | 'article';
  article?: {
    publishedTime?: string;
    modifiedTime?: string;
    author?: string;
    section?: string;
    tags?: string[];
  };
  noindex?: boolean;
  canonical?: string;
}

/**
 * Generate meta tags for a page
 */
export function generateMetaTags(config: SEOConfig) {
  const title = config.title || brand.seo.defaultTitle;

  const description = config.description || brand.seo.defaultDescription;
  const ogImage = config.ogImage || brand.seo.defaultOgImage;
  const canonical = config.canonical;

  return {
    meta: [
      { title },
      { charSet: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { name: 'description', content: description },

      // Open Graph
      { property: 'og:title', content: title },
      { property: 'og:description', content: description },
      { property: 'og:image', content: ogImage },
      { property: 'og:type', content: config.ogType || 'website' },
      { property: 'og:site_name', content: brand.displayName },
      ...(config.url ? [{ property: 'og:url', content: config.url }] : []),

      // Twitter Card
      { name: 'twitter:card', content: 'summary_large_image' },
      { name: 'twitter:title', content: title },
      { name: 'twitter:description', content: description },
      { name: 'twitter:image', content: ogImage },
      ...(config.url ? [{ name: 'twitter:url', content: config.url }] : []),
      ...(brand.seo.twitterHandle
        ? [{ name: 'twitter:site', content: brand.seo.twitterHandle }]
        : []),

      // Article specific
      ...(config.article
        ? [
            ...(config.article.publishedTime
              ? [
                  {
                    property: 'article:published_time',
                    content: config.article.publishedTime,
                  },
                ]
              : []),
            ...(config.article.modifiedTime
              ? [
                  {
                    property: 'article:modified_time',
                    content: config.article.modifiedTime,
                  },
                ]
              : []),
            ...(config.article.author
              ? [{ property: 'article:author', content: config.article.author }]
              : []),
            ...(config.article.section
              ? [
                  {
                    property: 'article:section',
                    content: config.article.section,
                  },
                ]
              : []),
            ...(config.article.tags
              ? config.article.tags.map((tag) => ({
                  property: 'article:tag',
                  content: tag,
                }))
              : []),
          ]
        : []),

      // Robots
      ...(config.noindex
        ? [{ name: 'robots', content: 'noindex, nofollow' }]
        : []),
    ].filter(Boolean),
    links: [
      ...(canonical || config.url
        ? [{ rel: 'canonical', href: canonical || config.url }]
        : []),
    ].filter(Boolean),
  };
}

/**
 * Generate structured data (JSON-LD)
 */
export interface StructuredDataConfig {
  type:
    | 'Organization'
    | 'LocalBusiness'
    | 'Article'
    | 'BreadcrumbList'
    | 'FAQPage'
    | 'Service'
    | 'WebPage';
  data: Record<string, unknown>;
}

export function generateStructuredData(config: StructuredDataConfig) {
  const baseData = {
    '@context': 'https://schema.org',
    '@type': config.type,
    ...config.data,
  };

  return baseData;
}

/**
 * Generate Organization structured data
 */
export function getOrganizationSchema() {
  return generateStructuredData({
    type: 'Organization',
    data: {
      name: brand.displayName,
      url: `https://${brand.domain}`,
      logo: `https://${brand.domain}/logo.png`,
      contactPoint: {
        '@type': 'ContactPoint',
        email: brand.contact.email,
        ...(brand.contact.phone ? { telephone: brand.contact.phone } : {}),
        contactType: 'customer service',
      },
      sameAs: Object.values(brand.social).filter(Boolean),
    },
  });
}

/**
 * Generate LocalBusiness structured data
 */
export function getLocalBusinessSchema() {
  return generateStructuredData({
    type: 'LocalBusiness',
    data: {
      '@id': `https://${brand.domain}/#organization`,
      name: brand.displayName,
      url: `https://${brand.domain}`,
      logo: `https://${brand.domain}/logo.png`,
      description: brand.seo.defaultDescription,
      address: brand.contact.address
        ? {
            '@type': 'PostalAddress',
            addressLocality: brand.contact.address,
          }
        : undefined,
      email: brand.contact.email,
      telephone: brand.contact.phone,
      sameAs: Object.values(brand.social).filter(Boolean),
    },
  });
}

/**
 * Generate Article structured data (GEO-optimized)
 *
 * Includes keywords, articleSection, and speakable properties
 * for enhanced visibility in AI search engines and voice search.
 */
export function getArticleSchema(config: {
  headline: string;
  description: string;
  image: string;
  datePublished: string;
  dateModified: string;
  author: string;
  url: string;
  keywords?: string[];
  articleSection?: string;
}) {
  return generateStructuredData({
    type: 'Article',
    data: {
      headline: config.headline,
      description: config.description,
      image: config.image,
      datePublished: config.datePublished,
      dateModified: config.dateModified,
      author: {
        '@type': 'Person',
        name: config.author,
      },
      publisher: {
        '@type': 'Organization',
        name: brand.displayName,
        logo: {
          '@type': 'ImageObject',
          url: `https://${brand.domain}/logo.png`,
        },
      },
      mainEntityOfPage: {
        '@type': 'WebPage',
        '@id': config.url,
      },
      // GEO optimizations for AI search engines
      ...(config.keywords &&
        config.keywords.length > 0 && { keywords: config.keywords.join(', ') }),
      ...(config.articleSection && { articleSection: config.articleSection }),
      // Speakable specification for voice search and AI assistants
      speakable: {
        '@type': 'SpeakableSpecification',
        cssSelector: ['.prose h1', '.prose h2', '.prose p:first-of-type'],
      },
    },
  });
}

/**
 * Generate BreadcrumbList structured data
 */
export function getBreadcrumbSchema(
  items: Array<{ name: string; url: string }>,
) {
  return generateStructuredData({
    type: 'BreadcrumbList',
    data: {
      itemListElement: items.map((item, index) => ({
        '@type': 'ListItem',
        position: index + 1,
        name: item.name,
        item: item.url,
      })),
    },
  });
}

/**
 * FAQ item interface for FAQ schema
 */
export interface FAQItem {
  question: string;
  answer: string;
}

/**
 * Generate FAQPage structured data config
 */
export function getFAQSchema(faqs: FAQItem[]): StructuredDataConfig | null {
  if (faqs.length === 0) return null;
  return {
    type: 'FAQPage',
    data: {
      mainEntity: faqs.map((faq) => ({
        '@type': 'Question',
        name: faq.question,
        acceptedAnswer: {
          '@type': 'Answer',
          text: faq.answer,
        },
      })),
    },
  };
}

/**
 * Generate Service structured data
 */
export function getServiceSchema(config: {
  name: string;
  description: string;
  url: string;
  provider?: string;
  areaServed?: string;
  serviceType?: string;
}) {
  return generateStructuredData({
    type: 'Service',
    data: {
      name: config.name,
      description: config.description,
      url: config.url,
      provider: {
        '@type': 'Organization',
        name: config.provider || brand.displayName,
        url: `https://${brand.domain}`,
      },
      areaServed: config.areaServed || 'Worldwide',
      serviceType: config.serviceType,
    },
  });
}
