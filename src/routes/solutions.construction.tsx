import { createFileRoute } from '@tanstack/react-router';
import { SolutionPageTemplate } from '@/components/SolutionPageTemplate';
import { getSolutionBySlug } from '@/data/solutions';
import { generateMetaTags } from '@/lib/seo';

export const Route = createFileRoute('/solutions/construction')({
  component: ConstructionPage,
  head: () =>
    generateMetaTags({
      title: 'Construction & Contractor SEO | Project Lead Generation',
      description:
        'Generate qualified project leads for construction and contracting businesses. Win local searches and reach property owners who need you.',
      url: 'https://op.digital/solutions/construction',
    }),
});

function ConstructionPage() {
  const solution = getSolutionBySlug('construction');

  if (!solution) {
    return <div>Solution not found</div>;
  }

  return (
    <SolutionPageTemplate
      solution={solution}
      seoTitle="Construction & Contractor SEO"
      seoUrl="https://op.digital/solutions/construction"
    />
  );
}
