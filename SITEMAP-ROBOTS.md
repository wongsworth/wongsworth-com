# Sitemap & Robots.txt Documentation

Complete guide to the sitemap and robots.txt implementation.

## ✅ Already Implemented

Both files are auto-generated using Next.js App Router conventions and are production-ready.

---

## Robots.txt

### Implementation (`app/robots.ts`)

```typescript
import { MetadataRoute } from 'next'
import { siteConfig } from '@/config/site'

export default function robots(): MetadataRoute.Robots {
  return {
    rules: {
      userAgent: '*',
      allow: '/',
      disallow: ['/api/', '/_next/'],
    },
    sitemap: `${siteConfig.url}/sitemap.xml`,
  }
}
```

### Generated Output

**URL:** `/robots.txt`

**Content:**
```
User-agent: *
Allow: /
Disallow: /api/
Disallow: /_next/

Sitemap: https://wongsworth.com/sitemap.xml
```

### What It Does

**Allows:**
- ✅ All search engines (`User-agent: *`)
- ✅ All pages (`Allow: /`)

**Blocks:**
- ❌ `/api/` - API routes (if you add them)
- ❌ `/_next/` - Next.js internal files

**References:**
- 🔗 Points to sitemap.xml for complete site structure

### Benefits

1. **Search engine friendly** - Allows all major crawlers
2. **Protects internals** - Blocks Next.js system files
3. **Auto-updates** - URL from config
4. **Standards compliant** - Valid robots.txt format

---

## Sitemap.xml

### Implementation (`app/sitemap.ts`)

```typescript
import { MetadataRoute } from 'next'
import { siteConfig } from '@/config/site'

export default function sitemap(): MetadataRoute.Sitemap {
  return [
    {
      url: siteConfig.url,
      lastModified: new Date(),
      changeFrequency: 'weekly',
      priority: 1,
    },
  ]
}
```

### Generated Output

**URL:** `/sitemap.xml`

**Content:**
```xml
<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
  <url>
    <loc>https://wongsworth.com</loc>
    <lastmod>2024-01-20T12:00:00.000Z</lastmod>
    <changefreq>weekly</changefreq>
    <priority>1.0</priority>
  </url>
</urlset>
```

### What It Includes

