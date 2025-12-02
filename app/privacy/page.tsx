// app/privacy/page.tsx

import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Privacy Policy – Codelite Labs",
  description:
    "Read the privacy policy for Codelite Labs and UNA Creative Hub – how we collect, use and protect your data.",
};

export default function PrivacyPage() {
  return (
    <main className="min-h-screen bg-black text-white">
      <section className="mx-auto max-w-3xl px-4 py-16 md:py-20 md:px-0">
        <p className="text-xs font-semibold uppercase tracking-[0.25em] text-red-400">
          Legal
        </p>
        <h1 className="mt-3 text-3xl font-bold md:text-4xl">
          Privacy Policy
        </h1>
        <p className="mt-2 text-xs text-neutral-400">
          Last updated: [1st Dec 2025]
        </p>

        <p className="mt-6 text-sm leading-relaxed text-neutral-200">
          This Privacy Policy explains how{" "}
          <span className="font-semibold">Codelite Labs</span> (“we”, “us”,
          “our”) collects, uses and protects your information when you use:
        </p>

        <ul className="mt-3 list-disc space-y-1 pl-6 text-sm text-neutral-200">
          <li>Our website: https://codelitelabs.app</li>
          <li>
            Our products: <span className="font-semibold">AutoPilot</span>,{" "}
            <span className="font-semibold">WebCraft</span>,{" "}
            <span className="font-semibold">BillMaster</span>
          </li>
          <li>
            Any related services operated under Codelite Labs and{" "}
            <span className="font-semibold">UNA Creative Hub</span>.
          </li>
        </ul>

        <p className="mt-4 text-sm text-neutral-200">
          By using our website or services, you agree to the practices described
          in this Privacy Policy.
        </p>

        {/* 1. Who we are */}
        <h2 className="mt-8 text-lg font-semibold text-white">1. Who we are</h2>
        <p className="mt-3 text-sm text-neutral-200">
          Codelite Labs is a product brand focused on AI-powered business
          automation, operated by:
        </p>
        <div className="mt-3 rounded-lg border border-white/10 bg-white/5 p-3 text-sm text-neutral-100">
          <p className="font-semibold">UNA Creative Hub</p>
          <p className="text-xs text-neutral-300">
            (Registered business based in India)
          </p>
          <p className="mt-1 text-xs text-neutral-300">
            [Trade Identification No TG_TL_2024_1106/6603]
          </p>
          <p className="mt-1 text-xs text-neutral-300">
            Email:{" "}
            <span className="font-mono text-neutral-100">
              hello@codelitelabs.app
            </span>
          </p>
        </div>

        {/* 2. Information we collect */}
        <h2 className="mt-8 text-lg font-semibold text-white">
          2. Information we collect
        </h2>

        <h3 className="mt-4 text-sm font-semibold text-neutral-100">
          2.1 Information you provide directly
        </h3>
        <p className="mt-2 text-sm text-neutral-200">
          We may collect information such as:
        </p>
        <ul className="mt-2 list-disc space-y-1 pl-6 text-sm text-neutral-200">
          <li>Name, email address, phone number, company name</li>
          <li>Messages sent through forms, email, WhatsApp or other channels</li>
          <li>Billing and invoicing details (for paying customers)</li>
          <li>
            Any additional information you voluntarily provide during demos,
            onboarding or support
          </li>
        </ul>

        <h3 className="mt-4 text-sm font-semibold text-neutral-100">
          2.2 Usage and technical data
        </h3>
        <p className="mt-2 text-sm text-neutral-200">
          When you visit our website, we may collect:
        </p>
        <ul className="mt-2 list-disc space-y-1 pl-6 text-sm text-neutral-200">
          <li>IP address, browser type, device type</li>
          <li>Pages visited, time spent, referral source</li>
          <li>Basic analytics about how visitors interact with the site</li>
        </ul>

        <h3 className="mt-4 text-sm font-semibold text-neutral-100">
          2.3 Product usage data
        </h3>
        <p className="mt-2 text-sm text-neutral-200">
          When you use AutoPilot, WebCraft or BillMaster, we may collect:
        </p>
        <ul className="mt-2 list-disc space-y-1 pl-6 text-sm text-neutral-200">
          <li>Account configuration and feature usage</li>
          <li>Basic performance metrics (e.g. number of leads, campaigns)</li>
          <li>Error logs and system events to improve stability</li>
        </ul>
        <p className="mt-2 text-sm text-neutral-200">
          We <span className="font-semibold">do not</span> sell your personal
          data.
        </p>

        {/* 3. How we use information */}
        <h2 className="mt-8 text-lg font-semibold text-white">
          3. How we use your information
        </h2>
        <p className="mt-3 text-sm text-neutral-200">
          We use the information we collect to:
        </p>
        <ul className="mt-2 list-disc space-y-1 pl-6 text-sm text-neutral-200">
          <li>Provide, operate and maintain our services</li>
          <li>Set up your account, workspace and integrations</li>
          <li>
            Communicate with you about demos, onboarding, support and updates
          </li>
          <li>Improve our products and user experience</li>
          <li>Send important security, billing and administrative notices</li>
          <li>
            Where allowed, send product news and marketing (you can unsubscribe
            any time)
          </li>
        </ul>

        {/* 4. Legal basis */}
        <h2 className="mt-8 text-lg font-semibold text-white">
          4. Legal basis (for EU / EEA users)
        </h2>
        <p className="mt-3 text-sm text-neutral-200">
          If you are located in the EU/EEA, we process your information based
          on:
        </p>
        <ul className="mt-2 list-disc space-y-1 pl-6 text-sm text-neutral-200">
          <li>Contractual necessity</li>
          <li>Legitimate interests (e.g. improving services, security)</li>
          <li>Consent (for optional features and marketing)</li>
        </ul>

        {/* 5. Cookies */}
        <h2 className="mt-8 text-lg font-semibold text-white">
          5. Cookies and tracking
        </h2>
        <p className="mt-3 text-sm text-neutral-200">
          We may use essential and analytics cookies to operate and improve the
          website. You can control or block cookies via your browser settings.
          If we enable additional analytics or marketing tools, this section
          will be updated.
        </p>

        {/* 6. Data sharing */}
        <h2 className="mt-8 text-lg font-semibold text-white">
          6. Data sharing and third parties
        </h2>
        <p className="mt-3 text-sm text-neutral-200">
          We may share your information with:
        </p>
        <ul className="mt-2 list-disc space-y-1 pl-6 text-sm text-neutral-200">
          <li>Service providers (hosting, email, analytics, payments)</li>
          <li>Payment processors (for handling transactions)</li>
          <li>Professional advisors (e.g. lawyers, accountants)</li>
          <li>
            Authorities, when required by law or to protect our legal rights
          </li>
        </ul>
        <p className="mt-2 text-sm text-neutral-200">
          We do <span className="font-semibold">not</span> sell your personal
          information.
        </p>

        {/* 7. Storage & security */}
        <h2 className="mt-8 text-lg font-semibold text-white">
          7. Data storage and security
        </h2>
        <p className="mt-3 text-sm text-neutral-200">
          Your data may be stored on secure servers in India or other regions,
          depending on our infrastructure providers. We use reasonable technical
          and organisational measures to protect your data, but no system is
          completely risk-free.
        </p>

        {/* 8. Retention */}
        <h2 className="mt-8 text-lg font-semibold text-white">
          8. Data retention
        </h2>
        <p className="mt-3 text-sm text-neutral-200">
          We retain your information for as long as necessary to provide our
          services, comply with legal obligations, resolve disputes and enforce
          our agreements. When data is no longer needed, we may anonymise or
          securely delete it.
        </p>

        {/* 9. Your rights */}
        <h2 className="mt-8 text-lg font-semibold text-white">9. Your rights</h2>
        <p className="mt-3 text-sm text-neutral-200">
          Depending on your jurisdiction, you may have rights to:
        </p>
        <ul className="mt-2 list-disc space-y-1 pl-6 text-sm text-neutral-200">
          <li>Access the personal data we hold about you</li>
          <li>Request corrections to inaccurate data</li>
          <li>Request deletion of your data (subject to legal requirements)</li>
          <li>Object to or restrict certain processing activities</li>
          <li>Withdraw consent for marketing communications</li>
        </ul>
        <p className="mt-2 text-sm text-neutral-200">
          To exercise your rights, contact us at{" "}
          <span className="font-mono">hello@codelitelabs.app</span>.
        </p>

        {/* 10. International transfers */}
        <h2 className="mt-8 text-lg font-semibold text-white">
          10. International transfers
        </h2>
        <p className="mt-3 text-sm text-neutral-200">
          Your information may be transferred and processed in countries
          different from your own. We aim to work with reputable providers and
          apply reasonable safeguards for such transfers.
        </p>

        {/* 11. Third-party links */}
        <h2 className="mt-8 text-lg font-semibold text-white">
          11. Third-party links
        </h2>
        <p className="mt-3 text-sm text-neutral-200">
          Our website or products may contain links to third-party websites or
          services. We are not responsible for their content or privacy
          practices. Please review their policies separately.
        </p>

        {/* 12. Changes */}
        <h2 className="mt-8 text-lg font-semibold text-white">
          12. Changes to this policy
        </h2>
        <p className="mt-3 text-sm text-neutral-200">
          We may update this Privacy Policy from time to time. The “Last
          updated” date will reflect the latest version. For significant
          changes, we may notify you via email or a notice on our website.
        </p>

        {/* 13. Contact */}
        <h2 className="mt-8 text-lg font-semibold text-white">13. Contact us</h2>
        <p className="mt-3 text-sm text-neutral-200">
          For questions or concerns about this Privacy Policy or your data,
          contact:
        </p>
        <div className="mt-3 rounded-lg border border-white/10 bg-white/5 p-3 text-sm text-neutral-100">
          <p>Email: hello@codelitelabs.app</p>
          <p>Phone / WhatsApp: +91 99494 56564</p>
        </div>
      </section>
    </main>
  );
}