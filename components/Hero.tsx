"use client";

import { ShieldCheck, Sparkles, ArrowRight, FileCheck, CheckCircle2, Lock } from "lucide-react";
import JiraPanelMockup from "./JiraPanelMockup";

interface HeroProps {
  onOpenAuditModal: () => void;
}

export default function Hero({ onOpenAuditModal }: HeroProps) {
  return (
    <section className="relative overflow-hidden pt-12 pb-20 md:pt-20 md:pb-28">
      {/* Background glow effects */}
      <div className="pointer-events-none absolute inset-0 flex items-center justify-center">
        <div className="h-[450px] w-[750px] -translate-y-24 rounded-full bg-emerald-500/10 blur-[130px]" />
        <div className="h-[350px] w-[500px] translate-x-48 translate-y-20 rounded-full bg-cyan-500/10 blur-[120px]" />
      </div>

      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Top Announcement Pill */}
        <div className="flex justify-center">
          <div className="inline-flex items-center gap-2 rounded-full border border-emerald-500/30 bg-emerald-950/40 px-3.5 py-1 text-xs font-medium text-emerald-300 shadow-sm shadow-emerald-500/10 backdrop-blur-md">
            <span className="flex h-2 w-2 rounded-full bg-emerald-400 animate-pulse" />
            <span className="font-semibold text-white">Built for Atlassian Forge</span>
            <span className="text-emerald-500">•</span>
            <span>Zero External Data Storage Guarantee</span>
          </div>
        </div>

        {/* Hero Title & Subtitle */}
        <div className="mx-auto mt-7 max-w-4xl text-center">
          <h1 className="text-4xl font-extrabold tracking-tight text-white sm:text-6xl sm:leading-[1.12]">
            Continuous SOC 2 Evidence,{" "}
            <span className="bg-gradient-to-r from-emerald-400 via-teal-300 to-cyan-400 bg-clip-text text-transparent">
              Sealed Directly Inside Jira.
            </span>
          </h1>

          <p className="mx-auto mt-6 max-w-2xl text-base text-slate-300 sm:text-lg sm:leading-relaxed">
            Stop taking manual screenshots of pull requests, approvals, and CI runs for SOC 2 and ISO 27001 auditors.
            <strong className="text-white font-semibold"> EvidenceLog for Jira</strong> cryptographically seals change authorization evidence into tamper-evident audit trails right where your developers work.
          </p>

          {/* Action Buttons */}
          <div className="mt-8 flex flex-col sm:flex-row items-center justify-center gap-4">
            <a
              href="https://marketplace.atlassian.com"
              target="_blank"
              rel="noopener noreferrer"
              className="group flex w-full sm:w-auto items-center justify-center gap-2 rounded-xl bg-gradient-to-r from-emerald-500 to-teal-400 px-6 py-3.5 text-sm font-semibold text-slate-950 shadow-lg shadow-emerald-500/25 transition-all hover:brightness-110 focus:outline-none focus:ring-2 focus:ring-emerald-400"
            >
              <Sparkles className="h-4 w-4 text-slate-950" />
              <span>Install Free on Atlassian Marketplace</span>
              <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5" />
            </a>

            <button
              onClick={onOpenAuditModal}
              className="group flex w-full sm:w-auto items-center justify-center gap-2 rounded-xl border border-slate-700 bg-slate-900/90 px-6 py-3.5 text-sm font-semibold text-slate-200 shadow-md transition-all hover:border-slate-500 hover:bg-slate-800 hover:text-white focus:outline-none focus:ring-2 focus:ring-emerald-500/40"
            >
              <FileCheck className="h-4 w-4 text-emerald-400 transition-transform group-hover:scale-110" />
              <span>Explore Sample SOC 2 Report</span>
            </button>
          </div>

          {/* Value Badges */}
          <div className="mt-8 flex flex-wrap items-center justify-center gap-x-8 gap-y-3 text-xs text-slate-400 font-medium">
            <div className="flex items-center gap-1.5">
              <CheckCircle2 className="h-4 w-4 text-emerald-400" />
              <span>SOC 2 CC8.1 & ISO 27001 Ready</span>
            </div>
            <div className="flex items-center gap-1.5">
              <Lock className="h-4 w-4 text-cyan-400" />
              <span>100% In-Tenant Data Residency</span>
            </div>
            <div className="flex items-center gap-1.5">
              <ShieldCheck className="h-4 w-4 text-emerald-400" />
              <span>SHA-256 Tamper-Proof Seals</span>
            </div>
          </div>
        </div>

        {/* Jira Mockup Section with ambient frame */}
        <div id="preview" className="mt-14 sm:mt-16 relative flex justify-center">
          <div className="absolute -inset-1 rounded-3xl bg-gradient-to-b from-emerald-500/20 via-cyan-500/10 to-transparent blur-xl opacity-60" />
          <div className="relative w-full max-w-5xl">
            <JiraPanelMockup onOpenAuditModal={onOpenAuditModal} />
          </div>
        </div>
      </div>
    </section>
  );
}
