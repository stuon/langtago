"use client";

import { useState } from "react";
import {
  ShieldCheck,
  CheckCircle2,
  Copy,
  Check,
  ChevronLeft,
  ChevronRight,
  ArrowRight,
  FileSpreadsheet,
  Lock,
  Code2,
  ExternalLink,
  Sparkles,
} from "lucide-react";

export default function AuditShowcase() {
  const [activeSlide, setActiveSlide] = useState(0);
  const [exportSubTab, setExportSubTab] = useState<"json" | "csv" | "vanta" | "drata" | "merkle">("json");
  const [copied, setCopied] = useState(false);

  const slides = [
    {
      id: "checklist",
      tabLabel: "1. Compliance Checklist (DEMO-9)",
      badge: "5/5 Controls Verified",
      badgeStyle: "bg-emerald-50 text-[#15803d] border-emerald-200",
      ticket: "DEMO-9 • Deploy Payment Microservice v2",
      title: "Real-Time 5-Pillar SDLC Compliance Checklist",
      desc: "Native Atlassian Forge panel rendered directly inside Jira Cloud. Verifies acceptance criteria, code PR links, peer reviews, QA sign-off, and SAST scans automatically on every release.",
      image: "/images/jira_compliance_checklist_tight.png",
      highlights: [
        { label: "Standard", value: "AICPA SOC 2 CC8.1 & ISO 27001 (A.8.32)" },
        { label: "Evidence", value: "Automated Given/When/Then DoD & PR #42" },
        { label: "Storage", value: "Sealed in Forge KVS (Zero External Egress)" },
      ],
    },
    {
      id: "remediation",
      tabLabel: "2. 1-Click Remediation & SHA-256",
      badge: "In-Situ Developer Remediation",
      badgeStyle: "bg-blue-50 text-blue-700 border-blue-200",
      ticket: "DEMO-9 • In-Situ Developer Remediation",
      title: "Instant In-Situ Remediation & Cryptographic SHA-256 Seal",
      desc: "Engineers can remediate missing evidence with a single click (e.g., '+ Apply security-approved Label') without switching tools. An immutable SHA-256 evidence fingerprint is certified directly into Jira ticket storage.",
      image: "/images/jira_quick_remediation_tight.png",
      highlights: [
        { label: "Action", value: "1-Click '+ Apply security-approved Label'" },
        { label: "Fingerprint", value: "sha256:c60415619210d9ce4589ab10..." },
        { label: "Audit Trail", value: "Immutable engineer timestamp in KVS" },
      ],
    },
    {
      id: "blocker",
      tabLabel: "3. Gatekeeper Blocker (DEMO-10)",
      badge: "Transition Blocked (3/5)",
      badgeStyle: "bg-amber-50 text-amber-700 border-amber-200",
      ticket: "DEMO-10 • Negative Compliance Test",
      title: "Preventive Gatekeeper Release Blocker",
      desc: "EvidenceLog acts as an automated workflow gatekeeper. If required compliance evidence is missing, Jira workflow transitions to 'Done' or 'Release' are blocked, preventing unverified code from reaching production.",
      image: "/images/jira_unverified_blocker_tight.png",
      highlights: [
        { label: "Enforcement", value: "Jira Native Workflow Validator (Forge)" },
        { label: "Status", value: "Blocked: Missing QA trace & SAST scan" },
        { label: "Prevention", value: "Zero unverified changes reach production" },
      ],
    },
    {
      id: "exports",
      tabLabel: "4. Raw Auditor Exports (CSV / GRC)",
      badge: "Big 4 & GRC Ready",
      badgeStyle: "bg-purple-50 text-purple-700 border-purple-200",
      ticket: "Release 2026.4-LTS • Auditor Export Pack",
      title: "Canonical SOC 2 JSON, Big 4 CSV & GRC Schema Exports",
      desc: "Deliver verifiable evidence to auditors in seconds. EvidenceLog generates machine-readable AICPA SOC 2 JSON, Big 4 workpaper CSVs, and continuous compliance payloads for Vanta and Drata.",
      image: "",
      highlights: [
        { label: "Big 4 Workpaper", value: "Deloitte / EY / PwC / KPMG CSV standard" },
        { label: "GRC Integrations", value: "Vanta & Drata Continuous Ingestion" },
        { label: "Verification", value: "Binary Merkle Tree root with offline verifier" },
      ],
    },
  ];

  const currentSlide = slides[activeSlide];

  const handlePrev = () => {
    setActiveSlide((prev) => (prev === 0 ? slides.length - 1 : prev - 1));
  };

  const handleNext = () => {
    setActiveSlide((prev) => (prev === slides.length - 1 ? 0 : prev + 1));
  };

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
      { control_id: "CC8.1.1", name: "Explicit Acceptance Criteria", status: "PASS", evidence: "Given/When/Then DoD in issue description." },
      { control_id: "CC8.1.2", name: "Traceable Code Linkage", status: "PASS", evidence: "GitHub PR #384 referenced in Jira Remote Links." },
      { control_id: "CC6.8.1", name: "Segregation of Duties", status: "PASS", evidence: "Author: alex.k. Approver: sarah.m (Staff SecOps)." },
      { control_id: "CC8.1.3", name: "Independent QA Testing", status: "PASS", evidence: "qa-verified label applied by elena.r." },
      { control_id: "CC7.1.1", name: "Security SAST Scanning", status: "PASS", evidence: "Snyk scan passed: 0 High/Critical CVEs." },
    ],
  };

  const sampleCsvRow = `IssueKey,Summary,Reporter,Approver,QASigner,Status,Score,Fingerprint,Timestamp\nLANG-10,"Migrate Auth Token Service to Ed25519 Keys",alex.k,sarah.m,elena.r,AUDIT_READY,5/5,9f83ac2b7c4d516e8812c32e5f56a3120199e8b7c62d08a0ef93d927a44fbc81,2026-10-14T16:42:08.192Z`;

  const vantaPayload = {
    schemaVersion: "1.0",
    source: "EvidenceLog for Jira (Atlassian Forge)",
    vantaResourceType: "ChangeManagementTicket",
    resourceId: "LANG-10",
    metadata: {
      ticketKey: "LANG-10",
      summary: "Migrate Auth Token Service to Ed25519 Keys",
      status: "Done",
      riskLevel: "NORMAL",
    },
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
    immutableFingerprint: "9f83ac2b7c4d516e8812c32e5f56a3120199e8b7c62d08a0ef93d927a44fbc81",
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
    <section id="sample-report" className="py-20 sm:py-28 bg-slate-50/60 border-t border-slate-100 scroll-mt-20">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Section Heading */}
        <div className="mb-12 max-w-3xl mx-auto text-center">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-50 text-[#15803d] text-xs font-semibold border border-emerald-200 mb-3">
            <ShieldCheck className="h-4 w-4" />
            <span>SAMPLE AUDIT ARTIFACTS</span>
          </div>
          <h2 className="text-3xl sm:text-5xl font-bold text-[#111013] font-heading leading-tight">
            Inspect real Jira compliance reports
          </h2>
          <p className="text-base text-[#5c728e] mt-3">
            Browse through the actual change-management verification views generated on live Jira Cloud tickets.
          </p>
        </div>

        {/* Carousel Tabs Navigation */}
        <div className="flex items-center justify-center gap-2 mb-8 overflow-x-auto pb-2">
          {slides.map((s, idx) => {
            const isActive = activeSlide === idx;
            return (
              <button
                key={s.id}
                type="button"
                onClick={() => setActiveSlide(idx)}
                className={`px-4 py-2 rounded-xl text-xs sm:text-sm font-semibold transition-all whitespace-nowrap cursor-pointer ${
                  isActive
                    ? "bg-[#111013] text-white shadow-md"
                    : "bg-white text-[#5c728e] border border-slate-200 hover:text-[#111013] hover:border-slate-300"
                }`}
              >
                {s.tabLabel}
              </button>
            );
          })}
        </div>

        {/* Main Carousel Card Container */}
        <div className="relative mx-auto max-w-5xl rounded-2xl border border-slate-200 bg-white shadow-xl overflow-hidden">
          {/* Card Header Bar */}
          <div className="flex flex-wrap items-center justify-between gap-3 border-b border-slate-100 px-6 py-4 bg-white">
            <div className="flex items-center gap-2.5">
              <span className="font-mono text-xs sm:text-sm font-bold text-[#111013]">
                {currentSlide.ticket}
              </span>
              <span className={`px-2.5 py-0.5 rounded-full text-xs font-bold border font-mono ${currentSlide.badgeStyle}`}>
                {currentSlide.badge}
              </span>
            </div>

            {/* Prev / Next Carousel Controls */}
            <div className="flex items-center gap-2 ml-auto">
              <span className="text-xs text-slate-400 font-mono mr-1">
                {activeSlide + 1} of {slides.length}
              </span>
              <button
                type="button"
                onClick={handlePrev}
                aria-label="Previous slide"
                className="p-1.5 rounded-lg border border-slate-200 bg-white hover:bg-slate-50 text-slate-700 transition-colors cursor-pointer"
              >
                <ChevronLeft className="h-4 w-4" />
              </button>
              <button
                type="button"
                onClick={handleNext}
                aria-label="Next slide"
                className="p-1.5 rounded-lg border border-slate-200 bg-white hover:bg-slate-50 text-slate-700 transition-colors cursor-pointer"
              >
                <ChevronRight className="h-4 w-4" />
              </button>
            </div>
          </div>

          {/* Card Body - Focused Hero Presentation */}
          <div className="p-6 sm:p-8 bg-slate-50/30">
            {currentSlide.id !== "exports" ? (
              <div className="space-y-6">
                {/* Crisp Hero Image with Natural Aspect Ratio */}
                <div className="rounded-xl border border-slate-200 bg-white p-3 shadow-xs flex items-center justify-center overflow-hidden">
                  <img
                    src={currentSlide.image}
                    alt={currentSlide.title}
                    className="w-full h-auto max-h-[480px] object-contain rounded"
                  />
                </div>

                {/* Clear Headline & Concise Description */}
                <div className="max-w-3xl">
                  <h3 className="text-lg sm:text-xl font-bold text-[#111013] font-heading">
                    {currentSlide.title}
                  </h3>
                  <p className="text-sm text-[#5c728e] leading-relaxed mt-1.5">
                    {currentSlide.desc}
                  </p>
                </div>
              </div>
            ) : (
              /* Slide 4: Interactive GRC & Auditor Code View */
              <div className="space-y-4">
                <div className="flex flex-wrap items-center justify-between gap-3 border-b border-slate-200 pb-3">
                  <div className="flex flex-wrap gap-2 text-xs">
                    {(["json", "csv", "vanta", "drata", "merkle"] as const).map((tab) => (
                      <button
                        key={tab}
                        type="button"
                        onClick={() => setExportSubTab(tab)}
                        className={`px-3 py-1.5 rounded-lg font-mono font-semibold transition-all cursor-pointer ${
                          exportSubTab === tab
                            ? "bg-[#111013] text-[#dbf1c3]"
                            : "bg-white text-slate-600 border border-slate-200 hover:text-black"
                        }`}
                      >
                        {tab === "json" && "SOC 2 JSON"}
                        {tab === "csv" && "Big 4 CSV"}
                        {tab === "vanta" && "Vanta Format"}
                        {tab === "drata" && "Drata Format"}
                        {tab === "merkle" && "Merkle Root"}
                      </button>
                    ))}
                  </div>

                  <button
                    type="button"
                    onClick={handleCopy}
                    className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg border border-slate-200 bg-white text-xs font-semibold text-[#111013] hover:bg-slate-50 transition-colors shadow-2xs cursor-pointer"
                  >
                    {copied ? (
                      <>
                        <Check className="h-3.5 w-3.5 text-[#15803d]" />
                        <span className="text-[#15803d]">Copied!</span>
                      </>
                    ) : (
                      <>
                        <Copy className="h-3.5 w-3.5 text-slate-400" />
                        <span>Copy Payload</span>
                      </>
                    )}
                  </button>
                </div>

                <div className="overflow-hidden rounded-xl bg-[#111013] p-4 font-mono text-xs text-[#dbf1c3] leading-relaxed max-h-[420px] overflow-x-auto">
                  {exportSubTab === "json" && JSON.stringify(sampleJson, null, 2)}
                  {exportSubTab === "csv" && sampleCsvRow}
                  {exportSubTab === "vanta" && JSON.stringify(vantaPayload, null, 2)}
                  {exportSubTab === "drata" && JSON.stringify(drataPayload, null, 2)}
                  {exportSubTab === "merkle" && (
                    <div className="space-y-3">
                      <div>// Binary Merkle Tree Root Hash:</div>
                      <div className="text-purple-300 font-bold">sha256:7e49f2b189a03bc432d9101f78e4d2e9941a3bc68e0d84f229a1b80c33f98ea1</div>
                      <div className="text-slate-400 text-[11px] pt-2 border-t border-slate-800 space-y-1">
                        <div>Leaf 0 (LANG-10): 9f83ac2b7c4d516e8812c32e5f56a312... [VERIFIED]</div>
                        <div>Leaf 1 (LANG-9):  3a7b1c4e88019ab921de22a18812a412... [VERIFIED]</div>
                      </div>
                    </div>
                  )}
                </div>
              </div>
            )}

            {/* Generous 3-Column Highlights Strip */}
            <div className="mt-8 grid grid-cols-1 sm:grid-cols-3 gap-4 pt-6 border-t border-slate-200/80">
              {currentSlide.highlights.map((h, i) => (
                <div key={i} className="rounded-xl bg-white p-3.5 border border-slate-200/80 shadow-2xs">
                  <span className="block text-[11px] uppercase tracking-wider font-bold text-slate-400">
                    {h.label}
                  </span>
                  <span className="block text-xs font-semibold text-[#111013] mt-1 font-mono truncate">
                    {h.value}
                  </span>
                </div>
              ))}
            </div>
          </div>

          {/* Card Footer with Direct CTA */}
          <div className="flex flex-wrap items-center justify-between gap-3 border-t border-slate-100 bg-white px-6 py-4">
            <span className="text-xs text-[#5c728e] font-medium hidden sm:inline">
              100% In-Tenant Forge Architecture &bull; Certified in Jira Storage &bull; Zero Data Egress
            </span>
            <div className="flex items-center gap-3 ml-auto">
              <a
                href="/docs/verifier.html"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1 text-xs font-semibold text-[#5c728e] hover:text-[#111013]"
              >
                <span>Zero-Trust Offline Verifier</span>
                <ExternalLink className="h-3 w-3" />
              </a>
              <a
                href="https://marketplace.atlassian.com"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 px-4 py-2 rounded-lg bg-[#111013] text-white hover:bg-[#15803d] font-semibold text-xs transition-colors shadow-xs"
              >
                <span>Install Free on Marketplace</span>
                <ArrowRight className="h-3.5 w-3.5" />
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
