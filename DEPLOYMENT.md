# Deployment Guide for Wongsworth.com

## ✅ Pre-Deployment Checklist

Your site is ready to deploy! Here's what's confirmed:

- ✅ Production build successful (no errors)
- ✅ No linting errors
- ✅ All images optimized and loading
- ✅ 6 milestones with content and images
- ✅ Responsive design (mobile-first)
- ✅ SEO metadata configured
- ✅ Performance optimized (87.3 kB total JS)

---

## 🚀 Deployment Options

### Option 1: Vercel (Recommended - Easiest)

Vercel is made by the creators of Next.js and offers the best performance and easiest deployment.

#### Steps:
1. **Create a GitHub repository** (if you haven't already):
   ```bash
   cd /Users/sifter/Desktop/WONGSWORTH.COM
   git init
   git add .
   git commit -m "Initial commit - Wongsworth.com timeline"
   git branch -M main
   git remote add origin YOUR_GITHUB_REPO_URL
   git push -u origin main
   ```

2. **Deploy to Vercel**:
   - Go to [vercel.com](https://vercel.com)
   - Sign in with GitHub
   - Click "New Project"
   - Import your repository
   - Vercel will auto-detect Next.js settings
   - Click "Deploy"

3. **Configure Custom Domain**:
   - In Vercel Dashboard → Settings → Domains
   - Add `wongsworth.com` and `www.wongsworth.com`
   - Update your domain's DNS records (Vercel will show you exactly what to add)
   - Wait for DNS propagation (5 minutes to 24 hours)

**Cost**: Free for personal projects

---

### Option 2: Netlify

#### Steps:
1. Create GitHub repo (same as Option 1)
2. Go to [netlify.com](https://netlify.com)
3. Sign in and click "Add new site" → "Import an existing project"
4. Choose your GitHub repo
5. Build settings:
   - Build command: `npm run build`
   - Publish directory: `.next`
6. Deploy
7. Add custom domain in Site settings → Domain management

**Cost**: Free for personal projects

---

### Option 3: AWS Amplify

Good if you're already using AWS infrastructure.

#### Steps:
1. Create GitHub repo (same as Option 1)
2. Go to AWS Amplify console
3. Choose "Host web app" → GitHub
4. Select your repository
5. Build settings are auto-detected for Next.js
6. Deploy
7. Add custom domain in Domain management

**Cost**: Pay-as-you-go (usually ~$1-5/month for a site like this)

---

## 📋 Before You Deploy - Update This Setting

Update the site URL in `/config/site.ts`:

```typescript
url: "https://wongsworth.com",  // Currently set correctly!
```

---

## 🔧 Environment Variables

If you add any API keys or secrets in the future, remember to:

1. Create `.env.local` (already in `.gitignore`)
2. Add the same variables to your deployment platform (Vercel/Netlify/AWS)

---

## 📱 After Deployment

### Test Your Site:
- [ ] Visit https://wongsworth.com
- [ ] Test on mobile device
- [ ] Check all images load
- [ ] Test all links (LinkedIn, X, email)
- [ ] Verify timeline displays correctly

### SEO:
- [ ] Submit sitemap to Google Search Console: `https://wongsworth.com/sitemap.xml`
- [ ] Test on [PageSpeed Insights](https://pagespeed.web.dev/)
- [ ] Share on social media to test OpenGraph images

---

## 🆘 Troubleshooting

**Images not loading?**
- Make sure all images in `/public/images/` are committed to Git

**Build fails?**
- Run `npm run build` locally first
- Check deployment logs for specific errors

**Domain not working?**
- DNS can take 24-48 hours to propagate
- Use [dnschecker.org](https://dnschecker.org/) to verify

---

## 🔄 Future Updates

To update your live site:

1. Edit `/content/timeline.mdx` locally
2. Test locally: `npm run build && npm start`
3. Commit and push to GitHub:
   ```bash
   git add .
   git commit -m "Add new milestone"
   git push
   ```
4. Your site will auto-deploy in 1-2 minutes!

---

## 📞 Need Help?

- Vercel Docs: https://nextjs.org/docs/deployment
- Vercel Support: https://vercel.com/support
- Next.js Discord: https://nextjs.org/discord
