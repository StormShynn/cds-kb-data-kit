@echo off
REM Double-click this file to fetch + upgrade the next batch of Hub-confirmed
REM CDS views to Full DDL, then commit + push. See scripts\run-vsp-batch.mjs
REM for what it actually does and its requirements (vsp.exe, .vsp.json, a
REM live SAP session cookie in tools\vsp\cookies.txt).
REM
REM To change how many views per run, edit the "25" below, or run from a
REM terminal instead: run-vsp-batch.cmd --count 40 --no-push
cd /d "%~dp0"
node scripts\run-vsp-batch.mjs --count 100 %*
echo.
echo ============================================
pause
