"use client";

import Link from "next/link";
import { ShieldCheck, ExternalLink } from "lucide-react";

export default function Footer() {
  return (
    <footer className="border-t border-white/[0.08] bg-[#06080c] text-zinc-400 text-xs">
      <div className="mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-8 lg:gap-12">
          {/* Brand Info (5 cols) */}
          <div className="md:col-span-5 space-y-3">
            <Link href="/" className="inline-flex items-center gap-2.5 group">
              <div className="flex h-7 w-7 items-center justify-center rounded-lg bg-zinc-900 border border-white/[0.12] text-emerald-400 shadow-sm transition-colors group-hover:border-emerald-500/40">
                <ShieldCheck className="h-4 w-4" />
              </div>
              <span className="text-sm font-semibold text-white tracking-tight">Langtago</span>
            </Link>

            <p className="text-zinc-400 text-xs leading-relaxed max-w-sm">
              Continuous SOC 2 &amp; ISO 27001 change evidence automation, sealed natively inside Atlassian Jira Cloud with zero external data egress.
            </p>

            <div className="pt-1">
              <span className="inline-flex items-center gap-1.5 rounded-full border border-emerald-500/20 bg-emerald-500/5 px-2.5 py-0.5 font-mono text-[11px] text-emerald-400">
                <span className="h-1.5 w-1.5 rounded-full bg-emerald-400" />
                <span>Atlassian Forge Cloud Sandboxed</span>
              </span>
            </div>
          </div>

          {/* Links Column 1: Product (3 cols) */}
          <div className="md:col-span-3 space-y-2.5">
            <p className="text-[11px] font-mono font-semibold uppercase tracking-wider text-zinc-300">Product</p>
            <ul className="space-y-2 text-zinc-400">
              <li>
                <a href="#features" className="hover:text-white transition-colors">
                  Capabilities &amp; Gatekeeper
                </a>
              </li>
              <li>
                <a href="#pricing" className="hover:text-white transition-colors">
                  Marketplace Pricing
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
                  className="inline-flex items-center gap-1 text-emerald-400 hover:text-emerald-300 transition-colors"
                >
                  <span>Atlassian Marketplace</span>
                  <ExternalLink className="h-3 w-3" />
                </a>
              </li>
            </ul>
          </div>

          {/* Links Column 2: Security & Standards (2 cols) */}
          <div className="md:col-span-2 space-y-2.5">
            <p className="text-[11px] font-mono font-semibold uppercase tracking-wider text-zinc-300">Compliance</p>
            <ul className="space-y-2 text-zinc-400">
              <li>
                <span className="text-zinc-300">SOC 2 Type II (CC8.1)</span>
              </li>
              <li>
                <span className="text-zinc-300">ISO/IEC 27001</span>
              </li>
              <li>
                <span className="text-zinc-300">Zero Data Egress</span>
              </li>
              <li>
                <span className="text-zinc-300">Vanta &amp; Drata Formatted</span>
              </li>
            </ul>
          </div>

          {/* Links Column 3: Legal & Support (2 cols) */}
          <div className="md:col-span-2 space-y-2.5">
            <p className="text-[11px] font-mono font-semibold uppercase tracking-wider text-zinc-300">Contact &amp; Legal</p>
            <ul className="space-y-2 text-zinc-400">
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
        <div className="mt-10 pt-6 border-t border-white/[0.06] flex flex-col sm:flex-row items-center justify-between gap-3 text-[11px] text-zinc-500 font-mono">
          <p>© 2026 Langtago. All rights reserved.</p>
          <p className="text-center sm:text-right">
            EvidenceLog is built natively on Atlassian Forge. Jira is a registered trademark of Atlassian Pty Ltd.
          </p>
        </div>
      </div>
    </footer>
  );
}
