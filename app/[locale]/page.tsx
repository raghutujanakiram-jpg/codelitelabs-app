import { useTranslations } from "next-intl";

export default function HomePage() {
  const t = useTranslations();

  return (
    <main className="min-h-screen bg-[#05060A] text-white">
      {/* HERO */}
      <section className="border-b border-white/5 bg-gradient-to-b from-red-600/20 via-transparent to-transparent">
        <div className="mx-auto flex max-w-6xl flex-col gap-10 px-4 py-16 sm:px-6 lg:flex-row lg:items-center lg:py-20 lg:px-8">
          {/* Left */}
          <div className="flex-1 space-y-6">
            <p className="text-xs font-semibold uppercase tracking-[0.25em] text-red-300">
              {t("home.tagline")}
            </p>
            <h1 className="text-3xl font-bold leading-tight sm:text-4xl lg:text-5xl">
              {t("home.title")}
            </h1>
            <p className="max-w-xl text-sm sm:text-base text-gray-300">
              {t("home.description")}
            </p>

            <div className="flex flex-wrap gap-4">
              <a
                href="/autopilot"
                className="rounded-md bg-red-600 px-6 py-3 text-sm font-semibold text-white shadow-lg shadow-red-600/40 transition hover:bg-red-500"
              >
                {t("home.exploreCTA")}
              </a>
              <a
                href="/contact"
                className="rounded-md border border-white/20 px-6 py-3 text-sm font-semibold text-white/80 hover:border-white/40 hover:text-white"
              >
                {t("home.talkCTA")}
              </a>
            </div>

            <div className="flex flex-wrap gap-6 text-[11px] text-gray-400">
              <div>
                <span className="font-semibold text-white">{t("home.features1")}</span>
              </div>
              <div>
                <span className="font-semibold text-white">{t("home.features2")}</span>
              </div>
            </div>
          </div>

          {/* Right – visual panel */}
          <div className="flex-1">
            <div className="relative rounded-2xl border border-white/10 bg-gradient-to-br from-white/10 via-black to-black p-5 shadow-[0_0_80px_rgba(248,113,113,0.45)]">
              <div className="mb-4 flex items-center justify-between text-[11px] text-gray-300">
                <span className="rounded-full bg-black/60 px-3 py-1 text-[10px] uppercase tracking-[0.2em] text-gray-300">
                  {t("home.liveSnapshot")}
                </span>
                <span className="text-gray-400">{t("home.commandView")}</span>
              </div>

              <div className="grid gap-4 md:grid-cols-3">
                {/* AutoPilot */}
                <div className="rounded-xl border border-white/10 bg-black/70 p-4">
                  <p className="text-[11px] font-semibold text-red-300">
                    {t("home.autopilotRunning")}
                  </p>
                  <p className="mt-1 text-[11px] text-gray-300">
                    {t("home.autopilotStatus")}
                  </p>
                  <div className="mt-3 space-y-1.5 text-[10px] text-gray-400">
                    {t("home.autopilotStats").split("; ").map((stat, i) => (
                      <p key={i}>• {stat}</p>
                    ))}
                  </div>
                </div>

                {/* WebCraft */}
                <div className="rounded-xl border border-white/10 bg-black/70 p-4">
                  <p className="text-[11px] font-semibold text-red-300">
                    {t("home.webcraftRunning")}
                  </p>
                  <p className="mt-1 text-[11px] text-gray-300">
                    {t("home.webcraftStatus")}
                  </p>
                  <div className="mt-3 space-y-1.5 text-[10px] text-gray-400">
                    {t("home.webcraftStats").split("; ").map((stat, i) => (
                      <p key={i}>• {stat}</p>
                    ))}
                  </div>
                </div>

                {/* BillMaster */}
                <div className="rounded-xl border border-white/10 bg-black/70 p-4">
                  <p className="text-[11px] font-semibold text-red-300">
                    {t("home.billmasterRunning")}
                  </p>
                  <p className="mt-1 text-[11px] text-gray-300">
                    {t("home.billmasterStatus")}
                  </p>
                  <div className="mt-3 space-y-1.5 text-[10px] text-gray-400">
                    {t("home.billmasterStats").split("; ").map((stat, i) => (
                      <p key={i}>• {stat}</p>
                    ))}
                  </div>
                </div>
              </div>

              <p className="mt-4 text-[11px] text-gray-400">
                {t("home.stackDescription")}
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* WHY CODELITE (summary) */}
      <section className="border-b border-white/5 bg-[#05060A]">
        <div className="mx-auto max-w-6xl px-4 py-14 sm:px-6 lg:px-8 lg:py-16">
          <div className="mb-8 text-center">
            <p className="text-xs font-semibold uppercase tracking-[0.25em] text-red-300">
              {t("home.whyTitle")}
            </p>
            <h2 className="mt-3 text-2xl font-semibold sm:text-3xl">
              {t("home.whyHeading")}
            </h2>
            <p className="mt-3 max-w-2xl mx-auto text-sm text-gray-300">
              {t("home.whyDescription")}
            </p>
          </div>

          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            <div className="rounded-xl border border-white/5 bg-white/5 p-5">
              <h3 className="text-sm font-semibold text-red-300">
                {t("home.aiMarketing")}
              </h3>
              <p className="mt-2 text-xs text-gray-200">
                {t("home.aiMarketingDesc")}
              </p>
            </div>
            <div className="rounded-xl border border-white/5 bg-white/5 p-5">
              <h3 className="text-sm font-semibold text-red-300">
                {t("home.leadSales")}
              </h3>
              <p className="mt-2 text-xs text-gray-200">
                {t("home.leadSalesDesc")}
              </p>
            </div>
            <div className="rounded-xl border border-white/5 bg-white/5 p-5">
              <h3 className="text-sm font-semibold text-red-300">
                {t("home.billing")}
              </h3>
              <p className="mt-2 text-xs text-gray-200">
                {t("home.billingDesc")}
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* PRODUCT STRIP */}
      <section className="border-b border-white/5 bg-[#05060A]">
        <div className="mx-auto max-w-6xl px-4 py-14 sm:px-6 lg:px-8 lg:py-16">
          <div className="mb-6 flex flex-col gap-2 sm:flex-row sm:items-end sm:justify-between">
            <div>
              <h2 className="text-2xl font-semibold sm:text-3xl">
                {t("home.productStripHeading")}
              </h2>
              <p className="mt-2 max-w-xl text-sm text-gray-300">
                {t("home.productStripDescription")}
              </p>
            </div>
          </div>

          <div className="grid gap-6 md:grid-cols-3">
            {/* AutoPilot */}
            <a
              href="/autopilot"
              className="group flex flex-col justify-between rounded-xl border border-white/5 bg-gradient-to-b from-red-500/10 via-transparent to-transparent p-5 transition hover:border-red-500/70 hover:bg-red-500/10"
            >
              <div>
                <p className="text-xs font-semibold uppercase tracking-[0.18em] text-red-300">
                  {t("home.autopilotCard")}
                </p>
                <h3 className="mt-2 text-lg font-semibold">{t("home.autopilotCardTitle")}</h3>
                <p className="mt-2 text-xs text-gray-200">
                  {t("home.autopilotCardDesc")}
                </p>
              </div>
              <span className="mt-4 text-xs font-semibold text-red-300 group-hover:underline">
                {t("home.viewAutopilot")}
              </span>
            </a>

            {/* WebCraft */}
            <a
              href="/webcraft"
              className="group flex flex-col justify-between rounded-xl border border-white/5 bg-gradient-to-b from-white/10 via-transparent to-transparent p-5 transition hover:border-red-500/70 hover:bg-red-500/5"
            >
              <div>
                <p className="text-xs font-semibold uppercase tracking-[0.18em] text-red-300">
                  {t("home.webcraftCard")}
                </p>
                <h3 className="mt-2 text-lg font-semibold">{t("home.webcraftCardTitle")}</h3>
                <p className="mt-2 text-xs text-gray-200">
                  {t("home.webcraftCardDesc")}
                </p>
              </div>
              <span className="mt-4 text-xs font-semibold text-red-300 group-hover:underline">
                {t("home.viewWebcraft")}
              </span>
            </a>

            {/* BillMaster */}
            <a
              href="/billmaster"
              className="group flex flex-col justify-between rounded-xl border border-white/5 bg-gradient-to-b from-white/10 via-transparent to-transparent p-5 transition hover:border-red-500/70 hover:bg-red-500/5"
            >
              <div>
                <p className="text-xs font-semibold uppercase tracking-[0.18em] text-red-300">
                  {t("home.billmasterCard")}
                </p>
                <h3 className="mt-2 text-lg font-semibold">{t("home.billmasterCardTitle")}</h3>
                <p className="mt-2 text-xs text-gray-200">
                  {t("home.billmasterCardDesc")}
                </p>
              </div>
              <span className="mt-4 text-xs font-semibold text-red-300 group-hover:underline">
                {t("home.viewBillmaster")}
              </span>
            </a>
          </div>
        </div>
      </section>

      {/* REGIONS STRIP */}
      <section className="border-b border-white/5 bg-[#05060A]">
        <div className="mx-auto max-w-6xl px-4 py-12 sm:px-6 lg:px-8">
          <div className="flex flex-col gap-4 md:flex-row md:items-center md:justify-between">
            <div>
              <h2 className="text-lg font-semibold sm:text-xl">
                {t("home.regionsHeading")}
              </h2>
              <p className="mt-1 max-w-xl text-xs text-gray-300">
                {t("home.regionsDescription")}
              </p>
            </div>
            <div className="flex flex-wrap gap-3 text-xs">
              <a
                href="/countries/uae"
                className="rounded-full border border-white/20 px-4 py-2 text-white/80 hover:border-red-500/60 hover:text-white"
              >
                {t("home.uaePlaybook")}
              </a>
              <a
                href="/countries/germany"
                className="rounded-full border border-white/20 px-4 py-2 text-white/80 hover:border-red-500/60 hover:text-white"
              >
                {t("home.germanyPlaybook")}
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* FINAL CTA */}
      <section className="bg-gradient-to-r from-red-600/30 via-red-500/10 to-transparent">
        <div className="mx-auto max-w-6xl px-4 py-16 sm:px-6 lg:px-8 lg:py-20">
          <div className="flex flex-col gap-6 md:flex-row md:items-center md:justify-between">
            <div>
              <h2 className="text-2xl font-semibold sm:text-3xl">
                {t("home.finalHeading")}
              </h2>
              <p className="mt-2 max-w-xl text-sm text-gray-100">
                {t("home.finalDescription")}
              </p>
            </div>
            <div className="flex flex-wrap gap-3">
              <a
                href="/contact"
                className="rounded-md bg-white px-6 py-3 text-sm font-semibold text-black hover:bg-gray-100"
              >
                {t("home.scheduleCall")}
              </a>
              <a
                href="/pricing"
                className="rounded-md border border-white/30 px-6 py-3 text-sm font-semibold text-white hover:border-white"
              >
                {t("home.viewPricing")}
              </a>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
