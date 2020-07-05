
self.addEventListener('install', function(e) {
 e.waitUntil(
   caches.open('video-store').then(function(cache) {
     return cache.addAll([
       'dockers/src/home.html',       
       'dockers/src/index.html',
       'dockers/src/index.css',
       'dockers/src/aulas.html',
       'dockers/src/treinamento.html',
       'dockers/src/qrcode.html',
       'dockers/media/',
       'dockers/media/wilson-sons-1.mp4',
       'dockers/media/wilson-sons-2.mp4'

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
