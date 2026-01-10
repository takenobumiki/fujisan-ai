#!/bin/bash
# Fujisan.AI v18.8.1 デプロイスクリプト
# 即時応答重複率改善

cd ~/Downloads/fujisan-repo || exit 1

# ZIPを解凍（最新のダウンロードフォルダから）
LATEST_DIR=$(ls -td ~/Downloads/files\ \(*\) 2>/dev/null | head -1)
if [ -z "$LATEST_DIR" ]; then
    echo "Error: ダウンロードフォルダが見つかりません"
    exit 1
fi

echo "=== Fujisan.AI v18.8.1 デプロイ ==="
echo "ソース: $LATEST_DIR"

# 解凍
unzip -o "$LATEST_DIR/fujisan-v18.8.1-sokujiouto.zip" -d .

# バージョン確認
echo ""
echo "バージョン: $(cat version)"

# Git操作
git add .
git status
echo ""
read -p "デプロイしますか? (y/n): " confirm
if [ "$confirm" = "y" ]; then
    git commit -m "v18.8.1: 即時応答重複率改善 (N5:3.7%, N4:15%, N3:27%, N2:8.3%, N1:0%)"
    git push
    echo ""
    echo "✓ デプロイ完了: https://fujisan-ai.netlify.app"
else
    echo "キャンセルしました"
fi
