import "./globals.css";
import type { Metadata } from "next";
import { Inter } from "next/font/google";

import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Codelite Labs — AI Automation for Real Businesses",
  description:
    "Codelite Labs builds AI-first tools like AutoPilot, WebCraft and BillMaster to automate marketing, sales, websites and billing for global businesses.",
  keywords: [
    "AI automation",
    "business automation",
    "marketing automation",
    "sales CRM",
    "AI website builder",
    "invoice generator",
    "UAE automation",
    "Germany automation",
  ],
  icons: {
    icon: "/favicon.ico",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={`${inter.className} bg-black text-white antialiased`}>
        {/* Global navigation */}
        <Navbar />

        {/* Main content wrapper */}
        <main className="min-h-[70vh]">{children}</main>

        {/* Global footer */}
        <Footer />
      </body>
    </html>
  );
}