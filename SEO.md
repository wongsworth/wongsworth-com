# SEO Documentation

Complete guide to SEO implementation for Wongsworth.com.

## Overview

This site is fully optimized for search engines with:
- ✅ Comprehensive metadata (title, description, keywords)
- ✅ OpenGraph tags for social sharing
- ✅ Twitter Card metadata
- ✅ Canonical URLs
- ✅ Structured data (JSON-LD)
- ✅ Auto-generated sitemap.xml
- ✅ Auto-generated robots.txt
- ✅ PWA manifest
- ✅ Favicon and app icons
- ✅ Semantic HTML

---

## Metadata Structure

### Site-Wide Metadata (`app/layout.tsx`)

**Configured in root layout:**
```typescript
{
  metadataBase: "https://wongsworth.com",
  title: {
    default: "Wongsworth | Professional Timeline",
    template: "%s | Wongsworth"
  },
  description: "Professional timeline showcasing...",
  keywords: [...],
  authors: [...],
  openGraph: {...},
  twitter: {...},
  robots: {...}
}
```

**What it does:**
- Sets default title and description
- Provides template for page titles
- Defines social media sharing images
- Controls search engine indexing

### Page-Specific Metadata

**Homepage** (`app/page.tsx`):
```typescript
{
  title: "Professional Timeline", // Uses template
  description: "A reverse-chronological timeline...",
  alternates: {
    canonical: "https://wongsworth.com"
  }
}
```

**Result:**
- Page title: "Professional Timeline | Wongsworth"
- Unique description for homepage
- Canonical URL set

---

## Social Media Sharing

### OpenGraph (Facebook, LinkedIn)

**Configured tags:**
- `og:type` - "website"
- `og:url` - Canonical URL
- `og:title` - Page title
- `og:description` - Page description
- `og:image` - 1200x630 image
- `og:image:width` - 1200
- `og:image:height` - 630
- `og:image:alt` - Image description
- `og:site_name` - "Wongsworth"
- `og:locale` - "en_US"

**Preview:**
When shared on Facebook/LinkedIn, shows:
- Large image (1200x630)
- Site title
- Description
- Domain name

### Twitter Cards

**Configured tags:**
- `twitter:card` - "summary_large_image"
- `twitter:site` - "@yourhandle"
- `twitter:creator` - "@yourhandle"
- `twitter:title` - Page title
- `twitter:description` - Page description
- `twitter:image` - Card image
- `twitter:image:alt` - Image description

**Preview:**
When shared on X (Twitter), shows:
- Large card with image
- Title and description
- Attribution to your handle

---

## Generated Assets

### 1. Favicon (`app/icon.tsx`)

**Specs:**
- Size: 32x32
- Format: PNG
- Dynamic generation
- Black background, white "W"

**Usage:**
Automatically appears in browser tabs.

### 2. Apple Touch Icon (`app/apple-icon.tsx`)

**Specs:**
- Size: 180x180
- Format: PNG
- For iOS home screen
- High-quality icon

**Usage:**
When users save site to iOS home screen.

### 3. OpenGraph Image (`app/opengraph-image.tsx`)

**Specs:**
- Size: 1200x630
- Format: PNG
- Dynamic generation
- Professional design

**Content:**
- Site name (large)
- "Professional Timeline" subtitle
- Location (Toronto, Canada)
- White background, minimal design

### 4. Twitter Image (`app/twitter-image.tsx`)

**Specs:**
- Size: 1200x630
- Format: PNG
- Same design as OG image
- Optimized for Twitter

---

## Structured Data (JSON-LD)

### Person Schema

**Injected on homepage:**
```json
{
  "@context": "https://schema.org",
  "@type": "Person",
  "name": "Wongsworth",
  "url": "https://wongsworth.com",
  "image": "https://wongsworth.com/og-image.png",
  "sameAs": [
    "https://linkedin.com/in/yourprofile",
    "https://x.com/yourhandle"
  ],
  "address": {
    "@type": "PostalAddress",
    "addressLocality": "Toronto",
    "addressRegion": "ON",
    "addressCountry": "CA"
  }
}
```

**Benefits:**
- Rich search results
- Knowledge panel eligibility
- Social profile linking

### WebSite Schema

**Also on homepage:**
```json
{
  "@context": "https://schema.org",
  "@type": "WebSite",
  "name": "Wongsworth",
  "description": "Professional timeline...",
  "url": "https://wongsworth.com",
  "inLanguage": "en-US"
}
```

