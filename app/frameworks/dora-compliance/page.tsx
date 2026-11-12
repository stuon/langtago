import Link from "next/link";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import {
  ShieldCheck,
  CheckCircle2,
  ArrowRight,
  ArrowLeft,
  Globe2,
  MapPin,
  Landmark,
} from "lucide-react";

export const metadata = {
  title: "Automate DORA & UK FCA Change Controls in Jira Cloud — European & UK Resilience Guide | Langtago",
  description:
    "Learn how European and UK financial entities, fintechs, and ICT providers satisfy DORA (EU 2022/2554) Article 9 & 11 and UK FCA/PRA Operational Resilience in Jira Cloud. 100% In-Tenant Forge execution with Frankfurt and London Data Residency.",
  keywords: [
    "DORA compliance Jira",
    "Digital Operational Resilience Act Jira",
    "DORA Article 9 ICT change management",
    "DORA Article 11 testing evidence",
    "UK FCA operational resilience Jira",
    "UK PRA SS1/21 change controls",
    "European financial compliance Jira Cloud",
    "DORA third party ICT risk Jira app",
    "Atlassian Forge Frankfurt data residency",
    "tamper evident change log DORA audit",
  ],
  openGraph: {
    title: "Automate DORA & UK FCA ICT Change Controls Directly in Jira Cloud",
    description:
      "Eliminate manual screenshotting. Enforce independent peer reviews, pre-deployment testing, and sealed cryptographic audit trails inside Atlassian Jira Cloud with Frankfurt and London Data Residency.",
    url: "https://langtago.com/frameworks/dora-compliance",
    siteName: "Langtago — EvidenceLog for Jira",
  },
};

