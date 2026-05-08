   Object.assign(CONTENT, {



      /* ==========================================================
     SECTION 3: MAIN TOPIC GUIDES / LESSON CONTENT
     COVERS THE BASIC LESSONS 3.2 ONLY
     ========================================================== */


      /* ==========================================================
     LESSON 3.2 DATA TYPES
     ========================================================== */


  /* ===== Sub-lesson: 3.2.1 Data Types → what data types are =====
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
9999999999999999n      // bigint (notice the trailing "n")
</code></pre>
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
// it's determined by HOW the value is written.
</code></pre>
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
typeof 99n;            // "bigint"
</code></pre>

    <p>Each type has its own way of being written:</p>
<pre class="language-javascript"><code class="language-javascript">"hello"           // string — quotes
42                 // number — no quotes
true               // boolean — keyword
[1, 2]             // array — square brackets
{ x: 1 }           // object — curly braces
function(){}       // function — function keyword (or arrow syntax)
null               // null — keyword
undefined          // undefined — keyword (rarely written by hand)
</code></pre>

    <p>Same-looking values can be different types — and behave very differently:</p>
<pre class="language-javascript"><code class="language-javascript">const a = 25;        // number
const b = "25";       // string

a + 1;                // 26  — number addition
b + 1;                // "251"  — string concatenation

typeof a;             // "number"
typeof b;             // "string"
</code></pre>
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
const userAge = Number(userInput);      // convert to number for math
</code></pre>
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
const users = await response.json();      // typically an array of objects
</code></pre>
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
{ x: 1 }   // identity: object  → has named properties to access
</code></pre>
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

// Same operator, different behavior — driven by the types.
</code></pre>
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
console.log(score + 5);         // 105
</code></pre>

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
if (status === 0) { /* doesn't run — "0" string ≠ 0 number */ }
</code></pre>
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
// Loose == can hide type bugs.
</code></pre>

    <p><strong>Confusion: <code>typeof null</code> is "object"</strong></p>
<pre class="language-javascript"><code class="language-javascript">typeof null;    // "object"  ← historical JS bug, never fixed

// To check for null specifically:
if (value === null) { }
</code></pre>

    <p><strong>Confusion: arrays are technically objects</strong></p>
<pre class="language-javascript"><code class="language-javascript">typeof [1, 2, 3];    // "object" — arrays are objects under the hood

// To specifically check for an array:
Array.isArray([1, 2, 3]);    // true
Array.isArray({ x: 1 });      // false
</code></pre>

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
console.log(x.count);   // 10 — same object!
</code></pre>
  `,

  /* 2.3 Common mistakes */
  'topics-1-0-2-3': `
<pre class="language-javascript"><code class="language-javascript">const age = ageInput.value + 5;
// wrong: ageInput.value is a string — concatenation, not math
// fix: convert first
const age = Number(ageInput.value) + 5;
</code></pre>

<pre class="language-javascript"><code class="language-javascript">if (typeof user == "object") { /* matches arrays AND null too */ }
// risky: too broad
// fix: be specific
if (user !== null && !Array.isArray(user) && typeof user === "object") { }
</code></pre>

<pre class="language-javascript"><code class="language-javascript">25 == "25";    // true (loose equality)
// risky: hides type bugs
// fix: use strict equality
25 === "25";   // false (strict)
</code></pre>

<pre class="language-javascript"><code class="language-javascript">if (typeof null === "object") {
  // null passes the "is object" check — surprise
}
// fix: check for null first
if (value !== null && typeof value === "object") { }
</code></pre>

<pre class="language-javascript"><code class="language-javascript">const items = [];
typeof items === "array";
// wrong: typeof returns "object" for arrays
// fix:
Array.isArray(items);   // true
</code></pre>
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
5 + 5;          // 10 — number add
</code></pre>
  `,

  /* 3.1 Real website uses */
  'topics-1-0-3-1': `
    <p><strong>Example: converting form input from string to number</strong></p>
<pre class="language-javascript"><code class="language-javascript">const ageInput = document.querySelector("#age");
const age = Number(ageInput.value);    // string → number for math

if (age >= 18) {
  enableSignup();
}
</code></pre>

    <p><strong>Example: checking the shape of API data before using it</strong></p>
<pre class="language-javascript"><code class="language-javascript">const response = await fetch("/api/user");
const data = await response.json();

if (Array.isArray(data)) {
  data.forEach(renderUser);
} else if (typeof data === "object" && data !== null) {
  renderUser(data);
}
</code></pre>

    <p><strong>Example: type-aware validation</strong></p>
<pre class="language-javascript"><code class="language-javascript">function validatePrice(price) {
  if (typeof price !== "number") {
    return "Price must be a number";
  }
  if (price < 0) {
    return "Price cannot be negative";
  }
  return null;   // valid
}
</code></pre>

    <p><strong>Example: protecting against unexpected types from external code</strong></p>
<pre class="language-javascript"><code class="language-javascript">function greet(name) {
  if (typeof name !== "string") {
    name = String(name);    // convert to string as fallback
  }
  return "Hi " + name;
}
</code></pre>
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


  /* ===== Sub-lesson: 3.2.2 Data Types → why data types matter =====
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
"5" / 5;        // 1  (same)
</code></pre>
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
// The TYPE is what tells JS which version of + to use.
</code></pre>
  `,

  /* 0.3 Syntax Details That Matter */
  'topics-1-1-0-3': `
    <p>The <code>+</code> operator is the most type-sensitive. With strings, it joins. With numbers, it adds. Mix them, and JavaScript silently converts to a string:</p>
<pre class="language-javascript"><code class="language-javascript">5 + 5;        // 10
"5" + 5;      // "55"  — JS converted 5 to "5" and joined
5 + "5";      // "55"  — same thing
</code></pre>

    <p>Other math operators auto-convert strings to numbers:</p>
<pre class="language-javascript"><code class="language-javascript">"5" * 2;      // 10  — JS converted "5" to 5
"5" - 2;      // 3
"5" / 2;      // 2.5

// But "+" is special — it prefers concat when ANY side is a string.
</code></pre>

    <p>Comparison operators also behave differently for different types:</p>
<pre class="language-javascript"><code class="language-javascript">"100" > 50;   // true — JS coerces "100" to 100, then compares
"abc" > 50;   // false — "abc" can't become a number, becomes NaN

// Lexicographic vs numeric:
"10" > "9";   // false — string comparison, "1" < "9"
10 > 9;       // true  — number comparison
</code></pre>

    <p>Methods only work on the right type:</p>
<pre class="language-javascript"><code class="language-javascript">"hello".toUpperCase();    // "HELLO" — string method works
(5).toUpperCase();          // TypeError — numbers don't have this method

[1, 2, 3].push(4);         // works — arrays have push
"hello".push("!");          // TypeError — strings don't
</code></pre>
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
// 15
</code></pre>
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
const obj = JSON.parse(text);          // string → object
</code></pre>
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
// (* coerces the string to a number) → 25
</code></pre>
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
// + between string and number coerced to string (could be a bug if unintended).
</code></pre>
  `,

  /* --- Chunk 2: The Click --- */

  /* 2.0 Debugging clue */
  'topics-1-1-2-0': `
    <p>When you get a wrong-looking result, check the types of every value involved:</p>
<pre class="language-javascript"><code class="language-javascript">const result = a + b;
console.log(a, typeof a, b, typeof b, result);

// If a is "10" string and b is 5 number, result is "105" — that's the bug.
</code></pre>

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
// Fix: convert to a consistent type before comparing
</code></pre>
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

// Only + is "string-aware." Others coerce to numbers.
</code></pre>

    <p><strong>Confusion: form input is always a string</strong></p>
<pre class="language-javascript"><code class="language-javascript">// Even &lt;input type="number"&gt; gives you a string
const ageInput = document.querySelector("#age");
typeof ageInput.value;     // "string" — even if user typed digits
</code></pre>

    <p><strong>Confusion: <code>"0"</code> is truthy but <code>0</code> is falsy</strong></p>
<pre class="language-javascript"><code class="language-javascript">if ("0") {  /* runs — non-empty string is truthy */ }
if (0)   {  /* doesn't run — 0 is falsy */ }
"0" === 0    // false (different types)
"0" == 0     // true (loose, type-coercing)
</code></pre>

    <p><strong>Confusion: comparing strings does lexicographic compare</strong></p>
<pre class="language-javascript"><code class="language-javascript">"10" > "9";    // false  ← string compare: "1" < "9"
10 > 9;        // true   ← number compare: 10 > 9
"10" > 9;      // true   ← coerced "10" → 10, then number compare
</code></pre>
  `,

  /* 2.3 Common mistakes */
  'topics-1-1-2-3': `
<pre class="language-javascript"><code class="language-javascript">const total = priceInput.value + 5;
// wrong: input is a string, + with string = concat
// fix:
const total = Number(priceInput.value) + 5;
</code></pre>

<pre class="language-javascript"><code class="language-javascript">const isOpen = localStorage.getItem("menu") || false;
// wrong: getItem returns a string or null. "false" string is truthy.
// fix:
const isOpen = localStorage.getItem("menu") === "true";
</code></pre>

<pre class="language-javascript"><code class="language-javascript">if (count == "0") { }
// wrong (loose): coerces — true even if count is 0 number
// fix: use strict equality
if (count === 0) { }
</code></pre>

<pre class="language-javascript"><code class="language-javascript">const sorted = ["10", "9", "1"].sort();
// wrong: lexicographic — sorts as ["1", "10", "9"]
// fix: provide a numeric compare function
const sorted = [10, 9, 1].sort((a, b) => a - b);
</code></pre>

<pre class="language-javascript"><code class="language-javascript">const x = "5" * 2;      // 10 — sometimes works
const y = "abc" * 2;    // NaN — but only if it's a clean number string
// fix: validate before doing math
const num = Number("abc");
if (isNaN(num)) { /* handle bad input */ }
</code></pre>
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
typeof true;        // "boolean"
</code></pre>
  `,

  /* 3.1 Real website uses */
  'topics-1-1-3-1': `
    <p><strong>Example: converting form values for math</strong></p>
<pre class="language-javascript"><code class="language-javascript">const price = Number(priceInput.value);
const quantity = Number(qtyInput.value);
const total = price * quantity;
totalDisplay.textContent = total;
</code></pre>

    <p><strong>Example: parsing booleans from localStorage</strong></p>
<pre class="language-javascript"><code class="language-javascript">// Save
localStorage.setItem("darkMode", true);

// Read — strings only
const darkMode = localStorage.getItem("darkMode") === "true";

if (darkMode) {
  document.body.classList.add("dark");
}
</code></pre>

    <p><strong>Example: comparing API values consistently</strong></p>
<pre class="language-javascript"><code class="language-javascript">const userId = currentUser.id;             // could be number or string
const requestedId = Number(requestedIdParam);

if (userId === requestedId) {
  // matches only if BOTH are number
}
</code></pre>

    <p><strong>Example: validating type before using a method</strong></p>
<pre class="language-javascript"><code class="language-javascript">function showName(name) {
  if (typeof name !== "string") {
    return;   // bail out early
  }
  console.log(name.toUpperCase());
}
</code></pre>
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
   });
  


