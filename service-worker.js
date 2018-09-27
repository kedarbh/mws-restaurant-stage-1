let cacheName = 'cache-v2';

//list of all filea to be chached
const assets = ['/',
				'./index.html',
				'./restaurant.html',
				'./js/dbhelper.js',
				'./js/main.js',
				'./js/restaurant_info.js',
				'./data/restaurants.json',
				'./css/style.css',
				'./css/styles.css',
				'./js/user.js',
				'./img/1.jpg',
				'./img/2.jpg',
				'./img/3.jpg',
				'./img/4.jpg',
				'./img/5.jpg',
				'./img/6.jpg',
				'./img/7.jpg',
				'./img/8.jpg',
				'./img/9.jpg',
				'./img/logo.svg',
				'./img/logo-white.svg',
				'./img/sprite.svg'
			];

self.addEventListener('install', function (event) {
	event.waitUntil(caches.open(cacheName).then(function (cache) {
		return cache.addAll(assets).catch(function (error) {
			console.log("Error: ", error);
		});
	}));
});

self.addEventListener('fetch', function (event) {
	event.respondWith(
		caches.match(event.request).then(function (response) {
			if (response) {
				console.log('I found', event.request);
				return response;
			} else {
				// console.log('not found', event.request)
				return fetch(event.request);
			}
		})
	);
});
