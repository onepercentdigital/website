import { createFileRoute } from '@tanstack/react-router';
import { SolutionPageTemplate } from '@/components/SolutionPageTemplate';
import { getSolutionBySlug } from '@/data/solutions';
import { generateMetaTags } from '@/lib/seo';

export const Route = createFileRoute('/solutions/real-estate')({
  component: RealEstatePage,
  head: () =>
    generateMetaTags({
      title: 'Real Estate SEO | Generate Buyer & Seller Leads',
      description:
        'Drive qualified leads for real estate agents, brokerages, developers, and luxury home builders. Own property searches in your market with GEO, SEO, and PPL.',
      url: 'https://op.digital/solutions/real-estate',
    }),
});

function RealEstatePage() {
  const solution = getSolutionBySlug('real-estate');

  if (!solution) {
    return <div>Solution not found</div>;
  }

  return (
    <SolutionPageTemplate
      solution={solution}
      seoTitle="Real Estate SEO"
      seoUrl="https://op.digital/solutions/real-estate"
    />
  );
}
