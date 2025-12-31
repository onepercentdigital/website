import { createFileRoute } from '@tanstack/react-router';
import { SolutionPageTemplate } from '@/components/SolutionPageTemplate';
import { getSolutionBySlug } from '@/data/solutions';
import { generateMetaTags } from '@/lib/seo';

export const Route = createFileRoute('/solutions/hospitality')({
  component: HospitalityPage,
  head: () =>
    generateMetaTags({
      title: 'Hospitality & Restaurant SEO | Fill Tables with Search',
      description:
        'Own local search and AI recommendations for restaurants, hotels, and hospitality venues. Beat OTAs, outrank chains, and fill every table with search-driven customers.',
      url: 'https://op.digital/solutions/hospitality',
    }),
});

function HospitalityPage() {
  const solution = getSolutionBySlug('hospitality');

  if (!solution) {
    return <div>Solution not found</div>;
  }

  return (
    <SolutionPageTemplate
      solution={solution}
      seoTitle="Hospitality & Restaurant SEO"
      seoUrl="https://op.digital/solutions/hospitality"
    />
  );
}
