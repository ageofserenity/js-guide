# JS Learning System — App Documentation

An ADHD-friendly JavaScript learning single-page web app. Teaches JS from beginner mental models through advanced tools via bite-sized, progressively-revealed lessons.

---

## What & Why

Traditional JS documentation and courses hit ADHD learners with too much at once: dense pages, walls of code, no clear "next step." This app breaks every topic into small pieces (a few sentences or one code block per piece), organized so the learner can dip in, understand one thing, and move on.

Every lesson follows the same 18-piece structure. That predictability is a feature — the learner always knows where to find "what problem it solves" or "common mistakes" for any topic, method, or debug tool.

---

## Folder Structure

```
/
├── index.html                    # App shell — 9 views (dashboard + 8 sections)
├── resources/
│   ├── css/
│   │   ├── styles.css            # Main stylesheet
│   │   └── prism-theme.css       # Code highlighting theme
│   └── js/
│       ├── data.js               # Structure: sections, groups, lessons, pieces (titles + previews only)
│       ├── script.js             # Renderer: builds accordions lazily, view-switching
│       ├── contentLoader.js      # Injects content files as <script> tags
│       └── content/
│           ├── content.js        # Empty { CONTENT = {} } base object
│           ├── beforeYouStartContent.js
│           ├── bigPictureContent.js
│           ├── coreMentalContent.js
│           ├── topicBasicContent.js
│           ├── topicAdvancedContentPt1.js
│           ├── topicAdvancedContentPt2.js
│           ├── topicComboContent.js
│           ├── methodContentPt1.js       # 5.1–5.3 (DOM Methods, Properties, Events)
│           ├── methodContentPt2.js       # 5.4–5.5 (Window/Browser, Storage)
│           ├── methodContentPt3.js       # 5.6 (Array Methods)
│           ├── methodContentPt4.js       # 5.7 (String Methods)
│           ├── methodContentPt5.js       # 5.8–5.9 (Object, Number/Math)
│           ├── methodContentPt6.js       # 5.10–5.13 (Date, JSON, RegExp, Promise/Async)
│           ├── methodContentPt7.js       # 5.14–5.15 (Set/Map, Special/Advanced)
│           ├── websitePatternContent.js
│           └── debugContent.js
```

---

## Architecture (3 Layers)

### Layer 1: Structure (`data.js`)
Defines all sections, groups, lessons, and pieces — but only titles and previews. No lesson bodies. Uses helper functions like `group()`, `method()`, `withCard()`, `withChunks()` to build consistent structures.

### Layer 2: Renderer (`script.js`)
Builds accordions lazily on demand (only the piece the user opens is rendered). Handles view-switching between the dashboard and the 8 content sections. Looks up each piece's body from the `CONTENT` object using a dot-path key.

### Layer 3: Content (`resources/js/content/`)
The actual HTML strings for every piece. Each file does `Object.assign(CONTENT, { 'dotPath': `<p>...</p>`, ... })` to add its pieces to the global `CONTENT` object. Files are loaded via `contentLoader.js` as `<script>` tags.

---

## Section Overview

| # | Section | Purpose | Card Structure |
|---|---|---|---|
| 00 | Before You Start | Setup, tools, mindset | Various |
| 01 | Big Picture | JS as a whole, ecosystem | Various |
| 02 | Core Mental Models | Foundational thinking | `MENTAL_CARD_PIECES` |
| 03 | Main Topic Guides | Concepts (variables, loops, DOM, events, etc.) | `TOPIC_CARD_CHUNKS` (18 pieces) |
| 04 | Topic Combo Guide | How concepts combine | `TOPIC_COMBO_GUIDE` |
| 05 | Method / Snippet Reference | Built-in JS methods, properties, functions | `TOPIC_CARD_CHUNKS` (18 pieces) |
| 06 | Real Website Patterns | Common patterns from real sites | `WEBSITE_PATTERN` |
| 07 | Debugging / Error Guide | Debug tools + error types | `TOPIC_CARD_CHUNKS` (18 pieces) |

Sections 3, 5, and 7 all share the same 18-piece structure. Sections 0–2, 4, and 6 have their own specialized structures.

---

## The 18-Piece Structure (`TOPIC_CARD_CHUNKS`)

Every lesson in Sections 3, 5, and 7 is broken into 4 chunks, 18 total pieces:

### Chunk 0 — What & How (4 pieces)
Mechanical "what does this look like."
- **What it is** — Starting definition (2 paragraphs, prose)
- **Syntax** — Exact form (code)
- **Anatomy / Breakdown** — Each piece labeled (code with commented diagram)
- **Syntax Details That Matter** — Punctuation, casing, gotchas (mixed prose + code)

