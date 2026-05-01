/* ============================================================
   data.js — ALL CONTENT DATA
   ============================================================
   This file holds the data that fills the app.
   Prompt 2 will fill in the actual lesson content inside each
   shell — this file just defines the structure.

   Structure:
     - SECTIONS         → top-level dashboard cards (8 total)
     - TOPICS           → flat sections: Before, Big Picture
                          (each item: { title, preview })
     - NESTED_TOPICS    → 2-level sections: Combos, Methods, Patterns, Debug
                          (each group has items[], each item is a flat lesson)
     - DEEP_TOPICS      → 3-level sections: Mental Models, Topic Guides
                          (group → lesson → card-structure pieces)

   Card structure helpers below define the inner shells that
   appear inside each lesson (Level 3). They are the same for
   every lesson within a section, so we define once and reuse.
   ============================================================ */


/* ==========================================================
   CARD STRUCTURE TEMPLATES
   These are the Level-3 sub-shells that appear inside every
   lesson. Each section type has its own card structure per
   the prompt. Prompt 2 fills in the answers.
   ========================================================== */

// Section 2 — Mental Model Card Structure (prompt line ~360)
// "Mental model name" was removed — the Level 1 group accordion
// already shows the name, so a duplicate inside is redundant.
const MENTAL_CARD_PIECES = [
  { title: 'Short meaning',              preview: 'A one-line summary of what it covers.' },
  { title: 'Plain English explanation',  preview: 'The lesson in everyday words.' },
  { title: 'Tiny teaching code example', preview: 'A small, commented code sample.' },
  { title: 'What it connects to',        preview: 'Other topics this overlaps with.' },
  { title: 'Click moment',               preview: 'The simplest "aha" version.' }
];

/**
 * Helper: wrap an array of lesson titles with the card pieces.
 * Each lesson gets its own copy of the card structure as Level 3.
 */
function withCard(lessons, cardPieces) {
  return lessons.map(lesson => ({
    title:   lesson.title,
    preview: lesson.preview,
    items:   cardPieces.map(piece => ({ ...piece }))
  }));
}


// Section 3 — Main Topic Teaching Card Structure (prompt line ~572)
// 18 pieces grouped into 4 chunks for navigability.
// Each lesson opens to reveal these 4 chunks, each chunk opens
// to reveal its card pieces — Prompt 2 fills the deepest level.
const TOPIC_CARD_CHUNKS = [
  {
    title:   'What & How',
    preview: 'The mechanical "what does it look like".',
    items: [
      { title: 'What it is',                  preview: 'The starting definition.' },
      { title: 'Syntax',                      preview: 'Exact way it must be written.' },
      { title: 'Anatomy / Breakdown',         preview: 'Each piece labeled and explained.' },
      { title: 'Syntax Details That Matter',  preview: 'Punctuation, spaces, casing — what JS actually cares about.' }
    ]
  },
  {
    title:   'Why & When',
    preview: 'The "why does this exist" understanding.',
    items: [
      { title: 'What problem it solves',  preview: 'The need that brought it into existence.' },
      { title: 'Why use it',              preview: 'The benefit over alternatives.' },
      { title: 'Where you use it',        preview: 'Real-world placements.' },
      { title: 'Plain English explanation',preview: 'In everyday words.' },
      { title: 'Mental model',            preview: 'The mental picture for it.' },
      { title: 'Step-by-step walkthrough',preview: 'Each step JS takes when running it.' }
    ]
  },
  {
    title:   'The Click',
    preview: 'The "aha + watch out" pieces.',
    items: [
      { title: 'Debugging clue',                  preview: 'The first thing to check when it breaks.' },
      { title: 'The part that makes it click',    preview: 'The simplest "aha" version.' },
      { title: 'Common confusions',               preview: 'Things often misunderstood.' },
      { title: 'Common mistakes',                 preview: 'Things often done wrong.' }
    ]
  },
  {
    title:   'In Practice',
    preview: 'The "now use it" pieces.',
    items: [
      { title: 'Tiny examples',     preview: 'Small, commented snippets.' },
      { title: 'Real website uses', preview: 'How it shows up in actual sites.' },
      { title: 'Connects to',       preview: 'Other topics this overlaps with.' },
      { title: 'See also',          preview: 'Related lessons and references.' }
    ]
  }
];

/**
 * Helper for Section 3: wrap lesson titles with the 4 chunks.
 * Each lesson gets its own deep-cloned copy of TOPIC_CARD_CHUNKS as Level 3,
 * with card pieces inside each chunk as Level 4.
 */
function withChunks(lessons, chunks) {
  return lessons.map(lesson => ({
    title:   lesson.title,
    preview: lesson.preview,
    items:   chunks.map(chunk => ({
      title:   chunk.title,
      preview: chunk.preview,
      items:   chunk.items.map(piece => ({ ...piece }))
    }))
  }));
}

// Section 4 — Topic Combo Guide Structure (prompt line ~120)
// "Mental model name" was removed — the Level 1 group accordion
// already shows the name, so a duplicate inside is redundant.
const TOPIC_COMBO_GUIDE = [
  { title: 'What this combo means',           preview: 'Covers combo explanation.' },
  { title: 'Syntax / code shape',             preview: 'The actual form of syntax.' },
  { title: 'Syntax Details That Matter',      preview: 'The detaial that make it work.' },
  { title: 'Quick breakdown',                 preview: 'Digestive breakdown.' },
  { title: 'Code example',                    preview: 'The raw material.' },
  { title: 'Real website use',                preview: 'Real application.' },
  { title: 'Connects to',                     preview: 'Relative too.' },
  { title: 'Debugging clue',                  preview: 'Hints to mistake.' },
  { title: 'Common mistakes',                 preview: 'Easy trip up.' },
  { title: 'See also',                        preview: 'Relative too part 2.' },
  { title: 'Why these topics work together',  preview: 'The revelation.' }

];

/**
 * Helper: wrap an array of lesson titles with the card pieces.
 * Each lesson gets its own copy of the card structure as Level 3.
 */
function withCombo(lessons, comboGuide) {
  return lessons.map(lesson => ({
    title:   lesson.title,
    preview: lesson.preview,
    items:   comboGuide.map(piece => ({ ...piece }))
  }));
}

// Section 5 — Method/Snippet Reference Structure (prompt line ~138)
//14 Pieces grouped together, BUT CONTENT IS GROUPED



const METHOD_SNIPPET_REFERENCE = [
  { title: 'What it does',                               preview: 'The rundown.' },
  { title: 'Syntax',                                     preview: 'The actual form of syntax.' },
  { title: 'Syntax / Parameter Details That Matter',     preview: 'The detail that make it work.' },
  { title: 'Anatomy / Breakdown',                        preview: 'Digestive breakdown.' },
  { title: 'What problem it solves',                     preview: 'Why its important.' },
  { title: 'Why use it',                                 preview: 'The real reason.' },
  { title: 'Where you use it',                           preview: 'Relative too.' },
  { title: 'Tiny example',                               preview: 'Showcase.' },
  { title: 'Real website use',                           preview: 'Real application.' },
  { title: 'The part that makes it click',               preview: 'Aha moment.' },
  { title: 'Debugging clue',                             preview: 'The Hint.' },
  { title: 'Common mistakes',                            preview: 'Real problems.' },
  { title: 'See also',                                   preview: 'References.' },
];

/**
 * Helper: wrap an array of lesson titles with the card pieces.
 * Each lesson gets its own copy of the card structure as Level 3.
 */

function method(title, preview, concepts) {
  return {
    title,
    preview,
    items: concepts.map(([conceptTitle, conceptPreview]) => ({
      title: conceptTitle,
      preview: conceptPreview,
      items: METHOD_SNIPPET_REFERENCE.map(piece => ({ ...piece }))
    }))
  };
}

function group(groupTitle, groupPreview, items) {
  return {
    groupTitle,
    groupPreview,
    items
  };
}


// Section 6 — Website Patterns Structure (prompt line ~360)

const WEBSITE_PATTERN = [
  { title: 'Pattern name',                  preview: 'A one-line summary of what it covers.' },
  { title: 'What it does',                  preview: 'The lesson in everyday words.' },
  { title: 'Syntax / code shape',           preview: 'A small, commented code sample.' },
  { title: 'Syntax Details That Matter',    preview: 'Other topics this overlaps with.' },
  { title: 'What problem it solves',        preview: 'The simplest "aha" version.' },
  { title: 'Topics used',                   preview: 'Real application.' },
  { title: 'Code example',                  preview: 'Relative too.' },
  { title: 'Step-by-step walkthrough',      preview: 'Hints to mistake.' },
  { title: 'What JS is thinking',           preview: 'Easy trip up.' },
  { title: 'Debugging clue',                preview: 'Relative too part 2.' },
  { title: 'Common mistakes',               preview: 'The revelation.' },
  { title: 'Variations',                    preview: 'The revelation.' },
  { title: 'See also',                      preview: 'The revelation.' }
];

/**
 * Helper: wrap an array of lesson titles with the card pieces.
 * Each lesson gets its own copy of the card structure as Level 3.
 */
function withPattern(lessons, websitePattern) {
  return lessons.map(lesson => ({
    title:   lesson.title,
    preview: lesson.preview,
    items:   websitePattern.map(piece => ({ ...piece }))
  }));
}


// Section 7 — Debugging / Error Card Structure (prompt line ~2233)
// 13 pieces per debug topic. Each lesson opens to reveal these.

const DEBUG_CARD = [
  { title: 'Error name / debug topic',  preview: 'The label for this entry.' },
  { title: 'What it means',             preview: 'Plain-English meaning.' },
  { title: 'Syntax or broken code shape', preview: 'What the bad version looks like.' },
  { title: 'Syntax Details That Matter', preview: 'Punctuation, spacing, casing JS actually cares about.' },
  { title: 'Anatomy / Breakdown',       preview: 'Each piece labeled and explained.' },
  { title: 'Why it usually happens',    preview: 'The common cause.' },
  { title: 'Plain English explanation', preview: 'In everyday words.' },
  { title: 'Broken code example',       preview: 'Tiny example that triggers the issue.' },
  { title: 'Fixed code example',        preview: 'Same example, corrected.' },
  { title: 'How to debug it',           preview: 'Step-by-step approach.' },
  { title: 'What to check first',       preview: 'The first thing to look at.' },
  { title: 'Related topics',            preview: 'Other lessons this connects to.' },
  { title: 'See also',                  preview: 'Related lessons and references.' }
];

/**
 * Helper: wrap an array of lesson titles with the debug card pieces.
 * Each lesson gets its own copy of DEBUG_CARD as Level 3.
 */
function withDebug(lessons, debugCard) {
  return lessons.map(lesson => ({
    title:   lesson.title,
    preview: lesson.preview,
    items:   debugCard.map(piece => ({ ...piece }))
  }));
}





/* ==========================================================
   1. SECTIONS — the 8 dashboard cards
   Order matches the prompt's structure exactly.
   ========================================================== */
const SECTIONS = [
  {
    id: 'before',
    number: '00',
    title: 'Before You Start',
    desc: 'How this guide teaches, and how to read it.'
  },
  {
    id: 'bigpicture',
    number: '01',
    title: 'Big Picture',
    desc: 'What JavaScript actually does, before any topic details.'
  },
  {
    id: 'mental',
    number: '02',
    title: 'Core Mental Models',
    desc: 'The mental folders to put every topic into.'
  },
  {
    id: 'topics',
    number: '03',
    title: 'Main Topic Guides',
    desc: 'Each big JavaScript topic, taught deeply by itself.'
  },
  {
    id: 'combos',
    number: '04',
    title: 'Topic Combo Guide',
    desc: 'How topics combine in real code.'
  },
  {
    id: 'methods',
    number: '05',
    title: 'Method / Snippet Reference',
    desc: 'Look up one method, property, or syntax piece.'
  },
  {
    id: 'patterns',
    number: '06',
    title: 'Real Website Patterns',
    desc: 'JavaScript pieces combined into real features.'
  },
  {
    id: 'debug',
    number: '07',
    title: 'Debugging / Error Guide',
    desc: 'Understand, trace, and fix broken JavaScript.'
  }
];


/* ==========================================================
   2. TOPICS — flat sections (single-level accordions)
   Each item: { title, preview }
   2–3 shells per section as proof of structure.
   ========================================================== */
const TOPICS = {

  // ---- Before You Start (Section 0) ----
  // 6 flat shells per Prompt 1's "Suggested Accordion Items".
  // Each accordion opens directly to its lesson body — no nesting.
  before: [
    {
      title: 'How this guide works',
      preview: 'A learning system, not a cheat sheet.'
    },
    {
      title: 'No naked code',
      preview: 'Every code example must teach something.'
    },
    {
      title: 'Syntax details matter',
      preview: 'Punctuation, spacing, and casing JS actually cares about.'
    },
    {
      title: 'Wrong vs right examples',
      preview: 'Seeing the broken version makes the right version click.'
    },
    {
      title: 'Debugging is part of learning',
      preview: 'Every topic includes a debugging clue.'
    },
    {
      title: 'How to browse the guide',
      preview: 'Sections, accordions, and how to find what you need.'
    }
  ],

  // ---- Big Picture (Section 1) ----
  // 6 flat shells per Prompt 1's "Suggested Accordion Items".
  // Each accordion opens directly to its lesson body — no nesting,
  // no card structure pieces. Just topic → answer (Prompt 2 fills body).
  bigpicture: [
    {
      title: 'What JavaScript is',
      preview: 'A programming language that runs in the browser.'
    },
    {
      title: 'What JavaScript does on websites',
      preview: 'The kinds of things JS makes happen on a page.'
    },
    {
      title: 'HTML vs CSS vs JS',
      preview: 'Structure, style, and behavior — three jobs.'
    },
    {
      title: 'Input → Logic → Output',
      preview: 'The shape of almost every script.'
    },
    {
      title: 'Why JS topics overlap',
      preview: "No topic lives alone — they always combine."
    },
    {
      title: 'How to read JS code',
      preview: 'Reading order, variables, and what runs first.'
    },
    {
      title: 'How JS connects to the browser',
      preview: 'The DOM, events, and the page as JS sees it.'
    }
  ],

  // ---- Core Mental Models ----
  // (Moved to NESTED_TOPICS below — see "mental" entry there.)

  // ---- Main Topic Guides ----
  // (Moved to DEEP_TOPICS below — Section 3 is now 4-level nested:
  //  topic → lesson → chunk → card piece.)

 

  // ---- Debugging / Error Guide (Section 7) ----
  // (Moved to DEEP_TOPICS below — Section 7 is now 3-level nested:
  //  debug topic → lessons → 13 card pieces.)
};


/* ==========================================================
   3. NESTED_TOPICS — two-level sections (groups → topics)
   Each group: { groupTitle, groupPreview, items: [{title, preview}] }
   For Mental Models, Combos, and Methods, per the prompt requirements.
   ========================================================== */
const NESTED_TOPICS = {

  // ---- Core Mental Models (Section 2) ----
  // (Moved to DEEP_TOPICS below — this section now uses 3-level
  //  nesting because each lesson has its own card structure.)
};

  
  


/* ==========================================================
   4. DEEP_TOPICS — three-level sections
   Structure: group → lesson → card pieces
   Sections that need this: mental, topics, patterns, debug
   (Combos and Methods stay 2-level — they're reference/list style.)
   Each lesson has its own .items[] of card-structure shells
   that get filled by Prompt 2.
   ========================================================== */

