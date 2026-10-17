import { Check } from "lucide-react";

export default function Features() {
  return (
    <section id="features" className="relative py-24 border-t border-white/[0.06] bg-[#080b0f]">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="mx-auto max-w-3xl text-center">
          <div className="inline-flex items-center gap-2 font-mono text-xs tracking-wider text-emerald-400 uppercase">
            <span className="h-1.5 w-1.5 rounded-full bg-emerald-400" />
            <span>Core Capabilities</span>
          </div>
          <h2 className="mt-3 text-3xl font-bold tracking-tight text-white sm:text-4xl">
            Engineered for developers. Built for auditors.
          </h2>
          <p className="mt-3 text-sm text-zinc-400 max-w-xl mx-auto">
            EvidenceLog automates the change management lifecycle without interrupting developer workflow or exporting confidential ticket data.
          </p>
        </div>

        {/* Bento Grid */}
        <div className="mt-14 grid grid-cols-1 md:grid-cols-12 gap-5">
          {/* Card 1: Separation of Duties Engine (7 cols) */}
          <div className="md:col-span-7 rounded-2xl border border-white/[0.08] bg-[#0d1117] p-6 sm:p-8 flex flex-col justify-between">
            <div>
              <div className="flex items-center justify-between">
                <span className="font-mono text-xs font-semibold text-emerald-400 uppercase tracking-wider">
                  Critical SOC 2 CC8.1 Control
                </span>
                <span className="rounded bg-emerald-500/10 px-2 py-0.5 text-[10px] font-mono text-emerald-400 border border-emerald-500/20">
                  Automated
                </span>
              </div>

              <h3 className="mt-4 text-xl font-bold text-white">
                Separation of Duties Verification
              </h3>
              <p className="mt-2 text-xs sm:text-sm text-zinc-400 leading-relaxed">
                Automatically verifies that the author of code or requester of change is strictly distinct from all approvers, eliminating the single most common SOC 2 audit exception.
              </p>

              {/* Technical Rule Mockup */}
              <div className="mt-6 rounded-xl border border-white/[0.06] bg-black/50 p-4 font-mono text-xs space-y-2">
                <div className="flex items-center justify-between text-zinc-500 text-[11px]">
                  <span>POLICY EVALUATION: LANG-10</span>
                  <span className="text-emerald-400">STATUS: PASS</span>
                </div>
                <div className="text-zinc-300">
                  <span className="text-zinc-500">Author:</span> alex.k@enterprise.io
                </div>
                <div className="text-zinc-300">
                  <span className="text-zinc-500">Approvers:</span> [&quot;sarah.chen@enterprise.io&quot;, &quot;dave.m@enterprise.io&quot;]
                </div>
                <div className="text-emerald-400 text-[11px] pt-1 border-t border-white/[0.06]">
                  ✓ Distinct identity check satisfied (2 independent approvals)
                </div>
              </div>
            </div>

            <div className="mt-6 flex items-center gap-2 font-mono text-xs text-zinc-400">
              <Check className="h-3.5 w-3.5 text-emerald-400" />
              <span>Protects GitHub, GitLab, and Bitbucket pull requests</span>
            </div>
          </div>

          {/* Card 2: Cryptographic SHA-256 Chain (5 cols) */}
          <div className="md:col-span-5 rounded-2xl border border-white/[0.08] bg-[#0d1117] p-6 sm:p-8 flex flex-col justify-between">
            <div>
              <div className="flex items-center justify-between">
                <span className="font-mono text-xs font-semibold text-cyan-400 uppercase tracking-wider">
                  Tamper Evidence
                </span>
                <span className="rounded bg-cyan-500/10 px-2 py-0.5 text-[10px] font-mono text-cyan-400 border border-cyan-500/20">
                  SHA-256 HMAC
                </span>
              </div>

              <h3 className="mt-4 text-xl font-bold text-white">
                Mathematical Seal Integrity
              </h3>
              <p className="mt-2 text-xs sm:text-sm text-zinc-400 leading-relaxed">
                Fingerprints ticket states, commits, and timestamps. Any retroactive modification to issue descriptions or approvals breaks the hash chain.
              </p>

              <div className="mt-6 rounded-xl border border-white/[0.06] bg-black/50 p-4 font-mono text-xs text-zinc-300 space-y-2">
                <div className="text-[10px] text-zinc-500">DIGEST INPUT:</div>
                <div className="truncate text-zinc-400">issue:LANG-10|sha:4f738a1|ts:1728924128</div>
                <div className="text-[10px] text-zinc-500 pt-1">COMPUTED SEAL:</div>
                <div className="text-emerald-400 truncate text-[11px]">sha256:9f83ac2b7c4d516e8812...</div>
              </div>
            </div>

            <div className="mt-6 flex items-center gap-2 font-mono text-xs text-zinc-400">
              <Check className="h-3.5 w-3.5 text-cyan-400" />
              <span>Mathematical proof of change integrity</span>
            </div>
          </div>

          {/* Card 3: 1-Click Auditor Packs (4 cols) */}
          <div className="md:col-span-4 rounded-2xl border border-white/[0.08] bg-[#0d1117] p-6 flex flex-col justify-between">
            <div>
              <span className="font-mono text-xs font-semibold text-zinc-400 uppercase tracking-wider">
                Auditor Deliverables
              </span>
              <h3 className="mt-3 text-lg font-bold text-white">
                1-Click Export Bundles
              </h3>
              <p className="mt-2 text-xs text-zinc-400 leading-relaxed">
                Export AICPA SOC 2 (CC8.1) and ISO 27001 evidence packages in clean PDF, CSV, or raw JSON formatted for Vanta, Drata, and Secureframe.
              </p>
            </div>
            <div className="mt-6 flex flex-wrap gap-1.5 font-mono text-[10px]">
              <span className="rounded bg-zinc-800 px-2 py-0.5 text-zinc-300 border border-white/[0.06]">PDF Reports</span>
              <span className="rounded bg-zinc-800 px-2 py-0.5 text-zinc-300 border border-white/[0.06]">Auditor JSON</span>
              <span className="rounded bg-zinc-800 px-2 py-0.5 text-zinc-300 border border-white/[0.06]">CSV Matrix</span>
            </div>
          </div>

          {/* Card 4: Drift & Bypass Monitoring (4 cols) */}
          <div className="md:col-span-4 rounded-2xl border border-white/[0.08] bg-[#0d1117] p-6 flex flex-col justify-between">
            <div>
              <span className="font-mono text-xs font-semibold text-rose-400 uppercase tracking-wider">
                Drift Detection
              </span>
              <h3 className="mt-3 text-lg font-bold text-white">
                Rogue Commit Alerts
              </h3>
              <p className="mt-2 text-xs text-zinc-400 leading-relaxed">
                Detects commits pushed directly to production branches without an associated, approved Jira issue or bypassed CI testing rules.
              </p>
            </div>
            <div className="mt-6 font-mono text-xs text-zinc-400 flex items-center gap-2">
              <span className="h-2 w-2 rounded-full bg-rose-400" />
              <span>Real-time webhook notifications</span>
            </div>
          </div>

          {/* Card 5: In-Tenant Forge Guarantee (4 cols) */}
          <div className="md:col-span-4 rounded-2xl border border-white/[0.08] bg-[#0d1117] p-6 flex flex-col justify-between">
            <div>
              <span className="font-mono text-xs font-semibold text-emerald-400 uppercase tracking-wider">
                Infosec Approved
              </span>
              <h3 className="mt-3 text-lg font-bold text-white">
                Zero Third-Party Egress
              </h3>
              <p className="mt-2 text-xs text-zinc-400 leading-relaxed">
                Runs 100% inside Atlassian Forge. No third-party SaaS servers, no credential replication, and no external data residency risks.
              </p>
            </div>
            <div className="mt-6 font-mono text-xs text-zinc-400 flex items-center gap-2">
              <Check className="h-3.5 w-3.5 text-emerald-400" />
              <span>Fastest InfoSec vendor sign-off</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
