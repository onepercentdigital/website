import { createFileRoute } from '@tanstack/react-router';
import { generateMetaTags } from '@/lib/seo';

export const Route = createFileRoute('/solutions')({
  component: SolutionsPage,
  head: () =>
    generateMetaTags({
      title: 'Solutions',
      description: 'Custom solutions for your business needs.',
    }),
});

function SolutionsPage() {
  return (
    <div className="mx-auto max-w-4xl px-6 py-20">
      <h1 className="mb-8 font-bold text-4xl">Solutions</h1>
      <p className="text-muted-foreground text-lg">Content coming soon...</p>
    </div>
  );
}
