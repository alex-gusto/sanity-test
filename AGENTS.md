# Repository Guidelines

## Project Structure & Module Organization
This Next.js 15 app uses the App Router under `src/app`. `layout.tsx` defines the global shell, while `page.tsx` pulls Sanity posts through `src/sanity/client.ts`. Global styles and Tailwind directives live in `src/app/globals.css`; assets belong in `public/`. Keep configuration files (`next.config.ts`, `tsconfig.json`, `eslint.config.mjs`, `postcss.config.mjs`) at the root, and add new routes as `src/app/<segment>/page.tsx` with any shared UI co-located in the same folder.

## Build, Test, and Development Commands
- `npm install` installs dependencies; rerun after modifying `package.json`.
- `npm run dev` starts the TurboPack dev server on http://localhost:3000 with HMR.
- `npm run build` compiles a production bundle using TurboPack optimizations.
- `npm run start` serves the last build locally for smoke testing.
- `npm run lint` runs ESLint with the Next.js Core Web Vitals preset.

## Coding Style & Naming Conventions
Stick to TypeScript and two-space indentation. ESLint (Next.js Core Web Vitals) enforces double quotes and import hygiene; run `npm run lint` before pushing. Use PascalCase for React components, camelCase for hooks/utilities, and kebab-case folders under `src/app` (e.g., `featured-posts/page.tsx`). Prefer Tailwind utilities inline in JSX; reserve custom CSS for `globals.css`.

## Testing Guidelines
Automated testing is not yet configured. When adding tests, keep unit specs near their subjects or under `src/__tests__`, name files `*.test.tsx`, and use React Testing Library for component behavior. Document any manual QA (routes visited, data states) in the PR until a runner is adopted, and always pair it with a `npm run lint` check.

## Commit & Pull Request Guidelines
History currently shows simple imperative messages (“Initial commit …”). Continue with concise, present-tense summaries under ~72 characters, optionally scoped (`feat: add post detail route`). For pull requests include: change summary, verification steps or screenshots, and any follow-up tasks. Keep branches rebased on `main` and ensure linting or local smoke tests pass before requesting review.

## Security & Configuration Tips
Place Sanity credentials and other secrets in `.env.local`; never store them in git. Update `src/sanity/client.ts` to read from environment variables before shipping multi-env builds. Use Vercel project settings for deploy-time secrets, and review `next.config.ts` when changing image domains or experimental flags. After dependency bumps, run `npm outdated` and `npm audit` to spot regressions early.
