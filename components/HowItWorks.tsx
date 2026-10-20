"use client";

import { useState } from "react";
import { ArrowRight, Check, ShieldCheck } from "lucide-react";

interface HowItWorksProps {
  onOpenAuditModal: () => void;
}

export default function HowItWorks({ onOpenAuditModal }: HowItWorksProps) {
  const [activeStep, setActiveStep] = useState(1);

  const steps = [
    {
      id: 1,
      title: "Push code & open pull request normally",
      desc: "Engineers push code and create PRs in GitHub, GitLab, or Bitbucket. Zero forms, zero compliance bureaucracy, and zero disruption to daily engineering velocity.",
      badge: "Stage 01: Git PR",
      detail: "Author: @alex.k • Branch: feat/auth • CI: 48/48 Passing",
    },
    {
      id: 2,
      title: "Forge sandbox verifies review & CI test rules",
      desc: "EvidenceLog automatically validates separation of duties: confirming independent reviewers signed off and automated CI tests passed 100%.",
      badge: "Stage 02: Jira Forge",
      detail: "Rule: Author != Reviewer • @sarah.m Approved • Egress: Denied",
    },
    {
      id: 3,
      title: "Cryptographic proof sealed directly in Jira ticket",
      desc: "An immutable SHA-256 seal is logged in the Jira ticket. Auditors can inspect it directly or export Big 4 CSV workpapers in 1 click.",
      badge: "Stage 03: Compliance Seal",
      detail: "Digest: SHA-256 Sealed • Vanta & Drata Ready • Exportable CSV",
    },
  ];

  return (
    <section id="how-it-works" className="py-20 sm:py-28 bg-white border-t border-slate-100">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Contis-inspired Section Heading */}
        <div className="tf__common_heading mb-16 max-w-2xl mx-auto">
          <h6 className="text-[#ff8565] font-bold text-xs sm:text-sm tracking-widest uppercase mb-2 font-heading">
            WORKING PROCESS
          </h6>
          <h2 className="text-3xl sm:text-5xl font-bold text-[#111013] font-heading leading-tight">
            How EvidenceLog works in 3 steps
          </h2>
        </div>

        {/* 2-Column Working Process Layout (Left Visual, Right Stepper Accordion) */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
          {/* Left Column: Visual Mockup (col-6) */}
          <div className="lg:col-span-6">
            <div className="rounded-2xl border border-slate-200/90 bg-slate-50/70 p-6 sm:p-8 shadow-xl relative overflow-hidden">
              <div className="flex items-center justify-between border-b border-slate-200/80 pb-4 mb-5">
                <div className="flex items-center gap-2">
                  <span className="h-3 w-3 rounded-full bg-[#ff8565]" />
                  <span className="text-xs font-bold text-[#111013] uppercase tracking-wider font-heading">
                    Active Step: {steps[activeStep - 1].badge}
                  </span>
                </div>
                <span className="text-[11px] font-mono text-emerald-700 bg-emerald-50 px-2 py-0.5 rounded font-semibold">
                  Verified ✓
                </span>
              </div>

              {/* Dynamic Step Visual */}
              <div className="space-y-4">
                <div className="bg-white rounded-xl border border-slate-200 p-4 shadow-xs">
                  <div className="flex items-center justify-between text-xs font-semibold text-[#111013] mb-2 font-heading">
                    <span>{steps[activeStep - 1].title}</span>
                    <span className="text-[#ff8565] font-mono">0{activeStep}</span>
                  </div>
                  <p className="text-xs text-[#5c728e] leading-relaxed mb-3">
                    {steps[activeStep - 1].desc}
                  </p>
                  <div className="rounded-lg bg-slate-50 p-2.5 font-mono text-[11px] text-[#111013] border border-slate-200/60 flex items-center justify-between">
                    <span className="truncate">{steps[activeStep - 1].detail}</span>
                    <Check className="h-3.5 w-3.5 text-emerald-600 shrink-0 ml-2" />
                  </div>
                </div>

                <div className="p-4 rounded-xl bg-gradient-to-r from-emerald-50 to-teal-50 border border-emerald-200/80 text-xs text-emerald-950 flex items-center justify-between">
                  <div className="flex items-center gap-2">
                    <ShieldCheck className="h-4 w-4 text-emerald-700" />
                    <span className="font-semibold">Atlassian Forge Sandbox Zero Egress</span>
                  </div>
                  <span className="font-bold text-emerald-700">100% In-Tenant</span>
                </div>
              </div>
            </div>
          </div>

          {/* Right Column: Contis-Style Vertical Numbered Stepper (col-6) */}
          <div className="lg:col-span-6 space-y-4">
            {steps.map((step) => {
              const isActive = activeStep === step.id;
              return (
                <div
                  key={step.id}
                  onClick={() => setActiveStep(step.id)}
                  className={`cursor-pointer rounded-xl border transition-all p-5 ${
                    isActive
                      ? "border-[#ff8565] bg-white shadow-lg"
                      : "border-slate-200/80 bg-slate-50/50 hover:bg-white hover:border-slate-300"
                  }`}
                >
                  <div className="flex items-start gap-4">
                    {/* Contis Numbered Circle Badge */}
                    <div
                      className={`h-9 w-9 rounded-full flex items-center justify-center font-bold text-sm shrink-0 transition-colors ${
                        isActive
                          ? "bg-[#ff8565] text-white"
                          : "bg-slate-200 text-[#111013]"
                      }`}
                    >
                      {step.id}
                    </div>

                    <div className="flex-1">
                      <h4 className="text-base sm:text-lg font-bold text-[#111013] font-heading">
                        {step.title}
                      </h4>

                      {isActive && (
                        <div className="mt-2.5 space-y-3">
                          <p className="text-sm text-[#5c728e] leading-relaxed">
                            {step.desc}
                          </p>
                          <div>
                            <button
                              type="button"
                              onClick={(e) => {
                                e.stopPropagation();
                                onOpenAuditModal();
                              }}
                              className="text-xs font-bold text-[#ff8565] hover:underline inline-flex items-center gap-1.5"
                            >
                              <span>View Sample Output</span>
                              <ArrowRight className="h-3 w-3" />
                            </button>
                          </div>
                        </div>
                      )}
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        {/* Contis-inspired Counter Banner (tf__counter) */}
        <div className="mt-16 sm:mt-20 rounded-2xl bg-gradient-to-r from-[#dbf1c3]/30 via-[#dce7e3]/40 to-[#cdfff1]/30 border border-slate-200/70 p-8 sm:p-10">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
            <div>
              <div className="text-3xl sm:text-4xl font-extrabold text-[#111013] font-heading">
                100%
              </div>
              <div className="text-xs sm:text-sm font-semibold text-[#5c728e] mt-1">
                Audit Sampling Pass Rate
              </div>
            </div>
            <div>
              <div className="text-3xl sm:text-4xl font-extrabold text-[#ff8565] font-heading">
                0
              </div>
              <div className="text-xs sm:text-sm font-semibold text-[#5c728e] mt-1">
                Manual Screenshots
              </div>
            </div>
            <div>
              <div className="text-3xl sm:text-4xl font-extrabold text-[#111013] font-heading">
                10k+
              </div>
              <div className="text-xs sm:text-sm font-semibold text-[#5c728e] mt-1">
                Jira Releases Sealed
              </div>
            </div>
            <div>
              <div className="text-3xl sm:text-4xl font-extrabold text-[#ff8565] font-heading">
                2 Min
              </div>
              <div className="text-xs sm:text-sm font-semibold text-[#5c728e] mt-1">
                Atlassian Cloud Install
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
