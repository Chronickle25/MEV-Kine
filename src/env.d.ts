/// <reference path="../.astro/types.d.ts" />

interface ImportMetaEnv {
  readonly PUBLIC_GTM_ID?: string;
  readonly PUBLIC_GOOGLE_SITE_VERIFICATION?: string;
}

interface ImportMeta { readonly env: ImportMetaEnv }

interface Window {
  dataLayer: Record<string, unknown>[];
  gtag?: (...args: unknown[]) => void;
  kineSetConsent?: (value: "accepted" | "rejected") => void;
  kineTrack?: (eventName: string, parameters?: Record<string, unknown>) => void;
}
