// Fujisan.AI Service Worker v18.5.2
const CACHE_NAME = 'fujisan-v18.5.2';
const urlsToCache = [
  '/',
  '/index.html',
  '/app.html',
  '/css/style.css',
  '/js/app.js',
  '/data/n5/vocab.js',
  '/data/n5/kanji.js',
  '/data/n5/grammar.js',
  '/data/n4/vocab.js',
  '/data/n4/kanji.js',
  '/data/n4/grammar.js',
  '/data/n3/vocab.js',
  '/data/n3/kanji.js',
  '/data/n3/grammar.js',
  '/data/n2/vocab.js',
  '/data/n2/kanji.js',
  '/data/n2/grammar.js',
  '/data/n1/vocab.js',
  '/data/n1/kanji.js',
  '/data/n1/grammar.js',
  '/data/mock/n5/mock.js',
  '/data/mock/n4/mock.js',
  '/data/mock/n3/mock.js',
  '/data/mock/n2/mock.js',
  '/data/mock/n1/mock.js',
  '/images/og-image.jpg'
];

// Install event - cache files
self.addEventListener('install', event => {
  event.waitUntil(
    caches.open(CACHE_NAME)
      .then(cache => cache.addAll(urlsToCache))
      .then(() => self.skipWaiting())
  );
});

// Activate event - clean old caches
self.addEventListener('activate', event => {
  event.waitUntil(
    caches.keys().then(cacheNames => {
      return Promise.all(
        cacheNames.map(cacheName => {
          if (cacheName !== CACHE_NAME) {
            return caches.delete(cacheName);
          }
        })
      );
    }).then(() => self.clients.claim())
  );
});

// Fetch event - serve from cache, fallback to network
self.addEventListener('fetch', event => {
  event.respondWith(
    caches.match(event.request)
      .then(response => {
        if (response) {
          return response;
        }
        return fetch(event.request).then(response => {
          // Don't cache non-successful responses or non-GET requests
          if (!response || response.status !== 200 || event.request.method !== 'GET') {
            return response;
          }
          // Clone and cache
          const responseToCache = response.clone();
          caches.open(CACHE_NAME).then(cache => {
            cache.put(event.request, responseToCache);
          });
          return response;
        });
      })
  );
});
