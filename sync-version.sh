#!/bin/bash
# ============================================================
# Fujisan.AI Version Sync Script
# ============================================================
# 【重要】デプロイ前に必ず実行すること！
# 
# 使い方:
#   ./sync-version.sh          # versionファイルの値で全ファイルを同期
#   ./sync-version.sh 19.5.0   # 指定バージョンで全ファイルを更新
#
# このスクリプトは以下を自動同期:
#   1. version ファイル (Single Source of Truth)
#   2. sw.js の APP_VERSION と CACHE_NAME
#   3. js/app.js の APP_VERSION
# ============================================================

set -e  # エラーで即座に停止

# 色付き出力
RED='\033[0;31m'
GREEN='\033[0;32m'
YELLOW='\033[1;33m'
BLUE='\033[0;34m'
NC='\033[0m' # No Color

# スクリプトのディレクトリに移動
cd "$(dirname "$0")"

echo ""
echo -e "${BLUE}============================================================${NC}"
echo -e "${BLUE}  Fujisan.AI Version Sync${NC}"
echo -e "${BLUE}============================================================${NC}"
echo ""

# バージョン決定
if [ -n "$1" ]; then
    VERSION="$1"
    echo -e "${YELLOW}► 指定バージョン: ${VERSION}${NC}"
    # versionファイルも更新
    echo "$VERSION" > version
else
    if [ ! -f version ]; then
        echo -e "${RED}✗ エラー: versionファイルが見つかりません${NC}"
        exit 1
    fi
    VERSION=$(cat version | tr -d '\n\r ')
    echo -e "${YELLOW}► versionファイルから読み込み: ${VERSION}${NC}"
fi

# バージョン形式チェック (x.y.z)
if ! [[ "$VERSION" =~ ^[0-9]+\.[0-9]+\.[0-9]+$ ]]; then
    echo -e "${RED}✗ エラー: バージョン形式が不正です: ${VERSION}${NC}"
    echo -e "${RED}  正しい形式: X.Y.Z (例: 19.4.2)${NC}"
    exit 1
fi

echo ""

# ============================================================
# 1. sw.js を更新
# ============================================================
echo -e "${BLUE}[1/3] sw.js を更新中...${NC}"

if [ ! -f sw.js ]; then
    echo -e "${RED}  ✗ sw.js が見つかりません${NC}"
    exit 1
fi

# コメント行のバージョン
sed -i "s|// Fujisan.AI Service Worker v.*|// Fujisan.AI Service Worker v${VERSION}|" sw.js

# CACHE_NAME
sed -i "s|const CACHE_NAME = 'fujisan-v[^']*'|const CACHE_NAME = 'fujisan-v${VERSION}'|" sw.js

# APP_VERSION
sed -i "s|const APP_VERSION = '[^']*'|const APP_VERSION = '${VERSION}'|" sw.js

# 確認
SW_CACHE=$(grep "const CACHE_NAME" sw.js | head -1)
SW_VERSION=$(grep "const APP_VERSION" sw.js | head -1)
echo -e "  ${GREEN}✓${NC} ${SW_CACHE}"
echo -e "  ${GREEN}✓${NC} ${SW_VERSION}"

# ============================================================
# 2. js/app.js を更新
# ============================================================
echo ""
echo -e "${BLUE}[2/3] js/app.js を更新中...${NC}"

if [ ! -f js/app.js ]; then
    echo -e "${RED}  ✗ js/app.js が見つかりません${NC}"
    exit 1
fi

# APP_VERSION (1行目付近)
sed -i "s|const APP_VERSION = '[^']*'|const APP_VERSION = '${VERSION}'|" js/app.js

# 確認
APP_VERSION_LINE=$(grep "const APP_VERSION" js/app.js | head -1)
echo -e "  ${GREEN}✓${NC} ${APP_VERSION_LINE}"

# ============================================================
# 3. 検証
# ============================================================
echo ""
echo -e "${BLUE}[3/3] 検証中...${NC}"

# 各ファイルからバージョンを抽出して比較
V_FILE=$(cat version | tr -d '\n\r ')
V_SW=$(grep "const APP_VERSION" sw.js | head -1 | sed "s/.*'\([^']*\)'.*/\1/")
V_APP=$(grep "const APP_VERSION" js/app.js | head -1 | sed "s/.*'\([^']*\)'.*/\1/")
V_CACHE=$(grep "const CACHE_NAME" sw.js | head -1 | sed "s/.*fujisan-v\([^']*\)'.*/\1/")

echo ""
echo "  ┌─────────────────────────────────────┐"
echo "  │  ファイル          │  バージョン    │"
echo "  ├─────────────────────────────────────┤"
printf "  │  %-18s │  %-12s │\n" "version" "$V_FILE"
printf "  │  %-18s │  %-12s │\n" "sw.js APP_VERSION" "$V_SW"
printf "  │  %-18s │  %-12s │\n" "sw.js CACHE_NAME" "$V_CACHE"
printf "  │  %-18s │  %-12s │\n" "app.js APP_VERSION" "$V_APP"
echo "  └─────────────────────────────────────┘"
echo ""

# 全て一致するかチェック
if [ "$V_FILE" = "$V_SW" ] && [ "$V_FILE" = "$V_APP" ] && [ "$V_FILE" = "$V_CACHE" ]; then
    echo -e "${GREEN}============================================================${NC}"
    echo -e "${GREEN}  ✓ 全てのバージョンが一致しました: ${VERSION}${NC}"
    echo -e "${GREEN}============================================================${NC}"
    echo ""
    echo -e "  デプロイ準備完了！"
    echo -e "  ZIPファイル名: ${YELLOW}fujisan_v${VERSION}.zip${NC}"
    echo ""
    exit 0
else
    echo -e "${RED}============================================================${NC}"
    echo -e "${RED}  ✗ バージョンの不一致が検出されました！${NC}"
    echo -e "${RED}============================================================${NC}"
    echo ""
    echo -e "  手動で確認してください。"
    exit 1
fi
