"use client";

import { useState } from "react";
import Link from "next/link";
import { ShieldCheck, ExternalLink, Menu, X, FileText, Sparkles, Layers, ArrowRight } from "lucide-react";

interface NavbarProps {
  onOpenAuditModal?: () => void;
  isProductPage?: boolean;
}

export default function Navbar({ onOpenAuditModal, isProductPage = false }: NavbarProps) {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <header className="sticky top-0 z-40 w-full border-b border-white/10 bg-slate-950/80 backdrop-blur-xl transition-all">
      <div className="mx-auto flex h-16 max-w-7xl items-center justify-between px-4 sm:px-6 lg:px-8">
        {/* Brand / Logo */}
        <div className="flex items-center gap-3">
          <Link href="/" className="group flex items-center gap-2.5 focus:outline-none">
            <div className="relative flex h-9 w-9 items-center justify-center rounded-lg bg-gradient-to-br from-emerald-500 to-cyan-600 shadow-md shadow-emerald-500/20 ring-1 ring-white/20 transition-transform group-hover:scale-105">
              <ShieldCheck className="h-5 w-5 text-slate-950 stroke-[2.5]" />
              <div className="absolute inset-0 rounded-lg bg-white/20 opacity-0 transition-opacity group-hover:opacity-100" />
            </div>
            <div className="flex flex-col">
              <div className="flex items-center gap-2">
                <span className="text-base font-semibold tracking-tight text-white">Langtago</span>
                {isProductPage ? (
                  <span className="rounded-full bg-emerald-500/10 px-2 py-0.5 text-[10px] font-medium text-emerald-400 ring-1 ring-emerald-500/30">
                    EvidenceLog
                  </span>
                ) : (
                  <span className="rounded-full bg-slate-800 px-2 py-0.5 text-[10px] font-medium text-slate-300 border border-slate-700">
                    Studio
                  </span>
                )}
              </div>
              <span className="text-[10px] font-medium tracking-wider text-slate-400 uppercase">
                {isProductPage ? "for Jira Cloud" : "Software & Developer Tools"}
              </span>
            </div>
          </Link>
        </div>

        {/* Desktop Navigation */}
        <nav className="hidden items-center gap-7 md:flex text-sm font-medium text-slate-300">
          {isProductPage ? (
            <>
              <Link href="/" className="text-slate-400 hover:text-white transition-colors flex items-center gap-1">
                <Layers className="h-3.5 w-3.5" />
                <span>Studio</span>
              </Link>
              <a href="#features" className="transition-colors hover:text-white">
                Features
              </a>
              <a href="#preview" className="transition-colors hover:text-white">
                Jira Preview
              </a>
              <a href="#how-it-works" className="transition-colors hover:text-white">
                How it Works
              </a>
              <a href="#security" className="transition-colors hover:text-white">
                Security & Zero-Egress
              </a>
              <a href="#pricing" className="transition-colors hover:text-white">
                Pricing
              </a>
              <a href="#faq" className="transition-colors hover:text-white">
                FAQ
              </a>
            </>
          ) : (
            <>
              <a href="#flagship" className="transition-colors hover:text-white">
                Flagship App
              </a>
              <a href="#products" className="transition-colors hover:text-white">
                Product Suite
              </a>
              <a href="#philosophy" className="transition-colors hover:text-white">
                Forge Native
              </a>
              <a href="#security" className="transition-colors hover:text-white">
                Zero-Egress
              </a>
              <a href="#contact" className="transition-colors hover:text-white">
                Contact & Support
              </a>
            </>
          )}
        </nav>

        {/* Desktop CTAs */}
        <div className="hidden items-center gap-3 md:flex">
          {isProductPage ? (
            <>
              {onOpenAuditModal && (
                <button
                  onClick={onOpenAuditModal}
                  className="group flex items-center gap-1.5 rounded-lg border border-slate-700/80 bg-slate-900/80 px-3.5 py-1.5 text-xs font-semibold text-slate-200 transition-all hover:border-slate-500 hover:bg-slate-800 hover:text-white focus:outline-none focus:ring-2 focus:ring-emerald-500/40"
                >
                  <FileText className="h-3.5 w-3.5 text-emerald-400 transition-transform group-hover:scale-110" />
                  <span>Sample SOC 2 Report</span>
                </button>
              )}
              <a
                href="https://marketplace.atlassian.com"
                target="_blank"
                rel="noopener noreferrer"
                className="group relative flex items-center gap-1.5 rounded-lg bg-gradient-to-r from-emerald-500 to-teal-400 px-4 py-1.5 text-xs font-semibold text-slate-950 shadow-md shadow-emerald-500/25 transition-all hover:brightness-110 focus:outline-none focus:ring-2 focus:ring-emerald-400"
              >
                <Sparkles className="h-3.5 w-3.5 text-slate-950" />
                <span>Install on Jira</span>
                <ExternalLink className="h-3 w-3 text-slate-950 opacity-70" />
              </a>
            </>
          ) : (
            <Link
              href="/evidence-log"
              className="group flex items-center gap-2 rounded-lg bg-gradient-to-r from-emerald-500 to-teal-400 px-4 py-2 text-xs font-semibold text-slate-950 shadow-md shadow-emerald-500/25 transition-all hover:brightness-110"
            >
              <span>Explore EvidenceLog for Jira</span>
              <ArrowRight className="h-3.5 w-3.5 transition-transform group-hover:translate-x-0.5" />
            </Link>
          )}
        </div>

        {/* Mobile menu button */}
        <div className="flex md:hidden">
          <button
            type="button"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="rounded-lg p-2 text-slate-400 hover:bg-slate-900 hover:text-white focus:outline-none"
            aria-label="Toggle navigation menu"
          >
            {mobileMenuOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </button>
        </div>
      </div>

      {/* Mobile menu dropdown */}
      {mobileMenuOpen && (
        <div className="border-b border-white/10 bg-slate-950 px-4 pt-2 pb-6 md:hidden">
          <div className="flex flex-col space-y-3 pt-2 text-sm font-medium text-slate-300">
            {isProductPage ? (
              <>
                <Link
                  href="/"
                  onClick={() => setMobileMenuOpen(false)}
                  className="py-1 text-slate-400 hover:text-white flex items-center gap-1.5"
                >
                  <Layers className="h-4 w-4" />
                  <span>Langtago Studio Home</span>
                </Link>
                <a href="#features" onClick={() => setMobileMenuOpen(false)} className="py-1 hover:text-white">
                  Features
                </a>
                <a href="#preview" onClick={() => setMobileMenuOpen(false)} className="py-1 hover:text-white">
                  Jira Preview
                </a>
                <a href="#how-it-works" onClick={() => setMobileMenuOpen(false)} className="py-1 hover:text-white">
                  How it Works
                </a>
                <a href="#security" onClick={() => setMobileMenuOpen(false)} className="py-1 hover:text-white">
                  Security & Zero-Egress
                </a>
                <a href="#pricing" onClick={() => setMobileMenuOpen(false)} className="py-1 hover:text-white">
                  Pricing
                </a>
                <a href="#faq" onClick={() => setMobileMenuOpen(false)} className="py-1 hover:text-white">
                  FAQ
                </a>
                <div className="pt-3 flex flex-col gap-2">
                  {onOpenAuditModal && (
                    <button
                      onClick={() => {
                        setMobileMenuOpen(false);
                        onOpenAuditModal();
                      }}
                      className="flex items-center justify-center gap-2 rounded-lg border border-slate-700 bg-slate-900 px-4 py-2.5 text-xs font-semibold text-slate-200"
                    >
                      <FileText className="h-4 w-4 text-emerald-400" />
                      View Sample SOC 2 Report
                    </button>
                  )}
                  <a
                    href="https://marketplace.atlassian.com"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center justify-center gap-2 rounded-lg bg-emerald-500 px-4 py-2.5 text-xs font-semibold text-slate-950"
                  >
                    <span>Install from Atlassian Marketplace</span>
                    <ExternalLink className="h-3.5 w-3.5" />
                  </a>
                </div>
              </>
            ) : (
              <>
                <Link
                  href="/evidence-log"
                  onClick={() => setMobileMenuOpen(false)}
                  className="py-1 text-emerald-400 font-semibold"
                >
                  EvidenceLog for Jira &rarr;
                </Link>
                <a href="#flagship" onClick={() => setMobileMenuOpen(false)} className="py-1 hover:text-white">
                  Flagship App
                </a>
                <a href="#products" onClick={() => setMobileMenuOpen(false)} className="py-1 hover:text-white">
                  Product Suite
                </a>
                <a href="#philosophy" onClick={() => setMobileMenuOpen(false)} className="py-1 hover:text-white">
                  Forge Native
                </a>
                <a href="#security" onClick={() => setMobileMenuOpen(false)} className="py-1 hover:text-white">
                  Zero-Egress
                </a>
                <a href="#contact" onClick={() => setMobileMenuOpen(false)} className="py-1 hover:text-white">
                  Contact
                </a>
                <div className="pt-2">
                  <Link
                    href="/evidence-log"
                    onClick={() => setMobileMenuOpen(false)}
                    className="flex items-center justify-center gap-2 rounded-lg bg-emerald-500 px-4 py-2.5 text-xs font-semibold text-slate-950"
                  >
                    <span>Launch EvidenceLog</span>
                    <ArrowRight className="h-3.5 w-3.5" />
                  </Link>
                </div>
              </>
            )}
          </div>
        </div>
      )}
    </header>
  );
}
