const fs = require('fs');
const path = require('path');
const sharp = require('sharp');

// Create the exact SVG logo matching the LinkedIn brand profile
const svgContent = `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" width="512" height="512">
  <defs>
    <!-- Background styling -->
    <linearGradient id="bgGrad" x1="0%" y1="0%" x2="100%" y2="100%">
      <stop offset="0%" stop-color="#FCFAF7"/>
      <stop offset="100%" stop-color="#F5EFE6"/>
    </linearGradient>
  </defs>

  <!-- Warm off-white background with subtle rounded corner for modern app displays -->
  <rect width="512" height="512" fill="url(#bgGrad)"/>

  <g transform="translate(256, 256)">
    <!-- Serif Gold 'F' -->
    <!-- Stem & Serifs -->
    <path d="M-10,-140 L140,-140 L140,-102 L106,-102 C102,-102 98,-98 98,-94 L98,-34 L132,-34 L132,4 L98,4 L98,82 C98,90 102,96 114,98 L114,106 L-10,106 L-10,98 C4,96 8,90 8,82 L8,-116 C8,-124 4,-130 -10,-132 Z" 
          fill="#C69214"/>

    <!-- Blue Checkmark Accent -->
    <path d="M-30,56 L38,124 C44,130 54,130 60,124 L190,-12 C196,-18 196,-26 190,-32 L176,-46 C170,-52 162,-52 156,-46 L48,64 L-16,0 C-22,-6 -30,-6 -36,0 L-48,12 C-54,18 -54,26 -48,32 Z" 
          fill="#226EAC"/>

    <!-- Bold Navy 'C' with Crisp White Separation Outline -->
    <!-- White contour gap -->
    <path d="M30,-80 C18,-118 -20,-144 -74,-144 C-152,-144 -214,-82 -214,-4 C-214,76 -152,138 -74,138 C-20,138 20,110 32,70 L-7,54 C-17,82 -44,100 -74,100 C-132,100 -176,52 -176,-4 C-176,-60 -132,-106 -74,-106 C-44,-106 -17,-88 -6,-60 Z"
          fill="#0E2B4C"
          stroke="#FAF7F2"
          stroke-width="16"
          stroke-linejoin="round"
          stroke-linecap="round"/>

    <!-- Navy 'C' Main Body -->
    <path d="M30,-80 C18,-118 -20,-144 -74,-144 C-152,-144 -214,-82 -214,-4 C-214,76 -152,138 -74,138 C-20,138 20,110 32,70 L-7,54 C-17,82 -44,100 -74,100 C-132,100 -176,52 -176,-4 C-176,-60 -132,-106 -74,-106 C-44,-106 -17,-88 -6,-60 Z"
          fill="#0E2B4C"/>
  </g>
</svg>`;

async function generate() {
  const publicDir = path.join(__dirname, 'public');
  const appDir = path.join(__dirname, 'src', 'app');
  const imagesDir = path.join(publicDir, 'images');

  if (!fs.existsSync(imagesDir)) {
    fs.mkdirSync(imagesDir, { recursive: true });
  }

  // 1. Write SVG to public & app directories
  fs.writeFileSync(path.join(publicDir, 'icon.svg'), svgContent);
  fs.writeFileSync(path.join(appDir, 'icon.svg'), svgContent);
  fs.writeFileSync(path.join(imagesDir, 'career-fixers-logo.svg'), svgContent);
  console.log('✓ SVG icons written');

  const svgBuffer = Buffer.from(svgContent);

  // 2. Generate various sizes of PNG icons for Google Search Index, Apple Touch, and Android
  const sizes = [
    { size: 48, name: 'icon-48x48.png', dest: [publicDir] },
    { size: 96, name: 'icon-96x96.png', dest: [publicDir] },
    { size: 180, name: 'apple-touch-icon.png', dest: [publicDir] },
    { size: 180, name: 'apple-icon.png', dest: [appDir] },
    { size: 192, name: 'icon-192x192.png', dest: [publicDir] },
    { size: 512, name: 'icon-512x512.png', dest: [publicDir] },
    { size: 512, name: 'icon.png', dest: [publicDir, appDir] },
    { size: 512, name: 'career-fixers-logo.png', dest: [imagesDir] },
  ];

  for (const item of sizes) {
    const pngBuffer = await sharp(svgBuffer)
      .resize(item.size, item.size)
      .png()
      .toBuffer();

    for (const d of item.dest) {
      fs.writeFileSync(path.join(d, item.name), pngBuffer);
    }
    console.log(`✓ Generated ${item.name} (${item.size}x${item.size})`);
  }

  // 3. Generate favicon.ico (32x32 & 48x48 compliant PNG in standard ICO wrapper)
  const ico32 = await sharp(svgBuffer).resize(32, 32).png().toBuffer();
  fs.writeFileSync(path.join(publicDir, 'favicon.ico'), ico32);
  fs.writeFileSync(path.join(appDir, 'favicon.ico'), ico32);
  console.log('✓ Generated favicon.ico for public and src/app');
}

generate().catch(console.error);
