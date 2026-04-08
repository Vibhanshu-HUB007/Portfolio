#!/bin/bash

# React Portfolio Deployment Script for GitHub Pages
# Deploys your React portfolio with ShaderBackground to GitHub Pages

echo "🚀 Deploying React Portfolio to GitHub Pages"
echo "=============================================="
echo ""

# Check if node is installed
if ! command -v npm &> /dev/null; then
    echo "❌ npm is not installed. Please install Node.js first."
    echo "Visit: https://nodejs.org/"
    exit 1
fi

# Check if we're in a git repository
if [ ! -d ".git" ]; then
    echo "❌ Not a git repository. Run 'git init' first."
    exit 1
fi

echo "📦 Installing dependencies..."
npm install

echo ""
echo "📦 Installing gh-pages..."
npm install -D gh-pages

echo ""
echo "🏗️  Building React project..."
npm run build

if [ $? -ne 0 ]; then
    echo ""
    echo "❌ Build failed. Please fix the errors above."
    exit 1
fi

echo ""
echo "📤 Deploying to GitHub Pages..."
npm run deploy

if [ $? -eq 0 ]; then
    echo ""
    echo "✅ React Portfolio deployed successfully!"
    echo ""
    echo "🌐 Your portfolio will be live at:"
    echo "   https://Vibhanshu-HUB007.github.io/portfolio/"
    echo ""
    echo "⏱️  Wait 2-5 minutes for deployment to complete."
    echo ""
    echo "📍 Make sure GitHub Pages is configured:"
    echo "   1. Go to: https://github.com/Vibhanshu-HUB007/portfolio/settings/pages"
    echo "   2. Set Source to 'gh-pages' branch"
    echo "   3. Click Save"
    echo ""
    
    # Also push source code to main branch
    echo "📤 Pushing source code to main branch..."
    git add .
    git commit -m "Update React portfolio - $(date '+%Y-%m-%d %H:%M:%S')" || echo "No changes to commit"
    git push origin main || echo "Push to main branch failed (may already be up to date)"
    
    echo ""
    echo "🎉 Deployment complete!"
    echo ""
    echo "✨ Features deployed:"
    echo "   - Animated WebGL shader background"
    echo "   - Modern React + TypeScript"
    echo "   - Tailwind CSS styling"
    echo "   - Fully responsive design"
    echo ""
else
    echo ""
    echo "❌ Deployment failed. Please check the error message above."
    echo ""
    echo "💡 Common fixes:"
    echo "   - Make sure you have internet connection"
    echo "   - Check if gh-pages is installed: npm list gh-pages"
    echo "   - Try: npm run build (to test build locally)"
fi
