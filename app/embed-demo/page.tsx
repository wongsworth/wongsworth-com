import EmbedYouTube from '@/components/embeds/EmbedYouTube';
import EmbedX from '@/components/embeds/EmbedX';
import EmbedInstagram from '@/components/embeds/EmbedInstagram';

export const metadata = {
  title: 'Embed Components Demo | Wongsworth',
  description: 'Demonstration of responsive social media and video embed components',
};

export default function EmbedDemoPage() {
  return (
    <div className="container-custom py-12 md:py-20">
      <div className="mb-12">
        <h1 className="text-4xl md:text-5xl font-bold mb-4">Embed Components Demo</h1>
        <p className="text-lg text-gray-700">
          Responsive, lazy-loaded embeds with accessible fallbacks
        </p>
      </div>

      {/* YouTube Section */}
      <section className="mb-16">
        <h2 className="text-3xl font-bold mb-4">YouTube Embed</h2>
        <p className="text-gray-700 mb-6">
          16:9 responsive video player with lazy loading and fallback support.
        </p>
        
        <div className="bg-gray-50 p-6 rounded-lg mb-6">
          <h3 className="font-semibold mb-2">Usage Example:</h3>
          <pre className="bg-gray-900 text-gray-100 p-4 rounded overflow-x-auto text-sm">
{`<EmbedYouTube 
  url="https://www.youtube.com/watch?v=dQw4w9WgXcQ" 
  title="Example Video"
/>`}
          </pre>
        </div>

        <div className="border border-gray-200 rounded-lg p-6">
          <EmbedYouTube 
            url="https://www.youtube.com/watch?v=dQw4w9WgXcQ" 
            title="Rick Astley - Never Gonna Give You Up"
          />
        </div>

        <div className="mt-4 text-sm text-gray-600">
          <strong>Features:</strong>
          <ul className="list-disc list-inside mt-2 space-y-1">
            <li>Lazy loads when scrolled into view (100px margin)</li>
            <li>Reserved 16:9 aspect ratio prevents layout shift</li>
            <li>Play button placeholder during load</li>
            <li>Accessible fallback link if embed fails</li>
            <li>Works with multiple URL formats</li>
          </ul>
        </div>
      </section>

      {/* X (Twitter) Section */}
      <section className="mb-16">
        <h2 className="text-3xl font-bold mb-4">X (Twitter) Embed</h2>
        <p className="text-gray-700 mb-6">
          Social post embed with privacy controls and error handling.
        </p>
        
        <div className="bg-gray-50 p-6 rounded-lg mb-6">
          <h3 className="font-semibold mb-2">Usage Example:</h3>
          <pre className="bg-gray-900 text-gray-100 p-4 rounded overflow-x-auto text-sm">
{`<EmbedX url="https://x.com/username/status/1234567890" />`}
          </pre>
        </div>

        <div className="border border-gray-200 rounded-lg p-6">
          <p className="text-gray-600 italic text-center py-12">
            Replace with your actual X post URL to see it embedded here
          </p>
          {/* Uncomment and add a real tweet URL to test:
          <EmbedX url="https://x.com/your_handle/status/your_tweet_id" />
          */}
        </div>

        <div className="mt-4 text-sm text-gray-600">
          <strong>Features:</strong>
          <ul className="list-disc list-inside mt-2 space-y-1">
            <li>Lazy loads Twitter widgets script (only once per page)</li>
            <li>Reserved minimum height prevents layout shift</li>
            <li>Privacy-friendly with Do Not Track enabled</li>
            <li>10-second timeout with fallback to direct link</li>
            <li>X logo placeholder during load</li>
          </ul>
        </div>
      </section>

      {/* Instagram Section */}
      <section className="mb-16">
        <h2 className="text-3xl font-bold mb-4">Instagram Embed</h2>
        <p className="text-gray-700 mb-6">
          Photo post embed with caption and metadata display.
        </p>
        
        <div className="bg-gray-50 p-6 rounded-lg mb-6">
          <h3 className="font-semibold mb-2">Usage Example:</h3>
          <pre className="bg-gray-900 text-gray-100 p-4 rounded overflow-x-auto text-sm">
{`<EmbedInstagram url="https://www.instagram.com/p/POST_ID/" />`}
          </pre>
        </div>

        <div className="border border-gray-200 rounded-lg p-6">
          <p className="text-gray-600 italic text-center py-12">
            Replace with your actual Instagram post URL to see it embedded here
          </p>
          {/* Uncomment and add a real Instagram URL to test:
          <EmbedInstagram url="https://www.instagram.com/p/your_post_id/" />
          */}
        </div>

        <div className="mt-4 text-sm text-gray-600">
          <strong>Features:</strong>
          <ul className="list-disc list-inside mt-2 space-y-1">
            <li>Lazy loads Instagram embed script (only once per page)</li>
            <li>Reserved minimum height prevents layout shift</li>
            <li>Centered with max-width for optimal display</li>
            <li>10-second timeout with fallback to direct link</li>
            <li>Instagram logo placeholder during load</li>
          </ul>
        </div>
      </section>

      {/* Performance Section */}
      <section className="mb-16 bg-blue-50 p-8 rounded-lg">
        <h2 className="text-2xl font-bold mb-4">Performance Characteristics</h2>
        
        <div className="grid md:grid-cols-3 gap-6">
          <div>
            <h3 className="font-semibold mb-2">Initial Load</h3>
            <p className="text-sm text-gray-700">
              0 KB - No external scripts loaded until embeds scroll into view
            </p>
          </div>
          
          <div>
            <h3 className="font-semibold mb-2">Lazy Loading</h3>
            <p className="text-sm text-gray-700">
              Scripts load when embed is 100px from viewport edge
            </p>
          </div>
          
          <div>
            <h3 className="font-semibold mb-2">Layout Stability</h3>
            <p className="text-sm text-gray-700">
              Reserved space prevents Cumulative Layout Shift (CLS)
            </p>
          </div>
        </div>

        <div className="mt-6 p-4 bg-white rounded border border-blue-200">
          <h3 className="font-semibold mb-2">Core Web Vitals Impact</h3>
          <ul className="text-sm text-gray-700 space-y-1">
            <li>✅ <strong>LCP:</strong> No impact - embeds lazy load</li>
            <li>✅ <strong>CLS:</strong> Prevented by reserved space</li>
            <li>✅ <strong>FID:</strong> Minimal - scripts load async</li>
          </ul>
        </div>
      </section>

      {/* Accessibility Section */}
      <section className="mb-16">
        <h2 className="text-2xl font-bold mb-4">Accessibility Features</h2>
        
        <div className="space-y-4">
          <div className="border-l-4 border-green-500 pl-4">
            <h3 className="font-semibold">Fallback Links</h3>
            <p className="text-sm text-gray-700">
              If JavaScript is disabled or embed fails, users get a direct link to the content
            </p>
          </div>
          
          <div className="border-l-4 border-green-500 pl-4">
            <h3 className="font-semibold">ARIA Labels</h3>
            <p className="text-sm text-gray-700">
              All iframes and interactive elements have proper accessibility labels
            </p>
          </div>
          
          <div className="border-l-4 border-green-500 pl-4">
            <h3 className="font-semibold">Keyboard Navigation</h3>
            <p className="text-sm text-gray-700">
              All embeds are fully keyboard accessible
            </p>
          </div>
          
          <div className="border-l-4 border-green-500 pl-4">
            <h3 className="font-semibold">Error States</h3>
            <p className="text-sm text-gray-700">
              Clear error messages with alternative ways to access content
            </p>
          </div>
        </div>
      </section>

      {/* Documentation Link */}
      <section className="bg-gray-50 p-8 rounded-lg text-center">
        <h2 className="text-2xl font-bold mb-4">Full Documentation</h2>
        <p className="text-gray-700 mb-6">
          For complete usage examples, troubleshooting, and advanced features,
          see the documentation file.
        </p>
        <code className="bg-gray-900 text-gray-100 px-4 py-2 rounded inline-block">
          EMBED-COMPONENTS.md
        </code>
      </section>
    </div>
  );
}
