import { convexQuery } from '@convex-dev/react-query';
import {
  FloppyDiskIcon,
  Image01Icon,
  Loading01Icon,
  ViewIcon,
  ViewOffIcon,
} from '@hugeicons/core-free-icons';
import { HugeiconsIcon } from '@hugeicons/react';
import { useQuery } from '@tanstack/react-query';
import { createServerFn } from '@tanstack/react-start';
import { lazy, Suspense, useEffect, useRef, useState } from 'react';
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from '@/components/ui/accordion';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select';
import { Textarea } from '@/components/ui/textarea';
import { getImageUrl, uploadImage } from '@/lib/cloudflare-images';
import { api } from '../../convex/_generated/api';
import type { Id } from '../../convex/_generated/dataModel';

// Lazy load the markdown preview to reduce main bundle size
// ReactMarkdown + rehype plugins add ~50KB+ to bundle
const MarkdownPreview = lazy(() => import('@/components/MarkdownPreview'));

// Server function for image upload
const uploadImageServer = createServerFn({ method: 'POST' })
  .inputValidator((data) => {
    if (!(data instanceof FormData)) {
      throw new Error('Expected FormData');
    }
    const file = data.get('file');
    if (!file || !(file instanceof File)) {
      throw new Error('No file provided');
    }
    return { file, alt: data.get('alt')?.toString() || '' };
  })
  .handler(async ({ data }) => {
    const { file, alt } = data;
    const imageId = await uploadImage(file, { alt });
    return { imageId };
  });

interface BlogEditorProps {
  initialData?: {
    title: string;
    slug: string;
    content: string;
    excerpt?: string;
    featuredImage?: string;
    categoryId?: Id<'categories'>;
    status: 'draft' | 'published' | 'scheduled';
    scheduledFor?: number;
    seo: {
      metaTitle?: string;
      metaDescription?: string;
      ogImage?: string;
      noindex?: boolean;
    };
  };
  onSubmit: (data: {
    title: string;
    slug: string;
    content: string;
    excerpt?: string;
    featuredImage?: string;
    categoryId?: Id<'categories'>;
    status: 'draft' | 'published' | 'scheduled';
    scheduledFor?: number;
    seo: {
      metaTitle?: string;
      metaDescription?: string;
      ogImage?: string;
      noindex?: boolean;
    };
  }) => void;
  isSubmitting?: boolean;
}

