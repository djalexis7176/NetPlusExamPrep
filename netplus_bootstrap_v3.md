# netPlus App — Bootstrap v3 (Session Continuation)

**Supersedes `netplus_bootstrap_v2.md` for everything covered here.** v2 still
holds for the manifest, the Messer index, and the Module 1 bank work; keep both.

Written 2026-08-17, session 2 (revised after bank 1.1.8 landed). Read this whole file before doing
anything — several findings contradict what you would reasonably assume.

---

## 0. Read this first — what will trip you up

1. **Everything from v2 §0 still applies.** Screenshots beat text for outlines,
   Messer and CertMaster numbering collide, CompTIA's material contains errors,
   Module Quizzes recycle ~40% of Lesson Review questions, verify everything
   programmatically.
2. **David's study guides are Google Docs markdown exports.** They arrive with
   backslash escaping on every punctuation mark, equations as embedded base64
   PNGs, and ASCII diagrams. There is a working parser — don't hand-convert.
3. **His guides contain question types the banks didn't have** — one matching
   question and one ordering question. Both are now implemented.
4. **There is an unreconciled question count.** See §5. Don't paper over it.
5. **His prose is verbatim. Never paraphrase it, never "improve" it.** This
   was a correction he had to make once already. Markup conversion only.

---

## 1. Where the project actually is

| | |
|---|---|
| Phase | Phase 4 started — working app shell exists |
| App version | **0.3.1** |
| Banks with David's guides | 4 of 5 (1.1.8, 1.2.9, 1.3.11, 1.4.11) |
| Questions live in the app | 50 |
| Question types implemented | single, multi, match, order — all four |
| Persistence | none — in-memory only, D-10 still open |

---

## 2. Files in play

| File | What it is | State |
|---|---|---|
| `netplus_app.html` | App shell, v0.3.0 | working, tested |
| `netplus_guides_module1.js` | Parsed guide content, 427KB | generated, verified |
| `parse_guides.py` | Guide → content converter | **reuse this for every new guide** |
| `verify_guides.js` | Content assertions (~60) | passing |
| `test_app.js` | jsdom functional tests (~60) | passing |
| `netplus_manifest.md` | 622 items, from session 1 | not re-uploaded yet |
| `netplus_bank_module1.js` | Module 1 banks, from session 1 | **not re-uploaded — needed** |
| `netplus_bank_1_1_8.js` | 1.1.8 bank, from session 1 | **not re-uploaded — needed** |
| `netplus_messer_index.js` | 87 Messer videos | not re-uploaded yet |

The app needs both `netplus_app.html` and `netplus_guides_module1.js` in the
same folder. Opening the HTML alone shows a deliberate error state, not a
blank page.

---

## 3. The guide pipeline — how to process the next one

`python3 parse_guides.py` after adding the new file to the `FILES` list. It
handles, and you should not re-solve:

- **Backslash unescaping.** Google Docs escapes `)` `]` `[` `-` `!` `=` `+` `.`
  `#` `>` `<` `_` `~` `&` and more. One legitimate case survives on purpose:
  `c:\>` becomes `c:\&gt;`, which is correct output.
- **Embedded images.** Equations (`2⁷`, `128 + 64 + ... = 205`), the binary
  master grid, and arrow glyphs all export as base64 PNGs. They are preserved
  as deduped data URIs keyed by SHA. **Do not transcribe the maths by hand** —
  that injects your errors into his content.
- **Image sizing must be decided at parse time.** Width comes from the PNG
  IHDR chunk. `naturalWidth` in the browser is 0 at hydration, so classifying
  there silently squishes every 620px figure to inline height. This bug
  shipped once and was caught by reasoning, not by tests.
- **Ordered lists.** `1.` `2.` `3.` nest alongside `*` bullets. An early
  version silently swallowed them into the preceding bullet.
- **ASCII art.** Detected by a `+---+` rule line, wrapped in `<pre>`, and still
  gets image/bold processing because a bold arrow sometimes prefixes a diagram.

### The 10-section format and its field names

Every question has all ten. Field names in the content file:

| § | Section | Field |
|---|---|---|
| 1 | The question and options | `q` |
| 2 | Correct answer | `ca` |
| 3 | Why it's correct | `wc` |
| 4 | Mini lesson: technicals behind the question | `ml` |
| 5 | Analysis of incorrect answers | `wa` |
| 6 | Plain English glossary | `gl` |
| 7 | Real-life scenario example | `rl` |
| 8 | The metaphor example | `mp` |
| 9 | Mnemonics and memorization tricks | `mn` |
| 10 | Student checklist | `ck` |

`wc` and `ml` are separate fields, honouring **D-17** from session 1. Each
guide also carries a `key` (Quick Reference Answer Key), a `summary`
(Section 11 table), and a `checklist` (Module Student Master Checklist).

---

