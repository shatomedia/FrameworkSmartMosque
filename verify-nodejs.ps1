# ✅ Quick Node.js Installation Verification
# Run this after installing Node.js to verify everything works

Write-Host "🔍 Quick Node.js Verification" -ForegroundColor Cyan
Write-Host "=============================" -ForegroundColor Cyan
Write-Host ""

# Test Node.js
try {
    $nodeVersion = node --version
    Write-Host "✅ Node.js: $nodeVersion" -ForegroundColor Green
    $nodeOK = $true
} catch {
    Write-Host "❌ Node.js: Not installed or not in PATH" -ForegroundColor Red
    $nodeOK = $false
}

# Test npm
try {
    $npmVersion = npm --version
    Write-Host "✅ npm: $npmVersion" -ForegroundColor Green
    $npmOK = $true
} catch {
    Write-Host "❌ npm: Not installed or not in PATH" -ForegroundColor Red
    $npmOK = $false
}

Write-Host ""

# Test if we can access package registry
Write-Host "🌐 Testing npm registry access..." -ForegroundColor Yellow
try {
    npm ping
    Write-Host "✅ npm registry: Accessible" -ForegroundColor Green
} catch {
    Write-Host "⚠️ npm registry: Connection issues" -ForegroundColor Yellow
}

Write-Host ""

if ($nodeOK -and $npmOK) {
    Write-Host "🎉 Node.js installation verified!" -ForegroundColor Green
    Write-Host "📝 You can now run: ./setup-react.ps1" -ForegroundColor Cyan
} else {
    Write-Host "❌ Node.js installation incomplete" -ForegroundColor Red
    Write-Host "📥 Please install Node.js from: https://nodejs.org/" -ForegroundColor Yellow
}