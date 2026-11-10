// Qalam Academy service worker: shows push notifications and opens the app
// on the right page when one is tapped. It does not cache pages.
self.addEventListener("install", () => self.skipWaiting());
self.addEventListener("activate", (e) => e.waitUntil(self.clients.claim()));

self.addEventListener("push", (event) => {
  let msg = { title: "Qalam Academy", body: "", url: "/", tag: "qalam" };
  try { msg = { ...msg, ...event.data.json() }; } catch (e) { if (event.data) msg.body = event.data.text(); }
  event.waitUntil(self.registration.showNotification(msg.title, {
    body: msg.body, tag: msg.tag, renotify: true, data: { url: msg.url },
    icon: "/icon-192.png", badge: "/badge-72.png",
  }));
});

self.addEventListener("notificationclick", (event) => {
  event.notification.close();
  const url = new URL((event.notification.data && event.notification.data.url) || "/", self.location.origin).href;
  event.waitUntil((async () => {
    const all = await self.clients.matchAll({ type: "window", includeUncontrolled: true });
    for (const c of all) {
      if (new URL(c.url).origin === self.location.origin) { await c.focus(); return c.navigate ? c.navigate(url) : undefined; }
    }
    return self.clients.openWindow(url);
  })());
});
