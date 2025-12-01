export default function AboutPage() {
  return (
    <main className="min-h-screen bg-[#0d0d0f] text-white">
      <section className="max-w-4xl mx-auto px-6 py-16">
        <h1 className="text-3xl md:text-4xl font-bold mb-4">
          About Codelite Labs
        </h1>
        <p className="text-white/60 mb-6">
          Codelite Labs, under UNA Creative Hub, is focused on building AI-first
          products that remove the need for large teams in small and mid-sized
          businesses. We combine automation, analytics and AI assistance into one
          simple experience.
        </p>
        <h2 className="text-xl font-semibold mb-3">Our Mission</h2>
        <p className="text-white/60 mb-6">
          To help business owners focus on decisions, not repetitive work. We want
          marketing, CRM, billing and websites to “just happen” in the background
          while founders build relationships and strategy.
        </p>
        <h2 className="text-xl font-semibold mb-3">Who We Serve</h2>
        <ul className="list-disc list-inside text-white/70 space-y-1 mb-6">
          <li>Salons & spas</li>
          <li>Restaurants & cafes</li>
          <li>Clinics & healthcare practices</li>
          <li>Real estate agents & brokers</li>
          <li>Agencies, freelancers & consultants</li>
        </ul>
        <p className="text-white/60">
          Codelite AutoPilot is the first major step. WebCraft and BillMaster
          complete the picture as your full AI Business Operating System.
        </p>
      </section>
    </main>
  );
}