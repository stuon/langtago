"use client";

import { useState } from "react";
import { ChevronDown } from "lucide-react";

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
      a: "Yes. EvidenceLog exports pre-structured JSON, CSV, and formatted PDF packets that plug directly into GRC platforms. Instead of your engineering leads manually gathering 25–40 change samples and taking screenshots during annual audits, you can export a sealed bundle in seconds.",
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
    <section id="faq" className="relative pt-10 pb-16 sm:pt-12 sm:pb-20 border-t border-white/[0.06] bg-[#070a0e]">
      <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <div className="inline-flex items-center gap-2 font-mono text-xs tracking-wider text-emerald-400 uppercase">
            <span className="h-1.5 w-1.5 rounded-full bg-emerald-400" />
            <span>Frequently Asked Questions</span>
          </div>
          <h2 className="mt-3 text-3xl font-bold tracking-tight text-white sm:text-4xl">
            Frequently Asked Questions
          </h2>
          <p className="mt-3 text-sm text-zinc-400">
            Technical and architectural answers for engineering leads and compliance officers.
          </p>
        </div>

        <div className="mt-12 space-y-3">
          {faqs.map((faq, idx) => {
            const isOpen = openIdx === idx;
            return (
              <div
                key={idx}
                className="rounded-xl border border-white/[0.08] bg-[#0c1017] transition-colors overflow-hidden"
              >
                <button
                  type="button"
                  onClick={() => setOpenIdx(isOpen ? null : idx)}
                  className="flex w-full items-center justify-between p-5 text-left focus:outline-none"
                >
                  <span className="text-sm font-semibold text-zinc-200">
                    {faq.q}
                  </span>
                  <ChevronDown
                    className={`h-4 w-4 text-zinc-500 shrink-0 ml-4 transition-transform duration-200 ${
                      isOpen ? "rotate-180 text-emerald-400" : ""
                    }`}
                  />
                </button>
                {isOpen && (
                  <div className="px-5 pb-5 text-xs text-zinc-400 leading-relaxed border-t border-white/[0.04] pt-3.5">
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
