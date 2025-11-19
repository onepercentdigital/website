import { createFileRoute } from '@tanstack/react-router';
import { generateMetaTags } from '@/lib/seo';

export const Route = createFileRoute('/case-studies')({
  component: CaseStudiesPage,
  head: () =>
    generateMetaTags({
      title: 'Case Studies',
      description: 'Real results from our GEO and SEO strategies.',
      url: 'https://onepercentseo.com/case-studies',
    }),
});

function CaseStudiesPage() {
  return (
    <div className="mx-auto max-w-4xl px-6 py-20">
      <h1 className="mb-8 font-bold text-4xl">Case Studies</h1>
      <p className="text-lg text-muted-foreground">Content coming soon...</p>
    </div>
  );
}
