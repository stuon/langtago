"use client";

import { useState } from "react";
import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import ProblemSolution from "@/components/ProblemSolution";
import HowItWorks from "@/components/HowItWorks";
import Features from "@/components/Features";
import ProductTour from "@/components/ProductTour";
import SecurityArchitecture from "@/components/SecurityArchitecture";
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

      {/* Main Content Flow */}
      <main className="relative">
        {/* 1. Hero: Core Value Proposition & Interactive Live Jira Panel Mockup */}
        <Hero onOpenAuditModal={() => setIsAuditModalOpen(true)} />

        {/* 2. Before vs After: The Audit Scramble vs EvidenceLog */}
        <ProblemSolution />

        {/* 3. The Live Magic: Interactive Product Tour */}
        <ProductTour onOpenAuditModal={() => setIsAuditModalOpen(true)} />

        {/* 4. Visual 4-Step Pipeline */}
        <HowItWorks />

        {/* 5. The 6 Compliance Pillars Bento Grid */}
        <Features />

        {/* 6. Security & Zero-Egress Forge Architecture */}
        <SecurityArchitecture />

        {/* 7. 3-Tier B2B Transparent Pricing */}
        <Pricing onOpenAuditModal={() => setIsAuditModalOpen(true)} />

        {/* 8. Interactive FAQ */}
        <FAQ />

        {/* 9. Pre-Footer Call to Action */}
        <section className="relative py-16 border-t border-white/[0.06] bg-[#070a0e]">
          <div className="relative mx-auto max-w-3xl px-4 sm:px-6 lg:px-8 text-center space-y-4">
            <div className="inline-flex items-center gap-2 font-mono text-[11px] tracking-wider text-emerald-400 uppercase">
              <span className="h-1.5 w-1.5 rounded-full bg-emerald-400" />
              <span>Get Started in 2 Minutes</span>
            </div>

            <h2 className="text-2xl sm:text-3xl font-bold tracking-tight text-white">
              Eliminate manual audit screenshots today.
            </h2>

            <p className="mx-auto max-w-lg text-xs sm:text-sm text-zinc-400">
              Install EvidenceLog into your Jira Cloud workspace. Free up to 10 users with instant Atlassian Forge sandboxing and zero external data retention.
            </p>

            <div className="pt-2 flex flex-col sm:flex-row items-center justify-center gap-3">
              <a
                href="https://marketplace.atlassian.com"
                target="_blank"
                rel="noopener noreferrer"
                className="flex w-full sm:w-auto items-center justify-center gap-2 rounded-xl bg-emerald-500 px-5 py-2.5 text-xs font-semibold text-zinc-950 hover:bg-emerald-400 transition-colors shadow-md shadow-emerald-500/20"
              >
                <span>Get EvidenceLog on Marketplace</span>
                <ArrowRight className="h-3.5 w-3.5" />
              </a>

              <button
                type="button"
                onClick={() => setIsAuditModalOpen(true)}
                className="flex w-full sm:w-auto items-center justify-center gap-2 rounded-xl border border-white/[0.1] bg-zinc-900 px-4 py-2.5 text-xs font-semibold text-zinc-200 hover:bg-zinc-800 hover:text-white transition-colors"
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

      {/* 7-Tab Comprehensive Sample Audit Dossier Modal */}
      <AuditModal
        isOpen={isAuditModalOpen}
        onClose={() => setIsAuditModalOpen(false)}
      />
    </div>
  );
}
