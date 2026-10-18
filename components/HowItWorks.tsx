import { GitPullRequest, ShieldCheck, Lock, FileSpreadsheet, ArrowRight } from "lucide-react";

export default function HowItWorks() {
  const steps = [
    {
      step: "01",
      icon: GitPullRequest,
      title: "Code & Link",
      tagline: "Standard Git Workflow",
      description: "Engineers code normally. PRs reference Jira keys (LANG-10) across GitHub, GitLab, or Bitbucket.",
    },
    {
      step: "02",
      icon: ShieldCheck,
      title: "Continuous Policy Check",
      tagline: "Automated Evaluation",
      description: "On status transition, EvidenceLog automatically validates peer review, CI passes, and author separation.",
    },
    {
      step: "03",
      icon: Lock,
      title: "Cryptographic Seal",
      tagline: "SHA-256 Fingerprint",
      description: "A tamper-evident hash is computed in-memory and locked into encrypted in-tenant Forge Storage.",
    },
    {
      step: "04",
      icon: FileSpreadsheet,
      title: "1-Click Auditor Pack",
      tagline: "Instant Audit Readiness",
      description: "Export 30 random change samples in seconds. Formatted for Vanta, Drata, or Big 4 workpapers.",
    },
  ];

  return (
    <section id="how-it-works" className="relative py-16 border-t border-white/[0.06] bg-[#07090e]">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-2xl text-center space-y-2">
          <div className="inline-flex items-center gap-2 font-mono text-[11px] tracking-wider text-emerald-400 uppercase">
            <span className="h-1.5 w-1.5 rounded-full bg-emerald-400" />
            <span>How It Works</span>
          </div>
          <h2 className="text-2xl font-bold tracking-tight text-white sm:text-3xl">
            From Git commit to auditor-certified proof.
          </h2>
          <p className="text-xs sm:text-sm text-zinc-400">
            Zero extra dashboards for developers. Complete mathematical evidence for auditors.
          </p>
        </div>

        {/* 4-Step Connected Horizontal Pipeline */}
        <div className="mt-10 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 relative">
          {steps.map((item, idx) => {
            const Icon = item.icon;
            return (
              <div
                key={idx}
                className="group relative rounded-xl border border-white/[0.08] bg-[#0b0e15] p-5 flex flex-col justify-between hover:border-emerald-500/30 transition-all duration-200"
              >
                <div>
                  <div className="flex items-center justify-between">
                    <span className="font-mono text-[11px] font-bold text-zinc-500 group-hover:text-emerald-400 transition-colors">
                      STEP {item.step}
                    </span>
                    <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-zinc-900 border border-white/[0.08] text-emerald-400">
                      <Icon className="h-4 w-4" />
                    </div>
                  </div>

                  <div className="mt-4">
                    <span className="font-mono text-[10px] text-zinc-500 uppercase tracking-wider block">
                      {item.tagline}
                    </span>
                    <h3 className="text-sm font-bold text-white mt-0.5">
                      {item.title}
                    </h3>
                  </div>

                  <p className="mt-2 text-xs text-zinc-400 leading-relaxed">
                    {item.description}
                  </p>
                </div>

                <div className="mt-5 pt-3 border-t border-white/[0.06] flex items-center justify-between text-[11px] font-mono text-zinc-500">
                  <span className="text-[10px] text-zinc-500">Phase {idx + 1} of 4</span>
                  {idx < 3 && <ArrowRight className="h-3 w-3 text-zinc-600 hidden lg:block" />}
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
