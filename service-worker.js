self.addEventListener("install", (e) => {
  e.waitUntil(
    caches.open("js-dasar-cache").then((cache) => {
      return cache.addAll([
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
      ]);
    })
  );
});

self.addEventListener("fetch", (e) => {
  e.respondWith(
    caches.match(e.request).then((response) => {
      return response || fetch(e.request);
    })
  );
});
