# Embed Components Documentation

Complete guide for using social media and video embed components in your timeline.

## Overview

Three responsive embed components are available:
- **EmbedYouTube** - YouTube videos
- **EmbedX** - X (Twitter) posts  
- **EmbedInstagram** - Instagram posts

All components feature:
✅ **Responsive sizing** - Adapts to screen size  
✅ **Lazy loading** - Only loads when scrolled into view  
✅ **Layout shift prevention** - Reserved space prevents jumpy content  
✅ **Minimal external scripts** - Scripts loaded only when needed  
✅ **Accessible fallbacks** - Direct links if embed fails  
✅ **No-JS support** - Works with JavaScript disabled

---

## EmbedYouTube

### Basic Usage

```tsx
<EmbedYouTube url="https://www.youtube.com/watch?v=dQw4w9WgXcQ" />
```

### With Custom Title (for accessibility)

```tsx
<EmbedYouTube 
  url="https://www.youtube.com/watch?v=dQw4w9WgXcQ" 
  title="My Conference Talk 2024"
/>
```

### Supported URL Formats

All of these work:
- `https://www.youtube.com/watch?v=VIDEO_ID`
- `https://youtu.be/VIDEO_ID`
- `https://www.youtube.com/embed/VIDEO_ID`

### MDX Example

```mdx
import TimelineItem from '@/components/TimelineItem'
import EmbedYouTube from '@/components/embeds/EmbedYouTube'

<TimelineItem date="March 2024" title="Conference Talk">
  I presented at React Conf 2024:
  
  <EmbedYouTube 
    url="https://www.youtube.com/watch?v=VIDEO_ID" 
    title="React Conf 2024 Presentation"
  />
  
  It was an amazing experience!
</TimelineItem>
```

### YAML Example

```yaml
- id: "conference-talk"
  date: "March 2024"
  sortDate: "2024-03-15"
  title: "Conference Talk"
  description: "<p>I presented at React Conf 2024</p>"
  media:
    - type: "embed"
      platform: "youtube"
      url: "https://www.youtube.com/watch?v=VIDEO_ID"
```

### Features

- **16:9 aspect ratio** - Standard video dimensions
- **Dark background** - Better visual during load
- **Play button placeholder** - Shows while loading
- **Error handling** - Falls back to YouTube link if embed fails
- **Lazy loading** - Loads when 100px from viewport
- **Accessible** - ARIA labels and fallback links

---

## EmbedX (Twitter)

### Basic Usage

```tsx
<EmbedX url="https://x.com/username/status/1234567890" />
```

### Supported URL Formats

- `https://x.com/username/status/TWEET_ID`
- `https://twitter.com/username/status/TWEET_ID`

### MDX Example

```mdx
import TimelineItem from '@/components/TimelineItem'
import EmbedX from '@/components/embeds/EmbedX'

<TimelineItem date="January 2024" title="Product Launch">
  We announced our new product:
  
  <EmbedX url="https://x.com/yourcompany/status/1234567890" />
  
  The response was incredible!
</TimelineItem>
```

### YAML Example

```yaml
- id: "product-launch"
  date: "January 2024"
  sortDate: "2024-01-20"
  title: "Product Launch"
  description: "<p>We announced our new product</p>"
  media:
    - type: "embed"
      platform: "x"
      url: "https://x.com/yourcompany/status/1234567890"
```

### Features

- **Responsive height** - Adjusts to tweet content
- **Privacy-friendly** - Uses `data-dnt="true"` (Do Not Track)
- **Light theme** - Consistent with site design
- **X logo placeholder** - Shows while loading
- **Script deduplication** - Only loads Twitter script once per page
- **10-second timeout** - Falls back to link if slow to load
- **Error handling** - Direct link if embed fails

---

## EmbedInstagram

### Basic Usage

```tsx
<EmbedInstagram url="https://www.instagram.com/p/ABC123xyz/" />
```

### Supported URL Formats

- `https://www.instagram.com/p/POST_ID/`
- `https://instagram.com/p/POST_ID/`

### MDX Example

```mdx
import TimelineItem from '@/components/TimelineItem'
import EmbedInstagram from '@/components/embeds/EmbedInstagram'

<TimelineItem date="Summer 2023" title="Team Retreat">
  Amazing team retreat in Banff:
  
  <EmbedInstagram url="https://www.instagram.com/p/ABC123xyz/" />
  
  Such great memories!
</TimelineItem>
```

### YAML Example

```yaml
- id: "team-retreat"
  date: "Summer 2023"
  sortDate: "2023-07-15"
  title: "Team Retreat"
  description: "<p>Amazing team retreat in Banff</p>"
  media:
    - type: "embed"
      platform: "instagram"
      url: "https://www.instagram.com/p/ABC123xyz/"
```

### Features

- **Centered layout** - Max width 540px, centered
- **Full post display** - Includes caption and metadata
- **Instagram logo placeholder** - Shows while loading
- **Script deduplication** - Only loads Instagram script once per page
- **10-second timeout** - Falls back to link if slow to load
- **Error handling** - Direct link if embed fails

---

## Combining Multiple Embeds

### MDX Example

```mdx
import TimelineItem from '@/components/TimelineItem'
import EmbedYouTube from '@/components/embeds/EmbedYouTube'
import EmbedX from '@/components/embeds/EmbedX'

<TimelineItem date="March 2024" title="Product Launch">
  We launched our new product with a video:
  
  <EmbedYouTube url="https://www.youtube.com/watch?v=VIDEO_ID" />
  
  And shared it on X:
  
  <EmbedX url="https://x.com/company/status/1234567890" />
  
  The response was amazing!
</TimelineItem>
```

