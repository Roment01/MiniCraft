self.addEventListener('install', e => {
  e.waitUntil(
    caches.open('minicraft-v1').then(cache => {
      return cache.addAll([
        '/index.html',
        '/version.json',
        '/changelog.json'
      ]);
    })
  );
});

self.addEventListener('fetch', e => {
  e.respondWith(
    caches.match(e.request).then(r => r || fetch(e.request))
  );
});
