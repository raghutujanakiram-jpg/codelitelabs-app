import Image from "next/image";

export default function ContactPage() {
  return (
    <main className="min-h-screen bg-[#050506] text-white">
    {/* PAGE BODY ONLY – global header already in layout.tsx */}
      <section className="mx-auto max-w-6xl px-4 pt-14 pb-24">
        {/* Title & Subtitle */}
        <div className="mb-12">
          <p className="text-xs uppercase tracking-[0.25em] text-red-500">
            CONTACT
          </p>
          <h1 className="mt-2 text-4xl font-semibold tracking-tight sm:text-5xl">
            Let&apos;s talk about{" "}
            <span className="text-red-500">automation</span>.
          </h1>
          <p className="mt-4 max-w-2xl text-lg text-zinc-300">
            Tell us what you want to automate — leads, sales, marketing,
            workflow, customer engagement. We respond within 24–48 hours with
            ideas and a plan.
          </p>
        </div>

        <div className="grid gap-12 lg:grid-cols-2">
          {/* LEFT PANEL — INFO */}
          <div className="space-y-10">
            <div className="space-y-3">
              <h2 className="text-xl font-semibold">How we help</h2>
              <ul className="ml-4 list-disc space-y-2 text-zinc-400">
                <li>AI Marketing &amp; Sales Automation (AutoPilot)</li>
                <li>AI Website Builder (WebCraft)</li>
                <li>Billing, Invoice &amp; Workflow Automation (BillMaster)</li>
                <li>Industry-specific automation flows</li>
                <li>WhatsApp, Instagram, Google, Email integrations</li>
              </ul>
            </div>

            <div className="rounded-xl border border-zinc-800 bg-zinc-900/40 p-5 shadow-lg shadow-black/20">
              <p className="text-xs uppercase tracking-[0.2em] text-zinc-500">
                Email
              </p>
              <p className="mt-1 text-lg font-medium text-white">
                hello@codelitelabs.app
              </p>
              <p className="mt-1 text-xs text-zinc-400">
                We respond within 24 hours.
              </p>
            </div>

            <div className="rounded-xl border border-zinc-800 bg-zinc-900/40 p-5 shadow-lg shadow-black/20">
              <p className="text-xs uppercase tracking-[0.2em] text-zinc-500">
                WhatsApp / Call
              </p>
              <p className="mt-1 text-lg font-medium text-white">
                +91 XXXXX XXXXX
              </p>
              <p className="mt-1 text-xs text-zinc-400">
                Send a quick intro; we’ll schedule a call.
              </p>
            </div>

            <div className="border border-zinc-800 bg-black/20 p-4 text-xs text-zinc-400 rounded-xl">
              ⚡ Early clients get lifetime locked pricing + priority automation
              workflows.
            </div>
          </div>

          {/* RIGHT PANEL — FORM */}
          <form
            className="space-y-5 rounded-2xl border border-zinc-800 bg-zinc-900/40 p-8 shadow-[0_0_40px_rgba(0,0,0,0.45)] backdrop-blur-md"
            action="https://formspree.io/f/your_id" // TODO: replace with real Formspree ID or API route
            method="POST"
          >
            <div className="grid gap-4 sm:grid-cols-2">
              <div>
                <label className="block text-sm text-zinc-300 mb-1">
                  Full Name
                </label>
                <input
                  name="name"
                  required
                  type="text"
                  placeholder="Your name"
                  className="w-full rounded-lg border border-zinc-700 bg-black/60 px-3 py-2 text-sm text-white focus:border-red-500 focus:ring-1 focus:ring-red-500"
                />
              </div>
              <div>
                <label className="block text-sm text-zinc-300 mb-1">
                  Email
                </label>
                <input
                  name="email"
                  required
                  type="email"
                  placeholder="you@company.com"
                  className="w-full rounded-lg border border-zinc-700 bg-black/60 px-3 py-2 text-sm text-white focus:border-red-500 focus:ring-1 focus:ring-red-500"
                />
              </div>
            </div>

            <div>
              <label className="block text-sm text-zinc-300 mb-1">
                Company Name
              </label>
              <input
                name="company"
                type="text"
                placeholder="Your business"
                className="w-full rounded-lg border border-zinc-700 bg-black/60 px-3 py-2 text-sm text-white focus:border-red-500 focus:ring-1 focus:ring-red-500"
              />
            </div>

            <div>
              <label className="block text-sm text-zinc-300 mb-1">
                What do you want to automate?
              </label>
              <textarea
                name="message"
                rows={4}
                required
                placeholder="Lead follow-ups, WhatsApp automation, web enquiries, proposals, invoices, etc…"
                className="w-full rounded-lg border border-zinc-700 bg-black/60 px-3 py-2 text-sm text-white focus:border-red-500 focus:ring-1 focus:ring-red-500 resize-none"
              />
            </div>

            <div>
              <label className="block text-sm text-zinc-300 mb-1">
                Monthly Budget (Optional)
              </label>
              <select
                name="budget"
                className="w-full rounded-lg border border-zinc-700 bg-black/60 px-3 py-2 text-sm text-white focus:border-red-500 focus:ring-1 focus:ring-red-500"
              >
                <option value="">Select range</option>
                <option value="low">Below ₹25,000 / month</option>
                <option value="mid">₹25,000 – ₹75,000 / month</option>
                <option value="high">₹75,000 – ₹2,00,000 / month</option>
                <option value="very-high">Above ₹2,00,000 / month</option>
              </select>
            </div>

            <button
              type="submit"
              className="w-full mt-4 rounded-lg bg-red-600 py-2.5 text-sm font-semibold shadow-lg shadow-red-600/40 transition hover:bg-red-500"
            >
              Submit Enquiry
            </button>

            <p className="text-[11px] text-zinc-500 leading-relaxed">
              We respect your privacy. Your data is never shared. By submitting,
              you agree to be contacted about Codelite products.
            </p>
          </form>
        </div>
      </section>
    </main>
  );
}