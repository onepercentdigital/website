import { createFileRoute } from '@tanstack/react-router';
import { generateMetaTags } from '@/lib/seo';

export const Route = createFileRoute('/enterprise')({
  component: EnterprisePage,
  head: () =>
    generateMetaTags({
      title: 'Enterprise Solutions',
      description:
        'Enterprise-grade SEO and GEO solutions for large organizations.',
      url: 'https://onepercentseo.com/enterprise',
    }),
});

function EnterprisePage() {
  return (
    <div className="mx-auto max-w-4xl px-6 py-20">
      <h1 className="mb-8 font-bold text-4xl">Enterprise Solutions</h1>
      <p className="text-lg text-muted-foreground">Content coming soon...</p>
    </div>
  );
}
