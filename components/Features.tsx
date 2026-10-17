import {
  ShieldCheck,
  Lock,
  FileCheck2,
  GitBranch,
  Scale,
  AlertOctagon,
  DatabaseZap,
} from "lucide-react";

export default function Features() {
  const features = [
    {
      icon: GitBranch,
      tag: "Zero Manual Overhead",
      title: "Automated Evidence Sealing",
      description:
        "PR reviews, GitHub/GitLab actions, and CI test results are sealed the moment a Jira ticket transitions to Done. Never ask developers for audit screenshots again.",
      highlight: "Saves 15+ hours per engineer during audit season.",
    },
    {
      icon: Lock,
      tag: "Tamper-Proof Integrity",
      title: "Cryptographic SHA-256 Chain",
      description:
        "Every event generates an immutable cryptographic signature. Any retroactive changes to tickets, approvals, or deployments are automatically flagged as discrepancies.",
      highlight: "Mathematical proof of change integrity.",
    },
    {
      icon: FileCheck2,
      tag: "Auditor-Ready",
      title: "1-Click SOC 2 & ISO Packs",
      description:
        "Export comprehensive evidence packages formatted for AICPA SOC 2 (CC8.1, CC7.1), ISO 27001 (A.12.1.2), HIPAA, and PCI-DSS in clean PDF, CSV, or raw JSON formats.",
      highlight: "Direct compatibility with Vanta, Drata, and Secureframe.",
    },
    {
      icon: DatabaseZap,
      tag: "Zero-Egress Architecture",
      title: "100% Atlassian Forge Native",
      description:
        "All data and compute run entirely inside Atlassian's protected cloud boundary. We never store or egress your Jira issue data to third-party databases or foreign servers.",
      highlight: "Passes internal InfoSec reviews on day one.",
    },
    {
      icon: Scale,
      tag: "Critical SOC 2 Control",
      title: "Separation of Duties Verification",
      description:
        "Strictly verifies that change authors cannot approve their own pull requests or tickets. Validates independent peer reviews and production release sign-offs.",
      highlight: "Prevents the #1 most common SOC 2 audit exception.",
    },
    {
      icon: AlertOctagon,
      tag: "Continuous Monitoring",
      title: "Drift & Rogue Merge Detection",
      description:
        "Continuously monitors production branches for unauthorized commits merged without Jira issue tracking or bypassed branch protection rules.",
      highlight: "Catches compliance drift in real time.",
    },
  ];

  return (
    <section id="features" className="relative py-24 sm:py-32 border-t border-slate-900 bg-slate-950">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="mx-auto max-w-3xl text-center">
          <div className="inline-flex items-center gap-1.5 rounded-full border border-emerald-500/30 bg-emerald-950/40 px-3 py-1 text-xs font-semibold text-emerald-400">
            <ShieldCheck className="h-3.5 w-3.5" />
            <span>Enterprise Compliance Engine</span>
          </div>
          <h2 className="mt-4 text-3xl font-extrabold tracking-tight text-white sm:text-4xl">
            Built for Engineers. Trusted by SOC 2 Auditors.
          </h2>
          <p className="mt-4 text-base text-slate-400 sm:text-lg">
            EvidenceLog turns Jira into your single source of truth for change management audits,
            eliminating endless spreadsheets and manual artifact hunting.
          </p>
        </div>

        {/* 3-Column Feature Grid */}
        <div className="mt-16 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {features.map((feature, idx) => {
            const Icon = feature.icon;
            return (
              <div
                key={idx}
                className="group relative rounded-2xl border border-slate-800/80 bg-slate-900/40 p-7 transition-all duration-300 hover:-translate-y-1 hover:border-emerald-500/40 hover:bg-slate-900/80 hover:shadow-xl hover:shadow-emerald-500/5 flex flex-col justify-between"
              >
                <div>
                  <div className="flex items-center justify-between">
                    <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-slate-950 border border-slate-800 text-emerald-400 transition-colors group-hover:border-emerald-500/50 group-hover:text-emerald-300">
                      <Icon className="h-5 w-5" />
                    </div>
                    <span className="rounded-full bg-slate-800/80 px-2.5 py-0.5 text-[11px] font-medium text-slate-300 border border-slate-700/60">
                      {feature.tag}
                    </span>
                  </div>

                  <h3 className="mt-5 text-lg font-bold text-white group-hover:text-emerald-300 transition-colors">
                    {feature.title}
                  </h3>

                  <p className="mt-2.5 text-sm text-slate-400 leading-relaxed">
                    {feature.description}
                  </p>
                </div>

                <div className="mt-6 pt-4 border-t border-slate-800/80 flex items-center gap-2 text-xs font-medium text-emerald-400">
                  <span className="h-1.5 w-1.5 rounded-full bg-emerald-400" />
                  <span>{feature.highlight}</span>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
