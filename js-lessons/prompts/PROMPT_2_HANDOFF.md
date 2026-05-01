# JS Learning System — Project State Handoff for Prompt 2

**Purpose of this file:** Catch up a fresh Claude conversation on a project that's already been built. The structural framework is complete. The next phase ("Prompt 2") fills in actual lesson content inside the empty accordion shells.

**How to use this:** Paste this entire file as the FIRST message in a new chat. Then share the actual lesson-content prompt (Prompt 2) afterward.

---

## TL;DR — What Already Exists

A working JavaScript learning website built as 5 files (vanilla HTML/CSS/JS, no build tools):

```
/
├── index.html        ← Single-page app shell, 8 section views
├── styles.css        ← Full design system + responsive
├── prism-theme.css   ← Code block syntax highlighting
├── data.js           ← ALL content (sections, topics, lessons, card-piece shells)
└── script.js         ← Behavior (rendering, navigation, accordions, lazy-load)
```

The site has 8 sections accessible from a dashboard. Each section opens a unique view. Inside each view, content is organized as nested accordions — **all empty placeholder shells, awaiting Prompt 2's actual lesson content.**

---

## What Each Section Looks Like (User Perspective)

| # | Section | Structure | Approx. Accordion Count |
|---|---|---|---|
| 0 | Before You Start | Flat (1 level) | 6 |
| 1 | Big Picture | Flat (1 level) | 7 |
| 2 | Core Mental Models | Deep (3 levels) | ~700 |
| 3 | Main Topic Guides | Deep (4 levels with chunking) | ~8,400 |
| 4 | Topic Combo Guide | Deep (4 levels + cross-references) | ~3,100 |
| 5 | Method / Snippet Reference | Deep (5 levels via factory) | ~3,600 |
| 6 | Real Website Patterns | Deep (3 levels) | ~1,000 |
| 7 | Debugging / Error Guide | Deep (3 levels) | ~1,900 |

Total: ~18,700 accordion shells across the whole app. Lazy rendering keeps it fast — child accordions only render when their parent is opened.

---

## The 4 Data Shapes in `data.js`

The file uses a clear separation of data structures based on depth:

### 1. `SECTIONS` — the 8 dashboard cards
```javascript
const SECTIONS = [
  { id: 'before', number: '00', title: '...', desc: '...' },
  // ...8 total
];
```

### 2. `TOPICS` — flat sections (1-level accordions)
Used for Sections 0 (`before`) and 1 (`bigpicture`).
```javascript
const TOPICS = {
  before: [
    { title: 'How this guide works', preview: '...' },
    // ...
  ],
  bigpicture: [
    // 7 shells
  ]
};
```

### 3. `NESTED_TOPICS` — currently empty
Reserved for 2-level sections. Nothing uses it now. (Earlier iterations had Sections 4 and 5 here; they got moved to `DEEP_TOPICS`.)

### 4. `DEEP_TOPICS` — 3+ level deep sections
Used for everything except Sections 0 and 1. Each entry is an array of "groups," and items can nest arbitrarily deep:
```javascript
const DEEP_TOPICS = {
  mental: [...],     // Section 2 — 3 levels
  topics: [...],     // Section 3 — 4 levels (with chunks)
  combos: [...],     // Section 4 — 4 levels (with cross-refs)
  methods: [...],    // Section 5 — 5 levels (uses factory)
  patterns: [...],   // Section 6 — 3 levels
  debug: [...]       // Section 7 — 3 levels
};
```

---

## Card Structure Templates (Per Section)

Each section type has its own "card structure" — the set of teaching pieces that appear at the deepest level of every lesson. **These pieces are what Prompt 2 fills in.**

| Section | Constant Name | Pieces | Example Pieces |
|---|---|---|---|
| 2 — Mental Models | `MENTAL_CARD_PIECES` | 5 | Short meaning, Plain English, Tiny code, Connects to, Click moment |
| 3 — Topics | `TOPIC_CARD_CHUNKS` | 18 (grouped into 4 chunks) | What it is, Syntax, Plain English, Debugging clue, etc. |
| 4 — Combos | `TOPIC_COMBO_GUIDE` | 11 | What this combo means, Syntax/code shape, Code example, etc. |
| 5 — Methods | `METHOD_SNIPPET_REFERENCE` | 13 | What it does, Syntax, Anatomy, Tiny example, Debugging clue, etc. |
| 6 — Patterns | `WEBSITE_PATTERN` | 13 | Pattern name, What it does, Code example, Step-by-step walkthrough, etc. |
| 7 — Debug | `DEBUG_CARD` | 13 | Error name, What it means, Broken code, Fixed code, How to debug, etc. |

**Sections 0 and 1 do NOT use card structures.** Each accordion opens directly to a lesson body. No nesting.

---

## Helper Functions (Factories)

`data.js` defines several factory functions that build the nested structure consistently:

