# Knowledge Library

A single-page document library, deployed the same way as the CMS TEAMs app
and the portal (static HTML on GitHub Pages). It shows a grid of topic
cards — **CMS TEAMs** is the first one — and clicking a card lists the
documents filed under it.

## Where to upload documents

Each card has its own folder under `documents/`. For the CMS TEAMs card,
that's:

```
documents/cms-teams/
```

To add a document:

1. Upload the file (PDF, Word doc, etc.) into `documents/cms-teams/` in
   this repo.
2. Open `documents.js` and add one entry to the `DOCUMENTS` array, e.g.:

```js
{
  cardId: "cms-teams",
  title: "TEAM Qualified SNF List — Q3 2026",
  filename: "TEAM_Qualified_SNF_List_Q3_2026.pdf",
  description: "CMS's list of facilities qualifying for the SNF 3-day rule waiver.",
  dateAdded: "2026-08-25",
},
```

3. Commit/push. The card's document count and list update automatically —
   nothing else in the page needs to change.

There's no database and no server: `documents.js` is the whole index, and
GitHub Pages serves the uploaded files directly from their folder.

## Adding a new card (topic)

1. Create a new folder under `documents/`, e.g. `documents/hr-policies/`.
2. Add an entry to the `CARDS` array in `documents.js` with an `id`,
   `title`, `description`, and `folder` (matching the folder you just
   created).
3. Add `DOCUMENTS` entries for any files you upload into that folder.

## Deploying

Same pattern as `PureInsightsTEAMs`: push this folder (`index.html`,
`documents.js`, and the `documents/` tree) to a GitHub repo with Pages
enabled, or as a subfolder of an existing Pages site. Suggested repo name:
`KnowledgeLibrary`, deployed at
`mcoajoycemartin.github.io/KnowledgeLibrary/`. Once live, add a card for
it on the yourpureai.com portal the same way the CMS TEAMs card was added
(see `cms-teams-app` / `yourpureai-portal` STATUS docs in the project for
that pattern — `CARD_APP_MAP` + a portal card pointing at the Pages URL).

## Files in this folder

- `index.html` — the page (cards + document list view)
- `documents.js` — the manifest: card definitions and document entries
  (the only file you edit day-to-day)
- `documents/cms-teams/` — where CMS TEAMs files actually live
