# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

@AGENTS.md

## Commands

```bash
npm run dev      # Start dev server at http://localhost:3000
npm run build    # Production build
npm run start    # Serve production build
npm run lint     # Run ESLint
```

## Architecture

**Stack:** Next.js 16 (App Router), React 19, JavaScript (no TypeScript), CSS Modules.

**Path alias:** `@/*` resolves to `./src/*` — always use this for imports.

**Routing:** Every page is `src/app/<route>/page.js` exporting a default React component. The root layout (`src/app/layout.js`) wraps every page with `<Header>` and `<Footer>`.

**Server vs. Client components:** Pages and most components are Server Components by default. Components that use browser APIs, hooks, or event handlers must start with `"use client"`. `FloatingSearchBar` wraps `useSearchParams()` in `<Suspense>` because it requires a client boundary.

**Search params (important Next.js 16 change):** In Server Components, `searchParams` must be awaited before accessing properties:
```js
export default async function Page(props) {
  const searchParams = await props.searchParams;
}
```

**Data layer:** All property data is currently hardcoded as static arrays inside page files — there is no database or API. The `/property/[id]` detail page renders static placeholder data regardless of the `id` param.

**Styling:** Each component/page has its own CSS Module (e.g., `Header.module.css`). Global utility classes (`.container`, `.btn`, `.btn-primary`, `.btn-secondary`, `.btn-gold`, `.glass`, `.glass-dark`, `.section-title`, `.section-subtitle`, `.py-5`, etc.) are defined in `src/app/globals.css` and available globally — prefer these over inline styles where they fit.

**Design tokens (defined in `globals.css` `:root`):**
- `--royal-blue: #0A43C6` — primary brand color
- `--premium-gold: #F2B100` — accent/CTA color
- Headings: `Cormorant Garamond` serif; body: `Inter` sans-serif

**Icons:** Use `lucide-react` for all icons — it is the only icon library installed.

**Animations:** `framer-motion` is available for motion effects.
