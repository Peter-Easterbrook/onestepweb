# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Overview

Static, single-page resume/portfolio site (easterbrook.at). Plain HTML/CSS/vanilla JS — no build step, no package.json, no tests, no linter. All content lives in `index.html`; styling in `style.css`.

## Running locally

Serve the repo root with any static server; the VS Code Live Server extension is configured for port 5504 (`.vscode/settings.json`). Opening `index.html` directly also works, though the `uc-modal` custom element and some assets behave best over HTTP.

## Architecture

- **`index.html`** holds everything: the side nav (`section.main-nav` with collapsible `<details>` groups linking to projects), the tech-stack scroller (`.scroller > .scroller__inner`), and the project/certification grid (`ul.cards > li.cardItem > figure.card`). Adding a project means adding/editing markup here; `li.cardItem.double` spans two grid columns. Also update `sitemap.xml` / SEO meta tags in `<head>` when relevant.
- **Scripts are small, independent, global-scope files** included via `<script>` tags in `index.html` (the custom scripts use `defer` in `<head>`; tilt, Vanta, modal-open and footer-year init are inline scripts at the end of `<body>`). There are no modules or imports, so load order in `index.html` matters and top-level names (`SITE`, `TRIGGER`, `CONFETTI_*`, etc.) share one global namespace.
  - `modal.js` defines the `<uc-modal>` web component (shadow DOM, self-contained styles); an inline script opens it 2s after load. Hidden under 600px.
  - `sideTrigger.js` toggles the `reveal` class on `body.site` when the pointing-hand trigger (`#pointingHand`) is clicked; `confetti.js` fires canvas-confetti on that same element.
  - `dropdown.js` measures `<details>` heights into `--collapsed`/`--expanded` CSS vars for animated open/close.
  - `infiniteScroll.js` duplicates scroller children (marked `data-duplicate`, `aria-hidden`) and respects `prefers-reduced-motion`.
- **Vendored libraries**: `three.min.js`, `vanta.cells.min.js` (animated background on `<html id="vantajs">`), and `vanilla-tilt.min.js` are committed locally — don't edit them. Bootstrap 5, Font Awesome 7, Google Fonts, and canvas-confetti load from CDNs.

## Gotchas

- Cards opt into tilt with the `tilt` class; VanillaTilt is initialized/destroyed by an inline script in `index.html` only at widths ≥1248px. Don't use `data-tilt`, which VanillaTilt auto-initializes at every width.
- `<base target="_blank">` in `<head>` makes every link open in a new tab, so don't use `href="#"` for non-navigating elements.
- Font Awesome Free 7 loads as a pinned cdnjs stylesheet (no kit). The CSS list markers use the `'Font Awesome 7 Free'` font family at weight 900, so update them together with the version.
- `images/og-preview.jpg` is the 1200×630 link-preview image; `robots.txt` explicitly allows it despite blocking image extensions.
- Vendored libraries are unmodified official minified builds (Three r134 is the version Vanta recommends; newer Three releases drop the global UMD build).
