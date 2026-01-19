import { createFileRoute, notFound } from '@tanstack/react-router';
import { SolutionPageTemplate } from '@/components/SolutionPageTemplate';
import { getSolutionBySlug } from '@/data/solutions';
import { generateMetaTags } from '@/lib/seo';

export const Route = createFileRoute('/solutions/logistics')({
  component: LogisticsPage,
  head: () =>
    generateMetaTags({
      title: 'Logistics Marketing - Rank in AI & Generate Freight Leads',
      description:
        'Get recommended when shippers search for logistics partners. Drive qualified leads through GEO, SEO, and industry-specific strategies.',
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
