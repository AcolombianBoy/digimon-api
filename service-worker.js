const CACHE_NAME = 'digimon-wiki-v1';
const urlsToCache = [
    './',
    './index.html',
    './css/styles.css',
    './css/search_system_style.css',
    './css/show_digimon_system_styles.css',
    './css/fight_system_styles.css',
    './css/capture_system_style.css',
    './css/profile_style.css',
    './js/hide_elements.js',
    './js/show_digimon_script.js',
    './js/search_digimon_script.js',
    './js/fight_script.js',
    './js/search_filter_script.js',
    './js/capture_digimon_script.js',
    './js/Digimon_collection_script.js',
    './js/show_profile_script.js',
    './assets/Digimon World.svg',
    './assets/fight theme.mp3',
    './assets/hit sound.mp3',
    './assets/digimon logo.png'
];

self.addEventListener('install', event => {
    event.waitUntil(
        caches.open(CACHE_NAME)
            .then(cache => cache.addAll(urlsToCache))
    );
});

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
    );
});