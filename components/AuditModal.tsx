"use client";

import { useEffect, useState } from "react";
import {
  X,
  ShieldCheck,
  Copy,
  Check,
  ChevronLeft,
  ChevronRight,
  ArrowRight,
  ExternalLink,
} from "lucide-react";

interface AuditModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export default function AuditModal({ isOpen, onClose }: AuditModalProps) {
  const [activeSlide, setActiveSlide] = useState(0);
  const [exportSubTab, setExportSubTab] = useState<"json" | "vanta" | "drata" | "csv" | "merkle">("json");
  const [copied, setCopied] = useState(false);

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
      if (e.key === "ArrowLeft") handlePrev();
      if (e.key === "ArrowRight") handleNext();
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

  const slides = [
    {
      id: "checklist",
      tab: "1. Compliance Checklist (DEMO-9)",
      ticket: "DEMO-9 • Deploy Payment Microservice v2",
      badge: "5/5 Verified",
      badgeStyle: "bg-emerald-50 text-[#15803d] border-emerald-200",
      src: "/images/jira_compliance_checklist_tight.png",
      title: "5-Pillar SDLC Compliance Checklist",
      desc: "Live Jira Cloud panel automatically verifying Acceptance Criteria, GitHub PR links, independent Peer Review, and QA sign-off.",
    },
    {
      id: "remediation",
      tab: "2. 1-Click Remediation & SHA-256",
      ticket: "DEMO-9 • In-Situ Developer Remediation",
      badge: "Certified in KVS",
      badgeStyle: "bg-blue-50 text-blue-700 border-blue-200",
      src: "/images/jira_quick_remediation_tight.png",
      title: "1-Click Developer In-Situ Remediation",
      desc: "Apply security labels or QA sign-offs with one click directly inside Jira. Automatically generates a tamper-evident SHA-256 fingerprint in Forge KVS.",
    },
    {
      id: "blocker",
      tab: "3. Gatekeeper Blocker (DEMO-10)",
      ticket: "DEMO-10 • Negative Compliance Test",
      badge: "Action Required (3/5)",
      badgeStyle: "bg-amber-50 text-amber-700 border-amber-200",
      src: "/images/jira_unverified_blocker_tight.png",
      title: "Preventive Gatekeeper Release Blocker",
      desc: "Jira workflow validator blocks transitions to 'Done' when required evidence is missing, stopping unverified releases from hitting production.",
    },
    {
      id: "exports",
      tab: "4. Raw Auditor Exports (CSV / GRC)",
      ticket: "Release 2026.4-LTS • Auditor Export Pack",
      badge: "Big 4 & GRC Ready",
      badgeStyle: "bg-purple-50 text-purple-700 border-purple-200",
      src: "",
      title: "Canonical SOC 2 JSON & Big 4 Workpaper CSV",
      desc: "Instantly export compliance evidence formatted for Deloitte/EY/PwC/KPMG workpapers or continuous ingestion into Vanta and Drata.",
    },
  ];

  const handlePrev = () => {
    setActiveSlide((prev) => (prev === 0 ? slides.length - 1 : prev - 1));
  };

  const handleNext = () => {
    setActiveSlide((prev) => (prev === slides.length - 1 ? 0 : prev + 1));
  };

  const currentSlide = slides[activeSlide];

  const sampleJson = {
    schemaVersion: "2.0.0",
    report_id: "EV-SOC2-2026-LANG-10",
    standard: "AICPA SOC 2 Type II - CC8.1 / CC6.8 / CC7.1 & ISO 27001",
    jira_issue_key: "LANG-10",
    summary: "Migrate Auth Token Service to Ed25519 Keys",
    repository: "github.com/org/auth-gateway-service",
    pull_request_id: "#384",
    tamper_proof_checksum: "9f83ac2b7c4d516e8812c32e5f56a3120199e8b7c62d08a0ef93d927a44fbc81",
    verification_status: "CRYPTOGRAPHICALLY_SEALED",
    tenant: "langtago-demo.atlassian.net",
  };

  const sampleCsvRow = `IssueKey,Summary,Reporter,Approver,QASigner,Status,Score,Fingerprint,Timestamp\nLANG-10,"Migrate Auth Token Service to Ed25519 Keys",alex.k,sarah.m,elena.r,AUDIT_READY,5/5,9f83ac2b7c4d516e8812c32e5f56a3120199e8b7c62d08a0ef93d927a44fbc81,2026-10-14T16:42:08.192Z`;

  const vantaPayload = {
    schemaVersion: "1.0",
    source: "EvidenceLog for Jira",
    resourceId: "LANG-10",
    controlEvaluations: [
      { controlId: "CHANGE_MANAGEMENT_AUTHORIZATION", standard: "SOC2_CC8.1", passed: true },
      { controlId: "SEGREGATION_OF_DUTIES", standard: "SOC2_CC6.8", passed: true },
    ],
  };

  const drataPayload = {
    schemaVersion: "2.1",
    integrationSource: "EvidenceLog",
    complianceFrameworks: ["SOC2_TYPE_II", "ISO_27001_2022"],
    ticket: "LANG-10",
  };

