"use client";

import { ShieldCheck, ArrowRight, FileCheck, Check, Lock, Clock } from "lucide-react";
import JiraPanelMockup from "./JiraPanelMockup";

interface HeroProps {
  onOpenAuditModal: () => void;
}

export default function Hero({ onOpenAuditModal }: HeroProps) {
  return (
    <section className="relative overflow-hidden pt-10 pb-16 md:pt-14 md:pb-20">
      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Monospace Technical Header */}
        <div className="flex justify-center">
          <div className="inline-flex items-center gap-2 rounded-full border border-white/[0.08] bg-zinc-900/60 px-3 py-1 font-mono text-[11px] text-zinc-300 backdrop-blur-sm">
            <span className="h-1.5 w-1.5 rounded-full bg-emerald-400 animate-pulse" />
            <span className="text-zinc-400">Atlassian Forge Native</span>
            <span className="text-zinc-600">/</span>
            <span className="text-emerald-400">Zero External Egress</span>
          </div>
        </div>

        {/* Hero Title & Subtitle */}
        <div className="mx-auto mt-5 max-w-4xl text-center">
          <h1 className="text-3xl sm:text-5xl lg:text-6xl font-bold tracking-tight text-white leading-[1.12]">
            Continuous SOC 2 evidence,{" "}
            <br className="hidden sm:inline" />
            sealed directly inside Jira.
          </h1>

          <p className="mx-auto mt-4 max-w-2xl text-sm sm:text-base text-zinc-400 leading-relaxed">
            Eliminate manual audit screenshots. EvidenceLog cryptographically seals peer reviews, CI test runs, and separation of duties directly into Jira tickets.
          </p>

          {/* Scannable Metric / Trust Badges */}
          <div className="mt-6 flex flex-wrap items-center justify-center gap-2 sm:gap-3 text-xs font-mono">
            <div className="inline-flex items-center gap-1.5 rounded-lg border border-emerald-500/20 bg-emerald-500/5 px-3 py-1 text-emerald-400">
              <Check className="h-3.5 w-3.5" />
              <span>100% Automated</span>
            </div>
            <div className="inline-flex items-center gap-1.5 rounded-lg border border-white/[0.08] bg-zinc-900/60 px-3 py-1 text-zinc-300">
              <Lock className="h-3.5 w-3.5 text-zinc-400" />
              <span>Zero External Storage</span>
            </div>
            <div className="inline-flex items-center gap-1.5 rounded-lg border border-white/[0.08] bg-zinc-900/60 px-3 py-1 text-zinc-300">
              <ShieldCheck className="h-3.5 w-3.5 text-emerald-400" />
              <span>SHA-256 HMAC Seals</span>
            </div>
            <div className="inline-flex items-center gap-1.5 rounded-lg border border-white/[0.08] bg-zinc-900/60 px-3 py-1 text-zinc-300">
              <Clock className="h-3.5 w-3.5 text-cyan-400" />
              <span>&lt;2 Min Setup</span>
            </div>
          </div>

          {/* Action Buttons */}
          <div className="mt-7 flex flex-col sm:flex-row items-center justify-center gap-3">
            <a
              href="https://marketplace.atlassian.com"
              target="_blank"
              rel="noopener noreferrer"
              className="group flex w-full sm:w-auto items-center justify-center gap-2 rounded-xl bg-emerald-500 px-5 py-2.5 text-xs font-semibold text-zinc-950 shadow-sm transition-all hover:bg-emerald-400 focus:outline-none focus:ring-2 focus:ring-emerald-400"
            >
              <span>Install on Atlassian Marketplace</span>
              <ArrowRight className="h-3.5 w-3.5 transition-transform group-hover:translate-x-0.5" />
            </a>

            <button
              type="button"
              onClick={onOpenAuditModal}
              className="group flex w-full sm:w-auto items-center justify-center gap-2 rounded-xl border border-white/[0.1] bg-zinc-900/80 px-5 py-2.5 text-xs font-semibold text-zinc-200 transition-all hover:bg-zinc-800 hover:text-white hover:border-white/[0.2] focus:outline-none focus:ring-2 focus:ring-zinc-600"
            >
              <FileCheck className="h-3.5 w-3.5 text-emerald-400 transition-transform group-hover:scale-105" />
              <span>Inspect Sample SOC 2 Report</span>
            </button>
          </div>
        </div>

        {/* Jira Mockup Section */}
        <div id="preview" className="mt-10 sm:mt-12 relative flex justify-center">
          <div className="relative w-full max-w-5xl rounded-2xl border border-white/[0.08] p-1 sm:p-2 bg-[#090c10] shadow-2xl">
            <JiraPanelMockup onOpenAuditModal={onOpenAuditModal} />
          </div>
        </div>
      </div>
    </section>
  );
}
