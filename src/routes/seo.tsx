import { createFileRoute } from '@tanstack/react-router';
import { generateMetaTags } from '@/lib/seo';

export const Route = createFileRoute('/seo')({
  component: SEOPage,
  head: () =>
    generateMetaTags({
      title: 'SEO - Search Engine Optimization',
      description:
        'Deliver sustainable organic growth through proven SEO strategies.',
      url: 'https://onepercentseo.com/seo',
    }),
});

function SEOPage() {
  return (
    <div className="mx-auto max-w-4xl px-6 py-20">
      <h1 className="mb-8 font-bold text-4xl">
        Search Engine Optimization (SEO)
      </h1>
      <p className="text-lg text-muted-foreground">Content coming soon...</p>
    </div>
  );
}
