import Link from "next/link";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import {
  FileCheck2,
  CheckCircle2,
  ArrowRight,
  AlertTriangle,
  Clock,
  Calendar,
  User,
  ShieldCheck,
  Terminal,
  ExternalLink,
} from "lucide-react";

export const metadata = {
  title: "The 40-Sample SOC 2 Change Management Audit: How to Pass Without 150 Hours of Screenshots | Langtago",
  description:
    "Every SOC 2 Type II audit begins with the dreaded 40-sample change request list. Learn the exact 5 criteria auditors inspect on every Jira ticket, where teams fail, and how to automate the evidence in Jira Cloud.",
  keywords: [
    "SOC 2 change management 40 samples",
    "SOC 2 CC8.1 audit checklist Jira",
    "how to pass SOC 2 change management audit",
    "SOC 2 sample testing pull requests",
    "segregation of duties Jira audit evidence",
    "Jira change management SOC 2 template",
    "auditor sample request change management",
  ],
  alternates: {
    canonical: "https://langtago.com/guides/soc2-change-management-40-sample-audit",
  },
  openGraph: {
    title: "The 40-Sample SOC 2 Change Management Audit: How to Pass Without 150 Hours of Screenshots",
    description:
      "A technical walkthrough of how auditors inspect your 40 production change samples, the 5 mandatory evidence points, and how to eliminate manual screenshotting in Jira Cloud.",
    url: "https://langtago.com/guides/soc2-change-management-40-sample-audit",
    siteName: "Langtago — EvidenceLog for Jira",
  },
};

