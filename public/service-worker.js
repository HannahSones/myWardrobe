const CACHE_NAME = 'static-cache-v2';
const DATA_CACHE_NAME = 'data-cache-v1';
const FILES_TO_CACHE = [
  'manifest.json',

  '/assets/css/calander.css',
  '/assets/css/create-outfit.css',
  '/assets/css/media-query.css',
  '/assets/css/new-item.css',
  '/assets/css/saved-outfits.css',
  '/assets/css/styles.css',

  '/assets/js/calendar.js',
  '/assets/js/carousel.js',
  '/assets/js/createOutfit.js',
  '/assets/js/date.js',
  '/assets/js/login.js',
  '/assets/js/messages.js',
  '/assets/js/savedOutfits.js',
  '/assets/js/script.js',
  '/assets/js/uploadImage.js',
  '/assets/js/userStorage.js',

  '/assets/img/icon.png',
  '/assets/img/icon-192x192.png',
  '/assets/img/icon-256x256.png',
  '/assets/img/icon-384x384.png',
  '/assets/img/icon-512x512.png',
  '/assets/img/extras/coat-hanger-hover.png',
  '/assets/img/extras/coat-hanger.png',

];
// install
self.addEventListener('install', function (evt) {
  // pre cache image data
  // evt.waitUntil(
  //   caches.open(DATA_CACHE_NAME).then((cache) => cache.add('/api/images'))
  // );
  // pre cache all static assets
  evt.waitUntil(
    caches.open(CACHE_NAME)
    .then((cache) => {
      console.log({cache});
      cache.addAll(FILES_TO_CACHE);
    })
    .catch((err) => {
      console.log({err});
    })
  );
  // tell the browser to activate this service worker immediately once it
  // has finished installing
  self.skipWaiting();
});
// activate
self.addEventListener('activate', function (evt) {
  evt.waitUntil(
    caches.keys().then((keyList) => {
      return Promise.all(
        keyList.map((key) => {
          if (key !== CACHE_NAME && key !== DATA_CACHE_NAME) {
            console.log('Removing old cache data', key);
            return caches.delete(key);
          }
        })
      );
    })
  );
  self.clients.claim();
});
// fetch
self.addEventListener('fetch', function (evt) {
  if (evt.request.url.includes('/api/')) {
    evt.respondWith(
      caches
        .open(DATA_CACHE_NAME)
        .then((cache) => {
          return fetch(evt.request)
            .then((response) => {
              // If the response was good, clone it and store it in the cache.
              if (response.status === 200) {
                cache.put(evt.request.url, response.clone());
              }
              return response;
            })
            .catch((err) => { /* eslint-disable-line no-unused-vars */
              // Network request failed, try to get it from the cache.
              return cache.match(evt.request);
            });
        })
        .catch((err) => console.log(err))
    );
    return;
  }
  evt.respondWith(
    caches.open(CACHE_NAME).then((cache) => {
      return cache.match(evt.request).then((response) => {
        return response || fetch(evt.request);
      });
    })
  );
});
