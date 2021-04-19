#!/usr/bin/env zsh

# Run the build
echo 'Building the application';
npm run build;

# Sync to S3
printf '\n\n';
echo "Deploying to S3 (energy-explorer.open-energy-engine.org)..."
aws s3 sync build/ s3://energy-explorer.open-energy-engine.org

# Invalidate CloudFront cache
printf '\n\n';
echo 'Invalidating CloudFront cache';
aws cloudfront create-invalidation --distribution-id E1IRJNTXY7DFJ3 --paths "/*"
