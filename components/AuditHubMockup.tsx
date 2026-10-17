"use client";

import { useState } from "react";
import {
  ShieldCheck,
  CheckCircle2,
  AlertTriangle,
  Layers,
  Download,
  Copy,
  Check,
  Zap,
} from "lucide-react";

interface AuditHubMockupProps {
  onOpenAuditModal?: () => void;
}

export default function AuditHubMockup({ onOpenAuditModal }: AuditHubMockupProps) {
  const [activeFilter, setActiveFilter] = useState<"ALL" | "READY" | "ACTION" | "HIGH_RISK">("ALL");
  const [batchCertified, setBatchCertified] = useState(false);
  const [copiedJql, setCopiedJql] = useState(false);

  const issues = [
    {
      key: "LANG-10",
      summary: "Migrate Auth Token Service to Ed25519 Keys",
      author: "alex.k",
      approver: "sarah.m",
      qa: "elena.r",
      risk: "NORMAL",
      status: "CERTIFIED",
      score: "5/5",
      hash: "9f83ac2b...44fbc81",
    },
    {
      key: "LANG-9",
      summary: "Payment Gateway Retry Backoff & Idempotency",
      author: "david.t",
      approver: "marcus.v",
      qa: "elena.r",
      risk: "NORMAL",
      status: "READY",
      score: "5/5",
      hash: "3a7b1c4e...88019ab",
    },
    {
      key: "LANG-8",
      summary: "Emergency DNS Failover Route Configuration",
      author: "alex.k",
      approver: "Self-Approved",
      qa: "Unverified",
      risk: "EMERGENCY",
      status: "CAB_PENDING",
      score: "3/5",
      hash: "Pending CAB",
    },
    {
      key: "LANG-7",
      summary: "Webhook Ingestion HMAC Verification Pipeline",
      author: "priya.n",
      approver: "sarah.m",
      qa: "elena.r",
      risk: "NORMAL",
      status: "CERTIFIED",
      score: "5/5",
      hash: "c41e8820...312ef90",
    },
  ];

  const filteredIssues = issues.filter((issue) => {
    if (activeFilter === "READY") return issue.status === "READY" || issue.status === "CERTIFIED";
    if (activeFilter === "ACTION") return issue.status === "CAB_PENDING";
    if (activeFilter === "HIGH_RISK") return issue.risk === "EMERGENCY";
    return true;
  });

  const handleCopyJql = () => {
    navigator.clipboard.writeText(
      'project = LANG AND status = Done AND issue.property[evidencelog_compliance].isAuditReady = "true"'
    );
    setCopiedJql(true);
    setTimeout(() => setCopiedJql(false), 2000);
  };

  return (
    <div className="relative rounded-2xl border border-slate-800 bg-[#090d16] shadow-2xl overflow-hidden text-left font-sans text-xs">
      {/* Top Browser & Project Navigation Bar */}
      <div className="flex flex-wrap items-center justify-between gap-3 border-b border-slate-800/80 bg-slate-900/90 px-4 py-3 sm:px-6">
        <div className="flex items-center gap-3">
          <div className="flex gap-1.5">
            <div className="h-2.5 w-2.5 rounded-full bg-rose-500/80" />
            <div className="h-2.5 w-2.5 rounded-full bg-amber-500/80" />
            <div className="h-2.5 w-2.5 rounded-full bg-emerald-500/80" />
          </div>
          <div className="hidden sm:flex items-center gap-1.5 font-mono text-[11px] text-slate-400">
            <span className="text-slate-500">langtago-demo.atlassian.net</span>
            <span className="text-slate-600">/jira/apps/</span>
            <span className="text-emerald-400 font-semibold">EvidenceLog Audit Hub</span>
          </div>
        </div>

        <div className="flex items-center gap-2">
          <button
            type="button"
            onClick={handleCopyJql}
            className="flex items-center gap-1 rounded-md border border-slate-700 bg-slate-800/80 px-2.5 py-1 text-[11px] font-mono text-slate-300 hover:bg-slate-700 hover:text-white transition-colors"
          >
            {copiedJql ? <Check className="h-3 w-3 text-emerald-400" /> : <Copy className="h-3 w-3" />}
            <span>{copiedJql ? "JQL Copied" : "Copy Auditor JQL"}</span>
          </button>

          <span className="inline-flex items-center gap-1 rounded-full bg-emerald-950/80 px-2.5 py-0.5 text-[10px] font-mono text-emerald-400 border border-emerald-800/60">
            <span className="h-1.5 w-1.5 rounded-full bg-emerald-400 animate-pulse" />
            Release 2026.4-LTS
          </span>
        </div>
      </div>

      <div className="p-5 sm:p-6 space-y-6">
        {/* Merkle Root Header Badge */}
        <div className="rounded-xl border border-emerald-500/30 bg-emerald-950/20 p-3 sm:p-4 flex flex-col sm:flex-row sm:items-center justify-between gap-3">
          <div className="flex items-start sm:items-center gap-3">
            <div className="rounded-lg bg-emerald-500/10 p-2 text-emerald-400 border border-emerald-500/20">
              <Layers className="h-5 w-5" />
            </div>
            <div>
              <div className="flex items-center gap-2">
                <span className="font-semibold text-white text-sm">Release Cryptographic Merkle Root</span>
                <span className="rounded bg-emerald-500/20 px-1.5 py-0.5 font-mono text-[10px] text-emerald-300">
                  MATHEMATICALLY PROVEN
                </span>
              </div>
              <p className="mt-0.5 font-mono text-[11px] text-emerald-400/90 truncate max-w-md sm:max-w-xl">
                sha256:7e49f2b189a03bc432d9101f78e4d2e9941a3bc68e0d84f229a1b80c33f98ea1
              </p>
            </div>
          </div>

          <button
            type="button"
            onClick={() => setBatchCertified(true)}
            className={`flex items-center justify-center gap-1.5 rounded-lg px-3.5 py-2 font-mono text-xs font-semibold transition-all ${
              batchCertified
                ? "bg-emerald-500/20 text-emerald-300 border border-emerald-500/40"
                : "bg-emerald-500 text-slate-950 hover:bg-emerald-400 shadow-lg shadow-emerald-500/20"
            }`}
          >
            <Zap className="h-3.5 w-3.5" />
            <span>{batchCertified ? "✓ All Certified" : "⚡ Batch Certify (1 Ready)"}</span>
          </button>
        </div>

        {/* 5 Executive KPI Cards */}
        <div className="grid grid-cols-2 lg:grid-cols-5 gap-3">
          <div className="rounded-xl border border-slate-800 bg-slate-900/60 p-3.5">
            <span className="text-[10px] font-mono uppercase tracking-wider text-slate-400">Audit Readiness</span>
            <div className="mt-1 flex items-baseline gap-1.5">
              <span className="text-xl font-bold text-emerald-400">96%</span>
              <span className="text-[10px] text-slate-500">23/24 pass</span>
            </div>
            <div className="mt-2 h-1 w-full rounded-full bg-slate-800 overflow-hidden">
              <div className="h-full bg-emerald-500 rounded-full" style={{ width: "96%" }} />
            </div>
          </div>

          <div className="rounded-xl border border-slate-800 bg-slate-900/60 p-3.5">
            <span className="text-[10px] font-mono uppercase tracking-wider text-slate-400">Permanently Certified</span>
            <div className="mt-1 flex items-baseline gap-1.5">
              <span className="text-xl font-bold text-white">{batchCertified ? "20" : "19"}</span>
              <span className="text-[10px] text-slate-500">Forge KVS</span>
            </div>
            <div className="mt-2 h-1 w-full rounded-full bg-slate-800 overflow-hidden">
              <div className="h-full bg-cyan-400 rounded-full" style={{ width: "85%" }} />
            </div>
          </div>

          <div className="rounded-xl border border-slate-800 bg-slate-900/60 p-3.5">
            <span className="text-[10px] font-mono uppercase tracking-wider text-slate-400">Pillar 1: Traceability</span>
            <div className="mt-1 flex items-baseline gap-1.5">
              <span className="text-xl font-bold text-emerald-400">100%</span>
              <span className="text-[10px] text-slate-500">AC & Git</span>
            </div>
            <div className="mt-2 h-1 w-full rounded-full bg-slate-800 overflow-hidden">
              <div className="h-full bg-emerald-500 rounded-full" style={{ width: "100%" }} />
            </div>
          </div>

          <div className="rounded-xl border border-slate-800 bg-slate-900/60 p-3.5">
            <span className="text-[10px] font-mono uppercase tracking-wider text-slate-400">Pillar 2: Peer Review</span>
            <div className="mt-1 flex items-baseline gap-1.5">
              <span className="text-xl font-bold text-emerald-400">92%</span>
              <span className="text-[10px] text-slate-500">SoD compliant</span>
            </div>
            <div className="mt-2 h-1 w-full rounded-full bg-slate-800 overflow-hidden">
              <div className="h-full bg-emerald-500 rounded-full" style={{ width: "92%" }} />
            </div>
          </div>

          <div className="col-span-2 lg:col-span-1 rounded-xl border border-slate-800 bg-slate-900/60 p-3.5">
            <span className="text-[10px] font-mono uppercase tracking-wider text-slate-400">Pillar 3: QA Sign-off</span>
            <div className="mt-1 flex items-baseline gap-1.5">
              <span className="text-xl font-bold text-emerald-400">96%</span>
              <span className="text-[10px] text-slate-500">verified</span>
            </div>
            <div className="mt-2 h-1 w-full rounded-full bg-slate-800 overflow-hidden">
              <div className="h-full bg-emerald-500 rounded-full" style={{ width: "96%" }} />
            </div>
          </div>
        </div>

        {/* Emergency Hotfix Alert Notice */}
        <div className="rounded-xl border border-amber-500/40 bg-amber-950/20 p-3.5 flex items-start gap-3">
          <AlertTriangle className="h-4 w-4 text-amber-400 shrink-0 mt-0.5" />
          <div className="space-y-1">
            <div className="flex items-center gap-2">
              <span className="font-semibold text-amber-300">1 Emergency Hotfix Pending Retroactive CAB Review</span>
              <span className="rounded bg-amber-500/20 px-1.5 py-0.5 font-mono text-[9px] text-amber-300">
                SOC 2 CC8.1 MANDATE
              </span>
            </div>
            <p className="text-[11px] text-slate-400">
              <strong className="text-white font-mono">LANG-8</strong> was bypassed as an Emergency Outage change. Policy requires formal CAB approval sign-off within 48 hours to prevent audit workpaper exceptions.
            </p>
          </div>
        </div>

        {/* Table Filter Bar */}
        <div className="flex flex-wrap items-center justify-between gap-3 pt-2">
          <div className="flex items-center gap-1.5 rounded-lg border border-slate-800 bg-slate-900/80 p-1 font-mono text-[11px]">
            <button
              type="button"
              onClick={() => setActiveFilter("ALL")}
              className={`rounded px-2.5 py-1 transition-colors ${
                activeFilter === "ALL" ? "bg-slate-800 text-white font-semibold" : "text-slate-400 hover:text-white"
              }`}
            >
              All Issues (4)
            </button>
            <button
              type="button"
              onClick={() => setActiveFilter("READY")}
              className={`rounded px-2.5 py-1 transition-colors ${
                activeFilter === "READY" ? "bg-slate-800 text-emerald-400 font-semibold" : "text-slate-400 hover:text-white"
              }`}
            >
              Audit Ready (3)
            </button>
            <button
              type="button"
              onClick={() => setActiveFilter("ACTION")}
              className={`rounded px-2.5 py-1 transition-colors ${
                activeFilter === "ACTION" ? "bg-slate-800 text-amber-400 font-semibold" : "text-slate-400 hover:text-white"
              }`}
            >
              Action Required (1)
            </button>
            <button
              type="button"
              onClick={() => setActiveFilter("HIGH_RISK")}
              className={`rounded px-2.5 py-1 transition-colors ${
                activeFilter === "HIGH_RISK" ? "bg-slate-800 text-rose-400 font-semibold" : "text-slate-400 hover:text-white"
              }`}
            >
              Emergency Risk (1)
            </button>
          </div>

          {onOpenAuditModal && (
            <button
              type="button"
              onClick={onOpenAuditModal}
              className="flex items-center gap-1.5 text-xs font-mono text-emerald-400 hover:text-emerald-300 transition-colors"
            >
              <Download className="h-3.5 w-3.5" />
              <span>Export Release Audit Dossier (PDF / CSV)</span>
            </button>
          )}
        </div>

        {/* Multi-Issue Compliance Registry Table */}
        <div className="overflow-x-auto rounded-xl border border-slate-800 bg-slate-950/70">
          <table className="w-full text-left font-mono text-[11px]">
            <thead className="border-b border-slate-800 bg-slate-900/60 text-slate-400">
              <tr>
                <th className="py-2.5 px-3">Issue Key</th>
                <th className="py-2.5 px-3">Summary</th>
                <th className="py-2.5 px-3">Reporter</th>
                <th className="py-2.5 px-3">Approver</th>
                <th className="py-2.5 px-3">Risk</th>
                <th className="py-2.5 px-3">Status</th>
                <th className="py-2.5 px-3 text-right">Cryptographic Seal</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-slate-800/60">
              {filteredIssues.map((issue) => (
                <tr key={issue.key} className="hover:bg-slate-900/40 transition-colors">
                  <td className="py-3 px-3 font-semibold text-emerald-400">{issue.key}</td>
                  <td className="py-3 px-3 font-sans text-xs text-slate-200 max-w-[220px] truncate">
                    {issue.summary}
                  </td>
                  <td className="py-3 px-3 text-slate-400">{issue.author}</td>
                  <td className="py-3 px-3">
                    <span
                      className={
                        issue.approver === "Self-Approved" ? "text-amber-400 font-semibold" : "text-slate-300"
                      }
                    >
                      {issue.approver}
                    </span>
                  </td>
                  <td className="py-3 px-3">
                    <span
                      className={`rounded px-1.5 py-0.5 text-[9px] font-semibold ${
                        issue.risk === "EMERGENCY"
                          ? "bg-rose-500/20 text-rose-300 border border-rose-500/30"
                          : "bg-slate-800 text-slate-300"
                      }`}
                    >
                      {issue.risk}
                    </span>
                  </td>
                  <td className="py-3 px-3">
                    {issue.status === "CERTIFIED" && (
                      <span className="inline-flex items-center gap-1 rounded bg-emerald-500/20 px-1.5 py-0.5 text-[9px] text-emerald-300">
                        <CheckCircle2 className="h-3 w-3" />
                        CERTIFIED
                      </span>
                    )}
                    {issue.status === "READY" && (
                      <span className="inline-flex items-center gap-1 rounded bg-cyan-500/20 px-1.5 py-0.5 text-[9px] text-cyan-300">
                        <ShieldCheck className="h-3 w-3" />
                        {batchCertified ? "CERTIFIED" : "AUDIT READY"}
                      </span>
                    )}
                    {issue.status === "CAB_PENDING" && (
                      <span className="inline-flex items-center gap-1 rounded bg-amber-500/20 px-1.5 py-0.5 text-[9px] text-amber-300">
                        <AlertTriangle className="h-3 w-3" />
                        CAB PENDING
                      </span>
                    )}
                  </td>
                  <td className="py-3 px-3 text-right text-slate-500 font-mono text-[10px]">
                    {batchCertified && issue.key === "LANG-9" ? "3a7b1c4e...88019ab" : issue.hash}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}
