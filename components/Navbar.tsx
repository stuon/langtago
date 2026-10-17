"use client";

import { useState } from "react";
import Link from "next/link";
import { ShieldCheck, ExternalLink, Menu, X, FileText, ArrowRight } from "lucide-react";

interface NavbarProps {
  onOpenAuditModal?: () => void;
  isProductPage?: boolean;
}

export default function Navbar({ onOpenAuditModal, isProductPage = true }: NavbarProps) {
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
              <span className="text-zinc-600">/</span>
              <span className="font-mono text-xs font-medium text-emerald-400">EvidenceLog</span>
            </div>
          </Link>
        </div>

        {/* Desktop Navigation */}
        <nav className="hidden items-center gap-6 md:flex text-xs font-medium text-zinc-400">
          <a href="#preview" className="hover:text-white transition-colors">
            Issue Panel
          </a>
          <a href="#features" className="hover:text-white transition-colors">
            6 Pillars
          </a>
          <a href="#audit-hub" className="hover:text-white transition-colors">
            Audit Hub
          </a>
          <a href="#gatekeeper" className="hover:text-white transition-colors">
            Gatekeeper
          </a>
          <a href="#security" className="hover:text-white transition-colors text-emerald-400/90 hover:text-emerald-300">
            Security &amp; Forge
          </a>
          <a href="#pricing" className="hover:text-white transition-colors">
            Pricing
          </a>
          <a href="#studio" className="hover:text-white transition-colors">
            Studio
          </a>
          <a href="#faq" className="hover:text-white transition-colors">
            FAQ
          </a>
        </nav>

        {/* Desktop Actions */}
        <div className="hidden items-center gap-2.5 md:flex">
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
            className="flex items-center gap-1.5 rounded-lg bg-emerald-500 px-3.5 py-1.5 text-xs font-medium text-zinc-950 transition-all hover:bg-emerald-400 shadow-sm font-semibold"
          >
            <span>Install on Jira</span>
            <ExternalLink className="h-3 w-3 opacity-70" />
          </a>
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
          <a
            href="#preview"
            onClick={() => setMobileMenuOpen(false)}
            className="block py-1 text-zinc-400 hover:text-white"
          >
            Issue Panel
          </a>
          <a
            href="#features"
            onClick={() => setMobileMenuOpen(false)}
            className="block py-1 text-zinc-400 hover:text-white"
          >
            6 Compliance Pillars
          </a>
          <a
            href="#audit-hub"
            onClick={() => setMobileMenuOpen(false)}
            className="block py-1 text-zinc-400 hover:text-white"
          >
            Project Audit Hub
          </a>
          <a
            href="#gatekeeper"
            onClick={() => setMobileMenuOpen(false)}
            className="block py-1 text-zinc-400 hover:text-white"
          >
            Workflow Gatekeeper
          </a>
          <a
            href="#security"
            onClick={() => setMobileMenuOpen(false)}
            className="block py-1 text-emerald-400 hover:text-emerald-300"
          >
            Security &amp; Forge Sandbox
          </a>
          <a
            href="#pricing"
            onClick={() => setMobileMenuOpen(false)}
            className="block py-1 text-zinc-400 hover:text-white"
          >
            Pricing
          </a>
          <a
            href="#studio"
            onClick={() => setMobileMenuOpen(false)}
            className="block py-1 text-zinc-400 hover:text-white"
          >
            Langtago Studio Suite
          </a>
          <a
            href="#faq"
            onClick={() => setMobileMenuOpen(false)}
            className="block py-1 text-zinc-400 hover:text-white"
          >
            FAQ
          </a>

          <div className="pt-2 border-t border-white/[0.08] flex flex-col gap-2">
            {onOpenAuditModal && (
              <button
                type="button"
                onClick={() => {
                  setMobileMenuOpen(false);
                  onOpenAuditModal();
                }}
                className="flex w-full items-center justify-center gap-1.5 rounded-lg border border-white/[0.1] bg-zinc-900 py-2 text-xs font-medium text-zinc-200"
              >
                <FileText className="h-3.5 w-3.5 text-emerald-400" />
                <span>View Sample SOC 2 Output</span>
              </button>
            )}
            <a
              href="https://marketplace.atlassian.com"
              target="_blank"
              rel="noopener noreferrer"
              className="flex w-full items-center justify-center gap-1.5 rounded-lg bg-emerald-500 py-2 text-xs font-semibold text-zinc-950"
            >
              <span>Install on Atlassian Marketplace</span>
              <ExternalLink className="h-3 w-3" />
            </a>
          </div>
        </div>
      )}
    </header>
  );
}
