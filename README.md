# KINE MEV

Sitio estático de servicios de kinesiología a domicilio construido con Astro 7 y Tailwind CSS 4.

## Requisitos

- Node.js 22.20 o superior.
- pnpm 11 o superior.

## Desarrollo

```sh
pnpm install
pnpm dev
pnpm build
```

El build genera las páginas estáticas, `sitemap-index.xml` y los archivos asociados del sitemap.

## Variables de entorno

Crea un archivo `.env` a partir de `.env.example`:

```env
PUBLIC_GTM_ID=GTM-XXXXXXX
PUBLIC_GOOGLE_SITE_VERIFICATION=token-de-google-search-console
PUBLIC_GOOGLE_REVIEW_URL=https://g.page/r/tu-enlace-de-resenas/review
```

Si `PUBLIC_GTM_ID` está vacío, el sitio no carga Google Tag Manager ni muestra el banner de consentimiento.

## Google Tag Manager y GA4

1. Crea un contenedor web de GTM y configura su ID en `PUBLIC_GTM_ID`.
2. Dentro de GTM crea una etiqueta de Google conectada al flujo web de GA4.
3. Crea activadores de evento personalizado para `whatsapp_click`, `form_start`, `form_validation_error`, `generate_lead`, `service_view`, `service_select`, `contact_email_click` y `review_link_click`.
4. Publica el contenedor y marca `generate_lead` como evento clave en GA4.
5. Verifica el consentimiento y los eventos con Tag Assistant antes de publicar cambios del contenedor.

El sitio utiliza Consent Mode v2 con almacenamiento denegado por defecto. GTM solo se carga después de que la persona acepta la medición.

## Google Search Console

1. Configura el token de verificación en `PUBLIC_GOOGLE_SITE_VERIFICATION` y despliega el sitio.
2. Añade `https://kinemev.cl/sitemap-index.xml` en Search Console.
3. Vincula la propiedad de Search Console con GA4 desde la administración de Google Analytics.

## Reseñas de Google

Configura `PUBLIC_GOOGLE_REVIEW_URL` con el enlace para solicitar reseñas de tu Perfil de Negocio. Mientras la variable esté vacía, la invitación a dejar reseñas no se mostrará. No publiques testimonios de pacientes en el sitio sin autorización y evita solicitar diagnósticos u otros antecedentes de salud.

## WhatsApp Business

Los botones generales abren la conversación con el mensaje `Hola, quiero agendar una evaluación kinesiológica.`. Configura en WhatsApp Business el siguiente mensaje de bienvenida o respuesta rápida:

> ¡Hola! Cuéntame brevemente qué te está pasando y te oriento sobre cómo podemos ayudarte. También puedo compartirte los horarios disponibles para una evaluación.
