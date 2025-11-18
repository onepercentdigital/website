import { createFileRoute } from '@tanstack/react-router';
import { generateMetaTags } from '@/lib/seo';

export const Route = createFileRoute('/blog/')({
  component: BlogIndexPage,
  head: () =>
    generateMetaTags({
      title: 'Blog',
      description: 'Insights and strategies for SEO and GEO success.',
    }),
});

function BlogIndexPage() {
  return (
    <div className="mx-auto max-w-4xl px-6 py-20">
      <h1 className="mb-8 font-bold text-4xl">Blog</h1>
      <p className="text-muted-foreground text-lg">
        Blog functionality coming soon...
      </p>
    </div>
  );
}
