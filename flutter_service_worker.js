'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';

const RESOURCES = {".git/COMMIT_EDITMSG": "16ec07ff1a7451275f7286035ba8c84d",
".git/config": "83d6e0b4e3a0c224e4098ac4379d1d01",
".git/description": "a0a7c3fff21f2aea3cfa1d0316dd816c",
".git/FETCH_HEAD": "6652f0e7fc52faa5ff7513e7cefa9c58",
".git/HEAD": "cf7dd3ce51958c5f13fece957cc417fb",
".git/hooks/applypatch-msg.sample": "ce562e08d8098926a3862fc6e7905199",
".git/hooks/commit-msg.sample": "579a3c1e12a1e74a98169175fb913012",
".git/hooks/fsmonitor-watchman.sample": "a0b2633a2c8e97501610bd3f73da66fc",
".git/hooks/post-update.sample": "2b7ea5cee3c49ff53d41e00785eb974c",
".git/hooks/pre-applypatch.sample": "054f9ffb8bfe04a599751cc757226dda",
".git/hooks/pre-commit.sample": "305eadbbcd6f6d2567e033ad12aabbc4",
".git/hooks/pre-merge-commit.sample": "39cb268e2a85d436b9eb6f47614c3cbc",
".git/hooks/pre-push.sample": "2c642152299a94e05ea26eae11993b13",
".git/hooks/pre-rebase.sample": "56e45f2bcbc8226d2b4200f7c46371bf",
".git/hooks/pre-receive.sample": "2ad18ec82c20af7b5926ed9cea6aeedd",
".git/hooks/prepare-commit-msg.sample": "2b5c047bdb474555e1787db32b2d2fc5",
".git/hooks/push-to-checkout.sample": "c7ab00c7784efeadad3ae9b228d4b4db",
".git/hooks/sendemail-validate.sample": "4d67df3a8d5c98cb8565c07e42be0b04",
".git/hooks/update.sample": "647ae13c682f7827c22f5fc08a03674e",
".git/index": "e23c066019de3d9b25c57579e52b1b74",
".git/info/exclude": "036208b4a1ab4a235d75c181e685e5a3",
".git/logs/HEAD": "21baf1a5c49b8acbde96d4596390959a",
".git/logs/refs/heads/gh-pages": "275f2fecded8a798749b5ba8b8e83040",
".git/logs/refs/heads/main": "a05639b23106d44ee3978d2a46d118f1",
".git/logs/refs/remotes/origin/main": "171601deef66fc555edd41f49506820b",
".git/objects/00/a9a6571f2610065b639c5dcc19427972d702de": "d1cc25e93fbceeacad5af5f06b8f3292",
".git/objects/08/a933d43a6de21b6b7041b21ff2823eae760ef8": "5d2788246507cd43ffcbab626894ec88",
".git/objects/17/fb60eeb1379062b43bd4a7dad873927a303d49": "dad6c82b12631e51a2a1299132ee0eba",
".git/objects/18/e225511507c9e93bfbb97e5da562a601b0dbd6": "2e859e4abe1b085cb19c7c1f808dbeeb",
".git/objects/19/20af1e526a255ee2c70c5c4fe6eca54e768f0e": "eba684fae2f6d88d01f1c37af7c7d306",
".git/objects/19/b8b1160efea925c9ec148cac488c4033ed92cb": "8bedf773cca99ecd91182e201d10d4ac",
".git/objects/1e/a95ff81a1ca3d34250d8e20a2a4984065f288d": "3ccf0d265f9deb100345a5aeafee1161",
".git/objects/20/1cc58b85387a7c15ca41662393dbd53e9c600f": "0250a4f0eb6d058379358ed628505414",
".git/objects/26/fd3dc5d4f3dec2aa2680a56000093e7c7f28b2": "61532dce5ba39e49fb442eff4bc22916",
".git/objects/2e/ed8c090e87393e1fe68fdb7e99bb78dc05d441": "716cff2c46493544a868661b220462e1",
".git/objects/35/0040a641f37de37d475ad261a59288764171a0": "b2d6e1b5328ac3274898a46f36c037c9",
".git/objects/35/0208b86c46b1dfad67290f6576ab48cdae2db1": "432e1825e006194bd033fc9837bbf7e9",
".git/objects/35/91af41948adc8001f3586d76b91181311953fc": "c91d33b29071dcff3b2b3385383761cb",
".git/objects/36/36e92b40bf65cc367cb38c829294ca7bdd3e71": "56bad09a5761f1445d80e25cf749cd46",
".git/objects/3c/98d13c41059500b90950f2bf5f82a5001bd3dd": "5e9ba76c0d14b596905651481386aa93",
".git/objects/45/229bdf6fae50d031f588e5ce7d8de11bd469b1": "553dbceeda59827d9d733bba7b705c04",
".git/objects/46/d64b5ec7dab541a011c65fd09227a8ba27ac5a": "9918386edd1409f9c33b6ef706bcb4ea",
".git/objects/4b/c79deab2707f054bf8e0eadcc6f7e224c3e06f": "44de83bc6d88555d015ea62ff6b8c87b",
".git/objects/53/7807567919e88db2866b7825339c57e94c24d8": "970aec5149a3dbe9370a9dc982cdd022",
".git/objects/55/099e822b86c848fc2f9ebf038e88c37f240fc5": "db88dba498015f73b9b3d2f99f769667",
".git/objects/56/e054c3779a6a0416b589c798632185c296ec90": "4f61fa65c2b8e38bff057de1abb59bc2",
".git/objects/59/c3f21b75149aa4940c24c2594d0db746d29a52": "e030c8f5247185b0f4d83f68aa622ba5",
".git/objects/5c/a2ce44919517cdf0345b92da84afca8d6c33fa": "5ff000524757d10fc5ece4c6cb14db5b",
".git/objects/5f/22e4f2f0a5e8267805a6ad7fcc09c4ebd35731": "eb2e3f50590e917d3787ed15054b35f1",
".git/objects/68/580d45c14630782f3514da187b7070b8c9877a": "eca2ff159b1071e35deb8758306c559b",
".git/objects/6b/f13816cc41c2a9e7f325d1bd6251f8d826d654": "b98e926a5f47124bda356e6d8e90e80d",
".git/objects/6f/2f8b6c33d441bb1758d1cf6933bc405be66c62": "2ee158001362466bd1cdc03b9310c118",
".git/objects/72/3cb7fb1d7da585ce401565adbb94050c2c1d00": "9620dfa67539255a57b3de89a03684ba",
".git/objects/72/9c19bd1db8d05967a734ec81f7b70beface615": "96c02e39c48ff8b26b848581713cbc6b",
".git/objects/78/b22b26343e2830e587953eb275bb94b28bf2b2": "085f712db8aa611e418b5c166506da28",
".git/objects/88/cfd48dff1169879ba46840804b412fe02fefd6": "e42aaae6a4cbfbc9f6326f1fa9e3380c",
".git/objects/8a/aa46ac1ae21512746f852a42ba87e4165dfdd1": "1d8820d345e38b30de033aa4b5a23e7b",
".git/objects/8a/d41123112dcc05e645c65693277074ac106233": "3de645de309caa9346a728f03e403fdd",
".git/objects/8e/f1e6b94a7081ab78616af426630a6d96722417": "a027646039cedfffc4994902c9aea096",
".git/objects/94/9e331acef2b8c7fa2a1c290da95fcd2c2355ef": "c48a79f9f1d0b5844b45627f29e19cb4",
".git/objects/96/563ef639fb9000f8d237b61933723339e12eed": "6a9c28edd78d942e30ab7e02acd8ebb0",
".git/objects/98/9f323b1e32b3522c404c91818fb9b67a5e76c0": "40621651a2d95c3406fd94d623dfce09",
".git/objects/9b/89c9c6ad8d31ecfabdd2d57ec9c45a7f196e1a": "d533600e04097cdb936fab86eb9b72b3",
".git/objects/9d/5f886353dcff6c222439cc1118e77eb1b007ea": "a87ff240c6e149d1ce495643e49417f9",
".git/objects/9f/46bb964af7d8c41a134391edb52ffe8753b078": "a0cbe4b89871c9a19495997dc3e45e1f",
".git/objects/a7/8f94b1fe6e892d5be0724f10e2e852a87a151d": "c5a21c9507ce43c0fabc6b79bde142c9",
".git/objects/ac/b92094fe13439ff906ad7587c33855ae9b4379": "bc75f37ac47f2734ac7d5e57280b9779",
".git/objects/af/b0f11ca4a06b9dcb882955869b097dbcfcf494": "a09c8de81acd1bdd3820d3f4e863f73c",
".git/objects/b0/388b507995d31a7809091d308b3b3a42922fe2": "274dad4ca66f516a1d97b7ddfb27020c",
".git/objects/b1/3d7cb66e8237124c55b0a52d5ac87646d02b73": "047844fc7c47072b4ad86903e18f5ae2",
".git/objects/b7/49bfef07473333cf1dd31e9eed89862a5d52aa": "36b4020dca303986cad10924774fb5dc",
".git/objects/b9/2a0d854da9a8f73216c4a0ef07a0f0a44e4373": "f62d1eb7f51165e2a6d2ef1921f976f3",
".git/objects/b9/8d7cf5cfd34b84f238674abc791fc4c60cac57": "b5a9d9513e0cea58342fa173d5416732",
".git/objects/bb/ac29f5ef7a40bf14c0901bc1457724156bc0de": "1393f20f0610cabefe2d4f45865b0f54",
".git/objects/c2/d8d2f44dd987786bbc249d4ad7bac3360f4811": "1926a57b256d9def261ccf6dc2914f65",
".git/objects/c3/51f7deeda468257dfdb45ae308726dcbc28042": "19890c75a8ba27275c57431bd95e370e",
".git/objects/c5/6165372a34b34218cbc9a8ef6fa2d0eb1d8c5b": "32bd5a56c3355e24513f1acfd4be00f4",
".git/objects/c8/83fd893ba0f1205574c91bfa7005810bd2fe9a": "065c50718ebca27a68aa3fdc3d2d8442",
".git/objects/cf/727b845e8dbed9a8e51ec5d0080b3b4c40f4a7": "8792a257b160684e45742fe142c0e6cb",
".git/objects/cf/b7da5f27be35eac7151a83ec11ff091a67693e": "2057ab4e250a5478edaa81440d07c24d",
".git/objects/d1/a2c43ab04dc8ed8c3dedc59f9993b441a24e87": "4cf120fd2a59bc7ae6203fc0dfd63ae6",
".git/objects/d1/a3b116a63f4ea2e035f0b6df26c949b5e8066b": "4894a9bbe9f1196b0960850f8aadf93d",
".git/objects/d2/6e8cd98d5760bea76922c7bd74b0806d231267": "f05a786aca76132256f781530ca97e23",
".git/objects/d2/95fd52d0343565abdbc84abec859772aeafc56": "a046665bf06f113d7ccc40ac085ccfa5",
".git/objects/d3/efa7fd80d9d345a1ad0aaa2e690c38f65f4d4e": "610858a6464fa97567f7cce3b11d9508",
".git/objects/d4/b9b85733ab7e26625d59ddf558ab9d6ef9bb72": "63a576474ae6756784d1609953b8da84",
".git/objects/d5/b54bd4a898b373f82bb1fa52b9580e7a976e3e": "943e27e1d359e2bc22daf20c70287c19",
".git/objects/d6/5301a7e441ec4dd49574473be0ed6db7375f25": "716eabb221e034eca43c8219daae16d2",
".git/objects/d6/5971171cb6f3574083ae8206cddcf8958a8853": "d3d3b6441015ad48af738af435b6e178",
".git/objects/d6/9c56691fbdb0b7efa65097c7cc1edac12a6d3e": "868ce37a3a78b0606713733248a2f579",
".git/objects/d7/2c11112c7cb4e2ce754bc41470f9b829a2d00a": "d7280a766a5d6033f187d874a92b5ad6",
".git/objects/d7/7b3f798b4da25b7f78869929a4399769c17817": "70323a973c26127d9e421bc9ee9afd2d",
".git/objects/e0/49c81f7cb35ebc411a3e1b547bf4ccf91292e8": "efad70dc0ca77a90ee53b5cc3be528ca",
".git/objects/e2/ff5865b192241d53935e77de70a4e6dff2847a": "cad1058aedc6c21a518b3cb00af21fac",
".git/objects/e4/78d7d5b7e55a020772e31e07c61323be05195d": "520d5ebd1a9f3f6462b3d5b720fbae9d",
".git/objects/e5/aece531e9636c789e384190f2abdf5c9f89958": "d3f1987e1a9d2e79e807af4d5b008feb",
".git/objects/e6/46d591f99adb142edab348e5d728ad2bddc4a3": "7630b34441d494db3bf4d884cd250e72",
".git/objects/e6/6693a9bc3605a4bd8729b4d9ad2f25a3497b10": "05d07a6491592ae5c8bc7af7c0cae18b",
".git/objects/e6/b745f90f2a4d1ee873fc396496c110db8ff0f3": "2933b2b2ca80c66b96cf80cd73d4cd16",
".git/objects/eb/9b4d76e525556d5d89141648c724331630325d": "37c0954235cbe27c4d93e74fe9a578ef",
".git/objects/fc/de1bb3df8c330568f07ef326d43d8ae3562897": "6e5bf2450330342c243afc3723b9c27e",
".git/objects/fd/b4f4a2d68a6faced07a4f225fb98e73c41fbdb": "6545ceb7fb0bb07b5b262282d730f652",
".git/ORIG_HEAD": "6a9df9ac7f77eaba7095482a99303eec",
".git/refs/heads/gh-pages": "c6f0c6274f3bb8bc40b1c2711adebde2",
".git/refs/heads/main": "9650bdb07627c4f47e86705b1280d893",
".git/refs/remotes/origin/main": "9650bdb07627c4f47e86705b1280d893",
"assets/AssetManifest.bin": "18dbfb64065d71a282fa798cbb9bb431",
"assets/AssetManifest.json": "f4f7756a21ad8f922fe7d742ade95f53",
"assets/assets/pokemon/image%2520(1).png": "e865d9ab5f6810dc297b1504febf0d05",
"assets/assets/pokemon/image%2520(10).png": "18b7dee6a7bc157379eacd03c98b5fc7",
"assets/assets/pokemon/image%2520(11).png": "5e152c8afcbc13ed4371faf76c8aded3",
"assets/assets/pokemon/image%2520(12).png": "f0ae8f8eea21ec4e5b267bd5a62bdb35",
"assets/assets/pokemon/image%2520(13).png": "40eca58c14ebea6f5470287b05f4cabf",
"assets/assets/pokemon/image%2520(14).png": "a0800b90934aa80091e6edc24c512f85",
"assets/assets/pokemon/image%2520(15).png": "7bd06f396696947a8e3fed7e1a9a68b6",
"assets/assets/pokemon/image%2520(16).png": "1cd5930fbeea448326e89eb10397479f",
"assets/assets/pokemon/image%2520(17).png": "2bf3a7cd03f4ae06de7a3680af653577",
"assets/assets/pokemon/image%2520(18).png": "6c4ad1f34151c93cdcfd125e846a38b4",
"assets/assets/pokemon/image%2520(19).png": "0ab3cbc636ad463ebb5309ea5043e464",
"assets/assets/pokemon/image%2520(2).png": "55f2d06f10ec4e07278bc39cff97ecf5",
"assets/assets/pokemon/image%2520(20).png": "d8f8c998df0e38364a533c0f4c03ba26",
"assets/assets/pokemon/image%2520(3).png": "46c1fbdf24873591d2f1ad277a2fbaac",
"assets/assets/pokemon/image%2520(4).png": "2d1b169ffb44e0597f736c25e666bb60",
"assets/assets/pokemon/image%2520(5).png": "d64bf8e3bd7f000723cc787188a92483",
"assets/assets/pokemon/image%2520(6).png": "c88a37c637405de4f95cbd461991acb0",
"assets/assets/pokemon/image%2520(7).png": "23ca808fc1831573a53409ec170cff3e",
"assets/assets/pokemon/image%2520(8).png": "38e40807fb6caff900b16d8c86f36aea",
"assets/assets/pokemon/image%2520(9).png": "03c461cc5a797ac5ea104080f5ed6daf",
"assets/FontManifest.json": "0f42625db513f9c5a1573eba48ad7211",
"assets/Fonts/HStkb.ttf": "4a1812602f0ccb90fb98964c20b3682a",
"assets/Fonts/MaterialIcons-Regular.otf": "32fce58e2acb9c420eab0fe7b828b761",
"assets/NOTICES": "e79c844ca8e9972ff582d50593369091",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "89ed8f4e49bcdfc0b5bfc9b24591e347",
"assets/packages/font_awesome_flutter/lib/fonts/fa-brands-400.ttf": "5ac99533bd9dc46227434b4853c3e532",
"assets/packages/font_awesome_flutter/lib/fonts/fa-regular-400.ttf": "093d2cde7075fcffb24ab215668d0da2",
"assets/packages/font_awesome_flutter/lib/fonts/fa-solid-900.ttf": "1e17b1ec3152f29bf783bd42db8b6023",
"assets/shaders/ink_sparkle.frag": "f8b80e740d33eb157090be4e995febdf",
"canvaskit/canvaskit.js": "5caccb235fad20e9b72ea6da5a0094e6",
"canvaskit/canvaskit.wasm": "d9f69e0f428f695dc3d66b3a83a4aa8e",
"canvaskit/chromium/canvaskit.js": "ffb2bb6484d5689d91f393b60664d530",
"canvaskit/chromium/canvaskit.wasm": "393ec8fb05d94036734f8104fa550a67",
"canvaskit/skwasm.js": "95f16c6690f955a45b2317496983dbe9",
"canvaskit/skwasm.wasm": "d1fde2560be92c0b07ad9cf9acb10d05",
"canvaskit/skwasm.worker.js": "51253d3321b11ddb8d73fa8aa87d3b15",
"favicon.png": "5dcef449791fa27946b3d35ad8803796",
"flutter.js": "6b515e434cea20006b3ef1726d2c8894",
"icons/Icon-192.png": "ac9a721a12bbc803b44f645561ecb1e1",
"icons/Icon-512.png": "96e752610906ba2a93c65f8abe1645f1",
"icons/Icon-maskable-192.png": "c457ef57daa1d16f64b27b786ec2ea3c",
"icons/Icon-maskable-512.png": "301a7604d45b3e739efc881eb04896ea",
"index.html": "e16f566c4ba7aa322251868a2ea69f55",
"/": "e16f566c4ba7aa322251868a2ea69f55",
"main.dart.js": "5cdfe9b116486063e5a344d0ff5bb89c",
"manifest.json": "af3e6c4f244ca2d77b697bd7ca319840",
"README.md": "bcf80c75d44f970dc96b2368b1c44f0d",
"version.json": "042e5bb619b812270ae49011e8831140"};
// The application shell files that are downloaded before a service worker can
// start.
const CORE = ["main.dart.js",
"index.html",
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
