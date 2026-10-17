import Link from "next/link";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import {
  ShieldCheck,
  ArrowRight,
  Lock,
  Layers,
  ExternalLink,
  Check,
  ServerOff,
  Code2,
  Mail,
} from "lucide-react";

export default function StudioHomePage() {
  const products = [
    {
      name: "EvidenceLog for Jira",
      status: "Available Now",
      statusColor: "emerald",
      badge: "Flagship App",
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
      badge: "Roadmap Q1",
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
      badge: "Research",
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
      desc: "Compliance tools shouldn't expand your attack surface. All compute executes within Atlassian Forge's sandboxed runtime, and all data stays strictly in customer tenant storage.",
    },
    {
      icon: Code2,
      title: "Developer Velocity First",
      desc: "Tools that force engineers into separate web portals fail to get adopted. Langtago apps live natively where developers already work: inside Jira issues and Git workflows.",
    },
    {
      icon: Lock,
      title: "Mathematical Tamper-Proofing",
      desc: "Instead of relying on mutable database records, change events are cryptographically fingerprinted with SHA-256 HMAC checksums to provide indisputable proof to auditors.",
    },
  ];

  return (
    <div className="relative min-h-screen bg-[#080b0f] font-sans selection:bg-emerald-500/20 selection:text-emerald-200">
      {/* Background Subtle Grid */}
      <div className="pointer-events-none absolute inset-0 grid-hairline opacity-40 radial-mask" />

      {/* Navigation */}
      <Navbar isProductPage={false} />

      <main className="relative">
        {/* Studio Hero Section */}
        <section className="relative overflow-hidden pt-16 pb-20 md:pt-24 md:pb-28">
          <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 text-center">
            {/* Monospace Subhead */}
            <div className="inline-flex items-center gap-2 rounded-full border border-white/[0.08] bg-zinc-900/60 px-3.5 py-1 font-mono text-[11px] text-zinc-300 backdrop-blur-sm">
              <span className="h-1.5 w-1.5 rounded-full bg-emerald-400" />
              <span className="text-zinc-400">Langtago Studio</span>
              <span className="text-zinc-600">/</span>
              <span className="text-emerald-400">Atlassian Forge Apps</span>
            </div>

            {/* Headline */}
            <h1 className="mx-auto mt-6 max-w-4xl text-4xl font-bold tracking-tight text-white sm:text-6xl sm:leading-[1.12]">
              Developer tools that make <br className="hidden sm:inline" />
              enterprise compliance invisible.
            </h1>

            {/* Subtitle */}
            <p className="mx-auto mt-5 max-w-2xl text-base text-zinc-400 sm:text-lg sm:leading-relaxed">
              Langtago builds zero-egress, Atlassian Forge-native software that bridges the gap between high-velocity engineering and rigorous SOC 2, ISO 27001, and HIPAA compliance.
            </p>

            {/* CTAs */}
            <div className="mt-8 flex flex-col sm:flex-row items-center justify-center gap-3">
              <Link
                href="/evidence-log"
                className="group flex w-full sm:w-auto items-center justify-center gap-2 rounded-xl bg-emerald-500 px-5 py-3 text-xs font-semibold text-zinc-950 shadow-sm transition-all hover:bg-emerald-400"
              >
                <span>Explore EvidenceLog for Jira</span>
                <ArrowRight className="h-3.5 w-3.5 transition-transform group-hover:translate-x-0.5" />
              </Link>

              <a
                href="#products"
                className="flex w-full sm:w-auto items-center justify-center gap-2 rounded-xl border border-white/[0.1] bg-zinc-900/80 px-5 py-3 text-xs font-semibold text-zinc-200 transition-all hover:bg-zinc-800 hover:text-white hover:border-white/[0.2]"
              >
                <Layers className="h-3.5 w-3.5 text-zinc-400" />
                <span>View Product Suite</span>
              </a>
            </div>

            {/* Trust Specs */}
            <div className="mt-8 flex flex-wrap items-center justify-center gap-x-6 gap-y-2 font-mono text-[11px] text-zinc-400">
              <span className="flex items-center gap-1.5">
                <Check className="h-3 w-3 text-emerald-400" />
                <span>Atlassian Forge Cloud Native</span>
              </span>
              <span className="text-zinc-700">•</span>
              <span className="flex items-center gap-1.5">
                <Lock className="h-3 w-3 text-zinc-400" />
                <span>Zero External Server Egress</span>
              </span>
              <span className="text-zinc-700">•</span>
              <span className="flex items-center gap-1.5">
                <ShieldCheck className="h-3 w-3 text-emerald-400" />
                <span>Cryptographically Sealed Audits</span>
              </span>
            </div>
          </div>
        </section>

        {/* Flagship App Spotlight Section */}
        <section id="flagship" className="relative py-20 border-t border-white/[0.06] bg-[#070a0e]">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="rounded-2xl border border-white/[0.08] bg-[#0c1017] p-7 sm:p-10 shadow-2xl">
              <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
                {/* Left Description */}
                <div className="lg:col-span-7 space-y-4">
                  <div className="flex items-center gap-2">
                    <span className="rounded bg-emerald-500/10 px-2 py-0.5 font-mono text-[10px] font-bold text-emerald-400 border border-emerald-500/20 uppercase">
                      Studio Flagship
                    </span>
                    <span className="font-mono text-xs text-zinc-500">
                      Atlassian Marketplace Verified
                    </span>
                  </div>

                  <h2 className="text-2xl sm:text-3xl font-bold text-white tracking-tight">
                    EvidenceLog for Jira Cloud
                  </h2>

                  <p className="text-xs sm:text-sm text-zinc-400 leading-relaxed">
                    Eliminate manual screenshotting and endless spreadsheet compilation for SOC 2 and ISO 27001 change management audits. EvidenceLog cryptographically seals peer reviews, CI/CD pipeline runs, and approvals directly into Jira issues.
                  </p>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5 pt-2 font-mono text-xs text-zinc-300">
                    <div className="flex items-center gap-2">
                      <Check className="h-3.5 w-3.5 text-emerald-400" />
                      <span>Zero Egress: 100% in-tenant Forge</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <Check className="h-3.5 w-3.5 text-emerald-400" />
                      <span>Release Merkle Tree root integrity</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <Check className="h-3.5 w-3.5 text-emerald-400" />
                      <span>Preventive workflow gatekeeper</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <Check className="h-3.5 w-3.5 text-emerald-400" />
                      <span>Vanta, Drata, &amp; Big 4 CSV export</span>
                    </div>
                  </div>

                  <div className="pt-3 flex flex-col sm:flex-row gap-2.5">
                    <Link
                      href="/evidence-log"
                      className="inline-flex items-center justify-center gap-2 rounded-xl bg-emerald-500 px-5 py-2.5 text-xs font-semibold text-zinc-950 hover:bg-emerald-400 transition-colors shadow-sm"
                    >
                      <span>Explore EvidenceLog Tour &amp; Pricing</span>
                      <ArrowRight className="h-3.5 w-3.5" />
                    </Link>
                    <a
                      href="https://marketplace.atlassian.com"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center justify-center gap-2 rounded-xl border border-white/[0.1] bg-zinc-900 px-4 py-2.5 text-xs font-medium text-zinc-200 hover:bg-zinc-800 transition-colors"
                    >
                      <span>Marketplace Page</span>
                      <ExternalLink className="h-3 w-3 opacity-60" />
                    </a>
                  </div>
                </div>

                {/* Right Visual Card */}
                <div className="lg:col-span-5">
                  <div className="rounded-xl border border-white/[0.08] bg-black/60 p-5 space-y-3 font-mono text-xs">
                    <div className="flex items-center justify-between pb-2.5 border-b border-white/[0.06]">
                      <div className="flex items-center gap-2 text-white font-semibold">
                        <ShieldCheck className="h-4 w-4 text-emerald-400" />
                        <span>LANG-10 (Sealed)</span>
                      </div>
                      <span className="text-[10px] text-emerald-400">SOC 2 CC8.1</span>
                    </div>

                    <div className="space-y-1.5 text-[11px]">
                      <div className="flex justify-between p-2 rounded bg-zinc-900/80 border border-white/[0.04]">
                        <span className="text-zinc-500">Separation of Duties</span>
                        <span className="text-emerald-400">2 Approvers (Passed)</span>
                      </div>
                      <div className="flex justify-between p-2 rounded bg-zinc-900/80 border border-white/[0.04]">
                        <span className="text-zinc-500">CI Regression Tests</span>
                        <span className="text-emerald-400">1,482/1,482 (94.2%)</span>
                      </div>
                      <div className="flex justify-between p-2 rounded bg-zinc-900/80 border border-white/[0.04]">
                        <span className="text-zinc-500">Vulnerability Scans</span>
                        <span className="text-emerald-400">0 Critical / High</span>
                      </div>
                    </div>

                    <div className="pt-1">
                      <div className="text-[10px] text-zinc-500 truncate">
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
        <section id="products" className="relative py-24 border-t border-white/[0.06] bg-[#080b0f]">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="mx-auto max-w-3xl text-center">
              <div className="inline-flex items-center gap-2 font-mono text-xs tracking-wider text-emerald-400 uppercase">
                <span className="h-1.5 w-1.5 rounded-full bg-emerald-400" />
                <span>Product Suite</span>
              </div>
              <h2 className="mt-3 text-3xl font-bold tracking-tight text-white sm:text-4xl">
                The Langtago Software Portfolio
              </h2>
              <p className="mt-3 text-sm text-zinc-400">
                Focused developer utilities and compliance modules built for the Atlassian Cloud ecosystem.
              </p>
            </div>

            <div className="mt-14 grid grid-cols-1 md:grid-cols-3 gap-5">
              {products.map((p, idx) => (
                <div
                  key={idx}
                  className={`rounded-2xl border p-6 flex flex-col justify-between transition-all ${
                    p.isFlagship
                      ? "border-emerald-500/40 bg-[#0c1017] shadow-lg"
                      : "border-white/[0.08] bg-[#090c10] hover:border-white/[0.14]"
                  }`}
                >
                  <div>
                    <div className="flex items-center justify-between">
                      <span className="font-mono text-[10px] font-bold text-emerald-400 bg-emerald-500/10 px-2 py-0.5 rounded border border-emerald-500/20 uppercase">
                        {p.badge}
                      </span>
                      <span className="font-mono text-[11px] text-zinc-500">
                        {p.status}
                      </span>
                    </div>

                    <h3 className="mt-4 text-lg font-bold text-white">
                      {p.name}
                    </h3>

                    <p className="mt-2 text-xs text-zinc-400 leading-relaxed">
                      {p.description}
                    </p>

                    <ul className="mt-5 space-y-2 text-xs text-zinc-300">
                      {p.highlights.map((h, hIdx) => (
                        <li key={hIdx} className="flex items-start gap-2">
                          <Check className="h-3.5 w-3.5 text-emerald-400 shrink-0 mt-0.5" />
                          <span>{h}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div className="mt-7 pt-4 border-t border-white/[0.06]">
                    {p.isFlagship ? (
                      <Link
                        href={p.href}
                        className="flex w-full items-center justify-center gap-2 rounded-xl bg-emerald-500 py-2 px-4 text-xs font-semibold text-zinc-950 hover:bg-emerald-400 transition-colors"
                      >
                        <span>View EvidenceLog</span>
                        <ArrowRight className="h-3.5 w-3.5" />
                      </Link>
                    ) : (
                      <div className="text-center py-1.5 font-mono text-[11px] text-zinc-500">
                        Roadmap Stage
                      </div>
                    )}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Philosophy & Architecture Pillars */}
        <section id="philosophy" className="relative py-24 border-t border-white/[0.06] bg-[#070a0e]">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="mx-auto max-w-3xl text-center">
              <div className="inline-flex items-center gap-2 font-mono text-xs tracking-wider text-emerald-400 uppercase">
                <span className="h-1.5 w-1.5 rounded-full bg-emerald-400" />
                <span>Design Principles</span>
              </div>
              <h2 className="mt-3 text-3xl font-bold tracking-tight text-white sm:text-4xl">
                Why we build Forge native.
              </h2>
              <p className="mt-3 text-sm text-zinc-400">
                Traditional Jira plugins export confidential tickets and code diffs to their own AWS/GCP servers. We engineered a better way.
              </p>
            </div>

            <div className="mt-14 grid grid-cols-1 md:grid-cols-3 gap-5">
              {pillars.map((item, idx) => {
                const Icon = item.icon;
                return (
                  <div
                    key={idx}
                    className="rounded-2xl border border-white/[0.08] bg-[#0c1017] p-6 space-y-3"
                  >
                    <div className="flex h-9 w-9 items-center justify-center rounded-lg bg-zinc-900 border border-white/[0.06] text-zinc-300">
                      <Icon className="h-4 w-4 text-emerald-400" />
                    </div>
                    <h3 className="text-base font-bold text-white">{item.title}</h3>
                    <p className="text-xs text-zinc-400 leading-relaxed">
                      {item.desc}
                    </p>
                  </div>
                );
              })}
            </div>
          </div>
        </section>

        {/* Enterprise Inquiries & Support Card */}
        <section id="contact" className="relative py-24 border-t border-white/[0.06] bg-[#070a0e]">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="rounded-2xl border border-white/[0.08] bg-[#0c1017] p-8 sm:p-12 shadow-2xl">
              <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
                {/* Left Column: Commercial / Security Value (7 cols) */}
                <div className="lg:col-span-7 space-y-4">
                  <div className="inline-flex items-center gap-2 font-mono text-xs tracking-wider text-emerald-400 uppercase">
                    <span className="h-1.5 w-1.5 rounded-full bg-emerald-400" />
                    <span>Enterprise &amp; Compliance Inquiries</span>
                  </div>

                  <h2 className="text-2xl sm:text-3xl font-bold text-white tracking-tight">
                    Deploy with confidence. <br className="hidden sm:inline" />
                    Backed directly by our engineering team.
                  </h2>

                  <p className="text-xs sm:text-sm text-zinc-400 leading-relaxed max-w-xl">
                    Need assistance with an internal vendor security review, custom SOC 2 control mappings, or high-volume multi-instance Jira licenses? We fast-track enterprise onboarding with pre-approved Forge security packages.
                  </p>

                  <div className="pt-2 space-y-2.5 font-mono text-xs text-zinc-300">
                    <div className="flex items-center gap-2.5">
                      <Check className="h-4 w-4 text-emerald-400 shrink-0" />
                      <span>Direct engineer response within 4 business hours</span>
                    </div>
                    <div className="flex items-center gap-2.5">
                      <Check className="h-4 w-4 text-emerald-400 shrink-0" />
                      <span>Security questionnaire &amp; Data Protection Agreement (DPA) package</span>
                    </div>
                    <div className="flex items-center gap-2.5">
                      <Check className="h-4 w-4 text-emerald-400 shrink-0" />
                      <span>Zero-egress architecture verified by Atlassian Forge platform</span>
                    </div>
                  </div>
                </div>

                {/* Right Column: Two Action Cards (5 cols) */}
                <div className="lg:col-span-5 space-y-3.5">
                  {/* Action 1: Self-Serve Product Tour */}
                  <div className="rounded-xl border border-emerald-500/30 bg-emerald-950/[0.15] p-5 space-y-3 transition-colors hover:border-emerald-500/50">
                    <div className="flex items-center justify-between">
                      <span className="font-mono text-[10px] font-bold text-emerald-400 uppercase tracking-wider">
                        Flagship App
                      </span>
                      <span className="rounded bg-emerald-500/10 px-2 py-0.5 font-mono text-[10px] text-emerald-400 border border-emerald-500/20">
                        Free up to 10 users
                      </span>
                    </div>
                    <h3 className="text-sm font-bold text-white">
                      Start using EvidenceLog for Jira
                    </h3>
                    <p className="text-xs text-zinc-400 leading-relaxed">
                      Install in 2 minutes directly from the Atlassian Marketplace with automated SOC 2 sealing.
                    </p>
                    <Link
                      href="/evidence-log"
                      className="inline-flex w-full items-center justify-center gap-2 rounded-lg bg-emerald-500 py-2.5 px-4 text-xs font-semibold text-zinc-950 hover:bg-emerald-400 transition-colors shadow-sm"
                    >
                      <span>Explore EvidenceLog &amp; Pricing</span>
                      <ArrowRight className="h-3.5 w-3.5" />
                    </Link>
                  </div>

                  {/* Action 2: Direct Enterprise Contact */}
                  <div className="rounded-xl border border-white/[0.08] bg-zinc-900/60 p-5 space-y-3 transition-colors hover:border-white/[0.16]">
                    <div className="flex items-center justify-between">
                      <span className="font-mono text-[10px] font-bold text-zinc-400 uppercase tracking-wider">
                        Direct Inquiries
                      </span>
                      <span className="font-mono text-[10px] text-zinc-500">
                        support@langtago.com
                      </span>
                    </div>
                    <h3 className="text-sm font-bold text-white">
                      Security &amp; Custom Control Reviews
                    </h3>
                    <p className="text-xs text-zinc-400 leading-relaxed">
                      Speak directly with our technical team for custom framework mapping or procurement.
                    </p>
                    <a
                      href="mailto:support@langtago.com?subject=Langtago%20Enterprise%20Inquiry"
                      className="inline-flex w-full items-center justify-center gap-2 rounded-lg border border-white/[0.1] bg-zinc-900 py-2.5 px-4 text-xs font-medium text-zinc-200 hover:bg-zinc-800 hover:text-white transition-colors"
                    >
                      <Mail className="h-3.5 w-3.5 text-emerald-400" />
                      <span>Contact Engineering Team</span>
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>

      {/* Footer */}
      <Footer />
    </div>
  );
}
