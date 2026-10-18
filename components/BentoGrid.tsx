"use client";

import {
  ShieldCheck,
  Lock,
  FileCheck,
  Check,
  ArrowRight,
  Database,
  Ban,
  FileSpreadsheet,
  Download,
  ShieldX,
} from "lucide-react";

interface BentoGridProps {
  onOpenAuditModal: () => void;
}

export default function BentoGrid({ onOpenAuditModal }: BentoGridProps) {
  return (
    <section id="features" className="relative py-20 sm:py-28 bg-white border-t border-slate-200/80">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 space-y-24 sm:space-y-32">
        {/* =========================================================================
            FEATURE 1: Separation of Duties (50/50 Split Showcase)
            ========================================================================= */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-center">
          {/* Left Column: Short, Punchy Copy */}
          <div className="lg:col-span-5 space-y-5 text-left">
            <div className="inline-flex items-center gap-2 rounded-full bg-emerald-50 border border-emerald-200 px-3.5 py-1 text-xs font-bold text-emerald-800 uppercase tracking-wider">
              <span>Automated Control</span>
            </div>

            <h2 className="text-3xl sm:text-5xl font-extrabold tracking-tight text-slate-900 leading-[1.15]">
              No more self-approvals.
            </h2>

            <p className="text-base sm:text-lg text-slate-600 leading-relaxed font-normal">
              EvidenceLog automatically verifies that the engineer who wrote the code cannot approve their own pull request or close the Jira ticket.
            </p>

            <div className="space-y-2.5 pt-1 text-sm font-semibold text-slate-700">
              <div className="flex items-center gap-2.5">
                <div className="flex h-5 w-5 items-center justify-center rounded-full bg-emerald-100 text-emerald-700">
                  <Check className="h-3.5 w-3.5" />
                </div>
                <span>SOC 2 CC6.8 &amp; ISO 27001 separation of duties</span>
              </div>
              <div className="flex items-center gap-2.5">
                <div className="flex h-5 w-5 items-center justify-center rounded-full bg-emerald-100 text-emerald-700">
                  <Check className="h-3.5 w-3.5" />
                </div>
                <span>GitHub, GitLab &amp; Bitbucket automatic sync</span>
              </div>
            </div>

            <div className="pt-3">
              <button
                type="button"
                onClick={onOpenAuditModal}
                className="inline-flex items-center gap-2 rounded-2xl bg-emerald-600 px-6 py-3 text-sm font-bold text-white shadow-md shadow-emerald-600/20 hover:bg-emerald-500 transition-all"
              >
                <span>See Verification Demo</span>
                <ArrowRight className="h-4 w-4" />
              </button>
            </div>
          </div>

          {/* Right Column: High-Impact Visual Graphic */}
          <div className="lg:col-span-7">
            <div className="relative rounded-3xl border border-slate-200/90 bg-slate-50/80 p-6 sm:p-9 shadow-lg">
              <div className="space-y-4">
                {/* Visual Flow Header */}
                <div className="flex items-center justify-between text-xs font-bold text-slate-500 border-b border-slate-200/80 pb-3">
                  <span>Jira Gatekeeper &bull; LANG-10</span>
                  <span className="text-emerald-700 bg-emerald-100 px-2.5 py-0.5 rounded-full">Automated Check</span>
                </div>

                {/* State 1: Self-Approval Attempt (Blocked) */}
                <div className="flex items-center justify-between rounded-2xl border border-rose-200 bg-white p-4 shadow-xs">
                  <div className="flex items-center gap-3">
                    <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-rose-50 text-rose-600 font-bold text-xs">
                      AK
                    </div>
                    <div>
                      <div className="flex items-center gap-2">
                        <span className="text-sm font-bold text-slate-900">alex.k</span>
                        <span className="rounded bg-slate-100 px-1.5 py-0.5 text-[10px] font-semibold text-slate-600">Author</span>
                      </div>
                      <p className="text-xs text-rose-600 font-semibold mt-0.5">Attempted self-review &amp; close</p>
                    </div>
                  </div>

                  <div className="flex items-center gap-1.5 rounded-xl bg-rose-50 border border-rose-200 px-3 py-1.5 text-xs font-bold text-rose-700">
                    <ShieldX className="h-4 w-4" />
                    <span>BLOCKED</span>
                  </div>
                </div>

                {/* Arrow Connector */}
                <div className="flex justify-center -my-1 text-slate-400">
                  <div className="h-6 w-0.5 bg-slate-200" />
                </div>

                {/* State 2: Peer Review (Passed) */}
                <div className="flex items-center justify-between rounded-2xl border border-emerald-200 bg-emerald-50/40 p-4 shadow-xs">
                  <div className="flex items-center gap-3">
                    <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-emerald-100 text-emerald-700 font-bold text-xs">
                      SM
                    </div>
                    <div>
                      <div className="flex items-center gap-2">
                        <span className="text-sm font-bold text-slate-900">sarah.m</span>
                        <span className="rounded bg-emerald-100 px-1.5 py-0.5 text-[10px] font-bold text-emerald-800">Security Lead</span>
                      </div>
                      <p className="text-xs text-emerald-700 font-semibold mt-0.5">Independent peer sign-off logged</p>
                    </div>
                  </div>

                  <div className="flex items-center gap-1.5 rounded-xl bg-emerald-600 text-white px-3 py-1.5 text-xs font-bold shadow-xs">
                    <ShieldCheck className="h-4 w-4" />
                    <span>VERIFIED</span>
                  </div>
                </div>
              </div>

              {/* Graphic Footnote */}
              <div className="mt-5 pt-4 border-t border-slate-200/80 flex items-center justify-between text-xs font-semibold text-slate-500">
                <span>Result: Jira issue transition authorized</span>
                <span className="text-emerald-700 font-bold">100% Auditor Proof</span>
              </div>
            </div>
          </div>
        </div>

        {/* =========================================================================
            FEATURE 2: Zero Data Egress (50/50 Split Showcase Reversed)
            ========================================================================= */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-center">
          {/* Left Column: Visual Diagram Graphic */}
          <div className="lg:col-span-7 order-2 lg:order-1">
            <div className="relative rounded-3xl border border-slate-200/90 bg-slate-50/80 p-6 sm:p-9 shadow-lg">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {/* Box 1: Legacy Compliance Platform (Red Warning) */}
                <div className="rounded-2xl border border-rose-200 bg-white p-5 space-y-3 shadow-xs">
                  <div className="flex items-center justify-between">
                    <span className="text-xs font-bold uppercase tracking-wider text-rose-600">Legacy Tools</span>
                    <Ban className="h-4 w-4 text-rose-500" />
                  </div>
                  <div className="space-y-1.5">
                    <p className="text-sm font-bold text-slate-900">External Database Storage</p>
                    <p className="text-xs text-slate-500 leading-relaxed">
                      Copies Jira tickets, commit metadata, and source code into third-party servers.
                    </p>
                  </div>
                  <div className="pt-2 border-t border-slate-100 flex items-center gap-1.5 text-xs font-bold text-rose-600">
                    <span>Egress Risk: High</span>
                  </div>
                </div>

                {/* Box 2: EvidenceLog Forge Sandbox (Clean Green) */}
                <div className="rounded-2xl border-2 border-emerald-500 bg-white p-5 space-y-3 shadow-md shadow-emerald-500/10">
                  <div className="flex items-center justify-between">
                    <span className="text-xs font-bold uppercase tracking-wider text-emerald-700">EvidenceLog</span>
                    <ShieldCheck className="h-5 w-5 text-emerald-600" />
                  </div>
                  <div className="space-y-1.5">
                    <p className="text-sm font-bold text-slate-900">Atlassian Forge Native</p>
                    <p className="text-xs text-slate-600 leading-relaxed">
                      Executes strictly within your Atlassian Cloud sandbox with deny-all outbound policy.
                    </p>
                  </div>
                  <div className="pt-2 border-t border-slate-100 flex items-center gap-1.5 text-xs font-bold text-emerald-700">
                    <Lock className="h-3.5 w-3.5" />
                    <span>0 External Servers</span>
                  </div>
                </div>
              </div>

              {/* Graphic Footnote */}
              <div className="mt-5 pt-4 border-t border-slate-200/80 flex items-center justify-between text-xs font-semibold text-slate-500">
                <span className="flex items-center gap-1.5">
                  <Database className="h-4 w-4 text-emerald-600" />
                  <span>Encrypted Jira KVS Storage</span>
                </span>
                <span className="text-emerald-700 font-bold">Deny-All Network Sandbox</span>
              </div>
            </div>
          </div>

          {/* Right Column: Short, Punchy Copy */}
          <div className="lg:col-span-5 space-y-5 text-left order-1 lg:order-2">
            <div className="inline-flex items-center gap-2 rounded-full bg-blue-50 border border-blue-200 px-3.5 py-1 text-xs font-bold text-blue-800 uppercase tracking-wider">
              <span>100% In-Tenant Security</span>
            </div>

            <h2 className="text-3xl sm:text-5xl font-extrabold tracking-tight text-slate-900 leading-[1.15]">
              Your code never leaves Atlassian.
            </h2>

            <p className="text-base sm:text-lg text-slate-600 leading-relaxed font-normal">
              Zero external databases. Zero third-party cloud servers. EvidenceLog executes entirely inside Atlassian Forge with strict zero-egress policies.
            </p>

            <div className="space-y-2.5 pt-1 text-sm font-semibold text-slate-700">
              <div className="flex items-center gap-2.5">
                <div className="flex h-5 w-5 items-center justify-center rounded-full bg-emerald-100 text-emerald-700">
                  <Check className="h-3.5 w-3.5" />
                </div>
                <span>Passes strictest enterprise InfoSec vendor reviews</span>
              </div>
              <div className="flex items-center gap-2.5">
                <div className="flex h-5 w-5 items-center justify-center rounded-full bg-emerald-100 text-emerald-700">
                  <Check className="h-3.5 w-3.5" />
                </div>
                <span>Immutable SHA-256 tamper-evident integrity</span>
              </div>
            </div>

            <div className="pt-3">
              <a
                href="https://marketplace.atlassian.com"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 rounded-2xl border-2 border-slate-200 bg-white px-6 py-3 text-sm font-bold text-slate-800 hover:bg-slate-50 hover:border-slate-300 transition-all shadow-xs"
              >
                <span>Read Security Architecture</span>
                <ArrowRight className="h-4 w-4" />
              </a>
            </div>
          </div>
        </div>

        {/* =========================================================================
            FEATURE 3: Instant Auditor & GRC Sync (50/50 Split Showcase)
            ========================================================================= */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-center">
          {/* Left Column: Short, Punchy Copy */}
          <div className="lg:col-span-5 space-y-5 text-left">
            <div className="inline-flex items-center gap-2 rounded-full bg-purple-50 border border-purple-200 px-3.5 py-1 text-xs font-bold text-purple-800 uppercase tracking-wider">
              <span>1-Click Compliance</span>
            </div>

            <h2 className="text-3xl sm:text-5xl font-extrabold tracking-tight text-slate-900 leading-[1.15]">
              Audit reports in seconds. Not weeks.
            </h2>

            <p className="text-base sm:text-lg text-slate-600 leading-relaxed font-normal">
              Download sealed evidence workpapers in one click, or export formatted payloads directly into Vanta, Drata, and Secureframe.
            </p>

            <div className="space-y-2.5 pt-1 text-sm font-semibold text-slate-700">
              <div className="flex items-center gap-2.5">
                <div className="flex h-5 w-5 items-center justify-center rounded-full bg-emerald-100 text-emerald-700">
                  <Check className="h-3.5 w-3.5" />
                </div>
                <span>Big 4 workpaper CSV format ready for audit sampling</span>
              </div>
              <div className="flex items-center gap-2.5">
                <div className="flex h-5 w-5 items-center justify-center rounded-full bg-emerald-100 text-emerald-700">
                  <Check className="h-3.5 w-3.5" />
                </div>
                <span>Automated continuous compliance ingestion</span>
              </div>
            </div>

            <div className="pt-3">
              <button
                type="button"
                onClick={onOpenAuditModal}
                className="inline-flex items-center gap-2 rounded-2xl bg-emerald-600 px-6 py-3 text-sm font-bold text-white shadow-md shadow-emerald-600/20 hover:bg-emerald-500 transition-all"
              >
                <span>Inspect Sample Output</span>
                <ArrowRight className="h-4 w-4" />
              </button>
            </div>
          </div>

          {/* Right Column: Visual Auditor Export Graphic */}
          <div className="lg:col-span-7">
            <div className="relative rounded-3xl border border-slate-200/90 bg-slate-50/80 p-6 sm:p-9 shadow-lg">
              <div className="rounded-2xl border border-slate-200 bg-white p-5 space-y-4 shadow-xs">
                {/* Graphic Header */}
                <div className="flex items-center justify-between border-b border-slate-100 pb-3">
                  <div className="flex items-center gap-2">
                    <FileCheck className="h-5 w-5 text-emerald-600" />
                    <span className="text-sm font-bold text-slate-900">Certified Audit Package</span>
                  </div>
                  <span className="rounded-full bg-emerald-100 px-2.5 py-0.5 text-xs font-bold text-emerald-800">
                    AUDIT READY
                  </span>
                </div>

                {/* 3 Formats Graphic Chips */}
                <div className="grid grid-cols-3 gap-2.5 text-center text-xs">
                  <div className="rounded-xl border border-slate-200 bg-slate-50 p-3 space-y-1">
                    <FileSpreadsheet className="h-5 w-5 text-emerald-600 mx-auto" />
                    <span className="font-bold text-slate-800 block text-xs">Auditor CSV</span>
                    <span className="text-[10px] text-slate-500">Big 4 Sample</span>
                  </div>

                  <div className="rounded-xl border border-slate-200 bg-slate-50 p-3 space-y-1">
                    <Database className="h-5 w-5 text-cyan-600 mx-auto" />
                    <span className="font-bold text-slate-800 block text-xs">Vanta JSON</span>
                    <span className="text-[10px] text-slate-500">Auto Ingest</span>
                  </div>

                  <div className="rounded-xl border border-slate-200 bg-slate-50 p-3 space-y-1">
                    <Lock className="h-5 w-5 text-purple-600 mx-auto" />
                    <span className="font-bold text-slate-800 block text-xs">Drata Format</span>
                    <span className="text-[10px] text-slate-500">DCF-67 Verified</span>
                  </div>
                </div>

                {/* Instant Download Action Banner */}
                <div className="rounded-xl bg-emerald-50/80 border border-emerald-200 p-3 flex items-center justify-between text-xs">
                  <div className="space-y-0.5">
                    <span className="font-bold text-emerald-900">LANG-10 Evidence Package</span>
                    <p className="text-[11px] text-emerald-700">Cryptographically sealed with SHA-256</p>
                  </div>
                  <button
                    type="button"
                    onClick={onOpenAuditModal}
                    className="flex items-center gap-1.5 rounded-lg bg-emerald-600 px-3 py-1.5 text-xs font-bold text-white shadow-xs hover:bg-emerald-500 transition-colors"
                  >
                    <Download className="h-3.5 w-3.5" />
                    <span>Export</span>
                  </button>
                </div>
              </div>

              {/* Graphic Footnote */}
              <div className="mt-5 pt-4 border-t border-slate-200/80 flex items-center justify-between text-xs font-semibold text-slate-500">
                <span>Standard: AICPA SOC 2 Type II CC8.1</span>
                <span className="text-emerald-700 font-bold">1-Click Generation</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
