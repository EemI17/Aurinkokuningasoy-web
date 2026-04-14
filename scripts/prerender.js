import fs from 'fs';
import path from 'path';
import sirv from 'sirv';
import http from 'http';
import puppeteer from 'puppeteer';

const routes = [
  '/',
  '/arkkitehtisuunnittelu',
  '/rakennesuunnittelu',
  '/rakennuttajapalvelut',
  '/konsultointipalvelut',
  '/projektit',
  '/yhteystiedot',
  '/opas-rakennushankkeeseen'
];

async function prerender() {
  const distDir = path.resolve(process.cwd(), 'dist');
  
  // 1. Start the static server
  const sirvHandler = sirv(distDir, { single: true });
  const server = http.createServer((req, res) => sirvHandler(req, res));
  
  await new Promise((resolve) => {
    server.listen(3000, () => resolve());
  });
  
  console.log('\n✅ Static server started on http://localhost:3000');

  // 2. Launch Puppeteer
  console.log('🚀 Launching headless browser...');
  const browser = await puppeteer.launch({
    headless: "new",
    args: ['--no-sandbox', '--disable-setuid-sandbox']
  });
  
  const page = await browser.newPage();

  // 3. Visit each route and save the HTML
  for (const route of routes) {
    console.log(`⏳ Pre-rendering ${route}...`);
    const url = `http://localhost:3000${route}`;
    
    // Go to page and wait for React to mount and network to be completely idle
    await page.goto(url, { waitUntil: 'networkidle0', timeout: 30000 });
    
    // Give React a tiny fraction of a second more to settle any rapid states
    await new Promise(r => setTimeout(r, 500));

    // Extract HTML
    let html = await page.content();
    
    // Save to dist directory structure
    const filePath = route === '/' 
      ? path.join(distDir, 'index.html') 
      : path.join(distDir, route, 'index.html');
      
    const dir = path.dirname(filePath);
    if (!fs.existsSync(dir)) {
      fs.mkdirSync(dir, { recursive: true });
    }
    
    fs.writeFileSync(filePath, html);
    console.log(`   ✔️ Saved to ${route === '/' ? '/index.html' : route + '/index.html'}`);
  }

  // 4. Clean up
  await browser.close();
  server.close();
  console.log('🎉 Prerendering complete!\n');
}

prerender().catch((err) => {
  console.error('❌ Error during prerendering:', err);
  process.exit(1);
});
