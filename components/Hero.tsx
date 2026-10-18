"use client";

import { ShieldCheck, ArrowRight, FileCheck, Check } from "lucide-react";
import JiraPanelMockup from "./JiraPanelMockup";

interface HeroProps {
  onOpenAuditModal: () => void;
}

export default function Hero({ onOpenAuditModal }: HeroProps) {
  return (
    <section className="relative overflow-hidden pt-12 pb-16 md:pt-16 md:pb-24 bg-gradient-to-b from-white via-slate-50 to-slate-100/40">
      {/* Subtle Ambient Radial Glow */}
      <div className="pointer-events-none absolute left-1/2 -top-24 -translate-x-1/2 h-[420px] w-[750px] rounded-full bg-emerald-500/10 blur-[100px]" />

      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Trust Pill */}
        <div className="flex justify-center">
          <div className="inline-flex items-center gap-2 rounded-full border border-emerald-200/90 bg-emerald-50/80 px-4 py-1.5 text-xs font-semibold text-emerald-800 shadow-xs">
            <ShieldCheck className="h-4 w-4 text-emerald-600 shrink-0" />
            <span>Official Atlassian Forge Native App</span>
            <span className="text-emerald-300">•</span>
            <span className="text-emerald-700">Zero Data Egress</span>
          </div>
        </div>

        {/* Hero Title & Subtitle */}
        <div className="mx-auto mt-6 max-w-4xl text-center">
          <h1 className="text-3xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight text-slate-900 leading-[1.12]">
            Automated SOC 2 Change Evidence.{" "}
            <br className="hidden sm:inline" />
            <span className="text-emerald-600">
              Sealed Directly in Jira.
            </span>
          </h1>

          <p className="mx-auto mt-5 max-w-2xl text-base sm:text-lg text-slate-600 leading-relaxed font-normal">
            Stop chasing engineers for audit screenshots. EvidenceLog automatically validates peer reviews, CI/CD test runs, and segregation of duties—stamping immutable compliance evidence right inside Jira on every release.
          </p>

          {/* Action Buttons */}
          <div className="mt-8 flex flex-col sm:flex-row items-center justify-center gap-3.5">
            <a
              href="https://marketplace.atlassian.com"
              target="_blank"
              rel="noopener noreferrer"
              className="group flex w-full sm:w-auto items-center justify-center gap-2.5 rounded-2xl bg-emerald-600 px-7 py-3.5 text-sm font-bold text-white shadow-lg shadow-emerald-600/25 transition-all hover:bg-emerald-500 hover:shadow-emerald-600/35 focus:outline-none"
            >
              <span>Install Free on Atlassian Marketplace</span>
              <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5" />
            </a>

            <button
              type="button"
              onClick={onOpenAuditModal}
              className="group flex w-full sm:w-auto items-center justify-center gap-2 rounded-2xl border border-slate-200 bg-white px-6 py-3.5 text-sm font-semibold text-slate-700 transition-all hover:bg-slate-50 hover:text-slate-950 hover:border-slate-300 shadow-xs"
            >
              <FileCheck className="h-4 w-4 text-emerald-600" />
              <span>Inspect Sample SOC 2 Report</span>
            </button>
          </div>

          {/* Simple Trust Assurance Bar */}
          <div className="mt-8 flex flex-wrap items-center justify-center gap-x-6 gap-y-2 text-xs font-medium text-slate-500">
            <span className="flex items-center gap-1.5">
              <Check className="h-4 w-4 text-emerald-600 shrink-0" />
              <span>Free for teams up to 10 users</span>
            </span>
            <span className="flex items-center gap-1.5">
              <Check className="h-4 w-4 text-emerald-600 shrink-0" />
              <span>SOC 2 CC8.1 &amp; ISO 27001 Ready</span>
            </span>
            <span className="flex items-center gap-1.5">
              <Check className="h-4 w-4 text-emerald-600 shrink-0" />
              <span>1-Click Vanta &amp; Drata Sync</span>
            </span>
          </div>
        </div>

        {/* Jira Mockup Section with Crisp Card Elevation */}
        <div id="preview" className="mt-12 sm:mt-16 relative flex justify-center">
          <div className="relative w-full max-w-5xl rounded-3xl border border-slate-200/90 bg-white p-2 sm:p-3 shadow-2xl shadow-slate-200/90">
            <JiraPanelMockup onOpenAuditModal={onOpenAuditModal} />
          </div>
        </div>
      </div>
    </section>
  );
}
