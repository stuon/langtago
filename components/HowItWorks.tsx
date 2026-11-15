"use client";

import { useState } from "react";
import Image from "next/image";
import { ArrowRight } from "lucide-react";

interface HowItWorksProps {
  onOpenAuditModal: () => void;
}

export default function HowItWorks({ onOpenAuditModal }: HowItWorksProps) {
  const [activeStep, setActiveStep] = useState(1);

  const steps = [
    {
      id: 1,
      title: "Write code and review PRs normally",
      desc: "Engineers open pull requests, run CI tests, and approve code inside GitHub, GitLab, or Bitbucket as usual. Zero forms, zero compliance checklists, and zero disruption to daily engineering velocity.",
      badge: "Stage 01: Ship Code",
      detail: "PR #42 • Author: @alex.r • Reviewer: @sarah.c • CI: 48/48 Passing",
      screenshot: "/images/jira_demo9_ticket_full_tight.png",
      caption: "Real Jira Ticket with GitHub PR Linkage & EvidenceLog Action Toolbar",
    },
    {
      id: 2,
      title: "Move Jira ticket to Done — EvidenceLog locks the proof",
      desc: "When an issue moves to Done or Deployed, EvidenceLog automatically validates that an independent peer reviewed the code (Author ≠ Approver), tests passed, and acceptance criteria exist. If someone forgot a peer review, Jira blocks the release and provides a 1-click button to fix it.",
      badge: "Stage 02: In-Situ Check",
      detail: "[PASS] Segregation of Duties: Verified • [PASS] QA Sign-off: Verified • Status: Release Approved",
      screenshot: "/images/jira_compliance_checklist_tight.png",
      caption: "Real EvidenceLog In-Situ Verification Checklist & Stage Progress Tracker",
    },
    {
      id: 3,
      title: "Export a signed audit pack in 5 seconds",
      desc: "When audit season arrives, stop spending 40+ engineering hours digging up old pull requests and capturing screenshots. Export a pre-formatted CSV or signed PDF audit certificate for your auditor in one click.",
      badge: "Stage 03: 1-Click Audit Pack",
      detail: "Audit-Pack-2026.csv (42 issues verified • SHA-256 tamper-evident digest)",
      screenshot: "/images/jira_quick_remediation_tight.png",
      caption: "Real 1-Click Remediation & Tamper-Evident SHA-256 Verification in KVS",
    },
  ];

  const currentStep = steps[activeStep - 1];

  return (
    <section id="how-it-works" className="py-20 sm:py-28 bg-white border-t border-slate-100">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Contis-inspired Section Heading */}
        <div className="tf__common_heading mb-16 max-w-2xl mx-auto text-center">
          <h6 className="text-[#15803d] font-bold text-xs sm:text-sm tracking-widest uppercase mb-2 font-heading">
            HOW IT WORKS
          </h6>
          <h2 className="text-3xl sm:text-5xl font-bold text-[#111013] font-heading leading-tight">
            Zero forms. Zero audit fire drills. 3 steps.
          </h2>
          <p className="text-sm sm:text-base text-[#5c728e] mt-3">
            Your team keeps shipping code in GitHub, GitLab, or Bitbucket. EvidenceLog handles the audit trail automatically.
          </p>
        </div>

        {/* 2-Column Working Process Layout (Left Clean Screenshot, Right Stepper Accordion) */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
          {/* Left Column: Clean Jira Cloud Screenshot Mockup Frame (col-6) */}
          <div className="lg:col-span-6 flex flex-col items-center justify-center">
            <div
              onClick={onOpenAuditModal}
              className="w-full rounded-2xl border border-slate-200/90 bg-white shadow-xl shadow-slate-900/5 overflow-hidden cursor-pointer transition-all duration-300 hover:shadow-2xl hover:border-slate-300"
            >
              {/* Jira UI Mockup Titlebar */}
              <div className="flex items-center justify-between px-4 py-2.5 bg-slate-50 border-b border-slate-100 text-[11px] font-mono text-slate-500">
                <div className="flex items-center gap-1.5">
                  <div className="w-2.5 h-2.5 rounded-full bg-slate-300" />
                  <div className="w-2.5 h-2.5 rounded-full bg-slate-300" />
                  <div className="w-2.5 h-2.5 rounded-full bg-slate-300" />
                  <span className="ml-2 font-sans font-medium text-slate-600 truncate max-w-[220px]">
                    {currentStep.caption}
                  </span>
                </div>
                <span className="text-[10px] font-bold text-[#15803d] bg-emerald-50 border border-emerald-200 rounded px-1.5 py-0.5">
                  Jira Cloud Native
                </span>
              </div>

              <div className="p-3 sm:p-4 bg-white flex items-center justify-center">
                <Image
                  src={currentStep.screenshot}
                  alt={currentStep.caption}
                  width={515}
                  height={495}
                  className="w-full h-auto object-contain rounded-lg"
                />
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
                      ? "border-[#15803d] bg-white shadow-lg"
                      : "border-slate-200/80 bg-slate-50/50 hover:bg-white hover:border-slate-300"
                  }`}
                >
                  <div className="flex items-start gap-4">
                    {/* Contis Numbered Circle Badge */}
                    <div
                      className={`h-9 w-9 rounded-full flex items-center justify-center font-bold text-sm shrink-0 transition-colors ${
                        isActive
                          ? "bg-[#111013] text-[#dbf1c3]"
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
                          <div className="pt-1">
                            <button
                              type="button"
                              onClick={(e) => {
                                e.stopPropagation();
                                onOpenAuditModal();
                              }}
                              className="text-xs font-bold text-[#15803d] hover:underline inline-flex items-center gap-1.5 cursor-pointer"
                            >
                              <span>Inspect Sample Audit Report</span>
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
      </div>
    </section>
  );
}
