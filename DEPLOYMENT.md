# Deployment Guide - Aurinkokuninkaan Suunnittelu- ja Rakennuspalvelu Oy

## Pre-Deployment Checklist

### 1. Install Dependencies
```bash
npm install
```

### 2. Build for Production
```bash
npm run build
```
This creates an optimized production build in the `dist/` folder.

### 3. Preview Production Build Locally
```bash
npm run preview
```

## Deployment Options

### Option 1: Traditional Web Hosting (Recommended for Simple Deployment)

1. **Build the project**:
   ```bash
   npm run build
   ```

2. **Upload the `dist/` folder** to your web hosting provider (e.g., cPanel, FTP)

3. **Configure your domain** to point to the uploaded files

4. **Important**: Configure server to handle client-side routing:
   - All routes should redirect to `index.html`
   - Example `.htaccess` for Apache (create in dist folder):
   ```apache
   <IfModule mod_rewrite.c>
     RewriteEngine On
     RewriteBase /
     RewriteRule ^index\.html$ - [L]
     RewriteCond %{REQUEST_FILENAME} !-f
     RewriteCond %{REQUEST_FILENAME} !-d
     RewriteRule . /index.html [L]
   </IfModule>
   ```

### Option 2: Netlify (Easiest with Automatic Builds)

1. **Push code to GitHub** (already done)

2. **Connect to Netlify**:
   - Go to https://netlify.com
   - Click "Add new site" → "Import an existing project"
   - Connect your GitHub repository

3. **Build settings**:
   - Build command: `npm run build`
   - Publish directory: `dist`

4. **Configure redirects** (create `public/_redirects` file if not exists):
   ```
   /*    /index.html   200
   ```

5. **Connect your custom domain** in Netlify settings

### Option 3: Vercel

1. **Install Vercel CLI**:
   ```bash
   npm install -g vercel
   ```

2. **Deploy**:
   ```bash
   vercel
   ```

3. **Connect custom domain** in Vercel dashboard

## Post-Deployment Tasks

### 1. Update robots.txt
Edit `public/robots.txt` and replace `yourdomain.com` with your actual domain:
```
Sitemap: https://yourdomain.com/sitemap.xml
```

### 2. Test on Multiple Devices
- ✓ Desktop (Chrome, Firefox, Safari, Edge)
- ✓ Mobile (iOS Safari, Android Chrome)
- ✓ Tablet (iPad, Android tablets)

### 3. SEO Configuration
- ✓ Meta tags configured in `index.html`
- ✓ Finnish language set (`lang="fi"`)
- ✓ Proper page titles and descriptions
- ⚠️ Consider adding a sitemap.xml for better SEO
- ⚠️ Submit site to Google Search Console

### 4. Performance Optimization
Current status:
- ✓ Vite automatically optimizes JavaScript and CSS
- ✓ Images are served from public folder
- ⚠️ Large images (venevaja.jpg: 4.8MB, ChatGPT image: 2.2MB)
  - Consider compressing these images before production
  - Recommended: Use tools like TinyPNG or ImageOptim

### 5. SSL Certificate
- Most hosting providers offer free SSL (Let's Encrypt)
- Ensure HTTPS is enabled for your domain

## Mobile Optimization

✓ Viewport meta tag configured
✓ Responsive design with Tailwind CSS breakpoints:
  - Mobile: default (< 640px)
  - Small: sm (≥ 640px)
  - Medium: md (≥ 768px)
  - Large: lg (≥ 1024px)

✓ Mobile-specific features:
  - Company name wraps on mobile with smaller text
  - Hamburger menu for navigation
  - Touch-friendly button sizes
  - Optimized image loading

## Browser Compatibility

Supported browsers:
- ✓ Chrome (latest)
- ✓ Firefox (latest)
- ✓ Safari (latest)
- ✓ Edge (latest)
- ✓ Mobile browsers (iOS Safari, Android Chrome)

## Environment Variables

No environment variables are required for basic deployment.
If you add Supabase or other services, create a `.env` file (not committed to git):
```
VITE_SUPABASE_URL=your_url_here
VITE_SUPABASE_ANON_KEY=your_key_here
```

## Monitoring and Maintenance

1. **Google Analytics** (Optional):
   - Add tracking code to `index.html` if needed

2. **Error Monitoring** (Optional):
   - Consider adding Sentry for error tracking

3. **Regular Updates**:
   - Keep dependencies updated: `npm update`
   - Test after updates

## Contact Form

The contact form currently uses Supabase for data storage.
Make sure Supabase is properly configured if you want to receive form submissions.

## Troubleshooting

### Issue: 404 errors on direct URL access
- **Solution**: Configure server redirects (see Option 1 above)

### Issue: Images not loading
- **Solution**: Ensure all images in `public/` folder are uploaded to server

### Issue: White screen on deployment
- **Solution**: Check browser console for errors, ensure build completed successfully

## Support

For any issues with the website, contact the developer or refer to:
- Vite documentation: https://vitejs.dev
- React documentation: https://react.dev
- Tailwind CSS: https://tailwindcss.com
