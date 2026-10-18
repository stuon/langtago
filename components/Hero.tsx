"use client";

import { ShieldCheck, ArrowRight, FileCheck, Check, Lock, Clock } from "lucide-react";
import JiraPanelMockup from "./JiraPanelMockup";

interface HeroProps {
  onOpenAuditModal: () => void;
}

export default function Hero({ onOpenAuditModal }: HeroProps) {
  return (
    <section className="relative overflow-hidden pt-10 pb-16 md:pt-14 md:pb-24">
      {/* Background Radial Glow */}
      <div className="pointer-events-none absolute left-1/2 -top-40 -translate-x-1/2 h-[500px] w-[800px] rounded-full bg-emerald-500/10 blur-[120px]" />

      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Monospace Technical Header */}
        <div className="flex justify-center">
          <div className="inline-flex items-center gap-2 rounded-full border border-white/[0.08] bg-zinc-900/60 px-3.5 py-1 font-mono text-[11px] text-zinc-300 backdrop-blur-sm shadow-inner">
            <span className="h-1.5 w-1.5 rounded-full bg-emerald-400 animate-pulse" />
            <span className="text-zinc-400">Atlassian Forge Native</span>
            <span className="text-zinc-600">/</span>
            <span className="text-emerald-400">Zero External Egress</span>
          </div>
        </div>

        {/* Hero Title & Subtitle */}
        <div className="mx-auto mt-5 max-w-4xl text-center">
          <h1 className="text-3xl sm:text-5xl lg:text-6xl font-bold tracking-tight text-white leading-[1.12]">
            Automated SOC 2 Change Evidence.{" "}
            <br className="hidden sm:inline" />
            <span className="bg-gradient-to-r from-emerald-400 via-teal-300 to-cyan-400 bg-clip-text text-transparent">
              Sealed Directly in Jira.
            </span>
          </h1>

          <p className="mx-auto mt-4 max-w-2xl text-sm sm:text-base text-zinc-400 leading-relaxed">
            Stop chasing engineers for audit screenshots. EvidenceLog cryptographically seals peer reviews, CI/CD test runs, and separation of duties directly into Jira tickets on every release.
          </p>

          {/* Scannable Metric / Trust Badges */}
          <div className="mt-6 flex flex-wrap items-center justify-center gap-2 sm:gap-3 text-xs font-mono">
            <div className="inline-flex items-center gap-1.5 rounded-lg border border-emerald-500/20 bg-emerald-500/5 px-3 py-1 text-emerald-400 shadow-sm">
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
              className="group flex w-full sm:w-auto items-center justify-center gap-2 rounded-xl bg-emerald-500 px-6 py-3 text-xs font-semibold text-zinc-950 shadow-lg shadow-emerald-500/20 transition-all hover:bg-emerald-400 focus:outline-none focus:ring-2 focus:ring-emerald-400"
            >
              <span>Install on Atlassian Marketplace</span>
              <ArrowRight className="h-3.5 w-3.5 transition-transform group-hover:translate-x-0.5" />
            </a>

            <button
              type="button"
              onClick={onOpenAuditModal}
              className="group flex w-full sm:w-auto items-center justify-center gap-2 rounded-xl border border-white/[0.1] bg-zinc-900/80 px-6 py-3 text-xs font-semibold text-zinc-200 transition-all hover:bg-zinc-800 hover:text-white hover:border-white/[0.2] focus:outline-none focus:ring-2 focus:ring-zinc-600"
            >
              <FileCheck className="h-3.5 w-3.5 text-emerald-400 transition-transform group-hover:scale-105" />
              <span>Inspect Sample SOC 2 Report</span>
            </button>
          </div>

          {/* Auditor Compatibility Trust Ribbon */}
          <div className="mt-8 pt-6 border-t border-white/[0.06] flex flex-wrap items-center justify-center gap-x-5 gap-y-2 text-[11px] font-mono text-zinc-500">
            <span className="text-zinc-400 uppercase tracking-wider text-[10px]">Auditor Ready:</span>
            <span className="text-zinc-300">SOC 2 CC8.1 / CC6.8</span>
            <span>•</span>
            <span className="text-zinc-300">ISO/IEC 27001:2022</span>
            <span>•</span>
            <span className="text-zinc-300">HIPAA §164.312</span>
            <span>•</span>
            <span className="text-zinc-300">Vanta &amp; Drata Ingestion</span>
          </div>
        </div>

        {/* Jira Mockup Section with Ambient Glow */}
        <div id="preview" className="mt-12 sm:mt-14 relative flex justify-center">
          <div className="absolute -inset-x-10 -top-10 h-64 bg-emerald-500/10 blur-3xl rounded-full pointer-events-none" />
          <div className="relative w-full max-w-5xl rounded-2xl border border-white/[0.1] p-1.5 sm:p-2 bg-[#090c10]/90 backdrop-blur-sm shadow-2xl shadow-emerald-500/5">
            <JiraPanelMockup onOpenAuditModal={onOpenAuditModal} />
          </div>
        </div>
      </div>
    </section>
  );
}
