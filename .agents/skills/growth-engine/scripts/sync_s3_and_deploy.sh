#!/bin/bash
set -e

# ==============================================================================
# Autonomous Growth Engine: S3 Sync & Production Deploy Pipeline
# ==============================================================================

PROJECT_ROOT="$(cd "$(dirname "${BASH_SOURCE[0]}")/../../.." && pwd)"
WEBSITE_DIR="$PROJECT_ROOT/langtago"
PUBLIC_DIR="$WEBSITE_DIR/public"

echo "=== 1. Quality Assurance Verification ==="
echo "▸ Running TypeScript compilation check..."
cd "$WEBSITE_DIR" && npx tsc --noEmit
echo "✔ TypeScript clean (0 errors)"

echo "▸ Running ESLint check..."
cd "$WEBSITE_DIR" && npm run lint
echo "✔ ESLint passed"

echo "=== 2. Optional S3 Cloud Storage Asset Sync ==="
if command -v aws &> /dev/null && [ -n "$S3_BUCKET_NAME" ]; then
  echo "▸ Syncing public media assets to s3://$S3_BUCKET_NAME/..."
  aws s3 sync "$PUBLIC_DIR" "s3://$S3_BUCKET_NAME/assets/" \
    --exclude ".DS_Store" \
    --cache-control "max-age=31536000,public"
  echo "✔ S3 sync complete"
else
  echo "ℹ S3 sync skipped (AWS CLI not configured or S3_BUCKET_NAME unset; serving via local public directory)"
fi

echo "=== 3. Production Build & Deployment ==="
if [ -f "$WEBSITE_DIR/scripts/deploy.sh" ]; then
  echo "▸ Executing production deployment script..."
  cd "$WEBSITE_DIR" && ./scripts/deploy.sh production "$@"
else
  echo "▸ Building Next.js production bundle..."
  cd "$WEBSITE_DIR" && npm run build
fi

echo "✔ Growth Engine deployment sequence finished successfully."
