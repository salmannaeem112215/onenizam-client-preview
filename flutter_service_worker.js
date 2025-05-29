'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';

const RESOURCES = {"assets/AssetManifest.bin": "492b4d6d67d2ec332b7fd662f8e127be",
"assets/AssetManifest.bin.json": "e9d4544dc5ffddcad5d54b21928ee4f3",
"assets/AssetManifest.json": "fd08837ad66eeef516431f68182f0e94",
"assets/assets/data/animal_listing.json": "28909656713869c42b80c31067692220",
"assets/assets/data/appointment_data.json": "baa7f64c965151a68b8dd1c1af76e253",
"assets/assets/data/drag_n_drop_data.json": "386fce3d8ebfa695811884c3419fa7f3",
"assets/assets/data/manage_pets_data.json": "62752717d36f9b4d0919fb3d00166ca3",
"assets/assets/data/pet_care_service_data.json": "ecb78e77bbcc9b7ff124f671d416ed68",
"assets/assets/data/visitors_by_channels_data.json": "5eac3c325717b8ee979c8bdd24caf210",
"assets/assets/images/animals/animal_1.jpg": "53d90b9a315a5777cd5f4efa7597d17d",
"assets/assets/images/animals/animal_10.jpg": "a086c6a1e53474914c4a73b5929ca5cd",
"assets/assets/images/animals/animal_2.jpg": "27bc68cc6c016c1cd0959b7512222baa",
"assets/assets/images/animals/animal_3.jpg": "3ea886858547902127dd65fe1d3e922a",
"assets/assets/images/animals/animal_4.jpg": "db77900a088098b8d851f5b11d8b8284",
"assets/assets/images/animals/animal_5.jpg": "a7e52c6ea498c0dc3d5a0539313cb680",
"assets/assets/images/animals/animal_6.jpg": "870ac942c8d3e770c428f3c2fd59b5b6",
"assets/assets/images/animals/animal_7.jpg": "dfe1ec1dddb1e0694c60e75854155de6",
"assets/assets/images/animals/animal_8.jpg": "7091c3a00badba97eb750ab749c5f17d",
"assets/assets/images/animals/animal_9.jpg": "6e49dea7a0ba064d0359117bcbc29c5e",
"assets/assets/images/avatar/avatar_1.png": "1c383402616e08fef790158cf58b0c00",
"assets/assets/images/avatar/avatar_10.png": "13bb6f32341697bc15f5cf23a1518192",
"assets/assets/images/avatar/avatar_2.png": "3ab38f38e356559eb2af71bb75c5258b",
"assets/assets/images/avatar/avatar_3.png": "15e6fb546831637c3e7da45fd10fc2aa",
"assets/assets/images/avatar/avatar_4.png": "83c46694524f405a41eeffb7bd67c6f1",
"assets/assets/images/avatar/avatar_5.png": "966f7d395f2e9fc0adbe6a02f307e056",
"assets/assets/images/avatar/avatar_6.png": "d642f0e963f62873d3f4af92b4defd20",
"assets/assets/images/avatar/avatar_7.png": "3391653c9fe23c9b7f296ba2372fc373",
"assets/assets/images/avatar/avatar_8.png": "3aa274414a47fd33f80cbce093a7d2bc",
"assets/assets/images/avatar/avatar_9.png": "b878ce0ac256cd397f5a453b0a5f09b6",
"assets/assets/images/dummy/auth_background.jpg": "1cf01f3da0984bcf80dcf533497ad730",
"assets/assets/images/dummy/courier_1.png": "941b0abbebcf1bd4a1c83b1676e7044e",
"assets/assets/images/dummy/dog-food.png": "e2c14754a1205f2c7fba6b7e02de3097",
"assets/assets/images/dummy/dummy_1.jpg": "05d53c1da8fc3d83d34d2d75f583540c",
"assets/assets/images/dummy/dummy_2.jpg": "473f1faccfcf2fa2e3ddc9fd716c8ac5",
"assets/assets/images/dummy/dummy_3.jpg": "c2b5e67dd3bd59f4986ae621ac672f6b",
"assets/assets/images/dummy/dummy_4.jpg": "2383b702f92db7eea65d3409fffc3545",
"assets/assets/images/dummy/dummy_5.jpg": "4c53dfa3de8f07ac508f7e8f3310f2b5",
"assets/assets/images/dummy/playing.png": "e1597d5a489950e04268bfe9ed316a64",
"assets/assets/images/pet_eat/pet_eat_1.jpg": "92fbb31c658b5f4915547466a9692ff8",
"assets/assets/images/pet_eat/pet_eat_10.jpg": "a6590ed9056ed1f2c102a681630e68b9",
"assets/assets/images/pet_eat/pet_eat_2.jpg": "f0f8460b7da0444402e1a9d5c61935eb",
"assets/assets/images/pet_eat/pet_eat_3.jpg": "083fc3b0be1585a4dc396e41f125863d",
"assets/assets/images/pet_eat/pet_eat_4.jpg": "309cfbb22e24fa7bfb60011625a09e11",
"assets/assets/images/pet_eat/pet_eat_5.jpg": "3f48e2317f9f75d34f33364aeb19010d",
"assets/assets/images/pet_eat/pet_eat_6.jpg": "cfaa57a39e1e319ca53c7425ea8efc60",
"assets/assets/images/pet_eat/pet_eat_7.jpg": "8e5e8c840e6d0ba9b308ce445063f060",
"assets/assets/images/pet_eat/pet_eat_8.jpg": "cd5457d80b2ae5adac8d72fcb70fd451",
"assets/assets/images/pet_eat/pet_eat_9.jpg": "b53e606b4230b2e2c9636a26a03d7612",
"assets/assets/images/poster/poster_1.jpg": "8b36f64f9514210d732e8da78ef97223",
"assets/assets/images/poster/poster_2.jpg": "a3b5750150d52bd0b19bafb8cba7cbe8",
"assets/assets/images/poster/poster_3.jpg": "60e29b86e6aa6bf15d2123fe44efc945",
"assets/assets/lang/ar.jpg": "9143f6bb9f70a7082b2d49a2fa2b0339",
"assets/assets/lang/ar.json": "6e772c89432019cc901e28404b85559f",
"assets/assets/lang/en.jpg": "6dd96569bff0a5c5ada7d99222b9815d",
"assets/assets/lang/en.json": "ab6875cb360d40776e89dc3dfc2cf4b4",
"assets/assets/lang/es.jpg": "25d67fb418ce2623d770679b2fd4f575",
"assets/assets/lang/es.json": "d4f1619a23b6be7ec06383ab2affd4a2",
"assets/assets/lang/fr.jpg": "ed28420a8f74b0631c24659a40511c2d",
"assets/assets/lang/fr.json": "b3636aca89944180d4033fded7e35081",
"assets/assets/lang/hi.jpg": "806b19b66156a2bfcb232d4f6518747a",
"assets/assets/lang/hi.json": "e1f53fd0d994711b95ef1acaffc89204",
"assets/FontManifest.json": "95204935b8d19811d87fbae8f5d2c2d1",
"assets/fonts/MaterialIcons-Regular.otf": "eae9151939954dc7304a110475a39dc9",
"assets/NOTICES": "2cbfd9b3dcc5b866b659324a915223d7",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "33b7d9392238c04c131b6ce224e13711",
"assets/packages/flutter_lucide/lib/fonts/lucide.ttf": "72aa7fc1b28be0cf25a0bf483e1fa2c7",
"assets/packages/quill_native_bridge_linux/assets/xclip": "d37b0dbbc8341839cde83d351f96279e",
"assets/packages/timezone/data/latest_all.tzf": "df0e82dd729bbaca78b2aa3fd4efd50d",
"assets/shaders/ink_sparkle.frag": "ecc85a2e95f5e9f53123dcaf8cb9b6ce",
"canvaskit/canvaskit.js": "6cfe36b4647fbfa15683e09e7dd366bc",
"canvaskit/canvaskit.js.symbols": "68eb703b9a609baef8ee0e413b442f33",
"canvaskit/canvaskit.wasm": "efeeba7dcc952dae57870d4df3111fad",
"canvaskit/chromium/canvaskit.js": "ba4a8ae1a65ff3ad81c6818fd47e348b",
"canvaskit/chromium/canvaskit.js.symbols": "5a23598a2a8efd18ec3b60de5d28af8f",
"canvaskit/chromium/canvaskit.wasm": "64a386c87532ae52ae041d18a32a3635",
"canvaskit/skwasm.js": "f2ad9363618c5f62e813740099a80e63",
"canvaskit/skwasm.js.symbols": "80806576fa1056b43dd6d0b445b4b6f7",
"canvaskit/skwasm.wasm": "f0dfd99007f989368db17c9abeed5a49",
"canvaskit/skwasm_st.js": "d1326ceef381ad382ab492ba5d96f04d",
"canvaskit/skwasm_st.js.symbols": "c7e7aac7cd8b612defd62b43e3050bdd",
"canvaskit/skwasm_st.wasm": "56c3973560dfcbf28ce47cebe40f3206",
"favicon.ico": "9c1ee6d1e348b1a20d318b31672b4241",
"flutter.js": "76f08d47ff9f5715220992f993002504",
"flutter_bootstrap.js": "e364395419547dcc436a9d1a1fa438aa",
"icons/Icon-192.png": "ac9a721a12bbc803b44f645561ecb1e1",
"icons/Icon-512.png": "96e752610906ba2a93c65f8abe1645f1",
"icons/Icon-maskable-192.png": "c457ef57daa1d16f64b27b786ec2ea3c",
"icons/Icon-maskable-512.png": "301a7604d45b3e739efc881eb04896ea",
"img/splash.png": "03a5ef17dfd9e0d68e915090a320af9a",
"index.html": "476ef5350e0c8ed642ab761a120f89bc",
"/": "476ef5350e0c8ed642ab761a120f89bc",
"main.dart.js": "25d35dba0c7f64195a8696a1d4579b6b",
"manifest.json": "c9a4a157cf5b37e988b24704542c71e2",
"version.json": "4c577262f0d9b1ac6617e8f00a7ecc48"};
// The application shell files that are downloaded before a service worker can
// start.
const CORE = ["main.dart.js",
"index.html",
"flutter_bootstrap.js",
"assets/AssetManifest.bin.json",
"assets/FontManifest.json"];

