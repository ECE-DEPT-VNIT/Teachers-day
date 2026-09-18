const fs = require('fs');
const path = require('path');
const QRCode = require('qrcode');

// Set VERCEL_BASE_URL in deployment environments; keep the verified production URL as the fallback.
const BASE_URL = (process.env.VERCEL_BASE_URL || 'https://link-tree-vnit.vercel.app').replace(/\/+$/, '');

// 2. Clean and prepare output directory for image files
const outputDir = path.join(__dirname, 'qr_codes');
if (fs.existsSync(outputDir)) {
  const existingFiles = fs.readdirSync(outputDir);
  for (const f of existingFiles) {
    fs.unlinkSync(path.join(outputDir, f));
  }
  console.log(`Removed ${existingFiles.length} old QR code(s) from qr_codes/`);
} else {
  fs.mkdirSync(outputDir);
}

// 3. Scan for all .html files in the current directory
const htmlFiles = fs.readdirSync(__dirname).filter(file => file.endsWith('.html'));

console.log(`Found ${htmlFiles.length} HTML files. Generating new QR codes...\n`);

async function generateAllQRs() {
  for (const file of htmlFiles) {
    const liveUrl = file === 'index.html' ? `${BASE_URL}/` : `${BASE_URL}/${encodeURIComponent(file)}`;
    const fileBaseName = path.parse(file).name; // e.g., "prof1"
    const outputPath = path.join(outputDir, `${fileBaseName}-qr.png`);

    try {
      await QRCode.toFile(outputPath, liveUrl, {
        width: 600, // High-res image size (perfect for crisp card printing)
        margin: 2,
        color: {
          dark: '#000000',
          light: '#FFFFFF'
        }
      });
      console.log(`✓ Saved QR for ${file} -> qr_codes/${fileBaseName}-qr.png (${liveUrl})`);
    } catch (err) {
      console.error(`✗ Error generating QR for ${file}:`, err);
    }
  }
  console.log(`\nAll done! Check the 'qr_codes' folder inside your project.`);
}

generateAllQRs();