const fs = require('fs');
const path = require('path');
const QRCode = require('qrcode');

// Set VERCEL_BASE_URL in deployment environments; keep the verified production URL as the fallback.
const BASE_URL = (process.env.VERCEL_BASE_URL || 'https://link-tree-vnit.vercel.app').replace(/\/+$/, '');

// 2. Clean and prepare output directory for QR files
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

// 3. Scan professor pages only; the landing page QR is not part of the faculty set.
const htmlFiles = fs.readdirSync(__dirname).filter(file => file.startsWith('ece-') && file.endsWith('.html'));

console.log(`Found ${htmlFiles.length} HTML files. Generating new QR codes...\n`);

async function generateAllQRs() {
  for (const file of htmlFiles) {
    const liveUrl = file === 'index.html' ? `${BASE_URL}/` : `${BASE_URL}/${encodeURIComponent(file)}`;
    const fileBaseName = path.parse(file).name; // e.g., "prof1"
    const outputPath = path.join(outputDir, `${fileBaseName}-qr.svg`);

    try {
      await QRCode.toFile(outputPath, liveUrl, {
        margin: 2,
        color: {
          dark: '#000000',
          light: '#FFFFFF'
        }
      });
      console.log(`✓ Saved QR for ${file} -> qr_codes/${fileBaseName}-qr.svg (${liveUrl})`);
    } catch (err) {
      console.error(`✗ Error generating QR for ${file}:`, err);
    }
  }
  console.log(`\nAll done! Check the 'qr_codes' folder inside your project.`);
}

generateAllQRs();