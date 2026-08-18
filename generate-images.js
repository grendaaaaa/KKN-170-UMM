const fs = require('fs');
const path = require('path');
const { execSync } = require('child_process');

const dirs = [
  'public/images/logo',
  'public/images/hero',
  'public/images/members',
  'public/images/programs',
  'public/images/village',
  'public/images/articles',
  'public/images/documentation/day-01',
  'public/images/documentation/day-02',
  'public/images/documentation/day-03',
  'public/images/documentation/day-04',
  'public/images/documentation/day-05',
  'public/images/documentation/day-06',
  'public/images/documentation/day-07',
];

// Create dirs
dirs.forEach(dir => {
  fs.mkdirSync(path.join(__dirname, dir), { recursive: true });
});

// A tiny valid 1x1 pixel JPEG base64 (solid color)
const dummyJpegBase64 = '/9j/4AAQSkZJRgABAQEASABIAAD/2wBDAP//////////////////////////////////////////////////////////////////////////////////////wgALCAABAAEBAREA/8QAFBABAAAAAAAAAAAAAAAAAAAAAP/aAAgBAQABPxA=';
const dummyBuffer = Buffer.from(dummyJpegBase64, 'base64');

const files = [
  'public/og-image.jpg',
  'public/images/logo/logo-kkn.png', // We'll just write the same buffer, next/image won't mind for dev
  'public/images/hero/hero-1.jpg',
  'public/images/hero/hero-2.jpg',
  ...Array.from({length: 30}, (_, i) => `public/images/members/member-${String(i+1).padStart(2, '0')}.jpg`),
  ...Array.from({length: 8}, (_, i) => `public/images/programs/program-${String(i+1).padStart(2, '0')}.jpg`),
  ...Array.from({length: 8}, (_, i) => `public/images/programs/program-${String(i+1).padStart(2, '0')}-b.jpg`),
  ...Array.from({length: 8}, (_, i) => `public/images/programs/program-${String(i+1).padStart(2, '0')}-c.jpg`),
  ...Array.from({length: 6}, (_, i) => `public/images/articles/article-${String(i+1).padStart(2, '0')}.jpg`),
  ...Array.from({length: 4}, (_, i) => `public/images/village/village-${String(i+1).padStart(2, '0')}.jpg`),
  ...Array.from({length: 4}, (_, i) => `public/images/village/tourism-${String(i+1).padStart(2, '0')}.jpg`),
];

// Documentation photos
for(let d=1; d<=7; d++) {
  for(let f=1; f<=7; f++) {
    files.push(`public/images/documentation/day-0${d}/foto-0${f}.jpg`);
  }
}

files.forEach(file => {
  const filePath = path.join(__dirname, file);
  // Ensure dir exists (for dynamically added ones)
  fs.mkdirSync(path.dirname(filePath), { recursive: true });
  fs.writeFileSync(filePath, dummyBuffer);
});

console.log(`Successfully generated ${files.length} placeholder images.`);
