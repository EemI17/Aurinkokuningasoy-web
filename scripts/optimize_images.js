import fs from 'fs';
import path from 'path';
import sharp from 'sharp';

const PUBLIC_DIR = path.join(process.cwd(), 'public');

async function optimizeImages() {
  console.log('Starting image optimization...');
  const files = fs.readdirSync(PUBLIC_DIR);
  
  for (const file of files) {
    if (file.match(/\.(png|jpg|jpeg)$/i)) {
      const inputPath = path.join(PUBLIC_DIR, file);
      const ext = path.extname(file);
      const baseName = path.basename(file, ext);
      
      const safeBaseName = baseName.replace(/[^a-z0-9]/gi, '_').toLowerCase();
      const newFileName = `${safeBaseName}.webp`;
      const outputPath = path.join(PUBLIC_DIR, newFileName);
      
      const stats = fs.statSync(inputPath);
      const sizeMB = stats.size / (1024 * 1024);
      
      if (sizeMB > 0.1 || file.includes(' ')) {
        console.log(`Optimizing: ${file} (${sizeMB.toFixed(2)} MB) -> ${newFileName}`);
        
        await sharp(inputPath)
          .webp({ quality: 80, effort: 6 })
          .toFile(outputPath);
          
        console.log(`Created ${newFileName}`);
      }
    }
  }
  console.log('Optimization complete.');
}

optimizeImages().catch(console.error);
