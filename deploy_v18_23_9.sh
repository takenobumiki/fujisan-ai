#!/bin/bash
# Fujisan.AI Deploy Script v18.23.9

cd ~/fujisan-repo

# ファイルをコピー
cp -r ~/Downloads/fujisan_v18/* .

# バージョン確認
echo "=== Version Check ==="
cat version
grep "APP_VERSION" js/app.js | head -1
grep "APP_VERSION" sw.js | head -1

# Git操作
git add -A
git commit -m "v18.23.9: Fix null check in displayWelcomeCoach"
git push

echo "=== Deploy Complete ==="
