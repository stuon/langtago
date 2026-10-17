import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import Script from "next/script";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
  display: "swap",
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
  display: "swap",
});

const GA_MEASUREMENT_ID = process.env.NEXT_PUBLIC_GA_ID || "G-3PVMVZ03ZQ";

export const metadata: Metadata = {
  metadataBase: new URL("https://langtago.com"),
  title: {
    default: "EvidenceLog for Jira — Continuous SOC 2 & Change Compliance | Langtago",
    template: "%s | Langtago",
  },
  description:
    "Automate SOC 2, ISO 27001, and HIPAA change management evidence directly inside Jira Cloud. 100% Atlassian Forge native with zero external data retention.",
  keywords: [
    "EvidenceLog",
    "Jira Cloud",
    "Atlassian Forge",
    "SOC 2 compliance",
    "change management audit",
    "CC8.1 evidence",
    "developer compliance",
    "Langtago",
    "tamper-evident audit trail",
  ],
  authors: [{ name: "Langtago", url: "https://langtago.com" }],
  creator: "Langtago Studio",
  publisher: "Langtago",
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://langtago.com",
    siteName: "Langtago — EvidenceLog for Jira",
    title: "EvidenceLog for Jira — Continuous SOC 2 Evidence Inside Jira",
    description:
      "Eliminate manual screenshotting for auditors. Automatically seal cryptographic change evidence directly inside Jira Cloud tickets via Atlassian Forge.",
  },
  twitter: {
    card: "summary_large_image",
    title: "EvidenceLog for Jira | Continuous SOC 2 Change Management",
    description:
      "Automated compliance evidence for engineering teams on Atlassian Jira Cloud.",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      data-scroll-behavior="smooth"
      className={`${geistSans.variable} ${geistMono.variable} dark scroll-smooth`}
    >
      <body className="bg-[#080b0f] text-zinc-100 min-h-screen flex flex-col selection:bg-emerald-500/20 selection:text-emerald-200">
        {GA_MEASUREMENT_ID && (
          <>
            <Script
              strategy="afterInteractive"
              src={`https://www.googletagmanager.com/gtag/js?id=${GA_MEASUREMENT_ID}`}
            />
            <Script
              id="google-analytics"
              strategy="afterInteractive"
            >
              {`
                window.dataLayer = window.dataLayer || [];
                function gtag(){dataLayer.push(arguments);}
                gtag('js', new Date());
                gtag('config', '${GA_MEASUREMENT_ID}', {
                  page_path: window.location.pathname,
                });
              `}
            </Script>
          </>
        )}
        {children}
      </body>
    </html>
  );
}
