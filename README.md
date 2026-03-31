# Skies ☁️

A clean, minimal weather PWA. No ads, no bloat.

## Features
- Current conditions with feels-like temp
- 12-hour hourly forecast
- 7-day forecast with rain probability bars + high/low
- Recent precipitation (rain mm / snow cm) — past 7 days vs seasonal average, with gardening/ski notes
- Sunrise & sunset arc
- UV index
- Pollen (tree, grass, weed — seasonal estimate)
- Aurora forecast — live Kp index from NOAA, 5-night outlook, visibility note based on your latitude

## APIs used
| Data | API | Cost |
|------|-----|------|
| Weather & precipitation history | [Open-Meteo](https://open-meteo.com) | Free, no key needed |
| Geocoding (location search) | [Nominatim / OpenStreetMap](https://nominatim.org) | Free, no key needed |
| Aurora / Kp index | [NOAA SWPC](https://www.swpc.noaa.gov/products/planetary-k-index) | Free, no key needed |

## Deploy to GitHub Pages

1. Create a new repo (e.g. `skies`)
2. Push these three files:
   - `index.html`
   - `manifest.json`
   - `sw.js`
3. Go to **Settings → Pages → Source: main branch / root**
4. Your app will be live at `https://yourusername.github.io/skies/`

> **Note:** Update the service worker `start_url` in `manifest.json` to match your repo path if it's not at root — e.g. `"/skies/"` instead of `"/"`.

## Install as PWA
- **iOS Safari:** Share → Add to Home Screen
- **Android Chrome:** Three-dot menu → Add to Home Screen
- **Desktop Chrome:** Install icon in the address bar

## Icons
Add `icon-192.png` and `icon-512.png` to the repo root for home screen icons. Any square image works — use a simple sky/cloud design.

## Pollen data
Pollen levels are currently seasonal estimates (not live data). For live pollen, consider the [Ambee Pollen API](https://www.getambee.com/) (free tier available) or [Open-Meteo's air quality endpoint](https://air-quality-api.open-meteo.com) which includes pollen forecasts at no cost.
