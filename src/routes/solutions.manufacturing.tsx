import { createFileRoute, notFound } from '@tanstack/react-router';
import { SolutionPageTemplate } from '@/components/SolutionPageTemplate';
import { getSolutionBySlug } from '@/data/solutions';
import { generateMetaTags } from '@/lib/seo';

export const Route = createFileRoute('/solutions/manufacturing')({
  component: ManufacturingPage,
  head: () =>
    generateMetaTags({
      title: 'Manufacturing SEO & Marketing - Generate B2B Leads',
      description:
        'Manufacturing SEO and B2B lead generation. Get found when buyers research industrial suppliers through search and AI.',
      url: 'https://op.digital/solutions/manufacturing',
    }),
});

function ManufacturingPage() {
  const solution = getSolutionBySlug('manufacturing');

  if (!solution) {
    throw notFound();
  }

  return <SolutionPageTemplate solution={solution} />;
}
