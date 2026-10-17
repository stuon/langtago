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
      description:
        "Trust Services Criteria governing change authorization, segregation of developer duties, pre-release testing, and vulnerability management.",
      controls: [
        {
          pillar: "Pillar 1: Traceability",
          controlId: "CC8.1",
          mandate: "System changes are authorized, designed, and tested prior to release.",
          automatedCheck:
            "Verifies explicit Acceptance Criteria (Given/When/Then) and linked Git pull requests across GitHub, GitLab, and Bitbucket.",
          artifact: "Cryptographic canonical record & PR linkage map",
        },
        {
          pillar: "Pillar 2: Segregation of Duties",
          controlId: "CC6.8 / CC8.1",
          mandate: "Incompatible duties are segregated so no single person can author and deploy changes.",
          automatedCheck:
            "Inspects Jira changelog and comments. Blocks author from self-approving or closing their own ticket without independent peer review.",
          artifact: "Author vs. Approver account IDs & immutable transition timestamps",
        },
        {
          pillar: "Pillar 3: QA & Testing",
          controlId: "CC8.1",
          mandate: "Documented test results and sign-offs verify functional accuracy before production deploy.",
          automatedCheck:
            "Scans for QA workflow status transition, 'qa-verified' labels, or explicit QA sign-off comments.",
          artifact: "QA Engineer identity, test execution confirmation, and audit logs",
        },
        {
          pillar: "Pillar 4: Security & Rollback",
          controlId: "CC7.1 / CC8.1",
          mandate: "Vulnerabilities are identified and mitigated; backout procedures exist for emergency rollback.",
          automatedCheck:
            "Inspects CI security scan traces (Snyk, SonarQube, Trivy) and verifies documented rollback steps.",
          artifact: "Security scanner confirmation & rollback procedure attestation",
        },
      ],
    },
    ISO27001: {
      name: "ISO/IEC 27001:2022",
      shortName: "ISO 27001:2022",
      badge: "Annex A Controls",
      description:
        "International Information Security Management Standard covering secure development lifecycles, technical vulnerability management, and change controls.",
      controls: [
        {
          pillar: "Pillar 1: Change Management",
          controlId: "A.8.32",
          mandate: "Changes to information processing facilities and software are subject to formal change control.",
          automatedCheck:
            "Enforces Jira ticket scope boundaries, change justification, and multi-provider repository branch links.",
          artifact: "Formal change record indexed in Atlassian Forge KVS",
        },
        {
          pillar: "Pillar 2: Secure Development",
          controlId: "A.8.25",
          mandate: "Rules for secure development lifecycle are established and applied.",
          automatedCheck:
            "Validates peer code review approval prior to merge and ensures branch protections are adhered to.",
          artifact: "Peer reviewer cryptographic signature & approval timestamp",
        },
        {
          pillar: "Pillar 3: Security Testing",
          controlId: "A.8.29",
          mandate: "Security testing is performed during development and acceptance.",
          automatedCheck:
            "Detects SAST/DAST integration traces and pre-release acceptance testing sign-offs.",
          artifact: "Testing log linkage and scanner certification badge",
        },
        {
          pillar: "Pillar 4: Technical Vulnerabilities",
          controlId: "A.8.28",
          mandate: "Information about technical vulnerabilities of information systems is obtained and evaluated.",
          automatedCheck:
            "Scans for automated vulnerability triage labels (Snyk, Dependabot, Trivy, OWASP ZAP).",
          artifact: "Vulnerability scanner artifact ID & clean verification flag",
        },
      ],
    },
    HIPAA: {
      name: "HIPAA Security Rule",
      shortName: "HIPAA",
      badge: "45 CFR § 164.312",
      description:
        "Healthcare data protection standard requiring rigorous audit controls, system activity review, and role-based segregation for ePHI environments.",
      controls: [
        {
          pillar: "Pillar 1: Audit Controls",
          controlId: "§ 164.312(b)",
          mandate: "Implement hardware, software, and procedural mechanisms that record and examine system activity.",
          automatedCheck:
            "Maintains an immutable, tamper-evident record of all issue state changes and deployments in encrypted storage.",
          artifact: "SHA-256 HMAC digest sealed against Jira audit log timestamps",
        },
        {
          pillar: "Pillar 2: Information System Review",
          controlId: "§ 164.308(a)(1)(ii)(D)",
          mandate: "Regularly review records of information system activity such as audit logs and security incident reports.",
          automatedCheck:
            "Provides project-level Executive Audit Hub and automated JQL queries for continuous compliance review.",
          artifact: "One-click Release Audit Dossier & executive compliance attestation",
        },
        {
          pillar: "Pillar 3: Segregation of Duties",
          controlId: "§ 164.308(a)(3)",
          mandate: "Ensure role-based workforce access and segregation for healthcare application modifications.",
          automatedCheck:
            "Prevents single-developer unauthorized release into ePHI environments without independent medical tech review.",
          artifact: "Independent review record verified by Atlassian Cloud IAM",
        },
      ],
    },
    FEDRAMP: {
      name: "FedRAMP Moderate / High",
      shortName: "FedRAMP",
      badge: "NIST SP 800-53 Rev 5",
      description:
        "Federal government cloud security standard with stringent configuration change control and dual-approval requirements.",
      controls: [
        {
          pillar: "Pillar 1: Configuration Change Control",
          controlId: "CM-3",
          mandate: "Track and approve configuration changes to systems in accordance with formal policies.",
          automatedCheck:
            "Monitors Jira issue change histories, linking git commits directly to approved baseline tickets.",
          artifact: "Full change-control traceability matrix",
        },
        {
          pillar: "Pillar 2: Separation of Duties",
          controlId: "AC-5",
          mandate: "Separate duties of individuals to prevent unauthorized modifications to federal systems.",
          automatedCheck:
            "Enforces independent author/approver segregation on all production-bound Jira tickets.",
          artifact: "Dual-identity verification block with Atlassian account hashes",
        },
        {
          pillar: "Pillar 3: Vulnerability Monitoring",
          controlId: "RA-5",
          mandate: "Monitor and remediate vulnerabilities identified in application source and container images.",
          automatedCheck:
            "Requires automated security scan confirmation (Trivy/Snyk/SonarQube) prior to gatekeeper sign-off.",
          artifact: "Security scanner trace identification report",
        },
      ],
    },
    NIST: {
      name: "NIST Cybersecurity Framework 2.0",
      shortName: "NIST CSF 2.0",
      badge: "PR.PS / PR.AA / DE.CM",
      description:
        "Foundational cybersecurity guidance across Protect, Detect, and Respond functions for software supply chain security.",
      controls: [
        {
          pillar: "Pillar 1: Software Integrity",
          controlId: "PR.PS-02",
          mandate: "Software and dependencies are maintained, validated, and approved for use.",
          automatedCheck:
            "Verifies dependency scanning and cryptographic Merkle tree integrity across all release commits.",
          artifact: "Release Merkle root hash linking all release tickets",
        },
        {
          pillar: "Pillar 2: Separation of Duties",
          controlId: "PR.AA-05",
          mandate: "Access permissions and duties are separated to minimize malicious or accidental change risks.",
          automatedCheck:
            "Workflow gatekeeper prevents self-approval of software updates and critical bug fixes.",
          artifact: "Peer approval record with non-repudiation timestamps",
        },
        {
          pillar: "Pillar 3: Continuous Monitoring",
          controlId: "DE.CM-01",
          mandate: "Networks and environments are continuously monitored to find cybersecurity anomalies.",
          automatedCheck:
            "Continuous Jira entity property indexing enables real-time compliance alerting and drift detection.",
          artifact: "Indexed entity properties queryable via Jira REST API & JQL",
        },
      ],
    },
    PCIDSS: {
      name: "PCI-DSS v4.0",
      shortName: "PCI-DSS v4.0",
      badge: "Requirement 6.4 & 6.5",
      description:
        "Payment Card Industry standard governing secure software development and change controls for systems processing cardholder data.",
      controls: [
        {
          pillar: "Pillar 1: Change Control Procedures",
          controlId: "Req 6.5",
          mandate: "Changes to all software components are managed according to formal change control processes.",
          automatedCheck:
            "Requires explicit impact evaluation, acceptance criteria, and rollback documentation for payment paths.",
          artifact: "Formal change documentation record",
        },
        {
          pillar: "Pillar 2: Separation of Environments & Duties",
          controlId: "Req 6.5.1",
          mandate: "Separate development, test, and production environments; separate duties between dev and test.",
          automatedCheck:
            "Enforces independent QA verification role separate from developers pushing code.",
          artifact: "QA verification badge and transition signature",
        },
        {
          pillar: "Pillar 3: Vulnerability Remediation",
          controlId: "Req 6.4.2",
          mandate: "Identify and remediate software security vulnerabilities before deploying to production.",
          automatedCheck:
            "Inspects SAST/DAST verification traces for OWASP Top 10 mitigation verification.",
          artifact: "Automated vulnerability scan verification flag",
        },
      ],
    },
  };

  const current = frameworks[activeFramework];

  return (
    <section className="relative py-20 border-t border-white/[0.06] bg-[#070b12]">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-2xl text-center space-y-3">
          <div className="inline-flex items-center gap-2 font-mono text-xs tracking-wider text-emerald-400 uppercase">
            <span className="h-1.5 w-1.5 rounded-full bg-emerald-400" />
            <span>Multi-Framework Compliance Engine</span>
          </div>
          <h2 className="text-3xl font-bold tracking-tight text-white sm:text-4xl">
            One Jira workflow. All major audits passed.
          </h2>
          <p className="text-sm text-zinc-400">
            EvidenceLog natively cross-maps your development and change-management activities across global regulatory frameworks.
          </p>
        </div>

        {/* Framework Selector Tabs */}
        <div className="mt-8 flex flex-wrap items-center justify-center gap-2">
          {(Object.keys(frameworks) as FrameworkKey[]).map((key) => {
            const fw = frameworks[key];
            const isActive = activeFramework === key;
            return (
              <button
                key={key}
                type="button"
                onClick={() => setActiveFramework(key)}
                className={`rounded-xl px-4 py-2 font-mono text-xs font-semibold transition-all ${
                  isActive
                    ? "bg-emerald-500 text-slate-950 shadow-lg shadow-emerald-500/20"
                    : "border border-slate-800 bg-slate-900/60 text-slate-400 hover:border-slate-700 hover:text-white"
                }`}
              >
                {fw.shortName}
              </button>
            );
          })}
        </div>

        {/* Framework Detail Card */}
        <div className="mt-8 rounded-2xl border border-slate-800 bg-[#090d16] p-6 sm:p-8 shadow-2xl">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 pb-6 border-b border-slate-800">
            <div>
              <div className="flex items-center gap-2">
                <h3 className="text-xl font-bold text-white">{current.name}</h3>
                <span className="rounded bg-emerald-500/20 px-2 py-0.5 font-mono text-xs text-emerald-300 font-semibold">
                  {current.badge}
                </span>
              </div>
              <p className="mt-1 text-xs text-slate-400 max-w-2xl">{current.description}</p>
            </div>
            <div className="flex items-center gap-2 text-xs font-mono text-emerald-400">
              <Sparkles className="h-4 w-4" />
              <span>Zero-Manual-Effort Cross-Mapping</span>
            </div>
          </div>

          {/* Controls Grid */}
          <div className="mt-6 grid grid-cols-1 md:grid-cols-2 gap-4">
            {current.controls.map((control, idx) => (
              <div
                key={idx}
                className="rounded-xl border border-slate-800/80 bg-slate-950/60 p-4 space-y-3 hover:border-emerald-500/30 transition-colors"
              >
                <div className="flex items-center justify-between">
                  <span className="font-semibold text-white text-xs">{control.pillar}</span>
                  <span className="font-mono text-[11px] font-bold text-emerald-400 bg-emerald-950/80 border border-emerald-800/60 px-2 py-0.5 rounded">
                    {control.controlId}
                  </span>
                </div>

                <div>
                  <span className="text-[10px] font-mono text-slate-500 uppercase tracking-wider block">
                    REGULATORY MANDATE:
                  </span>
                  <p className="text-xs text-slate-300 mt-0.5 leading-relaxed">{control.mandate}</p>
                </div>

                <div>
                  <span className="text-[10px] font-mono text-slate-500 uppercase tracking-wider block">
                    EVIDENCELOG AUTOMATION:
                  </span>
                  <p className="text-xs text-slate-400 mt-0.5 leading-relaxed">{control.automatedCheck}</p>
                </div>

                <div className="pt-2 border-t border-slate-800/60 flex items-center gap-1.5 text-[11px] font-mono text-emerald-400">
                  <Check className="h-3 w-3 shrink-0" />
                  <span className="truncate">{control.artifact}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
