// components/Navbar.tsx

"use client";

import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { useState } from "react";

const navLinks = [
  { href: "/", label: "Home" },
  { href: "/autopilot", label: "AutoPilot" },
  { href: "/webcraft", label: "WebCraft" },
  { href: "/billmaster", label: "BillMaster" },
  { href: "/pricing", label: "Pricing" },
  { href: "/about", label: "About" },          // ⬅ added
  // you can also add Why Codelite if you want:
  // { href: "/why-codelite", label: "Why Codelite" },
  { href: "/contact", label: "Contact" },
];

export default function Navbar() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-0 z-40 border-b border-white/5 bg-black/80 backdrop-blur-xl">
      <nav className="mx-auto flex max-w-6xl items-center justify-between px-4 py-3 md:px-6">
        {/* Logo only (no extra text) */}
        <Link
          href="/"
          className="flex items-center gap-2 hover:opacity-90 transition"
        >
          <Image
            src="/Codelite.svg"
            alt="Codelite Labs"
            width={90}
            height={90}
            priority
            className="h-20 w-auto brightness-125 drop-shadow-[0_0_8px_rgba(255,255,255,0.35)]"
          />
        </Link>

        {/* Desktop nav */}
        <div className="hidden items-center gap-6 text-sm font-medium md:flex">
          {navLinks.map((link) => {
            const isActive =
              link.href === "/"
                ? pathname === "/"
                : pathname.startsWith(link.href);

            return (
              <Link
                key={link.href}
                href={link.href}
                className={`transition hover:text-red-400 ${
                  isActive ? "text-red-400" : "text-gray-200"
                }`}
              >
                {link.label}
              </Link>
            );
          })}
        </div>

        {/* Mobile menu button */}
        <button
          className="inline-flex items-center justify-center rounded-md border border-white/10 p-2 text-gray-200 md:hidden"
          onClick={() => setOpen((v) => !v)}
          aria-label="Toggle navigation"
        >
          <span className="sr-only">Open main menu</span>
          <div className="space-y-1">
            <span className="block h-0.5 w-5 bg-gray-200" />
            <span className="block h-0.5 w-5 bg-gray-200" />
            <span className="block h-0.5 w-5 bg-gray-200" />
          </div>
        </button>
      </nav>

      {/* Mobile nav dropdown */}
      {open && (
        <div className="border-t border-white/10 bg-black/95 md:hidden">
          <div className="mx-auto flex max-w-6xl flex-col px-4 py-3 space-y-2">
            {navLinks.map((link) => {
              const isActive =
                link.href === "/"
                  ? pathname === "/"
                  : pathname.startsWith(link.href);

              return (
                <Link
                  key={link.href}
                  href={link.href}
                  onClick={() => setOpen(false)}
                  className={`block rounded-md px-2 py-2 text-sm font-medium transition ${
                    isActive
                      ? "bg-red-600/20 text-red-400"
                      : "text-gray-200 hover:bg-white/5"
                  }`}
                >
                  {link.label}
                </Link>
              );
            })}
          </div>
        </div>
      )}
    </header>
  );
}