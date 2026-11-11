import Link from "next/link";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import GrcPayloadViewer from "@/components/GrcPayloadViewer";
import {
  CheckCircle2,
  ArrowRight,
  ArrowLeft,
  FileCheck2,
  Lock,
  RefreshCw,
  Layers,
  Check,
  AlertCircle,
  Code2,
} from "lucide-react";

export const metadata = {
  title: "Vanta & Drata Continuous Jira Change Evidence — Zero-Screenshot GRC Sync | Langtago",
  description:
    "Connect Jira Cloud to Vanta and Drata with 100% automated change management compliance. Eliminate failing GRC tests, prevent unapproved PRs, enforce QA in Jira, and export certified audit dossiers with zero external data egress.",
  keywords: [
    "Vanta Jira integration",
    "Drata Jira change evidence",
    "Vanta SOC 2 CC8.1 Jira",
    "Drata change management automation",
    "automate Jira evidence for Vanta",
    "GRC change management sync",
    "Jira audit evidence export Vanta",
    "stop screenshotting for Vanta",
    "Drata DCF-87 Jira",
    "Sprinto Jira change controls",
    "Thoropass Jira evidence",
    "Atlassian Forge GRC compliance",
  ],
  openGraph: {
    title: "Vanta & Drata Continuous Jira Change Evidence — Zero-Screenshot GRC Sync",
    description:
      "Stop failing change management tests in Vanta and Drata. Automatically enforce peer review, QA sign-offs, and cryptographic SHA-256 evidence seals directly inside Jira Cloud.",
    url: "https://langtago.com/integrations/vanta-drata",
    siteName: "Langtago — EvidenceLog for Jira",
  },
};

