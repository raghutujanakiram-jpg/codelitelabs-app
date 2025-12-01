// app/webcraft/page.tsx
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Codelite WebCraft – AI Website Builder | Codelite Labs",
  description:
    "Codelite WebCraft is an AI-powered website builder that creates high-converting, SEO-ready, multilingual sites in minutes.",
};

const features = [
  {
    title: "AI Website Generator",
    description:
      "Describe your business in a few lines and let WebCraft generate a complete website structure with pages, sections, and content.",
  },
  {
    title: "Design Presets & Layouts",
    description:
      "Choose from modern, responsive layouts tailored for SaaS, local businesses, e-commerce, education, healthcare, and more.",
  },
  {
    title: "SEO-Ready from Day One",
    description:
      "Auto-generate meta titles, descriptions, schema, sitemaps, and keyword-aligned content for every page.",
  },
  {
    title: "Instant Copy & Translations",
    description:
      "Generate headlines, body copy, CTAs, and FAQs. Translate your site into multiple languages with one click.",
  },
  {
    title: "Forms & Lead Capture",
    description:
      "Add contact forms, quote forms, appointment forms, and connect them to AutoPilot CRM or your existing tools.",
  },
  {
    title: "No-Code Editing",
    description:
      "Edit text, images, and sections visually. No coding required, but developers can export clean React/Next.js code if needed.",
  },
];

const workflow = [
  {
    step: "01",
    title: "Tell WebCraft About Your Business",
    description:
      "Answer a few guided questions: industry, services, target audience, location, tone of voice, and primary goal.",
  },
  {
    step: "02",
    title: "AI Generates Your Site Blueprint",
    description:
      "WebCraft proposes a site map, layout, sections, and copy for each page. You can accept, tweak, or regenerate.",
  },
  {
    step: "03",
    title: "Customize & Connect",
    description:
      "Adjust colours, fonts, components and connect WhatsApp, email, AutoPilot, or your preferred tools.",
  },
  {
    step: "04",
    title: "Publish in One Click",
    description:
      "Deploy instantly to your custom domain, with SSL, analytics, and SEO essentials ready from day one.",
  },
];

const industries = [
  "Agencies & Freelancers",
  "Local Businesses",
  "Coaches & Trainers",
  "Real Estate & Builders",
  "Clinics & Hospitals",
  "Schools & Institutes",
  "E-commerce & D2C",
  "Startups & SaaS",
];

const faqs = [
  {
    q: "Do I need to know coding to use WebCraft?",
    a: "No. WebCraft is designed for non-technical founders and business owners. You can launch a complete, professional website without writing a single line of code.",
  },
  {
    q: "Can developers export the code?",
    a: "Yes. Developers can export clean, component-based React/Next.js code to extend or integrate into existing projects.",
  },
  {
    q: "Is the website SEO-friendly?",
    a: "Yes. WebCraft auto-generates SEO-ready content, meta tags, structured data, and sitemaps. You can still edit everything manually.",
  },
  {
    q: "Can I connect my own domain?",
    a: "Absolutely. You can connect any domain you own. If you’re already on Codelite hosting, we’ll handle the setup for you.",
  },
  {
    q: "How does WebCraft work with AutoPilot?",
    a: "Every form, CTA, and landing page can send leads directly into Codelite AutoPilot for nurturing, follow-up, and automation.",
  },
];

