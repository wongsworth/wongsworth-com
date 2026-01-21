import VideoBlock from '@/components/VideoBlock';

export const metadata = {
  title: 'Video Components Demo | Wongsworth',
  description: 'Demonstration of responsive video component for local MP4 files',
};

export default function VideoDemoPage() {
  return (
    <div className="container-custom py-12 md:py-20">
      <div className="mb-12">
        <h1 className="text-4xl md:text-5xl font-bold mb-4">Video Components Demo</h1>
        <p className="text-lg text-gray-700">
          Responsive, lazy-loaded video component for local MP4 files
        </p>
      </div>

      {/* Basic Usage */}
      <section className="mb-16">
        <h2 className="text-3xl font-bold mb-4">VideoBlock Component</h2>
        <p className="text-gray-700 mb-6">
          Optimized video player for local MP4 files with responsive container and controls.
        </p>

        <div className="bg-gray-50 p-6 rounded-lg mb-6">
          <h3 className="font-semibold mb-2">Basic Usage:</h3>
          <pre className="bg-gray-900 text-gray-100 p-4 rounded overflow-x-auto text-sm">
{`<VideoBlock 
  src="/videos/demo.mp4" 
  caption="Product demo video"
/>`}
          </pre>
        </div>

        <div className="border border-gray-200 rounded-lg p-6 bg-white">
          <div className="relative w-full aspect-video bg-gradient-to-br from-blue-100 to-purple-100 rounded-lg flex items-center justify-center">
            <div className="text-center">
              <svg
                className="w-16 h-16 text-gray-600 mx-auto mb-3"
                fill="currentColor"
                viewBox="0 0 24 24"
              >
                <path d="M8 5v14l11-7z" />
              </svg>
              <p className="text-gray-600">
                Add your video to <code className="bg-white px-2 py-1 rounded">/public/videos/</code>
              </p>
            </div>
          </div>
        </div>

        <div className="mt-4 text-sm text-gray-600">
          <strong>Features:</strong>
          <ul className="list-disc list-inside mt-2 space-y-1">
            <li>Lazy loads when scrolled into view (100px margin)</li>
            <li>Reserved aspect ratio prevents layout shift</li>
            <li>Controls enabled by default (play, volume, fullscreen)</li>
            <li>Optional poster image as thumbnail</li>
            <li>Error handling with download fallback</li>
          </ul>
        </div>
      </section>

      {/* Aspect Ratios */}
      <section className="mb-16">
        <h2 className="text-3xl font-bold mb-4">Aspect Ratios</h2>
        
        <div className="grid md:grid-cols-3 gap-6">
          {/* 16:9 */}
          <div>
            <h3 className="font-semibold mb-3">16:9 - Video (default)</h3>
            <div className="bg-gray-50 p-4 rounded-lg mb-3">
              <pre className="text-xs bg-gray-900 text-gray-100 p-3 rounded overflow-x-auto">
{`aspectRatio="video"`}
              </pre>
            </div>
            <div className="relative w-full aspect-video bg-gradient-to-br from-purple-100 to-blue-100 rounded-lg flex items-center justify-center border border-gray-200">
              <p className="text-gray-600 text-sm">16:9</p>
            </div>
            <p className="text-xs text-gray-600 mt-2">Best for landscape videos</p>
          </div>

          {/* 1:1 */}
          <div>
            <h3 className="font-semibold mb-3">1:1 - Square</h3>
            <div className="bg-gray-50 p-4 rounded-lg mb-3">
              <pre className="text-xs bg-gray-900 text-gray-100 p-3 rounded overflow-x-auto">
{`aspectRatio="square"`}
              </pre>
            </div>
            <div className="relative w-full aspect-square bg-gradient-to-br from-green-100 to-emerald-100 rounded-lg flex items-center justify-center border border-gray-200">
              <p className="text-gray-600 text-sm">1:1</p>
            </div>
            <p className="text-xs text-gray-600 mt-2">Instagram-style videos</p>
          </div>

          {/* 3:4 */}
          <div>
            <h3 className="font-semibold mb-3">3:4 - Portrait</h3>
            <div className="bg-gray-50 p-4 rounded-lg mb-3">
              <pre className="text-xs bg-gray-900 text-gray-100 p-3 rounded overflow-x-auto">
{`aspectRatio="portrait"`}
              </pre>
            </div>
            <div className="relative w-full aspect-[3/4] bg-gradient-to-br from-pink-100 to-rose-100 rounded-lg flex items-center justify-center border border-gray-200">
              <p className="text-gray-600 text-sm">3:4</p>
            </div>
            <p className="text-xs text-gray-600 mt-2">Vertical/mobile videos</p>
          </div>
        </div>
      </section>

      {/* Options */}
      <section className="mb-16">
        <h2 className="text-3xl font-bold mb-4">Configuration Options</h2>
        
        <div className="space-y-6">
          {/* With Poster */}
          <div className="border border-gray-200 rounded-lg p-6">
            <h3 className="text-xl font-semibold mb-3">With Poster Image</h3>
            <div className="bg-gray-50 p-4 rounded-lg mb-4">
              <pre className="text-sm bg-gray-900 text-gray-100 p-3 rounded overflow-x-auto">
{`<VideoBlock 
  src="/videos/presentation.mp4"
  poster="/images/video-thumbnail.jpg"
  caption="Conference presentation"
/>`}
              </pre>
            </div>
            <p className="text-sm text-gray-600">
              Shows a thumbnail image before the video plays. Improves perceived performance.
            </p>
          </div>

          {/* Auto-play */}
          <div className="border border-gray-200 rounded-lg p-6">
            <h3 className="text-xl font-semibold mb-3">Auto-playing Background Video</h3>
            <div className="bg-gray-50 p-4 rounded-lg mb-4">
              <pre className="text-sm bg-gray-900 text-gray-100 p-3 rounded overflow-x-auto">
{`<VideoBlock 
  src="/videos/background.mp4"
  autoPlay={true}
  loop={true}
  muted={true}
  controls={false}
/>`}
              </pre>
            </div>
            <p className="text-sm text-gray-600 mb-2">
              Perfect for ambient background videos. Note: browsers require <code className="bg-gray-100 px-1 rounded">muted=true</code> for autoplay.
            </p>
          </div>

          {/* With Caption */}
          <div className="border border-gray-200 rounded-lg p-6">
            <h3 className="text-xl font-semibold mb-3">With Caption</h3>
            <div className="bg-gray-50 p-4 rounded-lg mb-4">
              <pre className="text-sm bg-gray-900 text-gray-100 p-3 rounded overflow-x-auto">
{`<VideoBlock 
  src="/videos/demo.mp4"
  caption="Product walkthrough - 2 minutes"
/>`}
              </pre>
            </div>
            <p className="text-sm text-gray-600">
              Captions provide context and help with SEO. Include video duration for clarity.
            </p>
          </div>
        </div>
      </section>

      {/* File Formats */}
      <section className="mb-16 bg-blue-50 p-8 rounded-lg">
        <h2 className="text-2xl font-bold mb-4">Supported Video Formats</h2>
        
        <div className="grid md:grid-cols-2 gap-6">
          <div>
            <h3 className="font-semibold mb-3 text-green-800">✓ Recommended</h3>
            <div className="bg-white p-4 rounded-lg">
              <p className="font-mono text-sm mb-2">MP4 (H.264 codec)</p>
              <p className="text-sm text-gray-700">
                Best browser support. Universal compatibility across all devices.
              </p>
            </div>
          </div>
          
          <div>
            <h3 className="font-semibold mb-3 text-blue-800">⚠️ Alternative</h3>
            <div className="bg-white p-4 rounded-lg">
              <p className="font-mono text-sm mb-2">WebM</p>
              <p className="text-sm text-gray-700">
                Smaller files, modern browsers. Consider as secondary option.
              </p>
            </div>
          </div>
        </div>

        <div className="mt-6 bg-white p-4 rounded-lg">
          <h3 className="font-semibold mb-2">Video Optimization Command</h3>
          <pre className="bg-gray-900 text-gray-100 p-3 rounded text-xs overflow-x-auto">
{`ffmpeg -i input.mov -c:v libx264 -crf 23 -c:a aac -b:a 128k output.mp4`}
          </pre>
          <p className="text-xs text-gray-600 mt-2">
            Converts videos to web-optimized MP4 format
          </p>
        </div>
      </section>

      {/* Performance */}
      <section className="mb-16">
        <h2 className="text-2xl font-bold mb-4">Performance Optimization</h2>
        
        <div className="grid md:grid-cols-3 gap-6">
          <div className="border border-gray-200 rounded-lg p-6">
            <h3 className="font-semibold mb-2">Lazy Loading</h3>
            <p className="text-sm text-gray-700">
              Videos only load when scrolled into view, saving bandwidth on initial page load.
            </p>
          </div>
          
          <div className="border border-gray-200 rounded-lg p-6">
            <h3 className="font-semibold mb-2">Metadata Preload</h3>
            <p className="text-sm text-gray-700">
              Only loads video dimensions and duration initially, not full video content.
            </p>
          </div>
          
          <div className="border border-gray-200 rounded-lg p-6">
            <h3 className="font-semibold mb-2">Layout Stability</h3>
            <p className="text-sm text-gray-700">
              Reserved aspect ratio container prevents cumulative layout shift (CLS).
            </p>
          </div>
        </div>

        <div className="mt-6 bg-yellow-50 border border-yellow-200 p-6 rounded-lg">
          <h3 className="font-semibold mb-2">Recommended File Sizes</h3>
          <ul className="text-sm space-y-1 text-gray-700">
            <li>• <strong>Short clips (&lt; 30s):</strong> &lt; 5 MB</li>
            <li>• <strong>Medium videos (1-2 min):</strong> &lt; 15 MB</li>
            <li>• <strong>Long videos (&gt; 2 min):</strong> Consider YouTube instead</li>
          </ul>
        </div>
      </section>

      {/* Props Reference */}
      <section className="mb-16">
        <h2 className="text-2xl font-bold mb-4">Props Reference</h2>
        
        <div className="overflow-x-auto">
          <table className="min-w-full bg-white border border-gray-200 rounded-lg">
            <thead className="bg-gray-50">
              <tr>
                <th className="px-4 py-3 text-left text-sm font-semibold">Prop</th>
                <th className="px-4 py-3 text-left text-sm font-semibold">Type</th>
                <th className="px-4 py-3 text-left text-sm font-semibold">Default</th>
                <th className="px-4 py-3 text-left text-sm font-semibold">Description</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-gray-200">
              <tr>
                <td className="px-4 py-3 text-sm font-mono">src</td>
                <td className="px-4 py-3 text-sm">string</td>
                <td className="px-4 py-3 text-sm text-gray-500">required</td>
                <td className="px-4 py-3 text-sm">Video file path from public folder</td>
              </tr>
              <tr>
                <td className="px-4 py-3 text-sm font-mono">caption</td>
                <td className="px-4 py-3 text-sm">string</td>
                <td className="px-4 py-3 text-sm text-gray-500">-</td>
                <td className="px-4 py-3 text-sm">Caption text below video</td>
              </tr>
              <tr>
                <td className="px-4 py-3 text-sm font-mono">poster</td>
                <td className="px-4 py-3 text-sm">string</td>
                <td className="px-4 py-3 text-sm text-gray-500">-</td>
                <td className="px-4 py-3 text-sm">Thumbnail image path</td>
              </tr>
              <tr>
                <td className="px-4 py-3 text-sm font-mono">autoPlay</td>
                <td className="px-4 py-3 text-sm">boolean</td>
                <td className="px-4 py-3 text-sm">false</td>
                <td className="px-4 py-3 text-sm">Auto-play on load (requires muted)</td>
              </tr>
              <tr>
                <td className="px-4 py-3 text-sm font-mono">loop</td>
                <td className="px-4 py-3 text-sm">boolean</td>
                <td className="px-4 py-3 text-sm">false</td>
                <td className="px-4 py-3 text-sm">Loop video continuously</td>
              </tr>
              <tr>
                <td className="px-4 py-3 text-sm font-mono">muted</td>
                <td className="px-4 py-3 text-sm">boolean</td>
                <td className="px-4 py-3 text-sm">autoPlay value</td>
                <td className="px-4 py-3 text-sm">Mute audio</td>
              </tr>
              <tr>
                <td className="px-4 py-3 text-sm font-mono">controls</td>
                <td className="px-4 py-3 text-sm">boolean</td>
                <td className="px-4 py-3 text-sm">true</td>
                <td className="px-4 py-3 text-sm">Show video controls</td>
              </tr>
              <tr>
                <td className="px-4 py-3 text-sm font-mono">aspectRatio</td>
                <td className="px-4 py-3 text-sm">string</td>
                <td className="px-4 py-3 text-sm">&quot;video&quot;</td>
                <td className="px-4 py-3 text-sm">video | square | portrait</td>
              </tr>
            </tbody>
          </table>
        </div>
      </section>

      {/* When to Use */}
      <section className="mb-16">
        <h2 className="text-2xl font-bold mb-4">When to Use VideoBlock vs. YouTube</h2>
        
        <div className="grid md:grid-cols-2 gap-6">
          <div className="border-l-4 border-green-500 pl-4 bg-green-50 p-4 rounded-r">
            <h3 className="font-semibold mb-2 text-green-900">Use VideoBlock for:</h3>
            <ul className="text-sm space-y-1 text-gray-700">
              <li>• Short clips (&lt; 3 minutes)</li>
              <li>• High-quality footage you own</li>
              <li>• Background/ambient videos</li>
              <li>• Content that stays on your site</li>
              <li>• Product demos and tutorials</li>
            </ul>
          </div>
          
          <div className="border-l-4 border-blue-500 pl-4 bg-blue-50 p-4 rounded-r">
            <h3 className="font-semibold mb-2 text-blue-900">Use EmbedYouTube for:</h3>
            <ul className="text-sm space-y-1 text-gray-700">
              <li>• Long-form content (&gt; 3 minutes)</li>
              <li>• Content already on YouTube</li>
              <li>• Lower bandwidth requirements</li>
              <li>• YouTube&apos;s infrastructure benefits</li>
              <li>• Wider device compatibility</li>
            </ul>
          </div>
        </div>
      </section>

      {/* Documentation Link */}
      <section className="bg-gray-50 p-8 rounded-lg text-center">
        <h2 className="text-2xl font-bold mb-4">Full Documentation</h2>
        <p className="text-gray-700 mb-6">
          For complete usage examples, optimization tips, and troubleshooting,
          see the documentation file.
        </p>
        <code className="bg-gray-900 text-gray-100 px-4 py-2 rounded inline-block">
          VIDEO-COMPONENTS.md
        </code>
      </section>
    </div>
  );
}
