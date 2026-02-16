import { createFileRoute, notFound } from '@tanstack/react-router';
import { SolutionPageTemplate } from '@/components/SolutionPageTemplate';
import { getSolutionBySlug } from '@/data/solutions';
import { generateMetaTags } from '@/lib/seo';

export const Route = createFileRoute('/solutions/legal')({
  component: LegalPage,
  head: () =>
    generateMetaTags({
      title: 'Law Firm SEO & Marketing - Generate More Case Leads',
      description:
        'Law firm SEO and marketing that generates case leads. Rank in local search, build authority, and drive qualified inquiries.',
      url: 'https://op.digital/solutions/legal',
    }),
});

function LegalPage() {
  const solution = getSolutionBySlug('legal');

  if (!solution) {
    throw notFound();
  }

  return <SolutionPageTemplate solution={solution} />;
}
