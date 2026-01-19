import { createFileRoute, notFound } from '@tanstack/react-router';
import { SolutionPageTemplate } from '@/components/SolutionPageTemplate';
import { getSolutionBySlug } from '@/data/solutions';
import { generateMetaTags } from '@/lib/seo';

export const Route = createFileRoute('/solutions/technology')({
  component: TechnologyPage,
  head: () =>
    generateMetaTags({
      title: 'SaaS & Tech Marketing - Rank in AI & Drive Demo Requests',
      description:
        'Get your software recommended by AI when buyers research solutions. Accelerate growth through GEO, SEO, and qualified demo generation.',
      url: 'https://op.digital/solutions/technology',
    }),
});

function TechnologyPage() {
  const solution = getSolutionBySlug('technology');

  if (!solution) {
    throw notFound();
  }

  return <SolutionPageTemplate solution={solution} />;
}
