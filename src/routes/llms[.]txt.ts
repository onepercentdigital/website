import { createFileRoute } from '@tanstack/react-router';

export const Route = createFileRoute('/llms.txt')({
  server: {
    handlers: {
      GET: async () => {
        const content = `# One Percent Digital

> Digital marketing agency specializing in SEO, GEO (Generative Engine Optimization), and Pay Per Lead services.

## Services
- SEO (Search Engine Optimization): https://op.digital/seo
- GEO (Generative Engine Optimization): https://op.digital/geo
- Pay Per Lead: https://op.digital/ppl
- Google Maps Optimization: https://op.digital/maps

## Industries Served
- Real Estate: https://op.digital/solutions/real-estate
- Healthcare: https://op.digital/solutions/healthcare
- Legal: https://op.digital/solutions/legal
- Financial Services: https://op.digital/solutions/financial-services
- Home Services: https://op.digital/solutions/home-services
- And more at https://op.digital/solutions

## Resources
- Blog: https://op.digital/blog
- Case Studies: https://op.digital/case-studies
- About Us: https://op.digital/about

## Key Facts
- Focus: B2B digital marketing for service businesses
- Specialties: SEO, GEO/AIO, Pay Per Lead generation
- Target: Businesses seeking qualified leads and AI visibility

## Contact
- Website: https://op.digital
- Work With Us: https://op.digital/apply
- Enterprise: https://op.digital/enterprise
`;

        return new Response(content, {
          headers: {
            'Content-Type': 'text/plain; charset=utf-8',
            'Cache-Control': 'public, max-age=86400',
          },
        });
      },
    },
  },
});
