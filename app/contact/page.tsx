// app/contact/page.tsx
import type { Metadata } from "next";

export const metadata = {
  title: "Contact | Codelite Labs",
  description:
    "Talk to Codelite Labs about automating your marketing, sales and operations with AI.",
};

import ContactPageClient from "./ContactPageClient";

export default function ContactPage() {
  return <ContactPageClient />;
}