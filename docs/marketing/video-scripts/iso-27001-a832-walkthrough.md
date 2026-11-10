# Video Walkthrough Script: Automate ISO 27001:2022 Control A.8.32 in Jira Cloud

**Target Audience**: CISOs, Engineering Directors, Compliance Leads, Lead ISO Auditors.  
**Format**: High-definition Loom / Screenflow technical walkthrough.  
**Tone**: Enterprise security standard, authoritative, direct, zero fluff.  
**Length**: 75 seconds.  
**Topic**: Satisfying ISO/IEC 27001:2022 Annex A Control 8.32 (Change Management) natively inside Atlassian Jira Cloud.  

---

### [00:00 - 00:15] Hook: The ISO 27001 Stage 2 Audit Trap
* **Visual**: Screen opens on a Lead Auditor review checklist with "ISO/IEC 27001:2022 Control A.8.32: Change Management" marked with a yellow warning triangle. Overlaid text: *Where is the documented rollback plan and independent peer sign-off for release v2.4?*
* **Voiceover**:  
  > "If your organization is undergoing ISO 27001:2022 certification, you know the dreaded Stage 2 audit request: lead auditors sampling 40 production changes, demanding proof of risk assessments, independent peer approvals, and pre-deployment fallback procedures. Taking screenshots of Jira tickets and GitHub PRs burns 140+ engineering hours every single year."

---

### [00:15 - 00:35] The Solution: Native ISO Control A.8.32 Automation
* **Visual**: Clean transition to a Jira Cloud issue (`PROD-2481: Upgrade Authentication Gateway to TLS 1.3`). EvidenceLog glance opens instantly on the right sidebar showing all 6 ISO dimensions verified: Planning, Business Rationale, Segregation of Duties, Staging QA, Rollback Strategy, and Tamper-Proof Seal.
* **Voiceover**:  
  > "EvidenceLog automates ISO 27001:2022 Control A.8.32 directly inside your Jira Cloud instance.
  > Our in-tenant engine verifies business justification, ensures the author did not self-approve the change, checks automated QA results, and verifies mandatory fallback rollback instructions before tickets can ever close."

---

### [00:35 - 00:55] Mandatory Fallback & Rollback Plan Verification
* **Visual**: Cursor highlights the "Fallback & Rollback Procedure" section in EvidenceLog. When an unformatted ticket lacks backout instructions, the developer clicks `[+ Append ISO Rollback Plan]`. The Jira description updates in real time with an audit-compliant template.
* **Voiceover**:  
  > "Under ISO 27001:2022, missing fallback plans are a primary cause of major audit non-conformities. EvidenceLog validates rollback instructions on every ticket. With 1-click in-situ quick-fixes, developers inject approved backout templates in two seconds—without opening 40-page policy manuals."

---

### [00:55 - 01:15] 1-Click Lead Auditor Workpapers & Zero Data Egress
* **Visual**: Screen shifts to the Jira Project Audit Hub. The user clicks "Download ISO 27001 Dossier". A structured CSV workpaper and canonical JSON file are generated instantly. The Atlassian Forge security badge highlights: `100% In-Tenant • Zero External Egress`.
* **Voiceover**:  
  > "When your BSI, TÜV, or registrar audit arrives, export complete ISO 27001 release dossiers in one click. Every ticket is sealed with a deterministic SHA-256 hash that auditors can verify offline. And because EvidenceLog is built 100% on Atlassian Forge, zero customer code or data ever leaves your Atlassian Cloud boundary."

---

### [01:15 - 01:25] Call to Action
* **Visual**: Clean end card displaying `langtago.com/frameworks/iso-27001-a832` alongside the Atlassian Marketplace install badge.
* **Voiceover**:  
  > "Pass your next ISO 27001 surveillance audit with zero findings. Install EvidenceLog for Jira free on the Atlassian Marketplace today, or read our full technical guide at langtago.com."

---

### Distribution & Metadata:
* **Primary URL**: `https://langtago.com/frameworks/iso-27001-a832`
* **Marketplace Listing**: Atlassian Marketplace (Search: "EvidenceLog")
* **Recommended YouTube/LinkedIn Title**: *How to Satisfy ISO 27001:2022 Control A.8.32 in Jira Cloud (Zero Screenshots)*
* **Keywords**: `#ISO27001 #JiraCloud #ComplianceAutomation #ChangeManagement #DevSecOps #AtlassianForge`
