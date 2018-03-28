const filesToCache = [
    "./index.html",
    "./assets/scripts/app.js",
    "./assets/styles/style.css"
];

self.addEventListener("install", e => {
    console.log("SW Installing...");
    e.waitUntil(caches.open("pwaStudy").then(cache => {
        cache.addAll(filesToCache);
    }));
});