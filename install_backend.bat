@echo off
cd backend
echo Installing backend dependencies...
call npm install
if %ERRORLEVEL% == 0 (
    echo Backend dependencies installation completed!
) else (
    echo Error occurred during installation.
)
