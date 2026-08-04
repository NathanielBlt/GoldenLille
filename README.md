# GoldenLille
Wandering into Lille
👓 Live page : https://nathanielblt.github.io/GoldenLille/

## ❓ What is Golden Lille?
A friend guided me into a visit of this nice city called Brugge in Belgium. He hinted he would like to visit Lille. To make it more interesting, I wanted to make a little series of 7 cards for souvenirs purpose. 

One thing lead to another and now I happen to have two maps, a game, many cards, a route... and this little extension for the more "historical" part of the visit. 

I might make the template of the game available but for now I'm aiming for a simple "information" mini-site.

The card game itself (riddles, letters, rules) stays offline / on paper — this site is a narrative
showcase, not a digital copy of the game.

## 🛠️ Tech stack

Built with [Astro](https://astro.build), content-collections-first:

* `src/content/lieux/<locale>/*.md` — one place card per locale
* `src/content/quartiers/<locale>/*.md` — one district per locale
* `src/content/pages/<locale>/*.md` — standalone editorial pages
* Native Astro i18n routing (`/`, `/fr/`, `/nl/`) for the public site
* Solo "place card" pages (`/pl/<code>/`) are QR-only: not linked from any nav or sitemap, `noindex`,
  same URL for every language (in-page language toggle instead of a URL prefix)

```
npm install
npm run dev      # local dev server
npm run build    # static build to dist/
```

Deployed to GitHub Pages via `.github/workflows/deploy.yml` on push to `WIP-base`.

## 🚩 Roadmap to V1

* [x] Website architecture
* [x] Multi language architecture for content and navigation
* [x] Working home navigation and breadcrumbs
* [x] Base graphics and css for main pages
  * [x] Define design tokens
* [ ] Changelog page
* [ ] Mention/link to the physical card game (once its own site is live)
* [ ] Additional quartiers beyond Vieux-Lille

## 📝 Licencing

Intended to be under CC BY SA licencing.
