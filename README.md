# douglasjarquin.com

Personal site of [Douglas Jarquin](https://www.douglasjarquin.com/) — posts, notes, and an about page. Built with [Astro](https://astro.build) 5 and [Tailwind CSS](https://tailwindcss.com) 4, deployed to Cloudflare.

## Stack

- Astro 5 with MD/MDX content collections (posts, notes, tags)
- Tailwind CSS 4, light and dark mode
- [Pagefind](https://pagefind.app/) static search
- [Expressive Code](https://expressive-code.com/) for syntax highlighting
- [Satori](https://github.com/vercel/satori) OG images, RSS, sitemap, robots.txt, web app manifest
- Cloudflare Workers static assets via Wrangler

## Commands

Requires Node 22 and pnpm.

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

Site-wide settings (title, author, dates, URL) are in `src/site.config.ts`. Social links are in `src/components/SocialList.astro`.

Draft posts (`draft: true`) are omitted from production builds, RSS, and OG images. VS Code snippets `frontmatter-post` and `frontmatter-note` in `.vscode/post.code-snippets` stub new files.

### Post frontmatter

| Property (* required) | Description                                                                                          |
| --------------------- | ---------------------------------------------------------------------------------------------------- |
| title *               | Post title and page title. Max 60 chars.                                                             |
| description *         | SEO description.                                                                                     |
| publishDate *         | Date. Format/locale is `en-US` in `src/site.config.ts`.                                              |
| updatedDate           | Optional update date.                                                                                |
| tags                  | Optional. Surfaces on `/posts/` and `/tags/`.                                                        |
| coverImage            | Optional `{ src, alt }` hero image.                                                                  |
| ogImage               | Optional. Skip Satori and use this image instead.                                                    |
| draft                 | Optional, default `false`. When `true`, excluded from production.                                    |
| pinned                | Optional, default `false`. Pinned posts appear in a dedicated section on the home and posts pages.   |

### Note frontmatter

| Property (* required) | Description                                              |
| --------------------- | -------------------------------------------------------- |
| title *               | Note title. Max 60 chars.                                |
| description           | Optional SEO description.                                |
| publishDate *         | ISO 8601 with offset, e.g. `2025-01-31T00:00:00Z`.       |

### Tag frontmatter

| Property    | Description                             |
| ----------- | --------------------------------------- |
| title       | Optional h1 / page title. Max 60 chars. |
| description | Optional intro copy under the h1.       |

## Deploy

`pnpm build` writes static files to `dist/`. [wrangler.toml](wrangler.toml) serves that directory as Cloudflare Worker assets (`douglasjarquin-blog`).

## License

MIT. Originally based on [astro-theme-cactus](https://github.com/chrismwilliams/astro-theme-cactus).
