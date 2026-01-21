import Image from 'next/image';

export interface ImageBlockProps {
  src: string;
  alt: string;
  caption?: string;
  priority?: boolean;
  aspectRatio?: 'video' | 'square' | 'portrait' | 'auto';
  className?: string;
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
}: ImageBlockProps) {
  // Determine aspect ratio class
  const aspectClass = {
    video: 'aspect-video',      // 16:9
    square: 'aspect-square',    // 1:1
    portrait: 'aspect-[3/4]',   // 3:4
    auto: '',                    // Natural dimensions
  }[aspectRatio];

  // For 'auto' aspect ratio, use uncontained layout with explicit dimensions
  if (aspectRatio === 'auto') {
    return (
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

  return (
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
