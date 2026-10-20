"use client";

import { Lock, Download, Check, ArrowRight } from "lucide-react";

interface TeamShowcaseProps {
  onOpenAuditModal: () => void;
}

export default function TeamShowcase({ onOpenAuditModal }: TeamShowcaseProps) {
  return (
    <section id="security" className="py-20 sm:py-28 bg-slate-50 border-t border-slate-200/80">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 space-y-16">
        {/* Contis-Style Row 1: Left Graphic, Right Story */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
          {/* Left Visual: Clean Gatekeeper UI */}
          <div className="lg:col-span-6">
            <div className="rounded-2xl border border-slate-200 bg-white p-6 sm:p-8 shadow-xl space-y-4">
              <div className="flex items-center justify-between border-b border-slate-100 pb-3">
                <span className="text-xs font-bold text-[#111013] uppercase tracking-wider font-heading">
                  SOC 2 CC8.1 Gatekeeper Rule
                </span>
                <span className="rounded bg-emerald-50 text-emerald-800 text-[11px] font-bold px-2 py-0.5">
                  Automated Enforcement
                </span>
              </div>

              {/* Blocked Self-Approval Case */}
              <div className="rounded-xl border border-rose-200 bg-rose-50/50 p-4 space-y-1.5">
                <div className="flex items-center justify-between text-xs font-bold text-rose-900">
                  <span>Author Self-Approval Check</span>
                  <span className="rounded bg-rose-100 text-rose-800 text-[10px] px-1.5 py-0.5">
                    REJECTED
                  </span>
                </div>
                <p className="text-xs text-rose-700">
                  Author @alex.k attempted self-approval &bull; Blocked by EvidenceLog Policy.
                </p>
              </div>

              {/* Verified Independent Sign-off */}
              <div className="rounded-xl border border-emerald-200 bg-emerald-50/50 p-4 space-y-1.5">
                <div className="flex items-center justify-between text-xs font-bold text-emerald-900">
                  <span>Independent Peer Reviewer</span>
                  <span className="rounded bg-emerald-100 text-emerald-800 text-[10px] px-1.5 py-0.5">
                    VERIFIED ✓
                  </span>
                </div>
                <p className="text-xs text-emerald-800 font-medium">
                  Approved by Staff Engineer @sarah.m &bull; SOC 2 CC8.1 requirement satisfied.
                </p>
              </div>
            </div>
          </div>

          {/* Right Text Story (Contis Typography) */}
          <div className="lg:col-span-6 space-y-5">
            <h6 className="text-[#ff8565] font-bold text-xs sm:text-sm tracking-widest uppercase font-heading">
              SEPARATION OF DUTIES
            </h6>

            <h3 className="text-3xl sm:text-4xl font-bold text-[#111013] font-heading leading-tight">
              Never worry about unauthorized code in production
            </h3>

            <p className="text-base text-[#5c728e] leading-relaxed">
              SOC 2 CC8.1 requires verifiable segregation of duties: developers cannot self-approve changes to production. EvidenceLog automatically validates that whoever authored the pull request did not approve it.
            </p>

            <ul className="space-y-2.5 pt-2">
              <li className="flex items-center gap-2 text-sm text-[#111013] font-medium">
                <Check className="h-4 w-4 text-[#ff8565] shrink-0" />
                <span>Instant author vs. reviewer verification on every merge</span>
              </li>
              <li className="flex items-center gap-2 text-sm text-[#111013] font-medium">
                <Check className="h-4 w-4 text-[#ff8565] shrink-0" />
                <span>Zero friction for engineers—no screenshots or ticket forms</span>
              </li>
            </ul>

            <div className="pt-2">
              <a
                href="https://marketplace.atlassian.com"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-6 py-3 rounded-lg bg-[#111013] text-white hover:bg-[#ff8565] font-semibold text-xs transition-all shadow-xs cursor-pointer"
              >
                <span>Install on Atlassian Marketplace</span>
                <ArrowRight className="h-4 w-4" />
              </a>
            </div>
          </div>
        </div>

        {/* Contis-Style Row 2: Two Side-by-Side Cards (tf__single_content_creator_bottom) */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* Card A: Zero Data Egress */}
          <div className="rounded-2xl border border-slate-200 bg-white p-7 sm:p-9 shadow-md hover:border-[#ff8565] transition-all space-y-4">
            <div className="h-10 w-10 rounded-xl bg-[#111013] text-[#ff8565] flex items-center justify-center">
              <Lock className="h-5 w-5" />
            </div>

            <h4 className="text-xl sm:text-2xl font-bold text-[#111013] font-heading">
              Strict in-tenant Atlassian Forge sandboxing
            </h4>

            <p className="text-sm text-[#5c728e] leading-relaxed">
              Zero external data egress. All code analysis and evidence sealing runs inside Atlassian&apos;s isolated microVMs. Your secrets, source code, and Jira tickets never touch third-party servers.
            </p>

            <div className="pt-3">
              <a
                href="https://marketplace.atlassian.com"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 px-4 py-2 rounded-lg bg-white border border-slate-200 text-[#111013] hover:border-[#111013] font-semibold text-xs transition-all shadow-2xs cursor-pointer"
              >
                <span>Learn About Forge Security</span>
                <ArrowRight className="h-3 w-3" />
              </a>
            </div>
          </div>

          {/* Card B: Instant Big 4 Handoff */}
          <div className="rounded-2xl border border-slate-200 bg-white p-7 sm:p-9 shadow-md hover:border-[#ff8565] transition-all space-y-4">
            <div className="h-10 w-10 rounded-xl bg-[#111013] text-[#ff8565] flex items-center justify-center">
              <Download className="h-5 w-5" />
            </div>

            <h4 className="text-xl sm:text-2xl font-bold text-[#111013] font-heading">
              Auditor-approved Big 4 workpapers in 1 click
            </h4>

            <p className="text-sm text-[#5c728e] leading-relaxed">
              Eliminate folder chaos and manual screenshot gathering. Export clean, formatted CSV sampling tables and JSON bundles designed specifically for PwC, EY, Deloitte, KPMG, and Vanta.
            </p>

            <div className="pt-3">
              <button
                type="button"
                onClick={onOpenAuditModal}
                className="inline-flex items-center gap-1.5 px-4 py-2 rounded-lg bg-[#111013] text-white hover:bg-[#ff8565] font-semibold text-xs transition-all shadow-xs cursor-pointer"
              >
                <span>Inspect Sample CSV Workpaper</span>
                <ArrowRight className="h-3 w-3" />
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
