# Video Walkthrough Script: How to Satisfy SOC 2 CC8.1 in Jira Without Manual Screenshots

**Target Audience**: VPs of Engineering, Engineering Managers, Security Officers (CISOs), Compliance Leads.  
**Format**: High-definition Loom / Screenflow with technical screen walkthrough.  
**Tone**: Authoritative, developer-first, frictionless, enterprise SaaS standard.  
**Length**: 90 seconds.  
**Topic**: Satisfying AICPA SOC 2 Type II Common Criteria 8.1 (Change Management) natively in Jira Cloud.  

---

### [00:00 - 00:15] Hook: The CC8.1 Audit Nightmare
* **Visual**: Camera starts on speaker, then transitions to an Excel spreadsheet titled `SOC_2_Change_Management_Samples_2026.xlsx` overflowing with broken screenshot links and Jira ticket keys.
* **Voiceover**:  
  > "Every engineering leader dreads the annual SOC 2 audit window. Your CPA firm hands you a list of 40 sampled Jira tickets, and your senior engineers lose three weeks tracking down GitHub PR links, taking approval screenshots, and proving segregation of duties. Today, we're putting an end to the CC8.1 screenshot tax."

---

### [00:15 - 00:35] The Technical Breakdown: The 5 Controls of CC8.1
* **Visual**: Smooth zoom into Jira Cloud ticket `DEMO-9: Deploy Payment Microservice v2`. The EvidenceLog Compliance panel is highlighted on the right sidebar. Five green verification badges light up sequentially.
* **Voiceover**:  
  > "Under AICPA CC8.1, auditors inspect five specific controls on every production change:
  > One: Clear business acceptance criteria.
  > Two: Traceable source code repository linkage to GitHub or GitLab.
  > Three: Segregation of duties—meaning the change author never self-approves.
  > Four: Independent QA verification.
  > And five: Automated SAST vulnerability scans."

---

### [00:35 - 00:55] The Preventive Gatekeeper in Action
* **Visual**: Developer demonstrates attempting to drag an unreviewed ticket to "Done". The native Jira Workflow Validator triggers a polite, informative banner: `[EvidenceLog Gatekeeper] Blocked: Author cannot self-approve; missing QA tag`.
* **Voiceover**:  
  > "Instead of finding out about missing approvals months later during an audit, EvidenceLog's Preventive Gatekeeper enforces policy at transition time. No ticket reaches production without meeting regulatory controls. And if something is missing, 1-click in-situ remediation fixes it in two seconds."

---

### [00:55 - 01:15] Cryptographic Immutability & The Project Audit Hub
* **Visual**: The developer clicks "Certify & Save Snapshot". The UI reveals the deterministic SHA-256 fingerprint: `sha256:9f83ac2b7c...`. Screen flips to the Jira Project Audit Hub, displaying project-wide readiness scorecards (100% Audit Ready) and the Release Binary Merkle Tree root.
* **Voiceover**:  
  > "Every certified ticket is sealed with an immutable SHA-256 hash stored directly inside your Atlassian Cloud instance. Sprint releases are hashed hierarchically into a binary Merkle tree. When your auditor asks for workpapers, one click generates Big 4-ready CSVs and formatted JSON that feeds directly into Vanta or Drata."

---

### [01:15 - 01:30] Zero Data Egress Guarantee & Call to Action
* **Visual**: Motion graphic highlighting Atlassian Forge badge: `Zero External Servers • Zero External Databases • Zero Data Egress`. Final screen displays `langtago.com/frameworks/soc2-cc81` and the Atlassian Marketplace badge.
* **Voiceover**:  
  > "Best of all: EvidenceLog runs 100% natively on Atlassian Forge. Your code, tickets, and developer names never leave your Atlassian Cloud boundary.
  > Install EvidenceLog for Jira free on the Atlassian Marketplace today, or read our complete CC8.1 engineering guide at langtago.com."

---

### Metadata & Distribution Channels:
* **Primary URL**: `https://langtago.com/frameworks/soc2-cc81`
* **Marketplace Listing**: `https://marketplace.atlassian.com` (Search: "EvidenceLog")
* **Recommended YouTube Title**: *How to Automate SOC 2 CC8.1 Change Controls in Jira Cloud (Zero Screenshots)*
* **Tags**: `#SOC2 #JiraCloud #AtlassianForge #DevSecOps #ComplianceAutomation #Vanta #Drata`
