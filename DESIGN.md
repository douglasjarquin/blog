# Doug Blog Design System

## 0. Research Log

- Approved reference: `Doug Blog Theme.dc.html`, the read-only fairway-green exploration, plus the classless blog kit at `/Users/douglasjarquin/firstmate/data/blog-theme-source/ui_kits/blog/index.html`.
- Token extraction: the read-only `tokens/`, `base/elements.css`, `styles.css`, and Tailwind v4 token files define the production values below.
- Skipped lanes: external product research and generated image drafts, because the approved source is the direct visual contract and must remain read-only.

## 1. Atmosphere & Identity

This is a quiet personal corner with warm paper, editorial serif text, and small terminal details.
The signature is the tilted DJ roundel, the square fairway marker, and the checkered start/finish rule.
The voice is first person, plain, dry, and lightly self-aware.

## 2. Color

| Role           | Token              | Light                 | Dark                   | Usage                                |
| -------------- | ------------------ | --------------------- | ---------------------- | ------------------------------------ |
| Page surface   | `--paper`          | `#f8f4ec`             | `#171410`              | Body and page background             |
| Primary text   | `--ink`            | `#282218`             | `#e9e1cf`              | Body copy and headings               |
| Muted text     | `--muted`          | `#8d8371`             | `#8f8674`              | Metadata and labels                  |
| Hairline       | `--line`           | `#e5ddcb`             | `#2c261d`              | Dividers and field borders           |
| Fairway accent | `--accent`         | `oklch(0.5 0.12 150)` | `oklch(0.7 0.12 150)`  | Links, rules, focus, primary actions |
| Danger         | `--danger`         | `oklch(0.52 0.19 31)` | `oklch(0.7 0.17 33)`   | Errors only                          |
| Warn           | `--warn`           | `oklch(0.55 0.16 60)` | `oklch(0.72 0.15 62)`  | Semantic warning specimen            |
| Info           | `--info`           | `oklch(0.5 0.11 235)` | `oklch(0.72 0.11 235)` | Semantic information specimen        |
| Code panel     | `--panel-code`     | `#211b13`             | `#211b13`              | Code only                            |
| Code ink       | `--panel-code-ink` | `#ece3cd`             | `#ece3cd`              | Code only                            |

Fairway is the only brand accent.
Semantic danger, warning, and information colors appear only where their meaning requires them.
There are no gradients or shadows.

## 3. Typography

| Level   | Size     | Weight     | Line height | Tracking   | Usage                         |
| ------- | -------- | ---------- | ----------- | ---------- | ----------------------------- |
| Display | `42px`   | 600 italic | `1.22`      | `-0.015em` | Page introductions            |
| Title   | `28px`   | 600        | `1.22`      | `-0.015em` | Page and post titles          |
| Heading | `21px`   | 600        | `1.22`      | `-0.015em` | Content headings              |
| Body    | `17.5px` | 400        | `1.8`       | normal     | Editorial copy                |
| Small   | `14px`   | 400        | inherited   | normal     | Supporting copy               |
| Meta    | `12px`   | 400        | inherited   | `0.04em`   | Dates and locations           |
| Label   | `11px`   | 700        | inherited   | `0.18em`   | Uppercase labels and controls |
| Micro   | `10px`   | 400        | inherited   | `0.16em`   | Table headings                |

The only font families are Literata for body and display text and Space Mono for labels, metadata, code, and form controls.

## 4. Spacing & Layout

All spacing uses the approved scale: `--space-1: 4px`, `--space-2: 8px`, `--space-3: 10px`, `--space-4: 14px`, `--space-5: 18px`, `--space-6: 26px`, `--space-7: 36px`, and `--space-8: 54px`.

The content measure is `--measure: 620px`.
The main column is centered with `24px` mobile gutters and a generous `54px` top rhythm.
At `768px` and above, the same single-column measure remains the organizing principle.
The supporting tokens are `--space-list-indent: 24px`, `--space-grid-gap: 16px`, `--space-definition-pad: 13px`, `--space-quote-indent: 20px`, `--space-code-y: 20px`, and `--space-code-x: 22px`.
The only layout mechanics outside the scale are intrinsic grid and flex sizing needed to prevent overflow.

