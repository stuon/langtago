"use client";

import { useState } from "react";
import {
  ArrowRight,
  ExternalLink,
  Check,
  Mail,
  Copy,
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
        "Continuous compliance and tamper-evident change evidence sealed directly inside Jira Cloud issues for SOC 2, ISO 27001, and HIPAA.",
      highlights: [
        "100% Atlassian Forge Native (Zero egress)",
        "SHA-256 cryptographic verification seals",
        "1-Click auditor packages (PDF, CSV, JSON)",
        "Separation of duties & CI/CD checks",
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
        "Real-time drift detection alerting SecOps whenever code merges to protected branches without an approved Jira issue or passing test suite.",
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
        "Ephemeral permission tracking and automated privilege revocation auditing for enterprise Jira and Confluence workspaces.",
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
    <section id="studio" className="relative py-20 border-t border-white/[0.06] bg-[#070a0f]">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="mx-auto max-w-2xl text-center space-y-2 mb-12">
          <div className="inline-flex items-center gap-2 font-mono text-[11px] tracking-wider text-emerald-400 uppercase">
            <span className="h-1.5 w-1.5 rounded-full bg-emerald-400" />
            <span>Langtago Product Suite</span>
          </div>
          <h2 className="text-2xl font-bold tracking-tight text-white sm:text-3xl">
            Software for high-trust engineering teams.
          </h2>
          <p className="text-xs sm:text-sm text-zinc-400">
            Developer-first governance tools designed to eliminate audit scramble without slowing shipping velocity.
          </p>
        </div>

        {/* Product Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
          {products.map((product) => (
            <div
              key={product.name}
              className={`rounded-xl border p-5 flex flex-col justify-between transition-all duration-200 ${
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

                <h3 className="mt-3.5 text-base font-bold text-white">{product.name}</h3>
                <p className="mt-1.5 text-xs text-zinc-400 leading-relaxed">
                  {product.description}
                </p>

                <div className="mt-4 space-y-1.5 font-mono text-[11px] text-zinc-300">
                  {product.highlights.map((h, i) => (
                    <div key={i} className="flex items-center gap-2">
                      <Check className="h-3 w-3 text-emerald-400 shrink-0" />
                      <span>{h}</span>
                    </div>
                  ))}
                </div>
              </div>

              <div className="mt-5 pt-3.5 border-t border-white/[0.06] flex items-center justify-between">
                {product.isFlagship ? (
                  <a
                    href="#preview"
                    className="inline-flex items-center gap-1.5 text-xs font-semibold text-emerald-400 hover:text-emerald-300 transition-colors"
                  >
                    <span>Inspect Live Demo</span>
                    <ArrowRight className="h-3 w-3" />
                  </a>
                ) : (
                  <span className="font-mono text-[10.5px] text-zinc-500">
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

        {/* Enterprise Inquiries Box */}
        <div id="contact" className="mt-10 rounded-xl border border-white/[0.08] bg-[#0b0f17] p-5 sm:p-6 flex flex-col sm:flex-row items-center justify-between gap-4">
          <div className="space-y-1 text-center sm:text-left">
            <h4 className="text-sm sm:text-base font-bold text-white">Custom GRC Architecture or Security Review?</h4>
            <p className="text-xs text-zinc-400">
              Need a Vendor Security Assessment questionnaire (CAIQ / SIG), SOC 2 report, or enterprise consultation?
            </p>
          </div>

          <div className="flex items-center gap-2.5 shrink-0">
            <button
              type="button"
              onClick={handleCopyEmail}
              className="flex items-center gap-1.5 rounded-lg border border-white/[0.1] bg-zinc-900 px-3.5 py-2 font-mono text-xs font-medium text-zinc-200 hover:bg-zinc-800 hover:text-white transition-colors"
            >
              <Copy className="h-3 w-3" />
              <span>{copiedEmail ? "Copied" : "support@langtago.com"}</span>
            </button>
            <a
              href="mailto:support@langtago.com"
              className="flex items-center gap-1.5 rounded-lg bg-emerald-500 px-3.5 py-2 text-xs font-semibold text-zinc-950 hover:bg-emerald-400 transition-colors shadow-sm"
            >
              <Mail className="h-3 w-3" />
              <span>Contact Studio</span>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
