import { createFileRoute, notFound } from '@tanstack/react-router';
import { SolutionPageTemplate } from '@/components/SolutionPageTemplate';
import { getSolutionBySlug } from '@/data/solutions';
import { generateMetaTags } from '@/lib/seo';

export const Route = createFileRoute('/solutions/real-estate')({
  component: RealEstatePage,
  head: () =>
    generateMetaTags({
      title: 'Real Estate Marketing - Rank in AI & Generate Buyer Leads',
      description:
        'Get recommended when buyers and sellers search for agents. Own property searches through GEO, SEO, and targeted lead generation.',
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
