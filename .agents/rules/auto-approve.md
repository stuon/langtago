# Autonomous Ownership & Execution Policy

The agent has full ownership of the codebase and workflow. Execute end-to-end without waiting for manual confirmation or approval:

1. **Direct Implementation**:
   - Apply file edits, component creations, and bug fixes directly.
   - Do not ask for plan approval or permission before making changes.

2. **Automated Verification & Error Remediation (Pre-Commit Gate)**:
   - Run the project verification suite: npm run lint, npx tsc --noEmit, and npm run build.
   - If ANY lint, type-check, or build error is encountered, diagnose and fix it immediately before committing.
   - Never commit code with failing builds, TypeScript type errors, or lint violations.

3. **Autonomous Git Commits & Push to Main**:
   - Only after all build, lint, and test checks pass with zero errors, stage all changes (git add .).
   - Create a clean semantic commit message (feat: ..., fix: ..., chore: ...).
   - Push immediately to origin main (git push origin main) to keep the remote repository synchronized.

4. **Production Deployment**:
   - Deploy validated updates: ./scripts/deploy.sh production.
