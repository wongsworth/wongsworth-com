import { Milestone } from "@/types/milestone";
import TimelineEntry from "./TimelineEntry";

interface TimelineProps {
  milestones: Milestone[];
}

export default function Timeline({ milestones }: TimelineProps) {
  return (
    <div className="relative">
      {/* Timeline line */}
      <div className="absolute left-0 md:left-8 top-0 bottom-0 w-px bg-gray-300" 
           aria-hidden="true" />
      
      {/* Timeline entries */}
      <div className="space-y-12 md:space-y-16">
        {milestones.map((milestone) => (
          <TimelineEntry key={milestone.id} milestone={milestone} />
        ))}
      </div>
    </div>
  );
}