- `withCard(lessons, cardPieces)` — wraps a lesson list with card pieces (Section 2 style)
- `withChunks(lessons, chunks)` — wraps a lesson list with the 4-chunk grouping (Section 3 only)
- `withCombo(lessons, comboGuide)` — wraps a combo's lessons with combo card pieces
- `withPattern(lessons, websitePattern)` — wraps pattern lessons with pattern card pieces
- `withDebug(lessons, debugCard)` — wraps debug lessons with debug card pieces
- `method(title, preview, concepts)` — builds a 3-level method shell (Section 5 only)
- `group(groupTitle, groupPreview, items)` — wraps items in a Level 1 group accordion (Section 5 only)

**For Prompt 2:** You don't need to use these factories to fill content. They were used at structure-build time. Prompt 2 just edits the bottom-most placeholder text inside existing accordions.

---

## How the Renderer Works

`script.js` has three render functions, picked by section:

```javascript
const flatSections   = ['before', 'bigpicture'];
const nestedSections = [];   // empty
const deepSections   = ['mental', 'topics', 'combos', 'methods', 'patterns', 'debug'];

flatSections.forEach(id => renderAccordions(id));            // 1-level
nestedSections.forEach(id => renderNestedAccordions(id));    // 2-level (legacy, unused)
deepSections.forEach(id => renderDeepNestedAccordions(id));  // 3+ levels (recursive)
```

The `renderDeepNestedAccordions` function uses a recursive helper called `buildDeepShell` that adapts to any depth automatically. If a node has `.items`, render lazy slot. If not, render placeholder body.

**Lazy rendering:** Child accordions only render when their parent first opens. Crucial for Section 3 (~8,400 shells) and Section 5 (~3,600 shells). The function `lookupDeepChildren(dataPath)` walks the data tree using a path string like `"topics-0-1-2"`.

---

## Visual Behavior Rules (Locked Decisions)

These were debated and locked during the build. **Don't change without asking.**

| Behavior | Rule |
|---|---|
| One section visible at a time | Yes — dashboard ↔ section views, not all stacked |
| Open one accordion at a time? | **No** — multiple can stay open at any level (independent toggle) |
| Level 1 accordions | Use chevron icon (signals "contains more accordions") |
| Level 2+ accordions | Use plus/minus icon |
| Cross-references (Section 4) | Dashed border + ↗ mark + italic preview, body says "See [original]" |

---

## Cross-Reference System (Section 4 specifically)

Section 4 (Combos) has a **redundancy rule** to avoid duplicate content:

- "Variables + Functions" appears in `4.1 Variables Combos` as a FULL shell (real lessons + card pieces)
- "Functions + Variables" appears in `4.2 Functions Combos` as a CROSS-REFERENCE shell with `crossRef: 'Variables + Functions'` set on it
- The renderer detects `crossRef` on a node and shows a "documented under..." note instead of lessons

**Prompt 2 should NOT add lesson content to cross-reference accordions.** Their entire purpose is to point to the original.

---

## Where Prompt 2 Plugs In

Every leaf accordion (deepest level — the card-structure pieces) currently shows this placeholder:

> *"Prompt 2 will fill this with the actual content for [piece title]."*

**The structural goal of Prompt 2:** replace these placeholder bodies with real lesson content. The card-piece titles (Short meaning, Plain English, Tiny teaching code, etc.) are the prompts — Prompt 2 writes the answers.

For Sections 0 and 1 (flat), each accordion opens directly to a lesson body — no card pieces to fill. Prompt 2 writes one body per accordion.

---

## Teaching Rules (From Prompt 1, Apply to All Lesson Content)

These global rules apply to every piece of content Prompt 2 writes:

1. **No naked code** — every code example must teach something. Comments inline, never just dumped.
2. **Wrong vs Right** — show broken examples alongside correct ones for max teaching value.
3. **Click Moment** — every topic should have an "aha" sentence that makes it suddenly make sense.
4. **Debugging Clue** — every topic includes the first thing to check when it breaks.
5. **Plain English** — explanations in everyday words, not jargon.
6. **ADHD-friendly** — short, scannable, structured. No walls of text.

There are 8 callout types styled in CSS, ready to use:
- `callout--syntax` (teal — Syntax Details That Matter)
- `callout--debug` (rust — Debugging Clue)
- `callout--click` (amber — Click Moment)
- `callout--mistake` (rust — Common Mistake)
- `callout--wrongright` (ink — Wrong vs Right)
- `callout--plain` (gray — Plain English)
- `callout--thinking` (terracotta — What JS Is Thinking)
- `callout--seealso` (moss — See Also)

Use them as: `<div class="callout callout--debug"><div class="callout__label">Debugging Clue</div><div class="callout__body">...</div></div>`

---

## Code Block Styling (Already Wired)

