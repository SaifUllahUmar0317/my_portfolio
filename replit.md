# Portfolio Website — Saifullah Umar

A portfolio website exported from Figma (originally at https://www.figma.com/design/cznMSSxnGI0Eea8l3mpKLN/Portfolio-website-design).

## Stack

- **React 18** + **TypeScript** via **Vite**
- **Tailwind CSS v4** (via `@tailwindcss/vite`)
- **shadcn/Radix UI** components + **MUI**
- **react-router v7** for routing
- No backend — purely static frontend

## Running locally

```bash
npm install
npm run dev        # starts Vite dev server on port 5000
```

## Replit workflow

The **Start application** workflow runs `npx vite` and serves the app on port 5000.

## Project structure

```
src/
  app/        # App entry and routing
  imports/    # Figma-exported page/component files
  styles/     # Global CSS
index.html
vite.config.ts
```

## User preferences

- Keep the existing Figma-exported structure intact.
- Get it running and hostable, then make content/design changes on request.
