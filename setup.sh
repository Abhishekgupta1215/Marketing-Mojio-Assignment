#!/usr/bin/env bash
# Quick Setup Script for Expense Tracker
# Run: bash setup.sh

echo "🚀 Expense Tracker - Setup"
echo "=========================="
echo ""

# Check if Node.js is installed
if ! command -v node &> /dev/null; then
    echo "❌ Node.js is not installed."
    echo "📥 Please install Node.js 18+ from https://nodejs.org"
    exit 1
fi

echo "✅ Node.js version: $(node -v)"
echo ""

# Install dependencies
echo "📦 Installing dependencies..."
npm install

if [ $? -eq 0 ]; then
    echo "✅ Dependencies installed successfully!"
    echo ""
    echo "🎉 Setup complete!"
    echo ""
    echo "To start the development server, run:"
    echo "  npm run dev"
    echo ""
    echo "Then open: http://localhost:3000"
else
    echo "❌ Installation failed. Please try:"
    echo "  npm cache clean --force"
    echo "  npm install"
    exit 1
fi
