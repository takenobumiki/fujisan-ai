// Fujisan.AI Service Worker v17.10.0
const CACHE_NAME = 'fujisan-v17.10.0';
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
  '/images/og-image.jpg'
];

// Install event - cache files
self.addEventListener('install', event => {
  event.waitUntil(
    caches.open(CACHE_NAME)
      .then(cache => {
        console.log('Fujisan.AI: Caching app shell');
        return cache.addAll(urlsToCache);
      })
      .catch(err => console.log('Cache error:', err))
  );
  self.skipWaiting();
});

// Activate event - clean old caches
self.addEventListener('activate', event => {
  event.waitUntil(
    caches.keys().then(cacheNames => {
      return Promise.all(
        cacheNames.map(cacheName => {
          if (cacheName !== CACHE_NAME) {
            console.log('Fujisan.AI: Removing old cache', cacheName);
            return caches.delete(cacheName);
          }
        })
      );
    })
  );
  self.clients.claim();
});

// Fetch event - serve from cache, fallback to network
self.addEventListener('fetch', event => {
  event.respondWith(
    caches.match(event.request)
      .then(response => {
        if (response) {
          return response;
        }
        return fetch(event.request)
          .then(response => {
            if (!response || response.status !== 200 || response.type !== 'basic') {
              return response;
            }
            const responseToCache = response.clone();
            caches.open(CACHE_NAME)
              .then(cache => {
                cache.put(event.request, responseToCache);
              });
            return response;
          });
      })
      .catch(() => {
        if (event.request.destination === 'document') {
          return caches.match('/app.html');
        }
      })
  );
});

// Push notification event
self.addEventListener('push', event => {
  const options = {
    body: event.data ? event.data.text() : 'Time to study Japanese! 🗻',
    icon: '/images/icon-192.png',
    badge: '/images/icon-192.png',
    vibrate: [100, 50, 100],
    data: {
      dateOfArrival: Date.now(),
      primaryKey: 1
    },
    actions: [
      { action: 'study', title: '📚 Study Now' },
      { action: 'later', title: '⏰ Later' }
    ]
  };

  event.waitUntil(
    self.registration.showNotification('Fujisan.AI', options)
  );
});

// Notification click event
self.addEventListener('notificationclick', event => {
  event.notification.close();
  if (event.action === 'study' || !event.action) {
    event.waitUntil(clients.openWindow('/app.html'));
  }
});

// Background sync for offline data
self.addEventListener('sync', event => {
  if (event.tag === 'sync-progress') {
    event.waitUntil(syncProgress());
  }
});

async function syncProgress() {
  console.log('Fujisan.AI: Syncing progress...');
}
