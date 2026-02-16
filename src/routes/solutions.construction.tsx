import { createFileRoute, notFound } from '@tanstack/react-router';
import { SolutionPageTemplate } from '@/components/SolutionPageTemplate';
import { getSolutionBySlug } from '@/data/solutions';
import { generateMetaTags } from '@/lib/seo';

export const Route = createFileRoute('/solutions/construction')({
  component: ConstructionPage,
  head: () =>
    generateMetaTags({
      title: 'Construction SEO & Marketing - Generate Project Leads',
      description:
        'Construction SEO and lead generation for contractors. Win local searches and drive qualified project leads through SEO and PPL.',
      url: 'https://op.digital/solutions/construction',
    }),
});

function ConstructionPage() {
  const solution = getSolutionBySlug('construction');

  if (!solution) {
    throw notFound();
  }

  return <SolutionPageTemplate solution={solution} />;
}
