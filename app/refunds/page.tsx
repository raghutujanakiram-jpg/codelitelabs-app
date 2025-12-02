// app/refunds/page.tsx

import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Refund & Cancellation Policy – Codelite Labs",
  description:
    "Read the refund and cancellation policy for Codelite Labs subscriptions and services.",
};

export default function RefundsPage() {
  return (
    <main className="min-h-screen bg-black text-white">
      <section className="mx-auto max-w-3xl px-4 py-16 md:py-20 md:px-0">
        <p className="text-xs font-semibold uppercase tracking-[0.25em] text-red-400">
          Legal
        </p>
        <h1 className="mt-3 text-3xl font-bold md:text-4xl">
          Refund &amp; Cancellation Policy
        </h1>
        <p className="mt-2 text-xs text-neutral-400">
          Last updated: [1st Dec 2025]
        </p>

        <p className="mt-6 text-sm leading-relaxed text-neutral-200">
          This Refund &amp; Cancellation Policy explains how refunds,
          cancellations and plan changes work for subscriptions and services
          purchased from <span className="font-semibold">Codelite Labs</span>,
          operated by <span className="font-semibold">UNA Creative Hub</span>.
        </p>

        {/* 1. General principles */}
        <h2 className="mt-8 text-lg font-semibold text-white">
          1. General principles
        </h2>
        <p className="mt-3 text-sm text-neutral-200">
          We aim to be fair and transparent. Our products involve setup, cloud
          infrastructure and ongoing support costs, so we do not offer unlimited
          or unconditional refunds. However, we are open to resolving genuine
          issues on a case-by-case basis.
        </p>

        {/* 2. Free trials */}
        <h2 className="mt-8 text-lg font-semibold text-white">
          2. Free trials and evaluation
        </h2>
        <p className="mt-3 text-sm text-neutral-200">
          Where available, free trials or limited plans are provided so you can
          evaluate whether our products meet your needs. We recommend using the
          trial period to test key features before upgrading to a paid plan.
        </p>

        {/* 3. Subscription billing */}
        <h2 className="mt-8 text-lg font-semibold text-white">
          3. Subscription billing
        </h2>
        <p className="mt-3 text-sm text-neutral-200">
          Subscriptions may be billed monthly, quarterly or yearly, depending on
          the plan you select. Charges are processed automatically using your
          chosen payment method.
        </p>
        <p className="mt-2 text-sm text-neutral-200">
          Invoices may be issued by{" "}
          <span className="font-semibold">UNA Creative Hub</span>, as the
          registered business entity.
        </p>

        {/* 4. Refunds */}
        <h2 className="mt-8 text-lg font-semibold text-white">4. Refunds</h2>
        <p className="mt-3 text-sm text-neutral-200">
          As a general rule, we do{" "}
          <span className="font-semibold">not</span> provide refunds for
          subscription periods that have already started or elapsed, except:
        </p>
        <ul className="mt-2 list-disc space-y-1 pl-6 text-sm text-neutral-200">
          <li>Where required by applicable law</li>
          <li>
            In rare cases of confirmed technical issues on our side that prevent
            meaningful use of the product and cannot be resolved in a reasonable
            timeframe
          </li>
          <li>Duplicate charges or clear billing errors</li>
        </ul>
        <p className="mt-2 text-sm text-neutral-200">
          Any approved refund will typically be processed back to the original
          payment method within a reasonable period (e.g. 7–14 business days,
          subject to bank or payment gateway timelines).
        </p>

        {/* 5. Cancellations */}
        <h2 className="mt-8 text-lg font-semibold text-white">
          5. Cancellations
        </h2>
        <p className="mt-3 text-sm text-neutral-200">
          You can request cancellation of your subscription by:
        </p>
        <ul className="mt-2 list-disc space-y-1 pl-6 text-sm text-neutral-200">
          <li>Using any in-app cancellation option (when available), or</li>
          <li>
            Contacting us via email or support:{" "}
            <span className="font-mono">hello@codelitelabs.app</span>
          </li>
        </ul>
        <p className="mt-2 text-sm text-neutral-200">
          Cancellation stops future renewals but does not automatically refund
          past charges. Unless otherwise agreed, you will retain access to the
          service until the end of the current billing period.
        </p>

        {/* 6. Plan changes */}
        <h2 className="mt-8 text-lg font-semibold text-white">
          6. Plan changes and downgrades
        </h2>
        <p className="mt-3 text-sm text-neutral-200">
          You may be able to change or downgrade your plan at the next billing
          cycle. Downgrading may reduce usage limits, features or access to
          certain modules.
        </p>
        <p className="mt-2 text-sm text-neutral-200">
          For larger accounts, agencies or enterprise customers, plan changes
          may be subject to a separate written agreement.
        </p>

        {/* 7. One-time services */}
        <h2 className="mt-8 text-lg font-semibold text-white">
          7. One-time services, setup &amp; consulting
        </h2>
        <p className="mt-3 text-sm text-neutral-200">
          If we provide one-time services (such as custom integrations,
          consulting, onboarding or strategy sessions), these fees are usually{" "}
          <span className="font-semibold">non-refundable</span> once the work
          has started.
        </p>
        <p className="mt-2 text-sm text-neutral-200">
          If you cancel before work begins, we may offer a partial or full
          refund at our discretion.
        </p>

        {/* 8. Chargebacks */}
        <h2 className="mt-8 text-lg font-semibold text-white">
          8. Chargebacks and disputes
        </h2>
        <p className="mt-3 text-sm text-neutral-200">
          If you believe there is a billing or technical issue, please contact
          us first. We are generally able to resolve most issues quickly.
        </p>
        <p className="mt-2 text-sm text-neutral-200">
          Unjustified chargebacks or payment disputes through banks or payment
          providers may result in temporary suspension or termination of your
          account.
        </p>

        {/* 9. How to request a refund */}
        <h2 className="mt-8 text-lg font-semibold text-white">
          9. How to request a refund or billing review
        </h2>
        <p className="mt-3 text-sm text-neutral-200">
          If you believe you are eligible for a refund or billing correction,
          contact:
        </p>
        <div className="mt-3 rounded-lg border border-white/10 bg-white/5 p-3 text-sm text-neutral-100">
          <p>Email: hello@codelitelabs.app</p>
          <p>Phone / WhatsApp: +91 99494 56564</p>
        </div>
        <p className="mt-3 text-sm text-neutral-200">
          Please include:
        </p>
        <ul className="mt-2 list-disc space-y-1 pl-6 text-sm text-neutral-200">
          <li>Your name and company name</li>
          <li>The email address linked to your account</li>
          <li>Invoice number(s) and payment date(s)</li>
          <li>A brief explanation of the issue</li>
        </ul>

        {/* 10. Changes */}
        <h2 className="mt-8 text-lg font-semibold text-white">
          10. Changes to this policy
        </h2>
        <p className="mt-3 text-sm text-neutral-200">
          We may update this Refund &amp; Cancellation Policy from time to time.
          The “Last updated” date will be revised accordingly. Your continued
          use of the services after changes means you accept the updated policy.
        </p>
      </section>
    </main>
  );
}