### Chunk 1 — Why & When (6 pieces)
The "why does this exist" understanding.
- **What problem it solves** — The need that brought it into existence (prose, 2 paragraphs)
- **Why use it** — The benefit over alternatives (prose, 2 paragraphs)
- **Where you use it** — Real-world placements (code with intro)
- **Plain English explanation** — Everyday-language framing (prose, 2-3 paragraphs)
- **Mental model** — The mental picture (prose, 2-3 paragraphs)
- **Step-by-step walkthrough** — What JS does when it runs (code with commented walkthrough)

### Chunk 2 — The Click (4 pieces)
Aha + watch out.
- **Debugging clue** — First thing to check when it breaks (mixed prose + code)
- **The part that makes it click** — The simplest "aha" version (mixed prose + code)
- **Common confusions** — Things often misunderstood (prose Q&A: `<strong>Q?</strong> A.`)
- **Common mistakes** — Things often done wrong (code: broken → fixed)

### Chunk 3 — In Practice (4 pieces)
Now use it.
- **Tiny examples** — Small commented snippets (code)
- **Real website uses** — How it shows up in actual sites (code + prose intros)
- **Connects to** — Other topics this overlaps with (prose list)
- **See also** — Related lessons and references (prose list)

---

## Path Format (dot-path keys in `CONTENT`)

Each piece has a unique key that the renderer uses to look up its HTML.

### Section 3 (Topics)
`topics-<topicIdx>-<subIdx>-<chunkIdx>-<pieceIdx>-<subPieceIdx>`
- Topics have a nested structure (topic → subtopic → deeper level)
- 5-part path
- Example: `topics-13-7-0-0-0` = 3.13 (Events), subtopic 7 (event object), chunk 0, piece 0, sub-piece 0

### Section 5 (Methods)
`methods-<groupIdx>-<methodIdx>-<chunkIdx>-<pieceIdx>`
- Each method is ONE lesson with 18 pieces (no sub-lesson layer)
- 4-part path
- Example: `methods-4-2-0-0` = 5.5 (Storage, group index 4), removeItem (method index 2), chunk 0, piece 0

### Section 7 (Debug)
`debug-<groupIdx>-<toolIdx>-<chunkIdx>-<pieceIdx>`
- Same shape as Section 5 (uses `TOPIC_CARD_CHUNKS`)
- 4-part path
- Example: `debug-5-1-0-0` = 7.5 (Console Tools), console.log, chunk 0, piece 0

### Group Index Reference for Section 5
| Group | Index |
|---|---|
| 5.1 DOM Methods | 0 |
| 5.2 DOM Properties | 1 |
| 5.3 Event Methods / Properties | 2 |
| 5.4 Window / Browser | 3 |
| 5.5 Storage | 4 |
| 5.6 Array Methods | 5 |
| 5.7 String Methods / Properties / Syntax Tools | 6 |
| 5.8 Object Methods | 7 |
| 5.9 Number / Math | 8 |
| 5.10 Date | 9 |
| 5.11 JSON | 10 |
| 5.12 RegExp | 11 |
| 5.13 Promise / Async | 12 |
| 5.14 Set / Map | 13 |
| 5.15 Special / Advanced | 14 |

### Chunk/Piece Index Reference
Same for all `TOPIC_CARD_CHUNKS` sections (3, 5, 7):
| Chunk | Pieces | Indices |
|---|---|---|
| 0 What & How | 4 | 0-0, 0-1, 0-2, 0-3 |
| 1 Why & When | 6 | 1-0, 1-1, 1-2, 1-3, 1-4, 1-5 |
| 2 The Click | 4 | 2-0, 2-1, 2-2, 2-3 |
| 3 In Practice | 4 | 3-0, 3-1, 3-2, 3-3 |

---

## Section 5 Method Counts

Total: **228 methods** across **15 groups** (Console removed — covered by Section 7 debug instead).

| Group | Methods | File |
|---|---:|---|
| 5.1 DOM Methods | 18 | Pt1 |
| 5.2 DOM Properties | 11 | Pt1 |
| 5.3 Event Methods / Properties | 10 | Pt1 |
| 5.4 Window / Browser | 17 | Pt2 |
| 5.5 Storage | 6 | Pt2 |
| 5.6 Array Methods | 27 | Pt3 |
| 5.7 String Methods | 24 | Pt4 |
| 5.8 Object Methods | 13 | Pt5 |
| 5.9 Number / Math | 21 | Pt5 |
| 5.10 Date | 14 | Pt6 |
| 5.11 JSON | 2 | Pt6 |
| 5.12 RegExp | 12 | Pt6 |
| 5.13 Promise / Async | 19 | Pt6 |
| 5.14 Set / Map | 18 | Pt7 |
| 5.15 Special / Advanced | 16 | Pt7 |

Total pieces in Section 5: **228 × 18 = 4,104 pieces.**

---

## Content File Structure

Each content file follows this pattern:

