// Download all assets from csboyasizgocukduzeltme.com
import { mkdir, writeFile } from "node:fs/promises";
import { dirname, join } from "node:path";
import { fileURLToPath } from "node:url";

const __dirname = dirname(fileURLToPath(import.meta.url));
const ROOT = join(__dirname, "..");
const PUBLIC = join(ROOT, "public");

const BASE = "https://www.csboyasizgocukduzeltme.com";

const IMAGES = [
  // Logo
  "/wp-content/uploads/2021/10/cs_boyasiz_gocuk_onarim_merkezi-removebg-preview.png",
  // Hero / about / process bg
  "/wp-content/uploads/2021/10/hakkimizda.jpg",
  "/wp-content/uploads/2021/10/galeri-1.jpeg",
  "/wp-content/uploads/2021/10/galeri-3-1024x678.jpg",
  "/wp-content/uploads/2021/10/galeri-4.jpg",
  "/wp-content/uploads/2021/10/edc133a5-549b-4416-9863-a653169cb7bf-e1633336110858.jpg",
  "/wp-content/uploads/2019/01/edc133a5-549b-4416-9863-a653169cb7bf-e1634151869674.jpg",
  "/wp-content/uploads/2021/10/service_bg11-e1547457838864.jpg",
  // Services
  "/wp-content/uploads/2019/01/man-polish-car-garage-1024x683.jpg",
  "/wp-content/uploads/2019/01/car-wash-detailing-station-1024x683.jpg",
];

const SEO = [
  { url: "/wp-content/uploads/2021/10/cropped-cs-boyasiz-gocuk-onarim-merkezi-e1634151046165-32x32.jpg", out: "favicon-32x32.jpg" },
  { url: "/wp-content/uploads/2021/10/cropped-cs-boyasiz-gocuk-onarim-merkezi-e1634151046165-192x192.jpg", out: "favicon-192x192.jpg" },
  { url: "/wp-content/uploads/2021/10/cropped-cs-boyasiz-gocuk-onarim-merkezi-e1634151046165-180x180.jpg", out: "apple-touch-icon.jpg" },
];

async function downloadOne(url, outPath) {
  try {
    const res = await fetch(url, {
      headers: { "User-Agent": "Mozilla/5.0 (Macintosh) Chrome/130 Safari/537.36" },
    });
    if (!res.ok) {
      console.error(`FAIL ${res.status}: ${url}`);
      return false;
    }
    const buf = Buffer.from(await res.arrayBuffer());
    await mkdir(dirname(outPath), { recursive: true });
    await writeFile(outPath, buf);
    console.log(`OK  ${outPath.replace(ROOT, "")} (${buf.length}b)`);
    return true;
  } catch (err) {
    console.error(`ERR ${url}: ${err.message}`);
    return false;
  }
}

async function batch(items, mapFn, size = 4) {
  for (let i = 0; i < items.length; i += size) {
    await Promise.all(items.slice(i, i + size).map(mapFn));
  }
}

await batch(IMAGES, (path) => {
  const filename = path.split("/").pop();
  return downloadOne(BASE + path, join(PUBLIC, "images", filename));
});

await batch(SEO, (item) => downloadOne(BASE + item.url, join(PUBLIC, "seo", item.out)));

console.log("Done.");
