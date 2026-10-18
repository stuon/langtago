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
    <div className="w-full max-w-5xl rounded-2xl border border-slate-200/90 bg-white shadow-xl overflow-hidden font-sans text-left">
      {/* Mock Browser/Jira Top Bar */}
      <div className="flex items-center justify-between border-b border-slate-200 bg-slate-100/80 px-4 py-2.5">
        <div className="flex items-center gap-2">
          <div className="flex gap-1.5">
            <div className="h-3 w-3 rounded-full bg-slate-300" />
            <div className="h-3 w-3 rounded-full bg-slate-300" />
            <div className="h-3 w-3 rounded-full bg-slate-300" />
          </div>
          <div className="ml-3 hidden sm:flex items-center gap-1.5 rounded-lg bg-white px-3 py-1 text-xs text-slate-600 border border-slate-200 shadow-xs">
            <span className="text-slate-400">https://</span>
            <span className="text-slate-800 font-semibold">langtago-demo.atlassian.net</span>
            <span className="text-slate-500">/browse/LANG-10</span>
          </div>
        </div>

        <div className="flex items-center gap-2">
          <span className="inline-flex items-center gap-1.5 rounded-full bg-emerald-50 px-3 py-0.5 text-xs font-semibold text-emerald-700 border border-emerald-200">
            <span className="h-2 w-2 rounded-full bg-emerald-500" />
            <span>Audit Ready (5/5)</span>
          </span>
        </div>
      </div>

      {/* Jira Interface Body */}
      <div className="grid grid-cols-1 lg:grid-cols-12 bg-white">
        {/* Left Column: Jira Ticket Core Details (7 cols) */}
        <div className="lg:col-span-7 p-6 sm:p-7 border-b lg:border-b-0 lg:border-r border-slate-200 space-y-5">
          {/* Breadcrumbs */}
          <div className="flex items-center gap-1.5 text-xs text-slate-500 font-medium">
            <span className="hover:text-slate-700">Projects</span>
            <ChevronRight className="h-3 w-3 text-slate-400" />
            <span className="text-slate-700">Langtago Engineering</span>
            <ChevronRight className="h-3 w-3 text-slate-400" />
            <span className="font-bold text-slate-900 bg-slate-100 px-1.5 py-0.5 rounded">LANG-10</span>
          </div>

          {/* Issue Title */}
          <div>
            <h3 className="text-xl font-bold tracking-tight text-slate-900">
              Migrate Auth Token Service to Ed25519 Keys
            </h3>
            <p className="mt-1.5 text-xs sm:text-sm text-slate-500 leading-relaxed">
              Upgrade core signature algorithm from RSA-2048 to Ed25519 in accordance with SOC 2 CC7.1 key management policies.
            </p>
          </div>

          {/* Jira Attributes Strip */}
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-2.5 text-xs">
            <div className="rounded-xl bg-slate-50 p-2.5 border border-slate-200">
              <span className="text-[10px] uppercase font-bold text-slate-400 tracking-wider">Status</span>
              <div className="mt-1 flex items-center gap-1.5">
                <span className="h-2 w-2 rounded-full bg-emerald-500" />
                <span className="font-bold text-emerald-700">RESOLVED</span>
              </div>
            </div>

            <div className="rounded-xl bg-slate-50 p-2.5 border border-slate-200">
              <span className="text-[10px] uppercase font-bold text-slate-400 tracking-wider">Priority</span>
              <div className="mt-1 flex items-center gap-1.5 text-rose-600 font-semibold">
                <ArrowUpRight className="h-3.5 w-3.5" />
                <span>High</span>
              </div>
            </div>

            <div className="rounded-xl bg-slate-50 p-2.5 border border-slate-200">
              <span className="text-[10px] uppercase font-bold text-slate-400 tracking-wider">Assignee</span>
              <div className="mt-1 flex items-center gap-1.5 text-slate-800 font-medium truncate">
                <span className="flex h-4 w-4 items-center justify-center rounded-full bg-emerald-600 text-[9px] font-bold text-white">
                  SC
                </span>
                <span className="truncate">Sarah Chen</span>
              </div>
            </div>

            <div className="rounded-xl bg-slate-50 p-2.5 border border-slate-200">
              <span className="text-[10px] uppercase font-bold text-slate-400 tracking-wider">Release Sprint</span>
              <div className="mt-1 text-slate-700 font-semibold text-[11px] truncate">
                Sprint 2026.4
              </div>
            </div>
          </div>

          {/* Development & Git Activity Glance */}
          <div className="rounded-xl border border-slate-200 bg-slate-50/70 p-4 space-y-2.5">
            <div className="flex items-center justify-between text-xs">
              <span className="font-bold text-slate-800">Linked Development Activity</span>
              <span className="text-emerald-700 font-semibold text-[11px]">GitHub App Synced</span>
            </div>

            <div className="space-y-2 text-xs">
              <div className="flex items-center justify-between rounded-lg bg-white p-2.5 border border-slate-200 shadow-xs">
                <div className="flex items-center gap-2">
                  <GitPullRequest className="h-4 w-4 text-emerald-600" />
                  <span className="font-medium text-slate-800">PR #384: feat/ed25519-auth-tokens</span>
                </div>
                <span className="rounded bg-emerald-100 px-2 py-0.5 text-[10px] font-bold text-emerald-800">
                  MERGED
                </span>
              </div>

              <div className="flex items-center justify-between rounded-lg bg-white p-2.5 border border-slate-200 shadow-xs">
                <div className="flex items-center gap-2">
                  <GitCommit className="h-4 w-4 text-slate-500" />
                  <span className="font-mono text-[11px] text-slate-600 truncate">Commit 4f738a1: ed25519 keygen</span>
                </div>
                <span className="text-[11px] font-medium text-slate-500">main</span>
              </div>
            </div>
          </div>
        </div>

        {/* Right Column: EvidenceLog for Jira Panel (5 cols) */}
        <div className="lg:col-span-5 p-6 sm:p-7 bg-slate-50/70 space-y-4">
          {/* Panel Header */}
          <div className="rounded-2xl border border-emerald-200 bg-white p-4 sm:p-5 space-y-3.5 shadow-sm">
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-2.5">
                <div className="flex h-8 w-8 items-center justify-center rounded-xl bg-emerald-100 text-emerald-700 border border-emerald-200">
                  <ShieldCheck className="h-4 w-4" />
                </div>
                <div>
                  <h4 className="text-xs font-bold text-slate-900 tracking-tight">EvidenceLog Panel</h4>
                  <p className="text-[10px] text-slate-500 font-medium">Atlassian Forge Issue Glance</p>
                </div>
              </div>
              <span className="inline-flex items-center gap-1 rounded-full bg-emerald-100 px-2.5 py-0.5 text-[10px] font-bold text-emerald-800 border border-emerald-200">
                <Check className="h-3 w-3" />
                SEALED
              </span>
            </div>

            {/* Compliance Badge */}
            <div className="rounded-xl bg-emerald-50/70 p-2.5 border border-emerald-200/80 flex items-center justify-between">
              <div>
                <span className="text-[10px] font-semibold text-emerald-700 uppercase tracking-wider">Audit Standard</span>
                <p className="text-xs font-bold text-slate-900">AICPA SOC 2 Type II (CC8.1)</p>
              </div>
              <span className="text-xs font-bold text-emerald-800 bg-white px-2 py-0.5 rounded-lg border border-emerald-200 shadow-xs">
                100% Passed
              </span>
            </div>

            {/* Checklist of Sealed Controls */}
            <div className="space-y-2 text-xs">
              <div className="flex items-start gap-2 text-slate-700">
                <CheckCircle2 className="h-4 w-4 text-emerald-600 shrink-0 mt-0.5" />
                <span>
                  <strong className="text-slate-900 font-semibold">Separation of Duties:</strong> Author != Approver (Sarah M. approved)
                </span>
              </div>

              <div className="flex items-start gap-2 text-slate-700">
                <CheckCircle2 className="h-4 w-4 text-emerald-600 shrink-0 mt-0.5" />
                <span>
                  <strong className="text-slate-900 font-semibold">Automated Tests:</strong> 1,482 passed (94.2% coverage)
                </span>
              </div>

              <div className="flex items-start gap-2 text-slate-700">
                <CheckCircle2 className="h-4 w-4 text-emerald-600 shrink-0 mt-0.5" />
                <span>
                  <strong className="text-slate-900 font-semibold">Security Scan:</strong> Snyk clean (0 High/Crit CVEs)
                </span>
              </div>

              <div className="flex items-start gap-2 text-slate-700">
                <CheckCircle2 className="h-4 w-4 text-emerald-600 shrink-0 mt-0.5" />
                <span>
                  <strong className="text-slate-900 font-semibold">Production Release:</strong> Approved by SecOps
                </span>
              </div>
            </div>

            {/* Cryptographic Hash Section */}
            <div className="pt-2 border-t border-slate-100">
              <div className="flex items-center justify-between text-[10px] text-slate-500 pb-1">
                <span className="flex items-center gap-1 font-medium text-emerald-700">
                  <Lock className="h-3 w-3" />
                  SHA-256 Tamper-Proof Seal
                </span>
                <button
                  onClick={handleCopyHash}
                  className="flex items-center gap-1 font-semibold text-slate-600 hover:text-slate-900 transition-colors"
                  title="Copy SHA-256 checksum"
                >
                  {copiedHash ? (
                    <Check className="h-3 w-3 text-emerald-600" />
                  ) : (
                    <Copy className="h-3 w-3" />
                  )}
                  <span>{copiedHash ? "Copied" : "Copy"}</span>
                </button>
              </div>
              <div className="rounded-lg bg-slate-50 p-2 font-mono text-[10px] text-slate-600 truncate border border-slate-200">
                {shaHash}
              </div>
            </div>

            {/* CTA inside Jira Panel */}
            <div className="pt-1">
              <button
                onClick={onOpenAuditModal}
                className="w-full flex items-center justify-center gap-2 rounded-xl bg-emerald-600 py-2.5 px-3.5 text-xs font-bold text-white shadow-sm hover:bg-emerald-500 transition-all"
              >
                <FileText className="h-3.5 w-3.5" />
                <span>Inspect SOC 2 Audit Report</span>
              </button>
            </div>
          </div>

          <div className="rounded-xl bg-white p-3 border border-slate-200 text-xs text-slate-600 flex items-center justify-between shadow-xs">
            <span className="flex items-center gap-1.5 font-medium">
              <Lock className="h-3.5 w-3.5 text-emerald-600" />
              <span>Zero External Storage</span>
            </span>
            <span className="text-slate-400 font-normal">Runs in Forge Sandbox</span>
          </div>
        </div>
      </div>
    </div>
  );
}
