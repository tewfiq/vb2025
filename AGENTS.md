# Repository Guidelines

## Project Structure & Module Organization
- `src/app` hosts the Next.js App Router tree; start with `page.tsx` and colocated route layouts.
- `src/components`, `src/hooks`, and `src/lib` house reusable UI, custom hooks, and shared utilities; reuse instead of duplicating logic.
- `src/ai` contains Genkit flows and supporting code for AI-powered features; keep these modules side-effect free and export typed handlers.
- Static assets live in `public/`; long-form references and marketing copy live under `docs/` and `knowledge.md`.

## Build, Test, and Development Commands
- `npm run dev` launches Next.js with Turbopack on port 9002 for local work.
- `npm run genkit:dev` starts the Genkit developer console (via `tsx src/ai/dev.ts`); use `npm run genkit:watch` while iterating on flows.
- `npm run lint` enforces the Next.js ESLint rules; run prior to every push.
- `npm run typecheck` runs `tsc --noEmit` to guard against typing regressions.
- `npm run build` followed by `npm run start` validates the production bundle before releasing.

## Coding Style & Naming Conventions
- Stick to TypeScript function components, 2-space indentation, and `PascalCase` filenames for exported components; hooks use `useName` within `src/hooks`.
- Prefer declarative Tailwind utility classes defined in `tailwind.config.ts`; extend variants centrally instead of inlining complex CSS.
- Use the `@/` alias for imports from `src/` and keep barrel files small to avoid circular dependencies.

## Testing Guidelines
- Linting and type checks are the current automated gates; ensure both pass for every change.
- When introducing tests, colocate `*.test.tsx` files beside the component or hook and use React Testing Library with Vitest/Jest; document any new tooling in `docs/`.
- Exercise key flows manually via `npm run dev` before opening a PR, especially AI interactions driven by Genkit.

## Commit & Pull Request Guidelines
- Follow the existing conventional format (`type(scope): summary`), e.g. `refactor(ui): refresh pricing tiers`.
- Each PR should describe the change, list manual verification steps, and include screenshots or recordings for visual updates.
- Reference linked issues or product briefs, and call out migrations (e.g., Tailwind config, Genkit schema) in the PR body so reviewers can double-check deploy impacts.

## Security & Configuration Tips
- Store secrets in `.env.local` and keep them out of version control; `dotenv` loads these for local runs.
- Update `apphosting.yaml` or Firebase configuration only after coordinating with the deployment owner.
- Review third-party additions in `package.json` for license compatibility before committing.
