This skill adds a new Event to several resources.

Input:
All starts with a Event decribed by
- date
- stadium
- competitors
- sports type (footbal, ice-hockey, ...)
- optional: a link to instagram-url that represents a report (aka "Bericht").
like that:

"4.4.2026 Fussball - 1860 München vs. SV Waldhof Mannheim - Städtisches Stadion a.d. Grünwalder Straße - https://www.instagram.com/matchday_recap/p/DWwGeqQDY9F/"

Process::
Step 1: check the location of the event by stadium name via website search (this information is not part of your LLM).

If this location is already defined in `data/grounds.json`:
- you have already have latitude and longitude

If this location is not yet defined in `data/grounds.json`:
- search the location by stadium via Google Maps with the same precision as locations in `data/grounds.json`
- add a new entry in `data/grounds.json`
- increment the counter of grounds in `Sport/Events.md`

Add an entry in `Sport/Events.md`.