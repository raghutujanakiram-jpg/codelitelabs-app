// app/terms/page.tsx

import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Terms of Use – Codelite Labs",
  description:
    "Read the Terms of Use for Codelite Labs, AutoPilot, WebCraft and BillMaster.",
};

export default function TermsPage() {
  return (
    <main className="min-h-screen bg-black text-white">
      <section className="mx-auto max-w-3xl px-4 py-16 md:py-20 md:px-0">
        <p className="text-xs font-semibold uppercase tracking-[0.25em] text-red-400">
          Legal
        </p>
        <h1 className="mt-3 text-3xl font-bold md:text-4xl">Terms of Use</h1>
        <p className="mt-2 text-xs text-neutral-400">
          Last updated: [1st Dec 2025]
        </p>

        <p className="mt-6 text-sm leading-relaxed text-neutral-200">
          These Terms of Use (“Terms”) govern your access to and use of:
        </p>
        <ul className="mt-3 list-disc space-y-1 pl-6 text-sm text-neutral-200">
          <li>The website https://codelitelabs.app</li>
          <li>
            The products{" "}
            <span className="font-semibold">AutoPilot, WebCraft, BillMaster</span>
          </li>
          <li>Any related services operated by Codelite Labs / UNA Creative Hub</li>
        </ul>
        <p className="mt-4 text-sm text-neutral-200">
          By using our website or services, you agree to these Terms. If you do
          not agree, please do not use our services.
        </p>

        {/* 1. Definitions */}
        <h2 className="mt-8 text-lg font-semibold text-white">1. Definitions</h2>
        <p className="mt-3 text-sm text-neutral-200">
          In these Terms:
        </p>
        <ul className="mt-2 list-disc space-y-1 pl-6 text-sm text-neutral-200">
          <li>
            “We”, “us”, “our” – refers to Codelite Labs / UNA Creative Hub.
          </li>
          <li>
            “You”, “Customer” – refers to the person or entity using our services.
          </li>
          <li>
            “Services” – refers to our website, products (AutoPilot, WebCraft,
            BillMaster) and any related tools or APIs.
          </li>
        </ul>

        {/* 2. Eligibility */}
        <h2 className="mt-8 text-lg font-semibold text-white">
          2. Eligibility
        </h2>
        <p className="mt-3 text-sm text-neutral-200">
          By using our services, you represent that:
        </p>
        <ul className="mt-2 list-disc space-y-1 pl-6 text-sm text-neutral-200">
          <li>You are at least 18 years old (or the age of majority in your region).</li>
          <li>
            You have the authority to enter into contracts if you are using the
            services on behalf of a business or organisation.
          </li>
        </ul>

        {/* 3. Accounts */}
        <h2 className="mt-8 text-lg font-semibold text-white">
          3. Accounts and access
        </h2>
        <p className="mt-3 text-sm text-neutral-200">
          Some features may require an account. You are responsible for:
        </p>
        <ul className="mt-2 list-disc space-y-1 pl-6 text-sm text-neutral-200">
          <li>Providing accurate and up-to-date information</li>
          <li>Maintaining the confidentiality of your login credentials</li>
          <li>All activities that occur under your account</li>
        </ul>
        <p className="mt-2 text-sm text-neutral-200">
          If you suspect unauthorised access, contact us immediately.
        </p>

        {/* 4. Use of services */}
        <h2 className="mt-8 text-lg font-semibold text-white">
          4. Use of the services
        </h2>
        <p className="mt-3 text-sm text-neutral-200">
          You agree to use the services:
        </p>
        <ul className="mt-2 list-disc space-y-1 pl-6 text-sm text-neutral-200">
          <li>Only for lawful purposes</li>
          <li>In compliance with all applicable laws and regulations</li>
          <li>
            In a manner that does not infringe the rights of others or disrupt
            the platform
          </li>
        </ul>
        <p className="mt-2 text-sm text-neutral-200">
          You agree <span className="font-semibold">not</span> to:
        </p>
        <ul className="mt-2 list-disc space-y-1 pl-6 text-sm text-neutral-200">
          <li>Use the services for spam, fraud, scams or illegal activities</li>
          <li>Attempt to reverse-engineer or exploit the platform</li>
          <li>Interfere with servers, networks or security-related features</li>
        </ul>

        {/* 5. Billing */}
        <h2 className="mt-8 text-lg font-semibold text-white">
          5. Plans, billing and payments
        </h2>
        <p className="mt-3 text-sm text-neutral-200">
          Some features or products may require a paid subscription or one-time
          payment. Pricing, billing cycles and plan details will be described on
          our Pricing page or in a separate agreement.
        </p>
        <p className="mt-2 text-sm text-neutral-200">
          By subscribing, you authorise us and our payment processors to charge
          your chosen payment method for recurring fees, where applicable.
        </p>
        <p className="mt-2 text-sm text-neutral-200">
          Refunds and cancellations are governed by our{" "}
          <span className="font-semibold">Refund &amp; Cancellation Policy</span>.
        </p>

        {/* 6. IP */}
        <h2 className="mt-8 text-lg font-semibold text-white">
          6. Intellectual property
        </h2>
        <p className="mt-3 text-sm text-neutral-200">
          All software, design, content, branding, logos and other materials in
          the services are owned or licensed by Codelite Labs / UNA Creative Hub.
        </p>
        <p className="mt-2 text-sm text-neutral-200">
          We grant you a limited, non-exclusive, non-transferable license to use
          the services in accordance with these Terms. You may not copy, modify,
          distribute or create derivative works based on our services without
          written consent.
        </p>
        <p className="mt-2 text-sm text-neutral-200">
          You retain ownership of your own content and data that you input into
          the services.
        </p>

        {/* 7. Data & confidentiality */}
        <h2 className="mt-8 text-lg font-semibold text-white">
          7. Customer data and confidentiality
        </h2>
        <p className="mt-3 text-sm text-neutral-200">
          You own your data. We process it only to provide and improve the
          services, or as required by law. We will take reasonable steps to keep
          your data secure and confidential, consistent with our Privacy Policy.
        </p>

        {/* 8. Third-party services */}
        <h2 className="mt-8 text-lg font-semibold text-white">
          8. Third-party services and integrations
        </h2>
        <p className="mt-3 text-sm text-neutral-200">
          Some features may integrate with third-party platforms (e.g. email
          tools, CRMs, payment gateways, messaging services). Your use of those
          services is subject to their own terms and privacy policies.
        </p>
        <p className="mt-2 text-sm text-neutral-200">
          We are not responsible for issues arising from third-party services.
        </p>

        {/* 9. Availability */}
        <h2 className="mt-8 text-lg font-semibold text-white">
          9. Availability and changes
        </h2>
        <p className="mt-3 text-sm text-neutral-200">
          We aim to keep the services reliable, but we do not guarantee
          uninterrupted or error-free operation. We may update, modify or
          discontinue features from time to time.
        </p>

        {/* 10. Disclaimers */}
        <h2 className="mt-8 text-lg font-semibold text-white">
          10. Disclaimers
        </h2>
        <p className="mt-3 text-sm text-neutral-200">
          To the maximum extent permitted by law, the services are provided
          “as is” and “as available”, without warranties of any kind, whether
          express or implied.
        </p>
        <p className="mt-2 text-sm text-neutral-200">
          We do not guarantee specific results, revenue, or performance from
          using the services. You are responsible for your own business
          decisions.
        </p>

        {/* 11. Limitation of liability */}
        <h2 className="mt-8 text-lg font-semibold text-white">
          11. Limitation of liability
        </h2>
        <p className="mt-3 text-sm text-neutral-200">
          To the maximum extent permitted by law, we will not be liable for any
          indirect, incidental, special or consequential damages, including
          lost profits, loss of data or business interruption.
        </p>
        <p className="mt-2 text-sm text-neutral-200">
          Our total liability for any claim related to the services will not
          exceed the amount you paid us in the{" "}
          <span className="font-semibold">3 months</span> prior to the event
          giving rise to the claim, unless otherwise required by law.
        </p>

        {/* 12. Indemnity */}
        <h2 className="mt-8 text-lg font-semibold text-white">
          12. Indemnity
        </h2>
        <p className="mt-3 text-sm text-neutral-200">
          You agree to indemnify and hold harmless Codelite Labs / UNA Creative
          Hub from any claims, damages or losses arising from your use of the
          services, violation of these Terms, or violation of any rights of
          others.
        </p>

        {/* 13. Termination */}
        <h2 className="mt-8 text-lg font-semibold text-white">
          13. Termination
        </h2>
        <p className="mt-3 text-sm text-neutral-200">
          We may suspend or terminate your access to the services if you breach
          these Terms, misuse the platform, or if we are required to do so by
          law or by a third-party provider.
        </p>
        <p className="mt-2 text-sm text-neutral-200">
          You may stop using the services at any time. Certain obligations (such
          as payment of outstanding fees) may survive termination.
        </p>

        {/* 14. Governing law */}
        <h2 className="mt-8 text-lg font-semibold text-white">
          14. Governing law &amp; jurisdiction
        </h2>
        <p className="mt-3 text-sm text-neutral-200">
          These Terms are governed by the laws of India (and, more specifically,
          the laws of [your state / region, e.g. Telangana]), without regard to
          conflict of law principles.
        </p>
        <p className="mt-2 text-sm text-neutral-200">
          Any disputes will be subject to the exclusive jurisdiction of the
          courts located in [your city/state], India.
        </p>

        {/* 15. Changes */}
        <h2 className="mt-8 text-lg font-semibold text-white">
          15. Changes to these Terms
        </h2>
        <p className="mt-3 text-sm text-neutral-200">
          We may update these Terms from time to time. The “Last updated” date
          will reflect the latest version. Your continued use of the services
          after changes indicates your acceptance of the updated Terms.
        </p>

        {/* 16. Contact */}
        <h2 className="mt-8 text-lg font-semibold text-white">16. Contact</h2>
        <p className="mt-3 text-sm text-neutral-200">
          For questions about these Terms, contact:
        </p>
        <div className="mt-3 rounded-lg border border-white/10 bg-white/5 p-3 text-sm text-neutral-100">
          <p>Email: hello@codelitelabs.app</p>
          <p>Phone / WhatsApp: +91 99494 56564</p>
        </div>
      </section>
    </main>
  );
}