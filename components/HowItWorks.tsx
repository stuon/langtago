"use client";

import { GitPullRequest, ShieldCheck, FileCheck, ArrowRight } from "lucide-react";

interface HowItWorksProps {
  onOpenAuditModal: () => void;
}

export default function HowItWorks({ onOpenAuditModal }: HowItWorksProps) {
  const steps = [
    {
      step: "01",
      icon: GitPullRequest,
      title: "Ship Code Normally",
      description:
        "Engineers create pull requests, request peer reviews, and run automated CI test suites in GitHub, GitLab, or Bitbucket. Zero forms to fill out.",
      tag: "Zero Friction",
    },
    {
      step: "02",
      icon: ShieldCheck,
      title: "Automatic Verification",
      description:
        "EvidenceLog checks segregation of duties (CC6.8) and passing test runs before tickets are closed—sealing immutable proof directly into Jira.",
      tag: "Forge Sandboxed",
    },
    {
      step: "03",
      icon: FileCheck,
      title: "1-Click Auditor Handoff",
      description:
        "Download pre-formatted auditor workpapers or export signed JSON directly into Vanta, Drata, or Secureframe for continuous compliance.",
      tag: "Vanta & Drata Ready",
    },
  ];

  return (
    <section id="how-it-works" className="relative py-16 sm:py-20 bg-slate-50 border-t border-slate-200/80">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="mx-auto max-w-2xl text-center space-y-3">
          <div className="inline-flex items-center gap-2 rounded-full bg-emerald-50 border border-emerald-200 px-3.5 py-1 text-xs font-bold text-emerald-800 uppercase tracking-wider">
            <span>How It Works</span>
          </div>

          <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight text-slate-900">
            Audit readiness in 3 simple steps.
          </h2>

          <p className="text-sm sm:text-base text-slate-600">
            No chasing engineers for screenshots. No manual spreadsheets. Everything runs in the background.
          </p>
        </div>

        {/* 3 Step Cards Grid */}
        <div className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8">
          {steps.map((item, idx) => {
            const Icon = item.icon;
            return (
              <div
                key={idx}
                className="relative rounded-3xl border border-slate-200/90 bg-white p-7 sm:p-8 shadow-sm hover:shadow-xl hover:border-emerald-300 transition-all duration-300 flex flex-col justify-between"
              >
                <div>
                  <div className="flex items-center justify-between">
                    <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-emerald-50 border border-emerald-200 text-emerald-600">
                      <Icon className="h-6 w-6" />
                    </div>
                    <span className="font-mono text-2xl font-black text-slate-300">{item.step}</span>
                  </div>

                  <h3 className="mt-6 text-xl font-bold text-slate-900">{item.title}</h3>
                  <p className="mt-2.5 text-sm text-slate-600 leading-relaxed">{item.description}</p>
                </div>

                <div className="mt-6 pt-5 border-t border-slate-100 flex items-center justify-between">
                  <span className="inline-flex items-center rounded-lg bg-slate-100 px-2.5 py-1 text-xs font-semibold text-slate-700">
                    {item.tag}
                  </span>
                  <span className="text-xs font-bold text-emerald-700 flex items-center gap-1">
                    Step {idx + 1} of 3 <ArrowRight className="h-3 w-3" />
                  </span>
                </div>
              </div>
            );
          })}
        </div>

        {/* Quick CTA strip */}
        <div className="mt-12 text-center">
          <button
            type="button"
            onClick={onOpenAuditModal}
            className="inline-flex items-center gap-2 text-sm font-semibold text-emerald-700 hover:text-emerald-800 transition-colors underline underline-offset-4"
          >
            <span>See what an audit-sealed Jira issue looks like in practice →</span>
          </button>
        </div>
      </div>
    </section>
  );
}
