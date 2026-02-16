import { createFileRoute, notFound } from '@tanstack/react-router';
import { SolutionPageTemplate } from '@/components/SolutionPageTemplate';
import { getSolutionBySlug } from '@/data/solutions';
import { generateMetaTags } from '@/lib/seo';

export const Route = createFileRoute('/solutions/automotive')({
  component: AutomotivePage,
  head: () =>
    generateMetaTags({
      title: 'Automotive SEO & Marketing - Generate Vehicle Leads',
      description:
        'Automotive SEO and lead generation for dealerships. Rank in local search, get cited by AI, and drive qualified buyers.',
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
