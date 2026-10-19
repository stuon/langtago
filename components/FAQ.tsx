"use client";

import { useState } from "react";
import { ChevronDown } from "lucide-react";

export default function FAQ() {
  const [openIdx, setOpenIdx] = useState<number | null>(0);

  const faqs = [
    {
      q: "Does EvidenceLog store our Jira issue data or source code on third-party servers?",
      a: "No. EvidenceLog is built 100% on Atlassian Forge. All compute executes strictly within Atlassian's sandboxed environment, and all evidence digests are stored directly inside your Atlassian Cloud tenant via Forge Storage. We operate zero external servers and have zero external data egress.",
    },
    {
      q: "How does EvidenceLog satisfy SOC 2 CC8.1 and ISO 27001 requirements?",
      a: "SOC 2 CC8.1 mandates that code changes are authorized, tested, and approved prior to production deployment with segregation of duties. EvidenceLog automatically validates that the change author did not self-approve their PR, verifies 100% passing automated test runs, and stamps an immutable SHA-256 seal on the Jira ticket before closure.",
    },
    {
      q: "Can we use EvidenceLog alongside Vanta, Drata, or Secureframe?",
      a: "Yes. EvidenceLog exports pre-structured JSON, CSV, and formatted audit packets that plug directly into GRC platforms. Instead of your engineering leads manually gathering 25–40 change samples and taking screenshots during annual audits, you can export a sealed bundle in seconds.",
    },
    {
      q: "How does Atlassian Marketplace billing work?",
      a: "EvidenceLog is billed directly through your monthly or annual Atlassian subscription invoice. There are no separate credit cards, purchase orders, or foreign billing entities. It is free up to 10 users, with a standard 30-day free trial on paid plans.",
    },
    {
      q: "Which version control systems and CI/CD tools are supported?",
      a: "Any tool that links with Jira Software Cloud, including GitHub, GitLab, and Bitbucket. We automatically ingest pull request approvals, merge commit hashes, and automated test pipeline outputs.",
    },
    {
      q: "What happens if a Jira ticket is edited after being sealed?",
      a: "EvidenceLog seals the state of the ticket cryptographically with SHA-256 upon resolution. If custom fields, descriptions, or links are retroactively modified, our verification engine detects the hash mismatch and flags an audit discrepancy alert.",
    },
  ];

  return (
    <section id="faq" className="relative py-16 sm:py-24 bg-slate-50 border-t border-slate-200/80">
      <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
        <div className="text-center space-y-3">
          <div className="inline-flex items-center gap-2 rounded-full bg-emerald-50 border border-emerald-200 px-3.5 py-1 text-xs font-bold text-emerald-800 uppercase tracking-wider">
            <span>FAQ</span>
          </div>

          <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight text-slate-900">
            Frequently Asked Questions
          </h2>

          <p className="text-base text-slate-600">
            Straightforward answers for engineering leaders and compliance teams.
          </p>
        </div>

        <div className="mt-12 space-y-3.5">
          {faqs.map((faq, idx) => {
            const isOpen = openIdx === idx;
            return (
              <div
                key={idx}
                className="rounded-2xl border border-slate-200/90 bg-white transition-all overflow-hidden shadow-xs hover:border-slate-300"
              >
                <button
                  type="button"
                  onClick={() => setOpenIdx(isOpen ? null : idx)}
                  className="flex w-full items-center justify-between p-5 sm:p-6 text-left focus:outline-none"
                >
                  <span className="text-base font-bold text-slate-900 pr-4">
                    {faq.q}
                  </span>
                  <ChevronDown
                    className={`h-5 w-5 text-slate-400 shrink-0 transition-transform duration-200 ${
                      isOpen ? "rotate-180 text-emerald-600" : ""
                    }`}
                  />
                </button>
                {isOpen && (
                  <div className="px-5 sm:px-6 pb-6 text-sm text-slate-600 leading-relaxed border-t border-slate-100 pt-4">
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
