"use client";

import { ArrowRight, FileCheck, Check, ShieldCheck } from "lucide-react";

interface HeroProps {
  onOpenAuditModal: () => void;
}

export default function Hero({ onOpenAuditModal }: HeroProps) {
  return (
    <section className="relative overflow-hidden pt-12 pb-16 md:pt-16 md:pb-24 bg-white">
      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 z-10">
        {/* Split 2-Column Hero: 100% Above-the-Fold Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
          {/* Left Column: Value Proposition, Headlines & CTAs */}
          <div className="lg:col-span-6 xl:col-span-7 text-left">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#dbf1c3]/60 border border-[#b8e29a] text-[#15803d] font-bold text-xs tracking-wider uppercase mb-5 font-heading">
              <ShieldCheck className="h-3.5 w-3.5 text-[#15803d]" />
              <span>EVIDENCELOG FOR JIRA CLOUD</span>
            </div>

            <h1 className="text-3xl sm:text-5xl xl:text-6xl font-bold tracking-tight text-[#111013] leading-[1.12] mb-5 font-heading">
              Change evidence sealed directly in Jira
            </h1>

            <p className="text-base sm:text-lg text-[#5c728e] leading-relaxed font-normal mb-8 max-w-xl">
              Automatically verify peer reviews, test runs, and approvals on every release.
              Sealed cryptographic proof for SOC 2 CC8.1 with zero manual screenshots.
            </p>

            {/* Action Buttons */}
            <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3.5 mb-8">
              <a
                href="https://marketplace.atlassian.com"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-xl bg-[#111013] text-white hover:bg-[#15803d] font-semibold text-sm transition-all shadow-md hover:shadow-lg cursor-pointer"
              >
                <span>Install Free on Marketplace</span>
                <ArrowRight className="h-4 w-4" />
              </a>

              <button
                type="button"
                onClick={onOpenAuditModal}
                className="inline-flex items-center justify-center gap-2 px-5 py-3.5 rounded-xl bg-white text-[#111013] border border-slate-300 hover:border-[#111013] font-semibold text-sm transition-all shadow-xs cursor-pointer"
              >
                <FileCheck className="h-4 w-4 text-[#15803d]" />
                <span>Inspect Sample SOC 2 Report</span>
              </button>
            </div>

            {/* Simple Trust Assurance Bar */}
            <div className="flex flex-wrap items-center gap-x-5 gap-y-2 text-xs font-medium text-[#5c728e] pt-1">
              <span className="flex items-center gap-1.5">
                <Check className="h-4 w-4 text-[#15803d] shrink-0" />
                <span>Free up to 10 users</span>
              </span>
              <span className="flex items-center gap-1.5">
                <Check className="h-4 w-4 text-[#15803d] shrink-0" />
                <span>SOC 2 CC8.1 &amp; ISO 27001</span>
              </span>
              <span className="flex items-center gap-1.5">
                <Check className="h-4 w-4 text-[#15803d] shrink-0" />
                <span>Zero Data Egress (Forge)</span>
              </span>
            </div>
          </div>

          {/* Right Column: Pure Live App Screenshot — Clean, Frameless, Zero Fluff */}
          <div className="lg:col-span-6 xl:col-span-5 flex items-center justify-center">
            <img
              src="/images/jira_compliance_checklist_tight.png"
              alt="EvidenceLog for Jira - Real Live Product Interface on DEMO-9 with 5-Pillar SDLC Checklist"
              className="w-full h-auto object-contain cursor-pointer transition-transform duration-200 hover:scale-[1.01]"
              onClick={onOpenAuditModal}
            />
          </div>
        </div>
      </div>
    </section>
  );
}
