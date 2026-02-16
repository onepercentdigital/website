import { createFileRoute, notFound } from '@tanstack/react-router';
import { SolutionPageTemplate } from '@/components/SolutionPageTemplate';
import { getSolutionBySlug } from '@/data/solutions';
import { generateMetaTags } from '@/lib/seo';

export const Route = createFileRoute('/solutions/health-wellness')({
  component: HealthWellnessPage,
  head: () =>
    generateMetaTags({
      title: 'Health & Wellness SEO - Attract More Patients Online',
      description:
        'Health and wellness SEO that attracts patients online. Build trust, rank locally, and generate qualified leads for your practice.',
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
