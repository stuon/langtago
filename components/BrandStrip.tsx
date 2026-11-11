"use client";

import Link from "next/link";
import { ShieldCheck, ArrowUpRight } from "lucide-react";

export default function BrandStrip() {
  const tools = [
    { name: "Atlassian Jira", note: "Native Forge App", highlight: true },
    { name: "GitHub", note: "Actions & PR Checks" },
    { name: "GitLab", note: "Merge Requests & CI" },
    { name: "Bitbucket", note: "Pipelines & Approvals" },
    { name: "Vanta", note: "Instant GRC Sync", href: "/integrations/vanta-drata" },
    { name: "Drata", note: "Automated Evidence", href: "/integrations/vanta-drata" },
  ];

  return (
    <section className="bg-gradient-to-r from-[#dbf1c3] to-[#dce7e3] rounded-t-[40px] pt-16 pb-12">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-8">
          <h6 className="text-base sm:text-lg font-bold text-[#111013] font-heading">
            Built natively for <span className="text-[#15803d]">Atlassian Jira Cloud</span> &amp; your modern developer stack
          </h6>
        </div>

        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-4 items-center">
          {tools.map((tool, idx) => {
            const cardContent = (
              <div
                className={`rounded-2xl bg-white/90 backdrop-blur-xs border p-4 text-center transition-all hover:bg-white hover:shadow-md ${
                  tool.highlight
                    ? "border-[#15803d]/40 shadow-xs"
                    : "border-white/60"
                } ${tool.href ? "group cursor-pointer hover:border-[#15803d]/50" : ""}`}
              >
                <div className="text-sm font-bold text-[#111013] font-heading flex items-center justify-center gap-1.5">
                  {tool.highlight && <ShieldCheck className="h-4 w-4 text-[#15803d]" />}
                  <span>{tool.name}</span>
                  {tool.href && (
                    <ArrowUpRight className="h-3 w-3 text-[#15803d] opacity-0 group-hover:opacity-100 transition-opacity" />
                  )}
                </div>
                <div className="text-[11px] text-[#5c728e] mt-1 font-medium">{tool.note}</div>
              </div>
            );

            return tool.href ? (
              <Link key={idx} href={tool.href} className="block">
                {cardContent}
              </Link>
            ) : (
              <div key={idx}>{cardContent}</div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
