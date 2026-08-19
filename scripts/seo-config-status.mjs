import { existsSync, readFileSync } from "node:fs";
import { join } from "node:path";

const candidates = [".env.production", ".env"];
const envFile = candidates.map((name) => join(process.cwd(), name)).find(existsSync);
const values = {};

if (envFile) {
  for (const line of readFileSync(envFile, "utf8").split(/\r?\n/)) {
    const match = line.match(/^([A-Z0-9_]+)=(.*)$/);
    if (match) values[match[1]] = match[2].trim();
  }
}

const checks = [
  ["PUBLIC_GTM_ID", /^GTM-[A-Z0-9]+$/, "Contenedor de Google Tag Manager"],
  ["PUBLIC_GOOGLE_SITE_VERIFICATION", /\S+/, "Token HTML de Search Console (opcional si verificas por DNS)"],
  ["PUBLIC_GOOGLE_REVIEW_URL", /^https:\/\//, "Enlace para solicitar reseñas (pendiente por decisión comercial)"],
];

console.log(`Archivo revisado: ${envFile ?? "ninguno"}`);
for (const [key, pattern, label] of checks) {
  const configured = pattern.test(values[key] ?? process.env[key] ?? "");
  console.log(`${configured ? "OK" : "PENDIENTE"} — ${label} (${key})`);
}
console.log("\nConsulta SEO_SETUP.md para completar las tareas que requieren acceso del propietario.");
