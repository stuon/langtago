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
                <span className="bg-[#dbf1c3] text-[#0f5132] text-[11px] font-extrabold px-2.5 py-0.5 rounded">
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
                <div className="flex flex-wrap items-center justify-between gap-3 border-b border-slate-200/80 pb-3">
                  <div className="flex items-center gap-2.5">
                    <div className="h-8 w-8 rounded-lg bg-[#111013] text-[#dbf1c3] flex items-center justify-center shadow-xs">
                      <ShieldCheck className="h-5 w-5" />
                    </div>
                    <div>
                      <div className="flex items-center gap-2">
                        <span className="text-sm font-bold text-[#111013] font-heading">
                          EvidenceLog Compliance Ledger
                        </span>
                        <span className="rounded bg-[#dbf1c3] text-[#0f5132] text-[10px] font-extrabold px-2 py-0.5 font-mono">
                          AUDIT READY (5/5)
                        </span>
                        <span className="rounded bg-slate-200 text-slate-700 text-[10px] font-semibold px-2 py-0.5">
                          Standard Change (Low Risk)
                        </span>
                      </div>
                      <span className="text-xs text-[#5c728e]">
                        Cryptographically sealed in Atlassian Forge KVS &bull; Zero Data Egress
                      </span>
                    </div>
                  </div>
                  <div className="flex items-center gap-2">
                    <button
                      type="button"
                      onClick={onOpenAuditModal}
                      className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-[#111013] text-white hover:bg-[#15803d] font-semibold text-xs transition-all shadow-xs cursor-pointer"
                    >
                      <Download className="h-3.5 w-3.5" />
                      <span>Inspect Audit Dossier</span>
                    </button>
                  </div>
                </div>

                {/* 5-Step Lifecycle Progress Tracker */}
                <div className="rounded-lg bg-white p-3 border border-slate-200 shadow-2xs">
                  <div className="text-[10px] font-bold text-[#5c728e] uppercase tracking-wider mb-2 font-mono">
                    Change Lifecycle Audit Trail (Automated Pre-Flight Gatekeeper)
                  </div>
                  <div className="flex flex-wrap items-center gap-2 text-xs font-semibold text-[#111013]">
                    <span className="flex items-center gap-1 text-emerald-700 bg-emerald-50 px-2 py-0.5 rounded">
                      <Check className="h-3 w-3 text-emerald-600" /> 1. AC Defined
                    </span>
                    <span className="text-slate-300">&bull;</span>
                    <span className="flex items-center gap-1 text-emerald-700 bg-emerald-50 px-2 py-0.5 rounded">
                      <Check className="h-3 w-3 text-emerald-600" /> 2. Code Linked
                    </span>
                    <span className="text-slate-300">&bull;</span>
                    <span className="flex items-center gap-1 text-emerald-700 bg-emerald-50 px-2 py-0.5 rounded">
                      <Check className="h-3 w-3 text-emerald-600" /> 3. Peer Reviewed
                    </span>
                    <span className="text-slate-300">&bull;</span>
                    <span className="flex items-center gap-1 text-emerald-700 bg-emerald-50 px-2 py-0.5 rounded">
                      <Check className="h-3 w-3 text-emerald-600" /> 4. QA Verified
                    </span>
                    <span className="text-slate-300">&bull;</span>
                    <span className="flex items-center gap-1 text-emerald-700 bg-emerald-50 px-2 py-0.5 rounded font-mono">
                      <Lock className="h-3 w-3 text-emerald-600" /> 5. Certified
                    </span>
                  </div>
                </div>

                {/* 5 Core Compliance Verifications Grid */}
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-2.5 pt-1">
                  <div className="rounded-lg bg-white p-3 border border-slate-200 shadow-2xs">
                    <div className="text-[10px] font-bold text-[#5c728e] uppercase tracking-wider mb-1">
                      1. Acceptance Criteria (CC8.1)
                    </div>
                    <div className="text-xs font-bold text-[#111013] flex items-center gap-1.5">
                      <Check className="h-3.5 w-3.5 text-emerald-600 shrink-0" />
                      <span>Given / When / Then DoD</span>
                    </div>
                    <div className="text-[10px] text-[#5c728e] mt-0.5">Explicit BDD specs validated</div>
                  </div>

                  <div className="rounded-lg bg-white p-3 border border-slate-200 shadow-2xs">
                    <div className="text-[10px] font-bold text-[#5c728e] uppercase tracking-wider mb-1">
                      2. Code Linkage &amp; CI/CD
                    </div>
                    <div className="text-xs font-bold text-[#111013] flex items-center gap-1.5">
                      <Check className="h-3.5 w-3.5 text-emerald-600 shrink-0" />
                      <span>PR #384 &bull; 48/48 Tests</span>
                    </div>
                    <div className="text-[10px] text-[#5c728e] mt-0.5">GitHub Actions passing build</div>
                  </div>

                  <div className="rounded-lg bg-white p-3 border border-slate-200 shadow-2xs">
                    <div className="text-[10px] font-bold text-[#5c728e] uppercase tracking-wider mb-1">
                      3. Segregation of Duties (CC6.8)
                    </div>
                    <div className="text-xs font-bold text-[#111013] flex items-center gap-1.5">
                      <Check className="h-3.5 w-3.5 text-emerald-600 shrink-0" />
                      <span>Signed off @sarah.m</span>
                    </div>
                    <div className="text-[10px] text-[#5c728e] mt-0.5">Author @alex.k &ne; Approver</div>
                  </div>

                  <div className="rounded-lg bg-white p-3 border border-slate-200 shadow-2xs">
                    <div className="text-[10px] font-bold text-[#5c728e] uppercase tracking-wider mb-1">
                      4. QA Verification (A.8.29)
                    </div>
                    <div className="text-xs font-bold text-[#111013] flex items-center gap-1.5">
                      <Check className="h-3.5 w-3.5 text-emerald-600 shrink-0" />
                      <span>qa-verified Tag &amp; Sign-off</span>
                    </div>
                    <div className="text-[10px] text-[#5c728e] mt-0.5">Staging run signed by QA lead</div>
                  </div>

                  <div className="rounded-lg bg-white p-3 border border-slate-200 shadow-2xs">
                    <div className="text-[10px] font-bold text-[#5c728e] uppercase tracking-wider mb-1">
                      5. Security Scan (CC7.1)
                    </div>
                    <div className="text-xs font-bold text-[#111013] flex items-center gap-1.5">
                      <Check className="h-3.5 w-3.5 text-emerald-600 shrink-0" />
                      <span>Snyk SAST: 0 CVEs</span>
                    </div>
                    <div className="text-[10px] text-[#5c728e] mt-0.5">Vulnerability check verified</div>
                  </div>

                  <div className="rounded-lg bg-[#111013] text-white p-3 shadow-2xs flex flex-col justify-between">
                    <div className="text-[10px] font-bold text-[#dbf1c3] uppercase tracking-wider font-mono">
                      SHA-256 Digest Seal
                    </div>
                    <div className="text-xs font-mono font-bold text-white truncate flex items-center gap-1.5 my-0.5">
                      <Lock className="h-3 w-3 text-[#dbf1c3] shrink-0" />
                      <span className="truncate">9f83ac2b7c4d...</span>
                    </div>
                    <div className="text-[10px] text-slate-300">Locked in Forge Encrypted Storage</div>
                  </div>
                </div>

                {/* In-Situ Quick Remediation Bar */}
                <div className="flex flex-wrap items-center justify-between gap-2 pt-2 border-t border-slate-200/80 text-xs">
                  <span className="text-[#5c728e] font-medium text-[11px]">
                    1-Click In-Situ Remediation:
                  </span>
                  <div className="flex flex-wrap gap-1.5">
                    <span className="rounded bg-white border border-slate-200 px-2 py-0.5 text-[11px] font-semibold text-[#111013]">
                      + Append AC Checklist
                    </span>
                    <span className="rounded bg-white border border-slate-200 px-2 py-0.5 text-[11px] font-semibold text-[#111013]">
                      + Apply "qa-verified" Tag
                    </span>
                    <span className="rounded bg-white border border-slate-200 px-2 py-0.5 text-[11px] font-semibold text-[#111013]">
                      + Post QA Sign-off
                    </span>
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
