// app/layout.tsx

import type { Metadata } from "next";
import "./globals.css";
import Navbar from "../components/Navbar";

export const metadata: Metadata = {
  title: {
    default: "Codelite Labs — AI Business Automation",
    template: "%s | Codelite Labs",
  },
  description:
    "Codelite Labs delivers AI-driven marketing, website automation, and intelligent billing through AutoPilot, WebCraft, and BillMaster.",
  keywords: [
    "Codelite Labs",
    "AutoPilot",
    "WebCraft",
    "BillMaster",
    "AI business automation",
    "AI CRM",
    "AI marketing automation",
    "AI website builder",
    "AI invoicing",
  ],
  icons: {
    icon: "/Codelite.svg",
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className="bg-[#05060A] text-white antialiased">
        {/* Global Navigation */}
        <Navbar />

        {/* Page Content */}
        <div className="pt-0">{children}</div>
      </body>
    </html>
  );
}