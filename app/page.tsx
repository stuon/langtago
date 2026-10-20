"use client";

import { useState } from "react";
import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import BrandStrip from "@/components/BrandStrip";
import BentoGrid from "@/components/BentoGrid";
import HowItWorks from "@/components/HowItWorks";
import TeamShowcase from "@/components/TeamShowcase";
import Pricing from "@/components/Pricing";
import FAQ from "@/components/FAQ";
import Footer from "@/components/Footer";
import AuditModal from "@/components/AuditModal";

export default function HomePage() {
  const [isAuditModalOpen, setIsAuditModalOpen] = useState(false);

  return (
    <div className="relative min-h-screen bg-white font-sans text-[#5c728e] selection:bg-[#ff8565]/20 selection:text-[#111013]">
      {/* Contis-Style Header & Navigation */}
      <Navbar onOpenAuditModal={() => setIsAuditModalOpen(true)} isProductPage={true} />

      {/* Main Flow: Contis Simplified Rhythm */}
      <main className="relative">
        {/* Hero Banner with Clean Jira Preview */}
        <Hero onOpenAuditModal={() => setIsAuditModalOpen(true)} />

        {/* Brand Integration Strip */}
        <BrandStrip />

        {/* Core Capabilities: Contis Main Service Dark Curved Block */}
        <BentoGrid onOpenAuditModal={() => setIsAuditModalOpen(true)} />

        {/* Working Process: 2-Column Numbered Stepper & Metric Counter Strip */}
        <HowItWorks onOpenAuditModal={() => setIsAuditModalOpen(true)} />

        {/* Feature Spotlights: Separation of Duties & Sandboxing */}
        <TeamShowcase onOpenAuditModal={() => setIsAuditModalOpen(true)} />

        {/* Transparent 3-Tier Pricing */}
        <Pricing onOpenAuditModal={() => setIsAuditModalOpen(true)} />

        {/* Frequently Asked Questions */}
        <FAQ />
      </main>

      {/* Global Footer with Unlock CTA Banner */}
      <Footer />

      {/* Interactive Sample Audit Modal */}
      <AuditModal isOpen={isAuditModalOpen} onClose={() => setIsAuditModalOpen(false)} />
    </div>
  );
}
