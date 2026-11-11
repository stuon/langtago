"use client";

import { useState } from "react";
import Link from "next/link";
import { Plus, Minus, HelpCircle, ArrowRight } from "lucide-react";

interface FAQItem {
  id: string;
  q: string;
  a: React.ReactNode;
}

export default function FAQ() {
  const [openIdx, setOpenIdx] = useState<number | null>(0);

  const homeFaqs: FAQItem[] = [
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
            EvidenceLog registers an automated Jira Workflow Validator on your project transitions (e.g. into <em>In Review</em>, <em>Ready for Release</em>, or <em>Done</em>). If someone forgot an independent peer review (Author == Reviewer), QA sign-off, or tests failed, the transition is blocked instantly with a 1-click button to remediate.
          </p>
          <p>
            <Link
              href="/compare/manual-screenshots-vs-evidencelog"
              className="text-[#15803d] font-semibold hover:underline inline-flex items-center gap-1"
            >
              <span>Compare manual screenshots vs. automated Jira gatekeeping</span>
              <ArrowRight className="h-3 w-3" />
            </Link>
          </p>
        </div>
      ),
    },
    {
      id: "regional-frameworks",
      q: "Which compliance frameworks are supported? Does this cover SOC 2, ISO 27001, APRA & DORA?",
      a: (
        <div className="space-y-2">
          <p>
            Yes. The technical engineering controls required by auditors worldwide are identical across regions: (1) segregation of duties (Author &ne; Approver), (2) non-production test verification, and (3) tamper-evident change logs.
          </p>
          <p>
            EvidenceLog satisfies them with the exact same automated Jira checks across{" "}
            <Link href="/frameworks/soc2-cc81" className="text-[#15803d] font-semibold hover:underline">
              US SOC 2 (CC8.1)
            </Link>
            ,{" "}
            <Link href="/frameworks/iso-27001-a832" className="text-[#15803d] font-semibold hover:underline">
              ISO 27001 (A.8.32)
            </Link>
            ,{" "}
            <Link href="/frameworks/apra-cps-234" className="text-[#15803d] font-semibold hover:underline">
              Australian APRA CPS 234
            </Link>
            , and{" "}
            <Link href="/frameworks/dora-compliance" className="text-[#15803d] font-semibold hover:underline">
              European DORA &amp; UK FCA
            </Link>
            .
          </p>
        </div>
      ),
    },
    {
      id: "pricing-billing",
      q: "How does Atlassian Marketplace billing work? Is there a free tier?",
      a: (
        <div className="space-y-2">
          <p>
            <strong>EvidenceLog is Free Forever for squads up to 10 users.</strong>
          </p>
          <p>
            For larger teams, paid plans are billed conveniently through your existing monthly or annual Atlassian subscription invoice in your local currency. There are no separate vendor agreements or credit cards needed.
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
            Essential answers for engineering leaders and compliance teams.
          </p>
        </div>

        {/* Top 5 FAQ Accordions */}
        <div className="space-y-4">
          {homeFaqs.map((faq, idx) => {
            const isOpen = openIdx === idx;
            return (
              <div
                key={faq.id}
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

        {/* View All Questions in Dedicated FAQ Hub CTA */}
        <div className="mt-10 text-center">
          <Link
            href="/faq"
            className="inline-flex items-center gap-2 px-6 py-3.5 rounded-xl bg-white border border-slate-200 text-[#111013] hover:border-[#111013] font-bold text-xs transition-all shadow-xs group"
          >
            <span>View All 15+ Questions &amp; Technical Auditor FAQs</span>
            <ArrowRight className="h-4 w-4 text-[#15803d] group-hover:translate-x-0.5 transition-transform" />
          </Link>
        </div>
      </div>
    </section>
  );
}
