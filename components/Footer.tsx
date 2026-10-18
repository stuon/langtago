"use client";

import Link from "next/link";
import { ShieldCheck, ExternalLink } from "lucide-react";

export default function Footer() {
  return (
    <footer className="border-t border-slate-800 bg-slate-950 text-slate-400 text-xs">
      <div className="mx-auto max-w-7xl px-4 py-14 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-8 lg:gap-12">
          {/* Brand Info (5 cols) */}
          <div className="md:col-span-5 space-y-3.5">
            <Link href="/" className="inline-flex items-center gap-2.5 group">
              <div className="flex h-8 w-8 items-center justify-center rounded-xl bg-slate-900 border border-slate-700 text-emerald-400 shadow-sm transition-colors group-hover:border-emerald-500/50">
                <ShieldCheck className="h-5 w-5" />
              </div>
              <span className="text-base font-bold text-white tracking-tight">Langtago</span>
            </Link>

            <p className="text-slate-400 text-xs sm:text-sm leading-relaxed max-w-sm">
              Continuous SOC 2 &amp; ISO 27001 change evidence automation, sealed natively inside Atlassian Jira Cloud with zero external data egress.
            </p>

            <div className="pt-1">
              <span className="inline-flex items-center gap-1.5 rounded-full border border-emerald-500/30 bg-emerald-500/10 px-3 py-1 text-xs font-semibold text-emerald-300">
                <span className="h-2 w-2 rounded-full bg-emerald-400" />
                <span>Atlassian Forge Cloud Native</span>
              </span>
            </div>
          </div>

          {/* Links Column 1: Product (3 cols) */}
          <div className="md:col-span-3 space-y-3">
            <p className="text-xs font-bold uppercase tracking-wider text-white">Product</p>
            <ul className="space-y-2 text-slate-400 text-xs">
              <li>
                <a href="#how-it-works" className="hover:text-white transition-colors">
                  How It Works
                </a>
              </li>
              <li>
                <a href="#features" className="hover:text-white transition-colors">
                  Capabilities &amp; Controls
                </a>
              </li>
              <li>
                <a href="#pricing" className="hover:text-white transition-colors">
                  Transparent Pricing
                </a>
              </li>
              <li>
                <a href="#faq" className="hover:text-white transition-colors">
                  Frequently Asked Questions
                </a>
              </li>
              <li>
                <a
                  href="https://marketplace.atlassian.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1 text-emerald-400 hover:text-emerald-300 transition-colors font-medium"
                >
                  <span>Atlassian Marketplace</span>
                  <ExternalLink className="h-3 w-3" />
                </a>
              </li>
            </ul>
          </div>

          {/* Links Column 2: Security & Standards (2 cols) */}
          <div className="md:col-span-2 space-y-3">
            <p className="text-xs font-bold uppercase tracking-wider text-white">Compliance</p>
            <ul className="space-y-2 text-slate-400 text-xs">
              <li>
                <span className="text-slate-300">SOC 2 Type II (CC8.1)</span>
              </li>
              <li>
                <span className="text-slate-300">ISO/IEC 27001:2022</span>
              </li>
              <li>
                <span className="text-slate-300">HIPAA §164.312</span>
              </li>
              <li>
                <span className="text-slate-300">Zero Data Egress</span>
              </li>
              <li>
                <span className="text-slate-300">Vanta &amp; Drata Sync</span>
              </li>
            </ul>
          </div>

          {/* Links Column 3: Legal & Support (2 cols) */}
          <div className="md:col-span-2 space-y-3">
            <p className="text-xs font-bold uppercase tracking-wider text-white">Contact &amp; Legal</p>
            <ul className="space-y-2 text-slate-400 text-xs">
              <li>
                <a href="mailto:support@langtago.com" className="hover:text-white transition-colors">
                  support@langtago.com
                </a>
              </li>
              <li>
                <Link href="/privacy" className="hover:text-white transition-colors">
                  Privacy Policy
                </Link>
              </li>
              <li>
                <Link href="/terms" className="hover:text-white transition-colors">
                  Terms of Service
                </Link>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="mt-12 pt-6 border-t border-slate-800 flex flex-col sm:flex-row items-center justify-between gap-3 text-xs text-slate-500">
          <p>© 2026 Langtago. All rights reserved.</p>
          <p className="text-center sm:text-right">
            EvidenceLog is built natively on Atlassian Forge. Jira is a registered trademark of Atlassian Pty Ltd.
          </p>
        </div>
      </div>
    </footer>
  );
}
