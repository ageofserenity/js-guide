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

  /* ===== Sub-lesson: 3.3.8 Strings → escape characters =====
     Path: topics-2-7-{chunkIndex}-{pieceIndex}
  */

  /* --- Chunk 0: What & How --- */

  /* 0.0 What it is */
  'topics-2-7-0-0': `
    <p>An <strong>escape character</strong> is a backslash <code>\\</code> in front of another character inside a string. The backslash tells JavaScript "the next character isn't playing its normal role — treat it specially." Escapes exist because some characters have double duty: <code>'</code> normally ends a single-quoted string, but sometimes you want a literal apostrophe as content. <code>\\n</code> normally represents a newline character, but the letter <code>n</code> by itself is just a letter. The backslash is how you switch between those meanings.</p>
    <p>The full set of escapes falls into two groups. The first group lets you include a character that would otherwise conflict with the wrapper — <code>\\'</code> for a literal single quote inside a single-quoted string, <code>\\"</code> for a literal double quote inside a double-quoted string, <code>\\\`</code> for a literal backtick inside a backtick string, and <code>\\\\</code> for a literal backslash itself. The second group lets you include invisible or control characters that you can't type directly — <code>\\n</code> for newline, <code>\\t</code> for tab, and a few others.</p>
  `,

  /* 0.1 Syntax */
  'topics-2-7-0-1': `
<pre class="language-javascript"><code class="language-javascript">// Escape a quote that would otherwise close the string:
'don\\'t';              // → "don't"
"she said \\"hi\\"";      // → 'she said "hi"'
\`use \\\` character\`;     // → "use \` character"

// Escape a literal backslash (needed because \\ is the escape character itself):
'C:\\\\Users\\\\Os';        // → "C:\\Users\\Os"

// Include a newline character in any quote type:
'line one\\nline two';   // → "line one" + newline + "line two"
"first\\nsecond";        // → "first" + newline + "second"

// Include a tab character:
'name\\tvalue';          // → "name" + tab + "value"

// Escape a literal \${ inside a backtick to prevent interpolation:
\`use \\\${name} here\`;    // → "use \${name} here"

// The full list of common escapes:
'\\'';    // single quote — literal '
"\\"";    // double quote — literal "
\`\\\`\`;    // backtick — literal \`
'\\\\';    // backslash — literal \\
'\\n';    // newline
'\\t';    // tab
'\\r';    // carriage return (rare — mostly for legacy Windows files)
'\\0';    // null character (rare — legacy interop)</code></pre>
  `,

  /* 0.2 Anatomy / Breakdown */
  'topics-2-7-0-2': `
<pre class="language-javascript"><code class="language-javascript">const s = 'don\\'t';

// Character by character, what's in the source:
//   '   d   o   n   \\   '   t   '
//   1   2   3   4   5   6   7   8
//
// What JS reads:
//   1. Opening ' — string starts
//   2. d — literal character
//   3. o — literal character
//   4. n — literal character
//   5. \\ — escape marker: "next character is literal, not a delimiter"
//   6. ' — because of the escape, this is treated as a literal apostrophe,
//         NOT the closing delimiter
//   7. t — literal character
//   8. ' — closing delimiter, string ends
//
// What's stored:
//   d o n ' t   (5 characters — the \\ is NOT part of the string)
//
// s.length;   // 5
// s;          // "don't"

// Key insight: the backslash disappears. It's an instruction to the parser,
// not a character in the final value. Same rule for every escape:
//   '\\n' is stored as a single newline character (1 character, not 2).
//   '\\\\' is stored as a single backslash (1 character, not 2).
//   '\\''  is stored as a single apostrophe (1 character, not 2).</code></pre>
  `,

  /* 0.3 Syntax Details That Matter */
  'topics-2-7-0-3': `
    <p><strong>The backslash disappears from the stored string.</strong> This is the rule you have to internalize: <code>\\n</code> in your source code is one character (a newline) in the string, not two. <code>\\\\</code> in your source code is one character (a backslash) in the string, not two. The escape sequence is source code punctuation that tells the parser how to interpret the next character — once the string is built, the backslash is gone.</p>
<pre class="language-javascript"><code class="language-javascript">'\\n'.length;      // 1 — one newline character
'\\t'.length;      // 1 — one tab character
'\\\\'.length;      // 1 — one backslash character
'\\''.length;      // 1 — one apostrophe
'a\\nb'.length;    // 3 — a, newline, b
'C:\\\\Os'.length;  // 5 — C, :, \\, O, s</code></pre>

    <p><strong>You only need to escape the character that matches your wrapper.</strong> Inside single quotes, the dangerous character is <code>'</code> — everything else is safe. Inside double quotes, only <code>"</code> is dangerous. Inside backticks, only <code>\`</code> and <code>\${</code> are dangerous. The other quote types are always safe as content and don't need escaping.</p>
<pre class="language-javascript"><code class="language-javascript">'she said "hi"';    // ✓ no escaping needed — " is safe in ' '
"don't forget";     // ✓ no escaping needed — ' is safe in " "
\`both "and" 'work'\`; // ✓ neither needs escaping in \` \`

// The escape is only required when the character matches the wrapper:
'don\\'t forget';   // required — inner ' would close the string
"she said \\"hi\\""; // required — inner " would close the string
\`use \\\` here\`;    // required — inner \` would close the string</code></pre>

    <p><strong>Backslash is the escape character, so a literal backslash requires escaping too.</strong> If you want the character <code>\\</code> in your string, you write <code>\\\\</code>. This is the source of some of the ugliest-looking strings in JavaScript — Windows file paths, for example, look like <code>'C:\\\\Users\\\\Os\\\\Documents'</code> because every real backslash needs to be doubled.</p>

    <p><strong>Most escape sequences work identically in all three quote types.</strong> <code>\\n</code>, <code>\\t</code>, <code>\\\\</code> produce the same character no matter which wrapper you use. The only wrapper-specific escape is the one for the matching delimiter (<code>\\'</code>, <code>\\"</code>, <code>\\\`</code>) and, inside backticks, <code>\\\${</code> to prevent interpolation.</p>
<pre class="language-javascript"><code class="language-javascript">'a\\nb' === "a\\nb";    // true — same character in the string
'a\\nb' === \`a\\nb\`;    // true — same character in the string
'\\\\' === "\\\\";        // true — same single backslash</code></pre>

    <p><strong>Escaping is the fallback; switching wrappers is usually cleaner.</strong> If your text contains an apostrophe, switching from single to double quotes is almost always more readable than escaping. Escaping is what you reach for when switching wrappers isn't possible — for example, when both <code>'</code> and <code>"</code> appear in the same string, or when your linter enforces a specific wrapper style.</p>
<pre class="language-javascript"><code class="language-javascript">// Ugly with escapes:
const a = 'It\\'s a "great" day';
// Cleaner with backticks (no escapes needed):
const b = \`It's a "great" day\`;</code></pre>
  `,

  /* --- Chunk 1: Why & When --- */

  /* 1.0 What problem it solves */
  'topics-2-7-1-0': `
    <p>Strings need delimiters — punctuation that marks where the text starts and ends. But delimiters are just characters, and those same characters can legitimately appear inside your text. The word "don't" contains an apostrophe. The sentence "She said 'hi'" contains both a double quote and a single quote. Without a way to signal "this apostrophe is content, not the end of the string," you'd be stuck — either you can never include your delimiter character in your text, or you need a system to disambiguate.</p>
    <p>Escape characters are that disambiguation system. The backslash marks a specific character as "content" instead of "delimiter." This lets you use any character in your string, regardless of which quote type you chose as the wrapper. Escapes also solve the second problem of representing invisible characters — you can't type a real newline into a single-quoted string (that would be a syntax error), but <code>\\n</code> works fine. Same for tabs and other control characters that don't have a printable form.</p>
  `,

  /* 1.1 Why use it */
  'topics-2-7-1-1': `
    <p>Reach for escape characters when switching your wrapper isn't practical. The most common case: a string contains both single and double quotes, so no matter which wrapper you pick, one of them needs escaping. Another common case: your codebase enforces a specific quote style via a linter, so switching wrappers would trigger a rule violation. In both situations, escaping is the right tool.</p>
    <p>You also need escapes for characters you can't type directly. <code>\\n</code> for newline is the biggest one — writing multi-line strings without real Enter-key line breaks is a very common need. <code>\\t</code> for tab shows up in formatted output. <code>\\\\</code> for literal backslash shows up in Windows file paths and regular expressions. These aren't optional stylistic choices; they're the only way to include those characters in a string.</p>
    <p>The general rule: if you can switch wrappers to avoid escaping, that's usually cleaner. If you can't switch, or the escape is for a character that has no other representation (newlines, tabs, backslashes), use the escape. Don't fight the tool — escapes exist for a reason and are the right answer in specific situations.</p>
  `,

  /* 1.2 Where you use it */
  'topics-2-7-1-2': `
<pre class="language-javascript"><code class="language-javascript">// Windows file paths — backslash is the path separator
const path = 'C:\\\\Users\\\\Os\\\\Documents\\\\notes.txt';

// Regular expressions passed as strings (double-escaped)
const re = new RegExp('\\\\d+');   // matches one or more digits

// Formatted output with tabs for alignment
console.log('Name\\tAge\\tRole');
console.log('Os\\t30\\tDev');
// Name    Age    Role
// Os      30     Dev

// Multi-line strings without using backticks
const message = 'Line one\\nLine two\\nLine three';

// Strings that need to contain a literal apostrophe when locked to single quotes
// (usually because of a style guide or linter rule)
const label = 'It\\'s active';

// Strings that contain both ' and " — either wrapper needs one escape
const quote = 'She said "don\\'t forget"';   // ' wrapper, escape the '
const quote2 = "She said \\"don't forget\\""; // " wrapper, escape the "
const quote3 = \`She said "don't forget"\`;   // \` wrapper, no escapes needed

// Preventing interpolation inside a backtick string
const help = \`Use \\\${name} for interpolation\`;
// stored: "Use \${name} for interpolation"

// Literal backticks inside a backtick string
const example = \`Wrap text in \\\` for a template literal\`;

// Anywhere a specific character has to appear in the string but would
// otherwise conflict with the wrapper or the parser.</code></pre>
  `,

  /* 1.3 Plain English explanation */
  'topics-2-7-1-3': `
    <p>Imagine you're writing a note where you need to draw a period, but pen ink is used for both drawing periods and marking the end of a sentence. If you draw a period in the middle of your sentence, the reader thinks the sentence ended there. To avoid the confusion, you invent a system: whenever you want the reader to see a literal period, you put a tiny star just before it. The star means "this next mark is a picture, not a sentence-ender."</p>
    <p>That's exactly what a backslash does in a string. The backslash is the tiny star. It tells JavaScript "the next character is content, not punctuation." So <code>\\'</code> means "this apostrophe is a picture, not a string-ender." <code>\\n</code> means "the letter n after this backslash isn't really the letter n — it's my way of drawing a newline that I can't otherwise type."</p>
    <p>Once you internalize that a backslash is a signal to change how the next character is read, the whole escape system stops feeling like a random collection of codes and starts feeling like a consistent grammar: <em>backslash plus something = interpret that something specially.</em></p>
  `,

  /* 1.4 Mental model */
  'topics-2-7-1-4': `
    <p>The JavaScript parser reads your source code character by character. When it's inside a string and hits a backslash, it flips into "next character is special" mode for exactly one character. Then it looks at what came next and does one of two things: either it converts the pair into a specific character in the output (like <code>\\n</code> → newline, <code>\\t</code> → tab), or it treats the second character as literal content that would otherwise have had a special meaning (like <code>\\'</code> → literal apostrophe, <code>\\\\</code> → literal backslash).</p>
    <p>Either way, the backslash itself is consumed. It doesn't end up in the string. It was an instruction, not data. This is why <code>'a\\nb'.length</code> is 3, not 4 — the backslash and the n together represent one character (the newline), and that's what gets stored.</p>
    <p>This model also explains why escape sequences are so precise about what they do. <code>\\a</code> isn't a standard escape in JavaScript, so what happens? Different languages handle unknown escapes differently — in JavaScript, an unknown escape is silently ignored: <code>'\\a'</code> just becomes <code>'a'</code>. The backslash was consumed as an escape marker, but since <code>\\a</code> means nothing, only the <code>a</code> survives. This is worth knowing because it means typos in escape sequences fail silently rather than loudly.</p>
  `,

  /* 1.5 Step-by-step walkthrough */
  'topics-2-7-1-5': `
<pre class="language-javascript"><code class="language-javascript">// Scenario: you're storing a file path that contains backslashes,
// an apostrophe in a name, and you want tab-separated output.

const info = 'File:\\tC:\\\\Os\\'s Docs\\\\notes.txt';

// What JS does when it reads that line:

// Step 1: JS sees the opening '. String starts. Enter "capture text" mode.

// Step 2: JS captures F, i, l, e, : — five literal characters.
//         Output so far: "File:"

// Step 3: JS sees \\. Escape marker — check the next character.

// Step 4: JS sees t. Combined with \\ → tab character.
//         The pair \\t is consumed. One tab character is added.
//         Output so far: "File:\\t"  (where \\t is one character)

// Step 5: JS sees C, :, — two more literal characters.
//         Output so far: "File:\\tC:"

// Step 6: JS sees \\. Escape marker.

// Step 7: JS sees \\. Combined with the first \\ → literal backslash.
//         One backslash character is added.
//         Output so far: "File:\\tC:\\"  (one backslash at the end)

// Step 8: JS captures O, s.
//         Output so far: "File:\\tC:\\Os"

// Step 9: JS sees \\. Escape marker.

// Step 10: JS sees '. Combined with \\ → literal apostrophe.
//          The apostrophe is treated as content, NOT as the closing delimiter.
//          Output so far: "File:\\tC:\\Os'"

// Step 11: JS captures s, (space), D, o, c, s.
//          Output so far: "File:\\tC:\\Os's Docs"

// Step 12: JS sees \\. Escape marker.

// Step 13: JS sees \\. Combined → another literal backslash.
//          Output so far: "File:\\tC:\\Os's Docs\\"

// Step 14: JS captures n, o, t, e, s, ., t, x, t.
//          Output so far: "File:\\tC:\\Os's Docs\\notes.txt"

// Step 15: JS sees '. NOT preceded by a backslash — this is the closing
//          delimiter. String ends.

// The stored string is 29 characters. When console.log'd:
//   File:   C:\\Os's Docs\\notes.txt
// (a real tab between "File:" and "C:", real backslashes, real apostrophe)</code></pre>
  `,

  /* --- Chunk 2: The Click --- */

  /* 2.0 Debugging clue */
  'topics-2-7-2-0': `
    <p>Escape-related bugs have a few classic shapes.</p>
    <p><strong>1. Unexpected string termination.</strong> Your string ends earlier than you meant it to, and the parser errors on whatever came after. Almost always caused by a delimiter character (<code>'</code>, <code>"</code>, or <code>\`</code>) inside the string that you forgot to escape. Fix: either add the escape (<code>\\'</code>, <code>\\"</code>, <code>\\\`</code>) or switch to a wrapper that doesn't conflict.</p>
    <p><strong>2. Backslash appears in the output when you didn't want it.</strong> You wrote <code>'C:\\Users'</code> but the output is <code>'C:Users'</code> — the backslash disappeared. This is because <code>\\U</code> isn't a valid escape, so the backslash was consumed but produced nothing extra. Fix: use <code>\\\\</code> to include a literal backslash.</p>
    <p><strong>3. Backslash appears in the output when you thought <code>\\n</code> would be a newline.</strong> You wrote <code>'a\\\\nb'</code> expecting <code>a</code> then newline then <code>b</code>, but you got the literal text <code>a\\nb</code>. This is because <code>\\\\</code> means "literal backslash" — the first backslash escaped the second, so the string contains a real backslash followed by the letter n. Fix: use single <code>\\n</code> for a newline.</p>
    <p><strong>4. Escape sequence silently ignored.</strong> You typed <code>'\\p'</code> or <code>'\\g'</code> or some other unknown escape, and the string just contains <code>p</code> or <code>g</code> with no error. This is a language quirk — unknown escapes drop the backslash silently. Fix: double-check which escapes are actually valid before assuming a letter means something special.</p>
    <p><strong>5. Confusion between escape codes and HTML entities.</strong> <code>\\n</code> is a JavaScript string escape (one newline character). <code>&lt;br&gt;</code> and <code>&amp;#10;</code> are HTML markup for line breaks. They live in different systems — if you put <code>\\n</code> into <code>innerHTML</code>, the browser won't render it as a line break because HTML doesn't process JavaScript escapes.</p>
  `,

  /* 2.1 The part that makes it click */
  'topics-2-7-2-1': `
    <p>A backslash is an instruction to the parser, not a character in your string. It says "the next character is special — either it's a control character in disguise, or it's a literal that would otherwise conflict with the string's punctuation." Once you internalize that, three things become obvious. First, the backslash disappears from the output because it was punctuation, not content. Second, escaping only matters for characters that would otherwise conflict — everything else is safe as-is. Third, if you want a literal backslash, you have to escape the backslash itself, which is why Windows paths look ugly.</p>
    <p>The other thing that clicks: escaping is a fallback, not the default. For most strings, you'll pick a wrapper that avoids the collision and never need to escape anything. Escapes come out when you're stuck with a specific wrapper or when you need a character that has no other representation (newlines, tabs, literal backslashes).</p>
  `,

  /* 2.2 Common confusions */
  'topics-2-7-2-2': `
    <p><strong>Confusion: "<code>\\n</code> is two characters"</strong></p>
    <p>It's one character in the stored string — the newline character. It's written as two characters in the source code (a backslash followed by an n), but that's an instruction to the parser, not data.</p>
<pre class="language-javascript"><code class="language-javascript">'\\n'.length;   // 1, not 2
'\\n' === String.fromCharCode(10);   // true — same character</code></pre>

    <p><strong>Confusion: "I need to escape apostrophes inside double quotes"</strong></p>
    <p>You don't. Apostrophes are only dangerous inside single-quoted strings. Inside double quotes or backticks, they're just content.</p>
<pre class="language-javascript"><code class="language-javascript">"don't forget";      // ✓ works, no escape needed
'don\\'t forget';     // ✓ works — escape needed because ' is the wrapper
\`don't forget\`;      // ✓ works, no escape needed</code></pre>

    <p><strong>Confusion: "backslashes work like in shell scripts / like in printf"</strong></p>
    <p>Mostly, but not exactly. JavaScript's escape set is smaller than shell or C's printf — no <code>\\a</code> (bell), no <code>\\v</code> (vertical tab) in common use, no <code>\\e</code> (escape). The core set (<code>\\n</code>, <code>\\t</code>, <code>\\r</code>, <code>\\\\</code>, <code>\\'</code>, <code>\\"</code>) is the same, but don't assume every escape from another language works.</p>

    <p><strong>Confusion: "unknown escapes throw errors"</strong></p>
    <p>They don't — they silently strip the backslash and keep the letter. <code>'\\a'</code> is just <code>'a'</code>. This is a source of subtle bugs when you assume a letter has a special meaning.</p>
<pre class="language-javascript"><code class="language-javascript">'\\a' === 'a';    // true — the \\ was consumed, produced nothing
'\\p' === 'p';    // true — same behavior
'\\z' === 'z';    // true — same behavior</code></pre>

    <p><strong>Confusion: "escaping a character makes it special"</strong></p>
    <p>Backwards. Escaping a special character makes it literal (not special). Escaping an already-literal character (or a letter that doesn't have a defined escape) usually does nothing — the backslash is dropped, the letter stays.</p>

    <p><strong>Confusion: "HTML entities and JS escapes are interchangeable"</strong></p>
    <p>They're not. <code>\\n</code> is a JS escape — it works when the string is being built by JavaScript. <code>&amp;#10;</code> is an HTML entity — it works when the browser is parsing HTML text. They live at different layers and only apply in their own contexts.</p>
  `,

  /* 2.3 Common mistakes */
  'topics-2-7-2-3': `
<pre class="language-javascript"><code class="language-javascript">// Forgetting to escape a matching quote
const msg = &#39;don&#39;t forget&#39;;
// wrong: the middle ' closes the string → SyntaxError
// fix: escape it       → 'don\\'t forget'
// fix: switch wrapper  → "don't forget"</code></pre>

<pre class="language-javascript"><code class="language-javascript">// Single backslash where you meant a literal backslash
const path = 'C:\\Users\\Os';
// wrong: \\U and \\O aren't valid escapes, so the \\ silently disappears
// stored: "C:UsersOs" — no backslashes at all
// fix: double each one → 'C:\\\\Users\\\\Os'</code></pre>

<pre class="language-javascript"><code class="language-javascript">// Double backslash where you wanted a newline
const s = 'first\\\\nsecond';
// wrong: \\\\ is a literal backslash, then n is the letter n
// stored: "first\\nsecond" — a backslash followed by the letter n, no newline
// fix: use single \\ → 'first\\nsecond'</code></pre>

<pre class="language-javascript"><code class="language-javascript">// Expecting an unknown escape to do something
const s = 'hello\\aworld';
// wrong: \\a isn't a valid escape — the \\ is silently dropped
// stored: "helloaworld" — no bell character, no error
// fix: check the list of valid escapes before assuming a letter is special</code></pre>

<pre class="language-javascript"><code class="language-javascript">// Trying to escape inside HTML markup
element.innerHTML = 'line one\\nline two';
// wrong: HTML doesn't render \\n as a line break — the string DOES contain
//        a newline, but HTML collapses whitespace when displayed
// fix: use &lt;br&gt; for line breaks in HTML
//      → 'line one&lt;br&gt;line two'
// fix: use CSS 'white-space: pre' on the element</code></pre>

<pre class="language-javascript"><code class="language-javascript">// Escaping where switching would be cleaner
const s = 'It\\'s a "great" day';
// works, but ugly with the mixed escapes and quotes
// fix: use backticks → \`It's a "great" day\`  (no escapes at all)</code></pre>

<pre class="language-javascript"><code class="language-javascript">// Forgetting to escape a backtick inside a backtick string
const bad = &#96;use &#96; character&#96;;
// wrong: the middle &#96; closes the template literal early
// fix: escape it → \`use \\\` character\`</code></pre>

<pre class="language-javascript"><code class="language-javascript">// Forgetting to escape \${ when you want the literal text
const help = \`Use \${name} for interpolation\`;
// wrong: JS tries to interpolate a variable called 'name'
// fix: escape the $ → \`Use \\\${name} for interpolation\`</code></pre>
  `,

  /* --- Chunk 3: In Practice --- */

  /* 3.0 Tiny examples */
  'topics-2-7-3-0': `
<pre class="language-javascript"><code class="language-javascript">// Quote-matching escapes
'don\\'t';           // "don't"
"say \\"hi\\"";       // 'say "hi"'
\`use \\\` here\`;      // "use \` here"

// Backslash and control characters
'\\\\';              // "\\"  (one backslash)
'\\n';              // one newline character
'\\t';              // one tab character
'a\\nb'.length;     // 3
'\\\\'.length;       // 1

// Windows-style path
'C:\\\\Users\\\\Os';   // "C:\\Users\\Os"

// Tab-formatted output
console.log('Name\\tRole\\nOs\\tDev');
// Name    Role
// Os      Dev

// Backtick + interpolation escape
\`literal: \\\${name}\`;  // "literal: \${name}"

// Same escape works across wrappers
'a\\nb' === "a\\nb";    // true
'a\\nb' === \`a\\nb\`;    // true

// Unknown escapes silently drop the backslash
'\\z' === 'z';          // true
'\\q' === 'q';          // true</code></pre>
  `,

  /* 3.1 Real website uses */
  'topics-2-7-3-1': `
    <p><strong>Example: displaying a Windows file path in a message</strong></p>
<pre class="language-javascript"><code class="language-javascript">const path = 'C:\\\\Users\\\\Os\\\\config.json';
console.log(\`Config loaded from \${path}\`);</code></pre>

    <p><strong>Example: tab-formatted output in the console</strong></p>
<pre class="language-javascript"><code class="language-javascript">console.log('Metric\\tValue');
console.log('Users\\t' + userCount);
console.log('Sales\\t' + salesTotal);</code></pre>

    <p><strong>Example: multi-line string using <code>\\n</code> instead of a backtick</strong></p>
<pre class="language-javascript"><code class="language-javascript">const summary = 'Order confirmed.\\nYou will receive an email shortly.';
alert(summary);</code></pre>

    <p><strong>Example: showing a regex source in help text</strong></p>
<pre class="language-javascript"><code class="language-javascript">helpText.textContent = 'Password must match \\\\d+ (at least one digit).';</code></pre>

    <p><strong>Example: building a CSV row (comma-separated with escaped quotes)</strong></p>
<pre class="language-javascript"><code class="language-javascript">const row = '"' + name.replace(/"/g, '\\\\"') + '","' + role + '"';</code></pre>

    <p><strong>Example: documentation string that describes interpolation itself</strong></p>
<pre class="language-javascript"><code class="language-javascript">docs.textContent = \`Use \\\${variable} inside backtick strings for interpolation.\`;</code></pre>
  `,

  /* 3.2 Connects to */
  'topics-2-7-3-2': `
    <ul>
      <li><strong>Single quotes</strong> → escape <code>\\'</code> when apostrophe is inside; other quote chars are safe</li>
      <li><strong>Double quotes</strong> → escape <code>\\"</code> when double quote is inside; other quote chars are safe</li>
      <li><strong>Backticks</strong> → escape <code>\\\`</code> and <code>\\\${</code> when literal backtick or literal <code>\${</code> is inside</li>
      <li><strong>When each quote type matters</strong> → escapes are the fallback when switching wrappers isn't possible</li>
      <li><strong>Multiline strings</strong> → <code>\\n</code> is the escape for a newline; equivalent to pressing Enter inside backticks</li>
      <li><strong>Regular expressions</strong> → regex strings often contain <code>\\d</code>, <code>\\w</code>, <code>\\s</code> — these need double-escaping when written as strings</li>
      <li><strong>File paths</strong> → Windows paths use backslashes, which must be doubled as <code>\\\\</code></li>
      <li><strong>HTML rendering</strong> → JS escapes don't help with HTML display; use HTML entities like <code>&lt;br&gt;</code> for HTML-specific formatting</li>
      <li><strong>Debugging</strong> → silent unknown-escape bugs are the trickiest; <code>\\p</code> becoming <code>p</code> with no warning surprises people</li>
    </ul>
  `,

  /* 3.3 See also */
  'topics-2-7-3-3': `
    <ul>
      <li>Single quotes 'hello'</li>
      <li>Double quotes "hello"</li>
      <li>Backticks \`hello\`</li>
      <li>Multiline strings with backticks</li>
      <li><code>\${}</code> interpolation</li>
      <li>Common string mistakes</li>
      <li>Debugging strings</li>
      <li>Regular expressions</li>
    </ul>
  `,

    /* ===== Sub-lesson: 3.3.9 Strings → string + string concatenation =====
     Path: topics-2-8-{chunkIndex}-{pieceIndex}
  */

  /* --- Chunk 0: What & How --- */

  /* 0.0 What it is */
  'topics-2-8-0-0': `
    <p><strong>String concatenation</strong> is joining two or more strings into one bigger string using the <code>+</code> operator. It's the oldest way to combine strings in JavaScript — older than backticks, older than interpolation, older than most modern string features. It still works exactly the same as it always did: <code>'hello' + ' ' + 'world'</code> produces <code>'hello world'</code>, one string built from smaller pieces.</p>
    <p>The plus operator does double duty in JavaScript. When both sides are numbers, it adds them: <code>5 + 3</code> is <code>8</code>. When either side is a string, it concatenates: <code>'5' + 3</code> is <code>'53'</code>. This dual behavior is convenient in most cases but is also the source of some of JavaScript's classic beginner surprises. Understanding when <code>+</code> means "add" versus when it means "join" is a small but important piece of knowing the language.</p>
  `,

  /* 0.1 Syntax */
  'topics-2-8-0-1': `
<pre class="language-javascript"><code class="language-javascript">// The basic shape — two strings joined by +:
'hello' + 'world';        // "helloworld"
'hello' + ' ' + 'world';  // "hello world"

// Assigning the result to a variable
const first = 'Os';
const last = 'Dev';
const full = first + ' ' + last;   // "Os Dev"

// Concatenating variables and literals in any order
const name = 'Os';
'Hello, ' + name + '!';   // "Hello, Os!"
name + ' says hi';        // "Os says hi"

// Building up a string across multiple lines of code
let greeting = 'Hello';
greeting = greeting + ', ' + name;
greeting = greeting + '!';
// greeting is now "Hello, Os!"

// The += shorthand — same result, less typing
let msg = 'Hello';
msg += ', ' + name;   // same as msg = msg + ', ' + name
msg += '!';           // same as msg = msg + '!'

// Mixing strings and numbers — number becomes a string
'Score: ' + 100;      // "Score: 100"
100 + ' points';      // "100 points"

// The gotcha — + with numbers only stays numeric
5 + 3;                // 8 (number)
'5' + 3;              // "53" (string — 3 got coerced)
5 + '3';              // "53" (string — 5 got coerced)
5 + 3 + '';           // "8" (5+3 is 8, then + "" makes it a string)
'' + 5 + 3;           // "53" (first + coerces 5 to string, then joins 3)</code></pre>
  `,

  /* 0.2 Anatomy / Breakdown */
  'topics-2-8-0-2': `
<pre class="language-javascript"><code class="language-javascript">const name = 'Os';
const greeting = 'Hello, ' + name + '!';

// Step by step, what the + operators do:
//
//   'Hello, ' + name + '!'
//    │         │  │  │  │
//    │         │  │  │  └── string literal "!"
//    │         │  │  └───── second + operator
//    │         │  └──────── variable, value "Os"
//    │         └─────────── first + operator
//    └───────────────────── string literal "Hello, "
//
// JS evaluates left to right:
//
//   1. 'Hello, ' + name
//      Both operands are strings ('Hello, ' and "Os").
//      Result: "Hello, Os"
//
//   2. "Hello, Os" + '!'
//      Both operands are strings again.
//      Result: "Hello, Os!"
//
// The final string is stored in greeting. Each + created a new string —
// strings in JavaScript are immutable, so concatenation always makes a
// new string rather than modifying an existing one.

greeting;   // "Hello, Os!"
greeting.length;   // 10</code></pre>
  `,

  /* 0.3 Syntax Details That Matter */
  'topics-2-8-0-3': `
    <p><strong>The <code>+</code> operator is left-associative and evaluates one pair at a time.</strong> <code>'a' + 'b' + 'c'</code> is evaluated as <code>('a' + 'b') + 'c'</code> — first concatenate <code>'a'</code> and <code>'b'</code> into <code>'ab'</code>, then concatenate <code>'ab'</code> and <code>'c'</code> into <code>'abc'</code>. This left-to-right rule is important when mixing strings and numbers, because it decides which side "wins" first.</p>
<pre class="language-javascript"><code class="language-javascript">1 + 2 + '3';   // "33" — (1+2)=3, then 3+'3'='33'
'1' + 2 + 3;   // "123" — '1'+2='12', then '12'+3='123'

// Once + hits a string, everything after becomes string concatenation.
// Order matters here — reversing the operands can change the result.</code></pre>

    <p><strong>Any non-string value is coerced to a string when concatenated with one.</strong> Numbers become their string form. Booleans become <code>"true"</code> or <code>"false"</code>. Arrays become their comma-joined values. Objects become <code>"[object Object]"</code>, which is almost never useful. <code>null</code> becomes <code>"null"</code>. <code>undefined</code> becomes <code>"undefined"</code>.</p>
<pre class="language-javascript"><code class="language-javascript">'x = ' + 5;              // "x = 5"
'flag = ' + true;        // "flag = true"
'items = ' + [1, 2, 3];  // "items = 1,2,3"
'user = ' + { name: 'Os' }; // "user = [object Object]" — usually not what you want
'val = ' + null;         // "val = null"
'val = ' + undefined;    // "val = undefined"</code></pre>

    <p><strong>Strings are immutable — concatenation always creates a new string.</strong> When you write <code>a + b</code>, JavaScript builds a fresh string in memory containing the joined characters. The original <code>a</code> and <code>b</code> are unchanged. This matters for performance in loops (see chunk 2.2), but for everyday concatenation it's invisible — the language handles the allocation for you.</p>

    <p><strong>The <code>+=</code> operator is shorthand for "concatenate onto and reassign."</strong> <code>msg += 'x'</code> is exactly the same as <code>msg = msg + 'x'</code>. It's not a special mutation — it still creates a new string and rebinds the variable to point at the new one. It's just less typing.</p>
<pre class="language-javascript"><code class="language-javascript">let msg = 'a';
msg += 'b';   // msg is now "ab" — a new string, msg rebound
msg += 'c';   // msg is now "abc" — another new string

// Note: += requires the variable to be declared with let or var, not const,
// because it reassigns the variable.
const x = 'a';
x += 'b';   // TypeError — can't reassign a const</code></pre>

    <p><strong>Empty strings can be used to force number-to-string coercion.</strong> A common trick: <code>'' + someNumber</code> converts a number to its string form. This is one of several ways to do the conversion — <code>String(n)</code> and <code>n.toString()</code> are the more explicit alternatives.</p>
<pre class="language-javascript"><code class="language-javascript">const n = 42;
const s1 = '' + n;         // "42"
const s2 = String(n);      // "42" — more explicit
const s3 = n.toString();   // "42" — method form
// All three produce the same string. Pick the most readable for your context.</code></pre>
  `,

  /* --- Chunk 1: Why & When --- */

  /* 1.0 What problem it solves */
  'topics-2-8-1-0': `
    <p>The most basic problem: you have text pieces and you need one combined string. A greeting like <code>"Hello, " + name</code>. A URL like <code>"/api/users/" + id</code>. A message like <code>"You have " + count + " messages"</code>. Any time the string you want isn't a single literal — it involves a variable, a computed value, or two pieces joined together — you need some way to combine them.</p>
    <p>Before backticks and interpolation existed (before 2015), concatenation was the only way to do this. Every string built from a variable used <code>+</code>. Every URL, every error message, every dynamic label. This is why so much older JavaScript code is full of <code>+</code> operators — it wasn't a stylistic choice, it was the only tool available. Modern interpolation replaces most of those uses, but concatenation is still the fundamental operation happening underneath (interpolation is essentially concatenation with nicer syntax).</p>
  `,

  /* 1.1 Why use it */
  'topics-2-8-1-1': `
    <p>Concatenation is still the right choice in a few specific situations. When you're building a string one piece at a time in a loop, <code>+=</code> is often the clearest tool — you're literally adding pieces to a growing result. When you're joining just two strings and interpolation would be overkill (<code>prefix + name</code>), plain <code>+</code> is fine and reads well. When you're working in an older codebase that predates template literals, matching the existing style keeps the code consistent.</p>
    <p>For anything more than two or three variables, though, template literals are almost always more readable than concatenation. A line like <code>"Hello, " + firstName + " " + lastName + "! You have " + count + " messages."</code> requires your brain to reassemble the sentence from fragments. The equivalent template literal — <code>\`Hello, \${firstName} \${lastName}! You have \${count} messages.\`</code> — reads left-to-right as the final sentence. New code should default to interpolation and reach for concatenation only when it's clearly simpler.</p>
    <p>Understanding concatenation also matters because you'll read older code that uses it constantly, and because interpolation is really just concatenation dressed up. Knowing how <code>+</code> handles mixed types (especially string + number coercion) prevents a whole category of bugs where you get unexpected string output or unexpected numeric addition.</p>
  `,

  /* 1.2 Where you use it */
  'topics-2-8-1-2': `
<pre class="language-javascript"><code class="language-javascript">// Simple two-piece joins — concatenation is fine here
const url = baseUrl + '/api/users';
const fileName = name + '.txt';
const label = prefix + value;

// Building a string in a loop by appending
let output = '';
for (const item of items) {
  output += item.name + ', ';
}
// (In practice, items.map(i => i.name).join(', ') is usually cleaner)

// Adding a small prefix or suffix
const withDollar = '$' + price;
const withPercent = value + '%';

// Prepending or appending in-place with +=
let log = '';
log += 'Start\\n';
log += 'Middle\\n';
log += 'End\\n';

// Forcing a value to its string form via '' + value
const asString = '' + someValue;

// Combining a fixed template with a dynamic tail (older-style code)
const message = 'Error at line ' + lineNum + ': ' + errorText;
// Modern equivalent:
// const message = \`Error at line \${lineNum}: \${errorText}\`;

// Any time you'd write:
//   \`\${a}\${b}\`
// with no other text between them, plain a + b is just as clear.</code></pre>
  `,

  /* 1.3 Plain English explanation */
  'topics-2-8-1-3': `
    <p>Concatenation is what it sounds like — gluing two things together end-to-end. Think of the <code>+</code> operator like a magnet: when both sides are numbers, it pulls them together arithmetically (5 and 3 become 8). When either side is text, the magnet's job changes — instead of adding values, it pulls the two pieces of text into a single longer piece of text ("hello" and "world" become "helloworld").</p>
    <p>This dual role is what trips people up. The same <code>+</code> symbol does two completely different jobs depending on what's on either side. If both sides are numbers, you're doing math. If either side is text, you're doing text joining. Once you internalize that rule, the "why did <code>'5' + 3</code> become <code>'53'</code> instead of <code>8</code>?" confusion goes away — the <code>'5'</code> is text, so the magnet switched to text-joining mode and pulled the <code>3</code> in as text too.</p>
    <p>The reason interpolation replaced concatenation for most modern code is that gluing pieces together with <code>+</code> gets visually noisy fast. Every variable needs its own set of quotes and pluses around it, so a sentence with three variables ends up looking like a fence made of alternating quotes and plus signs. Interpolation lets you write the sentence as a sentence, with the variables marked but the flow intact. Concatenation still does the same job underneath — it just makes you show the plumbing.</p>
  `,

  /* 1.4 Mental model */
  'topics-2-8-1-4': `
    <p>The <code>+</code> operator looks at its two operands and picks a job based on their types. If both are numbers, it does arithmetic. If either is a string, it switches to concatenation mode and coerces the other operand to a string before joining. There is no third mode — <code>+</code> is either doing math or doing string joining, and the presence of a string on either side is what tips it into joining.</p>
    <p>This means the order matters when the expression has both numbers and strings. JavaScript evaluates <code>+</code> left to right, one pair at a time. <code>1 + 2 + '3'</code> evaluates as <code>(1 + 2) + '3'</code>: the first <code>+</code> sees two numbers and adds them into <code>3</code>, then the second <code>+</code> sees a number and a string and concatenates them into <code>'33'</code>. Flip the order: <code>'1' + 2 + 3</code> evaluates as <code>('1' + 2) + 3</code>: the first <code>+</code> sees a string and coerces the 2 into <code>'12'</code>, then the second <code>+</code> coerces the 3 and gives <code>'123'</code>.</p>
    <p>The rule to remember: once a string enters an expression full of <code>+</code>, everything from that point rightward will be string concatenation. This is why <code>'sum: ' + 2 + 3</code> gives <code>'sum: 23'</code>, not <code>'sum: 5'</code> — the moment the leftmost <code>+</code> touched the string, string mode locked in for the rest. To get math done first, wrap it in parentheses: <code>'sum: ' + (2 + 3)</code> is <code>'sum: 5'</code>.</p>
  `,

  /* 1.5 Step-by-step walkthrough */
  'topics-2-8-1-5': `
<pre class="language-javascript"><code class="language-javascript">// Scenario: build a labeled message from a name, a count, and a suffix.
const name = 'Os';
const count = 5;
const message = 'Hi ' + name + ', you have ' + count + ' items.';

// What JS does when it reads that line:

// Step 1: JS sees 'const message ='. Declaration, value coming.

// Step 2: JS starts evaluating the expression on the right.
//         It evaluates + left to right, one pair at a time.

// Step 3: First pair: 'Hi ' + name
//         Left is a string ('Hi '). Right is a variable — look up name, get "Os".
//         Both operands are strings.
//         + switches to concatenation mode.
//         Result: "Hi Os"

// Step 4: Next pair: "Hi Os" + ', you have '
//         Both operands are strings.
//         Concatenate.
//         Result: "Hi Os, you have "

// Step 5: Next pair: "Hi Os, you have " + count
//         Left is a string. Right is a number (5).
//         + sees at least one string — switch to concatenation.
//         Coerce 5 to "5", then concatenate.
//         Result: "Hi Os, you have 5"

// Step 6: Next pair: "Hi Os, you have 5" + ' items.'
//         Both strings.
//         Concatenate.
//         Result: "Hi Os, you have 5 items."

// Step 7: The final string is assigned to message.

// message is now "Hi Os, you have 5 items." — 24 characters.
// Every + operation created a new string (strings are immutable),
// so there were four separate string objects created and discarded
// along the way. For a small string this doesn't matter; in a hot
// loop with thousands of iterations, that allocation cost adds up
// and .join() or an array-based approach becomes faster.</code></pre>
  `,

  /* --- Chunk 2: The Click --- */

  /* 2.0 Debugging clue */
  'topics-2-8-2-0': `
    <p>Concatenation bugs are almost all variations on the same theme: <code>+</code> did the wrong job because of the types on either side.</p>
    <p><strong>1. Unexpected string when you wanted math.</strong> You wrote <code>total + tax</code> and got <code>'5010'</code> instead of <code>60</code>. This means one of those variables is a string, not a number — most often because it came from a form input (all form values are strings) or a URL parameter. Fix: convert to numbers first with <code>Number(total) + Number(tax)</code> or use <code>parseFloat</code> / <code>parseInt</code>.</p>
    <p><strong>2. Unexpected math when you wanted a string.</strong> Rare, but happens when you're building a string that starts with numeric operations: <code>1 + 2 + ' items'</code> gives <code>'3 items'</code>, not <code>'12 items'</code>. The first <code>+</code> saw two numbers and added them before the string ever entered the picture. Fix: start with the string, or wrap the math in parens.</p>
    <p><strong>3. <code>[object Object]</code> appearing in output.</strong> You concatenated an object directly: <code>'user = ' + user</code>. Objects coerce to the literal string <code>"[object Object]"</code>. Fix: pick a specific property (<code>'user = ' + user.name</code>) or serialize with <code>JSON.stringify(user)</code>.</p>
    <p><strong>4. <code>undefined</code> or <code>null</code> in the output.</strong> A variable that was supposed to have a value is <code>undefined</code>, and concatenation coerced it to the string <code>"undefined"</code>. Fix: check upstream why the variable is missing — this is usually a bug earlier in the code, not in the concatenation itself.</p>
    <p><strong>5. Concatenation in a loop is slow.</strong> You're building up a big string with <code>result += chunk</code> across thousands of iterations, and it's noticeably slow. Fix: push into an array and <code>.join('')</code> at the end, which is much faster than repeated string creation.</p>
  `,

  /* 2.1 The part that makes it click */
  'topics-2-8-2-1': `
    <p>The <code>+</code> operator has one rule: <em>if either operand is a string, both become strings and get joined.</em> Otherwise, both are treated as numbers and added. That's the whole thing. Every "why did <code>+</code> do this weird thing?" surprise comes back to this rule applied left-to-right, one pair at a time.</p>
    <p>Once you internalize that, three things become obvious. First, mixing strings and numbers in a single <code>+</code> expression is usually a source of bugs — either the string wins and you get concatenation you didn't want, or the numbers win first and you get a joined string in the wrong order. Prefer to keep the two types separate and convert deliberately. Second, if you're building a string with variables, template literals almost always express the intent more clearly than a chain of <code>+</code> operations. Third, concatenation still matters — interpolation is built on it, and understanding how <code>+</code> handles types is core JavaScript literacy.</p>
  `,

  /* 2.2 Common confusions */
  'topics-2-8-2-2': `
    <p><strong>Confusion: "<code>+</code> for strings and <code>+</code> for numbers are different operators"</strong></p>
    <p>They're the same operator. It looks at its operands and decides at runtime whether to add or concatenate. This is why <code>'5' + 3</code> and <code>5 + 3</code> behave differently — same <code>+</code>, different operand types.</p>

    <p><strong>Confusion: "concatenation modifies the original strings"</strong></p>
    <p>It doesn't. Strings in JavaScript are immutable. <code>a + b</code> creates a new string; <code>a</code> and <code>b</code> are unchanged.</p>
<pre class="language-javascript"><code class="language-javascript">const a = 'hello';
const b = ' world';
const c = a + b;
a;   // "hello" — unchanged
b;   // " world" — unchanged
c;   // "hello world" — new string</code></pre>

    <p><strong>Confusion: "<code>+=</code> is faster because it mutates the string in place"</strong></p>
    <p>It doesn't mutate — it creates a new string and reassigns the variable. In loops with lots of iterations, this can actually be slow because of the constant allocation. For heavy string building, use an array and <code>.join()</code>.</p>
<pre class="language-javascript"><code class="language-javascript">// Slower for large loops:
let result = '';
for (let i = 0; i < 10000; i++) {
  result += 'x';
}

// Faster:
const parts = [];
for (let i = 0; i < 10000; i++) {
  parts.push('x');
}
const result2 = parts.join('');</code></pre>

    <p><strong>Confusion: "template literals are slower than concatenation"</strong></p>
    <p>In modern JS engines, they're essentially equivalent. Optimize for readability, not for perceived speed differences that don't exist in practice.</p>

    <p><strong>Confusion: "if I want to add two form values, I can just use <code>+</code>"</strong></p>
    <p>Form input values are always strings, even when they look like numbers. <code>form.a.value + form.b.value</code> concatenates them as strings — <code>'5' + '3'</code> is <code>'53'</code>, not <code>8</code>. Convert first: <code>Number(form.a.value) + Number(form.b.value)</code>.</p>

    <p><strong>Confusion: "<code>+</code> can concatenate anything"</strong></p>
    <p>It can concatenate anything that can be coerced to a string, which is almost every value in JavaScript — but the result may not be what you want. Objects become <code>"[object Object]"</code>. Arrays become comma-joined values. Functions become their source code. These conversions rarely produce useful output; if you're joining anything more complex than primitives, format it deliberately first.</p>
  `,

  /* 2.3 Common mistakes */
  'topics-2-8-2-3': `
<pre class="language-javascript"><code class="language-javascript">// Concatenating form inputs as if they were numbers
const total = form.price.value + form.tax.value;
// wrong: both values are strings — result is joined text, not a sum
// e.g. "50" + "10" = "5010", not 60
// fix: convert to numbers first
const total2 = Number(form.price.value) + Number(form.tax.value);</code></pre>

<pre class="language-javascript"><code class="language-javascript">// Starting with numbers, then adding a string — math happens first
const label = 1 + 2 + ' items';
// wrong (probably): 1+2=3, then 3+' items' = "3 items"
// If you wanted "12 items", start with a string:
const label2 = '' + 1 + 2 + ' items';   // "12 items"
// Or wrap what you want joined in parens:
const label3 = (1 + '') + 2 + ' items'; // "12 items"</code></pre>

<pre class="language-javascript"><code class="language-javascript">// Concatenating an object directly
const user = { name: 'Os' };
const greeting = 'Hello, ' + user;
// wrong: "Hello, [object Object]"
// fix: pick a property → 'Hello, ' + user.name
// fix: serialize      → 'Hello, ' + JSON.stringify(user)</code></pre>

<pre class="language-javascript"><code class="language-javascript">// Missing value becomes "undefined" or "null" in the output
const name = undefined;
const msg = 'Hello, ' + name;
// wrong: "Hello, undefined"
// fix: check upstream why name is undefined
// fix: guard with a default → 'Hello, ' + (name || 'friend')</code></pre>

<pre class="language-javascript"><code class="language-javascript">// Repeated += in a hot loop
let s = '';
for (let i = 0; i < 100000; i++) {
  s += 'x';
}
// works but slow — each iteration allocates a new string
// fix: use an array
const parts = [];
for (let i = 0; i < 100000; i++) {
  parts.push('x');
}
const s2 = parts.join('');</code></pre>

<pre class="language-javascript"><code class="language-javascript">// Using concatenation where interpolation would be much clearer
const bad = 'Hello, ' + user.firstName + ' ' + user.lastName + '! You have ' + count + ' new messages from ' + sender.name + '.';
// works but hard to read — too many + and quotes
// fix: use a template literal
const good = \`Hello, \${user.firstName} \${user.lastName}! You have \${count} new messages from \${sender.name}.\`;</code></pre>

<pre class="language-javascript"><code class="language-javascript">// Forgetting spaces at the boundaries of concatenated pieces
const s = 'Hello' + name;
// wrong: no space between "Hello" and the name
// stored: "HelloOs" (if name is "Os")
// fix: include the space explicitly → 'Hello ' + name  or  'Hello, ' + name</code></pre>
  `,

  /* --- Chunk 3: In Practice --- */

  /* 3.0 Tiny examples */
  'topics-2-8-3-0': `
<pre class="language-javascript"><code class="language-javascript">// Basic joins
'hello' + 'world';           // "helloworld"
'hello' + ' ' + 'world';     // "hello world"
'a' + 'b' + 'c';             // "abc"

// With a variable
const name = 'Os';
'Hi, ' + name;               // "Hi, Os"

// With += shorthand
let msg = 'Hello';
msg += ', ' + name;
msg += '!';
msg;                         // "Hello, Os!"

// Coercion of non-strings
'x=' + 5;                    // "x=5"
'flag=' + true;              // "flag=true"
'val=' + null;               // "val=null"
'val=' + undefined;          // "val=undefined"
'arr=' + [1, 2, 3];          // "arr=1,2,3"

// The number-vs-string trap
1 + 2;                       // 3
1 + '2';                     // "12"
'1' + 2;                     // "12"
1 + 2 + '3';                 // "33"
'1' + 2 + 3;                 // "123"
1 + '2' + 3;                 // "123"
(1 + 2) + '3';               // "33"
'sum: ' + (1 + 2);           // "sum: 3"

// Force to string with ''
const n = 42;
'' + n;                      // "42"
'' + n === String(n);        // true</code></pre>
  `,

  /* 3.1 Real website uses */
  'topics-2-8-3-1': `
    <p><strong>Example: composing a URL from a base and an ID</strong></p>
<pre class="language-javascript"><code class="language-javascript">const url = '/api/users/' + userId;</code></pre>

    <p><strong>Example: adding a file extension to a name</strong></p>
<pre class="language-javascript"><code class="language-javascript">const fileName = title.toLowerCase() + '.md';</code></pre>

    <p><strong>Example: prefixing a currency symbol</strong></p>
<pre class="language-javascript"><code class="language-javascript">priceLabel.textContent = '$' + price.toFixed(2);</code></pre>

    <p><strong>Example: converting a form input to a number before summing</strong></p>
<pre class="language-javascript"><code class="language-javascript">const total = Number(form.price.value) + Number(form.tax.value);</code></pre>

    <p><strong>Example: building a log line from parts</strong></p>
<pre class="language-javascript"><code class="language-javascript">console.log('[' + timestamp + '] ' + level + ': ' + message);</code></pre>

    <p><strong>Example: quick number-to-string conversion for display</strong></p>
<pre class="language-javascript"><code class="language-javascript">countLabel.textContent = '' + itemCount;</code></pre>
  `,

  /* 3.2 Connects to */
  'topics-2-8-3-2': `
    <ul>
      <li><strong><code>\${}</code> interpolation</strong> → the modern, more readable replacement for multi-piece concatenation</li>
      <li><strong>Type coercion</strong> → <code>+</code> with any string coerces the other side to a string; understanding coercion prevents most concatenation bugs</li>
      <li><strong>String vs number</strong> → the biggest gotcha is form inputs (always strings) being <code>+</code>'d expecting math</li>
      <li><strong><code>+=</code> operator</strong> → shorthand for "append and reassign"; useful in loops when clarity matters more than performance</li>
      <li><strong><code>.join()</code></strong> → the array method that outperforms <code>+=</code> for building large strings from many pieces</li>
      <li><strong>Immutability</strong> → strings can't be modified in place; every concatenation creates a new string</li>
      <li><strong>Backticks</strong> → template literals are essentially concatenation with better syntax; for anything with more than one variable, they're the modern default</li>
      <li><strong>Debugging</strong> → <code>[object Object]</code>, <code>"undefined"</code>, and unexpected numeric addition are the classic concatenation-bug fingerprints</li>
    </ul>
  `,

  /* 3.3 See also */
  'topics-2-8-3-3': `
    <ul>
      <li><code>\${}</code> interpolation</li>
      <li>Backticks \`hello\`</li>
      <li>String vs number visually</li>
      <li>Type coercion (numbers to strings)</li>
      <li>Array .join() method</li>
      <li>Common string mistakes</li>
      <li>Debugging strings</li>
      <li>Reading user input as strings</li>
    </ul>
  `,

  /* ========================================================= 
   Sub-lesson: 3.3.10 Strings → string vs number visually
 =======================================================*/

  /* --- Chunk 0: What & How --- */

  /* 0.0 What it is */
  'topics-2-9-0-0': `
    <p>In JavaScript, the value <code>42</code> and the value <code>'42'</code> look almost identical when they're printed to the screen — both show up as <code>42</code>. But they are completely different types under the hood. <code>42</code> is a <strong>number</strong>. <code>'42'</code> is a <strong>string</strong> that happens to contain digit characters. The wrapping quotes are the only visual clue in the source code, and once the value is displayed in a UI or logged to a console, that clue can disappear entirely.</p>
    <p>This lesson is about training your eye to spot the difference and understanding why it matters. Most bugs where "the math didn't work" or "the value looks right but comparison fails" come down to a value being a string when you thought it was a number, or vice versa. The types behave differently in almost every operation — arithmetic, comparison, sorting, method calls — so knowing which type you're holding is fundamental.</p>
  `,

  /* 0.1 Syntax */
  'topics-2-9-0-1': `
<pre class="language-javascript"><code class="language-javascript">// Numbers — no quotes around them:
42
3.14
-100
0
1_000_000        // underscores are just visual separators, still a number

// Strings that contain digits — wrapped in quotes:
'42'
'3.14'
"-100"
\`0\`
'1,000,000'      // commas are just characters here

// The typeof operator tells you which kind you have:
typeof 42;       // "number"
typeof '42';     // "string"
typeof 3.14;     // "number"
typeof '3.14';   // "string"

// Visually similar, semantically different:
42 === '42';     // false — different types, comparison fails
42 == '42';      // true — loose equality coerces, but this hides bugs
42 + 1;          // 43 — arithmetic
'42' + 1;        // "421" — concatenation, because '42' is a string

// Getting a value from the DOM — always a string:
document.querySelector('input').value;   // always a string, even if it looks like a number

// Getting a value from JSON — depends on the source:
JSON.parse('{"count": 42}').count;     // 42 — number
JSON.parse('{"count": "42"}').count;   // "42" — string</code></pre>
  `,

  /* 0.2 Anatomy / Breakdown */
  'topics-2-9-0-2': `
<pre class="language-javascript"><code class="language-javascript">const a = 42;
const b = '42';

// Under the hood, these are stored completely differently:
//
//   a: 42
//   └── a single numeric value, 42
//   └── typeof a is "number"
//   └── takes ~8 bytes in memory (double-precision float)
//   └── supports arithmetic: a * 2, a + 1, Math.sqrt(a)
//   └── has number methods: a.toFixed(2), a.toString()
//   └── has no .length (numbers don't have length)
//
//   b: "42"
//   └── a sequence of two characters: '4' and '2'
//   └── typeof b is "string"
//   └── takes ~4 bytes per character + overhead
//   └── supports string operations: b.length, b[0], b.slice(0, 1)
//   └── has string methods: b.toUpperCase(), b.split(''), b.repeat(3)
//   └── has .length: b.length is 2 (two characters)
//   └── arithmetic coerces to concatenation: b + 1 is "421"

// Even though they PRINT the same:
console.log(a);   // 42
console.log(b);   // 42  (Node.js/Chrome distinguish with color, but the text is the same)

// The types diverge the moment you try to DO anything with them:
a * 2;            // 84
b * 2;            // 84  — surprise! * coerces the string to a number
a + 2;            // 44
b + 2;            // "422"  — + with a string concatenates instead
a === b;          // false — strict equality checks type

// This inconsistency (some operators coerce, some don't) is why "is this a
// number or a string?" is such a common source of bugs.</code></pre>
  `,

  /* 0.3 Syntax Details That Matter */
  'topics-2-9-0-3': `
    <p><strong>The wrapping quotes are the ONLY visual difference in source code.</strong> <code>42</code> is a number. <code>'42'</code>, <code>"42"</code>, and <code>\`42\`</code> are all strings. If you see quotes around it in the source, it's a string, no matter what characters are inside. If you don't see quotes, it's a number (or something else, but never a string).</p>
<pre class="language-javascript"><code class="language-javascript">42        // number
'42'      // string
"42"      // string
\`42\`      // string

// Digit content doesn't make it a number. Quote-wrapping makes it a string.
'-3.14'   // string
'0'       // string
''        // string (empty)
'NaN'     // string that contains the letters N-a-N (not the special value NaN)</code></pre>

    <p><strong>Printed output usually hides the type.</strong> <code>console.log(42)</code> and <code>console.log('42')</code> both print <code>42</code> to the terminal or DevTools. Some environments (Chrome DevTools, Node.js) color strings differently from numbers, but the printed characters are the same. When looking at output, you cannot tell types by eye — use <code>typeof</code> to be sure.</p>
<pre class="language-javascript"><code class="language-javascript">console.log(42);        // 42
console.log('42');      // 42  (looks identical without color coding)
console.log(typeof 42);   // "number"
console.log(typeof '42'); // "string"

// In DevTools, strings often appear with quotes when logged inside objects:
console.log({ a: 42, b: '42' });
// { a: 42, b: '42' }  — the b value shows quotes because it's inside an object

// But bare console.log of a string does NOT show quotes:
console.log('42');   // 42, not '42'</code></pre>

    <p><strong><code>+</code> is the operator that most often exposes the difference.</strong> <code>+</code> with two numbers adds them. <code>+</code> with any string concatenates. Every other arithmetic operator (<code>-</code>, <code>*</code>, <code>/</code>, <code>%</code>) coerces strings to numbers first. This inconsistency is where the confusion lives — subtracting a string works, but adding a string doesn't do math.</p>
<pre class="language-javascript"><code class="language-javascript">'10' + 5;   // "105" — + with a string concatenates
'10' - 5;   // 5     — - coerces to number
'10' * 2;   // 20    — * coerces to number
'10' / 2;   // 5     — / coerces to number
'10' % 3;   // 1     — % coerces to number

// The exception is + because it also means "concatenate for strings".
// This asymmetry is one of JavaScript's oldest gotchas.</code></pre>

    <p><strong>Comparison operators reveal the type mismatch — but only strict ones.</strong> <code>===</code> compares type AND value; <code>42 === '42'</code> is <code>false</code>. <code>==</code> coerces before comparing; <code>42 == '42'</code> is <code>true</code>. This is why modern JavaScript style guides insist on <code>===</code> — it makes type mismatches loud instead of silent.</p>
<pre class="language-javascript"><code class="language-javascript">42 === '42';   // false — strict equality, types must match
42 == '42';    // true  — loose equality, coerces string to number

// Never rely on == to work correctly for you. Always use === and
// convert types explicitly when needed.</code></pre>

    <p><strong>Common sources of "surprise string" values.</strong> Some places always give you strings, even when the content looks numeric: DOM input values (<code>input.value</code> is always a string), URL parameters, form data, values read from files, values parsed from CSVs, and JSON where the source explicitly used quotes around a number. Some places give you numbers: math operations, <code>Number()</code> conversions, numeric literals in code, JSON where the source omitted quotes.</p>
  `,

  /* --- Chunk 1: Why & When --- */

  /* 1.0 What problem it solves */
  'topics-2-9-1-0': `
    <p>The problem this awareness solves is a whole class of bugs where the value <em>looks</em> right but the code <em>behaves</em> wrong. You add two form fields and get <code>'510'</code> instead of <code>15</code>. You compare a URL parameter to a numeric ID and get <code>false</code> when they should match. You sort a list of numbers-as-strings and they come out in the wrong order (<code>'100'</code> before <code>'20'</code> because string sorting is character-by-character). Every one of these bugs happens because a value was a string when the code assumed it was a number, and the visual output didn't reveal the mismatch.</p>
    <p>Once you learn to spot which sources produce strings versus numbers, and once you form the habit of converting deliberately at the boundary between the two, this whole category of bug goes away. The rule of thumb: any value that came from outside your program (user input, URL, file, network) is probably a string. Convert it to a number as early as possible, then treat it as a number everywhere in your code. Don't let string-shaped numbers float around and cause surprises later.</p>
  `,

  /* 1.1 Why use it */
  'topics-2-9-1-1': `
    <p>Being able to tell strings and numbers apart at a glance is a fundamental JavaScript skill. Not because the language should have made them look different — it didn't, and that's a real language design tradeoff — but because so many bugs and so much wasted debugging time come from this exact confusion. Once you can look at a variable and know from context whether it's a string or a number (and confirm with <code>typeof</code> when unsure), you catch bugs at the source instead of chasing symptoms downstream.</p>
    <p>The specific skill this lesson builds: recognize the sources. Anything from <code>input.value</code> is a string. Anything from a URL is a string. Anything from JSON depends on whether the JSON source had quotes. Anything from <code>parseInt</code>, <code>parseFloat</code>, <code>Number()</code>, or arithmetic is a number. Anything from <code>toString()</code>, template literals, or concatenation is a string. Building this mental map of "which operations produce which types" is what stops the bugs before they happen.</p>
    <p>The parallel skill: convert deliberately at boundaries. When a value crosses from outside your code into inside your code, decide what type it should be and convert immediately. When a value crosses back out (to a display, to storage, to a URL), decide what type it should be and convert immediately. Don't leave conversions to chance or to whichever operator happens to coerce first — that's how bugs sneak in.</p>
  `,

  /* 1.2 Where you use it */
  'topics-2-9-1-2': `
<pre class="language-javascript"><code class="language-javascript">// Form inputs — ALWAYS strings, even when they look numeric
const raw = document.querySelector('input[type="number"]').value;
// raw is "42", not 42 — even though the input type is "number"
const num = Number(raw);
// num is 42 — now safe to do math with

// URL search parameters — always strings
const params = new URLSearchParams(location.search);
const pageStr = params.get('page');       // string like "3"
const page = Number(pageStr);             // convert to number for math

// JSON — depends on the source
JSON.parse('{"a": 42}').a;                // 42 (number)
JSON.parse('{"a": "42"}').a;              // "42" (string)

// localStorage — always returns strings (or null)
localStorage.setItem('count', 42);        // stored as "42"
const stored = localStorage.getItem('count');   // "42" (string)
const count = Number(stored);             // 42 (number)

// Dataset attributes on DOM elements — always strings
button.dataset.id;                        // "42" (string), never a number

// Math operations always produce numbers
5 + 3;                                    // 8 (number)
Math.floor(3.7);                          // 3 (number)
Math.PI;                                  // 3.14159... (number)

// String concatenation and template literals always produce strings
'result: ' + 42;                          // "result: 42" (string)
\`count: \${5}\`;                            // "count: 5" (string)
(42).toString();                          // "42" (string)

// Anywhere you write code that touches "outside" data — the network, the
// DOM, storage, URLs, files — assume string until you verify or convert.</code></pre>
  `,

  /* 1.3 Plain English explanation */
  'topics-2-9-1-3': `
    <p>Think of numbers and strings as two different kinds of containers. A number is like a jar of counted marbles — you can add more marbles, subtract some, multiply the count, do math with it. A string is like a piece of paper with characters written on it — you can add more characters to the end, cut off pieces, count the letters, but you can't "multiply" the paper meaningfully.</p>
    <p>The confusing part of JavaScript is that both containers can hold something that looks like a number when you display them. The jar with 42 marbles displays as "42". The piece of paper with the letters "4" and "2" written on it also displays as "42". Same output, completely different container. And you can only do math on the marbles-jar. The paper looks like it should work, but the operations you can do on it are string operations, not math operations.</p>
    <p>The habit that makes this manageable: whenever you receive data from outside your program, mentally ask "did this come as marbles or as paper?" Form fields always give you paper. URLs give you paper. Files give you paper. Math and numeric literals give you marbles. If you need marbles for math but you have paper, convert it first — pour the paper's meaning into a jar with <code>Number()</code>. Don't try to do math on paper and hope it works.</p>
  `,

  /* 1.4 Mental model */
  'topics-2-9-1-4': `
    <p>Every value in JavaScript has a type, and the type controls what operations are legal, how coercion happens, and how the value compares to other values. Numbers and strings are two of the six primitive types (the others are boolean, null, undefined, symbol, bigint). Numbers are stored as double-precision floating-point values; strings are stored as sequences of UTF-16 characters.</p>
    <p>When you look at source code, the type of a literal is unambiguous: quote-wrapped is a string, no-quotes numeric is a number. When you look at code that receives data from elsewhere — a function parameter, a DOM read, a network response — the type is determined by how the value was produced, and you have to know the producer's contract to know the type. When in doubt, <code>typeof</code> is the direct answer.</p>
    <p>The mental picture: types are labels attached to values, and every operator asks "what type do I need for this?" before running. Numeric operators (<code>-</code>, <code>*</code>, <code>/</code>, <code>%</code>) demand numbers and coerce anything else. The <code>+</code> operator prefers concatenation when either side is a string. The strict comparison operators (<code>===</code>, <code>!==</code>) refuse to coerce and return <code>false</code> if types don't match. Loose comparison (<code>==</code>, <code>!=</code>) does coerce, which is why it's discouraged in modern code — it hides type mismatches instead of surfacing them.</p>
    <p>The habit this leads to: use <code>===</code> always, convert with <code>Number()</code> or <code>String()</code> explicitly, and trust <code>typeof</code> when you're not sure what you have. Never assume a value's type based on how it looks — assume based on where it came from.</p>
  `,

  /* 1.5 Step-by-step walkthrough */
  'topics-2-9-1-5': `
<pre class="language-javascript"><code class="language-javascript">// Scenario: a form has two number inputs. You want to add their values.

// The HTML:
// &lt;input id="a" type="number" value="10"&gt;
// &lt;input id="b" type="number" value="5"&gt;
// &lt;div id="result"&gt;&lt;/div&gt;

// The naive code:
const aValue = document.querySelector('#a').value;
const bValue = document.querySelector('#b').value;
const sum = aValue + bValue;
document.querySelector('#result').textContent = sum;

// What actually happens, step by step:

// Step 1: JS reads document.querySelector('#a').value.
//         .value on an input always returns a STRING.
//         aValue is "10" (the string), not 10 (the number).
//         Even though the input's type is "number", the .value is still a string.

// Step 2: Same for bValue. It's "5" (string), not 5 (number).

// Step 3: JS evaluates aValue + bValue.
//         + with two strings concatenates.
//         Result: "105" (string), not 15 (number).

// Step 4: sum is now "105" — the joined string.

// Step 5: The result div's textContent is set to "105".
//         The user sees "105" in the UI.
//         They expected 15 (10 + 5), so they file a bug.

// The fix — convert to numbers first:
const aValue2 = Number(document.querySelector('#a').value);
const bValue2 = Number(document.querySelector('#b').value);
const sum2 = aValue2 + bValue2;
// aValue2 is 10 (number)
// bValue2 is 5 (number)
// sum2 is 15 (number)
// Correct result.

// The mental habit: any time a value crosses from the DOM (or URL, or file,
// or network) INTO your code, convert to the type you actually want to work
// with. Don't rely on operators to guess correctly.</code></pre>
  `,

  /* --- Chunk 2: The Click --- */

  /* 2.0 Debugging clue */
  'topics-2-9-2-0': `
    <p>String-vs-number bugs have a handful of recognizable fingerprints. Learn these and you'll spot the type of bug before you even start debugging.</p>
    <p><strong>1. Two numbers "added" produce a joined string.</strong> You expected <code>5 + 10</code> = <code>15</code> and got <code>'510'</code>. This means at least one of the operands is a string. Most common cause: the value came from <code>input.value</code>, a URL parameter, or JSON with quoted digits.</p>
    <p><strong>2. Comparison fails when values look identical.</strong> <code>userId === 42</code> returns <code>false</code> even though the user's ID looks like 42. Most common cause: <code>userId</code> is <code>'42'</code> (a string) because it came from the URL or a form. Fix: convert one side to match, or use <code>Number(userId) === 42</code>.</p>
    <p><strong>3. Sorting numbers produces alphabetical order.</strong> You sort <code>[10, 5, 100, 20]</code> and get <code>[10, 100, 20, 5]</code>. This means the values are actually strings, and <code>sort()</code> without a comparator defaults to string comparison — which sorts character by character, so <code>'100'</code> comes before <code>'20'</code> because <code>'1'</code> < <code>'2'</code>. Fix: convert to numbers first, or pass a numeric comparator to <code>sort((a, b) => a - b)</code>.</p>
    <p><strong>4. <code>.length</code> returns character count instead of value.</strong> You wrote <code>score.length</code> expecting the numeric length of a score (nonsense, but people try it), or you wrote <code>arr.length</code> and got a string like <code>'5'</code> because the array is actually a string. Numbers don't have <code>.length</code> — using it throws no error, just returns <code>undefined</code>.</p>
    <p><strong>5. Math involving <code>NaN</code>.</strong> Any arithmetic where one operand can't be coerced to a valid number returns <code>NaN</code> (Not a Number). If your calculation produces <code>NaN</code>, one of the inputs is a string that doesn't convert cleanly. <code>Number('abc')</code> is <code>NaN</code>. <code>'5' * 'abc'</code> is <code>NaN</code>. Check the inputs.</p>
    <p><strong>6. <code>typeof</code> is your friend.</strong> When a bug feels type-related, just log <code>typeof someVar</code>. It'll immediately tell you whether you have a string or a number, and 90% of type bugs solve themselves once you know the answer.</p>
  `,

  /* 2.1 The part that makes it click */
  'topics-2-9-2-1': `
    <p>Numbers and strings are two completely different types of values that happen to look identical when displayed. The only visual clue in source code is quote-wrapping — quotes mean string, no quotes mean number. Once the value has been created and stored, the type is baked in and controls how every operator, comparison, and method call behaves. The type doesn't change unless you explicitly convert it.</p>
    <p>Once you internalize that, two things become obvious. First, you can't trust visual output to tell you the type — <code>console.log(42)</code> and <code>console.log('42')</code> print the same characters. Always use <code>typeof</code> when the type matters. Second, the safest habit is to convert values to their intended type as early as possible — right when they enter your code from outside — and then treat them as that type everywhere else. Letting a string-shaped number float around your code and get accidentally coerced by whichever operator hits it first is how bugs happen.</p>
  `,

  /* 2.2 Common confusions */
  'topics-2-9-2-2': `
    <p><strong>Confusion: "<code>input type='number'</code> gives me a number in JS"</strong></p>
    <p>It doesn't. The <code>type="number"</code> attribute controls the input's browser UI (up/down spinners, mobile keyboard) and enforces basic validation. But <code>input.value</code> is always a string in JavaScript, regardless of the input type. Same for <code>type="date"</code>, <code>type="range"</code>, etc. Use <code>input.valueAsNumber</code> for a numeric read, or convert manually with <code>Number(input.value)</code>.</p>

    <p><strong>Confusion: "<code>parseInt</code> and <code>Number</code> are the same thing"</strong></p>
    <p>Similar but different. <code>Number('42.5')</code> is <code>42.5</code>. <code>parseInt('42.5')</code> is <code>42</code> (truncates). <code>Number('42abc')</code> is <code>NaN</code>. <code>parseInt('42abc')</code> is <code>42</code> (parses until the first non-digit). Use <code>Number()</code> for strict conversion, <code>parseInt/parseFloat</code> when you need to extract a number from mixed content.</p>
<pre class="language-javascript"><code class="language-javascript">Number('42.5');       // 42.5
parseInt('42.5');     // 42 — decimal dropped
parseFloat('42.5');   // 42.5
Number('42abc');      // NaN
parseInt('42abc');    // 42 — stops at the 'a'
Number('');           // 0 — empty string becomes 0
parseInt('');         // NaN
Number(null);         // 0
Number(undefined);    // NaN</code></pre>

    <p><strong>Confusion: "if <code>typeof x === 'number'</code>, it's a valid number"</strong></p>
    <p>Almost. <code>NaN</code> is technically type "number" (a quirk of the spec). So <code>typeof NaN === 'number'</code> is <code>true</code>. To check for a valid number, use <code>Number.isFinite(x)</code> which returns <code>false</code> for <code>NaN</code>, <code>Infinity</code>, and non-numbers.</p>

    <p><strong>Confusion: "quotes in the console output tell me the type"</strong></p>
    <p>Sometimes, but not reliably. <code>console.log('42')</code> prints <code>42</code>, no quotes. But <code>console.log(['42'])</code> prints <code>['42']</code> with quotes because the array's inspector shows nested types. Same for objects: <code>console.log({ a: '42' })</code> shows <code>{ a: '42' }</code>. Use <code>typeof</code> to be certain, not visual inspection.</p>

    <p><strong>Confusion: "<code>==</code> is safer because it's lenient"</strong></p>
    <p>Backwards — <code>==</code> is more dangerous because it silently coerces and hides type mismatches. <code>0 == ''</code> is <code>true</code>. <code>0 == '0'</code> is <code>true</code>. <code>false == '0'</code> is <code>true</code>. Modern style guides and linters universally recommend <code>===</code>, which surfaces type mismatches instead of masking them.</p>

    <p><strong>Confusion: "a string of digits is 'basically' a number"</strong></p>
    <p>It's a string. Full stop. It has string methods (<code>.length</code>, <code>.charAt</code>, <code>.split</code>), it sorts alphabetically, and <code>+</code> concatenates it. The digits are just characters. If you want to do numeric things with it, convert first.</p>
  `,

  /* 2.3 Common mistakes */
  'topics-2-9-2-3': `
<pre class="language-javascript"><code class="language-javascript">// Adding form inputs without converting
const total = form.price.value + form.tax.value;
// wrong: both are strings — "50" + "10" = "5010"
// fix: convert to numbers
const total2 = Number(form.price.value) + Number(form.tax.value);</code></pre>

<pre class="language-javascript"><code class="language-javascript">// Comparing a URL parameter to a numeric ID
const params = new URLSearchParams(location.search);
const id = params.get('id');   // string, e.g. "42"
if (id === 42) { /* ... */ }
// wrong: "42" === 42 is false — types differ
// fix: convert one side
if (Number(id) === 42) { /* ... */ }</code></pre>

<pre class="language-javascript"><code class="language-javascript">// Sorting numbers stored as strings
const scores = ['10', '5', '100', '20'];
scores.sort();
// wrong: ['10', '100', '20', '5'] — string-alphabetical sort
// fix: convert first, or provide a numeric comparator
scores.sort((a, b) => Number(a) - Number(b));
// ['5', '10', '20', '100']</code></pre>

<pre class="language-javascript"><code class="language-javascript">// Using == instead of === and getting false-positives
0 == '';       // true — surprising
0 == '0';      // true
false == '0';  // true
null == undefined;  // true
// fix: always use ===
0 === '';      // false
0 === '0';     // false
false === '0'; // false</code></pre>

<pre class="language-javascript"><code class="language-javascript">// Assuming JSON preserves numeric type
const data = JSON.parse('{"count": "42"}');
data.count * 2;
// wrong (subtly): count is "42" (string), * coerces it → 84 works by accident
// but data.count + 1 would give "421" — inconsistent behavior
// fix: check the JSON source, or convert after parsing
const count = Number(data.count);</code></pre>

<pre class="language-javascript"><code class="language-javascript">// Reading localStorage and assuming type
localStorage.setItem('count', 42);
const stored = localStorage.getItem('count');
stored + 1;
// wrong: stored is "42" (string) — result is "421"
// fix: convert after read
const count = Number(localStorage.getItem('count'));
count + 1;   // 43</code></pre>

<pre class="language-javascript"><code class="language-javascript">// Using Number() on user text that isn't a number
const raw = prompt('Enter a number');   // e.g. user types "abc"
const n = Number(raw);
n + 1;
// wrong: n is NaN — NaN + anything is NaN
// fix: check for validity
if (Number.isFinite(n)) {
  // safe to use as a number
} else {
  // handle the bad input
}</code></pre>

<pre class="language-javascript"><code class="language-javascript">// Confusing typeof output with the actual type name
typeof 42;             // "number" (string)
typeof '42';           // "string" (string)
typeof 42 === Number;  // false — Number is a constructor, not the string "number"
// fix: compare to the string form
typeof 42 === 'number';   // true</code></pre>
  `,

  /* --- Chunk 3: In Practice --- */

  /* 3.0 Tiny examples */
  'topics-2-9-3-0': `
<pre class="language-javascript"><code class="language-javascript">// typeof reveals the type
typeof 42;            // "number"
typeof '42';          // "string"
typeof 3.14;          // "number"
typeof '';            // "string"
typeof true;          // "boolean"
typeof NaN;           // "number" — quirk
typeof null;          // "object" — legacy bug in the language

// Equality: strict vs loose
42 === 42;            // true
42 === '42';          // false
42 == '42';           // true (coerces — avoid this)

// Arithmetic coercion
'10' + 5;             // "105" — + concatenates
'10' - 5;             // 5     — - coerces to number
'10' * 2;             // 20    — * coerces to number

// Converting to number
Number('42');         // 42
Number('42.5');       // 42.5
Number('abc');        // NaN
Number('');           // 0
Number(null);         // 0
Number(undefined);    // NaN
Number(true);         // 1
Number(false);        // 0
parseInt('42px');     // 42 — extracts leading digits
parseFloat('3.14em'); // 3.14

// Converting to string
String(42);           // "42"
String(true);         // "true"
String(null);         // "null"
(42).toString();      // "42"
\`\${42}\`;              // "42"
'' + 42;              // "42"

// Checking for a valid number
Number.isFinite(42);         // true
Number.isFinite(NaN);        // false
Number.isFinite(Infinity);   // false
Number.isFinite('42');       // false — string, not a number
Number.isNaN(NaN);           // true
Number.isNaN('abc');         // false — 'abc' is a string, not NaN

// Common trap
'2' + '2' - '2';      // 20 — '2'+'2' is "22", "22"-"2" coerces to 20</code></pre>
  `,

  /* 3.1 Real website uses */
  'topics-2-9-3-1': `
    <p><strong>Example: converting a form input to a number before calculating</strong></p>
<pre class="language-javascript"><code class="language-javascript">const price = Number(document.querySelector('#price').value);
const qty = Number(document.querySelector('#qty').value);
const total = price * qty;
totalLabel.textContent = '$' + total.toFixed(2);</code></pre>

    <p><strong>Example: reading a URL parameter as a number</strong></p>
<pre class="language-javascript"><code class="language-javascript">const params = new URLSearchParams(location.search);
const page = Number(params.get('page')) || 1;   // fallback to 1 if missing/invalid</code></pre>

    <p><strong>Example: validating a user-entered numeric value</strong></p>
<pre class="language-javascript"><code class="language-javascript">const age = Number(input.value);
if (!Number.isFinite(age) || age < 0) {
  error.textContent = 'Please enter a valid age.';
}</code></pre>

    <p><strong>Example: storing a number in localStorage and reading it back</strong></p>
<pre class="language-javascript"><code class="language-javascript">localStorage.setItem('score', String(score));   // explicit conversion in
const restored = Number(localStorage.getItem('score')) || 0;   // explicit conversion out</code></pre>

    <p><strong>Example: comparing a dataset attribute to a numeric ID</strong></p>
<pre class="language-javascript"><code class="language-javascript">button.addEventListener('click', () => {
  const itemId = Number(button.dataset.id);
  const item = items.find(i => i.id === itemId);
});</code></pre>

    <p><strong>Example: parsing a numeric value with units from CSS</strong></p>
<pre class="language-javascript"><code class="language-javascript">const style = getComputedStyle(box);
const width = parseFloat(style.width);   // "300px" → 300</code></pre>
  `,

  /* 3.2 Connects to */
  'topics-2-9-3-2': `
    <ul>
      <li><strong>Type coercion</strong> → the underlying rules that decide how <code>+</code>, <code>-</code>, <code>==</code>, etc. handle mixed types</li>
      <li><strong>Strict equality (<code>===</code>)</strong> → the tool that makes type mismatches visible instead of silently coercing</li>
      <li><strong>Reading user input as strings</strong> → the most common source of "surprise string" values</li>
      <li><strong><code>Number()</code>, <code>parseInt</code>, <code>parseFloat</code></strong> → the conversion tools for string-to-number</li>
      <li><strong><code>String()</code>, <code>.toString()</code>, template literals</strong> → the conversion tools for number-to-string</li>
      <li><strong><code>typeof</code></strong> → the direct way to check a value's type when it's not obvious</li>
      <li><strong><code>NaN</code> and <code>Number.isFinite</code></strong> → detecting failed number conversions</li>
      <li><strong>Sorting</strong> → default <code>.sort()</code> compares as strings; numeric sort needs a comparator</li>
      <li><strong>String + string concatenation</strong> → why <code>+</code> often produces strings when you wanted math</li>
    </ul>
  `,

  /* 3.3 See also */
  'topics-2-9-3-3': `
    <ul>
      <li>Reading user input as strings</li>
      <li>String + string concatenation</li>
      <li>Type coercion (rules and traps)</li>
      <li><code>Number()</code>, <code>parseInt</code>, <code>parseFloat</code></li>
      <li><code>String()</code> and <code>.toString()</code></li>
      <li><code>typeof</code> operator</li>
      <li>Strict vs loose equality</li>
      <li>Common string mistakes</li>
      <li>Debugging strings</li>
    </ul>
  `,

 /* ========================================================= 
   Sub-lesson: 3.3.11 Strings → string indexes
 =======================================================*/

  /* --- Chunk 0: What & How --- */

  /* 0.0 What it is */
  'topics-2-10-0-0': `
    <p>A <strong>string index</strong> is a number that identifies the position of a single character inside a string. JavaScript strings are ordered sequences of characters — like a row of numbered slots — and each slot has an index you can use to reach into the string and grab that one character. The syntax is bracket notation: <code>str[0]</code> gives you the first character, <code>str[1]</code> gives you the second, and so on.</p>
    <p>The critical rule to internalize immediately: <strong>indexes start at 0, not 1.</strong> The first character of <code>'hello'</code> is at index 0, not index 1. The last character is at index <code>length - 1</code>, not <code>length</code>. This "zero-based indexing" is standard across almost every programming language, and it's the source of a lot of "off by one" bugs when you're first getting used to it. Every time you're indexing into a string (or an array), remind yourself: <em>the first thing is at 0.</em></p>
  `,

  /* 0.1 Syntax */
  'topics-2-10-0-1': `
<pre class="language-javascript"><code class="language-javascript">// Bracket notation — the standard way to access a character:
const s = 'hello';

s[0];      // "h" — first character
s[1];      // "e"
s[2];      // "l"
s[3];      // "l"
s[4];      // "o" — last character
s[5];      // undefined — no character at that index

// The last character is always at index length - 1:
s[s.length - 1];   // "o"

// Negative indexes are NOT supported with brackets in JavaScript:
s[-1];             // undefined — not "o"

// Use .at() for negative indexes (modern method):
s.at(0);           // "h"
s.at(-1);          // "o" — last character
s.at(-2);          // "l" — second-to-last

// Older method — .charAt() — same as brackets but returns empty string
// instead of undefined for out-of-bounds:
s.charAt(0);       // "h"
s.charAt(100);     // "" (empty string), NOT undefined

// Iterating over each character with a loop:
for (let i = 0; i < s.length; i++) {
  console.log(i, s[i]);
}
// 0 "h"
// 1 "e"
// 2 "l"
// 3 "l"
// 4 "o"

// for...of gives you the character directly (no index):
for (const ch of s) {
  console.log(ch);
}
// "h" "e" "l" "l" "o"</code></pre>
  `,

  /* 0.2 Anatomy / Breakdown */
  'topics-2-10-0-2': `
<pre class="language-javascript"><code class="language-javascript">const s = 'hello';

// Visualize the string as a row of numbered slots:
//
//   index:   0    1    2    3    4
//   char:    h    e    l    l    o
//
// The index is the POSITION, not the character. s[0] means
// "give me whatever character is at position 0", and the answer
// is "h" — because that's what's in that slot.

s.length;          // 5 — total number of characters
s[0];              // "h" — first slot
s[s.length - 1];   // "o" — last slot (index 4, because length is 5)

// The pattern for "first" and "last" is worth memorizing:
//   first character: s[0]
//   last character:  s[s.length - 1]     OR    s.at(-1)

// The character at any given index is a single-character string,
// not a special "character type" — JavaScript has no separate char type:
typeof s[0];       // "string"
s[0].length;       // 1
s[0] === 'h';      // true

// Reading past the end of the string returns undefined, not an error:
s[100];            // undefined
s[-1];             // undefined (negative index — not supported with brackets)

// This is important for defensive code: indexing is safe (it won't crash),
// but the value might be undefined if you're not careful about bounds.</code></pre>
  `,

  /* 0.3 Syntax Details That Matter */
  'topics-2-10-0-3': `
    <p><strong>Indexes start at 0.</strong> This is the single most important thing to remember. The first character is at index 0. The last character is at index <code>length - 1</code>. If you forget and try <code>s[1]</code> for the first character, you'll get the second character every time.</p>
<pre class="language-javascript"><code class="language-javascript">const word = 'code';
word[0];   // "c" — first
word[1];   // "o" — SECOND, not first
word[2];   // "d"
word[3];   // "e" — last
word[4];   // undefined — past the end</code></pre>

    <p><strong>Bracket notation on a string is read-only.</strong> You can READ characters with <code>s[0]</code>, but you cannot WRITE with <code>s[0] = 'H'</code>. Strings are immutable in JavaScript. The assignment fails silently in non-strict mode and throws in strict mode. To change a character, you have to build a new string with the change.</p>
<pre class="language-javascript"><code class="language-javascript">const s = 'hello';
s[0] = 'H';    // silently fails (or throws in strict mode)
s;             // still "hello" — unchanged

// To "change" a character, build a new string:
const modified = 'H' + s.slice(1);   // "Hello"
// or:
const arr = s.split('');
arr[0] = 'H';
const modified2 = arr.join('');      // "Hello"</code></pre>

    <p><strong>Out-of-bounds indexes return <code>undefined</code>, not an error.</strong> Reading <code>s[100]</code> on a 5-character string gives you <code>undefined</code>. This is safer than crashing but easier to miss — if your code does something with the returned character without checking, you can end up with <code>undefined</code> flowing through your logic. Always validate the index if it comes from user input or a calculation that might exceed the length.</p>

    <p><strong>Negative indexes with brackets don't work — but <code>.at()</code> does.</strong> <code>s[-1]</code> is <code>undefined</code>, not the last character. The modern <code>.at()</code> method supports negative indexes, counting from the end: <code>s.at(-1)</code> is the last character, <code>s.at(-2)</code> is the second-to-last, etc. <code>.at()</code> is available in all modern browsers and Node.js 16.6+.</p>
<pre class="language-javascript"><code class="language-javascript">const s = 'hello';
s[-1];             // undefined
s.at(-1);          // "o" — last character
s[s.length - 1];   // "o" — the older way to get the last character</code></pre>

    <p><strong>Each indexed character is itself a one-character string.</strong> JavaScript has no separate "char" type. When you access <code>s[0]</code>, you get a string of length 1. It behaves like any other string — you can call methods on it, compare it, concatenate it. This is different from some other languages where indexing produces a distinct character type.</p>

    <p><strong>Indexes count code units, not necessarily user-perceived characters.</strong> For plain ASCII text this doesn't matter, but for emoji, some accented characters, and non-Latin scripts, one visible character can be made of two "code units" — and indexes count code units. So <code>'😀'.length</code> is 2, not 1, and <code>'😀'[0]</code> returns a broken half of the emoji. If you're working with strings that may contain emoji or non-Latin characters and need to iterate by visible character, use <code>Array.from(s)</code> or the spread operator to split correctly.</p>
<pre class="language-javascript"><code class="language-javascript">const s = '😀hi';
s.length;              // 4 — emoji counts as 2 code units
s[0];                  // "\\uD83D" — half of the emoji, broken
Array.from(s);         // ["😀", "h", "i"] — split by visible characters
Array.from(s)[0];      // "😀" — the whole emoji
[...s].length;         // 3 — using spread also splits by visible character</code></pre>
  `,

  /* --- Chunk 1: Why & When --- */

  /* 1.0 What problem it solves */
  'topics-2-10-1-0': `
    <p>Sometimes you need to look at a specific character in a string. Is the first character an uppercase letter? Does the string end with a period? Is the third character a dash (for detecting a formatted phone number)? None of these questions can be answered by looking at the whole string as one thing — you need to pull out individual characters and examine them one at a time. Indexes are the mechanism that makes that possible.</p>
    <p>Indexes are also the foundation for most string algorithms. If you're iterating through a string character by character (searching, counting, transforming, validating), you either use indexes directly or use a loop construct that indexes under the hood. Understanding index-based access is prerequisite for reading and writing any code that processes strings in detail — and once you can index, you can reach for higher-level methods (<code>.slice</code>, <code>.substring</code>, <code>.indexOf</code>) with a real understanding of what positions they're operating on.</p>
  `,

  /* 1.1 Why use it */
  'topics-2-10-1-1': `
    <p>Reach for indexes when you need to inspect or manipulate specific characters by position. Checking whether a string starts with a particular character (<code>s[0] === '#'</code> for a hex color). Getting the last character to see if it needs punctuation added (<code>s[s.length - 1] !== '.'</code>). Extracting a fixed-position slice of a formatted string, like the country code from a phone number.</p>
    <p>For any pattern that isn't tied to a fixed position, prefer the higher-level string methods over manual index arithmetic. To check if a string starts with something, use <code>s.startsWith('#')</code> instead of <code>s[0] === '#'</code>. To check the end, use <code>s.endsWith('.')</code> instead of <code>s[s.length - 1] === '.'</code>. To find a substring, use <code>s.includes('foo')</code> instead of a loop that indexes character by character. These methods are more readable, less error-prone, and handle edge cases (empty strings, out-of-bounds) gracefully.</p>
    <p>Indexes shine when the position itself carries meaning — parsing a fixed-format string, iterating with a specific step size, or implementing algorithms that need explicit position tracking. For everything else, the modern string methods are usually a better fit.</p>
  `,

  /* 1.2 Where you use it */
  'topics-2-10-1-2': `
<pre class="language-javascript"><code class="language-javascript">// Checking the first character
const hex = '#3366ff';
if (hex[0] === '#') {
  // it's a hex color literal
}
// Better in this case: hex.startsWith('#')

// Checking the last character
const filename = 'notes.txt';
if (filename[filename.length - 1] === 't') {
  // ends with a 't'
}
// Better: filename.endsWith('t')

// Iterating character by character to count something
function countVowels(str) {
  let count = 0;
  for (let i = 0; i < str.length; i++) {
    if ('aeiou'.includes(str[i])) count++;
  }
  return count;
}
// Modern equivalent: 
//   [...str].filter(c => 'aeiou'.includes(c)).length

// Extracting a fixed-position piece of a formatted string
const phoneNumber = '+1-555-123-4567';
const countryCode = phoneNumber[1];   // "1"

// Building a new string by transforming each character
function reverse(str) {
  let result = '';
  for (let i = str.length - 1; i >= 0; i--) {
    result += str[i];
  }
  return result;
}
// Modern equivalent: [...str].reverse().join('')

// Palindrome check
function isPalindrome(str) {
  const s = str.toLowerCase();
  for (let i = 0; i < s.length / 2; i++) {
    if (s[i] !== s[s.length - 1 - i]) return false;
  }
  return true;
}

// Anywhere you need "the character at exact position N".</code></pre>
  `,

  /* 1.3 Plain English explanation */
  'topics-2-10-1-3': `
    <p>Imagine a string as a row of numbered mailboxes. The first mailbox is labeled 0, the next one is labeled 1, then 2, then 3, and so on. Each mailbox holds exactly one character. When you write <code>s[2]</code>, you're saying "open mailbox number 2 and hand me what's inside." You get whatever character is stored in that mailbox — nothing more, nothing less.</p>
    <p>The number is the mailbox label, not the character itself. Same string, different label, different character. And the labels start at 0, not 1 — which trips up almost everyone at first. The first mailbox is 0, so the string <code>'cat'</code> has mailbox 0 holding 'c', mailbox 1 holding 'a', and mailbox 2 holding 't'. There's no mailbox 3 — trying to open one that doesn't exist just gives you nothing (<code>undefined</code>), not an error.</p>
    <p>The other important quirk: the mailboxes are locked. You can look inside any of them, but you can't put a different letter in. If you want to "change" a letter, you have to build a whole new row of mailboxes with the change baked in. This is what "strings are immutable" means — the original row is fixed forever, and any modification produces a fresh row.</p>
  `,

  /* 1.4 Mental model */
  'topics-2-10-1-4': `
    <p>Think of a string as an array-like sequence of characters, each with a position. Indexes are the positions, starting from 0. Bracket notation is the read tool: <code>s[i]</code> hands you the character at position <code>i</code>. That's the whole mechanism — position in, character out.</p>
    <p>Two rules follow naturally. First, valid positions run from 0 to <code>length - 1</code>. Anything else returns <code>undefined</code> — including negative numbers, non-integers, and positions past the end. Second, the operation is one-way: you can read, but writing (<code>s[0] = 'x'</code>) silently fails because strings are frozen once created.</p>
    <p>This is the same mental model as an array — <code>arr[0]</code>, <code>arr[1]</code>, <code>arr.length</code> — and it's intentional. Arrays and strings share the "indexed sequence" pattern, and many operations that work on one work on the other. When you internalize how string indexes work, array indexing comes for free. When you learn array methods like <code>.slice</code>, you'll find they have string counterparts with similar semantics.</p>
    <p>The one thing that breaks the array analogy: strings can't be mutated by index assignment. Arrays let you do <code>arr[0] = 'x'</code>, but strings don't. This asymmetry is the source of a lot of "I converted my string to an array, changed one character, and joined it back" workaround code — it's the standard technique when you need to modify a string by position.</p>
  `,

  /* 1.5 Step-by-step walkthrough */
  'topics-2-10-1-5': `
<pre class="language-javascript"><code class="language-javascript">// Scenario: check whether a string is a palindrome
// (reads the same forwards and backwards).
const word = 'racecar';

function isPalindrome(str) {
  const s = str.toLowerCase();
  for (let i = 0; i < s.length / 2; i++) {
    if (s[i] !== s[s.length - 1 - i]) return false;
  }
  return true;
}

// What happens when isPalindrome('racecar') runs, step by step:

// Step 1: str = "racecar"
//         s = "racecar" (already lowercase)
//         s.length = 7
//         Loop runs while i < 7/2 = 3.5, so i goes 0, 1, 2, 3

// Step 2: i = 0
//         s[0] = "r"
//         s[s.length - 1 - 0] = s[6] = "r"
//         "r" !== "r" is false — no return, continue

// Step 3: i = 1
//         s[1] = "a"
//         s[s.length - 1 - 1] = s[5] = "a"
//         "a" !== "a" is false — continue

// Step 4: i = 2
//         s[2] = "c"
//         s[s.length - 1 - 2] = s[4] = "c"
//         "c" !== "c" is false — continue

// Step 5: i = 3
//         s[3] = "e"
//         s[s.length - 1 - 3] = s[3] = "e" (same middle character)
//         "e" !== "e" is false — continue

// Step 6: i = 4 — condition i < 3.5 is false, loop ends

// Step 7: Return true

// The pattern here: compare pairs of characters from opposite ends
// working inward. Index 0 pairs with length-1. Index 1 pairs with length-2.
// And so on until you meet in the middle. This is a classic use of string
// indexes — the algorithm is defined in terms of positions.

isPalindrome('racecar');    // true
isPalindrome('hello');      // false — s[0]="h" vs s[4]="o"
isPalindrome('a');          // true — single character, loop doesn't run
isPalindrome('');           // true — empty, loop doesn't run</code></pre>
  `,

  /* --- Chunk 2: The Click --- */

  /* 2.0 Debugging clue */
  'topics-2-10-2-0': `
    <p>Index-related bugs cluster around a few recognizable patterns.</p>
    <p><strong>1. Off-by-one on the first or last character.</strong> You wrote <code>s[1]</code> expecting the first character (it's actually the second), or <code>s[s.length]</code> expecting the last (it's actually <code>undefined</code>). Fix: remember the pattern — first is <code>s[0]</code>, last is <code>s[s.length - 1]</code> or <code>s.at(-1)</code>.</p>
    <p><strong>2. <code>undefined</code> flowing through your code.</strong> An out-of-bounds index returns <code>undefined</code>, and if you don't check for it, the <code>undefined</code> propagates into whatever operation you do next. <code>undefined.toUpperCase()</code> throws. <code>undefined === 'a'</code> is <code>false</code>. Fix: validate your index is in range before using the result, or use optional chaining and a default.</p>
    <p><strong>3. Trying to modify a character with bracket assignment.</strong> You wrote <code>s[0] = 'H'</code> to capitalize the first letter, but the string didn't change. Strings are immutable — assignment silently fails. Fix: build a new string with the change, using <code>s.slice</code> or splitting/joining.</p>
    <p><strong>4. Negative index returning <code>undefined</code>.</strong> You wrote <code>s[-1]</code> expecting the last character (a habit from Python or Ruby). JavaScript brackets don't support negative indexes. Fix: use <code>s.at(-1)</code> or <code>s[s.length - 1]</code>.</p>
    <p><strong>5. Broken emoji or accented characters when indexing.</strong> You wrote <code>emoji[0]</code> and got half of the emoji — a broken Unicode surrogate. Fix: use <code>Array.from(str)</code> or <code>[...str]</code> to split by visible character, then index the resulting array.</p>
    <p><strong>6. Infinite loop or wrong loop bound.</strong> You wrote <code>for (let i = 0; i <= s.length; i++)</code> and the loop ran one extra time with <code>s[length]</code> being <code>undefined</code>. Fix: use <code>&lt;</code>, not <code>&lt;=</code>, when looping up to <code>length</code>.</p>
  `,

  /* 2.1 The part that makes it click */
  'topics-2-10-2-1': `
    <p>A string is an ordered sequence of characters with positions numbered from 0. Bracket notation is the read operation for those positions. That's it. Once you internalize "position in, character out, starting at 0," almost every string index bug becomes obvious in retrospect.</p>
    <p>Two follow-on truths make everything else fall into place. First, bracket read is safe — out-of-bounds returns <code>undefined</code>, not an error — so indexing never crashes but can flow bad values downstream if you don't check. Second, bracket write doesn't work at all — strings are immutable, so any character modification requires building a new string. These two rules aren't intuitive coming from other languages, but once they click, you'll stop reaching for bracket assignment and start reaching for the string-building patterns that actually work.</p>
  `,

  /* 2.2 Common confusions */
  'topics-2-10-2-2': `
    <p><strong>Confusion: "indexes start at 1"</strong></p>
    <p>They start at 0. This is universal across almost every programming language (a few outliers like Lua start at 1, but JavaScript is 0-based). The first character of any string is at index 0. Memorize it and it'll become automatic.</p>

    <p><strong>Confusion: "the last character is at <code>s.length</code>"</strong></p>
    <p>It's at <code>s.length - 1</code>. If a string has length 5, the valid indexes are 0, 1, 2, 3, 4 — five positions, but the highest is 4, not 5. Position 5 is one past the end.</p>
<pre class="language-javascript"><code class="language-javascript">const s = 'hello';
s.length;      // 5
s[4];          // "o" — last character (index 4)
s[5];          // undefined — past the end</code></pre>

    <p><strong>Confusion: "<code>s[0] = 'H'</code> changes the first character"</strong></p>
    <p>It doesn't. Strings are immutable — assignment via bracket silently does nothing (or throws in strict mode). Build a new string with the change.</p>
<pre class="language-javascript"><code class="language-javascript">const s = 'hello';
s[0] = 'H';        // silently ignored
s;                  // still "hello"

// Correct way:
const capitalized = 'H' + s.slice(1);   // "Hello"</code></pre>

    <p><strong>Confusion: "negative indexes work like in Python"</strong></p>
    <p>Not with brackets. <code>s[-1]</code> is <code>undefined</code>. Use <code>s.at(-1)</code> or <code>s[s.length - 1]</code>.</p>

    <p><strong>Confusion: "<code>s[i]</code> and <code>s.charAt(i)</code> are identical"</strong></p>
    <p>Almost. The main difference is out-of-bounds behavior. <code>s[100]</code> returns <code>undefined</code>. <code>s.charAt(100)</code> returns <code>""</code> (empty string). Both are safe (no error), but the return types differ. Modern code uses brackets; <code>charAt</code> is older but still supported.</p>

    <p><strong>Confusion: "indexing an emoji works normally"</strong></p>
    <p>It doesn't — most emoji are two code units, so indexing gives you half. <code>'😀'.length</code> is 2, and <code>'😀'[0]</code> is a broken surrogate character. To index by visible character, spread into an array first: <code>[...'😀'][0]</code> gives you the whole emoji.</p>

    <p><strong>Confusion: "the result of <code>s[i]</code> is a special 'char' type"</strong></p>
    <p>It's a regular string of length 1. JavaScript has no separate char type. <code>typeof s[0]</code> is <code>"string"</code>, and it has all the string methods.</p>
  `,

  /* 2.3 Common mistakes */
  'topics-2-10-2-3': `
<pre class="language-javascript"><code class="language-javascript">// Off-by-one on the first character
const s = 'hello';
const first = s[1];
// wrong: s[1] is "e", not "h"
// fix: use index 0 → s[0]</code></pre>

<pre class="language-javascript"><code class="language-javascript">// Off-by-one on the last character
const s = 'hello';
const last = s[s.length];
// wrong: s[5] is undefined — length is 5, but indexes go 0-4
// fix: use s[s.length - 1] or s.at(-1)</code></pre>

<pre class="language-javascript"><code class="language-javascript">// Trying to modify a character with bracket assignment
const s = 'hello';
s[0] = 'H';
console.log(s);
// wrong: s is still "hello" — assignment silently fails
// fix: build a new string
const s2 = 'H' + s.slice(1);   // "Hello"</code></pre>

<pre class="language-javascript"><code class="language-javascript">// Using negative index like Python
const s = 'hello';
const last = s[-1];
// wrong: s[-1] is undefined, not "o"
// fix: use s.at(-1) or s[s.length - 1]</code></pre>

<pre class="language-javascript"><code class="language-javascript">// Loop that reads one past the end
const s = 'hello';
for (let i = 0; i <= s.length; i++) {
  console.log(s[i]);
}
// wrong: last iteration has i = 5, s[5] is undefined
// fix: use < instead of <=
for (let i = 0; i < s.length; i++) {
  console.log(s[i]);
}</code></pre>

<pre class="language-javascript"><code class="language-javascript">// Using an unchecked out-of-bounds result
function firstUpper(str) {
  return str[0].toUpperCase();
}
firstUpper('');
// wrong: str[0] is undefined for empty string — undefined.toUpperCase() throws
// fix: check for empty first
function firstUpper2(str) {
  if (!str) return '';
  return str[0].toUpperCase();
}</code></pre>

<pre class="language-javascript"><code class="language-javascript">// Indexing an emoji and getting half of it
const s = '😀hi';
const first = s[0];
// wrong: s[0] is half the emoji — a broken surrogate character
// fix: spread into an array first
const first2 = [...s][0];   // "😀"</code></pre>

<pre class="language-javascript"><code class="language-javascript">// Assuming bracket access throws for missing indexes
const s = 'hello';
try {
  const ch = s[100];
} catch (e) {
  // handle error
}
// wrong: no error is thrown — s[100] is just undefined
// fix: check the result directly
if (s[100] !== undefined) { /* ... */ }</code></pre>

<pre class="language-javascript"><code class="language-javascript">// Using bracket notation when a higher-level method exists
const s = 'hello.txt';
if (s[s.length - 4] === '.' && s[s.length - 3] === 't' && s[s.length - 2] === 'x' && s[s.length - 1] === 't') {
  // it ends with .txt
}
// works but ugly and fragile
// fix: use endsWith
if (s.endsWith('.txt')) { /* ... */ }</code></pre>
  `,

  /* --- Chunk 3: In Practice --- */

  /* 3.0 Tiny examples */
  'topics-2-10-3-0': `
<pre class="language-javascript"><code class="language-javascript">const s = 'JavaScript';

// Basic access
s[0];              // "J" — first
s[1];              // "a"
s[s.length - 1];   // "t" — last
s.at(-1);          // "t" — last (modern)
s.at(-2);          // "p" — second-to-last

// Length is one past the highest index
s.length;          // 10 — highest valid index is 9

// Out of bounds
s[100];            // undefined
s[-1];             // undefined (use .at(-1) instead)
s.charAt(100);     // "" (empty string, not undefined)

// Each indexed value is a string of length 1
typeof s[0];       // "string"
s[0].length;       // 1

// Immutable — assignment silently fails
s[0] = 'j';
s;                 // still "JavaScript"

// Loop by index
for (let i = 0; i < s.length; i++) {
  console.log(i, s[i]);
}

// for...of gives you characters directly
for (const ch of s) {
  console.log(ch);
}

// Spread into an array
[...s];            // ["J", "a", "v", "a", "S", "c", "r", "i", "p", "t"]
[...s].length;     // 10

// Emoji quirk
'😀'.length;        // 2 (two code units)
'😀'[0];            // broken surrogate — not the emoji
[...'😀'].length;   // 1 (one visible character)
[...'😀'][0];       // "😀" — the whole emoji</code></pre>
  `,

  /* 3.1 Real website uses */
  'topics-2-10-3-1': `
    <p><strong>Example: capitalizing the first letter of a name</strong></p>
<pre class="language-javascript"><code class="language-javascript">const name = 'os';
const capitalized = name[0].toUpperCase() + name.slice(1);   // "Os"</code></pre>

    <p><strong>Example: getting the initial from a full name</strong></p>
<pre class="language-javascript"><code class="language-javascript">const fullName = 'Os Dev';
const initial = fullName[0];   // "O"</code></pre>

    <p><strong>Example: checking whether a hex color includes the leading #</strong></p>
<pre class="language-javascript"><code class="language-javascript">const color = userInput.value.trim();
const withHash = color[0] === '#' ? color : '#' + color;</code></pre>

    <p><strong>Example: extracting the file extension</strong></p>
<pre class="language-javascript"><code class="language-javascript">const filename = 'notes.txt';
const dotIndex = filename.lastIndexOf('.');
const ext = filename.slice(dotIndex + 1);   // "txt"</code></pre>

    <p><strong>Example: iterating for character-level validation</strong></p>
<pre class="language-javascript"><code class="language-javascript">function isDigitsOnly(str) {
  for (let i = 0; i < str.length; i++) {
    if (str[i] < '0' || str[i] > '9') return false;
  }
  return true;
}</code></pre>

    <p><strong>Example: reversing a string</strong></p>
<pre class="language-javascript"><code class="language-javascript">function reverse(str) {
  return [...str].reverse().join('');
}
reverse('hello');   // "olleh"</code></pre>
  `,

  /* 3.2 Connects to */
  'topics-2-10-3-2': `
    <ul>
      <li><strong><code>.length</code></strong> → total number of characters; last valid index is <code>length - 1</code></li>
      <li><strong><code>.at()</code></strong> → modern accessor that supports negative indexes (unlike brackets)</li>
      <li><strong><code>.charAt()</code></strong> → older accessor; returns <code>""</code> for out-of-bounds instead of <code>undefined</code></li>
      <li><strong><code>.slice()</code></strong> → extract a range of characters by index</li>
      <li><strong>String immutability</strong> → why bracket assignment silently fails; every "modification" builds a new string</li>
      <li><strong>Array indexing</strong> → same 0-based pattern, but arrays support bracket write</li>
      <li><strong>Iteration</strong> → <code>for</code> loops with indexes vs <code>for...of</code> for characters directly</li>
      <li><strong>Emoji and Unicode</strong> → indexing counts code units; use <code>[...str]</code> for visible characters</li>
      <li><strong>Debugging</strong> → out-of-bounds returns <code>undefined</code>, not an error; validate ranges to prevent bad values downstream</li>
    </ul>
  `,

  /* 3.3 See also */
  'topics-2-10-3-3': `
    <ul>
      <li><code>.length</code></li>
      <li>Common methods</li>
      <li>String immutability</li>
      <li>Array indexes</li>
      <li>String iteration</li>
      <li>Common string mistakes</li>
      <li>Debugging strings</li>
      <li>Unicode and emoji handling</li>
    </ul>
  `,

  /* ========================================================= 
   Sub-lesson: 3.3.12 Strings → .length
 =======================================================*/

  /* --- Chunk 0: What & How --- */

  /* 0.0 What it is */
  'topics-2-11-0-0': `
    <p><code>.length</code> is a <strong>property</strong> on every string that tells you how many characters the string contains. Not a method — a property. That means you access it without parentheses: <code>word.length</code>, not <code>word.length()</code>. The value is always a non-negative integer, updated automatically to reflect the string's current character count.</p>
    <p>Length is the string's single most-used property. It answers questions like "is this empty?", "is this within the max?", and "where's the last character?". It's also the standard loop bound when iterating character by character. Every time you deal with a string's size, indexing, or bounds, <code>.length</code> is what you reach for.</p>
  `,

  /* 0.1 Syntax */
  'topics-2-11-0-1': `
<pre class="language-javascript"><code class="language-javascript">// Basic usage — property access, no parentheses:
'hello'.length;              // 5
''.length;                    // 0 — empty string
'a'.length;                   // 1 — single character
'    '.length;                // 4 — four spaces, all counted
'hello world'.length;         // 11 — space counts too

// Works on any string — literals, variables, template literals:
const name = 'Os';
name.length;                  // 2

const greeting = \`hello \${name}\`;
greeting.length;              // 8 — length of the finished string "hello Os"

// Works on the result of any expression that produces a string:
'hi'.repeat(3).length;        // 6 — "hihihi"
(5 + 3 + '').length;          // 1 — "8" is 1 character

// Wrong: calling it like a method
const word = 'hello';
word.length();                // TypeError — length is not a function
// fix: no parentheses → word.length

// Wrong: capital L
word.Length;                  // undefined — case matters
// fix: lowercase → word.length

// Length is READ-ONLY — assignment silently fails:
const tweet = 'hello';
tweet.length = 2;             // silently ignored (in non-strict mode)
tweet;                        // still "hello"

// Common patterns using length:
name.length === 0;            // empty check
name[name.length - 1];        // last character
tweet.length > 100;           // too long?
for (let i = 0; i < word.length; i++) { /* iterate */ }</code></pre>
  `,

  /* 0.2 Anatomy / Breakdown */
  'topics-2-11-0-2': `
<pre class="language-javascript"><code class="language-javascript">const word = 'hello';

// Visualize the string with its index positions and its length:
//
//   index:   0    1    2    3    4
//   char:    h    e    l    l    o
//   length:  ─────────5────────────
//
// length = 5 means there are 5 characters total.
// The valid indexes run from 0 to 4 (that's length - 1).
// There is no character at index 5 — that's one past the end.

word.length;               // 5
word[0];                   // "h" — first (index 0)
word[word.length - 1];     // "o" — last (index 4)
word[word.length];         // undefined — index 5 is past the end

// The relationship you'll use constantly:
//   number of characters:  word.length
//   first valid index:     0
//   last valid index:      word.length - 1
//   first out-of-bounds:   word.length

// Property, not method — no parentheses:
word.length;               // ✓ correct
word.length();             // ✗ TypeError: word.length is not a function

// Read-only — attempts to change it fail silently:
word.length = 2;           // no error, but no change either
word;                      // still "hello"
word.length;               // still 5

// The value updates automatically when you build a new string:
const longer = word + ' world';
longer.length;             // 11 — reflects the new string's size
word.length;               // still 5 — the original is unchanged</code></pre>
  `,

  /* 0.3 Syntax Details That Matter */
  'topics-2-11-0-3': `
    <p><strong><code>.length</code> is a property, not a method — no parentheses.</strong> This is the number one source of "length is not a function" errors. In JavaScript, property access uses just the dot: <code>name.length</code>. Method calls use dot plus parentheses: <code>name.toUpperCase()</code>. Length is always the former.</p>
<pre class="language-javascript"><code class="language-javascript">const name = 'Os';
name.length;      // 2 — correct
name.length();    // TypeError — length is not a function

// If you get "TypeError: x.length is not a function", you added ()
// somewhere that shouldn't have them.</code></pre>

    <p><strong>Length counts characters, not visible width.</strong> Every character in the string is counted — including spaces, tabs, newlines, and any other whitespace. A string of 5 spaces has length 5. A string with a newline in the middle counts the newline as one character.</p>
<pre class="language-javascript"><code class="language-javascript">' '.length;              // 1
'   '.length;            // 3
'hi\\nbye'.length;        // 6 — "h", "i", newline, "b", "y", "e"
'\\t'.length;             // 1 — one tab character
'\\n'.length;             // 1 — one newline character
''.length;               // 0 — empty

const poem = \`multi
line\`;
poem.length;             // 10 — includes the newline</code></pre>

    <p><strong>Length counts code units, not user-perceived characters.</strong> For plain ASCII text this is intuitive, but for emoji and some non-Latin scripts, one visible character can be made of two code units — and <code>.length</code> counts each one. So <code>'😀'.length</code> is 2, not 1. If you need to count visible characters, spread the string into an array first: <code>[...'😀'].length</code> is 1.</p>
<pre class="language-javascript"><code class="language-javascript">'😀'.length;              // 2 — emoji is 2 code units
'👨‍👩‍👧'.length;              // 8 — family emoji uses combining code units
[...'😀'].length;         // 1 — spread splits by visible character
[...'👨‍👩‍👧'].length;         // 5 — depends on the specific composition

// Rule of thumb: for ASCII/plain text, .length is accurate.
// For emoji or mixed scripts, use [...str].length or Array.from(str).length
// when you need visible-character counts.</code></pre>

    <p><strong>Length is read-only.</strong> Attempts to assign to <code>.length</code> are silently ignored (or throw in strict mode). This is different from arrays, where <code>arr.length = 2</code> actually truncates the array. Strings are immutable, so there's no meaningful way to "shorten" a string in place — you have to build a new one with <code>.slice()</code> or similar.</p>
<pre class="language-javascript"><code class="language-javascript">const message = 'hello';
message.length = 2;                // silently fails
message;                           // still "hello"

// To "shorten" a string, build a new one:
const shorter = message.slice(0, 2);      // "he"
const shorter2 = message.substring(0, 2); // "he"</code></pre>

    <p><strong>Length is <code>0</code> for empty strings — a common test.</strong> Both <code>value === ''</code> and <code>value.length === 0</code> check for an empty string. Either works; length is often clearer when you're already thinking about the string's size. Note that this only tests for <em>empty</em> — a string of only spaces (<code>'   '</code>) has length 3, not 0. If you want to check for "empty or whitespace-only", use <code>value.trim().length === 0</code>.</p>
<pre class="language-javascript"><code class="language-javascript">''.length === 0;              // true — empty
'   '.length === 0;           // false — whitespace still counts
'   '.trim().length === 0;    // true — trimmed is empty</code></pre>
  `,

  /* --- Chunk 1: Why & When --- */

  /* 1.0 What problem it solves */
  'topics-2-11-1-0': `
    <p>Almost every string operation eventually needs to know "how many characters are in this?" You can't loop through a string without knowing where to stop. You can't grab the last character without knowing where the string ends. You can't validate that user input is within a max length without measuring it. You can't check whether a field is empty without asking whether its length is zero. <code>.length</code> is the answer to all of these.</p>
    <p>It also solves a UI validation problem that comes up everywhere: enforcing character limits on form fields. Twitter posts, SMS messages, username fields, form textareas — anywhere the interface says "N characters max" or "N characters remaining", the code driving that count is calling <code>.length</code> on the input value and comparing against a limit. Without <code>.length</code>, you'd have to iterate through every character to count them yourself, which is exactly what <code>.length</code> saves you from.</p>
  `,

  /* 1.1 Why use it */
  'topics-2-11-1-1': `
    <p>Use <code>.length</code> any time you need to know a string's size, and use it as the standard idiom rather than counting manually. It's built into the string and updated automatically — reading <code>.length</code> is a constant-time operation, essentially free. Don't ever loop through a string to count its characters when <code>.length</code> gives you the answer instantly.</p>
    <p>The most common patterns: empty checks (<code>value.length === 0</code> or the equivalent <code>!value</code> for a truthiness check), max-length validation (<code>tweet.length &lt;= 280</code>), last-character access (<code>word[word.length - 1]</code>), and loop bounds (<code>for (let i = 0; i &lt; word.length; i++)</code>). If you're writing any of these patterns and reaching for a different tool, you're probably overcomplicating it.</p>
    <p>The one caveat: if your strings can contain emoji or non-Latin characters and you need <em>visible-character</em> counts (not code-unit counts), <code>.length</code> alone will lie to you. In that case, spread into an array first: <code>[...str].length</code>. For most Western-language form validation this doesn't matter — but if your app processes user names, chat messages, or any text where users might type an emoji, be aware of the difference.</p>
  `,

  /* 1.2 Where you use it */
  'topics-2-11-1-2': `
<pre class="language-javascript"><code class="language-javascript">// Empty check
if (input.value.length === 0) {
  error.textContent = 'Please enter a value';
}
// Equivalent shortcut using truthiness:
if (!input.value) { /* ... */ }

// Max-length validation
const message = textarea.value;
if (message.length > 280) {
  error.textContent = 'Message is too long';
}

// Character count display (Twitter-style)
const tweet = tweetInput.value;
counter.textContent = \`\${tweet.length}/280\`;

// Remaining characters
const remaining = 280 - tweet.length;
counter.textContent = \`\${remaining} left\`;

// Iterating character by character with a for loop
const password = 'abc123';
for (let i = 0; i < password.length; i++) {
  console.log(i, password[i]);
}

// Getting the last character
const filename = 'notes.txt';
const lastChar = filename[filename.length - 1];   // "t"
// Modern equivalent:
const lastChar2 = filename.at(-1);                 // "t"

// Slicing off the last character (e.g., removing trailing punctuation)
const sentence = 'Hello.';
const withoutPeriod = sentence.slice(0, sentence.length - 1);   // "Hello"
// Or equivalent:
const withoutPeriod2 = sentence.slice(0, -1);                   // "Hello"

// Minimum length check (e.g., password requirements)
if (password.length < 8) {
  error.textContent = 'Password must be at least 8 characters';
}

// Checking if a trimmed string has content (whitespace doesn't count)
if (input.value.trim().length === 0) {
  error.textContent = 'Please enter something';
}

// Anywhere you need to measure, validate, or bound a string.</code></pre>
  `,

  /* 1.3 Plain English explanation */
  'topics-2-11-1-3': `
    <p>Imagine a string as a row of numbered mailboxes. <code>.length</code> is the number of mailboxes in the row. If you have five mailboxes, the length is 5. Even if some of them contain a space or a tab or something invisible, they still count — a mailbox with a space in it is still a mailbox. Only completely non-existent slots don't count.</p>
    <p>The length is a fixed fact about the row itself. You don't have to walk down the row counting mailboxes — the length is written on a plaque at the front. Reading it is instant. And the plaque is glued down — you can't rewrite it to a smaller number and shrink the row. If you want a shorter row, you have to build a new one with fewer mailboxes.</p>
    <p>The one place this analogy breaks down is emoji. Some emoji are so complex that they're actually stored across two mailboxes internally, even though they look like one thing on your screen. So the length says 2 even though you see 1 character. This only matters for text that mixes emoji or non-Latin scripts — for plain English text, the length is always exactly the number of visible characters you'd count by eye.</p>
  `,

  /* 1.4 Mental model */
  'topics-2-11-1-4': `
    <p>Every string carries its length as a built-in property, computed when the string is created and stored alongside the character data. Reading <code>.length</code> just returns that stored number — no counting happens at read time. This is why length lookups are constant-time no matter how long the string is: a 5-character string and a 5-million-character string both report their length in the same instant.</p>
    <p>The length is a fixed fact about a string, tied to its specific character content. Two strings with the same content have the same length. Different content produces different lengths. There's no way to "change" the length of an existing string, because strings are immutable — every "modification" (concatenation, slicing, replacement) produces a new string with its own length property, computed at creation.</p>
    <p>The core relationship to remember: <em>the highest valid index is always <code>length - 1</code></em>. If a string has length 5, its indexes go 0, 1, 2, 3, 4 — that's 5 slots, but they end at index 4. Reading position <code>length</code> gives you <code>undefined</code>, because <code>length</code> itself is one past the last real character. Every off-by-one bug involving strings comes back to this relationship — either forgetting that indexes are zero-based, or forgetting that length is one more than the last index.</p>
  `,

  /* 1.5 Step-by-step walkthrough */
  'topics-2-11-1-5': `
<pre class="language-javascript"><code class="language-javascript">// Scenario: a tweet composer with a character counter.
// Show the current count, update on every keystroke, warn if too long.

// The HTML:
// &lt;textarea id="tweet" maxlength="500"&gt;&lt;/textarea&gt;
// &lt;span id="counter"&gt;0/280&lt;/span&gt;

const tweetInput = document.querySelector('#tweet');
const counter = document.querySelector('#counter');
const MAX = 280;

tweetInput.addEventListener('input', () => {
  const text = tweetInput.value;
  const count = text.length;

  counter.textContent = \`\${count}/\${MAX}\`;

  if (count > MAX) {
    counter.style.color = 'red';
  } else {
    counter.style.color = '';
  }
});

// What happens on each keystroke, step by step:

// Step 1: User types a character in the textarea.
//         The browser fires an "input" event on the textarea.

// Step 2: The handler runs.
//         const text = tweetInput.value;
//         .value on a textarea always returns a string, always fresh.
//         If the user has typed "Hello", text is "Hello".

// Step 3: const count = text.length;
//         .length is a property on the string, computed at string creation.
//         For "Hello", count is 5.
//         This lookup is instant — no counting happens.

// Step 4: counter.textContent = \`\${count}/\${MAX}\`;
//         The template literal builds "5/280".
//         Setting textContent updates the visible counter.

// Step 5: if (count > MAX) { ... }
//         5 > 280 is false — no color change.
//         The user is well within the limit.

// Later, if the user pastes 300 characters:

// Step 6: count is now 300.
//         counter shows "300/280".
//         count > MAX is true.
//         counter turns red — visual warning.

// The whole flow relies on .length being:
//   (a) fast — called on every keystroke
//   (b) accurate — for ASCII text, it matches visible character count
//   (c) always available — every string has .length

// Note: for tweets with emoji, .length counts code units, so an emoji
// counts as 2 toward the max. This is actually how Twitter USED to work
// (before they changed the algorithm), but if you want emoji to count
// as 1, use [...text].length instead.</code></pre>
  `,

  /* --- Chunk 2: The Click --- */

  /* 2.0 Debugging clue */
  'topics-2-11-2-0': `
    <p><code>.length</code>-related bugs come in a few recognizable shapes.</p>
    <p><strong>1. "TypeError: x.length is not a function"</strong>. You wrote <code>name.length()</code> with parentheses. Length is a property, not a method. Fix: remove the parentheses — just <code>name.length</code>.</p>
    <p><strong>2. Off-by-one on the last character.</strong> You wrote <code>word[word.length]</code> expecting the last character and got <code>undefined</code>. The last valid index is <code>length - 1</code>, not <code>length</code>. Fix: use <code>word[word.length - 1]</code> or the modern <code>word.at(-1)</code>.</p>
    <p><strong>3. Loop that runs one extra time.</strong> You wrote <code>for (let i = 0; i &lt;= message.length; i++)</code> and the last iteration reads position <code>length</code>, which is <code>undefined</code>. Fix: use <code>&lt;</code>, not <code>&lt;=</code>.</p>
    <p><strong>4. Empty check that fails for whitespace-only input.</strong> You wrote <code>if (input.value.length === 0)</code> and thought you were rejecting empty input, but users can still submit strings of only spaces or tabs (length &gt; 0). Fix: use <code>input.value.trim().length === 0</code> to also reject whitespace.</p>
    <p><strong>5. Length count doesn't match what the user sees (emoji case).</strong> Your app says "50/280 characters" but the user sees 40 characters on screen. Some of them are emoji, which count as 2 code units each. Fix: for user-visible counts, use <code>[...text].length</code> instead of <code>text.length</code>. This is a common issue in chat apps, comment fields, and social media inputs.</p>
    <p><strong>6. Assignment to length has no effect.</strong> You wrote <code>message.length = 2</code> hoping to truncate the string. Nothing changes because length is read-only on strings. Fix: use <code>message.slice(0, 2)</code> to build a shorter new string.</p>
    <p><strong>7. Length reads as <code>undefined</code>.</strong> You tried <code>value.length</code> and got <code>undefined</code>. Most likely, <code>value</code> is not a string — it's <code>null</code>, <code>undefined</code>, or some other value type without a length property (like a number). Check the type with <code>typeof value</code>.</p>
  `,

  /* 2.1 The part that makes it click */
  'topics-2-11-2-1': `
    <p><code>.length</code> is a property that stores the string's character count, computed at string creation and always available for instant read. It's not a function, not a method, and it's not something you can change. It just reports how many characters are in the string.</p>
    <p>The relationship between length and index is the thing to internalize once and never forget: <em>length is one more than the last valid index</em>. If a string has length 5, its indexes go 0 to 4. The last character sits at position 4 (that's <code>length - 1</code>), and position 5 is off the end (returns <code>undefined</code>). This one relationship generates almost every off-by-one bug involving strings, and understanding it deeply is what makes those bugs stop happening.</p>
  `,

  /* 2.2 Common confusions */
  'topics-2-11-2-2': `
    <p><strong>Confusion: "length is a method, so I need parentheses"</strong></p>
    <p>It's a property. No parentheses. Adding them causes <code>TypeError: x.length is not a function</code>.</p>
<pre class="language-javascript"><code class="language-javascript">const name = 'Os';
name.length;      // 2 — property access
name.length();    // TypeError — length isn't callable</code></pre>

    <p><strong>Confusion: "the last character sits at position <code>length</code>"</strong></p>
    <p>It sits at position <code>length - 1</code>. Position <code>length</code> is one past the end and returns <code>undefined</code>. Think of it like street addresses on a block of 5 houses — the addresses are 0, 1, 2, 3, 4. The last house is at address 4, not address 5. Address 5 is off the block.</p>

    <p><strong>Confusion: "an empty string has length <code>undefined</code>"</strong></p>
    <p>It has length <code>0</code>. Empty is still a valid string, and its length is a real number, just zero.</p>
<pre class="language-javascript"><code class="language-javascript">''.length;         // 0
typeof ''.length;  // "number"</code></pre>

    <p><strong>Confusion: "whitespace doesn't count toward length"</strong></p>
    <p>It absolutely does. Every character between the quotes counts, visible or not.</p>
<pre class="language-javascript"><code class="language-javascript">' '.length;        // 1
'   '.length;      // 3
'\\n'.length;       // 1
'\\t'.length;       // 1</code></pre>

    <p><strong>Confusion: "I can shrink a string by setting <code>message.length = 3</code>"</strong></p>
    <p>You can't. Strings are immutable, so the assignment is silently ignored. This works on arrays (<code>arr.length = 3</code> truncates the array), but not on strings. To shorten a string, use <code>.slice()</code>.</p>

    <p><strong>Confusion: "length equals visible character count"</strong></p>
    <p>For plain ASCII text, yes. For emoji and some non-Latin scripts, no — length counts code units, which can be 2 per visible character. Use <code>[...str].length</code> if you need visible-character counts.</p>

    <p><strong>Confusion: "length changes when I concatenate"</strong></p>
    <p>The original string's length never changes — strings are immutable. Concatenation produces a NEW string with its own length. If you have <code>let greeting = 'hi'</code> and do <code>greeting += 'yo'</code>, <code>greeting</code> is now a different string (<code>"hiyo"</code>) with a different length (4). The old <code>"hi"</code> string still has length 2 — you just don't have a reference to it anymore.</p>
  `,

  /* 2.3 Common mistakes */
  'topics-2-11-2-3': `
<pre class="language-javascript"><code class="language-javascript">// Calling length as a method
const count = 'hello'.length();
// wrong: TypeError — length is not a function
// fix: no parentheses
const count2 = 'hello'.length;</code></pre>

<pre class="language-javascript"><code class="language-javascript">// Reading past the end of the string
const word = 'hello';
const last = word[word.length];
// wrong: word[5] is undefined — length is 5, last index is 4
// fix: use word.length - 1
const last2 = word[word.length - 1];
// or use .at(-1)
const last3 = word.at(-1);</code></pre>

<pre class="language-javascript"><code class="language-javascript">// Loop bound off by one
const password = 'abc123';
for (let i = 0; i <= password.length; i++) {
  console.log(password[i]);
}
// wrong: last iteration prints undefined
// fix: use < instead of <=
for (let i = 0; i < password.length; i++) {
  console.log(password[i]);
}</code></pre>

<pre class="language-javascript"><code class="language-javascript">// Whitespace-only strings passing an empty check
const input = '   ';
if (input.length === 0) {
  // this doesn't run — length is 3, not 0
}
// fix: trim first if whitespace shouldn't count
if (input.trim().length === 0) {
  // catches empty and whitespace-only
}</code></pre>

<pre class="language-javascript"><code class="language-javascript">// Trying to shorten a string by assigning to length
const title = 'hello world';
title.length = 5;
console.log(title);
// wrong: title is still "hello world" — assignment ignored
// fix: use slice
const shorter = title.slice(0, 5);   // "hello"</code></pre>

<pre class="language-javascript"><code class="language-javascript">// Comparing length of user input that contains emoji
const tweet = '🎉🎉🎉🎉🎉';
if (tweet.length > 5) {
  // this runs even though the user typed 5 emoji
  // .length is 10 because each emoji is 2 code units
}
// fix: use spread for visible-character count
if ([...tweet].length > 5) { /* ... */ }</code></pre>

<pre class="language-javascript"><code class="language-javascript">// Reading length on a value that isn't a string
const value = null;
const count = value.length;
// wrong: TypeError — Cannot read properties of null
// fix: check the value first
const count2 = (typeof value === 'string') ? value.length : 0;</code></pre>

<pre class="language-javascript"><code class="language-javascript">// Assuming length is expensive so caching it in a loop
const message = 'hello world';
const len = message.length;   // "optimization"
for (let i = 0; i < len; i++) {
  console.log(message[i]);
}
// works, but unnecessary — length lookup is already free
// modern engines cache this automatically; write clearly:
for (let i = 0; i < message.length; i++) { /* ... */ }</code></pre>
  `,

  /* --- Chunk 3: In Practice --- */

  /* 3.0 Tiny examples */
  'topics-2-11-3-0': `
<pre class="language-javascript"><code class="language-javascript">// Basic
'hello'.length;              // 5
''.length;                    // 0
'a'.length;                   // 1
' '.length;                   // 1 — space counts
'   '.length;                // 3 — three spaces
'\\n'.length;                 // 1 — newline is one character
'\\t'.length;                 // 1 — tab is one character

// With variables
const name = 'Os';
name.length;                  // 2

// Length of a computed string
const greeting = name + ' Dev';
greeting.length;              // 6 — "Os Dev"

const template = \`hello \${name}\`;
template.length;              // 8 — "hello Os"

// Common patterns
const word = 'hello';
word.length === 0;            // false (not empty)
word.length > 0;              // true (has content)
word.length === 5;            // true

// Last character
word[word.length - 1];        // "o"
word.at(-1);                  // "o"

// Bounds
word[word.length];            // undefined — past the end
word[-1];                     // undefined (brackets don't do negative)

// Empty vs whitespace-only
''.length === 0;              // true
'   '.length === 0;           // false — has 3 spaces
'   '.trim().length === 0;    // true — after trim

// Emoji quirk
'😀'.length;                   // 2 — two code units
[...'😀'].length;              // 1 — one visible character

// Read-only
const title = 'hello';
title.length = 2;             // silently fails
title;                        // still "hello"
title.length;                 // still 5

// Property vs method
typeof word.length;           // "number" — it's a value
typeof word.slice;            // "function" — that IS a method</code></pre>
  `,

  /* 3.1 Real website uses */
  'topics-2-11-3-1': `
    <p><strong>Example: character counter for a comment box</strong></p>
<pre class="language-javascript"><code class="language-javascript">textarea.addEventListener('input', () => {
  counter.textContent = \`\${textarea.value.length}/500\`;
});</code></pre>

    <p><strong>Example: disable submit button when input is empty</strong></p>
<pre class="language-javascript"><code class="language-javascript">input.addEventListener('input', () => {
  submitBtn.disabled = input.value.trim().length === 0;
});</code></pre>

    <p><strong>Example: password strength minimum</strong></p>
<pre class="language-javascript"><code class="language-javascript">if (password.length < 8) {
  error.textContent = 'Password must be at least 8 characters.';
}</code></pre>

    <p><strong>Example: truncating a long title with ellipsis</strong></p>
<pre class="language-javascript"><code class="language-javascript">function truncate(str, max) {
  return str.length > max ? str.slice(0, max) + '…' : str;
}
truncate('A very long title', 10);   // "A very lon…"</code></pre>

    <p><strong>Example: showing "N results" plural handling</strong></p>
<pre class="language-javascript"><code class="language-javascript">const count = results.length;   // (works the same for array .length)
label.textContent = \`\${count} \${count === 1 ? 'result' : 'results'}\`;</code></pre>

    <p><strong>Example: iterating each character for validation</strong></p>
<pre class="language-javascript"><code class="language-javascript">function isDigitsOnly(str) {
  for (let i = 0; i < str.length; i++) {
    if (str[i] < '0' || str[i] > '9') return false;
  }
  return true;
}</code></pre>
  `,

  /* 3.2 Connects to */
  'topics-2-11-3-2': `
    <ul>
      <li><strong>String indexes</strong> → the highest valid index is <code>length - 1</code></li>
      <li><strong>Empty check</strong> → <code>value.length === 0</code> is the standard test</li>
      <li><strong>Loop bounds</strong> → <code>for (let i = 0; i < word.length; i++)</code> is the idiom for iterating characters</li>
      <li><strong>Slice / substring</strong> → these methods accept length-based positions and produce shorter strings</li>
      <li><strong>Array .length</strong> → same idea for arrays, but arrays support <code>arr.length = N</code> to truncate</li>
      <li><strong>Immutability</strong> → why <code>message.length = N</code> silently fails on strings</li>
      <li><strong>Unicode and emoji</strong> → length counts code units; use <code>[...str].length</code> for visible characters</li>
      <li><strong>Property vs method</strong> → <code>.length</code> has no parentheses; adding them causes TypeError</li>
      <li><strong>Debugging</strong> → most off-by-one bugs on strings come from confusing length and last index</li>
    </ul>
  `,

  /* 3.3 See also */
  'topics-2-11-3-3': `
    <ul>
      <li>String indexes</li>
      <li>Common methods (slice, substring, trim)</li>
      <li>String immutability</li>
      <li>Array .length</li>
      <li>Property vs method access</li>
      <li>Unicode and emoji handling</li>
      <li>Common string mistakes</li>
      <li>Debugging strings</li>
    </ul>
  `,

});