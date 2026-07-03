# Shree Mangal Karyalay — Website

A traditional, animated, 3D-styled, fully responsive website for **Shree Mangal Karyalay**, a banquet hall / mangal karyalay in Lonar.

Built with **Next.js 15 (App Router) · TypeScript · Tailwind CSS v4 · Framer Motion**.

## Run locally

```bash
npm install
npm run dev      # opens http://localhost:3000 (or next free port)
```

Production build:

```bash
npm run build && npm start
```

## Where to edit content

Almost everything editable lives in **one file**: [`src/data/site.ts`](src/data/site.ts)

| What | Where |
| --- | --- |
| Name, phone, WhatsApp, address, hours | `site` object |
| Stat counters (lawn size, halls, etc.) | `stats` |
| Occasions / event cards | `events` |
| Facilities & amenities | `amenities` |
| Add-on services | `addons` |
| Gallery tiles | `gallery` |
| Guest testimonials | `testimonials` |

Change the phone in `site.phoneHref` / `site.whatsappHref` (digits only, e.g. `918482991111`).

## To personalise before launch

- **Photos** — the Gallery and About sections currently use decorative placeholder tiles. Drop real venue photos into `public/` and swap the placeholder `<div>`s for `next/image`.
- **Testimonials** — replace the sample reviews in `site.ts` with real guest quotes.
- **Map** — the contact map searches "Shree Mangal Karyalay Lonar". Update `site.mapQuery` or paste an exact Google Maps embed URL.

## Deploy to Vercel (manual)

This is a zero-config Next.js app — Vercel detects everything automatically.

1. **Push to GitHub**
   ```bash
   git init
   git add .
   git commit -m "Shree Mangal Karyalay website"
   git branch -M main
   git remote add origin https://github.com/<you>/shree-mangal-karyalay.git
   git push -u origin main
   ```
2. **Import on Vercel** — go to vercel.com → *Add New… → Project* → import the repo.
   Framework: **Next.js** · Build: `next build` · Output: auto. Click **Deploy**.
3. **(Optional) Custom domain** — Vercel → Project → *Settings → Domains*, add your domain.
   Then add an env var `NEXT_PUBLIC_SITE_URL=https://yourdomain.com` (Settings → Environment
   Variables) so canonical URLs, `robots.txt`, and `sitemap.xml` point to the real domain.
   Until then it auto-uses the `*.vercel.app` URL.

**Notes**
- `node_modules`, `.next`, and `.env*` are already git-ignored.
- No environment variables are required for a first deploy.
- Node 18.18+ (Vercel's default works out of the box).

## Design notes

- Palette: royal maroon, embossed gold, marigold — traditional Indian wedding aesthetic.
- Fonts: Cinzel (display), Cormorant Garamond (serif), Tiro Devanagari Marathi (मराठी), Mukta (body).
- 3D / animation: parallax rotating mandalas, tilt-on-hover cards, count-up stats, floating marigold petals, flickering diyas, scroll reveals. Respects `prefers-reduced-motion`.
