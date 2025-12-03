// components/Footer.tsx

import Link from "next/link";

export default function Footer() {
  return (
    <footer className="border-t border-white/10 bg-black/95 text-xs text-gray-300">
      <div className="mx-auto max-w-6xl px-4 py-8 md:px-6 md:py-10">
        {/* Top grid */}
        <div className="grid gap-8 md:grid-cols-[1.6fr_repeat(3,minmax(0,1fr))]">
          {/* Brand */}
          <div className="space-y-3">
            <p className="text-sm font-semibold tracking-[0.18em] text-white uppercase">
              Codelite Labs
            </p>
            <p className="text-gray-400 text-[0.78rem] leading-relaxed">
              AI-first automation studio behind{" "}
              <span className="text-white font-medium">AutoPilot</span>,{" "}
              <span className="text-white font-medium">WebCraft</span> and{" "}
              <span className="text-white font-medium">BillMaster</span>.
              Built for real businesses, not just dashboards.
            </p>
            <p className="text-[0.75rem] text-gray-500">
              Operated by <span className="text-gray-300 font-medium">UNA Creative Hub</span>.
            </p>
          </div>

          {/* Products */}
          <div>
            <h3 className="text-[0.8rem] font-semibold uppercase tracking-[0.18em] text-gray-400">
              Products
            </h3>
            <ul className="mt-3 space-y-1.5">
              <li>
                <Link
                  href="/autopilot"
                  className="hover:text-red-400 transition"
                >
                  AutoPilot – Marketing & Sales OS
                </Link>
              </li>
              <li>
                <Link
                  href="/webcraft"
                  className="hover:text-red-400 transition"
                >
                  WebCraft – AI Website Builder
                </Link>
              </li>
              <li>
                <Link
                  href="/billmaster"
                  className="hover:text-red-400 transition"
                >
                  BillMaster – Invoices & Quotes
                </Link>
              </li>
            </ul>
          </div>

          {/* Company */}
          <div>
            <h3 className="text-[0.8rem] font-semibold uppercase tracking-[0.18em] text-gray-400">
              Company
            </h3>
            <ul className="mt-3 space-y-1.5">
              <li>
                <Link href="/about" className="hover:text-red-400 transition">
                  About Codelite Labs
                </Link>
              </li>
              <li>
                <Link
                  href="/why-codelite"
                  className="hover:text-red-400 transition"
                >
                  Why Codelite?
                </Link>
              </li>
              <li>
                <Link
                  href="/contact"
                  className="hover:text-red-400 transition"
                >
                  Contact & Demo
                </Link>
              </li>
            </ul>
          </div>

          {/* Legal / meta */}
          <div>
            <h3 className="text-[0.8rem] font-semibold uppercase tracking-[0.18em] text-gray-400">
              Legal &amp; Info
            </h3>
            <ul className="mt-3 space-y-1.5">
              <li>
                <Link
                  href="/privacy"
                  className="hover:text-red-400 transition"
                >
                  Privacy Policy
                </Link>
              </li>
              <li>
                <Link href="/terms" className="hover:text-red-400 transition">
                  Terms of Use
                </Link>
              </li>
              <li>
                <Link
                  href="/refunds"
                  className="hover:text-red-400 transition"
                >
                  Refund & Cancellation
                </Link>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="mt-8 flex flex-col gap-3 border-t border-white/5 pt-4 text-[0.75rem] text-gray-500 md:flex-row md:items-center md:justify-between">
          <p>
            © {new Date().getFullYear()} Codelite Labs · A product line by{" "}
            <span className="text-gray-300 font-medium">UNA Creative Hub</span>.
            All rights reserved.
          </p>
          <p className="text-gray-500">
            Made with <span className="text-red-400">●</span> in India, serving
            UAE, Germany &amp; beyond.
          </p>
        </div>
      </div>
    </footer>
  );
}