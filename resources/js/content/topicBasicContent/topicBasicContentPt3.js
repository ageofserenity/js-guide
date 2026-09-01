   Object.assign(CONTENT, {



      /* ==========================================================
     SECTION 3: MAIN TOPIC GUIDES / LESSON CONTENT
     COVERS THE BASIC LESSONS 3.3 - 3.4
     ========================================================== */     
     
     /* ==========================================================
     LESSON 3.3 STRINGS
     ========================================================== */

  /* ===== Sub-lesson: 3.3.1 Strings → what strings are =====
     Path: topics-2-0-{chunkIndex}-{pieceIndex}
  */

  /* --- Chunk 0: What & How --- */

  /* 0.0 What it is */
  'topics-2-0-0-0': `
    <p>A string is text in JavaScript.</p>
    <p>Strings are used for words, sentences, names, messages, labels, form input, URLs, CSS class names, and anything else that is text-based.</p>
  `,

  /* 0.1 Syntax */
  'topics-2-0-0-1': `
<pre class="language-javascript"><code class="language-javascript">"hello" // double quotes
'hello' // single quotes
\`hello\` // backticks / template literal
</code></pre>
    <p>All three create strings, but they are not always used the same way.</p>
  `,

  /* 0.2 Syntax Details That Matter */
  'topics-2-0-0-3': `
    <p>Double quotes:</p>
<pre class="language-javascript"><code class="language-javascript">const sentence = "I'm learning JavaScript";
// double quotes are useful when the text has an apostrophe

const broken = 'I'm learning JavaScript';
// wrong: the apostrophe inside I'm ends the string early
</code></pre>

    <p>Single quotes:</p>
<pre class="language-javascript"><code class="language-javascript">const quote = 'She said "hello"';
// single quotes are useful when the text contains double quotes

const broken = "She said "hello"";
// wrong: the inner double quotes confuse JavaScript
</code></pre>

    <p>Backticks:</p>
<pre class="language-javascript"><code class="language-javascript">const name = "Os";

const message = \`Hello, \${name}\`;
// backticks allow \${} to insert the value of name
// result: "Hello, Os"
</code></pre>

    <p><code>\${}</code> interpolation:</p>
<pre class="language-javascript"><code class="language-javascript">const name = "Os";

\`Hello, \${name}\`  // correct: inserts the value stored in name
"Hello, \${name}"  // wrong: double quotes treat \${name} as plain text
'Hello, \${name}'  // wrong: single quotes treat \${name} as plain text
</code></pre>
    <p><code>\${}</code> only works inside backticks.</p>
  `,

  /* 0.3 Anatomy / Breakdown */
  'topics-2-0-0-2': `
<pre class="language-javascript"><code class="language-javascript">const message = "Hello world";

// const         → creates a variable that should not be reassigned
// message       → the variable name
// =             → assigns a value
// "Hello world" → the string value
// ;             → ends the statement
</code></pre>
  `,

  /* --- Chunk 1: Why & When --- */

  /* 1.0 What problem it solves */
  'topics-2-0-1-0': `
    <p>JavaScript needs a way to handle text. Without strings, there'd be no way to store, display, compare, or change words.</p>
  `,

  /* 1.1 Why use it */
  'topics-2-0-1-1': `
    <p>Use strings whenever the data is text.</p>
<pre class="language-javascript"><code class="language-javascript">const username = "Os";                    // text
const email = "os@example.com";           // text
const buttonText = "Submit";              // text
const errorMessage = "Email is required"; // text
</code></pre>
    <p>Strings let JavaScript store text, compare text, combine text, and display text on the page.</p>
  `,

  /* 1.2 Where you use it */
  'topics-2-0-1-2': `
    <p>Strings show up anywhere there's text — names, emails, messages, button text, form input, URLs, class names, error messages, search terms, product titles.</p>
<pre class="language-javascript"><code class="language-javascript">heading.textContent = "Welcome back"; // DOM text

const searchTerm = input.value; // form input text

card.classList.add("active"); // CSS class name as a string

email.includes("@"); // checking if text contains something
</code></pre>
  `,

  /* 1.3 Plain English explanation */
  'topics-2-0-1-3': `
    <p>A string is text wrapped in quotes so JavaScript knows: <em>"treat this as text, not as code."</em></p>
    <p>That's why these are different:</p>
<pre class="language-javascript"><code class="language-javascript">const name = "Os";

console.log(name);    // "Os" because name is a variable
console.log("name");  // "name" because it is literal text
</code></pre>
  `,

  /* 1.4 Mental model */
  'topics-2-0-1-4': `
    <p>A string is a row of characters.</p>
<pre class="language-javascript"><code class="language-javascript">const word = "cat";

// c → index 0
// a → index 1
// t → index 2
</code></pre>
    <p>So:</p>
<pre class="language-javascript"><code class="language-javascript">word[0]; // "c" because indexes start at 0
word[1]; // "a"
word[2]; // "t"
word[3]; // undefined because there is no character at index 3
</code></pre>
  `,

  /* 1.5 Step-by-step walkthrough */
  'topics-2-0-1-5': `
<pre class="language-javascript"><code class="language-javascript">const name = "Os";
const message = \`Hello, \${name}\`;
console.log(message);

// JavaScript is thinking:
// Create a variable called name.
// Store the string "Os".
// Create a variable called message.
// Use backticks to build a template literal.
// Find \${name}.
// Replace it with the value "Os".
// Log "Hello, Os".
</code></pre>
  `,

  /* --- Chunk 2: The Click --- */

  /* 2.0 Debugging clue */
  'topics-2-0-2-0': `
    <p>If text is not in quotes, JavaScript thinks it's a variable.</p>
<pre class="language-javascript"><code class="language-javascript">const name = Os;
// wrong: JavaScript looks for a variable named Os
// if Os does not exist, this causes an error

const name = "Os";
// right: "Os" is text, so it must be in quotes
</code></pre>
    <p>Another clue:</p>
<pre class="language-javascript"><code class="language-javascript">const name = "Os";

console.log("Hello, \${name}");
// output: Hello, \${name}
// problem: double quotes do not run interpolation

console.log(\`Hello, \${name}\`);
// output: Hello, Os
// fixed: backticks allow \${}
</code></pre>
  `,

  /* 2.1 The part that makes it click */
  'topics-2-0-2-1': `
    <p>Quotes mean "this is text." No quotes means JavaScript thinks it's code — a variable, a number, a boolean, a keyword, or something else.</p>
    <p><code>\${}</code> only works inside backticks.</p>
  `,

  /* 2.2 Common confusions */
  'topics-2-0-2-2': `
    <p><strong>Confusion: string vs variable</strong></p>
<pre class="language-javascript"><code class="language-javascript">const name = "Os";

console.log(name);    // "Os" because name is a variable
console.log("name");  // "name" because it is text
</code></pre>

    <p><strong>Confusion: string number vs real number</strong></p>
    <p>They look similar, but they behave differently.</p>
<pre class="language-javascript"><code class="language-javascript">"25"  // string
25    // number

"25" + 5;  // "255" because one value is a string
25 + 5;    // 30 because both values are numbers
</code></pre>

    <p><strong>Confusion: .length counts characters, not words</strong></p>
<pre class="language-javascript"><code class="language-javascript">const word = "hello";
word.length; // 5 because there are 5 characters

const sentence = "hello world";
sentence.length; // 11 because the space counts too
</code></pre>
  `,

  /* 2.3 Common mistakes */
  'topics-2-0-2-3': `
<pre class="language-javascript"><code class="language-javascript">const name = Os;
// wrong: forgot quotes around text
</code></pre>
<pre class="language-javascript"><code class="language-javascript">const message = "Hello, \${name}";
// wrong: used double quotes instead of backticks
</code></pre>
<pre class="language-javascript"><code class="language-javascript">const quote = "She said "hello"";
// wrong: quote conflict
</code></pre>
<pre class="language-javascript"><code class="language-javascript">const word = "cat";
word[3]; // undefined because indexes start at 0
</code></pre>
  `,

  /* --- Chunk 3: In Practice --- */

  /* 3.0 Tiny examples */
  'topics-2-0-3-0': `
<pre class="language-javascript"><code class="language-javascript">const city = "Santa Ana"; // stores a string

city.length;          // 9 because the space counts as a character
city.toUpperCase();   // "SANTA ANA"
city.includes("Ana"); // true
city[0];              // "S"
</code></pre>
<pre class="language-javascript"><code class="language-javascript">const firstName = "Os";
const role = "Developer";

const intro = \`\${firstName} is a \${role}\`;
// result: "Os is a Developer"
</code></pre>
  `,

  /* 3.1 Real website uses */
  'topics-2-0-3-1': `
    <p><strong>Example: form error message</strong></p>
<pre class="language-javascript"><code class="language-javascript">error.textContent = "Email is required";
</code></pre>

    <p><strong>Example: button loading state</strong></p>
<pre class="language-javascript"><code class="language-javascript">button.textContent = "Loading...";
</code></pre>

    <p><strong>Example: search input field</strong></p>
<pre class="language-javascript"><code class="language-javascript">const searchTerm = searchInput.value.trim();
</code></pre>

    <p><strong>Example: CSS class name</strong></p>
<pre class="language-javascript"><code class="language-javascript">card.classList.add("active");
</code></pre>
  `,

  /* 3.2 Connects to */
  'topics-2-0-3-2': `
    <ul>
      <li><strong>Variables</strong> → strings are often stored in variables</li>
      <li><strong>Forms</strong> → input values are usually strings</li>
      <li><strong>If / Else</strong> → check what a string contains</li>
      <li><strong>Loops</strong> → loop through characters</li>
      <li><strong>DOM</strong> → change text on the page</li>
      <li><strong>String methods</strong> → <code>trim()</code>, <code>includes()</code>, <code>replace()</code>, <code>split()</code></li>
      <li><strong>Debugging</strong> → missing quotes or wrong quotes can break code</li>
    </ul>
  `,

  /* 3.3 See also */
  'topics-2-0-3-3': `
    <ul>
      <li>String Methods</li>
      <li>Template Literals</li>
      <li><code>\${}</code> interpolation</li>
      <li>Strings + Forms</li>
      <li>Strings + DOM Text</li>
      <li>If / Else + Strings</li>
      <li><code>trim()</code></li>
      <li><code>includes()</code></li>
      <li><code>replace()</code></li>
      <li><code>split()</code></li>
    </ul>
  `,

    /* ===== Sub-lesson: 3.3.2 Strings → single quotes 'hello' =====
     Path: topics-2-1-{chunkIndex}-{pieceIndex}
  */

  /* --- Chunk 0: What & How --- */

  /* 0.0 What it is */
  'topics-2-1-0-0': `
    <p>A <strong>single-quoted string</strong> is text wrapped in two straight single quotes: <code>'hello'</code>. It is one of three ways to write a string in JavaScript, alongside double quotes and backticks. All three produce the exact same value type — a string — but they differ in what you can put between the delimiters without breaking the string.</p>
    <p>Single quotes are the most common quote style in JavaScript codebases. They're visually quiet, they don't collide with HTML attribute quotes (which are conventionally double), and they carry none of the extra machinery backticks have. If your text is a plain label with no apostrophes and no need for interpolation, single quotes are usually the default.</p>
  `,

  /* 0.1 Syntax */
  'topics-2-1-0-1': `
<pre class="language-javascript"><code class="language-javascript">// The basic shape:
'hello'

// Assigned to a variable:
const greeting = 'hi there';

// Empty string — valid, length 0:
const empty = '';

// Whitespace-only string — valid, every space counts:
const spaces = '   ';

// Wrong: mismatched quote types
const s = &#39;hello&#34;;
// ← SyntaxError — opened with &#39; and closed with &#34;

// Wrong: apostrophe inside single quotes
const msg = &#39;don&#39;t&#39;;
// ← SyntaxError — the middle &#39; closes the string early</code></pre>
  `,

  /* 0.2 Anatomy / Breakdown */
  'topics-2-1-0-2': `
<pre class="language-javascript"><code class="language-javascript">const greeting = 'hello';

// const      → keyword that creates a non-reassignable variable
// greeting   → the variable name (identifier)
// =          → assignment operator; puts the value into the variable
// '          → opening delimiter — tells JS "text starts here"
// hello      → the actual characters stored in the string
// '          → closing delimiter — tells JS "text ends here"
// ;          → ends the statement

// Important: the quotes themselves are NOT part of the string.
// They are punctuation for the parser, not data.
// That is why 'hello'.length is 5, not 7.</code></pre>
  `,

  /* 0.3 Syntax Details That Matter */
  'topics-2-1-0-3': `
    <p><strong>The opening and closing quotes must match.</strong> You cannot open with <code>'</code> and close with <code>"</code> or a <code>\`</code>. JavaScript keeps scanning past the mismatched character, looking for another <code>'</code>, and reports a confusing error at whatever it eventually trips over — often several tokens later than the real problem.</p>
<pre class="language-javascript"><code class="language-javascript">const s = &#39;hello&#34;;
// wrong — opened with &#39; and closed with &#34;
// the parser keeps looking for a closing &#39; and errors on whatever follows</code></pre>

    <p><strong>Straight quotes only. Curly/smart quotes are a different character entirely.</strong> The straight <code>'</code> and the curly <code>&#8217;</code> look nearly identical but they are separate Unicode characters, and only the straight one is a valid JS string delimiter. Smart quotes are what Word, Google Docs, and Notion auto-insert, so pasting code from a document is one of the most common sources of "why won't this run" bugs.</p>
<pre class="language-javascript"><code class="language-javascript">const s = &#39;hello&#39;;      // straight quotes — works
const s = &#8216;hello&#8217;;      // curly quotes → SyntaxError</code></pre>

    <p><strong>Whitespace inside the quotes is preserved exactly.</strong> Every space, tab, and character between the two quotes is part of the string. <code>' hi '</code> is a 4-character string, not the same as <code>'hi'</code>.</p>

    <p><strong>Real line breaks are NOT allowed inside single quotes.</strong> If you press Enter in the middle of a single-quoted string, JS treats it as an unterminated string and throws a syntax error. Backticks are the only quote type that permits actual newlines in the source. For a newline inside single quotes, use the <code>\\n</code> escape sequence.</p>
<pre class="language-javascript"><code class="language-javascript">const ok = 'line one\\nline two';
// works — \\n represents a newline character inside the string

const broken = &#39;line one
line two&#39;;
// wrong — SyntaxError, actual line breaks are not allowed in single quotes</code></pre>

    <p><strong>Single quotes don't process <code>\${}</code> interpolation.</strong> If you write <code>'\${name}'</code> expecting JS to substitute the variable, it won't — you'll get the literal 7-character string <code>\${name}</code>. Interpolation is a feature exclusive to backticks.</p>
  `,

  /* --- Chunk 1: Why & When --- */

  /* 1.0 What problem it solves */
  'topics-2-1-1-0': `
    <p>JavaScript needs a way to know where text starts and where it ends. Without delimiters, JS couldn't tell the difference between the variable name <code>hello</code> and the word <code>"hello"</code> — both look like the same sequence of characters on the page. The single-quote pair is one of three delimiter systems that solves this: everything between the two quotes is text, everything outside them is code.</p>
    <p>The reason JavaScript ships with three delimiter systems (<code>'</code>, <code>"</code>, <code>\`</code>) rather than just one is practical. Text often contains punctuation that could conflict with its own delimiter — apostrophes, double quotes, template placeholders. Having three interchangeable options lets you pick the wrapper that doesn't fight with your content, without needing to escape every character.</p>
  `,

  /* 1.1 Why use it */
  'topics-2-1-1-1': `
    <p>Use single quotes when your text has no apostrophes and no need for interpolation or multiline. That covers the vast majority of strings you'll ever write — CSS class names, event names, object keys, comparison values, config flags, import paths, error codes. Anywhere the string is a short mechanical label rather than a human-facing sentence, single quotes are usually the right call.</p>
    <p>The advantage is minimal visual noise and predictable behavior. Single quotes don't process any special syntax except for escape sequences like <code>\\n</code> and <code>\\'</code>. What you see between the quotes is exactly what ends up in the string — no template machinery, no substitution rules to remember, no chance of accidentally triggering something.</p>
    <p>Many popular style guides — Airbnb, StandardJS, Prettier's default — recommend single quotes for exactly these reasons. When you don't need the extra powers of backticks or the apostrophe-tolerance of double quotes, single quotes are the least surprising option, and the one your teammates will most often expect to see.</p>
  `,

  /* 1.2 Where you use it */
  'topics-2-1-1-2': `
<pre class="language-javascript"><code class="language-javascript">// CSS class names — text with no apostrophes, no interpolation needed
button.classList.add('active');
card.classList.remove('hidden');

// Object keys and lookup values
const status = 'pending';
if (user.role === 'admin') { showAdminPanel(); }

// Event names — always short strings, always without apostrophes
button.addEventListener('click', handler);
input.addEventListener('change', validate);

// Import paths
import { formatDate } from './utils';

// Attribute selectors — outer single quotes so inner " doesn't conflict
document.querySelector('[data-id="42"]');

// Short config values
const config = { mode: 'production', target: 'es2020' };

// Anywhere the text is a mechanical label, key, or identifier rather than
// a sentence meant for a human to read. Sentences with apostrophes usually
// go in double quotes or backticks instead.</code></pre>
  `,

  /* 1.3 Plain English explanation */
  'topics-2-1-1-3': `
    <p>Imagine you're writing a shopping list and you want to mark clearly where each item starts and ends. You decide to put every item between two matching pins. When your friend reads the list, they know: everything between the pins is one item — treat it as a whole, don't split it up, don't ignore the spaces in the middle.</p>
    <p>Single quotes are those pins. When JavaScript reads <code>'hello world'</code>, it doesn't see two words — it sees one string with a space in the middle, because the pins told it "this is all one item." When it hits the second pin, it knows the item is complete and moves on to whatever comes next in the code.</p>
    <p>The reason it matters <em>which</em> pin you use is that if your item contains something shaped like a pin, your friend might mistake it for the "end of item" marker. Single-quote pins get confused by apostrophes. Double-quote pins get confused by other double quotes. That's why you have three styles to pick from — choose the pin that isn't already inside your text.</p>
  `,

  /* 1.4 Mental model */
  'topics-2-1-1-4': `
    <p>Picture the JavaScript parser as a scanner reading your code left to right, one character at a time. When it hits a single quote, it flips a switch: <em>"everything I see from now on is text — I'm going to grab it verbatim."</em> It keeps grabbing characters until it hits another single quote, at which point the switch flips back and it returns to reading code.</p>
    <p>This is why the parser is so unforgiving about the <em>second</em> quote. It's not looking for "a quote somewhere later that makes semantic sense" — it's looking for the very next <code>'</code>, whatever that is. If you write <code>'don&#39;t'</code>, the scanner opens the string at the first <code>'</code>, grabs <code>don</code>, then hits the <code>'</code> in <code>don&#39;t</code> and thinks: "great, the text ended." Now it's back in code-reading mode, staring at <code>t'</code>, which is nonsense, and it errors out.</p>
    <p>The scanner has no understanding of English. It doesn't know <code>don&#39;t</code> is a word with an apostrophe. It just sees quote–text–quote and stops. Once you internalize that, you'll instinctively reach for double quotes or backticks the moment your text contains a <code>'</code>, without having to think about it.</p>
  `,

  /* 1.5 Step-by-step walkthrough */
  'topics-2-1-1-5': `
<pre class="language-javascript"><code class="language-javascript">// Scenario: you are building a form and need to store a status label.
// You write:
const status = 'pending';

// What JS does when it reads that line:

// Step 1: JS sees 'const'. That is a keyword — a declaration is starting.

// Step 2: JS sees 'status'. That is a valid identifier — the variable name.

// Step 3: JS sees '='. That is the assignment operator — a value is coming next.

// Step 4: JS sees the opening &#39;. That is a string delimiter — text is starting.
//         The parser switches to "capture text" mode.

// Step 5: JS captures characters one at a time: p, e, n, d, i, n, g.
//         None of them are the closing &#39;, so all seven become part of the string.

// Step 6: JS sees the closing &#39; again. That is the closing delimiter — text is ending.
//         The parser switches back to "read code" mode.
//         The captured string is "pending" — 7 characters, no quotes.

// Step 7: JS assigns that string to the variable 'status'.

// Step 8: JS sees ';'. Statement complete.

// From this point on, wherever 'status' appears in your code, JS uses the
// value "pending" — the quotes are gone, they were only there to help the
// parser figure out where the text began and ended.</code></pre>
  `,

  /* --- Chunk 2: The Click --- */

  /* 2.0 Debugging clue */
  'topics-2-1-2-0': `
    <p>If your file suddenly stops working after you edited a string, and the console shows <code>Unexpected token</code>, <code>Invalid or unexpected token</code>, or <code>Unexpected identifier</code>, the first thing to check is whether you accidentally put an apostrophe inside a single-quoted string.</p>
    <p><strong>Common trigger:</strong> <code>const message = 'Don&#39;t forget';</code> — the <code>'</code> in "Don&#39;t" closes the string early. The parser then sees <code>t forget';</code> and has no idea what to do with it. The error message will point somewhere inside <code>t forget</code>, not at the apostrophe itself, because that's where the confusion became unrecoverable.</p>
    <p><strong>Second clue:</strong> the error lands on a line that looks completely fine. This is the classic "the parser reports where it gave up, not where the bug is" pattern. If the reported location doesn't make sense, look at the string on the line <em>above</em> it.</p>
    <p><strong>Third clue:</strong> your editor's syntax highlighting shifts abruptly at a certain character and the rest of the file goes a different color. That's your editor telling you the string never closed properly and everything after it is being parsed inside a string that will never end.</p>
  `,

  /* 2.1 The part that makes it click */
  'topics-2-1-2-1': `
    <p>Single quotes have no magic. They don't process interpolation, they don't allow real line breaks, they don't do anything special. They're the simplest, most literal wrapper — whatever you put between the two quotes is exactly what you get, character for character.</p>
    <p>Once you internalize that, two things become obvious. First, single quotes are the safest choice when you don't need anything fancy — nothing can accidentally trigger and change your string. Second, the moment you need an apostrophe, a real newline, or a variable inserted into the text, single quotes are the wrong tool and you should reach for double quotes or backticks. Not because single quotes are broken, but because you're asking them to do a job they weren't designed for.</p>
  `,

  /* 2.2 Common confusions */
  'topics-2-1-2-2': `
    <p><strong>Confusion: "which quote is better — single or double?"</strong></p>
    <p>Neither is better. They produce identical string values. The choice is stylistic (most codebases pick one and stick with it) or practical (pick the one that doesn't collide with the characters in your text).</p>
<pre class="language-javascript"><code class="language-javascript">const a = 'hello';
const b = "hello";
a === b;   // true — same string, same value</code></pre>

    <p><strong>Confusion: "single quotes don't do <code>\${}</code> because they're old"</strong></p>
    <p>They don't do <code>\${}</code> because interpolation is a feature exclusive to backticks. Double quotes don't do <code>\${}</code> either. This isn't a limitation of single quotes; it's a design of the <code>\`</code> syntax.</p>
<pre class="language-javascript"><code class="language-javascript">'Hello, \${name}';   // literal — no substitution
"Hello, \${name}";   // literal — no substitution
\`Hello, \${name}\`;   // interpolated — substitutes the value of name</code></pre>

    <p><strong>Confusion: "escape sequences don't work inside single quotes"</strong></p>
    <p>They do. <code>\\n</code>, <code>\\t</code>, <code>\\\\</code>, and <code>\\'</code> all work inside single quotes the same way they work inside double quotes. The only thing single quotes don't process is <code>\${}</code> interpolation.</p>
<pre class="language-javascript"><code class="language-javascript">const line = 'first\\nsecond';
console.log(line);
// Output:
// first
// second</code></pre>
  `,

  /* 2.3 Common mistakes */
  'topics-2-1-2-3': `
<pre class="language-javascript"><code class="language-javascript">// Apostrophe inside single quotes — the classic
const msg = &#39;Don&#39;t forget&#39;;
// wrong: the middle &#39; closes the string
// fix: use " " → "Don't forget"
// fix: use \` \` → \`Don't forget\`
// fix: escape it → 'Don\\'t forget'</code></pre>

<pre class="language-javascript"><code class="language-javascript">// Curly/smart quotes pasted from a word processor
const s = &#8216;hello&#8217;;
// wrong: those are &#8216; and &#8217;, not &#39; and &#39;
// fix: retype the quotes directly in your editor</code></pre>

<pre class="language-javascript"><code class="language-javascript">// Mismatched quote types
const s = &#39;hello&#34;;
// wrong: opened with &#39;, closed with &#34;
// fix: pick one and be consistent → 'hello' or "hello"</code></pre>

<pre class="language-javascript"><code class="language-javascript">// Trying to interpolate inside single quotes
const name = 'Os';
const greeting = 'Hello, \${name}';
console.log(greeting);   // "Hello, \${name}" — literal, no substitution
// fix: use \` \` → \`Hello, \${name}\`</code></pre>

<pre class="language-javascript"><code class="language-javascript">// Real line break inside single quotes
const paragraph = &#39;first line
second line&#39;;
// wrong: SyntaxError — actual newlines not allowed in single quotes
// fix: use \\n → 'first line\\nsecond line'
// fix: use \` \` → \`first line
                    second line\`</code></pre>
  `,

  /* --- Chunk 3: In Practice --- */

  /* 3.0 Tiny examples */
  'topics-2-1-3-0': `
<pre class="language-javascript"><code class="language-javascript">const status = 'active';
const emoji  = '🎉';       // single quotes hold Unicode fine
const empty  = '';          // valid — an empty string, length 0
const spaces = '   ';       // three spaces, length 3

'hello'.length;             // 5
'hello'.toUpperCase();      // 'HELLO'
'hello' + ' ' + 'world';    // 'hello world'
'hello' === "hello";        // true — quote style does not affect the value</code></pre>
  `,

  /* 3.1 Real website uses */
  'topics-2-1-3-1': `
    <p><strong>Example: toggling a CSS class</strong></p>
<pre class="language-javascript"><code class="language-javascript">button.classList.toggle('active');</code></pre>

    <p><strong>Example: matching a form value</strong></p>
<pre class="language-javascript"><code class="language-javascript">if (select.value === 'yes') { showConfirmDialog(); }</code></pre>

    <p><strong>Example: setting an ARIA attribute</strong></p>
<pre class="language-javascript"><code class="language-javascript">menu.setAttribute('aria-expanded', 'true');</code></pre>

    <p><strong>Example: fetching from a fixed endpoint</strong></p>
<pre class="language-javascript"><code class="language-javascript">fetch('/api/users').then(r =&gt; r.json());</code></pre>

    <p><strong>Example: object literal with string keys</strong></p>
<pre class="language-javascript"><code class="language-javascript">const user = { role: 'admin', plan: 'pro' };</code></pre>
  `,

  /* 3.2 Connects to */
  'topics-2-1-3-2': `
    <ul>
      <li><strong>Double quotes</strong> → same thing, different wrapper — pick whichever doesn't collide with your text</li>
      <li><strong>Backticks</strong> → what you upgrade to when you need interpolation or a multiline string</li>
      <li><strong>Escape characters</strong> → <code>\\'</code>, <code>\\\\</code>, <code>\\n</code>, <code>\\t</code> all work inside single quotes</li>
      <li><strong>String comparison</strong> → <code>user.role === 'admin'</code> uses single quotes on the literal side</li>
      <li><strong>CSS class names</strong> → almost always written in single quotes: <code>classList.add('active')</code></li>
      <li><strong>Event names</strong> → <code>'click'</code>, <code>'change'</code>, <code>'submit'</code> are strings passed to <code>addEventListener</code></li>
      <li><strong>Debugging</strong> → apostrophes inside single-quoted strings are one of the most common syntax errors you'll hit</li>
    </ul>
  `,

  /* 3.3 See also */
  'topics-2-1-3-3': `
    <ul>
      <li>Double quotes "hello"</li>
      <li>Backticks (template literals)</li>
      <li>When each quote type matters</li>
      <li>Escape characters</li>
      <li><code>\${}</code> interpolation</li>
      <li>Common string mistakes</li>
      <li>Debugging strings</li>
      <li>If / Else + Strings</li>
    </ul>
  `,

  /* ===== Sub-lesson: 3.3.3 Strings → double quotes "hello" =====
     Path: topics-2-2-{chunkIndex}-{pieceIndex}
  */

  /* --- Chunk 0: What & How --- */

  /* 0.0 What it is */
  'topics-2-2-0-0': `
    <p>A <strong>double-quoted string</strong> is text wrapped in two straight double quotes: <code>"hello"</code>. It is the second of three ways to write a string in JavaScript, functionally identical to single quotes — same value, same type, same rules — but with one practical difference: apostrophes inside the text no longer close the string early.</p>
    <p>Double quotes are the default in many other languages (Python, Java, C, C#), so if you're coming from one of those, they will feel natural. In JavaScript specifically, they're most useful when your text contains an apostrophe, when you're writing something that reads like English sentences, or when you want to stay consistent with HTML attribute conventions where double quotes are standard.</p>
  `,

  /* 0.1 Syntax */
  'topics-2-2-0-1': `
<pre class="language-javascript"><code class="language-javascript">// The basic shape:
"hello"

// Assigned to a variable:
const greeting = "hi there";

// Text containing an apostrophe — the main reason to reach for double quotes:
const msg = "Don't forget";

// Empty string — valid, length 0:
const empty = "";

// Whitespace-only string — valid, every space counts:
const spaces = "   ";

// Wrong: mismatched quote types
const s = &#34;hello&#39;;
// ← SyntaxError — opened with &#34; and closed with &#39;

// Wrong: unescaped double quote inside the string
const quote = &#34;She said &#34;hi&#34;&#34;;
// ← SyntaxError — the middle &#34; closes the string early</code></pre>
  `,

  /* 0.2 Anatomy / Breakdown */
  'topics-2-2-0-2': `
<pre class="language-javascript"><code class="language-javascript">const greeting = "hello";

// const      → keyword that creates a non-reassignable variable
// greeting   → the variable name (identifier)
// =          → assignment operator; puts the value into the variable
// "          → opening delimiter — tells JS "text starts here"
// hello      → the actual characters stored in the string
// "          → closing delimiter — tells JS "text ends here"
// ;          → ends the statement

// Same as single quotes: the delimiters themselves are NOT part of the string.
// "hello".length is 5, not 7. The quotes are punctuation for the parser only.

// The stored value is byte-for-byte identical to the single-quoted version:
"hello" === 'hello';   // true — same string, same value</code></pre>
  `,

  /* 0.3 Syntax Details That Matter */
  'topics-2-2-0-3': `
    <p><strong>Double quotes and single quotes produce the exact same value.</strong> There is no such thing as a "double-quoted string type" separate from a "single-quoted string type." Both create a plain JavaScript string. Every string method works the same on both. Comparisons treat them as equal. The choice of quote style is only about what you can put between the delimiters without breaking the string.</p>
<pre class="language-javascript"><code class="language-javascript">"hello".toUpperCase();     // "HELLO"
'hello'.toUpperCase();     // "HELLO" — identical
"hello" === 'hello';       // true
typeof "hello";            // "string"
typeof 'hello';            // "string" — same type</code></pre>

    <p><strong>Apostrophes inside double quotes are safe.</strong> This is the single biggest reason to reach for double quotes over single. Any sentence with a contraction (don't, it's, we're, I'm, you're) is easier to write in double quotes because you don't have to escape anything.</p>
<pre class="language-javascript"><code class="language-javascript">const a = "It's a beautiful day";           // works — no escaping needed
const b = 'It\\'s a beautiful day';         // works but requires escaping the '</code></pre>

    <p><strong>Double quotes inside double quotes must be escaped.</strong> Same rule as single quotes but flipped — the character that matches the delimiter is the one that causes the problem. Use <code>\\"</code> to include a literal double quote, or switch the outer wrapper to single quotes or backticks.</p>
<pre class="language-javascript"><code class="language-javascript">const a = "She said \\"hi\\"";     // works — escaped inner quotes
const b = 'She said "hi"';       // works — single quotes on the outside
const c = \`She said "hi"\`;       // works — backticks on the outside</code></pre>

    <p><strong>Straight double quotes only.</strong> Just like single quotes, curly/smart double quotes (<code>&#8220;</code> and <code>&#8221;</code>) are separate Unicode characters and will not work as string delimiters. Word processors and rich text editors love to auto-convert straight quotes to curly ones, which is why pasted code so often fails to run.</p>
<pre class="language-javascript"><code class="language-javascript">const s = &#34;hello&#34;;      // straight quotes — works
const s = &#8220;hello&#8221;;      // curly quotes → SyntaxError</code></pre>

    <p><strong>Real line breaks are NOT allowed inside double quotes.</strong> Same rule as single quotes. If you press Enter in the middle of a double-quoted string, JS treats it as unterminated. Use <code>\\n</code> for a newline character, or switch to backticks if you want the string to span multiple physical lines in your source.</p>

    <p><strong>Double quotes don't process <code>\${}</code> interpolation.</strong> Also identical to single quotes. Only backticks do interpolation. If you write <code>"Hello, \${name}"</code>, you'll get the literal string <code>Hello, \${name}</code> with no substitution.</p>
  `,

  /* --- Chunk 1: Why & When --- */

  /* 1.0 What problem it solves */
  'topics-2-2-1-0': `
    <p>Single quotes have one weakness: they collide with apostrophes. Any English sentence with a contraction becomes annoying to write, because you either have to escape every apostrophe with a backslash or reword the sentence to avoid contractions. Double quotes solve this by using a delimiter that almost never appears in ordinary human text.</p>
    <p>The reason JavaScript ships with both is that different jobs favor different wrappers. Short mechanical labels (CSS class names, event names, config keys) rarely contain apostrophes or double quotes, so single quotes work fine. Human-facing sentences and messages often contain apostrophes, so double quotes are the more comfortable choice. Neither is more "correct" — they're two tools for two overlapping situations.</p>
  `,

  /* 1.1 Why use it */
  'topics-2-2-1-1': `
    <p>Use double quotes when your text contains an apostrophe, when it reads like an English sentence, or when your project's style guide happens to prefer them. Error messages, form labels, alert text, user-facing copy, HTML attribute values embedded in strings — these are all common double-quote territory because they're the kinds of text that most often contain a <code>'</code>.</p>
    <p>Double quotes also match the convention in HTML attributes (<code>&lt;input type="text"&gt;</code>), which makes life easier when you're building strings of HTML in JavaScript. Wrapping HTML fragments in single quotes lets you keep the attribute quotes as double quotes without escaping anything, but if your project inverts that (wraps in double quotes), you'll need to escape or switch to backticks.</p>
    <p>Some style guides — notably Google's JavaScript style guide and the C-family tradition many developers bring from other languages — recommend double quotes as the default. If you're joining a codebase that already uses double quotes everywhere, match that convention. Consistency inside a single codebase matters more than which style is "objectively better," because neither one is.</p>
  `,

  /* 1.2 Where you use it */
  'topics-2-2-1-2': `
<pre class="language-javascript"><code class="language-javascript">// Human-facing sentences with apostrophes — the sweet spot for double quotes
const errorMessage = "Please enter your email — it's required.";
const alertText    = "You've reached the limit. Don't worry, nothing is lost.";
const emptyState   = "You haven't added any items yet.";

// Error messages and validation copy
const invalid = "That doesn't look like a valid phone number.";

// Text templates that will be shown to users
button.textContent = "You're all set — click to continue.";

// HTML attribute values embedded in strings
element.innerHTML = "&lt;input type='text' placeholder='Enter name'&gt;";
// (single quotes on the inside so the outer double quotes don't collide)

// Anywhere you have inline HTML with attributes — matches the HTML convention
const template = "&lt;div class='card'&gt;Hello&lt;/div&gt;";

// Anytime you're switching from a language that defaults to double quotes
// (Python, Java, C#) and just want your JS to feel familiar
const name = "Os";
const role = "developer";</code></pre>
  `,

  /* 1.3 Plain English explanation */
  'topics-2-2-1-3': `
    <p>Think of single quotes and double quotes as two different flavors of bookend for holding your text. Both do the same job — mark where text begins and where it ends — but each flavor gets confused when it sees a copy of itself inside the text. Single-quote bookends can't handle apostrophes without help. Double-quote bookends can't handle inch marks or inline HTML attribute quotes without help. So you pick the flavor that isn't already inside your text, and the bookends stay out of your way.</p>
    <p>For most sentences you'd write in English, apostrophes are far more common than double quotes. "Don't," "it's," "you're," "we've" — every contraction is an apostrophe. Actual double-quote characters, meanwhile, almost never appear in ordinary sentences unless you're quoting someone. That imbalance is the whole reason double quotes exist as an option: they let you write natural English text without the constant paperwork of escaping apostrophes.</p>
  `,

  /* 1.4 Mental model */
  'topics-2-2-1-4': `
    <p>Both quote styles behave identically once the string is created. The difference lives entirely at the moment the parser reads your file. When JS sees an opening <code>"</code>, it flips into "capture text" mode and reads characters until it hits the very next unescaped <code>"</code>. Apostrophes come and go without triggering anything — the parser isn't looking for them. Only another double quote can end the string.</p>
    <p>This makes the mental model simple: <em>whichever character you opened with is the character you're allergic to.</em> Opened with <code>'</code>? Watch out for apostrophes. Opened with <code>"</code>? Watch out for inch marks and inline quoted attributes. The other quote type is now free content — you can pack as many of them into the string as you want, no escaping required.</p>
    <p>Once the string is captured and stored, the choice of wrapper is forgotten. There is no memory in the runtime of whether you used <code>'</code> or <code>"</code> — it's the same value either way. So the quote choice is a source-code convenience, not a runtime distinction. It only matters while you're typing.</p>
  `,

  /* 1.5 Step-by-step walkthrough */
  'topics-2-2-1-5': `
<pre class="language-javascript"><code class="language-javascript">// Scenario: you need to store a user-facing error message that contains
// an apostrophe. You reach for double quotes so the apostrophe stays literal.

const errorMessage = "It's required.";

// What JS does when it reads that line:

// Step 1: JS sees 'const'. A declaration is starting.

// Step 2: JS sees 'errorMessage'. Valid identifier — the variable name.

// Step 3: JS sees '='. Assignment — a value is coming next.

// Step 4: JS sees the opening &#34;. String delimiter — text is starting.
//         The parser flips into "capture text" mode, looking specifically
//         for a matching closing &#34;.

// Step 5: JS captures characters one at a time:
//         I, t, &#39;, s, (space), r, e, q, u, i, r, e, d, .
//         Notice: the &#39; in "It&#39;s" does NOT end the string, because
//         the parser is only watching for &#34;, not &#39;.
//         The apostrophe is just another character to be captured.

// Step 6: JS sees the closing &#34;. Text is ending.
//         Parser flips back to "read code" mode.
//         The captured string is "It's required." — 15 characters.

// Step 7: JS assigns the string to 'errorMessage'.

// Step 8: JS sees ';'. Statement complete.

// The apostrophe was carried through untouched. That is the whole
// convenience of double quotes: they ignore the character that would have
// broken a single-quoted version of the same string.</code></pre>
  `,

  /* --- Chunk 2: The Click --- */

  /* 2.0 Debugging clue */
  'topics-2-2-2-0': `
    <p>If a double-quoted string fails to run, the culprit is almost always an unescaped double quote inside the text. This most commonly happens when you're building a string of HTML that contains attribute values, and you use double quotes on both the outer string and the inner attributes.</p>
    <p><strong>Common trigger:</strong> <code>element.innerHTML = "&lt;div class="card"&gt;";</code> — the <code>"</code> before <code>card</code> closes the string, leaving JS staring at <code>card"&gt;"</code>, which it can't parse. The fix is to swap the inner attribute quotes to single quotes (<code>"&lt;div class='card'&gt;"</code>), swap the outer wrapper to backticks, or escape the inner quotes with <code>\\"</code>.</p>
    <p><strong>Second clue:</strong> the console reports <code>Unexpected identifier</code> or <code>Unexpected token</code> on a line that contains a mix of nested quotes. When you see a syntax error and the line has quotes-inside-quotes of any kind, that's your first suspect.</p>
    <p><strong>Third clue:</strong> your editor's syntax highlighting turns half the line the "string color" and the other half the "code color," or the coloring gets stuck on one color for the rest of the file. That's the editor visualizing exactly where the string terminated unexpectedly. The color change is often faster to spot than reading the error message.</p>
  `,

  /* 2.1 The part that makes it click */
  'topics-2-2-2-1': `
    <p>The wrapper you choose determines which character becomes "dangerous" inside your text. That's the entire distinction between single and double quotes. Everything else about them is identical. Once you internalize that, the choice of wrapper stops feeling like a style question and starts feeling like a mechanical one: <em>look at the text, see what quote-like characters are already in it, then pick the wrapper that isn't one of them.</em></p>
    <p>This also explains why backticks exist. Backticks use a character (<code>&#96;</code>) that almost never appears in ordinary text at all — not in sentences, not in code, not in HTML. So they're the wrapper you reach for when both apostrophes and double quotes are in your text, or when you need features the other two don't have.</p>
  `,

  /* 2.2 Common confusions */
  'topics-2-2-2-2': `
    <p><strong>Confusion: "double quotes make different strings than single quotes"</strong></p>
    <p>They don't. Comparison is exact-value; the wrapper is not remembered.</p>
<pre class="language-javascript"><code class="language-javascript">"hello" === 'hello';    // true — identical value
["hello"].includes('hello');   // true
{ name: "Os" }.name === 'Os';  // true</code></pre>

    <p><strong>Confusion: "double quotes are for user-facing text, single quotes are for code strings"</strong></p>
    <p>This is a style convention some teams follow, not a language rule. JavaScript doesn't care. Both are valid strings in any context. The rule only matters if your codebase enforces it — otherwise, pick based on the content of the string.</p>

    <p><strong>Confusion: "double quotes let you use <code>\${}</code>"</strong></p>
    <p>They don't. Only backticks process <code>\${}</code>. This is a common assumption for developers coming from other languages where double quotes are the interpolating string type (Ruby, PHP, Perl). In JavaScript, both <code>'</code> and <code>"</code> are equally non-interpolating.</p>
<pre class="language-javascript"><code class="language-javascript">const name = "Os";

"Hello, \${name}";    // literal — no substitution → "Hello, \${name}"
'Hello, \${name}';    // literal — no substitution → "Hello, \${name}"
\`Hello, \${name}\`;    // interpolated → "Hello, Os"</code></pre>

    <p><strong>Confusion: "escape sequences behave differently in double quotes"</strong></p>
    <p>They don't. <code>\\n</code>, <code>\\t</code>, <code>\\\\</code>, <code>\\"</code>, and <code>\\'</code> all work the same in both. The only quote-specific escapes are <code>\\'</code> (needed in single quotes, harmless in double quotes) and <code>\\"</code> (needed in double quotes, harmless in single quotes).</p>
  `,

  /* 2.3 Common mistakes */
  'topics-2-2-2-3': `
<pre class="language-javascript"><code class="language-javascript">// Unescaped double quote inside a double-quoted string
const quote = &#34;She said &#34;hi&#34;&#34;;
// wrong: the middle &#34; closes the string early
// fix: use single quotes  → 'She said "hi"'
// fix: use backticks      → \`She said "hi"\`
// fix: escape the quotes  → "She said \\"hi\\""</code></pre>

<pre class="language-javascript"><code class="language-javascript">// Nested HTML attributes with the same quote type
element.innerHTML = &#34;&lt;div class=&#34;card&#34;&gt;Hello&lt;/div&gt;&#34;;
// wrong: the first inner &#34; closes the string early
// fix: use single quotes for inner attributes
element.innerHTML = "&lt;div class='card'&gt;Hello&lt;/div&gt;";</code></pre>

<pre class="language-javascript"><code class="language-javascript">// Curly/smart double quotes pasted from a document
const s = &#8220;hello&#8221;;
// wrong: those are &#8220; and &#8221;, not &#34; and &#34;
// fix: retype the quotes directly in your editor</code></pre>

<pre class="language-javascript"><code class="language-javascript">// Mismatched quote types
const s = &#34;hello&#39;;
// wrong: opened with &#34;, closed with &#39;
// fix: use the same style on both sides → "hello" or 'hello'</code></pre>

<pre class="language-javascript"><code class="language-javascript">// Trying to interpolate inside double quotes
const name = "Os";
const greeting = "Hello, \${name}";
console.log(greeting);   // "Hello, \${name}" — literal, no substitution
// fix: use backticks → \`Hello, \${name}\`</code></pre>

<pre class="language-javascript"><code class="language-javascript">// Real line break inside double quotes
const paragraph = &#34;first line
second line&#34;;
// wrong: SyntaxError — actual newlines not allowed in double quotes
// fix: use \\n         → "first line\\nsecond line"
// fix: use backticks  → \`first line
                         second line\`</code></pre>
  `,

  /* --- Chunk 3: In Practice --- */

  /* 3.0 Tiny examples */
  'topics-2-2-3-0': `
<pre class="language-javascript"><code class="language-javascript">const message = "Don't forget";       // apostrophe inside — no escaping
const inches  = "5'11\\"";              // both types inside — escape the "
const empty   = "";                    // valid — length 0
const emoji   = "🎉";                   // Unicode works fine

"hello".length;                        // 5
"hello".toUpperCase();                 // "HELLO"
"hello" + " " + "world";               // "hello world"
"hello" === 'hello';                   // true — same string, same value

typeof "hello";                        // "string"
typeof 'hello';                        // "string" — same type</code></pre>
  `,

  /* 3.1 Real website uses */
  'topics-2-2-3-1': `
    <p><strong>Example: user-facing error message with an apostrophe</strong></p>
<pre class="language-javascript"><code class="language-javascript">error.textContent = "That email isn't valid.";</code></pre>

    <p><strong>Example: empty-state copy</strong></p>
<pre class="language-javascript"><code class="language-javascript">emptyState.textContent = "You haven't added any items yet.";</code></pre>

    <p><strong>Example: confirmation dialog</strong></p>
<pre class="language-javascript"><code class="language-javascript">const confirmed = confirm("Are you sure you want to delete this? It can't be undone.");</code></pre>

    <p><strong>Example: building HTML with single-quoted attributes</strong></p>
<pre class="language-javascript"><code class="language-javascript">container.innerHTML = "&lt;button class='primary'&gt;Save&lt;/button&gt;";</code></pre>

    <p><strong>Example: alert text</strong></p>
<pre class="language-javascript"><code class="language-javascript">alert("You're offline. We'll sync your changes when you reconnect.");</code></pre>
  `,

  /* 3.2 Connects to */
  'topics-2-2-3-2': `
    <ul>
      <li><strong>Single quotes</strong> → same value, different wrapper — pick whichever doesn't collide with your text</li>
      <li><strong>Backticks</strong> → the third wrapper — use when both <code>'</code> and <code>"</code> appear in your text, or when you need interpolation or multiline</li>
      <li><strong>Escape characters</strong> → <code>\\"</code>, <code>\\\\</code>, <code>\\n</code>, <code>\\t</code> all work inside double quotes</li>
      <li><strong>HTML strings</strong> → inline HTML often mixes both quote types; the outer wrapper is usually the one <em>not</em> used in the HTML attributes</li>
      <li><strong>User-facing text</strong> → error messages, alerts, empty states, button labels often contain apostrophes and read cleaner in double quotes</li>
      <li><strong>Style guides</strong> → Airbnb/StandardJS prefer single, Google prefers double — match the codebase you're in</li>
      <li><strong>Debugging</strong> → nested double quotes inside a double-quoted string is one of the most common HTML-in-JS bugs</li>
    </ul>
  `,

  /* 3.3 See also */
  'topics-2-2-3-3': `
    <ul>
      <li>Single quotes 'hello'</li>
      <li>Backticks (template literals)</li>
      <li>When each quote type matters</li>
      <li>Escape characters</li>
      <li><code>\${}</code> interpolation</li>
      <li>Common string mistakes</li>
      <li>Debugging strings</li>
      <li>Building HTML strings in JavaScript</li>
    </ul>
  `,


    /* ===== Sub-lesson: 3.3.4 Strings → backticks `hello` =====
     Path: topics-2-3-{chunkIndex}-{pieceIndex}
  */

  /* --- Chunk 0: What & How --- */

  /* 0.0 What it is */
  'topics-2-3-0-0': `
    <p>A <strong>backtick string</strong> — also called a <strong>template literal</strong> — is text wrapped in two backtick characters: <code>\`hello\`</code>. It's the third way to write a string in JavaScript, added to the language in 2015. Like single and double quotes, it produces a plain string value. Unlike them, it comes with two extra features built in: it can span multiple physical lines in your source code, and it can embed variables and expressions directly inside the text using <code>\${}</code>.</p>
    <p>The backtick character lives in the top-left corner of most keyboards, just under the Escape key, sharing a key with the tilde <code>~</code>. It's easy to confuse with a single quote at a glance, but they're different characters — the backtick slants left, the single quote is vertical. Because <code>\`</code> almost never appears in ordinary text or HTML, it's a safe delimiter that rarely collides with the content inside it.</p>
  `,

  /* 0.1 Syntax */
  'topics-2-3-0-1': `
<pre class="language-javascript"><code class="language-javascript">// The basic shape:
\`hello\`

// Assigned to a variable — works exactly like ' or ":
const greeting = \`hi there\`;

// Text with apostrophes AND double quotes — no escaping needed:
const message = \`She said "don't forget"\`;

// Interpolation — insert the value of a variable with \${}:
const name = 'Os';
const hello = \`Hello, \${name}\`;   // → "Hello, Os"

// Multiline — actual line breaks in the source are preserved:
const poem = \`roses are red
violets are blue\`;

// Wrong: mismatched quote types
const s = &#96;hello&#39;;
// ← SyntaxError — opened with &#96; and closed with &#39;

// Wrong: unescaped backtick inside a backtick string
const code = &#96;use the &#96; character&#96;;
// ← SyntaxError — the middle &#96; closes the string early</code></pre>
  `,

  /* 0.2 Anatomy / Breakdown */
  'topics-2-3-0-2': `
<pre class="language-javascript"><code class="language-javascript">const greeting = \`Hello, \${name}\`;

// const              → keyword that creates a non-reassignable variable
// greeting           → the variable name (identifier)
// =                  → assignment operator
// \`                  → opening delimiter — tells JS "template literal starts here"
// Hello,             → literal text — captured as part of the string
// \${                 → interpolation opener — tells JS "an expression starts here"
// name               → the expression — a variable to evaluate
// }                  → interpolation closer — end of expression
// \`                  → closing delimiter — tells JS "template literal ends here"
// ;                  → ends the statement

// The final stored string is "Hello, " plus the current value of name.
// If name is "Os", the string becomes "Hello, Os" — 9 characters.
// The \` and \${ } are punctuation for the parser only — they aren't in the string.</code></pre>
  `,

  /* 0.3 Syntax Details That Matter */
  'topics-2-3-0-3': `
    <p><strong>Backticks are the only quote type that supports interpolation.</strong> <code>\${}</code> only means "insert a value here" when it appears inside a backtick string. In single or double quotes, <code>\${}</code> is just literal text — four characters with no special meaning.</p>
<pre class="language-javascript"><code class="language-javascript">const name = 'Os';

\`Hello, \${name}\`;   // "Hello, Os" — interpolation works
"Hello, \${name}";   // "Hello, \${name}" — literal text, no substitution
'Hello, \${name}';   // "Hello, \${name}" — literal text, no substitution</code></pre>

    <p><strong>Real line breaks inside backticks are preserved in the string.</strong> Every physical newline in your source becomes a <code>\\n</code> character in the resulting string. This is the only quote type where pressing Enter mid-string is legal — and where the Enter actually becomes part of the value.</p>
<pre class="language-javascript"><code class="language-javascript">const poem = \`roses are red
violets are blue\`;

poem;             // "roses are red\\nviolets are blue"
poem.length;      // 30 — includes the newline character
poem.split('\\n'); // ["roses are red", "violets are blue"]</code></pre>

    <p><strong>Indentation inside a multiline backtick string is also preserved.</strong> Every space and tab between the opening <code>\`</code> and the closing <code>\`</code> is part of the string, including the indentation your editor auto-inserted. This is a very common gotcha — a "clean-looking" multiline string often has 4 or 8 spaces at the start of every line that you didn't mean to include.</p>
<pre class="language-javascript"><code class="language-javascript">function greet() {
  const message = \`Hello
    from
      Os\`;
  return message;
  // message contains:
  // "Hello\\n    from\\n      Os"
  // The leading spaces on lines 2 and 3 are part of the string.
}</code></pre>

    <p><strong>You can put any expression inside <code>\${}</code>, not just a variable.</strong> Math, function calls, ternaries, property access, method calls — anything that evaluates to a value. JS runs the expression, converts the result to a string, and drops it into the template.</p>
<pre class="language-javascript"><code class="language-javascript">const price = 20;
const qty = 3;

\`Total: \$\${price * qty}\`;                     // "Total: $60"
\`Name: \${user.name.toUpperCase()}\`;           // uses a method call
\`Status: \${isActive ? 'on' : 'off'}\`;         // uses a ternary
\`Today: \${new Date().toDateString()}\`;        // uses a Date object</code></pre>

    <p><strong>To include a literal backtick or a literal <code>\${</code> inside a backtick string, escape them with a backslash.</strong> The escapes are <code>\\\`</code> for a literal backtick and <code>\\\${</code> to prevent interpolation.</p>
<pre class="language-javascript"><code class="language-javascript">const s = \`use the \\\` character\`;   // string is: use the \` character
const s = \`price: \\\${amount}\`;      // string is: price: \${amount}</code></pre>
  `,

  /* --- Chunk 1: Why & When --- */

  /* 1.0 What problem it solves */
  'topics-2-3-1-0': `
    <p>Before backticks existed, JavaScript had two annoying problems. First, combining variables with text required verbose concatenation with <code>+</code>: <code>'Hello, ' + name + '! You have ' + count + ' messages.'</code>. Every variable had to be spliced in with quotes and pluses, which got unreadable fast and made typos easy. Second, multiline strings weren't really supported — you either concatenated multiple single-line strings with <code>+</code> or used ugly <code>\\n</code> escape sequences.</p>
    <p>Backticks solved both problems in one feature. Interpolation lets you write the text as it should read, with variables dropped in place using <code>\${}</code>. Multiline support lets you write the string across as many lines as you want and get exactly the layout you typed. Both problems become non-problems, which is why backticks quickly became the go-to string type for anything more complex than a bare label.</p>
  `,

  /* 1.1 Why use it */
  'topics-2-3-1-1': `
    <p>Use backticks when your string contains a variable, when it spans multiple lines, when it contains both <code>'</code> and <code>"</code>, or when it's a chunk of HTML being built in JavaScript. Any one of those four situations is enough reason. If none of them apply, single or double quotes are usually the simpler choice — backticks work fine for plain strings too, but they add visual noise (the backtick character stands out more than a straight quote), and many style guides recommend reserving them for the cases that actually need them.</p>
    <p>The interpolation advantage is the biggest one in practice. A line like <code>\`Welcome back, \${user.name}. You have \${count} new messages.\`</code> reads left-to-right like the sentence it produces. The concatenation equivalent — <code>'Welcome back, ' + user.name + '. You have ' + count + ' new messages.'</code> — is the same information but requires your brain to reassemble the sentence from fragments. For anything with more than one variable, backticks are almost always the better choice.</p>
    <p>The multiline advantage matters most for building HTML templates, SQL queries, formatted error messages, and any string that has a fixed shape you want to see in the source exactly as it will appear in the output. Instead of jamming everything onto one line with <code>\\n</code> escapes, you write it out visually and get exactly what you see.</p>
  `,

  /* 1.2 Where you use it */
  'topics-2-3-1-2': `
<pre class="language-javascript"><code class="language-javascript">// Interpolation with one or more variables — the most common use
const greeting = \`Welcome back, \${user.name}!\`;
const summary = \`\${count} items, \${errors.length} errors\`;

// Building HTML fragments — backticks handle the mixed quotes cleanly
const html = \`
  <div class="card">
    <h3>\${product.name}</h3>
    <p>Price: \$\${product.price}</p>
  </div>
\`;

// Formatted error messages
throw new Error(\`Invalid email: "\${input}" is missing an @ sign\`);

// SQL queries or other multiline text with embedded values
const query = \`
  SELECT id, name, email
  FROM users
  WHERE role = '\${role}'
  ORDER BY created_at DESC
\`;

// Composed URLs with query parameters
const url = \`/api/users/\${userId}/posts?limit=\${limit}\`;

// Logging with context
console.log(\`[\${timestamp}] user \${userId} logged in\`);

// Any string where you'd otherwise be using + to concatenate variables
// or \\n to fake multiline — backticks handle both natively.</code></pre>
  `,

  /* 1.3 Plain English explanation */
  'topics-2-3-1-3': `
    <p>Imagine you're filling out a form letter — the kind of pre-printed page where the greeting says "Dear ______," and you fill in the blank with the recipient's name. The letter's structure stays fixed. Only the specific blanks get filled in per recipient. That's what backticks do for strings: they let you write a template with blanks (the <code>\${}</code> placeholders), and JavaScript fills the blanks in with real values every time the template is used.</p>
    <p>The other superpower — multiline — is like the difference between writing a paragraph in a single-line text field vs. writing it in a real document. In a single-line field, you cram everything together and use special markers to fake line breaks. In a document, you just press Enter where you want the break. Backticks are the document: whatever shape you type is the shape you get.</p>
    <p>Because backticks let text keep its natural shape and let variables slot in where they belong, they're the tool you reach for whenever a string is more than a bare label — whenever it's actually trying to say something.</p>
  `,

  /* 1.4 Mental model */
  'topics-2-3-1-4': `
    <p>Think of a backtick string as a small script that runs the moment JS reads it. Everywhere the script has plain text, that text becomes part of the output. Everywhere the script has a <code>\${...}</code> block, JS pauses, runs the expression inside the braces, converts the result to a string, and splices it into the output. Once the whole script finishes, you have one final string.</p>
    <p>This is why interpolation is "live" — it uses the values that exist <em>at the moment the template runs</em>, not at some earlier time. If <code>name</code> changes between two backtick strings that both reference it, each string gets the value that was current at its own moment of execution.</p>
<pre class="language-javascript"><code class="language-javascript">let name = 'Os';
const a = \`Hello, \${name}\`;   // captures "Os" now → "Hello, Os"

name = 'Sam';
const b = \`Hello, \${name}\`;   // captures "Sam" now → "Hello, Sam"

console.log(a);   // "Hello, Os" — the string was built earlier
console.log(b);   // "Hello, Sam"</code></pre>

    <p>The template isn't stored as a template that keeps re-evaluating. The interpolation happens once, at the exact moment the line runs, and the finished string is what gets stored. This is a subtle but important distinction from templating systems in other frameworks that re-render.</p>
  `,

  /* 1.5 Step-by-step walkthrough */
  'topics-2-3-1-5': `
<pre class="language-javascript"><code class="language-javascript">// Scenario: build a personalized welcome message with a count.
const name = 'Os';
const count = 3;

const message = \`Welcome, \${name}. You have \${count} new messages.\`;

// What JS does when it reads that line:

// Step 1: JS sees 'const message ='. A variable declaration is starting,
//         value is coming next.

// Step 2: JS sees the opening &#96;. Template literal starts.
//         Parser flips into "capture template" mode.

// Step 3: JS captures the plain text "Welcome, " character by character.

// Step 4: JS sees &#36;{. That is the interpolation opener.
//         Parser flips into "evaluate expression" mode.

// Step 5: JS reads the identifier 'name'. It looks up its current value.
//         name is "Os". The expression evaluates to the string "Os".

// Step 6: JS sees }. Interpolation ends.
//         The value "Os" gets spliced into the output.
//         Output so far: "Welcome, Os"

// Step 7: JS captures the next plain text: ". You have "
//         Output so far: "Welcome, Os. You have "

// Step 8: JS sees &#36;{ again. Interpolation opener.
//         Reads the expression 'count'. Value is 3.
//         Converts the number 3 to the string "3".
//         Splices it in.
//         Output so far: "Welcome, Os. You have 3"

// Step 9: JS captures the next plain text: " new messages."
//         Output so far: "Welcome, Os. You have 3 new messages."

// Step 10: JS sees the closing &#96;. Template literal ends.
//          The final string is stored in message.

// Step 11: JS sees ;. Statement complete.

// message is now the finished string "Welcome, Os. You have 3 new messages."
// The template is gone. Only the finished string remains.</code></pre>
  `,

  /* --- Chunk 2: The Click --- */

  /* 2.0 Debugging clue */
  'topics-2-3-2-0': `
    <p>If a backtick string breaks, three specific bugs cover most cases.</p>
    <p><strong>Bug 1 — you used <code>'</code> or <code>"</code> instead of <code>\`</code> and interpolation stopped working.</strong> The string still runs (single and double quotes are valid strings), but <code>\${name}</code> shows up as literal text in the output instead of being replaced. If your log shows <code>Hello, \${name}</code> where you expected <code>Hello, Os</code>, look at the quote characters — you probably typed <code>'</code> instead of <code>\`</code>. This bug is silent — no error, just wrong output.</p>
    <p><strong>Bug 2 — a stray backtick inside the string closed it early.</strong> If you meant to include a literal backtick as content, it needs to be escaped as <code>\\\`</code>. Otherwise it terminates the template literal, and JS then tries to parse whatever came after as code, which usually errors on the first weird character.</p>
    <p><strong>Bug 3 — the variable inside <code>\${}</code> doesn't exist.</strong> Interpolation runs the expression as real code, so a typo in the variable name throws <code>ReferenceError: fooo is not defined</code>. This is a good bug — it's loud and specific, and the error message tells you exactly which name JS couldn't find.</p>
    <p><strong>Fourth clue, editor-based:</strong> most editors color the interpolated <code>\${...}</code> region differently from the surrounding text. If a <code>\${...}</code> block looks the same color as the plain text around it, or the coloring gets confused, that's a sign your outer wrapper is a single or double quote, not a backtick — because interpolation coloring only kicks in inside real template literals.</p>
  `,

  /* 2.1 The part that makes it click */
  'topics-2-3-2-1': `
    <p>Backticks aren't just "another quote style." They're the quote style with a mini programming language embedded inside it. The <code>\${...}</code> blocks are little windows where JavaScript switches from "capture text" mode back to "run code" mode, evaluates whatever's in the braces, and splices the result into the string.</p>
    <p>Once you internalize that, three things become obvious. First, anything JavaScript can evaluate can go inside <code>\${}</code> — not just variable names, but math, function calls, ternaries, whatever. Second, the result gets converted to a string automatically, so <code>\${5 + 3}</code> becomes <code>"8"</code> and <code>\${new Date()}</code> becomes the date's string form. Third, if the expression throws an error, the whole template fails — because those braces are running real code.</p>
  `,

  /* 2.2 Common confusions */
  'topics-2-3-2-2': `
    <p><strong>Confusion: "backticks make special strings that behave differently from other strings"</strong></p>
    <p>They don't. Once the template finishes evaluating, the result is a plain string, identical in every way to one made with <code>'</code> or <code>"</code>.</p>
<pre class="language-javascript"><code class="language-javascript">const name = 'Os';
const a = \`Hello, \${name}\`;
const b = 'Hello, ' + name;
const c = "Hello, Os";

a === b;              // true — same string
a === c;              // true — same string
typeof a;             // "string" — same type as any other string</code></pre>

    <p><strong>Confusion: "<code>\${}</code> inside single or double quotes will also interpolate"</strong></p>
    <p>It won't. <code>\${}</code> is a feature of the backtick syntax only. In other quote types, <code>\${}</code> is four literal characters.</p>

    <p><strong>Confusion: "the newline in a multiline backtick isn't a real newline"</strong></p>
    <p>It is. It's exactly the same character (<code>\\n</code>) as if you'd typed <code>'\\n'</code> in a single-quoted string. That's why multiline backticks split cleanly on <code>'\\n'</code> and why their <code>.length</code> counts newline characters.</p>

    <p><strong>Confusion: "backticks are slower than regular strings because they run code"</strong></p>
    <p>In practice, no. Modern JS engines optimize template literals aggressively. The performance difference vs. concatenation is negligible in every real-world case. Choose based on readability, not speed.</p>

    <p><strong>Confusion: "you have to use backticks everywhere for consistency"</strong></p>
    <p>You don't. Many style guides recommend using backticks <em>only</em> when interpolation or multiline is actually needed, and using <code>'</code> or <code>"</code> for everything else. This keeps the backtick as a visible signal: "something interesting is happening in this string." Using backticks for every bare label dilutes that signal.</p>
  `,

  /* 2.3 Common mistakes */
  'topics-2-3-2-3': `
<pre class="language-javascript"><code class="language-javascript">// Using wrong quote type — interpolation silently doesn't work
const name = 'Os';
const greeting = 'Hello, \${name}';
console.log(greeting);   // "Hello, \${name}" — no error, but wrong
// fix: use backticks → \`Hello, \${name}\`</code></pre>

<pre class="language-javascript"><code class="language-javascript">// Unescaped backtick inside a backtick string
const code = &#96;use the &#96; character&#96;;
// wrong: the middle &#96; closes the string early
// fix: escape it → \`use the \\\` character\`</code></pre>

<pre class="language-javascript"><code class="language-javascript">// Forgetting the $ before the { }
const name = 'Os';
const greeting = \`Hello, {name}\`;
console.log(greeting);   // "Hello, {name}" — { } alone doesn't interpolate
// fix: add the $ → \`Hello, \${name}\`</code></pre>

<pre class="language-javascript"><code class="language-javascript">// Referencing a variable that doesn't exist inside \${}
const greeting = \`Hello, \${naem}\`;
// wrong: ReferenceError — naem is not defined
// fix: check the spelling → \`Hello, \${name}\`</code></pre>

<pre class="language-javascript"><code class="language-javascript">// Accidentally including indentation in a multiline string
function makeMessage() {
  return \`Hello
    from Os\`;
  // returned string is "Hello\\n    from Os" — with 4 spaces before "from"
  // fix: don't indent lines you don't want indented
  return \`Hello
from Os\`;
}</code></pre>

<pre class="language-javascript"><code class="language-javascript">// Confusing backticks with single quotes visually
const bad  = &#39;hello&#39;;    // this is a single quote — no interpolation
const good = &#96;hello&#96;;    // this is a backtick — interpolation available
// fix: look at the character carefully — backticks slant, single quotes are vertical</code></pre>
  `,

  /* --- Chunk 3: In Practice --- */

  /* 3.0 Tiny examples */
  'topics-2-3-3-0': `
<pre class="language-javascript"><code class="language-javascript">const name = 'Os';
const count = 3;

// Interpolation
\`Hello, \${name}\`;                        // "Hello, Os"
\`\${count} messages\`;                     // "3 messages"
\`\${count * 2} items in cart\`;            // "6 items in cart"

// Multiline
const box = \`+-----+
| hi  |
+-----+\`;
box.length;                              // 24 including newlines

// Mixed quotes inside — no escaping needed
\`She said "don't"\`;                      // She said "don't"

// Method calls and ternaries inside \${}
\`Name: \${name.toUpperCase()}\`;           // "Name: OS"
\`Status: \${count > 0 ? 'active' : 'empty'}\`;   // "Status: active"

// Same result as any other string type — equality holds
\`hello\` === 'hello';                     // true
\`hello\` === "hello";                     // true
typeof \`hello\`;                          // "string"</code></pre>
  `,

  /* 3.1 Real website uses */
  'topics-2-3-3-1': `
    <p><strong>Example: personalized greeting</strong></p>
<pre class="language-javascript"><code class="language-javascript">welcomeBanner.textContent = \`Welcome back, \${user.firstName}!\`;</code></pre>

    <p><strong>Example: building an HTML card from data</strong></p>
<pre class="language-javascript"><code class="language-javascript">productList.innerHTML = \`
  <div class="card">
    <h3>\${product.name}</h3>
    <p class="price">\$\${product.price.toFixed(2)}</p>
    <button data-id="\${product.id}">Add to cart</button>
  </div>
\`;</code></pre>

    <p><strong>Example: dynamic error message</strong></p>
<pre class="language-javascript"><code class="language-javascript">error.textContent = \`\${field} must be at least \${min} characters (you entered \${value.length})\`;</code></pre>

    <p><strong>Example: composing an API URL</strong></p>
<pre class="language-javascript"><code class="language-javascript">const response = await fetch(\`/api/users/\${userId}/posts?page=\${page}\`);</code></pre>

    <p><strong>Example: logging with context</strong></p>
<pre class="language-javascript"><code class="language-javascript">console.log(\`[\${new Date().toISOString()}] \${event} for user \${userId}\`);</code></pre>
  `,

  /* 3.2 Connects to */
  'topics-2-3-3-2': `
    <ul>
      <li><strong>Single quotes</strong> → the simpler, non-interpolating wrapper — use for bare labels</li>
      <li><strong>Double quotes</strong> → also non-interpolating — use when text contains apostrophes</li>
      <li><strong><code>\${}</code> interpolation</strong> → the feature that makes backticks worth reaching for</li>
      <li><strong>Multiline strings</strong> → the other reason to use backticks — real newlines allowed</li>
      <li><strong>String + variable concatenation</strong> → what backticks replace; <code>+</code> is no longer the go-to</li>
      <li><strong>Escape characters</strong> → <code>\\\`</code>, <code>\\\${</code>, <code>\\n</code>, <code>\\t</code> all work inside backticks</li>
      <li><strong>Building HTML strings</strong> → backticks are the standard tool because they handle both quote types and multiline cleanly</li>
      <li><strong>Debugging</strong> → using <code>'</code> or <code>"</code> when you meant <code>\`</code> is silent and easy to miss — check quote characters when interpolation "isn't working"</li>
    </ul>
  `,

  /* 3.3 See also */
  'topics-2-3-3-3': `
    <ul>
      <li>Single quotes 'hello'</li>
      <li>Double quotes "hello"</li>
      <li>When each quote type matters</li>
      <li><code>\${}</code> interpolation</li>
      <li>Multiline strings with backticks</li>
      <li>Escape characters</li>
      <li>Common string mistakes</li>
      <li>Debugging strings</li>
      <li>Building HTML strings in JavaScript</li>
    </ul>
  `,


    /* ===== Sub-lesson: 3.3.5 Strings → when each quote type matters =====
     Path: topics-2-4-{chunkIndex}-{pieceIndex}
  */

  /* --- Chunk 0: What & How --- */

  /* 0.0 What it is */
  'topics-2-4-0-0': `
    <p>JavaScript gives you three ways to wrap a string — single quotes <code>'</code>, double quotes <code>"</code>, and backticks <code>\`</code> — and they all produce the same kind of value. This lesson is about the practical question that follows from that: <em>if they all make strings, when does the choice actually matter?</em></p>
    <p>The short answer: the choice matters whenever your text contains a character that would collide with the wrapper you picked, whenever you need interpolation or multiline (which only backticks provide), and whenever your codebase or team has a convention worth matching. Outside of those situations, the choice is aesthetic — pick one and move on. The goal here is to give you a decision process so you're not thinking about it every time.</p>
  `,

  /* 0.1 Syntax */
  'topics-2-4-0-1': `
<pre class="language-javascript"><code class="language-javascript">// All three produce identical string values.
'hello' === "hello";      // true
'hello' === \`hello\`;      // true
"hello" === \`hello\`;      // true

// The choice only shows up when the CONTENT of the string interacts
// with the WRAPPER you picked.

// Text with an apostrophe — single quotes collide, double and backticks don't
'don&#39;t';                   // SyntaxError — inner ' closes the string
"don't";                   // works
\`don't\`;                   // works

// Text with a double quote — double quotes collide, single and backticks don't
&#34;She said &#34;hi&#34;&#34;;         // SyntaxError — inner " closes the string
'She said "hi"';           // works
\`She said "hi"\`;           // works

// Text with a backtick — only backticks collide
'the &#96; character';         // works
"the &#96; character";         // works
&#96;the &#96; character&#96;;         // SyntaxError — inner &#96; closes the string

// Text that needs interpolation — only backticks work
'Hello, \${name}';          // literal — no substitution
"Hello, \${name}";          // literal — no substitution
\`Hello, \${name}\`;          // interpolated

// Text that spans multiple lines — only backticks work
\`line one
line two\`;                 // works — real newline in the string</code></pre>
  `,

  /* 0.2 Anatomy / Breakdown */
  'topics-2-4-0-2': `
<pre class="language-javascript"><code class="language-javascript">// A decision the parser doesn't care about, but you do:
const message = "It's a beautiful day";
//              ^                    ^
//              opening wrapper       closing wrapper
//
// You had three choices here. Any of them work. The one you pick
// depends on the CONTENT of the string:
//
//   'It\\'s a beautiful day'    → single quotes, apostrophe escaped
//   "It's a beautiful day"    → double quotes, no escaping needed
//   \`It's a beautiful day\`    → backticks, no escaping needed
//
// All three produce the exact same 21-character string in memory.
// The wrapper is a source-code convenience, not part of the value.

// What the parser sees:
//   1. An opening delimiter (whichever one you used)
//   2. Text until the matching closing delimiter
//   3. The finished string
//
// The parser has no opinion about which wrapper you should have used.
// It only enforces: don't put a copy of your wrapper INSIDE the string
// without escaping it, or the string ends early.</code></pre>
  `,

  /* 0.3 Syntax Details That Matter */
  'topics-2-4-0-3': `
    <p><strong>The wrapper you choose determines which character becomes "dangerous."</strong> Whatever character you opened with is now the character you cannot use as literal content without escaping. Every other quote character is free.</p>
<pre class="language-javascript"><code class="language-javascript">'Danger: '   → other ' inside the string closes it
"Danger: "   → other " inside the string closes it
\`Danger: \`   → other \` inside the string closes it

// The other two quote types become "safe" content inside your string.
'She said "hi"';           // " is safe inside ' '
"It's fine";               // ' is safe inside " "
\`Both "types" and 'work'\`;  // ' and " both safe inside \` \`</code></pre>

    <p><strong>Interpolation and multiline are features, not defaults.</strong> Only backticks give you <code>\${}</code> and real line breaks. If your string doesn't need either, backticks give you nothing extra — just visual noise. Save them for when they actually add something.</p>

    <p><strong>Escaping always works as a last resort.</strong> If you really need to keep a specific wrapper (for consistency, style guide, or any reason), you can escape the conflicting character with a backslash: <code>\\'</code>, <code>\\"</code>, <code>\\\`</code>. But escaping is uglier than just switching wrappers, so switching is usually preferred.</p>
<pre class="language-javascript"><code class="language-javascript">// Two ways to write the same string — both valid:
const a = 'It\\'s fine';   // escape the apostrophe
const b = "It's fine";    // switch to double quotes (cleaner)

// For most cases, prefer switching. Save escapes for when switching would
// also cause a collision — e.g., text that contains both ' and ".</code></pre>

    <p><strong>Consistency inside a codebase matters more than the "objectively best" choice.</strong> If your project uses single quotes for all bare strings and backticks only for interpolation, follow that. If it uses double quotes everywhere, follow that. Mixing styles arbitrarily within one file makes the code harder to read for the next person (including future you).</p>
  `,

  /* --- Chunk 1: Why & When --- */

  /* 1.0 What problem it solves */
  'topics-2-4-1-0': `
    <p>Without a decision process, every string becomes a small pause: "should I use single or double or backticks here?" Multiplied across a codebase, that's a lot of wasted attention on a choice that mostly doesn't matter. A clear default and a clear set of overrides eliminates the pause — you write the string, the wrapper is obvious, you move on.</p>
    <p>The other problem this solves is the opposite: sometimes the wrapper choice matters a lot, and picking wrong causes bugs. Silent bugs, like using single quotes for a string that contains an apostrophe (SyntaxError) or using single quotes where you needed interpolation (variable name shows up as literal text). Having a mental checklist prevents those bugs before you type them.</p>
  `,

  /* 1.1 Why use it */
  'topics-2-4-1-1': `
    <p>A working default-plus-overrides rule for most JavaScript codebases:</p>
    <p><strong>Default to single quotes.</strong> Use them for bare labels, keys, class names, event names, comparison values, import paths — anything that doesn't contain an apostrophe. This is the least visually noisy choice and matches the Airbnb, StandardJS, and Prettier defaults.</p>
    <p><strong>Switch to double quotes when the text contains an apostrophe.</strong> Sentences with contractions read cleaner without escapes. This is the second most common case — mostly user-facing text like error messages, empty states, alerts, and labels.</p>
    <p><strong>Switch to backticks when you need interpolation OR multiline OR both quote types appear in the text.</strong> Any one of the three is enough reason. If you're building a template with variables, spanning multiple lines, or wrapping text that contains both <code>'</code> and <code>"</code>, backticks are the right tool.</p>
    <p>That's the whole rule. Nine out of ten strings in a normal codebase fall into "single quotes" without any thought. The rest sort themselves into "double" or "backticks" by the content of the text, not by preference.</p>
  `,

  /* 1.2 Where you use it */
  'topics-2-4-1-2': `
<pre class="language-javascript"><code class="language-javascript">// Default — single quotes for bare labels, keys, config values
const status = 'pending';
button.classList.add('active');
element.addEventListener('click', handler);
const config = { mode: 'production', target: 'es2020' };

// Text with apostrophes — double quotes for cleaner reading
const error = "That email isn't valid.";
const empty = "You haven't added any items yet.";
alert("You're offline — we'll sync when you reconnect.");

// Interpolation needed — backticks
const greeting = \`Welcome, \${user.name}!\`;
const url = \`/api/users/\${userId}\`;
const summary = \`\${count} items, \${errors.length} errors\`;

// Multiline needed — backticks
const query = \`
  SELECT id, name
  FROM users
  WHERE active = true
\`;

// Both ' and " in the text — backticks avoid all escaping
const html = \`<div class="card">She said 'hi'</div>\`;

// Building HTML with attributes — backticks are almost always the right call
// (they handle both quote types AND interpolation, which HTML usually needs)
const card = \`
  <article class="post" data-id="\${post.id}">
    <h2>\${post.title}</h2>
    <p>\${post.summary}</p>
  </article>
\`;</code></pre>
  `,

  /* 1.3 Plain English explanation */
  'topics-2-4-1-3': `
    <p>Think of the three quote types as three different sizes of Ziploc bag. Single quotes are the small bag — cheap, light, perfect for a snack. Double quotes are the medium bag — same idea, a little more room for text that has apostrophes in it. Backticks are the big freezer bag — reusable, sturdy, has extra features like a slider seal, but overkill for a granola bar.</p>
    <p>You wouldn't put a granola bar in a freezer bag. You wouldn't try to fit a Thanksgiving turkey in a snack bag. The right bag is the smallest one that comfortably fits the content. Same with quote types: pick the least fancy wrapper your text can live inside without collision, and reach for the fancier wrapper only when the content needs the extra features.</p>
    <p>The content of the string decides the wrapper — not your preference in the moment, and not what looked good in the last file you edited. Once you get in the habit of reading the string first and picking the wrapper based on what's in it, the choice stops feeling like a choice at all.</p>
  `,

  /* 1.4 Mental model */
  'topics-2-4-1-4': `
    <p>Every string you type has a wrapper collision profile — the list of characters that would break the string if used naively. Single-quoted strings collide with apostrophes. Double-quoted strings collide with double quotes. Backtick strings collide with backticks and with unescaped <code>\${</code>. You want to pick the wrapper whose collision profile is <em>empty</em> for the content you're writing.</p>
    <p>Ask three questions, in order, and the choice makes itself:</p>
    <p><strong>1. Does this string need interpolation or multiline?</strong> Yes → backticks, done. No → continue.</p>
    <p><strong>2. Does the text contain an apostrophe?</strong> Yes → double quotes, done. No → continue.</p>
    <p><strong>3. None of the above.</strong> → single quotes.</p>
    <p>This produces the right answer for almost every string you'll ever write, with the small exception of "text that contains both <code>'</code> and <code>"</code>," which falls to backticks by default because they don't collide with either. You'll notice the rule biases toward the simpler wrapper — single quotes get the default because they're the least visually noisy, backticks get reserved for cases that actually need their power.</p>
  `,

  /* 1.5 Step-by-step walkthrough */
  'topics-2-4-1-5': `
<pre class="language-javascript"><code class="language-javascript">// Scenario: you're about to type a string. Walk through the decision.

// Case A: the text is "pending"
// Q1: interpolation or multiline? No.
// Q2: contains an apostrophe? No.
// → single quotes
const status = 'pending';

// Case B: the text is "You haven't logged in yet"
// Q1: interpolation or multiline? No.
// Q2: contains an apostrophe? Yes.
// → double quotes
const message = "You haven't logged in yet";

// Case C: the text is a personalized greeting using \${name}
// Q1: interpolation or multiline? Yes (interpolation).
// → backticks
const greeting = \`Hello, \${name}\`;

// Case D: the text is a 5-line SQL query
// Q1: interpolation or multiline? Yes (multiline).
// → backticks
const query = \`
  SELECT id, email
  FROM users
  WHERE active = true
\`;

// Case E: the text is 'She said "don\\'t forget"'
// Q1: interpolation or multiline? No.
// Q2: contains an apostrophe? Yes.
// → double quotes... but wait, it also contains double quotes.
// The rule's edge case: both ' and " in the text.
// → backticks (they don't collide with either)
const quote = \`She said "don't forget"\`;

// Case F: the text is 'active' being passed to classList.add
// Q1: no. Q2: no.
// → single quotes
button.classList.add('active');

// The decision takes about half a second once you have the rule.
// Most of the time, single quotes win by default.</code></pre>
  `,

  /* --- Chunk 2: The Click --- */

  /* 2.0 Debugging clue */
  'topics-2-4-2-0': `
    <p>Wrong-wrapper bugs come in two flavors, one loud and one silent.</p>
    <p><strong>Loud version:</strong> you used single quotes and the text has an apostrophe (or double quotes and the text has a double quote). You get a SyntaxError, usually pointing at a spot several characters past the actual problem. The fix is to switch the wrapper. This bug is easy to spot because the file won't run at all.</p>
    <p><strong>Silent version:</strong> you used single or double quotes but wrote <code>\${variable}</code> inside, expecting interpolation. The string is valid — no error — but the variable name appears as literal text in the output. Your log shows <code>"Hello, \${user}"</code> instead of <code>"Hello, Os"</code>. The fix is to switch the outer wrapper to backticks. This bug is harder to spot because everything runs; you just get the wrong string.</p>
    <p><strong>Second silent bug:</strong> you used backticks for a bare label and now every string in the file uses backticks "for consistency." Nothing breaks, but the file becomes harder to read because the backtick character is doing double duty as both "just a wrapper" and "signal that interpolation is happening." Reserving backticks for cases that actually need them keeps the signal clean.</p>
    <p><strong>Editor clue:</strong> most editors color interpolated <code>\${...}</code> blocks differently from surrounding text. If you wrote <code>\${name}</code> and it's showing up in the plain-text color instead of the interpolation color, your outer wrapper isn't a backtick.</p>
  `,

  /* 2.1 The part that makes it click */
  'topics-2-4-2-1': `
    <p>The quote types aren't a style preference — they're a decision made by the content of the string. Once you internalize the three-question checklist (interpolation/multiline? apostrophe? neither?), the wrapper picks itself and you stop thinking about it.</p>
    <p>The reason JavaScript has three quote types at all is that no single delimiter works for every kind of text. Apostrophes are common in English. Double quotes are common in HTML attributes. Both are common in code that mixes English text with HTML markup. Backticks are rare in ordinary content, which is exactly why they were chosen as the delimiter for the "power" string type — you can put almost anything inside them without collision.</p>
  `,

  /* 2.2 Common confusions */
  'topics-2-4-2-2': `
    <p><strong>Confusion: "one style is objectively better"</strong></p>
    <p>None of the three is universally better. Style guides disagree — Airbnb and StandardJS prefer single, Google prefers double, some JS teams use backticks liberally. The right choice depends on your codebase's convention and the content of the specific string, not on a universal rule.</p>

    <p><strong>Confusion: "backticks should be used everywhere for consistency"</strong></p>
    <p>They can be, and some teams do. But it costs you the ability to use the backtick as a visual signal — "this string has interpolation or multiline going on." When every string is a backtick, you have to actually read the content to tell whether anything special is happening. Most codebases save backticks for cases that need them.</p>

    <p><strong>Confusion: "the wrapper affects the string's value"</strong></p>
    <p>It doesn't. <code>'hello' === "hello" === \`hello\`</code> — all three produce identical string values with identical <code>.length</code>, identical <code>typeof</code>, identical everything. The wrapper is source-code punctuation, not part of the data.</p>

    <p><strong>Confusion: "escaping is bad practice"</strong></p>
    <p>Escaping is fine. Switching wrappers is usually cleaner, but sometimes the string contains both apostrophes and double quotes, or you're inside a template that already uses backticks, or your linter enforces a specific wrapper. In those cases, escape and move on. Escapes exist for a reason.</p>

    <p><strong>Confusion: "I have to use the same wrapper for every string in a file"</strong></p>
    <p>You don't. Most style guides say "prefer single quotes as the default, use backticks when interpolation or multiline is needed." That's not inconsistency — that's using the right tool for each specific string. Real inconsistency is picking wrappers randomly with no rule.</p>
  `,

  /* 2.3 Common mistakes */
  'topics-2-4-2-3': `
<pre class="language-javascript"><code class="language-javascript">// Silent bug: single quotes where backticks were needed
const name = 'Os';
const greeting = 'Hello, \${name}';
console.log(greeting);   // "Hello, \${name}" — literal, no substitution
// fix: switch to backticks → \`Hello, \${name}\`</code></pre>

<pre class="language-javascript"><code class="language-javascript">// Loud bug: single quotes wrapping text with an apostrophe
const message = &#39;Don&#39;t forget&#39;;
// wrong: inner ' closes the string early → SyntaxError
// fix: switch to double quotes → "Don't forget"</code></pre>

<pre class="language-javascript"><code class="language-javascript">// Loud bug: double quotes wrapping text with double quotes
const quote = &#34;She said &#34;hi&#34;&#34;;
// wrong: inner " closes the string early → SyntaxError
// fix: switch to single quotes → 'She said "hi"'
// or:  switch to backticks    → \`She said "hi"\`</code></pre>

<pre class="language-javascript"><code class="language-javascript">// Overkill: backticks for a bare label with no interpolation or multiline
const status = \`pending\`;
// works, but adds visual noise for no benefit
// fix: use single quotes → 'pending'</code></pre>

<pre class="language-javascript"><code class="language-javascript">// Inconsistency: mixing wrappers randomly in one file
const a = 'foo';
const b = "bar";
const c = \`baz\`;
const d = "qux";
// works, but hard to read — no rule tells the next dev why each was chosen
// fix: default to one wrapper, only switch when the content justifies it</code></pre>

<pre class="language-javascript"><code class="language-javascript">// Escape-when-you-could-switch
const message = 'It\\'s a beautiful day';
// works, but uglier than switching
// fix: use double quotes → "It's a beautiful day"</code></pre>
  `,

  /* --- Chunk 3: In Practice --- */

  /* 3.0 Tiny examples */
  'topics-2-4-3-0': `
<pre class="language-javascript"><code class="language-javascript">// Single quotes — the default for bare labels
const status = 'active';
const role = 'admin';
button.classList.add('primary');

// Double quotes — text with an apostrophe reads cleaner
const error = "That email isn't valid.";
const empty = "You haven't started yet.";

// Backticks — interpolation
const greeting = \`Hello, \${user.name}!\`;
const url = \`/api/users/\${userId}\`;

// Backticks — multiline
const template = \`
  <div class="card">
    <h3>Title</h3>
  </div>
\`;

// Backticks — both ' and " in the text
const mixed = \`He said "don't" loudly\`;

// All three are equal as values
'hello' === "hello";     // true
'hello' === \`hello\`;     // true
"hello" === \`hello\`;     // true</code></pre>
  `,

  /* 3.1 Real website uses */
  'topics-2-4-3-1': `
    <p><strong>Example: CSS class name (bare label → single quotes)</strong></p>
<pre class="language-javascript"><code class="language-javascript">button.classList.toggle('active');</code></pre>

    <p><strong>Example: user-facing error with an apostrophe (double quotes)</strong></p>
<pre class="language-javascript"><code class="language-javascript">error.textContent = "That doesn't look right.";</code></pre>

    <p><strong>Example: personalized greeting (backticks for interpolation)</strong></p>
<pre class="language-javascript"><code class="language-javascript">welcome.textContent = \`Welcome back, \${user.firstName}!\`;</code></pre>

    <p><strong>Example: multiline HTML template (backticks for multiline)</strong></p>
<pre class="language-javascript"><code class="language-javascript">list.innerHTML = \`
  <li class="item" data-id="\${item.id}">
    <span>\${item.name}</span>
    <button>Remove</button>
  </li>
\`;</code></pre>

    <p><strong>Example: mixed quotes inside text (backticks avoid all escaping)</strong></p>
<pre class="language-javascript"><code class="language-javascript">tooltip.textContent = \`Press "Ctrl+S" to save — don't forget!\`;</code></pre>
  `,

  /* 3.2 Connects to */
  'topics-2-4-3-2': `
    <ul>
      <li><strong>Single quotes</strong> → the default for most strings</li>
      <li><strong>Double quotes</strong> → the switch when text contains an apostrophe</li>
      <li><strong>Backticks</strong> → the switch when you need interpolation, multiline, or both quote types</li>
      <li><strong><code>\${}</code> interpolation</strong> → the main reason to reach for backticks</li>
      <li><strong>Escape characters</strong> → <code>\\'</code>, <code>\\"</code>, <code>\\\`</code> exist for when switching wrappers isn't an option</li>
      <li><strong>Style guides</strong> → Airbnb/StandardJS prefer single, Google prefers double — match your codebase</li>
      <li><strong>Linters</strong> → ESLint's <code>quotes</code> rule can enforce a specific wrapper across a project</li>
      <li><strong>Debugging</strong> → wrong-wrapper bugs come in loud (SyntaxError) and silent (interpolation didn't happen) forms</li>
    </ul>
  `,

  /* 3.3 See also */
  'topics-2-4-3-3': `
    <ul>
      <li>Single quotes 'hello'</li>
      <li>Double quotes "hello"</li>
      <li>Backticks (template literals)</li>
      <li><code>\${}</code> interpolation</li>
      <li>Multiline strings with backticks</li>
      <li>Escape characters</li>
      <li>Common string mistakes</li>
      <li>Debugging strings</li>
    </ul>
  `,

    /* ===== Sub-lesson: 3.3.6 Strings → ${} interpolation =====
     Path: topics-2-5-{chunkIndex}-{pieceIndex}
  */

  /* --- Chunk 0: What & How --- */

  /* 0.0 What it is */
  'topics-2-5-0-0': `
    <p><strong>Interpolation</strong> is the ability to embed the value of a variable — or the result of any expression — directly inside a string. In JavaScript, interpolation is written as <code>\${...}</code> and only works inside backtick strings (template literals). Whatever expression you put between the braces gets evaluated, converted to a string, and spliced into the surrounding text at that exact spot.</p>
    <p>Before backticks existed, embedding a variable inside a string required concatenation with <code>+</code>: <code>'Hello, ' + name + '!'</code>. Interpolation replaces that with <code>\`Hello, \${name}!\`</code>, which reads left-to-right as the finished sentence. It's the same idea as fill-in-the-blank form letters — the template has slots, and the slots get filled with real values at the moment the string is built.</p>
  `,

  /* 0.1 Syntax */
  'topics-2-5-0-1': `
<pre class="language-javascript"><code class="language-javascript">// The basic shape — dollar sign, curly braces, expression inside:
\`\${expression}\`

// A variable
const name = 'Os';
\`Hello, \${name}\`;                  // "Hello, Os"

// Multiple values in one string
const count = 3;
\`\${name} has \${count} messages\`;   // "Os has 3 messages"

// Any expression, not just a variable — math, function calls, ternaries:
\`Total: \${5 + 3}\`;                 // "Total: 8"
\`Name: \${name.toUpperCase()}\`;     // "Name: OS"
\`Status: \${count > 0 ? 'has messages' : 'empty'}\`;

// Nested property access
const user = { profile: { firstName: 'Os' } };
\`Hi, \${user.profile.firstName}\`;   // "Hi, Os"

// Wrong: \${} in single or double quotes — no substitution
'Hello, \${name}';                  // literal: "Hello, \${name}"
"Hello, \${name}";                  // literal: "Hello, \${name}"

// Wrong: missing the $ before the { }
\`Hello, {name}\`;                   // literal: "Hello, {name}"

// Wrong: reference to a variable that doesn't exist
\`Hello, \${naem}\`;                  // ReferenceError: naem is not defined</code></pre>
  `,

  /* 0.2 Anatomy / Breakdown */
  'topics-2-5-0-2': `
<pre class="language-javascript"><code class="language-javascript">const name = 'Os';
const message = \`Hello, \${name}!\`;

// Breaking down the interpolation:
//
//   \`Hello, \${name}!\`
//    │       │  │  │ │
//    │       │  │  │ └── closing backtick — end of template literal
//    │       │  │  └──── literal text "!" — captured as-is
//    │       │  └─────── closing brace — end of the expression
//    │       └────────── the expression 'name' — JS evaluates this
//    └────────────────── literal text "Hello, " — captured as-is
//
// \${  → opens an interpolation block. JS switches from "capture text"
//        mode into "evaluate expression" mode.
//
// name → any valid JS expression. Here it's just a variable name, so JS
//        looks up its current value. The value is "Os".
//
// }    → closes the interpolation block. The evaluated value is converted
//        to a string (if it isn't already) and spliced into the output.
//        JS switches back to "capture text" mode.

// The finished string is "Hello, Os!" — 10 characters. The \${ } punctuation
// is not part of the string, only the substituted value is.</code></pre>
  `,

  /* 0.3 Syntax Details That Matter */
  'topics-2-5-0-3': `
    <p><strong>Interpolation only works inside backticks.</strong> This is the single most important thing to remember. <code>\${}</code> inside single or double quotes is just four literal characters — the string is valid, but no substitution happens. This is a silent bug: the code runs, but you get the wrong output.</p>
<pre class="language-javascript"><code class="language-javascript">const name = 'Os';

\`Hello, \${name}\`;   // "Hello, Os" — works
'Hello, \${name}';   // "Hello, \${name}" — literal, no substitution, no error
"Hello, \${name}";   // "Hello, \${name}" — literal, no substitution, no error</code></pre>

    <p><strong>Anything that evaluates to a value can go inside <code>\${}</code>.</strong> The braces don't restrict you to variable names. Math, function calls, ternaries, property lookups, method chains, new expressions, comparisons — anything JS can evaluate is fair game. The result of the expression is what gets inserted.</p>
<pre class="language-javascript"><code class="language-javascript">const price = 20;
const qty = 3;
const user = { name: 'Os', role: 'admin' };

\`Total: \${price * qty}\`;                       // "Total: 60"
\`Name: \${user.name.toUpperCase()}\`;            // "Name: OS"
\`Role: \${user.role === 'admin' ? 'yes' : 'no'}\`;  // "Role: yes"
\`Today: \${new Date().getFullYear()}\`;          // "Today: 2026"
\`Items: \${['a', 'b', 'c'].join(', ')}\`;        // "Items: a, b, c"</code></pre>

    <p><strong>The result of the expression is always converted to a string.</strong> Numbers, booleans, arrays, and objects all get coerced. Numbers convert directly. Booleans become <code>"true"</code> or <code>"false"</code>. Arrays join with commas. Objects become <code>"[object Object]"</code>, which is almost never what you want — you usually need to convert objects to a readable form yourself (with <code>JSON.stringify</code> or a manual property access).</p>
<pre class="language-javascript"><code class="language-javascript">\`Count: \${5}\`;              // "Count: 5"
\`Active: \${true}\`;          // "Active: true"
\`Items: \${[1, 2, 3]}\`;      // "Items: 1,2,3" — array converts to comma-joined
\`User: \${{ name: 'Os' }}\`;  // "User: [object Object]" — not useful
\`User: \${JSON.stringify({ name: 'Os' })}\`;   // 'User: {"name":"Os"}'</code></pre>

    <p><strong>Interpolation runs once, at the moment the template is evaluated.</strong> The value of the expression is captured immediately and baked into the finished string. If the variable changes later, the already-built string doesn't update — it's a plain string now, not a live template.</p>
<pre class="language-javascript"><code class="language-javascript">let name = 'Os';
const a = \`Hello, \${name}\`;

name = 'Sam';
console.log(a);   // "Hello, Os" — the string was built when name was "Os"</code></pre>

    <p><strong>To include a literal <code>\${</code> in a backtick string without triggering interpolation, escape it with a backslash: <code>\\\${</code>.</strong> This is rare but comes up when writing documentation, code examples, or templates that describe interpolation itself.</p>
<pre class="language-javascript"><code class="language-javascript">\`use \\\${name} for interpolation\`;   // "use \${name} for interpolation"</code></pre>
  `,

  /* --- Chunk 1: Why & When --- */

  /* 1.0 What problem it solves */
  'topics-2-5-1-0': `
    <p>Building strings out of variables used to be painful. Old-style concatenation with <code>+</code> works, but it's verbose, prone to typos (missing space here, extra quote there), and hard to read for anything more than one or two variables. A line like <code>'Welcome, ' + firstName + ' ' + lastName + '! You have ' + count + ' new messages.'</code> is the same information as a sentence but requires your brain to reassemble it from fragments every time you read it.</p>
    <p>Interpolation replaces that with a template that reads exactly like the finished sentence: <code>\`Welcome, \${firstName} \${lastName}! You have \${count} new messages.\`</code>. Your eyes flow through it the same way they'd read the output. The variables are marked visually so you can see where they slot in, but the surrounding text is intact and readable. This is a productivity and readability improvement, not a functionality one — you could always build the same string with <code>+</code>. But you'd stop wanting to.</p>
  `,

  /* 1.1 Why use it */
  'topics-2-5-1-1': `
    <p>Use interpolation any time you're building a string that includes one or more values from variables or expressions. It's the standard modern approach — new JavaScript code uses interpolation by default and only falls back to concatenation for very short cases (one variable added to a short literal) or when working in an older codebase that predates template literals.</p>
    <p>The readability gain scales with the number of variables. One variable: interpolation is slightly nicer. Two variables: interpolation is clearly nicer. Three or more: concatenation becomes unreadable and interpolation is the obvious choice. If a string has more than one <code>\${}</code> in it, there's essentially no reason to use anything else.</p>
    <p>Interpolation also encourages good habits. Because you can drop any expression into <code>\${}</code>, you can format values inline (<code>\${price.toFixed(2)}</code>, <code>\${name.toUpperCase()}</code>) instead of pre-computing them into temporary variables. This keeps your logic close to where the value is used, which makes the code easier to follow. In moderation — a heavy <code>\${}</code> with a five-step method chain inside is worse than pulling that logic into a variable with a good name.</p>
  `,

  /* 1.2 Where you use it */
  'topics-2-5-1-2': `
<pre class="language-javascript"><code class="language-javascript">// Personalizing text with user data
welcomeBanner.textContent = \`Welcome back, \${user.firstName}!\`;

// Composing URLs with path parameters and query strings
const url = \`/api/users/\${userId}/posts?page=\${page}&limit=\${limit}\`;

// Building formatted error messages with context
throw new Error(\`Invalid input: expected a number, got \${typeof value}\`);

// Formatting values inline
const price = 19.99;
const label = \`Price: \$\${price.toFixed(2)}\`;   // "Price: $19.99"

// Building HTML fragments with data
list.innerHTML = \`
  <li data-id="\${item.id}">
    <span>\${item.name}</span>
    <span>\$\${item.price.toFixed(2)}</span>
  </li>
\`;

// Logging with context
console.log(\`[\${new Date().toISOString()}] user \${userId} logged in\`);

// Conditional messages using a ternary inside \${}
const message = \`\${count === 0 ? 'No' : count} items in your cart\`;

// SQL queries or other query languages with embedded values
// (be careful of injection — use parameterized queries in real apps)
const q = \`SELECT * FROM users WHERE id = \${userId}\`;

// Anywhere you'd previously write:
//   'text ' + var + ' more text ' + otherVar
// interpolation is the modern replacement.</code></pre>
  `,

  /* 1.3 Plain English explanation */
  'topics-2-5-1-3': `
    <p>Imagine you print birthday cards for a living. Every card has the same layout: "Happy Birthday, [NAME]! Wishing you a wonderful [AGE]th year." The bracketed parts are blanks — placeholders where the customer's specific details get filled in. You print the template once, then fill the blanks for each order.</p>
    <p>Interpolation is that fill-in-the-blank process, applied to strings in code. You write the template with <code>\${}</code> marking the blanks — <code>\`Happy Birthday, \${name}! Wishing you a wonderful \${age}th year.\`</code> — and JavaScript fills each blank with the actual value the moment the line runs. The template is your card layout. The <code>\${}</code> markers are the blanks. The variables are the customer details.</p>
    <p>The reason this is such a big improvement over concatenation is the same reason pre-printed cards are better than hand-writing each one: you can see the whole layout at once, read it top to bottom, and the "custom parts" are visually marked without breaking the flow of the surrounding text. Concatenation is like writing each card word by word, hopping between pen and calligraphy set for every variable. Interpolation is one flowing sentence with obvious slots.</p>
  `,

  /* 1.4 Mental model */
  'topics-2-5-1-4': `
    <p>A template literal is a small program that runs top-to-bottom the moment JS reads it. Every plain-text segment becomes part of the output verbatim. Every <code>\${...}</code> block is a pause: JS runs the code inside the braces, converts the result to a string, and splices it into the output at that exact spot. When the whole thing finishes, you have one finished string — the template is gone.</p>
    <p>This means <code>\${...}</code> is not a placeholder that stays "live." The expression runs once, its result is baked in, and the finished string doesn't remember the template it came from. Change the variable later, and the already-built string doesn't update. If you want the current value, you have to build a new template.</p>
    <p>It also means <code>\${...}</code> can throw errors. If the expression references a variable that doesn't exist, calls a function that throws, or accesses a property of <code>null</code>, the whole template fails on the spot. You're running real code inside those braces — not just looking up a value. Treat it with the same care you'd treat any other line of JS.</p>
    <p>The mental picture: <em>a template literal is two languages sharing one string</em>. The plain text is English (or whatever). The <code>\${...}</code> blocks are JavaScript. JS reads through the string, switching modes at every <code>\${</code> and <code>}</code>, until the whole template is one final string.</p>
  `,

  /* 1.5 Step-by-step walkthrough */
  'topics-2-5-1-5': `
<pre class="language-javascript"><code class="language-javascript">// Scenario: build a formatted greeting with a name and a count.
const name = 'Os';
const count = 3;
const message = \`Hi \${name}, you have \${count + 1} unread messages.\`;

// What JS does when it reads that line:

// Step 1: JS sees 'const message ='. Declaration, value coming.

// Step 2: JS sees the opening &#96;. Template literal starts.
//         Parser enters "capture text" mode.

// Step 3: JS captures the literal text "Hi " — three characters, spliced
//         into the output as-is.
//         Output so far: "Hi "

// Step 4: JS sees &#36;{. Interpolation opener.
//         Parser switches to "evaluate expression" mode.

// Step 5: JS reads 'name'. Looks up its value in the current scope.
//         name is "Os". The expression evaluates to "Os".

// Step 6: JS sees }. Interpolation ends.
//         "Os" is spliced into the output.
//         Output so far: "Hi Os"

// Step 7: JS captures the literal text ", you have ".
//         Output so far: "Hi Os, you have "

// Step 8: JS sees &#36;{ again. Interpolation opener.

// Step 9: JS reads 'count + 1'. This is an expression, not just a variable.
//         count is 3. 3 + 1 evaluates to 4.
//         The number 4 is converted to the string "4".

// Step 10: JS sees }. Interpolation ends.
//          "4" is spliced into the output.
//          Output so far: "Hi Os, you have 4"

// Step 11: JS captures " unread messages."
//          Output so far: "Hi Os, you have 4 unread messages."

// Step 12: JS sees the closing &#96;. Template literal ends.
//          The final string is stored in 'message'.

// Step 13: JS sees ;. Statement complete.

// message is now the finished string. The template no longer exists —
// it was a set of instructions that ran once to produce a plain string.
// Changing name or count later won't affect message.</code></pre>
  `,

  /* --- Chunk 2: The Click --- */

  /* 2.0 Debugging clue */
  'topics-2-5-2-0': `
    <p>Interpolation bugs are almost always one of four things.</p>
    <p><strong>1. Wrong outer wrapper.</strong> You used <code>'</code> or <code>"</code> instead of <code>\`</code>. The string is valid but no substitution happens — <code>\${name}</code> shows up as literal text in the output. This is a silent bug: no error, just wrong output. If your log shows <code>"Hello, \${user}"</code> where you expected <code>"Hello, Os"</code>, check the quote characters first. In most editors, backtick strings color the interpolation region differently — if the coloring looks wrong, that's the tell.</p>
    <p><strong>2. Missing the <code>$</code> before <code>{}</code>.</strong> Writing <code>\`Hello, {name}\`</code> instead of <code>\`Hello, \${name}\`</code>. Braces alone don't interpolate — you need the <code>$</code> to signal "expression coming." The output will contain the literal <code>{name}</code>.</p>
    <p><strong>3. Typo in the variable name inside <code>\${}</code>.</strong> Because interpolation runs the code as a real expression, a wrong name throws <code>ReferenceError: naem is not defined</code>. This is a loud, helpful error — the message tells you exactly which name JS couldn't find.</p>
    <p><strong>4. Interpolating an object without formatting it.</strong> <code>\${someObject}</code> produces <code>"[object Object]"</code> in the output. If you see that in your string, you interpolated an object where a string was expected. Use <code>JSON.stringify(someObject)</code>, or pick a specific property like <code>someObject.name</code>.</p>
  `,

  /* 2.1 The part that makes it click */
  'topics-2-5-2-1': `
    <p><code>\${...}</code> isn't a placeholder — it's a live piece of JavaScript that runs the moment the template is evaluated. Once you internalize that, three things become obvious. First, anything JS can evaluate can go inside — variables, math, function calls, ternaries, property lookups, method chains. Second, whatever the expression returns gets converted to a string automatically. Third, if the expression errors, the whole template errors — because those braces are running real code, not just doing text substitution.</p>
    <p>The other click: interpolation runs <em>once</em>. The template isn't a live view of your variables — it's a set of instructions that produces a finished string. Change the variable later, and the string doesn't update. If you want the current value, you have to build a new template. This makes interpolation fast (no ongoing overhead) but also means you shouldn't think of the string as "connected" to its source variables in any way after it's built.</p>
  `,

  /* 2.2 Common confusions */
  'topics-2-5-2-2': `
    <p><strong>Confusion: "<code>\${}</code> works in any string type"</strong></p>
    <p>It doesn't. Only backticks. In single or double quotes, <code>\${}</code> is literal text.</p>
<pre class="language-javascript"><code class="language-javascript">const name = 'Os';
\`Hello, \${name}\`;   // "Hello, Os"
'Hello, \${name}';   // "Hello, \${name}"
"Hello, \${name}";   // "Hello, \${name}"</code></pre>

    <p><strong>Confusion: "interpolation is like a variable reference — it stays live"</strong></p>
    <p>It doesn't. Interpolation happens once, at the moment the template is evaluated. The finished string is a plain string with the value baked in. Later changes to the variable don't affect it.</p>

    <p><strong>Confusion: "you can only put simple variable names inside <code>\${}</code>"</strong></p>
    <p>You can put any expression — math, function calls, ternaries, property lookups, method chains, comparisons, even other template literals. If JS can evaluate it, it works.</p>
<pre class="language-javascript"><code class="language-javascript">\`Result: \${5 + 3 * 2}\`;                    // "Result: 11"
\`Uppercase: \${'hello'.toUpperCase()}\`;     // "Uppercase: HELLO"
\`Nested: \${\`inner \${1 + 1}\`}\`;              // "Nested: inner 2"</code></pre>

    <p><strong>Confusion: "interpolation and string concatenation are different for numbers"</strong></p>
    <p>They behave differently in one case worth knowing: concatenation with <code>+</code> and a number-first expression does arithmetic before coercing, which can produce surprising results. Interpolation always coerces the expression's result to a string.</p>
<pre class="language-javascript"><code class="language-javascript">'sum: ' + 2 + 3;      // "sum: 23" — 2 and 3 both coerced to strings, joined
'sum: ' + (2 + 3);    // "sum: 5"  — parens force math first
\`sum: \${2 + 3}\`;      // "sum: 5"  — expression evaluated first, then stringified

// Interpolation is less error-prone here because \${} always evaluates
// the whole expression as JS before converting to a string.</code></pre>

    <p><strong>Confusion: "interpolation is slower than concatenation"</strong></p>
    <p>In modern JS engines, the difference is negligible in any real-world code. Optimize for readability first.</p>
  `,

  /* 2.3 Common mistakes */
  'topics-2-5-2-3': `
<pre class="language-javascript"><code class="language-javascript">// Wrong outer wrapper — silent bug
const name = 'Os';
const greeting = 'Hello, \${name}';
console.log(greeting);   // "Hello, \${name}" — no substitution, no error
// fix: use backticks → \`Hello, \${name}\`</code></pre>

<pre class="language-javascript"><code class="language-javascript">// Missing the $ before { }
const greeting = \`Hello, {name}\`;
console.log(greeting);   // "Hello, {name}" — literal braces
// fix: add the $ → \`Hello, \${name}\`</code></pre>

<pre class="language-javascript"><code class="language-javascript">// Typo in the variable name — loud bug
const greeting = \`Hello, \${naem}\`;
// wrong: ReferenceError: naem is not defined
// fix: correct the name → \`Hello, \${name}\`</code></pre>

<pre class="language-javascript"><code class="language-javascript">// Interpolating an object directly
const user = { name: 'Os', role: 'admin' };
const label = \`User: \${user}\`;
console.log(label);   // "User: [object Object]"
// fix: pick a property   → \`User: \${user.name}\`
// fix: use JSON.stringify → \`User: \${JSON.stringify(user)}\`</code></pre>

<pre class="language-javascript"><code class="language-javascript">// Assuming interpolation stays live
let count = 5;
const status = \`\${count} items\`;
count = 10;
console.log(status);   // "5 items" — the string was built when count was 5
// fix: rebuild the string when count changes
//      → const status = \`\${count} items\`;</code></pre>

<pre class="language-javascript"><code class="language-javascript">// Overly complex expression inside \${}
const label = \`Total: \$\${cart.items.reduce((sum, i) => sum + i.price * i.qty, 0).toFixed(2)}\`;
// works, but very hard to read
// fix: extract to a variable first
const total = cart.items.reduce((sum, i) => sum + i.price * i.qty, 0);
const label2 = \`Total: \$\${total.toFixed(2)}\`;</code></pre>

<pre class="language-javascript"><code class="language-javascript">// Forgetting to escape a literal \${ that should appear in output
const help = \`use \${name} for interpolation\`;
// wrong: JS tries to interpolate a variable called 'name'
// fix: escape the $ → \`use \\\${name} for interpolation\`</code></pre>
  `,

  /* --- Chunk 3: In Practice --- */

  /* 3.0 Tiny examples */
  'topics-2-5-3-0': `
<pre class="language-javascript"><code class="language-javascript">const name = 'Os';
const count = 3;
const user = { firstName: 'Os', lastName: 'Dev' };

// Simple variable
\`Hello, \${name}\`;                          // "Hello, Os"

// Multiple variables
\`\${name} has \${count} messages\`;           // "Os has 3 messages"

// Math inside \${}
\`Total: \${count * 2}\`;                     // "Total: 6"
\`Half: \${100 / 2}\`;                        // "Half: 50"

// Method calls
\`Upper: \${name.toUpperCase()}\`;            // "Upper: OS"
\`Length: \${name.length}\`;                  // "Length: 2"

// Property access
\`Full: \${user.firstName} \${user.lastName}\`;  // "Full: Os Dev"

// Ternary
\`Status: \${count > 0 ? 'active' : 'empty'}\`;  // "Status: active"

// Function call
function greet(n) { return 'hi ' + n; }
\`Message: \${greet(name)}\`;                 // "Message: hi Os"

// Escape a literal \${
\`Docs: use \\\${name} to interpolate\`;       // "Docs: use \${name} to interpolate"</code></pre>
  `,

  /* 3.1 Real website uses */
  'topics-2-5-3-1': `
    <p><strong>Example: personalized welcome text</strong></p>
<pre class="language-javascript"><code class="language-javascript">banner.textContent = \`Welcome back, \${user.firstName}!\`;</code></pre>

    <p><strong>Example: composing an API URL from IDs</strong></p>
<pre class="language-javascript"><code class="language-javascript">const url = \`/api/users/\${userId}/orders/\${orderId}\`;</code></pre>

    <p><strong>Example: dynamic validation message</strong></p>
<pre class="language-javascript"><code class="language-javascript">error.textContent = \`\${fieldName} must be at least \${minLength} characters (you entered \${value.length})\`;</code></pre>

    <p><strong>Example: formatted price display</strong></p>
<pre class="language-javascript"><code class="language-javascript">priceLabel.textContent = \`\$\${price.toFixed(2)} — \${qty} in stock\`;</code></pre>

    <p><strong>Example: cart summary with a ternary</strong></p>
<pre class="language-javascript"><code class="language-javascript">summary.textContent = \`\${count === 0 ? 'Your cart is empty' : count + ' items in your cart'}\`;</code></pre>

    <p><strong>Example: log line with timestamp and context</strong></p>
<pre class="language-javascript"><code class="language-javascript">console.log(\`[\${new Date().toISOString()}] \${action} by user \${userId}\`);</code></pre>
  `,

  /* 3.2 Connects to */
  'topics-2-5-3-2': `
    <ul>
      <li><strong>Backticks</strong> → the only wrapper where <code>\${}</code> works</li>
      <li><strong>Variables</strong> → the most common thing to interpolate</li>
      <li><strong>Expressions</strong> → math, ternaries, method calls all work inside <code>\${}</code></li>
      <li><strong>String + string concatenation</strong> → what interpolation replaced; still valid, just less readable for multiple values</li>
      <li><strong>Type coercion</strong> → the expression's result is converted to a string automatically</li>
      <li><strong>Multiline strings</strong> → interpolation works across multiline backtick strings too</li>
      <li><strong>Building HTML strings</strong> → interpolation is the standard way to build HTML with dynamic data</li>
      <li><strong>Debugging</strong> → the classic silent bug is using <code>'</code> or <code>"</code> when you meant <code>\`</code></li>
    </ul>
  `,

  /* 3.3 See also */
  'topics-2-5-3-3': `
    <ul>
      <li>Backticks \`hello\`</li>
      <li>Multiline strings with backticks</li>
      <li>String + string concatenation</li>
      <li>Escape characters</li>
      <li>When each quote type matters</li>
      <li>Common string mistakes</li>
      <li>Debugging strings</li>
      <li>Building HTML strings in JavaScript</li>
    </ul>
  `,

  /* ===== Sub-lesson: 3.3.7 Strings → multiline strings with backticks =====
     Path: topics-2-6-{chunkIndex}-{pieceIndex}
  */

  /* --- Chunk 0: What & How --- */

  /* 0.0 What it is */
  'topics-2-6-0-0': `
    <p>A <strong>multiline string</strong> is a string that spans more than one physical line in your source code. In JavaScript, only backtick strings (template literals) support this natively — you can press Enter in the middle of a backtick string and the newline becomes part of the value. Single and double quotes don't allow this: a real line break inside them is a syntax error.</p>
    <p>Every newline you type between the opening <code>\`</code> and the closing <code>\`</code> becomes a <code>\\n</code> character in the resulting string. So a backtick string that looks like three lines in your source code contains two <code>\\n</code> characters when it's stored — one at the end of each of the first two lines. This is important because that's exactly the same thing as writing <code>'line one\\nline two\\nline three'</code> in a single-quoted string. The wrapper style changed; the resulting string is identical.</p>
  `,

  /* 0.1 Syntax */
  'topics-2-6-0-1': `
<pre class="language-javascript"><code class="language-javascript">// The basic shape — press Enter freely between the two backticks:
const poem = \`roses are red
violets are blue
JavaScript strings
can span lines too\`;

// The stored value contains real newline characters:
poem.length;              // 62
poem.split('\\n').length;  // 4 — four lines

// Equivalent to writing it with explicit \\n in any quote type:
const same = 'roses are red\\nviolets are blue\\nJavaScript strings\\ncan span lines too';
poem === same;            // true — identical string

// Wrong: real line break inside single quotes
const broken = &#39;line one
line two&#39;;
// ← SyntaxError — actual newlines not allowed in ' ' or " "

// Wrong: real line break inside double quotes
const alsoBroken = &#34;line one
line two&#34;;
// ← SyntaxError — same rule

// Old workaround before backticks existed — string concatenation with \\n:
const old = 'line one\\n' +
            'line two\\n' +
            'line three';
// works, but ugly compared to a backtick multiline</code></pre>
  `,

  /* 0.2 Anatomy / Breakdown */
  'topics-2-6-0-2': `
<pre class="language-javascript"><code class="language-javascript">const message = \`Hello
World\`;

// Character by character, what's in the string:
//
//   H  e  l  l  o  \\n  W  o  r  l  d
//   1  2  3  4  5  6   7  8  9  10 11
//
// The \\n at position 6 is a single character — the newline you typed
// by pressing Enter in your source code. It's not two characters (\\ and n),
// it's one character (the newline character, ASCII 10).

message.length;         // 11 — five letters, one newline, five letters
message.split('\\n');    // ["Hello", "World"] — split on the newline
message[5];             // "\\n" — the newline character itself
message.indexOf('\\n');  // 5 — position of the newline

// The backticks themselves are NOT part of the string. They're just
// the delimiters that told JS "this string starts here" and "this string
// ends here." Same as with ' ' and " " — the wrapper never becomes content.</code></pre>
  `,

  /* 0.3 Syntax Details That Matter */
  'topics-2-6-0-3': `
    <p><strong>Every physical newline in the source becomes a <code>\\n</code> character in the string.</strong> This is the whole feature. What you see in your editor is what you get in the string — line breaks and all. There is no separate "beautify" step; the string is stored exactly as typed.</p>

    <p><strong>Indentation is preserved too.</strong> Every space and tab between the opening and closing backticks is part of the string, including the indentation your editor auto-inserts when you press Enter inside a function or block. This is the single biggest gotcha with multiline backticks — a string that looks nicely aligned in your source often contains 4, 6, or 8 spaces at the start of every line that you didn't intend to include.</p>
<pre class="language-javascript"><code class="language-javascript">function greet() {
  const message = \`Hello
    from
      Os\`;
  return message;
}

// What message actually contains:
// "Hello\\n    from\\n      Os"
//
// The 4 spaces before "from" and the 6 spaces before "Os" are in the string.
// If you paste that into a text field, you'll see the indentation.</code></pre>

    <p><strong>To avoid indentation in the output, don't indent the lines in the source.</strong> This means multiline backtick strings often look "unindented" compared to the surrounding code, which can be visually ugly but produces a clean string.</p>
<pre class="language-javascript"><code class="language-javascript">function greet() {
  const message = \`Hello
from
Os\`;
  return message;
}

// What message actually contains:
// "Hello\\nfrom\\nOs"
//
// No leading spaces — because none were typed in the source.</code></pre>

    <p><strong>The first newline right after the opening backtick is also part of the string.</strong> A common surprise: writing a multiline string that starts on the line <em>after</em> the opening backtick puts a leading newline into the string.</p>
<pre class="language-javascript"><code class="language-javascript">const a = \`
Hello
World\`;
// a === "\\nHello\\nWorld" — starts with a newline

const b = \`Hello
World\`;
// b === "Hello\\nWorld" — starts with "H"

// If you want to start the content on the next line but not include the
// leading newline, either write the first line right after the backtick,
// or trim it afterward:
const c = \`
Hello
World\`.trim();
// c === "Hello\\nWorld"</code></pre>

    <p><strong>Interpolation still works across multiple lines.</strong> Multiline and interpolation are two separate features of backticks, but they combine freely — you can drop <code>\${}</code> anywhere inside a multiline string.</p>
<pre class="language-javascript"><code class="language-javascript">const name = 'Os';
const count = 3;

const message = \`Hello, \${name}!
You have \${count} new messages.
Log in to read them.\`;</code></pre>

    <p><strong>Line-ending characters are always <code>\\n</code>, regardless of the OS.</strong> Some source files on Windows use <code>\\r\\n</code> line endings, and if your editor saves the file that way, the string will contain <code>\\r\\n</code> at each line break. Most modern editors save as <code>\\n</code> by default; if line-ending consistency matters, check your editor's settings.</p>
  `,

  /* --- Chunk 1: Why & When --- */

  /* 1.0 What problem it solves */
  'topics-2-6-1-0': `
    <p>Before backticks, writing a string that needed to span multiple visual lines required one of two ugly workarounds. Option one was to concatenate several single-line strings with <code>+</code> and <code>\\n</code>: <code>'line one\\n' + 'line two\\n' + 'line three'</code>. This works, but every line requires extra quotes and pluses, and the intent (multiline text) is buried under the plumbing. Option two was to put the whole thing on one line with <code>\\n</code> escape characters: <code>'line one\\nline two\\nline three'</code>. This works but makes long strings unreadable — you can't visually see the structure of the output because there are no line breaks in the source.</p>
    <p>Multiline backticks solve both problems by letting you type the string exactly as it should appear in the output. Line breaks in the source become line breaks in the string. What you see is what you get. This turns strings that used to be tedious plumbing into readable blocks of text — HTML templates, SQL queries, error messages, formatted output, whatever. The source now shows the shape of the string, not the mechanics of building it.</p>
  `,

  /* 1.1 Why use it */
  'topics-2-6-1-1': `
    <p>Use multiline backticks any time your string has a fixed visual shape you want to preserve — HTML fragments with nested tags, SQL queries with clauses on their own lines, formatted output with columns, code snippets you're storing as strings, or any block of text that reads better with real line breaks. If the string is more than about 60 characters and has natural break points, multiline is almost always more readable than a single long line with <code>\\n</code>.</p>
    <p>The readability advantage compounds when you also need interpolation. A single-line string with three variables and a couple of <code>\\n</code> breaks is hard to scan. The same string as a multiline template, with the variables slotted in where they belong, reads exactly like the output — you can see at a glance what the final string will look like.</p>
    <p>Don't use multiline backticks for short single-line strings where you just want to break a long line for readability. That's what regular string concatenation or standard string methods are for. Multiline backticks put the line breaks <em>into the string</em>, which isn't usually what you want when you're just trying to make source code fit within 80 characters.</p>
  `,

  /* 1.2 Where you use it */
  'topics-2-6-1-2': `
<pre class="language-javascript"><code class="language-javascript">// HTML fragments with nested tags
const card = \`
&lt;article class="post"&gt;
  &lt;h2&gt;\${post.title}&lt;/h2&gt;
  &lt;p&gt;\${post.summary}&lt;/p&gt;
  &lt;a href="\${post.url}"&gt;Read more&lt;/a&gt;
&lt;/article&gt;
\`;

// SQL queries with clauses on separate lines
const query = \`
SELECT id, name, email
FROM users
WHERE role = 'admin'
  AND active = true
ORDER BY created_at DESC
LIMIT 10
\`;

// Multi-line error messages with context
throw new Error(\`
Failed to load user data:
  userId: \${userId}
  endpoint: \${url}
  status: \${response.status}
Try again in a few seconds.
\`);

// Formatted CLI-style output
const help = \`
Usage: myapp [options]

Options:
  -h, --help       Show this help message
  -v, --version    Show version
  --verbose        Enable verbose logging
\`;

// Code snippets stored as strings (e.g., for a docs site)
const example = \`
function greet(name) {
  return \\\`Hello, \\\${name}!\\\`;
}
\`;

// ASCII art or any string where visual layout matters
const banner = \`
  ┌─────────────┐
  │  Welcome!   │
  └─────────────┘
\`;

// Anywhere you'd previously write:
//   'line1\\n' + 'line2\\n' + 'line3'
// or
//   'line1\\nline2\\nline3'
// a multiline backtick is usually the modern replacement.</code></pre>
  `,

  /* 1.3 Plain English explanation */
  'topics-2-6-1-3': `
    <p>Think of writing a string as writing text on a piece of paper. Single and double quotes are like a text field on a form — you have one line, and if you press Enter, the form beeps at you or moves to the next field. If you want the text to look like multiple lines, you have to write "\\n" in the field and hope the system knows to render it as a break.</p>
    <p>Backticks are like writing on a regular sheet of paper. You press Enter whenever you want a new line, and the paper just accepts it — that's where the line ends, no special code required. The shape of the finished text on the page is the shape you typed.</p>
    <p>This is why multiline backticks are such a big improvement for anything with visual structure. HTML, SQL, formatted messages, code examples — anything where the layout carries meaning. You get to write it the way it should look, instead of translating it into a single line with escape codes and hoping you got the breaks in the right spots.</p>
  `,

  /* 1.4 Mental model */
  'topics-2-6-1-4': `
    <p>A multiline backtick string is captured character-for-character, including invisible characters like newlines and spaces. There is no processing, no cleanup, no smart indentation-stripping. Every character between the two backticks — visible or not — becomes part of the string in the exact order you typed it.</p>
    <p>The mental picture: imagine dragging your finger from the opening backtick to the closing backtick, one character at a time. Whatever your finger passes over — letters, spaces, tabs, newlines, punctuation — that's the string. If you passed over 4 spaces at the start of a line, those 4 spaces are in the string. If you passed over a newline, that newline is in the string. The string doesn't care about looking pretty in your source; it stores exactly what your finger crossed.</p>
    <p>This is why the "indentation in a multiline string" gotcha exists. When you press Enter inside a function or block, your editor auto-indents the next line to match the surrounding code. Your finger now has to cross those auto-inserted spaces to get to the next line's content. Every one of those spaces ends up in the string. The fix is to either not indent (visually ugly source, clean string) or accept the indentation and strip it later with a helper.</p>
  `,

  /* 1.5 Step-by-step walkthrough */
  'topics-2-6-1-5': `
<pre class="language-javascript"><code class="language-javascript">// Scenario: you want to build a small HTML card with three lines.
const title = 'Welcome';
const body = 'Thanks for signing up';

const card = \`&lt;div&gt;
  &lt;h2&gt;\${title}&lt;/h2&gt;
  &lt;p&gt;\${body}&lt;/p&gt;
&lt;/div&gt;\`;

// What JS does when it reads that line:

// Step 1: JS sees 'const card ='. Declaration, value coming.

// Step 2: JS sees the opening &#96;. Template literal starts.
//         Parser enters "capture text" mode.

// Step 3: JS captures the literal text "&lt;div&gt;" — five characters.
//         Output so far: "&lt;div&gt;"

// Step 4: JS reaches the end of the source line. The next character is
//         a newline (from you pressing Enter). Newline is captured.
//         Output so far: "&lt;div&gt;\\n"

// Step 5: JS captures "  &lt;h2&gt;" — that's two spaces (the indentation
//         you typed) plus the "&lt;h2&gt;" tag. Six characters total.
//         Output so far: "&lt;div&gt;\\n  &lt;h2&gt;"

// Step 6: JS sees &#36;{. Interpolation opener.

// Step 7: JS reads 'title'. Its value is "Welcome". The expression
//         evaluates to "Welcome" and gets spliced in.
//         Output so far: "&lt;div&gt;\\n  &lt;h2&gt;Welcome"

// Step 8: JS captures "&lt;/h2&gt;" — five characters.
//         Output so far: "&lt;div&gt;\\n  &lt;h2&gt;Welcome&lt;/h2&gt;"

// Step 9: JS captures the newline at the end of the line.
//         Output so far: "&lt;div&gt;\\n  &lt;h2&gt;Welcome&lt;/h2&gt;\\n"

// Step 10: JS captures "  &lt;p&gt;" — two spaces plus the "&lt;p&gt;" tag.
//          Output so far: "&lt;div&gt;\\n  &lt;h2&gt;Welcome&lt;/h2&gt;\\n  &lt;p&gt;"

// Step 11: JS sees &#36;{. Reads 'body'. Value "Thanks for signing up".
//          Output so far: "&lt;div&gt;\\n  &lt;h2&gt;Welcome&lt;/h2&gt;\\n  &lt;p&gt;Thanks for signing up"

// Step 12: JS captures "&lt;/p&gt;" plus the newline plus "&lt;/div&gt;".
//          Output so far: "&lt;div&gt;\\n  &lt;h2&gt;Welcome&lt;/h2&gt;\\n  &lt;p&gt;Thanks for signing up&lt;/p&gt;\\n&lt;/div&gt;"

// Step 13: JS sees the closing &#96;. Template literal ends.

// Step 14: The final string is stored in 'card'.
//          Notice: every newline you typed IS in the string. Every
//          space of indentation IS in the string. What you see is what
//          you got.</code></pre>
  `,

  /* --- Chunk 2: The Click --- */

  /* 2.0 Debugging clue */
  'topics-2-6-2-0': `
    <p>Multiline string bugs almost always fall into one of these patterns.</p>
    <p><strong>1. Unexpected indentation in the output.</strong> Your rendered string has 4 or 8 spaces at the start of every line you didn't put there. This means you indented the string's lines in the source (usually because the string is inside a function or block, and the editor auto-indented). Two fixes: either un-indent the lines in the source (ugly but simple), or use a helper to strip the leading whitespace after the fact.</p>
    <p><strong>2. Unexpected newline at the start or end.</strong> Your string begins with <code>\\n</code> or ends with one. This happens because you put the opening backtick on one line and started the content on the next line (or ended the content on one line and put the closing backtick on the next). The fix is to either restructure so the content starts right after the opening backtick, or use <code>.trim()</code> on the finished string.</p>
    <p><strong>3. Syntax error on a line that looks fine.</strong> You accidentally used <code>'</code> or <code>"</code> instead of backticks for a multiline string, and the parser threw an error because real newlines aren't allowed in those quote types. The fix is to switch the wrapper to backticks.</p>
    <p><strong>4. Line endings look different on different machines.</strong> This is rare but happens: your file was saved with <code>\\r\\n</code> line endings (common on Windows) and now every "line" in your string is really <code>\\r\\n</code>, not just <code>\\n</code>. This can break code that splits on <code>'\\n'</code> and expects clean results. Check your editor's line-ending setting; most modern editors default to <code>\\n</code>.</p>
  `,

  /* 2.1 The part that makes it click */
  'topics-2-6-2-1': `
    <p>A multiline backtick string is exactly what it looks like: whatever you type between the two backticks is what the string contains, character for character, including newlines and indentation. There is no magic — no auto-strip, no beautify, no smart trimming. If you type it, it's in the string. If you don't type it, it's not.</p>
    <p>Once you internalize that, the "indentation gotcha" stops being surprising. You're not writing a template that gets processed later — you're writing the string directly, and every character your fingers touched is part of the value. That's why "clean-looking source" often produces "messy output" — the leading spaces that make the source look aligned are the same leading spaces that end up at the start of every line in the string.</p>
  `,

  /* 2.2 Common confusions */
  'topics-2-6-2-2': `
    <p><strong>Confusion: "multiline backticks auto-strip indentation like some other languages"</strong></p>
    <p>They don't. Some languages have "heredoc" or "dedent" syntax that removes common leading whitespace. JavaScript's multiline backticks are the raw version — every space in the source is a space in the string. If you want automatic dedenting, you have to write a helper yourself or use a library.</p>

    <p><strong>Confusion: "<code>\\n</code> in the source and pressing Enter produce different strings"</strong></p>
    <p>They don't — they produce the identical character. The newline you get by pressing Enter is the same character as the one you get by writing <code>\\n</code> inside any string type. The only difference is where they're allowed: real Enter-newlines only work inside backticks; <code>\\n</code> escape sequences work in all three quote types.</p>
<pre class="language-javascript"><code class="language-javascript">const a = \`line one
line two\`;
const b = 'line one\\nline two';
a === b;   // true — identical strings, different source style</code></pre>

    <p><strong>Confusion: "the backtick multiline is a special string type that displays differently"</strong></p>
    <p>It's not. The result is a plain string. How it displays depends on <em>where</em> you display it. In an HTML page, <code>\\n</code> characters don't render as line breaks (HTML collapses whitespace) — you need <code>&lt;br&gt;</code> tags or CSS <code>white-space: pre</code>. In <code>console.log</code>, plain text areas, and text files, <code>\\n</code> does render as a line break.</p>

    <p><strong>Confusion: "multiline requires backticks even for the <code>\\n</code> escape"</strong></p>
    <p>Only real (Enter-key) newlines require backticks. The <code>\\n</code> escape works fine in single and double quotes. Both produce the same result — a newline character in the final string — the difference is only in how the source looks.</p>
  `,

  /* 2.3 Common mistakes */
  'topics-2-6-2-3': `
<pre class="language-javascript"><code class="language-javascript">// Unwanted indentation in the output
function makeCard() {
  return \`
    &lt;div&gt;
      &lt;h2&gt;Hello&lt;/h2&gt;
    &lt;/div&gt;
  \`;
}
// returned string starts with "\\n    &lt;div&gt;\\n      &lt;h2&gt;Hello&lt;/h2&gt;\\n    &lt;/div&gt;\\n  "
// the 4 and 6 spaces are baked into every line
// fix: unindent in the source (visually ugly but clean output):
function makeCard2() {
  return \`
&lt;div&gt;
  &lt;h2&gt;Hello&lt;/h2&gt;
&lt;/div&gt;
\`;
}</code></pre>

<pre class="language-javascript"><code class="language-javascript">// Unwanted leading newline
const message = \`
Hello World
\`;
// message === "\\nHello World\\n" — leading and trailing newlines
// fix: use .trim()
const clean = \`
Hello World
\`.trim();
// clean === "Hello World"</code></pre>

<pre class="language-javascript"><code class="language-javascript">// Real newline inside single or double quotes
const broken = &#39;line one
line two&#39;;
// wrong: SyntaxError — actual newlines not allowed in ' '
// fix: switch to backticks   → \`line one\\nline two\`
// fix: use \\n in single quote → 'line one\\nline two'</code></pre>

<pre class="language-javascript"><code class="language-javascript">// Expecting HTML to render \\n as a line break
element.innerHTML = \`Hello
World\`;
// HTML collapses whitespace — "Hello" and "World" appear on the same line
// fix: use &lt;br&gt; tags     → \`Hello&lt;br&gt;World\`
// fix: use CSS           → element.style.whiteSpace = 'pre';
// fix: use &lt;pre&gt; element → wrap the content in &lt;pre&gt;...&lt;/pre&gt;</code></pre>

<pre class="language-javascript"><code class="language-javascript">// Trying to visually align multiline content and getting weird output
const label = \`Name:  \${user.name}
Email: \${user.email}\`;
// works, but the alignment breaks if user.name is longer than expected
// fix: format each value to a fixed width, or use a template library</code></pre>

<pre class="language-javascript"><code class="language-javascript">// Escaping a literal backtick inside a multiline string
const code = \`use \\\` for template literals\`;
// works: the \\\` produces a literal backtick in the string
// wrong: writing an unescaped backtick would close the string early:
const bad = &#96;use &#96; for template literals&#96;;
// SyntaxError — the middle &#96; ends the string</code></pre>
  `,

  /* --- Chunk 3: In Practice --- */

  /* 3.0 Tiny examples */
  'topics-2-6-3-0': `
<pre class="language-javascript"><code class="language-javascript">// Basic multiline
const poem = \`roses are red
violets are blue\`;

poem.length;              // 28 — includes the newline
poem.split('\\n');         // ["roses are red", "violets are blue"]
poem === 'roses are red\\nviolets are blue';   // true

// With interpolation
const name = 'Os';
const greeting = \`Hello, \${name}
Welcome back!\`;

// Leading newline included
const a = \`
Hello\`;
a === '\\nHello';          // true

// Trimmed
const b = \`
Hello
\`.trim();
b === 'Hello';            // true

// Indentation is preserved
const c = \`  four leading spaces
    six leading spaces\`;
c;   // "  four leading spaces\\n    six leading spaces"

// Multiline still equals a single-quoted version with \\n
\`a
b\` === 'a\\nb';            // true</code></pre>
  `,

  /* 3.1 Real website uses */
  'topics-2-6-3-1': `
    <p><strong>Example: rendering an HTML card from data</strong></p>
<pre class="language-javascript"><code class="language-javascript">container.innerHTML = \`
&lt;article class="post"&gt;
  &lt;h2&gt;\${post.title}&lt;/h2&gt;
  &lt;p&gt;\${post.summary}&lt;/p&gt;
  &lt;a href="\${post.url}"&gt;Read more&lt;/a&gt;
&lt;/article&gt;
\`;</code></pre>

    <p><strong>Example: multi-line error message with context</strong></p>
<pre class="language-javascript"><code class="language-javascript">console.error(\`
Failed to save form:
  Field: \${fieldName}
  Value: \${value}
  Reason: \${reason}
\`);</code></pre>

    <p><strong>Example: SQL query composed in JavaScript</strong></p>
<pre class="language-javascript"><code class="language-javascript">const query = \`
  SELECT id, name, email
  FROM users
  WHERE created_at > '\${startDate}'
  ORDER BY name ASC
\`;</code></pre>

    <p><strong>Example: help text for a command-line tool</strong></p>
<pre class="language-javascript"><code class="language-javascript">const helpText = \`
Usage: build [options]

Options:
  -o, --output    Output directory
  -w, --watch     Rebuild on file changes
  -v, --version   Show version
\`;</code></pre>

    <p><strong>Example: rendering a preformatted block with &lt;pre&gt;</strong></p>
<pre class="language-javascript"><code class="language-javascript">codeBlock.innerHTML = \`
&lt;pre&gt;
  function greet() {
    return 'hello';
  }
&lt;/pre&gt;
\`;</code></pre>
  `,

  /* 3.2 Connects to */
  'topics-2-6-3-2': `
    <ul>
      <li><strong>Backticks</strong> → the only wrapper that supports real line breaks in the source</li>
      <li><strong><code>\${}</code> interpolation</strong> → works inside multiline strings the same as single-line ones</li>
      <li><strong>Escape characters</strong> → <code>\\n</code> is the character multiline backticks produce; both approaches produce the same string</li>
      <li><strong>String methods</strong> → <code>.trim()</code>, <code>.split('\\n')</code>, <code>.replace()</code> are common cleanups for multiline strings</li>
      <li><strong>HTML rendering</strong> → <code>\\n</code> in a string doesn't render as a line break in HTML; use <code>&lt;br&gt;</code> or CSS <code>white-space: pre</code></li>
      <li><strong>Building HTML strings</strong> → multiline backticks are the standard tool for readable HTML fragments</li>
      <li><strong>Debugging</strong> → unwanted indentation and leading newlines are the two most common multiline bugs</li>
      <li><strong>Line endings</strong> → most editors save as <code>\\n</code>, but Windows files sometimes save as <code>\\r\\n</code></li>
    </ul>
  `,

  /* 3.3 See also */
  'topics-2-6-3-3': `
    <ul>
      <li>Backticks \`hello\`</li>
      <li><code>\${}</code> interpolation</li>
      <li>Escape characters</li>
      <li>Common string mistakes</li>
      <li>Debugging strings</li>
      <li>Building HTML strings in JavaScript</li>
      <li>String methods (trim, split, replace)</li>
    </ul>
  `,

});