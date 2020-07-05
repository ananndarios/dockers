
self.addEventListener('install', function(e) {
 e.waitUntil(
   caches.open('video-store').then(function(cache) {
     return cache.addAll([
       'dockers/src/home.html',       
       'dockers/src/index.html',
       'dockers/src/index.css',
       'dockers/src/aulas.html',
       'dockers/src/treinamento.html',
       'dockers/media/'

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
