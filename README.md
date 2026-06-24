<div align="center">

<img src="public/logo.svg" alt="BaldyBuilds" width="64" />

# BaldyBuilds

**Web design for Ayrshire tradespeople and small businesses.**

[![Built with Astro](https://img.shields.io/badge/Built%20with-Astro-FF5D01?style=flat-square&logo=astro&logoColor=white)](https://astro.build)
[![Deployed on Netlify](https://img.shields.io/badge/Deployed%20on-Netlify-00C7B7?style=flat-square&logo=netlify&logoColor=white)](https://netlify.com)
[![Tailwind CSS v4](https://img.shields.io/badge/Tailwind-v4-38BDF8?style=flat-square&logo=tailwindcss&logoColor=white)](https://tailwindcss.com)

</div>

---

## About

Personal services site for BaldyBuilds. Clean, fast websites built for local tradespeople and small businesses who want something better than a Facebook page.

Built dark and bold. Deployed on Netlify. No bloat.

## Stack

| Layer | Tech |
|---|---|
| Framework | [Astro 7](https://astro.build) |
| Styling | [Tailwind CSS v4](https://tailwindcss.com) (CSS-first, no config file) |
| Deployment | [Netlify](https://netlify.com) + SSR adapter |
| Email | [Resend](https://resend.com) |
| Analytics | [PostHog](https://posthog.com) (EU region) |
| Language | TypeScript (strict) |

## Pages

- `/` — Home
- `/services` — Packages and pricing
- `/portfolio` — Project showcase (content collection)
- `/about` — About Jamie
- `/contact` — Contact form (SSR, server-side email via Resend)

## Getting Started

```bash
npm install
npm run dev
```

The dev server starts at `http://localhost:4321`.

## Environment Variables

Create a `.env` file in the root:

```env
RESEND_API_KEY=your_key_here
PUBLIC_POSTHOG_KEY=your_key_here
CONTACT_EMAIL=your_email_here
```

## Project Structure

```
src/
  pages/
    api/contact.ts   # SSR contact form endpoint
    portfolio/       # Dynamic portfolio routes
  content/
    portfolio/       # .md files for portfolio entries
  data/
    packages.ts      # Pricing packages
    nav.ts           # Navigation links
  lib/
    resend.ts        # Email helper
public/
  fonts/             # Self-hosted Sora + Inter (woff2)
  portfolio/         # Project screenshots
  logos/             # Client logos
```

## Build

```bash
npm run build     # Production build
npm run preview   # Preview the build locally
```

---

<div align="center">

Built by [Jamie McCallum](https://baldybuilds.co.uk)

</div>
