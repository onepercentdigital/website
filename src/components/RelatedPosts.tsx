import { Link } from '@tanstack/react-router';
import { Image } from '@/components/Image';
import { Card, CardHeader, CardTitle } from '@/components/ui/card';
import { getRelatedPosts } from '@/lib/blog';

interface RelatedPostsProps {
  currentSlug: string;
}

export function RelatedPosts({ currentSlug }: RelatedPostsProps) {
  const posts = getRelatedPosts(currentSlug, 3);
  if (posts.length === 0) return null;

  return (
    <section className="px-6 py-16 lg:py-20">
      <div className="mx-auto max-w-4xl">
        <h2 className="mb-8 font-bold text-2xl tracking-tight">
          Related Articles
        </h2>
        <div className="grid gap-8 md:grid-cols-3">
          {posts.map((post) => (
            <Link key={post.slug} to="/blog/$slug" params={{ slug: post.slug }}>
              <Card className="group h-full overflow-hidden pt-0">
                {post.featuredImage && (
                  <div className="relative aspect-video overflow-hidden">
                    <div className="absolute inset-0 z-30 bg-primary opacity-50 mix-blend-color" />
                    <Image
                      src={post.featuredImage}
                      alt={post.title}
                      width={400}
                      height={225}
                      layout="constrained"
                      className="relative z-20 aspect-video w-full object-cover brightness-[0.6] grayscale transition-transform duration-300 group-hover:scale-105"
                    />
                  </div>
                )}
                <CardHeader>
                  <CardTitle className="line-clamp-2">{post.title}</CardTitle>
                </CardHeader>
              </Card>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
