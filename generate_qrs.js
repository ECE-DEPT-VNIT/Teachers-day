const fs = require('fs');
const path = require('path');
const QRCode = require('qrcode');

// 1. Replace this with your exact live Vercel domain (no trailing slash)
const VERCEL_DOMAIN = "https://link-tree-vnit.vercel.app/";

// 2. Create output directory for image files
const outputDir = path.join(__dirname, 'qr_codes');
if (!fs.existsSync(outputDir)) {
  fs.mkdirSync(outputDir);
}

// 3. Scan for all .html files in the current directory
const htmlFiles = fs.readdirSync(__dirname).filter(file => file.endsWith('.html'));

console.log(`Found ${htmlFiles.length} HTML files. Generating QR codes...\n`);

async function generateAllQRs() {
  for (const file of htmlFiles) {
    const liveUrl = `${VERCEL_DOMAIN}/${file}`;
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
      console.log(`✓ Saved QR for ${file} -> qr_codes/${fileBaseName}-qr.png`);
    } catch (err) {
      console.error(`✗ Error generating QR for ${file}:`, err);
    }
  }
  console.log(`\nAll done! Check the 'qr_codes' folder inside your project.`);
}

generateAllQRs();