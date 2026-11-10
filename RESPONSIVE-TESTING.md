# Responsive and browser testing

## Verification status

Responsive behavior is implemented and source-reviewed. Local references, image attributes, HTML identifiers, and JavaScript syntax are checked during preparation. The required managed browser-preview infrastructure is absent in this environment, so no rendered browser screenshots, physical-device results, or browser performance scores are claimed.

Complete this checklist on the extracted local site or, preferably, the live GitHub Pages URL before submitting. Record real results below.

## Test the widths

Open Chrome or Edge DevTools (F12 or Inspect), toggle the device toolbar (Ctrl+Shift+M on Windows/Linux), choose Responsive, and enter each CSS viewport width below. In Firefox, Responsive Design Mode uses Ctrl+Shift+M. Also resize a normal browser window; simulated devices do not replace real-device checks.

| Width | Expected layout | Result |
| --- | --- | --- |
| 320px | One-column content, usable menu, wrapping long titles and links | Pending browser test |
| 360px / 390px | Phone layout with large enough controls | Pending browser test |
| 480px / 600px | All projects in one column | Pending browser test |
| 700px / 768px | Hero/About stacked; projects may use two columns above 600px | Pending browser test |
| 800px | Hero/About stacked at the breakpoint | Pending browser test |
| 960px | Mobile menu; content grids adapt | Pending browser test |
| 1024px | Desktop navigation and two-column content | Pending browser test |
| 1440px | Centered, bounded content; no excessively stretched text | Pending browser test |

Also test a phone in landscape, a short-height viewport, and 200% browser zoom. At desktop width 1280px and 200% zoom, content should reflow rather than forcing horizontal page scrolling. Check Firefox text-only zoom if available.

## At each size

- No horizontal page scrolling, cut-off content, overlapping titles, or clipped controls.
- Long ECO GLOW and wedding titles wrap within their cards.
- Open the menu; every navigation item is usable. Select a section and check the menu closes. Escape closes the menu and returns focus to its button.
- Switch Projects and Certificates. The selected button and status text update, and only the chosen collection is visible.
- Open project dialogs. Escape and the close button work; long content can scroll in a short viewport. Focus returns to the opening button.
- Read the certificate preview without stretching or cropping, then open each full PDF.
- Verify all project/profile links. External sites may have their own sign-in or privacy restrictions.
- Turn off JavaScript and reload once: navigation and both collections should still be available, while JavaScript-only controls are hidden.

Optional horizontal overflow check in a browser console:

```js
document.documentElement.scrollWidth <= document.documentElement.clientWidth
```

A `true` result only checks document width. Still inspect visual overlap, clipped content, and all interactions.

## Browser/device matrix

| Browser/device | Result | Notes |
| --- | --- | --- |
| Chrome desktop | Pending | |
| Edge desktop | Pending | |
| Firefox desktop | Pending | |
| Safari on macOS/iOS | Pending | |
| Android phone browser | Pending | |
| iPhone browser | Pending | |

## Accessibility and loading

Tab through the page without a mouse. Check the skip link, visible focus, menu, filters, project links, dialogs, PDFs, and Contact profiles. Use 200% zoom and verify the text remains readable. Turn on reduced motion and confirm smooth scrolling is disabled. Check the Network panel for failed local files; an optional Google Fonts failure should fall back to system fonts. Run Lighthouse if available and address concrete accessibility/performance issues; do not invent or predict scores.
