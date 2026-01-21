import { Milestone } from "@/types/milestone";
import ImageBlock from "./ImageBlock";
import VideoBlock from "./VideoBlock";
import EmbedX from "./embeds/EmbedX";
import EmbedYouTube from "./embeds/EmbedYouTube";
import EmbedInstagram from "./embeds/EmbedInstagram";

interface TimelineEntryProps {
  milestone: Milestone;
}

export default function TimelineEntry({ milestone }: TimelineEntryProps) {
  return (
    <div className="relative pl-8 md:pl-20">
      {/* Timeline dot */}
      <div className="absolute left-0 md:left-8 top-2 w-3 h-3 -ml-[7px] md:-ml-[7px] rounded-full bg-black border-4 border-white ring-4 ring-gray-200" 
           aria-hidden="true" />
      
      <article className="space-y-4">
        {/* Date */}
        <time className="text-sm font-medium text-gray-600">
          {milestone.date}
        </time>
        
        {/* Title */}
        <h2 className="text-2xl md:text-3xl font-bold">
          {milestone.title}
        </h2>
        
        {/* Description */}
        <div 
          className="prose prose-lg max-w-none"
          dangerouslySetInnerHTML={{ __html: milestone.description }}
        />
        
        {/* Tags */}
        {milestone.tags && milestone.tags.length > 0 && (
          <div className="flex flex-wrap gap-2">
            {milestone.tags.map((tag) => (
              <span
                key={tag}
                className="inline-flex items-center px-3 py-1 rounded-full text-sm font-medium bg-gray-100 text-gray-800"
              >
                {tag}
              </span>
            ))}
          </div>
        )}
        
        {/* Media blocks */}
        {milestone.media && milestone.media.length > 0 && (
          <div className="space-y-6 mt-6">
            {milestone.media.map((block, index) => {
              if (block.type === 'image') {
                return (
                  <ImageBlock
                    key={index}
                    src={block.src}
                    alt={block.alt}
                    caption={block.caption}
                    priority={index === 0} // First image loads eagerly
                  />
                );
              }
              
              if (block.type === 'video') {
                if (block.platform === 'youtube' && block.src) {
                  return <EmbedYouTube key={index} url={block.src} />;
                }
                return (
                  <VideoBlock
                    key={index}
                    src={block.src}
                    caption={block.caption}
                  />
                );
              }
              
              if (block.type === 'embed') {
                if (block.platform === 'x') {
                  return <EmbedX key={index} url={block.url} />;
                }
                if (block.platform === 'youtube') {
                  return <EmbedYouTube key={index} url={block.url} />;
                }
                if (block.platform === 'instagram') {
                  return <EmbedInstagram key={index} url={block.url} />;
                }
              }
              
              return null;
            })}
          </div>
        )}
      </article>
    </div>
  );
}
