import { createFileRoute, notFound } from '@tanstack/react-router';
import { SolutionPageTemplate } from '@/components/SolutionPageTemplate';
import { getSolutionBySlug } from '@/data/solutions';
import { generateMetaTags } from '@/lib/seo';

export const Route = createFileRoute('/solutions/hospitality')({
  component: HospitalityPage,
  head: () =>
    generateMetaTags({
      title: 'Hospitality Marketing - Rank in AI & Fill More Tables',
      description:
        'Own local search and AI recommendations for restaurants and hotels. Beat OTAs, outrank chains, and fill every table with GEO, SEO, and targeted leads.',
      url: 'https://op.digital/solutions/hospitality',
    }),
});

function HospitalityPage() {
  const solution = getSolutionBySlug('hospitality');

  if (!solution) {
    throw notFound();
  }

  return <SolutionPageTemplate solution={solution} />;
}
