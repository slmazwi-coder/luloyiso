# Luloyiso Funeral Services — website

Marketing site for **Luloyiso Funeral Services**, a funeral business in Matatiele,
Eastern Cape. Mobile-first, bilingual (English / isiXhosa), and deployable to Vercel.

Built with Vite + React + TypeScript + Tailwind CSS and the shadcn/ui component set.

## What's on the site

- **Hero** with the business premises, contact shortcuts and a scripture line.
- **Services** — coffins, décor, tents, chairs, tombstones, video, P.A. system,
  transport, lowering device, programmes and more.
- **Burial scheme** — three age-banded plans with a Single / With-spouse premium toggle.
- **Tombstone catalogue** — search, filter by size, sort, switch between table and
  card views, a Head & Base / Full Set / Full Set + Slab price toggle, a shortlist
  drawer, print/download, and WhatsApp quote links per design.
- **Trust & membership** — SAFPA membership and the certificate image.
- **Contact** — address, both phone numbers, email, an embedded map, and an enquiry
  form that opens WhatsApp with the details pre-filled.
- **Sticky mobile action bar** with Call and WhatsApp, so both are always one tap away.

## Local development

```bash
npm install
npm run dev      # dev server
npm run build    # production build into dist/
npm run preview  # serve the production build locally
npm run lint
npm test         # vitest
```

## Editing content

Almost everything a non-developer needs to change lives in `src/data/`:

| File                       | What it holds                                                      |
| -------------------------- | ------------------------------------------------------------------ |
| `src/data/contact.ts`      | Address, phone numbers, emails, map coordinates, WhatsApp defaults |
| `src/data/scheme.ts`       | Burial scheme plans, member benefits, terms and joining fee        |
| `src/data/tombstones.ts`   | The full tombstone price list and the slab add-on price            |
| `src/data/translations.ts` | Every English / isiXhosa string used on the site                   |

The language toggle is driven entirely by `src/data/translations.ts`. To add or change
wording, edit the `en` and `xh` values for the relevant key — both languages are
required by the type, so the build fails if one is missing.

## Tombstone photos

The catalogue currently shows a "photo coming soon" placeholder for every design
because the photos have not been supplied yet. To add a photo, drop a file at
`public/tombstones/{code}.jpg` (for example `public/tombstones/P1.jpg`) — no code
change is needed, the card picks it up automatically. Designs with no photo page in
the printed catalogue (P33–P36 and P41+) keep the placeholder.

> The names and dates shown on the catalogue headstones are fictional (confirmed by
> the client), so the photos can be published as-is.

## Deployment (Vercel)

The custom domain `www.luloyisofs.co.za` is **not registered yet**, so the site runs on
its Vercel-assigned `*.vercel.app` URL for now. Nothing in the build depends on the
domain, so switching over later is just a DNS step.

1. Push this repository to GitHub.
2. In Vercel, **New Project → Import** the repository.
3. Vercel detects Vite automatically. Build command `npm run build`, output directory `dist`.
4. Deploy — you'll get a URL like `https://luloyiso.vercel.app`.
5. `vercel.json` already contains the SPA rewrite so client-side routes resolve on refresh.

No environment variables or backend services are required — the site is fully static.

**When the domain is registered**, add it in Vercel under **Settings → Domains**, point
the DNS records Vercel shows you, then restore the canonical/Open Graph URLs by
uncommenting the canonical link in `index.html` (there's a comment marking the spot) and
re-adding `public/sitemap.xml`.

## Notes on the price data

A few rows on the source sheet were unreadable and have deliberately been left blank
rather than guessed. Those designs show "Price on request" with a call link, and can be
filled in later:

- **P24 appears twice** on the sheet, with different prices. Only the first row is
  included. The second row (R6 300 head & base / R9 440 full set) is left out until the
  client confirms whether it is a separate design and what its code should be.
- **P44, P47, P48, P56, P57** — the head & base figures looked like partial numbers, so
  only the full-set prices are shown.

## Still to confirm with the client

- **Email address** — signage shows `sibongilemginqi@gmail.com`, the flyer shows
  `luloyiso76@gmail.com`. Both are rendered in the contact section and footer; confirm
  which is primary (and whether the other should be dropped).
- **Burial scheme terms** — dependants, the 6-month waiting period, free collection for
  members, and the R50/month option are paraphrased from the flyer and each carries a
  "please confirm with us" note in the UI.
- **Slab price** is set to R7 000 per the client's instruction; the source sheet also
  showed R6 500. `SLAB_PRICE` in `src/data/tombstones.ts` is a one-line change.
- **Tombstone photos** — none supplied yet; cards show a placeholder until files are
  added at `public/tombstones/{code}.jpg`.
