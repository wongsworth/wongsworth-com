import Content from '@/content/timeline-alternative.mdx';

export default function MDXDemoPage() {
  return (
    <div className="container-custom py-12 md:py-20">
      <div className="mb-12 md:mb-16">
        <h1 className="text-4xl md:text-5xl font-bold mb-4">MDX Timeline Demo</h1>
        <p className="text-lg text-gray-700">
          This page demonstrates using MDX files with React components
        </p>
      </div>
      
      <Content />
    </div>
  );
}
