// ============================================================
//  BRAIN BITES — game engine
//
//  Run       : 9 questions from one topic, 2 answers each
//  Processor : normalize → match curated pool → fall back to live Wikipedia
//  Rarity    : seed frequency (or rank) blended with local play counts;
//              answers found live are priced by Wikipedia pageviews
// ============================================================
(function () {
  "use strict";

  const QUESTIONS_PER_RUN = 9;
  const UNLIMITED_MIN = 10, UNLIMITED_MAX = 12;
  const ANSWERS_PER_QUESTION = 2;
  const QUESTION_SECONDS = 30;
  const TIERS = [
    { id: "common",   label: "Top of mind", min: 15,  pts: 1,  emoji: "🟢" },
    { id: "familiar", label: "Well known",  min: 5,   pts: 3,  emoji: "🟡" },
    { id: "uncommon", label: "Deep cut",    min: 1.5, pts: 6,  emoji: "🟠" },
    { id: "rare",     label: "Rare find",   min: 0.3, pts: 10, emoji: "🔴" },
    { id: "offmenu",  label: "Nobody else", min: -1,  pts: 15, emoji: "⚫" }
  ];
  const SEED_WEIGHT = 20;

  // Scorecard bands, scored against the theoretical maximum for the run.
  // A title and a line are drawn fresh every time, so two identical scores
  // rarely read the same.
  const RANKS = [
    { min: .78, titles: ["Certified Menace", "Walking Encyclopaedia", "Insufferable At Parties", "Pub Quiz Villain", "Suspiciously Well-Read", "Please Leave Some For Others", "Human Search Engine"],
      lines: ["You have ruined this for everyone else.", "Nobody wants you on their team. Everybody needs you on their team.", "This is a cry for help disguised as general knowledge.", "Somewhere, a quizmaster just felt a chill.", "Touch grass. Beautifully informed grass, but still."] },
    { min: .62, titles: ["Annoyingly Competent", "Reads The Museum Plaques", "Deep Shelf Energy", "Quiz Night Ringer", "Dangerously Well-Read", "Knows Things, Says Things"],
      lines: ["You clearly do not have a normal relationship with trivia.", "One more run and you'd be unbearable.", "The obscure answers came out a little too easily there.", "You've definitely won a pub quiz and brought it up since."] },
    { min: .46, titles: ["Comfortably Above Average", "Solid Middle Shelf", "Knows Enough To Bluff", "Respectable, Unremarkable", "The Reliable One", "Second Pick, Still Picked"],
      lines: ["A genuinely respectable showing that nobody will remember.", "You know a lot about a medium amount.", "The safe answers served you well. The brave ones would serve you better.", "Perfectly good. Deeply ordinary."] },
    { min: .32, titles: ["The Human Median", "Enthusiastic, Underprepared", "Warming Up", "Front Of The Shelf Only", "Confidently Mid"],
      lines: ["You named the things everyone names.", "The first answer that came to mind was, in fact, everyone's first answer.", "Solid instincts, shallow pockets.", "Try the weird one next time. The weird one pays."] },
    { min: .18, titles: ["Mostly Vibes", "Guessing With Conviction", "Needs More Vocabulary", "Nodded Through School", "Brave, Not Correct"],
      lines: ["Confidence: high. Accuracy: negotiable.", "You and the answer sheet are not currently on speaking terms.", "Read a weird book. Any weird book.", "Points awarded for sheer optimism."] },
    { min: -1, titles: ["Points For Showing Up", "Keyboard Upside Down?", "Did You Read The Question?", "Technically Participated", "Beautiful Disaster"],
      lines: ["Everyone starts somewhere. You started further back than most.", "The good news is there is nowhere to go but up.", "We're going to pretend that was a practice round.", "Honestly? Impressive in its own way."] }
  ];
  function rankFor(pct) {
    const band = RANKS.find(r => pct >= r.min) || RANKS[RANKS.length - 1];
    return { title: band.titles[Math.floor(Math.random() * band.titles.length)], line: band.lines[Math.floor(Math.random() * band.lines.length)] };
  }

  // ---------- storage ----------
  const KEY = "brainbites.v2";
  function load() { try { return JSON.parse(localStorage.getItem(KEY)) || {}; } catch (e) { return {}; } }
  function save() { try { localStorage.setItem(KEY, JSON.stringify(state)); } catch (e) {} }
  const state = Object.assign({ best: {}, stats: {}, unknown: [], relaxed: false, daily: {}, found: {} }, load());

  // ---------- answer processor ----------
  function normalize(raw) {
    let s = (raw || "").toString().normalize("NFD").replace(/[\u0300-\u036f]/g, "");
    s = s.toLowerCase().replace(/&/g, " and ")
         .replace(/\+\+/g, " plus plus ").replace(/\+/g, " plus ").replace(/#/g, " sharp ")
         .replace(/[^a-z0-9\s]/g, " ").replace(/\s+/g, " ").trim();
    return s.replace(/^(a|an|the|some) /, "");
  }
  function singular(s) {
    if (s.endsWith("ies") && s.length > 4) return s.slice(0, -3) + "y";
    if (s.endsWith("oes") && s.length > 4) return s.slice(0, -2);
    if (/(ches|shes|sses|xes)$/.test(s)) return s.slice(0, -2);
    if (s.endsWith("s") && !s.endsWith("ss") && s.length > 3) return s.slice(0, -1);
    return s;
  }
  function lev(a, b) {
    if (Math.abs(a.length - b.length) > 2) return 99;
    const m = a.length, n = b.length, d = [];
    for (let i = 0; i <= m; i++) d[i] = [i];
    for (let j = 1; j <= n; j++) d[0][j] = j;
    for (let i = 1; i <= m; i++) for (let j = 1; j <= n; j++)
      d[i][j] = Math.min(d[i-1][j] + 1, d[i][j-1] + 1, d[i-1][j-1] + (a[i-1] === b[j-1] ? 0 : 1));
    return d[m][n];
  }

  // Ranked pools: position becomes a frequency, log-uniform from 38% to 0.095%.
  function rankFreq(i, n) { return n < 2 ? 20 : 38 * Math.exp(Math.log(0.0025) * (i / (n - 1))); }

  function parsePool(str) {
    const parts = str.split(",").map(s => s.trim()).filter(Boolean);
    return parts.map((p, i) => {
      let freq = null;
      const eq = p.indexOf("=");
      if (eq > -1) { freq = parseFloat(p.slice(eq + 1)); p = p.slice(0, eq).trim(); }
      const names = p.split("|").map(s => s.trim());
      return { name: names[0], aliases: names.slice(1), freq: freq, _i: i, _n: parts.length };
    }).map(r => ({ name: r.name, aliases: r.aliases, freq: r.freq == null ? rankFreq(r._i, r._n) : r.freq }));
  }

  const poolCache = {};
  function indexOf(rows) {
    const index = new Map();
    rows.forEach(r => { index.set(normalize(r.name), r); (r.aliases || []).forEach(a => index.set(normalize(a), r)); });
    return index;
  }
  function clearPool(key) { Object.keys(poolCache).forEach(k => { if (k === key || k.indexOf(key + "|") === 0) delete poolCache[k]; }); }
  function poolFor(q) {
    if (!q.filter) return rawPool(q);
    const ck = q.key + "|" + q.filter.sig;
    if (poolCache[ck]) return poolCache[ck];
    const rows = rawPool(q).rows.filter(q.filter.test);
    return (poolCache[ck] = { rows: rows, index: indexOf(rows) });
  }
  function rawPool(q) {
    if (poolCache[q.key]) return poolCache[q.key];
    let rows = q.items
      ? q.items.map(it => ({ name: it[0], freq: it[1], aliases: it[2] || [] }))
      : parsePool(q.pool);
    const byName = new Map();
    rows.forEach(r => { const k = normalize(r.name); const p = byName.get(k); if (!p || p.freq < r.freq) byName.set(k, r); });
    rows = [...byName.values()];
    (state.found[q.key] || []).forEach(f => {
      if (!rows.some(r => normalize(r.name) === normalize(f.name))) rows.push({ name: f.name, freq: f.freq, aliases: [], live: true });
    });
    return (poolCache[q.key] = { rows: rows, index: indexOf(rows) });
  }

  function match(pool, raw) {
    const n = normalize(raw);
    if (!n) return null;
    for (const c of [n, singular(n), n.replace(/ /g, ""), n + "s"]) if (pool.index.has(c)) return pool.index.get(c);
    // A distinctive single word standing in for a full name: "Tarantino",
    // "Ramanujan", "Everest". Only when exactly one entry contains it.
    if (n.length >= 4 && n.indexOf(" ") === -1) {
      let only = null, count = 0;
      for (const [k, r] of pool.index) {
        if (k.indexOf(" ") === -1) continue;
        if (k.split(" ").indexOf(n) === -1) continue;
        if (only !== r) { count++; only = r; }
        if (count > 1) break;
      }
      if (count === 1) return only;
    }
    if (n.length >= 5) {
      const tol = n.length >= 9 ? 2 : 1;
      let best = null, bestD = 99;
      for (const [k, r] of pool.index) { if (k[0] !== n[0]) continue; const d = lev(n, k); if (d < bestD) { bestD = d; best = r; } }
      if (bestD <= tol) return best;
    }
    return null;
  }

  // ---------- live lookup (Wikipedia) ----------
  // Works wherever the page can reach the network. Inside the Claude artifact
  // sandbox outbound requests are blocked, so this degrades to the curated pool.
  let liveState = "unknown"; // unknown | on | off
  function timeoutFetch(url, ms) {
    const ctl = typeof AbortController !== "undefined" ? new AbortController() : null;
    const t = setTimeout(() => ctl && ctl.abort(), ms || 7000);
    return fetch(url, ctl ? { signal: ctl.signal } : undefined).finally(() => clearTimeout(t));
  }
  function freqFromViews(v) {
    if (v == null) return 0.4;
    return Math.max(0.05, Math.min(40, 40 * Math.pow(v / 800000, 0.5)));
  }
  async function pageviews(title) {
    try {
      const end = new Date(), start = new Date(Date.now() - 365 * 864e5);
      const fmt = d => d.getFullYear() + String(d.getMonth() + 1).padStart(2, "0") + String(d.getDate()).padStart(2, "0");
      const url = "https://wikimedia.org/api/rest_v1/metrics/pageviews/per-article/en.wikipedia/all-access/user/"
        + encodeURIComponent(title.replace(/ /g, "_")) + "/monthly/" + fmt(start) + "/" + fmt(end);
      const r = await timeoutFetch(url, 6000);
      if (!r.ok) return null;
      const j = await r.json();
      if (!j.items || !j.items.length) return null;
      return j.items.reduce((a, i) => a + i.views, 0) / j.items.length;
    } catch (e) { return null; }
  }
  async function liveLookup(raw, question) {
    if (liveState === "off" || !question.wiki) return { ok: false, reason: "offline" };
    try {
      const url = "https://en.wikipedia.org/w/api.php?action=query&format=json&origin=*&redirects=1"
        + "&prop=extracts|categories&exintro=1&explaintext=1&cllimit=60&titles=" + encodeURIComponent(raw.trim());
      const r = await timeoutFetch(url, 7000);
      const j = await r.json();
      liveState = "on";
      const page = Object.values(j.query.pages)[0];
      if (!page || page.missing !== undefined) return { ok: false, reason: "missing" };
      const hay = ((page.extract || "") + " " + (page.categories || []).map(c => c.title).join(" ")).toLowerCase();
      const kws = question.wiki;
      if (kws.length && !kws.some(k => hay.includes(k))) return { ok: false, reason: "offtopic", title: page.title };
      const views = await pageviews(page.title);
      return { ok: true, name: page.title, freq: freqFromViews(views), views: views };
    } catch (e) {
      if (liveState === "unknown") liveState = "off";
      return { ok: false, reason: "offline" };
    }
  }

  // ---------- rarity ----------
  function blended(qKey, item) {
    const st = state.stats[qKey];
    if (!st || !st.total) return item.freq;
    const local = (st.counts[item.name] || 0) / st.total * 100;
    return (item.freq * SEED_WEIGHT + local * st.total) / (SEED_WEIGHT + st.total);
  }
  function tierFor(f) { return TIERS.find(t => f >= t.min) || TIERS[TIERS.length - 1]; }
  function record(qKey, name) {
    const st = state.stats[qKey] = state.stats[qKey] || { total: 0, counts: {} };
    st.total++; st.counts[name] = (st.counts[name] || 0) + 1;
  }

  // ---------- run construction ----------
  function mulberry32(a) { return function () { a |= 0; a = a + 0x6D2B79F5 | 0; let t = Math.imul(a ^ a >>> 15, 1 | a); t = t + Math.imul(t ^ t >>> 7, 61 | t) ^ t; return ((t ^ t >>> 14) >>> 0) / 4294967296; }; }
  function shuffle(arr, rng) { const a = arr.slice(); for (let i = a.length - 1; i > 0; i--) { const j = Math.floor(rng() * (i + 1)); [a[i], a[j]] = [a[j], a[i]]; } return a; }
  function todayKey() { const d = new Date(); return d.getFullYear() + "-" + String(d.getMonth() + 1).padStart(2, "0") + "-" + String(d.getDate()).padStart(2, "0"); }
  function daySeed() { return [...todayKey()].reduce((a, c) => a * 31 + c.charCodeAt(0) | 0, 7); }
  function qKeyed(topicId, q) { return Object.assign({}, q, { key: topicId + ":" + q.id, topic: topicId }); }

  // Each question is re-cut every run, so the same topic never asks the same
  // eight things twice: a plain ask, a letter constraint, a two-word
  // constraint, or a hunt that bans anything common.
  function variant(base, rng) {
    const rows = rawPool(base).rows;
    const stem = base.q.replace(/\.$/, "");
    const cut = (text, hint, sig, test) => Object.assign({}, base, { q: text, hint: hint, filter: { sig: sig, test: test } });
    const roll = rng();
    if (roll >= 0.42 && roll < 0.74) {
      const counts = {};
      rows.forEach(r => { const c = r.name[0].toUpperCase(); if (c >= "A" && c <= "Z") counts[c] = (counts[c] || 0) + 1; });
      const letters = Object.keys(counts).filter(c => counts[c] >= 10);
      if (letters.length) {
        const L = letters[Math.floor(rng() * letters.length)];
        return cut(stem + " starting with " + L + ".", "Only answers beginning with " + L + " count.", "L" + L, r => r.name[0].toUpperCase() === L);
      }
    }
    if (roll >= 0.74 && roll < 0.87 && rows.filter(r => r.name.indexOf(" ") > -1).length >= 10)
      return cut(stem + " — two words or more.", "Single words won't be accepted here.", "MW", r => r.name.indexOf(" ") > -1);
    if (roll >= 0.87 && rows.filter(r => r.freq < 5).length >= 12)
      return cut(stem + " that most people would miss.", "Anything common gets turned away at the door.", "RARE", r => r.freq < 5);
    return Object.assign({}, base);
  }
  function allQuestions() {
    const out = [];
    TOPIC_IDS.forEach(t => TOPICS[t].questions.forEach(q => out.push(qKeyed(t, q))));
    WILDCARDS.forEach(w => out.push(Object.assign({}, w, { key: "wild:" + w.id, topic: null })));
    return out;
  }

  function freshRng() { return mulberry32(Date.now() ^ Math.floor(Math.random() * 1e9)); }
  function topicRun(topicId) {
    const t = TOPICS[topicId], rng = freshRng();
    const qs = shuffle(t.questions, rng).slice(0, QUESTIONS_PER_RUN).map(q => variant(qKeyed(topicId, q), rng));
    return { mode: "topic", topicId: topicId, title: t.label, questions: qs, current: 0, results: [] };
  }
  function dailyRun() {
    const rng = mulberry32(daySeed());
    const picks = [], topics = shuffle(TOPIC_IDS, rng);
    for (let i = 0; i < QUESTIONS_PER_RUN - 1; i++) {
      const t = TOPICS[topics[i % topics.length]];
      picks.push(variant(qKeyed(topics[i % topics.length], t.questions[Math.floor(rng() * t.questions.length)]), rng));
    }
    const w = WILDCARDS[Math.floor(rng() * WILDCARDS.length)];
    picks.push(variant(Object.assign({}, w, { key: "wild:" + w.id, topic: null }), rng));
    return { mode: "daily", title: "Today's bites", questions: shuffle(picks, rng), current: 0, results: [] };
  }
  function unlimitedRun() {
    const rng = freshRng();
    const n = UNLIMITED_MIN + Math.floor(rng() * (UNLIMITED_MAX - UNLIMITED_MIN + 1));
    const pool = allQuestions(), wilds = pool.filter(q => !q.topic), rest = pool.filter(q => q.topic);
    const picks = shuffle(wilds, rng).slice(0, Math.max(3, Math.round(n * 0.3)))
      .concat(shuffle(rest, rng).slice(0, n));
    return { mode: "unlimited", title: "Infinite Jest", questions: shuffle(picks, rng).slice(0, n).map(q => variant(q, rng)), current: 0, results: [] };
  }

  // ---------- tiny DOM helper ----------
  const $ = s => document.querySelector(s);
  function h(tag, attrs) {
    const el = document.createElement(tag);
    for (const k in attrs || {}) {
      if (k === "class") el.className = attrs[k];
      else if (k === "html") el.innerHTML = attrs[k];
      else if (k.startsWith("on")) el.addEventListener(k.slice(2), attrs[k]);
      else if (attrs[k] != null) el.setAttribute(k, attrs[k]);
    }
    for (let i = 2; i < arguments.length; i++) {
      const kids = Array.isArray(arguments[i]) ? arguments[i] : [arguments[i]];
      kids.forEach(c => { if (c == null || c === false) return; el.appendChild(typeof c === "string" || typeof c === "number" ? document.createTextNode(String(c)) : c); });
    }
    return el;
  }

  // ---------- routing ----------
  // Every screen is a history entry, so the browser/phone back button
  // walks back through the game instead of leaving it.
  let run = null, timerId = null, view = "home";
  function go(name, replace) {
    view = name;
    const st = { v: name };
    if (replace) history.replaceState(st, ""); else history.pushState(st, "");
    paint();
  }
  window.addEventListener("popstate", e => { view = (e.state && e.state.v) || "home"; if (view === "home") { stopTimer(); run = null; } paint(); });

  function paint() {
    stopTimer();
    const el = view === "run" && run ? questionView()
      : view === "summary" && run ? summaryView()
      : view === "how" ? howView()
      : view === "data" ? dataView()
      : homeView();
    $("#app").replaceChildren(el);
    window.scrollTo(0, 0);
    if (view === "run") { const i = $("#answer"); if (i) i.focus(); if (!state.relaxed) startTimer(); }
  }

  // ---------- home ----------
  function homeView() {
    const daily = state.daily[todayKey()];
    const tiles = TOPIC_IDS.map(id => {
      const t = TOPICS[id];
      return h("button", { class: "tile", onclick: () => { run = topicRun(id); go("run"); } },
        h("span", { class: "tile-emoji" }, t.emoji),
        h("span", { class: "tile-label" }, t.label));
    });
    return h("section", { class: "home" },
      h("header", { class: "hero" },
        h("h1", { class: "brand" }, "Brain", h("span", {}, "Bites")),
        h("p", { class: "hook" }, "Think of the answer nobody else thought of."),
        h("p", { class: "lede" }, "Nine questions. Two answers each. Everyone knows a right answer — the points go to whoever finds the one the rest of us forgot.")),
      h("button", { class: "daily", onclick: () => { run = dailyRun(); go("run"); } },
        h("span", { class: "daily-tag" }, "Daily mix"),
        h("span", { class: "daily-title" }, "Today's bites"),
        h("span", { class: "daily-go" }, "▶")),
      h("button", { class: "unlimited", onclick: () => { run = unlimitedRun(); go("run"); } },
        h("span", { class: "daily-tag" }, "Unlimited"),
        h("span", { class: "daily-title" }, "Infinite Jest"),
        h("span", { class: "daily-go" }, "∞")),
      h("h2", {}, "Pick a topic"),
      h("div", { class: "tiles" }, tiles),
      h("div", { class: "foot" },
        h("label", { class: "toggle" },
          h("input", { type: "checkbox", checked: state.relaxed ? "checked" : null, onchange: e => { state.relaxed = e.target.checked; save(); } }),
          h("span", {}, "No timer")),
        h("button", { class: "btn link", onclick: () => go("how") }, "Scoring"),
        h("button", { class: "btn link", onclick: () => go("data") }, "My data")));
  }

  // ---------- question ----------
  function startTimer() {
    run.left = QUESTION_SECONDS;
    paintTimer();
    timerId = setInterval(() => {
      run.left--; paintTimer();
      if (run.left <= 0) finishQuestion();
    }, 1000);
  }
  function stopTimer() { if (timerId) clearInterval(timerId); timerId = null; }
  function paintTimer() {
    const ring = $("#ring"), lbl = $("#tleft");
    if (!ring) return;
    const frac = Math.max(0, run.left / QUESTION_SECONDS);
    ring.style.setProperty("--frac", frac);
    ring.classList.toggle("low", run.left <= 5);
    if (lbl) lbl.textContent = run.left;
  }

  function questionView() {
    const q = run.questions[run.current];
    run.given = run.given || [];
    const dots = run.questions.map((_, i) =>
      h("span", { class: "dot" + (i < run.current ? " done" : i === run.current ? " now" : "") }));
    return h("section", { class: "play" },
      h("div", { class: "topbar" },
        h("button", { class: "btn link", onclick: () => history.back() }, "← Leave"),
        h("div", { class: "dots" }, dots),
        state.relaxed ? h("span", { class: "muted" }, run.current + 1 + "/" + run.questions.length)
          : h("span", { id: "ring", class: "ring" }, h("span", { id: "tleft" }, String(QUESTION_SECONDS)))),
      h("div", { class: "qcard" },
        h("span", { class: "qtopic" }, q.topic ? TOPICS[q.topic].emoji + " " + TOPICS[q.topic].label : "✨ Wildcard"),
        h("h1", { class: "qtext" }, q.q),
        h("p", { class: "qhint" }, q.hint || "")),
      h("form", { class: "answer-form", onsubmit: onSubmit },
        h("input", { id: "answer", type: "text", autocomplete: "off", autocapitalize: "off", autocorrect: "off", spellcheck: "false", placeholder: "Your answer", "aria-label": "Your answer" }),
        h("button", { class: "btn primary", type: "submit" }, "Go")),
      h("p", { id: "note", class: "note", "aria-live": "polite" }),
      h("ol", { id: "slots", class: "slots" },
        [0, 1].map(i => h("li", { class: "slot empty", id: "slot" + i },
          h("span", { class: "slot-n" }, "Answer " + (i + 1)),
          h("span", { class: "slot-body" }, "—")))),
      run.given.length ? null : h("p", { class: "runscore" }, "Run total: ", h("b", {}, String(runTotal())), " pts"));
  }
  function runTotal() { return run.results.reduce((a, r) => a + r.score, 0); }

  function fillSlot(i, data) {
    const el = $("#slot" + i);
    if (!el) return;
    el.className = "slot " + data.tier.id;
    el.replaceChildren(
      h("span", { class: "slot-n" }, data.tier.emoji),
      h("span", { class: "slot-body" },
        h("b", {}, data.name),
        h("small", {}, data.tier.label + " · " + fmtFreq(data.freq) + (data.live ? " · found on Wikipedia" : ""))),
      h("span", { class: "slot-pts" }, "+" + data.tier.pts));
  }
  function pendingSlot(i, text) {
    const el = $("#slot" + i);
    if (!el) return;
    el.className = "slot pending";
    el.replaceChildren(h("span", { class: "slot-n" }, "…"), h("span", { class: "slot-body" }, h("b", {}, text), h("small", {}, "checking Wikipedia")));
  }
  function fmtFreq(f) { return f >= 10 ? Math.round(f) + "% say this" : f >= 1 ? f.toFixed(1) + "% say this" : f >= 0.1 ? f.toFixed(1) + "%" : "under 0.1%"; }

  async function onSubmit(e) {
    e.preventDefault();
    const input = $("#answer"), raw = input.value.trim();
    input.value = "";
    const note = $("#note");
    if (!raw || run.given.length >= ANSWERS_PER_QUESTION) return;
    const q = run.questions[run.current];
    const pool = poolFor(q);
    const n = normalize(raw);
    if (run.given.some(g => normalize(g.name) === n)) { note.textContent = "Already said."; return; }

    const hit = match(pool, raw);
    if (!hit && q.filter) {
      const inBase = match(rawPool(q), raw);
      if (inBase) { note.textContent = "“" + inBase.name + "” is right, but doesn't fit this round's rule."; return; }
    }
    if (hit) {
      if (run.given.some(g => g.name === hit.name)) { note.textContent = "Already said."; return; }
      accept(q, { name: hit.name, freq: blended(q.key, hit), live: !!hit.live });
      return;
    }
    // Not in the curated pool — ask Wikipedia.
    const slot = run.given.length;
    const placeholder = { name: raw, pending: true };
    run.given.push(placeholder);
    pendingSlot(slot, raw);
    note.textContent = "";
    const res = await liveLookup(raw, q);
    const at = run.given.indexOf(placeholder);
    if (at > -1) run.given.splice(at, 1);
    if (res.ok) {
      if (run.given.some(g => normalize(g.name) === normalize(res.name))) { clearSlot(slot); note.textContent = "Already said."; return; }
      if (q.filter && !q.filter.test({ name: res.name, freq: res.freq })) {
        clearSlot(slot);
        note.textContent = "“" + res.name + "” checks out, but doesn't fit this round's rule.";
        return;
      }
      (state.found[q.key] = state.found[q.key] || []).push({ name: res.name, freq: res.freq });
      clearPool(q.key);
      accept(q, { name: res.name, freq: res.freq, live: true }, slot);
    } else {
      clearSlot(slot);
      note.textContent = res.reason === "offtopic" ? "“" + (res.title || raw) + "” exists, but doesn't fit this question."
        : res.reason === "missing" ? "No match for “" + raw + "”."
        : liveState === "off" ? "“" + raw + "” isn't in the list, and live lookup isn't available here."
        : "“" + raw + "” isn't in the list yet — noted for review.";
      if (!state.unknown.some(u => u.key === q.key && u.answer === n)) { state.unknown.push({ key: q.key, answer: n, when: todayKey() }); save(); }
    }
  }
  function clearSlot(i) {
    const el = $("#slot" + i);
    if (el) { el.className = "slot empty"; el.replaceChildren(h("span", { class: "slot-n" }, "Answer " + (i + 1)), h("span", { class: "slot-body" }, "—")); }
  }

  function accept(q, data, forceSlot) {
    const tier = tierFor(data.freq);
    const entry = { name: data.name, freq: data.freq, tier: tier, live: data.live };
    const i = forceSlot != null ? forceSlot : run.given.length;
    run.given.push(entry);
    record(q.key, data.name);
    save();
    fillSlot(i, entry);
    if (run.given.filter(g => !g.pending).length >= ANSWERS_PER_QUESTION) setTimeout(finishQuestion, 900);
  }

  function finishQuestion() {
    stopTimer();
    const q = run.questions[run.current];
    const given = (run.given || []).filter(g => !g.pending);
    run.results.push({ q: q, answers: given, score: given.reduce((a, g) => a + g.tier.pts, 0) });
    run.given = [];
    if (run.current + 1 < run.questions.length) { run.current++; paint(); }
    else {
      const total = runTotal();
      if (run.mode === "topic") state.best[run.topicId] = Math.max(state.best[run.topicId] || 0, total);
      else state.daily[todayKey()] = { score: total, emoji: run.results.map(bestEmoji).join("") };
      save();
      go("summary", true);
    }
  }
  function bestEmoji(r) { return r.answers.length ? TIERS[Math.max.apply(null, r.answers.map(a => TIERS.indexOf(a.tier)))].emoji : "⬜"; }

  // ---------- summary ----------
  function summaryView() {
    const total = runTotal();
    const strip = run.results.map(bestEmoji).join("");
    const all = run.results.reduce((a, r) => a.concat(r.answers), []);
    const best = all.length ? all.reduce((a, b) => b.tier.pts > a.tier.pts ? b : a) : null;
    const share = "Brain Bites · " + run.title + (run.mode === "daily" ? " " + todayKey() : "") + "\n" + total + " pts  " + strip + "\n" + location.href.split("?")[0];
    const max = run.questions.length * ANSWERS_PER_QUESTION * TIERS[TIERS.length - 1].pts;
    const pct = max ? total / max : 0;
    const rank = rankFor(pct);
    return h("section", { class: "summary" },
      h("p", { class: "muted" }, run.title),
      h("div", { class: "card" },
        h("p", { class: "card-tag" }, "Scorecard"),
        h("h1", { class: "card-rank" }, rank.title),
        h("p", { class: "card-line" }, rank.line),
        h("div", { class: "meter" }, h("span", { class: "meter-fill", style: "width:" + Math.max(2, Math.round(pct * 100)) + "%" })),
        h("p", { class: "card-nums" },
          h("b", {}, String(total)), " of ", String(max), " possible · ", h("b", {}, Math.round(pct * 100) + "%"))),
      h("h1", { class: "bigscore" }, String(total), h("small", {}, " pts")),
      h("p", { class: "strip" }, strip),
      best ? h("p", { class: "callout" }, best.tier.pts >= 10
        ? "“" + best.name + "” — almost nobody reaches for that one."
        : best.tier.pts >= 6 ? "“" + best.name + "” was your furthest reach." : "Everything you named was top of mind. Go stranger next time.") : null,
      h("div", { class: "breakdown" }, run.results.map(r => h("details", {},
        h("summary", {}, h("span", {}, r.q.q), h("b", {}, r.score + " " + bestEmoji(r))),
        r.answers.length ? h("ol", { class: "slots mini" }, r.answers.map(a =>
          h("li", { class: "slot " + a.tier.id },
            h("span", { class: "slot-n" }, a.tier.emoji),
            h("span", { class: "slot-body" }, h("b", {}, a.name), h("small", {}, a.tier.label + " · " + fmtFreq(a.freq))),
            h("span", { class: "slot-pts" }, "+" + a.tier.pts))))
          : h("p", { class: "muted" }, "No answer in time.")))),
      h("div", { class: "actions" },
        h("button", { class: "btn primary", onclick: () => { const m = run.mode, t = run.topicId; run = m === "daily" ? dailyRun() : topicRun(t); go("run", true); } }, "Play again"),
        h("button", { class: "btn", onclick: () => { navigator.clipboard && navigator.clipboard.writeText(share).then(() => { $("#copied").textContent = "Copied"; }); } }, "Copy result"),
        h("button", { class: "btn", onclick: () => { run = null; go("home", true); } }, "Topics")),
      h("span", { id: "copied", class: "muted" }, ""));
  }

  // ---------- info screens ----------
  function howView() {
    return h("section", { class: "prose" },
      h("button", { class: "btn link", onclick: () => history.back() }, "← Back"),
      h("h1", {}, "How scoring works"),
      h("p", {}, "A run is nine questions. Each one takes two answers, and every answer is priced by how many people would give it."),
      h("ol", { class: "slots" }, TIERS.map(t => h("li", { class: "slot " + t.id },
        h("span", { class: "slot-n" }, t.emoji),
        h("span", { class: "slot-body" }, h("b", {}, t.label), h("small", {}, t.min > 0 ? t.min + "% or more of players say it" : "under " + TIERS[3].min + "% say it")),
        h("span", { class: "slot-pts" }, "+" + t.pts)))),
      h("h2", {}, "Where answers come from"),
      h("p", {}, "Each question starts from a curated list, ordered from the obvious to the obscure. Anything not on that list is checked against Wikipedia live: if the article exists and matches the question, the answer counts, and its rarity comes from how often that article is actually read. A page nobody visits is worth the most."),
      h("p", { class: liveState === "off" ? "warn" : "muted" }, liveState === "off"
        ? "Live lookup is blocked in this preview, so only the curated lists are active right now. It works once the game is deployed to a normal web host."
        : "Live lookup runs the first time you give an answer that isn't on a list."),
      h("h2", {}, "Rarity moves"),
      h("p", {}, "Every answer given is counted and blended back into its price, so an answer that stops being surprising stops paying out. Those counts are kept in this browser until a shared backend is wired in."));
  }
  function dataView() {
    const blob = JSON.stringify({ best: state.best, stats: state.stats, found: state.found, unknown: state.unknown }, null, 2);
    return h("section", { class: "prose" },
      h("button", { class: "btn link", onclick: () => history.back() }, "← Back"),
      h("h1", {}, "My data"),
      h("p", {}, "Stored in this browser only. “unknown” holds answers nothing could verify — the raw material for growing the lists. “found” holds answers Wikipedia confirmed, which are now part of your pools."),
      h("textarea", { readonly: "readonly", rows: 14 }, blob),
      h("div", { class: "actions" },
        h("button", { class: "btn", onclick: () => navigator.clipboard && navigator.clipboard.writeText(blob) }, "Copy JSON"),
        h("button", { class: "btn", onclick: () => { localStorage.removeItem(KEY); location.reload(); } }, "Reset everything")));
  }

  document.addEventListener("DOMContentLoaded", () => go("home", true));
})();
