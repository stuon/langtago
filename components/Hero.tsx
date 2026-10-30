"use client";

import { ArrowRight, FileCheck, Check, Download, ShieldCheck } from "lucide-react";
import Image from "next/image";

interface HeroProps {
  onOpenAuditModal: () => void;
}

export default function Hero({ onOpenAuditModal }: HeroProps) {
  return (
    <section className="relative overflow-hidden pt-12 pb-16 md:pt-16 md:pb-24 bg-white">
      {/* Signature Contis subtle background shape */}
      <div className="pointer-events-none absolute right-0 top-0 w-[500px] md:w-[700px] h-[500px] md:h-[600px] z-0 opacity-80 select-none">
        <Image
          src="/images/banner_shape_3.png"
          alt=""
          fill
          priority
          className="object-contain object-right-top"
        />
      </div>

      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 z-10">
        {/* Split 2-Column Hero: 100% Above-the-Fold Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
          {/* Left Column: Value Proposition, Headlines & CTAs */}
          <div className="lg:col-span-6 xl:col-span-7 text-left">
            {/* Subdued green kicker */}
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

          {/* Right Column: Live Frameless App Visual — 100% Above the Fold */}
          <div className="lg:col-span-6 xl:col-span-5 relative">
            {/* Ambient Background Glow behind the visual */}
            <div className="absolute -inset-4 bg-gradient-to-tr from-[#dbf1c3]/40 via-emerald-100/30 to-transparent rounded-3xl blur-2xl -z-10" />

            {/* Frameless Live Jira Ticket & EvidenceLog Visual */}
            <div
              onClick={onOpenAuditModal}
              className="relative cursor-pointer rounded-2xl border border-slate-200/80 bg-white shadow-xl hover:shadow-2xl overflow-hidden group transition-all duration-300"
            >
              <img
                src="/images/jira_compliance_checklist_tight.png"
                alt="EvidenceLog for Jira - Real Live Product Interface on DEMO-9 with 5-Pillar SDLC Checklist"
                className="w-full h-auto object-contain transition-transform duration-300 group-hover:scale-[1.01]"
              />

              {/* Floating Live Verification Badge (Babun-style micro-proof) */}
              <div className="absolute top-3 right-3 bg-white/95 backdrop-blur-xs border border-emerald-200/90 rounded-lg px-2.5 py-1 shadow-md flex items-center gap-1.5 pointer-events-none">
                <span className="h-2 w-2 rounded-full bg-emerald-500 animate-pulse" />
                <span className="text-[11px] font-bold text-emerald-800 font-mono">
                  5/5 Verified • SOC 2
                </span>
              </div>

              {/* Subtle Hover Inspection Affordance */}
              <div className="absolute inset-0 bg-slate-950/20 opacity-0 group-hover:opacity-100 transition-opacity duration-200 flex items-center justify-center backdrop-blur-[1px]">
                <span className="px-4 py-2 rounded-xl bg-white text-[#111013] text-xs font-bold shadow-xl flex items-center gap-1.5">
                  <Download className="h-3.5 w-3.5 text-[#15803d]" />
                  <span>Click to Inspect Full Audit Dossier</span>
                  <ArrowRight className="h-3.5 w-3.5" />
                </span>
              </div>
            </div>

            {/* Subtext indicator */}
            <div className="mt-3 flex items-center justify-between text-[11px] text-[#5c728e] px-1 font-mono">
              <span>Tenant: langtago-demo.atlassian.net</span>
              <span className="text-emerald-700 font-semibold">100% In-Tenant Forge Compute</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
