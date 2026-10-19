"use client";

import Image from "next/image";
import { ShieldCheck, Clock, CheckCircle2, ArrowRight } from "lucide-react";

interface TeamShowcaseProps {
  onOpenAuditModal: () => void;
}

export default function TeamShowcase({ onOpenAuditModal }: TeamShowcaseProps) {
  return (
    <section className="relative py-20 sm:py-28 bg-slate-50 border-t border-slate-200/80 overflow-hidden">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          {/* Left Column: Team Stock Photo with Floating Stat Badges */}
          <div className="lg:col-span-7">
            <div className="relative rounded-3xl border border-slate-200/90 bg-white p-3 sm:p-4 shadow-xl overflow-hidden group">
              <div className="relative aspect-[16/10] w-full rounded-2xl overflow-hidden bg-slate-100">
                <Image
                  src="/images/team-collaboration.jpg"
                  alt="Modern software engineering team collaborating on architecture and compliance"
                  width={900}
                  height={560}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                />

                {/* Floating Top Badge */}
                <div className="absolute top-3 left-3 rounded-xl bg-white/95 backdrop-blur-md px-3.5 py-2 shadow-lg border border-slate-200/80 flex items-center gap-2.5">
                  <div className="flex h-7 w-7 items-center justify-center rounded-lg bg-emerald-100 text-emerald-700">
                    <CheckCircle2 className="h-4 w-4" />
                  </div>
                  <div>
                    <p className="text-xs font-bold text-slate-900">Automated Sealing</p>
                    <p className="text-[10px] text-slate-500">SHA-256 tamper-evident</p>
                  </div>
                </div>

                {/* Floating Right Badge */}
                <div className="absolute bottom-16 right-3 rounded-xl bg-white/95 backdrop-blur-md px-3.5 py-2 shadow-lg border border-slate-200/80 flex items-center gap-2.5">
                  <div className="flex h-7 w-7 items-center justify-center rounded-lg bg-blue-100 text-blue-700">
                    <Clock className="h-4 w-4" />
                  </div>
                  <div>
                    <p className="text-xs font-bold text-slate-900">Continuous Audit</p>
                    <p className="text-[10px] text-slate-500">SOC 2 CC8.1 &bull; ISO 27001</p>
                  </div>
                </div>

                {/* Bottom Overlay Card */}
                <div className="absolute bottom-3 left-3 right-3 rounded-xl bg-slate-900/85 backdrop-blur-md p-3 text-white flex items-center justify-between border border-white/10 shadow-lg">
                  <div className="flex items-center gap-2">
                    <ShieldCheck className="h-5 w-5 text-emerald-400 shrink-0" />
                    <div>
                      <p className="text-xs font-bold">Zero Developer Interruption</p>
                      <p className="text-[10px] text-slate-300">No manual screenshot requests &bull; Automatic Jira sealing</p>
                    </div>
                  </div>
                  <span className="rounded-md bg-emerald-500/20 text-emerald-300 border border-emerald-500/40 px-2 py-0.5 text-[10px] font-bold">
                    FORGE NATIVE
                  </span>
                </div>
              </div>
            </div>
          </div>

          {/* Right Column: Short Punchy Copy & Key Stats */}
          <div className="lg:col-span-5 space-y-6 text-left">
            <div className="inline-flex items-center gap-2 rounded-full bg-emerald-50 border border-emerald-200 px-3.5 py-1 text-xs font-bold text-emerald-800 uppercase tracking-wider">
              <span>Velocity &bull; Compliance</span>
            </div>

            <h2 className="text-3xl sm:text-5xl font-extrabold tracking-tight text-slate-900 leading-[1.15]">
              Engineers keep shipping. <br />
              <span className="text-emerald-600">Auditors get proof.</span>
            </h2>

            <p className="text-base sm:text-lg text-slate-600 leading-relaxed font-normal">
              Developers never fill out compliance forms or take screenshots. EvidenceLog quietly verifies pull requests and CI/CD pipelines behind Jira on every sprint release.
            </p>

            {/* 3 Metrics Pillars */}
            <div className="grid grid-cols-3 gap-3 pt-2">
              <div className="rounded-2xl border border-slate-200/90 bg-white p-3.5 text-center shadow-xs">
                <span className="block text-2xl sm:text-3xl font-black text-slate-900 tracking-tight">0 min</span>
                <span className="mt-1 block text-[11px] font-semibold text-slate-500 uppercase tracking-wider">Manual screenshots</span>
              </div>
              <div className="rounded-2xl border border-slate-200/90 bg-white p-3.5 text-center shadow-xs">
                <span className="block text-2xl sm:text-3xl font-black text-emerald-600 tracking-tight">100%</span>
                <span className="mt-1 block text-[11px] font-semibold text-slate-500 uppercase tracking-wider">Forge sandboxed</span>
              </div>
              <div className="rounded-2xl border border-slate-200/90 bg-white p-3.5 text-center shadow-xs">
                <span className="block text-2xl sm:text-3xl font-black text-slate-900 tracking-tight">&lt; 2 min</span>
                <span className="mt-1 block text-[11px] font-semibold text-slate-500 uppercase tracking-wider">Jira setup</span>
              </div>
            </div>

            {/* Native Atlassian Assurance Card */}
            <div className="rounded-2xl border border-slate-200 bg-white p-4 shadow-xs">
              <div className="flex items-center gap-2 text-xs font-bold text-slate-900">
                <ShieldCheck className="h-4 w-4 text-emerald-600 shrink-0" />
                <span>Zero Context Switching &bull; Zero Workflow Disruption</span>
              </div>
              <p className="mt-1.5 text-xs sm:text-sm text-slate-600 leading-relaxed">
                Engineers continue reviewing code in GitHub, GitLab, or Bitbucket and closing tasks in Jira. EvidenceLog operates entirely behind the scenes to capture and seal audit evidence.
              </p>
            </div>

            <div className="pt-1">
              <button
                type="button"
                onClick={onOpenAuditModal}
                className="inline-flex items-center gap-2 rounded-2xl bg-emerald-600 px-6 py-3 text-sm font-bold text-white shadow-md shadow-emerald-600/20 hover:bg-emerald-500 transition-all"
              >
                <span>View Sample Audit Dossier</span>
                <ArrowRight className="h-4 w-4" />
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
