"use client";

import { useState } from "react";
import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import HowItWorks from "@/components/HowItWorks";
import BentoGrid from "@/components/BentoGrid";
import TeamShowcase from "@/components/TeamShowcase";
import Pricing from "@/components/Pricing";
import FAQ from "@/components/FAQ";
import Footer from "@/components/Footer";
import AuditModal from "@/components/AuditModal";
import { ArrowRight, FileCheck } from "lucide-react";

export default function HomePage() {
  const [isAuditModalOpen, setIsAuditModalOpen] = useState(false);

  return (
    <div className="relative min-h-screen bg-slate-50 font-sans text-slate-900 selection:bg-emerald-100 selection:text-emerald-900">
      {/* Main Header / Navigation */}
      <Navbar onOpenAuditModal={() => setIsAuditModalOpen(true)} isProductPage={true} />

      {/* Main Content Flow: Clean, Breathable Modern B2B Story */}
      <main className="relative">
        {/* Step 1: The Hook & Live Jira Mockup */}
        <Hero onOpenAuditModal={() => setIsAuditModalOpen(true)} />

        {/* Step 2: 3-Step "How It Works" Narrative with 3D Pipeline Diagram */}
        <HowItWorks onOpenAuditModal={() => setIsAuditModalOpen(true)} />

        {/* Step 3: Core Capabilities & Controls with 3D Diagrams & Visuals */}
        <BentoGrid onOpenAuditModal={() => setIsAuditModalOpen(true)} />

        {/* Step 4: Engineering Velocity & Stock Photo Showcase */}
        <TeamShowcase onOpenAuditModal={() => setIsAuditModalOpen(true)} />

        {/* Step 5: Easy Transparent Pricing */}
        <Pricing onOpenAuditModal={() => setIsAuditModalOpen(true)} />

        {/* Step 5: Essential FAQ */}
        <FAQ />

        {/* Final Conversion Callout */}
        <section className="relative py-16 sm:py-20 bg-white border-t border-slate-200/80">
          <div className="relative mx-auto max-w-4xl px-4 sm:px-6 lg:px-8 text-center space-y-5">
            <div className="inline-flex items-center gap-2 rounded-full bg-emerald-50 border border-emerald-200 px-4 py-1 text-xs font-bold text-emerald-800 uppercase tracking-wider">
              <span>Install in 2 Minutes</span>
            </div>

            <h2 className="text-3xl sm:text-5xl font-extrabold tracking-tight text-slate-900">
              Eliminate manual audit screenshots today.
            </h2>

            <p className="mx-auto max-w-xl text-base text-slate-600 leading-relaxed">
              Install EvidenceLog into your Jira Cloud workspace. Free forever for up to 10 users with instant Atlassian Forge sandboxing and zero external data retention.
            </p>

            <div className="pt-3 flex flex-col sm:flex-row items-center justify-center gap-3.5">
              <a
                href="https://marketplace.atlassian.com"
                target="_blank"
                rel="noopener noreferrer"
                className="flex w-full sm:w-auto items-center justify-center gap-2 rounded-2xl bg-emerald-600 px-7 py-3.5 text-sm font-bold text-white hover:bg-emerald-500 transition-all shadow-lg shadow-emerald-600/25"
              >
                <span>Get EvidenceLog on Atlassian Marketplace</span>
                <ArrowRight className="h-4 w-4" />
              </a>

              <button
                type="button"
                onClick={() => setIsAuditModalOpen(true)}
                className="flex w-full sm:w-auto items-center justify-center gap-2 rounded-2xl border border-slate-200 bg-white px-6 py-3.5 text-sm font-semibold text-slate-700 hover:bg-slate-50 hover:text-slate-950 transition-all shadow-xs"
              >
                <FileCheck className="h-4 w-4 text-emerald-600" />
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
