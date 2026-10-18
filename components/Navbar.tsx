"use client";

import { useState } from "react";
import Link from "next/link";
import { ShieldCheck, ExternalLink, Menu, X, FileText } from "lucide-react";

interface NavbarProps {
  onOpenAuditModal?: () => void;
  isProductPage?: boolean;
}

export default function Navbar({ onOpenAuditModal, isProductPage = true }: NavbarProps) {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const prefix = isProductPage ? "" : "/";

  return (
    <header className="sticky top-0 z-40 w-full border-b border-slate-200/80 bg-white/90 backdrop-blur-md transition-all">
      <div className="mx-auto flex h-16 max-w-7xl items-center justify-between px-4 sm:px-6 lg:px-8">
        {/* Brand / Logo */}
        <div className="flex items-center gap-3">
          <Link href="/" className="group flex items-center gap-2.5 focus:outline-none">
            <div className="flex h-9 w-9 items-center justify-center rounded-xl bg-emerald-50 border border-emerald-200/80 text-emerald-600 shadow-xs transition-all group-hover:bg-emerald-100 group-hover:border-emerald-300">
              <ShieldCheck className="h-5 w-5" />
            </div>
            <div className="flex items-center gap-2">
              <span className="text-base font-bold tracking-tight text-slate-900">Langtago</span>
              <span className="text-slate-300 font-light">/</span>
              <span className="text-xs font-semibold text-emerald-700 bg-emerald-50 border border-emerald-200/60 rounded-md px-2 py-0.5">
                EvidenceLog
              </span>
            </div>
          </Link>
        </div>

        {/* Desktop Navigation */}
        <nav className="hidden items-center gap-8 md:flex text-sm font-medium text-slate-600">
          <a href={`${prefix}#how-it-works`} className="hover:text-slate-900 transition-colors">
            How It Works
          </a>
          <a href={`${prefix}#features`} className="hover:text-slate-900 transition-colors">
            Capabilities
          </a>
          <a href={`${prefix}#pricing`} className="hover:text-slate-900 transition-colors">
            Pricing
          </a>
          <a href={`${prefix}#faq`} className="hover:text-slate-900 transition-colors">
            FAQ
          </a>
        </nav>

        {/* Desktop Actions */}
        <div className="hidden items-center gap-3 md:flex">
          {onOpenAuditModal && (
            <button
              type="button"
              onClick={onOpenAuditModal}
              className="flex items-center gap-1.5 rounded-xl border border-slate-200 bg-white px-3.5 py-2 text-xs font-semibold text-slate-700 transition-all hover:bg-slate-50 hover:text-slate-950 hover:border-slate-300 shadow-xs"
            >
              <FileText className="h-4 w-4 text-emerald-600" />
              <span>Sample SOC 2 Report</span>
            </button>
          )}
          <a
            href="https://marketplace.atlassian.com"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-1.5 rounded-xl bg-emerald-600 px-4 py-2 text-xs font-semibold text-white transition-all hover:bg-emerald-500 shadow-sm shadow-emerald-600/20"
          >
            <span>Install on Jira</span>
            <ExternalLink className="h-3.5 w-3.5 opacity-80" />
          </a>
        </div>

        {/* Mobile menu button */}
        <div className="flex md:hidden">
          <button
            type="button"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="rounded-lg p-2 text-slate-600 hover:bg-slate-100 hover:text-slate-900"
            aria-label="Toggle navigation menu"
          >
            {mobileMenuOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </button>
        </div>
      </div>

      {/* Mobile menu dropdown */}
      {mobileMenuOpen && (
        <div className="border-b border-slate-200 bg-white px-5 pt-3 pb-6 md:hidden text-sm space-y-3">
          <a
            href={`${prefix}#how-it-works`}
            onClick={() => setMobileMenuOpen(false)}
            className="block py-1.5 text-slate-700 hover:text-slate-950 font-medium"
          >
            How It Works
          </a>
          <a
            href={`${prefix}#features`}
            onClick={() => setMobileMenuOpen(false)}
            className="block py-1.5 text-slate-700 hover:text-slate-950 font-medium"
          >
            Capabilities
          </a>
          <a
            href={`${prefix}#pricing`}
            onClick={() => setMobileMenuOpen(false)}
            className="block py-1.5 text-slate-700 hover:text-slate-950 font-medium"
          >
            Pricing
          </a>
          <a
            href={`${prefix}#faq`}
            onClick={() => setMobileMenuOpen(false)}
            className="block py-1.5 text-slate-700 hover:text-slate-950 font-medium"
          >
            FAQ
          </a>

          <div className="pt-3 border-t border-slate-200 flex flex-col gap-2.5">
            {onOpenAuditModal && (
              <button
                type="button"
                onClick={() => {
                  setMobileMenuOpen(false);
                  onOpenAuditModal();
                }}
                className="flex w-full items-center justify-center gap-1.5 rounded-xl border border-slate-200 bg-white py-2.5 text-xs font-semibold text-slate-700"
              >
                <FileText className="h-4 w-4 text-emerald-600" />
                <span>View Sample SOC 2 Output</span>
              </button>
            )}
            <a
              href="https://marketplace.atlassian.com"
              target="_blank"
              rel="noopener noreferrer"
              className="flex w-full items-center justify-center gap-1.5 rounded-xl bg-emerald-600 py-2.5 text-xs font-semibold text-white shadow-sm"
            >
              <span>Install on Atlassian Marketplace</span>
              <ExternalLink className="h-3.5 w-3.5" />
            </a>
          </div>
        </div>
      )}
    </header>
  );
}
