"use client";

import Image from "next/image";
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
      description: "Engineers push code and run CI tests in GitHub, GitLab, or Bitbucket. Zero forms.",
      tag: "Zero Friction",
    },
    {
      step: "02",
      icon: ShieldCheck,
      title: "Automatic Verification",
      description: "EvidenceLog validates peer review and automated tests, sealing tamper-evident proof directly in Jira.",
      tag: "Atlassian Forge Native",
    },
    {
      step: "03",
      icon: FileCheck,
      title: "1-Click Auditor Handoff",
      description: "Export Big 4 CSV workpapers or sync signed compliance payloads directly to Vanta and Drata.",
      tag: "Vanta & Drata Ready",
    },
  ];

  return (
    <section id="how-it-works" className="relative py-16 sm:py-24 bg-slate-50 border-t border-slate-200/80">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="mx-auto max-w-2xl text-center space-y-3">
          <div className="inline-flex items-center gap-2 rounded-full bg-emerald-50 border border-emerald-200 px-3.5 py-1 text-xs font-bold text-emerald-800 uppercase tracking-wider">
            <span>Automated Lifecycle</span>
          </div>

          <h2 className="text-3xl sm:text-5xl font-extrabold tracking-tight text-slate-900">
            Audit readiness in 3 simple steps.
          </h2>

          <p className="text-sm sm:text-base text-slate-600">
            No chasing engineers for screenshots. No manual spreadsheets. Everything runs in the background.
          </p>
        </div>

        {/* 3D Isometric Pipeline Showcase Graphic */}
        <div className="mt-12 mx-auto max-w-5xl">
          <div className="relative rounded-3xl border border-slate-200/90 bg-white p-3 sm:p-4 shadow-xl overflow-hidden group">
            <div className="relative aspect-[16/9] w-full rounded-2xl overflow-hidden bg-slate-100">
              <Image
                src="/images/three-step-pipeline-diagram.jpg"
                alt="3D isometric workflow diagram showing Code Commit, Jira Ticket Enforcement, and Certified SOC 2 Dossier"
                width={1200}
                height={675}
                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-[1.02]"
                priority
              />

              {/* Bottom Subtle Caption */}
              <div className="absolute bottom-3 left-3 right-3 rounded-xl bg-slate-900/85 backdrop-blur-md p-3 text-white flex items-center justify-between border border-white/10 shadow-lg">
                <div className="flex items-center gap-2">
                  <ShieldCheck className="h-5 w-5 text-emerald-400 shrink-0" />
                  <div>
                    <p className="text-xs font-bold">End-to-End Compliance Pipeline</p>
                    <p className="text-[10px] text-slate-300">Git PR &bull; Atlassian Forge Sandbox &bull; Sealed SOC 2 Workpapers</p>
                  </div>
                </div>
                <button
                  type="button"
                  onClick={onOpenAuditModal}
                  className="rounded-md bg-emerald-600 px-3 py-1 text-[11px] font-bold text-white hover:bg-emerald-500 transition-colors shadow-xs"
                >
                  View Sample Export
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* 3 Step Cards Grid */}
        <div className="mt-10 grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8 max-w-5xl mx-auto">
          {steps.map((item, idx) => {
            const Icon = item.icon;
            return (
              <div
                key={idx}
                className="relative rounded-3xl border border-slate-200/90 bg-white p-6 sm:p-7 shadow-xs hover:shadow-lg hover:border-emerald-300 transition-all duration-300 flex flex-col justify-between"
              >
                <div>
                  <div className="flex items-center justify-between">
                    <div className="flex h-11 w-11 items-center justify-center rounded-2xl bg-emerald-50 border border-emerald-200 text-emerald-600">
                      <Icon className="h-5 w-5" />
                    </div>
                    <span className="font-mono text-xl font-black text-slate-300">{item.step}</span>
                  </div>

                  <h3 className="mt-5 text-lg font-bold text-slate-900">{item.title}</h3>
                  <p className="mt-2 text-xs sm:text-sm text-slate-600 leading-relaxed">{item.description}</p>
                </div>

                <div className="mt-5 pt-4 border-t border-slate-100 flex items-center justify-between text-xs">
                  <span className="inline-flex items-center rounded-lg bg-slate-100 px-2 py-0.5 font-semibold text-slate-700">
                    {item.tag}
                  </span>
                  <span className="font-bold text-emerald-700 flex items-center gap-1">
                    Step {idx + 1} of 3 <ArrowRight className="h-3 w-3" />
                  </span>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
