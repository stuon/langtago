"use client";

import { ShieldCheck, ArrowRight, FileCheck, Check, Lock, Download } from "lucide-react";
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

        {/* Hero Product Visual: Real Jira Cloud Production Screenshot in macOS Browser Window */}
        <div id="preview" className="mt-14 sm:mt-18 relative max-w-5xl mx-auto">
          <div className="rounded-2xl border border-slate-700/80 bg-[#0d121c] shadow-2xl shadow-slate-950/20 overflow-hidden group">
            {/* Authentic macOS Browser Window Header */}
            <div className="bg-[#141b29] border-b border-slate-800 px-4 py-3 flex items-center justify-between text-xs">
              <div className="flex items-center gap-2">
                <span className="h-3 w-3 rounded-full bg-[#ff5f56] inline-block" />
                <span className="h-3 w-3 rounded-full bg-[#ffbd2e] inline-block" />
                <span className="h-3 w-3 rounded-full bg-[#27c93f] inline-block" />
                <span className="hidden sm:inline-block font-mono text-slate-400 text-[11px] ml-2">
                  Atlassian Jira Software Cloud &bull; Live Tenant
                </span>
              </div>

              {/* URL Address Bar */}
              <div className="flex items-center justify-center flex-1 max-w-md mx-3">
                <div className="w-full flex items-center justify-center gap-2 bg-[#090d15] border border-slate-700/60 rounded-lg px-3 py-1 text-[11px] font-mono text-slate-300 truncate">
                  <Lock className="h-3 w-3 text-emerald-400 shrink-0" />
                  <span className="truncate">https://langtago-demo.atlassian.net/browse/DEMO-9</span>
                </div>
              </div>

              <div className="flex items-center gap-2">
                <span className="bg-[#dbf1c3] text-[#0f5132] text-[10px] font-extrabold px-2 py-0.5 rounded font-mono">
                  [LIVE APP]
                </span>
                <span className="hidden md:inline text-slate-400 text-[11px]">SOC 2 CC8.1 Verified</span>
              </div>
            </div>

            {/* Real Screenshot Container with Click-to-Inspect Action */}
            <div
              onClick={onOpenAuditModal}
              className="relative cursor-pointer overflow-hidden bg-slate-950"
            >
              <img
                src="/images/jira_compliance_checklist.png"
                alt="EvidenceLog for Jira - Real Live Product Interface on DEMO-9 with 5-Pillar SDLC Checklist"
                className="w-full h-auto object-cover sm:object-contain transition-transform duration-300 group-hover:scale-[1.01]"
              />

              {/* Hover Overlay with Button */}
              <div className="absolute inset-0 bg-slate-950/40 opacity-0 group-hover:opacity-100 transition-opacity duration-200 flex items-center justify-center backdrop-blur-[2px]">
                <button
                  type="button"
                  onClick={(e) => {
                    e.stopPropagation();
                    onOpenAuditModal();
                  }}
                  className="px-5 py-2.5 rounded-xl bg-white text-[#111013] font-bold text-xs shadow-2xl flex items-center gap-2 hover:bg-[#dbf1c3] transition-colors cursor-pointer"
                >
                  <Download className="h-4 w-4 text-[#15803d]" />
                  <span>Click to Inspect Full Audit Dossier &amp; Proofs</span>
                  <ArrowRight className="h-4 w-4" />
                </button>
              </div>
            </div>

            {/* Real Screenshot Bottom Proof Ribbon */}
            <div className="bg-[#101623] border-t border-slate-800/90 px-4 sm:px-6 py-3 flex flex-wrap items-center justify-between gap-3 text-xs">
              <div className="flex flex-wrap items-center gap-4 text-slate-300">
                <span className="flex items-center gap-1.5 font-semibold text-emerald-400">
                  <ShieldCheck className="h-4 w-4 text-emerald-400" />
                  <span>Real Jira Cloud Production Ticket (DEMO-9)</span>
                </span>
                <span className="hidden sm:inline text-slate-600">&bull;</span>
                <span className="text-slate-400 text-[11px]">
                  5-Pillar SDLC Controls &bull; GitHub PR Linked &bull; QA Signed &bull; SHA-256 Tamper-Proof
                </span>
              </div>

              <button
                type="button"
                onClick={onOpenAuditModal}
                className="inline-flex items-center gap-1.5 px-3 py-1 rounded-lg bg-emerald-500/20 hover:bg-emerald-500/30 text-emerald-300 border border-emerald-500/40 font-semibold text-xs transition-colors cursor-pointer"
              >
                <Download className="h-3 w-3" />
                <span>Inspect Audit Dossier</span>
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
