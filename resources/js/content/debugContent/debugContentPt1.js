
Object.assign(CONTENT,{

/* ==========================================================
     SECTION 7:  7.1–7.4 (Mindset, Types of Problems, Reading Errors, Common JS Errors)
========================================================== */

/* ========================================================= 
   Sub-lesson: 7.2.1 Types of Problems → syntax errors
 =======================================================*/

  /* --- Chunk 0: What & How --- */

  /* 0.0 What it is */
  'debug-1-0-0-0': `
    <p>A <strong>syntax error</strong> is code JavaScript can't even parse — the shape of what you wrote isn't valid JavaScript. Missing brackets, missing quotes, wrong punctuation, keywords in the wrong spot. Before your code has a chance to <em>run</em>, JS reads through the file to understand it. If the reading fails, nothing runs at all. Not a single line. The whole file is dead.</p>
    <p>This makes syntax errors both the loudest and the easiest kind of bug. Loudest because they take down entire files with a single misplaced character. Easiest because the browser tells you exactly which line and column the parse failed on, and there's almost always no runtime state involved — the fix is a punctuation change, not a logic change.</p>
  `,

  /* 0.1 Syntax */
  'debug-1-0-0-1': `
<pre class="language-javascript"><code class="language-javascript">// What broken code looks like:

// Missing closing brace
function greet(name) {
  console.log("Hello, " + name);
// ← SyntaxError: Unexpected end of input

// Missing closing parenthesis
console.log("hi";
// ← SyntaxError: missing ) after argument list

// Missing quote on a string
const name = "Alice;
// ← SyntaxError: Invalid or unexpected token

// Extra comma or missing comma
const user = {
  name: "Alice"
  age: 30           // ← SyntaxError — missing comma after "Alice"
};

// Reserved word used as an identifier
const class = "admin";   // ← SyntaxError: Unexpected reserved word

// Mismatched brackets
const arr = [1, 2, 3);   // ← SyntaxError — closed with ) instead of ]

// Arrow function missing =&gt;
const add = (a, b) { return a + b; };
// ← SyntaxError: Unexpected token '{'

// The universal telltale in the console:
// SyntaxError: &lt;description&gt;
//   at &lt;file&gt;:&lt;line&gt;:&lt;column&gt;</code></pre>
  `,

  /* 0.2 Anatomy / Breakdown */
  'debug-1-0-0-2': `
<pre class="language-javascript"><code class="language-javascript">// A typical syntax error message, broken down:

// "Uncaught SyntaxError: Unexpected token ')' (at app.js:42:15)"
//   │                       │                    │       │  │
//   │                       │                    │       │  └── column 15 (character on that line)
//   │                       │                    │       └── line 42 in app.js
//   │                       │                    └── the file it's in
//   │                       └── what JS was surprised by — a ) it didn't expect
//   └── it's an uncaught SyntaxError — the entire file failed to parse

// three key parts to read:
// 1. the error TYPE — "SyntaxError" tells you it's a parse-time issue, not runtime.
// 2. the DESCRIPTION — "Unexpected token ')'" tells you what tripped the parser up.
// 3. the LOCATION — file:line:column tells you where to look.

// what the parser was doing when it hit the error:
// - reading tokens one at a time (words, numbers, punctuation).
// - matching them to grammar rules (statements, expressions, blocks).
// - the moment it hits a token that doesn't fit the current rule → SyntaxError.
// - the position it reports is where the parser gave up,
//   NOT necessarily where you need to fix.
//   the real bug is often a few lines EARLIER (a missing brace or bracket).

// key mental model:
// - syntax errors happen BEFORE any code runs.
// - your file is either fully valid (runs) or fully invalid (nothing runs).
// - one bad character can wipe out an entire file's execution.</code></pre>
  `,

  /* 0.3 Syntax Details That Matter */
  'debug-1-0-0-3': `
    <p><strong>Syntax errors are caught at parse time, not runtime.</strong> The browser reads the whole file first to check the grammar. If parsing fails, none of the file executes — not even the correct parts before the bad line. This is what makes them fundamentally different from other errors, which fire while code is running:</p>
<pre class="language-javascript"><code class="language-javascript">// this whole file will NOT run:
console.log("first line");   // never fires — the file didn't parse
console.log("second line");
function broken(   {          // ← SyntaxError here means nothing above runs either
  console.log("inside");
}
// nothing logs. the whole file is dead until you fix the syntax.</code></pre>

    <p><strong>The reported location is where the parser gave up — not always the actual bug.</strong> If you forget a closing brace on line 12, the parser might not notice until line 47 when it hits an <code>}</code> that "shouldn't be there yet." The error will point at line 47, but the fix belongs on line 12:</p>
<pre class="language-javascript"><code class="language-javascript">// bug reported at line 47:
function outer() {
  function inner() {
    return 42;
  // ← missing } here
}
// ... 40 more lines ...
document.body.appendChild(el);
}   // ← SyntaxError reported here, "Unexpected token '}'"

// the parser sees the outer function's } as the "extra" one because inner never closed.
// the fix goes UP the file, not at the reported location.</code></pre>

    <p><strong>Modern editors show most syntax errors as you type — before you save.</strong> Red squiggles under the offending character, warnings in the gutter, and often a specific message on hover. The moment you see squiggles or the file color changes to indicate an error state, look at the last thing you typed. Nine times out of ten, that's where the bug is:</p>
<pre class="language-javascript"><code class="language-javascript">// editor squiggle appears the moment you type:
const user = {
  name: "Alice"       // ← squiggle here (missing comma)
  age: 30
};
// fix immediately, before running. much faster than seeing the SyntaxError later.</code></pre>

    <p><strong>Some syntax errors only happen with strict mode or in modules.</strong> Duplicate parameter names, reserved-word variables, and <code>with</code> statements all parse fine in loose mode but fail in strict mode or ES modules:</p>
<pre class="language-javascript"><code class="language-javascript">function fn(a, a) {}                // fine in loose mode
"use strict";
function fn(a, a) {}                // SyntaxError: Duplicate parameter name

// this matters because modern JS (import/export, top-level in modules)
// is automatically strict. you don't have to opt in.</code></pre>

    <p><strong>Common categories of syntax errors:</strong></p>
<pre class="language-javascript"><code class="language-javascript">// 1. Bracket / brace / paren mismatch
function f( { }         // opened ( never closed
if (x) { }              // ok
if (x) [ }              // brackets don't nest — SyntaxError

// 2. Missing quotes on strings
const s = "hello;       // string never closed → parser reads the rest as string

// 3. Missing commas or semicolons in unusual spots
const obj = { a: 1 b: 2 };    // missing comma between properties
const arr = [1 2 3];           // missing commas between elements

// 4. Wrong keyword usage
return;                        // return outside a function
break;                         // break outside a loop or switch
const class = "";              // "class" is a reserved word

// 5. Malformed arrow functions
const add = (a, b) { return a + b };   // missing =&gt;
const add = a, b =&gt; a + b;              // multiple args need parens

// 6. Broken template literals
const s = \`hello \${name;        // \${ never closed
const s = \`hello \${name}\`;      // ok (this is fine, just showing the pattern)</code></pre>

    <p><strong>Files with syntax errors show a red DevTools icon and no execution.</strong> If you're loading a script tag and nothing happens at all — no logs, no errors from any of your code, no evidence any of it ran — check for a SyntaxError in the DevTools console. That's almost always the cause.</p>
  `,

  /* --- Chunk 1: Why & When --- */

  /* 1.0 What problem it solves */
  'debug-1-0-1-0': `
    <p>Recognizing that an error is a syntax error (not a type error, reference error, or logic bug) changes the whole debugging approach. Runtime errors need you to trace values through a running program. Syntax errors don't — the program never ran. All you need to do is find one bad character and fix it. That's a fundamentally simpler search.</p>
    <p>Identifying syntax errors quickly also saves you from wasting time inspecting variables, adding console.logs, or wondering "why isn't my code doing anything?" If the whole file is silent because a brace is missing, no amount of runtime debugging will help. Naming the problem as "syntax" tells you exactly what kind of hunt you're on.</p>
  `,

  /* 1.1 Why use it */
  'debug-1-0-1-1': `
    <p>Because the fix is usually a single character, and the payoff is huge. A missing <code>}</code> can silence an entire file. Adding it back restores hundreds of lines of code with one keystroke. Compared to logic bugs or async bugs, syntax errors are the highest-return debugging targets — smallest fix, biggest revival of behavior.</p>
    <p>Understanding syntax errors also inoculates you against a common panic: "my code doesn't work at all, none of my logs appear, nothing happens." That's a very specific fingerprint, and syntax error is the first thing to check. Once you recognize the pattern, you stop hunting through logic and just look for the character out of place.</p>
  `,

  /* 1.2 Where you use it */
  'debug-1-0-1-2': `
<pre class="language-javascript"><code class="language-javascript">// When to suspect a syntax error:

// 1. Nothing in your file appears to run.
//    - no logs from lines that should log
//    - no visual changes from DOM code
//    - no errors from lines you know throw
// → look for SyntaxError in the console first.

// 2. The console shows "Uncaught SyntaxError" at the top.
// → open the file at the reported line, but also check nearby lines above.

// 3. Your editor has red squiggles under a specific character.
// → hover to read the message, fix immediately.

// 4. You just wrote or pasted code and the file "went red" in the tabs.
// → the last thing you edited is almost always the cause.

// 5. A colleague sent you code that doesn't work at all.
// → paste it into your editor; the squiggles will point to the syntax issue.

// Common places syntax bugs sneak in:

// - Copying code from a source that used smart quotes ('curly' vs 'straight')
const s = 'hello';          // straight quote — valid
const s = 'hello';          // curly quote — SyntaxError

// - Deleting a line and taking a bracket with it accidentally
function fn() {
  doThing();
}                            // fine

function fn() {
  doThing();
                             // accidentally deleted the } → syntax error

// - Adding an arrow function without =&gt;
const fn = (a) { return a; };   // missing =&gt;

// - Trailing comma in older JS environments
const arr = [1, 2, 3,];      // fine in modern JS
const arr = [1, 2, 3,];      // SyntaxError in very old JS engines

// - Mismatched quotes when concatenating strings
const s = 'she said "hi';   // string ends at the second ', parser confused</code></pre>
  `,

  /* 1.3 Plain English explanation */
  'debug-1-0-1-3': `
    <p>Imagine you handed a chef a recipe written in a language they can read, but the ingredients section is missing the closing bracket around the ingredient list. They can't cook — they can't even start. They can't tell if step 1 is right or wrong because they can't figure out where the ingredients end and the instructions begin. The whole recipe is unreadable until you fix the punctuation.</p>
    <p>A syntax error is that missing bracket in your code. The JavaScript engine is a chef trying to make sense of your recipe. If the punctuation doesn't work, the recipe is unreadable and nothing gets cooked. That's why nothing runs — not because your logic is wrong, but because JS can't figure out what the logic even is.</p>
  `,

  /* 1.4 Mental model */
  'debug-1-0-1-4': `
    <p>Think of your JS file as a sentence and the parser as an English teacher reading it aloud. The teacher can handle typos in words ("teh" for "the") — those are runtime issues. But if you write a sentence like <em>"The cat sat on the (rug"</em>, the teacher stops cold at the open parenthesis. They can't finish the sentence. They can't even try to interpret what came after. They just point at the paren and say "this doesn't close."</p>
    <p>Same with JS. One misplaced bracket, quote, or paren isn't a "small mistake" — it's a hard stop. The parser doesn't try to guess. It doesn't skip and keep going. It halts, points at the exact spot, and refuses to run anything until that spot is fixed. That's why fixing a syntax error revives your entire file: you didn't rewrite your code, you just handed the parser a sentence it could finish reading.</p>
  `,

  /* 1.5 Step-by-step walkthrough */
  'debug-1-0-1-5': `
<pre class="language-javascript"><code class="language-javascript">// Scenario: you save the file, reload the page, and NOTHING works.
// No logs appear. Buttons don't respond. The page looks blank.

// Step 1: open DevTools console. Look at the very top for red text.
// You see:
//   Uncaught SyntaxError: Unexpected token '}' (at app.js:38:1)

// Step 2: identify the type of error.
// "SyntaxError" — parse-time. The whole file failed to load.
// This is why nothing works — no code ran at all.

// Step 3: open app.js, jump to line 38.
// Line 38 reads: }
// It's just a closing brace. How is that unexpected?

// Step 4: read UPWARD.
// The parser reports where it gave up, not where the bug is.
// Look for the block that should have contained line 38.

// You find, around line 20:
function processOrder(order) {
  if (order.total &gt; 0) {
    console.log("valid");
  // ← missing } here!
  console.log("done");
}
// ...

// Step 5: fix by adding the missing brace.
function processOrder(order) {
  if (order.total &gt; 0) {
    console.log("valid");
  }
  console.log("done");
}

// Step 6: reload. The file parses, code runs, logs appear.

// Time spent: 30 seconds once you knew to look upward from the reported line.
// Key insight: SyntaxError location is where the parser CHOKED,
// not where the FIX belongs.</code></pre>
  `,

  /* --- Chunk 2: The Click --- */

  /* 2.0 Debugging clue */
  'debug-1-0-2-0': `
    <p>The single most telling clue: <strong>"none of my code runs and I don't see any of my logs."</strong> This is the syntax-error fingerprint. Runtime errors usually stop code at a specific line, so logs BEFORE that line still fire. Syntax errors stop the whole file, so no logs from ANYWHERE in that file fire:</p>
<pre class="language-javascript"><code class="language-javascript">// If you added: console.log("script loaded");
// at the very top of your file and it doesn't appear in the console,
// the file didn't parse. Look for a SyntaxError.

// If you see the top log but no others → it's a runtime error later in the file.
// If you don't see the top log → it's a syntax error (or the file didn't load at all).

// Second clue: the SyntaxError message.
// Its line number is often approximate — always check a few lines ABOVE it.
// Especially for "Unexpected token '}'" or "Unexpected end of input" —
// those usually mean an earlier block wasn't closed.

// Third clue: modern editors show squiggles in real time.
// If your file has red squiggles anywhere, that's a syntax problem the editor already caught.
// You don't have to reload to find it — fix it right there.</code></pre>
  `,

  /* 2.1 The part that makes it click */
  'debug-1-0-2-1': `
    <p>The aha is realizing that "syntax error" isn't a failure of your logic — it's a failure of the language rules that let JavaScript READ your code at all. Your logic could be perfect. Your algorithms could be flawless. If one character is wrong, none of that matters, because the parser never got past reading:</p>
<pre class="language-javascript"><code class="language-javascript">// this could be the best code ever written:
function launchRocket(fuel) {
  if (fuel &gt; 100) {
    return "GO";
  } else {
    return "ABORT";
  // ← missing } here
}

// but until you add that one } , nothing about rockets, fuel, or logic runs.
// the parser is stuck at grammar. everything else is on hold.</code></pre>
    <p>Once that clicks, three things follow: (1) syntax errors are always fixable with punctuation — no runtime tracing needed. (2) the file is either fully alive or fully dead — no partial execution. (3) if nothing seems to be happening, the first thing to check is the parser, not the logic.</p>
  `,

  /* 2.2 Common confusions */
  'debug-1-0-2-2': `
    <p><strong>"The error says line 47 but the code on line 47 looks fine."</strong> Right — the parser reported where it gave up, not where the bug is. Look UPWARD. Usually you'll find an unclosed block, an unmatched bracket, or a missing punctuation somewhere earlier that made line 47 look wrong to the parser.</p>

    <p><strong>"I have code inside an if or a function that looks fine — why is it a syntax error?"</strong> Because the parser doesn't know about your logical structure until it's finished parsing. It just reads left-to-right, top-to-bottom, matching tokens against grammar rules. A misaligned brace three functions above can make the parser interpret your code entirely wrong. Editor auto-indent and bracket highlighting help spot these.</p>

    <p><strong>"My file has red in the tab but the code looks correct."</strong> Trust the editor. It's using the same parsing rules as the browser. If it says there's a syntax error, there is one — even if your eyes miss it. Hover over the red squiggle for a specific message, or look at the "Problems" panel in most editors.</p>

    <p><strong>"I fixed one syntax error and now I have a different one."</strong> That's normal. When a file has multiple syntax issues, the parser only reports the first one it hits. Once you fix that, it can parse further and finds the next. Keep fixing until the file parses cleanly.</p>

    <p><strong>"My code works in one editor but errors in another."</strong> Different JS engines have subtly different tolerance for edge cases (trailing commas in old browsers, template literal quirks, etc.). If code parses in your editor but not in the target browser, check the specific browser version's ECMAScript support.</p>

    <p><strong>"I get a syntax error on completely valid code."</strong> Two common causes: (1) smart quotes ('curly' from a word processor) instead of straight ASCII quotes, invisible to the eye but not to the parser. (2) A hidden character copied from somewhere (a zero-width space, a non-breaking space) that looks like nothing but confuses the parser. Retype the suspicious line by hand.</p>

    <p><strong>"Can I catch a syntax error with try/catch?"</strong> Not in the file where the error occurs — that file never runs. But you CAN catch syntax errors in code you're evaluating dynamically (like <code>JSON.parse(bad)</code> or <code>new Function(bad)</code>), because those parse at runtime. Regular file-level syntax errors happen before any of your code executes.</p>
  `,

  /* 2.3 Common mistakes */
  'debug-1-0-2-3': `
<pre class="language-javascript"><code class="language-javascript">// Mistake 1: missing closing bracket, brace, or paren
function fn() {
  doThing();
// ← missing }
// SyntaxError somewhere down the file, blaming a later token.
// fix: match every opener with a closer. use editor auto-indent to spot mismatches.

// Mistake 2: mismatched quotes
const s = "it's fine";        // ✓ mixed quote styles, single quote is inside string
const s = 'it's broken';      // ✗ single quote inside single-quoted string — closes early
// fix: use double quotes when you have single quotes inside, or escape: 'it\\'s ok'

// Mistake 3: missing comma in object or array
const user = {
  name: "Alice"
  age: 30                     // ✗ missing comma after "Alice"
};
// fix:
const user = {
  name: "Alice",
  age: 30,
};

// Mistake 4: reserved words as identifiers
const class = "admin";        // ✗ "class" is reserved
const let = 5;                // ✗ "let" is reserved
// fix: pick different names — className, val, etc.

// Mistake 5: return outside a function
if (x) return;                // ✗ SyntaxError if this is at file level
// fix: return only works inside a function body.

// Mistake 6: arrow function missing =&gt;
const add = (a, b) { return a + b };   // ✗
const add = (a, b) =&gt; { return a + b };  // ✓

// Mistake 7: unclosed template literal
const s = \`hello \${name;      // ✗ never closed the \${ or the backtick
const s = \`hello \${name}\`;    // ✓

// Mistake 8: missing operand
const x = ;                   // ✗ SyntaxError
const y = 5 +;                // ✗ SyntaxError
// fix: complete the expression

// Mistake 9: statement in a place that expects an expression
const value = if (x) { 1 } else { 2 };   // ✗ can't put statements in expressions
const value = x ? 1 : 2;                  // ✓ use a ternary

// Mistake 10: smart quotes from a word processor
const s = "hello";            // smart quotes → SyntaxError
const s = "hello";            // straight quotes → ok
// fix: retype the string, or configure the editor to convert smart quotes automatically.

// Mistake 11: extra brace or paren at the end
function fn() {
  doThing();
}}                             // ✗ extra brace
// fix: match every opener with exactly one closer.

// Mistake 12: mixing up array and object syntax
const config = {
  1, 2, 3                     // ✗ objects need key: value pairs
};
const config = [1, 2, 3];     // ✓ arrays for lists of values</code></pre>
  `,

  /* --- Chunk 3: In Practice --- */

  /* 3.0 Tiny examples */
  'debug-1-0-3-0': `
<pre class="language-javascript"><code class="language-javascript">// Common syntax errors and their fixes.

// Missing closing brace
function fn() {
  doThing();
// FIX: add }
function fn() {
  doThing();
}

// Missing closing paren
console.log("hi";
// FIX: add )
console.log("hi");

// Missing quote
const s = "hello;
// FIX: close the string
const s = "hello";

// Missing comma in object
const u = { name: "Alice" age: 30 };
// FIX:
const u = { name: "Alice", age: 30 };

// Missing comma in array
const a = [1 2 3];
// FIX:
const a = [1, 2, 3];

// Arrow function with missing =&gt;
const add = (a, b) { return a + b; };
// FIX:
const add = (a, b) =&gt; { return a + b; };

// Reserved word as variable
const class = "admin";
// FIX:
const className = "admin";

// Unclosed template literal
const s = \`hello \${name;
// FIX:
const s = \`hello \${name}\`;

// Extra closing brace
function fn() {
  doThing();
}}
// FIX: remove the extra
function fn() {
  doThing();
}

// return outside a function
return 5;
// FIX: put it inside a function
function get() { return 5; }

// Statement where expression expected
const x = if (y) { 1 } else { 2 };
// FIX: use a ternary
const x = y ? 1 : 2;

// Smart quotes
const s = "hello";
// FIX: retype with straight quotes
const s = "hello";

// Malformed for loop
for (let i = 0 i &lt; 10; i++) { }
// FIX: semicolons between the three parts
for (let i = 0; i &lt; 10; i++) { }

// Missing curly braces on if with multiple statements
if (x) doThingA(); doThingB();
// SILENT bug — only doThingA is conditional; doThingB always runs.
// (technically valid syntax, but usually not what was meant.)
// FIX: explicit block
if (x) { doThingA(); doThingB(); }</code></pre>
  `,

  /* 3.1 Real website uses */
  'debug-1-0-3-1': `
    <p><strong>Example: entire page appears blank after a code edit</strong></p>
<pre class="language-javascript"><code class="language-javascript">// You edit main.js and reload. Page is white. No content.
// DevTools console shows at the top:
//   Uncaught SyntaxError: Unexpected token '}' (at main.js:214:1)

// Because main.js failed to parse, none of your init code ran:
// - no event listeners attached
// - no DOM elements populated
// - no styling applied

// Step 1: open main.js, jump to line 214.
// Step 2: line 214 is just &#96;}&#96; — that's fine on its own.
// Step 3: scan upward — look for the block that never closed.
// Step 4: around line 180 you find:
function setupForm() {
  form.addEventListener("submit", async (e) =&gt; {
    e.preventDefault();
    // ...
  });
// ← missing } for setupForm

// Step 5: add the brace, save, reload. Page comes back to life.</code></pre>

    <p><strong>Example: pasting code from a Google Doc or Slack message</strong></p>
<pre class="language-javascript"><code class="language-javascript">// A designer sent you a snippet in Slack. You paste it in:
const message = "hello";
console.log(message);

// You get: Uncaught SyntaxError: Invalid or unexpected token
// The code looks fine. What?

// Slack (and other rich-text tools) sometimes convert straight quotes to curly:
// "hello" becomes "hello"
// invisible to your eye, but not to JavaScript.

// Fix: retype the quotes manually, or use an editor extension that shows non-ASCII characters.</code></pre>

    <p><strong>Example: JSON.parse throwing SyntaxError at runtime</strong></p>
<pre class="language-javascript"><code class="language-javascript">// Not all SyntaxErrors are at parse-time. JSON.parse can throw one at runtime:
try {
  const data = JSON.parse(response);
} catch (err) {
  console.error("bad JSON:", err.message);
  // err.message: "Unexpected token o in JSON at position 1"
  // the response was probably "object Object" or similar — not real JSON.
}
// The syntax being validated here is JSON's syntax, not JavaScript's.
// Same error type, different context. Always catch JSON.parse when the input isn't guaranteed.</code></pre>

    <p><strong>Example: template literal with unescaped backticks in HTML</strong></p>
<pre class="language-javascript"><code class="language-javascript">// You're building an HTML string:
const html = \`
  &lt;div class="btn"&gt;
    &lt;span&gt;Click \`me\` here&lt;/span&gt;   // ← the backtick around "me" closes the template!
  &lt;/div&gt;
\`;
// SyntaxError, and the rest of the file after \`me\` is misread as code.

// Fix: escape the backtick with \\
const html = \`
  &lt;div class="btn"&gt;
    &lt;span&gt;Click \\\`me\\\` here&lt;/span&gt;
  &lt;/div&gt;
\`;
// or restructure the string to avoid inline backticks.</code></pre>

    <p><strong>Example: half-finished refactor</strong></p>
<pre class="language-javascript"><code class="language-javascript">// You're renaming a function and get interrupted:
function processOrder(order) {
  // ...
}

function processOrder2(order) {   // you started the new version...
  if (order.total &gt; 0) {
    // ← you got up for coffee before finishing
// (rest of file)

// SyntaxError: Unexpected end of input
// The whole file fails because the new function was never closed.

// Fix: finish the function or delete the incomplete stub before running.
// Editor "unbalanced brackets" indicator would catch this in real time.</code></pre>
  `,

  /* 3.2 Connects to */
  'debug-1-0-3-2': `
    <ul>
      <li><strong>Reference errors</strong> → different kind of error, happens at runtime not parse time</li>
      <li><strong>Type errors</strong> → runtime errors from operations on wrong types</li>
      <li><strong>Logic errors</strong> → runtime bugs where code runs but result is wrong</li>
      <li><strong>Reading error messages</strong> → SyntaxError format is distinctive; recognize it first</li>
      <li><strong>Editor linting</strong> → most syntax errors get caught by the editor before you save</li>
      <li><strong>Auto-indent</strong> → misaligned braces after indent are a syntax clue</li>
      <li><strong>Bracket matching</strong> → editor feature that highlights matching pairs</li>
      <li><strong>JSON.parse errors</strong> → also SyntaxErrors, but for JSON's grammar</li>
      <li><strong><code>new Function()</code></strong> → dynamic code compilation can throw SyntaxError at runtime</li>
      <li><strong>Strict mode</strong> → additional syntax restrictions in modules and <code>"use strict"</code></li>
      <li><strong>Template literals</strong> → common source of accidental backtick issues</li>
    </ul>
  `,

  /* 3.3 See also */
  'debug-1-0-3-3': `
    <ul>
      <li>Reference errors</li>
      <li>Type errors</li>
      <li>Logic errors</li>
      <li>Reading error messages</li>
      <li>JSON.parse errors</li>
      <li>Template literals</li>
      <li>Strict mode</li>
      <li>Editor linting</li>
      <li>Bracket matching</li>
      <li>Smart quotes vs straight quotes</li>
      <li>Reserved words in JavaScript</li>
    </ul>
  `,

  /* ========================================================= 
   Sub-lesson: 7.2.2 Types of Problems → reference errors
 =======================================================*/

  /* --- Chunk 0: What & How --- */

  /* 0.0 What it is */
  'debug-1-1-0-0': `
    <p>A <strong>reference error</strong> is a runtime error that fires when your code tries to use a name (a variable, function, or identifier) that JavaScript can't find. The name isn't declared anywhere reachable, isn't imported, isn't spelled the same as where it was declared, or hasn't been initialized yet. JS reads the name, looks it up in every scope from innermost to outermost, finds nothing, and throws.</p>
    <p>The classic message is <code>ReferenceError: xyz is not defined</code>. Unlike syntax errors (which happen before code runs), reference errors happen mid-execution — the code parsed fine, it started running, and one specific line asked for a name that doesn't exist. That specificity is helpful for debugging: the error message tells you exactly which name was missing.</p>
  `,

  /* 0.1 Syntax */
  'debug-1-1-0-1': `
<pre class="language-javascript"><code class="language-javascript">// What the error looks like:

// 1. Using an undeclared name
console.log(username);
// ← ReferenceError: username is not defined

// 2. Misspelled variable
const userName = "Alice";
console.log(usernam);
// ← ReferenceError: usernam is not defined

// 3. Using a variable before it's declared (temporal dead zone)
console.log(x);
const x = 5;
// ← ReferenceError: Cannot access 'x' before initialization

// 4. Accessing a variable outside its scope
function inner() {
  const secret = 42;
}
inner();
console.log(secret);
// ← ReferenceError: secret is not defined

// 5. Forgetting to import something
myLibrary.doThing();
// ← ReferenceError: myLibrary is not defined

// The universal telltale message format:
// ReferenceError: &lt;name&gt; is not defined
//   at &lt;file&gt;:&lt;line&gt;:&lt;column&gt;
//
// or:
// ReferenceError: Cannot access '&lt;name&gt;' before initialization</code></pre>
  `,

  /* 0.2 Anatomy / Breakdown */
  'debug-1-1-0-2': `
<pre class="language-javascript"><code class="language-javascript">// A typical reference error broken down:

// "Uncaught ReferenceError: username is not defined (at app.js:15:14)"
//   │                       │                          │       │  │
//   │                       │                          │       │  └── column 14 on that line
//   │                       │                          │       └── line 15 of app.js
//   │                       │                          └── the file
//   │                       └── the NAME that couldn't be found + "is not defined"
//   └── the error type — ReferenceError specifically

// what JS was doing when it hit the error:
// 1. reached the line that mentions "username."
// 2. looked in the current (innermost) scope for a variable called "username."
// 3. not found → walked outward to the parent scope.
// 4. not found → kept walking up the scope chain to the global scope.
// 5. not found in the global scope either → gave up and threw ReferenceError.

// key mental model:
// - JS finds names by walking scopes from innermost to outermost.
// - if the walk finishes with no match → ReferenceError.
// - the error is thrown at the exact line that tried to use the missing name.
// - the ONLY info you need to fix it is: which name is missing, and where.

// two shapes of the message:
// "X is not defined"                            → the name literally doesn't exist anywhere reachable
// "Cannot access 'X' before initialization"     → the name is declared BELOW this line but with let/const</code></pre>
  `,

  /* 0.3 Syntax Details That Matter */
  'debug-1-1-0-3': `
    <p><strong>The name in the error message is exactly what to search for.</strong> If the error says <code>username is not defined</code>, search your file (and imports) for <code>username</code>. You're looking for either a missing declaration, a misspelling, or a scope mismatch. Case matters — <code>Username</code> and <code>username</code> are different names:</p>
<pre class="language-javascript"><code class="language-javascript">const userName = "Alice";
console.log(username);
// ReferenceError: username is not defined
// the message says "username" (all lowercase).
// you defined "userName" (camelCase).
// search finds userName but not username → the misspelling IS the bug.</code></pre>

    <p><strong>Reference errors happen at runtime, not parse time.</strong> The file parses fine — the code is valid JavaScript. It just references a name that doesn't exist when execution reaches that line. Lines above the error still run:</p>
<pre class="language-javascript"><code class="language-javascript">console.log("A");     // fires
console.log("B");     // fires
console.log(oops);    // ReferenceError — execution stops here
console.log("C");     // never runs</code></pre>

    <p><strong>Scope determines what's visible.</strong> Names declared with <code>let</code>, <code>const</code>, or <code>var</code> are scoped to the function or block they're in. Reach for one outside its scope and you get a reference error, even though the name "exists" somewhere in the file:</p>
<pre class="language-javascript"><code class="language-javascript">function calc() {
  const result = 42;   // scoped to calc()
}
calc();
console.log(result);   // ReferenceError: result is not defined
// result IS in the code, but it's inaccessible from here.
// scope, not existence, is what matters.</code></pre>

    <p><strong>The Temporal Dead Zone (TDZ) is a special reference error case.</strong> Variables declared with <code>let</code> and <code>const</code> exist in scope from the start of the block, but you can't read them before their declaration line. Trying gives a different message: "Cannot access X before initialization":</p>
<pre class="language-javascript"><code class="language-javascript">// with let/const:
console.log(x);      // ReferenceError: Cannot access 'x' before initialization
const x = 5;

// with var (which is hoisted and initialized to undefined):
console.log(y);      // undefined, no error
var y = 5;

// the message tells you the type of the problem:
// "not defined"                  → the name doesn't exist at all
// "Cannot access before init"    → the name exists but you're too early</code></pre>

    <p><strong>Typos are the #1 cause.</strong> Camelcase vs snakecase, plurals, missing letters, transposed letters. The error is often just "you spelled it wrong":</p>
<pre class="language-javascript"><code class="language-javascript">const employeeCount = 10;
console.log(employeCount);       // ReferenceError — missing 'e'
console.log(employee_count);     // ReferenceError — wrong casing style
console.log(EmployeeCount);      // ReferenceError — capital 'E'</code></pre>

    <p><strong>Assigning to an undeclared variable behaves differently in strict mode.</strong> In loose mode (older code, non-module scripts), assigning to a name that wasn't declared silently creates a global variable — a common source of bugs. In strict mode (all ES modules by default), it throws a ReferenceError:</p>
<pre class="language-javascript"><code class="language-javascript">// loose mode:
function calc() {
  total = 42;         // creates a global "total" silently. surprise.
}

// strict mode (or in modules):
function calc() {
  total = 42;         // ReferenceError: total is not defined
}
// this is a GOOD change — silent globals are a bug source.</code></pre>

    <p><strong>Imports and script loading matter.</strong> If code depends on another script or module and that script isn't loaded, its exported names are missing. This can look like a mysterious reference error where the "obvious" name is unavailable:</p>
<pre class="language-javascript"><code class="language-javascript">// index.html loads scripts in this order:
// &lt;script src="app.js"&gt;&lt;/script&gt;
// &lt;script src="lib.js"&gt;&lt;/script&gt;

// in app.js:
myLib.doThing();     // ReferenceError: myLib is not defined
// myLib is declared in lib.js, but app.js loaded FIRST — before lib.js existed.
// fix: swap the &lt;script&gt; tags, or use module imports which resolve dependencies correctly.</code></pre>
  `,

  /* --- Chunk 1: Why & When --- */

  /* 1.0 What problem it solves */
  'debug-1-1-1-0': `
    <p>Recognizing that an error is a ReferenceError (not a TypeError or SyntaxError) narrows the debugging search enormously. The problem isn't your logic. It isn't the value at runtime. It isn't the operation. It's that a name your code refers to doesn't exist where it's being looked up. That's a small, specific search: find the name, figure out why it's not visible, fix it.</p>
    <p>Reference errors are also usually easy to fix. The error message tells you the exact name that's missing. Ninety percent of the time the fix is one of three things: correct a typo, add a missing declaration or import, or move code to where the variable is in scope. No deep debugging session required.</p>
  `,

  /* 1.1 Why use it */
  'debug-1-1-1-1': `
    <p>Because the error message is precise: it names the exact identifier that's missing. That's more information than most runtime errors give you. TypeErrors say "cannot read properties of undefined" without telling you which variable was undefined. SyntaxErrors sometimes report the wrong line. ReferenceErrors tell you flat-out: "this specific name is not defined." Debugging from there is almost mechanical.</p>
    <p>Also, they're a signal about code quality. Frequent reference errors during development mean scope, imports, or naming conventions could be cleaner. Fixing them once (using strict mode, ES modules, editor autocomplete) prevents whole categories of future bugs.</p>
  `,

  /* 1.2 Where you use it */
  'debug-1-1-1-2': `
<pre class="language-javascript"><code class="language-javascript">// Common places reference errors appear:

// 1. Typos in variable names
const userName = "Alice";
console.log(usrName);    // ReferenceError

// 2. Missing imports
document.getElementById("x").click();   // ok in browser
readFile("file.txt");                    // ReferenceError in browser — no readFile

// 3. Scope mismatches — variable declared in a function, used outside it
function get() {
  const value = 42;
}
console.log(value);      // ReferenceError

// 4. Using let/const before declaration (TDZ)
console.log(x);          // ReferenceError: Cannot access 'x' before initialization
const x = 5;

// 5. Deleted or renamed variables during refactoring
const totalPrice = 100;
// ... you rename it to 'total' but miss one usage:
console.log(totalPrice); // ReferenceError

// 6. Loading scripts in the wrong order
// script1.js uses myGlobal, defined in script2.js loaded AFTER script1.

// 7. Environment mismatches
process.env.NODE_ENV;    // ReferenceError in browser — process is Node-only
window.location;         // ReferenceError in Node — window is browser-only

// 8. Forgetting to declare a variable at all
function calc(items) {
  total = 0;             // in strict mode: ReferenceError
  items.forEach(i =&gt; total += i.price);
}

// 9. Assuming a name from another file is global
// In app.js:
formatDate(now());       // ReferenceError if formatDate wasn't imported

// 10. Using arrow function parameters outside the arrow
const items = data.map((item) =&gt; item.name);
console.log(item);       // ReferenceError — item only exists inside the arrow</code></pre>

    <p>Wherever a name is used, JS has to be able to resolve it. If it can't, ReferenceError. The fix is always about making the name reachable.</p>
  `,

  /* 1.3 Plain English explanation */
  'debug-1-1-1-3': `
    <p>Imagine your code is having a conversation with JavaScript and says "grab me the wrench." JavaScript looks around the room, doesn't see a wrench, and says "there's no wrench here." That's a ReferenceError — you asked for something by name, and the thing you named isn't in the room.</p>
    <p>Maybe the wrench is in the garage (wrong scope). Maybe you called it a "spanner" but the label says "wrench" (typo/case mismatch). Maybe you haven't brought a wrench in yet (used before declared). Maybe there's no wrench in this house at all (missing import or undefined variable). The fix is always the same shape: figure out where the tool actually is, and either bring it into the room or use the right name for it.</p>
  `,

  /* 1.4 Mental model */
  'debug-1-1-1-4': `
    <p>Think of JavaScript's scope as a series of nested rooms. The current function is a small room. Its parent function is a bigger room around it. The module or file is a bigger room around that. The global scope is the biggest room, containing everything. When your code mentions a name, JavaScript walks OUTWARD through the rooms: "Is this variable in the current room? No? Try the next room out. No? Keep going." If it walks all the way out and never finds the name, ReferenceError.</p>
    <p>Two useful implications: (1) you can access outer-room variables from inner rooms (closures work), but you CAN'T access inner-room variables from outer rooms. (2) misspelling a name isn't magically corrected — JS is looking for the exact letters you wrote. If the room contains "userName" and you asked for "username," JS keeps walking outward looking for the lowercase version, doesn't find it, and gives up.</p>
    <p>Whenever you get a ReferenceError, the question is always "which room is the variable actually in, and how do I make my code look in that room?"</p>
  `,

  /* 1.5 Step-by-step walkthrough */
  'debug-1-1-1-5': `
<pre class="language-javascript"><code class="language-javascript">// Scenario: your click handler fires and you see a ReferenceError.

// Original code:
document.querySelector(".save-btn").addEventListener("click", () =&gt; {
  const draft = readForm();
  console.log("saving:", drafts);   // ← ReferenceError here
  saveToServer(draft);
});

// Error in console:
// Uncaught ReferenceError: drafts is not defined
//   at HTMLButtonElement.&lt;anonymous&gt; (app.js:14:26)

// Step 1: identify the error TYPE.
// It's a ReferenceError. The problem isn't logic or type — a NAME can't be found.

// Step 2: read the NAME that's missing.
// The message says "drafts is not defined." That's the exact identifier to look for.

// Step 3: find where "drafts" is referenced.
// Line 14, column 26. It's inside the click handler:
// console.log("saving:", drafts);

// Step 4: check if "drafts" is declared anywhere reachable from that line.
// Search the file: no declaration for "drafts."
// You find "draft" (singular) declared just above the log line.

// Step 5: the typo IS the bug.
// The developer wrote "drafts" but meant "draft."
// Case, plurals, and near-typos are the #1 cause of ReferenceErrors.

// Step 6: fix.
document.querySelector(".save-btn").addEventListener("click", () =&gt; {
  const draft = readForm();
  console.log("saving:", draft);    // ← singular, matches the declaration
  saveToServer(draft);
});

// Step 7: reload, click, verify the log fires and no error appears.

// Total time: about 15 seconds once you recognized the ReferenceError type
// and matched the missing name against what was declared nearby.</code></pre>
  `,

  /* --- Chunk 2: The Click --- */

  /* 2.0 Debugging clue */
  'debug-1-1-2-0': `
    <p>The message itself is the whole clue. Read the exact identifier name and search for it:</p>
<pre class="language-javascript"><code class="language-javascript">// error: "ReferenceError: xyzTotal is not defined"
// step 1: Ctrl+F / Cmd+F your codebase for "xyzTotal"
// step 2: what you find (or don't) tells you the fix:
//   - found nowhere      → typo, or missing declaration/import
//   - found in a scope you're outside → move the code, or restructure the scope
//   - found DECLARED BELOW this line with let/const → move the declaration up, or use var/hoisted function

// If the error says "Cannot access 'X' before initialization":
// - X is declared with let or const somewhere below the failing line.
// - the fix: either move the declaration above the usage,
//   or restructure the code so the usage happens later.

// If the error is inside an event handler and the variable is defined outside it:
// - closure should let you access it. if it can't, the variable really isn't in scope.
// - or you're inside a different context (like a class method's "this") than you think.

// If the error mentions a name from another module or library:
// - the import is missing, misspelled, or the module didn't load yet.
// - check the &lt;script&gt; tags or the import statements at the top of the file.</code></pre>

    <p>One quick sanity check: type the missing name into DevTools' console directly. If it's undefined at the global level and you expected it to be, the missing declaration or import is confirmed.</p>
  `,

  /* 2.1 The part that makes it click */
  'debug-1-1-2-1': `
    <p>The aha: <strong>ReferenceError tells you the exact name that's missing.</strong> This makes it one of the friendliest JS errors — you don't have to guess. You don't have to trace values. You just search for the name and figure out why the code can't find it:</p>
<pre class="language-javascript"><code class="language-javascript">// compare the diagnostic power:
// TypeError: "Cannot read properties of undefined (reading 'name')"
//   → which variable was undefined? not specified. dig around to find out.

// ReferenceError: "userName is not defined"
//   → EXACTLY this name is missing. search for it. done.

// once you notice this asymmetry, ReferenceErrors go from "annoying" to
// "the easiest kind of runtime error to fix."</code></pre>
    <p>Once that clicks, the whole class of "why isn't this variable available?" bugs stops feeling mysterious. It becomes a mechanical checklist: (1) read the missing name, (2) search for it, (3) determine if it's a typo, a scope issue, or a missing import, (4) fix.</p>
  `,

  /* 2.2 Common confusions */
  'debug-1-1-2-2': `
    <p><strong>"But I DID declare it — why does it say it's not defined?"</strong> Three usual suspects: (1) you declared it, but in a different scope than where you're using it. (2) You spelled the declaration one way and the usage another. (3) You declared it with <code>let</code>/<code>const</code> AFTER the line that uses it (TDZ).</p>

    <p><strong>"ReferenceError vs. undefined — what's the difference?"</strong> <code>undefined</code> is a value — the variable exists but has no value. <code>ReferenceError</code> means the variable itself doesn't exist. <code>console.log(x)</code> where <code>let x;</code> logs <code>undefined</code>. <code>console.log(x)</code> where <code>x</code> was never declared throws ReferenceError.</p>

    <p><strong>"Why does typeof work on undeclared variables without a ReferenceError?"</strong> Special case in the spec. <code>typeof</code> is designed as the "is this defined at all?" check, so it's allowed to inspect names that don't exist and just returns <code>"undefined"</code>. Every other operator throws.</p>

    <p><strong>"The variable is defined in an outer scope — why can't the inner function see it?"</strong> It usually can, via closure. If it can't, either the outer scope was destroyed (rare), or the outer name and inner name aren't actually the same (typo, shadowing). Log <code>typeof outerName</code> from inside the inner function to confirm.</p>

    <p><strong>"Chrome auto-completes the name — so it must exist, right?"</strong> DevTools autocomplete uses many sources: global scope, current DevTools context, past command history. Just because it autocompletes doesn't mean the name is available in your code's scope. Trust the error over autocomplete.</p>

    <p><strong>"Cannot access X before initialization — but X IS declared, I can see it."</strong> That's the TDZ. <code>let</code> and <code>const</code> variables exist in scope from the top of the block, but reading them before their declaration line throws. Move the declaration above the usage, or use <code>var</code> if you actually want hoisted behavior.</p>

    <p><strong>"My import looks fine but I still get ReferenceError."</strong> Common causes: (1) the module's export doesn't match your import name (<code>import { foo }</code> vs actual export <code>bar</code>). (2) A circular import means the value isn't ready yet when it's read. (3) The bundler or dev server isn't picking up the import path correctly.</p>
  `,

  /* 2.3 Common mistakes */
  'debug-1-1-2-3': `
<pre class="language-javascript"><code class="language-javascript">// Mistake 1: typo in the variable name
const userName = "Alice";
console.log(usrName);      // ReferenceError
// fix: match the declaration exactly
console.log(userName);

// Mistake 2: case mismatch
const userName = "Alice";
console.log(username);     // ReferenceError — camelCase vs lowercase
console.log(UserName);     // ReferenceError — camelCase vs PascalCase
// fix: match exactly
console.log(userName);

// Mistake 3: using a function-scoped variable outside its function
function calc() {
  const total = 42;
}
console.log(total);        // ReferenceError
// fix: return the value or move the declaration outward
function calc() {
  return 42;
}
const total = calc();
console.log(total);

// Mistake 4: using a block-scoped variable outside its block
if (true) {
  const message = "hi";
}
console.log(message);      // ReferenceError
// fix: declare outside the block
let message;
if (true) {
  message = "hi";
}
console.log(message);

// Mistake 5: using let/const before declaration
console.log(x);            // ReferenceError: Cannot access 'x' before initialization
const x = 5;
// fix: move the declaration up
const x = 5;
console.log(x);

// Mistake 6: assuming globals are automatic
myGlobalHelper();          // ReferenceError if never declared or imported
// fix: import it or declare it explicitly

// Mistake 7: script load order
// index.html:
// &lt;script src="usesFoo.js"&gt;&lt;/script&gt;   ← loads first
// &lt;script src="foo.js"&gt;&lt;/script&gt;        ← declares Foo, loads second
// usesFoo.js throws ReferenceError: Foo is not defined
// fix: reorder script tags, or use type="module" for proper dependency handling

// Mistake 8: strict mode silently-globals bug
"use strict";
function calc() {
  total = 42;              // ReferenceError
}
// fix: declare with let/const
function calc() {
  let total = 42;
}

// Mistake 9: using a function parameter name outside the function
function greet(name) {
  console.log("hi", name);
}
greet("Alice");
console.log(name);         // ReferenceError — name only exists inside greet
// fix: move the value where you need it, or return it

// Mistake 10: destructured name that doesn't exist on the object
const { username } = user;      // undefined, not an error (destructures a missing property)
console.log(usrname);           // ReferenceError — typo in the usage
// fix: match names between destructuring and usage

// Mistake 11: iterator variable used outside its loop
for (let i = 0; i &lt; 10; i++) { }
console.log(i);            // ReferenceError — i only exists inside the loop
// fix: use var if you need to leak the variable, or declare outside
let i;
for (i = 0; i &lt; 10; i++) { }
console.log(i);            // 10

// Mistake 12: forgetting to import in a module
// module A:
import { helper } from "./b.js";
helper();                  // works

// module A without the import:
helper();                  // ReferenceError

// Mistake 13: wrong "this" in arrow-vs-function
class Widget {
  init() {
    setTimeout(function() {
      console.log(this.name);    // "this" is not the Widget instance
      console.log(name);          // ReferenceError if trying to shortcut
    }, 100);
  }
}
// fix: use an arrow function to preserve "this"
class Widget {
  init() {
    setTimeout(() =&gt; {
      console.log(this.name);
    }, 100);
  }
}</code></pre>
  `,

  /* --- Chunk 3: In Practice --- */

  /* 3.0 Tiny examples */
  'debug-1-1-3-0': `
<pre class="language-javascript"><code class="language-javascript">// Common reference error patterns and fixes.

// Typo
const userName = "Alice";
console.log(usrName);            // ReferenceError
console.log(userName);           // ✓

// Case mismatch
const Total = 100;
console.log(total);              // ReferenceError
console.log(Total);              // ✓

// Missing declaration
console.log(count);              // ReferenceError
const count = 0;
console.log(count);              // ✓

// TDZ (temporal dead zone)
console.log(x);                  // ReferenceError: Cannot access 'x' before initialization
const x = 5;

// Scope mismatch (function)
function get() { const v = 1; }
get();
console.log(v);                  // ReferenceError

// Scope mismatch (block)
if (true) { const v = 1; }
console.log(v);                  // ReferenceError

// Loop variable outside loop
for (let i = 0; i &lt; 5; i++) {}
console.log(i);                  // ReferenceError

// Function parameter outside function
function greet(name) {}
greet("Alice");
console.log(name);               // ReferenceError

// Missing import
processData();                   // ReferenceError if processData isn't imported

// Wrong environment
window.location;                 // ReferenceError in Node
process.env.NODE_ENV;            // ReferenceError in the browser

// Strict-mode assignment
"use strict";
undeclared = 10;                 // ReferenceError
let declared = 10;               // ✓

// Script load order
// script1.js:
myLib.doThing();                 // ReferenceError if myLib script loaded after this one

// Destructure gives undefined, not error
const { foo } = {};              // foo is undefined, no error
console.log(foo);                // undefined (not a ReferenceError)
console.log(fooo);               // ReferenceError — typo IS a reference error

// The typeof safety trick
if (typeof maybeExists !== "undefined") {   // no ReferenceError even if maybeExists doesn't exist
  use(maybeExists);
}

// Arrow captures outer variables (closure)
const outer = 1;
const fn = () =&gt; console.log(outer);    // ✓ works via closure

// Arrow can't fix "this" being wrong — but that's different from ReferenceError</code></pre>
  `,

  /* 3.1 Real website uses */
  'debug-1-1-3-1': `
    <p><strong>Example: typo caught by the runtime</strong></p>
<pre class="language-javascript"><code class="language-javascript">// You've been coding for hours. You add a save handler:
saveBtn.addEventListener("click", () =&gt; {
  const draft = readForm();
  save(draft);
  showToast("Saved: " + drafts.title);   // typo — "drafts" not "draft"
});
// error: ReferenceError: drafts is not defined
// message names the exact bug. search "drafts" → find only "draft" declared.
// fix: change "drafts" to "draft" and reload.</code></pre>

    <p><strong>Example: scope confusion in an event listener</strong></p>
<pre class="language-javascript"><code class="language-javascript">function setupForm() {
  const submitCount = 0;
  form.addEventListener("submit", () =&gt; {
    submitCount++;                    // ✓ closure — works
  });
}
setupForm();
console.log(submitCount);             // ReferenceError — outer scope can't see inside setupForm

// fix: move submitCount to a higher scope
let submitCount = 0;
function setupForm() {
  form.addEventListener("submit", () =&gt; { submitCount++; });
}
console.log(submitCount);             // ✓</code></pre>

    <p><strong>Example: script load order in a plain HTML page</strong></p>
<pre class="language-javascript"><code class="language-javascript">// index.html:
// &lt;script src="app.js"&gt;&lt;/script&gt;
// &lt;script src="utils.js"&gt;&lt;/script&gt;

// app.js runs first and does:
formatDate(new Date());      // ReferenceError: formatDate is not defined

// utils.js declares formatDate but hasn't loaded yet.

// fix option 1: swap the &lt;script&gt; tags
// &lt;script src="utils.js"&gt;&lt;/script&gt;
// &lt;script src="app.js"&gt;&lt;/script&gt;

// fix option 2: use type="module" for proper dependency resolution
// &lt;script type="module" src="app.js"&gt;&lt;/script&gt;
// then in app.js:
import { formatDate } from "./utils.js";
formatDate(new Date());</code></pre>

    <p><strong>Example: TDZ from moving code without moving declarations</strong></p>
<pre class="language-javascript"><code class="language-javascript">// original code:
const config = { theme: "dark" };
initApp(config);

// you refactor — moving initApp higher up "for readability":
initApp(config);              // ReferenceError: Cannot access 'config' before initialization
const config = { theme: "dark" };

// fix: keep the declaration BEFORE the usage
const config = { theme: "dark" };
initApp(config);</code></pre>

    <p><strong>Example: missing import after copying code between files</strong></p>
<pre class="language-javascript"><code class="language-javascript">// you copy a function from utils.js to newModule.js.
// utils.js had: import { formatDate } from "./date-helpers.js";
// newModule.js is missing that import.

export function formatEntry(entry) {
  return \`\${formatDate(entry.date)}: \${entry.text}\`;
  // ReferenceError: formatDate is not defined
}

// fix: add the missing import at the top of newModule.js
import { formatDate } from "./date-helpers.js";</code></pre>

    <p><strong>Example: environment mismatch (Node vs browser)</strong></p>
<pre class="language-javascript"><code class="language-javascript">// You wrote code in a Node script:
console.log(process.env.API_KEY);

// You paste it into a browser file:
// ReferenceError: process is not defined
// process is a Node global; it doesn't exist in browsers.

// fix: safely check for the environment
const key = typeof process !== "undefined"
  ? process.env.API_KEY
  : import.meta.env?.VITE_API_KEY;      // or whatever the browser-side pattern is
</code></pre>
  `,

  /* 3.2 Connects to */
  'debug-1-1-3-2': `
    <ul>
      <li><strong>Syntax errors</strong> → different category (parse-time vs runtime)</li>
      <li><strong>Type errors</strong> → the next-most-common runtime error; occurs when the name IS defined but its value is wrong</li>
      <li><strong>Scope</strong> → the mechanism JS uses to resolve names; determines if a reference works</li>
      <li><strong>Closures</strong> → why inner functions CAN see outer variables (unless they're truly out of scope)</li>
      <li><strong>Hoisting</strong> → why <code>var</code> declarations are "moved up" but <code>let</code>/<code>const</code> aren't (TDZ)</li>
      <li><strong>Temporal Dead Zone (TDZ)</strong> → special ReferenceError case for <code>let</code>/<code>const</code></li>
      <li><strong>Strict mode</strong> → makes undeclared-assignment throw instead of creating globals</li>
      <li><strong>Modules</strong> → module scope prevents accidental globals and requires explicit imports</li>
      <li><strong>Imports</strong> → the module system replacement for script-load-order concerns</li>
      <li><strong><code>typeof</code></strong> → the one operator that doesn't throw on undeclared names</li>
      <li><strong>Reading error messages</strong> → ReferenceError has the friendliest message shape of any error</li>
    </ul>
  `,

  /* 3.3 See also */
  'debug-1-1-3-3': `
    <ul>
      <li>Syntax errors</li>
      <li>Type errors</li>
      <li>Scope</li>
      <li>Closures</li>
      <li>Hoisting</li>
      <li>Temporal Dead Zone</li>
      <li>Strict mode</li>
      <li>Modules / import / export</li>
      <li><code>typeof</code></li>
      <li>Script load order</li>
      <li>Reading error messages</li>
    </ul>
  `,

  /* ========================================================= 
   Sub-lesson: 7.2.3 Types of Problems → type errors
 =======================================================*/

  /* --- Chunk 0: What & How --- */

  /* 0.0 What it is */
  'debug-1-2-0-0': `
    <p>A <strong>type error</strong> is a runtime error that fires when your code tries to do something a value's type doesn't support. The variable exists — it's not a ReferenceError — but its value is the wrong kind of thing for the operation you're trying to run on it. Calling a string like a function, reading a property from <code>null</code>, treating <code>undefined</code> like an object, iterating over a number. The value is present; it just can't do what you asked.</p>
    <p>This is the most common runtime error you'll see in JavaScript, by a mile. Almost every "the app broke" bug in production is a type error — usually "Cannot read properties of undefined." Because JS is loosely typed, code that assumes a specific type ("this variable is a number") will accept anything at runtime, and only crash the moment the wrong type reaches an operation that requires the right one.</p>
  `,

  /* 0.1 Syntax */
  'debug-1-2-0-1': `
<pre class="language-javascript"><code class="language-javascript">// What the error looks like:

// 1. Reading a property from null or undefined
const user = null;
console.log(user.name);
// ← TypeError: Cannot read properties of null (reading 'name')

const config = undefined;
console.log(config.theme);
// ← TypeError: Cannot read properties of undefined (reading 'theme')

// 2. Calling something that isn't a function
const greeting = "hello";
greeting();
// ← TypeError: greeting is not a function

const total = 42;
total();
// ← TypeError: total is not a function

// 3. Calling a method that doesn't exist on the value's type
const num = 5;
num.forEach(x =&gt; x);
// ← TypeError: num.forEach is not a function

// 4. Iterating a non-iterable
for (const x of 42) { }
// ← TypeError: 42 is not iterable

// 5. Using a spread on a non-iterable
const arr = [...null];
// ← TypeError: object null is not iterable

// 6. Assigning to a const or a read-only property
const x = 5;
x = 10;
// ← TypeError: Assignment to constant variable

// The universal telltale format:
// TypeError: &lt;description of what went wrong&gt;
//   at &lt;file&gt;:&lt;line&gt;:&lt;column&gt;</code></pre>
  `,

  /* 0.2 Anatomy / Breakdown */
  'debug-1-2-0-2': `
<pre class="language-javascript"><code class="language-javascript">// A typical type error broken down:

// "Uncaught TypeError: Cannot read properties of null (reading 'name') (at app.js:42:15)"
//   │                   │                                                │       │  │
//   │                   │                                                │       │  └── column
//   │                   │                                                │       └── line 42
//   │                   │                                                └── file
//   │                   └── message: what went wrong and which property was being read
//   └── the error type — TypeError, meaning the value's TYPE was wrong for what was tried

// what JS was doing when it hit the error:
// 1. reached the expression: user.name
// 2. looked up user — found it, no ReferenceError.
// 3. read user's value → null.
// 4. attempted to read the ".name" property.
// 5. null has no properties (it's the ABSENCE of an object).
// 6. TypeError thrown at that exact line.

// key mental model:
// - the variable EXISTS (otherwise it'd be a ReferenceError).
// - but the value it HOLDS is the wrong TYPE for the operation.
// - the error tells you the operation ("reading 'name'") and the type ("null").
// - fix: find where the value became null, undefined, or the wrong type in the first place.

// the most common shapes:
// "Cannot read properties of undefined (reading 'X')"  → obj is undefined
// "Cannot read properties of null (reading 'X')"       → obj is null
// "X is not a function"                                → X is not a function (probably undefined or wrong type)
// "X is not iterable"                                  → tried to iterate a non-iterable
// "Assignment to constant variable"                    → tried to reassign a const
// "X is not defined"                                   → wait, that's a ReferenceError, not TypeError</code></pre>
  `,

  /* 0.3 Syntax Details That Matter */
  'debug-1-2-0-3': `
    <p><strong>The error message tells you the OPERATION that failed AND the value's type.</strong> Both pieces are diagnostic gold. "Cannot read properties of null (reading 'items')" tells you: (1) something was null, and (2) it was being asked for its <code>.items</code> property. Search for <code>.items</code> and you'll find the failing line quickly:</p>
<pre class="language-javascript"><code class="language-javascript">// error: "Cannot read properties of undefined (reading 'title')"
// two facts embedded:
// - something is undefined
// - it was being read as ".title"

// searching for ".title" in your code lands on:
document.querySelector(".title").textContent = draft.title;
// step 1: which .title? probably draft.title.
// step 2: log draft to see if it's undefined.
// answer: draft is undefined → follow it upstream.</code></pre>

    <p><strong>Type errors happen at runtime, not parse time.</strong> The code parsed fine. It ran fine until the exact line where the wrong-typed value met an operation it can't do. Lines before it executed normally; lines after don't run at all (unless the error is caught):</p>
<pre class="language-javascript"><code class="language-javascript">console.log("A");            // fires
const user = getUser();      // fires
console.log(user.name);      // TypeError if user is null → execution stops
console.log("B");            // never runs</code></pre>

    <p><strong>The three biggest sources: <code>null</code>, <code>undefined</code>, and wrong function calls.</strong> These account for the overwhelming majority of TypeErrors in real code:</p>
<pre class="language-javascript"><code class="language-javascript">// (1) null / undefined property access
data.user.email;             // if data.user is null or undefined → TypeError

// (2) calling something that isn't a function
onSuccess();                 // if onSuccess wasn't provided (undefined) → "is not a function"

// (3) calling a method that doesn't exist on the type
"5".map(x =&gt; x * 2);         // strings don't have .map → "not a function"
[1, 2, 3].push(4);           // arrays DO have .push → works
{a: 1}.forEach(fn);          // plain objects don't have .forEach → "not a function"</code></pre>

    <p><strong>Optional chaining (<code>?.</code>) prevents most null/undefined TypeErrors.</strong> The <code>?.</code> operator returns <code>undefined</code> instead of throwing when the value before it is nullish. Use it liberally at boundaries where values might be missing:</p>
<pre class="language-javascript"><code class="language-javascript">// without optional chaining:
const name = user.profile.name;
// crashes if user is null OR user.profile is null.

// with optional chaining:
const name = user?.profile?.name;
// gracefully returns undefined if user or user.profile is nullish.

// combine with ?? for a default:
const name = user?.profile?.name ?? "Anonymous";
// undefined → "Anonymous". null → "Anonymous". actual name → the name.</code></pre>

    <p><strong>Different error MESSAGES for different failure modes.</strong> Reading the message determines what kind of fix you need:</p>
<pre class="language-javascript"><code class="language-javascript">// "Cannot read properties of undefined (reading 'X')"
// → something before the .X was undefined
// → fix upstream: why was that value undefined?

// "Cannot read properties of null (reading 'X')"
// → something before .X was null
// → often a querySelector that returned null, or an explicit null value

// "X is not a function"
// → tried to call X() but X isn't callable
// → X is probably undefined, or you got the wrong name

// "X is not iterable"
// → tried to spread or for...of a non-iterable
// → X is probably null/undefined or an object (which isn't iterable by default)

// "Assignment to constant variable"
// → tried to reassign a const
// → either use let, or don't reassign

// "Cannot set properties of null (setting 'textContent')"
// → tried to set .textContent on null (querySelector didn't find the element)</code></pre>

    <p><strong>Wrong types often "kind of work" until they don't.</strong> This is why type errors are hard to prevent. <code>"5" + 1</code> is <code>"51"</code>, not <code>6</code>, but no error. <code>undefined + 1</code> is <code>NaN</code>, no error. <code>null.forEach(fn)</code> — THAT throws. Type errors only appear at the exact moment the wrong type meets an operation that refuses to be lenient:</p>
<pre class="language-javascript"><code class="language-javascript">// silent wrong-type behavior (no error):
"5" + 1;                     // "51"
undefined + 1;               // NaN
null == undefined;           // true (loose equality)
Number("");                  // 0
[] + [];                     // "" — silently coerces to strings

// explicit TypeErrors (the operation refuses):
null.name;                   // TypeError
undefined();                 // TypeError
(5).forEach(fn);             // TypeError

// this asymmetry is why testing surface behavior isn't enough —
// bad data can travel through the app silently for a long time before
// finally hitting an operation strict enough to throw.</code></pre>
  `,

  /* --- Chunk 1: Why & When --- */

  /* 1.0 What problem it solves */
  'debug-1-2-1-0': `
    <p>Recognizing that an error is a TypeError tells you the variable exists but holds the wrong kind of value. That immediately eliminates a whole class of possible bugs (typos, missing imports, scope issues — all of those are ReferenceErrors). You know the code CAN reach the variable; you just have to figure out why the value it holds is <code>null</code>, <code>undefined</code>, a string instead of a number, an object instead of an array, or whatever.</p>
    <p>This lets you skip straight to "trace the value upstream." The error message often tells you which property or method was being accessed, which points to the failing line. From there, you log the object one step before the error and check its type. Almost every TypeError debug session follows this exact pattern: read the error, find the line, log the value, follow it upstream to find where it became wrong.</p>
  `,

  /* 1.1 Why use it */
  'debug-1-2-1-1': `
    <p>Because TypeErrors are the #1 runtime crash in JavaScript apps, and understanding how they work turns them from mystery into routine. The class is huge — anything from a missing DOM element to a failed API request to a forgotten function argument surfaces as a TypeError. If you have one debugging technique nailed, this is the one it should be.</p>
    <p>Beyond debugging, understanding type errors makes you write more defensive code up front. You start reaching for optional chaining (<code>?.</code>), nullish coalescing (<code>??</code>), type guards (<code>typeof</code>, <code>Array.isArray</code>), and default values in the right places. That prevents entire categories of crashes before they happen. Preventing TypeErrors is one of the biggest wins in day-to-day JS.</p>
  `,

  /* 1.2 Where you use it */
  'debug-1-2-1-2': `
<pre class="language-javascript"><code class="language-javascript">// Common places TypeErrors appear:

// 1. DOM selection returned null
document.querySelector(".missing").textContent = "hi";
// TypeError: Cannot set properties of null (setting 'textContent')

// 2. API returned unexpected shape
const res = await fetch("/api/user").then(r =&gt; r.json());
console.log(res.name);
// works if res is { name: "..." }
// TypeError if res is null, undefined, or { error: "..." }

// 3. Optional callback not provided
function setup(onSuccess) {
  onSuccess();     // TypeError if setup was called without arguments
}

// 4. Wrong method for the type
const nums = "1,2,3";
nums.forEach(n =&gt; console.log(n));    // TypeError: strings don't have .forEach

// 5. Data with missing fields
const user = { name: "Alice" };       // no .settings
console.log(user.settings.theme);     // TypeError

// 6. Accessing something on the result of a failed operation
const found = list.find(item =&gt; item.id === 999);   // undefined if not found
console.log(found.name);                             // TypeError

// 7. Destructuring null/undefined
const { name } = null;                // TypeError: Cannot destructure 'null' as it is null
const [a, b] = undefined;             // TypeError: not iterable

// 8. Spread on a nullish value
const merged = { ...maybeNull };      // TypeError if maybeNull is null (technically works in newer JS with objects, but NOT with arrays)
const arr = [...maybeUndefined];      // TypeError: undefined is not iterable

// 9. Calling before something is ready
const el = document.querySelector(".btn");
el.click();                            // TypeError if the DOM wasn't ready and el is null

// 10. Reassigning a const
const total = 0;
total = 5;                            // TypeError: Assignment to constant variable

// 11. Async data before it arrives
let user;
fetchUser().then(u =&gt; user = u);
console.log(user.name);               // TypeError — user is still undefined here

// 12. Chained property access on optional data
const zip = form.address.zipcode;     // TypeError if form.address doesn't exist</code></pre>

    <p>Anywhere data flows from an unreliable source (user input, network, storage, DOM) into an operation that assumes a specific shape, TypeError is a possibility.</p>
  `,

  /* 1.3 Plain English explanation */
  'debug-1-2-1-3': `
    <p>Imagine you're at a coffee shop and ask the barista to "grind the flour and brew it into espresso." The barista stares at you. There's no error in your <em>request</em> — the words are grammatical. The barista knows what "grind," "flour," "brew," and "espresso" mean. It's just that you can't brew flour into espresso. The <em>ingredient</em> is the wrong TYPE for the operation.</p>
    <p>Type errors in JavaScript are that stare. Your code is asking for an operation on the wrong kind of thing. "Read the <code>.name</code> property of nothing." "Call this string as if it were a function." "Iterate over this number." The operation isn't nonsense; the value coming in is just wrong for it. The fix is always about supplying the right kind of value — either preventing the wrong value from reaching this line, or checking for the wrong value and handling it before the operation.</p>
  `,

  /* 1.4 Mental model */
  'debug-1-2-1-4': `
    <p>Think of every JavaScript operation as having a "shape" it expects. <code>.forEach(fn)</code> expects an array-shaped thing. <code>.propertyName</code> expects an object-shaped thing. <code>()</code> expects a function-shaped thing. <code>for...of</code> expects an iterable-shaped thing. These operations work like power outlets — the plug either fits or it doesn't. When you try to plug a lamp into a USB port, nothing happens except an error.</p>
    <p>A TypeError is the "wrong plug for this outlet" alarm. Your code is trying to jam a null-shaped or undefined-shaped or string-shaped value into a slot that expects a different shape. The fix isn't about the plug (the operation) — the plug is fine. The fix is about the cord (the value): make sure the right kind of value is arriving at this outlet, or check the shape first and don't attempt the connection when it wouldn't fit.</p>
  `,

  /* 1.5 Step-by-step walkthrough */
  'debug-1-2-1-5': `
<pre class="language-javascript"><code class="language-javascript">// Scenario: your form's save button crashes when clicked.

// Original code:
saveBtn.addEventListener("click", () =&gt; {
  const draft = collectFormData();
  const title = draft.title.trim();
  saveToServer({ title });
});

// Error in console:
// Uncaught TypeError: Cannot read properties of undefined (reading 'trim')
//   at HTMLButtonElement.&lt;anonymous&gt; (app.js:18:29)

// Step 1: identify the error TYPE.
// It's a TypeError. The variable exists — the value is just wrong.
// Message: "Cannot read properties of undefined (reading 'trim')"

// Step 2: extract the two facts from the message.
// - the value is undefined
// - the operation was reading '.trim'
// So something.trim was being called, and "something" is undefined.

// Step 3: find the line. Line 18, column 29.
const title = draft.title.trim();
//                        ^ column ~29

// Step 4: which of the two things is undefined — draft or draft.title?
// The .trim is being read from "draft.title", so THAT is what's undefined.
// (If "draft" itself were undefined, the message would say "reading 'title'".)

// Step 5: log to confirm.
console.log("draft:", draft);
const title = draft.title.trim();

// output: draft: { name: "Alice", email: "a@x.com" }
// draft is defined. draft.title is missing — the form doesn't have a "title" field.

// Step 6: follow it upstream.
// collectFormData() returns { name, email } — no title.
// the form template doesn't have a &lt;input name="title"&gt; field.
// the bug is either: the form is missing a field, or the code shouldn't try to read title.

// Step 7: fix depending on intent.
// Option A: add the missing field to the form.
// Option B: guard the read with optional chaining and provide a default.
const title = draft.title?.trim() ?? "";
saveToServer({ title });

// Total time: about 30 seconds once you recognized "reading 'trim' on undefined"
// and parsed which specific expression was undefined.</code></pre>
  `,

  /* --- Chunk 2: The Click --- */

  /* 2.0 Debugging clue */
  'debug-1-2-2-0': `
    <p>The message tells you which OPERATION failed and which TYPE it received. Parse both, then log the value directly:</p>
<pre class="language-javascript"><code class="language-javascript">// error: "Cannot read properties of undefined (reading 'name')"
// → operation: reading '.name'
// → offending type: undefined

// go to the failing line, log the object that's being accessed:
console.log("obj:", obj, "typeof:", typeof obj);
console.log(obj.name);

// output will confirm — obj is undefined (or null).
// then work backward: why did obj end up undefined?

// error: "X is not a function"
// → the value X, at this line, is not a function.
// → probably undefined, a string, or something you didn't expect.
console.log("X:", X, "typeof:", typeof X);
X();

// error: "Cannot set properties of null (setting 'textContent')"
// → tried to write to .textContent on null.
// → the querySelector or lookup returned null.
console.log("el:", el);
el.textContent = "hi";

// error: "X is not iterable"
// → for...of, spread, destructuring, or Array.from on a non-iterable.
// → often means X is null/undefined or a plain object (which isn't iterable by default).
console.log("X:", X, "isArray:", Array.isArray(X));
for (const item of X) { }</code></pre>

    <p>Almost every TypeError debug session is: <strong>read the error → identify the operation → log the value just before the operation → follow the wrong value upstream</strong>. The pattern is that predictable.</p>
  `,

  /* 2.1 The part that makes it click */
  'debug-1-2-2-1': `
    <p>The aha: <strong>TypeErrors don't happen where the value becomes wrong — they happen where the wrong value is finally USED.</strong> A variable can be <code>null</code> for 200 lines of code without any complaint. It's only when line 201 tries to read <code>.something</code> from it that the crash happens. The crash location is where the alarm went off, but the leak happened earlier:</p>
<pre class="language-javascript"><code class="language-javascript">// where the bug REALLY is:
const user = data.user;      // line 10 — data.user was undefined, user is now undefined too
// ... 30 lines of unrelated code, all running fine ...
sendEmail(user.email);       // line 42 — TypeError here

// the crash is at line 42, but the fix belongs at line 10 (or wherever data came from).
// staring at line 42 will not reveal the bug.
// following "user" upstream will.</code></pre>
    <p>Once that clicks, TypeError debugging becomes routine. The crash line is a marker, not a target. You use it as the starting point for a walk backward through the code, logging the suspect value at each step, until you find where it first went wrong.</p>
  `,

  /* 2.2 Common confusions */
  'debug-1-2-2-2': `
    <p><strong>"But the variable is right there — how is it undefined?"</strong> The variable IS declared. What's undefined (or null, or wrong-typed) is its VALUE. TypeErrors always mean "the value is the wrong kind," not "the name doesn't exist." Log the variable to see what value it actually holds.</p>

    <p><strong>"Cannot read properties of undefined (reading 'X') — but I'm not reading 'X' anywhere obvious."</strong> Look for chained property access: <code>a.b.c.X</code>. If <code>a.b.c</code> is undefined, the read of <code>X</code> throws. The chain is the source. Search for <code>.X</code> in the file — usually there's just one candidate.</p>

    <p><strong>"X is not a function — but I defined X as a function."</strong> Check three things: (1) is X shadowed by another variable somewhere? (2) Are you calling it in a context where <code>this</code> or scope changed? (3) Did you accidentally overwrite X with something else earlier? Log <code>typeof X</code> right before the call to confirm what it actually is at that moment.</p>

    <p><strong>"How is this different from a ReferenceError?"</strong> ReferenceError: the name doesn't exist at all. TypeError: the name exists, but its value is the wrong type for the operation. Common ReferenceErrors: typos, missing imports, scope issues. Common TypeErrors: null/undefined, wrong method for the type, calling non-functions.</p>

    <p><strong>"Cannot destructure — but I'm destructuring an object, not null."</strong> If the destructure source is <code>null</code> or <code>undefined</code>, destructuring throws. Add a default: <code>const { name } = user ?? {};</code>. That way, if user is nullish, you destructure from an empty object and get <code>undefined</code> instead of a crash.</p>

    <p><strong>"Can I catch a TypeError with try/catch?"</strong> Yes — TypeErrors are runtime errors, so they can be caught. It's a legitimate technique for gracefully handling operations that might fail (like <code>JSON.parse</code>, which can throw for reasons other than TypeError, but the pattern is the same).</p>

    <p><strong>"I fixed the TypeError with optional chaining — is the code correct now?"</strong> Not necessarily. <code>?.</code> stops the crash but returns <code>undefined</code>, which may just move the bug downstream. If you use the value later, that <code>undefined</code> can cause a different bug. Always ask: what's the RIGHT value here? If the answer is "there might not be one" — fine, <code>?.</code> is right. If the answer is "the data should have been there" — the bug is upstream.</p>
  `,

  /* 2.3 Common mistakes */
  'debug-1-2-2-3': `
<pre class="language-javascript"><code class="language-javascript">// Mistake 1: assuming a query selector always finds something
document.querySelector(".missing").click();
// TypeError: Cannot read properties of null (reading 'click')
// fix: check first
const el = document.querySelector(".missing");
if (el) el.click();
// or use optional chaining:
document.querySelector(".missing")?.click();

// Mistake 2: assuming an API response has a specific shape
const user = await fetchUser();
console.log(user.name);      // TypeError if user is null or {} without .name
// fix: guard
console.log(user?.name ?? "unknown");

// Mistake 3: destructuring from possibly-nullish values
const { theme } = config;    // TypeError if config is null
// fix: default to {}
const { theme } = config ?? {};

// Mistake 4: forgetting to await
async function loadUser() { return { name: "Alice" }; }
const user = loadUser();     // user is a Promise, not the resolved value
console.log(user.name);      // undefined (Promise has no .name), then downstream TypeErrors
// fix: await
const user = await loadUser();

// Mistake 5: reading properties after an early return
function get(id) {
  const item = find(id);
  return item.name;          // TypeError if find returned undefined
}
// fix: guard
function get(id) {
  const item = find(id);
  return item?.name;
}

// Mistake 6: iterating over a non-iterable
const config = { items: [1, 2] };
for (const item of config) { }   // TypeError: config is not iterable (objects aren't by default)
// fix: iterate over the correct property
for (const item of config.items) { }

// Mistake 7: spreading null or undefined into arrays
const items = [...maybeArray];   // TypeError if maybeArray is null/undefined
// fix: default to empty array
const items = [...(maybeArray ?? [])];

// Mistake 8: calling a callback that wasn't provided
function setup(onSuccess) {
  onSuccess();               // TypeError if onSuccess is undefined
}
// fix: check first
function setup(onSuccess) {
  if (typeof onSuccess === "function") onSuccess();
}

// Mistake 9: calling array methods on things that aren't arrays
const values = "1,2,3";
values.forEach(v =&gt; console.log(v));   // TypeError: strings don't have .forEach
// fix: convert first
values.split(",").forEach(v =&gt; console.log(v));

// Mistake 10: reassigning a const
const count = 0;
count = 1;                   // TypeError: Assignment to constant variable
// fix: use let if the value changes
let count = 0;
count = 1;

// Mistake 11: setting properties on null
const el = document.getElementById("missing");
el.textContent = "hi";       // TypeError: Cannot set properties of null
// fix: check first, or use optional chaining
if (el) el.textContent = "hi";

// Mistake 12: chaining .toLowerCase or similar on possibly-undefined values
const name = user.name.toLowerCase();   // TypeError if name is undefined
// fix: guard
const name = user.name?.toLowerCase() ?? "";

// Mistake 13: forgetting new with a constructor
class Widget { }
const w = Widget();          // TypeError: Class constructor Widget cannot be invoked without 'new'
// fix:
const w = new Widget();

// Mistake 14: mixing types in math and expecting numbers
const total = "5" + "3";     // "53" silently — no error until you use it as a number later
// this doesn't THROW, but it does produce wrong data.
// the downstream operation might throw (e.g., total.toFixed(2)).
// fix: coerce explicitly
const total = Number("5") + Number("3");</code></pre>
  `,

  /* --- Chunk 3: In Practice --- */

  /* 3.0 Tiny examples */
  'debug-1-2-3-0': `
<pre class="language-javascript"><code class="language-javascript">// Reading properties from null/undefined
null.name;                   // TypeError
undefined.name;              // TypeError

// Optional chaining prevents it
null?.name;                  // undefined (no error)
undefined?.name;             // undefined (no error)

// Calling a non-function
(5)();                       // TypeError: 5 is not a function
"hi"();                      // TypeError: hi is not a function
undefined();                 // TypeError: undefined is not a function

// Wrong method for the type
(5).forEach(fn);             // TypeError: (5).forEach is not a function
"abc".push(1);               // TypeError: strings are immutable, no .push
({}).forEach(fn);            // TypeError: objects don't have .forEach

// Iterating a non-iterable
for (const x of 42) {}       // TypeError
[...42];                     // TypeError
[...null];                   // TypeError
Array.from(undefined);       // TypeError

// Destructuring null/undefined
const { a } = null;          // TypeError
const [b] = undefined;       // TypeError

// Assigning to const
const x = 5;
x = 10;                      // TypeError: Assignment to constant variable

// Setting properties on null
document.getElementById("nope").textContent = "hi";   // TypeError

// Common guards
if (obj) obj.name;                           // ✓
obj?.name;                                    // ✓
obj?.name ?? "default";                       // ✓
if (typeof fn === "function") fn();          // ✓
Array.isArray(x) &amp;&amp; x.forEach(process);       // ✓

// Safe defaults
const arr = maybeArray ?? [];
const obj = maybeObj ?? {};
const str = maybeStr ?? "";

// Awaiting async values before use
const user = await getUser();
console.log(user.name);      // ✓ (user resolved before this line)

// Explicit type coercion instead of silent mixing
const total = Number(a) + Number(b);
const text = String(count);

// Optional chaining with function calls
obj.method?.();              // calls only if method exists
callback?.(args);            // calls only if callback is defined</code></pre>
  `,

  /* 3.1 Real website uses */
  'debug-1-2-3-1': `
    <p><strong>Example: DOM element that doesn't exist yet</strong></p>
<pre class="language-javascript"><code class="language-javascript">// script placed in &lt;head&gt; before the DOM is ready:
document.querySelector(".save-btn").addEventListener("click", handleSave);
// TypeError: Cannot read properties of null (reading 'addEventListener')

// fix: wait for DOM, or move the script to the end of &lt;body&gt;, or use defer
document.addEventListener("DOMContentLoaded", () =&gt; {
  document.querySelector(".save-btn").addEventListener("click", handleSave);
});</code></pre>

    <p><strong>Example: API response with an optional field</strong></p>
<pre class="language-javascript"><code class="language-javascript">const res = await fetch("/api/user/" + id).then(r =&gt; r.json());

// res might be { name, email, avatar? }  — avatar is optional
document.querySelector(".avatar").src = res.avatar.url;
// TypeError if avatar is missing

// fix: optional chaining + fallback
const avatarUrl = res.avatar?.url ?? "/default-avatar.png";
document.querySelector(".avatar").src = avatarUrl;</code></pre>

    <p><strong>Example: safely handling nested response data</strong></p>
<pre class="language-javascript"><code class="language-javascript">// deeply nested data — any level could be missing
const zip = response.user.profile.address.zipcode;
// crashes at whichever level is null/undefined

// fix: chained optional access + default
const zip = response?.user?.profile?.address?.zipcode ?? "unknown";</code></pre>

    <p><strong>Example: handling an "item not found" result from .find</strong></p>
<pre class="language-javascript"><code class="language-javascript">const user = users.find(u =&gt; u.id === targetId);
console.log(user.name);      // TypeError if no user matched — .find returns undefined

// fix:
const user = users.find(u =&gt; u.id === targetId);
if (!user) {
  console.warn("no user found for id", targetId);
  return;
}
console.log(user.name);

// or with optional chaining:
console.log(user?.name ?? "unknown");</code></pre>

    <p><strong>Example: guarding a form field lookup</strong></p>
<pre class="language-javascript"><code class="language-javascript">const form = document.querySelector("#signup-form");

// naive — crashes if the field is missing
const email = form.querySelector("input[name=email]").value;

// robust — logs and defaults instead of crashing
const emailInput = form.querySelector("input[name=email]");
if (!emailInput) {
  console.error("email field is missing from the form");
  return;
}
const email = emailInput.value;</code></pre>

    <p><strong>Example: async data used before it arrives</strong></p>
<pre class="language-javascript"><code class="language-javascript">// buggy — user is used before the fetch resolves
let user;
fetch("/api/user").then(r =&gt; r.json()).then(u =&gt; { user = u; });

console.log(user.name);      // TypeError: user is undefined here

// fix: use await or handle the promise properly
async function init() {
  const user = await fetch("/api/user").then(r =&gt; r.json());
  console.log(user.name);    // ✓ now user is guaranteed to be resolved
}
init();</code></pre>

    <p><strong>Example: making sure a callback is callable</strong></p>
<pre class="language-javascript"><code class="language-javascript">function loadData(url, onSuccess, onError) {
  fetch(url)
    .then(r =&gt; r.json())
    .then(data =&gt; {
      onSuccess(data);       // TypeError if caller forgot to pass onSuccess
    })
    .catch(err =&gt; {
      onError(err);          // TypeError if caller forgot to pass onError
    });
}

// fix: guard with typeof
function loadData(url, onSuccess, onError) {
  fetch(url)
    .then(r =&gt; r.json())
    .then(data =&gt; {
      if (typeof onSuccess === "function") onSuccess(data);
    })
    .catch(err =&gt; {
      if (typeof onError === "function") onError(err);
    });
}</code></pre>
  `,

  /* 3.2 Connects to */
  'debug-1-2-3-2': `
    <ul>
      <li><strong>Reference errors</strong> → different: name doesn't exist, not just wrong type</li>
      <li><strong>Syntax errors</strong> → different: parse-time, before any code runs</li>
      <li><strong>Optional chaining (<code>?.</code>)</strong> → the main defense against null/undefined TypeErrors</li>
      <li><strong>Nullish coalescing (<code>??</code>)</strong> → provides defaults when a value is null/undefined</li>
      <li><strong><code>typeof</code></strong> → check what type a value is before using it</li>
      <li><strong><code>Array.isArray()</code></strong> → check for arrays specifically before array methods</li>
      <li><strong>null and undefined</strong> → the two "empty" values that cause most TypeErrors</li>
      <li><strong>Destructuring</strong> → throws TypeError on null/undefined sources</li>
      <li><strong>Async / await</strong> → wrong async handling is a common TypeError source</li>
      <li><strong>DOM selection</strong> → querySelector returns null when nothing matches, common TypeError trigger</li>
      <li><strong>Array <code>.find()</code></strong> → returns undefined when nothing matches, common TypeError trigger</li>
      <li><strong>Type coercion</strong> → understanding it helps prevent silent-wrong-value bugs</li>
    </ul>
  `,

  /* 3.3 See also */
  'debug-1-2-3-3': `
    <ul>
      <li>Reference errors</li>
      <li>Syntax errors</li>
      <li>Optional chaining (<code>?.</code>)</li>
      <li>Nullish coalescing (<code>??</code>)</li>
      <li><code>typeof</code></li>
      <li><code>Array.isArray()</code></li>
      <li>null and undefined</li>
      <li>Destructuring</li>
      <li>Async / await</li>
      <li>DOM selection</li>
      <li>Type coercion</li>
      <li>Reading error messages</li>
    </ul>
  `,

  /* ========================================================= 
   Sub-lesson: 7.2.4 Types of Problems → logic errors
 =======================================================*/

  /* --- Chunk 0: What & How --- */

  /* 0.0 What it is */
  'debug-1-3-0-0': `
    <p>A <strong>logic error</strong> is a bug where the code runs without throwing anything but produces the wrong result. No red error in the console. No crash. No missing name. No wrong type. Just an output that's not what you expected — a total that's slightly off, a list that's sorted backward, a form that saves but with the wrong data, a modal that opens on the wrong button. The code is technically working. It's just doing the wrong thing.</p>
    <p>This makes logic errors the hardest kind of bug to find, because the runtime gives you no help. There's no error message pointing at a line. There's no stack trace. You just have "the output is wrong" and have to work backward from the wrong output through the code's behavior until you find the step where reasoning diverged from what the code says. Every "the app looks fine but this specific number is off" bug is a logic error.</p>
  `,

  /* 0.1 Syntax */
  'debug-1-3-0-1': `
<pre class="language-javascript"><code class="language-javascript">// What logic errors look like — no errors, just wrong output.

// Off-by-one — includes one too few, or one too many
for (let i = 0; i &lt; items.length - 1; i++) {   // skips the last item
  process(items[i]);
}

// Wrong comparison operator
if (age &gt; 18) allowVoting();     // meant &gt;=; a person turning 18 today can't vote

// Wrong logical operator
if (isAdmin || isLoggedIn) show();      // should be &amp;&amp; — non-admin logged-out users see it too

// Wrong arithmetic
const total = subtotal + taxRate;         // meant subtotal * (1 + taxRate), not +

// Wrong assignment (accidental =)
if (count = 0) log("zero");     // assigns 0, condition is falsy, log never fires

// Wrong branch taken
if (user.role === "admin") {
  // ... but the actual role in the DB is "Admin" (capital A)
  // this branch never runs
}

// Wrong variable used
function totalWithTip(subtotal, tip) {
  return subtotal + subtotal;   // meant subtotal + tip
}

// Wrong index / key
const first = items[1];           // meant items[0]
const name = user["Name"];        // meant "name" — wrong casing

// Wrong sort direction
items.sort((a, b) =&gt; a.price - b.price);   // ascending; UI expected descending

// The "error" you see:
// NONE. no console error. no crash. just wrong output.</code></pre>
  `,

  /* 0.2 Anatomy / Breakdown */
  'debug-1-3-0-2': `
<pre class="language-javascript"><code class="language-javascript">// The anatomy of a logic error is different from other errors because
// there's no error message. What you get is:

// 1. INPUT
//    → the data / event / user action that started the flow.
//    → often looks normal on its own.

// 2. INTENDED BEHAVIOR
//    → what the code was supposed to do with that input.
//    → lives in your head, in specs, or in tests.

// 3. ACTUAL BEHAVIOR
//    → what the code DID do.
//    → this is where the bug shows up — the observable output is wrong.

// 4. THE DIVERGENCE POINT
//    → the specific line where the code's reasoning first went wrong.
//    → this is the ONE line that needs to change to fix the bug.
//    → but you don't know where it is yet.

// finding the divergence point is the whole debugging problem.
// approach: bracket. find a spot where the values are RIGHT, find a spot where they're WRONG,
// and the bug is between them.

// example bug: "cart total is off by exactly the tax."
// intended: subtotal + tax
// actual:   subtotal (tax was never added)
// divergence: the calculateTotal function — it returns subtotal without applying tax.

// finding the divergence typically involves:
// 1. logging inputs and outputs at multiple stages of the pipeline.
// 2. comparing each stage's output to what it SHOULD be.
// 3. narrowing until you find the step where "right in" becomes "wrong out."</code></pre>
  `,

  /* 0.3 Syntax Details That Matter */
  'debug-1-3-0-3': `
    <p><strong>Logic errors give you no message from the runtime.</strong> This is the single most important thing about them. Every other error type (SyntaxError, ReferenceError, TypeError) at least tells you WHERE and often WHY. Logic errors leave you with nothing but "the output is wrong." All the diagnostic work is on you:</p>
<pre class="language-javascript"><code class="language-javascript">// TypeError: "Cannot read properties of undefined (reading 'X')"
//   → runtime points at the line, tells you what's wrong.

// SyntaxError: "Unexpected token '}'"
//   → runtime points at the file and line.

// Logic error:
//   → no message. no line number. no stack.
//   → all you know is "expected 100, got 90."
//   → the bug could be anywhere in the code that touched that value.</code></pre>

    <p><strong>Common categories of logic error.</strong> There aren't infinite kinds — most logic bugs fall into a handful of patterns:</p>
<pre class="language-javascript"><code class="language-javascript">// 1. Off-by-one (loop bounds, array indexing, ranges)
for (let i = 1; i &lt;= items.length; i++) items[i];   // skips index 0, reads past end

// 2. Wrong operator (&gt; vs &gt;=, || vs &amp;&amp;, + vs *, = vs ==)
if (a = b) {}   // assignment, not comparison
if (a || b || c) {}   // meant &amp;&amp;

// 3. Reversed condition (should have been negated, or vice versa)
if (isDisabled) submitBtn.disabled = false;    // when isDisabled is TRUE, enabling makes no sense

// 4. Wrong argument order
function subtract(a, b) { return a - b; }
subtract(5, 10);   // returns -5. was that what you wanted?

// 5. Wrong variable used
const total = subtotal + subtotal;    // meant subtotal + tax

// 6. Wrong branch or fall-through
switch (type) {
  case "admin":
    handleAdmin();
    // ← missing break, falls through to case "user"
  case "user":
    handleUser();
}

// 7. Wrong index / key / property name
const name = user["userName"];   // API returns "user_name"; you got undefined

// 8. Silent type coercion
if (count == "0") {}   // "0" is truthy as a boolean, but == "0" is true — mixed logic

// 9. Wrong initial value
let max = 0;
items.forEach(v =&gt; max = Math.max(max, v));
// bug: if all values are negative, max stays 0 — wrong.
// fix: start with -Infinity or items[0].

// 10. Wrong ordering of steps
saveToServer(item);   // fires before validation
if (!validate(item)) return;   // too late

// 11. Missing edge case
function divide(a, b) { return a / b; }
divide(10, 0);   // returns Infinity — probably not what you wanted

// 12. State mutation vs replacement
users.push(newUser);        // mutates original array
users = users.concat(newUser);   // creates new array (different behavior in React etc)</code></pre>

    <p><strong>Logic errors often only show up with specific inputs.</strong> The code works fine for most cases and breaks on a specific one — an empty list, a single-item list, a very large number, a name with an apostrophe, a date around midnight, a value of exactly zero. Test with edge cases, not just happy-path examples:</p>
<pre class="language-javascript"><code class="language-javascript">function average(nums) {
  let sum = 0;
  nums.forEach(n =&gt; sum += n);
  return sum / nums.length;
}

average([10, 20, 30]);   // 20 — correct
average([]);             // NaN — divides by zero, no error, wrong answer
// the empty-array case reveals a bug that "works" for every other input.</code></pre>

    <p><strong>Logic errors compound.</strong> One wrong value can travel through many operations, producing wrong outputs at each step, until the final display shows something clearly wrong. You often see the last step's wrong value, but the actual bug is many steps upstream. Bracketing (logging at multiple stages) is the technique for finding where the divergence started:</p>
<pre class="language-javascript"><code class="language-javascript">const raw = getData();         // suspect: is this right?
const cleaned = clean(raw);    // maybe here?
const parsed = parse(cleaned); // or here?
const summary = summarize(parsed);   // or here?
render(summary);               // shows the wrong final result.

// bracketing: log after every step. the first log that shows a wrong value pinpoints the culprit.
console.log("raw:", raw);
const cleaned = clean(raw);
console.log("cleaned:", cleaned);
const parsed = parse(cleaned);
console.log("parsed:", parsed);
const summary = summarize(parsed);
console.log("summary:", summary);
render(summary);
// wherever the intermediate value first becomes wrong, that's the step to fix.</code></pre>

    <p><strong>Reading your code aloud helps.</strong> Weirdly effective. Silent reading skims. Reading aloud forces you to pronounce every operator and variable, which surfaces mistakes like <code>=</code> vs <code>==</code>, <code>&amp;&amp;</code> vs <code>||</code>, and typos in property names. Many logic bugs are found by hearing them, not by seeing them.</p>
  `,

  /* --- Chunk 1: Why & When --- */

  /* 1.0 What problem it solves */
  'debug-1-3-1-0': `
    <p>Recognizing a bug as a logic error changes your whole approach. You stop looking for red text in the console — there won't be any. You stop searching for stack traces — there aren't any. You start comparing "what actually happened" to "what should have happened," and you start bracketing values through the code until you find the step that produced the wrong value from correct input. That's a fundamentally different debugging technique from what you'd use for a thrown error.</p>
    <p>It also frames the search correctly. A TypeError says "something is null and shouldn't be." A logic error says "the code is doing what you told it to do — but you told it wrong." The fix isn't about handling a missing value; it's about correcting the reasoning. Understanding this changes what you look for: not values that shouldn't exist, but operators, comparisons, and code paths that don't match your intent.</p>
  `,

  /* 1.1 Why use it */
  'debug-1-3-1-1': `
    <p>Because logic errors are the highest-cost bugs to leave in production. A TypeError crashes visibly — users see it and report it. A logic error runs silently and gives wrong answers. Customers get charged the wrong amount. Reports show the wrong totals. Emails go to the wrong people. Nobody knows because the code isn't throwing. These are the bugs that lose money and trust before anyone realizes they exist.</p>
    <p>Also, most non-trivial bugs in a mature codebase ARE logic errors. Once you've cleaned up the low-hanging fruit (typos, missing null checks), what's left is code that runs but does the wrong thing under specific conditions. Being good at logic-error debugging is what separates "can fix crashes" from "can fix hard bugs."</p>
  `,

  /* 1.2 Where you use it */
  'debug-1-3-1-2': `
<pre class="language-javascript"><code class="language-javascript">// Common contexts where logic errors show up:

// Any calculation
const total = subtotal + tax;         // or should it be subtotal * (1 + taxRate)?
const avg = sum / count;               // count could be 0 — divide by zero
const discount = price * 0.1;         // is the 10% supposed to be percent or decimal?

// Any comparison or condition
if (age &gt;= 18) allowVoting();          // is it &gt;= or &gt;? age 18 counts, right?
if (isAdmin &amp;&amp; isLoggedIn) show();     // AND or OR? which one matches spec?
if (user.role === "admin") allow();    // case matters — is it "Admin" or "admin" in the data?

// Any loop
for (let i = 0; i &lt; items.length; i++) { }        // ✓ standard bound
for (let i = 1; i &lt; items.length; i++) { }        // skips index 0 — intentional or bug?
for (let i = 0; i &lt;= items.length; i++) { }       // reads past end — accesses undefined

// Any sort
items.sort((a, b) =&gt; a.date - b.date);            // ascending
items.sort((a, b) =&gt; b.date - a.date);            // descending
// which one does the UI want? if you got the wrong direction, that's a logic bug.

// Any filter
users.filter(u =&gt; u.active);           // keeps active — is that what spec says?
users.filter(u =&gt; !u.deleted);         // keeps non-deleted — same intent, different data source

// Any state update
state.count++;                          // increments the current count
state.count = 1;                         // resets to 1 — very different behavior

// Any switch or if/else chain
switch (status) {
  case "pending": handle(); break;
  case "approved": handle(); break;    // fall-through missing break? intentional or bug?
  default: reject();
}

// Any regex
/\\d+/.test("abc");        // false — no digits
/\\d*/.test("abc");        // true — matches zero-or-more, always true
// * vs + is a common logic bug in regex.

// Any date operation
const tomorrow = new Date(now.setDate(now.getDate() + 1));
// this MUTATES "now" as a side effect. subtle logic bug in downstream code.

// Any array method
const first = items.find(i =&gt; i.selected);   // returns undefined if none selected
const has = items.some(i =&gt; i.selected);     // true if any selected — different question</code></pre>

    <p>Basically: anywhere the code makes a decision, does math, iterates, or transforms data, a logic error is possible. Which is everywhere.</p>
  `,

  /* 1.3 Plain English explanation */
  'debug-1-3-1-3': `
    <p>Imagine you gave a helper a shopping list that said "buy two eggs, three apples, and a gallon of milk." They come back with exactly those things — but you meant a dozen eggs and thirty apples. The list is followed perfectly. The helper isn't wrong. YOU are wrong: your instructions didn't match what you intended.</p>
    <p>A logic error is like that shopping list. The computer followed your code exactly. The code isn't broken. The code is doing what it says. What went wrong is that what you wrote doesn't match what you MEANT. Nowhere in the system will you find a "you were wrong" indicator — the only signal is that when you look at the groceries (the output), they're not what you wanted. Fixing it means fixing the list to match your intent, not fixing the helper.</p>
  `,

  /* 1.4 Mental model */
  'debug-1-3-1-4': `
    <p>Think of your code as a very literal robot. You give it instructions and it does exactly, precisely, what you said — no more, no less. If you tell it "add these two numbers," it adds them. If you tell it "if the flag is on, do this," it checks the flag and does the thing. It doesn't second-guess. It doesn't say "wait, that doesn't sound right." It follows.</p>
    <p>A logic error is you giving the robot instructions that don't match your intent, and the robot faithfully carrying them out. There's no error because the robot did its job. The "bug" is in the gap between what you MEANT and what you TYPED. Finding it is a matter of walking through the robot's actions step by step and asking "is this action what I wanted here?" until you find the step where "yes" turns into "no." That step is where your instructions and your intent diverged.</p>
    <p>The corollary: the runtime can't help you. The robot won't tell you "this seems wrong." Only you know what "right" looks like. Debugging a logic error is entirely about comparing observed behavior to intended behavior, and only your brain has access to the second one.</p>
  `,

  /* 1.5 Step-by-step walkthrough */
  'debug-1-3-1-5': `
<pre class="language-javascript"><code class="language-javascript">// Scenario: cart total shows $90 when it should be $99.
// Subtotal is $90, tax rate is 10%. Expected: $99. Actual: $90.
// No error in the console. Just the wrong number displayed.

// Original code:
function calculateTotal(subtotal, taxRate) {
  const tax = subtotal + taxRate;         // ← the bug
  return subtotal + tax;
}

const total = calculateTotal(90, 0.1);
document.querySelector(".total").textContent = "$" + total;

// Step 1: identify that it's a logic error.
// - No console errors.
// - Code runs.
// - Output is wrong ($90 instead of $99).
// This is a logic error, not a TypeError or ReferenceError.

// Step 2: what's the EXPECTED value at the end?
// $99 (subtotal $90 + 10% tax $9).

// Step 3: what's the ACTUAL value?
// $90.

// Step 4: work backward. Log each intermediate step to find where the wrong value appeared.
function calculateTotal(subtotal, taxRate) {
  console.log("inputs — subtotal:", subtotal, "taxRate:", taxRate);
  const tax = subtotal + taxRate;
  console.log("tax:", tax);
  const total = subtotal + tax;
  console.log("total:", total);
  return total;
}

// output:
// inputs — subtotal: 90 taxRate: 0.1
// tax: 90.1                              ← wrong. tax should be 9, not 90.1.
// total: 180.1                           ← also wrong. but the tax is where things diverged.
// ... wait, but the DISPLAYED value was $90? Let me look again ...

// Ah — output actually is $180.1 not $90.
// (rewriting the scenario for clarity — the DISPLAYED number is off, and the log tells us why.)

// Step 5: focus on the wrong step.
// "tax: 90.1" is the divergence point.
// The math was "subtotal + taxRate" = 90 + 0.1 = 90.1.
// But tax should be "subtotal * taxRate" = 90 * 0.1 = 9.
// The + should have been *.

// Step 6: fix.
function calculateTotal(subtotal, taxRate) {
  const tax = subtotal * taxRate;   // ← fixed: * instead of +
  return subtotal + tax;
}

// Or equivalently:
function calculateTotal(subtotal, taxRate) {
  return subtotal * (1 + taxRate);
}

// Step 7: verify.
// calculateTotal(90, 0.1) → 90 * 1.1 → 99. Displayed as $99. ✓

// Total time: less than a minute once you started logging.
// The trick: log the INTERMEDIATE values, not just the input and output.
// The wrong value's first appearance IS the bug's location.</code></pre>
  `,

  /* --- Chunk 2: The Click --- */

  /* 2.0 Debugging clue */
  'debug-1-3-2-0': `
    <p>The clue for logic errors isn't in the console — it's in the comparison between actual and expected output. Start there:</p>
<pre class="language-javascript"><code class="language-javascript">// 1. State the expected value precisely.
// - "the total should be $99"
// - "the list should have 5 items"
// - "the first result should be 'Alice'"
// vague expectations lead to vague debugging. be specific.

// 2. State the actual value precisely.
// - "the total shows $90"
// - "the list has 4 items"
// - "the first result is 'Bob'"

// 3. Note the DIRECTION of the wrongness.
// - $90 is $9 short. tax wasn't applied? tax was applied wrong?
// - 4 items when there should be 5. one filtered wrong? off-by-one?
// - "Bob" instead of "Alice". wrong sort? wrong index? wrong filter?
// the direction narrows the search space.

// 4. Log intermediate values to find where "right" turns to "wrong."
console.log("subtotal:", subtotal);            // is this right?
console.log("tax:", tax);                       // is THIS right?
console.log("total:", total);                   // where did it go wrong?

// wherever the first log shows a value that doesn't match your expectation, THAT is the bug.

// 5. Read the operator on the divergence line very carefully.
// - Is it &gt; or &gt;=?
// - Is it &amp;&amp; or ||?
// - Is it + or *?
// - Is it = or ==?
// - Is it .filter() or .find() or .some()?
// nine times out of ten, the fix is one character — the operator you chose was subtly wrong.</code></pre>
  `,

  /* 2.1 The part that makes it click */
  'debug-1-3-2-1': `
    <p>The aha: <strong>your code isn't broken — your reasoning is.</strong> This flips how you approach the bug. You stop trying to find "what's wrong with the code" (nothing is wrong; it's running as written) and start trying to find "where does what I WROTE not match what I MEANT?" Those are two different questions, and the second one is what actually solves the bug:</p>
<pre class="language-javascript"><code class="language-javascript">// this code is "not broken":
if (age &gt; 18) allowVoting();

// but it's producing the wrong behavior because your INTENT was:
// "allow voting if age is 18 or older"
// what you WROTE means:
// "allow voting if age is strictly greater than 18"
// same words look correct. but "18 or older" would be &gt;=, not &gt;.

// nothing in the runtime can catch this. only you know what you meant.
// the fix is aligning what you WROTE with what you MEANT.</code></pre>
    <p>Once that clicks, logic-error debugging becomes about slowing down and re-reading each decision point with fresh eyes: "does this condition really match what I mean? does this operator do what I think it does? does this loop include what I think it includes?" That kind of skeptical re-reading is the whole technique.</p>
  `,

  /* 2.2 Common confusions */
  'debug-1-3-2-2': `
    <p><strong>"There's no error, so the code must be right."</strong> No — the absence of an error just means nothing threw. Wrong output is still a bug. Silent success and correct behavior aren't the same thing.</p>

    <p><strong>"I re-read the code and it looks fine."</strong> Of course it does — you wrote it. Re-reading with the same eyes reveals nothing new. Better techniques: read aloud, log intermediate values (they force you to see actual behavior), or explain the code to someone else (rubber duck debugging). Logic bugs hide from silent re-reading almost by definition.</p>

    <p><strong>"The code worked before I made a small change."</strong> Then bisect. Undo half the changes and check if the bug is still there. Halve again. In three or four rounds you find the specific change that introduced the bug. This is called binary bisection and it's the fastest technique for "worked yesterday, broken today" bugs.</p>

    <p><strong>"But the console shows the value is right in the middle of the function."</strong> Look at the very next step. That's where the wrongness happens. Once you have a "right here / wrong here" boundary, the bug is on one specific line between them.</p>

    <p><strong>"There are no error messages so I don't know where to start."</strong> Start at the output. The wrong output is your entry point. Work backward: what should the output be? What is it? What's the last function that produced it? Log its inputs. If the inputs are right, the bug is inside that function. If the inputs are wrong, go one step earlier.</p>

    <p><strong>"How do I know if it's a logic error vs. a data error?"</strong> Sometimes you don't, and that's fine. If the logic is correct but the data coming in is wrong, the "logic error" is upstream in whoever produced the data. Trace the wrong value up until you find either (a) code that's not doing what you meant, or (b) a data source that isn't providing what you assumed. Both are "logic errors" in the broad sense of "the reasoning about what would happen was wrong."</p>

    <p><strong>"My test cases pass but the bug is still there."</strong> Add a test case for the specific input that reveals the bug. Passing tests only prove the code works on the inputs you tested. Empty arrays, single-item lists, zero, negative numbers, unicode, dates near midnight — each of these has broken plenty of code that "passed all tests."</p>
  `,

  /* 2.3 Common mistakes */
  'debug-1-3-2-3': `
<pre class="language-javascript"><code class="language-javascript">// Mistake 1: off-by-one in loop bounds
for (let i = 0; i &lt;= items.length; i++) items[i];   // reads past the end, gets undefined
for (let i = 1; i &lt; items.length; i++)  items[i];   // skips index 0
// fix: standard form
for (let i = 0; i &lt; items.length; i++) items[i];

// Mistake 2: assignment where comparison was intended
if (count = 0) log();   // assigns 0, condition is falsy → log never runs
// fix:
if (count === 0) log();

// Mistake 3: wrong comparison operator
if (age &gt; 18) allow();   // 18-year-olds don't qualify
// fix if the spec says "18 and up":
if (age &gt;= 18) allow();

// Mistake 4: || vs &amp;&amp;
if (isMember || hasCoupon) discount();   // gives discount to non-members who lack coupons? wait, that's OR
// fix if spec says "must have both":
if (isMember &amp;&amp; hasCoupon) discount();

// Mistake 5: negated condition
if (!isValid) submit();   // submits ONLY when invalid — inverted
// fix:
if (isValid) submit();

// Mistake 6: case sensitivity in string comparison
if (role === "admin") { }   // if data has "Admin" (capital A), this never matches
// fix: normalize
if (role.toLowerCase() === "admin") { }

// Mistake 7: type-loose comparison silently coerces
if (count == "0") { }   // works but confusing — "0" is truthy as a boolean but == 0 evaluates true
// fix: use strict equality and known types
if (Number(count) === 0) { }

// Mistake 8: wrong initial value in reduce/accumulator
let max = 0;
items.forEach(v =&gt; max = Math.max(max, v));
// if all values are negative, max stays 0 — wrong.
// fix: use -Infinity or the first item
let max = items[0];
for (let i = 1; i &lt; items.length; i++) max = Math.max(max, items[i]);

// Mistake 9: forgotten break in switch
switch (type) {
  case "a":
    doA();
    // no break — falls through into "b"
  case "b":
    doB();
    break;
}
// intentional fall-through is rare. always ask: did I mean this?
// fix if unintentional:
switch (type) {
  case "a":
    doA();
    break;
  case "b":
    doB();
    break;
}

// Mistake 10: mutating vs. replacing
users.push(newUser);              // mutates original array
users = [...users, newUser];      // creates new array
// which one you want depends on downstream code (React re-renders, comparison by reference, etc).
// picking wrong causes silent bugs where "the array is the same as before" comparisons fail.

// Mistake 11: wrong sort direction
items.sort((a, b) =&gt; a.date - b.date);   // ascending
items.sort((a, b) =&gt; b.date - a.date);   // descending
// if the display shows newest first but you sorted ascending, the newest is at the bottom.
// fix: match direction to intent.

// Mistake 12: dividing by zero silently
const avg = sum / list.length;   // NaN or Infinity if list is empty
// fix: guard
const avg = list.length &gt; 0 ? sum / list.length : 0;

// Mistake 13: wrong index vs. wrong id
const user = users[targetId];    // treats id as an array INDEX, not a lookup
// fix: use .find or a lookup map
const user = users.find(u =&gt; u.id === targetId);

// Mistake 14: mutating date accidentally
const tomorrow = new Date(now.setDate(now.getDate() + 1));
// now is MUTATED. any downstream use of "now" is off by a day.
// fix: clone first
const tomorrow = new Date(now);
tomorrow.setDate(tomorrow.getDate() + 1);

// Mistake 15: relying on for...in with arrays
for (const key in arr) console.log(arr[key]);
// for...in on arrays iterates INDICES as strings, plus any inherited properties. bad idea.
// fix: use for...of, forEach, or a classic for loop
for (const item of arr) console.log(item);</code></pre>
  `,

  /* --- Chunk 3: In Practice --- */

  /* 3.0 Tiny examples */
  'debug-1-3-3-0': `
<pre class="language-javascript"><code class="language-javascript">// Off-by-one
for (let i = 0; i &lt; items.length; i++) {}   // includes 0 to length-1  ← standard
for (let i = 1; i &lt; items.length; i++) {}   // skips 0
for (let i = 0; i &lt;= items.length; i++) {}  // reads past end

// Wrong operator
if (a = b) {}          // assignment
if (a == b) {}         // loose equality (coerces types)
if (a === b) {}        // strict equality (recommended)
if (a &gt; b) {}          // strictly greater
if (a &gt;= b) {}         // greater or equal

// Wrong logical operator
if (a &amp;&amp; b) {}         // both
if (a || b) {}         // either

// Wrong arithmetic
subtotal + taxRate     // adds decimal to money
subtotal * taxRate     // multiplies (probably what you want)
subtotal * (1 + taxRate)   // full "with tax" total

// Wrong branch
if (isAdmin) allow();
if (!isAdmin) allow();  // inverted
if (isAdmin === true) allow();   // works but explicit

// Wrong case
if (role === "admin") {}   // case sensitive
if (role.toLowerCase() === "admin") {}   // normalized

// Wrong initial value
let max = 0;                             // wrong for negative-only data
let max = -Infinity;                      // safe start
let max = items[0]; // start from data     safest

// Wrong loop for arrays
for (const k in arr) {}   // wrong tool for arrays
for (const v of arr) {}   // correct
arr.forEach(v =&gt; {});      // also correct

// Wrong array method
users.find(u =&gt; u.active);   // returns first match, or undefined
users.filter(u =&gt; u.active); // returns all matches, or []
users.some(u =&gt; u.active);   // true/false
users.every(u =&gt; u.active);  // true/false — ALL match?

// Wrong sort direction
items.sort((a, b) =&gt; a.value - b.value);    // ascending
items.sort((a, b) =&gt; b.value - a.value);    // descending

// Wrong mutability
arr.push(x);              // mutates
arr = [...arr, x];         // new array (immutable style)

// Wrong ordering
save(x); validate(x);     // saves before validating
if (validate(x)) save(x);  // validates first

// Wrong regex quantifier
/\\d+/.test("abc");    // false
/\\d*/.test("abc");    // true — matches empty
/\\d?/.test("abc");    // true — matches empty or one

// Empty-input edge case
sum / list.length         // NaN if list is empty
list.length &gt; 0 ? sum / list.length : 0    // guarded

// Divide-by-zero
if (b !== 0) a / b;

// Wrong property name / key case
user["userName"];         // API might return "user_name"

// Wrong bracket/dot notation
obj.dynamicKey;           // literal property "dynamicKey"
obj[dynamicKey];          // dynamic — uses value of dynamicKey variable</code></pre>
  `,

  /* 3.1 Real website uses */
  'debug-1-3-3-1': `
    <p><strong>Example: cart total slightly wrong (off by tax)</strong></p>
<pre class="language-javascript"><code class="language-javascript">// subtotal: $90, tax: 10%, expected total: $99, actual: $180.
function calculateTotal(subtotal, taxRate) {
  const tax = subtotal + taxRate;    // ✗ meant *
  return subtotal + tax;
}

// bracketing shows tax comes out as 90.1 (should be 9).
// fix:
function calculateTotal(subtotal, taxRate) {
  return subtotal * (1 + taxRate);
}</code></pre>

    <p><strong>Example: list showing one too few items</strong></p>
<pre class="language-javascript"><code class="language-javascript">// list has 5 items but page shows 4
function renderList(items) {
  for (let i = 1; i &lt; items.length; i++) {   // ✗ starts at 1, skips first
    render(items[i]);
  }
}
// fix:
function renderList(items) {
  for (let i = 0; i &lt; items.length; i++) {
    render(items[i]);
  }
}
// or better:
function renderList(items) {
  items.forEach(render);
}</code></pre>

    <p><strong>Example: age check rejecting valid users</strong></p>
<pre class="language-javascript"><code class="language-javascript">// 18-year-olds report being blocked from voting.
if (age &gt; 18) allowVoting();   // ✗ strictly greater excludes 18
// fix:
if (age &gt;= 18) allowVoting();</code></pre>

    <p><strong>Example: sort order looks backward</strong></p>
<pre class="language-javascript"><code class="language-javascript">// blog page shows OLDEST posts first, but users expect newest first.
posts.sort((a, b) =&gt; a.publishedAt - b.publishedAt);   // ascending
// fix:
posts.sort((a, b) =&gt; b.publishedAt - a.publishedAt);   // descending</code></pre>

    <p><strong>Example: role check that never matches</strong></p>
<pre class="language-javascript"><code class="language-javascript">// admin dashboard hidden even for actual admins.
if (user.role === "admin") showAdminPanel();
// looks right. but logging user.role reveals: "Admin" (capital A) from the API.
// fix: normalize case before comparing
if (user.role.toLowerCase() === "admin") showAdminPanel();
// or fix upstream by ensuring the API returns lowercase.</code></pre>

    <p><strong>Example: search returns empty even when items match</strong></p>
<pre class="language-javascript"><code class="language-javascript">// user searches "Alice" but sees no results, even though "Alice Smith" exists.
const results = users.filter(u =&gt; u.name === query);   // ✗ exact match only
// fix: contains match
const results = users.filter(u =&gt;
  u.name.toLowerCase().includes(query.toLowerCase())
);</code></pre>

    <p><strong>Example: form validation lets bad input through</strong></p>
<pre class="language-javascript"><code class="language-javascript">// users can submit empty forms
if (email &amp;&amp; password) submit();
// looks fine, but " " (a space) is truthy, and so is "  " for password.
// fix: trim and check non-empty
if (email.trim() &amp;&amp; password.trim()) submit();</code></pre>

    <p><strong>Example: modal opens on the wrong button</strong></p>
<pre class="language-javascript"><code class="language-javascript">// clicking "Cancel" opens the delete-confirmation modal instead of canceling.
buttons.forEach(btn =&gt; {
  btn.addEventListener("click", (e) =&gt; {
    if (btn.textContent === "Delete") openConfirmModal();
    else if (btn.textContent = "Cancel") closeDialog();   // ✗ = not ==
  });
});
// the assignment "btn.textContent = 'Cancel'" always evaluates to "Cancel" (truthy).
// closeDialog runs for every button. and worse, it OVERWRITES the button text.
// fix:
if (btn.textContent === "Cancel") closeDialog();</code></pre>

    <p><strong>Example: array method returns unexpected result</strong></p>
<pre class="language-javascript"><code class="language-javascript">// looking for "any user is admin" but got the first admin instead
const anyAdmin = users.find(u =&gt; u.isAdmin);   // returns the user, or undefined
if (anyAdmin) allow();
// works, but "find" was overkill. wanted a boolean.
// fix: use .some
const hasAdmin = users.some(u =&gt; u.isAdmin);
if (hasAdmin) allow();</code></pre>
  `,

  /* 3.2 Connects to */
  'debug-1-3-3-2': `
    <ul>
      <li><strong>Type errors</strong> → have messages; logic errors do not</li>
      <li><strong>Reference errors</strong> → have messages; logic errors do not</li>
      <li><strong>Syntax errors</strong> → caught at parse time; logic errors survive to runtime</li>
      <li><strong>Bracketing (before/after logs)</strong> → primary technique for finding logic error divergence points</li>
      <li><strong>Reading error messages</strong> → useless for logic errors — there are none</li>
      <li><strong>Comparison operators</strong> → common source: <code>=</code> vs <code>==</code> vs <code>===</code>, <code>&gt;</code> vs <code>&gt;=</code></li>
      <li><strong>Logical operators</strong> → common source: <code>&amp;&amp;</code> vs <code>||</code></li>
      <li><strong>Type coercion</strong> → silent coercion causes subtle logic bugs</li>
      <li><strong>Array methods</strong> → picking wrong method (find vs filter vs some vs every) is a common mistake</li>
      <li><strong>Sort direction</strong> → ascending vs descending is a frequent logic-error source</li>
      <li><strong>Off-by-one</strong> → the classic logic-error category</li>
      <li><strong>Edge cases</strong> → empty arrays, zero, negatives, unicode, dates — these expose logic bugs</li>
      <li><strong>Unit tests</strong> → the main defense against logic errors in the long term</li>
      <li><strong>Rubber duck debugging</strong> → explaining the code aloud often reveals logic bugs</li>
    </ul>
  `,

  /* 3.3 See also */
  'debug-1-3-3-3': `
    <ul>
      <li>Type errors</li>
      <li>Reference errors</li>
      <li>Syntax errors</li>
      <li>Bracketing bugs (before/after logs)</li>
      <li>Off-by-one errors</li>
      <li>Comparison operators (<code>==</code> vs <code>===</code>)</li>
      <li>Logical operators (<code>&amp;&amp;</code> vs <code>||</code>)</li>
      <li>Type coercion</li>
      <li>Array methods (find, filter, some, every, reduce)</li>
      <li>Edge cases</li>
      <li>Rubber duck debugging</li>
      <li>Unit testing</li>
      <li>Binary bisection</li>
    </ul>
  `,

  /* ========================================================= 
   Sub-lesson: 7.2.5 Types of Problems → DOM selection errors
 =======================================================*/

  /* --- Chunk 0: What & How --- */

  /* 0.0 What it is */
  'debug-1-4-0-0': `
    <p>A <strong>DOM selection error</strong> is what happens when you call <code>querySelector</code>, <code>getElementById</code>, or any element-finding method, and the browser can't find a match. The method doesn't throw an error itself — it silently returns <code>null</code>. The crash happens on the very next line, when your code tries to do something with that <code>null</code>: read a property, add an event listener, set <code>textContent</code>. That's when you see the classic error: <code>Cannot read properties of null (reading '...')</code> or <code>Cannot set properties of null (setting 'textContent')</code>.</p>
    <p>This is technically a TypeError in JavaScript terms, but it has a specific fingerprint: it always involves a DOM lookup that returned nothing, followed by an operation on the result. Recognizing it is the first step to fixing it, because the fix is almost never on the crash line — it's about either finding the element the right way, waiting for it to exist, or handling the case where it doesn't.</p>
  `,

  /* 0.1 Syntax */
  'debug-1-4-0-1': `
<pre class="language-javascript"><code class="language-javascript">// What the error looks like:

// 1. querySelector returning null
document.querySelector(".save-btn").addEventListener("click", handleSave);
// ← if .save-btn doesn't exist:
// TypeError: Cannot read properties of null (reading 'addEventListener')

// 2. getElementById returning null
document.getElementById("username").value = "Alice";
// ← if #username doesn't exist:
// TypeError: Cannot set properties of null (setting 'value')

// 3. Reading a property from a null result
const total = document.querySelector(".total").textContent;
// ← if .total doesn't exist:
// TypeError: Cannot read properties of null (reading 'textContent')

// 4. querySelectorAll returns an empty NodeList (NOT null) — different failure mode
document.querySelectorAll(".item").forEach(process);
// ← no error, but forEach loops zero times. silent bug.

// 5. Chaining after a selection
document.querySelector(".card").children[0].click();
// ← if .card doesn't exist, "reading 'children' of null"
// ← if .card exists but has no children, "cannot read '0' of undefined" (children is a live HTMLCollection, [0] is undefined)

// The telltale format of the error:
// TypeError: Cannot &lt;read|set&gt; properties of null (&lt;reading|setting&gt; '&lt;property&gt;')
//   at &lt;file&gt;:&lt;line&gt;:&lt;column&gt;

// If you see "of null" in the message right after a DOM operation, this lesson applies.</code></pre>
  `,

  /* 0.2 Anatomy / Breakdown */
  'debug-1-4-0-2': `
<pre class="language-javascript"><code class="language-javascript">// The two-step nature of a DOM selection error:

document.querySelector(".missing").click();
// │        │              │          │
// │        │              │          └── STEP 2: operation on the result
// │        │              │              (this is where the runtime throws)
// │        │              │
// │        │              └── STEP 1: the lookup itself
// │        │                  (this silently returns null if nothing matches)
// │        │
// │        └── the finder method (querySelector, getElementById, etc.)
// │
// └── the DOM tree being searched

// under the hood:
// 1. document.querySelector(".missing") runs.
//    - the browser walks the DOM tree looking for the first element matching ".missing".
//    - no match found → return null.
//    - NO error is thrown at this point.
// 2. .click() runs on the result.
//    - the result is null.
//    - null has no properties or methods.
//    - TypeError thrown: "Cannot read properties of null (reading 'click')"

// the two-step nature is why the error message points at the .click() (step 2),
// but the actual problem is at .querySelector (step 1).
// step 1 is silent; step 2 is loud.

// key mental model:
// - selection methods NEVER throw. they return null (querySelector, getElementById)
//   or an empty NodeList (querySelectorAll) when nothing matches.
// - the crash is always the NEXT operation, not the selection itself.
// - the fix is usually about the selection: wrong selector, wrong timing, wrong scope.</code></pre>
  `,

  /* 0.3 Syntax Details That Matter */
  'debug-1-4-0-3': `
    <p><strong>Selection methods return <code>null</code> silently when nothing matches.</strong> This is a deliberate design choice — HTML is often incomplete or dynamic, and the browser doesn't want to throw for every missing element. But it means YOUR code has to check, or the crash happens on the next line:</p>
<pre class="language-javascript"><code class="language-javascript">const btn = document.querySelector(".missing");
console.log(btn);           // null — no error, just null
btn.click();                 // NOW it errors — "Cannot read properties of null"

// the lesson: querySelector returning null is silent.
// the crash is on the operation after, not on the lookup.</code></pre>

    <p><strong><code>querySelectorAll</code> is different — it returns an empty NodeList, not null.</strong> An empty NodeList doesn't throw when you iterate it, so the failure mode is silent: your loop runs zero times and no error appears. This is more insidious than the null case because it can go unnoticed:</p>
<pre class="language-javascript"><code class="language-javascript">const items = document.querySelectorAll(".missing");
console.log(items);          // NodeList [] — length 0
items.forEach(process);       // no error, no logs, nothing happens

// this is a "silent selection error." no crash, no visible feedback.
// the fix: log items.length to confirm you actually found something.
console.log("found", items.length, "matches");
items.forEach(process);</code></pre>

    <p><strong>Common causes of "querySelector returns null":</strong></p>
<pre class="language-javascript"><code class="language-javascript">// 1. Selector typo
document.querySelector(".save-buton");   // meant .save-button (typo)

// 2. Wrong case — CSS selectors are case-sensitive
document.querySelector("#SaveBtn");      // HTML id is "saveBtn"

// 3. Missing dot or hash prefix
document.querySelector("save-btn");      // matches an element with tag name "save-btn", not class
document.querySelector(".save-btn");     // matches CLASS "save-btn"
document.querySelector("#save-btn");     // matches ID "save-btn"

// 4. Script runs before the DOM is loaded
// (in &lt;head&gt; without defer/async or DOMContentLoaded)
document.querySelector(".btn");          // returns null — the &lt;body&gt; hasn't parsed yet

// 5. Element is inside a shadow DOM or iframe
document.querySelector(".inside-widget");  // won't find it if it's in a shadow root

// 6. Element hasn't been created yet (dynamic content)
// (rendered by React/Vue after this line runs, or added via AJAX later)
document.querySelector(".dynamic-item");  // null if the framework hasn't inserted it yet

// 7. Element was removed by earlier code
// (previous handler called .remove() on it)

// 8. Element only exists in some pages/states
document.querySelector(".admin-panel");   // only present when the user is admin</code></pre>

    <p><strong>Scope matters — searching from the wrong element misses matches.</strong> <code>document.querySelector</code> searches the whole document. <code>element.querySelector</code> searches only within that element's descendants. If you call querySelector on a subtree that doesn't contain your target, you get null:</p>
<pre class="language-javascript"><code class="language-javascript">const form = document.querySelector("form");
const help = form.querySelector(".help-text");
// searches only INSIDE the form. if the help text is a sibling of the form
// (outside it), the result is null even though the element exists somewhere.

// fix: search from a higher scope, or from document
const help = document.querySelector(".help-text");   // searches the whole page</code></pre>

    <p><strong>The error message tells you what OPERATION was attempted, which helps identify the lookup.</strong> Read it carefully:</p>
<pre class="language-javascript"><code class="language-javascript">// "Cannot read properties of null (reading 'addEventListener')"
// → the .addEventListener call was on null.
// → look for the querySelector or getElementById immediately before.

// "Cannot set properties of null (setting 'textContent')"
// → an assignment to .textContent on null.
// → look for the lookup that produced the null.

// "Cannot read properties of null (reading 'value')"
// → tried to read .value from null (usually an input, textarea, or select).

// "Cannot read properties of null (reading 'classList')"
// → CSS class manipulation on null (add/remove/toggle).</code></pre>

    <p><strong>Selection is easy to guard.</strong> Two idiomatic patterns:</p>
<pre class="language-javascript"><code class="language-javascript">// Pattern 1: check-then-use
const btn = document.querySelector(".save-btn");
if (btn) {
  btn.addEventListener("click", handleSave);
} else {
  console.warn("save-btn not found — the button won't work");
}

// Pattern 2: optional chaining (concise, but silent)
document.querySelector(".save-btn")?.addEventListener("click", handleSave);
// if not found, the whole expression evaluates to undefined and does nothing.
// no warning, no error — silent success.
// use this only when "the element might legitimately not exist" is expected.</code></pre>
  `,

  /* --- Chunk 1: Why & When --- */

  /* 1.0 What problem it solves */
  'debug-1-4-1-0': `
    <p>Recognizing that an error is specifically a DOM selection error (not just a generic TypeError) narrows the fix enormously. You don't need to trace values through business logic. You don't need to debug your data pipeline. The problem is a single DOM lookup that returned null, and the fix is almost always one of a small handful of things: fix the selector, wait for the DOM to be ready, wait for the element to be created dynamically, or handle the case where the element doesn't exist.</p>
    <p>It also unblocks common early-project frustrations. Many beginner JS projects seem to "not work" for mysterious reasons — a button doesn't respond, a form doesn't populate, an event doesn't fire. Nine times out of ten, it's a DOM selection returning null because a script ran before the element existed. Understanding this pattern turns that "nothing works" panic into a routine fix.</p>
  `,

  /* 1.1 Why use it */
  'debug-1-4-1-1': `
    <p>Because DOM selection errors are among the most common bugs in front-end JavaScript, and their fingerprint is so consistent that once you recognize it, you fix it in under a minute. "Cannot read properties of null (reading 'addEventListener')" is a bug you'll see thousands of times over a career. Building a reflex for it — see the message, check the selector, check the timing, done — pays off enormously.</p>
    <p>It's also a foundation for understanding more advanced DOM issues. Once you're solid on "selection returned null," you can reason about live-updating collections (<code>querySelectorAll</code> vs <code>HTMLCollection</code>), MutationObserver for dynamic content, shadow DOM boundaries, and framework integration timing. All of those build on the basic pattern of "when is this element actually in the DOM at the time my code runs?"</p>
  `,

  /* 1.2 Where you use it */
  'debug-1-4-1-2': `
<pre class="language-javascript"><code class="language-javascript">// Common places DOM selection errors show up:

// 1. Script tag in the &lt;head&gt; without defer
// &lt;head&gt;
//   &lt;script src="app.js"&gt;&lt;/script&gt;   ← runs BEFORE &lt;body&gt; is parsed
// &lt;/head&gt;
// app.js:
document.querySelector(".btn").click();   // null — the button doesn't exist yet

// 2. Selector typos or wrong case
document.querySelector("#SaveBtn");        // matches "SaveBtn" exactly. HTML has "savebtn"?

// 3. Missing dot or hash
document.querySelector("save-btn");        // looks for &lt;save-btn&gt; tag, not the class
document.querySelector(".save-btn");       // matches class

// 4. Elements added by framework (React, Vue, etc.) that haven't mounted yet
document.querySelector(".react-widget");   // null on first render if code runs before mount

// 5. Elements loaded from AJAX
document.querySelector(".fetched-content");   // null before fetch resolves

// 6. Elements inside iframes
document.querySelector(".inside-iframe");     // null — iframes have their own document

// 7. Elements inside shadow DOM
document.querySelector(".shadow-content");     // null — closed shadow DOM is inaccessible

// 8. Element removed by earlier code
btn.remove();
document.querySelector(".btn");                // null — no longer in the tree

// 9. Wrong scope for the search
form.querySelector(".submit-btn");             // null if the button is OUTSIDE the form

// 10. Only-sometimes elements
document.querySelector(".admin-panel");        // null when user isn't admin

// 11. Element renamed but selector not updated
// (HTML changed from .save-button to .save-btn, JS still uses .save-button)

// 12. Chained selection where an intermediate step is null
const first = document.querySelector(".list").children[0];   // null if .list doesn't exist</code></pre>
  `,

  /* 1.3 Plain English explanation */
  'debug-1-4-1-3': `
    <p>Imagine you're at an airport looking for a specific gate. You walk up to a signboard and ask "where's gate B12?" If B12 exists, the sign points you there. If it doesn't, the sign says "no such gate." That's <code>querySelector</code> — you give it a description, and it either points at the thing or says "not here."</p>
    <p>The problem is that "not here" comes back as a slip of paper reading <code>null</code>, and your next instruction is "now go walk toward whatever gate this paper says." Trying to follow "null" as a direction is where you crash — not at the signboard, but at the moment you tried to use the answer.</p>
    <p>DOM selection errors are always this two-step: the sign came back empty, and your next step assumed it wouldn't. The fix is either (1) make sure you asked the sign at a moment when the gate existed, (2) ask the right question, or (3) check the paper before you start walking.</p>
  `,

  /* 1.4 Mental model */
  'debug-1-4-1-4': `
    <p>Think of the DOM as a physical building being assembled while your JavaScript wanders around inside it. The <code>&lt;head&gt;</code> scripts run while the walls are still going up — half the rooms don't exist yet. Scripts at the end of <code>&lt;body&gt;</code>, or scripts marked <code>defer</code>, run after construction is done. If you ask "where's the elevator?" during construction, before the elevator's been installed, you get "there is no elevator" — even though there will be one in five seconds.</p>
    <p>Every DOM selection is a moment-in-time snapshot of the building. It answers "what exists RIGHT NOW?" not "what will eventually exist?" The classic bug is code that asks too early, gets "nothing found," and treats that as final. The fix is either waiting until construction finishes (DOMContentLoaded, defer, script-at-end-of-body) or checking the answer before acting on it.</p>
    <p>Dynamic content extends the metaphor: some parts of the building only appear when the user does certain things (opens a modal, expands a section). Selecting an element inside a modal that hasn't been opened yet also returns null. Same class of bug, different cause — the element hasn't been "assembled" into the DOM yet.</p>
  `,

  /* 1.5 Step-by-step walkthrough */
  'debug-1-4-1-5': `
<pre class="language-javascript"><code class="language-javascript">// Scenario: your "Save" button doesn't respond to clicks. No visual feedback,
// no logs from the handler, nothing happens.

// index.html:
// &lt;head&gt;
//   &lt;script src="app.js"&gt;&lt;/script&gt;
// &lt;/head&gt;
// &lt;body&gt;
//   &lt;button class="save-btn"&gt;Save&lt;/button&gt;
// &lt;/body&gt;

// app.js:
document.querySelector(".save-btn").addEventListener("click", () =&gt; {
  console.log("save clicked!");
});

// Error in console:
// Uncaught TypeError: Cannot read properties of null (reading 'addEventListener')
//   at app.js:1

// Step 1: identify the error TYPE.
// "Cannot read properties of null (reading 'addEventListener')"
// → DOM selection error. querySelector returned null.

// Step 2: figure out which selector returned null.
// The only lookup on this line is document.querySelector(".save-btn").
// So .save-btn wasn't found when this ran.

// Step 3: log to confirm.
const btn = document.querySelector(".save-btn");
console.log("btn:", btn);        // btn: null
console.log(document.body);      // null too! the &lt;body&gt; itself doesn't exist yet.
// this tells us the script is running before the DOM has been parsed.

// Step 4: identify the CAUSE.
// The &lt;script&gt; tag is in &lt;head&gt;, above the &lt;body&gt;.
// When it runs, the &lt;body&gt; hasn't been parsed. No .save-btn exists.

// Step 5: fix. There are three good options:

// Option A: move the &lt;script&gt; tag to the bottom of &lt;body&gt;
// &lt;body&gt;
//   &lt;button class="save-btn"&gt;Save&lt;/button&gt;
//   &lt;script src="app.js"&gt;&lt;/script&gt;
// &lt;/body&gt;

// Option B: add "defer" to the &lt;script&gt; tag in &lt;head&gt;
// &lt;script src="app.js" defer&gt;&lt;/script&gt;
// (defer means "run this AFTER the HTML is parsed but before DOMContentLoaded")

// Option C: wrap the code in a DOMContentLoaded listener
document.addEventListener("DOMContentLoaded", () =&gt; {
  document.querySelector(".save-btn").addEventListener("click", () =&gt; {
    console.log("save clicked!");
  });
});

// Any of these works. Option B (defer) is usually the cleanest for modern code.

// Step 6: reload and verify.
// The button now responds to clicks and the log appears.
// Fix time: about 30 seconds once the pattern was recognized.</code></pre>
  `,

  /* --- Chunk 2: The Click --- */

  /* 2.0 Debugging clue */
  'debug-1-4-2-0': `
    <p>The fingerprint of a DOM selection error: <strong>the error message says "of null" AND the failing line involves an element operation.</strong> That combination is diagnostic:</p>
<pre class="language-javascript"><code class="language-javascript">// error: "Cannot read properties of null (reading 'addEventListener')"
//                                                     ^^^^^^^^^^^^^^^^ DOM-specific operation
//                                       ^^^^ null = something wasn't found

// error: "Cannot set properties of null (setting 'textContent')"
//                                                 ^^^^^^^^^^^ DOM-specific

// error: "Cannot read properties of null (reading 'classList')"
// error: "Cannot read properties of null (reading 'value')"
// error: "Cannot read properties of null (reading 'children')"
// error: "Cannot read properties of null (reading 'style')"

// all of these smell like DOM lookups. investigate the selection, not the operation.

// Quick diagnostic — log the lookup result BEFORE using it:
const el = document.querySelector(".suspect");
console.log("el:", el);
// - el: HTMLElement or similar → selector found something. bug is elsewhere.
// - el: null → selector didn't match. investigate:
//    - is the selector correct?
//    - is the DOM ready?
//    - is the element added dynamically after this line runs?
//    - is the element in an iframe or shadow DOM?
//    - is the element removed by earlier code?</code></pre>

    <p>Second diagnostic: log <code>document.body</code>. If that's null, your script is running before the body has been parsed at all — the fix is timing (defer, DOMContentLoaded, or move the script). If <code>document.body</code> is fine but your specific selector returns null, the fix is the selector or the timing of when the specific element gets added.</p>
  `,

  /* 2.1 The part that makes it click */
  'debug-1-4-2-1': `
    <p>The aha: <strong>the selection method never crashes on its own — the crash is always the NEXT line.</strong> <code>querySelector</code> silently returns null. Your code has to know to check for null, or the crash happens when you try to use the null as if it were an element. That's not a bug in querySelector — it's a consequence of the design. And once you see that split, you stop reading the error location as "where the fix goes" and start reading it as "look at the line ABOVE for a lookup":</p>
<pre class="language-javascript"><code class="language-javascript">// error: "Cannot read properties of null (reading 'addEventListener')" at line 42
// the runtime is pointing at line 42.
// the FIX is usually at line 41 (the querySelector) or in HTML/timing (why the element isn't there).

// line 41: const btn = document.querySelector(".save-btn");    ← the lookup that returned null
// line 42: btn.addEventListener(...);                            ← the crash site

// the fix might be:
// - "the selector is wrong" (fix line 41 selector)
// - "the DOM isn't ready" (wrap in DOMContentLoaded, or use defer)
// - "the element only exists sometimes" (guard line 42 with if (btn) or ?.)
// but almost never "the addEventListener call is wrong." that part is fine.</code></pre>
    <p>Once that clicks, "Cannot read of null" errors go from mysterious to routine. You see the error, look at the selection above it, decide whether it's a selector bug or a timing bug, and fix.</p>
  `,

  /* 2.2 Common confusions */
  'debug-1-4-2-2': `
    <p><strong>"But the button IS on the page — why is querySelector returning null?"</strong> The button exists NOW (when you're looking at the page) but didn't exist when the script ran. Scripts in the <code>&lt;head&gt;</code> execute before the <code>&lt;body&gt;</code> is parsed. Use <code>defer</code>, move the script to the end of <code>&lt;body&gt;</code>, or wrap in <code>DOMContentLoaded</code>.</p>

    <p><strong>"querySelector vs querySelectorAll vs getElementById — which do I use?"</strong> <code>getElementById(id)</code> is the fastest for a single element by ID. <code>querySelector(selector)</code> is more flexible (any CSS selector) and works for both class, ID, tag, or complex selectors — returns the FIRST match. <code>querySelectorAll(selector)</code> returns ALL matches as a NodeList. In practice: <code>querySelector</code> for a single element, <code>querySelectorAll</code> for many, <code>getElementById</code> when you specifically want performance and are looking up by ID.</p>

    <p><strong>"I'm using querySelectorAll but nothing happens when I loop it."</strong> Empty NodeList — nothing matched. <code>forEach</code> on an empty NodeList runs zero times, silently. Always log <code>items.length</code> to confirm you actually found matches.</p>

    <p><strong>"My selector matches in DevTools' Elements panel but not from JavaScript."</strong> Usually means the element got added after your JS ran. Try running the querySelector directly in the console to confirm the selector itself is valid. If it works in the console but not from your script, it's timing.</p>

    <p><strong>"Why doesn't optional chaining feel right for this?"</strong> Optional chaining (<code>?.</code>) silently does nothing when the element is missing. That's fine when the element might legitimately not exist. But if the button SHOULD exist and doesn't, silently doing nothing hides the bug. Prefer explicit checks with a warning for the "should always exist" case, and reserve <code>?.</code> for the "might not exist" case.</p>

    <p><strong>"What about elements inside components or shadow DOM?"</strong> Regular <code>querySelector</code> can't reach into closed shadow DOM. Some component libraries use it. You'd need to query from the component's own root, or the library provides its own accessor. For iframes, you need <code>iframe.contentDocument.querySelector(...)</code>.</p>

    <p><strong>"My selector has a typo — but it looks fine!"</strong> CSS selectors are case-sensitive and whitespace-sensitive. <code>.SaveBtn</code>, <code>.savebtn</code>, and <code>.save-btn</code> are three different selectors. Copy-paste from HTML to avoid typos. If in doubt, run the selector in DevTools' console (<code>$$(".save-btn")</code> as a shortcut) and see what it returns.</p>

    <p><strong>"Should I always guard my querySelectors?"</strong> Depends. For elements that should always exist (page structure), a guard hides bugs — better to fail loud when they're missing. For elements that may or may not exist (feature flags, dynamic content), a guard is defensive coding done right. Match the guard to reality.</p>
  `,

  /* 2.3 Common mistakes */
  'debug-1-4-2-3': `
<pre class="language-javascript"><code class="language-javascript">// Mistake 1: script in &lt;head&gt; without defer
// &lt;head&gt;&lt;script src="app.js"&gt;&lt;/script&gt;&lt;/head&gt;
document.querySelector(".btn").click();   // TypeError — DOM not parsed yet
// fix: add defer, or move script tag to end of &lt;body&gt;, or wrap in DOMContentLoaded

// Mistake 2: forgetting the dot / hash prefix
document.querySelector("save-btn");        // looks for &lt;save-btn&gt; TAG, not class
document.querySelector(".save-btn");       // correct — class selector

// Mistake 3: wrong case in the selector
document.querySelector("#SaveBtn");        // if the HTML has id="savebtn", no match
// fix: match the exact case from HTML

// Mistake 4: extra or missing whitespace in complex selectors
document.querySelector("form .btn");       // any .btn INSIDE a form (descendant)
document.querySelector("form.btn");        // a form element that has class "btn" (very rare)
// meaning is completely different. read your selector carefully.

// Mistake 5: using querySelectorAll when you meant querySelector
document.querySelectorAll(".btn").addEventListener(...);   // NodeList has no addEventListener
// fix: use querySelector, or iterate the NodeList
document.querySelectorAll(".btn").forEach(btn =&gt; btn.addEventListener(...));

// Mistake 6: expecting live NodeList behavior from querySelectorAll
const items = document.querySelectorAll(".item");   // STATIC snapshot at this moment
addNewItem();
console.log(items.length);   // does NOT include the new item
// fix: re-query after DOM changes, or use MutationObserver

// Mistake 7: querying dynamic content before it's rendered
const react = document.querySelector(".react-mounted");   // null on first render
// fix: query after component mount, or use the framework's own APIs

// Mistake 8: querying from a scope that doesn't contain the target
form.querySelector(".help-text");   // null if help-text is a SIBLING of the form
// fix: search from document, or from a common ancestor

// Mistake 9: relying on element existing after unrelated code changed the DOM
const btn = document.querySelector(".btn");
container.innerHTML = "";              // wipes ALL children, including btn
btn.click();                            // still references the removed btn — but it's not in the DOM anymore
// fix: re-query, or use event delegation

// Mistake 10: fixing with optional chaining and shipping without investigating
document.querySelector(".missing")?.addEventListener("click", handler);
// silent success. no error, no logs. if the element SHOULD have been there,
// you now have a "button doesn't work" bug with no console signal.
// fix: use ?. only when the element is legitimately optional; otherwise log a warning.

// Mistake 11: hardcoded selector after a class rename
// HTML changed from .save-button to .save-btn
// JS still uses .save-button
document.querySelector(".save-button");    // null
// fix: search the codebase and update all references when renaming classes

// Mistake 12: querying inside a template that hasn't been cloned
// &lt;template id="row"&gt;&lt;div class="row-item"&gt;&lt;/div&gt;&lt;/template&gt;
document.querySelector(".row-item");        // null — templates aren't in the live DOM
// fix: use template.content.querySelector, or clone into the DOM first</code></pre>
  `,

  /* --- Chunk 3: In Practice --- */

  /* 3.0 Tiny examples */
  'debug-1-4-3-0': `
<pre class="language-javascript"><code class="language-javascript">// The failure mode
document.querySelector(".missing");         // null
document.getElementById("missing");         // null
document.querySelectorAll(".missing");      // empty NodeList (length 0)

// The crash on next line
document.querySelector(".missing").click();
// TypeError: Cannot read properties of null (reading 'click')

// Guard patterns
const btn = document.querySelector(".btn");
if (btn) btn.addEventListener("click", handler);   // check first

document.querySelector(".btn")?.addEventListener("click", handler);   // optional chaining

// Verify what you got
const el = document.querySelector(".suspect");
console.log("el:", el);
console.log("found?", el !== null);

// Wait for DOM before selecting
document.addEventListener("DOMContentLoaded", () =&gt; {
  document.querySelector(".btn").addEventListener("click", handler);
});

// Use defer on the script tag
// &lt;script src="app.js" defer&gt;&lt;/script&gt;

// Script at bottom of body
// &lt;body&gt;
//   ...content...
//   &lt;script src="app.js"&gt;&lt;/script&gt;
// &lt;/body&gt;

// Check queryeSelectorAll length
const items = document.querySelectorAll(".item");
console.log("found", items.length, "items");
items.forEach(process);

// Selector with correct syntax
document.querySelector(".save-btn");       // class
document.querySelector("#save-btn");       // id
document.querySelector("button");           // tag
document.querySelector("[data-role=save]"); // attribute
document.querySelector("button.save-btn"); // tag + class

// Search within a specific element
const form = document.querySelector("form");
const submit = form.querySelector("button[type=submit]");

// Verify DOM is ready
console.log("document.body:", document.body);   // null → DOM not ready

// Simple defensive selection helper
function $(selector) {
  const el = document.querySelector(selector);
  if (!el) console.warn("no element for:", selector);
  return el;
}

// Event delegation avoids repeated selection
document.body.addEventListener("click", (e) =&gt; {
  if (e.target.matches(".save-btn")) handleSave();
});

// Re-query after DOM changes
container.innerHTML = renderList();
container.querySelectorAll(".item").forEach(bindHandlers);

// getElementById is faster than querySelector for id lookups
document.getElementById("save-btn");        // slightly faster than querySelector("#save-btn")</code></pre>
  `,

  /* 3.1 Real website uses */
  'debug-1-4-3-1': `
    <p><strong>Example: script in the wrong place</strong></p>
<pre class="language-javascript"><code class="language-javascript">// index.html:
// &lt;head&gt;
//   &lt;script src="app.js"&gt;&lt;/script&gt;   ← runs before &lt;body&gt; is parsed
// &lt;/head&gt;
// &lt;body&gt;
//   &lt;button class="save-btn"&gt;Save&lt;/button&gt;
// &lt;/body&gt;

// app.js crashes with:
// Cannot read properties of null (reading 'addEventListener')

// Fix option 1: defer
// &lt;script src="app.js" defer&gt;&lt;/script&gt;
// (script downloads in parallel, executes after DOM is parsed)

// Fix option 2: move to end of body
// &lt;body&gt;
//   &lt;button class="save-btn"&gt;Save&lt;/button&gt;
//   &lt;script src="app.js"&gt;&lt;/script&gt;
// &lt;/body&gt;

// Fix option 3: wait for DOMContentLoaded
document.addEventListener("DOMContentLoaded", () =&gt; {
  document.querySelector(".save-btn").addEventListener("click", handleSave);
});</code></pre>

    <p><strong>Example: dynamic content added after page load</strong></p>
<pre class="language-javascript"><code class="language-javascript">// You fetch data and render items into a list:
async function loadItems() {
  const items = await fetch("/api/items").then(r =&gt; r.json());
  container.innerHTML = items.map(i =&gt; \`&lt;div class="item"&gt;\${i.name}&lt;/div&gt;\`).join("");
}

loadItems();

// Then somewhere else:
document.querySelector(".item").addEventListener("click", handleClick);   // null!
// the items don't exist yet — fetch hasn't resolved.

// Fix option 1: attach listeners after render
async function loadItems() {
  const items = await fetch("/api/items").then(r =&gt; r.json());
  container.innerHTML = items.map(i =&gt; \`&lt;div class="item"&gt;\${i.name}&lt;/div&gt;\`).join("");
  container.querySelectorAll(".item").forEach(el =&gt; {
    el.addEventListener("click", handleClick);
  });
}

// Fix option 2: event delegation (better for dynamic content)
container.addEventListener("click", (e) =&gt; {
  if (e.target.matches(".item")) handleClick(e);
});
// this listener works no matter when items are added, and doesn't need re-binding.</code></pre>

    <p><strong>Example: page structure vs feature elements</strong></p>
<pre class="language-javascript"><code class="language-javascript">// Some elements SHOULD always exist (fail loud if missing).
// Some elements are optional (fail silent).

// "should always exist" — treat missing as a real bug
const header = document.querySelector("header");
if (!header) {
  console.error("HEADER is missing — page structure is wrong");
  return;
}
setupHeader(header);

// "might be there, might not" — use optional chaining, silent fallback
document.querySelector(".dismiss-banner")?.addEventListener("click", dismissBanner);
// only some pages have a banner. no error if this is one that doesn't.</code></pre>

    <p><strong>Example: selector typo diagnosed with DevTools</strong></p>
<pre class="language-javascript"><code class="language-javascript">// "Cannot read properties of null (reading 'value')"
// tracked down to:
const email = document.querySelector("#userEmail").value;

// In DevTools console, run:
// $$("#userEmail")           → []
// $$("[id*=mail]")           → [input#user-email]

// The HTML uses id="user-email" (kebab-case) but the JS uses "#userEmail" (camelCase).
// Fix: match the actual id
const email = document.querySelector("#user-email").value;

// This is one of the most common causes. Naming conventions between HTML and JS drift over time.</code></pre>

    <p><strong>Example: safely wiring up multiple buttons</strong></p>
<pre class="language-javascript"><code class="language-javascript">// buttons that may or may not exist on this page
const config = [
  { selector: ".save-btn",   handler: handleSave },
  { selector: ".cancel-btn", handler: handleCancel },
  { selector: ".delete-btn", handler: handleDelete },
];

config.forEach(({ selector, handler }) =&gt; {
  const btn = document.querySelector(selector);
  if (btn) {
    btn.addEventListener("click", handler);
  } else {
    console.warn(selector, "not found on this page — handler not wired");
  }
});
// each button is optional. missing ones log a warning without crashing.
// perfect for shared JS that runs on multiple pages with different UI.</code></pre>

    <p><strong>Example: verifying element existence during debugging</strong></p>
<pre class="language-javascript"><code class="language-javascript">// Bug report: "the modal doesn't open."
// Investigation:
console.log("open button:", document.querySelector(".open-modal-btn"));
console.log("modal:", document.querySelector(".modal"));
console.log("close button:", document.querySelector(".close-modal-btn"));

// Output:
// open button: &lt;button class="open-modal-btn"&gt;...
// modal: null                                           ← there's the bug
// close button: &lt;button class="close-modal-btn"&gt;...

// The modal element doesn't exist. Check HTML template.
// Found: the modal template was removed during a redesign but the JS still references it.
// Fix: add the modal back to HTML, OR remove the JS that opens it.</code></pre>
  `,

  /* 3.2 Connects to */
  'debug-1-4-3-2': `
    <ul>
      <li><strong>Type errors</strong> → DOM selection errors are technically TypeErrors on null; this is a subcategory</li>
      <li><strong><code>querySelector</code>, <code>getElementById</code></strong> → the methods that return null when nothing matches</li>
      <li><strong><code>querySelectorAll</code></strong> → returns an empty NodeList (not null) when nothing matches; silent failure mode</li>
      <li><strong>Script loading (<code>defer</code>, <code>async</code>)</strong> → controls when scripts run relative to DOM parsing</li>
      <li><strong>DOMContentLoaded event</strong> → fires when the DOM is fully parsed and ready to query</li>
      <li><strong>Optional chaining (<code>?.</code>)</strong> → silent guard for optional elements</li>
      <li><strong>Event delegation</strong> → avoids repeated selection for dynamic content</li>
      <li><strong>MutationObserver</strong> → the way to react to elements being added later</li>
      <li><strong>Frameworks (React, Vue, Svelte)</strong> → have their own APIs for accessing rendered elements safely</li>
      <li><strong>Shadow DOM</strong> → closed shadow roots aren't accessible via document.querySelector</li>
      <li><strong>Iframes</strong> → have their own document; querySelector doesn't cross iframe boundaries</li>
      <li><strong>CSS selectors</strong> → the query language used by querySelector</li>
      <li><strong>Debugging null / undefined</strong> → DOM selection is one of the top sources of nulls</li>
    </ul>
  `,

  /* 3.3 See also */
  'debug-1-4-3-3': `
    <ul>
      <li><code>querySelector</code></li>
      <li><code>querySelectorAll</code></li>
      <li><code>getElementById</code></li>
      <li>Type errors</li>
      <li>DOMContentLoaded</li>
      <li>Script loading (<code>defer</code>, <code>async</code>)</li>
      <li>Optional chaining</li>
      <li>Event delegation</li>
      <li>MutationObserver</li>
      <li>CSS selectors</li>
      <li>Shadow DOM</li>
      <li>Iframes</li>
      <li>Debugging DOM</li>
    </ul>
  `,





















































/* ========================================================= 
   LESSON: 7.3 How to Read Error Messages
 =======================================================*/




/* ========================================================= 
   Sub-lesson: 7.3.9 How to Read Error Messages → symptom vs cause
 =======================================================*/

  /* --- Chunk 0: What & How --- */

  /* 0.0 What it is */
  'debug-2-8-0-0': `
    <p><strong>Symptom vs cause</strong> is the pattern where the error message accurately points at the line where your code crashed, but the actual bug — the code you need to change — lives somewhere else, often much earlier in the execution. The crash site is the SYMPTOM: where the wrong value finally got used in a way that couldn't succeed. The CAUSE is upstream: wherever that wrong value first got created or set incorrectly.</p>
    <p>This is the single most common source of frustration when reading errors. You get a red message with an exact line number. You go to that line. The code looks fine. You stare, you rewrite it, you add null-checks, you wrap it in try/catch — but the underlying misbehavior stays. That's because you're fixing the alarm, not the fire. Understanding the distinction is what turns "why is this error so confusing?" into "the error is telling me where to START looking, not where to STOP."</p>
  `,

  /* 0.1 Syntax */
  'debug-2-8-0-1': `
<pre class="language-javascript"><code class="language-javascript">// The classic shape of a symptom-vs-cause bug:

// The reported error:
// TypeError: Cannot read properties of undefined (reading 'name')
//   at renderProfile (profile.js:120)

// The line the error points at (line 120):
document.querySelector(".user-name").textContent = user.profile.name;

// The line that ACTUALLY caused the bug (line 40):
async function loadUser(id) {
  const res = await fetch("/api/users/" + id);
  if (res.status === 404) return;         // ← the bug: returns undefined silently
  return res.json();
}

// Sequence of events:
// 1. loadUser returns undefined (because the 404 case has no explicit return of anything meaningful).
// 2. that undefined flows through multiple function calls, silently.
// 3. eventually, code tries to do user.profile.name → crash.
// 4. the error reports line 120 (where the crash happened).
// 5. the ACTUAL fix belongs on line 40 (where the bad value was first produced).
//
// If you "fix" line 120 by adding optional chaining:
//   document.querySelector(".user-name").textContent = user?.profile?.name;
// the crash goes away, but the app now silently shows a blank name.
// the underlying misbehavior — "loadUser silently returned undefined" — is still there.
// you moved the bug from "visible crash" to "silent wrong output."

// Recognizing this pattern in the error:
// - "Cannot read properties of undefined" → something upstream was undefined
// - "X is not a function" → X came from somewhere; it should have been a function
// - "X is not iterable" → X was supposed to be an array; where did it lose its array-ness?
// - JSON.parse errors on responses → the response might not have been JSON at all
// - "Cannot set properties of null" → an earlier lookup returned null</code></pre>
  `,

  /* 0.2 Anatomy / Breakdown */
  'debug-2-8-0-2': `
<pre class="language-javascript"><code class="language-javascript">// The two locations of every symptom-vs-cause bug:

// 1. THE SYMPTOM (crash site)
//    → where the runtime finally throws.
//    → where the error message points.
//    → the LAST place the wrong value was used.
//    → the line whose code is technically correct — it just got bad input.

// 2. THE CAUSE (origin site)
//    → where the wrong value first came into existence.
//    → NOT mentioned in the error message.
//    → could be a function called earlier, a variable set earlier, a network response, or a config value.
//    → the line where fixing the code actually prevents the bug.

// Between them: THE PIPELINE
//    → all the code the wrong value traveled through without complaint.
//    → could be one line or hundreds.
//    → this is what makes finding the cause hard: the value stayed "wrong" for a while,
//      moving through code that didn't need to touch its wrongness.

// Example anatomy:

// Line 40 (CAUSE):
async function loadUser(id) {
  if (id == null) return;   // silently produces undefined for null id
  return await fetchUser(id);
}

// Line 78 (pipeline):
const user = await loadUser(currentId);   // user is undefined; no error yet

// Line 95 (pipeline):
saveUserPreference(user, "theme", "dark");   // no crash; the function just no-ops

// Line 120 (SYMPTOM):
document.querySelector(".name").textContent = user.profile.name;
// crash: "Cannot read properties of undefined (reading 'profile')"

// the error names line 120. the fix belongs at line 40.
// four levels of stack, one bug.</code></pre>
  `,

  /* 0.3 Syntax Details That Matter */
  'debug-2-8-0-3': `
    <p><strong>The stack trace is your map from symptom to cause.</strong> The top line of the stack is where the error was thrown (the symptom). Each line below shows a caller — the function that invoked this one. Reading down the stack is walking backward through execution. Somewhere in that chain is the function that created the wrong value:</p>
<pre class="language-javascript"><code class="language-javascript">// TypeError: Cannot read properties of undefined (reading 'name')
//   at renderProfile (profile.js:120)      ← SYMPTOM (top)
//   at showDashboard (dashboard.js:88)     ← caller of the symptom
//   at handleLogin (auth.js:42)             ← caller of the caller
//   at HTMLButtonElement.&lt;anonymous&gt;        ← the click that triggered it all

// walk down: each line is a suspect for "where did the wrong value get introduced?"
// often the CAUSE is somewhere in dashboard.js or auth.js, not in profile.js.</code></pre>

    <p><strong>"Cannot read properties of undefined" is almost always upstream.</strong> This error class means "something in this expression was undefined when it shouldn't be." That "something" is a variable or an intermediate value that came from earlier code. The fix belongs wherever that value was created:</p>
<pre class="language-javascript"><code class="language-javascript">// symptom:
console.log(user.profile.name);   // "Cannot read properties of undefined (reading 'name')"

// which of these is undefined?
// - user? then the CAUSE is wherever user was assigned.
// - user.profile? then the CAUSE is wherever the API response's shape was decided.

// determine which by logging:
console.log("user:", user);
console.log("user.profile:", user?.profile);
console.log(user.profile.name);

// whichever log first shows undefined, THAT is the value to trace upstream.</code></pre>

    <p><strong>The fix at the symptom hides the bug; the fix at the cause solves it.</strong> This is the critical distinction. Adding <code>?.</code> or a null-check at the crash site can be legitimate defensive coding — but only if the value was allowed to be nullish. If the value was supposed to always exist, the null-check just papers over the real bug:</p>
<pre class="language-javascript"><code class="language-javascript">// symptom-only fix (bad if the value should always exist):
document.querySelector(".name").textContent = user?.profile?.name;
// crash gone, but if user is undefined here, the UI silently shows blank.
// the underlying bug (loadUser sometimes returns undefined) is still there,
// waiting to cause bugs in other parts of the app.

// cause fix (good — addresses the actual problem):
async function loadUser(id) {
  const res = await fetch("/api/users/" + id);
  if (!res.ok) throw new Error("failed to load user: " + res.status);
  return res.json();
}
// now loadUser NEVER silently returns undefined.
// callers either get a valid user or a thrown error they must handle.
// no downstream code has to defend against undefined users.</code></pre>

    <p><strong>Some error messages are famously misleading.</strong> Certain patterns almost always have the fix somewhere other than the reported line:</p>
<pre class="language-javascript"><code class="language-javascript">// "X is not a function"
// → X came from somewhere. it should have been a function but wasn't.
// → the CAUSE is: whoever assigned to X, or the import that failed to bind, or a wrong destructure.

// "Cannot read properties of null (reading 'X')"
// → a lookup returned null. probably a querySelector, .find, or an object field that doesn't exist.
// → the CAUSE is: the wrong selector, the wrong search criteria, or missing data.

// "SyntaxError: Unexpected token '}' at line 214"
// → the parser reported where it choked. the CAUSE is often 50 lines earlier where a brace didn't close.

// "unhandled promise rejection"
// → an async operation failed and no one caught it.
// → the CAUSE is either the failing operation OR the missing .catch/try-await.
// → the reported location is where the promise was created, not where it failed.

// "Maximum call stack size exceeded"
// → infinite recursion. the CAUSE is the recursive call that lacks a proper base case,
// → NOT the line the runtime happened to give up on.

// "TypeError: X is not iterable"
// → tried to for-of, spread, or destructure something that wasn't iterable.
// → the CAUSE is upstream: where did the array-shape get lost? was it null or an object?</code></pre>

    <p><strong>Time between cause and symptom can be large in async code.</strong> A misconfigured fetch on page load might not surface until the user clicks a button 30 seconds later. The crash then names the click handler, but the fix belongs at page load. Async bugs are especially prone to this:</p>
<pre class="language-javascript"><code class="language-javascript">// page load (line 10):
window.config = await loadConfig();   // silently returns {} if the file is missing

// 30 seconds later, user clicks a button (line 240):
btn.addEventListener("click", () =&gt; {
  const key = config.api.key;   // TypeError: Cannot read properties of undefined
  makeRequest(key);
});

// the error names line 240. but the code there is fine.
// the CAUSE is line 10, where config was allowed to be {} instead of throwing.</code></pre>
  `,

  /* --- Chunk 1: Why & When --- */

  /* 1.0 What problem it solves */
  'debug-2-8-1-0': `
    <p>The problem: error messages point at a location, and human instinct is to trust the location. You go to the line, try to fix the line, and either can't (the code looks right) or you fix it incorrectly (adding a null-check that hides the real issue). Days later, the bug reappears in a different spot — because the wrong value is still being produced upstream, and it's now finding new places to cause trouble.</p>
    <p>Understanding symptom-vs-cause solves this. Once you recognize the pattern, you stop trying to fix crash sites and start tracing wrong values upstream. This shifts you from "reactive symptom-patching" to "root-cause debugging" — the difference between "the current crash is silenced" and "this class of bug can't happen anymore."</p>
  `,

  /* 1.1 Why use it */
  'debug-2-8-1-1': `
    <p>Because fixing symptoms doesn't fix bugs. A null-check at the crash site turns a loud crash into silent wrong behavior — the app "works" but produces incorrect output. Users might not notice for weeks. When they do, the report is vague ("something is wrong with the profile page") and finding the real cause is harder than it would have been when the crash was still firing.</p>
    <p>It also compounds. Every symptom-fix adds a defensive check somewhere. Over time, the codebase accumulates dozens of <code>?.</code> and <code>|| {}</code> and <code>if (x)</code> guards, all trying to defend against the same underlying wrong value that was never fixed at the source. The code becomes harder to read, harder to reason about, and slower to change. Root-cause fixes prevent that accumulation.</p>
  `,

  /* 1.2 Where you use it */
  'debug-2-8-1-2': `
<pre class="language-javascript"><code class="language-javascript">// When to suspect a symptom-vs-cause error:

// 1. The line the error points at looks fine.
document.querySelector(".name").textContent = user.name;
// this is normal, reasonable code. if it's crashing, the bug is that
// SOMETHING upstream let user be undefined. that's the cause.

// 2. The error says "undefined" but you thought that value was always defined.
// → the assumption was wrong. trace where the value came from.

// 3. Adding a null-check at the crash site "fixes" it, but you're not sure why the value was null.
// → you fixed the symptom, not the cause. the wrong value is still being produced;
//   you just stopped it from crashing here.

// 4. The bug moves from one crash location to another after each "fix."
// → whack-a-mole is a hallmark of symptom-patching. the cause is the same;
//   different symptoms are just where the bad value pops up next.

// 5. The stack trace has several frames.
// → often the cause is in one of the caller frames, not the top.
// → walk down the stack, log the suspect value at each level, find where it went wrong.

// 6. Async code where errors appear far from where they were caused.
// → an unhandled promise rejection, an event handler crashing on data set at page load.
// → the async gap between cause and symptom can be long.

// 7. Errors that look like the runtime is confused about its own state.
// → "Cannot read properties of undefined" on a variable you're SURE is defined.
// → check: is the variable defined where you think, or is it undefined at the moment
//   the code actually runs (e.g., inside an async callback that fires before init)?

// 8. Bugs that only appear on certain inputs.
// → the code works for most data. one specific input causes a downstream crash.
// → the cause is either a validation gap or a special-case not handled upstream.</code></pre>
  `,

  /* 1.3 Plain English explanation */
  'debug-2-8-1-3': `
    <p>Imagine a pipe leaks water onto your kitchen floor. You mop it up. Next day, more water. You mop again. The mopping is symptom-fixing — you're addressing where the water shows up, not where it comes from. The real fix is finding the leak in the pipe (which could be in the basement, in the wall, or on the roof) and repairing THAT. Once the leak is fixed, no more mopping is needed.</p>
    <p>Error messages in JavaScript are the water on your kitchen floor. They tell you where the problem became visible — where the last operation gave up. But the problem itself might be nowhere near the kitchen. Following the trail of water upstream (from crash site → to who called that code → to what value they passed in → to where that value was made) is what leads you to the leak.</p>
    <p>The trap is that mopping "works" — for a while. It removes the visible problem. But mopping doesn't fix pipes, and null-checks at crash sites don't fix upstream bugs.</p>
  `,

  /* 1.4 Mental model */
  'debug-2-8-1-4': `
    <p>Think of your program as an assembly line. A product moves from station to station, each station doing something to it. If the finished product is wrong, the last station is where you notice — but the mistake could have been made at any earlier station. The error message is a worker at the last station shouting "this piece is broken!" That worker is right — the piece IS broken. But asking that worker to fix it is asking them to salvage a defective part.</p>
    <p>To actually fix the problem, you walk backward down the line, asking each worker "was the piece already broken when you got it?" The first worker who says "yes, I got it broken" is one step past the bug. The last worker who says "no, it was fine when I passed it on" is where the bug happened. That handoff between the two is your cause.</p>
    <p>The stack trace is the list of workers, in reverse order. Reading it top-to-bottom is walking backward down the assembly line. Every non-trivial debugging session for a wrong-value bug is this walk.</p>
  `,

  /* 1.5 Step-by-step walkthrough */
  'debug-2-8-1-5': `
<pre class="language-javascript"><code class="language-javascript">// Scenario: clicking a "Save Profile" button crashes with a clear error message,
// but fixing the reported line doesn't solve the problem.

// The error:
// TypeError: Cannot read properties of undefined (reading 'email')
//   at buildPayload (save.js:87)
//   at handleSaveClick (form.js:44)
//   at HTMLButtonElement.&lt;anonymous&gt; (form.js:20)

// The reported line (save.js:87):
function buildPayload(user) {
  return {
    id: user.id,
    email: user.contact.email,   // ← crash: user.contact is undefined
    name: user.name,
  };
}

// Step 1: identify that this could be a symptom, not the cause.
// Signs:
// - the code looks reasonable.
// - the assumption (user.contact exists) seems normal to have.
// - the tempting fix is user?.contact?.email — but WHY is contact missing?

// Step 2: walk the stack trace backward.
// Level 1: save.js:87 — the crash. user.contact is undefined here.
// Level 2: form.js:44 — the caller. builds "user" and calls buildPayload(user).
// Level 3: form.js:20 — the click handler.

// Step 3: go to Level 2 and look at how "user" is built.
// form.js:44:
async function handleSaveClick() {
  const formData = readForm();
  const user = mergeWithExisting(formData);   // ← where does the "user" come from?
  buildPayload(user);
}

// Step 4: log the intermediate value.
async function handleSaveClick() {
  const formData = readForm();
  const user = mergeWithExisting(formData);
  console.log("user before buildPayload:", user);   // ← inspect
  buildPayload(user);
}

// Output:
// user before buildPayload: { id: 42, name: "Alice" }   ← no "contact" field!
//
// So user is defined, but doesn't have contact. Why?

// Step 5: follow "user" one more step upstream. Look at mergeWithExisting.
function mergeWithExisting(formData) {
  const existing = getUserFromCache();   // ← is contact set here?
  return { ...existing, ...formData };
}

// Step 6: log getUserFromCache.
function getUserFromCache() {
  const raw = localStorage.getItem("user");
  const parsed = raw ? JSON.parse(raw) : {};
  console.log("cached user:", parsed);   // ← inspect
  return parsed;
}

// Output:
// cached user: { id: 42, name: "Alice" }   ← still no contact.
//
// So the cache doesn't have "contact" either. Now check WHERE the cache is populated.

// Step 7: search for "localStorage.setItem('user'" or wherever cache gets written.
// Found: after login, we cache only { id, name } — not contact.
function saveUserToCache(user) {
  localStorage.setItem("user", JSON.stringify({
    id: user.id,
    name: user.name,
    // contact was in the login response but was accidentally not saved.
  }));
}

// THIS is the cause. buildPayload was innocent. handleSaveClick was innocent.
// The bug is that the CACHE strips off the contact field at write time.

// Step 8: fix at the cause.
function saveUserToCache(user) {
  localStorage.setItem("user", JSON.stringify(user));   // save the whole thing
}

// Now, every downstream user of the cache — including buildPayload — has contact available.
// No null-checks needed at crash sites. No hidden silent-blank bugs later.
// The crash goes away because the wrong value stops being produced.

// Time spent: about 5 minutes of walking the stack, logging values, and following upstream.
// The alternative (adding user?.contact?.email at the crash site) would have "worked" in 10 seconds
// but left the cache-stripping bug alive to cause a different crash next week.</code></pre>
  `,

  /* --- Chunk 2: The Click --- */

  /* 2.0 Debugging clue */
  'debug-2-8-2-0': `
    <p>The tell that you're looking at a symptom-vs-cause bug (not a bug at the reported line):</p>
<pre class="language-javascript"><code class="language-javascript">// clue 1: the reported line looks correct on its own.
// if the code at the crash site is "the obvious way to write this,"
// the bug is probably not there — it's in the assumption about what the code receives.

// clue 2: the error mentions "undefined" or "null" for a variable you're sure exists.
// they DO exist, but their VALUE is nullish. that value came from somewhere.

// clue 3: fixing the crash site with ?. or a null-check makes the crash go away
// but the app now silently misbehaves.
// that's proof the crash was masking a real problem — you didn't fix, you muted.

// clue 4: the same bug reappears in a different location after each "fix."
// symptom-patching whack-a-mole. one cause, many symptoms.

// clue 5: the stack trace has multiple frames.
// every non-top frame is a candidate for "this is where the value went wrong."
// walk down and log at each level to narrow it down.

// clue 6: an async gap between two operations.
// if code that runs LATER crashes on data set EARLIER, the cause is often upstream in time
// as well as upstream in the call stack.

// how to confirm you found the cause and not just another symptom:
// - fix the code where you think the cause is.
// - verify the crash goes away.
// - AND verify that no downstream defensive checks are still needed.
// - AND verify the behavior is now correct end-to-end (not just "doesn't crash").
// - if the fix makes the code simpler because you can now remove old ?. or ||, that's a great sign.</code></pre>
  `,

  /* 2.1 The part that makes it click */
  'debug-2-8-2-1': `
    <p>The aha: <strong>the error message is a starting point, not a finishing point.</strong> Runtime errors are always accurate about WHERE they happened. They're usually wrong about WHERE THE BUG IS. That's not the runtime lying — it's that the runtime doesn't know about your intent; it only knows about the last operation that couldn't complete:</p>
<pre class="language-javascript"><code class="language-javascript">// "Cannot read properties of undefined (reading 'name')" at line 120
// what the runtime is saying:
//   "on line 120, I tried to read .name from something, and that something was undefined."
// what the runtime is NOT saying:
//   "the bug is on line 120."
//   "the code on line 120 is wrong."
//   "add a null-check on line 120."

// the runtime told you an accurate fact. what you DO with that fact is up to you.
// most of the time, the fact means "trace 'that something' upstream."</code></pre>
    <p>Once that clicks, you stop panicking at error messages. You read them as facts, not verdicts. "The runtime says X was undefined at line Y. Now: where did X come from?" That question is where debugging actually starts.</p>
  `,

  /* 2.2 Common confusions */
  'debug-2-8-2-2': `
    <p><strong>"But the error message points at that line — shouldn't the fix be there?"</strong> Sometimes yes, often no. The reported line is where the error was DETECTED. Whether the fix belongs there depends on whether the code at that line is correct given the values it received. If the code is reasonable and the values are wrong, the fix is upstream. If the code itself is wrong (missing a check, using the wrong operator), the fix is at the reported line.</p>

    <p><strong>"When IS the fix at the reported line?"</strong> When the code at that line is genuinely wrong given the inputs it was expected to receive. Example: reading <code>arr[i]</code> where <code>i</code> is beyond the array length — the bug is the array access, and the fix is a bounds check. But if <code>i</code> should always be in range and isn't, then the fix is wherever <code>i</code> got the wrong value.</p>

    <p><strong>"How do I know the difference between defensive coding and symptom-patching?"</strong> Ask: "is it acceptable for this value to be missing?" If yes, defensive coding is correct — add the check, provide a default, document why the value can be absent. If no, defensive coding is symptom-patching — you'd be hiding a bug, not preventing one. Real defensive coding matches the actual data contract; symptom-patching hides violations of the contract.</p>

    <p><strong>"What if I can't find the cause? Should I just add the null-check?"</strong> As a temporary measure to stop crashes in production, yes — with a comment saying "TODO: figure out why this is nullish sometimes." But don't stop there. Come back and finish the investigation. The undiagnosed bug is still in the code; you just made it silent.</p>

    <p><strong>"Every debugging session takes forever if I have to trace values upstream."</strong> With practice, most traces are quick — one or two logs, one step upstream, done. The long ones happen when the codebase has already been symptom-patched heavily, so you're peeling back layers. Fixing bugs at the cause makes future debugging faster because there are fewer wrong values in flight.</p>

    <p><strong>"The stack trace only shows library code, not my code."</strong> Look for the FIRST frame in the trace that's YOUR code (not a library). That's usually the boundary where your code passed the wrong value into the library. The library reports where it crashed; your code's line just above is where the wrong input entered the library.</p>

    <p><strong>"The error says one thing but my log at the crash site shows the value is fine."</strong> Two possibilities: (1) the log ran AFTER the value was already fixed or changed. Move the log earlier. (2) You're logging a different variable than the one causing the error. Re-read the error message carefully — which specific expression is undefined?</p>
  `,

  /* 2.3 Common mistakes */
  'debug-2-8-2-3': `
<pre class="language-javascript"><code class="language-javascript">// Mistake 1: adding ?. everywhere at the crash site without investigating why the value is nullish
document.querySelector(".name").textContent = user?.profile?.name;
// crash gone. but if the user's profile SHOULD exist here, this is now a silent-blank bug.
// fix: figure out why profile is missing. handle it at the source.

// Mistake 2: wrapping the crash line in try/catch and swallowing the error
try {
  render(user.profile.name);
} catch (err) {
  // ignore
}
// now the crash is silent AND you have no logs of the error happening.
// the underlying bug is still there.
// fix: don't catch what you can't handle. handle the source.

// Mistake 3: fixing the reported line and moving on without verifying the whole flow works
// crash at line 120. add null-check. crash goes away. ship.
// two days later: new crash at line 300 caused by the SAME wrong value.
// fix: once you find A cause, verify it's THE cause by checking the app's end-to-end behavior.

// Mistake 4: trusting the reported line more than the stack trace
// the stack trace is your map from symptom to cause. use it.
// don't just click the reported line; scroll through the whole trace.

// Mistake 5: not walking down the stack because "those files are libraries"
// even library frames tell you something: they show you WHICH library function
// received the wrong input. the line of YOUR code that called that library
// is the boundary where the wrong value entered the library. that's a strong clue.

// Mistake 6: fixing the same class of symptom over and over in different files
// if you find yourself adding user?.profile?.name in 8 different files,
// the CAUSE is that "user" isn't consistent about having profile.
// fix at the boundary that produces user (API layer, cache, state store) instead
// of patching every consumer.

// Mistake 7: assuming an error message's location is where the wrong VALUE was created
// most error locations are where the wrong value was USED.
// the location where it was created is often several stack frames deeper.

// Mistake 8: ignoring the stack trace because "it's too noisy"
// modern browsers let you "blackbox" library frames so only your code shows.
// use that. then read the trace top-to-bottom, thinking about each frame.

// Mistake 9: fixing the code that's "closest to the crash" without understanding why it's broken
// if you find yourself adding checks with no idea why the value is bad,
// you're guessing. investigate FIRST, then fix based on what you learned.

// Mistake 10: assuming an async error's location is where the async chain started
// setTimeout/setInterval callbacks, event listeners, .then blocks —
// they may show a stack that starts at the callback invocation, NOT the code that scheduled it.
// finding the cause often means finding what code SCHEDULED the callback, not what runs INSIDE it.

// Mistake 11: writing "defensive code" without documenting WHY it's defensive
// if user.profile can legitimately be missing, code that handles it should say so with a comment.
// if you're not sure, that's a sign you don't know the contract — investigate before defending.</code></pre>
  `,

  /* --- Chunk 3: In Practice --- */

  /* 3.0 Tiny examples */
  'debug-2-8-3-0': `
<pre class="language-javascript"><code class="language-javascript">// Pattern 1: undefined property → cause is where the object was created

// Symptom (crash site):
console.log(user.profile.name);   // TypeError: Cannot read 'name' of undefined

// Cause (upstream):
const user = { id: 1 };   // never set .profile

// Fix at cause:
const user = { id: 1, profile: { name: "" } };


// Pattern 2: "X is not a function" → cause is a wrong import or assignment

// Symptom:
myUtil.format(date);   // TypeError: myUtil.format is not a function

// Cause:
import myUtil from "./utils";   // named export imported as default → myUtil is undefined

// Fix at cause:
import { myUtil } from "./utils";


// Pattern 3: null selector → cause is timing or wrong selector

// Symptom:
document.querySelector(".btn").addEventListener(...);   // Cannot read of null

// Cause A: script runs before DOM is ready
// Cause B: selector doesn't match anything

// Fix at cause A:
document.addEventListener("DOMContentLoaded", () =&gt; {
  document.querySelector(".btn").addEventListener(...);
});

// Fix at cause B: correct the selector


// Pattern 4: NaN in math → cause is a string coercion upstream

// Symptom:
document.querySelector(".total").textContent = "$" + total;   // shows "$NaN"

// Cause:
const total = a + b;   // where a is a string "5" and b is a number 3

// Fix at cause:
const total = Number(a) + Number(b);


// Pattern 5: JSON.parse throws → cause is that response wasn't JSON

// Symptom:
const data = JSON.parse(response);   // Unexpected token &lt; in JSON at position 0

// Cause: response was HTML (an error page from server), not JSON

// Fix at cause: check response.ok / content-type before parsing


// Pattern 6: infinite loop / max stack → cause is missing base case

// Symptom:
walk(node);   // Maximum call stack size exceeded

// Cause: the recursive call has no termination
function walk(node) {
  walk(node.next);   // no base case
}

// Fix at cause:
function walk(node) {
  if (!node) return;
  walk(node.next);
}


// Pattern 7: cache miss → cause is where the cache is written

// Symptom (crash reading cached data):
const zip = cached.address.zipcode;   // TypeError

// Cause (in a different file, the cache write strips fields):
cache.set("user", { id, name });   // dropped address on the floor

// Fix at cause:
cache.set("user", { id, name, address });


// Pattern 8: silent unhandled rejection → cause is missing .catch or missing await

// Symptom:
// "unhandled promise rejection: Error: fetch failed"
fetchData();   // no .catch, no await

// Fix at cause: handle the promise
await fetchData();
// or
fetchData().catch(err =&gt; console.error(err));


// Pattern 9: wrong value throughout the app → cause is a bad default

// Symptom: everywhere config is used, it's an empty object
config.api.url;   // undefined all the time

// Cause: config was defaulted to {} when loading failed
window.config = await load().catch(() =&gt; ({}));

// Fix at cause: fail loudly instead of defaulting to garbage
window.config = await load();   // let the error bubble; handle at boot</code></pre>
  `,

  /* 3.1 Real website uses */
  'debug-2-8-3-1': `
    <p><strong>Example: an intermittent form crash caused by cached data</strong></p>
<pre class="language-javascript"><code class="language-javascript">// Users report: sometimes the "Save Profile" button crashes.
// Error in console:
// TypeError: Cannot read properties of undefined (reading 'zipcode')
//   at buildPayload (save.js:87)

// The reported line:
const zip = user.address.zipcode;

// A tempting quick fix:
const zip = user.address?.zipcode ?? "";   // ← symptom-only

// Root-cause investigation:
// - log user right before the line
// - find that user.address is missing sometimes
// - trace user to where it was built: from cache
// - trace cache write: found it drops the "address" field before writing

// Root-cause fix: keep address in the cache
saveUserToCache({ id, name, email, address });

// Result:
// - the specific crash is gone.
// - all OTHER code that reads user.address also benefits (no more inconsistency).
// - no null-checks needed at read sites.
// - future features that use user.address don't have to add their own guards.</code></pre>

    <p><strong>Example: whack-a-mole across the codebase</strong></p>
<pre class="language-javascript"><code class="language-javascript">// Week 1: crash in dashboard: "Cannot read of undefined (reading 'items')"
// Fix: dashboard.js uses data?.items ?? []
//
// Week 2: crash in reports: "Cannot read of undefined (reading 'total')"
// Fix: reports.js uses data?.total ?? 0
//
// Week 3: crash in export: "Cannot read of undefined (reading 'format')"
// Fix: export.js uses data?.format ?? "csv"

// Pattern: same "data" is undefined in three places. same cause every time.
// Investigation: data comes from useSharedData(). that hook returns undefined
// during the initial render.
// Root-cause fix: useSharedData returns a default shape instead of undefined.
function useSharedData() {
  const [data, setData] = useState({ items: [], total: 0, format: "csv" });
  useEffect(() =&gt; { load().then(setData); }, []);
  return data;
}
// Now dashboards.js, reports.js, and export.js can all delete their ?? guards.
// Future consumers get a consistent shape by default.</code></pre>

    <p><strong>Example: an unhandled promise rejection with a misleading trace</strong></p>
<pre class="language-javascript"><code class="language-javascript">// Console shows:
// Uncaught (in promise) TypeError: Failed to fetch
//   at loadUser (api.js:12)

// The reported line (api.js:12):
return fetch(url).then(r =&gt; r.json());

// The temptation: add try/catch inside loadUser.
// But loadUser has no idea what to do if the fetch fails.
// The real cause: whoever CALLED loadUser without handling the promise.

// Search for callers of loadUser:
// - dashboard.js: does &#96;const user = await loadUser(id);&#96; in a try/catch — good.
// - navbar.js: does &#96;loadUser(id).then(setUser);&#96; — no .catch. this is the cause.

// Root-cause fix in navbar.js:
loadUser(id)
  .then(setUser)
  .catch(err =&gt; {
    console.error("failed to load user for navbar:", err);
    setUser({ name: "Guest" });
  });
// The unhandled rejection is gone at its actual source.</code></pre>

    <p><strong>Example: silent wrong output from symptom-patched code</strong></p>
<pre class="language-javascript"><code class="language-javascript">// Six months ago: crash at cart.total.
// The "fix" applied:
document.querySelector(".total").textContent = "$" + (cart?.total ?? 0);

// Today: users report seeing "$0" when their cart is clearly not empty.
// The old ?? 0 "fix" is hiding a bug where cart itself is being reset in some code path.

// Root-cause investigation reveals: an event handler was calling setCart(null) accidentally.
// The bug wasn't fixed — it was masked. Now the mask is causing wrong output instead of a crash.

// Root-cause fix: don't allow setCart(null); the event handler was buggy.
// After the fix, remove the ?? 0 — it's no longer necessary.
// Errors are back to being visible if they ever happen again.</code></pre>

    <p><strong>Example: parse error that's actually an auth error</strong></p>
<pre class="language-javascript"><code class="language-javascript">// Console:
// SyntaxError: Unexpected token &lt; in JSON at position 0
//   at JSON.parse
//   at api.js:34

// The reported line:
const data = JSON.parse(await res.text());

// Wrong take: "JSON.parse is broken. add try/catch."
// Right take: the response BODY wasn't JSON. what was it?

// Investigation: log the response body.
const body = await res.text();
console.log("body:", body);
const data = JSON.parse(body);

// output: body: &lt;!DOCTYPE html&gt;&lt;html&gt;...Login Required...&lt;/html&gt;
// the server returned an HTML login page because the session expired.
// the "parse error" was a symptom of a REDIRECT to a login page.

// Root-cause fix: check res.ok or res.status before parsing.
if (!res.ok) {
  if (res.status === 401) redirectToLogin();
  else throw new Error("api call failed: " + res.status);
}
const data = await res.json();
// now the code handles auth failures explicitly instead of crashing on non-JSON bodies.</code></pre>
  `,

  /* 3.2 Connects to */
  'debug-2-8-3-2': `
    <ul>
      <li><strong>Stack traces</strong> → the map from symptom to cause; read them frame by frame</li>
      <li><strong>Reading error messages</strong> → the message tells you SYMPTOM, not necessarily CAUSE</li>
      <li><strong>Line numbers</strong> → point at the symptom; the cause is often many lines earlier</li>
      <li><strong>Type errors</strong> → almost always symptom-vs-cause; wrong values come from somewhere</li>
      <li><strong>Logic errors</strong> → often the CAUSE of a type error's symptom</li>
      <li><strong>Optional chaining (<code>?.</code>)</strong> → a tool that can be defensive OR symptom-patching, depending on use</li>
      <li><strong>Nullish coalescing (<code>??</code>)</strong> → same double-edged sword as <code>?.</code></li>
      <li><strong>Bracketing (before/after logs)</strong> → the technique for tracing wrong values upstream</li>
      <li><strong>Async errors</strong> → especially prone to symptom-vs-cause because of the time gap</li>
      <li><strong>Root-cause analysis</strong> → the broader mindset that this lesson introduces</li>
      <li><strong>Whack-a-mole debugging</strong> → the anti-pattern of fixing symptoms one at a time</li>
      <li><strong>Defensive coding</strong> → done well, it's cause-fixing; done badly, it's symptom-hiding</li>
    </ul>
  `,

  /* 3.3 See also */
  'debug-2-8-3-3': `
    <ul>
      <li>Stack trace</li>
      <li>Error message</li>
      <li>Line number</li>
      <li>First error vs later errors</li>
      <li>Type errors</li>
      <li>Logic errors</li>
      <li>Optional chaining</li>
      <li>Bracketing bugs</li>
      <li>Async debugging</li>
      <li>Root-cause analysis</li>
      <li>Defensive coding</li>
    </ul>
  `,
  });