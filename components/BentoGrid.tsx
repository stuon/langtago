import Image from "next/image";
import {
  ShieldCheck,
  Check,
  ArrowRight,
  Download,
  ShieldAlert,
} from "lucide-react";

interface BentoGridProps {
  onOpenAuditModal: () => void;
}

export default function BentoGrid({ onOpenAuditModal }: BentoGridProps) {
  return (
    <section id="features" className="relative py-20 sm:py-28 bg-white border-t border-slate-200/80">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 space-y-24 sm:space-y-32">
        {/* =========================================================================
            FEATURE 1: Separation of Duties (50/50 Split Showcase with 3D Diagram)
            ========================================================================= */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-center">
          {/* Left Column: Short, Punchy Copy */}
          <div className="lg:col-span-5 space-y-5 text-left">
            <div className="inline-flex items-center gap-2 rounded-full bg-emerald-50 border border-emerald-200 px-3.5 py-1 text-xs font-bold text-emerald-800 uppercase tracking-wider">
              <span>Automated Control</span>
            </div>

            <h2 className="text-3xl sm:text-5xl font-extrabold tracking-tight text-slate-900 leading-[1.15]">
              No more self-approvals.
            </h2>

            <p className="text-base sm:text-lg text-slate-600 leading-relaxed font-normal">
              EvidenceLog automatically verifies that the engineer who wrote the code cannot approve their own pull request or close the Jira ticket.
            </p>

            <div className="space-y-2.5 pt-1 text-sm font-semibold text-slate-700">
              <div className="flex items-center gap-2.5">
                <div className="flex h-5 w-5 items-center justify-center rounded-full bg-emerald-100 text-emerald-700">
                  <Check className="h-3.5 w-3.5" />
                </div>
                <span>SOC 2 CC6.8 &amp; ISO 27001 separation of duties</span>
              </div>
              <div className="flex items-center gap-2.5">
                <div className="flex h-5 w-5 items-center justify-center rounded-full bg-emerald-100 text-emerald-700">
                  <Check className="h-3.5 w-3.5" />
                </div>
                <span>GitHub, GitLab &amp; Bitbucket automatic sync</span>
              </div>
            </div>

            <div className="pt-3">
              <button
                type="button"
                onClick={onOpenAuditModal}
                className="inline-flex items-center gap-2 rounded-2xl bg-emerald-600 px-6 py-3 text-sm font-bold text-white shadow-md shadow-emerald-600/20 hover:bg-emerald-500 transition-all"
              >
                <span>See Verification Demo</span>
                <ArrowRight className="h-4 w-4" />
              </button>
            </div>
          </div>

          {/* Right Column: 3D Isometric Gatekeeper Diagram */}
          <div className="lg:col-span-7">
            <div className="relative rounded-3xl border border-slate-200/90 bg-white p-3 sm:p-4 shadow-xl overflow-hidden group">
              <div className="relative aspect-[4/3] w-full rounded-2xl overflow-hidden bg-slate-100">
                <Image
                  src="/images/separation-duties-diagram.jpg"
                  alt="3D diagram showing Separation of Duties automated gatekeeper in Jira Cloud blocking self-approvals"
                  width={800}
                  height={600}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                  priority
                />

                {/* Floating Pills */}
                <div className="absolute top-3 right-3 flex flex-col gap-2">
                  <div className="rounded-xl bg-white/95 backdrop-blur-md px-3 py-1.5 shadow-md border border-slate-200/80 flex items-center gap-2 text-xs font-bold text-rose-700">
                    <ShieldAlert className="h-3.5 w-3.5 text-rose-600" />
                    <span>Self-Approval Blocked</span>
                  </div>
                  <div className="rounded-xl bg-white/95 backdrop-blur-md px-3 py-1.5 shadow-md border border-slate-200/80 flex items-center gap-2 text-xs font-bold text-emerald-800">
                    <ShieldCheck className="h-3.5 w-3.5 text-emerald-600" />
                    <span>Peer Sign-off Verified</span>
                  </div>
                </div>

                {/* Bottom Overlay Card */}
                <div className="absolute bottom-3 left-3 right-3 rounded-xl bg-slate-900/85 backdrop-blur-md p-3 text-white flex items-center justify-between border border-white/10 shadow-lg">
                  <div className="flex items-center gap-2">
                    <ShieldCheck className="h-5 w-5 text-emerald-400 shrink-0" />
                    <div>
                      <p className="text-xs font-bold">Automated Gatekeeper Rule &bull; CC6.8</p>
                      <p className="text-[10px] text-slate-300">Author != Reviewer enforcement &bull; SHA-256 sealed</p>
                    </div>
                  </div>
                  <span className="rounded-md bg-emerald-500/20 text-emerald-300 border border-emerald-500/40 px-2 py-0.5 text-[10px] font-bold">
                    PASSING
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* =========================================================================
            FEATURE 2: Zero Data Egress (50/50 Split Showcase Reversed with 3D Diagram)
            ========================================================================= */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-center">
          {/* Left Column: 3D Isometric Architectural Diagram */}
          <div className="lg:col-span-7 order-2 lg:order-1">
            <div className="relative rounded-3xl border border-slate-200/90 bg-white p-3 sm:p-4 shadow-xl overflow-hidden group">
              <div className="relative aspect-[4/3] w-full rounded-2xl overflow-hidden bg-slate-100">
                <Image
                  src="/images/cloud-security-diagram.jpg"
                  alt="3D Architectural diagram of EvidenceLog zero-egress security pipeline inside Atlassian Forge"
                  width={800}
                  height={600}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                />
                <div className="absolute bottom-3 left-3 right-3 rounded-xl bg-slate-900/85 backdrop-blur-md p-3 text-white flex items-center justify-between border border-white/10 shadow-lg">
                  <div className="flex items-center gap-2">
                    <ShieldCheck className="h-5 w-5 text-emerald-400 shrink-0" />
                    <div>
                      <p className="text-xs font-bold">Atlassian Forge Sandbox Architecture</p>
                      <p className="text-[10px] text-slate-300">Strict deny-all outbound policy &bull; 0 external servers</p>
                    </div>
                  </div>
                  <span className="rounded-md bg-emerald-500/20 text-emerald-300 border border-emerald-500/40 px-2 py-0.5 text-[10px] font-bold">
                    ZERO EGRESS
                  </span>
                </div>
              </div>
            </div>
          </div>

          {/* Right Column: Short, Punchy Copy */}
          <div className="lg:col-span-5 space-y-5 text-left order-1 lg:order-2">
            <div className="inline-flex items-center gap-2 rounded-full bg-blue-50 border border-blue-200 px-3.5 py-1 text-xs font-bold text-blue-800 uppercase tracking-wider">
              <span>100% In-Tenant Security</span>
            </div>

            <h2 className="text-3xl sm:text-5xl font-extrabold tracking-tight text-slate-900 leading-[1.15]">
              Your code never leaves Atlassian.
            </h2>

            <p className="text-base sm:text-lg text-slate-600 leading-relaxed font-normal">
              Zero external databases. Zero third-party cloud servers. EvidenceLog executes entirely inside Atlassian Forge with strict zero-egress policies.
            </p>

            <div className="space-y-2.5 pt-1 text-sm font-semibold text-slate-700">
              <div className="flex items-center gap-2.5">
                <div className="flex h-5 w-5 items-center justify-center rounded-full bg-emerald-100 text-emerald-700">
                  <Check className="h-3.5 w-3.5" />
                </div>
                <span>Passes strictest enterprise InfoSec vendor reviews</span>
              </div>
              <div className="flex items-center gap-2.5">
                <div className="flex h-5 w-5 items-center justify-center rounded-full bg-emerald-100 text-emerald-700">
                  <Check className="h-3.5 w-3.5" />
                </div>
                <span>Immutable SHA-256 tamper-evident integrity</span>
              </div>
            </div>

            <div className="pt-3">
              <a
                href="https://marketplace.atlassian.com"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 rounded-2xl border-2 border-slate-200 bg-white px-6 py-3 text-sm font-bold text-slate-800 hover:bg-slate-50 hover:border-slate-300 transition-all shadow-xs"
              >
                <span>Read Security Architecture</span>
                <ArrowRight className="h-4 w-4" />
              </a>
            </div>
          </div>
        </div>

        {/* =========================================================================
            FEATURE 3: Instant Auditor & GRC Sync (50/50 Split Showcase with Photo)
            ========================================================================= */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-center">
          {/* Left Column: Short, Punchy Copy */}
          <div className="lg:col-span-5 space-y-5 text-left">
            <div className="inline-flex items-center gap-2 rounded-full bg-purple-50 border border-purple-200 px-3.5 py-1 text-xs font-bold text-purple-800 uppercase tracking-wider">
              <span>1-Click Compliance</span>
            </div>

            <h2 className="text-3xl sm:text-5xl font-extrabold tracking-tight text-slate-900 leading-[1.15]">
              Audit reports in seconds. Not weeks.
            </h2>

            <p className="text-base sm:text-lg text-slate-600 leading-relaxed font-normal">
              Download sealed evidence workpapers in one click, or export formatted payloads directly into Vanta, Drata, and Secureframe.
            </p>

            <div className="space-y-2.5 pt-1 text-sm font-semibold text-slate-700">
              <div className="flex items-center gap-2.5">
                <div className="flex h-5 w-5 items-center justify-center rounded-full bg-emerald-100 text-emerald-700">
                  <Check className="h-3.5 w-3.5" />
                </div>
                <span>Big 4 workpaper CSV format ready for audit sampling</span>
              </div>
              <div className="flex items-center gap-2.5">
                <div className="flex h-5 w-5 items-center justify-center rounded-full bg-emerald-100 text-emerald-700">
                  <Check className="h-3.5 w-3.5" />
                </div>
                <span>Automated continuous compliance ingestion</span>
              </div>
            </div>

            <div className="pt-3">
              <button
                type="button"
                onClick={onOpenAuditModal}
                className="inline-flex items-center gap-2 rounded-2xl bg-emerald-600 px-6 py-3 text-sm font-bold text-white shadow-md shadow-emerald-600/20 hover:bg-emerald-500 transition-all"
              >
                <span>Inspect Sample Output</span>
                <ArrowRight className="h-4 w-4" />
              </button>
            </div>
          </div>

          {/* Right Column: Visual Auditor Review Photo with Floating Badges */}
          <div className="lg:col-span-7">
            <div className="relative rounded-3xl border border-slate-200/90 bg-white p-3 sm:p-4 shadow-xl overflow-hidden group">
              <div className="relative aspect-[16/10] w-full rounded-2xl overflow-hidden bg-slate-100">
                <Image
                  src="/images/auditor-review.jpg"
                  alt="Founder and auditor reviewing clean SOC 2 compliance reports on laptop"
                  width={800}
                  height={500}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                />

                {/* Floating GRC Format Pills on Photo */}
                <div className="absolute top-3 right-3 flex flex-col gap-2">
                  <div className="rounded-xl bg-white/95 backdrop-blur-md px-3 py-1.5 shadow-md border border-slate-200/80 flex items-center gap-2 text-xs font-bold text-slate-800">
                    <span className="h-2 w-2 rounded-full bg-emerald-500" />
                    <span>Big 4 CSV Workpapers</span>
                  </div>
                  <div className="rounded-xl bg-white/95 backdrop-blur-md px-3 py-1.5 shadow-md border border-slate-200/80 flex items-center gap-2 text-xs font-bold text-slate-800">
                    <span className="h-2 w-2 rounded-full bg-cyan-500" />
                    <span>Vanta &amp; Drata Sync</span>
                  </div>
                </div>

                {/* Bottom Overlay Card */}
                <div className="absolute bottom-3 left-3 right-3 rounded-xl bg-white/95 backdrop-blur-md p-3.5 border border-slate-200/80 shadow-lg flex items-center justify-between">
                  <div>
                    <span className="text-xs font-bold text-slate-900 block">LANG-10 Certified Audit Dossier</span>
                    <p className="text-[11px] text-slate-500">AICPA SOC 2 Type II CC8.1 &bull; 100% Passed</p>
                  </div>
                  <button
                    type="button"
                    onClick={onOpenAuditModal}
                    className="flex items-center gap-1.5 rounded-xl bg-emerald-600 px-3.5 py-1.5 text-xs font-bold text-white shadow-xs hover:bg-emerald-500 transition-colors"
                  >
                    <Download className="h-3.5 w-3.5" />
                    <span>1-Click Export</span>
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
