---
templateEngineOverride: njk,md
sort: 3
tags: [sport]
---

Alle Sport-Events, die ich live verfolgt habe. Seit 2024 verfasse ich unter meinem Account <a href="https://www.instagram.com/matchday_recap" target="_blank" rel="noopener noreferrer">matchday_recap</a> Spielberichte auf Instagram.

Alle Spielorte, die ich live besucht habe. Daten werden in [`data/grounds.json`](https://github.com/fls15/roball-website/blob/main/data/grounds.json) gepflegt.

<link rel="stylesheet" href="https://unpkg.com/leaflet@1.9.4/dist/leaflet.css" integrity="sha256-p4NxAoJBhIIN+hmNHrzRCf9tD/miZyoHS5obTRR9BMY=" crossorigin=""/>

<div id="ground-map" style="height:520px;border-radius:6px;margin-top:1rem;"></div>

<script src="https://unpkg.com/leaflet@1.9.4/dist/leaflet.js" integrity="sha256-20nQCchB9co0qIjJZRGuk2/Z9VM+kNiyxNV1lvTlZBo=" crossorigin=""></script>
<script>
(async () => {
  const res = await fetch('/data/grounds.json');
  const grounds = await res.json();

  const map = L.map('ground-map');
  L.tileLayer('https://tile.openstreetmap.de/{z}/{x}/{y}.png', {
    attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a>-Mitwirkende',
    maxZoom: 18
  }).addTo(map);

  const stadiumIcon = L.divIcon({
    html: '<span style="font-size:40px;line-height:1;">🏟️</span>',
    className: '',
    iconSize: [40, 40],
    iconAnchor: [20, 20],
    popupAnchor: [0, -20]
  });

  const markers = grounds.map(g => {
    return L.marker([g.lat, g.lng], { icon: stadiumIcon })
      .addTo(map)
      .bindPopup(`<strong>${g.name}</strong>`);
  });

  map.fitBounds(L.featureGroup(markers).getBounds().pad(0.1));
})();
</script>

# Spiele: 85, Grounds: 20

| # | Datum | Uhrzeit | Sportart |  Spiel | Ergebnis | Ground | Bericht |
|---|-------|---------|----------|--------|----------|--------|---------|
| 85 | 04.04.26 | 14:00 | Fussball | TSV 1860 München vs. SV Waldhof Mannheim | 1:1 | <a href="https://www.google.com/maps/search/?api=1&query=Gr%C3%BCnwalder+Stadion,+M%C3%BCnchen,+BY&query_place_id=ChIJO2ZXRRLfnUcRCMsIUnMgyTo" target="_blank" rel="noopener noreferrer">Grünwalder Stadion</a> | <a href="https://www.instagram.com/p/DWwGeqQDY9F/?utm_source=ig_web_copy_link&igsh=MzRlODBiNWFlZA==" target="_blank" rel="noopener noreferrer">Instagram</a> |
| 84 | 28.03.26 | 15:00 | Fussball | 1.FC Bruchsal vs. SV Waldhof Mannheim | 1:4 | <a href="https://maps.app.goo.gl/Fs612mdTFAijaaCd7" target="_blank" rel="noopener noreferrer">Städtisches Stadion</a> | <a href="https://www.instagram.com/p/DWb9C4bDZmf/?utm_source=ig_web_copy_link&igsh=MzRlODBiNWFlZA==" target="_blank" rel="noopener noreferrer">Instagram</a> 
| 83 | 01.03.26 | 13:30 | Fussball | SV Waldhof Mannheim vs. Alemannia Aachen | 2:1 | <a href="https://maps.app.goo.gl/9eSTCEVJwjoDAVQWA" target="_blank" rel="noopener noreferrer">Carl-Benz-Stadion Mannheim</a> | <a href="https://www.instagram.com/p/DVWRlPJjGN4/?utm_source=ig_web_copy_link&igsh=MzRlODBiNWFlZA==" target="_blank" rel="noopener noreferrer">Instagram</a> 
| 82 | 20.02.26 | 19:00 | Fussball | VfB Stuttgart ll vs. SV Waldhof Mannheim | 3:1 | <a href="https://maps.app.goo.gl/eHW49cYiDnL1Sj18A" target="_blank" rel="noopener noreferrer">WIR-machen-Druck Arena</a> | <a href="https://www.instagram.com/p/DVBZhpYjQa8/?utm_source=ig_web_copy_link&igsh=MzRlODBiNWFlZA==" target="_blank" rel="noopener noreferrer">Instagram</a> 
| 81 | 06.02.26 | 19:00 | Fussball | SV Waldhof Mannheim vs. SSV Ulm | 2:1 | <a href="https://maps.app.goo.gl/9eSTCEVJwjoDAVQWA" target="_blank" rel="noopener noreferrer">Carl-Benz-Stadion Mannheim</a> | <a href="https://www.instagram.com/p/DUdYQOJjeES/?utm_source=ig_web_copy_link&igsh=MzRlODBiNWFlZA==" target="_blank" rel="noopener noreferrer">Instagram</a> 
| 80 | 25.01.26 | 13:30 | Fussball | SV Waldhof Mannheim vs. Hansa Rostock | 0:4 | <a href="https://maps.app.goo.gl/9eSTCEVJwjoDAVQWA" target="_blank" rel="noopener noreferrer">Carl-Benz-Stadion Mannheim</a> | <a href="https://www.instagram.com/p/DT8hIN5Dcsc/?utm_source=ig_web_copy_link&igsh=MzRlODBiNWFlZA==" target="_blank" rel="noopener noreferrer">Instagram</a> 
| 79 | 17.01.26 | 14:00 | Fussball | SC Verl vs. SV Waldhof Mannheim | 5:2 | <a href="https://maps.app.goo.gl/T7gstSHXowD8JX6T6" target="_blank" rel="noopener noreferrer">Sportclub-Arena</a> | <a href="https://www.instagram.com/p/DTnrJc6DQu5/?utm_source=ig_web_copy_link&igsh=MzRlODBiNWFlZA=" target="_blank" rel="noopener noreferrer">Instagram</a> |
| 78 | 14.12.25 | 16:30 | Fussball | Jahn Regensbug vs. SV Waldhof Mannheim | 3:0 | <a href="https://maps.app.goo.gl/oo692GfDfkyuiZ5R7" target="_blank" rel="noopener noreferrer">Jahnstadion Regensburg</a> | <a href="https://www.instagram.com/matchday_recap/p/DSSYKQqjEFI/" target="_blank" rel="noopener noreferrer">Instagram</a> |
| 77 | 07.12.25 | 13:30 | Fussball | SV Waldhof Mannheim vs. 1. FC Saarbrücken | 2:1 | <a href="https://maps.app.goo.gl/9eSTCEVJwjoDAVQWA" target="_blank" rel="noopener noreferrer">Carl-Benz-Stadion Mannheim</a> | <a href="https://www.instagram.com/matchday_recap/p/DR_-mGAjdZE/" target="_blank" rel="noopener noreferrer">Instagram</a> 
| 76 | 21.11.25 | 19:30 | Eishockey | Adler Mannheim vs. Dresdner Eislöwen | 3:1 | <a href="https://maps.app.goo.gl/wZF1R4qtyC7amf3N8" target="_blank" rel="noopener noreferrer">SAP-Arena Mannheim</a> | <a href="https://www.instagram.com/p/DRXX65RjPi_/?utm_source=ig_web_copy_link&igsh=MzRlODBiNWFlZA==" target="_blank" rel="noopener noreferrer">Instagram</a> |
| 75 | 02.11.25 | 13:30 | Fussball | TSG Hoffenheim II vs. SV Waldhof Mannheim | 2:0 | <a href="https://maps.app.goo.gl/AYHUg1vByhvdR1UT8" target="_blank" rel="noopener noreferrer">Dietmar-Hopp-Stadion</a> | <a href="https://www.instagram.com/p/DQka2SXDZmq/" target="_blank" rel="noopener noreferrer">Instagram</a> |
| 74 | 27.09.25 | 16:30 | Fussball | SV Waldhof Mannheim vs. Rot-Weiss Essen | 6:1 | <a href="https://maps.app.goo.gl/9eSTCEVJwjoDAVQWA" target="_blank" rel="noopener noreferrer">Carl-Benz-Stadion Mannheim</a> | <a href="https://www.instagram.com/p/DPHlru0DTVr/?utm_source=ig_web_copy_link&igsh=MzRlODBiNWFlZA==" target="_blank" rel="noopener noreferrer">Instagram</a> |
| 73 | 19.08.25 | 19:00 | Fussball | SV Sandhausen vs. KSV Hessen Kassel | 3:2 | <a href="https://maps.app.goo.gl/jRWiLTbJviedz1zcA" target="_blank" rel="noopener noreferrer">Stadion am Hardtwald</a> | <a href="https://www.instagram.com/p/DNjTexBIopR/?utm_source=ig_web_copy_link&igsh=MzRlODBiNWFlZA==" target="_blank" rel="noopener noreferrer">Instagram</a> |
| 72 | 02.08.25 | 14:00 | Fussball | SV Waldhof Mannheim vs. SC Verl | 2:2 | <a href="https://maps.app.goo.gl/9eSTCEVJwjoDAVQWA" target="_blank" rel="noopener noreferrer">Carl-Benz-Stadion Mannheim</a> | <a href="https://www.instagram.com/p/DM3JM93Iut6/?utm_source=ig_web_copy_link&igsh=MzRlODBiNWFlZA==" target="_blank" rel="noopener noreferrer">Instagram</a> |
| 71 | 12.07.25 | 16:00 | Fussball | VfR Mannheim vs. SV Waldhof Mannheim | 2:2 | <a href="https://maps.app.goo.gl/yAJxpRns8Y5oum36A" target="_blank" rel="noopener noreferrer">Rhein-Neckar-Stadion</a> | <a href="https://www.instagram.com/p/DMG1uUpoh3e/?utm_source=ig_web_copy_link&igsh=MzRlODBiNWFlZA==" target="_blank" rel="noopener noreferrer">Instagram</a>
| 70 | 10.05.25 | 14:00 | Fussball | SV Waldhof Mannheim vs. Dynamo Dresden | 1:0 | <a href="https://maps.app.goo.gl/9eSTCEVJwjoDAVQWA" target="_blank" rel="noopener noreferrer">Carl-Benz-Stadion Mannheim</a> | <a href="https://www.instagram.com/p/DJg1rfHI3oC/?utm_source=ig_web_copy_link&igsh=MzRlODBiNWFlZA==" target="_blank" rel="noopener noreferrer">Instagram</a>
| 69 | 08.04.25 | 19:00 | Fussball | SV Waldhof Mannheim vs. SpVgg Unterhaching | 0:2 | <a href="https://maps.app.goo.gl/9eSTCEVJwjoDAVQWA" target="_blank" rel="noopener noreferrer">Carl-Benz-Stadion Mannheim</a> | <a href="https://www.instagram.com/p/DIN8jRPI4hp/?utm_source=ig_web_copy_link&igsh=MzRlODBiNWFlZA==" target="_blank" rel="noopener noreferrer">Instagram</a>
| 68 | 02.03.25 | 19:00 | Fussball | SV Waldhof Mannheim vs. Alemannia Aachen | 2:1 | <a href="https://maps.app.goo.gl/9eSTCEVJwjoDAVQWA" target="_blank" rel="noopener noreferrer">Carl-Benz-Stadion Mannheim</a> | <a href="https://www.instagram.com/p/DGtEJrSoO4B/?utm_source=ig_web_copy_link&igsh=MzRlODBiNWFlZA==" target="_blank" rel="noopener noreferrer">Instagram</a>
| 67 | 19.01.25 | 19:00 | Fussball | SV Waldhof Mannheim vs. FC Ingolstadt | 0:0 | <a href="https://maps.app.goo.gl/9eSTCEVJwjoDAVQWA" target="_blank" rel="noopener noreferrer">Carl-Benz-Stadion Mannheim</a> | <a href="https://www.instagram.com/p/DFBlsR3og8-/?utm_source=ig_web_copy_link&igsh=MzRlODBiNWFlZA==" target="_blank" rel="noopener noreferrer">Instagram</a>
| 66 | 28.12.24 | 14:00 | Eishockey | Adler Mannheim vs. Kölner Haie | 1:4 | <a href="https://maps.app.goo.gl/wZF1R4qtyC7amf3N8" target="_blank" rel="noopener noreferrer">SAP-Arena Mannheim</a> | <a href="https://www.instagram.com/p/DEIit2ZO9Jf/?utm_source=ig_web_copy_link&igsh=MzRlODBiNWFlZA==" target="_blank" rel="noopener noreferrer">Instagram</a> |
| 65 | 22.12.24 | 13:30 | Fussball | SV Waldhof Mannheim vs. Arminia Bielefeld | 1:1 | <a href="https://maps.app.goo.gl/9eSTCEVJwjoDAVQWA" target="_blank" rel="noopener noreferrer">Carl-Benz-Stadion Mannheim</a> | <a href="https://www.instagram.com/p/DD45oKoO6ot/?utm_source=ig_web_copy_link&igsh=MzRlODBiNWFlZA==" target="_blank" rel="noopener noreferrer">Instagram</a>
| 64 | 07.12.24 | 14:00 | Fussball | SV Waldhof Mannheim vs. Energie Cottbus | 0:1 | <a href="https://maps.app.goo.gl/9eSTCEVJwjoDAVQWA" target="_blank" rel="noopener noreferrer">Carl-Benz-Stadion Mannheim</a> | <a href="https://www.instagram.com/p/DDUZBMtuRBw/?utm_source=ig_web_copy_link&igsh=MzRlODBiNWFlZA==" target="_blank" rel="noopener noreferrer">Instagram</a>
| 63 | 27.10.24 | 19:30 | Fussball | SV Waldhof Mannheim vs. Wehen Wiesbaden | 2:2 | <a href="https://maps.app.goo.gl/9eSTCEVJwjoDAVQWA" target="_blank" rel="noopener noreferrer">Carl-Benz-Stadion Mannheim</a> | <a href="https://www.instagram.com/p/DBrFxbRo9Sb/?utm_source=ig_web_copy_link&igsh=MzRlODBiNWFlZA==" target="_blank" rel="noopener noreferrer">Instagram</a>
| 62 | 10.08.24 | 14:00 | Fussball | SV Waldhof Mannheim vs. Viktoria Köln | 1:2 | <a href="https://maps.app.goo.gl/9eSTCEVJwjoDAVQWA" target="_blank" rel="noopener noreferrer">Carl-Benz-Stadion Mannheim</a> | <a href="https://www.instagram.com/p/C-kmQwgIz0e/?utm_source=ig_web_copy_link&igsh=MzRlODBiNWFlZA==" target="_blank" rel="noopener noreferrer">Instagram</a>
| 61 | 28.04.24 | 15:30 | Fussball | FSV Mainz 05 vs. 1.FC Köln | 1:1 | <a href="https://maps.app.goo.gl/AeHw61jYVpAmWdRS8" target="_blank" rel="noopener noreferrer">MEWA Arena</a> | <a href="https://www.instagram.com/p/C6UddunooXV/?utm_source=ig_web_copy_link&igsh=MzRlODBiNWFlZA==" target="_blank" rel="noopener noreferrer">Instagram</a>
| 60 | 15.03.24 | 19:00 | Fussball | SV Waldhof Mannheim vs. Arminia Bielefeld | 1:1 | <a href="https://maps.app.goo.gl/9eSTCEVJwjoDAVQWA" target="_blank" rel="noopener noreferrer">Carl-Benz-Stadion Mannheim</a> | <a href="https://www.instagram.com/p/C5HFSLcNOsY/?utm_source=ig_web_copy_link&igsh=MzRlODBiNWFlZA==" target="_blank" rel="noopener noreferrer">Instagram</a>
| 59 | 18.02.24 | 13:30 | Fussball | SV Waldhof Mannheim vs. FC Saarbrücken | 0:2 | <a href="https://maps.app.goo.gl/9eSTCEVJwjoDAVQWA" target="_blank" rel="noopener noreferrer">Carl-Benz-Stadion Mannheim</a> | 
| 58 | 11.02.24 | 17:30 | Fussball | TSG Hoffenheim vs. 1.FC Köln | 1:1 | <a href="https://maps.app.goo.gl/DkRaMA25orMtTsF1A" target="_blank" rel="noopener noreferrer">Wirsol Rhein-Neckar-Arena</a> | 
| 57 | 04.02.24 | 16:30 | Fussball | SV Waldhof Mannheim vs. Preußen Münster | 2:2 | <a href="https://maps.app.goo.gl/9eSTCEVJwjoDAVQWA" target="_blank" rel="noopener noreferrer">Carl-Benz-Stadion Mannheim</a> | 
| 56 | 23.01.24 | 19:00 | Fussball | SV Waldhof Mannheim vs. Dynamo Dresden | 0:2 | <a href="https://maps.app.goo.gl/9eSTCEVJwjoDAVQWA" target="_blank" rel="noopener noreferrer">Carl-Benz-Stadion Mannheim</a> | 
| 55 | 20.12.23 | 19:00 | Fussball | SV Waldhof Mannheim vs. 1860 München | 1:0 | <a href="https://maps.app.goo.gl/9eSTCEVJwjoDAVQWA" target="_blank" rel="noopener noreferrer">Carl-Benz-Stadion Mannheim</a> | 
| 54 | 09.12.23 | 14:00 | Fussball | SV Sandhausen vs. SV Waldhof Mannheim | 1:0 | <a href="https://maps.app.goo.gl/jRWiLTbJviedz1zcA" target="_blank" rel="noopener noreferrer">Stadion am Hardtwald</a> | 
| 53 | 24.11.23 | 19:00 | Fussball | SV Waldhof Mannheim vs. SC Verl | 1:2 | <a href="https://maps.app.goo.gl/9eSTCEVJwjoDAVQWA" target="_blank" rel="noopener noreferrer">Carl-Benz-Stadion Mannheim</a> | 
| 52 | 01.11.23 | 18:00 | Fussball | SV Sandhausen vs. Bayer Leverkusen | 2:5 | <a href="https://maps.app.goo.gl/jRWiLTbJviedz1zcA" target="_blank" rel="noopener noreferrer">Stadion am Hardtwald</a> | 
| 51 | 20.10.23 | 19:00 | Fussball | SV Waldhof Mannheim vs. Borussia Dortmund II | 1:3 | <a href="https://maps.app.goo.gl/9eSTCEVJwjoDAVQWA" target="_blank" rel="noopener noreferrer">Carl-Benz-Stadion Mannheim</a> | 
| 50 | 07.10.23 | 14:00 | Fussball | SV Waldhof Mannheim vs. Viktoria Köln | 1:1 | <a href="https://maps.app.goo.gl/9eSTCEVJwjoDAVQWA" target="_blank" rel="noopener noreferrer">Carl-Benz-Stadion Mannheim</a> | 
| 49 | 17.09.23 | 16:30 | Fussball | SV Waldhof Mannheim vs. SSV Ulm | 0:2 | <a href="https://maps.app.goo.gl/9eSTCEVJwjoDAVQWA" target="_blank" rel="noopener noreferrer">Carl-Benz-Stadion Mannheim</a> | 
| 48 | 12.05.23 | 18:30 | Fussball | SV Sandhausen vs. Hansa Rostock | 1:2 | <a href="https://maps.app.goo.gl/jRWiLTbJviedz1zcA" target="_blank" rel="noopener noreferrer">Stadion am Hardtwald</a> | 
| 47 | 28.04.23 | 19:00 | Fussball | SV Waldhof Mannheim vs. Hallescher FC | 4:1 | <a href="https://maps.app.goo.gl/9eSTCEVJwjoDAVQWA" target="_blank" rel="noopener noreferrer">Carl-Benz-Stadion Mannheim</a> | 
| 46 | 25.03.23 | 20:45 | Fussball | Deutschland vs. Peru | 2:0 | <a href="https://maps.app.goo.gl/AeHw61jYVpAmWdRS8" target="_blank" rel="noopener noreferrer">MEWA Arena</a> |
| 45 | 06.03.23 | 19:00 | Fussball | SV Waldhof Mannheim vs. SV Elversberg | 2:1 | <a href="https://maps.app.goo.gl/9eSTCEVJwjoDAVQWA" target="_blank" rel="noopener noreferrer">Carl-Benz-Stadion Mannheim</a> | 
| 44 | 26.10.22 | 21:00 | Fussball | Atletico Madrid vs. Bayer Leverkusen | 2:2 | <a href="https://maps.app.goo.gl/Ua6B8evputUELLMd9" target="_blank" rel="noopener noreferrer">Estadio Metropolitano</a> | 
| 43 | 06.09.22 | 18:30 | Fussball | ASC Neuenheim vs. SV Waldhof Mannheim | 0:5 | <a href="https://maps.app.goo.gl/1qvwWmMtNcbHrhuD6" target="_blank" rel="noopener noreferrer">Fussballcampus Heidelberg</a> | 
| 42 | 28.12.19 | 14:00 | Eishockey | Kassel Huskies vs. Heilbronner Falken | 2:5 | <a href="https://maps.app.goo.gl/6613GpkHNHhSyGsZ6" rel="noopener noreferrer">Nordhessen Arena</a> | 
| 41 | 21.12.19 | 20:30 | Handball | Rhein-Neckar Löwen vs. Flensburg-Handewitt | 22:24 | <a href="https://maps.app.goo.gl/wZF1R4qtyC7amf3N8" target="_blank" rel="noopener noreferrer">SAP-Arena Mannheim</a> | 
| 40 | 28.10.19 | 20:30 | Fussball | SV Sandhausen vs. Wehen Wiesbaden | 0:0 | <a href="https://maps.app.goo.gl/jRWiLTbJviedz1zcA" target="_blank" rel="noopener noreferrer">Stadion am Hardtwald</a> | 
| 39 | 30.08.19 | 18:30 | Fussball | SV Sandhausen vs. SV Darmstadt | 1:0 | <a href="https://maps.app.goo.gl/jRWiLTbJviedz1zcA" target="_blank" rel="noopener noreferrer">Stadion am Hardtwald</a> | 
| 38 | 05.08.19 | 19:00 | Fussball | SV Waldhof Mannheim vs. 1860 München | 4:0 | <a href="https://maps.app.goo.gl/9eSTCEVJwjoDAVQWA" target="_blank" rel="noopener noreferrer">Carl-Benz-Stadion Mannheim</a> | 
| 37 | 02.08.19 | 18:30 | Fussball | SV Sandhausen vs. VfL Osnabrück | 0:1 | <a href="https://maps.app.goo.gl/jRWiLTbJviedz1zcA" target="_blank" rel="noopener noreferrer">Stadion am Hardtwald</a> | 
| 36 | 29.05.19 | 20:30 | Handball | Rhein-Neckar Löwen vs. Eulen Ludwigshafen | 26:29 | <a href="https://maps.app.goo.gl/wZF1R4qtyC7amf3N8" target="_blank" rel="noopener noreferrer">SAP-Arena Mannheim</a> | 
| 35 | 12.05.19 | 15:30 | Fussball | SV Sandhausen vs. Arminia Bielefeld | 0:3 | <a href="https://maps.app.goo.gl/jRWiLTbJviedz1zcA" target="_blank" rel="noopener noreferrer">Stadion am Hardtwald</a> | 
| 34 | 26.12.19 | 19:30 | Eishockey | Kassel Huskies vs. Lausitzer Füchse | 5:2 | <a href="https://maps.app.goo.gl/6613GpkHNHhSyGsZ6" rel="noopener noreferrer">Nordhessen Arena</a> | 
| 33 | 09.02.19 | 20:30 | Handball | Rhein-Neckar Löwen vs. Bergischer HC | 26:20 | <a href="https://maps.app.goo.gl/wZF1R4qtyC7amf3N8" target="_blank" rel="noopener noreferrer">SAP-Arena Mannheim</a> | 
| 32 | 20.10.18 | 14:00 | Fussball | SV Waldhof Mannheim vs. FC Homburg | 5:1 | <a href="https://maps.app.goo.gl/9eSTCEVJwjoDAVQWA" target="_blank" rel="noopener noreferrer">Carl-Benz-Stadion Mannheim</a> | 
| 31 | 30.09.18 | 13:30 | Fussball | SV Sandhausen vs. 1.FC Magdeburg | 0:1 | <a href="https://maps.app.goo.gl/jRWiLTbJviedz1zcA" target="_blank" rel="noopener noreferrer">Stadion am Hardtwald</a> | 
| 30 | 29.04.18 | 12:30 | Handball | Eulen Ludwigshafen vs. TV Hüttenberg | 32:28 | <a href="https://maps.app.goo.gl/drh8HGQULZK3hzcj9" target="_blank" rel="noopener noreferrer">SAP-Arena Mannheim</a> | 
| 29 | 06.04.18 | 18:30 | Fussball | SV Sandhausen vs. Greuther Fürth | 0:0 | <a href="https://maps.app.goo.gl/jRWiLTbJviedz1zcA" target="_blank" rel="noopener noreferrer">Stadion am Hardtwald</a> | 
| 28 | 28.01.18 | 13:30 | Fussball | SV Sandhausen vs. Dynamo Dresden | 1:0 | <a href="https://maps.app.goo.gl/jRWiLTbJviedz1zcA" target="_blank" rel="noopener noreferrer">Stadion am Hardtwald</a> | 
| 27 | 28.12.17 | 19:30 | Eishockey | Kassel Huskies vs. SC Riessersee | 2:5 | <a href="https://maps.app.goo.gl/6613GpkHNHhSyGsZ6" rel="noopener noreferrer">Nordhessen Arena</a> | 
| 26 | 21.12.17 | 18:30 | Handball | Eulen Ludwigshafen vs. SC Magdeburg | 22:31 | <a href="https://maps.app.goo.gl/drh8HGQULZK3hzcj9" target="_blank" rel="noopener noreferrer">SAP-Arena Mannheim</a> | 
| 25 | 05.11.17 | 15:30 | Fussball | 1.FC Köln vs. TSG Hoffenheim | 0:3 | <a href="https://maps.app.goo.gl/x4VPdMMsFZcJP5v47" target="_blank" rel="noopener noreferrer">Rhein Energie Stadion</a> | 
| 24 | 01.10.17 | 13:30 | Fussball | SV Sandhausen vs. Jahn Regensburg | 2:0 | <a href="https://maps.app.goo.gl/jRWiLTbJviedz1zcA" target="_blank" rel="noopener noreferrer">Stadion am Hardtwald</a> | 
| 23 | 04.09.17 | 20:45 | Fussball | Deutschland vs. Norwegen | 6:0 | <a href="https://maps.app.goo.gl/6H9dfur9AQB8uY1V7" target="_blank" rel="noopener noreferrer">Neckarstadion</a> | 
| 22 | 08.04.17 | 18:30 | Fussball | FC Bayern München vs. Borussia Dortmund | 4:1 | <a href="https://maps.app.goo.gl/2ZDMUbbuvh7Yk5Yr6" target="_blank" rel="noopener noreferrer">Allianz Arena</a> | 
| 21 | 08.02.17 | 18:30 | Fussball | SV Sandhausen vs. FC Schalke | 1:4 | <a href="https://maps.app.goo.gl/jRWiLTbJviedz1zcA" target="_blank" rel="noopener noreferrer">Stadion am Hardtwald</a> | 
| 20 | 28.12.16 | 19:30 | Eishockey | Kassel Huskies vs. Lausitzer Füchse | 1:5 | <a href="https://maps.app.goo.gl/6613GpkHNHhSyGsZ6" rel="noopener noreferrer">Nordhessen Arena</a> | 
| 19 | 03.12.16 | 15:30 | Fussball | TSG Hoffenheim vs. 1.FC Köln | 4:0 | <a href="https://maps.app.goo.gl/DkRaMA25orMtTsF1A" target="_blank" rel="noopener noreferrer">Wirsol Rhein-Neckar-Arena</a> | 
| 18 | 05.11.16 | 18:30 | Fussball | Eintracht Frankfurt vs. 1.FC Köln | 1:0 | <a href="https://maps.app.goo.gl/Q6ebDVXyjzfZKX418" target="_blank" rel="noopener noreferrer">Waldstadion</a> | 
| 17 | 03.08.16 | 18:00 | Fussball | KSV Hessen Kassel vs. Borussia Mönchengladbach | 1:6 | <a href="https://maps.app.goo.gl/CoSBhubJmZpqy9CT9" target="_blank" rel="noopener noreferrer">Auestadion Kassel</a> | 
| 16 | 24.07.16 | 20:30 | Fussball | Frankreich vs. Italien U19 | 4:0 | <a href="https://maps.app.goo.gl/DkRaMA25orMtTsF1A" target="_blank" rel="noopener noreferrer">Wirsol Rhein-Neckar-Arena</a> | |
| 15 | 08.05.16 | 15:30 | Fussball | SV Sandhausen vs. MSV Duisburg | 2:2 | <a href="https://maps.app.goo.gl/jRWiLTbJviedz1zcA" target="_blank" rel="noopener noreferrer">Stadion am Hardtwald</a> | 
| 14 | 16.04.16 | 15:30 | Fussball | TSG Hoffenheim vs. Hertha BSC | 2:1 | <a href="https://maps.app.goo.gl/DkRaMA25orMtTsF1A" target="_blank" rel="noopener noreferrer">Wirsol Rhein-Neckar-Arena</a> | 
| 13 | 03.04.16 | 17:30 | Fussball | TSG Hoffenheim vs. 1.FC Köln | 1:1 | <a href="https://maps.app.goo.gl/DkRaMA25orMtTsF1A" target="_blank" rel="noopener noreferrer">Wirsol Rhein-Neckar-Arena</a> | 
| 12 | 23.01.16 | 15:30 | Fussball | TSG Hoffenheim vs. Bayer Leverkusen | 1:1 | <a href="https://maps.app.goo.gl/DkRaMA25orMtTsF1A" target="_blank" rel="noopener noreferrer">Wirsol Rhein-Neckar-Arena</a> | 
| 11 | 28.12.15 | 19:30 | Eishockey | Kassel Huskies vs. EC Bad Nauheim | 1:3 | <a href="https://maps.app.goo.gl/6613GpkHNHhSyGsZ6" rel="noopener noreferrer">Nordhessen Arena</a> | 
| 10 | 01.11.15 | 13:30 | Fussball | SV Sandhausen vs. RB Leipzig | 1:2 | <a href="https://maps.app.goo.gl/jRWiLTbJviedz1zcA" target="_blank" rel="noopener noreferrer">Stadion am Hardtwald</a> | 
| 9 | 16.10.15 | 18:30 | Fussball | SV Sandhausen vs. Kaiserslautern | 1:0 | <a href="https://maps.app.goo.gl/jRWiLTbJviedz1zcA" target="_blank" rel="noopener noreferrer">Stadion am Hardtwald</a> | 
| 8 | 02.08.15 | 15:30 | Fussball | SV Sandhausen vs. Union Berlin | 4:3 | <a href="https://maps.app.goo.gl/jRWiLTbJviedz1zcA" target="_blank" rel="noopener noreferrer">Stadion am Hardtwald</a> | 
| 7 | 17.05.15 | 15:30 | Fussball | SV Sandhausen vs. Fortuna Düsseldorf | 0:2 | <a href="https://maps.app.goo.gl/jRWiLTbJviedz1zcA" target="_blank" rel="noopener noreferrer">Stadion am Hardtwald</a> | 
| 6 | 17.04.15 | 18:30 | Fussball | SV Sandhausen vs. Karlsruher SC | 0:0 | <a href="https://maps.app.goo.gl/jRWiLTbJviedz1zcA" target="_blank" rel="noopener noreferrer">Stadion am Hardtwald</a> | 
| 5 | 14.09.14 | 13:30 | Fussball | SV Sandhausen vs. Greuther Fürth | 1:0 | <a href="https://maps.app.goo.gl/jRWiLTbJviedz1zcA" target="_blank" rel="noopener noreferrer">Stadion am Hardtwald</a> | 
| 4 | 26.04.14 | 15:30 | Fussball | TSG Hoffenheim vs. Eintracht Frankfurt | 0:0 | <a href="https://maps.app.goo.gl/DkRaMA25orMtTsF1A" target="_blank" rel="noopener noreferrer">Wirsol Rhein-Neckar-Arena Sinsheim</a> | |
| 3 | 29.12.13 | 18:30 | Eishockey | Kassel Huskies vs. Herne EV | 6:3 | <a href="https://maps.app.goo.gl/6613GpkHNHhSyGsZ6" rel="noopener noreferrer">Nordhessen Arena</a> | 
| 2 | 25.10.13 | 19:30 | Eishockey | Adler Mannheim vs. Kölner Haie | 2:5 | <a href="https://maps.app.goo.gl/wZF1R4qtyC7amf3N8" target="_blank" rel="noopener noreferrer">SAP-Arena Mannheim</a> |
| 1 | 02.12.12 | 17:45 | Eishockey | Adler Mannheim vs. Nürnberg Ice Tigers | 6:3 | <a href="https://maps.app.goo.gl/wZF1R4qtyC7amf3N8" target="_blank" rel="noopener noreferrer">SAP-Arena Mannheim</a> | |
