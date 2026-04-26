const CACHE_NAME = 'sg-cache-v4'; // Mude esse número (v4, v5...) sempre que quiser forçar atualização geral
const ASSETS = [
    '/',
    '/index.html',
    '/styles.css',
    '/js/api.js',
    '/js/app.js',
    '/js/ui.js',
    '/AssetStore/image_1e6304.jpg'
];

// Instalação: Salva os arquivos iniciais
self.addEventListener('install', (e) => {
    self.skipWaiting(); // Força o novo SW a assumir o controle imediatamente
    e.waitUntil(
        caches.open(CACHE_NAME).then(c => c.addAll(ASSETS))
    );
});

// Ativação: Limpa versões velhas do cache automaticamente
self.addEventListener('activate', (e) => {
    e.waitUntil(
        caches.keys().then((keys) => {
            return Promise.all(
                keys.filter(key => key !== CACHE_NAME)
                    .map(key => caches.delete(key))
            );
        })
    );
});

// Fetch: Tenta buscar na rede, se falhar ou demorar, usa o cache.
// Se buscar na rede, atualiza o cache com a versão nova.
self.addEventListener('fetch', (e) => {
    // Não mexe com as rotas da API
    if (e.request.url.includes('/api/')) return;

    e.respondWith(
        fetch(e.request).then((response) => {
            // Se a rede respondeu, clona a resposta e guarda no cache
            const resClone = response.clone();
            caches.open(CACHE_NAME).then(cache => cache.put(e.request, resClone));
            return response;
        }).catch(() => {
            // Se a rede falhou (offline), usa o cache
            return caches.match(e.request);
        })
    );
});