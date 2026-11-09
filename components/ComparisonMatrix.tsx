"use client";

import { useState } from "react";
import {
  XCircle,
  CheckCircle2,
  FileText,
  Lock,
  ArrowRight,
  Sparkles,
  AlertTriangle,
} from "lucide-react";
import AuditModal from "./AuditModal";

type TabRole = "all" | "engineering" | "security" | "auditor";

interface ComparisonItem {
  dimension: string;
  category: "workflow" | "compliance" | "security" | "cost";
  manual: {
    title: string;
    description: string;
    bad: boolean;
  };
  evidencelog: {
    title: string;
    description: string;
    good: boolean;
  };
}

export default function ComparisonMatrix() {
  const [activeTab, setActiveTab] = useState<TabRole>("all");
  const [isModalOpen, setIsModalOpen] = useState(false);

  const comparisons: ComparisonItem[] = [
    {
      dimension: "1. Time Spent Per Audit Sample",
      category: "workflow",
      manual: {
        title: "3.5 Hours per Sample",
        description:
          "Engineers search Jira, dig through GitHub/GitLab PR histories, screenshot approval comments, and copy CI logs into spreadsheets.",
        bad: true,
      },
      evidencelog: {
        title: "0 Manual Seconds",
        description:
          "EvidenceLog continuously inspects issue transitions in real time, automatically harvesting PR links, approvers, and QA sign-offs.",
        good: true,
      },
    },
    {
      dimension: "2. Annual Cost for 40 Audit Samples",
      category: "cost",
      manual: {
        title: "$11,900+ in Wasted Dev Salaries",
        description:
          "40 samples × 3.5 hrs = 140 hours wasted. At $85/hr blended engineering rate, thousands of dollars in sprint capacity are lost.",
        bad: true,
      },
      evidencelog: {
        title: "Free (≤10 devs) or $49/mo Pro",
        description:
          "Free forever for squads up to 10 devs. Unlimited audit exports and instant payback in the first single sprint release.",
        good: true,
      },
    },
    {
      dimension: "3. Segregation of Duties (SoD / CC6.8)",
      category: "compliance",
      manual: {
        title: "Manual Eyeball Checks & Gaps",
        description:
          "Relying on developers to remember not to self-approve. Inevitably, author self-merges slip through and become audit findings.",
        bad: true,
      },
      evidencelog: {
        title: "Automated Jira Gatekeeper",
        description:
          "Native Jira Workflow Validator mathematically verifies Author ≠ Approver. Unreviewed or self-approved transitions are blocked.",
        good: true,
      },
    },
    {
      dimension: "4. Developer Remediation Friction",
      category: "workflow",
      manual: {
        title: "Reading 40-Page Audit Policies",
        description:
          "When a sample fails, engineers spend hours re-opening closed tickets, pinging reviewers on Slack, and fighting red tape.",
        bad: true,
      },
      evidencelog: {
        title: "1-Click In-Situ Quick Fixes",
        description:
          "Interactive buttons inside the Jira ticket ('[+ Apply QA Label]', '[+ Append BDD DoD]') let devs fix compliance issues in 2 seconds.",
        good: true,
      },
    },
    {
      dimension: "5. Tamper Proofing & Cryptographic Proof",
      category: "security",
      manual: {
        title: "Zero Cryptographic Defense",
        description:
          "PNG screenshots and Google Docs can be altered in Photoshop or edited after the fact. Skeptical auditors request live screen shares.",
        bad: true,
      },
      evidencelog: {
        title: "Deterministic SHA-256 Hashes",
        description:
          "Tickets are sealed with immutable SHA-256 fingerprints in Forge KVS. Sprint releases are hashed into Binary Merkle Tree roots.",
        good: true,
      },
    },
    {
      dimension: "6. External Auditor Verification Experience",
      category: "compliance",
      manual: {
        title: "Tedious Screen-Share Sessions",
        description:
          "External CPAs demand hours of Zoom calls to watch engineers navigate Jira and Git repositories to verify screenshot authenticity.",
        bad: true,
      },
      evidencelog: {
        title: "Offline Zero-Trust Verifier",
        description:
          "Auditors open an air-gapped HTML file to verify raw Jira JSON exports and cryptographic checksums independently on their own laptops.",
        good: true,
      },
    },
    {
      dimension: "7. Data Privacy & Egress Threat Model",
      category: "security",
      manual: {
        title: "Screenshots Stored in Google Drive",
        description:
          "Internal source code snippets, branch names, and Jira ticket details are scattered across unencrypted employee drives and chat logs.",
        bad: true,
      },
      evidencelog: {
        title: "0.00% Network Data Egress",
        description:
          "100% Atlassian Forge native. Zero external servers, zero external databases. All data remains inside your Atlassian Cloud boundary.",
        good: true,
      },
    },
    {
      dimension: "8. Vendor Risk & Procurement Overhead",
      category: "security",
      manual: {
        title: "Lengthy 3rd-Party SaaS Reviews",
        description:
          "Connecting traditional compliance scanners requires vendor questionnaires, DPA negotiations, SOC 2 subservice reviews, and infosec sign-off.",
        bad: true,
      },
      evidencelog: {
        title: "Zero New Vendors Added",
        description:
          "Because EvidenceLog executes inside Atlassian Forge microVMs, it inherits Atlassian's existing enterprise DPA, SOC 2, and data residency.",
        good: true,
      },
    },
    {
      dimension: "9. Emergency Hotfix Management",
      category: "workflow",
      manual: {
        title: "Retroactive Screenshot Panic",
        description:
          "During a Sev-1 outage, speed is critical. Days later, engineers scramble to reconstruct who approved what during the incident.",
        bad: true,
      },
      evidencelog: {
        title: "Automated CAB Emergency Overrides",
        description:
          "Detects 'hotfix' and 'sev1' labels, allows fast emergency deployment, and automatically alerts release managers for 48h CAB sign-off.",
        good: true,
      },
    },
    {
      dimension: "10. GRC Ingestion (Vanta, Drata, Secureframe)",
      category: "compliance",
      manual: {
        title: "Manual File Drag-and-Drop",
        description:
          "Manually naming and uploading dozens of screenshot files into GRC portals, often resulting in mismatched ticket references.",
        bad: true,
      },
      evidencelog: {
        title: "1-Click Canonical JSON & CSV Dossier",
        description:
          "Export standardized Big 4 CSV workpapers and canonical JSON packets directly mapped to AICPA CC8.1, CC6.8, and ISO 27001 controls.",
        good: true,
      },
    },
    {
      dimension: "11. Audit Window Exception Rate",
      category: "compliance",
      manual: {
        title: "10% to 20% Sample Exceptions",
        description:
          "Human error causes missed peer reviews, forgotten QA labels, or missing PR links, triggering embarrassing SOC 2 audit exceptions.",
        bad: true,
      },
      evidencelog: {
        title: "0% Audit Exceptions Guaranteed",
        description:
          "The Preventive Gatekeeper blocks unverified issues from reaching 'Done' or 'Released' before they can ever become an audit defect.",
        good: true,
      },
    },
    {
      dimension: "12. Continuous Audit Readiness",
      category: "workflow",
      manual: {
        title: "Annual Stress & Crunch Sprints",
        description:
          "Audit season brings product roadmaps to a complete halt as senior engineers pivot from building features to collecting compliance evidence.",
        bad: true,
      },
      evidencelog: {
        title: "Always-On Background Sealing",
        description:
          "Evidence is gathered continuously as part of normal Jira pull request workflows. Zero crunch time, zero lost feature velocity.",
        good: true,
      },
    },
  ];

  const filteredComparisons =
    activeTab === "all"
      ? comparisons
      : comparisons.filter((item) => {
          if (activeTab === "engineering") return item.category === "workflow" || item.category === "cost";
          if (activeTab === "security") return item.category === "security" || item.category === "compliance";
          if (activeTab === "auditor") return item.category === "compliance" || item.category === "workflow";
          return true;
        });

  return (
    <div className="space-y-12">
      {/* Role / Perspective Tab Filter */}
      <div className="flex flex-wrap items-center justify-center gap-2 p-1.5 rounded-2xl bg-slate-100 max-w-xl mx-auto">
        <button
          type="button"
          onClick={() => setActiveTab("all")}
          className={`px-4 py-2 rounded-xl text-xs sm:text-sm font-semibold transition-all cursor-pointer ${
            activeTab === "all"
              ? "bg-[#111013] text-white shadow-xs"
              : "text-[#5c728e] hover:text-[#111013]"
          }`}
        >
          Complete Matrix (All 12)
        </button>
        <button
          type="button"
          onClick={() => setActiveTab("engineering")}
          className={`px-4 py-2 rounded-xl text-xs sm:text-sm font-semibold transition-all cursor-pointer ${
            activeTab === "engineering"
              ? "bg-[#111013] text-white shadow-xs"
              : "text-[#5c728e] hover:text-[#111013]"
          }`}
        >
          Engineering Leads
        </button>
        <button
          type="button"
          onClick={() => setActiveTab("security")}
          className={`px-4 py-2 rounded-xl text-xs sm:text-sm font-semibold transition-all cursor-pointer ${
            activeTab === "security"
              ? "bg-[#111013] text-white shadow-xs"
              : "text-[#5c728e] hover:text-[#111013]"
          }`}
        >
          Security &amp; GRC
        </button>
        <button
          type="button"
          onClick={() => setActiveTab("auditor")}
          className={`px-4 py-2 rounded-xl text-xs sm:text-sm font-semibold transition-all cursor-pointer ${
            activeTab === "auditor"
              ? "bg-[#111013] text-white shadow-xs"
              : "text-[#5c728e] hover:text-[#111013]"
          }`}
        >
          External Auditors
        </button>
      </div>

      {/* Side-by-Side Highlight Cards */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        {/* Method 1: The Manual Screenshot Status Quo */}
        <div className="rounded-3xl border border-rose-200 bg-rose-50/40 p-6 sm:p-8 space-y-6 shadow-sm">
          <div className="flex items-center justify-between border-b border-rose-200/80 pb-4">
            <div className="space-y-1">
              <span className="inline-flex items-center gap-1.5 text-xs font-bold uppercase tracking-wider text-rose-700">
                <AlertTriangle className="h-4 w-4 text-rose-600" />
                <span>Status Quo Method</span>
              </span>
              <h3 className="text-xl sm:text-2xl font-bold text-[#111013] font-heading">
                Manual Screenshotting
              </h3>
            </div>
            <span className="rounded-full bg-rose-100 text-rose-800 border border-rose-200 px-3 py-1 text-xs font-bold font-mono">
              HIGH RISK
            </span>
          </div>

          <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
            Developers capture ad-hoc screenshots of GitHub pull requests, PR approvals, and CI/CD pipelines, pasting them into spreadsheets or Google Drive folders during high-stress audit crunch windows.
          </p>

          <div className="space-y-3 font-mono text-xs">
            <div className="flex items-center justify-between p-3 rounded-xl bg-white/80 border border-rose-200">
              <span className="text-slate-600">Time per sample ticket:</span>
              <span className="font-bold text-rose-700">3.5 hours</span>
            </div>
            <div className="flex items-center justify-between p-3 rounded-xl bg-white/80 border border-rose-200">
              <span className="text-slate-600">Cost per audit cycle (40 samples):</span>
              <span className="font-bold text-rose-700">$11,900+ (140 hrs)</span>
            </div>
            <div className="flex items-center justify-between p-3 rounded-xl bg-white/80 border border-rose-200">
              <span className="text-slate-600">Tamper-evidence guarantee:</span>
              <span className="font-bold text-rose-700">None (Easily Edited)</span>
            </div>
            <div className="flex items-center justify-between p-3 rounded-xl bg-white/80 border border-rose-200">
              <span className="text-slate-600">Data boundary control:</span>
              <span className="font-bold text-rose-700">Loose Screenshots / Chats</span>
            </div>
          </div>

          <div className="p-4 rounded-xl bg-rose-100/60 border border-rose-200 text-xs text-rose-900 leading-relaxed space-y-1">
            <div className="font-bold flex items-center gap-1.5">
              <XCircle className="h-4 w-4 text-rose-600" />
              <span>The Engineer Tax:</span>
            </div>
            <p>
              Pulls senior staff engineers off roadmap sprints to spend days digging up old Git commits for external CPAs.
            </p>
          </div>
        </div>

        {/* Method 2: EvidenceLog Automated Sealing */}
        <div className="rounded-3xl border border-emerald-300 bg-emerald-50/50 p-6 sm:p-8 space-y-6 shadow-md relative overflow-hidden">
          <div className="absolute top-0 right-0 bg-[#dbf1c3] text-[#0f5132] text-[10px] font-bold uppercase tracking-wider px-4 py-1 rounded-bl-xl font-heading">
            RECOMMENDED FOR SOC 2 &amp; ISO 27001
          </div>

          <div className="flex items-center justify-between border-b border-emerald-200 pb-4">
            <div className="space-y-1">
              <span className="inline-flex items-center gap-1.5 text-xs font-bold uppercase tracking-wider text-[#15803d]">
                <Sparkles className="h-4 w-4" />
                <span>Modern Continuous Standard</span>
              </span>
              <h3 className="text-xl sm:text-2xl font-bold text-[#111013] font-heading">
                EvidenceLog for Jira Cloud
              </h3>
            </div>
            <span className="rounded-full bg-emerald-100 text-[#15803d] border border-emerald-300 px-3 py-1 text-xs font-bold font-mono">
              ZERO FRICTION
            </span>
          </div>

          <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
            Continuous background evaluation of every Jira issue transition. Programmatic gatekeepers block non-compliant code from reaching production, while cryptographic SHA-256 seals guarantee audit immutability.
          </p>

          <div className="space-y-3 font-mono text-xs">
            <div className="flex items-center justify-between p-3 rounded-xl bg-white border border-emerald-200 shadow-2xs">
              <span className="text-slate-600">Time per sample ticket:</span>
              <span className="font-bold text-[#15803d]">0.0 seconds (Auto)</span>
            </div>
            <div className="flex items-center justify-between p-3 rounded-xl bg-white border border-emerald-200 shadow-2xs">
              <span className="text-slate-600">Cost per audit cycle (40 samples):</span>
              <span className="font-bold text-[#15803d]">$0 - $49/mo (Net $11,300+ saved)</span>
            </div>
            <div className="flex items-center justify-between p-3 rounded-xl bg-white border border-emerald-200 shadow-2xs">
              <span className="text-slate-600">Tamper-evidence guarantee:</span>
              <span className="font-bold text-[#15803d]">SHA-256 + Binary Merkle Root</span>
            </div>
            <div className="flex items-center justify-between p-3 rounded-xl bg-white border border-emerald-200 shadow-2xs">
              <span className="text-slate-600">Data boundary control:</span>
              <span className="font-bold text-[#15803d]">100% In-Tenant Forge (0 Egress)</span>
            </div>
          </div>

          <div className="p-4 rounded-xl bg-emerald-100/70 border border-emerald-200 text-xs text-emerald-950 leading-relaxed space-y-1">
            <div className="font-bold flex items-center gap-1.5 text-[#15803d]">
              <CheckCircle2 className="h-4 w-4" />
              <span>Sprint Velocity Preserved:</span>
            </div>
            <p>
              Developers never leave Jira or spend weekends gathering evidence. 1-click in-situ remediation fixes missing criteria in seconds.
            </p>
          </div>
        </div>
      </div>

      {/* Comprehensive 12-Point Comparison Matrix Table */}
      <div className="space-y-4">
        <div className="flex items-center justify-between">
          <h3 className="text-xl sm:text-2xl font-bold text-[#111013] font-heading">
            Detailed Dimension-by-Dimension Matrix
          </h3>
          <span className="text-xs text-[#5c728e] font-medium hidden sm:inline">
            Showing {filteredComparisons.length} criteria
          </span>
        </div>

        <div className="overflow-x-auto rounded-3xl border border-slate-200 bg-white shadow-xs">
          <table className="w-full text-left text-xs border-collapse">
            <thead>
              <tr className="border-b border-slate-200 bg-slate-50 text-[#111013] font-heading uppercase tracking-wider text-[11px]">
                <th className="p-4 sm:p-5 w-1/4">Evaluation Dimension</th>
                <th className="p-4 sm:p-5 w-3/8 bg-rose-50/30 text-rose-900 border-x border-slate-200">
                  Manual Screenshot Workflow
                </th>
                <th className="p-4 sm:p-5 w-3/8 bg-emerald-50/30 text-[#15803d]">
                  EvidenceLog for Jira Cloud
                </th>
              </tr>
            </thead>
            <tbody className="divide-y divide-slate-100">
              {filteredComparisons.map((item, idx) => (
                <tr key={idx} className="hover:bg-slate-50/60 transition-colors">
                  {/* Dimension */}
                  <td className="p-4 sm:p-5 font-bold text-[#111013] align-top text-xs sm:text-sm">
                    {item.dimension}
                  </td>

                  {/* Manual */}
                  <td className="p-4 sm:p-5 bg-rose-50/20 border-x border-slate-100 align-top space-y-1.5">
                    <div className="flex items-center gap-1.5 font-bold text-rose-700 text-xs sm:text-sm">
                      <XCircle className="h-4 w-4 shrink-0 text-rose-500" />
                      <span>{item.manual.title}</span>
                    </div>
                    <p className="text-[#5c728e] leading-relaxed text-xs">
                      {item.manual.description}
                    </p>
                  </td>

                  {/* EvidenceLog */}
                  <td className="p-4 sm:p-5 bg-emerald-50/20 align-top space-y-1.5">
                    <div className="flex items-center gap-1.5 font-bold text-[#15803d] text-xs sm:text-sm">
                      <CheckCircle2 className="h-4 w-4 shrink-0 text-emerald-600" />
                      <span>{item.evidencelog.title}</span>
                    </div>
                    <p className="text-slate-700 leading-relaxed text-xs">
                      {item.evidencelog.description}
                    </p>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>

      {/* Action / Sample Proof Callout */}
      <div className="rounded-3xl bg-[#111013] text-white p-6 sm:p-10 shadow-xl flex flex-col sm:flex-row items-center justify-between gap-6">
        <div className="space-y-2 text-center sm:text-left">
          <div className="inline-flex items-center gap-1.5 text-xs font-bold text-[#dbf1c3] font-mono">
            <Lock className="h-3.5 w-3.5" />
            <span>SEE REAL AUDIT EVIDENCE IN ACTION</span>
          </div>
          <h4 className="text-lg sm:text-2xl font-bold font-heading text-white">
            Inspect a verified 5/5 EvidenceLog audit certificate &amp; raw JSON
          </h4>
          <p className="text-xs sm:text-sm text-slate-300 max-w-xl">
            See the exact cryptographic artifact external Big 4 CPAs and compliance platforms receive.
          </p>
        </div>

        <div className="flex flex-col sm:flex-row items-center gap-3 shrink-0 w-full sm:w-auto">
          <button
            type="button"
            onClick={() => setIsModalOpen(true)}
            className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-5 py-3 rounded-xl bg-white text-[#111013] hover:bg-slate-100 font-semibold text-xs transition-all shadow-xs cursor-pointer"
          >
            <FileText className="h-4 w-4 text-[#15803d]" />
            <span>Inspect Sample Report</span>
          </button>
          <a
            href="https://marketplace.atlassian.com"
            target="_blank"
            rel="noopener noreferrer"
            className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-3 rounded-xl bg-[#dbf1c3] hover:bg-white text-[#111013] font-bold text-xs transition-all shadow-md cursor-pointer"
          >
            <span>Install Free on Jira</span>
            <ArrowRight className="h-4 w-4" />
          </a>
        </div>
      </div>

      {/* Vector Sample Report Modal */}
      <AuditModal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} />
    </div>
  );
}