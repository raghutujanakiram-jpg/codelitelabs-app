import React from "react";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Codelite Labs — AI Automation for Real Businesses",
  description:
    "Codelite Labs builds AI-first tools like AutoPilot, WebCraft and BillMaster to automate marketing, sales, websites and billing for global businesses.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html suppressHydrationWarning>
      <body>{children}</body>
    </html>
  );
}
