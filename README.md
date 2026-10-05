# Nitin Lama — Portfolio

A responsive, single-page portfolio for Nitin Lama, a software engineer working with Drupal. Built with plain HTML, CSS, and JavaScript; no build step or package installation is required.

## Sections

- **Introduction** — short profile, portrait, live India time, and link to work.
- **Work** — selected projects, technical summaries, and project links.
- **About** — engineering approach and areas of focus.
- **Expertise** — Drupal, PHP and APIs, migrations, search and AI, tools, hosting, quality, and collaboration.
- **Experience** — career history with expandable responsibility details.
- **Contact** — email call to action and links to Drupal.org, LinkedIn, and articles.

The page also includes responsive navigation, an animated greeting, a custom Drupal droplet cursor on devices with a fine pointer, and SEO metadata with Open Graph, Twitter card, and Person structured data.

## Project files

- `index.html` — page content, navigation, metadata, and structured data.
- `styles.css` — visual styles, layout, responsive behavior, hover states, and reduced-motion handling.
- `script.js` — greeting animation, mobile menu behavior, and live India clock.
- `assets/` — portrait variants, cursor image, and favicon.

### Image assets

- `assets/nitin-portrait.webp` and `assets/nitin-portrait-640.webp` — default portrait at large and small sizes.
- `assets/nitin-portrait-hover.webp` and `assets/nitin-portrait-hover-640.webp` — portrait hover state at large and small sizes.
- `assets/drupal-droplet-cursor.png` — custom cursor image.
- `assets/drupal-droplet-favicon.png` — separate upright favicon image.

Keep these files in their current relative paths so the page can load them correctly.

## Run locally

Open `index.html` directly in a browser, or serve the folder with any static file server. For example, with Python installed:

```sh
python3 -m http.server 8000
```

Then open <http://localhost:8000>. The Google Fonts stylesheet requires an internet connection; the site itself has no runtime package dependencies.

## Customize

- Update copy, project details, links, and SEO metadata in `index.html`.
- Update layout, colors, and responsive styles in `styles.css`.
- Update the greeting and clock behavior in `script.js`.
- Replace the images in `assets/` while keeping the referenced filenames and image dimensions in sync.
