import { createFileRoute, notFound } from '@tanstack/react-router';
import { SolutionPageTemplate } from '@/components/SolutionPageTemplate';
import { getSolutionBySlug } from '@/data/solutions';
import { generateMetaTags } from '@/lib/seo';

export const Route = createFileRoute('/solutions/health-wellness')({
  component: HealthWellnessPage,
  head: () =>
    generateMetaTags({
      title: 'Health & Wellness Marketing - Rank in AI & Attract Patients',
      description:
        'Get recommended when patients search for care. Build trust and attract qualified clients through GEO, SEO, and targeted lead generation.',
      url: 'https://op.digital/solutions/health-wellness',
    }),
});

function HealthWellnessPage() {
  const solution = getSolutionBySlug('health-wellness');

  if (!solution) {
    throw notFound();
  }

  return <SolutionPageTemplate solution={solution} />;
}