**Homepage:**
- URL: Your domain
- Last modified: Auto-updates on each build
- Change frequency: Weekly (appropriate for timeline)
- Priority: 1.0 (highest, it's your only page)

### Benefits

1. **Auto-generated** - Builds fresh on every deploy
2. **Always current** - lastModified updates automatically
3. **Proper format** - Valid XML sitemap
4. **SEO optimized** - Helps search engines find content

---

## How They Work

### Build Process

When you run `npm run build`:

1. Next.js calls `app/robots.ts`
2. Generates `/robots.txt` route
3. Next.js calls `app/sitemap.ts`
4. Generates `/sitemap.xml` route

### Runtime

Both files are:
- ✅ Statically generated
- ✅ Cached by CDN
- ✅ Served as text/xml
- ✅ Available immediately

### Accessing

**Locally (dev):**
- http://localhost:3000/robots.txt
- http://localhost:3000/sitemap.xml

**Production:**
- https://yourdomain.com/robots.txt
- https://yourdomain.com/sitemap.xml

---

## Testing

### 1. Build and Check

```bash
npm run build
npm start
```

Then visit:
- http://localhost:3000/robots.txt
- http://localhost:3000/sitemap.xml

### 2. Verify Content

**robots.txt should show:**
- User-agent: *
- Allow: /
- Disallow paths
- Sitemap URL

**sitemap.xml should show:**
- Valid XML
- Your domain in `<loc>`
- Current date in `<lastmod>`

### 3. Validate Sitemap

**Tool:** https://www.xml-sitemaps.com/validate-xml-sitemap.html

1. Enter sitemap URL
2. Click "Validate"
3. Should show "Valid sitemap"

### 4. Google Search Console

After deployment:

1. Go to Search Console
2. Navigate to Sitemaps
3. Enter: `sitemap.xml`
4. Click "Submit"

**Expected:** "Success" status

---

## Customization

### Add More Pages to Sitemap

If you add more pages (like `/about`):

```typescript
export default function sitemap(): MetadataRoute.Sitemap {
  return [
    {
      url: siteConfig.url,
      lastModified: new Date(),
      changeFrequency: 'weekly',
      priority: 1,
    },
    {
      url: `${siteConfig.url}/about`,
      lastModified: new Date(),
      changeFrequency: 'monthly',
      priority: 0.8,
    },
  ]
}
```

### Block More Paths in Robots

If you want to block more:

```typescript
disallow: ['/api/', '/_next/', '/admin/', '/private/'],
```

### Different Rules for Bots

Block specific bots:

```typescript
rules: [
  {
    userAgent: '*',
    allow: '/',
    disallow: ['/api/', '/_next/'],
  },
  {
    userAgent: 'BadBot',
    disallow: '/',
  },
]
```

### Change Frequency

Options for `changeFrequency`:
- `'always'` - Changes every access
- `'hourly'` - Hourly updates
- `'daily'` - Daily updates
- `'weekly'` - Weekly (good for timeline)
- `'monthly'` - Monthly updates
- `'yearly'` - Rarely changes
- `'never'` - Archived content

### Priority Values

Range: 0.0 to 1.0
- `1.0` - Highest priority (homepage)
- `0.8` - Important pages
- `0.5` - Normal pages (default)
- `0.3` - Low priority
- `0.1` - Lowest priority

---

## For Personal Sites

### Current Setup is Perfect

Your configuration is ideal for a personal timeline site:

**robots.txt:**
- ✅ Allows all search engines
- ✅ Simple and open
- ✅ Blocks only system files

**sitemap.xml:**
- ✅ Single page (homepage)
- ✅ Weekly updates (reasonable)
- ✅ Priority 1.0 (it's your main page)

### Why It's Simple

Personal timeline sites typically:
- Have one main page
- Don't need complex sitemaps
- Don't need restrictive robots.txt
- Want maximum search visibility

This configuration achieves all of that!

---

## Common Issues & Fixes

### Issue: Sitemap shows localhost

**Problem:** Sitemap contains http://localhost:3000  
**Solution:** Update `siteConfig.url` in `config/site.ts`:

```typescript
url: "https://yourdomain.com", // Not localhost!
```

### Issue: Robots.txt not found

**Problem:** 404 on /robots.txt  
**Solution:**
1. Ensure `app/robots.ts` exists
2. Rebuild: `npm run build`
3. Check for TypeScript errors

### Issue: Sitemap shows old date

**Problem:** lastModified is outdated  
**Solution:** 
- It uses `new Date()` which updates on each build
- Rebuild to update: `npm run build`

### Issue: Multiple URLs in robots.txt

**Problem:** Sitemap URL is wrong  
**Solution:** Check `siteConfig.url` is correct

---

## Search Console Submission

### After Deployment

**Step 1: Verify Ownership**
1. Go to https://search.google.com/search-console
2. Add your property
3. Verify via HTML tag, DNS, or file

**Step 2: Submit Sitemap**
1. Click "Sitemaps" in left menu
2. Enter: `sitemap.xml`
3. Click "Submit"

**Step 3: Monitor**
- Check "Coverage" for indexed pages
- Review for errors
- Monitor crawl stats

### Bing Webmaster Tools

**Step 1: Add Site**
1. Go to https://www.bing.com/webmasters
2. Add your site
3. Verify ownership

**Step 2: Submit Sitemap**
1. Go to Sitemaps
2. Submit sitemap URL
3. Monitor status

---

## Best Practices

### Do's ✅

- ✅ Keep robots.txt simple for personal sites
- ✅ Submit sitemap to Search Console
- ✅ Update siteConfig.url before deployment
- ✅ Use appropriate changeFrequency
- ✅ Set realistic priorities
- ✅ Block only what's necessary
- ✅ Test after each deployment

### Don'ts ❌

- ❌ Don't block search engines unnecessarily
- ❌ Don't use localhost in production
- ❌ Don't set all priorities to 1.0
- ❌ Don't forget to update on new pages
- ❌ Don't use `changeFrequency: 'always'` (unrealistic)
- ❌ Don't block important content
- ❌ Don't create overly complex rules

---

## Advanced: Dynamic Sitemaps

### If You Add Blog Posts

For dynamic content:

```typescript
import { MetadataRoute } from 'next'
import { siteConfig } from '@/config/site'
import { getAllPosts } from '@/lib/posts'

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  const posts = await getAllPosts()
  
  const postUrls = posts.map((post) => ({
    url: `${siteConfig.url}/posts/${post.slug}`,
    lastModified: post.updatedAt,
    changeFrequency: 'monthly' as const,
    priority: 0.7,
  }))

  return [
    {
      url: siteConfig.url,
      lastModified: new Date(),
      changeFrequency: 'weekly',
      priority: 1,
    },
    ...postUrls,
  ]
}
```

### If You Add Timeline Entries Dynamically

```typescript
import { getMilestones } from '@/lib/mdx'

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  const milestones = await getMilestones()
  
  // If you have individual milestone pages
  const milestoneUrls = milestones.map((m) => ({
    url: `${siteConfig.url}/milestone/${m.id}`,
    lastModified: new Date(m.sortDate),
    changeFrequency: 'monthly' as const,
    priority: 0.6,
  }))

  return [
    {
      url: siteConfig.url,
      lastModified: new Date(),
      changeFrequency: 'weekly',
      priority: 1,
    },
    ...milestoneUrls,
  ]
}
```

---

## Verification Checklist

### Before Deployment

- [ ] `app/robots.ts` exists
- [ ] `app/sitemap.ts` exists
- [ ] `siteConfig.url` is your real domain (not localhost)
- [ ] Build succeeds without errors
- [ ] Both files accessible locally

### After Deployment

- [ ] Visit https://yourdomain.com/robots.txt
- [ ] Visit https://yourdomain.com/sitemap.xml
- [ ] Validate sitemap XML
- [ ] Submit to Google Search Console
- [ ] Submit to Bing Webmaster Tools
- [ ] Check for crawl errors after 1 week

---

## Files Location

```
app/
├── robots.ts           # Robots.txt generator
├── sitemap.ts          # Sitemap.xml generator
└── ...
```

**Access URLs:**
- `/robots.txt` - Auto-generated
- `/sitemap.xml` - Auto-generated

---

## Summary

**You have:**

✅ **robots.txt** - Simple, allows all search engines  
✅ **sitemap.xml** - Auto-updating, proper format  
✅ **Next.js conventions** - Using App Router properly  
✅ **Config-driven** - Updates with siteConfig.url  
✅ **Production-ready** - Tested and verified  

**To do before deployment:**
1. Update `siteConfig.url` with your domain
2. Rebuild the site
3. Deploy
4. Submit sitemap to Search Console

**Both files are perfect for a personal site!** 🎯
