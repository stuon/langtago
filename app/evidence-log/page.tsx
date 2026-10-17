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
import { Sparkles, ArrowRight, ShieldCheck, FileCheck } from "lucide-react";

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
        <section className="relative py-20 border-t border-slate-900 bg-gradient-to-b from-slate-950 via-slate-900/60 to-slate-950 overflow-hidden">
          <div className="pointer-events-none absolute inset-0 flex items-center justify-center">
            <div className="h-[300px] w-[500px] rounded-full bg-emerald-500/10 blur-[100px]" />
          </div>

          <div className="relative mx-auto max-w-5xl px-4 sm:px-6 lg:px-8 text-center">
            <div className="inline-flex items-center gap-1.5 rounded-full border border-emerald-500/30 bg-emerald-950/40 px-3.5 py-1 text-xs font-semibold text-emerald-400">
              <ShieldCheck className="h-4 w-4" />
              <span>Free 30-Day Marketplace Trial</span>
            </div>

            <h2 className="mt-5 text-3xl font-extrabold tracking-tight text-white sm:text-5xl">
              Ready to eliminate manual audit screenshots?
            </h2>

            <p className="mx-auto mt-4 max-w-2xl text-base text-slate-400">
              Install EvidenceLog into your Jira Cloud workspace in under 2 minutes. Free up to 10 users, with zero external data egress.
            </p>

            <div className="mt-8 flex flex-col sm:flex-row items-center justify-center gap-4">
              <a
                href="https://marketplace.atlassian.com"
                target="_blank"
                rel="noopener noreferrer"
                className="group flex w-full sm:w-auto items-center justify-center gap-2 rounded-xl bg-gradient-to-r from-emerald-500 to-teal-400 px-6 py-3.5 text-sm font-semibold text-slate-950 shadow-lg shadow-emerald-500/25 hover:brightness-110 transition-all"
              >
                <Sparkles className="h-4 w-4 text-slate-950" />
                <span>Get EvidenceLog on Atlassian Marketplace</span>
                <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5" />
              </a>

              <button
                onClick={() => setIsAuditModalOpen(true)}
                className="flex w-full sm:w-auto items-center justify-center gap-2 rounded-xl border border-slate-700 bg-slate-900 px-6 py-3.5 text-sm font-semibold text-slate-200 hover:bg-slate-800 hover:text-white transition-all"
              >
                <FileCheck className="h-4 w-4 text-emerald-400" />
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
