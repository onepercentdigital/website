import { createFileRoute } from '@tanstack/react-router';
import { SolutionPageTemplate } from '@/components/SolutionPageTemplate';
import { getSolutionBySlug } from '@/data/solutions';
import { generateMetaTags } from '@/lib/seo';

export const Route = createFileRoute('/solutions/manufacturing')({
  component: ManufacturingPage,
  head: () =>
    generateMetaTags({
      title: 'Manufacturing & Industrial SEO | B2B Lead Generation',
      description:
        'Drive qualified B2B leads for manufacturers and industrial companies. Lead high-value searches and reach decision-makers with proven GEO, SEO, and PPL.',
      url: 'https://op.digital/solutions/manufacturing',
    }),
});

function ManufacturingPage() {
  const solution = getSolutionBySlug('manufacturing');

  if (!solution) {
    return <div>Solution not found</div>;
  }

  return (
    <SolutionPageTemplate
      solution={solution}
      seoTitle="Manufacturing & Industrial SEO"
      seoUrl="https://op.digital/solutions/manufacturing"
    />
  );
}
