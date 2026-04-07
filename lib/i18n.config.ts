// lib/i18n.config.ts

export const locales = ["en", "de", "ar", "fr", "es"] as const;
export const defaultLocale = "en";

export type Locale = (typeof locales)[number];

export const localeNames: Record<Locale, string> = {
  en: "English",
  de: "Deutsch",
  ar: "العربية",
  fr: "Français",
  es: "Español",
};

export const isRTL: Record<Locale, boolean> = {
  en: false,
  de: false,
  ar: true,
  fr: false,
  es: false,
};
