# Wongsworth.com

A professional timeline website showcasing career milestones in reverse chronological order.

## Tech Stack

- **Next.js 14** (App Router)
- **TypeScript**
- **Tailwind CSS**
- **MDX** for content management

## Getting Started

### Development

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser.

### Build for Production

```bash
npm run build
npm start
```

## Editing Content

> **New to editing?** Start with `QUICK-START.md` for a 5-minute tutorial on adding your first milestone!

### Two Approaches Available

#### Option 1: YAML Frontmatter (Recommended for Easy Editing)

All timeline milestones are managed in: `content/milestones.mdx`

**Adding a New Milestone:**
1. Open `content/milestones.mdx`
2. Add a new entry to the `milestones` array in the frontmatter
3. Copy an existing milestone structure and modify the fields

**Milestone Structure:**
```yaml
- id: "unique-id"
  date: "January 2024"           # Display date
  sortDate: "2024-01-15"         # ISO date for sorting
  title: "Milestone Title"
  description: "<p>Rich HTML content</p>"
  tags:
    - "Tag1"
    - "Tag2"
  media:
    - type: "image"
      src: "/images/photo.jpg"
      alt: "Description"
```

#### Option 2: MDX with React Components (More Flexible)

Create MDX files that use React components directly:

```mdx
import TimelineItem from '@/components/TimelineItem'

<TimelineItem date="Jan 2024" title="My Milestone" tags={["Career"]}>
  Write **markdown** here with embedded components!
</TimelineItem>
```

**See `USING-MDX.md` for complete documentation.**

### Supported Media Types

- **Images**: Place in `public/images/` and reference as `/images/filename.jpg`
- **Videos**: Place in `public/videos/` and reference as `/videos/filename.mp4`
- **YouTube**: `<EmbedYouTube url="..." />`
- **X (Twitter)**: `<EmbedX url="..." />`
- **Instagram**: `<EmbedInstagram url="..." />`

**Documentation:**
- `EMBED-COMPONENTS.md` - Social media and video embeds (YouTube, X, Instagram)
- `IMAGE-COMPONENTS.md` - Optimized images and galleries
- `VIDEO-COMPONENTS.md` - Local MP4 video player

---

## How to Add a New Milestone

### Quick Start (YAML Approach - Recommended)

**Step 1:** Open `content/milestones.mdx` in any text editor

**Step 2:** Copy this template at the TOP of the `milestones:` array (newest first):

```yaml
  - id: "unique-id-here"
    date: "Month Year"
    sortDate: "YYYY-MM-DD"
    title: "Your Milestone Title"
    description: "<p>Description goes here. Use <strong>bold</strong> and <a href='https://example.com'>links</a>.</p>"
    tags:
      - "Tag1"
      - "Tag2"
```

**Step 3:** Fill in your details:
- **id**: Unique identifier (e.g., `"job-google-2024"`)
- **date**: Display date (e.g., `"January 2024"`, `"Summer 2023"`)
- **sortDate**: ISO date for sorting (e.g., `"2024-01-15"`)
- **title**: Milestone headline
- **description**: HTML content with `<p>` tags
- **tags**: Optional categories

**Step 4:** Save the file. Changes appear immediately in development mode.

### Adding Media

#### Add an Image

```yaml
  - id: "conference-2024"
    date: "March 2024"
    sortDate: "2024-03-15"
    title: "Spoke at React Conf"
    description: "<p>Presented on performance optimization</p>"
    media:
      - type: "image"
        src: "/images/react-conf.jpg"
        alt: "Speaking at React Conf 2024"
        caption: "My talk on React performance"
```

**Remember:** Place images in `public/images/` folder first!

#### Add a Video

```yaml
    media:
      - type: "video"
        src: "/videos/product-demo.mp4"
        caption: "Product walkthrough"
```

**Remember:** Place videos in `public/videos/` folder first!

#### Add an X (Twitter) Post

```yaml
    media:
      - type: "embed"
        platform: "x"
        url: "https://x.com/yourhandle/status/1234567890"
```

#### Add YouTube Video

```yaml
    media:
      - type: "embed"
        platform: "youtube"
        url: "https://www.youtube.com/watch?v=VIDEO_ID"
```

#### Add Instagram Post

```yaml
    media:
      - type: "embed"
        platform: "instagram"
        url: "https://www.instagram.com/p/POST_ID/"
```

#### Add Multiple Media Items

```yaml
    media:
      - type: "image"
        src: "/images/photo1.jpg"
        alt: "First photo"
      - type: "embed"
        platform: "x"
        url: "https://x.com/handle/status/123"
      - type: "video"
        src: "/videos/demo.mp4"
        caption: "Demo video"
```

### Date Formatting Guide

**Display Date** (`date` field):
- Use natural language: `"January 2024"`, `"Summer 2023"`, `"Q4 2022"`
- This is what visitors see

**Sort Date** (`sortDate` field):
- Use ISO format: `"YYYY-MM-DD"`
- Examples: `"2024-01-15"`, `"2023-07-01"`, `"2022-12-31"`
- This determines timeline order (newest first)
- Use the 1st of the month if exact date unknown: `"2024-01-01"`

**Examples:**
```yaml
date: "January 2024"
sortDate: "2024-01-15"

date: "Summer 2023"
sortDate: "2023-07-01"  # Use July 1st for summer

date: "2022"
sortDate: "2022-12-31"  # Use Dec 31 for year-only
```

### Complete Example

Here's a full milestone with everything:

```yaml
  - id: "product-launch-2024"
    date: "March 2024"
    sortDate: "2024-03-15"
    title: "Launched Our First Product"
    description: "<p>After 6 months of development, we launched our SaaS platform to the public.</p><p>Reached 500 users in the first week! Read the <a href='https://techcrunch.com/article'>TechCrunch article</a>.</p>"
    tags:
      - "Product"
      - "Launch"
      - "Startup"
    media:
      - type: "image"
        src: "/images/product-launch-stage.jpg"
        alt: "Product launch event"
        caption: "Launch event with the team"
      - type: "embed"
        platform: "x"
        url: "https://x.com/yourhandle/status/1234567890"
      - type: "video"
        src: "/videos/product-demo.mp4"
        caption: "Product demo - 2 minutes"
```

### Alternative: MDX Approach

For more control, edit `content/timeline.mdx` directly:

```mdx
import TimelineItem from '@/components/TimelineItem'
import EmbedX from '@/components/embeds/EmbedX'
import ImageBlock from '@/components/ImageBlock'

<TimelineItem 
  date="March 2024" 
  title="Launched Our First Product"
  tags={["Product", "Launch"]}
>
  After 6 months of development, we launched our SaaS platform.
  
  Reached **500 users** in the first week!
  
  <ImageBlock 
    src="/images/product-launch.jpg"
    alt="Product launch event"
    caption="Launch event with the team"
  />
  
  <EmbedX url="https://x.com/yourhandle/status/1234567890" />
</TimelineItem>
```

**Note:** To use the MDX approach, rename `app/page-mdx.tsx` to `app/page.tsx`

### Common Mistakes to Avoid

❌ **Wrong:** Forgetting to add images to `public/images/` first  
✅ **Right:** Add image to folder, then reference in YAML

❌ **Wrong:** Using future dates in `sortDate`  
✅ **Right:** Use actual date or approximate (e.g., 1st of month)

❌ **Wrong:** Forgetting quotes around strings  
✅ **Right:** Always use quotes: `date: "January 2024"`

❌ **Wrong:** Inconsistent indentation (2 spaces required)  
✅ **Right:** Use exactly 2 spaces for each indent level

❌ **Wrong:** Adding milestone at bottom of list  
✅ **Right:** Add at TOP for newest-first ordering

### Testing Your Changes

1. **Development mode:** Run `npm run dev` and visit http://localhost:3000
2. **Changes appear instantly** when you save the file
3. **Check for errors** in terminal if milestone doesn't appear
4. **Validate YAML** - Make sure indentation is correct (2 spaces)

### Need Help?

- See `CONTENT-GUIDE.md` for choosing between YAML and MDX approaches
- See `USING-MDX.md` for MDX component documentation
- See `EMBED-COMPONENTS.md` for embed examples
- See `IMAGE-COMPONENTS.md` for image examples
- See `VIDEO-COMPONENTS.md` for video examples

---

## Updating Site Info

Edit `config/site.ts` to update:
- Your name/brand
- Social media links (LinkedIn, X, Email)
- Location
- SEO metadata (keywords, descriptions)
- OpenGraph images

This config is used throughout the site (header, footer, SEO, social sharing), so everything stays in sync.

### SEO & Social Media

The site includes comprehensive SEO optimization:
- ✅ Auto-generated favicon and app icons
- ✅ OpenGraph images for social sharing  
- ✅ Twitter Card metadata
- ✅ Structured data (JSON-LD)
- ✅ Sitemap.xml and robots.txt
- ✅ Canonical URLs
- ✅ Rich meta tags

**Documentation:**
- `SEO.md` - Complete SEO guide
- `SEO-SUMMARY.md` - Quick reference
- `SITEMAP-ROBOTS.md` - Sitemap & robots.txt guide
- `VERIFY-SEO-FILES.md` - Quick verification checklist

## Project Structure

```
├── app/
│   ├── layout.tsx          # Root layout with SEO
│   ├── page.tsx            # Home page
│   └── globals.css         # Global styles
├── components/
│   ├── Header.tsx          # Site header
│   ├── Footer.tsx          # Site footer
│   ├── Timeline.tsx        # Timeline container
│   ├── TimelineEntry.tsx   # Individual entries
│   └── embeds/             # Social media embeds
├── content/
│   └── milestones.mdx      # All timeline content
├── config/
│   └── site.ts             # Site configuration
├── lib/
│   └── mdx.ts              # MDX parsing
└── types/
    └── milestone.ts        # TypeScript types
```

## Deployment

### Vercel (Recommended)

1. Push your code to GitHub
2. Import project in [Vercel](https://vercel.com)
3. Deploy automatically

### Other Platforms

Run `npm run build` to create an optimized production build in `.next/`

## Performance

- ✅ Static generation for fast loading
- ✅ Optimized images with `next/image` (WebP/AVIF)
- ✅ Lazy-loaded social media embeds
- ✅ Minimal JavaScript (95.8 KB first load)
- ✅ Mobile-first responsive design
- ✅ Core Web Vitals optimized (LCP < 2.5s, CLS < 0.1)
- ✅ Font optimization with `display: swap`
- ✅ Long-term caching (1 year for images/videos)
- ✅ SEO-ready (robots.txt, sitemap.xml, manifest)

**See `PERFORMANCE.md` for detailed optimization report.**  
**See `PERFORMANCE-TESTING.md` for testing guide.**

## License

© 2026 Wongsworth. All rights reserved.
