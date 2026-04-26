const CACHE_NAME = 'sg-cache-v2';
const ASSETS = [
    '/',
    '/index.html',
    '/styles.css',
    '/js/api.js',
    '/js/app.js',
    '/js/ui.js',
    '/AssetStore/image_1e6304.jpg'
];

self.addEventListener('install', (e) => {
    e.waitUntil(caches.open(CACHE_NAME).then(c => c.addAll(ASSETS)));
});

self.addEventListener('fetch', (e) => {
    if (e.request.url.includes('/api/')) return;
    e.respondWith(caches.match(e.request).then(res => res || fetch(e.request)));
});