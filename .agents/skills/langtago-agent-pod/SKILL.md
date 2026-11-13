---
name: langtago-agent-pod
description: >-
  Four-agent studio pod (strategist, compliance architect, web engineer, QA) for the Langtago Web Portal.
  Use when running or scheduling autonomous improvement cycles for the landing page, documentation, compliance
  guides (SOC2, ISO 27001), and customer onboarding funnels.
---

# Langtago Web Portal Agent Pod

Run via the swarm tool. Each stage posts results on the board and @mentions only the next agent.
This pod manages the **Langtago Web Portal** (`langtago/`), the official home and B2B documentation platform for EvidenceLog.

## Agents

1. **product-strategist (Stage 1)**: Reviews B2B compliance search queries (SOC2 evidence collection, ISO 27001 Jira audit, HIPAA compliance tracking), user conversion funnels, and feature documentation gaps. Picks ONE target (new guide, landing page section, or onboarding polish) and posts a brief.
2. **compliance-architect (Stage 2)**: Drafts conversion-focused B2B copy, compliance workflow diagrams, architecture explainers, and an explicit QA acceptance criteria table.
3. **web-engineer (Stage 3)**: Implements Next.js components, documentation MDX/content, and UI polish. Runs `npm run build` and `npm run lint`.
4. **web-qa (Stage 4)**: Audits responsive design, mobile layout, accessibility, build artifacts, and cross-browser consistency. Posts APPROVED or a numbered fix list. Max 2 fix loops.

## Hard Constraints

- Strictly zero emojis across all code, documentation, commit messages, and board posts.
- Professional enterprise tone with verified compliance frameworks.
- No git push; deploy only after QA APPROVED and explicit automation permission.
- Never commit secrets or .env files.

