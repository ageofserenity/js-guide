/* ============================================================
   content.js — LESSON CONTENT
   ============================================================
   This file holds the actual lesson content for every leaf
   accordion in the system. Structure (titles, hierarchy) lives
   in data.js. Words live here.

   Keys follow the same data path system used by script.js:
     mental-{groupIndex}-{lessonIndex}-{cardPieceIndex}

   Example:
     'mental-0-0-0' = Section "mental",
                       group 0 (Values),
                       sub-lesson 0 (what values are),
                       card piece 0 (Short meaning)

   Values map (for reference):
     groups under "mental":
       0 = Values
       1 = Storage
       2 = Actions
       3 = Decisions
       4 = Repetition
       5 = Collections
       6 = Page Control
       7 = User Interaction
       8 = Waiting
       9 = Errors

     card pieces (Mental Models):
       0 = Short meaning
       1 = Plain English explanation
       2 = Tiny teaching code example
       3 = What it connects to
       4 = Click moment
   ============================================================ */

const CONTENT = {

  /* ==========================================================
     SECTION 2: MENTAL MODELS
     ========================================================== */

  /* ---------- Group 0: Values ---------- */

  /* --- 0.0 what values are --- */
  'mental-0-0-0': `
    <p>A value is any single piece of information JavaScript is currently holding — text, a number, a yes/no, a list, anything.</p>
  `,
  'mental-0-0-1': `
    <p>When JavaScript runs, it's constantly juggling little pieces of information. <strong>Each one of those pieces is a value.</strong></p>
    <p>The word "value" is JavaScript's general name for "the actual stuff." A piece of text is a value. The number 5 is a value. The answer <code>true</code> to a question is a value. Even "nothing" can be a value.</p>
    <p>If JavaScript is doing anything at all, it's working with values.</p>
  `,
  'mental-0-0-2': `
<pre class="language-javascript"><code class="language-javascript">"hello"      // a text value (string)
42           // a number value
true         // a yes/no value (boolean)
["a", "b"]   // a list value (array)
null         // an "empty on purpose" value</code></pre>
    <p>Every line above is a value. JavaScript treats each one as a real thing it can store, check, change, or pass around.</p>
  `,
  'mental-0-0-3': `
    <ul>
      <li><strong>Variables</strong> — variables are containers that hold values</li>
      <li><strong>Functions</strong> — functions take values in and give values back</li>
      <li><strong>Strings, Numbers, Booleans, Arrays, Objects</strong> — these are the <em>types</em> of values</li>
      <li><strong>DOM</strong> — the page displays values</li>
    </ul>
  `,
  'mental-0-0-4': `
    <div class="callout callout--click">
      <div class="callout__label">Click moment</div>
      <div class="callout__body">A value is the <em>thing</em>. A variable is just the <em>name tag</em> for the thing.</div>
    </div>
  `,

  /* --- 0.1 values as the actual information --- */
  'mental-0-1-0': `
    <p>Values are the real information. Variables, functions, and the DOM are just tools that move values around.</p>
  `,
  'mental-0-1-1': `
    <p>This is a mental shift that catches a lot of beginners. When you write code, it's tempting to think the variable name <em>is</em> the data. It isn't.</p>
    <p>The variable is the <strong>container</strong>. The function is the <strong>action</strong>. But the value? <strong>The value is the actual information itself.</strong></p>
    <p>When something breaks in JavaScript, the question to ask is almost always: <em>"What's the actual value here?"</em> — not "what's the variable name?" The name is just a label. The value is what matters.</p>
  `,
  'mental-0-1-2': `
<pre class="language-javascript"><code class="language-javascript">const username = "Os";
// "Os" is the value — the real information
// username is just the label pointing at it

console.log(username);
// JS goes "username? oh, that's pointing at 'Os'"
// then it prints "Os"</code></pre>
    <p>If you change <code>username</code> to point somewhere else, the label moves. The value <code>"Os"</code> doesn't transform — it just stops being pointed at.</p>
  `,
  'mental-0-1-3': `
    <ul>
      <li><strong>Variables</strong> — containers for values</li>
      <li><strong>Debugging</strong> — <code>console.log(thing)</code> exists to <em>see the actual value</em></li>
      <li><strong>Functions</strong> — functions return values, not names</li>
    </ul>
  `,
  'mental-0-1-4': `
    <div class="callout callout--click">
      <div class="callout__label">Click moment</div>
      <div class="callout__body">The variable is the box. The value is what's inside the box. When code breaks, look inside the box.</div>
    </div>
  `,

  /* --- 0.2 strings as text values --- */
  'mental-0-2-0': `
    <p>A string is a value made of text — letters, words, sentences, anything wrapped in quotes.</p>
  `,
  'mental-0-2-1': `
    <p>Whenever JavaScript needs to handle words or characters, it uses a string. Names, messages, button labels, what someone typed in a form — all strings.</p>
    <p>You make a string by <strong>wrapping text in quotes</strong>. JavaScript supports three kinds of quotes, and they all create strings.</p>
  `,
  'mental-0-2-2': `
<pre class="language-javascript"><code class="language-javascript">"hello"     // double quotes — a string
'hello'     // single quotes — also a string
\`hello\`     // backticks — also a string (special powers, see template literals)</code></pre>
<pre class="language-javascript"><code class="language-javascript">const greeting = "Hi there";
// stores the string "Hi there" in the greeting variable
// the quotes are NOT part of the value — they just mark where the text starts and ends</code></pre>
    <div class="callout callout--wrongright">
      <div class="callout__label">Wrong vs right</div>
      <div class="callout__body">
<pre class="language-javascript"><code class="language-javascript">"Hi there"   // ✅ string — has quotes
Hi there     // ❌ error — JS thinks "Hi" is a variable name</code></pre>
      </div>
    </div>
  `,
  'mental-0-2-3': `
    <ul>
      <li><strong>Variables</strong> — strings get stored in variables</li>
      <li><strong>Template literals (backticks)</strong> — strings that can have variables inserted with <code>\${}</code></li>
      <li><strong>String methods</strong> — <code>.toUpperCase()</code>, <code>.includes()</code>, <code>.trim()</code> work on strings</li>
      <li><strong>Forms</strong> — <code>input.value</code> is always a string</li>
    </ul>
  `,
  'mental-0-2-4': `
    <div class="callout callout--click">
      <div class="callout__label">Click moment</div>
      <div class="callout__body">Quotes turn text into a value. Without quotes, JavaScript thinks you're naming a variable.</div>
    </div>
  `,

  /* --- 0.3 numbers as numeric values --- */
  'mental-0-3-0': `
    <p>A number is a value JavaScript can do math with — no quotes, just digits.</p>
  `,
  'mental-0-3-1': `
    <p>Whenever JavaScript needs to count, add, compare amounts, or do anything mathematical, it uses a number. Ages, prices, scores, positions in a list — all numbers.</p>
    <p>There's only one number type in JavaScript. Whole numbers (<code>5</code>) and decimals (<code>3.14</code>) are both just "number" — JS doesn't separate them like some languages do.</p>
    <p>The big rule: <strong>no quotes</strong>. Quotes turn it into a string, and strings can't do math properly.</p>
  `,
  'mental-0-3-2': `
<pre class="language-javascript"><code class="language-javascript">const age = 25;        // a number
const price = 9.99;    // also a number
const score = -3;      // negatives are numbers too</code></pre>
    <div class="callout callout--wrongright">
      <div class="callout__label">Wrong vs right</div>
      <div class="callout__body">
<pre class="language-javascript"><code class="language-javascript">const a = 5 + 3;       // a is 8 — math worked
const b = "5" + "3";   // b is "53" — those are strings, JS glued them together</code></pre>
      </div>
    </div>
    <p>That second example is one of the most common JavaScript surprises. Quotes change everything.</p>
  `,
  'mental-0-3-3': `
    <ul>
      <li><strong>Strings</strong> — they look similar but behave very differently</li>
      <li><strong>Math operators</strong> — <code>+</code>, <code>-</code>, <code>*</code>, <code>/</code>, <code>%</code></li>
      <li><strong>Comparisons</strong> — <code>&gt;</code>, <code>&lt;</code>, <code>===</code></li>
      <li><strong>Loops</strong> — counters are numbers</li>
      <li><strong>Form inputs</strong> — input values come in as strings, even when they look like numbers</li>
    </ul>
  `,
  'mental-0-3-4': `
    <div class="callout callout--click">
      <div class="callout__label">Click moment</div>
      <div class="callout__body">Quotes around digits = string. No quotes = number. JavaScript will not figure it out for you.</div>
    </div>
  `,

  /* --- 0.4 booleans as true/false values --- */
  'mental-0-4-0': `
    <p>A boolean is a value that's either <code>true</code> or <code>false</code>. Just those two — no others.</p>
  `,
  'mental-0-4-1': `
    <p>Booleans answer yes/no questions. Is the user logged in? Is the form valid? Is the menu open? Each of those questions has a boolean answer.</p>
    <p>Booleans are how JavaScript makes decisions. Every <code>if</code> statement is really asking: <em>"is this value true or false?"</em></p>
  `,
  'mental-0-4-2': `
<pre class="language-javascript"><code class="language-javascript">const isLoggedIn = true;     // yes
const isMenuOpen = false;    // no

if (isLoggedIn) {
  // runs only if isLoggedIn is true
  console.log("Welcome back");
}</code></pre>
    <div class="callout callout--mistake">
      <div class="callout__label">Common mistake</div>
      <div class="callout__body">
<pre class="language-javascript"><code class="language-javascript">true      // ✅ boolean — the literal value
"true"    // ❌ this is a STRING, not a boolean
          // strings can mislead: "false" is actually treated as truthy!</code></pre>
      </div>
    </div>
  `,
  'mental-0-4-3': `
    <ul>
      <li><strong>If / Else</strong> — every condition resolves to a boolean</li>
      <li><strong>Comparisons</strong> — <code>5 &gt; 3</code> produces <code>true</code></li>
      <li><strong>Truthy / Falsy</strong> — values that <em>act</em> like booleans without being booleans</li>
      <li><strong>Logical operators</strong> — <code>&amp;&amp;</code>, <code>||</code>, <code>!</code></li>
      <li><strong>Form validation</strong> — "is this input valid?" returns a boolean</li>
    </ul>
  `,
  'mental-0-4-4': `
    <div class="callout callout--click">
      <div class="callout__label">Click moment</div>
      <div class="callout__body">Booleans are the language of decisions. Every <code>if</code> is asking a boolean question.</div>
    </div>
  `,

  /* --- 0.5 arrays as list values --- */
  'mental-0-5-0': `
    <p>An array is a single value that holds an ordered list of other values, wrapped in square brackets.</p>
  `,
  'mental-0-5-1': `
    <p>When you have many things and you want to keep them together — a list of names, a list of products, a list of colors — you use an array.</p>
    <p>An array is itself <strong>one value</strong> that contains many. You can pass it around like any other value, but inside it, items have positions (indexes) starting at 0.</p>
  `,
  'mental-0-5-2': `
<pre class="language-javascript"><code class="language-javascript">const colors = ["red", "blue", "green"];
// one array containing three string values

console.log(colors[0]);
// "red" — the first item (index 0, not 1!)

console.log(colors.length);
// 3 — how many items the array has</code></pre>
<pre class="language-javascript"><code class="language-javascript">const mixed = [1, "two", true, null];
// arrays can hold any types of values, mixed together</code></pre>
  `,
  'mental-0-5-3': `
    <ul>
      <li><strong>Variables</strong> — arrays get stored in variables</li>
      <li><strong>Indexes</strong> — positions inside an array (0, 1, 2...)</li>
      <li><strong>Loops</strong> — the main way to walk through an array</li>
      <li><strong>Array methods</strong> — <code>.map()</code>, <code>.filter()</code>, <code>.forEach()</code>, etc.</li>
      <li><strong>DOM rendering</strong> — lists of cards or items usually come from arrays</li>
    </ul>
  `,
  'mental-0-5-4': `
    <div class="callout callout--click">
      <div class="callout__label">Click moment</div>
      <div class="callout__body">An array is a value that holds values. The brackets <code>[]</code> are what turn many things into one thing.</div>
    </div>
  `,

  /* --- 0.6 objects as grouped data values --- */
  'mental-0-6-0': `
    <p>An object is a single value that holds labeled pieces of related data, wrapped in curly braces.</p>
  `,
  'mental-0-6-1': `
    <p>When you have a <em>thing</em> with multiple properties — a user with a name, age, and email; a product with a title, price, and image — you use an object.</p>
    <p>Where an array uses position (<code>[0]</code>, <code>[1]</code>), an object uses <strong>labels</strong> (<code>.name</code>, <code>.price</code>). The labels are called keys, and what they point to are called values.</p>
  `,
  'mental-0-6-2': `
<pre class="language-javascript"><code class="language-javascript">const user = {
  name: "Os",
  age: 25,
  isLoggedIn: true
};
// one object holding three labeled values

console.log(user.name);
// "Os" — access using the dot and the label

console.log(user.age);
// 25</code></pre>
<pre class="language-javascript"><code class="language-javascript">user.name        // "Os"  — dot notation
user["name"]     // "Os"  — bracket notation, same thing
user.email       // undefined — no email key was set</code></pre>
  `,
  'mental-0-6-3': `
    <ul>
      <li><strong>Variables</strong> — objects get stored in variables</li>
      <li><strong>Properties</strong> — the labeled values inside an object</li>
      <li><strong>Dot vs bracket notation</strong> — two ways to access properties</li>
      <li><strong>Arrays of objects</strong> — lists where each item is a labeled bundle (very common)</li>
      <li><strong>JSON</strong> — what objects look like when sent over the network</li>
    </ul>
  `,
  'mental-0-6-4': `
    <div class="callout callout--click">
      <div class="callout__label">Click moment</div>
      <div class="callout__body">Arrays use numbers to find items. Objects use names. Same idea — different label.</div>
    </div>
  `,

  /* --- 0.7 null as intentionally empty --- */
  'mental-0-7-0': `
    <p><code>null</code> is a value that means "nothing, on purpose." A developer chose to put nothing there.</p>
  `,
  'mental-0-7-1': `
    <p>Sometimes you want a variable to exist but not hold anything yet — and you want to be clear: <strong>this is empty deliberately.</strong> That's <code>null</code>.</p>
    <p>It's different from <code>undefined</code>. <code>null</code> is a choice. <code>undefined</code> is an accident (or a default).</p>
    <p>You'll see <code>null</code> most often when something <em>was</em> there and got cleared, or when JavaScript looked for something and didn't find it (like <code>querySelector</code> returning <code>null</code> when no element matches).</p>
  `,
  'mental-0-7-2': `
<pre class="language-javascript"><code class="language-javascript">let selectedUser = null;
// nothing is selected yet — but I declared that intentionally

selectedUser = { name: "Os" };
// later, a user gets selected

selectedUser = null;
// later, the selection is cleared back to "nothing"</code></pre>
    <div class="callout callout--debug">
      <div class="callout__label">Debugging clue</div>
      <div class="callout__body">
<pre class="language-javascript"><code class="language-javascript">const button = document.querySelector(".missing-class");
// no element matches → button is null

button.addEventListener("click", ...);
// ❌ TypeError: Cannot read properties of null
// JS is saying: "button is null — there's nothing here to attach to"</code></pre>
      </div>
    </div>
  `,
  'mental-0-7-3': `
    <ul>
      <li><strong>undefined</strong> — null's accidental cousin</li>
      <li><strong>DOM selection</strong> — <code>querySelector</code> returns <code>null</code> when nothing matches</li>
      <li><strong>Debugging</strong> — "Cannot read properties of null" means: this variable is null</li>
      <li><strong>If checks</strong> — <code>if (button) { ... }</code> is a common null-guard</li>
    </ul>
  `,
  'mental-0-7-4': `
    <div class="callout callout--click">
      <div class="callout__label">Click moment</div>
      <div class="callout__body"><code>null</code> means "I'm choosing emptiness here." <code>undefined</code> means "nobody set this yet."</div>
    </div>
  `,

  /* --- 0.8 undefined as not assigned/missing --- */
  'mental-0-8-0': `
    <p><code>undefined</code> is JavaScript's default value for things that exist but were never given a value.</p>
  `,
  'mental-0-8-1': `
    <p>When you declare a variable but don't put anything in it, JavaScript fills it with <code>undefined</code>. When you ask an object for a property it doesn't have, you get <code>undefined</code>. When a function doesn't return anything, you get <code>undefined</code>.</p>
    <p>It's not really an error — it's just JavaScript saying <em>"this slot is empty because nothing has filled it yet."</em></p>
    <p>You almost never write <code>undefined</code> yourself. It just shows up.</p>
  `,
  'mental-0-8-2': `
<pre class="language-javascript"><code class="language-javascript">let username;
console.log(username);
// undefined — declared, but never assigned

const user = { name: "Os" };
console.log(user.email);
// undefined — the email property doesn't exist on this object

function greet() {
  // notice: no return statement
}
console.log(greet());
// undefined — the function ran but returned nothing</code></pre>
  `,
  'mental-0-8-3': `
    <ul>
      <li><strong>null</strong> — the intentional version of "empty"</li>
      <li><strong>Variables</strong> — <code>let x;</code> defaults to undefined</li>
      <li><strong>Functions</strong> — missing <code>return</code> means <code>undefined</code> comes back</li>
      <li><strong>Objects</strong> — missing properties return undefined</li>
      <li><strong>Debugging</strong> — seeing <code>undefined</code> usually means a typo or a missing assignment</li>
    </ul>
  `,
  'mental-0-8-4': `
    <div class="callout callout--click">
      <div class="callout__label">Click moment</div>
      <div class="callout__body">If you see <code>undefined</code>, ask: <em>did I forget to assign this, or did I misspell something?</em> Both are common.</div>
    </div>
  `,

  /* --- 0.9 value vs variable --- */
  'mental-0-9-0': `
    <p>The value is the actual data. The variable is the name pointing at the data. They are not the same thing.</p>
  `,
  'mental-0-9-1': `
    <p>This is one of the most important concepts in JavaScript and it trips up almost everyone at first.</p>
    <p>Think of a sticky note (the variable) labeled <code>username</code> stuck to a real object (the value <code>"Os"</code>). The sticky note isn't the object. You can move the sticky note to a different object. You can have multiple sticky notes on the same object.</p>
    <p>When something doesn't behave the way you expect, the answer is almost always: <strong>figure out what value the variable is actually pointing at right now.</strong></p>
  `,
  'mental-0-9-2': `
<pre class="language-javascript"><code class="language-javascript">let username = "Os";
// variable: username
// value:    "Os"

username = "Sam";
// variable still: username
// but it now points at a different value: "Sam"

console.log(username);
// "Sam" — the variable hasn't changed, but what it points to has</code></pre>
<pre class="language-javascript"><code class="language-javascript">const a = "hello";
const b = a;
// b also points at "hello" — same value, two variables</code></pre>
  `,
  'mental-0-9-3': `
    <ul>
      <li><strong>Variables</strong> — the storage system</li>
      <li><strong>Values as the actual information</strong> — closely related concept</li>
      <li><strong>Reassignment</strong> — moving a variable to point at a new value</li>
      <li><strong>Debugging</strong> — <code>console.log(variable)</code> shows you the value it's pointing at</li>
    </ul>
  `,
  'mental-0-9-4': `
    <div class="callout callout--click">
      <div class="callout__label">Click moment</div>
      <div class="callout__body">A variable is a name tag. The value is the thing the name tag is stuck to.</div>
    </div>
  `,

  /* --- 0.10 literal values --- */
  'mental-0-10-0': `
    <p>A literal value is a value you type directly into your code — <code>"hello"</code>, <code>42</code>, <code>true</code>, <code>[1, 2]</code>. The opposite of a value stored in a variable.</p>
  `,
  'mental-0-10-1': `
    <p>When you write <code>5</code> or <code>"cat"</code> or <code>true</code> directly in your code, those are literal values. You wrote them <em>literally</em> — they aren't computed, fetched, or stored elsewhere first.</p>
    <p>The word matters because most JavaScript work involves <strong>moving literal values into variables</strong>, or <strong>comparing literal values to variable values</strong>.</p>
  `,
  'mental-0-10-2': `
<pre class="language-javascript"><code class="language-javascript">const age = 25;
//          ^^ this is a literal value

if (age === 25) {
  //         ^^ also a literal value (used in the comparison)
  console.log("twenty-five");
  //          ^^^^^^^^^^^^^ also a literal value (a string literal)
}</code></pre>
<pre class="language-javascript"><code class="language-javascript">const colors = ["red", "blue", "green"];
//             ^^^^^^^^^^^^^^^^^^^^^^^^ array literal
//              ^^^^^ ^^^^^^ ^^^^^^^ each is a string literal</code></pre>
  `,
  'mental-0-10-3': `
    <ul>
      <li><strong>Variables</strong> — literals often get stored in variables</li>
      <li><strong>Strings, Numbers, Booleans, Arrays, Objects</strong> — each has its own literal syntax</li>
      <li><strong>Comparisons</strong> — comparing variables against literals (e.g., <code>if (status === "active")</code>)</li>
    </ul>
  `,
  'mental-0-10-4': `
    <div class="callout callout--click">
      <div class="callout__label">Click moment</div>
      <div class="callout__body">If you typed it directly into your code with no variable name, it's a literal. Plain and simple.</div>
    </div>
  `,

  /* --- 0.11 values returned from functions --- */
  'mental-0-11-0': `
    <p>A function can hand a value back to whoever called it using <code>return</code>. That returned value can be stored, used, or passed around.</p>
  `,
  'mental-0-11-1': `
    <p>A function isn't just a chunk of code that runs — it's a chunk of code that can <strong>produce a value</strong>.</p>
    <p>When you call a function, JavaScript runs everything inside it, hits a <code>return</code> statement, and hands that value back to where the function was called from. If there's no <code>return</code>, you get <code>undefined</code> back.</p>
    <p>This is how most useful functions work: input goes in, work happens, value comes out.</p>
  `,
  'mental-0-11-2': `
<pre class="language-javascript"><code class="language-javascript">function double(num) {
  return num * 2;
  // hands back num * 2 to wherever this was called
}

const result = double(5);
// double(5) runs, returns 10
// result is now 10

console.log(result);
// 10</code></pre>
    <div class="callout callout--mistake">
      <div class="callout__label">Common mistake</div>
      <div class="callout__body">
<pre class="language-javascript"><code class="language-javascript">function greet(name) {
  console.log("Hi " + name);
  // logs something, but does NOT return anything
}

const message = greet("Os");
// "Hi Os" gets logged
// but message is undefined — nothing was returned</code></pre>
      </div>
    </div>
  `,
  'mental-0-11-3': `
    <ul>
      <li><strong>Functions</strong> — the action that produces the value</li>
      <li><strong>Return</strong> — the keyword that hands the value back</li>
      <li><strong>Variables</strong> — the most common place returned values get stored</li>
      <li><strong>undefined</strong> — what comes back when there's no return statement</li>
      <li><strong>Debugging</strong> — if something is unexpectedly <code>undefined</code>, check if a function forgot to <code>return</code></li>
    </ul>
  `,
  'mental-0-11-4': `
    <div class="callout callout--click">
      <div class="callout__label">Click moment</div>
      <div class="callout__body"><code>console.log</code> <em>shows</em> a value. <code>return</code> <em>hands it back</em> so the rest of your code can use it. They're not the same.</div>
    </div>
  `,

  /* --- 0.12 values from form inputs --- */
  'mental-0-12-0': `
    <p>What a user types into a form input becomes a value JavaScript can read with <code>.value</code>.</p>
  `,
  'mental-0-12-1': `
    <p>Forms are how users <em>give</em> values to your code. When someone types into an input box, that text is sitting inside the input element, waiting. JavaScript reads it using <code>.value</code>.</p>
    <p>One critical detail: <strong><code>.value</code> is always a string</strong> — even if the input is a number field, even if the user typed <code>42</code>. You'll often need to convert it before doing math.</p>
  `,
  'mental-0-12-2': `
<pre class="language-javascript"><code class="language-javascript">const input = document.querySelector("#username");
// grabs the input element from the page

const typed = input.value;
// reads what the user typed
// typed is now a string of whatever they wrote</code></pre>
    <div class="callout callout--syntax">
      <div class="callout__label">Syntax detail that matters</div>
      <div class="callout__body">
<pre class="language-javascript"><code class="language-javascript">const ageInput = document.querySelector("#age");
ageInput.value
// "25" — a STRING, even though it looks like a number

Number(ageInput.value)
// 25 — an actual number, after converting</code></pre>
      </div>
    </div>
  `,
  'mental-0-12-3': `
    <ul>
      <li><strong>DOM</strong> — you have to select the input first</li>
      <li><strong>Strings</strong> — <code>.value</code> always returns a string</li>
      <li><strong>Forms</strong> — the parent context where inputs live</li>
      <li><strong>Numbers</strong> — often you'll need to convert input values</li>
      <li><strong>Events</strong> — usually you read <code>.value</code> inside an event listener</li>
    </ul>
  `,
  'mental-0-12-4': `
    <div class="callout callout--click">
      <div class="callout__label">Click moment</div>
      <div class="callout__body"><code>.value</code> reads what's currently in the box. If someone clears the field, <code>.value</code> becomes <code>""</code> — an empty string, not null.</div>
    </div>
  `,

  /* --- 0.13 values from APIs --- */
  'mental-0-13-0': `
    <p>APIs send back values from a server — usually structured data like objects and arrays — that JavaScript can use.</p>
  `,
  'mental-0-13-1': `
    <p>An API is just a place on the internet that gives back data when you ask. JavaScript uses <code>fetch</code> to ask, and the response comes back as values you can work with — usually arrays of objects.</p>
    <p>The key thing: this data <strong>takes time to arrive</strong>. It's not instant like a literal value. That's why API code uses <code>await</code> or <code>.then()</code> — to wait for the value to show up before using it.</p>
  `,
  'mental-0-13-2': `
<pre class="language-javascript"><code class="language-javascript">async function getUsers() {
  const response = await fetch("https://api.example.com/users");
  // pauses here until the response arrives

  const users = await response.json();
  // converts the response into actual JS values (usually an array of objects)

  console.log(users);
  // [{name: "Os", id: 1}, {name: "Sam", id: 2}, ...]
}</code></pre>
    <div class="callout callout--mistake">
      <div class="callout__label">Common mistake</div>
      <div class="callout__body">
<pre class="language-javascript"><code class="language-javascript">const data = fetch("...");
// ❌ data is a Promise, not the value
// you forgot to await it</code></pre>
      </div>
    </div>
  `,
  'mental-0-13-3': `
    <ul>
      <li><strong>Async / Await</strong> — required to handle API timing</li>
      <li><strong>Fetch</strong> — the tool that asks the API</li>
      <li><strong>JSON</strong> — the format APIs usually send data in</li>
      <li><strong>Arrays and Objects</strong> — what API data usually looks like</li>
      <li><strong>DOM rendering</strong> — usually you display API values on the page</li>
      <li><strong>Loading states</strong> — the wait time means you need a "loading..." message</li>
    </ul>
  `,
  'mental-0-13-4': `
    <div class="callout callout--click">
      <div class="callout__label">Click moment</div>
      <div class="callout__body">API data isn't there until it arrives. If you try to use it too early, you'll get a Promise instead of the actual value.</div>
    </div>
  `,

  /* --- 0.14 values displayed in the DOM --- */
  'mental-0-14-0': `
    <p>Values from your code get shown on the page by writing them into DOM elements — usually with <code>.textContent</code> or template literals.</p>
  `,
  'mental-0-14-1': `
    <p>This is the final step that makes JavaScript visible to the user. You have a value (a name, a count, a list) and you want to show it on the page. So you select an element and write the value into it.</p>
    <p>The page is just text and HTML. JavaScript can change that text any time by setting properties like <code>.textContent</code>.</p>
  `,
  'mental-0-14-2': `
<pre class="language-javascript"><code class="language-javascript">const username = "Os";
// the value lives in JS

const greeting = document.querySelector(".greeting");
// select the spot on the page

greeting.textContent = \`Welcome, \${username}\`;
// write the value into the page
// now the user sees: "Welcome, Os"</code></pre>
<pre class="language-javascript"><code class="language-javascript">const score = 100;
const display = document.querySelector(".score");

display.textContent = score;
// works — JS converts the number to text automatically when displayed</code></pre>
  `,
  'mental-0-14-3': `
    <ul>
      <li><strong>DOM</strong> — you have to select an element first</li>
      <li><strong>textContent</strong> — the safe way to set text inside an element</li>
      <li><strong>innerHTML</strong> — the unsafe way (parses HTML — risky with user input)</li>
      <li><strong>Template literals</strong> — for combining values into strings before displaying</li>
      <li><strong>Variables</strong> — the values you want to show usually live in variables</li>
    </ul>
  `,
  'mental-0-14-4': `
    <div class="callout callout--click">
      <div class="callout__label">Click moment</div>
      <div class="callout__body">A value sitting in a variable is invisible to the user. Putting it into the DOM is what makes it appear.</div>
    </div>
  `,

  /* ---------- Group 1: Storage ---------- */

  /* --- 1.0 variables as storage containers --- */
  'mental-1-0-0': `
    <p>A variable is a named container that holds a value, so you can use that value later without typing it again.</p>
  `,
  'mental-1-0-1': `
    <p>Imagine a labeled jar on a shelf. The label is the variable name. Whatever you put in the jar is the value. You can grab the jar by its label any time and use what's inside.</p>
    <p>Without variables, you'd have to keep retyping the same data over and over. Variables let you <strong>name something once and reference it anywhere</strong>.</p>
    <p>The shape is always the same: a keyword (<code>let</code> or <code>const</code>), a name, an equals sign, and a value.</p>
  `,
  'mental-1-0-2': `
<pre class="language-javascript"><code class="language-javascript">const username = "Os";
//    ^^^^^^^^   ^^^^
//    the label  the value inside

console.log(username);
// "Os" — JS looks up the label and gives you what's inside</code></pre>
<pre class="language-javascript"><code class="language-javascript">// without a variable — you'd repeat yourself
console.log("Welcome, Os");
console.log("Goodbye, Os");

// with a variable — write the value once, reuse it
const name = "Os";
console.log("Welcome, " + name);
console.log("Goodbye, " + name);</code></pre>
  `,
  'mental-1-0-3': `
    <ul>
      <li><strong>let / const</strong> — the two main ways to create a variable</li>
      <li><strong>Values</strong> — what goes inside the container</li>
      <li><strong>Assignment</strong> — the act of putting a value into a variable</li>
      <li><strong>Scope</strong> — where the variable can be reached from</li>
      <li><strong>Debugging</strong> — <code>console.log(varName)</code> to see what's inside</li>
    </ul>
  `,
  'mental-1-0-4': `
    <div class="callout callout--click">
      <div class="callout__label">Click moment</div>
      <div class="callout__body">A variable doesn't <em>do</em> anything. It just <em>holds</em> something so you can reach it later.</div>
    </div>
  `,

  /* --- 1.1 let --- */
  'mental-1-1-0': `
    <p><code>let</code> creates a variable whose value can be changed later.</p>
  `,
  'mental-1-1-1': `
    <p>Use <code>let</code> when you know the value will need to update over time — a counter going up, a status flipping from "loading" to "done", a username being changed.</p>
    <p>The container stays the same. The contents can be swapped out as many times as you need.</p>
    <p>You declare it once with <code>let</code>. After that, just use the name and the equals sign to give it a new value — no <code>let</code> the second time.</p>
  `,
  'mental-1-1-2': `
<pre class="language-javascript"><code class="language-javascript">let score = 0;
// declared with let, starts at 0

score = 10;
// now score is 10 — no "let" needed to update it

score = score + 5;
// now score is 15</code></pre>
    <div class="callout callout--mistake">
      <div class="callout__label">Common mistake</div>
      <div class="callout__body">
<pre class="language-javascript"><code class="language-javascript">let score = 0;
let score = 10;
// ❌ SyntaxError: Identifier 'score' has already been declared
// once declared, just reassign — don't redeclare</code></pre>
      </div>
    </div>
  `,
  'mental-1-1-3': `
    <ul>
      <li><strong>const</strong> — the opposite: cannot be reassigned</li>
      <li><strong>Reassignment</strong> — the thing <code>let</code> allows that <code>const</code> doesn't</li>
      <li><strong>Counters and toggles</strong> — classic <code>let</code> use cases</li>
      <li><strong>Scope</strong> — <code>let</code> is block-scoped (only alive inside <code>{ }</code>)</li>
    </ul>
  `,
  'mental-1-1-4': `
    <div class="callout callout--click">
      <div class="callout__label">Click moment</div>
      <div class="callout__body">If the value will change, use <code>let</code>. If it won't, use <code>const</code>. That's the whole choice.</div>
    </div>
  `,

  /* --- 1.2 const --- */
  'mental-1-2-0': `
    <p><code>const</code> creates a variable whose value cannot be reassigned. Once set, the label sticks.</p>
  `,
  'mental-1-2-1': `
    <p>Use <code>const</code> as your default. Most variables in real code don't need to change — they just hold one value for the rest of the file. Things like a DOM element you selected once, a config setting, a function reference.</p>
    <p>If you try to reassign a <code>const</code>, JavaScript throws an error. That's a feature — it stops bugs where you accidentally overwrite something important.</p>
    <p><strong>Watch out:</strong> <code>const</code> stops you from <em>reassigning</em> the variable, but if it holds an array or object, you can still change what's <em>inside</em> that array or object.</p>
  `,
  'mental-1-2-2': `
<pre class="language-javascript"><code class="language-javascript">const username = "Os";
// declared with const

username = "Sam";
// ❌ TypeError: Assignment to constant variable
// you can't point this label at anything else</code></pre>
    <div class="callout callout--syntax">
      <div class="callout__label">Syntax detail that matters</div>
      <div class="callout__body">
<pre class="language-javascript"><code class="language-javascript">const user = { name: "Os" };

user = { name: "Sam" };
// ❌ Error — can't reassign the variable

user.name = "Sam";
// ✅ Allowed — the variable still points at the same object,
//    we just changed what's INSIDE the object</code></pre>
      </div>
    </div>
  `,
  'mental-1-2-3': `
    <ul>
      <li><strong>let</strong> — the opposite: allows reassignment</li>
      <li><strong>Variables as containers</strong> — <code>const</code> locks the lid, but contents can still shift if the value is an object/array</li>
      <li><strong>DOM selections</strong> — almost always stored in <code>const</code></li>
      <li><strong>Functions</strong> — usually assigned to <code>const</code></li>
    </ul>
  `,
  'mental-1-2-4': `
    <div class="callout callout--click">
      <div class="callout__label">Click moment</div>
      <div class="callout__body"><code>const</code> protects the <em>label</em>, not the contents. The label can't move. What's inside an object or array can still change.</div>
    </div>
  `,

  /* --- 1.3 assigning values --- */
  'mental-1-3-0': `
    <p>Assigning a value means putting something into a variable using the <code>=</code> sign. The value on the right goes into the variable on the left.</p>
  `,
  'mental-1-3-1': `
    <p>The equals sign in JavaScript is <strong>not</strong> a comparison — it's an instruction. It says: <em>"take whatever is on the right and put it into the thing on the left."</em></p>
    <p>This always reads <strong>right to left</strong>. JS calculates the right side first, then drops the result into the variable.</p>
    <p>This is one of the most common things you'll do in JavaScript — it happens every time you create a variable, update one, or store a function's result.</p>
  `,
  'mental-1-3-2': `
<pre class="language-javascript"><code class="language-javascript">const age = 25;
//          ^^
//          right side: the value 25
// =        the assignment instruction
// age      the variable that receives it

const total = 5 + 10;
// right side runs first → 15
// then 15 gets assigned to total</code></pre>
    <div class="callout callout--wrongright">
      <div class="callout__label">Wrong vs right</div>
      <div class="callout__body">
<pre class="language-javascript"><code class="language-javascript">const x = 5;       // ✅ assignment — x is now 5
if (x = 10) {}     // ❌ accidentally assigning, not comparing!
if (x === 10) {}   // ✅ comparison — checks if x equals 10</code></pre>
      </div>
    </div>
  `,
  'mental-1-3-3': `
    <ul>
      <li><strong>Variables</strong> — what receives the value</li>
      <li><strong>Values</strong> — what gets assigned</li>
      <li><strong>Reassignment</strong> — assigning a new value to an existing variable</li>
      <li><strong>Comparison (<code>===</code>)</strong> — easy to confuse with assignment (<code>=</code>)</li>
    </ul>
  `,
  'mental-1-3-4': `
    <div class="callout callout--click">
      <div class="callout__label">Click moment</div>
      <div class="callout__body"><code>=</code> is a one-way arrow: right value lands in left variable. Always reads right-to-left.</div>
    </div>
  `,

  /* --- 1.4 reassigning values --- */
  'mental-1-4-0': `
    <p>Reassigning means changing the value already inside a variable. The variable name stays — the value swaps out.</p>
  `,
  'mental-1-4-1': `
    <p>You declare a variable once with <code>let</code>. After that, you can put new values into it as many times as you want — no <code>let</code> needed again.</p>
    <p>Each reassignment <strong>replaces</strong> the previous value. The old one is gone — JavaScript doesn't remember it. Whatever you assigned most recently is what's in there now.</p>
    <p>Only <code>let</code> variables can be reassigned. <code>const</code> variables throw an error if you try.</p>
  `,
  'mental-1-4-2': `
<pre class="language-javascript"><code class="language-javascript">let count = 0;
// first assignment

count = 1;
// reassigned — old value (0) is gone, replaced with 1

count = count + 1;
// reassigned again — JS calculates right side first
// (1 + 1 = 2) then puts 2 into count

console.log(count);
// 2</code></pre>
<pre class="language-javascript"><code class="language-javascript">const score = 0;
score = 10;
// ❌ TypeError — const cannot be reassigned</code></pre>
  `,
  'mental-1-4-3': `
    <ul>
      <li><strong>let</strong> — the only way to make a reassignable variable</li>
      <li><strong>const</strong> — the opposite: blocks reassignment</li>
      <li><strong>Counters</strong> — variables incremented in loops are constantly reassigned</li>
      <li><strong>State updates</strong> — toggling a variable from "open" to "closed" is reassignment</li>
    </ul>
  `,
  'mental-1-4-4': `
    <div class="callout callout--click">
      <div class="callout__label">Click moment</div>
      <div class="callout__body">Reassignment isn't editing the old value — it's <em>throwing it away</em> and putting a brand new value in its place.</div>
    </div>
  `,

  /* --- 1.5 storing DOM elements --- */
  'mental-1-5-0': `
    <p>You can store a DOM element in a variable so you don't have to find it on the page every time you need it.</p>
  `,
  'mental-1-5-1': `
    <p>When you call <code>document.querySelector(".btn")</code>, JavaScript searches the entire page for that element. That's slow if you do it over and over.</p>
    <p>The fix: do it <strong>once</strong>, store the result in a variable, and use the variable from then on. The variable holds a reference to the element — which means changes you make through the variable show up on the actual page.</p>
    <p>This is one of the most common patterns in real JavaScript. Almost every script starts by selecting elements and storing them.</p>
  `,
  'mental-1-5-2': `
<pre class="language-javascript"><code class="language-javascript">const button = document.querySelector(".btn");
// stored once — button now points at the actual element on the page

button.textContent = "Clicked!";
// changes the real button on the page

button.classList.add("active");
// adds a class — also affects the real element

button.addEventListener("click", () => {
  console.log("clicked");
});
// listens for clicks on the real element</code></pre>
    <div class="callout callout--wrongright">
      <div class="callout__label">Wrong vs right</div>
      <div class="callout__body">
<pre class="language-javascript"><code class="language-javascript">// ❌ slow — searches the page 3 times
document.querySelector(".btn").textContent = "Hi";
document.querySelector(".btn").classList.add("active");
document.querySelector(".btn").addEventListener("click", () => {});

// ✅ fast — searches once, reuses the reference
const btn = document.querySelector(".btn");
btn.textContent = "Hi";
btn.classList.add("active");
btn.addEventListener("click", () => {});</code></pre>
      </div>
    </div>
  `,
  'mental-1-5-3': `
    <ul>
      <li><strong>querySelector</strong> — the tool that finds the element</li>
      <li><strong>const</strong> — DOM references are almost always stored in <code>const</code></li>
      <li><strong>DOM</strong> — the page structure that variables can point into</li>
      <li><strong>Events</strong> — listeners get attached through these stored references</li>
      <li><strong>null</strong> — what <code>querySelector</code> returns when no element matches</li>
    </ul>
  `,
  'mental-1-5-4': `
    <div class="callout callout--click">
      <div class="callout__label">Click moment</div>
      <div class="callout__body">Storing a DOM element doesn't make a copy. The variable is a remote control for the real element on the page.</div>
    </div>
  `,

  /* --- 1.6 storing function results --- */
  'mental-1-6-0': `
    <p>When a function returns a value, you can capture that value in a variable using <code>=</code>.</p>
  `,
  'mental-1-6-1': `
    <p>A function with a <code>return</code> statement hands back a value. If you don't catch that value, it disappears.</p>
    <p>Storing a function result is just normal assignment: <strong>call the function on the right, store the result on the left.</strong></p>
    <p>This is how you build with functions — calculate something with one function, store the answer, then pass it to the next function.</p>
  `,
  'mental-1-6-2': `
<pre class="language-javascript"><code class="language-javascript">function double(num) {
  return num * 2;
}

const result = double(5);
// double(5) runs and returns 10
// result is now 10</code></pre>
<pre class="language-javascript"><code class="language-javascript">const name = "os";

const upper = name.toUpperCase();
// .toUpperCase() returns a new uppercase string
// upper is now "OS"
// the original "os" is unchanged</code></pre>
    <div class="callout callout--mistake">
      <div class="callout__label">Common mistake</div>
      <div class="callout__body">
<pre class="language-javascript"><code class="language-javascript">function add(a, b) {
  return a + b;
}

const sum = add;
// ❌ stored the FUNCTION itself, not the result
// sum is now the add function, not a number

const sum = add(2, 3);
// ✅ called it — sum is now 5</code></pre>
      </div>
    </div>
  `,
  'mental-1-6-3': `
    <ul>
      <li><strong>Functions</strong> — the source of the value</li>
      <li><strong>Return</strong> — what makes a function produce a usable result</li>
      <li><strong>Assignment</strong> — the way the result lands in a variable</li>
      <li><strong>Method chaining</strong> — when you store a result and immediately call another method on it</li>
    </ul>
  `,
  'mental-1-6-4': `
    <div class="callout callout--click">
      <div class="callout__label">Click moment</div>
      <div class="callout__body">The parentheses <code>()</code> after a function name mean "run it now and give me the result." Without them, you're storing the function itself.</div>
    </div>
  `,

  /* --- 1.7 storing arrays/objects --- */
  'mental-1-7-0': `
    <p>Arrays and objects are values, so they get stored in variables exactly the same way as anything else — with <code>=</code>.</p>
  `,
  'mental-1-7-1': `
    <p>An array or object can be huge — dozens of items, deeply nested data. But to JavaScript, the whole thing is still <strong>one value</strong>. So storing it works the same as storing a number or a string.</p>
    <p>The big difference shows up later: when you reach <em>into</em> an array or object through the variable, you can change its contents — even if the variable was declared with <code>const</code>.</p>
  `,
  'mental-1-7-2': `
<pre class="language-javascript"><code class="language-javascript">const colors = ["red", "blue", "green"];
// one variable, one array value (which holds three strings)

const user = {
  name: "Os",
  age: 25
};
// one variable, one object value (which holds two properties)</code></pre>
<pre class="language-javascript"><code class="language-javascript">const user = { name: "Os" };

user.name = "Sam";
// ✅ allowed — modifying inside the object
// const blocked reassignment, not modification

user = { name: "Sam" };
// ❌ TypeError — that IS reassignment</code></pre>
  `,
  'mental-1-7-3': `
    <ul>
      <li><strong>Arrays</strong> — list values that get stored</li>
      <li><strong>Objects</strong> — labeled-data values that get stored</li>
      <li><strong>const</strong> — locks the variable, not the contents</li>
      <li><strong>Properties and indexes</strong> — how you reach into stored data</li>
      <li><strong>JSON</strong> — usually arrives as data you store in variables</li>
    </ul>
  `,
  'mental-1-7-4': `
    <div class="callout callout--click">
      <div class="callout__label">Click moment</div>
      <div class="callout__body">An array or object is one value, no matter how much it contains. The variable holds the whole bundle.</div>
    </div>
  `,

  /* --- 1.8 localStorage as browser storage --- */
  'mental-1-8-0': `
    <p><code>localStorage</code> saves data inside the user's browser, so it's still there when the page reloads or they come back days later.</p>
  `,
  'mental-1-8-1': `
    <p>Regular variables disappear the moment the page closes. <strong>localStorage doesn't.</strong> It saves things to the browser itself, in a tiny key-value store that survives reloads.</p>
    <p>The catch: localStorage only stores <strong>strings</strong>. If you want to save an object or array, you have to convert it to a string with <code>JSON.stringify</code> first, then convert it back with <code>JSON.parse</code> when you read it.</p>
    <p>This is how websites remember things like dark-mode preference, items in a cart, or who's logged in — without a server.</p>
  `,
  'mental-1-8-2': `
<pre class="language-javascript"><code class="language-javascript">// save a value
localStorage.setItem("theme", "dark");
// stored under the key "theme"

// read it back later (even after a page reload)
const theme = localStorage.getItem("theme");
// theme is now "dark"

// remove a single item
localStorage.removeItem("theme");

// wipe everything
localStorage.clear();</code></pre>
    <div class="callout callout--syntax">
      <div class="callout__label">Syntax detail that matters</div>
      <div class="callout__body">
<pre class="language-javascript"><code class="language-javascript">const user = { name: "Os", age: 25 };

localStorage.setItem("user", user);
// ❌ stores the string "[object Object]" — useless

localStorage.setItem("user", JSON.stringify(user));
// ✅ stores the object as a JSON string

const saved = JSON.parse(localStorage.getItem("user"));
// ✅ parsed back into a real object</code></pre>
      </div>
    </div>
  `,
  'mental-1-8-3': `
    <ul>
      <li><strong>Variables</strong> — the in-memory version that disappears on reload</li>
      <li><strong>JSON.stringify / JSON.parse</strong> — required for storing objects and arrays</li>
      <li><strong>Strings</strong> — the only type localStorage actually stores</li>
      <li><strong>setItem / getItem / removeItem / clear</strong> — the four core methods</li>
      <li><strong>sessionStorage</strong> — same idea, but wipes when the tab closes</li>
    </ul>
  `,
  'mental-1-8-4': `
    <div class="callout callout--click">
      <div class="callout__label">Click moment</div>
      <div class="callout__body">Variables are temporary. localStorage is permanent (until the user clears it). Different jobs, different homes.</div>
    </div>
  `,

  /* --- 1.9 variable memory vs browser storage --- */
  'mental-1-9-0': `
    <p>Variables live in memory and vanish on reload. localStorage lives in the browser and survives reloads. Same idea — different lifespan.</p>
  `,
  'mental-1-9-1': `
    <p>Variables are <strong>fast and temporary</strong>. They live in your script while it's running. The moment the page reloads — closed tab, refresh, navigation — they're gone.</p>
    <p>localStorage is <strong>slower and permanent</strong>. The browser writes it to the user's hard drive. Even if they close the browser and come back tomorrow, your data is still there.</p>
    <p>You usually use both: variables for the current session's working data, and localStorage to remember things between sessions. The trick is knowing which job needs which kind of storage.</p>
  `,
  'mental-1-9-2': `
<pre class="language-javascript"><code class="language-javascript">// VARIABLE — temporary, fast
let cartCount = 0;
cartCount = cartCount + 1;
// works great while the page is open
// disappears on refresh</code></pre>
<pre class="language-javascript"><code class="language-javascript">// LOCALSTORAGE — permanent, persists across reloads
localStorage.setItem("cartCount", "1");

// later, even after the user closes and reopens the page
const saved = localStorage.getItem("cartCount");
// "1" — still there</code></pre>
<pre class="language-javascript"><code class="language-javascript">// COMMON PATTERN: load from storage on startup, work with a variable, save back when it changes
let cartCount = Number(localStorage.getItem("cartCount")) || 0;

function addToCart() {
  cartCount = cartCount + 1;
  localStorage.setItem("cartCount", cartCount);
}</code></pre>
  `,
  'mental-1-9-3': `
    <ul>
      <li><strong>Variables</strong> — in-memory storage, disappears on reload</li>
      <li><strong>localStorage</strong> — browser storage, survives reloads</li>
      <li><strong>sessionStorage</strong> — middle ground, wipes when the tab closes</li>
      <li><strong>Cookies</strong> — yet another browser storage type, mostly for servers</li>
      <li><strong>Page lifecycle</strong> — knowing when the page resets matters here</li>
    </ul>
  `,
  'mental-1-9-4': `
    <div class="callout callout--click">
      <div class="callout__label">Click moment</div>
      <div class="callout__body">Ask: <em>"Does this need to survive a refresh?"</em> Yes → localStorage. No → variable.</div>
    </div>
  `,

  /* --- 1.10 scope as where storage can be accessed --- */
  'mental-1-10-0': `
    <p>Scope is the rule that says <em>where in your code a variable can be reached</em>. A variable declared inside <code>{ }</code> usually only exists inside those braces.</p>
  `,
  'mental-1-10-1': `
    <p>Variables aren't available everywhere. They have a <strong>territory</strong>. Outside that territory, the variable name doesn't exist — JavaScript will throw a "not defined" error if you try to use it.</p>
    <p>The simple rule: <code>let</code> and <code>const</code> are <strong>block-scoped</strong> — they only live inside the closest pair of curly braces <code>{ }</code>. That includes function bodies, <code>if</code> blocks, loop blocks, anything wrapped in braces.</p>
    <p>Variables declared at the top of your file (outside any braces) are <strong>global</strong> — accessible everywhere. Use that sparingly.</p>
  `,
  'mental-1-10-2': `
<pre class="language-javascript"><code class="language-javascript">const globalName = "Os";
// global — available anywhere in the file

function greet() {
  const localName = "Sam";
  // local — only exists inside greet()

  console.log(globalName);   // ✅ "Os"
  console.log(localName);    // ✅ "Sam"
}

greet();
console.log(localName);
// ❌ ReferenceError: localName is not defined
// localName died when greet() finished</code></pre>
    <div class="callout callout--debug">
      <div class="callout__label">Debugging clue</div>
      <div class="callout__body">If you see <strong>"ReferenceError: x is not defined"</strong>, the variable was never created OR you're trying to use it outside its scope.</div>
    </div>
  `,
  'mental-1-10-3': `
    <ul>
      <li><strong>let / const</strong> — both are block-scoped</li>
      <li><strong>Functions</strong> — create their own scope every time they run</li>
      <li><strong>If / else / loops</strong> — each <code>{ }</code> block creates a new scope</li>
      <li><strong>Global scope</strong> — variables declared outside any braces</li>
      <li><strong>ReferenceError</strong> — the error you get when you reach outside scope</li>
    </ul>
  `,
  'mental-1-10-4': `
    <div class="callout callout--click">
      <div class="callout__label">Click moment</div>
      <div class="callout__body">Variables aren't everywhere. They live inside the nearest <code>{ }</code> and die when those braces close.</div>
    </div>
  `,



  /* ===== Sub-lesson: 3.3 Strings → what strings are =====
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
\`hello\` // backticks / template literal</code></pre>
    <p>All three create strings, but they are not always used the same way.</p>
  `,

  /* 0.2 Syntax Details That Matter */
  'topics-2-0-0-3': `
    <p>Double quotes:</p>
<pre class="language-javascript"><code class="language-javascript">const sentence = "I'm learning JavaScript";
// double quotes are useful when the text has an apostrophe

const broken = 'I'm learning JavaScript';
// wrong: the apostrophe inside I'm ends the string early</code></pre>

    <p>Single quotes:</p>
<pre class="language-javascript"><code class="language-javascript">const quote = 'She said "hello"';
// single quotes are useful when the text contains double quotes

const broken = "She said "hello"";
// wrong: the inner double quotes confuse JavaScript</code></pre>

    <p>Backticks:</p>
<pre class="language-javascript"><code class="language-javascript">const name = "Os";

const message = \`Hello, \${name}\`;
// backticks allow \${} to insert the value of name
// result: "Hello, Os"</code></pre>

    <p><code>\${}</code> interpolation:</p>
<pre class="language-javascript"><code class="language-javascript">const name = "Os";

\`Hello, \${name}\`  // correct: inserts the value stored in name
"Hello, \${name}"  // wrong: double quotes treat \${name} as plain text
'Hello, \${name}'  // wrong: single quotes treat \${name} as plain text</code></pre>
    <p><code>\${}</code> only works inside backticks.</p>
  `,

  /* 0.3 Anatomy / Breakdown */
  'topics-2-0-0-2': `
<pre class="language-javascript"><code class="language-javascript">const message = "Hello world";

// const         → creates a variable that should not be reassigned
// message       → the variable name
// =             → assigns a value
// "Hello world" → the string value
// ;             → ends the statement</code></pre>
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
const errorMessage = "Email is required"; // text</code></pre>
    <p>Strings let JavaScript store text, compare text, combine text, and display text on the page.</p>
  `,

  /* 1.2 Where you use it */
  'topics-2-0-1-2': `
    <p>Strings show up anywhere there's text — names, emails, messages, button text, form input, URLs, class names, error messages, search terms, product titles.</p>
<pre class="language-javascript"><code class="language-javascript">heading.textContent = "Welcome back"; // DOM text

const searchTerm = input.value; // form input text

card.classList.add("active"); // CSS class name as a string

email.includes("@"); // checking if text contains something</code></pre>
  `,

  /* 1.3 Plain English explanation */
  'topics-2-0-1-3': `
    <p>A string is text wrapped in quotes so JavaScript knows: <em>"treat this as text, not as code."</em></p>
    <p>That's why these are different:</p>
<pre class="language-javascript"><code class="language-javascript">const name = "Os";

console.log(name);    // "Os" because name is a variable
console.log("name");  // "name" because it is literal text</code></pre>
  `,

  /* 1.4 Mental model */
  'topics-2-0-1-4': `
    <p>A string is a row of characters.</p>
<pre class="language-javascript"><code class="language-javascript">const word = "cat";

// c → index 0
// a → index 1
// t → index 2</code></pre>
    <p>So:</p>
<pre class="language-javascript"><code class="language-javascript">word[0]; // "c" because indexes start at 0
word[1]; // "a"
word[2]; // "t"
word[3]; // undefined because there is no character at index 3</code></pre>
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
// Log "Hello, Os".</code></pre>
  `,

  /* --- Chunk 2: The Click --- */

  /* 2.0 Debugging clue */
  'topics-2-0-2-0': `
    <p>If text is not in quotes, JavaScript thinks it's a variable.</p>
<pre class="language-javascript"><code class="language-javascript">const name = Os;
// wrong: JavaScript looks for a variable named Os
// if Os does not exist, this causes an error

const name = "Os";
// right: "Os" is text, so it must be in quotes</code></pre>
    <p>Another clue:</p>
<pre class="language-javascript"><code class="language-javascript">const name = "Os";

console.log("Hello, \${name}");
// output: Hello, \${name}
// problem: double quotes do not run interpolation

console.log(\`Hello, \${name}\`);
// output: Hello, Os
// fixed: backticks allow \${}</code></pre>
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
console.log("name");  // "name" because it is text</code></pre>

    <p><strong>Confusion: string number vs real number</strong></p>
    <p>They look similar, but they behave differently.</p>
<pre class="language-javascript"><code class="language-javascript">"25"  // string
25    // number

"25" + 5;  // "255" because one value is a string
25 + 5;    // 30 because both values are numbers</code></pre>

    <p><strong>Confusion: .length counts characters, not words</strong></p>
<pre class="language-javascript"><code class="language-javascript">const word = "hello";
word.length; // 5 because there are 5 characters

const sentence = "hello world";
sentence.length; // 11 because the space counts too</code></pre>
  `,

  /* 2.3 Common mistakes */
  'topics-2-0-2-3': `
<pre class="language-javascript"><code class="language-javascript">const name = Os;
// wrong: forgot quotes around text</code></pre>
<pre class="language-javascript"><code class="language-javascript">const message = "Hello, \${name}";
// wrong: used double quotes instead of backticks</code></pre>
<pre class="language-javascript"><code class="language-javascript">const quote = "She said "hello"";
// wrong: quote conflict</code></pre>
<pre class="language-javascript"><code class="language-javascript">const word = "cat";
word[3]; // undefined because indexes start at 0</code></pre>
  `,

  /* --- Chunk 3: In Practice --- */

  /* 3.0 Tiny examples */
  'topics-2-0-3-0': `
<pre class="language-javascript"><code class="language-javascript">const city = "Santa Ana"; // stores a string

city.length;          // 9 because the space counts as a character
city.toUpperCase();   // "SANTA ANA"
city.includes("Ana"); // true
city[0];              // "S"</code></pre>
<pre class="language-javascript"><code class="language-javascript">const firstName = "Os";
const role = "Developer";

const intro = \`\${firstName} is a \${role}\`;
// result: "Os is a Developer"</code></pre>
  `,

  /* 3.1 Real website uses */
  'topics-2-0-3-1': `
    <p><strong>Example: form error message</strong></p>
<pre class="language-javascript"><code class="language-javascript">error.textContent = "Email is required";</code></pre>

    <p><strong>Example: button loading state</strong></p>
<pre class="language-javascript"><code class="language-javascript">button.textContent = "Loading...";</code></pre>

    <p><strong>Example: search input field</strong></p>
<pre class="language-javascript"><code class="language-javascript">const searchTerm = searchInput.value.trim();</code></pre>

    <p><strong>Example: CSS class name</strong></p>
<pre class="language-javascript"><code class="language-javascript">card.classList.add("active");</code></pre>
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


  /* ===== Sub-lesson: 3.1 Variables → what variables are =====
     Path: topics-0-0-{chunkIndex}-{pieceIndex}
  */

  /* --- Chunk 0: What & How --- */

  /* 0.0 What it is */
  'topics-0-0-0-0': `
    <p>A variable is a named container that holds a value so you can reuse it later.</p>
    <p>You give the container a name, put something inside, and from then on you can use the name anywhere instead of repeating the value.</p>
  `,

  /* 0.1 Syntax */
  'topics-0-0-0-1': `
<pre class="language-javascript"><code class="language-javascript">const userName = "Os";   // const = container that should not change
let score = 0;            // let = container whose value will change
var oldStyle = "Os";      // var = the old way (still works, but not used in modern code)</code></pre>
    <p>All three create a variable. <code>const</code> and <code>let</code> are what you'll use today.</p>
    <p>You'll still see <code>var</code> in older codebases or tutorials — it works, but it has weird scoping rules that <code>let</code> and <code>const</code> were designed to fix.</p>
  `,

  /* 0.2 Syntax Details That Matter */
  'topics-0-0-0-3': `
    <p>The keyword goes first:</p>
<pre class="language-javascript"><code class="language-javascript">const userName = "Os";   // correct: const, name, =, value, semicolon
userName = "Os";          // wrong: no keyword — JS doesn't know to create a variable</code></pre>

    <p>The <code>=</code> is one symbol, not two:</p>
<pre class="language-javascript"><code class="language-javascript">const score = 10;   // correct: = means "put this value into the variable"
const score == 10;  // wrong: == is for comparing, not assigning
const score === 10; // wrong: === is also for comparing</code></pre>

    <p>You only declare the variable once:</p>
<pre class="language-javascript"><code class="language-javascript">let count = 0;
// first time — let creates a new variable

count = 5;
// reassigning — just use the name, no let
// you can do this as many times as you want

let count = 5;
// wrong: SyntaxError — variable already exists in this scope
// "let" means "create a new one" — but count already exists</code></pre>

    <p>The semicolon ends the statement:</p>
<pre class="language-javascript"><code class="language-javascript">const name = "Os";   // correct: clean ending
const name = "Os"    // works most of the time, but always include the ;</code></pre>
  `,

  /* 0.3 Anatomy / Breakdown */
  'topics-0-0-0-2': `
<pre class="language-javascript"><code class="language-javascript">const userName = "Os";

// const     → keyword that creates a non-reassignable variable
// userName  → the variable name (also called the identifier)
// =         → assignment operator; puts the value into the variable
// "Os"      → the value being stored
// ;         → ends the statement</code></pre>
  `,

  /* --- Chunk 1: Why & When --- */

  /* 1.0 What problem it solves */
  'topics-0-0-1-0': `
    <p>JavaScript needs a way to remember values across multiple lines of code. Without variables, you'd have to retype every value every time you used it.</p>
  `,

  /* 1.1 Why use it */
  'topics-0-0-1-1': `
    <p>Use a variable any time you'll need the same value more than once, or whenever you want to give a value a meaningful name.</p>
<pre class="language-javascript"><code class="language-javascript">// Without variables — repeating the same value
console.log("Welcome, Os");
console.log("Goodbye, Os");
console.log("See you soon, Os");

// With a variable — write it once, reuse it
const userName = "Os";
console.log("Welcome, " + userName);
console.log("Goodbye, " + userName);
console.log("See you soon, " + userName);</code></pre>
    <p>If you need to update the name later, you change it in one place — not everywhere.</p>
  `,

  /* 1.2 Where you use it */
  'topics-0-0-1-2': `
    <p>Variables are everywhere. Almost every line of real JavaScript starts by storing something or reading from a variable.</p>
<pre class="language-javascript"><code class="language-javascript">const button = document.querySelector(".btn");   // store a DOM element

const userName = input.value;                     // store form input

let cartCount = 0;                                // store a counter

const isLoggedIn = true;                          // store a boolean flag

const colors = ["red", "blue", "green"];          // store a list

const user = { name: "Os", age: 25 };             // store an object</code></pre>
  `,

  /* 1.3 Plain English explanation */
  'topics-0-0-1-3': `
    <p>Imagine a labeled jar on a shelf. The label is the variable name. Whatever you put inside is the value. You can grab the jar by its label any time and use what's inside.</p>
<pre class="language-javascript"><code class="language-javascript">const userName = "Os";

// userName → the label on the jar
// "Os"     → what's inside the jar</code></pre>
    <p>When you write the variable's name in your code, JavaScript walks over to the shelf, finds the jar with that label, and gives you back what's inside.</p>
  `,

  /* 1.4 Mental model */
  'topics-0-0-1-4': `
    <p>A variable is a name that points at a value.</p>
<pre class="language-javascript"><code class="language-javascript">const userName = "Os";

// userName  →  "Os"</code></pre>
    <p>The name doesn't <em>contain</em> the value. It <em>points at</em> it. When you reassign (with <code>let</code>), the name un-points from the old value and re-points at the new one.</p>
<pre class="language-javascript"><code class="language-javascript">let userName = "Os";
userName = "Sam";

// before:  userName  →  "Os"
// after:   userName  →  "Sam"
// "Os" is no longer pointed at — JS throws it away</code></pre>
  `,

  /* 1.5 Step-by-step walkthrough */
  'topics-0-0-1-5': `
<pre class="language-javascript"><code class="language-javascript">const userName = "Os";
console.log(userName);

// JavaScript is thinking:
// See the keyword const → I need to create a non-reassignable variable.
// Read the name userName → register it in this scope.
// See the = → calculate the right side, then assign.
// The right side is "Os" → point userName at the value "Os".
// Next line: see userName → look up the existing variable.
// userName points at "Os" → give back "Os".
// console.log("Os") → print "Os" to the console.</code></pre>
  `,

  /* --- Chunk 2: The Click --- */

  /* 2.0 Debugging clue */
  'topics-0-0-2-0': `
    <p>If a variable seems wrong, the first question is always: <strong>what is the actual value, right now, at this line?</strong></p>
<pre class="language-javascript"><code class="language-javascript">const userName = "Os";
// later in the code...
console.log(userName);   // log it to see what's actually inside</code></pre>
    <p>The most common variable errors:</p>
<pre class="language-javascript"><code class="language-javascript">console.log(userName);
const userName = "Os";
// wrong: ReferenceError — using the variable before declaring it

const userName = "Os";
const userName = "Sam";
// wrong: SyntaxError — variable already declared

userName = "Os";
// wrong (in strict mode): ReferenceError
// you forgot const or let — variable was never created</code></pre>
  `,

  /* 2.1 The part that makes it click */
  'topics-0-0-2-1': `
    <p>A variable doesn't <em>do</em> anything. It just <em>holds</em> something so you can reach it later.</p>
    <p>The name is the label. The value is the thing. They're not the same — they're connected by a <code>=</code>.</p>
  `,

  /* 2.2 Common confusions */
  'topics-0-0-2-2': `
    <p><strong>Confusion: <code>let</code> / <code>const</code> / <code>var</code> are not variables</strong></p>
<pre class="language-javascript"><code class="language-javascript">const userName = "Os";

// const     → keyword (the instruction to create a variable)
// userName  → the variable (the actual thing)</code></pre>
    <p><code>let</code>, <code>const</code>, and <code>var</code> are keywords. The variable is the name that comes after.</p>

    <p><strong>Confusion: variable vs string</strong></p>
<pre class="language-javascript"><code class="language-javascript">const name = "Os";

console.log(name);    // "Os" — the value pointed at by the variable
console.log("name");  // "name" — literal text in quotes</code></pre>

    <p><strong>Confusion: declaring vs reassigning</strong></p>
<pre class="language-javascript"><code class="language-javascript">let score = 0;     // declaring — first time, needs let
score = 10;        // reassigning — just the name, no let
let score = 10;    // wrong: re-declaring throws an error</code></pre>

    <p><strong>Confusion: const blocks reassignment, not internal change</strong></p>
<pre class="language-javascript"><code class="language-javascript">const user = { name: "Os" };

user = { name: "Sam" };   // wrong: reassigning the variable — const blocks this
user.name = "Sam";        // works: changing what's INSIDE the object is allowed</code></pre>
  `,

  /* 2.3 Common mistakes */
  'topics-0-0-2-3': `
<pre class="language-javascript"><code class="language-javascript">userName = "Os";
// wrong: forgot const or let — variable was never declared</code></pre>

<pre class="language-javascript"><code class="language-javascript">const = "Os";
// wrong: const is the keyword, not the variable name</code></pre>

<pre class="language-javascript"><code class="language-javascript">const user-name = "Os";
// wrong: dashes aren't allowed in variable names</code></pre>

<pre class="language-javascript"><code class="language-javascript">const 1user = "Os";
// wrong: variable names can't start with a number</code></pre>

<pre class="language-javascript"><code class="language-javascript">const userName = "Os"
const email = "os@example.com"
// works, but always add semicolons to end statements</code></pre>
  `,

  /* --- Chunk 3: In Practice --- */

  /* 3.0 Tiny examples */
  'topics-0-0-3-0': `
<pre class="language-javascript"><code class="language-javascript">const greeting = "hello";
console.log(greeting);   // "hello"

const age = 25;
const nextAge = age + 1;
console.log(nextAge);    // 26

let total = 0;
total = total + 5;
total = total + 10;
console.log(total);      // 15</code></pre>
  `,

  /* 3.1 Real website uses */
  'topics-0-0-3-1': `
    <p><strong>Example: storing a button so you can use it anywhere</strong></p>
<pre class="language-javascript"><code class="language-javascript">const submitBtn = document.querySelector(".submit");
submitBtn.addEventListener("click", handleSubmit);
submitBtn.disabled = true;</code></pre>

    <p><strong>Example: tracking a counter that goes up</strong></p>
<pre class="language-javascript"><code class="language-javascript">let cartCount = 0;
addToCartBtn.addEventListener("click", () => {
  cartCount = cartCount + 1;
  cartBadge.textContent = cartCount;
});</code></pre>

    <p><strong>Example: storing user input from a form</strong></p>
<pre class="language-javascript"><code class="language-javascript">const userName = nameInput.value.trim();
const userEmail = emailInput.value.trim();</code></pre>

    <p><strong>Example: holding a flag for whether something is open</strong></p>
<pre class="language-javascript"><code class="language-javascript">let isMenuOpen = false;
hamburger.addEventListener("click", () => {
  isMenuOpen = !isMenuOpen;
});</code></pre>
  `,

  /* 3.2 Connects to */
  'topics-0-0-3-2': `
    <ul>
      <li><strong>let</strong> → for variables whose value will change</li>
      <li><strong>const</strong> → for variables whose value won't change (use this by default)</li>
      <li><strong>Values</strong> → what variables actually hold</li>
      <li><strong>Scope</strong> → where a variable can be reached from</li>
      <li><strong>Reassignment</strong> → changing the value of a <code>let</code> variable</li>
      <li><strong>DOM</strong> → variables hold the elements you select</li>
      <li><strong>Forms</strong> → variables hold what the user typed</li>
      <li><strong>Functions</strong> → variables hold inputs and returned values</li>
    </ul>
  `,

  /* 3.3 See also */
  'topics-0-0-3-3': `
    <ul>
      <li><code>let</code></li>
      <li><code>const</code></li>
      <li><code>var</code> (historical context only)</li>
      <li>Declaring a variable</li>
      <li>Assigning a value</li>
      <li>Reassigning a value</li>
      <li>Naming variables</li>
      <li>Scope basics</li>
      <li>Block scope</li>
      <li>Common variable mistakes</li>
    </ul>
  `,


  /* ===== Sub-lesson: 3.1 Variables → what variables are for =====
     Path: topics-0-1-{chunkIndex}-{pieceIndex}
  */

  /* --- Chunk 0: What & How --- */

  /* 0.0 What it is */
  'topics-0-1-0-0': `
    <p>Variables exist so you can store a value once and use it again later, without retyping it.</p>
    <p>That's the core job — they hold values so your code can refer back to them.</p>
  `,

  /* 0.1 Syntax */
  'topics-0-1-0-1': `
<pre class="language-javascript"><code class="language-javascript">const userName = "Os";   // store the value
console.log(userName);    // use it later by name
console.log(userName);    // use it again</code></pre>
    <p>The variable is created once. After that, you just write its name to access the value.</p>
  `,

  /* 0.2 Anatomy / Breakdown */
  'topics-0-1-0-2': `
<pre class="language-javascript"><code class="language-javascript">const userName = "Os";

// const     → keyword that creates the variable
// userName  → the name you'll use to refer back to "Os"
// =         → puts the value into the variable
// "Os"      → the actual value being stored
// ;         → ends the statement</code></pre>
  `,

  /* 0.3 Syntax Details That Matter */
  'topics-0-1-0-3': `
    <p>The name has to match exactly when you reuse it:</p>
<pre class="language-javascript"><code class="language-javascript">const userName = "Os";

console.log(userName);   // works — exact match
console.log(username);   // wrong: lowercase 'n' — JS treats this as a different variable
console.log(UserName);   // wrong: capital 'U' — also a different variable</code></pre>
    <p>JavaScript is case-sensitive on variable names. <code>userName</code> and <code>username</code> are two different things.</p>
  `,

  /* --- Chunk 1: Why & When --- */

  /* 1.0 What problem it solves */
  'topics-0-1-1-0': `
    <p>Code is full of values you need to use multiple times — names, settings, counts, results. Without variables, you'd have to retype every value at every spot it's used.</p>
    <p>If the value ever changes, you'd have to find every copy by hand and update each one. Variables fix that.</p>
  `,

  /* 1.1 Why use it */
  'topics-0-1-1-1': `
    <p>Variables turn one written value into something you can reuse anywhere — and update in one place if it changes.</p>
<pre class="language-javascript"><code class="language-javascript">// Without a variable — typing the same value 4 times
console.log("Welcome, Os");
sendEmail("Os", "welcome");
heading.textContent = "Os";
saveToDatabase("Os");

// With a variable — write it once, change it once
const userName = "Os";
console.log("Welcome, " + userName);
sendEmail(userName, "welcome");
heading.textContent = userName;
saveToDatabase(userName);</code></pre>
    <p>To switch from <code>"Os"</code> to <code>"Sam"</code> in the bottom version, you change one line. In the top version, you'd hunt through the whole file.</p>
  `,

  /* 1.2 Where you use it */
  'topics-0-1-1-2': `
    <p>Anywhere you'd otherwise repeat the same value, or anywhere a value needs a meaningful name.</p>
<pre class="language-javascript"><code class="language-javascript">// Repeating values
const baseURL = "https://api.example.com";
fetch(baseURL + "/users");
fetch(baseURL + "/products");

// Naming a magic number
const MAX_LOGIN_ATTEMPTS = 3;
if (attempts > MAX_LOGIN_ATTEMPTS) lockAccount();

// Holding the result of work you did
const userInput = nameField.value.trim();
if (userInput.length > 0) saveName(userInput);</code></pre>
  `,

  /* 1.3 Plain English explanation */
  'topics-0-1-1-3': `
    <p>Variables are about <strong>memory and reuse</strong>.</p>
    <p>Memory: JavaScript needs to remember things between lines of code. A variable is its way of writing something down so it doesn't forget.</p>
    <p>Reuse: once it's written down, you can grab it as many times as you need.</p>
  `,

  /* 1.4 Mental model */
  'topics-0-1-1-4': `
    <p>Think of variables as JavaScript's notebook.</p>
<pre class="language-javascript"><code class="language-javascript">const userName = "Os";
//    ^ writing in the notebook: "userName means Os"

console.log(userName);
//          ^ flipping back to find "userName" → it says "Os" → use that</code></pre>
    <p>Every time you read a variable's name, JavaScript flips back through its notebook, finds the entry, and uses whatever value is written there.</p>
  `,

  /* 1.5 Step-by-step walkthrough */
  'topics-0-1-1-5': `
<pre class="language-javascript"><code class="language-javascript">const userName = "Os";
console.log(userName);
console.log(userName);

// JavaScript is thinking:
// Line 1: write down "userName means Os" in the notebook.
// Line 2: see userName → flip to the notebook → it says "Os" → log "Os".
// Line 3: see userName again → flip to the notebook → still "Os" → log "Os".</code></pre>
    <p>The key thing: JavaScript looks up the value <strong>every time</strong> the name is used. The variable doesn't get used up.</p>
  `,

  /* --- Chunk 2: The Click --- */

  /* 2.0 Debugging clue */
  'topics-0-1-2-0': `
    <p>If your code doesn't behave the way you expect, the first thing to check is: <strong>what value does the variable actually hold right now?</strong></p>
<pre class="language-javascript"><code class="language-javascript">const userName = "Os";
// later in the code...
console.log(userName);   // log it to see what's actually inside</code></pre>
    <p>Most variable bugs come from one of three things:</p>
<pre class="language-javascript"><code class="language-javascript">const userName = "Os";

console.log(username);
// wrong: typo — username (lowercase n) is a different (or undefined) variable

console.log(userName);
// works: exact name match</code></pre>
  `,

  /* 2.1 The part that makes it click */
  'topics-0-1-2-1': `
    <p>Variables aren't actions. They're <strong>storage with a name</strong>.</p>
    <p>Once you've stored something, you keep using the name forever. The value stays accessible until the variable goes out of scope.</p>
  `,

  /* 2.2 Common confusions */
  'topics-0-1-2-2': `
    <p><strong>Confusion: the value is copied vs the name is reused</strong></p>
<pre class="language-javascript"><code class="language-javascript">const userName = "Os";
console.log(userName);   // does NOT use up the value
console.log(userName);   // still works — value is still there
console.log(userName);   // and again — variables don't run out</code></pre>
    <p>The value isn't consumed when you use it. The name is just a pointer — you can read through it as many times as you want.</p>

    <p><strong>Confusion: typos make new variables (or errors)</strong></p>
<pre class="language-javascript"><code class="language-javascript">const userName = "Os";

console.log(userName);   // "Os"
console.log(username);   // ReferenceError or different variable</code></pre>
    <p>JavaScript doesn't auto-correct typos. Different spelling = different variable.</p>
  `,

  /* 2.3 Common mistakes */
  'topics-0-1-2-3': `
<pre class="language-javascript"><code class="language-javascript">const userName = "Os";
console.log(username);
// wrong: typo'd the name — JS sees this as a different variable</code></pre>

<pre class="language-javascript"><code class="language-javascript">console.log(userName);
const userName = "Os";
// wrong: tried to use the variable before creating it</code></pre>

<pre class="language-javascript"><code class="language-javascript">const userName = "Os";
userName = "Sam";
// wrong: const can't be reassigned — use let if you need to change it</code></pre>

<pre class="language-javascript"><code class="language-javascript">const = "Os";
// wrong: forgot to give the variable a name</code></pre>
  `,

  /* --- Chunk 3: In Practice --- */

  /* 3.0 Tiny examples */
  'topics-0-1-3-0': `
<pre class="language-javascript"><code class="language-javascript">const greeting = "Hello";
console.log(greeting);    // "Hello"
console.log(greeting);    // "Hello" again — value is still there

const price = 19.99;
const tax = price * 0.08;
const total = price + tax;
console.log(total);       // 21.5892

let count = 0;
count = count + 1;        // 1
count = count + 1;        // 2 — using the current value to compute the next</code></pre>
  `,

  /* 3.1 Real website uses */
  'topics-0-1-3-1': `
    <p><strong>Example: configuration values you reuse all over the app</strong></p>
<pre class="language-javascript"><code class="language-javascript">const API_URL = "https://api.example.com";
const APP_NAME = "MyApp";
const VERSION = "1.0.0";</code></pre>

    <p><strong>Example: storing what the user typed once, using it many times</strong></p>
<pre class="language-javascript"><code class="language-javascript">const userEmail = emailInput.value.trim();
validateEmail(userEmail);
saveToDatabase(userEmail);
sendConfirmation(userEmail);</code></pre>

    <p><strong>Example: capturing a calculation result so you don't redo it</strong></p>
<pre class="language-javascript"><code class="language-javascript">const totalPrice = subtotal + tax + shipping;
priceDisplay.textContent = totalPrice;
sendInvoice(totalPrice);</code></pre>

    <p><strong>Example: holding a DOM element you reuse</strong></p>
<pre class="language-javascript"><code class="language-javascript">const submitBtn = document.querySelector(".submit");
submitBtn.addEventListener("click", handleSubmit);
submitBtn.disabled = false;</code></pre>
  `,

  /* 3.2 Connects to */
  'topics-0-1-3-2': `
    <ul>
      <li><strong>what variables are</strong> → the previous lesson, the basic concept</li>
      <li><strong>let / const</strong> → the keywords that create variables</li>
      <li><strong>Reassigning</strong> → the next layer when a value needs to change</li>
      <li><strong>Scope</strong> → where in your code a variable can be reused</li>
      <li><strong>Functions</strong> → variables hold what gets passed in and returned</li>
      <li><strong>DOM</strong> → variables hold elements you've selected</li>
      <li><strong>Forms</strong> → variables hold what users typed</li>
    </ul>
  `,

  /* 3.3 See also */
  'topics-0-1-3-3': `
    <ul>
      <li><code>let</code></li>
      <li><code>const</code></li>
      <li>Naming variables</li>
      <li>Camel case</li>
      <li>Meaningful names</li>
      <li>Storing strings, numbers, booleans</li>
      <li>Reassigning values</li>
      <li>Scope basics</li>
    </ul>
  `,


  /* ===== Sub-lesson: 3.1 Variables → variable as a storage container =====
     Path: topics-0-2-{chunkIndex}-{pieceIndex}
  */

  /* --- Chunk 0: What & How --- */

  /* 0.0 What it is */
  'topics-0-2-0-0': `
    <p>A variable is a labeled storage container — a spot in JavaScript's memory that has a name on it.</p>
    <p>When you create a variable, JavaScript reserves a piece of memory, labels it with your variable name, and lets you put a value inside. After that, you use the name to read or change what's stored there.</p>
  `,

  /* 0.1 Syntax */
  'topics-0-2-0-1': `
<pre class="language-javascript"><code class="language-javascript">const userName = "Os";
//    [label]    [contents]

let count = 0;
//  [label] [contents]</code></pre>
    <p>The keyword creates the container. The name labels it. The <code>=</code> puts something inside.</p>
  `,

  /* 0.2 Anatomy / Breakdown */
  'topics-0-2-0-2': `
<pre class="language-javascript"><code class="language-javascript">const score = 100;

// const   → keyword that creates the container
// score   → the label on the container
// =       → puts the value into the container
// 100     → the value being stored inside
// ;       → ends the statement</code></pre>
  `,

  /* 0.3 Syntax Details That Matter */
  'topics-0-2-0-3': `
    <p>You can create an empty container and fill it later:</p>
<pre class="language-javascript"><code class="language-javascript">let userName;
//  this creates the container, but it's empty
//  the value is undefined until you assign something

userName = "Os";
//  now the container has "Os" inside</code></pre>
    <p>But you can't do this with <code>const</code> — <code>const</code> requires the container to be filled at creation:</p>
<pre class="language-javascript"><code class="language-javascript">const userName;
// wrong: SyntaxError — const must have a value when created

const userName = "Os";
// correct: const filled at creation</code></pre>
  `,

  /* --- Chunk 1: Why & When --- */

  /* 1.0 What problem it solves */
  'topics-0-2-1-0': `
    <p>JavaScript runs from top to bottom. Without a way to set things aside in memory, every value would vanish the moment it was used. Containers let you keep values around for later.</p>
  `,

  /* 1.1 Why use it */
  'topics-0-2-1-1': `
    <p>Containers give your code memory. Anything you might need later — a name, a count, a calculation result, an element from the page — goes into a container so you can reach for it again.</p>
<pre class="language-javascript"><code class="language-javascript">// Without containers — value is calculated and immediately gone
console.log(5 + 10 + 20);   // 35 prints, but the result isn't saved

// With a container — calculation is saved, can be reused
const total = 5 + 10 + 20;
console.log(total);          // 35
sendReport(total);           // can use the same value here
saveToDatabase(total);       // and here</code></pre>
  `,

  /* 1.2 Where you use it */
  'topics-0-2-1-2': `
    <p>Anywhere you need to remember a value across multiple lines.</p>
<pre class="language-javascript"><code class="language-javascript">// Storing a DOM element
const button = document.querySelector(".btn");

// Storing user input
const userEmail = emailInput.value;

// Storing a calculation
const totalPrice = price + tax;

// Storing a flag
let isLoggedIn = false;

// Storing a list of things
const colors = ["red", "blue", "green"];</code></pre>
  `,

  /* 1.3 Plain English explanation */
  'topics-0-2-1-3': `
    <p>A variable is like a labeled box on a shelf.</p>
    <p>You write something on a piece of paper, put the paper in the box, label the box, and slide it onto the shelf. Anytime you need that paper again, you find the box by its label and read what's inside.</p>
<pre class="language-javascript"><code class="language-javascript">const userName = "Os";

// box label:  userName
// box holds:  "Os"</code></pre>
  `,

  /* 1.4 Mental model */
  'topics-0-2-1-4': `
    <p>Picture a row of labeled boxes:</p>
<pre class="language-javascript"><code class="language-javascript">const userName = "Os";
let count = 0;
const isLoggedIn = true;

// [userName]    contains: "Os"
// [count]       contains: 0
// [isLoggedIn]  contains: true</code></pre>
    <p>Each variable is its own container. They don't interfere with each other. JavaScript looks up containers by name when you reference them.</p>
  `,

  /* 1.5 Step-by-step walkthrough */
  'topics-0-2-1-5': `
<pre class="language-javascript"><code class="language-javascript">const score = 100;
const newScore = score + 50;
console.log(newScore);

// JavaScript is thinking:
// Line 1: create a container labeled "score", put 100 inside.
// Line 2: create a container labeled "newScore".
//         To fill it, look up "score" → 100 → add 50 → put 150 inside.
// Line 3: look up "newScore" → 150 → log it.</code></pre>
    <p>The container holds the value. JavaScript reaches into the container any time you use the name.</p>
  `,

  /* --- Chunk 2: The Click --- */

  /* 2.0 Debugging clue */
  'topics-0-2-2-0': `
    <p>If something seems off, ask: <strong>what's actually inside the container right now?</strong></p>
<pre class="language-javascript"><code class="language-javascript">const score = 100;
// later, after some logic...
console.log(score);   // peek inside the container</code></pre>
    <p>If <code>console.log</code> shows something unexpected, the bug isn't where you're using the variable — it's wherever the container got filled with the wrong thing.</p>
  `,

  /* 2.1 The part that makes it click */
  'topics-0-2-2-1': `
    <p>Variables don't <em>do</em>. They <em>hold</em>.</p>
<pre class="language-javascript"><code class="language-javascript">const userName = "Os";
// this line doesn't DO anything visible
// it just creates a labeled container holding "Os"</code></pre>
    <p>Code that <em>does</em> things (logs, displays, sends) comes later. Containers exist to be available when that code needs them.</p>
  `,

  /* 2.2 Common confusions */
  'topics-0-2-2-2': `
    <p><strong>Confusion: the container vs what's inside</strong></p>
<pre class="language-javascript"><code class="language-javascript">const userName = "Os";

console.log(userName);   // "Os" — pulls the value out of the container
console.log("userName"); // "userName" — literal text, has nothing to do with the container</code></pre>
    <p>The label and the contents are two different things. Quotes mean text. No quotes means "look up the container with that name."</p>

    <p><strong>Confusion: empty container vs missing container</strong></p>
<pre class="language-javascript"><code class="language-javascript">let a;             // container exists, but empty (value is undefined)
console.log(a);    // undefined — the container is there

console.log(b);    // ReferenceError — there's no container called b at all</code></pre>
    <p>Empty container = something inside, just nothing useful. Missing container = no container at all.</p>
  `,

  /* 2.3 Common mistakes */
  'topics-0-2-2-3': `
<pre class="language-javascript"><code class="language-javascript">const userName;
// wrong: const requires a value at creation</code></pre>

<pre class="language-javascript"><code class="language-javascript">let userName = "Os";
let userName = "Sam";
// wrong: trying to create a second container with the same label</code></pre>

<pre class="language-javascript"><code class="language-javascript">score = 100;
// wrong: forgot to create the container with const or let first</code></pre>

<pre class="language-javascript"><code class="language-javascript">const userName = "Os";
console.log(UserName);
// wrong: looking for a container labeled "UserName" — different from "userName"</code></pre>
  `,

  /* --- Chunk 3: In Practice --- */

  /* 3.0 Tiny examples */
  'topics-0-2-3-0': `
<pre class="language-javascript"><code class="language-javascript">const greeting = "Hello";
const message = greeting + ", world";
console.log(message);   // "Hello, world"

let counter = 0;
counter = counter + 1;
counter = counter + 1;
console.log(counter);   // 2

const items = [];
items.push("apple");
items.push("banana");
console.log(items);     // ["apple", "banana"]</code></pre>
  `,

  /* 3.1 Real website uses */
  'topics-0-2-3-1': `
    <p><strong>Example: storing a DOM element so you can reach it any time</strong></p>
<pre class="language-javascript"><code class="language-javascript">const submitBtn = document.querySelector(".submit");
submitBtn.disabled = true;
submitBtn.textContent = "Submitting...";</code></pre>

    <p><strong>Example: holding what the user typed for later validation</strong></p>
<pre class="language-javascript"><code class="language-javascript">const userPassword = passwordInput.value;
if (userPassword.length < 8) showError("Password too short");</code></pre>

    <p><strong>Example: keeping a running count that updates</strong></p>
<pre class="language-javascript"><code class="language-javascript">let unreadMessages = 0;
function newMessageArrived() {
  unreadMessages = unreadMessages + 1;
  badge.textContent = unreadMessages;
}</code></pre>

    <p><strong>Example: storing config that's used everywhere</strong></p>
<pre class="language-javascript"><code class="language-javascript">const API_URL = "https://api.example.com";
const TIMEOUT = 5000;
const MAX_RETRIES = 3;</code></pre>
  `,

  /* 3.2 Connects to */
  'topics-0-2-3-2': `
    <ul>
      <li><strong>what variables are</strong> → the basic concept</li>
      <li><strong>what variables are for</strong> → the reason you create containers</li>
      <li><strong>let / const</strong> → the keywords that create containers</li>
      <li><strong>Values</strong> → what goes inside the containers</li>
      <li><strong>Scope</strong> → which containers are reachable from where</li>
      <li><strong>Reassignment</strong> → swapping out what's inside a <code>let</code> container</li>
      <li><strong>DOM</strong> → the browser provides elements that get stored in containers</li>
    </ul>
  `,

  /* 3.3 See also */
  'topics-0-2-3-3': `
    <ul>
      <li><code>let</code></li>
      <li><code>const</code></li>
      <li>Storing strings</li>
      <li>Storing numbers</li>
      <li>Storing booleans</li>
      <li>Storing arrays</li>
      <li>Storing objects</li>
      <li>Storing DOM elements</li>
      <li>Reassigning values</li>
    </ul>
  `,


  /* ===== Sub-lesson: 3.1 Variables → let =====
     Path: topics-0-3-{chunkIndex}-{pieceIndex}
     (Replaces the old wordy version with the new locked format)
  */

  /* --- Chunk 0: What & How --- */

  /* 0.0 What it is */
  'topics-0-3-0-0': `
    <p><code>let</code> is a keyword that creates a variable whose value can be changed later.</p>
    <p>You use <code>let</code> when you know the value will need to update — a counter going up, a flag flipping on and off, a status that changes.</p>
  `,

  /* 0.1 Syntax */
  'topics-0-3-0-1': `
<pre class="language-javascript"><code class="language-javascript">let score = 0;          // create a variable that starts at 0

score = 10;              // change it later — no let needed

let count;               // create without an initial value
count = 5;               // assign a value later</code></pre>
  `,

  /* 0.2 Anatomy / Breakdown */
  'topics-0-3-0-2': `
<pre class="language-javascript"><code class="language-javascript">let score = 0;

// let     → keyword that creates a variable that CAN be reassigned
// score   → the variable name
// =       → assigns the value
// 0       → the starting value
// ;       → ends the statement</code></pre>
  `,

  /* 0.3 Syntax Details That Matter */
  'topics-0-3-0-3': `
    <p>Lowercase only. <code>let</code> is a keyword — JavaScript is case-sensitive:</p>
<pre class="language-javascript"><code class="language-javascript">let score = 0;   // correct
Let score = 0;   // wrong: Let is not a keyword
LET score = 0;   // wrong: LET is not a keyword</code></pre>

    <p>You only write <code>let</code> once — when the variable is born:</p>
<pre class="language-javascript"><code class="language-javascript">let count = 0;
// first time — let creates the variable

count = 5;
// reassigning — just the name and =, no let
// you can do this as many times as you want

let count = 5;
// wrong: SyntaxError — variable already exists in this scope</code></pre>

    <p>The starting value is optional:</p>
<pre class="language-javascript"><code class="language-javascript">let userName;            // creates the variable, value is undefined
userName = "Os";          // assign it later

let score = 0;            // creates and assigns in one line</code></pre>
  `,

  /* --- Chunk 1: Why & When --- */

  /* 1.0 What problem it solves */
  'topics-0-3-1-0': `
    <p>Lots of values in real code need to change as the program runs — counters, scores, statuses, toggles. Without a way to make a variable that can be updated, you'd be stuck creating a new variable every time something changed.</p>
    <p><code>let</code> gives you one variable you can update over and over.</p>
  `,

  /* 1.1 Why use it */
  'topics-0-3-1-1': `
    <p>Use <code>let</code> when you know the value will change at some point.</p>
<pre class="language-javascript"><code class="language-javascript">// Counters — go up over time
let clicks = 0;

// Toggles — flip between two states
let isMenuOpen = false;

// Accumulators — build up a result
let total = 0;

// State trackers — change as the user does things
let currentSlide = 0;</code></pre>
    <p>If the value won't change, use <code>const</code> instead. <code>const</code> is the default — reach for <code>let</code> only when you know reassignment is coming.</p>
  `,

  /* 1.2 Where you use it */
  'topics-0-3-1-2': `
<pre class="language-javascript"><code class="language-javascript">// Loop counters
for (let i = 0; i < 10; i++) {
  console.log(i);
}

// Click counters
let clicks = 0;
button.addEventListener("click", () => {
  clicks = clicks + 1;
});

// Building up a string
let message = "";
message = message + "Hello";
message = message + ", world";

// Tracking a "currently selected" thing
let selectedTab = "home";</code></pre>
  `,

  /* 1.3 Plain English explanation */
  'topics-0-3-1-3': `
    <p><code>let</code> is the keyword you use when you know the value inside the container will need to change later.</p>
    <p>Think of it like a regular labeled box on a shelf. You can swap out what's inside any time, but the box and its label stay the same.</p>
    <p><code>const</code> is the same kind of box, but with the lid glued shut — you fill it once, and that's it.</p>
  `,

  /* 1.4 Mental model */
  'topics-0-3-1-4': `
    <p>A <code>let</code> variable is a name pointing at a value. The name can be moved to point at a new value at any time.</p>
<pre class="language-javascript"><code class="language-javascript">let userName = "Os";

// userName  →  "Os"

userName = "Sam";

// userName  →  "Sam"
// "Os" is no longer pointed at — JS throws it away</code></pre>
  `,

  /* 1.5 Step-by-step walkthrough */
  'topics-0-3-1-5': `
<pre class="language-javascript"><code class="language-javascript">let count = 0;
count = count + 1;
count = count + 1;
console.log(count);

// JavaScript is thinking:
// Line 1: see let → create a new variable called count, point it at 0.
// Line 2: see count with no let → look up the existing variable.
//         Read its current value (0), add 1 → 1. Point count at 1.
// Line 3: same again. Read current value (1), add 1 → 2. Point count at 2.
// Line 4: look up count → 2 → log 2.</code></pre>
  `,

  /* --- Chunk 2: The Click --- */

  /* 2.0 Debugging clue */
  'topics-0-3-2-0': `
    <p>If a <code>let</code> variable seems wrong, the question is: <strong>what's its value at the line that's misbehaving?</strong></p>
<pre class="language-javascript"><code class="language-javascript">let count = 0;
// ... lots of code that might change count ...
console.log(count);   // see what it actually is right now</code></pre>
    <p>The most common <code>let</code> errors:</p>
<pre class="language-javascript"><code class="language-javascript">let score = 0;
let score = 10;
// SyntaxError: Identifier 'score' has already been declared
// fix: drop the second let

console.log(name);
let name = "Os";
// ReferenceError: Cannot access 'name' before initialization
// fix: move the let line above the console.log

score = 10;
// ReferenceError: score is not defined
// fix: declare it first with let or const</code></pre>
  `,

  /* 2.1 The part that makes it click */
  'topics-0-3-2-1': `
    <p>You only write <code>let</code> once — when the variable is born. After that, you just use the name.</p>
    <p><code>let</code> is the birth certificate. Reassignment is just updating what's inside.</p>
  `,

  /* 2.2 Common confusions */
  'topics-0-3-2-2': `
    <p><strong>Confusion: <code>let</code> vs <code>const</code></strong></p>
<pre class="language-javascript"><code class="language-javascript">let x = 5;     // x can be reassigned later
const y = 5;   // y cannot be reassigned

x = 10;        // works
y = 10;        // wrong: TypeError — const blocks reassignment</code></pre>
    <p>If the value will change, use <code>let</code>. If it won't, use <code>const</code>.</p>

    <p><strong>Confusion: <code>let</code> vs <code>var</code></strong></p>
<pre class="language-javascript"><code class="language-javascript">let x = 5;   // modern, block-scoped, what you should use
var x = 5;   // old way — still works, but follows different scoping rules</code></pre>
    <p><code>let</code> is block-scoped (only lives inside <code>{ }</code>). <code>var</code> is function-scoped and has weird hoisting behavior. Use <code>let</code>.</p>

    <p><strong>Confusion: reassigning isn't redeclaring</strong></p>
<pre class="language-javascript"><code class="language-javascript">let count = 0;
count = 5;        // reassigning — works, no let needed
count = 10;       // still reassigning — works
let count = 20;   // wrong: redeclaring — already exists</code></pre>
  `,

  /* 2.3 Common mistakes */
  'topics-0-3-2-3': `
<pre class="language-javascript"><code class="language-javascript">let score = 0;
let score = 10;
// wrong: redeclaring with let in the same scope</code></pre>

<pre class="language-javascript"><code class="language-javascript">console.log(name);
let name = "Os";
// wrong: using a let variable before its declaration line runs</code></pre>

<pre class="language-javascript"><code class="language-javascript">score = 10;
// wrong: forgot to declare score with let or const first</code></pre>

<pre class="language-javascript"><code class="language-javascript">let user = document.querySelector(".user");
// works, but should probably be const — this won't be reassigned</code></pre>

<pre class="language-javascript"><code class="language-javascript">if (loggedIn) {
  let username = "Os";
}
console.log(username);
// wrong: username only lives inside the if block</code></pre>
  `,

  /* --- Chunk 3: In Practice --- */

  /* 3.0 Tiny examples */
  'topics-0-3-3-0': `
<pre class="language-javascript"><code class="language-javascript">// Counter
let clicks = 0;
clicks = clicks + 1;
clicks = clicks + 1;
console.log(clicks);   // 2

// Toggle with !
let isOpen = false;
isOpen = !isOpen;      // flip: now true
isOpen = !isOpen;      // flip again: now false

// Loop counter
for (let i = 0; i < 3; i++) {
  console.log(i);      // 0, 1, 2
}

// Running total
let total = 0;
const prices = [10, 20, 30];
for (const price of prices) {
  total = total + price;
}
console.log(total);    // 60</code></pre>
  `,

  /* 3.1 Real website uses */
  'topics-0-3-3-1': `
    <p><strong>Example: cart counter that goes up</strong></p>
<pre class="language-javascript"><code class="language-javascript">let cartCount = 0;
addToCartBtn.addEventListener("click", () => {
  cartCount = cartCount + 1;
  cartBadge.textContent = cartCount;
});</code></pre>

    <p><strong>Example: mobile menu open/closed toggle</strong></p>
<pre class="language-javascript"><code class="language-javascript">let isMenuOpen = false;
hamburgerBtn.addEventListener("click", () => {
  isMenuOpen = !isMenuOpen;
  menu.classList.toggle("open");
});</code></pre>

    <p><strong>Example: carousel current slide</strong></p>
<pre class="language-javascript"><code class="language-javascript">let currentSlide = 0;
nextBtn.addEventListener("click", () => {
  currentSlide = currentSlide + 1;
  showSlide(currentSlide);
});</code></pre>

    <p><strong>Example: form validation flag</strong></p>
<pre class="language-javascript"><code class="language-javascript">let isFormValid = false;
nameInput.addEventListener("input", () => {
  isFormValid = nameInput.value.length > 0;
  submitBtn.disabled = !isFormValid;
});</code></pre>
  `,

  /* 3.2 Connects to */
  'topics-0-3-3-2': `
    <ul>
      <li><strong>const</strong> → the immutable counterpart, used by default</li>
      <li><strong>var</strong> → the older keyword, avoid in modern code</li>
      <li><strong>Reassignment</strong> → the operation <code>let</code> permits</li>
      <li><strong>Scope</strong> → <code>let</code> only lives inside the nearest <code>{ }</code></li>
      <li><strong>Loops</strong> → <code>for (let i = 0; ...)</code> is the classic <code>let</code> use case</li>
      <li><strong>Events</strong> → most <code>let</code> updates happen inside event handlers</li>
    </ul>
  `,

  /* 3.3 See also */
  'topics-0-3-3-3': `
    <ul>
      <li><code>const</code></li>
      <li><code>var</code></li>
      <li>Reassigning a value</li>
      <li>Scope basics</li>
      <li>Block scope</li>
      <li>Naming variables</li>
      <li>Loops</li>
      <li>Events</li>
    </ul>
  `,


  /* ===== Sub-lesson: 3.1 Variables → const =====
     Path: topics-0-4-{chunkIndex}-{pieceIndex}
  */

  /* --- Chunk 0: What & How --- */

  /* 0.0 What it is */
  'topics-0-4-0-0': `
    <p><code>const</code> is a keyword that creates a variable whose value cannot be reassigned. Once you set it, the name is locked to that value.</p>
    <p><code>const</code> is the default choice in modern JavaScript. Use it for everything unless you specifically need to reassign — then reach for <code>let</code>.</p>
  `,

  /* 0.1 Syntax */
  'topics-0-4-0-1': `
<pre class="language-javascript"><code class="language-javascript">const userName = "Os";       // create and assign in one line
const PI = 3.14;             // can hold any value type
const button = document.querySelector(".btn");  // commonly used for DOM elements</code></pre>
  `,

  /* 0.2 Anatomy / Breakdown */
  'topics-0-4-0-2': `
<pre class="language-javascript"><code class="language-javascript">const userName = "Os";

// const     → keyword that creates a variable that CANNOT be reassigned
// userName  → the variable name
// =         → assigns the value
// "Os"      → the value being stored
// ;         → ends the statement</code></pre>
  `,

  /* 0.3 Syntax Details That Matter */
  'topics-0-4-0-3': `
    <p>You must give <code>const</code> a value at creation:</p>
<pre class="language-javascript"><code class="language-javascript">const userName = "Os";   // correct
const userName;          // wrong: SyntaxError — const requires a value</code></pre>

    <p>You cannot reassign it after creation:</p>
<pre class="language-javascript"><code class="language-javascript">const userName = "Os";
userName = "Sam";        // wrong: TypeError — const can't be reassigned</code></pre>

    <p>But — and this trips people up — <code>const</code> only blocks reassigning the variable itself. If the value is an object or array, you can still change what's INSIDE it:</p>
<pre class="language-javascript"><code class="language-javascript">const user = { name: "Os" };

user = { name: "Sam" };   // wrong: reassigning the variable — blocked
user.name = "Sam";        // works: changing what's inside the object — allowed
user.age = 25;            // works: adding a new property — allowed

const colors = ["red", "blue"];
colors = ["green"];       // wrong: reassigning — blocked
colors.push("green");     // works: adding to the array — allowed</code></pre>
  `,

  /* --- Chunk 1: Why & When --- */

  /* 1.0 What problem it solves */
  'topics-0-4-1-0': `
    <p>Most variables in real code don't need to change. They hold a value once and use it forever. But if a variable can be reassigned, it can also be <em>accidentally</em> reassigned — overwriting something important by mistake.</p>
    <p><code>const</code> solves that. It tells JavaScript: "this should never change." If your code accidentally tries to reassign, JS throws an error and stops you.</p>
  `,

  /* 1.1 Why use it */
  'topics-0-4-1-1': `
    <p>Use <code>const</code> as your default. It signals to anyone reading your code (including future you) that this value is locked in. It also catches bugs early — if you typed something wrong and tried to reassign, you'll find out immediately.</p>
<pre class="language-javascript"><code class="language-javascript">// DOM elements you select once
const button = document.querySelector(".submit");

// Function references
const handleClick = () => { /* ... */ };

// Configuration
const API_URL = "https://api.example.com";

// Data you fetched and want to display
const users = [{ name: "Os" }, { name: "Sam" }];</code></pre>
    <p>Most JavaScript code is <code>const</code>. <code>let</code> is the exception, used only when you specifically need to reassign.</p>
  `,

  /* 1.2 Where you use it */
  'topics-0-4-1-2': `
<pre class="language-javascript"><code class="language-javascript">// DOM elements
const heading = document.querySelector("h1");
const navLinks = document.querySelectorAll(".nav-link");

// Form values you grabbed once
const userEmail = emailInput.value;

// Calculation results
const totalPrice = subtotal + tax;

// Configuration constants
const MAX_RETRIES = 3;
const BASE_URL = "https://api.example.com";

// Function definitions
const greet = (name) => \`Hello, \${name}\`;</code></pre>
  `,

  /* 1.3 Plain English explanation */
  'topics-0-4-1-3': `
    <p><code>const</code> means "I'm setting this value once, and I want JavaScript to stop me if I ever try to change it."</p>
    <p>Think of it like writing in pen instead of pencil. The label on the box is permanent — once it points at a value, it stays pointing there.</p>
    <p>If the value is itself a complex thing like an object or array, <code>const</code> protects the label, not what's inside the value.</p>
  `,

  /* 1.4 Mental model */
  'topics-0-4-1-4': `
    <p>A <code>const</code> variable is a name pointing at a value, with the pointer welded in place.</p>
<pre class="language-javascript"><code class="language-javascript">const userName = "Os";

// userName  →  "Os"
//           (welded — can't be moved to point elsewhere)

userName = "Sam";   // wrong: can't move the pointer

// But if the value is an object, the OBJECT itself isn't welded:
const user = { name: "Os" };

// user  →  { name: "Os" }
//       (welded — user always points at this same object)

user.name = "Sam";  // works: the object's contents can change

// user  →  { name: "Sam" }   ← same object, different contents</code></pre>
  `,

  /* 1.5 Step-by-step walkthrough */
  'topics-0-4-1-5': `
<pre class="language-javascript"><code class="language-javascript">const score = 100;
const newScore = score + 50;
console.log(newScore);

// JavaScript is thinking:
// Line 1: see const → create a variable called score, point it at 100, lock it.
// Line 2: see const → create a variable called newScore.
//         To fill it, look up score → 100 → add 50 → 150. Lock newScore at 150.
// Line 3: look up newScore → 150 → log 150.</code></pre>
  `,

  /* --- Chunk 2: The Click --- */

  /* 2.0 Debugging clue */
  'topics-0-4-2-0': `
    <p>If you see <code>TypeError: Assignment to constant variable</code>, you tried to reassign a <code>const</code>:</p>
<pre class="language-javascript"><code class="language-javascript">const userName = "Os";
userName = "Sam";
// TypeError: Assignment to constant variable.

// fix 1: if the value really needs to change, use let instead
let userName = "Os";
userName = "Sam";    // works

// fix 2: if you're modifying an object, use property access instead of reassignment
const user = { name: "Os" };
user.name = "Sam";   // works — modifying inside the object</code></pre>
  `,

  /* 2.1 The part that makes it click */
  'topics-0-4-2-1': `
    <p><code>const</code> protects the <em>label</em>, not the contents.</p>
    <p>The label can never move to a new value. But if the value itself is an object or array, the things inside it can still be changed.</p>
  `,

  /* 2.2 Common confusions */
  'topics-0-4-2-2': `
    <p><strong>Confusion: <code>const</code> means "constant" — but objects can still change</strong></p>
<pre class="language-javascript"><code class="language-javascript">const user = { name: "Os" };

user.name = "Sam";       // works: changing INSIDE the object
user.age = 25;           // works: adding a new property
delete user.name;        // works: removing a property

user = { name: "Sam" };  // wrong: reassigning the variable itself</code></pre>
    <p><code>const</code> blocks reassignment. It does not freeze object contents. To freeze contents, you'd need <code>Object.freeze()</code>.</p>

    <p><strong>Confusion: when to use <code>const</code> vs <code>let</code></strong></p>
<pre class="language-javascript"><code class="language-javascript">const userName = "Os";    // value won't change → const
let clicks = 0;            // value will change → let

clicks = clicks + 1;       // works
userName = "Sam";          // wrong</code></pre>
    <p>Default to <code>const</code>. Switch to <code>let</code> only when you actually need to reassign.</p>
  `,

  /* 2.3 Common mistakes */
  'topics-0-4-2-3': `
<pre class="language-javascript"><code class="language-javascript">const userName;
// wrong: const requires a value at creation</code></pre>

<pre class="language-javascript"><code class="language-javascript">const userName = "Os";
userName = "Sam";
// wrong: TypeError — const can't be reassigned</code></pre>

<pre class="language-javascript"><code class="language-javascript">const userName = "Os";
const userName = "Sam";
// wrong: SyntaxError — variable already declared</code></pre>

<pre class="language-javascript"><code class="language-javascript">let user = document.querySelector(".user");
// works, but should probably be const — this won't be reassigned</code></pre>

<pre class="language-javascript"><code class="language-javascript">const items = [];
items = ["apple"];
// wrong: reassigning the variable

items.push("apple");
// works: modifying the array's contents</code></pre>
  `,

  /* --- Chunk 3: In Practice --- */

  /* 3.0 Tiny examples */
  'topics-0-4-3-0': `
<pre class="language-javascript"><code class="language-javascript">const greeting = "Hello";
console.log(greeting);   // "Hello"

const PI = 3.14159;
const radius = 5;
const area = PI * radius * radius;
console.log(area);       // 78.53975

const user = { name: "Os", age: 25 };
user.age = 26;            // works: changing inside the object
console.log(user.age);    // 26

const colors = ["red", "blue"];
colors.push("green");     // works: adding to the array
console.log(colors);      // ["red", "blue", "green"]</code></pre>
  `,

  /* 3.1 Real website uses */
  'topics-0-4-3-1': `
    <p><strong>Example: storing a DOM element you'll reuse</strong></p>
<pre class="language-javascript"><code class="language-javascript">const submitBtn = document.querySelector(".submit");
submitBtn.addEventListener("click", handleSubmit);
submitBtn.disabled = true;</code></pre>

    <p><strong>Example: defining a function</strong></p>
<pre class="language-javascript"><code class="language-javascript">const calculateTotal = (items) => {
  return items.reduce((sum, item) => sum + item.price, 0);
};</code></pre>

    <p><strong>Example: configuration constants</strong></p>
<pre class="language-javascript"><code class="language-javascript">const API_URL = "https://api.example.com";
const MAX_LOGIN_ATTEMPTS = 3;
const TIMEOUT_MS = 5000;</code></pre>

    <p><strong>Example: storing data fetched from an API</strong></p>
<pre class="language-javascript"><code class="language-javascript">const response = await fetch(API_URL);
const users = await response.json();
users.forEach(user => renderUserCard(user));</code></pre>
  `,

  /* 3.2 Connects to */
  'topics-0-4-3-2': `
    <ul>
      <li><strong>let</strong> → for variables that DO need to be reassigned</li>
      <li><strong>var</strong> → the older keyword, avoid in modern code</li>
      <li><strong>Reassignment</strong> → the operation <code>const</code> blocks</li>
      <li><strong>Objects</strong> → const protects the variable, not the object's contents</li>
      <li><strong>Arrays</strong> → same idea — array contents can still change</li>
      <li><strong>Functions</strong> → function references are usually stored in <code>const</code></li>
      <li><strong>DOM</strong> → DOM element references are almost always <code>const</code></li>
    </ul>
  `,

  /* 3.3 See also */
  'topics-0-4-3-3': `
    <ul>
      <li><code>let</code></li>
      <li><code>var</code></li>
      <li>Object.freeze()</li>
      <li>When const can still hold arrays/objects that change</li>
      <li>Naming variables (UPPER_CASE for constants)</li>
      <li>Reassigning values</li>
      <li>Scope basics</li>
    </ul>
  `,


  /* ===== Sub-lesson: 3.1 Variables → var only as historical/context warning =====
     Path: topics-0-5-{chunkIndex}-{pieceIndex}
  */

  /* --- Chunk 0: What & How --- */

  /* 0.0 What it is */
  'topics-0-5-0-0': `
    <p><code>var</code> is the original keyword for creating a variable in JavaScript. It's been around since the language was invented in 1995.</p>
    <p>You should not use <code>var</code> in new code. <code>let</code> and <code>const</code> were added in 2015 to fix the problems <code>var</code> had. But you'll still see <code>var</code> in older codebases, old tutorials, and Stack Overflow answers — so you need to recognize it and know what's different about it.</p>
  `,

  /* 0.1 Syntax */
  'topics-0-5-0-1': `
<pre class="language-javascript"><code class="language-javascript">var userName = "Os";    // looks just like let
var score = 0;
var isLoggedIn = true;</code></pre>
    <p>The syntax is identical to <code>let</code>. The differences are all in how it behaves underneath.</p>
  `,

  /* 0.2 Anatomy / Breakdown */
  'topics-0-5-0-2': `
<pre class="language-javascript"><code class="language-javascript">var userName = "Os";

// var       → the old keyword that creates a variable
// userName  → the variable name
// =         → assigns the value
// "Os"      → the value being stored
// ;         → ends the statement</code></pre>
  `,

  /* 0.3 Syntax Details That Matter */
  'topics-0-5-0-3': `
    <p><code>var</code> doesn't follow block scoping. It only respects function boundaries:</p>
<pre class="language-javascript"><code class="language-javascript">if (true) {
  var x = 5;
  let y = 10;
}

console.log(x);   // 5 — var leaked out of the if block
console.log(y);   // ReferenceError — let stayed inside</code></pre>

    <p><code>var</code> allows redeclaring without error:</p>
<pre class="language-javascript"><code class="language-javascript">var count = 0;
var count = 10;          // works — silently overwrites
console.log(count);      // 10

let count = 0;
let count = 10;          // wrong: SyntaxError</code></pre>

    <p><code>var</code> is "hoisted" — it exists from the start of its function, but as <code>undefined</code>:</p>
<pre class="language-javascript"><code class="language-javascript">console.log(x);   // undefined — var x exists but hasn't been assigned yet
var x = 5;

console.log(y);   // ReferenceError — let doesn't allow this
let y = 5;</code></pre>
  `,

  /* --- Chunk 1: Why & When --- */

  /* 1.0 What problem it solves */
  'topics-0-5-1-0': `
    <p><code>var</code> doesn't really solve a problem in modern JavaScript — <code>let</code> and <code>const</code> do its job better.</p>
    <p>It exists because back in 1995, when JavaScript was first designed, <code>var</code> was the only option. Two decades of real-world use revealed its quirks were a major source of bugs, so <code>let</code> and <code>const</code> were added to fix them.</p>
  `,

  /* 1.1 Why use it */
  'topics-0-5-1-1': `
    <p>You almost never should. The only times you'd write <code>var</code> in modern code:</p>
<pre class="language-javascript"><code class="language-javascript">// Working in a really old codebase that already uses var everywhere
// (changing all of them at once would be a huge undertaking)

// Supporting browsers from before 2015
// (extremely rare today)</code></pre>
    <p>For everything else: use <code>const</code> by default, <code>let</code> when you need to reassign. Treat <code>var</code> as a thing you read, not a thing you write.</p>
  `,

  /* 1.2 Where you use it */
  'topics-0-5-1-2': `
    <p>You'll see <code>var</code> in:</p>
<pre class="language-javascript"><code class="language-javascript">// Old tutorials and books from before 2015
var name = "Os";

// Old Stack Overflow answers
var counter = 0;

// Legacy codebases that haven't been updated
var config = { url: "..." };

// Pre-ES6 JavaScript files</code></pre>
    <p>If you're reading code that uses <code>var</code>, that's a hint the code is old. Be extra careful — older code often uses other outdated patterns too.</p>
  `,

  /* 1.3 Plain English explanation */
  'topics-0-5-1-3': `
    <p><code>var</code> is the old way of declaring variables. It still works — JavaScript hasn't removed it for backwards compatibility — but it has weird scoping rules that make it bug-prone.</p>
    <p><code>let</code> and <code>const</code> are the modern, sane replacements. They follow normal block-scoping rules and prevent the silent overwrites that <code>var</code> allows.</p>
  `,

  /* 1.4 Mental model */
  'topics-0-5-1-4': `
    <p><code>var</code> ignores <code>{ }</code> blocks. It only respects function boundaries.</p>
<pre class="language-javascript"><code class="language-javascript">function example() {

  if (true) {
    var x = 5;     // x leaks out — visible everywhere in example()
    let y = 10;    // y is trapped — only exists inside this if block
  }

  console.log(x);  // 5
  console.log(y);  // ReferenceError
}</code></pre>
    <p>Think of <code>var</code> as climbing through walls — it ignores the room (block) it was declared in and treats the whole house (function) as fair game.</p>
  `,

  /* 1.5 Step-by-step walkthrough */
  'topics-0-5-1-5': `
<pre class="language-javascript"><code class="language-javascript">function demo() {
  console.log(x);      // undefined  ← var was hoisted, but not assigned yet
  console.log(y);      // ReferenceError  ← let doesn't allow this

  var x = 5;
  let y = 10;
}

// JavaScript is thinking:
// Before running demo's body, scan for var declarations.
// Find "var x" → reserve x in this function, set it to undefined.
// (Don't do this for let/const — those raise errors if used early.)
//
// Now run line by line:
// console.log(x) → x exists, value is undefined → log undefined.
// console.log(y) → y exists but isn't initialized → throw ReferenceError.</code></pre>
    <p>This "hoisting" behavior is one of the main reasons <code>var</code> was replaced. You can use a variable before declaring it and not get an error — just <code>undefined</code> — which silently hides bugs.</p>
  `,

  /* --- Chunk 2: The Click --- */

  /* 2.0 Debugging clue */
  'topics-0-5-2-0': `
    <p>If you see weird scope behavior — a variable existing where it shouldn't, or one accidentally overwriting another — and the code uses <code>var</code>, that's likely the cause:</p>
<pre class="language-javascript"><code class="language-javascript">// Bug — variable leaks out of a loop
for (var i = 0; i < 3; i++) {
  // ...
}
console.log(i);   // 3 — i is still accessible here

// Fix — switch to let
for (let i = 0; i < 3; i++) {
  // ...
}
console.log(i);   // ReferenceError — let stays inside the loop</code></pre>
    <p>When debugging old code, mentally translating <code>var</code> to <code>let</code> often reveals scope bugs.</p>
  `,

  /* 2.1 The part that makes it click */
  'topics-0-5-2-1': `
    <p><code>var</code> is the old keyword. It's still in the language, but you should treat it as something to recognize when reading other people's code — not something to write yourself.</p>
    <p><code>const</code> by default, <code>let</code> when you need to reassign, <code>var</code> never (in new code).</p>
  `,

  /* 2.2 Common confusions */
  'topics-0-5-2-2': `
    <p><strong>Confusion: "var, let, and const all do the same thing"</strong></p>
<pre class="language-javascript"><code class="language-javascript">// They look similar but behave very differently

if (true) {
  var a = 1;
  let b = 2;
  const c = 3;
}

console.log(a);   // 1 — var leaked out
console.log(b);   // ReferenceError
console.log(c);   // ReferenceError</code></pre>

    <p><strong>Confusion: "var is just an old word for let"</strong></p>
<pre class="language-javascript"><code class="language-javascript">// They have different rules:
// - var:    function-scoped, can be redeclared, hoisted as undefined
// - let:    block-scoped, can't be redeclared, throws if used too early
// - const:  block-scoped, can't be redeclared, can't be reassigned

var x = 1;
var x = 2;     // works — silent overwrite

let y = 1;
let y = 2;     // wrong: SyntaxError</code></pre>
    <p><code>var</code> isn't "let with a different name" — they follow different rules.</p>
  `,

  /* 2.3 Common mistakes */
  'topics-0-5-2-3': `
<pre class="language-javascript"><code class="language-javascript">// Mistake: using var in new code
var userName = "Os";
// Should be: const userName = "Os";</code></pre>

<pre class="language-javascript"><code class="language-javascript">// Mistake: relying on var's hoisting
console.log(score);   // undefined — confusing
var score = 100;

// Better: declare before use
var score = 100;
console.log(score);   // 100</code></pre>

<pre class="language-javascript"><code class="language-javascript">// Mistake: assuming var respects blocks
for (var i = 0; i < 3; i++) {
  // ...
}
console.log(i);   // 3 — leaked
// Fix: use let
for (let i = 0; i < 3; i++) {
  // ...
}</code></pre>

<pre class="language-javascript"><code class="language-javascript">// Mistake: accidentally redeclaring
var count = 0;
// ... 100 lines later ...
var count = 10;   // silently overwrites — bug city
// Fix: use let or const, which throws an error</code></pre>
  `,

  /* --- Chunk 3: In Practice --- */

  /* 3.0 Tiny examples */
  'topics-0-5-3-0': `
<pre class="language-javascript"><code class="language-javascript">// var works, but has quirks
var name = "Os";
console.log(name);   // "Os"

// var ignores block scope
if (true) {
  var leaked = "I'm out";
}
console.log(leaked); // "I'm out" — accessible outside the block

// var allows redeclaring
var count = 0;
var count = 10;      // works
console.log(count);  // 10

// var is hoisted as undefined
console.log(early);  // undefined (no error)
var early = "now defined";</code></pre>
  `,

  /* 3.1 Real website uses */
  'topics-0-5-3-1': `
    <p><strong>Example: reading old jQuery-era code</strong></p>
<pre class="language-javascript"><code class="language-javascript">// Common in pre-2015 codebases
var $button = $(".submit");
var clicked = false;

$button.on("click", function() {
  clicked = true;
});</code></pre>

    <p><strong>Example: old tutorials you might come across</strong></p>
<pre class="language-javascript"><code class="language-javascript">var name = prompt("Your name?");
var greeting = "Hello, " + name;
alert(greeting);</code></pre>

    <p><strong>Example: legacy code you'd want to modernize</strong></p>
<pre class="language-javascript"><code class="language-javascript">// Old:
var users = [];
for (var i = 0; i < data.length; i++) {
  users.push(data[i].name);
}

// Modern:
const users = data.map(item => item.name);</code></pre>
  `,

  /* 3.2 Connects to */
  'topics-0-5-3-2': `
    <ul>
      <li><strong>let</strong> → the modern replacement for reassignable variables</li>
      <li><strong>const</strong> → the modern replacement for non-reassignable variables</li>
      <li><strong>Hoisting</strong> → the behavior <code>var</code> shows that <code>let</code> and <code>const</code> don't</li>
      <li><strong>Scope</strong> → <code>var</code> is function-scoped, others are block-scoped</li>
      <li><strong>Loops</strong> — <code>var</code> in loops leaks out, often causing bugs</li>
      <li><strong>Debugging</strong> — old code with <code>var</code> often hides scope bugs</li>
    </ul>
  `,

  /* 3.3 See also */
  'topics-0-5-3-3': `
    <ul>
      <li><code>let</code></li>
      <li><code>const</code></li>
      <li>Hoisting</li>
      <li>Function scope vs block scope</li>
      <li>Why ES6 introduced let/const</li>
      <li>Common mistakes with variables</li>
    </ul>
  `,


  /* ===== Sub-lesson: 3.1 Variables → declaring a variable =====
     Path: topics-0-6-{chunkIndex}-{pieceIndex}
  */

  /* --- Chunk 0: What & How --- */

  /* 0.0 What it is */
  'topics-0-6-0-0': `
    <p>Declaring a variable is the act of <strong>creating</strong> it for the first time. You're telling JavaScript: "I want a new container with this name."</p>
    <p>Declaration is separate from assignment. Declaring makes the variable exist. Assigning puts a value into it. They often happen in the same line, but they're two different steps.</p>
  `,

  /* 0.1 Syntax */
  'topics-0-6-0-1': `
<pre class="language-javascript"><code class="language-javascript">// Declare and assign in one line (most common)
let score = 0;
const userName = "Os";

// Declare without assigning (let only)
let count;
let isReady;</code></pre>
  `,

  /* 0.2 Anatomy / Breakdown */
  'topics-0-6-0-2': `
<pre class="language-javascript"><code class="language-javascript">let score = 0;

// let     → keyword (the declaration)
// score   → the variable name being declared
// =       → assignment operator
// 0       → the value being assigned
// ;       → ends the statement

// The DECLARATION is just: let score
// The ASSIGNMENT is:        = 0
// They're two operations doing different things on the same line</code></pre>
  `,

  /* 0.3 Syntax Details That Matter */
  'topics-0-6-0-3': `
    <p>Declaration always needs a keyword:</p>
<pre class="language-javascript"><code class="language-javascript">let score = 0;       // correct: let declares the variable
const name = "Os";   // correct: const declares it
score = 0;           // wrong: no keyword — variable was never declared</code></pre>

    <p>You can declare without assigning (with <code>let</code>):</p>
<pre class="language-javascript"><code class="language-javascript">let score;           // declared, value is undefined
let userName;        // declared, value is undefined

const score;         // wrong: const requires a value at declaration</code></pre>

    <p>You can only declare a variable once in the same scope:</p>
<pre class="language-javascript"><code class="language-javascript">let score = 0;
let score = 10;
// wrong: SyntaxError — score has already been declared</code></pre>
  `,

  /* --- Chunk 1: Why & When --- */

  /* 1.0 What problem it solves */
  'topics-0-6-1-0': `
    <p>JavaScript needs to know what variables exist before you start using them. Declaration is how you tell it: <em>"this name is a variable I want to use."</em></p>
    <p>Without declaration, you'd have no way to introduce a new name to JavaScript — and no way for JavaScript to catch typos (since any random name would just become a new variable).</p>
  `,

  /* 1.1 Why use it */
  'topics-0-6-1-1': `
    <p>You declare a variable any time you need to introduce a new name to your code. Every variable starts with one declaration.</p>
<pre class="language-javascript"><code class="language-javascript">// Declare new variables to hold things
const button = document.querySelector(".btn");
const userName = "Os";
let cartCount = 0;

// After declaration, you just use the names
button.addEventListener("click", () => {
  cartCount = cartCount + 1;
});</code></pre>
    <p>The declaration is the moment of birth. After that, the variable just exists and you reference it by name.</p>
  `,

  /* 1.2 Where you use it */
  'topics-0-6-1-2': `
<pre class="language-javascript"><code class="language-javascript">// Top of a script — declaring everything you'll need
const API_URL = "https://api.example.com";
const button = document.querySelector(".submit");
let isLoading = false;

// Inside a function — declaring local variables
function calculateTotal(items) {
  let total = 0;
  for (const item of items) {
    total = total + item.price;
  }
  return total;
}

// Inside a loop — declaring per iteration
for (let i = 0; i < 10; i++) {
  // i is declared fresh each loop
}</code></pre>
  `,

  /* 1.3 Plain English explanation */
  'topics-0-6-1-3': `
    <p>Declaring a variable is like introducing someone at a party. Until you say "this is Os," nobody in the room knows Os exists.</p>
    <p>Once declared, the variable is part of the conversation — you can reference it freely.</p>
<pre class="language-javascript"><code class="language-javascript">const userName = "Os";
//    ^^^^^^^^
//    "Hey JavaScript, meet userName."

console.log(userName);
//          ^^^^^^^^
//          "You know userName, right? Good — log it."</code></pre>
  `,

  /* 1.4 Mental model */
  'topics-0-6-1-4': `
    <p>Declaration = creating the box. Assignment = putting something inside.</p>
<pre class="language-javascript"><code class="language-javascript">let score;
// declaration only: empty box exists, labeled "score"
// score → undefined

score = 100;
// assignment: put 100 in the box
// score → 100

let userName = "Os";
// declaration + assignment in one line
// userName → "Os"</code></pre>
  `,

  /* 1.5 Step-by-step walkthrough */
  'topics-0-6-1-5': `
<pre class="language-javascript"><code class="language-javascript">let score;
score = 100;
console.log(score);

// JavaScript is thinking:
// Line 1: see let → declaration. Create a variable named score.
//         No value given → set it to undefined.
// Line 2: see score with no keyword → assignment to existing variable.
//         Right side is 100 → assign 100 to score.
// Line 3: look up score → 100 → log 100.</code></pre>
    <p>Notice that line 1 doesn't error even though there's no value — declaration alone is fine. Just leaves <code>score</code> as <code>undefined</code> until something is assigned.</p>
  `,

  /* --- Chunk 2: The Click --- */

  /* 2.0 Debugging clue */
  'topics-0-6-2-0': `
    <p>The most common declaration errors:</p>
<pre class="language-javascript"><code class="language-javascript">score = 100;
// ReferenceError: score is not defined
// fix: declare it first with let or const
let score = 100;</code></pre>

<pre class="language-javascript"><code class="language-javascript">let score = 0;
let score = 10;
// SyntaxError: Identifier 'score' has already been declared
// fix: declare once, then reassign without a keyword
let score = 0;
score = 10;</code></pre>

<pre class="language-javascript"><code class="language-javascript">const score;
// SyntaxError: Missing initializer in const declaration
// fix: const must have a value at declaration
const score = 0;</code></pre>
  `,

  /* 2.1 The part that makes it click */
  'topics-0-6-2-1': `
    <p>Declaration creates the variable. Assignment fills it. They're often combined in one line, but they're two separate jobs.</p>
    <p>You declare each variable <strong>once</strong>. After that, you just use its name (or assign new values to it, if it's a <code>let</code>).</p>
  `,

  /* 2.2 Common confusions */
  'topics-0-6-2-2': `
    <p><strong>Confusion: declaration vs assignment</strong></p>
<pre class="language-javascript"><code class="language-javascript">let score;         // declaration — no value yet
score = 100;       // assignment — putting a value in

let count = 0;     // both at once: declaration + assignment</code></pre>

    <p><strong>Confusion: declaring twice vs reassigning</strong></p>
<pre class="language-javascript"><code class="language-javascript">let score = 0;
score = 10;        // reassignment — works, no keyword

let score = 10;    // wrong: redeclaring — SyntaxError</code></pre>
    <p>The keyword <code>let</code> is what makes it a declaration. Without the keyword, it's just assignment.</p>

    <p><strong>Confusion: undeclared assignment creates a global (in non-strict mode)</strong></p>
<pre class="language-javascript"><code class="language-javascript">// In strict mode (modern modules):
score = 100;
// ReferenceError — score was never declared

// In sloppy mode (old scripts):
score = 100;
// silently creates a global variable — usually a bug</code></pre>
    <p>Always declare. Never rely on undeclared assignment.</p>
  `,

  /* 2.3 Common mistakes */
  'topics-0-6-2-3': `
<pre class="language-javascript"><code class="language-javascript">score = 100;
// wrong: forgot to declare with let or const</code></pre>

<pre class="language-javascript"><code class="language-javascript">let score = 0;
let score = 10;
// wrong: redeclaring — already exists</code></pre>

<pre class="language-javascript"><code class="language-javascript">const userName;
// wrong: const must have a value at declaration</code></pre>

<pre class="language-javascript"><code class="language-javascript">console.log(score);
let score = 100;
// wrong: using the variable before declaration line runs</code></pre>

<pre class="language-javascript"><code class="language-javascript">let 1user = "Os";
// wrong: variable names can't start with a number</code></pre>
  `,

  /* --- Chunk 3: In Practice --- */

  /* 3.0 Tiny examples */
  'topics-0-6-3-0': `
<pre class="language-javascript"><code class="language-javascript">// Declaration with assignment
const greeting = "Hello";

// Declaration without assignment
let score;
console.log(score);    // undefined

score = 100;            // now assigning
console.log(score);    // 100

// Multiple declarations
let a = 1;
let b = 2;
let c = 3;

// Or all in one line (less readable, but valid)
let x = 1, y = 2, z = 3;</code></pre>
  `,

  /* 3.1 Real website uses */
  'topics-0-6-3-1': `
    <p><strong>Example: declaring at the top of a script</strong></p>
<pre class="language-javascript"><code class="language-javascript">// Set up everything you'll need
const form = document.querySelector(".signup-form");
const emailInput = document.querySelector("#email");
const submitBtn = document.querySelector(".submit");
let isSubmitting = false;</code></pre>

    <p><strong>Example: declaring inside a function</strong></p>
<pre class="language-javascript"><code class="language-javascript">function fetchUser(id) {
  const url = \`/api/users/\${id}\`;
  const headers = { "Content-Type": "application/json" };
  return fetch(url, { headers });
}</code></pre>

    <p><strong>Example: declaring without assigning, filling later</strong></p>
<pre class="language-javascript"><code class="language-javascript">let userData;   // declared, will be filled by API call

fetch("/api/me")
  .then(res => res.json())
  .then(data => {
    userData = data;   // assigned later
  });</code></pre>

    <p><strong>Example: declaring inside a loop</strong></p>
<pre class="language-javascript"><code class="language-javascript">const items = ["apple", "banana", "cherry"];

for (let i = 0; i < items.length; i++) {
  const item = items[i];   // declared fresh each loop
  console.log(item);
}</code></pre>
  `,

  /* 3.2 Connects to */
  'topics-0-6-3-2': `
    <ul>
      <li><strong>let</strong> → keyword for declaring reassignable variables</li>
      <li><strong>const</strong> → keyword for declaring non-reassignable variables</li>
      <li><strong>var</strong> → the old declaration keyword</li>
      <li><strong>Assigning a value</strong> → the next step after declaration</li>
      <li><strong>Reassigning a value</strong> → updating after the initial assignment</li>
      <li><strong>Scope</strong> → where a declared variable is reachable</li>
      <li><strong>undefined</strong> → what a declared-but-not-assigned variable holds</li>
    </ul>
  `,

  /* 3.3 See also */
  'topics-0-6-3-3': `
    <ul>
      <li><code>let</code></li>
      <li><code>const</code></li>
      <li><code>var</code></li>
      <li>Assigning a value</li>
      <li>Reassigning a value</li>
      <li>Naming variables</li>
      <li>undefined values</li>
      <li>Scope basics</li>
    </ul>
  `,


  /* ===== Sub-lesson: 3.1 Variables → assigning a value =====
     Path: topics-0-7-{chunkIndex}-{pieceIndex}
  */

  /* --- Chunk 0: What & How --- */

  /* 0.0 What it is */
  'topics-0-7-0-0': `
    <p>Assigning a value means putting something into a variable using the <code>=</code> sign.</p>
    <p>The value on the right side of <code>=</code> goes into the variable on the left side. That's it. After the line runs, the variable holds whatever was on the right.</p>
  `,

  /* 0.1 Syntax */
  'topics-0-7-0-1': `
<pre class="language-javascript"><code class="language-javascript">// Assign at declaration (most common)
const userName = "Os";
let score = 0;

// Assign after declaration (let only)
let count;
count = 5;

// Assign the result of a calculation
const total = 10 + 5;

// Assign the result of a function call
const today = new Date();</code></pre>
  `,

  /* 0.2 Anatomy / Breakdown */
  'topics-0-7-0-2': `
<pre class="language-javascript"><code class="language-javascript">const userName = "Os";

// const     → the keyword (creates the variable)
// userName  → the variable being assigned to (left side)
// =         → the assignment operator
// "Os"      → the value being assigned (right side)
// ;         → ends the statement</code></pre>
<pre class="language-javascript"><code class="language-javascript">score = 100;

// score   → the existing variable being assigned to
// =       → the assignment operator
// 100     → the value being assigned
// ;       → ends the statement
// (no keyword — this is reassignment, not declaration)</code></pre>
  `,

  /* 0.3 Syntax Details That Matter */
  'topics-0-7-0-3': `
    <p>Assignment reads <strong>right to left</strong>. The right side runs first, then the result lands in the variable on the left:</p>
<pre class="language-javascript"><code class="language-javascript">const total = 5 + 10;
// step 1: calculate the right side → 5 + 10 = 15
// step 2: put 15 into total

const a = b = 5;
// confusing — assignment can chain, but avoid this in real code</code></pre>

    <p>The <code>=</code> is one symbol — don't confuse it with comparison:</p>
<pre class="language-javascript"><code class="language-javascript">let x = 5;       // assignment: put 5 into x
if (x == 5) {}   // comparison: is x equal to 5? (loose)
if (x === 5) {}  // comparison: is x strictly equal to 5? (use this)</code></pre>

    <p>You can assign a variable to itself plus something else — common in counters:</p>
<pre class="language-javascript"><code class="language-javascript">let count = 0;
count = count + 1;   // right side runs first: 0 + 1 = 1, then 1 goes into count
count = count + 1;   // 1 + 1 = 2, then 2 goes into count</code></pre>

    <p>Shorthand operators combine assignment with math:</p>
<pre class="language-javascript"><code class="language-javascript">let count = 0;
count += 1;     // same as count = count + 1
count -= 1;     // same as count = count - 1
count *= 2;     // same as count = count * 2
count++;        // same as count = count + 1 (only adds 1)</code></pre>
  `,

  /* --- Chunk 1: Why & When --- */

  /* 1.0 What problem it solves */
  'topics-0-7-1-0': `
    <p>Variables on their own are just empty containers. Without assignment, they'd hold nothing useful. Assignment is the act of giving them something to hold — a value, a result, an element from the page.</p>
    <p>Without assignment, every variable would be <code>undefined</code> forever, and JavaScript couldn't actually <em>do</em> anything.</p>
  `,

  /* 1.1 Why use it */
  'topics-0-7-1-1': `
    <p>You assign every time you want to put a value into a variable — at creation, after a calculation, after fetching data, after the user does something.</p>
<pre class="language-javascript"><code class="language-javascript">// Assign a starting value
const userName = "Os";

// Assign the result of work you did
const total = price + tax;

// Assign what the user typed
const userEmail = emailInput.value;

// Assign what came back from an API
const data = await response.json();

// Reassign a let to update it
score = score + 10;</code></pre>
  `,

  /* 1.2 Where you use it */
  'topics-0-7-1-2': `
<pre class="language-javascript"><code class="language-javascript">// At the top of a file (initial values)
const button = document.querySelector(".btn");
let isLoading = false;

// Inside event handlers (updating state)
button.addEventListener("click", () => {
  isLoading = true;
});

// Inside loops (counters and accumulators)
let total = 0;
for (const price of prices) {
  total = total + price;
}

// After API calls
const response = await fetch(url);
const users = await response.json();</code></pre>
  `,

  /* 1.3 Plain English explanation */
  'topics-0-7-1-3': `
    <p>Assignment is putting something into the box.</p>
    <p>The variable name is the box's label. The <code>=</code> is the act of dropping something inside. Whatever's on the right is what goes in.</p>
    <p>You can assign as the box is being created (declaration + assignment), or later after the box already exists (reassignment, only with <code>let</code>).</p>
  `,

  /* 1.4 Mental model */
  'topics-0-7-1-4': `
    <p>The right side becomes the value. The left side is the destination.</p>
<pre class="language-javascript"><code class="language-javascript">const total = 5 + 10;

// step 1 (right side):  5 + 10  → 15
// step 2 (assignment):  total ← 15

// total now holds: 15</code></pre>
    <p>Think of <code>=</code> as an arrow pointing left. Whatever is on the right gets <em>moved into</em> the variable on the left.</p>
  `,

  /* 1.5 Step-by-step walkthrough */
  'topics-0-7-1-5': `
<pre class="language-javascript"><code class="language-javascript">const price = 50;
const tax = price * 0.08;
const total = price + tax;
console.log(total);

// JavaScript is thinking:
// Line 1: see const → declare price.
//         Right side is 50 (a literal). Put 50 into price.
// Line 2: see const → declare tax.
//         Right side: look up price (50), multiply by 0.08 → 4.
//         Put 4 into tax.
// Line 3: see const → declare total.
//         Right side: look up price (50), look up tax (4), add → 54.
//         Put 54 into total.
// Line 4: look up total → 54 → log 54.</code></pre>
  `,

  /* --- Chunk 2: The Click --- */

  /* 2.0 Debugging clue */
  'topics-0-7-2-0': `
    <p>If a variable holds a value you didn't expect, the bug is in whatever line did the assignment. <code>console.log</code> immediately after the assignment shows what actually got stored:</p>
<pre class="language-javascript"><code class="language-javascript">const total = price * quantity;
console.log(total);   // peek right after assigning to confirm</code></pre>

    <p>If you see <code>NaN</code> after a math assignment, one of the values on the right side wasn't a number:</p>
<pre class="language-javascript"><code class="language-javascript">const price = "10";       // string, not number!
const total = price * 2;  // 20 — JS coerced it
const sum = price + 2;    // "102" — string concatenation, not math!

// fix: convert to number first
const total = Number(price) * 2;</code></pre>

    <p>If you see "Assignment to constant variable", you tried to reassign a <code>const</code>:</p>
<pre class="language-javascript"><code class="language-javascript">const score = 0;
score = 5;
// TypeError — fix: use let if you need to reassign</code></pre>
  `,

  /* 2.1 The part that makes it click */
  'topics-0-7-2-1': `
    <p>The right side runs first. The left side is just where the result goes.</p>
    <p><code>=</code> is not "is equal to" — it's "put this into that."</p>
  `,

  /* 2.2 Common confusions */
  'topics-0-7-2-2': `
    <p><strong>Confusion: <code>=</code> vs <code>==</code> vs <code>===</code></strong></p>
<pre class="language-javascript"><code class="language-javascript">x = 5;       // assignment: put 5 into x
x == 5;      // comparison: is x equal to 5? (loose, allows type conversion)
x === 5;     // comparison: is x strictly equal to 5? (use this one)</code></pre>

    <p><strong>Confusion: assignment in an if statement (almost always a bug)</strong></p>
<pre class="language-javascript"><code class="language-javascript">if (x = 10) {
  // wrong: this ASSIGNS 10 to x, then checks if 10 is truthy (it is)
  // this block always runs!
}

if (x === 10) {
  // correct: this checks if x equals 10
}</code></pre>

    <p><strong>Confusion: assignment doesn't return the variable, it returns the value</strong></p>
<pre class="language-javascript"><code class="language-javascript">let x;
console.log(x = 5);   // 5 — the assignment expression evaluates to the value</code></pre>
  `,

  /* 2.3 Common mistakes */
  'topics-0-7-2-3': `
<pre class="language-javascript"><code class="language-javascript">if (x = 5) { }
// wrong: assigning, not comparing — meant to use ===</code></pre>

<pre class="language-javascript"><code class="language-javascript">5 = x;
// wrong: SyntaxError — can't assign to a literal value
// the variable goes on the LEFT</code></pre>

<pre class="language-javascript"><code class="language-javascript">const score = 0;
score = 5;
// wrong: TypeError — can't reassign a const</code></pre>

<pre class="language-javascript"><code class="language-javascript">const total = price + tax;
// if price or tax is undefined, total becomes NaN
// always confirm both values exist before assigning a calculation</code></pre>

<pre class="language-javascript"><code class="language-javascript">let total;
console.log(total);   // undefined
total = 100;
// works, but easier to assign at declaration: let total = 100;</code></pre>
  `,

  /* --- Chunk 3: In Practice --- */

  /* 3.0 Tiny examples */
  'topics-0-7-3-0': `
<pre class="language-javascript"><code class="language-javascript">// Assign a literal
const greeting = "Hello";

// Assign a calculation
const total = 50 + 25;

// Assign the result of a method call
const upperName = "os".toUpperCase();   // "OS"

// Assign a value from another variable
const name = "Os";
const copy = name;   // copy holds "Os"

// Assign with shorthand
let count = 0;
count += 5;          // count is now 5
count *= 2;          // count is now 10</code></pre>
  `,

  /* 3.1 Real website uses */
  'topics-0-7-3-1': `
    <p><strong>Example: assigning a DOM element to a variable</strong></p>
<pre class="language-javascript"><code class="language-javascript">const submitBtn = document.querySelector(".submit");</code></pre>

    <p><strong>Example: assigning what the user typed</strong></p>
<pre class="language-javascript"><code class="language-javascript">const userEmail = emailInput.value.trim();</code></pre>

    <p><strong>Example: assigning a calculation result</strong></p>
<pre class="language-javascript"><code class="language-javascript">const subtotal = items.reduce((sum, item) => sum + item.price, 0);
const tax = subtotal * 0.08;
const total = subtotal + tax;</code></pre>

    <p><strong>Example: assigning fetched API data</strong></p>
<pre class="language-javascript"><code class="language-javascript">const response = await fetch(API_URL);
const users = await response.json();</code></pre>

    <p><strong>Example: updating a counter inside an event</strong></p>
<pre class="language-javascript"><code class="language-javascript">let cartCount = 0;
addToCartBtn.addEventListener("click", () => {
  cartCount = cartCount + 1;
});</code></pre>
  `,

  /* 3.2 Connects to */
  'topics-0-7-3-2': `
    <ul>
      <li><strong>Declaring a variable</strong> → assignment usually happens at declaration</li>
      <li><strong>Reassigning</strong> → assigning again to a <code>let</code> variable</li>
      <li><strong>let / const</strong> → both use <code>=</code> for assignment, but const blocks reassignment</li>
      <li><strong>Comparison operators (<code>===</code>)</strong> → easy to confuse with <code>=</code></li>
      <li><strong>Functions</strong> → return values are commonly assigned to variables</li>
      <li><strong>Operators</strong> → <code>+=</code>, <code>-=</code>, <code>*=</code> are shorthand assignment forms</li>
    </ul>
  `,

  /* 3.3 See also */
  'topics-0-7-3-3': `
    <ul>
      <li>Declaring a variable</li>
      <li>Reassigning a value</li>
      <li><code>===</code> strict equality</li>
      <li><code>+=</code>, <code>-=</code>, <code>*=</code> shorthand operators</li>
      <li>Type coercion in math</li>
      <li>NaN</li>
    </ul>
  `,


  /* ===== Sub-lesson: 3.1 Variables → reassigning a value =====
     Path: topics-0-8-{chunkIndex}-{pieceIndex}
  */

  /* --- Chunk 0: What & How --- */

  /* 0.0 What it is */
  'topics-0-8-0-0': `
    <p>Reassigning a value means putting a new value into a variable that already exists. The old value is replaced by the new one.</p>
    <p>You can only reassign variables declared with <code>let</code> (or <code>var</code>). Variables declared with <code>const</code> can't be reassigned — that's the whole point of <code>const</code>.</p>
  `,

  /* 0.1 Syntax */
  'topics-0-8-0-1': `
<pre class="language-javascript"><code class="language-javascript">let count = 0;     // declaration + first assignment
count = 5;          // reassignment — no let, just the name
count = 10;         // reassign again — works
count = 100;        // and again — let allows unlimited reassignment</code></pre>
  `,

  /* 0.2 Anatomy / Breakdown */
  'topics-0-8-0-2': `
<pre class="language-javascript"><code class="language-javascript">count = 10;

// count   → the existing variable being reassigned
// =       → the assignment operator
// 10      → the new value being assigned
// ;       → ends the statement
// (no keyword — that's what makes it reassignment, not declaration)</code></pre>
  `,

  /* 0.3 Syntax Details That Matter */
  'topics-0-8-0-3': `
    <p>No keyword on reassignment. Don't write <code>let</code> the second time:</p>
<pre class="language-javascript"><code class="language-javascript">let score = 0;
score = 5;          // correct — just the name
let score = 5;      // wrong — SyntaxError, already declared</code></pre>

    <p>Reassignment replaces the old value entirely:</p>
<pre class="language-javascript"><code class="language-javascript">let userName = "Os";
userName = "Sam";
console.log(userName);    // "Sam" — "Os" is gone</code></pre>

    <p>You can use the variable's current value to compute its new value:</p>
<pre class="language-javascript"><code class="language-javascript">let count = 0;
count = count + 1;   // right side runs first: 0 + 1 = 1, then 1 goes into count
count = count + 1;   // 1 + 1 = 2, then 2 goes into count

// shorthand for the same thing:
count += 1;          // count = count + 1
count++;             // count = count + 1 (only adds 1)</code></pre>

    <p><code>const</code> blocks reassignment:</p>
<pre class="language-javascript"><code class="language-javascript">const userName = "Os";
userName = "Sam";    // wrong — TypeError: Assignment to constant variable</code></pre>
  `,

  /* --- Chunk 1: Why & When --- */

  /* 1.0 What problem it solves */
  'topics-0-8-1-0': `
    <p>Many values change over time as a program runs. A counter goes up. A status flips. A user types something new. Without reassignment, you'd need a brand new variable every time something changed — your code would balloon out of control.</p>
    <p>Reassignment lets one variable track a value as it evolves.</p>
  `,

  /* 1.1 Why use it */
  'topics-0-8-1-1': `
    <p>Reassignment is how state changes in JavaScript. Anywhere a value needs to update — counters, toggles, current selections, running totals — you reach for a <code>let</code> variable and reassign it.</p>
<pre class="language-javascript"><code class="language-javascript">// Counter
let clicks = 0;
clicks = clicks + 1;   // user clicked once

// Toggle
let isOpen = false;
isOpen = !isOpen;      // flipped open

// Status
let status = "loading";
status = "done";       // work finished

// Running total
let total = 0;
total = total + price; // accumulating</code></pre>
  `,

  /* 1.2 Where you use it */
  'topics-0-8-1-2': `
<pre class="language-javascript"><code class="language-javascript">// Inside event handlers (most common)
button.addEventListener("click", () => {
  cartCount = cartCount + 1;
});

// Inside loops
for (let i = 0; i < 10; i++) {
  total = total + i;   // i and total both get reassigned each iteration
}

// After validation or processing
let isValid = false;
if (input.value.length > 0) {
  isValid = true;
}

// In response to API data
let userName = "Loading...";
const response = await fetch(url);
userName = await response.json();</code></pre>
  `,

  /* 1.3 Plain English explanation */
  'topics-0-8-1-3': `
    <p>Reassigning is taking the old thing out of the box and putting a new thing in.</p>
    <p>The box stays the same. The label stays the same. Only what's inside changes.</p>
    <p>You don't need to make a new box. You're using the one that already exists.</p>
  `,

  /* 1.4 Mental model */
  'topics-0-8-1-4': `
    <p>Reassignment moves the variable's pointer from the old value to the new one.</p>
<pre class="language-javascript"><code class="language-javascript">let userName = "Os";

// userName  →  "Os"

userName = "Sam";

// userName  →  "Sam"
// "Os" is no longer pointed at — JS will eventually clean it up</code></pre>
    <p>The old value isn't edited or transformed. It's <em>abandoned</em>, and the variable now points somewhere new.</p>
  `,

  /* 1.5 Step-by-step walkthrough */
  'topics-0-8-1-5': `
<pre class="language-javascript"><code class="language-javascript">let count = 0;
count = 5;
count = count + 1;
console.log(count);

// JavaScript is thinking:
// Line 1: declare count, point it at 0.
// Line 2: see count with no let → reassignment.
//         Right side is 5. Point count at 5 (0 is abandoned).
// Line 3: reassignment again.
//         Right side: look up count (5), add 1 → 6.
//         Point count at 6 (5 is abandoned).
// Line 4: look up count → 6 → log 6.</code></pre>
  `,

  /* --- Chunk 2: The Click --- */

  /* 2.0 Debugging clue */
  'topics-0-8-2-0': `
    <p>If a variable's value is wrong, the bug is at whatever line did the most recent reassignment. Add a <code>console.log</code> right after each reassignment to find where things went sideways:</p>
<pre class="language-javascript"><code class="language-javascript">let total = 0;
console.log(total);   // 0

total = 100;
console.log(total);   // 100

total = total - bonus;
console.log(total);   // peek here — is it what you expected?</code></pre>

    <p>If you see "TypeError: Assignment to constant variable", you tried to reassign something declared with <code>const</code>. Either change the declaration to <code>let</code>, or use a different variable.</p>

    <p>If a value isn't updating when you expect it to, double-check you're reassigning the same variable name (no typos or scope issues):</p>
<pre class="language-javascript"><code class="language-javascript">let count = 0;
function increment() {
  let count = 0;     // wrong — this creates a NEW count inside the function
  count = count + 1;
}
increment();
console.log(count);  // still 0 — the outer count was never touched</code></pre>
  `,

  /* 2.1 The part that makes it click */
  'topics-0-8-2-1': `
    <p>Reassignment doesn't change the value — it replaces it.</p>
    <p>Whatever was in the variable before is gone. Whatever's on the right side of <code>=</code> is now what's there.</p>
  `,

  /* 2.2 Common confusions */
  'topics-0-8-2-2': `
    <p><strong>Confusion: declaring vs reassigning</strong></p>
<pre class="language-javascript"><code class="language-javascript">let score = 0;     // declaring (uses let)
score = 5;          // reassigning (no let)
let score = 5;      // wrong — already declared</code></pre>

    <p><strong>Confusion: <code>count = count + 1</code> looks weird</strong></p>
<pre class="language-javascript"><code class="language-javascript">let count = 0;
count = count + 1;
// reads right-to-left:
// 1. calculate the right side: count + 1 → 0 + 1 = 1
// 2. put 1 into count
// (the old count is gone, replaced by the new one)</code></pre>

    <p><strong>Confusion: const blocks reassignment, but not internal change</strong></p>
<pre class="language-javascript"><code class="language-javascript">const user = { name: "Os" };

user = { name: "Sam" };    // wrong — reassignment, blocked by const
user.name = "Sam";          // works — modifying inside the object</code></pre>
  `,

  /* 2.3 Common mistakes */
  'topics-0-8-2-3': `
<pre class="language-javascript"><code class="language-javascript">let score = 0;
let score = 5;
// wrong: redeclaring with let — drop the second let
score = 5;</code></pre>

<pre class="language-javascript"><code class="language-javascript">const score = 0;
score = 5;
// wrong: TypeError — const can't be reassigned
// fix: use let if it needs to change
let score = 0;
score = 5;</code></pre>

<pre class="language-javascript"><code class="language-javascript">let count = 0;
count + 1;
// wrong: this calculates 0 + 1 but throws the result away
// fix: reassign the result
count = count + 1;</code></pre>

<pre class="language-javascript"><code class="language-javascript">let userName = "Os";
function update() {
  let userName = "Sam";    // creates a NEW local variable
}
update();
console.log(userName);     // "Os" — outer one wasn't touched
// fix: drop the let inside the function to reassign the outer one</code></pre>
  `,

  /* --- Chunk 3: In Practice --- */

  /* 3.0 Tiny examples */
  'topics-0-8-3-0': `
<pre class="language-javascript"><code class="language-javascript">// Counter going up
let count = 0;
count = count + 1;       // 1
count = count + 1;       // 2

// Toggle flipping
let isOpen = false;
isOpen = !isOpen;        // true
isOpen = !isOpen;        // false

// Building a string
let message = "Hello";
message = message + ", world";    // "Hello, world"
message = message + "!";          // "Hello, world!"

// Shorthand reassignment
let total = 100;
total += 50;             // 150 (same as total = total + 50)
total -= 25;             // 125
total *= 2;              // 250</code></pre>
  `,

  /* 3.1 Real website uses */
  'topics-0-8-3-1': `
    <p><strong>Example: cart counter going up on click</strong></p>
<pre class="language-javascript"><code class="language-javascript">let cartCount = 0;

addToCartBtn.addEventListener("click", () => {
  cartCount = cartCount + 1;
  cartBadge.textContent = cartCount;
});</code></pre>

    <p><strong>Example: toggling a menu open/closed</strong></p>
<pre class="language-javascript"><code class="language-javascript">let isMenuOpen = false;

hamburgerBtn.addEventListener("click", () => {
  isMenuOpen = !isMenuOpen;
  menu.classList.toggle("open");
});</code></pre>

    <p><strong>Example: tracking the current page in pagination</strong></p>
<pre class="language-javascript"><code class="language-javascript">let currentPage = 1;

nextBtn.addEventListener("click", () => {
  currentPage = currentPage + 1;
  loadPage(currentPage);
});</code></pre>

    <p><strong>Example: updating loading state</strong></p>
<pre class="language-javascript"><code class="language-javascript">let isLoading = true;
loadingSpinner.style.display = "block";

const data = await fetch(url);
isLoading = false;
loadingSpinner.style.display = "none";</code></pre>
  `,

  /* 3.2 Connects to */
  'topics-0-8-3-2': `
    <ul>
      <li><strong>Assigning a value</strong> → reassignment is just doing it again</li>
      <li><strong>let</strong> → the keyword that allows reassignment</li>
      <li><strong>const</strong> → the keyword that blocks reassignment</li>
      <li><strong>Operators</strong> → <code>+=</code>, <code>-=</code>, <code>++</code> are shorthand reassignments</li>
      <li><strong>Loops</strong> → counters get reassigned each iteration</li>
      <li><strong>Events</strong> → most reassignments happen inside event handlers</li>
      <li><strong>Scope</strong> → reassigning the wrong variable is often a scope confusion</li>
    </ul>
  `,

  /* 3.3 See also */
  'topics-0-8-3-3': `
    <ul>
      <li>Assigning a value</li>
      <li><code>let</code></li>
      <li><code>const</code></li>
      <li><code>+=</code>, <code>-=</code>, <code>*=</code></li>
      <li><code>++</code> and <code>--</code></li>
      <li>Mutating objects vs reassigning variables</li>
      <li>Scope basics</li>
    </ul>
  `,


  /* ===== Sub-lesson: 3.1 Variables → when const can still hold arrays/objects that change =====
     Path: topics-0-9-{chunkIndex}-{pieceIndex}
  */

  /* --- Chunk 0: What & How --- */

  /* 0.0 What it is */
  'topics-0-9-0-0': `
    <p><code>const</code> stops you from reassigning the variable. It does NOT stop you from changing what's inside an object or array that the variable points at.</p>
    <p>This trips up almost everyone learning JavaScript: <code>const user = {...}</code> and then <code>user.name = "Sam"</code> is allowed. The variable can't be reassigned, but the object's properties can.</p>
  `,

  /* 0.1 Syntax */
  'topics-0-9-0-1': `
<pre class="language-javascript"><code class="language-javascript">const user = { name: "Os", age: 25 };

user.name = "Sam";          // works — modifying inside the object
user.age = 26;              // works — adding/changing properties
user.email = "os@a.com";    // works — adding new properties
delete user.age;            // works — removing properties

user = { name: "Sam" };     // wrong — reassigning the variable, blocked by const</code></pre>
<pre class="language-javascript"><code class="language-javascript">const colors = ["red", "blue"];

colors.push("green");       // works — adding to the array
colors.pop();               // works — removing from the array
colors[0] = "purple";       // works — changing an item

colors = ["green"];         // wrong — reassigning the variable, blocked by const</code></pre>
  `,

  /* 0.2 Anatomy / Breakdown */
  'topics-0-9-0-2': `
<pre class="language-javascript"><code class="language-javascript">const user = { name: "Os" };

// const   → blocks reassignment of the variable "user"
// user    → the variable (the label)
// =       → assigns the value
// { name: "Os" }  → the value (the object)
// ;       → ends the statement

// const protects:    user → (this object reference)
// const does NOT protect:  what's inside the object</code></pre>
  `,

  /* 0.3 Syntax Details That Matter */
  'topics-0-9-0-3': `
    <p>Reassigning means changing what the variable points at. That's blocked:</p>
<pre class="language-javascript"><code class="language-javascript">const user = { name: "Os" };

user = { name: "Sam" };        // wrong — pointing at a NEW object
user = "Os";                    // wrong — pointing at a string instead
user = null;                    // wrong — same idea</code></pre>

    <p>Mutating means changing what's inside the existing object/array. That's allowed:</p>
<pre class="language-javascript"><code class="language-javascript">const user = { name: "Os" };

user.name = "Sam";              // works
user.age = 25;                  // works
Object.assign(user, { age: 30 }); // works</code></pre>

    <p>If you really need to lock the contents too, use <code>Object.freeze()</code>:</p>
<pre class="language-javascript"><code class="language-javascript">const user = Object.freeze({ name: "Os" });

user.name = "Sam";              // silently fails (or throws in strict mode)
console.log(user.name);         // still "Os"</code></pre>
  `,

  /* --- Chunk 1: Why & When --- */

  /* 1.0 What problem it solves */
  'topics-0-9-1-0': `
    <p>This isn't really a problem <code>const</code> "solves" — it's a quirk that comes from how JavaScript handles objects and arrays. The variable doesn't hold the object directly. It holds a <em>reference</em> (a pointer) to the object. <code>const</code> locks the pointer, not what the pointer points at.</p>
    <p>Understanding this saves you from a whole category of bugs and confused moments.</p>
  `,

  /* 1.1 Why use it */
  'topics-0-9-1-1': `
    <p>This is just how JavaScript works — you don't choose to use it, you have to know it.</p>
    <p>The practical takeaway: use <code>const</code> for objects and arrays even when you plan to modify their contents. The variable still shouldn't be reassigned. Use <code>let</code> only if you specifically need to reassign the variable to a completely different object/array.</p>
<pre class="language-javascript"><code class="language-javascript">// Default — const, modify contents freely
const cart = [];
cart.push("apple");
cart.push("banana");

// Need to swap to a brand new array? Use let
let cart = [];
// ...
cart = await fetchUpdatedCart();   // pointing at a totally new array</code></pre>
  `,

  /* 1.2 Where you use it */
  'topics-0-9-1-2': `
<pre class="language-javascript"><code class="language-javascript">// Building up a list of items
const items = [];
items.push(newItem);

// Updating user data without replacing the whole object
const userProfile = { name: "Os", age: 25 };
userProfile.age = 26;
userProfile.lastLogin = Date.now();

// Tracking a state object
const appState = {
  isLoggedIn: false,
  cartCount: 0
};
appState.isLoggedIn = true;

// Storing DOM data attributes
const dataset = element.dataset;
dataset.status = "active";</code></pre>
  `,

  /* 1.3 Plain English explanation */
  'topics-0-9-1-3': `
    <p><code>const</code> is more like "this label can't move" than "this thing can't change."</p>
    <p>If the variable holds a simple value like a string or number, the label and the thing are basically the same — there's nothing to mutate, so nothing changes.</p>
    <p>But if the variable holds an object or array, the variable holds a label pointing at a separate thing in memory. <code>const</code> welds the label in place. The thing being pointed at is fair game.</p>
  `,

  /* 1.4 Mental model */
  'topics-0-9-1-4': `
    <p>For simple values, <code>const</code> protects everything:</p>
<pre class="language-javascript"><code class="language-javascript">const userName = "Os";

// userName  →  "Os"
//           (welded — pointer can't move)
// "Os" itself can't be modified — strings are immutable in JS</code></pre>

    <p>For objects and arrays, <code>const</code> only protects the pointer:</p>
<pre class="language-javascript"><code class="language-javascript">const user = { name: "Os" };

// user  →  { name: "Os" }
//       (pointer is welded — user always points at THIS specific object)
// But the contents of the object are not welded — properties can be added,
// changed, or removed.</code></pre>
  `,

  /* 1.5 Step-by-step walkthrough */
  'topics-0-9-1-5': `
<pre class="language-javascript"><code class="language-javascript">const user = { name: "Os" };
user.name = "Sam";
user.age = 25;
console.log(user);

// JavaScript is thinking:
// Line 1: create an object { name: "Os" } in memory.
//         Create a const variable "user" that points at it.
//         Lock the pointer.
// Line 2: look up user → it points at the object → access .name
//         Reassign .name to "Sam" — modifying the object, not the pointer.
//         (const doesn't care about this — the pointer hasn't moved.)
// Line 3: same thing — add a new property "age".
// Line 4: look up user → still pointing at the same object →
//         log it: { name: "Sam", age: 25 }</code></pre>
  `,

  /* --- Chunk 2: The Click --- */

  /* 2.0 Debugging clue */
  'topics-0-9-2-0': `
    <p>If something is changing that you didn't expect to, check whether you're modifying an object/array through a <code>const</code>. <code>const</code> doesn't prevent it.</p>
<pre class="language-javascript"><code class="language-javascript">const user = { name: "Os" };

function updateUser(u) {
  u.name = "Sam";   // this changes the original — surprise!
}

updateUser(user);
console.log(user.name);   // "Sam" — the original was mutated</code></pre>
    <p>If you really want a function that doesn't change the original, work with a copy:</p>
<pre class="language-javascript"><code class="language-javascript">function updateUser(u) {
  const copy = { ...u, name: "Sam" };   // spread creates a new object
  return copy;
}

const updated = updateUser(user);
// user is unchanged; updated is the new version</code></pre>
  `,

  /* 2.1 The part that makes it click */
  'topics-0-9-2-1': `
    <p><code>const</code> protects the variable. It doesn't protect the contents of objects or arrays.</p>
    <p>The pointer can't move. What it points at can still change.</p>
  `,

  /* 2.2 Common confusions */
  'topics-0-9-2-2': `
    <p><strong>Confusion: "const means the value can't change"</strong></p>
<pre class="language-javascript"><code class="language-javascript">const user = { name: "Os" };

user.name = "Sam";            // works — most people don't expect this
console.log(user.name);       // "Sam"</code></pre>
    <p><code>const</code> means "the variable can't be reassigned." The internal contents of objects and arrays are not protected.</p>

    <p><strong>Confusion: "I should use let if I need to change anything"</strong></p>
<pre class="language-javascript"><code class="language-javascript">// Right approach
const cart = [];
cart.push("apple");      // adding items — totally fine with const

// Wrong instinct
let cart = [];
cart.push("apple");      // works, but signals "this variable will be reassigned"
                          // and that's misleading if it never is</code></pre>
    <p>Use <code>const</code> by default — even when you'll modify the contents. Use <code>let</code> only when you'll actually swap the variable to point at something new.</p>

    <p><strong>Confusion: <code>Object.freeze</code> vs <code>const</code></strong></p>
<pre class="language-javascript"><code class="language-javascript">const a = { x: 1 };
a.x = 2;                  // works — const doesn't freeze contents

const b = Object.freeze({ x: 1 });
b.x = 2;                  // silently fails — Object.freeze freezes contents
console.log(b.x);         // still 1</code></pre>
  `,

  /* 2.3 Common mistakes */
  'topics-0-9-2-3': `
<pre class="language-javascript"><code class="language-javascript">const user = { name: "Os" };
user = { name: "Sam" };
// wrong: TypeError — that's reassignment, blocked
// fix: modify the existing object instead
user.name = "Sam";</code></pre>

<pre class="language-javascript"><code class="language-javascript">const colors = ["red"];
colors = colors.concat("blue");
// wrong: concat returns a NEW array, then you're trying to reassign
// fix: either use push (modifies in place), or use let
colors.push("blue");</code></pre>

<pre class="language-javascript"><code class="language-javascript">const config = { url: "https://example.com" };

function getConfig() {
  config.url = "/oops";   // accidentally mutates the original
  return config;
}
// fix: return a copy if you don't want to mutate
function getConfig() {
  return { ...config, url: "/oops" };
}</code></pre>

<pre class="language-javascript"><code class="language-javascript">// Assuming const makes the object truly immutable
const settings = { theme: "dark" };
Object.freeze(settings);   // NOW it's locked
settings.theme = "light";   // silently fails
// const alone doesn't do this — you need Object.freeze</code></pre>
  `,

  /* --- Chunk 3: In Practice --- */

  /* 3.0 Tiny examples */
  'topics-0-9-3-0': `
<pre class="language-javascript"><code class="language-javascript">// Modifying object properties
const user = { name: "Os" };
user.name = "Sam";          // works
user.age = 25;              // works
console.log(user);          // { name: "Sam", age: 25 }

// Modifying array contents
const items = ["a", "b"];
items.push("c");            // works
items[0] = "z";             // works
console.log(items);         // ["z", "b", "c"]

// Reassignment is still blocked
const user = { name: "Os" };
user = { name: "Sam" };     // TypeError</code></pre>
  `,

  /* 3.1 Real website uses */
  'topics-0-9-3-1': `
    <p><strong>Example: building up a shopping cart array</strong></p>
<pre class="language-javascript"><code class="language-javascript">const cart = [];

addToCartBtn.addEventListener("click", (e) => {
  const productId = e.target.dataset.id;
  cart.push(productId);
  updateCartUI(cart);
});</code></pre>

    <p><strong>Example: tracking app state in one object</strong></p>
<pre class="language-javascript"><code class="language-javascript">const appState = {
  isLoggedIn: false,
  currentUser: null,
  cartCount: 0
};

loginBtn.addEventListener("click", async () => {
  appState.currentUser = await login();
  appState.isLoggedIn = true;
});</code></pre>

    <p><strong>Example: updating user profile data</strong></p>
<pre class="language-javascript"><code class="language-javascript">const profile = { name: "Os", email: "" };

emailInput.addEventListener("input", () => {
  profile.email = emailInput.value;
});</code></pre>

    <p><strong>Example: configuration object that grows</strong></p>
<pre class="language-javascript"><code class="language-javascript">const config = { theme: "dark" };

if (userPreferences) {
  config.fontSize = userPreferences.fontSize;
  config.language = userPreferences.language;
}</code></pre>
  `,

  /* 3.2 Connects to */
  'topics-0-9-3-2': `
    <ul>
      <li><strong>const</strong> → the keyword whose behavior is being clarified here</li>
      <li><strong>Objects</strong> → most common case where this comes up</li>
      <li><strong>Arrays</strong> → same idea — you can mutate the contents</li>
      <li><strong>Reassignment</strong> → the operation <code>const</code> blocks</li>
      <li><strong>Mutation</strong> → the operation <code>const</code> does NOT block</li>
      <li><strong>References vs values</strong> → the underlying concept that explains this</li>
      <li><strong><code>Object.freeze()</code></strong> → the way to actually lock object contents</li>
    </ul>
  `,

  /* 3.3 See also */
  'topics-0-9-3-3': `
    <ul>
      <li><code>const</code></li>
      <li><code>let</code></li>
      <li>Mutating objects</li>
      <li>Mutating arrays</li>
      <li>References vs values</li>
      <li><code>Object.freeze()</code></li>
      <li>Spread operator (<code>...</code>) for copying</li>
      <li>Pass-by-reference</li>
    </ul>
  `,


  /* ===== Sub-lesson: 3.1 Variables → naming variables =====
     Path: topics-0-10-{chunkIndex}-{pieceIndex}
  */

  /* --- Chunk 0: What & How --- */

  /* 0.0 What it is */
  'topics-0-10-0-0': `
    <p>A variable name is the label you give a variable when you create it. JavaScript has rules about what characters you can use, plus conventions for what good names look like.</p>
    <p>Good names make your code readable. Bad names make it a guessing game six months later.</p>
  `,

  /* 0.1 Syntax */
  'topics-0-10-0-1': `
<pre class="language-javascript"><code class="language-javascript">// Good names
const userName = "Os";
const cartCount = 0;
const isLoggedIn = false;
const submitButton = document.querySelector(".submit");

// Bad names (legal, but unclear)
const x = "Os";
const c = 0;
const flag = false;
const btn = document.querySelector(".submit");</code></pre>
  `,

  /* 0.2 Anatomy / Breakdown */
  'topics-0-10-0-2': `
<pre class="language-javascript"><code class="language-javascript">const cartItemCount = 5;

// const            → keyword
// cartItemCount    → the variable name (the identifier)
//                    multiple words joined together,
//                    starting lowercase, capital on each new word (camelCase)
// =                → assignment
// 5                → the value</code></pre>
  `,

  /* 0.3 Syntax Details That Matter */
  'topics-0-10-0-3': `
    <p>What's allowed in a variable name:</p>
<pre class="language-javascript"><code class="language-javascript">const userName = "Os";        // letters
const user1 = "Os";            // letters and numbers
const _userName = "Os";        // underscore at the start (uncommon but legal)
const $element = button;        // dollar sign at the start (used by some libraries)
const userName_2 = "Sam";       // underscores in the middle</code></pre>

    <p>What's not allowed:</p>
<pre class="language-javascript"><code class="language-javascript">const 1user = "Os";       // wrong: can't start with a number
const user-name = "Os";    // wrong: dashes aren't allowed
const user name = "Os";    // wrong: spaces aren't allowed
const class = "Os";        // wrong: "class" is a reserved keyword
const let = "Os";          // wrong: "let" is a reserved keyword</code></pre>

    <p>Names are case-sensitive — different casing means different variables:</p>
<pre class="language-javascript"><code class="language-javascript">const userName = "Os";
const username = "Sam";    // a totally different variable
const UserName = "Pat";    // also different</code></pre>
  `,

  /* --- Chunk 1: Why & When --- */

  /* 1.0 What problem it solves */
  'topics-0-10-1-0': `
    <p>Code is read way more often than it's written. A variable named <code>x</code> tells you nothing. A variable named <code>cartItemCount</code> tells you exactly what it holds.</p>
    <p>Good names mean you (or someone else) can read the code later and understand what's happening without having to trace every variable back to its source.</p>
  `,

  /* 1.1 Why use it */
  'topics-0-10-1-1': `
    <p>Pick names that say what the variable is for. Aim for something a person can read and immediately understand.</p>
<pre class="language-javascript"><code class="language-javascript">// Hard to read
const d = new Date();
const u = res.data;
const t = p * 0.08;

// Easy to read
const today = new Date();
const user = res.data;
const tax = price * 0.08;</code></pre>
    <p>The extra characters cost nothing. The clarity is worth a lot.</p>
  `,

  /* 1.2 Where you use it */
  'topics-0-10-1-2': `
<pre class="language-javascript"><code class="language-javascript">// Multi-word names → camelCase
const userName = "Os";
const cartItemCount = 5;
const isLoggedIn = true;

// Boolean flags often start with "is", "has", "can", or "should"
const isMenuOpen = false;
const hasUnreadMessages = true;
const canEdit = false;
const shouldShowAlert = true;

// Functions often start with verbs
const handleClick = () => { /* ... */ };
const calculateTotal = () => { /* ... */ };
const fetchUsers = async () => { /* ... */ };

// Constants (config) often UPPER_CASE
const MAX_RETRIES = 3;
const API_URL = "https://api.example.com";
const TIMEOUT_MS = 5000;</code></pre>
  `,

  /* 1.3 Plain English explanation */
  'topics-0-10-1-3': `
    <p>A good variable name reads like a phrase. Read your code out loud — if it makes sense, the names are good. If it sounds like alphabet soup, the names need work.</p>
    <p>Aim for names that answer the question: "what does this hold?" or "what does this do?"</p>
  `,

  /* 1.4 Mental model */
  'topics-0-10-1-4': `
    <p>Variable names are labels for future-you and other developers. JavaScript doesn't care if you call it <code>x</code> or <code>cartItemCount</code> — both work. But humans care, a lot.</p>
<pre class="language-javascript"><code class="language-javascript">// JavaScript reads this:
const x = a * b;

// Humans read this:
const totalPrice = quantity * pricePerItem;

// Same code to JS — much clearer to humans.</code></pre>
  `,

  /* 1.5 Step-by-step walkthrough */
  'topics-0-10-1-5': `
<pre class="language-javascript"><code class="language-javascript">const cartItemCount = 5;
const isCartEmpty = cartItemCount === 0;

// JavaScript is thinking:
// Line 1: declare a variable. The name "cartItemCount" is just a label.
//         JS doesn't analyze it for meaning — it just registers the name.
//         Assign 5.
// Line 2: declare another variable.
//         Right side: look up cartItemCount (5), check if 5 === 0 → false.
//         Assign false to isCartEmpty.

// JavaScript treats names as opaque labels. The meaning is for humans.</code></pre>
  `,

  /* --- Chunk 2: The Click --- */

  /* 2.0 Debugging clue */
  'topics-0-10-2-0': `
    <p>Most variable bugs are typos. JavaScript is case-sensitive, and a typo creates a different (or undefined) variable:</p>
<pre class="language-javascript"><code class="language-javascript">const userName = "Os";
console.log(userName);      // works
console.log(username);      // wrong: lowercase n — different variable
                             // ReferenceError: username is not defined
console.log(UserName);      // wrong: capital U — different variable</code></pre>

    <p>If something is "not defined" but you swear you defined it, check the spelling and casing of every place the variable shows up. The fastest fix is renaming with your editor's "rename symbol" feature, which catches every reference at once.</p>

    <p>Reserved words used as variable names cause errors:</p>
<pre class="language-javascript"><code class="language-javascript">const class = "Math";        // SyntaxError — "class" is reserved
// fix: use a different name
const className = "Math";</code></pre>
  `,

  /* 2.1 The part that makes it click */
  'topics-0-10-2-1': `
    <p>Names are for humans. JavaScript only checks if they're spelled the same.</p>
    <p>A great name today is one that future-you (or a teammate) can understand without having to read the surrounding code.</p>
  `,

  /* 2.2 Common confusions */
  'topics-0-10-2-2': `
    <p><strong>Confusion: case sensitivity</strong></p>
<pre class="language-javascript"><code class="language-javascript">const userName = "Os";
const username = "Sam";
const UserName = "Pat";

// these are THREE different variables to JavaScript</code></pre>

    <p><strong>Confusion: which casing style to use</strong></p>
<pre class="language-javascript"><code class="language-javascript">// Three common styles in JS:
const userName = "Os";          // camelCase — for variables and functions (most common)
const UserName = "Os";          // PascalCase — for classes and components
const USER_NAME = "Os";         // UPPER_CASE — for constants/config (rare)

// snake_case is rare in JavaScript
const user_name = "Os";          // legal, but unusual — most JS uses camelCase</code></pre>

    <p><strong>Confusion: short vs descriptive names</strong></p>
<pre class="language-javascript"><code class="language-javascript">// Short names OK in tiny scopes (loops, callbacks)
items.forEach(i => console.log(i));

// Descriptive names better when the scope is bigger
const cartItems = await fetchCart();
cartItems.forEach(item => addToView(item));</code></pre>
    <p>Short names like <code>i</code> or <code>x</code> are fine in tight, throwaway contexts. Anywhere else, prefer descriptive names.</p>
  `,

  /* 2.3 Common mistakes */
  'topics-0-10-2-3': `
<pre class="language-javascript"><code class="language-javascript">const 1user = "Os";
// wrong: can't start with a number</code></pre>

<pre class="language-javascript"><code class="language-javascript">const user-name = "Os";
// wrong: dashes mean subtraction in JS, not allowed in names</code></pre>

<pre class="language-javascript"><code class="language-javascript">const class = "Math";
// wrong: "class" is a reserved keyword</code></pre>

<pre class="language-javascript"><code class="language-javascript">const userName = "Os";
console.log(username);
// wrong: typo — 'username' is a different variable (or undefined)</code></pre>

<pre class="language-javascript"><code class="language-javascript">const x = totalPrice + tax;
// not technically wrong, but unclear
// better: const grandTotal = totalPrice + tax;</code></pre>

<pre class="language-javascript"><code class="language-javascript">const data = response.json();
const data2 = response.json();
const data3 = response.json();
// numbered names are usually a sign you should rename for clarity
// better: const userData, productData, orderData</code></pre>
  `,

  /* --- Chunk 3: In Practice --- */

  /* 3.0 Tiny examples */
  'topics-0-10-3-0': `
<pre class="language-javascript"><code class="language-javascript">// camelCase for variables
const userName = "Os";
const cartItemCount = 5;
const isLoggedIn = true;

// Boolean flags read like questions
const hasUnreadMessages = true;
const canEditProfile = false;

// Function names read like commands
const calculateTotal = () => { /* ... */ };
const fetchUserData = async () => { /* ... */ };

// Constants in UPPER_CASE
const MAX_FILE_SIZE = 5_000_000;
const API_BASE = "https://api.example.com";</code></pre>
  `,

  /* 3.1 Real website uses */
  'topics-0-10-3-1': `
    <p><strong>Example: descriptive names in a checkout flow</strong></p>
<pre class="language-javascript"><code class="language-javascript">const cartItems = await fetchCart();
const subtotal = cartItems.reduce((sum, item) => sum + item.price, 0);
const tax = subtotal * 0.08;
const shippingCost = calculateShipping(cartItems);
const grandTotal = subtotal + tax + shippingCost;</code></pre>

    <p><strong>Example: clear names for DOM elements</strong></p>
<pre class="language-javascript"><code class="language-javascript">const submitButton = document.querySelector(".submit");
const emailInput = document.querySelector("#email");
const errorMessage = document.querySelector(".error");
const loadingSpinner = document.querySelector(".spinner");</code></pre>

    <p><strong>Example: boolean flags reading as questions</strong></p>
<pre class="language-javascript"><code class="language-javascript">const isMenuOpen = false;
const hasUserAccepted = true;
const canSubmit = email.length > 0;
const shouldShowWarning = stockCount < 5;</code></pre>

    <p><strong>Example: configuration constants</strong></p>
<pre class="language-javascript"><code class="language-javascript">const API_URL = "https://api.example.com";
const MAX_RETRIES = 3;
const REQUEST_TIMEOUT_MS = 5000;</code></pre>
  `,

  /* 3.2 Connects to */
  'topics-0-10-3-2': `
    <ul>
      <li><strong>Declaring a variable</strong> → naming happens at declaration</li>
      <li><strong>camelCase</strong> → the standard convention for JS variables</li>
      <li><strong>Reserved keywords</strong> → words you can't use as names</li>
      <li><strong>Case sensitivity</strong> → JS treats different casing as different variables</li>
      <li><strong>Functions</strong> → similar naming conventions apply</li>
      <li><strong>Debugging</strong> → typos in names cause most ReferenceErrors</li>
    </ul>
  `,

  /* 3.3 See also */
  'topics-0-10-3-3': `
    <ul>
      <li>camelCase</li>
      <li>PascalCase</li>
      <li>UPPER_CASE constants</li>
      <li>Reserved keywords</li>
      <li>Case sensitivity</li>
      <li>Boolean naming patterns (is/has/can/should)</li>
      <li>Function naming patterns</li>
    </ul>
  `,


  /* ===== Sub-lesson: 3.1 Variables → camelCase =====
     Path: topics-0-11-{chunkIndex}-{pieceIndex}
  */

  /* --- Chunk 0: What & How --- */

  /* 0.0 What it is */
  'topics-0-11-0-0': `
    <p>camelCase is the naming style where you write a multi-word name as one word with no spaces, starting with a lowercase letter and capitalizing the first letter of each new word.</p>
    <p>It's the standard convention for variable and function names in JavaScript. The "humps" of capital letters in the middle look like camel humps — that's where the name comes from.</p>
  `,

  /* 0.1 Syntax */
  'topics-0-11-0-1': `
<pre class="language-javascript"><code class="language-javascript">// camelCase examples
const userName = "Os";
const cartItemCount = 5;
const isMenuOpen = false;
const calculateTotalPrice = () => {};

// First word lowercase, capital on each new word</code></pre>
  `,

  /* 0.2 Anatomy / Breakdown */
  'topics-0-11-0-2': `
<pre class="language-javascript"><code class="language-javascript">const cartItemCount = 5;

//   c artItemCount
//   ↑ ↑   ↑
//   |  |   capital on "Count" (third word)
//   |  capital on "Item" (second word)
//   first word lowercase
//
// All joined together — no spaces, no underscores, no dashes</code></pre>
  `,

  /* 0.3 Syntax Details That Matter */
  'topics-0-11-0-3': `
    <p>The first letter is always lowercase. Capital letters mark word boundaries:</p>
<pre class="language-javascript"><code class="language-javascript">const userName = "Os";          // correct camelCase
const UserName = "Os";          // PascalCase — different convention (used for classes)
const username = "Os";          // works, but unclear when there are multiple words
const user_name = "Os";          // snake_case — unusual in JavaScript</code></pre>

    <p>Acronyms inside camelCase have special handling — only the first letter capitalizes:</p>
<pre class="language-javascript"><code class="language-javascript">// One acronym in the middle:
const userId = 123;             // not userID
const apiUrl = "...";           // not apiURL
const htmlContent = "...";      // not HTMLContent

// Acronym at the start:
const idLookup = {};            // not IDLookup
const urlParser = () => {};     // not URLParser</code></pre>

    <p>Numbers are allowed but can't start the name:</p>
<pre class="language-javascript"><code class="language-javascript">const user1 = "Os";              // works
const user2 = "Sam";             // works
const 1user = "Os";              // wrong: can't start with a number</code></pre>
  `,

  /* --- Chunk 1: Why & When --- */

  /* 1.0 What problem it solves */
  'topics-0-11-1-0': `
    <p>JavaScript doesn't allow spaces in variable names. So when you have a multi-word name, you need a way to make the words readable as one identifier. camelCase is the convention the JavaScript community settled on.</p>
    <p>Other languages use other conventions (snake_case in Python, PascalCase in C#), but in JavaScript, camelCase is the default.</p>
  `,

  /* 1.1 Why use it */
  'topics-0-11-1-1': `
    <p>Use camelCase because it's what every JS codebase uses. If you write code in a different style, your code looks out of place — and tools like linters will flag it.</p>
<pre class="language-javascript"><code class="language-javascript">// Standard JS — what everyone uses
const userName = "Os";
const cartItemCount = 5;
const handleSubmit = () => {};

// Stands out as non-standard
const user_name = "Os";          // looks like Python
const UserName = "Os";           // looks like a class
const username = "Os";           // hard to read with multiple words</code></pre>
    <p>The exception: built-in classes and components use PascalCase (covered separately). Constants in some codebases use UPPER_CASE.</p>
  `,

  /* 1.2 Where you use it */
  'topics-0-11-1-2': `
<pre class="language-javascript"><code class="language-javascript">// All variable names
const userEmail = "os@example.com";
const productPrice = 29.99;
const totalItems = 5;

// All function names
const handleClick = () => {};
const calculateTax = (price) => price * 0.08;
const fetchUserData = async (id) => {};

// Object properties (also camelCase)
const user = {
  firstName: "Os",
  lastLogin: "2024-01-15",
  isActive: true
};

// Method names (also camelCase)
button.addEventListener("click", handleClick);
array.forEach(callback);
string.toUpperCase();</code></pre>
  `,

  /* 1.3 Plain English explanation */
  'topics-0-11-1-3': `
    <p>camelCase is "smush all the words together, but capitalize where each new word starts (except the very first one)."</p>
    <p>It's how JavaScript folks fake the look of a multi-word name without using spaces. The eye picks up on the capital letters as word boundaries.</p>
  `,

  /* 1.4 Mental model */
  'topics-0-11-1-4': `
    <p>Imagine writing a phrase, then deleting the spaces and capitalizing where the spaces were:</p>
<pre class="language-javascript"><code class="language-javascript">// "user name" → drop the space → "user Name"
const userName = "Os";

// "cart item count" → drop spaces → "cart Item Count"
const cartItemCount = 5;

// "is menu open" → drop spaces → "is Menu Open"
const isMenuOpen = false;</code></pre>
    <p>The first word stays lowercase. The capital letters mark where new words begin.</p>
  `,

  /* 1.5 Step-by-step walkthrough */
  'topics-0-11-1-5': `
<pre class="language-javascript"><code class="language-javascript">// Naming process for "the user's email address"

// Step 1: Strip filler words.
// → "user email address"

// Step 2: Decide if you need all three or just two.
// → "user email" is probably enough

// Step 3: Apply camelCase.
// "user email" → drop space → "user" + "Email" → "userEmail"

const userEmail = "os@example.com";</code></pre>
  `,

  /* --- Chunk 2: The Click --- */

  /* 2.0 Debugging clue */
  'topics-0-11-2-0': `
    <p>Mismatched casing creates "different" variables. JS won't suggest a fix — you have to spot it:</p>
<pre class="language-javascript"><code class="language-javascript">const userEmail = "os@example.com";
console.log(useremail);          // ReferenceError — different variable name
console.log(UserEmail);          // ReferenceError — different variable name
console.log(userEmail);          // works</code></pre>

    <p>If you see "is not defined" but you swear you defined it, check the casing of every reference. The most common cause:</p>
<pre class="language-javascript"><code class="language-javascript">const userId = 123;
console.log(userID);            // wrong — uppercase ID, but the variable was userId

// fix one or the other to match
const userID = 123;             // and use userID everywhere
// OR
console.log(userId);            // matches the original</code></pre>
  `,

  /* 2.1 The part that makes it click */
  'topics-0-11-2-1': `
    <p>camelCase: lowercase first letter, capital at the start of every new word, no spaces.</p>
    <p>That's the whole rule. Use it for every variable and function name in JavaScript.</p>
  `,

  /* 2.2 Common confusions */
  'topics-0-11-2-2': `
    <p><strong>Confusion: camelCase vs PascalCase</strong></p>
<pre class="language-javascript"><code class="language-javascript">const userName = "Os";     // camelCase — variables, functions
class UserName {}           // PascalCase — classes, components

// camelCase: first letter is lowercase
// PascalCase: first letter is uppercase
// Otherwise identical</code></pre>

    <p><strong>Confusion: camelCase vs snake_case</strong></p>
<pre class="language-javascript"><code class="language-javascript">const userName = "Os";     // camelCase — JavaScript convention
const user_name = "Os";    // snake_case — Python convention, rare in JS

// Both work in JS, but mixing styles in one project looks messy.
// JavaScript ecosystem uses camelCase.</code></pre>

    <p><strong>Confusion: handling acronyms</strong></p>
<pre class="language-javascript"><code class="language-javascript">// Common debate — both styles exist:
const userId = 123;          // strict camelCase (most common today)
const userID = 123;          // alternative style (older code)

// Strict camelCase treats acronyms as one word.
// Pick one style and stick with it across your project.</code></pre>
  `,

  /* 2.3 Common mistakes */
  'topics-0-11-2-3': `
<pre class="language-javascript"><code class="language-javascript">const UserName = "Os";
// not technically wrong, but PascalCase is for classes
// fix: use camelCase for variables
const userName = "Os";</code></pre>

<pre class="language-javascript"><code class="language-javascript">const user_name = "Os";
// works, but JavaScript convention is camelCase
// fix:
const userName = "Os";</code></pre>

<pre class="language-javascript"><code class="language-javascript">const username = "Os";
// works for one word, but unclear with multiple
// "userfirstname" is hard to read
// fix:
const userFirstName = "Os";</code></pre>

<pre class="language-javascript"><code class="language-javascript">const userName = "Os";
console.log(username);
// wrong: lowercase n is a different variable
// fix: match exact casing
console.log(userName);</code></pre>

<pre class="language-javascript"><code class="language-javascript">const u = "Os";
const n = 5;
// works, but cryptic
// fix: use descriptive camelCase
const userName = "Os";
const itemCount = 5;</code></pre>
  `,

  /* --- Chunk 3: In Practice --- */

  /* 3.0 Tiny examples */
  'topics-0-11-3-0': `
<pre class="language-javascript"><code class="language-javascript">// Variables
const firstName = "Os";
const lastName = "Smith";
const fullName = firstName + " " + lastName;

// Boolean flags (often start with is/has/can)
const isActive = true;
const hasPermission = false;
const canEdit = true;

// Functions (often start with verbs)
const handleClick = () => {};
const updateProfile = () => {};
const sendNotification = () => {};

// Object properties
const user = {
  emailAddress: "os@example.com",
  phoneNumber: "555-1234",
  preferredLanguage: "en"
};</code></pre>
  `,

  /* 3.1 Real website uses */
  'topics-0-11-3-1': `
    <p><strong>Example: form variables</strong></p>
<pre class="language-javascript"><code class="language-javascript">const emailInput = document.querySelector("#email");
const passwordInput = document.querySelector("#password");
const submitButton = document.querySelector(".submit");
const errorMessage = document.querySelector(".error");</code></pre>

    <p><strong>Example: API response handling</strong></p>
<pre class="language-javascript"><code class="language-javascript">const response = await fetch(API_URL);
const userData = await response.json();
const userId = userData.id;
const userEmail = userData.email;</code></pre>

    <p><strong>Example: state tracking</strong></p>
<pre class="language-javascript"><code class="language-javascript">let isLoading = false;
let cartItemCount = 0;
let currentPageNumber = 1;
let lastSearchQuery = "";</code></pre>

    <p><strong>Example: event handlers</strong></p>
<pre class="language-javascript"><code class="language-javascript">const handleFormSubmit = (event) => {};
const handleInputChange = (event) => {};
const handleButtonClick = (event) => {};
const handleWindowResize = () => {};</code></pre>
  `,

  /* 3.2 Connects to */
  'topics-0-11-3-2': `
    <ul>
      <li><strong>Naming variables</strong> → the parent topic; camelCase is the default style</li>
      <li><strong>PascalCase</strong> → similar style for classes, starts uppercase</li>
      <li><strong>UPPER_CASE</strong> → alternative for constants/config</li>
      <li><strong>Functions</strong> → also use camelCase</li>
      <li><strong>Object properties</strong> → also use camelCase</li>
      <li><strong>Linters</strong> → tools that enforce naming conventions automatically</li>
    </ul>
  `,

  /* 3.3 See also */
  'topics-0-11-3-3': `
    <ul>
      <li>Naming variables</li>
      <li>PascalCase</li>
      <li>UPPER_CASE constants</li>
      <li>snake_case (other languages)</li>
      <li>kebab-case (CSS, URLs)</li>
      <li>Acronym handling in identifiers</li>
      <li>ESLint naming rules</li>
    </ul>
  `,


  /* ===== Sub-lesson: 3.1 Variables → meaningful names =====
     Path: topics-0-12-{chunkIndex}-{pieceIndex}
  */

  /* --- Chunk 0: What & How --- */

  /* 0.0 What it is */
  'topics-0-12-0-0': `
    <p>A meaningful name is one that describes what the variable holds, clearly enough that someone reading your code understands without having to dig.</p>
    <p>The opposite is a vague name like <code>x</code>, <code>data</code>, <code>thing</code>, or <code>temp</code> — names that work for JavaScript but tell humans nothing.</p>
  `,

  /* 0.1 Syntax */
  'topics-0-12-0-1': `
<pre class="language-javascript"><code class="language-javascript">// Vague names — work, but unclear
const x = 50;
const data = response.json();
const arr = ["a", "b", "c"];

// Meaningful names — same code, way more readable
const userAge = 50;
const userProfile = response.json();
const colorOptions = ["a", "b", "c"];</code></pre>
  `,

  /* 0.2 Anatomy / Breakdown */
  'topics-0-12-0-2': `
<pre class="language-javascript"><code class="language-javascript">const totalCartPrice = 49.99;

// total       → describes WHAT (a sum, not a single price)
// Cart        → describes WHERE it's from (the cart, not the wishlist)
// Price       → describes the unit (a price, not a count)
// = 49.99     → the actual value

// The name does the work of explaining. The reader doesn't have
// to look at surrounding code to figure out what 49.99 represents.</code></pre>
  `,

  /* 0.3 Syntax Details That Matter */
  'topics-0-12-0-3': `
    <p>A meaningful name is specific enough to be useful, short enough to be readable. There's a sweet spot:</p>
<pre class="language-javascript"><code class="language-javascript">// Too vague
const u = userObj;
const data = userObj;

// Just right
const user = userObj;
const userProfile = userObj;

// Too verbose
const userObjectFromAPIWithFullProfileData = userObj;</code></pre>

    <p>Don't include the type in the name unless it really matters:</p>
<pre class="language-javascript"><code class="language-javascript">// Redundant — the type is obvious from how it's used
const userArray = ["Os", "Sam"];
const nameString = "Os";

// Cleaner
const users = ["Os", "Sam"];
const name = "Os";</code></pre>

    <p>For booleans, lead with a question word so the name reads as true/false:</p>
<pre class="language-javascript"><code class="language-javascript">// Hard to tell what's true/false
const loggedIn = true;
const menu = false;

// Reads naturally as a yes/no
const isLoggedIn = true;
const hasUnreadMessages = false;
const canEdit = true;
const shouldShowAlert = false;</code></pre>
  `,

  /* --- Chunk 1: Why & When --- */

  /* 1.0 What problem it solves */
  'topics-0-12-1-0': `
    <p>You'll read your own code days, weeks, or months after writing it. By then you'll have forgotten what every variable was for. Other developers will read it without ever having seen it before. Vague names force everyone — including future you — to play detective.</p>
    <p>A meaningful name puts the answer right next to the question. You read the name and immediately know what's there.</p>
  `,

  /* 1.1 Why use it */
  'topics-0-12-1-1': `
    <p>The cost of a meaningful name is a few extra characters. The cost of a vague name is everyone reading your code having to trace it back through five other lines to figure out what's happening.</p>
<pre class="language-javascript"><code class="language-javascript">// What does this do? You'd have to read the rest of the file to find out.
const t = p * 0.08;
const g = p + t;

// Now it's obvious without context.
const tax = price * 0.08;
const grandTotal = price + tax;</code></pre>
    <p>Code is read way more than it's written. Optimize for the read.</p>
  `,

  /* 1.2 Where you use it */
  'topics-0-12-1-2': `
<pre class="language-javascript"><code class="language-javascript">// Anywhere a value has a clear purpose
const submitButton = document.querySelector(".submit");
const userEmail = emailInput.value;
const isFormValid = checkForm();
const totalPrice = subtotal + tax;
const cartItems = await fetchCart();

// Even short-lived loop variables can be meaningful
for (const product of products) {     // not "for (const p of products)"
  console.log(product.name);
}

cartItems.forEach((item) => {          // not "forEach((i) =>"
  console.log(item.price);
});</code></pre>
  `,

  /* 1.3 Plain English explanation */
  'topics-0-12-1-3': `
    <p>If a stranger reads one line of your code with no context, can they tell what the variable holds? If yes, the name is meaningful. If no, it's vague.</p>
    <p>A meaningful name is a one-word documentation. The variable describes itself.</p>
  `,

  /* 1.4 Mental model */
  'topics-0-12-1-4': `
    <p>Think of variable names as labels on shipping boxes. If you label a box "stuff," you'll have no idea what's inside without opening it. If you label it "winter coats," you know immediately.</p>
<pre class="language-javascript"><code class="language-javascript">const stuff = users.filter(u => u.age > 18);   // mystery box
const adultUsers = users.filter(u => u.age > 18);  // labeled box

// Same code. The second one tells you what's inside without making
// you look at the filter logic.</code></pre>
  `,

  /* 1.5 Step-by-step walkthrough */
  'topics-0-12-1-5': `
<pre class="language-javascript"><code class="language-javascript">// How to pick a meaningful name:

// Step 1: Ask "what does this hold?"
// Answer: a list of users who haven't logged in for 30 days.

// Step 2: Strip filler words.
// → "users who haven't logged in for 30 days"
// → "inactive users"

// Step 3: Apply camelCase.
// → "inactiveUsers"

const inactiveUsers = users.filter(u => daysSinceLogin(u) > 30);

// Now anyone reading this knows exactly what the variable holds.</code></pre>
  `,

  /* --- Chunk 2: The Click --- */

  /* 2.0 Debugging clue */
  'topics-0-12-2-0': `
    <p>If you're debugging unfamiliar code and the variable names are vague, you're going to have a bad time. The first thing experienced developers do when they take over a confusing codebase is rename variables for clarity.</p>
<pre class="language-javascript"><code class="language-javascript">// Before — what's d? what's r? what's i?
function calc(d, r, i) {
  return d * r * i;
}

// After — same logic, instantly readable
function calculateTotal(daysRented, dailyRate, insuranceRate) {
  return daysRented * dailyRate * insuranceRate;
}</code></pre>
    <p>If you can't easily say what a variable holds, that's a sign the name needs to change.</p>
  `,

  /* 2.1 The part that makes it click */
  'topics-0-12-2-1': `
    <p>A meaningful name is the cheapest documentation you'll ever write.</p>
    <p>The few extra characters you spend naming things well save hours of confusion later — for you and for anyone else who reads your code.</p>
  `,

  /* 2.2 Common confusions */
  'topics-0-12-2-2': `
    <p><strong>Confusion: short names are "cleaner"</strong></p>
<pre class="language-javascript"><code class="language-javascript">// "Clean" but unclear
const u = await getUser();
const p = u.profile;
const e = p.email;

// Slightly longer, way more useful
const user = await getUser();
const profile = user.profile;
const email = profile.email;</code></pre>
    <p>Short doesn't mean clean. Clear means clean.</p>

    <p><strong>Confusion: when single letters are OK</strong></p>
<pre class="language-javascript"><code class="language-javascript">// Single letters are fine for tiny scopes:
for (let i = 0; i < 10; i++) {        // i = index, lives 1-2 lines
  console.log(i);
}

users.forEach(u => console.log(u));    // u = user, lives 1 line — but...
users.forEach(user => console.log(user));   // ...still better

// Single letters get bad as scope grows or logic gets complex.</code></pre>

    <p><strong>Confusion: data, info, item — vague defaults</strong></p>
<pre class="language-javascript"><code class="language-javascript">// "data" is the universal vague name — it tells you nothing
const data = await fetch(url);
const data2 = data.json();

// What kind of data?
const response = await fetch(url);
const userList = await response.json();</code></pre>
    <p>If the name could apply to almost anything, it's not meaningful.</p>
  `,

  /* 2.3 Common mistakes */
  'topics-0-12-2-3': `
<pre class="language-javascript"><code class="language-javascript">const x = totalPrice * taxRate;
// vague: x could be anything
// fix: name it for what it is
const tax = totalPrice * taxRate;</code></pre>

<pre class="language-javascript"><code class="language-javascript">const data = await fetch(url);
// vague: every API response is "data"
// fix: name it for what it actually contains
const userResponse = await fetch(url);</code></pre>

<pre class="language-javascript"><code class="language-javascript">const arr = users.filter(u => u.active);
// vague: it's an array, sure, but of what?
// fix:
const activeUsers = users.filter(u => u.active);</code></pre>

<pre class="language-javascript"><code class="language-javascript">const flag = true;
// vague: flag for what?
// fix: lead with a question word
const isFormValid = true;</code></pre>

<pre class="language-javascript"><code class="language-javascript">const userObjectWithFullProfileDataFromAPI = res.json();
// too verbose: makes lines hard to read
// fix: shorter, still meaningful
const userProfile = res.json();</code></pre>

<pre class="language-javascript"><code class="language-javascript">const num = 5;
// vague: what is the number?
// fix: be specific
const itemCount = 5;
const cartTotal = 5;</code></pre>
  `,

  /* --- Chunk 3: In Practice --- */

  /* 3.0 Tiny examples */
  'topics-0-12-3-0': `
<pre class="language-javascript"><code class="language-javascript">// Specific over generic
const userAge = 25;              // not just "age"
const productPrice = 19.99;       // not just "price"
const cartItemCount = 5;          // not just "count"

// Booleans as questions
const isLoggedIn = true;
const hasUnreadMessages = false;
const canEdit = true;
const shouldRedirect = true;

// Functions as commands
const calculateTax = (price) => price * 0.08;
const fetchUserData = async () => {};
const handleSubmit = (event) => {};

// Loops with named items
for (const product of products) {
  console.log(product.name);
}</code></pre>
  `,

  /* 3.1 Real website uses */
  'topics-0-12-3-1': `
    <p><strong>Example: shopping cart logic</strong></p>
<pre class="language-javascript"><code class="language-javascript">const cartItems = await fetchCart();
const subtotal = cartItems.reduce((sum, item) => sum + item.price, 0);
const taxAmount = subtotal * TAX_RATE;
const shippingCost = calculateShipping(cartItems);
const grandTotal = subtotal + taxAmount + shippingCost;</code></pre>

    <p><strong>Example: form validation</strong></p>
<pre class="language-javascript"><code class="language-javascript">const enteredEmail = emailInput.value.trim();
const isEmailValid = /^[^@]+@[^@]+\\.[^@]+$/.test(enteredEmail);
const enteredPassword = passwordInput.value;
const isPasswordLongEnough = enteredPassword.length >= 8;
const canSubmit = isEmailValid && isPasswordLongEnough;</code></pre>

    <p><strong>Example: user-related variables</strong></p>
<pre class="language-javascript"><code class="language-javascript">const currentUser = await getLoggedInUser();
const isAdmin = currentUser.role === "admin";
const recentlyLoggedIn = currentUser.lastLogin > Date.now() - 86400000;
const hasCompletedProfile = currentUser.profile.completed;</code></pre>

    <p><strong>Example: DOM elements named for what they are</strong></p>
<pre class="language-javascript"><code class="language-javascript">const navMenu = document.querySelector(".nav-menu");
const searchBar = document.querySelector(".search-bar");
const checkoutButton = document.querySelector(".checkout-btn");
const errorBanner = document.querySelector(".error-banner");</code></pre>
  `,

  /* 3.2 Connects to */
  'topics-0-12-3-2': `
    <ul>
      <li><strong>Naming variables</strong> → meaningful names are part of good naming overall</li>
      <li><strong>camelCase</strong> → the casing style applied to those names</li>
      <li><strong>Boolean naming patterns</strong> → is/has/can/should for true-or-false variables</li>
      <li><strong>Functions</strong> → function names should be meaningful too (verbs)</li>
      <li><strong>Code readability</strong> → meaningful names are the #1 readability tool</li>
      <li><strong>Refactoring</strong> → renaming for clarity is the most common kind</li>
    </ul>
  `,

  /* 3.3 See also */
  'topics-0-12-3-3': `
    <ul>
      <li>Naming variables</li>
      <li>Boolean naming (is/has/can/should)</li>
      <li>Function naming (verbs)</li>
      <li>Self-documenting code</li>
      <li>Magic numbers and named constants</li>
      <li>Code review and renaming</li>
    </ul>
  `,


  /* ===== Sub-lesson: 3.1 Variables → storing strings =====
     Path: topics-0-13-{chunkIndex}-{pieceIndex}
  */

  /* --- Chunk 0: What & How --- */

  /* 0.0 What it is */
  'topics-0-13-0-0': `
    <p>Storing a string means putting text inside a variable. The text gets wrapped in quotes, the variable holds it, and you can use the variable's name anywhere you'd otherwise have to retype that text.</p>
    <p>This is the most common kind of variable storage you'll do. Names, messages, labels, URLs, CSS class names — all strings stored in variables.</p>
  `,

  /* 0.1 Syntax */
  'topics-0-13-0-1': `
<pre class="language-javascript"><code class="language-javascript">const userName = "Os";              // double quotes
const greeting = 'hello';            // single quotes
const message = \`hi there\`;          // backticks (template literal)

let status = "loading";              // let if it'll change later</code></pre>
  `,

  /* 0.2 Anatomy / Breakdown */
  'topics-0-13-0-2': `
<pre class="language-javascript"><code class="language-javascript">const userName = "Os";

// const     → keyword (creates the variable)
// userName  → variable name
// =         → assignment
// "         → opening quote (marks start of the string)
// Os        → the actual text
// "         → closing quote (marks end of the string)
// ;         → ends the statement

// The quotes are NOT part of the value — they're just markers
// that tell JS "everything in here is text"</code></pre>
  `,

  /* 0.3 Syntax Details That Matter */
  'topics-0-13-0-3': `
    <p>Quotes must match — opening and closing must be the same type:</p>
<pre class="language-javascript"><code class="language-javascript">const a = "Os";       // double-double — works
const b = 'Os';       // single-single — works
const c = "Os';       // wrong: SyntaxError — mixed quote types
const d = "Os;        // wrong: SyntaxError — missing closing quote</code></pre>

    <p>Pick the quote style that doesn't conflict with what's inside:</p>
<pre class="language-javascript"><code class="language-javascript">const greeting = "Hello, I'm Os";        // double quotes wrap an apostrophe
const sentence = 'She said "hi"';         // single quotes wrap double quotes inside</code></pre>

    <p>Backticks (template literals) let you embed variables with <code>\${}</code>:</p>
<pre class="language-javascript"><code class="language-javascript">const userName = "Os";
const greeting = \`Hello, \${userName}\`;
console.log(greeting);                    // "Hello, Os"

// \${} only works inside backticks — not single or double quotes
const wrong = "Hello, \${userName}";
console.log(wrong);                       // literal: "Hello, \${userName}"</code></pre>

    <p>Empty strings are valid:</p>
<pre class="language-javascript"><code class="language-javascript">let userInput = "";       // empty string — useful as a starting value
console.log(userInput);   // "" (nothing visible, but it IS a string)
console.log(typeof userInput);  // "string"</code></pre>
  `,

  /* --- Chunk 1: Why & When --- */

  /* 1.0 What problem it solves */
  'topics-0-13-1-0': `
    <p>Code constantly works with text — names, messages, labels, content the user typed, paths to files, URLs to APIs. Without storing strings in variables, you'd retype the same text everywhere it's used.</p>
    <p>Storing the text once and using the variable's name keeps your code shorter and lets you change the text in one spot if it ever needs to update.</p>
  `,

  /* 1.1 Why use it */
  'topics-0-13-1-1': `
    <p>Whenever you have text that's used more than once, or text with a meaningful name, store it in a variable.</p>
<pre class="language-javascript"><code class="language-javascript">// Without a variable
console.log("Welcome to the app, " + "Os");
heading.textContent = "Welcome to the app, " + "Os";

// With a variable — write the text once
const welcomeMessage = "Welcome to the app";
const userName = "Os";
console.log(welcomeMessage + ", " + userName);
heading.textContent = welcomeMessage + ", " + userName;</code></pre>
    <p>Updating the welcome message later is now a one-line change instead of a hunt-and-replace through your whole file.</p>
  `,

  /* 1.2 Where you use it */
  'topics-0-13-1-2': `
<pre class="language-javascript"><code class="language-javascript">// Names and labels
const userName = "Os";
const buttonLabel = "Submit";
const errorMessage = "Email is required";

// URLs and paths
const apiUrl = "https://api.example.com/users";
const imagePath = "/images/logo.png";

// CSS class names
const activeClass = "is-active";
const hiddenClass = "hidden";

// User input
const userEmail = emailInput.value;
const searchQuery = searchInput.value.trim();

// Status flags as text
let appStatus = "loading";       // later: "ready" or "error"</code></pre>
  `,

  /* 1.3 Plain English explanation */
  'topics-0-13-1-3': `
    <p>Storing a string is putting words inside a labeled box. The label is the variable name. The words go inside, wrapped in quotes so JavaScript knows they're text and not code.</p>
    <p>You can then refer back to the box by its label any time you need that text. Same as any other variable — only the contents are text.</p>
  `,

  /* 1.4 Mental model */
  'topics-0-13-1-4': `
    <p>The variable holds the text. The quotes are like wrappers — they aren't part of what's stored.</p>
<pre class="language-javascript"><code class="language-javascript">const userName = "Os";

// userName  →  Os    (the actual stored value, no quotes)

console.log(userName);     // logs: Os
console.log("userName");   // logs: userName (literal text, not the variable)</code></pre>
    <p>When you write the variable name with no quotes, JavaScript looks up its value. When you write quotes, JavaScript treats whatever's inside as literal text.</p>
  `,

  /* 1.5 Step-by-step walkthrough */
  'topics-0-13-1-5': `
<pre class="language-javascript"><code class="language-javascript">const userName = "Os";
const greeting = \`Hello, \${userName}\`;
console.log(greeting);

// JavaScript is thinking:
// Line 1: see const → declare userName.
//         Right side has " " → this is a string.
//         Strip the quotes, store the text "Os" inside userName.
//
// Line 2: declare greeting.
//         Right side has \` \` → template literal.
//         Find \${userName} → look up userName → "Os".
//         Replace \${userName} with "Os" → "Hello, Os".
//         Store "Hello, Os" inside greeting.
//
// Line 3: look up greeting → "Hello, Os" → log it.</code></pre>
  `,

  /* --- Chunk 2: The Click --- */

  /* 2.0 Debugging clue */
  'topics-0-13-2-0': `
    <p>If text isn't behaving like text, check the quotes:</p>
<pre class="language-javascript"><code class="language-javascript">const userName = Os;
// wrong: ReferenceError — without quotes, JS thinks Os is a variable name

const userName = "Os";
// works: quotes mark this as a string</code></pre>

    <p>If a string isn't combining the way you expect, watch out for the difference between text and variables:</p>
<pre class="language-javascript"><code class="language-javascript">const userName = "Os";
console.log("userName");   // "userName" — literal text, not what you wanted
console.log(userName);     // "Os" — the actual value</code></pre>

    <p>If template literals aren't substituting the variable, check that you used backticks (not regular quotes):</p>
<pre class="language-javascript"><code class="language-javascript">const userName = "Os";
console.log("Hello, \${userName}");    // "Hello, \${userName}" — wrong quote type
console.log(\`Hello, \${userName}\`);    // "Hello, Os" — backticks
</code></pre>
  `,

  /* 2.1 The part that makes it click */
  'topics-0-13-2-1': `
    <p>Quotes turn text into a value. Without quotes, JavaScript tries to treat the text as code.</p>
    <p>Once stored, the variable holds the text without the quotes. Use the variable name (no quotes) to read the value back.</p>
  `,

  /* 2.2 Common confusions */
  'topics-0-13-2-2': `
    <p><strong>Confusion: variable name vs string text</strong></p>
<pre class="language-javascript"><code class="language-javascript">const userName = "Os";

console.log(userName);     // "Os" — looks up the variable
console.log("userName");   // "userName" — literal text</code></pre>

    <p><strong>Confusion: numbers in quotes are strings, not numbers</strong></p>
<pre class="language-javascript"><code class="language-javascript">const a = "5";        // string "5" — can't do math with it normally
const b = 5;          // number 5 — can do math

console.log(a + 1);   // "51" — string concatenation, not addition
console.log(b + 1);   // 6 — number addition</code></pre>

    <p><strong>Confusion: which quote type to use</strong></p>
<pre class="language-javascript"><code class="language-javascript">// All three create a string — pick the one that fits the situation:
const a = "hello";    // double — most common in many style guides
const b = 'hello';    // single — common in others
const c = \`hello\`;    // backticks — only when you need \${} or multi-line

// All three are strings. Be consistent within a project.</code></pre>
  `,

  /* 2.3 Common mistakes */
  'topics-0-13-2-3': `
<pre class="language-javascript"><code class="language-javascript">const userName = Os;
// wrong: forgot quotes — JS thinks Os is a variable
// fix:
const userName = "Os";</code></pre>

<pre class="language-javascript"><code class="language-javascript">const greeting = "Hello, \${userName}";
// wrong: \${} only works inside backticks
// fix:
const greeting = \`Hello, \${userName}\`;</code></pre>

<pre class="language-javascript"><code class="language-javascript">const sentence = "She said "hi"";
// wrong: quote conflict — inner quotes close the string early
// fix: use single quotes outside, or escape:
const sentence = 'She said "hi"';
const sentence2 = "She said \\"hi\\"";</code></pre>

<pre class="language-javascript"><code class="language-javascript">const a = "5";
const b = "10";
console.log(a + b);    // "510" — string concat, not 15
// fix: convert to number if you want math
console.log(Number(a) + Number(b));   // 15</code></pre>

<pre class="language-javascript"><code class="language-javascript">const message = 'It's a test';
// wrong: apostrophe ends the single-quoted string early
// fix: use double quotes or escape
const message = "It's a test";
const message2 = 'It\\'s a test';</code></pre>
  `,

  /* --- Chunk 3: In Practice --- */

  /* 3.0 Tiny examples */
  'topics-0-13-3-0': `
<pre class="language-javascript"><code class="language-javascript">// Basic storage
const greeting = "Hello";
console.log(greeting);             // "Hello"

// Combining strings
const firstName = "Os";
const lastName = "Smith";
const fullName = firstName + " " + lastName;
console.log(fullName);             // "Os Smith"

// Template literal
const userName = "Os";
const message = \`Welcome, \${userName}!\`;
console.log(message);              // "Welcome, Os!"

// Empty string as starting point
let status = "";
status = "ready";
console.log(status);               // "ready"

// String length
const name = "Os";
console.log(name.length);          // 2 (number of characters)</code></pre>
  `,

  /* 3.1 Real website uses */
  'topics-0-13-3-1': `
    <p><strong>Example: storing user input</strong></p>
<pre class="language-javascript"><code class="language-javascript">const userEmail = emailInput.value.trim();
const userPassword = passwordInput.value;

if (userEmail.length === 0) {
  showError("Email is required");
}</code></pre>

    <p><strong>Example: storing UI text labels</strong></p>
<pre class="language-javascript"><code class="language-javascript">const SUBMIT_LABEL = "Submit";
const LOADING_LABEL = "Submitting...";
const SUCCESS_LABEL = "Submitted!";

submitBtn.textContent = LOADING_LABEL;</code></pre>

    <p><strong>Example: storing CSS class names</strong></p>
<pre class="language-javascript"><code class="language-javascript">const ACTIVE_CLASS = "is-active";
const HIDDEN_CLASS = "is-hidden";

card.classList.add(ACTIVE_CLASS);
modal.classList.remove(HIDDEN_CLASS);</code></pre>

    <p><strong>Example: storing API URLs</strong></p>
<pre class="language-javascript"><code class="language-javascript">const API_BASE = "https://api.example.com";
const USERS_ENDPOINT = \`\${API_BASE}/users\`;
const PRODUCTS_ENDPOINT = \`\${API_BASE}/products\`;

const response = await fetch(USERS_ENDPOINT);</code></pre>
  `,

  /* 3.2 Connects to */
  'topics-0-13-3-2': `
    <ul>
      <li><strong>Strings</strong> → the topic of strings as a data type (much deeper coverage)</li>
      <li><strong>Template literals</strong> → backtick strings with <code>\${}</code> embedding</li>
      <li><strong>Forms</strong> → user input always comes back as a string</li>
      <li><strong>DOM</strong> → text on the page is set with strings (<code>.textContent</code>)</li>
      <li><strong>String methods</strong> → <code>.trim()</code>, <code>.toUpperCase()</code>, etc.</li>
      <li><strong>Concatenation</strong> → joining strings with <code>+</code> or template literals</li>
    </ul>
  `,

  /* 3.3 See also */
  'topics-0-13-3-3': `
    <ul>
      <li>Strings (full topic)</li>
      <li>Template literals</li>
      <li>String methods</li>
      <li>String concatenation</li>
      <li>Escape characters (<code>\\n</code>, <code>\\t</code>, <code>\\"</code>)</li>
      <li>Storing numbers</li>
      <li>Storing booleans</li>
    </ul>
  `,


  /* ===== Sub-lesson: 3.1 Variables → storing numbers =====
     Path: topics-0-14-{chunkIndex}-{pieceIndex}
  */

  /* --- Chunk 0: What & How --- */

  /* 0.0 What it is */
  'topics-0-14-0-0': `
    <p>Storing a number means putting a numeric value into a variable. No quotes — just the digits.</p>
    <p>Whole numbers, decimals, negatives — all numbers. JavaScript doesn't distinguish between integers and decimals like some languages do; everything is just "number."</p>
  `,

  /* 0.1 Syntax */
  'topics-0-14-0-1': `
<pre class="language-javascript"><code class="language-javascript">const age = 25;             // whole number
const price = 19.99;        // decimal
const temperature = -5;     // negative
const total = 0;            // zero is a number too

let count = 0;              // let if it'll change later</code></pre>
  `,

  /* 0.2 Anatomy / Breakdown */
  'topics-0-14-0-2': `
<pre class="language-javascript"><code class="language-javascript">const price = 19.99;

// const   → keyword (creates the variable)
// price   → variable name
// =       → assignment
// 19.99   → the number value (no quotes!)
// ;       → ends the statement

// No quotes around 19.99 — that's how JS knows it's a number, not a string.</code></pre>
  `,

  /* 0.3 Syntax Details That Matter */
  'topics-0-14-0-3': `
    <p>No quotes — that's the key difference from strings:</p>
<pre class="language-javascript"><code class="language-javascript">const age = 25;       // number
const age = "25";     // string — looks the same, behaves very differently</code></pre>

    <p>Decimals use a period, never a comma:</p>
<pre class="language-javascript"><code class="language-javascript">const price = 19.99;   // correct
const price = 19,99;   // wrong: comma creates two values, not a decimal</code></pre>

    <p>You can use underscores as visual separators in big numbers (ignored by JS):</p>
<pre class="language-javascript"><code class="language-javascript">const million = 1_000_000;     // 1000000 — easier to read
const distance = 384_400;       // 384400</code></pre>

    <p>Numbers can be the result of math:</p>
<pre class="language-javascript"><code class="language-javascript">const total = 10 + 5;          // right side runs first → 15 stored
const tax = price * 0.08;      // calculation, then stored
const remaining = 100 - used;  // mixed literal and variable</code></pre>

    <p>JavaScript has special number-like values you'll occasionally see:</p>
<pre class="language-javascript"><code class="language-javascript">const inf = Infinity;          // mathematical infinity
const tiny = -Infinity;        // negative infinity
const broken = NaN;             // "Not a Number" — result of bad math like 0/0</code></pre>
  `,

  /* --- Chunk 1: Why & When --- */

  /* 1.0 What problem it solves */
  'topics-0-14-1-0': `
    <p>JavaScript needs a way to represent quantities you can do math with — counts, prices, ages, scores, positions, times. Without numbers, you couldn't add anything up, compare amounts, or track anything that grows or shrinks.</p>
    <p>Storing a number in a variable lets you do calculations once, save the result, and reuse it.</p>
  `,

  /* 1.1 Why use it */
  'topics-0-14-1-1': `
    <p>Use a number any time the value represents an amount, a count, or a position — anything you might do math with.</p>
<pre class="language-javascript"><code class="language-javascript">// Counts
const cartItemCount = 3;
let unreadMessages = 12;

// Prices
const productPrice = 29.99;
const shippingCost = 5.99;

// Positions and indexes
let currentSlide = 0;
const firstIndex = 0;

// Times
const timeoutMs = 5000;
const dayInMs = 86_400_000;</code></pre>
    <p>If you'll only display it as text and never compute anything with it (like a phone number or zip code), strings might be a better choice — leading zeros disappear in numbers.</p>
  `,

  /* 1.2 Where you use it */
  'topics-0-14-1-2': `
<pre class="language-javascript"><code class="language-javascript">// Calculation results
const subtotal = quantity * pricePerItem;
const grandTotal = subtotal + tax;

// Counters that go up
let clicks = 0;
clicks = clicks + 1;

// Configuration
const MAX_RETRIES = 3;
const TIMEOUT_MS = 5000;

// Index/position tracking
let currentPage = 1;

// Working with form input (after converting from string)
const userAge = Number(ageInput.value);

// Math operations
const angle = 90;
const radians = angle * (Math.PI / 180);</code></pre>
  `,

  /* 1.3 Plain English explanation */
  'topics-0-14-1-3': `
    <p>Storing a number is the same as storing anything else — just put it in the variable. The only thing that makes it a number instead of a string is the absence of quotes.</p>
    <p>Once stored, the variable holds the number, and you can do math with it the same way you would with a literal number.</p>
  `,

  /* 1.4 Mental model */
  'topics-0-14-1-4': `
    <p>Numbers are values you can do math with. Strings are values you treat as text. The same digits can be either, depending on whether they're wrapped in quotes:</p>
<pre class="language-javascript"><code class="language-javascript">const a = 5;
const b = "5";

a + 1;       // 6   (number addition)
b + 1;       // "51"  (string concatenation — JS converts 1 to "1" and joins)

a + a;       // 10
b + b;       // "55"</code></pre>
    <p>Numbers behave like math. Strings behave like text. Don't mix them up.</p>
  `,

  /* 1.5 Step-by-step walkthrough */
  'topics-0-14-1-5': `
<pre class="language-javascript"><code class="language-javascript">const price = 19.99;
const tax = price * 0.08;
const total = price + tax;
console.log(total);

// JavaScript is thinking:
// Line 1: declare price. Right side is 19.99 (a number literal).
//         Store the number 19.99 in price.
// Line 2: declare tax. Right side: look up price (19.99), multiply by 0.08.
//         Result: 1.5992. Store in tax.
// Line 3: declare total. Right side: look up price (19.99), look up tax (1.5992).
//         Add them: 21.5892. Store in total.
// Line 4: look up total → 21.5892 → log it.</code></pre>
  `,

  /* --- Chunk 2: The Click --- */

  /* 2.0 Debugging clue */
  'topics-0-14-2-0': `
    <p>If math gives you weird results, the most common cause is a string sneaking in where you expected a number:</p>
<pre class="language-javascript"><code class="language-javascript">const price = "10";       // string, not number!
const total = price + 5;
console.log(total);        // "105" — JS concatenated instead of adding

// fix: convert to number first
const price = Number("10");
const total = price + 5;
console.log(total);        // 15</code></pre>

    <p>Form inputs are always strings, even if they hold numbers:</p>
<pre class="language-javascript"><code class="language-javascript">const userAge = ageInput.value;
console.log(userAge + 1);     // "251" if user typed "25" — string concat

// fix: convert before doing math
const userAge = Number(ageInput.value);
console.log(userAge + 1);     // 26</code></pre>

    <p>If you see <code>NaN</code> ("Not a Number"), one of the values in your math wasn't a valid number:</p>
<pre class="language-javascript"><code class="language-javascript">const total = "abc" * 2;
console.log(total);            // NaN — can't multiply text by a number

const broken = undefined + 5;
console.log(broken);           // NaN — undefined isn't a number</code></pre>
  `,

  /* 2.1 The part that makes it click */
  'topics-0-14-2-1': `
    <p>No quotes = number. Quotes = string. JavaScript will not figure it out for you.</p>
    <p>If you need to do math with a value that came in as a string (like form input), convert it first with <code>Number()</code>.</p>
  `,

  /* 2.2 Common confusions */
  'topics-0-14-2-2': `
    <p><strong>Confusion: number vs string number</strong></p>
<pre class="language-javascript"><code class="language-javascript">const a = 25;     // number — can do math
const b = "25";   // string that looks like a number — careful

a + 1;            // 26
b + 1;            // "251"  (string concat)
a * 2;            // 50
b * 2;            // 50  (JS coerces b to number for *, but not for +)</code></pre>

    <p><strong>Confusion: form input is always a string</strong></p>
<pre class="language-javascript"><code class="language-javascript">// Even &lt;input type="number"&gt; returns a string
const userAge = ageInput.value;       // "25" (string)
const userAge = Number(ageInput.value);  // 25 (number)</code></pre>

    <p><strong>Confusion: floating-point math is sometimes weird</strong></p>
<pre class="language-javascript"><code class="language-javascript">console.log(0.1 + 0.2);    // 0.30000000000000004 — not 0.3!

// This is a quirk of how computers store decimals.
// For money or anything that needs precision, work with cents (integers):
const price = 1999;          // $19.99 stored as cents
console.log(price + 50);     // 2049 cents = $20.49</code></pre>
  `,

  /* 2.3 Common mistakes */
  'topics-0-14-2-3': `
<pre class="language-javascript"><code class="language-javascript">const age = "25";
console.log(age + 1);     // "251"
// fix: store as a number, not a string
const age = 25;</code></pre>

<pre class="language-javascript"><code class="language-javascript">const price = 19,99;
// wrong: comma creates a different expression in JS
// fix: use a period for decimals
const price = 19.99;</code></pre>

<pre class="language-javascript"><code class="language-javascript">const userAge = ageInput.value;
console.log(userAge + 5);  // string concat, not math
// fix: convert from form input
const userAge = Number(ageInput.value);</code></pre>

<pre class="language-javascript"><code class="language-javascript">const total = 0.1 + 0.2;
if (total === 0.3) {}     // wrong: 0.1 + 0.2 isn't exactly 0.3 in JS
// fix: compare with a tolerance, or use integers (cents)</code></pre>

<pre class="language-javascript"><code class="language-javascript">const phone = 5551234567;
const zip = 02134;        // wrong: leading 0 makes JS think it's octal
// fix: store as strings if you don't need to do math
const phone = "555-123-4567";
const zip = "02134";</code></pre>
  `,

  /* --- Chunk 3: In Practice --- */

  /* 3.0 Tiny examples */
  'topics-0-14-3-0': `
<pre class="language-javascript"><code class="language-javascript">// Whole number
const age = 25;
console.log(age);          // 25

// Decimal
const price = 19.99;
console.log(price * 2);    // 39.98

// Negative
const temperature = -5;
console.log(temperature);  // -5

// Math result
const sum = 10 + 20 + 30;
console.log(sum);          // 60

// Counter that updates
let score = 0;
score = score + 10;        // 10
score = score + 5;         // 15
console.log(score);        // 15

// Underscores for readability
const million = 1_000_000;
console.log(million);      // 1000000</code></pre>
  `,

  /* 3.1 Real website uses */
  'topics-0-14-3-1': `
    <p><strong>Example: shopping cart math</strong></p>
<pre class="language-javascript"><code class="language-javascript">const itemPrice = 29.99;
const quantity = 3;
const subtotal = itemPrice * quantity;
const tax = subtotal * 0.08;
const total = subtotal + tax;</code></pre>

    <p><strong>Example: tracking a counter</strong></p>
<pre class="language-javascript"><code class="language-javascript">let cartCount = 0;

addToCartBtn.addEventListener("click", () => {
  cartCount = cartCount + 1;
  cartBadge.textContent = cartCount;
});</code></pre>

    <p><strong>Example: configuration constants</strong></p>
<pre class="language-javascript"><code class="language-javascript">const MAX_LOGIN_ATTEMPTS = 3;
const SESSION_TIMEOUT_MS = 1_800_000;   // 30 min in ms
const TAX_RATE = 0.08;</code></pre>

    <p><strong>Example: converting form input to do math</strong></p>
<pre class="language-javascript"><code class="language-javascript">const enteredAge = Number(ageInput.value);

if (enteredAge < 18) {
  showError("Must be 18 or older");
}</code></pre>
  `,

  /* 3.2 Connects to */
  'topics-0-14-3-2': `
    <ul>
      <li><strong>Numbers</strong> → the topic of numbers as a data type (deeper coverage)</li>
      <li><strong>Math operators</strong> → <code>+</code>, <code>-</code>, <code>*</code>, <code>/</code>, <code>%</code></li>
      <li><strong>Number()</strong> → convert strings to numbers</li>
      <li><strong>Forms</strong> → input values come in as strings, often need conversion</li>
      <li><strong>NaN</strong> → what you get from invalid math</li>
      <li><strong>Math object</strong> → <code>Math.round</code>, <code>Math.floor</code>, <code>Math.random</code></li>
    </ul>
  `,

  /* 3.3 See also */
  'topics-0-14-3-3': `
    <ul>
      <li>Numbers (full topic)</li>
      <li>Math operators</li>
      <li><code>Number()</code> conversion</li>
      <li><code>parseInt()</code> and <code>parseFloat()</code></li>
      <li><code>NaN</code> and <code>Infinity</code></li>
      <li>Floating-point precision</li>
      <li>Storing strings</li>
      <li>Storing booleans</li>
    </ul>
  `,


  /* ===== Sub-lesson: 3.1 Variables → storing booleans =====
     Path: topics-0-15-{chunkIndex}-{pieceIndex}
  */

  /* --- Chunk 0: What & How --- */

  /* 0.0 What it is */
  'topics-0-15-0-0': `
    <p>Storing a boolean means putting either <code>true</code> or <code>false</code> into a variable. Just those two values — nothing else is a boolean.</p>
    <p>Booleans answer yes/no questions. Is the user logged in? Is the menu open? Is the form valid? Each one's answer is a boolean stored somewhere in your code.</p>
  `,

  /* 0.1 Syntax */
  'topics-0-15-0-1': `
<pre class="language-javascript"><code class="language-javascript">const isLoggedIn = true;
const isMenuOpen = false;
const hasUnreadMessages = true;
const canEdit = false;

let isLoading = true;          // let if it'll flip later</code></pre>
  `,

  /* 0.2 Anatomy / Breakdown */
  'topics-0-15-0-2': `
<pre class="language-javascript"><code class="language-javascript">const isLoggedIn = true;

// const        → keyword (creates the variable)
// isLoggedIn   → variable name (starts with "is" — reads as a question)
// =            → assignment
// true         → the boolean value (no quotes!)
// ;            → ends the statement

// true and false are keywords in JS — not strings, not variables.</code></pre>
  `,

  /* 0.3 Syntax Details That Matter */
  'topics-0-15-0-3': `
    <p>No quotes around <code>true</code> or <code>false</code>:</p>
<pre class="language-javascript"><code class="language-javascript">const isOpen = true;       // boolean — what you want
const isOpen = "true";     // string — looks similar, behaves very differently</code></pre>

    <p>Lowercase only — <code>true</code> and <code>false</code> are keywords:</p>
<pre class="language-javascript"><code class="language-javascript">const isOpen = true;       // correct
const isOpen = True;       // wrong: ReferenceError — True isn't defined
const isOpen = TRUE;       // wrong: same reason</code></pre>

    <p>You can store the result of a comparison directly:</p>
<pre class="language-javascript"><code class="language-javascript">const age = 25;
const canVote = age >= 18;       // comparison evaluates to true or false
console.log(canVote);             // true

const isMatching = "Os" === "Sam";   // false
console.log(isMatching);              // false</code></pre>

    <p>Use <code>!</code> to flip a boolean:</p>
<pre class="language-javascript"><code class="language-javascript">let isOpen = false;
isOpen = !isOpen;        // flips false to true
isOpen = !isOpen;        // flips true to false</code></pre>
  `,

  /* --- Chunk 1: Why & When --- */

  /* 1.0 What problem it solves */
  'topics-0-15-1-0': `
    <p>Code constantly needs to make decisions: should this run? should that show? Is the form ready to submit? Booleans are JavaScript's answer for representing those yes/no states.</p>
    <p>Without booleans, every if-statement, every conditional render, every "should I do this?" check would have to use other types and risk getting them wrong.</p>
  `,

  /* 1.1 Why use it */
  'topics-0-15-1-1': `
    <p>Use a boolean any time you need to track a yes/no state — something that's only ever in one of two conditions.</p>
<pre class="language-javascript"><code class="language-javascript">// User states
let isLoggedIn = false;
const isAdmin = true;

// UI states
let isMenuOpen = false;
let isModalVisible = false;
let isLoading = true;

// Validation
let isFormValid = false;
let hasErrors = false;

// Permissions
const canEdit = true;
const canDelete = false;</code></pre>
    <p>Booleans are the natural type for any "is this true?" question. They're what every <code>if</code> statement actually evaluates.</p>
  `,

  /* 1.2 Where you use it */
  'topics-0-15-1-2': `
<pre class="language-javascript"><code class="language-javascript">// Inside if statements
if (isLoggedIn) {
  showDashboard();
}

// Storing comparison results
const isExpensive = price > 100;
const namesMatch = userInput === expectedName;

// Toggling UI state
let isMenuOpen = false;
hamburgerBtn.addEventListener("click", () => {
  isMenuOpen = !isMenuOpen;
  menu.classList.toggle("open");
});

// Form validation
let isFormValid = checkAllFields();
submitBtn.disabled = !isFormValid;

// Permission checks
if (canEditProfile) {
  showEditButton();
}</code></pre>
  `,

  /* 1.3 Plain English explanation */
  'topics-0-15-1-3': `
    <p>A boolean is a variable that can only ever be one of two things: yes or no, on or off, true or false.</p>
    <p>You use it whenever your code needs to remember a yes/no answer to something. Was the user logged in? Did the form pass validation? Is dark mode on? Each of those is a boolean.</p>
  `,

  /* 1.4 Mental model */
  'topics-0-15-1-4': `
    <p>Booleans are switches. Each one is either ON or OFF. There's no in-between, no third option.</p>
<pre class="language-javascript"><code class="language-javascript">let isMenuOpen = false;       // switch is OFF
isMenuOpen = true;             // switch is ON
isMenuOpen = !isMenuOpen;      // flip it (now OFF)
isMenuOpen = !isMenuOpen;      // flip it again (now ON)</code></pre>
    <p>Whenever you need to track a state with exactly two possibilities, you reach for a boolean.</p>
  `,

  /* 1.5 Step-by-step walkthrough */
  'topics-0-15-1-5': `
<pre class="language-javascript"><code class="language-javascript">const age = 25;
const canVote = age >= 18;
if (canVote) {
  console.log("You can vote");
}

// JavaScript is thinking:
// Line 1: declare age, store 25.
// Line 2: declare canVote.
//         Right side: look up age (25), check if 25 >= 18 → true.
//         Store true in canVote.
// Line 3: see if (canVote) → look up canVote → true.
//         The condition is true, run the block.
// Line 4: log "You can vote".</code></pre>
  `,

  /* --- Chunk 2: The Click --- */

  /* 2.0 Debugging clue */
  'topics-0-15-2-0': `
    <p>If a boolean isn't behaving the way you expect, log it to confirm what's actually stored:</p>
<pre class="language-javascript"><code class="language-javascript">let isLoggedIn = false;
// some logic happens...
console.log(isLoggedIn);   // peek to verify
console.log(typeof isLoggedIn);  // "boolean" — confirms it's a real boolean</code></pre>

    <p>The most common boolean trap: a string that <em>looks</em> like a boolean. Strings are always truthy, even <code>"false"</code>:</p>
<pre class="language-javascript"><code class="language-javascript">const isOpen = "false";   // string, not boolean!
if (isOpen) {
  console.log("This runs!");   // strings are truthy — even "false"
}

// fix: store an actual boolean
const isOpen = false;
if (isOpen) { /* doesn't run */ }</code></pre>

    <p>If you're using <code>localStorage</code> values as booleans, remember they come back as strings:</p>
<pre class="language-javascript"><code class="language-javascript">localStorage.setItem("darkMode", true);
const darkMode = localStorage.getItem("darkMode");
console.log(typeof darkMode);     // "string" — it's "true" not true

// fix: parse back to a boolean
const darkMode = localStorage.getItem("darkMode") === "true";</code></pre>
  `,

  /* 2.1 The part that makes it click */
  'topics-0-15-2-1': `
    <p>Booleans are the language of decisions. Every <code>if</code> statement is asking a boolean question.</p>
    <p><code>true</code> and <code>false</code> are special keywords — no quotes, lowercase only. Anything else is not a boolean.</p>
  `,

  /* 2.2 Common confusions */
  'topics-0-15-2-2': `
    <p><strong>Confusion: <code>"false"</code> (string) vs <code>false</code> (boolean)</strong></p>
<pre class="language-javascript"><code class="language-javascript">const a = false;        // boolean — falsy
const b = "false";      // string — truthy! (any non-empty string is truthy)

if (a) { /* doesn't run */ }
if (b) { /* RUNS! — confusing */ }</code></pre>

    <p><strong>Confusion: truthy vs true</strong></p>
<pre class="language-javascript"><code class="language-javascript">// Many values aren't booleans but BEHAVE like booleans in if statements:
if ("hello") { }      // runs — non-empty strings are truthy
if (1) { }            // runs — non-zero numbers are truthy
if ([]) { }           // runs — arrays are truthy (even empty ones!)

if ("") { }           // doesn't run — empty string is falsy
if (0) { }            // doesn't run — zero is falsy
if (null) { }         // doesn't run — null is falsy
if (undefined) { }    // doesn't run — undefined is falsy</code></pre>
    <p>Truthy/falsy is a separate concept — values that <em>act like</em> booleans without being booleans.</p>

    <p><strong>Confusion: storing comparisons</strong></p>
<pre class="language-javascript"><code class="language-javascript">// Beginners often write:
let isOver18;
if (age >= 18) {
  isOver18 = true;
} else {
  isOver18 = false;
}

// You can store the comparison result directly:
const isOver18 = age >= 18;   // shorter, same result</code></pre>
  `,

  /* 2.3 Common mistakes */
  'topics-0-15-2-3': `
<pre class="language-javascript"><code class="language-javascript">const isOpen = "true";
// wrong: this is a string, not a boolean
// fix: drop the quotes
const isOpen = true;</code></pre>

<pre class="language-javascript"><code class="language-javascript">const isOpen = True;
// wrong: True (capitalized) isn't a keyword in JS
// fix: lowercase
const isOpen = true;</code></pre>

<pre class="language-javascript"><code class="language-javascript">if (isOpen = true) { }
// wrong: this ASSIGNS true to isOpen, then checks if true is truthy (it is)
// always runs!
// fix: use ===
if (isOpen === true) { }
// even better — booleans don't need ===, just check the variable
if (isOpen) { }</code></pre>

<pre class="language-javascript"><code class="language-javascript">localStorage.setItem("darkMode", true);
const darkMode = localStorage.getItem("darkMode");
if (darkMode) { }
// wrong: localStorage stores "true" as a string, and any non-empty string is truthy
// even if it was "false", this if would run
// fix: convert back to a boolean
const darkMode = localStorage.getItem("darkMode") === "true";</code></pre>
  `,

  /* --- Chunk 3: In Practice --- */

  /* 3.0 Tiny examples */
  'topics-0-15-3-0': `
<pre class="language-javascript"><code class="language-javascript">// Direct values
const isLoggedIn = true;
const hasErrors = false;

// From a comparison
const age = 25;
const canVote = age >= 18;        // true
const isAdult = age > 17;          // true

// Flipping
let isMenuOpen = false;
isMenuOpen = !isMenuOpen;          // true
isMenuOpen = !isMenuOpen;          // false

// In an if statement
if (isLoggedIn) {
  console.log("Welcome");
}

// Combined with logical operators
const isAdmin = true;
const isPremium = false;
const hasAccess = isAdmin || isPremium;   // true (either one)</code></pre>
  `,

  /* 3.1 Real website uses */
  'topics-0-15-3-1': `
    <p><strong>Example: tracking menu open/closed</strong></p>
<pre class="language-javascript"><code class="language-javascript">let isMenuOpen = false;

hamburgerBtn.addEventListener("click", () => {
  isMenuOpen = !isMenuOpen;
  menu.classList.toggle("open");
});</code></pre>

    <p><strong>Example: form validation flag</strong></p>
<pre class="language-javascript"><code class="language-javascript">let isFormValid = false;

emailInput.addEventListener("input", () => {
  isFormValid = emailInput.value.includes("@");
  submitBtn.disabled = !isFormValid;
});</code></pre>

    <p><strong>Example: loading state</strong></p>
<pre class="language-javascript"><code class="language-javascript">let isLoading = true;
spinner.style.display = "block";

const data = await fetch(url);
isLoading = false;
spinner.style.display = "none";</code></pre>

    <p><strong>Example: permission flags</strong></p>
<pre class="language-javascript"><code class="language-javascript">const isAdmin = currentUser.role === "admin";
const canEditPost = isAdmin || post.authorId === currentUser.id;

if (canEditPost) {
  showEditButton();
}</code></pre>
  `,

  /* 3.2 Connects to */
  'topics-0-15-3-2': `
    <ul>
      <li><strong>Booleans</strong> → the topic of booleans as a data type (deeper coverage)</li>
      <li><strong>If / else</strong> → conditions that depend on booleans</li>
      <li><strong>Comparison operators</strong> → <code>===</code>, <code>!==</code>, <code>&gt;</code>, <code>&lt;</code> all return booleans</li>
      <li><strong>Logical operators</strong> → <code>&&</code>, <code>||</code>, <code>!</code> work on booleans</li>
      <li><strong>Truthy / falsy</strong> → values that act like booleans without being booleans</li>
      <li><strong>Form validation</strong> → most validation results in booleans</li>
    </ul>
  `,

  /* 3.3 See also */
  'topics-0-15-3-3': `
    <ul>
      <li>Booleans (full topic)</li>
      <li>If / else statements</li>
      <li>Comparison operators</li>
      <li>Logical operators (<code>&&</code>, <code>||</code>, <code>!</code>)</li>
      <li>Truthy and falsy values</li>
      <li>Boolean naming (is/has/can/should)</li>
      <li>Storing strings</li>
      <li>Storing numbers</li>
    </ul>
  `,


  /* ===== Sub-lesson: 3.1 Variables → storing arrays =====
     Path: topics-0-16-{chunkIndex}-{pieceIndex}
  */

  /* --- Chunk 0: What & How --- */

  /* 0.0 What it is */
  'topics-0-16-0-0': `
    <p>Storing an array means putting a list of values into a variable. The whole list — no matter how many items — counts as one value, so it lives in one variable.</p>
    <p>Anything that's a "list" in real terms (colors, products, names, tasks) lives in an array.</p>
  `,

  /* 0.1 Syntax */
  'topics-0-16-0-1': `
<pre class="language-javascript"><code class="language-javascript">const colors = ["red", "blue", "green"];
const numbers = [1, 2, 3, 4, 5];
const empty = [];

let scores = [10, 20, 30];        // let if the array variable will be reassigned</code></pre>
  `,

  /* 0.2 Anatomy / Breakdown */
  'topics-0-16-0-2': `
<pre class="language-javascript"><code class="language-javascript">const colors = ["red", "blue", "green"];

// const                          → keyword
// colors                          → variable name
// =                               → assignment
// [                               → opening bracket — starts the array
// "red", "blue", "green"          → items, separated by commas
// ]                               → closing bracket — ends the array
// ;                               → ends the statement</code></pre>
  `,

  /* 0.3 Syntax Details That Matter */
  'topics-0-16-0-3': `
    <p>Square brackets create the array. Items are comma-separated:</p>
<pre class="language-javascript"><code class="language-javascript">const a = ["red", "blue"];      // correct
const a = ["red" "blue"];        // wrong: missing comma
const a = ("red", "blue");       // wrong: those are parens, not array brackets</code></pre>

    <p>Items can be any type, even mixed:</p>
<pre class="language-javascript"><code class="language-javascript">const mixed = [1, "two", true, null, [3, 4]];
// numbers, strings, booleans, null, even other arrays — all valid</code></pre>

    <p>Trailing commas are allowed (and actually nice in long arrays):</p>
<pre class="language-javascript"><code class="language-javascript">const items = [
  "apple",
  "banana",
  "cherry",       // ← trailing comma is fine
];</code></pre>

    <p>Access items by index — starts at 0, not 1:</p>
<pre class="language-javascript"><code class="language-javascript">const colors = ["red", "blue", "green"];

colors[0];      // "red"   — first item
colors[1];      // "blue"  — second item
colors[2];      // "green" — third item
colors[3];      // undefined — no item at that position</code></pre>

    <p><code>const</code> doesn't freeze array contents — items can still be changed:</p>
<pre class="language-javascript"><code class="language-javascript">const colors = ["red", "blue"];

colors.push("green");      // works — modifying the array
colors[0] = "purple";       // works — changing an item

colors = ["yellow"];        // wrong: TypeError — reassigning, blocked by const</code></pre>
  `,

  /* --- Chunk 1: Why & When --- */

  /* 1.0 What problem it solves */
  'topics-0-16-1-0': `
    <p>Lots of real things come in lists — products in a cart, replies on a post, tasks in a to-do. Without arrays, you'd need a separate variable for every single item, and your code would have no way to handle "however many" of something.</p>
    <p>An array is one variable that holds a list, no matter how long. JavaScript can loop over it, count items, add or remove items — all without you having to track each one individually.</p>
  `,

  /* 1.1 Why use it */
  'topics-0-16-1-1': `
    <p>Use an array any time you have multiple things of the same kind that belong together.</p>
<pre class="language-javascript"><code class="language-javascript">// Lists of items
const cartItems = ["shirt", "shoes", "hat"];
const colors = ["red", "blue", "green"];

// Lists of users or products
const users = [user1, user2, user3];

// Steps in a process
const steps = ["enter email", "verify", "set password"];

// Items rendered to a page
const tasks = ["buy milk", "walk dog", "send email"];</code></pre>
  `,

  /* 1.2 Where you use it */
  'topics-0-16-1-2': `
<pre class="language-javascript"><code class="language-javascript">// Looping over items
const colors = ["red", "blue", "green"];
for (const color of colors) {
  console.log(color);
}

// Building up a list
const cart = [];
cart.push("apple");
cart.push("banana");

// Storing API responses
const response = await fetch("/users");
const users = await response.json();   // usually an array

// Storing DOM matches
const allButtons = document.querySelectorAll(".btn");
// (technically a NodeList, but you treat it like an array)

// Tracking selections
const selectedTags = ["javascript", "html"];</code></pre>
  `,

  /* 1.3 Plain English explanation */
  'topics-0-16-1-3': `
    <p>An array is one box that holds many things in order.</p>
    <p>The whole box has one label (the variable name), but inside, items are stacked in a specific order. You can ask for "the first item," "the third item," "how many items," or "all items" — all by talking to the one variable.</p>
  `,

  /* 1.4 Mental model */
  'topics-0-16-1-4': `
    <p>Picture a numbered row of slots. The variable name labels the whole row. Each slot has an index (its position number, starting at 0).</p>
<pre class="language-javascript"><code class="language-javascript">const colors = ["red", "blue", "green"];

// colors  →  [ "red" , "blue" , "green" ]
//             index 0  index 1  index 2
//
// colors.length     → 3
// colors[0]         → "red"
// colors[colors.length - 1]  → last item ("green")</code></pre>
    <p>The whole array is one value pointed at by the variable. Items inside are accessed by number.</p>
  `,

  /* 1.5 Step-by-step walkthrough */
  'topics-0-16-1-5': `
<pre class="language-javascript"><code class="language-javascript">const cart = [];
cart.push("apple");
cart.push("banana");
console.log(cart);

// JavaScript is thinking:
// Line 1: declare cart. Right side is [] → an empty array.
//         Store the empty array in cart.
// Line 2: look up cart → the array.
//         Call .push("apple") → adds "apple" at the end.
//         Array is now ["apple"].
// Line 3: same idea — push "banana".
//         Array is now ["apple", "banana"].
// Line 4: log the array → ["apple", "banana"]</code></pre>
  `,

  /* --- Chunk 2: The Click --- */

  /* 2.0 Debugging clue */
  'topics-0-16-2-0': `
    <p>If you're getting <code>undefined</code> from an array index, the index is probably out of range:</p>
<pre class="language-javascript"><code class="language-javascript">const colors = ["red", "blue", "green"];
console.log(colors[3]);    // undefined — there's no item at index 3
console.log(colors.length);  // 3 — last valid index is 2</code></pre>

    <p>Off-by-one errors happen because indexes start at 0:</p>
<pre class="language-javascript"><code class="language-javascript">const colors = ["red", "blue", "green"];
const lastColor = colors[colors.length - 1];     // correct: "green"
const lastColor2 = colors[colors.length];        // wrong: undefined</code></pre>

    <p>If <code>console.log</code> shows the array changing when you didn't expect it to, something somewhere is mutating it. Arrays are passed by reference, so a function can modify the original:</p>
<pre class="language-javascript"><code class="language-javascript">const items = ["a", "b"];
function modify(arr) {
  arr.push("c");        // this changes the ORIGINAL items array
}
modify(items);
console.log(items);     // ["a", "b", "c"] — surprise!

// fix: work with a copy if you don't want to mutate
function modify(arr) {
  const copy = [...arr, "c"];
  return copy;
}</code></pre>
  `,

  /* 2.1 The part that makes it click */
  'topics-0-16-2-1': `
    <p>An array is a single value that holds many. The brackets <code>[]</code> are what turn many things into one value you can pass around.</p>
    <p>Indexes start at 0. The last item is always at <code>length - 1</code>.</p>
  `,

  /* 2.2 Common confusions */
  'topics-0-16-2-2': `
    <p><strong>Confusion: indexes start at 0, not 1</strong></p>
<pre class="language-javascript"><code class="language-javascript">const colors = ["red", "blue", "green"];

colors[0];     // "red"   — FIRST item
colors[1];     // "blue"  — second
colors[2];     // "green" — third (LAST item, since length is 3)
colors[3];     // undefined</code></pre>

    <p><strong>Confusion: <code>const</code> doesn't make the array immutable</strong></p>
<pre class="language-javascript"><code class="language-javascript">const colors = ["red"];

colors.push("blue");      // works — modifying the array
colors[0] = "green";       // works — changing an item

colors = ["yellow"];       // wrong: reassigning, blocked by const</code></pre>

    <p><strong>Confusion: <code>length</code> is one bigger than the last index</strong></p>
<pre class="language-javascript"><code class="language-javascript">const items = ["a", "b", "c"];

items.length;           // 3 (count of items)
items[2];               // "c" (last item, at index 2)
items[items.length];    // undefined (one past the end)
items[items.length - 1]; // "c" (correct way to get last)</code></pre>

    <p><strong>Confusion: arrays vs objects</strong></p>
<pre class="language-javascript"><code class="language-javascript">const arr = ["red", "blue"];        // array — items by NUMBER (index)
const obj = { color: "red" };       // object — items by NAME (key)

arr[0];           // "red"
obj.color;        // "red"</code></pre>
  `,

  /* 2.3 Common mistakes */
  'topics-0-16-2-3': `
<pre class="language-javascript"><code class="language-javascript">const colors = ["red" "blue"];
// wrong: missing comma between items
// fix:
const colors = ["red", "blue"];</code></pre>

<pre class="language-javascript"><code class="language-javascript">const colors = ["red", "blue", "green"];
const last = colors[3];
// wrong: index 3 doesn't exist (length is 3, indexes go 0-2)
// fix:
const last = colors[colors.length - 1];</code></pre>

<pre class="language-javascript"><code class="language-javascript">const items = [];
items = ["a", "b"];
// wrong: reassigning a const array
// fix: use push, or use let if you really need to swap
items.push("a");
items.push("b");</code></pre>

<pre class="language-javascript"><code class="language-javascript">const colors = ["red", "blue"];
const copy = colors;
copy.push("green");
console.log(colors);   // ["red", "blue", "green"] — original got mutated!
// arrays are shared by reference
// fix: spread to make a real copy
const copy = [...colors];
copy.push("green");
console.log(colors);   // ["red", "blue"] — unchanged</code></pre>

<pre class="language-javascript"><code class="language-javascript">const cart = ["apple", "banana"];
cart[5] = "cherry";
console.log(cart.length);   // 6 — JS fills the gaps with empty slots
console.log(cart[3]);        // undefined
// fix: use push instead of skipping indexes
cart.push("cherry");</code></pre>
  `,

  /* --- Chunk 3: In Practice --- */

  /* 3.0 Tiny examples */
  'topics-0-16-3-0': `
<pre class="language-javascript"><code class="language-javascript">// Basic array
const colors = ["red", "blue", "green"];
console.log(colors[0]);          // "red"
console.log(colors.length);      // 3

// Mixed types
const mixed = [1, "two", true];
console.log(mixed[1]);            // "two"

// Empty, then build it up
const cart = [];
cart.push("apple");
cart.push("banana");
console.log(cart);                // ["apple", "banana"]

// Looping
const numbers = [1, 2, 3];
for (const n of numbers) {
  console.log(n * 2);             // 2, 4, 6
}

// Last item
const items = ["a", "b", "c"];
console.log(items[items.length - 1]);   // "c"</code></pre>
  `,

  /* 3.1 Real website uses */
  'topics-0-16-3-1': `
    <p><strong>Example: building a shopping cart</strong></p>
<pre class="language-javascript"><code class="language-javascript">const cart = [];

addToCartBtn.addEventListener("click", (e) => {
  const productId = e.target.dataset.id;
  cart.push(productId);
  updateCartUI(cart);
});</code></pre>

    <p><strong>Example: rendering a list of items</strong></p>
<pre class="language-javascript"><code class="language-javascript">const tasks = ["buy milk", "walk dog", "send email"];

tasks.forEach((task) => {
  const li = document.createElement("li");
  li.textContent = task;
  taskList.appendChild(li);
});</code></pre>

    <p><strong>Example: storing API data</strong></p>
<pre class="language-javascript"><code class="language-javascript">const response = await fetch("/api/users");
const users = await response.json();
// users is now an array of user objects

users.forEach(user => renderUserCard(user));</code></pre>

    <p><strong>Example: tracking multi-select tags</strong></p>
<pre class="language-javascript"><code class="language-javascript">const selectedTags = [];

tagBtn.addEventListener("click", (e) => {
  const tag = e.target.dataset.tag;
  selectedTags.push(tag);
  updateFilters(selectedTags);
});</code></pre>
  `,

  /* 3.2 Connects to */
  'topics-0-16-3-2': `
    <ul>
      <li><strong>Arrays</strong> → the topic of arrays as a data type (deeper coverage)</li>
      <li><strong>Indexes</strong> → positions inside an array (0-based)</li>
      <li><strong>Loops</strong> → the main way to walk through an array</li>
      <li><strong>Array methods</strong> → <code>.push()</code>, <code>.map()</code>, <code>.filter()</code>, <code>.forEach()</code></li>
      <li><strong>const with arrays</strong> → blocks reassignment, not mutation</li>
      <li><strong>Spread (<code>...</code>)</strong> → for copying arrays</li>
      <li><strong>Storing objects</strong> → arrays of objects are everywhere</li>
    </ul>
  `,

  /* 3.3 See also */
  'topics-0-16-3-3': `
    <ul>
      <li>Arrays (full topic)</li>
      <li>Array indexes</li>
      <li>Array <code>.length</code></li>
      <li><code>.push()</code> and <code>.pop()</code></li>
      <li><code>.map()</code>, <code>.filter()</code>, <code>.forEach()</code></li>
      <li>Spread operator (<code>...</code>)</li>
      <li>Storing objects</li>
      <li>Arrays of objects</li>
    </ul>
  `,


  /* ===== Sub-lesson: 3.1 Variables → storing objects =====
     Path: topics-0-17-{chunkIndex}-{pieceIndex}
  */

  /* --- Chunk 0: What & How --- */

  /* 0.0 What it is */
  'topics-0-17-0-0': `
    <p>Storing an object means putting a labeled bundle of data into a variable. The whole bundle — properties and values — counts as one value.</p>
    <p>Whenever a single thing has multiple pieces of information (a user has a name, age, email; a product has a title, price, image), that thing is an object.</p>
  `,

  /* 0.1 Syntax */
  'topics-0-17-0-1': `
<pre class="language-javascript"><code class="language-javascript">const user = {
  name: "Os",
  age: 25,
  isLoggedIn: true
};

const empty = {};

let settings = { theme: "dark" };       // let if you'll reassign the variable</code></pre>
  `,

  /* 0.2 Anatomy / Breakdown */
  'topics-0-17-0-2': `
<pre class="language-javascript"><code class="language-javascript">const user = { name: "Os", age: 25 };

// const          → keyword
// user           → variable name
// =              → assignment
// {              → opening curly brace — starts the object
// name: "Os"     → a property: key "name", value "Os"
// ,              → comma separates properties
// age: 25        → another property: key "age", value 25
// }              → closing curly brace — ends the object
// ;              → ends the statement</code></pre>
  `,

  /* 0.3 Syntax Details That Matter */
  'topics-0-17-0-3': `
    <p>Curly braces create the object. Properties use colons between key and value, commas between properties:</p>
<pre class="language-javascript"><code class="language-javascript">const user = {
  name: "Os",        // property: key, colon, value, comma
  age: 25,
  email: "os@a.com"  // last property — comma optional
};</code></pre>

    <p>Keys are usually unquoted strings. Quotes are needed only if the key has weird characters:</p>
<pre class="language-javascript"><code class="language-javascript">const user = {
  name: "Os",          // unquoted key — most common
  "first-name": "Os",  // quoted: needed because of the dash
  "1st": "first"       // quoted: needed because keys can't start with a digit unquoted
};</code></pre>

    <p>Access properties with dot notation or bracket notation:</p>
<pre class="language-javascript"><code class="language-javascript">const user = { name: "Os", age: 25 };

user.name;        // "Os"  — dot notation (most common)
user["name"];     // "Os"  — bracket notation (same result)
user.email;       // undefined — no such property

// Bracket notation is needed when the key is in a variable:
const key = "name";
user[key];        // "Os"</code></pre>

    <p><code>const</code> doesn't freeze object contents — properties can still change:</p>
<pre class="language-javascript"><code class="language-javascript">const user = { name: "Os" };

user.name = "Sam";        // works — modifying the object
user.age = 25;             // works — adding a new property
delete user.name;          // works — removing a property

user = { name: "Sam" };    // wrong: TypeError — reassigning, blocked by const</code></pre>
  `,

  /* --- Chunk 1: Why & When --- */

  /* 1.0 What problem it solves */
  'topics-0-17-1-0': `
    <p>Real-world things have multiple pieces of information. A user isn't just a name — it's a name AND an age AND an email AND a login status. Without objects, you'd need a separate variable for each piece, and you'd have no way to keep them grouped.</p>
    <p>Objects bundle related data under one variable, so the whole thing travels together.</p>
  `,

  /* 1.1 Why use it */
  'topics-0-17-1-1': `
    <p>Use an object when a single concept has multiple labeled pieces of data.</p>
<pre class="language-javascript"><code class="language-javascript">// User info
const user = {
  name: "Os",
  email: "os@example.com",
  age: 25
};

// Product info
const product = {
  title: "Coffee Mug",
  price: 9.99,
  inStock: true
};

// App settings
const settings = {
  theme: "dark",
  fontSize: "medium",
  language: "en"
};

// API response
const response = {
  status: 200,
  message: "OK",
  data: [/* ... */]
};</code></pre>
  `,

  /* 1.2 Where you use it */
  'topics-0-17-1-2': `
<pre class="language-javascript"><code class="language-javascript">// Bundling related state
const appState = {
  isLoggedIn: false,
  cartCount: 0,
  currentUser: null
};

// API responses (almost always objects or arrays of objects)
const response = await fetch("/api/user");
const user = await response.json();

// Configuration
const config = {
  apiUrl: "https://api.example.com",
  timeout: 5000,
  retries: 3
};

// Lists of objects (very common)
const products = [
  { id: 1, name: "Mug", price: 9.99 },
  { id: 2, name: "Hat", price: 19.99 }
];

// Function arguments grouped together
function createUser({ name, email, age }) {
  // ...
}
createUser({ name: "Os", email: "os@a.com", age: 25 });</code></pre>
  `,

  /* 1.3 Plain English explanation */
  'topics-0-17-1-3': `
    <p>An object is one box with multiple labeled compartments.</p>
    <p>The whole box has one name (the variable). Inside, each compartment has its own label (a key) and its own contents (a value). You ask the box for a specific compartment by its label.</p>
  `,

  /* 1.4 Mental model */
  'topics-0-17-1-4': `
    <p>Where an array uses position numbers (0, 1, 2), an object uses labels. Same idea — bundling multiple values into one — different way to find them.</p>
<pre class="language-javascript"><code class="language-javascript">const user = { name: "Os", age: 25, email: "os@a.com" };

// user  →  { name: "Os", age: 25, email: "os@a.com" }
//
// user.name   → "Os"
// user.age    → 25
// user.email  → "os@a.com"</code></pre>
    <p>The variable points at the whole bundle. Dot or bracket notation reaches into the bundle and grabs a specific value by its label.</p>
  `,

  /* 1.5 Step-by-step walkthrough */
  'topics-0-17-1-5': `
<pre class="language-javascript"><code class="language-javascript">const user = { name: "Os" };
user.age = 25;
console.log(user);

// JavaScript is thinking:
// Line 1: declare user. Right side is { name: "Os" } → create an object.
//         Store the object in user. Lock the variable (const).
// Line 2: look up user → the object.
//         user.age = 25 → add (or set) the property "age" with value 25.
//         (const doesn't block this — we're modifying contents, not reassigning.)
// Line 3: log user → { name: "Os", age: 25 }</code></pre>
  `,

  /* --- Chunk 2: The Click --- */

  /* 2.0 Debugging clue */
  'topics-0-17-2-0': `
    <p>If a property returns <code>undefined</code>, the property doesn't exist or you typed it wrong:</p>
<pre class="language-javascript"><code class="language-javascript">const user = { name: "Os" };

user.email;       // undefined — no such property
user.Name;        // undefined — typo, capital N (case-sensitive)
user.name;        // "Os" — correct</code></pre>

    <p>If you get <code>"Cannot read properties of undefined (reading 'X')"</code>, something earlier was undefined and you're trying to access a property on it:</p>
<pre class="language-javascript"><code class="language-javascript">const user = await fetchUser();
console.log(user.profile.email);
// TypeError: Cannot read properties of undefined (reading 'email')
// (user.profile was undefined)

// fix: optional chaining
console.log(user.profile?.email);   // undefined instead of throwing</code></pre>

    <p>If <code>console.log</code> shows the object changing unexpectedly, something is mutating it. Objects are passed by reference:</p>
<pre class="language-javascript"><code class="language-javascript">const original = { name: "Os" };

function updateName(u) {
  u.name = "Sam";   // changes the ORIGINAL — surprise
}

updateName(original);
console.log(original.name);   // "Sam"

// fix: spread to make a copy
function updateName(u) {
  return { ...u, name: "Sam" };
}</code></pre>
  `,

  /* 2.1 The part that makes it click */
  'topics-0-17-2-1': `
    <p>Arrays use numbers to find items. Objects use names. Same idea — different label.</p>
    <p>Use an object when the things you're storing aren't naturally a list — they're a single thing with multiple parts.</p>
  `,

  /* 2.2 Common confusions */
  'topics-0-17-2-2': `
    <p><strong>Confusion: dot notation vs bracket notation</strong></p>
<pre class="language-javascript"><code class="language-javascript">const user = { name: "Os" };

user.name;        // dot — when you know the key
user["name"];     // bracket — same thing, just verbose

const key = "name";
user.key;         // undefined — looks for a literal "key" property
user[key];        // "Os" — uses the value of the key variable</code></pre>
    <p>Use dot when the key is a fixed name. Use brackets when the key is in a variable, or has special characters.</p>

    <p><strong>Confusion: <code>const</code> doesn't freeze object contents</strong></p>
<pre class="language-javascript"><code class="language-javascript">const user = { name: "Os" };

user.name = "Sam";       // works — changing properties is allowed
user.age = 25;            // works — adding new properties is allowed

user = { name: "Sam" };   // wrong: reassigning, blocked by const</code></pre>

    <p><strong>Confusion: missing properties return <code>undefined</code></strong></p>
<pre class="language-javascript"><code class="language-javascript">const user = { name: "Os" };

user.email;       // undefined — no error, no warning, just undefined
user.profile.x;   // TypeError — can't read .x of undefined</code></pre>
    <p>Accessing a missing property returns <code>undefined</code>. But trying to access a property OF that <code>undefined</code> throws an error.</p>
  `,

  /* 2.3 Common mistakes */
  'topics-0-17-2-3': `
<pre class="language-javascript"><code class="language-javascript">const user = {
  name: "Os"
  age: 25
};
// wrong: missing comma between properties
// fix:
const user = {
  name: "Os",
  age: 25
};</code></pre>

<pre class="language-javascript"><code class="language-javascript">const user = { name: "Os" };
user = { name: "Sam" };
// wrong: reassigning, blocked by const
// fix: modify properties, don't reassign
user.name = "Sam";</code></pre>

<pre class="language-javascript"><code class="language-javascript">const user = { name: "Os" };
console.log(user.Name);   // undefined — capital N is wrong
// fix: keys are case-sensitive
console.log(user.name);</code></pre>

<pre class="language-javascript"><code class="language-javascript">const original = { name: "Os" };
const copy = original;
copy.name = "Sam";
console.log(original.name);   // "Sam" — original mutated too!
// objects are shared by reference
// fix: spread for a real copy
const copy = { ...original };</code></pre>

<pre class="language-javascript"><code class="language-javascript">const user = { "first name": "Os" };
console.log(user.first name);
// wrong: SyntaxError — dot notation can't have spaces
// fix: bracket notation
console.log(user["first name"]);</code></pre>
  `,

  /* --- Chunk 3: In Practice --- */

  /* 3.0 Tiny examples */
  'topics-0-17-3-0': `
<pre class="language-javascript"><code class="language-javascript">// Basic object
const user = { name: "Os", age: 25 };
console.log(user.name);          // "Os"
console.log(user.age);            // 25

// Empty, then add properties
const settings = {};
settings.theme = "dark";
settings.fontSize = "medium";

// Nested object
const profile = {
  user: { name: "Os" },
  preferences: { theme: "dark" }
};
console.log(profile.user.name);   // "Os"

// Array of objects (super common)
const products = [
  { id: 1, name: "Mug" },
  { id: 2, name: "Hat" }
];
console.log(products[0].name);    // "Mug"

// Bracket notation for dynamic keys
const key = "name";
const user2 = { name: "Sam" };
console.log(user2[key]);          // "Sam"</code></pre>
  `,

  /* 3.1 Real website uses */
  'topics-0-17-3-1': `
    <p><strong>Example: tracking app state in one bundle</strong></p>
<pre class="language-javascript"><code class="language-javascript">const appState = {
  isLoggedIn: false,
  currentUser: null,
  cartCount: 0,
  isLoading: false
};

loginBtn.addEventListener("click", async () => {
  appState.currentUser = await login();
  appState.isLoggedIn = true;
});</code></pre>

    <p><strong>Example: storing user profile data</strong></p>
<pre class="language-javascript"><code class="language-javascript">const profile = {
  name: nameInput.value,
  email: emailInput.value,
  age: Number(ageInput.value)
};

await saveProfile(profile);</code></pre>

    <p><strong>Example: configuration</strong></p>
<pre class="language-javascript"><code class="language-javascript">const config = {
  apiUrl: "https://api.example.com",
  timeout: 5000,
  retries: 3,
  debug: false
};</code></pre>

    <p><strong>Example: rendering a list of objects from an API</strong></p>
<pre class="language-javascript"><code class="language-javascript">const response = await fetch("/api/products");
const products = await response.json();
// products is an array of objects:
// [{ id: 1, name: "Mug", price: 9.99 }, ...]

products.forEach(product => {
  const card = document.createElement("div");
  card.textContent = \`\${product.name} - \$\${product.price}\`;
  productList.appendChild(card);
});</code></pre>
  `,

  /* 3.2 Connects to */
  'topics-0-17-3-2': `
    <ul>
      <li><strong>Objects</strong> → the topic of objects as a data type (deeper coverage)</li>
      <li><strong>Properties</strong> → the labeled values inside an object</li>
      <li><strong>Dot vs bracket notation</strong> → two ways to access properties</li>
      <li><strong>Storing arrays</strong> → arrays of objects are everywhere</li>
      <li><strong>const with objects</strong> → blocks reassignment, not mutation</li>
      <li><strong>Spread (<code>...</code>)</strong> → for copying objects</li>
      <li><strong>Optional chaining (<code>?.</code>)</strong> → safe access for possibly-missing properties</li>
      <li><strong>JSON</strong> → what objects look like when sent over the network</li>
    </ul>
  `,

  /* 3.3 See also */
  'topics-0-17-3-3': `
    <ul>
      <li>Objects (full topic)</li>
      <li>Object properties</li>
      <li>Dot notation</li>
      <li>Bracket notation</li>
      <li>Optional chaining (<code>?.</code>)</li>
      <li>Spread operator (<code>...</code>)</li>
      <li>Destructuring</li>
      <li>JSON</li>
      <li>Storing arrays</li>
    </ul>
  `,


  /* ===== Sub-lesson: 3.1 Variables → storing DOM elements =====
     Path: topics-0-18-{chunkIndex}-{pieceIndex}
  */

  /* --- Chunk 0: What & How --- */

  /* 0.0 What it is */
  'topics-0-18-0-0': `
    <p>Storing a DOM element means saving a reference to an HTML element from the page in a variable, so you can use it again without searching the page each time.</p>
    <p>This is one of the most common patterns in real JavaScript. Almost every script starts by selecting elements and storing them.</p>
  `,

  /* 0.1 Syntax */
  'topics-0-18-0-1': `
<pre class="language-javascript"><code class="language-javascript">// Single element
const submitBtn = document.querySelector(".submit");
const heading = document.querySelector("#main-title");
const firstLink = document.querySelector("a");

// Multiple elements (returns a NodeList — like an array)
const allButtons = document.querySelectorAll("button");
const navLinks = document.querySelectorAll(".nav-link");</code></pre>
  `,

  /* 0.2 Anatomy / Breakdown */
  'topics-0-18-0-2': `
<pre class="language-javascript"><code class="language-javascript">const submitBtn = document.querySelector(".submit");

// const                          → keyword
// submitBtn                       → variable name
// =                               → assignment
// document.querySelector(...)     → method that finds an element
// ".submit"                       → CSS selector (class with a dot prefix)
// ;                               → ends the statement

// The variable now holds a reference to the actual button on the page.</code></pre>
  `,

  /* 0.3 Syntax Details That Matter */
  'topics-0-18-0-3': `
    <p>The selector inside <code>querySelector()</code> uses CSS syntax — same as you'd use in a stylesheet:</p>
<pre class="language-javascript"><code class="language-javascript">document.querySelector(".btn");        // class — needs the dot
document.querySelector("#main");        // id — needs the hash
document.querySelector("button");       // tag — no prefix
document.querySelector(".form .btn");   // descendant — space between
document.querySelector("[data-id]");    // attribute selector</code></pre>

    <p>Use <code>const</code> — almost always. The selected element doesn't change once stored:</p>
<pre class="language-javascript"><code class="language-javascript">const button = document.querySelector(".btn");      // correct — won't be reassigned
let button = document.querySelector(".btn");         // works, but signals it'll change
                                                       // — misleading if it never does</code></pre>

    <p><code>querySelector</code> returns the FIRST match. <code>querySelectorAll</code> returns ALL matches:</p>
<pre class="language-javascript"><code class="language-javascript">document.querySelector(".item");        // first .item element
document.querySelectorAll(".item");      // all .item elements (a NodeList)</code></pre>

    <p>If no element matches, <code>querySelector</code> returns <code>null</code>:</p>
<pre class="language-javascript"><code class="language-javascript">const ghost = document.querySelector(".does-not-exist");
console.log(ghost);                                   // null

ghost.textContent = "hello";
// TypeError: Cannot set properties of null (setting 'textContent')</code></pre>
  `,

  /* --- Chunk 1: Why & When --- */

  /* 1.0 What problem it solves */
  'topics-0-18-1-0': `
    <p>Searching the page for an element is slow — especially if you do it over and over. Without a stored reference, you'd be calling <code>document.querySelector()</code> every time you wanted to interact with the same element.</p>
    <p>Storing the result once means JavaScript searches the page once. After that, the variable just points at the element directly. Cleaner code, faster code.</p>
  `,

  /* 1.1 Why use it */
  'topics-0-18-1-1': `
    <p>Any element you'll touch more than once should be stored in a variable.</p>
<pre class="language-javascript"><code class="language-javascript">// Without storing — searches the page 4 times
document.querySelector(".btn").textContent = "Click";
document.querySelector(".btn").classList.add("ready");
document.querySelector(".btn").addEventListener("click", handle);
document.querySelector(".btn").disabled = false;

// With storing — searches once, reuses the reference
const btn = document.querySelector(".btn");
btn.textContent = "Click";
btn.classList.add("ready");
btn.addEventListener("click", handle);
btn.disabled = false;</code></pre>
    <p>Same code, but cleaner and faster. The page is only searched one time.</p>
  `,

  /* 1.2 Where you use it */
  'topics-0-18-1-2': `
<pre class="language-javascript"><code class="language-javascript">// At the top of a script — selecting the elements you'll use
const form = document.querySelector(".signup-form");
const emailInput = document.querySelector("#email");
const submitBtn = document.querySelector(".submit");
const errorMsg = document.querySelector(".error");

// Inside an event handler
submitBtn.addEventListener("click", () => {
  emailInput.classList.add("touched");
  errorMsg.textContent = "";
});

// Storing collections of elements
const allTabs = document.querySelectorAll(".tab");
allTabs.forEach((tab) => {
  tab.addEventListener("click", handleTabClick);
});

// Inside a function — searching for a child element
function setupCard(card) {
  const title = card.querySelector(".title");
  const button = card.querySelector(".btn");
  // ...
}</code></pre>
  `,

  /* 1.3 Plain English explanation */
  'topics-0-18-1-3': `
    <p>The variable becomes a remote control for the element on the page.</p>
    <p>You select the element once, store it in a variable, and from then on you talk to the variable instead of finding the element again. Anything you do through the variable affects the real element.</p>
  `,

  /* 1.4 Mental model */
  'topics-0-18-1-4': `
    <p>The variable doesn't COPY the element. It points at the actual element on the page.</p>
<pre class="language-javascript"><code class="language-javascript">const btn = document.querySelector(".btn");

// btn  →  (the actual button on the page)
//
// Anything you do through btn affects the real button:
btn.textContent = "Hello";       // changes the real button's text
btn.classList.add("active");      // adds the class to the real button</code></pre>
    <p>If the page updates the element somehow (its text changes, its class changes), the variable still points at it. The variable just holds the reference.</p>
  `,

  /* 1.5 Step-by-step walkthrough */
  'topics-0-18-1-5': `
<pre class="language-javascript"><code class="language-javascript">const btn = document.querySelector(".submit");
btn.textContent = "Click me";
btn.addEventListener("click", () => {
  console.log("clicked");
});

// JavaScript is thinking:
// Line 1: declare btn.
//         Right side: call document.querySelector(".submit") — search the page.
//         Find the first element matching ".submit" → return it (or null).
//         Store the reference in btn.
//
// Line 2: look up btn → the button.
//         Set its textContent to "Click me" — the page updates.
//
// Line 3-5: look up btn → the button.
//         Attach a click listener. When clicked, run the callback.</code></pre>
  `,

  /* --- Chunk 2: The Click --- */

  /* 2.0 Debugging clue */
  'topics-0-18-2-0': `
    <p>If you get <code>"Cannot read properties of null"</code>, the selector found nothing — and you tried to use the result anyway:</p>
<pre class="language-javascript"><code class="language-javascript">const btn = document.querySelector(".submitt");   // typo
btn.textContent = "Click";
// TypeError: Cannot read properties of null (setting 'textContent')

// fix: check the selector
const btn = document.querySelector(".submit");</code></pre>

    <p>If the selector returns nothing but the element IS in your HTML, the script might be running before the page is loaded:</p>
<pre class="language-javascript"><code class="language-javascript">// HTML loads from top to bottom.
// If &lt;script&gt; is in the &lt;head&gt;, the script runs before the body exists.
const btn = document.querySelector(".btn");
console.log(btn);     // null — element doesn't exist yet

// fix: put your &lt;script&gt; before the closing &lt;/body&gt;
// or use the defer attribute: &lt;script src="..." defer&gt;&lt;/script&gt;</code></pre>

    <p>Always check the selector with <code>console.log</code> right after selecting:</p>
<pre class="language-javascript"><code class="language-javascript">const btn = document.querySelector(".btn");
console.log(btn);     // confirm: is it the element, or null?</code></pre>
  `,

  /* 2.1 The part that makes it click */
  'topics-0-18-2-1': `
    <p>Storing a DOM element doesn't make a copy. The variable is a remote control for the actual element on the page.</p>
    <p>If <code>querySelector</code> finds nothing, you get <code>null</code>. Always handle that case if there's any chance the element might not be there.</p>
  `,

  /* 2.2 Common confusions */
  'topics-0-18-2-2': `
    <p><strong>Confusion: <code>querySelector</code> vs <code>querySelectorAll</code></strong></p>
<pre class="language-javascript"><code class="language-javascript">document.querySelector(".btn");         // first match — single element OR null
document.querySelectorAll(".btn");       // all matches — NodeList (even if 0 or 1 match)

const oneBtn = document.querySelector(".btn");
oneBtn.textContent = "Click";            // works — it's a single element

const allBtns = document.querySelectorAll(".btn");
allBtns.textContent = "Click";           // wrong — NodeList doesn't have textContent
allBtns.forEach(btn => btn.textContent = "Click");   // correct</code></pre>

    <p><strong>Confusion: NodeList vs Array</strong></p>
<pre class="language-javascript"><code class="language-javascript">const btns = document.querySelectorAll(".btn");

btns.length;       // works — NodeList has length
btns.forEach(...); // works — NodeList has forEach
btns.map(...);     // wrong: NodeList doesn't have .map
btns[0];           // works — NodeList supports indexing

// fix: convert to a real array if you need full array methods
const arr = [...btns];
arr.map(...);      // works now</code></pre>

    <p><strong>Confusion: searching from <code>document</code> vs searching from an element</strong></p>
<pre class="language-javascript"><code class="language-javascript">// document.querySelector searches the WHOLE page
const allBtns = document.querySelectorAll(".btn");

// element.querySelector searches inside that element
const card = document.querySelector(".card");
const cardBtn = card.querySelector(".btn");   // only the .btn inside this card</code></pre>
  `,

  /* 2.3 Common mistakes */
  'topics-0-18-2-3': `
<pre class="language-javascript"><code class="language-javascript">const btn = document.querySelector("submit");
// wrong: forgot the dot — querySelector now looks for a &lt;submit&gt; tag, which doesn't exist
// fix:
const btn = document.querySelector(".submit");</code></pre>

<pre class="language-javascript"><code class="language-javascript">const btn = document.querySelector(".btn");
btn.textContent = "Click";
// works only if the element exists. If not, "Cannot read properties of null"
// fix: guard against null
if (btn) {
  btn.textContent = "Click";
}</code></pre>

<pre class="language-javascript"><code class="language-javascript">// In &lt;head&gt; before HTML loads:
const btn = document.querySelector(".btn");   // null — page isn't ready
// fix: load script at end of body, or use defer</code></pre>

<pre class="language-javascript"><code class="language-javascript">const allBtns = document.querySelectorAll(".btn");
allBtns.textContent = "Click";
// wrong: querySelectorAll returns a NodeList, not a single element
// fix: loop through them
allBtns.forEach(btn => btn.textContent = "Click");</code></pre>

<pre class="language-javascript"><code class="language-javascript">let btn = document.querySelector(".btn");
// works, but should probably be const — won't be reassigned
// fix:
const btn = document.querySelector(".btn");</code></pre>
  `,

  /* --- Chunk 3: In Practice --- */

  /* 3.0 Tiny examples */
  'topics-0-18-3-0': `
<pre class="language-javascript"><code class="language-javascript">// Single element
const heading = document.querySelector("h1");
heading.textContent = "Hello";

// Multiple elements
const items = document.querySelectorAll(".item");
items.forEach(item => {
  item.classList.add("loaded");
});

// Form input
const emailInput = document.querySelector("#email");
console.log(emailInput.value);          // whatever the user typed

// Element with event
const btn = document.querySelector(".submit");
btn.addEventListener("click", () => {
  console.log("clicked");
});

// Search inside a parent
const card = document.querySelector(".card");
const cardTitle = card.querySelector(".title");</code></pre>
  `,

  /* 3.1 Real website uses */
  'topics-0-18-3-1': `
    <p><strong>Example: setting up a form's elements at the top of a script</strong></p>
<pre class="language-javascript"><code class="language-javascript">const form = document.querySelector(".signup-form");
const nameInput = document.querySelector("#name");
const emailInput = document.querySelector("#email");
const submitBtn = document.querySelector(".submit");
const errorMsg = document.querySelector(".error");</code></pre>

    <p><strong>Example: attaching a click listener</strong></p>
<pre class="language-javascript"><code class="language-javascript">const hamburgerBtn = document.querySelector(".hamburger");
const menu = document.querySelector(".mobile-menu");

hamburgerBtn.addEventListener("click", () => {
  menu.classList.toggle("open");
});</code></pre>

    <p><strong>Example: looping over a list of elements</strong></p>
<pre class="language-javascript"><code class="language-javascript">const tabButtons = document.querySelectorAll(".tab-btn");

tabButtons.forEach((btn) => {
  btn.addEventListener("click", () => {
    activateTab(btn.dataset.tab);
  });
});</code></pre>

    <p><strong>Example: updating text and styles dynamically</strong></p>
<pre class="language-javascript"><code class="language-javascript">const cartBadge = document.querySelector(".cart-count");
const cartIcon = document.querySelector(".cart-icon");

let cartCount = 0;
addToCartBtn.addEventListener("click", () => {
  cartCount = cartCount + 1;
  cartBadge.textContent = cartCount;
  cartIcon.classList.add("bounce");
});</code></pre>
  `,

  /* 3.2 Connects to */
  'topics-0-18-3-2': `
    <ul>
      <li><strong>DOM</strong> → the topic of the DOM as a whole (deeper coverage)</li>
      <li><strong><code>querySelector</code> / <code>querySelectorAll</code></strong> → the methods that find elements</li>
      <li><strong>CSS selectors</strong> → the syntax used inside querySelector</li>
      <li><strong><code>const</code></strong> → DOM references almost always go in const</li>
      <li><strong><code>null</code></strong> → what you get when no element matches</li>
      <li><strong>Events</strong> → most stored elements get listeners attached</li>
      <li><strong>Forms</strong> → input elements are stored to read <code>.value</code></li>
    </ul>
  `,

  /* 3.3 See also */
  'topics-0-18-3-3': `
    <ul>
      <li>DOM (full topic)</li>
      <li><code>querySelector</code></li>
      <li><code>querySelectorAll</code></li>
      <li>CSS selectors in JS</li>
      <li>Null-checking DOM results</li>
      <li><code>NodeList</code> vs Array</li>
      <li><code>defer</code> attribute on scripts</li>
      <li>Events</li>
    </ul>
  `,


  /* ===== Sub-lesson: 3.1 Variables → storing function results =====
     Path: topics-0-19-{chunkIndex}-{pieceIndex}
  */

  /* --- Chunk 0: What & How --- */

  /* 0.0 What it is */
  'topics-0-19-0-0': `
    <p>Storing a function result means calling a function and capturing whatever it returns into a variable.</p>
    <p>The function does its work, hands back a value, and you save that value with a name so the rest of your code can use it.</p>
  `,

  /* 0.1 Syntax */
  'topics-0-19-0-1': `
<pre class="language-javascript"><code class="language-javascript">function double(num) {
  return num * 2;
}

const result = double(5);          // call the function, store the result
console.log(result);                // 10

// Inline / one-line examples
const upperName = "os".toUpperCase();    // "OS"
const today = new Date();                 // current date object
const random = Math.random();             // random number 0–1</code></pre>
  `,

  /* 0.2 Anatomy / Breakdown */
  'topics-0-19-0-2': `
<pre class="language-javascript"><code class="language-javascript">const result = double(5);

// const     → keyword
// result    → variable name
// =         → assignment
// double    → the function being called
// (5)       → the argument passed in (parentheses with the input)
// ;         → ends the statement

// JS calls double(5) first, gets 10 back, then puts 10 into result.</code></pre>
  `,

  /* 0.3 Syntax Details That Matter */
  'topics-0-19-0-3': `
    <p>The parentheses are what call the function. Without them, you'd just store the function itself:</p>
<pre class="language-javascript"><code class="language-javascript">function double(num) {
  return num * 2;
}

const a = double(5);     // 10 — called the function, stored the result
const b = double;         // (the function itself) — stored the function reference
const c = double();       // NaN — called with no argument, num is undefined</code></pre>

    <p>If a function has no <code>return</code>, you get <code>undefined</code>:</p>
<pre class="language-javascript"><code class="language-javascript">function greet(name) {
  console.log("Hi " + name);     // logs but doesn't return
}

const message = greet("Os");      // "Hi Os" gets logged
console.log(message);             // undefined — nothing was returned</code></pre>

    <p>Method chaining means storing the result of one method, then calling another on it. JavaScript lets you skip the intermediate variable:</p>
<pre class="language-javascript"><code class="language-javascript">// Step by step
const trimmed = "  Os  ".trim();        // "Os"
const upper = trimmed.toUpperCase();    // "OS"

// Chained — same result, less code
const upper = "  Os  ".trim().toUpperCase();   // "OS"</code></pre>

    <p>Async functions return a Promise. To get the actual value, use <code>await</code>:</p>
<pre class="language-javascript"><code class="language-javascript">const data = fetch("/api/users");        // a Promise, not the data!
const data = await fetch("/api/users");   // the actual response — but only inside an async function</code></pre>
  `,

  /* --- Chunk 1: Why & When --- */

  /* 1.0 What problem it solves */
  'topics-0-19-1-0': `
    <p>Functions calculate, transform, or fetch values. If you don't store what they return, that value is gone the moment the line finishes — you can't use it later.</p>
    <p>Storing function results lets you do the work once, save the answer, and reuse it.</p>
  `,

  /* 1.1 Why use it */
  'topics-0-19-1-1': `
    <p>Use a stored function result whenever you need to use the same calculation more than once, or whenever the result is part of building up something bigger.</p>
<pre class="language-javascript"><code class="language-javascript">// Without storing — calling twice does the same work twice
console.log(calculateTax(price));
sendInvoice(price + calculateTax(price));   // tax computed again

// With storing — calculate once, reuse
const tax = calculateTax(price);
console.log(tax);
sendInvoice(price + tax);</code></pre>
    <p>Storing also makes the code easier to read — the variable's name explains what the result is.</p>
  `,

  /* 1.2 Where you use it */
  'topics-0-19-1-2': `
<pre class="language-javascript"><code class="language-javascript">// Math results
const tax = price * 0.08;
const total = subtotal + tax;
const discount = calculateDiscount(price, coupon);

// String transformations
const cleanInput = userInput.trim().toLowerCase();
const fullName = formatName(firstName, lastName);

// API responses
const response = await fetch("/api/users");
const users = await response.json();

// Validation results
const isValid = validateEmail(emailInput.value);

// Date / time
const now = new Date();
const timestamp = Date.now();</code></pre>
  `,

  /* 1.3 Plain English explanation */
  'topics-0-19-1-3': `
    <p>A function is like a vending machine — you put something in (the argument), and you get something out (the return value). Storing a function result is just catching what comes out so you can use it later.</p>
    <p>If you don't catch it, the value rolls off the counter. Gone.</p>
  `,

  /* 1.4 Mental model */
  'topics-0-19-1-4': `
    <p>The function call runs first (right side). Then the returned value lands in the variable (left side).</p>
<pre class="language-javascript"><code class="language-javascript">const result = double(5);

// Step 1 (right side): JS runs double(5)
//   → inside the function, num = 5
//   → return num * 2 → return 10
//
// Step 2 (left side): JS puts the returned 10 into result
//
// Final state: result → 10</code></pre>
    <p>The function does its work, returns a value, and that value is what gets stored. The variable doesn't store the function — it stores the function's output.</p>
  `,

  /* 1.5 Step-by-step walkthrough */
  'topics-0-19-1-5': `
<pre class="language-javascript"><code class="language-javascript">function add(a, b) {
  return a + b;
}

const sum = add(2, 3);
console.log(sum);

// JavaScript is thinking:
// Line 1-3: declare the add function (don't run it yet — just register it).
//
// Line 5: declare sum.
//         Right side: call add(2, 3).
//         Inside add: a = 2, b = 3, return 2 + 3 → return 5.
//         The function gives back 5.
//         Store 5 in sum.
//
// Line 6: look up sum → 5 → log 5.</code></pre>
  `,

  /* --- Chunk 2: The Click --- */

  /* 2.0 Debugging clue */
  'topics-0-19-2-0': `
    <p>If your variable is <code>undefined</code> after calling a function, the function probably forgot to <code>return</code>:</p>
<pre class="language-javascript"><code class="language-javascript">function double(num) {
  num * 2;       // calculated, but never returned
}

const result = double(5);
console.log(result);    // undefined — no return statement</code></pre>

    <p>If you accidentally stored the function instead of calling it, your variable holds a function — not a value:</p>
<pre class="language-javascript"><code class="language-javascript">function getName() {
  return "Os";
}

const name = getName;       // missing parens — stored the function itself
console.log(name);           // [Function: getName]
console.log(typeof name);    // "function"

// fix: call the function
const name = getName();      // "Os"</code></pre>

    <p>If you're working with async functions and your variable is a <code>Promise</code> instead of the value, you forgot <code>await</code>:</p>
<pre class="language-javascript"><code class="language-javascript">const data = fetch("/api");           // Promise, not the response
const data = await fetch("/api");      // the actual response</code></pre>
  `,

  /* 2.1 The part that makes it click */
  'topics-0-19-2-1': `
    <p>The parentheses <code>()</code> after a function name mean "run it now and give me the result." Without parentheses, you're just referencing the function itself.</p>
    <p><code>console.log</code> shows a value. <code>return</code> hands it back so the caller can store it. They're not the same.</p>
  `,

  /* 2.2 Common confusions */
  'topics-0-19-2-2': `
    <p><strong>Confusion: storing the function vs storing the result</strong></p>
<pre class="language-javascript"><code class="language-javascript">function getName() { return "Os"; }

const a = getName;       // stored the FUNCTION
const b = getName();     // stored the RESULT ("Os")

a;       // [Function]
a();     // "Os" — call it later
b;       // "Os"</code></pre>

    <p><strong>Confusion: <code>console.log</code> doesn't return anything</strong></p>
<pre class="language-javascript"><code class="language-javascript">function showName(name) {
  console.log(name);     // prints, but doesn't return anything
}

const x = showName("Os");
console.log(x);           // undefined — function didn't return

// console.log is for HUMANS to see.
// return is for the rest of your code to USE.</code></pre>

    <p><strong>Confusion: async functions return Promises, not values</strong></p>
<pre class="language-javascript"><code class="language-javascript">async function getUsers() {
  const response = await fetch("/api/users");
  return response.json();
}

const users = getUsers();          // Promise, not users!
const users = await getUsers();    // actual users (only inside another async fn)</code></pre>
  `,

  /* 2.3 Common mistakes */
  'topics-0-19-2-3': `
<pre class="language-javascript"><code class="language-javascript">function double(num) {
  num * 2;     // forgot to return
}
const result = double(5);
console.log(result);   // undefined
// fix: add return
function double(num) {
  return num * 2;
}</code></pre>

<pre class="language-javascript"><code class="language-javascript">const result = double;     // missing parens
// stores the function itself, not the result
// fix:
const result = double(5);</code></pre>

<pre class="language-javascript"><code class="language-javascript">function greet(name) {
  console.log("Hi " + name);
}
const msg = greet("Os");
// "Hi Os" gets logged, but msg is undefined
// fix: console.log shows, return hands back
function greet(name) {
  return "Hi " + name;
}</code></pre>

<pre class="language-javascript"><code class="language-javascript">const data = fetch("/api/users");
console.log(data);     // a Promise — not the data
// fix: await it (and put it inside an async function)
const data = await fetch("/api/users");</code></pre>

<pre class="language-javascript"><code class="language-javascript">const a = double 5;
// wrong: missing parentheses around the argument
// fix:
const a = double(5);</code></pre>
  `,

  /* --- Chunk 3: In Practice --- */

  /* 3.0 Tiny examples */
  'topics-0-19-3-0': `
<pre class="language-javascript"><code class="language-javascript">// Math result
function add(a, b) { return a + b; }
const total = add(5, 3);          // 8

// String method result
const upper = "hello".toUpperCase();   // "HELLO"
const trimmed = "  os  ".trim();        // "os"

// Method chain
const cleaned = "  Os  ".trim().toUpperCase();   // "OS"

// Date
const now = new Date();
const year = now.getFullYear();    // e.g. 2025

// Built-in math
const random = Math.random();      // 0 to (just under) 1
const rounded = Math.round(4.7);   // 5

// Async with await (inside an async function)
const response = await fetch("/api");
const data = await response.json();</code></pre>
  `,

  /* 3.1 Real website uses */
  'topics-0-19-3-1': `
    <p><strong>Example: storing the result of a calculation</strong></p>
<pre class="language-javascript"><code class="language-javascript">const subtotal = calculateSubtotal(cartItems);
const tax = calculateTax(subtotal);
const total = subtotal + tax;
displayCheckout(total);</code></pre>

    <p><strong>Example: storing API data</strong></p>
<pre class="language-javascript"><code class="language-javascript">async function loadUsers() {
  const response = await fetch("/api/users");
  const users = await response.json();
  renderUserList(users);
}</code></pre>

    <p><strong>Example: cleaning up form input</strong></p>
<pre class="language-javascript"><code class="language-javascript">const cleanEmail = emailInput.value.trim().toLowerCase();
const cleanName = nameInput.value.trim();
saveUser({ email: cleanEmail, name: cleanName });</code></pre>

    <p><strong>Example: storing validation results</strong></p>
<pre class="language-javascript"><code class="language-javascript">const isEmailValid = validateEmail(emailInput.value);
const isPasswordStrong = checkPasswordStrength(passwordInput.value);

if (isEmailValid && isPasswordStrong) {
  submitForm();
}</code></pre>
  `,

  /* 3.2 Connects to */
  'topics-0-19-3-2': `
    <ul>
      <li><strong>Functions</strong> → the source of the result being stored</li>
      <li><strong>return</strong> → the keyword that hands back a value</li>
      <li><strong>Assignment</strong> → the way the result lands in a variable</li>
      <li><strong>Method chaining</strong> → calling another method on a returned value</li>
      <li><strong>Async / await</strong> → required for storing Promise values</li>
      <li><strong>undefined</strong> → what comes back when there's no <code>return</code></li>
    </ul>
  `,

  /* 3.3 See also */
  'topics-0-19-3-3': `
    <ul>
      <li>Functions (full topic)</li>
      <li><code>return</code> statement</li>
      <li>Method chaining</li>
      <li><code>async</code> and <code>await</code></li>
      <li>Promises</li>
      <li><code>undefined</code> from missing return</li>
      <li><code>console.log</code> vs <code>return</code></li>
    </ul>
  `,


  /* ===== Sub-lesson: 3.1 Variables → undefined variables =====
     Path: topics-0-20-{chunkIndex}-{pieceIndex}
  */

  /* --- Chunk 0: What & How --- */

  /* 0.0 What it is */
  'topics-0-20-0-0': `
    <p><code>undefined</code> is JavaScript's default value for things that exist but haven't been given a value yet.</p>
    <p>You almost never write <code>undefined</code> yourself — it shows up automatically when a variable is declared with no value, when an object property doesn't exist, or when a function returns nothing.</p>
  `,

  /* 0.1 Syntax */
  'topics-0-20-0-1': `
<pre class="language-javascript"><code class="language-javascript">let userName;
console.log(userName);     // undefined — declared but no value yet

const user = { name: "Os" };
console.log(user.email);   // undefined — no email property exists

function greet() {}        // no return statement
console.log(greet());      // undefined — function returned nothing</code></pre>
  `,

  /* 0.2 Anatomy / Breakdown */
  'topics-0-20-0-2': `
<pre class="language-javascript"><code class="language-javascript">let userName;
console.log(userName);

// let               → declares the variable
// userName          → name of the variable
// (no = and no value) → JavaScript fills in undefined automatically
// ;                 → ends the statement
//
// console.log(userName) → prints whatever's inside → undefined

// undefined isn't a string. It's a special built-in value
// that means "this slot is empty because nothing has filled it yet."</code></pre>
  `,

  /* 0.3 Syntax Details That Matter */
  'topics-0-20-0-3': `
    <p>You don't usually write <code>undefined</code> yourself. It just appears:</p>
<pre class="language-javascript"><code class="language-javascript">// Three places undefined automatically appears:

// 1. Declared variable with no value
let a;
console.log(a);            // undefined

// 2. Missing object property
const obj = { name: "Os" };
console.log(obj.email);    // undefined

// 3. Function with no return
function silent() {}
console.log(silent());     // undefined</code></pre>

    <p><code>undefined</code> is its own type:</p>
<pre class="language-javascript"><code class="language-javascript">let x;
console.log(typeof x);     // "undefined"

const y = undefined;
console.log(typeof y);     // "undefined"</code></pre>

    <p>Comparing with <code>===</code> is the safe way to check for it:</p>
<pre class="language-javascript"><code class="language-javascript">let userName;

if (userName === undefined) {
  console.log("no value yet");      // runs
}

if (typeof userName === "undefined") {
  console.log("also works");         // runs — useful if variable might not exist at all
}</code></pre>

    <p><code>undefined</code> is NOT the same as <code>null</code>:</p>
<pre class="language-javascript"><code class="language-javascript">let a;
let b = null;

console.log(a === null);        // false — undefined isn't null
console.log(a === undefined);   // true
console.log(a == null);          // true (loose check, treats null and undefined as equal)</code></pre>
  `,

  /* --- Chunk 1: Why & When --- */

  /* 1.0 What problem it solves */
  'topics-0-20-1-0': `
    <p>JavaScript has to do <em>something</em> when a variable exists but has no value. Some languages throw an error. JavaScript chose: give it a special placeholder value called <code>undefined</code>.</p>
    <p>That choice means your code doesn't crash on every empty variable — but it also means weird bugs when <code>undefined</code> shows up where you expected something else.</p>
  `,

  /* 1.1 Why use it */
  'topics-0-20-1-1': `
    <p>You don't really "use" <code>undefined</code> — you handle it. Most of your code is going to assume variables hold useful values. When <code>undefined</code> shows up, it's usually a sign of:</p>
<pre class="language-javascript"><code class="language-javascript">// 1. A variable you declared but forgot to set
let cartTotal;
console.log(cartTotal);       // undefined — forgot to initialize

// 2. A typo'd object property
const user = { name: "Os" };
console.log(user.Name);       // undefined — wrong casing

// 3. A function that should have returned but didn't
function calculate() {
  // forgot to write: return result
}
const result = calculate();   // undefined</code></pre>
    <p>If you see <code>undefined</code> where you expected a real value, work backwards to find where the value was supposed to come from.</p>
  `,

  /* 1.2 Where you use it */
  'topics-0-20-1-2': `
<pre class="language-javascript"><code class="language-javascript">// Checking before using a value
let userName;
if (userName === undefined) {
  userName = "Anonymous";          // give it a default
}

// Default parameters in functions
function greet(name) {
  if (name === undefined) {
    name = "friend";
  }
  console.log("Hello, " + name);
}

// Modern shortcut — default parameters
function greet(name = "friend") {
  console.log("Hello, " + name);   // "friend" if name was undefined
}

// Optional chaining for missing properties
const user = {};
const email = user.profile?.email;   // undefined (no error)</code></pre>
  `,

  /* 1.3 Plain English explanation */
  'topics-0-20-1-3': `
    <p><code>undefined</code> is JavaScript's way of saying "this exists, but nothing is in it."</p>
    <p>The variable was declared. The slot is there. JavaScript just hasn't been told what to put inside, so it keeps a placeholder there until something replaces it.</p>
  `,

  /* 1.4 Mental model */
  'topics-0-20-1-4': `
    <p><code>undefined</code> means: <em>"the variable exists, but no value has been assigned to it yet."</em></p>
<pre class="language-javascript"><code class="language-javascript">let a;
// a  →  undefined  (declared, but empty)

a = 5;
// a  →  5  (now it has a value)

console.log(b);
// ReferenceError — b doesn't exist at all (not even undefined)</code></pre>
    <p>There's a difference between <strong>"empty container"</strong> (undefined) and <strong>"no container"</strong> (ReferenceError). Both feel like "nothing," but they mean different things.</p>
  `,

  /* 1.5 Step-by-step walkthrough */
  'topics-0-20-1-5': `
<pre class="language-javascript"><code class="language-javascript">let userName;
console.log(userName);

const user = { name: "Os" };
console.log(user.email);

function greet() {
  console.log("hi");
}
console.log(greet());

// JavaScript is thinking:
// Line 1: declare userName. No value given. Default to undefined.
// Line 2: look up userName → undefined → log undefined.
//
// Line 3: declare user, point at { name: "Os" }.
// Line 4: look up user.email → no such property → return undefined → log undefined.
//
// Line 5-7: declare greet. It logs "hi" but doesn't return anything.
// Line 8: call greet() → logs "hi" → function returns nothing → undefined → log undefined.</code></pre>
  `,

  /* --- Chunk 2: The Click --- */

  /* 2.0 Debugging clue */
  'topics-0-20-2-0': `
    <p>Seeing <code>undefined</code> where you expected a value? It's almost always one of:</p>
<pre class="language-javascript"><code class="language-javascript">// 1. Forgot to assign the variable
let userName;
console.log(userName);       // undefined
// fix:
let userName = "Os";

// 2. Typo'd a property name
const user = { firstName: "Os" };
console.log(user.firstname);  // undefined — case-sensitive
// fix:
console.log(user.firstName);

// 3. Forgot to return from a function
function greet(name) {
  "Hi " + name;             // calculated, not returned
}
const msg = greet("Os");
console.log(msg);             // undefined
// fix:
function greet(name) {
  return "Hi " + name;
}

// 4. Async function not awaited
async function getUser() { return { name: "Os" }; }
const user = getUser();      // Promise, not the user
console.log(user.name);       // undefined (because user is a Promise)
// fix: await it</code></pre>
  `,

  /* 2.1 The part that makes it click */
  'topics-0-20-2-1': `
    <p>If you see <code>undefined</code>, ask: <em>did I forget to assign this, or did I misspell something?</em> One of those two is almost always the answer.</p>
    <p><code>undefined</code> means the variable EXISTS but holds nothing. <code>ReferenceError</code> means the variable doesn't exist AT ALL.</p>
  `,

  /* 2.2 Common confusions */
  'topics-0-20-2-2': `
    <p><strong>Confusion: <code>undefined</code> vs <code>null</code></strong></p>
<pre class="language-javascript"><code class="language-javascript">let a;
let b = null;

// Both feel like "nothing", but they mean different things:
// undefined → "JavaScript's default empty"
// null      → "I, the developer, set this to nothing on purpose"

console.log(a);              // undefined
console.log(b);              // null
console.log(a == b);          // true (loose equality treats them as equal)
console.log(a === b);         // false (strict equality keeps them apart)</code></pre>

    <p><strong>Confusion: <code>undefined</code> vs not declared</strong></p>
<pre class="language-javascript"><code class="language-javascript">let a;
console.log(a);              // undefined — variable EXISTS, no value
console.log(b);              // ReferenceError — variable doesn't exist at all</code></pre>

    <p><strong>Confusion: <code>undefined</code> as a string</strong></p>
<pre class="language-javascript"><code class="language-javascript">let a;
console.log(a);                // undefined (the value)
console.log("undefined");      // "undefined" (the string)
console.log(a === "undefined"); // false — totally different things</code></pre>

    <p><strong>Confusion: <code>typeof undefined</code> is the string <code>"undefined"</code></strong></p>
<pre class="language-javascript"><code class="language-javascript">let a;
console.log(typeof a);              // "undefined" — string!
console.log(typeof a === "undefined");   // true</code></pre>
  `,

  /* 2.3 Common mistakes */
  'topics-0-20-2-3': `
<pre class="language-javascript"><code class="language-javascript">let userName;
if (userName == "undefined") { }
// wrong: comparing to the STRING "undefined"
// fix: compare to the actual value
if (userName === undefined) { }</code></pre>

<pre class="language-javascript"><code class="language-javascript">function getName() {
  // forgot return
}
const name = getName();
console.log(name.toUpperCase());
// TypeError: Cannot read properties of undefined (reading 'toUpperCase')
// fix: return from the function, or check for undefined before using</code></pre>

<pre class="language-javascript"><code class="language-javascript">const user = {};
console.log(user.profile.email);
// TypeError — user.profile is undefined, can't read .email of undefined
// fix: optional chaining
console.log(user.profile?.email);   // undefined, no error</code></pre>

<pre class="language-javascript"><code class="language-javascript">let result = undefined;
// works, but unusual — you almost never need to write undefined yourself
// fix: leave the variable empty (let result;) or use null intentionally</code></pre>

<pre class="language-javascript"><code class="language-javascript">if (cartTotal) { }
// wrong if cartTotal could be 0 — 0 is falsy AND undefined is falsy
// the if doesn't run for either
// fix: check explicitly
if (cartTotal !== undefined) { }</code></pre>
  `,

  /* --- Chunk 3: In Practice --- */

  /* 3.0 Tiny examples */
  'topics-0-20-3-0': `
<pre class="language-javascript"><code class="language-javascript">// Declared, no value
let userName;
console.log(userName);               // undefined

// Missing object property
const user = { name: "Os" };
console.log(user.age);               // undefined

// Function with no return
function silent() {}
console.log(silent());                // undefined

// Checking for it
let cartTotal;
if (cartTotal === undefined) {
  cartTotal = 0;
}
console.log(cartTotal);               // 0

// Default parameter
function greet(name = "friend") {
  return "Hi " + name;
}
console.log(greet());                 // "Hi friend"</code></pre>
  `,

  /* 3.1 Real website uses */
  'topics-0-20-3-1': `
    <p><strong>Example: defaulting a missing parameter</strong></p>
<pre class="language-javascript"><code class="language-javascript">function showAlert(message, type = "info") {
  // type defaults to "info" when undefined
  alertBox.classList.add(\`alert-\${type}\`);
  alertBox.textContent = message;
}

showAlert("Saved!");           // type → "info"
showAlert("Error", "danger");  // type → "danger"</code></pre>

    <p><strong>Example: safely accessing nested data from an API</strong></p>
<pre class="language-javascript"><code class="language-javascript">const response = await fetch("/api/user");
const user = await response.json();

// user.profile might not exist for new accounts
const email = user.profile?.email;

if (email !== undefined) {
  emailInput.value = email;
}</code></pre>

    <p><strong>Example: checking if a function returned</strong></p>
<pre class="language-javascript"><code class="language-javascript">const cached = getCachedValue("user");

if (cached === undefined) {
  // Cache miss — fetch fresh data
  const fresh = await fetch("/api/user");
  return fresh;
}
return cached;</code></pre>

    <p><strong>Example: handling form fields the user might leave blank</strong></p>
<pre class="language-javascript"><code class="language-javascript">const phoneInput = document.querySelector("#phone");

const phone = phoneInput.value || undefined;
// empty string becomes undefined — useful for optional API fields
saveContact({ name, email, phone });</code></pre>
  `,

  /* 3.2 Connects to */
  'topics-0-20-3-2': `
    <ul>
      <li><strong><code>null</code></strong> → the intentional version of "empty"</li>
      <li><strong>Declaring variables</strong> → declared-without-value gives undefined</li>
      <li><strong>Functions</strong> → missing <code>return</code> gives undefined</li>
      <li><strong>Objects</strong> → missing properties give undefined</li>
      <li><strong>Optional chaining (<code>?.</code>)</strong> → safe access that gives undefined instead of throwing</li>
      <li><strong>Default parameters</strong> → fill in missing values automatically</li>
      <li><strong>Truthy / falsy</strong> → <code>undefined</code> is falsy</li>
    </ul>
  `,

  /* 3.3 See also */
  'topics-0-20-3-3': `
    <ul>
      <li><code>null</code></li>
      <li><code>typeof</code> operator</li>
      <li>Optional chaining (<code>?.</code>)</li>
      <li>Default parameters</li>
      <li>Truthy and falsy</li>
      <li><code>ReferenceError</code></li>
      <li>Nullish coalescing (<code>??</code>)</li>
    </ul>
  `,


  /* ===== Sub-lesson: 3.1 Variables → variables inside functions =====
     Path: topics-0-21-{chunkIndex}-{pieceIndex}
  */

  /* --- Chunk 0: What & How --- */

  /* 0.0 What it is */
  'topics-0-21-0-0': `
    <p>Variables declared inside a function only exist inside that function. They're created when the function runs and disappear when it finishes.</p>
    <p>This is called <strong>local scope</strong> — the variables are local to the function, invisible to code outside.</p>
  `,

  /* 0.1 Syntax */
  'topics-0-21-0-1': `
<pre class="language-javascript"><code class="language-javascript">function calculatePrice(item) {
  const tax = item.price * 0.08;        // local variable
  const total = item.price + tax;       // also local
  return total;
}

const result = calculatePrice({ price: 100 });
console.log(result);     // 108
console.log(tax);        // ReferenceError — tax doesn't exist out here</code></pre>
  `,

  /* 0.2 Anatomy / Breakdown */
  'topics-0-21-0-2': `
<pre class="language-javascript"><code class="language-javascript">function greet(name) {
  const greeting = "Hi, " + name;
  return greeting;
}

// function greet(name) {
//   ↑ everything between { and } is the function's BODY
//   variables declared inside only exist while the function runs
//
//   const greeting = "Hi, " + name;
//   ↑ "greeting" is a local variable
//   ↑ exists from this line until the function ends
//
//   return greeting;
//   ↑ value goes out, but the variable itself doesn't survive
// }</code></pre>
  `,

  /* 0.3 Syntax Details That Matter */
  'topics-0-21-0-3': `
    <p>Local variables only exist inside the function:</p>
<pre class="language-javascript"><code class="language-javascript">function example() {
  const local = "I'm local";
  console.log(local);        // works — we're inside the function
}

example();
console.log(local);          // ReferenceError — local doesn't exist here</code></pre>

    <p>Each function call creates fresh variables — they don't carry over between calls:</p>
<pre class="language-javascript"><code class="language-javascript">function counter() {
  let count = 0;
  count = count + 1;
  console.log(count);
}

counter();    // 1
counter();    // 1 — fresh count each time
counter();    // 1 — still fresh</code></pre>

    <p>Function parameters are also local variables:</p>
<pre class="language-javascript"><code class="language-javascript">function greet(name) {
  // name is a local variable — only exists during this call
  console.log(name);
}

greet("Os");
console.log(name);          // ReferenceError or window.name — not the parameter</code></pre>

    <p>Inner functions can see outer variables, but not the other way around:</p>
<pre class="language-javascript"><code class="language-javascript">const outer = "outer value";

function example() {
  const inner = "inner value";
  console.log(outer);       // works — inner can see outer
  console.log(inner);       // works
}

console.log(inner);         // ReferenceError — outer can't see inner</code></pre>
  `,

  /* --- Chunk 1: Why & When --- */

  /* 1.0 What problem it solves */
  'topics-0-21-1-0': `
    <p>If every variable was global, two functions using the same name (like <code>count</code> or <code>i</code>) would step on each other. Bugs would multiply as your code grew.</p>
    <p>Local variables solve this. Each function gets its own private workspace. Variables declared inside don't leak out and can't be touched from elsewhere.</p>
  `,

  /* 1.1 Why use it */
  'topics-0-21-1-1': `
    <p>Almost every variable should be local. Declare it inside the function that uses it. That keeps your code clean and your scope predictable.</p>
<pre class="language-javascript"><code class="language-javascript">// Don't do this — global variables that leak everywhere
let total = 0;
function calculate() {
  total = price * quantity;   // accidentally affecting outside code
}

// Do this — local, contained, safe
function calculate(price, quantity) {
  const total = price * quantity;
  return total;
}</code></pre>
    <p>If a function needs a value from outside, take it as a parameter. If it needs to send something out, return it. That's how functions communicate cleanly.</p>
  `,

  /* 1.2 Where you use it */
  'topics-0-21-1-2': `
<pre class="language-javascript"><code class="language-javascript">// Calculation helpers — all local
function calculateTax(price) {
  const taxRate = 0.08;
  const tax = price * taxRate;
  return tax;
}

// Event handlers — local state
button.addEventListener("click", () => {
  const clickedAt = Date.now();
  const message = "Clicked at " + clickedAt;
  console.log(message);
});

// Loops inside functions — local index
function findItem(items, target) {
  for (let i = 0; i < items.length; i++) {
    if (items[i] === target) return i;
  }
  return -1;
}

// Validation
function validateEmail(input) {
  const trimmed = input.trim();
  const isValid = trimmed.includes("@");
  return isValid;
}</code></pre>
  `,

  /* 1.3 Plain English explanation */
  'topics-0-21-1-3': `
    <p>A function is like a private workspace. Variables you declare inside the workspace only exist while you're working in there. Once you leave, the workspace is wiped clean.</p>
    <p>This is a feature, not a limitation. It means functions don't accidentally clutter the rest of your code. Each function does its job and cleans up after itself.</p>
  `,

  /* 1.4 Mental model */
  'topics-0-21-1-4': `
    <p>Each function call gets its own scope — its own little bubble of variables that doesn't share with other calls.</p>
<pre class="language-javascript"><code class="language-javascript">function greet(name) {
  const message = "Hi " + name;
  return message;
}

greet("Os");      // call 1: creates message="Hi Os", returns it, message destroyed
greet("Sam");     // call 2: creates a NEW message="Hi Sam", returns it, destroyed
greet("Pat");     // call 3: again, brand new message variable

// Each call's variables are completely independent.</code></pre>
  `,

  /* 1.5 Step-by-step walkthrough */
  'topics-0-21-1-5': `
<pre class="language-javascript"><code class="language-javascript">function calculate(price) {
  const tax = price * 0.08;
  const total = price + tax;
  return total;
}

const result = calculate(100);
console.log(result);
console.log(tax);

// JavaScript is thinking:
// Line 1-5: declare the calculate function. Don't run it yet.
//
// Line 7: see calculate(100) → run the function with price = 100.
//   - Create local "tax" → 100 * 0.08 → 8.
//   - Create local "total" → 100 + 8 → 108.
//   - Return 108.
//   - Function ends. Local variables (tax, total, price) are destroyed.
//   - 108 lands in result.
//
// Line 8: log result → 108.
// Line 9: log tax → ReferenceError — tax was destroyed when the function finished.</code></pre>
  `,

  /* --- Chunk 2: The Click --- */

  /* 2.0 Debugging clue */
  'topics-0-21-2-0': `
    <p>If you get <code>ReferenceError: x is not defined</code> when trying to use a variable from a function, that variable was local — it died when the function ended.</p>
<pre class="language-javascript"><code class="language-javascript">function calculate() {
  const total = 100;
}

calculate();
console.log(total);        // ReferenceError — total was local

// fix 1: return it
function calculate() {
  const total = 100;
  return total;
}
const total = calculate();
console.log(total);

// fix 2: declare outside if you really need shared state
let total;
function calculate() {
  total = 100;
}</code></pre>

    <p>If a function isn't seeing changes you expect, you might be accidentally creating a NEW local variable instead of updating the outer one:</p>
<pre class="language-javascript"><code class="language-javascript">let count = 0;

function increment() {
  let count = count + 1;     // wrong — let creates a NEW local count
}

increment();
console.log(count);           // 0 — outer count never changed

// fix: drop the let — assign to the outer count
function increment() {
  count = count + 1;
}</code></pre>
  `,

  /* 2.1 The part that makes it click */
  'topics-0-21-2-1': `
    <p>Variables inside a function are private. Born when the function runs, gone when it ends.</p>
    <p>If you need a value to escape the function, <code>return</code> it. That's how the value crosses the boundary.</p>
  `,

  /* 2.2 Common confusions */
  'topics-0-21-2-2': `
    <p><strong>Confusion: parameters are local variables too</strong></p>
<pre class="language-javascript"><code class="language-javascript">function greet(name) {
  // name is a LOCAL variable here, only exists during this call
  console.log(name);
}

greet("Os");
console.log(name);    // not the parameter — ReferenceError or unrelated</code></pre>

    <p><strong>Confusion: variables don't carry between calls</strong></p>
<pre class="language-javascript"><code class="language-javascript">function counter() {
  let count = 0;
  count = count + 1;
  return count;
}

counter();    // 1
counter();    // 1 (NOT 2 — fresh count each time)
counter();    // 1

// fix: keep state OUTSIDE the function if it needs to persist
let count = 0;
function counter() {
  count = count + 1;
  return count;
}
counter();    // 1
counter();    // 2
counter();    // 3</code></pre>

    <p><strong>Confusion: inner functions CAN see outer variables (closures)</strong></p>
<pre class="language-javascript"><code class="language-javascript">function outer() {
  const message = "from outer";

  function inner() {
    console.log(message);   // works — inner sees outer's variables
  }

  inner();
}
outer();   // "from outer"</code></pre>
  `,

  /* 2.3 Common mistakes */
  'topics-0-21-2-3': `
<pre class="language-javascript"><code class="language-javascript">function calculate() {
  const total = 100;
}
calculate();
console.log(total);
// wrong: ReferenceError — total was local
// fix: return it
function calculate() {
  return 100;
}
const total = calculate();</code></pre>

<pre class="language-javascript"><code class="language-javascript">let count = 0;
function increment() {
  let count = count + 1;
}
// wrong: let creates a new local count, outer count never updates
// fix: drop the let
function increment() {
  count = count + 1;
}</code></pre>

<pre class="language-javascript"><code class="language-javascript">function greet() {
  message = "hi";    // forgot let/const — creates a global by accident
}
greet();
console.log(message);    // "hi" — leaked into global scope
// fix: always declare with let or const
function greet() {
  const message = "hi";
  return message;
}</code></pre>

<pre class="language-javascript"><code class="language-javascript">function counter() {
  let count = 0;
  count++;
  return count;
}
counter();    // 1
counter();    // 1 — count resets every call
// fix: keep count outside if you want it to persist
let count = 0;
function counter() {
  count++;
  return count;
}</code></pre>
  `,

  /* --- Chunk 3: In Practice --- */

  /* 3.0 Tiny examples */
  'topics-0-21-3-0': `
<pre class="language-javascript"><code class="language-javascript">// Local variables in a calculation
function add(a, b) {
  const sum = a + b;
  return sum;
}
add(2, 3);    // 5

// Each call gets its own scope
function makeMessage(name) {
  const message = "Hi " + name;
  return message;
}
makeMessage("Os");     // "Hi Os"
makeMessage("Sam");    // "Hi Sam" (separate message variable)

// Loop counter is local
function findFirst(arr, target) {
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] === target) return i;
  }
  return -1;
}

// Inner can see outer
function outer() {
  const x = 10;
  function inner() {
    return x * 2;     // works — inner sees outer's x
  }
  return inner();
}
outer();    // 20</code></pre>
  `,

  /* 3.1 Real website uses */
  'topics-0-21-3-1': `
    <p><strong>Example: form validation function with local helpers</strong></p>
<pre class="language-javascript"><code class="language-javascript">function validateForm(form) {
  const email = form.email.value.trim();
  const password = form.password.value;

  const isEmailValid = email.includes("@");
  const isPasswordLong = password.length >= 8;

  return isEmailValid && isPasswordLong;
}</code></pre>

    <p><strong>Example: event handler with local state</strong></p>
<pre class="language-javascript"><code class="language-javascript">submitBtn.addEventListener("click", () => {
  const formData = new FormData(form);
  const name = formData.get("name");
  const email = formData.get("email");

  saveUser({ name, email });
});</code></pre>

    <p><strong>Example: data transformation</strong></p>
<pre class="language-javascript"><code class="language-javascript">function buildUserCard(user) {
  const name = user.firstName + " " + user.lastName;
  const initials = user.firstName[0] + user.lastName[0];
  const html = \`
    &lt;div class="card"&gt;
      &lt;span class="initials"&gt;\${initials}&lt;/span&gt;
      &lt;span class="name"&gt;\${name}&lt;/span&gt;
    &lt;/div&gt;
  \`;
  return html;
}</code></pre>

    <p><strong>Example: each call totally independent</strong></p>
<pre class="language-javascript"><code class="language-javascript">function calculateOrder(items) {
  const subtotal = items.reduce((sum, i) => sum + i.price, 0);
  const tax = subtotal * 0.08;
  const total = subtotal + tax;
  return { subtotal, tax, total };
}

calculateOrder(cart1);   // its own subtotal, tax, total
calculateOrder(cart2);   // completely separate</code></pre>
  `,

  /* 3.2 Connects to */
  'topics-0-21-3-2': `
    <ul>
      <li><strong>Functions</strong> → the home for local variables</li>
      <li><strong>Scope</strong> → the rules for where variables can be reached</li>
      <li><strong>Parameters</strong> → also local variables, just delivered by the caller</li>
      <li><strong><code>return</code></strong> → how a value escapes a function's scope</li>
      <li><strong>Closures</strong> → inner functions remembering outer variables</li>
      <li><strong>Block scope</strong> → similar idea applied to <code>{ }</code> in general</li>
      <li><strong>Global scope</strong> → the opposite — variables visible everywhere</li>
    </ul>
  `,

  /* 3.3 See also */
  'topics-0-21-3-3': `
    <ul>
      <li>Functions (full topic)</li>
      <li>Scope</li>
      <li>Block scope</li>
      <li>Global scope</li>
      <li>Closures</li>
      <li>Parameters and arguments</li>
      <li><code>return</code> statement</li>
    </ul>
  `,


  /* ===== Sub-lesson: 3.1 Variables → variables outside functions =====
     Path: topics-0-22-{chunkIndex}-{pieceIndex}
  */

  /* --- Chunk 0: What & How --- */

  /* 0.0 What it is */
  'topics-0-22-0-0': `
    <p>Variables declared outside any function (at the top of your file or script) are accessible to every function in that file. They live for the whole life of the page.</p>
    <p>These are sometimes called <strong>module-level</strong> or <strong>top-level</strong> variables. If they're declared at the very top of an old-style script (with no module system), they're effectively <strong>global</strong> — visible everywhere.</p>
  `,

  /* 0.1 Syntax */
  'topics-0-22-0-1': `
<pre class="language-javascript"><code class="language-javascript">// At the top of your file — outside any function
const API_URL = "https://api.example.com";
let cartCount = 0;

function addToCart() {
  cartCount = cartCount + 1;       // function can read AND change top-level variables
  console.log(cartCount);
}

addToCart();
console.log(cartCount);             // 1 — accessible here too</code></pre>
  `,

  /* 0.2 Anatomy / Breakdown */
  'topics-0-22-0-2': `
<pre class="language-javascript"><code class="language-javascript">const API_URL = "https://api.example.com";
let cartCount = 0;

// const / let     → declares the variable
// API_URL         → name (accessible anywhere in this file)
// = "..."         → value
//
// Because the declaration is OUTSIDE any function or block,
// the variable is "top-level" — visible to every function below.</code></pre>
  `,

  /* 0.3 Syntax Details That Matter */
  'topics-0-22-0-3': `
    <p>Variables declared outside any function or block are visible to everything below them in the same file:</p>
<pre class="language-javascript"><code class="language-javascript">const API_URL = "https://api.example.com";

function fetchUsers() {
  console.log(API_URL);     // works
}

function fetchProducts() {
  console.log(API_URL);     // also works
}</code></pre>

    <p>Functions can both read and write top-level variables:</p>
<pre class="language-javascript"><code class="language-javascript">let cartCount = 0;

function addToCart() {
  cartCount = cartCount + 1;     // changes the top-level cartCount
}

addToCart();
addToCart();
console.log(cartCount);          // 2 — changes persist</code></pre>

    <p>Order matters — a function can only see variables declared <em>before</em> the function runs:</p>
<pre class="language-javascript"><code class="language-javascript">function showName() {
  console.log(userName);
}

showName();              // ReferenceError if userName not yet declared
const userName = "Os";
showName();              // "Os" — now works</code></pre>

    <p>If you forget <code>const</code>/<code>let</code>/<code>var</code>, you accidentally create a global — bad practice:</p>
<pre class="language-javascript"><code class="language-javascript">function setup() {
  config = { theme: "dark" };       // wrong: no keyword — leaks as a global
}

setup();
console.log(config);                  // accessible — but unintended

// fix: always use const or let
function setup() {
  const config = { theme: "dark" };
  return config;
}</code></pre>
  `,

  /* --- Chunk 1: Why & When --- */

  /* 1.0 What problem it solves */
  'topics-0-22-1-0': `
    <p>Some values need to be shared. Configuration, app state, references to elements, counters that update over time — these need to be visible to multiple functions, not trapped inside one.</p>
    <p>Top-level variables solve this. Declare them once at the top, every function can read and update them.</p>
  `,

  /* 1.1 Why use it */
  'topics-0-22-1-1': `
    <p>Use top-level variables for things multiple functions need to share:</p>
<pre class="language-javascript"><code class="language-javascript">// Configuration that doesn't change
const API_URL = "https://api.example.com";
const MAX_RETRIES = 3;

// State that changes over time
let cartCount = 0;
let isLoggedIn = false;
let currentUser = null;

// DOM references used in many handlers
const submitBtn = document.querySelector(".submit");
const errorMsg = document.querySelector(".error");

function login() {
  isLoggedIn = true;             // updates shared state
  submitBtn.disabled = false;    // uses shared element
}</code></pre>
    <p>If a value is only used inside one function, declare it <em>inside</em> that function instead. Don't pollute the top of your file with things that don't need to be shared.</p>
  `,

  /* 1.2 Where you use it */
  'topics-0-22-1-2': `
<pre class="language-javascript"><code class="language-javascript">// API config
const BASE_URL = "https://api.example.com";

// DOM references at the top of the file
const form = document.querySelector(".form");
const submitBtn = document.querySelector(".submit");

// App state
let isLoggedIn = false;
let cartItems = [];

// Functions below use these shared values
function login() {
  isLoggedIn = true;
}

function addToCart(item) {
  cartItems.push(item);
}

submitBtn.addEventListener("click", () => {
  // can use isLoggedIn, cartItems, BASE_URL — all top-level
});</code></pre>
  `,

  /* 1.3 Plain English explanation */
  'topics-0-22-1-3': `
    <p>A top-level variable is one declared at the top of your file — outside any function or block. Because nothing wraps it, it's visible to everything else in the file.</p>
    <p>Use them sparingly. Just because you <em>can</em> share a variable everywhere doesn't mean you should. Most variables should live inside the function that uses them.</p>
  `,

  /* 1.4 Mental model */
  'topics-0-22-1-4': `
    <p>Top-level variables sit on a shared shelf that every function can reach. Local variables sit inside individual rooms — only the function in that room can see them.</p>
<pre class="language-javascript"><code class="language-javascript">const sharedConfig = "I'm on the shelf — everyone can see me";

function room1() {
  const localToRoom1 = "only room1 can see me";
  console.log(sharedConfig);     // works — reaching out to the shelf
}

function room2() {
  console.log(sharedConfig);     // works — same shelf
  console.log(localToRoom1);     // ReferenceError — that's in room1, not here
}</code></pre>
  `,

  /* 1.5 Step-by-step walkthrough */
  'topics-0-22-1-5': `
<pre class="language-javascript"><code class="language-javascript">let cartCount = 0;

function addToCart() {
  cartCount = cartCount + 1;
}

addToCart();
addToCart();
console.log(cartCount);

// JavaScript is thinking:
// Line 1: declare cartCount at the top level. Set to 0.
// Line 3-5: declare addToCart function. Don't run it yet.
//
// Line 7: call addToCart().
//   - Look up cartCount → 0 (top-level).
//   - Add 1 → 1. Update cartCount to 1.
//   - Function ends. cartCount stays at 1 (it's top-level).
//
// Line 8: call addToCart() again.
//   - Look up cartCount → 1 (still the same top-level variable).
//   - Add 1 → 2. Update cartCount to 2.
//
// Line 9: log cartCount → 2.</code></pre>
  `,

  /* --- Chunk 2: The Click --- */

  /* 2.0 Debugging clue */
  'topics-0-22-2-0': `
    <p>If a top-level variable isn't updating the way you expect, check whether a function is accidentally creating a local one with the same name:</p>
<pre class="language-javascript"><code class="language-javascript">let count = 0;

function increment() {
  let count = count + 1;       // wrong: let creates a NEW local count
}

increment();
console.log(count);              // 0 — outer count never changed

// fix: drop the let to use the outer one
function increment() {
  count = count + 1;
}</code></pre>

    <p>If you accidentally created a global by forgetting <code>let</code>/<code>const</code>, you'll get strange behavior — something is updating that variable from places you don't expect:</p>
<pre class="language-javascript"><code class="language-javascript">function setup() {
  config = { theme: "dark" };    // forgot const — leaks as a global
}

// elsewhere in your code:
console.log(config);              // unexpectedly accessible

// fix: always declare with const or let
function setup() {
  const config = { theme: "dark" };
  return config;
}</code></pre>
  `,

  /* 2.1 The part that makes it click */
  'topics-0-22-2-1': `
    <p>Top-level variables are accessible everywhere in the file. That power comes with responsibility — the more variables you put at the top, the more places can change them, and the harder it is to track what changed what.</p>
    <p>Default to local. Reach for top-level only when something genuinely needs to be shared.</p>
  `,

  /* 2.2 Common confusions */
  'topics-0-22-2-2': `
    <p><strong>Confusion: top-level vs local with same name</strong></p>
<pre class="language-javascript"><code class="language-javascript">let count = 0;

function reset() {
  let count = 100;     // creates a NEW local count (unrelated to the outer one)
  console.log(count);   // 100
}

reset();
console.log(count);     // 0 — outer count untouched</code></pre>

    <p><strong>Confusion: order of declaration</strong></p>
<pre class="language-javascript"><code class="language-javascript">function showName() {
  console.log(userName);    // tries to find userName
}

showName();                  // ReferenceError — userName not declared yet
const userName = "Os";

// Fix: declare top-level variables BEFORE functions that use them.</code></pre>

    <p><strong>Confusion: global vs module-level</strong></p>
<pre class="language-javascript"><code class="language-javascript">// In an old script tag — top-level variables become global (window.x)
// In a module (&lt;script type="module"&gt;) — top-level is module-scoped, not global

const API_URL = "...";    // module-level, only this file can use it (in modules)
                           // global, anywhere in the page (in old scripts)</code></pre>

    <p><strong>Confusion: shared vs duplicated</strong></p>
<pre class="language-javascript"><code class="language-javascript">let cartCount = 0;

function add1() { cartCount = cartCount + 1; }
function add2() { cartCount = cartCount + 1; }

add1();    // cartCount → 1
add2();    // cartCount → 2 — same variable, both functions saw the update</code></pre>
  `,

  /* 2.3 Common mistakes */
  'topics-0-22-2-3': `
<pre class="language-javascript"><code class="language-javascript">let count = 0;
function increment() {
  let count = count + 1;
}
// wrong: creates new local count instead of updating outer
// fix: drop the let
function increment() {
  count = count + 1;
}</code></pre>

<pre class="language-javascript"><code class="language-javascript">function setup() {
  config = { theme: "dark" };
}
// wrong: forgot const — leaks as global by accident
// fix:
function setup() {
  const config = { theme: "dark" };
  return config;
}</code></pre>

<pre class="language-javascript"><code class="language-javascript">function fetch() {
  console.log(API_URL);
}
fetch();
const API_URL = "...";
// wrong: API_URL not yet declared when fetch ran
// fix: declare top-level vars BEFORE functions that use them</code></pre>

<pre class="language-javascript"><code class="language-javascript">// Cluttering the top with one-time-use variables
const tempData = items.filter(i => i.active);
const sortedTemp = tempData.sort();
const finalResult = sortedTemp.slice(0, 5);
// these don't need to be top-level
// fix: bundle them inside a function
function getTopFive(items) {
  return items.filter(i => i.active).sort().slice(0, 5);
}</code></pre>
  `,

  /* --- Chunk 3: In Practice --- */

  /* 3.0 Tiny examples */
  'topics-0-22-3-0': `
<pre class="language-javascript"><code class="language-javascript">// Configuration shared across the file
const API_URL = "https://api.example.com";
const MAX_ITEMS = 10;

// State that updates
let cartCount = 0;

function addToCart() {
  cartCount = cartCount + 1;
}

addToCart();
console.log(cartCount);   // 1

// DOM references shared across handlers
const button = document.querySelector(".btn");
const message = document.querySelector(".msg");

button.addEventListener("click", () => {
  message.textContent = "Clicked!";
});</code></pre>
  `,

  /* 3.1 Real website uses */
  'topics-0-22-3-1': `
    <p><strong>Example: shared configuration constants</strong></p>
<pre class="language-javascript"><code class="language-javascript">// At top of script
const API_BASE = "https://api.example.com";
const TAX_RATE = 0.08;
const MAX_RETRIES = 3;

// Used by many functions below
async function fetchUsers() {
  return fetch(\`\${API_BASE}/users\`);
}

async function fetchProducts() {
  return fetch(\`\${API_BASE}/products\`);
}

function calculateTotal(price) {
  return price + price * TAX_RATE;
}</code></pre>

    <p><strong>Example: app state that multiple functions update</strong></p>
<pre class="language-javascript"><code class="language-javascript">let isMenuOpen = false;
let cartItems = [];
let currentUser = null;

hamburgerBtn.addEventListener("click", () => {
  isMenuOpen = !isMenuOpen;
  menu.classList.toggle("open");
});

addToCartBtn.addEventListener("click", (e) => {
  cartItems.push(e.target.dataset.id);
});

loginBtn.addEventListener("click", async () => {
  currentUser = await login();
});</code></pre>

    <p><strong>Example: DOM references at the top</strong></p>
<pre class="language-javascript"><code class="language-javascript">const form = document.querySelector(".signup");
const emailInput = document.querySelector("#email");
const submitBtn = document.querySelector(".submit");
const errorMsg = document.querySelector(".error");

// All functions can use them
emailInput.addEventListener("input", validate);
submitBtn.addEventListener("click", submit);

function validate() {
  if (!emailInput.value.includes("@")) {
    errorMsg.textContent = "Invalid email";
  }
}

function submit() {
  // ...
}</code></pre>
  `,

  /* 3.2 Connects to */
  'topics-0-22-3-2': `
    <ul>
      <li><strong>Variables inside functions</strong> → the local opposite</li>
      <li><strong>Scope</strong> → the rules that determine where variables can be reached</li>
      <li><strong>Global scope</strong> → the wider scope when not in a module</li>
      <li><strong>Modules</strong> → top-level variables are scoped to the module file</li>
      <li><strong>State</strong> → top-level variables often hold app state</li>
      <li><strong>Configuration</strong> → constants used across the file</li>
    </ul>
  `,

  /* 3.3 See also */
  'topics-0-22-3-3': `
    <ul>
      <li>Variables inside functions</li>
      <li>Scope basics</li>
      <li>Global scope</li>
      <li>Module scope</li>
      <li>Hoisting</li>
      <li>Configuration constants</li>
      <li>App state patterns</li>
    </ul>
  `,


  /* ===== Sub-lesson: 3.1 Variables → scope basics =====
     Path: topics-0-23-{chunkIndex}-{pieceIndex}
  */

  /* --- Chunk 0: What & How --- */

  /* 0.0 What it is */
  'topics-0-23-0-0': `
    <p>Scope is the rule that decides where in your code a variable can be reached. Every variable has a territory — outside that territory, the name doesn't exist.</p>
    <p>The simple rule: variables only live inside the closest pair of curly braces <code>{ }</code> they were declared in (for <code>let</code> and <code>const</code>). If they were declared outside any braces, they're visible to the whole file.</p>
  `,

  /* 0.1 Syntax */
  'topics-0-23-0-1': `
<pre class="language-javascript"><code class="language-javascript">const globalName = "Os";   // outside everything → top-level scope

function greet() {
  const localName = "Sam";  // inside function → function scope
  console.log(globalName);   // works — can see outer
  console.log(localName);    // works — same scope
}

greet();
console.log(globalName);     // works — top-level
console.log(localName);      // ReferenceError — out of scope here</code></pre>
  `,

  /* 0.2 Anatomy / Breakdown */
  'topics-0-23-0-2': `
<pre class="language-javascript"><code class="language-javascript">function example() {
  const local = "I live here";

  if (true) {
    const blockOnly = "I live in this if block";
    console.log(local);          // works — outer function scope
    console.log(blockOnly);      // works — same block
  }

  console.log(blockOnly);        // ReferenceError — out of scope
}

// Each set of { } creates a new scope.
// Variables declared inside that { } only live inside it.
// Code OUTSIDE the { } can't reach them.</code></pre>
  `,

  /* 0.3 Syntax Details That Matter */
  'topics-0-23-0-3': `
    <p><code>let</code> and <code>const</code> are block-scoped — they only live inside the closest <code>{ }</code>:</p>
<pre class="language-javascript"><code class="language-javascript">if (true) {
  let x = 5;
  const y = 10;
}
console.log(x);    // ReferenceError — out of scope
console.log(y);    // ReferenceError — out of scope</code></pre>

    <p>Functions create their own scope every time they run:</p>
<pre class="language-javascript"><code class="language-javascript">function greet() {
  const message = "Hi";
}

greet();
console.log(message);    // ReferenceError</code></pre>

    <p>Loops create a fresh scope for each iteration when you use <code>let</code>:</p>
<pre class="language-javascript"><code class="language-javascript">for (let i = 0; i < 3; i++) {
  // i exists only inside this loop
}
console.log(i);    // ReferenceError</code></pre>

    <p>Inner scopes can see outer scopes, but not the other way around:</p>
<pre class="language-javascript"><code class="language-javascript">const outer = "outer";

function example() {
  const inner = "inner";
  console.log(outer);     // works — inner can see outer
  console.log(inner);     // works
}

console.log(outer);       // works
console.log(inner);       // ReferenceError — outer can't see inner</code></pre>

    <p><code>var</code> ignores blocks — it's function-scoped, not block-scoped:</p>
<pre class="language-javascript"><code class="language-javascript">if (true) {
  var x = 5;       // var ignores the if block
  let y = 10;
}
console.log(x);    // 5 — var leaked out
console.log(y);    // ReferenceError — let stayed inside</code></pre>
  `,

  /* --- Chunk 1: Why & When --- */

  /* 1.0 What problem it solves */
  'topics-0-23-1-0': `
    <p>Without scope, every variable would be visible to every line of code. Two functions using <code>i</code> for a loop counter would step on each other. Helper variables would clutter your whole file. Bugs would multiply as code grew.</p>
    <p>Scope keeps variables in their lane. A function's variables are <em>its</em> business. The rest of the code doesn't know they exist.</p>
  `,

  /* 1.1 Why use it */
  'topics-0-23-1-1': `
    <p>You don't really "use" scope — it's how JavaScript works. But understanding it lets you:</p>
<pre class="language-javascript"><code class="language-javascript">// 1. Keep variables small and contained
function calculate() {
  const tax = 0.08;       // only this function needs it
  const total = 100 + 100 * tax;
  return total;
}

// 2. Reuse the same name in different scopes safely
function loopOne() {
  for (let i = 0; i < 10; i++) {}    // this i
}
function loopTwo() {
  for (let i = 0; i < 5; i++) {}      // a different i — no conflict
}

// 3. Hide implementation details
function buildCart() {
  const items = [];        // private to this function
  // ...
  return items;
}</code></pre>
  `,

  /* 1.2 Where you use it */
  'topics-0-23-1-2': `
<pre class="language-javascript"><code class="language-javascript">// Function scope — variables inside the function
function calculate() {
  const tax = 0.08;
  const total = 100 + 100 * tax;
  return total;
}

// Block scope — variables inside if/for/etc
if (loggedIn) {
  const welcome = "Hi there";
  console.log(welcome);
}
// welcome doesn't exist out here

// Loop scope
for (let i = 0; i < 5; i++) {
  console.log(i);
}
// i doesn't exist out here

// Top-level scope (file-wide)
const API_URL = "https://api.example.com";
function fetchUsers() {
  console.log(API_URL);   // visible everywhere in this file
}</code></pre>
  `,

  /* 1.3 Plain English explanation */
  'topics-0-23-1-3': `
    <p>Every variable lives in a "room" — the nearest pair of <code>{ }</code> around its declaration. Code in the same room can use it. Code in other rooms can't.</p>
    <p>Inner rooms can see out (they can use variables from rooms wrapping them). Outer rooms can't see in.</p>
  `,

  /* 1.4 Mental model */
  'topics-0-23-1-4': `
    <p>Picture nested boxes. Each set of <code>{ }</code> is a box. Variables declared inside a box are only visible inside that box.</p>
<pre class="language-javascript"><code class="language-javascript">const a = "outer";

function outer() {
  const b = "middle";

  if (true) {
    const c = "inner";

    // here: a, b, c all visible
  }

  // here: a and b visible, c is gone
}

// here: only a is visible</code></pre>
    <p>Each level can see itself and everything wrapping it. Each level CANNOT see things nested inside it.</p>
  `,

  /* 1.5 Step-by-step walkthrough */
  'topics-0-23-1-5': `
<pre class="language-javascript"><code class="language-javascript">const globalX = "global";

function example() {
  const localX = "local";
  console.log(globalX);
  console.log(localX);
}

example();
console.log(globalX);
console.log(localX);

// JavaScript is thinking:
// Line 1: declare globalX in top-level scope.
// Line 3-7: declare example function. Don't run yet.
//
// Line 9: call example().
//   - Create function scope.
//   - Declare localX in this scope.
//   - log globalX → look up in nested scopes → found at top level → "global".
//   - log localX → found in current scope → "local".
//   - Function ends, function scope is destroyed (localX gone).
//
// Line 10: log globalX → still in top-level scope → "global".
// Line 11: log localX → not in any active scope → ReferenceError.</code></pre>
  `,

  /* --- Chunk 2: The Click --- */

  /* 2.0 Debugging clue */
  'topics-0-23-2-0': `
    <p>If you see <code>ReferenceError: x is not defined</code>, you're trying to use a variable outside its scope. Either it was never declared, or it was declared inside a smaller scope you've already left.</p>
<pre class="language-javascript"><code class="language-javascript">function setup() {
  const config = { theme: "dark" };
}

setup();
console.log(config);    // ReferenceError — config was local to setup()

// fix: return it
function setup() {
  const config = { theme: "dark" };
  return config;
}
const config = setup();</code></pre>

    <p>If a value is wrong, check whether you accidentally created a NEW variable with the same name in a smaller scope:</p>
<pre class="language-javascript"><code class="language-javascript">let count = 0;

function increment() {
  let count = count + 1;     // wrong: NEW local count
  console.log(count);          // logs 1, but outer count never changed
}

increment();
console.log(count);    // 0

// fix: drop the inner let
function increment() {
  count = count + 1;
}</code></pre>

    <p>Block-scoped variables in loops can surprise you if you expect them to leak out:</p>
<pre class="language-javascript"><code class="language-javascript">for (let i = 0; i < 5; i++) {
  // ...
}
console.log(i);     // ReferenceError — let stays inside the loop

// If you actually need i out here:
let i;
for (i = 0; i < 5; i++) {
  // ...
}
console.log(i);     // 5</code></pre>
  `,

  /* 2.1 The part that makes it click */
  'topics-0-23-2-1': `
    <p>Variables aren't everywhere. They live in the nearest <code>{ }</code> and die when those braces close.</p>
    <p>Inner can see out. Outer can't see in. Function scope and block scope follow this same rule.</p>
  `,

  /* 2.2 Common confusions */
  'topics-0-23-2-2': `
    <p><strong>Confusion: <code>let</code>/<code>const</code> are block-scoped, <code>var</code> isn't</strong></p>
<pre class="language-javascript"><code class="language-javascript">if (true) {
  let a = 1;
  const b = 2;
  var c = 3;
}

console.log(a);    // ReferenceError
console.log(b);    // ReferenceError
console.log(c);    // 3 — var leaked out</code></pre>

    <p><strong>Confusion: same name in different scopes</strong></p>
<pre class="language-javascript"><code class="language-javascript">const x = "outer";

function example() {
  const x = "inner";       // a NEW x — doesn't conflict
  console.log(x);           // "inner" — uses the closer one
}

example();
console.log(x);             // "outer" — outer x is unchanged

// This is called "variable shadowing" — the inner x shadows the outer one.</code></pre>

    <p><strong>Confusion: function calls don't share scope</strong></p>
<pre class="language-javascript"><code class="language-javascript">function counter() {
  let n = 0;
  n = n + 1;
  return n;
}

counter();    // 1
counter();    // 1 — fresh n each call (NOT 2)</code></pre>

    <p><strong>Confusion: loops with <code>let</code> create a new scope per iteration</strong></p>
<pre class="language-javascript"><code class="language-javascript">for (let i = 0; i < 3; i++) {
  setTimeout(() => console.log(i), 100);
}
// logs 0, 1, 2 — each iteration's i is captured separately

for (var i = 0; i < 3; i++) {
  setTimeout(() => console.log(i), 100);
}
// logs 3, 3, 3 — var has one shared i</code></pre>
  `,

  /* 2.3 Common mistakes */
  'topics-0-23-2-3': `
<pre class="language-javascript"><code class="language-javascript">if (loggedIn) {
  let userName = "Os";
}
console.log(userName);
// wrong: userName is block-scoped to the if
// fix: declare outside if you need it elsewhere
let userName = "";
if (loggedIn) {
  userName = "Os";
}
console.log(userName);</code></pre>

<pre class="language-javascript"><code class="language-javascript">function setup() {
  const config = { theme: "dark" };
}
console.log(config);
// wrong: config is local to setup
// fix: return it
function setup() {
  return { theme: "dark" };
}
const config = setup();</code></pre>

<pre class="language-javascript"><code class="language-javascript">let count = 0;
function increment() {
  let count = count + 1;
}
// wrong: creates new local count
// fix: drop the let
function increment() {
  count = count + 1;
}</code></pre>

<pre class="language-javascript"><code class="language-javascript">for (let i = 0; i < 5; i++) {}
console.log(i);
// wrong: i doesn't exist out here
// fix: declare i outside if you need it after
let i;
for (i = 0; i < 5; i++) {}
console.log(i);   // 5</code></pre>

<pre class="language-javascript"><code class="language-javascript">function setup() {
  config = { theme: "dark" };
}
// wrong: forgot const — leaks as global
// fix: always declare with const or let
function setup() {
  const config = { theme: "dark" };
  return config;
}</code></pre>
  `,

  /* --- Chunk 3: In Practice --- */

  /* 3.0 Tiny examples */
  'topics-0-23-3-0': `
<pre class="language-javascript"><code class="language-javascript">// Function scope
function calc() {
  const x = 10;
  return x * 2;
}
calc();          // 20
// x doesn't exist out here

// Block scope
if (true) {
  const inside = "hi";
}
// inside doesn't exist out here

// Loop scope
for (let i = 0; i < 3; i++) {
  console.log(i);   // 0, 1, 2
}
// i doesn't exist out here

// Inner reads outer
const greeting = "Hi";
function greet() {
  console.log(greeting);   // works
}
greet();

// Same name, different scopes
const x = "outer";
function inner() {
  const x = "inner";
  console.log(x);    // "inner" — closer one wins
}
inner();
console.log(x);      // "outer"</code></pre>
  `,

  /* 3.1 Real website uses */
  'topics-0-23-3-1': `
    <p><strong>Example: keeping helper variables out of the global scope</strong></p>
<pre class="language-javascript"><code class="language-javascript">function processOrder(items) {
  const subtotal = items.reduce((sum, i) => sum + i.price, 0);
  const tax = subtotal * 0.08;
  const total = subtotal + tax;
  return total;
}

// subtotal, tax, total are all local — no global pollution</code></pre>

    <p><strong>Example: each event handler with its own scope</strong></p>
<pre class="language-javascript"><code class="language-javascript">submitBtn.addEventListener("click", (e) => {
  const formData = new FormData(form);
  const userInput = formData.get("name");
  // formData and userInput are local to this handler
  saveUser(userInput);
});</code></pre>

    <p><strong>Example: loop counter contained to the loop</strong></p>
<pre class="language-javascript"><code class="language-javascript">const items = ["apple", "banana", "cherry"];

for (let i = 0; i < items.length; i++) {
  const item = items[i];
  renderItem(item);
}

// i and item are gone — no chance of reusing them by mistake</code></pre>

    <p><strong>Example: hiding implementation in a function</strong></p>
<pre class="language-javascript"><code class="language-javascript">function buildCard(user) {
  const initials = user.firstName[0] + user.lastName[0];
  const fullName = \`\${user.firstName} \${user.lastName}\`;
  const html = \`&lt;div class="card"&gt;\${fullName} (\${initials})&lt;/div&gt;\`;
  return html;
}

// initials, fullName, html — all local. The function only exposes its return value.</code></pre>
  `,

  /* 3.2 Connects to */
  'topics-0-23-3-2': `
    <ul>
      <li><strong>Variables inside functions</strong> → the most common scope rule in practice</li>
      <li><strong>Variables outside functions</strong> → top-level scope, accessible everywhere</li>
      <li><strong>Block scope</strong> → the rules for <code>{ }</code> blocks</li>
      <li><strong>Function scope</strong> → the rules for function bodies</li>
      <li><strong>let / const / var</strong> → block-scoped vs function-scoped</li>
      <li><strong>Closures</strong> → inner functions remembering outer scope</li>
      <li><strong>ReferenceError</strong> → the error when you reach outside scope</li>
    </ul>
  `,

  /* 3.3 See also */
  'topics-0-23-3-3': `
    <ul>
      <li>Block scope</li>
      <li>Function scope</li>
      <li>Global scope</li>
      <li>Module scope</li>
      <li>Closures</li>
      <li>Variable shadowing</li>
      <li>Hoisting</li>
      <li>Temporal Dead Zone</li>
    </ul>
  `,


  /* ===== Sub-lesson: 3.1 Variables → common mistakes =====
     Path: topics-0-24-{chunkIndex}-{pieceIndex}
  */

  /* --- Chunk 0: What & How --- */

  /* 0.0 What it is */
  'topics-0-24-0-0': `
    <p>This is a roundup of the most common mistakes beginners make with variables — and how to fix each one.</p>
    <p>Most variable bugs come from a small set of repeating patterns. Knowing them in advance saves hours of confused debugging later.</p>
  `,

  /* 0.1 Syntax */
  'topics-0-24-0-1': `
<pre class="language-javascript"><code class="language-javascript">// The seven most common variable mistakes:

// 1. Forgetting const/let
score = 100;                         // creates a global by accident

// 2. Trying to reassign a const
const x = 5;
x = 10;                              // TypeError

// 3. Redeclaring with let
let x = 5;
let x = 10;                          // SyntaxError

// 4. Typo in the variable name
const userName = "Os";
console.log(username);               // ReferenceError or undefined

// 5. Using before declaring
console.log(name);
let name = "Os";                     // ReferenceError

// 6. Confusing = and ===
if (x = 10) {}                       // assigns instead of comparing

// 7. Forgetting that const allows internal mutation
const user = { name: "Os" };
user.name = "Sam";                   // this WORKS — surprises some beginners</code></pre>
  `,

  /* 0.2 Anatomy / Breakdown */
  'topics-0-24-0-2': `
<pre class="language-javascript"><code class="language-javascript">score = 100;
// no const, no let
// = before any declaration keyword
// → JavaScript creates a GLOBAL variable by accident

// vs

const score = 100;
// const     → properly declares the variable
// score     → name
// =         → assignment
// 100       → value
// ;         → ends the statement

// The keyword is what distinguishes a declaration from an accidental global.</code></pre>
  `,

  /* 0.3 Syntax Details That Matter */
  'topics-0-24-0-3': `
    <p>Always start with a keyword. No exceptions:</p>
<pre class="language-javascript"><code class="language-javascript">score = 100;            // wrong — no keyword
const score = 100;       // correct
let score = 100;          // correct (if you'll reassign)</code></pre>

    <p>Use <code>===</code> for comparing, <code>=</code> for assigning. They're easy to mix up:</p>
<pre class="language-javascript"><code class="language-javascript">if (x === 10) { }       // correct: comparing
if (x = 10) { }          // wrong: assigning, then checking truthiness</code></pre>

    <p>Match casing exactly. <code>userName</code> is not the same as <code>username</code> or <code>UserName</code>:</p>
<pre class="language-javascript"><code class="language-javascript">const userName = "Os";

console.log(userName);      // works
console.log(username);      // ReferenceError
console.log(UserName);      // ReferenceError</code></pre>

    <p><code>const</code> protects the variable, not its contents. Modifying object/array contents is allowed:</p>
<pre class="language-javascript"><code class="language-javascript">const user = { name: "Os" };
user.name = "Sam";          // allowed — changing INSIDE the object
user = { name: "Sam" };      // wrong — reassigning the variable</code></pre>
  `,

  /* --- Chunk 1: Why & When --- */

  /* 1.0 What problem it solves */
  'topics-0-24-1-0': `
    <p>Most variable bugs are silent. JavaScript doesn't always warn you. A typo gives you a different variable. A missing keyword creates a global. A <code>=</code> instead of <code>===</code> makes your <code>if</code> always true.</p>
    <p>Knowing these patterns before they hit you turns "what's wrong with my code?" into "oh, I know what this is."</p>
  `,

  /* 1.1 Why use it */
  'topics-0-24-1-1': `
    <p>Train yourself to spot these patterns. When something feels off, scan for these first:</p>
<pre class="language-javascript"><code class="language-javascript">// Pattern 1: typo in name
const userName = "Os";
console.log(username);             // ReferenceError or undefined

// Pattern 2: missing keyword
score = 100;                       // accidental global

// Pattern 3: const reassignment
const x = 5;
x = 10;                            // TypeError

// Pattern 4: = vs ===
if (x = 10) { }                    // always true!

// Pattern 5: using before declaring
console.log(name);
const name = "Os";                 // ReferenceError</code></pre>
  `,

  /* 1.2 Where you use it */
  'topics-0-24-1-2': `
    <p>These mistakes can show up anywhere. Some hot spots:</p>
<pre class="language-javascript"><code class="language-javascript">// Inside event handlers — easy to typo or forget keywords
btn.addEventListener("click", () => {
  count = count + 1;        // forgot let — creates global
});

// In if statements — = vs === confusion
if (status = "active") { }   // wrong: assigns and always runs

// When refactoring — leftover variables, redeclarations
let total = 0;
// ... code ...
let total = 100;             // SyntaxError

// Working with objects — assuming const freezes everything
const config = { theme: "dark" };
config.theme = "light";       // works, even though const

// Using API data — typing properties wrong
const user = { firstName: "Os" };
console.log(user.firstname);  // undefined — case mismatch</code></pre>
  `,

  /* 1.3 Plain English explanation */
  'topics-0-24-1-3': `
    <p>Variables follow strict rules: they have to be declared before use, names have to match exactly, <code>const</code> can't be reassigned, <code>=</code> isn't <code>===</code>.</p>
    <p>Almost every variable-related bug is one of those rules being broken. When something doesn't work, run through the list before going deeper.</p>
  `,

  /* 1.4 Mental model */
  'topics-0-24-1-4': `
    <p>Most beginner bugs cluster around two themes:</p>
<pre class="language-javascript"><code class="language-javascript">// Theme 1: identity mistakes
//   - typos
//   - wrong casing
//   - wrong scope
// "JavaScript can't find the variable I meant."

const userName = "Os";
console.log(username);    // typo → ReferenceError or undefined


// Theme 2: lifecycle mistakes
//   - using before declaring
//   - reassigning a const
//   - accidentally creating a global
// "I broke a rule about when/how a variable can change."

const x = 5;
x = 10;                    // can't reassign const</code></pre>
    <p>If you can sort your bug into one of those themes, you're 80% of the way to fixing it.</p>
  `,

  /* 1.5 Step-by-step walkthrough */
  'topics-0-24-1-5': `
<pre class="username-javascript"><code class="language-javascript">// Working through a typical bug:

// You wrote:
const userName = "Os";
console.log(usernameValue);

// Browser says:
// ReferenceError: usernameValue is not defined

// Step 1: read the error literally.
//   It's saying "I have no variable called usernameValue."

// Step 2: search your code for that name.
//   You don't see usernameValue anywhere.

// Step 3: check the closest variables.
//   You have userName — close but different.

// Step 4: fix the typo.
console.log(userName);   // works</code></pre>
  `,

  /* --- Chunk 2: The Click --- */

  /* 2.0 Debugging clue */
  'topics-0-24-2-0': `
    <p>The fastest way to debug a variable issue: <code>console.log</code> the variable AND its <code>typeof</code>:</p>
<pre class="language-javascript"><code class="language-javascript">const userName = "Os";
console.log(userName);              // see the value
console.log(typeof userName);       // see the type</code></pre>

    <p>Read errors literally. They almost always point straight at the problem:</p>
<pre class="language-javascript"><code class="language-javascript">// "ReferenceError: x is not defined"
// → variable doesn't exist (typo, wrong scope, or never declared)

// "TypeError: Assignment to constant variable"
// → you tried to reassign a const

// "SyntaxError: Identifier 'x' has already been declared"
// → already declared in this scope, drop the second let/const

// "Cannot access 'x' before initialization"
// → using a let/const before its declaration line ran</code></pre>
  `,

  /* 2.1 The part that makes it click */
  'topics-0-24-2-1': `
    <p>Most variable bugs are typos, missing keywords, or rule violations. Read the error literally — JavaScript usually tells you exactly what's wrong.</p>
    <p>If you can't find a variable, it's almost always: misspelled, wrong case, or out of scope.</p>
  `,

  /* 2.2 Common confusions */
  'topics-0-24-2-2': `
    <p><strong>Confusion: ReferenceError vs undefined</strong></p>
<pre class="language-javascript"><code class="language-javascript">let a;
console.log(a);    // undefined — variable EXISTS, no value
console.log(b);    // ReferenceError — variable doesn't exist at all</code></pre>

    <p><strong>Confusion: const blocks reassignment, not internal change</strong></p>
<pre class="language-javascript"><code class="language-javascript">const obj = { x: 1 };
obj.x = 2;             // works — modifying inside
obj = { x: 2 };        // wrong — reassigning the variable</code></pre>

    <p><strong>Confusion: redeclaring vs reassigning</strong></p>
<pre class="language-javascript"><code class="language-javascript">let count = 0;
let count = 5;       // wrong — redeclaring
count = 5;           // right — reassigning</code></pre>

    <p><strong>Confusion: <code>=</code> vs <code>==</code> vs <code>===</code></strong></p>
<pre class="language-javascript"><code class="language-javascript">x = 5;        // assigns
x == 5;       // compares (loose, type-coercing)
x === 5;      // compares (strict — what you usually want)</code></pre>
  `,

  /* 2.3 Common mistakes */
  'topics-0-24-2-3': `
<pre class="language-javascript"><code class="language-javascript">score = 100;
// wrong: no const/let — accidental global
// fix:
const score = 100;</code></pre>

<pre class="language-javascript"><code class="language-javascript">const x = 5;
x = 10;
// wrong: TypeError — can't reassign const
// fix: use let if it needs to change
let x = 5;
x = 10;</code></pre>

<pre class="language-javascript"><code class="language-javascript">let count = 0;
let count = 5;
// wrong: SyntaxError — already declared
// fix: drop the second let
count = 5;</code></pre>

<pre class="language-javascript"><code class="language-javascript">const userName = "Os";
console.log(username);
// wrong: typo — different variable
// fix: match the exact name
console.log(userName);</code></pre>

<pre class="language-javascript"><code class="language-javascript">console.log(name);
let name = "Os";
// wrong: using before declaring
// fix: declare first
let name = "Os";
console.log(name);</code></pre>

<pre class="language-javascript"><code class="language-javascript">if (x = 10) { }
// wrong: this assigns, doesn't compare
// fix:
if (x === 10) { }</code></pre>

<pre class="language-javascript"><code class="language-javascript">const user = { name: "Os" };
user = { name: "Sam" };
// wrong: reassigning a const
// fix: modify properties or use let
user.name = "Sam";</code></pre>
  `,

  /* --- Chunk 3: In Practice --- */

  /* 3.0 Tiny examples */
  'topics-0-24-3-0': `
<pre class="language-javascript"><code class="language-javascript">// Wrong / right pairs for the most common mistakes:

// Forgetting the keyword
score = 100;                  // wrong
const score = 100;             // right

// Reassigning a const
const x = 5;
x = 10;                        // wrong
let x = 5;                     // right (if it needs to change)
x = 10;

// Typo
const userName = "Os";
console.log(username);          // wrong
console.log(userName);          // right

// = instead of ===
if (x = 10) {}                 // wrong
if (x === 10) {}               // right</code></pre>
  `,

  /* 3.1 Real website uses */
  'topics-0-24-3-1': `
    <p><strong>Example: catching a typo in form code</strong></p>
<pre class="language-javascript"><code class="language-javascript">const emailInput = document.querySelector("#email");

// Bug: typed "emailinput" instead of "emailInput"
console.log(emailinput.value);
// ReferenceError: emailinput is not defined

// Fix: match exact casing
console.log(emailInput.value);</code></pre>

    <p><strong>Example: trying to reassign a const that holds a DOM element</strong></p>
<pre class="language-javascript"><code class="language-javascript">const button = document.querySelector(".btn");

// Bug: tried to swap to a different button
button = document.querySelector(".other-btn");
// TypeError: Assignment to constant variable

// Fix: use a different variable name
const otherButton = document.querySelector(".other-btn");</code></pre>

    <p><strong>Example: <code>=</code> vs <code>===</code> in an if</strong></p>
<pre class="language-javascript"><code class="language-javascript">// Bug: assignment inside if always runs the block
if (status = "active") {
  // always runs, regardless of status
}

// Fix:
if (status === "active") {
  // runs only when status is actually "active"
}</code></pre>

    <p><strong>Example: forgetting <code>const</code> in an event handler</strong></p>
<pre class="language-javascript"><code class="language-javascript">btn.addEventListener("click", () => {
  count = count + 1;     // wrong — accidentally creates a global
});

// Fix: declare count somewhere with let/const
let count = 0;
btn.addEventListener("click", () => {
  count = count + 1;
});</code></pre>
  `,

  /* 3.2 Connects to */
  'topics-0-24-3-2': `
    <ul>
      <li><strong>Declaring a variable</strong> → most mistakes start at declaration</li>
      <li><strong>Reassigning</strong> → const reassignment is a top-3 mistake</li>
      <li><strong>Naming variables</strong> → typos and casing cause many bugs</li>
      <li><strong>Scope</strong> → "out of scope" errors can look like missing variables</li>
      <li><strong><code>===</code></strong> → easy to confuse with <code>=</code></li>
      <li><strong>Debugging variables</strong> → the next sub-lesson, fixing what you spot</li>
    </ul>
  `,

  /* 3.3 See also */
  'topics-0-24-3-3': `
    <ul>
      <li>Debugging variables</li>
      <li>ReferenceError</li>
      <li>TypeError</li>
      <li>SyntaxError</li>
      <li><code>typeof</code> operator</li>
      <li>Strict equality (<code>===</code>)</li>
      <li><code>const</code> and immutability</li>
    </ul>
  `,


  /* ===== Sub-lesson: 3.1 Variables → debugging variables =====
     Path: topics-0-25-{chunkIndex}-{pieceIndex}
  */

  /* --- Chunk 0: What & How --- */

  /* 0.0 What it is */
  'topics-0-25-0-0': `
    <p>Debugging variables means figuring out what's actually inside a variable when your code isn't doing what you expect.</p>
    <p>Most variable bugs come down to one question: <em>"What value is in this variable, right now, at this line?"</em> The tools to answer that are simple — but knowing how to use them well saves hours.</p>
  `,

  /* 0.1 Syntax */
  'topics-0-25-0-1': `
<pre class="language-javascript"><code class="language-javascript">// The two most useful debugging tools

console.log(myVariable);                  // see the value
console.log(typeof myVariable);            // see the type

// Combined — the fastest debug check
console.log(myVariable, typeof myVariable);

// Label your logs so you know which one is which
console.log("at line 42, score is:", score);</code></pre>
  `,

  /* 0.2 Anatomy / Breakdown */
  'topics-0-25-0-2': `
<pre class="language-javascript"><code class="language-javascript">console.log("score:", score);

// console            → built-in object for logging
// .log               → method that prints to the developer console
// "score:"           → label so you can find this log in the output
// score              → the variable being logged
// → output: "score: 100"

// Adding a label is critical when you have multiple logs.
// Without one, "100" by itself doesn't tell you which variable that was.</code></pre>
  `,

  /* 0.3 Syntax Details That Matter */
  'topics-0-25-0-3': `
    <p><code>console.log</code> can take multiple arguments — useful for showing related values together:</p>
<pre class="language-javascript"><code class="language-javascript">console.log("name:", userName, "age:", userAge);
// output: name: Os age: 25</code></pre>

    <p><code>console.log</code> with an object shows everything inside:</p>
<pre class="language-javascript"><code class="language-javascript">const user = { name: "Os", age: 25 };
console.log(user);
// output: { name: "Os", age: 25 }

console.log(user.profile);
// undefined — the property doesn't exist</code></pre>

    <p><code>typeof</code> tells you what KIND of value the variable holds:</p>
<pre class="language-javascript"><code class="language-javascript">console.log(typeof "Os");          // "string"
console.log(typeof 42);             // "number"
console.log(typeof true);           // "boolean"
console.log(typeof undefined);      // "undefined"
console.log(typeof null);           // "object" (a famous JS quirk)
console.log(typeof []);             // "object" (arrays are objects)
console.log(typeof {});             // "object"
console.log(typeof function(){});   // "function"</code></pre>

    <p>Use <code>console.table</code> for arrays of objects:</p>
<pre class="language-javascript"><code class="language-javascript">const users = [
  { name: "Os", age: 25 },
  { name: "Sam", age: 30 }
];
console.table(users);
// renders a clean table in the dev console</code></pre>
  `,

  /* --- Chunk 1: Why & When --- */

  /* 1.0 What problem it solves */
  'topics-0-25-1-0': `
    <p>Variable bugs hide in plain sight. The variable is right there, the code looks right, but the result is wrong. The problem is your assumption about what the variable holds — and reality.</p>
    <p>Logging the variable replaces assumption with fact. You see what's actually there.</p>
  `,

  /* 1.1 Why use it */
  'topics-0-25-1-1': `
    <p>Use <code>console.log</code> any time you're unsure about a variable's value. It's the cheapest, most reliable debugging tool you have.</p>
<pre class="language-javascript"><code class="language-javascript">// Code isn't working? First step:
const total = price + tax;
console.log("price:", price, "tax:", tax, "total:", total);

// Now you can see if any of these are not what you expected:
//   - is price a string instead of a number?
//   - did tax come back as undefined?
//   - is total NaN?</code></pre>
    <p>Bonus: when you find the bug, you can leave the log there to confirm the fix works.</p>
  `,

  /* 1.2 Where you use it */
  'topics-0-25-1-2': `
<pre class="language-javascript"><code class="language-javascript">// Right after fetching API data
const response = await fetch(url);
const data = await response.json();
console.log("API data:", data);

// Right after reading form input
const userInput = emailInput.value;
console.log("user typed:", userInput, typeof userInput);

// Inside an event handler when something's not firing right
btn.addEventListener("click", (e) => {
  console.log("clicked, target:", e.target);
});

// In a loop when you suspect a counter is off
for (let i = 0; i < items.length; i++) {
  console.log("iteration", i, "item:", items[i]);
}

// Right before a calculation that might be wrong
console.log("about to compute total. price:", price, "qty:", quantity);
const total = price * quantity;</code></pre>
  `,

  /* 1.3 Plain English explanation */
  'topics-0-25-1-3': `
    <p>When code doesn't work, your assumption about what the variable holds is probably wrong.</p>
    <p>Logging the variable lets you SEE what's actually inside. Once you see the truth, the fix is usually obvious.</p>
  `,

  /* 1.4 Mental model */
  'topics-0-25-1-4': `
    <p>Debugging variables is like tracing footprints. You walk through the code from earliest to latest, asking at each step: <em>"what's in this variable now?"</em></p>
<pre class="language-javascript"><code class="language-javascript">const price = priceInput.value;
console.log("step 1 — price:", price, typeof price);
// "10" string — aha, came in as a string

const tax = price * 0.08;
console.log("step 2 — tax:", tax);
// 0.8 — math worked despite the string (JS coerced it)

const total = price + tax;
console.log("step 3 — total:", total);
// "100.8" — string concat instead of math!

// Now you've found it: + with a string and number = string concat.</code></pre>
    <p>Each log is a footprint. The bug is wherever the values stop making sense.</p>
  `,

  /* 1.5 Step-by-step walkthrough */
  'topics-0-25-1-5': `
<pre class="language-javascript"><code class="language-javascript">// Bug: "Why is my total wrong?"

const price = priceInput.value;
const quantity = qtyInput.value;
const total = price * quantity;
displayTotal.textContent = total;

// Step 1: log every variable involved
console.log("price:", price, typeof price);       // "10" string
console.log("quantity:", quantity, typeof quantity); // "5" string
console.log("total:", total, typeof total);          // 50 number (* coerced)

// Step 2: notice — values came in as strings
//   For * (multiplication), JS coerces strings to numbers — happens to work.
//   For + (addition), it would have done string concatenation instead.

// Step 3: fix proactively
const price = Number(priceInput.value);
const quantity = Number(qtyInput.value);
const total = price * quantity;</code></pre>
  `,

  /* --- Chunk 2: The Click --- */

  /* 2.0 Debugging clue */
  'topics-0-25-2-0': `
    <p>If the issue is hard to spot from the value alone, log the type too:</p>
<pre class="language-javascript"><code class="language-javascript">console.log(score, typeof score);
// "10" string  → ah, that's why my math is wrong
// 10 number    → math should work
// undefined "undefined"  → variable was never assigned
// null "object" → set to null somewhere</code></pre>

    <p>If a variable seems to vanish, you might be in the wrong scope. Try logging from where you DECLARED it:</p>
<pre class="language-javascript"><code class="language-javascript">function setup() {
  const config = { theme: "dark" };
  console.log("inside setup:", config);   // works — config exists here
}
setup();
console.log("outside setup:", config);    // ReferenceError — out of scope</code></pre>

    <p>If you have many logs, label them so the output is readable:</p>
<pre class="language-javascript"><code class="language-javascript">// Hard to read
console.log(price);
console.log(quantity);
console.log(total);
// output: 10  5  50

// Easy to read
console.log("price:", price);
console.log("quantity:", quantity);
console.log("total:", total);
// output:
// price: 10
// quantity: 5
// total: 50</code></pre>
  `,

  /* 2.1 The part that makes it click */
  'topics-0-25-2-1': `
    <p>When debugging variables, replace assumption with fact. <code>console.log</code> is how.</p>
    <p>Add the type with <code>typeof</code> when something looks right but behaves wrong — strings disguised as numbers are a top offender.</p>
  `,

  /* 2.2 Common confusions */
  'topics-0-25-2-2': `
    <p><strong>Confusion: logging an object that changes later</strong></p>
<pre class="language-javascript"><code class="language-javascript">const user = { name: "Os" };
console.log(user);          // browsers may show LIVE data, not a snapshot

user.name = "Sam";
// the earlier console.log now shows { name: "Sam" } if you expand it!

// fix: log a copy if you need a snapshot
console.log({ ...user });</code></pre>

    <p><strong>Confusion: <code>console.log</code> doesn't return anything</strong></p>
<pre class="language-javascript"><code class="language-javascript">function getName() {
  console.log("Os");        // logs but doesn't return
}
const name = getName();
console.log(name);           // undefined</code></pre>

    <p><strong>Confusion: <code>typeof null</code> is <code>"object"</code></strong></p>
<pre class="language-javascript"><code class="language-javascript">console.log(typeof null);    // "object" — historical JS quirk

// to check for null specifically:
if (value === null) { }</code></pre>

    <p><strong>Confusion: which variable is which</strong></p>
<pre class="language-javascript"><code class="language-javascript">// Without labels — confusing
console.log(score);
console.log(level);
// output: 10  3

// With labels — clear
console.log("score:", score);
console.log("level:", level);
// output:
// score: 10
// level: 3</code></pre>
  `,

  /* 2.3 Common mistakes */
  'topics-0-25-2-3': `
<pre class="language-javascript"><code class="language-javascript">console.log(score);
console.log(level);
console.log(total);
// works, but no labels — hard to read in big logs
// fix: label them
console.log("score:", score);
console.log("level:", level);
console.log("total:", total);</code></pre>

<pre class="language-javascript"><code class="language-javascript">console.log("everything is fine");
// no actual variable inspection — useless for debugging
// fix: log the variables involved
console.log("price:", price, "quantity:", quantity);</code></pre>

<pre class="language-javascript"><code class="language-javascript">// Logging an object that changes later
const user = { name: "Os" };
console.log(user);
user.name = "Sam";
// the log might show "Sam" depending on the browser
// fix: log a copy
console.log({ ...user });</code></pre>

<pre class="language-javascript"><code class="language-javascript">// Logging just the value when type is the actual issue
const score = "10";
console.log(score);          // "10" — looks fine
console.log(score + 5);      // "105" — string concat!
// fix: also log the type
console.log(score, typeof score);   // "10" string — caught it</code></pre>

<pre class="language-javascript"><code class="language-javascript">// Leaving lots of debug logs in production code
// fix: delete them once the bug is fixed,
// or use a logger that can be turned off</code></pre>
  `,

  /* --- Chunk 3: In Practice --- */

  /* 3.0 Tiny examples */
  'topics-0-25-3-0': `
<pre class="language-javascript"><code class="language-javascript">// Just the value
const score = 100;
console.log(score);              // 100

// Value and type — best for catching surprises
console.log(score, typeof score); // 100 'number'

// Multiple values with labels
const a = 5, b = 10;
console.log("a:", a, "b:", b);    // a: 5 b: 10

// Object inspection
const user = { name: "Os" };
console.log(user);                // { name: "Os" }

// Array of objects
const users = [{ name: "Os" }, { name: "Sam" }];
console.table(users);             // shown as a table in dev tools</code></pre>
  `,

  /* 3.1 Real website uses */
  'topics-0-25-3-1': `
    <p><strong>Example: confirming form input read correctly</strong></p>
<pre class="language-javascript"><code class="language-javascript">submitBtn.addEventListener("click", () => {
  const email = emailInput.value;
  console.log("email read as:", email, typeof email);

  if (!email.includes("@")) {
    showError("Invalid email");
  }
});</code></pre>

    <p><strong>Example: tracking a state variable as it changes</strong></p>
<pre class="language-javascript"><code class="language-javascript">let cartCount = 0;

addToCartBtn.addEventListener("click", () => {
  cartCount = cartCount + 1;
  console.log("cartCount:", cartCount);
  updateBadge(cartCount);
});</code></pre>

    <p><strong>Example: peeking at API data structure</strong></p>
<pre class="language-javascript"><code class="language-javascript">const response = await fetch(url);
const data = await response.json();
console.log("API response:", data);
// look in the dev console to see what shape the data has
// before writing code that uses it</code></pre>

    <p><strong>Example: walking through a multi-step calculation</strong></p>
<pre class="language-javascript"><code class="language-javascript">function checkout(items) {
  const subtotal = items.reduce((sum, i) => sum + i.price, 0);
  console.log("subtotal:", subtotal);

  const tax = subtotal * 0.08;
  console.log("tax:", tax);

  const total = subtotal + tax;
  console.log("total:", total);

  return total;
}</code></pre>
  `,

  /* 3.2 Connects to */
  'topics-0-25-3-2': `
    <ul>
      <li><strong>Common mistakes</strong> → debugging is how you find them</li>
      <li><strong><code>console.log</code></strong> → the main tool</li>
      <li><strong><code>typeof</code></strong> → catches type-related surprises</li>
      <li><strong>Reading errors</strong> → ReferenceError and TypeError tell you what's wrong</li>
      <li><strong>Browser dev tools</strong> → where logs show up</li>
      <li><strong>Forms</strong> → input values often need type-checking</li>
      <li><strong>API data</strong> → almost always worth logging on first use</li>
    </ul>
  `,

  /* 3.3 See also */
  'topics-0-25-3-3': `
    <ul>
      <li>Common mistakes</li>
      <li><code>console.log</code></li>
      <li><code>console.table</code></li>
      <li><code>console.error</code> and <code>console.warn</code></li>
      <li><code>typeof</code></li>
      <li>Browser dev tools</li>
      <li>Breakpoints (advanced debugging)</li>
    </ul>
  `,


  /* ==========================================================
     SECTION 3.2 — DATA TYPES
     Path prefix: topics-1-{subLessonIndex}-{chunkIndex}-{pieceIndex}
     ========================================================== */

  /* ===== Sub-lesson: 3.2 Data Types → what data types are =====
     Path: topics-1-0-{chunkIndex}-{pieceIndex}
  */

  /* --- Chunk 0: What & How --- */

  /* 0.0 What it is */
  'topics-1-0-0-0': `
    <p>A data type is the kind of value something is. JavaScript has a set of built-in types — <strong>string, number, boolean, array, object, function, null, undefined</strong>. Every value belongs to one of them.</p>
    <p>There are two more — <strong>symbol</strong> and <strong>bigint</strong> — but those are rare and mostly show up in advanced code or libraries. You can safely ignore them while learning.</p>
    <p>The type decides what you can do with the value. You can do math with numbers, get the length of a string, loop through an array — but each only works with the right type.</p>
  `,

  /* 0.1 Syntax */
  'topics-1-0-0-1': `
<pre class="language-javascript"><code class="language-javascript">"hello"               // string
42                     // number
true                   // boolean
[1, 2, 3]              // array
{ name: "Os" }         // object
function() {}          // function
null                   // null
undefined              // undefined

// Rare types you'll mostly only see in advanced code:
Symbol("id")           // symbol
9999999999999999n      // bigint (notice the trailing "n")</code></pre>
  `,

  /* 0.2 Anatomy / Breakdown */
  'topics-1-0-0-2': `
<pre class="language-javascript"><code class="language-javascript">const userName = "Os";
const age = 25;
const isLoggedIn = true;

// "Os"        → string  (text wrapped in quotes)
// 25          → number  (digits, no quotes)
// true        → boolean (just true or false)

// The type isn't something you declare separately —
// it's determined by HOW the value is written.</code></pre>
  `,

  /* 0.3 Syntax Details That Matter */
  'topics-1-0-0-3': `
    <p>You can check a value's type with <code>typeof</code>:</p>
<pre class="language-javascript"><code class="language-javascript">typeof "Os";          // "string"
typeof 42;             // "number"
typeof true;           // "boolean"
typeof undefined;      // "undefined"
typeof null;           // "object"  ← famous JS quirk
typeof [];             // "object"  ← arrays are objects
typeof {};             // "object"
typeof function(){};   // "function"

// Rare types:
typeof Symbol("id");   // "symbol"
typeof 99n;            // "bigint"</code></pre>

    <p>Each type has its own way of being written:</p>
<pre class="language-javascript"><code class="language-javascript">"hello"           // string — quotes
42                 // number — no quotes
true               // boolean — keyword
[1, 2]             // array — square brackets
{ x: 1 }           // object — curly braces
function(){}       // function — function keyword (or arrow syntax)
null               // null — keyword
undefined          // undefined — keyword (rarely written by hand)</code></pre>

    <p>Same-looking values can be different types — and behave very differently:</p>
<pre class="language-javascript"><code class="language-javascript">const a = 25;        // number
const b = "25";       // string

a + 1;                // 26  — number addition
b + 1;                // "251"  — string concatenation

typeof a;             // "number"
typeof b;             // "string"</code></pre>
  `,

  /* --- Chunk 1: Why & When --- */

  /* 1.0 What problem it solves */
  'topics-1-0-1-0': `
    <p>JavaScript needs to know how to handle a value. Should <code>+</code> add or join? Should this be looped over? Can it be checked for length? The answer depends on the type.</p>
    <p>Types let JavaScript know what operations make sense for a value, and let YOU know what to expect when working with one.</p>
  `,

  /* 1.1 Why use it */
  'topics-1-0-1-1': `
    <p>You don't really "use" types — every value already has one. But understanding them lets you:</p>
<pre class="language-javascript"><code class="language-javascript">// 1. Pick the right type for the job
const userName = "Os";       // text → string
const age = 25;               // number → number
const isLoggedIn = true;      // yes/no → boolean
const colors = ["red"];       // list → array
const user = { name: "Os" };  // bundle → object

// 2. Check a type when you're not sure
const value = somethingFromAnAPI;
if (typeof value === "string") {
  console.log(value.toUpperCase());
}

// 3. Convert between types when needed
const userInput = inputBox.value;       // always a string
const userAge = Number(userInput);      // convert to number for math</code></pre>
  `,

  /* 1.2 Where you use it */
  'topics-1-0-1-2': `
<pre class="language-javascript"><code class="language-javascript">// Picking a type when storing data
const username = "Os";              // string
const cartCount = 0;                 // number
const isMenuOpen = false;            // boolean
const colors = ["red", "blue"];      // array
const user = { name: "Os" };         // object

// Checking a type before using a value
function greet(name) {
  if (typeof name !== "string") {
    throw new Error("Name must be a string");
  }
  return "Hi " + name;
}

// Converting types
const ageInput = ageField.value;          // string from form
const age = Number(ageInput);              // number for math

// Reading API data — usually objects and arrays
const response = await fetch("/api/users");
const users = await response.json();      // typically an array of objects</code></pre>
  `,

  /* 1.3 Plain English explanation */
  'topics-1-0-1-3': `
    <p>Every value in JavaScript has a type. The type tells you what kind of thing the value is — text, number, yes/no, list, etc.</p>
    <p>Different types behave differently. You can do math with numbers but not really with strings. You can loop through arrays but not numbers. The type sets the rules.</p>
  `,

  /* 1.4 Mental model */
  'topics-1-0-1-4': `
    <p>The type is the value's identity. It's how JavaScript decides what to do with that value.</p>
<pre class="language-javascript"><code class="language-javascript">"Os"      // identity: string  → can be uppercased, sliced, concatenated
25         // identity: number  → can be added, multiplied, compared
true       // identity: boolean → used in if statements, &&, ||
[1, 2]     // identity: array   → can be looped, length checked, etc.
{ x: 1 }   // identity: object  → has named properties to access</code></pre>
    <p>Knowing the type tells you what's possible. Using a method that doesn't fit the type throws an error or gives weird results.</p>
  `,

  /* 1.5 Step-by-step walkthrough */
  'topics-1-0-1-5': `
<pre class="language-javascript"><code class="language-javascript">const a = "25";
const b = 25;

console.log(a + 1);
console.log(b + 1);

// JavaScript is thinking:
// Line 1: declare a. Right side is "25" with quotes → string.
// Line 2: declare b. Right side is 25 with no quotes → number.
//
// Line 4: a + 1
//   - a is a string.
//   - + with a string means CONCATENATION.
//   - Convert 1 to "1", join → "251". Log "251".
//
// Line 5: b + 1
//   - b is a number.
//   - + with two numbers means ADDITION.
//   - 25 + 1 → 26. Log 26.

// Same operator, different behavior — driven by the types.</code></pre>
  `,

  /* --- Chunk 2: The Click --- */

  /* 2.0 Debugging clue */
  'topics-1-0-2-0': `
    <p>If a value is behaving strangely, check its type with <code>typeof</code> first:</p>
<pre class="language-javascript"><code class="language-javascript">const score = "100";
console.log(typeof score);    // "string" — not what you wanted
console.log(score + 5);        // "1005" — string concat, not addition

// fix: convert to number
const score = Number("100");   // 100 (number)
console.log(score + 5);         // 105</code></pre>

    <p>The most common type-related bugs:</p>
<pre class="language-javascript"><code class="language-javascript">// 1. Form input as string instead of number
const age = ageInput.value;        // "25" string
const newAge = age + 1;             // "251" — concat, not math

// 2. Forgetting to convert before math
"25" * 2;                           // 50  (JS coerces for *)
"25" + 2;                           // "252" (JS does NOT coerce for +)

// 3. Type confusion in if checks
const status = "0";
if (status) { /* runs! "0" is truthy because it's a non-empty string */ }
if (status === 0) { /* doesn't run — "0" string ≠ 0 number */ }</code></pre>
  `,

  /* 2.1 The part that makes it click */
  'topics-1-0-2-1': `
    <p>Every value has a type. The type decides what you can do with it.</p>
    <p>If something behaves unexpectedly, the type is often the cause. <code>typeof</code> is the fastest way to find out what you're really working with.</p>
  `,

  /* 2.2 Common confusions */
  'topics-1-0-2-2': `
    <p><strong>Confusion: same-looking values, different types</strong></p>
<pre class="language-javascript"><code class="language-javascript">25       // number
"25"     // string

25 === "25";    // false — different types
25 == "25";     // true (loose equality coerces)

// Use === to keep types separate.
// Loose == can hide type bugs.</code></pre>

    <p><strong>Confusion: <code>typeof null</code> is "object"</strong></p>
<pre class="language-javascript"><code class="language-javascript">typeof null;    // "object"  ← historical JS bug, never fixed

// To check for null specifically:
if (value === null) { }</code></pre>

    <p><strong>Confusion: arrays are technically objects</strong></p>
<pre class="language-javascript"><code class="language-javascript">typeof [1, 2, 3];    // "object" — arrays are objects under the hood

// To specifically check for an array:
Array.isArray([1, 2, 3]);    // true
Array.isArray({ x: 1 });      // false</code></pre>

    <p><strong>Confusion: primitive vs reference types</strong></p>
<pre class="language-javascript"><code class="language-javascript">// Primitives — copied by value
let a = 5;
let b = a;
b = 10;
console.log(a);     // 5 — unaffected

// Objects/arrays — shared by reference
let x = { count: 5 };
let y = x;
y.count = 10;
console.log(x.count);   // 10 — same object!</code></pre>
  `,

  /* 2.3 Common mistakes */
  'topics-1-0-2-3': `
<pre class="language-javascript"><code class="language-javascript">const age = ageInput.value + 5;
// wrong: ageInput.value is a string — concatenation, not math
// fix: convert first
const age = Number(ageInput.value) + 5;</code></pre>

<pre class="language-javascript"><code class="language-javascript">if (typeof user == "object") { /* matches arrays AND null too */ }
// risky: too broad
// fix: be specific
if (user !== null && !Array.isArray(user) && typeof user === "object") { }</code></pre>

<pre class="language-javascript"><code class="language-javascript">25 == "25";    // true (loose equality)
// risky: hides type bugs
// fix: use strict equality
25 === "25";   // false (strict)</code></pre>

<pre class="language-javascript"><code class="language-javascript">if (typeof null === "object") {
  // null passes the "is object" check — surprise
}
// fix: check for null first
if (value !== null && typeof value === "object") { }</code></pre>

<pre class="language-javascript"><code class="language-javascript">const items = [];
typeof items === "array";
// wrong: typeof returns "object" for arrays
// fix:
Array.isArray(items);   // true</code></pre>
  `,

  /* --- Chunk 3: In Practice --- */

  /* 3.0 Tiny examples */
  'topics-1-0-3-0': `
<pre class="language-javascript"><code class="language-javascript">// Each type has a different look
const text = "hello";          // string
const count = 42;               // number
const active = true;            // boolean
const items = [1, 2, 3];        // array
const user = { name: "Os" };    // object
const empty = null;             // null
let nothing;                    // undefined

// Check the type
console.log(typeof text);       // "string"
console.log(typeof count);       // "number"
console.log(typeof active);      // "boolean"
console.log(typeof items);       // "object" (arrays are objects)
console.log(typeof user);        // "object"

// Different types behave differently with +
"5" + 5;        // "55" — string concat
5 + 5;          // 10 — number add</code></pre>
  `,

  /* 3.1 Real website uses */
  'topics-1-0-3-1': `
    <p><strong>Example: converting form input from string to number</strong></p>
<pre class="language-javascript"><code class="language-javascript">const ageInput = document.querySelector("#age");
const age = Number(ageInput.value);    // string → number for math

if (age >= 18) {
  enableSignup();
}</code></pre>

    <p><strong>Example: checking the shape of API data before using it</strong></p>
<pre class="language-javascript"><code class="language-javascript">const response = await fetch("/api/user");
const data = await response.json();

if (Array.isArray(data)) {
  data.forEach(renderUser);
} else if (typeof data === "object" && data !== null) {
  renderUser(data);
}</code></pre>

    <p><strong>Example: type-aware validation</strong></p>
<pre class="language-javascript"><code class="language-javascript">function validatePrice(price) {
  if (typeof price !== "number") {
    return "Price must be a number";
  }
  if (price < 0) {
    return "Price cannot be negative";
  }
  return null;   // valid
}</code></pre>

    <p><strong>Example: protecting against unexpected types from external code</strong></p>
<pre class="language-javascript"><code class="language-javascript">function greet(name) {
  if (typeof name !== "string") {
    name = String(name);    // convert to string as fallback
  }
  return "Hi " + name;
}</code></pre>
  `,

  /* 3.2 Connects to */
  'topics-1-0-3-2': `
    <ul>
      <li><strong>Strings</strong> → text type</li>
      <li><strong>Numbers</strong> → numeric type</li>
      <li><strong>Booleans</strong> → true/false type</li>
      <li><strong>Arrays</strong> → list type</li>
      <li><strong>Objects</strong> → labeled-bundle type</li>
      <li><strong>Functions</strong> → also a type — values you can call</li>
      <li><strong>null and undefined</strong> → "empty" types</li>
      <li><strong>Symbol and BigInt</strong> → rare types (advanced/library code)</li>
      <li><strong><code>typeof</code></strong> → operator that returns the type</li>
      <li><strong>Type coercion</strong> → JS auto-converting between types</li>
    </ul>
  `,

  /* 3.3 See also */
  'topics-1-0-3-3': `
    <ul>
      <li><code>typeof</code></li>
      <li><code>Array.isArray</code></li>
      <li>Primitive vs reference types</li>
      <li>Type coercion</li>
      <li><code>Number()</code>, <code>String()</code>, <code>Boolean()</code> conversions</li>
      <li>Strict equality (<code>===</code>)</li>
      <li>Functions as values</li>
      <li>Symbol (advanced)</li>
      <li>BigInt (advanced)</li>
    </ul>
  `,


  /* ===== Sub-lesson: 3.2 Data Types → why data types matter =====
     Path: topics-1-1-{chunkIndex}-{pieceIndex}
  */

  /* --- Chunk 0: What & How --- */

  /* 0.0 What it is */
  'topics-1-1-0-0': `
    <p>Data types matter because the same operation behaves differently depending on the types involved. <code>+</code> with two numbers means "add." <code>+</code> with two strings means "join." Same symbol — different result.</p>
    <p>Knowing the types tells you what your code will actually do.</p>
  `,

  /* 0.1 Syntax */
  'topics-1-1-0-1': `
<pre class="language-javascript"><code class="language-javascript">// + means addition with numbers
5 + 5;          // 10

// + means concatenation with strings
"5" + "5";      // "55"

// Mixing — JS coerces the number to a string
"5" + 5;        // "55"
5 + "5";        // "55"

// Other operators behave more consistently
"5" * 5;        // 25 (JS coerces "5" to a number for *)
"5" - 5;        // 0  (same)
"5" / 5;        // 1  (same)</code></pre>
  `,

  /* 0.2 Anatomy / Breakdown */
  'topics-1-1-0-2': `
<pre class="language-javascript"><code class="language-javascript">const a = "5";    // string
const b = 5;       // number

a + b;             // "55"
b + a;             // "55"
a * b;             // 25
b * a;             // 25

// Same values, different types, totally different behavior with +.
// The TYPE is what tells JS which version of + to use.</code></pre>
  `,

  /* 0.3 Syntax Details That Matter */
  'topics-1-1-0-3': `
    <p>The <code>+</code> operator is the most type-sensitive. With strings, it joins. With numbers, it adds. Mix them, and JavaScript silently converts to a string:</p>
<pre class="language-javascript"><code class="language-javascript">5 + 5;        // 10
"5" + 5;      // "55"  — JS converted 5 to "5" and joined
5 + "5";      // "55"  — same thing</code></pre>

    <p>Other math operators auto-convert strings to numbers:</p>
<pre class="language-javascript"><code class="language-javascript">"5" * 2;      // 10  — JS converted "5" to 5
"5" - 2;      // 3
"5" / 2;      // 2.5

// But "+" is special — it prefers concat when ANY side is a string.</code></pre>

    <p>Comparison operators also behave differently for different types:</p>
<pre class="language-javascript"><code class="language-javascript">"100" > 50;   // true — JS coerces "100" to 100, then compares
"abc" > 50;   // false — "abc" can't become a number, becomes NaN

// Lexicographic vs numeric:
"10" > "9";   // false — string comparison, "1" < "9"
10 > 9;       // true  — number comparison</code></pre>

    <p>Methods only work on the right type:</p>
<pre class="language-javascript"><code class="language-javascript">"hello".toUpperCase();    // "HELLO" — string method works
(5).toUpperCase();          // TypeError — numbers don't have this method

[1, 2, 3].push(4);         // works — arrays have push
"hello".push("!");          // TypeError — strings don't</code></pre>
  `,

  /* --- Chunk 1: Why & When --- */

  /* 1.0 What problem it solves */
  'topics-1-1-1-0': `
    <p>If types didn't matter, every operation would be ambiguous. Should <code>+</code> always do math? Always do text? Always something else? JavaScript needs a way to pick — and it picks based on the types.</p>
    <p>The downside: bugs can hide in mismatched types. The upside: once you understand types, you can predict what your code will do.</p>
  `,

  /* 1.1 Why use it */
  'topics-1-1-1-1': `
    <p>Understanding why types matter saves you from a whole class of bugs:</p>
<pre class="language-javascript"><code class="language-javascript">// Bug: input value is a string
const total = priceInput.value + taxInput.value;
// "10" + "5" = "105", not 15

// Fix: convert to numbers first
const total = Number(priceInput.value) + Number(taxInput.value);
// 15</code></pre>
    <p>Anywhere data comes from outside your code (form input, APIs, localStorage), you'll often need to convert types before working with it.</p>
  `,

  /* 1.2 Where you use it */
  'topics-1-1-1-2': `
<pre class="language-javascript"><code class="language-javascript">// Form input — always strings
const age = Number(ageInput.value);
const acceptsTerms = checkbox.checked;    // boolean directly

// localStorage — always strings
localStorage.setItem("count", 5);
const count = Number(localStorage.getItem("count"));   // string → number

const flag = localStorage.getItem("darkMode") === "true";  // string → boolean

// API data — usually objects/arrays already typed correctly
const response = await fetch(url);
const data = await response.json();    // already objects/arrays/etc

// JSON — convert between text and structured data
const text = JSON.stringify(user);    // object → string
const obj = JSON.parse(text);          // string → object</code></pre>
  `,

  /* 1.3 Plain English explanation */
  'topics-1-1-1-3': `
    <p>The same code can do different things depending on the types of the values involved.</p>
    <p>This isn't a quirk — it's how JavaScript works. The trick is knowing when types matter (most of the time) and converting them when you need a specific behavior.</p>
  `,

  /* 1.4 Mental model */
  'topics-1-1-1-4': `
    <p>Operators look at the types of the values around them and pick a behavior:</p>
<pre class="language-javascript"><code class="language-javascript">5 + 5
// + sees two numbers → does ADDITION → 10

"5" + "5"
// + sees two strings → does CONCATENATION → "55"

"5" + 5
// + sees one string and one number → CONCATENATION
// (because + prefers concat when any side is a string)
// → "55"

5 * "5"
// * sees a number and a string → MULTIPLICATION
// (* coerces the string to a number) → 25</code></pre>
    <p>The operator behavior changes based on what's on either side. Same code, different result.</p>
  `,

  /* 1.5 Step-by-step walkthrough */
  'topics-1-1-1-5': `
<pre class="language-javascript"><code class="language-javascript">const price = priceInput.value;
const quantity = qtyInput.value;
const total = price * quantity;
const message = "Total: " + total;

console.log(message);

// JavaScript is thinking:
// Line 1: priceInput.value is a string. Store "10" in price.
// Line 2: qtyInput.value is a string. Store "5" in quantity.
//
// Line 3: price * quantity
//   Both are strings, but * coerces strings to numbers.
//   "10" → 10, "5" → 5, 10 * 5 → 50.
//   Store 50 in total.
//
// Line 4: "Total: " + total
//   "Total: " is a string. + with a string means concat.
//   Convert 50 to "50", join → "Total: 50".
//
// Line 5: log "Total: 50".

// Multiplication coerced strings to numbers (helpful).
// + between string and number coerced to string (could be a bug if unintended).</code></pre>
  `,

  /* --- Chunk 2: The Click --- */

  /* 2.0 Debugging clue */
  'topics-1-1-2-0': `
    <p>When you get a wrong-looking result, check the types of every value involved:</p>
<pre class="language-javascript"><code class="language-javascript">const result = a + b;
console.log(a, typeof a, b, typeof b, result);

// If a is "10" string and b is 5 number, result is "105" — that's the bug.</code></pre>

    <p>Common type-related symptoms and what they mean:</p>
<pre class="language-javascript"><code class="language-javascript">// Symptom: "105" instead of 15
// Cause: + between string and number → concatenation
// Fix: Number() on the string side

// Symptom: NaN
// Cause: math on something that isn't a number ("abc" - 5)
// Fix: validate or convert first

// Symptom: TypeError "x.toUpperCase is not a function"
// Cause: x isn't a string but you tried a string method
// Fix: check the type or convert

// Symptom: comparison giving weird results
// Cause: comparing strings vs numbers, or strings lexicographically
// Fix: convert to a consistent type before comparing</code></pre>
  `,

  /* 2.1 The part that makes it click */
  'topics-1-1-2-1': `
    <p>Operators don't just "do the same thing every time." They look at the types and pick a behavior. The same <code>+</code> can add or join — the types decide.</p>
    <p>Whenever data comes from outside your code (form, API, localStorage), check what type it actually is before using it.</p>
  `,

  /* 2.2 Common confusions */
  'topics-1-1-2-2': `
    <p><strong>Confusion: <code>+</code> behaves differently from other math operators</strong></p>
<pre class="language-javascript"><code class="language-javascript">"5" + 5;     // "55"  (concat — + prefers strings)
"5" - 5;     // 0     (math — - has no string version)
"5" * 5;     // 25
"5" / 5;     // 1

// Only + is "string-aware." Others coerce to numbers.</code></pre>

    <p><strong>Confusion: form input is always a string</strong></p>
<pre class="language-javascript"><code class="language-javascript">// Even &lt;input type="number"&gt; gives you a string
const ageInput = document.querySelector("#age");
typeof ageInput.value;     // "string" — even if user typed digits</code></pre>

    <p><strong>Confusion: <code>"0"</code> is truthy but <code>0</code> is falsy</strong></p>
<pre class="language-javascript"><code class="language-javascript">if ("0") {  /* runs — non-empty string is truthy */ }
if (0)   {  /* doesn't run — 0 is falsy */ }
"0" === 0    // false (different types)
"0" == 0     // true (loose, type-coercing)</code></pre>

    <p><strong>Confusion: comparing strings does lexicographic compare</strong></p>
<pre class="language-javascript"><code class="language-javascript">"10" > "9";    // false  ← string compare: "1" < "9"
10 > 9;        // true   ← number compare: 10 > 9
"10" > 9;      // true   ← coerced "10" → 10, then number compare</code></pre>
  `,

  /* 2.3 Common mistakes */
  'topics-1-1-2-3': `
<pre class="language-javascript"><code class="language-javascript">const total = priceInput.value + 5;
// wrong: input is a string, + with string = concat
// fix:
const total = Number(priceInput.value) + 5;</code></pre>

<pre class="language-javascript"><code class="language-javascript">const isOpen = localStorage.getItem("menu") || false;
// wrong: getItem returns a string or null. "false" string is truthy.
// fix:
const isOpen = localStorage.getItem("menu") === "true";</code></pre>

<pre class="language-javascript"><code class="language-javascript">if (count == "0") { }
// wrong (loose): coerces — true even if count is 0 number
// fix: use strict equality
if (count === 0) { }</code></pre>

<pre class="language-javascript"><code class="language-javascript">const sorted = ["10", "9", "1"].sort();
// wrong: lexicographic — sorts as ["1", "10", "9"]
// fix: provide a numeric compare function
const sorted = [10, 9, 1].sort((a, b) => a - b);</code></pre>

<pre class="language-javascript"><code class="language-javascript">const x = "5" * 2;      // 10 — sometimes works
const y = "abc" * 2;    // NaN — but only if it's a clean number string
// fix: validate before doing math
const num = Number("abc");
if (isNaN(num)) { /* handle bad input */ }</code></pre>
  `,

  /* --- Chunk 3: In Practice --- */

  /* 3.0 Tiny examples */
  'topics-1-1-3-0': `
<pre class="language-javascript"><code class="language-javascript">// Same operator, different types, different results
5 + 5;          // 10
"5" + "5";      // "55"
"5" + 5;        // "55"

// Math operators auto-convert strings to numbers (except +)
"5" * 2;        // 10
"5" - 2;        // 3
"5" / 2;        // 2.5

// Comparisons differ by type
"10" > "9";     // false (string compare)
10 > 9;          // true  (number compare)

// Methods only work on the right type
"Os".toUpperCase();           // "OS" — string method
[1, 2, 3].length;             // 3 — array property

// typeof reveals what's actually there
typeof 25;          // "number"
typeof "25";        // "string"
typeof true;        // "boolean"</code></pre>
  `,

  /* 3.1 Real website uses */
  'topics-1-1-3-1': `
    <p><strong>Example: converting form values for math</strong></p>
<pre class="language-javascript"><code class="language-javascript">const price = Number(priceInput.value);
const quantity = Number(qtyInput.value);
const total = price * quantity;
totalDisplay.textContent = total;</code></pre>

    <p><strong>Example: parsing booleans from localStorage</strong></p>
<pre class="language-javascript"><code class="language-javascript">// Save
localStorage.setItem("darkMode", true);

// Read — strings only
const darkMode = localStorage.getItem("darkMode") === "true";

if (darkMode) {
  document.body.classList.add("dark");
}</code></pre>

    <p><strong>Example: comparing API values consistently</strong></p>
<pre class="language-javascript"><code class="language-javascript">const userId = currentUser.id;             // could be number or string
const requestedId = Number(requestedIdParam);

if (userId === requestedId) {
  // matches only if BOTH are number
}</code></pre>

    <p><strong>Example: validating type before using a method</strong></p>
<pre class="language-javascript"><code class="language-javascript">function showName(name) {
  if (typeof name !== "string") {
    return;   // bail out early
  }
  console.log(name.toUpperCase());
}</code></pre>
  `,

  /* 3.2 Connects to */
  'topics-1-1-3-2': `
    <ul>
      <li><strong>What data types are</strong> → previous lesson, the foundation</li>
      <li><strong><code>typeof</code></strong> → check the type at runtime</li>
      <li><strong>Type coercion</strong> → JS auto-converting between types</li>
      <li><strong><code>Number()</code>, <code>String()</code>, <code>Boolean()</code></strong> → manual conversion</li>
      <li><strong>Strict equality (<code>===</code>)</strong> → keeps types separate in comparisons</li>
      <li><strong>Forms</strong> → input values are always strings</li>
      <li><strong>localStorage</strong> → values are always strings</li>
    </ul>
  `,

  /* 3.3 See also */
  'topics-1-1-3-3': `
    <ul>
      <li>Type coercion</li>
      <li><code>Number()</code>, <code>parseInt()</code>, <code>parseFloat()</code></li>
      <li><code>String()</code></li>
      <li><code>Boolean()</code></li>
      <li>Strict vs loose equality</li>
      <li>NaN</li>
      <li>Truthy and falsy values</li>
    </ul>
  `,


  /* ===== Sub-lesson: 3.9 Functions → what functions are =====
     Path: topics-8-0-{chunkIndex}-{pieceIndex}
  */

  /* --- Chunk 0: What & How --- */

  /* 0.0 What it is */
  'topics-8-0-0-0': `
    <p>A function is a reusable block of code that performs a task when you call it.</p>
    <p>You write the steps once, give the block a name, and then run those steps any time you want by writing the name with <code>()</code> after it.</p>
  `,

  /* 0.1 Syntax */
  'topics-8-0-0-1': `
<pre class="language-javascript"><code class="language-javascript">function greet() {
  console.log("Hello");
}

greet();   // run the function — prints "Hello"
greet();   // run it again — prints "Hello" again
greet();   // and again</code></pre>
    <p>The function is <em>defined</em> once. It can be <em>called</em> as many times as you want.</p>
  `,

  /* 0.2 Anatomy / Breakdown */
  'topics-8-0-0-2': `
<pre class="language-javascript"><code class="language-javascript">function greet(name) {
  console.log("Hello, " + name);
}

// function       → keyword that creates a function
// greet          → the function name
// (name)         → the parameter list — placeholder inputs
// { ... }        → the function body — the code that runs
// console.log()  → the work the function does
// greet("Os")    → calling the function with the argument "Os"</code></pre>
  `,

  /* 0.3 Syntax Details That Matter */
  'topics-8-0-0-3': `
    <p>The parentheses are required — even when there are no inputs:</p>
<pre class="language-javascript"><code class="language-javascript">function sayHi() {     // correct: empty parentheses
  console.log("hi");
}

function sayHi {       // wrong: SyntaxError — missing ()
  console.log("hi");
}</code></pre>

    <p>The curly braces hold the function's code:</p>
<pre class="language-javascript"><code class="language-javascript">function add(a, b) {
  return a + b;        // everything between { and } is the function body
}</code></pre>

    <p>Defining is not the same as calling:</p>
<pre class="language-javascript"><code class="language-javascript">function greet() {
  console.log("Hello");
}

greet;     // wrong: just the name — does NOT run the function
greet();   // correct: the () actually runs it</code></pre>
    <p>That trailing <code>()</code> is the part that makes the function actually do its work. Without it, you're just <em>referring</em> to the function, not running it.</p>
  `,

  /* --- Chunk 1: Why & When --- */

  /* 1.0 What problem it solves */
  'topics-8-0-1-0': `
    <p>Real code repeats the same steps over and over — validating input, formatting a price, updating the page. Without functions, you'd copy-paste those steps everywhere they're needed. When the logic changed, you'd have to update every copy.</p>
    <p>A function lets you write the steps once and reuse them anywhere.</p>
  `,

  /* 1.1 Why use it */
  'topics-8-0-1-1': `
    <p>Use a function any time you find yourself writing the same logic more than once, or when a chunk of code does one clear job that deserves a name.</p>
<pre class="language-javascript"><code class="language-javascript">// Without a function — repeating the same steps
const price1 = 19.99;
console.log("$" + price1.toFixed(2));

const price2 = 5.50;
console.log("$" + price2.toFixed(2));

const price3 = 100;
console.log("$" + price3.toFixed(2));

// With a function — write it once, reuse it
function formatPrice(price) {
  return "$" + price.toFixed(2);
}

console.log(formatPrice(19.99));
console.log(formatPrice(5.50));
console.log(formatPrice(100));</code></pre>
    <p>If the formatting needs to change later — say, adding a comma for thousands — you change it in one place.</p>
  `,

  /* 1.2 Where you use it */
  'topics-8-0-1-2': `
    <p>Functions are everywhere in real JavaScript. Almost any code that does meaningful work lives inside one.</p>
<pre class="language-javascript"><code class="language-javascript">function handleClick() {                  // event handler
  console.log("button clicked");
}
button.addEventListener("click", handleClick);

function isValidEmail(email) {            // validation helper
  return email.includes("@");
}

function renderProduct(product) {         // building DOM
  const card = document.createElement("div");
  card.textContent = product.name;
  return card;
}

async function loadUsers() {              // fetching API data
  const response = await fetch("/api/users");
  return response.json();
}</code></pre>
  `,

  /* 1.3 Plain English explanation */
  'topics-8-0-1-3': `
    <p>Think of a function like a recipe card. The card has a name, a list of ingredients (the parameters), and steps to follow (the body). The recipe just sits there until someone says "make it" — that's calling the function.</p>
    <p>The recipe doesn't do anything by existing. It only runs when you call it. And once you've written the recipe, you can use it as many times as you want without rewriting the steps.</p>
  `,

  /* 1.4 Mental model */
  'topics-8-0-1-4': `
    <p>A function is a labeled action you can trigger by name.</p>
<pre class="language-javascript"><code class="language-javascript">function greet() { ... }

// greet    →  the action of greeting
// greet()  →  actually do the greeting now</code></pre>
    <p>The name points at the action. The <code>()</code> runs the action.</p>
  `,

  /* 1.5 Step-by-step walkthrough */
  'topics-8-0-1-5': `
<pre class="language-javascript"><code class="language-javascript">function double(x) {
  return x * 2;
}

const result = double(5);
console.log(result);

// JavaScript is thinking:
// Line 1: see function double → register a function called double, remember its parameter list.
// Line 2: read the body — don't run it yet, just store it as part of the function.
// Line 3: end of function definition.
// Line 5: see double(5) → look up the function, call it with 5 as x, run the body, get 10 back, store it in result.
// Line 6: look up result → 10 → log 10.</code></pre>
  `,

  /* --- Chunk 2: The Click --- */

  /* 2.0 Debugging clue */
  'topics-8-0-2-0': `
    <p>If a function isn't doing what you expect, the first three questions are: <strong>did it actually run? what did it receive? what did it return?</strong></p>
<pre class="language-javascript"><code class="language-javascript">function double(x) {
  console.log("ran with:", x);    // did it run? what came in?
  return x * 2;
}

const result = double(5);
console.log("returned:", result); // what came out?</code></pre>
    <p>The most common function errors:</p>
<pre class="language-javascript"><code class="language-javascript">function greet() { console.log("hi"); }
greet;
// wrong: just references the function, never runs it
// fix: add () → greet()

const result = greet();
function greet() { console.log("hi"); }
// result is undefined — greet() didn't return anything

function add(a, b) { a + b; }
const sum = add(2, 3);
// wrong: forgot return — sum is undefined</code></pre>
  `,

  /* 2.1 The part that makes it click */
  'topics-8-0-2-1': `
    <p>A function is two separate things: <strong>defining</strong> it, and <strong>calling</strong> it.</p>
    <p>Defining writes the recipe. Calling runs the recipe. The <code>()</code> is what runs it.</p>
    <p>Without <code>()</code>, you have the function as a value — useful for passing around. With <code>()</code>, you trigger its work.</p>
  `,

  /* 2.2 Common confusions */
  'topics-8-0-2-2': `
    <p><strong>Confusion: <code>greet</code> vs <code>greet()</code></strong></p>
<pre class="language-javascript"><code class="language-javascript">function greet() {
  return "hello";
}

console.log(greet);    // logs the function itself (the recipe card)
console.log(greet());  // logs "hello" (the result of running it)</code></pre>
    <p>Without <code>()</code>, you're holding the function as a value. With <code>()</code>, you're running it.</p>

    <p><strong>Confusion: parameters vs arguments</strong></p>
<pre class="language-javascript"><code class="language-javascript">function add(a, b) {     // a and b are parameters — placeholders
  return a + b;
}

add(5, 3);                // 5 and 3 are arguments — actual values</code></pre>
    <p>Parameters are written when you define the function. Arguments are passed when you call it.</p>

    <p><strong>Confusion: <code>console.log()</code> vs <code>return</code></strong></p>
<pre class="language-javascript"><code class="language-javascript">function doubleA(x) {
  console.log(x * 2);       // shows it in the console, but doesn't hand it back
}

function doubleB(x) {
  return x * 2;             // hands the value back to whoever called it
}

const a = doubleA(5);   // logs 10, but a is undefined
const b = doubleB(5);   // b is 10</code></pre>
    <p><code>console.log</code> shows. <code>return</code> hands back.</p>
  `,

  /* 2.3 Common mistakes */
  'topics-8-0-2-3': `
<pre class="language-javascript"><code class="language-javascript">function greet() { console.log("hi"); }
greet;
// wrong: missing () — function is referenced but not called</code></pre>

<pre class="language-javascript"><code class="language-javascript">function add(a, b) {
  a + b;
}
const sum = add(2, 3);
// wrong: forgot the return — sum is undefined</code></pre>

<pre class="language-javascript"><code class="language-javascript">function greet(name) {
  console.log("hi, " + name);
}
greet();
// works, but name is undefined → "hi, undefined"</code></pre>

<pre class="language-javascript"><code class="language-javascript">function getUser() {
  return { name: "Os" };
}
console.log(getUser.name);
// wrong: getUser is the function, not the returned object
// fix: getUser().name</code></pre>

<pre class="language-javascript"><code class="language-javascript">function function() { ... }
// wrong: 'function' is a reserved keyword, not a valid name</code></pre>
  `,

  /* --- Chunk 3: In Practice --- */

  /* 3.0 Tiny examples */
  'topics-8-0-3-0': `
<pre class="language-javascript"><code class="language-javascript">// Function with no inputs, no output
function sayHi() {
  console.log("hi");
}
sayHi();

// Function with input, no output
function logName(name) {
  console.log("Hello, " + name);
}
logName("Os");

// Function with input and output
function double(n) {
  return n * 2;
}
const result = double(7);   // 14

// Function with multiple inputs
function add(a, b) {
  return a + b;
}
const sum = add(5, 3);      // 8</code></pre>
  `,

  /* 3.1 Real website uses */
  'topics-8-0-3-1': `
    <p><strong>Example: a click handler</strong></p>
<pre class="language-javascript"><code class="language-javascript">function handleAddToCart() {
  cartCount = cartCount + 1;
  cartBadge.textContent = cartCount;
}
addBtn.addEventListener("click", handleAddToCart);</code></pre>

    <p><strong>Example: form validation helper</strong></p>
<pre class="language-javascript"><code class="language-javascript">function isValidEmail(email) {
  return email.includes("@") && email.length > 3;
}

if (isValidEmail(emailInput.value)) {
  submitForm();
}</code></pre>

    <p><strong>Example: building a product card</strong></p>
<pre class="language-javascript"><code class="language-javascript">function buildProductCard(product) {
  const card = document.createElement("div");
  card.className = "card";
  card.textContent = product.name;
  return card;
}

const card = buildProductCard({ name: "Hat" });
document.body.appendChild(card);</code></pre>

    <p><strong>Example: formatting a price</strong></p>
<pre class="language-javascript"><code class="language-javascript">function formatPrice(price) {
  return "$" + price.toFixed(2);
}

priceLabel.textContent = formatPrice(19.99);   // "$19.99"</code></pre>
  `,

  /* 3.2 Connects to */
  'topics-8-0-3-2': `
    <ul>
      <li><strong>Parameters</strong> → the named placeholders for inputs</li>
      <li><strong>Arguments</strong> → the actual values passed in when you call</li>
      <li><strong>Return</strong> → how a function hands a value back to its caller</li>
      <li><strong>Scope</strong> → variables inside a function can't be reached from outside</li>
      <li><strong>Events</strong> → event handlers are functions</li>
      <li><strong>Callbacks</strong> → functions passed into other functions</li>
      <li><strong>Arrow functions</strong> → a shorter syntax for writing functions</li>
      <li><strong>DOM</strong> → most page updates happen inside functions</li>
    </ul>
  `,

  /* 3.3 See also */
  'topics-8-0-3-3': `
    <ul>
      <li>Function declaration</li>
      <li>Function expression</li>
      <li>Arrow function</li>
      <li>Parameters</li>
      <li>Arguments</li>
      <li>Return values</li>
      <li><code>console.log()</code> vs <code>return</code></li>
      <li>Scope</li>
      <li>Callback functions</li>
      <li>Common function mistakes</li>
    </ul>
  `,

};
