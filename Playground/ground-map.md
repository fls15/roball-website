---
title: Ground Map
navTitle: Ground Map
templateEngineOverride: njk,md
panel: false
---

Alle Spielorte, die ich live besucht habe. Daten werden in [`data/grounds.json`](https://github.com/fls15/roball-website/blob/main/data/grounds.json) gepflegt.

<link rel="stylesheet" href="https://unpkg.com/leaflet@1.9.4/dist/leaflet.css" integrity="sha256-p4NxAoJBhIIN+hmNHrzRCf9tD/miZyoHS5obTRR9BMY=" crossorigin=""/>

<div id="ground-map" style="height:520px;border-radius:6px;margin-top:1rem;"></div>

<script src="https://unpkg.com/leaflet@1.9.4/dist/leaflet.js" integrity="sha256-20nQCchB9co0qIjJZRGuk2/Z9VM+kNiyxNV1lvTlZBo=" crossorigin=""></script>
<script>
(async () => {
  const res = await fetch('/data/grounds.json');
  const grounds = await res.json();

  const map = L.map('ground-map');
  L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
    attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors',
    maxZoom: 18
  }).addTo(map);

  const markers = grounds.map(g => {
    return L.marker([g.lat, g.lng])
      .addTo(map)
      .bindPopup(`<strong>${g.name}</strong>`);
  });

  map.fitBounds(L.featureGroup(markers).getBounds().pad(0.1));
})();
</script>
