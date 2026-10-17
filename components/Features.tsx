"use client";

import { Check, ShieldCheck, GitPullRequest, Lock, Layers, Bug, RefreshCw, FileCheck2, Cpu } from "lucide-react";

export default function Features() {
  const pillars = [
    {
      pillar: "01",
      title: "Full Lifecycle Traceability",
      standard: "SOC 2 CC8.1 • ISO 27001 A.8.32",
      description:
        "Automatically validates explicit Acceptance Criteria (Given/When/Then or DoD) in issue descriptions and verifies multi-provider Git links across GitHub, GitLab, Bitbucket, and Azure DevOps.",
      badge: "Criteria 1 & 2",
      badgeColor: "text-emerald-400 bg-emerald-500/10 border-emerald-500/20",
      codeSnippet: `✓ AC Defined (3 rules verified)
✓ Git Remote Link: PR #384 (github.com/org/auth)`,
      icon: GitPullRequest,
    },
    {
      pillar: "02",
      title: "Cryptographic Segregation of Duties",
      standard: "SOC 2 CC6.8 • HIPAA §164.312",
      description:
        "Inspects Jira changelog histories and transition actors against ticket creators. Prevents developers from self-approving or closing their own pull requests and Jira tickets.",
      badge: "Pillar 2: SoD",
      badgeColor: "text-cyan-400 bg-cyan-500/10 border-cyan-500/20",
      codeSnippet: `Author: alex.k@enterprise.io
Approver: sarah.m (Staff Security)
Status: PASS (Independent Peer Review)`,
      icon: ShieldCheck,
    },
    {
      pillar: "03",
      title: "Independent QA Testing Sign-off",
      standard: "SOC 2 CC8.1 • ISO 27001 A.8.29",
      description:
        "Detects QA lifecycle transitions, explicit test verification comments, or 'qa-verified' labels. Confirms that functional testing occurred before tickets can be certified.",
      badge: "Pillar 3: QA",
      badgeColor: "text-emerald-400 bg-emerald-500/10 border-emerald-500/20",
      codeSnippet: `QA Signer: elena.r (Senior QA Lead)
Artifacts: 1,482 automated test suites
Result: 100% Pass Rate`,
      icon: Bug,
    },
    {
      pillar: "04",
      title: "CI/CD Build & Rollback Verification",
      standard: "SOC 2 CC8.1 • ISO 27001 A.8.32",
      description:
        "Scans GitHub Actions and Bitbucket Pipelines for successful build runs and ensures that High-Risk changes document formal rollback/backout procedures prior to release.",
      badge: "Pillar 4: Deployment",
      badgeColor: "text-amber-400 bg-amber-500/10 border-amber-500/20",
      codeSnippet: `CI Pipeline: GitHub Actions #9142 (Passed)
Rollback Plan: Feature-flag backout documented
Risk Profile: High Risk (Multi-Gate Passed)`,
      icon: RefreshCw,
    },
    {
      pillar: "05",
      title: "Automated Security Scan Detection",
      standard: "SOC 2 CC7.1 • ISO 27001 A.8.28",
      description:
        "Automatically identifies SAST/DAST verification traces from Snyk, SonarQube, Trivy container scans, Dependabot, and OWASP ZAP without requiring external API keys.",
      badge: "Pillar 5: Security",
      badgeColor: "text-rose-400 bg-rose-500/10 border-rose-500/20",
      codeSnippet: `Scanners: Snyk SAST & Trivy Container
Vulnerabilities: 0 Critical, 0 High
Security Gate: PASSED`,
      icon: Cpu,
    },
    {
      pillar: "06",
      title: "Release Merkle Root Integrity",
      standard: "SOC 2 CC8.1 • Tamper-Evidence",
      description:
        "Computes a binary SHA-256 Merkle tree root across all tickets in a release version. Allows Big 4 auditors to mathematically verify an entire release in seconds.",
      badge: "Pillar 6: Merkle Proof",
      badgeColor: "text-purple-400 bg-purple-500/10 border-purple-500/20",
      codeSnippet: `Root: sha256:7e49f2b189a03bc432d...
Coverage: 24/24 Release Tickets Certified
Math Proof: Tamper-Evident Binary Tree`,
      icon: Layers,
    },
  ];

  return (
    <section id="features" className="relative py-24 border-t border-white/[0.06] bg-[#080b0f]">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="mx-auto max-w-3xl text-center">
          <div className="inline-flex items-center gap-2 font-mono text-xs tracking-wider text-emerald-400 uppercase">
            <span className="h-1.5 w-1.5 rounded-full bg-emerald-400" />
            <span>The 6 Compliance Pillars</span>
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
      </div>
    </section>
  );
}
