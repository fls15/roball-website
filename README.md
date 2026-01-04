# Roballs Website

Die Webseite basiert auf

* [11ty (Eleventy)](https://www.11ty.dev/) - ein auf NodeJS basierender Static-Site-Generator (SSG)
* [Eleventy-Notes Theme von Sandro Roth](https://github.com/rothsandro/eleventy-notes)
* GitHub Workflows zum Deployment auf GitHub Pages
* meinem Content

# Static-Site-Generators

... basieren auf einem Templating-Ansatz. HTML-Seiten werden aus Bausteinen zusammengebaut, so dass Redundanzen auf den automatisierten Generierungsprozess verlagert werden - den Maintainer interessiert das nicht.

Der Content wird in Markdown-Syntax (sehr einfach) gepflegt, so dass man mit HTML, CSS und JavaScript in der täglichen Arbeit gar nichts zu tun hat.

Auf diese Weise ergibt sich ein nahezu perfekte Synergie aus einfacher Pflege, schnellen Webseiten und überhapt keine Komplexität beim Hosting (statische Webseiten - keine Datenbank). Ideal für den Use-Case einer Webseite (für einen Shop wäre es nicht geeignet). 

# Getting Started

Ich habe mit diesem [Getting started](https://eleventy-notes.sandroroth.com/n/getting-started/) angefangen. Dabei wird das [GitHub Repository `rothsandro/eleventy-notes`](https://github.com/rothsandro/eleventy-notes) geclont. Es enthält die Dokumentation des Eleventy-Notes-Theme in deploybarer Form (eat-your-own-dogfoot at its best). Nach Entfernung des Contents wie in der _Getting Started_ beschrieben konnte ich meinen eigenen Content einbauen und Erfahrung mit dem Theme und 11ty sammeln.

# Wie pflege ich die Webseite

Kleine Änderungen mache ich direkt im [`main`-Branch meines Repository](https://github.com/fls15/roball-website) über die GitHub Web-UI. Nach dem Speichern ist die Änderung innerhalb einer Minute im Internet unter https://fls15.github.io/roball-website/ zu sehen. Das ist ein schnelles Feedback. Wenn es noch schneller gehen muss, dann verwende ich ein lokales Deployment.

Große Änderungen mache ich lieber lokal auf meinem Laptop im Editor Visual-Studio-Code. Entweder direkt im `main`-Branch oder in einem Feature-Branch, den ich dann mit einem Pull-Request mach `main` merge.

# Lokales Deployment

> hierzu müssen ein paar Komponenten lokal installiert werden. Um nicht die gesamten Komponenten installieren zu müssen verwende ich die [`mobibox`](https://github.com/mobi3006/homelab/tree/main/mobibox).

```
cd .app
npm install
npm start
```

Damit wird statischer HTML, CSS und JavaScript Code im `_site`-Unterverzeichnis abgelegt, der dann mit einem Webserver bereitgestellt wird.

Anschliessend kann ich in meinem Browser auf die Webseite zugreifen: http://localhost:8080 

# GitHub Pages Deployment

* [Dokumentation](https://github.com/rothsandro/eleventy-notes/blob/main/Deployment/GitHub%20Pages.md)

GitHub-Pages stellen einen von GitHub gehosteten Webserver bereit, auf dem meine Webseite im Internet erreichbar ist.

> Ich habe das GitHub Repsoitory `public` gemacht, um die GitHub Pages kostenlos nutzen zu können.

Ich verwende [GitHub-Workflows](https://eleventy-notes.sandroroth.com/n/deployment/github-pages/), um nach einer Änderung am Repository (z. B. Content-Änderungen) automatisch den HTML-Code neu zu generieren und auf die GitHub-Page zu deployen. Es dauert knapp eine Minute bis die Änderungen dann online sind.

## Website Hosting

GitHub Pages stellt den Webserver und die Domain meiner Webseite automatisch bereit ... hierum muß ich mich schon nicht kümmern. Ich kann dann per https://fls15.github.io/roball-website/ zugreifen.

> später werde ich das mal auf meiner eigenen Domain hosten - das ist mit GitHub Pages auch kein Problem