export default function WebCraftPage() {
  return (
    <main className="min-h-screen bg-[#05060A] text-white">
      {/* Hero */}
      <section className="border-b border-white/5 bg-gradient-to-b from-red-500/5 via-transparent to-transparent">
        <div className="mx-auto flex max-w-6xl flex-col gap-10 px-4 py-16 sm:px-6 lg:flex-row lg:items-center lg:py-20 lg:px-8">
          <div className="flex-1 space-y-6">
            <p className="text-sm font-semibold tracking-[0.25em] text-red-400 uppercase">
              CODELITE WEBCRAFT
            </p>
            <h1 className="text-3xl font-bold leading-tight sm:text-4xl lg:text-5xl">
              AI Website Builder for
              <span className="block bg-gradient-to-r from-red-400 via-red-500 to-red-300 bg-clip-text text-transparent">
                fast-moving businesses.
              </span>
            </h1>
            <p className="max-w-xl text-sm sm:text-base text-gray-300">
              Turn a short business description into a complete, responsive,
              SEO-ready website — in minutes instead of weeks. Built for
              founders, agencies, and small businesses that don&apos;t have time
              to wait.
            </p>
            <div className="flex flex-wrap items-center gap-4">
              <a
                href="/contact"
                className="rounded-md bg-red-600 px-6 py-3 text-sm font-semibold text-white shadow-lg shadow-red-600/30 transition hover:bg-red-500"
              >
                Build My Site
              </a>
              <a
                href="/pricing"
                className="rounded-md border border-white/20 px-6 py-3 text-sm font-semibold text-white/80 hover:border-white/40 hover:text-white"
              >
                View Pricing
              </a>
            </div>
            <p className="text-xs text-gray-400">
              Ideal for: agencies, local businesses, consultants, SaaS, and
              creators.
            </p>
          </div>

          <div className="flex-1">
            <div className="relative rounded-xl border border-white/10 bg-gradient-to-br from-white/5 via-red-500/5 to-transparent p-5 shadow-[0_0_80px_rgba(248,113,113,0.35)]">
              <div className="mb-4 flex items-center justify-between text-xs text-gray-400">
                <span className="rounded-full bg-black/40 px-3 py-1 text-[10px] uppercase tracking-[0.2em]">
                  Live Preview
                </span>
                <span>WebCraft AI Layout Engine</span>
              </div>
              <div className="overflow-hidden rounded-lg border border-white/10 bg-black/60">
                <div className="flex items-center gap-1 border-b border-white/10 bg-white/5 px-3 py-2 text-[10px] text-gray-300">
                  <span className="h-2 w-2 rounded-full bg-red-500" />
                  <span className="h-2 w-2 rounded-full bg-yellow-400" />
                  <span className="h-2 w-2 rounded-full bg-emerald-400" />
                  <span className="ml-2 text-[11px] text-gray-400">
                    yourbusiness.com
                  </span>
                </div>
                <div className="grid gap-3 p-4 sm:grid-cols-5">
                  <div className="space-y-3 sm:col-span-3">
                    <div className="h-3 w-24 rounded bg-red-500/70" />
                    <div className="h-4 w-40 rounded bg-white/80" />
                    <div className="space-y-1.5">
                      <div className="h-2 w-full rounded bg-white/10" />
                      <div className="h-2 w-5/6 rounded bg-white/10" />
                      <div className="h-2 w-2/3 rounded bg-white/10" />
                    </div>
                    <div className="mt-2 flex gap-2">
                      <div className="h-8 w-20 rounded bg-red-600/80" />
                      <div className="h-8 w-20 rounded border border-white/20" />
                    </div>
                  </div>
                  <div className="space-y-2 sm:col-span-2">
                    <div className="h-3 w-24 rounded bg-white/30" />
                    {[1, 2, 3].map((i) => (
                      <div
                        key={i}
                        className="rounded-md border border-white/10 bg-white/5 p-2"
                      >
                        <div className="h-2 w-24 rounded bg-white/30" />
                        <div className="mt-1 h-1.5 w-16 rounded bg-white/10" />
                      </div>
                    ))}
                  </div>
                </div>
              </div>
              <p className="mt-3 text-[11px] text-gray-400">
                WebCraft generates sections, copy, and layouts automatically —
                you just approve and publish.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Features */}
      <section className="border-b border-white/5 bg-[#05060A]">
        <div className="mx-auto max-w-6xl px-4 py-14 sm:px-6 lg:px-8 lg:py-16">
          <div className="mb-8 flex flex-col gap-3 sm:flex-row sm:items-end sm:justify-between">
            <div>
              <h2 className="text-2xl font-semibold sm:text-3xl">
                From idea to{" "}
                <span className="text-red-400">live website</span> in minutes.
              </h2>
              <p className="mt-2 max-w-2xl text-sm text-gray-300">
                WebCraft removes the slow, expensive parts of web projects:
                endless revisions, handing over content, developer delays. AI
                handles the heavy lifting — you stay in control.
              </p>
            </div>
            <p className="text-xs text-gray-400">
              Designed for founders, marketers & agencies.
            </p>
          </div>

          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {features.map((feature) => (
              <div
                key={feature.title}
                className="group rounded-xl border border-white/5 bg-gradient-to-br from-white/5 via-transparent to-transparent p-5 transition hover:border-red-500/60 hover:bg-red-500/5"
              >
                <h3 className="mb-2 text-sm font-semibold text-red-300">
                  {feature.title}
                </h3>
                <p className="text-xs text-gray-300">
                  {feature.description}
                </p>
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
              Your website build,
              <span className="text-red-400"> re-engineered</span>.
            </h2>
            <p className="mt-2 max-w-2xl text-sm text-gray-300">
              No more 4–6 week web projects. WebCraft compresses the entire
              process into one guided AI flow with review checkpoints.
            </p>
          </div>

          <div className="grid gap-6 md:grid-cols-4">
            {workflow.map((step) => (
              <div
                key={step.step}
                className="relative rounded-xl border border-white/5 bg-gradient-to-b from-white/5 via-transparent to-transparent p-4"
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

      {/* Industries */}
      <section className="border-b border-white/5 bg-[#05060A]">
        <div className="mx-auto max-w-6xl px-4 py-14 sm:px-6 lg:px-8 lg:py-16">
          <div className="mb-6 flex flex-col gap-3 md:flex-row md:items-end md:justify-between">
            <div>
              <h2 className="text-2xl font-semibold sm:text-3xl">
                Built for{" "}
                <span className="text-red-400">real businesses</span>, not just
                portfolios.
              </h2>
              <p className="mt-2 max-w-2xl text-sm text-gray-300">
                WebCraft ships with templates, sections, and flows that match
                how different industries actually work.
              </p>
            </div>
          </div>

          <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-4">
            {industries.map((item) => (
              <div
                key={item}
                className="rounded-lg border border-white/5 bg-white/5 px-4 py-3 text-xs text-gray-100"
              >
                {item}
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
                Ready to launch your next website in days, not weeks?
              </h2>
              <p className="mt-2 max-w-xl text-sm text-gray-200">
                Talk to us about your business, and we&apos;ll show you how
                WebCraft and AutoPilot together can power your entire lead
                funnel — from website visit to closed deal.
              </p>
            </div>
            <div className="flex gap-3">
              <a
                href="/contact"
                className="rounded-md bg-red-600 px-6 py-3 text-sm font-semibold text-white shadow-lg shadow-red-600/40 hover:bg-red-500"
              >
                Talk to Codelite
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
            WebCraft — frequently asked{" "}
            <span className="text-red-400">questions</span>.
          </h2>
          <div className="mt-6 space-y-4">
            {faqs.map((item) => (
              <div
                key={item.q}
                className="rounded-lg border border-white/5 bg-white/5 p-4"
              >
                <h3 className="text-sm font-semibold text-white">
                  {item.q}
                </h3>
                <p className="mt-2 text-xs text-gray-300">{item.a}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}