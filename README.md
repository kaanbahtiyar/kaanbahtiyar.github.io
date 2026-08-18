# kaanbahtiyar.github.io

Personal academic site. **Plain static HTML + one stylesheet — no Jekyll, no build step.**
Edit an `.html` file, push to `master`, and GitHub Actions publishes it.

## Structure

```
index.html                  Home
projects.html               Projects index
publications.html           Publications  <-- single source of truth for the pub list
cv.html                     CV (HTML version)
404.html                    Not-found page
robots.txt / sitemap.xml    SEO

projects/                   One page per project
  chatter-detection.html
  cross-coupling-vibrations.html
  inertial-damper-control.html
  spindle-speed-optimization.html
  tool-eccentricity-compensation.html

assets/
  style.css                 All styling for every page
  Kaan_Bahtiyar_CV.pdf      Linked from cv.html
  video/                    hero, sso_demo, video_chatter (.mp4 + .jpg poster)

images/
  favicon.svg, favicon.ico
  profilekaan.png           Home avatar
  ASPE2024award.png, ICPE2024award.png, Rank3rd.png   Awards (home + CV)
  projects/                 Figures used by the project pages

.github/workflows/deploy.yml   Uploads the repo as-is to GitHub Pages
```

Every file in the repo is reachable from a page. There are no unused assets.

## How to add a publication

Publications live **only** in `publications.html`. There are four sections:

1. Journal Articles
2. Conference Papers, Peer-reviewed (proceedings)
3. Conference Papers, Peer-reviewed (no proceedings)
4. Conference Papers, Abstract-reviewed

Copy an existing `<li class="pub">` block into the section you want, newest first, and edit:

```html
<li class="pub">
  <a class="t" href="PUBLISHER_URL">Title</a>
  <div class="meta">Venue &middot; Year</div>
  <p class="sum">One-sentence summary.</p>
  <div class="foot"><a class="proj" href="/projects/SLUG.html">Project name</a></div>
</li>
```

For an entry with no public link, replace the `<a class="t">` with `<span class="t">`.

If you also want it on the CV page, update `cv.html` — the two are maintained separately.

## Adding a page to search engines

New page → add its URL to `sitemap.xml`.

## Local preview

No build needed:

```bash
python3 -m http.server 8000
```

Then open <http://localhost:8000>. Root-absolute paths like `/assets/style.css` resolve correctly this way.

## Deployment

`.github/workflows/deploy.yml` runs on every push to `master` and publishes via GitHub Pages.
Repo Settings → Pages → Source must be set to **GitHub Actions**.