export default function DoraComplianceFrameworkPage() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "TechArticle",
        "headline": "Automating DORA and UK FCA ICT Change Management in Jira Cloud",
        "description": "A technical blueprint for European and UK engineering leaders, CISOs, and financial institutions to automate DORA (EU 2022/2554) Article 9 & 11 and UK FCA/PRA SS1/21 change controls natively in Jira Cloud.",
        "author": {
          "@type": "Organization",
          "name": "Langtago Security & Compliance Team",
          "url": "https://langtago.com",
        },
        "publisher": {
          "@type": "Organization",
          "name": "Langtago",
          "url": "https://langtago.com",
        },
        "datePublished": "2026-11-11",
        "dateModified": "2026-11-11",
        "mainEntityOfPage": "https://langtago.com/frameworks/dora-compliance",
      },
      {
        "@type": "FAQPage",
        "mainEntity": [
          {
            "@type": "Question",
            "name": "What is DORA and how does it impact software change management?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "The Digital Operational Resilience Act (DORA - Regulation (EU) 2022/2554), applicable across the EU/EEA, establishes binding rules for financial entities and their ICT service providers. Articles 9 and 11 mandate formal procedures for managing ICT systems changes, including rigorous pre-deployment testing, segregation of duties, fallback rollback procedures, and complete audit trails.",
            },
          },
          {
            "@type": "Question",
            "name": "How does EvidenceLog help with UK FCA and PRA Operational Resilience (SS1/21)?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "The UK Financial Conduct Authority (FCA) and Prudential Regulation Authority (PRA) require regulated firms to ensure operational resilience and prevent change-induced outages. EvidenceLog verifies that peer reviews, test passes, and rollback strategies are locked into the Jira ticket before deployment to production, preventing unauthorized code drops.",
            },
          },
          {
            "@type": "Question",
            "name": "Does EvidenceLog comply with European and UK Data Residency?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "Yes. Built natively on Atlassian Forge, EvidenceLog runs entirely within Atlassian's European Cloud regions (Frankfurt, Germany - eu-central-1, and Dublin, Ireland - eu-west-1) or UK region (London - eu-west-2). All evidence records persist within the customer's Jira tenant with zero egress to third-party databases.",
            },
          },
          {
            "@type": "Question",
            "name": "How does EvidenceLog simplify DORA Chapter V Third-Party Risk Management?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "DORA Chapter V imposes strict oversight on third-party ICT providers. Because EvidenceLog has no external server, no external database, and zero network egress outside Atlassian Cloud, it introduces zero new external data processors or multitenant risk into your ICT supply chain.",
            },
          },
        ],
      },
    ],
  };

  const doraControls = [
    {
      clause: "DORA Art. 9(4): ICT Change Governance & Authorization",
      requirement:
        "Financial entities shall establish and implement mechanisms to manage and document changes to software, hardware, and ICT components, ensuring authorization prior to deployment.",
      auditorExpectation:
        "Clear evidence of technical sign-off and product authorization documented on every production release ticket before moving to production status.",
      evidenceLogSolution:
        "Real-time transition gatekeeping in Jira. Enforces peer approvals and blocks tickets without authorized developer and reviewer separation.",
      status: "AUTOMATED",
    },
    {
      clause: "DORA Art. 9(5): Segregation of Incompatible Functions",
      requirement:
        "Segregation of duties must be implemented to prevent conflicts of interest and unauthorized access or modifications to critical systems.",
      auditorExpectation:
        "Indisputable proof that the author of code or pull request was prevented from self-approving or unilaterally deploying changes into operational environments.",
      evidenceLogSolution:
        "Validates PR links across GitHub, GitLab, and Bitbucket. Flags and blocks author self-approval directly within the Jira issue view.",
      status: "AUTOMATED",
    },
    {
      clause: "DORA Art. 11: Digital Operational Resilience Testing",
      requirement:
        "ICT systems and software updates must undergo comprehensive testing (unit, regression, integration, security) in non-production environments prior to release.",
      auditorExpectation:
        "Automated CI test pass evidence, staging environment validation tags, or QA sign-offs linked to the release issue.",
      evidenceLogSolution:
        "Detects automated test passes from CI/CD webhooks, staging-passed labels, and QA sign-off comments before allowing transition to Done.",
      status: "AUTOMATED",
    },
    {
      clause: "DORA Art. 9(6): Rollback & Business Continuity Readiness",
      requirement:
        "Procedures must exist for aborting, rolling back, and recovering from unsuccessful changes without disrupting essential financial services.",
      auditorExpectation:
        "Explicit rollback instructions (Git revert commit, feature flag switch, database rollback scripts) documented prior to deployment.",
      evidenceLogSolution:
        "Parses Jira description for rollback instructions. Provides a 1-click in-situ button to append standardized rollback plans into the ticket.",
      status: "AUTOMATED",
    },
    {
      clause: "DORA Art. 10 & UK PRA: Tamper-Evident Audit Logging",
      requirement:
        "Continuous logging and preservation of ICT change events to enable post-incident analysis and verification by national competent authorities (NCAs / FCA).",
      auditorExpectation:
        "Unalterable audit logs matching ticket keys to commit SHAs, PR reviewers, test runs, and timestamps with zero spreadsheet tampering risk.",
      evidenceLogSolution:
        "Generates sealed CSV workpapers and SHA-256 cryptographic JSON bundles for European NCAs, BaFin, ACPR, CSSF, Central Bank of Ireland, and the UK FCA.",
      status: "AUTOMATED",
    },
  ];

  return (
    <div className="relative min-h-screen bg-white font-sans text-[#5c728e] selection:bg-[#dbf1c3] selection:text-[#0f5132]">
      {/* Schema.org JSON-LD */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />

      {/* Global Navigation */}
      <Navbar isProductPage={false} />

      <main className="relative pt-10 pb-24">
        {/* Header Breadcrumb & Tag */}
        <div className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8">
          <div className="flex items-center gap-2 text-xs font-semibold text-[#5c728e] mb-6">
            <Link href="/" className="hover:text-[#111013] transition-colors flex items-center gap-1">
              <ArrowLeft className="h-3.5 w-3.5" />
              <span>EvidenceLog</span>
            </Link>
            <span>/</span>
            <span className="text-[#15803d]">Compliance Frameworks</span>
            <span>/</span>
            <span className="text-[#111013] font-bold">DORA &amp; UK FCA</span>
          </div>

          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#dbf1c3]/70 border border-[#b8e29a] text-[#15803d] font-bold text-xs uppercase tracking-wider mb-4 font-heading">
            <Globe2 className="h-3.5 w-3.5 text-[#15803d]" />
            <span>EU DORA (2022/2554) &amp; UK FCA / PRA Operational Resilience</span>
          </div>

          <h1 className="text-3xl sm:text-5xl font-bold tracking-tight text-[#111013] leading-tight font-heading mb-6">
            Automate DORA &amp; UK FCA ICT change controls in Jira Cloud
          </h1>

          <p className="text-lg text-[#5c728e] leading-relaxed mb-8">
            The definitive technical guide for European and UK engineering leaders, DevOps managers, and financial compliance officers. Eliminate manual PR screenshotting and satisfy DORA Articles 9 &amp; 11 and UK FCA/PRA SS1/21 natively inside Jira Cloud—with 100% European &amp; UK Data Residency and zero data egress.
          </p>

          {/* Key Assurance Badges */}
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mb-12">
            <div className="rounded-xl border border-slate-200 bg-slate-50/70 p-4">
              <div className="flex items-center gap-2 text-sm font-bold text-[#111013] mb-1">
                <MapPin className="h-4 w-4 text-[#15803d]" />
                <span>Frankfurt &amp; London Residency</span>
              </div>
              <p className="text-xs text-[#5c728e]">
                Runs inside Atlassian EU (Frankfurt / Dublin) or UK (London) regions. Zero cross-border transfer.
              </p>
            </div>

            <div className="rounded-xl border border-slate-200 bg-slate-50/70 p-4">
              <div className="flex items-center gap-2 text-sm font-bold text-[#111013] mb-1">
                <ShieldCheck className="h-4 w-4 text-[#15803d]" />
                <span>Zero ICT Subcontractor Risk</span>
              </div>
              <p className="text-xs text-[#5c728e]">
                100% native Forge microVMs. Eliminates complex DORA Chapter V third-party vendor audits.
              </p>
            </div>

            <div className="rounded-xl border border-slate-200 bg-slate-50/70 p-4">
              <div className="flex items-center gap-2 text-sm font-bold text-[#111013] mb-1">
                <Landmark className="h-4 w-4 text-[#15803d]" />
                <span>NCA &amp; FCA Ready</span>
              </div>
              <p className="text-xs text-[#5c728e]">
                Instant CSV &amp; PDF workpapers formatted for BaFin, ACPR, CSSF, CBI, and the UK FCA.
              </p>
            </div>
          </div>

          {/* Section 1: The DORA & UK FCA Reality */}
          <section className="mb-14">
            <h2 className="text-2xl sm:text-3xl font-bold text-[#111013] font-heading mb-4">
              The enforcement reality of DORA and UK Operational Resilience
            </h2>
            <div className="space-y-4 text-base leading-relaxed text-[#5c728e]">
              <p>
                From 17 January 2025, the Digital Operational Resilience Act (DORA) is legally binding across all EU member states, directly covering over 22,000 financial entities and their critical ICT third-party service providers. In parallel, the UK FCA and PRA enforce strict operational resilience rules under Policy Statement PS21/3 and Supervisory Statement SS1/21.
              </p>
              <p>
                Uncontrolled or poorly documented software changes represent the #1 operational vulnerability targeted by regulatory audits. National Competent Authorities (NCAs) and lead auditors inspect:
              </p>
              <ul className="space-y-2.5 pl-4 border-l-2 border-emerald-300">
                <li className="text-sm font-medium text-slate-800">
                  <strong>Independent Code Approval:</strong> Absolute proof that no engineer can approve or deploy their own code into production environments without independent peer review.
                </li>
                <li className="text-sm font-medium text-slate-800">
                  <strong>Documented Testing Evidence:</strong> Proof that testing (automated unit/integration tests or QA validation) was successfully executed prior to deployment.
                </li>
                <li className="text-sm font-medium text-slate-800">
                  <strong>Explicit Rollback Readiness:</strong> Documented contingency procedures (Git revert instructions, feature flag toggles, or database rollback steps) attached directly to the release record.
                </li>
              </ul>
            </div>
          </section>

          {/* Section 2: DORA Controls Matrix */}
          <section className="mb-14">
            <div className="flex items-center justify-between mb-4">
              <h2 className="text-2xl sm:text-3xl font-bold text-[#111013] font-heading">
                DORA Article 9 &amp; 11 Change Control Matrix &amp; EvidenceLog Automation
              </h2>
            </div>
            <p className="text-sm text-[#5c728e] mb-6">
              How EvidenceLog automates technical compliance directly inside Atlassian Jira Cloud:
            </p>

            <div className="space-y-4">
              {doraControls.map((ctrl, i) => (
                <div
                  key={i}
                  className="rounded-xl border border-slate-200 bg-white p-5 shadow-xs hover:border-[#15803d]/40 transition-colors"
                >
                  <div className="flex flex-wrap items-center justify-between gap-2 mb-2 pb-2 border-b border-slate-100">
                    <span className="text-xs font-bold font-mono text-[#111013] uppercase tracking-wider">
                      {ctrl.clause}
                    </span>
                    <span className="inline-flex items-center gap-1 px-2 py-0.5 rounded bg-emerald-50 text-[#15803d] text-[10px] font-bold border border-emerald-200">
                      <CheckCircle2 className="h-3 w-3" />
                      <span>{ctrl.status}</span>
                    </span>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-3 gap-4 text-xs mt-3">
                    <div>
                      <span className="font-semibold text-slate-900 block mb-1">DORA / FCA Requirement:</span>
                      <p className="text-slate-600 leading-relaxed">{ctrl.requirement}</p>
                    </div>
                    <div>
                      <span className="font-semibold text-slate-900 block mb-1">Auditor &amp; NCA Expectation:</span>
                      <p className="text-slate-600 leading-relaxed">{ctrl.auditorExpectation}</p>
                    </div>
                    <div>
                      <span className="font-semibold text-[#15803d] block mb-1">EvidenceLog Jira Solution:</span>
                      <p className="text-slate-700 leading-relaxed font-medium">{ctrl.evidenceLogSolution}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </section>

          {/* Section 3: European & UK Data Sovereignty */}
          <section className="mb-14 rounded-2xl bg-slate-900 text-white p-6 sm:p-8">
            <div className="inline-flex items-center gap-2 px-2.5 py-0.5 rounded bg-emerald-500/20 text-emerald-300 text-xs font-mono font-bold mb-3">
              <span>EU &amp; UK DATA SOVEREIGNTY ARCHITECTURE</span>
            </div>
            <h3 className="text-2xl font-bold font-heading mb-3 text-white">
              Why Atlassian Forge eliminates GDPR &amp; DORA Chapter V vendor friction
            </h3>
            <p className="text-sm text-slate-300 leading-relaxed mb-6">
              External compliance tools that require database egress to US-hosted multitenant servers force European and UK financial institutions into arduous cross-border transfer assessments (Schrems II) and DORA third-party ICT audits. EvidenceLog runs 100% inside Atlassian Forge:
            </p>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-xs">
              <div className="rounded-xl bg-slate-800/80 border border-slate-700 p-4">
                <span className="font-bold text-emerald-400 block mb-1 text-sm">
                  ✓ Frankfurt (eu-central-1) &amp; London (eu-west-2)
                </span>
                <p className="text-slate-300">
                  Data remains strictly within your organization&apos;s designated Atlassian Cloud region with zero cross-border transfer.
                </p>
              </div>
              <div className="rounded-xl bg-slate-800/80 border border-slate-700 p-4">
                <span className="font-bold text-emerald-400 block mb-1 text-sm">
                  ✓ Zero External Network Egress
                </span>
                <p className="text-slate-300">
                  EvidenceLog manifests enforce zero outbound internet connections. Your source code, PR diffs, and Jira tickets never touch external servers.
                </p>
              </div>
              <div className="rounded-xl bg-slate-800/80 border border-slate-700 p-4">
                <span className="font-bold text-emerald-400 block mb-1 text-sm">
                  ✓ Encrypted Tenant Storage
                </span>
                <p className="text-slate-300">
                  Audit logs and cryptographic hashes are persisted in Atlassian Key-Value Storage (@forge/kvs), fully covered under Atlassian&apos;s GDPR DPA.
                </p>
              </div>
              <div className="rounded-xl bg-slate-800/80 border border-slate-700 p-4">
                <span className="font-bold text-emerald-400 block mb-1 text-sm">
                  ✓ Simplified DORA ICT Register
                </span>
                <p className="text-slate-300">
                  Classified as a native Atlassian Cloud plugin, drastically simplifying your Article 28 Register of Information for ICT third-party services.
                </p>
              </div>
            </div>
          </section>

          {/* CTA Box */}
          <div className="rounded-2xl border border-slate-200 bg-gradient-to-r from-emerald-50/50 via-white to-emerald-50/30 p-8 text-center sm:text-left flex flex-col sm:flex-row items-center justify-between gap-6">
            <div>
              <h3 className="text-xl sm:text-2xl font-bold text-[#111013] font-heading mb-2">
                Ready to automate DORA &amp; UK FCA audit readiness in Jira?
              </h3>
              <p className="text-sm text-[#5c728e] max-w-xl">
                Install free on Atlassian Marketplace. Test with up to 10 users with no credit card required, or upgrade seamlessly through your existing Atlassian invoice.
              </p>
            </div>
            <div className="flex flex-col sm:flex-row items-center gap-3 shrink-0">
              <a
                href="https://marketplace.atlassian.com"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 px-6 py-3 rounded-xl bg-[#111013] text-white hover:bg-[#15803d] font-semibold text-xs transition-all shadow-md cursor-pointer whitespace-nowrap"
              >
                <span>Install Free on Marketplace</span>
                <ArrowRight className="h-4 w-4" />
              </a>
              <Link
                href="/compare/manual-screenshots-vs-evidencelog"
                className="inline-flex items-center justify-center gap-2 px-5 py-3 rounded-xl bg-white border border-slate-300 text-[#111013] hover:border-[#111013] font-semibold text-xs transition-all shadow-2xs whitespace-nowrap"
              >
                <span>Compare Manual vs. Automated</span>
              </Link>
            </div>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
}
