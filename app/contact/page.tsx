export default function ContactPage() {
  return (
    <main className="min-h-screen bg-[#0d0d0f] text-white">
      <section className="max-w-4xl mx-auto px-6 py-16">
        <h1 className="text-3xl md:text-4xl font-bold mb-4">
          Contact Us
        </h1>
        <p className="text-white/60 mb-8">
          Want a demo, partnership, or have a specific use case in mind?
          Share a few details and we'll get back to you.
        </p>

        <form className="space-y-5 max-w-xl">
          <div>
            <label className="block text-sm text-white/70 mb-1">Name</label>
            <input
              className="w-full bg-black border border-white/15 rounded-lg px-3 py-2 text-sm outline-none focus:border-red-500"
            />
          </div>
          <div>
            <label className="block text-sm text-white/70 mb-1">Email</label>
            <input
              className="w-full bg-black border border-white/15 rounded-lg px-3 py-2 text-sm outline-none focus:border-red-500"
            />
          </div>
          <div>
            <label className="block text-sm text-white/70 mb-1">Country</label>
            <input
              className="w-full bg-black border border-white/15 rounded-lg px-3 py-2 text-sm outline-none focus:border-red-500"
            />
          </div>
          <div>
            <label className="block text-sm text-white/70 mb-1">Message</label>
            <textarea
              rows={4}
              className="w-full bg-black border border-white/15 rounded-lg px-3 py-2 text-sm outline-none focus:border-red-500"
            />
          </div>
          <button className="px-6 py-3 rounded-lg bg-red-600 hover:bg-red-700 text-sm font-semibold">
            Submit
          </button>
        </form>

        <div className="mt-10 text-sm text-white/60">
          <p className="font-semibold text-white mb-1">
            Operator:
          </p>
          <p>UNA Creative Hub (Registered Business)</p>
          <p>Product brand: Codelite Labs / Codelite AutoPilot</p>
        </div>
      </section>
    </main>
  );
}