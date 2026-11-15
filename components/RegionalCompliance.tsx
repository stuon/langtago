"use client";

import Link from "next/link";
import { MapPin, ArrowRight, Lock, Globe2 } from "lucide-react";

export default function RegionalCompliance() {
  const frameworks = [
    {
      code: "US",
      name: "SOC 2 Type II",
      control: "Criterion CC8.1 & CC6.8",
      summary: "Enforce Author ≠ Approver segregation of duties and lock automated change evidence for annual Big 4 audits.",
      link: "/frameworks/soc2-cc81",
    },
    {
      code: "GLOBAL",
      name: "ISO/IEC 27001:2022",
      control: "Annex Control A.8.32",
      summary: "Automate change management criteria, peer review verification, and rollback fallback procedures in-situ.",
      link: "/frameworks/iso-27001-a832",
    },
    {
      code: "AU",
      name: "APRA CPS 234",
      control: "Information Security Controls",
      summary: "100% Sydney data residency (ap-southeast-2) with zero data egress for Australian banks and fintechs.",
      link: "/frameworks/apra-cps-234",
    },
    {
      code: "EU",
      name: "DORA & UK FCA",
      control: "EU 2022/2554 & SS1/21",
      summary: "Satisfy ICT operational resilience testing, rollback plans, and change audit trails directly inside Jira Cloud.",
      link: "/frameworks/dora-compliance",
    },
  ];

  return (
    <section className="py-16 sm:py-20 bg-white border-t border-slate-100">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Section Heading */}
        <div className="max-w-3xl mx-auto text-center mb-10">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#dbf1c3]/70 border border-[#b8e29a] text-[#15803d] font-bold text-xs uppercase tracking-wider mb-3 font-heading">
            <Globe2 className="h-3.5 w-3.5 text-[#15803d]" />
            <span>GLOBAL REGULATORY COMPLIANCE</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-bold text-[#111013] font-heading leading-tight">
            One automated engine. Every major audit standard.
          </h2>
          <p className="text-sm sm:text-base text-[#5c728e] mt-2.5 leading-relaxed">
            Whether your auditor inspects for US SOC 2, ISO 27001, APRA CPS 234, or European DORA, the underlying engineering requirements are identical: <span className="font-semibold text-[#111013]">peer review, test verification, and tamper-evident records</span>.
          </p>
        </div>

        {/* 4 Sleek Framework Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 mb-10">
          {frameworks.map((item, idx) => (
            <Link
              key={idx}
              href={item.link}
              className="group rounded-xl border border-slate-200/90 bg-white p-5 shadow-xs hover:border-[#15803d]/40 hover:shadow-md transition-all flex flex-col justify-between"
            >
              <div>
                <div className="flex items-center justify-between gap-2 pb-2.5 mb-2.5 border-b border-slate-100">
                  <span className="text-[10px] font-extrabold font-mono px-2 py-0.5 rounded bg-slate-900 text-[#dbf1c3] uppercase tracking-wider">
                    [{item.code}]
                  </span>
                  <span className="text-[11px] font-mono text-[#5c728e]">
                    {item.control}
                  </span>
                </div>

                <h3 className="text-base font-bold text-[#111013] mb-1.5 font-heading group-hover:text-[#15803d] transition-colors">
                  {item.name}
                </h3>

                <p className="text-xs text-[#5c728e] leading-relaxed mb-4">
                  {item.summary}
                </p>
              </div>

              <div className="pt-2.5 border-t border-slate-100 flex items-center justify-between text-xs font-bold text-[#15803d] group-hover:text-[#111013] transition-colors">
                <span>View Framework Guide</span>
                <ArrowRight className="h-3.5 w-3.5 transition-transform group-hover:translate-x-0.5" />
              </div>
            </Link>
          ))}
        </div>

        {/* In-Tenant Data Residency Guarantee Banner */}
        <div className="rounded-2xl bg-slate-900 text-white p-6 sm:p-8 flex flex-col lg:flex-row items-center justify-between gap-6 shadow-xl">
          <div className="space-y-2 text-center lg:text-left">
            <div className="inline-flex items-center gap-2 px-2.5 py-0.5 rounded bg-emerald-500/20 text-emerald-300 text-xs font-mono font-bold">
              <Lock className="h-3.5 w-3.5 text-emerald-300" />
              <span>ATLASSIAN FORGE IN-TENANT GUARANTEE</span>
            </div>
            <h3 className="text-xl sm:text-2xl font-bold font-heading text-white">
              Zero Cross-Border Transfer. Data never leaves your Jira Cloud region.
            </h3>
            <p className="text-xs sm:text-sm text-slate-300 max-w-2xl leading-relaxed">
              EvidenceLog executes strictly within Atlassian microVMs and stores audit logs in your Jira tenant&apos;s encrypted Key-Value Storage (@forge/kvs). No foreign databases. No external telemetry. No material outsourcing delays.
            </p>
          </div>

          <div className="shrink-0">
            <Link
              href="/security"
              className="inline-flex items-center justify-center gap-2 px-5 py-3 rounded-xl bg-[#dbf1c3] text-[#111013] hover:bg-white font-bold text-xs transition-all shadow-md cursor-pointer whitespace-nowrap"
            >
              <span>Explore Security Architecture</span>
              <ArrowRight className="h-4 w-4" />
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
