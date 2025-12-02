// app/page.tsx

export default function HomePage() {
  return (
    <main className="min-h-screen bg-[#05060A] text-white">
      {/* HERO */}
      <section className="border-b border-white/5 bg-gradient-to-b from-red-600/20 via-transparent to-transparent">
        <div className="mx-auto flex max-w-6xl flex-col gap-10 px-4 py-16 sm:px-6 lg:flex-row lg:items-center lg:py-20 lg:px-8">
          {/* Left */}
          <div className="flex-1 space-y-6">
            <p className="text-xs font-semibold uppercase tracking-[0.25em] text-red-300">
              AI BUSINESS AUTOMATION STUDIO
            </p>
            <h1 className="text-3xl font-bold leading-tight sm:text-4xl lg:text-5xl">
              Codelite Labs —{" "}
              <span className="bg-gradient-to-r from-red-400 via-red-500 to-red-300 bg-clip-text text-transparent">
                AI-Powered Business Automation
              </span>
            </h1>
            <p className="max-w-xl text-sm sm:text-base text-gray-300">
              Smart Marketing. Smart Sales. Smart Operations.
              One platform stack that creates content, captures leads,
              follows up, invoices clients, and keeps your business running
              24×7 — even when you’re offline.
            </p>

            <div className="flex flex-wrap gap-4">
              <a
                href="/autopilot"
                className="rounded-md bg-red-600 px-6 py-3 text-sm font-semibold text-white shadow-lg shadow-red-600/40 transition hover:bg-red-500"
              >
                Explore Codelite AutoPilot
              </a>
              <a
                href="/contact"
                className="rounded-md border border-white/20 px-6 py-3 text-sm font-semibold text-white/80 hover:border-white/40 hover:text-white"
              >
                Talk to us
              </a>
            </div>

            <div className="flex flex-wrap gap-6 text-[11px] text-gray-400">
              <div>
                <span className="font-semibold text-white">3 core products</span>{" "}
                — AutoPilot, WebCraft, BillMaster
              </div>
              <div>
                <span className="font-semibold text-white">Built for</span>{" "}
                agencies, SMEs, creators, SaaS, services
              </div>
            </div>
          </div>

          {/* Right – visual panel */}
          <div className="flex-1">
            <div className="relative rounded-2xl border border-white/10 bg-gradient-to-br from-white/10 via-black to-black p-5 shadow-[0_0_80px_rgba(248,113,113,0.45)]">
              <div className="mb-4 flex items-center justify-between text-[11px] text-gray-300">
                <span className="rounded-full bg-black/60 px-3 py-1 text-[10px] uppercase tracking-[0.2em] text-gray-300">
                  Live Automation Snapshot
                </span>
                <span className="text-gray-400">Codelite Command View</span>
              </div>

              <div className="grid gap-4 md:grid-cols-3">
                {/* AutoPilot */}
                <div className="rounded-xl border border-white/10 bg-black/70 p-4">
                  <p className="text-[11px] font-semibold text-red-300">
                    AutoPilot
                  </p>
                  <p className="mt-1 text-[11px] text-gray-300">
                    34 campaigns running
                  </p>
                  <div className="mt-3 space-y-1.5 text-[10px] text-gray-400">
                    <p>• 124 new leads today</p>
                    <p>• 18 hot / 47 warm / 59 cold</p>
                    <p>• 92 follow-ups scheduled</p>
                  </div>
                </div>

                {/* WebCraft */}
                <div className="rounded-xl border border-white/10 bg-black/70 p-4">
                  <p className="text-[11px] font-semibold text-red-300">
                    WebCraft
                  </p>
                  <p className="mt-1 text-[11px] text-gray-300">
                    7 sites live · 3 drafts
                  </p>
                  <div className="mt-3 space-y-1.5 text-[10px] text-gray-400">
                    <p>• Avg. load time 1.2s</p>
                    <p>• SEO score 92/100</p>
                    <p>• 4 landing pages A/B testing</p>
                  </div>
                </div>

                {/* BillMaster */}
                <div className="rounded-xl border border-white/10 bg-black/70 p-4">
                  <p className="text-[11px] font-semibold text-red-300">
                    BillMaster
                  </p>
                  <p className="mt-1 text-[11px] text-gray-300">
                    ₹ 8.4L pending · ₹ 21.3L paid
                  </p>
                  <div className="mt-3 space-y-1.5 text-[10px] text-gray-400">
                    <p>• 14 invoices due this week</p>
                    <p>• 32 reminders auto-scheduled</p>
                    <p>• 0 missed follow-ups</p>
                  </div>
                </div>
              </div>

              <p className="mt-4 text-[11px] text-gray-400">
                One stack. Three products. Marketing, sales, and billing all
                talking to each other — powered by AI and simple automation.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* WHY CODELITE (summary) */}
      <section className="border-b border-white/5 bg-[#05060A]">
        <div className="mx-auto max-w-6xl px-4 py-14 sm:px-6 lg:px-8 lg:py-16">
          <div className="mb-8 text-center">
            <p className="text-xs font-semibold uppercase tracking-[0.25em] text-red-300">
              WHY CODELITE
            </p>
            <h2 className="mt-3 text-2xl font-semibold sm:text-3xl">
              Built for businesses that need{" "}
              <span className="text-red-400">results, not dashboards.</span>
            </h2>
            <p className="mt-3 max-w-2xl mx-auto text-sm text-gray-300">
              Most tools give you reports. Codelite gives you actions:
              posts scheduled, leads contacted, quotes sent, invoices paid.
            </p>
          </div>

          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            <div className="rounded-xl border border-white/5 bg-white/5 p-5">
              <h3 className="text-sm font-semibold text-red-300">
                AI Marketing Engine
              </h3>
              <p className="mt-2 text-xs text-gray-200">
                Auto-create posts, reels, captions, email & WhatsApp campaigns.
                Plan one month of content in a few minutes.
              </p>
            </div>
            <div className="rounded-xl border border-white/5 bg-white/5 p-5">
              <h3 className="text-sm font-semibold text-red-300">
                Lead & Sales Automation
              </h3>
              <p className="mt-2 text-xs text-gray-200">
                Capture leads from forms, ads, and chat. Nurture with smart
                sequences and never lose a hot lead in WhatsApp again.
              </p>
            </div>
            <div className="rounded-xl border border-white/5 bg-white/5 p-5">
              <h3 className="text-sm font-semibold text-red-300">
                Billing & Operations
              </h3>
              <p className="mt-2 text-xs text-gray-200">
                Quotes, proposals, invoices, reminders and payment tracking —
                tightly integrated with your sales pipeline.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* PRODUCT STRIP */}
      <section className="border-b border-white/5 bg-[#05060A]">
        <div className="mx-auto max-w-6xl px-4 py-14 sm:px-6 lg:px-8 lg:py-16">
          <div className="mb-6 flex flex-col gap-2 sm:flex-row sm:items-end sm:justify-between">
            <div>
              <h2 className="text-2xl font-semibold sm:text-3xl">
                One stack. <span className="text-red-400">Three products.</span>
              </h2>
              <p className="mt-2 max-w-xl text-sm text-gray-300">
                Start with any one and upgrade into the full Codelite
                automation suite as you grow.
              </p>
            </div>
          </div>

          <div className="grid gap-6 md:grid-cols-3">
            {/* AutoPilot */}
            <a
              href="/autopilot"
              className="group flex flex-col justify-between rounded-xl border border-white/5 bg-gradient-to-b from-red-500/10 via-transparent to-transparent p-5 transition hover:border-red-500/70 hover:bg-red-500/10"
            >
              <div>
                <p className="text-xs font-semibold uppercase tracking-[0.18em] text-red-300">
                  PRODUCT 01
                </p>
                <h3 className="mt-2 text-lg font-semibold">Codelite AutoPilot</h3>
                <p className="mt-2 text-xs text-gray-200">
                  AI-driven marketing and sales engine. Content, funnels,
                  follow-ups and CRM in one place.
                </p>
              </div>
              <span className="mt-4 text-xs font-semibold text-red-300 group-hover:underline">
                View AutoPilot →
              </span>
            </a>

            {/* WebCraft */}
            <a
              href="/webcraft"
              className="group flex flex-col justify-between rounded-xl border border-white/5 bg-gradient-to-b from-white/10 via-transparent to-transparent p-5 transition hover:border-red-500/70 hover:bg-red-500/5"
            >
              <div>
                <p className="text-xs font-semibold uppercase tracking-[0.18em] text-red-300">
                  PRODUCT 02
                </p>
                <h3 className="mt-2 text-lg font-semibold">Codelite WebCraft</h3>
                <p className="mt-2 text-xs text-gray-200">
                  AI website builder for high-converting landing pages and
                  business sites. SEO-ready and mobile-first.
                </p>
              </div>
              <span className="mt-4 text-xs font-semibold text-red-300 group-hover:underline">
                View WebCraft →
              </span>
            </a>

            {/* BillMaster */}
            <a
              href="/billmaster"
              className="group flex flex-col justify-between rounded-xl border border-white/5 bg-gradient-to-b from-white/10 via-transparent to-transparent p-5 transition hover:border-red-500/70 hover:bg-red-500/5"
            >
              <div>
                <p className="text-xs font-semibold uppercase tracking-[0.18em] text-red-300">
                  PRODUCT 03
                </p>
                <h3 className="mt-2 text-lg font-semibold">Codelite BillMaster</h3>
                <p className="mt-2 text-xs text-gray-200">
                  Smart quotes, proposals, invoices and payment reminders.
                  From quote-to-cash with almost zero manual work.
                </p>
              </div>
              <span className="mt-4 text-xs font-semibold text-red-300 group-hover:underline">
                View BillMaster →
              </span>
            </a>
          </div>
        </div>
      </section>

      {/* REGIONS STRIP */}
      <section className="border-b border-white/5 bg-[#05060A]">
        <div className="mx-auto max-w-6xl px-4 py-12 sm:px-6 lg:px-8">
          <div className="flex flex-col gap-4 md:flex-row md:items-center md:justify-between">
            <div>
              <h2 className="text-lg font-semibold sm:text-xl">
                Launching first in{" "}
                <span className="text-red-400">UAE & Germany</span>.
              </h2>
              <p className="mt-1 max-w-xl text-xs text-gray-300">
                Localised playbooks, language, and compliance considerations
                tuned for each region — starting with Dubai / UAE and Berlin /
                Germany.
              </p>
            </div>
            <div className="flex flex-wrap gap-3 text-xs">
              <a
                href="/countries/uae"
                className="rounded-full border border-white/20 px-4 py-2 text-white/80 hover:border-red-500/60 hover:text-white"
              >
                UAE playbook →
              </a>
              <a
                href="/countries/germany"
                className="rounded-full border border-white/20 px-4 py-2 text-white/80 hover:border-red-500/60 hover:text-white"
              >
                Germany playbook →
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* FINAL CTA */}
      <section className="bg-gradient-to-r from-red-600/30 via-red-500/10 to-transparent">
        <div className="mx-auto max-w-6xl px-4 py-16 sm:px-6 lg:px-8 lg:py-20">
          <div className="flex flex-col gap-6 md:flex-row md:items-center md:justify-between">
            <div>
              <h2 className="text-2xl font-semibold sm:text-3xl">
                Ready to build your{" "}
                <span className="text-red-300">AI-powered business stack?</span>
              </h2>
              <p className="mt-2 max-w-xl text-sm text-gray-100">
                Tell us how you currently get leads and get paid.
                We&apos;ll map a simple automation plan around AutoPilot,
                WebCraft, and BillMaster — starting small, scaling fast.
              </p>
            </div>
            <div className="flex flex-wrap gap-3">
              <a
                href="/contact"
                className="rounded-md bg-white px-6 py-3 text-sm font-semibold text-black hover:bg-gray-100"
              >
                Schedule a 20-minute call
              </a>
              <a
                href="/pricing"
                className="rounded-md border border-white/30 px-6 py-3 text-sm font-semibold text-white hover:border-white"
              >
                View plans & pricing →
              </a>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}