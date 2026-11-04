# A Sea of Wealth — website prototype

A self-contained, multi-page static prototype for Ben Halpern's book *A Sea of Wealth: The Blue Economy and the Future of the Ocean*.

## Preview

From the workspace root:

```bash
python3 -m http.server 4173 --directory sea-of-wealth-site
```

Then open <http://127.0.0.1:4173/>.

## Updating events and press

Edit `content.js`. Retailer links, endorsement blurbs, events, and coverage are small records kept separate from the layout so a future Slack-to-site bot has one predictable file to update.

No events, editorial reviews, or media coverage have been invented. The endorsement blurbs are copied from Princeton University Press; empty dynamic sections show intentional "coming soon" states until real content is added.

## Structure

- `index.html` — home page.
- `book.html` — concise book overview and publication details.
- `events.html` — tour dates rendered from `content.js`.
- `press.html` — reviews and coverage rendered from `content.js`.
- `author.html` — author biography and profile links.
- `preorder.html` — retailer links rendered from `content.js`.
- `styles.css` — responsive visual system.
- `script.js` — menu, content rendering, photo credits, and restrained reveal behavior.
- `content.js` — regional retailers, endorsement blurbs, events, and press data.
- `assets/` — locally packaged cover and licensed ocean photographs.
- `stock-image-options.md` — selected and alternate image directions with licenses and source links.

## Production notes

Before publication, confirm the preferred domain/host, media-contact information, author links, analytics/privacy policy, final image set, and any required legal review. The current site links to Google Fonts; these can be self-hosted if needed.
