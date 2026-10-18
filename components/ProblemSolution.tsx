"use client";

import { XCircle, CheckCircle2 } from "lucide-react";

export default function ProblemSolution() {
  return (
    <section className="relative py-20 border-t border-white/[0.06] bg-[#06090e]">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-2xl text-center space-y-2 mb-12">
          <div className="inline-flex items-center gap-2 font-mono text-[11px] tracking-wider text-rose-400 uppercase">
            <span className="h-1.5 w-1.5 rounded-full bg-rose-400" />
            <span>The Change Management Dilemma</span>
          </div>
          <h2 className="text-2xl font-bold tracking-tight text-white sm:text-3xl">
            Stop scrambling for audit screenshots.
          </h2>
          <p className="text-xs sm:text-sm text-zinc-400">
            Every year, engineering teams lose hundreds of hours hunting down evidence for SOC 2 CC8.1 and ISO 27001 audits.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          {/* Left: The Old Way (The Audit Scramble) */}
          <div className="rounded-2xl border border-rose-500/20 bg-rose-950/[0.08] p-6 sm:p-8 space-y-6">
            <div className="flex items-center justify-between pb-4 border-b border-rose-500/20">
              <div>
                <span className="font-mono text-xs font-semibold text-rose-400 uppercase tracking-wider block">
                  The Old Way
                </span>
                <h3 className="text-lg font-bold text-white mt-1">Manual Audit Scramble</h3>
              </div>
              <span className="rounded-full bg-rose-500/10 px-3 py-1 font-mono text-xs text-rose-300 border border-rose-500/30">
                High Risk &amp; Drag
              </span>
            </div>

            <div className="space-y-4 text-xs sm:text-sm text-zinc-300">
              <div className="flex items-start gap-3">
                <XCircle className="h-4 w-4 text-rose-400 shrink-0 mt-0.5" />
                <div>
                  <strong className="text-white">Chasing Developers on Slack:</strong>
                  <p className="text-xs text-zinc-400 mt-0.5">
                    Engineering managers spending weeks tracking down who approved a PR merged 8 months ago.
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <XCircle className="h-4 w-4 text-rose-400 shrink-0 mt-0.5" />
                <div>
                  <strong className="text-white">Screenshotting 40 Random Samples:</strong>
                  <p className="text-xs text-zinc-400 mt-0.5">
                    Manually capturing screenshots of Jira comments, GitHub approvals, and CI test outputs into Google Docs.
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <XCircle className="h-4 w-4 text-rose-400 shrink-0 mt-0.5" />
                <div>
                  <strong className="text-white">Rogue &amp; Self-Approved Commits:</strong>
                  <p className="text-xs text-zinc-400 mt-0.5">
                    Developers merging hotfixes directly or self-approving tickets without independent QA or CAB sign-off.
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <XCircle className="h-4 w-4 text-rose-400 shrink-0 mt-0.5" />
                <div>
                  <strong className="text-white">Auditor Doubt &amp; Friction:</strong>
                  <p className="text-xs text-zinc-400 mt-0.5">
                    Auditors questioning editable screenshots, leading to extended audit sampling and delayed report issuance.
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Right: With EvidenceLog */}
          <div className="rounded-2xl border border-emerald-500/30 bg-emerald-950/[0.1] p-6 sm:p-8 space-y-6 relative overflow-hidden">
            <div className="absolute -right-16 -top-16 h-48 w-48 rounded-full bg-emerald-500/10 blur-3xl pointer-events-none" />

            <div className="flex items-center justify-between pb-4 border-b border-emerald-500/20">
              <div>
                <span className="font-mono text-xs font-semibold text-emerald-400 uppercase tracking-wider block">
                  With EvidenceLog
                </span>
                <h3 className="text-lg font-bold text-white mt-1">Continuous Cryptographic Proof</h3>
              </div>
              <span className="rounded-full bg-emerald-500/10 px-3 py-1 font-mono text-xs text-emerald-300 border border-emerald-500/30">
                100% Automated
              </span>
            </div>

            <div className="space-y-4 text-xs sm:text-sm text-zinc-200">
              <div className="flex items-start gap-3">
                <CheckCircle2 className="h-4 w-4 text-emerald-400 shrink-0 mt-0.5" />
                <div>
                  <strong className="text-white">Zero Extra Developer Dashboards:</strong>
                  <p className="text-xs text-zinc-400 mt-0.5">
                    Developers stay in Jira and Git. EvidenceLog automatically inspects PRs, test suites, and approvals in the background.
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <CheckCircle2 className="h-4 w-4 text-emerald-400 shrink-0 mt-0.5" />
                <div>
                  <strong className="text-white">Preventive Workflow Gatekeeper:</strong>
                  <p className="text-xs text-zinc-400 mt-0.5">
                    Native Jira transition validator intercepts and physically blocks issues from closing without required peer reviews.
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <CheckCircle2 className="h-4 w-4 text-emerald-400 shrink-0 mt-0.5" />
                <div>
                  <strong className="text-white">Tamper-Evident SHA-256 Seals:</strong>
                  <p className="text-xs text-zinc-400 mt-0.5">
                    Cryptographic digest locked into encrypted in-tenant Forge Storage. Any retroactive change breaks the seal.
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <CheckCircle2 className="h-4 w-4 text-emerald-400 shrink-0 mt-0.5" />
                <div>
                  <strong className="text-white">1-Click Dossiers for Vanta, Drata &amp; Big 4:</strong>
                  <p className="text-xs text-zinc-400 mt-0.5">
                    Export certified 30-ticket change management binders (JSON, CSV, PDF) in seconds during audit week.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
