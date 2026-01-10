# Fujisan.AI Version Control Guide

**Document Version**: 1.0.0  
**Last Updated**: 2024-12-31

---

## Overview

This document defines the version control standards for Fujisan.AI development.

---

## Semantic Versioning

Fujisan.AI follows **SemVer 2.0.0** specification:

```
MAJOR.MINOR.PATCH

16.0.0
│  │  │
│  │  └── PATCH: Bug fixes, minor improvements (no data changes)
│  └───── MINOR: New features, backward compatible
└──────── MAJOR: Breaking changes, data structure changes
```

### When to Increment

| Type | Increment When | Example |
|------|----------------|---------|
| **PATCH** | Bug fixes, typo corrections, style adjustments | 16.0.0 → 16.0.1 |
| **MINOR** | New features, new data (backward compatible) | 16.0.0 → 16.1.0 |
| **MAJOR** | Breaking changes, storage format changes, major redesigns | 16.0.0 → 17.0.0 |

---

## Version Update Locations

### Required Changes (ALL must be updated together)

```
File: js/app.js
├── Line 2:  const APP_VERSION = 'X.Y.Z';
└── Line 3:  const STORAGE_KEY = 'fujisan_vXYZ';

File: sw.js
├── Line 1:  // Fujisan.AI Service Worker vX.Y.Z
└── Line 2:  const CACHE_NAME = 'fujisan-vX.Y.Z';
```

### Storage Key Convention

```javascript
// Format: fujisan_v{MAJOR}{MINOR}{PATCH}
// No dots, concatenated numbers

v16.0.0  → fujisan_v1600
v16.1.0  → fujisan_v1610
v16.1.5  → fujisan_v1615
v17.0.0  → fujisan_v1700
```

⚠️ **WARNING**: Changing STORAGE_KEY resets ALL user progress!

---

## Version Update Script

### Automated Update

Create `update-version.sh`:

```bash
#!/bin/bash

# Usage: ./update-version.sh 16.1.0

NEW_VERSION=$1

if [ -z "$NEW_VERSION" ]; then
    echo "Usage: ./update-version.sh <version>"
    echo "Example: ./update-version.sh 16.1.0"
    exit 1
fi

# Remove dots for storage key
STORAGE_VERSION=$(echo $NEW_VERSION | tr -d '.')

echo "Updating to version $NEW_VERSION..."

# Update js/app.js
sed -i "s/const APP_VERSION = '.*'/const APP_VERSION = '$NEW_VERSION'/" js/app.js
sed -i "s/const STORAGE_KEY = '.*'/const STORAGE_KEY = 'fujisan_v$STORAGE_VERSION'/" js/app.js

# Update sw.js
sed -i "1s/.*/\/\/ Fujisan.AI Service Worker v$NEW_VERSION/" sw.js
sed -i "s/const CACHE_NAME = '.*'/const CACHE_NAME = 'fujisan-v$NEW_VERSION'/" sw.js

echo "✅ Version updated to $NEW_VERSION"
echo ""
echo "Verify changes:"
grep "APP_VERSION\|STORAGE_KEY" js/app.js
grep "CACHE_NAME" sw.js
```

### Manual Update Checklist

```markdown
## Version Update Checklist

- [ ] Update APP_VERSION in js/app.js
- [ ] Update STORAGE_KEY in js/app.js (if needed)
- [ ] Update comment in sw.js line 1
- [ ] Update CACHE_NAME in sw.js
- [ ] Run syntax check: `node --check js/app.js`
- [ ] Test locally
- [ ] Update CHANGELOG section in README.md
- [ ] Create git tag: `git tag -a v16.1.0 -m "Release 16.1.0"`
- [ ] Create release package
```

---

## Release Process

### 1. Pre-release Checks

```bash
# Syntax check
node --check js/app.js

# Line counts (monitor code growth)
wc -l app.html js/app.js css/style.css

# Test in browser
npx serve .
```

### 2. Create Release Package

```bash
# Create timestamped backup
DATE=$(date +%Y%m%d)
zip -r fujisan-ai-v16.1.0-$DATE.zip . \
  -x "*.DS_Store" \
  -x "__MACOSX/*" \
  -x "*.git*" \
  -x "node_modules/*"

# Check package size
ls -lh fujisan-ai-v16.1.0-$DATE.zip
```

### 3. Git Tagging

```bash
# Create annotated tag
git tag -a v16.1.0 -m "Release 16.1.0: Description of changes"

# Push tag to remote
git push origin v16.1.0

# List all tags
git tag -l
```

### 4. Deploy

```bash
# Netlify (automatic from git)
git push origin main

# Manual upload
netlify deploy --prod --dir=.
```

---

## Changelog Format

Use this format in README.md:

```markdown
### vX.Y.Z (YYYY-MM-DD)

**Breaking Changes** (only for major versions)
- Description of breaking change

**New Features**
- Feature 1 description
- Feature 2 description

**Bug Fixes**
- Fix 1 description

**Technical**
- Internal improvement description
```

---

## Version History

| Version | Date | Type | Description |
|---------|------|------|-------------|
| 16.0.0 | 2024-12-31 | Major | 4-skill learning system |
| 15.5.0 | 2024-12-31 | Minor | Progress card, unit tracking |
| 15.4.0 | 2024-12-31 | Minor | JLPT-aligned modes |
| 15.3.0 | 2024-12-31 | Minor | File structure split |
| 15.2.0 | 2024-12-30 | Minor | Lazy loading |
| 15.0.0 | 2024-12-30 | Major | Mock test system |

---

## Branching Strategy

### Main Branches

```
main        → Production-ready code
develop     → Integration branch
feature/*   → New features
hotfix/*    → Emergency fixes
```

### Branch Naming

```bash
feature/add-listening-mode
feature/n4-mock-data
hotfix/audio-playback-fix
release/v16.1.0
```

---

## Rollback Procedure

If a release causes issues:

```bash
# 1. Identify last stable version
git log --oneline --tags

# 2. Checkout stable version
git checkout v16.0.0

# 3. Create hotfix branch
git checkout -b hotfix/rollback-from-16.1.0

# 4. Or deploy previous package directly
netlify deploy --prod --dir=./backups/fujisan-ai-v16.0.0/
```

---

## Best Practices

1. **Never skip version numbers** - Sequential only
2. **Document every release** - Update changelog
3. **Test before tagging** - Syntax + manual testing
4. **Keep backups** - Archive each release zip
5. **Communicate changes** - Especially for major versions
6. **Monitor after deploy** - Check for issues

---

© 2024 TORAIZ Inc.
