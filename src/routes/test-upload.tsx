import { createFileRoute } from '@tanstack/react-router';
import { createServerFn } from '@tanstack/react-start';
import { useState } from 'react';
import { Button } from '@/components/ui/button';
import {
  getImageUrl,
  IMAGE_VARIANTS,
  type ImageVariant,
  uploadImage,
} from '@/lib/cloudflare-images';

// Server function to handle image upload (runs on server, not client)
const uploadImageServer = createServerFn({ method: 'POST' })
  .inputValidator((data) => {
    if (!(data instanceof FormData)) {
      throw new Error('Expected FormData');
    }

    const file = data.get('file');
    if (!file || !(file instanceof File)) {
      throw new Error('No file provided or invalid file type');
    }

    const alt = data.get('alt')?.toString() || 'Test upload';
    return { file, alt };
  })
  .handler(async ({ data }) => {
    const { file, alt } = data;
    const imageId = await uploadImage(file, { alt, source: 'test-route' });
    return { imageId };
  });

export const Route = createFileRoute('/test-upload')({
  component: TestUpload,
});

function TestUpload() {
  const [uploading, setUploading] = useState(false);
  const [imageId, setImageId] = useState<string | null>(null);
  const [error, setError] = useState<string | null>(null);
  const [selectedVariant, setSelectedVariant] = useState<ImageVariant>('large');

  const handleFileChange = async (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (!file) return;

    setUploading(true);
    setError(null);
    setImageId(null);

    try {
      // Create FormData to send to server function
      const formData = new FormData();
      formData.append('file', file);
      formData.append('alt', 'Test upload');

      // Call server function
      const result = await uploadImageServer({ data: formData });
      setImageId(result.imageId);
      console.log('✅ Upload successful! Image ID:', result.imageId);
    } catch (err) {
      const errorMessage = err instanceof Error ? err.message : 'Unknown error';
      setError(errorMessage);
      console.error('❌ Upload failed:', errorMessage);
    } finally {
      setUploading(false);
    }
  };

  return (
    <div className="mx-auto max-w-4xl px-6 py-20">
      <h1 className="mb-8 font-bold text-4xl">Cloudflare Images Test Upload</h1>

      <div className="space-y-8">
        {/* Upload Section */}
        <div className="rounded-lg border border-border bg-card p-6">
          <h2 className="mb-4 font-semibold text-2xl">Upload Image</h2>
          <input
            type="file"
            accept="image/*"
            onChange={handleFileChange}
            disabled={uploading}
            className="block w-full text-foreground text-sm file:mr-4 file:rounded-lg file:border-0 file:bg-accent file:px-4 file:py-2 file:font-semibold file:text-accent-foreground file:text-sm hover:file:bg-accent/90 disabled:cursor-not-allowed disabled:opacity-50"
          />
          {uploading && (
            <p className="mt-4 text-muted-foreground text-sm">
              Uploading to Cloudflare...
            </p>
          )}
        </div>

        {/* Error Display */}
        {error && (
          <div className="rounded-lg border border-destructive bg-destructive/10 p-6">
            <h3 className="mb-2 font-semibold text-destructive text-lg">
              Upload Error
            </h3>
            <pre className="whitespace-pre-wrap text-destructive/90 text-sm">
              {error}
            </pre>
          </div>
        )}

        {/* Success Display */}
        {imageId && (
          <div className="space-y-6">
            <div className="rounded-lg border border-green-500 bg-green-500/10 p-6">
              <h3 className="mb-2 font-semibold text-green-600 text-lg dark:text-green-400">
                Upload Successful! ✅
              </h3>
              <p className="break-all font-mono text-foreground text-sm">
                Image ID: {imageId}
              </p>
            </div>

            {/* Variant Selector */}
            <div className="rounded-lg border border-border bg-card p-6">
              <h3 className="mb-4 font-semibold text-xl">
                Select Variant to Preview
              </h3>
              <div className="flex flex-wrap gap-2">
                {(Object.keys(IMAGE_VARIANTS) as ImageVariant[]).map(
                  (variant) => (
                    <Button
                      key={variant}
                      onClick={() => setSelectedVariant(variant)}
                      variant={
                        selectedVariant === variant ? 'default' : 'outline'
                      }
                      size="sm"
                    >
                      {variant}
                    </Button>
                  ),
                )}
              </div>
            </div>

            {/* Image Preview */}
            <div className="rounded-lg border border-border bg-card p-6">
              <h3 className="mb-4 font-semibold text-xl">
                Preview: {selectedVariant} variant
              </h3>
              <div className="space-y-4">
                <img
                  src={getImageUrl(imageId, selectedVariant)}
                  alt="Uploaded to Cloudflare Images"
                  className="h-auto max-w-full rounded-lg border border-border"
                  onError={(e) => {
                    console.error(
                      'Image failed to load:',
                      getImageUrl(imageId, selectedVariant),
                    );
                    e.currentTarget.style.border = '2px solid red';
                  }}
                  onLoad={() => {
                    console.log(
                      '✅ Image loaded successfully:',
                      getImageUrl(imageId, selectedVariant),
                    );
                  }}
                />
                <div className="text-muted-foreground text-sm">
                  <p className="mb-1 font-semibold">Image URL:</p>
                  <code className="block break-all rounded bg-muted p-2 text-xs">
                    {getImageUrl(imageId, selectedVariant)}
                  </code>
                </div>
              </div>
            </div>

            {/* All Variants Preview */}
            <div className="rounded-lg border border-border bg-card p-6">
              <h3 className="mb-4 font-semibold text-xl">All Variants</h3>
              <div className="grid gap-6 md:grid-cols-2">
                {(Object.keys(IMAGE_VARIANTS) as ImageVariant[]).map(
                  (variant) => (
                    <div key={variant} className="space-y-2">
                      <h4 className="font-semibold text-sm uppercase tracking-wide">
                        {variant}
                      </h4>
                      <img
                        src={getImageUrl(imageId, variant)}
                        alt={`${variant} variant`}
                        className="h-auto w-full rounded border border-border"
                      />
                      <p className="break-all font-mono text-muted-foreground text-xs">
                        {getImageUrl(imageId, variant)}
                      </p>
                    </div>
                  ),
                )}
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
