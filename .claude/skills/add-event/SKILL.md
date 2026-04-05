---
name: add-event
description: Use when adding a new live sport event entry to this roball-website project (Sport/Events.md and data/grounds.json)
---

# Add Event

Adds a new event entry to `Sport/Events.md` and, if the stadium is new, to `data/grounds.json`.

## Required Input

- **date** — `DD.MM.YY`
- **sport** — optional, e.g. `Fussball`, `Eishockey`
- **competitors** — `Heimteam vs. Gastteam`
- **stadium** — stadium name (free text)
- **instagram URL** — optional Bericht link

## Process

### Step 1 — Internet Search

Search the event via websearch to get the time, result, stadium.

### Step 2 — Resolve the stadium

Check `data/grounds.json` for a matching stadium by name.

**Already listed → use its `lat`/`lng` directly.**

**Not listed → find it:**
1. Use `WebSearch` to find the stadium's precise location (lat/lng to 5 decimal places, same precision as existing entries).
2. Add a new entry to `data/grounds.json`:

   ```json
   { 
      "name": "Vollständiger Stadionname, Stadt",
      "lat": 49.12345,
      "lng": 8.12345
   }
   ```
3. Increment the `Grounds:` counter in `Sport/Events.md` line: `# Spiele: N, Grounds: M` → `M+1`.

### Step 2 — Add the row to Events.md

Insert **after** the header row (`|---|...`), before the current first data row.

**Row format:**
```
| {N} | {DD.MM.YY} | {HH:MM} | {Sport} | {Heim vs. Gast} | {X:X} | <a href="{maps-url}" target="_blank" rel="noopener noreferrer">{Kurzname}</a> | <a href="{ig-url}" target="_blank" rel="noopener noreferrer">Instagram</a> |
```

- `{N}` = previous top entry number + 1
- `{maps-url}` = Google Maps short URL (`maps.app.goo.gl/...`) found via WebSearch, or construct: `https://www.google.com/maps/search/?api=1&query={URL-encoded+Stadionname}`
- `{Kurzname}` = stadium name without city suffix (e.g. `Carl-Benz-Stadion Mannheim` not `Carl-Benz-Stadion, Mannheim`)
- If no Instagram URL: leave Bericht cell empty (`| |`)

Also increment the `Spiele:` counter: `# Spiele: N, Grounds: M` → `N+1`.

## Example

Input:

```
05.04.2026 19:30 Fussball - SV Waldhof Mannheim vs. FC Ingolstadt - Carl-Benz-Stadion Mannheim - https://www.instagram.com/p/DFBlsR3og8-
```

`Carl-Benz-Stadion, Mannheim` exists in `grounds.json` → skip Step 1 addition.

Row to insert (assuming previous top was #85):
```
| 86 | 05.04.26 | 19:30 | Fussball | SV Waldhof Mannheim vs. FC Ingolstadt | 2:0 | <a href="https://maps.app.goo.gl/9eSTCEVJwjoDAVQWA" target="_blank" rel="noopener noreferrer">Carl-Benz-Stadion Mannheim</a> | <a href="https://www.instagram.com/p/DFBlsR3og8-" target="_blank" rel="noopener noreferrer">Instagram</a> |
```

Update counter line: `# Spiele: 86, Grounds: 20`
