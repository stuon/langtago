import { Lock, Database, ServerOff, FileKey } from "lucide-react";

export default function SecurityArchitecture() {
  const securityPillars = [
    {
      icon: ServerOff,
      title: "Zero External Server Egress",
      description:
        "Unlike legacy plugins that stream your private tickets and PR comments to an external SaaS server, EvidenceLog runs entirely inside Atlassian Forge compute containers.",
    },
    {
      icon: Database,
      title: "Tenant-Isolated Forge Storage",
      description:
        "Your evidence payloads never leave your Jira Cloud instance. Data is stored strictly using Atlassian's encrypted Forge Storage API adhering to your company's data residency settings.",
    },
    {
      icon: FileKey,
      title: "Cryptographic Tamper-Evidence",
      description:
        "Every evidence seal uses SHA-256 HMAC digest validation. Any attempt to alter issue fields after closure invalidates the cryptographic verification tag.",
    },
  ];

  return (
    <section id="security" className="relative py-24 sm:py-32 border-t border-slate-900 bg-slate-950">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          {/* Left Text */}
          <div className="lg:col-span-6 space-y-6">
            <div className="inline-flex items-center gap-1.5 rounded-full border border-emerald-500/30 bg-emerald-950/40 px-3 py-1 text-xs font-semibold text-emerald-400">
              <Lock className="h-3.5 w-3.5" />
              <span>Security-First Architecture</span>
            </div>

            <h2 className="text-3xl font-extrabold tracking-tight text-white sm:text-4xl">
              Zero External Data Retention.{" "}
              <span className="text-emerald-400">By Design.</span>
            </h2>

            <p className="text-base text-slate-300 leading-relaxed">
              Your Jira tickets contain proprietary technical specifications, vulnerability reports, and architecture plans.
              EvidenceLog was architected specifically so that your sensitive company data never touches an external database.
            </p>

            <div className="space-y-4 pt-2">
              {securityPillars.map((pillar, idx) => {
                const Icon = pillar.icon;
                return (
                  <div key={idx} className="flex items-start gap-4 rounded-xl border border-slate-800/80 bg-slate-900/50 p-4">
                    <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-emerald-500/10 text-emerald-400 border border-emerald-500/20">
                      <Icon className="h-5 w-5" />
                    </div>
                    <div>
                      <h3 className="text-sm font-bold text-white">{pillar.title}</h3>
                      <p className="mt-1 text-xs text-slate-400 leading-relaxed">
                        {pillar.description}
                      </p>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>

          {/* Right Visual Comparison Card */}
          <div className="lg:col-span-6">
            <div className="rounded-2xl border border-slate-800 bg-gradient-to-b from-slate-900/90 to-slate-950 p-6 sm:p-8 space-y-6 shadow-2xl">
              <h3 className="text-sm font-semibold tracking-wider text-slate-400 uppercase">
                Architecture Comparison
              </h3>

              {/* Competitor / Old Way */}
              <div className="rounded-xl border border-rose-900/40 bg-rose-950/20 p-4 space-y-2">
                <div className="flex items-center justify-between">
                  <span className="text-xs font-bold text-rose-300">Legacy External Audit Bots</span>
                  <span className="rounded bg-rose-500/10 px-2 py-0.5 text-[10px] font-bold text-rose-400 border border-rose-500/30">
                    High Security Exposure
                  </span>
                </div>
                <ul className="text-xs text-rose-200/80 space-y-1.5 list-disc list-inside">
                  <li>Sends full Jira issue data & comments to third-party AWS/GCP servers</li>
                  <li>Requires complex third-party vendor InfoSec reviews & DPIAs</li>
                  <li>External databases store sensitive repo tokens & developer identities</li>
                </ul>
              </div>

              {/* EvidenceLog Way */}
              <div className="rounded-xl border border-emerald-500/40 bg-emerald-950/25 p-4 space-y-2 shadow-inner">
                <div className="flex items-center justify-between">
                  <span className="text-xs font-bold text-emerald-300">EvidenceLog on Atlassian Forge</span>
                  <span className="rounded bg-emerald-500/20 px-2 py-0.5 text-[10px] font-bold text-emerald-300 border border-emerald-500/40">
                    Zero Egress
                  </span>
                </div>
                <ul className="text-xs text-emerald-200/90 space-y-1.5 list-disc list-inside">
                  <li>Executes 100% inside Atlassian&apos;s sandboxed serverless runtime</li>
                  <li>Data persists exclusively within customer Jira tenant storage</li>
                  <li>Zero external credentials or databases to maintain</li>
                  <li>Instant InfoSec approval and compliance verification</li>
                </ul>
              </div>

              {/* Supported Frameworks Tag Cloud */}
              <div className="pt-4 border-t border-slate-800/80">
                <span className="text-[11px] font-medium text-slate-400 uppercase tracking-wider block mb-2.5">
                  Supported Compliance Standards:
                </span>
                <div className="flex flex-wrap gap-2 text-xs">
                  <span className="rounded-md bg-slate-800 px-2.5 py-1 text-slate-200 border border-slate-700">
                    SOC 2 Type II (CC8.1, CC7.1)
                  </span>
                  <span className="rounded-md bg-slate-800 px-2.5 py-1 text-slate-200 border border-slate-700">
                    ISO/IEC 27001 (A.12.1.2)
                  </span>
                  <span className="rounded-md bg-slate-800 px-2.5 py-1 text-slate-200 border border-slate-700">
                    HIPAA Security Rule §164.312
                  </span>
                  <span className="rounded-md bg-slate-800 px-2.5 py-1 text-slate-200 border border-slate-700">
                    PCI-DSS v4.0 Requirement 6.4
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
