import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Auditor & Engineering FAQ | Atlassian Forge Security & SOC 2 Compliance | Langtago",
  description:
    "Direct, technical answers for engineering leaders and security auditors. Learn how EvidenceLog runs 100% natively on Atlassian Forge with zero external data egress, enforces segregation of duties in Jira, satisfies SOC 2, ISO 27001, APRA, and DORA, and integrates with Vanta and Drata.",
  keywords: [
    "EvidenceLog FAQ",
    "Atlassian Forge zero data egress",
    "SOC 2 Jira audit questions",
    "segregation of duties Jira automation",
    "APRA CPS 234 Jira data residency",
    "DORA compliance Jira",
    "Vanta Jira change management sync",
    "auditor change sample questions",
  ],
  alternates: {
    canonical: "https://www.langtago.com/faq",
  },
  openGraph: {
    title: "Auditor & Engineering FAQ Hub | Langtago EvidenceLog",
    description:
      "Technical answers on Atlassian Forge microVMs, zero code retention, SHA-256 tamper evidence, and multi-framework audit automation.",
    url: "https://www.langtago.com/faq",
    siteName: "Langtago — EvidenceLog for Jira",
  },
};

export default function FAQLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}

