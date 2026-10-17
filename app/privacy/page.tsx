import Link from "next/link";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Shield, Lock, Server, EyeOff, CheckCircle2, ArrowLeft } from "lucide-react";

export const metadata = {
  title: "Privacy Policy | Langtago & EvidenceLog for Jira",
  description: "Zero-egress privacy policy for Langtago Studio and EvidenceLog for Jira. Learn how your SDLC evidence stays 100% inside your Atlassian Cloud tenant.",
};

export default function PrivacyPage() {
  return (
    <div className="relative min-h-screen bg-slate-950 font-sans selection:bg-emerald-500/30 selection:text-emerald-200">
      <Navbar isProductPage={false} />

      <main className="relative pt-32 pb-24 border-t border-white/[0.06]">
        <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
          {/* Breadcrumb / Back Link */}
          <Link
            href="/"
            className="inline-flex items-center gap-2 text-xs font-mono text-zinc-400 hover:text-emerald-400 transition-colors mb-8"
          >
            <ArrowLeft className="h-3.5 w-3.5" />
            <span>Back to Langtago Studio</span>
          </Link>

          {/* Header */}
          <div className="space-y-4 border-b border-white/[0.08] pb-10">
            <div className="inline-flex items-center gap-2 font-mono text-xs tracking-wider text-emerald-400 uppercase">
              <span className="h-1.5 w-1.5 rounded-full bg-emerald-400" />
              <span>Enterprise Trust & Data Protection</span>
            </div>
            <h1 className="text-3xl sm:text-5xl font-bold tracking-tight text-white">
              Privacy Policy
            </h1>
            <p className="text-sm text-zinc-400 font-mono">
              Effective Date: October 18, 2026 • Version 2.1 (Atlassian Forge Cloud Native)
            </p>
          </div>

          {/* Zero-Egress Architecture Callout */}
          <div className="my-10 rounded-2xl border border-emerald-500/30 bg-emerald-950/20 p-6 sm:p-8 backdrop-blur-sm">
            <div className="flex items-start gap-4">
              <div className="rounded-xl bg-emerald-500/10 p-2.5 text-emerald-400 border border-emerald-500/20 shrink-0">
                <Shield className="h-6 w-6" />
              </div>
              <div className="space-y-2">
                <h2 className="text-base font-bold text-white">Our Zero-Data-Egress Architectural Guarantee</h2>
                <p className="text-xs sm:text-sm text-zinc-300 leading-relaxed">
                  <strong>EvidenceLog for Jira</strong> runs 100% inside your organization&apos;s Atlassian Cloud instance using Atlassian Forge.
                  Your Jira tickets, developer names, pull request URLs, Git commit hashes, and security scan logs are processed entirely in-memory within the Atlassian secure sandbox.
                  <strong> Langtago operates zero external servers, zero external databases, and conducts zero outbound network egress of your Jira data.</strong>
                </p>
              </div>
            </div>
          </div>

          {/* Privacy Clauses */}
          <div className="space-y-12 text-sm text-zinc-300 leading-relaxed">
            {/* Section 1 */}
            <section className="space-y-3">
              <h3 className="text-lg font-bold text-white flex items-center gap-2">
                <span className="text-emerald-400 font-mono text-base">1.</span>
                <span>Scope & Applicability</span>
              </h3>
              <p>
                This Privacy Policy applies to all users of software applications published by Langtago (&quot;we&quot;, &quot;us&quot;, or &quot;our&quot;), including our flagship Atlassian Marketplace app, <strong>EvidenceLog for Jira</strong>, and our website at <Link href="https://langtago.com" className="text-emerald-400 hover:underline">langtago.com</Link>.
              </p>
              <p>
                By installing EvidenceLog for Jira from the Atlassian Marketplace or accessing our website, you agree to the collection and handling practices described in this document.
              </p>
            </section>

            {/* Section 2 */}
            <section className="space-y-3">
              <h3 className="text-lg font-bold text-white flex items-center gap-2">
                <span className="text-emerald-400 font-mono text-base">2.</span>
                <span>Data Processed by EvidenceLog for Jira</span>
              </h3>
              <p>
                To provide automated SOC 2 and ISO 27001 evidence verification, EvidenceLog for Jira accesses specific Jira metadata via declared Atlassian Forge APIs:
              </p>
              <ul className="space-y-2 pl-4 list-disc text-zinc-400">
                <li><strong className="text-zinc-200">Issue Metadata:</strong> Issue keys, summaries, issue types, priorities, and workflow statuses.</li>
                <li><strong className="text-zinc-200">Change Traceability:</strong> Presence of Acceptance Criteria in descriptions and Git remote links (GitHub, GitLab, Bitbucket, Azure DevOps).</li>
                <li><strong className="text-zinc-200">Segregation of Duties (SoD):</strong> Transition history actors and comment sign-offs to verify independent peer review.</li>
                <li><strong className="text-zinc-200">Testing & Security Sign-offs:</strong> QA verification labels and security scanner signatures (Snyk, SonarQube, Trivy, Dependabot, OWASP ZAP).</li>
              </ul>
              <div className="rounded-xl border border-white/[0.08] bg-[#0d1117] p-4 font-mono text-xs text-zinc-400 mt-3">
                <span className="text-emerald-400 font-semibold">Immutable Storage Location:</span> Audit snapshots and SHA-256 fingerprints are stored strictly inside your Jira tenant&apos;s encrypted Atlassian Key-Value Storage (<code className="text-emerald-300">@forge/kvs</code>). They are never transmitted to Langtago or third parties.
              </div>
            </section>

            {/* Section 3 */}
            <section className="space-y-3">
              <h3 className="text-lg font-bold text-white flex items-center gap-2">
                <span className="text-emerald-400 font-mono text-base">3.</span>
                <span>Zero Data Egress & Third-Party Processors</span>
              </h3>
              <p>
                Unlike legacy Jira marketplace plugins that transmit your tickets to external AWS or GCP servers, EvidenceLog operates under a strict <strong>Zero Data Egress architecture</strong>:
              </p>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-2">
                <div className="rounded-xl border border-white/[0.08] bg-[#0d1117] p-4 space-y-2">
                  <div className="flex items-center gap-2 text-white font-semibold text-xs">
                    <Lock className="h-4 w-4 text-emerald-400" />
                    <span>No Third-Party AI / LLM Ingestion</span>
                  </div>
                  <p className="text-xs text-zinc-400">
                    Your code commits, issue descriptions, and tickets are never shared with OpenAI, Anthropic, or external machine learning models.
                  </p>
                </div>
                <div className="rounded-xl border border-white/[0.08] bg-[#0d1117] p-4 space-y-2">
                  <div className="flex items-center gap-2 text-white font-semibold text-xs">
                    <Server className="h-4 w-4 text-emerald-400" />
                    <span>No External Cloud Storage</span>
                  </div>
                  <p className="text-xs text-zinc-400">
                    We maintain zero relational databases, S3 buckets, or logs containing customer Jira ticket records.
                  </p>
                </div>
              </div>
            </section>

            {/* Section 4 */}
            <section className="space-y-3">
              <h3 className="text-lg font-bold text-white flex items-center gap-2">
                <span className="text-emerald-400 font-mono text-base">4.</span>
                <span>Data Residency & Atlassian Cloud Sovereignty</span>
              </h3>
              <p>
                Because EvidenceLog runs within Atlassian Forge, your data inherits your Atlassian Cloud Data Residency tier automatically. If your Jira instance is pinned to the United States, European Union, Australia, Germany, or Singapore, all verification calculations and encrypted snapshot storage stay strictly within that geographic boundary.
              </p>
            </section>

            {/* Section 5 */}
            <section className="space-y-3">
              <h3 className="text-lg font-bold text-white flex items-center gap-2">
                <span className="text-emerald-400 font-mono text-base">5.</span>
                <span>Website Analytics (langtago.com)</span>
              </h3>
              <p>
                When you visit our marketing website (<Link href="https://langtago.com" className="text-emerald-400 hover:underline">langtago.com</Link>), we use minimal privacy-first analytics (Google Analytics) to understand aggregated page views, referral sources, and feature interest. This analytics data is never linked to your Jira instance or enterprise ticket data.
              </p>
            </section>

            {/* Section 6 */}
            <section className="space-y-3">
              <h3 className="text-lg font-bold text-white flex items-center gap-2">
                <span className="text-emerald-400 font-mono text-base">6.</span>
                <span>Compliance with Global Privacy Standards</span>
              </h3>
              <div className="space-y-2 text-zinc-400">
                <p>
                  <strong className="text-white">GDPR (General Data Protection Regulation):</strong> Because we process no customer personal data outside your Atlassian Cloud tenant, Langtago does not act as a traditional data processor storing personal records. You retain full control over right-to-erasure and access requests via Jira Cloud administration.
                </p>
                <p>
                  <strong className="text-white">CCPA (California Consumer Privacy Act):</strong> Langtago does not sell, rent, or monetize your personal or company data under any circumstances.
                </p>
                <p>
                  <strong className="text-white">HIPAA Security Rule:</strong> EvidenceLog satisfies §164.312(b) audit trail and hardware/software integrity controls while maintaining zero external BAA data transfers.
                </p>
              </div>
            </section>

            {/* Section 7 */}
            <section className="space-y-3 border-t border-white/[0.08] pt-8">
              <h3 className="text-lg font-bold text-white flex items-center gap-2">
                <span className="text-emerald-400 font-mono text-base">7.</span>
                <span>Contact & Privacy Inquiries</span>
              </h3>
              <p>
                For questions regarding this Privacy Policy, enterprise security questionnaires, or Atlassian Marketplace compliance documentation, please reach out to our security team:
              </p>
              <div className="rounded-xl border border-white/[0.08] bg-[#0d1117] p-4 font-mono text-xs space-y-1">
                <div>Email: <a href="mailto:support@langtago.com" className="text-emerald-400 hover:underline">support@langtago.com</a></div>
                <div>Vendor: <span className="text-zinc-200">Langtago Studio</span></div>
                <div>Website: <Link href="https://langtago.com" className="text-zinc-200 hover:underline">langtago.com</Link></div>
              </div>
            </section>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
}
