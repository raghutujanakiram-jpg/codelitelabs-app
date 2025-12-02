// app/pricing/page.tsx

export const metadata = {
  title: "Pricing – Codelite Labs",
  description:
    "Simple, transparent pricing for Codelite AutoPilot, WebCraft and BillMaster.",
};

const plans = [
  {
    name: "Starter",
    badge: "Best for solo founders",
    price: "€69",
    period: "/month",
    highlight: false,
    description: "Launch your first automated flows and website with AI help.",
    features: [
      "Up to 2 team members",
      "AutoPilot Lite – 3 active flows",
      "WebCraft – 1 website / landing page",
      "BillMaster – basic invoicing & quotes",
      "Email support",
    ],
  },
  {
    name: "Growth",
    badge: "Most popular",
    price: "€149",
    period: "/month",
    highlight: true,
    description: "For growing businesses that want serious automation.",
    features: [
      "Up to 10 team members",
      "AutoPilot – 15 active flows & campaigns",
      "WebCraft – 5 websites / landing pages",
      "BillMaster – multi-currency invoicing & reminders",
      "Priority email & chat support",
      "Onboarding call with Codelite team",
    ],
  },
  {
    name: "Scale",
    badge: "For agencies & multi-location brands",
    price: "Custom",
    period: "",
    highlight: false,
    description:
      "Tailored stack for agencies, franchises or multi-country operations.",
    features: [
      "Unlimited team members",
      "Custom flow limits & advanced routing",
      "Dedicated infrastructure & SLAs",
      "Custom integrations (ERP, CRM, WhatsApp, etc.)",
      "Account manager + quarterly strategy reviews",
    ],
  },
];

export default function PricingPage() {
  return (
    <main className="min-h-screen bg-black text-white">
      {/* Hero */}
      <section className="relative border-b border-white/5 bg-gradient-to-b from-red-950/60 via-black to-black">
        <div className="mx-auto flex max-w-6xl flex-col items-center px-4 py-16 text-center md:px-6 md:py-20">
          <p className="text-xs font-semibold tracking-[0.23em] text-red-400 uppercase">
            Pricing
          </p>
          <h1 className="mt-3 text-3xl font-bold md:text-4xl">
            One platform. Three products.{" "}
            <span className="text-red-400">Simple pricing.</span>
          </h1>
          <p className="mt-4 max-w-2xl text-sm text-neutral-300 md:text-base">
            Start small, grow fast. Upgrade when you&apos;re ready. No setup fees,
            no long-term contracts — cancel any time.
          </p>

          <div className="mt-6 inline-flex items-center gap-2 rounded-full border border-red-500/40 bg-red-950/40 px-4 py-1 text-xs text-red-200">
            <span className="h-2 w-2 rounded-full bg-emerald-400 animate-pulse" />
            <span>Founding member pricing for UAE &amp; Germany in 2025.</span>
          </div>
        </div>
      </section>

      {/* Plans */}
      <section className="py-16 md:py-20">
        <div className="mx-auto max-w-6xl px-4 md:px-6">
          <div className="grid gap-8 md:grid-cols-3">
            {plans.map((plan) => (
              <div
                key={plan.name}
                className={`relative flex h-full flex-col rounded-2xl border bg-zinc-950/80 p-6 shadow-[0_22px_60px_rgba(0,0,0,0.9)] transition hover:-translate-y-1 hover:border-red-500/60 ${
                  plan.highlight
                    ? "border-red-500/70 bg-gradient-to-b from-red-900/40 via-zinc-950 to-black"
                    : "border-white/8"
                }`}
              >
                {plan.highlight && (
                  <div className="absolute -top-3 right-4 rounded-full border border-amber-400/60 bg-amber-500/10 px-3 py-1 text-[10px] font-semibold uppercase tracking-[0.18em] text-amber-200">
                    Most Popular
                  </div>
                )}

                <div className="mb-4">
                  <p className="text-[11px] font-semibold uppercase tracking-[0.2em] text-red-400">
                    {plan.badge}
                  </p>
                  <h2 className="mt-2 text-xl font-semibold">{plan.name}</h2>
                  <p className="mt-2 text-xs text-neutral-300">
                    {plan.description}
                  </p>
                </div>

                <div className="mb-5 flex items-baseline gap-1">
                  <span className="text-3xl font-bold">{plan.price}</span>
                  {plan.period && (
                    <span className="text-xs text-neutral-400">
                      {plan.period}
                    </span>
                  )}
                </div>

                <ul className="mb-6 flex-1 space-y-2 text-xs text-neutral-200">
                  {plan.features.map((item) => (
                    <li key={item} className="flex gap-2">
                      <span className="mt-[3px] h-1.5 w-1.5 rounded-full bg-red-400" />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>

                <button
                  className={`mt-auto inline-flex w-full items-center justify-center rounded-lg px-3 py-2 text-sm font-semibold transition ${
                    plan.highlight
                      ? "bg-red-500 text-white hover:bg-red-400"
                      : "border border-white/15 bg-black hover:border-red-500/60"
                  }`}
                >
                  {plan.price === "Custom"
                    ? "Talk to sales"
                    : "Start with this plan"}
                </button>

                {plan.highlight && (
                  <p className="mt-2 text-[10px] text-neutral-400">
                    Includes priority onboarding &amp; migration support.
                  </p>
                )}
              </div>
            ))}
          </div>

          {/* Footnote */}
          <div className="mt-10 grid gap-8 md:grid-cols-[2fr,3fr] md:items-start">
            <div className="rounded-2xl border border-white/10 bg-zinc-950/70 p-5 text-xs text-neutral-300">
              <h3 className="text-sm font-semibold text-white">
                Country-specific pricing
              </h3>
              <p className="mt-2">
                Pricing can be billed in AED, EUR, GBP or INR depending on your
                location. Taxes (like VAT) are applied based on your billing
                country.
              </p>
              <p className="mt-2">
                UAE &amp; Germany get early-access discounts for the first 12
                months as we roll out Codelite AutoPilot regionally.
              </p>
            </div>

            <div className="rounded-2xl border border-white/10 bg-zinc-950/70 p-5 text-xs text-neutral-300">
              <h3 className="text-sm font-semibold text-white">
                What&apos;s included in every plan?
              </h3>
              <ul className="mt-2 space-y-1.5">
                <li>• Access to AutoPilot, WebCraft and BillMaster modules</li>
                <li>• Secure cloud hosting &amp; updates</li>
                <li>• Basic AI templates for campaigns, pages and invoices</li>
                <li>• Analytics dashboard for leads, revenue and automations</li>
                <li>• Email support from the Codelite team</li>
              </ul>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}