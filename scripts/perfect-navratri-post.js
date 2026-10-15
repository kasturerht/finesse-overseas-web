// scripts/perfect-navratri-post.js
import sharp from 'sharp';
import fs from 'fs';

const bgPath = 'C:/Users/Admin/.gemini/antigravity/brain/68786790-9706-41bc-8365-4a69781cc814/navratri_overseas_education_banner_1792057534364.jpg';
const logoPath = 'public/logo.png';
const outputPath = 'public/social/navratri-finesse-perfect.jpg';

async function generate() {
  console.log('Generating Pixel-Perfect Navratri Post...');

  // 1. Base 1080x1080
  const bg = await sharp(bgPath).resize(1080, 1080).toBuffer();

  // 2. Official logo resized to 380px width
  const logoResized = await sharp(logoPath)
    .resize(380, null)
    .toBuffer();

  const logoLeft = Math.round((1080 - 380) / 2);
  const logoTop = 50;

  // 3. SVG Overlay with:
  // - A pristine soft white circular medallion inside the inner gold ring to eliminate background pattern noise
  // - Perfectly proportioned typography strictly confined within the circle diameter
  const svgOverlay = Buffer.from(`
    <svg width="1080" height="1080" xmlns="http://www.w3.org/2000/svg">
      <defs>
        <radialGradient id="whiteGlow" cx="50%" cy="50%" r="50%">
          <stop offset="0%" stop-color="#FFFFFF" stop-opacity="1" />
          <stop offset="85%" stop-color="#FFFFFF" stop-opacity="0.98" />
          <stop offset="100%" stop-color="#FFFFFF" stop-opacity="0.92" />
        </radialGradient>
        <filter id="softShadow" x="-10%" y="-10%" width="120%" height="120%">
          <feDropShadow dx="0" dy="2" stdDeviation="4" flood-color="#000000" flood-opacity="0.06"/>
        </filter>
      </defs>

      <style>
        .serif-sub {
          font-family: 'Georgia', 'Times New Roman', serif;
          font-size: 26px;
          fill: #1E293B;
          font-weight: 600;
          text-anchor: middle;
          letter-spacing: 4px;
        }
        .main-title {
          font-family: 'Plus Jakarta Sans', 'Segoe UI', 'Arial', sans-serif;
          font-size: 58px;
          fill: #0084C7;
          font-weight: 800;
          text-anchor: middle;
          letter-spacing: -0.5px;
        }
        .ornament {
          font-size: 16px;
          fill: #D97706;
          text-anchor: middle;
        }
        .blessing-line {
          font-family: 'Plus Jakarta Sans', 'Segoe UI', 'Arial', sans-serif;
          font-size: 16px;
          fill: #334155;
          font-weight: 600;
          text-anchor: middle;
          letter-spacing: 0.2px;
        }
        .footer-line {
          font-family: 'Plus Jakarta Sans', 'Segoe UI', 'Arial', sans-serif;
          font-size: 15px;
          fill: #64748B;
          font-weight: 600;
          text-anchor: middle;
          letter-spacing: 0.5px;
        }
      </style>

      <!-- Clean pure white disc inside the mandala circle (Center: 540, 442, Radius: 172) -->
      <circle cx="540" cy="442" r="172" fill="url(#whiteGlow)" filter="url(#softShadow)" />
      
      <!-- Subtle inner hairline ring for luxury finish -->
      <circle cx="540" cy="442" r="162" fill="none" stroke="#F1F5F9" stroke-width="1.5" />

      <!-- Typography strictly centered inside the white medallion -->
      <text x="540" y="385" class="serif-sub">HAPPY</text>
      <text x="540" y="445" class="main-title">Navratri</text>
      
      <!-- Decorative golden sparkle -->
      <text x="540" y="475" class="ornament">✦  ✦  ✦</text>

      <!-- Balanced 2-line blessing that never touches the borders -->
      <text x="540" y="505" class="blessing-line">May Maa Durga Bless Your</text>
      <text x="540" y="528" class="blessing-line">Academic &amp; European Journey!</text>

      <!-- Clean bottom footer with subtle divider -->
      <rect x="200" y="1025" width="680" height="1" fill="#E2E8F0" />
      <text x="540" y="1052" class="footer-line">Samarth Sakshi Plaza, 4th Lane, Rajarampuri, Kolhapur  •  finesseoverseas.com</text>
    </svg>
  `);

  // 4. Composite
  await sharp(bg)
    .composite([
      { input: logoResized, top: logoTop, left: logoLeft },
      { input: svgOverlay, top: 0, left: 0 }
    ])
    .jpeg({ quality: 98 })
    .toFile(outputPath);

  console.log('✅ Created:', outputPath);
}

generate().catch(console.error);
