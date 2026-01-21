# Using MDX in Wongsworth.com

MDX support is now fully configured! You can write content using React components directly in `.mdx` files.

## Two Approaches Available

### Approach 1: YAML Frontmatter (Current - Easiest)

Edit `content/milestones.mdx` with structured YAML data:

```yaml
---
milestones:
  - id: "example-1"
    date: "January 2024"
    sortDate: "2024-01-15"
    title: "Example Milestone"
    description: "<p>HTML content here</p>"
    tags: ["Tag1", "Tag2"]
---
```

**Pros:**
- Structured, easy to edit
- All milestones in one place
- Simple to add/remove entries

**Best for:** Non-technical users, simple content updates

### Approach 2: MDX Components (More Flexible)

Create MDX files that import and use React components:

```mdx
import TimelineItem from '@/components/TimelineItem'
import EmbedYouTube from '@/components/embeds/EmbedYouTube'

<TimelineItem 
  date="January 2024" 
  title="My Milestone"
  tags={["Career", "Growth"]}
>
  Write **markdown** here with components!
  
  <EmbedYouTube url="https://www.youtube.com/watch?v=VIDEO_ID" />
</TimelineItem>
```

**Pros:**
- Mix markdown and React components
- More expressive and flexible
- Can use any React component
- Natural content writing

**Best for:** Technical users, complex content, rich media

## How to Use MDX Components

### Step 1: Create an MDX file

Create a file in `content/` directory (e.g., `content/my-timeline.mdx`):

```mdx
import TimelineItem from '@/components/TimelineItem'

<div className="relative">
  <div className="absolute left-0 md:left-8 top-0 bottom-0 w-px bg-gray-300" aria-hidden="true" />
  
  <TimelineItem date="Jan 2024" title="First Entry">
    Content goes here with **markdown** support!
  </TimelineItem>
  
  <TimelineItem date="Dec 2023" title="Second Entry">
    More content...
  </TimelineItem>
</div>
```

### Step 2: Import in a Page

In your page file (e.g., `app/page.tsx`):

```tsx
import Content from '@/content/my-timeline.mdx';

export default function Page() {
  return (
    <div className="container-custom py-12">
      <Content />
    </div>
  );
}
```

## Available Components in MDX

All these components are automatically available in `.mdx` files:

### TimelineItem

Simplified component for individual timeline entries:

```mdx
<TimelineItem 
  date="January 2024" 
  title="Milestone Title"
  tags={["Tag1", "Tag2"]} // optional
>
  Write your content here using **markdown** or HTML
</TimelineItem>
```

### Embed Components

#### YouTube
```mdx
<EmbedYouTube url="https://www.youtube.com/watch?v=VIDEO_ID" />
```

#### X (Twitter)
```mdx
<EmbedX url="https://x.com/username/status/TWEET_ID" />
```

#### Instagram
```mdx
<EmbedInstagram url="https://www.instagram.com/p/POST_ID/" />
```

### Images

Use Next.js Image component:

```mdx
import Image from 'next/image'

<div className="relative w-full aspect-video rounded-lg overflow-hidden my-4">
  <Image
    src="/images/photo.jpg"
    alt="Description"
    fill
    className="object-cover"
  />
</div>
```

## Examples

See these example files:
- `content/timeline-alternative.mdx` - Full timeline example with components
- `app/mdx-demo/page.tsx` - Example page using MDX

Visit http://localhost:3000/mdx-demo to see it in action!

## Markdown Features Supported

- **Bold** and *italic* text
- [Links](https://example.com)
- Lists (ordered and unordered)
- Headings (# ## ###)
- Code blocks
- Blockquotes
- And more!

## Mixing Approaches

You can use both approaches in the same project:
- Keep `content/milestones.mdx` with YAML for easy editing
- Create additional MDX files with components for special pages
- Use whichever approach fits your needs best

## Technical Details

**Configuration files:**
- `mdx-components.tsx` - Defines available components in MDX
- `next.config.js` - MDX loader configuration
- `@next/mdx` package handles compilation

**Component imports:**
Components can be imported explicitly in MDX files or used globally if defined in `mdx-components.tsx`.
