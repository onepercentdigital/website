import { createFileRoute, notFound } from '@tanstack/react-router';
import { SolutionPageTemplate } from '@/components/SolutionPageTemplate';
import { getSolutionBySlug } from '@/data/solutions';
import { generateMetaTags } from '@/lib/seo';

export const Route = createFileRoute('/solutions/ecommerce')({
  component: EcommercePage,
  head: () =>
    generateMetaTags({
      title: 'E-commerce SEO & Marketing - Drive More Online Sales',
      description:
        'E-commerce SEO and marketing that drives online sales. Rank on Google Shopping, get cited by AI, and compete with Amazon.',
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
