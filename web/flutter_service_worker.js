'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';
const RESOURCES = {
  "version.json": "473cd774c3ed90e455caa3aab8dfb66f",
"index.html": "69c0f1e631df72b070bfba8e0976b9b8",
"/": "69c0f1e631df72b070bfba8e0976b9b8",
"firebase-messaging-sw.js": "a27a9c68373598683d871c67a7be5bb3",
"main.dart.js": "80dc5aca2620beedb501df18565393c5",
"flutter.js": "0816e65a103ba8ba51b174eeeeb2cb67",
"favicon.png": "5dcef449791fa27946b3d35ad8803796",
"icons/Icon-192.png": "ac9a721a12bbc803b44f645561ecb1e1",
"icons/Icon-512.png": "96e752610906ba2a93c65f8abe1645f1",
"manifest.json": "d4b5f6714414ff876990ec38603b2b11",
"firebase-config.js": "b253ef974ea0471e87fe1ffb94937ab4",
"assets/AssetManifest.json": "916c79b02efd2fbff2f366ed64f6ce1c",
"assets/NOTICES": "e6fa25dab28546e9bab63f20da3b9e12",
"assets/FontManifest.json": "5a32d4310a6f5d9a6b651e75ba0d7372",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "6d342eb68f170c97609e9da345464e5e",
"assets/packages/font_awesome_flutter/lib/fonts/fa-solid-900.ttf": "dd3c4233029270506ecc994d67785a37",
"assets/packages/font_awesome_flutter/lib/fonts/fa-regular-400.ttf": "613e4cc1af0eb5148b8ce409ad35446d",
"assets/packages/font_awesome_flutter/lib/fonts/fa-brands-400.ttf": "d1722d5cf2c7855862f68edb85e31f88",
"assets/packages/flutter_sound_web/howler/howler.js": "2bba823e6b4d71ea019d81d384672823",
"assets/packages/flutter_sound_web/src/flutter_sound_recorder.js": "f7ac74c4e0fd5cd472d86c3fe93883fc",
"assets/packages/flutter_sound_web/src/flutter_sound_player.js": "6bf84579813fd481ec5e24e73927500d",
"assets/packages/flutter_sound_web/src/flutter_sound.js": "aecd83c80bf4faace0bcea4cd47ab307",
"assets/packages/wakelock_web/assets/no_sleep.js": "7748a45cd593f33280669b29c2c8919a",
"assets/lib/ai_ml/assets/check_lottie.json": "fed10869e6f612188c74405026b54542",
"assets/lib/ai_ml/assets/deployment_lottie.json": "d90727bfc5af52bd94e13fd27de58e1a",
"assets/lib/ai_ml/assets/ai_deployment_lottie.json": "6ea563ab3d5765d519db32bccab33728",
"assets/fonts/MaterialIcons-Regular.otf": "95db9098c58fd6db106f1116bae85a0b",
"assets/assets/easyconnect_app_logo_city_72.png": "932f63af1d24ba72c7b92e31d042455d",
"assets/assets/Place_Base.png": "dee5465e90efd702003749ab3e4d4397",
"assets/assets/easyconnect_app_logo_factory_300dpi.png": "e767b78b54c3e64c5369d2df4ee01d2d",
"assets/assets/contactadmin.png": "f7dcca96ad95738ff6ec3ec9f43dbe81",
"assets/assets/add_gray.json": "ab4bce24c0c1c02a7b04602508b4541f",
"assets/assets/city/noBackground.png": "9577931179394e470dabad9947be55d3",
"assets/assets/city/loginbackground.jpg": "9ab104c69bdc458dc8466e1ab5cea979",
"assets/assets/city/login3.jpg": "e493784a2be7d4d0dfcc832fd334e8dd",
"assets/assets/city/business.png": "41c8634165e464969021c287ec0f0c49",
"assets/assets/city/lottie/city.json": "bc302e94a52327d76af2126be8829132",
"assets/assets/city/appbackground.jpg": "c9418951aec96a15d6d05f1b97c1a7cb",
"assets/assets/carte.png": "d62468f59067d8e811f4a25795632eb6",
"assets/assets/oneClick.jpg": "8a6b727ed03c8747f8f9748714f864be",
"assets/assets/easyconnect_app_logo_building_72dpi.png": "959079ac54a09ac910377f9cbdaa1a21",
"assets/assets/easyconnect_app_logo_agriculture_300dpi.png": "f08c3d2e7d388b0adc59e78c2a041535",
"assets/assets/easyconnect_app_logo_factory_72dpi.png": "d119132ad61f3e19a1ffb258ab47089c",
"assets/assets/click_yellow.json": "82f29f5f37e37463b36caa9f8387c562",
"assets/assets/document.json": "708b61913d7f96802b54d2d53e50a13c",
"assets/assets/add_map.json": "b23c3a410d614c15dfa9d75fb7bf8bf0",
"assets/assets/launch_image.png": "f477d8a889bbc9986fe5546d07bfcb5f",
"assets/assets/add_green.json": "f3831f320761592445279d8e0a0a0f71",
"assets/assets/easyconnect_app_logo_agriculture_72dpi.png": "a7945ae837bd1c8986d5fd27ac360bf1",
"assets/assets/easyconnect_app_logo_city_300.png": "cd900580202c1322135e57a53abf4466",
"assets/assets/easyconnect_app_logo_building_300dpi.png": "946254e51f84c94cd62c25d9853066fa",
"assets/assets/agri/place_base.png": "dee5465e90efd702003749ab3e4d4397",
"assets/assets/agri/Place_Ensemencement.png": "a25bbccab76c5bad1549783fb01a0f4a",
"assets/assets/agri/noBackground.png": "a5bbb902cdf41009e73aa7aebf749ad8",
"assets/assets/agri/Place_Faucheuse.png": "9a385b6f8d54c1d72f8e33b41b71be8c",
"assets/assets/agri/Place_Tracteur.png": "65ee64136cfdaff22b9918cfff3b75fc",
"assets/assets/agri/Place_Epandeur.png": "bd062768592836f0230e80f3b42129d2",
"assets/assets/agri/loginbackground.png": "d7e5e033fee938755153fea5cbe8a390",
"assets/assets/agri/Place_Manutention.png": "00a19ad43f9a9866f1a4c39b0189d2b2",
"assets/assets/agri/Place_Labourage.png": "7350b36f790ef1bcdba903d4a846a533",
"assets/assets/agri/Place_Moissonneuse.png": "6bdf474523b510299e2e59ec41f365b6",
"assets/assets/agri/business.png": "46bd38ec8e44a467c16286cf4c055b7c",
"assets/assets/agri/place_base_24_33.png": "e8a6dc1874ad6df0c829daad965102f6",
"assets/assets/agri/lottie/tractor.json": "7ac9d02b306a0ba99971c12f64634e2d",
"assets/assets/agri/tmp_appbackground.jpg": "7c24f2dc1f81f628b9c589255df4636b",
"assets/assets/agri/appbackground.jpg": "5f166d7a80e379ade3627c6c59ef3d13",
"assets/assets/click_blue.json": "17dbedda4f3f8a101152393752b2a581",
"assets/assets/add_item.json": "7c6463eee361e2313ef8cc965724e1b9",
"assets/assets/building/Ventilation.png": "b5e77fa541c827d4c53d478a5cd696e3",
"assets/assets/building/noBackground.png": "d3b95530314a224d62f720579ce2efb0",
"assets/assets/building/loginbackground.jpg": "5d2a19fa0a10e609b1e32a739bd5f936",
"assets/assets/building/Climatisation.png": "71873ab49de22a40bd03dce6fcc41292",
"assets/assets/building/Gicleur.png": "4c1ae5447450d40ed9388b36e7194ede",
"assets/assets/building/Valve.png": "b965fbec33a1b95969b078de8d880fd8",
"assets/assets/building/r%25C3%25A9servoir_d_eau.png": "cdf16a64d8bd17d51a24f0ea280e0d75",
"assets/assets/building/business.png": "b48a8b830cf597eb28b21b6b2cc8db5a",
"assets/assets/building/lottie/building.json": "a4123fa89525fa0a5d9b49e94c29938c",
"assets/assets/building/Salle_d_eau.png": "57e7dd197f2d82b9c1218da1b37b11a8",
"assets/assets/building/appbackground.jpg": "81ae99fe954eff6d2be9897b1b308c57",
"assets/assets/add_item.png": "caec5f983408a2287bedc9d34a550527",
"canvaskit/canvaskit.js": "c2b4e5f3d7a3d82aed024e7249a78487",
"canvaskit/profiling/canvaskit.js": "ae2949af4efc61d28a4a80fffa1db900",
"canvaskit/profiling/canvaskit.wasm": "95e736ab31147d1b2c7b25f11d4c32cd",
"canvaskit/canvaskit.wasm": "4b83d89d9fecbea8ca46f2f760c5a9ba"
};

// The application shell files that are downloaded before a service worker can
// start.
const CORE = [
  "main.dart.js",
"index.html",
"assets/NOTICES",
"assets/AssetManifest.json",
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
        // lazily populate the cache.
        return response || fetch(event.request).then((response) => {
          cache.put(event.request, response.clone());
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
