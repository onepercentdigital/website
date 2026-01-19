import { createFileRoute, notFound } from '@tanstack/react-router';
import { SolutionPageTemplate } from '@/components/SolutionPageTemplate';
import { getSolutionBySlug } from '@/data/solutions';
import { generateMetaTags } from '@/lib/seo';

export const Route = createFileRoute('/solutions/ecommerce')({
  component: EcommercePage,
  head: () =>
    generateMetaTags({
      title: 'E-commerce Marketing - Rank in AI & Drive Online Sales',
      description:
        'Get your products recommended by AI and rank on Google Shopping. Compete with Amazon through GEO, SEO, and conversion-focused strategies.',
      url: 'https://op.digital/solutions/ecommerce',
    }),
});

function EcommercePage() {
  const solution = getSolutionBySlug('ecommerce');

  if (!solution) {
    throw notFound();
  }

  return <SolutionPageTemplate solution={solution} />;
}
