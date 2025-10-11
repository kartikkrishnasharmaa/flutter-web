'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';

const RESOURCES = {"assets/AssetManifest.bin": "b235bcafa702320324008af6ed2117ca",
"assets/AssetManifest.bin.json": "302b113b37d8cba32b52d218f4c94fd2",
"assets/AssetManifest.json": "5f0ebf1fbb1bc028b8161fdba3e9ca4f",
"assets/assets/fonts/futura_bold.ttf": "9a1626276b430d216809407c3fbcda75",
"assets/assets/fonts/futura_light.ttf": "98d2f97305ab25d4511982e73740922e",
"assets/assets/fonts/futura_medium.ttf": "ee64fb9d3f1ba2333e1b489283925bce",
"assets/assets/fonts/futura_regular.ttf": "f9f02ed05aa86534c3842d44cb20d6c4",
"assets/assets/fonts/open_sans_bold.ttf": "f2a40b2ae2605e847aa935b7567688cd",
"assets/assets/fonts/open_sans_light.ttf": "73e3f737e5e416273389662092a666b1",
"assets/assets/fonts/open_sans_regular.ttf": "78b69821a6c0cc6fdcd1f4c3bb768fb7",
"assets/assets/fonts/open_sans_semi_bold.ttf": "2d70d77113ff88765d4a2e3e9ad8a9d9",
"assets/assets/images/background.webp": "612109acb5800e282a88d8a04c917e82",
"assets/assets/images/ic_account_setting_64.webp": "724d663cb23eede2a7ed21e87ad88bae",
"assets/assets/images/ic_baseline_credit_card_60.webp": "144d6f1a14bc34ab96aeb269999f877c",
"assets/assets/images/ic_baseline_history_60.webp": "bece6dfb7af53c43211082ec485da0a3",
"assets/assets/images/ic_booking.webp": "9115e4c7ed4f73a64ef103b815a211f3",
"assets/assets/images/ic_cash_withdrawal.webp": "3c4ffdaca507ba10b9e54bc6fc50f64f",
"assets/assets/images/ic_contact_us.webp": "fdef597c2792bf951c6f73a29d1ebc63",
"assets/assets/images/ic_credit_card.webp": "03ce1c266fdf977cd3d68b0944444ef2",
"assets/assets/images/ic_dashboard.webp": "f382fef8e4de0c35bb06c02e60147dfb",
"assets/assets/images/ic_destination_64.webp": "0a26a8795184cfc66ac991e343d49cbf",
"assets/assets/images/ic_facebook_64.webp": "21c1ab70312eadad899c901d03971daf",
"assets/assets/images/ic_favorite.webp": "28b5d0d784ffcc58de58c41c9a35220a",
"assets/assets/images/ic_gallery.webp": "a1d48e30d1ce9bdfe7ef0452d4dd9de6",
"assets/assets/images/ic_guider_home.webp": "86f05e494edb2909958df567c709eaea",
"assets/assets/images/ic_hawamahal.webp": "d196134bff392cf0d5b0c8fa88063b77",
"assets/assets/images/ic_help.webp": "4cd56ce696652edc36e3f8a8e95ce1f3",
"assets/assets/images/ic_house_64.webp": "f066f465e562a6ba2324764148e2cadb",
"assets/assets/images/ic_instagram_64.webp": "65ca88b8493c1b87844dbbb661800692",
"assets/assets/images/ic_log_out_64.webp": "e23b3c1174de294ab002db366356c1d3",
"assets/assets/images/ic_more_home.webp": "21d9508e5a3db0441213956fef19d78b",
"assets/assets/images/ic_notification.webp": "04bae1e51315002a8d685125cabe84fd",
"assets/assets/images/ic_phone_call.webp": "9dbcd64d988f81fc48057a4a9f781773",
"assets/assets/images/ic_photographers_home.webp": "8ca3968d4e8ee1f0011198f3e304a76c",
"assets/assets/images/ic_photographer_64.webp": "6cabb0eb1f11d809bc3ccc1309beda71",
"assets/assets/images/ic_photographer_request.webp": "2232526634442d24f55113cbb5c6187a",
"assets/assets/images/ic_place.webp": "b5c319a8fde0440ad7e7c1de4e541016",
"assets/assets/images/ic_privacy_policy_64.webp": "26df24d6c4d0e85e6ab063d494445389",
"assets/assets/images/ic_round_favorite_24.webp": "7eb60b20eb74a5ff1cbddf6712bc0ea3",
"assets/assets/images/ic_team_64.webp": "be44103a428f58aab04109fa9a80896c",
"assets/assets/images/ic_terms_and_conditions_64.webp": "f6eafd5098897fa50b633ed96813612f",
"assets/assets/images/ic_tourism_guide_64.webp": "f2a3bf33b04f36ee1e05a65dd5374446",
"assets/assets/images/ic_transactions.webp": "7c181c0012eafb646da52d6881957a13",
"assets/assets/images/ic_traveler.webp": "7145211affba81d80035ab8ff1b07cef",
"assets/assets/images/ic_twitter_64.webp": "3477d73576500042e4626da82485865e",
"assets/assets/images/ic_users.webp": "1891451163b85d1cd1e32fbd1d2e6a58",
"assets/assets/images/ic_whatsapp_64.webp": "96cd3650f4915683604f44bd9186c9bd",
"assets/assets/images/ic_world_travels.webp": "fb9600fc85567ab4f6986681c73ef2b9",
"assets/assets/images/kumbhalgarh_fort.webp": "9682d3146da51521f234a0529346a87b",
"assets/assets/images/svg/ic_dashboard.svg": "6359aab28d31a959295066ce7bd41915",
"assets/assets/images/svg/ic_transactions.svg": "eff78fde9fd324db48154f9af5d9940d",
"assets/assets/images/svg/ic_users.svg": "59f3d012236c5560c92ac87479dcde73",
"assets/assets/images/svg/ic_whatsapp.svg": "eca057824a1cbf642c7bfe892aa4ae5a",
"assets/assets/images/wave_bg.webp": "6622a02fb7bd0a00f7b26a8be15a6a54",
"assets/assets/logo/logo.png": "bb0f4e171f3e1df4a31678e89171b5dd",
"assets/FontManifest.json": "aa2ba73ac3e16dbe946647dcf7d8fb27",
"assets/fonts/MaterialIcons-Regular.otf": "0da7f1c89a28339d4189f3b2fb6b822a",
"assets/NOTICES": "3dd1c1f6942c470671f899340f12e5b3",
"assets/packages/awesome_dialog/assets/flare/error.flr": "e3b124665e57682dab45f4ee8a16b3c9",
"assets/packages/awesome_dialog/assets/flare/info.flr": "bc654ba9a96055d7309f0922746fe7a7",
"assets/packages/awesome_dialog/assets/flare/info2.flr": "21af33cb65751b76639d98e106835cfb",
"assets/packages/awesome_dialog/assets/flare/info_without_loop.flr": "cf106e19d7dee9846bbc1ac29296a43f",
"assets/packages/awesome_dialog/assets/flare/question.flr": "1c31ec57688a19de5899338f898290f0",
"assets/packages/awesome_dialog/assets/flare/succes.flr": "ebae20460b624d738bb48269fb492edf",
"assets/packages/awesome_dialog/assets/flare/succes_without_loop.flr": "3d8b3b3552370677bf3fb55d0d56a152",
"assets/packages/awesome_dialog/assets/flare/warning.flr": "68898234dacef62093ae95ff4772509b",
"assets/packages/awesome_dialog/assets/flare/warning_without_loop.flr": "c84f528c7e7afe91a929898988012291",
"assets/packages/awesome_dialog/assets/rive/error.riv": "e74e21f8b53de4b541dd037c667027c1",
"assets/packages/awesome_dialog/assets/rive/info.riv": "2a425920b11404228f613bc51b30b2fb",
"assets/packages/awesome_dialog/assets/rive/info_reverse.riv": "c6e814d66c0e469f1574a2f171a13a76",
"assets/packages/awesome_dialog/assets/rive/question.riv": "00f02da4d08c2960079d4cd8211c930c",
"assets/packages/awesome_dialog/assets/rive/success.riv": "73618ab4166b406e130c2042dc595f42",
"assets/packages/awesome_dialog/assets/rive/warning.riv": "0becf971559a68f9a74c8f0c6e0f8335",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "33b7d9392238c04c131b6ce224e13711",
"assets/packages/fluttertoast/assets/toastify.css": "a85675050054f179444bc5ad70ffc635",
"assets/packages/fluttertoast/assets/toastify.js": "56e2c9cedd97f10e7e5f1cebd85d53e3",
"assets/shaders/ink_sparkle.frag": "ecc85a2e95f5e9f53123dcaf8cb9b6ce",
"canvaskit/canvaskit.js": "140ccb7d34d0a55065fbd422b843add6",
"canvaskit/canvaskit.js.symbols": "58832fbed59e00d2190aa295c4d70360",
"canvaskit/canvaskit.wasm": "07b9f5853202304d3b0749d9306573cc",
"canvaskit/chromium/canvaskit.js": "5e27aae346eee469027c80af0751d53d",
"canvaskit/chromium/canvaskit.js.symbols": "193deaca1a1424049326d4a91ad1d88d",
"canvaskit/chromium/canvaskit.wasm": "24c77e750a7fa6d474198905249ff506",
"canvaskit/skwasm.js": "1ef3ea3a0fec4569e5d531da25f34095",
"canvaskit/skwasm.js.symbols": "0088242d10d7e7d6d2649d1fe1bda7c1",
"canvaskit/skwasm.wasm": "264db41426307cfc7fa44b95a7772109",
"canvaskit/skwasm_heavy.js": "413f5b2b2d9345f37de148e2544f584f",
"canvaskit/skwasm_heavy.js.symbols": "3c01ec03b5de6d62c34e17014d1decd3",
"canvaskit/skwasm_heavy.wasm": "8034ad26ba2485dab2fd49bdd786837b",
"favicon.png": "5dcef449791fa27946b3d35ad8803796",
"flutter.js": "888483df48293866f9f41d3d9274a779",
"flutter_bootstrap.js": "75ad48ea9a8f101fd549771e6093f1f0",
"icons/Icon-192.png": "ac9a721a12bbc803b44f645561ecb1e1",
"icons/Icon-512.png": "96e752610906ba2a93c65f8abe1645f1",
"icons/Icon-maskable-192.png": "c457ef57daa1d16f64b27b786ec2ea3c",
"icons/Icon-maskable-512.png": "301a7604d45b3e739efc881eb04896ea",
"index.html": "c381f0c854de10e674435f0fedcb68f5",
"/": "c381f0c854de10e674435f0fedcb68f5",
"main.dart.js": "0760736032ece0866f047e1e8e0e33a9",
"manifest.json": "48847366e76f6cdcbd28767860cc8a0d",
"version.json": "2736357b626527c6c8902f987f1a2e95"};
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
