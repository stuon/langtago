import Link from "next/link";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import {
  ShieldAlert,
  CheckCircle2,
  ArrowRight,
  ArrowLeft,
  AlertTriangle,
  Clock,
  Calendar,
  User,
} from "lucide-react";

export const metadata = {
  title: "Why GitHub Branch Protection Rules Don't Satisfy Your SOC 2 Auditor | Langtago",
  description:
    "Branch protection enforces peer reviews in Git, but auditors audit Jira. Learn why 40-sample audit requests fail on GitHub alone, the 3 blind spots branch protection creates, and how to automate proof without manual screenshots.",
  keywords: [
    "GitHub branch protection SOC 2",
    "SOC 2 CC8.1 branch protection",
    "Jira GitHub SOC 2 change management",
    "branch protection rule auditor fail",
    "separation of duties GitHub Jira",
    "automated change management evidence Jira",
    "SOC 2 Type II change sample evidence",
    "stop screenshotting pull requests SOC 2",
  ],
  openGraph: {
    title: "Why GitHub Branch Protection Rules Don't Satisfy Your SOC 2 Auditor (And What Does)",
    description:
      "Branch protection enforces peer review in Git. But your auditor audits Jira. Here is why the disconnect happens during sample testing, and how to bridge the gap without taking 100 screenshots.",
    url: "https://langtago.com/guides/why-github-branch-protection-fails-soc2",
    siteName: "Langtago — EvidenceLog for Jira",
  },
};

