// app/why-codelite/page.tsx
import type { Metadata } from "next";

export const metadata = {
  title: "Why Codelite – AI Automation That Actually Ships",
  description:
    "See why businesses choose Codelite Labs instead of juggling multiple tools, agencies and freelancers.",
};

const pillars = [
  {
    title: "End-to-end, not just one tool",
    body: "Most tools focus on one slice of the journey. We connect marketing, lead capture, follow-up, proposals, invoicing and reminders into one stack.",
  },
  {
    title: "AI + playbooks, not just prompts",
    body: "We bake proven flows, templates and messaging into the products so you don't start from a blank page every time.",
  },
  {
    title: "Country & industry aware",
    body: "Flows and content are tuned for local channels, languages and regulations. UAE ≠ Germany ≠ India.",
  },
  {
    title: "Transparent pricing & ownership",
    body: "Your data stays in your workspace. No hidden retainers, no complex licensing, no long-term lock-in.",
  },
];

const comparisons = [
  {
    label: "Hiring separate tools",
    pain: [
      "Paying for 5–8 subscriptions with overlapping features",
      "Manual exports/imports between CRM, website, billing and email",
      "No single picture of leads → revenue",
    ],
  },
  {
    label: "Hiring a traditional agency",
    pain: [
      "Monthly retainers without clear automations delivered",
      "Campaigns depend on specific people and break when they leave",
      "Limited visibility into actual funnel performance",
    ],
  },
  {
    label: "Codelite Labs stack",
    gain: [
      "Single automation layer across marketing, sales and billing",
      "Pre-built flows for follow-ups, reminders and upsell paths",
      "Dashboards showing leads, pipeline and cash collection",
    ],
  },
];

export default function WhyCodelitePage() {
  return (
    <main className="min-h-screen bg-black text-white">
      {/* Hero */}
      <section className="border-b border-white/5 bg-gradient-to-b from-red-950/70 via-black to-black">
        <div className="mx-auto max-w-6xl px-4 py-16 md:px-6 md:py-20">
          <p className="text-[11px] font-semibold uppercase tracking-[0.24em] text-red-400">
            Why Codelite?
          </p>
          <h1 className="mt-3 max-w-3xl text-3xl font-bold md:text-4xl">
            Because you need{" "}
            <span className="text-red-400">automation that ships</span>, not
            just another dashboard.
          </h1>
          <p className="mt-4 max-w-2xl text-sm text-neutral-300 md:text-base">
            Codelite Labs is a focused automation studio with one clear goal:
            move more leads to conversations, more quotes to invoices, and more
            invoices to paid — with the least manual work from your team.
          </p>
        </div>
      </section>

      {/* Pillars */}
      <section className="py-14 md:py-18">
        <div className="mx-auto max-w-6xl px-4 md:px-6">
          <h2 className="text-lg font-semibold md:text-xl">
            What makes Codelite different?
          </h2>
          <div className="mt-6 grid gap-6 md:grid-cols-2">
            {pillars.map((p) => (
              <div
                key={p.title}
                className="rounded-2xl border border-white/10 bg-zinc-950/80 p-5 text-sm text-neutral-200 shadow-[0_18px_50px_rgba(0,0,0,0.7)]"
              >
                <h3 className="text-sm font-semibold text-white">
                  {p.title}
                </h3>
                <p className="mt-2 text-xs text-neutral-300">{p.body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Comparison */}
      <section className="border-y border-white/5 bg-zinc-950/70 py-14 md:py-18">
        <div className="mx-auto max-w-6xl px-4 md:px-6">
          <h2 className="text-lg font-semibold md:text-xl">
            Instead of this… you get this.
          </h2>
          <div className="mt-6 grid gap-6 md:grid-cols-3">
            {comparisons.map((block) => (
              <div
                key={block.label}
                className="rounded-2xl border border-white/10 bg-black/80 p-5 text-xs text-neutral-200"
              >
                <h3 className="text-sm font-semibold text-white">
                  {block.label}
                </h3>
                {"pain" in block && (
                  <ul className="mt-3 space-y-2">
                    {block.pain!.map((item) => (
                      <li key={item}>• {item}</li>
                    ))}
                  </ul>
                )}
                {"gain" in block && (
                  <ul className="mt-3 space-y-2 text-emerald-200">
                    {block.gain!.map((item) => (
                      <li key={item}>• {item}</li>
                    ))}
                  </ul>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Proof / reassurance */}
      <section className="py-14 md:py-18">
        <div className="mx-auto max-w-6xl px-4 md:px-6">
          <div className="grid gap-8 md:grid-cols-[1.4fr,1fr] md:items-start">
            <div className="rounded-2xl border border-white/10 bg-zinc-950/80 p-5 text-sm text-neutral-200">
              <h2 className="text-sm font-semibold text-white">
                Designed for busy teams, not full-time marketers.
              </h2>
              <p className="mt-3 text-xs text-neutral-300">
                We know you&apos;re already managing operations, people and
                customer work. Codelite is built so that once your flows are set
                up, your weekly routine is:
              </p>
              <ul className="mt-3 space-y-2 text-xs text-neutral-300">
                <li>• Glance at your AutoPilot and BillMaster dashboards.</li>
                <li>• Approve or tweak AI-generated campaigns and pages.</li>
                <li>• Jump into real conversations that AutoPilot created.</li>
              </ul>
            </div>

            <div className="rounded-2xl border border-red-500/60 bg-red-950/40 p-5 text-xs text-red-100">
              <h3 className="text-sm font-semibold text-white">
                Our promise
              </h3>
              <p className="mt-2">
                If we can&apos;t clearly show how Codelite will save you time or
                unlock more revenue, we won&apos;t push you to sign. The stack has
                to make immediate sense for your stage and market.
              </p>
            </div>
          </div>

          {/* CTA */}
          <div className="mt-10 flex flex-col gap-4 text-sm md:flex-row md:items-center md:justify-between">
            <div>
              <h3 className="text-sm font-semibold text-white">
                Still deciding if Codelite is right for you?
              </h3>
              <p className="mt-2 text-xs text-neutral-300">
                Send us your website and one recent campaign. We&apos;ll reply with
                a simple Loom walkthrough showing what we&apos;d automate first.
              </p>
            </div>
            <div className="flex gap-3">
              <a
                href="/contact"
                className="inline-flex items-center justify-center rounded-lg bg-red-500 px-5 py-2 text-sm font-semibold text-white hover:bg-red-400"
              >
                Request a walkthrough →
              </a>
              <a
                href="/autopilot"
                className="inline-flex items-center justify-center rounded-lg border border-white/15 px-5 py-2 text-xs font-semibold text-neutral-100 hover:border-red-400/60"
              >
                Explore AutoPilot
              </a>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}