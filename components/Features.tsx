"use client";

import {
  Check,
  ShieldCheck,
  GitPullRequest,
  Layers,
  Bug,
  RefreshCw,
  Cpu,
  AlertTriangle,
  Clock,
  Sparkles,
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
      codeSnippet: `✓ AC Defined: Given/When/Then verified
✓ Git Link: GitHub PR #384 (Merged)`,
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
      codeSnippet: `Author: alex.k | Approver: sarah.m (Peer)
JSM CAB: Approved by Change Board`,
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
      codeSnippet: `QA Signer: elena.r (Senior QA Lead)
Automated Tests: 1,482 passed (100%)`,
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
        "Enforces documented rollback / backout plans for High-Risk changes",
      ],
      codeSnippet: `CI Pipeline: GitHub Actions #9142 (Passed)
Rollback Plan: Feature-flag & db backout`,
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
      codeSnippet: `Detected Scanners: [Snyk, Trivy, SonarQube]
Vulnerabilities: 0 Critical / 0 High`,
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
      codeSnippet: `Merkle Root: sha256:7e49f2b189a03bc432d...
Coverage: 28/28 Release Tickets Certified`,
      icon: Layers,
    },
  ];

  const advancedEngines = [
    {
      title: "Change Risk Profiling",
      standard: "ITIL 4 • SOC 2 CC8.1",
      description: "Classifies changes into Emergency, High, and Normal risk tiers with tailored CAB workflows.",
      badge: "Risk Engine",
      icon: AlertTriangle,
      color: "text-amber-400",
    },
    {
      title: "Weekly Scheduled Digest",
      standard: "Forge Background Cron",
      description: "Automated weekly cron aggregating release health & pass rates into encrypted Forge Storage.",
      badge: "Automation",
      icon: Clock,
      color: "text-emerald-400",
    },
    {
      title: "1-Click Auto-Remediation",
      standard: "In-Situ Fixes",
      description: "In-panel buttons to append Acceptance Criteria checklists or apply QA labels in seconds.",
      badge: "1-Click Fix",
      icon: Sparkles,
      color: "text-cyan-400",
    },
  ];

  return (
    <section id="features" className="relative py-20 border-t border-white/[0.06] bg-[#080b0f]">
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

        {/* 6-Pillar Bento Grid */}
        <div className="mt-12 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {pillars.map((p) => {
            const Icon = p.icon;
            return (
              <div
                key={p.pillar}
                className="rounded-xl border border-white/[0.08] bg-[#0d1117] p-5 flex flex-col justify-between hover:border-emerald-500/30 transition-all duration-200"
              >
                <div>
                  <div className="flex items-center justify-between">
                    <span className={`rounded px-2 py-0.5 text-[10px] font-mono border font-semibold ${p.badgeColor}`}>
                      {p.badge}
                    </span>
                    <span className="font-mono text-[11px] text-zinc-500">Pillar {p.pillar}</span>
                  </div>

                  <div className="mt-3.5 flex items-center gap-2.5">
                    <div className="rounded-lg bg-white/[0.04] p-1.5 text-emerald-400 border border-white/[0.08]">
                      <Icon className="h-4 w-4" />
                    </div>
                    <div>
                      <h3 className="text-sm font-bold text-white">{p.title}</h3>
                      <span className="font-mono text-[10px] text-zinc-500 uppercase tracking-wider block">
                        {p.standard}
                      </span>
                    </div>
                  </div>

                  {/* Scannable Bullets */}
                  <div className="mt-3.5 space-y-1.5">
                    {p.bullets.map((bullet, idx) => (
                      <div key={idx} className="flex items-start gap-2 text-xs text-zinc-300">
                        <Check className="h-3.5 w-3.5 text-emerald-400 shrink-0 mt-0.5" />
                        <span className="leading-snug">{bullet}</span>
                      </div>
                    ))}
                  </div>

                  {/* Code snippet badge */}
                  <pre className="mt-3.5 rounded-lg border border-white/[0.06] bg-black/60 p-2.5 font-mono text-[10.5px] text-emerald-300/90 whitespace-pre-wrap leading-relaxed">
                    {p.codeSnippet}
                  </pre>
                </div>

                <div className="mt-4 pt-2.5 border-t border-white/[0.06] flex items-center gap-1.5 font-mono text-[10.5px] text-zinc-400">
                  <Check className="h-3 w-3 text-emerald-400 shrink-0" />
                  <span>100% automated in Atlassian Forge</span>
                </div>
              </div>
            );
          })}
        </div>

        {/* Advanced Governance Capabilities Strip */}
        <div className="mt-8 rounded-xl border border-white/[0.08] bg-[#0c1017]/80 p-5">
          <div className="flex items-center justify-between mb-4">
            <span className="font-mono text-[11px] text-emerald-400 uppercase tracking-wider font-semibold">
              Continuous Governance Engines
            </span>
            <span className="font-mono text-[10px] text-zinc-500">Built-in Intelligence</span>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-3">
            {advancedEngines.map((item, idx) => {
              const Icon = item.icon;
              return (
                <div
                  key={idx}
                  className="rounded-lg border border-white/[0.06] bg-[#080b0f] p-3.5 space-y-1.5 hover:border-white/[0.14] transition-colors"
                >
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-2">
                      <div className={`rounded bg-white/[0.04] p-1 border border-white/[0.08] ${item.color}`}>
                        <Icon className="h-3.5 w-3.5" />
                      </div>
                      <h4 className="text-xs font-bold text-white">{item.title}</h4>
                    </div>
                    <span className="font-mono text-[9px] text-zinc-500 uppercase">{item.badge}</span>
                  </div>
                  <p className="text-[11px] text-zinc-400 leading-snug">{item.description}</p>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
