import ImageBlock from '@/components/ImageBlock';
import ImageGallery from '@/components/ImageGallery';

export const metadata = {
  title: 'Image Components Demo | Wongsworth',
  description: 'Demonstration of optimized image components with next/image',
};

export default function ImageDemoPage() {
  return (
    <div className="container-custom py-12 md:py-20">
      <div className="mb-12">
        <h1 className="text-4xl md:text-5xl font-bold mb-4">Image Components Demo</h1>
        <p className="text-lg text-gray-700">
          Optimized, responsive images with automatic format conversion and lazy loading
        </p>
      </div>

      {/* ImageBlock Section */}
      <section className="mb-16">
        <h2 className="text-3xl font-bold mb-4">ImageBlock Component</h2>
        <p className="text-gray-700 mb-6">
          Single image component with automatic optimization via Next.js Image.
        </p>

        {/* Basic Usage */}
        <div className="mb-12">
          <h3 className="text-xl font-semibold mb-4">Basic Usage</h3>
          <div className="bg-gray-50 p-6 rounded-lg mb-6">
            <pre className="bg-gray-900 text-gray-100 p-4 rounded overflow-x-auto text-sm">
{`<ImageBlock 
  src="/images/example.jpg" 
  alt="Description" 
/>`}
            </pre>
          </div>
          
          <div className="border border-gray-200 rounded-lg p-6 bg-white">
            <div className="bg-gradient-to-br from-blue-100 to-purple-100 rounded-lg p-12 text-center">
              <p className="text-gray-600 italic">
                Add your image to <code className="bg-white px-2 py-1 rounded">/public/images/</code> to see it here
              </p>
            </div>
          </div>
        </div>

        {/* With Caption */}
        <div className="mb-12">
          <h3 className="text-xl font-semibold mb-4">With Caption</h3>
          <div className="bg-gray-50 p-6 rounded-lg mb-6">
            <pre className="bg-gray-900 text-gray-100 p-4 rounded overflow-x-auto text-sm">
{`<ImageBlock 
  src="/images/photo.jpg" 
  alt="Conference presentation"
  caption="Speaking at React Conf 2024"
/>`}
            </pre>
          </div>
          
          <div className="border border-gray-200 rounded-lg p-6 bg-white">
            <div className="relative w-full aspect-video bg-gradient-to-br from-green-100 to-blue-100 rounded-lg flex items-center justify-center">
              <p className="text-gray-600">Image placeholder</p>
            </div>
            <p className="mt-3 text-sm text-gray-600 text-center leading-relaxed">
              Example caption text would appear here
            </p>
          </div>
        </div>

        {/* Aspect Ratios */}
        <div className="mb-12">
          <h3 className="text-xl font-semibold mb-4">Different Aspect Ratios</h3>
          
          <div className="grid md:grid-cols-2 gap-6">
            {/* 16:9 Video */}
            <div>
              <h4 className="font-medium mb-2">16:9 - Video (default)</h4>
              <div className="bg-gray-50 p-4 rounded-lg mb-3">
                <pre className="text-xs bg-gray-900 text-gray-100 p-3 rounded overflow-x-auto">
{`aspectRatio="video"`}
                </pre>
              </div>
              <div className="relative w-full aspect-video bg-gradient-to-br from-purple-100 to-pink-100 rounded-lg flex items-center justify-center border border-gray-200">
                <p className="text-gray-600 text-sm">16:9</p>
              </div>
            </div>

            {/* 1:1 Square */}
            <div>
              <h4 className="font-medium mb-2">1:1 - Square</h4>
              <div className="bg-gray-50 p-4 rounded-lg mb-3">
                <pre className="text-xs bg-gray-900 text-gray-100 p-3 rounded overflow-x-auto">
{`aspectRatio="square"`}
                </pre>
              </div>
              <div className="relative w-full aspect-square bg-gradient-to-br from-yellow-100 to-orange-100 rounded-lg flex items-center justify-center border border-gray-200">
                <p className="text-gray-600 text-sm">1:1</p>
              </div>
            </div>

            {/* 3:4 Portrait */}
            <div>
              <h4 className="font-medium mb-2">3:4 - Portrait</h4>
              <div className="bg-gray-50 p-4 rounded-lg mb-3">
                <pre className="text-xs bg-gray-900 text-gray-100 p-3 rounded overflow-x-auto">
{`aspectRatio="portrait"`}
                </pre>
              </div>
              <div className="relative w-full aspect-[3/4] bg-gradient-to-br from-blue-100 to-cyan-100 rounded-lg flex items-center justify-center border border-gray-200">
                <p className="text-gray-600 text-sm">3:4</p>
              </div>
            </div>

            {/* Auto */}
            <div>
              <h4 className="font-medium mb-2">Auto - Natural dimensions</h4>
              <div className="bg-gray-50 p-4 rounded-lg mb-3">
                <pre className="text-xs bg-gray-900 text-gray-100 p-3 rounded overflow-x-auto">
{`aspectRatio="auto"`}
                </pre>
              </div>
              <div className="relative w-full h-48 bg-gradient-to-br from-red-100 to-orange-100 rounded-lg flex items-center justify-center border border-gray-200">
                <p className="text-gray-600 text-sm">Natural size</p>
              </div>
            </div>
          </div>
        </div>

        {/* Features List */}
        <div className="bg-blue-50 p-6 rounded-lg">
          <h3 className="text-lg font-semibold mb-3">Features</h3>
          <ul className="space-y-2 text-sm text-gray-700">
            <li className="flex items-start">
              <span className="text-blue-600 mr-2">✓</span>
              <span><strong>Automatic optimization:</strong> WebP/AVIF conversion, compression</span>
            </li>
            <li className="flex items-start">
              <span className="text-blue-600 mr-2">✓</span>
              <span><strong>Responsive sizing:</strong> Multiple sizes served based on viewport</span>
            </li>
            <li className="flex items-start">
              <span className="text-blue-600 mr-2">✓</span>
              <span><strong>Lazy loading:</strong> Images load as you scroll</span>
            </li>
            <li className="flex items-start">
              <span className="text-blue-600 mr-2">✓</span>
              <span><strong>Layout stability:</strong> Reserved space prevents layout shift</span>
            </li>
            <li className="flex items-start">
              <span className="text-blue-600 mr-2">✓</span>
              <span><strong>Rounded corners:</strong> Professional appearance with shadow</span>
            </li>
            <li className="flex items-start">
              <span className="text-blue-600 mr-2">✓</span>
              <span><strong>Quality 85:</strong> Invisible quality loss, 50-70% smaller files</span>
            </li>
          </ul>
        </div>
      </section>

      {/* ImageGallery Section */}
      <section className="mb-16">
        <h2 className="text-3xl font-bold mb-4">ImageGallery Component</h2>
        <p className="text-gray-700 mb-6">
          Display multiple images in responsive grid layouts.
        </p>

        {/* 2 Columns */}
        <div className="mb-12">
          <h3 className="text-xl font-semibold mb-4">2 Columns (default)</h3>
          <div className="bg-gray-50 p-6 rounded-lg mb-6">
            <pre className="bg-gray-900 text-gray-100 p-4 rounded overflow-x-auto text-sm">
{`<ImageGallery 
  columns={2}
  images={[
    { src: "/images/1.jpg", alt: "Photo 1" },
    { src: "/images/2.jpg", alt: "Photo 2" },
  ]}
/>`}
            </pre>
          </div>
          
          <div className="border border-gray-200 rounded-lg p-6 bg-white">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="relative w-full aspect-video bg-gradient-to-br from-purple-100 to-blue-100 rounded-lg flex items-center justify-center">
                <p className="text-gray-600 text-sm">Image 1</p>
              </div>
              <div className="relative w-full aspect-video bg-gradient-to-br from-pink-100 to-purple-100 rounded-lg flex items-center justify-center">
                <p className="text-gray-600 text-sm">Image 2</p>
              </div>
            </div>
          </div>
        </div>

        {/* 3 Columns */}
        <div className="mb-12">
          <h3 className="text-xl font-semibold mb-4">3 Columns</h3>
          <div className="bg-gray-50 p-6 rounded-lg mb-6">
            <pre className="bg-gray-900 text-gray-100 p-4 rounded overflow-x-auto text-sm">
{`<ImageGallery 
  columns={3}
  images={[...]}
/>`}
            </pre>
          </div>
          
          <div className="border border-gray-200 rounded-lg p-6 bg-white">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              <div className="relative w-full aspect-video bg-gradient-to-br from-green-100 to-emerald-100 rounded-lg flex items-center justify-center">
                <p className="text-gray-600 text-sm">Image 1</p>
              </div>
              <div className="relative w-full aspect-video bg-gradient-to-br from-blue-100 to-cyan-100 rounded-lg flex items-center justify-center">
                <p className="text-gray-600 text-sm">Image 2</p>
              </div>
              <div className="relative w-full aspect-video bg-gradient-to-br from-yellow-100 to-orange-100 rounded-lg flex items-center justify-center">
                <p className="text-gray-600 text-sm">Image 3</p>
              </div>
            </div>
          </div>
        </div>

        {/* Responsive Behavior */}
        <div className="bg-green-50 p-6 rounded-lg">
          <h3 className="text-lg font-semibold mb-3">Responsive Behavior</h3>
          <ul className="space-y-2 text-sm text-gray-700">
            <li className="flex items-start">
              <span className="text-green-600 mr-2">📱</span>
              <span><strong>Mobile:</strong> Always single column (stacked)</span>
            </li>
            <li className="flex items-start">
              <span className="text-green-600 mr-2">💻</span>
              <span><strong>Tablet (768px+):</strong> Shows configured columns (2 or 3)</span>
            </li>
            <li className="flex items-start">
              <span className="text-green-600 mr-2">🖥️</span>
              <span><strong>Desktop (1024px+):</strong> Full 3-column layout if specified</span>
            </li>
          </ul>
        </div>
      </section>

      {/* Performance Section */}
      <section className="mb-16 bg-purple-50 p-8 rounded-lg">
        <h2 className="text-2xl font-bold mb-4">Performance Optimization</h2>
        
        <div className="grid md:grid-cols-3 gap-6 mb-6">
          <div className="bg-white p-4 rounded-lg">
            <h3 className="font-semibold mb-2">Format Conversion</h3>
            <p className="text-sm text-gray-700">
              Automatically serves AVIF or WebP when supported, falling back to original format
            </p>
          </div>
          
          <div className="bg-white p-4 rounded-lg">
            <h3 className="font-semibold mb-2">File Size Reduction</h3>
            <p className="text-sm text-gray-700">
              Typically 70-90% smaller than originals with no visible quality loss
            </p>
          </div>
          
          <div className="bg-white p-4 rounded-lg">
            <h3 className="font-semibold mb-2">Responsive Delivery</h3>
            <p className="text-sm text-gray-700">
              Mobile devices get smaller images, desktops get larger ones
            </p>
          </div>
        </div>

        <div className="bg-white p-6 rounded-lg">
          <h3 className="font-semibold mb-3">Typical Savings</h3>
          <div className="space-y-2 text-sm">
            <div className="flex justify-between items-center border-b border-gray-200 pb-2">
              <span className="text-gray-600">2MB PNG → AVIF</span>
              <span className="font-semibold text-green-600">~150 KB (92% smaller)</span>
            </div>
            <div className="flex justify-between items-center border-b border-gray-200 pb-2">
              <span className="text-gray-600">1MB JPEG → WebP</span>
              <span className="font-semibold text-green-600">~120 KB (88% smaller)</span>
            </div>
            <div className="flex justify-between items-center">
              <span className="text-gray-600">500KB PNG → WebP</span>
              <span className="font-semibold text-green-600">~80 KB (84% smaller)</span>
            </div>
          </div>
        </div>
      </section>

      {/* Best Practices */}
      <section className="mb-16">
        <h2 className="text-2xl font-bold mb-4">Best Practices</h2>
        
        <div className="grid md:grid-cols-2 gap-6">
          <div className="border-l-4 border-green-500 pl-4 bg-green-50 p-4 rounded-r">
            <h3 className="font-semibold mb-2 text-green-900">✓ DO</h3>
            <ul className="text-sm space-y-1 text-gray-700">
              <li>• Use descriptive alt text</li>
              <li>• Place images in <code>/public/images/</code></li>
              <li>• Use <code>priority=true</code> for above-fold images</li>
              <li>• Add captions for context</li>
              <li>• Keep source files under 2MB</li>
            </ul>
          </div>
          
          <div className="border-l-4 border-red-500 pl-4 bg-red-50 p-4 rounded-r">
            <h3 className="font-semibold mb-2 text-red-900">✗ DON&apos;T</h3>
            <ul className="text-sm space-y-1 text-gray-700">
              <li>• Use vague alt text like &quot;image&quot;</li>
              <li>• Upload massive uncompressed files</li>
              <li>• Use <code>priority</code> on all images</li>
              <li>• Forget to test on mobile</li>
              <li>• Skip captions when context helps</li>
            </ul>
          </div>
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
                <td className="px-4 py-3 text-sm">Image path from public folder</td>
              </tr>
              <tr>
                <td className="px-4 py-3 text-sm font-mono">alt</td>
                <td className="px-4 py-3 text-sm">string</td>
                <td className="px-4 py-3 text-sm text-gray-500">required</td>
                <td className="px-4 py-3 text-sm">Alt text for accessibility</td>
              </tr>
              <tr>
                <td className="px-4 py-3 text-sm font-mono">caption</td>
                <td className="px-4 py-3 text-sm">string</td>
                <td className="px-4 py-3 text-sm text-gray-500">-</td>
                <td className="px-4 py-3 text-sm">Caption text below image</td>
              </tr>
              <tr>
                <td className="px-4 py-3 text-sm font-mono">priority</td>
                <td className="px-4 py-3 text-sm">boolean</td>
                <td className="px-4 py-3 text-sm">false</td>
                <td className="px-4 py-3 text-sm">Load eagerly (above-fold)</td>
              </tr>
              <tr>
                <td className="px-4 py-3 text-sm font-mono">aspectRatio</td>
                <td className="px-4 py-3 text-sm">string</td>
                <td className="px-4 py-3 text-sm">&quot;video&quot;</td>
                <td className="px-4 py-3 text-sm">video | square | portrait | auto</td>
              </tr>
            </tbody>
          </table>
        </div>
      </section>

      {/* Documentation Link */}
      <section className="bg-gray-50 p-8 rounded-lg text-center">
        <h2 className="text-2xl font-bold mb-4">Full Documentation</h2>
        <p className="text-gray-700 mb-6">
          For complete usage examples, MDX/YAML examples, and troubleshooting,
          see the documentation file.
        </p>
        <code className="bg-gray-900 text-gray-100 px-4 py-2 rounded inline-block">
          IMAGE-COMPONENTS.md
        </code>
      </section>
    </div>
  );
}
