# Video Walkthrough Script: Never Fail a Change Management Test in Vanta & Drata Again

**Target Audience**: Engineering Managers, CISOs, Compliance Officers, DevSecOps Leads.  
**Format**: Loom / YouTube Demo with high-contrast screen capture & picture-in-picture.  
**Tone**: Authoritative, fast-paced, developer-friendly, zero fluff.  
**Length**: 60 seconds.  

---

### [00:00 - 00:12] Hook: The Dread of Red Tests in Vanta & Drata
* **Visual**: Close-up of a Vanta / Drata compliance dashboard showing a red alert badge: *"Failing Test: Change Management Authorization & Segregation of Duties (18 issues)"*. The compliance manager looks stressed 48 hours before an audit.
* **Audio / VO**:  
  > "If your company uses Vanta or Drata for SOC 2 or ISO 27001, you know the panic of opening your dashboard and seeing dozens of failing change management tests. A developer forgot to link their PR, or someone self-approved their own code."

---

### [00:12 - 00:26] The Root Cause in Jira: Passive Issue Tracking
* **Visual**: Quick switch to Atlassian Jira Cloud. An engineer drags a ticket `PROJ-1042` to "Done". Without EvidenceLog, Jira lets anything close.
* **Audio / VO**:  
  > "Why does this happen? Because standard Jira doesn't enforce compliance rules. Fast-moving engineers push code, tickets close, and months later your GRC tool flags the exceptions right when auditors arrive."

---

### [00:26 - 00:44] The Solution: EvidenceLog In-Situ Enforcement
* **Visual**: Developer tries to move ticket `PROJ-1042` to "Done". EvidenceLog's Preventive Gatekeeper intercepts the transition: *"Blocked: Missing QA Sign-Off & Independent Peer Review"*. The developer clicks the 1-click `[+ Apply QA Verified]` button inside the ticket panel.
* **Audio / VO**:  
  > "EvidenceLog fixes this at the source. Directly inside Jira Cloud, it acts as an in-situ preventive gatekeeper. It programmatically blocks tickets from closing until acceptance criteria, Git PR links, independent peer review, and QA verification are satisfied. 1-click buttons let developers fix missing items in seconds."

---

### [00:44 - 00:60] The Result: 100% Green Vanta & Drata Tests + CTA
* **Visual**: The ticket transitions smoothly to "Done". A tamper-evident SHA-256 seal is generated. The Vanta and Drata dashboards refresh, turning 100% green. The user opens the 7-Tab Export Drawer showing instant Vanta Schema v1.0 and Drata v2 JSON payloads.
* **Audio / VO**:  
  > "The result? Every single ticket deployed to production is certified. Your Vanta and Drata change management tests stay permanently green. And because EvidenceLog runs 100% on Atlassian Forge, there's zero data egress and zero vendor risk. Install EvidenceLog free on the Atlassian Marketplace today at langtago.com."

---

### Production Notes:
* **Primary Keywords**: Vanta Jira integration, Drata change evidence, SOC 2 CC8.1 Jira, Atlassian Forge compliance.
* **Call to Action**: Search "EvidenceLog" on Atlassian Marketplace or visit `langtago.com/integrations/vanta-drata`.
* **Platform Distribution**: LinkedIn Video, YouTube Shorts, Atlassian Community Showcase, X/Twitter.
