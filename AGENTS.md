# douglasjarquin.com

Personal site of Douglas Jarquin — posts, notes, and an about page. Built with Astro 7 and Tailwind CSS 4, deployed to GitHub Pages behind Cloudflare.

## Stack

- Astro 7 with MD/MDX content collections (posts, notes, tags)
- Tailwind CSS 4, light and dark mode
- Pagefind static search
- Expressive Code for syntax highlighting
- Satori OG images, RSS, sitemap, robots.txt, web app manifest
- GitHub Pages via GitHub Actions, proxied by Cloudflare

## Commands

Requires Node 22.23.4 or later and pnpm.

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

`pnpm build` writes static files to `dist/`. On every push to `main`, `.github/workflows/deploy-pages.yml` builds the site and deploys `dist/` (including `dist/.well-known/`) to GitHub Pages. Cloudflare proxies `www.douglasjarquin.com` in front of Pages. There is no Wrangler config.

## Compound Engineering

Team defaults are in `.compound-engineering/config.yaml`; house rules for this repo are in `compound-packs/house-rules/`.
`docs/solutions/` holds documented solutions to past problems (bugs, best practices, workflow patterns), organized by category with YAML frontmatter (`module`, `tags`, `problem_type`); it is relevant when implementing or debugging in an area it documents.

After a solved, verified problem, offer once to invoke the `ce-compound` skill at the completion checkpoint when the work corrected a wrong belief about how something behaves: an approach that failed, a review finding that exposed a real defect, or an assumption, document, or first diagnosis that turned out wrong. A naming, style, or preference change does not count. Work that went as first planned does not need the offer. Do not judge whether the lesson deserves a document: `ce-compound` decides whether it qualifies and what holds it (a test, a lint rule, a coding standard, or a learning), and writes nothing when nothing qualifies. Offer at the checkpoint so what it writes can ship in the PR that produced it, and only where the repository treats captured learnings as tracked, committed knowledge.

Write every report, summary, or handoff to the user through the `ce-noslop` skill. This applies when you are the top-level agent writing to the user, not when you are a subagent reporting to its caller. Do not apply it to code, config, verbatim quotes, or text the user asked to post as written.
