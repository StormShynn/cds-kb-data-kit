@echo off
REM scripts/daily-fetch.bat
REM Windows Task Scheduler wrapper: daily fetch of new CDS views from GitHub.
REM
REM Installation (Task Scheduler):
REM   1. Open Task Scheduler > Create Basic Task
REM   2. Trigger: Daily at 6:00 AM
REM   3. Action: Start a program
REM      Program: C:\Windows\System32\cmd.exe
REM      Arguments: /c "D:\cds-kb-mcp-kit\scripts\daily-fetch.bat"
REM
REM Environment variables (set in Task Scheduler or system):
REM   GITHUB_TOKEN    — GitHub personal access token (required for >60 req/hr)
REM   CDS_KB_DIR      — Path to project root (default: %~dp0..)
REM   LOG_DIR         — Directory for log files (default: %CDS_KB_DIR%\logs)
REM   DRY_RUN         — Set to "true" for dry-run mode

setlocal enabledelayedexpansion

REM ── Resolve paths ──────────────────────────────────────────────────────────

set "SCRIPT_DIR=%~dp0"
set "SCRIPT_DIR=%SCRIPT_DIR:~0,-1%"
if "%CDS_KB_DIR%"=="" set "CDS_KB_DIR=%SCRIPT_DIR%\.."
if "%LOG_DIR%"=="" set "LOG_DIR=%CDS_KB_DIR%\logs"

for /f %%I in ('powershell -NoProfile -Command "Get-Date -Format 'yyyy-MM-dd_HH-mm-ss'"') do set "TIMESTAMP=%%I"
set "LOG_FILE=%LOG_DIR%\daily-fetch-%TIMESTAMP%.log"
set "SUMMARY_FILE=%LOG_DIR%\daily-fetch-latest.log"

REM ── Ensure log directory ───────────────────────────────────────────────────

if not exist "%LOG_DIR%" mkdir "%LOG_DIR%"

REM ── Start ──────────────────────────────────────────────────────────────────

echo [%DATE% %TIME%] ============================================ >> "%LOG_FILE%"
echo [%DATE% %TIME%] 🚀 Daily CDS View Fetch — %TIMESTAMP% >> "%LOG_FILE%"
echo [%DATE% %TIME%]    Project: %CDS_KB_DIR% >> "%LOG_FILE%"

if "%GITHUB_TOKEN%"=="" (
    echo [%DATE% %TIME%]    GitHub Token: ❌ not set (60 req/hr limit) >> "%LOG_FILE%"
) else (
    echo [%DATE% %TIME%]    GitHub Token: ✅ set >> "%LOG_FILE%"
)
echo [%DATE% %TIME%]    Dry-run: %DRY_RUN% >> "%LOG_FILE%"
echo [%DATE% %TIME%] ============================================ >> "%LOG_FILE%"
echo. >> "%LOG_FILE%"

REM ── Change to project directory ────────────────────────────────────────────

cd /d "%CDS_KB_DIR%"

REM ── Build arguments ────────────────────────────────────────────────────────

set "ARGS=--source github --track"
if /i "%DRY_RUN%"=="true" set "ARGS=%ARGS% --dry-run"
if not "%GITHUB_TOKEN%"=="" set "ARGS=%ARGS% --github-token "%GITHUB_TOKEN%""

REM ── Run batch fetch ────────────────────────────────────────────────────────

echo [%DATE% %TIME%] 📡 Running: node batch_add.mjs %ARGS% >> "%LOG_FILE%"
echo. >> "%LOG_FILE%"

node batch_add.mjs %ARGS% >> "%LOG_FILE%" 2>&1
set "EXIT_CODE=%ERRORLEVEL%"

REM ── Check result ──────────────────────────────────────────────────────────

if %EXIT_CODE% EQU 0 (
    echo. >> "%LOG_FILE%"
    echo [%DATE% %TIME%] ✅ Daily fetch completed successfully >> "%LOG_FILE%"
) else (
    echo. >> "%LOG_FILE%"
    echo [%DATE% %TIME%] ❌ Daily fetch FAILED (exit code: %EXIT_CODE%) >> "%LOG_FILE%"
    copy /Y "%LOG_FILE%" "%SUMMARY_FILE%" >nul
    exit /b %EXIT_CODE%
)

REM ── Copy to latest log ─────────────────────────────────────────────────────

copy /Y "%LOG_FILE%" "%SUMMARY_FILE%" >nul

REM ── Show changelog summary ─────────────────────────────────────────────────

echo. >> "%LOG_FILE%"
echo [%DATE% %TIME%] 📊 Changelog Summary (github only): >> "%LOG_FILE%"
node add_view.mjs --changelog-summary --changelog-source github >> "%LOG_FILE%" 2>&1

echo. >> "%LOG_FILE%"
echo [%DATE% %TIME%] 📊 Changelog Stats (github only): >> "%LOG_FILE%"
node add_view.mjs --changelog-stats --changelog-source github >> "%LOG_FILE%" 2>&1

REM ── Generate dashboard ──────────────────────────────────────────────────────

echo. >> "%LOG_FILE%"
echo [%DATE% %TIME%] 📊 Generating dashboard... >> "%LOG_FILE%"
node scripts/generate-dashboard.mjs >> "%LOG_FILE%" 2>&1

REM ── Cleanup old logs (keep last 30 days) ───────────────────────────────────

forfiles /p "%LOG_DIR%" /m "daily-fetch-*.log" /d -30 /c "cmd /c del @path" 2>nul

echo. >> "%LOG_FILE%"
echo [%DATE% %TIME%] ============================================ >> "%LOG_FILE%"
echo [%DATE% %TIME%] ✅ Done — %TIMESTAMP% >> "%LOG_FILE%"
echo [%DATE% %TIME%]    Log: %LOG_FILE% >> "%LOG_FILE%"
echo [%DATE% %TIME%] ============================================ >> "%LOG_FILE%"
