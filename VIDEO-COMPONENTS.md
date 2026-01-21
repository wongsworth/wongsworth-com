# Video Components Documentation

Complete guide for using video components in your timeline.

## Overview

VideoBlock component for local MP4 videos with:
✅ **Responsive container** - Adapts to screen size with aspect ratios  
✅ **Lazy loading** - Videos load when scrolled into view  
✅ **Controls enabled** - Play/pause, volume, fullscreen  
✅ **Optional poster** - Thumbnail image before play  
✅ **Captions support** - Optional caption text  
✅ **Rounded corners** - Professional appearance  
✅ **Error handling** - Fallback download link  
✅ **Layout stability** - Reserved space prevents layout shift

For **remote videos** (YouTube, Vimeo), use the embed components instead.

---

## VideoBlock Component

### Basic Usage

```tsx
<VideoBlock 
  src="/videos/demo.mp4" 
  caption="Product demo video"
/>
```

### With Poster Image

```tsx
<VideoBlock 
  src="/videos/presentation.mp4"
  poster="/images/video-thumbnail.jpg"
  caption="My conference presentation"
/>
```

### Auto-playing Background Video

```tsx
<VideoBlock 
  src="/videos/background.mp4"
  autoPlay={true}
  loop={true}
  muted={true}
  controls={false}
/>
```

### Different Aspect Ratios

```tsx
{/* 16:9 - Default, for landscape videos */}
<VideoBlock 
  src="/videos/landscape.mp4"
  aspectRatio="video"
/>

{/* 1:1 - Square format */}
<VideoBlock 
  src="/videos/square.mp4"
  aspectRatio="square"
/>

{/* 3:4 - Portrait/vertical format */}
<VideoBlock 
  src="/videos/mobile.mp4"
  aspectRatio="portrait"
/>
```

---

## MDX Examples

### Basic Video

```mdx
import TimelineItem from '@/components/TimelineItem'
import VideoBlock from '@/components/VideoBlock'

<TimelineItem date="March 2024" title="Product Launch">
  Check out our product demo:
  
  <VideoBlock 
    src="/videos/product-demo.mp4"
    poster="/images/demo-thumbnail.jpg"
    caption="Full product walkthrough - 2 minutes"
  />
  
  The response was amazing!
</TimelineItem>
```

### Multiple Videos

```mdx
import TimelineItem from '@/components/TimelineItem'
import VideoBlock from '@/components/VideoBlock'

<TimelineItem date="Summer 2023" title="Team Building Event">
  Highlights from our team retreat:
  
  <VideoBlock 
    src="/videos/team-activities.mp4"
    caption="Team activities and challenges"
  />
  
  <VideoBlock 
    src="/videos/team-dinner.mp4"
    caption="Celebratory dinner"
  />
</TimelineItem>
```

### Mixing Images and Videos

```mdx
import TimelineItem from '@/components/TimelineItem'
import ImageBlock from '@/components/ImageBlock'
import VideoBlock from '@/components/VideoBlock'

<TimelineItem date="January 2024" title="Conference Talk">
  Here's a photo and video from my talk:
  
  <ImageBlock 
    src="/images/stage.jpg"
    alt="On stage at the conference"
    caption="Opening remarks"
  />
  
  <VideoBlock 
    src="/videos/talk-highlights.mp4"
    caption="Key moments from the presentation"
  />
</TimelineItem>
```

---

## YAML Examples

### Basic Video

```yaml
- id: "product-demo"
  date: "March 2024"
  sortDate: "2024-03-15"
  title: "Product Launch"
  description: "<p>Check out our product demo</p>"
  media:
    - type: "video"
      src: "/videos/product-demo.mp4"
      caption: "Full product walkthrough"
```

### Multiple Videos

```yaml
- id: "team-retreat"
  date: "Summer 2023"
  sortDate: "2023-07-20"
  title: "Team Building Event"
  description: "<p>Highlights from our team retreat</p>"
  media:
    - type: "video"
      src: "/videos/team-activities.mp4"
      caption: "Team activities and challenges"
    - type: "video"
      src: "/videos/team-dinner.mp4"
      caption: "Celebratory dinner"
```

### Video with Image Fallback

```yaml
- id: "conference-talk"
  date: "January 2024"
  sortDate: "2024-01-15"
  title: "Conference Talk"
  description: "<p>My presentation at TechConf 2024</p>"
  media:
    - type: "image"
      src: "/images/stage.jpg"
      alt: "On stage at the conference"
      caption: "Opening remarks"
    - type: "video"
      src: "/videos/talk-highlights.mp4"
      caption: "Key moments from the presentation"
```

---

## Props Reference

