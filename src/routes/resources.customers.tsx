import { createFileRoute } from '@tanstack/react-router';
import { generateMetaTags } from '@/lib/seo';

export const Route = createFileRoute('/resources/customers')({
  component: CustomersPage,
  head: () =>
    generateMetaTags({
      title: 'Our Customers',
      description: 'See the companies we help dominate their industries.',
    }),
});

function CustomersPage() {
  return (
    <div className="mx-auto max-w-4xl px-6 py-20">
      <h1 className="mb-8 font-bold text-4xl">Our Customers</h1>
      <p className="text-muted-foreground text-lg">Content coming soon...</p>
    </div>
  );
}
