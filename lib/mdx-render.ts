import fs from 'fs';
import path from 'path';

const contentDirectory = path.join(process.cwd(), 'content');

/**
 * Get the content of an MDX file for rendering
 * This allows you to import and use React components directly in MDX
 */
export async function getMDXContent(filename: string): Promise<string> {
  const filePath = path.join(contentDirectory, filename);
  
  if (!fs.existsSync(filePath)) {
    throw new Error(`MDX file not found: ${filename}`);
  }

  return fs.readFileSync(filePath, 'utf8');
}

/**
 * Get list of all MDX files in content directory
 */
export function getMDXFiles(): string[] {
  if (!fs.existsSync(contentDirectory)) {
    return [];
  }

  return fs.readdirSync(contentDirectory)
    .filter(file => file.endsWith('.mdx'));
}
