import Link from "next/link";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import {
  ShieldCheck,
  Sparkles,
  ArrowRight,
  Lock,
  Layers,
  ExternalLink,
  CheckCircle2,
  ServerOff,
  Code2,
} from "lucide-react";

export default function StudioHomePage() {
  const products = [
    {
      name: "EvidenceLog for Jira",
      status: "Available Now",
      statusColor: "emerald",
      badge: "Flagship Product",
      href: "/evidence-log",
      externalHref: "https://marketplace.atlassian.com",
      description:
        "Continuous compliance and tamper-evident change evidence sealed directly inside Jira Cloud issues. Automatically satisfies SOC 2 CC8.1, ISO 27001, and HIPAA.",
      highlights: [
        "100% Atlassian Forge Native (Zero external egress)",
        "SHA-256 cryptographic verification seals",
        "1-Click auditor packages (PDF, CSV, JSON)",
        "Separation of duties & CI/CD approval checks",
      ],
      isFlagship: true,
    },
    {
      name: "DriftWatch for Bitbucket",
      status: "In Development",
      statusColor: "cyan",
      badge: "Coming Q1 2027",
      href: "#contact",
      description:
        "Real-time drift detection that alerts SecOps whenever code is merged to protected branches without an authorized Jira issue or approved test pass.",
      highlights: [
        "Automated branch protection enforcement",
        "Rogue commit & hotfix bypass detection",
        "Forge-native webhook audit logger",
      ],
      isFlagship: false,
    },
    {
      name: "AccessPulse",
      status: "Research Phase",
      statusColor: "slate",
      badge: "Q2 2027",
      href: "#contact",
      description:
        "Ephemeral permission tracking and automated privilege revocation auditing for enterprise Jira and Confluence spaces.",
      highlights: [
        "Time-bound user access grants",
        "Quarterly access review evidence exports",
        "Auditor-friendly privilege change diffs",
      ],
      isFlagship: false,
    },
  ];

  const pillars = [
    {
      icon: ServerOff,
      title: "Zero External Data Retention",
      desc: "We believe compliance apps shouldn't introduce new security attack vectors. All compute runs within Atlassian Forge's sandboxed runtime, and all data stays strictly in customer tenant storage.",
    },
    {
      icon: Code2,
      title: "Built for Developer Velocity",
      desc: "Compliance tools that force engineers into separate web portals fail. Langtago apps live where developers already spend their day: inside Jira issues and Git workflows.",
    },
    {
      icon: Lock,
      title: "Cryptographic Tamper-Proofing",
      desc: "Instead of relying on easily modified database timestamps, every change record is cryptographically fingerprinted with SHA-256 checksums to provide mathematical proof to auditors.",
    },
  ];

  return (
    <div className="relative min-h-screen bg-slate-950 font-sans selection:bg-emerald-500/30 selection:text-emerald-200">
      {/* Background Subtle Grid */}
      <div className="pointer-events-none absolute inset-0 grid-pattern opacity-40 radial-mask" />

      {/* Navigation */}
      <Navbar isProductPage={false} />

      <main className="relative">
        {/* Studio Hero Section */}
        <section className="relative overflow-hidden pt-16 pb-20 md:pt-28 md:pb-32">
          {/* Ambient Lighting */}
          <div className="pointer-events-none absolute inset-0 flex items-center justify-center">
            <div className="h-[450px] w-[800px] -translate-y-20 rounded-full bg-emerald-500/10 blur-[140px]" />
            <div className="h-[350px] w-[500px] translate-x-40 translate-y-24 rounded-full bg-cyan-500/10 blur-[130px]" />
          </div>

          <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 text-center">
            {/* Pill */}
            <div className="inline-flex items-center gap-2 rounded-full border border-emerald-500/30 bg-emerald-950/40 px-3.5 py-1 text-xs font-medium text-emerald-300 shadow-sm backdrop-blur-md">
              <span className="flex h-2 w-2 rounded-full bg-emerald-400 animate-pulse" />
              <span className="font-semibold text-white">Langtago Studio</span>
              <span className="text-emerald-500">•</span>
              <span>Developer Tooling & Atlassian Forge Apps</span>
            </div>

            {/* Headline */}
            <h1 className="mx-auto mt-7 max-w-4xl text-4xl font-extrabold tracking-tight text-white sm:text-6xl sm:leading-[1.14]">
              Developer Tools That Make{" "}
              <span className="bg-gradient-to-r from-emerald-400 via-teal-300 to-cyan-400 bg-clip-text text-transparent">
                Enterprise Compliance Invisible.
              </span>
            </h1>

            {/* Subtitle */}
            <p className="mx-auto mt-6 max-w-2xl text-base text-slate-300 sm:text-lg sm:leading-relaxed">
              Langtago designs and engineers zero-egress, Atlassian Forge-native software that bridges the gap between rapid software development and strict SOC 2, ISO 27001, and HIPAA compliance.
            </p>

            {/* CTAs */}
            <div className="mt-8 flex flex-col sm:flex-row items-center justify-center gap-4">
              <Link
                href="/evidence-log"
                className="group flex w-full sm:w-auto items-center justify-center gap-2 rounded-xl bg-gradient-to-r from-emerald-500 to-teal-400 px-6 py-3.5 text-sm font-semibold text-slate-950 shadow-lg shadow-emerald-500/25 transition-all hover:brightness-110"
              >
                <Sparkles className="h-4 w-4 text-slate-950" />
                <span>Explore EvidenceLog for Jira</span>
                <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5" />
              </Link>

              <a
                href="#products"
                className="flex w-full sm:w-auto items-center justify-center gap-2 rounded-xl border border-slate-700 bg-slate-900/90 px-6 py-3.5 text-sm font-semibold text-slate-200 shadow-md hover:border-slate-500 hover:bg-slate-800 hover:text-white transition-all"
              >
                <Layers className="h-4 w-4 text-cyan-400" />
                <span>View Product Suite</span>
              </a>
            </div>

            {/* Trust Metatags */}
            <div className="mt-10 flex flex-wrap items-center justify-center gap-x-8 gap-y-3 text-xs text-slate-400 font-medium">
              <div className="flex items-center gap-1.5">
                <CheckCircle2 className="h-4 w-4 text-emerald-400" />
                <span>Atlassian Forge Cloud Native</span>
              </div>
              <div className="flex items-center gap-1.5">
                <Lock className="h-4 w-4 text-cyan-400" />
                <span>Zero External Server Egress</span>
              </div>
              <div className="flex items-center gap-1.5">
                <ShieldCheck className="h-4 w-4 text-emerald-400" />
                <span>Cryptographically Sealed Audits</span>
              </div>
            </div>
          </div>
        </section>

        {/* Flagship App Spotlight Section */}
        <section id="flagship" className="relative py-20 border-t border-slate-900 bg-slate-950/80">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="rounded-3xl border border-emerald-500/40 bg-gradient-to-b from-slate-900 via-slate-950 to-slate-950 p-8 sm:p-12 shadow-2xl shadow-emerald-500/10">
              <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
                {/* Left Description */}
                <div className="lg:col-span-7 space-y-5">
                  <div className="flex items-center gap-2">
                    <span className="inline-flex items-center gap-1.5 rounded-full bg-emerald-500/10 px-3 py-1 text-xs font-bold text-emerald-400 border border-emerald-500/30">
                      <Sparkles className="h-3.5 w-3.5" />
                      Studio Flagship
                    </span>
                    <span className="rounded-full bg-slate-800 px-2.5 py-0.5 text-xs text-slate-300">
                      Available on Atlassian Marketplace
                    </span>
                  </div>

                  <h2 className="text-2xl sm:text-4xl font-extrabold text-white tracking-tight">
                    EvidenceLog for Jira Cloud
                  </h2>

                  <p className="text-sm sm:text-base text-slate-300 leading-relaxed">
                    Eliminate manual screenshotting and endless spreadsheet compilation for SOC 2 and ISO 27001 change management audits. EvidenceLog cryptographically seals peer reviews, CI/CD pipeline runs, and approvals directly into Jira issues.
                  </p>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-2">
                    <div className="flex items-start gap-2 text-xs text-slate-300">
                      <CheckCircle2 className="h-4 w-4 text-emerald-400 shrink-0 mt-0.5" />
                      <span><strong>Zero Egress:</strong> 100% in-tenant Forge storage</span>
                    </div>
                    <div className="flex items-start gap-2 text-xs text-slate-300">
                      <CheckCircle2 className="h-4 w-4 text-emerald-400 shrink-0 mt-0.5" />
                      <span><strong>SHA-256 Seals:</strong> Mathematically tamper-evident</span>
                    </div>
                    <div className="flex items-start gap-2 text-xs text-slate-300">
                      <CheckCircle2 className="h-4 w-4 text-emerald-400 shrink-0 mt-0.5" />
                      <span><strong>1-Click Packs:</strong> PDF, CSV, and raw JSON export</span>
                    </div>
                    <div className="flex items-start gap-2 text-xs text-slate-300">
                      <CheckCircle2 className="h-4 w-4 text-emerald-400 shrink-0 mt-0.5" />
                      <span><strong>Separation of Duties:</strong> Automated checks</span>
                    </div>
                  </div>

                  <div className="pt-4 flex flex-col sm:flex-row gap-3">
                    <Link
                      href="/evidence-log"
                      className="inline-flex items-center justify-center gap-2 rounded-xl bg-emerald-500 px-6 py-3 text-xs sm:text-sm font-bold text-slate-950 hover:bg-emerald-400 transition-colors shadow-md shadow-emerald-500/20"
                    >
                      <span>Explore EvidenceLog & Live Demo</span>
                      <ArrowRight className="h-4 w-4" />
                    </Link>
                    <a
                      href="https://marketplace.atlassian.com"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center justify-center gap-2 rounded-xl border border-slate-700 bg-slate-900 px-5 py-3 text-xs sm:text-sm font-semibold text-slate-200 hover:bg-slate-800 transition-colors"
                    >
                      <span>Marketplace Page</span>
                      <ExternalLink className="h-3.5 w-3.5 opacity-70" />
                    </a>
                  </div>
                </div>

                {/* Right Visual Card */}
                <div className="lg:col-span-5">
                  <div className="rounded-2xl border border-slate-800 bg-slate-950/90 p-5 space-y-4 shadow-xl">
                    <div className="flex items-center justify-between pb-3 border-b border-slate-800">
                      <div className="flex items-center gap-2">
                        <div className="flex h-7 w-7 items-center justify-center rounded-lg bg-emerald-500/20 text-emerald-400">
                          <ShieldCheck className="h-4 w-4" />
                        </div>
                        <span className="text-xs font-bold text-white">PROD-1429 • Sealed</span>
                      </div>
                      <span className="rounded bg-emerald-500/10 px-2 py-0.5 text-[10px] font-mono text-emerald-400 border border-emerald-500/20">
                        SOC 2 CC8.1
                      </span>
                    </div>

                    <div className="space-y-2 text-xs">
                      <div className="flex justify-between p-2 rounded bg-slate-900 border border-slate-800">
                        <span className="text-slate-400">Separation of Duties</span>
                        <span className="text-emerald-400 font-semibold">2 Approvers Verified</span>
                      </div>
                      <div className="flex justify-between p-2 rounded bg-slate-900 border border-slate-800">
                        <span className="text-slate-400">Automated CI/CD Tests</span>
                        <span className="text-emerald-400 font-semibold">1,482 Passing (94.2%)</span>
                      </div>
                      <div className="flex justify-between p-2 rounded bg-slate-900 border border-slate-800">
                        <span className="text-slate-400">Vulnerability Scans</span>
                        <span className="text-emerald-400 font-semibold">0 High / Critical</span>
                      </div>
                    </div>

                    <div className="pt-2">
                      <div className="rounded bg-slate-900/60 p-2 text-[10px] font-mono text-slate-400 truncate border border-slate-800">
                        sha256:9f83ac2b7c4d516e8812c32e5f56a312...
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Product Suite Grid */}
        <section id="products" className="relative py-24 sm:py-32 border-t border-slate-900 bg-slate-950">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="mx-auto max-w-3xl text-center">
              <div className="inline-flex items-center gap-1.5 rounded-full border border-cyan-500/30 bg-cyan-950/40 px-3 py-1 text-xs font-semibold text-cyan-400">
                <Layers className="h-3.5 w-3.5" />
                <span>Our Software Portfolio</span>
              </div>
              <h2 className="mt-4 text-3xl font-extrabold tracking-tight text-white sm:text-4xl">
                The Langtago Product Suite
              </h2>
              <p className="mt-4 text-base text-slate-400">
                Focused developer utilities and compliance modules built for the Atlassian Cloud ecosystem.
              </p>
            </div>

            <div className="mt-16 grid grid-cols-1 md:grid-cols-3 gap-8">
              {products.map((p, idx) => (
                <div
                  key={idx}
                  className={`rounded-2xl border p-7 flex flex-col justify-between transition-all ${
                    p.isFlagship
                      ? "border-emerald-500/50 bg-gradient-to-b from-slate-900 to-slate-950 shadow-xl shadow-emerald-500/5"
                      : "border-slate-800 bg-slate-900/40 hover:border-slate-700"
                  }`}
                >
                  <div>
                    <div className="flex items-center justify-between">
                      <span className="text-xs font-bold text-emerald-400 bg-emerald-950/60 px-2.5 py-1 rounded-full border border-emerald-800/60">
                        {p.badge}
                      </span>
                      <span className="text-[11px] text-slate-400 font-medium">
                        {p.status}
                      </span>
                    </div>

                    <h3 className="mt-5 text-xl font-bold text-white">
                      {p.name}
                    </h3>

                    <p className="mt-3 text-xs text-slate-400 leading-relaxed">
                      {p.description}
                    </p>

                    <ul className="mt-6 space-y-2.5 text-xs text-slate-300">
                      {p.highlights.map((h, hIdx) => (
                        <li key={hIdx} className="flex items-start gap-2">
                          <CheckCircle2 className="h-3.5 w-3.5 text-emerald-400 shrink-0 mt-0.5" />
                          <span>{h}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div className="mt-8 pt-4 border-t border-slate-800">
                    {p.isFlagship ? (
                      <Link
                        href={p.href}
                        className="flex w-full items-center justify-center gap-2 rounded-xl bg-emerald-500 py-2.5 px-4 text-xs font-bold text-slate-950 hover:bg-emerald-400 transition-colors"
                      >
                        <span>View EvidenceLog Page</span>
                        <ArrowRight className="h-3.5 w-3.5" />
                      </Link>
                    ) : (
                      <div className="text-center py-2 text-xs font-mono text-slate-500">
                        Roadmap Item
                      </div>
                    )}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Philosophy & Architecture Pillars */}
        <section id="philosophy" className="relative py-24 border-t border-slate-900 bg-slate-950/70">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="mx-auto max-w-3xl text-center">
              <div className="inline-flex items-center gap-1.5 rounded-full border border-emerald-500/30 bg-emerald-950/40 px-3 py-1 text-xs font-semibold text-emerald-400">
                <Lock className="h-3.5 w-3.5" />
                <span>Our Engineering Philosophy</span>
              </div>
              <h2 className="mt-4 text-3xl font-extrabold tracking-tight text-white sm:text-4xl">
                Why We Build Forge Native
              </h2>
              <p className="mt-4 text-base text-slate-400">
                Traditional Jira plugins export your confidential tickets and commit hashes to their own third-party servers. We engineered a better way.
              </p>
            </div>

            <div className="mt-16 grid grid-cols-1 md:grid-cols-3 gap-8">
              {pillars.map((item, idx) => {
                const Icon = item.icon;
                return (
                  <div
                    key={idx}
                    className="rounded-2xl border border-slate-800 bg-slate-900/40 p-7 space-y-4"
                  >
                    <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-slate-950 border border-slate-800 text-emerald-400">
                      <Icon className="h-5 w-5" />
                    </div>
                    <h3 className="text-lg font-bold text-white">{item.title}</h3>
                    <p className="text-xs sm:text-sm text-slate-400 leading-relaxed">
                      {item.desc}
                    </p>
                  </div>
                );
              })}
            </div>
          </div>
        </section>

        {/* Contact & Support Section */}
        <section id="contact" className="relative py-20 border-t border-slate-900 bg-slate-950">
          <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8 text-center space-y-6">
            <h2 className="text-2xl sm:text-3xl font-bold text-white">
              Connect with Langtago Studio
            </h2>
            <p className="text-sm text-slate-400 max-w-xl mx-auto">
              Have questions about our apps, custom compliance mapping, or enterprise Atlassian deployments? Our team is here to help.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-2">
              <a
                href="mailto:support@langtago.com"
                className="inline-flex items-center gap-2 rounded-xl bg-slate-900 border border-slate-700 px-6 py-3 text-xs sm:text-sm font-semibold text-slate-200 hover:border-slate-500 hover:text-white transition-colors"
              >
                <span>Email Studio Support: support@langtago.com</span>
              </a>
              <Link
                href="/evidence-log"
                className="inline-flex items-center gap-2 rounded-xl bg-emerald-500 px-6 py-3 text-xs sm:text-sm font-bold text-slate-950 hover:bg-emerald-400 transition-colors"
              >
                <span>View EvidenceLog for Jira</span>
                <ArrowRight className="h-3.5 w-3.5" />
              </Link>
            </div>
          </div>
        </section>
      </main>

      {/* Footer */}
      <Footer />
    </div>
  );
}
