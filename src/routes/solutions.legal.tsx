import { createFileRoute } from '@tanstack/react-router';
import { SolutionPageTemplate } from '@/components/SolutionPageTemplate';
import { getSolutionBySlug } from '@/data/solutions';
import { generateMetaTags } from '@/lib/seo';

export const Route = createFileRoute('/solutions/legal')({
  component: LegalPage,
  head: () =>
    generateMetaTags({
      title: 'Law Firm SEO | Legal Case Lead Generation',
      description:
        'Generate qualified case inquiries for law firms. Dominate local legal searches and reach clients with proven GEO, SEO, and PPL strategies.',
      url: 'https://op.digital/solutions/legal',
    }),
});

function LegalPage() {
  const solution = getSolutionBySlug('legal');

  if (!solution) {
    return <div>Solution not found</div>;
  }

  return (
    <SolutionPageTemplate
      solution={solution}
      seoTitle="Law Firm SEO"
      seoUrl="https://op.digital/solutions/legal"
    />
  );
}