Prism.js is loaded with these languages: markup, clike, javascript, css. Use it like:

```html
<pre><code class="language-javascript">
const greeting = 'hello';
console.log(greeting);
</code></pre>
```

The `prism-tomorrow` theme is loaded, plus custom overrides in `prism-theme.css` to match the app's warm palette.

---

## File Sizes (Approximate, So You Know What You're Working With)

- `data.js` — ~100 KB (all the structural data)
- `script.js` — ~20 KB (rendering + behavior)
- `styles.css` — ~25 KB
- `index.html` — ~10 KB
- `prism-theme.css` — ~1 KB

When Prompt 2 fills content, `data.js` will grow significantly. Expect it to potentially hit 500 KB+ depending on lesson length. The lazy renderer keeps the browser happy regardless.

---

## Architectural Decisions Worth Knowing

These shaped the build and are worth understanding before making changes:

1. **5 files instead of 15** — Original prompt suggested 15 files in folders. User chose 5 for simplicity. Don't refactor without asking.

2. **Independent accordion toggle (not one-at-a-time)** — Originally one-at-a-time, changed during testing because users wanted to compare multiple open lessons.

3. **Section 3 uses chunks (4 levels)** — 18 card pieces was too many flat. Grouped into 4 chunks (What & How / Why & When / The Click / In Practice). Other deep sections don't have chunks because their card structures are smaller (≤14 pieces).

4. **Section 5 has 5 levels (deepest in the app)** — Methods can have multiple "concepts" inside them (e.g., `getElementById()` has concepts like "id selection," "no # needed," "returns one element or null"). Each concept then expands to the 13-piece card structure.

5. **Cross-references in Section 4 only** — Combos have a natural reverse-duplicate problem (Variables+Functions vs Functions+Variables). Other sections don't.

---

## Known Things That Were Deferred

A couple of small things were noted but not addressed during the structure build:

1. **Some preview text is placeholder/duplicated** — especially in Section 6, where every pattern has the same 7 lesson titles ("select button", "add click listener", etc.). This was the user's working draft and they planned to fix during content phase.

2. **Some typos in card-structure preview text** — minor, in `TOPIC_COMBO_GUIDE` and `METHOD_SNIPPET_REFERENCE`. Nothing breaks, just a few "Relative too" → "Related to" type things. Will get overwritten by Prompt 2 anyway.

3. **No "Stop 3" polish pass was done** — final accessibility check, edge-case testing, mobile breakpoint verification. The app works and looks good but was not exhaustively QA'd.

---

## How to Verify Everything Still Works

After making any change to `data.js` or `script.js`:

```bash
node --check data.js
node --check script.js
```

For a structural sanity check, run:

```javascript
const fs = require('fs');
const src = fs.readFileSync('data.js', 'utf8');
const f = new Function(src + '; return { SECTIONS, TOPICS, NESTED_TOPICS, DEEP_TOPICS };');
const ctx = f();
// Walk and count what's there
```

---

## User Communication Style (Important)

Things learned about how this user works best:

- **They have ADHD.** Long walls of text are hard. Use clear sections, short paragraphs, visual hierarchy.
- **They want explanations before action.** Don't just do — explain the plan, then execute.
- **They will push back when something feels wrong.** Listen. Reflect understanding before changing course.
- **They appreciate honesty over confidence.** If something might not work, say so. If you got something wrong, own it directly without over-apologizing.
- **They get lost in technical jargon sometimes.** Explain "what file structure means" or "what nested means" with diagrams or concrete examples when needed.
- **They will ask for visual demos** — diagrams of structure, mockups of layouts. Use the Visualizer when concepts get spatial or hierarchical.
- **They tend to change their mind mid-conversation** when they actually see something. That's GOOD — the "feeling it" check is more accurate than the "imagining it" check. Don't push back on changes.

---

## What to Do First in the New Chat

When you start the new conversation, the user will share Prompt 2 (the actual lesson-content prompt). Before doing anything:

1. Read this entire handoff document carefully
2. Read the user's Prompt 2 carefully
3. **Confirm understanding before writing any content.** Echo back: "OK, here's what I understand — Prompt 2 wants [X], the existing structure has [Y], so I'll [Z]. Sound right?"
4. Ask about scope: should you fill ALL ~18,000 leaves, or start with a sample section (e.g., just Variables in Section 3)?
5. Do NOT start writing lesson content until the user confirms the plan.

---

## Final Sanity Notes

- The structure is **complete and frozen unless the user explicitly asks to change it.**
- Prompt 2's job is **content, not architecture.** If something feels like it needs an architecture change, STOP and discuss.
- When in doubt about depth or structure, look at how Section 2 (Mental Models) is built — it's the cleanest reference example.
- Always preserve existing accordion shells — adding/renaming them changes the URL/anchor structure.

---

*End of handoff. Good luck with Prompt 2.*
