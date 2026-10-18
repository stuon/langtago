"use client";

import { useState } from "react";
import {
  ShieldAlert,
  ShieldCheck,
  Lock,
  FileCheck,
  GitPullRequest,
  Check,
  ArrowRight,
  Ban,
  Database,
} from "lucide-react";

interface BentoGridProps {
  onOpenAuditModal: () => void;
}

export default function BentoGrid({ onOpenAuditModal }: BentoGridProps) {
  const [gatekeeperBlocked, setGatekeeperBlocked] = useState(true);

  return (
    <section id="features" className="relative py-16 sm:py-20 border-t border-white/[0.06] bg-[#070a0e]">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="mx-auto max-w-2xl text-center space-y-2 mb-12">
          <div className="inline-flex items-center gap-2 font-mono text-[11px] tracking-wider text-emerald-400 uppercase">
            <span className="h-1.5 w-1.5 rounded-full bg-emerald-400" />
            <span>Built for SOC 2 &amp; ISO 27001</span>
          </div>
          <h2 className="text-2xl sm:text-4xl font-bold tracking-tight text-white">
            Everything you need for audit readiness.{" "}
            <span className="text-zinc-400 font-normal">In one Jira app.</span>
          </h2>
          <p className="text-xs sm:text-sm text-zinc-400">
            Automates the core controls required by SOC 2 CC8.1, ISO 27001, and HIPAA without changing how engineers ship code.
          </p>
        </div>

        {/* 4-Card Master Bento Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-5">
          {/* =========================================================================
              CARD 1: Interactive Workflow Gatekeeper (8 cols)
              ========================================================================= */}
          <div className="lg:col-span-8 rounded-2xl border border-white/[0.08] bg-[#0a0e15] p-6 sm:p-7 flex flex-col justify-between hover:border-emerald-500/30 transition-all duration-300 shadow-xl group">
            <div className="space-y-4">
              <div className="flex items-center justify-between">
                <div className="inline-flex items-center gap-2 rounded-full border border-rose-500/30 bg-rose-500/10 px-3 py-1 font-mono text-[11px] text-rose-300">
                  <ShieldAlert className="h-3.5 w-3.5" />
                  <span>Preventive Control</span>
                </div>
                <span className="font-mono text-xs text-zinc-500">Pillars 1, 2, 3</span>
              </div>

              <div>
                <h3 className="text-lg sm:text-xl font-bold text-white tracking-tight">
                  Workflow Gatekeeper: Block unreviewed code in Jira
                </h3>
                <p className="mt-1.5 text-xs sm:text-sm text-zinc-400 leading-relaxed">
                  Prevents issues from moving to <span className="font-mono text-white">Done</span> unless independent peer reviews, CI test runs, and security scans are verified. Stops self-approval violations before deployment.
                </p>
              </div>

              {/* Interactive Mini-Simulator */}
              <div className="rounded-xl border border-white/[0.06] bg-black/50 p-4 space-y-3 font-mono text-xs">
                <div className="flex flex-wrap items-center justify-between gap-2 border-b border-white/[0.06] pb-2.5">
                  <span className="text-zinc-400 text-[11px]">
                    Jira Transition Validator: <strong className="text-white">LANG-10</strong>
                  </span>
                  <div className="flex gap-1.5">
                    <button
                      type="button"
                      onClick={() => setGatekeeperBlocked(true)}
                      className={`px-2.5 py-1 rounded text-[10px] transition-all ${
                        gatekeeperBlocked
                          ? "bg-rose-500/20 text-rose-300 border border-rose-500/40 font-semibold"
                          : "text-zinc-500 hover:text-zinc-300"
                      }`}
                    >
                      Simulate Violation
                    </button>
                    <button
                      type="button"
                      onClick={() => setGatekeeperBlocked(false)}
                      className={`px-2.5 py-1 rounded text-[10px] transition-all ${
                        !gatekeeperBlocked
                          ? "bg-emerald-500/20 text-emerald-300 border border-emerald-500/40 font-semibold"
                          : "text-zinc-500 hover:text-zinc-300"
                      }`}
                    >
                      Simulate Pass
                    </button>
                  </div>
                </div>

                {gatekeeperBlocked ? (
                  <div className="flex items-start justify-between gap-3 rounded-lg bg-rose-950/20 border border-rose-500/30 p-3 text-rose-300">
                    <div className="space-y-0.5 text-[11px]">
                      <div className="font-semibold text-white flex items-center gap-1.5">
                        <span className="h-2 w-2 rounded-full bg-rose-400" />
                        <span>403 Forbidden: Self-Approval Detected</span>
                      </div>
                      <p className="text-[10.5px] text-rose-200/80">
                        Author (alex.k) cannot approve transition to Done. SOC 2 CC6.8 requires peer review.
                      </p>
                    </div>
                    <button
                      type="button"
                      onClick={() => setGatekeeperBlocked(false)}
                      className="shrink-0 rounded bg-emerald-500 px-2.5 py-1 text-[10px] font-sans font-semibold text-zinc-950 hover:bg-emerald-400 transition-colors"
                    >
                      Fix with 1-Click
                    </button>
                  </div>
                ) : (
                  <div className="flex items-center gap-2.5 rounded-lg bg-emerald-950/20 border border-emerald-500/30 p-3 text-emerald-300 text-[11px]">
                    <ShieldCheck className="h-4 w-4 text-emerald-400 shrink-0" />
                    <div>
                      <span className="font-semibold text-white">200 Certified: All 5 Controls Passed</span>
                      <p className="text-[10.5px] text-emerald-200/80">
                        Independent peer review (sarah.m) confirmed. Cryptographic seal sha256:9f83ac... recorded.
                      </p>
                    </div>
                  </div>
                )}
              </div>
            </div>

            <div className="mt-5 pt-3 border-t border-white/[0.06] flex items-center gap-2 text-xs font-mono text-zinc-500">
              <Check className="h-3.5 w-3.5 text-emerald-400" />
              <span>SOC 2 CC6.8 &bull; CC8.1 &bull; ISO 27001 A.8.32</span>
            </div>
          </div>

          {/* =========================================================================
              CARD 2: Zero-Egress In-Tenant Security (4 cols)
              ========================================================================= */}
          <div className="lg:col-span-4 rounded-2xl border border-white/[0.08] bg-[#0a0e15] p-6 sm:p-7 flex flex-col justify-between hover:border-emerald-500/30 transition-all duration-300 shadow-xl">
            <div className="space-y-4">
              <div className="flex items-center justify-between">
                <div className="inline-flex items-center gap-2 rounded-full border border-emerald-500/30 bg-emerald-500/10 px-3 py-1 font-mono text-[11px] text-emerald-300">
                  <Lock className="h-3.5 w-3.5" />
                  <span>Zero Egress</span>
                </div>
                <span className="font-mono text-xs text-zinc-500">Infosec Safe</span>
              </div>

              <div>
                <h3 className="text-lg font-bold text-white tracking-tight">
                  Your data never leaves Atlassian Cloud
                </h3>
                <p className="mt-1.5 text-xs text-zinc-400 leading-relaxed">
                  Legacy compliance tools copy code and tickets into third-party databases. EvidenceLog executes 100% inside Atlassian Forge’s sandbox with strict deny-all outbound network policies.
                </p>
              </div>

              {/* Security Trust Diagram */}
              <div className="rounded-xl border border-white/[0.06] bg-black/40 p-3 space-y-2 font-mono text-[11px]">
                <div className="flex items-center justify-between text-emerald-400">
                  <span className="flex items-center gap-1.5">
                    <Database className="h-3.5 w-3.5" />
                    <span>Your Jira Storage</span>
                  </span>
                  <span className="text-[10px] text-emerald-300 font-semibold">ENCRYPTED</span>
                </div>
                <div className="flex items-center justify-between text-zinc-500 border-t border-white/[0.04] pt-2">
                  <span className="flex items-center gap-1.5">
                    <Ban className="h-3.5 w-3.5 text-rose-400" />
                    <span>External Egress</span>
                  </span>
                  <span className="text-[10px] text-rose-400 font-semibold">BLOCKED</span>
                </div>
              </div>
            </div>

            <div className="mt-5 pt-3 border-t border-white/[0.06] flex items-center justify-between text-xs font-mono text-zinc-500">
              <span className="text-emerald-400">0 External Servers</span>
              <span>Atlassian Forge</span>
            </div>
          </div>

          {/* =========================================================================
              CARD 3: 1-Click Auditor Packs (4 cols)
              ========================================================================= */}
          <div className="lg:col-span-4 rounded-2xl border border-white/[0.08] bg-[#0a0e15] p-6 sm:p-7 flex flex-col justify-between hover:border-emerald-500/30 transition-all duration-300 shadow-xl">
            <div className="space-y-4">
              <div className="flex items-center justify-between">
                <div className="inline-flex items-center gap-2 rounded-full border border-cyan-500/30 bg-cyan-500/10 px-3 py-1 font-mono text-[11px] text-cyan-300">
                  <FileCheck className="h-3.5 w-3.5" />
                  <span>Auditor Packs</span>
                </div>
                <span className="font-mono text-xs text-zinc-500">1-Click</span>
              </div>

              <div>
                <h3 className="text-lg font-bold text-white tracking-tight">
                  Instant auditor evidence handoff
                </h3>
                <p className="mt-1.5 text-xs text-zinc-400 leading-relaxed">
                  Export cryptographically signed evidence packages in CSV, JSON, or PDF. Formatted for instant ingestion by SOC 2 auditors, Vanta, and Drata.
                </p>
              </div>

              <div className="space-y-2 text-xs text-zinc-300">
                <div className="flex items-center gap-2">
                  <Check className="h-3.5 w-3.5 text-emerald-400 shrink-0" />
                  <span>JQL-powered compliance search</span>
                </div>
                <div className="flex items-center gap-2">
                  <Check className="h-3.5 w-3.5 text-emerald-400 shrink-0" />
                  <span>Vanta &amp; Drata JSON schemas</span>
                </div>
                <div className="flex items-center gap-2">
                  <Check className="h-3.5 w-3.5 text-emerald-400 shrink-0" />
                  <span>Release Merkle root signatures</span>
                </div>
              </div>
            </div>

            <div className="mt-5 pt-3 border-t border-white/[0.06]">
              <button
                type="button"
                onClick={onOpenAuditModal}
                className="w-full flex items-center justify-center gap-1.5 rounded-lg border border-white/[0.1] bg-zinc-900 py-2 text-xs font-semibold text-zinc-200 hover:bg-zinc-800 hover:text-white transition-colors"
              >
                <span>Inspect Sample SOC 2 Output</span>
                <ArrowRight className="h-3 w-3 text-emerald-400" />
              </button>
            </div>
          </div>

          {/* =========================================================================
              CARD 4: Silent Developer Experience (8 cols)
              ========================================================================= */}
          <div className="lg:col-span-8 rounded-2xl border border-white/[0.08] bg-[#0a0e15] p-6 sm:p-7 flex flex-col justify-between hover:border-emerald-500/30 transition-all duration-300 shadow-xl">
            <div className="space-y-4">
              <div className="flex items-center justify-between">
                <div className="inline-flex items-center gap-2 rounded-full border border-purple-500/30 bg-purple-500/10 px-3 py-1 font-mono text-[11px] text-purple-300">
                  <GitPullRequest className="h-3.5 w-3.5" />
                  <span>Developer Experience</span>
                </div>
                <span className="font-mono text-xs text-zinc-500">Zero Friction</span>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 items-center">
                <div>
                  <h3 className="text-lg sm:text-xl font-bold text-white tracking-tight">
                    Zero change to developer habits
                  </h3>
                  <p className="mt-1.5 text-xs sm:text-sm text-zinc-400 leading-relaxed">
                    Engineers keep working in Jira, GitHub, GitLab, and Bitbucket without filling out compliance forms. EvidenceLog passively captures PR links, CI status, and peer reviews in the background.
                  </p>

                  <div className="mt-4 flex flex-wrap gap-2 text-[11px] font-mono text-zinc-400">
                    <span className="rounded bg-zinc-900 border border-white/[0.08] px-2.5 py-1">GitHub Actions</span>
                    <span className="rounded bg-zinc-900 border border-white/[0.08] px-2.5 py-1">GitLab CI</span>
                    <span className="rounded bg-zinc-900 border border-white/[0.08] px-2.5 py-1">Bitbucket</span>
                    <span className="rounded bg-zinc-900 border border-white/[0.08] px-2.5 py-1">Snyk &amp; SonarQube</span>
                  </div>
                </div>

                <div className="rounded-xl border border-white/[0.06] bg-black/50 p-4 space-y-2 text-xs font-mono">
                  <div className="flex items-center justify-between text-zinc-400 border-b border-white/[0.06] pb-2 text-[11px]">
                    <span>AUTOMATED PIPELINE</span>
                    <span className="text-emerald-400">✔ ACTIVE</span>
                  </div>
                  <div className="space-y-1.5 text-[11px]">
                    <div className="flex items-center justify-between text-zinc-300">
                      <span>1. Git PR Merged</span>
                      <span className="text-emerald-400">PR #384</span>
                    </div>
                    <div className="flex items-center justify-between text-zinc-300">
                      <span>2. Peer Review</span>
                      <span className="text-emerald-400">Approved (sarah.m)</span>
                    </div>
                    <div className="flex items-center justify-between text-zinc-300">
                      <span>3. CI/CD Suite</span>
                      <span className="text-emerald-400">1,482 Passed</span>
                    </div>
                    <div className="flex items-center justify-between text-zinc-300">
                      <span>4. SAST Security</span>
                      <span className="text-emerald-400">0 High / 0 Crit</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="mt-5 pt-3 border-t border-white/[0.06] flex items-center justify-between text-xs font-mono text-zinc-500">
              <span>Automatic Background Tracking</span>
              <span className="text-emerald-400">&lt;2 Min Marketplace Install</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
