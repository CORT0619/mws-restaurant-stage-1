self.addEventListener('install', function(event) {
  event.waitUntil(
    caches.open('mws-restaurant-1').then(function(cache) {
      var images = [];
      for (var i=1; i < 11; i++) {
        images.push('i'+ '.jpg');
      }
      return cache.addAll([
        '/',
        'index.html',
        'restaurant.html',
        'css/styles.css',
        'js/dbhelper.js',
        'js/main.js',
        'js/restaurant_info.js',
        'data/restaurants.json',
        'img/1.jpg',
        'img/2.jpg',
        'img/3.jpg',
        'img/4.jpg',
        'img/5.jpg',
        'img/6.jpg',
        'img/7.jpg',
        'img/8.jpg',
        'img/9.jpg',
        'img/10.jpg'
      ]);
    })
  );
});

self.addEventListener('fetch', function(event) {
  console.log(event.request.url);
  event.respondWith(
    caches.match(event.request).then(function(match) {
      return match || fetch(event.request);
    })
    .catch(function(err) {
      console.log('err ', err);
    })
    // caches.match(event.request).then(function(match) {
    //   if (match) return match;

    //   var fetchRequest = event.request.clone();

    //   return fetch(fetchRequest).then(function(response) {
    //     if (!response || response.status !== 200 || response.type !== 'basic') {
    //       return response;
    //     }
    //     var responseToCache = response.clone();

    //     caches.open('mws-restaurant-1').then(function(cache) {
    //       cache.put(event.request, responseToCache);
    //     });

    //     return response;
    //   })
    // })
  );
});