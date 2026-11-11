import Link from "next/link";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import {
  ShieldCheck,
  CheckCircle2,
  ArrowRight,
  ArrowLeft,
  Lock,
  Landmark,
  MapPin,
} from "lucide-react";

export const metadata = {
  title: "Automate APRA CPS 234 & Essential Eight in Jira Cloud — Australian Financial Services Guide | Langtago",
  description:
    "Learn how Australian banks, super funds, insurers, and fintechs automate APRA CPS 234 change management controls natively in Jira Cloud. 100% Sydney Data Residency (ap-southeast-2) via Atlassian Forge with zero data egress.",
  keywords: [
    "APRA CPS 234 Jira",
    "APRA CPS 234 change management",
    "APRA CPS 234 evidence collection",
    "Essential Eight Jira Cloud",
    "Australian financial services compliance Jira",
    "APRA segregation of duties software development",
    "Atlassian Forge Sydney data residency",
    "APRA CPS 234 audit workpapers Jira",
    "CPS 234 paragraph 23 change control",
    "Australian fintech compliance automation",
  ],
  openGraph: {
    title: "Automate APRA CPS 234 Change Controls Directly in Jira Cloud",
    description:
      "Eliminate manual screenshotting. Enforce segregation of duties, test verification, and sealed cryptographic audit trails inside Atlassian Jira Cloud with 100% Australian Data Residency.",
    url: "https://langtago.com/frameworks/apra-cps-234",
    siteName: "Langtago — EvidenceLog for Jira",
  },
};

