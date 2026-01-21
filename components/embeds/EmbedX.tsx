'use client';

import { useEffect, useRef, useState } from 'react';

interface EmbedXProps {
  url: string;
}

export default function EmbedX({ url }: EmbedXProps) {
  const ref = useRef<HTMLDivElement>(null);
  const [isVisible, setIsVisible] = useState(false);
  const [isLoaded, setIsLoaded] = useState(false);
  const [hasError, setHasError] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.disconnect();
        }
      },
      {
        rootMargin: '100px', // Start loading earlier
      }
    );

    if (ref.current) {
      observer.observe(ref.current);
    }

    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    if (isVisible) {
      // Check if script already exists
      const existingScript = document.querySelector('script[src="https://platform.twitter.com/widgets.js"]');
      
      if (existingScript) {
        // Script already loaded, just process the widget
        if ((window as any).twttr?.widgets) {
          (window as any).twttr.widgets.load();
          setIsLoaded(true);
        }
      } else {
        // Load the script
        const script = document.createElement('script');
        script.src = 'https://platform.twitter.com/widgets.js';
        script.async = true;
        script.onload = () => setIsLoaded(true);
        script.onerror = () => setHasError(true);
        document.body.appendChild(script);
      }

      // Set timeout fallback
      const timeout = setTimeout(() => {
        if (!isLoaded) {
          setHasError(true);
        }
      }, 10000); // 10 second timeout

      return () => clearTimeout(timeout);
    }
  }, [isVisible, isLoaded]);

  // Error state - show accessible fallback
  if (hasError) {
    return (
      <div className="my-6 w-full min-h-[400px] bg-gray-100 rounded-lg flex flex-col items-center justify-center p-6 text-center border border-gray-200">
        <svg 
          className="w-12 h-12 text-gray-400 mb-3" 
          fill="currentColor" 
          viewBox="0 0 24 24"
          aria-hidden="true"
        >
          <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/>
        </svg>
        <p className="text-gray-700 mb-3">Unable to load X post</p>
        <a 
          href={url}
          target="_blank"
          rel="noopener noreferrer"
          className="text-blue-600 hover:text-blue-800 underline"
        >
          View post on X →
        </a>
      </div>
    );
  }

  return (
    <div ref={ref} className="my-6">
      {/* Reserved space prevents layout shift */}
      <div className="w-full min-h-[400px] flex items-center justify-center">
        {isVisible ? (
          <blockquote 
            className="twitter-tweet"
            data-dnt="true" // Privacy-friendly: don't track
            data-theme="light"
          >
            <a href={url}>View post on X</a>
          </blockquote>
        ) : (
          // Placeholder
          <div className="w-full min-h-[400px] bg-gray-100 rounded-lg flex flex-col items-center justify-center border border-gray-200">
            <svg 
              className="w-12 h-12 text-gray-400 mb-2 animate-pulse" 
              fill="currentColor" 
              viewBox="0 0 24 24"
              aria-hidden="true"
            >
              <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/>
            </svg>
            <span className="text-gray-500 text-sm">Loading X post...</span>
          </div>
        )}
      </div>
      {/* Accessible fallback for no-JS */}
      <noscript>
        <a 
          href={url}
          target="_blank"
          rel="noopener noreferrer"
          className="block mt-2 text-blue-600 hover:text-blue-800 underline text-sm"
        >
          View post on X
        </a>
      </noscript>
    </div>
  );
}