export default function VantaDrataIntegrationPage() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "TechArticle",
        "headline": "Continuous Jira Change Evidence for Vanta & Drata Compliance Platforms",
        "description":
          "A comprehensive technical blueprint for engineering managers, CISOs, and GRC leads to eliminate failing change management tests in Vanta and Drata natively inside Jira Cloud.",
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
        "mainEntityOfPage": "https://langtago.com/integrations/vanta-drata",
      },
      {
        "@type": "FAQPage",
        "mainEntity": [
          {
            "@type": "Question",
            "name": "Does EvidenceLog replace Vanta or Drata?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "No. EvidenceLog is the in-situ developer enforcement companion to Vanta and Drata. While Vanta and Drata monitor organization-wide security controls (MDM, cloud infrastructure, employee onboarding), EvidenceLog operates natively inside Jira Cloud to ensure that 100% of pull requests and tickets pass Vanta and Drata's automated change management tests before deployment.",
            },
          },
          {
            "@type": "Question",
            "name": "Why do change management tests frequently fail in Vanta and Drata?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "Vanta and Drata query Jira Cloud APIs for change controls like Segregation of Duties (CC6.8) and QA sign-off (CC8.1). When engineers forget to link their GitHub PR, merge their own code without peer review, or skip QA tags, Vanta and Drata flag the tickets as failing. EvidenceLog's Preventive Gatekeeper blocks tickets from closing until all 5 compliance controls are satisfied, guaranteeing 100% test pass rates.",
            },
          },
          {
            "@type": "Question",
            "name": "How does EvidenceLog export data to Vanta and Drata?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "EvidenceLog features a dedicated 7-Tab Export Drawer that formats certified compliance records directly into Vanta Schema v1.0 JSON, Drata Change Control v2 JSON, and Big 4 Auditor CSV workpapers. These can be ingested directly into your GRC portal or provided to external auditors.",
            },
          },
          {
            "@type": "Question",
            "name": "Does EvidenceLog introduce third-party vendor risk or external data egress?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "No. EvidenceLog is 100% Atlassian Forge Cloud Native and runs entirely inside Atlassian's secure microVM sandboxes. It has zero external servers, zero outbound network egress, and zero third-party database retention. It inherits Atlassian's enterprise SOC 2 and ISO 27001 security posture, requiring no new vendor risk review.",
            },
          },
        ],
      },
      {
        "@type": "SoftwareApplication",
        "name": "EvidenceLog for Jira — Vanta & Drata GRC Ingestion Suite",
        "operatingSystem": "Atlassian Jira Cloud",
        "applicationCategory": "BusinessApplication",
        "offers": {
          "@type": "Offer",
          "price": "0.00",
          "priceCurrency": "USD",
        },
      },
    ],
  };

  const failingTests = [
    {
      title: "Unlinked Production Commits",
      grcAlert: "Vanta: Unlinked Production Pull Request (CC8.1)",
      cause: "Engineers deploy code to production without linking the Jira issue key to the GitHub/GitLab PR or commit.",
      impact: "Auditors flag the change as unauthorized or untraceable, resulting in audit exceptions.",
      solution: "EvidenceLog automatically detects GitHub, GitLab, Bitbucket, and Azure DevOps links in Jira Remote Links and gatekeeps transitions until linked.",
    },
    {
      title: "Author Self-Approval (SoD Violation)",
      grcAlert: "Drata: Segregation of Duties Exception (DCF-91 / CC6.8)",
      cause: "Change author or assignee self-merges a PR or transitions the ticket to Done without independent peer review.",
      impact: "Direct SOC 2 CC6.8 deficiency requiring executive management exception documentation.",
      solution: "In-situ actor validation ensures Author ≠ Reviewer. Transitions are programmatically blocked if self-approval is attempted.",
    },
    {
      title: "Missing Pre-Release QA Testing",
      grcAlert: "Vanta: Missing Quality Assurance Sign-off (CC8.1 / ISO A.8.29)",
      cause: "Tickets move from In Progress directly to Done without QA workflow transitions, test attachments, or QA tags.",
      impact: "Lead auditors reject sample because functional verification was never demonstrated.",
      solution: "EvidenceLog checks for qa-verified labels, testing comments, or attachments, and offers 1-click in-situ remediation buttons.",
    },
    {
      title: "Pre-Audit Fire Drills & Spreadsheet Rot",
      grcAlert: "GRC Admin: 40+ Failing Tickets 48h Before Audit Window",
      cause: "Compliance teams discover dozens of non-compliant tickets months after deployment, forcing frantic retrospective fixes.",
      impact: "Engineering managers lose 140+ hours hunting down PR links and retroactively taking Jira screenshots.",
      solution: "Continuous, in-situ prevention at ticket close time ensures zero retrospective fire drills. 100% of tickets are certified upon merge.",
    },
  ];

  const controlMappings = [
    {
      regulatoryStandard: "SOC 2 CC8.1 & ISO 27001 A.8.32",
      controlName: "Business Authorization & Requirements Traceability",
      vantaTest: "CHANGE_MANAGEMENT_AUTHORIZATION",
      drataTest: "DCF-87: SDLC Change Authorization",
      evidenceLogRule: "In-situ regex parser validates Given/When/Then BDD criteria or DoD checklist in Jira ADF description before transition.",
      grcStatus: "100% AUTOMATED PASS",
    },
    {
      regulatoryStandard: "SOC 2 CC8.1 & ISO 27001 A.8.32",
      controlName: "Code Linkage & Multi-Cloud Git Traceability",
      vantaTest: "REPOSITORY_PULL_REQUEST_LINKAGE",
      drataTest: "DCF-87: Commit to Ticket Association",
      evidenceLogRule: "Scans Jira Remote Links, commit associations, and PR URLs across GitHub, GitLab, Bitbucket, and Azure DevOps.",
      grcStatus: "100% AUTOMATED PASS",
    },
    {
      regulatoryStandard: "SOC 2 CC6.8 & ISO 27001 A.5.3",
      controlName: "Segregation of Duties & Independent Peer Review",
      vantaTest: "CODE_PEER_REVIEW_ENFORCEMENT",
      drataTest: "DCF-91: Independent Peer Review",
      evidenceLogRule: "Inspects changelog transition actors, remote PR approvers, and Jira custom user fields to ensure Author ≠ Reviewer.",
      grcStatus: "100% AUTOMATED PASS",
    },
    {
      regulatoryStandard: "SOC 2 CC8.1 & ISO 27001 A.8.29",
      controlName: "Pre-Deployment QA & Functional Verification",
      vantaTest: "PRE_RELEASE_TESTING_VERIFICATION",
      drataTest: "DCF-104: Test Execution Sign-Off",
      evidenceLogRule: "Verifies QA workflow states, qa-verified labels, automated CI/CD smoke test flags, and timestamped QA sign-off notes.",
      grcStatus: "100% AUTOMATED PASS",
    },
    {
      regulatoryStandard: "SOC 2 CC7.1 & ISO 27001 A.8.28",
      controlName: "SAST Vulnerability Scanning & Security Review",
      vantaTest: "VULNERABILITY_MANAGEMENT_GATES",
      drataTest: "DCF-118: Automated SAST Verification",
      evidenceLogRule: "Detects Snyk, SonarQube, Trivy, Dependabot, and OWASP ZAP scan passes in tags and issue comments with zero high/critical flaws.",
      grcStatus: "100% AUTOMATED PASS",
    },
    {
      regulatoryStandard: "ISO 27001:2022 Control A.8.32 (e)",
      controlName: "Mandatory Fallback & Rollback Plan",
      vantaTest: "CHANGE_ROLLBACK_PROCEDURES",
      drataTest: "DCF-88: Backout Procedure Documentation",
      evidenceLogRule: "Scans for Git revert commits, feature flag kill-switches, and database down-migrations. 1-click fallback injection for high-risk changes.",
      grcStatus: "100% AUTOMATED PASS",
    },
  ];

  return (
    <div className="relative min-h-screen bg-white font-sans text-[#5c728e] selection:bg-[#dbf1c3] selection:text-[#0f5132]">
      {/* Structured Data for SEO Rich Snippets */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />

      <Navbar isProductPage={false} />

      <main className="relative pt-12 pb-24 border-t border-slate-100">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          {/* Breadcrumb / Back Navigation */}
          <div className="flex items-center gap-2 text-xs font-semibold text-[#5c728e] mb-8">
            <Link href="/" className="hover:text-[#111013] transition-colors flex items-center gap-1.5">
              <ArrowLeft className="h-3.5 w-3.5" />
              <span>EvidenceLog Home</span>
            </Link>
            <span className="text-slate-300">/</span>
            <span className="text-[#15803d]">Integrations</span>
            <span className="text-slate-300">/</span>
            <span className="text-[#111013]">Vanta &amp; Drata GRC Suite</span>
          </div>

          {/* Hero Section */}
          <div className="space-y-6 max-w-4xl mb-16">
            <div className="inline-flex items-center gap-2 rounded-full border border-[#15803d]/30 bg-[#dbf1c3]/50 px-3.5 py-1 text-xs font-bold text-[#0f5132]">
              <RefreshCw className="h-3.5 w-3.5" />
              <span>CONTINUOUS GRC AUTOMATION &bull; VANTA &bull; DRATA &bull; SPRINTO &bull; THOROPASS</span>
            </div>

            <h1 className="text-3xl sm:text-5xl lg:text-6xl font-bold tracking-tight text-[#111013] font-heading leading-[1.12]">
              Never fail a change management test in{" "}
              <span className="text-[#15803d]">Vanta or Drata</span> again
            </h1>

            <p className="text-base sm:text-lg text-[#5c728e] leading-relaxed max-w-3xl">
              Vanta and Drata continuously inspect your Jira Cloud tickets for SOC 2 (CC8.1 / CC6.8) and ISO 27001 (A.8.32) compliance.
              EvidenceLog operates directly inside Jira as the <strong>preventive enforcement and export engine</strong> — blocking unapproved PRs, enforcing peer reviews and QA sign-offs in-situ, and exporting certified audit dossiers with <strong>zero external data egress</strong>.
            </p>

            <div className="flex flex-wrap items-center gap-4 pt-2">
              <a
                href="https://marketplace.atlassian.com"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-6 py-3.5 rounded-xl bg-[#111013] text-white hover:bg-[#15803d] font-bold text-sm transition-all shadow-md cursor-pointer"
              >
                <span>Install Free on Marketplace</span>
                <ArrowRight className="h-4 w-4" />
              </a>

              <a
                href="#grc-inspector"
                className="inline-flex items-center gap-2 px-6 py-3.5 rounded-xl bg-slate-100 hover:bg-slate-200 text-[#111013] font-semibold text-sm transition-all cursor-pointer"
              >
                <Code2 className="h-4 w-4 text-[#15803d]" />
                <span>Explore GRC Payloads</span>
              </a>

              <Link
                href="/frameworks/soc2-cc81"
                className="inline-flex items-center gap-2 px-6 py-3.5 rounded-xl bg-white border border-slate-200 hover:border-slate-300 text-[#5c728e] hover:text-[#111013] font-semibold text-sm transition-all cursor-pointer"
              >
                <FileCheck2 className="h-4 w-4 text-[#15803d]" />
                <span>SOC 2 CC8.1 Guide</span>
              </Link>
            </div>
          </div>

          {/* Key Value Proposition Cards */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-20">
            <div className="rounded-2xl border border-slate-200 bg-white p-7 shadow-xs hover:shadow-md transition-shadow">
              <div className="h-10 w-10 rounded-xl bg-emerald-50 text-[#15803d] flex items-center justify-center mb-4">
                <CheckCircle2 className="h-5 w-5" />
              </div>
              <h3 className="text-base font-bold text-[#111013] mb-2 font-heading">
                100% GRC Test Pass Rates
              </h3>
              <p className="text-xs sm:text-sm text-[#5c728e] leading-relaxed">
                EvidenceLog&apos;s Jira Preventive Gatekeeper blocks issues from transitioning to &ldquo;Done&rdquo; if Git PR links, independent peer approval, or QA evidence are missing. Every ticket reaching production automatically satisfies Vanta and Drata checks.
              </p>
            </div>

            <div className="rounded-2xl border border-slate-200 bg-white p-7 shadow-xs hover:shadow-md transition-shadow">
              <div className="h-10 w-10 rounded-xl bg-emerald-50 text-[#15803d] flex items-center justify-center mb-4">
                <Layers className="h-5 w-5" />
              </div>
              <h3 className="text-base font-bold text-[#111013] mb-2 font-heading">
                1-Click GRC JSON &amp; CSV Export
              </h3>
              <p className="text-xs sm:text-sm text-[#5c728e] leading-relaxed">
                Export canonical Vanta Schema v1.0, Drata Change Control v2, Big 4 CSV workpapers, and release Merkle root proofs straight from Jira. No manual spreadsheets or editable PNG screenshot uploads.
              </p>
            </div>

            <div className="rounded-2xl border border-slate-200 bg-white p-7 shadow-xs hover:shadow-md transition-shadow">
              <div className="h-10 w-10 rounded-xl bg-emerald-50 text-[#15803d] flex items-center justify-center mb-4">
                <Lock className="h-5 w-5" />
              </div>
              <h3 className="text-base font-bold text-[#111013] mb-2 font-heading">
                Zero Vendor Risk (No Data Egress)
              </h3>
              <p className="text-xs sm:text-sm text-[#5c728e] leading-relaxed">
                Unlike third-party sync connectors that require API keys and route Jira data to external databases, EvidenceLog runs 100% in Atlassian Forge microVMs. Zero external egress means zero new vendor reviews for your security team.
              </p>
            </div>
          </div>

          {/* Section 1: The Core Dilemma (Why Vanta & Drata Tests Fail) */}
          <section className="mb-20">
            <div className="max-w-3xl mb-10">
              <div className="inline-block rounded-md bg-slate-100 px-3 py-1 text-xs font-bold uppercase tracking-wider text-[#111013] font-heading mb-3">
                THE CHALLENGE
              </div>
              <h2 className="text-2xl sm:text-4xl font-bold font-heading text-[#111013] tracking-tight">
                Why fast-moving engineering teams fail Vanta &amp; Drata change tests
              </h2>
              <p className="text-sm sm:text-base text-[#5c728e] mt-3 leading-relaxed">
                Modern GRC platforms connect to Jira Cloud via standard APIs to verify that code deployed to production followed proper change controls. But Jira by default does not enforce compliance. Without in-situ guardrails, developers introduce audit exceptions daily:
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {failingTests.map((item, idx) => (
                <div
                  key={idx}
                  className="rounded-2xl border border-red-100 bg-red-50/20 p-6 sm:p-7 relative overflow-hidden"
                >
                  <div className="flex items-start gap-3.5 mb-3">
                    <div className="p-2 rounded-lg bg-red-100 text-red-700 shrink-0 mt-0.5">
                      <AlertCircle className="h-4 w-4" />
                    </div>
                    <div>
                      <h4 className="text-sm sm:text-base font-bold text-[#111013]">
                        {item.title}
                      </h4>
                      <div className="text-[11px] font-mono font-semibold text-red-600 mt-0.5">
                        {item.grcAlert}
                      </div>
                    </div>
                  </div>

                  <div className="space-y-2.5 text-xs sm:text-sm text-[#5c728e] pt-2 border-t border-red-100/60">
                    <p>
                      <strong className="text-slate-800">Root Cause:</strong> {item.cause}
                    </p>
                    <p>
                      <strong className="text-slate-800">Audit Impact:</strong> {item.impact}
                    </p>
                    <p className="text-[#15803d] font-medium bg-[#dbf1c3]/30 p-2.5 rounded-lg border border-[#15803d]/20 mt-3">
                      <strong>EvidenceLog In-Situ Fix:</strong> {item.solution}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </section>

          {/* Section 2: How EvidenceLog Powers Vanta & Drata */}
          <section className="mb-20 rounded-3xl bg-slate-50 border border-slate-200/80 p-8 sm:p-12">
            <div className="max-w-3xl mb-10">
              <div className="inline-block rounded-md bg-[#dbf1c3] px-3 py-1 text-xs font-bold uppercase tracking-wider text-[#0f5132] font-heading mb-3">
                HOW IT WORKS
              </div>
              <h2 className="text-2xl sm:text-4xl font-bold font-heading text-[#111013] tracking-tight">
                The 3-stage continuous compliance pipeline
              </h2>
              <p className="text-sm sm:text-base text-[#5c728e] mt-3 leading-relaxed">
                EvidenceLog transforms Jira from an passive issue tracker into an active compliance gatekeeper that feeds perfectly certified audit records into Vanta, Drata, Sprinto, and Thoropass:
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="bg-white rounded-2xl p-6 border border-slate-200 shadow-2xs space-y-3">
                <div className="text-xs font-bold text-[#15803d] uppercase tracking-wider font-mono">
                  Stage 01
                </div>
                <h3 className="text-lg font-bold text-[#111013]">In-Situ Jira Gatekeeper</h3>
                <p className="text-xs sm:text-sm text-[#5c728e] leading-relaxed">
                  When a developer attempts to move a ticket to &ldquo;Done&rdquo;, EvidenceLog&apos;s workflow validator checks all 5 mandatory compliance controls (Acceptance Criteria, Git PR link, SoD Peer Review, QA Sign-Off, SAST Scan). If any control is missing, the transition is halted with an actionable 1-click remediation button.
                </p>
              </div>

              <div className="bg-white rounded-2xl p-6 border border-slate-200 shadow-2xs space-y-3">
                <div className="text-xs font-bold text-[#15803d] uppercase tracking-wider font-mono">
                  Stage 02
                </div>
                <h3 className="text-lg font-bold text-[#111013]">Cryptographic Sealing</h3>
                <p className="text-xs sm:text-sm text-[#5c728e] leading-relaxed">
                  Upon passing all controls, EvidenceLog canonicalizes the change data (RFC-8785) and computes an immutable SHA-256 fingerprint. This snapshot is locked in Atlassian Forge encrypted Key-Value Storage (KVS) and synced to native Jira Issue Entity Properties for instant JQL querying.
                </p>
              </div>

              <div className="bg-white rounded-2xl p-6 border border-slate-200 shadow-2xs space-y-3">
                <div className="text-xs font-bold text-[#15803d] uppercase tracking-wider font-mono">
                  Stage 03
                </div>
                <h3 className="text-lg font-bold text-[#111013]">Continuous GRC Ingestion</h3>
                <p className="text-xs sm:text-sm text-[#5c728e] leading-relaxed">
                  When Vanta or Drata runs its daily automated change management tests, 100% of tickets pass because non-compliant code could never be deployed. Compliance officers can also export consolidated release dossiers and Big 4 CSV matrices directly into their GRC document binders.
                </p>
              </div>
            </div>
          </section>

          {/* Section 3: Interactive GRC Payload Inspector */}
          <section id="grc-inspector" className="mb-20 scroll-mt-24">
            <div className="max-w-3xl mb-8">
              <div className="inline-block rounded-md bg-[#dbf1c3] px-3 py-1 text-xs font-bold uppercase tracking-wider text-[#0f5132] font-heading mb-3">
                LIVE PAYLOAD VIEWER
              </div>
              <h2 className="text-2xl sm:text-4xl font-bold font-heading text-[#111013] tracking-tight">
                Inspect Vanta &amp; Drata evidence schemas
              </h2>
              <p className="text-sm sm:text-base text-[#5c728e] mt-3 leading-relaxed">
                EvidenceLog formats compliance records into standard schemas recognized by modern GRC platforms and Big 4 audit firms. Explore live payload samples below:
              </p>
            </div>

            <GrcPayloadViewer />
          </section>

          {/* Section 4: Control Alignment & Mapping Matrix */}
          <section className="mb-20">
            <div className="max-w-3xl mb-10">
              <div className="inline-block rounded-md bg-slate-100 px-3 py-1 text-xs font-bold uppercase tracking-wider text-[#111013] font-heading mb-3">
                CONTROL MAPPINGS
              </div>
              <h2 className="text-2xl sm:text-4xl font-bold font-heading text-[#111013] tracking-tight">
                Vanta &amp; Drata automated control mapping matrix
              </h2>
              <p className="text-sm sm:text-base text-[#5c728e] mt-3 leading-relaxed">
                See how EvidenceLog maps each regulatory requirement from AICPA SOC 2 and ISO/IEC 27001 to specific Vanta and Drata automated test IDs:
              </p>
            </div>

            <div className="overflow-x-auto rounded-2xl border border-slate-200 bg-white shadow-2xs">
              <table className="w-full text-left border-collapse text-xs sm:text-sm">
                <thead>
                  <tr className="border-b border-slate-200 bg-slate-50/80 text-[#111013] font-bold">
                    <th className="py-4 px-5">Standard &amp; Control</th>
                    <th className="py-4 px-5">Vanta Test ID</th>
                    <th className="py-4 px-5">Drata Test ID</th>
                    <th className="py-4 px-5">EvidenceLog Automated Enforcement</th>
                    <th className="py-4 px-5">GRC Status</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-slate-100">
                  {controlMappings.map((row, idx) => (
                    <tr key={idx} className="hover:bg-slate-50/50 transition-colors">
                      <td className="py-4 px-5">
                        <div className="font-bold text-[#111013]">{row.controlName}</div>
                        <div className="text-[11px] text-[#5c728e] font-mono mt-0.5">
                          {row.regulatoryStandard}
                        </div>
                      </td>
                      <td className="py-4 px-5 font-mono text-[11px] text-[#111013] font-semibold">
                        {row.vantaTest}
                      </td>
                      <td className="py-4 px-5 font-mono text-[11px] text-[#111013] font-semibold">
                        {row.drataTest}
                      </td>
                      <td className="py-4 px-5 text-xs text-[#5c728e] max-w-xs leading-snug">
                        {row.evidenceLogRule}
                      </td>
                      <td className="py-4 px-5">
                        <span className="inline-flex items-center gap-1 rounded-full bg-emerald-50 px-2.5 py-1 text-[11px] font-bold text-[#15803d] border border-emerald-200">
                          <Check className="h-3 w-3" />
                          <span>{row.grcStatus}</span>
                        </span>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </section>

          {/* Section 5: Security Architecture & Zero Data Egress */}
          <section className="mb-20 rounded-3xl bg-[#111013] text-white p-8 sm:p-12 shadow-2xl relative overflow-hidden">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
              <div className="lg:col-span-8 space-y-4">
                <div className="inline-block rounded-md bg-white/10 px-3 py-1 text-xs font-bold uppercase tracking-wider text-[#dbf1c3] font-heading">
                  SECURITY &amp; DATA PRIVACY GUARANTEE
                </div>

                <h2 className="text-2xl sm:text-4xl font-bold font-heading text-white leading-tight">
                  Zero external data egress. Runs 100% inside Atlassian Forge.
                </h2>

                <p className="text-sm text-slate-300 max-w-xl leading-relaxed">
                  When you connect tools to Vanta and Drata, your CISO evaluates vendor security risk. EvidenceLog requires <strong>zero vendor risk assessment</strong> because it runs entirely inside Atlassian Cloud microVM sandboxes:
                </p>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-2 text-xs text-slate-200">
                  <div className="flex items-center gap-2">
                    <Check className="h-4 w-4 text-[#dbf1c3] shrink-0" />
                    <span>Zero outbound network egress</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Check className="h-4 w-4 text-[#dbf1c3] shrink-0" />
                    <span>No external database storage</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Check className="h-4 w-4 text-[#dbf1c3] shrink-0" />
                    <span>Encrypted Atlassian Forge KVS storage</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Check className="h-4 w-4 text-[#dbf1c3] shrink-0" />
                    <span>Inherits tenant AWS/GCP data residency</span>
                  </div>
                </div>
              </div>

              <div className="lg:col-span-4 flex lg:justify-end">
                <Link
                  href="/security"
                  className="inline-flex items-center justify-center gap-2 py-4 px-6 rounded-xl bg-white/10 hover:bg-white/20 text-white text-sm font-bold border border-white/20 transition-all cursor-pointer"
                >
                  <Lock className="h-4 w-4 text-[#dbf1c3]" />
                  <span>Read Security Architecture</span>
                </Link>
              </div>
            </div>
          </section>

          {/* Section 6: Frequently Asked Questions */}
          <section className="mb-20">
            <div className="max-w-3xl mb-10">
              <div className="inline-block rounded-md bg-slate-100 px-3 py-1 text-xs font-bold uppercase tracking-wider text-[#111013] font-heading mb-3">
                FREQUENTLY ASKED QUESTIONS
              </div>
              <h2 className="text-2xl sm:text-4xl font-bold font-heading text-[#111013] tracking-tight">
                Answers for compliance officers &amp; engineering leaders
              </h2>
            </div>

            <div className="space-y-4 max-w-4xl">
              <div className="rounded-2xl border border-slate-200 p-6 bg-white shadow-2xs">
                <h3 className="text-base font-bold text-[#111013] mb-2">
                  Does EvidenceLog replace Vanta or Drata?
                </h3>
                <p className="text-sm text-[#5c728e] leading-relaxed">
                  No. EvidenceLog is the in-situ enforcement engine that complements Vanta and Drata. While Vanta and Drata monitor company-wide infrastructure (AWS security groups, laptop encryption, employee background checks), EvidenceLog runs inside Jira to ensure that developers write acceptance criteria, link PRs, enforce peer reviews, and record QA sign-offs before code can deploy.
                </p>
              </div>

              <div className="rounded-2xl border border-slate-200 p-6 bg-white shadow-2xs">
                <h3 className="text-base font-bold text-[#111013] mb-2">
                  How does Vanta or Drata know that tickets are compliant?
                </h3>
                <p className="text-sm text-[#5c728e] leading-relaxed">
                  Vanta and Drata test Jira tickets for linked pull requests, approval comments, and status transitions. Because EvidenceLog&apos;s Preventive Gatekeeper programmatically blocks tickets from reaching &ldquo;Done&rdquo; if any evidence is missing, 100% of tickets sampled by Vanta and Drata pass automatically. Additionally, EvidenceLog syncs compliance flags to native Jira Issue Entity Properties (JQL) and provides direct Vanta/Drata JSON exports.
                </p>
              </div>

              <div className="rounded-2xl border border-slate-200 p-6 bg-white shadow-2xs">
                <h3 className="text-base font-bold text-[#111013] mb-2">
                  Does this work with other GRC tools like Sprinto, Thoropass, or Secureframe?
                </h3>
                <p className="text-sm text-[#5c728e] leading-relaxed">
                  Yes. All modern GRC platforms verify the same foundational change management controls mandated by AICPA SOC 2 (CC8.1 / CC6.8) and ISO/IEC 27001 (A.8.32). EvidenceLog satisfies the underlying requirements directly at the developer level, making your changes audit-ready regardless of which GRC platform you use.
                </p>
              </div>

              <div className="rounded-2xl border border-slate-200 p-6 bg-white shadow-2xs">
                <h3 className="text-base font-bold text-[#111013] mb-2">
                  What happens when an emergency hotfix occurs?
                </h3>
                <p className="text-sm text-[#5c728e] leading-relaxed">
                  EvidenceLog automatically identifies emergency hotfixes (via labels like <code className="text-xs bg-slate-100 px-1.5 py-0.5 rounded font-mono">hotfix</code> or <code className="text-xs bg-slate-100 px-1.5 py-0.5 rounded font-mono">sev1</code>). It permits expedited release transitions while automatically tagging the ticket with <code className="text-xs bg-slate-100 px-1.5 py-0.5 rounded font-mono">riskLevel = &quot;EMERGENCY&quot;</code> and flagging it for mandatory retroactive Change Advisory Board (CAB) review within 48 hours, fully satisfying SOC 2 CC8.1 exception protocols.
                </p>
              </div>
            </div>
          </section>

          {/* Bottom Conversion Banner */}
          <div className="rounded-3xl bg-[#111013] text-white p-8 sm:p-14 text-center space-y-6 shadow-2xl relative overflow-hidden">
            <div className="inline-block rounded-md bg-[#dbf1c3] px-3 py-1 text-xs font-bold uppercase tracking-wider text-[#0f5132] font-heading">
              FREE FOR SQUADS UP TO 10 USERS &bull; ZERO DATA EGRESS
            </div>

            <h2 className="text-3xl sm:text-5xl font-bold font-heading text-white max-w-2xl mx-auto leading-tight">
              Ready to eliminate failing GRC change tests forever?
            </h2>

            <p className="text-sm sm:text-base text-slate-300 max-w-xl mx-auto leading-relaxed">
              Install EvidenceLog into your Jira Cloud workspace in under 2 minutes. Eliminate manual pre-audit screenshotting and keep Vanta &amp; Drata tests permanently green.
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
                href="/frameworks/soc2-cc81"
                className="inline-flex items-center justify-center gap-2 py-4 px-6 rounded-xl bg-transparent hover:bg-white/10 text-white text-sm font-semibold border border-white/20 transition-all cursor-pointer"
              >
                <FileCheck2 className="h-4 w-4 text-[#dbf1c3]" />
                <span>SOC 2 CC8.1 Guide</span>
              </Link>

              <Link
                href="/frameworks/iso-27001-a832"
                className="inline-flex items-center justify-center gap-2 py-4 px-6 rounded-xl bg-transparent hover:bg-white/10 text-white text-sm font-semibold border border-white/20 transition-all cursor-pointer"
              >
                <FileCheck2 className="h-4 w-4 text-[#dbf1c3]" />
                <span>ISO 27001 Guide</span>
              </Link>

              <Link
                href="/compare/manual-screenshots-vs-evidencelog"
                className="inline-flex items-center justify-center gap-2 py-4 px-6 rounded-xl bg-transparent hover:bg-white/10 text-white text-sm font-semibold border border-white/20 transition-all cursor-pointer"
              >
                <FileCheck2 className="h-4 w-4 text-[#dbf1c3]" />
                <span>Compare vs. Manual</span>
              </Link>
            </div>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
}
