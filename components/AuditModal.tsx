"use client";

import { useEffect, useState } from "react";
import {
  X,
  ShieldCheck,
  Copy,
  Check,
  Code2,
  FileSpreadsheet,
  CheckCircle2,
  ArrowRight,
  ExternalLink,
  AlertTriangle,
  Lock,
  Database,
  FileCheck2,
  ZoomIn,
} from "lucide-react";

interface AuditModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export default function AuditModal({ isOpen, onClose }: AuditModalProps) {
  const [currentView, setCurrentView] = useState<"checklist" | "remediation" | "blocker" | "exports">("checklist");
  const [exportSubTab, setExportSubTab] = useState<"json" | "vanta" | "drata" | "csv" | "merkle">("json");
  const [copied, setCopied] = useState(false);

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

  const handleCopy = () => {
    let text = "";
    if (exportSubTab === "vanta") text = JSON.stringify(vantaPayload, null, 2);
    else if (exportSubTab === "drata") text = JSON.stringify(drataPayload, null, 2);
    else if (exportSubTab === "csv") text = `IssueKey,Summary,Reporter,Approver,QASigner,Status,Score,Fingerprint,Timestamp\n${sampleCsvRow}`;
    else if (exportSubTab === "merkle") text = "sha256:7e49f2b189a03bc432d9101f78e4d2e9941a3bc68e0d84f229a1b80c33f98ea1";
    else text = JSON.stringify(sampleJson, null, 2);

    navigator.clipboard.writeText(text);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  const views = {
    checklist: {
      title: "5-Pillar Compliance Checklist (DEMO-9)",
      ticket: "DEMO-9 • Deploy Payment Microservice v2",
      badge: "5/5 Verified",
      badgeStyle: "bg-emerald-50 text-[#15803d] border-emerald-200",
      src: "/images/jira_compliance_checklist_tight.png",
      desc: "Native Atlassian Forge panel in Jira verifying 5 change-management controls in real-time.",
      framework: "AICPA SOC 2 Type II (CC8.1) • ISO 27001 (A.8.32)",
      statusText: "CRYPTOGRAPHICALLY SEALED",
      fingerprint: "9f83ac2b7c4d516e8812c32e5f56a3120199e8b7c62d08a0ef93d927a44fbc81",
      storage: "Atlassian Forge KVS (Zero External Data Egress)",
      controls: [
        { name: "Acceptance Criteria", detail: "Given/When/Then DoD verified", pass: true },
        { name: "Code Traceability", detail: "GitHub PR #42 linked with 3 commits", pass: true },
        { name: "Segregation of Duties", detail: "Author != Reviewer confirmed", pass: true },
        { name: "Independent QA", detail: "qa-verified label & sign-off logged", pass: true },
        { name: "Security Scanning", detail: "Snyk SAST scan 0 High/Critical", pass: true },
      ],
    },
    remediation: {
      title: "1-Click Interactive Remediation & SHA-256 Seal",
      ticket: "DEMO-9 • In-Situ Developer Remediation",
      badge: "Certified in KVS",
      badgeStyle: "bg-blue-50 text-blue-700 border-blue-200",
      src: "/images/jira_quick_remediation_tight.png",
      desc: "One-click '+ Apply security-approved Label' allows engineers to remediate missing evidence in-situ without leaving Jira.",
      framework: "Automated Continuous Compliance & Audit Trail",
      statusText: "IN-SITU REMEDIATION ENABLED",
      fingerprint: "c60415619210d9ce4589ab1034f71a0293ec51908234ab889012cdfe34211029",
      storage: "Certified Snapshot v1 in Forge Storage",
      controls: [
        { name: "Instant Remediation", detail: "1-Click label application without Jira context switch", pass: true },
        { name: "Audit Trail Logging", detail: "Remediation actor and timestamp sealed to storage", pass: true },
        { name: "Continuous Evaluation", detail: "Checklist updates score from 3/5 to 5/5 instantly", pass: true },
        { name: "Tamper Proofing", detail: "SHA-256 digest recalculates and seals into KVS", pass: true },
      ],
    },
    blocker: {
      title: "Preventive Gatekeeper Blocker (DEMO-10)",
      ticket: "DEMO-10 • Negative Compliance Test",
      badge: "Action Required (3/5)",
      badgeStyle: "bg-amber-50 text-amber-700 border-amber-200",
      src: "/images/jira_unverified_blocker_tight.png",
      desc: "Native Jira workflow validator blocks transitions to 'Done' until all compliance controls pass.",
      framework: "SOC 2 CC8.1 Preventive Release Gatekeeper",
      statusText: "WORKFLOW TRANSITION BLOCKED",
      fingerprint: "sha256:pending-evidence-resolution",
      storage: "Enforced via Jira Forge Workflow Validator",
      controls: [
        { name: "Acceptance Criteria", detail: "Documented in Jira description", pass: true },
        { name: "Code Traceability", detail: "GitHub Pull Request linked", pass: true },
        { name: "Segregation of Duties", detail: "Peer review requirement satisfied", pass: true },
        { name: "Independent QA", detail: "MISSING: QA verification trace required", pass: false },
        { name: "Security Scanning", detail: "MISSING: SAST/DAST scan evidence required", pass: false },
      ],
    },
  };

  return (
    <div
      role="dialog"
      aria-modal="true"
      aria-label="Sample SOC 2 Audit Report"
      className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-5 bg-slate-950/60 backdrop-blur-sm animate-in fade-in duration-150"
      onClick={onClose}
    >
      <div
        className="relative w-full max-w-5xl max-h-[88vh] flex flex-col rounded-2xl border border-slate-200 bg-white shadow-2xl overflow-hidden font-sans text-left"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Clean SaaS Header */}
        <div className="flex items-center justify-between border-b border-slate-100 bg-white px-5 sm:px-6 py-4">
          <div className="flex items-center gap-3">
            <div className="rounded-xl bg-[#dbf1c3]/70 p-2 text-[#15803d]">
              <ShieldCheck className="h-5 w-5" />
            </div>
            <div>
              <h3 className="font-bold text-[#111013] text-base sm:text-lg font-heading">
                Sample SOC 2 &amp; ISO 27001 Audit Report
              </h3>
              <p className="text-xs text-[#5c728e]">
                Live change-management verification directly inside Jira Cloud tickets
              </p>
            </div>
          </div>

          <button
            type="button"
            onClick={onClose}
            className="rounded-lg p-2 text-slate-400 hover:bg-slate-100 hover:text-slate-700 transition-colors cursor-pointer"
            aria-label="Close modal"
          >
            <X className="h-5 w-5" />
          </button>
        </div>

        {/* Streamlined View Navigation (Single Clean Row) */}
        <div className="flex items-center gap-1.5 border-b border-slate-100 bg-slate-50/70 px-5 sm:px-6 py-2.5 overflow-x-auto text-xs">
          <button
            type="button"
            onClick={() => setCurrentView("checklist")}
            className={`px-3 py-1.5 rounded-lg font-medium transition-all whitespace-nowrap cursor-pointer ${
              currentView === "checklist"
                ? "bg-white text-[#111013] font-bold shadow-xs border border-slate-200"
                : "text-[#5c728e] hover:text-[#111013]"
            }`}
          >
            1. Compliance Checklist (DEMO-9)
          </button>
          <button
            type="button"
            onClick={() => setCurrentView("remediation")}
            className={`px-3 py-1.5 rounded-lg font-medium transition-all whitespace-nowrap cursor-pointer ${
              currentView === "remediation"
                ? "bg-white text-[#111013] font-bold shadow-xs border border-slate-200"
                : "text-[#5c728e] hover:text-[#111013]"
            }`}
          >
            2. 1-Click Remediation &amp; SHA-256
          </button>
          <button
            type="button"
            onClick={() => setCurrentView("blocker")}
            className={`px-3 py-1.5 rounded-lg font-medium transition-all whitespace-nowrap cursor-pointer ${
              currentView === "blocker"
                ? "bg-white text-[#111013] font-bold shadow-xs border border-slate-200"
                : "text-[#5c728e] hover:text-[#111013]"
            }`}
          >
            3. Gatekeeper Blocker (DEMO-10)
          </button>
          <button
            type="button"
            onClick={() => setCurrentView("exports")}
            className={`px-3 py-1.5 rounded-lg font-medium transition-all whitespace-nowrap cursor-pointer ${
              currentView === "exports"
                ? "bg-white text-[#111013] font-bold shadow-xs border border-slate-200"
                : "text-[#5c728e] hover:text-[#111013]"
            }`}
          >
            4. Raw Auditor Exports (CSV / GRC)
          </button>
        </div>

        {/* Modal Body with Viewport-Constrained Scroll */}
        <div className="flex-1 overflow-y-auto p-5 sm:p-6 bg-slate-50/40">
          {/* Screenshot Views (1, 2, 3) - 2-Column Inspector Layout */}
          {currentView !== "exports" && (
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-5 items-start">
              {/* Left Column: Evidence Screenshot (7 cols) */}
              <div className="lg:col-span-7 flex flex-col space-y-2.5">
                <div className="flex items-center justify-between text-xs px-0.5">
                  <span className="font-bold text-[#111013] font-mono">
                    {views[currentView].ticket}
                  </span>
                  <span className={`px-2 py-0.5 rounded font-bold border text-[11px] font-mono ${views[currentView].badgeStyle}`}>
                    {views[currentView].badge}
                  </span>
                </div>

                {/* Clean Screenshot Container */}
                <div className="group relative rounded-xl border border-slate-200 bg-white p-2.5 shadow-xs flex flex-col items-center justify-center overflow-hidden">
                  <img
                    src={views[currentView].src}
                    alt={views[currentView].title}
                    className="w-full h-auto max-h-[380px] object-contain rounded border border-slate-100/80 shadow-2xs"
                  />
                  <a
                    href={views[currentView].src}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="absolute bottom-4 right-4 opacity-0 group-hover:opacity-100 transition-opacity inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-[#111013]/90 hover:bg-[#111013] text-white text-xs font-semibold backdrop-blur-xs shadow-md"
                  >
                    <ZoomIn className="h-3.5 w-3.5" />
                    <span>View Full Size</span>
                  </a>
                </div>

                <p className="text-xs text-[#5c728e] leading-relaxed px-0.5">
                  {views[currentView].desc}
                </p>
              </div>

              {/* Right Column: Live Auditor Inspection Sheet (5 cols) */}
              <div className="lg:col-span-5 flex flex-col rounded-xl border border-slate-200 bg-white p-4 shadow-xs space-y-3.5">
                {/* Inspector Header */}
                <div className="border-b border-slate-100 pb-2.5">
                  <div className="flex items-center justify-between">
                    <span className="text-[11px] font-mono uppercase tracking-wider text-[#5c728e] font-bold">
                      Auditor Ledger
                    </span>
                    <span className="inline-flex items-center gap-1 text-[10px] font-bold text-emerald-700 bg-emerald-50 px-2 py-0.5 rounded border border-emerald-200">
                      <FileCheck2 className="h-3 w-3" />
                      {views[currentView].statusText}
                    </span>
                  </div>
                  <div className="text-xs font-semibold text-[#111013] mt-1.5">
                    {views[currentView].framework}
                  </div>
                </div>

                {/* Verified Controls List */}
                <div className="space-y-1.5">
                  <div className="text-[10px] font-bold text-slate-400 uppercase tracking-wider">
                    Control Evidence Trace:
                  </div>
                  <div className="space-y-1.5">
                    {views[currentView].controls.map((ctrl, idx) => (
                      <div
                        key={idx}
                        className={`flex items-start gap-2 p-2 rounded-lg border text-xs transition-colors ${
                          ctrl.pass
                            ? "bg-slate-50/70 border-slate-200/70"
                            : "bg-amber-50/70 border-amber-200/90"
                        }`}
                      >
                        {ctrl.pass ? (
                          <CheckCircle2 className="h-3.5 w-3.5 text-emerald-600 mt-0.5 shrink-0" />
                        ) : (
                          <AlertTriangle className="h-3.5 w-3.5 text-amber-600 mt-0.5 shrink-0" />
                        )}
                        <div className="min-w-0 flex-1">
                          <div className="font-semibold text-[#111013] text-[11px] leading-tight">
                            {ctrl.name}
                          </div>
                          <div className="text-[11px] text-[#5c728e] truncate mt-0.5">
                            {ctrl.detail}
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Cryptographic SHA-256 Box */}
                <div className="rounded-lg bg-slate-900 p-2.5 text-white space-y-1.5">
                  <div className="flex items-center justify-between text-[10px] font-mono text-slate-400">
                    <span>SHA-256 Tamper-Proof Seal</span>
                    <button
                      type="button"
                      onClick={() => {
                        navigator.clipboard.writeText(views[currentView].fingerprint);
                        setCopied(true);
                        setTimeout(() => setCopied(false), 2000);
                      }}
                      className="text-[#dbf1c3] hover:underline cursor-pointer inline-flex items-center gap-1"
                    >
                      {copied ? <Check className="h-2.5 w-2.5" /> : <Copy className="h-2.5 w-2.5" />}
                      <span>{copied ? "Copied" : "Copy"}</span>
                    </button>
                  </div>
                  <code className="block text-[10px] font-mono text-[#dbf1c3] break-all leading-tight">
                    {views[currentView].fingerprint}
                  </code>
                  <div className="flex items-center gap-1.5 text-[10px] text-slate-400 pt-1 border-t border-slate-800">
                    <Database className="h-2.5 w-2.5 text-emerald-400 shrink-0" />
                    <span className="truncate">{views[currentView].storage}</span>
                  </div>
                </div>

                {/* Switch to Raw Exports CTA */}
                <button
                  type="button"
                  onClick={() => setCurrentView("exports")}
                  className="w-full inline-flex items-center justify-center gap-1.5 py-2 px-3 rounded-lg border border-slate-200 bg-slate-50 hover:bg-slate-100 text-xs font-semibold text-[#111013] transition-colors cursor-pointer"
                >
                  <Code2 className="h-3.5 w-3.5 text-slate-600" />
                  <span>View Raw Auditor Exports (CSV / GRC) &rarr;</span>
                </button>
              </div>
            </div>
          )}

          {/* Export Formats View (4) */}
          {currentView === "exports" && (
            <div className="space-y-4">
              <div className="flex flex-wrap items-center justify-between gap-2 border-b border-slate-200 pb-3">
                <div className="flex flex-wrap gap-1.5 text-xs">
                  <button
                    type="button"
                    onClick={() => setExportSubTab("json")}
                    className={`px-2.5 py-1 rounded-md font-mono transition-all cursor-pointer ${
                      exportSubTab === "json"
                        ? "bg-[#111013] text-[#dbf1c3] font-bold"
                        : "bg-white text-slate-600 border border-slate-200 hover:text-black"
                    }`}
                  >
                    SOC 2 JSON
                  </button>
                  <button
                    type="button"
                    onClick={() => setExportSubTab("csv")}
                    className={`px-2.5 py-1 rounded-md font-mono transition-all cursor-pointer ${
                      exportSubTab === "csv"
                        ? "bg-[#111013] text-[#dbf1c3] font-bold"
                        : "bg-white text-slate-600 border border-slate-200 hover:text-black"
                    }`}
                  >
                    Big 4 CSV
                  </button>
                  <button
                    type="button"
                    onClick={() => setExportSubTab("vanta")}
                    className={`px-2.5 py-1 rounded-md font-mono transition-all cursor-pointer ${
                      exportSubTab === "vanta"
                        ? "bg-[#111013] text-[#dbf1c3] font-bold"
                        : "bg-white text-slate-600 border border-slate-200 hover:text-black"
                    }`}
                  >
                    Vanta Format
                  </button>
                  <button
                    type="button"
                    onClick={() => setExportSubTab("drata")}
                    className={`px-2.5 py-1 rounded-md font-mono transition-all cursor-pointer ${
                      exportSubTab === "drata"
                        ? "bg-[#111013] text-[#dbf1c3] font-bold"
                        : "bg-white text-slate-600 border border-slate-200 hover:text-black"
                    }`}
                  >
                    Drata Format
                  </button>
                  <button
                    type="button"
                    onClick={() => setExportSubTab("merkle")}
                    className={`px-2.5 py-1 rounded-md font-mono transition-all cursor-pointer ${
                      exportSubTab === "merkle"
                        ? "bg-[#111013] text-[#dbf1c3] font-bold"
                        : "bg-white text-slate-600 border border-slate-200 hover:text-black"
                    }`}
                  >
                    Merkle Tree Root
                  </button>
                </div>

                <button
                  type="button"
                  onClick={handleCopy}
                  className="inline-flex items-center gap-1.5 px-3 py-1 rounded-lg border border-slate-200 bg-white text-xs font-semibold text-[#111013] hover:bg-slate-50 transition-colors shadow-2xs cursor-pointer"
                >
                  {copied ? (
                    <>
                      <Check className="h-3 w-3 text-[#15803d]" />
                      <span className="text-[#15803d]">Copied!</span>
                    </>
                  ) : (
                    <>
                      <Copy className="h-3 w-3 text-slate-400" />
                      <span>Copy Payload</span>
                    </>
                  )}
                </button>
              </div>

              {exportSubTab === "json" && (
                <div className="space-y-1.5">
                  <div className="text-[11px] font-mono text-slate-500">
                    AICPA SOC 2 Type II Canonical JSON (CC8.1 / CC6.8 / CC7.1)
                  </div>
                  <pre className="overflow-x-auto rounded-xl bg-[#111013] p-4 font-mono text-xs text-[#dbf1c3] leading-relaxed max-h-[340px]">
                    {JSON.stringify(sampleJson, null, 2)}
                  </pre>
                </div>
              )}

              {exportSubTab === "csv" && (
                <div className="space-y-1.5">
                  <div className="text-[11px] font-mono text-slate-500">
                    Big 4 Audit Workpaper CSV (Deloitte / EY / PwC / KPMG Standard Format)
                  </div>
                  <pre className="overflow-x-auto rounded-xl bg-[#111013] p-4 font-mono text-xs text-[#dbf1c3] leading-relaxed max-h-[340px]">
                    IssueKey,Summary,Reporter,Approver,QASigner,Status,Score,Fingerprint,Timestamp{"\n"}
                    {sampleCsvRow}
                  </pre>
                </div>
              )}

              {exportSubTab === "vanta" && (
                <div className="space-y-1.5">
                  <div className="text-[11px] font-mono text-slate-500">
                    Vanta Automated Ingestion Schema (ResourceType: ChangeManagementTicket)
                  </div>
                  <pre className="overflow-x-auto rounded-xl bg-[#111013] p-4 font-mono text-xs text-cyan-300 leading-relaxed max-h-[340px]">
                    {JSON.stringify(vantaPayload, null, 2)}
                  </pre>
                </div>
              )}

              {exportSubTab === "drata" && (
                <div className="space-y-1.5">
                  <div className="text-[11px] font-mono text-slate-500">
                    Drata Continuous Compliance Payload (Controls: DCF-67 to DCF-70)
                  </div>
                  <pre className="overflow-x-auto rounded-xl bg-[#111013] p-4 font-mono text-xs text-emerald-300 leading-relaxed max-h-[340px]">
                    {JSON.stringify(drataPayload, null, 2)}
                  </pre>
                </div>
              )}

              {exportSubTab === "merkle" && (
                <div className="space-y-3 font-mono text-xs">
                  <div className="rounded-xl border border-slate-200 bg-white p-4 space-y-3 shadow-xs">
                    <div className="flex items-center justify-between text-slate-700">
                      <span className="font-bold text-[#111013]">Release 2026.4-LTS Binary Merkle Root</span>
                      <span className="rounded bg-purple-50 px-2 py-0.5 text-purple-700 text-[10px] font-bold border border-purple-200">
                        VERIFIED HASH
                      </span>
                    </div>
                    <code className="block bg-[#111013] p-3 rounded-lg text-[#dbf1c3] break-all text-[11px]">
                      sha256:7e49f2b189a03bc432d9101f78e4d2e9941a3bc68e0d84f229a1b80c33f98ea1
                    </code>
                    <div className="pt-2 border-t border-slate-100 space-y-1 text-[11px] text-slate-500">
                      <div>Leaf 0 (LANG-10): <code className="text-slate-800">9f83ac2b7c4d516e8812c32e...</code></div>
                      <div>Leaf 1 (LANG-9):  <code className="text-slate-800">3a7b1c4e88019ab921de22a1...</code></div>
                      <div>Leaf 2 (LANG-8):  <code className="text-slate-800">5f12e88a0b9432ce912389ab...</code></div>
                      <div>Leaf 3 (LANG-7):  <code className="text-slate-800">c41e8820312ef90ab77810aa...</code></div>
                    </div>
                  </div>
                </div>
              )}
            </div>
          )}
        </div>

        {/* Clean Minimal Footer */}
        <div className="flex items-center justify-between border-t border-slate-100 bg-white px-5 sm:px-6 py-3.5 text-xs">
          <span className="text-[#5c728e] font-medium hidden sm:inline">
            100% In-Tenant Forge Architecture &bull; Zero External Data Egress
          </span>
          <div className="flex items-center gap-2.5 ml-auto">
            <button
              type="button"
              onClick={onClose}
              className="px-4 py-2 rounded-lg border border-slate-200 text-[#111013] hover:bg-slate-50 font-semibold transition-colors cursor-pointer"
            >
              Close
            </button>
            <a
              href="https://marketplace.atlassian.com"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 px-4 py-2 rounded-lg bg-[#111013] text-white hover:bg-[#15803d] font-semibold transition-colors shadow-xs cursor-pointer"
            >
              <span>Install Free on Marketplace</span>
              <ArrowRight className="h-3.5 w-3.5" />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
