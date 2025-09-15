const CACHE_NAME = 'todoapp-cache-v1';
const urlsToCache = ['/', '/index.html', '/assets/css/styles.css', '/assets/js/index.js'];

/* self.addEventListener('install', (event) => {
  event.waitUntil(caches.open(CACHE_NAME).then((cache) => cache.addAll(urlsToCache)));
});

self.addEventListener('fetch', (event) => {
  event.respondWith(caches.match(event.request).then((response) => response || fetch(event.request)));
}); */

self.addEventListener('install', (event) => {
  self.skipWaiting();
});

self.addEventListener('activate', (event) => {
  self.clients.claim();
});

self.addEventListener('fetch', (event) => {
  event.respondWith(fetch(event.request));
});
