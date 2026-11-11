import Link from "next/link";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import {
  ShieldCheck,
  CheckCircle2,
  ArrowRight,
  ArrowLeft,
  FileCheck2,
  Lock,
  GitPullRequest,
  Users,
  TestTube2,
  Bug,
  Sparkles,
} from "lucide-react";

export const metadata = {
  title: "Automate SOC 2 CC8.1 in Jira Cloud — The Complete Engineering Guide | Langtago",
  description:
    "Learn how engineering teams eliminate manual screenshotting and satisfy AICPA SOC 2 Type II Criterion CC8.1 inside Jira Cloud. 100% Atlassian Forge native with cryptographic SHA-256 change seals.",
  keywords: [
    "SOC 2 CC8.1 Jira",
    "CC8.1 change management evidence",
    "automate CC8.1 Jira Cloud",
    "Jira SOC 2 evidence collection",
    "segregation of duties Jira CC8.1",
    "Atlassian Forge compliance app",
    "SOC 2 audit workpapers Jira",
    "stop screenshotting for SOC 2",
  ],
  openGraph: {
    title: "Automate SOC 2 CC8.1 Change Controls Directly in Jira Cloud",
    description:
      "Eliminate manual screenshotting. Automatically seal cryptographic change evidence for SOC 2 CC8.1 directly in Jira Cloud tickets via Atlassian Forge.",
    url: "https://langtago.com/frameworks/soc2-cc81",
    siteName: "Langtago — EvidenceLog for Jira",
  },
};

