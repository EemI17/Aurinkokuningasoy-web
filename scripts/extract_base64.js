import fs from 'fs';
import path from 'path';
import sharp from 'sharp';

const ASSETS_DIR = path.join(process.cwd(), 'src/assets');

async function extractAndOptimize() {
  console.log('Extracting Base64 images from .ts files in src/assets...');
  const files = fs.readdirSync(ASSETS_DIR).filter(f => f.endsWith('.ts') && f !== 'vite-env.d.ts'); // ignore standard vite things

  for (const file of files) {
    const inputPath = path.join(ASSETS_DIR, file);
    const content = fs.readFileSync(inputPath, 'utf8');

    // Look for base64 data
    const base64Match = content.match(/data:image\/([a-zA-Z]+);base64,['"]?\s*\+?\s*(?:\[\s*)?((?:'[^']*',\s*)*'[^']*')?/);
    let base64Data = '';
    
    // Some are concatenated arrays of strings, some are single strings
    if (content.includes('join(')) {
        // It's probably an array join
        const arrayMatch = content.match(/\[(.*?)\]\.join/s);
        if (arrayMatch) {
            base64Data = arrayMatch[1].replace(/['",\s]/g, '');
        }
    } else {
        // Try parsing string concatenation
        const lines = content.split('\n');
        for (const line of lines) {
            const match = line.match(/'([^']+)'/);
            if (match && !match[1].startsWith('data:image')) {
                base64Data += match[1];
            } else if (match && match[1].includes('base64,')) {
                base64Data += match[1].split('base64,')[1];
            }
        }
    }

    if (base64Data) {
      const buffer = Buffer.from(base64Data, 'base64');
      const baseName = path.basename(file, '.ts');
      const outputPath = path.join(ASSETS_DIR, `${baseName}.webp`);

      console.log(`Extracted buffer size for ${file}: ${(buffer.length / 1024 / 1024).toFixed(2)} MB`);

      try {
        await sharp(buffer)
          .webp({ quality: 80, effort: 6 })
          .toFile(outputPath);
        console.log(`Created ${outputPath}`);
      } catch (err) {
        console.error(`Failed to optimize ${file}: ${err.message}`);
      }
    } else {
        console.log(`No base64 data found in ${file}`);
    }
  }
}

extractAndOptimize().catch(console.error);
