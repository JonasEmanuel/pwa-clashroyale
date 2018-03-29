const filesToCache = [
    "./index.html",
    "./assets/scripts/app.js",
    "./assets/styles/style.css",
    "./offline.html"
];

const CACHE_NAME = "pwaStudy";

self.addEventListener("install", e => {
    e.waitUntil(caches.open(CACHE_NAME).then(cache => {
        cache.addAll(filesToCache);
    }));
});

self.addEventListener('fetch', event => {
    event.respondWith(caches.match(event.request)
        .then(cache => {
            if(cache){
                return cache;
            } else{
                fetch(event.request).then(response => {
                    
                });
                caches.open(CACHE_NAME).then(cache => {
                    cache.put(event.request);
                });
            }
        })
        .catch(error => console.log(error))
    );
});