import { createFileRoute } from '@tanstack/react-router';
import { SolutionPageTemplate } from '@/components/SolutionPageTemplate';
import { getSolutionBySlug } from '@/data/solutions';
import { generateMetaTags } from '@/lib/seo';

export const Route = createFileRoute('/solutions/finance-insurance')({
  component: FinanceInsurancePage,
  head: () =>
    generateMetaTags({
      title: 'Finance & Insurance SEO | Client Lead Generation',
      description:
        'Generate qualified client leads for financial advisors and insurance professionals. Build trust and reach prospects with proven GEO, SEO, and PPL strategies.',
      url: 'https://op.digital/solutions/finance-insurance',
    }),
});

function FinanceInsurancePage() {
  const solution = getSolutionBySlug('finance-insurance');

  if (!solution) {
    return <div>Solution not found</div>;
  }

  return (
    <SolutionPageTemplate
      solution={solution}
      seoTitle="Finance & Insurance SEO"
      seoUrl="https://op.digital/solutions/finance-insurance"
    />
  );
}
