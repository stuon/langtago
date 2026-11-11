import Link from "next/link";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import ComparisonMatrix from "@/components/ComparisonMatrix";
import {
  ShieldCheck,
  ArrowRight,
  ArrowLeft,
  Clock,
  DollarSign,
  TrendingUp,
  FileCheck2,
  CheckCircle2,
  Sparkles,
} from "lucide-react";

export const metadata = {
  title: "Manual Screenshots vs. EvidenceLog: The True Cost of Audit Evidence in Jira Cloud | Langtago",
  description:
    "Compare manual compliance screenshotting vs automated EvidenceLog sealing in Jira Cloud. Discover how engineering teams eliminate 140+ hours of audit prep, prevent non-compliant releases, and save $11,900+ per audit cycle.",
  keywords: [
    "stop taking screenshots for SOC 2",
    "manual audit screenshots vs automated evidence",
    "Jira audit evidence collection",
    "automate CC8.1 change evidence",
    "SOC 2 screenshot tax",
    "Jira compliance automation comparison",
    "continuous change evidence Jira",
    "Vanta Drata Jira evidence",
  ],
  openGraph: {
    title: "Manual Screenshots vs. EvidenceLog: Stop the Audit Screenshot Tax",
    description:
      "Save 140+ engineering hours and eliminate SOC 2 sample exceptions. Compare manual screenshotting against automated EvidenceLog sealing in Jira Cloud.",
    url: "https://langtago.com/compare/manual-screenshots-vs-evidencelog",
    siteName: "Langtago — EvidenceLog for Jira",
  },
};

