import { createFileRoute, notFound } from '@tanstack/react-router';
import { SolutionPageTemplate } from '@/components/SolutionPageTemplate';
import { getSolutionBySlug } from '@/data/solutions';
import { generateMetaTags } from '@/lib/seo';

export const Route = createFileRoute('/solutions/finance-insurance')({
  component: FinanceInsurancePage,
  head: () =>
    generateMetaTags({
      title: 'Finance & Insurance SEO - Generate More Client Leads',
      description:
        'Finance and insurance SEO that generates client leads. Build trust online and get found when prospects research financial services.',
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
