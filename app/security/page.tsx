import Link from "next/link";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import {
  ShieldCheck,
  Lock,
  ServerOff,
  Database,
  KeyRound,
  FileCheck2,
  ArrowLeft,
  ArrowRight,
  CheckCircle2,
  XCircle,
  Cpu,
  Layers,
} from "lucide-react";

export const metadata = {
  title: "Security Architecture & Zero Data Egress Guarantee | Langtago",
  description:
    "Discover EvidenceLog's zero-data-egress security model. 100% Atlassian Forge cloud native, tenant-isolated in-memory compute, encrypted KVS storage, and deterministic SHA-256 audit proof.",
  keywords: [
    "EvidenceLog security",
    "Atlassian Forge zero data egress",
    "Jira SOC 2 security architecture",
    "Jira Cloud data residency",
    "tamper-evident audit trail",
    "Langtago security",
  ],
};

export default function SecurityPage() {
  const securityPillars = [
    {
      icon: ServerOff,
      title: "Zero External Servers & Zero Network Egress",
      description:
        "EvidenceLog operates zero external EC2/GCP instances, zero foreign API gateways, and zero analytics telemetry brokers. All execution runs strictly within Atlassian's secure microVM sandboxes.",
      details: [
        "Zero outbound network requests (no fetch/axios to third-party endpoints)",
        "Jira ticket summaries and developer identities never leave your tenant",
        "Immune to third-party SaaS infrastructure breaches or vendor downtime",
      ],
    },
    {
      icon: Database,
      title: "Encrypted In-Tenant Atlassian KVS Storage",
      description:
        "All compliance snapshots, fingerprints, and audit histories are persisted exclusively in your Atlassian Cloud instance via Atlassian Key-Value Storage (@forge/kvs).",
      details: [
        "Encrypted at rest using AES-256 managed by Atlassian Cloud HSMs",
        "Encrypted in transit with TLS 1.3 across internal Atlassian VPCs",
        "Multi-version immutable history retained up to 10 audited snapshots",
      ],
    },
    {
      icon: KeyRound,
      title: "Cryptographic SHA-256 & Binary Merkle Proofs",
      description:
        "Every certified issue produces an immutable canonical SHA-256 hash. Sprint releases are hashed hierarchically into a single deterministic Binary Merkle Tree root.",
      details: [
        "Deterministic JSON canonicalization prevents formatting spoofing",
        "Detects retroactive ticket tampering, description edits, or link removals",
        "Auditors can verify release integrity offline without trusting Langtago or Jira",
      ],
    },
    {
      icon: Layers,
      title: "Automatic Data Residency Inheritance",
      description:
        "Because EvidenceLog executes inside Atlassian Forge, your compliance data automatically inherits your Atlassian Cloud organization's pinned data residency region.",
      details: [
        "Full compliance with United States, European Union, Australia, Germany, and Singapore residency",
        "GDPR Article 28 data localization and sovereignty requirements fully satisfied",
        "Zero cross-border transfers or overseas data staging",
      ],
    },
    {
      icon: Cpu,
      title: "Zero Third-Party AI / LLM Training Ingestion",
      description:
        "Your proprietary code, commit messages, architectural acceptance criteria, and engineer names are never fed into external Large Language Models.",
      details: [
        "Zero data transmission to OpenAI, Anthropic, Google Gemini, or AWS Bedrock",
        "Deterministic, rule-based verification engine runs in pure JavaScript",
        "Guarantees your intellectual property remains private and protected",
      ],
    },
    {
      icon: FileCheck2,
      title: "Least Privilege Atlassian Forge Scopes",
      description:
        "EvidenceLog declares only the minimum necessary Atlassian Forge permission scopes required to inspect change artifacts and update certified issue properties.",
      details: [
        "Scopes: read:jira-work, write:jira-work, read:jira-user, read:issue-details:jira, storage:app",
        "Zero administrative project manipulation permissions",
        "Auditable via standard Atlassian Cloud Connected Apps administration",
      ],
    },
  ];

  return (
    <div className="relative min-h-screen bg-white font-sans selection:bg-[#dbf1c3] selection:text-[#0f5132]">
      <Navbar isProductPage={false} />

      <main className="relative pt-12 pb-24 border-t border-slate-100">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          {/* Breadcrumb / Back Navigation */}
          <Link
            href="/"
            className="inline-flex items-center gap-2 text-xs font-semibold text-[#5c728e] hover:text-[#111013] transition-colors mb-8"
          >
            <ArrowLeft className="h-3.5 w-3.5" />
            <span>Back to EvidenceLog Home</span>
          </Link>

          {/* Header Banner */}
          <div className="max-w-3xl space-y-4 mb-14">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#dbf1c3]/70 border border-[#b8e29a] text-[#15803d] font-bold text-xs tracking-wider uppercase font-heading">
              <ShieldCheck className="h-3.5 w-3.5" />
              <span>ENTERPRISE TRUST &amp; SECURITY ARCHITECTURE</span>
            </div>
            <h1 className="text-3xl sm:text-5xl font-bold tracking-tight text-[#111013] font-heading leading-tight">
              Zero Data Egress. Built 100% Natively on Atlassian Forge.
            </h1>
            <p className="text-base sm:text-lg text-[#5c728e] leading-relaxed">
              Traditional compliance plugins send your Jira tickets and developer activity to external cloud servers. EvidenceLog eliminates this third-party attack surface entirely by executing strictly inside your own Atlassian Cloud boundary.
            </p>
          </div>

          {/* Big Architectural Comparison Callout */}
          <div className="mb-16 rounded-3xl border border-slate-200 bg-[#fbfdfc] p-6 sm:p-10 shadow-sm">
            <div className="flex items-center gap-3 mb-6">
              <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-[#111013] text-[#dbf1c3]">
                <Lock className="h-5 w-5" />
              </div>
              <h2 className="text-xl sm:text-2xl font-bold text-[#111013] font-heading">
                Architectural Threat Model Comparison
              </h2>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {/* Legacy / Connect Model */}
              <div className="rounded-2xl border border-rose-200 bg-rose-50/40 p-6 space-y-3">
                <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-rose-800">
                  <span className="h-2 w-2 rounded-full bg-rose-600" />
                  <span>Legacy Jira Connect Plugins</span>
                </div>
                <h3 className="text-base font-bold text-[#111013]">External Multi-Tenant SaaS</h3>
                <ul className="space-y-2 text-xs text-rose-950/80 leading-relaxed">
                  <li className="flex items-start gap-2">
                    <XCircle className="h-4 w-4 text-rose-600 shrink-0 mt-0.5" />
                    <span>Transmits tickets, issue keys, summaries, and user emails to vendor AWS/GCP servers</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <XCircle className="h-4 w-4 text-rose-600 shrink-0 mt-0.5" />
                    <span>Creates a secondary database holding your sensitive proprietary SDLC records</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <XCircle className="h-4 w-4 text-rose-600 shrink-0 mt-0.5" />
                    <span>Requires 40+ page vendor security questionnaires and extensive SOC 2 subservice auditor review</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <XCircle className="h-4 w-4 text-rose-600 shrink-0 mt-0.5" />
                    <span>Vulnerable to vendor server downtime, DNS outages, or upstream database leaks</span>
                  </li>
                </ul>
              </div>

              {/* EvidenceLog Forge Native Model */}
              <div className="rounded-2xl border border-emerald-200 bg-emerald-50/50 p-6 space-y-3">
                <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-emerald-800">
                  <span className="h-2 w-2 rounded-full bg-emerald-600" />
                  <span>EvidenceLog for Jira</span>
                </div>
                <h3 className="text-base font-bold text-[#111013]">100% In-Tenant Atlassian Forge</h3>
                <ul className="space-y-2 text-xs text-emerald-950/80 leading-relaxed">
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="h-4 w-4 text-emerald-600 shrink-0 mt-0.5" />
                    <span>0.00% Network Data Egress. Compute executes purely within Atlassian microVMs</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="h-4 w-4 text-emerald-600 shrink-0 mt-0.5" />
                    <span>All snapshot records stored directly in your tenant&apos;s encrypted Atlassian KVS storage</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="h-4 w-4 text-emerald-600 shrink-0 mt-0.5" />
                    <span>Zero new external vendors added to your security perimeter or vendor risk assessment</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="h-4 w-4 text-emerald-600 shrink-0 mt-0.5" />
                    <span>Inherits 99.9% Atlassian Cloud SLA and geographic data residency boundaries automatically</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>

          {/* 6 Security Pillars Grid */}
          <div className="mb-20">
            <div className="text-center max-w-2xl mx-auto mb-12">
              <h2 className="text-2xl sm:text-4xl font-bold text-[#111013] font-heading leading-tight">
                Six Architectural Guarantees for Security &amp; Compliance Officers
              </h2>
              <p className="text-sm text-[#5c728e] mt-2">
                Engineered from day one for zero-trust enterprise compliance requirements.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {securityPillars.map((pillar, idx) => {
                const Icon = pillar.icon;
                return (
                  <div
                    key={idx}
                    className="rounded-2xl border border-slate-200 bg-white p-7 shadow-xs hover:border-[#15803d]/40 hover:shadow-md transition-all flex flex-col justify-between"
                  >
                    <div>
                      <div className="h-12 w-12 rounded-xl bg-[#111013] text-[#dbf1c3] flex items-center justify-center mb-5 shrink-0 shadow-xs">
                        <Icon className="h-6 w-6" />
                      </div>
                      <h3 className="text-lg font-bold text-[#111013] font-heading mb-2">
                        {pillar.title}
                      </h3>
                      <p className="text-xs sm:text-sm text-[#5c728e] leading-relaxed mb-4">
                        {pillar.description}
                      </p>
                    </div>

                    <ul className="space-y-2 pt-4 border-t border-slate-100 text-xs text-[#111013]">
                      {pillar.details.map((detail, dIdx) => (
                        <li key={dIdx} className="flex items-start gap-2">
                          <CheckCircle2 className="h-3.5 w-3.5 text-[#15803d] shrink-0 mt-0.5" />
                          <span>{detail}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                );
              })}
            </div>
          </div>

          {/* Offline Cryptographic Verifier Spotlight */}
          <div className="mb-20 rounded-3xl bg-[#111013] text-white p-8 sm:p-12 shadow-xl">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
              <div className="lg:col-span-8 space-y-4">
                <div className="inline-block rounded-md bg-white/10 px-3 py-1 text-xs font-bold uppercase tracking-wider text-[#dbf1c3] font-heading">
                  ZERO-TRUST CRYPTOGRAPHY
                </div>
                <h2 className="text-2xl sm:text-4xl font-bold font-heading text-white leading-tight">
                  Independent Verification Without Trusting Us or Jira
                </h2>
                <p className="text-sm text-slate-300 leading-relaxed max-w-2xl">
                  EvidenceLog is designed so that external Big 4 and SOC 2 Type II audit teams do not have to take our word for it. Every certified snapshot produces an idempotent canonical SHA-256 fingerprint. Auditors can open our dependency-free HTML/JS verifier completely offline (air-gapped) on their own laptops to re-compute hashes and verify Merkle root consistency directly against raw Jira JSON exports.
                </p>
                <div className="flex flex-wrap items-center gap-4 text-xs font-mono text-slate-300 pt-2">
                  <span className="flex items-center gap-1.5">
                    <span className="h-1.5 w-1.5 rounded-full bg-[#dbf1c3]" />
                    <span>Deterministic JSON Serialization</span>
                  </span>
                  <span className="flex items-center gap-1.5">
                    <span className="h-1.5 w-1.5 rounded-full bg-[#dbf1c3]" />
                    <span>Binary Merkle Tree Root Computation</span>
                  </span>
                  <span className="flex items-center gap-1.5">
                    <span className="h-1.5 w-1.5 rounded-full bg-[#dbf1c3]" />
                    <span>100% Offline Browser Execution</span>
                  </span>
                </div>
              </div>

              <div className="lg:col-span-4 flex flex-col gap-3">
                <a
                  href="/docs/verifier.html"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full inline-flex items-center justify-center gap-2 py-3.5 px-6 rounded-xl bg-[#dbf1c3] hover:bg-white text-[#111013] text-xs sm:text-sm font-bold shadow-md transition-all cursor-pointer"
                >
                  <span>Launch Offline Verifier</span>
                  <ArrowRight className="h-4 w-4" />
                </a>
                <a
                  href="/docs/user-guide.html#cryptography"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full inline-flex items-center justify-center gap-2 py-2.5 px-4 rounded-xl bg-transparent hover:bg-white/10 text-white text-xs font-semibold border border-white/20 transition-all cursor-pointer"
                >
                  <span>Review Cryptographic Math Spec</span>
                </a>
              </div>
            </div>
          </div>

          {/* Quick FAQ / Security Questionnaire Section */}
          <div className="max-w-4xl mx-auto space-y-6">
            <h2 className="text-2xl sm:text-3xl font-bold text-[#111013] font-heading text-center mb-8">
              Vendor Security Questionnaire Fast-Track
            </h2>

            <div className="space-y-4">
              <div className="rounded-2xl border border-slate-200 p-6 bg-white shadow-2xs">
                <h3 className="text-base font-bold text-[#111013] mb-2">
                  Q: Where is our customer data stored?
                </h3>
                <p className="text-sm text-[#5c728e] leading-relaxed">
                  Inside your existing Atlassian Cloud instance. EvidenceLog uses the Atlassian Forge Key-Value Storage API (<code className="font-mono text-xs bg-slate-100 text-emerald-800 px-1 py-0.5 rounded">@forge/kvs</code>). Langtago maintains no foreign databases, caches, or AWS buckets containing your Jira data.
                </p>
              </div>

              <div className="rounded-2xl border border-slate-200 p-6 bg-white shadow-2xs">
                <h3 className="text-base font-bold text-[#111013] mb-2">
                  Q: Does installing EvidenceLog require a new Business Associate Agreement (BAA) or Data Processing Agreement (DPA)?
                </h3>
                <p className="text-sm text-[#5c728e] leading-relaxed">
                  Because EvidenceLog runs within Atlassian Forge and executes zero outbound data egress, your data processing is governed by your existing Atlassian Cloud Master Subscription Agreement and DPA. Langtago does not receive, transmit, or store personal or healthcare data outside your Atlassian boundary.
                </p>
              </div>

              <div className="rounded-2xl border border-slate-200 p-6 bg-white shadow-2xs">
                <h3 className="text-base font-bold text-[#111013] mb-2">
                  Q: How is access controlled within Jira?
                </h3>
                <p className="text-sm text-[#5c728e] leading-relaxed">
                  EvidenceLog adheres to native Jira Cloud permission schemes. Only authorized project members can view issue panels or the Project Audit Hub. Administrative policy configurations (such as custom QA labels or strict SoD enforcement) are restricted to designated Jira Project Administrators.
                </p>
              </div>
            </div>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
}
