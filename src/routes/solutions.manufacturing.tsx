import { createFileRoute, notFound } from '@tanstack/react-router';
import { SolutionPageTemplate } from '@/components/SolutionPageTemplate';
import { getSolutionBySlug } from '@/data/solutions';
import { generateMetaTags } from '@/lib/seo';

export const Route = createFileRoute('/solutions/manufacturing')({
  component: ManufacturingPage,
  head: () =>
    generateMetaTags({
      title: 'Manufacturing Marketing - Rank in AI & Generate B2B Leads',
      description:
        'Get cited when AI recommends industrial suppliers. Drive qualified B2B leads through GEO, SEO, and targeted outreach to decision-makers.',
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
