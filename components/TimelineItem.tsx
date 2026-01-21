import { ReactNode } from 'react';

interface TimelineItemProps {
  date: string;
  title: string;
  tags?: string[];
  children: ReactNode;
}

/**
 * Simplified Timeline Item for use in MDX files
 * More ergonomic than TimelineEntry which requires a full Milestone object
 */
export default function TimelineItem({ date, title, tags, children }: TimelineItemProps) {
  return (
    <div className="relative pl-8 md:pl-20 mb-12 md:mb-16">
      {/* Timeline dot */}
      <div 
        className="absolute left-0 md:left-8 top-2 w-3 h-3 -ml-[7px] md:-ml-[7px] rounded-full bg-black border-4 border-white ring-4 ring-gray-200" 
        aria-hidden="true" 
      />
      
      <article>
        <div className="space-y-4">
          {/* Date */}
          <time className="text-lg md:text-xl font-semibold text-gray-700">
            {date}
          </time>
          
          {/* Title */}
          <h2 className="text-2xl md:text-3xl font-bold">
            {title}
          </h2>
          
          {/* Content */}
          <div className="prose prose-lg max-w-none prose-ul:list-disc prose-ul:ml-6 prose-ol:list-decimal prose-ol:ml-6">
            {children}
          </div>
        </div>
        
        {/* Tags - separate from space-y-4 flow */}
        {tags && tags.length > 0 && (
          <div className="flex flex-wrap gap-2 mt-8 mb-8">
            {tags.map((tag) => (
              <span
                key={tag}
                className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-gray-100 text-gray-800"
              >
                {tag}
              </span>
            ))}
          </div>
        )}
      </article>
    </div>
  );
}
