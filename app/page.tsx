"use client";

import { useState } from "react";
import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import ProblemSolution from "@/components/ProblemSolution";
import FeatureSpotlights from "@/components/FeatureSpotlights";
import Pricing from "@/components/Pricing";
import FAQ from "@/components/FAQ";
import Footer from "@/components/Footer";
import AuditModal from "@/components/AuditModal";
import { ArrowRight, FileCheck } from "lucide-react";

export default function HomePage() {
  const [isAuditModalOpen, setIsAuditModalOpen] = useState(false);

  return (
    <div className="relative min-h-screen bg-slate-950 font-sans selection:bg-emerald-500/30 selection:text-emerald-200">
      {/* Background Subtle Grid Pattern */}
      <div className="pointer-events-none absolute inset-0 grid-pattern opacity-40 radial-mask" />

      {/* Main Header / Navigation */}
      <Navbar onOpenAuditModal={() => setIsAuditModalOpen(true)} isProductPage={true} />

      {/* Main Content Flow: Clean 4-Beat B2B Story */}
      <main className="relative">
        {/* Beat 1: The Hook & Live Jira Mockup */}
        <Hero onOpenAuditModal={() => setIsAuditModalOpen(true)} />

        {/* Beat 2: The Acute Pain (Manual Scramble vs Continuous Proof) */}
        <ProblemSolution />

        {/* Beat 3: The 3 Core Capabilities (Gatekeeper, Zero-Egress, Audit Hub) */}
        <FeatureSpotlights onOpenAuditModal={() => setIsAuditModalOpen(true)} />

        {/* Beat 4: Transparent Marketplace Pricing */}
        <Pricing onOpenAuditModal={() => setIsAuditModalOpen(true)} />

        {/* Beat 5: Handling Objections */}
        <FAQ />

        {/* Final Conversion CTA */}
        <section className="relative py-20 border-t border-white/[0.06] bg-[#070a0e]">
          <div className="relative mx-auto max-w-3xl px-4 sm:px-6 lg:px-8 text-center space-y-4">
            <div className="inline-flex items-center gap-2 font-mono text-[11px] tracking-wider text-emerald-400 uppercase">
              <span className="h-1.5 w-1.5 rounded-full bg-emerald-400" />
              <span>Get Started in 2 Minutes</span>
            </div>

            <h2 className="text-2xl sm:text-4xl font-bold tracking-tight text-white">
              Eliminate manual audit screenshots today.
            </h2>

            <p className="mx-auto max-w-lg text-xs sm:text-sm text-zinc-400">
              Install EvidenceLog into your Jira Cloud workspace. Free up to 10 users with instant Atlassian Forge sandboxing and zero external data retention.
            </p>

            <div className="pt-3 flex flex-col sm:flex-row items-center justify-center gap-3">
              <a
                href="https://marketplace.atlassian.com"
                target="_blank"
                rel="noopener noreferrer"
                className="flex w-full sm:w-auto items-center justify-center gap-2 rounded-xl bg-emerald-500 px-6 py-3 text-xs font-semibold text-zinc-950 hover:bg-emerald-400 transition-colors shadow-lg shadow-emerald-500/20"
              >
                <span>Get EvidenceLog on Marketplace</span>
                <ArrowRight className="h-3.5 w-3.5" />
              </a>

              <button
                type="button"
                onClick={() => setIsAuditModalOpen(true)}
                className="flex w-full sm:w-auto items-center justify-center gap-2 rounded-xl border border-white/[0.1] bg-zinc-900 px-5 py-3 text-xs font-semibold text-zinc-200 hover:bg-zinc-800 hover:text-white transition-colors"
              >
                <FileCheck className="h-3.5 w-3.5 text-emerald-400" />
                <span>View Sample SOC 2 Output</span>
              </button>
            </div>
          </div>
        </section>
      </main>

      {/* Global Footer */}
      <Footer />

      {/* Interactive Sample Audit Modal */}
      <AuditModal isOpen={isAuditModalOpen} onClose={() => setIsAuditModalOpen(false)} />
    </div>
  );
}
