// app/autopilot/page.tsx

export default function AutoPilotPage() {
  return (
    <div className="space-y-20 pb-16">
      {/* HERO */}
      <section className="pt-10 text-center md:text-left">
        <p className="text-xs font-semibold uppercase tracking-[0.25em] text-red-500">
          PRODUCT • CODELITE AUTOPILOT
        </p>
        <div className="mt-4 flex flex-col gap-8 md:flex-row md:items-center md:justify-between">
          <div className="max-w-xl">
            <h1 className="text-3xl font-extrabold leading-tight md:text-4xl lg:text-5xl">
              Put your{" "}
              <span className="text-red-500">marketing & sales</span> on
              AutoPilot.
            </h1>
            <p className="mt-4 text-sm text-neutral-300 md:text-base">
              Codelite AutoPilot is your AI marketing, lead and sales engine in
              one place. It creates content, captures leads, follows up,
              sends proposals, tracks payments and reminds customers &mdash;
              automatically.
            </p>
            <div className="mt-6 flex flex-wrap gap-4">
              <a
                href="/contact"
                className="rounded-lg bg-red-600 px-6 py-3 text-sm font-semibold text-white shadow-lg shadow-red-600/40 hover:bg-red-500"
              >
                Book a Free Automation Call
              </a>
              <a
                href="/pricing"
                className="rounded-lg border border-neutral-700 px-6 py-3 text-sm font-semibold text-neutral-100 hover:border-neutral-300"
              >
                View Pricing
              </a>
            </div>
            <p className="mt-3 text-xs text-neutral-500">
              Ideal for agencies, local businesses, real estate, clinics,
              education, salons, retail and more.
            </p>
          </div>

          <div className="w-full max-w-md rounded-2xl border border-red-600/40 bg-gradient-to-br from-red-900/30 via-black to-black p-6 text-left shadow-[0_0_60px_rgba(239,68,68,0.30)]">
            <p className="text-xs font-semibold uppercase tracking-wide text-red-400">
              LIVE AUTOMATION SNAPSHOT
            </p>
            <div className="mt-4 space-y-3 text-sm text-neutral-100">
              <div className="flex items-center justify-between">
                <span className="text-neutral-300">Leads captured today</span>
                <span className="rounded-full bg-neutral-900 px-3 py-1 text-xs font-semibold text-green-400">
                  +27
                </span>
              </div>
              <div className="flex items-center justify-between">
                <span className="text-neutral-300">Automated follow-ups</span>
                <span className="rounded-full bg-neutral-900 px-3 py-1 text-xs font-semibold text-red-400">
                  73 sent
                </span>
              </div>
              <div className="flex items-center justify-between">
                <span className="text-neutral-300">Quotes generated</span>
                <span className="rounded-full bg-neutral-900 px-3 py-1 text-xs font-semibold text-sky-400">
                  12 today
                </span>
              </div>
              <div className="flex items-center justify-between">
                <span className="text-neutral-300">Cold leads recovered</span>
                <span className="rounded-full bg-neutral-900 px-3 py-1 text-xs font-semibold text-amber-300">
                  5 this week
                </span>
              </div>
            </div>
            <p className="mt-5 text-xs text-neutral-400">
              All of this runs without you touching a spreadsheet, calendar or
              WhatsApp broadcast list.
            </p>
          </div>
        </div>
      </section>

      {/* HOW IT WORKS */}
      <section>
        <h2 className="text-center text-2xl font-bold md:text-3xl">
          How <span className="text-red-500">AutoPilot</span> works
        </h2>
        <p className="mx-auto mt-3 max-w-2xl text-center text-sm text-neutral-300">
          We connect your channels, design your flows, and let AI manage the
          heavy lifting &mdash; while you focus on real work and customers.
        </p>

        <div className="mt-10 grid gap-6 md:grid-cols-3">
          {[
            {
              step: "01",
              title: "Connect your channels",
              body: "Website forms, landing pages, WhatsApp, Instagram, Facebook, email & CRM get connected into one pipeline.",
            },
            {
              step: "02",
              title: "Configure smart flows",
              body: "We create automation flows for lead capture, follow-up, reminders, quotes, payments and renewals.",
            },
            {
              step: "03",
              title: "AI runs 24/7",
              body: "AutoPilot sends the right message to the right person at the right time &mdash; no manual chasing.",
            },
          ].map((item) => (
            <div
              key={item.step}
              className="relative overflow-hidden rounded-xl border border-neutral-800 bg-neutral-950/70 p-6"
            >
              <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_top,_rgba(248,113,113,0.12),_transparent)]" />
              <div className="relative">
                <span className="text-xs font-mono font-semibold text-red-400">
                  STEP {item.step}
                </span>
                <h3 className="mt-3 text-sm font-bold text-neutral-50">
                  {item.title}
                </h3>
                <p className="mt-2 text-xs text-neutral-300">{item.body}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* FEATURE GROUPS */}
      <section>
        <h2 className="text-center text-2xl font-bold md:text-3xl">
          One platform. <span className="text-red-500">Four engines.</span>
        </h2>
        <p className="mx-auto mt-3 max-w-2xl text-center text-sm text-neutral-300">
          AutoPilot combines AI content, lead management, sales automation and
          operations into one clean control panel.
        </p>

        <div className="mt-10 grid gap-6 md:grid-cols-2">
          {/* Marketing */}
          <div className="space-y-3 rounded-xl border border-neutral-800 bg-neutral-950/70 p-5">
            <h3 className="text-sm font-semibold text-red-400">
              1. AI Marketing Engine
            </h3>
            <p className="text-xs text-neutral-300">
              No social media manager? No problem. AutoPilot creates and
              schedules your brand content.
            </p>
            <ul className="mt-2 space-y-1.5 text-xs text-neutral-200">
              <li>• Auto-generate posts, reels & captions</li>
              <li>• AI-generated content calendar for your industry</li>
              <li>• Blog & article ideas for SEO</li>
              <li>• Ad copy templates for Meta & Google</li>
              <li>• Multi-language support (per market)</li>
            </ul>
          </div>

          {/* Leads */}
          <div className="space-y-3 rounded-xl border border-neutral-800 bg-neutral-950/70 p-5">
            <h3 className="text-sm font-semibold text-red-400">
              2. Lead Capture & CRM
            </h3>
            <p className="text-xs text-neutral-300">
              Every enquiry from any channel becomes a tracked lead with a clear
              status & owner.
            </p>
            <ul className="mt-2 space-y-1.5 text-xs text-neutral-200">
              <li>• Unified inbox for forms, WhatsApp & email</li>
              <li>• Auto-tagging: hot, warm, cold</li>
              <li>• Assign leads to team members automatically</li>
              <li>• Follow-up reminders with pre-written messages</li>
              <li>• Simple pipeline view (New → In Talk → Won/Lost)</li>
            </ul>
          </div>

          {/* Sales */}
          <div className="space-y-3 rounded-xl border border-neutral-800 bg-neutral-950/70 p-5">
            <h3 className="text-sm font-semibold text-red-400">
              3. Sales & Payment Automation
            </h3>
            <p className="text-xs text-neutral-300">
              Close deals faster with auto-generated quotes, proposals and
              payment links.
            </p>
            <ul className="mt-2 space-y-1.5 text-xs text-neutral-200">
              <li>• Quote templates for your services/products</li>
              <li>• Auto-generate PDF proposals from lead data</li>
              <li>• Send payment links & reminders automatically</li>
              <li>• Track who opened, clicked and paid</li>
              <li>• Renewal & subscription alerts</li>
            </ul>
          </div>

          {/* Ops */}
          <div className="space-y-3 rounded-xl border border-neutral-800 bg-neutral-950/70 p-5">
            <h3 className="text-sm font-semibold text-red-400">
              4. Operations & Insights
            </h3>
            <p className="text-xs text-neutral-300">
              See what&apos;s working, what&apos;s stuck and where you&apos;re
              losing money &mdash; in simple dashboards.
            </p>
            <ul className="mt-2 space-y-1.5 text-xs text-neutral-200">
              <li>• Daily snapshot: new leads, revenue, tasks</li>
              <li>• Campaign performance (per channel & country)</li>
              <li>• Top converting messages & templates</li>
              <li>• Team performance overview</li>
              <li>• Export to Excel or connect via API</li>
            </ul>
          </div>
        </div>
      </section>

      {/* INDUSTRY FLOWS */}
      <section>
        <h2 className="text-center text-2xl font-bold md:text-3xl">
          Pre-built flows for your <span className="text-red-500">industry</span>
        </h2>
        <p className="mx-auto mt-3 max-w-2xl text-center text-sm text-neutral-300">
          Instead of starting from a blank screen, you choose your industry and
          country. AutoPilot loads the best-practice flows that we customise to
          your business.
        </p>

        <div className="mt-8 grid gap-4 text-xs text-neutral-100 md:grid-cols-3">
          <div className="rounded-xl border border-neutral-800 bg-neutral-950/70 p-4">
            <h3 className="text-sm font-semibold text-red-400">
              Real Estate / Property
            </h3>
            <ul className="mt-2 space-y-1 text-neutral-300">
              <li>• Property inquiry → auto-brochure send</li>
              <li>• Site visit reminders & follow-ups</li>
              <li>• Post-visit nurture & offer triggers</li>
            </ul>
          </div>

          <div className="rounded-xl border border-neutral-800 bg-neutral-950/70 p-4">
            <h3 className="text-sm font-semibold text-red-400">
              Clinics / Healthcare
            </h3>
            <ul className="mt-2 space-y-1 text-neutral-300">
              <li>• Appointment confirmation & reminders</li>
              <li>• Follow-up for tests, medicines & reviews</li>
              <li>• Recall campaigns for inactive patients</li>
            </ul>
          </div>

          <div className="rounded-xl border border-neutral-800 bg-neutral-950/70 p-4">
            <h3 className="text-sm font-semibold text-red-400">
              Education / Coaching
            </h3>
            <ul className="mt-2 space-y-1 text-neutral-300">
              <li>• Demo class & counselling flows</li>
              <li>• Fee reminder sequences</li>
              <li>• Parent / student engagement campaigns</li>
            </ul>
          </div>

          <div className="rounded-xl border border-neutral-800 bg-neutral-950/70 p-4">
            <h3 className="text-sm font-semibold text-red-400">
              Salons / Beauty / Wellness
            </h3>
            <ul className="mt-2 space-y-1 text-neutral-300">
              <li>• Booking bot & confirmations</li>
              <li>• No-show recovery messages</li>
              <li>• Festival & membership offers automation</li>
            </ul>
          </div>

          <div className="rounded-xl border border-neutral-800 bg-neutral-950/70 p-4">
            <h3 className="text-sm font-semibold text-red-400">
              Retail / E-commerce
            </h3>
            <ul className="mt-2 space-y-1 text-neutral-300">
              <li>• Abandoned cart rescue flows</li>
              <li>• Order updates & review requests</li>
              <li>• VIP / loyalty offers</li>
            </ul>
          </div>

          <div className="rounded-xl border border-neutral-800 bg-neutral-950/70 p-4">
            <h3 className="text-sm font-semibold text-red-400">
              Agencies & Service Businesses
            </h3>
            <ul className="mt-2 space-y-1 text-neutral-300">
              <li>• Lead intake & qualification</li>
              <li>• Proposal + follow-up automation</li>
              <li>• Client onboarding steps & reminders</li>
            </ul>
          </div>
        </div>
      </section>

      {/* WHAT AUTOPILOT REPLACES */}
      <section className="rounded-2xl border border-neutral-800 bg-neutral-950/70 p-6 md:p-8">
        <h2 className="text-xl font-bold md:text-2xl">
          What <span className="text-red-500">AutoPilot</span> replaces
        </h2>
        <p className="mt-3 max-w-2xl text-sm text-neutral-300">
          Most small businesses can&apos;t afford a full marketing and sales
          team. AutoPilot gives you a light-weight version of all of them in one
          subscription.
        </p>

        <div className="mt-6 grid gap-4 text-xs text-neutral-200 md:grid-cols-4">
          <div>• Social media manager</div>
          <div>• Content writer</div>
          <div>• Campaign executor</div>
          <div>• CRM admin</div>
          <div>• Follow-up executive</div>
          <div>• Proposal maker</div>
          <div>• Reminder person</div>
          <div>• Basic data analyst</div>
        </div>
        <p className="mt-4 text-xs text-neutral-500">
          You still control the strategy and approvals. AutoPilot handles the
          repetitive, time-consuming tasks.
        </p>
      </section>

      {/* CTA + FAQ PREVIEW */}
      <section className="grid gap-10 md:grid-cols-[2fr,3fr] md:items-start">
        {/* CTA */}
        <div className="rounded-2xl border border-red-600/40 bg-gradient-to-br from-red-900/40 via-black to-black p-6">
          <h2 className="text-xl font-bold text-white md:text-2xl">
            Let&apos;s design your first{" "}
            <span className="text-red-400">AutoPilot flow</span>.
          </h2>
          <p className="mt-3 text-sm text-neutral-200">
            Share your country, industry and current tools. We&apos;ll suggest a
            starting setup and timeline.
          </p>
          <ul className="mt-4 space-y-2 text-xs text-neutral-100">
            <li>• 30–45 min strategy call</li>
            <li>• Identify 2–3 flows to automate first</li>
            <li>• Clear plan for rollout & responsibilities</li>
          </ul>
          <a
            href="/contact"
            className="mt-6 inline-flex rounded-lg bg-white px-6 py-3 text-sm font-semibold text-black hover:bg-neutral-100"
          >
            Talk to Codelite team →
          </a>
        </div>

        {/* FAQ PREVIEW */}
        <div>
          <h3 className="text-sm font-semibold text-neutral-100">
            Common questions
          </h3>
          <div className="mt-4 space-y-4 text-xs text-neutral-300">
            <div>
              <p className="font-semibold text-neutral-100">
                Do I need a developer to use AutoPilot?
              </p>
              <p className="mt-1">
                No. We set up the technical integrations for you. Day-to-day,
                you use a simple web dashboard to see leads, campaigns and
                tasks.
              </p>
            </div>
            <div>
              <p className="font-semibold text-neutral-100">
                Can this work in UAE / Germany / other countries?
              </p>
              <p className="mt-1">
                Yes. We tune flows and channels for each country&apos;s preferred
                tools and communication style. Localisation layers will expand
                over time.
              </p>
            </div>
            <div>
              <p className="font-semibold text-neutral-100">
                Is this a CRM or a marketing tool?
              </p>
              <p className="mt-1">
                It&apos;s both. AutoPilot focuses on the journey from first
                contact → follow-up → quote → payment, instead of just storing
                contact data.
              </p>
            </div>
            <div>
              <p className="font-semibold text-neutral-100">
                Can I connect my existing tools?
              </p>
              <p className="mt-1">
                We support integrations via API, webhooks and native connectors
                for popular platforms. Custom integrations are possible for
                agency / enterprise plans.
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}