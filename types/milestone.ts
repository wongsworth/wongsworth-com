export interface Milestone {
  id: string;
  date: string; // Display date (e.g., "January 2024")
  sortDate: string; // ISO date for sorting (YYYY-MM-DD)
  title: string;
  description: string;
  tags?: string[];
  media?: MediaBlock[];
}

export type MediaBlock = ImageBlock | VideoBlock | EmbedBlock;

export interface ImageBlock {
  type: 'image';
  src: string;
  alt: string;
  caption?: string;
}

export interface VideoBlock {
  type: 'video';
  src: string; // Local path or URL
  platform?: 'local' | 'youtube';
  caption?: string;
}

export interface EmbedBlock {
  type: 'embed';
  platform: 'x' | 'instagram' | 'youtube';
  url: string;
  embedId?: string; // For YouTube video IDs, X tweet IDs, etc.
}
