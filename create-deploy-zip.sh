#!/bin/bash
# ============================================================
# Fujisan.AI Deploy Package Creator
# ============================================================
# ZIPファイル作成前に全バージョンの整合性を自動検証
#
# 使い方:
#   ./create-deploy-zip.sh          # バージョン検証後にZIP作成
#   ./create-deploy-zip.sh --force  # 検証スキップ（非推奨）
# ============================================================

set -e

# 色付き出力
RED='\033[0;31m'
GREEN='\033[0;32m'
YELLOW='\033[1;33m'
BLUE='\033[0;34m'
NC='\033[0m'

cd "$(dirname "$0")"

echo ""
echo -e "${BLUE}============================================================${NC}"
echo -e "${BLUE}  Fujisan.AI Deploy Package Creator${NC}"
echo -e "${BLUE}============================================================${NC}"
echo ""

# --force オプションチェック
FORCE=false
if [ "$1" = "--force" ]; then
    FORCE=true
    echo -e "${YELLOW}⚠️  --force モード: バージョン検証をスキップします${NC}"
    echo ""
fi

# ============================================================
# バージョン検証
# ============================================================
if [ "$FORCE" = false ]; then
    echo -e "${BLUE}[1/3] バージョン整合性を検証中...${NC}"
    echo ""
    
    # 各ファイルからバージョンを抽出
    V_FILE=$(cat version 2>/dev/null | tr -d '\n\r ' || echo "NOT_FOUND")
    V_SW=$(grep "const APP_VERSION" sw.js 2>/dev/null | head -1 | sed "s/.*'\([^']*\)'.*/\1/" || echo "NOT_FOUND")
    V_APP=$(grep "const APP_VERSION" js/app.js 2>/dev/null | head -1 | sed "s/.*'\([^']*\)'.*/\1/" || echo "NOT_FOUND")
    V_CACHE=$(grep "const CACHE_NAME" sw.js 2>/dev/null | head -1 | sed "s/.*fujisan-v\([^']*\)'.*/\1/" || echo "NOT_FOUND")
    
    echo "  version file:     $V_FILE"
    echo "  sw.js APP_VERSION: $V_SW"
    echo "  sw.js CACHE_NAME:  $V_CACHE"
    echo "  app.js APP_VERSION: $V_APP"
    echo ""
    
    # 検証
    if [ "$V_FILE" = "NOT_FOUND" ] || [ "$V_SW" = "NOT_FOUND" ] || [ "$V_APP" = "NOT_FOUND" ]; then
        echo -e "${RED}✗ エラー: 必要なファイルが見つかりません${NC}"
        exit 1
    fi
    
    if [ "$V_FILE" != "$V_SW" ] || [ "$V_FILE" != "$V_APP" ] || [ "$V_FILE" != "$V_CACHE" ]; then
        echo -e "${RED}============================================================${NC}"
        echo -e "${RED}  ✗ バージョン不一致が検出されました！${NC}"
        echo -e "${RED}============================================================${NC}"
        echo ""
        echo -e "  先に ${YELLOW}./sync-version.sh${NC} を実行してください。"
        echo ""
        echo -e "  または ${YELLOW}./create-deploy-zip.sh --force${NC} で強制作成"
        echo ""
        exit 1
    fi
    
    echo -e "${GREEN}  ✓ 全バージョン一致: ${V_FILE}${NC}"
    echo ""
    
    VERSION="$V_FILE"
else
    VERSION=$(cat version | tr -d '\n\r ')
fi

# ============================================================
# ZIPファイル作成
# ============================================================
echo -e "${BLUE}[2/3] ZIPファイルを作成中...${NC}"
echo ""

ZIP_NAME="fujisan_v${VERSION}.zip"
OUTPUT_DIR=".."

# 既存のZIPがあれば削除
if [ -f "${OUTPUT_DIR}/${ZIP_NAME}" ]; then
    echo -e "  ${YELLOW}既存のZIPを削除: ${ZIP_NAME}${NC}"
    rm -f "${OUTPUT_DIR}/${ZIP_NAME}"
fi

# 除外パターン
EXCLUDES=(
    "*.sh"           # スクリプト
    ".git/*"         # Git
    ".gitignore"
    "node_modules/*" # Node modules
    ".DS_Store"      # macOS
    "Thumbs.db"      # Windows
    "*.log"          # ログ
    ".env*"          # 環境変数
)

EXCLUDE_OPTS=""
for pattern in "${EXCLUDES[@]}"; do
    EXCLUDE_OPTS="$EXCLUDE_OPTS -x '$pattern'"
done

# ZIP作成
cd ..
eval "zip -r '${ZIP_NAME}' '$(basename $(pwd))' ${EXCLUDE_OPTS}" > /dev/null 2>&1 || {
    # フォルダ名が違う場合の対処
    cd "$(dirname "$0")"
    FOLDER_NAME=$(basename $(pwd))
    cd ..
    eval "zip -r '${ZIP_NAME}' '${FOLDER_NAME}' ${EXCLUDE_OPTS}"
}
cd "$(dirname "$0")"

# 出力先を調整（現在のフォルダに移動）
if [ -f "../${ZIP_NAME}" ]; then
    mv "../${ZIP_NAME}" "./${ZIP_NAME}"
fi

# ============================================================
# 完了
# ============================================================
echo ""
echo -e "${BLUE}[3/3] 完了${NC}"
echo ""

if [ -f "./${ZIP_NAME}" ]; then
    SIZE=$(ls -lh "./${ZIP_NAME}" | awk '{print $5}')
    echo -e "${GREEN}============================================================${NC}"
    echo -e "${GREEN}  ✓ デプロイパッケージを作成しました${NC}"
    echo -e "${GREEN}============================================================${NC}"
    echo ""
    echo -e "  ファイル: ${YELLOW}${ZIP_NAME}${NC}"
    echo -e "  サイズ:   ${SIZE}"
    echo -e "  バージョン: ${VERSION}"
    echo ""
else
    echo -e "${RED}✗ ZIPファイルの作成に失敗しました${NC}"
    exit 1
fi