// During install, the TEMP cache is populated with the application shell files.
self.addEventListener("install", (event) => {
  self.skipWaiting();
  return event.waitUntil(
    caches.open(TEMP).then((cache) => {
      return cache.addAll(
        CORE.map((value) => new Request(value, {'cache': 'reload'})));
    })
  );
});
// During activate, the cache is populated with the temp files downloaded in
// install. If this service worker is upgrading from one with a saved
// MANIFEST, then use this to retain unchanged resource files.
self.addEventListener("activate", function(event) {
  return event.waitUntil(async function() {
    try {
      var contentCache = await caches.open(CACHE_NAME);
      var tempCache = await caches.open(TEMP);
      var manifestCache = await caches.open(MANIFEST);
      var manifest = await manifestCache.match('manifest');
      // When there is no prior manifest, clear the entire cache.
      if (!manifest) {
        await caches.delete(CACHE_NAME);
        contentCache = await caches.open(CACHE_NAME);
        for (var request of await tempCache.keys()) {
          var response = await tempCache.match(request);
          await contentCache.put(request, response);
        }
        await caches.delete(TEMP);
        // Save the manifest to make future upgrades efficient.
        await manifestCache.put('manifest', new Response(JSON.stringify(RESOURCES)));
        // Claim client to enable caching on first launch
        self.clients.claim();
        return;
      }
      var oldManifest = await manifest.json();
      var origin = self.location.origin;
      for (var request of await contentCache.keys()) {
        var key = request.url.substring(origin.length + 1);
        if (key == "") {
          key = "/";
        }
        // If a resource from the old manifest is not in the new cache, or if
        // the MD5 sum has changed, delete it. Otherwise the resource is left
        // in the cache and can be reused by the new service worker.
        if (!RESOURCES[key] || RESOURCES[key] != oldManifest[key]) {
          await contentCache.delete(request);
        }
      }
      // Populate the cache with the app shell TEMP files, potentially overwriting
      // cache files preserved above.
      for (var request of await tempCache.keys()) {
        var response = await tempCache.match(request);
        await contentCache.put(request, response);
      }
      await caches.delete(TEMP);
      // Save the manifest to make future upgrades efficient.
      await manifestCache.put('manifest', new Response(JSON.stringify(RESOURCES)));
      // Claim client to enable caching on first launch
      self.clients.claim();
      return;
    } catch (err) {
      // On an unhandled exception the state of the cache cannot be guaranteed.
      console.error('Failed to upgrade service worker: ' + err);
      await caches.delete(CACHE_NAME);
      await caches.delete(TEMP);
      await caches.delete(MANIFEST);
    }
  }());
});
// The fetch handler redirects requests for RESOURCE files to the service
// worker cache.
self.addEventListener("fetch", (event) => {
  if (event.request.method !== 'GET') {
    return;
  }
  var origin = self.location.origin;
  var key = event.request.url.substring(origin.length + 1);
  // Redirect URLs to the index.html
  if (key.indexOf('?v=') != -1) {
    key = key.split('?v=')[0];
  }
  if (event.request.url == origin || event.request.url.startsWith(origin + '/#') || key == '') {
    key = '/';
  }
  // If the URL is not the RESOURCE list then return to signal that the
  // browser should take over.
  if (!RESOURCES[key]) {
    return;
  }
  // If the URL is the index.html, perform an online-first request.
  if (key == '/') {
    return onlineFirst(event);
  }
  event.respondWith(caches.open(CACHE_NAME)
    .then((cache) =>  {
      return cache.match(event.request).then((response) => {
        // Either respond with the cached resource, or perform a fetch and
        // lazily populate the cache only if the resource was successfully fetched.
        return response || fetch(event.request).then((response) => {
          if (response && Boolean(response.ok)) {
            cache.put(event.request, response.clone());
          }
          return response;
        });
      })
    })
  );
});
self.addEventListener('message', (event) => {
  // SkipWaiting can be used to immediately activate a waiting service worker.
  // This will also require a page refresh triggered by the main worker.
  if (event.data === 'skipWaiting') {
    self.skipWaiting();
    return;
  }
  if (event.data === 'downloadOffline') {
    downloadOffline();
    return;
  }
});
// Download offline will check the RESOURCES for all files not in the cache
// and populate them.
async function downloadOffline() {
  var resources = [];
  var contentCache = await caches.open(CACHE_NAME);
  var currentContent = {};
  for (var request of await contentCache.keys()) {
    var key = request.url.substring(origin.length + 1);
    if (key == "") {
      key = "/";
    }
    currentContent[key] = true;
  }
  for (var resourceKey of Object.keys(RESOURCES)) {
    if (!currentContent[resourceKey]) {
      resources.push(resourceKey);
    }
  }
  return contentCache.addAll(resources);
}
// Attempt to download the resource online before falling back to
// the offline cache.
function onlineFirst(event) {
  return event.respondWith(
    fetch(event.request).then((response) => {
      return caches.open(CACHE_NAME).then((cache) => {
        cache.put(event.request, response.clone());
        return response;
      });
    }).catch((error) => {
      return caches.open(CACHE_NAME).then((cache) => {
        return cache.match(event.request).then((response) => {
          if (response != null) {
            return response;
          }
          throw error;
        });
      });
    })
  );
}
