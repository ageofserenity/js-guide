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
});