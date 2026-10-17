#!/bin/bash
set -e

# ==============================================================================
# Langtago Firebase Deployment Pipeline
# Usage: ./scripts/deploy.sh <staging|production> [--dry-run]
# ==============================================================================

STAGE=$1
FLAG=$2
START_TIME=$(date +%s)

# Text styling
BOLD="\033[1m"
GREEN="\033[0;32m"
CYAN="\033[0;36m"
YELLOW="\033[0;33m"
RED="\033[0;31m"
DIM="\033[2m"
RESET="\033[0m"

log_info()    { echo -e "${CYAN}ℹ${RESET}  $1"; }
log_success() { echo -e "${GREEN}✔${RESET}  ${BOLD}$1${RESET}"; }
log_warn()    { echo -e "${YELLOW}⚠${RESET}  $1"; }
log_error()   { echo -e "${RED}✖${RESET}  ${BOLD}$1${RESET}"; }
log_step()    { echo -e "\n${BOLD}${CYAN}▸ $1${RESET}"; }

if [[ -z "$STAGE" || ("$STAGE" != "staging" && "$STAGE" != "production") ]]; then
  echo -e "${RED}${BOLD}Error:${RESET} Invalid or missing target stage."
  echo -e "Usage:   ${BOLD}./scripts/deploy.sh <staging|production> [--dry-run]${RESET}"
  echo -e "Example: ${DIM}npm run deploy:production${RESET}"
  exit 1
fi

ENV_FILE=".env.$STAGE"
PROJECT_ID="langtago-$STAGE"

STAGE_UPPER=$(echo "$STAGE" | tr '[:lower:]' '[:upper:]')

echo -e "${BOLD}======================================================${RESET}"
echo -e "${BOLD} 🚀 Langtago Deployment Engine: ${GREEN}${STAGE_UPPER}${RESET}"
echo -e "${BOLD}======================================================${RESET}"

# 1. Environment Verification
log_step "Step 1: Validating configuration & environment..."

if [[ ! -f "$ENV_FILE" ]]; then
  log_error "Missing environment file: ${BOLD}$ENV_FILE${RESET}"
  echo -e "Please ensure ${BOLD}$ENV_FILE${RESET} exists in the project root."
  exit 1
fi

# Load variables securely from stage file
set -o allexport
# shellcheck disable=SC1090
source "$ENV_FILE"
set +o allexport

if [[ -z "$NEXT_PUBLIC_ENV" ]]; then
  log_error "Missing required variable ${BOLD}NEXT_PUBLIC_ENV${RESET} in $ENV_FILE"
  exit 1
fi

# Resolve project ID
if [[ -n "$FIREBASE_PROJECT_ID" ]]; then
  PROJECT_ID="$FIREBASE_PROJECT_ID"
elif [[ -n "$NEXT_PUBLIC_FIREBASE_PROJECT_ID" ]]; then
  PROJECT_ID="$NEXT_PUBLIC_FIREBASE_PROJECT_ID"
fi

log_info "Loaded env file:     ${BOLD}$ENV_FILE${RESET}"
log_info "Target Environment:  ${BOLD}$NEXT_PUBLIC_ENV${RESET}"
log_info "Firebase Project ID: ${BOLD}$PROJECT_ID${RESET}"

# 2. Pre-flight Checks
log_step "Step 2: Running pre-flight system checks..."

# Check git status for production
if [[ "$STAGE" == "production" ]]; then
  if [[ -n $(git status --porcelain 2>/dev/null) ]]; then
    log_warn "Uncommitted git changes detected in working tree."
    log_warn "Proceeding with deployment of current local files..."
  else
    COMMIT_HASH=$(git rev-parse --short HEAD 2>/dev/null || echo "unknown")
    log_info "Git commit:          ${BOLD}$COMMIT_HASH${RESET}"
  fi
fi

# Check Firebase CLI
if ! npx firebase --version &>/dev/null; then
  log_error "Firebase CLI is not accessible via npx. Run 'npm install' first."
  exit 1
fi
log_info "Firebase CLI:        ${BOLD}$(npx firebase --version)${RESET}"

# 3. Clean Cache
log_step "Step 3: Cleaning prior build artifacts (.next, out)..."
rm -rf .next out
log_success "Workspace clean"

# 4. Build Next.js Static Export
log_step "Step 4: Compiling Next.js static export with $ENV_FILE..."
npx dotenv -e "$ENV_FILE" -- npm run build

# Verify build output
if [[ ! -d "out" || ! -f "out/index.html" ]]; then
  log_error "Build failed: Expected export directory 'out/index.html' was not generated."
  exit 1
fi

PAGE_COUNT=$(find out -maxdepth 2 -name "*.html" | wc -l | tr -d ' ')
OUT_SIZE=$(du -sh out | cut -f1)
log_success "Build complete: $PAGE_COUNT static HTML pages generated ($OUT_SIZE total in 'out/')"

# 5. Dry-run gate
if [[ "$FLAG" == "--dry-run" ]]; then
  echo -e "\n${YELLOW}${BOLD}⚠ DRY RUN COMPLETE${RESET}"
  log_info "Build succeeded and verified. Skipped upload to Firebase Hosting."
  exit 0
fi

# 6. Deploy to Firebase Hosting
log_step "Step 5: Deploying static bundle to Firebase ($PROJECT_ID)..."
npx firebase use "$PROJECT_ID"
npx firebase deploy --only hosting

END_TIME=$(date +%s)
DURATION=$((END_TIME - START_TIME))

echo -e "\n${BOLD}======================================================${RESET}"
log_success "Deployment successfully finished in ${DURATION}s!"
echo -e "${BOLD}Target Stage:${RESET}    $STAGE"
echo -e "${BOLD}Firebase App:${RESET}    $PROJECT_ID"
echo -e "${BOLD}Serving Root:${RESET}    out/ (${PAGE_COUNT} pages, ${OUT_SIZE})"
echo -e "${BOLD}======================================================${RESET}\n"
