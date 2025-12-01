// app/billmaster/page.tsx
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Codelite BillMaster – Smart Quotes, Invoices & Payments | Codelite Labs",
  description:
    "Codelite BillMaster is an AI-powered billing suite for generating quotes, proposals, invoices, and payment reminders automatically.",
};

const keyBenefits = [
  {
    title: "AI-Powered Quotes & Proposals",
    description:
      "Generate branded quotes and proposals in seconds based on your products, services, and pricing rules.",
  },
  {
    title: "One-Click Invoicing",
    description:
      "Convert an approved quote into a tax-compliant invoice with a single click — no retyping or duplication.",
  },
  {
    title: "Smart Payment Links",
    description:
      "Share secure payment links over email, WhatsApp, SMS, or embedded in your proposals.",
  },
  {
    title: "Automated Reminders",
    description:
      "Set intelligent follow-up rules so BillMaster reminds clients before and after due dates automatically.",
  },
  {
    title: "GST / VAT / Tax Friendly",
    description:
      "Support for tax fields, multiple currencies, and regional requirements — ready for global billing.",
  },
  {
    title: "Deep AutoPilot Integration",
    description:
      "Sync quotes, invoices, and payment status with Codelite AutoPilot so your sales and finance stay aligned.",
  },
];

const workflow = [
  {
    step: "01",
    title: "Create or import your items",
    description:
      "Add products, services, plans, and pricing once. BillMaster reuses them across all quotes and invoices.",
  },
  {
    step: "02",
    title: "Generate quote with AI",
    description:
      "Type a short description of the deal; BillMaster drafts a complete quote with line items, terms, and cover note.",
  },
  {
    step: "03",
    title: "Send, track & negotiate",
    description:
      "Share quotes via link or PDF. Track opens, comments, discounts, and approvals in a single timeline.",
  },
  {
    step: "04",
    title: "Convert to invoice & get paid",
    description:
      "Convert the approved quote to an invoice, attach payment link, and let automation handle reminders.",
  },
];

const useCases = [
  "Agencies sending retainers & project quotes",
  "Freelancers billing multiple clients every month",
  "SaaS companies managing subscriptions and renewals",
  "Consultants issuing milestone-based invoices",
  "Service businesses collecting advance + balance payments",
  "Training / EdTech companies managing batches & instalments",
];

const faqs = [
  {
    q: "Can I customise the invoice design?",
    a: "Yes. You can configure your logo, colours, address, tax IDs, bank details, and template language. Multiple templates are supported.",
  },
  {
    q: "Does BillMaster support multiple currencies?",
    a: "Yes. You can bill clients in different currencies and keep a base reporting currency for your own dashboard.",
  },
  {
    q: "Can I use BillMaster without AutoPilot?",
    a: "Yes. BillMaster works as a standalone billing system. When connected to AutoPilot, you unlock powerful sales + billing automation.",
  },
  {
    q: "How are payment reminders handled?",
    a: "You define rules (for example: 3 days before, on due date, 3/7/14 days after). BillMaster sends polite, branded reminders automatically.",
  },
  {
    q: "Can I export data to my accountant?",
    a: "Yes. You can export invoices, payments, and ledgers in CSV or Excel format, and share periodic reports with your finance team.",
  },
];

