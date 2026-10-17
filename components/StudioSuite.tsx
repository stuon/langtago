"use client";

import { useState } from "react";
import Link from "next/link";
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
  Copy,
  Sparkles,
} from "lucide-react";

export default function StudioSuite() {
  const [copiedEmail, setCopiedEmail] = useState(false);

  const products = [
    {
      name: "EvidenceLog for Jira",
      status: "Available Now",
      statusColor: "emerald",
      badge: "Flagship Product",
      href: "#preview",
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
        "Real-time drift detection alerting SecOps whenever code is merged to protected branches without an authorized Jira issue or approved test pass.",
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
        "Zero long-lived admin credentials",
      ],
      isFlagship: false,
    },
  ];

  const handleCopyEmail = () => {
    navigator.clipboard.writeText("support@langtago.com");
    setCopiedEmail(true);
    setTimeout(() => setCopiedEmail(false), 2000);
  };

  return (
    <section id="studio" className="relative py-24 border-t border-white/[0.06] bg-[#070a0f]">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="mx-auto max-w-3xl text-center space-y-3 mb-16">
          <div className="inline-flex items-center gap-2 font-mono text-xs tracking-wider text-emerald-400 uppercase">
            <span className="h-1.5 w-1.5 rounded-full bg-emerald-400" />
            <span>Langtago Product Suite</span>
          </div>
          <h2 className="text-3xl font-bold tracking-tight text-white sm:text-4xl">
            Software for high-trust engineering teams.
          </h2>
          <p className="text-sm text-zinc-400 max-w-xl mx-auto leading-relaxed">
            Langtago builds developer-first governance tools designed to eliminate audit scramble without slowing down shipping velocity.
          </p>
        </div>

        {/* Product Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {products.map((product) => (
            <div
              key={product.name}
              className={`rounded-2xl border p-6 flex flex-col justify-between transition-all duration-200 ${
                product.isFlagship
                  ? "border-emerald-500/40 bg-[#0d121c] shadow-lg shadow-emerald-500/5 relative"
                  : "border-white/[0.08] bg-[#0b0e14] hover:border-white/[0.14]"
              }`}
            >
              <div>
                <div className="flex items-center justify-between">
                  <span
                    className={`rounded px-2 py-0.5 font-mono text-[10px] font-semibold border ${
                      product.statusColor === "emerald"
                        ? "bg-emerald-500/10 text-emerald-400 border-emerald-500/30"
                        : product.statusColor === "cyan"
                        ? "bg-cyan-500/10 text-cyan-400 border-cyan-500/30"
                        : "bg-zinc-800 text-zinc-400 border-zinc-700"
                    }`}
                  >
                    {product.badge}
                  </span>
                  <span className="font-mono text-[11px] text-zinc-500">
                    {product.status}
                  </span>
                </div>

                <h3 className="mt-4 text-lg font-bold text-white">{product.name}</h3>
                <p className="mt-2 text-xs text-zinc-400 leading-relaxed">
                  {product.description}
                </p>

                <div className="mt-5 space-y-2 font-mono text-[11px] text-zinc-300">
                  {product.highlights.map((h, i) => (
                    <div key={i} className="flex items-center gap-2">
                      <Check className="h-3.5 w-3.5 text-emerald-400 shrink-0" />
                      <span>{h}</span>
                    </div>
                  ))}
                </div>
              </div>

              <div className="mt-6 pt-4 border-t border-white/[0.06] flex items-center justify-between">
                {product.isFlagship ? (
                  <a
                    href="#preview"
                    className="inline-flex items-center gap-1.5 text-xs font-semibold text-emerald-400 hover:text-emerald-300 transition-colors"
                  >
                    <span>Inspect Live Demo</span>
                    <ArrowRight className="h-3.5 w-3.5" />
                  </a>
                ) : (
                  <span className="font-mono text-[11px] text-zinc-500">
                    Coming Soon to Forge
                  </span>
                )}
                {product.isFlagship && (
                  <a
                    href={product.externalHref}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-zinc-500 hover:text-zinc-300"
                  >
                    <ExternalLink className="h-3.5 w-3.5" />
                  </a>
                )}
              </div>
            </div>
          ))}
        </div>

        {/* Studio Principles Section */}
        <div id="philosophy" className="mt-20 pt-16 border-t border-white/[0.06]">
          <div className="mx-auto max-w-3xl text-center space-y-3 mb-12">
            <span className="font-mono text-xs font-semibold text-zinc-400 uppercase tracking-wider">
              Engineering Principles
            </span>
            <h3 className="text-2xl font-bold text-white sm:text-3xl">
              Architecture over promises.
            </h3>
            <p className="text-xs sm:text-sm text-zinc-400 leading-relaxed">
              Every product built by Langtago adheres to three non-negotiable security mandates.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="rounded-2xl border border-white/[0.08] bg-[#0a0e16] p-6 space-y-3">
              <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-emerald-500/10 text-emerald-400 border border-emerald-500/20">
                <ServerOff className="h-5 w-5" />
              </div>
              <h4 className="text-base font-bold text-white">Zero External Server Egress</h4>
              <p className="text-xs text-zinc-400 leading-relaxed">
                Customer data never touches Langtago servers. Applications execute exclusively inside Atlassian-managed serverless containers.
              </p>
            </div>

            <div className="rounded-2xl border border-white/[0.08] bg-[#0a0e16] p-6 space-y-3">
              <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-cyan-500/10 text-cyan-400 border border-cyan-500/20">
                <Lock className="h-5 w-5" />
              </div>
              <h4 className="text-base font-bold text-white">Cryptographic Verification</h4>
              <p className="text-xs text-zinc-400 leading-relaxed">
                Auditors should not need to trust screenshots. We employ deterministic SHA-256 HMAC checksums and Merkle trees to prove evidence integrity.
              </p>
            </div>

            <div className="rounded-2xl border border-white/[0.08] bg-[#0a0e16] p-6 space-y-3">
              <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-purple-500/10 text-purple-400 border border-purple-500/20">
                <Code2 className="h-5 w-5" />
              </div>
              <h4 className="text-base font-bold text-white">Zero Developer Friction</h4>
              <p className="text-xs text-zinc-400 leading-relaxed">
                Engineers should never leave Jira or Git to bookmark secondary portals. Compliance runs in the background of their existing workflows.
              </p>
            </div>
          </div>
        </div>

        {/* Enterprise Inquiries Box */}
        <div id="contact" className="mt-16 rounded-2xl border border-white/[0.08] bg-[#0b0f17] p-7 sm:p-8 flex flex-col sm:flex-row items-center justify-between gap-6">
          <div className="space-y-1 text-center sm:text-left">
            <h4 className="text-lg font-bold text-white">Custom GRC Architecture or Security Review?</h4>
            <p className="text-xs text-zinc-400">
              Need a Vendor Security Assessment questionnaire (CAIQ / SIG), SOC 2 report, or enterprise deployment consultation?
            </p>
          </div>

          <div className="flex items-center gap-3">
            <button
              type="button"
              onClick={handleCopyEmail}
              className="flex items-center gap-2 rounded-xl border border-white/[0.1] bg-zinc-900 px-4 py-2.5 font-mono text-xs font-medium text-zinc-200 hover:bg-zinc-800 hover:text-white transition-colors"
            >
              <Copy className="h-3.5 w-3.5" />
              <span>{copiedEmail ? "Email Copied" : "support@langtago.com"}</span>
            </button>
            <a
              href="mailto:support@langtago.com"
              className="flex items-center gap-1.5 rounded-xl bg-emerald-500 px-4 py-2.5 text-xs font-semibold text-zinc-950 hover:bg-emerald-400 transition-colors shadow-sm"
            >
              <Mail className="h-3.5 w-3.5" />
              <span>Contact Studio</span>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
