import { createFileRoute } from '@tanstack/react-router';
import { SolutionPageTemplate } from '@/components/SolutionPageTemplate';
import { getSolutionBySlug } from '@/data/solutions';
import { generateMetaTags } from '@/lib/seo';

export const Route = createFileRoute('/solutions/health-wellness')({
  component: HealthWellnessPage,
  head: () =>
    generateMetaTags({
      title: 'Health & Wellness SEO | Patient & Client Lead Generation',
      description:
        'Attract qualified clients for health and wellness businesses. Build trust and reach patients searching for care with proven GEO, SEO, and PPL strategies.',
      url: 'https://op.digital/solutions/health-wellness',
    }),
});

function HealthWellnessPage() {
  const solution = getSolutionBySlug('health-wellness');

  if (!solution) {
    return <div>Solution not found</div>;
  }

  return (
    <SolutionPageTemplate
      solution={solution}
      seoTitle="Health & Wellness SEO"
      seoUrl="https://op.digital/solutions/health-wellness"
    />
  );
}
