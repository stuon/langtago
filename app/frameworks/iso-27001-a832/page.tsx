import Link from "next/link";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import {
  ShieldCheck,
  CheckCircle2,
  ArrowRight,
  ArrowLeft,
  FileCheck2,
  Users,
  TestTube2,
  Undo2,
  Sparkles,
  ClipboardList,
  Terminal,
} from "lucide-react";

export const metadata = {
  title: "Automate ISO 27001:2022 Control A.8.32 in Jira Cloud — The Complete Engineering Guide | Langtago",
  description:
    "Learn how engineering teams satisfy ISO/IEC 27001:2022 Control A.8.32 (Change Management) in Jira Cloud. Automate risk assessment, business authorization, segregation of duties, fallback rollback plans, and tamper-evident audit workpapers.",
  keywords: [
    "ISO 27001 A.8.32 Jira",
    "ISO 27001 change management evidence",
    "ISO 27001:2022 Control A.8.32",
    "Jira ISO 27001 audit workpapers",
    "ISO 27001 fallback rollback plan Jira",
    "segregation of duties ISO 27001 Jira",
    "Atlassian Forge ISO compliance",
    "ISO 27001 Annex A change control",
    "ISO 27001 CC8.1 Jira automation",
    "Lead auditor change management checklist",
  ],
  openGraph: {
    title: "Automate ISO 27001:2022 Control A.8.32 Change Controls in Jira Cloud",
    description:
      "Eliminate manual screenshotting and Confluence CAB spreadsheets. Automatically enforce and seal cryptographic ISO 27001:2022 change evidence directly inside Atlassian Jira Cloud.",
    url: "https://langtago.com/frameworks/iso-27001-a832",
    siteName: "Langtago — EvidenceLog for Jira",
  },
};

