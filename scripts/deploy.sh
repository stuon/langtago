#!/bin/bash
set -e

STAGE=$1

if [[ -z "$STAGE" ]]; then
  echo "❌ Usage: ./scripts/deploy.sh <staging|production>"
  exit 1
fi

ENV_FILE=".env.$STAGE"
# Default project id pattern; can be overridden by env file
PROJECT_ID="langtago-$STAGE"

if [[ ! -f $ENV_FILE ]]; then
  echo "❌ Missing $ENV_FILE"
  exit 1
fi

echo "🚀 Deploying to Firebase Hosting with stage: $STAGE"
echo "🔄 Using env file: $ENV_FILE"
echo "🔧 Firebase project: $PROJECT_ID"

# Load env vars from the stage env file
set -o allexport
source "$ENV_FILE"
set +o allexport

if [[ -z "$NEXT_PUBLIC_ENV" ]]; then
  echo "❌ Missing NEXT_PUBLIC_ENV in $ENV_FILE"
  exit 1
fi

# Allow env file to override Firebase project id
# Prefer FIREBASE_PROJECT_ID, then NEXT_PUBLIC_FIREBASE_PROJECT_ID, else default
if [[ -n "$FIREBASE_PROJECT_ID" ]]; then
  PROJECT_ID="$FIREBASE_PROJECT_ID"
elif [[ -n "$NEXT_PUBLIC_FIREBASE_PROJECT_ID" ]]; then
  PROJECT_ID="$NEXT_PUBLIC_FIREBASE_PROJECT_ID"
fi

echo "🌐 Environment: $NEXT_PUBLIC_ENV"
echo "🧹 Cleaning previous build..."
rm -rf .next out

echo "🏗  Building Next.js app with $ENV_FILE..."
npx dotenv -e "$ENV_FILE" -- npm run build

# Automatically sync public assets to S3 CDN on production
if [[ "$STAGE" == "production" ]] && [[ -f "./scripts/sync_assets_to_s3.sh" ]]; then
  echo "☁️  Syncing assets to S3 CDN..."
  ./scripts/sync_assets_to_s3.sh
fi

echo "🚚 Deploying to Firebase project: $PROJECT_ID..."
npx firebase use "$PROJECT_ID"
npx firebase deploy --only hosting

echo "✅ Deployment complete to $STAGE"
