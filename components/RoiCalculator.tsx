"use client";

import { useState, useId } from "react";
import Link from "next/link";
import {
  Calculator,
  ArrowRight,
  Clock,
  TrendingUp,
  FileCheck,
  CheckCircle2,
  AlertCircle,
} from "lucide-react";

interface RoiCalculatorProps {
  onOpenAuditModal: () => void;
}

export default function RoiCalculator({ onOpenAuditModal }: RoiCalculatorProps) {
  // Input parameters with sensible defaults for mid-market engineering teams
  const [teamSize, setTeamSize] = useState<number>(25);
  const [releasesPerMonth, setReleasesPerMonth] = useState<number>(16);
  const [samplesPerAudit, setSamplesPerAudit] = useState<number>(35);
  const [hourlyRate, setHourlyRate] = useState<number>(85);

  const teamSizeId = useId();
  const releasesId = useId();
  const samplesId = useId();
  const rateId = useId();

  // Calculation formulas:
  // 1. Manual sample gathering: ~3.5 hours per sampled Jira ticket (finding PR, reviewing commit history, checking CI logs, taking screenshots, pasting into Vanta/Drata or Excel)
  const samplePrepHoursAnnual = samplesPerAudit * 3.5;

  // 2. Continuous deployment friction & pre-release checks: ~0.5 hours per release verifying approvals & peer reviews manually
  const releaseFrictionHoursAnnual = releasesPerMonth * 12 * 0.5;

  // 3. Auditor back-and-forth & sample rejection remediation: ~15% of samples get questioned, requiring ~2 hours of engineering re-investigation
  const auditorFollowupHoursAnnual = samplesPerAudit * 0.15 * 2.0;

  // Total annual engineering hours wasted on manual compliance
  const totalHoursWasted = Math.round(
    samplePrepHoursAnnual + releaseFrictionHoursAnnual + auditorFollowupHoursAnnual
  );

  // Financial cost of manual engineering time
  const annualManualCost = Math.round(totalHoursWasted * hourlyRate);

  // EvidenceLog Pro annual cost: $2.50 / user / month billed annually = $30 / user / year
  // (Free tier is $0 for up to 10 users, but calculate based on Pro tier for enterprise ROI)
  const annualEvidenceLogCost = teamSize <= 10 ? 0 : Math.round(teamSize * 2.5 * 12);

  // Net annual savings
  const netSavings = Math.max(0, annualManualCost - annualEvidenceLogCost);

  // Return on Investment (ROI) Multiplier
  const roiMultiplier =
    annualEvidenceLogCost > 0
      ? (annualManualCost / annualEvidenceLogCost).toFixed(1)
      : "Infinite (Free Tier)";

  return (
    <section id="roi-calculator" className="py-20 sm:py-28 bg-[#fbfdfc] border-t border-slate-100">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Contis-inspired Section Heading */}
        <div className="tf__common_heading mb-14 max-w-3xl mx-auto text-center">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#dbf1c3]/70 border border-[#b8e29a] text-[#15803d] font-bold text-xs tracking-wider uppercase mb-3 font-heading">
            <Calculator className="h-3.5 w-3.5" />
            <span>INTERACTIVE COMPLIANCE ROI CALCULATOR</span>
          </div>
          <h2 className="text-3xl sm:text-5xl font-bold text-[#111013] font-heading leading-tight">
            Calculate your time &amp; dollar savings
          </h2>
          <p className="text-sm sm:text-base text-[#5c728e] mt-3">
            Manual change evidence collection costs engineering teams hundreds of hours every audit cycle. See your exact payback with EvidenceLog.
          </p>
        </div>

        {/* 2-Column Interactive Calculator Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          {/* Left Column: Interactive Sliders & Inputs (7 cols) */}
          <div className="lg:col-span-7 bg-white rounded-3xl p-6 sm:p-8 border border-slate-200/90 shadow-sm space-y-7">
            <div>
              <div className="flex items-center justify-between mb-2">
                <label htmlFor={teamSizeId} className="text-sm font-semibold text-[#111013]">
                  Engineering Squad Size
                </label>
                <span className="text-sm font-bold text-[#15803d] bg-emerald-50 border border-emerald-200 px-3 py-0.5 rounded-full font-mono">
                  {teamSize} engineers
                </span>
              </div>
              <input
                id={teamSizeId}
                type="range"
                min="5"
                max="150"
                step="5"
                value={teamSize}
                onChange={(e) => setTeamSize(Number(e.target.value))}
                className="w-full accent-[#15803d] cursor-pointer h-2 bg-slate-100 rounded-lg appearance-none"
              />
              <div className="flex justify-between text-[11px] text-slate-400 mt-1">
                <span>5 devs</span>
                <span>50 devs</span>
                <span>100 devs</span>
                <span>150+ devs</span>
              </div>
            </div>

            <div>
              <div className="flex items-center justify-between mb-2">
                <label htmlFor={releasesId} className="text-sm font-semibold text-[#111013]">
                  Production Releases / Month
                </label>
                <span className="text-sm font-bold text-[#15803d] bg-emerald-50 border border-emerald-200 px-3 py-0.5 rounded-full font-mono">
                  {releasesPerMonth} releases / mo
                </span>
              </div>
              <input
                id={releasesId}
                type="range"
                min="2"
                max="60"
                step="2"
                value={releasesPerMonth}
                onChange={(e) => setReleasesPerMonth(Number(e.target.value))}
                className="w-full accent-[#15803d] cursor-pointer h-2 bg-slate-100 rounded-lg appearance-none"
              />
              <div className="flex justify-between text-[11px] text-slate-400 mt-1">
                <span>Bi-weekly (2)</span>
                <span>Weekly (4)</span>
                <span>Continuous (16)</span>
                <span>Daily+ (60)</span>
              </div>
            </div>

            <div>
              <div className="flex items-center justify-between mb-2">
                <label htmlFor={samplesId} className="text-sm font-semibold text-[#111013]">
                  Annual Audit Samples Required (SOC 2 / ISO 27001)
                </label>
                <span className="text-sm font-bold text-[#15803d] bg-emerald-50 border border-emerald-200 px-3 py-0.5 rounded-full font-mono">
                  {samplesPerAudit} tickets sampled
                </span>
              </div>
              <input
                id={samplesId}
                type="range"
                min="10"
                max="80"
                step="5"
                value={samplesPerAudit}
                onChange={(e) => setSamplesPerAudit(Number(e.target.value))}
                className="w-full accent-[#15803d] cursor-pointer h-2 bg-slate-100 rounded-lg appearance-none"
              />
              <div className="flex justify-between text-[11px] text-slate-400 mt-1">
                <span>10 samples</span>
                <span>25 (Type I)</span>
                <span>40 (Type II)</span>
                <span>80+ samples</span>
              </div>
            </div>

            <div>
              <div className="flex items-center justify-between mb-2">
                <label htmlFor={rateId} className="text-sm font-semibold text-[#111013]">
                  Blended Engineering Cost / Hour
                </label>
                <span className="text-sm font-bold text-[#15803d] bg-emerald-50 border border-emerald-200 px-3 py-0.5 rounded-full font-mono">
                  ${hourlyRate}/hr
                </span>
              </div>
              <input
                id={rateId}
                type="range"
                min="50"
                max="150"
                step="5"
                value={hourlyRate}
                onChange={(e) => setHourlyRate(Number(e.target.value))}
                className="w-full accent-[#15803d] cursor-pointer h-2 bg-slate-100 rounded-lg appearance-none"
              />
              <div className="flex justify-between text-[11px] text-slate-400 mt-1">
                <span>$50/hr</span>
                <span>$85/hr (Industry Avg)</span>
                <span>$120/hr</span>
                <span>$150/hr</span>
              </div>
            </div>

            {/* Quick Process Contrast */}
            <div className="pt-4 border-t border-slate-100 grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div className="p-3.5 rounded-xl bg-rose-50/50 border border-rose-100 text-xs">
                <div className="flex items-center gap-1.5 font-bold text-rose-800 mb-1.5">
                  <AlertCircle className="h-4 w-4 shrink-0 text-rose-600" />
                  <span>Manual Status Quo</span>
                </div>
                <p className="text-rose-900/80 leading-relaxed">
                  3.5 hrs/sample collecting screenshots, PR approvals, CI logs, and explaining gaps to auditors.
                </p>
              </div>

              <div className="p-3.5 rounded-xl bg-emerald-50/50 border border-emerald-100 text-xs">
                <div className="flex items-center gap-1.5 font-bold text-emerald-800 mb-1.5">
                  <CheckCircle2 className="h-4 w-4 shrink-0 text-emerald-600" />
                  <span>With EvidenceLog</span>
                </div>
                <p className="text-emerald-900/80 leading-relaxed">
                  0 manual hours. Sealed SHA-256 evidence logged natively in Jira. 1-click auditor export.
                </p>
              </div>
            </div>

            <div className="pt-2 text-center sm:text-left">
              <Link
                href="/compare/manual-screenshots-vs-evidencelog"
                className="text-xs font-semibold text-[#15803d] hover:underline inline-flex items-center gap-1"
              >
                <span>Compare: Full 12-point Manual Screenshots vs. EvidenceLog Matrix ↗</span>
              </Link>
            </div>
          </div>

          {/* Right Column: Live Dynamic Savings & Impact Card (5 cols) */}
          <div className="lg:col-span-5 bg-[#111013] text-white rounded-3xl p-6 sm:p-8 shadow-xl flex flex-col justify-between space-y-6">
            <div>
              <div className="inline-block rounded-md bg-white/10 px-2.5 py-1 text-[11px] font-bold uppercase tracking-wider text-[#dbf1c3] font-heading mb-4">
                PROJECTED ANNUAL RETURN
              </div>

              <div className="space-y-1 mb-6">
                <div className="text-xs text-slate-400 uppercase tracking-wider font-semibold">
                  Net Annual Dollar Savings
                </div>
                <div className="text-4xl sm:text-5xl font-extrabold text-[#dbf1c3] font-heading">
                  ${netSavings.toLocaleString()}
                </div>
                <div className="text-xs text-slate-300">
                  {annualEvidenceLogCost === 0
                    ? "Free forever under 10 users"
                    : `After subtracting $${annualEvidenceLogCost.toLocaleString()} EvidenceLog Pro license`}
                </div>
              </div>

              {/* Metrics Grid */}
              <div className="grid grid-cols-2 gap-3.5 pt-4 border-t border-white/10">
                <div className="p-3 rounded-xl bg-white/5 border border-white/10">
                  <div className="flex items-center gap-1.5 text-slate-400 text-xs mb-1">
                    <Clock className="h-3.5 w-3.5 text-[#dbf1c3]" />
                    <span>Hours Saved</span>
                  </div>
                  <div className="text-xl sm:text-2xl font-bold text-white font-mono">
                    {totalHoursWasted} hrs/yr
                  </div>
                  <div className="text-[11px] text-slate-400 mt-0.5">
                    returned to sprint delivery
                  </div>
                </div>

                <div className="p-3 rounded-xl bg-white/5 border border-white/10">
                  <div className="flex items-center gap-1.5 text-slate-400 text-xs mb-1">
                    <TrendingUp className="h-3.5 w-3.5 text-[#dbf1c3]" />
                    <span>ROI Multiplier</span>
                  </div>
                  <div className="text-xl sm:text-2xl font-bold text-white font-mono">
                    {typeof roiMultiplier === "string" && roiMultiplier.includes("x")
                      ? roiMultiplier
                      : `${roiMultiplier}x`}
                  </div>
                  <div className="text-[11px] text-slate-400 mt-0.5">
                    payback on investment
                  </div>
                </div>
              </div>

              {/* Breakdown List */}
              <div className="mt-5 space-y-2 text-xs text-slate-300">
                <div className="flex justify-between py-1 border-b border-white/5">
                  <span className="text-slate-400">Manual Sample Gathering Cost:</span>
                  <span className="font-semibold text-white font-mono">
                    ${Math.round(samplePrepHoursAnnual * hourlyRate).toLocaleString()}
                  </span>
                </div>
                <div className="flex justify-between py-1 border-b border-white/5">
                  <span className="text-slate-400">Pre-Release Checklist Overhead:</span>
                  <span className="font-semibold text-white font-mono">
                    ${Math.round(releaseFrictionHoursAnnual * hourlyRate).toLocaleString()}
                  </span>
                </div>
                <div className="flex justify-between py-1 border-b border-white/5">
                  <span className="text-slate-400">Auditor Follow-up &amp; Inquiries:</span>
                  <span className="font-semibold text-white font-mono">
                    ${Math.round(auditorFollowupHoursAnnual * hourlyRate).toLocaleString()}
                  </span>
                </div>
              </div>
            </div>

            {/* Direct Action Buttons */}
            <div className="pt-4 border-t border-white/10 space-y-2.5">
              <a
                href="https://marketplace.atlassian.com"
                target="_blank"
                rel="noopener noreferrer"
                className="w-full inline-flex items-center justify-center gap-2 py-3.5 px-6 rounded-xl bg-[#dbf1c3] hover:bg-white text-[#111013] text-sm font-bold shadow-md transition-all cursor-pointer"
              >
                <span>Install Free on Marketplace</span>
                <ArrowRight className="h-4 w-4" />
              </a>

              <button
                type="button"
                onClick={onOpenAuditModal}
                className="w-full inline-flex items-center justify-center gap-2 py-2.5 px-4 rounded-xl bg-transparent hover:bg-white/10 text-white text-xs font-semibold border border-white/20 transition-all cursor-pointer"
              >
                <FileCheck className="h-3.5 w-3.5 text-[#dbf1c3]" />
                <span>Inspect Sample 5/5 Auditor Pack</span>
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
