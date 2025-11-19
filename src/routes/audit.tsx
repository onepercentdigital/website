import { createFileRoute } from '@tanstack/react-router';
import { generateMetaTags } from '@/lib/seo';

export const Route = createFileRoute('/audit')({
  component: AuditPage,
  head: () =>
    generateMetaTags({
      title: 'Get Your Free AI Search Audit',
      description:
        'Get a comprehensive AI and search optimization audit. Discover how you rank in Google, ChatGPT, and AI Overviews.',
      url: 'https://onepercentseo.com/audit',
    }),
});

function AuditPage() {
  return (
    <div className="mx-auto max-w-4xl px-6 py-20">
      <h1 className="mb-8 text-center font-bold text-4xl">
        Get Your Free AI Search Audit
      </h1>
      <div className="rounded-2xl border border-border bg-card p-8">
        <p className="mb-4 text-center text-muted-foreground">
          Calendly integration will be added here
        </p>
        {/* TODO: Add Calendly embed */}
      </div>
    </div>
  );
}
