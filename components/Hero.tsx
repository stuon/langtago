"use client";

import { ShieldCheck, ArrowRight, FileCheck, Check, Lock, Download } from "lucide-react";
import Image from "next/image";

interface HeroProps {
  onOpenAuditModal: () => void;
}

export default function Hero({ onOpenAuditModal }: HeroProps) {
  return (
    <section className="relative overflow-hidden pt-16 pb-20 md:pt-24 md:pb-28 bg-white">
      {/* Decorative Contis-inspired subtle organic shapes in background */}
      <div className="pointer-events-none absolute -top-12 -left-20 w-72 h-72 opacity-40">
        <Image
          src="/images/banner_shape_1.png"
          alt=""
          width={325}
          height={135}
          className="w-full h-auto object-contain"
        />
      </div>
      <div className="pointer-events-none absolute top-40 -right-16 w-80 h-80 opacity-40">
        <Image
          src="/images/banner_shape_2.png"
          alt=""
          width={300}
          height={140}
          className="w-full h-auto object-contain"
        />
      </div>

      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Hero Title & Subtitle in Contis Typography */}
        <div className="mx-auto max-w-4xl text-center">
          <h6 className="text-[#ff8565] font-bold text-xs sm:text-sm tracking-widest uppercase mb-3 font-heading">
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
              className="inline-flex items-center justify-center gap-2 px-7 py-3.5 rounded-lg bg-[#111013] text-white hover:bg-[#ff8565] font-semibold text-sm transition-all shadow-md hover:shadow-lg cursor-pointer w-full sm:w-auto"
            >
              <span>Install Free on Marketplace</span>
              <ArrowRight className="h-4 w-4" />
            </a>

            <button
              type="button"
              onClick={onOpenAuditModal}
              className="inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-lg bg-white text-[#111013] border border-slate-300 hover:border-[#111013] font-semibold text-sm transition-all shadow-xs cursor-pointer w-full sm:w-auto"
            >
              <FileCheck className="h-4 w-4 text-[#ff8565]" />
              <span>Inspect Sample SOC 2 Report</span>
            </button>
          </div>

          {/* Simple Trust Assurance Bar */}
          <div className="mt-8 flex flex-wrap items-center justify-center gap-x-6 gap-y-2 text-xs font-medium text-[#5c728e]">
            <span className="flex items-center gap-1.5">
              <Check className="h-4 w-4 text-[#ff8565] shrink-0" />
              <span>Free for teams up to 10 users</span>
            </span>
            <span className="flex items-center gap-1.5">
              <Check className="h-4 w-4 text-[#ff8565] shrink-0" />
              <span>SOC 2 CC8.1 &amp; ISO 27001 Ready</span>
            </span>
            <span className="flex items-center gap-1.5">
              <Check className="h-4 w-4 text-[#ff8565] shrink-0" />
              <span>Zero Data Egress (Atlassian Forge)</span>
            </span>
          </div>
        </div>

        {/* Hero Product Visual: Crisp, Clean Jira Issue Preview Card */}
        <div id="preview" className="mt-14 sm:mt-18 relative max-w-4xl mx-auto">
          <div className="rounded-2xl border border-slate-200/90 bg-white shadow-2xl shadow-slate-900/10 overflow-hidden">
            {/* Jira Ticket Window Header */}
            <div className="bg-[#111013] text-white px-5 py-3.5 flex items-center justify-between text-xs">
              <div className="flex items-center gap-2.5">
                <div className="flex gap-1.5">
                  <span className="h-3 w-3 rounded-full bg-rose-500/80 inline-block" />
                  <span className="h-3 w-3 rounded-full bg-amber-500/80 inline-block" />
                  <span className="h-3 w-3 rounded-full bg-emerald-500/80 inline-block" />
                </div>
                <span className="font-semibold text-slate-200 ml-2">Jira Software Cloud &bull; LANG-10</span>
              </div>
              <div className="flex items-center gap-2">
                <span className="bg-[#ff8565] text-white text-[11px] font-bold px-2 py-0.5 rounded">
                  [SEALED]
                </span>
                <span className="text-slate-400 text-[11px]">SOC 2 CC8.1 Verified</span>
              </div>
            </div>

            {/* Jira Issue Body */}
            <div className="p-6 sm:p-8 bg-white space-y-6">
              {/* Issue Title & Status */}
              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 border-b border-slate-100 pb-5">
                <div>
                  <div className="flex items-center gap-2 text-xs text-[#5c728e] mb-1 font-mono">
                    <span>Release v2.4.0</span>
                    <span>&bull;</span>
                    <span>Payment Gateway Integration</span>
                  </div>
                  <h3 className="text-xl sm:text-2xl font-bold text-[#111013] font-heading">
                    LANG-10: Migrate Stripe Webhooks to Idempotent Queue
                  </h3>
                </div>
                <div className="flex items-center gap-2">
                  <span className="rounded-full bg-emerald-50 border border-emerald-200 text-emerald-800 text-xs font-bold px-3 py-1 flex items-center gap-1.5">
                    <Check className="h-3.5 w-3.5 text-emerald-600" />
                    <span>Deployed to Prod</span>
                  </span>
                </div>
              </div>

              {/* EvidenceLog Native Jira Panel Glance */}
              <div className="rounded-xl border border-slate-200 bg-slate-50/60 p-5 space-y-4">
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-2">
                    <div className="h-7 w-7 rounded-lg bg-[#111013] text-[#ff8565] flex items-center justify-center">
                      <ShieldCheck className="h-4 w-4" />
                    </div>
                    <div>
                      <span className="text-sm font-bold text-[#111013] block font-heading">
                        EvidenceLog Compliance Seal
                      </span>
                      <span className="text-xs text-[#5c728e]">
                        Cryptographically stamped via Atlassian Forge Sandbox
                      </span>
                    </div>
                  </div>
                  <button
                    type="button"
                    onClick={onOpenAuditModal}
                    className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-[#111013] text-white hover:bg-[#ff8565] font-semibold text-xs transition-all shadow-xs cursor-pointer"
                  >
                    <Download className="h-3.5 w-3.5" />
                    <span>Export CSV</span>
                  </button>
                </div>

                {/* 3 Core Compliance Verifications */}
                <div className="grid grid-cols-1 md:grid-cols-3 gap-3 pt-2">
                  <div className="rounded-lg bg-white p-3.5 border border-slate-200 shadow-xs">
                    <div className="text-[11px] font-bold text-[#5c728e] uppercase tracking-wider mb-1">
                      Separation of Duties
                    </div>
                    <div className="text-xs font-bold text-[#111013] flex items-center gap-1.5">
                      <Check className="h-4 w-4 text-emerald-600 shrink-0" />
                      <span>Approved by @sarah.m</span>
                    </div>
                    <div className="text-[10px] text-[#5c728e] mt-1">Author @alex.k &ne; Reviewer</div>
                  </div>

                  <div className="rounded-lg bg-white p-3.5 border border-slate-200 shadow-xs">
                    <div className="text-[11px] font-bold text-[#5c728e] uppercase tracking-wider mb-1">
                      CI Test Evidence
                    </div>
                    <div className="text-xs font-bold text-[#111013] flex items-center gap-1.5">
                      <Check className="h-4 w-4 text-emerald-600 shrink-0" />
                      <span>48/48 Tests Passed</span>
                    </div>
                    <div className="text-[10px] text-[#5c728e] mt-1">GitHub Actions build #894</div>
                  </div>

                  <div className="rounded-lg bg-white p-3.5 border border-slate-200 shadow-xs">
                    <div className="text-[11px] font-bold text-[#5c728e] uppercase tracking-wider mb-1">
                      SHA-256 Digest
                    </div>
                    <div className="text-xs font-mono font-bold text-[#111013] flex items-center gap-1.5 truncate">
                      <Lock className="h-3.5 w-3.5 text-[#ff8565] shrink-0" />
                      <span className="truncate">e3b0c44298fc1c14...</span>
                    </div>
                    <div className="text-[10px] text-emerald-700 font-semibold mt-1">Immutable &bull; Unaltered</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
