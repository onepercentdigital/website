import { createFileRoute } from '@tanstack/react-router';
import { SolutionPageTemplate } from '@/components/SolutionPageTemplate';
import { getSolutionBySlug } from '@/data/solutions';
import { generateMetaTags } from '@/lib/seo';

export const Route = createFileRoute('/solutions/technology')({
  component: TechnologyPage,
  head: () =>
    generateMetaTags({
      title: 'Technology & SaaS SEO | B2B Software Lead Generation',
      description:
        'Accelerate growth for technology and SaaS companies. Reach decision-makers and drive qualified demos with proven GEO, SEO, and PPL strategies.',
      url: 'https://op.digital/solutions/technology',
    }),
});

function TechnologyPage() {
  const solution = getSolutionBySlug('technology');

  if (!solution) {
    return <div>Solution not found</div>;
  }

  return (
    <SolutionPageTemplate
      solution={solution}
      seoTitle="Technology & SaaS SEO"
      seoUrl="https://op.digital/solutions/technology"
    />
  );
}