export default function Soc2SampleAuditGuidePage() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "TechArticle",
        "headline": "The 40-Sample SOC 2 Change Management Audit: How to Pass Without 150 Hours of Screenshots",
        "description": "A comprehensive engineering guide detailing how SOC 2 auditors sample production changes, what evidence is inspected per ticket, and how to automate compliance proof directly in Jira.",
        "author": {
          "@type": "Organization",
          "name": "Langtago Engineering Team",
          "url": "https://langtago.com",
        },
        "publisher": {
          "@type": "Organization",
          "name": "Langtago",
          "url": "https://langtago.com",
        },
        "datePublished": "2026-11-12",
        "dateModified": "2026-11-12",
        "mainEntityOfPage": "https://langtago.com/guides/soc2-change-management-40-sample-audit",
      },
      {
        "@type": "BreadcrumbList",
        "itemListElement": [
          {
            "@type": "ListItem",
            "position": 1,
            "name": "Home",
            "item": "https://langtago.com",
          },
          {
            "@type": "ListItem",
            "position": 2,
            "name": "Engineering Guides",
            "item": "https://langtago.com/guides",
          },
          {
            "@type": "ListItem",
            "position": 3,
            "name": "The 40-Sample SOC 2 Change Management Audit",
            "item": "https://langtago.com/guides/soc2-change-management-40-sample-audit",
          },
        ],
      },
    ],
  };

  return (
    <div className="relative min-h-screen bg-white font-sans text-[#5c728e] selection:bg-[#dbf1c3] selection:text-[#0f5132]">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />

      <Navbar />

      <main className="relative pt-12 pb-24">
        <article className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
          {/* Breadcrumb Navigation */}
          <nav className="flex items-center gap-2 text-xs text-slate-400 mb-8">
            <Link href="/" className="hover:text-[#111013] transition-colors">
              Home
            </Link>
            <span>/</span>
            <Link href="/guides" className="hover:text-[#111013] transition-colors">
              Engineering Guides
            </Link>
            <span>/</span>
            <span className="text-[#111013] font-medium truncate">
              40-Sample SOC 2 Audit Guide
            </span>
          </nav>

          {/* Article Header */}
          <header className="space-y-6 pb-10 border-b border-slate-100">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#dbf1c3]/60 border border-[#b8e29a] text-[#15803d] font-bold text-xs uppercase tracking-wider font-heading">
              <FileCheck2 className="h-3.5 w-3.5" />
              <span>SOC 2 TYPE II AUDIT WORKPAPERS</span>
            </div>

            <h1 className="text-3xl sm:text-5xl font-bold text-[#111013] font-heading leading-tight tracking-tight">
              The 40-Sample SOC 2 Change Management Audit: How to Pass Without 150 Hours of Screenshots
            </h1>

            <p className="text-lg sm:text-xl text-[#5c728e] leading-relaxed">
              Every SOC 2 Type II audit cycle begins with the same email from your auditor: a spreadsheet of 40 randomly selected production deployments with a 5-day deadline to provide proof for each. Here is the exact testing rubric auditors use, where teams get flagged, and how to automate the evidence directly in Jira.
            </p>

            {/* Author & Reading Metadata */}
            <div className="flex flex-wrap items-center gap-6 text-xs text-slate-500 pt-2 border-t border-slate-100">
              <div className="flex items-center gap-2">
                <User className="h-4 w-4 text-[#15803d]" />
                <span className="font-medium text-[#111013]">Langtago Security &amp; Compliance Team</span>
              </div>
              <div className="flex items-center gap-2">
                <Calendar className="h-4 w-4 text-slate-400" />
                <span>November 2026</span>
              </div>
              <div className="flex items-center gap-2">
                <Clock className="h-4 w-4 text-slate-400" />
                <span>9 min read</span>
              </div>
            </div>
          </header>

          {/* Key Auditor Takeaways Callout Box */}
          <div className="my-10 rounded-2xl bg-slate-50 border border-slate-200 p-6 sm:p-8 space-y-4">
            <div className="flex items-center gap-2.5 text-xs font-bold uppercase tracking-wider text-[#111013] font-heading">
              <ShieldCheck className="h-4 w-4 text-[#15803d]" />
              <span>Executive Summary: What Auditors Actually Check</span>
            </div>
            <ul className="space-y-2 text-sm text-[#111013] leading-relaxed">
              <li className="flex items-start gap-2.5">
                <CheckCircle2 className="h-4 w-4 text-[#15803d] shrink-0 mt-0.5" />
                <span><strong>The Population:</strong> Auditors pull a list of all production git tags or releases over the last 12 months and randomly select 25 to 40 items.</span>
              </li>
              <li className="flex items-start gap-2.5">
                <CheckCircle2 className="h-4 w-4 text-[#15803d] shrink-0 mt-0.5" />
                <span><strong>The 5 Evidence Pillars:</strong> For every single sample, you must prove: (1) business authorization, (2) independent peer review (Author &ne; Approver), (3) automated test runs, (4) staging QA verification, and (5) commit SHA traceability.</span>
              </li>
              <li className="flex items-start gap-2.5">
                <CheckCircle2 className="h-4 w-4 text-[#15803d] shrink-0 mt-0.5" />
                <span><strong>The Manual Trap:</strong> Finding and screenshotting these 5 points across Jira, GitHub, CircleCI, and Slack takes 3 to 4 hours per sample (~120–160 engineering hours per year).</span>
              </li>
            </ul>
          </div>

          {/* Main Article Body */}
          <div className="space-y-12 text-[#111013] leading-relaxed text-base">
            {/* Section 1: How the Audit Sampling Process Works */}
            <section className="space-y-4">
              <h2 className="text-2xl sm:text-3xl font-bold font-heading text-[#111013] pt-4">
                1. How the SOC 2 Sample Selection Process Works
              </h2>
              <p className="text-[#5c728e]">
                Under AICPA Trust Services Criteria CC8.1, auditors are required to test changes that occurred throughout the entire <em>period of reliance</em> (typically 6 or 12 months for a SOC 2 Type II).
              </p>
              <p className="text-[#5c728e]">
                The process follows three strict phases:
              </p>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4 pt-2">
                <div className="p-5 rounded-xl border border-slate-200 bg-white shadow-2xs space-y-2">
                  <div className="text-xs font-bold text-[#15803d] font-heading uppercase">Phase 1</div>
                  <h3 className="text-sm font-bold text-[#111013]">Population Extraction</h3>
                  <p className="text-xs text-[#5c728e] leading-normal">
                    You export a complete list of all production merges or deployment commits between January 1 and December 31.
                  </p>
                </div>
                <div className="p-5 rounded-xl border border-slate-200 bg-white shadow-2xs space-y-2">
                  <div className="text-xs font-bold text-[#15803d] font-heading uppercase">Phase 2</div>
                  <h3 className="text-sm font-bold text-[#111013]">Sample Selection</h3>
                  <p className="text-xs text-[#5c728e] leading-normal">
                    The auditor uses a statistical formula or random number generator to pick 25 to 40 samples from your list.
                  </p>
                </div>
                <div className="p-5 rounded-xl border border-slate-200 bg-white shadow-2xs space-y-2">
                  <div className="text-xs font-bold text-[#15803d] font-heading uppercase">Phase 3</div>
                  <h3 className="text-sm font-bold text-[#111013]">Evidence Inspection</h3>
                  <p className="text-xs text-[#5c728e] leading-normal">
                    For each selected ticket, you must provide contemporaneous proof that all change controls were satisfied before release.
                  </p>
                </div>
              </div>
            </section>

            {/* Section 2: The 5 Non-Negotiable Auditor Inspection Criteria */}
            <section className="space-y-4">
              <h2 className="text-2xl sm:text-3xl font-bold font-heading text-[#111013] pt-4">
                2. The 5 Evidence Criteria Tested on Every Single Ticket
              </h2>
              <p className="text-[#5c728e]">
                When an auditor opens a change sample, they are not reading your code. They are scanning for five specific timestamps and signatures:
              </p>

              <div className="space-y-4 pt-2">
                <div className="rounded-xl border border-slate-200 p-5 space-y-2 bg-white">
                  <div className="flex items-center justify-between">
                    <h3 className="text-sm sm:text-base font-bold text-[#111013]">
                      Criterion 1: Pre-Authorized Jira Ticket
                    </h3>
                    <span className="text-[11px] font-bold px-2 py-0.5 rounded bg-emerald-50 text-[#15803d]">Mandatory</span>
                  </div>
                  <p className="text-xs sm:text-sm text-[#5c728e]">
                    The Jira ticket must have been created <em>before</em> the pull request was merged. If an engineer merged code on Tuesday and created the Jira ticket on Wednesday to cover their tracks, the auditor records an exception.
                  </p>
                </div>

                <div className="rounded-xl border border-slate-200 p-5 space-y-2 bg-white">
                  <div className="flex items-center justify-between">
                    <h3 className="text-sm sm:text-base font-bold text-[#111013]">
                      Criterion 2: Segregation of Duties (Author &ne; Approver)
                    </h3>
                    <span className="text-[11px] font-bold px-2 py-0.5 rounded bg-emerald-50 text-[#15803d]">Mandatory</span>
                  </div>
                  <p className="text-xs sm:text-sm text-[#5c728e]">
                    The engineer who wrote the code or opened the pull request cannot approve their own change. Auditors cross-reference the Git commit email against the PR approval username. If an emergency hotfix was pushed without approval, an exception is flagged unless an emergency post-review is documented within 24 hours.
                  </p>
                </div>

                <div className="rounded-xl border border-slate-200 p-5 space-y-2 bg-white">
                  <div className="flex items-center justify-between">
                    <h3 className="text-sm sm:text-base font-bold text-[#111013]">
                      Criterion 3: Non-Production Test Execution
                    </h3>
                    <span className="text-[11px] font-bold px-2 py-0.5 rounded bg-emerald-50 text-[#15803d]">Mandatory</span>
                  </div>
                  <p className="text-xs sm:text-sm text-[#5c728e]">
                    You must prove that unit, integration, or lint tests passed in staging or CI before merging into main. Auditors look for the green checkmark or build job URL corresponding to that exact commit SHA.
                  </p>
                </div>

                <div className="rounded-xl border border-slate-200 p-5 space-y-2 bg-white">
                  <div className="flex items-center justify-between">
                    <h3 className="text-sm sm:text-base font-bold text-[#111013]">
                      Criterion 4: Product / QA Acceptance
                    </h3>
                    <span className="text-[11px] font-bold px-2 py-0.5 rounded bg-emerald-50 text-[#15803d]">Mandatory</span>
                  </div>
                  <p className="text-xs sm:text-sm text-[#5c728e]">
                    Code review alone is insufficient for CC8.1. There must be affirmative sign-off that the change satisfied the ticket&apos;s acceptance criteria (e.g., QA team verification in staging, or product manager sign-off).
                  </p>
                </div>

                <div className="rounded-xl border border-slate-200 p-5 space-y-2 bg-white">
                  <div className="flex items-center justify-between">
                    <h3 className="text-sm sm:text-base font-bold text-[#111013]">
                      Criterion 5: Commit SHA Traceability
                    </h3>
                    <span className="text-[11px] font-bold px-2 py-0.5 rounded bg-emerald-50 text-[#15803d]">Mandatory</span>
                  </div>
                  <p className="text-xs sm:text-sm text-[#5c728e]">
                    The auditor must be able to trace the deployed release tag directly back to the pull request and Jira ticket without gaps in the commit tree.
                  </p>
                </div>
              </div>
            </section>

            {/* Section 3: Why Manual Screenshotting Breaks Down */}
            <section className="space-y-4">
              <h2 className="text-2xl sm:text-3xl font-bold font-heading text-[#111013] pt-4">
                3. The 3 Costly Failure Points of Manual Evidence Gathering
              </h2>
              <div className="space-y-4">
                <div className="flex items-start gap-3 p-4 rounded-xl bg-amber-50/60 border border-amber-200/80">
                  <AlertTriangle className="h-5 w-5 text-amber-600 shrink-0 mt-0.5" />
                  <div className="space-y-1">
                    <h4 className="text-sm font-bold text-[#111013]">1. Ghost Pull Requests</h4>
                    <p className="text-xs text-[#5c728e]">
                      A developer moved a Jira ticket to &quot;Done&quot;, but the PR was never merged—or three different PRs were merged into different branches, and nobody knows which one deployed to production. Engineers spend hours combing Git reflogs to reconstruct the trail.
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-3 p-4 rounded-xl bg-amber-50/60 border border-amber-200/80">
                  <AlertTriangle className="h-5 w-5 text-amber-600 shrink-0 mt-0.5" />
                  <div className="space-y-1">
                    <h4 className="text-sm font-bold text-[#111013]">2. Self-Approved PRs Slipping Past Admin Controls</h4>
                    <p className="text-xs text-[#5c728e]">
                      Repo admins who have GitHub bypass rights frequently merge their own code during late-night hotfixes. When the auditor pulls sample #23 and spots <code className="text-xs bg-white px-1 py-0.5 rounded font-mono">author == reviewer</code>, your team is hit with a control deficiency.
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-3 p-4 rounded-xl bg-amber-50/60 border border-amber-200/80">
                  <AlertTriangle className="h-5 w-5 text-amber-600 shrink-0 mt-0.5" />
                  <div className="space-y-1">
                    <h4 className="text-sm font-bold text-[#111013]">3. Ephemeral CI Logs That Expired 90 Days Ago</h4>
                    <p className="text-xs text-[#5c728e]">
                      Most CI/CD platforms (GitHub Actions, CircleCI) delete detailed build and test execution logs after 30 to 90 days. When an auditor asks for evidence from a deployment that occurred 10 months ago, the test artifact URL returns a 404.
                    </p>
                  </div>
                </div>
              </div>
            </section>

            {/* Section 4: Automating the 40 Samples with EvidenceLog */}
            <section className="space-y-6 pt-4 border-t border-slate-100">
              <h2 className="text-2xl sm:text-3xl font-bold font-heading text-[#111013]">
                4. The Engineering Fix: Continuous In-Tenant Verification
              </h2>
              <p className="text-[#5c728e]">
                Instead of conducting a fire drill every 12 months, modern engineering teams enforce change control <em>at the moment of transition</em> inside Jira Cloud:
              </p>

              <div className="space-y-4">
                <div className="p-5 rounded-2xl bg-slate-900 text-white space-y-3 font-mono text-xs">
                  <div className="flex items-center justify-between text-slate-400 border-b border-slate-800 pb-2">
                    <span className="flex items-center gap-2">
                      <Terminal className="h-4 w-4 text-[#dbf1c3]" />
                      <span>EvidenceLog Automated Transition Validator</span>
                    </span>
                    <span className="text-[11px] text-[#dbf1c3]">Atlassian Forge Native</span>
                  </div>
                  <div className="text-slate-300 space-y-1.5 leading-relaxed font-mono">
                    <p className="text-emerald-400">[PASS] Linked Pull Request #42 verified (GitHub)</p>
                    <p className="text-emerald-400">[PASS] Peer Review Verified: approver &apos;sarah.chen&apos; != author &apos;joe.chen&apos;</p>
                    <p className="text-emerald-400">[PASS] CI/CD Regression Tests passed (Commit 7f9a2e1)</p>
                    <p className="text-emerald-400">[PASS] Staging Acceptance Sign-off confirmed</p>
                    <p className="text-amber-300">[SEALED] SHA-256 Digest: c4b38d01... sealed in Jira KVS</p>
                  </div>
                </div>

                <p className="text-sm text-[#5c728e]">
                  When audit season arrives:
                </p>
                <ol className="list-decimal pl-5 space-y-2 text-sm text-[#111013]">
                  <li>You give the auditor read-only access to Jira, or export all 40 change certificates in 1 click.</li>
                  <li>Each ticket contains a tamper-evident audit badge containing the exact commit SHA, reviewer IDs, test run statuses, and cryptographic digest.</li>
                  <li>The auditor can verify any certificate offline using our open-source SHA-256 CLI verifier.</li>
                </ol>
              </div>
            </section>

            {/* Next Steps & Related Resources */}
            <div className="pt-8 border-t border-slate-200">
              <h3 className="text-sm font-bold uppercase tracking-wider text-[#111013] font-heading mb-4">
                Related Technical Guides &amp; Frameworks
              </h3>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <Link
                  href="/guides/why-github-branch-protection-fails-soc2"
                  className="p-4 rounded-xl border border-slate-200 hover:border-[#111013] transition-colors group space-y-1"
                >
                  <div className="text-xs font-bold text-[#15803d]">DevOps Deep Dive</div>
                  <div className="text-sm font-bold text-[#111013] group-hover:text-[#15803d] transition-colors">
                    Why GitHub branch protection rules don&apos;t satisfy auditors ↗
                  </div>
                  <p className="text-xs text-[#5c728e]">The 3 blind spots branch protection creates in Jira.</p>
                </Link>

                <Link
                  href="/frameworks/soc2-cc81"
                  className="p-4 rounded-xl border border-slate-200 hover:border-[#111013] transition-colors group space-y-1"
                >
                  <div className="text-xs font-bold text-[#15803d]">Framework Specification</div>
                  <div className="text-sm font-bold text-[#111013] group-hover:text-[#15803d] transition-colors">
                    SOC 2 CC8.1 Jira Engineering Guide ↗
                  </div>
                  <p className="text-xs text-[#5c728e]">Technical specification for CC8.1 change management.</p>
                </Link>
              </div>
            </div>

            {/* Bottom Download Sample / Marketplace CTA */}
            <div className="rounded-3xl bg-[#111013] text-white p-8 sm:p-10 space-y-4 shadow-xl">
              <div className="inline-block rounded-md bg-white/10 px-3 py-1 text-xs font-bold uppercase tracking-wider text-[#dbf1c3] font-heading">
                FREE FOR SQUADS UP TO 10 USERS
              </div>
              <h3 className="text-xl sm:text-2xl font-bold font-heading text-white">
                Eliminate 150+ hours of audit screenshotting before your next window opens.
              </h3>
              <p className="text-xs sm:text-sm text-slate-300 max-w-xl leading-relaxed">
                EvidenceLog runs 100% inside your Atlassian Cloud tenant on isolated Forge microVMs. Zero external databases, zero code egress, and zero setup hassle.
              </p>
              <div className="flex flex-wrap items-center gap-3 pt-2">
                <a
                  href="https://marketplace.atlassian.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-5 py-3 rounded-xl bg-[#dbf1c3] hover:bg-white text-[#111013] font-bold text-xs transition-colors"
                >
                  <span>Install Free on Atlassian Marketplace</span>
                  <ExternalLink className="h-3.5 w-3.5" />
                </a>
                <Link
                  href="/faq"
                  className="inline-flex items-center gap-2 px-5 py-3 rounded-xl bg-white/10 hover:bg-white/20 text-white font-semibold text-xs transition-colors"
                >
                  <span>Read Auditor FAQ</span>
                  <ArrowRight className="h-3.5 w-3.5" />
                </Link>
              </div>
            </div>
          </div>
        </article>
      </main>

      <Footer />
    </div>
  );
}
