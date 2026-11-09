# Langtago Growth & Profitability Ledger

This ledger tracks the autonomous daily improvements, experiments, content additions, and deployment records executed by the **Daily Website Growth & Profitability Engine**.

---

## Growth Metric Targets
* **North Star Metric**: Atlassian Marketplace Installs & Qualified Enterprise Trials.
* **Conversion Rate Target**: 3.5%+ visitor-to-install conversion rate.
* **Organic Search (SEO)**: Rank #1 for "Jira SOC 2 evidence", "Jira change management compliance", and "automate CC8.1 Jira".

---

## Experiment & Deployment History

### [Initial Setup] Autonomous Growth Engine Activated
* **Date**: November 7, 2026
* **Category**: Infrastructure & Skill Setup
* **Actions Taken**:
  - Authored workspace growth skill: [`.agents/skills/growth-engine/SKILL.md`](file:///Volumes/Projects/dev/langtago-evidencelog/.agents/skills/growth-engine/SKILL.md).
  - Created S3 asset sync & automated deploy pipeline script: [`scripts/sync_s3_and_deploy.sh`](file:///Volumes/Projects/dev/langtago-evidencelog/.agents/skills/growth-engine/scripts/sync_s3_and_deploy.sh).
  - Configured 8:00 PM daily automation (`CRON_TZ=Australia/Melbourne 0 20 * * *`).
* **Active Growth Backlog for Upcoming Runs**:
  1. *CRO*: Build an interactive **Auditor ROI Calculator** (Hours saved per audit cycle). [COMPLETED]
  2. *SEO Content*: Author comprehensive guide: *"The Complete Guide to SOC 2 CC8.1 Change Controls in Jira"*.
  3. *Multimedia*: Generate video walkthrough demo script (Loom style) for developer 1-click remediation. [COMPLETED]
  4. *Comparisons*: Create high-intent comparison matrix vs. manual evidence collection.

### [Growth Cycle 01] Interactive Compliance & Auditor ROI Calculator + Multimedia Marketing Suite
* **Date**: November 7, 2026 (Evening Execution)
* **Category**: Conversion Rate Optimization (CRO), Interactive Engagement & Multimedia Marketing
* **Experiment Deployed**:
  - Engineered and shipped an interactive **Auditor ROI & Time-Savings Calculator** ([`RoiCalculator.tsx`](file:///Volumes/Projects/dev/langtago-evidencelog/langtago/components/RoiCalculator.tsx)) on the homepage between core capabilities (`BentoGrid`) and pricing (`Pricing`).
  - Implemented dynamic sliders for **Engineering Squad Size** (5–150 devs), **Monthly Production Releases** (2–60), **Annual Audit Sample Pulls** (10–80 tickets), and **Blended Dev Hourly Rate** ($50–$150/hr).
  - Configured live calculations for annual manual hours wasted (sample prep + release checks + auditor inquiries), financial loss, net savings, and ROI multiplier (up to 35x+ ROI vs. Pro tier), paired with direct Marketplace install CTAs and sample report review modals.
  - Updated desktop and mobile navigation in [`Navbar.tsx`](file:///Volumes/Projects/dev/langtago-evidencelog/langtago/components/Navbar.tsx) and bidirectional jump links in [`Pricing.tsx`](file:///Volumes/Projects/dev/langtago-evidencelog/langtago/components/Pricing.tsx).
  - Added high-intent objection buster in [`FAQ.tsx`](file:///Volumes/Projects/dev/langtago-evidencelog/langtago/components/FAQ.tsx) answering audit window time savings and financial return.
  - Authored a 60-second Loom screen recording walkthrough script in [`1-click-remediation-demo.md`](file:///Volumes/Projects/dev/langtago-evidencelog/langtago/docs/marketing/video-scripts/1-click-remediation-demo.md) showcasing developer in-situ 1-click remediation.
  - Authored 30s/60s host-read podcast ad copy in [`soc2-screenshot-tax.md`](file:///Volumes/Projects/dev/langtago-evidencelog/langtago/docs/marketing/audio-briefs/soc2-screenshot-tax.md) targeting engineering leaders on developer podcasts (Syntax, Changelog).
  - Resolved build sandbox isolation for Next.js 16 webpack static export and configured robust configstore path handling in deployment pipeline scripts.
* **Hypothesis**:
  - Providing engineering leaders with an interactive self-service model to quantify their exact engineering hours lost to manual audit screenshotting will reduce evaluation friction, increase time-on-page by 40%+, and boost visitor-to-Marketplace install conversion rate by 25–35%.
* **Files Modified**:
  - [`langtago/components/RoiCalculator.tsx`](file:///Volumes/Projects/dev/langtago-evidencelog/langtago/components/RoiCalculator.tsx)
  - [`langtago/app/page.tsx`](file:///Volumes/Projects/dev/langtago-evidencelog/langtago/app/page.tsx)
  - [`langtago/components/Navbar.tsx`](file:///Volumes/Projects/dev/langtago-evidencelog/langtago/components/Navbar.tsx)
  - [`langtago/components/Pricing.tsx`](file:///Volumes/Projects/dev/langtago-evidencelog/langtago/components/Pricing.tsx)
  - [`langtago/components/FAQ.tsx`](file:///Volumes/Projects/dev/langtago-evidencelog/langtago/components/FAQ.tsx)
  - [`langtago/app/layout.tsx`](file:///Volumes/Projects/dev/langtago-evidencelog/langtago/app/layout.tsx)
  - [`langtago/app/globals.css`](file:///Volumes/Projects/dev/langtago-evidencelog/langtago/app/globals.css)
  - [`langtago/package.json`](file:///Volumes/Projects/dev/langtago-evidencelog/langtago/package.json)
  - [`langtago/scripts/deploy.sh`](file:///Volumes/Projects/dev/langtago-evidencelog/langtago/scripts/deploy.sh)
  - [`.agents/skills/growth-engine/scripts/sync_s3_and_deploy.sh`](file:///Volumes/Projects/dev/langtago-evidencelog/.agents/skills/growth-engine/scripts/sync_s3_and_deploy.sh)
  - [`langtago/docs/marketing/video-scripts/1-click-remediation-demo.md`](file:///Volumes/Projects/dev/langtago-evidencelog/langtago/docs/marketing/video-scripts/1-click-remediation-demo.md)
  - [`langtago/docs/marketing/audio-briefs/soc2-screenshot-tax.md`](file:///Volumes/Projects/dev/langtago-evidencelog/langtago/docs/marketing/audio-briefs/soc2-screenshot-tax.md)
* **Next Day's Backlog**:
  1. *SEO / Content*: Create dedicated technical landing page: `/frameworks/soc2-cc81` detailing exact control mapping for Jira Cloud, Forge native execution, and audit-ready workpapers. [COMPLETED]
  2. *CRO / Social Proof*: Add an interactive "Manual vs. Sealed Evidence" comparison matrix component on `/compare/manual-screenshots-vs-evidencelog`.
  3. *Multimedia*: Produce animated GIF / video asset from the 1-click remediation walkthrough for insertion above the fold.

### [Growth Cycle 02] High-Intent SOC 2 CC8.1 Technical SEO Pillar & Security Architecture Suite
* **Date**: November 8, 2026 (Evening Execution)
* **Category**: Content & SEO Authority, Conversion Rate Optimization (CRO) & Enterprise Security Trust
* **Experiment Deployed**:
  - Engineered and published dedicated high-converting SEO pillar landing page: [`/frameworks/soc2-cc81`](file:///Volumes/Projects/dev/langtago-evidencelog/langtago/app/frameworks/soc2-cc81/page.tsx) titled *"Automate SOC 2 CC8.1 in Jira Cloud: The Complete Engineering Guide"*.
  - Authored a comprehensive technical breakdown of AICPA SOC 2 Type II Common Criteria 8.1 across all 5 mandatory points of focus (CC8.1.1 Business Authorization, CC8.1.2 Code Traceability, CC8.1.3 Segregation of Duties / CC6.8, CC8.1.4 QA Verification / ISO 27001 A.8.29, CC8.1.5 SAST Security / CC7.1).
  - Built an interactive **Control Mapping Matrix** contrasting traditional CPA auditor expectations with EvidenceLog automated in-situ verification rules.
  - Documented the **Preventive Workflow Gatekeeper** architecture (`jira:workflowValidator`) showing how non-compliant transitions to "Done" are programmatically blocked with 1-click remediation buttons.
  - Provided live previews of canonical JSON audit payloads, deterministic SHA-256 fingerprints, and consolidated Big 4 CSV workpaper schemas.
  - Embedded JSON-LD structured data (`TechArticle` schema + `FAQPage` schema) to capture rich snippet rankings on Google for high-intent search queries.
  - Engineered and deployed the dedicated Enterprise Security Architecture page: [`/security`](file:///Volumes/Projects/dev/langtago-evidencelog/langtago/app/security/page.tsx), resolving footer broken links and detailing the 6 core architectural guarantees (100% in-tenant Atlassian Forge microVM isolation, encrypted `@forge/kvs` storage, zero outbound network egress, geographic data residency inheritance, zero LLM training ingestion, and offline zero-trust browser verifier).
  - Updated desktop and mobile navigation in [`Navbar.tsx`](file:///Volumes/Projects/dev/langtago-evidencelog/langtago/components/Navbar.tsx) with a direct "SOC 2 Guide" link and updated compliance cross-links in [`Footer.tsx`](file:///Volumes/Projects/dev/langtago-evidencelog/langtago/components/Footer.tsx).
  - Authored a 90-second technical screen recording video script in [`soc2-cc81-walkthrough.md`](file:///Volumes/Projects/dev/langtago-evidencelog/langtago/docs/marketing/video-scripts/soc2-cc81-walkthrough.md) targeting VPs of Engineering and CISOs on LinkedIn, YouTube, and developer communities.
  - Verified TypeScript compilation (`npx tsc --noEmit` passed with 0 errors) and ESLint (`npm run lint` passed with 0 errors).
  - Built production bundle (10 static HTML export pages, 9.1MB) and executed production deployment to Firebase Hosting (`langtago-production-69ec3.web.app`) in 22s.
* **Hypothesis**:
  - Ranking for high-intent search terms like "SOC 2 CC8.1 Jira", "CC8.1 change management evidence", and "automate CC8.1 Jira Cloud" captures technical buyers at the exact moment of audit friction, increasing organic search impressions by 35–50% and driving high-converting Atlassian Marketplace installs.
* **Files Modified & Created**:
  - [`langtago/app/frameworks/soc2-cc81/page.tsx`](file:///Volumes/Projects/dev/langtago-evidencelog/langtago/app/frameworks/soc2-cc81/page.tsx) (New High-Converting SEO Pillar)
  - [`langtago/app/security/page.tsx`](file:///Volumes/Projects/dev/langtago-evidencelog/langtago/app/security/page.tsx) (New Enterprise Trust & Security Architecture Page)
  - [`langtago/components/Navbar.tsx`](file:///Volumes/Projects/dev/langtago-evidencelog/langtago/components/Navbar.tsx)
  - [`langtago/components/Footer.tsx`](file:///Volumes/Projects/dev/langtago-evidencelog/langtago/components/Footer.tsx)
  - [`langtago/docs/marketing/video-scripts/soc2-cc81-walkthrough.md`](file:///Volumes/Projects/dev/langtago-evidencelog/langtago/docs/marketing/video-scripts/soc2-cc81-walkthrough.md) (New Multimedia Walkthrough Script)
  - [`docs/growth/daily_growth_ledger.md`](file:///Volumes/Projects/dev/langtago-evidencelog/docs/growth/daily_growth_ledger.md)
* **Next Day's Backlog**:
  1. *CRO / Social Proof*: Build `/compare/manual-screenshots-vs-evidencelog` interactive comparison matrix contrasting manual screenshotting costs with automated EvidenceLog sealing.
  2. *SEO / Content*: Author dedicated technical landing page: `/frameworks/iso-27001-a832` detailing change management controls for ISO/IEC 27001:2022.
  3. *Integrations / GRC*: Create dedicated integration landing page: `/integrations/vanta-drata` detailing seamless automated evidence packet exports.

