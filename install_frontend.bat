@echo off
cd frontend
echo Installing frontend dependencies...
call npm install
if %ERRORLEVEL% == 0 (
    echo Frontend dependencies installation completed!
) else (
    echo Error occurred during installation.
)
