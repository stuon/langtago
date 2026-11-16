import Link from "next/link";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { ArrowLeft, BookOpen, ShieldCheck, ArrowRight } from "lucide-react";

export const metadata = {
  title: "404 - Page Not Found | EvidenceLog by Langtago",
  description: "The requested page could not be found. Explore EvidenceLog documentation, compliance guides, or return to home.",
};

export default function NotFound() {
  return (
    <div className="relative min-h-screen bg-white font-sans text-[#5c728e] selection:bg-[#dbf1c3] selection:text-[#0f5132] flex flex-col justify-between">
      <Navbar isProductPage={false} />

      <main className="relative py-20 px-4 sm:px-6 lg:px-8 text-center max-w-3xl mx-auto flex-1 flex flex-col items-center justify-center">
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#dbf1c3]/70 border border-[#b8e29a] text-[#15803d] font-bold text-xs uppercase tracking-wider mb-6 font-heading">
          <ShieldCheck className="h-3.5 w-3.5 text-[#15803d]" />
          <span>404 &bull; Page Not Found</span>
        </div>

        <h1 className="text-4xl sm:text-6xl font-bold tracking-tight text-[#111013] font-heading mb-4 leading-tight">
          Lost in the audit trail?
        </h1>

        <p className="text-base sm:text-lg text-[#5c728e] max-w-lg mb-10 leading-relaxed">
          The page or documentation section you are looking for does not exist or may have been moved.
        </p>

        <div className="flex flex-col sm:flex-row items-center gap-4 w-full sm:w-auto">
          <Link
            href="/"
            className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-xl bg-[#111013] text-white hover:bg-[#15803d] font-semibold text-xs transition-all shadow-xs"
          >
            <ArrowLeft className="h-4 w-4" />
            <span>Return to EvidenceLog Home</span>
          </Link>

          <Link
            href="/docs"
            className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-xl bg-white border border-slate-200 text-[#111013] hover:border-[#111013] font-semibold text-xs transition-all shadow-xs"
          >
            <BookOpen className="h-4 w-4 text-[#15803d]" />
            <span>Explore Product Documentation</span>
          </Link>
        </div>

        {/* Helpful links grid */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mt-16 text-left w-full">
          <Link
            href="/frameworks/soc2-cc81"
            className="p-4 rounded-xl border border-slate-200 hover:border-slate-300 hover:bg-slate-50/50 transition-all group"
          >
            <div className="text-xs font-bold text-[#111013] group-hover:text-[#15803d] flex items-center justify-between">
              <span>SOC 2 CC8.1 Guide</span>
              <ArrowRight className="h-3 w-3" />
            </div>
            <p className="text-[11px] text-[#5c728e] mt-1">Change control automation blueprints</p>
          </Link>

          <Link
            href="/security"
            className="p-4 rounded-xl border border-slate-200 hover:border-slate-300 hover:bg-slate-50/50 transition-all group"
          >
            <div className="text-xs font-bold text-[#111013] group-hover:text-[#15803d] flex items-center justify-between">
              <span>Security Architecture</span>
              <ArrowRight className="h-3 w-3" />
            </div>
            <p className="text-[11px] text-[#5c728e] mt-1">Zero-egress Atlassian Forge isolation</p>
          </Link>

          <Link
            href="/faq"
            className="p-4 rounded-xl border border-slate-200 hover:border-slate-300 hover:bg-slate-50/50 transition-all group"
          >
            <div className="text-xs font-bold text-[#111013] group-hover:text-[#15803d] flex items-center justify-between">
              <span>Auditor FAQ Hub</span>
              <ArrowRight className="h-3 w-3" />
            </div>
            <p className="text-[11px] text-[#5c728e] mt-1">Answers to common audit questions</p>
          </Link>
        </div>
      </main>

      <Footer />
    </div>
  );
}
