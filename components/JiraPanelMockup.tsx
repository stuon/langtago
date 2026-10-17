"use client";

import { useState } from "react";
import {
  ShieldCheck,
  CheckCircle2,
  GitPullRequest,
  GitCommit,
  Lock,
  ChevronRight,
  FileText,
  Copy,
  Check,
  Sparkles,
  ArrowUpRight,
} from "lucide-react";

interface JiraPanelMockupProps {
  onOpenAuditModal: () => void;
}

export default function JiraPanelMockup({ onOpenAuditModal }: JiraPanelMockupProps) {
  const [copiedHash, setCopiedHash] = useState(false);

  const shaHash = "9f83ac2b7c4d516e8812c32e5f56a3120199e8b7c62d08a0ef93d927a44fbc81";

  const handleCopyHash = () => {
    navigator.clipboard.writeText(shaHash);
    setCopiedHash(true);
    setTimeout(() => setCopiedHash(false), 2000);
  };

  return (
    <div className="w-full max-w-5xl rounded-2xl border border-slate-700/80 bg-slate-950 shadow-2xl shadow-emerald-500/10 overflow-hidden font-sans">
      {/* Mock Browser/Jira Top Bar */}
      <div className="flex items-center justify-between border-b border-slate-800 bg-slate-900/90 px-4 py-2.5">
        <div className="flex items-center gap-2">
          <div className="flex gap-1.5">
            <div className="h-3 w-3 rounded-full bg-rose-500/80" />
            <div className="h-3 w-3 rounded-full bg-amber-500/80" />
            <div className="h-3 w-3 rounded-full bg-emerald-500/80" />
          </div>
          <div className="ml-3 hidden sm:flex items-center gap-1.5 rounded-md bg-slate-950/70 px-3 py-1 text-xs text-slate-400 border border-slate-800">
            <span className="text-slate-500">https://</span>
            <span className="text-slate-200 font-medium">langtago-demo.atlassian.net</span>
            <span className="text-slate-500">/browse/LANG-10</span>
          </div>
        </div>

        <div className="flex items-center gap-2">
          <span className="inline-flex items-center gap-1 rounded-full bg-cyan-950/80 px-2.5 py-0.5 text-[11px] font-medium text-cyan-400 border border-cyan-800/60 font-mono">
            <Sparkles className="h-3 w-3" />
            Atlassian Forge Native
          </span>
          <span className="inline-flex items-center gap-1 rounded-full bg-emerald-950/80 px-2.5 py-0.5 text-[11px] font-medium text-emerald-400 border border-emerald-800/60 font-mono">
            <span className="h-1.5 w-1.5 rounded-full bg-emerald-400 animate-pulse" />
            Live Sealed Issue
          </span>
        </div>
      </div>

      {/* Jira Interface Body */}
      <div className="grid grid-cols-1 lg:grid-cols-12 bg-slate-950">
        {/* Left Column: Jira Ticket Core Details (7 cols) */}
        <div className="lg:col-span-7 p-5 sm:p-7 border-b lg:border-b-0 lg:border-r border-slate-800/80 space-y-5">
          {/* Breadcrumbs */}
          <div className="flex items-center gap-1.5 text-xs text-slate-400 font-mono">
            <span className="text-slate-400 hover:text-slate-300">Projects</span>
            <ChevronRight className="h-3 w-3 text-slate-600" />
            <span className="text-slate-300">Langtago Demo</span>
            <ChevronRight className="h-3 w-3 text-slate-600" />
            <span className="font-semibold text-emerald-400">LANG-10</span>
          </div>

          {/* Issue Title */}
          <div>
            <h3 className="text-lg sm:text-xl font-bold tracking-tight text-white">
              Migrate Auth Token Service to Ed25519 Keys
            </h3>
            <p className="mt-1 text-xs text-slate-400">
              Upgrade core signature algorithm from RSA-2048 to Ed25519 in accordance with SOC 2 CC7.1 key management policies.
            </p>
          </div>

          {/* Jira Attributes Strip */}
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-2.5 text-xs">
            <div className="rounded-lg bg-slate-900/90 p-2.5 border border-slate-800/80">
              <span className="text-[10px] uppercase font-medium text-slate-400">Status</span>
              <div className="mt-1 flex items-center gap-1.5">
                <span className="h-2 w-2 rounded-full bg-emerald-400" />
                <span className="font-semibold text-emerald-400">DONE</span>
              </div>
            </div>

            <div className="rounded-lg bg-slate-900/90 p-2.5 border border-slate-800/80">
              <span className="text-[10px] uppercase font-medium text-slate-400">Priority</span>
              <div className="mt-1 flex items-center gap-1.5 text-rose-400 font-medium">
                <ArrowUpRight className="h-3.5 w-3.5" />
                <span>High</span>
              </div>
            </div>

            <div className="rounded-lg bg-slate-900/90 p-2.5 border border-slate-800/80">
              <span className="text-[10px] uppercase font-medium text-slate-400">Assignee</span>
              <div className="mt-1 flex items-center gap-1.5 text-slate-200 truncate">
                <span className="flex h-4 w-4 items-center justify-center rounded-full bg-emerald-700 text-[9px] font-bold text-white">
                  SC
                </span>
                <span className="truncate">Sarah Chen</span>
              </div>
            </div>

            <div className="rounded-lg bg-slate-900/90 p-2.5 border border-slate-800/80">
              <span className="text-[10px] uppercase font-medium text-slate-400">Release Sprint</span>
              <div className="mt-1 text-slate-200 font-mono text-[11px] truncate">
                Sprint 26.4
              </div>
            </div>
          </div>

          {/* Development & Git Activity Glance */}
          <div className="rounded-xl border border-slate-800 bg-slate-900/60 p-4 space-y-3">
            <div className="flex items-center justify-between text-xs">
              <span className="font-semibold text-slate-300">Linked Development Activity</span>
              <span className="text-emerald-400 font-mono text-[11px]">Synced via GitHub App</span>
            </div>

            <div className="space-y-2 text-xs">
              <div className="flex items-center justify-between rounded-lg bg-slate-950 p-2.5 border border-slate-800">
                <div className="flex items-center gap-2">
                  <GitPullRequest className="h-4 w-4 text-emerald-400" />
                  <span className="font-mono text-slate-200">PR #384: feat/ed25519-auth-tokens</span>
                </div>
                <span className="rounded bg-emerald-500/10 px-2 py-0.5 text-[10px] font-medium text-emerald-400 border border-emerald-500/20">
                  MERGED
                </span>
              </div>

              <div className="flex items-center justify-between rounded-lg bg-slate-950 p-2.5 border border-slate-800">
                <div className="flex items-center gap-2">
                  <GitCommit className="h-4 w-4 text-cyan-400" />
                  <span className="font-mono text-slate-300 truncate">Commit 4f738a1: ed25519 keygen</span>
                </div>
                <span className="font-mono text-[11px] text-slate-400">main</span>
              </div>
            </div>
          </div>
        </div>

        {/* Right Column: EvidenceLog for Jira Panel (5 cols) */}
        <div className="lg:col-span-5 p-5 sm:p-7 bg-slate-900/40 space-y-4">
          {/* Panel Header */}
          <div className="rounded-xl border border-emerald-500/30 bg-gradient-to-b from-emerald-950/40 to-slate-950 p-4 space-y-3 shadow-inner">
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-2">
                <div className="flex h-7 w-7 items-center justify-center rounded-lg bg-emerald-500/20 text-emerald-400 border border-emerald-500/40">
                  <ShieldCheck className="h-4 w-4" />
                </div>
                <div>
                  <h4 className="text-xs font-bold text-white tracking-tight">EvidenceLog Panel</h4>
                  <p className="text-[10px] text-slate-400">Atlassian Forge Issue Glance</p>
                </div>
              </div>
              <span className="inline-flex items-center gap-1 rounded-full bg-emerald-500/10 px-2 py-0.5 text-[10px] font-bold text-emerald-400 border border-emerald-500/30">
                <Check className="h-2.5 w-2.5" />
                SEALED
              </span>
            </div>

            {/* Compliance Badge */}
            <div className="rounded-lg bg-slate-950/90 p-2.5 border border-emerald-500/20 flex items-center justify-between">
              <div>
                <span className="text-[10px] font-medium text-slate-400">Audit Framework</span>
                <p className="text-xs font-semibold text-emerald-300">AICPA SOC 2 Type II (CC8.1)</p>
              </div>
              <span className="text-[11px] font-bold text-emerald-400 bg-emerald-950/60 px-2 py-1 rounded border border-emerald-800">
                100% Passed
              </span>
            </div>

            {/* Checklist of Sealed Controls */}
            <div className="space-y-2 text-xs">
              <div className="flex items-start gap-2 text-slate-300">
                <CheckCircle2 className="h-4 w-4 text-emerald-400 shrink-0 mt-0.5" />
                <span>
                  <strong className="text-white">Separation of Duties:</strong> Author != Approvers (2 valid signatures)
                </span>
              </div>

              <div className="flex items-start gap-2 text-slate-300">
                <CheckCircle2 className="h-4 w-4 text-emerald-400 shrink-0 mt-0.5" />
                <span>
                  <strong className="text-white">Automated Tests:</strong> 1,482 passed (94.2% coverage)
                </span>
              </div>

              <div className="flex items-start gap-2 text-slate-300">
                <CheckCircle2 className="h-4 w-4 text-emerald-400 shrink-0 mt-0.5" />
                <span>
                  <strong className="text-white">Security Scan:</strong> 0 Critical / 0 High CVEs
                </span>
              </div>

              <div className="flex items-start gap-2 text-slate-300">
                <CheckCircle2 className="h-4 w-4 text-emerald-400 shrink-0 mt-0.5" />
                <span>
                  <strong className="text-white">Production Release:</strong> Approved by SecOps
                </span>
              </div>
            </div>

            {/* Cryptographic Hash Section */}
            <div className="pt-2 border-t border-slate-800/80">
              <div className="flex items-center justify-between text-[10px] text-slate-400 pb-1">
                <span className="flex items-center gap-1 font-mono text-emerald-400">
                  <Lock className="h-3 w-3" />
                  SHA-256 Tamper-Proof Seal
                </span>
                <button
                  onClick={handleCopyHash}
                  className="flex items-center gap-1 hover:text-white transition-colors"
                  title="Copy SHA-256 checksum"
                >
                  {copiedHash ? (
                    <Check className="h-3 w-3 text-emerald-400" />
                  ) : (
                    <Copy className="h-3 w-3" />
                  )}
                  <span>{copiedHash ? "Copied" : "Copy"}</span>
                </button>
              </div>
              <div className="rounded bg-slate-950 p-2 font-mono text-[10px] text-slate-300 truncate border border-slate-800">
                {shaHash}
              </div>
            </div>

            {/* CTA inside Jira Panel */}
            <div className="pt-2">
              <button
                onClick={onOpenAuditModal}
                className="w-full flex items-center justify-center gap-2 rounded-lg bg-emerald-500 py-2 px-3 text-xs font-semibold text-slate-950 shadow-md shadow-emerald-500/20 hover:bg-emerald-400 transition-all focus:outline-none focus:ring-2 focus:ring-emerald-400"
              >
                <FileText className="h-3.5 w-3.5" />
                <span>Inspect SOC 2 Audit Report</span>
              </button>
            </div>
          </div>

          <div className="rounded-lg bg-slate-950 p-3 border border-slate-800/80 text-[11px] text-slate-400 flex items-center justify-between">
            <span className="flex items-center gap-1.5">
              <Lock className="h-3.5 w-3.5 text-cyan-400" />
              <span>Zero-Data Retention Policy</span>
            </span>
            <span className="text-slate-400">No external DB storage</span>
          </div>
        </div>
      </div>
    </div>
  );
}