export default function Soc2Cc81FrameworkPage() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "TechArticle",
        "headline": "Automating SOC 2 CC8.1 Change Management Controls in Jira Cloud",
        "description": "A comprehensive technical blueprint for engineering managers and compliance officers to satisfy AICPA SOC 2 Type II Common Criteria 8.1 natively inside Jira Cloud.",
        "author": {
          "@type": "Organization",
          "name": "Langtago Studio",
          "url": "https://langtago.com"
        },
        "publisher": {
          "@type": "Organization",
          "name": "Langtago",
          "url": "https://langtago.com"
        },
        "datePublished": "2026-11-08",
        "dateModified": "2026-11-08",
        "mainEntityOfPage": "https://langtago.com/frameworks/soc2-cc81"
      },
      {
        "@type": "FAQPage",
        "mainEntity": [
          {
            "@type": "Question",
            "name": "What is AICPA SOC 2 Criterion CC8.1?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "SOC 2 Criterion CC8.1 requires that organizations authorize, design, develop, test, approve, and deploy changes to infrastructure, data, software, and procedures to achieve their commitments and system requirements."
            }
          },
          {
            "@type": "Question",
            "name": "How does EvidenceLog verify Segregation of Duties for CC8.1 in Jira?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "EvidenceLog inspects Jira transition changelogs, peer review comments, and remote Git pull request reviews. It verifies that the author or assignee did not approve or resolve their own change, satisfying CC6.8 and CC8.1 segregation of duties."
            }
          },
          {
            "@type": "Question",
            "name": "Can EvidenceLog export CC8.1 evidence to Vanta, Drata, or Secureframe?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "Yes. EvidenceLog formats audit records into canonical JSON and CSV workpaper packets that sync seamlessly with modern GRC automation tools like Vanta, Drata, and Secureframe."
            }
          }
        ]
      }
    ]
  };

  const controlsMatrix = [
    {
      pointOfFocus: "CC8.1.1: Business Authorization & Requirements Traceability",
      requirement: "Changes are documented, authorized, and justified by business requirements prior to initiation.",
      auditorExpectation: "Given/When/Then acceptance criteria, Definition of Done, or formal ticket description approved by product owner.",
      evidenceLogSolution: "In-situ parser detects Given/When/Then and DoD keywords in Jira ADF descriptions. 1-click button appends standardized BDD criteria templates.",
      status: "AUTOMATED",
    },
    {
      pointOfFocus: "CC8.1.2: Code Linkage & Repository Traceability",
      requirement: "All code changes deployed to production trace back directly to authorized development tickets.",
      auditorExpectation: "Direct linkage to source code repositories: Git branch, pull request ID, and merge commit hash.",
      evidenceLogSolution: "Automatically detects GitHub, GitLab, Bitbucket, and Azure DevOps pull requests and commits in Jira Remote Links and development panels.",
      status: "AUTOMATED",
    },
    {
      pointOfFocus: "CC8.1.3: Segregation of Duties & Independent Peer Review",
      requirement: "Incompatible duties are segregated (CC6.8). Change authors cannot self-approve or unilaterally deploy changes to production.",
      auditorExpectation: "Proof that code review and approval were executed by an independent engineer distinct from the author and assignee.",
      evidenceLogSolution: "Inspects transition actors and Git PR approvers to ensure Author ≠ Reviewer. JSM Change Advisory Board (CAB) reviews supported.",
      status: "AUTOMATED",
    },
    {
      pointOfFocus: "CC8.1.4: Pre-Release Quality & Test Verification",
      requirement: "Changes are tested and verified in non-production environments prior to release (ISO 27001 A.8.29).",
      auditorExpectation: "QA sign-off, automated test suite execution results, or staging environment verification tags.",
      evidenceLogSolution: "Scans for qa-verified labels, QA transition history, test execution attachments (.xml/.json), and timestamped QA comments.",
      status: "AUTOMATED",
    },
    {
      pointOfFocus: "CC8.1.5: Security & SAST Vulnerability Scanning",
      requirement: "Changes are scanned for security flaws and known technical vulnerabilities prior to merge (CC7.1).",
      auditorExpectation: "Clean SAST/DAST or dependency scan output showing zero high/critical unmitigated vulnerabilities.",
      evidenceLogSolution: "Detects Snyk, SonarQube, Trivy, Dependabot, and OWASP ZAP traces in development links and tags.",
      status: "AUTOMATED",
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
            <span className="text-[#15803d]">Compliance Frameworks</span>
            <span className="text-slate-300">/</span>
            <span className="text-[#111013] font-bold">SOC 2 CC8.1 Guide</span>
          </div>

          {/* Hero Header */}
          <div className="max-w-4xl space-y-5 mb-16">
            <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-[#dbf1c3]/70 border border-[#b8e29a] text-[#15803d] font-bold text-xs tracking-wider uppercase font-heading">
              <ShieldCheck className="h-4 w-4" />
              <span>AICPA SOC 2 TYPE II TECHNICAL SPECIFICATION</span>
            </div>

            <h1 className="text-3xl sm:text-5xl lg:text-6xl font-bold tracking-tight text-[#111013] font-heading leading-[1.12]">
              Automate SOC 2 CC8.1 in Jira Cloud: The Complete Engineering Guide
            </h1>

            <p className="text-base sm:text-xl text-[#5c728e] leading-relaxed max-w-3xl">
              How modern engineering teams eliminate 150+ hours of manual screenshotting per audit cycle, enforce segregation of duties, and seal cryptographic change evidence directly inside Atlassian Jira Cloud.
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
                href="/frameworks/iso-27001-a832"
                className="inline-flex items-center justify-center gap-2 px-5 py-3.5 rounded-xl bg-white text-[#111013] border border-slate-300 hover:border-[#111013] font-semibold text-sm transition-all shadow-xs cursor-pointer"
              >
                <FileCheck2 className="h-4 w-4 text-[#15803d]" />
                <span>ISO 27001:2022 Guide ↗</span>
              </Link>
            </div>

            <div className="flex flex-wrap items-center gap-6 text-xs text-slate-500 pt-3">
              <span>Author: <strong>Langtago Security &amp; Compliance Team</strong></span>
              <span>•</span>
              <span>Updated: <strong>November 2026</strong></span>
              <span>•</span>
              <span>Reading Time: <strong>7 min</strong></span>
            </div>
          </div>

          {/* Key Metric / Problem Statement Callout */}
          <div className="mb-16 rounded-3xl bg-[#fbfdfc] border border-slate-200/90 p-6 sm:p-10 shadow-sm">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
              <div className="lg:col-span-8 space-y-3">
                <div className="inline-block rounded-md bg-rose-100 text-rose-800 px-2.5 py-0.5 text-xs font-bold uppercase tracking-wider">
                  The Problem: The Manual Screenshot Tax
                </div>
                <h2 className="text-2xl sm:text-3xl font-bold text-[#111013] font-heading">
                  Why SOC 2 CC8.1 Drains Engineering Squads
                </h2>
                <p className="text-sm sm:text-base text-[#5c728e] leading-relaxed">
                  During annual SOC 2 Type II audits, external CPAs (Big 4 or boutique compliance firms) sample 25 to 40 production changes deployed during the 6 to 12 month audit window. For every single sampled ticket, engineering leads must locate the Git PR, capture screenshots of peer reviews and CI runs, verify deployment dates, and paste them into audit folders or GRC tools.
                </p>
                <div className="text-xs font-semibold text-[#111013] pt-1">
                  Average cost per audit window: <strong>3.5 hours per sample × 40 samples = 140+ engineering hours wasted ($11,900+ in lost dev velocity).</strong>
                </div>
                <div className="pt-2 flex flex-wrap items-center gap-4 text-xs font-bold text-[#15803d]">
                  <Link
                    href="/compare/manual-screenshots-vs-evidencelog"
                    className="inline-flex items-center gap-1.5 hover:underline"
                  >
                    <span>Read benchmark: Manual Screenshots vs. EvidenceLog ↗</span>
                  </Link>
                  <span className="text-slate-300 font-normal">•</span>
                  <Link
                    href="/frameworks/iso-27001-a832"
                    className="inline-flex items-center gap-1.5 hover:underline"
                  >
                    <span>Explore ISO 27001:2022 A.8.32 Guide ↗</span>
                  </Link>
                </div>
              </div>

              <div className="lg:col-span-4 rounded-2xl bg-[#111013] text-white p-6 space-y-4 shadow-md">
                <div className="text-xs font-bold uppercase tracking-wider text-[#dbf1c3] font-heading">
                  With EvidenceLog for Jira
                </div>
                <div className="text-4xl font-extrabold text-[#dbf1c3] font-heading">
                  0 Manual Hours
                </div>
                <p className="text-xs text-slate-300 leading-relaxed">
                  Evidence is evaluated continuously on every issue transition and cryptographically sealed with SHA-256 in Atlassian Forge storage. Export Big 4 CSV workpapers in 1 click.
                </p>
                <div className="pt-2 border-t border-white/10">
                  <span className="text-[11px] font-mono text-emerald-400">
                    ✔ 100% Audit Readiness Guaranteed
                  </span>
                </div>
              </div>
            </div>
          </div>

          {/* Section 1: What is CC8.1? */}
          <section className="mb-20 space-y-6">
            <div className="max-w-3xl">
              <h2 className="text-2xl sm:text-4xl font-bold text-[#111013] font-heading mb-4">
                1. What Does AICPA SOC 2 Criterion CC8.1 Require?
              </h2>
              <p className="text-sm sm:text-base text-[#5c728e] leading-relaxed">
                Criterion CC8.1 is part of the <strong>Common Criteria for Change Management</strong> in the AICPA Trust Services Criteria (TSC). It mandates that:
              </p>
              <blockquote className="my-4 border-l-4 border-[#15803d] bg-slate-50 p-4 rounded-r-xl text-sm italic text-[#111013] font-serif">
                &ldquo;The entity authorizes, designs, develops or acquires, configures, documents, tests, approves, and implements changes to infrastructure, data, software, and procedures to meet its objectives.&rdquo;
              </blockquote>
              <p className="text-sm sm:text-base text-[#5c728e] leading-relaxed">
                In practical software engineering on Atlassian Jira Cloud, auditors break CC8.1 down into five mandatory control points of focus that must be documented for every production release.
              </p>
            </div>

            {/* The 5 Points of Focus Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 pt-4">
              <div className="rounded-2xl border border-slate-200 bg-white p-6 shadow-xs space-y-3">
                <div className="h-10 w-10 rounded-xl bg-[#111013] text-[#dbf1c3] flex items-center justify-center">
                  <FileCheck2 className="h-5 w-5" />
                </div>
                <h3 className="text-base font-bold text-[#111013] font-heading">
                  1. Business Authorization
                </h3>
                <p className="text-xs text-[#5c728e] leading-relaxed">
                  Every change must be initiated with clear business requirements, acceptance criteria (Given/When/Then), and product approval before implementation begins.
                </p>
              </div>

              <div className="rounded-2xl border border-slate-200 bg-white p-6 shadow-xs space-y-3">
                <div className="h-10 w-10 rounded-xl bg-[#111013] text-[#dbf1c3] flex items-center justify-center">
                  <GitPullRequest className="h-5 w-5" />
                </div>
                <h3 className="text-base font-bold text-[#111013] font-heading">
                  2. Code Linkage &amp; Commits
                </h3>
                <p className="text-xs text-[#5c728e] leading-relaxed">
                  Every line of code merged into production must trace back directly to a specific Jira ticket, pull request, and Git branch to prove unauthorized changes are impossible.
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
                  The engineer who writes the code cannot approve their own pull request or unilaterally mark the change as Done (AICPA CC6.8 &amp; CC8.1).
                </p>
              </div>

              <div className="rounded-2xl border border-slate-200 bg-white p-6 shadow-xs space-y-3">
                <div className="h-10 w-10 rounded-xl bg-[#111013] text-[#dbf1c3] flex items-center justify-center">
                  <TestTube2 className="h-5 w-5" />
                </div>
                <h3 className="text-base font-bold text-[#111013] font-heading">
                  4. Testing &amp; QA Sign-Off
                </h3>
                <p className="text-xs text-[#5c728e] leading-relaxed">
                  Verification that automated unit/integration tests passed in staging and an independent QA or peer verified the user-facing functionality.
                </p>
              </div>

              <div className="rounded-2xl border border-slate-200 bg-white p-6 shadow-xs space-y-3">
                <div className="h-10 w-10 rounded-xl bg-[#111013] text-[#dbf1c3] flex items-center justify-center">
                  <Bug className="h-5 w-5" />
                </div>
                <h3 className="text-base font-bold text-[#111013] font-heading">
                  5. Security Vulnerability Scan
                </h3>
                <p className="text-xs text-[#5c728e] leading-relaxed">
                  Automated SAST and dependency scanning (Snyk, SonarQube, Trivy, Dependabot) with zero unresolved high/critical CVEs prior to production merge.
                </p>
              </div>

              <div className="rounded-2xl border border-emerald-200 bg-emerald-50/50 p-6 shadow-xs space-y-3 flex flex-col justify-between">
                <div>
                  <div className="h-10 w-10 rounded-xl bg-[#15803d] text-white flex items-center justify-center">
                    <Sparkles className="h-5 w-5" />
                  </div>
                  <h3 className="text-base font-bold text-[#111013] font-heading mb-1 mt-3">
                    Automate All 5 with 1 Click
                  </h3>
                  <p className="text-xs text-[#5c728e] leading-relaxed">
                    EvidenceLog continuously inspects and verifies all 5 pillars inside Jira with zero developer overhead.
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
                2. Complete SOC 2 CC8.1 Control Mapping Matrix
              </h2>
              <p className="text-sm text-[#5c728e]">
                How EvidenceLog translates AICPA auditor expectations into automated Jira Cloud verification checks.
              </p>
            </div>

            <div className="overflow-x-auto rounded-2xl border border-slate-200 bg-white shadow-xs">
              <table className="w-full text-left text-xs border-collapse">
                <thead>
                  <tr className="border-b border-slate-200 bg-slate-50 text-[#111013] font-heading uppercase tracking-wider text-[11px]">
                    <th className="p-4 sm:p-5">CC8.1 Point of Focus</th>
                    <th className="p-4 sm:p-5">AICPA Requirement</th>
                    <th className="p-4 sm:p-5">Auditor Expectation</th>
                    <th className="p-4 sm:p-5">EvidenceLog Automation</th>
                    <th className="p-4 sm:p-5 text-center">Status</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-slate-100 text-slate-600">
                  {controlsMatrix.map((item, idx) => (
                    <tr key={idx} className="hover:bg-slate-50/70 transition-colors">
                      <td className="p-4 sm:p-5 font-bold text-[#111013] max-w-[200px]">
                        {item.pointOfFocus}
                      </td>
                      <td className="p-4 sm:p-5 text-slate-500 max-w-[220px] leading-relaxed">
                        {item.requirement}
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

          {/* Section 3: The Preventive Gatekeeper */}
          <section className="mb-20 rounded-3xl bg-[#111013] text-white p-8 sm:p-12 shadow-xl">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
              <div className="lg:col-span-7 space-y-4">
                <div className="inline-block rounded-md bg-white/10 px-3 py-1 text-xs font-bold uppercase tracking-wider text-[#dbf1c3] font-heading">
                  PREVENTIVE COMPLIANCE
                </div>
                <h2 className="text-2xl sm:text-4xl font-bold font-heading text-white leading-tight">
                  The Preventive Workflow Gatekeeper: Stop Failures Before Production
                </h2>
                <p className="text-sm text-slate-300 leading-relaxed">
                  Most compliance tooling acts as a reactive scanner: telling you weeks after code has been deployed that someone forgot a peer review. By that point, your SOC 2 audit window has already incurred an exception.
                </p>
                <p className="text-sm text-slate-300 leading-relaxed">
                  EvidenceLog includes a native <strong>Jira Workflow Validator</strong> (<code className="font-mono text-emerald-300">jira:workflowValidator</code>). It programmatically prevents tickets from transitioning into &ldquo;Ready for Release&rdquo; or &ldquo;Done&rdquo; unless all 5 change controls are mathematically verified.
                </p>

                <div className="pt-2 flex flex-col sm:flex-row items-start sm:items-center gap-4 text-xs font-mono text-slate-300">
                  <div className="flex items-center gap-1.5">
                    <CheckCircle2 className="h-4 w-4 text-[#dbf1c3]" />
                    <span>0 Unreviewed Commits Deployed</span>
                  </div>
                  <div className="flex items-center gap-1.5">
                    <CheckCircle2 className="h-4 w-4 text-[#dbf1c3]" />
                    <span>Emergency Hotfix CAB Overrides</span>
                  </div>
                </div>
              </div>

              {/* Code / Block Notification Mockup */}
              <div className="lg:col-span-5 rounded-2xl bg-black/60 border border-white/10 p-5 font-mono text-xs text-slate-300 space-y-3">
                <div className="flex items-center justify-between border-b border-white/10 pb-2.5 text-slate-400">
                  <span>Jira Workflow Validator Execution</span>
                  <span className="text-rose-400 font-bold">TRANSITION BLOCKED</span>
                </div>
                <div className="text-rose-300 space-y-1">
                  <p className="text-white font-semibold">
                    [EvidenceLog Gatekeeper] Cannot transition to Done:
                  </p>
                  <p className="text-slate-400 pl-2">
                    ✖ CC8.1.3: Self-approval detected. Author (alex.k) cannot transition ticket without independent peer review.
                  </p>
                  <p className="text-slate-400 pl-2">
                    ✖ CC8.1.4: Missing explicit QA sign-off or qa-verified label.
                  </p>
                </div>
                <div className="pt-2 border-t border-white/10 text-emerald-400 text-[11px]">
                  💡 Remediation: Click &ldquo;[+ Apply qa-verified]&rdquo; in the EvidenceLog issue panel to unblock.
                </div>
              </div>
            </div>
          </section>

          {/* Section 4: How Auditors Verify Workpapers (JSON + CSV) */}
          <section className="mb-20 space-y-6">
            <div className="max-w-3xl">
              <h2 className="text-2xl sm:text-4xl font-bold text-[#111013] font-heading mb-3">
                3. What the Auditor Receives: Tamper-Evident Workpapers
              </h2>
              <p className="text-sm text-[#5c728e] leading-relaxed">
                When external CPAs request change sample evidence, engineering managers don&apos;t need to schedule screen-share sessions. EvidenceLog compiles canonical JSON payloads and consolidated CSV matrices ready to upload into Vanta, Drata, or directly to your audit portal.
              </p>
            </div>

            {/* Code Box: Sample JSON Canonical Schema */}
            <div className="rounded-2xl border border-slate-200 bg-[#111013] p-6 text-white font-mono text-xs overflow-x-auto shadow-md">
              <div className="flex items-center justify-between pb-3 mb-3 border-b border-white/10 text-slate-400">
                <span className="flex items-center gap-2">
                  <Lock className="h-4 w-4 text-[#dbf1c3]" />
                  <span>Canonical SOC 2 CC8.1 Cryptographic Audit Record</span>
                </span>
                <span className="text-emerald-400">SHA-256 Verified in Forge KVS</span>
              </div>
              <pre className="text-[#dbf1c3] leading-relaxed">
{`{
  "report_id": "EV-SOC2-2026-PAYMENTS-14",
  "standard": "AICPA SOC 2 Type II - CC8.1 (Change Management)",
  "jira_issue_key": "PAY-14",
  "summary": "Upgrade Stripe SDK & Rotate Webhook Secrets",
  "repository": "github.com/company/payment-service",
  "pull_request_url": "https://github.com/company/payment-service/pull/412",
  "merge_commit": "e81d7f42c4b8109a9238cf22619c0b11582e0d31",
  "actor_author": "alex.chen@company.com",
  "actor_peer_approver": "sarah.miller@company.com",
  "actor_qa_signer": "elena.rostova@company.com",
  "controls_evaluated": {
    "CC8.1.1_acceptance_criteria": { "status": "VERIFIED", "details": "Given/When/Then DoD in description" },
    "CC8.1.2_code_linkage": { "status": "VERIFIED", "git_provider": "GitHub", "pr_id": 412 },
    "CC8.1.3_segregation_of_duties": { "status": "VERIFIED", "self_approval_disallowed": true },
    "CC8.1.4_qa_verification": { "status": "VERIFIED", "method": "qa-verified label by elena.rostova" },
    "CC8.1.5_security_sast": { "status": "VERIFIED", "scanner": "Snyk SAST clean (0 Critical)" }
  },
  "tamper_proof_checksum": "sha256:7b9204a8dc1e16f39384bb21a71994e63d3950ef1c6091ef74c653457ab895e0",
  "timestamp": "2026-11-08T14:32:01.482Z"
}`}
              </pre>
            </div>
          </section>

          {/* Section 5: Step-by-Step Implementation in 5 Minutes */}
          <section className="mb-20 space-y-8">
            <div className="max-w-3xl">
              <h2 className="text-2xl sm:text-4xl font-bold text-[#111013] font-heading mb-3">
                4. 5-Minute Implementation Guide for Engineering Leads
              </h2>
              <p className="text-sm text-[#5c728e]">
                How to activate automated SOC 2 CC8.1 verification across your Jira Cloud instance today:
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
                  Search &ldquo;EvidenceLog&rdquo; on the Atlassian Marketplace and install it into your Jira Cloud workspace. Free up to 10 users with zero external configuration.
                </p>
              </div>

              <div className="rounded-2xl border border-slate-200 bg-white p-6 shadow-xs space-y-3">
                <div className="h-8 w-8 rounded-full bg-[#111013] text-[#dbf1c3] font-bold text-xs flex items-center justify-center font-mono">
                  02
                </div>
                <h3 className="text-base font-bold text-[#111013] font-heading">
                  Link GitHub or GitLab
                </h3>
                <p className="text-xs text-[#5c728e] leading-relaxed">
                  Ensure your Git provider is connected to Jira. PRs and branches linked to issue keys are automatically discovered by the EvidenceLog parser.
                </p>
              </div>

              <div className="rounded-2xl border border-slate-200 bg-white p-6 shadow-xs space-y-3">
                <div className="h-8 w-8 rounded-full bg-[#111013] text-[#dbf1c3] font-bold text-xs flex items-center justify-center font-mono">
                  03
                </div>
                <h3 className="text-base font-bold text-[#111013] font-heading">
                  Activate Gatekeeper
                </h3>
                <p className="text-xs text-[#5c728e] leading-relaxed">
                  In your Jira Project Workflow settings, add the &ldquo;EvidenceLog SOC 2 Gatekeeper&rdquo; validator to your &ldquo;Done&rdquo; or &ldquo;Released&rdquo; transition.
                </p>
              </div>

              <div className="rounded-2xl border border-slate-200 bg-white p-6 shadow-xs space-y-3">
                <div className="h-8 w-8 rounded-full bg-[#111013] text-[#dbf1c3] font-bold text-xs flex items-center justify-center font-mono">
                  04
                </div>
                <h3 className="text-base font-bold text-[#111013] font-heading">
                  Export Audit Hub
                </h3>
                <p className="text-xs text-[#5c728e] leading-relaxed">
                  When your audit window arrives, navigate to the Jira sidebar &ldquo;EvidenceLog Audit Hub&rdquo; and click &ldquo;Download Release Dossier&rdquo; for your CPA firm.
                </p>
              </div>
            </div>
          </section>

          {/* Section 6: FAQ Accordion */}
          <section className="mb-20 max-w-4xl mx-auto space-y-6">
            <div className="text-center mb-10">
              <h2 className="text-2xl sm:text-4xl font-bold text-[#111013] font-heading mb-2">
                Frequently Asked Questions About SOC 2 CC8.1
              </h2>
              <p className="text-sm text-[#5c728e]">
                Direct answers to common audit and implementation questions.
              </p>
            </div>

            <div className="space-y-4">
              <div className="rounded-2xl border border-slate-200 p-6 bg-white shadow-2xs">
                <h3 className="text-base font-bold text-[#111013] mb-2">
                  How does EvidenceLog handle emergency hotfixes under CC8.1?
                </h3>
                <p className="text-sm text-[#5c728e] leading-relaxed">
                  Under AICPA SOC 2 guidelines and ITIL 4 change practices, emergency production incidents (Sev-1 outages) can bypass pre-release peer approvals provided they undergo mandatory retroactive Change Advisory Board (CAB) review. EvidenceLog detects emergency labels (<code className="font-mono text-xs bg-slate-100 text-rose-700 px-1 py-0.5 rounded">hotfix</code>, <code className="font-mono text-xs bg-slate-100 text-rose-700 px-1 py-0.5 rounded">sev1</code>), records them as Emergency Changes, and alerts release managers in the Audit Hub to record retroactive CAB sign-offs within 48 hours.
                </p>
              </div>

              <div className="rounded-2xl border border-slate-200 p-6 bg-white shadow-2xs">
                <h3 className="text-base font-bold text-[#111013] mb-2">
                  What if a developer edits a Jira ticket description after the audit snapshot was taken?
                </h3>
                <p className="text-sm text-[#5c728e] leading-relaxed">
                  EvidenceLog seals the state of the ticket cryptographically using SHA-256 upon resolution. The snapshot is locked inside your Jira tenant&apos;s Atlassian Forge encrypted key-value storage. If custom fields, acceptance criteria, or links are modified retroactively, our verification engine detects the hash discrepancy and displays an audit tamper alert.
                </p>
              </div>

              <div className="rounded-2xl border border-slate-200 p-6 bg-white shadow-2xs">
                <h3 className="text-base font-bold text-[#111013] mb-2">
                  Can external auditors verify these records without having a Jira license?
                </h3>
                <p className="text-sm text-[#5c728e] leading-relaxed">
                  Yes. You can export the consolidated Release Audit Dossier (CSV/Markdown) or formal printable PDF Certificates from the Project Audit Hub. Auditors can verify the cryptographic SHA-256 fingerprints and Binary Merkle Tree roots offline on their own laptops using our standalone offline verifier (<Link href="/docs/verifier.html" className="text-[#15803d] font-semibold hover:underline">docs/verifier.html</Link>) with zero internet or Jira access required.
                </p>
              </div>
            </div>
          </section>

          {/* Bottom Conversion Card */}
          <div className="rounded-3xl bg-[#111013] text-white p-8 sm:p-14 text-center space-y-6 shadow-2xl relative overflow-hidden">
            <div className="inline-block rounded-md bg-[#dbf1c3] px-3 py-1 text-xs font-bold uppercase tracking-wider text-[#0f5132] font-heading">
              FREE UP TO 10 USERS &bull; ZERO DATA EGRESS
            </div>

            <h2 className="text-3xl sm:text-5xl font-bold font-heading text-white max-w-2xl mx-auto leading-tight">
              Ready to eliminate SOC 2 manual screenshotting forever?
            </h2>

            <p className="text-sm sm:text-base text-slate-300 max-w-xl mx-auto leading-relaxed">
              Install EvidenceLog into your Jira Cloud instance today. Free forever for squads up to 10 users with 100% in-tenant Atlassian Forge security.
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
                href="/integrations/vanta-drata"
                className="inline-flex items-center justify-center gap-2 py-4 px-6 rounded-xl bg-transparent hover:bg-white/10 text-white text-sm font-semibold border border-white/20 transition-all cursor-pointer"
              >
                <span>Vanta &amp; Drata Sync</span>
              </Link>

              <Link
                href="/frameworks/iso-27001-a832"
                className="inline-flex items-center justify-center gap-2 py-4 px-6 rounded-xl bg-transparent hover:bg-white/10 text-white text-sm font-semibold border border-white/20 transition-all cursor-pointer"
              >
                <span>ISO 27001 Guide</span>
              </Link>

              <Link
                href="/#roi-calculator"
                className="inline-flex items-center justify-center gap-2 py-4 px-6 rounded-xl bg-transparent hover:bg-white/10 text-white text-sm font-semibold border border-white/20 transition-all cursor-pointer"
              >
                <span>ROI Calculator</span>
              </Link>
            </div>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
}
