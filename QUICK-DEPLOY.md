# 🚀 Quick Deploy to Vercel (5 Minutes)

## Step 1: Install Git (if needed)
```bash
git --version
```
If you don't have git, download from: https://git-scm.com/

## Step 2: Initialize Git & Push to GitHub

```bash
cd /Users/sifter/Desktop/WONGSWORTH.COM

# Initialize git
git init
git add .
git commit -m "Initial commit - Wongsworth.com"

# Create GitHub repo at https://github.com/new
# Name it: wongsworth-com
# Then run:
git branch -M main
git remote add origin https://github.com/YOUR_USERNAME/wongsworth-com.git
git push -u origin main
```

## Step 3: Deploy to Vercel

1. Go to: https://vercel.com/signup
2. Sign in with GitHub
3. Click "New Project"
4. Import "wongsworth-com" repository
5. Click "Deploy" (all settings auto-detected!)

**Your site will be live in 2 minutes at:**
`https://wongsworth-com-xyz.vercel.app`

## Step 4: Add Custom Domain

1. In Vercel Dashboard → Your Project → Settings → Domains
2. Add domain: `wongsworth.com`
3. Vercel will show DNS records to add
4. Go to your domain registrar (GoDaddy, Namecheap, etc.)
5. Add the DNS records Vercel provides:
   - Type: `A` or `CNAME`
   - Name: `@` and `www`
   - Value: (shown by Vercel)
6. Wait 5 minutes to 24 hours for DNS to propagate

**Done! Your site will be live at https://wongsworth.com**

---

## Future Updates (After Initial Deploy)

1. Edit `/content/timeline.mdx`
2. Commit changes:
   ```bash
   git add .
   git commit -m "Add new milestone"
   git push
   ```
3. Vercel auto-deploys in 1-2 minutes!

---

## ✅ Your Site Status

- ✅ Build tested and working
- ✅ 6 milestones + 5 images
- ✅ Mobile responsive
- ✅ SEO optimized
- ✅ Performance optimized (96.2 kB)
- ✅ All links working

**Ready to deploy!** 🎉
