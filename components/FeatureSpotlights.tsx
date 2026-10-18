"use client";

import { useState } from "react";
import {
  ShieldAlert,
  ShieldCheck,
  Check,
  ArrowRight,
  Layers,
  FileCheck,
  Lock,
  Ban,
  Sparkles,
} from "lucide-react";

interface FeatureSpotlightsProps {
  onOpenAuditModal: () => void;
}

export default function FeatureSpotlights({ onOpenAuditModal }: FeatureSpotlightsProps) {
  // Gatekeeper mini-state
  const [isViolation, setIsViolation] = useState(true);

  return (
    <section id="features" className="relative py-20 border-t border-white/[0.06] bg-[#070a0e]">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 space-y-24">
        {/* Section Header */}
        <div className="mx-auto max-w-2xl text-center space-y-2">
          <div className="inline-flex items-center gap-2 font-mono text-[11px] tracking-wider text-emerald-400 uppercase">
            <span className="h-1.5 w-1.5 rounded-full bg-emerald-400" />
            <span>Core Capabilities</span>
          </div>
          <h2 className="text-2xl font-bold tracking-tight text-white sm:text-4xl">
            Everything you need to pass SOC 2.{" "}
            <span className="text-zinc-400 font-normal">Without the scramble.</span>
          </h2>
          <p className="text-xs sm:text-sm text-zinc-400">
            Three core engines that turn your standard Jira workflows into continuous compliance evidence.
          </p>
        </div>

        {/* =========================================================================
            SPOTLIGHT 1: Preventive Gatekeeper (The Blocker)
            ========================================================================= */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
          <div className="lg:col-span-5 space-y-5">
            <div className="inline-flex items-center gap-2 rounded-full border border-rose-500/30 bg-rose-500/10 px-3 py-1 font-mono text-[11px] text-rose-300">
              <ShieldAlert className="h-3.5 w-3.5" />
              <span>01 / Preventive Control</span>
            </div>

            <h3 className="text-xl sm:text-2xl font-bold text-white tracking-tight leading-snug">
              Block unapproved changes before they ever reach production.
            </h3>

            <p className="text-xs sm:text-sm text-zinc-400 leading-relaxed">
              Most teams discover non-compliant tickets months later during audit sampling.
              EvidenceLog intercepts transitions in real-time, enforcing peer review sign-offs, CI test runs, and separation of duties before an issue can be marked <span className="font-mono text-white">Done</span>.
            </p>

            <ul className="space-y-2.5 text-xs text-zinc-300">
              <li className="flex items-start gap-2">
                <Check className="h-4 w-4 text-emerald-400 shrink-0 mt-0.5" />
                <span><strong>Segregation of Duties:</strong> Prevents self-approval (Author ≠ Approver) under SOC 2 CC6.8.</span>
              </li>
              <li className="flex items-start gap-2">
                <Check className="h-4 w-4 text-emerald-400 shrink-0 mt-0.5" />
                <span><strong>Traceability:</strong> Mandates verified Pull Request links across GitHub, GitLab, and Bitbucket.</span>
              </li>
              <li className="flex items-start gap-2">
                <Check className="h-4 w-4 text-emerald-400 shrink-0 mt-0.5" />
                <span><strong>QA & Security Sign-off:</strong> Confirms test suite passes and 0 Critical SAST vulnerabilities.</span>
              </li>
            </ul>
          </div>

          {/* Interactive Gatekeeper Simulator Box */}
          <div className="lg:col-span-7">
            <div className="rounded-2xl border border-white/[0.08] bg-[#0a0e15] p-5 shadow-2xl space-y-4">
              <div className="flex items-center justify-between border-b border-white/[0.06] pb-3 text-xs">
                <div className="flex items-center gap-2">
                  <div className="flex gap-1">
                    <span className="h-2.5 w-2.5 rounded-full bg-rose-500/80" />
                    <span className="h-2.5 w-2.5 rounded-full bg-amber-500/80" />
                    <span className="h-2.5 w-2.5 rounded-full bg-emerald-500/80" />
                  </div>
                  <span className="font-mono text-[11px] text-zinc-400">Jira Workflow Validator: LANG-10</span>
                </div>
                <span className="font-mono text-[10px] text-zinc-500">Live Simulator</span>
              </div>

              {/* Status transition bar */}
              <div className="flex items-center justify-between rounded-xl bg-black/40 border border-white/[0.06] p-3 text-xs font-mono">
                <div className="flex items-center gap-2">
                  <span className="text-zinc-400">Status: <strong className="text-white">IN REVIEW</strong></span>
                  <ArrowRight className="h-3.5 w-3.5 text-zinc-600" />
                  <span className="text-emerald-400">Target: <strong className="text-white">DONE</strong></span>
                </div>
                <div className="flex gap-1.5">
                  <button
                    type="button"
                    onClick={() => setIsViolation(true)}
                    className={`px-2.5 py-1 rounded text-[11px] transition-all ${
                      isViolation
                        ? "bg-rose-500/20 text-rose-300 border border-rose-500/40 font-semibold"
                        : "text-zinc-500 hover:text-zinc-300"
                    }`}
                  >
                    Simulate Violation
                  </button>
                  <button
                    type="button"
                    onClick={() => setIsViolation(false)}
                    className={`px-2.5 py-1 rounded text-[11px] transition-all ${
                      !isViolation
                        ? "bg-emerald-500/20 text-emerald-300 border border-emerald-500/40 font-semibold"
                        : "text-zinc-500 hover:text-zinc-300"
                    }`}
                  >
                    Simulate Compliance
                  </button>
                </div>
              </div>

              {/* Gatekeeper Decision Card */}
              {isViolation ? (
                <div className="rounded-xl border border-rose-500/40 bg-rose-950/20 p-4 space-y-3">
                  <div className="flex items-start gap-3">
                    <ShieldAlert className="h-5 w-5 text-rose-400 shrink-0 mt-0.5" />
                    <div className="space-y-1">
                      <div className="flex items-center gap-2">
                        <span className="font-semibold text-white text-xs">Transition Blocked: 403 Forbidden</span>
                        <span className="rounded bg-rose-500/20 px-1.5 py-0.5 font-mono text-[9px] text-rose-300">
                          SOC 2 CC6.8 VIOLATION
                        </span>
                      </div>
                      <p className="text-[11px] text-rose-200/90 leading-relaxed font-mono">
                        Ticket author (alex.k) cannot approve their own release. Segregation of duties mandates an independent peer sign-off.
                      </p>
                    </div>
                  </div>
                  <button
                    type="button"
                    onClick={() => setIsViolation(false)}
                    className="w-full flex items-center justify-center gap-1.5 rounded-lg bg-emerald-500 py-2 font-mono text-xs font-semibold text-zinc-950 hover:bg-emerald-400 transition-colors"
                  >
                    <Sparkles className="h-3.5 w-3.5" />
                    <span>Apply 1-Click Peer Review Fix (sarah.m)</span>
                  </button>
                </div>
              ) : (
                <div className="rounded-xl border border-emerald-500/40 bg-emerald-950/20 p-4 space-y-2">
                  <div className="flex items-start gap-3">
                    <ShieldCheck className="h-5 w-5 text-emerald-400 shrink-0 mt-0.5" />
                    <div>
                      <div className="flex items-center gap-2">
                        <span className="font-semibold text-white text-xs">Transition Approved &amp; Sealed</span>
                        <span className="rounded bg-emerald-500/20 px-1.5 py-0.5 font-mono text-[9px] text-emerald-300">
                          200 AUDIT READY (5/5 PASS)
                        </span>
                      </div>
                      <p className="text-[11px] text-emerald-200/90 leading-relaxed font-mono mt-1">
                        Independent peer review (sarah.m) confirmed. Cryptographic seal sha256:9f83ac2b... saved to Forge Storage. Issue moved to Done.
                      </p>
                    </div>
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>

        {/* =========================================================================
            SPOTLIGHT 2: Zero-Egress In-Tenant Architecture (The Trust)
            ========================================================================= */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
          {/* Security Topology Visual */}
          <div className="lg:col-span-7 order-2 lg:order-1">
            <div className="rounded-2xl border border-white/[0.08] bg-[#0a0e15] p-6 shadow-2xl space-y-4">
              <div className="flex items-center justify-between border-b border-white/[0.06] pb-3 text-xs">
                <span className="font-mono text-zinc-400">Atlassian Forge Trust Boundary</span>
                <span className="rounded bg-emerald-500/10 px-2 py-0.5 font-mono text-[10px] text-emerald-400 border border-emerald-500/20">
                  Zero Outbound Egress
                </span>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div className="rounded-xl border border-emerald-500/30 bg-emerald-950/10 p-4 space-y-2">
                  <div className="flex items-center gap-2 text-xs font-semibold text-emerald-300">
                    <ShieldCheck className="h-4 w-4 text-emerald-400" />
                    <span>Your Atlassian Tenant</span>
                  </div>
                  <p className="text-[11px] text-zinc-300 leading-relaxed">
                    EvidenceLog executes 100% inside your Jira Cloud Forge sandbox. All cryptographic hashes are stored in your instance’s encrypted Key-Value Storage.
                  </p>
                  <div className="pt-1 text-[10px] font-mono text-emerald-400">
                    ✔ AES-256 In-Tenant Encryption
                  </div>
                </div>

                <div className="rounded-xl border border-rose-500/30 bg-rose-950/10 p-4 space-y-2">
                  <div className="flex items-center gap-2 text-xs font-semibold text-rose-300">
                    <Ban className="h-4 w-4 text-rose-400" />
                    <span>External Internet &amp; DBs</span>
                  </div>
                  <p className="text-[11px] text-zinc-400 leading-relaxed">
                    The Atlassian Forge platform enforces strict, unbypassable zero-egress policies. EvidenceLog has no backend servers and cannot send data externally.
                  </p>
                  <div className="pt-1 text-[10px] font-mono text-rose-400">
                    ✖ Outbound HTTP: STRICT_DENY
                  </div>
                </div>
              </div>

              <div className="rounded-xl border border-white/[0.06] bg-black/40 p-3 flex items-center justify-between text-xs font-mono text-zinc-400">
                <span>Vendor Risk Review:</span>
                <span className="text-emerald-400 font-semibold">Instant Pass (Zero Data Custody)</span>
              </div>
            </div>
          </div>

          <div className="lg:col-span-5 space-y-5 order-1 lg:order-2">
            <div className="inline-flex items-center gap-2 rounded-full border border-emerald-500/30 bg-emerald-500/10 px-3 py-1 font-mono text-[11px] text-emerald-300">
              <Lock className="h-3.5 w-3.5" />
              <span>02 / Zero-Trust Security</span>
            </div>

            <h3 className="text-xl sm:text-2xl font-bold text-white tracking-tight leading-snug">
              Your Jira ticket data never leaves Atlassian Cloud.
            </h3>

            <p className="text-xs sm:text-sm text-zinc-400 leading-relaxed">
              Legacy compliance tools copy pull requests, author names, and ticket comments into third-party cloud databases—introducing severe vendor supply-chain risks.
              EvidenceLog executes purely in Atlassian Forge with zero outbound internet permissions.
            </p>

            <ul className="space-y-2.5 text-xs text-zinc-300">
              <li className="flex items-start gap-2">
                <Check className="h-4 w-4 text-emerald-400 shrink-0 mt-0.5" />
                <span><strong>Zero Third-Party Storage:</strong> All audit records remain within your Jira database partition.</span>
              </li>
              <li className="flex items-start gap-2">
                <Check className="h-4 w-4 text-emerald-400 shrink-0 mt-0.5" />
                <span><strong>No API Tokens or Credentials:</strong> Inherits native Atlassian IAM roles and SSO permissions.</span>
              </li>
              <li className="flex items-start gap-2">
                <Check className="h-4 w-4 text-emerald-400 shrink-0 mt-0.5" />
                <span><strong>Auditor Verifiable:</strong> Inspect the Forge app permissions directly in your Jira admin console.</span>
              </li>
            </ul>
          </div>
        </div>

        {/* =========================================================================
            SPOTLIGHT 3: 1-Click Auditor Packs & JQL (The Payoff)
            ========================================================================= */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
          <div className="lg:col-span-5 space-y-5">
            <div className="inline-flex items-center gap-2 rounded-full border border-cyan-500/30 bg-cyan-500/10 px-3 py-1 font-mono text-[11px] text-cyan-300">
              <FileCheck className="h-3.5 w-3.5" />
              <span>03 / Effortless Audit Handoff</span>
            </div>

            <h3 className="text-xl sm:text-2xl font-bold text-white tracking-tight leading-snug">
              Instant 1-click evidence packages for your SOC 2 auditor.
            </h3>

            <p className="text-xs sm:text-sm text-zinc-400 leading-relaxed">
              When your external audit arrives, hand them mathematically sealed evidence packages instead of taking screenshots.
              Filter certified releases using native Jira JQL, or generate auditor-ready JSON and CSV exports instantly.
            </p>

            <ul className="space-y-2.5 text-xs text-zinc-300">
              <li className="flex items-start gap-2">
                <Check className="h-4 w-4 text-emerald-400 shrink-0 mt-0.5" />
                <span><strong>Native JQL Querying:</strong> Query certified issues with standard Jira JQL in Jira search.</span>
              </li>
              <li className="flex items-start gap-2">
                <Check className="h-4 w-4 text-emerald-400 shrink-0 mt-0.5" />
                <span><strong>Vanta &amp; Drata Ready:</strong> Formatted JSON schemas for automated GRC platform ingestion.</span>
              </li>
              <li className="flex items-start gap-2">
                <Check className="h-4 w-4 text-emerald-400 shrink-0 mt-0.5" />
                <span><strong>Release Merkle Proofs:</strong> Mathematically certifies that no tickets were altered retroactively.</span>
              </li>
            </ul>

            <div className="pt-2">
              <button
                type="button"
                onClick={onOpenAuditModal}
                className="inline-flex items-center gap-2 rounded-xl border border-emerald-500/40 bg-emerald-500/10 px-4 py-2 text-xs font-semibold text-emerald-300 hover:bg-emerald-500/20 transition-all shadow-sm"
              >
                <FileCheck className="h-3.5 w-3.5" />
                <span>Inspect Sample SOC 2 Audit Report</span>
                <ArrowRight className="h-3.5 w-3.5" />
              </button>
            </div>
          </div>

          {/* Audit Hub Mock Preview */}
          <div className="lg:col-span-7">
            <div className="rounded-2xl border border-white/[0.08] bg-[#0a0e15] p-5 shadow-2xl space-y-3 font-sans text-xs">
              <div className="flex items-center justify-between border-b border-white/[0.06] pb-3">
                <div className="flex items-center gap-2">
                  <Layers className="h-4 w-4 text-emerald-400" />
                  <span className="font-semibold text-white">Sprint 2026.4 Compliance Audit Hub</span>
                </div>
                <span className="rounded-full bg-emerald-500/10 px-2.5 py-0.5 font-mono text-[10px] text-emerald-400 border border-emerald-500/20">
                  100% Audit Ready
                </span>
              </div>

              {/* JQL Bar */}
              <div className="rounded-lg bg-black/60 border border-white/[0.06] p-2.5 font-mono text-[11px] text-zinc-400 flex items-center justify-between">
                <span className="truncate text-emerald-300/90">
                  project = LANG AND status = Done AND evidencelog.isAuditReady = &quot;true&quot;
                </span>
                <span className="text-[10px] text-zinc-500 shrink-0 ml-2">JQL</span>
              </div>

              {/* Sample Table */}
              <div className="overflow-x-auto rounded-lg border border-white/[0.06]">
                <table className="w-full text-left text-[11px]">
                  <thead className="bg-zinc-900/60 font-mono text-[10px] text-zinc-400 uppercase">
                    <tr>
                      <th className="py-2 px-3">Issue</th>
                      <th className="py-2 px-3">Author</th>
                      <th className="py-2 px-3">Approver</th>
                      <th className="py-2 px-3">Audit Seal</th>
                      <th className="py-2 px-3 text-right">Status</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-white/[0.06] bg-[#0c1017]">
                    <tr>
                      <td className="py-2.5 px-3 font-mono font-semibold text-emerald-400">LANG-10</td>
                      <td className="py-2.5 px-3 text-zinc-300">alex.k</td>
                      <td className="py-2.5 px-3 text-zinc-300">sarah.m</td>
                      <td className="py-2.5 px-3 font-mono text-zinc-500">sha256:9f83ac...</td>
                      <td className="py-2.5 px-3 text-right text-emerald-400 font-semibold">✔ CERTIFIED</td>
                    </tr>
                    <tr>
                      <td className="py-2.5 px-3 font-mono font-semibold text-emerald-400">LANG-9</td>
                      <td className="py-2.5 px-3 text-zinc-300">david.t</td>
                      <td className="py-2.5 px-3 text-zinc-300">marcus.v</td>
                      <td className="py-2.5 px-3 font-mono text-zinc-500">sha256:3a7b1c...</td>
                      <td className="py-2.5 px-3 text-right text-emerald-400 font-semibold">✔ CERTIFIED</td>
                    </tr>
                    <tr>
                      <td className="py-2.5 px-3 font-mono font-semibold text-emerald-400">LANG-7</td>
                      <td className="py-2.5 px-3 text-zinc-300">sophia.l</td>
                      <td className="py-2.5 px-3 text-zinc-300">sarah.m</td>
                      <td className="py-2.5 px-3 font-mono text-zinc-500">sha256:1e4c9f...</td>
                      <td className="py-2.5 px-3 text-right text-emerald-400 font-semibold">✔ CERTIFIED</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
