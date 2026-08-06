#!/usr/bin/env bash
# scripts/daily-fetch.sh
# Cron wrapper: daily fetch of new CDS views from GitHub into the knowledge base.
#
# Installation (crontab -e):
#   0 6 * * * /path/to/cds-kb-mcp-kit/scripts/daily-fetch.sh
#
# Or run via systemd timer, etc.
#
# Config via environment variables:
#   GITHUB_TOKEN    — GitHub personal access token (required for >60 req/hr)
#   CDS_KB_DIR      — Path to project root (default: dirname of this script/..)
#   LOG_DIR         — Directory for log files (default: $CDS_KB_DIR/logs)
#   DRY_RUN         — Set to "true" for dry-run mode (no files written)
#
# Exit codes:
#   0 — success (views added or skipped)
#   1 — error during execution

set -euo pipefail

# ── Resolve paths ───────────────────────────────────────────────────────────

SCRIPT_DIR="$(cd "$(dirname "${BASH_SOURCE[0]}")" && pwd)"
PROJECT_DIR="${CDS_KB_DIR:-"$(cd "$SCRIPT_DIR/.." && pwd)"}"
LOG_DIR="${LOG_DIR:-"$PROJECT_DIR/logs"}"
TIMESTAMP="$(date '+%Y-%m-%d_%H-%M-%S')"
LOG_FILE="$LOG_DIR/daily-fetch-$TIMESTAMP.log"
SUMMARY_FILE="$LOG_DIR/daily-fetch-latest.log"

# ── Ensure log directory ────────────────────────────────────────────────────

mkdir -p "$LOG_DIR"

# ── Logging helper ──────────────────────────────────────────────────────────

log() {
  echo "[$(date '+%Y-%m-%d %H:%M:%S')] $*" | tee -a "$LOG_FILE"
}

# ── Start ───────────────────────────────────────────────────────────────────

log "============================================"
log "🚀 Daily CDS View Fetch — $TIMESTAMP"
log "   Project: $PROJECT_DIR"
log "   GitHub Token: ${GITHUB_TOKEN:+✅ set}${GITHUB_TOKEN:-❌ not set (60 req/hr limit)}"
log "   Dry-run: ${DRY_RUN:-false}"
log "============================================"
echo "" | tee -a "$LOG_FILE"

# ── Change to project directory ─────────────────────────────────────────────

cd "$PROJECT_DIR"

# ── Build arguments ─────────────────────────────────────────────────────────

ARGS=("--source" "github" "--track")

if [ "${DRY_RUN:-false}" = "true" ]; then
  ARGS+=("--dry-run")
fi

if [ -n "${GITHUB_TOKEN:-}" ]; then
  ARGS+=("--github-token" "$GITHUB_TOKEN")
fi

# ── Run batch fetch ─────────────────────────────────────────────────────────

log "📡 Running: node batch_add.mjs ${ARGS[*]}"
echo "" | tee -a "$LOG_FILE"

START_TIME=$(date +%s)

if node batch_add.mjs "${ARGS[@]}" 2>&1 | tee -a "$LOG_FILE"; then
  END_TIME=$(date +%s)
  DURATION=$((END_TIME - START_TIME))
  log ""
  log "✅ Daily fetch completed successfully in ${DURATION}s"
else
  END_TIME=$(date +%s)
  DURATION=$((END_TIME - START_TIME))
  EXIT_CODE=$?
  log ""
  log "❌ Daily fetch FAILED after ${DURATION}s (exit code: $EXIT_CODE)"
  # Copy log to latest for review
  cp "$LOG_FILE" "$SUMMARY_FILE"
  cp "$LOG_FILE" "$LOG_DIR/daily-fetch-last-error.log"
  log "   Error log: $LOG_DIR/daily-fetch-last-error.log"
  exit $EXIT_CODE
fi

# ── Copy to latest log file ────────────────────────────────────────────────

cp "$LOG_FILE" "$SUMMARY_FILE"

# ── Show changelog summary ──────────────────────────────────────────────────

echo "" | tee -a "$LOG_FILE"
log "📊 Changelog Summary (github only):"
node add_view.mjs --changelog-summary --changelog-source github 2>&1 | tee -a "$LOG_FILE"

echo "" | tee -a "$LOG_FILE"
log "📊 Changelog Stats (github only):"
node add_view.mjs --changelog-stats --changelog-source github 2>&1 | tee -a "$LOG_FILE"

# ── Generate dashboard ──────────────────────────────────────────────────────

echo "" | tee -a "$LOG_FILE"
log "📊 Generating dashboard..."
node scripts/generate-dashboard.mjs 2>&1 | tee -a "$LOG_FILE"

# ── Cleanup old logs (keep last 30 days) ────────────────────────────────────

find "$LOG_DIR" -name 'daily-fetch-*.log' -type f -mtime +30 -delete 2>/dev/null || true

log ""
log "============================================"
log "✅ Done — $TIMESTAMP"
log "   Log: $LOG_FILE"
log "============================================"
