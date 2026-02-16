import { createFileRoute, notFound } from '@tanstack/react-router';
import { SolutionPageTemplate } from '@/components/SolutionPageTemplate';
import { getSolutionBySlug } from '@/data/solutions';
import { generateMetaTags } from '@/lib/seo';

export const Route = createFileRoute('/solutions/logistics')({
  component: LogisticsPage,
  head: () =>
    generateMetaTags({
      title: 'Logistics & Transportation SEO - Generate Freight Leads',
      description:
        'Logistics and transportation SEO that generates freight leads. Get found when shippers search for carriers and 3PLs.',
      url: 'https://op.digital/solutions/logistics',
    }),
});

function LogisticsPage() {
  const solution = getSolutionBySlug('logistics');

  if (!solution) {
    throw notFound();
  }

  return <SolutionPageTemplate solution={solution} />;
}
