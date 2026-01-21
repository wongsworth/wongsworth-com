# Image Components Documentation

Complete guide for using optimized image components in your timeline.

## Overview

Two image components are available:
- **ImageBlock** - Single optimized image with optional caption
- **ImageGallery** - Multiple images in responsive grid layout

Both components use Next.js Image optimization for:
✅ **Automatic format conversion** - WebP/AVIF when supported  
✅ **Responsive sizing** - Adapts to viewport  
✅ **Lazy loading** - Images load as you scroll  
✅ **Sharp corners** - Professional rounded appearance  
✅ **Optimized delivery** - Compressed and cached  
✅ **Layout stability** - Reserved space prevents layout shift

---

## ImageBlock

### Basic Usage

```tsx
<ImageBlock 
  src="/images/my-photo.jpg" 
  alt="Description of the image" 
/>
```

### With Caption

```tsx
<ImageBlock 
  src="/images/conference.jpg" 
  alt="Speaking at React Conf 2024" 
  caption="Presenting my talk on performance optimization"
/>
```

### Different Aspect Ratios

```tsx
{/* 16:9 - Default, good for landscape photos */}
<ImageBlock 
  src="/images/landscape.jpg" 
  alt="Mountain view" 
  aspectRatio="video"
/>

{/* 1:1 - Square format */}
<ImageBlock 
  src="/images/profile.jpg" 
  alt="Profile photo" 
  aspectRatio="square"
/>

{/* 3:4 - Portrait format */}
<ImageBlock 
  src="/images/portrait.jpg" 
  alt="Team photo" 
  aspectRatio="portrait"
/>

{/* Auto - Natural image dimensions */}
<ImageBlock 
  src="/images/screenshot.png" 
  alt="App screenshot" 
  aspectRatio="auto"
/>
```

### Priority Loading (Above the Fold)

For images that appear at the top of the page:

```tsx
<ImageBlock 
  src="/images/hero.jpg" 
  alt="Hero image" 
  priority={true}
/>
```

### Props Reference

| Prop | Type | Required | Default | Description |
|------|------|----------|---------|-------------|
| `src` | string | Yes | - | Image path (from public folder) |
| `alt` | string | Yes | - | Alt text for accessibility |
| `caption` | string | No | - | Caption displayed below image |
| `priority` | boolean | No | `false` | Load eagerly (for above-fold images) |
| `aspectRatio` | 'video' \| 'square' \| 'portrait' \| 'auto' | No | `'video'` | Aspect ratio of container |
| `className` | string | No | `''` | Additional CSS classes |

---

## MDX Examples

### Single Image in Timeline

```mdx
import TimelineItem from '@/components/TimelineItem'
import ImageBlock from '@/components/ImageBlock'

<TimelineItem date="March 2024" title="Conference Talk">
  I spoke at React Conf 2024 about performance:
  
  <ImageBlock 
    src="/images/react-conf-2024.jpg" 
    alt="Speaking at React Conf 2024"
    caption="My talk on React performance optimization"
  />
  
  It was an amazing experience!
</TimelineItem>
```

### Multiple Images

```mdx
import TimelineItem from '@/components/TimelineItem'
import ImageBlock from '@/components/ImageBlock'

<TimelineItem date="Summer 2023" title="Team Retreat">
  Amazing team retreat in Banff:
  
  <ImageBlock 
    src="/images/team-1.jpg" 
    alt="Team hiking"
    caption="Hiking in the mountains"
  />
  
  <ImageBlock 
    src="/images/team-2.jpg" 
    alt="Team dinner"
    caption="Celebratory dinner"
  />
  
  Such great memories!
</TimelineItem>
```

### Image with Different Aspect Ratio

```mdx
<ImageBlock 
  src="/images/mobile-app.png" 
  alt="Mobile app screenshot"
  caption="Our new mobile app interface"
  aspectRatio="portrait"
/>
```

---

## YAML Examples

### Single Image

```yaml
- id: "conference-talk"
  date: "March 2024"
  sortDate: "2024-03-15"
  title: "Conference Talk"
  description: "<p>I spoke at React Conf 2024</p>"
  media:
    - type: "image"
      src: "/images/react-conf-2024.jpg"
      alt: "Speaking at React Conf 2024"
      caption: "My talk on React performance optimization"
```

### Multiple Images

