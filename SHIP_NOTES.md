# Ship notes for CS-BLOG-NOW-TOOLS-001

Branch `cursor/cs-blog-now-tools-001-9eb6`. Do not open a pull request. Push only.

## Suggested PR title

`feat(pages): add /now/ and /tools/ routes`

## Suggested PR body

### Why

The site needed public `/now/` and `/tools/` pages that read like the rest of Doug Blog. They reuse the About page shape, DESIGN.md tokens, and `menuLinks` nav. No new visual language.

### Scope

- Add `src/pages/now.astro`. Canonical Now page. Watching F1, playing golf, building pinchos. Last-updated is an italic `[boss fill-in]` because the repo has no Now date.
- Add `src/pages/tools.astro`. Editorial workbench `dl` plus a 2024 defaults table. Facts come from `src/content/post/2025/01/01/default-apps.md` and the pinchos line on About. Link to that post. Date is 1 Jan 2025 from its frontmatter. Skip `n/a` rows.
- Add `/now/` and `/tools/` to `menuLinks` in `src/site.config.ts`. Header and footer pick them up the same way as About, Blog, and Notes.
- Point About's Now `SectionHeader` at `/now/`. Keep the short `dl` on About.

Out of scope. Redesign, extra nav chrome, a shared facts module, fabricated bio or tools.

### Tradeoffs

Kept the three Now facts on both About and `/now/` instead of extracting a data module. Three strings are not worth a new source of truth. `/now/` is the longer URL. About stays a snapshot with a header link.

Curated Tools instead of dumping the whole default-apps table. Dropped `n/a` categories. Kept the distinctive workbench set and the daily Apple defaults.

### Blast radius

Readers see two new nav items and two new routes. About still renders. Existing posts and notes are untouched. `design-system.astro` and theme components are unchanged.

### Verification

Production `pnpm build`, then `pnpm preview` on `127.0.0.1:4321`. HTTP 200 on `/now/`, `/tools/`, and `/about/` with the titles below. `pnpm check` was clean (Astro 0 errors, Biome 63 files).

## Principles

Each line is a principle and the choice it changed.

- **Laziness Protocol.** Smallest change. New files are two Astro pages plus `menuLinks` entries. No new CSS, tokens, or nav component. Copied `about.astro` instead of inventing a layout kit.
- **Foundational Thinking / Model the Domain.** Pages are content routes. Nav is the existing `menuLinks` list, not a second menu. Domain facts stay in the page files. Skipped a shared Now data module because the shape is three static strings, not branching logic.
- **Subtract Before You Add.** Did not extract a facts module and did not duplicate Now into a new UI kit. About keeps its Now `dl`. `/now/` is the canonical expanded page. Tools omits `n/a` rows instead of reprinting the whole markdown post.
- **Experience First.** Quiet first-person copy. `dl` and scorecard table already in DESIGN.md. Dashed `Card` only for the supporting link to the 2024 post.
- **Prove It Works.** Ran the real static build and hit the preview server. Did not stop at "it compiles."
- **Sequence Work into Verifiable Units.** Pages and nav first, commit, push, then install, build, preview HTTP, `pnpm check`, then these notes.

Leaf skills applied in the same pass. `how` kept layout as `PageLayout` + `section.section` + `SectionHeader`. `control-ui` mindset meant hitting live `/now/` and `/tools/` on the preview server. Prose went through unslop. Diff went through deslop before commit. No narrating comments in the pages.

`architect` skipped. `about.astro` is the page pattern. `interrogate` skipped. Design was not contested. Opening a PR skipped. The ship task forbids opening or merging a PR.

## Files changed

- `src/pages/now.astro` is the new Now route.
- `src/pages/tools.astro` is the new Tools route.
- `src/site.config.ts` registers both paths in `menuLinks`.
- `src/pages/about.astro` links the Now section header to `/now/`.
- `SHIP_NOTES.md` is this file.

## Verification evidence

### Install

```
pnpm install
```

Lockfile up to date. 649 packages added. `postinstall` rebuilt sharp. Exit 0.

### Production build

```
pnpm build
```

Astro static build wrote:

```
src/pages/now.astro   -> /now/index.html
src/pages/tools.astro -> /tools/index.html
src/pages/about.astro -> /about/index.html
```

`15 page(s) built in 2.57s`. Pagefind postbuild finished. Exit 0.

### Preview HTTP

```
pnpm preview --host 127.0.0.1 --port 4321
curl -sS -o /tmp/now.html   -w "now: %{http_code} %{url_effective}\n"   http://127.0.0.1:4321/now/
curl -sS -o /tmp/tools.html -w "tools: %{http_code} %{url_effective}\n" http://127.0.0.1:4321/tools/
curl -sS -o /tmp/about.html -w "about: %{http_code} %{url_effective}\n" http://127.0.0.1:4321/about/
```

Result:

```
now: 200 http://127.0.0.1:4321/now/
tools: 200 http://127.0.0.1:4321/tools/
about: 200 http://127.0.0.1:4321/about/
<title>Now • Douglas Jarquin</title>
<title>Tools • Douglas Jarquin</title>
<title>About • Douglas Jarquin</title>
```

Content checks on those HTML files. `/now/` has forza Ferrari, pinchos, and `[boss fill-in]`. `/tools/` has Wezterm, Neovim, 1Password, and the 2024 defaults table. `/about/` Now header is `<a href="/now/">Now</a>`. Header nav on `/now/` has `aria-current="page"` on Now. Same for Tools on `/tools/`.

### Project checks

```
pnpm check
```

`astro check && biome check`. 55 Astro files, 0 errors, 0 warnings. Biome checked 63 files, no fixes applied. Exit 0.

CI equivalent from `.github/workflows/ci.yml` is `pnpm astro check` plus `pnpm build`. Both passed locally.

## Blockers

`/now/` last-updated is `[boss fill-in]`. No Now date exists in the repo. Tools last-updated is 1 Jan 2025 from the default-apps post. That is honest, not guessed.
