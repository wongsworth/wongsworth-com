import type { MDXComponents } from 'mdx/types';
import TimelineWrapper from '@/components/TimelineWrapper';
import TimelineItem from '@/components/TimelineItem';
import TimelineEntry from '@/components/TimelineEntry';
import ImageBlock from '@/components/ImageBlock';
import ImageGallery from '@/components/ImageGallery';
import VideoBlock from '@/components/VideoBlock';
import EmbedX from '@/components/embeds/EmbedX';
import EmbedYouTube from '@/components/embeds/EmbedYouTube';
import EmbedInstagram from '@/components/embeds/EmbedInstagram';

// This file allows you to provide custom React components
// to be used in MDX files. You can import and use any
// React component you want, including components from
// other libraries.
export function useMDXComponents(components: MDXComponents): MDXComponents {
  return {
    // Make timeline and embed components available in MDX
    Timeline: TimelineWrapper,
    TimelineItem,
    TimelineEntry,
    ImageBlock,
    ImageGallery,
    VideoBlock,
    EmbedX,
    EmbedYouTube,
    EmbedInstagram,
    ...components,
  };
}
