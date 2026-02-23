// components/LanguageSwitcher.tsx

"use client";

import { useLocale, useTranslations } from "next-intl";
import { usePathname, useRouter } from "next/navigation";
import { localeNames, locales } from "@/lib/i18n.config";
import { useState } from "react";

export default function LanguageSwitcher() {
  const locale = useLocale();
  const pathname = usePathname();
  const router = useRouter();
  const [isOpen, setIsOpen] = useState(false);

  const handleLanguageChange = (newLocale: string) => {
    // Remove the current locale from pathname
    const segments = pathname.split("/");
    segments[1] = newLocale; // Replace locale in path

    const newPathname = segments.join("/");
    router.push(newPathname);
    setIsOpen(false);
  };

  return (
    <div className="relative">
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="inline-flex items-center gap-2 rounded-md border border-white/20 px-3 py-2 text-sm font-medium text-gray-200 hover:border-white/40 hover:text-white transition"
        aria-label="Change language"
      >
        <span className="text-xs font-semibold uppercase tracking-wider">
          {locale.toUpperCase()}
        </span>
        <svg
          className={`h-4 w-4 transition-transform ${isOpen ? "rotate-180" : ""}`}
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M19 14l-7 7m0 0l-7-7m7 7V3"
          />
        </svg>
      </button>

      {isOpen && (
        <div className="absolute right-0 z-50 mt-2 w-40 rounded-lg border border-white/10 bg-black/95 backdrop-blur-xl shadow-lg">
          {locales.map((lang) => (
            <button
              key={lang}
              onClick={() => handleLanguageChange(lang)}
              className={`block w-full px-4 py-2.5 text-left text-sm font-medium transition ${
                locale === lang
                  ? "bg-red-600/30 text-red-300"
                  : "text-gray-200 hover:bg-white/5 hover:text-white"
              } ${lang !== locales[0] ? "border-t border-white/5" : ""}`}
            >
              <span className="font-semibold">{localeNames[lang as any]}</span>
              <span className="ml-2 text-xs text-gray-400">
                ({lang.toUpperCase()})
              </span>
            </button>
          ))}
        </div>
      )}
    </div>
  );
}
