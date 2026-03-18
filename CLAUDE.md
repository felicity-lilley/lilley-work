# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Commands

```bash
npm run dev      # Start Vite dev server
npm run build    # Production build → dist/
npm run preview  # Preview production build locally
```

No test or lint commands are configured.

## Deployment

Deploys to **Cloudflare Pages** with build command `npm run build` and output directory `dist`.

## Architecture

Single-page React app (Vite). One component: `src/App.jsx` renders a personal portfolio landing page. Entry point is `src/main.jsx`.

**CSS theming variables** (defined in `src/index.css`):
- `--ink`: #0d0d0d
- `--paper`: #f4f0e8
- `--rust`: #c1440e (accent)
- `--fade`: #b8b0a0

Layout uses CSS Grid and `clamp()` for fluid typography. Animations use a staggered `rise` keyframe on page load. Fonts: Playfair Display (serif) + DM Mono (monospace) via Google Fonts.