export default function BillMasterPage() {
  return (
    <main className="min-h-screen bg-[#05060A] text-white">
      {/* Hero */}
      <section className="border-b border-white/5 bg-gradient-to-b from-red-500/5 via-transparent to-transparent">
        <div className="mx-auto flex max-w-6xl flex-col gap-10 px-4 py-16 sm:px-6 lg:flex-row lg:items-center lg:py-20 lg:px-8">
          {/* Left */}
          <div className="flex-1 space-y-6">
            <p className="text-sm font-semibold uppercase tracking-[0.25em] text-red-400">
              CODELITE BILLMASTER
            </p>
            <h1 className="text-3xl font-bold leading-tight sm:text-4xl lg:text-5xl">
              Stop chasing payments.
              <span className="block bg-gradient-to-r from-red-400 via-red-500 to-red-300 bg-clip-text text-transparent">
                Let your invoices do it for you.
              </span>
            </h1>
            <p className="max-w-xl text-sm sm:text-base text-gray-300">
              BillMaster turns quotes, invoices, and payment reminders into a
              fully automated workflow. Create, send, track, and get paid —
              without living inside spreadsheets and WhatsApp chats.
            </p>
            <div className="flex flex-wrap items-center gap-4">
              <a
                href="/contact"
                className="rounded-md bg-red-600 px-6 py-3 text-sm font-semibold text-white shadow-lg shadow-red-600/30 transition hover:bg-red-500"
              >
                Talk about billing automation
              </a>
              <a
                href="/pricing"
                className="rounded-md border border-white/20 px-6 py-3 text-sm font-semibold text-white/80 hover:border-white/40 hover:text-white"
              >
                View pricing
              </a>
            </div>
            <p className="text-xs text-gray-400">
              Perfect for agencies, freelancers, service businesses, and SaaS.
            </p>
          </div>

          {/* Right preview */}
          <div className="flex-1">
            <div className="relative rounded-xl border border-white/10 bg-gradient-to-br from-white/5 via-red-500/5 to-transparent p-5 shadow-[0_0_80px_rgba(248,113,113,0.35)]">
              <div className="mb-4 flex items-center justify-between text-xs text-gray-400">
                <span className="rounded-full bg-black/40 px-3 py-1 text-[10px] uppercase tracking-[0.2em]">
                  Invoice Timeline
                </span>
                <span>BillMaster Command Panel</span>
              </div>

              <div className="grid gap-4 md:grid-cols-2">
                {/* Invoice card */}
                <div className="rounded-lg border border-white/10 bg-black/70 p-4">
                  <div className="mb-3 flex items-center justify-between text-[11px] text-gray-300">
                    <span>Invoice #INV-2043</span>
                    <span className="rounded-full bg-emerald-500/10 px-2 py-0.5 text-[10px] text-emerald-300">
                      Sent
                    </span>
                  </div>
                  <div className="space-y-1.5 text-[11px] text-gray-300">
                    <div className="flex justify-between">
                      <span>Client</span>
                      <span className="font-medium text-white">Acme Media</span>
                    </div>
                    <div className="flex justify-between">
                      <span>Amount</span>
                      <span className="font-semibold text-white">
                        ₹ 84,500.00
                      </span>
                    </div>
                    <div className="flex justify-between">
                      <span>Due</span>
                      <span className="text-yellow-300">in 5 days</span>
                    </div>
                  </div>
                  <div className="mt-3 flex gap-2">
                    <div className="h-7 flex-1 rounded bg-red-600/80" />
                    <div className="h-7 w-10 rounded border border-white/20" />
                  </div>
                </div>

                {/* Timeline */}
                <div className="space-y-2 rounded-lg border border-white/10 bg-black/70 p-4">
                  {[
                    { label: "Quote created", time: "10:12 AM", accent: "bg-white/60" },
                    { label: "Quote approved", time: "11:03 AM", accent: "bg-emerald-400" },
                    { label: "Invoice sent", time: "11:05 AM", accent: "bg-red-400" },
                    { label: "Reminder scheduled", time: "Due + 3 days", accent: "bg-yellow-300" },
                  ].map((item) => (
                    <div key={item.label} className="flex items-start gap-2">
                      <span
                        className={`mt-0.5 h-1.5 w-1.5 rounded-full ${item.accent}`}
                      />
                      <div className="flex-1">
                        <p className="text-[11px] text-gray-100">
                          {item.label}
                        </p>
                        <p className="text-[10px] text-gray-400">
                          {item.time}
                        </p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              <p className="mt-3 text-[11px] text-gray-400">
                BillMaster keeps every quote, invoice, and reminder in one clean
                timeline — for your team and your clients.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Key benefits */}
      <section className="border-b border-white/5 bg-[#05060A]">
        <div className="mx-auto max-w-6xl px-4 py-14 sm:px-6 lg:px-8 lg:py-16">
          <div className="mb-8 flex flex-col gap-3 sm:flex-row sm:items-end sm:justify-between">
            <div>
              <h2 className="text-2xl font-semibold sm:text-3xl">
                Everything from{" "}
                <span className="text-red-400">quote to cash</span>, in one
                place.
              </h2>
              <p className="mt-2 max-w-2xl text-sm text-gray-300">
                Replace scattered Excel sheets, PDF templates, and manual
                follow-ups with one unified billing engine that never forgets a
                payment.
              </p>
            </div>
            <p className="text-xs text-gray-400">
              Built for teams that want clean billing, not chaos.
            </p>
          </div>

          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {keyBenefits.map((item) => (
              <div
                key={item.title}
                className="group rounded-xl border border-white/5 bg-gradient-to-br from-white/5 via-transparent to-transparent p-5 transition hover:border-red-500/60 hover:bg-red-500/5"
              >
                <h3 className="mb-2 text-sm font-semibold text-red-300">
                  {item.title}
                </h3>
                <p className="text-xs text-gray-300">{item.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Workflow */}
      <section className="border-b border-white/5 bg-[#05060A]">
        <div className="mx-auto max-w-6xl px-4 py-14 sm:px-6 lg:px-8 lg:py-16">
          <div className="mb-8">
            <h2 className="text-2xl font-semibold sm:text-3xl">
              A simple flow from{" "}
              <span className="text-red-400">idea to paid.</span>
            </h2>
            <p className="mt-2 max-w-2xl text-sm text-gray-300">
              BillMaster doesn&apos;t replace your accountant — it makes sure
              they get clean, accurate, on-time data while you stay focused on
              closing deals.
            </p>
          </div>

          <div className="grid gap-6 md:grid-cols-4">
            {workflow.map((step) => (
              <div
                key={step.step}
                className="rounded-xl border border-white/5 bg-gradient-to-b from-white/5 via-transparent to-transparent p-4"
              >
                <div className="mb-3 text-xs font-semibold text-red-400">
                  {step.step}
                </div>
                <h3 className="mb-2 text-sm font-semibold">{step.title}</h3>
                <p className="text-xs text-gray-300">{step.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Use cases */}
      <section className="border-b border-white/5 bg-[#05060A]">
        <div className="mx-auto max-w-6xl px-4 py-14 sm:px-6 lg:px-8 lg:py-16">
          <div className="mb-6">
            <h2 className="text-2xl font-semibold sm:text-3xl">
              Who gets the most from{" "}
              <span className="text-red-400">BillMaster?</span>
            </h2>
            <p className="mt-2 max-w-2xl text-sm text-gray-300">
              Any team that sends more than a few invoices a month can reclaim
              hours of admin time by switching to an automated billing flow.
            </p>
          </div>

          <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
            {useCases.map((u) => (
              <div
                key={u}
                className="rounded-lg border border-white/5 bg-white/5 px-4 py-3 text-xs text-gray-100"
              >
                {u}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="border-b border-white/5 bg-gradient-to-r from-red-600/20 via-red-500/5 to-transparent">
        <div className="mx-auto max-w-6xl px-4 py-14 sm:px-6 lg:px-8 lg:py-16">
          <div className="flex flex-col items-start gap-6 md:flex-row md:items-center md:justify-between">
            <div>
              <h2 className="text-2xl font-semibold sm:text-3xl">
                Want your billing to run on{" "}
                <span className="text-red-400">auto-pilot</span>?
              </h2>
              <p className="mt-2 max-w-xl text-sm text-gray-200">
                Combine BillMaster with Codelite AutoPilot and WebCraft to
                connect your marketing, sales, and payments into one continuous
                flow.
              </p>
            </div>
            <div className="flex gap-3">
              <a
                href="/contact"
                className="rounded-md bg-red-600 px-6 py-3 text-sm font-semibold text-white shadow-lg shadow-red-600/40 hover:bg-red-500"
              >
                Book a quick walkthrough
              </a>
              <a
                href="/autopilot"
                className="rounded-md border border-white/20 px-6 py-3 text-sm font-semibold text-white/80 hover:border-white/40 hover:text-white"
              >
                See AutoPilot →
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="bg-[#05060A]">
        <div className="mx-auto max-w-6xl px-4 py-14 sm:px-6 lg:px-8 lg:py-16">
          <h2 className="text-2xl font-semibold sm:text-3xl">
            BillMaster — frequently asked{" "}
            <span className="text-red-400">questions</span>.
          </h2>
          <div className="mt-6 space-y-4">
            {faqs.map((f) => (
              <div
                key={f.q}
                className="rounded-lg border border-white/5 bg-white/5 p-4"
              >
                <h3 className="text-sm font-semibold text-white">{f.q}</h3>
                <p className="mt-2 text-xs text-gray-300">{f.a}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}