import { createFileRoute } from '@tanstack/react-router';
import { SolutionPageTemplate } from '@/components/SolutionPageTemplate';
import { getSolutionBySlug } from '@/data/solutions';
import { generateMetaTags } from '@/lib/seo';

export const Route = createFileRoute('/solutions/automotive')({
  component: AutomotivePage,
  head: () =>
    generateMetaTags({
      title: 'Automotive SEO | Dealership & Vehicle Lead Generation',
      description:
        'Drive qualified leads for automotive businesses. Excel in local and specialty vehicle searches with proven GEO, SEO, and PPL strategies.',
      url: 'https://op.digital/solutions/automotive',
    }),
});

function AutomotivePage() {
  const solution = getSolutionBySlug('automotive');

  if (!solution) {
    return <div>Solution not found</div>;
  }

  return (
    <SolutionPageTemplate
      solution={solution}
      seoTitle="Automotive SEO"
      seoUrl="https://op.digital/solutions/automotive"
    />
  );
}
