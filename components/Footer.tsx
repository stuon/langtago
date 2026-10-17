import Link from "next/link";
import { ShieldCheck, Mail, ArrowUpRight, ArrowRight } from "lucide-react";

export default function Footer() {
  return (
    <footer className="border-t border-slate-900 bg-slate-950 text-slate-400 text-xs">
      <div className="mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-8 lg:gap-12">
          {/* Brand Info */}
          <div className="md:col-span-5 space-y-4">
            <div className="flex items-center gap-2.5">
              <Link href="/" className="flex items-center gap-2.5">
                <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-gradient-to-br from-emerald-500 to-cyan-600 shadow-md shadow-emerald-500/20">
                  <ShieldCheck className="h-4 w-4 text-slate-950 stroke-[2.5]" />
                </div>
                <div>
                  <span className="text-base font-bold text-white tracking-tight">Langtago</span>
                  <span className="ml-1.5 text-[11px] text-emerald-400 font-medium">Studio</span>
                </div>
              </Link>
            </div>

            <p className="text-slate-400 text-xs leading-relaxed max-w-sm">
              Langtago develops zero-egress, Atlassian Forge-native developer tooling and compliance automation for high-velocity software teams.
            </p>

            <div className="flex items-center gap-2 text-xs text-slate-400">
              <span className="flex h-2 w-2 rounded-full bg-emerald-400" />
              <span className="text-slate-300 font-medium">Atlassian Forge Cloud Status:</span>
              <span className="text-emerald-400">All Systems Operational</span>
            </div>

            <div className="pt-2">
              <a
                href="mailto:support@langtago.com"
                className="inline-flex items-center gap-2 rounded-lg border border-slate-800 bg-slate-900/80 px-3 py-1.5 text-xs text-slate-300 hover:text-white hover:border-slate-700 transition-colors"
              >
                <Mail className="h-3.5 w-3.5 text-emerald-400" />
                <span>support@langtago.com</span>
              </a>
            </div>
          </div>

          {/* Links Column 1: Products */}
          <div className="md:col-span-2 space-y-3">
            <p className="text-xs font-semibold uppercase tracking-wider text-white">Products</p>
            <ul className="space-y-2">
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
                  className="flex items-center gap-1 text-slate-400 hover:text-white transition-colors"
                >
                  <span>Atlassian Marketplace</span>
                  <ArrowUpRight className="h-3 w-3" />
                </a>
              </li>
              <li>
                <span className="text-slate-600 cursor-not-allowed">DriftWatch (Coming Q1)</span>
              </li>
              <li>
                <span className="text-slate-600 cursor-not-allowed">AccessPulse (Research)</span>
              </li>
            </ul>
          </div>

          {/* Links Column 2: Compliance */}
          <div className="md:col-span-2 space-y-3">
            <p className="text-xs font-semibold uppercase tracking-wider text-white">Standards</p>
            <ul className="space-y-2">
              <li>
                <Link href="/evidence-log#security" className="hover:text-white transition-colors">
                  Zero Data Egress
                </Link>
              </li>
              <li>
                <span className="text-slate-400">SOC 2 Type II (CC8.1)</span>
              </li>
              <li>
                <span className="text-slate-400">ISO 27001 (A.12.1.2)</span>
              </li>
              <li>
                <span className="text-slate-400">HIPAA Change Logs</span>
              </li>
              <li>
                <span className="text-slate-400">Vanta & Drata Ready</span>
              </li>
            </ul>
          </div>

          {/* Links Column 3: Studio */}
          <div className="md:col-span-3 space-y-3">
            <p className="text-xs font-semibold uppercase tracking-wider text-white">Langtago Studio</p>
            <p className="text-xs text-slate-400 leading-relaxed">
              Langtago crafts tools that seamlessly blend developer experience with strict enterprise audit requirements.
            </p>
            <div className="text-[11px] text-slate-400 pt-1 space-y-1">
              <div>Domain: <span className="text-slate-300 font-mono">langtago.com</span></div>
              <div>Flagship Route: <Link href="/evidence-log" className="text-emerald-400 hover:underline">/evidence-log</Link></div>
            </div>
          </div>
        </div>

        {/* Bottom Bar & Legal Disclaimer */}
        <div className="mt-12 pt-8 border-t border-slate-900/80 flex flex-col sm:flex-row items-center justify-between gap-4 text-[11px] text-slate-400">
          <p>© 2026 Langtago. All rights reserved.</p>
          <p className="max-w-xl text-center sm:text-right">
            EvidenceLog is an independent product developed by Langtago. Jira and Atlassian are registered trademarks of Atlassian Pty Ltd.
          </p>
        </div>
      </div>
    </footer>
  );
}
