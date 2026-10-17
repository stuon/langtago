"use client";

import { useState } from "react";
import {
  ShieldAlert,
  ShieldCheck,
  ArrowRight,
  UserX,
  FileCheck2,
  Lock,
  RotateCcw,
  AlertOctagon,
  CheckCircle,
  GitPullRequest,
  Check,
} from "lucide-react";

type GatekeeperScenario = "COMPLIANT" | "SELF_APPROVAL" | "MISSING_SECURITY";

export default function GatekeeperDemo() {
  const [scenario, setScenario] = useState<GatekeeperScenario>("SELF_APPROVAL");
  const [remediated, setRemediated] = useState(false);

  const resetScenario = (newScenario: GatekeeperScenario) => {
    setScenario(newScenario);
    setRemediated(false);
  };

  const isBlocked =
    (scenario === "SELF_APPROVAL" && !remediated) ||
    (scenario === "MISSING_SECURITY" && !remediated);

  return (
    <section id="gatekeeper" className="relative py-20 border-t border-white/[0.06] bg-[#070b12]">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-2xl text-center space-y-3">
          <div className="inline-flex items-center gap-2 font-mono text-xs tracking-wider text-emerald-400 uppercase">
            <span className="h-1.5 w-1.5 rounded-full bg-emerald-400" />
            <span>Preventive Workflow Gatekeeper</span>
          </div>
          <h2 className="text-3xl font-bold tracking-tight text-white sm:text-4xl">
            Never let non-compliant code reach production.
          </h2>
          <p className="text-sm text-zinc-400">
            EvidenceLog installs directly as a native Jira Workflow Transition Validator.
            If a developer attempts to move an issue to <span className="font-mono text-white">Done</span> without required evidence, the transition is intercepted and blocked programmatically.
          </p>
        </div>

        {/* Interactive Scenario Selector */}
        <div className="mt-8 flex flex-wrap items-center justify-center gap-2">
          <button
            type="button"
            onClick={() => resetScenario("SELF_APPROVAL")}
            className={`rounded-lg px-4 py-2 font-mono text-xs font-medium transition-all ${
              scenario === "SELF_APPROVAL"
                ? "bg-amber-500/20 text-amber-300 border border-amber-500/40"
                : "border border-slate-800 bg-slate-900/60 text-slate-400 hover:text-white"
            }`}
          >
            Scenario 1: Self-Approval Attempt (SoD Violation)
          </button>
          <button
            type="button"
            onClick={() => resetScenario("MISSING_SECURITY")}
            className={`rounded-lg px-4 py-2 font-mono text-xs font-medium transition-all ${
              scenario === "MISSING_SECURITY"
                ? "bg-rose-500/20 text-rose-300 border border-rose-500/40"
                : "border border-slate-800 bg-slate-900/60 text-slate-400 hover:text-white"
            }`}
          >
            Scenario 2: Missing SAST Scan & Rollback Plan
          </button>
          <button
            type="button"
            onClick={() => resetScenario("COMPLIANT")}
            className={`rounded-lg px-4 py-2 font-mono text-xs font-medium transition-all ${
              scenario === "COMPLIANT"
                ? "bg-emerald-500/20 text-emerald-300 border border-emerald-500/40"
                : "border border-slate-800 bg-slate-900/60 text-slate-400 hover:text-white"
            }`}
          >
            Scenario 3: 100% Compliant Release
          </button>
        </div>

        {/* Jira Workflow Simulator Window */}
        <div className="mt-8 mx-auto max-w-4xl rounded-2xl border border-slate-800 bg-[#0a0e17] shadow-2xl overflow-hidden">
          {/* Top Window Bar */}
          <div className="flex items-center justify-between border-b border-slate-800 bg-slate-900/80 px-4 py-2.5">
            <div className="flex items-center gap-2">
              <div className="flex gap-1.5">
                <div className="h-2.5 w-2.5 rounded-full bg-rose-500/70" />
                <div className="h-2.5 w-2.5 rounded-full bg-amber-500/70" />
                <div className="h-2.5 w-2.5 rounded-full bg-emerald-500/70" />
              </div>
              <span className="font-mono text-[11px] text-slate-400">
                Jira Workflow Transition Validator Simulator: <strong className="text-white">LANG-10</strong>
              </span>
            </div>
            <span className="font-mono text-[10px] text-slate-500">jira:workflowValidator</span>
          </div>

          <div className="p-6 space-y-6">
            {/* Transition Simulation Bar */}
            <div className="flex flex-col sm:flex-row items-center justify-between gap-4 rounded-xl border border-slate-800 bg-slate-950/60 p-4">
              <div className="flex items-center gap-3">
                <div className="rounded-lg bg-slate-800 px-3 py-1.5 font-mono text-xs text-slate-300">
                  Status: <strong className="text-white">IN REVIEW</strong>
                </div>
                <ArrowRight className="h-4 w-4 text-slate-500" />
                <div className="rounded-lg bg-emerald-950/80 border border-emerald-800/60 px-3 py-1.5 font-mono text-xs text-emerald-300 font-semibold">
                  Target: <strong className="text-white">DONE</strong>
                </div>
              </div>

              <div className="font-mono text-[11px] text-slate-400">
                Transition Triggered By: <span className="text-white font-semibold">alex.k (Developer / Author)</span>
              </div>
            </div>

            {/* Gatekeeper Decision Banner */}
            {isBlocked ? (
              <div className="rounded-xl border border-rose-500/40 bg-rose-950/20 p-5 space-y-3">
                <div className="flex items-start gap-3">
                  <div className="rounded-lg bg-rose-500/20 p-2 text-rose-400 border border-rose-500/30 shrink-0">
                    <ShieldAlert className="h-5 w-5" />
                  </div>
                  <div className="space-y-1">
                    <div className="flex items-center gap-2">
                      <span className="font-bold text-white text-sm">Transition Intercepted & Blocked</span>
                      <span className="rounded bg-rose-500/20 px-2 py-0.5 font-mono text-[10px] text-rose-300 font-semibold">
                        403 POLICY VIOLATION
                      </span>
                    </div>
                    <p className="text-xs text-rose-200/90 leading-relaxed font-mono">
                      {scenario === "SELF_APPROVAL"
                        ? "[EvidenceLog Gatekeeper] Transition blocked: Ticket creator (alex.k) cannot self-approve transition to Done. Segregation of Duties requires independent peer reviewer sign-off under SOC 2 CC8.1."
                        : "[EvidenceLog Gatekeeper] Transition blocked: High-Risk change missing mandatory SAST security scan trace (Snyk/SonarQube) and backout/rollback procedure (ISO 27001 A.8.28 & A.8.32)."}
                    </p>
                  </div>
                </div>

                {/* 1-Click Remediation Button */}
                <div className="pt-2 border-t border-rose-500/20 flex flex-wrap items-center justify-between gap-3">
                  <span className="text-[11px] text-slate-400">
                    Fix the violation directly in Jira with 1-Click Remediation:
                  </span>
                  <button
                    type="button"
                    onClick={() => setRemediated(true)}
                    className="flex items-center gap-1.5 rounded-lg bg-emerald-500 px-3.5 py-1.5 font-mono text-xs font-semibold text-slate-950 hover:bg-emerald-400 transition-colors shadow-lg shadow-emerald-500/20"
                  >
                    <Check className="h-3.5 w-3.5" />
                    <span>
                      {scenario === "SELF_APPROVAL"
                        ? "Simulate Peer Reviewer Sign-off (sarah.m)"
                        : "Simulate Snyk SAST Scan & Backout Plan Pass"}
                    </span>
                  </button>
                </div>
              </div>
            ) : (
              <div className="rounded-xl border border-emerald-500/40 bg-emerald-950/20 p-5 space-y-3">
                <div className="flex items-start gap-3">
                  <div className="rounded-lg bg-emerald-500/20 p-2 text-emerald-400 border border-emerald-500/30 shrink-0">
                    <ShieldCheck className="h-5 w-5" />
                  </div>
                  <div className="space-y-1">
                    <div className="flex items-center gap-2">
                      <span className="font-bold text-white text-sm">Transition Approved & Certified</span>
                      <span className="rounded bg-emerald-500/20 px-2 py-0.5 font-mono text-[10px] text-emerald-300 font-semibold">
                        200 AUDIT READY (5/5 PASS)
                      </span>
                    </div>
                    <p className="text-xs text-emerald-200/90 leading-relaxed font-mono">
                      [EvidenceLog Gatekeeper] All 5 compliance controls verified: Acceptance criteria present, Git PR linked, independent peer review verified (sarah.m), QA sign-off confirmed, and SAST scanner passed. Issue transitioned to Done.
                    </p>
                  </div>
                </div>

                <div className="pt-2 border-t border-emerald-500/20 flex flex-wrap items-center justify-between gap-3 font-mono text-[11px] text-emerald-400">
                  <div className="flex items-center gap-1.5">
                    <Lock className="h-3 w-3" />
                    <span>Cryptographic Seal Created: sha256:9f83ac2b7c4d516e8812...</span>
                  </div>
                  <span className="text-slate-400">Written to Atlassian Forge KVS</span>
                </div>
              </div>
            )}

            {/* Checklist of Evaluated Controls */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-xs font-mono">
              <div className="rounded-lg border border-slate-800 bg-slate-900/40 p-3 flex items-center justify-between">
                <span className="text-slate-300">Pillar 1: Acceptance Criteria</span>
                <span className="text-emerald-400 font-semibold">✔ VERIFIED</span>
              </div>
              <div className="rounded-lg border border-slate-800 bg-slate-900/40 p-3 flex items-center justify-between">
                <span className="text-slate-300">Pillar 2: Linked Git PR (#384)</span>
                <span className="text-emerald-400 font-semibold">✔ VERIFIED</span>
              </div>
              <div className="rounded-lg border border-slate-800 bg-slate-900/40 p-3 flex items-center justify-between">
                <span className="text-slate-300">Pillar 3: Segregation of Duties</span>
                <span
                  className={
                    scenario === "SELF_APPROVAL" && !remediated
                      ? "text-rose-400 font-semibold"
                      : "text-emerald-400 font-semibold"
                  }
                >
                  {scenario === "SELF_APPROVAL" && !remediated ? "✖ VIOLATION" : "✔ VERIFIED (sarah.m)"}
                </span>
              </div>
              <div className="rounded-lg border border-slate-800 bg-slate-900/40 p-3 flex items-center justify-between">
                <span className="text-slate-300">Pillar 4: QA Sign-off</span>
                <span className="text-emerald-400 font-semibold">✔ VERIFIED</span>
              </div>
              <div className="col-span-1 sm:col-span-2 rounded-lg border border-slate-800 bg-slate-900/40 p-3 flex items-center justify-between">
                <span className="text-slate-300">Pillar 5: Security Scan (SAST)</span>
                <span
                  className={
                    scenario === "MISSING_SECURITY" && !remediated
                      ? "text-rose-400 font-semibold"
                      : "text-emerald-400 font-semibold"
                  }
                >
                  {scenario === "MISSING_SECURITY" && !remediated ? "✖ MISSING SCAN" : "✔ VERIFIED (Snyk/SonarQube)"}
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
