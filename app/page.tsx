import dynamic from "next/dynamic";

const TimelineMDX = dynamic(() => import("@/content/timeline.mdx"));

export default function Home() {
  return (
    <div className="container-custom py-12 md:py-20">
      <div className="mb-12 md:mb-16">
        <h1 className="text-4xl md:text-5xl font-bold mb-4">Career Timeline</h1>
        <p className="text-lg text-gray-700">
          A reverse-chronological journey through my professional milestones
        </p>
      </div>
      <TimelineMDX />
    </div>
  );
}
