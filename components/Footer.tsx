"use client";

import Link from "next/link";
import { ShieldCheck, ArrowRight, ExternalLink } from "lucide-react";

export default function Footer() {
  return (
    <footer className="bg-white border-t border-slate-100 pt-16 pb-12">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 space-y-16">
        {/* Contis-inspired "Unlock the Power" Callout Card (tf__unlock) */}
        <div className="rounded-3xl bg-[#111013] text-white p-8 sm:p-12 lg:p-14 shadow-2xl relative overflow-hidden">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            {/* Left/Middle Content (8 cols) */}
            <div className="lg:col-span-8 space-y-4">
              <div className="inline-block rounded-md bg-white/10 px-3 py-1 text-xs font-bold uppercase tracking-wider text-[#dbf1c3] font-heading">
                ATLASSIAN FORGE CLOUD NATIVE
              </div>

              <h2 className="text-2xl sm:text-4xl font-bold font-heading text-white leading-tight">
                Zero external databases. Zero code egress. Zero vendor security headaches.
              </h2>

              <p className="text-sm text-slate-300 max-w-xl leading-relaxed">
                EvidenceLog runs 100% inside your Atlassian Cloud tenant on isolated Forge microVMs. We operate zero external databases, retain no customer code, and enforce strict zero network data egress. Free forever for squads up to 10 users.
              </p>

              <div className="flex flex-wrap items-center gap-4 text-xs font-medium text-slate-300 pt-2">
                <span className="flex items-center gap-1.5">
                  <span className="h-1.5 w-1.5 rounded-full bg-[#dbf1c3]" />
                  <span>Free up to 10 users</span>
                </span>
                <span className="flex items-center gap-1.5">
                  <span className="h-1.5 w-1.5 rounded-full bg-[#dbf1c3]" />
                  <span>100% In-Tenant Storage</span>
                </span>
                <span className="flex items-center gap-1.5">
                  <span className="h-1.5 w-1.5 rounded-full bg-[#dbf1c3]" />
                  <span>SOC 2, ISO 27001 &amp; APRA Ready</span>
                </span>
              </div>
            </div>

            {/* Right Action Button (4 cols) */}
            <div className="lg:col-span-4 flex lg:justify-end">
              <a
                href="https://marketplace.atlassian.com"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 py-4 px-7 rounded-xl bg-[#dbf1c3] hover:bg-white text-[#111013] text-sm font-bold shadow-lg transition-all cursor-pointer"
              >
                <span>Install Free on Marketplace</span>
                <ArrowRight className="h-4 w-4" />
              </a>
            </div>
          </div>
        </div>

        {/* 4-Column Footer Navigation Links */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-12 gap-10 pt-6">
          {/* Brand Info (5 cols) */}
          <div className="lg:col-span-5 space-y-4">
            <Link href="/" className="inline-flex items-center gap-2.5 group">
              <div className="flex h-9 w-9 items-center justify-center rounded-xl bg-[#111013] text-[#dbf1c3] shadow-xs">
                <ShieldCheck className="h-5 w-5" />
              </div>
              <div className="flex items-center gap-2">
                <span className="text-lg font-bold text-[#111013] tracking-tight font-heading">
                  Langtago
                </span>
                <span className="text-slate-300 font-light">/</span>
                <span className="text-xs font-bold text-[#15803d] bg-[#dbf1c3]/70 rounded-md px-2 py-0.5">
                  EvidenceLog
                </span>
              </div>
            </Link>

            <p className="text-xs sm:text-sm text-[#5c728e] leading-relaxed max-w-sm">
              Continuous SOC 2 &amp; ISO 27001 change evidence automation, sealed natively inside Atlassian Jira Cloud with zero external data egress.
            </p>

            <div className="pt-1">
              <span className="inline-flex items-center gap-1.5 rounded-full border border-slate-200 bg-slate-50 px-3 py-1 text-xs font-semibold text-[#111013]">
                <span className="h-2 w-2 rounded-full bg-emerald-500" />
                <span>Atlassian Forge Cloud Native</span>
              </span>
            </div>
          </div>

          {/* Links Column 1: Product (3 cols) */}
          <div className="lg:col-span-3 space-y-3">
            <p className="text-xs font-bold uppercase tracking-wider text-[#111013] font-heading">
              Product &amp; Docs
            </p>
            <ul className="space-y-2.5 text-xs text-[#5c728e]">
              <li>
                <Link
                  href="/compare/manual-screenshots-vs-evidencelog"
                  className="text-[#15803d] font-semibold hover:underline inline-flex items-center gap-1"
                >
                  <span>Manual vs. Automated ↗</span>
                </Link>
              </li>
              <li>
                <a href="#how-it-works" className="hover:text-[#111013] transition-colors">
                  How It Works (5 Pillars)
                </a>
              </li>
              <li>
                <a href="#features" className="hover:text-[#111013] transition-colors">
                  Preventive Gatekeeper &amp; Audit Hub
                </a>
              </li>
              <li>
                <a
                  href="/docs/user-guide.html"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-[#15803d] font-semibold hover:underline inline-flex items-center gap-1"
                >
                  <span>Production User Guide ↗</span>
                </a>
              </li>
              <li>
                <a
                  href="/docs/verifier.html"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-[#15803d] font-semibold hover:underline inline-flex items-center gap-1"
                >
                  <span>Zero-Trust Offline Verifier ↗</span>
                </a>
              </li>
              <li>
                <a
                  href="/docs/evidencelog-user-guide.md"
                  download="EvidenceLog-User-Guide.md"
                  className="hover:text-[#111013] transition-colors"
                >
                  Download Guide (Markdown)
                </a>
              </li>
              <li>
                <a href="#pricing" className="hover:text-[#111013] transition-colors">
                  Transparent Pricing
                </a>
              </li>
              <li>
                <a
                  href="https://marketplace.atlassian.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1 text-[#15803d] font-semibold hover:underline"
                >
                  <span>Atlassian Marketplace</span>
                  <ExternalLink className="h-3 w-3" />
                </a>
              </li>
            </ul>
          </div>

          {/* Links Column 2: Standards (2 cols) */}
          <div className="lg:col-span-2 space-y-3">
            <p className="text-xs font-bold uppercase tracking-wider text-[#111013] font-heading">
              Compliance
            </p>
            <ul className="space-y-2.5 text-xs text-[#5c728e]">
              <li>
                <Link
                  href="/frameworks/soc2-cc81"
                  className="text-[#15803d] font-semibold hover:underline inline-flex items-center gap-1"
                >
                  <span>SOC 2 CC8.1 Guide ↗</span>
                </Link>
              </li>
              <li>
                <Link
                  href="/compare/manual-screenshots-vs-evidencelog"
                  className="hover:text-[#111013] transition-colors"
                >
                  <span>Screenshots vs. EvidenceLog</span>
                </Link>
              </li>
              <li>
                <Link
                  href="/frameworks/iso-27001-a832"
                  className="text-[#15803d] font-semibold hover:underline inline-flex items-center gap-1"
                >
                  <span>ISO 27001 A.8.32 Guide ↗</span>
                </Link>
              </li>
              <li>
                <Link
                  href="/frameworks/apra-cps-234"
                  className="text-[#15803d] font-semibold hover:underline inline-flex items-center gap-1"
                >
                  <span>APRA CPS 234 Guide (AU) ↗</span>
                </Link>
              </li>
              <li>
                <Link
                  href="/frameworks/dora-compliance"
                  className="text-[#15803d] font-semibold hover:underline inline-flex items-center gap-1"
                >
                  <span>DORA &amp; UK FCA Guide (EU/UK) ↗</span>
                </Link>
              </li>
              <li>
                <span>HIPAA §164.312 &amp; FedRAMP</span>
              </li>
              <li>
                <span>ITIL 4 Risk &amp; CAB Review</span>
              </li>
              <li>
                <span>Binary Merkle Tree Proofs</span>
              </li>
              <li>
                <Link href="/security" className="hover:text-[#111013] transition-colors">
                  Zero Data Egress (Forge)
                </Link>
              </li>
              <li>
                <Link
                  href="/integrations/vanta-drata"
                  className="text-[#15803d] font-semibold hover:underline inline-flex items-center gap-1"
                >
                  <span>Vanta &amp; Drata Ingestion ↗</span>
                </Link>
              </li>
            </ul>
          </div>

          {/* Links Column 3: Contact & Legal (2 cols) */}
          <div className="lg:col-span-2 space-y-3">
            <p className="text-xs font-bold uppercase tracking-wider text-[#111013] font-heading">
              Contact &amp; Legal
            </p>
            <ul className="space-y-2.5 text-xs text-[#5c728e]">
              <li>
                <a href="mailto:support@langtago.com" className="hover:text-[#111013] transition-colors">
                  support@langtago.com
                </a>
              </li>
              <li>
                <Link href="/privacy" className="hover:text-[#111013] transition-colors">
                  Privacy Policy
                </Link>
              </li>
              <li>
                <Link href="/terms" className="hover:text-[#111013] transition-colors">
                  Terms of Service
                </Link>
              </li>
              <li>
                <Link href="/security" className="hover:text-[#111013] transition-colors">
                  Security Architecture
                </Link>
              </li>
            </ul>
          </div>
        </div>

        {/* Copyright Bar */}
        <div className="border-t border-slate-100 pt-8 flex flex-col sm:flex-row items-center justify-between text-xs text-[#5c728e] gap-4">
          <p>© {new Date().getFullYear()} Langtago Inc. All rights reserved.</p>
          <div className="flex items-center gap-6">
            <Link href="/privacy" className="hover:text-[#111013] transition-colors">
              Privacy
            </Link>
            <Link href="/terms" className="hover:text-[#111013] transition-colors">
              Terms
            </Link>
            <Link href="/security" className="hover:text-[#111013] transition-colors">
              Security
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
