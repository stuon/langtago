"use client";

import { useState } from "react";
import { Check, Sparkles } from "lucide-react";

type FrameworkKey = "SOC2" | "ISO27001" | "HIPAA" | "FEDRAMP" | "NIST" | "PCIDSS";

export default function RegulatoryMatrix() {
  const [activeFramework, setActiveFramework] = useState<FrameworkKey>("SOC2");

  const frameworks: Record<
    FrameworkKey,
    {
      name: string;
      shortName: string;
      badge: string;
      description: string;
      controls: Array<{
        pillar: string;
        controlId: string;
        mandate: string;
        automatedCheck: string;
        artifact: string;
      }>;
    }
  > = {
    SOC2: {
      name: "AICPA SOC 2 Type II",
      shortName: "SOC 2 Type II",
      badge: "CC8.1 / CC6.8 / CC7.1",
      description: "Automated evidence for Trust Services Criteria change authorization, segregation of duties, and testing.",
      controls: [
        {
          pillar: "Traceability",
          controlId: "CC8.1",
          mandate: "Changes are authorized, designed, and tested prior to release.",
          automatedCheck: "Validates Given/When/Then acceptance criteria & merged PR link.",
          artifact: "Canonical PR & commit linkage record",
        },
        {
          pillar: "Segregation of Duties",
          controlId: "CC6.8",
          mandate: "Incompatible duties are segregated (no self-approval).",
          automatedCheck: "Enforces Author != Approver and verifies peer review timestamps.",
          artifact: "Dual-identity audit block (Actor hashes)",
        },
        {
          pillar: "QA Verification",
          controlId: "CC8.1",
          mandate: "Documented test results confirm functional accuracy.",
          automatedCheck: "Detects QA workflow transitions, 'qa-verified' labels, or test runs.",
          artifact: "QA Engineer sign-off attestation",
        },
        {
          pillar: "Security & Rollback",
          controlId: "CC7.1 / CC8.1",
          mandate: "Security scans verified; rollback procedures documented.",
          automatedCheck: "Verifies Snyk/Trivy/SonarQube passes and backout plan checklist.",
          artifact: "SAST scan digest & rollback protocol",
        },
      ],
    },
    ISO27001: {
      name: "ISO/IEC 27001:2022",
      shortName: "ISO 27001",
      badge: "Annex A Controls",
      description: "International standard covering secure software development lifecycle and change controls.",
      controls: [
        {
          pillar: "Change Management",
          controlId: "A.8.32",
          mandate: "Software modifications follow formal change management.",
          automatedCheck: "Enforces scope boundaries and multi-provider repository PR links.",
          artifact: "Forge KVS encrypted change ledger",
        },
        {
          pillar: "Secure Development",
          controlId: "A.8.25",
          mandate: "Rules for secure development applied across all commits.",
          automatedCheck: "Validates peer code reviews and branch protection compliance.",
          artifact: "Peer review cryptographic signature",
        },
        {
          pillar: "Security Testing",
          controlId: "A.8.29",
          mandate: "Security testing conducted prior to acceptance.",
          automatedCheck: "Detects SAST/DAST verification and passing test suites.",
          artifact: "Automated scan certification badge",
        },
        {
          pillar: "Technical Vulnerability",
          controlId: "A.8.28",
          mandate: "Vulnerabilities mitigated prior to production deploy.",
          automatedCheck: "Enforces zero Critical/High vulnerabilities before Done transition.",
          artifact: "Vulnerability scan attestation",
        },
      ],
    },
    HIPAA: {
      name: "HIPAA Security Rule",
      shortName: "HIPAA",
      badge: "45 CFR §164.312",
      description: "Technical safeguards protecting ePHI through strict audit controls and transmission security.",
      controls: [
        {
          pillar: "Audit Controls",
          controlId: "§164.312(b)",
          mandate: "Implement hardware, software, and procedural audit mechanisms.",
          automatedCheck: "Captures immutable event timeline for every ticket transition.",
          artifact: "SHA-256 tamper-evident log digest",
        },
        {
          pillar: "Access Control",
          controlId: "§164.312(a)",
          mandate: "Unique user identification and dual-person authorization.",
          automatedCheck: "Blocks ticket self-closure by developers touching ePHI components.",
          artifact: "Authorized approver identity token",
        },
        {
          pillar: "Integrity Verification",
          controlId: "§164.312(c)",
          mandate: "Corroborate that ePHI software has not been altered or tampered with.",
          automatedCheck: "Release Merkle root hash proves binary release integrity.",
          artifact: "Release-level Merkle root checksum",
        },
      ],
    },
    FEDRAMP: {
      name: "FedRAMP / NIST SP 800-53",
      shortName: "FedRAMP",
      badge: "Rev 5 Moderate / High",
      description: "Federal risk authorization requirements for change control and vulnerability monitoring.",
      controls: [
        {
          pillar: "Configuration Control",
          controlId: "CM-3",
          mandate: "Track and approve configuration changes against baselines.",
          automatedCheck: "Links git commits and pull requests directly to baseline tickets.",
          artifact: "Full change-control traceability matrix",
        },
        {
          pillar: "Separation of Duties",
          controlId: "AC-5",
          mandate: "Separate duties to prevent unauthorized modifications.",
          automatedCheck: "Enforces independent author/approver segregation on all changes.",
          artifact: "Dual-identity verification block",
        },
        {
          pillar: "Vulnerability Monitoring",
          controlId: "RA-5",
          mandate: "Monitor and remediate application and container vulnerabilities.",
          automatedCheck: "Requires automated Snyk/Trivy scan pass before gatekeeper approval.",
          artifact: "Security scanner trace report",
        },
      ],
    },
    NIST: {
      name: "NIST Cybersecurity Framework 2.0",
      shortName: "NIST CSF 2.0",
      badge: "PR.PS / PR.AA / DE.CM",
      description: "Guidance across Protect, Detect, and Respond functions for software supply chain security.",
      controls: [
        {
          pillar: "Software Integrity",
          controlId: "PR.PS-02",
          mandate: "Software and dependencies are validated and approved for use.",
          automatedCheck: "Verifies dependency scanning and Merkle tree release integrity.",
          artifact: "Release Merkle root hash linking tickets",
        },
        {
          pillar: "Separation of Duties",
          controlId: "PR.AA-05",
          mandate: "Access permissions and duties separated to minimize change risks.",
          automatedCheck: "Workflow gatekeeper prevents self-approval of updates.",
          artifact: "Peer approval non-repudiation timestamp",
        },
        {
          pillar: "Continuous Monitoring",
          controlId: "DE.CM-01",
          mandate: "Environments continuously monitored for anomalies.",
          automatedCheck: "Entity property indexing enables real-time compliance queries via JQL.",
          artifact: "Indexed entity properties via Jira REST API",
        },
      ],
    },
    PCIDSS: {
      name: "PCI-DSS v4.0",
      shortName: "PCI-DSS v4.0",
      badge: "Requirement 6.4 & 6.5",
      description: "Payment card industry standard governing secure development and change authorization.",
      controls: [
        {
          pillar: "Change Procedures",
          controlId: "Req 6.5",
          mandate: "Software components managed under formal change processes.",
          automatedCheck: "Requires explicit impact evaluation and rollback documentation.",
          artifact: "Formal change documentation record",
        },
        {
          pillar: "Separation of Duties",
          controlId: "Req 6.5.1",
          mandate: "Separate duties between development and testing personnel.",
          automatedCheck: "Enforces independent QA verification role separate from developers.",
          artifact: "QA verification badge & signature",
        },
        {
          pillar: "Vulnerability Remediation",
          controlId: "Req 6.4.2",
          mandate: "Identify and remediate vulnerabilities before production deploy.",
          automatedCheck: "Inspects SAST/DAST verification traces for OWASP mitigations.",
          artifact: "Automated scan verification flag",
        },
      ],
    },
  };

  const current = frameworks[activeFramework];

  return (
    <section className="relative py-16 border-t border-white/[0.06] bg-[#070b12]">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-2xl text-center space-y-2">
          <div className="inline-flex items-center gap-2 font-mono text-[11px] tracking-wider text-emerald-400 uppercase">
            <span className="h-1.5 w-1.5 rounded-full bg-emerald-400" />
            <span>Multi-Framework Crosswalk</span>
          </div>
          <h2 className="text-2xl font-bold tracking-tight text-white sm:text-3xl">
            One Jira workflow. All major audits passed.
          </h2>
          <p className="text-xs sm:text-sm text-zinc-400">
            Automatically satisfies auditor requirements across global compliance standards.
          </p>
        </div>

        {/* Framework Selector Tabs */}
        <div className="mt-8 flex flex-wrap items-center justify-center gap-1.5 sm:gap-2">
          {(Object.keys(frameworks) as FrameworkKey[]).map((key) => {
            const fw = frameworks[key];
            const isActive = activeFramework === key;
            return (
              <button
                key={key}
                type="button"
                onClick={() => setActiveFramework(key)}
                className={`rounded-lg px-3.5 py-1.5 font-mono text-xs font-semibold transition-all ${
                  isActive
                    ? "bg-emerald-500 text-slate-950 shadow-md shadow-emerald-500/20"
                    : "border border-slate-800 bg-slate-900/60 text-slate-400 hover:border-slate-700 hover:text-white"
                }`}
              >
                {fw.shortName}
              </button>
            );
          })}
        </div>

        {/* Framework Crosswalk Table Card */}
        <div className="mt-6 rounded-xl border border-slate-800 bg-[#090d16] shadow-xl overflow-hidden">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 px-5 py-4 border-b border-slate-800 bg-slate-900/40">
            <div className="flex items-center gap-2">
              <h3 className="text-base font-bold text-white">{current.name}</h3>
              <span className="rounded bg-emerald-500/10 px-2 py-0.5 font-mono text-[11px] text-emerald-400 border border-emerald-500/20 font-semibold">
                {current.badge}
              </span>
            </div>
            <div className="flex items-center gap-1.5 text-xs font-mono text-emerald-400">
              <Sparkles className="h-3.5 w-3.5" />
              <span>Zero-Manual Cross-Mapping</span>
            </div>
          </div>

          {/* Scannable Control Table */}
          <div className="overflow-x-auto">
            <table className="w-full text-left text-xs">
              <thead className="border-b border-slate-800 bg-slate-950/70 font-mono text-[11px] text-slate-400 uppercase tracking-wider">
                <tr>
                  <th className="py-3 px-4 font-semibold">Control ID</th>
                  <th className="py-3 px-4 font-semibold">Requirement</th>
                  <th className="py-3 px-4 font-semibold">EvidenceLog Automation</th>
                  <th className="py-3 px-4 font-semibold">Auditor Artifact</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-800/60 font-sans">
                {current.controls.map((control, idx) => (
                  <tr key={idx} className="hover:bg-slate-900/40 transition-colors">
                    <td className="py-3.5 px-4 font-mono font-semibold text-emerald-400 whitespace-nowrap">
                      <div className="flex items-center gap-1.5">
                        <span className="h-1.5 w-1.5 rounded-full bg-emerald-400" />
                        <span>{control.controlId}</span>
                      </div>
                      <span className="text-[10px] text-slate-500 block font-normal font-mono mt-0.5">
                        {control.pillar}
                      </span>
                    </td>
                    <td className="py-3.5 px-4 text-slate-300 max-w-xs leading-relaxed">
                      {control.mandate}
                    </td>
                    <td className="py-3.5 px-4 text-slate-400 max-w-sm leading-relaxed">
                      <span className="text-emerald-400 font-mono text-[11px] mr-1">✓</span>
                      {control.automatedCheck}
                    </td>
                    <td className="py-3.5 px-4 font-mono text-[11px] text-slate-400 whitespace-nowrap">
                      <span className="inline-flex items-center gap-1 rounded bg-slate-800/80 px-2 py-0.5 text-slate-300 border border-slate-700/60">
                        <Check className="h-3 w-3 text-emerald-400" />
                        <span>{control.artifact}</span>
                      </span>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </section>
  );
}
