"use client";

import { useState } from "react";
import { Check, ArrowRight } from "lucide-react";

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
      period: "/ month",
      badge: "Free Forever",
      description: "For squads up to 10 users getting audit-ready without budget approval.",
      features: [
        "Up to 10 Jira Cloud users",
        "Atlassian Forge native storage (Zero egress)",
        "Automated PR review & status sealing",
        "SHA-256 tamper-evident checksums",
        "Standard CSV auditor export",
      ],
      cta: "Install Free on Jira",
      isPrimary: false,
    },
    {
      name: "Pro Growth",
      id: "tier-pro",
      href: "https://marketplace.atlassian.com",
      priceMonthly: "$5",
      priceAnnual: "$4",
      period: "/ user / mo",
      badge: "Best Choice",
      description: "Automated SOC 2 CC8.1 & ISO 27001 evidence for scaling engineering teams.",
      features: [
        "Unlimited Jira users & projects",
        "Separation of Duties automated enforcement",
        "1-Click SOC 2 & ISO 27001 Auditor Packs",
        "Vanta, Drata & Secureframe ready JSON",
        "GitHub, GitLab & Bitbucket pipelines",
        "Priority developer support",
      ],
      cta: "Start 30-Day Free Trial",
      isPrimary: true,
    },
    {
      name: "Enterprise",
      id: "tier-enterprise",
      href: "mailto:support@langtago.com?subject=EvidenceLog%20Enterprise%20Inquiry",
      priceMonthly: "Custom",
      priceAnnual: "Custom",
      period: "",
      badge: "Custom GRC",
      description: "For multi-instance Jira setups, custom compliance mapping, and enterprise SLAs.",
      features: [
        "Multi-tenant Jira Cloud aggregation",
        "Custom GRC control mapping & retention",
        "Dedicated compliance architect review",
        "Vendor security assessment support",
        "99.9% uptime SLA & dedicated channel",
      ],
      cta: "Contact Enterprise Sales",
      isPrimary: false,
    },
  ];

  return (
    <section id="pricing" className="relative py-16 sm:py-24 bg-white border-t border-slate-200/80">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="mx-auto max-w-3xl text-center space-y-3">
          <div className="inline-flex items-center gap-2 rounded-full bg-emerald-50 border border-emerald-200 px-3.5 py-1 text-xs font-bold text-emerald-800 uppercase tracking-wider">
            <span>Transparent Pricing</span>
          </div>

          <h2 className="text-3xl sm:text-5xl font-extrabold tracking-tight text-slate-900">
            Simple, predictable pricing.
          </h2>

          <p className="text-base text-slate-600">
            Billed conveniently through your standard Atlassian Cloud invoice. No separate contracts or credit cards needed.
          </p>

          {/* Monthly / Annual Toggle */}
          <div className="pt-4 flex items-center justify-center gap-3">
            <span
              className={`text-sm font-semibold cursor-pointer ${
                !annualBilling ? "text-slate-900" : "text-slate-400"
              }`}
              onClick={() => setAnnualBilling(false)}
            >
              Monthly
            </span>
            <button
              type="button"
              onClick={() => setAnnualBilling(!annualBilling)}
              className="relative inline-flex h-6 w-11 flex-shrink-0 cursor-pointer rounded-full border border-slate-300 bg-slate-200 transition-colors duration-200 ease-in-out focus:outline-none"
              role="switch"
              aria-checked={annualBilling}
            >
              <span
                className={`pointer-events-none inline-block h-5 w-5 transform rounded-full bg-emerald-600 shadow-md transition duration-200 ease-in-out ${
                  annualBilling ? "translate-x-5" : "translate-x-0.5"
                }`}
              />
            </button>
            <span
              className={`text-sm font-semibold flex items-center gap-2 cursor-pointer ${
                annualBilling ? "text-slate-900" : "text-slate-400"
              }`}
              onClick={() => setAnnualBilling(true)}
            >
              <span>Annual</span>
              <span className="rounded-full bg-emerald-100 px-2 py-0.5 text-xs font-bold text-emerald-800">
                Save 20%
              </span>
            </span>
          </div>
        </div>

        {/* Pricing Cards Grid (Easy Design, Clear Choice) */}
        <div className="mt-14 grid grid-cols-1 lg:grid-cols-3 gap-8 items-stretch">
          {tiers.map((tier) => (
            <div
              key={tier.id}
              className={`relative rounded-3xl p-8 sm:p-9 flex flex-col justify-between transition-all duration-300 ${
                tier.isPrimary
                  ? "bg-white border-2 border-emerald-500 shadow-xl shadow-emerald-500/10 lg:-translate-y-2"
                  : "bg-white border border-slate-200/90 shadow-sm hover:shadow-lg hover:border-slate-300"
              }`}
            >
              {/* Elevated Badge on Recommended Tier (Inspired by reference screenshot) */}
              {tier.isPrimary && (
                <div className="absolute -top-3.5 right-6 rounded-full bg-slate-900 px-3.5 py-1 text-xs font-bold uppercase tracking-wider text-white shadow-md">
                  {tier.badge}
                </div>
              )}

              <div>
                <div className="flex items-center justify-between">
                  <h3 className="text-xl font-bold text-slate-900">{tier.name}</h3>
                  {!tier.isPrimary && (
                    <span className="rounded-lg bg-slate-100 px-2.5 py-0.5 text-xs font-semibold text-slate-600">
                      {tier.badge}
                    </span>
                  )}
                </div>

                <p className="mt-3 text-xs sm:text-sm text-slate-500 leading-relaxed min-h-[42px]">
                  {tier.description}
                </p>

                {/* Big Bold Green Price (Exactly like reference) */}
                <div className="mt-6 flex items-baseline gap-1.5">
                  <span className="text-4xl sm:text-5xl font-black tracking-tight text-emerald-600 font-sans">
                    {annualBilling ? tier.priceAnnual : tier.priceMonthly}
                  </span>
                  {tier.period && (
                    <span className="text-sm font-semibold text-slate-500">{tier.period}</span>
                  )}
                </div>

                {tier.priceAnnual !== "Custom" && tier.priceAnnual !== "$0" && (
                  <p className="mt-1 text-xs text-slate-400 font-medium">
                    {annualBilling ? "Billed annually via Atlassian Marketplace" : "Billed monthly via Atlassian Marketplace"}
                  </p>
                )}

                {/* Primary Button */}
                <div className="mt-7">
                  <a
                    href={tier.href}
                    target={tier.href.startsWith("http") ? "_blank" : undefined}
                    rel={tier.href.startsWith("http") ? "noopener noreferrer" : undefined}
                    className={`flex w-full items-center justify-center gap-2 rounded-2xl py-3.5 px-4 text-sm font-bold transition-all ${
                      tier.isPrimary
                        ? "bg-emerald-600 text-white hover:bg-emerald-500 shadow-md shadow-emerald-600/25"
                        : "border-2 border-slate-200 bg-white text-slate-800 hover:bg-slate-50 hover:border-slate-300"
                    }`}
                  >
                    <span>{tier.cta}</span>
                    <ArrowRight className="h-4 w-4" />
                  </a>
                </div>

                {/* Included Capabilities List */}
                <div className="mt-8 pt-6 border-t border-slate-100 space-y-3">
                  <span className="text-xs font-bold uppercase tracking-wider text-slate-400">
                    What&apos;s included:
                  </span>
                  <ul className="space-y-3 text-sm text-slate-700">
                    {tier.features.map((feature, fIdx) => (
                      <li key={fIdx} className="flex items-start gap-3">
                        <Check className="h-4 w-4 text-emerald-600 shrink-0 mt-0.5" />
                        <span className="leading-snug">{feature}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>

              {/* Bottom Card Footer */}
              <div className="mt-8 pt-4 border-t border-slate-100 text-center">
                <span className="text-xs text-slate-400 font-medium">
                  Atlassian Cloud integrated billing
                </span>
              </div>
            </div>
          ))}
        </div>

        {/* Assurance Banner */}
        <div className="mt-12 rounded-2xl border border-slate-200 bg-white p-5 sm:p-6 flex flex-col sm:flex-row items-center justify-between gap-4 text-sm text-slate-600 shadow-xs">
          <div>
            <strong className="text-slate-900 font-bold">Consolidated Atlassian Invoice:</strong>{" "}
            <span>No separate vendor onboarding. Everything is charged through your active Jira Cloud account.</span>
          </div>
          <button
            type="button"
            onClick={onOpenAuditModal}
            className="shrink-0 text-sm font-bold text-emerald-700 hover:text-emerald-800 underline underline-offset-4"
          >
            Review Sample SOC 2 Output →
          </button>
        </div>
      </div>
    </section>
  );
}
