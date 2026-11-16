import Link from "next/link";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { FileText, AlertCircle, ArrowLeft, ShieldCheck } from "lucide-react";

export const metadata = {
  title: "Terms of Service | Langtago & EvidenceLog for Jira",
  description: "Commercial and licensing terms of service for Langtago and EvidenceLog for Jira via the Atlassian Marketplace.",
};

export default function TermsPage() {
  return (
    <div className="relative min-h-screen bg-white font-sans text-[#5c728e] selection:bg-[#dbf1c3] selection:text-[#0f5132]">
      <Navbar isProductPage={false} />

      <main className="relative pt-12 pb-24 border-t border-slate-100">
        <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
          {/* Breadcrumb / Back Link */}
          <Link
            href="/"
            className="inline-flex items-center gap-1.5 text-xs font-semibold text-[#5c728e] hover:text-[#111013] transition-colors mb-8"
          >
            <ArrowLeft className="h-3.5 w-3.5" />
            <span>Back to EvidenceLog Home</span>
          </Link>

          {/* Header */}
          <div className="space-y-4 border-b border-slate-100 pb-10">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#dbf1c3]/70 border border-[#b8e29a] text-[#15803d] font-bold text-xs uppercase tracking-wider font-heading">
              <ShieldCheck className="h-3.5 w-3.5 text-[#15803d]" />
              <span>Commercial Agreement</span>
            </div>
            <h1 className="text-3xl sm:text-5xl font-bold tracking-tight text-[#111013] font-heading leading-tight">
              Terms of Service
            </h1>
            <p className="text-xs text-[#5c728e] font-mono">
              Last Updated: October 18, 2026 &bull; Version 2.0 (Atlassian Marketplace Commercial)
            </p>
          </div>

          {/* Agreement Notice Box */}
          <div className="my-10 rounded-2xl border border-slate-200 bg-slate-50 p-6 sm:p-8">
            <div className="flex items-start gap-4">
              <div className="rounded-xl bg-white p-2.5 text-[#15803d] border border-slate-200 shadow-xs shrink-0">
                <FileText className="h-6 w-6" />
              </div>
              <div className="space-y-2">
                <h2 className="text-base font-bold text-[#111013] font-heading">Agreement Overview</h2>
                <p className="text-xs sm:text-sm text-[#5c728e] leading-relaxed">
                  These Terms of Service (&quot;Terms&quot;) govern your access to and use of <strong className="text-[#111013]">EvidenceLog for Jira</strong> and services provided by Langtago (&quot;Langtago&quot;).
                  By installing EvidenceLog from the Atlassian Marketplace, using our site, or subscribing to our software, you agree to be bound by these Terms and the Atlassian Customer Agreement.
                </p>
              </div>
            </div>
          </div>

          {/* Terms Clauses */}
          <div className="space-y-12 text-sm text-[#5c728e] leading-relaxed">
            {/* 1. Subscription & Licensing */}
            <section className="space-y-3">
              <h3 className="text-lg font-bold text-[#111013] font-heading flex items-center gap-2">
                <span className="text-[#15803d] font-mono text-base">1.</span>
                <span>Subscription, Billing &amp; Marketplace Licensing</span>
              </h3>
              <p>
                EvidenceLog for Jira is licensed on a subscription basis through the <strong className="text-[#111013]">Atlassian Marketplace</strong>. Subscriptions are billed directly through your Atlassian Cloud invoicing agreement:
              </p>
              <ul className="space-y-2 pl-4 list-disc text-[#5c728e]">
                <li><strong className="text-[#111013]">Free Developer Tier:</strong> Fully functional for teams up to 10 users with single-issue certification, SHA-256 fingerprinting, and offline verification.</li>
                <li><strong className="text-[#111013]">Standard &amp; Enterprise Tiers:</strong> Includes project-level Audit Hub, 1-Click Batch Certification, Preventive Workflow Gatekeepers, Release Merkle root proofs, and custom compliance policy configuration.</li>
                <li><strong className="text-[#111013]">Billing Terms:</strong> Handled by Atlassian Pty Ltd pursuant to the Atlassian Marketplace Terms of Use. Renewal, payment terms, and cancellation align directly with your Jira Cloud subscription.</li>
              </ul>
            </section>

            {/* 2. Customer Ownership of Evidence */}
            <section className="space-y-3">
              <h3 className="text-lg font-bold text-[#111013] font-heading flex items-center gap-2">
                <span className="text-[#15803d] font-mono text-base">2.</span>
                <span>Customer Data &amp; Audit Record Ownership</span>
              </h3>
              <p>
                <strong className="text-[#111013]">You retain 100% full, exclusive ownership of all your Jira issues, code repository links, reviewer identities, and cryptographic evidence artifacts.</strong>
              </p>
              <p>
                Because EvidenceLog runs purely within your Atlassian Forge sandbox, all generated SHA-256 snapshots, Merkle tree trees, and compliance histories are stored encrypted within your Jira tenant. Langtago claims no ownership, title, or intellectual property rights over any compliance artifact generated from your SDLC.
              </p>
            </section>

            {/* 3. Intellectual Property Rights */}
            <section className="space-y-3">
              <h3 className="text-lg font-bold text-[#111013] font-heading flex items-center gap-2">
                <span className="text-[#15803d] font-mono text-base">3.</span>
                <span>Langtago Intellectual Property</span>
              </h3>
              <p>
                Langtago retains all intellectual property rights, trademarks, patents, and copyrights in the EvidenceLog software, verification algorithms, user interface components, and Forge backend code. You may not reverse engineer, decompile, or redistribute the proprietary software outside your licensed Atlassian organization.
              </p>
            </section>

            {/* 4. Compliance & Audit Advisory Disclaimer */}
            <section className="space-y-3">
              <h3 className="text-lg font-bold text-[#111013] font-heading flex items-center gap-2">
                <span className="text-[#15803d] font-mono text-base">4.</span>
                <span>Audit &amp; Regulatory Guidance Disclaimer</span>
              </h3>
              <div className="rounded-xl border border-amber-200 bg-amber-50/60 p-5 space-y-2">
                <div className="flex items-center gap-2 text-amber-900 font-semibold text-xs">
                  <AlertCircle className="h-4 w-4 text-amber-600 shrink-0" />
                  <span>Important Compliance Advisory</span>
                </div>
                <p className="text-xs text-amber-800 leading-relaxed">
                  EvidenceLog for Jira provides automated evidence collection, tamper-evident verification, and crosswalk analysis mapped against AICPA SOC 2 Type II, ISO/IEC 27001, HIPAA, and FedRAMP standards.
                  <strong className="text-amber-950"> EvidenceLog does not provide formal legal advice or substitute for the independent opinion of an accredited Certified Public Accountant (CPA) or licensed ISO certification body.</strong>
                  Final audit certifications remain solely at the discretion of your independent external audit firm.
                </p>
              </div>
            </section>

            {/* 5. Service Availability & Support */}
            <section className="space-y-3">
              <h3 className="text-lg font-bold text-[#111013] font-heading flex items-center gap-2">
                <span className="text-[#15803d] font-mono text-base">5.</span>
                <span>Availability, Support &amp; SLAs</span>
              </h3>
              <p>
                EvidenceLog for Jira executes natively on the Atlassian Forge serverless infrastructure. Application availability and runtime reliability are backed by the Atlassian Cloud SLA.
              </p>
              <p>
                Customer support for EvidenceLog is provided by Langtago via email at <a href="mailto:support@langtago.com" className="text-[#15803d] hover:underline font-medium">support@langtago.com</a>. Standard commercial support tickets receive responses within 1 business day; Enterprise customers receive priority 4-hour SLA responses.
              </p>
            </section>

            {/* 6. Limitation of Liability */}
            <section className="space-y-3">
              <h3 className="text-lg font-bold text-[#111013] font-heading flex items-center gap-2">
                <span className="text-[#15803d] font-mono text-base">6.</span>
                <span>Limitation of Liability</span>
              </h3>
              <p>
                To the maximum extent permitted by applicable law, in no event shall Langtago, its founders, or contributors be liable for any indirect, incidental, special, exemplary, or consequential damages, or loss of profits or revenue arising out of the use or inability to use the software. Langtago&apos;s total aggregate liability arising out of or related to these Terms shall not exceed the total fees paid by you to Langtago in the twelve (12) months preceding the incident.
              </p>
            </section>

            {/* 7. Governing Law */}
            <section className="space-y-3">
              <h3 className="text-lg font-bold text-[#111013] font-heading flex items-center gap-2">
                <span className="text-[#15803d] font-mono text-base">7.</span>
                <span>Governing Law &amp; Severability</span>
              </h3>
              <p>
                These Terms shall be governed by and construed in accordance with the laws of the jurisdiction specified in your commercial agreement, without regard to conflict of law principles. If any provision of these Terms is found to be unenforceable, that provision shall be limited or eliminated to the minimum extent necessary so that these Terms will otherwise remain in full force and effect.
              </p>
            </section>

            {/* 8. Contact Information */}
            <section className="space-y-3 border-t border-slate-100 pt-8">
              <h3 className="text-lg font-bold text-[#111013] font-heading flex items-center gap-2">
                <span className="text-[#15803d] font-mono text-base">8.</span>
                <span>Contact Details</span>
              </h3>
              <p>
                If you have questions regarding these Terms of Service or enterprise commercial licensing, please reach out:
              </p>
              <div className="rounded-xl border border-slate-200 bg-slate-50 p-4 font-mono text-xs space-y-1 text-slate-700">
                <div>Support Email: <a href="mailto:support@langtago.com" className="text-[#15803d] hover:underline">support@langtago.com</a></div>
                <div>Vendor: <span className="text-[#111013] font-semibold">Langtago</span></div>
                <div>Website: <Link href="https://langtago.com" className="text-[#111013] hover:underline">langtago.com</Link></div>
              </div>
            </section>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
}
