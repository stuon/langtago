"use client";

import { useState } from "react";
import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import Features from "@/components/Features";
import HowItWorks from "@/components/HowItWorks";
import SecurityArchitecture from "@/components/SecurityArchitecture";
import Pricing from "@/components/Pricing";
import FAQ from "@/components/FAQ";
import Footer from "@/components/Footer";
import AuditModal from "@/components/AuditModal";
import { ArrowRight, FileCheck } from "lucide-react";

export default function EvidenceLogPage() {
  const [isAuditModalOpen, setIsAuditModalOpen] = useState(false);

  return (
    <div className="relative min-h-screen bg-slate-950 font-sans selection:bg-emerald-500/30 selection:text-emerald-200">
      {/* Background Subtle Grid */}
      <div className="pointer-events-none absolute inset-0 grid-pattern opacity-40 radial-mask" />

      {/* Navigation */}
      <Navbar onOpenAuditModal={() => setIsAuditModalOpen(true)} isProductPage={true} />

      {/* Main Content Sections */}
      <main className="relative">
        {/* Hero Section with Value Proposition and Jira Panel Mockup */}
        <Hero onOpenAuditModal={() => setIsAuditModalOpen(true)} />

        {/* 3-Column Features Grid for Compliance & Audits */}
        <Features />

        {/* How it Works / Workflow */}
        <HowItWorks />

        {/* Security & Zero-Egress Architecture */}
        <SecurityArchitecture />

        {/* 3-Tier B2B Transparent Pricing */}
        <Pricing onOpenAuditModal={() => setIsAuditModalOpen(true)} />

        {/* Interactive FAQ */}
        <FAQ />

        {/* Pre-Footer CTA Banner */}
        <section className="relative py-20 border-t border-white/[0.06] bg-[#070a0e]">
          <div className="relative mx-auto max-w-4xl px-4 sm:px-6 lg:px-8 text-center space-y-6">
            <div className="inline-flex items-center gap-2 font-mono text-xs tracking-wider text-emerald-400 uppercase">
              <span className="h-1.5 w-1.5 rounded-full bg-emerald-400" />
              <span>Get Started in 2 Minutes</span>
            </div>

            <h2 className="text-3xl font-bold tracking-tight text-white sm:text-4xl">
              Eliminate manual audit screenshots today.
            </h2>

            <p className="mx-auto max-w-xl text-sm text-zinc-400 leading-relaxed">
              Install EvidenceLog into your Jira Cloud workspace. Free up to 10 users with instant Atlassian Forge sandboxing and zero external data retention.
            </p>

            <div className="pt-2 flex flex-col sm:flex-row items-center justify-center gap-3">
              <a
                href="https://marketplace.atlassian.com"
                target="_blank"
                rel="noopener noreferrer"
                className="flex w-full sm:w-auto items-center justify-center gap-2 rounded-xl bg-emerald-500 px-6 py-3 text-xs font-semibold text-zinc-950 hover:bg-emerald-400 transition-colors"
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

      {/* Footer */}
      <Footer />

      {/* Interactive Sample SOC 2 Audit Report Modal */}
      <AuditModal
        isOpen={isAuditModalOpen}
        onClose={() => setIsAuditModalOpen(false)}
      />
    </div>
  );
}
