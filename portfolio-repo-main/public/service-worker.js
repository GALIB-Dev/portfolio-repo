// Minimal no-op service worker to avoid 404s during development
self.addEventListener('install', () => {
	self.skipWaiting();
});

self.addEventListener('activate', (event) => {
	event.waitUntil(self.clients.claim());
});

self.addEventListener('fetch', () => {
	// Pass-through: do not intercept requests
});
