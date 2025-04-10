@echo off
cd backend
if not exist node_modules (
    echo Node modules not found. Installing dependencies first...
    call npm install
)
start npm run dev
