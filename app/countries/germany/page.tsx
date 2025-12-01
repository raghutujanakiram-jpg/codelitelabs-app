export default function GermanyPage() {
  return (
    <main className="min-h-screen bg-[#0d0d0f] text-white">
      <section className="max-w-5xl mx-auto px-6 py-16">
        <h1 className="text-3xl md:text-4xl font-bold mb-3">
          AI Business Engine for Germany 🇩🇪
        </h1>
        <p className="text-white/60 max-w-2xl mb-10">
          German + English content, email-first workflows and GDPR-aware structures
          for serious German businesses.
        </p>

        <div className="grid md:grid-cols-2 gap-8 mb-10">
          <div className="rounded-xl border border-white/10 bg-black/40 p-6">
            <h2 className="text-lg font-semibold mb-2 text-red-400">
              Localized German Content
            </h2>
            <p className="text-white/70 text-sm">
              AI that writes in natural German for cities like Berlin, Munich,
              Hamburg and more.
            </p>
          </div>
          <div className="rounded-xl border border-white/10 bg-black/40 p-6">
            <h2 className="text-lg font-semibold mb-2 text-red-400">
              Email-first Automation
            </h2>
            <p className="text-white/70 text-sm">
              Campaigns and follow-ups designed mainly around email and website
              interactions.
            </p>
          </div>
          <div className="rounded-xl border border-white/10 bg-black/40 p-6">
            <h2 className="text-lg font-semibold mb-2 text-red-400">
              GDPR-aware Structure
            </h2>
            <p className="text-white/70 text-sm">
              Flows designed to be compatible with European privacy expectations.
              Final compliance choices remain with you.
            </p>
          </div>
          <div className="rounded-xl border border-white/10 bg-black/40 p-6">
            <h2 className="text-lg font-semibold mb-2 text-red-400">
              German SMB Templates
            </h2>
            <p className="text-white/70 text-sm">
              Pre-tuned patterns for services, consulting, real estate,
              agencies and local shops.
            </p>
          </div>
        </div>

        <button className="px-8 py-3 rounded-lg bg-red-600 hover:bg-red-700 text-sm font-semibold">
          Start Free for Germany
        </button>
      </section>
    </main>
  );
}