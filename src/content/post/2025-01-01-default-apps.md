---
title: "My default apps of 2024"
description: "A list of my default apps across various categories."
publishDate: "1 Jan 2025"
updatedDate: "1 Jan 2025"
tags: ["apps", "setup"]
draft: false
---

# My Default Apps of 2024

As I move into 2025 with some new or improved processes, I wanted to take a minute and document what I did in 2024. Below is my list of default apps across pretty much every category that exists. I forgot where I originally read about this, but you can search and find other blogs that post a similar list.

| CATEGORY | 2024 | 2023 |
|:--|:--|:--|
| Mail service | [Gmail](https://gmail.com), [Protonmail](https://proton.me/mail) | [Gmail](https://gmail.com), [Protonmail](https://proton.me/mail) |
| Mail client | Apple Mail | Apple Mail |
| Tasks | Apple Reminders | Apple Reminders |
| RSS service | n/a | n/a |
| RSS client | n/a | n/a |
| Launcher | `open -a` | Spotlight |
| Cloud storage | iCloud | iCloud |
| Photo library | Apple Photos | Apple Photos |
| Photo editing | Apple Photos | Apple Photos |
| Web browser | Safari, Chrome (for work) | Safari, Chrome (for work) |
| Calendar | Apple Calendar | Apple Calendar |
| Reading | Kindle, Apple Books | Kindle, Apple Books |
| Weather | Apple Weather | Apple Weather |
| Podcasts | Apple Podcasts | Apple Podcasts |
| Music | Apple Music, YouTube Music, Spotify | Apple Music |
| Clipboard manager | [Pastebot](https://tapbots.com/pastebot/) | [Pastebot](https://tapbots.com/pastebot/) |
| Passwords | [1Password](https://1password.com) | [1Password](https://1password.com) |
| Budgeting | [Copilot](https://copilot.money) | [Mint](https://mint.intuit.com) |
| Transcriptions | n/a | n/a |
| Mastodon | n/a | n/a |
| Movie discovery/tracking | n/a | n/a |
| Social | n/a | n/a |
| Screenshots | macOS | macOS |
| Notes | Apple Notes | Apple Notes |
| Code editor | [Visual Studio Code](https://code.visualstudio.com), [Nevoim](https://neovim.io) | [Visual Studio Code](https://code.visualstudio.com) |
| Terminal | [Wezterm](https://wezfurlong.org/wezterm/index.html) | Apple Terminal |
| Search | [Perplexity](https://www.perplexity.ai) | Google |
| Flight tracking | n/a | n/a |
| Package tracking | Reminders list | Reminders list |
| AI chatbot | [Msty](https://msty.app) | ChatGPT |

In 2023 I made the decision to only use the built-in macOS productivity apps. This saved me a ton of time avoiding the rabbit hole of evaluating new software. On top of that, as part of the last two macOS versions Apple release some really cool new features to their apps. Timeboxing with Calendar and Reminders is world-class now. Nothing else needed.

Let's go over notable changes.

- In the second half of 2024 I started spending more time in my terminal, favoring TUIs over GUIs. Around that time I upgraded my laptop and lost an Automator script I wrote to launch my most used apps at the same time. I called it "Good Morning" and it was the first thing I launched after logging into my machine. Instead of rewriting that in Automator, I decided to write a simple zsh function that uses `open -a` and an array.
- I make music, and this year I decided to subscribe to the major streaming services to be able to listen to my music. Yes, it sounds different. YouTube is the worst, and Apple Lossless is the best.
- I've used emacs (via Spacemacs), Textmate, and tons of other editors in the past. While VS Code has been my main for like 3 years, I've been struggling with the context switch of vim on my remote servers. I started a migration to Neovim this year, and plan to be off of VS Code by 2026.
- With my increased time in the terminal mentioned above, I did invest some time searching for a good emulator. The Apple Terminal is great, but hasn't gotten any love in recent upgrades. Wezterm won out over Ghost and Alacritty (which are also amazing) because of it's built-in multiplexer and easy lua based config.
- I've been spending more time experimenting with AI, going as far as running my own models via ollama in the second half of 2023. To give me a "single-pane", I've been using Msty. My openai and llama chats sit side-by-side.

Happy new year!
