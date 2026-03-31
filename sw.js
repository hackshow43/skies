const CACHE = 'skies-v3';
const STATIC = [
  '/skies/',
  '/skies/index.html',
  '/skies/manifest.json',
  '/skies/icon-192.png',
  '/skies/icon-512.png',
  '/skies/apple-touch-icon.png',
];

self.addEventListener('install', e => {
  e.waitUntil(
    caches.open(CACHE).then(c => c.addAll(STATIC)).then(() => self.skipWaiting())
  );
});

self.addEventListener('activate', e => {
  e.waitUntil(
    caches.keys()
      .then(keys => Promise.all(keys.filter(k => k !== CACHE).map(k => caches.delete(k))))
      .then(() => self.clients.claim())
  );
});

self.addEventListener('fetch', e => {
  const url = new URL(e.request.url);

  // Always network-first for external APIs
  if (url.hostname.includes('open-meteo.com') ||
      url.hostname.includes('swpc.noaa.gov') ||
      url.hostname.includes('nominatim.openstreetmap.org')) {
    e.respondWith(
      fetch(e.request).catch(() => new Response('{}', { headers: { 'Content-Type': 'application/json' } }))
    );
    return;
  }

  // For same-origin: cache first, network fallback, then index.html so launch never 404s
  if (url.origin === self.location.origin) {
    e.respondWith(
      caches.match(e.request)
        .then(cached => cached || fetch(e.request))
        .catch(() => caches.match('/skies/index.html'))
    );
  }
});