## 5. Components

### SectionHeader

- Structure: `header.section-header` with an accent square, uppercase mono label, and heading/link.
- Variants: linked and plain.
- Spacing: `--space-2` between motif and label; `--space-4` below the header.
- States: default, link hover, focus-visible.
- Accessibility: use a real heading and link when navigation is available.
- Motion: color and underline transitions only.
- Layout: horizontal cluster that wraps safely.

### Card

- Structure: `article.card` or `div.card` with a hairline border and content.
- Variants: default and dashed aside.
- Spacing: `--space-5` padding.
- States: default, hover wash for linked cards, focus-visible on contained links.
- Accessibility: preserve heading hierarchy and semantic article boundaries.
- Motion: no decorative motion.
- Layout: block stack.

### Badge

- Structure: inline `span.badge`.
- Variants: accent, muted, danger, warn, and info.
- Spacing: `--space-1` vertical and `--space-2` horizontal padding.
- States: default and readable in both themes.
- Accessibility: text remains meaningful without color.
- Motion: color transition only.
- Layout: inline pill.

### Button

- Structure: native `button` or submit input.
- Variants: ghost and solid submit.
- Spacing: `6px 16px` with chip radius.
- States: default, hover, active, focus-visible, and disabled.
- Accessibility: native keyboard behavior and visible focus.
- Motion: 200ms color, border, and background transitions.
- Layout: inline control.

### Scorecard

- Structure: semantic `table` with `caption`, `thead`, `tbody`, and `tfoot`.
- Variants: post list and content table.
- Spacing: `12px` cells and a strong top rule.
- States: row hover wash and focus-visible links.
- Accessibility: caption and header cells define the table.
- Motion: row background transition only.
- Layout: full measure with deliberate horizontal overflow containment for very wide data.

### Form controls

- Structure: native labels, inputs, select, textarea, checkbox, radio, range, and `details`.
- Variants: text, choice, switch specimen, disabled, invalid.
- Spacing: `10px 12px` fields and `--space-4` field groups.
- States: default, hover, focus-visible, disabled, and invalid.
- Accessibility: every control has a label; switches expose `role="switch"` and `aria-checked`.
- Motion: border and ring transitions only.
- Layout: vertical stack that reflows to one readable column.

## 6. Motion & Interaction

The theme uses `0.2s ease` for color and border changes and `0.18s ease` for the small post-row hover slide.
Quote typography uses `--text-quote: 19px` and `--leading-quote: 1.7`.
The theme toggle uses a `0.25s` background fade.
Only transforms, opacity, and color-like properties animate.
`prefers-reduced-motion: reduce` disables transitions and movement.

## 7. Depth & Surface

The strategy is borders-only.
Flat paper is the default surface, hairlines separate content, dashed rules identify asides and disclosures, and the code panel is the sole filled panel.
No shadows, gradients, texture, imagery, or decorative containers are used.

## 8. Accessibility Constraints & Accepted Debt

### Constraints

- WCAG 2.2 AA target with visible `2px` fairway focus outlines offset by `2px`.
- Every control is keyboard reachable and has a visible label or accessible name.
- Body text remains at least `17.5px`; metadata is supplementary, not the only content signal.
- Main content reflows as one column at `375px` without horizontal overflow.
- Reduced motion is respected.
- Color does not carry meaning without a text label.

### Accepted Debt

| Item                 | Location                             | Why accepted                                                                      | Owner / Exit                                                           |
| -------------------- | ------------------------------------ | --------------------------------------------------------------------------------- | ---------------------------------------------------------------------- |
| Remote GitHub avatar | `src/components/layout/Header.astro` | Preserves the approved source identity image without adding a third asset system. | Replace with a local optimized copy when offline delivery is required. |