### YAML Example

```yaml
- id: "product-launch"
  date: "March 2024"
  sortDate: "2024-03-15"
  title: "Product Launch"
  description: "<p>We launched our new product</p>"
  media:
    - type: "embed"
      platform: "youtube"
      url: "https://www.youtube.com/watch?v=VIDEO_ID"
    - type: "embed"
      platform: "x"
      url: "https://x.com/company/status/1234567890"
```

---

## Performance Characteristics

### Load Behavior

1. **Page loads** - No embed scripts loaded (0 KB)
2. **User scrolls near embed** - Component becomes visible
3. **Placeholder shows** - Reserved space prevents layout shift
4. **Script loads** - Only once per platform, shared across all embeds
5. **Embed renders** - Actual content appears

### Load Times

| Component | Initial | Script Size | Notes |
|-----------|---------|-------------|-------|
| EmbedYouTube | 0 KB | ~0 KB | Uses iframe, no external JS |
| EmbedX | 0 KB | ~50 KB | Twitter widgets.js (cached) |
| EmbedInstagram | 0 KB | ~30 KB | Instagram embed.js (cached) |

### Layout Shift Prevention

Each component reserves space before loading:
- **YouTube**: 16:9 aspect ratio container
- **X**: Minimum 400px height
- **Instagram**: Minimum 500px height, max 540px width

This prevents Cumulative Layout Shift (CLS) issues.

---

## Accessibility Features

### Keyboard Navigation
- All embeds are keyboard accessible
- Tab navigation works through embedded content

### Screen Readers
- ARIA labels on iframes
- Semantic HTML fallbacks
- Descriptive link text

### No JavaScript
- `<noscript>` tags provide direct links
- Fully functional without JavaScript

### Error States
- Clear error messages
- Always provide direct link to content
- Visual icons for context

---

## Troubleshooting

### YouTube Video Not Loading

**Problem**: Video doesn't appear  
**Solutions**:
- Check URL format (must include video ID)
- Verify video is public/embeddable
- Check browser console for errors
- Use fallback link to verify video exists

### X Post Not Embedding

**Problem**: Post shows as link instead of embed  
**Solutions**:
- Verify tweet is public
- Check URL format (needs full status URL)
- Try waiting 10 seconds (script timeout)
- Fallback link will always work

### Instagram Post Not Loading

**Problem**: Post doesn't display  
**Solutions**:
- Confirm post is public
- Check URL format (needs `/p/POST_ID/`)
- Wait for script to load (10 second timeout)
- Use fallback link as alternative

### Layout Shifting

**Problem**: Content jumps when embed loads  
**Solution**: This shouldn't happen - reserved space prevents shifts. If it does:
- Report as a bug
- Check browser DevTools for console errors
- Verify you're using latest component version

---

## Best Practices

### 1. Use Sparingly
Embeds add external dependencies. Use them when:
- Content adds significant value
- You can't recreate with images/text
- The source is reliable

### 2. Provide Context
Always add description text:

```mdx
<TimelineItem date="Jan 2024" title="Conference Talk">
  I spoke about React performance at React Conf:
  
  <EmbedYouTube url="..." title="React Performance Talk" />
  
  Key takeaways: lazy loading, code splitting, and memoization.
</TimelineItem>
```

### 3. Test Without JavaScript
Visit your page with JS disabled to verify fallback links work.

### 4. Check Mobile
All embeds are responsive, but test on real devices when possible.

### 5. Monitor Load Times
Use Chrome DevTools Performance tab to verify lazy loading works.

---

## Advanced Usage

### Custom Styling

Wrap embeds in divs for custom spacing:

```mdx
<div className="my-12 border-l-4 border-blue-500 pl-6">
  <EmbedYouTube url="..." />
  <p className="text-sm text-gray-600 mt-2">
    Watch my talk from React Conf 2024
  </p>
</div>
```

### Side-by-Side Layout (Desktop)

```mdx
<div className="grid md:grid-cols-2 gap-6">
  <div>
    <EmbedX url="..." />
  </div>
  <div>
    <EmbedInstagram url="..." />
  </div>
</div>
```

### Conditional Embeds

Only show embeds in certain contexts (advanced):

```tsx
{process.env.NODE_ENV === 'production' && (
  <EmbedYouTube url="..." />
)}
```

---

## Component Props Reference

### EmbedYouTube

| Prop | Type | Required | Default | Description |
|------|------|----------|---------|-------------|
| `url` | string | Yes | - | YouTube video URL |
| `title` | string | No | "YouTube video" | Accessibility title |

### EmbedX

| Prop | Type | Required | Default | Description |
|------|------|----------|---------|-------------|
| `url` | string | Yes | - | X/Twitter post URL |

### EmbedInstagram

| Prop | Type | Required | Default | Description |
|------|------|----------|---------|-------------|
| `url` | string | Yes | - | Instagram post URL |

---

## Examples in Production

Visit these pages to see embeds in action:
- Homepage: http://localhost:3000
- MDX Demo: http://localhost:3000/mdx-demo

---

## Support

For issues or questions:
1. Check this documentation
2. Verify URL formats
3. Test with fallback links
4. Check browser console for errors

All components include error handling and fallbacks, so users will always be able to access the content!
