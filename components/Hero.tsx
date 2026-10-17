"use client";

import { ShieldCheck, ArrowRight, FileCheck, Check, Lock } from "lucide-react";
import JiraPanelMockup from "./JiraPanelMockup";

interface HeroProps {
  onOpenAuditModal: () => void;
}

export default function Hero({ onOpenAuditModal }: HeroProps) {
  return (
    <section className="relative overflow-hidden pt-12 pb-20 md:pt-16 md:pb-24">
      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Monospace Technical Header */}
        <div className="flex justify-center">
          <div className="inline-flex items-center gap-2 rounded-full border border-white/[0.08] bg-zinc-900/60 px-3.5 py-1 font-mono text-[11px] text-zinc-300 backdrop-blur-sm">
            <span className="h-1.5 w-1.5 rounded-full bg-emerald-400" />
            <span className="text-zinc-400">Atlassian Forge Native</span>
            <span className="text-zinc-600">/</span>
            <span className="text-emerald-400">Zero-Egress Architecture</span>
          </div>
        </div>

        {/* Hero Title & Subtitle */}
        <div className="mx-auto mt-6 max-w-4xl text-center">
          <h1 className="text-4xl font-bold tracking-tight text-white sm:text-6xl sm:leading-[1.12]">
            Continuous SOC 2 evidence,{" "}
            <br className="hidden sm:inline" />
            sealed directly inside Jira.
          </h1>

          <p className="mx-auto mt-5 max-w-2xl text-base text-zinc-400 sm:text-lg sm:leading-relaxed">
            Eliminate manual audit screenshots and compliance spreadsheets.
            EvidenceLog cryptographically seals peer reviews, automated CI test runs, and separation-of-duty approvals directly into Jira issues.
          </p>

          {/* Action Buttons */}
          <div className="mt-8 flex flex-col sm:flex-row items-center justify-center gap-3">
            <a
              href="https://marketplace.atlassian.com"
              target="_blank"
              rel="noopener noreferrer"
              className="group flex w-full sm:w-auto items-center justify-center gap-2 rounded-xl bg-emerald-500 px-5 py-3 text-xs font-semibold text-zinc-950 shadow-sm transition-all hover:bg-emerald-400 focus:outline-none focus:ring-2 focus:ring-emerald-400"
            >
              <span>Install on Atlassian Marketplace</span>
              <ArrowRight className="h-3.5 w-3.5 transition-transform group-hover:translate-x-0.5" />
            </a>

            <button
              type="button"
              onClick={onOpenAuditModal}
              className="group flex w-full sm:w-auto items-center justify-center gap-2 rounded-xl border border-white/[0.1] bg-zinc-900/80 px-5 py-3 text-xs font-semibold text-zinc-200 transition-all hover:bg-zinc-800 hover:text-white hover:border-white/[0.2] focus:outline-none focus:ring-2 focus:ring-zinc-600"
            >
              <FileCheck className="h-3.5 w-3.5 text-emerald-400 transition-transform group-hover:scale-105" />
              <span>Inspect Sample SOC 2 Report</span>
            </button>
          </div>

          {/* Technical Specs Strip */}
          <div className="mt-8 flex flex-wrap items-center justify-center gap-x-6 gap-y-2 font-mono text-[11px] text-zinc-400">
            <span className="flex items-center gap-1.5">
              <Check className="h-3 w-3 text-emerald-400" />
              <span>SOC 2 CC8.1 &amp; ISO 27001</span>
            </span>
            <span className="text-zinc-700">•</span>
            <span className="flex items-center gap-1.5">
              <Lock className="h-3 w-3 text-zinc-400" />
              <span>Zero external server storage</span>
            </span>
            <span className="text-zinc-700">•</span>
            <span className="flex items-center gap-1.5">
              <ShieldCheck className="h-3 w-3 text-emerald-400" />
              <span>SHA-256 HMAC checksums</span>
            </span>
          </div>
        </div>

        {/* Jira Mockup Section */}
        <div id="preview" className="mt-12 sm:mt-14 relative flex justify-center">
          <div className="relative w-full max-w-5xl rounded-2xl border border-white/[0.08] p-1.5 sm:p-2 bg-[#090c10] shadow-2xl">
            <JiraPanelMockup onOpenAuditModal={onOpenAuditModal} />
          </div>
        </div>
      </div>
    </section>
  );
}
