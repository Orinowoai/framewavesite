Framewave Studio Marketing Site — Initial Scaffold

Changes
- Global layout with `Header` and `Footer` (dark theme, clean typography)
- Pages: Home (/), Catalog (/catalog), Press (/press), Contact (/contact)
- Per-page metadata (title/description/OG)
- Components wired: `Hero`, `FeatureCard`, `ProjectCard`
- Catalog: 6 demo projects sourced from `src/data/projects.ts`
- Contact: simple form posting to `/api/contact` (logs to server console)
- Press: links to `/public/press-kit.pdf`; placeholder generated at build if missing
- Updated build script to generate press kit before Next build
- TypeScript/ESLint clean (Next.js 15 + Tailwind)

Notes
- Tailwind utility classes only; tidy classNames
- Favicon and base meta exist via `app/layout.tsx`; OG image set to `/og.png`
- `npm run dev`, `npm run build`, `npm run start` verified locally


