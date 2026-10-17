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
      title: "Full Lifecycle Traceability",
      standard: "SOC 2 CC8.1 • ISO 27001 A.8.32",
      description:
        "Automatically validates explicit Acceptance Criteria (Given/When/Then or DoD) in issue descriptions and verifies multi-provider Git links across GitHub, GitLab, Bitbucket, and Azure DevOps.",
      badge: "Pillar 1: Traceability",
      badgeColor: "text-emerald-400 bg-emerald-500/10 border-emerald-500/20",
      codeSnippet: `✓ AC Defined: Given/When/Then verified
✓ Git Link: GitHub PR #384 (github.com/org/core)
Status: Traceability Verified (SOC 2 CC8.1)`,
      icon: GitPullRequest,
    },
    {
      pillar: "02",
      title: "Cryptographic Segregation of Duties",
      standard: "SOC 2 CC6.8 • HIPAA §164.312",
      description:
        "Inspects Jira changelog histories and transition actors against ticket creators. Blocks self-approval and seamlessly verifies Change Advisory Board (CAB) reviews for JSM ITIL changes.",
      badge: "Pillar 2: SoD & CAB",
      badgeColor: "text-cyan-400 bg-cyan-500/10 border-cyan-500/20",
      codeSnippet: `Author: alex.k@enterprise.io
Peer Approver: sarah.m (Independent Review)
JSM CAB: Approved via Change Advisory Board
Status: PASS (Zero Self-Assignment)`,
      icon: ShieldCheck,
    },
    {
      pillar: "03",
      title: "Independent QA Testing Sign-off",
      standard: "SOC 2 CC8.1 • ISO 27001 A.8.29",
      description:
        "Detects QA lifecycle workflow transitions, explicit test verification comments, or 'qa-verified' labels. Confirms that functional testing occurred before tickets can be certified.",
      badge: "Pillar 3: QA Sign-off",
      badgeColor: "text-emerald-400 bg-emerald-500/10 border-emerald-500/20",
      codeSnippet: `QA Signer: elena.r (Senior QA Lead)
Artifacts: 1,482 automated test suites
Workflow State: QA Verified -> Done
Result: 100% Pass Rate`,
      icon: Bug,
    },
    {
      pillar: "04",
      title: "CI/CD Build & Rollback Verification",
      standard: "SOC 2 CC8.1 • ISO 27001 A.8.32",
      description:
        "Inspects build pipelines (GitHub Actions, Bitbucket, GitLab, CircleCI, Jenkins, ArgoCD) and strictly verifies documented rollback/backout procedures for High and Emergency changes.",
      badge: "Pillar 4: Deployment & Rollback",
      badgeColor: "text-amber-400 bg-amber-500/10 border-amber-500/20",
      codeSnippet: `CI Pipeline: GitHub Actions #9142 (Passed)
Rollback Plan: Feature-flag toggle & db backout
High-Risk Gate: Rollback Documented (CC8.1)`,
      icon: RefreshCw,
    },
    {
      pillar: "05",
      title: "Multi-Scanner SAST/DAST Detection",
      standard: "SOC 2 CC7.1 • ISO 27001 A.8.28",
      description:
        "Deep-inspects issue labels and bot comments for automated security traces from Snyk, SonarQube, Trivy container scans, Dependabot, and OWASP ZAP. Embeds verified scanner signatures into the audit hash.",
      badge: "Pillar 5: Security (5 Scanners)",
      badgeColor: "text-rose-400 bg-rose-500/10 border-rose-500/20",
      codeSnippet: `Detected Scanners: [Snyk, Trivy, SonarQube]
Vulnerabilities: 0 Critical, 0 High
Security Audit Trace: Tamper-Evident SHA-256`,
      icon: Cpu,
    },
    {
      pillar: "06",
      title: "Release Merkle Root Integrity",
      standard: "SOC 2 CC8.1 • Mathematical Proof",
      description:
        "Computes a binary SHA-256 Merkle tree root across all tickets in a release version. Allows Big 4 auditors to mathematically verify an entire release against post-approval tampering in seconds.",
      badge: "Pillar 6: Merkle Tree Proof",
      badgeColor: "text-purple-400 bg-purple-500/10 border-purple-500/20",
      codeSnippet: `Merkle Root: sha256:7e49f2b189a03bc432d...
Coverage: 28/28 Release Tickets Certified
Integrity: Zero Post-Approval Tampering`,
      icon: Layers,
    },
  ];

  const advancedEngines = [
    {
      title: "Change Risk Profiling Matrix",
      standard: "ITIL 4 • SOC 2 CC8.1",
      description:
        "Automatically classifies changes into EMERGENCY, HIGH, NORMAL, and LOW risk tiers. Mandates 48-hour retroactive CAB reviews for emergency hotfixes while streamlining pre-approved standard changes.",
      badge: "Risk Engine",
      icon: AlertTriangle,
      color: "text-amber-400",
    },
    {
      title: "Scheduled Compliance Digest",
      standard: "Atlassian Forge Scheduled Cron",
      description:
        "Zero-touch weekly background trigger that continuously aggregates project health, calculates 5-pillar pass percentages, and seals release integrity into encrypted Forge Key-Value Storage.",
      badge: "Weekly Automation",
      icon: Clock,
      color: "text-emerald-400",
    },
    {
      title: "1-Click Remediation ('Fix It For Me')",
      standard: "Zero Developer Friction",
      description:
        "In-situ remediation buttons directly in the Jira issue panel to append Given/When/Then Acceptance Criteria checklists, apply 'qa-verified' labels, or record security sign-offs in seconds.",
      badge: "1-Click Actions",
      icon: Sparkles,
      color: "text-cyan-400",
    },
  ];

  return (
    <section id="features" className="relative py-24 border-t border-white/[0.06] bg-[#080b0f]">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="mx-auto max-w-3xl text-center">
          <div className="inline-flex items-center gap-2 font-mono text-xs tracking-wider text-emerald-400 uppercase">
            <span className="h-1.5 w-1.5 rounded-full bg-emerald-400" />
            <span>The 6 Core Compliance Pillars</span>
          </div>
          <h2 className="mt-3 text-3xl font-bold tracking-tight text-white sm:text-4xl">
            Engineered for developers. Built for auditors.
          </h2>
          <p className="mt-3 text-sm text-zinc-400 max-w-2xl mx-auto leading-relaxed">
            EvidenceLog automates the change management lifecycle across all 6 core pillars required by AICPA SOC 2 Type II, ISO/IEC 27001:2022, and FedRAMP without interrupting developer velocity.
          </p>
        </div>

        {/* 6-Pillar Bento Grid */}
        <div className="mt-14 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
          {pillars.map((p) => {
            const Icon = p.icon;
            return (
              <div
                key={p.pillar}
                className="rounded-2xl border border-white/[0.08] bg-[#0d1117] p-6 sm:p-7 flex flex-col justify-between hover:border-emerald-500/30 transition-all duration-200"
              >
                <div>
                  <div className="flex items-center justify-between">
                    <span className={`rounded px-2 py-0.5 text-[10px] font-mono border font-semibold ${p.badgeColor}`}>
                      {p.badge}
                    </span>
                    <span className="font-mono text-xs text-zinc-500">Pillar {p.pillar}</span>
                  </div>

                  <div className="mt-4 flex items-center gap-2.5">
                    <div className="rounded-lg bg-white/[0.04] p-2 text-emerald-400 border border-white/[0.08]">
                      <Icon className="h-4 w-4" />
                    </div>
                    <h3 className="text-base font-bold text-white">{p.title}</h3>
                  </div>

                  <span className="mt-1 block font-mono text-[10px] text-zinc-500 uppercase tracking-wider">
                    {p.standard}
                  </span>

                  <p className="mt-3 text-xs text-zinc-400 leading-relaxed">{p.description}</p>

                  {/* Code snippet badge */}
                  <pre className="mt-4 rounded-xl border border-white/[0.06] bg-black/60 p-3 font-mono text-[11px] text-emerald-300/90 whitespace-pre-wrap leading-relaxed">
                    {p.codeSnippet}
                  </pre>
                </div>

                <div className="mt-5 pt-3 border-t border-white/[0.06] flex items-center gap-2 font-mono text-[11px] text-zinc-400">
                  <Check className="h-3.5 w-3.5 text-emerald-400 shrink-0" />
                  <span>100% automated in Atlassian Forge sandbox</span>
                </div>
              </div>
            );
          })}
        </div>

        {/* Advanced Governance Engines Callout Sub-Grid */}
        <div className="mt-10 rounded-2xl border border-white/[0.08] bg-[#0c1017]/80 p-8">
          <div className="text-center max-w-2xl mx-auto mb-8">
            <span className="font-mono text-xs text-emerald-400 uppercase tracking-wider">Continuous Automation</span>
            <h3 className="text-xl sm:text-2xl font-bold text-white mt-1">Enterprise Compliance Intelligence</h3>
            <p className="text-xs text-zinc-400 mt-2">
              Beyond point-in-time checks, EvidenceLog equips compliance leaders with continuous change governance.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
            {advancedEngines.map((item, idx) => {
              const Icon = item.icon;
              return (
                <div
                  key={idx}
                  className="rounded-xl border border-white/[0.06] bg-[#080b0f] p-5 space-y-3 hover:border-white/[0.16] transition-colors"
                >
                  <div className="flex items-center justify-between">
                    <div className={`rounded-lg bg-white/[0.04] p-2 border border-white/[0.08] ${item.color}`}>
                      <Icon className="h-4 w-4" />
                    </div>
                    <span className="font-mono text-[10px] text-zinc-500 uppercase">{item.badge}</span>
                  </div>
                  <h4 className="text-sm font-bold text-white">{item.title}</h4>
                  <span className="font-mono text-[10px] text-zinc-500 block uppercase">{item.standard}</span>
                  <p className="text-xs text-zinc-400 leading-relaxed">{item.description}</p>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
