# Pictures, certificates, and other files

## Files you MUST keep in this package

| File | Purpose |
| --- | --- |
| `assets/certificates/best-group-presenter.jpg` | The visible presenter-certificate preview image. |
| `assets/certificates/best-group-presenter.pdf` | Full Best Group Presenter certificate. |
| `assets/certificates/html-essentials.jpg` | Actual Cisco HTML Essentials certificate preview. |
| `assets/certificates/html-essentials.pdf` | Full HTML Essentials certificate. |
| `assets/images/tenz-fanpage.jpg` | Original TenZ collage from the linked fan website, used as Project 1’s preview. |
| `assets/images/eco-glow-circuit.png` | Authentic ECO GLOW circuit preview from the linked Tinkercad project. |
| `assets/images/first-portfolio.png` | Original portrait from Diane’s first portfolio, used for Project 2. |
| `favicon.svg` | The DV icon in the browser tab. |
| `index.html`, `style.css`, `app.js`, `maintenance.html` | Website pages, design, and interactions. |

Upload the entire `assets` folder, not just the HTML file. The ZIP already contains the real image and PDFs used by the website.

Project 1 uses the included TenZ collage image, Project 2 uses the original first-portfolio portrait, and Project 7 uses the ECO GLOW circuit preview. The remaining project-card illustrations and the hero artwork are drawn with CSS. They have no missing picture files. The HTML Essentials card displays a preview rendered from the supplied certificate PDF and links to the original PDF.

Google Fonts is an optional external font dependency. The HTML includes the font links, and CSS supplies system-font fallbacks if that service is unavailable. There are no local font files to upload.

## Optional pictures that would strengthen the portfolio

- A clear portrait, if you want one; the rubric does not require a personal photograph.
- A full-page screenshot of the TenZ website, if you want it in place of the current original artwork, and a screenshot of the first portfolio.
- An anonymized database diagram or a screenshot for the barangay database.
- A wedding-site screenshot after it is ready to share.
- An actual SellSight AI screenshot when there is an implemented interface.
- Circuit Clash simulation and ECO GLOW model/circuit screenshots from your own projects.

Screenshots help demonstrate the work, but are not required for the current code to load. Existing links open the projects on their original services; embedding the full external websites is not necessary.

If you add pictures, create `assets/images/`, use descriptive lowercase names such as `eco-glow-model.webp`, and keep each image reasonably compressed (preferably under about 300 KB when readable). Use JPG/WebP for photos and PNG/WebP for detailed interface screenshots.

An example HTML image:

```html
<img src="assets/images/eco-glow-model.webp"
     alt="ECO GLOW street-lighting 3D model"
     width="1200" height="800" loading="lazy">
```

Use the actual image dimensions and an accurate description. The stylesheet allows images to shrink to fit their container. Do not put local computer paths such as `C:\Users\…` in HTML.

## Other documents

The included README, setup guide, maintenance plan, rubric checklist, and responsive test plan are useful supporting documentation. A Word document, PowerPoint file, Node.js installation, database server, or `node_modules` folder is not required to run this static portfolio.

The certificate PDFs and any other uploaded assets will be accessible to visitors when the repository and Pages website are public. Upload only the files you intend to share.

## TenZ image source

`assets/images/tenz-fanpage.jpg` is the original artwork from Diane’s linked fan website: https://dianevalencia.github.io/Activity4_Web-Systems-and-Technologies-I/assets/images/Tenz-Edited.jpg . It is not a screenshot of the entire page. The full supplied screenshot can replace this image when provided as a downloadable PNG/JPG file.

## ECO GLOW image source

`assets/images/eco-glow-circuit.png` is the circuit preview published in the linked Tinkercad project’s Open Graph metadata. It matches the circuit shown by Diane. Exact full-page screenshots for the first portfolio, Circuit Clash, SellSight AI, and the wedding website are awaiting downloadable image files. Project 2 currently uses the original portrait from its live website, just as Project 1 uses original fan-site artwork.

## First portfolio image source

`assets/images/first-portfolio.png` is the portrait used by Diane’s original portfolio: https://dianevalencia.github.io/FINAL-LABORATORY-EXAM_ITEC50-Web-Systems-and-Technologies-I/assets/images/self-wbg.png . It is the original picture, not a capture of the whole page.
