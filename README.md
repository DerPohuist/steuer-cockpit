# Steuer-Cockpit

Web-App für Angebote, Rechnungen und Belege. Statische Seite über GitHub Pages, mit Passwort verschlüsselt.

- `src/app.html`: die eigentliche App (HTML, CSS, JS). Hier wird entwickelt.
- `src/gate.html`: Passwort-Seite.
- `build.mjs`: verschlüsselt `src/app.html` und schreibt `index.html`. Aufruf: `STEUER_PW='…' node build.mjs`
- `index.html`: das, was ausgeliefert wird (verschlüsselt). Nie von Hand bearbeiten.
- `src/salt.txt`: bleibt immer gleich, damit ein gemerktes Passwort nach Updates weiter gilt. Nicht ändern.
- `version.json`: Versionsnummer des letzten Builds. Die App prüft sie beim Öffnen und lädt sich bei einer neuen Version selbst neu.
- `sw.js`, `manifest.json`, Icons: damit die App aufs Handy installiert werden kann und offline startet.

Daten liegen nur im Browser des Geräts (IndexedDB); die App bittet den Browser, sie dauerhaft zu behalten. Sicherung als JSON über den Reiter „Firma“. Jahrespaket als ZIP (CSV-Listen für Excel plus alle Belege) über „Firma“ oder „Steuern“. Diagramme zu Einnahmen und Ausgaben auf der Übersicht.

Weitere Funktionen: Sicherung einspielen mit Vorschau und Rückgängig (Gerätewechsel), Steuer-Rücklage mit Ampel und Kleinunternehmer-Wächter (25.000 € / 100.000 €) auf der Übersicht, Fristen als Kalender-Datei (.ics) im Reiter „Steuern“, Beleg-Abgleich mit den Bankbuchungen im Reiter „Bank“, wiederkehrende Rechnungen und Ausgaben (Plus-Knopf, „Wiederkehrend“), DATEV-Buchungsstapel (SKR 03/04) für den Steuerberater über „Firma“ oder „Steuern“.
