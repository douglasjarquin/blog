# douglasjarquin.com

Personal site of Douglas Jarquin — posts, notes, and an about page. Built with Astro 7 and Tailwind CSS 4, deployed to Cloudflare.

## Stack

- Astro 7 with MD/MDX content collections (posts, notes, tags)
- Tailwind CSS 4, light and dark mode
- Pagefind static search
- Expressive Code for syntax highlighting
- Satori OG images, RSS, sitemap, robots.txt, web app manifest
- Cloudflare Workers static assets via Wrangler

## Commands

Requires Node 22.12.0 or later and pnpm.

| Command         | Action                                              |
| :-------------- | :-------------------------------------------------- |
| `pnpm install`  | Install dependencies                                |
| `pnpm dev`      | Start the local server at `localhost:4321`          |
| `pnpm build`    | Production build to `./dist/` (runs Pagefind after) |
| `pnpm preview`  | Preview the production build                        |
| `pnpm check`    | Astro type check plus Biome                         |
| `pnpm lint`     | Biome check with writes                             |
| `pnpm format`   | Prettier                                            |

Search is production-only. After a build, `pnpm preview` is the way to try it locally.

## Content

Posts, notes, and optional tag pages live under `src/content/` and are typed by `src/content.config.ts`. The filename (including nested folders) becomes the slug.

- Posts: `src/content/post/` → `/posts/<slug>/`
- Notes: `src/content/note/` → `/notes/<slug>/`
- Tag copy: `src/content/tag/` → `/tags/<tag>/` (filename must match a post tag)

Site-wide settings (title, author, dates, URL) are in `src/site.config.ts`. Social links are in `src/components/SocialList.astro`. Draft posts (`draft: true`) are omitted from production builds, RSS, and OG images.

## Deploy

`pnpm build` writes static files to `dist/`. `wrangler.toml` serves that directory as Cloudflare Worker assets (`douglasjarquin-blog`).
