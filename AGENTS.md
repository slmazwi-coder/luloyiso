# AGENTS.md

Repo-specific knowledge for the Luloyiso Funeral Services site.

## What this is

A static, mobile-first, bilingual (English / isiXhosa) marketing site for Luloyiso
Funeral Services (Matatiele, Eastern Cape). React + Vite + TypeScript + Tailwind +
shadcn/ui. No backend, no database, no environment variables.

Origin: the project was rebranded from the `khwalo-legacy-hub` template. The template's
git history (and its `.env` + Supabase/PayFast integration) was deliberately **not**
carried over — this repo has clean history.

## Commands

```bash
npm run dev        # dev server on :8080
npm run build      # -> dist/
npm run preview    # serve dist/
npm test           # vitest
npm run lint
npx tsc --noEmit
npm run format     # prettier write; format:check to verify
```

## Layout

- `src/data/` — all editable business content: `contact.ts`, `scheme.ts`,
  `tombstones.ts`, `translations.ts`. Prefer editing these over components.
- `src/i18n/LanguageContext.tsx` — `useLang()` exposes `t`, `lang`, `toggle`.
  `translations.ts` types require **both** `en` and `xh` for every key, so a missing
  translation is a compile error.
- `src/components/TombstoneCatalogue.tsx` — the most complex component (search, size
  filter, sort, table/card views, Head&Base / Full / +Slab price toggle, shortlist
  drawer with WhatsApp send).
- `public/tombstones/{code}.jpg` — catalogue photos resolve from here with a graceful
  placeholder when absent.

## Conventions / gotchas

- `formatZAR` uses a **non-breaking space** as the thousands separator. Tests that
  assert on rendered prices must normalise `\u00a0`/`\u202f` first.
- `tel:` links use local format (`tel:0739482146`); `wa.me` links use the international
  `27` prefix. Both are derived from `src/data/contact.ts`.
- The custom domain `www.luloyisofs.co.za` is **not registered yet**. Canonical/OG URLs
  in `index.html` are intentionally omitted with a comment marking where to restore
  them, and `public/sitemap.xml` was removed until the domain exists.
- Deploy target is Vercel (Vite preset). `vercel.json` holds the SPA rewrite.

## Verification

A Playwright acceptance suite (mobile 375 / desktop 1280, catalogue interactions,
i18n toggle, contact links, a11y) was used during development and passed 41/41. It
was removed from the repo; re-create it under `/tmp` if needed rather than committing
it, since the repo ships no e2e harness.
