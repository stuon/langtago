"use client";

import { useState } from "react";
import Link from "next/link";
import { Plus, Minus, HelpCircle, ArrowRight, ExternalLink } from "lucide-react";

interface FAQItem {
  id: string;
  q: string;
  a: React.ReactNode;
}

export default function FAQ() {
  const [openIdx, setOpenIdx] = useState<number | null>(0);

  const faqs: FAQItem[] = [
    {
      id: "branch-protection",
      q: "Why do I need this if we already have branch protection in GitHub/GitLab?",
      a: (
        <div className="space-y-2">
          <p>
            GitHub and GitLab enforce pull request reviews in Git, but auditors audit Jira. When your auditor asks for 40 random change samples from the last 12 months, your team has to manually cross-reference Jira tickets, open PRs, screenshot review timestamps, verify CI runs, and paste them into spreadsheets.
          </p>
          <p>
            EvidenceLog eliminates that entire chore by locking the proof directly inside the Jira ticket at the moment of resolution.{" "}
            <Link
              href="/guides/why-github-branch-protection-fails-soc2"
              className="text-[#15803d] font-semibold hover:underline inline-flex items-center gap-1"
            >
              <span>Read our deep dive on why branch protection fails audits</span>
              <ArrowRight className="h-3 w-3" />
            </Link>
          </p>
        </div>
      ),
    },
    {
      id: "data-residency",
      q: "Does EvidenceLog send or store our code outside Jira?",
      a: (
        <div className="space-y-2">
          <p>
            No. EvidenceLog is built 100% natively on Atlassian Forge. All compute executes strictly within Atlassian&apos;s isolated microVMs, and all evidence digests are stored directly inside your Atlassian Cloud tenant.
          </p>
          <p>
            We operate zero external servers, zero external databases, and enforce strict zero network data egress.{" "}
            <Link
              href="/security"
              className="text-[#15803d] font-semibold hover:underline inline-flex items-center gap-1"
            >
              <span>Explore our Atlassian Forge security architecture</span>
              <ArrowRight className="h-3 w-3" />
            </Link>
          </p>
        </div>
      ),
    },
    {
      id: "preventive-gatekeeper",
      q: "How does EvidenceLog prevent unreviewed code from slipping into production?",
      a: (
        <div className="space-y-2">
          <p>
            EvidenceLog registers an automated Jira Workflow Validator on your transitions (e.g. into &apos;In Review&apos;, &apos;Ready for Release&apos;, or &apos;Done&apos;). If someone forgot a peer review (Author == Reviewer), QA sign-off, or tests failed, the transition is blocked instantly with a 1-click button to remediate.
          </p>
          <p>
            <Link
              href="/compare/manual-screenshots-vs-evidencelog"
              className="text-[#15803d] font-semibold hover:underline inline-flex items-center gap-1"
            >
              <span>Compare manual screenshot gathering vs. automated Jira gatekeeping</span>
              <ArrowRight className="h-3 w-3" />
            </Link>
          </p>
        </div>
      ),
    },
    {
      id: "apra-cps-234",
      q: "Does this satisfy Australian APRA CPS 234 and Essential Eight requirements?",
      a: (
        <div className="space-y-2">
          <p>
            Yes. For Australian banks, superannuation funds, insurers, and fintechs, EvidenceLog directly satisfies APRA CPS 234 Paragraphs 23–27 (change control, authorization, and segregation of duties) and Essential Eight application change verification.
          </p>
          <p>
            Because EvidenceLog runs natively in AWS Sydney (ap-southeast-2) with zero data egress, it fully complies with Australian data residency and APRA CPS 231 outsourcing rules.{" "}
            <Link
              href="/frameworks/apra-cps-234"
              className="text-[#15803d] font-semibold hover:underline inline-flex items-center gap-1"
            >
              <span>Read the APRA CPS 234 Australian Engineering Guide</span>
              <ArrowRight className="h-3 w-3" />
            </Link>
          </p>
        </div>
      ),
    },
    {
      id: "regional-compliance",
      q: "Do we need different regional versions for the UK, Europe (DORA), South Africa (POPIA), or the US?",
      a: (
        <div className="space-y-2">
          <p>
            No. The technical engineering controls required by auditors worldwide are identical across regions: (1) segregation of duties (Author &ne; Approver), (2) non-production test verification, and (3) tamper-evident change logs.
          </p>
          <p>
            EvidenceLog satisfies them with the exact same automated Jira checks across all major frameworks:{" "}
            <Link href="/frameworks/soc2-cc81" className="text-[#15803d] font-semibold hover:underline">
              US SOC 2 (CC8.1)
            </Link>
            ,{" "}
            <Link href="/frameworks/iso-27001-a832" className="text-[#15803d] font-semibold hover:underline">
              ISO 27001 (A.8.32)
            </Link>
            , and{" "}
            <Link href="/frameworks/dora-compliance" className="text-[#15803d] font-semibold hover:underline">
              EU DORA &amp; UK FCA
            </Link>
            . Data automatically stays in your local Jira Cloud data residency (Sydney, London, Frankfurt, Dublin, or US).
          </p>
        </div>
      ),
    },
    {
      id: "remediation",
      q: "How does 1-Click Remediation work for developers?",
      a: (
        <p>
          When a compliance check fails, engineers don&apos;t need to read pages of audit manuals. The EvidenceLog glance renders interactive buttons directly in the Jira ticket (e.g., &apos;Apply QA Sign-off Label&apos;, &apos;Append AC Checklist Template&apos;, or &apos;Post QA Sign-off Comment&apos;). One click resolves the deficiency and unblocks the release.
        </p>
      ),
    },
    {
      id: "vanta-drata",
      q: "Can we use EvidenceLog alongside Vanta, Drata, or Secureframe?",
      a: (
        <div className="space-y-2">
          <p>
            Yes. Vanta and Drata detect whether change management controls failed; EvidenceLog is the tool that ensures they pass.
          </p>
          <p>
            EvidenceLog exports pre-structured JSON, CSV, and formatted audit packets from the Project Audit Hub that plug directly into GRC platforms without manual screenshot gathering.{" "}
            <Link
              href="/integrations/vanta-drata"
              className="text-[#15803d] font-semibold hover:underline inline-flex items-center gap-1"
            >
              <span>Learn about Vanta &amp; Drata continuous sync</span>
              <ArrowRight className="h-3 w-3" />
            </Link>
          </p>
        </div>
      ),
    },
    {
      id: "tamper-evidence",
      q: "What happens if a Jira ticket is edited after being sealed?",
      a: (
        <p>
          EvidenceLog seals the state of the ticket cryptographically with SHA-256 upon resolution. If custom fields, descriptions, or links are retroactively modified, our verification engine detects the hash mismatch and flags an audit discrepancy alert.
        </p>
      ),
    },
    {
      id: "integrations",
      q: "Which version control systems and security scanners are supported?",
      a: (
        <p>
          Any tool that links with Jira Software Cloud, including GitHub, GitLab, and Bitbucket for PRs and merge commits. For security and quality, EvidenceLog automatically detects Snyk, SonarQube, Trivy, Dependabot, and OWASP ZAP scans via Jira development panel information and verified compliance labels.
        </p>
      ),
    },
    {
      id: "pricing-billing",
      q: "How does Atlassian Marketplace billing work?",
      a: (
        <div className="space-y-2">
          <p>
            EvidenceLog is billed directly through your monthly or annual Atlassian subscription invoice. There are no separate credit cards, purchase orders, or foreign billing entities.
          </p>
          <p>
            It is free forever up to 10 users, with a standard 30-day free trial on paid plans.{" "}
            <a
              href="https://marketplace.atlassian.com"
              target="_blank"
              rel="noopener noreferrer"
              className="text-[#15803d] font-semibold hover:underline inline-flex items-center gap-1"
            >
              <span>Install free on Atlassian Marketplace</span>
              <ExternalLink className="h-3 w-3" />
            </a>
          </p>
        </div>
      ),
    },
    {
      id: "roi-savings",
      q: "What is the typical time and cost savings during annual SOC 2 Type II audits?",
      a: (
        <div className="space-y-2">
          <p>
            Engineering teams typically spend 3 to 4 hours per change sample manually locating PRs, capturing approval screenshots, verifying CI build runs, and packaging tickets for auditor review (amounting to 120–250+ engineering hours per 40-sample audit window).
          </p>
          <p>
            With EvidenceLog, that manual gathering is completely eliminated: cryptographic evidence is sealed automatically at ticket resolution and exported in seconds.{" "}
            <a href="#roi-calculator" className="text-[#15803d] font-semibold hover:underline">
              Calculate your team&apos;s exact dollar savings on our interactive ROI Calculator &darr;
            </a>
          </p>
        </div>
      ),
    },
  ];

  return (
    <section id="faq" className="bg-gradient-to-r from-[#dbf1c3] to-[#dce7e3] rounded-t-[40px] pt-20 pb-24 px-4 sm:px-6 lg:px-8 border-t border-white/60">
      <div className="mx-auto max-w-4xl">
        {/* Styled Section Heading Badge */}
        <div className="text-center mb-12">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/80 border border-[#b8e29a] text-[#15803d] font-bold text-xs uppercase tracking-wider mb-3 font-heading shadow-2xs">
            <HelpCircle className="h-3.5 w-3.5 text-[#15803d]" />
            <span>FREQUENTLY ASKED QUESTIONS</span>
          </div>
          <h2 className="text-3xl sm:text-5xl font-bold text-[#111013] font-heading leading-tight">
            Frequently asked questions
          </h2>
          <p className="text-sm sm:text-base text-[#5c728e] mt-3 max-w-xl mx-auto">
            Straightforward answers for engineering leaders and compliance teams.
          </p>
        </div>

        {/* FAQ Accordion with Plus / Minus */}
        <div className="space-y-4">
          {faqs.map((faq, idx) => {
            const isOpen = openIdx === idx;
            return (
              <div
                key={idx}
                id={`faq-${faq.id}`}
                className="rounded-2xl border border-white/80 bg-white shadow-xs overflow-hidden transition-all scroll-mt-24"
              >
                <button
                  type="button"
                  onClick={() => setOpenIdx(isOpen ? null : idx)}
                  className="w-full flex items-center justify-between p-6 text-left focus:outline-none cursor-pointer group"
                >
                  <span className="text-base sm:text-lg font-bold text-[#111013] font-heading pr-4 group-hover:text-[#15803d] transition-colors">
                    {faq.q}
                  </span>
                  <div
                    className={`h-8 w-8 rounded-full flex items-center justify-center shrink-0 transition-colors ${
                      isOpen ? "bg-[#111013] text-[#dbf1c3]" : "bg-slate-100 text-[#111013] group-hover:bg-[#dbf1c3]"
                    }`}
                  >
                    {isOpen ? <Minus className="h-4 w-4" /> : <Plus className="h-4 w-4" />}
                  </div>
                </button>
                {isOpen && (
                  <div className="px-6 pb-6 pt-1 text-sm text-[#5c728e] leading-relaxed border-t border-slate-100">
                    {faq.a}
                  </div>
                )}
              </div>
            );
          })}
        </div>

        {/* Bottom Support & Help Card */}
        <div className="mt-12 rounded-2xl bg-white/90 border border-white/80 p-6 sm:p-8 text-center shadow-xs">
          <h4 className="text-base sm:text-lg font-bold text-[#111013] font-heading mb-1.5">
            Have a specific audit, framework, or architecture question?
          </h4>
          <p className="text-xs sm:text-sm text-[#5c728e] mb-4 max-w-lg mx-auto">
            Our engineering team is happy to review your Jira workflow and audit requirements directly.
          </p>
          <div className="flex flex-wrap items-center justify-center gap-3 text-xs">
            <a
              href="mailto:support@langtago.com"
              className="inline-flex items-center gap-1.5 px-4 py-2.5 rounded-xl bg-[#111013] text-white hover:bg-[#15803d] font-semibold transition-colors"
            >
              <span>Email Engineering Support</span>
              <ArrowRight className="h-3.5 w-3.5" />
            </a>
            <Link
              href="/guides"
              className="inline-flex items-center gap-1.5 px-4 py-2.5 rounded-xl bg-white border border-slate-300 text-[#111013] hover:border-[#111013] font-semibold transition-colors"
            >
              <span>Explore All Engineering Guides ↗</span>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
