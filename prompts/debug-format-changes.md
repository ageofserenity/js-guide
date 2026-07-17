# Debug Section Format Change — Documentation

## What changed

Section 7 (Debug / Error Guide) originally used its own **flat 13-piece card structure** (`DEBUG_CARD` + `withDebug` helper). We switched it to reuse the **existing 4-chunk topic structure** (`TOPIC_CARD_CHUNKS` + `withChunks`) so debug lessons match Section 3 topic lessons exactly.

---

## Before (flat 13-piece format)

**Structure in `data.js`:**

```javascript
const DEBUG_CARD = [
  { title: 'Error name / debug topic',    preview: '...' },
  { title: 'What it means',               preview: '...' },
  { title: 'Syntax or broken code shape', preview: '...' },
  { title: 'Syntax Details That Matter',  preview: '...' },
  { title: 'Anatomy / Breakdown',         preview: '...' },
  { title: 'Why it usually happens',      preview: '...' },
  { title: 'Plain English explanation',   preview: '...' },
  { title: 'Broken code example',         preview: '...' },
  { title: 'Fixed code example',          preview: '...' },
  { title: 'How to debug it',             preview: '...' },
  { title: 'What to check first',         preview: '...' },
  { title: 'Related topics',              preview: '...' },
  { title: 'See also',                    preview: '...' },
];

function withDebug(lessons, card) {
  return lessons.map(lesson => ({
    title:   lesson.title,
    preview: lesson.preview,
    items:   card.map(piece => ({ ...piece })),
  }));
}
```

**Usage in each debug group:**

```javascript
items: withDebug([
  { title: 'console.log()', preview: 'Inspect any value.' },
  // ...
], DEBUG_CARD)
```

**Path format:** `debug-X-Y-Z` (three numbers: group, lesson, piece)

Example: `debug-4-0-0` = 7.5 (group 4), console.log (lesson 0), piece 0 (Error name).

**Piece count:** 13 flat pieces per lesson, no chunks.

---

## After (chunked format matching topics)

**No new constants needed.** Debug lessons now use `TOPIC_CARD_CHUNKS` and `withChunks`, both already defined for Section 3.

**Usage in each debug group:**

```javascript
items: withChunks([
  { title: 'console.log()', preview: 'Inspect any value.' },
  // ...
], TOPIC_CARD_CHUNKS)
```

**Path format:** `debug-X-Y-Z-W` (four numbers: group, lesson, chunk, piece)

Example: `debug-4-0-0-0` = 7.5 (group 4), console.log (lesson 0), chunk 0 (What & How), piece 0 (What it is).

**Piece count:** 18 pieces total across 4 chunks per lesson.

---

## Chunk / piece structure (same as Section 3 topics)

### Chunk 0 — What & How (4 pieces)
- `0-0` What it is
- `0-1` Syntax
- `0-2` Anatomy / Breakdown
- `0-3` Syntax Details That Matter

### Chunk 1 — Why & When (6 pieces)
- `1-0` What problem it solves
- `1-1` Why use it
- `1-2` Where you use it
- `1-3` Plain English explanation
- `1-4` Mental model
- `1-5` Step-by-step walkthrough

### Chunk 2 — The Click (4 pieces)
- `2-0` Debugging clue
- `2-1` The part that makes it click
- `2-2` Common confusions
- `2-3` Common mistakes

### Chunk 3 — In Practice (4 pieces)
- `3-0` Tiny examples
- `3-1` Real website uses
- `3-2` Connects to
- `3-3` See also

---

## Voice / content adaptation

The slot names are identical to Section 3, but the *voice* of each piece shifts slightly to fit debug context:

| Slot                    | Section 3 voice                                | Section 7 voice                                              |
| ----------------------- | ---------------------------------------------- | ------------------------------------------------------------ |
| What it is              | Definition of the concept                      | Definition of the tool or error                              |
| Syntax                  | How to write the concept                       | Correct usage (for tools) OR broken code shape (for errors)  |
| What problem it solves  | Why the concept exists                         | Why the tool exists / what pain it addresses                 |
| Debugging clue          | (repurposed) The first thing to check          | Same — the fast diagnostic move                              |
| The part makes it click | The aha for the concept                        | The aha for the tool                                         |
| Broken code / Fixed     | (not in Section 3)                             | Now folded into "Tiny examples" and "Real website uses"      |

Same 18 slots. Same overall teaching rhythm. The debug flavor comes through in the actual prose, not in the structure.

---

## What to remove from `data.js`

Since debug lessons no longer use their own card, three things can be deleted:

1. The `DEBUG_CARD` constant
2. The `withDebug` function
3. Any comment blocks introducing them

Confirmed only used by the 16 debug groups. Nothing else references them.

---

## What to update in each debug group

Change every instance of:

```javascript
items: withDebug([...], DEBUG_CARD)
```

to:

```javascript
items: withChunks([...], TOPIC_CARD_CHUNKS)
```

All 16 groups in Section 7 (7.1 through 7.16) need this swap.

---

## Content file impact

Each debug lesson's content object now needs **18 keys instead of 13**, using the 4-number path format:

**Old keys (flat):**
```
'debug-4-0-0'  through  'debug-4-0-12'
```

**New keys (chunked):**
```
'debug-4-0-0-0' through 'debug-4-0-0-3'   ← Chunk 0
'debug-4-0-1-0' through 'debug-4-0-1-5'   ← Chunk 1
'debug-4-0-2-0' through 'debug-4-0-2-3'   ← Chunk 2
'debug-4-0-3-0' through 'debug-4-0-3-3'   ← Chunk 3
```

Existing lessons written in the old format (if any) need to be re-keyed and split across the four chunks. New pieces added: "Where you use it," "Mental model," "Step-by-step walkthrough," "Debugging clue," "The part that makes it click," "Common confusions," "Common mistakes," "Tiny examples," "Real website uses," "Connects to."

Removed from old format: "Broken code example" and "Fixed code example" (their content now lives inside "Tiny examples" and "Real website uses"), and the two consolidated pieces "Error name / debug topic" and "What it means" merged into a single "What it is" piece.

---

## Debug lessons written under the new format so far

- `7.5.1 console.log()` — `debug-4-0-*`
- `7.5.2 console.warn()` — `debug-4-1-*`
- `7.5.3 console.error()` — `debug-4-2-*`
- `7.5.4 console.table()` — `debug-4-3-*`
- `7.5.5 console.dir()` — `debug-4-4-*`
- `7.5.6 typeof` — `debug-4-5-*`

Next up: `7.5.7 Array.isArray()` — `debug-4-6-*`