```javascript
Object.assign(CONTENT,{});

/* ==========================================================
     SECTION 5:  5.X–5.Y (group names)
========================================================== */

Object.assign(CONTENT, {
  /* --- Sub-lesson: 5.X.N method name --- */

  /* Chunk 0: What & How */
  'methods-groupIdx-methodIdx-0-0': `<p>...</p>`,
  'methods-groupIdx-methodIdx-0-1': `<pre>...</pre>`,
  // ... etc for all 18 pieces
});
```

The renderer looks up each piece's HTML by its dot-path key when the user opens that accordion.

---

## HTML/Prism Conventions in Content Files

Content pieces are template literals containing HTML strings. Because they're template literals, some syntax needs escaping:

### Escaping rules
| Situation | Write as | Why |
|---|---|---|
| Angle brackets in code examples | `&lt;` `&gt;` | So they don't get parsed as HTML tags |
| Ampersand in code examples | `&amp;` | HTML entity requirement |
| Backticks in prose (e.g. describing a `template literal`) | `&#96;` | A raw backtick closes the outer template literal |
| Backticks inside code blocks | `\`` | Same reason — escape with backslash |
| `${expression}` inside outer template literal | `\${expression}` | Otherwise it tries to interpolate |
| Backticks in code comments | `&#96;` | Same as prose |

### Code block wrapping
Every code example uses:
```html
<pre class="language-javascript"><code class="language-javascript">
  // ... code here
</code></pre>
```

Prism then applies syntax highlighting from `prism-theme.css`.

### Prose styling
- Paragraphs: `<p>...</p>`
- Emphasis: `<strong>bold important terms</strong>`, `<em>italic</em>`
- Inline code: `<code>variable</code>` or `<code>Method()</code>`
- Lists: `<ul>` / `<li>`

---

## Workflow (Os + Claude)

### Standard workflow for a new lesson
1. Os names the next method/topic they want to write.
2. Claude generates one complete `.js` file containing that lesson's 18 pieces.
3. File delivered via `present_files` in `/mnt/user-data/outputs/`.
4. Os copies the file's contents into the right `methodContentPtX.js` file.
5. Repeat for next method.

### Conventions
- **One lesson per file** — never batched. Named `lesson-5-5-3.js` (section-group-method).
- **No preamble or postamble** in Claude's chat response — just deliver the file.
- **Content is Os's word** — Claude doesn't decide to add/remove pieces or reorder without asking.
- **Structural changes require verification** — Claude reads the current `data.js` before making changes.

### File formats per piece type
| Piece | Default Format |
|---|---|
| What it is | Prose (2 paragraphs) |
| Syntax | Code |
| Anatomy / Breakdown | Code (with labeled diagram in comments) |
| Syntax Details That Matter | Mixed (prose + code) |
| What problem it solves | Prose (2 paragraphs) |
| Why use it | Prose (2 paragraphs) |
| Where you use it | Code with intro |
| Plain English explanation | Prose (2-3 paragraphs) |
| Mental model | Prose (2-3 paragraphs) |
| Step-by-step walkthrough | Code with commented walkthrough |
| Debugging clue | Mixed (code + prose) |
| The part that makes it click | Mixed (code + prose) |
| Common confusions | Prose (Q&A: `<strong>Q?</strong> A.`) |
| Common mistakes | Code (broken → fixed pairs) |
| Tiny examples | Code |
| Real website uses | Code + prose intros |
| Connects to | Prose list |
| See also | Prose list |

---

## Gotchas (things that break the app)

1. **Unescaped `${name}`** inside a content-file template literal breaks the file — always escape as `\${`.
2. **Unescaped backticks** in code examples inside a template literal terminate the outer literal — use `\`` inside code, `&#96;` in prose or comments.
3. **Wrong `dotPath` key** — no error, but the accordion opens to empty content. Double-check the group index, method index, chunk index, piece index.
4. **Content file not loaded in `contentLoader.js`** — pieces don't render because `CONTENT` doesn't have them.
5. **Empty `Object.assign(CONTENT, {})`** at the top of content files is required — it primes the `CONTENT` object.

---

## Renderer Behavior Notes

- **Lazy rendering** — pieces are only put into the DOM when their accordion is opened, then cached.
- **Nested collapse** — top-level chunks toggle open/closed; individual pieces inside also toggle independently.
- **Progress tracking** — done state is stored per piece (localStorage), so progress persists across sessions.
- **View switching** — only one view (dashboard or a section) is visible at a time.

---

## Long-Term Direction

- Finish all Section 3 topic lessons (mostly done).
- Finish all Section 5 method lessons (228 to write).
- Finish all Section 7 debug lessons (mostly done).
- Populate Sections 4 (Topic Combos) and 6 (Website Patterns).
- Polish styling, mobile behavior, dark mode consistency.