| Prop | Type | Required | Default | Description |
|------|------|----------|---------|-------------|
| `src` | string | Yes | - | Video file path (from public folder) |
| `caption` | string | No | - | Caption displayed below video |
| `poster` | string | No | - | Poster/thumbnail image path |
| `autoPlay` | boolean | No | `false` | Auto-play on load (requires muted) |
| `loop` | boolean | No | `false` | Loop video continuously |
| `muted` | boolean | No | Same as autoPlay | Mute audio (required for autoPlay) |
| `controls` | boolean | No | `true` | Show video controls |
| `aspectRatio` | 'video' \| 'square' \| 'portrait' | No | `'video'` | Container aspect ratio |
| `className` | string | No | `''` | Additional CSS classes |

---

## File Placement

Place video files in the `public/videos/` folder:

```
public/
└── videos/
    ├── product-demo.mp4
    ├── team-activities.mp4
    └── presentation.mp4
```

Reference them in your code:

```tsx
<VideoBlock src="/videos/product-demo.mp4" />
```

---

## Video Formats

### Recommended Format

**MP4 with H.264 codec** - Best browser support

```bash
# Convert to web-optimized MP4 using ffmpeg:
ffmpeg -i input.mov -c:v libx264 -crf 23 -c:a aac -b:a 128k output.mp4
```

### Supported Formats

| Format | Support | Notes |
|--------|---------|-------|
| MP4 (H.264) | ✅ Excellent | Best choice - universal support |
| WebM | ✅ Good | Modern browsers, smaller files |
| OGG | ⚠️ Limited | Firefox, Chrome only |
| MOV | ❌ Poor | Safari only, use MP4 instead |

---

## Optimization Tips

### 1. Compress Videos

Large videos slow down your site. Compress before uploading:

```bash
# Reduce file size significantly
ffmpeg -i input.mp4 -c:v libx264 -crf 28 -c:a aac -b:a 96k compressed.mp4
```

**CRF values:**
- 18 = visually lossless (large file)
- 23 = high quality (recommended)
- 28 = good quality (smaller file)

### 2. Recommended File Sizes

- **Short clips (< 30s)**: < 5 MB
- **Medium videos (1-2 min)**: < 15 MB
- **Long videos (> 2 min)**: Consider YouTube instead

### 3. Create Poster Images

Extract a frame from your video as a poster:

```bash
ffmpeg -i video.mp4 -ss 00:00:03 -vframes 1 poster.jpg
```

### 4. Resolution Guidelines

| Device | Max Width | Recommendation |
|--------|-----------|----------------|
| Mobile | 640px | 720p (1280x720) is fine |
| Tablet | 1024px | 720p or 1080p |
| Desktop | 1920px | 1080p (1920x1080) max |

Higher resolutions waste bandwidth without visual improvement.

---

## Performance Characteristics

### Lazy Loading

Videos only load when scrolled into view:
1. **Page loads** - Placeholder shown (0 KB)
2. **User scrolls near video** - Video loads
3. **Ready to play** - Controls appear

### Preload Strategy

The component uses `preload="metadata"` which:
- Loads video dimensions and duration
- Doesn't load full video until play
- Saves bandwidth

### Layout Stability

Reserved space prevents layout shift:
- **video**: 16:9 aspect ratio
- **square**: 1:1 aspect ratio
- **portrait**: 3:4 aspect ratio

---

## Use Cases

### Product Demos

```tsx
<VideoBlock 
  src="/videos/product-demo.mp4"
  poster="/images/product-thumbnail.jpg"
  caption="See our product in action"
/>
```

### Event Highlights

```tsx
<VideoBlock 
  src="/videos/conference-recap.mp4"
  caption="Conference highlights - 90 seconds"
/>
```

### Background Videos

```tsx
<VideoBlock 
  src="/videos/ambient.mp4"
  autoPlay={true}
  loop={true}
  muted={true}
  controls={false}
  aspectRatio="video"
/>
```

### Tutorial/How-To

```tsx
<VideoBlock 
  src="/videos/tutorial.mp4"
  poster="/images/tutorial-cover.jpg"
  caption="Step-by-step tutorial (5 minutes)"
/>
```

---

## Accessibility

### Controls

All videos have controls enabled by default for accessibility:
- Play/pause button
- Volume control
- Fullscreen option
- Timeline scrubbing

### Captions

For videos with speech, add captions (not yet implemented but planned):

```tsx
<VideoBlock 
  src="/videos/talk.mp4"
  caption="Conference talk with captions"
  // Future: tracks prop for subtitles
/>
```

### Fallback Content

If video fails to load, users get:
- Error message
- Direct download link
- Caption still visible

