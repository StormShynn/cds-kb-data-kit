#!/usr/bin/env bash
# =============================================================================
# sync-cds-kb-data.sh
#
# Đồng bộ dữ liệu CDS KB từ harness (B) vào MCP data clone (A) + rebuild index.
# Chạy mỗi khi có view mới trong harness — MCP local (Claude/Cursor) sẽ đọc
# data mới nhất ở lần khởi động kế tiếp.
#
# Cách dùng:
#   ./sync-cds-kb-data.sh               # sync + rebuild index (chỉ khi có thay đổi)
#   ./sync-cds-kb-data.sh --force       # luôn rebuild index
#   ./sync-cds-kb-data.sh --push        # sync + rebuild + commit + push lên GitHub
#   ./sync-cds-kb-data.sh --check       # chỉ so sánh, không thay đổi gì
#
# Ghi đè đường dẫn bằng biến môi trường:
#   HARNESS_DATA=... CLONE=... ./sync-cds-kb-data.sh
#
# B = harness: nơi pipeline fetch/enrich ghi view mới (docs/product/cds_kb_data)
# A = clone:   nơi cds-kb-mcp-kit (MCP server) đọc data (--data)
# =============================================================================
set -euo pipefail

HARNESS_DATA="${HARNESS_DATA:-D:/__StormShyn/harness_sap-cds-kb-data-v1/docs/product/cds_kb_data}"
CLONE="${CLONE:-D:/__StormShyn/sap-cds-kb-data}"

MODE="sync"      # sync | push | check
FORCE=0
for arg in "$@"; do
  case "$arg" in
    --push)  MODE="push" ;;
    --check) MODE="check" ;;
    --force) FORCE=1 ;;
    -h|--help)
      sed -n '2,20p' "$0" | sed 's/^# \{0,1\}//'
      exit 0 ;;
    *) echo "❌ Cờ không biết: $arg (xem --help)"; exit 1 ;;
  esac
done

# ── Validate ────────────────────────────────────────────────────────────────
for d in "$HARNESS_DATA" "$CLONE"; do
  [ -d "$d" ] || { echo "❌ Không tìm thấy: $d (ghi đè bằng HARNESS_DATA/CLONE)"; exit 1; }
done
[ -f "$CLONE/package.json" ] || { echo "❌ $CLONE không phải data repo (thiếu package.json)"; exit 1; }

count_md() { find "$1/views" -name '*.md' 2>/dev/null | wc -l; }
B_COUNT=$(count_md "$HARNESS_DATA")
A_COUNT=$(count_md "$CLONE")

echo "──────────────────────────────────────────────────────────────"
echo "  HARNESS (B): $B_COUNT views   |   CLONE (A): $A_COUNT views"
echo "──────────────────────────────────────────────────────────────"

# ── Chế độ check: chỉ so sánh ───────────────────────────────────────────────
if [ "$MODE" = "check" ]; then
  new_views=$(comm -13 \
    <(cd "$CLONE"   && find views -name '*.md' 2>/dev/null | sort) \
    <(cd "$HARNESS_DATA" && find views -name '*.md' 2>/dev/null | sort) | wc -l)
  clone_extra=$(comm -23 \
    <(cd "$CLONE"   && find views -name '*.md' 2>/dev/null | sort) \
    <(cd "$HARNESS_DATA" && find views -name '*.md' 2>/dev/null | sort) | wc -l)
  echo "  Views chỉ có ở harness (sẽ sync sang clone): $new_views"
  echo "  Views chỉ có ở clone (giữ nguyên, không xóa): $clone_extra"
  echo "ℹ️  --check: chỉ so sánh, không thay đổi gì."
  exit 0
fi

# ── 1. Sync B → A (trừ .git, node_modules, tooling/config local) ────────────
echo "⏳ Đồng bộ data từ harness vào clone..."
(cd "$HARNESS_DATA" && tar cf - \
  --exclude='.git' \
  --exclude='node_modules' \
  --exclude='tools' \
  --exclude='scripts/bin' \
  --exclude='.env' --exclude='.env.example' \
  --exclude='.mcp.json' --exclude='.mcp.json.example' \
  --exclude='.vsp.json' --exclude='.vsp.json.example' \
  .) | (cd "$CLONE" && tar xf -)
echo "   ✔ Đã sync"

# ── 2. Đảm bảo .gitignore giữ các dòng local-only (tar ghi đè .gitignore) ──
if ! grep -q 'Local-only tooling' "$CLONE/.gitignore" 2>/dev/null; then
  cat >> "$CLONE/.gitignore" <<'EOF'

# Local-only tooling & config (never commit)
tools/
scripts/bin/
.env
.env.example
.mcp.json
.mcp.json.example
.vsp.json
.vsp.json.example
EOF
  echo "   ➕ Bổ sung local-only vào .gitignore"
