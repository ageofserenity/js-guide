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

};
