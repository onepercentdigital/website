import type { StructuredDataConfig } from '@/lib/seo';

interface SEOProps {
  structuredData?: StructuredDataConfig | StructuredDataConfig[];
}

/**
 * Component to inject structured data (JSON-LD) into the page
 */
export function SEO({ structuredData }: SEOProps) {
  if (!structuredData) return null;

  const dataArray = Array.isArray(structuredData)
    ? structuredData
    : [structuredData];

  return (
    <>
      {dataArray.map((data) => (
        <script
          key={data.type}
          type="application/ld+json"
          // biome-ignore lint/security/noDangerouslySetInnerHtml: Required for JSON-LD structured data
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              '@context': 'https://schema.org',
              '@type': data.type,
              ...data.data,
            }),
          }}
        />
      ))}
    </>
  );
}
