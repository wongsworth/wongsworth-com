'use client';

import { useEffect, useRef, useState } from 'react';

interface EmbedYouTubeProps {
  url: string;
  title?: string;
}

function getYouTubeVideoId(url: string): string | null {
  const patterns = [
    /(?:youtube\.com\/watch\?v=|youtu\.be\/)([^&\n?#]+)/,
    /youtube\.com\/embed\/([^&\n?#]+)/,
  ];

  for (const pattern of patterns) {
    const match = url.match(pattern);
    if (match) return match[1];
  }

  return null;
}

export default function EmbedYouTube({ url, title = "YouTube video" }: EmbedYouTubeProps) {
  const ref = useRef<HTMLDivElement>(null);
  const [isVisible, setIsVisible] = useState(false);
  const [hasError, setHasError] = useState(false);
  const videoId = getYouTubeVideoId(url);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.disconnect();
        }
      },
      {
        rootMargin: '100px', // Start loading earlier for smoother UX
      }
    );

    if (ref.current) {
      observer.observe(ref.current);
    }

    return () => observer.disconnect();
  }, []);

  // Invalid URL - show accessible fallback
  if (!videoId) {
    return (
      <div className="my-6 w-full aspect-video bg-gray-100 rounded-lg flex flex-col items-center justify-center p-6 text-center border border-gray-200">
        <p className="text-gray-700 mb-3">Unable to load YouTube video</p>
        <a 
          href={url}
          target="_blank"
          rel="noopener noreferrer"
          className="text-blue-600 hover:text-blue-800 underline"
        >
          Watch on YouTube →
        </a>
      </div>
    );
  }

  // Error state - show accessible fallback
  if (hasError) {
    return (
      <div className="my-6 w-full aspect-video bg-gray-100 rounded-lg flex flex-col items-center justify-center p-6 text-center border border-gray-200">
        <p className="text-gray-700 mb-3">Failed to load video embed</p>
        <a 
          href={`https://www.youtube.com/watch?v=${videoId}`}
          target="_blank"
          rel="noopener noreferrer"
          className="text-blue-600 hover:text-blue-800 underline"
        >
          Watch on YouTube →
        </a>
      </div>
    );
  }

  return (
    <div ref={ref} className="my-6">
      {/* Reserved space prevents layout shift */}
      <div className="relative w-full aspect-video rounded-lg overflow-hidden bg-gray-900">
        {isVisible ? (
          <iframe
            src={`https://www.youtube.com/embed/${videoId}`}
            title={title}
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
            loading="lazy"
            className="absolute inset-0 w-full h-full border-0"
            onError={() => setHasError(true)}
            aria-label={`YouTube video: ${title}`}
          />
        ) : (
          // Placeholder with play button icon
          <div className="absolute inset-0 flex flex-col items-center justify-center bg-gray-900">
            <svg 
              className="w-16 h-16 text-white opacity-80 mb-2" 
              fill="currentColor" 
              viewBox="0 0 24 24"
              aria-hidden="true"
            >
              <path d="M8 5v14l11-7z"/>
            </svg>
            <span className="text-white text-sm opacity-70">Loading video...</span>
          </div>
        )}
      </div>
      {/* Accessible fallback link */}
      <noscript>
        <a 
          href={`https://www.youtube.com/watch?v=${videoId}`}
          target="_blank"
          rel="noopener noreferrer"
          className="block mt-2 text-blue-600 hover:text-blue-800 underline text-sm"
        >
          Watch video on YouTube
        </a>
      </noscript>
    </div>
  );
}
