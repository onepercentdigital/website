import { createFileRoute } from '@tanstack/react-router';
import { SolutionPageTemplate } from '@/components/SolutionPageTemplate';
import { getSolutionBySlug } from '@/data/solutions';
import { generateMetaTags } from '@/lib/seo';

export const Route = createFileRoute('/solutions/logistics')({
  component: LogisticsPage,
  head: () =>
    generateMetaTags({
      title: 'Logistics & Transportation SEO | Freight Lead Generation',
      description:
        'Generate qualified shipping and logistics leads through search. Capture industry keywords and reach shippers searching for reliable partners.',
      url: 'https://op.digital/solutions/logistics',
    }),
});

function LogisticsPage() {
  const solution = getSolutionBySlug('logistics');

  if (!solution) {
    return <div>Solution not found</div>;
  }

  return (
    <SolutionPageTemplate
      solution={solution}
      seoTitle="Logistics & Transportation SEO"
      seoUrl="https://op.digital/solutions/logistics"
    />
  );
}
