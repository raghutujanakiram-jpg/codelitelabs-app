import React from "react";
import "../globals.css";
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import { notFound } from "next/navigation";
import { locales, isRTL } from "@/lib/i18n.config";

import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const inter = Inter({ subsets: ["latin"] });

type Props = {
  children: React.ReactNode;
  params: Promise<{ locale: string }>;
};

export async function generateMetadata(props: Props): Promise<Metadata> {
  const params = await props.params;
  const { locale } = params;

  const titles: Record<string, string> = {
    en: "Codelite Labs — AI Automation for Real Businesses",
    de: "Codelite Labs — KI-Automatisierung für echte Unternehmen",
    ar: "Codelite Labs — أتمتة ذكية للشركات الحقيقية",
    fr: "Codelite Labs — Automatisation IA pour les véritables entreprises",
    es: "Codelite Labs — Automatización de IA para empresas reales",
  };

  const descriptions: Record<string, string> = {
    en: "Codelite Labs builds AI-first tools like AutoPilot, WebCraft and BillMaster to automate marketing, sales, websites and billing for global businesses.",
    de: "Codelite Labs erstellt KI-gestützte Tools wie AutoPilot, WebCraft und BillMaster zur Automatisierung von Marketing, Vertrieb, Websites und Fakturierung für globale Unternehmen.",
    ar: "يبني Codelite Labs أدوات أولاً بالذكاء الاصطناعي مثل AutoPilot و WebCraft و BillMaster لأتمتة التسويق والمبيعات والمواقع والفوترة للشركات العالمية.",
    fr: "Codelite Labs crée des outils alimentés par l'IA comme AutoPilot, WebCraft et BillMaster pour automatiser le marketing, les ventes, les sites Web et la facturation pour les entreprises mondiales.",
    es: "Codelite Labs crea herramientas de IA como AutoPilot, WebCraft y BillMaster para automatizar marketing, ventas, sitios web y facturación para empresas globales.",
  };

  return {
    title: titles[locale] || titles["en"],
    description: descriptions[locale] || descriptions["en"],
  };
}

export function generateStaticParams() {
  return locales.map((locale) => ({ locale }));
}

export default async function LocaleLayout(props: Props) {
  const params = await props.params;
  const locale = params.locale;

  if (!locales.includes(locale as any)) {
    notFound();
  }

  const direction = isRTL[locale as any] ? "rtl" : "ltr";

  return (
    <html lang={locale} dir={direction} suppressHydrationWarning>
      <body
        className={`${inter.className} bg-black text-white antialiased`}
        suppressHydrationWarning
      >
        {/* Global navigation */}
        <Navbar />

        {/* Main content wrapper */}
        <main className="min-h-[70vh]">{props.children}</main>

        {/* Global footer */}
        <Footer />
      </body>
    </html>
  );
}
