"use client";

import { useState } from "react";
import GatekeeperDemo from "./GatekeeperDemo";
import AuditHubMockup from "./AuditHubMockup";
import OfflineVerifierTool from "./OfflineVerifierTool";
import RegulatoryMatrix from "./RegulatoryMatrix";
import { ShieldAlert, BarChart3, Lock, FileSpreadsheet } from "lucide-react";

interface ProductTourProps {
  onOpenAuditModal: () => void;
}

export default function ProductTour({ onOpenAuditModal }: ProductTourProps) {
  const [activeTab, setActiveTab] = useState<"gatekeeper" | "audithub" | "verifier" | "matrix">("gatekeeper");

  const tabs = [
    {
      id: "gatekeeper",
      label: "Workflow Gatekeeper",
      icon: ShieldAlert,
      tagline: "Preventive Control",
    },
    {
      id: "audithub",
      label: "Executive Audit Hub",
      icon: BarChart3,
      tagline: "Sprint Readiness",
    },
    {
      id: "verifier",
      label: "Zero-Trust Verifier",
      icon: Lock,
      tagline: "Cryptographic Proof",
    },
    {
      id: "matrix",
      label: "Regulatory Crosswalk",
      icon: FileSpreadsheet,
      tagline: "Multi-Standard Matrix",
    },
  ] as const;

  return (
    <section id="interactive-lab" className="relative py-20 border-t border-white/[0.06] bg-[#070a0f]">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="mx-auto max-w-2xl text-center space-y-2 mb-8">
          <div className="inline-flex items-center gap-2 font-mono text-[11px] tracking-wider text-emerald-400 uppercase">
            <span className="h-1.5 w-1.5 rounded-full bg-emerald-400" />
            <span>Interactive Product Tour</span>
          </div>
          <h2 className="text-2xl font-bold tracking-tight text-white sm:text-3xl">
            Test the live compliance engine.
          </h2>
          <p className="text-xs sm:text-sm text-zinc-400">
            Select a module below to test the Jira transition blocker, explore the project dashboard, verify cryptographic hashes, or view framework mappings.
          </p>
        </div>

        {/* Tab Switcher */}
        <div className="flex justify-center mb-8">
          <div className="inline-flex flex-wrap items-center justify-center gap-1.5 rounded-2xl border border-white/[0.08] bg-[#0b0e15] p-1.5 max-w-full">
            {tabs.map((tab) => {
              const Icon = tab.icon;
              const isActive = activeTab === tab.id;
              return (
                <button
                  key={tab.id}
                  type="button"
                  onClick={() => setActiveTab(tab.id)}
                  className={`flex items-center gap-2 rounded-xl px-4 py-2 text-xs font-semibold transition-all ${
                    isActive
                      ? "bg-emerald-500 text-zinc-950 shadow-md shadow-emerald-500/20"
                      : "text-zinc-400 hover:text-white hover:bg-white/[0.04]"
                  }`}
                >
                  <Icon className={`h-4 w-4 ${isActive ? "text-zinc-950" : "text-emerald-400"}`} />
                  <span>{tab.label}</span>
                </button>
              );
            })}
          </div>
        </div>

        {/* Active Tool View */}
        <div className="relative">
          {activeTab === "gatekeeper" && (
            <div className="transition-opacity duration-200">
              <GatekeeperDemo embedded={true} />
            </div>
          )}

          {activeTab === "audithub" && (
            <div className="transition-opacity duration-200">
              <AuditHubMockup onOpenAuditModal={onOpenAuditModal} />
            </div>
          )}

          {activeTab === "verifier" && (
            <div className="transition-opacity duration-200">
              <OfflineVerifierTool embedded={true} />
            </div>
          )}

          {activeTab === "matrix" && (
            <div className="transition-opacity duration-200">
              <RegulatoryMatrix embedded={true} />
            </div>
          )}
        </div>
      </div>
    </section>
  );
}
