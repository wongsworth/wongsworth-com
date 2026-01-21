import ImageBlock, { ImageBlockProps } from './ImageBlock';

interface ImageGalleryProps {
  images: ImageBlockProps[];
  columns?: 1 | 2 | 3;
  className?: string;
}

/**
 * Gallery component for displaying multiple images in a grid
 * Responsive: stacks on mobile, grid on desktop
 */
export default function ImageGallery({
  images,
  columns = 2,
  className = '',
}: ImageGalleryProps) {
  const gridClass = {
    1: 'grid-cols-1',
    2: 'grid-cols-1 md:grid-cols-2',
    3: 'grid-cols-1 md:grid-cols-2 lg:grid-cols-3',
  }[columns];

  return (
    <div className={`grid ${gridClass} gap-6 my-6 ${className}`}>
      {images.map((image, index) => (
        <ImageBlock
          key={index}
          {...image}
          className="my-0" // Override default margin in gallery context
        />
      ))}
    </div>
  );
}
