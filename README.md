# Diane Angeline M. Valencia — Personal Portfolio

A personal portfolio for a third-year BS Computer Science student, built with HTML, CSS, and JavaScript. It includes Home, About, Projects & Certificates, Contact, and an ongoing maintenance plan.

## Start here

1. Open `index.html` in a modern browser to view the website locally. Internet access is needed for external project links and optional Google Fonts; system fonts provide a fallback.
2. Read `GITHUB-PAGES-SETUP.md` to upload this folder to a public repository named `portfolio` and publish it.
3. Read `RESPONSIVE-TESTING.md` and complete the browser/device checks before submitting the live URL.

No npm installation, framework, backend, or build command is required.

## Website files

```text
index.html                       Main website
style.css                        Design, responsive rules, accessibility
app.js                           Menu, collection filter, project dialogs
favicon.svg                      DV browser-tab icon
maintenance.html                 Visitor-accessible maintenance plan
assets/images/tenz-fanpage.jpg     Original fan-site artwork for Project 1
assets/certificates/
  best-group-presenter.pdf        Original supplied certificate
  best-group-presenter.jpg        Optimized certificate preview
  html-essentials.pdf             Original supplied HTML certificate
  html-essentials.jpg             Actual certificate preview
```

## Documentation

- `GITHUB-PAGES-SETUP.md` — step-by-step upload, public hosting, updates, and troubleshooting.
- `ASSETS.md` — which pictures and certificate files to upload, plus optional images.
- `MAINTENANCE.md` — ongoing update schedule.
- `RUBRIC-CHECKLIST.md` — implementation evidence and remaining grading gaps.
- `RESPONSIVE-TESTING.md` — implemented breakpoints and honest verification checklist.
- `tools/check_site.py` — optional local file/markup consistency checker; Python 3.9 or newer only, no packages.
- `.nojekyll` — tells GitHub Pages to serve these static files without Jekyll processing.

## Edit the content

Edit visible text and cards in `index.html`. Project-dialog descriptions for projects 1–5 are in the `projectDetails` object in `app.js`; keep the two copies consistent. Circuit Clash and ECO GLOW currently use direct project links. Update count labels and the collection status text if entries are added or removed.

Edit colors, fonts, spacing, and layouts in `style.css`. Its final “Reflow hardening” section intentionally overrides earlier layout rules. Test after changing it.

The canonical and Open Graph URL are prepared for `https://dianevalencia.github.io/portfolio/`. Change both in `index.html` if your GitHub username or repository name differs.

## Current content status

Seven projects are listed. Two earned credentials are supplied. Stanford Code in Place 2026, the Meta hackathon, Circuit Clash, and SellSight AI are marked ongoing where appropriate. Other project documentation and additional certificates still need Diane's details; see the rubric checklist.

## Checks

Run `python tools/check_site.py` from this folder if Python 3.9 or newer is installed. This checks local files, HTML references, image attributes, and project consistency. It does not render the website or establish browser compatibility.

Publication makes the included website files and certificate PDFs publicly accessible. A public repository does not automatically grant an open-source license; no license choice has been made for this package.
