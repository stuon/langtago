import { GitPullRequest, ShieldCheck, Lock, FileSpreadsheet, ArrowRight } from "lucide-react";

export default function HowItWorks() {
  const steps = [
    {
      step: "01",
      icon: GitPullRequest,
      title: "Engineers Work as Usual",
      description:
        "No new CLI tools, no compliance dashboards to bookmark. Developers branch, code, and submit Pull Requests referencing standard Jira issue keys (e.g., PROD-1429).",
    },
    {
      step: "02",
      icon: ShieldCheck,
      title: "Automated Control Verification",
      description:
        "As the ticket moves towards Done, EvidenceLog verifies separation of duties (author != reviewer), branch protection rules, unit tests, and vulnerability scans.",
    },
    {
      step: "03",
      icon: Lock,
      title: "Tamper-Evident SHA-256 Seal",
      description:
        "EvidenceLog computes a cryptographic hash seal of all approvals, commits, and timestamps, permanently storing it inside Atlassian Forge tenant storage.",
    },
    {
      step: "04",
      icon: FileSpreadsheet,
      title: "Instant 1-Click Auditor Export",
      description:
        "When SOC 2 or ISO auditors request 25 random change samples, export pre-formatted compliance packets (PDF, CSV, JSON) in seconds instead of weeks.",
    },
  ];

  return (
    <section id="how-it-works" className="relative py-24 sm:py-32 border-t border-slate-900 bg-slate-950/70">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-3xl text-center">
          <div className="inline-flex items-center gap-1.5 rounded-full border border-cyan-500/30 bg-cyan-950/40 px-3 py-1 text-xs font-semibold text-cyan-400">
            <span>Seamless Developer Workflow</span>
          </div>
          <h2 className="mt-4 text-3xl font-extrabold tracking-tight text-white sm:text-4xl">
            How EvidenceLog Works Inside Your Team
          </h2>
          <p className="mt-4 text-base text-slate-400 sm:text-lg">
            Zero friction for engineering teams. Total peace of mind for Security, GRC, and Compliance leads.
          </p>
        </div>

        <div className="mt-16 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {steps.map((item, idx) => {
            const Icon = item.icon;
            return (
              <div
                key={idx}
                className="relative rounded-2xl border border-slate-800 bg-slate-900/50 p-6 flex flex-col justify-between"
              >
                <div>
                  <div className="flex items-center justify-between">
                    <span className="font-mono text-2xl font-black text-slate-700">
                      {item.step}
                    </span>
                    <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-slate-950 border border-slate-800 text-cyan-400">
                      <Icon className="h-5 w-5" />
                    </div>
                  </div>

                  <h3 className="mt-5 text-base font-bold text-white">
                    {item.title}
                  </h3>

                  <p className="mt-2.5 text-xs text-slate-400 leading-relaxed">
                    {item.description}
                  </p>
                </div>

                <div className="mt-6 flex items-center gap-1 text-[11px] font-medium text-cyan-400">
                  <span>Step {idx + 1} of 4</span>
                  {idx < 3 && <ArrowRight className="h-3 w-3" />}
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
