"use client";

import {
  Check,
  ShieldCheck,
  GitPullRequest,
  Layers,
  Bug,
  RefreshCw,
  Cpu,
} from "lucide-react";

export default function Features() {
  const pillars = [
    {
      pillar: "01",
      title: "Lifecycle Traceability",
      standard: "SOC 2 CC8.1 • ISO 27001 A.8.32",
      badge: "Pillar 1: Traceability",
      badgeColor: "text-emerald-400 bg-emerald-500/10 border-emerald-500/20",
      bullets: [
        "Verifies Given/When/Then Acceptance Criteria",
        "Validates PR & commit links across GitHub, GitLab & Bitbucket",
      ],
      icon: GitPullRequest,
    },
    {
      pillar: "02",
      title: "Segregation of Duties",
      standard: "SOC 2 CC6.8 • HIPAA §164.312",
      badge: "Pillar 2: SoD & CAB",
      badgeColor: "text-cyan-400 bg-cyan-500/10 border-cyan-500/20",
      bullets: [
        "Blocks self-approval (Author != Approver)",
        "Inspects JSM ITIL Change Advisory Board (CAB) sign-offs",
      ],
      icon: ShieldCheck,
    },
    {
      pillar: "03",
      title: "Independent QA Verification",
      standard: "SOC 2 CC8.1 • ISO 27001 A.8.29",
      badge: "Pillar 3: QA Sign-off",
      badgeColor: "text-emerald-400 bg-emerald-500/10 border-emerald-500/20",
      bullets: [
        "Validates QA workflow transitions & 'qa-verified' labels",
        "Confirms pre-production test suite execution passes",
      ],
      icon: Bug,
    },
    {
      pillar: "04",
      title: "CI/CD & Rollback Verification",
      standard: "SOC 2 CC8.1 • ISO 27001 A.8.32",
      badge: "Pillar 4: Deployment & Rollback",
      badgeColor: "text-amber-400 bg-amber-500/10 border-amber-500/20",
      bullets: [
        "Verifies CI build pipeline run status & commit hashes",
        "Enforces documented rollback plans for High-Risk changes",
      ],
      icon: RefreshCw,
    },
    {
      pillar: "05",
      title: "Multi-Scanner Security Checks",
      standard: "SOC 2 CC7.1 • ISO 27001 A.8.28",
      badge: "Pillar 5: Security (5 Scanners)",
      badgeColor: "text-rose-400 bg-rose-500/10 border-rose-500/20",
      bullets: [
        "Auto-detects Snyk, SonarQube, Trivy, Dependabot & OWASP ZAP",
        "Guarantees 0 Critical / 0 High CVEs prior to ticket closure",
      ],
      icon: Cpu,
    },
    {
      pillar: "06",
      title: "Release Merkle Root Integrity",
      standard: "SOC 2 CC8.1 • Mathematical Proof",
      badge: "Pillar 6: Merkle Tree Proof",
      badgeColor: "text-purple-400 bg-purple-500/10 border-purple-500/20",
      bullets: [
        "Binary SHA-256 Merkle tree computed across release versions",
        "Instant mathematical proof against retroactive tampering",
      ],
      icon: Layers,
    },
  ];

  return (
    <section id="features" className="relative py-16 border-t border-white/[0.06] bg-[#080b0f]">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="mx-auto max-w-2xl text-center space-y-2">
          <div className="inline-flex items-center gap-2 font-mono text-[11px] tracking-wider text-emerald-400 uppercase">
            <span className="h-1.5 w-1.5 rounded-full bg-emerald-400" />
            <span>The 6 Compliance Pillars</span>
          </div>
          <h2 className="text-2xl font-bold tracking-tight text-white sm:text-3xl">
            Engineered for developers. Built for auditors.
          </h2>
          <p className="text-xs sm:text-sm text-zinc-400">
            Automates the core controls required by SOC 2 Type II, ISO 27001, and FedRAMP without slowing velocity.
          </p>
        </div>

        {/* 6-Pillar Clean Grid */}
        <div className="mt-10 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {pillars.map((p) => {
            const Icon = p.icon;
            return (
              <div
                key={p.pillar}
                className="group rounded-xl border border-white/[0.08] bg-[#0c1017] p-5 flex flex-col justify-between hover:border-emerald-500/40 hover:bg-[#0e141e] transition-all duration-200"
              >
                <div>
                  <div className="flex items-center justify-between">
                    <span className={`rounded-full px-2.5 py-0.5 text-[10px] font-mono border font-semibold ${p.badgeColor}`}>
                      {p.badge}
                    </span>
                    <span className="font-mono text-xs text-zinc-600 font-semibold group-hover:text-zinc-400 transition-colors">
                      Pillar {p.pillar}
                    </span>
                  </div>

                  <div className="mt-4 flex items-center gap-3">
                    <div className="rounded-lg bg-white/[0.04] p-2 text-emerald-400 border border-white/[0.08] group-hover:bg-emerald-500/10 group-hover:border-emerald-500/30 transition-colors">
                      <Icon className="h-4 w-4" />
                    </div>
                    <div>
                      <h3 className="text-sm font-bold text-white group-hover:text-emerald-300 transition-colors">
                        {p.title}
                      </h3>
                      <span className="font-mono text-[10px] text-zinc-500 uppercase tracking-wider block">
                        {p.standard}
                      </span>
                    </div>
                  </div>

                  {/* Scannable Bullets */}
                  <div className="mt-4 space-y-2">
                    {p.bullets.map((bullet, idx) => (
                      <div key={idx} className="flex items-start gap-2 text-xs text-zinc-300">
                        <Check className="h-3.5 w-3.5 text-emerald-400 shrink-0 mt-0.5" />
                        <span className="leading-snug">{bullet}</span>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="mt-5 pt-3 border-t border-white/[0.06] flex items-center justify-between font-mono text-[11px] text-zinc-500">
                  <span className="flex items-center gap-1.5 text-emerald-400/90 font-medium">
                    <Check className="h-3 w-3 text-emerald-400 shrink-0" />
                    Forge Automated
                  </span>
                  <span className="text-[10px] text-zinc-600">Continuous</span>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
