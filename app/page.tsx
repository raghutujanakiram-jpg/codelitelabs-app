"use client";

export default function Home() {
  return (
    <main className="min-h-screen bg-black text-white">
      {/* ================= HERO SECTION ================= */}
      <section className="w-full py-32 text-center flex flex-col items-center justify-center">
        <h1 className="text-5xl sm:text-6xl font-extrabold tracking-tight">
          <span className="text-red-500">Codelite Labs</span> — AI-Powered Business Automation
        </h1>

        <p className="mt-6 text-lg text-gray-300 max-w-2xl">
          Smart Marketing. Smart Sales. Smart Operations.  
          One platform that automates everything your business needs.
        </p>

        <div className="mt-10 flex gap-4">
          <button className="px-8 py-3 bg-red-600 hover:bg-red-700 transition rounded-lg font-semibold">
            Get Started
          </button>

          <button className="px-8 py-3 border border-gray-600 hover:bg-gray-800 transition rounded-lg font-semibold">
            Watch Demo
          </button>
        </div>
      </section>

      {/* ================= FEATURES SECTION ================= */}
      <section className="w-full py-24 bg-[#0b0b0b]">
        <div className="max-w-6xl mx-auto px-6">
          <h2 className="text-4xl font-bold text-center mb-16">
            Why <span className="text-red-500">Codelite Labs</span>?
          </h2>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10">
            {/* Card 1 */}
            <div className="p-8 bg-gray-900 border border-gray-700 rounded-xl hover:border-red-500 transition">
              <h3 className="text-xl font-bold mb-3 text-red-400">AI Marketing Engine</h3>
              <p className="text-gray-400">
                Auto-create posts, reels, captions, content calendars, ads & strategies for any business.
              </p>
            </div>

            {/* Card 2 */}
            <div className="p-8 bg-gray-900 border border-gray-700 rounded-xl hover:border-red-500 transition">
              <h3 className="text-xl font-bold mb-3 text-red-400">AI Lead Management</h3>
              <p className="text-gray-400">
                Capture leads, score leads, auto-follow-up, auto-assign & convert faster.
              </p>
            </div>

            {/* Card 3 */}
            <div className="p-8 bg-gray-900 border border-gray-700 rounded-xl hover:border-red-500 transition">
              <h3 className="text-xl font-bold mb-3 text-red-400">AI Sales Automation</h3>
              <p className="text-gray-400">
                Quotes, invoices, proposals & reminders — fully automated.
              </p>
            </div>

            {/* Card 4 */}
            <div className="p-8 bg-gray-900 border border-gray-700 rounded-xl hover:border-red-500 transition">
              <h3 className="text-xl font-bold mb-3 text-red-400">AI Web Builder</h3>
              <p className="text-gray-400">
                Generate high-converting websites instantly. SEO-ready, responsive, multilingual.
              </p>
            </div>

            {/* Card 5 */}
            <div className="p-8 bg-gray-900 border border-gray-700 rounded-xl hover:border-red-500 transition">
              <h3 className="text-xl font-bold mb-3 text-red-400">AI Creative Studio</h3>
              <p className="text-gray-400">
                Posters, festival posts, ads, WhatsApp creatives — made in 10 seconds.
              </p>
            </div>

            {/* Card 6 */}
            <div className="p-8 bg-gray-900 border border-gray-700 rounded-xl hover:border-red-500 transition">
              <h3 className="text-xl font-bold mb-3 text-red-400">Global Business OS</h3>
              <p className="text-gray-400">
                Business intelligence, insights & AI assistants tailored for your industry.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ================= CTA SECTION ================= */}
      <section className="w-full py-28 bg-black text-center">
        <h2 className="text-4xl font-bold mb-6">
          Ready to Automate Your Business?
        </h2>
        <p className="text-gray-400 max-w-2xl mx-auto">
          Start today and see the difference in your leads, marketing & operations within 48 hours.
        </p>

        <div className="mt-10">
          <button className="px-10 py-4 bg-red-600 hover:bg-red-700 rounded-lg text-lg font-semibold">
            Start Free Trial
          </button>
        </div>
      </section>

      {/* ================= FOOTER ================= */}
      <footer className="w-full py-10 border-t border-gray-800 bg-[#0b0b0b] text-center">
        <p className="text-gray-500 text-sm">
          © {new Date().getFullYear()} Codelite Labs. All rights reserved.
        </p>
      </footer>
    </main>
  );
}