"use client";

import { useEffect, useState } from "react";
import {
  X,
  ShieldCheck,
  Copy,
  Lock,
  GitPullRequest,
  CheckCircle2,
  FileText,
  Clock,
  Check,
  Code2,
} from "lucide-react";

interface AuditModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export default function AuditModal({ isOpen, onClose }: AuditModalProps) {
  const [activeTab, setActiveTab] = useState<"summary" | "timeline" | "exports">("summary");
  const [exportSubTab, setExportSubTab] = useState<"json" | "vanta" | "drata" | "csv" | "merkle">("json");
  const [copied, setCopied] = useState(false);
  const [verifiedState, setVerifiedState] = useState<"idle" | "verifying" | "verified">("idle");

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
    };
    if (isOpen) {
      document.body.style.overflow = "hidden";
      window.addEventListener("keydown", handleKeyDown);
    } else {
      document.body.style.overflow = "unset";
    }
    return () => {
      document.body.style.overflow = "unset";
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  const sampleJson = {
    schemaVersion: "2.0.0",
    report_id: "EV-SOC2-2026-LANG-10",
    standard: "AICPA SOC 2 Type II - CC8.1 / CC6.8 / CC7.1 & ISO 27001 (A.8.28, A.8.29, A.8.32)",
    jira_issue_key: "LANG-10",
    summary: "Migrate Auth Token Service to Ed25519 Keys",
    repository: "github.com/org/auth-gateway-service",
    pull_request_id: "#384",
    merge_commit: "4f738a192d04a6e355c78912e8417c8003f56da2",
    tamper_proof_checksum: "9f83ac2b7c4d516e8812c32e5f56a3120199e8b7c62d08a0ef93d927a44fbc81",
    verification_status: "CRYPTOGRAPHICALLY_SEALED",
    immutable_timestamp: "2026-10-14T16:42:08.192Z",
    tenant: "langtago-demo.atlassian.net",
    controls_verified: [
      {
        control_id: "CC8.1.1",
        name: "Explicit Acceptance Criteria",
        status: "PASS",
        evidence: "Given/When/Then DoD criteria documented in issue description.",
      },
      {
        control_id: "CC8.1.2",
        name: "Traceable Code Linkage",
        status: "PASS",
        evidence: "GitHub PR #384 referenced in Jira Remote Links with 3 commits.",
      },
      {
        control_id: "CC6.8.1",
        name: "Segregation of Duties (Author != Approver)",
        status: "PASS",
        evidence: "Author: alex.k. Approver: sarah.m (Staff Security Engineer).",
      },
      {
        control_id: "CC8.1.3",
        name: "Independent QA Testing Sign-off",
        status: "PASS",
        evidence: "QA sign-off comment logged by elena.r (Senior QA Lead).",
      },
      {
        control_id: "CC7.1.1",
        name: "Automated Security & Vulnerability Scanning",
        status: "PASS",
        evidence: "Snyk SAST scan passed. 0 High/Critical CVEs detected.",
      },
    ],
  };

  const vantaPayload = {
    schemaVersion: "1.0",
    source: "EvidenceLog for Jira (Atlassian Forge)",
    vantaResourceType: "ChangeManagementTicket",
    resourceId: "LANG-10",
    metadata: {
      ticketKey: "LANG-10",
      summary: "Migrate Auth Token Service to Ed25519 Keys",
      project: "LANG",
      status: "Done",
      createdAt: "2026-10-14T14:15:00Z",
      closedAt: "2026-10-14T16:42:08Z",
      riskLevel: "NORMAL",
    },
    controlEvaluations: [
      {
        controlId: "CHANGE_MANAGEMENT_AUTHORIZATION",
        standard: "SOC2_CC8.1",
        passed: true,
        evidence: {
          acceptanceCriteriaPresent: true,
          linkedPullRequests: ["https://github.com/org/auth-gateway-service/pull/384"],
        },
      },
      {
        controlId: "SEGREGATION_OF_DUTIES",
        standard: "SOC2_CC6.8",
        passed: true,
        evidence: {
          creator: "alex.k",
          approver: "sarah.m",
        },
      },
      {
        controlId: "PRE_RELEASE_TESTING",
        standard: "SOC2_CC8.1",
        passed: true,
        evidence: {
          qaSigner: "elena.r",
          securityScan: "snyk-passed",
        },
      },
    ],
    cryptographicIntegrity: {
      hashAlgorithm: "SHA-256",
      fingerprint: "9f83ac2b7c4d516e8812c32e5f56a3120199e8b7c62d08a0ef93d927a44fbc81",
    },
    isCompliant: true,
  };

  const drataPayload = {
    provider: "EVIDENCELOG_JIRA_FORGE",
    version: "2.0",
    auditStandard: "SOC2_TYPE_II",
    ticketId: "LANG-10",
    compliancePass: true,
    evidenceItems: [
      { control: "DCF-67", type: "PULL_REQUEST", url: "https://github.com/org/auth-gateway-service/pull/384", verified: true },
      { control: "DCF-68", type: "CODE_REVIEW", reviewer: "sarah.m", author: "alex.k", verified: true },
      { control: "DCF-69", type: "QA_APPROVAL", qaEngineer: "elena.r", verified: true },
      { control: "DCF-70", type: "SAST_SCAN", scanner: "Snyk", zeroVulnerabilities: true, verified: true },
    ],
    immutableHash: "sha256:9f83ac2b7c4d516e8812c32e5f56a3120199e8b7c62d08a0ef93d927a44fbc81",
  };

  const sampleCsvRow = `LANG-10,"Migrate Auth Token Service to Ed25519 Keys",alex.k,sarah.m,elena.r,AUDIT_READY,5/5,9f83ac2b7c4d516e8812c32e5f56a3120199e8b7c62d08a0ef93d927a44fbc81,2026-10-14T16:42:08.192Z`;

  const handleCopy = (contentToCopy?: string) => {
    let text = "";
    if (contentToCopy) {
      text = contentToCopy;
    } else if (activeTab === "exports") {
      if (exportSubTab === "vanta") text = JSON.stringify(vantaPayload, null, 2);
      else if (exportSubTab === "drata") text = JSON.stringify(drataPayload, null, 2);
      else if (exportSubTab === "csv") text = sampleCsvRow;
      else if (exportSubTab === "merkle") text = "sha256:7e49f2b189a03bc432d9101f78e4d2e9941a3bc68e0d84f229a1b80c33f98ea1";
      else text = JSON.stringify(sampleJson, null, 2);
    } else {
      text = JSON.stringify(sampleJson, null, 2);
    }

    navigator.clipboard.writeText(text);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  const handleReverify = () => {
    setVerifiedState("verifying");
    setTimeout(() => {
      setVerifiedState("verified");
      setTimeout(() => setVerifiedState("idle"), 2500);
    }, 450);
  };

  return (
    <div
      role="dialog"
      aria-modal="true"
      aria-label="Sample SOC 2 Audit Report Modal"
      className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-4 md:p-6 bg-slate-950/80 backdrop-blur-md animate-in fade-in duration-200"
    >
      <div
        className="relative w-full max-w-4xl max-h-[94vh] md:max-h-[850px] flex flex-col rounded-2xl border border-white/[0.12] bg-[#090d16] shadow-2xl overflow-hidden font-sans text-left"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Unified Top Header */}
        <div className="flex items-center justify-between border-b border-white/[0.08] bg-[#0b1019] px-5 sm:px-6 py-3.5">
          <div className="flex items-center gap-3">
            <div className="rounded-xl bg-emerald-500/10 p-2 text-emerald-400 border border-emerald-500/20 shadow-inner">
              <ShieldCheck className="h-5 w-5" />
            </div>
            <div>
              <div className="flex items-center gap-2">
                <span className="font-semibold text-white text-sm sm:text-base">
                  SOC 2 Change Evidence Package
                </span>
                <span className="rounded bg-emerald-500/20 px-2 py-0.5 text-[10px] font-mono text-emerald-300 font-semibold border border-emerald-500/30">
                  AUDIT READY (5/5)
                </span>
              </div>
              <p className="text-xs text-zinc-400 mt-0.5">
                Issue <strong className="text-emerald-400 font-mono">LANG-10</strong> &bull; Tenant: <span className="font-mono text-zinc-300">langtago-demo.atlassian.net</span>
              </p>
            </div>
          </div>

          <button
            type="button"
            onClick={onClose}
            className="rounded-lg p-2 text-zinc-400 hover:bg-zinc-800 hover:text-white transition-colors"
            aria-label="Close modal"
          >
            <X className="h-5 w-5" />
          </button>
        </div>

        {/* Cryptographic Seal & Verification Ribbon */}
        <div className="flex flex-wrap items-center justify-between gap-3 bg-emerald-950/20 border-b border-emerald-900/30 px-5 sm:px-6 py-2 text-xs text-emerald-300">
          <div className="flex items-center gap-2">
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500"></span>
            </span>
            <span className="font-medium text-zinc-300">Sealed Hash:</span>
            <code className="rounded bg-black/60 px-2 py-0.5 text-[11px] font-mono text-emerald-400 border border-emerald-500/20">
              sha256:9f83ac2b...44fbc81
            </code>
          </div>

          <div className="flex items-center gap-2 font-mono text-[11px]">
            <button
              type="button"
              onClick={handleReverify}
              className={`flex items-center gap-1.5 px-2.5 py-0.5 rounded transition-all ${
                verifiedState === "verified"
                  ? "bg-emerald-500/20 text-emerald-300 border border-emerald-500/40"
                  : "text-emerald-400 hover:text-emerald-300 underline underline-offset-2"
              }`}
            >
              <Lock className="h-3 w-3" />
              <span>
                {verifiedState === "verifying"
                  ? "Recalculating..."
                  : verifiedState === "verified"
                  ? "✔ Verified in Forge KVS"
                  : "Verify Hash Integrity"}
              </span>
            </button>
            <span className="text-zinc-600">|</span>
            <span className="text-zinc-400">Atlassian Forge Storage</span>
          </div>
        </div>

        {/* Streamlined 3-Tab Segmented Switcher (Zero Overflow / Zero Scrollbar) */}
        <div className="border-b border-white/[0.08] bg-[#090d15] px-5 sm:px-6 py-2 flex items-center justify-between">
          <div className="inline-flex rounded-xl bg-black/40 border border-white/[0.08] p-1 font-mono text-xs">
            <button
              type="button"
              onClick={() => setActiveTab("summary")}
              className={`flex items-center gap-1.5 rounded-lg px-3 py-1.5 font-medium transition-all ${
                activeTab === "summary"
                  ? "bg-emerald-500 text-zinc-950 font-semibold shadow-sm"
                  : "text-zinc-400 hover:text-white"
              }`}
            >
              <FileText className="h-3.5 w-3.5" />
              <span>Control Proofs</span>
            </button>
            <button
              type="button"
              onClick={() => setActiveTab("timeline")}
              className={`flex items-center gap-1.5 rounded-lg px-3 py-1.5 font-medium transition-all ${
                activeTab === "timeline"
                  ? "bg-emerald-500 text-zinc-950 font-semibold shadow-sm"
                  : "text-zinc-400 hover:text-white"
              }`}
            >
              <Clock className="h-3.5 w-3.5" />
              <span>Audit Timeline</span>
            </button>
            <button
              type="button"
              onClick={() => setActiveTab("exports")}
              className={`flex items-center gap-1.5 rounded-lg px-3 py-1.5 font-medium transition-all ${
                activeTab === "exports"
                  ? "bg-emerald-500 text-zinc-950 font-semibold shadow-sm"
                  : "text-zinc-400 hover:text-white"
              }`}
            >
              <Code2 className="h-3.5 w-3.5" />
              <span>Export Formats</span>
            </button>
          </div>

          <span className="hidden sm:inline font-mono text-[11px] text-zinc-500">
            AICPA SOC 2 Type II Certified
          </span>
        </div>

        {/* Modal Body with Custom Dark Scrollbar */}
        <div className="flex-1 overflow-y-auto p-4 sm:p-5 space-y-4">
          {/* =========================================================================
              VIEW 1: CONTROL PROOFS (Summary)
              ========================================================================= */}
          {activeTab === "summary" && (
            <div className="space-y-4">
              {/* Ticket Metadata Cards */}
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-2.5">
                <div className="rounded-xl border border-white/[0.08] bg-[#0c1017] p-3">
                  <span className="text-[11px] font-medium text-zinc-400">Jira Ticket Reference</span>
                  <div className="mt-1 flex items-center gap-2">
                    <span className="font-mono text-sm font-semibold text-emerald-400">LANG-10</span>
                    <span className="rounded bg-emerald-500/20 px-1.5 py-0.5 text-[10px] font-medium text-emerald-300">
                      RESOLVED
                    </span>
                  </div>
                  <p className="mt-1 text-xs text-zinc-300 truncate">Migrate Auth Token Service to Ed25519 Keys</p>
                </div>

                <div className="rounded-xl border border-white/[0.08] bg-[#0c1017] p-3">
                  <span className="text-[11px] font-medium text-zinc-400">Git Pull Request</span>
                  <div className="mt-1 flex items-center gap-2 font-mono text-xs">
                    <GitPullRequest className="h-3.5 w-3.5 text-emerald-400" />
                    <span className="text-white font-semibold">PR #384</span>
                    <span className="text-zinc-500">(Merged)</span>
                  </div>
                  <p className="mt-1 font-mono text-[11px] text-zinc-400 truncate">commit: 4f738a192d04a6e...</p>
                </div>

                <div className="rounded-xl border border-white/[0.08] bg-[#0c1017] p-3">
                  <span className="text-[11px] font-medium text-zinc-400">Segregation of Duties Check</span>
                  <div className="mt-1 flex items-center gap-2">
                    <span className="rounded-full bg-emerald-500/20 px-2 py-0.5 text-[11px] font-medium text-emerald-300">
                      PASS (Independent)
                    </span>
                  </div>
                  <p className="mt-1 text-xs text-zinc-300">Author: alex.k | Approver: sarah.m</p>
                </div>
              </div>

              {/* Evaluated Controls List */}
              <div className="space-y-2">
                <h4 className="text-[11px] font-semibold uppercase tracking-wider text-zinc-400">
                  Evaluated Trust Services Criteria &amp; Evidence Proofs
                </h4>

                <div className="space-y-2">
                  {sampleJson.controls_verified.map((ctrl) => (
                    <div
                      key={ctrl.control_id}
                      className="rounded-xl border border-white/[0.06] bg-[#0b0f16] px-3.5 py-2.5 space-y-1 hover:border-white/[0.12] transition-colors"
                    >
                      <div className="flex flex-wrap items-center justify-between gap-2">
                        <div className="flex items-center gap-2">
                          <CheckCircle2 className="h-4 w-4 text-emerald-400 shrink-0" />
                          <span className="font-semibold text-white text-xs">{ctrl.name}</span>
                        </div>
                        <div className="flex items-center gap-2">
                          <span className="font-mono text-[11px] text-zinc-400">{ctrl.control_id}</span>
                          <span className="rounded bg-emerald-500/20 px-2 py-0.5 text-[10px] font-semibold text-emerald-300 border border-emerald-500/30">
                            {ctrl.status}
                          </span>
                        </div>
                      </div>
                      <p className="text-xs text-zinc-400 pl-6 leading-relaxed">{ctrl.evidence}</p>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          )}

          {/* =========================================================================
              VIEW 2: AUDIT TIMELINE
              ========================================================================= */}
          {activeTab === "timeline" && (
            <div className="space-y-6 pt-2">
              <div className="relative pl-6 border-l-2 border-zinc-800 space-y-6 text-left ml-2">
                <div className="relative">
                  <div className="absolute -left-[31px] top-1.5 h-3 w-3 rounded-full bg-emerald-500 ring-4 ring-[#090d16]" />
                  <span className="text-[11px] font-mono text-zinc-400">2026-10-14 14:15:00 UTC</span>
                  <p className="text-xs font-semibold text-white mt-0.5">Jira Issue LANG-10 Created &amp; Scoped</p>
                  <p className="text-xs text-zinc-400">Created by alex.k. Target release: Release 2026.4-LTS.</p>
                </div>

                <div className="relative">
                  <div className="absolute -left-[31px] top-1.5 h-3 w-3 rounded-full bg-emerald-500 ring-4 ring-[#090d16]" />
                  <span className="text-[11px] font-mono text-zinc-400">2026-10-14 15:02:18 UTC</span>
                  <p className="text-xs font-semibold text-white mt-0.5">GitHub Pull Request #384 Opened</p>
                  <p className="text-xs text-zinc-400">Linked to LANG-10 via Atlassian Jira Remote Links API.</p>
                </div>

                <div className="relative">
                  <div className="absolute -left-[31px] top-1.5 h-3 w-3 rounded-full bg-emerald-500 ring-4 ring-[#090d16]" />
                  <span className="text-[11px] font-mono text-zinc-400">2026-10-14 15:45:22 UTC</span>
                  <p className="text-xs font-semibold text-white mt-0.5">Peer Review Approved by sarah.m</p>
                  <p className="text-xs text-zinc-400">Segregation of duties verified: Approver is independent from author.</p>
                </div>

                <div className="relative">
                  <div className="absolute -left-[31px] top-1.5 h-3 w-3 rounded-full bg-emerald-500 ring-4 ring-[#090d16]" />
                  <span className="text-[11px] font-mono text-zinc-400">2026-10-14 16:10:44 UTC</span>
                  <p className="text-xs font-semibold text-white mt-0.5">CI/CD Pipeline Succeeded &amp; Snyk Scan Clean</p>
                  <p className="text-xs text-zinc-400">1,482 unit &amp; integration tests passed. 0 CVEs detected.</p>
                </div>

                <div className="relative">
                  <div className="absolute -left-[31px] top-1.5 h-3 w-3 rounded-full bg-emerald-400 ring-4 ring-[#090d16]" />
                  <span className="text-[11px] font-mono text-emerald-400 font-semibold">2026-10-14 16:42:08 UTC</span>
                  <p className="text-xs font-semibold text-emerald-300 mt-0.5">Cryptographic SHA-256 Seal Applied</p>
                  <p className="text-xs text-zinc-400">Sealed inside customer Atlassian tenant Forge KVS. Immutable.</p>
                </div>
              </div>
            </div>
          )}

          {/* =========================================================================
              VIEW 3: EXPORT FORMATS (GRC & RAW EVIDENCE)
              ========================================================================= */}
          {activeTab === "exports" && (
            <div className="space-y-4">
              {/* Format Sub-Pill Selector */}
              <div className="flex flex-wrap items-center justify-between gap-3 border-b border-white/[0.08] pb-3">
                <div className="inline-flex flex-wrap gap-1.5 font-mono text-[11px]">
                  <button
                    type="button"
                    onClick={() => setExportSubTab("json")}
                    className={`rounded-lg px-2.5 py-1 transition-all ${
                      exportSubTab === "json"
                        ? "bg-emerald-500/20 text-emerald-300 border border-emerald-500/40 font-semibold"
                        : "text-zinc-400 hover:text-white bg-zinc-900 border border-white/[0.06]"
                    }`}
                  >
                    Canonical JSON
                  </button>
                  <button
                    type="button"
                    onClick={() => setExportSubTab("vanta")}
                    className={`rounded-lg px-2.5 py-1 transition-all ${
                      exportSubTab === "vanta"
                        ? "bg-cyan-500/20 text-cyan-300 border border-cyan-500/40 font-semibold"
                        : "text-zinc-400 hover:text-white bg-zinc-900 border border-white/[0.06]"
                    }`}
                  >
                    Vanta Format
                  </button>
                  <button
                    type="button"
                    onClick={() => setExportSubTab("drata")}
                    className={`rounded-lg px-2.5 py-1 transition-all ${
                      exportSubTab === "drata"
                        ? "bg-emerald-500/20 text-emerald-300 border border-emerald-500/40 font-semibold"
                        : "text-zinc-400 hover:text-white bg-zinc-900 border border-white/[0.06]"
                    }`}
                  >
                    Drata Format
                  </button>
                  <button
                    type="button"
                    onClick={() => setExportSubTab("csv")}
                    className={`rounded-lg px-2.5 py-1 transition-all ${
                      exportSubTab === "csv"
                        ? "bg-amber-500/20 text-amber-300 border border-amber-500/40 font-semibold"
                        : "text-zinc-400 hover:text-white bg-zinc-900 border border-white/[0.06]"
                    }`}
                  >
                    Auditor CSV
                  </button>
                  <button
                    type="button"
                    onClick={() => setExportSubTab("merkle")}
                    className={`rounded-lg px-2.5 py-1 transition-all ${
                      exportSubTab === "merkle"
                        ? "bg-purple-500/20 text-purple-300 border border-purple-500/40 font-semibold"
                        : "text-zinc-400 hover:text-white bg-zinc-900 border border-white/[0.06]"
                    }`}
                  >
                    Merkle Root
                  </button>
                </div>

                <button
                  type="button"
                  onClick={() => handleCopy()}
                  className="flex items-center gap-1.5 rounded-lg border border-white/[0.1] bg-zinc-900 px-3 py-1 font-mono text-[11px] text-zinc-200 hover:bg-zinc-800 transition-colors"
                >
                  {copied ? (
                    <>
                      <Check className="h-3 w-3 text-emerald-400" />
                      <span className="text-emerald-400 font-semibold">Copied!</span>
                    </>
                  ) : (
                    <>
                      <Copy className="h-3 w-3 text-zinc-400" />
                      <span>Copy Payload</span>
                    </>
                  )}
                </button>
              </div>

              {/* Sub-view code content */}
              {exportSubTab === "json" && (
                <div className="space-y-2">
                  <div className="text-[11px] font-mono text-zinc-400">
                    Schema: AICPA SOC 2 Type II Canonical JSON (v2.0.0)
                  </div>
                  <pre className="overflow-x-auto rounded-xl border border-white/[0.08] bg-black/60 p-4 font-mono text-xs text-emerald-300 leading-relaxed max-h-[360px]">
                    {JSON.stringify(sampleJson, null, 2)}
                  </pre>
                </div>
              )}

              {exportSubTab === "vanta" && (
                <div className="space-y-2">
                  <div className="text-[11px] font-mono text-cyan-400">
                    Format: Vanta Change Management Ingestion Schema
                  </div>
                  <pre className="overflow-x-auto rounded-xl border border-white/[0.08] bg-black/60 p-4 font-mono text-xs text-cyan-300 leading-relaxed max-h-[360px]">
                    {JSON.stringify(vantaPayload, null, 2)}
                  </pre>
                </div>
              )}

              {exportSubTab === "drata" && (
                <div className="space-y-2">
                  <div className="text-[11px] font-mono text-emerald-400">
                    Format: Drata Continuous Compliance Payload (DCF-67 to DCF-70)
                  </div>
                  <pre className="overflow-x-auto rounded-xl border border-white/[0.08] bg-black/60 p-4 font-mono text-xs text-emerald-300 leading-relaxed max-h-[360px]">
                    {JSON.stringify(drataPayload, null, 2)}
                  </pre>
                </div>
              )}

              {exportSubTab === "csv" && (
                <div className="space-y-2">
                  <div className="text-[11px] font-mono text-amber-400">
                    Format: Big 4 Audit Workpaper CSV (Comma-Delimited)
                  </div>
                  <pre className="overflow-x-auto rounded-xl border border-white/[0.08] bg-black/60 p-4 font-mono text-xs text-amber-300 leading-relaxed">
                    IssueKey,Summary,Reporter,Approver,QASigner,Status,Score,Fingerprint,Timestamp{'\n'}
                    {sampleCsvRow}
                  </pre>
                </div>
              )}

              {exportSubTab === "merkle" && (
                <div className="space-y-3 font-mono text-xs">
                  <div className="rounded-xl border border-white/[0.08] bg-black/60 p-4 space-y-3">
                    <div className="flex items-center justify-between text-zinc-300">
                      <span className="font-semibold text-white">Release 2026.4-LTS Merkle Root Hash</span>
                      <span className="rounded bg-purple-500/20 px-2 py-0.5 text-purple-300 text-[10px] font-semibold border border-purple-500/30">
                        VERIFIED ROOT
                      </span>
                    </div>
                    <code className="block bg-black/80 p-3 rounded-lg border border-white/[0.06] text-purple-300 break-all text-[11px]">
                      sha256:7e49f2b189a03bc432d9101f78e4d2e9941a3bc68e0d84f229a1b80c33f98ea1
                    </code>
                    <div className="pt-2 border-t border-white/[0.06] space-y-1.5 text-[11px] text-zinc-400">
                      <div>Leaf 0 (LANG-10): <code className="text-zinc-300">9f83ac2b7c4d516e8812c32e...</code></div>
                      <div>Leaf 1 (LANG-9):  <code className="text-zinc-300">3a7b1c4e88019ab921de22a1...</code></div>
                      <div>Leaf 2 (LANG-8):  <code className="text-zinc-300">5f12e88a0b9432ce912389ab...</code></div>
                      <div>Leaf 3 (LANG-7):  <code className="text-zinc-300">c41e8820312ef90ab77810aa...</code></div>
                    </div>
                  </div>
                </div>
              )}
            </div>
          )}
        </div>

        {/* Streamlined Modal Footer */}
        <div className="flex flex-wrap items-center justify-between gap-3 border-t border-white/[0.08] bg-[#0b1019] px-5 sm:px-6 py-3.5">
          <div className="flex items-center gap-2 text-xs text-zinc-400 font-mono">
            <Lock className="h-3.5 w-3.5 text-emerald-400" />
            <span>AICPA SOC 2 Type II &bull; CC8.1 Change Controls</span>
          </div>
          <div className="flex items-center gap-2">
            <button
              type="button"
              onClick={() => handleCopy()}
              className="flex items-center gap-1.5 rounded-lg border border-white/[0.1] bg-zinc-900 px-3.5 py-1.5 text-xs font-semibold text-zinc-200 hover:bg-zinc-800 transition-colors"
            >
              {copied ? (
                <>
                  <Check className="h-3.5 w-3.5 text-emerald-400" />
                  <span className="text-emerald-400">Copied!</span>
                </>
              ) : (
                <>
                  <Copy className="h-3.5 w-3.5" />
                  <span>Copy Current View</span>
                </>
              )}
            </button>
            <button
              type="button"
              onClick={onClose}
              className="rounded-lg bg-emerald-500 px-4 py-1.5 text-xs font-semibold text-zinc-950 hover:bg-emerald-400 transition-colors"
            >
              Close
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

