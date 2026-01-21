import fs from 'fs';
import path from 'path';
import matter from 'gray-matter';
import { Milestone } from '@/types/milestone';

const contentDirectory = path.join(process.cwd(), 'content');

export async function getMilestones(): Promise<Milestone[]> {
  const filePath = path.join(contentDirectory, 'milestones.mdx');
  
  if (!fs.existsSync(filePath)) {
    console.warn('Milestones file not found, returning empty array');
    return [];
  }

  const fileContents = fs.readFileSync(filePath, 'utf8');
  const { data } = matter(fileContents);

  const milestones = (data.milestones || []) as Milestone[];

  // Sort by sortDate in descending order (newest first)
  return milestones.sort((a, b) => {
    return new Date(b.sortDate).getTime() - new Date(a.sortDate).getTime();
  });
}
