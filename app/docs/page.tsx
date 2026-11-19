"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import {
  ShieldCheck,
  Lock,
  FileText,
  Copy,
  Check,
  ExternalLink,
  Sliders,
  Workflow,
  Search,
  ShieldAlert,
  Code2,
  Layers,
  FileSpreadsheet,
  Download,
  AlertTriangle,
  Cpu,
  RefreshCw,
  HelpCircle,
  Hash,
  Terminal,
} from "lucide-react";

export default function DocsPage() {
  const [activeSection, setActiveSection] = useState("overview");
  const [copiedId, setCopiedId] = useState<string | null>(null);
  const [searchQuery, setSearchQuery] = useState("");

  const handleCopy = (id: string, text: string) => {
    navigator.clipboard.writeText(text);
    setCopiedId(id);
    setTimeout(() => setCopiedId(null), 2000);
  };

  const navCategories = [
    {
      title: "Platform & Architecture",
      items: [
        { id: "overview", label: "Product Overview & Architecture" },
        { id: "quickstart", label: "2-Minute Quickstart" },
      ],
    },
    {
      title: "Core Verification",
      items: [
        { id: "five-pillars", label: "The 5 Compliance Pillars" },
        { id: "issue-panel", label: "Issue Compliance Panel" },
        { id: "quick-remediation", label: "1-Click In-Situ Quick Fixes" },
        { id: "workflow-gatekeeper", label: "Preventive Workflow Gatekeeper" },
      ],
    },
    {
      title: "Executive & Auditor Hub",
      items: [
        { id: "audit-hub", label: "Project Audit Hub & 7 KPIs" },
        { id: "batch-certification", label: "1-Click Batch Certification" },
        { id: "auditor-exports", label: "Big 4 CSV & PDF Certificates" },
        { id: "release-attestation", label: "Executive Release Attestation" },
      ],
    },
    {
      title: "Security & Integrations",
      items: [
        { id: "cryptography-merkle", label: "SHA-256 & Binary Merkle Roots" },
        { id: "offline-verifier", label: "Air-Gapped Offline Verifier" },
        { id: "vanta-drata", label: "Vanta & Drata Continuous Sync" },
        { id: "jql-properties", label: "Native JQL Search & Properties" },
        { id: "policy-engine", label: "Project Policy Configuration GUI" },
        { id: "regulatory-mappings", label: "Regulatory Standards Mapping" },
      ],
    },
    {
      title: "Support & Troubleshooting",
      items: [
        { id: "support-playbook", label: "Support & Debugging Playbook" },
      ],
    },
  ];

  // Scrollspy effect
  useEffect(() => {
    const handleScroll = () => {
      const sections = document.querySelectorAll("section[id]");
      const scrollPos = window.scrollY + 120;
      sections.forEach((section) => {
        const top = (section as HTMLElement).offsetTop;
        const height = (section as HTMLElement).offsetHeight;
        const id = section.getAttribute("id");
        if (id && scrollPos >= top && scrollPos < top + height) {
          setActiveSection(id);
        }
      });
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollTo = (id: string) => {
    setActiveSection(id);
    const element = document.getElementById(id);
    if (element) {
      const topOffset = 90;
      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - topOffset;
      window.scrollTo({
        top: offsetPosition,
        behavior: "smooth",
      });
    }
  };

  return (
    <div className="min-h-screen bg-white text-[#111013] selection:bg-[#dbf1c3] selection:text-[#0f5132]">
      <Navbar isProductPage={false} />

      {/* Top Breadcrumb & Document Action Bar */}
      <div className="border-b border-slate-200 bg-slate-50/80 sticky top-16 z-30 backdrop-blur-md">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-3 flex items-center justify-between gap-4">
          <div className="flex items-center gap-2 text-xs sm:text-sm text-[#5c728e] font-medium">
            <Link href="/" className="hover:text-[#111013]">
              Langtago
            </Link>
            <span>/</span>
            <span className="font-semibold text-[#111013]">EvidenceLog Documentation</span>
            <span className="hidden sm:inline-block rounded bg-[#dbf1c3] px-2 py-0.5 text-[10px] font-bold text-[#0f5132] uppercase">
              Production Knowledge Base
            </span>
          </div>

          <div className="flex items-center gap-2">
            <a
              href="/docs/verifier.html"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg border border-slate-200 bg-white text-xs font-semibold text-[#111013] hover:bg-slate-50 transition-colors shadow-2xs"
            >
              <span>Offline Verifier</span>
              <ExternalLink className="h-3 w-3 text-slate-400" />
            </a>
            <a
              href="/docs/evidencelog-user-guide.md"
              download="EvidenceLog-User-Guide.md"
              className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-[#111013] text-white hover:bg-[#15803d] text-xs font-semibold transition-colors shadow-2xs"
            >
              <Download className="h-3 w-3" />
              <span>Download Markdown</span>
            </a>
          </div>
        </div>
      </div>

      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">
          {/* Left Sticky Sidebar (3 cols) */}
          <aside className="lg:col-span-3 sticky top-32 max-h-[calc(100vh-140px)] overflow-y-auto pr-3 hidden lg:block scrollbar-thin">
            {/* Quick Filter */}
            <div className="relative mb-6">
              <Search className="absolute left-3 top-2.5 h-3.5 w-3.5 text-slate-400" />
              <input
                type="text"
                placeholder="Filter documentation..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full pl-8 pr-3 py-1.5 text-xs rounded-xl border border-slate-200 bg-slate-50/50 focus:bg-white focus:outline-none focus:ring-1 focus:ring-[#15803d]"
              />
            </div>

            <nav className="space-y-6">
              {navCategories.map((cat, idx) => {
                const filteredItems = cat.items.filter((item) =>
                  item.label.toLowerCase().includes(searchQuery.toLowerCase())
                );
                if (filteredItems.length === 0) return null;

                return (
                  <div key={idx} className="space-y-2">
                    <h5 className="text-[11px] font-bold uppercase tracking-wider text-slate-400 font-heading">
                      {cat.title}
                    </h5>
                    <ul className="space-y-1 text-xs">
                      {filteredItems.map((item) => {
                        const isActive = activeSection === item.id;
                        return (
                          <li key={item.id}>
                            <button
                              type="button"
                              onClick={() => scrollTo(item.id)}
                              className={`w-full text-left px-2.5 py-1.5 rounded-lg transition-colors flex items-center justify-between cursor-pointer ${
                                isActive
                                  ? "bg-emerald-50 text-[#15803d] font-bold"
                                  : "text-[#5c728e] hover:text-[#111013] hover:bg-slate-50"
                              }`}
                            >
                              <span>{item.label}</span>
                              {isActive && <span className="h-1.5 w-1.5 rounded-full bg-[#15803d]" />}
                            </button>
                          </li>
                        );
                      })}
                    </ul>
                  </div>
                );
              })}
            </nav>
          </aside>

          {/* Main Documentation Content Area (9 cols) */}
          <main className="lg:col-span-9 space-y-16">
            {/* Document Header */}
            <div className="border-b border-slate-100 pb-8 space-y-4">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-md bg-emerald-50 text-[#15803d] text-xs font-semibold">
                <ShieldCheck className="h-4 w-4" />
                <span>Production Product Manual &amp; Knowledge Base</span>
              </div>
              <h1 className="text-3xl sm:text-4xl font-extrabold text-[#111013] font-heading tracking-tight">
                EvidenceLog for Atlassian Jira Cloud
              </h1>
              <p className="text-base text-[#5c728e] max-w-3xl leading-relaxed">
                Official technical documentation for engineering squads, compliance architects, support engineers, and external auditors. Learn how EvidenceLog continuously inspects, validates, seals, and certifies software change evidence with zero external data egress.
              </p>
            </div>

            {/* SECTION 1: OVERVIEW */}
            <section id="overview" className="scroll-mt-32 space-y-6">
              <div className="flex items-center gap-2 text-xs font-bold font-mono text-[#15803d] uppercase tracking-wider">
                <Cpu className="h-4 w-4" />
                <span>Architecture Specification</span>
              </div>
              <h2 className="text-2xl sm:text-3xl font-bold font-heading text-[#111013]">
                1. Product Overview &amp; Architecture
              </h2>
              <p className="text-sm text-[#5c728e] leading-relaxed">
                EvidenceLog is a cloud-native Atlassian Forge application engineered to eliminate the manual &ldquo;screenshot tax&rdquo; for SOC 2 Type II, ISO/IEC 27001:2022, APRA CPS 234, and DORA change management audits. Unlike traditional third-party SaaS tools that require broad read access to your Jira tickets and source code, EvidenceLog executes 100% inside your Atlassian Cloud tenant.
              </p>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-4 pt-2">
                <div className="rounded-xl border border-slate-200 bg-slate-50/50 p-4 space-y-2">
                  <div className="font-bold text-xs text-[#111013] flex items-center gap-1.5">
                    <ShieldCheck className="h-4 w-4 text-[#15803d]" />
                    <span>Zero Data Egress</span>
                  </div>
                  <p className="text-xs text-[#5c728e] leading-relaxed">
                    Operates with strict <code className="font-mono text-[11px] bg-slate-200/70 px-1 py-0.5 rounded">connect: false</code> manifests. Zero tickets, code diffs, or secrets leave Atlassian&apos;s isolated microVMs.
                  </p>
                </div>
                <div className="rounded-xl border border-slate-200 bg-slate-50/50 p-4 space-y-2">
                  <div className="font-bold text-xs text-[#111013] flex items-center gap-1.5">
                    <Lock className="h-4 w-4 text-[#15803d]" />
                    <span>Forge Encrypted KVS</span>
                  </div>
                  <p className="text-xs text-[#5c728e] leading-relaxed">
                    Persists tamper-evident evidence snapshots and multi-version audit histories in Atlassian Forge Key-Value Storage (<code className="font-mono text-[11px] bg-slate-200/70 px-1 py-0.5 rounded">@forge/kvs</code>).
                  </p>
                </div>
                <div className="rounded-xl border border-slate-200 bg-slate-50/50 p-4 space-y-2">
                  <div className="font-bold text-xs text-[#111013] flex items-center gap-1.5">
                    <Hash className="h-4 w-4 text-[#15803d]" />
                    <span>SHA-256 Idempotency</span>
                  </div>
                  <p className="text-xs text-[#5c728e] leading-relaxed">
                    Canonical JSON normalization generates deterministic 64-character SHA-256 fingerprints verifiable offline by external Big 4 audit teams.
                  </p>
                </div>
              </div>
            </section>

            {/* SECTION 2: QUICKSTART */}
            <section id="quickstart" className="scroll-mt-32 space-y-6 pt-6 border-t border-slate-100">
              <div className="flex items-center gap-2 text-xs font-bold font-mono text-[#15803d] uppercase tracking-wider">
                <Workflow className="h-4 w-4" />
                <span>Installation &amp; Activation</span>
              </div>
              <h2 className="text-2xl sm:text-3xl font-bold font-heading text-[#111013]">
                2. 2-Minute Quickstart Guide
              </h2>
              <p className="text-sm text-[#5c728e] leading-relaxed">
                EvidenceLog requires zero server provisioning, database credentials, or external API keys. Installation takes under two minutes directly from the Atlassian Marketplace:
              </p>

              <ol className="space-y-4 text-xs sm:text-sm text-[#5c728e]">
                <li className="flex items-start gap-3 p-4 rounded-xl border border-slate-200 bg-white">
                  <span className="flex h-6 w-6 items-center justify-center rounded-full bg-[#111013] text-[#dbf1c3] font-bold text-xs shrink-0 mt-0.5">
                    1
                  </span>
                  <div>
                    <strong className="text-[#111013] block mb-1">Install from Atlassian Marketplace</strong>
                    Navigate to your Jira Cloud Settings &rarr; Apps &rarr; Find new apps. Search for <strong>EvidenceLog</strong> and click <em>Get app</em>.
                  </div>
                </li>
                <li className="flex items-start gap-3 p-4 rounded-xl border border-slate-200 bg-white">
                  <span className="flex h-6 w-6 items-center justify-center rounded-full bg-[#111013] text-[#dbf1c3] font-bold text-xs shrink-0 mt-0.5">
                    2
                  </span>
                  <div>
                    <strong className="text-[#111013] block mb-1">Automatic Issue Panel Activation</strong>
                    EvidenceLog automatically mounts on all Jira issue types via the <code className="font-mono text-xs bg-slate-100 px-1 py-0.5 rounded text-slate-800">jira:issuePanel</code> and <code className="font-mono text-xs bg-slate-100 px-1 py-0.5 rounded text-slate-800">jira:issueContext</code> extension points.
                  </div>
                </li>
                <li className="flex items-start gap-3 p-4 rounded-xl border border-slate-200 bg-white">
                  <span className="flex h-6 w-6 items-center justify-center rounded-full bg-[#111013] text-[#dbf1c3] font-bold text-xs shrink-0 mt-0.5">
                    3
                  </span>
                  <div>
                    <strong className="text-[#111013] block mb-1">(Optional) Attach the Preventive Gatekeeper</strong>
                    To block unverified issues from reaching &ldquo;Done&rdquo;, open Jira Project Settings &rarr; Workflows &rarr; Edit &rarr; Select Transition &rarr; Add Validator &rarr; Choose <strong>EvidenceLog SOC 2 Gatekeeper</strong>.
                  </div>
                </li>
              </ol>
            </section>

            {/* SECTION 3: THE 5 PILLARS */}
            <section id="five-pillars" className="scroll-mt-32 space-y-6 pt-6 border-t border-slate-100">
              <div className="flex items-center gap-2 text-xs font-bold font-mono text-[#15803d] uppercase tracking-wider">
                <Layers className="h-4 w-4" />
                <span>Verification Engine</span>
              </div>
              <h2 className="text-2xl sm:text-3xl font-bold font-heading text-[#111013]">
                3. The Five Core Compliance Pillars
              </h2>
              <p className="text-sm text-[#5c728e] leading-relaxed">
                EvidenceLog inspects every change request against five discrete, independent micro-controls aligned with AICPA SOC 2 Type II and ISO/IEC 27001:2022 standards:
              </p>

              <div className="space-y-4">
                {/* Pillar 1 */}
                <div className="rounded-xl border border-slate-200 p-5 bg-white space-y-2">
                  <div className="flex items-center justify-between">
                    <span className="text-xs font-bold uppercase tracking-wider font-mono text-[#15803d]">
                      Pillar 1 &bull; SOC 2 CC8.1 &bull; FedRAMP CM-3
                    </span>
                    <span className="rounded bg-emerald-50 text-emerald-800 text-[10px] font-bold px-2 py-0.5">
                      PASS CRITERIA
                    </span>
                  </div>
                  <h4 className="text-base font-bold text-[#111013] font-heading">
                    Acceptance Criteria &amp; Definition of Done
                  </h4>
                  <p className="text-xs text-[#5c728e] leading-relaxed">
                    Evaluates Jira issue descriptions and custom fields for structured requirements. Specifically recognizes BDD Given/When/Then scenarios, Definition of Done (DoD) bullet checklists, or explicit acceptance headers.
                  </p>
                </div>

                {/* Pillar 2 */}
                <div className="rounded-xl border border-slate-200 p-5 bg-white space-y-2">
                  <div className="flex items-center justify-between">
                    <span className="text-xs font-bold uppercase tracking-wider font-mono text-[#15803d]">
                      Pillar 2 &bull; ISO 27001 A.8.32 &bull; SOC 2 CC8.1
                    </span>
                    <span className="rounded bg-emerald-50 text-emerald-800 text-[10px] font-bold px-2 py-0.5">
                      PASS CRITERIA
                    </span>
                  </div>
                  <h4 className="text-base font-bold text-[#111013] font-heading">
                    Code Linkage &amp; Multi-Repo VCS Traceability
                  </h4>
                  <p className="text-xs text-[#5c728e] leading-relaxed">
                    Inspects Jira Development panel links, remote links, and commit associations. Automatically classifies pull requests and branch merges across <strong>GitHub</strong> (<code className="font-mono text-[11px] bg-slate-100 px-1 py-0.5 rounded">/pull/\d+</code>), <strong>GitLab</strong> (<code className="font-mono text-[11px] bg-slate-100 px-1 py-0.5 rounded">/merge_requests/\d+</code>), <strong>Bitbucket</strong>, and <strong>Azure DevOps</strong>.
                  </p>
                </div>

                {/* Pillar 3 */}
                <div className="rounded-xl border border-slate-200 p-5 bg-white space-y-2">
                  <div className="flex items-center justify-between">
                    <span className="text-xs font-bold uppercase tracking-wider font-mono text-[#15803d]">
                      Pillar 3 &bull; SOC 2 CC6.8 &bull; CC8.1
                    </span>
                    <span className="rounded bg-emerald-50 text-emerald-800 text-[10px] font-bold px-2 py-0.5">
                      PASS CRITERIA
                    </span>
                  </div>
                  <h4 className="text-base font-bold text-[#111013] font-heading">
                    Segregation of Duties (Author &ne; Approver)
                  </h4>
                  <p className="text-xs text-[#5c728e] leading-relaxed">
                    Mathematically verifies that whoever authored or created the change did not self-approve or self-deploy it. Inspects Jira workflow changelog transitions to terminal statuses and peer review sign-offs from independent accounts.
                  </p>
                </div>

                {/* Pillar 4 */}
                <div className="rounded-xl border border-slate-200 p-5 bg-white space-y-2">
                  <div className="flex items-center justify-between">
                    <span className="text-xs font-bold uppercase tracking-wider font-mono text-[#15803d]">
                      Pillar 4 &bull; ISO 27001 A.8.29 &bull; SOC 2 CC8.1
                    </span>
                    <span className="rounded bg-emerald-50 text-emerald-800 text-[10px] font-bold px-2 py-0.5">
                      PASS CRITERIA
                    </span>
                  </div>
                  <h4 className="text-base font-bold text-[#111013] font-heading">
                    Independent QA Sign-Off &amp; Pre-Release Testing
                  </h4>
                  <p className="text-xs text-[#5c728e] leading-relaxed">
                    Confirms testing verification before production release. Detected via QA status transitions (e.g. <em>In QA</em> &rarr; <em>QA Approved</em>), recognized testing labels (<code className="font-mono text-[11px] bg-slate-100 px-1 py-0.5 rounded">qa-verified</code>, <code className="font-mono text-[11px] bg-slate-100 px-1 py-0.5 rounded">uat-verified</code>), or formal sign-off comments.
                  </p>
                </div>

                {/* Pillar 5 */}
                <div className="rounded-xl border border-slate-200 p-5 bg-white space-y-2">
                  <div className="flex items-center justify-between">
                    <span className="text-xs font-bold uppercase tracking-wider font-mono text-[#15803d]">
                      Pillar 5 &bull; SOC 2 CC7.1 &bull; ISO 27001 A.8.28
                    </span>
                    <span className="rounded bg-emerald-50 text-emerald-800 text-[10px] font-bold px-2 py-0.5">
                      PASS CRITERIA
                    </span>
                  </div>
                  <h4 className="text-base font-bold text-[#111013] font-heading">
                    Security &amp; SAST Vulnerability Scanning
                  </h4>
                  <p className="text-xs text-[#5c728e] leading-relaxed">
                    Identifies static analysis and container security traces. Automatically parses confirmation traces from <strong>Snyk</strong>, <strong>SonarQube</strong>, <strong>Trivy</strong>, <strong>Dependabot</strong>, and <strong>OWASP ZAP</strong> via issue labels, build comments, or CI bot webhooks.
                  </p>
                </div>
              </div>
            </section>

            {/* SECTION 4: ISSUE PANEL */}
            <section id="issue-panel" className="scroll-mt-32 space-y-6 pt-6 border-t border-slate-100">
              <div className="flex items-center gap-2 text-xs font-bold font-mono text-[#15803d] uppercase tracking-wider">
                <Code2 className="h-4 w-4" />
                <span>Developer Experience</span>
              </div>
              <h2 className="text-2xl sm:text-3xl font-bold font-heading text-[#111013]">
                4. Real-Time Issue Compliance Panel
              </h2>
              <p className="text-sm text-[#5c728e] leading-relaxed">
                Rendered natively in Jira Cloud issue views via Atlassian UI Kit 2 components. Provides engineers with real-time feedback without switching browser tabs:
              </p>

              <div className="rounded-2xl border border-slate-200 bg-white p-6 space-y-4">
                <div className="flex items-center justify-between border-b border-slate-100 pb-3">
                  <div className="flex items-center gap-2">
                    <span className="text-sm font-bold text-[#111013] font-heading">EvidenceLog Compliance</span>
                    <span className="rounded bg-emerald-50 text-emerald-800 text-[11px] font-bold px-2 py-0.5">
                      AUDIT READY (5/5)
                    </span>
                  </div>
                  <span className="text-xs font-mono text-slate-400">DEMO-9</span>
                </div>

                <div className="space-y-2 text-xs">
                  <div className="flex items-center justify-between p-2.5 rounded-lg bg-emerald-50/50">
                    <span className="font-semibold text-emerald-900">1. Acceptance Criteria (DoD)</span>
                    <span className="font-bold text-emerald-700">PASS</span>
                  </div>
                  <div className="flex items-center justify-between p-2.5 rounded-lg bg-emerald-50/50">
                    <span className="font-semibold text-emerald-900">2. Multi-Cloud Code Linkage (PR #42)</span>
                    <span className="font-bold text-emerald-700">PASS</span>
                  </div>
                  <div className="flex items-center justify-between p-2.5 rounded-lg bg-emerald-50/50">
                    <span className="font-semibold text-emerald-900">3. Segregation of Duties (Approved by @sarah.m)</span>
                    <span className="font-bold text-emerald-700">PASS</span>
                  </div>
                  <div className="flex items-center justify-between p-2.5 rounded-lg bg-emerald-50/50">
                    <span className="font-semibold text-emerald-900">4. Independent QA Sign-off (qa-verified)</span>
                    <span className="font-bold text-emerald-700">PASS</span>
                  </div>
                  <div className="flex items-center justify-between p-2.5 rounded-lg bg-emerald-50/50">
                    <span className="font-semibold text-emerald-900">5. SAST Security Scan (Snyk 0 High/Crit)</span>
                    <span className="font-bold text-emerald-700">PASS</span>
                  </div>
                </div>

                <div className="rounded-xl bg-[#111013] p-3 text-white text-xs font-mono flex items-center justify-between">
                  <span className="text-[#dbf1c3] truncate">sha256:9f83ac2b7c4d516e8812c32e...</span>
                  <span className="text-slate-400 text-[10px]">Certified in KVS</span>
                </div>
              </div>
            </section>

            {/* SECTION 5: 1-CLICK REMEDIATION */}
            <section id="quick-remediation" className="scroll-mt-32 space-y-6 pt-6 border-t border-slate-100">
              <div className="flex items-center gap-2 text-xs font-bold font-mono text-[#15803d] uppercase tracking-wider">
                <Sliders className="h-4 w-4" />
                <span>In-Situ Actions</span>
              </div>
              <h2 className="text-2xl sm:text-3xl font-bold font-heading text-[#111013]">
                5. 1-Click In-Situ Quick Fixes
              </h2>
              <p className="text-sm text-[#5c728e] leading-relaxed">
                When a change request fails one or more controls, EvidenceLog provides interactive developer buttons directly in the Jira panel to resolve missing evidence instantly without manual ticket editing:
              </p>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                <div className="rounded-xl border border-slate-200 p-4 bg-white space-y-2">
                  <div className="text-xs font-bold text-[#111013]">+ Append BDD DoD</div>
                  <p className="text-xs text-[#5c728e] leading-relaxed">
                    Posts an automated BDD Acceptance Criteria and Definition of Done markdown checklist comment to the ticket.
                  </p>
                </div>
                <div className="rounded-xl border border-slate-200 p-4 bg-white space-y-2">
                  <div className="text-xs font-bold text-[#111013]">+ Apply qa-verified Label</div>
                  <p className="text-xs text-[#5c728e] leading-relaxed">
                    Applies the project-configured QA verification label directly to Jira issue metadata via Jira REST API.
                  </p>
                </div>
                <div className="rounded-xl border border-slate-200 p-4 bg-white space-y-2">
                  <div className="text-xs font-bold text-[#111013]">+ Post QA Sign-off</div>
                  <p className="text-xs text-[#5c728e] leading-relaxed">
                    Generates a formal sign-off comment documenting testing environment, reviewer identity, and timestamp.
                  </p>
                </div>
              </div>
            </section>

            {/* SECTION 6: WORKFLOW GATEKEEPER */}
            <section id="workflow-gatekeeper" className="scroll-mt-32 space-y-6 pt-6 border-t border-slate-100">
              <div className="flex items-center gap-2 text-xs font-bold font-mono text-[#15803d] uppercase tracking-wider">
                <ShieldAlert className="h-4 w-4" />
                <span>Release Enforcement</span>
              </div>
              <h2 className="text-2xl sm:text-3xl font-bold font-heading text-[#111013]">
                6. Preventive Workflow Gatekeeper
              </h2>
              <p className="text-sm text-[#5c728e] leading-relaxed">
                Configured as a native Jira Workflow Validator (<code className="font-mono text-xs bg-slate-100 px-1.5 py-0.5 rounded">jira:workflowValidator</code>). It evaluates tickets in real time during status transitions:
              </p>

              <div className="rounded-xl border border-amber-200 bg-amber-50/40 p-5 space-y-3">
                <div className="flex items-center gap-2 text-amber-900 font-bold text-sm">
                  <AlertTriangle className="h-4 w-4 text-amber-600" />
                  <span>Enforcement Behavior</span>
                </div>
                <p className="text-xs text-amber-800 leading-relaxed">
                  If an engineer attempts to move a ticket to <strong>Done</strong>, <strong>Resolved</strong>, or <strong>Release</strong> without satisfied controls (e.g. author self-approval or missing Git PR link), the transition is blocked immediately. A clear notification displays the exact missing control so developers can fix it in seconds.
                </p>
                <div className="text-xs text-slate-700 pt-2 border-t border-amber-200/60 font-medium">
                  <strong>Emergency Hotfix Protocol:</strong> Issues tagged with recognized emergency labels (<code className="font-mono text-[11px] bg-white px-1 py-0.5 rounded">hotfix</code>, <code className="font-mono text-[11px] bg-white px-1 py-0.5 rounded">sev1</code>) bypass the blocker to avoid incident delays, but are automatically flagged with <code className="font-mono text-[11px] bg-white px-1 py-0.5 rounded">riskLevel = &quot;EMERGENCY&quot;</code> requiring retroactive CAB review.
                </div>
              </div>
            </section>

            {/* SECTION 7: PROJECT AUDIT HUB */}
            <section id="audit-hub" className="scroll-mt-32 space-y-6 pt-6 border-t border-slate-100">
              <div className="flex items-center gap-2 text-xs font-bold font-mono text-[#15803d] uppercase tracking-wider">
                <Layers className="h-4 w-4" />
                <span>Executive Dashboard</span>
              </div>
              <h2 className="text-2xl sm:text-3xl font-bold font-heading text-[#111013]">
                7. Project Audit Hub &amp; 7 KPI Scorecards
              </h2>
              <p className="text-sm text-[#5c728e] leading-relaxed">
                Accessible via the project left sidebar in Jira (<code className="font-mono text-xs bg-slate-100 px-1 py-0.5 rounded">jira:projectPage</code>). Provides release managers, CISOs, and auditors with complete visibility across entire release batches:
              </p>

              <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 pt-2">
                <div className="rounded-xl border border-slate-200 p-3 bg-white text-center">
                  <span className="text-[10px] uppercase font-bold text-slate-400">Total Evaluated</span>
                  <div className="text-xl font-extrabold text-[#111013] mt-1">25 Issues</div>
                </div>
                <div className="rounded-xl border border-slate-200 p-3 bg-white text-center">
                  <span className="text-[10px] uppercase font-bold text-slate-400">Readiness Rate</span>
                  <div className="text-xl font-extrabold text-[#15803d] mt-1">100% Ready</div>
                </div>
                <div className="rounded-xl border border-slate-200 p-3 bg-white text-center">
                  <span className="text-[10px] uppercase font-bold text-slate-400">Certified in KVS</span>
                  <div className="text-xl font-extrabold text-[#111013] mt-1">25 Certified</div>
                </div>
                <div className="rounded-xl border border-slate-200 p-3 bg-white text-center">
                  <span className="text-[10px] uppercase font-bold text-slate-400">Merkle Tree Root</span>
                  <div className="text-xs font-mono font-bold text-purple-700 mt-2 truncate">sha256:7e49...</div>
                </div>
              </div>
            </section>

            {/* SECTION 8: BATCH CERTIFICATION */}
            <section id="batch-certification" className="scroll-mt-32 space-y-6 pt-6 border-t border-slate-100">
              <div className="flex items-center gap-2 text-xs font-bold font-mono text-[#15803d] uppercase tracking-wider">
                <RefreshCw className="h-4 w-4" />
                <span>Bulk Sealing</span>
              </div>
              <h2 className="text-2xl sm:text-3xl font-bold font-heading text-[#111013]">
                8. 1-Click Batch Certification
              </h2>
              <p className="text-sm text-[#5c728e] leading-relaxed">
                Rather than certifying tickets individually, release managers can certify an entire sprint or release batch with a single click. The backend resolver iterates over all audit-ready issues in the release, generates cryptographic snapshots, writes them to Forge KVS, and syncs certified entity properties for instant JQL indexing.
              </p>
            </section>

            {/* SECTION 9: AUDITOR EXPORTS */}
            <section id="auditor-exports" className="scroll-mt-32 space-y-6 pt-6 border-t border-slate-100">
              <div className="flex items-center gap-2 text-xs font-bold font-mono text-[#15803d] uppercase tracking-wider">
                <FileSpreadsheet className="h-4 w-4" />
                <span>Auditor Artifacts</span>
              </div>
              <h2 className="text-2xl sm:text-3xl font-bold font-heading text-[#111013]">
                9. Big 4 CSV &amp; Printable PDF Certificates
              </h2>
              <p className="text-sm text-[#5c728e] leading-relaxed">
                EvidenceLog produces formal audit workpapers specifically formatted for Big 4 CPAs (PwC, EY, Deloitte, KPMG) and compliance platforms:
              </p>

              <div className="space-y-3">
                <div className="rounded-xl border border-slate-200 p-4 bg-white flex items-start gap-3">
                  <FileSpreadsheet className="h-5 w-5 text-emerald-600 shrink-0 mt-0.5" />
                  <div>
                    <h4 className="text-sm font-bold text-[#111013]">Consolidated CSV Workpaper Matrix</h4>
                    <p className="text-xs text-[#5c728e] mt-1 leading-relaxed">
                      Downloadable CSV containing ticket key, summary, author, approver, QA signer, status, score, change risk, and SHA-256 fingerprint. Fits directly into auditor sample test workbooks.
                    </p>
                  </div>
                </div>

                <div className="rounded-xl border border-slate-200 p-4 bg-white flex items-start gap-3">
                  <FileText className="h-5 w-5 text-blue-600 shrink-0 mt-0.5" />
                  <div>
                    <h4 className="text-sm font-bold text-[#111013]">Printable PDF Compliance Verification Certificate</h4>
                    <p className="text-xs text-[#5c728e] mt-1 leading-relaxed">
                      Clean printable certificate with full control breakdown, regulatory references, and cryptographic seal. Can be printed directly from Jira using browser print stylesheets.
                    </p>
                  </div>
                </div>
              </div>
            </section>

            {/* SECTION 10: CRYPTOGRAPHY & MERKLE TREES */}
            <section id="cryptography-merkle" className="scroll-mt-32 space-y-6 pt-6 border-t border-slate-100">
              <div className="flex items-center gap-2 text-xs font-bold font-mono text-[#15803d] uppercase tracking-wider">
                <Hash className="h-4 w-4" />
                <span>Tamper-Evidence Math</span>
              </div>
              <h2 className="text-2xl sm:text-3xl font-bold font-heading text-[#111013]">
                10. SHA-256 Fingerprinting &amp; Binary Merkle Trees
              </h2>
              <p className="text-sm text-[#5c728e] leading-relaxed">
                To guarantee non-repudiation and prevent retroactive evidence tampering, EvidenceLog implements deterministic cryptographic tree hashing:
              </p>

              <div className="rounded-2xl bg-[#111013] text-white p-5 font-mono text-xs space-y-3">
                <div className="text-slate-400 text-[11px]">{'// Binary Merkle Tree Integrity Root Calculation'}</div>
                <div className="text-[#dbf1c3]">
                  Level 0: [Hash(Issue_1), Hash(Issue_2), Hash(Issue_3), Hash(Issue_4)]
                </div>
                <div className="text-slate-300">
                  Level 1: [Hash(H1 + H2), Hash(H3 + H4)]
                </div>
                <div className="text-purple-300 font-bold">
                  Release Root: sha256:7e49f2b189a03bc432d9101f78e4d2e9941a3bc68e0d84f229a1b80c33f98ea1
                </div>
                <div className="text-[11px] text-slate-400 pt-2 border-t border-slate-800">
                  Odd-count balance guarantee: If an odd number of tickets exists, the final leaf is duplicated (C+C) ensuring consistent deterministic root generation.
                </div>
              </div>
            </section>

            {/* SECTION 11: OFFLINE VERIFIER */}
            <section id="offline-verifier" className="scroll-mt-32 space-y-6 pt-6 border-t border-slate-100">
              <div className="flex items-center gap-2 text-xs font-bold font-mono text-[#15803d] uppercase tracking-wider">
                <Lock className="h-4 w-4" />
                <span>Zero-Trust Verification</span>
              </div>
              <h2 className="text-2xl sm:text-3xl font-bold font-heading text-[#111013]">
                11. Air-Gapped Standalone Offline Verifier
              </h2>
              <p className="text-sm text-[#5c728e] leading-relaxed">
                External auditors do not need Jira licenses or internet connectivity to verify evidence authenticity. EvidenceLog provides a standalone, zero-dependency HTML verifier (<code className="font-mono text-xs bg-slate-100 px-1 py-0.5 rounded">docs/verifier.html</code>) using the native W3C Web Cryptography API.
              </p>
              <div className="pt-2">
                <a
                  href="/docs/verifier.html"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl bg-[#111013] text-white hover:bg-[#15803d] font-semibold text-xs transition-colors shadow-xs"
                >
                  <span>Launch Live Offline Verifier</span>
                  <ExternalLink className="h-3.5 w-3.5" />
                </a>
              </div>
            </section>

            {/* SECTION 12: GRC VANTA DRATA */}
            <section id="vanta-drata" className="scroll-mt-32 space-y-6 pt-6 border-t border-slate-100">
              <div className="flex items-center gap-2 text-xs font-bold font-mono text-[#15803d] uppercase tracking-wider">
                <RefreshCw className="h-4 w-4" />
                <span>GRC Sync</span>
              </div>
              <h2 className="text-2xl sm:text-3xl font-bold font-heading text-[#111013]">
                12. Continuous Vanta &amp; Drata Ingestion
              </h2>
              <p className="text-sm text-[#5c728e] leading-relaxed">
                Automated continuous payload export matching Vanta Custom Evidence Upload specifications and Drata DCF-87, DCF-91, and DCF-104 automated tests with zero manual screenshotting.
              </p>
              <div className="pt-2">
                <Link
                  href="/integrations/vanta-drata"
                  className="inline-flex items-center gap-2 text-xs font-bold text-[#15803d] hover:text-[#111013] transition-colors"
                >
                  <span>Explore Interactive Vanta &amp; Drata Payloads &rarr;</span>
                </Link>
              </div>
            </section>

            {/* SECTION 13: JQL SEARCH */}
            <section id="jql-properties" className="scroll-mt-32 space-y-6 pt-6 border-t border-slate-100">
              <div className="flex items-center gap-2 text-xs font-bold font-mono text-[#15803d] uppercase tracking-wider">
                <Terminal className="h-4 w-4" />
                <span>Jira Native Search</span>
              </div>
              <h2 className="text-2xl sm:text-3xl font-bold font-heading text-[#111013]">
                13. Native JQL Search &amp; Entity Properties
              </h2>
              <p className="text-sm text-[#5c728e] leading-relaxed">
                EvidenceLog registers a native Jira entity property (<code className="font-mono text-xs bg-slate-100 px-1 py-0.5 rounded">evidencelog_compliance</code>) indexed for instant JQL search queries across Jira filters, dashboards, and agile boards:
              </p>

              <div className="space-y-2">
                <div className="rounded-xl bg-[#111013] p-4 text-white font-mono text-xs flex items-center justify-between">
                  <span className="text-[#dbf1c3] truncate">
                    issue.property[evidencelog_compliance].isAuditReady = &apos;true&apos;
                  </span>
                  <button
                    type="button"
                    onClick={() => handleCopy("jql1", "issue.property[evidencelog_compliance].isAuditReady = 'true'")}
                    className="text-slate-400 hover:text-white cursor-pointer ml-2"
                  >
                    {copiedId === "jql1" ? <Check className="h-3.5 w-3.5 text-emerald-400" /> : <Copy className="h-3.5 w-3.5" />}
                  </button>
                </div>

                <div className="rounded-xl bg-[#111013] p-4 text-white font-mono text-xs flex items-center justify-between">
                  <span className="text-[#dbf1c3] truncate">
                    project = &quot;PROJ&quot; AND issue.property[evidencelog_compliance].certified = &apos;true&apos;
                  </span>
                  <button
                    type="button"
                    onClick={() => handleCopy("jql2", 'project = "PROJ" AND issue.property[evidencelog_compliance].certified = \'true\'')}
                    className="text-slate-400 hover:text-white cursor-pointer ml-2"
                  >
                    {copiedId === "jql2" ? <Check className="h-3.5 w-3.5 text-emerald-400" /> : <Copy className="h-3.5 w-3.5" />}
                  </button>
                </div>
              </div>
            </section>

            {/* SECTION 14: POLICY CONFIGURATION GUI */}
            <section id="policy-engine" className="scroll-mt-32 space-y-6 pt-6 border-t border-slate-100">
              <div className="flex items-center gap-2 text-xs font-bold font-mono text-[#15803d] uppercase tracking-wider">
                <Sliders className="h-4 w-4" />
                <span>Administration</span>
              </div>
              <h2 className="text-2xl sm:text-3xl font-bold font-heading text-[#111013]">
                14. Project Compliance Policy Configuration GUI
              </h2>
              <p className="text-sm text-[#5c728e] leading-relaxed">
                Project Administrators can customize compliance thresholds directly from the Project Audit Hub without touching backend configuration files:
              </p>

              <div className="rounded-2xl border border-slate-200 bg-white p-6 space-y-3 text-xs">
                <div className="flex items-center justify-between py-2 border-b border-slate-100">
                  <div>
                    <strong className="text-[#111013]">Require Acceptance Criteria</strong>
                    <div className="text-[#5c728e]">Enforces Given/When/Then DoD in issue description.</div>
                  </div>
                  <span className="rounded bg-emerald-100 text-emerald-800 font-bold px-2 py-0.5">ENABLED</span>
                </div>

                <div className="flex items-center justify-between py-2 border-b border-slate-100">
                  <div>
                    <strong className="text-[#111013]">Strict Segregation of Duties</strong>
                    <div className="text-[#5c728e]">Rejects informal comment approvals; requires formal Jira review transitions.</div>
                  </div>
                  <span className="rounded bg-slate-100 text-slate-700 font-bold px-2 py-0.5">CONFIGURABLE</span>
                </div>

                <div className="flex items-center justify-between py-2 border-b border-slate-100">
                  <div>
                    <strong className="text-[#111013]">Require Rollback Plan for High-Risk Changes</strong>
                    <div className="text-[#5c728e]">Blocks releases tagged as High/Emergency unless backout runbooks exist.</div>
                  </div>
                  <span className="rounded bg-slate-100 text-slate-700 font-bold px-2 py-0.5">CONFIGURABLE</span>
                </div>

                <div className="flex items-center justify-between py-2">
                  <div>
                    <strong className="text-[#111013]">Custom Allowed QA Labels</strong>
                    <div className="text-[#5c728e]">Configure project-specific testing tags (e.g. qa-verified, uat-approved).</div>
                  </div>
                  <span className="font-mono text-slate-600 bg-slate-100 px-2 py-0.5 rounded">5 Defaults</span>
                </div>
              </div>
            </section>

            {/* SECTION 15: SUPPORT & TROUBLESHOOTING PLAYBOOK */}
            <section id="support-playbook" className="scroll-mt-32 space-y-6 pt-6 border-t border-slate-100">
              <div className="flex items-center gap-2 text-xs font-bold font-mono text-[#15803d] uppercase tracking-wider">
                <HelpCircle className="h-4 w-4" />
                <span>Internal &amp; Client Support Playbook</span>
              </div>
              <h2 className="text-2xl sm:text-3xl font-bold font-heading text-[#111013]">
                15. Support &amp; Debugging Playbook
              </h2>
              <p className="text-sm text-[#5c728e] leading-relaxed">
                Quick reference guide for support engineers and project admins diagnosing why a ticket or transition is flagged:
              </p>

              <div className="space-y-3 text-xs">
                <div className="rounded-xl border border-slate-200 p-4 bg-white space-y-1.5">
                  <strong className="text-[#111013] text-sm block">Q: Ticket is blocked by Gatekeeper with &quot;Segregation of Duties Failed&quot;</strong>
                  <p className="text-[#5c728e] leading-relaxed">
                    <strong>Cause:</strong> The ticket creator or assignee attempted to transition the issue to Done. Under SOC 2 CC6.8, changes require independent verification.<br />
                    <strong>Resolution:</strong> An independent team member (Tech Lead, Senior Engineer) must review the PR and execute the final status transition, or post an explicit approval comment (<code className="font-mono text-[11px] bg-slate-100 px-1 py-0.5 rounded">&quot;Peer review approved by @user&quot;</code>).
                  </p>
                </div>

                <div className="rounded-xl border border-slate-200 p-4 bg-white space-y-1.5">
                  <strong className="text-[#111013] text-sm block">Q: GitHub or GitLab PR is merged, but Pillar 2 shows &quot;No Code Linkage&quot;</strong>
                  <p className="text-[#5c728e] leading-relaxed">
                    <strong>Cause:</strong> The pull request description or branch name does not include the Jira issue key, so Jira did not associate the remote link.<br />
                    <strong>Resolution:</strong> Ensure PR title or branch name contains the ticket key (e.g. <code className="font-mono text-[11px] bg-slate-100 px-1 py-0.5 rounded">feature/LANG-10-auth</code>) or manually paste the PR URL in the Jira Development web link panel.
                  </p>
                </div>

                <div className="rounded-xl border border-slate-200 p-4 bg-white space-y-1.5">
                  <strong className="text-[#111013] text-sm block">Q: How do we bypass the Gatekeeper during a Sev-1 production outage?</strong>
                  <p className="text-[#5c728e] leading-relaxed">
                    <strong>Resolution:</strong> Apply any recognized emergency label (<code className="font-mono text-[11px] bg-slate-100 px-1 py-0.5 rounded">hotfix</code>, <code className="font-mono text-[11px] bg-slate-100 px-1 py-0.5 rounded">sev1</code>, <code className="font-mono text-[11px] bg-slate-100 px-1 py-0.5 rounded">emergency</code>). The Gatekeeper allows the release transition immediately while automatically tagging it for retroactive Change Advisory Board (CAB) review within 48 hours.
                  </p>
                </div>
              </div>
            </section>
          </main>
        </div>
      </div>

      <Footer />
    </div>
  );
}
