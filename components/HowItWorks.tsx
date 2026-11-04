"use client";

import { useState } from "react";
import { ArrowRight } from "lucide-react";

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
      detail: "Author: @alex.k • Branch: feat/auth • CI: 48/48 Passing • PR #104",
      screenshot: "/images/jira_demo9_ticket_full_tight.png",
      caption: "Real Jira Ticket with GitHub PR Linkage & EvidenceLog Action Toolbar",
    },
    {
      id: 2,
      title: "Automated 5-pillar compliance check & Preventive Gatekeeper",
      desc: "EvidenceLog automatically validates 5 mandatory controls: Acceptance Criteria, Git & PR Linkage, independent Peer Review (Author != Reviewer), QA Verification, and SAST Security Scans (Snyk/SonarQube). Jira's workflow validator prevents transitions to Done if controls fail, offering 1-click in-situ remediation.",
      badge: "Stage 02: Jira Forge & Gatekeeper",
      detail: "5/5 Verified: AC ✓ • Git PR ✓ • Reviewer ✓ • QA Sign-off ✓ • SAST Clean ✓",
      screenshot: "/images/jira_compliance_checklist_tight.png",
      caption: "Real EvidenceLog 5-Pillar SDLC Checklist & Stage Progress Tracker",
    },
    {
      id: 3,
      title: "Cryptographic SHA-256 seal, Merkle Tree proofs & Audit Hub",
      desc: "An immutable SHA-256 seal is logged in Jira ticket storage. For entire release sprints, EvidenceLog computes a cryptographic Binary Merkle Tree root hash. Audit teams can batch-certify issues, download Big 4 CSV workpapers, or run offline verifications with zero vendor lock-in.",
      badge: "Stage 03: Merkle Seal & Audit Hub",
      detail: "Digest: SHA-256 Sealed • Merkle Root Verified • Vanta / Drata Ready • Exportable CSV",
      screenshot: "/images/jira_quick_remediation_tight.png",
      caption: "Real 1-Click Remediation & Tamper-Evident SHA-256 Fingerprint in KVS",
    },
  ];

  const currentStep = steps[activeStep - 1];

  return (
    <section id="how-it-works" className="py-20 sm:py-28 bg-white border-t border-slate-100">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Contis-inspired Section Heading */}
        <div className="tf__common_heading mb-16 max-w-2xl mx-auto text-center">
          <h6 className="text-[#15803d] font-bold text-xs sm:text-sm tracking-widest uppercase mb-2 font-heading">
            WORKING PROCESS
          </h6>
          <h2 className="text-3xl sm:text-5xl font-bold text-[#111013] font-heading leading-tight">
            How EvidenceLog works in 3 steps
          </h2>
          <p className="text-sm sm:text-base text-[#5c728e] mt-3">
            Real production interface running 100% inside Atlassian Cloud.
          </p>
        </div>

        {/* 2-Column Working Process Layout (Left Clean Screenshot, Right Stepper Accordion) */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
          {/* Left Column: Clean Jira Cloud Screenshot (col-6) */}
          <div className="lg:col-span-6 flex items-center justify-center">
            <img
              src={currentStep.screenshot}
              alt={currentStep.caption}
              className="w-full h-auto object-contain cursor-pointer transition-transform duration-200 hover:scale-[1.01]"
              onClick={onOpenAuditModal}
            />
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
                          <div className="flex flex-wrap items-center gap-2 pt-1">
                            <button
                              type="button"
                              onClick={(e) => {
                                e.stopPropagation();
                                onOpenAuditModal();
                              }}
                              className="text-xs font-bold text-[#15803d] hover:underline inline-flex items-center gap-1.5 cursor-pointer"
                            >
                              <span>Inspect Real Audit Output</span>
                              <ArrowRight className="h-3 w-3" />
                            </button>
                            <span className="text-slate-300">&bull;</span>
                            <span className="text-xs text-slate-500 font-mono">
                              Click image to enlarge
                            </span>
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