**Benefits:**
- Site-wide context
- Language information
- Search result enhancements

---

## Canonical URLs

**Set on every page:**
```typescript
alternates: {
  canonical: "https://wongsworth.com"
}
```

**Purpose:**
- Prevents duplicate content issues
- Consolidates link equity
- Indicates preferred URL

**Update when deployed:**
Replace `https://wongsworth.com` with your actual domain.

---

## Robots & Sitemap

### Robots.txt (`app/robots.ts`)

**Generated automatically:**
```
User-agent: *
Allow: /
Disallow: /api/
Disallow: /_next/

Sitemap: https://wongsworth.com/sitemap.xml
```

**Access:** `/robots.txt`

**Configuration:**
- Allows all search engines
- Blocks private paths
- Points to sitemap

### Sitemap.xml (`app/sitemap.ts`)

**Generated automatically:**
```xml
<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
  <url>
    <loc>https://wongsworth.com</loc>
    <lastmod>2024-01-20</lastmod>
    <changefreq>weekly</changefreq>
    <priority>1.0</priority>
  </url>
</urlset>
```

**Access:** `/sitemap.xml`

**Features:**
- Auto-updates with current date
- Includes all public pages
- Correct priority and frequency

---

## Configuration

### Site Config (`config/site.ts`)

**All SEO settings in one place:**
```typescript
{
  name: "Wongsworth",
  title: "Wongsworth | Professional Timeline",
  description: "Professional timeline...",
  keywords: [...],
  url: "https://wongsworth.com",
  social: {
    linkedin: "...",
    x: "...",
    xHandle: "@yourhandle",
  },
  author: {...},
  ogImage: "/og-image.png",
}
```

**To update:**
1. Edit `config/site.ts`
2. Update URLs, handles, email
3. Changes propagate everywhere

---

## How to Update SEO

### 1. Update Site Info

Edit `config/site.ts`:
```typescript
{
  name: "Your Name",
  description: "Your description",
  url: "https://yourdomain.com",
  social: {
    linkedin: "https://linkedin.com/in/yourprofile",
    x: "https://x.com/yourhandle",
    xHandle: "@yourhandle",
    email: "you@domain.com",
  },
}
```

### 2. Update Keywords

Add relevant keywords:
```typescript
keywords: [
  "your expertise",
  "your industry",
  "your location",
  "specific skills",
]
```

### 3. Customize Images

Replace generated images with custom ones:

**Option 1:** Keep generated images (recommended)
- Automatically updates with config changes
- No manual work needed

**Option 2:** Use custom images
1. Create images at correct sizes
2. Place in `public/` folder
3. Update `siteConfig.ogImage`

### 4. Add Page Metadata

For new pages:
```typescript
export const metadata: Metadata = {
  title: "Page Title",
  description: "Page description",
  alternates: {
    canonical: `${siteConfig.url}/page-path`
  }
}
```

---

## Testing SEO

### 1. Google Rich Results Test

**URL:** https://search.google.com/test/rich-results

1. Enter your URL
2. Test structured data
3. Verify Person and WebSite schemas

**Expected:** No errors, both schemas detected

### 2. Facebook Sharing Debugger

**URL:** https://developers.facebook.com/tools/debug/

1. Enter your URL
2. Click "Scrape Again"
3. Preview how it appears on Facebook

**Expected:**
- Image loads (1200x630)
- Title and description correct
- No warnings

### 3. Twitter Card Validator

**URL:** https://cards-dev.twitter.com/validator

1. Enter your URL
2. Preview card
3. Check image and text

**Expected:**
- Summary Large Image card
- Image displays correctly
- Metadata accurate

### 4. Check Metadata in Browser

**View page source** (Cmd+U):
```html
<title>Professional Timeline | Wongsworth</title>
<meta name="description" content="..." />
<meta property="og:title" content="..." />
<meta name="twitter:card" content="..." />
<link rel="canonical" href="..." />
```

### 5. Verify Files

Check these URLs work:
- `/robots.txt` - Shows robots directives
- `/sitemap.xml` - Shows XML sitemap
- `/manifest.webmanifest` - Shows PWA manifest
- `/favicon.ico` - Shows favicon

---

## Search Console Setup

### 1. Google Search Console

**Setup:**
1. Go to https://search.google.com/search-console
2. Add property (your domain)
3. Verify ownership (HTML tag or DNS)
4. Submit sitemap.xml

**Monitor:**
- Indexing status
- Core Web Vitals
- Search performance
- Mobile usability

