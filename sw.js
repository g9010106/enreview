const CACHE = 'enreview-v1';
const FILES = [
  '/enreview/',
  '/enreview/index.html',
  '/enreview/U01_G01.html',
  '/enreview/U01_G02.html',
  '/enreview/U01_G03.html',
  '/enreview/assets/style.css',
];

self.addEventListener('install', e => {
  e.waitUntil(
    caches.open(CACHE).then(c => c.addAll(FILES))
  );
});

self.addEventListener('fetch', e => {
  e.respondWith(
    caches.match(e.request).then(r => r || fetch(e.request))
  );
});