export default function ApraCps234FrameworkPage() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "TechArticle",
        "headline": "Automating APRA CPS 234 Change Management Controls in Jira Cloud",
        "description": "A comprehensive technical blueprint for Australian engineering managers, CISOs, and financial institutions to satisfy APRA Prudential Standard CPS 234 natively inside Jira Cloud.",
        "author": {
          "@type": "Organization",
          "name": "Langtago Security & Compliance Team",
          "url": "https://langtago.com",
        },
        "publisher": {
          "@type": "Organization",
          "name": "Langtago",
          "url": "https://langtago.com",
        },
        "datePublished": "2026-11-11",
        "dateModified": "2026-11-11",
        "mainEntityOfPage": "https://langtago.com/frameworks/apra-cps-234",
      },
      {
        "@type": "FAQPage",
        "mainEntity": [
          {
            "@type": "Question",
            "name": "What is APRA CPS 234 and how does it affect software change management?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "Prudential Standard CPS 234 (Information Security) is mandated by the Australian Prudential Regulation Authority (APRA) for banks, superannuation trustees, general insurers, and life companies. Paragraphs 23 through 27 require regulated entities to maintain robust information security controls over changes to information assets, including independent testing, segregation of duties, and systematic audit trails.",
            },
          },
          {
            "@type": "Question",
            "name": "Does EvidenceLog keep data within Australia (Australian Data Residency)?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "Yes. EvidenceLog is built natively on Atlassian Forge. When deployed to an Australian Jira Cloud instance, all compute executes inside Atlassian's Sydney AWS region (ap-southeast-2) and all cryptographic change records persist within your Jira tenant's encrypted Key-Value Storage (@forge/kvs). No source code or ticket data ever leaves Australia or Atlassian Cloud.",
            },
          },
          {
            "@type": "Question",
            "name": "Does EvidenceLog help satisfy ACSC Essential Eight requirements?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "Yes. EvidenceLog enforces strict change controls, application release integrity, and verified peer review before deployment, directly aligning with ACSC Essential Eight maturity levels for restricting administrative privileges and preventing unreviewed code execution.",
            },
          },
          {
            "@type": "Question",
            "name": "How does EvidenceLog prevent APRA CPS 231 outsourcing audit hurdles?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "Under APRA CPS 231 (Outsourcing) and CPS 230 (Operational Risk), using third-party SaaS vendors that store company code or sensitive change records in external foreign databases triggers heavy vendor assessments. Because EvidenceLog has zero external backend and zero data egress, it is classified as a native Atlassian Cloud extension, avoiding complex offshore material outsourcing classifications.",
            },
          },
        ],
      },
    ],
  };

  const apraControls = [
    {
      clause: "CPS 234 Para 23: Information Security Controls across Lifecycle",
      apraRequirement:
        "An APRA-regulated entity must maintain information security controls commensurate with the size and criticality of its information assets across all phases of the system development life cycle (SDLC).",
      auditorExpectation:
        "Verifiable evidence that change gates (security scans, linting, peer reviews) are systematically applied to all production releases without manual bypass.",
      evidenceLogSolution:
        "Enforces real-time gatekeeper checks in Jira issue workflows. Transitions to Done are verified and sealed with SHA-256 cryptographic records.",
      status: "AUTOMATED",
    },
    {
      clause: "CPS 234 Para 24: Pre-Implementation Testing & Quality Assurance",
      apraRequirement:
        "Controls must ensure that changes are thoroughly tested in non-production environments to prevent compromise of information security and system integrity.",
      auditorExpectation:
        "Documented staging test execution, QA sign-off, and automated test pipeline pass confirmation linked directly to the Jira release ticket.",
      evidenceLogSolution:
        "Detects CI/CD pipeline test pass badges, qa-verified labels, and formal QA verification comments. Blocks transitions if test verification is absent.",
      status: "AUTOMATED",
    },
    {
      clause: "CPS 234 Para 25: Segregation of Duties (Author ≠ Approver)",
      apraRequirement:
        "Regulated entities must implement effective segregation of duties to minimize the risk of unauthorized or fraudulent changes to production systems.",
      auditorExpectation:
        "Definitive proof that the author who committed or created the pull request did not unilaterally approve or merge the code into production.",
      evidenceLogSolution:
        "Inspects GitHub, GitLab, and Bitbucket pull requests linked to the Jira issue. Immediately flags and blocks self-approval attempts.",
      status: "AUTOMATED",
    },
    {
      clause: "CPS 234 Para 26: Back-out & Contingency (Rollback) Capability",
      apraRequirement:
        "Changes must have established, documented fallback and rollback plans to restore system state without operational disruption or security vulnerability.",
      auditorExpectation:
        "Documented rollback instructions (Git revert commit SHA, feature flag toggle, or database rollback plan) attached to each production change ticket.",
      evidenceLogSolution:
        "Inspects Jira description for rollback instructions. Provides a 1-click in-situ button to append standardized rollback plans directly in the ticket.",
      status: "AUTOMATED",
    },
    {
      clause: "CPS 234 Para 27: Audit Trail & Incident Readiness",
      apraRequirement:
        "Information security controls must include logging and monitoring sufficient to detect security incidents and provide an unalterable audit trail for regulators.",
      auditorExpectation:
        "A tamper-evident historical audit log matching release tickets to commit SHAs, approvers, test runs, and timestamps with zero spreadsheet gaps.",
      evidenceLogSolution:
        "Outputs sealed 1-click CSV workpapers and cryptographic JSON certificates designed for internal audit, APRA triennial reviews, and Big 4 sampling.",
      status: "AUTOMATED",
    },
  ];

  return (
    <div className="relative min-h-screen bg-white font-sans text-[#5c728e] selection:bg-[#dbf1c3] selection:text-[#0f5132]">
      {/* Schema.org JSON-LD */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />

      {/* Global Navigation */}
      <Navbar isProductPage={false} />

      <main className="relative pt-10 pb-24">
        {/* Header Breadcrumb & Tag */}
        <div className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8">
          <div className="flex items-center gap-2 text-xs font-semibold text-[#5c728e] mb-6">
            <Link href="/" className="hover:text-[#111013] transition-colors flex items-center gap-1">
              <ArrowLeft className="h-3.5 w-3.5" />
              <span>EvidenceLog</span>
            </Link>
            <span>/</span>
            <span className="text-[#15803d]">Compliance Frameworks</span>
            <span>/</span>
            <span className="text-[#111013] font-bold">APRA CPS 234 &amp; Essential Eight</span>
          </div>

          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#dbf1c3]/70 border border-[#b8e29a] text-[#15803d] font-bold text-xs uppercase tracking-wider mb-4 font-heading">
            <Landmark className="h-3.5 w-3.5 text-[#15803d]" />
            <span>Australian Financial Services &amp; APRA Compliance</span>
          </div>

          <h1 className="text-3xl sm:text-5xl font-bold tracking-tight text-[#111013] leading-tight font-heading mb-6">
            Automate APRA CPS 234 change management controls in Jira Cloud
          </h1>

          <p className="text-lg text-[#5c728e] leading-relaxed mb-8">
            A practical, no-fluff guide for Australian engineering leads, DevOps managers, and compliance teams at banks, super funds, insurers, and fintechs. Stop taking manual PR screenshots and satisfy APRA CPS 234 Paragraphs 23–27 natively inside Atlassian Jira—with 100% Sydney Data Residency and zero data egress.
          </p>

          {/* Key Assurance Badges */}
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mb-12">
            <div className="rounded-xl border border-slate-200 bg-slate-50/70 p-4">
              <div className="flex items-center gap-2 text-sm font-bold text-[#111013] mb-1">
                <MapPin className="h-4 w-4 text-[#15803d]" />
                <span>100% Sydney Data Residency</span>
              </div>
              <p className="text-xs text-[#5c728e]">
                Runs inside AWS Sydney (ap-southeast-2). No data, source code, or ticket text ever leaves Australia.
              </p>
            </div>

            <div className="rounded-xl border border-slate-200 bg-slate-50/70 p-4">
              <div className="flex items-center gap-2 text-sm font-bold text-[#111013] mb-1">
                <Lock className="h-4 w-4 text-[#15803d]" />
                <span>Zero Offshore Vendor Risk</span>
              </div>
              <p className="text-xs text-[#5c728e]">
                Native Atlassian Forge microVM architecture. Avoids APRA CPS 231 material outsourcing friction.
              </p>
            </div>

            <div className="rounded-xl border border-slate-200 bg-slate-50/70 p-4">
              <div className="flex items-center gap-2 text-sm font-bold text-[#111013] mb-1">
                <ShieldCheck className="h-4 w-4 text-[#15803d]" />
                <span>Essential Eight Aligned</span>
              </div>
              <p className="text-xs text-[#5c728e]">
                Enforces independent peer approvals and prevents unreviewed code merges into production.
              </p>
            </div>
          </div>

          {/* Section 1: The APRA CPS 234 Change Problem */}
          <section className="mb-14">
            <h2 className="text-2xl sm:text-3xl font-bold text-[#111013] font-heading mb-4">
              Why Australian financial institutions dread CPS 234 change audits
            </h2>
            <div className="space-y-4 text-base leading-relaxed text-[#5c728e]">
              <p>
                Under APRA Prudential Standard CPS 234, regulated entities (ADIs, general insurers, life insurers, and RSE licensees) must demonstrate that information security controls are actively maintained across the entire system development lifecycle. When APRA or internal audit conducts a triennial prudential review or an operational risk assessment (CPS 230), they request a sample of 25 to 50 production changes.
              </p>
              <p>
                In most Australian engineering teams, fulfilling this sample is a painful, multi-week fire drill:
              </p>
              <ul className="space-y-2.5 pl-4 border-l-2 border-rose-300">
                <li className="text-sm font-medium text-slate-800">
                  <strong>The Screenshot Hustle:</strong> Senior developers burn 3–4 hours per sampled ticket digging through Jira, GitHub/Bitbucket PRs, and deployment logs to take screenshots of approvals and CI test runs.
                </li>
                <li className="text-sm font-medium text-slate-800">
                  <strong>Separation of Duties Failures:</strong> Self-approvals or missing peer approvals slipped past busy team leads on hotfixes, creating formal APRA audit findings.
                </li>
                <li className="text-sm font-medium text-slate-800">
                  <strong>Offshore Vendor Restrictions:</strong> Many automated compliance tools store ticket data and code metadata on US-hosted external multitenant servers, creating severe compliance hurdles under Australian Privacy Principle 11 and APRA CPS 231.
                </li>
              </ul>
            </div>
          </section>

          {/* Section 2: APRA Controls Matrix */}
          <section className="mb-14">
            <div className="flex items-center justify-between mb-4">
              <h2 className="text-2xl sm:text-3xl font-bold text-[#111013] font-heading">
                APRA CPS 234 Change Control Matrix &amp; EvidenceLog Automation
              </h2>
            </div>
            <p className="text-sm text-[#5c728e] mb-6">
              How EvidenceLog maps directly to APRA CPS 234 paragraphs 23 through 27 inside Atlassian Jira Cloud:
            </p>

            <div className="space-y-4">
              {apraControls.map((ctrl, i) => (
                <div
                  key={i}
                  className="rounded-xl border border-slate-200 bg-white p-5 shadow-xs hover:border-[#15803d]/40 transition-colors"
                >
                  <div className="flex flex-wrap items-center justify-between gap-2 mb-2 pb-2 border-b border-slate-100">
                    <span className="text-xs font-bold font-mono text-[#111013] uppercase tracking-wider">
                      {ctrl.clause}
                    </span>
                    <span className="inline-flex items-center gap-1 px-2 py-0.5 rounded bg-emerald-50 text-[#15803d] text-[10px] font-bold border border-emerald-200">
                      <CheckCircle2 className="h-3 w-3" />
                      <span>{ctrl.status}</span>
                    </span>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-3 gap-4 text-xs mt-3">
                    <div>
                      <span className="font-semibold text-slate-900 block mb-1">APRA CPS 234 Mandate:</span>
                      <p className="text-slate-600 leading-relaxed">{ctrl.apraRequirement}</p>
                    </div>
                    <div>
                      <span className="font-semibold text-slate-900 block mb-1">What the Auditor Samples:</span>
                      <p className="text-slate-600 leading-relaxed">{ctrl.auditorExpectation}</p>
                    </div>
                    <div>
                      <span className="font-semibold text-[#15803d] block mb-1">EvidenceLog Jira Solution:</span>
                      <p className="text-slate-700 leading-relaxed font-medium">{ctrl.evidenceLogSolution}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </section>

          {/* Section 3: In-Tenant Sydney Data Residency Architecture */}
          <section className="mb-14 rounded-2xl bg-slate-900 text-white p-6 sm:p-8">
            <div className="inline-flex items-center gap-2 px-2.5 py-0.5 rounded bg-emerald-500/20 text-emerald-300 text-xs font-mono font-bold mb-3">
              <span>DATA SOVEREIGNTY ARCHITECTURE</span>
            </div>
            <h3 className="text-2xl font-bold font-heading mb-3 text-white">
              Why Atlassian Forge solves Australian Data Residency for APRA entities
            </h3>
            <p className="text-sm text-slate-300 leading-relaxed mb-6">
              Unlike traditional SaaS compliance tools that require you to grant API keys and export sensitive ticket descriptions, commit logs, and employee emails to US-hosted cloud databases, EvidenceLog runs 100% inside Atlassian Forge:
            </p>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-xs">
              <div className="rounded-xl bg-slate-800/80 border border-slate-700 p-4">
                <span className="font-bold text-emerald-400 block mb-1 text-sm">
                  ✓ AWS Sydney (ap-southeast-2)
                </span>
                <p className="text-slate-300">
                  Execution and storage are physically pinned to Atlassian&apos;s Sydney data center. Zero cross-border data transfer.
                </p>
              </div>
              <div className="rounded-xl bg-slate-800/80 border border-slate-700 p-4">
                <span className="font-bold text-emerald-400 block mb-1 text-sm">
                  ✓ Zero External Egress
                </span>
                <p className="text-slate-300">
                  Manifest enforces zero external fetch calls. No external analytics, no third-party logging, zero vendor database risk.
                </p>
              </div>
              <div className="rounded-xl bg-slate-800/80 border border-slate-700 p-4">
                <span className="font-bold text-emerald-400 block mb-1 text-sm">
                  ✓ Encrypted Tenant KVS
                </span>
                <p className="text-slate-300">
                  All audit logs and SHA-256 hashes are persisted in Atlassian&apos;s encrypted tenant key-value store (@forge/kvs).
                </p>
              </div>
              <div className="rounded-xl bg-slate-800/80 border border-slate-700 p-4">
                <span className="font-bold text-emerald-400 block mb-1 text-sm">
                  ✓ Fast-Track Vendor Approval
                </span>
                <p className="text-slate-300">
                  Complies directly with Atlassian Cloud Enterprise terms—no lengthy 6-month third-party security assessments needed.
                </p>
              </div>
            </div>
          </section>

          {/* CTA Box */}
          <div className="rounded-2xl border border-slate-200 bg-gradient-to-r from-emerald-50/50 via-white to-emerald-50/30 p-8 text-center sm:text-left flex flex-col sm:flex-row items-center justify-between gap-6">
            <div>
              <h3 className="text-xl sm:text-2xl font-bold text-[#111013] font-heading mb-2">
                Ready to automate APRA CPS 234 audit readiness in Jira?
              </h3>
              <p className="text-sm text-[#5c728e] max-w-xl">
                Install free on Atlassian Marketplace. Test with up to 10 users forever, or upgrade seamlessly through your existing Atlassian invoice.
              </p>
            </div>
            <div className="flex flex-col sm:flex-row items-center gap-3 shrink-0">
              <a
                href="https://marketplace.atlassian.com"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 px-6 py-3 rounded-xl bg-[#111013] text-white hover:bg-[#15803d] font-semibold text-xs transition-all shadow-md cursor-pointer whitespace-nowrap"
              >
                <span>Install Free on Marketplace</span>
                <ArrowRight className="h-4 w-4" />
              </a>
              <Link
                href="/compare/manual-screenshots-vs-evidencelog"
                className="inline-flex items-center justify-center gap-2 px-5 py-3 rounded-xl bg-white border border-slate-300 text-[#111013] hover:border-[#111013] font-semibold text-xs transition-all shadow-2xs whitespace-nowrap"
              >
                <span>Compare Manual vs. Automated</span>
              </Link>
            </div>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
}
