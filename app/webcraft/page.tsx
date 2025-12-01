export default function WebCraftPage() {
  return (
    <main className="min-h-screen bg-[#0d0d0f] text-white">
      <section className="max-w-6xl mx-auto px-6 py-16">
        <h1 className="text-3xl md:text-4xl font-bold mb-4">
          WebCraft — AI Website Builder
        </h1>
        <p className="text-white/60 max-w-2xl mb-10">
          Go from “no website” to a complete, mobile-friendly, SEO-aware site in seconds.
          WebCraft builds copy, structure and visuals for you.
        </p>

        <div className="grid md:grid-cols-2 gap-8 mb-12">
          <div className="rounded-xl border border-white/10 bg-black/40 p-6">
            <h2 className="text-xl font-semibold mb-2 text-red-400">Instant Website</h2>
            <p className="text-white/70 text-sm">
              Type your business name, niche and location — WebCraft generates hero,
              services, about, testimonials and contact sections automatically.
            </p>
          </div>

          <div className="rounded-xl border border-white/10 bg-black/40 p-6">
            <h2 className="text-xl font-semibold mb-2 text-red-400">Theme Engine</h2>
            <p className="text-white/70 text-sm">
              Choose colors, typography and layout presets to match your brand —
              without needing a designer.
            </p>
          </div>

          <div className="rounded-xl border border-white/10 bg-black/40 p-6">
            <h2 className="text-xl font-semibold mb-2 text-red-400">SEO Ready</h2>
            <p className="text-white/70 text-sm">
              Headings, descriptions and structure generated with SEO best practices
              so you can be discovered faster.
            </p>
          </div>

          <div className="rounded-xl border border-white/10 bg-black/40 p-6">
            <h2 className="text-xl font-semibold mb-2 text-red-400">One-Click Publish</h2>
            <p className="text-white/70 text-sm">
              Host on Codelite infra first, later connect your own domain when you’re ready.
            </p>
          </div>
        </div>

        <button className="px-8 py-3 rounded-lg bg-red-600 hover:bg-red-700 text-sm font-semibold">
          Try WebCraft
        </button>
      </section>
    </main>
  );
}