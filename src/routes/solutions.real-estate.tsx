import { createFileRoute, notFound } from '@tanstack/react-router';
import { SolutionPageTemplate } from '@/components/SolutionPageTemplate';
import { getSolutionBySlug } from '@/data/solutions';
import { generateMetaTags } from '@/lib/seo';

export const Route = createFileRoute('/solutions/real-estate')({
  component: RealEstatePage,
  head: () =>
    generateMetaTags({
      title: 'Real Estate SEO & Marketing - Generate Buyer & Seller Leads',
      description:
        'Real estate SEO that generates buyer and seller leads. Rank for property searches and get recommended by AI in your market.',
      url: 'https://op.digital/solutions/real-estate',
    }),
});

function RealEstatePage() {
  const solution = getSolutionBySlug('real-estate');

  if (!solution) {
    throw notFound();
  }

  return <SolutionPageTemplate solution={solution} />;
}
