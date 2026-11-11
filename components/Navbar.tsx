"use client";

import { useState, useRef, useEffect } from "react";
import Link from "next/link";
import { ShieldCheck, ArrowRight, Menu, X, FileText, ChevronDown, BookOpen, Shield, HelpCircle, GitCompare, CheckCircle2, RefreshCw, FileCheck2, Landmark, Globe2 } from "lucide-react";

interface NavbarProps {
  onOpenAuditModal?: () => void;
  isProductPage?: boolean;
}

export default function Navbar({ onOpenAuditModal, isProductPage = true }: NavbarProps) {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [resourcesOpen, setResourcesOpen] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);
  const prefix = isProductPage ? "" : "/";

  // Close dropdown when clicking outside
  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
        setResourcesOpen(false);
      }
    }
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

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

          {/* Desktop Navigation Links (4 core items + Resources dropdown) */}
          <nav className="hidden lg:flex items-center gap-6 xl:gap-8 text-sm font-medium text-[#5c728e] whitespace-nowrap">
            <a href={`${prefix}#how-it-works`} className="hover:text-[#111013] transition-colors">
              How It Works
            </a>
            <a href={`${prefix}#features`} className="hover:text-[#111013] transition-colors">
              Features
            </a>
            <a href={`${prefix}#roi-calculator`} className="hover:text-[#111013] transition-colors">
              ROI Calculator
            </a>
            <a href={`${prefix}#pricing`} className="hover:text-[#111013] transition-colors">
              Pricing
            </a>
            <Link href="/faq" className="hover:text-[#111013] transition-colors">
              FAQ
            </Link>

            {/* Resources Dropdown */}
            <div className="relative" ref={dropdownRef}>
              <button
                type="button"
                onClick={() => setResourcesOpen(!resourcesOpen)}
                onMouseEnter={() => setResourcesOpen(true)}
                className="flex items-center gap-1 hover:text-[#111013] transition-colors cursor-pointer focus:outline-none"
              >
                <span>Resources</span>
                <ChevronDown className={`h-4 w-4 transition-transform duration-200 ${resourcesOpen ? "rotate-180 text-[#111013]" : "text-slate-400"}`} />
              </button>

              {resourcesOpen && (
                <div
                  onMouseLeave={() => setResourcesOpen(false)}
                  className="absolute top-full left-1/2 -translate-x-1/2 mt-3 w-80 rounded-2xl bg-white border border-slate-200/90 shadow-2xl p-2.5 z-50 animate-in fade-in slide-in-from-top-2 duration-150"
                >
                  <div className="space-y-1">
                    <Link
                      href="/guides"
                      onClick={() => setResourcesOpen(false)}
                      className="flex items-start gap-3 p-2.5 rounded-xl hover:bg-slate-50 transition-colors group"
                    >
                      <div className="p-2 rounded-lg bg-emerald-50 text-[#15803d] group-hover:bg-[#15803d] group-hover:text-white transition-colors shrink-0">
                        <BookOpen className="h-4 w-4" />
                      </div>
                      <div>
                        <div className="text-xs font-bold text-[#111013]">Engineering Guides</div>
                        <div className="text-[11px] text-[#5c728e] font-normal leading-snug">Technical blueprints for DevOps &amp; compliance</div>
                      </div>
                    </Link>

                    <Link
                      href="/integrations/vanta-drata"
                      onClick={() => setResourcesOpen(false)}
                      className="flex items-start gap-3 p-2.5 rounded-xl hover:bg-slate-50 transition-colors group"
                    >
                      <div className="p-2 rounded-lg bg-emerald-50 text-[#15803d] group-hover:bg-[#15803d] group-hover:text-white transition-colors shrink-0">
                        <RefreshCw className="h-4 w-4" />
                      </div>
                      <div>
                        <div className="text-xs font-bold text-[#111013]">Vanta &amp; Drata Sync</div>
                        <div className="text-[11px] text-[#5c728e] font-normal leading-snug">Zero-screenshot continuous GRC automation</div>
                      </div>
                    </Link>

                    <Link
                      href="/frameworks/soc2-cc81"
                      onClick={() => setResourcesOpen(false)}
                      className="flex items-start gap-3 p-2.5 rounded-xl hover:bg-slate-50 transition-colors group"
                    >
                      <div className="p-2 rounded-lg bg-emerald-50 text-[#15803d] group-hover:bg-[#15803d] group-hover:text-white transition-colors shrink-0">
                        <CheckCircle2 className="h-4 w-4" />
                      </div>
                      <div>
                        <div className="text-xs font-bold text-[#111013]">SOC 2 CC8.1 Guide</div>
                        <div className="text-[11px] text-[#5c728e] font-normal leading-snug">US &amp; Global SaaS change control automation</div>
                      </div>
                    </Link>

                    <Link
                      href="/frameworks/iso-27001-a832"
                      onClick={() => setResourcesOpen(false)}
                      className="flex items-start gap-3 p-2.5 rounded-xl hover:bg-slate-50 transition-colors group"
                    >
                      <div className="p-2 rounded-lg bg-emerald-50 text-[#15803d] group-hover:bg-[#15803d] group-hover:text-white transition-colors shrink-0">
                        <FileCheck2 className="h-4 w-4" />
                      </div>
                      <div>
                        <div className="text-xs font-bold text-[#111013]">ISO 27001 A.8.32 Guide</div>
                        <div className="text-[11px] text-[#5c728e] font-normal leading-snug">International Annex A change &amp; rollback controls</div>
                      </div>
                    </Link>

                    <Link
                      href="/frameworks/apra-cps-234"
                      onClick={() => setResourcesOpen(false)}
                      className="flex items-start gap-3 p-2.5 rounded-xl hover:bg-slate-50 transition-colors group"
                    >
                      <div className="p-2 rounded-lg bg-emerald-50 text-[#15803d] group-hover:bg-[#15803d] group-hover:text-white transition-colors shrink-0">
                        <Landmark className="h-4 w-4" />
                      </div>
                      <div>
                        <div className="text-xs font-bold text-[#111013]">APRA CPS 234 &amp; Essential Eight</div>
                        <div className="text-[11px] text-[#5c728e] font-normal leading-snug">Australia &amp; APAC financial services compliance</div>
                      </div>
                    </Link>

                    <Link
                      href="/frameworks/dora-compliance"
                      onClick={() => setResourcesOpen(false)}
                      className="flex items-start gap-3 p-2.5 rounded-xl hover:bg-slate-50 transition-colors group"
                    >
                      <div className="p-2 rounded-lg bg-emerald-50 text-[#15803d] group-hover:bg-[#15803d] group-hover:text-white transition-colors shrink-0">
                        <Globe2 className="h-4 w-4" />
                      </div>
                      <div>
                        <div className="text-xs font-bold text-[#111013]">DORA &amp; UK FCA Resilience</div>
                        <div className="text-[11px] text-[#5c728e] font-normal leading-snug">EU (2022/2554) &amp; UK operational resilience</div>
                      </div>
                    </Link>

                    <Link
                      href="/compare/manual-screenshots-vs-evidencelog"
                      onClick={() => setResourcesOpen(false)}
                      className="flex items-start gap-3 p-2.5 rounded-xl hover:bg-slate-50 transition-colors group"
                    >
                      <div className="p-2 rounded-lg bg-emerald-50 text-[#15803d] group-hover:bg-[#15803d] group-hover:text-white transition-colors shrink-0">
                        <GitCompare className="h-4 w-4" />
                      </div>
                      <div>
                        <div className="text-xs font-bold text-[#111013]">Manual vs. Automated</div>
                        <div className="text-[11px] text-[#5c728e] font-normal leading-snug">Screenshot tax vs. 1-click proof comparison</div>
                      </div>
                    </Link>

                    <Link
                      href="/security"
                      onClick={() => setResourcesOpen(false)}
                      className="flex items-start gap-3 p-2.5 rounded-xl hover:bg-slate-50 transition-colors group"
                    >
                      <div className="p-2 rounded-lg bg-emerald-50 text-[#15803d] group-hover:bg-[#15803d] group-hover:text-white transition-colors shrink-0">
                        <Shield className="h-4 w-4" />
                      </div>
                      <div>
                        <div className="text-xs font-bold text-[#111013]">Enterprise Security</div>
                        <div className="text-[11px] text-[#5c728e] font-normal leading-snug">Zero data egress &amp; Forge architecture</div>
                      </div>
                    </Link>

                    <a
                      href="/docs/user-guide.html"
                      target="_blank"
                      rel="noopener noreferrer"
                      onClick={() => setResourcesOpen(false)}
                      className="flex items-start gap-3 p-2.5 rounded-xl hover:bg-slate-50 transition-colors group"
                    >
                      <div className="p-2 rounded-lg bg-emerald-50 text-[#15803d] group-hover:bg-[#15803d] group-hover:text-white transition-colors shrink-0">
                        <BookOpen className="h-4 w-4" />
                      </div>
                      <div>
                        <div className="text-xs font-bold text-[#111013]">User Guide &amp; Docs ↗</div>
                        <div className="text-[11px] text-[#5c728e] font-normal leading-snug">Setup instructions &amp; administrator guide</div>
                      </div>
                    </a>

                    <Link
                      href="/faq"
                      onClick={() => setResourcesOpen(false)}
                      className="flex items-start gap-3 p-2.5 rounded-xl hover:bg-slate-50 transition-colors group"
                    >
                      <div className="p-2 rounded-lg bg-slate-100 text-slate-700 group-hover:bg-[#111013] group-hover:text-white transition-colors shrink-0">
                        <HelpCircle className="h-4 w-4" />
                      </div>
                      <div>
                        <div className="text-xs font-bold text-[#111013]">Auditor FAQ Hub</div>
                        <div className="text-[11px] text-[#5c728e] font-normal leading-snug">Answers to common security &amp; audit questions</div>
                      </div>
                    </Link>
                  </div>
                </div>
              )}
            </div>
          </nav>

          {/* Desktop Actions */}
          <div className="hidden lg:flex items-center gap-3 shrink-0">
            {onOpenAuditModal && (
              <button
                type="button"
                onClick={onOpenAuditModal}
                className="hidden xl:inline-flex items-center gap-1.5 px-3 py-2 rounded-lg text-[#5c728e] hover:text-[#111013] font-semibold text-xs transition-colors cursor-pointer whitespace-nowrap"
              >
                <FileText className="h-3.5 w-3.5 text-[#15803d]" />
                <span>Sample Report</span>
              </button>
            )}
            <a
              href="https://marketplace.atlassian.com"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 px-4 py-2.5 rounded-xl bg-[#111013] text-white hover:bg-[#15803d] font-semibold text-xs transition-all shadow-xs cursor-pointer whitespace-nowrap"
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
              href="/guides"
              onClick={() => setMobileMenuOpen(false)}
              className="block py-2 text-[#111013] font-semibold"
            >
              Engineering Guides &amp; Articles
            </Link>
            <Link
              href="/integrations/vanta-drata"
              onClick={() => setMobileMenuOpen(false)}
              className="block py-2 text-[#111013] font-semibold"
            >
              Vanta &amp; Drata GRC Sync
            </Link>
            <Link
              href="/frameworks/soc2-cc81"
              onClick={() => setMobileMenuOpen(false)}
              className="block py-2 text-[#111013] font-semibold"
            >
              SOC 2 CC8.1 Guide
            </Link>
            <Link
              href="/frameworks/iso-27001-a832"
              onClick={() => setMobileMenuOpen(false)}
              className="block py-2 text-[#111013] font-semibold"
            >
              ISO 27001 A.8.32 Guide
            </Link>
            <Link
              href="/frameworks/apra-cps-234"
              onClick={() => setMobileMenuOpen(false)}
              className="block py-2 text-[#111013] font-semibold"
            >
              APRA CPS 234 (Australia)
            </Link>
            <Link
              href="/frameworks/dora-compliance"
              onClick={() => setMobileMenuOpen(false)}
              className="block py-2 text-[#111013] font-semibold"
            >
              DORA &amp; UK FCA (Europe &amp; UK)
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
            <Link
              href="/faq"
              onClick={() => setMobileMenuOpen(false)}
              className="block py-2 text-[#111013] font-semibold"
            >
              FAQ
            </Link>
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
