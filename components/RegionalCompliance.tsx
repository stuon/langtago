"use client";

import Link from "next/link";
import { MapPin, ArrowRight, Lock, Globe2 } from "lucide-react";

export default function RegionalCompliance() {
  const regions = [
    {
      flag: "🇺🇸",
      region: "United States & Global",
      standard: "SOC 2 Type II (CC8.1) & HIPAA",
      regulator: "AICPA / HHS",
      dataResidency: "AWS US (us-east-1 / us-west-2)",
      description: "Automated segregation of duties (Author ≠ Approver) and change evidence gathering for annual SOC 2 examinations.",
      link: "/frameworks/soc2-cc81",
      linkText: "SOC 2 Guide →",
    },
    {
      flag: "🇦🇺",
      region: "Australia & APAC",
      standard: "APRA CPS 234 & Essential Eight",
      regulator: "APRA / ACSC",
      dataResidency: "AWS Sydney (ap-southeast-2)",
      description: "Satisfies CPS 234 Paragraphs 23–27 for banks, super funds, and insurers with 100% Australian data residency.",
      link: "/frameworks/apra-cps-234",
      linkText: "APRA CPS 234 Guide →",
    },
    {
      flag: "🇪🇺",
      region: "European Union",
      standard: "DORA (EU 2022/2554) & ISO 27001",
      regulator: "EBA / EIOPA / ESMA (NCAs)",
      dataResidency: "AWS Frankfurt (eu-central-1) & Dublin",
      description: "Mandatory ICT change governance, operational testing, and rollback plans under Articles 9 & 11 with zero data egress.",
      link: "/frameworks/dora-compliance",
      linkText: "DORA Guide →",
    },
    {
      flag: "🇬🇧",
      region: "United Kingdom",
      standard: "FCA / PRA Operational Resilience",
      regulator: "FCA & Bank of England",
      dataResidency: "AWS London (eu-west-2)",
      description: "Prevent change-induced system outages and fulfill SS1/21 change control audit trails directly inside Jira Cloud.",
      link: "/frameworks/dora-compliance",
      linkText: "UK FCA Guide →",
    },
    {
      flag: "🇿🇦",
      region: "South Africa & Africa",
      standard: "POPIA §19 & SARB Cyber Guidelines",
      regulator: "Information Regulator / SARB",
      dataResidency: "Atlassian In-Tenant KVS",
      description: "Enforces technical safeguards on software integrity and change traceability for JSE-listed entities and fintechs.",
      link: "/frameworks/iso-27001-a832",
      linkText: "ISO 27001 Guide →",
    },
    {
      flag: "🌐",
      region: "International",
      standard: "ISO/IEC 27001:2022 (Control A.8.32)",
      regulator: "ISO / IEC Certification Bodies",
      dataResidency: "Local Jira Tenant Boundary",
      description: "Annex A change management, peer review verification, and automated rollback fallback templates for global teams.",
      link: "/frameworks/iso-27001-a832",
      linkText: "ISO A.8.32 Guide →",
    },
  ];

  return (
    <section className="py-20 bg-white border-t border-slate-100">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Section Heading */}
        <div className="max-w-3xl mx-auto text-center mb-12">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#dbf1c3]/70 border border-[#b8e29a] text-[#15803d] font-bold text-xs uppercase tracking-wider mb-3 font-heading">
            <Globe2 className="h-3.5 w-3.5 text-[#15803d]" />
            <span>GLOBAL COMPLIANCE &amp; IN-TENANT DATA RESIDENCY</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-bold text-[#111013] font-heading leading-tight">
            One automated engine. Every major regional framework.
          </h2>
          <p className="text-sm sm:text-base text-[#5c728e] mt-3 leading-relaxed">
            Whether your auditor inspects for US SOC 2, Australian APRA CPS 234, European DORA, or UK FCA resilience, the underlying engineering requirements are identical: <span className="font-semibold text-[#111013]">peer review, test verification, and tamper-evident logs</span>.
          </p>
        </div>

        {/* 6 Regional Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
          {regions.map((item, idx) => (
            <div
              key={idx}
              className="rounded-2xl border border-slate-200/90 bg-white p-6 shadow-xs hover:border-[#15803d]/40 hover:shadow-md transition-all flex flex-col justify-between"
            >
              <div>
                <div className="flex items-center justify-between gap-2 pb-3 mb-3 border-b border-slate-100">
                  <div className="flex items-center gap-2">
                    <span className="text-2xl">{item.flag}</span>
                    <span className="text-xs font-bold text-[#111013] font-heading uppercase tracking-wider">
                      {item.region}
                    </span>
                  </div>
                  <span className="text-[10px] font-bold font-mono px-2 py-0.5 rounded bg-emerald-50 text-[#15803d] border border-emerald-200">
                    {item.regulator}
                  </span>
                </div>

                <h3 className="text-base font-bold text-[#111013] mb-1 font-heading">
                  {item.standard}
                </h3>

                <p className="text-xs text-[#5c728e] leading-relaxed mb-4">
                  {item.description}
                </p>
              </div>

              <div className="pt-3 border-t border-slate-100 flex items-center justify-between text-xs">
                <div className="flex items-center gap-1.5 text-slate-500 text-[11px]">
                  <MapPin className="h-3 w-3 text-[#15803d] shrink-0" />
                  <span className="font-mono truncate max-w-[130px]">{item.dataResidency}</span>
                </div>
                <Link
                  href={item.link}
                  className="font-bold text-[#15803d] hover:text-[#111013] transition-colors inline-flex items-center gap-1 whitespace-nowrap"
                >
                  <span>{item.linkText}</span>
                </Link>
              </div>
            </div>
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