  const handleCopy = () => {
    let text = "";
    if (exportSubTab === "vanta") text = JSON.stringify(vantaPayload, null, 2);
    else if (exportSubTab === "drata") text = JSON.stringify(drataPayload, null, 2);
    else if (exportSubTab === "csv") text = sampleCsvRow;
    else if (exportSubTab === "merkle") text = "sha256:7e49f2b189a03bc432d9101f78e4d2e9941a3bc68e0d84f229a1b80c33f98ea1";
    else text = JSON.stringify(sampleJson, null, 2);

    navigator.clipboard.writeText(text);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
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
        className="relative w-full max-w-4xl max-h-[88vh] flex flex-col rounded-2xl border border-slate-200 bg-white shadow-2xl overflow-hidden font-sans text-left"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Clean Header */}
        <div className="flex items-center justify-between border-b border-slate-100 bg-white px-5 sm:px-6 py-3.5">
          <div className="flex items-center gap-3">
            <div className="rounded-xl bg-[#dbf1c3]/70 p-2 text-[#15803d]">
              <ShieldCheck className="h-5 w-5" />
            </div>
            <div>
              <h3 className="font-bold text-[#111013] text-base font-heading">
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

        {/* Carousel Tabs Navigation */}
        <div className="flex items-center gap-1.5 border-b border-slate-100 bg-slate-50/70 px-5 sm:px-6 py-2 overflow-x-auto text-xs">
          {slides.map((s, idx) => (
            <button
              key={s.id}
              type="button"
              onClick={() => setActiveSlide(idx)}
              className={`px-3 py-1.5 rounded-lg font-medium transition-all whitespace-nowrap cursor-pointer ${
                activeSlide === idx
                  ? "bg-white text-[#111013] font-bold shadow-xs border border-slate-200"
                  : "text-[#5c728e] hover:text-[#111013]"
              }`}
            >
              {s.tab}
            </button>
          ))}
        </div>

        {/* Main Focused Carousel View */}
        <div className="flex-1 overflow-y-auto p-5 sm:p-6 bg-slate-50/30 space-y-4">
          {/* Card Top Context & Controls */}
          <div className="flex items-center justify-between text-xs px-1">
            <div className="flex items-center gap-2">
              <span className="font-bold text-[#111013] font-mono">
                {currentSlide.ticket}
              </span>
              <span className={`px-2 py-0.5 rounded font-bold border text-[11px] font-mono ${currentSlide.badgeStyle}`}>
                {currentSlide.badge}
              </span>
            </div>

            <div className="flex items-center gap-1.5">
              <span className="text-xs text-slate-400 font-mono mr-1">
                {activeSlide + 1} of {slides.length}
              </span>
              <button
                type="button"
                onClick={handlePrev}
                aria-label="Previous slide"
                className="p-1 rounded border border-slate-200 bg-white hover:bg-slate-100 text-slate-700 cursor-pointer"
              >
                <ChevronLeft className="h-4 w-4" />
              </button>
              <button
                type="button"
                onClick={handleNext}
                aria-label="Next slide"
                className="p-1 rounded border border-slate-200 bg-white hover:bg-slate-100 text-slate-700 cursor-pointer"
              >
                <ChevronRight className="h-4 w-4" />
              </button>
            </div>
          </div>

          {currentSlide.id !== "exports" ? (
            <div className="space-y-3">
              {/* Clean Single Image Presentation */}
              <div className="rounded-xl border border-slate-200 bg-white p-3 shadow-xs flex items-center justify-center overflow-hidden">
                <img
                  src={currentSlide.src}
                  alt={currentSlide.title}
                  className="w-full h-auto max-h-[400px] object-contain rounded"
                />
              </div>

              {/* Minimal Clean Caption */}
              <div className="px-1">
                <h4 className="font-bold text-[#111013] text-sm font-heading">
                  {currentSlide.title}
                </h4>
                <p className="text-xs text-[#5c728e] mt-1 leading-relaxed">
                  {currentSlide.desc}
                </p>
              </div>
            </div>
          ) : (
            /* Slide 4 Exports */
            <div className="space-y-3">
              <div className="flex flex-wrap items-center justify-between gap-2 border-b border-slate-200 pb-2">
                <div className="flex flex-wrap gap-1.5 text-xs">
                  {(["json", "csv", "vanta", "drata", "merkle"] as const).map((tab) => (
                    <button
                      key={tab}
                      type="button"
                      onClick={() => setExportSubTab(tab)}
                      className={`px-2.5 py-1 rounded-md font-mono transition-all cursor-pointer ${
                        exportSubTab === tab
                          ? "bg-[#111013] text-[#dbf1c3] font-bold"
                          : "bg-white text-slate-600 border border-slate-200 hover:text-black"
                      }`}
                    >
                      {tab === "json" && "SOC 2 JSON"}
                      {tab === "csv" && "Big 4 CSV"}
                      {tab === "vanta" && "Vanta"}
                      {tab === "drata" && "Drata"}
                      {tab === "merkle" && "Merkle"}
                    </button>
                  ))}
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

              <pre className="overflow-x-auto rounded-xl bg-[#111013] p-4 font-mono text-xs text-[#dbf1c3] leading-relaxed max-h-[340px]">
                {exportSubTab === "json" && JSON.stringify(sampleJson, null, 2)}
                {exportSubTab === "csv" && sampleCsvRow}
                {exportSubTab === "vanta" && JSON.stringify(vantaPayload, null, 2)}
                {exportSubTab === "drata" && JSON.stringify(drataPayload, null, 2)}
                {exportSubTab === "merkle" && "sha256:7e49f2b189a03bc432d9101f78e4d2e9941a3bc68e0d84f229a1b80c33f98ea1"}
              </pre>
            </div>
          )}
        </div>

        {/* Clean Minimal Footer */}
        <div className="flex items-center justify-between border-t border-slate-100 bg-white px-5 sm:px-6 py-3 text-xs">
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