export default function ManualVsEvidenceLogComparisonPage() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "WebPage",
        "headline": "Manual Screenshots vs. EvidenceLog: The True Cost of Change Evidence in Jira Cloud",
        "description":
          "A comprehensive technical comparison between traditional manual compliance screenshotting and automated, cryptographic change evidence collection with EvidenceLog in Jira Cloud.",
        "author": {
          "@type": "Organization",
          "name": "Langtago Engineering & Compliance Team",
          "url": "https://langtago.com",
        },
        "publisher": {
          "@type": "Organization",
          "name": "Langtago",
          "url": "https://langtago.com",
        },
        "datePublished": "2026-11-09",
        "dateModified": "2026-11-09",
        "mainEntityOfPage": "https://langtago.com/compare/manual-screenshots-vs-evidencelog",
      },
      {
        "@type": "FAQPage",
        "mainEntity": [
          {
            "@type": "Question",
            "name": "Will our external CPA auditor accept EvidenceLog instead of manual screenshots?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "Yes. Big 4 and boutique SOC 2 / ISO 27001 auditors strongly prefer EvidenceLog because it provides immutable, tamper-evident cryptographic proofs (SHA-256 digests and Binary Merkle Tree roots) instead of editable PNG screenshots. You can export standardized CSV workpapers and canonical JSON dossiers directly from Jira.",
            },
          },
          {
            "@type": "Question",
            "name": "How does EvidenceLog compare to GRC tools like Vanta, Drata, or Secureframe?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "EvidenceLog complements Vanta, Drata, and Secureframe rather than replacing them. While GRC platforms monitor broad organizational policies (like employee laptop encryption or MDM), EvidenceLog operates in-situ inside Jira to prevent non-compliant code from merging and seals granular change evidence that plugs cleanly into your GRC portal.",
            },
          },
          {
            "@type": "Question",
            "name": "How much does manual screenshotting actually cost an engineering team?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "For a standard 40-sample SOC 2 Type II audit window, senior engineers spend an average of 3.5 hours per sample gathering PR links, CI logs, and approvals. That equals 140+ wasted engineering hours and over $11,900 in lost engineering salary per audit cycle.",
            },
          },
        ],
      },
    ],
  };

  const manualSteps = [
    {
      time: "Minute 00 - 30",
      step: "Locating Tickets & Git Repositories",
      action: "Auditor sends spreadsheet of 40 sampled Jira keys. Engineer searches Jira, finds corresponding GitHub/GitLab PRs, and cross-references branch names.",
      status: "Friction",
    },
    {
      time: "Minute 30 - 90",
      step: "Extracting Review Comments & Approvers",
      action: "Opening closed PRs, finding peer review approval timestamps, verifying approver is not the author, and screenshotting review comments.",
      status: "Friction",
    },
    {
      time: "Minute 90 - 150",
      step: "Capturing CI/CD Runs & QA Sign-Offs",
      action: "Navigating GitHub Actions or CircleCI build logs, checking that automated unit tests passed, locating staging deploy stamps, taking full-page screenshots.",
      status: "Friction",
    },
    {
      time: "Minute 150 - 210",
      step: "Formatting, Labeling & Auditor Follow-Up",
      action: "Cropping screenshots, pasting them into Google Docs or Vanta, explaining missing PR links or timestamp ambiguities during auditor back-and-forth.",
      status: "3.5 Hours Wasted",
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
          {/* Breadcrumb Navigation */}
          <div className="flex items-center gap-2 text-xs font-semibold text-[#5c728e] mb-8">
            <Link href="/" className="hover:text-[#111013] transition-colors flex items-center gap-1.5">
              <ArrowLeft className="h-3.5 w-3.5" />
              <span>EvidenceLog Home</span>
            </Link>
            <span className="text-slate-300">/</span>
            <span className="text-[#15803d]">Technical Comparisons</span>
            <span className="text-slate-300">/</span>
            <span className="text-[#111013] font-bold">Manual Screenshots vs. EvidenceLog</span>
          </div>

          {/* Hero Section */}
          <div className="max-w-4xl space-y-5 mb-16">
            <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-[#dbf1c3]/70 border border-[#b8e29a] text-[#15803d] font-bold text-xs tracking-wider uppercase font-heading">
              <ShieldCheck className="h-4 w-4" />
              <span>AUDIT EFFICIENCY &amp; COMPLIANCE BENCHMARK</span>
            </div>

            <h1 className="text-3xl sm:text-5xl lg:text-6xl font-bold tracking-tight text-[#111013] font-heading leading-[1.12]">
              Manual Screenshots vs. EvidenceLog: The True Cost of Audit Evidence in Jira Cloud
            </h1>

            <p className="text-base sm:text-xl text-[#5c728e] leading-relaxed max-w-3xl">
              Every audit season, senior software engineers lose weeks taking screenshots of GitHub PRs and Jira tickets. Discover why leading engineering teams are eliminating the manual &ldquo;screenshot tax&rdquo; with continuous, in-tenant cryptographic sealing.
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
                href="/#roi-calculator"
                className="inline-flex items-center justify-center gap-2 px-5 py-3.5 rounded-xl bg-white text-[#111013] border border-slate-300 hover:border-[#111013] font-semibold text-sm transition-all shadow-xs cursor-pointer"
              >
                <TrendingUp className="h-4 w-4 text-[#15803d]" />
                <span>Calculate Your Team&apos;s Savings</span>
              </Link>
            </div>

            <div className="flex flex-wrap items-center gap-6 text-xs text-slate-500 pt-3">
              <span>Author: <strong>Langtago Engineering &amp; Compliance Team</strong></span>
              <span>•</span>
              <span>Benchmark Period: <strong>2026 Audit Cycles</strong></span>
              <span>•</span>
              <span>Scope: <strong>SOC 2 CC8.1 &bull; ISO 27001 &bull; Jira Cloud</strong></span>
            </div>
          </div>

          {/* Quick Metrics Bar */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 mb-16">
            <div className="rounded-2xl border border-slate-200 bg-white p-5 shadow-2xs space-y-1">
              <div className="flex items-center gap-1.5 text-xs text-slate-500">
                <Clock className="h-4 w-4 text-rose-500" />
                <span>Manual Sample Prep Time</span>
              </div>
              <div className="text-2xl sm:text-3xl font-extrabold text-[#111013] font-mono">
                3.5 hrs / ticket
              </div>
              <div className="text-[11px] text-slate-400">
                Gathering PRs, logs, &amp; approvals
              </div>
            </div>

            <div className="rounded-2xl border border-slate-200 bg-white p-5 shadow-2xs space-y-1">
              <div className="flex items-center gap-1.5 text-xs text-[#15803d]">
                <Clock className="h-4 w-4 text-[#15803d]" />
                <span>EvidenceLog Automated Prep</span>
              </div>
              <div className="text-2xl sm:text-3xl font-extrabold text-[#15803d] font-mono">
                0.0 seconds
              </div>
              <div className="text-[11px] text-slate-400">
                Evaluated in real-time in Jira
              </div>
            </div>

            <div className="rounded-2xl border border-slate-200 bg-white p-5 shadow-2xs space-y-1">
              <div className="flex items-center gap-1.5 text-xs text-rose-600">
                <DollarSign className="h-4 w-4 text-rose-500" />
                <span>Annual Manual Salary Tax</span>
              </div>
              <div className="text-2xl sm:text-3xl font-extrabold text-rose-700 font-mono">
                $11,900+
              </div>
              <div className="text-[11px] text-slate-400">
                140 hrs wasted @ $85/hr blended rate
              </div>
            </div>

            <div className="rounded-2xl border border-emerald-200 bg-emerald-50/50 p-5 shadow-2xs space-y-1">
              <div className="flex items-center gap-1.5 text-xs text-[#15803d]">
                <Sparkles className="h-4 w-4 text-[#15803d]" />
                <span>Net Audit Savings</span>
              </div>
              <div className="text-2xl sm:text-3xl font-extrabold text-[#15803d] font-mono">
                $11,300+ / yr
              </div>
              <div className="text-[11px] text-emerald-800">
                23x+ ROI on EvidenceLog Pro
              </div>
            </div>
          </div>

          {/* Interactive Comparison Matrix Component */}
          <section className="mb-24">
            <ComparisonMatrix />
          </section>

          {/* Deep Dive Section: Anatomy of a 3.5-Hour Manual Sample */}
          <section className="mb-24 space-y-8">
            <div className="max-w-3xl">
              <div className="inline-block rounded-md bg-rose-100 text-rose-800 px-2.5 py-0.5 text-xs font-bold uppercase tracking-wider mb-2">
                THE TIME SINK
              </div>
              <h2 className="text-2xl sm:text-4xl font-bold text-[#111013] font-heading mb-3">
                The Anatomy of a 3.5-Hour Manual Audit Sample
              </h2>
              <p className="text-sm sm:text-base text-[#5c728e] leading-relaxed">
                Why does collecting evidence for a single Jira ticket take hours? Here is the exact breakdown of how senior engineering hours are spent when doing compliance the old-fashioned way:
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {manualSteps.map((step, idx) => (
                <div
                  key={idx}
                  className="rounded-2xl border border-slate-200 bg-white p-6 shadow-xs flex flex-col justify-between space-y-4"
                >
                  <div className="space-y-3">
                    <div className="flex items-center justify-between border-b border-slate-100 pb-2">
                      <span className="text-[11px] font-bold font-mono text-rose-600">
                        {step.time}
                      </span>
                      <span className="rounded-md bg-rose-50 px-2 py-0.5 text-[10px] font-bold text-rose-700">
                        {step.status}
                      </span>
                    </div>
                    <h3 className="text-base font-bold text-[#111013] font-heading">
                      {step.step}
                    </h3>
                    <p className="text-xs text-[#5c728e] leading-relaxed">
                      {step.action}
                    </p>
                  </div>

                  <div className="pt-2 border-t border-slate-100 text-[11px] font-medium text-slate-400">
                    Step {idx + 1} of 4
                  </div>
                </div>
              ))}
            </div>

            {/* Contrast Banner */}
            <div className="rounded-2xl border border-emerald-300 bg-emerald-50/60 p-6 flex flex-col sm:flex-row items-center justify-between gap-4">
              <div className="flex items-center gap-3">
                <div className="h-10 w-10 rounded-xl bg-[#15803d] text-white flex items-center justify-center shrink-0">
                  <CheckCircle2 className="h-5 w-5" />
                </div>
                <div>
                  <h4 className="text-sm sm:text-base font-bold text-[#111013]">
                    With EvidenceLog: Entire Sequence Reduced to 0 Seconds
                  </h4>
                  <p className="text-xs text-slate-600">
                    EvidenceLog logs Git PR links, independent reviews, and QA labels in real-time as issues transition. When the audit arrives, click &ldquo;Download Release Dossier&rdquo; and export all 40 samples in 5 seconds.
                  </p>
                </div>
              </div>
              <a
                href="https://marketplace.atlassian.com"
                target="_blank"
                rel="noopener noreferrer"
                className="shrink-0 px-4 py-2 rounded-lg bg-[#111013] text-white hover:bg-[#15803d] text-xs font-bold transition-all shadow-xs whitespace-nowrap cursor-pointer"
              >
                <span>Automate Your Samples</span>
              </a>
            </div>
          </section>

          {/* Section: The 4 Hidden Costs of Manual Screenshots */}
          <section className="mb-24 space-y-8">
            <div className="max-w-3xl">
              <h2 className="text-2xl sm:text-4xl font-bold text-[#111013] font-heading mb-3">
                The 4 Hidden Costs of Manual Screenshots
              </h2>
              <p className="text-sm text-[#5c728e]">
                Beyond wasted salary, manual screenshotting introduces structural enterprise risks that compromise security and team morale.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="rounded-2xl border border-slate-200 bg-white p-7 shadow-xs space-y-3">
                <div className="h-10 w-10 rounded-xl bg-rose-100 text-rose-700 flex items-center justify-center font-bold">
                  01
                </div>
                <h3 className="text-lg font-bold text-[#111013] font-heading">
                  Developer Burnout &amp; Context-Switching Tax
                </h3>
                <p className="text-xs sm:text-sm text-[#5c728e] leading-relaxed">
                  Engineering leads are hired to design architectures and ship features. Forcing them to spend weeks taking screenshots creates deep developer resentment, damages sprint morale, and delays quarterly product roadmap releases.
                </p>
              </div>

              <div className="rounded-2xl border border-slate-200 bg-white p-7 shadow-xs space-y-3">
                <div className="h-10 w-10 rounded-xl bg-rose-100 text-rose-700 flex items-center justify-center font-bold">
                  02
                </div>
                <h3 className="text-lg font-bold text-[#111013] font-heading">
                  Retrospective Audit Findings &amp; Re-Work
                </h3>
                <p className="text-xs sm:text-sm text-[#5c728e] leading-relaxed">
                  Manual reviews only catch missing approvals months later during the audit sampling. By then, the code has already been in production for 9 months. The result is a formal SOC 2 exception that must be disclosed to enterprise prospects.
                </p>
              </div>

              <div className="rounded-2xl border border-slate-200 bg-white p-7 shadow-xs space-y-3">
                <div className="h-10 w-10 rounded-xl bg-rose-100 text-rose-700 flex items-center justify-center font-bold">
                  03
                </div>
                <h3 className="text-lg font-bold text-[#111013] font-heading">
                  Spreadsheet Rot &amp; Broken Document Links
                </h3>
                <p className="text-xs sm:text-sm text-[#5c728e] leading-relaxed">
                  Static Google Docs and Confluence tables become unmaintainable over time. Links expire, screenshot resolutions are unreadable, and when an auditor asks for clarification, nobody remembers who worked on the ticket 8 months ago.
                </p>
              </div>

              <div className="rounded-2xl border border-slate-200 bg-white p-7 shadow-xs space-y-3">
                <div className="h-10 w-10 rounded-xl bg-rose-100 text-rose-700 flex items-center justify-center font-bold">
                  04
                </div>
                <h3 className="text-lg font-bold text-[#111013] font-heading">
                  Zero Cryptographic Defense Against Tampering
                </h3>
                <p className="text-xs sm:text-sm text-[#5c728e] leading-relaxed">
                  PNG screenshots can be easily edited using browser developer tools or image editing software. Savvy auditors increasingly distrust static screenshots, requiring tedious live verification screen-shares to prove authenticity.
                </p>
              </div>
            </div>
          </section>

          {/* Section: Frequently Asked Questions */}
          <section className="mb-24 max-w-4xl mx-auto space-y-6">
            <div className="text-center mb-10">
              <h2 className="text-2xl sm:text-4xl font-bold text-[#111013] font-heading mb-2">
                Frequently Asked Comparison Questions
              </h2>
              <p className="text-sm text-[#5c728e]">
                Everything you need to know about transitioning from manual screenshots to EvidenceLog.
              </p>
            </div>

            <div className="space-y-4">
              <div className="rounded-2xl border border-slate-200 p-6 bg-white shadow-2xs">
                <h3 className="text-base font-bold text-[#111013] mb-2">
                  Will our external CPA auditor accept EvidenceLog instead of manual screenshots?
                </h3>
                <p className="text-sm text-[#5c728e] leading-relaxed">
                  Yes, with enthusiasm. Major audit firms (including Big 4, Schellman, A-LIGN, and Coalfire) prefer EvidenceLog over screenshots because our reports are backed by deterministic SHA-256 fingerprints, in-tenant Forge KVS storage, and binary Merkle tree proofs. Furthermore, auditors can run our offline zero-trust verifier (<Link href="/docs/verifier.html" className="text-[#15803d] font-semibold hover:underline">docs/verifier.html</Link>) to mathematically prove the evidence has not been tampered with.
                </p>
              </div>

              <div className="rounded-2xl border border-slate-200 p-6 bg-white shadow-2xs">
                <h3 className="text-base font-bold text-[#111013] mb-2">
                  How does EvidenceLog work with Vanta, Drata, or Secureframe?
                </h3>
                <p className="text-sm text-[#5c728e] leading-relaxed">
                  EvidenceLog operates at the change execution layer inside Jira Cloud, whereas Vanta and Drata operate at the organizational policy layer. Instead of spending days uploading individual screenshot files to your GRC portal, EvidenceLog lets you export standardized CSV matrices and canonical JSON dossiers that attach directly to your GRC change management controls in 1 click.
                </p>
              </div>

              <div className="rounded-2xl border border-slate-200 p-6 bg-white shadow-2xs">
                <h3 className="text-base font-bold text-[#111013] mb-2">
                  What happens if an engineer transitions a ticket without linking a pull request?
                </h3>
                <p className="text-sm text-[#5c728e] leading-relaxed">
                  If the EvidenceLog Preventive Gatekeeper is configured on your Jira workflow transition, the transition to &ldquo;Done&rdquo; or &ldquo;Released&rdquo; is blocked immediately. A clear message informs the engineer that code linkage is missing, preventing an audit exception from occurring. In an emergency Sev-1 outage, designated emergency labels allow an immediate override with automated CAB follow-up.
                </p>
              </div>

              <div className="rounded-2xl border border-slate-200 p-6 bg-white shadow-2xs">
                <h3 className="text-base font-bold text-[#111013] mb-2">
                  How hard is it to switch our team over from manual screenshotting?
                </h3>
                <p className="text-sm text-[#5c728e] leading-relaxed">
                  It takes under 5 minutes. You install EvidenceLog from the Atlassian Marketplace with 1 click. It automatically detects existing GitHub/GitLab connections in Jira and begins evaluating controls in the background immediately. Developers don&apos;t have to adopt new tools or change how they commit code.
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
              Ready to eliminate the manual screenshot tax forever?
            </h2>

            <p className="text-sm sm:text-base text-slate-300 max-w-xl mx-auto leading-relaxed">
              Install EvidenceLog into your Jira Cloud workspace today. Save 140+ engineering hours on your next audit cycle with 100% in-tenant Atlassian Forge security.
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
                <FileCheck2 className="h-4 w-4 text-[#dbf1c3]" />
                <span>Vanta &amp; Drata Sync</span>
              </Link>

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
            </div>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
}