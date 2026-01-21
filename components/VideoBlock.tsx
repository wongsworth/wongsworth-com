'use client';

import { useRef, useEffect, useState } from 'react';
import Image from 'next/image';

export interface VideoBlockProps {
  src: string;
  caption?: string;
  poster?: string;
  autoPlay?: boolean;
  loop?: boolean;
  muted?: boolean;
  controls?: boolean;
  aspectRatio?: 'video' | 'square' | 'portrait';
  className?: string;
}

/**
 * Responsive video component for local MP4 files
 * Features:
 * - Responsive container with aspect ratios
 * - Optional poster image
 * - Controls enabled by default
 * - Lazy loading
 * - Optional captions
 * - Rounded corners
 */
export default function VideoBlock({
  src,
  caption,
  poster,
  autoPlay = false,
  loop = false,
  muted = autoPlay, // Auto-mute if autoplay (browser requirement)
  controls = true,
  aspectRatio = 'video',
  className = '',
}: VideoBlockProps) {
  const videoRef = useRef<HTMLVideoElement>(null);
  const containerRef = useRef<HTMLDivElement>(null);
  const [isVisible, setIsVisible] = useState(false);
  const [hasError, setHasError] = useState(false);

  // Lazy loading with Intersection Observer
  useEffect(() => {
    if (!containerRef.current) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.disconnect();
        }
      },
      {
        rootMargin: '100px', // Start loading when 100px from viewport
      }
    );

    observer.observe(containerRef.current);

    return () => observer.disconnect();
  }, []);

  // Determine aspect ratio class
  const aspectClass = {
    video: 'aspect-video',    // 16:9
    square: 'aspect-square',  // 1:1
    portrait: 'aspect-[3/4]', // 3:4
  }[aspectRatio];

  // Error state
  if (hasError) {
    return (
      <figure className={`my-6 ${className}`}>
        <div
          className={`relative w-full ${aspectClass} rounded-lg overflow-hidden bg-gray-100 border border-gray-200 flex flex-col items-center justify-center p-6`}
        >
          <svg
            className="w-12 h-12 text-gray-400 mb-3"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            aria-hidden="true"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M15 10l4.553-2.276A1 1 0 0121 8.618v6.764a1 1 0 01-1.447.894L15 14M5 18h8a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v8a2 2 0 002 2z"
            />
          </svg>
          <p className="text-gray-700 mb-2">Unable to load video</p>
          <a
            href={src}
            target="_blank"
            rel="noopener noreferrer"
            className="text-blue-600 hover:text-blue-800 underline text-sm"
          >
            Download video
          </a>
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
    <figure ref={containerRef} className={`my-6 ${className}`}>
      <div
        className={`relative w-full ${aspectClass} rounded-lg overflow-hidden bg-gray-900 shadow-sm`}
      >
        {isVisible ? (
          <video
            ref={videoRef}
            src={src}
            poster={poster}
            autoPlay={autoPlay}
            loop={loop}
            muted={muted}
            controls={controls}
            playsInline
            preload="metadata"
            className="absolute inset-0 w-full h-full object-cover"
            onError={() => setHasError(true)}
            aria-label={caption || 'Video content'}
          >
            <track kind="captions" />
            Your browser does not support the video tag.
            <a href={src}>Download the video</a>
          </video>
        ) : (
          // Placeholder while video loads
          <div className="absolute inset-0 flex flex-col items-center justify-center bg-gray-900">
            {poster ? (
              <Image
                src={poster}
                alt="Video poster"
                fill
                className="object-cover opacity-70"
                sizes="(max-width: 640px) 100vw, (max-width: 1024px) 90vw, 896px"
              />
            ) : (
              <>
                <svg
                  className="w-16 h-16 text-white opacity-60 mb-2"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                  aria-hidden="true"
                >
                  <path d="M8 5v14l11-7z" />
                </svg>
                <span className="text-white text-sm opacity-70">Loading video...</span>
              </>
            )}
          </div>
        )}
      </div>
      {caption && (
        <figcaption className="mt-3 text-sm text-gray-600 text-center leading-relaxed">
          {caption}
        </figcaption>
      )}
    </figure>
  );
}