```yaml
- id: "team-retreat"
  date: "Summer 2023"
  sortDate: "2023-07-15"
  title: "Team Retreat"
  description: "<p>Amazing team retreat in Banff</p>"
  media:
    - type: "image"
      src: "/images/team-1.jpg"
      alt: "Team hiking"
      caption: "Hiking in the mountains"
    - type: "image"
      src: "/images/team-2.jpg"
      alt: "Team dinner"
      caption: "Celebratory dinner"
```

---

## ImageGallery

Display multiple images in a responsive grid.

### Basic Usage (2 Columns)

```tsx
<ImageGallery 
  images={[
    { src: "/images/photo1.jpg", alt: "Photo 1" },
    { src: "/images/photo2.jpg", alt: "Photo 2" },
    { src: "/images/photo3.jpg", alt: "Photo 3" },
    { src: "/images/photo4.jpg", alt: "Photo 4" },
  ]}
/>
```

### With Captions

```tsx
<ImageGallery 
  images={[
    { 
      src: "/images/conference-1.jpg", 
      alt: "Opening keynote",
      caption: "Opening keynote by Sarah Johnson"
    },
    { 
      src: "/images/conference-2.jpg", 
      alt: "Workshop session",
      caption: "Hands-on React workshop"
    },
  ]}
/>
```

### Different Column Layouts

```tsx
{/* Single column - stacks all images */}
<ImageGallery 
  images={images}
  columns={1}
/>

{/* 2 columns on desktop (default) */}
<ImageGallery 
  images={images}
  columns={2}
/>

{/* 3 columns on large screens */}
<ImageGallery 
  images={images}
  columns={3}
/>
```

### MDX Example

```mdx
import TimelineItem from '@/components/TimelineItem'
import ImageGallery from '@/components/ImageGallery'

<TimelineItem date="May 2024" title="Product Launch">
  We launched our new product with great success!
  
  <ImageGallery 
    columns={2}
    images={[
      { 
        src: "/images/launch-1.jpg", 
        alt: "Launch event",
        caption: "Packed launch event"
      },
      { 
        src: "/images/launch-2.jpg", 
        alt: "Product demo",
        caption: "Live product demo"
      },
      { 
        src: "/images/launch-3.jpg", 
        alt: "Team celebration",
        caption: "Team celebrating"
      },
      { 
        src: "/images/launch-4.jpg", 
        alt: "Media coverage",
        caption: "Press interviews"
      },
    ]}
  />
  
  Over 500 people attended!
</TimelineItem>
```

### Props Reference

| Prop | Type | Required | Default | Description |
|------|------|----------|---------|-------------|
| `images` | ImageBlockProps[] | Yes | - | Array of image objects |
| `columns` | 1 \| 2 \| 3 | No | `2` | Number of columns on desktop |
| `className` | string | No | `''` | Additional CSS classes |

---

## Image Optimization Details

### Automatic Format Conversion

Next.js automatically serves:
- **AVIF** to browsers that support it (best compression)
- **WebP** to browsers that support it (great compression)
- **JPEG/PNG** as fallback for older browsers

### Responsive Images

The component generates multiple image sizes and serves the appropriate one:
- **Mobile (< 640px)**: Full viewport width
- **Tablet (640-1024px)**: 90% viewport width
- **Desktop (> 1024px)**: Max 896px width

### File Size Savings

Example comparisons:

| Original | Format | Size | Savings |
|----------|--------|------|---------|
| 2MB PNG | AVIF | 150 KB | 92% |
| 2MB PNG | WebP | 200 KB | 90% |
| 1MB JPEG | AVIF | 80 KB | 92% |
| 1MB JPEG | WebP | 120 KB | 88% |

### Quality Settings

Images are served at 85% quality (configurable) which:
- Looks identical to the human eye
- Significantly reduces file size
- Balances quality and performance

---

## Best Practices

### 1. Image Placement

Place images in `public/images/` folder:

```
public/
└── images/
    ├── conference-2024.jpg
    ├── team-photo.jpg
    └── product-launch.png
```

Reference them as:

```tsx
<ImageBlock src="/images/conference-2024.jpg" alt="..." />
```

### 2. Alt Text

Always provide descriptive alt text:

```tsx
{/* ✅ Good */}
<ImageBlock 
  src="/images/talk.jpg" 
  alt="Sarah presenting React performance tips to 300 attendees"
/>

{/* ❌ Bad */}
<ImageBlock 
  src="/images/talk.jpg" 
  alt="Image"
/>
```

### 3. Image Sizes

Recommended maximum dimensions:
- **Width**: 2000px max
- **Height**: 2000px max
- **File size**: < 2MB before optimization

The component will handle resizing and optimization.

### 4. Aspect Ratios

