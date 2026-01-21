# Verify SEO Files - Quick Check

## ✅ Files Already Implemented

All SEO files are working! Here's how to verify.

---

## Build Verification

Run `npm run build` and look for these lines:

```
Route (app)
├ ○ /robots.txt                          0 B                0 B  ✅
├ ○ /sitemap.xml                         0 B                0 B  ✅
├ ○ /manifest.webmanifest                0 B                0 B  ✅

○  (Static)  prerendered as static content
```

**All three present = Working!** ✅

---

## Quick Test (After Build)

### 1. Start Production Server

```bash
npm run build
npm start
```

### 2. Test Each File

**robots.txt:**
```bash
curl http://localhost:3000/robots.txt
```

**Expected output:**
```
User-agent: *
Allow: /
Disallow: /api/
Disallow: /_next/

Sitemap: https://wongsworth.com/sitemap.xml
```

**sitemap.xml:**
```bash
curl http://localhost:3000/sitemap.xml
```

**Expected output:**
```xml
<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
  <url>
    <loc>https://wongsworth.com</loc>
    <lastmod>2024-01-20...</lastmod>
    <changefreq>weekly</changefreq>
    <priority>1.0</priority>
  </url>
</urlset>
```

**manifest.webmanifest:**
```bash
curl http://localhost:3000/manifest.webmanifest
```

**Expected output:**
```json
{
  "name": "Wongsworth",
  "short_name": "Wongsworth",
  "description": "Professional timeline...",
  "start_url": "/",
  "display": "standalone",
  "background_color": "#ffffff",
  "theme_color": "#000000",
  "icons": [...]
}
```

---

## Browser Test

### 1. Start Server

```bash
npm run dev
```

### 2. Visit URLs

Open in browser:
- http://localhost:3000/robots.txt
- http://localhost:3000/sitemap.xml
- http://localhost:3000/manifest.webmanifest

All should display content (not 404).

---

## Production Test (After Deployment)

### 1. Check robots.txt

Visit: `https://yourdomain.com/robots.txt`

**Should show:**
- User-agent: *
- Allow: /
- Disallow: /api/
- Your domain in sitemap URL

### 2. Check sitemap.xml

Visit: `https://yourdomain.com/sitemap.xml`

**Should show:**
- Valid XML
- Your domain (not localhost!)
- Current date
- Proper structure

### 3. Validate Sitemap

**Tool:** https://www.xml-sitemaps.com/validate-xml-sitemap.html

1. Enter: `https://yourdomain.com/sitemap.xml`
2. Click "Validate"
3. Should say: "Valid sitemap"

---

## Common Issues

### Issue: Shows localhost in sitemap

**Fix:** Update `config/site.ts`:
```typescript
url: "https://yourdomain.com", // ← Change this!
```

Then rebuild:
```bash
npm run build
```

### Issue: 404 on /robots.txt

**Check:**
1. File `app/robots.ts` exists ✅
2. No TypeScript errors
3. Rebuild: `npm run build`

### Issue: 404 on /sitemap.xml

**Check:**
1. File `app/sitemap.ts` exists ✅
2. No TypeScript errors
3. Rebuild: `npm run build`

---

## What You Have

### Source Files

```
app/
├── robots.ts           ← Generates /robots.txt
├── sitemap.ts          ← Generates /sitemap.xml
└── manifest.ts         ← Generates /manifest.webmanifest
```

### Generated Routes

```
Public URLs:
├── /robots.txt         ← Auto-generated
├── /sitemap.xml        ← Auto-generated
└── /manifest.webmanifest ← Auto-generated
```

---

## After Deployment

### Submit to Search Console

**Google:**
1. https://search.google.com/search-console
2. Add property → Verify
3. Sitemaps → Enter `sitemap.xml` → Submit

**Bing:**
1. https://www.bing.com/webmasters
2. Add site → Verify  
3. Sitemaps → Submit sitemap URL

---

## Status

✅ **robots.txt** - Implemented and working  
✅ **sitemap.xml** - Implemented and working  
✅ **manifest** - Implemented and working  

**All files are production-ready!**

Just update `siteConfig.url` before deployment.

---

## Quick Checklist

Before deployment:
- [ ] Update `siteConfig.url` with real domain
- [ ] Run `npm run build`
- [ ] Verify no errors
- [ ] Test locally

After deployment:
- [ ] Visit yourdomain.com/robots.txt
- [ ] Visit yourdomain.com/sitemap.xml
- [ ] Validate sitemap
- [ ] Submit to Search Console

**Done!** 🎉
