# Google Search Console Setup Guide

## Step 1: Add Your Website to Google Search Console

1. **Go to Google Search Console**
   - Visit: https://search.google.com/search-console

2. **Sign in** with your Google account (or client's account)

3. **Add a property**
   - Click **"Add property"**
   - Choose **"URL prefix"**
   - Enter: `https://www.aurinkokuningas.fi`
   - Click **"Continue"**

## Step 2: Verify Ownership

You have several verification methods. Choose the easiest one:

### Method 1: HTML Tag (Recommended for Netlify)

1. Google will give you an HTML meta tag like:
   ```html
   <meta name="google-site-verification" content="XXXXXXXXXXXXXXXX" />
   ```

2. **Add this tag to your website**:
   - Open `index.html`
   - Add the meta tag in the `<head>` section (after other meta tags)
   - Commit and push to GitHub
   - Wait for Netlify to deploy (2-3 minutes)

3. **Verify in Google Search Console**:
   - Click **"Verify"**

### Method 2: DNS Record (If client manages DNS)

1. Google will give you a TXT record
2. Add it to your domain's DNS settings
3. Click "Verify" in Google Search Console

### Method 3: HTML File Upload

1. Download the verification HTML file from Google
2. Upload it to the `public/` folder in your project
3. Deploy to Netlify
4. Click "Verify"

## Step 3: Submit Your Sitemap

Once verified:

1. **In Google Search Console**, go to **"Sitemaps"** (left sidebar)

2. **Add your sitemap URL**:
   ```
   https://www.aurinkokuningas.fi/sitemap.xml
   ```

3. Click **"Submit"**

4. **Status should show**:
   - Success ✓
   - 7 URLs discovered

## Step 4: Wait for Indexing

- Google will start crawling your site
- This can take **1-7 days**
- You'll see pages appear in the **"Coverage"** report

## Your Sitemap Contains:

✓ Home page (/)
✓ Arkkitehtisuunnittelu (/arkkitehtisuunnittelu)
✓ Rakennesuunnittelu (/rakennesuunnittelu)
✓ Konsultointipalvelut (/konsultointipalvelut)
✓ Rakennuttajapalvelut (/rakennuttajapalvelut)
✓ Projektit (/projektit)
✓ Yhteystiedot (/yhteystiedot)

**Total: 7 pages**

## Testing Your Sitemap

Before submitting, you can test if it's accessible:

1. Go to: https://www.aurinkokuningas.fi/sitemap.xml
2. You should see the XML file with all your URLs

## Useful Google Search Console Features

After setup, use these features:

### 1. **Performance Report**
- See how many people find your site on Google
- Which search terms they use
- Click-through rates

### 2. **Coverage Report**
- See which pages are indexed
- Find any errors

### 3. **URL Inspection**
- Test if specific pages are indexed
- Request indexing for new pages

### 4. **Mobile Usability**
- Check if your site is mobile-friendly (it is!)

## Request Indexing (Optional - for faster indexing)

For each important page:

1. Use **"URL Inspection"** tool
2. Enter a page URL (e.g., https://www.aurinkokuningas.fi/)
3. Click **"Request indexing"**

This asks Google to crawl that page sooner.

## Important Notes

✅ **Sitemap is already created** at: `/public/sitemap.xml`
✅ **robots.txt is updated** with sitemap location
✅ **All pages are included** in the sitemap
✅ **SEO meta tags are set** for all pages

## Troubleshooting

**Issue**: Sitemap not found
- **Solution**: Make sure Netlify has deployed the latest version
- Check: https://www.aurinkokuningas.fi/sitemap.xml

**Issue**: Verification fails
- **Solution**: Make sure you added the meta tag correctly and deployed

**Issue**: Pages not showing in Google
- **Solution**: Wait 3-7 days. Indexing takes time for new sites.

## Next Steps After Setup

1. ✅ Submit sitemap to Google Search Console
2. ✅ Wait for indexing (3-7 days)
3. 📊 Monitor performance reports
4. 🔍 Optimize based on search data
5. 📱 Share the website on social media (helps with indexing)

---

**Questions?** Check Google Search Console Help: https://support.google.com/webmasters
