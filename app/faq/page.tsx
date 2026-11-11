"use client";

import { useState } from "react";
import Link from "next/link";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import {
  HelpCircle,
  Plus,
  Minus,
  ArrowRight,
  ArrowLeft,
  Lock,
  ExternalLink,
  Search,
} from "lucide-react";

interface FAQItem {
  id: string;
  category: "security" | "workflow" | "frameworks" | "grc" | "billing";
  categoryLabel: string;
  q: string;
  plainAnswer: string;
  a: React.ReactNode;
}

export default function FAQPage() {
  const [activeCategory, setActiveCategory] = useState<string>("all");
  const [searchQuery, setSearchQuery] = useState<string>("");
  const [openIds, setOpenIds] = useState<Record<string, boolean>>({
    "branch-protection": true,
    "data-residency": true,
  });

  const toggleFAQ = (id: string) => {
    setOpenIds((prev) => ({
      ...prev,
      [id]: !prev[id],
    }));
  };

  const faqs: FAQItem[] = [
    // Category 1: Security & Architecture
    {
      id: "data-residency",
      category: "security",
      categoryLabel: "Security & Architecture",
      q: "Does EvidenceLog send or store our source code or tickets outside Jira?",
      plainAnswer: "No. EvidenceLog is built 100% natively on Atlassian Forge. All compute executes strictly within Atlassian's isolated microVMs, and all cryptographic evidence records persist inside your Atlassian Cloud tenant's encrypted Key-Value Storage (@forge/kvs). We operate zero external databases, retain zero customer source code, and enforce strict zero network data egress.",
      a: (
        <div className="space-y-2.5 text-sm text-[#5c728e] leading-relaxed">
          <p>
            <strong>No.</strong> EvidenceLog is built 100% natively on Atlassian Forge. All compute executes strictly within Atlassian&apos;s isolated microVMs, and all cryptographic evidence records persist inside your Atlassian Cloud tenant&apos;s encrypted Key-Value Storage (<code className="text-xs bg-slate-100 px-1 py-0.5 rounded font-mono">@forge/kvs</code>).
          </p>
          <p>
            We operate zero external databases, retain zero customer source code, and enforce strict zero network data egress. Your data never leaves Atlassian Cloud.{" "}
            <Link href="/security" className="text-[#15803d] font-semibold hover:underline inline-flex items-center gap-1">
              <span>Read our complete Enterprise Security Architecture</span>
              <ArrowRight className="h-3 w-3" />
            </Link>
          </p>
        </div>
      ),
    },
    {
      id: "tamper-evidence",
      category: "security",
      categoryLabel: "Security & Architecture",
      q: "What happens if someone modifies a Jira ticket after it has been certified?",
      plainAnswer: "When a Jira ticket transitions to Done, EvidenceLog computes a SHA-256 cryptographic digest of the ticket description, acceptance criteria, linked PR review status, commit SHAs, and QA sign-offs. If someone retroactively modifies the ticket description, deletes comments, or alters fields, EvidenceLog detects the hash mismatch and immediately flags an audit discrepancy alert.",
      a: (
        <div className="space-y-2.5 text-sm text-[#5c728e] leading-relaxed">
          <p>
            When a Jira ticket transitions to Done, EvidenceLog computes a SHA-256 cryptographic digest of the ticket description, acceptance criteria, linked PR review status, commit SHAs, and QA sign-offs.
          </p>
          <p>
            If someone retroactively modifies the ticket description, deletes comments, or alters fields, EvidenceLog detects the hash mismatch and immediately flags an audit discrepancy alert. Auditors can also verify this hash independently using our offline CLI verifier.
          </p>
        </div>
      ),
    },
    {
      id: "data-sovereignty",
      category: "security",
      categoryLabel: "Security & Architecture",
      q: "How does Data Residency work for Australian, European, and UK Jira instances?",
      plainAnswer: "Because EvidenceLog runs on Atlassian Forge, it automatically inherits your designated Jira Cloud data residency region: AWS Sydney (ap-southeast-2) for Australia, AWS Frankfurt and Dublin for the EU, AWS London for the UK, and AWS US East/West for the US. Zero customer data is transferred cross-border, satisfying GDPR, APRA CPS 234, and DORA Chapter V.",
      a: (
        <div className="space-y-2.5 text-sm text-[#5c728e] leading-relaxed">
          <p>
            Because EvidenceLog runs on Atlassian Forge, it automatically inherits your designated Jira Cloud data residency region:
          </p>
          <ul className="list-disc pl-5 space-y-1 text-xs">
            <li><strong>Australia:</strong> AWS Sydney (<code className="font-mono">ap-southeast-2</code>)</li>
            <li><strong>European Union:</strong> AWS Frankfurt (<code className="font-mono">eu-central-1</code>) and Dublin (<code className="font-mono">eu-west-1</code>)</li>
            <li><strong>United Kingdom:</strong> AWS London (<code className="font-mono">eu-west-2</code>)</li>
            <li><strong>United States:</strong> AWS Northern Virginia / Oregon</li>
          </ul>
          <p>
            Zero data is transferred cross-border, satisfying GDPR, APRA CPS 234, and DORA Chapter V requirements.
          </p>
        </div>
      ),
    },

    // Category 2: Git & Workflow
    {
      id: "branch-protection",
      category: "workflow",
      categoryLabel: "Git & Gatekeeping",
      q: "Why do I need EvidenceLog if we already have branch protection rules in GitHub/GitLab?",
      plainAnswer: "GitHub and GitLab enforce pull request reviews in Git, but auditors audit Jira. When an auditor asks for 40 random change samples from the last 12 months, your team has to manually cross-reference Jira tickets, find the PRs, screenshot approval timestamps, verify CI runs, and paste them into spreadsheets. Branch protection also allows admin bypasses that trigger audit findings.",
      a: (
        <div className="space-y-2.5 text-sm text-[#5c728e] leading-relaxed">
          <p>
            GitHub and GitLab enforce pull request reviews in Git, but auditors audit Jira. When an auditor asks for 40 random change samples from the last 12 months, your team has to manually cross-reference Jira tickets, find the PRs, screenshot approval timestamps, verify CI runs, and paste them into spreadsheets.
          </p>
          <p>
            Furthermore, branch protection rules have blind spots: repo admins can bypass them for hotfixes, and Git has no record of Jira staging QA sign-offs. EvidenceLog bridges this gap by locking the proof directly inside the Jira ticket at resolution.{" "}
            <Link
              href="/guides/why-github-branch-protection-fails-soc2"
              className="text-[#15803d] font-semibold hover:underline inline-flex items-center gap-1"
            >
              <span>Read our deep dive: Why GitHub branch rules fail audits</span>
              <ArrowRight className="h-3 w-3" />
            </Link>
          </p>
        </div>
      ),
    },
    {
      id: "preventive-gatekeeper",
      category: "workflow",
      categoryLabel: "Git & Gatekeeping",
      q: "How does the Jira Workflow Validator prevent unreviewed code from slipping into production?",
      plainAnswer: "EvidenceLog installs an automated Workflow Validator on your project transitions (e.g. moving from In Review to Done or Deployed). Before the transition can succeed, EvidenceLog verifies: linked pull request exists, author != approver, CI/CD test suite passed, and staging QA verification is recorded. If any check fails, the transition is blocked instantly.",
      a: (
        <div className="space-y-2.5 text-sm text-[#5c728e] leading-relaxed">
          <p>
            EvidenceLog installs an automated Workflow Validator on your project transitions (e.g. moving from <em>In Review</em> to <em>Done</em> or <em>Deployed</em>).
          </p>
          <p>
            Before the transition can succeed, EvidenceLog verifies: (1) Linked pull request exists, (2) Author &ne; Approver, (3) CI/CD test suite passed, and (4) Staging QA verification is recorded. If any check fails, the transition is blocked instantly with a 1-click button for developers to remediate.
          </p>
        </div>
      ),
    },
    {
      id: "remediation",
      category: "workflow",
      categoryLabel: "Git & Gatekeeping",
      q: "How does 1-Click Remediation work for developers?",
      plainAnswer: "When a compliance check fails, engineers don't need to read pages of audit manuals. The EvidenceLog glance renders interactive buttons directly in the Jira ticket (e.g. Apply QA Sign-off Label, Append Acceptance Criteria Template, or Post QA Sign-off Comment). One click resolves the deficiency and unblocks the release.",
      a: (
        <div className="space-y-2.5 text-sm text-[#5c728e] leading-relaxed">
          <p>
            When a compliance check fails, engineers don&apos;t need to read pages of audit manuals. The EvidenceLog glance renders interactive buttons directly in the Jira ticket (e.g. <em>Apply QA Sign-off Label</em>, <em>Append Acceptance Criteria Template</em>, or <em>Post QA Sign-off Comment</em>). One click resolves the deficiency and unblocks the release.
          </p>
        </div>
      ),
    },
    {
      id: "git-integrations",
      category: "workflow",
      categoryLabel: "Git & Gatekeeping",
      q: "Which version control systems and security scanners are supported?",
      plainAnswer: "Any tool that connects with Jira Software Cloud: GitHub, GitLab, and Bitbucket for PRs, commits, and branch names. For automated security scanning, EvidenceLog detects Snyk, SonarQube, Trivy, Dependabot, and OWASP ZAP traces in development linkages and pipeline status webhooks.",
      a: (
        <div className="space-y-2.5 text-sm text-[#5c728e] leading-relaxed">
          <p>
            Any tool that connects with Jira Software Cloud: GitHub, GitLab, and Bitbucket for PRs, commits, and branch names.
          </p>
          <p>
            For automated security scanning, EvidenceLog detects Snyk, SonarQube, Trivy, Dependabot, and OWASP ZAP traces in development linkages and pipeline status webhooks.
          </p>
        </div>
      ),
    },

    // Category 3: Compliance Frameworks
    {
      id: "soc2-cc81",
      category: "frameworks",
      categoryLabel: "Compliance Frameworks",
      q: "Does EvidenceLog satisfy AICPA SOC 2 Type II Criterion CC8.1?",
      plainAnswer: "Yes. Criterion CC8.1 requires that changes to infrastructure, data, and software are authorized, tested, reviewed, and deployed with segregation of duties. EvidenceLog enforces CC8.1 controls automatically on every resolved ticket and generates auditor-ready sample workpapers.",
      a: (
        <div className="space-y-2.5 text-sm text-[#5c728e] leading-relaxed">
          <p>
            Yes. Criterion CC8.1 requires that changes to infrastructure, data, and software are authorized, tested, reviewed, and deployed with segregation of duties.
          </p>
          <p>
            EvidenceLog enforces CC8.1 controls automatically on every resolved ticket and generates auditor-ready sample workpapers.{" "}
            <Link href="/frameworks/soc2-cc81" className="text-[#15803d] font-semibold hover:underline inline-flex items-center gap-1">
              <span>Read the Complete SOC 2 CC8.1 Jira Engineering Guide</span>
              <ArrowRight className="h-3 w-3" />
            </Link>
          </p>
        </div>
      ),
    },
    {
      id: "iso-27001",
      category: "frameworks",
      categoryLabel: "Compliance Frameworks",
      q: "Does EvidenceLog cover ISO/IEC 27001:2022 Control A.8.32 (Change Management)?",
      plainAnswer: "Yes. Control A.8.32 requires documented change planning, security risk assessment, segregation of duties, pre-deployment testing, and fallback rollback procedures. EvidenceLog inspects rollback strategies in Jira descriptions and provides 1-click fallback injection buttons.",
      a: (
        <div className="space-y-2.5 text-sm text-[#5c728e] leading-relaxed">
          <p>
            Yes. Control A.8.32 requires documented change planning, security risk assessment, segregation of duties, pre-deployment testing, and fallback rollback procedures.
          </p>
          <p>
            EvidenceLog inspects rollback strategies in Jira descriptions and provides 1-click fallback injection buttons.{" "}
            <Link href="/frameworks/iso-27001-a832" className="text-[#15803d] font-semibold hover:underline inline-flex items-center gap-1">
              <span>Read the ISO 27001:2022 Control A.8.32 Engineering Blueprint</span>
              <ArrowRight className="h-3 w-3" />
            </Link>
          </p>
        </div>
      ),
    },
    {
      id: "apra-cps-234",
      category: "frameworks",
      categoryLabel: "Compliance Frameworks",
      q: "Does this satisfy Australian APRA CPS 234 and Essential Eight requirements?",
      plainAnswer: "Yes. For Australian banks, superannuation trustees, insurers, and fintechs, EvidenceLog directly satisfies APRA CPS 234 Paragraphs 23–27 (change control, authorization, segregation of duties, and audit trails) and Essential Eight application change controls, with 100% in-tenant storage in AWS Sydney (ap-southeast-2).",
      a: (
        <div className="space-y-2.5 text-sm text-[#5c728e] leading-relaxed">
          <p>
            Yes. For Australian banks, superannuation trustees, insurers, and fintechs, EvidenceLog directly satisfies APRA CPS 234 Paragraphs 23–27 (change control, authorization, segregation of duties, and audit trails) and Essential Eight application change controls.
          </p>
          <p>
            Because compute and storage stay 100% inside AWS Sydney (ap-southeast-2), it eliminates APRA CPS 231 outsourcing hurdles.{" "}
            <Link href="/frameworks/apra-cps-234" className="text-[#15803d] font-semibold hover:underline inline-flex items-center gap-1">
              <span>Read the Australian APRA CPS 234 Guide</span>
              <ArrowRight className="h-3 w-3" />
            </Link>
          </p>
        </div>
      ),
    },
    {
      id: "dora-compliance",
      category: "frameworks",
      categoryLabel: "Compliance Frameworks",
      q: "Does EvidenceLog satisfy European DORA (EU 2022/2554) and UK FCA Operational Resilience?",
      plainAnswer: "Yes. Under DORA Articles 9 and 11 and UK FCA/PRA SS1/21, financial entities and ICT providers must maintain robust ICT change management, pre-deployment testing, and rollback capabilities. EvidenceLog executes within Atlassian's Frankfurt/London cloud with zero third-party ICT subcontractor risk.",
      a: (
        <div className="space-y-2.5 text-sm text-[#5c728e] leading-relaxed">
          <p>
            Yes. Under DORA Articles 9 and 11 and UK FCA/PRA SS1/21, financial entities and ICT providers must maintain robust ICT change management, pre-deployment testing, and rollback capabilities.
          </p>
          <p>
            EvidenceLog executes within Atlassian&apos;s Frankfurt/London cloud with zero third-party ICT subcontractor risk.{" "}
            <Link href="/frameworks/dora-compliance" className="text-[#15803d] font-semibold hover:underline inline-flex items-center gap-1">
              <span>Read the DORA &amp; UK FCA Resilience Guide</span>
              <ArrowRight className="h-3 w-3" />
            </Link>
          </p>
        </div>
      ),
    },

    // Category 4: GRC & Exports
    {
      id: "vanta-drata",
      category: "grc",
      categoryLabel: "GRC & Auditor Handoff",
      q: "How does EvidenceLog work with Vanta, Drata, or Secureframe?",
      plainAnswer: "Vanta and Drata detect whether change management controls failed; EvidenceLog is the tool that ensures they pass. EvidenceLog exports pre-structured JSON and CSV workpaper packets from the Project Audit Hub that plug directly into GRC platforms without manual screenshot gathering.",
      a: (
        <div className="space-y-2.5 text-sm text-[#5c728e] leading-relaxed">
          <p>
            Vanta and Drata detect whether change management controls failed; EvidenceLog is the tool that ensures they pass.
          </p>
          <p>
            EvidenceLog exports pre-structured JSON and CSV workpaper packets from the Project Audit Hub that plug directly into GRC platforms without manual screenshot gathering.{" "}
            <Link href="/integrations/vanta-drata" className="text-[#15803d] font-semibold hover:underline inline-flex items-center gap-1">
              <span>Learn about Vanta &amp; Drata continuous sync</span>
              <ArrowRight className="h-3 w-3" />
            </Link>
          </p>
        </div>
      ),
    },
    {
      id: "auditor-workpaper",
      category: "grc",
      categoryLabel: "GRC & Auditor Handoff",
      q: "What format are the auditor exports (CSV, PDF, JSON)?",
      plainAnswer: "Auditors receive a standardized CSV workpaper table containing: Issue Key, Release Tag, Commit SHA, Author, Independent Reviewer, CI Test Status, Staging QA Sign-off, and SHA-256 seal. You can also export a 1-click signed PDF verification certificate for executive or board compliance presentations.",
      a: (
        <div className="space-y-2.5 text-sm text-[#5c728e] leading-relaxed">
          <p>
            Auditors from PwC, EY, Deloitte, KPMG, and boutique CPA firms receive a standardized CSV workpaper table containing: Issue Key, Release Tag, Commit SHA, Author, Independent Reviewer, CI Test Status, Staging QA Sign-off, and SHA-256 seal.
          </p>
          <p>
            You can also export a 1-click signed PDF verification certificate for executive or board compliance presentations.
          </p>
        </div>
      ),
    },

    // Category 5: Billing & Pricing
    {
      id: "pricing-billing",
      category: "billing",
      categoryLabel: "Billing & Free Tier",
      q: "How does Atlassian Marketplace billing work? Is there a free tier?",
      plainAnswer: "Yes, EvidenceLog is Free Forever for squads up to 10 users. For larger engineering organizations, paid plans are billed conveniently through your existing monthly or annual Atlassian subscription invoice in your local currency (USD, AUD, EUR, GBP). Every paid tier includes a standard 30-day free trial.",
      a: (
        <div className="space-y-2.5 text-sm text-[#5c728e] leading-relaxed">
          <p>
            <strong>Yes, EvidenceLog is Free Forever for squads up to 10 users.</strong>
          </p>
          <p>
            For larger engineering organizations, paid plans are billed conveniently through your existing monthly or annual Atlassian subscription invoice in your local currency (USD, AUD, EUR, GBP). There are no separate vendor agreements or credit cards needed. Every paid tier includes a standard 30-day free trial.
          </p>
        </div>
      ),
    },
    {
      id: "roi-savings",
      category: "billing",
      categoryLabel: "Billing & Free Tier",
      q: "What is the typical time and cost savings during an annual audit?",
      plainAnswer: "Engineering teams typically spend 3.5 hours per change sample manually locating PRs, capturing approval screenshots, and packaging tickets (amounting to 140+ hours across a 40-sample audit window). EvidenceLog eliminates that manual gathering entirely, saving teams an average of $11,900+ in wasted engineering sprint capacity per audit cycle.",
      a: (
        <div className="space-y-2.5 text-sm text-[#5c728e] leading-relaxed">
          <p>
            Engineering teams typically spend 3.5 hours per change sample manually locating PRs, capturing approval screenshots, and packaging tickets (amounting to 140+ hours across a 40-sample audit window).
          </p>
          <p>
            EvidenceLog eliminates that manual gathering entirely, saving teams an average of $11,900+ in wasted engineering sprint capacity per audit cycle.{" "}
            <Link href="/compare/manual-screenshots-vs-evidencelog" className="text-[#15803d] font-semibold hover:underline inline-flex items-center gap-1">
              <span>View the complete ROI and cost breakdown</span>
              <ArrowRight className="h-3 w-3" />
            </Link>
          </p>
        </div>
      ),
    },
  ];

  const categories = [
    { key: "all", label: "All Questions" },
    { key: "security", label: "Security & Data" },
    { key: "workflow", label: "Git & Gatekeeping" },
    { key: "frameworks", label: "Compliance Frameworks" },
    { key: "grc", label: "GRC & Auditor Handoff" },
    { key: "billing", label: "Billing & Free Tier" },
  ];

  const filteredFaqs = faqs.filter((faq) => {
    const matchesCategory = activeCategory === "all" || faq.category === activeCategory;
    const matchesSearch =
      searchQuery === "" ||
      faq.q.toLowerCase().includes(searchQuery.toLowerCase()) ||
      faq.categoryLabel.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: faqs.map((f) => ({
      "@type": "Question",
      name: f.q,
      acceptedAnswer: {
        "@type": "Answer",
        text: f.plainAnswer,
      },
    })),
  };

  return (
    <div className="relative min-h-screen bg-white font-sans text-[#5c728e] selection:bg-[#dbf1c3] selection:text-[#0f5132]">
      {/* Schema.org JSON-LD */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />

      <Navbar isProductPage={false} />

      <main className="relative pt-10 pb-24">
        <div className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8">
          {/* Breadcrumb */}
          <div className="flex items-center gap-2 text-xs font-semibold text-[#5c728e] mb-6">
            <Link href="/" className="hover:text-[#111013] transition-colors flex items-center gap-1">
              <ArrowLeft className="h-3.5 w-3.5" />
              <span>EvidenceLog</span>
            </Link>
            <span>/</span>
            <span className="text-[#111013] font-bold">Frequently Asked Questions</span>
          </div>

          {/* Section Header */}
          <div className="max-w-3xl mb-10">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#dbf1c3]/70 border border-[#b8e29a] text-[#15803d] font-bold text-xs uppercase tracking-wider mb-4 font-heading">
              <HelpCircle className="h-3.5 w-3.5 text-[#15803d]" />
              <span>KNOWLEDGE BASE &amp; AUDITOR FAQ</span>
            </div>
            <h1 className="text-3xl sm:text-5xl font-bold tracking-tight text-[#111013] font-heading leading-tight mb-4">
              Frequently asked questions
            </h1>
            <p className="text-base sm:text-lg text-[#5c728e] leading-relaxed">
              Clear, transparent technical answers for engineering team leads, DevOps managers, CISOs, and compliance auditors.
            </p>
          </div>

          {/* Search Bar & Category Filter Pills */}
          <div className="mb-10 space-y-4">
            <div className="relative">
              <Search className="absolute left-4 top-1/2 -translate-y-1/2 h-4 w-4 text-slate-400" />
              <input
                type="text"
                placeholder="Search questions (e.g. data residency, branch protection, APRA, Vanta, pricing)..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full pl-11 pr-4 py-3 rounded-xl border border-slate-200 bg-slate-50/50 text-sm text-[#111013] placeholder:text-slate-400 focus:outline-none focus:border-[#15803d] focus:bg-white transition-all shadow-2xs"
              />
            </div>

            <div className="flex flex-wrap items-center gap-2 pt-1">
              {categories.map((cat) => (
                <button
                  key={cat.key}
                  type="button"
                  onClick={() => setActiveCategory(cat.key)}
                  className={`px-3.5 py-1.5 rounded-lg text-xs font-semibold transition-all cursor-pointer ${
                    activeCategory === cat.key
                      ? "bg-[#111013] text-white shadow-xs"
                      : "bg-slate-100 text-[#5c728e] hover:bg-slate-200 hover:text-[#111013]"
                  }`}
                >
                  {cat.label}
                </button>
              ))}
            </div>
          </div>

          {/* FAQ Accordion List */}
          <div className="space-y-4">
            {filteredFaqs.length === 0 ? (
              <div className="rounded-2xl border border-slate-200 bg-slate-50 p-8 text-center text-sm text-slate-500">
                No questions found matching &quot;{searchQuery}&quot;. Try searching for &quot;data&quot;, &quot;GitHub&quot;, or &quot;pricing&quot;.
              </div>
            ) : (
              filteredFaqs.map((faq) => {
                const isOpen = !!openIds[faq.id];
                return (
                  <div
                    key={faq.id}
                    id={`faq-${faq.id}`}
                    className="rounded-2xl border border-slate-200/90 bg-white shadow-xs overflow-hidden transition-all scroll-mt-24"
                  >
                    <button
                      type="button"
                      onClick={() => toggleFAQ(faq.id)}
                      className="w-full flex items-center justify-between p-6 text-left focus:outline-none cursor-pointer group"
                    >
                      <div className="space-y-1 pr-4">
                        <span className="text-[10px] font-bold font-mono text-[#15803d] uppercase tracking-wider block">
                          {faq.categoryLabel}
                        </span>
                        <span className="text-base sm:text-lg font-bold text-[#111013] font-heading group-hover:text-[#15803d] transition-colors block">
                          {faq.q}
                        </span>
                      </div>
                      <div
                        className={`h-8 w-8 rounded-full flex items-center justify-center shrink-0 transition-colors ${
                          isOpen ? "bg-[#111013] text-[#dbf1c3]" : "bg-slate-100 text-[#111013] group-hover:bg-[#dbf1c3]"
                        }`}
                      >
                        {isOpen ? <Minus className="h-4 w-4" /> : <Plus className="h-4 w-4" />}
                      </div>
                    </button>
                    {isOpen && (
                      <div className="px-6 pb-6 pt-1 border-t border-slate-100">
                        {faq.a}
                      </div>
                    )}
                  </div>
                );
              })
            )}
          </div>

          {/* Bottom Callout & Support Card */}
          <div className="mt-16 rounded-3xl bg-slate-900 text-white p-8 sm:p-10 flex flex-col sm:flex-row items-center justify-between gap-6 shadow-xl">
            <div className="space-y-2 text-center sm:text-left">
              <div className="inline-flex items-center gap-2 px-2.5 py-0.5 rounded bg-emerald-500/20 text-emerald-300 text-xs font-mono font-bold">
                <Lock className="h-3.5 w-3.5 text-emerald-300" />
                <span>VENDOR SECURITY QUESTIONNAIRE SUPPORT</span>
              </div>
              <h3 className="text-xl sm:text-2xl font-bold font-heading text-white">
                Have a custom security assessment or auditor inquiry?
              </h3>
              <p className="text-xs sm:text-sm text-slate-300 max-w-xl leading-relaxed">
                Our compliance architects are happy to review your Jira workflow, GRC tool mapping, or internal audit requirements directly.
              </p>
            </div>
            <div className="flex flex-col sm:flex-row items-center gap-3 shrink-0">
              <a
                href="mailto:support@langtago.com"
                className="inline-flex items-center justify-center gap-2 px-5 py-3 rounded-xl bg-[#dbf1c3] text-[#111013] hover:bg-white font-bold text-xs transition-all shadow-md whitespace-nowrap cursor-pointer"
              >
                <span>Email Compliance Lead</span>
                <ArrowRight className="h-4 w-4" />
              </a>
              <a
                href="https://marketplace.atlassian.com"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 px-5 py-3 rounded-xl bg-slate-800 border border-slate-700 text-white hover:border-slate-500 font-semibold text-xs transition-all whitespace-nowrap"
              >
                <span>Install Free on Jira</span>
                <ExternalLink className="h-3.5 w-3.5" />
              </a>
            </div>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
}
