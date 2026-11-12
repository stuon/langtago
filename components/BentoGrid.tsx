"use client";

import {
  UserCheck,
  ShieldCheck,
  Share2,
  ArrowRight,
  Check,
  ShieldAlert,
  Zap,
  LayoutDashboard,
} from "lucide-react";

interface BentoGridProps {
  onOpenAuditModal: () => void;
}

export default function BentoGrid({ onOpenAuditModal }: BentoGridProps) {
  const capabilities = [
    {
      icon: ShieldAlert,
      title: "Block unreviewed code before it hits main",
      description: "Enforce segregation of duties directly in Jira. If the author tries to self-approve or close a ticket without review, the transition is blocked.",
      bullets: [
        "Enforces Author ≠ Approver on every merge",
        "Zero unreviewed code reaches production",
      ],
    },
    {
      icon: UserCheck,
      title: "Automated PR, QA & Security Verification",
      description: "Real-time verification of acceptance criteria, git links, independent peer reviews, QA sign-offs, and automated security scans.",
      bullets: [
        "Auto-detects GitHub, GitLab & Bitbucket links",
        "Snyk, SonarQube & Trivy scan detection",
      ],
    },
    {
      icon: Zap,
      title: "Actionable fixes, not passive error alerts",
      description: "Fix missing compliance evidence in seconds with in-ticket developer buttons—no compliance manuals or wiki pages required.",
      bullets: [
        "1-click: Append AC checklist template",
        "1-click: Apply QA sign-off & verified label",
      ],
    },
    {
      icon: LayoutDashboard,
      title: "5-Second Auditor CSV & PDF Export",
      description: "Stop compiling messy spreadsheets for audit season. Download complete audit-ready workpapers with timestamps, reviewer handles, and commit SHAs.",
      bullets: [
        "1-click batch export for entire releases",
        "Clean CSV format auditors expect",
      ],
    },
    {
      icon: ShieldCheck,
      title: "Tamper-evident logs auditors can't dispute",
      description: "Every resolved ticket locks an immutable SHA-256 fingerprint. If someone modifies a ticket retroactively, EvidenceLog flags the tampering immediately.",
      bullets: [
        "Cryptographic proof stored in Jira KVS",
        "Auditors can verify offline on their own laptops",
      ],
    },
    {
      icon: Share2,
      title: "Vanta, Drata & Global Framework Ready",
      description: "Satisfies US SOC 2 (CC8.1), ISO 27001 (A.8.32), European DORA, and Australian APRA CPS 234 change controls out of the box.",
      bullets: [
        "Direct payload export for Vanta & Drata GRC",
        "1-click printable SOC 2 verification certificate",
      ],
      action: onOpenAuditModal,
      actionLabel: "Inspect Audit Dossier",
    },
  ];

  return (
    <section id="features" className="bg-gradient-to-r from-[#dbf1c3] to-[#dce7e3] pt-6 pb-24 px-4 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-7xl">
        {/* Contis-inspired Section Heading */}
        <div className="text-center mb-14 max-w-3xl mx-auto">
          <h6 className="text-[#15803d] font-bold text-xs sm:text-sm tracking-widest uppercase mb-2 font-heading">
            EVIDENCELOG MAKES AUDIT READINESS FAST &amp; EFFORTLESS
          </h6>
          <h2 className="text-3xl sm:text-5xl font-bold text-[#111013] font-heading leading-tight">
            Experience continuous change compliance sealed in Jira
          </h2>
        </div>

        {/* Contis-inspired Layout: 6 White Cards (col-9) + 1 Highlight Card (col-3) */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-stretch">
          {/* Main 6 Service Cards Grid (9 cols) */}
          <div className="lg:col-span-9 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {capabilities.map((cap, idx) => {
              const Icon = cap.icon;
              return (
                <div
                  key={idx}
                  className="bg-white rounded-2xl p-7 border border-white/80 shadow-md hover:-translate-y-1 hover:shadow-xl hover:border-[#15803d]/30 transition-all duration-300 flex flex-col justify-between group"
                >
                  <div>
                    {/* Contis signature square icon badge */}
                    <div className="w-12 h-12 rounded-xl bg-[#111013] text-[#dbf1c3] group-hover:bg-[#15803d] group-hover:text-white transition-colors flex items-center justify-center mb-5 shrink-0 shadow-xs">
                      <Icon className="h-6 w-6" />
                    </div>

                    <h4 className="text-lg font-bold text-[#111013] font-heading mb-2 group-hover:text-[#15803d] transition-colors">
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
                          <Check className="h-3.5 w-3.5 text-[#15803d] shrink-0" />
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
                        className="text-xs font-bold text-[#15803d] hover:text-[#111013] transition-colors inline-flex items-center gap-1 cursor-pointer"
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
          <div className="lg:col-span-3 rounded-2xl bg-[#111013] p-7 text-white flex flex-col justify-between shadow-xl">
            <div className="space-y-4">
              <div className="inline-block rounded-md bg-[#dbf1c3] px-2.5 py-1 text-xs font-extrabold uppercase tracking-wider text-[#0f5132]">
                Free Tier
              </div>

              <h3 className="text-2xl font-bold font-heading text-white leading-snug">
                Continuous change compliance sealed in Jira.
              </h3>

              <p className="text-sm text-slate-300 leading-relaxed">
                Free for squads up to 10 users. Zero external servers, no credit card required.
              </p>

              <div className="pt-2 space-y-2.5 text-xs font-medium text-slate-200">
                <div className="flex items-center gap-2">
                  <Check className="h-4 w-4 shrink-0 text-[#dbf1c3]" />
                  <span>Atlassian Forge Cloud app</span>
                </div>
                <div className="flex items-center gap-2">
                  <Check className="h-4 w-4 shrink-0 text-[#dbf1c3]" />
                  <span>SOC 2 CC8.1 &amp; ISO 27001</span>
                </div>
                <div className="flex items-center gap-2">
                  <Check className="h-4 w-4 shrink-0 text-[#dbf1c3]" />
                  <span>Zero network data egress</span>
                </div>
              </div>
            </div>

            <div className="pt-8">
              <a
                href="https://marketplace.atlassian.com"
                target="_blank"
                rel="noopener noreferrer"
                className="w-full text-center bg-[#dbf1c3] hover:bg-white text-[#111013] py-3.5 px-4 rounded-xl font-bold text-xs transition-all inline-flex items-center justify-center gap-2 shadow-md cursor-pointer"
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