export default function Iso27001A832FrameworkPage() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "TechArticle",
        "headline": "Automating ISO/IEC 27001:2022 Control A.8.32 Change Management in Jira Cloud",
        "description": "A comprehensive technical blueprint for engineering managers, CISOs, and Lead ISO Auditors to satisfy ISO/IEC 27001:2022 Annex A Control 8.32 natively inside Jira Cloud.",
        "author": {
          "@type": "Organization",
          "name": "Langtago Security & Compliance Team",
          "url": "https://langtago.com"
        },
        "publisher": {
          "@type": "Organization",
          "name": "Langtago",
          "url": "https://langtago.com"
        },
        "datePublished": "2026-11-10",
        "dateModified": "2026-11-10",
        "mainEntityOfPage": "https://langtago.com/frameworks/iso-27001-a832"
      },
      {
        "@type": "FAQPage",
        "mainEntity": [
          {
            "@type": "Question",
            "name": "What is ISO/IEC 27001:2022 Control A.8.32?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "ISO/IEC 27001:2022 Control A.8.32 (Change Management) requires that changes to information processing facilities and systems are subject to formal change control procedures, including risk assessment, business authorization, segregation of duties, pre-deployment testing, rollback fallback procedures, and post-implementation review."
            }
          },
          {
            "@type": "Question",
            "name": "How does Control A.8.32 differ from the old ISO 27001:2013 Control A.12.1.2?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "In the 2022 revision of ISO 27001, Annex A was restructured from 114 controls across 14 clauses to 93 controls in 4 themes. Control A.12.1.2 was consolidated into Control A.8.32 in the 'Technological controls' theme, placing stronger emphasis on automated testing, fallback rollback verification, and integration with modern CI/CD development pipelines."
            }
          },
          {
            "@type": "Question",
            "name": "How does EvidenceLog verify mandatory Fallback & Rollback plans in Jira tickets?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "EvidenceLog inspects Jira ticket descriptions and custom fields for structured rollback strategies (such as Git revert commits, feature flag toggles, or database migration down-scripts). If missing, developers can click '[+ Append Rollback Plan]' directly in Jira to inject a compliant template in 1 click."
            }
          },
          {
            "@type": "Question",
            "name": "Can EvidenceLog satisfy both SOC 2 CC8.1 and ISO 27001:2022 A.8.32 simultaneously?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "Yes. AICPA SOC 2 CC8.1 and ISO 27001:2022 A.8.32 have 90%+ overlapping change management requirements. EvidenceLog's single in-tenant verification engine evaluates both standards at ticket transition and outputs consolidated workpapers for both CPA firms and ISO certification bodies."
            }
          },
          {
            "@type": "Question",
            "name": "Does EvidenceLog transmit Jira change data or source code outside Atlassian Cloud?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "No. EvidenceLog is 100% native to Atlassian Forge. All compute executes within Atlassian's isolated microVMs, and cryptographic evidence hashes are persisted in your Atlassian Cloud tenant's encrypted key-value storage (@forge/kvs) with strict zero external network egress."
            }
          }
        ]
      }
    ]
  };

  const controlsMatrix = [
    {
      clause: "A.8.32 (a): Change Planning & Security Risk Assessment",
      isoRequirement: "Changes to information processing systems and software must be planned with evaluated impact on information security.",
      auditorExpectation: "Risk assessment tier (Low, Medium, High, Critical), security impact review, and dependency identification on the ticket.",
      evidenceLogSolution: "Parses Jira issue type, risk matrix custom fields, and security labels. 1-click quick-fix injects standardized ISO risk evaluation checklist.",
      status: "AUTOMATED",
    },
    {
      clause: "A.8.32 (b): Business Justification & Formal Authorization",
      isoRequirement: "Changes must be justified by business requirements and approved by designated management prior to implementation.",
      auditorExpectation: "Documented business rationale, user story acceptance criteria (BDD Given/When/Then), and product owner sign-off.",
      evidenceLogSolution: "ADF parser scans description for acceptance criteria and business rationale. Verifies approval transitions or JSM CAB reviewer approvals.",
      status: "AUTOMATED",
    },
    {
      clause: "A.8.32 (c): Segregation of Duties & Independent Peer Review",
      isoRequirement: "Incompatible duties must be segregated (A.5.3, A.8.31). Developers cannot unilaterally approve or deploy their own changes.",
      auditorExpectation: "Proof that code review and approval were executed by an independent qualified engineer distinct from the author and assignee.",
      evidenceLogSolution: "Validates Git pull request reviewers (GitHub, GitLab, Bitbucket) and Jira changelog. Flags and blocks author self-approval in real time.",
      status: "AUTOMATED",
    },
    {
      clause: "A.8.32 (d): Non-Production Testing & Acceptance Verification",
      isoRequirement: "Changes must be tested and verified in non-production environments (A.8.29) prior to operational deployment.",
      auditorExpectation: "Automated test execution logs (unit/integration/E2E), staging environment verification tags, or explicit QA sign-off comment.",
      evidenceLogSolution: "Scans for qa-verified, staging-passed labels, CI/CD pipeline link statuses, and QA approval comments in Jira comment threads.",
      status: "AUTOMATED",
    },
    {
      clause: "A.8.32 (e): Fallback & Rollback Procedures",
      isoRequirement: "Procedures for aborting changes and recovering from unsuccessful changes must be defined, tested, and documented.",
      auditorExpectation: "Documented rollback plan: Git revert instructions, container rollback tag, or feature flag kill-switch specified before release.",
      evidenceLogSolution: "Detects rollback instructions in Jira ADF description. In-situ button [+ Append Rollback Plan] provides 1-click ISO-compliant template.",
      status: "AUTOMATED",
    },
    {
      clause: "A.8.32 (f): Post-Implementation Review (PIR) & Audit Trail",
      isoRequirement: "Changes must be reviewed after deployment to verify success and logged in an immutable, tamper-evident audit trail (A.8.15).",
      auditorExpectation: "Timestamped transition history, resolution confirmation, and cryptographic non-repudiation proof of ticket state at closure.",
      evidenceLogSolution: "Calculates deterministic SHA-256 fingerprint of ticket state upon resolution; seals it in Atlassian Forge encrypted KVS for 1-click auditor export.",
      status: "AUTOMATED",
    },
  ];

  return (
    <div className="relative min-h-screen bg-white font-sans text-[#5c728e] selection:bg-[#dbf1c3] selection:text-[#0f5132]">
      {/* Structured Data for Google Rich Snippets */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />

      <Navbar isProductPage={false} />

      <main className="relative pt-12 pb-24 border-t border-slate-100">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          {/* Breadcrumb Navigation */}
          <div className="flex items-center gap-2 text-xs font-semibold text-[#5c728e] mb-8">
            <Link href="/" className="hover:text-[#111013] transition-colors flex items-center gap-1.5">
              <ArrowLeft className="h-3.5 w-3.5" />
              <span>EvidenceLog Home</span>
            </Link>
            <span className="text-slate-300">/</span>
            <span className="text-[#15803d]">Compliance Frameworks</span>
            <span className="text-slate-300">/</span>
            <span className="text-[#111013] font-bold">ISO 27001:2022 A.8.32 Guide</span>
          </div>

          {/* Hero Header */}
          <div className="max-w-4xl space-y-5 mb-16">
            <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-[#dbf1c3]/70 border border-[#b8e29a] text-[#15803d] font-bold text-xs tracking-wider uppercase font-heading">
              <ShieldCheck className="h-4 w-4" />
              <span>ISO/IEC 27001:2022 ANNEX A TECHNICAL SPECIFICATION</span>
            </div>

            <h1 className="text-3xl sm:text-5xl lg:text-6xl font-bold tracking-tight text-[#111013] font-heading leading-[1.12]">
              Automate ISO 27001:2022 Control A.8.32 in Jira Cloud
            </h1>

            <p className="text-base sm:text-xl text-[#5c728e] leading-relaxed max-w-3xl">
              The complete engineering blueprint to satisfy ISO/IEC 27001:2022 Control A.8.32 (Change Management). Eliminate manual Confluence CAB forms and screenshotting with automated in-situ Jira checks, fallback verification, and cryptographic SHA-256 change seals.
            </p>

            <div className="flex flex-wrap items-center gap-4 pt-2">
              <a
                href="https://marketplace.atlassian.com"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-xl bg-[#111013] text-white hover:bg-[#15803d] font-semibold text-sm transition-all shadow-md hover:shadow-lg cursor-pointer"
              >
                <span>Install Free on Atlassian Marketplace</span>
                <ArrowRight className="h-4 w-4" />
              </a>

              <Link
                href="/frameworks/soc2-cc81"
                className="inline-flex items-center justify-center gap-2 px-5 py-3.5 rounded-xl bg-white text-[#111013] border border-slate-300 hover:border-[#111013] font-semibold text-sm transition-all shadow-xs cursor-pointer"
              >
                <FileCheck2 className="h-4 w-4 text-[#15803d]" />
                <span>View SOC 2 CC8.1 Guide ↗</span>
              </Link>
            </div>

            <div className="flex flex-wrap items-center gap-6 text-xs text-slate-500 pt-3">
              <span>Author: <strong>Langtago Security &amp; Compliance Team</strong></span>
              <span>•</span>
              <span>Updated: <strong>November 2026</strong></span>
              <span>•</span>
              <span>ISO 27001 Revision: <strong>2022 Edition (Annex A Control 8.32)</strong></span>
              <span>•</span>
              <span>Reading Time: <strong>8 min</strong></span>
            </div>
          </div>

          {/* Key Metric / Problem Statement Callout */}
          <div className="mb-16 rounded-3xl bg-[#fbfdfc] border border-slate-200/90 p-6 sm:p-10 shadow-sm">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
              <div className="lg:col-span-8 space-y-3">
                <div className="inline-block rounded-md bg-amber-100 text-amber-900 px-2.5 py-0.5 text-xs font-bold uppercase tracking-wider">
                  The ISO 27001 Audit Reality
                </div>
                <h2 className="text-2xl sm:text-3xl font-bold text-[#111013] font-heading">
                  Why ISO 27001 Stage 2 Audits Stall on Change Records
                </h2>
                <p className="text-sm sm:text-base text-[#5c728e] leading-relaxed">
                  During ISO/IEC 27001 Stage 1 and Stage 2 certification audits (and annual surveillance audits by accredited registrars like BSI, TÜV, Bureau Veritas, or A-LIGN), lead auditors sample 30 to 50 software changes deployed over the preceding 12 months.
                </p>
                <p className="text-sm sm:text-base text-[#5c728e] leading-relaxed">
                  Auditors demand proof of six explicit criteria for every single ticket: business authorization, security risk evaluation, segregation of duties, pre-release testing sign-off, documented fallback/rollback instructions, and post-deployment confirmation. When teams rely on manual screenshotting and fragmented Jira comments, engineering leads lose 140+ hours per audit cycle assembling spreadsheets.
                </p>
                <div className="pt-2">
                  <Link
                    href="/compare/manual-screenshots-vs-evidencelog"
                    className="inline-flex items-center gap-1.5 text-xs font-bold text-[#15803d] hover:underline"
                  >
                    <span>Read comparative benchmark: Manual Screenshots vs. EvidenceLog ↗</span>
                  </Link>
                </div>
              </div>

              <div className="lg:col-span-4 rounded-2xl bg-[#111013] text-white p-6 space-y-4 shadow-md">
                <div className="text-xs font-bold uppercase tracking-wider text-[#dbf1c3] font-heading">
                  EvidenceLog for ISO 27001
                </div>
                <div className="text-4xl font-extrabold text-[#dbf1c3] font-heading">
                  6 / 6 Controls
                </div>
                <p className="text-xs text-slate-300 leading-relaxed">
                  Every dimension of Control A.8.32 is verified natively inside Jira before tickets transition to Done. Sealing immutable SHA-256 evidence directly in Atlassian Forge.
                </p>
                <div className="pt-2 border-t border-white/10">
                  <span className="text-[11px] font-mono text-emerald-400">
                    ✔ 100% Lead Auditor Workpaper Ready
                  </span>
                </div>
              </div>
            </div>
          </div>

          {/* Section 1: The 6 Dimensions of Control A.8.32 */}
          <section className="mb-20 space-y-6">
            <div className="max-w-3xl">
              <h2 className="text-2xl sm:text-4xl font-bold text-[#111013] font-heading mb-4">
                1. What Does ISO/IEC 27001:2022 Control A.8.32 Require?
              </h2>
              <p className="text-sm sm:text-base text-[#5c728e] leading-relaxed">
                In the 2022 revision of ISO/IEC 27001, previous Control A.12.1.2 was updated and restructured into <strong>Control A.8.32 (Change Management)</strong> under the Technological Controls theme. The standard formally states:
              </p>
              <blockquote className="my-4 border-l-4 border-[#15803d] bg-slate-50 p-4 rounded-r-xl text-sm italic text-[#111013] font-serif">
                &ldquo;Changes to information processing facilities and systems shall be subject to change control procedures.&rdquo;
              </blockquote>
              <p className="text-sm sm:text-base text-[#5c728e] leading-relaxed">
                ISO 27002:2022 implementation guidance delineates six mandatory pillars that must be documented and auditable for every production release:
              </p>
            </div>

            {/* The 6 Pillars Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 pt-4">
              <div className="rounded-2xl border border-slate-200 bg-white p-6 shadow-xs space-y-3">
                <div className="h-10 w-10 rounded-xl bg-[#111013] text-[#dbf1c3] flex items-center justify-center">
                  <ClipboardList className="h-5 w-5" />
                </div>
                <h3 className="text-base font-bold text-[#111013] font-heading">
                  1. Risk &amp; Impact Planning
                </h3>
                <p className="text-xs text-[#5c728e] leading-relaxed">
                  Changes must assess potential impact on information security, system availability, and data confidentiality prior to code development.
                </p>
              </div>

              <div className="rounded-2xl border border-slate-200 bg-white p-6 shadow-xs space-y-3">
                <div className="h-10 w-10 rounded-xl bg-[#111013] text-[#dbf1c3] flex items-center justify-center">
                  <FileCheck2 className="h-5 w-5" />
                </div>
                <h3 className="text-base font-bold text-[#111013] font-heading">
                  2. Business Authorization
                </h3>
                <p className="text-xs text-[#5c728e] leading-relaxed">
                  Every change requires clear business justification and formal authorization by designated system owners before implementation.
                </p>
              </div>

              <div className="rounded-2xl border border-slate-200 bg-white p-6 shadow-xs space-y-3">
                <div className="h-10 w-10 rounded-xl bg-[#111013] text-[#dbf1c3] flex items-center justify-center">
                  <Users className="h-5 w-5" />
                </div>
                <h3 className="text-base font-bold text-[#111013] font-heading">
                  3. Segregation of Duties (SoD)
                </h3>
                <p className="text-xs text-[#5c728e] leading-relaxed">
                  Separation of development and operational responsibilities (A.5.3, A.8.31). The engineer authoring the code cannot approve or deploy it.
                </p>
              </div>

              <div className="rounded-2xl border border-slate-200 bg-white p-6 shadow-xs space-y-3">
                <div className="h-10 w-10 rounded-xl bg-[#111013] text-[#dbf1c3] flex items-center justify-center">
                  <TestTube2 className="h-5 w-5" />
                </div>
                <h3 className="text-base font-bold text-[#111013] font-heading">
                  4. Testing &amp; Acceptance
                </h3>
                <p className="text-xs text-[#5c728e] leading-relaxed">
                  Mandatory testing in non-production staging environments (A.8.29) with verifiable test outputs and independent QA or peer sign-off.
                </p>
              </div>

              <div className="rounded-2xl border border-slate-200 bg-white p-6 shadow-xs space-y-3">
                <div className="h-10 w-10 rounded-xl bg-[#111013] text-[#dbf1c3] flex items-center justify-center">
                  <Undo2 className="h-5 w-5" />
                </div>
                <h3 className="text-base font-bold text-[#111013] font-heading">
                  5. Fallback &amp; Rollback Plan
                </h3>
                <p className="text-xs text-[#5c728e] leading-relaxed">
                  Documented and verified backout procedures to restore systems to a known stable state if the deployment fails or degrades performance.
                </p>
              </div>

              <div className="rounded-2xl border border-emerald-200 bg-emerald-50/50 p-6 shadow-xs space-y-3 flex flex-col justify-between">
                <div>
                  <div className="h-10 w-10 rounded-xl bg-[#15803d] text-white flex items-center justify-center">
                    <Sparkles className="h-5 w-5" />
                  </div>
                  <h3 className="text-base font-bold text-[#111013] font-heading mb-1 mt-3">
                    6. Cryptographic Audit Seal
                  </h3>
                  <p className="text-xs text-[#5c728e] leading-relaxed">
                    Tamper-evident logging (A.8.15) sealing ticket state with SHA-256 for instant export to ISO Lead Auditors and GRC platforms.
                  </p>
                </div>
                <a
                  href="https://marketplace.atlassian.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-xs font-bold text-[#15803d] hover:underline inline-flex items-center gap-1 pt-2"
                >
                  <span>Install Free App on Jira</span>
                  <ArrowRight className="h-3 w-3" />
                </a>
              </div>
            </div>
          </section>

          {/* Section 2: Complete Control Matrix */}
          <section className="mb-20">
            <div className="max-w-3xl mb-8">
              <h2 className="text-2xl sm:text-4xl font-bold text-[#111013] font-heading mb-3">
                2. Complete ISO 27001:2022 Control A.8.32 Mapping Matrix
              </h2>
              <p className="text-sm text-[#5c728e]">
                How EvidenceLog translates international ISO/IEC 27001:2022 registrar expectations into automated Jira Cloud verification checks.
              </p>
            </div>

            <div className="overflow-x-auto rounded-2xl border border-slate-200 bg-white shadow-xs">
              <table className="w-full text-left text-xs border-collapse">
                <thead>
                  <tr className="border-b border-slate-200 bg-slate-50 text-[#111013] font-heading uppercase tracking-wider text-[11px]">
                    <th className="p-4 sm:p-5">ISO 27001:2022 Clause</th>
                    <th className="p-4 sm:p-5">Standard Requirement</th>
                    <th className="p-4 sm:p-5">Lead Auditor Expectation</th>
                    <th className="p-4 sm:p-5">EvidenceLog Automation</th>
                    <th className="p-4 sm:p-5 text-center">Status</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-slate-100 text-slate-600">
                  {controlsMatrix.map((item, idx) => (
                    <tr key={idx} className="hover:bg-slate-50/70 transition-colors">
                      <td className="p-4 sm:p-5 font-bold text-[#111013] max-w-[200px]">
                        {item.clause}
                      </td>
                      <td className="p-4 sm:p-5 text-slate-500 max-w-[220px] leading-relaxed">
                        {item.isoRequirement}
                      </td>
                      <td className="p-4 sm:p-5 text-slate-700 max-w-[220px] leading-relaxed">
                        {item.auditorExpectation}
                      </td>
                      <td className="p-4 sm:p-5 text-[#15803d] font-medium max-w-[250px] leading-relaxed">
                        {item.evidenceLogSolution}
                      </td>
                      <td className="p-4 sm:p-5 text-center">
                        <span className="inline-flex items-center gap-1 rounded-full bg-emerald-100 px-2.5 py-1 text-[10px] font-bold text-emerald-800 font-mono">
                          <CheckCircle2 className="h-3 w-3" />
                          <span>{item.status}</span>
                        </span>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </section>

          {/* Section 3: Fallback & Rollback Plan Deep Dive */}
          <section className="mb-20 rounded-3xl bg-[#fbfdfc] border border-slate-200 p-8 sm:p-12 shadow-sm space-y-8">
            <div className="max-w-3xl space-y-3">
              <div className="inline-block rounded-md bg-[#dbf1c3] text-[#0f5132] px-2.5 py-0.5 text-xs font-bold uppercase tracking-wider font-heading">
                CRITICAL ISO REQUIREMENT: A.8.32 (e)
              </div>
              <h2 className="text-2xl sm:text-4xl font-bold text-[#111013] font-heading">
                Automated Fallback &amp; Rollback Plan Verification
              </h2>
              <p className="text-sm sm:text-base text-[#5c728e] leading-relaxed">
                Unlike general SOC 2 reviews, ISO 27001:2022 Lead Auditors place strict emphasis on <strong>abort procedures and fallback plans</strong>. If a change causes an unexpected service outage or data corruption, the engineering team must demonstrate that backout plans were formulated and tested <em>before</em> code was deployed.
              </p>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
              <div className="lg:col-span-6 space-y-4 text-xs sm:text-sm text-[#5c728e] leading-relaxed">
                <p>
                  EvidenceLog&apos;s in-situ parser inspects the Jira Atlassian Document Format (ADF) description, custom fields, and linked sub-tasks for structured rollback declarations:
                </p>
                <ul className="space-y-2.5 pl-4 list-disc text-slate-700">
                  <li>
                    <strong>Git Revert Readiness:</strong> Verification of clean merge commit parent hash or designated rollback branch.
                  </li>
                  <li>
                    <strong>Feature Flag Kill-Switch:</strong> Presence of LaunchDarkly, Unleash, or PostHog feature flag keys with documented toggle procedures.
                  </li>
                  <li>
                    <strong>Database Schema Reversibility:</strong> Backwards-compatible migrations or down-migration scripts specified for schema shifts.
                  </li>
                </ul>
                <p className="pt-2">
                  If no fallback plan is detected, EvidenceLog renders an interactive in-situ quick-fix button directly in the Jira ticket glance:
                </p>
                <div className="rounded-xl border border-slate-200 bg-white p-3 font-mono text-xs text-[#111013] flex items-center justify-between shadow-2xs">
                  <span>[+ Append ISO 27001 Rollback Template]</span>
                  <span className="text-[#15803d] font-bold">1 Click</span>
                </div>
              </div>

              <div className="lg:col-span-6 rounded-2xl bg-[#111013] text-white p-6 font-mono text-xs space-y-3 shadow-lg">
                <div className="flex items-center justify-between border-b border-white/10 pb-2 text-slate-400">
                  <span className="flex items-center gap-1.5">
                    <Terminal className="h-3.5 w-3.5 text-[#dbf1c3]" />
                    <span>EvidenceLog Rollback Plan Template</span>
                  </span>
                  <span className="text-emerald-400">ISO A.8.32(e)</span>
                </div>
                <div className="text-slate-300 space-y-2 text-[11px] leading-relaxed">
                  <p className="text-[#dbf1c3] font-bold">## ISO 27001 Fallback &amp; Rollback Plan</p>
                  <p>
                    <span className="text-slate-400">1. Trigger Condition:</span> Error rate &gt; 0.5% or latency &gt; 250ms for 3 consecutive minutes post-deploy.
                  </p>
                  <p>
                    <span className="text-slate-400">2. Reversal Action:</span> Run `git revert -m 1 &lt;merge_commit&gt;` or toggle flag `feat_checkout_v2` to OFF.
                  </p>
                  <p>
                    <span className="text-slate-400">3. Verification:</span> Healthcheck endpoint `/healthz` returning 200 OK within 60s.
                  </p>
                  <p>
                    <span className="text-slate-400">4. Responsible Engineer:</span> Assigned deployer or on-call SRE.
                  </p>
                </div>
                <div className="pt-2 border-t border-white/10 text-[10px] text-slate-400 flex items-center justify-between">
                  <span>Injected natively via Jira REST API</span>
                  <span className="text-emerald-400 font-bold">PASSES VALIDATOR</span>
                </div>
              </div>
            </div>
          </section>

          {/* Section 4: The Preventive Workflow Gatekeeper */}
          <section className="mb-20 rounded-3xl bg-[#111013] text-white p-8 sm:p-12 shadow-xl">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
              <div className="lg:col-span-7 space-y-4">
                <div className="inline-block rounded-md bg-white/10 px-3 py-1 text-xs font-bold uppercase tracking-wider text-[#dbf1c3] font-heading">
                  PREVENTIVE WORKFLOW ENFORCEMENT
                </div>
                <h2 className="text-2xl sm:text-4xl font-bold font-heading text-white leading-tight">
                  Stop Non-Compliant Changes at the Jira Transition
                </h2>
                <p className="text-sm text-slate-300 leading-relaxed">
                  ISO 27001 non-conformities occur when unreviewed or unapproved changes slip into production. Rather than discovering missing test notes or self-approvals months later during an audit, EvidenceLog implements a preventive <strong>Jira Workflow Validator</strong>.
                </p>
                <p className="text-sm text-slate-300 leading-relaxed">
                  When a developer attempts to move a ticket into &ldquo;Done&rdquo;, &ldquo;Ready for Release&rdquo;, or &ldquo;Production Deployed&rdquo;, EvidenceLog programmatically validates all 6 dimensions in real time. If any control is unfulfilled, the transition is halted immediately with clear, actionable remediation.
                </p>

                <div className="pt-2 flex flex-col sm:flex-row items-start sm:items-center gap-4 text-xs font-mono text-slate-300">
                  <div className="flex items-center gap-1.5">
                    <CheckCircle2 className="h-4 w-4 text-[#dbf1c3]" />
                    <span>0 Unapproved Merges</span>
                  </div>
                  <div className="flex items-center gap-1.5">
                    <CheckCircle2 className="h-4 w-4 text-[#dbf1c3]" />
                    <span>Emergency Incident CAB Overrides</span>
                  </div>
                </div>
              </div>

              {/* Block Notification Mockup */}
              <div className="lg:col-span-5 rounded-2xl bg-black/60 border border-white/10 p-5 font-mono text-xs text-slate-300 space-y-3">
                <div className="flex items-center justify-between border-b border-white/10 pb-2.5 text-slate-400">
                  <span>Jira Workflow Validator</span>
                  <span className="text-rose-400 font-bold">TRANSITION HALTED</span>
                </div>
                <div className="text-rose-300 space-y-1">
                  <p className="text-white font-semibold">
                    [EvidenceLog ISO Gatekeeper] Validation Failed:
                  </p>
                  <p className="text-slate-400 pl-2">
                    ✖ A.8.32(c): Author (sarah.m) cannot approve own PR. Independent peer approval required.
                  </p>
                  <p className="text-slate-400 pl-2">
                    ✖ A.8.32(e): Missing documented Fallback/Rollback procedure in description.
                  </p>
                </div>
                <div className="pt-2 border-t border-white/10 text-emerald-400 text-[11px]">
                  💡 Quick-Fix: Click &ldquo;[+ Append Rollback Plan]&rdquo; in the Jira sidebar to resolve.
                </div>
              </div>
            </div>
          </section>

          {/* Section 5: Cryptographic Workpapers & Lead Auditor Export */}
          <section className="mb-20 space-y-8">
            <div className="max-w-3xl">
              <h2 className="text-2xl sm:text-4xl font-bold text-[#111013] font-heading mb-3">
                3. Lead Auditor-Ready Workpapers &amp; Offline Cryptographic Proof
              </h2>
              <p className="text-sm text-[#5c728e] leading-relaxed">
                When external ISO registrars perform their technical surveillance audit, they need verifiable records that cannot be forged. EvidenceLog generates structured, certified workpapers in 1 click from the Project Audit Hub.
              </p>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-stretch">
              {/* Canonical JSON Payload Card */}
              <div className="rounded-2xl border border-slate-200 bg-white p-6 shadow-xs space-y-4 flex flex-col justify-between">
                <div>
                  <div className="flex items-center justify-between">
                    <span className="text-xs font-bold uppercase tracking-wider text-[#15803d] font-heading">
                      CANONICAL JSON EVIDENCE SCHEMA
                    </span>
                    <span className="rounded-md bg-slate-100 px-2 py-0.5 font-mono text-[10px] text-slate-600">
                      RFC-8785 Canonicalized
                    </span>
                  </div>
                  <h3 className="text-base font-bold text-[#111013] font-heading mt-2">
                    Deterministic SHA-256 Audit Seal
                  </h3>
                  <p className="text-xs text-[#5c728e] leading-relaxed mt-1">
                    Every certified change produces a deterministic hash representing author, reviewer, commit hashes, test results, and rollback plans. Any retrospective modification breaks the cryptographic seal.
                  </p>

                  <div className="mt-4 rounded-xl bg-slate-900 p-4 font-mono text-[11px] text-emerald-300 overflow-x-auto leading-relaxed">
                    <pre>{`{
  "iso_control": "ISO/IEC 27001:2022 A.8.32",
  "issue_key": "PROD-2481",
  "risk_tier": "MEDIUM",
  "author_account_id": "usr_7819ab",
  "peer_approver_account_id": "usr_9021cd",
  "git_repo": "github.com/org/checkout-svc",
  "pull_request_id": 482,
  "merge_commit_sha": "7f9b209e8b1d...",
  "qa_signoff": {
    "status": "PASSED",
    "verified_by": "alex.qa@org.com",
    "timestamp": "2026-11-10T04:18:22Z"
  },
  "rollback_strategy": "git revert -m 1 7f9b209e",
  "canonical_sha256": "4b68e7f12e8c9...31a8"
}`}</pre>
                  </div>
                </div>

                <div className="pt-2 text-xs text-slate-500 border-t border-slate-100 flex items-center justify-between">
                  <span>Offline verifiable without Jira login</span>
                  <Link href="/docs/verifier.html" className="text-[#15803d] font-semibold hover:underline">
                    Run Verifier ↗
                  </Link>
                </div>
              </div>

              {/* Big 4 / Registrar CSV Export */}
              <div className="rounded-2xl border border-slate-200 bg-white p-6 shadow-xs space-y-4 flex flex-col justify-between">
                <div>
                  <div className="flex items-center justify-between">
                    <span className="text-xs font-bold uppercase tracking-wider text-[#15803d] font-heading">
                      1-CLICK AUDITOR DOSSIER
                    </span>
                    <span className="rounded-md bg-slate-100 px-2 py-0.5 font-mono text-[10px] text-slate-600">
                      CSV &amp; PDF Export
                    </span>
                  </div>
                  <h3 className="text-base font-bold text-[#111013] font-heading mt-2">
                    Universal Registrar Workpaper Format
                  </h3>
                  <p className="text-xs text-[#5c728e] leading-relaxed mt-1">
                    Export complete release dossiers directly into the standardized format requested by BSI, TÜV, Bureau Veritas, Schellman, and Big 4 compliance auditors.
                  </p>

                  <div className="mt-4 rounded-xl border border-slate-200 bg-slate-50 p-4 font-mono text-[11px] text-slate-700 space-y-2 leading-relaxed">
                    <p className="font-bold text-[#111013] border-b border-slate-200 pb-1">
                      ISO_27001_A832_Audit_Workpaper_Release_v2.4.csv
                    </p>
                    <p className="text-slate-500 text-[10px]">
                      IssueKey, Summary, Author, Reviewer, PR, MergeSHA, QAStatus, RollbackPlan, SealedSHA256, AuditResult
                    </p>
                    <p className="text-emerald-700 bg-emerald-50 p-1.5 rounded text-[10px]">
                      PROD-2481, &quot;Optimize Stripe webhook&quot;, sarah.m, devin.k, PR#482, 7f9b209e, PASSED, &quot;git revert&quot;, 4b68e7f1..., COMPLIANT
                    </p>
                    <p className="text-emerald-700 bg-emerald-50 p-1.5 rounded text-[10px]">
                      PROD-2482, &quot;Upgrade Redis TLS client&quot;, marcus.t, elena.r, PR#483, 8a1c990f, PASSED, &quot;downgrade image&quot;, 99d214a..., COMPLIANT
                    </p>
                  </div>
                </div>

                <div className="pt-2 text-xs text-slate-500 border-t border-slate-100 flex items-center justify-between">
                  <span>Plugs directly into Vanta &amp; Drata GRC</span>
                  <span className="text-slate-700 font-medium">Export in 5 seconds</span>
                </div>
              </div>
            </div>
          </section>

          {/* Section 6: Step-by-Step 5-Minute Implementation */}
          <section className="mb-20 space-y-8">
            <div className="max-w-3xl">
              <h2 className="text-2xl sm:text-4xl font-bold text-[#111013] font-heading mb-3">
                4. 5-Minute Implementation Guide for Engineering Leads
              </h2>
              <p className="text-sm text-[#5c728e]">
                How to activate automated ISO 27001:2022 Control A.8.32 verification across your Jira Cloud instance today:
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
              <div className="rounded-2xl border border-slate-200 bg-white p-6 shadow-xs space-y-3">
                <div className="h-8 w-8 rounded-full bg-[#111013] text-[#dbf1c3] font-bold text-xs flex items-center justify-center font-mono">
                  01
                </div>
                <h3 className="text-base font-bold text-[#111013] font-heading">
                  Install from Marketplace
                </h3>
                <p className="text-xs text-[#5c728e] leading-relaxed">
                  Search &ldquo;EvidenceLog&rdquo; on the Atlassian Marketplace and install it with 1 click. Free forever for squads up to 10 users with zero external servers.
                </p>
              </div>

              <div className="rounded-2xl border border-slate-200 bg-white p-6 shadow-xs space-y-3">
                <div className="h-8 w-8 rounded-full bg-[#111013] text-[#dbf1c3] font-bold text-xs flex items-center justify-center font-mono">
                  02
                </div>
                <h3 className="text-base font-bold text-[#111013] font-heading">
                  Link Git Provider
                </h3>
                <p className="text-xs text-[#5c728e] leading-relaxed">
                  Ensure GitHub, GitLab, or Bitbucket is connected to Jira. Pull requests, commit hashes, and reviewers are discovered automatically.
                </p>
              </div>

              <div className="rounded-2xl border border-slate-200 bg-white p-6 shadow-xs space-y-3">
                <div className="h-8 w-8 rounded-full bg-[#111013] text-[#dbf1c3] font-bold text-xs flex items-center justify-center font-mono">
                  03
                </div>
                <h3 className="text-base font-bold text-[#111013] font-heading">
                  Enable ISO Gatekeeper
                </h3>
                <p className="text-xs text-[#5c728e] leading-relaxed">
                  In your Jira project workflow transition rules, add the EvidenceLog Validator to your &ldquo;Done&rdquo; or &ldquo;Released&rdquo; transition.
                </p>
              </div>

              <div className="rounded-2xl border border-slate-200 bg-white p-6 shadow-xs space-y-3">
                <div className="h-8 w-8 rounded-full bg-[#111013] text-[#dbf1c3] font-bold text-xs flex items-center justify-center font-mono">
                  04
                </div>
                <h3 className="text-base font-bold text-[#111013] font-heading">
                  Export Audit Dossier
                </h3>
                <p className="text-xs text-[#5c728e] leading-relaxed">
                  When your ISO registrar arrives, open the Jira sidebar &ldquo;EvidenceLog Audit Hub&rdquo; and click &ldquo;Download ISO 27001 Release Dossier&rdquo;.
                </p>
              </div>
            </div>
          </section>

          {/* Section 7: ISO 27001 FAQ */}
          <section className="mb-20 max-w-4xl mx-auto space-y-6">
            <div className="text-center mb-10">
              <h2 className="text-2xl sm:text-4xl font-bold text-[#111013] font-heading mb-2">
                Frequently Asked Questions: ISO 27001:2022 A.8.32
              </h2>
              <p className="text-sm text-[#5c728e]">
                Straightforward technical answers for CISOs, security officers, and dev leads.
              </p>
            </div>

            <div className="space-y-4">
              <div className="rounded-2xl border border-slate-200 p-6 bg-white shadow-2xs">
                <h3 className="text-base font-bold text-[#111013] mb-2">
                  How does ISO 27001:2022 Control A.8.32 differ from SOC 2 Criterion CC8.1?
                </h3>
                <p className="text-sm text-[#5c728e] leading-relaxed">
                  Both frameworks mandate change authorization, segregation of duties, testing, and peer review. However, ISO 27001:2022 places explicit structural emphasis on two additional requirements: <strong>documented risk assessment before development (clause a)</strong> and <strong>mandatory fallback/rollback procedures (clause e)</strong>. EvidenceLog natively validates both requirements in Jira, allowing engineering teams to satisfy both certifications with a single unified workflow.
                </p>
              </div>

              <div className="rounded-2xl border border-slate-200 p-6 bg-white shadow-2xs">
                <h3 className="text-base font-bold text-[#111013] mb-2">
                  How are emergency hotfixes handled during production incidents?
                </h3>
                <p className="text-sm text-[#5c728e] leading-relaxed">
                  Under ISO 27001:2022, emergency changes for Sev-1 outages or zero-day security vulnerabilities can follow an expedited deployment path provided there is formal post-implementation review (PIR) and retroactive CAB sign-off. EvidenceLog detects emergency labels (<code className="font-mono text-xs bg-slate-100 text-rose-700 px-1 py-0.5 rounded">hotfix</code>, <code className="font-mono text-xs bg-slate-100 text-rose-700 px-1 py-0.5 rounded">emergency-cab</code>), marks them as Emergency Changes, and highlights them in the Project Audit Hub for retrospective sign-off within 48 hours.
                </p>
              </div>

              <div className="rounded-2xl border border-slate-200 p-6 bg-white shadow-2xs">
                <h3 className="text-base font-bold text-[#111013] mb-2">
                  Can external ISO Lead Auditors verify EvidenceLog hashes offline?
                </h3>
                <p className="text-sm text-[#5c728e] leading-relaxed">
                  Yes. You do not need to issue expensive Jira licenses to external ISO auditors. EvidenceLog provides a zero-dependency, open-source standalone HTML verifier (<Link href="/docs/verifier.html" className="text-[#15803d] font-semibold hover:underline">docs/verifier.html</Link>) that auditors can run directly in their web browsers without internet access. It recalculates SHA-256 digests and proves tickets were never altered post-deployment.
                </p>
              </div>

              <div className="rounded-2xl border border-slate-200 p-6 bg-white shadow-2xs">
                <h3 className="text-base font-bold text-[#111013] mb-2">
                  Does EvidenceLog store customer code or proprietary issue details?
                </h3>
                <p className="text-sm text-[#5c728e] leading-relaxed">
                  Zero customer code, source repositories, or proprietary issue descriptions leave your Atlassian Cloud environment. EvidenceLog is built 100% on Atlassian Forge and uses Atlassian Forge Key-Value Storage (<code className="font-mono text-xs bg-slate-100 text-slate-800 px-1 py-0.5 rounded">@forge/kvs</code>), inheriting your enterprise Atlassian Cloud data residency boundaries with strict zero network egress.
                </p>
              </div>
            </div>
          </section>

          {/* Bottom Conversion Card */}
          <div className="rounded-3xl bg-[#111013] text-white p-8 sm:p-14 text-center space-y-6 shadow-2xl relative overflow-hidden">
            <div className="inline-block rounded-md bg-[#dbf1c3] px-3 py-1 text-xs font-bold uppercase tracking-wider text-[#0f5132] font-heading">
              FREE FOR SQUADS UP TO 10 USERS &bull; 100% FORGE NATIVE
            </div>

            <h2 className="text-3xl sm:text-5xl font-bold font-heading text-white max-w-2xl mx-auto leading-tight">
              Ready to automate ISO 27001 change evidence in Jira?
            </h2>

            <p className="text-sm sm:text-base text-slate-300 max-w-xl mx-auto leading-relaxed">
              Install EvidenceLog into your Jira Cloud instance today. Stop wasting engineering hours on manual audit screenshots and pass your next ISO Stage 2 surveillance audit with zero findings.
            </p>

            <div className="pt-2 flex flex-col sm:flex-row items-center justify-center gap-4">
              <a
                href="https://marketplace.atlassian.com"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 py-4 px-8 rounded-xl bg-[#dbf1c3] hover:bg-white text-[#111013] text-sm font-bold shadow-lg transition-all cursor-pointer"
              >
                <span>Install Free on Atlassian Marketplace</span>
                <ArrowRight className="h-4 w-4" />
              </a>

              <Link
                href="/compare/manual-screenshots-vs-evidencelog"
                className="inline-flex items-center justify-center gap-2 py-4 px-7 rounded-xl bg-transparent hover:bg-white/10 text-white text-sm font-semibold border border-white/20 transition-all cursor-pointer"
              >
                <span>Compare vs. Manual Evidence</span>
              </Link>
            </div>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
}
