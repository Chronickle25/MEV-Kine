# Configuración SEO pendiente del propietario

El sitio, sitemap, analítica y eventos ya están preparados. Estas tareas requieren acceso a cuentas o antecedentes profesionales que Codex no puede crear ni verificar por sí solo.

## 1. Google Search Console

1. Abre <https://search.google.com/search-console> con la cuenta propietaria.
2. Añade una **propiedad de dominio** llamada `kinemev.cl`.
3. Copia el registro TXT que entrega Google y agrégalo en Cloudflare: **DNS → Records → Add record → TXT**, nombre `@`.
4. Regresa a Search Console y pulsa **Verificar**.
5. En **Sitemaps**, envía `https://kinemev.cl/sitemap-index.xml`.
6. En **Inspección de URL**, solicita indexación una sola vez para:
   - `https://kinemev.cl/`
   - `https://kinemev.cl/servicios/kinesiologia-musculoesqueletica/`
   - `https://kinemev.cl/servicios/kinesiologia-dolor-lumbar-domicilio/`
   - `https://kinemev.cl/servicios/rehabilitacion-rodilla-domicilio/`
   - `https://kinemev.cl/servicios/rehabilitacion-postoperatoria-domicilio/`
   - `https://kinemev.cl/cobertura/sector-oriente/`
7. Revisa semanalmente **Indexación → Páginas** y **Rendimiento → Resultados de búsqueda**. No repitas solicitudes diariamente.

La verificación DNS no necesita `PUBLIC_GOOGLE_SITE_VERIFICATION`. Si eliges verificación por etiqueta HTML, guarda el token en `.env.production` usando `.env.example` y vuelve a ejecutar `pnpm deploy`.

## 2. Google Tag Manager y GA4

1. Crea una propiedad GA4 y un flujo web para `https://kinemev.cl`.
2. Crea un contenedor web de Google Tag Manager.
3. En GTM, crea una etiqueta de Google con el ID de medición `G-...` y activador en todas las páginas.
4. Configura activadores de evento personalizado para `generate_lead`, `whatsapp_click`, `form_start`, `form_validation_error`, `service_view`, `service_select`, `contact_email_click`, `review_link_click` y `price_view`.
5. Marca `generate_lead` como evento clave en GA4.
6. Copia `.env.example` a `.env.production`, completa `PUBLIC_GTM_ID=GTM-...` y ejecuta `pnpm deploy`.
7. Acepta el banner en producción y valida los eventos con Tag Assistant y DebugView. Rechaza después el consentimiento y confirma que GTM no se cargue.

No configures campos con nombre, teléfono, comentarios ni antecedentes médicos como parámetros de GA4.

## 3. Credenciales profesionales

Entrega o completa en `src/data/practitioner.ts` únicamente información verificable:

- universidad y título;
- número del Registro Nacional de Prestadores Individuales;
- URL pública del registro;
- certificaciones, institución y año;
- años de experiencia comprobables;
- LinkedIn, Instagram profesional u otros perfiles oficiales.

Después de editar: ejecuta `pnpm verify`, revisa la página `/por-que-elegirme/`, despliega y solicita nuevamente su indexación.

## 4. Comprobación local

```sh
pnpm seo:config
pnpm verify
pnpm deploy
```

`seo:config` muestra qué integraciones están pendientes sin imprimir secretos. `verify` compila y audita títulos, H1, canonical, JSON-LD, enlaces, sitemap, privacidad e indexabilidad.
