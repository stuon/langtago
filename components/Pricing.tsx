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
      name: "Free Plan",
      subtitle: "Perfect for testing & squads up to 10 users",
      priceMonthly: "$0",
      priceAnnual: "$0",
      period: "Free forever",
      cta: "Install Free on Jira",
      features: [
        "Up to 10 Jira Cloud users",
        "Atlassian Forge native execution",
        "Automated PR review verification",
        "SHA-256 cryptographic seal",
        "Standard CSV workpaper export",
      ],
      isPopular: false,
    },
    {
      name: "Pro Growth",
      subtitle: "Continuous SOC 2 & ISO 27001 automation",
      priceMonthly: "$3.50",
      priceAnnual: "$2.50",
      period: "/ user / month",
      cta: "Start 30-Day Free Trial",
      features: [
        "Unlimited Jira users & projects",
        "Separation of duties automatic check",
        "1-Click SOC 2 & ISO 27001 Auditor Pack",
        "Vanta, Drata & Secureframe sync",
        "GitHub, GitLab & Bitbucket support",
        "Priority developer support",
      ],
      isPopular: true,
    },
    {
      name: "Enterprise",
      subtitle: "For multi-instance Jira & custom GRC SLAs",
      priceMonthly: "Custom",
      priceAnnual: "Custom",
      period: "Billed annually",
      cta: "Contact Enterprise Sales",
      features: [
        "Multi-instance Jira Cloud aggregation",
        "Custom compliance control mapping",
        "Dedicated compliance architect review",
        "Vendor security assessment support",
        "99.9% uptime SLA & dedicated channel",
      ],
      isPopular: false,
    },
  ];

  return (
    <section id="pricing" className="py-20 sm:py-28 bg-white border-t border-slate-100">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Contis-inspired Section Heading */}
        <div className="tf__common_heading mb-14 max-w-2xl mx-auto">
          <h6 className="text-[#15803d] font-bold text-xs sm:text-sm tracking-widest uppercase mb-2 font-heading">
            PRICING
          </h6>
          <h2 className="text-3xl sm:text-5xl font-bold text-[#111013] font-heading leading-tight">
            Simple, transparent pricing for every team
          </h2>
          <p className="text-sm sm:text-base text-[#5c728e] mt-3">
            Billed conveniently through your standard Atlassian Cloud invoice. No separate credit card required.
          </p>

          {/* Monthly / Annual Toggle */}
          <div className="pt-6 flex items-center justify-center gap-3">
            <span
              className={`text-xs sm:text-sm font-semibold cursor-pointer ${
                !annualBilling ? "text-[#111013]" : "text-[#5c728e]"
              }`}
              onClick={() => setAnnualBilling(false)}
            >
              Monthly Billing
            </span>
            <button
              type="button"
              onClick={() => setAnnualBilling(!annualBilling)}
              className="relative inline-flex h-6 w-11 items-center rounded-full bg-[#111013] transition-colors"
            >
              <span
                className={`inline-block h-4 w-4 transform rounded-full bg-white transition-transform ${
                  annualBilling ? "translate-x-6" : "translate-x-1"
                }`}
              />
            </button>
            <span
              className={`text-xs sm:text-sm font-semibold cursor-pointer flex items-center gap-1.5 ${
                annualBilling ? "text-[#111013]" : "text-[#5c728e]"
              }`}
              onClick={() => setAnnualBilling(true)}
            >
              <span>Annual Billing</span>
              <span className="rounded-full bg-[#dbf1c3] text-[#0f5132] px-2.5 py-0.5 text-[10px] font-extrabold">
                Save 28%
              </span>
            </span>
          </div>
        </div>

        {/* 3 Pricing Cards (Contis tf__single_pricing style) */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 items-stretch">
          {tiers.map((tier, idx) => {
            const price = annualBilling ? tier.priceAnnual : tier.priceMonthly;
            return (
              <div
                key={idx}
                className={`rounded-2xl border transition-all p-8 flex flex-col justify-between group ${
                  tier.isPopular
                    ? "border-[#15803d] border-2 bg-white shadow-xl relative"
                    : "border-slate-200 bg-white hover:border-[#111013] shadow-sm"
                }`}
              >
                {tier.isPopular && (
                  <div className="absolute -top-3.5 left-1/2 -translate-x-1/2 rounded-full bg-[#15803d] px-3.5 py-1 text-[11px] font-bold text-white uppercase tracking-wider shadow-sm">
                    Most Popular
                  </div>
                )}

                <div>
                  <h4 className="text-xl font-bold text-[#111013] font-heading mb-1">
                    {tier.name}
                  </h4>
                  <p className="text-xs text-[#5c728e] mb-6">{tier.subtitle}</p>

                  <div className="flex items-baseline gap-2 mb-6">
                    <span className="text-4xl sm:text-5xl font-extrabold text-[#111013] font-heading">
                      {price}
                    </span>
                    <span className="text-xs text-[#5c728e] font-medium">{tier.period}</span>
                  </div>

                  <a
                    href="https://marketplace.atlassian.com"
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`w-full text-center py-3 px-4 rounded-xl font-semibold text-xs transition-all inline-flex items-center justify-center gap-2 mb-8 ${
                      tier.isPopular
                        ? "bg-[#111013] text-white hover:bg-[#15803d]"
                        : "bg-slate-100 text-[#111013] hover:bg-[#111013] hover:text-white"
                    }`}
                  >
                    <span>{tier.cta}</span>
                    <ArrowRight className="h-3.5 w-3.5" />
                  </a>

                  <div className="border-t border-slate-100 pt-6">
                    <div className="text-[11px] font-bold text-[#111013] uppercase tracking-wider mb-3">
                      Included Features:
                    </div>
                    <ul className="space-y-2.5">
                      {tier.features.map((feature, fIdx) => (
                        <li
                          key={fIdx}
                          className="flex items-start gap-2 text-xs text-[#5c728e] font-medium"
                        >
                          <Check className="h-4 w-4 text-[#15803d] shrink-0 mt-0.5" />
                          <span>{feature}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>

                <div className="pt-6 border-t border-slate-100 mt-6 text-center">
                  <span className="text-[11px] text-[#5c728e]">
                    Direct Atlassian Cloud Marketplace checkout
                  </span>
                </div>
              </div>
            );
          })}
        </div>

        {/* Evaluate Sample Output link */}
        <div className="mt-12 text-center">
          <p className="text-xs text-[#5c728e]">
            Want to review the SOC 2 export format before installing?{" "}
            <button
              type="button"
              onClick={onOpenAuditModal}
              className="text-[#15803d] font-bold hover:underline ml-1 cursor-pointer"
            >
              Inspect sample auditor workpaper &rarr;
            </button>
          </p>
        </div>
      </div>
    </section>
  );
}
