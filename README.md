# A Sea of Wealth — website prototype

A self-contained static prototype for Ben Halpern's book *A Sea of Wealth: The Blue Economy and the Future of the Ocean*.

## Preview

From the workspace root:

```bash
python3 -m http.server 4173 --directory sea-of-wealth-site
```

Then open <http://127.0.0.1:4173/>.

## Updating events and press

Edit `content.js`. Events and coverage are arrays of small records, deliberately kept separate from the layout so a future Slack-to-site bot has one predictable file to update.

No events, reviews, quotes, or endorsements have been invented. Empty sections show intentional "coming soon" states until real content is added.

## Structure

- `index.html` — page content and semantic structure.
- `styles.css` — responsive visual system.
- `script.js` — menu, content rendering, photo credits, and restrained reveal behavior.
- `content.js` — retailers, events, and press data.
- `assets/` — locally packaged cover and licensed ocean photographs.
- `stock-image-options.md` — selected and alternate image directions with licenses and source links.

## Production notes

Before publication, confirm the preferred domain/host, media-contact information, author links, analytics/privacy policy, final image set, and any required legal review. The current site links to Google Fonts; these can be self-hosted if needed.
