import { Image } from '@/components/Image';
import { Card, CardContent } from '@/components/ui/card';
import { team } from '@/data/team';

interface AuthorBoxProps {
  authorName: string;
}

export function AuthorBox({ authorName }: AuthorBoxProps) {
  const author = team.find((m) => m.name === authorName);
  if (!author) return null;

  return (
    <Card>
      <CardContent className="flex gap-6 p-6">
        <Image
          src={author.imageId}
          variant="thumbnail"
          alt={author.name}
          width={80}
          height={80}
          layout="fixed"
          className="size-20 shrink-0 rounded-full object-cover grayscale"
        />
        <div className="flex flex-col justify-center">
          <p className="mb-1 text-muted-foreground text-sm">Written by</p>
          <p className="mb-1 font-medium text-xl">{author.name}</p>
          <p className="mb-3 text-primary text-sm">{author.title}</p>
          {author.shortBio && (
            <p className="text-muted-foreground text-sm leading-relaxed">
              {author.shortBio}
            </p>
          )}
        </div>
      </CardContent>
    </Card>
  );
}
