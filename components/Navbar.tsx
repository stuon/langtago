"use client";

import { useState } from "react";
import Link from "next/link";
import { ShieldCheck, ExternalLink, Menu, X, FileText, ArrowRight } from "lucide-react";

interface NavbarProps {
  onOpenAuditModal?: () => void;
  isProductPage?: boolean;
}

export default function Navbar({ onOpenAuditModal, isProductPage = false }: NavbarProps) {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <header className="sticky top-0 z-40 w-full border-b border-white/[0.08] bg-[#080b0f]/80 backdrop-blur-md transition-all">
      <div className="mx-auto flex h-16 max-w-7xl items-center justify-between px-4 sm:px-6 lg:px-8">
        {/* Brand / Logo */}
        <div className="flex items-center gap-3">
          <Link href="/" className="group flex items-center gap-2.5 focus:outline-none">
            <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-zinc-900 border border-white/[0.12] text-emerald-400 shadow-sm transition-all group-hover:border-emerald-500/50 group-hover:bg-zinc-800">
              <ShieldCheck className="h-4 w-4" />
            </div>
            <div className="flex items-center gap-2">
              <span className="text-sm font-semibold tracking-tight text-white">Langtago</span>
              {isProductPage ? (
                <>
                  <span className="text-zinc-600">/</span>
                  <span className="font-mono text-xs font-medium text-emerald-400">EvidenceLog</span>
                </>
              ) : (
                <span className="rounded bg-white/[0.06] px-1.5 py-0.5 text-[10px] font-mono text-zinc-400">
                  Studio
                </span>
              )}
            </div>
          </Link>
        </div>

        {/* Desktop Navigation */}
        <nav className="hidden items-center gap-6 md:flex text-xs font-medium text-zinc-400">
          {isProductPage ? (
            <>
              <Link href="/" className="hover:text-white transition-colors text-zinc-400">
                Studio
              </Link>
              <a href="#preview" className="hover:text-white transition-colors">
                Jira Glance
              </a>
              <a href="#features" className="hover:text-white transition-colors">
                Features
              </a>
              <a href="#security" className="hover:text-white transition-colors text-emerald-400/90 hover:text-emerald-300">
                Security &amp; Forge
              </a>
              <a href="#how-it-works" className="hover:text-white transition-colors">
                Workflow
              </a>
              <a href="#pricing" className="hover:text-white transition-colors">
                Pricing
              </a>
              <a href="#faq" className="hover:text-white transition-colors">
                FAQ
              </a>
            </>
          ) : (
            <>
              <a href="#flagship" className="hover:text-white transition-colors">
                Flagship
              </a>
              <a href="#products" className="hover:text-white transition-colors">
                Product Suite
              </a>
              <a href="#philosophy" className="hover:text-white transition-colors">
                Architecture
              </a>
              <a href="#contact" className="hover:text-white transition-colors">
                Support
              </a>
            </>
          )}
        </nav>

        {/* Desktop Actions */}
        <div className="hidden items-center gap-2.5 md:flex">
          {isProductPage ? (
            <>
              {onOpenAuditModal && (
                <button
                  type="button"
                  onClick={onOpenAuditModal}
                  className="flex items-center gap-1.5 rounded-lg border border-white/[0.08] bg-zinc-900/90 px-3 py-1.5 text-xs font-medium text-zinc-200 transition-all hover:bg-zinc-800 hover:text-white hover:border-white/[0.16]"
                >
                  <FileText className="h-3.5 w-3.5 text-emerald-400" />
                  <span>Sample SOC 2 Report</span>
                </button>
              )}
              <a
                href="https://marketplace.atlassian.com"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-1.5 rounded-lg bg-emerald-500 px-3.5 py-1.5 text-xs font-medium text-zinc-950 transition-all hover:bg-emerald-400 shadow-sm"
              >
                <span>Install on Marketplace</span>
                <ExternalLink className="h-3 w-3 opacity-70" />
              </a>
            </>
          ) : (
            <Link
              href="/evidence-log"
              className="flex items-center gap-1.5 rounded-lg bg-zinc-900 border border-white/[0.1] px-3.5 py-1.5 text-xs font-medium text-white transition-all hover:bg-zinc-800 hover:border-white/[0.2]"
            >
              <span>Explore EvidenceLog</span>
              <ArrowRight className="h-3.5 w-3.5 text-emerald-400" />
            </Link>
          )}
        </div>

        {/* Mobile menu button */}
        <div className="flex md:hidden">
          <button
            type="button"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="rounded-lg p-2 text-zinc-400 hover:bg-zinc-900 hover:text-white"
            aria-label="Toggle navigation menu"
          >
            {mobileMenuOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </button>
        </div>
      </div>

      {/* Mobile menu dropdown */}
      {mobileMenuOpen && (
        <div className="border-b border-white/[0.08] bg-[#0c1017] px-4 pt-3 pb-6 md:hidden text-xs space-y-3">
          {isProductPage ? (
            <>
              <Link
                href="/"
                onClick={() => setMobileMenuOpen(false)}
                className="block py-1 text-zinc-400 hover:text-white"
              >
                ← Studio Home
              </Link>
              <a href="#preview" onClick={() => setMobileMenuOpen(false)} className="block py-1 text-zinc-300">
                Jira Glance
              </a>
              <a href="#features" onClick={() => setMobileMenuOpen(false)} className="block py-1 text-zinc-300">
                Features
              </a>
              <a href="#security" onClick={() => setMobileMenuOpen(false)} className="block py-1 text-emerald-400">
                Security &amp; Forge
              </a>
              <a href="#pricing" onClick={() => setMobileMenuOpen(false)} className="block py-1 text-zinc-300">
                Pricing
              </a>
              <div className="pt-2 flex flex-col gap-2">
                {onOpenAuditModal && (
                  <button
                    type="button"
                    onClick={() => {
                      setMobileMenuOpen(false);
                      onOpenAuditModal();
                    }}
                    className="flex items-center justify-center gap-2 rounded-lg border border-white/[0.1] bg-zinc-900 py-2 text-zinc-200"
                  >
                    <FileText className="h-3.5 w-3.5 text-emerald-400" />
                    <span>View Sample SOC 2 Report</span>
                  </button>
                )}
                <a
                  href="https://marketplace.atlassian.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-center gap-2 rounded-lg bg-emerald-500 py-2 font-medium text-zinc-950"
                >
                  <span>Install on Atlassian Marketplace</span>
                  <ExternalLink className="h-3.5 w-3.5" />
                </a>
              </div>
            </>
          ) : (
            <>
              <Link
                href="/evidence-log"
                onClick={() => setMobileMenuOpen(false)}
                className="block py-1 font-semibold text-emerald-400"
              >
                EvidenceLog for Jira →
              </Link>
              <a href="#flagship" onClick={() => setMobileMenuOpen(false)} className="block py-1 text-zinc-300">
                Flagship App
              </a>
              <a href="#products" onClick={() => setMobileMenuOpen(false)} className="block py-1 text-zinc-300">
                Product Suite
              </a>
              <a href="#philosophy" onClick={() => setMobileMenuOpen(false)} className="block py-1 text-zinc-300">
                Architecture
              </a>
              <a href="#contact" onClick={() => setMobileMenuOpen(false)} className="block py-1 text-zinc-300">
                Support
              </a>
            </>
          )}
        </div>
      )}
    </header>
  );
}
