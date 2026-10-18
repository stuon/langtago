"use client";

import { useState } from "react";
import { Check, ExternalLink } from "lucide-react";

interface PricingProps {
  onOpenAuditModal: () => void;
}

export default function Pricing({ onOpenAuditModal }: PricingProps) {
  const [annualBilling, setAnnualBilling] = useState(true);

  const tiers = [
    {
      name: "Starter",
      id: "tier-starter",
      href: "https://marketplace.atlassian.com",
      priceMonthly: "$0",
      priceAnnual: "$0",
      badge: "Free Tier",
      description: "For squads getting their first SOC 2 Type I or establishing change control baseline.",
      features: [
        "Up to 10 Jira Cloud users",
        "Atlassian Forge native storage (Zero egress)",
        "Automated PR review & status sealing",
        "SHA-256 tamper-evident checksums",
        "Standard CSV evidence exports",
        "Community & documentation support",
      ],
      cta: "Install Free via Marketplace",
      mostPopular: false,
    },
    {
      name: "Pro Growth",
      id: "tier-pro",
      href: "https://marketplace.atlassian.com",
      priceMonthly: "$5",
      priceAnnual: "$4",
      badge: "Recommended",
      description: "Continuous SOC 2 & ISO 27001 evidence automation for high-velocity engineering teams.",
      features: [
        "Unlimited Jira users & projects",
        "1-Click SOC 2 CC8.1 & ISO 27001 Auditor Packs",
        "Separation of Duties automated enforcement",
        "GitHub, GitLab & Bitbucket pipeline integration",
        "Real-time drift & unapproved merge alerts",
        "Vanta, Drata & Secureframe ready JSON exports",
        "Priority developer support from Langtago",
      ],
      cta: "Start 30-Day Free Trial",
      mostPopular: true,
    },
    {
      name: "Enterprise",
      id: "tier-enterprise",
      href: "mailto:support@langtago.com?subject=EvidenceLog%20Enterprise%20Inquiry",
      priceMonthly: "Custom",
      priceAnnual: "Custom",
      badge: "Custom GRC",
      description: "Dedicated compliance architectures, multi-tenant Jira aggregation, and custom SLAs.",
      features: [
        "Everything in Pro Growth",
        "Multi-instance Jira Cloud aggregation",
        "Custom GRC control mapping & frameworks",
        "Custom immutable evidence retention policies",
        "Dedicated Compliance Architect review",
        "Enterprise InfoSec vendor review support",
        "99.9% uptime SLA & dedicated Slack channel",
      ],
      cta: "Contact Enterprise Sales",
      mostPopular: false,
    },
  ];

  return (
    <section id="pricing" className="relative py-16 sm:py-20 border-t border-white/[0.06] bg-[#070a0e]">
      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="mx-auto max-w-3xl text-center">
          <div className="inline-flex items-center gap-2 font-mono text-xs tracking-wider text-emerald-400 uppercase">
            <span className="h-1.5 w-1.5 rounded-full bg-emerald-400" />
            <span>Marketplace Pricing</span>
          </div>

          <h2 className="mt-3 text-2xl font-bold tracking-tight text-white sm:text-3xl">
            Predictable, transparent licensing.
          </h2>
          <p className="mt-2 text-xs sm:text-sm text-zinc-400">
            Billed conveniently through your standard Atlassian Cloud invoice. No separate contracts or credit cards required.
          </p>

          {/* Monthly / Annual Toggle */}
          <div className="mt-8 flex items-center justify-center gap-3">
            <span
              className={`text-xs font-medium ${
                !annualBilling ? "text-white" : "text-zinc-500"
              }`}
            >
              Monthly Billing
            </span>
            <button
              type="button"
              onClick={() => setAnnualBilling(!annualBilling)}
              className="relative inline-flex h-5 w-10 flex-shrink-0 cursor-pointer rounded-full border border-white/[0.1] bg-zinc-900 transition-colors duration-200 ease-in-out focus:outline-none"
              role="switch"
              aria-checked={annualBilling}
            >
              <span
                className={`pointer-events-none inline-block h-4 w-4 transform rounded-full bg-emerald-400 shadow transition duration-200 ease-in-out ${
                  annualBilling ? "translate-x-5" : "translate-x-0.5"
                }`}
              />
            </button>
            <span
              className={`text-xs font-medium flex items-center gap-1.5 ${
                annualBilling ? "text-white" : "text-zinc-500"
              }`}
            >
              <span>Annual Billing</span>
              <span className="rounded bg-emerald-500/10 px-1.5 py-0.5 text-[10px] font-mono text-emerald-400 border border-emerald-500/20">
                -20%
              </span>
            </span>
          </div>
        </div>

        {/* Pricing Cards Grid */}
        <div className="mt-14 grid grid-cols-1 lg:grid-cols-3 gap-6">
          {tiers.map((tier) => (
            <div
              key={tier.id}
              className={`relative rounded-2xl border p-7 sm:p-8 flex flex-col justify-between transition-all ${
                tier.mostPopular
                  ? "border-emerald-500/40 bg-[#0d121a] shadow-xl"
                  : "border-white/[0.08] bg-[#0a0d13] hover:border-white/[0.14]"
              }`}
            >
              <div>
                <div className="flex items-center justify-between">
                  <h3 className="text-lg font-bold text-white">{tier.name}</h3>
                  <span
                    className={`rounded px-2 py-0.5 font-mono text-[10px] uppercase tracking-wider ${
                      tier.mostPopular
                        ? "bg-emerald-500/10 text-emerald-400 border border-emerald-500/30"
                        : "bg-zinc-800 text-zinc-400 border border-white/[0.06]"
                    }`}
                  >
                    {tier.badge}
                  </span>
                </div>

                <p className="mt-3 text-xs text-zinc-400 leading-relaxed min-h-[36px]">
                  {tier.description}
                </p>

                <div className="mt-6 flex items-baseline gap-1">
                  <span className="text-3xl sm:text-4xl font-extrabold tracking-tight text-white font-mono">
                    {annualBilling ? tier.priceAnnual : tier.priceMonthly}
                  </span>
                  {tier.priceAnnual !== "Custom" && (
                    <span className="text-xs text-zinc-400">/ user / mo</span>
                  )}
                </div>
                {tier.priceAnnual !== "Custom" && tier.priceAnnual !== "$0" && (
                  <p className="mt-1 text-[11px] font-mono text-zinc-500">
                    {annualBilling ? "Billed annually via Atlassian Marketplace" : "Billed monthly via Atlassian Marketplace"}
                  </p>
                )}

                {/* Feature List */}
                <div className="mt-7 space-y-3 pt-6 border-t border-white/[0.06]">
                  <span className="text-[11px] font-mono text-zinc-400 uppercase tracking-wider">
                    Included capabilities:
                  </span>
                  <ul className="space-y-2.5 text-xs text-zinc-300">
                    {tier.features.map((feature, fIdx) => (
                      <li key={fIdx} className="flex items-start gap-2.5">
                        <Check className="h-3.5 w-3.5 text-emerald-400 shrink-0 mt-0.5" />
                        <span>{feature}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>

              {/* Tier CTA */}
              <div className="mt-8 pt-4">
                <a
                  href={tier.href}
                  target={tier.href.startsWith("http") ? "_blank" : undefined}
                  rel={tier.href.startsWith("http") ? "noopener noreferrer" : undefined}
                  className={`flex w-full items-center justify-center gap-2 rounded-xl py-2.5 px-4 text-xs font-semibold transition-all ${
                    tier.mostPopular
                      ? "bg-emerald-500 text-zinc-950 hover:bg-emerald-400 shadow-sm"
                      : "border border-white/[0.1] bg-zinc-900 text-zinc-200 hover:bg-zinc-800 hover:text-white"
                  }`}
                >
                  <span>{tier.cta}</span>
                  <ExternalLink className="h-3 w-3 opacity-70" />
                </a>
              </div>
            </div>
          ))}
        </div>

        {/* Assurance Bar */}
        <div className="mt-12 rounded-xl border border-white/[0.08] bg-[#0c1017] p-4 sm:p-5 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-zinc-300">
          <div>
            <span className="font-semibold text-white">Consolidated Atlassian Cloud Billing:</span>{" "}
            <span className="text-zinc-400">
              Invoiced directly through your existing Atlassian bill with automatic seat synchronization.
            </span>
          </div>
          <button
            type="button"
            onClick={onOpenAuditModal}
            className="shrink-0 text-emerald-400 hover:text-emerald-300 font-mono text-[11px] underline underline-offset-4"
          >
            Review Sample SOC 2 Output →
          </button>
        </div>
      </div>
    </section>
  );
}
