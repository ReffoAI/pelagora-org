#!/usr/bin/env bash
# Generates _og.jpg variants (1200x630, <600KB) for all images
# referenced in OG metadata across the site.
#
# Usage: npm run og:generate
#        bash scripts/generate-og-images.sh [--dry-run]

set -euo pipefail

IMG_DIR="$(cd "$(dirname "$0")/../public/images" && pwd)"
TARGET_W=1200
TARGET_H=630
MAX_KB=600
DRY_RUN=false

[[ "${1:-}" == "--dry-run" ]] && DRY_RUN=true

# Collect all images referenced in OG metadata (openGraph.images or twitter.images)
OG_IMAGES=$(grep -rh 'images.*_og\.' app/ --include='*.tsx' --include='*.ts' \
  | grep -oE '[a-zA-Z0-9_-]+_og\.(jpg|png|jpeg|webp)' \
  | sort -u)

echo "Found $(echo "$OG_IMAGES" | wc -l | tr -d ' ') OG image references"
echo ""

GENERATED=0
SKIPPED=0
ERRORS=0

for og_file in $OG_IMAGES; do
  base_name="${og_file/_og/}"
  # Try to find the source image (could be .png, .jpg, etc.)
  src_name="${base_name%.*}"
  src_path=""
  for ext in png jpg jpeg webp; do
    if [[ -f "$IMG_DIR/$src_name.$ext" ]]; then
      src_path="$IMG_DIR/$src_name.$ext"
      break
    fi
  done

  og_path="$IMG_DIR/$og_file"

  if [[ -z "$src_path" ]]; then
    echo "⚠  No source found for $og_file (looked for $src_name.{png,jpg,jpeg,webp})"
    ((ERRORS++)) || true
    continue
  fi

  if [[ -f "$og_path" ]]; then
    # Check if source is newer than OG version
    if [[ "$src_path" -ot "$og_path" ]]; then
      echo "⏭  $og_file already up to date"
      ((SKIPPED++)) || true
      continue
    fi
  fi

  if $DRY_RUN; then
    echo "🔍 Would generate: $og_file from $(basename "$src_path")"
    ((GENERATED++)) || true
    continue
  fi

  echo -n "📸 Generating $og_file from $(basename "$src_path")..."

  # Use sips (macOS) to resize and convert to JPEG
  if command -v sips &>/dev/null; then
    cp "$src_path" "$og_path.tmp"
    # Resize to fit within 1200x630, maintaining aspect ratio
    sips -Z $TARGET_W "$og_path.tmp" --out "$og_path.tmp2" >/dev/null 2>&1
    sips -s format jpeg "$og_path.tmp2" --out "$og_path" >/dev/null 2>&1
    rm -f "$og_path.tmp" "$og_path.tmp2"
  elif command -v convert &>/dev/null; then
    # ImageMagick fallback
    convert "$src_path" -resize "${TARGET_W}x${TARGET_H}>" -quality 85 "$og_path"
  else
    echo " ❌ No image tool found (need sips or ImageMagick)"
    ((ERRORS++)) || true
    continue
  fi

  # Check file size
  size_kb=$(( $(wc -c < "$og_path") / 1024 ))
  if (( size_kb > MAX_KB )); then
    echo " ⚠ ${size_kb}KB (over ${MAX_KB}KB limit, consider reducing quality)"
  else
    echo " ✓ ${size_kb}KB"
  fi
  ((GENERATED++)) || true
done

echo ""
echo "Done: $GENERATED generated, $SKIPPED skipped, $ERRORS errors"
