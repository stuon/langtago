"use client";

import { useState } from "react";
import { Check, Copy, Code2, FileSpreadsheet, Terminal, ShieldCheck, Sparkles } from "lucide-react";

type PayloadTab = "vanta" | "drata" | "csv" | "jql";

export default function GrcPayloadViewer() {
  const [activeTab, setActiveTab] = useState<PayloadTab>("vanta");
  const [copied, setCopied] = useState(false);
  const [selectedIssue, setSelectedIssue] = useState<"PROJ-1042" | "PROJ-1089">("PROJ-1042");

  const vantaPayloads = {
    "PROJ-1042": {
      schemaVersion: "1.0",
      source: "EvidenceLog for Jira (Atlassian Forge)",
      vantaResourceType: "ChangeManagementTicket",
      resourceId: "PROJ-1042",
      metadata: {
        ticketKey: "PROJ-1042",
        summary: "Implement deterministic RFC-8785 JSON canonicalizer for audit export",
        project: "PROJ",
        status: "Done",
        createdAt: "2026-11-09T09:14:22.108Z",
        closedAt: "2026-11-10T16:45:01.340Z",
        riskLevel: "NORMAL"
      },
      controlEvaluations: [
        {
          controlId: "CHANGE_MANAGEMENT_AUTHORIZATION",
          standard: "SOC2_CC8.1",
          passed: true,
          evidence: {
            acceptanceCriteriaPresent: true,
            acceptanceCriteriaFormat: "Given/When/Then BDD",
            linkedPullRequests: [
              "https://github.com/langtago/evidencelog/pull/184"
            ]
          }
        },
        {
          controlId: "SEGREGATION_OF_DUTIES",
          standard: "SOC2_CC6.8",
          passed: true,
          evidence: {
            creator: "Alex Chen (Staff Engineer)",
            approver: "Sarah Jenkins (Principal Security Lead)",
            authorEqualsApprover: false,
            independentReviewVerified: true
          }
        },
        {
          controlId: "PRE_RELEASE_TESTING",
          standard: "SOC2_CC8.1",
          passed: true,
          evidence: {
            qaSigner: "Marcus Brody (Lead QA Engineer)",
            qaMethod: "Automated test suite + staging tag verification",
            securityScan: {
              passed: true,
              scanner: "Snyk SAST & Trivy Container Scan",
              vulnerabilitiesFound: 0
            }
          }
        }
      ],
      cryptographicIntegrity: {
        hashAlgorithm: "SHA-256",
        fingerprint: "e3b0c44298fc1c149afbf4c8996fb92427ae41e4649b934ca495991b7852b855"
      },
      isCompliant: true
    },
    "PROJ-1089": {
      schemaVersion: "1.0",
      source: "EvidenceLog for Jira (Atlassian Forge)",
      vantaResourceType: "ChangeManagementTicket",
      resourceId: "PROJ-1089",
      metadata: {
        ticketKey: "PROJ-1089",
        summary: "EMERGENCY: Patch redis connection pool timeout during failover",
        project: "PROJ",
        status: "Done",
        createdAt: "2026-11-11T02:10:15.000Z",
        closedAt: "2026-11-11T03:05:22.000Z",
        riskLevel: "EMERGENCY"
      },
      controlEvaluations: [
        {
          controlId: "CHANGE_MANAGEMENT_AUTHORIZATION",
          standard: "SOC2_CC8.1",
          passed: true,
          evidence: {
            acceptanceCriteriaPresent: true,
            acceptanceCriteriaFormat: "Definition of Done (Hotfix criteria)",
            linkedPullRequests: [
              "https://github.com/langtago/evidencelog/pull/192"
            ]
          }
        },
        {
          controlId: "SEGREGATION_OF_DUTIES",
          standard: "SOC2_CC6.8",
          passed: true,
          evidence: {
            creator: "Dave Miller (SRE On-Call)",
            approver: "Elena Rostova (Engineering Director / Incident Commander)",
            authorEqualsApprover: false,
            retroactiveCabReviewScheduled: true
          }
        },
        {
          controlId: "PRE_RELEASE_TESTING",
          standard: "SOC2_CC8.1",
          passed: true,
          evidence: {
            qaSigner: "Automated CI/CD Pipeline (Synthetic Smoke Tests)",
            qaMethod: "canary-verified label + healthcheck pass",
            securityScan: {
              passed: true,
              scanner: "Dependabot + SonarQube Quality Gate",
              vulnerabilitiesFound: 0
            }
          }
        }
      ],
      cryptographicIntegrity: {
        hashAlgorithm: "SHA-256",
        fingerprint: "9f86d081884c7d659a2feaa0c55ad015a3bf4f1b2b0b822cd15d6c15b0f00a08"
      },
      isCompliant: true
    }
  };

  const drataPayloads = {
    "PROJ-1042": {
      framework: "DRATA_CHANGE_CONTROL_V2",
      ticketId: "PROJ-1042",
      ticketUrl: "https://langtago.atlassian.net/browse/PROJ-1042",
      title: "Implement deterministic RFC-8785 JSON canonicalizer for audit export",
      riskRating: "NORMAL",
      timestamp: "2026-11-10T16:45:01.340Z",
      verificationChecklist: {
        peerReviewed: true,
        peerReviewer: "Sarah Jenkins (Principal Security Lead)",
        qaVerified: true,
        qaVerifier: "Marcus Brody (Lead QA Engineer)",
        traceableToGitPR: true,
        pullRequestUrl: "https://github.com/langtago/evidencelog/pull/184",
        securityScanPassed: true,
        sastScanner: "Snyk Security (0 vulnerabilities)",
        rollbackPlanDocumented: true
      },
      auditStatus: "APPROVED_READY",
      regulatoryControlsSatisfied: [
        "DCF-87: Software Development Lifecycle",
        "DCF-91: Segregation of Duties in Production Deployments",
        "DCF-104: Pre-Release Quality Assurance Verification",
        "DCF-118: Automated SAST Vulnerability Scanning"
      ],
      evidenceHash: "e3b0c44298fc1c149afbf4c8996fb92427ae41e4649b934ca495991b7852b855"
    },
    "PROJ-1089": {
      framework: "DRATA_CHANGE_CONTROL_V2",
      ticketId: "PROJ-1089",
      ticketUrl: "https://langtago.atlassian.net/browse/PROJ-1089",
      title: "EMERGENCY: Patch redis connection pool timeout during failover",
      riskRating: "EMERGENCY",
      timestamp: "2026-11-11T03:05:22.000Z",
      verificationChecklist: {
        peerReviewed: true,
        peerReviewer: "Elena Rostova (Engineering Director)",
        qaVerified: true,
        qaVerifier: "Automated Smoke Verification",
        traceableToGitPR: true,
        pullRequestUrl: "https://github.com/langtago/evidencelog/pull/192",
        securityScanPassed: true,
        sastScanner: "SonarQube Passed",
        rollbackPlanDocumented: true
      },
      auditStatus: "APPROVED_READY",
      regulatoryControlsSatisfied: [
        "DCF-88: Emergency Change Procedures & Post-Incident CAB",
        "DCF-91: Independent Peer Authorization",
        "DCF-104: Production Health Testing"
      ],
      evidenceHash: "9f86d081884c7d659a2feaa0c55ad015a3bf4f1b2b0b822cd15d6c15b0f00a08"
    }
  };

  const csvRows = {
    "PROJ-1042": `"IssueKey","Summary","Reporter","Approver","QASigner","Status","Risk","Score","SHA256_Fingerprint","CertifiedTimestamp"\n"PROJ-1042","Implement deterministic RFC-8785 JSON canonicalizer for audit export","Alex Chen","Sarah Jenkins","Marcus Brody","AUDIT_READY","NORMAL","5/5","e3b0c44298fc1c149afbf4c8996fb92427ae41e4649b934ca495991b7852b855","2026-11-10T16:45:01Z"`,
    "PROJ-1089": `"IssueKey","Summary","Reporter","Approver","QASigner","Status","Risk","Score","SHA256_Fingerprint","CertifiedTimestamp"\n"PROJ-1089","EMERGENCY: Patch redis connection pool timeout during failover","Dave Miller","Elena Rostova","CI Smoke Tests","AUDIT_READY","EMERGENCY","5/5","9f86d081884c7d659a2feaa0c55ad015a3bf4f1b2b0b822cd15d6c15b0f00a08","2026-11-11T03:05:22Z"`
  };

  const jqlQueries = `-- 1. All Audit-Ready Tickets in Project (Continuous Vanta & Drata pass):
project = "PROJ" AND status = Done AND issue.property[evidencelog_compliance].isAuditReady = "true"

-- 2. Non-Compliant Tickets (Blocked by Preventive Gatekeeper):
project = "PROJ" AND status = Done AND issue.property[evidencelog_compliance].isAuditReady = "false"

-- 3. Emergency Hotfixes Requiring Post-Incident CAB Review:
project = "PROJ" AND issue.property[evidencelog_compliance].riskLevel = "EMERGENCY"

-- 4. Cryptographically Certified Tickets Sealed in Forge KVS:
project = "PROJ" AND issue.property[evidencelog_compliance].certified = "true"`;

  const getCurrentText = () => {
    switch (activeTab) {
      case "vanta":
        return JSON.stringify(vantaPayloads[selectedIssue], null, 2);
      case "drata":
        return JSON.stringify(drataPayloads[selectedIssue], null, 2);
      case "csv":
        return csvRows[selectedIssue];
      case "jql":
        return jqlQueries;
    }
  };

  const handleCopy = () => {
    navigator.clipboard.writeText(getCurrentText());
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <div className="rounded-3xl border border-slate-200/90 bg-[#111013] text-white shadow-2xl overflow-hidden">
      {/* Top Bar with Tabs and Ticket Switcher */}
      <div className="border-b border-white/10 px-4 sm:px-6 py-4 flex flex-col md:flex-row md:items-center justify-between gap-4 bg-[#18171b]">
        {/* Format Tabs */}
        <div className="flex items-center gap-1.5 sm:gap-2 overflow-x-auto pb-1 md:pb-0">
          <button
            type="button"
            onClick={() => setActiveTab("vanta")}
            className={`px-3 py-1.5 rounded-lg text-xs font-bold transition-all flex items-center gap-1.5 cursor-pointer whitespace-nowrap ${
              activeTab === "vanta"
                ? "bg-[#dbf1c3] text-[#111013] shadow-xs"
                : "text-slate-300 hover:text-white hover:bg-white/5"
            }`}
          >
            <Code2 className="h-3.5 w-3.5" />
            <span>Vanta JSON (v1.0)</span>
          </button>

          <button
            type="button"
            onClick={() => setActiveTab("drata")}
            className={`px-3 py-1.5 rounded-lg text-xs font-bold transition-all flex items-center gap-1.5 cursor-pointer whitespace-nowrap ${
              activeTab === "drata"
                ? "bg-[#dbf1c3] text-[#111013] shadow-xs"
                : "text-slate-300 hover:text-white hover:bg-white/5"
            }`}
          >
            <Code2 className="h-3.5 w-3.5" />
            <span>Drata JSON (v2)</span>
          </button>

          <button
            type="button"
            onClick={() => setActiveTab("csv")}
            className={`px-3 py-1.5 rounded-lg text-xs font-bold transition-all flex items-center gap-1.5 cursor-pointer whitespace-nowrap ${
              activeTab === "csv"
                ? "bg-[#dbf1c3] text-[#111013] shadow-xs"
                : "text-slate-300 hover:text-white hover:bg-white/5"
            }`}
          >
            <FileSpreadsheet className="h-3.5 w-3.5" />
            <span>Auditor CSV</span>
          </button>

          <button
            type="button"
            onClick={() => setActiveTab("jql")}
            className={`px-3 py-1.5 rounded-lg text-xs font-bold transition-all flex items-center gap-1.5 cursor-pointer whitespace-nowrap ${
              activeTab === "jql"
                ? "bg-[#dbf1c3] text-[#111013] shadow-xs"
                : "text-slate-300 hover:text-white hover:bg-white/5"
            }`}
          >
            <Terminal className="h-3.5 w-3.5" />
            <span>Jira JQL Library</span>
          </button>
        </div>

        {/* Right Side: Ticket Switcher & Copy Button */}
        <div className="flex items-center gap-3 shrink-0">
          {activeTab !== "jql" && (
            <div className="flex items-center gap-1.5 bg-white/5 p-1 rounded-lg border border-white/10 text-xs">
              <span className="text-slate-400 pl-1.5 text-[11px] font-mono">Sample:</span>
              <button
                type="button"
                onClick={() => setSelectedIssue("PROJ-1042")}
                className={`px-2 py-0.5 rounded font-mono text-[11px] transition-colors ${
                  selectedIssue === "PROJ-1042"
                    ? "bg-white/20 text-white font-bold"
                    : "text-slate-400 hover:text-white"
                }`}
              >
                PROJ-1042 (Normal)
              </button>
              <button
                type="button"
                onClick={() => setSelectedIssue("PROJ-1089")}
                className={`px-2 py-0.5 rounded font-mono text-[11px] transition-colors ${
                  selectedIssue === "PROJ-1089"
                    ? "bg-amber-500/30 text-amber-300 font-bold"
                    : "text-slate-400 hover:text-white"
                }`}
              >
                PROJ-1089 (Hotfix)
              </button>
            </div>
          )}

          <button
            type="button"
            onClick={handleCopy}
            className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-white/10 hover:bg-white/20 text-white text-xs font-semibold transition-all cursor-pointer border border-white/10"
            title="Copy payload to clipboard"
          >
            {copied ? (
              <>
                <Check className="h-3.5 w-3.5 text-emerald-400" />
                <span className="text-emerald-300 font-bold">Copied!</span>
              </>
            ) : (
              <>
                <Copy className="h-3.5 w-3.5 text-slate-300" />
                <span>Copy Payload</span>
              </>
            )}
          </button>
        </div>
      </div>

      {/* Payload Display Area */}
      <div className="relative p-4 sm:p-6 font-mono text-xs overflow-x-auto max-h-[460px] bg-[#111013]/90 select-text">
        <pre className="text-slate-200 leading-relaxed font-mono">
          <code>{getCurrentText()}</code>
        </pre>
      </div>

      {/* Bottom Explanatory Banner */}
      <div className="border-t border-white/10 bg-[#18171b] px-4 sm:px-6 py-3.5 flex flex-col sm:flex-row items-center justify-between gap-3 text-xs text-slate-300">
        <div className="flex items-center gap-2">
          <ShieldCheck className="h-4 w-4 text-[#dbf1c3] shrink-0" />
          <span>
            {activeTab === "vanta" && "100% compliant with Vanta Custom Evidence Upload & Jira Connector CC8.1 tests."}
            {activeTab === "drata" && "Directly satisfies Drata DCF-87, DCF-91, and DCF-104 change controls."}
            {activeTab === "csv" && "Big 4 audit matrix format (PwC, EY, KPMG, Deloitte) with SHA-256 fingerprints."}
            {activeTab === "jql" && "Direct JQL filters backed by native Jira Cloud Issue Entity Properties."}
          </span>
        </div>

        <div className="flex items-center gap-1.5 text-[11px] text-[#dbf1c3] font-semibold shrink-0">
          <Sparkles className="h-3.5 w-3.5" />
          <span>Atlassian Forge Native &bull; Zero Data Egress</span>
        </div>
      </div>
    </div>
  );
}
