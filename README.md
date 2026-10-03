# Brain Bites

*Think of the answer nobody else thought of.*

A rarity-scored trivia game. Every question has hundreds of right answers; the obvious ones barely score and the forgotten ones pay out. **13 topics, 12 wildcards, ~10,100 curated answers** — plus live Wikipedia lookup for everything else.

No backend, no API keys, no build step. Five static files.

## Run it

Open `index.html` in a browser.

**Daily mix** re-rolls on its own: `daySeed()` hashes the date, so every day deals a different nine questions — the same nine for everyone, with no server involved.

## Deploy (free, public)

**GitHub Pages**
1. New repo → add `index.html`, `data.js`, `packs.js`, `topics.js`, `engine.js`, `README.md`.
2. Settings → Pages → Deploy from a branch → `main` / root → Save.
3. Live at `https://<you>.github.io/<repo>/`.

**Netlify / Vercel / Cloudflare Pages:** drag the folder in, or connect the repo. No framework preset.

> Live Wikipedia lookup needs real network access. It works on any normal web host and when opening the file locally, but **not inside the Claude artifact preview**, whose sandbox blocks outbound requests. There the game falls back to the curated lists and says so on the Scoring screen.

## Structure

| Layer | Where | What it does |
|---|---|---|
| Answer processor | `engine.js` `normalize` `match` | strips accents/punctuation/articles, plurals, 1–2 letter typos, aliases, and partial names (`Tarantino` → Quentin Tarantino) |
| Curated answers | `data.js`, `packs.js`, `topics.js` | 13 topics × 8 questions |
| Live lookup | `engine.js` `liveLookup` | unknown answer → Wikipedia article + category keyword check → accepted |
| Rarity | `engine.js` `blended`, `freqFromViews` | curated: seed % or rank position; live: Wikipedia pageviews (a page nobody reads is worth the most) |
| Scoring | `TIERS` | Top of mind 1 · Well known 3 · Deep cut 6 · Rare find 10 · Nobody else 15 |
| Run | `topicRun`, `dailyRun`, `unlimitedRun` (Infinite Jest) | 8–12 questions, 2 answers each, 30s per question |
| Variants | `engine.js` `variant` | every question is re-cut per run: plain, letter-constrained, two-words-or-more, or rare-only |
| Wildcards | `topics.js` `WILDCARDS` | 12 cross-topic questions used by Unlimited and the daily |
| Scorecard | `engine.js` `RANKS` | score against the run's theoretical max, with a title drawn fresh each time |
| Routing | `go()` + `popstate` | every screen is a history entry, so browser/phone back works |

## Two answer formats

Add answers in whichever is less work.

**Ranked** (new topics) — order is the only decision. Position becomes a frequency, spread log-uniformly from 38% down to 0.1%:
```js
{ id: "fruits", q: "Name a fruit.", wiki: ["fruit", "berry"],
  pool: "Apple, Banana, Mango, Lychee, Rambutan, Soursop, Medlar" }
```
Aliases with `|`, an explicit frequency with `=`: `Aubergine|eggplant=4`.

**Explicit** (original three packs) — `items: [["apple", 40, ["apples"]], ...]`.

## Add a topic

Add an entry to `EXTRA_TOPICS` in `topics.js` with a label, emoji and 8 questions. It appears on the home screen automatically; `engine.js` has no topic-specific code.

## Roadmap

1. **Shared rarity** — swap the localStorage counts for a free backend (Supabase / Firebase / Cloudflare KV). `record()` and `blended()` are the only functions to change.
2. **Harvest the long tail** — every live-verified answer is stored under `found` and every unverifiable one under `unknown` (both exportable from *My data*). Those two lists are the input to a Wikidata → classify → review pipeline that grows the curated pools.
3. Friends leaderboard, archive of past dailies, streaks.
4. More variant types — timed sudden-death, "no answer over 2%", category-blind rounds.

Seed frequencies are editorial estimates, not measurements — the blending is built so real play data gradually overrides them.
