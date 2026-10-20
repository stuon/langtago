"use client";

import {
  UserCheck,
  GitCommit,
  ShieldCheck,
  Lock,
  FileSpreadsheet,
  Share2,
  ArrowRight,
  Check,
} from "lucide-react";

interface BentoGridProps {
  onOpenAuditModal: () => void;
}

export default function BentoGrid({ onOpenAuditModal }: BentoGridProps) {
  const capabilities = [
    {
      icon: UserCheck,
      title: "Peer Review Verification",
      description: "Guarantees independent code sign-off on every production release ticket.",
      bullets: [
        "Separation of duties enforced",
        "Author vs. reviewer check",
      ],
    },
    {
      icon: GitCommit,
      title: "Automated CI/CD Evidence",
      description: "Captures 100% passing test suites, build outputs, and deployment status.",
      bullets: [
        "Validates test suite pass rates",
        "Links commit SHA to Jira issue",
      ],
    },
    {
      icon: ShieldCheck,
      title: "Cryptographic SHA-256 Seal",
      description: "Creates tamper-evident compliance records stored inside Jira Forge.",
      bullets: [
        "Immutable hash digest generated",
        "Instant tamper detection",
      ],
    },
    {
      icon: Lock,
      title: "Zero Data Egress",
      description: "Executes 100% inside your Atlassian Forge tenant. No external servers.",
      bullets: [
        "Zero third-party database storage",
        "Code never leaves Atlassian Cloud",
      ],
    },
    {
      icon: FileSpreadsheet,
      title: "1-Click Auditor Handoff",
      description: "Generate pre-formatted Big 4 sampling workpapers ready for inspection.",
      bullets: [
        "Pre-formatted for Big 4 & AICPA",
        "Saves 40+ hours per audit cycle",
      ],
      action: onOpenAuditModal,
      actionLabel: "Inspect Workpaper",
    },
    {
      icon: Share2,
      title: "Native GRC Integration",
      description: "Direct compliance data sync for continuous monitoring platforms.",
      bullets: [
        "1-click sync to Vanta & Drata",
        "JSON & CSV auditor packages",
      ],
    },
  ];

  return (
    <section id="features" className="bg-[#111013] rounded-t-[40px] pt-20 pb-24 px-4 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-7xl">
        {/* Contis-inspired Section Heading */}
        <div className="text-center mb-14 max-w-3xl mx-auto">
          <h6 className="text-[#ff8565] font-bold text-xs sm:text-sm tracking-widest uppercase mb-2 font-heading">
            EVIDENCELOG MAKES AUDIT READINESS FAST &amp; EFFORTLESS
          </h6>
          <h2 className="text-3xl sm:text-5xl font-bold text-white font-heading leading-tight">
            Experience continuous change compliance sealed in Jira
          </h2>
        </div>

        {/* Contis-inspired Layout: 6 White Cards (col-9) + 1 Coral Highlight Card (col-3) */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-stretch">
          {/* Main 6 Service Cards Grid (9 cols) */}
          <div className="lg:col-span-9 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {capabilities.map((cap, idx) => {
              const Icon = cap.icon;
              return (
                <div
                  key={idx}
                  className="bg-white rounded-2xl p-7 border border-slate-100 shadow-md hover:-translate-y-1 hover:border-[#ff8565] transition-all duration-300 flex flex-col justify-between group"
                >
                  <div>
                    {/* Contis signature square icon badge */}
                    <div className="w-12 h-12 rounded-xl bg-[#ff8565] text-white flex items-center justify-center mb-5 shrink-0 shadow-xs">
                      <Icon className="h-6 w-6" />
                    </div>

                    <h4 className="text-lg font-bold text-[#111013] font-heading mb-2 group-hover:text-[#ff8565] transition-colors">
                      {cap.title}
                    </h4>

                    <p className="text-sm text-[#5c728e] leading-relaxed mb-4">
                      {cap.description}
                    </p>

                    <ul className="space-y-1.5 pt-3 border-t border-slate-100">
                      {cap.bullets.map((bullet, bIdx) => (
                        <li
                          key={bIdx}
                          className="text-xs text-[#111013] font-medium flex items-center gap-2"
                        >
                          <Check className="h-3.5 w-3.5 text-[#ff8565] shrink-0" />
                          <span>{bullet}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  {cap.action && (
                    <div className="pt-4 mt-2">
                      <button
                        type="button"
                        onClick={cap.action}
                        className="text-xs font-bold text-[#ff8565] hover:text-[#111013] transition-colors inline-flex items-center gap-1 cursor-pointer"
                      >
                        <span>{cap.actionLabel}</span>
                        <ArrowRight className="h-3.5 w-3.5" />
                      </button>
                    </div>
                  )}
                </div>
              );
            })}
          </div>

          {/* Right Highlight Promo Card (3 cols - Contis signature tf__single_service_right) */}
          <div className="lg:col-span-3 rounded-2xl bg-[#ff8565] p-7 text-white flex flex-col justify-between shadow-xl">
            <div className="space-y-4">
              <div className="inline-block rounded-md bg-white/20 px-2.5 py-1 text-xs font-bold uppercase tracking-wider text-white">
                Free Forever
              </div>

              <h3 className="text-2xl font-bold font-heading leading-snug">
                Install EvidenceLog &amp; fall in love with audits.
              </h3>

              <p className="text-sm text-white/90 leading-relaxed">
                Free forever for squads up to 10 users. Zero external servers, zero credit card required.
              </p>

              <div className="pt-2 space-y-2 text-xs font-medium text-white/95">
                <div className="flex items-center gap-2">
                  <Check className="h-4 w-4 shrink-0 text-white" />
                  <span>2-minute instant Jira install</span>
                </div>
                <div className="flex items-center gap-2">
                  <Check className="h-4 w-4 shrink-0 text-white" />
                  <span>SOC 2 CC8.1 &amp; ISO 27001</span>
                </div>
                <div className="flex items-center gap-2">
                  <Check className="h-4 w-4 shrink-0 text-white" />
                  <span>Zero network data egress</span>
                </div>
              </div>
            </div>

            <div className="pt-8">
              <a
                href="https://marketplace.atlassian.com"
                target="_blank"
                rel="noopener noreferrer"
                className="w-full text-center bg-[#111013] hover:bg-white hover:text-[#111013] text-white py-3.5 px-4 rounded-lg font-semibold text-xs transition-all inline-flex items-center justify-center gap-2 shadow-md cursor-pointer"
              >
                <span>Install on Marketplace</span>
                <ArrowRight className="h-4 w-4" />
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
