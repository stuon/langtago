"use client";

import { useState } from "react";
import { ChevronDown, HelpCircle } from "lucide-react";

export default function FAQ() {
  const [openIdx, setOpenIdx] = useState<number | null>(0);

  const faqs = [
    {
      q: "Does EvidenceLog store our Jira issue data or source code on third-party servers?",
      a: "No. EvidenceLog is built 100% on Atlassian Forge. All compute executes within Atlassian's sandboxed environment, and all encrypted evidence digests are stored directly within your Atlassian Cloud tenant via Forge Storage. We have zero external servers and zero data egress.",
    },
    {
      q: "How does EvidenceLog satisfy SOC 2 CC8.1 and ISO 27001 requirements?",
      a: "SOC 2 CC8.1 mandates that infrastructure and code changes are authorized, tested, and approved prior to production deployment with segregation of duties. EvidenceLog automatically validates that the change author did not approve their own PR, verifies 100% passing test runs, and stamps an immutable SHA-256 seal on the Jira ticket before closure.",
    },
    {
      q: "Can we use EvidenceLog alongside Vanta, Drata, or Secureframe?",
      a: "Yes! EvidenceLog exports pre-structured JSON, CSV, and formatted PDF packets that plug directly into GRC platforms. Instead of your engineering leads manually gathering 25–40 change samples and taking screenshots during annual audits, you can export a sealed bundle in seconds.",
    },
    {
      q: "How does Atlassian Marketplace billing work?",
      a: "EvidenceLog is billed directly through your monthly or annual Atlassian subscription invoice. There are no separate credit cards, purchase orders, or foreign billing entities. Free up to 10 users, with a standard 30-day free trial on paid plans.",
    },
    {
      q: "Which version control systems and CI/CD tools are supported?",
      a: "Any tool that links with Jira Software Cloud, including GitHub, GitLab, and Bitbucket. We ingest pull request approvals, merge commit hashes, and automated test pipeline outputs.",
    },
    {
      q: "What happens if a Jira ticket is edited after being sealed?",
      a: "EvidenceLog seals the state of the ticket cryptographically with SHA-256 upon resolution. If custom fields, descriptions, or links are retroactively modified, our verification engine detects the hash mismatch and flags an audit discrepancy alert.",
    },
  ];

  return (
    <section id="faq" className="relative py-24 sm:py-32 border-t border-slate-900 bg-slate-950/80">
      <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <div className="inline-flex items-center gap-1.5 rounded-full border border-emerald-500/30 bg-emerald-950/40 px-3 py-1 text-xs font-semibold text-emerald-400">
            <HelpCircle className="h-3.5 w-3.5" />
            <span>Got Questions?</span>
          </div>
          <h2 className="mt-4 text-3xl font-extrabold tracking-tight text-white sm:text-4xl">
            Frequently Asked Questions
          </h2>
          <p className="mt-4 text-base text-slate-400">
            Everything you need to know about EvidenceLog for Jira, security architecture, and auditor workflows.
          </p>
        </div>

        <div className="mt-12 space-y-4">
          {faqs.map((faq, idx) => {
            const isOpen = openIdx === idx;
            return (
              <div
                key={idx}
                className="rounded-2xl border border-slate-800 bg-slate-900/40 transition-colors overflow-hidden"
              >
                <button
                  type="button"
                  onClick={() => setOpenIdx(isOpen ? null : idx)}
                  className="flex w-full items-center justify-between p-5 sm:p-6 text-left focus:outline-none"
                >
                  <span className="text-sm sm:text-base font-semibold text-white">
                    {faq.q}
                  </span>
                  <ChevronDown
                    className={`h-4 w-4 text-slate-400 shrink-0 ml-4 transition-transform duration-200 ${
                      isOpen ? "rotate-180 text-emerald-400" : ""
                    }`}
                  />
                </button>
                {isOpen && (
                  <div className="px-5 pb-5 sm:px-6 sm:pb-6 text-xs sm:text-sm text-slate-300 leading-relaxed border-t border-slate-800/60 pt-4">
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
