import { createFileRoute, notFound } from '@tanstack/react-router';
import { SolutionPageTemplate } from '@/components/SolutionPageTemplate';
import { getSolutionBySlug } from '@/data/solutions';
import { generateMetaTags } from '@/lib/seo';

export const Route = createFileRoute('/solutions/agriculture')({
  component: AgriculturePage,
  head: () =>
    generateMetaTags({
      title: 'Agriculture & Equipment SEO - Generate More Leads',
      description:
        'Agriculture and equipment SEO that reaches farmers and buyers. Generate qualified leads through search, AI, and targeted outreach.',
      url: 'https://op.digital/solutions/agriculture',
    }),
});

function AgriculturePage() {
  const solution = getSolutionBySlug('agriculture');

  if (!solution) {
    throw notFound();
  }

  return <SolutionPageTemplate solution={solution} />;
}
