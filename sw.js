const CACHE_NAME = 'waiting-app-public_version';

// 1. Динамічно генеруємо список усіх 66 картинок підтримки (котиків)
const generateImagePaths = () => {
    return Array.from({ length: 66 }, (el, index) => `assets/images/${index + 1}.jpg`);
};

// 2. Динамічно генеруємо список анонімних фотографій для Дня Народження
const generateBdayImagePaths = () => {
    const paths = ['assets/images/bday_hero.jpg'];
    for (let index = 1; index <= 9; index++) {
        paths.push(`assets/images/bday_${index}.jpg`);
    }
    return paths;
};

// 3. Повний список усіх файлів для стабільної роботи офлайн
const ASSETS_TO_CACHE = [
    'index.html',
    'style.css',
    'script.js',
    'manifest.json',
    'assets/images/welcome.jpg', 
    'assets/images/angry.jpg',
    'assets/images/final.jpg',
    'assets/icons/icon-192x192.png',
    'assets/icons/icon-512x512.png',
    ...generateImagePaths(),
    ...generateBdayImagePaths()
];

// Подія Встановлення (Install)
self.addEventListener('install', (e) => {
    e.waitUntil(
        caches.open(CACHE_NAME).then((cache) => {
            console.log('Завантажуємо ресурси додатку у кеш...');
            return cache.addAll(ASSETS_TO_CACHE)
                .then(() => console.log('Усі файли успішно збережено для офлайну!'))
                .catch(err => console.log('Помилка кешування ресурсів:', err));
        })
    );
    self.skipWaiting(); 
});

// Подія Активації (Activate)
self.addEventListener('activate', (e) => {
    e.waitUntil(
        caches.keys().then((keys) => {
            return Promise.all(
                keys.map((key) => {
                    if (key !== CACHE_NAME) {
                        console.log('Видаляємо застарілий кеш:', key);
                        return caches.delete(key);
                    }
                })
            );
        })
    );
    self.clients.claim(); 
});

// Перехоплення запитів
self.addEventListener('fetch', (e) => {
    e.respondWith(
        caches.match(e.request).then((cachedResponse) => {
            if (cachedResponse) {
                return cachedResponse;
            }
            return fetch(e.request);
        })
    );
});