const plans = [
  {
    name: "Free",
    price: "$0 / ₹0",
    desc: "Test Codelite in your business.",
    features: [
      "20 AI generations / month",
      "1 website",
      "10 invoices / month",
      "Basic CRM",
    ],
  },
  {
    name: "Pro",
    price: "$15 / €15 / ₹1,499",
    desc: "For single-location businesses.",
    highlight: true,
    features: [
      "Unlimited AI content",
      "Full CRM + lead scoring",
      "Unlimited invoices",
      "1 AI website",
      "AI insights & assistant",
      "Social media planner",
    ],
  },
  {
    name: "Business",
    price: "$39 / €39 / ₹3,999",
    desc: "For agencies & multi-location brands.",
    features: [
      "Everything in Pro",
      "Multiple locations",
      "Automation builder",
      "Team members",
      "Priority support",
    ],
  },
];

export default function PricingPage() {
  return (
    <main className="min-h-screen bg-[#0d0d0f] text-white">
      <section className="max-w-6xl mx-auto px-6 py-16">
        <h1 className="text-3xl md:text-4xl font-bold mb-3 text-center">
          Simple pricing for serious businesses.
        </h1>
        <p className="text-white/60 text-center max-w-xl mx-auto mb-10">
          Start free. Upgrade only when AutoPilot becomes part of your daily routine.
        </p>

        <div className="grid md:grid-cols-3 gap-8">
          {plans.map((plan) => (
            <div
              key={plan.name}
              className={`rounded-2xl border p-6 flex flex-col ${
                plan.highlight
                  ? "border-red-500 bg-black"
                  : "border-white/10 bg-black/40"
              }`}
            >
              <h2 className="text-xl font-semibold mb-2">{plan.name}</h2>
              <p className="text-red-400 text-2xl font-bold mb-2">{plan.price}</p>
              <p className="text-white/60 text-sm mb-4">{plan.desc}</p>
              <ul className="text-sm text-white/70 space-y-2 mb-6">
                {plan.features.map((f) => (
                  <li key={f}>• {f}</li>
                ))}
              </ul>
              <button className="mt-auto w-full py-3 rounded-lg bg-red-600 hover:bg-red-700 text-sm font-semibold">
                Choose {plan.name}
              </button>
            </div>
          ))}
        </div>
      </section>
    </main>
  );
}