### 2. Bing Webmaster Tools

**Setup:**
1. Go to https://www.bing.com/webmasters
2. Add site
3. Verify ownership
4. Submit sitemap

**Monitor:**
- Site scan reports
- SEO reports
- Backlinks

---

## Best Practices

### Do's ✅

- ✅ Keep titles under 60 characters
- ✅ Keep descriptions under 160 characters
- ✅ Use unique titles for each page
- ✅ Include target keywords naturally
- ✅ Update metadata when content changes
- ✅ Use semantic HTML (h1, h2, article, etc.)
- ✅ Add alt text to all images
- ✅ Keep URLs clean and descriptive

### Don'ts ❌

- ❌ Keyword stuffing in titles/descriptions
- ❌ Duplicate meta descriptions
- ❌ Missing or generic titles
- ❌ Using the same image for all pages
- ❌ Forgetting to update canonical URLs
- ❌ Blocking important pages in robots.txt
- ❌ Using multiple h1 tags per page

---

## SEO Checklist

### Before Launch

- [ ] Update `config/site.ts` with real info
- [ ] Replace placeholder social media links
- [ ] Set correct domain in `siteConfig.url`
- [ ] Update X handle in config
- [ ] Verify all metadata uses config values
- [ ] Test social sharing (Facebook, Twitter)
- [ ] Check robots.txt is accessible
- [ ] Verify sitemap.xml generates correctly
- [ ] Test structured data (Rich Results Test)
- [ ] Review all page titles and descriptions

### After Launch

- [ ] Submit sitemap to Google Search Console
- [ ] Submit sitemap to Bing Webmaster Tools
- [ ] Set up Google Analytics (optional)
- [ ] Monitor indexing status
- [ ] Check Core Web Vitals report
- [ ] Test social sharing on live site
- [ ] Verify canonical URLs point to live domain
- [ ] Update any hardcoded localhost URLs

### Monthly

- [ ] Review Search Console performance
- [ ] Check for crawl errors
- [ ] Monitor keyword rankings
- [ ] Update content based on search queries
- [ ] Review and optimize low-performing pages

---

## Advanced SEO

### Adding More Structured Data

For timeline entries:
```typescript
{
  "@context": "https://schema.org",
  "@type": "Event",
  "name": "Started at Company X",
  "startDate": "2024-01-15",
  "location": "Toronto, Canada",
  "organizer": {
    "@type": "Person",
    "name": "Wongsworth"
  }
}
```

### Multiple Languages

To add language alternatives:
```typescript
alternates: {
  canonical: "https://wongsworth.com",
  languages: {
    'en-US': 'https://wongsworth.com',
    'fr-CA': 'https://wongsworth.com/fr'
  }
}
```

### Custom OG Images per Page

Create page-specific OG images:
```typescript
// app/about/opengraph-image.tsx
export default async function OGImage() {
  return new ImageResponse(/* custom design */)
}
```

---

## Common Issues & Fixes

### Issue: Social sharing not working

**Problem:** Old preview shows when sharing  
**Solution:**
1. Use Facebook debugger to rescrape
2. Use Twitter validator to force update
3. Wait 24 hours for cache to clear

### Issue: Wrong image in search results

**Problem:** Google shows different image  
**Solution:**
1. Check structured data is correct
2. Verify OG image is 1200x630
3. Wait for Google to recrawl
4. Use Search Console to request reindex

### Issue: Sitemap not updating

**Problem:** Sitemap shows old URLs  
**Solution:**
1. Rebuild site (`npm run build`)
2. Verify sitemap.ts has correct logic
3. Check `siteConfig.url` is correct
4. Resubmit in Search Console

---

## Resources

- [Next.js Metadata Docs](https://nextjs.org/docs/app/building-your-application/optimizing/metadata)
- [Google Search Central](https://developers.google.com/search)
- [Schema.org](https://schema.org)
- [OpenGraph Protocol](https://ogp.me)
- [Twitter Cards](https://developer.twitter.com/en/docs/twitter-for-websites/cards)

---

## Summary

**Your site has:**
- ✅ Complete metadata coverage
- ✅ Social media optimization
- ✅ Structured data (JSON-LD)
- ✅ Auto-generated SEO files
- ✅ Dynamic OG images
- ✅ Canonical URLs
- ✅ Search engine ready

**Next steps:**
1. Update `config/site.ts` with your info
2. Test social sharing
3. Submit sitemap to Search Console
4. Monitor performance

**SEO is production-ready!** 🚀
