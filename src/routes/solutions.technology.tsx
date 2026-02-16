import { createFileRoute, notFound } from '@tanstack/react-router';
import { SolutionPageTemplate } from '@/components/SolutionPageTemplate';
import { getSolutionBySlug } from '@/data/solutions';
import { generateMetaTags } from '@/lib/seo';

export const Route = createFileRoute('/solutions/technology')({
  component: TechnologyPage,
  head: () =>
    generateMetaTags({
      title: 'SaaS & Tech SEO - Drive Demo Requests & Signups',
      description:
        'SaaS and tech SEO that drives demo requests and signups. Get recommended by AI when buyers research software solutions.',
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
