"use client";

import { useState } from "react";
import { Check, Sparkles, ExternalLink, ShieldCheck } from "lucide-react";

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
      description: "Ideal for early-stage teams preparing for their first SOC 2 Type I audit.",
      features: [
        "Up to 10 Jira Cloud users",
        "Atlassian Forge native storage (Zero external egress)",
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
      badge: "Most Popular",
      description: "Comprehensive SOC 2 & ISO 27001 evidence automation for fast-moving engineering teams.",
      features: [
        "Unlimited Jira users & projects",
        "1-Click SOC 2 CC8.1 & ISO 27001 Auditor Packs",
        "Separation of Duties automated enforcement",
        "GitHub, GitLab & Bitbucket pipeline integration",
        "Real-time drift & unapproved merge alerts",
        "Vanta, Drata & Secureframe ready JSON exports",
        "Priority support from Langtago engineers",
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
      badge: "Custom Security",
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
    <section id="pricing" className="relative py-24 sm:py-32 border-t border-slate-900 bg-slate-950">
      {/* Background glow */}
      <div className="pointer-events-none absolute inset-0 flex items-center justify-center">
        <div className="h-[400px] w-[600px] rounded-full bg-emerald-500/5 blur-[120px]" />
      </div>

      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="mx-auto max-w-3xl text-center">
          <div className="inline-flex items-center gap-1.5 rounded-full border border-emerald-500/30 bg-emerald-950/40 px-3 py-1 text-xs font-semibold text-emerald-400">
            <ShieldCheck className="h-3.5 w-3.5" />
            <span>Transparent Atlassian Marketplace Pricing</span>
          </div>
          <h2 className="mt-4 text-3xl font-extrabold tracking-tight text-white sm:text-4xl">
            Predictable Pricing. Zero Audit Surprises.
          </h2>
          <p className="mt-4 text-base text-slate-400 sm:text-lg">
            Billed conveniently through your standard Atlassian Cloud invoice. No separate contracts or credit cards required.
          </p>

          {/* Monthly / Annual Toggle */}
          <div className="mt-8 flex items-center justify-center gap-3">
            <span
              className={`text-xs sm:text-sm font-medium ${
                !annualBilling ? "text-white" : "text-slate-400"
              }`}
            >
              Monthly Billing
            </span>
            <button
              type="button"
              onClick={() => setAnnualBilling(!annualBilling)}
              className="relative inline-flex h-6 w-11 flex-shrink-0 cursor-pointer rounded-full border-2 border-transparent bg-slate-800 transition-colors duration-200 ease-in-out focus:outline-none focus:ring-2 focus:ring-emerald-500 focus:ring-offset-2 focus:ring-offset-slate-950"
              role="switch"
              aria-checked={annualBilling}
            >
              <span
                className={`pointer-events-none inline-block h-5 w-5 transform rounded-full bg-emerald-400 shadow ring-0 transition duration-200 ease-in-out ${
                  annualBilling ? "translate-x-5" : "translate-x-0"
                }`}
              />
            </button>
            <span
              className={`text-xs sm:text-sm font-medium flex items-center gap-1.5 ${
                annualBilling ? "text-white" : "text-slate-400"
              }`}
            >
              <span>Annual Billing</span>
              <span className="rounded-full bg-emerald-500/20 px-2 py-0.5 text-[10px] font-bold text-emerald-400 border border-emerald-500/30">
                Save 20%
              </span>
            </span>
          </div>
        </div>

        {/* Pricing Cards Grid */}
        <div className="mt-14 grid grid-cols-1 lg:grid-cols-3 gap-8">
          {tiers.map((tier) => (
            <div
              key={tier.id}
              className={`relative rounded-2xl border p-8 transition-all flex flex-col justify-between ${
                tier.mostPopular
                  ? "border-emerald-500/60 bg-gradient-to-b from-slate-900 to-slate-950 shadow-2xl shadow-emerald-500/10 ring-1 ring-emerald-500/40"
                  : "border-slate-800 bg-slate-900/40 hover:border-slate-700"
              }`}
            >
              {tier.mostPopular && (
                <div className="absolute -top-3.5 left-1/2 -translate-x-1/2">
                  <span className="inline-flex items-center gap-1 rounded-full bg-gradient-to-r from-emerald-500 to-teal-400 px-3.5 py-1 text-xs font-bold text-slate-950 shadow-md">
                    <Sparkles className="h-3 w-3" />
                    {tier.badge}
                  </span>
                </div>
              )}

              <div>
                <div className="flex items-center justify-between">
                  <h3 className="text-xl font-bold text-white">{tier.name}</h3>
                  {!tier.mostPopular && (
                    <span className="rounded bg-slate-800 px-2 py-0.5 text-xs font-medium text-slate-400">
                      {tier.badge}
                    </span>
                  )}
                </div>

                <p className="mt-3 text-xs text-slate-400 leading-relaxed min-h-[36px]">
                  {tier.description}
                </p>

                <div className="mt-6 flex items-baseline gap-1">
                  <span className="text-4xl font-extrabold tracking-tight text-white">
                    {annualBilling ? tier.priceAnnual : tier.priceMonthly}
                  </span>
                  {tier.priceAnnual !== "Custom" && (
                    <span className="text-xs text-slate-400">/ user / month</span>
                  )}
                </div>
                {tier.priceAnnual !== "Custom" && tier.priceAnnual !== "$0" && (
                  <p className="mt-1 text-[11px] text-slate-500">
                    {annualBilling ? "Billed annually via Atlassian Marketplace" : "Billed monthly via Atlassian Marketplace"}
                  </p>
                )}

                {/* Feature List */}
                <div className="mt-8 space-y-3 pt-6 border-t border-slate-800/80">
                  <span className="text-xs font-semibold tracking-wider text-slate-300 uppercase">
                    What&apos;s included:
                  </span>
                  <ul className="space-y-3 text-xs text-slate-300">
                    {tier.features.map((feature, fIdx) => (
                      <li key={fIdx} className="flex items-start gap-2.5">
                        <Check className="h-4 w-4 text-emerald-400 shrink-0 mt-0.5" />
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
                  className={`flex w-full items-center justify-center gap-2 rounded-xl py-3 px-4 text-xs font-bold transition-all ${
                    tier.mostPopular
                      ? "bg-gradient-to-r from-emerald-500 to-teal-400 text-slate-950 shadow-lg shadow-emerald-500/25 hover:brightness-110"
                      : "border border-slate-700 bg-slate-800/80 text-white hover:bg-slate-700 hover:border-slate-600"
                  }`}
                >
                  <span>{tier.cta}</span>
                  <ExternalLink className="h-3.5 w-3.5 opacity-70" />
                </a>
              </div>
            </div>
          ))}
        </div>

        {/* Atlassian Billing Assurance Bar */}
        <div className="mt-12 rounded-xl border border-slate-800/80 bg-slate-900/60 p-4 sm:p-5 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-slate-300">
          <div className="flex items-center gap-3">
            <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-emerald-500/10 text-emerald-400 border border-emerald-500/20">
              <ShieldCheck className="h-4 w-4" />
            </div>
            <div>
              <p className="font-semibold text-white">Consolidated Atlassian Cloud Billing</p>
              <p className="text-slate-400">
                Purchased and invoiced directly via Atlassian Marketplace with standard 30-day trial and unified user tier matching.
              </p>
            </div>
          </div>
          <button
            onClick={onOpenAuditModal}
            className="shrink-0 text-emerald-400 hover:text-emerald-300 underline underline-offset-4 font-medium"
          >
            Review Sample SOC 2 Output &rarr;
          </button>
        </div>
      </div>
    </section>
  );
}
