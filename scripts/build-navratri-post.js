// scripts/build-navratri-post.js
import sharp from 'sharp';
import fs from 'fs';

const bgPath = 'C:/Users/Admin/.gemini/antigravity/brain/68786790-9706-41bc-8365-4a69781cc814/navratri_overseas_education_banner_1792057534364.jpg';
const logoPath = 'public/logo.png';
const outputPath = 'public/social/navratri-finesse-official-v2.jpg';

async function compose() {
  console.log('Compositing Navratri Overseas Education Graphic...');

  // 1. Resize base to 1080x1080
  const bg = await sharp(bgPath).resize(1080, 1080).toBuffer();

  // 2. Resize official logo to width 420px (height ~122px)
  const logoResized = await sharp(logoPath)
    .resize(420, null)
    .toBuffer();

  const logoMeta = await sharp(logoResized).metadata();
  const logoLeft = Math.round((1080 - 420) / 2);
  const logoTop = 50;

  // 3. Create SVG overlay for the typography inside the mandala and footer
  // Center of mandala is roughly (540, 440)
  const svgOverlay = Buffer.from(`
    <svg width="1080" height="1080" xmlns="http://www.w3.org/2000/svg">
      <style>
        .serif-title {
          font-family: 'Georgia', 'Playfair Display', serif;
          font-size: 38px;
          fill: #1A2840;
          font-weight: 500;
          text-anchor: middle;
          letter-spacing: 2px;
        }
        .navratri-title {
          font-family: 'Plus Jakarta Sans', 'Segoe UI', 'Arial', sans-serif;
          font-size: 72px;
          fill: #0084C7;
          font-weight: 800;
          text-anchor: middle;
          letter-spacing: -0.5px;
        }
        .blessing-text {
          font-family: 'Plus Jakarta Sans', 'Segoe UI', 'Arial', sans-serif;
          font-size: 19px;
          fill: #475569;
          font-weight: 500;
          text-anchor: middle;
          line-height: 1.5;
        }
        .footer-text {
          font-family: 'Plus Jakarta Sans', 'Segoe UI', 'Arial', sans-serif;
          font-size: 15px;
          fill: #64748B;
          font-weight: 600;
          text-anchor: middle;
          letter-spacing: 0.5px;
        }
      </style>

      <!-- Center text inside mandala frame -->
      <text x="540" y="405" class="serif-title">Happy</text>
      <text x="540" y="475" class="navratri-title">Navratri</text>
      <text x="540" y="520" class="blessing-text">May this festive season bring strength to your dreams</text>
      <text x="540" y="546" class="blessing-text">&amp; wings to your global career!</text>

      <!-- Subtle bottom footer border and contact info -->
      <rect x="190" y="1025" width="700" height="1" fill="#E2E8F0" />
      <text x="540" y="1052" class="footer-text">Samarth Sakshi Plaza, 4th Lane, Rajarampuri, Kolhapur  •  finesseoverseas.com</text>
    </svg>
  `);

  // 4. Composite everything together
  await sharp(bg)
    .composite([
      {
        input: logoResized,
        top: logoTop,
        left: logoLeft
      },
      {
        input: svgOverlay,
        top: 0,
        left: 0
      }
    ])
    .jpeg({ quality: 95 })
    .toFile(outputPath);

  console.log('✅ Final composite saved to:', outputPath);
}

compose().catch(console.error);
