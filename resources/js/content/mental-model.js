Object.assign(CONTENT, {

  /* ==========================================================
     SECTION 2: MENTAL MODELS / LESSON CONTENT
     ========================================================== */

     /*
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
     */

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
null         // an "empty on purpose" value
</code></pre>
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
// then it prints "Os"
</code></pre>
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
\`hello\`     // backticks — also a string (special powers, see template literals)
</code></pre>
<pre class="language-javascript"><code class="language-javascript">const greeting = "Hi there";
// stores the string "Hi there" in the greeting variable
// the quotes are NOT part of the value — they just mark where the text starts and ends
</code></pre>
    <div class="callout callout--wrongright">
      <div class="callout__label">Wrong vs right</div>
      <div class="callout__body">
<pre class="language-javascript"><code class="language-javascript">"Hi there"   // ✅ string — has quotes
Hi there     // ❌ error — JS thinks "Hi" is a variable name
</code></pre>
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
const score = -3;      // negatives are numbers too
</code></pre>
    <div class="callout callout--wrongright">
      <div class="callout__label">Wrong vs right</div>
      <div class="callout__body">
<pre class="language-javascript"><code class="language-javascript">const a = 5 + 3;       // a is 8 — math worked
const b = "5" + "3";   // b is "53" — those are strings, JS glued them together
</code></pre>
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
}
</code></pre>
    <div class="callout callout--mistake">
      <div class="callout__label">Common mistake</div>
      <div class="callout__body">
<pre class="language-javascript"><code class="language-javascript">true      // ✅ boolean — the literal value
"true"    // ❌ this is a STRING, not a boolean
          // strings can mislead: "false" is actually treated as truthy!
</code></pre>
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
// 3 — how many items the array has
</code></pre>
<pre class="language-javascript"><code class="language-javascript">const mixed = [1, "two", true, null];
// arrays can hold any types of values, mixed together
</code></pre>
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
// 25
</code></pre>
<pre class="language-javascript"><code class="language-javascript">user.name        // "Os"  — dot notation
user["name"]     // "Os"  — bracket notation, same thing
user.email       // undefined — no email key was set
</code></pre>
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
// later, the selection is cleared back to "nothing"
</code></pre>
    <div class="callout callout--debug">
      <div class="callout__label">Debugging clue</div>
      <div class="callout__body">
<pre class="language-javascript"><code class="language-javascript">const button = document.querySelector(".missing-class");
// no element matches → button is null

button.addEventListener("click", ...);
// ❌ TypeError: Cannot read properties of null
// JS is saying: "button is null — there's nothing here to attach to"
</code></pre>
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
// undefined — the function ran but returned nothing
</code></pre>
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
// "Sam" — the variable hasn't changed, but what it points to has
</code></pre>
<pre class="language-javascript"><code class="language-javascript">const a = "hello";
const b = a;
// b also points at "hello" — same value, two variables
</code></pre>
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
}
</code></pre>
<pre class="language-javascript"><code class="language-javascript">const colors = ["red", "blue", "green"];
//             ^^^^^^^^^^^^^^^^^^^^^^^^ array literal
//              ^^^^^ ^^^^^^ ^^^^^^^ each is a string literal
</code></pre>
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
// 10
</code></pre>
    <div class="callout callout--mistake">
      <div class="callout__label">Common mistake</div>
      <div class="callout__body">
<pre class="language-javascript"><code class="language-javascript">function greet(name) {
  console.log("Hi " + name);
  // logs something, but does NOT return anything
}

const message = greet("Os");
// "Hi Os" gets logged
// but message is undefined — nothing was returned
</code></pre>
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
// typed is now a string of whatever they wrote
</code></pre>
    <div class="callout callout--syntax">
      <div class="callout__label">Syntax detail that matters</div>
      <div class="callout__body">
<pre class="language-javascript"><code class="language-javascript">const ageInput = document.querySelector("#age");
ageInput.value
// "25" — a STRING, even though it looks like a number

Number(ageInput.value)
// 25 — an actual number, after converting
</code></pre>
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
}
</code></pre>
    <div class="callout callout--mistake">
      <div class="callout__label">Common mistake</div>
      <div class="callout__body">
<pre class="language-javascript"><code class="language-javascript">const data = fetch("...");
// ❌ data is a Promise, not the value
// you forgot to await it
</code></pre>
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
// now the user sees: "Welcome, Os"
</code></pre>
<pre class="language-javascript"><code class="language-javascript">const score = 100;
const display = document.querySelector(".score");

display.textContent = score;
// works — JS converts the number to text automatically when displayed
</code></pre>
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
// "Os" — JS looks up the label and gives you what's inside
</code></pre>
<pre class="language-javascript"><code class="language-javascript">// without a variable — you'd repeat yourself
console.log("Welcome, Os");
console.log("Goodbye, Os");

// with a variable — write the value once, reuse it
const name = "Os";
console.log("Welcome, " + name);
console.log("Goodbye, " + name);
</code></pre>
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
// now score is 15
</code></pre>
    <div class="callout callout--mistake">
      <div class="callout__label">Common mistake</div>
      <div class="callout__body">
<pre class="language-javascript"><code class="language-javascript">let score = 0;
let score = 10;
// ❌ SyntaxError: Identifier 'score' has already been declared
// once declared, just reassign — don't redeclare
</code></pre>
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
// you can't point this label at anything else
</code></pre>
    <div class="callout callout--syntax">
      <div class="callout__label">Syntax detail that matters</div>
      <div class="callout__body">
<pre class="language-javascript"><code class="language-javascript">const user = { name: "Os" };

user = { name: "Sam" };
// ❌ Error — can't reassign the variable

user.name = "Sam";
// ✅ Allowed — the variable still points at the same object,
//    we just changed what's INSIDE the object
</code></pre>
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
// then 15 gets assigned to total
</code></pre>
    <div class="callout callout--wrongright">
      <div class="callout__label">Wrong vs right</div>
      <div class="callout__body">
<pre class="language-javascript"><code class="language-javascript">const x = 5;       // ✅ assignment — x is now 5
if (x = 10) {}     // ❌ accidentally assigning, not comparing!
if (x === 10) {}   // ✅ comparison — checks if x equals 10
</code></pre>
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
// 2
</code></pre>
<pre class="language-javascript"><code class="language-javascript">const score = 0;
score = 10;
// ❌ TypeError — const cannot be reassigned
</code></pre>
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
// listens for clicks on the real element
</code></pre>
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
btn.addEventListener("click", () => {});
</code></pre>
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
// result is now 10
</code></pre>
<pre class="language-javascript"><code class="language-javascript">const name = "os";

const upper = name.toUpperCase();
// .toUpperCase() returns a new uppercase string
// upper is now "OS"
// the original "os" is unchanged
</code></pre>
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
// ✅ called it — sum is now 5
</code></pre>
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
// one variable, one object value (which holds two properties)
</code></pre>
<pre class="language-javascript"><code class="language-javascript">const user = { name: "Os" };

user.name = "Sam";
// ✅ allowed — modifying inside the object
// const blocked reassignment, not modification

user = { name: "Sam" };
// ❌ TypeError — that IS reassignment
</code></pre>
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
localStorage.clear();
</code></pre>
    <div class="callout callout--syntax">
      <div class="callout__label">Syntax detail that matters</div>
      <div class="callout__body">
<pre class="language-javascript"><code class="language-javascript">const user = { name: "Os", age: 25 };

localStorage.setItem("user", user);
// ❌ stores the string "[object Object]" — useless

localStorage.setItem("user", JSON.stringify(user));
// ✅ stores the object as a JSON string

const saved = JSON.parse(localStorage.getItem("user"));
// ✅ parsed back into a real object
</code></pre>
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
// disappears on refresh
</code></pre>
<pre class="language-javascript"><code class="language-javascript">// LOCALSTORAGE — permanent, persists across reloads
localStorage.setItem("cartCount", "1");

// later, even after the user closes and reopens the page
const saved = localStorage.getItem("cartCount");
// "1" — still there
</code></pre>
<pre class="language-javascript"><code class="language-javascript">// COMMON PATTERN: load from storage on startup, work with a variable, save back when it changes
let cartCount = Number(localStorage.getItem("cartCount")) || 0;

function addToCart() {
  cartCount = cartCount + 1;
  localStorage.setItem("cartCount", cartCount);
}
</code></pre>
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
// localName died when greet() finished
</code></pre>
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


});