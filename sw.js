// GEOSER CRM - Service Worker v1.0
const CACHE_NAME = 'geoser-crm-v1';
const STATIC_ASSETS = [
  '/',
    '/index.html',
      '/manifest.json',
        'https://www.gstatic.com/firebasejs/9.22.2/firebase-app-compat.js',
          'https://www.gstatic.com/firebasejs/9.22.2/firebase-firestore-compat.js'
          ];

          // Install: Cache static assets
          self.addEventListener('install', function(event) {
            event.waitUntil(
                caches.open(CACHE_NAME).then(function(cache) {
                      return cache.addAll([
                              '/',
                                      '/index.html',
                                              '/manifest.json'
                                                    ]);
                                                        }).then(function() {
                                                              return self.skipWaiting();
                                                                  })
                                                                    );
                                                                    });

                                                                    // Activate: Clean old caches
                                                                    self.addEventListener('activate', function(event) {
                                                                      event.waitUntil(
                                                                          caches.keys().then(function(keys) {
                                                                                return Promise.all(
                                                                                        keys.filter(function(key) {
                                                                                                  return key !== CACHE_NAME;
                                                                                                          }).map(function(key) {
                                                                                                                    return caches.delete(key);
                                                                                                                            })
                                                                                                                                  );
                                                                                                                                      }).then(function() {
                                                                                                                                            return self.clients.claim();
                                                                                                                                                })
                                                                                                                                                  );
                                                                                                                                                  });
                                                                                                                                                  
                                                                                                                                                  // Fetch: Network first, fallback to cache
                                                                                                                                                  self.addEventListener('fetch', function(event) {
                                                                                                                                                    // Firebase ve external API isteklerini pass-through yap
                                                                                                                                                      if (event.request.url.includes('firestore.googleapis.com') ||
                                                                                                                                                            event.request.url.includes('firebase') ||
                                                                                                                                                                  event.request.url.includes('googleapis.com')) {
                                                                                                                                                                      return;
                                                                                                                                                                        }
                                                                                                                                                                        
                                                                                                                                                                          event.respondWith(
                                                                                                                                                                              fetch(event.request).then(function(response) {
                                                                                                                                                                                    // Basarili response'u cache'e koy
                                                                                                                                                                                          if (response && response.status === 200 && event.request.method === 'GET') {
                                                                                                                                                                                                  var responseClone = response.clone();
                                                                                                                                                                                                          caches.open(CACHE_NAME).then(function(cache) {
                                                                                                                                                                                                                    cache.put(event.request, responseClone);
                                                                                                                                                                                                                            });
                                                                                                                                                                                                                                  }
                                                                                                                                                                                                                                        return response;
                                                                                                                                                                                                                                            }).catch(function() {
                                                                                                                                                                                                                                                  // Network yoksa cache'den sun
                                                                                                                                                                                                                                                        return caches.match(event.request).then(function(cached) {
                                                                                                                                                                                                                                                                if (cached) return cached;
                                                                                                                                                                                                                                                                        // Hic yoksa ana sayfayi don
                                                                                                                                                                                                                                                                                return caches.match('/index.html');
                                                                                                                                                                                                                                                                                      });
                                                                                                                                                                                                                                                                                          })
                                                                                                                                                                                                                                                                                            );
                                                                                                                                                                                                                                                                                            });
