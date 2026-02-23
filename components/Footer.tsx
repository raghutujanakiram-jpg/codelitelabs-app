// components/Footer.tsx

"use client";

import Link from "next/link";
import { useTranslations } from "next-intl";

export default function Footer() {
  const t = useTranslations("footer");
  const year = new Date().getFullYear();

  return (
    <footer className="border-t border-white/10 bg-black/95 text-xs text-gray-300">
      <div className="mx-auto max-w-6xl px-4 py-8 md:px-6 md:py-10">
        {/* Top grid */}
        <div className="grid gap-8 md:grid-cols-[1.6fr_repeat(3,minmax(0,1fr))]">
          {/* Brand */}
          <div className="space-y-3">
            <p className="text-sm font-semibold tracking-[0.18em] text-white uppercase">
              {t("brand")}
            </p>
            <p className="text-gray-400 text-[0.78rem] leading-relaxed">
              {t("tagline")}
            </p>
            <p className="text-[0.75rem] text-gray-500">
              {t("operatedBy")}
            </p>
          </div>

          {/* Products */}
          <div>
            <h3 className="text-[0.8rem] font-semibold uppercase tracking-[0.18em] text-gray-400">
              {t("products")}
            </h3>
            <ul className="mt-3 space-y-1.5">
              <li>
                <Link
                  href="/autopilot"
                  className="hover:text-red-400 transition"
                >
                  {t("autopilotLabel")}
                </Link>
              </li>
              <li>
                <Link
                  href="/webcraft"
                  className="hover:text-red-400 transition"
                >
                  {t("webcraftLabel")}
                </Link>
              </li>
              <li>
                <Link
                  href="/billmaster"
                  className="hover:text-red-400 transition"
                >
                  {t("billmasterLabel")}
                </Link>
              </li>
            </ul>
          </div>

          {/* Company */}
          <div>
            <h3 className="text-[0.8rem] font-semibold uppercase tracking-[0.18em] text-gray-400">
              {t("company")}
            </h3>
            <ul className="mt-3 space-y-1.5">
              <li>
                <Link href="/about" className="hover:text-red-400 transition">
                  {t("aboutCodelite")}
                </Link>
              </li>
              <li>
                <Link
                  href="/why-codelite"
                  className="hover:text-red-400 transition"
                >
                  {t("whyCodelite")}
                </Link>
              </li>
              <li>
                <Link
                  href="/contact"
                  className="hover:text-red-400 transition"
                >
                  {t("contactDemo")}
                </Link>
              </li>
            </ul>
          </div>

          {/* Legal / meta */}
          <div>
            <h3 className="text-[0.8rem] font-semibold uppercase tracking-[0.18em] text-gray-400">
              {t("legalInfo")}
            </h3>
            <ul className="mt-3 space-y-1.5">
              <li>
                <Link
                  href="/privacy"
                  className="hover:text-red-400 transition"
                >
                  {t("privacy")}
                </Link>
              </li>
              <li>
                <Link href="/terms" className="hover:text-red-400 transition">
                  {t("terms")}
                </Link>
              </li>
              <li>
                <Link
                  href="/refunds"
                  className="hover:text-red-400 transition"
                >
                  {t("refunds")}
                </Link>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="mt-8 flex flex-col gap-3 border-t border-white/5 pt-4 text-[0.75rem] text-gray-500 md:flex-row md:items-center md:justify-between">
          <p>{t("copyright", { year })}</p>
          <p className="text-gray-500">
            {t("madeWith")}
          </p>
        </div>
      </div>
    </footer>
  );
}
