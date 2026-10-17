import { GitPullRequest, ShieldCheck, Lock, FileSpreadsheet, ArrowRight } from "lucide-react";

export default function HowItWorks() {
  const steps = [
    {
      step: "01",
      icon: GitPullRequest,
      title: "Developers code as usual",
      description:
        "No extra dashboards or mandatory sign-offs to bookmark. Developers branch, code, and submit Pull Requests referencing Jira issue keys (e.g. LANG-10).",
    },
    {
      step: "02",
      icon: ShieldCheck,
      title: "Automated policy evaluation",
      description:
        "When the issue advances to Done, EvidenceLog verifies separation of duties (author != approvers), branch protections, and CI test execution.",
    },
    {
      step: "03",
      icon: Lock,
      title: "Cryptographic SHA-256 seal",
      description:
        "An immutable cryptographic digest is computed and written to encrypted in-tenant Forge Storage. Any subsequent tampering breaks the verification seal.",
    },
    {
      step: "04",
      icon: FileSpreadsheet,
      title: "1-Click auditor sample export",
      description:
        "When auditors request 30 random change management samples, export complete SOC 2 CC8.1 packages (PDF, CSV, JSON) in seconds.",
    },
  ];

  return (
    <section id="how-it-works" className="relative py-24 border-t border-white/[0.06] bg-[#080b0f]">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-3xl text-center">
          <div className="inline-flex items-center gap-2 font-mono text-xs tracking-wider text-emerald-400 uppercase">
            <span className="h-1.5 w-1.5 rounded-full bg-emerald-400" />
            <span>Workflow &amp; Ingestion</span>
          </div>
          <h2 className="mt-3 text-3xl font-bold tracking-tight text-white sm:text-4xl">
            Zero friction for engineers. Instant proof for auditors.
          </h2>
          <p className="mt-3 text-sm text-zinc-400">
            How EvidenceLog captures audit-grade evidence without forcing teams to adopt new compliance tools.
          </p>
        </div>

        <div className="mt-14 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5">
          {steps.map((item, idx) => {
            const Icon = item.icon;
            return (
              <div
                key={idx}
                className="relative rounded-2xl border border-white/[0.08] bg-[#0c1017] p-6 flex flex-col justify-between"
              >
                <div>
                  <div className="flex items-center justify-between">
                    <span className="font-mono text-xs font-bold text-zinc-500">
                      STEP {item.step}
                    </span>
                    <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-zinc-900 border border-white/[0.06] text-zinc-300">
                      <Icon className="h-4 w-4" />
                    </div>
                  </div>

                  <h3 className="mt-5 text-base font-bold text-white">
                    {item.title}
                  </h3>

                  <p className="mt-2 text-xs text-zinc-400 leading-relaxed">
                    {item.description}
                  </p>
                </div>

                <div className="mt-6 pt-4 border-t border-white/[0.06] flex items-center justify-between text-[11px] font-mono text-zinc-500">
                  <span>Phase {idx + 1} of 4</span>
                  {idx < 3 && <ArrowRight className="h-3 w-3 text-zinc-600" />}
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
