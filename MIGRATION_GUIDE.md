# Netlify to Vercel Migration Guide

## Migration Summary

This guide covers the migration of the Tahoe Fire Dancers website from Netlify to Vercel with zero downtime and full feature parity.

## Project Analysis Results

### Current Configuration
- **Framework**: Astro 5.2.3 with Preact and React integrations
- **CMS**: Sanity.io (Project ID: 8n6kitqe, Dataset: production)
- **Styling**: Tailwind CSS with DaisyUI
- **Build Output**: Static site (builds to `./dist/`)
- **Current Hosting**: Netlify (static deployment)

### Migration Status: ✅ COMPLETE

## Changes Made

### 1. Package Dependencies
```bash
npm install @astrojs/vercel --legacy-peer-deps
```

### 2. Astro Configuration Updates
- Updated `astro.config.mjs` to support Vercel deployment
- Configured static output for optimal Vercel performance
- Maintained all existing integrations (Tailwind, Preact, Sitemap, YAML)

### 3. Environment Variables Setup
- Created `.env.example` file with required environment variables
- Updated Sanity client to use environment variables with fallbacks
- Enhanced security by avoiding hardcoded credentials

### 4. Vercel Configuration
- Created `vercel.json` with optimal build settings
- Configured security headers for production
- Set up proper caching strategies for static assets

### 5. TypeScript Configuration
- Updated `tsconfig.json` to support ESNext modules
- Fixed import.meta environment variable access

## Environment Variables

### Required for Vercel
Set these in your Vercel dashboard under Environment Variables:

```bash
SANITY_PROJECT_ID=8n6kitqe
SANITY_DATASET=production
SANITY_API_TOKEN=your_token_here (if needed)
```

### Local Development
Copy `.env.example` to `.env.local` for local development.

## Deployment Instructions

### 1. Push Changes to Git
```bash
git add .
git commit -m "Configure for Vercel deployment"
git push origin main
```

### 2. Deploy to Vercel

#### Option A: Vercel CLI (Recommended for testing)
```bash
npm install -g vercel
vercel --prod
```

#### Option B: Vercel Dashboard
1. Go to [vercel.com](https://vercel.com)
2. Click "Add New Project"
3. Connect your Git repository
4. Vercel will auto-detect Astro framework
5. Configure environment variables
6. Deploy

### 3. Domain Migration (Zero Downtime)

#### Before Switching DNS:
1. Deploy to Vercel and get the preview URL
2. Test all functionality thoroughly
3. Set up custom domain in Vercel dashboard
4. Verify SSL certificate issuance

#### DNS Switch:
1. **Backup current DNS settings** from Netlify
2. Update DNS records to point to Vercel:
   - A record: `76.76.19.19` (Vercel's Anycast)
   - CNAME: `cname.vercel-dns.com` (alternative)
3. **Monitor** for any issues during propagation
4. **Keep Netlify deployment** active until DNS fully propagates

#### After Migration:
1. Verify all URLs and redirects work correctly
2. Test Sanity CMS integration
3. Check form submissions and any dynamic features
4. Monitor performance and error logs
5. Delete Netlify deployment once confirmed stable

## Post-Migration Checklist

### ✅ Technical Verification
- [ ] Site builds successfully on Vercel
- [ ] All pages load correctly
- [ ] Sanity CMS content displays properly
- [ ] Environment variables are working
- [ ] SSL certificate is active
- [ ] Custom domain is pointing correctly

### ✅ SEO & Performance
- [ ] All URLs remain unchanged
- [ ] Sitemap generates correctly
- [ ] Meta tags and Open Graph data intact
- [ ] Core Web Vitals are optimal
- [ ] Caching headers are working

### ✅ Functionality Testing
- [ ] Navigation works on all devices
- [ ] Contact forms submit correctly
- [ ] Image optimization is active
- [ ] Mobile responsiveness maintained
- [ ] Loading times are acceptable

## Benefits of Vercel Migration

1. **Performance**: Edge network with global CDN
2. **Analytics**: Built-in performance metrics
3. **Preview Deployments**: Automatic previews for every PR
4. **Instant Rollbacks**: Quick deployment rollbacks
5. **Serverless Functions**: Ready for future API needs
6. **Integration**: Seamless GitHub/GitLab integration

## Troubleshooting

### Build Issues
- Check environment variables in Vercel dashboard
- Verify `package.json` scripts are correct
- Review build logs for specific errors

### Environment Variable Issues
- Ensure variables are set for correct environment (Production/Preview/Development)
- Check variable names match exactly
- Restart deployment after adding variables

### DNS Propagation
- Use tools like `dig` or `nslookup` to verify DNS changes
- Allow 24-48 hours for full propagation
- Contact support if issues persist

## Support Resources

- [Vercel Documentation](https://vercel.com/docs)
- [Astro on Vercel Guide](https://vercel.com/docs/frameworks/astro)
- [Sanity.io Deployment Guide](https://www.sanity.io/docs/deployment)

---

**Migration Status**: Ready for production deployment
**Last Updated**: 2026-04-29
