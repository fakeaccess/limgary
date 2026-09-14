// Post-build step: writes a real static HTML file for each route (About, and
// every case study) so that link-preview scrapers (LinkedIn, Slack, iMessage,
// Twitter/X, etc.) — which fetch the URL directly and read <head> without
// running JS — see that page's own title/description/image instead of the
// generic homepage ones. GitHub Pages serves these as real files
// (dist/case-studies/<slug>/index.html), so the URL also just works on a
// hard refresh or a shared direct link — no redirect needed.
//
// Once the browser loads whichever file GitHub Pages served, the same app
// bundle boots and react-router takes over as normal from location.pathname,
// so behavior for real visitors is unchanged.

import { readFile, writeFile, mkdir } from "node:fs/promises";
import { fileURLToPath } from "node:url";
import path from "node:path";

const root = path.dirname(path.dirname(fileURLToPath(import.meta.url)));
const dist = path.join(root, "dist");
const siteUrl = "https://limgary.com";

const dataPath = path.join(root, "src/lib/data.ts");
const dataSource = await readFile(dataPath, "utf8");

// Pull slug/title/summary/image straight out of data.ts's caseStudies array
// with a small regex-based scan — avoids needing to run the TS through a
// bundler just to read four string fields per entry.
function extractCaseStudies(src) {
  const start = src.indexOf("export const caseStudies");
  const arraySrc = src.slice(start);
  const entries = [];
  const re =
    /slug:\s*"([^"]+)"[\s\S]*?title:\s*"([^"]+)"[\s\S]*?summary:\s*("((?:[^"\\]|\\.)*)"|`((?:[^`\\]|\\.)*)`)[\s\S]*?image:\s*"([^"]+)"/g;
  let m;
  while ((m = re.exec(arraySrc))) {
    const summary = (m[4] ?? m[5] ?? "").replace(/\\"/g, '"').replace(/\s+/g, " ").trim();
    entries.push({ slug: m[1], title: m[2], summary, image: m[6] });
  }
  return entries;
}

const caseStudies = extractCaseStudies(dataSource);
if (caseStudies.length === 0) {
  throw new Error("generate-meta-pages: found 0 case studies — regex likely out of sync with data.ts shape");
}

const template = await readFile(path.join(dist, "index.html"), "utf8");

function withMeta(html, { title, description, url, image }) {
  let out = html;
  out = out.replace(/<title>.*?<\/title>/, `<title>${title}</title>`);
  out = out.replace(/(<meta name="description" content=")[^"]*(")/, `$1${description}$2`);
  out = out.replace(/(<link rel="canonical" href=")[^"]*(")/, `$1${url}$2`);
  out = out.replace(/(<meta property="og:url" content=")[^"]*(")/, `$1${url}$2`);
  out = out.replace(/(<meta property="og:title" content=")[^"]*(")/, `$1${title}$2`);
  out = out.replace(/(<meta property="og:description" content=")[^"]*(")/, `$1${description}$2`);
  out = out.replace(/(<meta property="og:image" content=")[^"]*(")/, `$1${image}$2`);
  out = out.replace(/(<meta name="twitter:card" content=")[^"]*(")/, `$1summary_large_image$2`);
  out = out.replace(/(<meta name="twitter:title" content=")[^"]*(")/, `$1${title}$2`);
  out = out.replace(/(<meta name="twitter:description" content=")[^"]*(")/, `$1${description}$2`);
  out = out.replace(/(<meta name="twitter:image" content=")[^"]*(")/, `$1${image}$2`);
  return out;
}

async function writePage(routeDir, meta) {
  const html = withMeta(template, meta);
  const outDir = path.join(dist, routeDir);
  await mkdir(outDir, { recursive: true });
  await writeFile(path.join(outDir, "index.html"), html, "utf8");
}

for (const cs of caseStudies) {
  await writePage(`case-studies/${cs.slug}`, {
    title: `${cs.title} — Gary Lim`,
    description: cs.summary,
    url: `${siteUrl}/case-studies/${cs.slug}`,
    image: `${siteUrl}${cs.image}`,
  });
}

await writePage("about", {
  title: "About — Gary Lim",
  description: "Gary Lim — Product Design Leader. Chaos to clarity.",
  url: `${siteUrl}/about`,
  image: `${siteUrl}/images/hero-avatar.png`,
});

console.log(`generate-meta-pages: wrote ${caseStudies.length} case study page(s) + about`);
