"use client";

import { useState } from "react";
import { Lock, Shield, Server, Check, Ban, FileCode2, Terminal } from "lucide-react";

export default function SecurityArchitecture() {
  const [activeTab, setActiveTab] = useState<"topology" | "manifest">("topology");

  return (
    <section id="security" className="relative py-24 sm:py-32 border-t border-white/[0.06] bg-[#070a0e]">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="mx-auto max-w-3xl text-center">
          <div className="inline-flex items-center gap-2 font-mono text-xs tracking-wider text-emerald-400 uppercase">
            <span className="h-1.5 w-1.5 rounded-full bg-emerald-400" />
            <span>Architecture & Security Specification</span>
          </div>

          <h2 className="mt-4 text-3xl font-bold tracking-tight text-white sm:text-4xl">
            Your Jira tickets never leave Atlassian Cloud.{" "}
            <span className="text-slate-400 font-normal">Mathematically verified.</span>
          </h2>

          <p className="mt-4 text-base text-slate-400 leading-relaxed">
            Legacy compliance tools ingest your private issue comments, code diffs, and developer emails into third-party databases.
            EvidenceLog executes 100% inside Atlassian Forge’s sandboxed serverless runtime with zero outbound egress permissions.
          </p>
        </div>

        {/* Technical Architecture Showcase */}
        <div className="mt-16 rounded-2xl border border-white/[0.08] bg-[#0c1017] shadow-2xl overflow-hidden">
          {/* Top Inspector Bar */}
          <div className="flex flex-wrap items-center justify-between border-b border-white/[0.08] bg-[#090d13] px-6 py-3.5">
            <div className="flex items-center gap-3">
              <span className="font-mono text-xs text-slate-400">Security Model:</span>
              <div className="flex rounded-lg bg-black/40 p-0.5 border border-white/[0.06]">
                <button
                  type="button"
                  onClick={() => setActiveTab("topology")}
                  className={`flex items-center gap-1.5 rounded-md px-3 py-1 text-xs font-medium transition-all ${
                    activeTab === "topology"
                      ? "bg-slate-800 text-white shadow-sm"
                      : "text-slate-400 hover:text-slate-200"
                  }`}
                >
                  <Server className="h-3.5 w-3.5" />
                  <span>Isolation Topology</span>
                </button>
                <button
                  type="button"
                  onClick={() => setActiveTab("manifest")}
                  className={`flex items-center gap-1.5 rounded-md px-3 py-1 text-xs font-medium transition-all ${
                    activeTab === "manifest"
                      ? "bg-slate-800 text-white shadow-sm"
                      : "text-slate-400 hover:text-slate-200"
                  }`}
                >
                  <FileCode2 className="h-3.5 w-3.5" />
                  <span>Forge manifest.yml (Zero-Egress Proof)</span>
                </button>
              </div>
            </div>

            <div className="flex items-center gap-2 text-xs font-mono text-emerald-400">
              <span className="h-2 w-2 rounded-full bg-emerald-400" />
              <span>Egress Policy: STRICT_DENY_ALL</span>
            </div>
          </div>

          {/* Interactive Tab 1: Isolation Topology */}
          {activeTab === "topology" && (
            <div className="p-6 sm:p-10 space-y-8">
              <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-stretch">
                {/* Boundary 1: Customer Atlassian Cloud Tenant */}
                <div className="lg:col-span-8 rounded-xl border border-emerald-500/30 bg-emerald-950/[0.12] p-6 space-y-6">
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-2.5">
                      <Shield className="h-4 w-4 text-emerald-400" />
                      <span className="font-mono text-xs font-bold text-white uppercase tracking-wider">
                        Customer Atlassian Cloud Perimeter (Protected Boundary)
                      </span>
                    </div>
                    <span className="rounded bg-emerald-500/10 px-2.5 py-0.5 text-[11px] font-mono text-emerald-400 border border-emerald-500/30">
                      In-Tenant Compute
                    </span>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    {/* Node A: Jira Cloud */}
                    <div className="rounded-lg border border-white/[0.08] bg-[#0f141d] p-4 space-y-2">
                      <div className="flex items-center justify-between text-xs">
                        <span className="font-semibold text-slate-200">Jira Software Cloud</span>
                        <span className="font-mono text-[10px] text-slate-500">Core Issue API</span>
                      </div>
                      <p className="text-xs text-slate-400">
                        Issues, workflow transitions, and peer review links (LANG-10, PR #384).
                      </p>
                      <div className="pt-2 flex items-center gap-1.5 text-[11px] font-mono text-emerald-400">
                        <Check className="h-3 w-3" />
                        <span>Protected by Atlassian IAM</span>
                      </div>
                    </div>

                    {/* Node B: Forge Sandboxed Runtime */}
                    <div className="rounded-lg border border-emerald-500/40 bg-[#0f141d] p-4 space-y-2 shadow-inner">
                      <div className="flex items-center justify-between text-xs">
                        <span className="font-semibold text-emerald-300">EvidenceLog Forge Runtime</span>
                        <span className="font-mono text-[10px] text-emerald-400">Isolated WASM</span>
                      </div>
                      <p className="text-xs text-slate-300">
                        Executes SHA-256 seal calculation and separation-of-duties logic inside tenant memory.
                      </p>
                      <div className="pt-2 flex items-center gap-1.5 text-[11px] font-mono text-emerald-400">
                        <Check className="h-3 w-3" />
                        <span>Zero external network access</span>
                      </div>
                    </div>
                  </div>

                  {/* Node C: Forge Storage API */}
                  <div className="rounded-lg border border-white/[0.08] bg-[#0a0d13] p-4 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3">
                    <div>
                      <div className="flex items-center gap-2">
                        <Lock className="h-3.5 w-3.5 text-cyan-400" />
                        <span className="text-xs font-semibold text-white">Atlassian Forge Storage (Encrypted In-Tenant)</span>
                      </div>
                      <p className="mt-1 text-xs text-slate-400">
                        Cryptographic hashes and change audit records are stored directly in your Jira Cloud database partition.
                      </p>
                    </div>
                    <span className="rounded bg-slate-800 px-2 py-1 text-[11px] font-mono text-slate-300 border border-slate-700 shrink-0">
                      AES-256 Encrypted
                    </span>
                  </div>
                </div>

                {/* Boundary 2: Blocked External Internet */}
                <div className="lg:col-span-4 rounded-xl border border-rose-500/30 bg-rose-950/[0.1] p-6 flex flex-col justify-between space-y-4">
                  <div>
                    <div className="flex items-center gap-2 text-rose-400">
                      <Ban className="h-4 w-4" />
                      <span className="font-mono text-xs font-bold uppercase tracking-wider">
                        External Internet & 3rd-Party DBs
                      </span>
                    </div>

                    <p className="mt-3 text-xs text-slate-400 leading-relaxed">
                      Atlassian Forge’s platform security architecture physically prevents EvidenceLog from making outbound HTTP requests unless explicitly declared in the app manifest.
                    </p>

                    <div className="mt-4 rounded-lg bg-black/40 border border-rose-500/20 p-3 space-y-2 text-xs">
                      <div className="flex items-center justify-between text-rose-300">
                        <span>External Data Lakes</span>
                        <span className="font-mono font-bold text-rose-400">BLOCKED</span>
                      </div>
                      <div className="flex items-center justify-between text-rose-300">
                        <span>Third-party Credential Leaks</span>
                        <span className="font-mono font-bold text-rose-400">ZERO RISK</span>
                      </div>
                      <div className="flex items-center justify-between text-rose-300">
                        <span>Vendor Security Assessment</span>
                        <span className="font-mono font-bold text-emerald-400">INSTANT PASS</span>
                      </div>
                    </div>
                  </div>

                  <div className="pt-2 text-[11px] font-mono text-slate-400 border-t border-rose-500/20">
                    Compliant with SOC 2 CC6.8 & CC8.1
                  </div>
                </div>
              </div>

              {/* Data Flow Details */}
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4 pt-2">
                <div className="rounded-lg border border-white/[0.06] bg-[#090d13] p-4 space-y-1.5">
                  <span className="font-mono text-xs text-emerald-400">01 / Event Ingestion</span>
                  <h4 className="text-sm font-semibold text-white">Status Transition Webhook</h4>
                  <p className="text-xs text-slate-400">
                    Triggered natively within Jira Cloud when an issue moves to Done or Release.
                  </p>
                </div>

                <div className="rounded-lg border border-white/[0.06] bg-[#090d13] p-4 space-y-1.5">
                  <span className="font-mono text-xs text-cyan-400">02 / Mathematical Proof</span>
                  <h4 className="text-sm font-semibold text-white">SHA-256 HMAC Sealing</h4>
                  <p className="text-xs text-slate-400">
                    Fingerprints author, approvals, commits, and CI test counts into an immutable hash.
                  </p>
                </div>

                <div className="rounded-lg border border-white/[0.06] bg-[#090d13] p-4 space-y-1.5">
                  <span className="font-mono text-xs text-emerald-400">03 / Auditor Verification</span>
                  <h4 className="text-sm font-semibold text-white">In-Place Export</h4>
                  <p className="text-xs text-slate-400">
                    Auditor packs (PDF / JSON) are rendered locally in the browser with zero server egress.
                  </p>
                </div>
              </div>
            </div>
          )}

          {/* Interactive Tab 2: Forge Manifest Code Proof */}
          {activeTab === "manifest" && (
            <div className="p-6 sm:p-8 space-y-4">
              <div className="flex items-center justify-between text-xs text-slate-400">
                <div className="flex items-center gap-2">
                  <Terminal className="h-4 w-4 text-emerald-400" />
                  <span className="font-mono text-slate-300">manifest.yml (Production Security Declarations)</span>
                </div>
                <span className="font-mono text-[11px] text-emerald-400">Verified by Atlassian Forge CLI</span>
              </div>

              <pre className="overflow-x-auto rounded-xl border border-white/[0.08] bg-black/70 p-5 font-mono text-xs text-slate-300 leading-relaxed">
{`# EvidenceLog for Jira - Security & Scopes Declaration
modules:
  jira:issueGlance:
    - key: evidencelog-glance
      title: EvidenceLog SOC 2 Audit Seal
      icon: https://langtago.com/favicon.ico
      resolver:
        function: resolver-fn

app:
  id: ari:cloud:ecosystem::app/evidencelog-jira

permissions:
  scopes:
    - 'read:jira-work'      # Required to inspect issue status and pull request links
    - 'storage:app'         # Required to write encrypted seals to in-tenant Forge Storage

  # TECHNICAL PROOF OF ZERO-EGRESS:
  # Notice the complete absence of outbound HTTP network domains below.
  # If any function tries to execute 'fetch()' to an undeclared external domain,
  # the Atlassian Forge kernel immediately throws a SecurityPolicyException.
  external:
    fetch:
      backend: []           # No external hosts allowed. Data stays within Atlassian.`}
              </pre>

              <p className="text-xs text-slate-400">
                Security Engineers: You can verify this configuration directly in your Jira Cloud instance settings under <span className="font-mono text-slate-300">Apps &gt; Manage Apps &gt; EvidenceLog &gt; Permissions</span>.
              </p>
            </div>
          )}

          {/* Compliance Frameworks Footer Table */}
          <div className="border-t border-white/[0.08] bg-[#090d13] px-6 py-4 flex flex-wrap items-center justify-between gap-4 text-xs">
            <span className="font-mono text-slate-400 text-[11px] uppercase tracking-wider">
              Auditor Framework Mapping:
            </span>
            <div className="flex flex-wrap items-center gap-3 font-mono text-[11px]">
              <span className="rounded bg-slate-800/80 px-2.5 py-1 text-slate-300 border border-white/[0.06]">
                SOC 2 Type II: CC8.1 &amp; CC7.1
              </span>
              <span className="rounded bg-slate-800/80 px-2.5 py-1 text-slate-300 border border-white/[0.06]">
                ISO/IEC 27001:2022: A.8.25 &amp; A.8.32
              </span>
              <span className="rounded bg-slate-800/80 px-2.5 py-1 text-slate-300 border border-white/[0.06]">
                HIPAA Security: 45 CFR §164.312(b)
              </span>
              <span className="rounded bg-slate-800/80 px-2.5 py-1 text-slate-300 border border-white/[0.06]">
                PCI-DSS v4.0: Requirement 6.4
              </span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
