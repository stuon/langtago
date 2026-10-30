"use client";

import { ArrowRight, FileCheck, Check, Download } from "lucide-react";
import Image from "next/image";

interface HeroProps {
  onOpenAuditModal: () => void;
}

export default function Hero({ onOpenAuditModal }: HeroProps) {
  return (
    <section className="relative overflow-hidden pt-14 pb-20 md:pt-20 md:pb-28 bg-white">
      {/* Contis Signature Large Green Circular Arc centered behind the hero title */}
      <div className="pointer-events-none absolute left-1/2 -translate-x-1/2 top-4 sm:top-6 w-[620px] sm:w-[740px] lg:w-[840px] h-[500px] sm:h-[600px] z-0 opacity-100 select-none">
        <Image
          src="/images/banner_shape_3.png"
          alt=""
          fill
          priority
          className="object-contain object-top"
        />
      </div>

      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 z-10">
        {/* Hero Title & Subtitle in Contis Typography */}
        <div className="mx-auto max-w-4xl text-center relative">
          {/* Subdued green kicker */}
          <h6 className="text-[#15803d] font-bold text-xs sm:text-sm tracking-widest uppercase mb-3 font-heading">
            EVIDENCELOG FOR JIRA CLOUD
          </h6>

          <h1 className="text-4xl sm:text-6xl lg:text-7xl font-bold tracking-tight text-[#111013] leading-[1.08] mb-6 font-heading">
            Change evidence sealed directly in Jira
          </h1>

          <p className="mx-auto max-w-2xl text-base sm:text-lg text-[#5c728e] leading-relaxed font-normal mb-8">
            Automatically verify peer reviews, test runs, and approvals on every release.
            <br className="hidden sm:inline" />
            Sealed cryptographic proof for SOC 2 CC8.1 with zero manual screenshots.
          </p>

          {/* Action Buttons */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-3.5">
            <a
              href="https://marketplace.atlassian.com"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2 px-7 py-3.5 rounded-xl bg-[#111013] text-white hover:bg-[#15803d] font-semibold text-sm transition-all shadow-md hover:shadow-lg cursor-pointer w-full sm:w-auto"
            >
              <span>Install Free on Marketplace</span>
              <ArrowRight className="h-4 w-4" />
            </a>

            <button
              type="button"
              onClick={onOpenAuditModal}
              className="inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-xl bg-white text-[#111013] border border-slate-300 hover:border-[#111013] font-semibold text-sm transition-all shadow-xs cursor-pointer w-full sm:w-auto"
            >
              <FileCheck className="h-4 w-4 text-[#15803d]" />
              <span>Inspect Sample SOC 2 Report</span>
            </button>
          </div>

          {/* Simple Trust Assurance Bar */}
          <div className="mt-8 flex flex-wrap items-center justify-center gap-x-6 gap-y-2 text-xs font-medium text-[#5c728e]">
            <span className="flex items-center gap-1.5">
              <Check className="h-4 w-4 text-[#15803d] shrink-0" />
              <span>Free for teams up to 10 users</span>
            </span>
            <span className="flex items-center gap-1.5">
              <Check className="h-4 w-4 text-[#15803d] shrink-0" />
              <span>SOC 2 CC8.1 &amp; ISO 27001 Ready</span>
            </span>
            <span className="flex items-center gap-1.5">
              <Check className="h-4 w-4 text-[#15803d] shrink-0" />
              <span>Zero Data Egress (Atlassian Forge)</span>
            </span>
          </div>
        </div>

        {/* Hero Product Visual: Real Jira Cloud Production Screenshot */}
        <div id="preview" className="mt-14 sm:mt-18 relative max-w-5xl mx-auto">
          <div
            onClick={onOpenAuditModal}
            className="relative cursor-pointer rounded-2xl border border-slate-200/90 bg-white shadow-2xl shadow-slate-900/10 overflow-hidden group transition-all duration-300 hover:shadow-slate-900/15"
          >
            <img
              src="/images/jira_compliance_checklist.png"
              alt="EvidenceLog for Jira - Real Live Product Interface on DEMO-9 with 5-Pillar SDLC Checklist"
              className="w-full h-auto object-contain transition-transform duration-300 group-hover:scale-[1.005]"
            />

            {/* Subtle Hover Overlay */}
            <div className="absolute inset-0 bg-slate-950/20 opacity-0 group-hover:opacity-100 transition-opacity duration-200 flex items-center justify-center backdrop-blur-[1px]">
              <button
                type="button"
                onClick={(e) => {
                  e.stopPropagation();
                  onOpenAuditModal();
                }}
                className="px-5 py-2.5 rounded-xl bg-white text-[#111013] font-bold text-xs shadow-2xl flex items-center gap-2 hover:bg-[#dbf1c3] transition-colors cursor-pointer"
              >
                <Download className="h-4 w-4 text-[#15803d]" />
                <span>Click to Inspect Full Audit Dossier</span>
                <ArrowRight className="h-4 w-4" />
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
