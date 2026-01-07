# Fujisan.AI Installation Guide

**Version**: 16.0.0  
**Last Updated**: 2024-12-31

---

## Quick Start

### Option 1: One-Line Install (Recommended)

```bash
curl -L https://your-domain.com/fujisan-ai-v16.0.0.zip -o fujisan.zip && unzip fujisan.zip -d fujisan-ai && cd fujisan-ai && python3 -m http.server 8080
```

Then open: http://localhost:8080/app.html

---

### Option 2: Step-by-Step Install

```bash
# 1. Download the package
curl -L https://your-domain.com/fujisan-ai-v16.0.0.zip -o fujisan.zip

# 2. Extract
unzip fujisan.zip -d fujisan-ai

# 3. Navigate to directory
cd fujisan-ai

# 4. Start local server (choose one)

# Python 3
python3 -m http.server 8080

# Node.js (npx)
npx serve . -p 8080

# PHP
php -S localhost:8080

# 5. Open in browser
open http://localhost:8080/app.html
```

---

## Local Development Setup

### Prerequisites

- Modern web browser (Chrome, Firefox, Safari, Edge)
- Local web server (Python, Node.js, or PHP)
- Text editor (VS Code recommended)

### Development Server

```bash
# Install live-server for auto-reload
npm install -g live-server

# Run with auto-reload
live-server --port=8080 --open=app.html
```

### File Watching

```bash
# Watch for changes and auto-reload
npx nodemon --watch . --ext html,css,js --exec "echo 'Files changed'"
```

---

## Production Deployment

### Netlify (Recommended)

```bash
# Install Netlify CLI
npm install -g netlify-cli

# Login
netlify login

# Deploy
cd fujisan-ai
netlify deploy --prod --dir=.

# Custom domain setup
netlify domains:add fujisan.ai
```

### Vercel

```bash
# Install Vercel CLI
npm install -g vercel

# Deploy
cd fujisan-ai
vercel --prod
```

### Cloudflare Pages

```bash
# Via Cloudflare Dashboard
# 1. Go to Pages > Create a project
# 2. Connect to Git repository
# 3. Set build output directory: /
# 4. Deploy
```

### Traditional Web Server (Nginx)

```nginx
# /etc/nginx/sites-available/fujisan.ai

server {
    listen 80;
    listen [::]:80;
    server_name fujisan.ai www.fujisan.ai;
    
    # Redirect to HTTPS
    return 301 https://$server_name$request_uri;
}

server {
    listen 443 ssl http2;
    listen [::]:443 ssl http2;
    server_name fujisan.ai www.fujisan.ai;
    
    # SSL Configuration
    ssl_certificate /etc/letsencrypt/live/fujisan.ai/fullchain.pem;
    ssl_certificate_key /etc/letsencrypt/live/fujisan.ai/privkey.pem;
    
    # Root directory
    root /var/www/fujisan-ai;
    index app.html;
    
    # Main location
    location / {
        try_files $uri $uri/ /app.html;
    }
    
    # Static assets caching
    location ~* \.(js|css|png|jpg|jpeg|gif|ico|svg|mp3|woff|woff2)$ {
        expires 1y;
        add_header Cache-Control "public, immutable";
    }
    
    # Service Worker
    location /sw.js {
        add_header Cache-Control "no-cache";
    }
    
    # Gzip compression
    gzip on;
    gzip_types text/plain text/css application/json application/javascript text/xml;
}
```

```bash
# Enable site
sudo ln -s /etc/nginx/sites-available/fujisan.ai /etc/nginx/sites-enabled/

# Test configuration
sudo nginx -t

# Reload Nginx
sudo systemctl reload nginx
```

### Apache

```apache
# .htaccess

RewriteEngine On

# HTTPS redirect
RewriteCond %{HTTPS} off
RewriteRule ^(.*)$ https://%{HTTP_HOST}%{REQUEST_URI} [L,R=301]

# SPA routing
RewriteCond %{REQUEST_FILENAME} !-f
RewriteCond %{REQUEST_FILENAME} !-d
RewriteRule ^ app.html [L]

# Cache static assets
<IfModule mod_expires.c>
    ExpiresActive On
    ExpiresByType text/css "access plus 1 year"
    ExpiresByType application/javascript "access plus 1 year"
    ExpiresByType audio/mpeg "access plus 1 year"
</IfModule>

# Gzip compression
<IfModule mod_deflate.c>
    AddOutputFilterByType DEFLATE text/html text/css application/javascript
</IfModule>
```

---

## Environment Configuration

### _redirects (Netlify)

```
# _redirects file (already included)
/*    /app.html   200
```

### vercel.json

```json
{
  "rewrites": [
    { "source": "/(.*)", "destination": "/app.html" }
  ]
}
```

---

## SSL/HTTPS Setup

### Let's Encrypt (Free SSL)

```bash
# Install Certbot
sudo apt install certbot python3-certbot-nginx

# Obtain certificate
sudo certbot --nginx -d fujisan.ai -d www.fujisan.ai

# Auto-renewal
sudo systemctl enable certbot.timer
```

---

## Post-Installation Verification

### Checklist

```bash
# 1. Check main page loads
curl -I https://fujisan.ai/app.html

# 2. Check static assets
curl -I https://fujisan.ai/js/app.js
curl -I https://fujisan.ai/css/style.css

# 3. Check Service Worker
curl -I https://fujisan.ai/sw.js

# 4. Check data files
curl -I https://fujisan.ai/data/n5/vocab.js

# 5. Check audio files
curl -I https://fujisan.ai/audio/n5/v1/N5_LC_01_001.mp3
```

### Browser Testing

1. Open DevTools (F12)
2. Check Console for errors
3. Check Network tab for 404s
4. Test PWA installation
5. Test offline mode

---

## Troubleshooting

### Common Issues

| Issue | Solution |
|-------|----------|
| Blank page | Check console for JS errors |
| 404 errors | Verify file paths and server config |
| PWA not installing | Ensure HTTPS and valid manifest |
| Audio not playing | Check CORS settings |
| Data not loading | Check network tab, verify paths |

### Debug Mode

```javascript
// Add to browser console for debugging
localStorage.setItem('debug', 'true');
location.reload();
```

---

## Updating

### Check Current Version

```javascript
// In browser console
console.log('Version:', APP_VERSION);
```

### Update Process

```bash
# 1. Backup current installation
cp -r /var/www/fujisan-ai /var/www/fujisan-ai-backup

# 2. Download new version
curl -L https://your-domain.com/fujisan-ai-v16.1.0.zip -o new-version.zip

# 3. Extract and replace
unzip new-version.zip -d /var/www/fujisan-ai-new
rm -rf /var/www/fujisan-ai
mv /var/www/fujisan-ai-new /var/www/fujisan-ai

# 4. Clear caches
# Browser: Clear site data
# CDN: Purge cache
```

---

## Support

If you encounter issues:

1. Check this guide
2. Review browser console errors
3. Contact: support@fujisan.ai

---

© 2024 TORAIZ Inc.
