import { createFileRoute, notFound } from '@tanstack/react-router';
import { SolutionPageTemplate } from '@/components/SolutionPageTemplate';
import { getSolutionBySlug } from '@/data/solutions';
import { generateMetaTags } from '@/lib/seo';

export const Route = createFileRoute('/solutions/automotive')({
  component: AutomotivePage,
  head: () =>
    generateMetaTags({
      title: 'Automotive Marketing - Rank in AI & Generate Vehicle Leads',
      description:
        'Get your dealership recommended by AI and dominate local search. Drive qualified buyers through GEO, SEO, and targeted lead generation.',
      url: 'https://op.digital/solutions/automotive',
    }),
});

function AutomotivePage() {
  const solution = getSolutionBySlug('automotive');

  if (!solution) {
    throw notFound();
  }

  return <SolutionPageTemplate solution={solution} />;
}
