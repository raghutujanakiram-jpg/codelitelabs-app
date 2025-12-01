import "./globals.css";
import Link from "next/link";

export const metadata = {
  title: "Codelite Labs — AI Business OS",
  description: "AI-Powered Marketing, Sales & Operations Automation.",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className="bg-[#0d0d0f] text-white">

        {/* ---------------- NAVBAR ---------------- */}
        <header className="fixed top-0 w-full z-50 bg-[#0d0d0f]/80 backdrop-blur border-b border-white/10">
          <nav className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">

            {/* LOGO */}
            <Link href="/" className="text-2xl font-bold">
              <span className="text-red-500">Codelite</span> Labs
            </Link>

            {/* MENU */}
            <div className="hidden md:flex gap-8 text-sm">
              <Link href="/" className="hover:text-red-500 duration-200">Home</Link>
              <Link href="/autopilot" className="hover:text-red-500 duration-200">AutoPilot</Link>
              <Link href="/webcraft" className="hover:text-red-500 duration-200">WebCraft</Link>
              <Link href="/billmaster" className="hover:text-red-500 duration-200">BillMaster</Link>
              <Link href="/pricing" className="hover:text-red-500 duration-200">Pricing</Link>
              <Link href="/contact" className="hover:text-red-500 duration-200">Contact</Link>
            </div>

          </nav>
        </header>

        {/* ---------------- CONTENT SPACING ---------------- */}
        <div className="pt-24">
          {children}
        </div>

        {/* ---------------- FOOTER ---------------- */}
        <footer className="mt-20 border-t border-white/10 py-10">
          <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-3 gap-10">

            {/* FOOTER COLUMN 1 */}
            <div>
              <h2 className="text-xl font-bold mb-2">Codelite Labs</h2>
              <p className="text-white/60 text-sm">
                AI-Powered Business Automation for Marketing, Sales & Operations.
              </p>
            </div>

            {/* FOOTER COLUMN 2 */}
            <div>
              <h3 className="font-semibold mb-2">Products</h3>
              <ul className="text-white/60 text-sm space-y-1">
                <li><Link href="/autopilot">AutoPilot</Link></li>
                <li><Link href="/webcraft">WebCraft</Link></li>
                <li><Link href="/billmaster">BillMaster</Link></li>
              </ul>
            </div>

            {/* FOOTER COLUMN 3 — FIXED VERSION */}
            <div>
              <h3 className="font-semibold mb-2">Company</h3>
              <ul className="text-white/60 text-sm space-y-1">
                <li><Link href="/about">About</Link></li>
                <li><Link href="/contact">Contact</Link></li>
                <li><Link href="/terms">Terms & Conditions</Link></li>
                <li><Link href="/privacy">Privacy Policy</Link></li>
              </ul>
            </div>

          </div>

          <p className="text-center text-white/40 text-xs mt-10">
            © {new Date().getFullYear()} Codelite Labs. All rights reserved.
          </p>
        </footer>

      </body>
    </html>
  );
}