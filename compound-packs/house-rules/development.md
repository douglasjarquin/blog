---
title: Develop the douglasjarquin.com Astro site
applies_when:
  - Planning, implementing, or reviewing changes in the douglasjarquin.com repository
  - Adding or changing pages, layouts, components, content collections, or build integrations
tags: [astro, tailwind, content, deploy]
---

# Develop the douglasjarquin.com Astro site

Read `AGENTS.md` first; it is the source for the stack, commands, content layout, and deploy path.
Use pnpm and the scripts in `package.json`; do not add a second package manager, lockfile, or task runner.

The site is fully static: Astro 7 renders to `dist/`, GitHub Actions deploys it to GitHub Pages, and Cloudflare proxies it.
Do not add a server runtime, adapter, Wrangler config, or client-side dependency for something a build-time page can produce.
Generated endpoints such as RSS, `llms.txt`, OG images, the sitemap, and `/.well-known/` files come from `src/pages/` at build time; change their source, never their output in `dist/`.

Posts, notes, and tag copy live under `src/content/` and are typed by `src/content.config.ts`; the file path is the slug, so moving a file changes a public URL.
Draft posts (`draft: true`) must stay out of production pages, RSS, and OG images.
Keep post and note prose in its existing one-paragraph-per-line form; sentence-per-line applies to repository docs and Compound Engineering artifacts, not to published content.
Do not rewrite Doug's published prose unless the task is an edit to that post.

Verify with the same commands CI runs: `pnpm astro check`, `pnpm build` (which also runs Pagefind and validates the AI Catalog), and `pnpm test:catalog`; run `pnpm check` for Biome as well.
Search works only in a production build, so check it with `pnpm build` then `pnpm preview`, not `pnpm dev`.
Capture before and after screenshots in light and dark mode for visual changes.

Do not hand-edit generated or vendored files, including `pnpm-lock.yaml` and `scripts/schemas/`.
Do not add speculative abstractions, compatibility layers, or dependencies when Astro, Tailwind, or an existing integration already covers the need.
Only Doug merges or deploys; a push to `main` publishes the site.