export default function WhyGithubBranchProtectionFailsPage() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "TechArticle",
        "headline": "Why GitHub Branch Protection Rules Don't Satisfy Your SOC 2 Auditor (And What Does)",
        "description": "An in-depth technical analysis for engineering leads and DevOps managers on why GitHub branch protection rules fall short during SOC 2 CC8.1 audits, and how to automate audit-ready evidence in Jira.",
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
        "mainEntityOfPage": "https://langtago.com/guides/why-github-branch-protection-fails-soc2",
      },
    ],
  };

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
        <article className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
          {/* Breadcrumb */}
          <div className="flex items-center gap-2 text-xs font-semibold text-[#5c728e] mb-6">
            <Link href="/" className="hover:text-[#111013] transition-colors flex items-center gap-1">
              <ArrowLeft className="h-3.5 w-3.5" />
              <span>EvidenceLog</span>
            </Link>
            <span>/</span>
            <Link href="/guides" className="hover:text-[#111013] transition-colors">
              Engineering Guides
            </Link>
            <span>/</span>
            <span className="text-[#111013] font-bold">GitHub vs. SOC 2 Audits</span>
          </div>

          {/* Article Header */}
          <div className="mb-10 pb-8 border-b border-slate-200">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#dbf1c3]/70 border border-[#b8e29a] text-[#15803d] font-bold text-xs uppercase tracking-wider mb-4 font-heading">
              <ShieldAlert className="h-3.5 w-3.5 text-[#15803d]" />
              <span>DevOps &amp; Compliance Deep Dive</span>
            </div>

            <h1 className="text-3xl sm:text-5xl font-bold tracking-tight text-[#111013] leading-[1.15] font-heading mb-6">
              Why GitHub branch protection rules don&apos;t satisfy your SOC 2 auditor (and what does)
            </h1>

            <p className="text-lg sm:text-xl text-[#5c728e] leading-relaxed mb-6 font-normal">
              Branch protection enforces code review inside Git. But your auditor audits Jira. Here is why the disconnect happens during sample testing, the 3 blind spots that trigger audit findings, and how to bridge the gap without taking 100 manual screenshots.
            </p>

            <div className="flex flex-wrap items-center gap-6 text-xs text-[#5c728e] pt-2">
              <span className="flex items-center gap-1.5 font-medium text-[#111013]">
                <User className="h-3.5 w-3.5 text-[#15803d]" />
                <span>Langtago Engineering Team</span>
              </span>
              <span className="flex items-center gap-1.5">
                <Calendar className="h-3.5 w-3.5" />
                <span>November 12, 2026</span>
              </span>
              <span className="flex items-center gap-1.5">
                <Clock className="h-3.5 w-3.5" />
                <span>8 min read</span>
              </span>
            </div>
          </div>

          {/* Article Body */}
          <div className="prose prose-slate max-w-none text-[#5c728e] space-y-10 leading-relaxed text-base">
            {/* The Trap */}
            <section className="space-y-4">
              <h2 className="text-2xl sm:text-3xl font-bold text-[#111013] font-heading">
                The false sense of security in repository settings
              </h2>
              <p>
                Almost every engineering team preparing for their first SOC 2 Type II or ISO 27001 audit starts with the exact same assumption:
              </p>
              <div className="rounded-xl border border-slate-200 bg-slate-50 p-5 font-mono text-xs text-slate-800 space-y-1.5">
                <p className="font-bold text-[#111013]">GitHub Repository Settings &rarr; Branches &rarr; Branch protection rule (main):</p>
                <p className="text-emerald-700 font-mono">[ENABLED] Require a pull request before merging (1 required approval)</p>
                <p className="text-emerald-700 font-mono">[ENABLED] Dismiss stale pull request approvals when new commits are pushed</p>
                <p className="text-emerald-700 font-mono">[ENABLED] Require status checks to pass before merging</p>
                <p className="text-emerald-700 font-mono">[ENABLED] Require conversation resolution before merging</p>
              </div>
              <p>
                On paper, this looks airtight. If nobody can push directly to <code className="text-xs bg-slate-100 px-1.5 py-0.5 rounded text-slate-800 font-mono">main</code>, and every pull request requires an approval from a teammate, you have enforced segregation of duties. Right?
              </p>
              <p>
                Then audit season arrives. The auditor sends over a CSV of 40 random Jira tickets marked &quot;Done&quot; between July and October. They ask for evidence that each ticket was authorized, tested in staging, reviewed by an independent engineer, and deployed with zero unauthorized changes.
              </p>
              <p>
                When you reply: <em>&quot;We have branch protection turned on in GitHub repo settings,&quot;</em> the auditor shakes their head:
              </p>
              <blockquote className="border-l-4 border-[#15803d] pl-4 italic text-slate-700 bg-slate-50 py-3 rounded-r-lg">
                &quot;Configuration settings show what your policy was supposed to do. I need sample evidence showing what actually happened on these specific 40 production changes.&quot;
              </blockquote>
            </section>

            {/* How Auditors Test */}
            <section className="space-y-4">
              <h2 className="text-2xl sm:text-3xl font-bold text-[#111013] font-heading">
                How an auditor actually tests change management (SOC 2 CC8.1)
              </h2>
              <p>
                Under AICPA Trust Services Criterion CC8.1 (Change Management), the auditor must verify that changes to software across the production environment follow a documented lifecycle:
              </p>
              <ol className="list-decimal pl-6 space-y-2 text-slate-700 font-medium text-sm">
                <li><strong>Authorization:</strong> Was there a valid business request or ticket before code was written?</li>
                <li><strong>Segregation of Duties:</strong> Did someone other than the author inspect and approve the change?</li>
                <li><strong>Pre-Deployment Testing:</strong> Was the change verified in a non-production environment before production release?</li>
                <li><strong>Completeness:</strong> Can you prove the exact code in the PR is what actually deployed to production?</li>
              </ol>
              <p>
                GitHub branch protection controls the Git merge event. It knows nothing about the Jira ticket, the business justification, the QA sign-off comment, or the staging deployment tag.
              </p>
            </section>

            {/* The 3 Fatal Blind Spots */}
            <section className="space-y-6">
              <h2 className="text-2xl sm:text-3xl font-bold text-[#111013] font-heading">
                The 3 blind spots that fail audits when relying on GitHub alone
              </h2>

              {/* Blind Spot 1 */}
              <div className="rounded-2xl border border-slate-200 bg-white p-6 shadow-xs space-y-3">
                <div className="flex items-center gap-2 text-rose-700 font-bold text-sm">
                  <AlertTriangle className="h-4 w-4" />
                  <span>Blind Spot 1: The Ticket-to-PR Linkage Gap</span>
                </div>
                <h3 className="text-lg font-bold text-[#111013] font-heading">
                  Auditors sample Jira, not Git pull requests
                </h3>
                <p className="text-sm text-[#5c728e] leading-relaxed">
                  Your auditor starts from the system of record: Jira Software. When they pick ticket <code className="text-xs bg-slate-100 px-1 py-0.5 rounded font-mono">DEMO-42</code>, they want to see the PR link right there on the ticket. If a developer forgot to put the Jira issue key in their branch name or commit message, you have no traceable connection. You are forced to spend 20 minutes grepping git logs to find which commit matched that ticket description.
                </p>
              </div>

              {/* Blind Spot 2 */}
              <div className="rounded-2xl border border-slate-200 bg-white p-6 shadow-xs space-y-3">
                <div className="flex items-center gap-2 text-rose-700 font-bold text-sm">
                  <AlertTriangle className="h-4 w-4" />
                  <span>Blind Spot 2: Admin Bypass &amp; Hotfix Overrides</span>
                </div>
                <h3 className="text-lg font-bold text-[#111013] font-heading">
                  Branch protection has an &quot;Include administrators&quot; loophole
                </h3>
                <p className="text-sm text-[#5c728e] leading-relaxed">
                  In many startups and scale-ups, repository admins (often tech leads, DevOps engineers, or CTOs) have bypass permissions enabled for emergency hotfixes. If an admin pushes a midnight hotfix directly to main or merges their own PR without peer review, GitHub allows it. When your auditor samples that ticket, you fail the segregation of duties test.
                </p>
              </div>

              {/* Blind Spot 3 */}
              <div className="rounded-2xl border border-slate-200 bg-white p-6 shadow-xs space-y-3">
                <div className="flex items-center gap-2 text-rose-700 font-bold text-sm">
                  <AlertTriangle className="h-4 w-4" />
                  <span>Blind Spot 3: Testing &amp; QA Sign-off is Missing from Git</span>
                </div>
                <h3 className="text-lg font-bold text-[#111013] font-heading">
                  Unit tests passing in CI does not prove staging sign-off
                </h3>
                <p className="text-sm text-[#5c728e] leading-relaxed">
                  SOC 2 CC8.1 and ISO 27001 A.8.32 require proof of testing in non-production environments. GitHub Actions shows that unit tests or lint checks passed. But auditors frequently ask: <em>&quot;Where is the confirmation that QA or product verified this in staging before production deployment?&quot;</em> That evidence lives in Jira comment threads or status transitions—completely invisible to GitHub branch rules.
                </p>
              </div>
            </section>

            {/* The 3 Ways Teams Try to Solve This */}
            <section className="space-y-6">
              <h2 className="text-2xl sm:text-3xl font-bold text-[#111013] font-heading">
                The 3 approaches engineering teams use (and their trade-offs)
              </h2>

              <div className="overflow-x-auto">
                <table className="w-full text-left text-xs border-collapse border border-slate-200 rounded-xl overflow-hidden">
                  <thead>
                    <tr className="bg-slate-100 text-[#111013] font-bold">
                      <th className="p-3 border border-slate-200">Approach</th>
                      <th className="p-3 border border-slate-200">Engineering Friction</th>
                      <th className="p-3 border border-slate-200">Auditor Acceptance</th>
                      <th className="p-3 border border-slate-200">Data Security / Egress</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr className="border border-slate-200">
                      <td className="p-3 font-semibold text-slate-800">
                        1. Manual Screenshot Spreadsheet
                      </td>
                      <td className="p-3 text-rose-600 font-medium">
                        Extremely High (3–4 hrs per sample; 120+ dev hours wasted per audit)
                      </td>
                      <td className="p-3 text-amber-600">
                        Moderate (Auditors question cropped images &amp; missing timestamps)
                      </td>
                      <td className="p-3 text-emerald-600">
                        Safe (Images stored locally in Google Drive)
                      </td>
                    </tr>
                    <tr className="border border-slate-200 bg-slate-50/50">
                      <td className="p-3 font-semibold text-slate-800">
                        2. External Multitenant SaaS
                      </td>
                      <td className="p-3 text-amber-600 font-medium">
                        Low (Automatic background gathering)
                      </td>
                      <td className="p-3 text-emerald-600">
                        High (Automated reports)
                      </td>
                      <td className="p-3 text-rose-600 font-medium">
                        Risky (Requires exporting source code, PR diffs, and Jira tickets to third-party US cloud databases)
                      </td>
                    </tr>
                    <tr className="border border-slate-200 bg-emerald-50/40">
                      <td className="p-3 font-semibold text-[#15803d]">
                        3. Native Atlassian Forge (EvidenceLog)
                      </td>
                      <td className="p-3 text-emerald-700 font-medium">
                        Zero (Auto-seals proof on Jira issue transition to Done)
                      </td>
                      <td className="p-3 text-emerald-700 font-bold">
                        Highest (Tamper-evident SHA-256 seal &amp; 1-click CSV workpaper)
                      </td>
                      <td className="p-3 text-emerald-700 font-bold">
                        100% In-Tenant (Zero external servers; data never leaves Jira Cloud)
                      </td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </section>

            {/* How In-Tenant Sealing Works */}
            <section className="space-y-4">
              <h2 className="text-2xl sm:text-3xl font-bold text-[#111013] font-heading">
                How in-tenant Jira verification bridges Git and audits
              </h2>
              <p>
                The cleanest way to solve the compliance gap is to place the gatekeeper at the moment of release inside Jira Software:
              </p>
              <div className="space-y-3 pl-4 border-l-2 border-[#15803d]">
                <p className="text-sm font-medium text-slate-800">
                  <strong>1. Continuous Background Inspection:</strong> As developers work normally in GitHub, GitLab, or Bitbucket, EvidenceLog listens to Jira issue transitions.
                </p>
                <p className="text-sm font-medium text-slate-800">
                  <strong>2. Transition Gatekeeping (Preventive Control):</strong> When an issue transitions to &quot;Done&quot; or &quot;Deployed&quot;, EvidenceLog verifies that:
                </p>
                <ul className="list-disc pl-6 text-xs text-slate-600 space-y-1">
                  <li>At least one valid pull request is linked.</li>
                  <li>The author of the pull request is distinct from the approver (<code className="bg-slate-100 px-1 py-0.5 rounded font-mono">Author &ne; Approver</code>).</li>
                  <li>Automated tests passed in CI.</li>
                  <li>QA sign-off or acceptance criteria checklist exists.</li>
                </ul>
                <p className="text-sm font-medium text-slate-800">
                  <strong>3. Cryptographic In-Tenant Sealing:</strong> Once verified, a SHA-256 digest of the issue state, commit SHA, and approver handles is written to Atlassian Key-Value Storage (<code className="text-xs bg-slate-100 px-1 py-0.5 rounded font-mono">@forge/kvs</code>).
                </p>
              </div>
              <p>
                When audit season arrives, the tech lead clicks <strong>[Export Auditor Workpaper]</strong>. In 5 seconds, you download a clean CSV table with every ticket key, PR link, approver name, and commit SHA already verified. Zero screenshots. Zero spreadsheets. Zero stress.
              </p>
            </section>

            {/* 5-Point Engineering Checklist */}
            <section className="rounded-2xl border border-slate-200 bg-slate-50 p-6 sm:p-8 space-y-4">
              <h3 className="text-xl font-bold text-[#111013] font-heading">
                The Lead Engineer&apos;s 5-Point Audit Readiness Checklist
              </h3>
              <p className="text-xs text-[#5c728e]">
                Run through this checklist before your next SOC 2 or ISO 27001 observation window:
              </p>
              <div className="space-y-2.5 text-xs">
                <div className="flex items-start gap-2">
                  <CheckCircle2 className="h-4 w-4 text-[#15803d] shrink-0 mt-0.5" />
                  <span><strong>Jira Issue Key in Branch Names:</strong> Require developers to name feature branches with ticket keys (e.g., <code className="bg-white px-1 py-0.5 rounded border border-slate-200 font-mono">feat/DEMO-9-tls-encryption</code>) for automated linkage.</span>
                </div>
                <div className="flex items-start gap-2">
                  <CheckCircle2 className="h-4 w-4 text-[#15803d] shrink-0 mt-0.5" />
                  <span><strong>Block Author Self-Approvals:</strong> Ensure pull request policies strictly enforce independent reviewers on all release branches.</span>
                </div>
                <div className="flex items-start gap-2">
                  <CheckCircle2 className="h-4 w-4 text-[#15803d] shrink-0 mt-0.5" />
                  <span><strong>Staging QA Verification:</strong> Require a standardized label (e.g., <code className="bg-white px-1 py-0.5 rounded border border-slate-200 font-mono">qa-verified</code>) or QA sign-off comment prior to closing release tickets.</span>
                </div>
                <div className="flex items-start gap-2">
                  <CheckCircle2 className="h-4 w-4 text-[#15803d] shrink-0 mt-0.5" />
                  <span><strong>Rollback Contingency:</strong> Document rollback instructions (Git revert commit, feature flag switch) in ticket descriptions.</span>
                </div>
                <div className="flex items-start gap-2">
                  <CheckCircle2 className="h-4 w-4 text-[#15803d] shrink-0 mt-0.5" />
                  <span><strong>In-Tenant Sealing:</strong> Use an Atlassian Forge app like EvidenceLog to lock proof at ticket resolution so historical changes cannot be disputed.</span>
                </div>
              </div>
            </section>

            {/* Bottom CTA */}
            <div className="rounded-2xl border border-slate-200 bg-gradient-to-r from-emerald-50/60 via-white to-emerald-50/40 p-8 text-center sm:text-left flex flex-col sm:flex-row items-center justify-between gap-6 not-prose">
              <div>
                <h4 className="text-xl font-bold text-[#111013] font-heading mb-1.5">
                  Stop gathering screenshots for your next audit
                </h4>
                <p className="text-xs text-[#5c728e] max-w-lg">
                  Install EvidenceLog free on Atlassian Marketplace. Free for squads up to 10 users with zero external servers and zero data egress.
                </p>
              </div>
              <div className="flex items-center gap-3 shrink-0">
                <a
                  href="https://marketplace.atlassian.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center gap-2 px-6 py-3 rounded-xl bg-[#111013] text-white hover:bg-[#15803d] font-semibold text-xs transition-all shadow-md cursor-pointer whitespace-nowrap"
                >
                  <span>Install Free on Marketplace</span>
                  <ArrowRight className="h-4 w-4" />
                </a>
              </div>
            </div>
          </div>
        </article>
      </main>

      <Footer />
    </div>
  );
}
