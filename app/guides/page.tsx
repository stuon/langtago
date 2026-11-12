import Link from "next/link";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import {
  ArrowRight,
  ArrowLeft,
  Clock,
  Sparkles,
  BookOpen,
} from "lucide-react";

export const metadata = {
  title: "Engineering Guides & Compliance Blueprints | Langtago EvidenceLog",
  description:
    "Practical, no-fluff technical playbooks for engineering managers, DevOps leads, and CTOs navigating SOC 2, ISO 27001, APRA CPS 234, and DORA change management audits in Jira Cloud.",
  keywords: [
    "SOC 2 Jira engineering guide",
    "ISO 27001 change management blueprint",
    "APRA CPS 234 Jira compliance",
    "DORA ICT change control guide",
    "DevOps compliance playbook",
    "Jira audit workpapers automation",
  ],
  openGraph: {
    title: "Engineering Guides & Compliance Blueprints | Langtago",
    description:
      "Practical technical guides for engineering teams navigating SOC 2, ISO 27001, APRA CPS 234, and DORA change management audits without manual screenshotting.",
    url: "https://langtago.com/guides",
    siteName: "Langtago — EvidenceLog for Jira",
  },
};

export default function GuidesHubPage() {
  const articles = [
    {
      category: "DEVOPS & AUDIT ANALYSIS",
      title: "Why GitHub branch protection rules don't satisfy your SOC 2 auditor (and what does)",
      description:
        "Branch protection enforces code review inside Git. But your auditor audits Jira. Here is why the disconnect happens during sample testing, the 3 blind spots that trigger audit findings, and how to bridge the gap without taking 100 manual screenshots.",
      href: "/guides/why-github-branch-protection-fails-soc2",
      readTime: "8 min read",
      date: "Nov 12, 2026",
      featured: true,
      tag: "Flagship Deep Dive",
    },
    {
      category: "SOC 2 TYPE II AUDIT PLAYBOOK",
      title: "The 40-sample SOC 2 change management audit: How to pass without 150 hours of screenshots",
      description:
        "Every SOC 2 Type II audit begins with the dreaded 40-sample change request list. Learn the exact 5 criteria auditors inspect on every Jira ticket, where teams fail, and how to automate the evidence in Jira Cloud.",
      href: "/guides/soc2-change-management-40-sample-audit",
      readTime: "9 min read",
      date: "Nov 12, 2026",
      featured: true,
      tag: "Audit Playbook",
    },
    {
      category: "US & GLOBAL FRAMEWORKS",
      title: "Automate SOC 2 CC8.1 change management controls in Jira Cloud",
      description:
        "A practical technical blueprint for engineering teams to eliminate manual screenshotting and satisfy AICPA SOC 2 Type II Criterion CC8.1 natively inside Jira Cloud with SHA-256 seals.",
      href: "/frameworks/soc2-cc81",
      readTime: "12 min read",
      date: "Nov 8, 2026",
      featured: false,
      tag: "SOC 2 CC8.1",
    },
    {
      category: "INTERNATIONAL STANDARDS",
      title: "Automate ISO/IEC 27001:2022 Control A.8.32 in Jira Cloud",
      description:
        "How engineering teams satisfy ISO 27001:2022 Annex A Control 8.32 (Change Management). Automate risk assessments, segregation of duties, rollback fallback plans, and audit workpapers.",
      href: "/frameworks/iso-27001-a832",
      readTime: "14 min read",
      date: "Nov 10, 2026",
      featured: false,
      tag: "ISO 27001 A.8.32",
    },
    {
      category: "AUSTRALIA & APAC",
      title: "Automate APRA CPS 234 & Essential Eight in Jira Cloud",
      description:
        "How Australian banks, super funds, insurers, and fintechs satisfy APRA CPS 234 Paragraphs 23–27 and Essential Eight application controls with 100% Sydney Data Residency (ap-southeast-2).",
      href: "/frameworks/apra-cps-234",
      readTime: "10 min read",
      date: "Nov 11, 2026",
      featured: false,
      tag: "APRA CPS 234",
    },
    {
      category: "EUROPE & UK",
      title: "Automate DORA (EU 2022/2554) & UK FCA ICT change controls in Jira",
      description:
        "Technical blueprint for European and UK financial entities and ICT providers to automate DORA Articles 9 & 11 and UK FCA/PRA SS1/21 operational resilience with Frankfurt and London residency.",
      href: "/frameworks/dora-compliance",
      readTime: "11 min read",
      date: "Nov 11, 2026",
      featured: false,
      tag: "DORA & UK FCA",
    },
    {
      category: "ROI & BENCHMARKS",
      title: "Manual PR Screenshots vs. Automated Evidence: The $11,900 Spreadsheet Tax",
      description:
        "Side-by-side technical breakdown of manual audit preparation vs. automated in-tenant evidence sealing. How engineering teams waste 140+ hours per audit cycle on screenshotting.",
      href: "/compare/manual-screenshots-vs-evidencelog",
      readTime: "7 min read",
      date: "Nov 7, 2026",
      featured: false,
      tag: "ROI Analysis",
    },
  ];

  return (
    <div className="relative min-h-screen bg-white font-sans text-[#5c728e] selection:bg-[#dbf1c3] selection:text-[#0f5132]">
      {/* Global Navigation */}
      <Navbar isProductPage={false} />

      <main className="relative pt-10 pb-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          {/* Breadcrumb */}
          <div className="flex items-center gap-2 text-xs font-semibold text-[#5c728e] mb-6">
            <Link href="/" className="hover:text-[#111013] transition-colors flex items-center gap-1">
              <ArrowLeft className="h-3.5 w-3.5" />
              <span>EvidenceLog</span>
            </Link>
            <span>/</span>
            <span className="text-[#111013] font-bold">Engineering Guides</span>
          </div>

          {/* Section Header */}
          <div className="max-w-3xl mb-12">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#dbf1c3]/70 border border-[#b8e29a] text-[#15803d] font-bold text-xs uppercase tracking-wider mb-4 font-heading">
              <BookOpen className="h-3.5 w-3.5 text-[#15803d]" />
              <span>PRACTITIONER GUIDES FOR DEVOPS &amp; SECURITY LEADS</span>
            </div>
            <h1 className="text-3xl sm:text-5xl font-bold tracking-tight text-[#111013] font-heading leading-tight mb-4">
              Real engineering guides for modern change audits
            </h1>
            <p className="text-base sm:text-lg text-[#5c728e] leading-relaxed">
              No consulting jargon. No generic marketing fluff. Just technical architectures, audit testing realities, and step-by-step blueprints written by engineers who have sat in the audit hot seat.
            </p>
          </div>

          {/* Featured Article Card */}
          {articles
            .filter((a) => a.featured)
            .map((article, idx) => (
              <div
                key={idx}
                className="mb-12 rounded-3xl border border-slate-200/90 bg-gradient-to-br from-slate-50 via-white to-emerald-50/20 p-8 sm:p-10 shadow-md hover:shadow-xl hover:border-[#15803d]/40 transition-all duration-300"
              >
                <div className="flex flex-wrap items-center justify-between gap-2 mb-4">
                  <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-[#111013] text-[#dbf1c3] text-xs font-bold font-mono">
                    <Sparkles className="h-3 w-3" />
                    <span>{article.tag}</span>
                  </span>
                  <div className="flex items-center gap-3 text-xs text-[#5c728e]">
                    <span>{article.date}</span>
                    <span>&bull;</span>
                    <span className="flex items-center gap-1">
                      <Clock className="h-3 w-3 text-[#15803d]" />
                      <span>{article.readTime}</span>
                    </span>
                  </div>
                </div>

                <Link href={article.href} className="group block">
                  <h2 className="text-2xl sm:text-4xl font-bold text-[#111013] font-heading leading-snug group-hover:text-[#15803d] transition-colors mb-4">
                    {article.title}
                  </h2>
                  <p className="text-sm sm:text-base text-[#5c728e] leading-relaxed mb-6 max-w-4xl">
                    {article.description}
                  </p>
                </Link>

                <div className="flex items-center gap-4 pt-2">
                  <Link
                    href={article.href}
                    className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl bg-[#111013] text-white hover:bg-[#15803d] font-semibold text-xs transition-all shadow-xs"
                  >
                    <span>Read Full Guide</span>
                    <ArrowRight className="h-3.5 w-3.5" />
                  </Link>
                </div>
              </div>
            ))}

          {/* Grid of Other Guides */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {articles
              .filter((a) => !a.featured)
              .map((article, idx) => (
                <div
                  key={idx}
                  className="rounded-2xl border border-slate-200/90 bg-white p-6 shadow-xs hover:border-[#15803d]/40 hover:shadow-md transition-all flex flex-col justify-between group"
                >
                  <div>
                    <div className="flex items-center justify-between gap-2 mb-3">
                      <span className="text-[10px] font-bold font-mono text-[#15803d] uppercase tracking-wider">
                        {article.category}
                      </span>
                      <span className="text-[11px] text-[#5c728e]">{article.readTime}</span>
                    </div>

                    <Link href={article.href} className="block">
                      <h3 className="text-base sm:text-lg font-bold text-[#111013] font-heading leading-snug group-hover:text-[#15803d] transition-colors mb-2.5">
                        {article.title}
                      </h3>
                      <p className="text-xs text-[#5c728e] leading-relaxed mb-4">
                        {article.description}
                      </p>
                    </Link>
                  </div>

                  <div className="pt-4 border-t border-slate-100 flex items-center justify-between">
                    <span className="text-[11px] text-slate-400 font-medium">{article.date}</span>
                    <Link
                      href={article.href}
                      className="text-xs font-bold text-[#15803d] group-hover:text-[#111013] transition-colors inline-flex items-center gap-1"
                    >
                      <span>Read Guide</span>
                      <ArrowRight className="h-3 w-3" />
                    </Link>
                  </div>
                </div>
              ))}
          </div>

          {/* Bottom Callout */}
          <div className="mt-16 rounded-2xl bg-slate-900 text-white p-8 flex flex-col sm:flex-row items-center justify-between gap-6">
            <div>
              <h3 className="text-xl font-bold font-heading text-white mb-2">
                Have an upcoming SOC 2, ISO 27001, or APRA audit?
              </h3>
              <p className="text-xs sm:text-sm text-slate-300 max-w-xl leading-relaxed">
                Install EvidenceLog free on Jira Cloud. Free for squads up to 10 users with no credit card required. All data stays 100% inside your Jira Cloud tenant.
              </p>
            </div>
            <a
              href="https://marketplace.atlassian.com"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2 px-6 py-3 rounded-xl bg-[#dbf1c3] text-[#111013] hover:bg-white font-bold text-xs transition-all shadow-md cursor-pointer whitespace-nowrap"
            >
              <span>Install Free on Marketplace</span>
              <ArrowRight className="h-4 w-4" />
            </a>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
}
