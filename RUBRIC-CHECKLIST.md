# Rubric review — November 10, 2026

This records implementation evidence and outstanding checks, not a guaranteed grade.

| Category | Evidence in the package | Remaining work |
| --- | --- | --- |
| Design & Aesthetics (25) | DV identity, consistent paper/olive/terracotta palette, typography, organized sections, visible focus states. | Review actual screenshots at phone/tablet/desktop widths; optional real project screenshots would make the work more specific. |
| Content & Quality (25) | About includes BSCS year 3, former Accountancy background, interests, and supported skills. Seven projects are listed. Two real certificates have PDFs. Ongoing course, hackathon, and projects have clear statuses. | Complete the barangay database technology/schema/contribution, wedding details when ready, SellSight AI scope/stack/results as implemented, and personal contribution/learning for Circuit Clash and ECO GLOW. Add the remaining certificates when supplied. |
| Functionality & Performance (20) | Relative asset links, mobile menu, project/certificate filters, native dialogs, external project/profile links, lazy-loaded certificate image, and lightweight buildless code. Responsive hardening is implemented. | Perform the browser/device matrix in `RESPONSIVE-TESTING.md`. Verify external-service visibility while signed out. Rendering and cross-browser performance are not established by static checks. |
| Technical Implementation (10) | Semantic sections, Grid/Flexbox, minmax grids, media queries, reduced-motion support, text alternatives, page description/author, canonical/Open Graph metadata, readable source. | Keep HTML and dialog descriptions synchronized when editing; update metadata if the repository name changes. |
| Deployment & Maintenance (20) | Upload-ready static files, correct relative paths, GitHub Pages guide, and weekly/monthly/term maintenance schedule. | Create the public repository, enable Pages, obtain a successful deployment, and test the live URL anonymously. GitHub publication has not been performed by this package preparation. |

## Responsive implementation

- 960px and below: collapsible navigation when JavaScript is working; visible fallback navigation without JavaScript.
- 800px and below: hero and About stack into one column.
- 700px and below: certificates and ongoing-learning cards stack.
- 600px and below: every project card stacks into a single column, including the last card.
- 480px and below: About skill topics stack; small-screen spacing is adjusted.
- All widths: filters and labels can wrap, long text can break safely, grid children can shrink, images fit their containers, touch controls are at least 44px high, and dialogs can scroll.

## Verification boundary

Source, local-reference, PDF presence, and JavaScript syntax checks can be completed here. The managed preview/browser infrastructure is unavailable, so actual browser rendering, zoom, and physical device tests remain pending. Do not report those tests as passed until you perform them.
