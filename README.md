# netPlus

A study and quiz app for **CompTIA Network+ N10-009**, built around
per-question study guides written by David Sepulveda.

Most exam-prep apps tell you which answer was right. This one is built on the
premise that the explanation matters more than the score, so every question
carries a ten-section guide covering why the right answer is right, why each
wrong answer is wrong, the technical background, a plain-English glossary, a
real-world scenario, a metaphor, and a memory hook.

**Status:** v0.3.1 · 50 questions across four banks · Module 1 of 14

---

## Running it

Open `index.html` in a browser. That's the whole thing — no build step, no
server, no dependencies.

`index.html` and `netplus_guides_module1.js` must sit in the same folder. If
the content file is missing the app says so explicitly rather than showing a
blank page.

Serving it over HTTP instead of `file://` is worth doing if you can:

```bash
npm run serve     # then open http://localhost:8000
```

On `file://`, Chrome treats every local HTML file as one shared origin, and
Safari restricts local storage. Neither matters yet — progress is currently
in-memory only — but it will once persistence lands.

---

## What's in here

| Path | What it is |
|---|---|
| `index.html` | The app. Self-contained apart from the content file. |
| `netplus_guides_module1.js` | **Generated.** Parsed guide content, ~520KB. |
| `guides/*.md` | **Ground truth.** Google Docs markdown exports of the study guides. |
| `src/parse_guides.py` | Converts `guides/*.md` into the content file. |
| `test/verify_guides.js` | ~70 assertions on the parsed content. |
| `test/test_app.js` | ~65 functional tests driving the real UI via jsdom. |
| `docs/netplus_bootstrap_v3.md` | Project state, locked decisions, open questions. |

---

## Adding a study guide

1. Export the guide from Google Docs as markdown into `guides/`.
2. Add it to the `FILES` list at the top of `src/parse_guides.py`:
   ```python
   ("1.5", "15", "CompTIA_Network__Module_1_5_Complete_Study_Guide.md"),
   ```
3. Rebuild and test:
   ```bash
   npm run build
   npm test
   ```

The parser reports question counts, missing sections, and unresolved image
references. `npm test` must be green before committing.

### Don't hand-edit the generated file

`netplus_guides_module1.js` is committed because GitHub Pages has no build
step, but it is output. Edits to it are lost on the next `npm run build`.
Fix the source guide or the parser instead.

---

## What the parser handles

Google Docs markdown exports are messier than they look. These were all real
bugs, and the parser exists so they stay fixed:

- **Backslash escaping.** Docs escapes nearly every punctuation mark on export.
  One case survives on purpose: `c:\>` becomes `c:\&gt;`, which is correct.
- **Embedded images.** Equations and arrow glyphs export as base64 PNGs, not
  text. They're preserved as data URIs, deduped by SHA — 44 unique images
  across four guides, replacing 119 insertions. **The maths is never
  transcribed by hand**, since that would inject transcription errors into
  otherwise verbatim content.
- **Image sizing is decided at parse time** from the PNG IHDR chunk. Deciding
  it in the browser via `naturalWidth` silently squashes every wide figure,
  because the image hasn't decoded yet when hydration runs.
- **Ordered lists.** `1.` `2.` `3.` nest alongside `*` bullets. An early build
  swallowed them into the preceding bullet without complaint.
- **ASCII diagrams** are detected by their `+---+` rule lines and wrapped in
  `<pre>`, but still get image and bold processing, because a bold arrow
  sometimes prefixes a diagram on the same line.

### Guide prose is verbatim

The parser converts markup. It never rewords, tightens, or "clarifies" the
study guide text. If content needs to change, it changes in `guides/`.

---

## Question types

All four render, grade, and explain:

| Type | Interaction |
|---|---|
| `single` | One answer |
| `multi` | Select all that apply |
| `match` | Per-row dropdowns — used for the 6×6 OSI layer matching question |
| `order` | Tap a task to fill the next empty slot; tap × to return it |

Wrong placements on `order` and `match` reveal the correct value inline.

---

## The layer spine

Module 1 is built on stacks — the OSI's seven layers and CompTIA's seven
troubleshooting steps. A persistent rail keeps the whole stack on screen and
lights the band the current question sits on, so a layer question is always
read against its neighbours.

- **1.2.9** → OSI layers
- **1.4.11** → the seven troubleshooting steps
- **1.1.8, 1.3.11** → plain bank panel

The fallback is deliberate. Topologies aren't an ordered sequence, and a
geographic-scope rail would light on only two of 1.1.8's ten questions. A rail
that's dark most of the time is decoration pretending to be structure.

Band matching is keyword inference. When it misses it shows nothing; it never
affects grading.

---

## Testing

```bash
npm install     # jsdom, for the functional suite
npm test
```

`verify_guides.js` checks the parsed content: question counts, all ten sections
present, section 2 agreeing with the Quick Reference Answer Key on every
question, balanced markup, image classification, and specific spot checks
against the source documents.

`test_app.js` drives the actual UI in jsdom — clicking options, placing order
chips, setting match dropdowns, checking answers, switching banks and modes,
and asserting on what renders.

Between them these have caught six real bugs across two sessions, including
one that no test could have caught and was found by reasoning about decode
timing instead.

---

## Known gaps

- **Progress is in-memory.** Reloading clears answers, verdicts, and confidence
  marks. This is the main thing standing between the app and daily use.
- **Confidence marks do nothing yet.** The `+ / ? − ! S R W` buttons record but
  don't feed a review queue. They should, once persistence exists.
- **Bank 1.5** (Module Quiz) isn't loaded.
- **The 30-question gap.** Guides total 50; an earlier session recorded Module 1
  at 100 including a 20-question Module Quiz. See `docs/netplus_bootstrap_v3.md`
  §5 — unresolved, and not assumed either way.
- Domain tagging and Professor Messer video links aren't wired in yet.

---

## Licensing and distribution

**Keep this repository private.**

The study guide prose is David Sepulveda's own work. The question stems and
answer options are reproduced from CompTIA CertMaster Learn v9, and publishing
them would republish CompTIA's exam-prep content verbatim. This repo is for
personal study use only and is not licensed for redistribution.

Note that GitHub Pages serves only from public repositories on the free tier.
Hosting this privately requires a paid plan; otherwise run it locally.
