
self.addEventListener('install', function(e) {
 e.waitUntil(
   caches.open('video-store').then(function(cache) {
     return cache.addAll([
       '/src/home.html',       
       '/src/index.html',
       '/src/index.css',
       '/src/aulas.html',
       '/src/treinamento.html',
       '/media/'

     ])
     .then(() => console.log('Assets added to cache'))
     .catch(err => console.log('Error while fetching assets', err))
   })
 );
});

self.addEventListener('fetch', function(e) {
  e.respondWith(
    caches.match(e.request).then(function(response) {
      return response || fetch(e.request);
    })
   );
});