const DEEP_TOPICS = {

  // ---- Core Mental Models (Section 2) ----
  // Every lesson gets the Mental Model Card Structure (6 pieces)
  // applied as Level 3 sub-shells via withCard().
  mental: [

    {
      groupTitle: 'Values',
      groupPreview: 'The actual information JS works with.',
      items: withCard([
        { title: 'what values are',                   preview: 'The starting concept.' },
        { title: 'values as the actual information',  preview: 'What JS works with under the hood.' },
        { title: 'strings as text values',            preview: '"hello", \'hi\', `there`.' },
        { title: 'numbers as numeric values',         preview: '42, 3.14, -7.' },
        { title: 'booleans as true/false values',     preview: 'true, false.' },
        { title: 'arrays as list values',             preview: '[1, 2, 3] — ordered collections.' },
        { title: 'objects as grouped data values',    preview: '{name: "Os"} — labeled bundles.' },
        { title: 'null as intentionally empty',       preview: 'You set it to nothing on purpose.' },
        { title: 'undefined as not assigned/missing', preview: 'No value was ever given.' },
        { title: 'value vs variable',                 preview: 'The thing vs the name for the thing.' },
        { title: 'literal values',                    preview: 'Values you type directly in code.' },
        { title: 'values returned from functions',    preview: 'Functions can hand back values.' },
        { title: 'values from form inputs',           preview: 'What the user typed.' },
        { title: 'values from APIs',                  preview: 'Data received over the network.' },
        { title: 'values displayed in the DOM',       preview: 'Text and content shown on the page.' },
        { title: 'Connects to',                       preview: 'variables, functions, if/else, arrays, objects, DOM.' }
      ], MENTAL_CARD_PIECES)
    },

    {
      groupTitle: 'Storage',
      groupPreview: 'Variables and browser storage as containers.',
      items: withCard([
        { title: 'variables as storage containers',         preview: 'Boxes that hold values.' },
        { title: 'let',                                     preview: 'Reassignable storage.' },
        { title: 'const',                                   preview: 'Locked-in storage.' },
        { title: 'assigning values',                        preview: 'Putting a value in the box.' },
        { title: 'reassigning values',                      preview: "Replacing what's in the box." },
        { title: 'storing DOM elements',                    preview: 'Saving selected HTML for later.' },
        { title: 'storing function results',                preview: 'Catching what a function returns.' },
        { title: 'storing arrays/objects',                  preview: 'Holding lists and bundles.' },
        { title: 'localStorage as browser storage',         preview: 'Persists across page reloads.' },
        { title: 'variable memory vs browser storage',      preview: 'Temporary vs saved.' },
        { title: 'scope as where storage can be accessed',  preview: 'Which code can see the variable.' },
        { title: 'Connects to',                             preview: 'values, functions, events, forms, localStorage.' }
      ], MENTAL_CARD_PIECES)
    },

    {
      groupTitle: 'Actions',
      groupPreview: 'Functions and methods — reusable work.',
      items: withCard([
        { title: 'functions as reusable actions',                  preview: 'Code you can run again and again.' },
        { title: 'methods as actions attached to values/objects',  preview: 'Actions that belong to something.' },
        { title: 'calling functions',                              preview: 'Running the action.' },
        { title: 'passing functions',                              preview: 'Functions handed to other code.' },
        { title: 'event handlers as actions that run later',       preview: 'Code that waits for something to happen.' },
        { title: 'return values',                                  preview: 'What an action gives back.' },
        { title: 'actions that change DOM',                        preview: 'Updating the page.' },
        { title: 'actions that transform arrays/strings',          preview: 'Reshaping data.' },
        { title: 'Connects to',                                    preview: 'functions, methods, events, arrays, DOM, async.' }
      ], MENTAL_CARD_PIECES)
    },

    {
      groupTitle: 'Decisions',
      groupPreview: 'Yes/no checks that change what runs.',
      items: withCard([
        { title: 'decisions as yes/no checks', preview: 'Branching based on conditions.' },
        { title: 'if',                          preview: 'The first question.' },
        { title: 'else if',                     preview: 'Backup question.' },
        { title: 'else',                        preview: 'Fallback if nothing matched.' },
        { title: 'switch',                      preview: 'Multi-way comparison.' },
        { title: 'comparisons',                 preview: '===, !==, >, <, >=, <=.' },
        { title: 'booleans',                    preview: 'true / false values driving decisions.' },
        { title: 'truthy/falsy',                preview: 'Values that act like true or false.' },
        { title: 'logical operators',           preview: '&&, ||, !.' },
        { title: 'validation decisions',        preview: 'Is this input acceptable?' },
        { title: 'UI state decisions',          preview: 'Show this, hide that.' },
        { title: 'Connects to',                 preview: 'booleans, forms, events, functions, DOM.' }
      ], MENTAL_CARD_PIECES)
    },

    {
      groupTitle: 'Repetition',
      groupPreview: 'Repeating code over a list or count.',
      items: withCard([
        { title: 'repeating code',                 preview: 'Doing the same thing many times.' },
        { title: 'loops',                          preview: 'The general idea.' },
        { title: 'for loop',                       preview: 'Counter-based loop.' },
        { title: 'while loop',                     preview: 'Loops until a condition is false.' },
        { title: 'forEach()',                      preview: 'Run a function for each array item.' },
        { title: 'map()',                          preview: 'Transform every item into something new.' },
        { title: 'looping arrays',                 preview: 'Walking through a list.' },
        { title: 'looping strings',                preview: 'Walking through characters.' },
        { title: 'rendering repeated DOM content', preview: 'Build many elements from data.' },
        { title: 'indexes',                        preview: 'Position in a list.' },
        { title: 'current item',                   preview: "The one you're on right now." },
        { title: 'Connects to',                    preview: 'arrays, strings, DOM, functions, if/else.' }
      ], MENTAL_CARD_PIECES)
    },

    {
      groupTitle: 'Collections',
      groupPreview: 'Groups of data — lists, bundles, sets, maps.',
      items: withCard([
        { title: 'collections as groups of data',         preview: 'Many values held together.' },
        { title: 'arrays',                                preview: 'Ordered lists.' },
        { title: 'objects',                               preview: 'Labeled key/value bundles.' },
        { title: 'sets',                                  preview: 'Collections of unique values.' },
        { title: 'maps',                                  preview: 'Key/value collections (any key type).' },
        { title: 'arrays of objects',                     preview: 'Lists where each item is a bundle.' },
        { title: 'nested data',                           preview: 'Collections inside collections.' },
        { title: 'collections from APIs',                 preview: 'Data received as lists/objects.' },
        { title: 'collections displayed as cards/lists',  preview: 'Rendering data on the page.' },
        { title: 'Connects to',                           preview: 'loops, array methods, objects, DOM rendering, JSON.' }
      ], MENTAL_CARD_PIECES)
    },

    {
      groupTitle: 'Page Control',
      groupPreview: "JavaScript's view of HTML and how it changes the page.",
      items: withCard([
        { title: 'DOM as JS view of HTML',     preview: "The page as JavaScript sees it." },
        { title: 'selecting elements',         preview: 'Finding HTML from JS.' },
        { title: 'changing text',              preview: 'Updating what the page says.' },
        { title: 'changing classes',           preview: 'Adding or removing CSS classes.' },
        { title: 'changing styles',            preview: 'Inline style updates.' },
        { title: 'creating/removing elements', preview: 'Adding or deleting HTML on the fly.' },
        { title: 'querySelector()',            preview: 'CSS selector → first match or null.' },
        { title: 'textContent',                preview: 'Safe text changes (no HTML parsing).' },
        { title: 'classList',                  preview: 'add(), remove(), toggle(), contains().' },
        { title: 'null when not found',        preview: 'querySelector returns null if no match.' },
        { title: 'Connects to',                preview: 'variables, DOM, events, forms, CSS.' }
      ], MENTAL_CARD_PIECES)
    },

    {
      groupTitle: 'User Interaction',
      groupPreview: 'Events — clicks, typing, form submissions.',
      items: withCard([
        { title: 'events',            preview: 'User and browser actions.' },
        { title: 'clicks',            preview: 'The most common event.' },
        { title: 'typing/input',      preview: 'Reacting to keystrokes.' },
        { title: 'form submission',   preview: 'When a form is sent.' },
        { title: 'event listeners',   preview: 'Attaching reactions to elements.' },
        { title: 'event object',      preview: 'Details about what happened.' },
        { title: 'event.target',      preview: 'The element that triggered it.' },
        { title: 'preventDefault()',  preview: 'Stop default browser behavior.' },
        { title: 'UI feedback',       preview: 'Showing the result of the action.' },
        { title: 'Connects to',       preview: 'DOM, functions, forms, input values, if/else.' }
      ], MENTAL_CARD_PIECES)
    },

    {
      groupTitle: 'Waiting',
      groupPreview: 'Async — code that takes time.',
      items: withCard([
        { title: 'code that takes time', preview: "Some work doesn't finish instantly." },
        { title: 'timers',               preview: 'Delaying or repeating work.' },
        { title: 'setTimeout()',         preview: 'Run code once after a delay.' },
        { title: 'promises',             preview: 'Future values.' },
        { title: 'fetch',                preview: 'Get data from a server.' },
        { title: 'async/await',          preview: 'Cleaner promise syntax.' },
        { title: 'API data',             preview: 'External data loaded over the network.' },
        { title: 'loading states',       preview: '"Loading..." while waiting.' },
        { title: 'errors while waiting', preview: 'Network failures, bad responses.' },
        { title: 'Connects to',          preview: 'functions, promises, JSON, APIs, DOM, try/catch.' }
      ], MENTAL_CARD_PIECES)
    },

    {
      groupTitle: 'Errors',
      groupPreview: 'Errors as clues — finding and fixing problems.',
      items: withCard([
        { title: 'errors as clues',       preview: 'Error messages tell you what went wrong.' },
        { title: 'syntax errors',         preview: "Code JS can't even parse." },
        { title: 'reference errors',      preview: "Used something that doesn't exist." },
        { title: 'type errors',           preview: 'Wrong type used somewhere.' },
        { title: 'logic errors',          preview: 'Code runs but does the wrong thing.' },
        { title: 'console tools',         preview: 'log, warn, error, table, dir.' },
        { title: 'reading error messages',preview: 'Name, message, line, file, stack.' },
        { title: 'debugging values',      preview: "Logging to check what's in there." },
        { title: 'debugging DOM',         preview: 'Selector spelling, timing, null.' },
        { title: 'debugging async',       preview: 'await, response.json(), try/catch.' },
        { title: 'Connects to',           preview: 'everything, console, debugging guide.' }
      ], MENTAL_CARD_PIECES)
    }
  ],

  // ---- Main Topic Guides (Section 3) ----
  // 18 topics per Prompt 1 sections 3.1–3.18.
  // Each topic → lessons (Level 2) → 4 chunks (Level 3) → card pieces (Level 4).
  // Lesson titles come directly from the prompt's "Must include" bullets.
  topics: [

    // -------- 3.1 Variables --------
    {
      groupTitle: '3.1 Variables',
      groupPreview: 'Storage containers for data.',
      items: withChunks([
        { title: 'what variables are',                                       preview: 'The starting concept.' },
        { title: 'what variables are for',                                   preview: 'Why they exist.' },
        { title: 'variable as a storage container',                          preview: 'The mental picture.' },
        { title: 'let',                                                      preview: 'Reassignable storage.' },
        { title: 'const',                                                    preview: 'Locked-in storage.' },
        { title: 'var only as historical/context warning',                   preview: 'Why we avoid var today.' },
        { title: 'declaring a variable',                                     preview: 'Creating the container.' },
        { title: 'assigning a value',                                        preview: 'Putting something inside.' },
        { title: 'reassigning a value',                                      preview: "Replacing what's inside (let only)." },
        { title: 'when const can still hold arrays/objects that change',     preview: 'Reference vs reassignment.' },
        { title: 'naming variables',                                         preview: 'Rules and conventions.' },
        { title: 'camelCase',                                                preview: 'The standard naming style.' },
        { title: 'meaningful names',                                         preview: 'Why "x" is bad and "userAge" is good.' },
        { title: 'storing strings',                                          preview: 'Text in a variable.' },
        { title: 'storing numbers',                                          preview: 'Numeric values in a variable.' },
        { title: 'storing booleans',                                         preview: 'true/false in a variable.' },
        { title: 'storing arrays',                                           preview: 'Lists in a variable.' },
        { title: 'storing objects',                                          preview: 'Bundles in a variable.' },
        { title: 'storing DOM elements',                                     preview: 'Saving selected HTML for later.' },
        { title: 'storing function results',                                 preview: 'Catching what a function returns.' },
        { title: 'undefined variables',                                      preview: 'Declared but no value yet.' },
        { title: 'variables inside functions',                               preview: 'Local scope.' },
        { title: 'variables outside functions',                              preview: 'Global scope.' },
        { title: 'scope basics',                                             preview: 'Where a variable can be seen.' },
        { title: 'common mistakes',                                          preview: 'Misspelling, missing keyword, using before declaring.' },
        { title: 'debugging variables',                                      preview: 'console.log, typeof, check spelling, check scope.' }
      ], TOPIC_CARD_CHUNKS)
    },

    // -------- 3.2 Data Types --------
    {
      groupTitle: '3.2 Data Types',
      groupPreview: 'The kinds of values JS can hold.',
      items: withChunks([
        { title: 'what data types are',                       preview: 'The categories of values.' },
        { title: 'why data types matter',                     preview: 'Different types behave differently.' },
        { title: 'primitive vs reference types',              preview: 'Beginner-friendly intro.' },
        { title: 'strings',                                   preview: 'Text values.' },
        { title: 'numbers',                                   preview: 'Numeric values.' },
        { title: 'booleans',                                  preview: 'true/false values.' },
        { title: 'null',                                      preview: 'Intentionally empty.' },
        { title: 'undefined',                                 preview: 'Not assigned.' },
        { title: 'arrays',                                    preview: 'Ordered lists.' },
        { title: 'objects',                                   preview: 'Labeled bundles.' },
        { title: 'typeof',                                    preview: 'Check the type.' },
        { title: 'string vs number',                          preview: 'Quoted vs unquoted.' },
        { title: 'boolean values',                            preview: 'true and false specifically.' },
        { title: 'empty values',                              preview: '"", 0, false, null.' },
        { title: 'missing values',                            preview: 'undefined.' },
        { title: 'arrays as lists',                           preview: 'Treating arrays as ordered data.' },
        { title: 'objects as grouped data',                   preview: 'Treating objects as labeled data.' },
        { title: 'how data types affect behavior',            preview: '"25" + 5 vs 25 + 5.' },
        { title: 'common mistakes',                           preview: 'Treating strings as numbers, confusing null/undefined.' },
        { title: 'debugging data types',                      preview: 'typeof, Array.isArray(), console.log().' }
      ], TOPIC_CARD_CHUNKS)
    },

    // -------- 3.3 Strings --------
    {
      groupTitle: '3.3 Strings',
      groupPreview: 'Text values — quotes, backticks, methods.',
      items: withChunks([
        { title: 'what strings are',                          preview: 'Text values.' },
        { title: "single quotes 'hello'",                     preview: 'One way to write strings.' },
        { title: 'double quotes "hello"',                     preview: 'Another way.' },
        { title: 'backticks `hello`',                         preview: 'Template literals — supports ${} and multiline.' },
        { title: 'when each quote type matters',              preview: "Apostrophes, attribute strings, template literals." },
        { title: '${} interpolation',                         preview: 'Embed values inside backtick strings.' },
        { title: 'multiline strings with backticks',          preview: 'Real line breaks supported.' },
        { title: 'escape characters',                         preview: '\\n, \\t, \\\\, \\".' },
        { title: 'string + string concatenation',             preview: 'Joining text with +.' },
        { title: 'string vs number visually',                 preview: '"25" looks like 25 but acts differently.' },
        { title: 'string indexes',                            preview: 'Position starts at 0.' },
        { title: '.length',                                   preview: 'How many characters.' },
        { title: 'common methods',                            preview: 'trim, toLowerCase, includes, slice, replace.' },
        { title: 'split() and join()',                        preview: 'String to array and back.' },
        { title: 'reading user input as strings',             preview: 'Form values come in as strings.' },
        { title: 'displaying strings in the DOM',             preview: 'textContent updates.' },
        { title: 'common mistakes',                           preview: 'Mismatched quotes, ${} in non-backtick strings.' },
        { title: 'debugging strings',                         preview: 'console.log, typeof, check quotes, check escape chars.' }
      ], TOPIC_CARD_CHUNKS)
    },

    // -------- 3.4 Numbers --------
    {
      groupTitle: '3.4 Numbers',
      groupPreview: 'Numeric values, math, and conversion.',
      items: withChunks([
        { title: 'what numbers are',                          preview: 'Numeric values.' },
        { title: 'integers vs decimals',                      preview: 'Whole numbers vs decimal numbers.' },
        { title: 'arithmetic operators',                      preview: '+, -, *, /, %, **.' },
        { title: 'parentheses in math',                       preview: 'Grouping operations.' },
        { title: 'number vs string number',                   preview: '25 vs "25".' },
        { title: 'converting strings to numbers',             preview: 'Number(), parseInt(), parseFloat().' },
        { title: 'rounding numbers',                          preview: 'Math.round, floor, ceil.' },
        { title: 'formatting numbers',                        preview: 'toFixed().' },
        { title: 'random numbers',                            preview: 'Math.random().' },
        { title: 'min and max',                               preview: 'Math.min, Math.max.' },
        { title: 'NaN',                                       preview: 'Not a Number — what it means.' },
        { title: 'Infinity',                                  preview: 'When math overflows.' },
        { title: 'decimal precision issues',                  preview: '0.1 + 0.2 ≠ 0.3.' },
        { title: 'form input values starting as strings',     preview: 'Why conversion matters.' },
        { title: 'common mistakes',                           preview: '"25" + 5 = "255", forgetting to convert.' },
        { title: 'debugging numbers',                         preview: 'typeof, isNaN, isFinite, console.log.' },
        { title: 'real website uses',                         preview: 'Prices, totals, counters, scores.' }
      ], TOPIC_CARD_CHUNKS)
    },

    // -------- 3.5 Booleans --------
    {
      groupTitle: '3.5 Booleans',
      groupPreview: 'true / false values.',
      items: withChunks([
        { title: 'what booleans are',                         preview: 'Yes/no values.' },
        { title: 'true',                                      preview: 'The yes value.' },
        { title: 'false',                                     preview: 'The no value.' },
        { title: 'booleans as yes/no values',                 preview: 'The mental model.' },
        { title: 'comparisons returning booleans',            preview: 'a === b → true or false.' },
        { title: 'boolean variables',                         preview: 'isOpen, isLoggedIn, hasError.' },
        { title: 'logical operators: &&, ||, !',              preview: 'Combining booleans.' },
        { title: 'truthy and falsy',                          preview: 'Values that act like true/false.' },
        { title: 'toggle states',                             preview: 'Open/closed, on/off.' },
        { title: 'booleans in if statements',                 preview: 'The most common use.' },
        { title: 'booleans in forms',                         preview: 'Validation states.' },
        { title: 'booleans in UI state',                      preview: 'Show/hide flags.' },
        { title: 'common mistakes',                           preview: 'Strings "true"/"false", = vs ===, misusing !.' },
        { title: 'debugging booleans',                        preview: 'console.log, check comparisons, check truthy/falsy.' }
      ], TOPIC_CARD_CHUNKS)
    },

    // -------- 3.6 Operators --------
    {
      groupTitle: '3.6 Operators',
      groupPreview: 'The symbols that act on values.',
      items: withChunks([
        { title: 'what operators are',                        preview: 'Symbols that do work on values.' },
        { title: 'arithmetic operators',                      preview: '+, -, *, /, %, **.' },
        { title: 'assignment operators',                      preview: '=, +=, -=, *=, /=.' },
        { title: 'comparison operators',                      preview: '===, !==, >, <, >=, <=.' },
        { title: 'logical operators',                         preview: '&&, ||, !.' },
        { title: 'increment/decrement',                       preview: 'i++, i--.' },
        { title: 'string concatenation with +',               preview: 'Joining text.' },
        { title: 'difference between = and ===',              preview: 'Assignment vs comparison.' },
        { title: 'operator precedence basics',                preview: 'What runs first.' },
        { title: 'common mistakes',                           preview: '= vs ===, += vs +, expecting + to always do math.' },
        { title: 'debugging operators',                       preview: 'Log both sides, log final condition.' }
      ], TOPIC_CARD_CHUNKS)
    },

    // -------- 3.7 If / Else --------
    {
      groupTitle: '3.7 If / Else',
      groupPreview: 'Conditional decisions.',
      items: withChunks([
        { title: 'what conditionals are',                     preview: 'Branching code.' },
        { title: 'if',                                        preview: 'The first question.' },
        { title: 'else if',                                   preview: 'Backup question.' },
        { title: 'else',                                      preview: 'Fallback if nothing matched.' },
        { title: 'switch',                                    preview: 'Multi-way comparison.' },
        { title: 'condition inside parentheses',              preview: 'The (...) part.' },
        { title: 'code block inside curly braces',            preview: 'The { ... } part.' },
        { title: 'if as the first question',                  preview: 'The lead-off check.' },
        { title: 'else if as backup question',                preview: 'When if fails.' },
        { title: 'else as fallback',                          preview: 'When nothing matches.' },
        { title: 'else does not need parentheses',            preview: 'Common syntax confusion.' },
        { title: 'condition order matters',                   preview: 'First true wins.' },
        { title: 'only one branch runs',                      preview: 'In an if/else if/else chain.' },
        { title: 'separate if vs else if chain',              preview: 'Two patterns, different behavior.' },
        { title: 'comparison operators in conditions',        preview: 'Driving the decision.' },
        { title: 'logical operators in conditions',           preview: 'Combining checks.' },
        { title: 'nested if statements',                      preview: 'if inside if.' },
        { title: 'guard clauses',                             preview: 'Beginner-friendly only.' },
        { title: 'common mistakes',                           preview: '= vs ===, condition on else, wrong order, missing braces.' },
        { title: 'debugging if/else',                         preview: 'Log condition, log values, check branch order.' }
      ], TOPIC_CARD_CHUNKS)
    },

    // -------- 3.8 Loops --------
    {
      groupTitle: '3.8 Loops',
      groupPreview: 'Repeating code.',
      items: withChunks([
        { title: 'what loops are',                            preview: 'Code that repeats.' },
        { title: 'why loops exist',                           preview: 'Avoid copy-paste.' },
        { title: 'repeating code',                            preview: 'The core idea.' },
        { title: 'for loop',                                  preview: 'Counter-based.' },
        { title: 'while loop',                                preview: 'Until a condition is false.' },
        { title: 'for...of',                                  preview: 'Beginner-friendly intro.' },
        { title: 'nested loops',                              preview: 'Loops inside loops.' },
        { title: 'loop through arrays',                       preview: 'The most common use.' },
        { title: 'loop through strings',                      preview: 'Walking characters.' },
        { title: 'loop through DOM lists',                    preview: 'NodeList iteration.' },
        { title: 'loop counter variable',                     preview: 'Usually i.' },
        { title: 'i = 0',                                     preview: 'Starting value.' },
        { title: 'i < array.length',                          preview: 'Stop condition.' },
        { title: 'i++',                                       preview: 'Increment step.' },
        { title: 'indexes starting at 0',                     preview: 'First item is at 0, not 1.' },
        { title: 'current item',                              preview: 'array[i].' },
        { title: 'break',                                     preview: 'Exit the loop early.' },
        { title: 'continue',                                  preview: 'Skip to next iteration.' },
        { title: 'infinite loops',                            preview: 'When the stop never happens.' },
        { title: 'difference between for and forEach()',      preview: 'Two ways, different behaviors.' },
        { title: 'common mistakes',                           preview: 'Off-by-one, <= vs <, forget i++, infinite loops.' },
        { title: 'debugging loops',                           preview: 'log i, log current item, check condition.' }
      ], TOPIC_CARD_CHUNKS)
    },

    // -------- 3.9 Functions --------
    {
      groupTitle: '3.9 Functions',
      groupPreview: 'Reusable actions.',
      items: withChunks([
        { title: 'what functions are',                        preview: 'Reusable blocks of code.' },
        { title: 'why functions exist',                       preview: 'Avoid repetition, organize logic.' },
        { title: 'reusable actions',                          preview: 'The mental model.' },
        { title: 'function declaration',                      preview: 'function name() {}.' },
        { title: 'function expression',                       preview: 'const fn = function() {}.' },
        { title: 'arrow function',                            preview: 'const fn = () => {}.' },
        { title: 'function name',                             preview: 'How you call it.' },
        { title: 'function body',                             preview: 'The code inside { }.' },
        { title: 'calling a function',                        preview: 'Adding ().' },
        { title: 'referencing without calling',               preview: 'Just the name, no ().' },
        { title: 'parentheses when calling',                  preview: 'Mandatory.' },
        { title: 'parameters',                                preview: 'Placeholder inputs.' },
        { title: 'arguments',                                 preview: 'Actual values passed in.' },
        { title: 'return values',                             preview: 'Sending a value back out.' },
        { title: 'console.log() vs return',                   preview: 'Display vs hand back.' },
        { title: 'scope',                                     preview: 'What the function can see.' },
        { title: 'local variables',                           preview: 'Inside the function only.' },
        { title: 'global variables',                          preview: 'Available everywhere.' },
        { title: 'functions using outside variables',         preview: 'Closure intro.' },
        { title: 'functions receiving strings',               preview: 'String parameters.' },
        { title: 'functions receiving numbers',               preview: 'Numeric parameters.' },
        { title: 'functions receiving arrays',                preview: 'Array parameters.' },
        { title: 'functions receiving objects',               preview: 'Object parameters.' },
        { title: 'functions inside event listeners',          preview: 'Callback functions.' },
        { title: 'callback functions',                        preview: 'Functions passed as values.' },
        { title: 'higher-order functions',                    preview: 'Beginner-friendly only.' },
        { title: 'function factories',                        preview: 'Functions that return functions.' },
        { title: 'common mistakes',                           preview: 'Forget to call, miss return, scope confusion.' },
        { title: 'debugging functions',                       preview: 'console.log inside, check args, check return, check if it runs.' }
      ], TOPIC_CARD_CHUNKS)
    },

    // -------- 3.10 Arrays --------
    {
      groupTitle: '3.10 Arrays',
      groupPreview: 'Lists of items.',
      items: withChunks([
        { title: 'what arrays are',                           preview: 'Ordered lists.' },
        { title: 'arrays as lists',                           preview: 'The mental model.' },
        { title: 'array syntax []',                           preview: 'Square brackets.' },
        { title: 'array items/elements',                      preview: 'The values inside.' },
        { title: 'commas between items',                      preview: 'Separator syntax.' },
        { title: 'indexes starting at 0',                     preview: 'First item is at 0.' },
        { title: 'first item',                                preview: 'array[0].' },
        { title: 'last item',                                 preview: 'array[array.length - 1].' },
        { title: '.length',                                   preview: 'How many items.' },
        { title: 'reading items with bracket notation',       preview: 'array[i].' },
        { title: 'updating items',                            preview: 'array[i] = newValue.' },
        { title: 'adding items: push(), unshift()',           preview: 'End and start.' },
        { title: 'removing items: pop(), shift()',            preview: 'End and start.' },
        { title: 'slice()',                                   preview: 'Copy a portion.' },
        { title: 'splice()',                                  preview: 'Insert/remove at index.' },
        { title: 'looping arrays',                            preview: 'Walking through items.' },
        { title: 'forEach()',                                 preview: 'Run function per item.' },
        { title: 'map()',                                     preview: 'Transform every item.' },
        { title: 'filter()',                                  preview: 'Keep only matches.' },
        { title: 'reduce()',                                  preview: 'Beginner-friendly intro.' },
        { title: 'includes()',                                preview: 'Does it contain X?' },
        { title: 'find()',                                    preview: 'First match.' },
        { title: 'array of strings',                          preview: 'List of text.' },
        { title: 'array of numbers',                          preview: 'List of numbers.' },
        { title: 'array of objects',                          preview: 'List of bundles.' },
        { title: 'nested arrays',                             preview: 'Beginner-friendly only.' },
        { title: 'mutation vs returning new array',           preview: 'push mutates, map returns new.' },
        { title: 'common mistakes',                           preview: 'Index 1 vs 0, wrong index, expecting map to mutate.' },
        { title: 'debugging arrays',                          preview: 'console.log, console.table, isArray, .length.' }
      ], TOPIC_CARD_CHUNKS)
    },

    // -------- 3.11 Objects --------
    {
      groupTitle: '3.11 Objects',
      groupPreview: 'Grouped key/value data.',
      items: withChunks([
        { title: 'what objects are',                          preview: 'Labeled key/value bundles.' },
        { title: 'objects as grouped related data',           preview: 'The mental model.' },
        { title: 'object syntax {}',                          preview: 'Curly braces.' },
        { title: 'key/value pairs',                           preview: 'name: value.' },
        { title: 'properties',                                preview: 'The keys.' },
        { title: 'values',                                    preview: 'What each key holds.' },
        { title: 'commas between properties',                 preview: 'Separator syntax.' },
        { title: 'dot notation',                              preview: 'object.property.' },
        { title: 'bracket notation',                          preview: "object['property']." },
        { title: 'when bracket notation is needed',           preview: 'Dynamic keys, special characters.' },
        { title: 'adding properties',                         preview: 'object.newKey = value.' },
        { title: 'updating properties',                       preview: 'object.key = newValue.' },
        { title: 'deleting properties',                       preview: 'delete object.key.' },
        { title: 'methods inside objects',                    preview: 'Functions as values.' },
        { title: 'this',                                      preview: 'Beginner-friendly intro only.' },
        { title: 'nested objects',                            preview: 'Objects inside objects.' },
        { title: 'arrays of objects',                         preview: 'Common data shape.' },
        { title: 'object property missing = undefined',       preview: 'No error, just undefined.' },
        { title: 'Object.keys()',                             preview: 'Array of keys.' },
        { title: 'Object.values()',                           preview: 'Array of values.' },
        { title: 'Object.entries()',                          preview: 'Array of [key, value] pairs.' },
        { title: 'common mistakes',                           preview: 'Missing commas, dot for dynamic keys, misspelling.' },
        { title: 'debugging objects',                         preview: 'console.log, console.table, check spelling, check undefined.' }
      ], TOPIC_CARD_CHUNKS)
    },

    // -------- 3.12 DOM --------
    {
      groupTitle: '3.12 DOM',
      groupPreview: "JavaScript's view of HTML.",
      items: withChunks([
        { title: 'what the DOM is',                           preview: 'Document Object Model.' },
        { title: "DOM as JavaScript's view of HTML",          preview: 'The mental model.' },
        { title: 'document',                                  preview: 'The root object.' },
        { title: 'selecting elements',                        preview: 'getElementById, querySelector, querySelectorAll.' },
        { title: 'selector syntax',                           preview: '"button" tag, ".btn" class, "#menu" id.' },
        { title: 'querySelector returns one element',         preview: 'Or null.' },
        { title: 'querySelectorAll returns many',             preview: 'Returns NodeList.' },
        { title: 'NodeList basics',                           preview: 'Array-like, but not exactly an array.' },
        { title: 'changing text: textContent, innerHTML',     preview: 'Safe vs HTML-parsing.' },
        { title: 'changing styles: style, classList',         preview: 'Inline style vs class toggle.' },
        { title: 'adding classes',                            preview: 'classList.add().' },
        { title: 'removing classes',                          preview: 'classList.remove().' },
        { title: 'toggling classes',                          preview: 'classList.toggle().' },
        { title: 'creating elements: createElement()',        preview: 'New element in memory.' },
        { title: 'adding elements: appendChild(), append()',  preview: 'Putting it on the page.' },
        { title: 'removing elements',                         preview: 'element.remove().' },
        { title: 'DOM loaded timing',                         preview: 'Script must run after HTML exists.' },
        { title: 'null when element is not found',            preview: "querySelector returns null." },
        { title: 'common mistakes',                           preview: 'Missing dot/hash, treating NodeList as one element.' },
        { title: 'debugging DOM',                             preview: 'console.log, check null, inspect HTML, check selector.' }
      ], TOPIC_CARD_CHUNKS)
    },

    // -------- 3.13 Events --------
    {
      groupTitle: '3.13 Events',
      groupPreview: 'User and browser actions.',
      items: withChunks([
        { title: 'what events are',                           preview: 'Things that happen on the page.' },
        { title: 'events as user/browser actions',            preview: 'The mental model.' },
        { title: 'addEventListener()',                        preview: 'How to listen.' },
        { title: 'event type as string',                      preview: '"click", "input", "submit", "keydown".' },
        { title: 'callback function',                         preview: 'The function that runs.' },
        { title: 'function reference vs function call',       preview: 'fn vs fn().' },
        { title: 'event object',                              preview: 'Details about what happened.' },
        { title: 'event.target',                              preview: 'The element that triggered it.' },
        { title: 'click events',                              preview: 'The most common.' },
        { title: 'input events',                              preview: 'Reacting to typing.' },
        { title: 'submit events',                             preview: 'Form submission.' },
        { title: 'preventDefault()',                          preview: 'Stop default browser behavior.' },
        { title: 'events on forms',                           preview: 'submit, input, change.' },
        { title: 'events on buttons',                         preview: 'click is most common.' },
        { title: 'events on inputs',                          preview: 'input, focus, blur, change.' },
        { title: 'multiple event listeners',                  preview: 'Multiple handlers per event.' },
        { title: 'removing event listeners',                  preview: 'Beginner-friendly intro.' },
        { title: 'common mistakes',                           preview: 'Missing quotes, calling function immediately, wrong type.' },
        { title: 'debugging events',                          preview: 'console.log on click, log event object, log target.' }
      ], TOPIC_CARD_CHUNKS)
    },

    // -------- 3.14 Forms --------
    {
      groupTitle: '3.14 Forms',
      groupPreview: 'Inputs, validation, submission.',
      items: withChunks([
        { title: 'what forms are',                            preview: 'How users send data.' },
        { title: 'how JS works with forms',                   preview: 'Read inputs, react to submit.' },
        { title: 'form element',                              preview: 'The <form> wrapper.' },
        { title: 'input elements',                            preview: 'Text, email, number, etc.' },
        { title: 'labels',                                    preview: 'Beginner-friendly mention.' },
        { title: 'submit button',                             preview: 'Triggers the submit event.' },
        { title: 'selecting form',                            preview: 'querySelector("form").' },
        { title: 'selecting inputs',                          preview: 'querySelector("input").' },
        { title: '.value',                                    preview: 'Reading what was typed.' },
        { title: 'input values usually being strings',        preview: 'Even numeric inputs.' },
        { title: 'submit event',                              preview: 'Fires when form is submitted.' },
        { title: 'input event',                               preview: 'Fires on every keystroke.' },
        { title: 'preventDefault()',                          preview: 'Stop the page reload.' },
        { title: 'validation',                                preview: 'Checking the input.' },
        { title: 'empty string checks',                       preview: 'value === "".' },
        { title: 'trim()',                                    preview: 'Remove leading/trailing whitespace.' },
        { title: 'checking includes()',                       preview: 'Does it contain X?' },
        { title: 'showing error messages',                    preview: 'Display feedback.' },
        { title: 'clearing error messages',                   preview: 'Reset the UI.' },
        { title: 'creating an object from form data',         preview: 'Bundle the inputs.' },
        { title: 'adding form data to an array',              preview: 'Build a list.' },
        { title: 'saving form data to localStorage',          preview: 'Persist it.' },
        { title: 'common mistakes',                           preview: "Forget .value, miss preventDefault, treat input as number." },
        { title: 'debugging forms',                           preview: 'log input.value, check submit, check page refresh.' }
      ], TOPIC_CARD_CHUNKS)
    },

    // -------- 3.15 Browser Storage --------
    {
      groupTitle: '3.15 Browser Storage',
      groupPreview: 'localStorage and sessionStorage.',
      items: withChunks([
        { title: 'what browser storage is',                   preview: 'Saved data in the browser.' },
        { title: 'localStorage',                              preview: 'Persists across reloads.' },
        { title: 'sessionStorage',                            preview: 'This tab only.' },
        { title: 'difference between local and session',      preview: 'Persistence scope.' },
        { title: 'key/value storage',                         preview: 'Like a string-only object.' },
        { title: 'values stored as strings',                  preview: 'Everything becomes a string.' },
        { title: 'setItem()',                                 preview: 'Save a value.' },
        { title: 'getItem()',                                 preview: 'Read a value.' },
        { title: 'removeItem()',                              preview: 'Delete a key.' },
        { title: 'clear()',                                   preview: 'Wipe everything.' },
        { title: 'checking stored values in DevTools',        preview: 'Application tab.' },
        { title: 'saving strings',                            preview: 'The simplest case.' },
        { title: 'saving booleans as strings',               preview: '"true" / "false".' },
        { title: 'saving arrays/objects with stringify',      preview: 'JSON.stringify before save.' },
        { title: 'reading arrays/objects with parse',         preview: 'JSON.parse after read.' },
        { title: 'localStorage returning null',               preview: 'When key does not exist.' },
        { title: 'common mistakes',                           preview: 'Storing object directly, forgetting JSON, misspelling key.' },
        { title: 'debugging storage',                         preview: 'log getItem, inspect Application tab, check key spelling.' }
      ], TOPIC_CARD_CHUNKS)
    },

    // -------- 3.16 JSON --------
    {
      groupTitle: '3.16 JSON',
      groupPreview: 'Data as text — APIs and storage.',
      items: withChunks([
        { title: 'what JSON is',                              preview: 'Data text format.' },
        { title: 'JSON as data text',                         preview: 'String form of data.' },
        { title: 'JSON vs JavaScript object',                 preview: 'Text vs live object.' },
        { title: 'why JSON exists',                           preview: 'Universal data exchange.' },
        { title: 'where JSON appears',                        preview: 'APIs, localStorage, config files.' },
        { title: 'JSON.stringify()',                          preview: 'JS value → JSON string.' },
        { title: 'JSON.parse()',                              preview: 'JSON string → JS value.' },
        { title: 'stringify = JS to JSON',                    preview: 'The direction.' },
        { title: 'parse = JSON to JS',                        preview: 'The other direction.' },
        { title: 'JSON syntax rules',                         preview: 'Double quotes, no functions, no comments.' },
        { title: 'storing arrays/objects in localStorage',    preview: 'stringify before save.' },
        { title: 'reading API data',                          preview: 'response.json().' },
        { title: 'common mistakes',                           preview: 'Forget stringify/parse, invalid JSON, confusing string and object.' },
        { title: 'debugging JSON',                            preview: 'log typeof, try/catch parse, inspect raw string.' }
      ], TOPIC_CARD_CHUNKS)
    },

    // -------- 3.17 Async --------
    {
      groupTitle: '3.17 Async',
      groupPreview: 'Code that takes time.',
      items: withChunks([
        { title: 'what async means',                          preview: "Code that doesn't finish instantly." },
        { title: 'code that takes time',                      preview: 'The mental model.' },
        { title: 'setTimeout()',                              preview: 'Run once after a delay.' },
        { title: 'setInterval()',                             preview: 'Brief mention.' },
        { title: 'promises',                                  preview: 'Object representing a future value.' },
        { title: 'promise states',                            preview: 'Pending, fulfilled, rejected.' },
        { title: 'then()',                                    preview: 'After resolved.' },
        { title: 'catch()',                                   preview: 'After rejected.' },
        { title: 'finally()',                                 preview: 'After settled either way.' },
        { title: 'fetch()',                                   preview: 'Make an HTTP request.' },
        { title: 'response',                                  preview: 'What fetch returns.' },
        { title: 'response.json()',                           preview: 'Parse the response body.' },
        { title: 'async function',                            preview: 'Returns a promise.' },
        { title: 'await',                                     preview: 'Pause until promise resolves.' },
        { title: 'try/catch with async',                      preview: 'Handle errors.' },
        { title: 'waiting for API data',                      preview: 'The common pattern.' },
        { title: 'using data after it loads',                 preview: "Don't use it before it exists." },
        { title: 'loading states',                            preview: '"Loading..." UI.' },
        { title: 'error states',                              preview: 'Show user when it fails.' },
        { title: 'common mistakes',                           preview: 'Forget await, use data too early, miss response.json().' },
        { title: 'debugging async',                           preview: 'log before/after await, Network tab, catch errors.' }
      ], TOPIC_CARD_CHUNKS)
    },

    // -------- 3.18 Errors --------
    {
      groupTitle: '3.18 Errors',
      groupPreview: 'Errors as clues.',
      items: withChunks([
        { title: 'what errors are',                           preview: 'Signals that something went wrong.' },
        { title: 'errors as clues',                           preview: 'They point to the problem.' },
        { title: 'syntax errors',                             preview: "Code JS can't parse." },
        { title: 'reference errors',                          preview: "Used something that doesn't exist." },
        { title: 'type errors',                               preview: 'Wrong type used.' },
        { title: 'logic errors',                              preview: 'Code runs but wrong result.' },
        { title: 'Error object',                              preview: 'Built-in error class.' },
        { title: 'TypeError',                                 preview: 'Specific type error.' },
        { title: 'ReferenceError',                            preview: 'Specific reference error.' },
        { title: 'console.error()',                           preview: 'Log a red error message.' },
        { title: 'try/catch',                                 preview: 'Handle errors gracefully.' },
        { title: 'throw',                                     preview: 'Beginner-friendly intro.' },
        { title: 'reading error messages',                    preview: 'Name, message, location.' },
        { title: 'file name',                                 preview: 'Where it happened.' },
        { title: 'line number',                               preview: 'Exactly which line.' },
        { title: 'stack trace',                               preview: 'Beginner-friendly intro.' },
        { title: 'common errors',                             preview: 'is not defined, Cannot read properties, Unexpected token.' },
        { title: 'common mistakes',                           preview: 'Ignoring message, only reading last line, no logging.' },
        { title: 'debugging errors',                          preview: 'Read message, find line, log value, check type, simplify.' }
      ], TOPIC_CARD_CHUNKS)
    }
  ],

  // ---- Topic Combo Guide (Section 4) ----
  // 12 topics per Prompt 1 sections 4.1–3.12.
  // Every lesson gets the Topic Combo Guide Structure (12 Pieces)
  // applied as Level 3 sub-shells via withCard().
  combos: [

    // -------- 4.1 Variable Combos --------
    {
      groupTitle: '4.1 Variable Combos',
      groupPreview: 'Storage containers for data.',
      items: withCombo([
        { title: 'Variables + Strings',   preview: 'Storing text, string vs variable, template literals.' },
        { title: 'Variables + Numbers',   preview: 'Counters, totals, string number vs real number.' },
        { title: 'Variables + Booleans',  preview: 'isOpen / isActive / hasError, toggle state.' },
        { title: 'Variables + Arrays',    preview: 'Storing lists, accessing and updating arrays.' },
        { title: 'Variables + Objects',   preview: 'Storing grouped data, accessing properties.' },
        { title: 'Variables + Functions', preview: 'Inside, outside, storing function results.' },
        { title: 'Variables + If / Else', preview: 'Checking variable values, validation.' },
        { title: 'Variables + Loops',     preview: 'Loop counters, current values, repeated updates.' },
        { title: 'Variables + DOM',       preview: 'Storing selected elements, null debugging.' },
        { title: 'Variables + Events',    preview: 'Variables inside handlers, event-driven state.' }
      ], TOPIC_COMBO_GUIDE)
    },

    // -------- 4.2 Functions Combos --------
    {
      groupTitle: '4.2 Functions Combos',
      groupPreview: 'How functions combine with other topics.',
      items: withCombo([
        { title: 'Functions + Variables',  preview: 'See "Variables + Functions"', crossRef: 'Variables + Functions' },
        { title: 'Functions + Parameters', preview: 'Placeholders, reusable input, arguments.' },
        { title: 'Functions + Return',     preview: 'Sending values back vs console.log.' },
        { title: 'Functions + If / Else',  preview: 'Decisions inside functions, validation helpers.' },
        { title: 'Functions + Loops',      preview: 'Functions that repeat work, loops inside functions.' },
        { title: 'Functions + Arrays',     preview: 'Functions receiving arrays, array method callbacks.' },
        { title: 'Functions + Objects',    preview: 'Functions receiving objects, reading properties.' },
        { title: 'Functions + DOM',        preview: 'Functions that update HTML, reusable DOM updates.' },
        { title: 'Functions + Events',     preview: 'Event handler functions, passing references.' },
        { title: 'Functions + Forms',      preview: 'Validation functions, submit handlers.' },
        { title: 'Functions + Async',      preview: 'Async functions, fetch helpers, try/catch.' }
      ], TOPIC_COMBO_GUIDE)
    },

    // -------- 4.3 Arrays Combos --------
    {
      groupTitle: '4.3 Arrays Combos',
      groupPreview: 'How arrays combine with other topics.',
      items: withCombo([
        { title: 'Arrays + Variables',    preview: 'See "Variables + Arrays"', crossRef: 'Variables + Arrays' },
        { title: 'Arrays + Indexes',      preview: 'First item, last item, index starts at 0.' },
        { title: 'Arrays + Loops',        preview: 'for loops, forEach(), current item.' },
        { title: 'Arrays + Functions',    preview: 'See "Functions + Arrays"', crossRef: 'Functions + Arrays' },
        { title: 'Arrays + Array Methods',preview: 'map, filter, reduce, find, includes.' },
        { title: 'Arrays + Objects',      preview: 'Arrays of objects, product/user/card data.' },
        { title: 'Arrays + DOM',          preview: 'Rendering lists/cards, repeated HTML.' },
        { title: 'Arrays + Events',       preview: 'Updating arrays from clicks/forms, deletion.' },
        { title: 'Arrays + LocalStorage', preview: 'Saving arrays via JSON.stringify / parse.' },
        { title: 'Arrays + JSON',         preview: 'Arrays from APIs, arrays as JSON data.' }
      ], TOPIC_COMBO_GUIDE)
    },

    // -------- 4.4 Objects Combos --------
    {
      groupTitle: '4.4 Objects Combos',
      groupPreview: 'How objects combine with other topics.',
      items: withCombo([
        { title: 'Objects + Variables',   preview: 'See "Variables + Objects"', crossRef: 'Variables + Objects' },
        { title: 'Objects + Properties',  preview: 'Key/value pairs, dot vs bracket notation.' },
        { title: 'Objects + Methods',     preview: 'Functions inside objects, this intro.' },
        { title: 'Objects + Arrays',      preview: 'See "Arrays + Objects"', crossRef: 'Arrays + Objects' },
        { title: 'Objects + Functions',   preview: 'See "Functions + Objects"', crossRef: 'Functions + Objects' },
        { title: 'Objects + Loops',       preview: 'Looping Object.keys(), Object.entries().' },
        { title: 'Objects + DOM',         preview: 'Displaying object data, product/user cards.' },
        { title: 'Objects + JSON',        preview: 'Stringify/parse objects, storage and APIs.' },
        { title: 'Objects + APIs',        preview: 'API responses as objects, nested response data.' }
      ], TOPIC_COMBO_GUIDE)
    },

    // -------- 4.5 Strings Combos --------
    {
      groupTitle: '4.5 Strings Combos',
      groupPreview: 'How strings combine with other topics.',
      items: withCombo([
        { title: 'Strings + Variables',     preview: 'See "Variables + Strings"', crossRef: 'Variables + Strings' },
        { title: 'Strings + Indexes',       preview: 'Character positions, index starts at 0.' },
        { title: 'Strings + Loops',         preview: 'Looping through characters.' },
        { title: 'Strings + If / Else',     preview: 'Checking text, validation, includes().' },
        { title: 'Strings + String Methods',preview: 'trim, includes, replace, split, toLowerCase.' },
        { title: 'Strings + Forms',         preview: 'Input values as strings, trim, validation.' },
        { title: 'Strings + Input Values',  preview: '.value, reading typed text.' },
        { title: 'Strings + DOM Text',      preview: 'textContent, dynamic messages, template literals.' }
      ], TOPIC_COMBO_GUIDE)
    },

    // -------- 4.6 Booleans Combos --------
    {
      groupTitle: '4.6 Booleans Combos',
      groupPreview: 'How booleans combine with other topics.',
      items: withCombo([
        { title: 'Booleans + Variables',        preview: 'See "Variables + Booleans"', crossRef: 'Variables + Booleans' },
        { title: 'Booleans + If / Else',        preview: 'Branching with true/false.' },
        { title: 'Booleans + Comparisons',      preview: 'Comparisons return booleans.' },
        { title: 'Booleans + Logical Operators',preview: '&&, ||, ! operators.' },
        { title: 'Booleans + Functions',        preview: 'Functions returning true/false.' },
        { title: 'Booleans + Forms',            preview: 'Validation states.' },
        { title: 'Booleans + Events',           preview: 'Toggles after click.' },
        { title: 'Booleans + Toggle States',    preview: 'Menu open/closed, dark mode on/off.' }
      ], TOPIC_COMBO_GUIDE)
    },

    // -------- 4.7 If / Else Combos --------
    {
      groupTitle: '4.7 If / Else Combos',
      groupPreview: 'How if/else combines with other topics.',
      items: withCombo([
        { title: 'If / Else + Variables',   preview: 'See "Variables + If / Else"', crossRef: 'Variables + If / Else' },
        { title: 'If / Else + Booleans',    preview: 'See "Booleans + If / Else"', crossRef: 'Booleans + If / Else' },
        { title: 'If / Else + Comparisons', preview: '===, >, <, >=, <= in conditions.' },
        { title: 'If / Else + Functions',   preview: 'See "Functions + If / Else"', crossRef: 'Functions + If / Else' },
        { title: 'If / Else + Loops',       preview: 'Conditional work while looping.' },
        { title: 'If / Else + Arrays',      preview: 'Checking length, includes, find results.' },
        { title: 'If / Else + Strings',     preview: 'See "Strings + If / Else"', crossRef: 'Strings + If / Else' },
        { title: 'If / Else + Forms',       preview: 'Validation branches.' },
        { title: 'If / Else + Events',      preview: 'User action decisions.' },
        { title: 'If / Else + DOM',         preview: 'Show/hide messages, add/remove classes.' }
      ], TOPIC_COMBO_GUIDE)
    },

    // -------- 4.8 Loops Combos --------
    {
      groupTitle: '4.8 Loops Combos',
      groupPreview: 'How loops combine with other topics.',
      items: withCombo([
        { title: 'Loops + Variables', preview: 'See "Variables + Loops"', crossRef: 'Variables + Loops' },
        { title: 'Loops + Arrays',    preview: 'See "Arrays + Loops"',    crossRef: 'Arrays + Loops' },
        { title: 'Loops + Strings',   preview: 'See "Strings + Loops"',   crossRef: 'Strings + Loops' },
        { title: 'Loops + Objects',   preview: 'See "Objects + Loops"',   crossRef: 'Objects + Loops' },
        { title: 'Loops + If / Else', preview: 'See "If / Else + Loops"', crossRef: 'If / Else + Loops' },
        { title: 'Loops + Functions', preview: 'See "Functions + Loops"', crossRef: 'Functions + Loops' },
        { title: 'Loops + DOM',       preview: 'Create repeated elements.' },
        { title: 'Nested Loops',      preview: 'Comparing two lists, grid combinations.' }
      ], TOPIC_COMBO_GUIDE)
    },

    // -------- 4.9 DOM Combos --------
    {
      groupTitle: '4.9 DOM Combos',
      groupPreview: 'How the DOM combines with other topics.',
      items: withCombo([
        { title: 'DOM + Variables',   preview: 'See "Variables + DOM"',  crossRef: 'Variables + DOM' },
        { title: 'DOM + Functions',   preview: 'See "Functions + DOM"',  crossRef: 'Functions + DOM' },
        { title: 'DOM + Events',      preview: 'Click/input/submit behavior.' },
        { title: 'DOM + If / Else',   preview: 'See "If / Else + DOM"',  crossRef: 'If / Else + DOM' },
        { title: 'DOM + Arrays',      preview: 'See "Arrays + DOM"',     crossRef: 'Arrays + DOM' },
        { title: 'DOM + Objects',     preview: 'See "Objects + DOM"',    crossRef: 'Objects + DOM' },
        { title: 'DOM + Forms',       preview: 'Read and show input values.' },
        { title: 'DOM + CSS Classes', preview: 'classList add/remove/toggle.' },
        { title: 'DOM + Browser APIs',preview: 'localStorage, fetch results.' }
      ], TOPIC_COMBO_GUIDE)
    },

    // -------- 4.10 Events Combos --------
    {
      groupTitle: '4.10 Events Combos',
      groupPreview: 'How events combine with other topics.',
      items: withCombo([
        { title: 'Events + DOM',          preview: 'See "DOM + Events"',       crossRef: 'DOM + Events' },
        { title: 'Events + Functions',    preview: 'See "Functions + Events"', crossRef: 'Functions + Events' },
        { title: 'Events + Variables',    preview: 'See "Variables + Events"', crossRef: 'Variables + Events' },
        { title: 'Events + If / Else',    preview: 'See "If / Else + Events"', crossRef: 'If / Else + Events' },
        { title: 'Events + Forms',        preview: 'Submit and input events.' },
        { title: 'Events + Input Values', preview: 'Reading user typed values.' },
        { title: 'Events + Arrays',       preview: 'See "Arrays + Events"',    crossRef: 'Arrays + Events' },
        { title: 'Events + Objects',      preview: 'Event-driven object updates.' },
        { title: 'Events + LocalStorage', preview: 'Save after user action.' }
      ], TOPIC_COMBO_GUIDE)
    },

    // -------- 4.11 Forms Combos --------
    {
      groupTitle: '4.11 Forms Combos',
      groupPreview: 'How forms combine with other topics.',
      items: withCombo([
        { title: 'Forms + DOM',           preview: 'See "DOM + Forms"',       crossRef: 'DOM + Forms' },
        { title: 'Forms + Events',        preview: 'See "Events + Forms"',    crossRef: 'Events + Forms' },
        { title: 'Forms + Input Values',  preview: '.value, trim().' },
        { title: 'Forms + Variables',     preview: 'Store typed values.' },
        { title: 'Forms + If / Else',     preview: 'See "If / Else + Forms"', crossRef: 'If / Else + Forms' },
        { title: 'Forms + Functions',     preview: 'See "Functions + Forms"', crossRef: 'Functions + Forms' },
        { title: 'Forms + Objects',       preview: 'Create form data objects.' },
        { title: 'Forms + Arrays',        preview: 'Add submitted data to a list.' },
        { title: 'Forms + LocalStorage',  preview: 'Save submitted data.' }
      ], TOPIC_COMBO_GUIDE)
    },

    // -------- 4.12 Async Combos --------
    {
      groupTitle: '4.12 Async Combos',
      groupPreview: 'How async combines with other topics.',
      items: (withCombo[
        { title: 'Async + Functions',   preview: 'See "Functions + Async"', crossRef: 'Functions + Async' },
        { title: 'Async + Promises',    preview: 'Pending, fulfilled, rejected.' },
        { title: 'Async + Fetch',       preview: 'API requests.' },
        { title: 'Async + JSON',        preview: 'response.json() pattern.' },
        { title: 'Async + Try / Catch', preview: 'Handling errors during await.' },
        { title: 'Async + DOM',         preview: 'Render data after loading.' },
        { title: 'Async + Arrays',      preview: 'API lists.' },
        { title: 'Async + Objects',     preview: 'API objects, nested data.' }
      ], TOPIC_COMBO_GUIDE)
    }
  ],

  // ---- Method / Snippet Reference (Section 5) ----
  // 16 category accordions per Prompt 1 sections 5.1–5.16.
  // Each method/property/syntax-piece is a flat accordion
  // inside its category — no third level of nesting.
  // Set and Map are listed flat within 5.15 (e.g., Set, Set.add(),
  // Map, Map.get()) per the agreed convention.


/* SECTION 5 — paste inside DEEP_TOPICS.methods */


 // -------- 5.1 DOM Methods --------

methods: [     
  group('5.1 DOM Methods', 'Methods used to select, create, add, remove, and update DOM elements.', [
    method('getElementById()', 'Selects one element by its id.', [
      ['id selection', 'Selects an element using its id name.'],
      ['no # needed', 'Use "app", not "#app".'],
      ['returns one element or null', 'Returns the found element, or null if no match exists.'],
    ]),

    method('querySelector()', 'Selects the first element that matches a CSS selector.', [
      ['CSS selector string', 'Uses CSS selector syntax inside quotes.'],
      ['.class, #id, tag', 'Can select by class, id, or tag.'],
      ['returns first match or null', 'Returns only the first match, or null if none exists.'],
    ]),

    method('querySelectorAll()', 'Selects all elements that match a CSS selector.', [
      ['returns NodeList', 'Returns a NodeList instead of one element.'],
      ['multiple elements', 'Used when more than one element can match.'],
      ['forEach on NodeList', 'NodeLists can usually be looped with forEach().'],
    ]),

    method('createElement()', 'Creates a new HTML element in JavaScript memory.', [
      ['creates new element in memory', 'The element exists in JavaScript first.'],
      ['does not display until appended', 'The element must be added to the DOM before it appears on the page.'],
    ]),

    method('appendChild()', 'Adds a child node to a parent element.', [
      ['adds child element', 'Places one node inside another node.'],
      ['moves existing node if reused', 'If the node already exists, appendChild() moves it instead of copying it.'],
    ]),

    method('append()', 'Adds nodes or strings to a parent element.', [
      ['can append nodes', 'Can add actual DOM nodes.'],
      ['can append strings', 'Can also add text strings directly.'],
    ]),

    method('remove()', 'Removes an element from the DOM.', [
      ['removes element from DOM', 'Deletes the selected element from the page structure.'],
    ]),

    method('cloneNode()', 'Copies a DOM node.', [
      ['shallow clone', 'Copies only the element itself.'],
      ['deep clone', 'Copies the element and its children when true is passed.'],
    ]),

    method('setAttribute()', 'Adds or updates an attribute on an element.', [
      ['add/update attribute', 'Creates an attribute if missing or changes it if it already exists.'],
    ]),

    method('getAttribute()', 'Reads an attribute value from an element.', [
      ['read attribute', 'Gets the current value of an attribute.'],
    ]),

    method('removeAttribute()', 'Removes an attribute from an element.', [
      ['remove attribute', 'Deletes the attribute from the element.'],
    ]),

  ]),
  
  
  // -------- 5.2 DOM Properties --------


  group('5.2 DOM Properties', 'Properties used to read or change DOM content, styles, classes, and values.', [
    method('textContent', 'Reads or changes safe text content.', [
      ['safe text changes', 'Changes text without parsing it as HTML.'],
      ['does not parse HTML', 'HTML-like text is treated as plain text.'],
    ]),

    method('innerHTML', 'Reads or writes HTML inside an element.', [
      ['inserts HTML', 'Can add real HTML markup into an element.'],
      ['security warning', 'Can be unsafe if used with user input.'],
    ]),

    method('style', 'Changes inline CSS styles from JavaScript.', [
      ['inline style changes', 'Adds styles directly on the element.'],
      ['CSS property camelCase', 'CSS properties like background-color become backgroundColor in JS.'],
    ]),

    method('className', 'Reads or replaces the full class string.', [
      ['replaces full class string', 'Setting className overwrites all existing classes.'],
    ]),

    method('classList', 'Adds, removes, toggles, and checks classes.', [
      ['add()', 'Adds a class.'],
      ['remove()', 'Removes a class.'],
      ['toggle()', 'Turns a class on/off.'],
      ['contains()', 'Checks if a class exists.'],
    ]),

    method('value', 'Reads or changes the value of a form input.', [
      ['form input value', 'Gets what the user typed or selected.'],
      ['usually string', 'Input values usually come in as strings, even when they look like numbers.'],
    ]),

  ]),


  // -------- 5.3 Event Methods / Properties --------


  group('5.3 Event Methods / Properties', 'Methods and properties used to listen for and control events.', [
    method('addEventListener()', 'Runs a function when an event happens.', [
      ['event type string', 'The event name is written as a string like "click" or "submit".'],
      ['callback', 'The function that runs when the event happens.'],
      ['function reference vs call', 'Pass the function name, not the result of calling it.'],
      ['event object', 'The browser can pass event details into the callback.'],
    ]),

    method('preventDefault()', 'Stops default browser behavior.', [
      ['stops default browser behavior', 'Prevents actions like form reloads or link navigation.'],
      ['forms/page refresh', 'Commonly used to stop forms from refreshing the page.'],
    ]),

    method('event.target', 'The element that triggered the event.', [
      ['element that triggered event', 'Points to the actual element the user interacted with.'],
    ]),

    method('event.currentTarget', 'The element the listener is attached to.', [
      ['listener element', 'Points to the element that owns the event listener.'],
    ]),

  ]),
    

// -------- 5.4 Console --------


  group('5.4 Console', 'Console tools used to inspect values and debug JavaScript.', [
    method('console.log()', 'Prints values to the console.', [
      ['inspect values', 'Shows what a value is at a specific moment.'],
    ]),

    method('console.warn()', 'Prints a warning message.', [
      ['warning messages', 'Shows a warning without stopping the program.'],
    ]),

    method('console.error()', 'Prints an error-style message.', [
      ['error messages', 'Shows a red error-style message in the console.'],
    ]),

    method('console.table()', 'Displays arrays/objects as a table.', [
      ['view arrays/objects as table', 'Makes structured data easier to scan.'],
    ]),

    method('console.dir()', 'Inspects object or DOM structure.', [
      ['inspect object/DOM structure', 'Shows expandable object or DOM details.'],
    ]),

    method('typeof', 'Checks the type of a value.', [
      ['check type', 'Returns a string like "string", "number", or "boolean".'],
    ]),

    method('debugger', 'Pauses JavaScript execution in DevTools.', [
      ['pause execution', 'Stops code at that line when DevTools is open.'],
    ]),

  ]),

  
  // -------- 5.5 Window / Browser --------


  group('5.5 Window / Browser', 'Browser/window tools and timing functions.', [
    method('window.innerWidth', 'Gets the viewport width.', [
      ['browser width', 'Returns the visible browser window width.'],
    ]),

    method('window.innerHeight', 'Gets the viewport height.', [
      ['browser height', 'Returns the visible browser window height.'],
    ]),

    method('window.location.href', 'Reads or changes the current page URL.', [
      ['current URL', 'Can read the current page address.'],
      ['redirect page', 'Can send the browser to a different URL.'],
    ]),

    method('alert()', 'Shows a browser alert box.', [
      ['message popup', 'Displays a simple message to the user.'],
    ]),

    method('confirm()', 'Shows an OK/Cancel dialog.', [
      ['yes/no browser dialog', 'Asks the user to confirm something.'],
      ['returns boolean', 'Returns true for OK and false for Cancel.'],
    ]),

    method('prompt()', 'Asks the user for text input.', [
      ['browser text input', 'Shows a simple input dialog.'],
      ['returns string or null', 'Returns typed text, or null if canceled.'],
    ]),

    method('setTimeout()', 'Runs code once after a delay.', [
      ['delayed code', 'Waits a set amount of time before running.'],
      ['runs once', 'Only runs one time unless called again.'],
    ]),

    method('setInterval()', 'Runs code repeatedly after a delay.', [
      ['repeating code', 'Runs again and again at an interval.'],
      ['must be cleared', 'Usually paired with clearInterval().'],
    ]),

    method('clearTimeout()', 'Cancels a timeout before it runs.', [
      ['cancel delayed code', 'Stops a setTimeout if it has not run yet.'],
    ]),

    method('clearInterval()', 'Stops a repeating interval.', [
      ['stop repeated code', 'Cancels a setInterval loop.'],
    ]),

  ]),


  // -------- 5.6 Storage --------


  group('5.6 Storage', 'Browser storage methods for saving and reading data.', [
    method('localStorage.setItem()', 'Saves a value in localStorage.', [
      ['save key/value pair', 'Stores data using a key name and string value.'],
      ['persists after reload', 'Data stays after the page refreshes.'],
    ]),

    method('localStorage.getItem()', 'Reads a value from localStorage.', [
      ['read by key', 'Gets the value stored under a key.'],
      ['returns string or null', 'Returns a string, or null if the key does not exist.'],
    ]),

    method('localStorage.removeItem()', 'Removes one item from localStorage.', [
      ['remove by key', 'Deletes a single stored value.'],
    ]),

    method('localStorage.clear()', 'Clears all localStorage data for the site.', [
      ['clear all storage', 'Deletes every localStorage key for this origin.'],
    ]),

    method('sessionStorage.setItem()', 'Saves a value for the current browser tab session.', [
      ['session-only save', 'Stores data until the tab/session ends.'],
    ]),

    method('sessionStorage.getItem()', 'Reads a value from sessionStorage.', [
      ['read session data', 'Gets a session value by key.'],
    ]),

  ]),


  // -------- 5.7 Array Methods --------


  group('5.7 Array Methods', 'Methods used to add, remove, search, loop, transform, and sort arrays.', [
    method('push()', 'Adds item(s) to the end of an array.', [
      ['adds to end', 'Places new items after the last item.'],
      ['mutates original array', 'Changes the original array.'],
      ['returns new length', 'Returns a number, not the array.'],
    ]),

    method('pop()', 'Removes the last item from an array.', [
      ['removes from end', 'Takes off the last item.'],
      ['returns removed item', 'Gives back the item that was removed.'],
    ]),

    method('shift()', 'Removes the first item from an array.', [
      ['removes from start', 'Takes off the first item.'],
      ['returns removed item', 'Gives back the removed first item.'],
    ]),

    method('unshift()', 'Adds item(s) to the start of an array.', [
      ['adds to start', 'Places new items before the first item.'],
      ['returns new length', 'Returns the updated array length.'],
    ]),

    method('slice()', 'Copies part of an array.', [
      ['copies a portion', 'Returns selected items from the array.'],
      ['does not mutate original', 'Leaves the original array unchanged.'],
    ]),

    method('splice()', 'Adds/removes items at a specific index.', [
      ['changes array at index', 'Can remove or insert items in the middle.'],
      ['mutates original array', 'Changes the original array.'],
    ]),

    method('map()', 'Creates a new array by transforming every item.', [
      ['transforms every item', 'Runs a callback for each item.'],
      ['returns new array', 'Does not change the original array.'],
    ]),

    method('filter()', 'Creates a new array with only matching items.', [
      ['keeps matching items', 'Callback returns true to keep an item.'],
      ['returns new array', 'Original array stays unchanged.'],
    ]),

    method('reduce()', 'Combines array items into one final value.', [
      ['accumulator', 'Carries the running result.'],
      ['returns one value', 'Often used for totals or summaries.'],
    ]),

    method('forEach()', 'Runs a function once for each array item.', [
      ['loops array items', 'Runs callback for every item.'],
      ['does not return new array', 'Used for side effects like rendering/logging.'],
    ]),

    method('includes()', 'Checks whether an array contains a value.', [
      ['checks for value', 'Returns true if the value exists.'],
      ['returns boolean', 'Gives true or false.'],
    ]),

    method('indexOf()', 'Finds the index of a value in an array.', [
      ['returns index', 'Returns the position of the first match.'],
      ['returns -1 if missing', '-1 means the value was not found.'],
    ]),

    method('find()', 'Returns the first item that matches a condition.', [
      ['first matching item', 'Stops at the first true callback result.'],
      ['returns item or undefined', 'Gives the item, or undefined if none match.'],
    ]),

    method('findIndex()', 'Returns the index of the first matching item.', [
      ['first matching index', 'Finds the position of the first match.'],
      ['returns -1 if missing', '-1 means no item matched.'],
    ]),

    method('sort()', 'Sorts array items.', [
      ['sorts in place', 'Mutates the original array.'],
      ['compare function', 'Needed for reliable number/object sorting.'],
    ]),

    method('reverse()', 'Reverses the order of array items.', [
      ['reverses in place', 'Mutates the original array.'],
      ['last becomes first', 'Changes item order from end-to-start.'],
    ]),

  ]),
  
  
  // -------- 5.8 String Methods / Properties / Syntax Tools --------


  group('5.8 String Methods / Properties / Syntax Tools', 'Tools for reading, checking, changing, and building strings.', [
    method('length', 'Gets the number of characters in a string.', [
      ['character count', 'Counts characters in the string.'],
      ['property not method', 'Use .length, not .length().'],
    ]),

    method('charAt()', 'Gets the character at a specific index.', [
      ['index-based character', 'Reads one character at a position.'],
      ['index starts at 0', 'The first character is index 0.'],
    ]),

    method('includes()', 'Checks whether a string contains text.', [
      ['search text', 'Checks if one string appears inside another.'],
      ['case sensitive', 'Uppercase/lowercase matters.'],
    ]),

    method('indexOf()', 'Finds the index of text inside a string.', [
      ['returns index', 'Returns where the match starts.'],
      ['returns -1 if missing', '-1 means not found.'],
    ]),

    method('slice()', 'Copies part of a string.', [
      ['extract substring', 'Returns part of the string.'],
      ['does not change original', 'Strings are not mutated.'],
    ]),

    method('substring()', 'Returns part of a string between indexes.', [
      ['extract substring', 'Gets characters between two indexes.'],
    ]),

    method('toLowerCase()', 'Converts string to lowercase.', [
      ['lowercase version', 'Returns a lowercase string.'],
      ['useful for comparisons', 'Helps make search/checks case-insensitive.'],
    ]),

    method('toUpperCase()', 'Converts string to uppercase.', [
      ['uppercase version', 'Returns an uppercase string.'],
    ]),

    method('trim()', 'Removes whitespace from both ends of a string.', [
      ['remove edge spaces', 'Removes spaces before/after text.'],
      ['form validation helper', 'Useful before checking empty input.'],
    ]),

    method('replace()', 'Replaces matching text.', [
      ['replace first match', 'By default replaces the first match.'],
      ['can use RegExp', 'Can replace patterns with regular expressions.'],
    ]),

    method('split()', 'Splits a string into an array.', [
      ['string to array', 'Breaks text into pieces.'],
      ['separator matters', 'The separator decides where to split.'],
    ]),

    method('startsWith()', 'Checks whether a string starts with specific text.', [
      ['checks beginning', 'Returns true if string starts with given text.'],
    ]),

    method('endsWith()', 'Checks whether a string ends with specific text.', [
      ['checks ending', 'Returns true if string ends with given text.'],
    ]),

    method('repeat()', 'Repeats a string a number of times.', [
      ['repeat text', 'Creates a new string by repeating the original.'],
    ]),

    method('template literals', 'Strings written with backticks.', [
      ['backticks', 'Use ` instead of quotes.'],
      ['supports interpolation', 'Can insert values with ${}.'],
      ['supports multiline strings', 'Can span multiple lines.'],
    ]),

    method('${} interpolation', 'Inserts values inside template literals.', [
      ['only works in backticks', 'Does not work inside single/double quotes.'],
      ['dynamic strings', 'Useful for messages, HTML strings, and UI text.'],
    ]),

  ]),

  
  // -------- 5.9 Object Methods --------
   
  
  group('5.9 Object Methods', 'Methods for reading, copying, freezing, and checking objects.', [
    method('Object.keys()', 'Returns an array of object keys.', [
      ['keys as array', 'Gets property names.'],
    ]),

    method('Object.values()', 'Returns an array of object values.', [
      ['values as array', 'Gets property values.'],
    ]),

    method('Object.entries()', 'Returns an array of key/value pairs.', [
      ['entries as pairs', 'Returns arrays like [key, value].'],
    ]),

    method('Object.assign()', 'Copies properties from one object into another.', [
      ['copy properties', 'Copies enumerable properties.'],
      ['mutates target object', 'The first object receives the copied properties.'],
    ]),

    method('Object.freeze()', 'Prevents changes to an object.', [
      ['freeze object', 'Prevents adding, removing, or changing properties.'],
      ['shallow freeze', 'Nested objects can still change unless also frozen.'],
    ]),

    method('Object.seal()', 'Prevents adding/removing properties but allows changes.', [
      ['seal object shape', 'Keeps existing properties but prevents new/deleted ones.'],
    ]),

    method('Object.is()', 'Compares whether two values are the same value.', [
      ['same-value comparison', 'Similar to strict equality with special edge cases.'],
    ]),

  ]),


  // -------- 5.10 Number / Math --------


  group('5.10 Number / Math', 'Number conversion, formatting, checking, and Math tools.', [
    method('Number.parseInt()', 'Parses an integer from a string.', [
      ['string to whole number', 'Converts leading numeric text into an integer.'],
    ]),

    method('Number.parseFloat()', 'Parses a decimal number from a string.', [
      ['string to decimal number', 'Converts numeric text into a floating-point number.'],
    ]),

    method('toFixed()', 'Formats a number with fixed decimal places.', [
      ['decimal formatting', 'Controls how many decimals show.'],
      ['returns string', 'Important: output is a string, not a number.'],
    ]),

    method('toString()', 'Converts a value to a string.', [
      ['number to string', 'Turns a number into text.'],
    ]),

    method('Number.isInteger()', 'Checks whether a value is an integer.', [
      ['whole number check', 'Returns true for whole numbers.'],
    ]),

    method('Number.isNaN()', 'Checks whether a value is NaN.', [
      ['NaN check', 'Checks for the special Not-a-Number value.'],
    ]),

    method('Number.isFinite()', 'Checks whether a value is a finite number.', [
      ['finite number check', 'Returns false for Infinity, -Infinity, and NaN.'],
    ]),

    method('Math.round()', 'Rounds to the nearest integer.', [
      ['nearest whole number', 'Rounds up or down based on decimal value.'],
    ]),

    method('Math.ceil()', 'Rounds up to the next integer.', [
      ['round up', 'Always rounds toward the next higher integer.'],
    ]),

    method('Math.floor()', 'Rounds down to the previous integer.', [
      ['round down', 'Always rounds toward the lower integer.'],
    ]),

    method('Math.max()', 'Returns the largest number.', [
      ['largest value', 'Finds the highest number from arguments.'],
    ]),

    method('Math.min()', 'Returns the smallest number.', [
      ['smallest value', 'Finds the lowest number from arguments.'],
    ]),

    method('Math.random()', 'Returns a random decimal from 0 up to 1.', [
      ['random decimal', 'Returns a number >= 0 and < 1.'],
      ['combine with Math.floor', 'Used to make random indexes or whole numbers.'],
    ]),

    method('Math.sqrt()', 'Returns the square root of a number.', [
      ['square root', 'Finds what number times itself equals the input.'],
    ]),

    method('Math.pow()', 'Raises a number to a power.', [
      ['exponent math', 'Calculates base to exponent.'],
      ['similar to **', 'Math.pow(2, 3) is similar to 2 ** 3.'],
    ]),

  ]),


  // -------- 5.11 Date --------


  group('5.11 Date', 'Date objects and date/time reading/formatting methods.', [
    method('new Date()', 'Creates a Date object.', [
      ['current date/time', 'Without arguments, creates now.'],
    ]),

    method('getFullYear()', 'Gets the four-digit year.', [
      ['year value', 'Returns values like 2026.'],
    ]),

    method('getMonth()', 'Gets the month index.', [
      ['month index', 'Returns 0 for January and 11 for December.'],
      ['common confusion', 'Month is zero-based.'],
    ]),

    method('getDate()', 'Gets the day of the month.', [
      ['day of month', 'Returns 1 through 31.'],
      ['not day of week', 'Different from getDay().'],
    ]),

    method('getDay()', 'Gets the day of the week index.', [
      ['weekday index', 'Returns 0 for Sunday through 6 for Saturday.'],
    ]),

    method('getHours()', 'Gets the hour.', [
      ['hour value', 'Returns 0 through 23.'],
    ]),

    method('getMinutes()', 'Gets the minutes.', [
      ['minute value', 'Returns 0 through 59.'],
    ]),

    method('getSeconds()', 'Gets the seconds.', [
      ['second value', 'Returns 0 through 59.'],
    ]),

    method('toISOString()', 'Formats a date as an ISO string.', [
      ['standard date string', 'Creates a format like 2026-04-29T...Z.'],
      ['UTC output', 'Uses UTC time, not local time.'],
    ]),

    method('toLocaleDateString()', 'Formats date for the user locale.', [
      ['localized date', 'Formats date based on locale/settings.'],
    ]),

    method('toLocaleTimeString()', 'Formats time for the user locale.', [
      ['localized time', 'Formats time based on locale/settings.'],
    ]),

  ]),


  // -------- 5.12 JSON --------


  group('5.12 JSON', 'Tools for converting between JavaScript values and JSON strings.', [
    method('JSON.parse()', 'Converts JSON text into JavaScript data.', [
      ['JSON string to JS value', 'Turns text into arrays/objects/values.'],
      ['valid JSON syntax', 'Input must be valid JSON.'],
      ['try/catch around parse', 'Invalid JSON can throw an error.'],
    ]),

    method('JSON.stringify()', 'Converts JavaScript data into JSON text.', [
      ['JS value to JSON string', 'Turns arrays/objects into text.'],
      ['needed for storage', 'localStorage can only store strings.'],
    ]),

  ]),

  
  // -------- 5.13 RegExp --------


  group('5.13 RegExp', 'Regular expression tools for matching, searching, and replacing patterns.', [
    method('test()', 'Checks whether a pattern matches a string.', [
      ['returns boolean', 'Returns true or false.'],
      ['pattern check', 'Useful for validation checks.'],
    ]),

    method('exec()', 'Runs a regex search and returns match details.', [
      ['match details', 'Returns match information or null.'],
    ]),

    method('match()', 'Finds matches in a string.', [
      ['string method', 'Called on a string with a regex.'],
    ]),

    method('replace()', 'Replaces matching text.', [
      ['replace pattern', 'Can replace regex matches.'],
    ]),

    method('search()', 'Finds the index of a regex match.', [
      ['match index', 'Returns where the match starts.'],
    ]),

    method('split()', 'Splits a string using a pattern.', [
      ['split by pattern', 'Can split text using regex rules.'],
    ]),

    method('flags: i, g', 'Common regex flags.', [
      ['i flag', 'Makes matching case-insensitive.'],
      ['g flag', 'Finds all matches instead of only first match.'],
    ]),

    method('basic pattern explanation', 'Intro to regex pattern meaning.', [
      ['pattern syntax', 'Regex patterns describe what text to match.'],
    ]),

  ]),


  // -------- 5.14 Promise / Async --------


  group('5.14 Promise / Async', 'Promise and async/await tools for code that takes time.', [
    method('Promise', 'Represents a future value.', [
      ['future value', 'A value that may arrive later.'],
      ['pending/fulfilled/rejected', 'Promises move through states.'],
    ]),

    method('Promise.resolve()', 'Creates an already fulfilled promise.', [
      ['fulfilled promise', 'Wraps a value in a resolved Promise.'],
    ]),

    method('Promise.reject()', 'Creates an already rejected promise.', [
      ['rejected promise', 'Creates a promise that failed.'],
    ]),

    method('Promise.all()', 'Waits for all promises to finish successfully.', [
      ['multiple promises', 'Runs several async operations together.'],
      ['fails if one rejects', 'Rejects when any included promise rejects.'],
    ]),

    method('Promise.race()', 'Settles when the first promise settles.', [
      ['first finished wins', 'Uses the first fulfilled or rejected promise.'],
    ]),

    method('then()', 'Runs after a promise fulfills.', [
      ['success handler', 'Receives the resolved value.'],
    ]),

    method('catch()', 'Runs after a promise rejects.', [
      ['error handler', 'Receives the error/rejection.'],
    ]),

    method('finally()', 'Runs after a promise settles either way.', [
      ['always runs', 'Runs after fulfilled or rejected.'],
      ['cleanup use', 'Useful for removing loading states.'],
    ]),

    method('async', 'Marks a function as asynchronous.', [
      ['async function', 'Always returns a promise.'],
      ['enables await', 'Lets you use await inside the function.'],
    ]),

    method('await', 'Waits for a promise inside an async function.', [
      ['wait for result', 'Pauses until promise resolves/rejects.'],
      ['only inside async', 'Must be used inside an async function or module context.'],
    ]),

    method('fetch()', 'Makes a network request.', [
      ['API request', 'Requests data from a URL.'],
      ['returns promise', 'You usually await the response.'],
    ]),

    method('response.json()', 'Reads response body as JSON.', [
      ['parse response body', 'Turns response body into JS data.'],
      ['must await', 'response.json() also returns a promise.'],
    ]),

    method('try/catch', 'Handles errors in async/await code.', [
      ['catch async errors', 'Catches rejected promises when using await.'],
    ]),

  ]),


  // -------- 5.15 Set / Map --------


  group('5.15 Set / Map', 'Set and Map collections for unique values and key/value data.', [
    method('Set', 'A collection of unique values.', [
      ['unique values', 'A Set keeps only one copy of each value.'],
    ]),

    method('Set.add()', 'Adds a value to a Set.', [
      ['add unique value', 'Adds the value if it is not already present.'],
    ]),

    method('Set.has()', 'Checks whether a Set contains a value.', [
      ['membership check', 'Returns true if the value exists.'],
    ]),

    method('Set.delete()', 'Removes a value from a Set.', [
      ['delete value', 'Removes the value if present.'],
    ]),

    method('Set.clear()', 'Removes all values from a Set.', [
      ['clear all values', 'Empties the entire Set.'],
    ]),

    method('Set.forEach()', 'Runs a function for each Set value.', [
      ['loop set values', 'Runs callback once per value.'],
    ]),

    method('Map', 'A key/value collection.', [
      ['key/value pairs', 'Stores values using keys.'],
      ['keys can be many types', 'Unlike plain objects, keys do not have to be strings.'],
    ]),

    method('Map.set()', 'Adds or updates a key/value pair.', [
      ['set key value', 'Creates or updates a value under a key.'],
    ]),

    method('Map.get()', 'Reads a value by key.', [
      ['get by key', 'Returns the value for the key.'],
      ['undefined if missing', 'Returns undefined when key is not found.'],
    ]),

    method('Map.has()', 'Checks whether a key exists.', [
      ['key exists check', 'Returns true if the key exists.'],
    ]),

    method('Map.delete()', 'Removes a key/value pair.', [
      ['delete by key', 'Removes one entry.'],
    ]),

    method('Map.clear()', 'Removes all entries from a Map.', [
      ['clear all entries', 'Empties the whole Map.'],
    ]),

    method('Map.forEach()', 'Runs a function for each Map entry.', [
      ['loop map entries', 'Runs callback for each value/key pair.'],
    ]),

    method('Map.keys()', 'Returns an iterator of Map keys.', [
      ['key iterator', 'Lets you loop over keys.'],
    ]),

    method('Map.values()', 'Returns an iterator of Map values.', [
      ['value iterator', 'Lets you loop over values.'],
    ]),

    method('Map.entries()', 'Returns an iterator of key/value pairs.', [
      ['entry iterator', 'Loops over [key, value] pairs.'],
    ]),

  ]),

                        

  // -------- 5.16 Special / Advanced --------


  group('5.16 Special / Advanced', 'Advanced and special JavaScript/browser tools to know exist.', [
    method('Symbol', 'Creates a unique primitive value.', [
      ['unique identifier', 'Each Symbol is unique.'],
    ]),

    method('Error', 'Base error object.', [
      ['error object', 'Represents something that went wrong.'],
    ]),

    method('TypeError', 'Error for wrong value/type usage.', [
      ['wrong type error', 'Happens when a value is used in an invalid way.'],
    ]),

    method('ReferenceError', 'Error for missing or inaccessible variables.', [
      ['missing reference', 'Happens when something is not defined.'],
    ]),

    method('ArrayBuffer', 'Raw binary data buffer.', [
      ['binary data', 'Stores raw bytes.'],
    ]),

    method('Uint8Array', 'Typed array for 8-bit unsigned integers.', [
      ['typed array', 'Works with binary byte values.'],
    ]),

    method('Float32Array', 'Typed array for 32-bit floating point numbers.', [
      ['typed array', 'Stores 32-bit decimal-like numbers.'],
    ]),

    method('Intl.NumberFormat()', 'Formats numbers for locales.', [
      ['localized number formatting', 'Formats numbers based on language/region.'],
    ]),

    method('Intl.DateTimeFormat()', 'Formats dates/times for locales.', [
      ['localized date formatting', 'Formats date/time based on language/region.'],
    ]),

    method('URL', 'Represents and works with URLs.', [
      ['URL object', 'Parses and manages URL parts.'],
    ]),

    method('URLSearchParams / searchParams', 'Reads and updates query parameters.', [
      ['query string tools', 'Works with values after ? in a URL.'],
    ]),

    method('Canvas', 'HTML canvas drawing surface.', [
      ['drawing area', 'Canvas lets JS draw pixels/shapes/images.'],
    ]),

    method('getContext("2d")', 'Gets the 2D drawing context from a canvas.', [
      ['2D drawing API', 'Returns methods for drawing shapes, text, and images.'],
    ]),

    method('basic canvas drawing methods', 'Intro to common canvas drawing methods.', [
      ['draw shapes', 'Methods like fillRect() draw rectangles.'],
      ['draw paths/text/images', 'Canvas can draw more than basic shapes.'],
    ]),

  ]),

],


 // ---- Real Website Patterns (Section 6) ----
  // 10 shells per Prompt 1 sections 6.1–6.10.
  // Each pattern accordion expands into a project-style
  // walkthrough card (Pattern Card structure, filled by Prompt 2).
  patterns: [
    {
      groupTitle: '6.1 Button Click',
      groupPreview:'Select, listen, react — the simplest interactive pattern.',
      items: withPattern([

          {title: 'select button',                             preview: 'Select, listen, react — the simplest interactive pattern.'},
          {title: 'add click listener',                        preview: 'Select, listen, react — the simplest interactive pattern.'},
          {title: 'callback function',                         preview: 'Select, listen, react — the simplest interactive pattern.'},
          {title: 'change text or class',                      preview: 'Select, listen, react — the simplest interactive pattern.'},
          {title: 'console log test',                          preview: 'Select, listen, react — the simplest interactive pattern.'},
          {title: 'function reference vs function call',       preview: 'Select, listen, react — the simplest interactive pattern.'},
          {title: 'null selector debugging',                   preview: 'Select, listen, react — the simplest interactive pattern.'}
      ], WEBSITE_PATTERN)
    },

    {
      groupTitle: '6.2 Mobile Menu',
      groupPreview:'Toggle a class on click — open/close navigation.',
      items: withPattern([

          {title: 'select button',                             preview: 'Select, listen, react — the simplest interactive pattern.'},
          {title: 'add click listener',                        preview: 'Select, listen, react — the simplest interactive pattern.'},
          {title: 'callback function',                         preview: 'Select, listen, react — the simplest interactive pattern.'},
          {title: 'change text or class',                      preview: 'Select, listen, react — the simplest interactive pattern.'},
          {title: 'console log test',                          preview: 'Select, listen, react — the simplest interactive pattern.'},
          {title: 'function reference vs function call',       preview: 'Select, listen, react — the simplest interactive pattern.'},
          {title: 'null selector debugging',                   preview: 'Select, listen, react — the simplest interactive pattern.'}
      ], WEBSITE_PATTERN)
    },

     {
      groupTitle: '6.3 FAQ Accordion',
      groupPreview:'Show/hide answers — one open at a time.',
      items: withPattern([

          {title: 'select button',                             preview: 'Select, listen, react — the simplest interactive pattern.'},
          {title: 'add click listener',                        preview: 'Select, listen, react — the simplest interactive pattern.'},
          {title: 'callback function',                         preview: 'Select, listen, react — the simplest interactive pattern.'},
          {title: 'change text or class',                      preview: 'Select, listen, react — the simplest interactive pattern.'},
          {title: 'console log test',                          preview: 'Select, listen, react — the simplest interactive pattern.'},
          {title: 'function reference vs function call',       preview: 'Select, listen, react — the simplest interactive pattern.'},
          {title: 'null selector debugging',                   preview: 'Select, listen, react — the simplest interactive pattern.'}
      ], WEBSITE_PATTERN)
    },  

     {
      groupTitle: '6.4 Form Validation',
      groupPreview:'Read inputs, check, show error messages, success state.',
      items: withPattern([

          {title: 'select button',                             preview: 'Select, listen, react — the simplest interactive pattern.'},
          {title: 'add click listener',                        preview: 'Select, listen, react — the simplest interactive pattern.'},
          {title: 'callback function',                         preview: 'Select, listen, react — the simplest interactive pattern.'},
          {title: 'change text or class',                      preview: 'Select, listen, react — the simplest interactive pattern.'},
          {title: 'console log test',                          preview: 'Select, listen, react — the simplest interactive pattern.'},
          {title: 'function reference vs function call',       preview: 'Select, listen, react — the simplest interactive pattern.'},
          {title: 'null selector debugging',                   preview: 'Select, listen, react — the simplest interactive pattern.'}
      ], WEBSITE_PATTERN)
    },
   
     {
      groupTitle: '6.5 Todo List',
      groupPreview:'Add, render, delete, mark complete, save to localStorage.',
      items: withPattern([

          {title: 'select button',                             preview: 'Select, listen, react — the simplest interactive pattern.'},
          {title: 'add click listener',                        preview: 'Select, listen, react — the simplest interactive pattern.'},
          {title: 'callback function',                         preview: 'Select, listen, react — the simplest interactive pattern.'},
          {title: 'change text or class',                      preview: 'Select, listen, react — the simplest interactive pattern.'},
          {title: 'console log test',                          preview: 'Select, listen, react — the simplest interactive pattern.'},
          {title: 'function reference vs function call',       preview: 'Select, listen, react — the simplest interactive pattern.'},
          {title: 'null selector debugging',                   preview: 'Select, listen, react — the simplest interactive pattern.'}
      ], WEBSITE_PATTERN)
    },

     {
      groupTitle: '6.6 Search Filter',
      groupPreview:'Type to filter a list — array.filter() + string.includes().',
      items: withPattern([

          {title: 'select button',                             preview: 'Select, listen, react — the simplest interactive pattern.'},
          {title: 'add click listener',                        preview: 'Select, listen, react — the simplest interactive pattern.'},
          {title: 'callback function',                         preview: 'Select, listen, react — the simplest interactive pattern.'},
          {title: 'change text or class',                      preview: 'Select, listen, react — the simplest interactive pattern.'},
          {title: 'console log test',                          preview: 'Select, listen, react — the simplest interactive pattern.'},
          {title: 'function reference vs function call',       preview: 'Select, listen, react — the simplest interactive pattern.'},
          {title: 'null selector debugging',                   preview: 'Select, listen, react — the simplest interactive pattern.'}
      ], WEBSITE_PATTERN)
    },

     {
      groupTitle: '6.7 Product Cards',
      groupPreview:'Render a list of objects as repeated card HTML.',
      items: withPattern([

          {title: 'select button',                             preview: 'Select, listen, react — the simplest interactive pattern.'},
          {title: 'add click listener',                        preview: 'Select, listen, react — the simplest interactive pattern.'},
          {title: 'callback function',                         preview: 'Select, listen, react — the simplest interactive pattern.'},
          {title: 'change text or class',                      preview: 'Select, listen, react — the simplest interactive pattern.'},
          {title: 'console log test',                          preview: 'Select, listen, react — the simplest interactive pattern.'},
          {title: 'function reference vs function call',       preview: 'Select, listen, react — the simplest interactive pattern.'},
          {title: 'null selector debugging',                   preview: 'Select, listen, react — the simplest interactive pattern.'}
      ], WEBSITE_PATTERN)
    },

     {
      groupTitle: '6.8 Save Theme Preference',
      groupPreview:'Toggle dark mode and remember the choice in localStorage.',
      items: withPattern([

          {title: 'select button',                             preview: 'Select, listen, react — the simplest interactive pattern.'},
          {title: 'add click listener',                        preview: 'Select, listen, react — the simplest interactive pattern.'},
          {title: 'callback function',                         preview: 'Select, listen, react — the simplest interactive pattern.'},
          {title: 'change text or class',                      preview: 'Select, listen, react — the simplest interactive pattern.'},
          {title: 'console log test',                          preview: 'Select, listen, react — the simplest interactive pattern.'},
          {title: 'function reference vs function call',       preview: 'Select, listen, react — the simplest interactive pattern.'},
          {title: 'null selector debugging',                   preview: 'Select, listen, react — the simplest interactive pattern.'}
      ], WEBSITE_PATTERN)
    },

     {
      groupTitle: '6.9 Fetch API Data',
      groupPreview:'Async function, fetch, response.json(), loading and error states.',
      items: withPattern([

          {title: 'select button',                             preview: 'Select, listen, react — the simplest interactive pattern.'},
          {title: 'add click listener',                        preview: 'Select, listen, react — the simplest interactive pattern.'},
          {title: 'callback function',                         preview: 'Select, listen, react — the simplest interactive pattern.'},
          {title: 'change text or class',                      preview: 'Select, listen, react — the simplest interactive pattern.'},
          {title: 'console log test',                          preview: 'Select, listen, react — the simplest interactive pattern.'},
          {title: 'function reference vs function call',       preview: 'Select, listen, react — the simplest interactive pattern.'},
          {title: 'null selector debugging',                   preview: 'Select, listen, react — the simplest interactive pattern.'}
      ], WEBSITE_PATTERN)
    },

     {
      groupTitle: '6.10 Counter App',
      groupPreview:'Increment, decrement, reset — render count to the DOM.',
      items: withPattern([

          {title: 'select button',                             preview: 'Select, listen, react — the simplest interactive pattern.'},
          {title: 'add click listener',                        preview: 'Select, listen, react — the simplest interactive pattern.'},
          {title: 'callback function',                         preview: 'Select, listen, react — the simplest interactive pattern.'},
          {title: 'change text or class',                      preview: 'Select, listen, react — the simplest interactive pattern.'},
          {title: 'console log test',                          preview: 'Select, listen, react — the simplest interactive pattern.'},
          {title: 'function reference vs function call',       preview: 'Select, listen, react — the simplest interactive pattern.'},
          {title: 'null selector debugging',                   preview: 'Select, listen, react — the simplest interactive pattern.'}
      ], WEBSITE_PATTERN)
    },
  ],


  // ---- Debugging / Error Guide (Section 7) ----
  // 16 debug topics per Prompt 1 sections 7.1–7.16.
  // Each topic → lessons (the "Required Scope" bullets) → 13 card pieces.
  debug: [

    // -------- 7.1 Debugging Mindset --------
    {
      groupTitle: '7.1 Debugging Mindset',
      groupPreview: 'Expected vs actual — isolate, test small, read slowly.',
      items: withDebug([
        { title: 'what did I expect?',         preview: 'The expected behavior.' },
        { title: 'what actually happened?',    preview: 'The observed behavior.' },
        { title: 'where did it stop working?', preview: 'Locating the failure point.' },
        { title: 'what changed recently?',     preview: 'Tracking recent edits.' },
        { title: 'what value should this be?', preview: 'Confirming the right value.' },
        { title: 'what value is it actually?', preview: 'Confirming the actual value.' },
        { title: 'isolate one piece at a time',preview: 'Narrow down the suspect code.' },
        { title: 'test small pieces',          preview: 'Verify in chunks.' },
        { title: 'read the error slowly',      preview: 'Slow down to see the clue.' }
      ], DEBUG_CARD)
    },

    // -------- 7.2 Types of Problems --------
    {
      groupTitle: '7.2 Types of Problems',
      groupPreview: 'Syntax, reference, type, logic, DOM, event, scope, async, data shape.',
      items: withDebug([
        { title: 'syntax errors',         preview: "Code JS can't even parse." },
        { title: 'reference errors',      preview: "Used something that doesn't exist." },
        { title: 'type errors',           preview: 'Wrong type used somewhere.' },
        { title: 'logic errors',          preview: 'Code runs but the result is wrong.' },
        { title: 'DOM selection errors',  preview: 'querySelector returned null.' },
        { title: 'event errors',          preview: 'Listener never fires or fires wrong.' },
        { title: 'scope errors',          preview: "Variable not visible where it's used." },
        { title: 'async/timing errors',   preview: 'Used data before it loaded.' },
        { title: 'data shape errors',     preview: 'Object/array structure not what you expected.' }
      ], DEBUG_CARD)
    },

    // -------- 7.3 How to Read Error Messages --------
    {
      groupTitle: '7.3 How to Read Error Messages',
      groupPreview: 'Error name, message, file, line, column, stack trace.',
      items: withDebug([
        { title: 'error name',            preview: 'TypeError, ReferenceError, etc.' },
        { title: 'error message',         preview: 'The plain-language description.' },
        { title: 'file name',             preview: 'Which file the error happened in.' },
        { title: 'line number',           preview: 'Exactly which line.' },
        { title: 'column number',         preview: 'Position within the line.' },
        { title: 'stack trace',           preview: 'The chain of calls that led here.' },
        { title: 'clickable links in console', preview: 'Jump to the source line.' },
        { title: 'first error vs later errors', preview: 'The first one usually matters most.' }
      ], DEBUG_CARD)
    },

    // -------- 7.4 Common JS Errors --------
    {
      groupTitle: '7.4 Common JS Errors',
      groupPreview: 'is not defined, Cannot read properties of null, Unexpected token, etc.',
      items: withDebug([
        { title: 'is not defined',                       preview: 'Variable used but never declared.' },
        { title: 'Cannot read properties of null',       preview: 'Tried to use a missing element.' },
        { title: 'Cannot read properties of undefined', preview: 'Tried to use a missing property.' },
        { title: 'Unexpected token',                     preview: 'Syntax error — punctuation issue.' },
        { title: 'Assignment to constant variable',      preview: 'Tried to reassign a const.' },
        { title: 'function is not a function',           preview: 'Called something that wasn\'t callable.' },
        { title: 'missing ) after argument list',        preview: 'Unclosed parenthesis.' },
        { title: 'Cannot access before initialization',  preview: 'Used a let/const before it was declared.' },
        { title: 'NaN issues',                           preview: 'Math went wrong somewhere.' },
        { title: 'JSON parse error',                     preview: 'Invalid JSON string passed to JSON.parse().' }
      ], DEBUG_CARD)
    },

    // -------- 7.5 Console Tools --------
    {
      groupTitle: '7.5 Console Tools',
      groupPreview: 'console.log, warn, error, table, dir, typeof, debugger.',
      items: withDebug([
        { title: 'console.log()',                       preview: 'Inspect any value.' },
        { title: 'console.warn()',                      preview: 'Yellow warning message.' },
        { title: 'console.error()',                     preview: 'Red error message.' },
        { title: 'console.table()',                     preview: 'View arrays/objects as a table.' },
        { title: 'console.dir()',                       preview: 'Inspect object or DOM structure.' },
        { title: 'typeof',                              preview: 'Check the type of a value.' },
        { title: 'Array.isArray()',                     preview: 'Confirm a value is an array.' },
        { title: 'debugger',                            preview: 'Pause execution at this line.' },
        { title: 'checking values before broken line',  preview: 'Log just before the failure.' }
      ], DEBUG_CARD)
    },

    // -------- 7.6 Debugging Variables --------
    {
      groupTitle: '7.6 Debugging Variables',
      groupPreview: 'Check existence, spelling, value, type, scope, reassignment.',
      items: withDebug([
        { title: 'check if variable exists',  preview: 'typeof returns "undefined" if not declared.' },
        { title: 'check spelling',            preview: 'Misspellings cause is-not-defined errors.' },
        { title: 'check value',               preview: 'Log it — is it what you expect?' },
        { title: 'check type',                preview: 'String vs number vs object.' },
        { title: 'check scope',               preview: 'Is it visible where you\'re using it?' },
        { title: 'check reassignment',        preview: 'Did something else change it later?' },
        { title: 'check const reassignment',  preview: 'Trying to reassign a const throws.' },
        { title: 'check undefined',           preview: 'Was it declared but never assigned?' }
      ], DEBUG_CARD)
    },

    // -------- 7.7 Debugging Functions --------
    {
      groupTitle: '7.7 Debugging Functions',
      groupPreview: 'Is it called? Arguments correct? Return missing? Scope issues?',
      items: withDebug([
        { title: 'is the function being called?',  preview: 'Add a log inside to verify.' },
        { title: 'is it being called too early?',  preview: 'Timing/script-order issue.' },
        { title: 'are arguments correct?',         preview: 'Log them — right type, right order?' },
        { title: 'are parameters named clearly?',  preview: 'Bad names cause bugs.' },
        { title: 'is return missing?',             preview: 'No return → undefined.' },
        { title: 'console.log vs return',          preview: 'Logging is not returning.' },
        { title: 'scope problems',                 preview: 'Closures, outer vs inner variables.' },
        { title: 'callback problems',              preview: 'Function reference vs function call.' }
      ], DEBUG_CARD)
    },

    // -------- 7.8 Debugging Arrays --------
    {
      groupTitle: '7.8 Debugging Arrays',
      groupPreview: 'Is it an array? Empty? Length? Indexes? Item vs index confusion.',
      items: withDebug([
        { title: 'is it actually an array?',     preview: 'Use Array.isArray() to confirm.' },
        { title: 'is it empty?',                 preview: 'Length 0 vs missing.' },
        { title: 'check length',                 preview: 'Log array.length.' },
        { title: 'check indexes',                preview: 'Did you use the right index?' },
        { title: 'index starts at 0',            preview: 'First item is at 0, not 1.' },
        { title: 'item vs index confusion',      preview: 'array[i] is the item, i is the index.' },
        { title: 'mutation vs new array',        preview: 'push mutates, map returns new.' },
        { title: 'map/filter return value',      preview: 'They return arrays, not undefined.' }
      ], DEBUG_CARD)
    },

    // -------- 7.9 Debugging Objects --------
    {
      groupTitle: '7.9 Debugging Objects',
      groupPreview: 'Property exists? Spelling? Dot vs bracket? Nested data?',
      items: withDebug([
        { title: 'property exists?',           preview: 'Use hasOwnProperty or in operator.' },
        { title: 'spelling correct?',          preview: 'Misspelled keys return undefined silently.' },
        { title: 'dot vs bracket notation',    preview: 'Dynamic keys need brackets.' },
        { title: 'nested property exists?',    preview: 'obj.a.b breaks if a is undefined.' },
        { title: 'undefined property',         preview: 'Reading a missing key returns undefined.' },
        { title: 'API data shape',             preview: 'Is the response what you expected?' },
        { title: 'console.log object',         preview: 'Expand it in DevTools.' },
        { title: 'console.table arrays of objects', preview: 'See data in a table view.' }
      ], DEBUG_CARD)
    },

    // -------- 7.10 Debugging null / undefined --------
    {
      groupTitle: '7.10 Debugging null / undefined',
      groupPreview: 'querySelector returns null, missing properties, missing returns.',
      items: withDebug([
        { title: 'what undefined means',                  preview: 'Variable declared but not assigned.' },
        { title: 'what null means',                       preview: 'Intentionally empty value.' },
        { title: 'querySelector returns null',            preview: 'When no element matches.' },
        { title: 'missing object property returns undefined', preview: 'Reading a key that doesn\'t exist.' },
        { title: 'missing array item returns undefined',  preview: 'Index out of bounds.' },
        { title: 'missing return gives undefined',        preview: 'Functions without return.' },
        { title: 'trying to use null/undefined causes errors', preview: 'Cannot read properties of...' },
        { title: 'optional chaining, beginner-friendly mention', preview: 'a?.b safely returns undefined.' },
        { title: 'if checks before using',                preview: 'if (x) before using x.' }
      ], DEBUG_CARD)
    },

    // -------- 7.11 Debugging DOM --------
    {
      groupTitle: '7.11 Debugging DOM',
      groupPreview: 'Selector spelling, .class vs #id, script timing, NodeList issues.',
      items: withDebug([
        { title: 'selector spelling',          preview: 'Class/id name typos.' },
        { title: '.class vs #id vs tag',       preview: 'Wrong selector prefix.' },
        { title: 'element exists?',            preview: 'Did querySelector return null?' },
        { title: 'script timing',              preview: 'Script ran before HTML existed.' },
        { title: 'querySelectorAll vs querySelector', preview: 'NodeList vs single element.' },
        { title: 'NodeList issues',            preview: 'Treating a list like one element.' },
        { title: 'textContent/classList on null', preview: 'Element wasn\'t found.' },
        { title: 'inspect HTML',               preview: 'Use DevTools Elements tab.' }
      ], DEBUG_CARD)
    },

    // -------- 7.12 Debugging Events --------
    {
      groupTitle: '7.12 Debugging Events',
      groupPreview: 'Element exists? Listener attached? Function passed correctly?',
      items: withDebug([
        { title: 'selected element exists?',       preview: 'Did the selector return an element?' },
        { title: 'listener attached?',             preview: 'Is addEventListener actually running?' },
        { title: 'event type correct?',            preview: '"click" vs "input" vs "submit".' },
        { title: 'function passed correctly?',     preview: 'Pass the function reference, not call it.' },
        { title: 'function called too early?',     preview: 'Listener fires immediately on attach.' },
        { title: 'event object exists?',           preview: 'Is the (e) parameter populated?' },
        { title: 'preventDefault needed?',         preview: 'Form submits, links navigate.' },
        { title: 'console.log inside listener',    preview: 'Confirm it actually runs.' }
      ], DEBUG_CARD)
    },

    // -------- 7.13 Debugging Forms --------
    {
      groupTitle: '7.13 Debugging Forms',
      groupPreview: 'preventDefault, .value, reading too early, empty strings, trim.',
      items: withDebug([
        { title: 'form submit refresh issue',     preview: 'Page reloads on submit.' },
        { title: 'preventDefault missing',        preview: 'Need to stop default behavior.' },
        { title: 'input.value missing',           preview: 'Forgot to read .value.' },
        { title: 'reading value too early',       preview: 'Read it inside the listener.' },
        { title: 'empty strings',                 preview: 'value === "" check.' },
        { title: 'trim spaces',                   preview: 'Whitespace breaks validation.' },
        { title: 'input number as string',        preview: 'Input values are strings.' },
        { title: 'selected wrong input',          preview: 'Selector matched another field.' },
        { title: 'validation branch not running', preview: 'if/else logic order wrong.' }
      ], DEBUG_CARD)
    },

    // -------- 7.14 Debugging Async --------
    {
      groupTitle: '7.14 Debugging Async',
      groupPreview: 'Forgot await, response.json(), fetch failed, try/catch missing.',
      items: withDebug([
        { title: 'forgot await',           preview: 'Got a Promise instead of data.' },
        { title: 'promise vs resolved data', preview: 'Awaiting the wrong thing.' },
        { title: 'response.json() missing', preview: 'Need to parse the body.' },
        { title: 'fetch failed',           preview: 'Network error or bad URL.' },
        { title: 'try/catch missing',      preview: 'Errors silently swallow.' },
        { title: 'using data before loaded', preview: 'Used variable before await finished.' },
        { title: 'network tab',            preview: 'See the actual request/response.' },
        { title: 'loading/error UI states', preview: 'Show user something while waiting.' }
      ], DEBUG_CARD)
    },

    // -------- 7.15 Debugging Template Literals / ${} --------
    {
      groupTitle: '7.15 Debugging Template Literals / ${}',
      groupPreview: 'Quotes vs backticks, misspelled variable, undefined value, missing }.',
      items: withDebug([
        { title: 'used quotes instead of backticks',        preview: '${} only works in backtick strings.' },
        { title: 'variable misspelled inside ${}',          preview: 'Outputs undefined or throws.' },
        { title: 'value is undefined',                      preview: 'Showing "undefined" in the output.' },
        { title: 'missing closing }',                       preview: 'Syntax error.' },
        { title: 'mixing concatenation and template literals', preview: 'Confusing two styles.' },
        { title: 'literal ${name} showing on page',         preview: 'Backticks were missing.' }
      ], DEBUG_CARD)
    },

    // -------- 7.16 Debugging Checklist --------
    {
      groupTitle: '7.16 Debugging Checklist',
      groupPreview: 'A run-down of what to check, in order.',
      items: withDebug([
        { title: 'read the error',         preview: 'Slow down — what does it say?' },
        { title: 'find the line',          preview: 'Click into the file at that line.' },
        { title: 'log the value',          preview: 'console.log just before the issue.' },
        { title: 'check type',             preview: 'typeof — is it what you expected?' },
        { title: 'check spelling',         preview: 'Variable, property, selector names.' },
        { title: 'check scope',            preview: 'Is the variable visible here?' },
        { title: 'check timing',           preview: 'Did it run too early?' },
        { title: 'check DOM selector',     preview: 'Did it actually match an element?' },
        { title: 'check return value',     preview: 'Did the function return what you expected?' },
        { title: 'simplify the code',      preview: 'Strip it down to the smallest broken case.' },
        { title: 'test one piece at a time', preview: 'Verify chunks before combining.' }
      ], DEBUG_CARD)
    }
  ]
};


