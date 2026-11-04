# Flywheel ledger

Durable record of marketing-claim factchecks for douglasjarquin.com.

**Rejected, fixed, issued, or explicitly out-of-scope targets must not be re-proposed** without new evidence: a product-code change, a corrected primary citation, or an explicit business decision. Recheck dates are reminders to confirm the published copy still matches the product, not permission to reopen a closed verdict.

## Run 2026-11-04 — copy-only factcheck

Branch: `flywheel/factcheck-20261104`. Copy-only on public pages and posts; no URLs, pricing, legal, or behavior changes.

| Target | Kind | Verdict | Recheck | Notes |
| --- | --- | --- | --- | --- |
| Default-apps table “Nevoim” | factcheck | fixed | 2026-12-04 | Product is Neovim; same post already says Neovim in prose and linked neovim.io. |
| Uses font “GitHub Monaspace Argo” | factcheck | fixed | 2026-12-04 | Official family name is Argon (GitHub Next Monaspace). |
| Butt-eval “ChatGPT Luna 6” | factcheck | fixed | 2026-12-04 | Official model name is GPT-6 Luna (OpenAI, 2026-09-22). |
| Default-apps “Ghost” terminal | factcheck | fixed | 2026-12-04 | Comparison set is Ghostty, not a product named Ghost. |
| Uses Clipboard listing Rectangle | factcheck | fixed | 2026-12-04 | Rectangle is a window manager; Buffer stays under Clipboard. |

## Claims reviewed

Priority public claims checked this run (≤40). First-person taste, now-page hobbies, and dated 2024 snapshots were not rewritten unless they named a checkable product wrong.

| Claim | Surface | Verdict | Notes |
| --- | --- | --- | --- |
| Engineer at Zumba | `/about/` | supported | LinkedIn: Director of DevOps @ Zumba. Employer matches; “engineer” left as first-person identity. |
| Living in Davie, Florida | `/about/`, `/now/`, footer | supported | First-party now page (2026-09-07). GitHub profile still says Aventura; not used to override the site. |
| Day job: DevOps | `/now/` | supported | LinkedIn title is Director of DevOps. |
| Building Pinchos and SF2 Themes | `/about/`, `/now/` | supported | Public repos `douglasjarquin/pinchos`, `douglasjarquin/sf2-themes`. |
| pinchos is a declarative macOS menu bar | `/uses/` | supported | Pinchos README: TOML-declared menu-bar items from shell commands. |
| Listening: WWII with Tom Hanks | `/now/` | supported | HISTORY Channel podcast *World War II with Tom Hanks*. |
| Reading: The Human Use of Human Beings | `/now/` | supported | Norbert Wiener, 1950 (HarperCollins / publisher listing). |
| iPhone Air | `/uses/` | supported | Apple product page uses that name. |
| Apple Watch Ultra 3 | `/uses/` | supported | Apple newsroom, 2025-09-09. |
| MacBook Pro 16 | `/uses/` | supported | Apple 16-inch MacBook Pro line exists; ownership is first-party. |
| Salli Saddle | `/uses/` | supported | Salli makes saddle chairs (salli.com). |
| Razer Thunderbolt 4 hub | `/uses/` | supported | Official product is Thunderbolt 4 Dock; Razer marketing also calls it a hub. Left informal. |
| Sony MDR-7506 | `/uses/` | supported | Sony MDR-7506 professional headphones. |
| GitHub Monaspace Argo | `/uses/` | fixed | Corrected to Argon. |
| Buffer is a clipboard manager | `/uses/` | supported | Vendor page: clipboard manager for macOS. |
| Rectangle listed under Clipboard | `/uses/` | fixed | Moved to Window manager. rectangleapp.com: move/resize windows. |
| Automic Vault | `/uses/` | supported | automicvault.com: macOS CLI credential vault. |
| Packages: Homebrew, aube | `/uses/` | supported | aubepkg/aube is a Node.js package manager (jdx). |
| Runtime mise; OrbStack / Docker | `/uses/` | supported | Product names match vendor sites. |
| Chassis dyno measures wheel horsepower on rollers | butt-eval | supported | Chassis dynamometer / rolling road measures power at the drive wheels. |
| MMLU, HumanEval, GSM8K, GPQA | butt-eval | supported | Standard LLM benchmarks (Hendrycks 2020; Chen 2021; Cobbe 2021; Rein 2023). |
| Opus 5.5 as a current model | butt-eval | supported | Anthropic: Claude Opus 5.5, 2026-09-22. Informal “Opus 5.5” left. |
| ChatGPT Luna 6 as a current model | butt-eval | fixed | OpenAI name is GPT-6 Luna, not Luna 6. |
| Jocko Willink is an ex-Navy SEAL, author, and consultant | two-is-one | supported | Retired U.S. Navy SEAL officer; Extreme Ownership; Echelon Front CEO. |
| Ecclesiastes 4:9–10 abridgment | two-is-one | supported | NIV: “Two are better than one… If either of them falls down, one can help the other up.” |
| Default-apps table “Nevoim” | default-apps | fixed | Neovim. Link already pointed at neovim.io. |
| WezTerm has a built-in multiplexer and Lua config | default-apps | supported | wezterm.org multiplexing docs; `.wezterm.lua`. |
| WezTerm won out over Ghost and Alacritty | default-apps | fixed | Ghost → Ghostty (ghostty.org). Alacritty unchanged. |
| Msty as 2024 AI chatbot | default-apps | supported | msty.app exists; 2024 snapshot left as-is. |
| Copilot.money / Mint as 2024/2023 budgeting | default-apps | supported | Historical snapshot of what he used then. |
| Protonmail as 2023–2024 mail | default-apps | supported | Colloquial name for Proton Mail; dated list, not rewritten. |
| Bitcoin $1M by 2030 | `/notes/` | out-of-scope | Prediction, not a present-tense price claim. |
| Header “watching F1” vs Now “Stargate SG-1” | header vs `/now/` | left | Decorative status line vs dated now page. Cannot prove which is current. |
| Maccy / Aerospace abandoned notes | `/uses/` | supported | Real apps; “buggy” / “didn’t work well” are first-person. |
| Site author Douglas Jarquin; URL douglasjarquin.com | site config, live | supported | Matches live origin and GitHub. |
| Social: GitHub, LinkedIn, X | `/about/` | supported | github.com/douglasjarquin; linkedin.com/in/douglasjarquin. |
