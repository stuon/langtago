"use client";

import { useState } from "react";
import Link from "next/link";
import { ShieldCheck, Mail, ArrowUpRight, ArrowRight, Copy, Check } from "lucide-react";

export default function Footer() {
  const [copied, setCopied] = useState(false);

  const handleCopyEmail = () => {
    navigator.clipboard.writeText("support@langtago.com");
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <footer className="border-t border-white/[0.08] bg-[#06080c] text-zinc-400 text-xs">
      <div className="mx-auto max-w-7xl px-4 py-14 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-10 lg:gap-14">
          {/* Brand Info (5 cols) */}
          <div className="md:col-span-5 space-y-4">
            <Link href="/" className="inline-flex items-center gap-2.5 group">
              <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-zinc-900 border border-white/[0.12] text-emerald-400 shadow-sm transition-colors group-hover:border-emerald-500/40">
                <ShieldCheck className="h-4 w-4" />
              </div>
              <div className="flex items-center gap-2">
                <span className="text-base font-semibold text-white tracking-tight">Langtago</span>
                <span className="rounded bg-white/[0.06] px-1.5 py-0.5 text-[10px] font-mono text-zinc-400">
                  Studio
                </span>
              </div>
            </Link>

            <p className="text-zinc-400 text-xs leading-relaxed max-w-sm">
              Zero-egress developer tooling and compliance automation built natively for Atlassian Cloud.
            </p>

            <div className="flex items-center gap-2 text-xs pt-1">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500"></span>
              </span>
              <span className="font-mono text-[11px] text-zinc-300">Atlassian Forge Platform:</span>
              <span className="font-mono text-[11px] text-emerald-400">Operational</span>
            </div>

            {/* Direct Contact & Copy */}
            <div className="pt-2">
              <button
                type="button"
                onClick={handleCopyEmail}
                className="inline-flex items-center gap-2 rounded-lg border border-white/[0.08] bg-zinc-900/90 px-3 py-1.5 font-mono text-[11px] text-zinc-300 hover:text-white hover:bg-zinc-800 hover:border-white/[0.16] transition-all"
                title="Click to copy email address"
              >
                <Mail className="h-3.5 w-3.5 text-emerald-400" />
                <span>support@langtago.com</span>
                <span className="text-zinc-600">|</span>
                {copied ? (
                  <span className="text-emerald-400 font-semibold flex items-center gap-1">
                    <Check className="h-3 w-3" /> Copied
                  </span>
                ) : (
                  <span className="text-zinc-500 hover:text-zinc-300 flex items-center gap-1">
                    <Copy className="h-3 w-3" /> Copy
                  </span>
                )}
              </button>
            </div>
          </div>

          {/* Links Column 1: Products (2 cols) */}
          <div className="md:col-span-2 space-y-3">
            <p className="text-[11px] font-mono font-semibold uppercase tracking-wider text-zinc-300">Products</p>
            <ul className="space-y-2 text-zinc-400">
              <li>
                <Link href="/evidence-log" className="text-emerald-400 hover:text-emerald-300 transition-colors font-medium flex items-center gap-1">
                  <span>EvidenceLog for Jira</span>
                  <ArrowRight className="h-3 w-3" />
                </Link>
              </li>
              <li>
                <a
                  href="https://marketplace.atlassian.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-1 text-zinc-400 hover:text-white transition-colors"
                >
                  <span>Atlassian Listing</span>
                  <ArrowUpRight className="h-3 w-3 opacity-60" />
                </a>
              </li>
              <li>
                <span className="text-zinc-600">DriftWatch (Q1 2027)</span>
              </li>
              <li>
                <span className="text-zinc-600">AccessPulse (Research)</span>
              </li>
            </ul>
          </div>

          {/* Links Column 2: Standards (2 cols) */}
          <div className="md:col-span-2 space-y-3">
            <p className="text-[11px] font-mono font-semibold uppercase tracking-wider text-zinc-300">Standards</p>
            <ul className="space-y-2 text-zinc-400">
              <li>
                <Link href="/evidence-log#security" className="hover:text-white transition-colors">
                  Zero Data Egress
                </Link>
              </li>
              <li>
                <span className="text-zinc-400">SOC 2 Type II (CC8.1)</span>
              </li>
              <li>
                <span className="text-zinc-400">ISO 27001 (A.8.25)</span>
              </li>
              <li>
                <span className="text-zinc-400">HIPAA §164.312(b)</span>
              </li>
              <li>
                <span className="text-zinc-400">Vanta &amp; Drata Ready</span>
              </li>
            </ul>
          </div>

          {/* Links Column 3: Architecture & Domain (3 cols) */}
          <div className="md:col-span-3 space-y-3">
            <p className="text-[11px] font-mono font-semibold uppercase tracking-wider text-zinc-300">Security Architecture</p>
            <p className="text-xs text-zinc-400 leading-relaxed">
              Langtago applications run strictly within Atlassian Forge sandboxes. We never host client code or Jira tickets on external servers.
            </p>
            <div className="font-mono text-[11px] text-zinc-500 pt-1 space-y-1">
              <div>Domain: <span className="text-zinc-300">langtago.com</span></div>
              <div>Flagship Route: <Link href="/evidence-log" className="text-emerald-400 hover:underline">/evidence-log</Link></div>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="mt-14 pt-8 border-t border-white/[0.06] flex flex-col sm:flex-row items-center justify-between gap-4 text-[11px] text-zinc-500 font-mono">
          <div className="flex flex-wrap items-center gap-3">
            <p>© 2026 Langtago Studio. All rights reserved.</p>
            <span className="text-zinc-700">•</span>
            <Link href="/privacy" className="text-zinc-400 hover:text-emerald-400 transition-colors">Privacy Policy</Link>
            <span className="text-zinc-700">•</span>
            <Link href="/terms" className="text-zinc-400 hover:text-emerald-400 transition-colors">Terms of Service</Link>
            <span className="text-zinc-700">•</span>
            <a href="https://github.com/stuon/evidencelog-jira" target="_blank" rel="noopener noreferrer" className="text-zinc-400 hover:text-white transition-colors">GitHub</a>
          </div>
          <p className="text-center sm:text-right max-w-xl">
            EvidenceLog is an independent product developed by Langtago. Jira and Atlassian are registered trademarks of Atlassian Pty Ltd.
          </p>
        </div>
      </div>
    </footer>
  );
}
