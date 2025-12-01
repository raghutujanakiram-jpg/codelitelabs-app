export default function BillMasterPage() {
  return (
    <main className="min-h-screen bg-[#0d0d0f] text-white">
      <section className="max-w-6xl mx-auto px-6 py-16">
        <h1 className="text-3xl md:text-4xl font-bold mb-4">
          BillMaster — AI Billing & Proposals
        </h1>
        <p className="text-white/60 max-w-2xl mb-10">
          Create invoices, quotes and proposals in seconds. Share via WhatsApp or email,
          track payments and connect with your CRM.
        </p>

        <div className="grid md:grid-cols-2 gap-8 mb-12">
          <div className="rounded-xl border border-white/10 bg-black/40 p-6">
            <h2 className="text-xl font-semibold mb-2 text-red-400">Smart Invoices</h2>
            <p className="text-white/70 text-sm">
              AI fills descriptions and line items based on your service, past invoices
              and region (AED, EUR, INR and more).
            </p>
          </div>

          <div className="rounded-xl border border-white/10 bg-black/40 p-6">
            <h2 className="text-xl font-semibold mb-2 text-red-400">Quotes & Proposals</h2>
            <p className="text-white/70 text-sm">
              Generate professional PDF quotes and proposals in your tone and branding
              — ready to send.
            </p>
          </div>

          <div className="rounded-xl border border-white/10 bg-black/40 p-6">
            <h2 className="text-xl font-semibold mb-2 text-red-400">Reminders & Tracking</h2>
            <p className="text-white/70 text-sm">
              See who has paid, who is late and who needs a reminder; let AI draft polite
              follow-up messages.
            </p>
          </div>

          <div className="rounded-xl border border-white/10 bg-black/40 p-6">
            <h2 className="text-xl font-semibold mb-2 text-red-400">Connected to AutoPilot</h2>
            <p className="text-white/70 text-sm">
              Every invoice is tied to a lead or customer in AutoPilot, so you see the
              full journey: from first message to payment.
            </p>
          </div>
        </div>

        <button className="px-8 py-3 rounded-lg bg-red-600 hover:bg-red-700 text-sm font-semibold">
          Use BillMaster
        </button>
      </section>
    </main>
  );
}