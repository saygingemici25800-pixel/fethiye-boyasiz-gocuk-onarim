// Favicon üretici — kırmızı yuvarlak kare arka plan + beyaz "F"
// SVG'den PNG'ye çevirir; .ico için 16/32/48 boyutlu PNG'leri elle ICO formatına paketler.
const fs = require("fs");
const path = require("path");
const sharp = require("sharp");

const PUBLIC_DIR = path.join(__dirname, "..", "public");

const svg = (size) => `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 64 64" width="${size}" height="${size}">
  <rect width="64" height="64" rx="14" fill="#d4232a"/>
  <path d="M22 16h22v8H30v8h12v8H30v8h-8z" fill="#ffffff"/>
</svg>`;

async function pngBuffer(size) {
  return sharp(Buffer.from(svg(size))).resize(size, size).png().toBuffer();
}

async function writePng(name, size) {
  const buf = await pngBuffer(size);
  fs.writeFileSync(path.join(PUBLIC_DIR, name), buf);
  console.log(`wrote ${name} (${size}x${size}, ${buf.length} bytes)`);
}

// Minimal ICO encoder — multi-size PNG-in-ICO
function buildIco(images) {
  const header = Buffer.alloc(6);
  header.writeUInt16LE(0, 0); // reserved
  header.writeUInt16LE(1, 2); // type = icon
  header.writeUInt16LE(images.length, 4);

  const dirSize = 16 * images.length;
  let offset = 6 + dirSize;
  const dirEntries = [];
  for (const img of images) {
    const entry = Buffer.alloc(16);
    entry.writeUInt8(img.size === 256 ? 0 : img.size, 0);
    entry.writeUInt8(img.size === 256 ? 0 : img.size, 1);
    entry.writeUInt8(0, 2);
    entry.writeUInt8(0, 3);
    entry.writeUInt16LE(1, 4);
    entry.writeUInt16LE(32, 6);
    entry.writeUInt32LE(img.data.length, 8);
    entry.writeUInt32LE(offset, 12);
    dirEntries.push(entry);
    offset += img.data.length;
  }
  return Buffer.concat([header, ...dirEntries, ...images.map((i) => i.data)]);
}

async function writeIco() {
  const sizes = [16, 32, 48];
  const images = await Promise.all(
    sizes.map(async (size) => ({ size, data: await pngBuffer(size) }))
  );
  const ico = buildIco(images);
  fs.writeFileSync(path.join(PUBLIC_DIR, "favicon.ico"), ico);
  console.log(`wrote favicon.ico (${ico.length} bytes, sizes: ${sizes.join("/")})`);
}

(async () => {
  await writePng("favicon-16x16.png", 16);
  await writePng("favicon-32x32.png", 32);
  await writePng("favicon-192x192.png", 192);
  await writePng("favicon-512x512.png", 512);
  await writePng("apple-touch-icon.png", 180);
  await writeIco();
  console.log("done");
})();
