# Steuer-Cockpit

Web-App für Angebote, Rechnungen und Belege. Statische Seite über GitHub Pages, mit Passwort verschlüsselt.

- `src/app.html`: die eigentliche App (HTML, CSS, JS). Hier wird entwickelt.
- `src/gate.html`: Passwort-Seite.
- `build.mjs`: verschlüsselt `src/app.html` und schreibt `index.html`. Aufruf: `STEUER_PW='…' node build.mjs`
- `index.html`: das, was ausgeliefert wird (verschlüsselt). Nie von Hand bearbeiten.
- `sw.js`, `manifest.json`, Icons: damit die App aufs Handy installiert werden kann und offline startet.

Daten liegen nur im Browser des Geräts (IndexedDB). Sicherung als JSON über den Reiter „Firma“.
