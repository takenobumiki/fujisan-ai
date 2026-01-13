// Fujisan.AI Service Worker v18.24.1 - Simplified
const CACHE_NAME = 'fujisan-v18.24.7';

// Minimal cache - only critical files
const urlsToCache = [
  '/app.html',
  '/css/style.css',
  '/js/app.js'
];

// Install - cache essential files
self.addEventListener('install', event => {
  console.log('[SW] Installing');
  self.skipWaiting();
  event.waitUntil(
    caches.open(CACHE_NAME)
      .then(cache => cache.addAll(urlsToCache))
      .catch(e => console.log('[SW] Cache failed:', e))
  );
});

// Activate - delete old caches
self.addEventListener('activate', event => {
  console.log('[SW] Activating');
  event.waitUntil(
    caches.keys()
      .then(names => Promise.all(
        names.filter(n => n !== CACHE_NAME).map(n => caches.delete(n))
      ))
      .then(() => self.clients.claim())
  );
});

// Fetch - network first, cache fallback
self.addEventListener('fetch', event => {
  // Skip non-GET requests
  if (event.request.method !== 'GET') return;
  
  // Always fetch version file fresh
  if (event.request.url.includes('/version')) {
    event.respondWith(fetch(event.request));
    return;
  }
  
  // Network first strategy
  event.respondWith(
    fetch(event.request)
      .then(response => {
        // Cache successful responses
        if (response.ok) {
          const clone = response.clone();
          caches.open(CACHE_NAME).then(cache => cache.put(event.request, clone));
        }
        return response;
      })
      .catch(() => caches.match(event.request))
  );
});