## 4. Decisions locked this session

- **D-18 · David's prose is verbatim.** Markup conversion only. No rewording,
  no tightening, no "clarifying." This supersedes any placeholder EXP content
  for banks where his guide exists.
- **D-19 · Match questions use per-row dropdowns.** 6×6 was the real case;
  dropdowns beat drag for keyboard and touch. Closes an open item from v2.
- **D-20 · Order questions use tap-to-place with a task pool.** Tap a task, it
  fills the next empty slot; tap × to return it. Wrong placements reveal the
  correct value inline on check.
- **D-21 · Images preserved as data URIs, never transcribed.** Dedupe by SHA;
  38 unique images across three guides saved 81 redundant copies.
- **D-22 · Split architecture confirmed (settles D-8).** Content file is 427KB
  for three banks. Inlining does not scale to 14 modules. Shell + content file.
- **D-23 · The layer spine is the app's signature element.** Persistent stack
  down the side, lighting the band the current question sits on. 1.2.9 gets
  OSI, 1.4.11 gets the 7 troubleshooting steps, banks with no single stack get
  a plain panel. Aimed at David's identified miss pattern — assigning things to
  OSI layers by what they *are* rather than what the question says they're
  *doing*.

Still open: **D-10** (score history depth) — now the main blocker, because
progress currently evaporates on reload. **D-9** (what "don't re-upload the
material" means) unchanged.

---

## 5. ⚠ The question count is still short — but narrowed

All four Lesson Review guides are now in hand:

| Bank | Questions in guide |
|---|---|
| 1.1.8 | 10 |
| 1.2.9 | 15 |
| 1.3.11 | 10 |
| 1.4.11 | 15 |
| **Guides total** | **50** |

Session 1 recorded Module 1 at **100 questions across five banks**, with the
1.5 Module Quiz at 20. Guides plus Module Quiz gives **70**, leaving a **30
question gap**. The earlier worry — that 1.1.8 would have to hold an
implausible 40 — is dead; it holds 10.

Two live possibilities, and no basis yet for choosing:
- the banks contain questions the guides don't cover (David wrote guides for a
  subset), or
- the recorded 100 was wrong.

**Do not assume either.** Resolving it needs `netplus_bank_module1.js` and
`netplus_bank_1_1_8.js`. Until then the guides stand as a parallel content
file rather than merged into the banks.

### What did check out

Session 1 recorded the 1.5 Module Quiz as recycling Lesson Review questions
verbatim, naming two specific mappings. Both were confirmed independently
against 1.1.8's guide, which session 1 never saw:

| Claim from session 1 | 1.1.8 guide says | |
|---|---|---|
| 1.5 Q8 dups 1.1.8 Q6, answer "Logical topology" | Q6 *Physical vs. Logical Topologies* → C) Logical topology | ✅ |
| 1.5 Q11 dups 1.1.8 Q9, answer "communicate with all other devices" | Q9 *Redundancy in Full Mesh Topologies* → B) …all other devices | ✅ |

So the dup mapping is real, and the bank's question numbering aligns with the
guide's at least through Q9. That does **not** settle the count — a 20-question
1.1.8 bank would still align at Q6 and Q9.

---

## 6. Known gaps in v0.3.0

- Progress is in-memory. Reload clears answers, verdicts, and confidence marks.
- Bank 1.5 (Module Quiz) is absent — no guide, bank file not loaded.
- 1.1.8 gets the plain fallback panel rather than a spine. Deliberate: its
  topology questions aren't an ordered sequence, and a scope rail would light
  on only 2 of its 10 questions. Decoration, not information.
- Domain tagging (`dom`) and Messer video links aren't wired into the app yet,
  though `netplus_messer_index.js` has the data.
- No Priority Study List, no wrong-answer review queue, no score history.
- The spine's band-matching is keyword inference. It's decoration when it
  misses, never wrong-answer-causing, but it isn't authoritative.

---

## 7. Working style that has worked

Do real verification, not assurances — every count, total, and score in this
project has been checked by script, and doing so has caught real errors
including my own. Own mistakes plainly. Give the honest answer even when it
isn't what was asked for. He responds well to being told a source is wrong or
that a question he missed was badly written.

---

## 8. Next actions, in order

1. **Upload `netplus_bank_module1.js` and `netplus_bank_1_1_8.js`** — resolves
   the 30-question gap in §5 and lets the guides merge into the banks instead
   of sitting parallel. This is now the top blocker.
2. **Answer D-10** before more banks land; retrofitting history was explicitly
   deferred as its own project in Security+ and is cheaper to decide now.
3. Wire domain tagging and Messer links.
4. **B.1.3 and B.1.4** remain high-value targets — the book's own exam
   objectives listing and course-to-objectives mapping. B.1.4 may hand over
   `classifyDomain()` outright instead of keyword inference.
