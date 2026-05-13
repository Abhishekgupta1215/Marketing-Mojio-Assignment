@echo off
REM Quick Setup Script for Expense Tracker (Windows)
REM Run: setup.bat

echo.
echo 🚀 Expense Tracker - Setup
echo ==========================
echo.

REM Check if Node.js is installed
node --version >nul 2>&1
if errorlevel 1 (
    echo ❌ Node.js is not installed.
    echo 📥 Please install Node.js 18+ from https://nodejs.org
    pause
    exit /b 1
)

echo ✅ Node.js version:
node --version
echo.

REM Install dependencies
echo 📦 Installing dependencies...
call npm install

if errorlevel 1 (
    echo ❌ Installation failed. Please try:
    echo   npm cache clean --force
    echo   npm install
    pause
    exit /b 1
)

echo.
echo ✅ Dependencies installed successfully!
echo.
echo 🎉 Setup complete!
echo.
echo To start the development server, run:
echo   npm run dev
echo.
echo Then open: http://localhost:3000
echo.
pause
