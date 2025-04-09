const CACHE_NAME = "js-dasar-cache-v2"; // Ganti versi kalau ada perubahan
const urlsToCache = [
  "index.html",
  "style.css",
  "latihan1.html",
  "latihan2.html",
  "latihan3.html",
  "latihan4.html",
  "latihan5.html",
  "latihan6.html",
  "latihan7.html",
  "latihan8.html",
  "latihan9.html",
  "latihan10.html",
  "latihan11.html",
  "latihan12.html",
  "assets/icon-192.png",
  "assets/icon-512.png",
];

self.addEventListener("install", (e) => {
  e.waitUntil(
    caches.open(CACHE_NAME).then((cache) => cache.addAll(urlsToCache))
  );
  self.skipWaiting(); // langsung aktifkan SW baru
});

self.addEventListener("activate", (e) => {
  e.waitUntil(
    caches.keys().then((cacheNames) =>
      Promise.all(
        cacheNames.map((cache) => {
          if (cache !== CACHE_NAME) {
            return caches.delete(cache); // Hapus cache lama
          }
        })
      )
    )
  );
  self.clients.claim(); // kendalikan halaman langsung
});

self.addEventListener("fetch", (e) => {
  e.respondWith(fetch(e.request).catch(() => caches.match(e.request)));
});
