import { Image as UnpicImage } from '@unpic/react';

// Cloudflare account hash for public image delivery URLs
const ACCOUNT_HASH = 'uIVQ6NXJhv6uJPgWapIyVQ';

// Named variant widths configured in Cloudflare dashboard
const VARIANT_WIDTHS = {
  thumbnail: 400,
  medium: 800,
  large: 1200,
} as const;

type Variant = keyof typeof VARIANT_WIDTHS;

// Base props shared by all layouts
interface BaseImageProps {
  src: string;
  alt: string;
  /**
   * Cloudflare Images variant to use (thumbnail: 400px, medium: 800px, large: 1200px)
   * @default 'large' for constrained/fullWidth, based on width for fixed
   */
  variant?: Variant;
  priority?: boolean;
  className?: string;
}

interface FixedImageProps extends BaseImageProps {
  layout: 'fixed';
  width: number;
  height: number;
}

interface ConstrainedImageProps extends BaseImageProps {
  layout?: 'constrained';
  width: number;
  height: number;
}

interface FullWidthImageProps extends BaseImageProps {
  layout: 'fullWidth';
  aspectRatio?: number;
  height?: number;
}

type ImageProps = FixedImageProps | ConstrainedImageProps | FullWidthImageProps;

/**
 * Get Cloudflare Images URL with named variant
 */
function getCloudflareUrl(imageId: string, variant: Variant): string {
  return `https://imagedelivery.net/${ACCOUNT_HASH}/${imageId}/${variant}`;
}

/**
 * Select best variant based on requested width
 */
function selectVariant(width: number): Variant {
  if (width <= VARIANT_WIDTHS.thumbnail) return 'thumbnail';
  if (width <= VARIANT_WIDTHS.medium) return 'medium';
  return 'large';
}

/**
 * Generate srcset for responsive images using Cloudflare named variants
 */
function generateSrcset(imageId: string, maxWidth: number): string {
  const variants: Array<{ variant: Variant; width: number }> = [];

  // Include variants up to maxWidth * 2 (for retina)
  const maxSrcsetWidth = maxWidth * 2;

  if (VARIANT_WIDTHS.thumbnail <= maxSrcsetWidth) {
    variants.push({ variant: 'thumbnail', width: VARIANT_WIDTHS.thumbnail });
  }
  if (VARIANT_WIDTHS.medium <= maxSrcsetWidth) {
    variants.push({ variant: 'medium', width: VARIANT_WIDTHS.medium });
  }
  if (VARIANT_WIDTHS.large <= maxSrcsetWidth) {
    variants.push({ variant: 'large', width: VARIANT_WIDTHS.large });
  }

  // Always include at least one variant
  if (variants.length === 0) {
    variants.push({ variant: 'thumbnail', width: VARIANT_WIDTHS.thumbnail });
  }

  return variants
    .map(
      ({ variant, width }) => `${getCloudflareUrl(imageId, variant)} ${width}w`,
    )
    .join(', ');
}

// Function overloads for type safety at call sites
export function Image(props: FixedImageProps): React.ReactElement;
export function Image(props: ConstrainedImageProps): React.ReactElement;
export function Image(props: FullWidthImageProps): React.ReactElement;
export function Image(props: ImageProps): React.ReactElement {
  const { src, alt, layout = 'constrained', priority, className } = props;

  // Check if src is a Cloudflare image ID (not a full URL)
  const isCloudflareId = !src.startsWith('http');

  // For non-Cloudflare URLs, use unpic directly
  if (!isCloudflareId) {
    if (layout === 'fullWidth') {
      const { aspectRatio, height } = props as FullWidthImageProps;
      return (
        <UnpicImage
          src={src}
          alt={alt}
          layout="fullWidth"
          aspectRatio={aspectRatio}
          height={height}
          priority={priority}
          className={className}
        />
      );
    }

    if (layout === 'fixed') {
      const { width, height } = props as FixedImageProps;
      return (
        <UnpicImage
          src={src}
          alt={alt}
          layout="fixed"
          width={width}
          height={height}
          priority={priority}
          className={className}
        />
      );
    }

    const { width, height } = props as ConstrainedImageProps;
    return (
      <UnpicImage
        src={src}
        alt={alt}
        layout="constrained"
        width={width}
        height={height}
        priority={priority}
        className={className}
      />
    );
  }

  // Handle Cloudflare Images with named variants
  const imageId = src;

  if (layout === 'fixed') {
    const { width, height, variant } = props as FixedImageProps & {
      variant?: Variant;
    };
    const selectedVariant = variant ?? selectVariant(width);

    return (
      <img
        src={getCloudflareUrl(imageId, selectedVariant)}
        alt={alt}
        width={width}
        height={height}
        loading={priority ? 'eager' : 'lazy'}
        decoding="async"
        className={className}
      />
    );
  }

  if (layout === 'fullWidth') {
    const { aspectRatio, height, variant } = props as FullWidthImageProps & {
      variant?: Variant;
    };
    const selectedVariant = variant ?? 'large';

    return (
      <img
        src={getCloudflareUrl(imageId, selectedVariant)}
        srcSet={generateSrcset(imageId, VARIANT_WIDTHS.large)}
        sizes="100vw"
        alt={alt}
        style={aspectRatio ? { aspectRatio: String(aspectRatio) } : undefined}
        height={height}
        loading={priority ? 'eager' : 'lazy'}
        decoding="async"
        className={className}
      />
    );
  }

  // Default: constrained
  const { width, height, variant } = props as ConstrainedImageProps & {
    variant?: Variant;
  };
  const selectedVariant = variant ?? selectVariant(width);

  return (
    <img
      src={getCloudflareUrl(imageId, selectedVariant)}
      srcSet={generateSrcset(imageId, width)}
      sizes={`(max-width: ${width}px) 100vw, ${width}px`}
      alt={alt}
      width={width}
      height={height}
      loading={priority ? 'eager' : 'lazy'}
      decoding="async"
      className={className}
    />
  );
}
