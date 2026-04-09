# Deploy broker-dealer site to Cloudflare Pages
# Usage: .\deploy-cloudflare.ps1

$projectName = "brokerdealer-unykorn"
$siteDir = "site"

Write-Host "Deploying $projectName to Cloudflare Pages..." -ForegroundColor Cyan
npx wrangler pages deploy $siteDir --project-name=$projectName --branch=production --commit-dirty=true
Write-Host "Done. Live at https://brokerdealer.unykorn.org" -ForegroundColor Green
