import type { Metadata } from "next";
import TimelineContent from '@/content/timeline.mdx';

export const metadata: Metadata = {
  title: "Wongsworth | Professional Timeline",
  description: "A reverse-chronological timeline showcasing career milestones, achievements, and professional journey.",
  keywords: ["career", "timeline", "professional", "milestones", "portfolio"],
  authors: [{ name: "Wongsworth" }],
  openGraph: {
    title: "Wongsworth | Professional Timeline",
    description: "A reverse-chronological timeline showcasing career milestones, achievements, and professional journey.",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Wongsworth | Professional Timeline",
    description: "A reverse-chronological timeline showcasing career milestones, achievements, and professional journey.",
  },
};

export default function Home() {
  return (
    <div className="container-custom py-12 md:py-20">
      {/* Page header */}
      <div className="mb-12 md:mb-16">
        <h1 className="text-4xl md:text-5xl font-bold mb-4">Career Timeline</h1>
        <p className="text-lg text-gray-700">
          A reverse-chronological journey through my professional milestones
        </p>
      </div>

      {/* Timeline content from MDX */}
      <TimelineContent />
    </div>
  );
}
