"use client";

import { useEffect, useState } from "react";
import {
  X,
  ShieldCheck,
  CheckCircle2,
  Copy,
  Check,
  FileText,
  Code2,
  Lock,
  ArrowRight,
  Database,
  ExternalLink,
} from "lucide-react";

interface AuditModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export default function AuditModal({ isOpen, onClose }: AuditModalProps) {
  const [activeTab, setActiveTab] = useState<"certificate" | "json">("certificate");
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
    standard: "AICPA SOC 2 Type II - CC8.1 / CC6.8 / CC7.1 & ISO 27001 (A.8.28, A.8.32)",
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
      { control_id: "CC8.1.1", name: "Acceptance Criteria", status: "PASS", evidence: "Given/When/Then DoD documented in issue." },
      { control_id: "CC8.1.2", name: "Code Traceability", status: "PASS", evidence: "GitHub PR #384 referenced in Jira Remote Links." },
      { control_id: "CC6.8.1", name: "Segregation of Duties", status: "PASS", evidence: "Author: alex.k != Approver: sarah.m." },
      { control_id: "CC8.1.3", name: "Independent QA Testing", status: "PASS", evidence: "qa-verified label applied by elena.r." },
      { control_id: "CC7.1.1", name: "Security SAST Scanning", status: "PASS", evidence: "Snyk SAST scan passed: 0 High/Critical CVEs." },
    ],
  };

  const handleCopy = () => {
    navigator.clipboard.writeText(JSON.stringify(sampleJson, null, 2));
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <div
      role="dialog"
      aria-modal="true"
      aria-label="Sample SOC 2 Audit Report"
      className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-950/60 backdrop-blur-xs animate-in fade-in duration-150"
      onClick={onClose}
    >
      <div
        className="relative w-full max-w-2xl max-h-[90vh] flex flex-col rounded-2xl border border-slate-200 bg-white shadow-2xl overflow-hidden font-sans text-left"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Minimal Clean Top Bar */}
        <div className="flex items-center justify-between border-b border-slate-100 px-6 py-4 bg-white">
          <div className="flex items-center gap-2">
            <button
              type="button"
              onClick={() => setActiveTab("certificate")}
              className={`inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs font-semibold transition-all cursor-pointer ${
                activeTab === "certificate"
                  ? "bg-[#111013] text-white shadow-xs"
                  : "text-[#5c728e] hover:text-[#111013] bg-slate-100"
              }`}
            >
              <FileText className="h-3.5 w-3.5" />
              <span>Audit Certificate</span>
            </button>
            <button
              type="button"
              onClick={() => setActiveTab("json")}
              className={`inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs font-semibold transition-all cursor-pointer ${
                activeTab === "json"
                  ? "bg-[#111013] text-white shadow-xs"
                  : "text-[#5c728e] hover:text-[#111013] bg-slate-100"
              }`}
            >
              <Code2 className="h-3.5 w-3.5" />
              <span>Raw GRC JSON</span>
            </button>
          </div>

          <button
            type="button"
            onClick={onClose}
            className="rounded-lg p-1.5 text-slate-400 hover:bg-slate-100 hover:text-slate-700 transition-colors cursor-pointer"
            aria-label="Close modal"
          >
            <X className="h-5 w-5" />
          </button>
        </div>

        {/* Modal Body: Pure "Less is More" */}
        <div className="flex-1 overflow-y-auto p-6 sm:p-8 bg-slate-50/40">
          {activeTab === "certificate" ? (
            /* Razor-Sharp Vector Audit Certificate (Zero Blurry Images) */
            <div className="rounded-xl border border-slate-200 bg-white p-6 sm:p-7 shadow-xs space-y-6">
              {/* Certificate Header */}
              <div className="flex items-start justify-between border-b border-slate-100 pb-5">
                <div className="space-y-1">
                  <div className="inline-flex items-center gap-1.5 text-xs font-bold text-[#15803d]">
                    <ShieldCheck className="h-4 w-4" />
                    <span>AICPA SOC 2 TYPE II &bull; CC8.1 CHANGE CONTROL</span>
                  </div>
                  <h3 className="text-lg sm:text-xl font-bold text-[#111013] font-heading">
                    Compliance Verification Certificate
                  </h3>
                  <p className="text-xs text-[#5c728e] font-mono">
                    Issue: LANG-10 &bull; Migrate Auth Token Service to Ed25519 Keys
                  </p>
                </div>

                <span className="rounded-full bg-emerald-50 px-3 py-1 text-xs font-bold text-[#15803d] border border-emerald-200 shrink-0 font-mono">
                  5/5 VERIFIED
                </span>
              </div>

              {/* 5 Verified Controls in Crisp Vector Typography */}
              <div className="space-y-2.5">
                <div className="text-[11px] font-bold text-slate-400 uppercase tracking-wider">
                  Verified Control Evidence:
                </div>

                <div className="divide-y divide-slate-100 rounded-lg border border-slate-200/80 bg-slate-50/50 text-xs">
                  <div className="flex items-center justify-between p-3">
                    <div className="flex items-center gap-2.5">
                      <CheckCircle2 className="h-4 w-4 text-emerald-600 shrink-0" />
                      <div>
                        <div className="font-semibold text-[#111013]">Acceptance Criteria (DoD)</div>
                        <div className="text-[11px] text-[#5c728e]">Given/When/Then DoD specified in issue description</div>
                      </div>
                    </div>
                    <span className="font-mono text-[11px] font-bold text-emerald-700">PASS</span>
                  </div>

                  <div className="flex items-center justify-between p-3">
                    <div className="flex items-center gap-2.5">
                      <CheckCircle2 className="h-4 w-4 text-emerald-600 shrink-0" />
                      <div>
                        <div className="font-semibold text-[#111013]">Traceable Code Linkage</div>
                        <div className="text-[11px] text-[#5c728e]">GitHub PR #384 merged into main with commit 4f738a1</div>
                      </div>
                    </div>
                    <span className="font-mono text-[11px] font-bold text-emerald-700">PASS</span>
                  </div>

                  <div className="flex items-center justify-between p-3">
                    <div className="flex items-center gap-2.5">
                      <CheckCircle2 className="h-4 w-4 text-emerald-600 shrink-0" />
                      <div>
                        <div className="font-semibold text-[#111013]">Segregation of Duties (CC6.8)</div>
                        <div className="text-[11px] text-[#5c728e]">Approved by sarah.m (SecOps). Author alex.k != Approver</div>
                      </div>
                    </div>
                    <span className="font-mono text-[11px] font-bold text-emerald-700">PASS</span>
                  </div>

                  <div className="flex items-center justify-between p-3">
                    <div className="flex items-center gap-2.5">
                      <CheckCircle2 className="h-4 w-4 text-emerald-600 shrink-0" />
                      <div>
                        <div className="font-semibold text-[#111013]">Independent QA Sign-off</div>
                        <div className="text-[11px] text-[#5c728e]">qa-verified label &amp; staging test report verified by elena.r</div>
                      </div>
                    </div>
                    <span className="font-mono text-[11px] font-bold text-emerald-700">PASS</span>
                  </div>

                  <div className="flex items-center justify-between p-3">
                    <div className="flex items-center gap-2.5">
                      <CheckCircle2 className="h-4 w-4 text-emerald-600 shrink-0" />
                      <div>
                        <div className="font-semibold text-[#111013]">SAST Vulnerability Scan</div>
                        <div className="text-[11px] text-[#5c728e]">Snyk security scan clean: 0 High / Critical vulnerabilities</div>
                      </div>
                    </div>
                    <span className="font-mono text-[11px] font-bold text-emerald-700">PASS</span>
                  </div>
                </div>
              </div>

              {/* Cryptographic SHA-256 Fingerprint */}
              <div className="rounded-xl bg-[#111013] p-4 text-white space-y-2">
                <div className="flex items-center justify-between text-xs text-slate-400 font-mono">
                  <div className="flex items-center gap-1.5">
                    <Lock className="h-3.5 w-3.5 text-[#dbf1c3]" />
                    <span>Cryptographic Evidence Fingerprint</span>
                  </div>
                  <button
                    type="button"
                    onClick={handleCopy}
                    className="text-[#dbf1c3] hover:underline cursor-pointer inline-flex items-center gap-1"
                  >
                    {copied ? <Check className="h-3 w-3" /> : <Copy className="h-3 w-3" />}
                    <span>{copied ? "Copied" : "Copy Hash"}</span>
                  </button>
                </div>
                <code className="block text-[11px] font-mono text-[#dbf1c3] break-all">
                  sha256:9f83ac2b7c4d516e8812c32e5f56a3120199e8b7c62d08a0ef93d927a44fbc81
                </code>
                <div className="text-[10px] text-slate-400 pt-1 border-t border-slate-800 flex items-center gap-1.5">
                  <Database className="h-3 w-3 text-emerald-400" />
                  <span>Certified in Atlassian Forge KVS &bull; Zero Data Egress</span>
                </div>
              </div>
            </div>
          ) : (
            /* Tab 2: Raw Canonical JSON */
            <div className="space-y-3">
              <div className="flex items-center justify-between">
                <span className="text-xs font-mono text-slate-500">
                  Canonical AICPA SOC 2 JSON Payload
                </span>
                <button
                  type="button"
                  onClick={handleCopy}
                  className="inline-flex items-center gap-1 px-3 py-1 rounded-md border border-slate-200 bg-white text-xs font-semibold text-[#111013] hover:bg-slate-50"
                >
                  {copied ? <Check className="h-3 w-3 text-emerald-600" /> : <Copy className="h-3 w-3 text-slate-500" />}
                  <span>{copied ? "Copied!" : "Copy JSON"}</span>
                </button>
              </div>
              <pre className="overflow-x-auto rounded-xl bg-[#111013] p-4 font-mono text-xs text-[#dbf1c3] leading-relaxed max-h-[420px]">
                {JSON.stringify(sampleJson, null, 2)}
              </pre>
            </div>
          )}
        </div>

        {/* Minimal Footer */}
        <div className="flex items-center justify-between border-t border-slate-100 bg-white px-6 py-3.5 text-xs">
          <span className="text-[#5c728e] font-medium hidden sm:inline">
            100% In-Tenant Forge Architecture
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