fi

# ── 3. Kiểm tra có thay đổi ở views không ───────────────────────────────────
cd "$CLONE"
if [ "$FORCE" -eq 0 ] && git diff --quiet HEAD -- views/ changelog.json \
   && ! git status --porcelain -- views/ | grep -q '^??'; then
  echo "ℹ️  Không có view mới — bỏ qua rebuild. (dùng --force nếu muốn rebuild)"
  # Tar vừa ghi đè index/html bằng bản của B (thường cũ hơn). Nếu bản working
  # tree cũ hơn bản đã commit (HEAD) thì hoàn nguyên để giữ index mới nhất;
  # nếu bản working tree mới hơn (vừa --force rebuild) thì giữ nguyên.
  wt_built=$(node -e "try{console.log(require('./index/version.json').builtAt)}catch(e){console.log('')}")
  head_built=$(git show HEAD:index/version.json 2>/dev/null | node -e "let d='';process.stdin.on('data',c=>d+=c).on('end',()=>{try{console.log(JSON.parse(d).builtAt)}catch(e){console.log('')}})")
  if [ -n "$wt_built" ] && [ "$wt_built" \< "$head_built" ]; then
    git checkout -- index/ search.html field-search.html dashboard.html \
      overview.html coverage.json coverage-report.html 2>/dev/null || true
  fi
  echo "──────────────────────────────────────────────────────────────"
  node -e "const v=require('./index/version.json');console.log('✅ Xong! views='+v.viewCount+' enriched='+v.enrichedCount)"
  exit 0
fi

# ── 4. Rebuild index ────────────────────────────────────────────────────────
# Helper: chạy npm script, nếu fail thì in log lỗi và thoát (KHÔNG nuốt lỗi).
# Thành công thì hiển thị dòng kết quả quan trọng.
run_rebuild() {
  local name="$1"; shift
  echo "   ⏳ $name..."
  if ! "$@" > /tmp/sync-rebuild.log 2>&1; then
    echo "❌ $name thất bại:"
    tail -15 /tmp/sync-rebuild.log
    exit 1
  fi
  grep -E 'viewCount|search_index.json|Wrote search|Wrote field|Dashboard written' /tmp/sync-rebuild.log || true
}

echo "⏳ Rebuild index (có thể mất 1-2 phút)..."
run_rebuild "rebuild-index"      npm run rebuild-index
run_rebuild "build-sqlite-index" npm run build-sqlite-index
run_rebuild "generate-search-page"  npm run generate-search-page
run_rebuild "generate-field-search" npm run generate-field-search
run_rebuild "generate-dashboard"    npm run generate-dashboard

echo "──────────────────────────────────────────────────────────────"
node -e "const v=require('./index/version.json');console.log('✅ Rebuild xong! views='+v.viewCount+' enriched='+v.enrichedCount+' builtAt='+v.builtAt)"

# ── 5. (Tùy chọn) Commit + push lên GitHub ─────────────────────────────────
if [ "$MODE" = "push" ]; then
  [ "$(git branch --show-current)" = "main" ] || { echo "❌ --push chỉ chạy trên branch main"; exit 1; }
  git add -A
  if git diff --cached --quiet; then
    echo "ℹ️  Không có thay đổi để commit."
  else
    git commit -m "Sync CDS views + rebuild index ($(date +%Y-%m-%d))"
    git fetch origin
    # Nếu origin có commit mới (workflow tự chạy): rebase, ưu tiên data local.
    # Lưu ý: -X theirs = giữ bản local khi conflict — B là nguồn chuẩn, nhưng
    # nếu origin sửa 1 view mới hơn mà B không có, bản đó sẽ bị thay bằng local.
    if git rev-parse --verify origin/main >/dev/null 2>&1 && git rev-list HEAD..origin/main | grep -q .; then
      echo "⚠️  origin/main mới hơn — rebase, ưu tiên data local (-X theirs)..."
      git rebase -X theirs origin/main
    fi
    # Push, retry 2 lần nếu origin advance tiếp (workflow chạy liên tục)
    for attempt in 1 2 3; do
      if git push origin main 2>/tmp/sync-push.log; then
        echo "✅ Đã push lên GitHub StormShynn/cds-kb-data"
        break
      fi
      if [ "$attempt" -lt 3 ]; then
        echo "⚠️  Push lần $attempt thất bại (origin có thể vừa advance) — fetch + rebase rồi thử lại..."
        git fetch origin
        git rebase -X theirs origin/main || { echo "❌ Rebase lỗi — cần xử lý thủ công"; exit 1; }
      else
        echo "❌ Push thất bại sau 3 lần:"; tail -5 /tmp/sync-push.log; exit 1
      fi
    done
  fi
fi