Choose appropriate aspect ratios:
- **16:9 (video)**: Landscapes, screenshots, most photos
- **1:1 (square)**: Logos, icons, square compositions
- **3:4 (portrait)**: Vertical photos, mobile screenshots
- **Auto**: Diagrams, charts, variable content

### 5. Priority Loading

Use `priority={true}` for:
- Images above the fold
- First image in a timeline entry
- Hero images

Don't use it for:
- Images below the fold (lazy load by default)
- Gallery images
- Images far down the page

### 6. Captions

Good captions add context:

```tsx
<ImageBlock 
  src="/images/award.jpg" 
  alt="Holding the Best Innovation award"
  caption="Receiving the Best Innovation award at TechCrunch Disrupt 2024"
/>
```

---

## Performance Characteristics

### Load Behavior

1. **Page loads** - Placeholder shown (reserved space)
2. **Image in viewport** - Full image loads
3. **Format negotiation** - Best format for browser
4. **Caching** - Subsequent loads instant

### Layout Shift Prevention

Each aspect ratio reserves exact space:
- **video**: 16:9 ratio (56.25% height)
- **square**: 1:1 ratio (100% height)
- **portrait**: 3:4 ratio (133% height)
- **auto**: Calculated from image dimensions

This prevents Cumulative Layout Shift (CLS).

### Lazy Loading

All images (except `priority={true}`) use:
- Native browser lazy loading
- Intersection Observer fallback
- Loads when entering viewport

### Caching

Optimized images are cached:
- Browser cache (client-side)
- CDN cache (if deployed to Vercel)
- Immutable URLs for long-term caching

---

## Advanced Usage

### Custom Styling

```tsx
<ImageBlock 
  src="/images/photo.jpg" 
  alt="Description"
  className="border-4 border-blue-500 shadow-lg"
/>
```

### Full Width Images

```tsx
<div className="-mx-4 md:-mx-6 lg:-mx-8">
  <ImageBlock 
    src="/images/wide-photo.jpg" 
    alt="Full bleed image"
    aspectRatio="video"
  />
</div>
```

### Side-by-Side Images

```tsx
<div className="grid grid-cols-2 gap-4">
  <ImageBlock src="/images/before.jpg" alt="Before" />
  <ImageBlock src="/images/after.jpg" alt="After" />
</div>
```

### Mixed Content

```tsx
<TimelineItem date="Jan 2024" title="Product Launch">
  <ImageBlock src="/images/product.jpg" alt="Product photo" />
  
  <p>We launched our new product with these features:</p>
  
  <ImageBlock 
    src="/images/features.png" 
    alt="Feature comparison chart"
    aspectRatio="auto"
  />
</TimelineItem>
```

---

## Troubleshooting

### Image Not Loading

**Problem**: Image doesn't appear  
**Solutions**:
- Verify file exists in `public/images/`
- Check file path (should start with `/images/`)
- Check file name matches exactly (case-sensitive)
- Check browser console for errors

### Image Looks Blurry

**Problem**: Image appears low quality  
**Solutions**:
- Use higher resolution source image (2x pixel density)
- Check original image quality
- Verify `quality` prop if customized

### Layout Shifting

**Problem**: Content jumps when image loads  
**Solutions**:
- Don't use `aspectRatio="auto"` unless necessary
- Ensure aspect ratio matches actual image
- Check for CSS conflicts

### Slow Loading

**Problem**: Images take long to load  
**Solutions**:
- Reduce source image file size (< 2MB)
- Check internet connection
- Use `priority={true}` for critical images
- Verify Next.js optimization is working

---

## Examples in Production

Visit these pages to see images in action:
- Homepage: http://localhost:3000
- MDX Demo: http://localhost:3000/mdx-demo

---

## Image Formats Supported

Next.js Image component supports:
- JPEG (`.jpg`, `.jpeg`)
- PNG (`.png`)
- WebP (`.webp`)
- AVIF (`.avif`)
- GIF (`.gif`) - animated GIFs preserved
- SVG (`.svg`) - passed through unoptimized

---

## Deployment Considerations

### Vercel (Recommended)

When deployed to Vercel:
- Images optimized on-demand
- Cached globally on CDN
- Automatic format conversion
- No additional configuration needed

### Other Platforms

For non-Vercel deployments:
- Next.js Image Optimization API required
- Or use `unoptimized={true}` prop
- Consider external image CDN

---

## Component Source

All image components are located in:
- `components/ImageBlock.tsx` - Single image component
- `components/ImageGallery.tsx` - Gallery component

Feel free to customize them for your specific needs!
