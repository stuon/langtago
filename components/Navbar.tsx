"use client";

import { useState } from "react";
import Link from "next/link";
import { ShieldCheck, ArrowRight, Menu, X, FileText } from "lucide-react";

interface NavbarProps {
  onOpenAuditModal?: () => void;
  isProductPage?: boolean;
}

export default function Navbar({ onOpenAuditModal, isProductPage = true }: NavbarProps) {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const prefix = isProductPage ? "" : "/";

  return (
    <>
      {/* Contis-inspired Top Announcement Bar */}
      <div className="w-full bg-[#111013] text-white text-xs py-2 px-4 text-center font-medium border-b border-white/5">
        <p className="flex items-center justify-center gap-1.5 flex-wrap">
          <span>EvidenceLog for Jira Cloud: Continuous SOC 2 &amp; Change Compliance.</span>
          <a
            href="https://marketplace.atlassian.com"
            target="_blank"
            rel="noopener noreferrer"
            className="text-[#dbf1c3] font-semibold hover:underline inline-flex items-center gap-1"
          >
            <span>Install Free on Marketplace</span>
            <ArrowRight className="h-3 w-3" />
          </a>
        </p>
      </div>

      {/* Main Header / Navigation */}
      <header className="sticky top-0 z-40 w-full border-b border-slate-100 bg-white/95 backdrop-blur-md transition-all">
        <div className="mx-auto flex h-16 sm:h-18 max-w-7xl items-center justify-between px-4 sm:px-6 lg:px-8">
          {/* Brand Logo */}
          <div className="flex items-center gap-3 shrink-0">
            <Link href="/" className="group flex items-center gap-2.5 focus:outline-none">
              <div className="flex h-9 w-9 sm:h-10 sm:w-10 items-center justify-center rounded-xl bg-[#111013] text-[#dbf1c3] shadow-xs transition-transform group-hover:scale-105 shrink-0">
                <ShieldCheck className="h-5 w-5" />
              </div>
              <div className="flex items-center gap-2">
                <span className="text-base sm:text-lg font-bold tracking-tight text-[#111013] whitespace-nowrap">
                  Langtago
                </span>
                <span className="text-slate-300 font-light">/</span>
                <span className="text-[11px] sm:text-xs font-bold text-[#15803d] bg-[#dbf1c3]/70 rounded-md px-1.5 sm:px-2 py-0.5 whitespace-nowrap">
                  EvidenceLog
                </span>
              </div>
            </Link>
          </div>

          {/* Desktop Navigation Links */}
          <nav className="hidden lg:flex items-center gap-5 xl:gap-7 text-sm font-medium text-[#5c728e] whitespace-nowrap">
            <a href={`${prefix}#how-it-works`} className="hover:text-[#111013] transition-colors">
              How It Works
            </a>
            <a href={`${prefix}#features`} className="hover:text-[#111013] transition-colors">
              Features
            </a>
            <a href={`${prefix}#roi-calculator`} className="hover:text-[#111013] transition-colors">
              ROI Calculator
            </a>
            <Link href="/frameworks/soc2-cc81" className="hover:text-[#111013] transition-colors hidden xl:inline-block">
              SOC 2 Guide
            </Link>
            <Link href="/compare/manual-screenshots-vs-evidencelog" className="hover:text-[#111013] transition-colors hidden 2xl:inline-block">
              Compare
            </Link>
            <a href={`${prefix}#pricing`} className="hover:text-[#111013] transition-colors">
              Pricing
            </a>
            <a href={`${prefix}#faq`} className="hover:text-[#111013] transition-colors hidden xl:inline-block">
              FAQ
            </a>
            <a
              href="/docs/user-guide.html"
              target="_blank"
              rel="noopener noreferrer"
              className="text-[#15803d] font-semibold hover:text-[#111013] transition-colors hidden 2xl:inline-flex items-center gap-1"
            >
              <span>User Guide ↗</span>
            </a>
          </nav>

          {/* Desktop Actions */}
          <div className="hidden lg:flex items-center gap-2.5 xl:gap-3 shrink-0">
            {onOpenAuditModal && (
              <button
                type="button"
                onClick={onOpenAuditModal}
                className="hidden xl:inline-flex items-center gap-1.5 px-3 py-2 rounded-lg bg-white text-[#111013] border border-slate-200 hover:border-[#111013] font-semibold text-xs transition-all shadow-2xs cursor-pointer whitespace-nowrap"
              >
                <FileText className="h-3.5 w-3.5 text-[#15803d]" />
                <span>Sample Audit Report</span>
              </button>
            )}
            <a
              href="https://marketplace.atlassian.com"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 px-3.5 sm:px-4 py-2 rounded-lg bg-[#111013] text-white hover:bg-[#15803d] font-semibold text-xs transition-all shadow-xs cursor-pointer whitespace-nowrap"
            >
              <span>Install Free on Jira</span>
              <ArrowRight className="h-3.5 w-3.5" />
            </a>
          </div>

          {/* Mobile / Tablet menu toggle */}
          <div className="flex lg:hidden">
            <button
              type="button"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="rounded-lg p-2 text-slate-600 hover:bg-slate-100 hover:text-slate-900 cursor-pointer"
              aria-label="Toggle navigation menu"
            >
              {mobileMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
        </div>

        {/* Mobile menu dropdown */}
        {mobileMenuOpen && (
          <div className="border-b border-slate-200 bg-white px-5 pt-3 pb-6 lg:hidden text-sm space-y-3">
            <a
              href={`${prefix}#how-it-works`}
              onClick={() => setMobileMenuOpen(false)}
              className="block py-2 text-[#111013] font-semibold"
            >
              How It Works
            </a>
            <a
              href={`${prefix}#features`}
              onClick={() => setMobileMenuOpen(false)}
              className="block py-2 text-[#111013] font-semibold"
            >
              Features
            </a>
            <a
              href={`${prefix}#roi-calculator`}
              onClick={() => setMobileMenuOpen(false)}
              className="block py-2 text-[#111013] font-semibold"
            >
              ROI Calculator
            </a>
            <Link
              href="/frameworks/soc2-cc81"
              onClick={() => setMobileMenuOpen(false)}
              className="block py-2 text-[#111013] font-semibold"
            >
              SOC 2 CC8.1 Guide
            </Link>
            <Link
              href="/compare/manual-screenshots-vs-evidencelog"
              onClick={() => setMobileMenuOpen(false)}
              className="block py-2 text-[#111013] font-semibold"
            >
              Manual Screenshots vs. EvidenceLog
            </Link>
            <a
              href={`${prefix}#pricing`}
              onClick={() => setMobileMenuOpen(false)}
              className="block py-2 text-[#111013] font-semibold"
            >
              Pricing
            </a>
            <a
              href={`${prefix}#faq`}
              onClick={() => setMobileMenuOpen(false)}
              className="block py-2 text-[#111013] font-semibold"
            >
              FAQ
            </a>
            <a
              href="/docs/user-guide.html"
              target="_blank"
              rel="noopener noreferrer"
              onClick={() => setMobileMenuOpen(false)}
              className="block py-2 text-[#15803d] font-bold"
            >
              User Guide &amp; Docs ↗
            </a>
            <div className="pt-3 border-t border-slate-100 flex flex-col gap-2.5">
              {onOpenAuditModal && (
                <button
                  type="button"
                  onClick={() => {
                    setMobileMenuOpen(false);
                    onOpenAuditModal();
                  }}
                  className="w-full inline-flex items-center justify-center gap-2 py-2.5 px-4 rounded-lg bg-white border border-slate-200 text-[#111013] font-semibold text-xs cursor-pointer"
                >
                  <FileText className="h-4 w-4 text-[#15803d]" />
                  <span>Sample Audit Report</span>
                </button>
              )}
              <a
                href="https://marketplace.atlassian.com"
                target="_blank"
                rel="noopener noreferrer"
                className="w-full inline-flex items-center justify-center gap-2 py-2.5 px-4 rounded-lg bg-[#111013] text-white hover:bg-[#15803d] font-semibold text-xs cursor-pointer"
              >
                <span>Install Free on Jira</span>
                <ArrowRight className="h-4 w-4" />
              </a>
            </div>
          </div>
        )}
      </header>
    </>
  );
}
