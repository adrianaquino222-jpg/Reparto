// Service worker mínimo: hace la app instalable. No guarda datos (la tienda siempre se carga en vivo).
self.addEventListener('install', () => self.skipWaiting());
self.addEventListener('activate', e => e.waitUntil(self.clients.claim()));
self.addEventListener('fetch', () => { /* red directa */ });