"use client";

import { useState } from "react";
import { Plus, Minus } from "lucide-react";

export default function FAQ() {
  const [openIdx, setOpenIdx] = useState<number | null>(0);

  const faqs = [
    {
      q: "Why do I need this if we already have branch protection in GitHub/GitLab?",
      a: "GitHub and GitLab enforce PR reviews, but auditors audit Jira. When your auditor asks for 40 random change samples from the last 12 months, your team has to manually cross-reference Jira tickets, open PRs, screenshot review timestamps, verify CI runs, and paste them into spreadsheets. EvidenceLog eliminates that entire chore by locking the proof directly inside the Jira ticket at the moment of resolution.",
    },
    {
      q: "Does EvidenceLog send or store our code outside Jira?",
      a: "No. EvidenceLog is built 100% natively on Atlassian Forge. All compute executes strictly within Atlassian's isolated microVMs, and all evidence digests are stored directly inside your Atlassian Cloud tenant. We operate zero external servers, zero external databases, and enforce strict zero network data egress.",
    },
    {
      q: "How does EvidenceLog prevent unreviewed code from slipping into production?",
      a: "EvidenceLog registers an automated Jira Workflow Validator on your transitions (e.g. into 'In Review', 'Ready for Release', or 'Done'). If someone forgot a peer review (Author == Reviewer), QA sign-off, or tests failed, the transition is blocked instantly with a 1-click button to remediate.",
    },
    {
      q: "Does this satisfy Australian APRA CPS 234 and Essential Eight requirements?",
      a: "Yes. For Australian banks, fintechs, and critical infrastructure providers, EvidenceLog satisfies APRA CPS 234 §35–§37 (change control, authorization, and segregation of duties) and Essential Eight application change verification without requiring separate regional governance tools.",
    },
    {
      q: "How does 1-Click Remediation work for developers?",
      a: "When a compliance check fails, engineers don't need to read pages of audit manuals. The EvidenceLog glance renders interactive buttons directly in the Jira ticket (e.g., 'Apply QA Sign-off Label', 'Append AC Checklist Template', or 'Post QA Sign-off Comment'). One click resolves the deficiency and unblocks the release.",
    },
    {
      q: "Can we use EvidenceLog alongside Vanta, Drata, or Secureframe?",
      a: "Yes. Vanta and Drata detect whether change management controls failed; EvidenceLog is the tool that ensures they pass. EvidenceLog exports pre-structured JSON, CSV, and formatted audit packets from the Project Audit Hub that plug directly into GRC platforms without manual screenshot gathering.",
    },
    {
      q: "What happens if a Jira ticket is edited after being sealed?",
      a: "EvidenceLog seals the state of the ticket cryptographically with SHA-256 upon resolution. If custom fields, descriptions, or links are retroactively modified, our verification engine detects the hash mismatch and flags an audit discrepancy alert.",
    },
    {
      q: "Which version control systems and security scanners are supported?",
      a: "Any tool that links with Jira Software Cloud, including GitHub, GitLab, and Bitbucket for PRs and merge commits. For security and quality, EvidenceLog automatically detects Snyk, SonarQube, Trivy, Dependabot, and OWASP ZAP scans via Jira development panel information and verified compliance labels.",
    },
    {
      q: "How does Atlassian Marketplace billing work?",
      a: "EvidenceLog is billed directly through your monthly or annual Atlassian subscription invoice. There are no separate credit cards, purchase orders, or foreign billing entities. It is free forever up to 10 users, with a standard 30-day free trial on paid plans.",
    },
    {
      q: "What is the typical time and cost savings during annual SOC 2 Type II audits?",
      a: "Engineering teams typically spend 3 to 4 hours per change sample manually locating PRs, capturing approval screenshots, verifying CI build runs, and packaging tickets for auditor review (amounting to 120–250+ engineering hours per 40-sample audit window). With EvidenceLog, that manual gathering is completely eliminated: cryptographic evidence is sealed automatically at ticket resolution and exported in seconds.",
    },
  ];

  return (
    <section id="faq" className="bg-gradient-to-r from-[#dbf1c3] to-[#dce7e3] rounded-t-[40px] pt-20 pb-24 px-4 sm:px-6 lg:px-8 border-t border-white/60">
      <div className="mx-auto max-w-4xl">
        {/* Contis-inspired Section Heading */}
        <div className="tf__common_heading mb-14 text-center">
          <h6 className="text-[#15803d] font-bold text-xs sm:text-sm tracking-widest uppercase mb-2 font-heading">
            FAQ
          </h6>
          <h2 className="text-3xl sm:text-5xl font-bold text-[#111013] font-heading leading-tight">
            Frequently asked questions
          </h2>
          <p className="text-sm sm:text-base text-[#5c728e] mt-3">
            Straightforward answers for engineering leaders and compliance teams.
          </p>
        </div>

        {/* Contis-style FAQ Accordion with Plus / Minus */}
        <div className="space-y-4">
          {faqs.map((faq, idx) => {
            const isOpen = openIdx === idx;
            return (
              <div
                key={idx}
                className="rounded-2xl border border-white/80 bg-white shadow-xs overflow-hidden transition-all"
              >
                <button
                  type="button"
                  onClick={() => setOpenIdx(isOpen ? null : idx)}
                  className="w-full flex items-center justify-between p-6 text-left focus:outline-none cursor-pointer"
                >
                  <span className="text-base sm:text-lg font-bold text-[#111013] font-heading pr-4">
                    {faq.q}
                  </span>
                  <div
                    className={`h-8 w-8 rounded-full flex items-center justify-center shrink-0 transition-colors ${
                      isOpen ? "bg-[#111013] text-[#dbf1c3]" : "bg-slate-100 text-[#111013]"
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
      </div>
    </section>
  );
}
