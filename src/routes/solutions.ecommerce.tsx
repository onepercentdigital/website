import { createFileRoute } from '@tanstack/react-router';
import { SolutionPageTemplate } from '@/components/SolutionPageTemplate';
import { getSolutionBySlug } from '@/data/solutions';
import { generateMetaTags } from '@/lib/seo';

export const Route = createFileRoute('/solutions/ecommerce')({
  component: EcommercePage,
  head: () =>
    generateMetaTags({
      title: 'E-commerce & Retail SEO | Drive Online Sales',
      description:
        'Drive qualified traffic and sales for online retailers. Compete with Amazon and win product searches with proven GEO, SEO, and PPL strategies.',
      url: 'https://op.digital/solutions/ecommerce',
    }),
});

function EcommercePage() {
  const solution = getSolutionBySlug('ecommerce');

  if (!solution) {
    return <div>Solution not found</div>;
  }

  return (
    <SolutionPageTemplate
      solution={solution}
      seoTitle="E-commerce & Retail SEO"
      seoUrl="https://op.digital/solutions/ecommerce"
    />
  );
}
