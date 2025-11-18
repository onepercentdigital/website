import { createFileRoute } from '@tanstack/react-router';
import { generateMetaTags } from '@/lib/seo';

export const Route = createFileRoute('/services/geo')({
  component: GEOPage,
  head: () =>
    generateMetaTags({
      title: 'GEO - Generative Engine Optimization',
      description:
        'Position your brand at the forefront of AI-powered search experiences.',
    }),
});

function GEOPage() {
  return (
    <div className="mx-auto max-w-4xl px-6 py-20">
      <h1 className="mb-8 font-bold text-4xl">
        Generative Engine Optimization (GEO)
      </h1>
      <p className="text-muted-foreground text-lg">Content coming soon...</p>
    </div>
  );
}
