import { createFileRoute, notFound } from '@tanstack/react-router';
import { SolutionPageTemplate } from '@/components/SolutionPageTemplate';
import { getSolutionBySlug } from '@/data/solutions';
import { generateMetaTags } from '@/lib/seo';

export const Route = createFileRoute('/solutions/finance-insurance')({
  component: FinanceInsurancePage,
  head: () =>
    generateMetaTags({
      title: 'Finance & Insurance Marketing - Rank in AI & Generate Clients',
      description:
        'Get recommended when prospects research financial services. Build trust and generate qualified leads through GEO, SEO, and targeted strategies.',
      url: 'https://op.digital/solutions/finance-insurance',
    }),
});

function FinanceInsurancePage() {
  const solution = getSolutionBySlug('finance-insurance');

  if (!solution) {
    throw notFound();
  }

  return <SolutionPageTemplate solution={solution} />;
}
