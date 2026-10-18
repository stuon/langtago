"use client";

import {
  ShieldCheck,
  Lock,
  FileCheck,
  GitPullRequest,
  Check,
  ArrowRight,
  Database,
  Users,
} from "lucide-react";

interface BentoGridProps {
  onOpenAuditModal: () => void;
}

export default function BentoGrid({ onOpenAuditModal }: BentoGridProps) {
  return (
    <section id="features" className="relative py-16 sm:py-24 bg-white border-t border-slate-200/80">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="mx-auto max-w-2xl text-center space-y-3 mb-14">
          <div className="inline-flex items-center gap-2 rounded-full bg-emerald-50 border border-emerald-200 px-3.5 py-1 text-xs font-bold text-emerald-800 uppercase tracking-wider">
            <span>Built For SOC 2 &amp; ISO 27001</span>
          </div>

          <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight text-slate-900">
            Everything your auditor asks for. <br />
            <span className="text-slate-500 font-medium">Without changing how you ship.</span>
          </h2>

          <p className="text-sm sm:text-base text-slate-600">
            Automates the change management controls required by SOC 2 CC8.1, ISO 27001 A.8.32, and HIPAA §164.312.
          </p>
        </div>

        {/* 4-Card Master Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
          {/* =========================================================================
              CARD 1: Separation of Duties (8 cols)
              ========================================================================= */}
          <div className="lg:col-span-8 rounded-3xl border border-slate-200/90 bg-slate-50/70 p-7 sm:p-9 flex flex-col justify-between hover:shadow-xl hover:border-emerald-300 transition-all duration-300">
            <div className="space-y-5">
              <div className="flex items-center justify-between">
                <div className="inline-flex items-center gap-2 rounded-full border border-emerald-200 bg-white px-3 py-1 text-xs font-bold text-emerald-800 shadow-xs">
                  <ShieldCheck className="h-4 w-4 text-emerald-600" />
                  <span>SOC 2 CC6.8 Control</span>
                </div>
                <span className="text-xs font-semibold text-slate-500">Preventive Rule</span>
              </div>

              <div>
                <h3 className="text-xl sm:text-2xl font-bold text-slate-900 tracking-tight">
                  Automated Separation of Duties (Author != Approver)
                </h3>
                <p className="mt-2 text-sm text-slate-600 leading-relaxed">
                  Auditors routinely fail startups when engineers self-approve their own pull requests or mark tickets Done without independent peer review. EvidenceLog automatically validates that independent peer review is logged before release.
                </p>
              </div>

              {/* Clean Verification Callout */}
              <div className="rounded-2xl border border-slate-200 bg-white p-5 shadow-xs space-y-3">
                <div className="flex items-center justify-between text-xs font-semibold text-slate-500 border-b border-slate-100 pb-2.5">
                  <span>Jira Issue Review Validation</span>
                  <span className="text-emerald-700 bg-emerald-50 px-2 py-0.5 rounded-md font-bold">100% Compliant</span>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-xs">
                  <div className="flex items-center gap-2.5 p-2 rounded-xl bg-slate-50 border border-slate-200/80">
                    <Users className="h-4 w-4 text-slate-400 shrink-0" />
                    <div>
                      <span className="text-[10px] text-slate-400 uppercase font-bold block">Author / Submitter</span>
                      <span className="font-semibold text-slate-800">alex.k (Software Engineer)</span>
                    </div>
                  </div>

                  <div className="flex items-center gap-2.5 p-2 rounded-xl bg-emerald-50/60 border border-emerald-200">
                    <ShieldCheck className="h-4 w-4 text-emerald-600 shrink-0" />
                    <div>
                      <span className="text-[10px] text-emerald-700 uppercase font-bold block">Independent Approver</span>
                      <span className="font-bold text-slate-900">sarah.m (Staff Security Lead)</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="mt-6 pt-4 border-t border-slate-200/80 flex items-center gap-2 text-xs font-semibold text-slate-500">
              <Check className="h-4 w-4 text-emerald-600" />
              <span>Automatically verified across GitHub, GitLab, and Bitbucket pull requests</span>
            </div>
          </div>

          {/* =========================================================================
              CARD 2: Zero-Egress In-Tenant Security (4 cols)
              ========================================================================= */}
          <div className="lg:col-span-4 rounded-3xl border border-slate-200/90 bg-slate-50/70 p-7 sm:p-9 flex flex-col justify-between hover:shadow-xl hover:border-emerald-300 transition-all duration-300">
            <div className="space-y-5">
              <div className="flex items-center justify-between">
                <div className="inline-flex items-center gap-2 rounded-full border border-blue-200 bg-white px-3 py-1 text-xs font-bold text-blue-800 shadow-xs">
                  <Lock className="h-4 w-4 text-blue-600" />
                  <span>Zero Egress</span>
                </div>
                <span className="text-xs font-semibold text-slate-500">Infosec Safe</span>
              </div>

              <div>
                <h3 className="text-xl font-bold text-slate-900 tracking-tight">
                  Your code never leaves Atlassian Cloud
                </h3>
                <p className="mt-2 text-sm text-slate-600 leading-relaxed">
                  Legacy compliance tools copy code and tickets into external third-party databases. EvidenceLog executes 100% inside Atlassian Forge’s sandbox with zero external egress.
                </p>
              </div>

              {/* Security Callout Box */}
              <div className="rounded-2xl border border-slate-200 bg-white p-4 shadow-xs space-y-2.5 text-xs">
                <div className="flex items-center justify-between text-slate-800 font-semibold">
                  <span className="flex items-center gap-2">
                    <Database className="h-4 w-4 text-emerald-600" />
                    <span>Customer Jira Storage</span>
                  </span>
                  <span className="text-emerald-700 font-bold">Encrypted</span>
                </div>
                <div className="flex items-center justify-between text-slate-500 pt-2 border-t border-slate-100">
                  <span>External Third-Party Servers</span>
                  <span className="font-bold text-slate-700">0 Servers</span>
                </div>
              </div>
            </div>

            <div className="mt-6 pt-4 border-t border-slate-200/80 flex items-center justify-between text-xs font-semibold text-slate-500">
              <span className="text-emerald-700">Forge Sandbox Native</span>
              <span>Atlassian Certified</span>
            </div>
          </div>

          {/* =========================================================================
              CARD 3: 1-Click Auditor Packs (4 cols)
              ========================================================================= */}
          <div className="lg:col-span-4 rounded-3xl border border-slate-200/90 bg-slate-50/70 p-7 sm:p-9 flex flex-col justify-between hover:shadow-xl hover:border-emerald-300 transition-all duration-300">
            <div className="space-y-5">
              <div className="flex items-center justify-between">
                <div className="inline-flex items-center gap-2 rounded-full border border-purple-200 bg-white px-3 py-1 text-xs font-bold text-purple-800 shadow-xs">
                  <FileCheck className="h-4 w-4 text-purple-600" />
                  <span>Auditor Packs</span>
                </div>
                <span className="text-xs font-semibold text-slate-500">1-Click</span>
              </div>

              <div>
                <h3 className="text-xl font-bold text-slate-900 tracking-tight">
                  Instant auditor evidence handoff
                </h3>
                <p className="mt-2 text-sm text-slate-600 leading-relaxed">
                  Export cryptographically verified evidence packages in CSV, JSON, or PDF. Formatted for instant ingestion by SOC 2 auditors, Vanta, and Drata.
                </p>
              </div>

              <div className="space-y-2 text-xs font-medium text-slate-700">
                <div className="flex items-center gap-2">
                  <Check className="h-4 w-4 text-emerald-600 shrink-0" />
                  <span>Big 4 workpaper CSV exports</span>
                </div>
                <div className="flex items-center gap-2">
                  <Check className="h-4 w-4 text-emerald-600 shrink-0" />
                  <span>Vanta &amp; Drata continuous JSON ingestion</span>
                </div>
                <div className="flex items-center gap-2">
                  <Check className="h-4 w-4 text-emerald-600 shrink-0" />
                  <span>Release Merkle root signatures</span>
                </div>
              </div>
            </div>

            <div className="mt-6 pt-4 border-t border-slate-200/80">
              <button
                type="button"
                onClick={onOpenAuditModal}
                className="w-full flex items-center justify-center gap-2 rounded-xl bg-white border border-slate-200 py-2.5 text-xs font-bold text-slate-800 hover:bg-slate-50 hover:border-slate-300 transition-all shadow-xs"
              >
                <span>Inspect Sample SOC 2 Output</span>
                <ArrowRight className="h-3.5 w-3.5 text-emerald-600" />
              </button>
            </div>
          </div>

          {/* =========================================================================
              CARD 4: Silent Developer Experience (8 cols)
              ========================================================================= */}
          <div className="lg:col-span-8 rounded-3xl border border-slate-200/90 bg-slate-50/70 p-7 sm:p-9 flex flex-col justify-between hover:shadow-xl hover:border-emerald-300 transition-all duration-300">
            <div className="space-y-5">
              <div className="flex items-center justify-between">
                <div className="inline-flex items-center gap-2 rounded-full border border-teal-200 bg-white px-3 py-1 text-xs font-bold text-teal-800 shadow-xs">
                  <GitPullRequest className="h-4 w-4 text-teal-600" />
                  <span>Developer Experience</span>
                </div>
                <span className="text-xs font-semibold text-slate-500">Zero Interruption</span>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 items-center">
                <div>
                  <h3 className="text-xl sm:text-2xl font-bold text-slate-900 tracking-tight">
                    Zero change to developer habits
                  </h3>
                  <p className="mt-2 text-sm text-slate-600 leading-relaxed">
                    Engineers keep working in Jira, GitHub, GitLab, and Bitbucket without filling out compliance forms. EvidenceLog passively captures PR links, CI status, and peer reviews in the background.
                  </p>

                  <div className="mt-4 flex flex-wrap gap-2 text-xs font-medium text-slate-600">
                    <span className="rounded-lg bg-white border border-slate-200 px-3 py-1 shadow-xs">GitHub Actions</span>
                    <span className="rounded-lg bg-white border border-slate-200 px-3 py-1 shadow-xs">GitLab CI</span>
                    <span className="rounded-lg bg-white border border-slate-200 px-3 py-1 shadow-xs">Bitbucket</span>
                    <span className="rounded-lg bg-white border border-slate-200 px-3 py-1 shadow-xs">Snyk &amp; SonarQube</span>
                  </div>
                </div>

                <div className="rounded-2xl border border-slate-200 bg-white p-4 shadow-xs space-y-2 text-xs">
                  <div className="flex items-center justify-between text-slate-500 border-b border-slate-100 pb-2 font-semibold">
                    <span>Background Verification Pipeline</span>
                    <span className="text-emerald-700 font-bold">✔ Active</span>
                  </div>
                  <div className="space-y-1.5 text-xs text-slate-700">
                    <div className="flex items-center justify-between py-0.5">
                      <span>1. Git Pull Request</span>
                      <span className="font-semibold text-slate-900">PR #384 (Merged)</span>
                    </div>
                    <div className="flex items-center justify-between py-0.5">
                      <span>2. Peer Review</span>
                      <span className="font-semibold text-emerald-700">Approved by sarah.m</span>
                    </div>
                    <div className="flex items-center justify-between py-0.5">
                      <span>3. CI/CD Test Suite</span>
                      <span className="font-semibold text-emerald-700">1,482 Passed</span>
                    </div>
                    <div className="flex items-center justify-between py-0.5">
                      <span>4. Security Scan</span>
                      <span className="font-semibold text-emerald-700">0 CVEs</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="mt-6 pt-4 border-t border-slate-200/80 flex items-center justify-between text-xs font-semibold text-slate-500">
              <span>Automatic Background Tracking</span>
              <span className="text-emerald-700">&lt;2 Min Atlassian Install</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
