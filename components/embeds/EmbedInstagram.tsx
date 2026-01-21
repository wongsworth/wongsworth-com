'use client';

import { useEffect, useRef, useState } from 'react';

interface EmbedInstagramProps {
  url: string;
}

export default function EmbedInstagram({ url }: EmbedInstagramProps) {
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
      const existingScript = document.querySelector('script[src="https://www.instagram.com/embed.js"]');
      
      if (existingScript) {
        // Script already loaded, just process the widget
        if ((window as any).instgrm?.Embeds) {
          (window as any).instgrm.Embeds.process();
          setIsLoaded(true);
        }
      } else {
        // Load the script
        const script = document.createElement('script');
        script.src = 'https://www.instagram.com/embed.js';
        script.async = true;
        script.onload = () => {
          if ((window as any).instgrm?.Embeds) {
            (window as any).instgrm.Embeds.process();
          }
          setIsLoaded(true);
        };
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
      <div className="my-6 w-full min-h-[500px] max-w-xl mx-auto bg-gray-100 rounded-lg flex flex-col items-center justify-center p-6 text-center border border-gray-200">
        <svg 
          className="w-12 h-12 text-gray-400 mb-3" 
          fill="currentColor" 
          viewBox="0 0 24 24"
          aria-hidden="true"
        >
          <path d="M12 2c2.717 0 3.056.01 4.122.06 1.065.05 1.79.217 2.428.465.66.254 1.216.598 1.772 1.153a4.908 4.908 0 0 1 1.153 1.772c.247.637.415 1.363.465 2.428.047 1.066.06 1.405.06 4.122 0 2.717-.01 3.056-.06 4.122-.05 1.065-.218 1.79-.465 2.428a4.883 4.883 0 0 1-1.153 1.772 4.915 4.915 0 0 1-1.772 1.153c-.637.247-1.363.415-2.428.465-1.066.047-1.405.06-4.122.06-2.717 0-3.056-.01-4.122-.06-1.065-.05-1.79-.218-2.428-.465a4.89 4.89 0 0 1-1.772-1.153 4.904 4.904 0 0 1-1.153-1.772c-.248-.637-.415-1.363-.465-2.428C2.013 15.056 2 14.717 2 12c0-2.717.01-3.056.06-4.122.05-1.066.217-1.79.465-2.428a4.88 4.88 0 0 1 1.153-1.772A4.897 4.897 0 0 1 5.45 2.525c.638-.248 1.362-.415 2.428-.465C8.944 2.013 9.283 2 12 2zm0 5a5 5 0 1 0 0 10 5 5 0 0 0 0-10zm6.5-.25a1.25 1.25 0 0 0-2.5 0 1.25 1.25 0 0 0 2.5 0zM12 9a3 3 0 1 1 0 6 3 3 0 0 1 0-6z"/>
        </svg>
        <p className="text-gray-700 mb-3">Unable to load Instagram post</p>
        <a 
          href={url}
          target="_blank"
          rel="noopener noreferrer"
          className="text-blue-600 hover:text-blue-800 underline"
        >
          View post on Instagram →
        </a>
      </div>
    );
  }

  return (
    <div ref={ref} className="my-6">
      {/* Reserved space prevents layout shift */}
      <div className="w-full min-h-[500px] max-w-xl mx-auto flex items-center justify-center">
        {isVisible ? (
          <blockquote
            className="instagram-media"
            data-instgrm-captioned
            data-instgrm-permalink={url}
            data-instgrm-version="14"
            style={{
              background: '#FFF',
              border: 0,
              borderRadius: '3px',
              boxShadow: '0 0 1px 0 rgba(0,0,0,0.5),0 1px 10px 0 rgba(0,0,0,0.15)',
              margin: '1px',
              maxWidth: '540px',
              minWidth: '326px',
              padding: 0,
              width: 'calc(100% - 2px)',
            }}
          >
            <a href={url} target="_blank" rel="noopener noreferrer">
              View this post on Instagram
            </a>
          </blockquote>
        ) : (
          // Placeholder
          <div className="w-full min-h-[500px] max-w-xl bg-gray-100 rounded-lg flex flex-col items-center justify-center border border-gray-200">
            <svg 
              className="w-12 h-12 text-gray-400 mb-2 animate-pulse" 
              fill="currentColor" 
              viewBox="0 0 24 24"
              aria-hidden="true"
            >
              <path d="M12 2c2.717 0 3.056.01 4.122.06 1.065.05 1.79.217 2.428.465.66.254 1.216.598 1.772 1.153a4.908 4.908 0 0 1 1.153 1.772c.247.637.415 1.363.465 2.428.047 1.066.06 1.405.06 4.122 0 2.717-.01 3.056-.06 4.122-.05 1.065-.218 1.79-.465 2.428a4.883 4.883 0 0 1-1.153 1.772 4.915 4.915 0 0 1-1.772 1.153c-.637.247-1.363.415-2.428.465-1.066.047-1.405.06-4.122.06-2.717 0-3.056-.01-4.122-.06-1.065-.05-1.79-.218-2.428-.465a4.89 4.89 0 0 1-1.772-1.153 4.904 4.904 0 0 1-1.153-1.772c-.248-.637-.415-1.363-.465-2.428C2.013 15.056 2 14.717 2 12c0-2.717.01-3.056.06-4.122.05-1.066.217-1.79.465-2.428a4.88 4.88 0 0 1 1.153-1.772A4.897 4.897 0 0 1 5.45 2.525c.638-.248 1.362-.415 2.428-.465C8.944 2.013 9.283 2 12 2zm0 5a5 5 0 1 0 0 10 5 5 0 0 0 0-10zm6.5-.25a1.25 1.25 0 0 0-2.5 0 1.25 1.25 0 0 0 2.5 0zM12 9a3 3 0 1 1 0 6 3 3 0 0 1 0-6z"/>
            </svg>
            <span className="text-gray-500 text-sm">Loading Instagram post...</span>
          </div>
        )}
      </div>
      {/* Accessible fallback for no-JS */}
      <noscript>
        <a 
          href={url}
          target="_blank"
          rel="noopener noreferrer"
          className="block mt-2 text-blue-600 hover:text-blue-800 underline text-sm text-center"
        >
          View post on Instagram
        </a>
      </noscript>
    </div>
  );
}
