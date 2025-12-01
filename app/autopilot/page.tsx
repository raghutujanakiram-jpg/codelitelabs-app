export default function AutoPilotPage() {
  return (
    <main className="min-h-screen bg-[#0d0d0f] text-white">
      <section className="max-w-6xl mx-auto px-6 py-16">
        <h1 className="text-3xl md:text-4xl font-bold mb-4">
          AutoPilot — AI Marketing & CRM Engine
        </h1>
        <p className="text-white/60 max-w-2xl mb-10">
          AutoPilot creates content, tracks leads, replies to customers and gives
          you smart insights — so your business keeps moving 24/7 even when you don’t.
        </p>

        <div className="grid md:grid-cols-2 gap-8 mb-12">
          <div className="rounded-xl border border-white/10 bg-black/40 p-6">
            <h2 className="text-xl font-semibold mb-2 text-red-400">AI Marketing</h2>
            <p className="text-white/70 text-sm">
              Posts, captions, hashtags, offers, festival creatives and email campaigns —
              all generated in seconds for your industry and country.
            </p>
          </div>

          <div className="rounded-xl border border-white/10 bg-black/40 p-6">
            <h2 className="text-xl font-semibold mb-2 text-red-400">
              AI CRM & Lead Scoring
            </h2>
            <p className="text-white/70 text-sm">
              Capture leads from website, WhatsApp or ads, see Hot / Warm / Cold labels,
              and let AI guide your follow-ups.
            </p>
          </div>

          <div className="rounded-xl border border-white/10 bg-black/40 p-6">
            <h2 className="text-xl font-semibold mb-2 text-red-400">Review Replies</h2>
            <p className="text-white/70 text-sm">
              Reply to Google and platform reviews in a single click with AI-written
              responses in English, Arabic or German (depending on your region).
            </p>
          </div>

          <div className="rounded-xl border border-white/10 bg-black/40 p-6">
            <h2 className="text-xl font-semibold mb-2 text-red-400">
              C-Lite — Your AI Business Assistant
            </h2>
            <p className="text-white/70 text-sm">
              Ask “What should I post today?”, “How many leads came from Instagram?”
              or “Who is likely to buy this week?” and get instant answers.
            </p>
          </div>
        </div>

        <button className="px-8 py-3 rounded-lg bg-red-600 hover:bg-red-700 text-sm font-semibold">
          Start with AutoPilot
        </button>
      </section>
    </main>
  );
}