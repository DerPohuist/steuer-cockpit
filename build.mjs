// Verschlüsselt src/app.html mit einem Passwort und schreibt index.html (Passwort-Seite).
// Aufruf: STEUER_PW='…' node build.mjs
import { readFileSync, writeFileSync } from 'node:fs';
import { webcrypto as c } from 'node:crypto';
const pw = process.env.STEUER_PW;
if (!pw) { console.error('STEUER_PW fehlt'); process.exit(1); }
const IT = 600000;
const salt = c.getRandomValues(new Uint8Array(16)), iv = c.getRandomValues(new Uint8Array(12));
const base = await c.subtle.importKey('raw', new TextEncoder().encode(pw), 'PBKDF2', false, ['deriveBits']);
const raw = new Uint8Array(await c.subtle.deriveBits({ name: 'PBKDF2', hash: 'SHA-256', salt, iterations: IT }, base, 256));
const key = await c.subtle.importKey('raw', raw, 'AES-GCM', false, ['encrypt']);
const ct = new Uint8Array(await c.subtle.encrypt({ name: 'AES-GCM', iv }, key, new TextEncoder().encode(readFileSync('src/app.html', 'utf8'))));
const b64 = (u) => Buffer.from(u).toString('base64');
const tpl = readFileSync('src/gate.html', 'utf8')
  .replace('__SALT__', b64(salt)).replace('__IV__', b64(iv)).replace('__IT__', String(IT)).replace('__CT__', b64(ct));
writeFileSync('index.html', tpl);
console.log('index.html geschrieben,', tpl.length, 'Bytes');
