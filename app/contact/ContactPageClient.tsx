"use client";

import { useState } from "react";
import type React from "react";

const countries = [
  { code: "IN", label: "India", flag: "🇮🇳", note: "IST • Hyderabad / Bangalore / Mumbai" },
  { code: "AE", label: "UAE", flag: "🇦🇪", note: "GCC • Dubai / Abu Dhabi" },
  { code: "DE", label: "Germany", flag: "🇩🇪", note: "DACH • Berlin / Munich" },
  { code: "UK", label: "UK", flag: "🇬🇧", note: "UK • London / Manchester" },
];

export default function ContactPageClient() {
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsSubmitting(true);

    // TODO: hook this to your backend / email / CRM later
    setTimeout(() => {
      alert("Thank you! The Codelite Labs team will get back to you within 24–48 hours.");
      setIsSubmitting(false);
      (e.target as HTMLFormElement).reset();
    }, 800);
  };

  return (
    <>
      <section className="mx-auto max-w-6xl px-4 py-12 md:px-6 md:py-16">
        {/* Page header */}
        <header className="max-w-3xl">
          <p className="text-xs font-semibold uppercase tracking-[0.25em] text-red-400">
            Contact · Codelite Labs
          </p>
          <h1 className="mt-4 text-3xl font-semibold tracking-tight text-white md:text-4xl">
            Let&apos;s talk about{" "}
            <span className="text-red-400">automation.</span>
          </h1>
          <p className="mt-4 text-sm text-gray-300 md:text-base">
            Tell us what you want to automate — leads, sales, marketing, workflow,
            customer engagement. We respond within <span className="font-semibold">24–48 hours</span>{" "}
            with ideas and a concrete rollout plan.
          </p>
        </header>

        {/* Country flags / regions */}
        <section className="mt-8 rounded-2xl border border-white/10 bg-white/5 p-4 md:p-5">
          <p className="text-xs font-medium uppercase tracking-[0.2em] text-gray-400">
            We currently support teams in
          </p>
          <div className="mt-3 grid gap-3 sm:grid-cols-4">
            {countries.map((c) => (
              <div
                key={c.code}
                className="rounded-xl border border-white/10 bg-black/40 px-3 py-2 text-xs text-gray-200"
              >
                <div className="flex items-center gap-2">
                  <span className="text-lg">{c.flag}</span>
                  <span className="font-semibold">{c.label}</span>
                </div>
                <p className="mt-1 text-[11px] text-gray-400">{c.note}</p>
              </div>
            ))}
          </div>
        </section>

        {/* Main layout */}
        <div className="mt-10 grid gap-10 md:grid-cols-[minmax(0,1.4fr)_minmax(0,1fr)] md:items-start">
          {/* Form card */}
          <div className="rounded-2xl border border-white/10 bg-black/60 p-5 shadow-[0_0_80px_rgba(248,113,113,0.25)] md:p-6">
            <h2 className="text-lg font-semibold text-white">
              Share a few details about your business
            </h2>
            <p className="mt-2 text-xs text-gray-400 md:text-sm">
              No spam, no agency-style fluff. Just a focused conversation about
              what to automate first — and what impact it can create in 90 days.
            </p>

            <form
              onSubmit={handleSubmit}
              className="mt-6 space-y-4 text-sm text-gray-200"
              noValidate
            >
              <div className="grid gap-4 sm:grid-cols-2">
                <div className="space-y-1.5">
                  <label className="block text-xs font-medium uppercase tracking-wide text-gray-400">
                    Full name
                  </label>
                  <input
                    name="name"
                    required
                    className="w-full rounded-md border border-white/10 bg-black/60 px-3 py-2 text-sm outline-none ring-red-500/40 focus:border-red-400 focus:ring-2"
                    placeholder="e.g. Janakiram Raghutu"
                  />
                </div>
                <div className="space-y-1.5">
                  <label className="block text-xs font-medium uppercase tracking-wide text-gray-400">
                    Work email
                  </label>
                  <input
                    type="email"
                    name="email"
                    required
                    className="w-full rounded-md border border-white/10 bg-black/60 px-3 py-2 text-sm outline-none ring-red-500/40 focus:border-red-400 focus:ring-2"
                    placeholder="you@company.com"
                  />
                </div>
              </div>

              <div className="grid gap-4 sm:grid-cols-2">
                <div className="space-y-1.5">
                  <label className="block text-xs font-medium uppercase tracking-wide text-gray-400">
                    Phone / WhatsApp
                  </label>
                  <input
                    type="tel"
                    name="phone"
                    className="w-full rounded-md border border-white/10 bg-black/60 px-3 py-2 text-sm outline-none ring-red-500/40 focus:border-red-400 focus:ring-2"
                    placeholder="+91 99494 56564"
                    defaultValue="+91 99494 56564"
                  />
                </div>
                <div className="space-y-1.5">
                  <label className="block text-xs font-medium uppercase tracking-wide text-gray-400">
                    Company / Brand
                  </label>
                  <input
                    name="company"
                    className="w-full rounded-md border border-white/10 bg-black/60 px-3 py-2 text-sm outline-none ring-red-500/40 focus:border-red-400 focus:ring-2"
                    placeholder="Your company name"
                  />
                </div>
              </div>

              <div className="grid gap-4 sm:grid-cols-2">
                <div className="space-y-1.5">
                  <label className="block text-xs font-medium uppercase tracking-wide text-gray-400">
                    Country / Region
                  </label>
                  <select
                    name="country"
                    className="w-full rounded-md border border-white/10 bg-black/60 px-3 py-2 text-sm outline-none ring-red-500/40 focus:border-red-400 focus:ring-2"
                    defaultValue="IN"
                  >
                    {countries.map((c) => (
                      <option key={c.code} value={c.code}>
                        {c.flag} {c.label}
                      </option>
                    ))}
                  </select>
                </div>

                <div className="space-y-1.5">
                  <label className="block text-xs font-medium uppercase tracking-wide text-gray-400">
                    Monthly budget (automation & ads)
                  </label>
                  <select
                    name="budget"
                    className="w-full rounded-md border border-white/10 bg-black/60 px-3 py-2 text-sm outline-none ring-red-500/40 focus:border-red-400 focus:ring-2"
                    defaultValue=""
                  >
                    <option value="" disabled>
                      Select a range
                    </option>
                    <option value="starter">₹25K – ₹75K / mo</option>
                    <option value="growth">₹75K – ₹2.5L / mo</option>
                    <option value="scale">₹2.5L – ₹10L / mo</option>
                    <option value="enterprise">₹10L+ / mo</option>
                  </select>
                </div>
              </div>

              <div className="space-y-1.5">
                <label className="block text-xs font-medium uppercase tracking-wide text-gray-400">
                  What do you want to automate first?
                </label>
                <textarea
                  name="message"
                  rows={4}
                  className="w-full rounded-md border border-white/10 bg-black/60 px-3 py-2 text-sm outline-none ring-red-500/40 focus:border-red-400 focus:ring-2"
                  placeholder="Example: Lead follow-up on WhatsApp, invoice reminders, missed call handling, abandoned cart recovery, etc."
                  required
                />
              </div>

              <div className="flex items-start gap-2 text-xs text-gray-400">
                <input
                  id="consent"
                  name="consent"
                  type="checkbox"
                  className="mt-0.5 h-3.5 w-3.5 rounded border border-white/30 bg-black/60 text-red-500 focus:ring-red-500/60"
                  required
                />
                <label htmlFor="consent">
                  I agree to be contacted by Codelite Labs about automation, marketing
                  and related services. No spam, unsubscribe anytime.
                </label>
              </div>

              <div className="flex flex-wrap items-center gap-3 pt-2">
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="inline-flex items-center justify-center rounded-md bg-red-600 px-5 py-2.5 text-sm font-semibold text-white shadow-lg shadow-red-600/40 transition hover:bg-red-500 disabled:cursor-not-allowed disabled:opacity-70"
                >
                  {isSubmitting ? "Sending…" : "Send details to Codelite Labs"}
                </button>
                <p className="text-[11px] text-gray-500">
                  Response time: usually within <span className="font-medium">24 hours</span>.
                </p>
              </div>
            </form>
          </div>

          {/* Right column – contact channels + booking */}
          <div className="space-y-6">
            {/* Direct contact methods */}
            <div className="rounded-2xl border border-white/10 bg-gradient-to-b from-white/5 to-black/60 p-4 md:p-5">
              <h2 className="text-sm font-semibold uppercase tracking-[0.2em] text-gray-400">
                Talk to us directly
              </h2>
              <p className="mt-2 text-xs text-gray-300">
                Prefer talking instead of filling forms? Use any of these channels.
              </p>

              <div className="mt-4 grid gap-3 sm:grid-cols-1">
                {/* Email */}
                <a
                  href="mailto:hello@codelitelabs.app?subject=Automation%20Enquiry"
                  className="group rounded-xl border border-white/10 bg-black/60 p-3 text-xs transition hover:border-red-500/60 hover:bg-red-900/10"
                >
                  <p className="font-semibold text-white">Email</p>
                  <p className="mt-1 text-[11px] text-gray-400">
                    For detailed requirements, documents and RFPs.
                  </p>
                  <p className="mt-2 font-mono text-[11px] text-gray-300 group-hover:text-red-300">
                    hello@codelitelabs.app
                  </p>
                </a>

                {/* WhatsApp */}
                <a
                  href="https://wa.me/919949456564?text=Hi%20Codelite%20Labs%2C%20I%27d%20like%20to%20automate%20my%20business."
                  target="_blank"
                  rel="noreferrer"
                  className="group rounded-xl border border-green-500/40 bg-black/60 p-3 text-xs transition hover:bg-green-900/10"
                >
                  <p className="font-semibold text-white">WhatsApp</p>
                  <p className="mt-1 text-[11px] text-gray-400">
                    Quick questions, voice notes and follow-ups.
                  </p>
                  <p className="mt-2 font-mono text-[11px] text-green-300">
                    +91 99494 56564
                  </p>
                </a>

                {/* Phone */}
                <a
                  href="tel:+919949456564"
                  className="group rounded-xl border border-blue-500/40 bg-black/60 p-3 text-xs transition hover:bg-blue-900/10"
                >
                  <p className="font-semibold text-white">Call</p>
                  <p className="mt-1 text-[11px] text-gray-400">
                    Ideal for a quick 15–30 min exploratory call.
                  </p>
                  <p className="mt-2 font-mono text-[11px] text-blue-200">
                    +91 99494 56564
                  </p>
                </a>
              </div>
            </div>

            {/* Booking / Calendly style */}
            <div className="rounded-2xl border border-red-500/40 bg-gradient-to-r from-red-900/40 via-black to-red-900/40 p-4 md:p-5">
              <p className="text-xs font-semibold uppercase tracking-[0.25em] text-red-300">
                Book a strategy call
              </p>
              <h3 className="mt-2 text-sm font-semibold text-white md:text-base">
                30–45 min automation blueprint for your business
              </h3>
              <p className="mt-2 text-xs text-gray-200">
                We&apos;ll review your current tools, campaigns and workflows, then
                design 2–3 automation flows you can start with immediately.
              </p>

              <ul className="mt-3 space-y-1.5 text-[11px] text-gray-200">
                <li>• Channel mapping (WhatsApp, email, CRM, ads, website)</li>
                <li>• First 90–day automation roadmap</li>
                <li>• Tool stack recommendations &amp; rough budget</li>
              </ul>

              <a
                href="https://calendly.com/your-codelite-username/automation-strategy-call"
                target="_blank"
                rel="noreferrer"
                className="mt-4 inline-flex items-center justify-center rounded-md bg-white px-4 py-2 text-xs font-semibold text-black shadow-md transition hover:bg-gray-100"
              >
                Open booking calendar
              </a>
              <p className="mt-2 text-[11px] text-gray-300">
                Tip: replace the Calendly URL in the code with your real booking
                link when it&apos;s ready.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Floating WhatsApp chat button */}
      <a
        href="https://wa.me/919949456564?text=Hi%20Codelite%20Labs%2C%20I%27m%20on%20your%20website%20and%20want%20to%20talk%20about%20automation."
        target="_blank"
        rel="noreferrer"
        className="fixed bottom-5 right-5 z-50 inline-flex items-center gap-2 rounded-full bg-green-500 px-4 py-2 text-xs font-semibold text-black shadow-[0_0_40px_rgba(34,197,94,0.7)] transition hover:bg-green-400"
      >
        <span className="text-lg">💬</span>
        <span>Chat on WhatsApp</span>
      </a>
    </>
  );
}