export function BlogEditor({
  initialData,
  onSubmit,
  isSubmitting = false,
}: BlogEditorProps) {
  // Form state
  const [title, setTitle] = useState(initialData?.title || '');
  const [slug, setSlug] = useState(initialData?.slug || '');
  const [content, setContent] = useState(initialData?.content || '');
  const [excerpt, setExcerpt] = useState(initialData?.excerpt || '');
  const [featuredImage, setFeaturedImage] = useState(
    initialData?.featuredImage || '',
  );
  const [categoryId, setCategoryId] = useState<Id<'categories'> | undefined>(
    initialData?.categoryId,
  );
  const [status, setStatus] = useState<'draft' | 'published' | 'scheduled'>(
    initialData?.status || 'draft',
  );
  const [scheduledFor, setScheduledFor] = useState(
    initialData?.scheduledFor
      ? new Date(initialData.scheduledFor).toISOString().slice(0, 16)
      : '',
  );

  // SEO state
  const [metaTitle, setMetaTitle] = useState(initialData?.seo.metaTitle || '');
  const [metaDescription, setMetaDescription] = useState(
    initialData?.seo.metaDescription || '',
  );
  const [ogImage, setOgImage] = useState(initialData?.seo.ogImage || '');
  const [noindex, setNoindex] = useState(initialData?.seo.noindex || false);

  // UI state
  const [showPreview, setShowPreview] = useState(true);
  const [isUploadingImage, setIsUploadingImage] = useState(false);
  const textareaRef = useRef<HTMLTextAreaElement>(null);

  // Fetch categories
  const { data: categories } = useQuery(convexQuery(api.categories.list, {}));

  // Auto-generate slug from title
  useEffect(() => {
    if (!initialData && title && !slug) {
      const generatedSlug = title
        .toLowerCase()
        .replace(/[^a-z0-9]+/g, '-')
        .replace(/^-+|-+$/g, '');
      setSlug(generatedSlug);
    }
  }, [title, slug, initialData]);

  // Handle featured image upload
  const handleFeaturedImageUpload = async (
    e: React.ChangeEvent<HTMLInputElement>,
  ) => {
    const file = e.target.files?.[0];
    if (!file) return;

    setIsUploadingImage(true);
    try {
      const formData = new FormData();
      formData.append('file', file);
      formData.append('alt', title || 'Featured image');

      const result = await uploadImageServer({ data: formData });
      const imageUrl = getImageUrl(result.imageId, 'large');
      setFeaturedImage(imageUrl);
    } catch (error) {
      alert(`Error uploading image: ${(error as Error).message}`);
    } finally {
      setIsUploadingImage(false);
    }
  };

  // Handle inline image upload (insert into content)
  const handleInlineImageUpload = async (
    e: React.ChangeEvent<HTMLInputElement>,
  ) => {
    const file = e.target.files?.[0];
    if (!file) return;

    setIsUploadingImage(true);
    try {
      const formData = new FormData();
      formData.append('file', file);
      formData.append('alt', 'Image');

      const result = await uploadImageServer({ data: formData });
      const imageUrl = getImageUrl(result.imageId, 'medium');

      // Insert markdown image syntax at cursor position
      const textarea = textareaRef.current;
      if (textarea) {
        const start = textarea.selectionStart;
        const end = textarea.selectionEnd;
        const markdownImage = `![Image description](${imageUrl})`;
        const newContent =
          content.substring(0, start) + markdownImage + content.substring(end);
        setContent(newContent);

        // Set cursor after inserted image
        setTimeout(() => {
          textarea.focus();
          textarea.setSelectionRange(
            start + markdownImage.length,
            start + markdownImage.length,
          );
        }, 0);
      }
    } catch (error) {
      alert(`Error uploading image: ${(error as Error).message}`);
    } finally {
      setIsUploadingImage(false);
    }
  };

  // Handle form submission
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    // Validation
    if (!title.trim()) {
      alert('Please enter a title');
      return;
    }
    if (!slug.trim()) {
      alert('Please enter a slug');
      return;
    }
    if (!content.trim()) {
      alert('Please enter some content');
      return;
    }

    // Auto-generate excerpt if not provided
    const finalExcerpt =
      excerpt ||
      content
        .replace(/[#*`]/g, '')
        .split('\n')
        .filter((line) => line.trim().length > 0)
        .slice(0, 2)
        .join(' ')
        .substring(0, 160);

    onSubmit({
      title,
      slug,
      content,
      excerpt: finalExcerpt,
      featuredImage: featuredImage || undefined,
      categoryId: categoryId || undefined,
      status,
      scheduledFor: scheduledFor ? new Date(scheduledFor).getTime() : undefined,
      seo: {
        metaTitle: metaTitle || undefined,
        metaDescription: metaDescription || undefined,
        ogImage: ogImage || undefined,
        noindex: noindex || undefined,
      },
    });
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-6">
      {/* Title & Slug */}
      <div className="grid gap-6 lg:grid-cols-2">
        <div>
          <Label htmlFor="title">
            Title <span className="text-red-500">*</span>
          </Label>
          <Input
            id="title"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            placeholder="Enter post title"
            className="mt-2"
            required
          />
        </div>
        <div>
          <Label htmlFor="slug">
            Slug <span className="text-red-500">*</span>
          </Label>
          <Input
            id="slug"
            value={slug}
            onChange={(e) => setSlug(e.target.value)}
            placeholder="post-url-slug"
            className="mt-2"
            required
          />
          <p className="mt-1 text-muted-foreground text-xs">
            URL: /blog/{slug || 'post-slug'}
          </p>
        </div>
      </div>

      {/* Content Editor with Preview */}
      <div>
        <div className="mb-3 flex items-center justify-between">
          <Label htmlFor="content">
            Content <span className="text-red-500">*</span>
          </Label>
          <div className="flex items-center gap-2">
            <input
              type="file"
              id="inline-image-upload"
              accept="image/*"
              className="hidden"
              onChange={handleInlineImageUpload}
              disabled={isUploadingImage}
            />
            <Button
              type="button"
              variant="outline"
              size="sm"
              className="gap-2"
              onClick={() =>
                document.getElementById('inline-image-upload')?.click()
              }
              disabled={isUploadingImage}
            >
              {isUploadingImage ? (
                <HugeiconsIcon
                  icon={Loading01Icon}
                  size={16}
                  strokeWidth={2}
                  className="animate-spin"
                />
              ) : (
                <HugeiconsIcon icon={Image01Icon} size={16} strokeWidth={2} />
              )}
              Insert Image
            </Button>
            <Button
              type="button"
              variant="outline"
              size="sm"
              className="gap-2"
              onClick={() => setShowPreview(!showPreview)}
            >
              {showPreview ? (
                <>
                  <HugeiconsIcon icon={ViewOffIcon} size={16} strokeWidth={2} />
                  Hide Preview
                </>
              ) : (
                <>
                  <HugeiconsIcon icon={ViewIcon} size={16} strokeWidth={2} />
                  Show Preview
                </>
              )}
            </Button>
          </div>
        </div>
        <div className="grid gap-4 lg:grid-cols-2">
          {/* Markdown Editor */}
          <div>
            <Textarea
              ref={textareaRef}
              id="content"
              value={content}
              onChange={(e) => setContent(e.target.value)}
              placeholder="Write your post content in Markdown..."
              className="min-h-125 font-mono text-sm"
              required
            />
          </div>

          {/* Preview */}
          {showPreview && (
            <div className="rounded-lg bg-card p-6 ring-1 ring-foreground/10">
              <div className="prose prose-sm dark:prose-invert max-w-none">
                <Suspense
                  fallback={
                    <div className="flex items-center gap-2 text-muted-foreground">
                      <HugeiconsIcon
                        icon={Loading01Icon}
                        size={16}
                        strokeWidth={2}
                        className="animate-spin"
                      />
                      Loading preview...
                    </div>
                  }
                >
                  <MarkdownPreview
                    content={content || '*Preview will appear here...*'}
                  />
                </Suspense>
              </div>
            </div>
          )}
        </div>
      </div>

      {/* Excerpt */}
      <div>
        <Label htmlFor="excerpt">Excerpt (Optional)</Label>
        <Textarea
          id="excerpt"
          value={excerpt}
          onChange={(e) => setExcerpt(e.target.value)}
          placeholder="Brief summary (auto-generated if empty)"
          className="mt-2"
          rows={3}
        />
      </div>

      {/* Featured Image & Category */}
      <div className="grid gap-6 lg:grid-cols-2">
        <div>
          <Label htmlFor="featured-image">Featured Image</Label>
          <div className="mt-2 space-y-3">
            <input
              type="file"
              id="featured-image-upload"
              accept="image/*"
              className="hidden"
              onChange={handleFeaturedImageUpload}
              disabled={isUploadingImage}
            />
            <Button
              type="button"
              variant="outline"
              className="w-full gap-2"
              onClick={() =>
                document.getElementById('featured-image-upload')?.click()
              }
              disabled={isUploadingImage}
            >
              {isUploadingImage ? (
                <HugeiconsIcon
                  icon={Loading01Icon}
                  size={16}
                  strokeWidth={2}
                  className="animate-spin"
                />
              ) : (
                <HugeiconsIcon icon={Image01Icon} size={16} strokeWidth={2} />
              )}
              Upload Featured Image
            </Button>
            {featuredImage && (
              <div className="relative">
                <img
                  src={featuredImage}
                  alt="Featured"
                  className="w-full rounded-lg object-cover ring-1 ring-foreground/10"
                />
                <Button
                  type="button"
                  variant="destructive"
                  size="sm"
                  className="absolute top-2 right-2"
                  onClick={() => setFeaturedImage('')}
                >
                  Remove
                </Button>
              </div>
            )}
          </div>
        </div>

        <div>
          <Label htmlFor="category">Category</Label>
          <Select
            value={categoryId || ''}
            onValueChange={(value) =>
              setCategoryId(value ? (value as Id<'categories'>) : undefined)
            }
          >
            <SelectTrigger className="mt-2">
              <SelectValue />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="">None</SelectItem>
              {categories?.map((cat) => (
                <SelectItem key={cat._id} value={cat._id}>
                  {cat.name}
                </SelectItem>
              ))}
            </SelectContent>
          </Select>
        </div>
      </div>

      {/* Publishing Options */}
      <div className="space-y-4 rounded-lg bg-card p-6 ring-1 ring-foreground/10">
        <h3 className="font-semibold text-lg">Publishing</h3>
        <div className="grid gap-6 lg:grid-cols-2">
          <div>
            <Label htmlFor="status">Status</Label>
            <Select
              value={status}
              onValueChange={(value) =>
                setStatus(value as 'draft' | 'published' | 'scheduled')
              }
            >
              <SelectTrigger className="mt-2">
                <SelectValue />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="draft">Draft</SelectItem>
                <SelectItem value="published">Published</SelectItem>
                <SelectItem value="scheduled">Scheduled</SelectItem>
              </SelectContent>
            </Select>
          </div>

          {status === 'scheduled' && (
            <div>
              <Label htmlFor="scheduledFor">Schedule For</Label>
              <Input
                id="scheduledFor"
                type="datetime-local"
                value={scheduledFor}
                onChange={(e) => setScheduledFor(e.target.value)}
                className="mt-2"
              />
            </div>
          )}
        </div>
      </div>

      {/* SEO Section (Accordion) */}
      <Accordion className="w-full">
        <AccordionItem value="seo">
          <AccordionTrigger>SEO Settings (Optional)</AccordionTrigger>
          <AccordionContent>
            <div className="space-y-4 pt-4">
              <div>
                <Label htmlFor="metaTitle">Meta Title</Label>
                <Input
                  id="metaTitle"
                  value={metaTitle}
                  onChange={(e) => setMetaTitle(e.target.value)}
                  placeholder={title || 'Defaults to post title'}
                  className="mt-2"
                />
              </div>

              <div>
                <Label htmlFor="metaDescription">Meta Description</Label>
                <Textarea
                  id="metaDescription"
                  value={metaDescription}
                  onChange={(e) => setMetaDescription(e.target.value)}
                  placeholder="Defaults to excerpt"
                  className="mt-2"
                  rows={3}
                />
              </div>

              <div>
                <Label htmlFor="ogImage">Open Graph Image URL</Label>
                <Input
                  id="ogImage"
                  value={ogImage}
                  onChange={(e) => setOgImage(e.target.value)}
                  placeholder="Defaults to featured image"
                  className="mt-2"
                />
              </div>

              <div className="flex items-center gap-2">
                <input
                  id="noindex"
                  type="checkbox"
                  checked={noindex}
                  onChange={(e) => setNoindex(e.target.checked)}
                  className="h-4 w-4 rounded ring-1 ring-foreground/10"
                />
                <Label htmlFor="noindex" className="cursor-pointer">
                  Exclude from search engines (noindex)
                </Label>
              </div>
            </div>
          </AccordionContent>
        </AccordionItem>
      </Accordion>

      {/* Submit Buttons */}
      <div className="flex items-center justify-end gap-3 border-t pt-6 ring-1 ring-foreground/10">
        <Button
          type="submit"
          size="lg"
          disabled={isSubmitting}
          className="gap-2"
        >
          {isSubmitting ? (
            <>
              <HugeiconsIcon
                icon={Loading01Icon}
                size={16}
                strokeWidth={2}
                className="animate-spin"
              />
              Saving...
            </>
          ) : (
            <>
              <HugeiconsIcon icon={FloppyDiskIcon} size={16} strokeWidth={2} />
              {initialData ? 'Update Post' : 'Create Post'}
            </>
          )}
        </Button>
      </div>
    </form>
  );
}
