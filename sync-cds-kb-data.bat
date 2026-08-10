@echo off
REM ===========================================================================
REM sync-cds-kb-data.bat — wrapper Windows cho sync-cds-kb-data.sh
REM Cách dùng:  double-click, hoặc chạy từ cmd:
REM     sync-cds-kb-data.bat [--force|--push|--check]
REM ===========================================================================
cd /d "%~dp0"
where bash >nul 2>nul
if errorlevel 1 (
  echo ❌ Khong tim thay bash. Can Git Bash (git-for-windows).
  pause
  exit /b 1
)
bash sync-cds-kb-data.sh %*
echo.
pause
