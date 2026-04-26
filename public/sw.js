const CACHE_NAME = 'sales-guia-v1';

const ASSETS_TO_CACHE = [
    '/',
    '/index.html',
    '/styles.css',
    '/js/api.js',
    '/js/app.js',
    '/js/ui.js',
    '/AssetStore/image_1e6304.jpg',
    '/AssetStore/dono de faccao.jpg',
    '/AssetStore/novato.jpg',
    '/AssetStore/policial.jpg',
    '/AssetStore/medico.jpg',
    '/AssetStore/staff.jpg',
    '/AssetStore/gemini.jpg',
    '/AssetStore/defesa.jpg',
    '/AssetStore/meio-campo.jpg',
    '/AssetStore/ataque.jpg',
    '/AssetStore/fechamento.jpg',
    '/AssetStore/pos_venda.jpg',
    '/AssetStore/foto_2.jpg',
    '/AssetStore/quadrinho_lider.jpg',
    '/AssetStore/quadrinho_novato.jpg',
    '/AssetStore/quadrinho_policial.jpg',
    '/AssetStore/quadrinho_medico.jpg',
    '/AssetStore/quadrinho_staff.jpg'
];

self.addEventListener('install', (event) => {
    event.waitUntil(
        caches.open(CACHE_NAME).then((cache) => {
            console.log('Arquivos em cache com sucesso.');
            return cache.addAll(ASSETS_TO_CACHE);
        })
    );
});

self.addEventListener('fetch', (event) => {
    if (event.request.method !== 'GET' || event.request.url.includes('/api/')) return;

    event.respondWith(
        caches.match(event.request).then((cachedResponse) => {
            return cachedResponse || fetch(event.request).then((response) => {
                return caches.open(CACHE_NAME).then((cache) => {
                    cache.put(event.request, response.clone());
                    return response;
                });
            });
        })
    );
});