import { createFileRoute } from '@tanstack/react-router';
import { SolutionPageTemplate } from '@/components/SolutionPageTemplate';
import { getSolutionBySlug } from '@/data/solutions';
import { generateMetaTags } from '@/lib/seo';

export const Route = createFileRoute('/solutions/agriculture')({
  component: AgriculturePage,
  head: () =>
    generateMetaTags({
      title: 'Agriculture & Equipment SEO | Farm Equipment Lead Generation',
      description:
        'Drive qualified leads for agricultural equipment dealers and farm businesses. Reach farmers and ranchers searching for equipment and services.',
      url: 'https://op.digital/solutions/agriculture',
    }),
});

function AgriculturePage() {
  const solution = getSolutionBySlug('agriculture');

  if (!solution) {
    return <div>Solution not found</div>;
  }

  return (
    <SolutionPageTemplate
      solution={solution}
      seoTitle="Agriculture & Equipment SEO"
      seoUrl="https://op.digital/solutions/agriculture"
    />
  );
}
