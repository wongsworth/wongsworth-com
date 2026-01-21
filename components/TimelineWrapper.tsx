import { ReactNode } from 'react';

interface TimelineWrapperProps {
  children: ReactNode;
}

/**
 * Timeline wrapper for use in MDX files
 * Accepts TimelineItem components as children
 */
export default function TimelineWrapper({ children }: TimelineWrapperProps) {
  return (
    <div className="relative">
      {/* Timeline line */}
      <div className="absolute left-0 md:left-8 top-0 bottom-0 w-px bg-gray-300" 
           aria-hidden="true" />
      
      {/* Timeline entries */}
      <div className="space-y-0">
        {children}
      </div>
    </div>
  );
}