---

## Remote Videos

For videos hosted on external platforms:

### YouTube

Use `EmbedYouTube` component:

```tsx
<EmbedYouTube 
  url="https://www.youtube.com/watch?v=VIDEO_ID"
  title="My YouTube video"
/>
```

### Vimeo, Wistia, etc.

For other platforms, embed manually or use iframe:

```tsx
<div className="relative w-full aspect-video rounded-lg overflow-hidden my-6">
  <iframe
    src="https://player.vimeo.com/video/VIDEO_ID"
    className="absolute inset-0 w-full h-full"
    allow="autoplay; fullscreen"
    allowFullScreen
  />
</div>
```

---

## Advanced Examples

### Side-by-Side Videos

```tsx
<div className="grid md:grid-cols-2 gap-6">
  <VideoBlock 
    src="/videos/before.mp4"
    caption="Before optimization"
    aspectRatio="video"
  />
  <VideoBlock 
    src="/videos/after.mp4"
    caption="After optimization"
    aspectRatio="video"
  />
</div>
```

### Custom Styling

```tsx
<VideoBlock 
  src="/videos/demo.mp4"
  className="border-4 border-blue-500"
/>
```

### Conditional Display

```tsx
{showVideo && (
  <VideoBlock 
    src="/videos/demo.mp4"
    caption="Exclusive preview"
  />
)}
```

---

## Troubleshooting

### Video Not Playing

**Problem:** Video doesn't play  
**Solutions:**
- Check file exists in `/public/videos/`
- Verify file path starts with `/videos/`
- Confirm browser supports MP4 format
- Check browser console for errors

### Video Shows Error

**Problem:** Error message appears  
**Solutions:**
- Verify video file isn't corrupted
- Check file is valid MP4 with H.264
- Ensure file size isn't too large (< 50MB recommended)
- Try re-encoding with ffmpeg

### Autoplay Not Working

**Problem:** Video doesn't autoplay  
**Solution:**
Browsers require `muted={true}` for autoplay:

```tsx
<VideoBlock 
  src="/videos/background.mp4"
  autoPlay={true}
  muted={true}  // Required!
/>
```

### Slow Loading

**Problem:** Video takes long to load  
**Solutions:**
- Compress video file (see optimization tips)
- Reduce resolution if too high
- Use poster image for better perceived performance
- Consider hosting on YouTube for large files

### Layout Shifting

**Problem:** Content jumps when video loads  
**Solution:**
Ensure aspect ratio matches video dimensions:

```tsx
{/* For 16:9 video */}
<VideoBlock src="/videos/landscape.mp4" aspectRatio="video" />

{/* For 9:16 vertical video */}
<VideoBlock src="/videos/vertical.mp4" aspectRatio="portrait" />
```

---

## Best Practices

### 1. Always Add Captions

Provides context and helps SEO:

```tsx
<VideoBlock 
  src="/videos/demo.mp4"
  caption="Product demo showing new features (2:30)"
/>
```

### 2. Use Poster Images

Better user experience and faster perceived load:

```tsx
<VideoBlock 
  src="/videos/talk.mp4"
  poster="/images/talk-poster.jpg"
/>
```

### 3. Keep Files Small

- Compress videos before upload
- Target < 15MB for most videos
- Use YouTube for longer content

### 4. Test on Mobile

- Check file sizes (mobile data limits)
- Verify controls work on touch
- Test vertical/horizontal orientations

### 5. Provide Context

Let users know what they're about to watch:

```tsx
<p>Here&apos;s a quick 30-second overview of the product:</p>

<VideoBlock 
  src="/videos/overview.mp4"
  caption="Product overview (0:30)"
/>
```

---

## When to Use VideoBlock vs. EmbedYouTube

### Use VideoBlock for:
- Short clips (< 3 minutes)
- High-quality footage you own
- Background/ambient videos
- Content that needs to stay on your site
- Demos and tutorials

### Use EmbedYouTube for:
- Long-form content (> 3 minutes)
- Content already on YouTube
- Lower bandwidth requirements
- Leveraging YouTube's infrastructure
- Wider device compatibility

---

## Examples in Production

Visit these pages to see videos in action:
- Homepage: http://localhost:3000
- MDX Demo: http://localhost:3000/mdx-demo

---

## Component Source

VideoBlock component is located in:
- `components/VideoBlock.tsx`

Feel free to customize it for your specific needs!

---

## Future Enhancements

Planned features (not yet implemented):
- Subtitle/caption track support
- Multiple video sources (WebM fallback)
- Thumbnail sprites for preview
- Custom play button overlay
- Analytics integration

Have a feature request? Feel free to extend the component!
