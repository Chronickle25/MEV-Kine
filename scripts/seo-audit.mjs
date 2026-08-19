import { existsSync, readFileSync, readdirSync, statSync } from "node:fs";
import { join, relative, sep } from "node:path";

const root = process.cwd();
const dist = join(root, "dist");
const errors = [];
const warnings = [];

if (!existsSync(dist)) {
  console.error("No existe dist/. Ejecuta pnpm build antes de la auditoría.");
  process.exit(1);
}

const walk = (dir) => readdirSync(dir).flatMap((name) => {
  const path = join(dir, name);
  return statSync(path).isDirectory() ? walk(path) : [path];
});

const htmlFiles = walk(dist).filter((path) => path.endsWith(".html"));
const routeFor = (file) => {
  const path = relative(dist, file).split(sep).join("/");
  if (path === "index.html") return "/";
  return `/${path.replace(/index\.html$/, "")}`;
};

const expectedFileForHref = (href) => {
  const clean = href.split(/[?#]/)[0];
  if (!clean.startsWith("/") || clean.startsWith("//") || /\.[a-z0-9]+$/i.test(clean)) return null;
  return join(dist, clean.replace(/^\//, ""), "index.html");
};

for (const file of htmlFiles) {
  const route = routeFor(file);
  const html = readFileSync(file, "utf8");
  const count = (pattern) => [...html.matchAll(pattern)].length;
  if (count(/<title>/g) !== 1) errors.push(`${route}: debe contener un solo <title>`);
  if (count(/<h1(?:\s|>)/g) !== 1) errors.push(`${route}: debe contener un solo H1`);
  if (count(/rel="canonical"/g) !== 1) errors.push(`${route}: debe contener un solo canonical`);
  if (!/<meta name="description" content=".{80,180}"/.test(html)) warnings.push(`${route}: revisa el largo de la meta description`);
  if (/San Alejandro|streetAddress|GeoCoordinates|geo\.position|ICBM/.test(html)) errors.push(`${route}: expone una dirección o geolocalización privada`);
  if (/<meta name="robots" content="[^"]*noindex/.test(html)) errors.push(`${route}: contiene noindex`);

  for (const match of html.matchAll(/<script type="application\/ld\+json">(.*?)<\/script>/gs)) {
    try { JSON.parse(match[1]); } catch { errors.push(`${route}: JSON-LD inválido`); }
  }

  for (const match of html.matchAll(/href="([^"]+)"/g)) {
    const expected = expectedFileForHref(match[1]);
    if (expected && !existsSync(expected)) errors.push(`${route}: enlace interno roto ${match[1]}`);
  }
}

const sitemapPath = join(dist, "sitemap-0.xml");
if (!existsSync(sitemapPath)) errors.push("Falta sitemap-0.xml");
else {
  const sitemap = readFileSync(sitemapPath, "utf8");
  const sitemapCount = [...sitemap.matchAll(/<loc>/g)].length;
  if (sitemapCount !== htmlFiles.length) errors.push(`Sitemap (${sitemapCount}) y páginas HTML (${htmlFiles.length}) no coinciden`);
}

for (const warning of [...new Set(warnings)]) console.warn(`AVISO: ${warning}`);
for (const error of [...new Set(errors)]) console.error(`ERROR: ${error}`);
console.log(`Auditoría SEO: ${htmlFiles.length} páginas, ${errors.length} errores, ${warnings.length} avisos.`);
process.exit(errors.length ? 1 : 0);
