// app/about/page.tsx

export const metadata = {
  title: "About – Codelite Labs",
  description:
    "Learn about Codelite Labs – the AI automation studio behind AutoPilot, WebCraft and BillMaster.",
};

export default function AboutPage() {
  return (
    <main className="min-h-screen bg-black text-white">
      {/* Hero */}
      <section className="border-b border-white/5 bg-gradient-to-b from-red-950/70 via-black to-black">
        <div className="mx-auto flex max-w-6xl flex-col gap-6 px-4 py-16 md:flex-row md:items-center md:px-6 md:py-20">
          <div className="flex-1">
            <p className="text-[11px] font-semibold uppercase tracking-[0.24em] text-red-400">
              About Codelite Labs
            </p>
            <h1 className="mt-3 text-3xl font-bold md:text-4xl">
              The AI business automation studio{" "}
              <span className="text-red-400">built for real companies.</span>
            </h1>
            <p className="mt-4 text-sm text-neutral-300 md:text-base">
              Codelite Labs was created to solve one simple problem:
              most businesses don&apos;t have the time or team to run modern
              marketing, sales and operations — but still need predictable
              growth. We use AI, automation and battle-tested playbooks to give
              small and mid-size businesses an unfair advantage.
            </p>
          </div>

          <div className="flex-1 rounded-2xl border border-red-500/50 bg-gradient-to-br from-red-900/60 via-black to-black p-5 text-sm text-neutral-100 shadow-[0_25px_90px_rgba(0,0,0,0.9)]">
            <h2 className="text-xs font-semibold uppercase tracking-[0.24em] text-red-300">
              Mission
            </h2>
            <p className="mt-3 text-sm">
              Enable any serious business owner — in any country — to automate
              at least <span className="font-semibold">30–40% of their daily
              marketing, sales and admin work</span> without needing a large
              team, agency or technical background.
            </p>
            <p className="mt-3 text-xs text-neutral-300">
              One platform. Three products. Clear flows. Human-first AI.
            </p>
          </div>
        </div>
      </section>

      {/* Story + values */}
      <section className="py-14 md:py-18">
        <div className="mx-auto max-w-6xl px-4 md:px-6">
          <div className="grid gap-10 md:grid-cols-[1.3fr,1fr] md:items-start">
            {/* Story */}
            <div>
              <h2 className="text-xl font-semibold md:text-2xl">
                Built from real agency & product experience.
              </h2>
              <p className="mt-4 text-sm leading-relaxed text-neutral-300">
                Before Codelite Labs, we spent years building software products,
                marketing stacks and automation for clients across India,
                the UAE, UK and Europe. Every project had the same pattern:
              </p>
              <ul className="mt-3 space-y-2 text-sm text-neutral-300">
                <li>• Tools were powerful, but rarely connected end-to-end.</li>
                <li>• Teams were busy, but leads slipped through the cracks.</li>
                <li>
                  • Founders wanted automation, but didn&apos;t want to manage
                  ten different platforms.
                </li>
              </ul>
              <p className="mt-4 text-sm leading-relaxed text-neutral-300">
                Codelite Labs is our answer: a focused automation studio with a
                single stack — <span className="font-semibold">AutoPilot</span>{" "}
                for marketing &amp; sales,{" "}
                <span className="font-semibold">WebCraft</span> for websites,
                and <span className="font-semibold">BillMaster</span> for
                quotes, invoices and payment follow-up.
              </p>
            </div>

            {/* Values card */}
            <div className="space-y-4">
              <div className="rounded-2xl border border-white/10 bg-zinc-950/80 p-5 text-sm text-neutral-200">
                <h3 className="text-sm font-semibold text-white">
                  What we believe
                </h3>
                <ul className="mt-3 space-y-2 text-xs text-neutral-300">
                  <li>
                    • <span className="font-semibold">Automation first</span> –
                    if a task repeats, it should be automated.
                  </li>
                  <li>
                    • <span className="font-semibold">Clarity over noise</span>{" "}
                    – fewer tools, deeper integrations, clear dashboards.
                  </li>
                  <li>
                    • <span className="font-semibold">Local context</span> –
                    each country and industry needs its own flows &amp; tone.
                  </li>
                  <li>
                    • <span className="font-semibold">Human control</span> –
                    AI helps you decide faster, but you stay in charge.
                  </li>
                </ul>
              </div>

              <div className="rounded-2xl border border-red-500/40 bg-red-950/40 p-5 text-xs text-red-100">
                <h3 className="text-sm font-semibold text-white">
                  Why we start with UAE &amp; Germany
                </h3>
                <p className="mt-2">
                  These markets are hungry for automation, but heavily regulated
                  and culturally diverse. By designing flows that work here
                  first, we make sure Codelite is robust enough for any region.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Who we work with */}
      <section className="border-y border-white/5 bg-zinc-950/70 py-14 md:py-18">
        <div className="mx-auto max-w-6xl px-4 md:px-6">
          <div className="grid gap-10 md:grid-cols-[1.2fr,1.1fr] md:items-start">
            <div>
              <h2 className="text-xl font-semibold md:text-2xl">
                Who Codelite Labs is for.
              </h2>
              <p className="mt-3 text-sm text-neutral-300">
                We work best with teams that already have customers, but want to
                scale smarter:
              </p>
              <ul className="mt-3 space-y-2 text-sm text-neutral-300">
                <li>• Agencies &amp; service businesses</li>
                <li>• Clinics, hospitals &amp; healthcare providers</li>
                <li>• Education &amp; training companies</li>
                <li>• Real estate, hospitality &amp; travel</li>
                <li>• Local businesses ready to move beyond spreadsheets</li>
              </ul>
            </div>

            <div className="rounded-2xl border border-white/10 bg-black/80 p-5 text-xs text-neutral-300">
              <h3 className="text-sm font-semibold text-white">
                What working with us feels like
              </h3>
              <ul className="mt-3 space-y-2">
                <li>• We map your current tools, leads and workflows.</li>
                <li>• We design clear AutoPilot flows and WebCraft funnels.</li>
                <li>• We connect billing with BillMaster so money isn&apos;t stuck.</li>
                <li>• We monitor and refine — not just “set up and disappear”.</li>
              </ul>
              <p className="mt-3">
                The outcome: fewer manual tasks, faster decisions, and dashboards
                that actually mean something.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-14 md:py-18">
        <div className="mx-auto max-w-6xl px-4 text-center md:px-6">
          <h2 className="text-xl font-semibold md:text-2xl">
            Ready to see Codelite Labs in action?
          </h2>
          <p className="mt-3 text-sm text-neutral-300 md:text-base">
            Share your current tools and challenges. We&apos;ll send a short loom
            or live demo showing exactly how AutoPilot, WebCraft and BillMaster
            can plug into your business.
          </p>
          <div className="mt-6 flex justify-center gap-4">
            <a
              href="/contact"
              className="inline-flex items-center justify-center rounded-lg bg-red-500 px-6 py-2.5 text-sm font-semibold text-white shadow-lg shadow-red-900/50 transition hover:bg-red-400"
            >
              Talk to the Codelite team →
            </a>
            <a
              href="/pricing"
              className="inline-flex items-center justify-center rounded-lg border border-white/15 px-6 py-2.5 text-sm font-semibold text-neutral-100 hover:border-red-400/60"
            >
              View pricing
            </a>
          </div>
        </div>
      </section>
    </main>
  );
}