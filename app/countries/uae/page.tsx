export default function UAEPage() {
  return (
    <main className="min-h-screen bg-[#0d0d0f] text-white">
      <section className="max-w-5xl mx-auto px-6 py-16">
        <h1 className="text-3xl md:text-4xl font-bold mb-3">
          AI Business Engine for UAE 🇦🇪
        </h1>
        <p className="text-white/60 max-w-2xl mb-10">
          Arabic + English content, WhatsApp-based workflows and AED-ready billing.
          Codelite AutoPilot is tuned for how UAE businesses actually run.
        </p>

        <div className="grid md:grid-cols-2 gap-8 mb-10">
          <div className="rounded-xl border border-white/10 bg-black/40 p-6">
            <h2 className="text-lg font-semibold mb-2 text-red-400">
              Dual-language Marketing
            </h2>
            <p className="text-white/70 text-sm">
              Generate posts, captions and offers in Arabic & English for Dubai,
              Abu Dhabi and the wider UAE region.
            </p>
          </div>
          <div className="rounded-xl border border-white/10 bg-black/40 p-6">
            <h2 className="text-lg font-semibold mb-2 text-red-400">
              WhatsApp-first Automations
            </h2>
            <p className="text-white/70 text-sm">
              Auto replies, booking flows and follow-up reminders —
              built around WhatsApp.
            </p>
          </div>
          <div className="rounded-xl border border-white/10 bg-black/40 p-6">
            <h2 className="text-lg font-semibold mb-2 text-red-400">
              AED-based Billing
            </h2>
            <p className="text-white/70 text-sm">
              Invoices, quotes and proposals in AED with AI-written descriptions,
              sharable via WhatsApp or email.
            </p>
          </div>
          <div className="rounded-xl border border-white/10 bg-black/40 p-6">
            <h2 className="text-lg font-semibold mb-2 text-red-400">
              UAE Templates
            </h2>
            <p className="text-white/70 text-sm">
              Ready-made flows for salons, clinics, real estate, restaurants
              and service businesses in UAE.
            </p>
          </div>
        </div>

        <button className="px-8 py-3 rounded-lg bg-red-600 hover:bg-red-700 text-sm font-semibold">
          Start Free for UAE
        </button>
      </section>
    </main>
  );
}