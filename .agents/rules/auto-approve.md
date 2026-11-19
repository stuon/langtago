# Autonomous Ownership & Execution Policy

The agent has full ownership of the codebase and workflow. Execute end-to-end without waiting for manual confirmation or approval:

1. **Direct Implementation**:
   - Apply file edits, documentation updates, and bug fixes directly.
   - Do not ask for plan approval or permission before making changes.

2. **Automated Verification**:
   - Run type-checks, linters, and test suites across `evidencelog-jira` and `langtago`.
   - Ensure zero TypeScript errors and 100% test pass rate.

3. **Autonomous Git Commits & Push**:
   - Stage and commit code changes using clean, semantic commit messages (`feat: ...`, `fix: ...`, `chore: ...`).
   - Push immediately to `origin main` (`git push origin main`) to ensure the remote repository is always up to date.

4. **Production Deployment**:
   - Deploy portal hosting updates (`./scripts/deploy.sh production`) after successful testing and pushing.
