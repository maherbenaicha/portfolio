# Maher Ben Aicha — Personal Portfolio

Built with **Next.js 14**, **Tailwind CSS**, and **Framer Motion**.

## Stack

| Layer | Technology |
|---|---|
| Framework | Next.js 14 (App Router) |
| Language | TypeScript |
| Styling | Tailwind CSS v3 |
| Animations | Framer Motion |
| Contact form | Resend API |
| Fonts | Space Grotesk (display) · IBM Plex Mono · Caveat |

## Getting started

```bash
# 1. Install dependencies
npm install

# 2. Run locally
npm run dev
# open http://localhost:3000

# 3. Build for production
npm run build
npm run start
```

## Before you deploy

1. **Photo** — `public/assets/maher-portrait.png` and `app/icon.jpg` are placeholder
   monograms (no photo was supplied). Swap them for a real photo/cutout if you'd like —
   the Hero component (`components/sections/Hero.tsx`) treats it as a plain image, so any
   PNG with a transparent or matching background will work.
2. **LinkedIn URL** — `lib/portfolio-data.ts` → `SOCIALS.linkedin` currently points to
   `https://www.linkedin.com/in/maher-ben-aicha` as a placeholder. Update it to your real
   profile URL (also used in `components/sections/Footer.tsx`, `Navbar.tsx`, and
   `components/ui/JsonLd.tsx`).
3. **Contact form** — the form posts to `/api/contact`, which uses
   [Resend](https://resend.com). Create a free Resend account, verify a sending domain (or
   use their sandbox address), and set the `RESEND_API_KEY` environment variable on your
   hosting provider. Without it the form will show an error, but your email/phone links in
   the Contact section will still work.
4. **Site URL** — set the `NEXT_PUBLIC_SITE_URL` environment variable to your real deployed
   domain (used for SEO metadata, the sitemap, and Open Graph images). It falls back to a
   placeholder Vercel-style URL if unset.
5. **Repo links** — project cards in `lib/portfolio-data.ts` currently link to your GitHub
   profile (`https://github.com/maherbenaicha`) since the CV didn't list individual repo
   URLs. If you push each project to its own repo, update the `github` field per project.

## Deploying

- **Vercel** (simplest for Next.js): import the repo at vercel.com, it auto-detects
  Next.js — no config needed. Add the environment variables above in the project settings.
- **Netlify**: add the `@netlify/plugin-nextjs` plugin (or let Netlify auto-detect Next.js),
  then add the same environment variables in Site settings → Environment variables.

## Content

All personal content (name, bio, projects, experience, certifications, education, skills)
lives in `lib/portfolio-data.ts` — edit that one file to update most of the site.
