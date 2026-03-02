import Image from 'next/image';
import type { ReactNode } from 'react';

export interface ImageBlockProps {
  src: string;
  alt: string;
  caption?: string;
  priority?: boolean;
  aspectRatio?: 'video' | 'square' | 'portrait' | 'auto';
  className?: string;
  /** When set, the image becomes a link to this URL (opens in new tab) */
  href?: string;
}

/**
 * Optimized image component using next/image
 * Features:
 * - Automatic optimization and WebP/AVIF conversion
 * - Responsive sizing
 * - Lazy loading by default
 * - Optional captions
 * - Rounded corners
 * - Multiple aspect ratios
 */
export default function ImageBlock({
  src,
  alt,
  caption,
  priority = false,
  aspectRatio = 'video',
  className = '',
  href,
}: ImageBlockProps) {
  const linkProps = href
    ? { href, target: '_blank' as const, rel: 'noopener noreferrer' }
    : null;

  const wrap = (content: ReactNode) =>
    linkProps ? (
      <a {...linkProps} className="block focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-400 rounded-lg">
        {content}
      </a>
    ) : (
      content
    );
  // Determine aspect ratio class
  const aspectClass = {
    video: 'aspect-video',      // 16:9
    square: 'aspect-square',    // 1:1
    portrait: 'aspect-[3/4]',   // 3:4
    auto: '',                    // Natural dimensions
  }[aspectRatio];

  // For 'auto' aspect ratio, use uncontained layout with explicit dimensions
  if (aspectRatio === 'auto') {
    return wrap(
      <figure className={`my-6 ${className}`}>
        <div className="rounded-lg overflow-hidden bg-gray-100 shadow-sm">
          <Image
            src={src}
            alt={alt}
            width={1200}
            height={800}
            className="rounded-lg w-full h-auto"
            sizes="(max-width: 640px) 100vw, (max-width: 1024px) 90vw, 896px"
            priority={priority}
            quality={85}
            loading={priority ? 'eager' : 'lazy'}
            style={{ objectFit: 'contain' }}
          />
        </div>
        {caption && (
          <figcaption className="mt-3 text-sm text-gray-600 text-center leading-relaxed">
            {caption}
          </figcaption>
        )}
      </figure>
    );
  }

  return wrap(
    <figure className={`my-6 ${className}`}>
      <div
        className={`relative w-full ${aspectClass} rounded-lg overflow-hidden bg-gray-100 shadow-sm`}
      >
        <Image
          src={src}
          alt={alt}
          fill
          className="object-cover"
          sizes="(max-width: 640px) 100vw, (max-width: 1024px) 90vw, 896px"
          priority={priority}
          quality={85}
          loading={priority ? 'eager' : 'lazy'}
        />
      </div>
      {caption && (
        <figcaption className="mt-3 text-sm text-gray-600 text-center leading-relaxed">
          {caption}
        </figcaption>
      )}
    </figure>
  );
}
