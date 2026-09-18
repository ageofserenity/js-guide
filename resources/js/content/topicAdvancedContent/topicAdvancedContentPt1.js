Object.assign(CONTENT, {

      /* ==========================================================
     SECTION 3: MAIN TOPIC GUIDES / LESSON CONTENT
     COVERS THE ADVANCED LESSONS 3.10 - 3.18
     ========================================================== */

/* ========================================================= 
   Sub-lesson: 3.10.1 Arrays → what arrays are
 =======================================================*/

  /* --- Chunk 0: What & How --- */

  /* 0.0 What it is */
  'topics-9-0-0-0': `
    <p>An <strong>array</strong> is an ordered list of values stored under a single variable name that uses <code>[]</code>. Instead of creating separate variables for each item (<code>item1</code>, <code>item2</code>, <code>item3</code>), you pack them into one array <code>[<code>item1</code>, <code>item2</code>, <code>item3</code>]</code>and reach into it by position. Arrays are how JavaScript represents any collection where order matters and items are accessed by their spot in line — a shopping list, search results, log entries, coordinates, anything that's naturally a sequence.</p>
    <p>Every value in an array has an <strong>index</strong>, which is its position starting from 0. The array itself is a single object, but it holds many values inside it, and each value can be any type — strings, numbers, booleans, objects, other arrays, even a mix of all of those. Arrays are the most-used data structure in JavaScript, and understanding them is the foundation for iteration, transformation, and almost every real-world data operation you'll write.</p>
  `,

  /* 0.1 Syntax */
  'topics-9-0-0-1': `
<pre class="language-javascript"><code class="language-javascript">// Creating an array — square brackets, values separated by commas:
const colors = ['red', 'green', 'blue'];
const scores = [90, 85, 72, 100];
const flags  = [true, false, true];

// Arrays can hold any type — including mixed types:
const mixed = ['Os', 30, true, null];

// Arrays can hold objects, other arrays, functions:
const users = [
  { name: 'Os', role: 'admin' },
  { name: 'Sam', role: 'user' }
];

const grid = [
  [1, 2, 3],
  [4, 5, 6],
  [7, 8, 9]
];

// Empty array — valid, length 0:
const empty = [];

// Single-item array — valid, length 1:
const one = ['only'];

// Accessing values by index (starts at 0):
colors[0];        // "red"    — first
colors[1];        // "green"  — second
colors[2];        // "blue"   — last (index 2, because length is 3)
colors[3];        // undefined — no value at that index

// The array's length property tells you how many items are in it:
colors.length;    // 3
empty.length;     // 0

// Arrays are MUTABLE — you can change values at an index:
colors[0] = 'orange';
colors;           // ["orange", "green", "blue"]

// Adding a new item at the end:
colors.push('yellow');
colors;           // ["orange", "green", "blue", "yellow"]

// Wrong: forgetting the brackets
const notAnArray = 'red', 'green', 'blue';
// This isn't an array — it's a comma expression that evaluates to "blue"
// fix: wrap in brackets → ['red', 'green', 'blue']</code></pre>
  `,

  /* 0.2 Anatomy / Breakdown */
  'topics-9-0-0-2': `
<pre class="language-javascript"><code class="language-javascript">const colors = ['red', 'green', 'blue'];

// Visualize the array as a numbered row of slots:
//
//   index:   0       1        2
//   value:   "red"   "green"  "blue"
//   length:  ────────3────────────────
//
// Just like strings, indexes start at 0.
// The array has 3 items, so the highest valid index is 2 (length - 1).

colors[0];              // "red"    — first
colors[1];              // "green"
colors[colors.length - 1]; // "blue" — last (index 2)
colors[3];              // undefined — one past the end

// The parts of an array:
//   const colors = ['red', 'green', 'blue'];
//   │     │      │  │      │        │      │
//   │     │      │  │      │        │      └── closing bracket
//   │     │      │  │      │        └───────── third value
//   │     │      │  │      └────────────────── second value
//   │     │      │  └───────────────────────── first value
//   │     │      └──────────────────────────── opening bracket
//   │     └─────────────────────────────────── variable name
//   └───────────────────────────────────────── const keyword

// Important: const on an array means the VARIABLE can't be reassigned
// to a different array. It does NOT mean the array itself is frozen.
// You can still modify the contents:
colors[0] = 'purple';   // ✓ allowed — modifying inside the array
colors.push('yellow');  // ✓ allowed — adding to the array
colors = ['a', 'b'];    // ✗ TypeError — reassigning the variable

// This is different from strings, which ARE frozen — you can't do word[0] = 'x'.
// Arrays and strings look similar (both indexed, both have length), but
// arrays are mutable and strings are not.</code></pre>
  `,

  /* 0.3 Syntax Details That Matter */
  'topics-9-0-0-3': `
    <p><strong>Arrays use square brackets — both for creation and for access.</strong> <code>['a', 'b', 'c']</code> creates an array. <code>myArray[0]</code> reads or writes the value at index 0. Same bracket symbol, two different jobs — the parser tells them apart by context (whether the brackets are next to a value, or next to a variable name).</p>
<pre class="language-javascript"><code class="language-javascript">const arr = [1, 2, 3];        // brackets on the right side — creating an array
arr[0];                       // brackets after a variable — accessing an index
arr[0] = 99;                  // brackets on the left side — writing to an index</code></pre>

    <p><strong>Indexes start at 0.</strong> Same rule as strings. The first item is at index 0, the last is at <code>length - 1</code>. Accessing an index past the end returns <code>undefined</code>, not an error. Negative indexes with brackets return <code>undefined</code> too — use <code>.at(-1)</code> if you want the last item without doing the math.</p>
<pre class="language-javascript"><code class="language-javascript">const scores = [90, 85, 72];
scores[0];                    // 90 — first
scores[scores.length - 1];    // 72 — last
scores[3];                    // undefined — past the end
scores[-1];                   // undefined — negative indexes don't work here
scores.at(-1);                // 72 — modern way to get the last item</code></pre>

    <p><strong>Arrays can hold any type of value — including mixed types.</strong> Unlike some other languages, JavaScript arrays aren't typed — <code>[1, 'a', true, null, [1, 2]]</code> is perfectly valid. In practice, most arrays hold one type (all numbers, all strings, all objects of the same shape), because iteration and transformation are simpler when the types are uniform. But nothing in the language enforces this.</p>

    <p><strong>Arrays are objects under the hood.</strong> <code>typeof [1, 2, 3]</code> returns <code>"object"</code>, not <code>"array"</code>. To reliably check if something is an array, use <code>Array.isArray(value)</code>. This is a common source of type-checking bugs — <code>typeof</code> doesn't distinguish arrays from other objects.</p>
<pre class="language-javascript"><code class="language-javascript">typeof [1, 2, 3];             // "object" — not "array"
typeof {};                    // "object"
typeof [];                    // "object"

Array.isArray([1, 2, 3]);     // true — the reliable check
Array.isArray({});            // false
Array.isArray('hello');       // false
Array.isArray(null);          // false</code></pre>

    <p><strong>Arrays are mutable — you can modify them in place.</strong> Unlike strings, you can change an array's contents without creating a new array. <code>arr[0] = 'new'</code> works. <code>arr.push('extra')</code> adds to the end. <code>arr.length = 2</code> truncates it. This mutability is powerful but also a source of bugs: if two variables reference the same array, changes through one variable are visible through the other.</p>
<pre class="language-javascript"><code class="language-javascript">const a = [1, 2, 3];
const b = a;                  // b and a point to the SAME array
b.push(4);
a;                            // [1, 2, 3, 4] — a sees the change too!

// To make an independent copy, spread or slice:
const c = [...a];             // a fresh copy — independent from a
const d = a.slice();          // same idea, older syntax
c.push(5);
a;                            // still [1, 2, 3, 4] — c is separate</code></pre>

    <p><strong>Trailing commas are allowed and often preferred.</strong> <code>[1, 2, 3,]</code> is the same as <code>[1, 2, 3]</code> — the trailing comma is ignored. Style guides often recommend using them because it makes multi-line arrays easier to diff (adding a new item only changes the new line, not the previous one).</p>
<pre class="language-javascript"><code class="language-javascript">const list = [
  'apple',
  'banana',
  'cherry',    // trailing comma — legal and often preferred
];
list.length;                  // 3, not 4 — the trailing comma is ignored</code></pre>
  `,

  /* --- Chunk 1: Why & When --- */

  /* 1.0 What problem it solves */
  'topics-9-0-1-0': `
    <p>Without arrays, you'd need a separate variable for every value you want to keep. Storing five students' names would require <code>student1</code>, <code>student2</code>, <code>student3</code>, <code>student4</code>, <code>student5</code> — and every operation you wanted to do (print all names, sort them, count them, add a new one) would need to be repeated for each variable. As soon as you don't know in advance how many items there will be, this approach breaks entirely — you can't create a variable called <code>student547</code> just in time.</p>
    <p>Arrays solve this by giving you a single container that holds any number of related values. You store them all under one name, refer to them by position, and use loops and array methods to operate on the whole collection at once. Adding a new item is one operation. Iterating through them is one loop. Sorting them is one method call. The complexity of managing many separate variables collapses into a single, uniform pattern that works for 3 items, 300 items, or 3 million.</p>
  `,

  /* 1.1 Why use it */
  'topics-9-0-1-1': `
    <p>Use arrays whenever you have a collection of related values where <strong>order matters</strong> and you want to access items by <strong>position</strong>. A list of search results. A queue of tasks. A grid of pixels. A timeline of events. The names of the days of the week. Coordinates on a map. Any group of things where "first," "second," "third" are meaningful concepts is a natural fit for an array.</p>
    <p>Arrays are also the input and output of many built-in JavaScript features. <code>document.querySelectorAll</code> returns something array-like. <code>JSON.parse</code> often produces arrays. <code>Object.keys</code> and <code>Object.values</code> return arrays. Splitting a string with <code>.split()</code> returns an array. Any time you're dealing with multiple values from a browser API, a network response, or a string operation, you're almost certainly holding an array.</p>
    <p>Choose an array when the collection is ordered and indexed. Choose an <strong>object</strong> instead when you want to look items up by <em>name</em> (like a phone book: name → number). Choose a <strong>Set</strong> when you want unique items with no duplicates. Choose a <strong>Map</strong> when you want key-value pairs where keys can be any type. Each collection type has a specialty; arrays' specialty is ordered lists accessed by numeric position.</p>
  `,

  /* 1.2 Where you use it */
  'topics-9-0-1-2': `
<pre class="language-javascript"><code class="language-javascript">// Storing multiple values under one name
const daysOfWeek = ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'];
const primeNumbers = [2, 3, 5, 7, 11, 13];

// Collecting user input over time
const clicks = [];
button.addEventListener('click', () => {
  clicks.push(Date.now());
});

// Storing API results
const posts = await fetch('/api/posts').then(r => r.json());
// posts is an array like [{ id: 1, title: '...' }, { id: 2, title: '...' }]

// Splitting a string into words
const words = sentence.split(' ');
// "hello world" → ["hello", "world"]

// Getting all matching DOM elements
const buttons = document.querySelectorAll('button');
// buttons is array-like (not a true array, but iterable and indexed)

// Storing coordinates
const point = [10, 20];   // [x, y]
const line = [[0, 0], [10, 10]];   // two points

// Task queues
const todos = ['buy milk', 'walk dog', 'reply to email'];

// Filtering and transforming a list
const scores = [90, 45, 78, 60, 30];
const passing = scores.filter(s => s >= 70);   // [90, 78]

// Iterating over a fixed sequence
for (const day of daysOfWeek) {
  console.log(day);
}

// Any time you say "a list of ___" in plain English, that's an array in code.</code></pre>
  `,

  /* 1.3 Plain English explanation */
  'topics-9-0-1-3': `
    <p>Think of an array like a numbered row of lockers at a gym. The row has one name — "the locker row" — but inside it are many individual lockers, each with a number (0, 1, 2, 3, ...) painted on the front. Each locker can hold something different: a shoe, a phone, a water bottle, another whole bag full of stuff. To get at what's in locker 3, you say "locker row, locker 3, please" — you don't need to remember the name of every individual locker, just the row and the position.</p>
    <p>The row also has a sign at the front telling you how many lockers it has. If the sign says 8, you know the lockers are numbered 0 through 7 (that's 8 slots, but the numbering starts at 0). If you ask for locker 8, there's no locker there — you get back "nothing" (<code>undefined</code>).</p>
    <p>Arrays are the same idea for values in code. One name for the whole group, numbered slots inside, and a length that tells you how many slots exist. You can peek in any slot by number, swap what's in a slot, add a new slot at the end, or take a slot away. The whole "collection of stuff you can refer to by position" concept is what arrays give you, and it turns out to be one of the most useful patterns in all of programming.</p>
  `,

  /* 1.4 Mental model */
  'topics-9-0-1-4': `
    <p>An array is a single object that behaves like an ordered list. Internally, JavaScript stores the items in a way that makes indexed access fast — reading <code>arr[5]</code> is a constant-time operation, no scanning required. The array also tracks its own length, which updates automatically as you add or remove items. All of this is bundled into one value that you pass around, store in variables, return from functions, and nest inside other structures.</p>
    <p>The mental picture: <em>an array is a container with numbered slots and a length counter</em>. Every operation on arrays is really an operation on one or more of those slots. Reading is looking in a slot. Writing is putting something in a slot. Pushing is adding a new slot at the end and putting something in it. Iterating is walking through the slots in order. Filtering is walking through and skipping some slots. Mapping is walking through and transforming each slot's content into a new array.</p>
    <p>The critical mental hook that separates arrays from strings: <em>arrays are mutable, strings are not</em>. When you do <code>arr[0] = 'new'</code>, the array actually changes — the value in slot 0 is replaced, and any other variable pointing at the same array sees the change. This shared-mutation behavior is powerful (you can build up a list across multiple function calls, for instance) but also a source of bugs when you don't intend the sharing. If you want an independent copy, you have to make one explicitly with <code>[...arr]</code> or <code>arr.slice()</code>.</p>
  `,

  /* 1.5 Step-by-step walkthrough */
  'topics-9-0-1-5': `
<pre class="language-javascript"><code class="language-javascript">// Scenario: build a simple to-do list where users add tasks and see them displayed.

const todos = [];

const input = document.querySelector('#task');
const addBtn = document.querySelector('#add');
const list = document.querySelector('#list');

addBtn.addEventListener('click', () => {
  const task = input.value.trim();
  if (task.length === 0) return;

  todos.push(task);
  render();
  input.value = '';
});

function render() {
  list.innerHTML = '';
  for (let i = 0; i < todos.length; i++) {
    const li = document.createElement('li');
    li.textContent = \`\${i + 1}. \${todos[i]}\`;
    list.appendChild(li);
  }
}

// Walk through what happens when a user adds three tasks:

// Initial state:
//   todos = []
//   todos.length = 0

// User types "buy milk" and clicks Add:

// Step 1: task = input.value.trim() = "buy milk"
// Step 2: task.length is 8, not 0 — don't return early.
// Step 3: todos.push("buy milk")
//         The array grows: todos is now ["buy milk"]
//         todos.length is now 1.
// Step 4: render() runs.
//         Loop: i = 0, i < 1 is true
//         Create li with textContent "1. buy milk"
//         Append to list.
//         Loop: i = 1, i < 1 is false — done.
// Step 5: input.value = '' clears the textbox.

// User types "walk dog" and clicks Add:

// Step 6: todos.push("walk dog")
//         Array grows: ["buy milk", "walk dog"]
//         Length is now 2.
// Step 7: render() clears the list, loops from 0 to 1:
//         li 1: "1. buy milk"
//         li 2: "2. walk dog"

// User types "reply to email" and clicks Add:

// Step 8: todos.push("reply to email")
//         Array grows: ["buy milk", "walk dog", "reply to email"]
//         Length is now 3.
// Step 9: render() shows all three items.

// Notice how ONE variable (todos) holds all three tasks.
// Without arrays, you'd need todo1, todo2, todo3 — and rewriting the render
// function every time the count changed. With arrays, the same code works
// for 0 tasks, 3 tasks, or 3000 tasks. That's the power of ordered collections
// accessed by index.</code></pre>
  `,

  /* --- Chunk 2: The Click --- */

  /* 2.0 Debugging clue */
  'topics-9-0-2-0': `
    <p>Array-related bugs cluster around a few recognizable patterns.</p>
    <p><strong>1. "Cannot read property 'X' of undefined" when accessing an array element.</strong> You wrote <code>arr[5].name</code> but there's no item at index 5. The <code>arr[5]</code> returns <code>undefined</code>, and then <code>.name</code> on <code>undefined</code> throws. Fix: check the index is in range first, or use optional chaining: <code>arr[5]?.name</code>.</p>
    <p><strong>2. Two variables unexpectedly share the same array.</strong> You assigned <code>const b = a</code> and then modified <code>b</code>, but <code>a</code> also changed. That's because both variables point to the SAME array in memory. Fix: make an independent copy with <code>[...a]</code> or <code>a.slice()</code>.</p>
    <p><strong>3. <code>typeof</code> says "object" for an array.</strong> You tried <code>typeof arr === 'array'</code> and it's always false — <code>typeof</code> returns <code>"object"</code> for arrays. Fix: use <code>Array.isArray(arr)</code>, which returns true only for arrays.</p>
    <p><strong>4. Off-by-one on the last index.</strong> You wrote <code>arr[arr.length]</code> expecting the last item and got <code>undefined</code>. Same rule as strings: last valid index is <code>length - 1</code>. Fix: <code>arr[arr.length - 1]</code> or <code>arr.at(-1)</code>.</p>
    <p><strong>5. Modifying an array while iterating over it.</strong> You wrote a loop that removes items from the array as it goes and the loop skips items or throws. Fix: iterate over a copy (<code>for (const item of [...arr])</code>), iterate in reverse, or use <code>.filter()</code> to build a new array with just the items you want to keep.</p>
    <p><strong>6. Confusing arrays with array-like objects.</strong> <code>document.querySelectorAll</code> returns a NodeList — array-like, has <code>.length</code> and numeric indexes, but doesn't have <code>.map</code>, <code>.filter</code>, or most array methods. Fix: convert with <code>Array.from(nodeList)</code> or <code>[...nodeList]</code> before using array methods.</p>
    <p><strong>7. Sorting numbers gives alphabetical order.</strong> <code>[10, 5, 100, 20].sort()</code> returns <code>[10, 100, 20, 5]</code>. Default <code>.sort()</code> compares as strings. Fix: pass a comparator: <code>.sort((a, b) => a - b)</code> for ascending numeric sort.</p>
  `,

  /* 2.1 The part that makes it click */
  'topics-9-0-2-1': `
    <p>An array is a single value that acts as an ordered container for many other values. It has a length, an index for every slot, and a set of methods for reading, writing, and transforming its contents. Once you internalize "one variable, many slots, numbered from 0," the whole array API starts to make sense — every method is either operating on individual slots (<code>push</code>, <code>pop</code>, indexing) or on the whole sequence at once (<code>map</code>, <code>filter</code>, <code>sort</code>).</p>
    <p>The other click: arrays are mutable and shared. When you pass an array to a function, or assign it to another variable, you're sharing the same underlying data. Changes through one reference are visible through all of them. This is different from primitives (numbers, strings, booleans), which are copied on assignment. Understanding this reference behavior is what stops the "why did my array change on its own?" bugs — the array didn't change on its own, some other code with a reference to it modified it.</p>
  `,

  /* 2.2 Common confusions */
  'topics-9-0-2-2': `
    <p><strong>Confusion: "<code>typeof arr</code> should return 'array'"</strong></p>
    <p>It returns <code>"object"</code>. Arrays are a specialized kind of object in JavaScript, and <code>typeof</code> lumps them in with all other objects. Use <code>Array.isArray()</code> for reliable checks.</p>

    <p><strong>Confusion: "<code>const</code> makes an array immutable"</strong></p>
    <p>It doesn't. <code>const</code> prevents reassignment of the variable, but the array's contents are still mutable. If you truly want an immutable array, use <code>Object.freeze()</code> — or, more practically, use methods like <code>.map()</code> and <code>.filter()</code> that return new arrays instead of mutating the original.</p>
<pre class="language-javascript"><code class="language-javascript">const arr = [1, 2, 3];
arr.push(4);       // ✓ allowed — contents are mutable
arr[0] = 99;       // ✓ allowed
arr = [];          // ✗ TypeError — can't reassign a const

const frozen = Object.freeze([1, 2, 3]);
frozen.push(4);    // ✗ TypeError in strict mode (silently fails otherwise)</code></pre>

    <p><strong>Confusion: "assigning one array to another makes a copy"</strong></p>
    <p>It doesn't. Assignment copies the reference, not the array. Both variables now point at the same array.</p>
<pre class="language-javascript"><code class="language-javascript">const a = [1, 2, 3];
const b = a;
b.push(4);
a;                 // [1, 2, 3, 4] — a and b are the same array

const c = [...a]; // spread creates a copy
c.push(5);
a;                 // [1, 2, 3, 4] — unchanged</code></pre>

    <p><strong>Confusion: "arrays and strings are basically the same"</strong></p>
    <p>They share some concepts (both indexed from 0, both have <code>.length</code>, both have <code>.slice</code>), but they differ in critical ways. Arrays are mutable; strings aren't. Arrays can hold any type; strings hold only characters. Arrays have <code>.push</code>, <code>.pop</code>, <code>.map</code>, <code>.filter</code> — strings don't. Don't assume a string method exists on an array or vice versa.</p>

    <p><strong>Confusion: "an empty array is falsy"</strong></p>
    <p>It's actually truthy in JavaScript. <code>Boolean([])</code> is <code>true</code>. To check for empty, use <code>arr.length === 0</code>.</p>
<pre class="language-javascript"><code class="language-javascript">if ([]) { /* runs */ }                  // empty array is truthy
if ([].length === 0) { /* runs */ }     // this is how to check for empty</code></pre>

    <p><strong>Confusion: "arrays sort themselves numerically by default"</strong></p>
    <p>They don't. Default <code>.sort()</code> converts each element to a string and sorts alphabetically. For numeric sort, pass a comparator: <code>.sort((a, b) => a - b)</code>.</p>

    <p><strong>Confusion: "<code>.length</code> is expensive, so I should cache it"</strong></p>
    <p>It's not. Reading <code>.length</code> is constant time — the array tracks its length internally. Modern engines also optimize this in loops. Write clear code; don't premature-optimize.</p>
  `,

  /* 2.3 Common mistakes */
  'topics-9-0-2-3': `
<pre class="language-javascript"><code class="language-javascript">// Trying to check array type with typeof
const list = [1, 2, 3];
if (typeof list === 'array') { /* never runs */ }
// wrong: typeof returns "object" for arrays
// fix: use Array.isArray
if (Array.isArray(list)) { /* runs */ }</code></pre>

<pre class="language-javascript"><code class="language-javascript">// Assigning one array variable to another and expecting a copy
const original = [1, 2, 3];
const copy = original;
copy.push(4);
console.log(original);
// wrong: original is now [1, 2, 3, 4] — copy is not a copy, it's an alias
// fix: use spread or slice for a real copy
const realCopy = [...original];
realCopy.push(5);
// original stays [1, 2, 3, 4], realCopy is [1, 2, 3, 4, 5]</code></pre>

<pre class="language-javascript"><code class="language-javascript">// Off-by-one on the last item
const items = ['a', 'b', 'c'];
const last = items[items.length];
// wrong: items[3] is undefined — length is 3, last index is 2
// fix: use length - 1 or .at(-1)
const last2 = items[items.length - 1];   // "c"
const last3 = items.at(-1);              // "c"</code></pre>

<pre class="language-javascript"><code class="language-javascript">// Accessing a property on an undefined array element
const users = [{ name: 'Os' }, { name: 'Sam' }];
const third = users[2].name;
// wrong: users[2] is undefined — undefined.name throws TypeError
// fix: check first, or use optional chaining
const third2 = users[2]?.name;   // undefined, no error</code></pre>

<pre class="language-javascript"><code class="language-javascript">// Removing items while iterating with a normal for loop
const nums = [1, 2, 3, 4, 5];
for (let i = 0; i < nums.length; i++) {
  if (nums[i] % 2 === 0) nums.splice(i, 1);
}
// wrong: splicing shifts indexes down, so the loop skips items
// After removing 2 at index 1, 3 is now at index 1, but loop moves to i=2 (which is 4)
// fix: filter into a new array
const odds = nums.filter(n => n % 2 !== 0);</code></pre>

<pre class="language-javascript"><code class="language-javascript">// Sorting numbers with default sort()
const scores = [10, 5, 100, 20];
scores.sort();
console.log(scores);
// wrong: [10, 100, 20, 5] — sorted as strings
// fix: pass a numeric comparator
scores.sort((a, b) => a - b);   // [5, 10, 20, 100]</code></pre>

<pre class="language-javascript"><code class="language-javascript">// Treating a NodeList as a real array
const buttons = document.querySelectorAll('button');
const labels = buttons.map(b => b.textContent);
// wrong: NodeList has no .map method → TypeError
// fix: convert to array first
const labels2 = [...buttons].map(b => b.textContent);
// or:
const labels3 = Array.from(buttons).map(b => b.textContent);</code></pre>

<pre class="language-javascript"><code class="language-javascript">// Using truthiness to check for empty
const items = [];
if (items) {
  // runs — empty array is truthy
}
// fix: check length
if (items.length === 0) {
  // this runs when empty
}</code></pre>
  `,

  /* --- Chunk 3: In Practice --- */

  /* 3.0 Tiny examples */
  'topics-9-0-3-0': `
<pre class="language-javascript"><code class="index language-javascript">// Creating
const colors = ['red', 'green', 'blue'];
const scores = [90, 85, 72];
const mixed  = ['Os', 30, true];
const empty  = [];

// Length
colors.length;              // 3
empty.length;               // 0

// Access by index
colors[0];                  // "red"
colors[colors.length - 1];  // "blue"
colors.at(-1);              // "blue"
colors[10];                 // undefined
colors[-1];                 // undefined (brackets don't do negative)

// Modify by index
colors[0] = 'orange';
colors;                     // ["orange", "green", "blue"]

// Add to end
colors.push('yellow');
colors;                     // ["orange", "green", "blue", "yellow"]

// Remove from end
const removed = colors.pop();
removed;                    // "yellow"
colors;                     // ["orange", "green", "blue"]

// Add to start / remove from start
colors.unshift('purple');   // ["purple", "orange", "green", "blue"]
colors.shift();             // removes "purple"

// Type checks
Array.isArray(colors);      // true
typeof colors;              // "object" (not "array")

// Iteration
for (const c of colors) {
  console.log(c);
}

// Common methods (covered in Section 5)
scores.map(s => s * 2);           // [180, 170, 144]
scores.filter(s => s >= 80);      // [90, 85]
scores.reduce((sum, s) => sum + s, 0);  // 247

// Empty check
colors.length === 0;        // false
!colors.length;             // false (same thing)
Boolean(colors);            // true (empty array is truthy!)</code></pre>
  `,

  /* 3.1 Real website uses */
  'topics-9-0-3-1': `
    <p><strong>Example: rendering a list of items</strong></p>
<pre class="language-javascript"><code class="language-javascript">const products = [
  { name: 'Coffee', price: 4 },
  { name: 'Tea', price: 3 },
  { name: 'Cocoa', price: 5 },
];

list.innerHTML = products.map(p =>
  \`&lt;li&gt;\${p.name} — $\${p.price}&lt;/li&gt;\`
).join('');</code></pre>

    <p><strong>Example: collecting form values into an array</strong></p>
<pre class="language-javascript"><code class="language-javascript">const checkedBoxes = document.querySelectorAll('input[type="checkbox"]:checked');
const selected = [...checkedBoxes].map(cb => cb.value);</code></pre>

    <p><strong>Example: a shopping cart</strong></p>
<pre class="language-javascript"><code class="language-javascript">const cart = [];

addBtn.addEventListener('click', () => {
  cart.push({ id: productId, qty: 1 });
  updateCart();
});

function updateCart() {
  const total = cart.reduce((sum, item) => sum + item.price * item.qty, 0);
  totalLabel.textContent = \`$\${total.toFixed(2)}\`;
}</code></pre>

    <p><strong>Example: filtering search results</strong></p>
<pre class="language-javascript"><code class="language-javascript">const results = allPosts.filter(post =>
  post.title.toLowerCase().includes(searchTerm.toLowerCase())
);</code></pre>

    <p><strong>Example: getting a random item from a list</strong></p>
<pre class="language-javascript"><code class="language-javascript">const quotes = ['Just do it.', 'Think different.', 'Stay hungry.'];
const random = quotes[Math.floor(Math.random() * quotes.length)];</code></pre>

    <p><strong>Example: tracking user actions in order</strong></p>
<pre class="language-javascript"><code class="language-javascript">const history = [];
document.addEventListener('click', e => {
  history.push({ target: e.target.tagName, time: Date.now() });
});</code></pre>
  `,

  /* 3.2 Connects to */
  'topics-9-0-3-2': `
    <ul>
      <li><strong>Array indexes</strong> → 0-based positions, same as string indexes</li>
      <li><strong><code>.length</code></strong> → tracks how many items; last valid index is <code>length - 1</code></li>
      <li><strong><code>.push()</code>, <code>.pop()</code>, <code>.shift()</code>, <code>.unshift()</code></strong> → add and remove from either end</li>
      <li><strong><code>.map()</code>, <code>.filter()</code>, <code>.reduce()</code></strong> → transform the whole array at once (covered in Section 5)</li>
      <li><strong>for-of loop</strong> → the modern way to iterate over an array's values</li>
      <li><strong>Spread operator (<code>...</code>)</strong> → copy arrays, combine them, pass items as arguments</li>
      <li><strong>Destructuring</strong> → pull items out of an array by position: <code>const [a, b] = arr</code></li>
      <li><strong>Objects</strong> → arrays are objects; also, arrays often hold objects as their items</li>
      <li><strong>NodeList / HTMLCollection</strong> → array-like but not arrays; convert with <code>[...list]</code> to use array methods</li>
      <li><strong>Mutability</strong> → arrays are mutable and shared; be aware of reference behavior when passing them around</li>
      <li><strong>Debugging</strong> → most array bugs are index bounds, reference sharing, or type-check surprises</li>
    </ul>
  `,

  /* 3.3 See also */
  'topics-9-0-3-3': `
    <ul>
      <li>Array indexes</li>
      <li>Array .length</li>
      <li>Adding and removing items (push, pop, shift, unshift)</li>
      <li>Common array methods (map, filter, reduce)</li>
      <li>Iterating over arrays</li>
      <li>Spread and destructuring</li>
      <li>Objects (the other main collection type)</li>
      <li>Common array mistakes</li>
      <li>Debugging arrays</li>
    </ul>
  `,

/* ========================================================= 
   Sub-lesson: 3.10.2 Arrays → arrays as lists
 =======================================================*/

  /* --- Chunk 0: What & How --- */

  /* 0.0 What it is */
  'topics-9-1-0-0': `
    <p>An <strong>array as a list</strong> is the most common way to think about and use an array — as an ordered collection of items you'd naturally describe in plain English as "a list of ___". A list of guests. A list of tasks. A list of prices. A list of usernames. Anything that fits the phrase "a list of" is almost certainly an array in your code.</p>
    <p>This lesson isn't about a new feature of arrays — it's about a mental frame. The previous lesson introduced the mechanics (brackets, indexes, length). This one is about recognizing when an array is the right tool. Whenever your data is naturally sequential, whenever order matters, whenever you'd write it out as a bulleted list on paper, you're looking at an array-shaped problem. Learning to spot "list-shaped" situations in the real world is how you stop reaching for tangled workarounds and start reaching for arrays automatically.</p>
  `,

  /* 0.1 Syntax */
  'topics-9-1-0-1': `
<pre class="language-javascript"><code class="language-javascript">// A list of strings — most common shape
const guests = ['Os', 'Sam', 'Alex', 'Priya'];

// A list of numbers
const prices = [4.99, 12.50, 3.25, 8.00];

// A list of booleans (e.g., which checkboxes are checked)
const answers = [true, false, true, true, false];

// A list of objects — very common for structured data
const products = [
  { id: 1, name: 'Coffee', price: 4 },
  { id: 2, name: 'Tea',    price: 3 },
  { id: 3, name: 'Cocoa',  price: 5 },
];

// A list of DOM elements collected from the page
const buttons = [...document.querySelectorAll('button')];

// A list that grows over time as things happen
const clicks = [];
button.addEventListener('click', () => {
  clicks.push(Date.now());
});

// A list you build up from other data
const words = sentence.split(' ');           // list of words
const lines = paragraph.split('\\n');         // list of lines
const values = Object.values(userScores);    // list of scores

// Any of these patterns is a "list" — one variable name, many items inside,
// order preserved, accessed by position.</code></pre>
  `,

  /* 0.2 Anatomy / Breakdown */
  'topics-9-1-0-2': `
<pre class="language-javascript"><code class="language-javascript">const guests = ['Os', 'Sam', 'Alex', 'Priya'];

// What "as a list" means, unpacked:
//
//   guests → the name of the whole list
//   ['Os', 'Sam', 'Alex', 'Priya'] → the list itself
//
// Each item is at a specific position:
//   index 0 → "Os"    (first in line)
//   index 1 → "Sam"   (second in line)
//   index 2 → "Alex"  (third in line)
//   index 3 → "Priya" (fourth, last)
//
// You can talk about the list as a whole:
guests.length;              // 4 — how many guests?
guests.includes('Alex');    // true — is Alex on the list?

// You can talk about a specific position:
guests[0];                  // "Os" — the first guest
guests[guests.length - 1];  // "Priya" — the last guest

// You can talk about a slice of the list:
guests.slice(1, 3);         // ["Sam", "Alex"] — the middle two

// You can walk through the whole list in order:
for (const guest of guests) {
  console.log(guest);
}
// "Os", "Sam", "Alex", "Priya"

// The mental frame: ONE name refers to the WHOLE group. INDIVIDUAL
// items live at specific positions. This is what makes it a list.</code></pre>
  `,

  /* 0.3 Syntax Details That Matter */
  'topics-9-1-0-3': `
    <p><strong>Order is preserved.</strong> The items in an array stay in the exact order you put them in. If you push "milk" after "eggs", "milk" ends up later in the list. Iteration walks through them in order. This is one of the core reasons arrays are used for lists — you can trust that "third item" always means the same thing across the life of the array.</p>
<pre class="language-javascript"><code class="language-javascript">const tasks = [];
tasks.push('wake up');
tasks.push('make coffee');
tasks.push('start work');
tasks;                          // ["wake up", "make coffee", "start work"]
// The order matches the order they were added. Always.</code></pre>

    <p><strong>Duplicates are allowed.</strong> An array can hold the same value multiple times. If you want to record every click, every log entry, every guess, duplicates are exactly what you need. This is different from a <strong>Set</strong>, which automatically discards duplicates. When someone's on the guest list twice, that's a list; when you want a unique roster, use a Set.</p>
<pre class="language-javascript"><code class="language-javascript">const votes = ['yes', 'no', 'yes', 'yes', 'no'];   // duplicates allowed
votes.length;               // 5

// Compare to a Set, which would collapse duplicates:
new Set(votes);             // Set { "yes", "no" } — only unique values</code></pre>

    <p><strong>Items can be added and removed dynamically.</strong> A list doesn't have to be defined all at once. You start with an empty array and build it up over time — pushing when something happens, removing when it's no longer needed. This is what makes arrays perfect for anything that grows or shrinks during a program's run: chat messages, task lists, search results, event logs.</p>
<pre class="language-javascript"><code class="language-javascript">const notifications = [];

function notify(msg) {
  notifications.push(msg);
}

notify('You have new mail');
notify('Meeting in 5 minutes');
notifications;              // 2 items

notifications.shift();      // remove the oldest one
notifications;              // 1 item</code></pre>

    <p><strong>Items in a list are usually the same type.</strong> Nothing in JavaScript enforces this — <code>[1, 'a', true]</code> is legal. But in practice, lists work best when every item is the same shape, because iteration and transformation become predictable. A list of guest names is all strings. A list of prices is all numbers. A list of products is all objects with the same properties. Mixed-type lists are almost always a sign that you should be using an object instead, or splitting into separate lists.</p>
<pre class="language-javascript"><code class="language-javascript">// ✓ good — uniform shape
const users = [
  { name: 'Os', age: 30 },
  { name: 'Sam', age: 25 },
  { name: 'Alex', age: 42 },
];

// ✗ mixed shape — hard to work with
const mess = [
  { name: 'Os', age: 30 },
  'Sam',
  42,
  true,
];
// You can't reliably .map over this; every item needs different handling.</code></pre>

    <p><strong>An empty list is still a list.</strong> A brand-new array with no items (<code>[]</code>) is a valid array — length 0, no items yet. This is often the starting state before data arrives: an empty cart, an empty message list, an empty search-results array. Code that handles lists should always handle the empty case gracefully — checking <code>arr.length === 0</code>, showing an "empty state" UI, or skipping operations that don't apply to zero items.</p>
  `,

  /* --- Chunk 1: Why & When --- */

  /* 1.0 What problem it solves */
  'topics-9-1-1-0': `
    <p>The problem this frame solves is recognizing which data structure to reach for when you're modeling something in code. Beginners often build workarounds — a bunch of separate variables (<code>guest1</code>, <code>guest2</code>, <code>guest3</code>), or a long concatenated string (<code>"Os,Sam,Alex"</code>), or an object with numeric keys (<code>{0: 'Os', 1: 'Sam'}</code>) — when the natural shape of the data is a list. All of those workarounds are painful to work with: you can't loop over them cleanly, you can't count them without extra code, you can't add or remove items in a uniform way.</p>
    <p>Once you learn to recognize "list-shaped" data — anything ordered, anything you'd describe with the phrase "a list of," anything with a countable number of items where each has a position — you stop building workarounds and reach for arrays reflexively. Arrays give you all the loop-friendly, count-friendly, add-and-remove-friendly operations for free. The mental frame is the shortcut: <em>if it's a list of ___, it's an array.</em></p>
  `,

  /* 1.1 Why use it */
  'topics-9-1-1-1': `
    <p>Use an array whenever your data is a sequence — items in order, accessed by position. This covers a huge fraction of real-world data. Every list of results from a search. Every collection of items on a page. Every set of scores in a game. Every batch of messages in a chat. Every product in a store's inventory. If the data has a beginning, a middle, and an end, and each item has a position relative to the others, it's an array.</p>
    <p>Arrays are also the right choice when you need to iterate over the collection — do the same thing to each item, or transform the whole group into something else. Rendering a list of DOM elements. Calculating a total from a list of prices. Filtering results by some criteria. Sorting a list. Reversing it. Reducing it to a single value. These are all patterns that assume you have an ordered collection to walk through, and arrays are the shape they were designed for.</p>
    <p>Choose an <strong>object</strong> instead when you want to look items up by name rather than position (a phone book: name → number). Choose a <strong>Set</strong> when you want unique items with no duplicates. Choose a <strong>Map</strong> when your keys aren't strings. Choose a plain variable when you only have one value. But for the vast middle ground — "a bunch of related things in order" — arrays are almost always the answer.</p>
  `,

  /* 1.2 Where you use it */
  'topics-9-1-1-2': `
<pre class="language-javascript"><code class="language-javascript">// A guest list for an event
const guests = ['Os', 'Sam', 'Alex', 'Priya'];

// Products in a store's inventory
const products = [
  { id: 1, name: 'Coffee', price: 4 },
  { id: 2, name: 'Tea',    price: 3 },
];

// Messages in a chat window
const messages = [];
socket.on('message', (msg) => {
  messages.push(msg);
  renderChat();
});

// Search results from an API
const results = await fetch('/api/search?q=' + query).then(r => r.json());
// results is an array of matching items

// Rows in a data table
const rows = users.map(user => \`
  &lt;tr&gt;
    &lt;td&gt;\${user.name}&lt;/td&gt;
    &lt;td&gt;\${user.email}&lt;/td&gt;
  &lt;/tr&gt;
\`).join('');

// A log of user actions
const history = [];
document.addEventListener('click', (e) => {
  history.push({ target: e.target.tagName, time: Date.now() });
});

// Steps in a multi-step form or wizard
const steps = ['account', 'profile', 'preferences', 'confirm'];
let currentStep = 0;

// Items in a shopping cart
const cart = [];
addBtn.addEventListener('click', () => {
  cart.push({ productId: 42, quantity: 1 });
});

// Any collection where you'd say "a list of" — that's an array.</code></pre>
  `,

  /* 1.3 Plain English explanation */
  'topics-9-1-1-3': `
    <p>Think of any list you've ever written on paper. A grocery list. A to-do list. A guest list for a party. A wishlist of things you want to buy. Every one of those lists has the same shape: a name at the top ("Grocery List"), a series of items written down one after another, and a clear order (item 1 is first, item 2 is second, and so on). You can add a new item by writing another line. You can cross one off. You can count how many are left. You can hand the list to someone else and they can work through it in order.</p>
    <p>An array in JavaScript is exactly that — a paper list, but in code. The variable name is the title at the top. The values inside are the items you wrote down. The indexes are the line numbers (starting at 0 instead of 1, but same idea). Every operation you'd naturally do with a paper list has a code equivalent: add an item, remove one, look at a specific line, count the total, walk through them all.</p>
    <p>Once you internalize that arrays are the code version of paper lists, the whole data structure stops feeling abstract. Any time you find yourself thinking "I need to keep track of several ___", the answer is an array of those things. Any time you find yourself thinking "and now do the same thing to each of them," the answer is a loop over the array. The shape of the problem — a list — matches the shape of the tool.</p>
  `,

  /* 1.4 Mental model */
  'topics-9-1-1-4': `
    <p>An array is a container that holds multiple values in a fixed order. The container has a name (the variable). The values inside have positions (indexes). The container knows how many things it holds (length). And the container is one thing — you pass it around as a single value, even though it holds many.</p>
    <p>The key mental shift when moving from single variables to arrays: instead of thinking "one variable per thing," think "one variable for the whole collection." Instead of <code>guest1</code>, <code>guest2</code>, <code>guest3</code>, you have <code>guests</code> — a single name that refers to all of them. Operations you'd have to write three times for three separate variables now happen once, applied to the array as a whole. This is the leap that makes arrays powerful — and it's the same leap you make in real life when you write a shopping list on one piece of paper instead of writing each item on its own sticky note.</p>
    <p>The other shift: the collection is a thing you can talk about, not just the items inside it. You can ask an array how long it is, whether it contains a particular value, what's at the middle. You can hand it to a function and let the function do work on the whole collection. You can save it, load it, send it over the network, all as one unit. The list isn't just the items — it's the whole grouped structure, with an identity of its own.</p>
  `,

  /* 1.5 Step-by-step walkthrough */
  'topics-9-1-1-5': `
<pre class="language-javascript"><code class="language-javascript">// Scenario: you're building a signup form for an event and want to keep
// track of the list of people who've registered. Show the running list
// on the page, allow adding new people, and show a count.

const guests = [];   // start with an empty list

const nameInput = document.querySelector('#name');
const addBtn = document.querySelector('#add');
const list = document.querySelector('#guest-list');
const count = document.querySelector('#count');

addBtn.addEventListener('click', () => {
  const name = nameInput.value.trim();
  if (name.length === 0) return;

  guests.push(name);
  render();
  nameInput.value = '';
});

function render() {
  list.innerHTML = guests
    .map((name, i) => \`&lt;li&gt;\${i + 1}. \${name}&lt;/li&gt;\`)
    .join('');
  count.textContent = \`\${guests.length} guest\${guests.length === 1 ? '' : 's'}\`;
}

// Walk through what happens as people sign up:

// Initial state:
//   guests = []
//   list is empty on the page
//   count shows "0 guests"

// User types "Os" and clicks Add:

// Step 1: name = "Os"
// Step 2: name.length is 2, not 0 — continue
// Step 3: guests.push("Os")
//         guests is now ["Os"]
// Step 4: render() runs
//         .map turns the array into ["&lt;li&gt;1. Os&lt;/li&gt;"]
//         .join('') turns that into the string "&lt;li&gt;1. Os&lt;/li&gt;"
//         list.innerHTML shows "1. Os"
//         count shows "1 guest"

// User types "Sam" and clicks Add:

// Step 5: guests.push("Sam")
//         guests is now ["Os", "Sam"]
// Step 6: render() runs — list shows "1. Os" and "2. Sam"
//         count shows "2 guests"

// User types "Alex" and clicks Add:

// Step 7: guests is now ["Os", "Sam", "Alex"]
//         list shows "1. Os", "2. Sam", "3. Alex"
//         count shows "3 guests"

// Key observations:
//   - guests is ONE variable holding all names
//   - .push() adds to the end without you managing indexes yourself
//   - .map() applies the same transform to every item
//   - .length gives the count for free
//   - The same render() function works for 0, 1, 3, or 300 guests

// This is the power of "arrays as lists": you write the code once, and
// it scales to any number of items. The array does the bookkeeping.</code></pre>
  `,

  /* --- Chunk 2: The Click --- */

  /* 2.0 Debugging clue */
  'topics-9-1-2-0': `
    <p>List-shaped bugs usually come from one of these patterns.</p>
    <p><strong>1. Using separate variables instead of an array.</strong> You have <code>item1</code>, <code>item2</code>, <code>item3</code> and you're duplicating logic for each one. Adding a fourth item means editing every function that touches these variables. Fix: consolidate into <code>const items = [item1, item2, item3]</code> and rewrite the logic once, using a loop or an array method.</p>
    <p><strong>2. Storing a list as a comma-separated string.</strong> You have <code>const names = 'Os,Sam,Alex'</code> and you keep having to <code>.split(',')</code> to work with it. Fix: store it as an array from the start (<code>['Os', 'Sam', 'Alex']</code>) and only convert to a string when you need to display or transmit it.</p>
    <p><strong>3. Using an object with numeric keys as a fake array.</strong> You have <code>const users = {0: 'Os', 1: 'Sam'}</code> and you're manually incrementing keys to add new entries. Fix: use a real array — <code>['Os', 'Sam']</code> — and use <code>.push()</code> to add.</p>
    <p><strong>4. Not handling the empty-list case.</strong> Your code assumes there's always at least one item, and crashes when the list is empty. Fix: check <code>arr.length === 0</code> before operations that assume items exist, and provide an empty-state UI ("No results found").</p>
    <p><strong>5. Confusing "position" with "identity".</strong> You've been treating an item's index as its ID. When you sort or filter the array, the "IDs" change. Fix: store the ID as a property inside each item object (<code>{ id: 42, name: 'Os' }</code>), not as its position.</p>
    <p><strong>6. Rendering the whole list on every keystroke or event.</strong> Your list has 10,000 items and re-rendering it from scratch is slow. Fix: this is a performance concern that becomes relevant at scale — use techniques like virtualization, or diff-based rendering with a library, once you hit the scale where it matters. For most lists (under a few thousand items), full re-render is fine.</p>
  `,

  /* 2.1 The part that makes it click */
  'topics-9-1-2-1': `
    <p>Arrays are the natural code representation of any real-world list. The mental shortcut is: <em>if you'd describe your data with the phrase "a list of," reach for an array</em>. Guests, tasks, prices, results, messages, products — all lists, all arrays. Once you internalize this pattern, you stop reinventing collection logic with separate variables or workaround structures.</p>
    <p>The other click: an array is one variable holding many values. That "one for many" property is what lets you scale operations. Instead of writing the same code for each variable, you write it once against the array. Add a new item, and no code changes — the loop just runs one more iteration. This is the fundamental leap from "one variable per thing" to "one variable for the collection," and it's what unlocks all the array methods (map, filter, reduce) as natural next steps.</p>
  `,

  /* 2.2 Common confusions */
  'topics-9-1-2-2': `
    <p><strong>Confusion: "arrays and lists are different things"</strong></p>
    <p>In JavaScript, they're the same thing. "List" is the informal English word; "array" is the JavaScript term. Other languages sometimes distinguish arrays (fixed-size, one type) from lists (dynamic, mixed types), but JavaScript arrays are dynamic and mixed by default, so both words describe the same construct.</p>

    <p><strong>Confusion: "I need to know how many items in advance"</strong></p>
    <p>You don't. JavaScript arrays grow and shrink dynamically. Start with <code>[]</code> and push items as they come in. This is one of the biggest advantages over languages with fixed-size arrays.</p>

    <p><strong>Confusion: "the array's index is the item's identity"</strong></p>
    <p>No — the index is just its current position. If you sort or filter the array, indexes change. If an item has a stable identity (like a user ID or a product ID), store that as a property inside the item object, not as its array position.</p>
<pre class="language-javascript"><code class="language-javascript">// Bad — using position as identity
const users = ['Os', 'Sam', 'Alex'];
const firstUserId = 0;   // brittle — sort the array and this breaks

// Good — identity is a property
const users = [
  { id: 42, name: 'Os' },
  { id: 17, name: 'Sam' },
  { id: 88, name: 'Alex' },
];
const firstUserId = 42;   // stable — belongs to Os no matter where he is in the array</code></pre>

    <p><strong>Confusion: "I should store big lists as strings to save memory"</strong></p>
    <p>You shouldn't. The memory difference is usually negligible, and the performance cost of parsing the string every time you need to work with it is way worse than any memory savings. Keep lists as arrays and only stringify when you have to (e.g., for storage or transmission).</p>

    <p><strong>Confusion: "arrays are for numbers, objects are for names"</strong></p>
    <p>Arrays are for ORDERED collections. Objects are for LABELED collections. It's about order vs. label, not about the type of values inside. An array of user objects is fine — each user is a labeled thing, but the sequence of users is a list.</p>
  `,

  /* 2.3 Common mistakes */
  'topics-9-1-2-3': `
<pre class="language-javascript"><code class="language-javascript">// Using separate variables for what should be a list
const guest1 = 'Os';
const guest2 = 'Sam';
const guest3 = 'Alex';
// Now try to greet all three:
console.log('Hello ' + guest1);
console.log('Hello ' + guest2);
console.log('Hello ' + guest3);
// wrong: duplicated code, breaks when you add guest4
// fix: use an array
const guests = ['Os', 'Sam', 'Alex'];
for (const guest of guests) {
  console.log('Hello ' + guest);
}</code></pre>

<pre class="language-javascript"><code class="language-javascript">// Storing a list as a comma-separated string
let names = 'Os,Sam,Alex';
// Now to add a name:
names = names + ',Priya';
// Now to check if a name is in the list:
if (names.split(',').includes('Sam')) { /* ... */ }
// wrong: constant conversion overhead, error-prone
// fix: store as an array
const names2 = ['Os', 'Sam', 'Alex'];
names2.push('Priya');
if (names2.includes('Sam')) { /* ... */ }</code></pre>

<pre class="language-javascript"><code class="language-javascript">// Using an object with numeric keys as a fake array
const users = { 0: 'Os', 1: 'Sam', 2: 'Alex' };
users[3] = 'Priya';
const count = Object.keys(users).length;
// wrong: no array methods available, no .push, no .length
// fix: use an array
const users2 = ['Os', 'Sam', 'Alex'];
users2.push('Priya');
users2.length;   // 4</code></pre>

<pre class="language-javascript"><code class="language-javascript">// Not handling the empty case
const cart = [];
const total = cart.reduce((sum, item) => sum + item.price);
// wrong: reduce with no initial value on empty array → TypeError
// fix: provide an initial value
const total2 = cart.reduce((sum, item) => sum + item.price, 0);   // 0 for empty cart</code></pre>

<pre class="language-javascript"><code class="language-javascript">// Treating position as identity
const tasks = ['buy milk', 'walk dog', 'reply to email'];
const currentTaskIndex = 0;
tasks.sort();
// currentTaskIndex is still 0, but the task at index 0 is now different
// wrong: the "current task" reference is broken
// fix: track the task itself, not its position
const currentTask = tasks[0];
tasks.sort();
// currentTask still refers to the correct task</code></pre>

<pre class="language-javascript"><code class="language-javascript">// Rendering the list wrong because of a stale reference
const items = ['a', 'b', 'c'];
list.innerHTML = items.map(x => \`&lt;li&gt;\${x}&lt;/li&gt;\`).join('');
items.push('d');
// wrong: the DOM still shows a, b, c — the array changed but render didn't run
// fix: call render again whenever the array changes
items.push('e');
list.innerHTML = items.map(x => \`&lt;li&gt;\${x}&lt;/li&gt;\`).join('');</code></pre>

<pre class="language-javascript"><code class="language-javascript">// Mixing types when the data is naturally uniform
const inventory = [
  { name: 'Coffee', price: 4 },
  'Tea',
  15,
];
// wrong: each item has a different shape, iteration becomes messy
// fix: uniform shape
const inventory2 = [
  { name: 'Coffee', price: 4 },
  { name: 'Tea',    price: 3 },
  { name: 'Cocoa',  price: 5 },
];</code></pre>
  `,

  /* --- Chunk 3: In Practice --- */

  /* 3.0 Tiny examples */
  'topics-9-1-3-0': `
<pre class="language-javascript"><code class="language-javascript">// A list of names
const guests = ['Os', 'Sam', 'Alex', 'Priya'];

// A list of numbers
const prices = [4.99, 12.50, 3.25, 8.00];

// A list of booleans
const answers = [true, false, true, true];

// A list of objects (very common)
const products = [
  { id: 1, name: 'Coffee' },
  { id: 2, name: 'Tea' },
  { id: 3, name: 'Cocoa' },
];

// An empty list — the starting point for many things
const cart = [];

// Building a list up
const clicks = [];
clicks.push(Date.now());
clicks.push(Date.now());
clicks.length;                  // 2

// Answering questions about the list
guests.length;                  // 4 — how many?
guests.includes('Alex');        // true — is Alex on the list?
guests.indexOf('Sam');          // 1 — what position is Sam at?
guests[0];                      // "Os" — who's first?
guests.at(-1);                  // "Priya" — who's last?

// Walking through the list
for (const guest of guests) {
  console.log(guest);
}

// Transforming the list
guests.map(g => g.toUpperCase());          // ["OS", "SAM", "ALEX", "PRIYA"]
prices.reduce((sum, p) => sum + p, 0);     // 28.74 — the total
products.filter(p => p.id > 1);            // [{Tea}, {Cocoa}]

// Empty-list check
if (cart.length === 0) {
  emptyState.textContent = 'Your cart is empty.';
}</code></pre>
  `,

  /* 3.1 Real website uses */
  'topics-9-1-3-1': `
    <p><strong>Example: guest list for an event RSVP</strong></p>
<pre class="language-javascript"><code class="language-javascript">const guests = [];
rsvpBtn.addEventListener('click', () => {
  guests.push(nameInput.value.trim());
  countLabel.textContent = \`\${guests.length} attending\`;
});</code></pre>

    <p><strong>Example: chat message list</strong></p>
<pre class="language-javascript"><code class="language-javascript">const messages = [];
socket.on('new-message', (msg) => {
  messages.push(msg);
  renderChat(messages);
});</code></pre>

    <p><strong>Example: search results from an API</strong></p>
<pre class="language-javascript"><code class="language-javascript">const results = await fetch(\`/api/search?q=\${query}\`).then(r => r.json());
if (results.length === 0) {
  showEmptyState();
} else {
  renderResults(results);
}</code></pre>

    <p><strong>Example: a shopping cart</strong></p>
<pre class="language-javascript"><code class="language-javascript">const cart = [];
addToCartBtn.addEventListener('click', () => {
  cart.push({ productId, quantity: 1 });
  updateCartTotal(cart);
});</code></pre>

    <p><strong>Example: log of user actions for undo</strong></p>
<pre class="language-javascript"><code class="language-javascript">const history = [];
function doAction(action) {
  applyAction(action);
  history.push(action);
}
function undo() {
  const last = history.pop();
  if (last) revertAction(last);
}</code></pre>

    <p><strong>Example: navigation breadcrumbs</strong></p>
<pre class="language-javascript"><code class="language-javascript">const breadcrumbs = ['Home', 'Products', 'Coffee', 'Espresso'];
breadcrumbEl.innerHTML = breadcrumbs
  .map(b => \`&lt;span&gt;\${b}&lt;/span&gt;\`)
  .join(' &gt; ');</code></pre>
  `,

  /* 3.2 Connects to */
  'topics-9-1-3-2': `
    <ul>
      <li><strong>What arrays are</strong> → the mechanics; this lesson is the mental frame</li>
      <li><strong>Array indexes</strong> → how you refer to items by position within the list</li>
      <li><strong><code>.length</code></strong> → how you count the items in the list</li>
      <li><strong><code>.push()</code>, <code>.pop()</code></strong> → adding to and removing from the end of the list</li>
      <li><strong><code>.map()</code>, <code>.filter()</code>, <code>.reduce()</code></strong> → transforming the whole list at once</li>
      <li><strong>for-of loop</strong> → walking through the list one item at a time</li>
      <li><strong>Objects</strong> → the labeled-collection alternative for when order doesn't matter</li>
      <li><strong>Sets</strong> → the deduplicating alternative for when duplicates should be dropped</li>
      <li><strong>Empty state UI</strong> → handling the case where the list has zero items gracefully</li>
      <li><strong>Rendering</strong> → turning a list of data into a list of DOM elements is one of the most common patterns in web development</li>
    </ul>
  `,

  /* 3.3 See also */
  'topics-9-1-3-3': `
    <ul>
      <li>What arrays are</li>
      <li>Array indexes</li>
      <li>Array .length</li>
      <li>Adding and removing items</li>
      <li>Common array methods (map, filter, reduce)</li>
      <li>Iterating over arrays</li>
      <li>Objects (labeled collections)</li>
      <li>Sets (unique-only collections)</li>
      <li>Rendering a list of items to the DOM</li>
    </ul>
  `,
     
/* ========================================================= 
   Sub-lesson: 3.10.3 Arrays → array syntax []
 =======================================================*/

  /* --- Chunk 0: What & How --- */

  /* 0.0 What it is */
  'topics-9-2-0-0': `
    <p>The <strong>array syntax</strong> is the specific set of characters JavaScript recognizes as "this is an array." Square brackets <code>[]</code> mark the start and end of the array, and commas separate the items inside. The full shape is <code>[item1, item2, item3]</code> — brackets on the outside, values in the middle, commas between them. That's the whole grammar.</p>
    <p>This lesson focuses on the mechanical rules of writing an array in your source code. When do you need commas, when don't you? What can go inside the brackets? What happens with an empty array, a single-item array, a nested array? These aren't design decisions — they're syntax rules the JavaScript parser enforces. Getting them right means your arrays will parse correctly; getting them wrong means SyntaxErrors or weirdly-shaped arrays you didn't expect.</p>
  `,

  /* 0.1 Syntax */
  'topics-9-2-0-1': `
<pre class="language-javascript"><code class="language-javascript">// The basic shape — square brackets, values, commas between:
[item1, item2, item3]

// Assigned to a variable
const colors = ['red', 'green', 'blue'];

// Empty array — valid, length 0
const empty = [];

// Single-item array — no comma needed inside
const one = ['only'];

// Multi-line arrays are fine — commas still separate items
const list = [
  'apple',
  'banana',
  'cherry'
];

// Trailing comma — allowed and often preferred for multi-line arrays
const list2 = [
  'apple',
  'banana',
  'cherry',    // ← trailing comma is legal, doesn't add an extra item
];
list2.length;    // 3, not 4

// Whitespace between items is ignored
const spaced = [ 1 ,  2 ,   3 ];    // same as [1, 2, 3]

// Values can be any type
const mixed = ['string', 42, true, null, undefined];

// Values can be expressions — evaluated when the array is created
const computed = [1 + 1, name.toUpperCase(), Math.random()];

// Nested arrays — brackets inside brackets
const grid = [[1, 2], [3, 4], [5, 6]];

// Wrong: missing comma between items
const broken = [1 2 3];
// ← SyntaxError — parser expected a comma or closing bracket

// Wrong: comma at the START of the array
const alsoBroken = [, 1, 2, 3];
// ← This is legal but creates a "hole" — the first item is undefined
alsoBroken[0];      // undefined
alsoBroken.length;  // 4

// Wrong: extra commas in the middle create holes
const holey = [1, , 3];
holey.length;       // 3
holey[1];           // undefined — the middle is a hole</code></pre>
  `,

  /* 0.2 Anatomy / Breakdown */
  'topics-9-2-0-2': `
<pre class="language-javascript"><code class="language-javascript">const colors = ['red', 'green', 'blue'];

// Breaking down the syntax:
//
//   const colors = ['red', 'green', 'blue'];
//   │     │      │  │      │        │      │
//   │     │      │  │      │        │      └── closing bracket + semicolon
//   │     │      │  │      │        └───────── third value
//   │     │      │  │      └────────────────── comma separator
//   │     │      │  └───────────────────────── second value + comma
//   │     │      └──────────────────────────── first value
//   │     │        │ ┌── opening bracket
//   │     │        └─┘   marks the START of the array
//   │     └─────────── variable name
//   └───────────────── const keyword
//
// The brackets are the array MARKERS — they tell the parser
// "everything from here until the matching closing bracket
// is a single array value."
//
// The commas are SEPARATORS — they mark the boundary between
// one item and the next. Without them, the parser can't tell
// where one item ends and the next begins.

// Every item gets a position based on the order it appears:
//   position 0 → "red"    (first)
//   position 1 → "green"  (after the first comma)
//   position 2 → "blue"   (after the second comma)

// Number of items = number of commas + 1 (for a non-empty array)
// Number of items = 0 (for an empty array [])</code></pre>
  `,

  /* 0.3 Syntax Details That Matter */
  'topics-9-2-0-3': `
    <p><strong>Every pair of items needs exactly one comma between them.</strong> Not zero (SyntaxError), not two (creates an empty slot). One comma per gap. This is the same rule as function arguments, object properties, and any other comma-separated list in JavaScript.</p>
<pre class="language-javascript"><code class="language-javascript">[1, 2, 3];      // ✓ correct — one comma per gap
[1 2 3];        // ✗ SyntaxError — no separators
[1, , 3];       // ⚠ legal but creates a hole — [1, undefined, 3] with length 3</code></pre>

    <p><strong>Trailing commas are legal.</strong> A comma right before the closing bracket doesn't add an extra item. This is the ONE place where an "extra" comma is fine, and it's actually preferred for multi-line arrays because it makes adding a new item cleaner in version control diffs.</p>
<pre class="language-javascript"><code class="language-javascript">const list = [
  'apple',
  'banana',
  'cherry',   // ← trailing comma — no phantom fourth item
];
list.length;   // 3</code></pre>

    <p><strong>Leading commas and middle commas create "holes" — a real JavaScript quirk.</strong> Writing <code>[1, , 3]</code> creates an array of length 3 where the middle position is a hole (essentially <code>undefined</code>, but subtly different in how iteration handles it). This is almost always a bug, not a feature. If you actually want an <code>undefined</code> in the middle, write it explicitly: <code>[1, undefined, 3]</code>. If you want a shorter array, remove the comma.</p>
<pre class="language-javascript"><code class="language-javascript">const holey = [1, , 3];
holey.length;       // 3
holey[1];           // undefined
holey.map(x => x);  // some methods skip holes; others don't
// Rule of thumb: don't write holey arrays. If you see one, it's likely a bug.</code></pre>

    <p><strong>Whitespace and newlines between items don't affect the array.</strong> You can format an array on one line, on multiple lines, with tabs, with extra spaces — the array's contents are the same. Choose whatever formatting makes it easiest to read.</p>
<pre class="language-javascript"><code class="language-javascript">// All four of these produce the same array:
[1, 2, 3];
[ 1, 2, 3 ];
[1,2,3];
[
  1,
  2,
  3,
];</code></pre>

    <p><strong>The values inside are evaluated at creation time.</strong> When you write <code>[a + b, someFunc(), user.name]</code>, JavaScript evaluates each expression right there, stores the resulting value in the array, and never re-evaluates. If you change <code>a</code> or <code>b</code> later, the array doesn't update — it holds the values that existed at the moment the array was built.</p>
<pre class="language-javascript"><code class="language-javascript">let x = 10;
const arr = [x, x * 2, x + 5];
arr;                // [10, 20, 15]

x = 999;            // change x AFTER the array was built
arr;                // still [10, 20, 15] — the values are frozen in place</code></pre>

    <p><strong>You can nest arrays as deeply as you want.</strong> An item in an array can be another array, whose items can be more arrays, and so on. Each level uses its own pair of brackets. This is how you build 2D grids, tree structures, matrices, and any other hierarchical data.</p>
<pre class="language-javascript"><code class="language-javascript">const grid = [
  [1, 2, 3],
  [4, 5, 6],
  [7, 8, 9],
];

grid[0];        // [1, 2, 3] — the first row
grid[0][0];     // 1 — the first item of the first row
grid[2][1];     // 8 — third row, second column</code></pre>

    <p><strong>The <code>new Array()</code> constructor exists but is almost never used.</strong> You can technically write <code>new Array(1, 2, 3)</code> to build the same array as <code>[1, 2, 3]</code>. The literal syntax is shorter, clearer, and has fewer weird edge cases (like <code>new Array(3)</code> creating an empty 3-slot array instead of a single-item array with the number 3). Always prefer <code>[]</code>.</p>
<pre class="language-javascript"><code class="language-javascript">const a = [1, 2, 3];             // ✓ preferred — clear and simple
const b = new Array(1, 2, 3);    // ⚠ works but verbose

const c = new Array(3);          // ⚠ trap — this creates [empty, empty, empty], not [3]
c.length;                        // 3
c[0];                            // undefined
const d = [3];                   // ✓ this is what you probably wanted — length 1</code></pre>
  `,

  /* --- Chunk 1: Why & When --- */

  /* 1.0 What problem it solves */
  'topics-9-2-1-0': `
    <p>JavaScript needs a way to tell "this is a single value" from "this is a group of values." Without a distinct syntax for arrays, the language would have no way to distinguish <code>1, 2, 3</code> (three separate values) from <code>[1, 2, 3]</code> (one array containing three values). The bracket-and-comma syntax is that distinguishing marker — the brackets bundle everything inside into a single value that JavaScript can pass around, store, and operate on as one thing.</p>
    <p>The syntax also solves a readability problem: it makes arrays visually obvious in source code. Whenever you see <code>[]</code>, you know immediately that you're looking at an array. This is one of JavaScript's most recognizable shapes, and it appears constantly in real code — anywhere data comes in groups, anywhere a function returns multiple values, anywhere you're passing a list of arguments as one bundle. The syntax is designed to be short and unambiguous so it doesn't get in the way.</p>
  `,

  /* 1.1 Why use it */
  'topics-9-2-1-1': `
    <p>Use the literal <code>[]</code> syntax every time you create an array. It's the standard, the shortest form, and the one every JavaScript developer expects to see. There's essentially no situation where a different creation method is better — even <code>new Array()</code>, which exists in the language, has traps that <code>[]</code> avoids and is almost universally considered inferior style.</p>
    <p>Within that, the specific formatting choices — one line versus multi-line, trailing commas or not, extra whitespace — are stylistic and usually enforced by your linter or team's style guide. The most common conventions: put short arrays on one line (<code>[1, 2, 3]</code>), put long or complex arrays on multiple lines with trailing commas, and always put a single space after each comma (<code>[1, 2, 3]</code>, not <code>[1,2,3]</code>). These aren't language rules, but they're near-universal in modern JavaScript codebases.</p>
    <p>The bigger question isn't "which syntax to use" — it's always <code>[]</code> — but "when do I need an array at all?" If your data is a list, use an array. If it's a single value, don't wrap it in brackets just for uniformity. If it's key-value pairs, use an object. The syntax is easy; the design decision about which structure fits your data is what actually takes judgment.</p>
  `,

  /* 1.2 Where you use it */
  'topics-9-2-1-2': `
<pre class="language-javascript"><code class="language-javascript">// Every array literal in your code — this is the everywhere case:
const colors = ['red', 'green', 'blue'];
const numbers = [1, 2, 3, 4, 5];
const flags = [true, false];

// Function returning multiple values as an array
function getCoords() {
  return [10, 20];
}

// Array as a function argument
console.log([1, 2, 3]);
render(['Home', 'About', 'Contact']);

// Building up an array from other arrays with spread
const combined = [...arr1, ...arr2, 'extra'];

// Destructuring — the [] syntax also appears on the LEFT side of =
const [first, second] = ['Os', 'Sam'];

// Array of objects — the most common shape for real-world data
const users = [
  { id: 1, name: 'Os' },
  { id: 2, name: 'Sam' },
];

// Nested arrays for tabular or grid data
const board = [
  ['X', 'O', 'X'],
  ['O', 'X', 'O'],
  ['X', 'O', 'X'],
];

// Anonymous array as an immediate argument (no variable needed)
element.classList.add(...['btn', 'primary', 'large']);

// Array of function calls (evaluated at creation)
const seed = [Math.random(), Math.random(), Math.random()];

// Empty array as an initial state — waiting for data to arrive
let messages = [];
socket.on('message', (m) => messages.push(m));

// Anywhere in your code where you need to bundle multiple related
// values into one thing, the [] syntax is what you reach for.</code></pre>
  `,

  /* 1.3 Plain English explanation */
  'topics-9-2-1-3': `
    <p>Think of the square brackets as a fence around a group of items. Without the fence, the items are just floating around, unrelated — three separate numbers, three separate strings, whatever. Put a fence around them, and now they're a group. You can point at the whole fenced-in area and say "that group over there," without having to list every item inside. That's what <code>[]</code> does — it's the visible marker that turns loose items into a single grouped thing.</p>
    <p>Commas are the little dividers between items inside the fence. If you don't put dividers, JavaScript can't tell where one item ends and the next begins — it'll see everything as one big blur and complain. If you put too many dividers, it thinks there are extra empty slots between items — which usually isn't what you want.</p>
    <p>The whole syntax is designed to be as light as possible. Two little brackets and some commas — that's it. This lets arrays show up all over your code without being visually noisy, and lets you nest them, pass them around, and build them dynamically without a lot of ceremony. The simpler the syntax, the more you can use it, and arrays are used a LOT.</p>
  `,

  /* 1.4 Mental model */
  'topics-9-2-1-4': `
    <p>The <code>[]</code> syntax is a literal — meaning it's a piece of source code that creates a value the moment JavaScript reads it. Every time the line runs, a brand-new array is created with the values you specified. This is important: <code>const arr = [1, 2, 3]</code> inside a function creates a new array every time the function is called, not once.</p>
    <p>Inside the brackets, everything between the commas is an <em>expression</em> — JavaScript evaluates it, then stores the result as an item in the array. You can put anything expression-shaped: literals, variable references, function calls, math, method calls, other arrays, ternaries, whatever. What you cannot put is statements — no if statements, no for loops, no variable declarations. Just expressions that produce values.</p>
    <p>The mental picture: <em>brackets create the container, commas separate the contents, expressions become the items</em>. The parser walks left to right through what's between the brackets, evaluates each expression, and puts the result into the next slot of the array. When it reaches the closing bracket, the array is complete and ready to be used.</p>
  `,

  /* 1.5 Step-by-step walkthrough */
  'topics-9-2-1-5': `
<pre class="language-javascript"><code class="language-javascript">// Scenario: building an array from a mix of literals, variables, and computed values.
const name = 'Os';
const count = 3;

const data = ['user', name, count * 2, name.toUpperCase(), true];

// What JS does when it reads that line, step by step:

// Step 1: JS sees 'const data ='. Declaration, value coming.

// Step 2: JS sees '['. Array literal starts.
//         The parser knows: "everything until the matching ] is one array."
//         An empty container is being prepared to hold the items.

// Step 3: JS evaluates the first expression: 'user'
//         That's a string literal — evaluates to the string "user".
//         Store "user" at index 0.
//         Array so far: ["user"]

// Step 4: JS sees ','. Separator — move on to the next item.

// Step 5: JS evaluates 'name'
//         That's a variable reference — look up its value.
//         name is "Os".
//         Store "Os" at index 1.
//         Array so far: ["user", "Os"]

// Step 6: JS sees ','. Next item.

// Step 7: JS evaluates 'count * 2'
//         count is 3. 3 * 2 = 6.
//         Store 6 at index 2.
//         Array so far: ["user", "Os", 6]

// Step 8: JS sees ','. Next item.

// Step 9: JS evaluates 'name.toUpperCase()'
//         name is "Os". .toUpperCase() returns "OS".
//         Store "OS" at index 3.
//         Array so far: ["user", "Os", 6, "OS"]

// Step 10: JS sees ','. Next item.

// Step 11: JS evaluates 'true'
//          Boolean literal — evaluates to true.
//          Store true at index 4.
//          Array so far: ["user", "Os", 6, "OS", true]

// Step 12: JS sees ']'. Array literal ends.
//          The finished array is assigned to data.
//          data.length is 5.

// Key observations:
//   - Every expression between commas gets evaluated ONCE at creation.
//   - After creation, the array holds VALUES, not references to the original expressions.
//   - Changing 'name' or 'count' after this line has no effect on 'data'.
//   - The array can hold mixed types (string, string, number, string, boolean).
//   - The whole thing happens in a single line of source code.

let originalName = name;
name = 'Sam';
data;   // still ["user", "Os", 6, "OS", true] — the array is frozen in place</code></pre>
  `,

  /* --- Chunk 2: The Click --- */

  /* 2.0 Debugging clue */
  'topics-9-2-2-0': `
    <p>Array-syntax bugs have a few recognizable shapes.</p>
    <p><strong>1. SyntaxError: Unexpected token.</strong> You forgot a comma between items, or used the wrong bracket (parenthesis instead of square bracket), or forgot the closing bracket. Fix: check for one comma per gap, matching <code>[</code> and <code>]</code>, and no stray characters between items.</p>
    <p><strong>2. Array length is one more than expected.</strong> You have a leading comma or a middle comma that created a hole. <code>[, 1, 2, 3]</code> has length 4 with a hole at index 0. Fix: remove the extra comma. If you really wanted <code>undefined</code> at that position, write it explicitly.</p>
    <p><strong>3. Array length is one less than expected.</strong> You have items that are separated by something other than a comma (usually spaces or semicolons), and the parser is treating them as a single expression. This usually shows up as a SyntaxError, but sometimes as a single-item array containing a weird value. Fix: commas between items, always.</p>
    <p><strong>4. <code>new Array(N)</code> creates the wrong array.</strong> You wrote <code>new Array(3)</code> expecting an array containing the number 3, and got an empty 3-slot array instead. This is the confusing single-argument behavior of the <code>Array</code> constructor. Fix: use the literal syntax — <code>[3]</code>.</p>
    <p><strong>5. Whole array is empty when you expected items.</strong> You wrote <code>const arr = []</code> at the top of a function and forgot to add items to it. Or you're reading an array from a place that returned empty because the underlying operation failed. Fix: check that items are actually being added; log the array right before using it.</p>
    <p><strong>6. Nested brackets don't line up.</strong> You have <code>[[1, 2], [3, 4]</code> — missing a closing bracket. Editors usually catch this with red squigglies, but if you're pasting from somewhere, count the opening and closing brackets to make sure they match.</p>
    <p><strong>7. Mistaking <code>[]</code> for <code>{}</code>.</strong> You wrote <code>const obj = ['name', 'Os']</code> when you meant <code>const obj = { name: 'Os' }</code>. Fix: arrays are for ordered lists; objects are for labeled key-value pairs. The right choice depends on how you'll access the data — by position (array) or by name (object).</p>
  `,

  /* 2.1 The part that makes it click */
  'topics-9-2-2-1': `
    <p>The <code>[]</code> syntax is the visible marker that turns a group of expressions into a single array value. The brackets are the container; the commas are the separators; each item between the commas is an expression that gets evaluated at creation time. Once you internalize this three-part structure, the syntax stops being a set of rules to memorize and starts being an obvious grammar you can read and write without thinking.</p>
    <p>The other click: array literals create a fresh array every time they're evaluated. This means <code>const arr = []</code> inside a function creates a NEW empty array each time the function runs — not a shared one. If you want a single shared array across calls, you have to declare it outside the function. This is a small but important detail once you start passing arrays between functions and storing them across function calls.</p>
  `,

  /* 2.2 Common confusions */
  'topics-9-2-2-2': `
    <p><strong>Confusion: "the brackets are just decoration"</strong></p>
    <p>They're not — they're what tells the parser "this is an array." Without them, the parser sees loose values and can't group them. The brackets are structural, not visual.</p>
<pre class="language-javascript"><code class="language-javascript">const a = 1, 2, 3;      // ✗ SyntaxError — no way to make this three items
const b = [1, 2, 3];    // ✓ brackets group them into one array value</code></pre>

    <p><strong>Confusion: "commas are optional if I put items on separate lines"</strong></p>
    <p>They're not. Newlines don't count as separators — JavaScript needs the comma character between items regardless of formatting.</p>
<pre class="language-javascript"><code class="language-javascript">const list = [
  'a'
  'b'
  'c'
];
// ✗ SyntaxError — missing commas, doesn't matter that they're on new lines

const list2 = [
  'a',
  'b',
  'c',
];
// ✓ commas required, one per gap</code></pre>

    <p><strong>Confusion: "trailing commas add an extra item"</strong></p>
    <p>They don't. A comma before the closing bracket is special-cased and ignored. This is intentional so you can add or reorder items in multi-line arrays without git-diff noise on the previously-last line.</p>

    <p><strong>Confusion: "empty commas mean empty items"</strong></p>
    <p>They mean HOLES, which is subtly different from empty items or undefined values. Holes are a JavaScript quirk that most methods handle inconsistently. Don't write them on purpose. If you actually want <code>undefined</code>, write <code>undefined</code>.</p>

    <p><strong>Confusion: "<code>new Array(n)</code> is the same as <code>[n]</code>"</strong></p>
    <p>It's not. <code>new Array(3)</code> creates an empty array of length 3 (three holes). <code>[3]</code> creates a length-1 array containing the number 3. This is one of the reasons the literal syntax is preferred — it doesn't have this ambiguity.</p>

    <p><strong>Confusion: "<code>[]</code> and <code>{}</code> are interchangeable"</strong></p>
    <p>They're not. <code>[]</code> is an array (ordered, indexed by number). <code>{}</code> is an object (unordered, indexed by name). They have different methods, different iteration behavior, and different mental models. Pick based on how your data is shaped.</p>

    <p><strong>Confusion: "the same <code>[]</code> literal always produces the same array"</strong></p>
    <p>The values are the same, but each execution creates a NEW array object. Two arrays with identical contents are NOT equal by <code>===</code>, because <code>===</code> on arrays compares references, not values.</p>
<pre class="language-javascript"><code class="language-javascript">[1, 2, 3] === [1, 2, 3];   // false — two different array objects
const a = [1, 2, 3];
const b = a;
a === b;                    // true — same array object, two variable names</code></pre>
  `,

  /* 2.3 Common mistakes */
  'topics-9-2-2-3': `
<pre class="language-javascript"><code class="language-javascript">// Missing commas between items
const nums = [1 2 3];
// wrong: SyntaxError — parser expected commas
// fix: add commas
const nums2 = [1, 2, 3];</code></pre>

<pre class="language-javascript"><code class="language-javascript">// Leading comma creates a hole
const list = [, 'apple', 'banana'];
list.length;   // 3, not 2
list[0];       // undefined — a hole
// fix: remove the leading comma
const list2 = ['apple', 'banana'];</code></pre>

<pre class="language-javascript"><code class="language-javascript">// Middle comma creates a hole
const scores = [90, , 72];
scores.length;   // 3, not 2
scores[1];       // undefined — a hole
// fix: remove the extra comma, or put an explicit value
const scores2 = [90, 72];
const scores3 = [90, undefined, 72];   // if you truly need undefined in the middle</code></pre>

<pre class="language-javascript"><code class="language-javascript">// Mismatched brackets
const grid = [[1, 2], [3, 4];
// wrong: missing closing bracket → SyntaxError
// fix: match every opening bracket with a closing one
const grid2 = [[1, 2], [3, 4]];</code></pre>

<pre class="language-javascript"><code class="language-javascript">// Using new Array(n) expecting [n]
const arr = new Array(5);
arr.length;   // 5 (empty slots!)
arr[0];       // undefined
// wrong: creates a 5-slot empty array, not [5]
// fix: use the literal
const arr2 = [5];   // length 1, contains the number 5</code></pre>

<pre class="language-javascript"><code class="language-javascript">// Comparing two arrays with ===
const a = [1, 2, 3];
const b = [1, 2, 3];
a === b;   // false — different array objects
// fix: compare item by item, or use a library
const equal = a.length === b.length && a.every((v, i) => v === b[i]);
equal;    // true</code></pre>

<pre class="language-javascript"><code class="language-javascript">// Mixing [] and {} by mistake
const user = ['name', 'Os', 'age', 30];
// wrong: this stores four items in a list, no way to look up "name"
// fix: use an object for key-value data
const user2 = { name: 'Os', age: 30 };
user2.name;   // "Os"</code></pre>

<pre class="language-javascript"><code class="language-javascript">// Assuming the array creation is re-evaluated on every reference
function getDefaults() {
  return [1, 2, 3];
}
const a = getDefaults();
const b = getDefaults();
a === b;   // false — two separate arrays
a.push(4);
b;         // [1, 2, 3] — unaffected because it's a separate array
// This is correct behavior; just be aware that every call creates a new array.</code></pre>
  `,

  /* --- Chunk 3: In Practice --- */

  /* 3.0 Tiny examples */
  'topics-9-2-3-0': `
<pre class="language-javascript"><code class="language-javascript">// Basic literals
[];                          // empty array
['only'];                    // single item
[1, 2, 3];                   // three numbers
['a', 'b', 'c'];             // three strings

// Mixed types
['Os', 30, true, null];

// Multi-line with trailing comma
const list = [
  'apple',
  'banana',
  'cherry',
];

// Nested
const grid = [[1, 2], [3, 4]];
grid[0][1];                  // 2

// Expressions as items
const a = 10;
const arr = [a, a + 1, a * 2, Math.random()];

// Empty and short array checks
[].length;                   // 0
['x'].length;                // 1
[[]].length;                 // 1 (one item, which is an empty array)

// Trailing comma — legal
[1, 2, 3,].length;           // 3

// Holes — a quirk to avoid
[1, , 3].length;             // 3
[1, , 3][1];                 // undefined

// new Array trap
new Array(3).length;         // 3 (three empty slots)
[3].length;                  // 1
new Array(1, 2, 3);          // [1, 2, 3] (multi-arg form works normally)

// Reference vs value equality
[1, 2] === [1, 2];           // false — different objects
const x = [1, 2];
x === x;                     // true — same reference</code></pre>
  `,

  /* 3.1 Real website uses */
  'topics-9-2-3-1': `
    <p><strong>Example: initial empty state</strong></p>
<pre class="language-javascript"><code class="language-javascript">let messages = [];
socket.on('new-message', (m) => messages.push(m));</code></pre>

    <p><strong>Example: fixed set of options</strong></p>
<pre class="language-javascript"><code class="language-javascript">const daysOfWeek = ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'];</code></pre>

    <p><strong>Example: multi-line array of config objects</strong></p>
<pre class="language-javascript"><code class="language-javascript">const routes = [
  { path: '/',        component: Home },
  { path: '/about',   component: About },
  { path: '/contact', component: Contact },
];</code></pre>

    <p><strong>Example: coordinates as a two-item array</strong></p>
<pre class="language-javascript"><code class="language-javascript">const origin = [0, 0];
const topRight = [width, 0];
const line = [origin, topRight];</code></pre>

    <p><strong>Example: computed items at creation time</strong></p>
<pre class="language-javascript"><code class="language-javascript">const now = Date.now();
const timeSlots = [now, now + 60000, now + 120000, now + 180000];</code></pre>

    <p><strong>Example: passing a fresh array as a function argument</strong></p>
<pre class="language-javascript"><code class="language-javascript">element.classList.add(...['btn', 'primary', 'large']);</code></pre>

    <p><strong>Example: array of DOM class names built inline</strong></p>
<pre class="language-javascript"><code class="language-javascript">const classes = ['card', isActive ? 'active' : 'inactive', size];
element.className = classes.join(' ');</code></pre>
  `,

  /* 3.2 Connects to */
  'topics-9-2-3-2': `
    <ul>
      <li><strong>What arrays are</strong> → the concept; this lesson is the syntax that expresses it</li>
      <li><strong>Arrays as lists</strong> → the mental frame for when to reach for <code>[]</code></li>
      <li><strong>Commas</strong> → the item separator inside the brackets</li>
      <li><strong>Trailing commas</strong> → legal and often preferred for multi-line arrays</li>
      <li><strong>Expressions vs statements</strong> → what can and can't go inside the brackets</li>
      <li><strong>Nested arrays</strong> → brackets inside brackets for grids and hierarchies</li>
      <li><strong>Spread operator (<code>...</code>)</strong> → also uses <code>[]</code>-adjacent syntax for combining arrays</li>
      <li><strong>Destructuring</strong> → <code>[]</code> appears on the left of <code>=</code> to unpack arrays</li>
      <li><strong>Object syntax <code>{}</code></strong> → the sibling structure for labeled data</li>
      <li><strong>Reference equality</strong> → two arrays with the same contents are NOT <code>===</code>-equal</li>
      <li><strong>Debugging</strong> → most syntax errors come from missing commas or mismatched brackets</li>
    </ul>
  `,

  /* 3.3 See also */
  'topics-9-2-3-3': `
    <ul>
      <li>What arrays are</li>
      <li>Arrays as lists</li>
      <li>Array indexes</li>
      <li>Array .length</li>
      <li>Nested arrays</li>
      <li>Spread and destructuring</li>
      <li>Object syntax</li>
      <li>Reference vs value equality</li>
      <li>Common array mistakes</li>
    </ul>
  `,

  /* ========================================================= 
   Sub-lesson: 3.10.4 Arrays → array items/elements
 =======================================================*/

  /* --- Chunk 0: What & How --- */

  /* 0.0 What it is */
  'topics-9-3-0-0': `
    <p>The <strong>items</strong> in an array — also called <strong>elements</strong> — are the individual values stored inside it. Both words mean the same thing: <em>the stuff between the brackets</em>. If your array is <code>['red', 'green', 'blue']</code>, the items are <code>'red'</code>, <code>'green'</code>, and <code>'blue'</code>. Documentation, tutorials, and error messages use the two terms interchangeably, so you'll see both — get used to hearing "the third element" and "the third item" mean exactly the same thing.</p>
    <p>This lesson zooms in on the items themselves: what can be an item, how JavaScript stores them, and the rules that govern them once they're in the array. The array is the container; the items are what's inside. Understanding how items behave — that they can be any type, that they're stored by position, that modifying one doesn't affect the others — is what lets you confidently reach into an array and know exactly what you'll get back.</p>
  `,

  /* 0.1 Syntax */
  'topics-9-3-0-1': `
<pre class="language-javascript"><code class="language-javascript">// An array with three items:
const colors = ['red', 'green', 'blue'];
// items: 'red', 'green', 'blue'

// Each item can be any type — mixing is allowed
const mixed = ['Os', 30, true, null, undefined];
// items: string, number, boolean, null, undefined

// Items can be objects
const users = [
  { name: 'Os',  age: 30 },
  { name: 'Sam', age: 25 },
];
// items: two objects

// Items can be other arrays (nested)
const grid = [[1, 2], [3, 4], [5, 6]];
// items: three arrays

// Items can be the result of expressions — evaluated at creation
const now = Date.now();
const timestamps = [now, now + 1000, now + 2000];
// items: three numbers, computed at the moment the array was built

// Reading an item — bracket notation, index starts at 0
colors[0];              // 'red'   — the first item
colors[1];              // 'green' — the second item
colors[colors.length - 1];  // 'blue' — the last item

// Modifying an item — arrays are mutable
colors[0] = 'orange';
colors;                 // ['orange', 'green', 'blue']

// Adding an item — .push adds to the end
colors.push('yellow');
colors;                 // ['orange', 'green', 'blue', 'yellow']

// Removing an item — .pop removes from the end
colors.pop();
colors;                 // ['orange', 'green', 'blue']

// Counting items — .length is the total
colors.length;          // 3</code></pre>
  `,

  /* 0.2 Anatomy / Breakdown */
  'topics-9-3-0-2': `
<pre class="language-javascript"><code class="language-javascript">const colors = ['red', 'green', 'blue'];

// The array as a container, with items inside:
//
//   [ 'red' , 'green' , 'blue' ]
//     ─┬─     ──┬──     ──┬──
//      │        │         │
//      └─ item at index 0
//               │         │
//               └─ item at index 1
//                         │
//                         └─ item at index 2
//
// The array itself is one value (the whole container).
// The items are the individual values living inside it.

// "Item" and "element" refer to the same thing — the individual values.
// Older docs and MDN often use "element". Newer code and tutorials often
// use "item". Both are correct.

// Each item has:
//   - A VALUE (what's stored)
//   - A POSITION (the index in the array)
//   - A TYPE (string, number, object, whatever)

// The array holds items BY POSITION, not by name.
// This is the key difference from objects:
//   - Array:  colors[0]      → position 0 gives you "red"
//   - Object: colors['red']  → doesn't work the same way

// The item is separate from the array — you can extract it into a variable:
const first = colors[0];    // first is now the string "red"
first === 'red';            // true

// Modifying 'first' doesn't affect the array (for primitives):
// but modifying an object item WOULD affect the array (see chunk 2)</code></pre>
  `,

  /* 0.3 Syntax Details That Matter */
  'topics-9-3-0-3': `
    <p><strong>Items can be any JavaScript value.</strong> Numbers, strings, booleans, <code>null</code>, <code>undefined</code>, objects, arrays, functions, symbols, dates, regexes — anything. JavaScript arrays are heterogeneous by default: nothing stops you from putting a number, a string, and an object in the same array. In practice, most arrays hold items of one type because it makes iteration easier, but the language doesn't enforce this.</p>
<pre class="language-javascript"><code class="language-javascript">const anythingGoes = [
  42,                  // number
  'hello',             // string
  true,                // boolean
  null,                // null
  undefined,           // undefined
  { name: 'Os' },      // object
  [1, 2, 3],           // array
  () => 'hi',          // function
  new Date(),          // Date object
];
anythingGoes.length;   // 9</code></pre>

    <p><strong>Items are stored by position (index), not by identity.</strong> An item doesn't "know" it's the third one — it just happens to be at index 2 right now. If you sort or filter the array, the same item might end up at a different position. If items need stable identity across reordering, that identity has to live INSIDE the item (like an <code>id</code> property), not be inferred from its position.</p>
<pre class="language-javascript"><code class="language-javascript">const users = [
  { id: 42, name: 'Os' },
  { id: 17, name: 'Sam' },
  { id: 88, name: 'Alex' },
];

users[0].name;              // 'Os'
users.sort((a, b) => a.id - b.id);   // sort by id
users[0].name;              // 'Sam' — the first position now holds a different item</code></pre>

    <p><strong>Modifying a primitive item doesn't affect anything outside the array.</strong> If you pull a number, string, or boolean out of an array into a variable and change the variable, the array is unaffected. Primitives are copied by value.</p>
<pre class="language-javascript"><code class="language-javascript">const nums = [1, 2, 3];
let first = nums[0];        // copies the value 1 into 'first'
first = 999;
nums;                       // still [1, 2, 3] — unaffected</code></pre>

    <p><strong>Modifying an object or array item DOES affect the array.</strong> Objects and arrays are stored by reference, not by value. When you pull an object item out, you're pulling out a reference to the same object the array holds. Changing properties through that reference changes the object the array still points at.</p>
<pre class="language-javascript"><code class="language-javascript">const users = [{ name: 'Os' }, { name: 'Sam' }];
const first = users[0];     // 'first' is a REFERENCE to the same object
first.name = 'Alex';
users[0].name;              // 'Alex' — the array's item changed too</code></pre>

    <p><strong>Missing or non-existent items return <code>undefined</code>, not an error.</strong> Reading past the end of the array gives you <code>undefined</code> instead of throwing. This is safe but can be misleading if you don't check — <code>undefined</code> can flow through your code and cause errors later (e.g., <code>undefined.name</code> throws).</p>
<pre class="language-javascript"><code class="language-javascript">const short = ['a', 'b'];
short[10];                  // undefined — no error
short[10]?.toUpperCase();   // undefined — optional chaining prevents the throw</code></pre>

    <p><strong>Items are ordered.</strong> The order you added them is the order they stay in. Unlike some other data structures (like Sets or objects in older JS engines), arrays guarantee insertion order — first pushed is first in line, last pushed is last. This is one of the main reasons to reach for an array over an object.</p>
  `,

  /* --- Chunk 1: Why & When --- */

  /* 1.0 What problem it solves */
  'topics-9-3-1-0': `
    <p>Every array is really an array OF something — an array of names, an array of numbers, an array of users, an array of DOM elements. The array is just the container; the items are what actually carry the meaning. When you talk about "the third search result" or "the current user in the list," you're talking about a specific item, not the array itself. Understanding items — how they're stored, referenced, and modified — is what lets you write code that manipulates individual values inside a collection with confidence.</p>
    <p>The specific problem this lesson addresses: knowing when you're working with the ARRAY vs. an INDIVIDUAL ITEM, and knowing what happens when you modify one vs. the other. This distinction is where a lot of subtle bugs live — accidentally modifying a shared object, expecting primitive copy behavior on objects, forgetting that item position is not identity. Getting the mental model right for items is what prevents those bugs from happening in the first place.</p>
  `,

  /* 1.1 Why use it */
  'topics-9-3-1-1': `
    <p>You work with individual items whenever you need to look at, use, or modify one specific value in a collection. Reading the current user's name from a users array. Updating one product's price in an inventory. Checking whether the first search result matches a criterion. Applying a transformation to each item in a loop. Filtering the array to keep only certain items. Every array operation is ultimately about doing things to specific items — either one at a time or all at once.</p>
    <p>The item-level thinking matters because JavaScript treats primitive items (numbers, strings, booleans) differently from object items (objects, arrays, functions). Primitives are copied when you assign or pass them; objects are shared by reference. This asymmetry is subtle but critical: modifying <code>first = 5</code> after <code>const first = nums[0]</code> doesn't touch the array, but modifying <code>first.name = 'x'</code> after <code>const first = users[0]</code> absolutely does. Knowing which kind of item you're dealing with tells you what side effects to expect.</p>
    <p>The vocabulary matters too. "Item" and "element" are used interchangeably in JavaScript documentation, error messages, and community discussion. When you read "the array elements are transformed by .map()" or "the item at index 3 is undefined," they mean the same thing. Being comfortable with both words means you can read any documentation without stumbling on terminology.</p>
  `,

  /* 1.2 Where you use it */
  'topics-9-3-1-2': `
<pre class="language-javascript"><code class="language-javascript">// Reading a single item by position
const first = users[0];
const last = users[users.length - 1];

// Modifying an item by position
scores[2] = 100;

// Passing an item to a function
sendEmail(users[currentIndex]);

// Iterating over items with for-of
for (const user of users) {
  console.log(user.name);
}

// Iterating with the index too
users.forEach((user, i) => {
  console.log(\`\${i}: \${user.name}\`);
});

// Extracting items with destructuring
const [first, second, ...rest] = users;

// Finding a specific item by criteria
const admin = users.find(u => u.role === 'admin');

// Checking if an item exists
if (products.some(p => p.id === targetId)) {
  // found it
}

// Removing a specific item (returns index, then splice)
const index = tasks.indexOf('walk dog');
if (index !== -1) tasks.splice(index, 1);

// Updating an item inside the array
const idx = users.findIndex(u => u.id === 42);
if (idx !== -1) users[idx] = { ...users[idx], name: 'New Name' };

// Any time you're working with a single value from within an array,
// you're working with an item.</code></pre>
  `,

  /* 1.3 Plain English explanation */
  'topics-9-3-1-3': `
    <p>Think of an array like a numbered row of storage lockers. The array is the whole row — one thing with a name, a size, and a location. But what you actually care about most of the time is what's INSIDE the lockers: a jacket, a pair of shoes, a lunchbox. Those individual things are the items. When you go to the gym, you don't grab "the locker row" — you open your specific locker and take out your specific stuff.</p>
    <p>The array gives you a way to keep the stuff organized and easy to find (locker 3 always has your stuff, even if the rows get rearranged). But the stuff itself is what you're really working with. When you say "put this in the array," you mean "put this in an available locker." When you say "get the third item," you mean "open locker 3 and give me what's inside."</p>
    <p>The subtle bit: some things you put in a locker are like a piece of paper — if you take it out and write on it, the locker still has the original. Other things are like keys to a car — if you take out the key, drive the car, and change the seats, the "car" the locker still remembers is the same car with the new seats. Numbers, strings, and booleans behave like pieces of paper (copied on the way out). Objects and arrays behave like keys (a reference to the same underlying thing).</p>
  `,

  /* 1.4 Mental model */
  'topics-9-3-1-4': `
    <p>The array is one thing; the items are separate things stored inside it. Every operation on an array either operates on the whole array (length, iteration, sorting) or reaches into it to work with a specific item (indexing, push, pop, splice at a position). When you write <code>arr[0]</code>, you're not modifying the array — you're asking the array for the value at position 0, and the array hands that value back to you.</p>
    <p>The critical distinction: primitive items (numbers, strings, booleans, <code>null</code>, <code>undefined</code>) are handed to you by VALUE. When you assign <code>const x = arr[0]</code> and <code>arr[0]</code> is the number 5, <code>x</code> gets a copy of the value 5 — completely independent of the array. Changing <code>x</code> can never affect the array. Reference-type items (objects, arrays, functions) are handed to you by REFERENCE. When you assign <code>const u = users[0]</code>, <code>u</code> points at the same object the array still points at. Changing properties on <code>u</code> is the same as changing properties on <code>users[0]</code>.</p>
    <p>The mental picture: <em>the array is a row of boxes, and each box contains either a raw value (for primitives) or a slip of paper with an address on it (for objects). When you take a primitive out, you get the value itself — a copy. When you take a reference-type out, you get the address — meaning you and the array are both pointing at the same underlying thing.</em></p>
    <p>This is the same rule that applies everywhere in JavaScript — function arguments, variable assignment, property access — but it hits most visibly with arrays because you're constantly pulling items out and passing them around. Internalize the primitive-vs-reference split for items, and a whole class of "why did that change?" bugs stops happening.</p>
  `,

  /* 1.5 Step-by-step walkthrough */
  'topics-9-3-1-5': `
<pre class="language-javascript"><code class="language-javascript">// Scenario: two different arrays — one of primitives, one of objects.
// Watch how "modifying an item" behaves differently in each case.

// --- Case A: an array of PRIMITIVES (numbers) ---
const scores = [90, 85, 72];

// Step 1: pull the first item into a variable
let firstScore = scores[0];
// firstScore is a COPY of the value 90.
// The array still holds 90 at index 0.

// Step 2: change firstScore
firstScore = 100;
// firstScore is now 100.
// But scores[0] is STILL 90 — the copy was independent.

scores;         // [90, 85, 72] — unchanged
firstScore;     // 100

// --- Case B: an array of OBJECTS ---
const users = [
  { name: 'Os',  age: 30 },
  { name: 'Sam', age: 25 },
];

// Step 3: pull the first item into a variable
const firstUser = users[0];
// firstUser is a REFERENCE to the same object at users[0].
// Both firstUser and users[0] point to { name: 'Os', age: 30 }.

// Step 4: modify a property on firstUser
firstUser.name = 'Osvaldo';
// This changes the object that BOTH firstUser and users[0] point to.

users[0].name;      // 'Osvaldo' — the array's item changed too!
firstUser.name;     // 'Osvaldo'

// The two variables are two names for the same object. There's only
// one { name: 'Osvaldo', age: 30 } object in memory, and both variables
// reference it.

// --- The distinction ---
// - Modifying a primitive variable never affects the array.
// - Modifying properties on a reference variable DOES affect the array.
// - Reassigning the reference (firstUser = { ... }) does NOT affect the array —
//   that just points firstUser at a different object.

const secondUser = users[1];
secondUser = { name: 'New', age: 0 };   // ✗ error — secondUser is const

// If secondUser were 'let':
let anotherUser = users[1];
anotherUser = { name: 'New', age: 0 };
users[1];        // still { name: 'Sam', age: 25 } — reassignment doesn't propagate
                  // (it just points anotherUser at a different object)

// Only property mutation propagates. Reassignment breaks the connection.</code></pre>
  `,

  /* --- Chunk 2: The Click --- */

  /* 2.0 Debugging clue */
  'topics-9-3-2-0': `
    <p>Item-related bugs cluster around a few recognizable patterns.</p>
    <p><strong>1. An object item unexpectedly changes.</strong> You extracted <code>const user = users[0]</code>, modified <code>user.name</code>, and now <code>users[0].name</code> also changed. This is expected reference-type behavior. If you wanted an independent copy, use <code>const user = { ...users[0] }</code> for a shallow copy, or a deep-clone method for nested objects.</p>
    <p><strong>2. A primitive change doesn't stick.</strong> You wrote <code>let first = nums[0]; first = 999;</code> and expected <code>nums[0]</code> to be 999. It's not — <code>first</code> was a copy. To modify the array, write <code>nums[0] = 999</code> directly.</p>
    <p><strong>3. Item is <code>undefined</code>.</strong> You accessed <code>arr[10]</code> and got <code>undefined</code> because the array is shorter than you thought. Fix: check <code>arr.length</code> before indexing, or use optional chaining (<code>arr[10]?.name</code>) to gracefully handle missing items.</p>
    <p><strong>4. Item found by <code>.find()</code> is <code>undefined</code>.</strong> Your search criteria didn't match any item. Fix: check the result before using it — <code>const user = users.find(u => u.id === 42); if (user) { ... }</code>.</p>
    <p><strong>5. Modifying an item inside a loop and getting weird results.</strong> If you're using <code>for-of</code> and reassigning the loop variable, that doesn't update the array — because the loop variable is just a reference to the item, and reassigning it points to something new. Fix: use <code>arr[i] = newValue</code> with an indexed loop, or use <code>.map()</code> to build a new array.</p>
    <p><strong>6. Comparing items and finding no matches unexpectedly.</strong> You're comparing objects with <code>===</code>, but two objects with identical contents are still different objects. Fix: compare by a unique property (<code>a.id === b.id</code>) instead of by reference.</p>
    <p><strong>7. Copying the array but items still share.</strong> You did <code>const copy = [...arr]</code> and now modifying <code>copy[0].name</code> changes <code>arr[0].name</code>. The spread makes a NEW array, but the items themselves are still shared references. For fully independent copies, deep-clone the items too.</p>
  `,

  /* 2.1 The part that makes it click */
  'topics-9-3-2-1': `
    <p>An array is a container; the items are the values inside. Reading an item hands you back its value (for primitives) or a reference (for objects). Writing an item with <code>arr[i] = value</code> puts a value into that slot in the array. Everything more complex is built on those two operations. Once you internalize the primitive-vs-reference split for what "handing you back" means, the whole set of "why did my array change?" and "why doesn't my change stick?" bugs stop being surprising.</p>
    <p>The other click: items are stored by position, and position is not identity. If you sort or filter, positions change but items don't. If you want to track a specific item across reorderings, give it a stable ID (a property inside the item) and search by that ID, not by index. Position is where the item lives right now; ID is who the item is.</p>
  `,

  /* 2.2 Common confusions */
  'topics-9-3-2-2': `
    <p><strong>Confusion: "'item' and 'element' are different things"</strong></p>
    <p>They're synonyms for the same concept — an individual value inside an array. MDN and older docs often use "element"; newer tutorials and code often use "item". Both are correct and interchangeable.</p>

    <p><strong>Confusion: "modifying an item pulled from the array doesn't affect the array"</strong></p>
    <p>Depends on the type. Primitives (numbers, strings, booleans) are copied — modifying the copy doesn't affect the array. Objects and arrays are references — modifying properties DOES affect the array.</p>
<pre class="language-javascript"><code class="language-javascript">const nums = [1, 2, 3];
let n = nums[0];
n = 999;
nums;         // [1, 2, 3] — primitive, independent

const users = [{ name: 'Os' }];
const u = users[0];
u.name = 'X';
users;        // [{ name: 'X' }] — reference, shared</code></pre>

    <p><strong>Confusion: "arrays can only hold one type of item"</strong></p>
    <p>They can hold any mix of types. It's often cleaner to keep types uniform for iteration, but JavaScript doesn't enforce this.</p>

    <p><strong>Confusion: "the item's position is its ID"</strong></p>
    <p>Position is transient. If items get sorted, filtered, or reordered, positions change. For stable identity, store an ID inside each item.</p>

    <p><strong>Confusion: "copying the array copies the items too"</strong></p>
    <p>Shallow copies (<code>[...arr]</code>, <code>arr.slice()</code>) copy the array structure but SHARE the item references. If your items are objects, both arrays see the same objects. For fully independent copies, you need to deep-clone each item too.</p>
<pre class="language-javascript"><code class="language-javascript">const original = [{ name: 'Os' }];
const copy = [...original];
copy[0].name = 'X';
original[0].name;      // 'X' — shared object

const deep = original.map(u => ({ ...u }));
deep[0].name = 'Y';
original[0].name;      // still 'X' — independent objects</code></pre>

    <p><strong>Confusion: "if <code>.find()</code> returns something, that's the item — not a copy"</strong></p>
    <p>Correct — .find() returns the actual item, not a copy. For primitives this doesn't matter (they're values anyway). For objects, modifying the returned item modifies the array's item.</p>

    <p><strong>Confusion: "comparing two array items with <code>===</code> checks their contents"</strong></p>
    <p>For primitives, yes. For objects, no — <code>===</code> on objects compares references. Two separate objects with identical contents are NOT <code>===</code>-equal.</p>
  `,

  /* 2.3 Common mistakes */
  'topics-9-3-2-3': `
<pre class="language-javascript"><code class="language-javascript">// Modifying a primitive copy expecting the array to update
const scores = [90, 85, 72];
let first = scores[0];
first = 100;
console.log(scores);
// wrong: scores is still [90, 85, 72] — first was a copy
// fix: assign directly to the array position
scores[0] = 100;</code></pre>

<pre class="language-javascript"><code class="language-javascript">// Modifying an object item and being surprised the array changed
const users = [{ name: 'Os' }, { name: 'Sam' }];
const first = users[0];
first.name = 'Osvaldo';
console.log(users[0].name);   // 'Osvaldo'
// This is EXPECTED — object items are shared references.
// If you wanted independent modification:
const firstCopy = { ...users[0] };
firstCopy.name = 'New';
users[0].name;   // still 'Os' — independent</code></pre>

<pre class="language-javascript"><code class="language-javascript">// Assuming item position is stable across sorts
const tasks = [{ id: 1, name: 'a' }, { id: 2, name: 'b' }, { id: 3, name: 'c' }];
const currentTaskIndex = 0;
tasks.sort((a, b) => b.id - a.id);   // reverse-sort
tasks[currentTaskIndex];              // now { id: 3, name: 'c' } — not what you expected
// fix: track by ID, not by index
const currentTaskId = 1;
const currentTask = tasks.find(t => t.id === currentTaskId);</code></pre>

<pre class="language-javascript"><code class="language-javascript">// Using .find() without checking for undefined
const users = [{ id: 1, name: 'Os' }];
const user = users.find(u => u.id === 99);
console.log(user.name);
// wrong: user is undefined — .name on undefined throws
// fix: check first
if (user) console.log(user.name);
// or use optional chaining
console.log(users.find(u => u.id === 99)?.name);   // undefined, no error</code></pre>

<pre class="language-javascript"><code class="language-javascript">// Reassigning inside a for-of loop expecting the array to change
const nums = [1, 2, 3];
for (let n of nums) {
  n = n * 2;
}
console.log(nums);
// wrong: nums is still [1, 2, 3] — n was a copy for primitives
// fix: use indexed loop, or .map() for a new array
for (let i = 0; i < nums.length; i++) {
  nums[i] = nums[i] * 2;
}
// or
const doubled = nums.map(n => n * 2);</code></pre>

<pre class="language-javascript"><code class="language-javascript">// Comparing two object items with ===
const users = [{ id: 1, name: 'Os' }];
const compare = { id: 1, name: 'Os' };
users[0] === compare;
// wrong: false — different objects even though contents match
// fix: compare by a property
users[0].id === compare.id;   // true</code></pre>

<pre class="language-javascript"><code class="language-javascript">// Shallow-copying an array and modifying items
const original = [{ name: 'Os' }, { name: 'Sam' }];
const copy = [...original];
copy[0].name = 'Alex';
original[0].name;   // 'Alex' — shared object reference
// fix: deep-copy the items
const deep = original.map(u => ({ ...u }));
deep[0].name = 'Alex';
original[0].name;   // still 'Os' — independent</code></pre>

<pre class="language-javascript"><code class="language-javascript">// Reading past the end and treating undefined as a valid item
const items = ['a', 'b'];
const third = items[2];
third.toUpperCase();
// wrong: third is undefined — undefined.toUpperCase() throws
// fix: check first, or use optional chaining
items[2]?.toUpperCase();   // undefined, no error</code></pre>
  `,

  /* --- Chunk 3: In Practice --- */

  /* 3.0 Tiny examples */
  'topics-9-3-3-0': `
<pre class="language-javascript"><code class="language-javascript">const colors = ['red', 'green', 'blue'];

// Reading items by position
colors[0];              // 'red'
colors[1];              // 'green'
colors[2];              // 'blue'
colors[3];              // undefined — past the end

// Modifying items
colors[0] = 'orange';
colors;                 // ['orange', 'green', 'blue']

// Any type of item is allowed
const mixed = [1, 'two', true, null, { name: 'Os' }, [1, 2]];

// Primitive items are copied when extracted
const nums = [1, 2, 3];
let x = nums[0];
x = 99;
nums;                   // [1, 2, 3] — unaffected

// Object items are shared by reference when extracted
const users = [{ name: 'Os' }];
const u = users[0];
u.name = 'Alex';
users[0].name;          // 'Alex' — shared object

// Shallow copy still shares object items
const arr = [{ n: 1 }];
const copy = [...arr];
copy[0].n = 999;
arr[0].n;               // 999 — same underlying object

// Deep-copying object items
const arr2 = [{ n: 1 }];
const deep = arr2.map(o => ({ ...o }));
deep[0].n = 999;
arr2[0].n;              // 1 — independent

// Finding an item
const found = users.find(u => u.name === 'Alex');   // returns the item

// Non-existent item returns undefined
users.find(u => u.name === 'nobody');               // undefined

// Number of items
colors.length;          // 3
[].length;              // 0

// Testing if an item exists
colors.includes('red'); // true
[1, 2, 3].indexOf(2);   // 1
[1, 2, 3].indexOf(99);  // -1 — not found</code></pre>
  `,

  /* 3.1 Real website uses */
  'topics-9-3-3-1': `
    <p><strong>Example: getting the current user from a users list</strong></p>
<pre class="language-javascript"><code class="language-javascript">const currentUser = users.find(u => u.id === session.userId);</code></pre>

    <p><strong>Example: updating a specific item in an array by ID</strong></p>
<pre class="language-javascript"><code class="language-javascript">const index = products.findIndex(p => p.id === targetId);
if (index !== -1) {
  products[index] = { ...products[index], price: newPrice };
}</code></pre>

    <p><strong>Example: removing an item by matching a property</strong></p>
<pre class="language-javascript"><code class="language-javascript">const index = tasks.findIndex(t => t.id === completedId);
if (index !== -1) tasks.splice(index, 1);</code></pre>

    <p><strong>Example: extracting the first and rest with destructuring</strong></p>
<pre class="language-javascript"><code class="language-javascript">const [featured, ...others] = posts;
renderFeatured(featured);
renderList(others);</code></pre>

    <p><strong>Example: safely accessing a possibly-missing item</strong></p>
<pre class="language-javascript"><code class="language-javascript">const nextItem = queue[currentIndex + 1];
if (nextItem) {
  processItem(nextItem);
} else {
  showEmptyMessage();
}</code></pre>

    <p><strong>Example: transforming each item into a new value</strong></p>
<pre class="language-javascript"><code class="language-javascript">const names = users.map(u => u.name);
const prices = products.map(p => p.price);</code></pre>
  `,

  /* 3.2 Connects to */
  'topics-9-3-3-2': `
    <ul>
      <li><strong>Array indexes</strong> → how you refer to a specific item by position</li>
      <li><strong>Array .length</strong> → how many items are in the container</li>
      <li><strong>Primitive vs reference types</strong> → determines whether extracting an item makes a copy or shares</li>
      <li><strong><code>.push()</code>, <code>.pop()</code>, <code>.shift()</code>, <code>.unshift()</code></strong> → add or remove items from either end</li>
      <li><strong><code>.splice()</code></strong> → add or remove items at a specific position</li>
      <li><strong><code>.find()</code>, <code>.findIndex()</code></strong> → locate an item by criteria</li>
      <li><strong><code>.includes()</code>, <code>.indexOf()</code></strong> → check if an item exists</li>
      <li><strong><code>.map()</code>, <code>.filter()</code>, <code>.reduce()</code></strong> → transform every item at once</li>
      <li><strong>Destructuring</strong> → extract multiple items into named variables</li>
      <li><strong>Spread operator</strong> → shallow-copy an array or expand items as arguments</li>
      <li><strong>Sorting</strong> → reorders items but doesn't change their content</li>
      <li><strong>Debugging</strong> → item bugs usually involve reference sharing, missing items, or position vs identity confusion</li>
    </ul>
  `,

  /* 3.3 See also */
  'topics-9-3-3-3': `
    <ul>
      <li>Array indexes</li>
      <li>Array .length</li>
      <li>Primitive vs reference types</li>
      <li>Adding and removing items</li>
      <li>Finding and searching items</li>
      <li>Iterating over items</li>
      <li>Destructuring</li>
      <li>Spread operator</li>
      <li>Common array mistakes</li>
    </ul>
  `,

/* ========================================================= 
   Sub-lesson: 3.10.5 Arrays → commas between items
 =======================================================*/

  /* --- Chunk 0: What & How --- */

  /* 0.0 What it is */
  'topics-9-4-0-0': `
    <p><strong>Commas</strong> are the character JavaScript uses to separate one item from the next inside an array. When you write <code>[1, 2, 3]</code>, the commas are the boundary markers — they tell the parser "the first item ends here, the next item starts here." Without them, the parser can't tell where one item ends and the next begins, and either throws a SyntaxError or interprets multiple items as one weird expression.</p>
    <p>The rule is simple: one comma between every pair of items, zero commas anywhere else. Two commas in a row creates a hole (usually a bug). A comma at the very start creates a hole at position 0. A comma at the very end is a special case — trailing commas are legal and often preferred for multi-line arrays. This lesson zooms in on that one rule and all the edge cases around it, because misplaced commas are one of the most common sources of array syntax errors and subtly wrong-shaped arrays.</p>
  `,

  /* 0.1 Syntax */
  'topics-9-4-0-1': `
<pre class="language-javascript"><code class="language-javascript">// One comma between each pair of items — the standard rule:
[1, 2, 3];              // ✓ length 3
['a', 'b', 'c'];        // ✓ length 3
[true, false];          // ✓ length 2

// Whitespace around the comma is optional and ignored:
[1,2,3];                // ✓ same as [1, 2, 3]
[ 1 , 2 , 3 ];          // ✓ same
[1,
 2,
 3];                    // ✓ same — newlines don't matter

// Empty array — no items, no commas:
[];                     // ✓ length 0

// Single-item array — no comma needed inside:
['only'];               // ✓ length 1
[42];                   // ✓ length 1

// Trailing comma — legal and often preferred for multi-line arrays:
[1, 2, 3,];             // ✓ length 3, NOT 4 — trailing comma doesn't add an item

const list = [
  'apple',
  'banana',
  'cherry',             // ← trailing comma is standard style for multi-line
];
list.length;            // 3

// Wrong: missing comma between items
[1 2 3];                // ✗ SyntaxError

// Wrong: leading comma creates a hole
[, 1, 2, 3];            // ✗ length 4, index 0 is a hole (undefined)

// Wrong: middle comma with nothing between creates a hole
[1, , 3];               // ✗ length 3, index 1 is a hole

// Wrong: multiple commas in a row
[1, , , 4];             // ✗ length 4, indexes 1 and 2 are holes

// Trailing comma inside an object literal is also legal:
[{ a: 1, b: 2, }, { c: 3, }];   // ✓ trailing commas in each object are fine</code></pre>
  `,

  /* 0.2 Anatomy / Breakdown */
  'topics-9-4-0-2': `
<pre class="language-javascript"><code class="language-javascript">const colors = ['red', 'green', 'blue'];

// Visualizing the role of commas:
//
//   [   'red'   ,   'green'   ,   'blue'   ]
//    │         │  │           │  │        │
//    │         │  │           │  │        └── closing bracket — array ends
//    │         │  │           │  └───────────── third item
//    │         │  │           └────────────────── second comma — separator
//    │         │  └──────────────────────────── second item
//    │         └────────────────────────────── first comma — separator
//    └─────────────────────────────────────── first item
//
// Commas are the ONLY thing separating items. Without them, the parser
// can't tell them apart.

// Rule: N items need N-1 commas.
//   [1]           → 1 item, 0 commas
//   [1, 2]        → 2 items, 1 comma
//   [1, 2, 3]     → 3 items, 2 commas
//   [1, 2, 3, 4]  → 4 items, 3 commas
//
// The trailing-comma exception:
//   [1, 2, 3,]    → still 3 items — trailing comma ignored
//   [1, 2, 3, 4,] → still 4 items

// What happens when you break the rule:

// Too FEW commas → SyntaxError (parser can't parse)
[1 2 3];                // parser expected a comma between 1 and 2

// Too MANY commas → HOLES (parser sees an "empty item")
[1, , 3];               // length 3, index 1 is a hole
[, 1, 2];               // length 3, index 0 is a hole

// A hole is a slot that exists (counts toward length) but has no value.
// Reading it returns undefined, but it behaves differently from an
// explicit undefined in some iteration methods.

const holey = [1, , 3];
holey.length;           // 3
holey[1];               // undefined (looks like an item)
holey.map(x => 'y');    // [1, empty, 'y'] — .map SKIPS holes!

const explicit = [1, undefined, 3];
explicit.length;        // 3
explicit[1];            // undefined
explicit.map(x => 'y'); // ['y', 'y', 'y'] — no skipping</code></pre>
  `,

  /* 0.3 Syntax Details That Matter */
  'topics-9-4-0-3': `
    <p><strong>N items require exactly N-1 commas.</strong> Two items, one comma. Three items, two commas. Five items, four commas. Always exactly one less than the item count. Break this rule in either direction and you get a SyntaxError (too few) or holes (too many).</p>

    <p><strong>Whitespace around commas is optional and ignored.</strong> <code>[1,2,3]</code>, <code>[1, 2, 3]</code>, and <code>[1 ,  2 ,  3]</code> all produce identical arrays. Most style guides recommend one space after each comma for readability, but the parser doesn't care.</p>
<pre class="language-javascript"><code class="language-javascript">[1,2,3];      // works
[1, 2, 3];    // works — standard style
[1 , 2 , 3];  // works — unusual spacing but valid</code></pre>

    <p><strong>Newlines don't replace commas.</strong> Even when items are on separate lines, you still need the comma. This trips up people coming from languages like Python (which uses newlines and indentation as separators) — JavaScript always requires the comma.</p>
<pre class="language-javascript"><code class="language-javascript">// ✗ Wrong — missing commas
const list = [
  'apple'
  'banana'
  'cherry'
];
// SyntaxError — newlines don't separate items

// ✓ Correct
const list = [
  'apple',
  'banana',
  'cherry'
];</code></pre>

    <p><strong>Trailing commas are legal and often preferred.</strong> A comma right before the closing bracket doesn't add an extra item. This is a special case built into the language specifically because trailing commas make multi-line arrays easier to maintain — adding a new item only changes the new line, not the previous line, which makes git diffs cleaner.</p>
<pre class="language-javascript"><code class="language-javascript">// Without trailing comma — adding 'grape' changes TWO lines
const list = [
  'apple',
  'banana',
  'cherry'     // ← this line changes to add the comma
];
const list = [
  'apple',
  'banana',
  'cherry',    // ← this line changed
  'grape'      // ← this line was added
];

// With trailing comma — adding 'grape' changes ONE line
const list = [
  'apple',
  'banana',
  'cherry',    // ← already has the comma, no change
];
const list = [
  'apple',
  'banana',
  'cherry',
  'grape',     // ← just this line was added
];</code></pre>

    <p><strong>Leading and middle commas create HOLES — almost never what you want.</strong> A hole is a slot that counts toward <code>.length</code> but has no value. Reading a hole returns <code>undefined</code>, but holes behave inconsistently with iteration methods — some methods skip them, others treat them like explicit <code>undefined</code>. Writing arrays with intentional holes is almost always a bug in modern JavaScript. If you really want <code>undefined</code> at a position, write <code>undefined</code> explicitly.</p>
<pre class="language-javascript"><code class="language-javascript">const withHole = [1, , 3];
const withUndefined = [1, undefined, 3];

// Both look similar at a glance:
withHole.length;              // 3
withUndefined.length;         // 3
withHole[1];                  // undefined
withUndefined[1];             // undefined

// But they behave differently in iteration:
withHole.forEach(x => console.log(x));         // logs 1, then 3 (skips hole)
withUndefined.forEach(x => console.log(x));    // logs 1, undefined, 3

withHole.map(x => 'y');                        // [1, empty, 'y']
withUndefined.map(x => 'y');                   // ['y', 'y', 'y']

// Rule: if you see a lone comma in the middle or start of an array,
// it's almost certainly a typo. Add the missing value or remove the comma.</code></pre>

    <p><strong>Commas work identically for any item type.</strong> Numbers, strings, booleans, objects, arrays, functions — the comma is the same separator. It doesn't care what's between them. This also means <code>[{...}, {...}, {...}]</code> and <code>[[...], [...], [...]]</code> follow the exact same rule: one comma between each item at the outer level.</p>
<pre class="language-javascript"><code class="language-javascript">// All work the same way — commas between items:
[1, 2, 3];
['a', 'b', 'c'];
[true, false, null, undefined];
[{ id: 1 }, { id: 2 }];
[[1, 2], [3, 4]];
[1, 'two', true, { name: 'Os' }, [1, 2]];   // mixed types still just need commas</code></pre>
  `,

  /* --- Chunk 1: Why & When --- */

  /* 1.0 What problem it solves */
  'topics-9-4-1-0': `
    <p>Without a separator character, JavaScript would have no way to tell where one item ends and the next begins inside an array literal. Consider <code>[1 2 3]</code> — is that one item (the strange expression "1 2 3")? Three separate items (1, 2, and 3)? Two items ("1" and "2 3")? Without a rule, the parser can't decide, so it just throws an error. The comma is the rule: "the character between items is always a comma."</p>
    <p>This is the same problem every language solves somehow. Python uses commas (or optionally newlines with indentation). Bash uses spaces. SQL uses commas. Some languages let you pick between multiple separators; JavaScript picks one — the comma — and sticks with it everywhere. Once you internalize "commas separate items, always," you can write arrays without thinking about it and read any JavaScript code fluently.</p>
  `,

  /* 1.1 Why use it */
  'topics-9-4-1-1': `
    <p>You use commas because you have to — there's no other syntax for separating array items in JavaScript. The interesting choices aren't <em>whether</em> to use commas but <em>how you format them</em>: one line vs multi-line, trailing comma or not, one space or none after each comma. These are style choices, not language rules, and different codebases handle them differently.</p>
    <p>The two style choices most worth adopting: <strong>one space after each comma</strong> for single-line arrays (<code>[1, 2, 3]</code> not <code>[1,2,3]</code>) and <strong>trailing commas on multi-line arrays</strong>. Both make code easier to read and easier to maintain. Almost every popular style guide (Airbnb, StandardJS, Prettier's default) enforces these two rules — following them means your code will look natural to almost any JavaScript developer.</p>
    <p>Don't ever intentionally use commas to create holes. Writing <code>[1, , , 4]</code> is almost always a typo, and even when it isn't, it's confusing to future readers who will assume it's a typo. If you need placeholder values, use <code>undefined</code> or <code>null</code> explicitly — they communicate intent and don't have the "sometimes skipped by iteration methods" quirk that holes have.</p>
  `,

  /* 1.2 Where you use it */
  'topics-9-4-1-2': `
<pre class="language-javascript"><code class="language-javascript">// Every array literal, without exception:
const flat = [1, 2, 3];
const strings = ['red', 'green', 'blue'];
const mixed = ['Os', 30, true];

// Multi-line arrays with trailing commas (recommended for lists that
// might grow over time):
const routes = [
  { path: '/',        component: Home    },
  { path: '/about',   component: About   },
  { path: '/contact', component: Contact },
];

// Nested arrays — commas at every level
const grid = [
  [1, 2, 3],
  [4, 5, 6],
  [7, 8, 9],
];

// Array of objects with trailing commas inside AND outside
const users = [
  { id: 1, name: 'Os',  role: 'admin', },
  { id: 2, name: 'Sam', role: 'user',  },
];

// Passing multiple items to a function that accepts an array
element.classList.add(...['btn', 'primary', 'large']);
console.log([timestamp, level, message]);

// Building an array inline as a function argument
process([
  'step-1',
  'step-2',
  'step-3',
]);

// Destructuring assignment — commas separate the variables you're extracting
const [first, second, third] = someArray;
const [, , third] = someArray;   // ← the leading commas SKIP items, not create holes here
                                  //   (destructuring is a special case)

// Wherever you write an array, commas are part of the syntax.</code></pre>
  `,

  /* 1.3 Plain English explanation */
  'topics-9-4-1-3': `
    <p>Think of commas in an array like the dividers between items in a shopping list. If your list says "milk bread eggs," you can't tell if that's one item (some weird thing called "milk bread eggs") or three items. But if you write "milk, bread, eggs," now it's obviously three items. The comma is the divider that makes the boundaries clear.</p>
    <p>The rule is: put a divider between every pair of items, and only there. If you have three items, you need two dividers (between item 1 and 2, and between item 2 and 3). No divider before the first item. No divider after the last item — well, actually one comma at the very end is okay (that's the trailing comma exception), but any others in weird places create "phantom items" that look like they should exist but are actually empty.</p>
    <p>The trailing comma thing is a convenience for lists you're likely to add to. Imagine your grocery list on paper: "milk, bread, eggs" with no comma after "eggs." If you want to add "cheese," you have to first go back and put a comma after "eggs," then add "cheese." Two edits. If your list had already ended with "eggs," (with a trailing comma), you just add "cheese," at the end. One edit. Same idea in code — trailing commas save a step when you're maintaining long lists.</p>
  `,

  /* 1.4 Mental model */
  'topics-9-4-1-4': `
    <p>The comma is a parser-level separator token. When JavaScript reads an array literal, it walks left to right through what's between the brackets, evaluating each expression and using commas to know where one expression ends and the next begins. Every comma the parser sees marks a boundary; every item between a pair of boundaries becomes one slot in the array.</p>
    <p>Two edge cases fall out of this model:</p>
    <p><strong>Trailing commas</strong> — the parser sees a comma right before the closing bracket, expects another item, but finds the closing bracket instead. Instead of erroring, the language spec has a rule that says "trailing commas are fine; don't create an extra slot." This is a special case, not a general "commas at the end are ignored" rule.</p>
    <p><strong>Missing items between commas</strong> — the parser sees a comma, expects an expression, but finds another comma or the closing bracket. The rule here is "create an empty slot (a hole) at this position." This is why <code>[1, , 3]</code> becomes a 3-item array with a hole in the middle. It's not a syntax error because the language spec explicitly allows it; it's just almost always a bug when it happens.</p>
    <p>The mental picture: <em>a comma is a "next item marker." The parser puts every expression it finds into the next slot; every empty position between commas becomes a hole; a trailing comma is a special "you can stop now" signal that doesn't add a slot.</em> Once you see the parser's perspective, all the weird cases make sense.</p>
  `,

  /* 1.5 Step-by-step walkthrough */
  'topics-9-4-1-5': `
<pre class="language-javascript"><code class="language-javascript">// Scenario: exactly how the parser handles commas, walked through
// for three different arrays.

// Array A: normal 3-item array
const a = [1, 2, 3];

// Step 1: parser sees '[' → array starts, prepare an empty array
// Step 2: parser evaluates '1' → store 1 at index 0
//         array so far: [1]
// Step 3: parser sees ',' → move on to next item
// Step 4: parser evaluates '2' → store 2 at index 1
//         array so far: [1, 2]
// Step 5: parser sees ',' → move on
// Step 6: parser evaluates '3' → store 3 at index 2
//         array so far: [1, 2, 3]
// Step 7: parser sees ']' → array ends, length = 3

// Array B: array with a middle hole
const b = [1, , 3];

// Step 1: '[' → start
// Step 2: '1' → store 1 at index 0
// Step 3: ',' → next item expected
// Step 4: parser expects an expression, but sees ',' immediately
//         → this position becomes a HOLE at index 1
// Step 5: ',' → move on again
// Step 6: '3' → store 3 at index 2
// Step 7: ']' → array ends, length = 3
//
// b.length is 3, but b[1] is undefined and behaves oddly in .map, .forEach, etc.

// Array C: trailing comma
const c = [1, 2, 3,];

// Step 1: '[' → start
// Step 2: '1' → store 1 at index 0
// Step 3: ',' → next item expected
// Step 4: '2' → store 2 at index 1
// Step 5: ',' → next
// Step 6: '3' → store 3 at index 2
// Step 7: ',' → next item expected, BUT
// Step 8: ']' → array ends
//         Special rule: trailing comma before ] is IGNORED, no hole created
//         length = 3

// Key takeaways:
//   - Every comma is a "next item" signal.
//   - If the next thing is another comma, a hole appears.
//   - If the next thing is ']' (trailing comma), it's ignored.
//   - If there's no comma between items, SyntaxError.

// This is why:
//   [1, , 3].length === 3           ← the empty position counts
//   [1, 2, 3,].length === 3         ← trailing comma doesn't add one
//   [1 2 3]                         ← SyntaxError
//   [,]                              ← [empty] — 1-item array with a hole
//   [,,]                             ← [empty, empty] — 2 holes
//   []                               ← empty array, 0 items</code></pre>
  `,

  /* --- Chunk 2: The Click --- */

  /* 2.0 Debugging clue */
  'topics-9-4-2-0': `
    <p>Comma-related bugs cluster around a few very recognizable patterns.</p>
    <p><strong>1. "SyntaxError: Unexpected token" or "Unexpected identifier".</strong> You forgot a comma between items. The parser expected a separator or a closing bracket, but found the start of another item. Fix: check every item boundary in the array — one comma each. Multi-line arrays are especially easy to typo here because your eyes gloss over the missing punctuation.</p>
    <p><strong>2. Array length is one more than expected.</strong> You have a leading comma (<code>[, 1, 2]</code>) or an extra middle comma (<code>[1, , 2]</code>) that created a hole. The item count is what you expected, but length counts the hole too. Fix: remove the extra comma; use explicit <code>undefined</code> if you truly needed a placeholder.</p>
    <p><strong>3. <code>.map</code> or <code>.forEach</code> skips items unexpectedly.</strong> You created an array with a hole and now iteration methods aren't visiting that position. This is a real language quirk — most iteration methods skip holes but not <code>undefined</code>. Fix: make sure your array doesn't contain holes. Common source: writing <code>[1, , 3]</code> when you meant <code>[1, undefined, 3]</code>.</p>
    <p><strong>4. Trailing comma treated as an error in old environments.</strong> Very old JavaScript engines (pre-ES5, which basically means IE8 and before) sometimes counted trailing commas as an extra item. In any modern environment (2015 and later) this isn't a concern. If you're supporting truly ancient browsers, drop trailing commas — but this is almost never necessary anymore.</p>
    <p><strong>5. Trailing comma in function calls.</strong> Trailing commas are ALSO legal in function argument lists in modern JavaScript (ES2017+): <code>myFunc(1, 2, 3,)</code>. Some tools or linters flag it as a warning, but it's syntactically valid. If your project's linter complains, follow the project's style.</p>
    <p><strong>6. Confusing array commas with the comma operator.</strong> The comma operator (<code>a, b</code>) evaluates two expressions and returns the second. In array context, commas are separators, not the operator. Rarely a source of real bugs, but worth knowing that "comma" has different meanings in different contexts.</p>
    <p><strong>7. Newlines instead of commas.</strong> You wrote multi-line array items without commas, expecting the newlines to separate them. JavaScript doesn't work that way — newlines are just whitespace, and whitespace is not a separator. Fix: add commas.</p>
    <p><strong>8. Extra comma at the start that you can't see.</strong> You wrote <code>[ , 1, 2, 3]</code> and didn't notice the leading comma. Length is 4 instead of 3, and the first item is a hole. Fix: check the very beginning of the array literal for leading commas.</p>
  `,

  /* 2.1 The part that makes it click */
  'topics-9-4-2-1': `
    <p>Commas are separator tokens: one between every pair of items, zero anywhere else — with the trailing-comma exception. That's the entire rule. When you break it in one direction (too few commas), you get a SyntaxError. When you break it in the other direction (too many commas), you get holes. When you follow the trailing-comma convention (one comma right before the closing bracket), the language quietly ignores it, which is exactly what you want for maintainable code.</p>
    <p>The other click: <em>a comma always means "next item is coming next."</em> If the next thing is another comma, you get a hole (empty slot). If the next thing is a closing bracket, the trailing-comma rule kicks in and it's ignored. If the next thing is an item, that item goes in the next slot. Every comma-related edge case is just an application of these two rules.</p>
  `,

  /* 2.2 Common confusions */
  'topics-9-4-2-2': `
    <p><strong>Confusion: "trailing commas add an extra item"</strong></p>
    <p>They don't. A comma right before the closing bracket is special-cased by the JavaScript spec and does nothing. <code>[1, 2, 3,]</code> has length 3, same as <code>[1, 2, 3]</code>.</p>

    <p><strong>Confusion: "leading commas do the same thing as trailing commas"</strong></p>
    <p>They don't. Leading commas create a hole at position 0. <code>[, 1, 2]</code> has length 3 with a hole at index 0. Only TRAILING commas are ignored.</p>

    <p><strong>Confusion: "commas can be replaced by newlines"</strong></p>
    <p>They can't. Even when items are on separate lines, you still need the comma. Newlines are whitespace to the parser, not separators.</p>

    <p><strong>Confusion: "commas inside items count as separators"</strong></p>
    <p>They don't. Only top-level commas (directly inside the array's brackets) are separators. Commas inside nested arrays, function calls, or object literals belong to those inner constructs and don't affect the outer array.</p>
<pre class="language-javascript"><code class="language-javascript">const nested = [[1, 2], [3, 4]];
nested.length;             // 2 — commas inside the inner arrays don't count for the outer
const withFn = [fn(1, 2), fn(3, 4)];
withFn.length;             // 2 — commas inside the function calls don't count</code></pre>

    <p><strong>Confusion: "spaces after commas are required"</strong></p>
    <p>They're not required by the parser — <code>[1,2,3]</code> works. Spaces are a style convention for readability, and most style guides enforce them, but the language itself doesn't care.</p>

    <p><strong>Confusion: "holes and undefined are the same thing"</strong></p>
    <p>They're subtly different. Both look like <code>undefined</code> when you access them by index, but iteration methods handle them differently — most methods (<code>.map</code>, <code>.forEach</code>, <code>.filter</code>) skip holes but visit explicit <code>undefined</code>. This is a JavaScript quirk to be aware of. Prefer explicit <code>undefined</code> if you truly need placeholders.</p>

    <p><strong>Confusion: "commas in destructuring create holes too"</strong></p>
    <p>They don't create holes — they skip items. <code>const [, , third] = arr</code> skips the first two items of arr and assigns the third to <code>third</code>. This is the destructuring equivalent of "I don't care about these positions."</p>
<pre class="language-javascript"><code class="language-javascript">const [, , third] = [1, 2, 3];
third;                      // 3 — first two skipped, third captured</code></pre>
  `,

  /* 2.3 Common mistakes */
  'topics-9-4-2-3': `
<pre class="language-javascript"><code class="language-javascript">// Missing comma between items
const nums = [1 2 3];
// wrong: SyntaxError
// fix: add commas
const nums2 = [1, 2, 3];</code></pre>

<pre class="language-javascript"><code class="language-javascript">// Missing commas in multi-line array (common typo)
const list = [
  'apple'
  'banana'
  'cherry'
];
// wrong: SyntaxError — newlines don't replace commas
// fix: add commas
const list2 = [
  'apple',
  'banana',
  'cherry',
];</code></pre>

<pre class="language-javascript"><code class="language-javascript">// Leading comma creates a hole
const items = [, 'apple', 'banana'];
items.length;   // 3, not 2
items[0];       // undefined — hole
// fix: remove the leading comma
const items2 = ['apple', 'banana'];</code></pre>

<pre class="language-javascript"><code class="language-javascript">// Middle comma creates a hole
const scores = [90, , 72];
scores.length;   // 3, not 2
scores[1];       // undefined — hole
// fix: remove the extra comma
const scores2 = [90, 72];
// or use explicit undefined if you really need it
const scores3 = [90, undefined, 72];</code></pre>

<pre class="language-javascript"><code class="language-javascript">// Multiple middle commas create multiple holes
const arr = [1, , , 4];
arr.length;   // 4
arr[1];       // undefined — hole
arr[2];       // undefined — hole
// fix: use undefined if placeholders were intentional
const arr2 = [1, undefined, undefined, 4];</code></pre>

<pre class="language-javascript"><code class="language-javascript">// Extra comma at the end thinking it adds an item
const list = [1, 2, 3,];
list.length;   // 3 — trailing comma is ignored
// This is not a mistake — it's the trailing-comma convention.
// Just don't expect it to add a fourth item.</code></pre>

<pre class="language-javascript"><code class="language-javascript">// Holes silently break iteration
const items = [1, , 3];
items.map(x => x * 2);
// wrong: [2, empty, 6] — the hole was SKIPPED
// fix: use explicit undefined so map visits every position
const items2 = [1, undefined, 3];
items2.map(x => x * 2);   // [2, NaN, 6] — undefined * 2 is NaN, but at least visited</code></pre>

<pre class="language-javascript"><code class="language-javascript">// Using a single comma to represent an empty array
const empty = [,];
empty.length;   // 1, not 0 — this is [hole]!
// fix: empty array is just []
const empty2 = [];</code></pre>

<pre class="language-javascript"><code class="language-javascript">// Forgetting the comma between object items in an array of objects
const users = [
  { id: 1, name: 'Os' }
  { id: 2, name: 'Sam' }
];
// wrong: SyntaxError — missing comma between the two objects
// fix: add commas
const users2 = [
  { id: 1, name: 'Os' },
  { id: 2, name: 'Sam' },
];</code></pre>
  `,

  /* --- Chunk 3: In Practice --- */

  /* 3.0 Tiny examples */
  'topics-9-4-3-0': `
<pre class="language-javascript"><code class="language-javascript">// Zero items — no commas
[].length;                       // 0

// One item — no commas
['only'].length;                 // 1
[42].length;                     // 1

// Two items — one comma
[1, 2].length;                   // 2

// Three items — two commas
[1, 2, 3].length;                // 3

// Trailing comma — legal, doesn't add an item
[1, 2, 3,].length;               // 3

// Multi-line with trailing comma
const list = [
  'apple',
  'banana',
  'cherry',
];
list.length;                     // 3

// Whitespace variations — all identical
[1,2,3];
[1, 2, 3];
[1 , 2 , 3];
[
  1,
  2,
  3,
];
// all → length 3, same items

// HOLES from wrong commas
[, 1, 2, 3].length;              // 4 — leading hole
[1, , 3].length;                 // 3 — middle hole
[1, , , 4].length;               // 4 — two middle holes
[,,].length;                     // 2 — two holes
[,].length;                      // 1 — one hole

// Holes vs undefined
[1, , 3].map(x => 'y');          // [1, empty, 'y'] — hole skipped
[1, undefined, 3].map(x => 'y'); // ['y', 'y', 'y'] — no skip

// Commas inside nested structures don't affect outer count
[[1, 2], [3, 4]].length;         // 2
[fn(1, 2), fn(3, 4)].length;     // 2
[{ a: 1, b: 2 }].length;         // 1

// Missing comma → SyntaxError (not shown; would fail to parse)
// [1 2 3]                       ← would throw

// Destructuring uses commas to SKIP (not create holes)
const [, , third] = [1, 2, 3];
third;                           // 3</code></pre>
  `,

  /* 3.1 Real website uses */
  'topics-9-4-3-1': `
    <p><strong>Example: multi-line list of route definitions with trailing commas</strong></p>
<pre class="language-javascript"><code class="language-javascript">const routes = [
  { path: '/',        component: Home    },
  { path: '/about',   component: About   },
  { path: '/contact', component: Contact },
];</code></pre>

    <p><strong>Example: array of CSS class names</strong></p>
<pre class="language-javascript"><code class="language-javascript">const classes = ['btn', 'primary', size, isActive ? 'active' : 'inactive'];
element.className = classes.join(' ');</code></pre>

    <p><strong>Example: array of dropdown options built from data</strong></p>
<pre class="language-javascript"><code class="language-javascript">const options = countries.map(c => ({
  value: c.code,
  label: c.name,
}));</code></pre>

    <p><strong>Example: destructuring to skip items</strong></p>
<pre class="language-javascript"><code class="language-javascript">const [, month, day] = date.split('/');   // skip the year, keep month and day</code></pre>

    <p><strong>Example: multi-line array of test cases</strong></p>
<pre class="language-javascript"><code class="language-javascript">const testCases = [
  { input: 'hello',   expected: 5  },
  { input: '',        expected: 0  },
  { input: 'a b c',   expected: 5  },
  { input: 'longer',  expected: 6  },
];</code></pre>

    <p><strong>Example: comma-separated summary from an array</strong></p>
<pre class="language-javascript"><code class="language-javascript">const summary = tags.join(', ');
// ['bug', 'urgent', 'frontend'] → "bug, urgent, frontend"</code></pre>

    <p><strong>Example: single-line short array for a fixed set</strong></p>
<pre class="language-javascript"><code class="language-javascript">const daysOfWeek = ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'];</code></pre>
  `,

  /* 3.2 Connects to */
  'topics-9-4-3-2': `
    <ul>
      <li><strong>Array syntax []</strong> → commas are the separator inside the brackets</li>
      <li><strong>Array items/elements</strong> → what commas separate</li>
      <li><strong>.length</strong> → counts every slot, including holes created by wrong commas</li>
      <li><strong>Trailing comma convention</strong> → legal, often preferred for multi-line arrays and multi-line function calls</li>
      <li><strong>Holes</strong> → the JavaScript quirk that leading or middle commas create; usually a bug</li>
      <li><strong>Iteration methods</strong> → most (<code>.map</code>, <code>.forEach</code>, <code>.filter</code>) skip holes but visit undefined; a real difference to know</li>
      <li><strong>Destructuring</strong> → uses commas to SKIP items, not create holes: <code>const [, , third] = arr</code></li>
      <li><strong>Object syntax</strong> → also uses commas between properties, with the same trailing-comma rule</li>
      <li><strong>Function arguments</strong> → also comma-separated, also supports trailing commas in modern JS</li>
      <li><strong>Comma operator</strong> → a totally different feature that shares the same character; rarely relevant</li>
      <li><strong>Style guides</strong> → most enforce "space after comma" and "trailing commas on multi-line"</li>
      <li><strong>Debugging</strong> → missing comma → SyntaxError; extra comma → hole (unexpected length or skipped iteration)</li>
    </ul>
  `,

  /* 3.3 See also */
  'topics-9-4-3-3': `
    <ul>
      <li>Array syntax []</li>
      <li>Array items/elements</li>
      <li>.length</li>
      <li>Trailing commas</li>
      <li>Holes vs undefined</li>
      <li>Iteration methods (map, forEach, filter)</li>
      <li>Destructuring</li>
      <li>Object syntax</li>
      <li>Common array mistakes</li>
    </ul>
  `,

  /* ========================================================= 
   Sub-lesson: 3.10.7 Arrays → first item
 =======================================================*/

  /* --- Chunk 0: What & How --- */

  /* 0.0 What it is */
  'topics-9-6-0-0': `
    <p>The <strong>first item</strong> of an array is the value at index <code>0</code> — the one at the very beginning of the list. Because JavaScript arrays are zero-indexed, "first" means position 0, not position 1. The syntax is short: <code>arr[0]</code>. That's the whole thing. Every time you need the item at the start of an array — the top search result, the first message in a conversation, the primary user, the header row — you're reaching for <code>arr[0]</code>.</p>
    <p>Alongside the last item, first-item access is one of the most common array operations. Modern JavaScript also gives you <code>arr.at(0)</code> as a slightly newer alternative, which behaves identically to <code>arr[0]</code> for positive indexes. Both work; the bracket form is universal and slightly shorter, so it remains the standard idiom for the first item. This lesson zooms in on how to read the first item safely, what it returns when the array is empty, and the common patterns that show up around "getting the first one."</p>
  `,

  /* 0.1 Syntax */
  'topics-9-6-0-1': `
<pre class="language-javascript"><code class="language-javascript">const colors = ['red', 'green', 'blue'];

// The standard way — bracket notation with index 0:
colors[0];                  // "red"

// Modern alternative — .at(0):
colors.at(0);               // "red"

// Both work identically for positive indexes. Bracket is the standard idiom.

// Assigning the first item to a variable — very common
const first = colors[0];    // "red"

// Chaining property access if items are objects
const users = [{ name: 'Os' }, { name: 'Sam' }];
users[0].name;              // "Os"
users[0]?.name;             // "Os" — optional chaining if array might be empty

// Empty array — no first item
const empty = [];
empty[0];                   // undefined — no error
empty.at(0);                // undefined

// Single-item array — first and only
const one = ['solo'];
one[0];                     // "solo"

// Modifying the first item (write with brackets on the left)
colors[0] = 'crimson';
colors;                     // ['crimson', 'green', 'blue']

// Wrong: assuming index 1 is the first item (habit from 1-based languages)
colors[1];                  // "green" — this is the SECOND item, not the first
// fix: use index 0
colors[0];                  // "red"

// Wrong: accessing a property on an empty-array first item
const noData = [];
noData[0].name;             // TypeError — undefined has no .name
// fix: check first, or use optional chaining
noData[0]?.name;            // undefined, no throw</code></pre>
  `,

  /* 0.2 Anatomy / Breakdown */
  'topics-9-6-0-2': `
<pre class="language-javascript"><code class="language-javascript">const colors = ['red', 'green', 'blue'];

// Visualizing "first" in a zero-indexed array:
//
//   index:   0       1        2
//   value:   'red'   'green'  'blue'
//            ─┬─
//             │
//             └─ the FIRST item — at index 0
//
// Because indexes start at 0, "first" means "index 0."
// This is different from human counting ("first, second, third" = 1, 2, 3).
// Programming counts positions starting from 0, so the first position is 0.

colors[0];                  // "red" — the first item

// Two idioms for the same lookup:
//   colors[0]      ← bracket notation, universal
//   colors.at(0)   ← .at() method, modern (2022+)
//
// Both compute the same result. Choose based on team preference.
// The bracket form is shorter and more common; .at() is useful mainly
// when you also want negative indexes (like .at(-1) for the last item).

// The first item can be any type:
[42][0];                    // 42 — number
[{ name: 'Os' }][0];        // { name: 'Os' } — object
[[1, 2]][0];                // [1, 2] — nested array (an array whose first item is another array)
[null][0];                  // null — even null counts as an item
[undefined][0];             // undefined — same

// The value returned is what's there NOW; if you change the array, subsequent
// reads see the new value:
colors[0] = 'crimson';
colors[0];                  // "crimson" — updated

// If the array is empty, there is no first item:
[].length;                  // 0 — no items at all
[][0];                      // undefined — no item at position 0
// This is important because using undefined as if it were an item downstream
// is one of the most common sources of bugs (see chunk 2).</code></pre>
  `,

  /* 0.3 Syntax Details That Matter */
  'topics-9-6-0-3': `
    <p><strong>The first item is always at index 0.</strong> Not index 1. This is the single most important thing to remember about array indexing in JavaScript (and most other programming languages). Programmers count from 0; humans count from 1. When you see <code>arr[1]</code> in code, that's the SECOND item, not the first.</p>
<pre class="language-javascript"><code class="language-javascript">const items = ['a', 'b', 'c'];
items[0];   // "a" — the FIRST item
items[1];   // "b" — the SECOND item
items[2];   // "c" — the THIRD (and last) item</code></pre>

    <p><strong>Empty arrays return <code>undefined</code> for the first item.</strong> Both <code>[][0]</code> and <code>[].at(0)</code> return <code>undefined</code> without throwing. This is safe but silent — the bad value flows into whatever code you write next, and only fails there. If your array might be empty, guard the read: check <code>.length &gt; 0</code>, or use optional chaining when reaching into the returned value.</p>
<pre class="language-javascript"><code class="language-javascript">const results = [];
results[0];                 // undefined
results[0].name;            // TypeError — undefined has no properties
results[0]?.name;           // undefined, no throw

// Common guard pattern:
if (results.length > 0) {
  const first = results[0];
  // safe to use
}

// Or use a fallback with the nullish coalescing operator:
const first = results[0] ?? { name: 'no result' };</code></pre>

    <p><strong><code>arr[0]</code> and <code>arr.at(0)</code> are interchangeable for reading the first item.</strong> Both return the same value. The main practical difference is that <code>.at()</code> supports negative indexes (<code>arr.at(-1)</code> for the last item), while brackets don't. For the first item specifically, most code uses <code>arr[0]</code> because it's shorter and universally recognized.</p>

    <p><strong>Reading the first item doesn't remove it.</strong> Both <code>arr[0]</code> and <code>arr.at(0)</code> are non-destructive — the array stays exactly as it was. If you want to read AND remove the first item, use <code>.shift()</code>. Note that <code>.shift()</code> is O(n) because it has to reindex all remaining items; for performance-sensitive code with big arrays, this matters.</p>
<pre class="language-javascript"><code class="language-javascript">const queue = ['first', 'second', 'third'];

// Read only — array unchanged
queue[0];                   // "first"
queue;                      // still ['first', 'second', 'third']

// Read AND remove — array shortens
const next = queue.shift(); // "first"
queue;                      // ['second', 'third']</code></pre>

    <p><strong>The first item can be any type.</strong> Number, string, boolean, object, array, function, null, undefined — whatever the array holds, the first slot holds one of those. Special-case values like <code>null</code> and <code>undefined</code> DO count as items and DO fill the first slot when they're the first thing put in.</p>
<pre class="language-javascript"><code class="language-javascript">[null].length;              // 1 — null counts as an item
[null][0];                  // null

[undefined].length;         // 1 — undefined too
[undefined][0];             // undefined

// This is different from an empty slot (hole):
[,].length;                 // 1 — a hole counts as a slot
[,][0];                     // undefined — but iteration methods skip it</code></pre>

    <p><strong>Assigning to <code>arr[0]</code> writes over the first item.</strong> The same bracket syntax is a WRITE when it appears on the left of <code>=</code>. This is the standard way to replace the first item without removing it or shifting others. The array's length doesn't change.</p>
<pre class="language-javascript"><code class="language-javascript">const items = ['a', 'b', 'c'];
items[0] = 'x';             // overwrites the first item
items;                      // ['x', 'b', 'c']
items.length;               // still 3

// Compare to unshift (which INSERTS and shifts):
items.unshift('y');
items;                      // ['y', 'x', 'b', 'c']
items.length;               // 4</code></pre>
  `,

  /* --- Chunk 1: Why & When --- */

  /* 1.0 What problem it solves */
  'topics-9-6-1-0': `
    <p>You need the first item of an array constantly. The top result of a search. The first message in a chat window. The current step of a multi-step form. The primary owner in a list of collaborators. The first tab in a tab bar. The header row of a spreadsheet. The next item in a queue to process. The oldest entry in a chronological list. Any time "the one at the front" or "the top of the list" or "the earliest" is a meaningful concept, you're asking for the first item.</p>
    <p>The lesson also solves a specific mental hazard: the off-by-one confusion between programming's 0-based indexing and human 1-based counting. When you say "the first user," a person means the number one user; but in code, that's <code>users[0]</code>, not <code>users[1]</code>. Reflexively reaching for <code>arr[0]</code> when you mean "first" is a habit that saves you from a whole class of subtle bugs, especially when translating requirements written in plain English ("the first of the month," "the first choice," "the first name") into code.</p>
  `,

  /* 1.1 Why use it */
  'topics-9-6-1-1': `
    <p>Reach for <code>arr[0]</code> any time you need the item at the start of a list. This includes: displaying the top result of a query, initializing a UI to show the first tab or step, checking the primary owner in a list, taking the next item off a queue, or comparing "what was the first thing that happened" against later events. All of these are direct positional reads — you don't need to search, you just need position 0.</p>
    <p>Don't use <code>arr[0]</code> to search or filter — that's a different tool. If you want the first item that matches criteria (like "the first admin user" or "the first task that's not done"), use <code>.find()</code>. It's more expressive and doesn't hardcode a position that might not carry meaning. Reserve <code>arr[0]</code> for cases where "first by position" actually is what you mean.</p>
    <p>Between <code>arr[0]</code> and <code>arr.at(0)</code>, prefer <code>arr[0]</code>. It's shorter, more universally recognized, and works in every JavaScript environment ever made. <code>.at(0)</code> is only meaningfully useful when you also want negative-index access via <code>.at(-1)</code>. If your code only reads the first item, brackets are the default choice.</p>
  `,

  /* 1.2 Where you use it */
  'topics-9-6-1-2': `
<pre class="language-javascript"><code class="language-javascript">// Displaying the top search result
const topResult = results[0];
if (topResult) render(topResult);

// Highlighting the primary owner in a shared document
const primary = collaborators[0];
badge.textContent = primary?.name ?? 'No owner';

// Initializing a UI to show the first tab
const currentTab = tabs[0];
currentTab.classList.add('active');

// Processing the next item from a queue (peek without removing)
const nextJob = queue[0];
if (nextJob) log(\`Next: \${nextJob.type}\`);

// Getting the current step in a multi-step form
const step = steps[currentIndex];   // uses index, but same idea

// Reading the first (usually only) matching form input
const firstEmail = document.querySelectorAll('input[type="email"]')[0];
if (firstEmail) firstEmail.focus();

// Extracting the initial value from a fresh array
const [first] = someArray;          // destructuring — same as someArray[0]

// The first key in a splitting operation
const firstWord = sentence.split(' ')[0];   // "hello" from "hello world"

// The area code from a phone number
const areaCode = phone.split('-')[0];       // "555" from "555-123-4567"

// The type of the first log entry
const firstEntry = logs[0];
if (firstEntry?.level === 'error') alertOnError();

// Any time you need "the one at position 0," bracket-zero is the tool.</code></pre>
  `,

  /* 1.3 Plain English explanation */
  'topics-9-6-1-3': `
    <p>Think of an array like a numbered row of lockers where the numbering starts at 0 instead of 1. Locker 0 is the first locker — the one at the very start of the row. When you want to see what's in the first locker, you say "locker 0, please" (that's <code>arr[0]</code>) and the row hands you whatever is inside.</p>
    <p>The weird part is that "first" and "0" mean the same thing here. In everyday life, the first item on a shopping list is item 1. In JavaScript, the first item is item 0. This numbering choice sounds odd until you get used to it, but it's how almost every programming language works (Python, Java, C, C#, Ruby, Go — all zero-indexed). Once you internalize "the first item is at position 0," you'll stop tripping over it.</p>
    <p>The other thing worth knowing: if the row is empty (no lockers at all), asking for locker 0 doesn't give you an error — it just gives you back "nothing" (<code>undefined</code>). This is a safety feature: reading from an empty array never crashes. But it can be a trap, because you then try to do something with that "nothing" — like read a property from it — and THAT throws. So always keep in mind that the first item might not exist, and handle the empty case explicitly.</p>
  `,

  /* 1.4 Mental model */
  'topics-9-6-1-4': `
    <p>The first item of an array is always at index 0 — this is a fixed language rule, not a design choice you can override. Every array has this property: if there's an item, it's at position 0; if there isn't, position 0 returns <code>undefined</code>. The two states are the ONLY two possible outcomes of reading <code>arr[0]</code>: a real item value, or <code>undefined</code>.</p>
    <p>The syntactic pattern is <code>arr[0]</code>, one of the shortest expressions in the language. Under the hood, it's a direct property lookup on the array — constant time, no scanning, no allocation. Whether the array has 3 items or 3 million, reading the first item takes the same instant.</p>
    <p>The relationship to remember: <em>index 0 is always the first, always exists (if the array has any items at all), and always safely returns <code>undefined</code> when the array is empty.</em> This makes <code>arr[0]</code> a reliable, no-surprise operation — the only question is whether you're prepared to handle the <code>undefined</code> case when the array might be empty.</p>
    <p>The two ways to write it (<code>arr[0]</code> vs <code>arr.at(0)</code>) produce identical results. The bracket form is the universal idiom. <code>.at(0)</code> exists mainly for stylistic consistency with <code>.at(-1)</code> for the last item — if you already use <code>.at(-1)</code>, using <code>.at(0)</code> reads more consistently. Otherwise, brackets are shorter and the standard.</p>
  `,

  /* 1.5 Step-by-step walkthrough */
  'topics-9-6-1-5': `
<pre class="language-javascript"><code class="language-javascript">// Scenario: a search results page displays the top result prominently
// at the top of the page, and the rest as a list below.

const results = searchApi(query);   // returns an array of result objects

function render() {
  const topResult = results[0];

  if (!topResult) {
    // Empty results — show an empty state
    container.innerHTML = '&lt;p&gt;No results found.&lt;/p&gt;';
    return;
  }

  // Render the featured (first) result
  featured.innerHTML = \`
    &lt;article class="featured"&gt;
      &lt;h2&gt;\${topResult.title}&lt;/h2&gt;
      &lt;p&gt;\${topResult.snippet}&lt;/p&gt;
    &lt;/article&gt;
  \`;

  // Render the rest of the results (from index 1 onward)
  const rest = results.slice(1);
  list.innerHTML = rest.map(r => \`
    &lt;article class="result"&gt;
      &lt;h3&gt;\${r.title}&lt;/h3&gt;
    &lt;/article&gt;
  \`).join('');
}

// Walk through what happens for a few different result sets:

// Case A: results = [] (empty)
// Step 1: topResult = results[0] = undefined
// Step 2: !topResult is truthy (undefined is falsy)
// Step 3: Show "No results found." Return early.

// Case B: results = [{ title: 'Only one', snippet: '...' }]
// Step 1: topResult = results[0] = { title: 'Only one', snippet: '...' }
// Step 2: !topResult is false — continue
// Step 3: Render the featured result with its title and snippet
// Step 4: rest = results.slice(1) = [] — no other results
// Step 5: list.innerHTML = ''.join('') = '' — empty list section

// Case C: results = [{ title: 'A' }, { title: 'B' }, { title: 'C' }]
// Step 1: topResult = results[0] = { title: 'A' }
// Step 2: Featured article shows title "A"
// Step 3: rest = results.slice(1) = [{ title: 'B' }, { title: 'C' }]
// Step 4: List section renders two articles for B and C

// Key patterns:
//   - results[0] is always the "featured" or "primary" item.
//   - Guard against empty with a truthy check before accessing properties.
//   - slice(1) is the common way to get "everything after the first."
//   - The same code handles 0, 1, or N results correctly.

// This is the shape of most "top pick plus a list" UI patterns.</code></pre>
  `,

  /* --- Chunk 2: The Click --- */

  /* 2.0 Debugging clue */
  'topics-9-6-2-0': `
    <p>First-item bugs cluster around a small number of predictable patterns.</p>
    <p><strong>1. Off-by-one — using index 1 for the first item.</strong> You wrote <code>arr[1]</code> because you thought "first" meant "one." That's the SECOND item. Fix: <code>arr[0]</code>. This is the classic bug that trips up beginners and people coming from 1-indexed languages (like Lua or older BASIC).</p>
    <p><strong>2. "Cannot read properties of undefined" when the array is empty.</strong> You wrote <code>users[0].name</code> and the array was empty, so <code>users[0]</code> was <code>undefined</code>, and <code>.name</code> threw. Fix: guard with <code>if (users.length &gt; 0)</code> or use optional chaining <code>users[0]?.name</code>.</p>
    <p><strong>3. Trying to modify a primitive first item through a copied variable.</strong> You wrote <code>let first = nums[0]; first = 999;</code> and expected the array to change. It didn't — primitives are copied when extracted. Fix: assign directly with <code>nums[0] = 999</code>.</p>
    <p><strong>4. Confusing <code>arr[0]</code> with <code>.shift()</code>.</strong> <code>arr[0]</code> reads without removing. <code>.shift()</code> reads AND removes. If you meant to peek at the next item in a queue, use <code>arr[0]</code>. If you meant to take it off the queue, use <code>.shift()</code>.</p>
    <p><strong>5. Using <code>arr[0]</code> when you should be searching.</strong> You wrote <code>const admin = users[0]</code> because "the admin should be first" — but that's a positional guess, not a real search. If you actually want the admin, use <code>.find(u => u.role === 'admin')</code>. This bug is subtle because it works accidentally in test data.</p>
    <p><strong>6. Assuming the first item stays the same after sorting or filtering.</strong> You cached a reference to <code>arr[0]</code>, then sorted the array. Now the first item is different, but your cached variable still points to the old one. Fix: don't cache positional references across mutations; re-read <code>arr[0]</code> each time you need it.</p>
    <p><strong>7. Ternaries or defaults hiding the empty case.</strong> You wrote <code>const first = arr[0] || 'default'</code> and got 'default' even when the array had a falsy first item (like <code>0</code> or <code>''</code>). Fix: use nullish coalescing (<code>??</code>), which only falls through for <code>null</code> and <code>undefined</code>: <code>const first = arr[0] ?? 'default'</code>.</p>
  `,

  /* 2.1 The part that makes it click */
  'topics-9-6-2-1': `
    <p>The first item of an array is always at index 0. That's the rule. In JavaScript, "first" means "position 0" — not "position 1." Once you internalize this, off-by-one errors on the first item stop happening. The syntax is <code>arr[0]</code>, and it's the shortest, most direct way to get what you want.</p>
    <p>The other click: <code>arr[0]</code> either gives you a real item or <code>undefined</code> — those are the only two possibilities. There's no third case, no error, no crash. That safety is nice for reading, but it means you have to explicitly handle the empty-array case in code that follows. Any operation on the returned value (property access, method call, arithmetic) that assumes an item was returned will fail if the array was empty. The moment you internalize "reading the first item is safe, but USING it isn't," you'll instinctively guard with <code>?.</code> or a <code>.length</code> check.</p>
  `,

  /* 2.2 Common confusions */
  'topics-9-6-2-2': `
    <p><strong>Confusion: "the first item is at index 1"</strong></p>
    <p>It's at index 0. This is universal across almost every programming language. Memorize it once and let it become automatic — "first is zero" is the mantra.</p>

    <p><strong>Confusion: "reading arr[0] removes or affects the array"</strong></p>
    <p>It doesn't. Reads are non-destructive. Use <code>.shift()</code> to remove and return the first item; use <code>arr[0]</code> to just peek at it.</p>

    <p><strong>Confusion: "arr[0] throws when the array is empty"</strong></p>
    <p>It doesn't. It returns <code>undefined</code>. Using that <code>undefined</code> as if it were an item (like <code>arr[0].name</code>) is what throws. Guard against that.</p>

    <p><strong>Confusion: "arr[0] and arr.at(0) are meaningfully different"</strong></p>
    <p>They're not for reading. Both return the same value. The main practical difference is that <code>.at()</code> supports negative indexes; brackets don't. For "first item," bracket is the standard idiom.</p>

    <p><strong>Confusion: "const arr means arr[0] can't change"</strong></p>
    <p>It can. <code>const</code> prevents reassigning the variable (<code>arr = ...</code>), but it doesn't prevent modifying the array's contents. <code>arr[0] = 'new'</code> is legal on a <code>const</code> array.</p>

    <p><strong>Confusion: "reading arr[0] and then using it means changes to the array affect my variable"</strong></p>
    <p>Depends on the type. If the first item was a primitive (number, string, boolean), your variable is a copy — array changes don't affect it. If it was an object, your variable is a reference — modifying properties on it DOES affect the array's item.</p>
<pre class="language-javascript"><code class="language-javascript">// Primitive first item — copied
const nums = [1, 2, 3];
let first = nums[0];
nums[0] = 999;
first;                  // still 1 — copy is independent

// Object first item — shared reference
const users = [{ name: 'Os' }];
const first = users[0];
first.name = 'X';
users[0].name;          // 'X' — same object</code></pre>

    <p><strong>Confusion: "arr[0] falls back to 'default' when the first item is 0 or ''"</strong></p>
    <p>It does with <code>||</code>, and that's usually a bug. <code>arr[0] || 'default'</code> falls through for ANY falsy first item — including <code>0</code>, <code>''</code>, <code>false</code>, and <code>NaN</code> — not just when the array is empty. Use <code>??</code> if you only want to fall through for <code>null</code> or <code>undefined</code>.</p>
  `,

  /* 2.3 Common mistakes */
  'topics-9-6-2-3': `
<pre class="language-javascript"><code class="language-javascript">// Off-by-one — using index 1 for the first item
const items = ['a', 'b', 'c'];
const first = items[1];
// wrong: items[1] is 'b', not 'a'
// fix: use index 0
const first2 = items[0];</code></pre>

<pre class="language-javascript"><code class="language-javascript">// Reading first item property on an empty array
const users = [];
const name = users[0].name;
// wrong: TypeError — users[0] is undefined
// fix: check first, or use optional chaining
if (users.length > 0) {
  const name = users[0].name;
}
// or
const name2 = users[0]?.name;   // undefined, no throw</code></pre>

<pre class="language-javascript"><code class="language-javascript">// Modifying a primitive copy expecting the array to update
const scores = [90, 85, 72];
let first = scores[0];
first = 100;
console.log(scores);
// wrong: scores is still [90, 85, 72] — first was a copy
// fix: assign directly
scores[0] = 100;</code></pre>

<pre class="language-javascript"><code class="language-javascript">// Confusing arr[0] with .shift()
const queue = ['a', 'b', 'c'];
const next = queue[0];
console.log(queue);
// queue is still ['a', 'b', 'c'] — arr[0] doesn't remove
// If you meant "take the next item off the queue":
const removed = queue.shift();
// removed is 'a', queue is now ['b', 'c']</code></pre>

<pre class="language-javascript"><code class="language-javascript">// Using arr[0] as a search for a specific item
const users = [
  { role: 'user', name: 'Sam' },
  { role: 'admin', name: 'Os' },
];
const admin = users[0];   // WRONG — this is the FIRST user, not the admin
// fix: search by criteria
const admin2 = users.find(u => u.role === 'admin');</code></pre>

<pre class="language-javascript"><code class="language-javascript">// Caching arr[0] before mutation
const items = ['a', 'b', 'c'];
const first = items[0];   // 'a'
items.unshift('z');
first;                    // still 'a' (a primitive, copied)
items[0];                 // 'z' (updated)
// If items were objects, first would still refer to the old first object,
// which is now at items[1]. Point being: don't rely on cached first
// after mutations.</code></pre>

<pre class="language-javascript"><code class="language-javascript">// Using || instead of ?? for defaults
const counts = [0, 5, 10];
const first = counts[0] || 100;
// wrong: first is 100, because counts[0] is 0 (falsy) — the || fell through
// fix: use ?? (nullish coalescing)
const first2 = counts[0] ?? 100;   // 0 — only null/undefined trigger fallback</code></pre>

<pre class="language-javascript"><code class="language-javascript">// Chaining without safety on the result
const data = getData();   // might return an empty array
const label = data[0].title.toUpperCase();
// wrong: if data is empty, data[0] is undefined and .title throws
// fix: guard the chain
const label2 = data[0]?.title?.toUpperCase() ?? '';</code></pre>
  `,

  /* --- Chunk 3: In Practice --- */

  /* 3.0 Tiny examples */
  'topics-9-6-3-0': `
<pre class="language-javascript"><code class="language-javascript">const colors = ['red', 'green', 'blue'];

// The two idioms
colors[0];                       // "red"
colors.at(0);                    // "red"

// Empty array
[].length;                       // 0
[][0];                           // undefined
[].at(0);                        // undefined

// Single-item array — first and only
['solo'][0];                     // "solo"
[42][0];                         // 42
[{ id: 1 }][0];                  // { id: 1 }

// Different value types as the first item
[null][0];                       // null
[undefined][0];                  // undefined
[false][0];                      // false
[0][0];                          // 0
[[1, 2]][0];                     // [1, 2] — first item is a nested array

// Reading is non-destructive
const items = ['a', 'b', 'c'];
items[0];                        // "a"
items.length;                    // still 3

// Removing is different (use .shift)
items.shift();                   // "a"
items;                           // ['b', 'c']

// Modify first item — bracket assignment
const scores = [90, 85, 72];
scores[0] = 100;
scores;                          // [100, 85, 72]

// Optional chaining on first item
const users = [{ name: 'Os' }];
users[0]?.name;                  // "Os"
[].at(0)?.name;                  // undefined, no throw

// Property access on empty
[].at(0).name;                   // TypeError — undefined has no properties

// Destructuring — equivalent to arr[0]
const [first] = ['x', 'y', 'z']; // first = 'x'
const [head, ...rest] = ['x', 'y', 'z']; // head = 'x', rest = ['y', 'z']

// Bracket doesn't support negative
[1, 2, 3][-1];                   // undefined
// Use .at for negative
[1, 2, 3].at(-1);                // 3

// || vs ??
[0, 1, 2][0] || 'fallback';      // 'fallback' — 0 is falsy!
[0, 1, 2][0] ?? 'fallback';      // 0 — nullish only</code></pre>
  `,

  /* 3.1 Real website uses */
  'topics-9-6-3-1': `
    <p><strong>Example: featuring the top search result</strong></p>
<pre class="language-javascript"><code class="language-javascript">const top = results[0];
if (top) featureBanner.textContent = top.title;</code></pre>

    <p><strong>Example: initializing to the first tab</strong></p>
<pre class="language-javascript"><code class="language-javascript">tabs[0]?.classList.add('active');
showPanel(tabs[0]?.dataset.panel);</code></pre>

    <p><strong>Example: peeking at the next queued job</strong></p>
<pre class="language-javascript"><code class="language-javascript">const next = queue[0];
statusLabel.textContent = next ? \`Up next: \${next.name}\` : 'Queue empty';</code></pre>

    <p><strong>Example: the primary owner in a document</strong></p>
<pre class="language-javascript"><code class="language-javascript">const primaryOwner = collaborators[0];
badge.textContent = primaryOwner?.name ?? 'Unowned';</code></pre>

    <p><strong>Example: first-word check for a command parser</strong></p>
<pre class="language-javascript"><code class="language-javascript">const parts = input.trim().split(' ');
const command = parts[0];
if (command === 'help') showHelp();</code></pre>

    <p><strong>Example: focus the first invalid field on submit</strong></p>
<pre class="language-javascript"><code class="language-javascript">const invalid = [...form.querySelectorAll(':invalid')];
invalid[0]?.focus();</code></pre>

    <p><strong>Example: destructuring the first result</strong></p>
<pre class="language-javascript"><code class="language-javascript">const [first, ...rest] = posts;
if (first) renderHero(first);
renderList(rest);</code></pre>

    <p><strong>Example: safely reading the first uploaded file</strong></p>
<pre class="language-javascript"><code class="language-javascript">const firstFile = fileInput.files[0];
if (firstFile) upload(firstFile);</code></pre>
  `,

  /* 3.2 Connects to */
  'topics-9-6-3-2': `
    <ul>
      <li><strong>Array indexes</strong> → 0-based positions; the first is at 0</li>
      <li><strong>Last item</strong> → the mirror pattern; last is at <code>length - 1</code> or <code>arr.at(-1)</code></li>
      <li><strong>Array .length</strong> → checking <code>length &gt; 0</code> guards the empty-array case</li>
      <li><strong>Reading items with bracket notation</strong> → the general syntax; first-item is the most common instance</li>
      <li><strong>.at()</strong> → modern accessor; behaves the same as brackets for positive indexes</li>
      <li><strong>.shift()</strong> → reads AND removes the first item (destructive)</li>
      <li><strong>.unshift()</strong> → adds new items to the front; the added item becomes the new first</li>
      <li><strong>Destructuring</strong> → <code>const [first] = arr</code> is equivalent to <code>arr[0]</code></li>
      <li><strong>Optional chaining (<code>?.</code>)</strong> → safely reads properties when the first item might not exist</li>
      <li><strong>Nullish coalescing (<code>??</code>)</strong> → fallback for empty; safer than <code>||</code> because it doesn't skip falsy first items</li>
      <li><strong>.find()</strong> → the search-by-criteria alternative when "first" doesn't just mean "position 0"</li>
      <li><strong>.slice(1)</strong> → common pattern for "everything after the first item"</li>
      <li><strong>Debugging</strong> → most first-item bugs are off-by-one (using index 1) or missing empty-array guards</li>
    </ul>
  `,

  /* 3.3 See also */
  'topics-9-6-3-3': `
    <ul>
      <li>Array indexes</li>
      <li>Last item</li>
      <li>Array .length</li>
      <li>Reading items with bracket notation</li>
      <li>.shift() — remove and return first</li>
      <li>.unshift() — add to front</li>
      <li>Destructuring</li>
      <li>Optional chaining</li>
      <li>Nullish coalescing (??)</li>
      <li>.find() — search by criteria</li>
      <li>Common array mistakes</li>
    </ul>
  `,


  /* ========================================================= 
   Sub-lesson: 3.10.9 Arrays → .length
 =======================================================*/

  /* --- Chunk 0: What & How --- */

  /* 0.0 What it is */
  'topics-9-8-0-0': `
    <p><code>.length</code> is a <strong>property</strong> on every array that tells you how many items the array contains. Like on strings, it's a property, not a method — no parentheses. The value is always a non-negative integer, updated automatically as you add or remove items. Reading it is instant — the array tracks its length internally, so <code>arr.length</code> is a constant-time lookup regardless of how big the array is.</p>
    <p>Arrays share the same core <code>.length</code> mechanics as strings — same 0-based / <code>length - 1</code> relationship, same "count of things" semantics, same use as loop bounds and empty checks. But arrays add one big power that strings don't have: you can <em>assign</em> to <code>.length</code>, and the array actually changes size. Setting <code>arr.length = 2</code> truncates the array to 2 items. Setting <code>arr.length = 10</code> extends it (with empty slots). Strings are immutable, so their <code>.length</code> is read-only — arrays are mutable, and their <code>.length</code> is read/write.</p>
  `,

  /* 0.1 Syntax */
  'topics-9-8-0-1': `
<pre class="language-javascript"><code class="language-javascript">// Reading — the standard use, works exactly like on strings
const colors = ['red', 'green', 'blue'];
colors.length;              // 3

// Empty array — length 0
[].length;                  // 0

// Nested arrays count as ONE item at the outer level
[[1, 2], [3, 4], [5, 6]].length;   // 3, not 6

// Length reflects the current state; changes as items are added or removed
const items = [];
items.length;               // 0
items.push('a');
items.length;               // 1
items.push('b', 'c');
items.length;               // 3
items.pop();
items.length;               // 2

// Same patterns as strings
const scores = [90, 85, 72];
scores.length === 0;                // false — empty check
scores[scores.length - 1];          // 72 — last item
for (let i = 0; i < scores.length; i++) { /* ... */ }   // loop bound

// UNIQUE TO ARRAYS: you can ASSIGN to length
const nums = [1, 2, 3, 4, 5];
nums.length = 3;
nums;                       // [1, 2, 3] — truncated!
nums.length;                // 3

// Setting to 0 empties the array completely
nums.length = 0;
nums;                       // []

// Setting to a LARGER number extends with empty slots (usually not what you want)
const short = ['a', 'b'];
short.length = 5;
short;                      // ['a', 'b', empty, empty, empty]
short.length;               // 5
short[4];                   // undefined — the empty slots are "holes"

// Wrong: treating length as a method
colors.length();            // TypeError — not a function
// fix: no parentheses
colors.length;              // 3</code></pre>
  `,

  /* 0.2 Anatomy / Breakdown */
  'topics-9-8-0-2': `
<pre class="language-javascript"><code class="language-javascript">const colors = ['red', 'green', 'blue'];

// The same picture as strings — indexes and length in a row:
//
//   index:   0       1        2
//   value:   'red'   'green'  'blue'
//   length:  ────────3────────────────
//
// length = 3 means there are 3 items total.
// Valid indexes: 0, 1, 2. Last index is 2 = length - 1.
// Position at index 3 is undefined (one past the end).

colors.length;                  // 3
colors[0];                      // 'red' — first
colors[colors.length - 1];      // 'blue' — last
colors[colors.length];          // undefined — past the end

// The array's length property is stored INTERNALLY.
// Reading it is a direct property lookup, not a "count all items" operation.
// This is why .length is fast on huge arrays.

// What's DIFFERENT from strings: length is writable on arrays.
//
// Setting length SHORTER truncates the array in place:
const trim = ['a', 'b', 'c', 'd', 'e'];
trim.length = 3;
// Internally, the array is now:
//   index:   0     1     2
//   value:   'a'   'b'   'c'
//   length:  ────3────────
// Items at indexes 3 and 4 are DROPPED — they're gone.
trim;                           // ['a', 'b', 'c']

// Setting length LONGER extends with holes:
const grow = ['a', 'b'];
grow.length = 5;
// Internally:
//   index:   0     1     2       3       4
//   value:   'a'   'b'   empty   empty   empty
//   length:  ────────5──────────────────────────
grow[2];                        // undefined — hole
grow;                           // ['a', 'b', empty, empty, empty]

// This "settable length" is unique to arrays. On strings, arr.length = 3
// silently fails because strings are immutable. On arrays, it actually
// resizes the array.</code></pre>
  `,

  /* 0.3 Syntax Details That Matter */
  'topics-9-8-0-3': `
    <p><strong><code>.length</code> is a property, not a method — no parentheses.</strong> Same rule as everywhere else in JavaScript: property access is just the dot. Method calls need parentheses. Length is always a property.</p>
<pre class="language-javascript"><code class="language-javascript">const items = [1, 2, 3];
items.length;      // 3 — correct
items.length();    // TypeError — length is not a function</code></pre>

    <p><strong>Length reflects the count at the top level only.</strong> An array of arrays like <code>[[1, 2], [3, 4], [5, 6]]</code> has length 3 — three items total, each of which happens to be an array. Length doesn't recursively count nested items. To count nested items, you have to flatten or sum manually.</p>
<pre class="language-javascript"><code class="language-javascript">const grid = [[1, 2], [3, 4], [5, 6]];
grid.length;               // 3 — three sub-arrays
grid.flat().length;        // 6 — flatten first, then count
grid[0].length;            // 2 — length of the first sub-array</code></pre>

    <p><strong>Length is 0 for empty arrays — the standard empty check.</strong> <code>arr.length === 0</code> is the idiomatic way to check for empty. There's also the truthiness shortcut <code>!arr.length</code>. Note: <code>if (arr)</code> is NOT an empty check for arrays — an empty array is truthy in JavaScript (unlike an empty string, which is falsy).</p>
<pre class="language-javascript"><code class="language-javascript">const empty = [];
empty.length === 0;    // true — the standard check
!empty.length;         // true — shortcut

if (empty) { /* runs — empty array is truthy! */ }
Boolean([]);           // true — surprising but true</code></pre>

    <p><strong>Length UPDATES automatically when items are added or removed via methods.</strong> Every method that changes the array's size (<code>.push</code>, <code>.pop</code>, <code>.shift</code>, <code>.unshift</code>, <code>.splice</code>) updates <code>.length</code> at the same time. You never have to update it manually — the array manages its own count.</p>
<pre class="language-javascript"><code class="language-javascript">const items = ['a', 'b', 'c'];
items.length;               // 3
items.push('d');
items.length;               // 4 — updated automatically
items.pop();
items.length;               // 3
items.shift();
items.length;               // 2
items.splice(0, 1, 'x', 'y');   // replaces 1 item with 2
items.length;               // 3</code></pre>

    <p><strong>Assigning to length is a powerful (and dangerous) shortcut.</strong> Unlike strings, arrays let you set <code>.length</code> directly. Setting it lower truncates. Setting it higher extends with empty slots (holes). Setting it to 0 empties the array. This is different from strings — assigning to a string's <code>.length</code> is silently ignored because strings are immutable.</p>
<pre class="language-javascript"><code class="language-javascript">const items = [1, 2, 3, 4, 5];

items.length = 3;          // truncate to 3 items
items;                     // [1, 2, 3]

items.length = 0;          // clear the array
items;                     // []

items.length = 4;          // extend to 4 items — creates holes
items;                     // [empty, empty, empty, empty]
items[0];                  // undefined
items[3];                  // undefined</code></pre>

    <p><strong>Setting length to a non-integer or invalid value throws a RangeError.</strong> Length can only be a non-negative integer up to 2^32 - 1. Setting it to a negative number, a decimal, or a huge number outside that range throws.</p>
<pre class="language-javascript"><code class="language-javascript">const arr = [1, 2, 3];
arr.length = -1;           // RangeError: Invalid array length
arr.length = 1.5;          // RangeError
arr.length = 'hello';      // RangeError (after coercion attempt)
arr.length = 4294967296;   // RangeError — exceeds 2^32 - 1</code></pre>

    <p><strong>Length counts holes as items.</strong> If you have an array with intentional or accidental holes (like <code>[1, , 3]</code>), the length counts those holes as items. So <code>[1, , 3].length</code> is 3, even though position 1 has nothing meaningful in it. Same for arrays extended via <code>arr.length = N</code> — the new empty slots count toward the length.</p>
  `,

  /* --- Chunk 1: Why & When --- */

  /* 1.0 What problem it solves */
  'topics-9-8-1-0': `
    <p>Same problem as string <code>.length</code>, extended to collections. Nearly every meaningful array operation needs to know "how many items are in here?" Loop bounds. Empty checks. Getting the last item. Validating input against a max count. Displaying a "N results" label. Deciding whether to render a "load more" button. All of these questions come down to reading <code>.length</code>, and it needs to be fast, always available, and always correct.</p>
    <p>Arrays add a second problem that strings don't have: sometimes you need to change how many items an array has, quickly. Clearing the array. Truncating it to keep only the first N items. Making room for more items. Assigning to <code>.length</code> is a shortcut for all of these — one line of code instead of a loop or a slice-and-reassign. Whether it's the RIGHT tool depends on the situation (there are cleaner alternatives for some cases), but it's the only way to modify length directly, and it's a useful pattern to know exists.</p>
  `,

  /* 1.1 Why use it */
  'topics-9-8-1-1': `
    <p>Read <code>.length</code> anywhere you need a count. Loop bounds are the biggest use — <code>for (let i = 0; i &lt; arr.length; i++)</code> is the standard pattern for indexed iteration. Empty checks are second: <code>arr.length === 0</code> or <code>!arr.length</code>. Last-item access is third: <code>arr[arr.length - 1]</code>. These three uses probably account for 90% of all <code>.length</code> reads in real code.</p>
    <p>For writes to <code>.length</code>, the most legitimate use is <code>arr.length = 0</code> to empty an array in place. This is useful when you have a <code>const</code> array that other code holds a reference to, and you need to clear it without breaking those references. Reassigning to a new empty array (<code>arr = []</code>) would break the shared reference; setting length to 0 keeps the same array object.</p>
    <p>Setting length to a specific number to truncate is legitimate but uncommon — <code>.slice()</code> is usually clearer for keeping a portion. Extending an array by setting length longer is almost always wrong — it creates holes, which are a JavaScript quirk that most methods handle inconsistently. If you need a specific-sized array with meaningful values, use <code>Array.from</code> or <code>.fill()</code> instead.</p>
  `,

  /* 1.2 Where you use it */
  'topics-9-8-1-2': `
<pre class="language-javascript"><code class="language-javascript">// Empty check
if (cart.length === 0) {
  emptyState.textContent = 'Your cart is empty.';
}

// Loop bound
for (let i = 0; i < items.length; i++) {
  console.log(i, items[i]);
}

// Get the last item
const newest = messages[messages.length - 1];

// Count display
countLabel.textContent = \`\${results.length} results\`;

// Plural handling
label.textContent = \`\${count} \${count === 1 ? 'item' : 'items'}\`;

// Max-length validation for a list
if (selectedFiles.length > 10) {
  error.textContent = 'Please select up to 10 files.';
}

// Progress indicator
progress.textContent = \`\${done.length}/\${total.length}\`;

// Emptying an array while keeping the same reference
function reset() {
  history.length = 0;   // clear in place — other holders of 'history' see it too
}

// Truncating to keep only the top N (less common; slice is often clearer)
const top10 = results.slice(0, 10);         // preferred
results.length = 10;                         // alternative — mutates in place

// Checking if a "load more" button should show
loadMoreBtn.hidden = results.length >= totalAvailable;

// Anywhere you'd say "how many are in this list" — that's .length.</code></pre>
  `,

  /* 1.3 Plain English explanation */
  'topics-9-8-1-3': `
    <p>Think of an array as a row of lockers again. <code>.length</code> is the number of lockers in the row. Same as with strings — the length is a fixed fact about the row, updated automatically as lockers are added or removed. You don't have to walk the row and count — the row already knows.</p>
    <p>The new trick with arrays: unlike strings (which are frozen), you can walk up to the row and say "shrink to 3 lockers" — and the row actually shrinks, throwing away everything past locker 2. Or "expand to 10 lockers" — and the row gets bigger, with the new lockers empty. Setting <code>.length</code> is a shortcut for "resize the row directly," which arrays support because they're mutable.</p>
    <p>Most of the time you'll just READ <code>.length</code> to answer "how many?" — that's the everyday use. WRITING to <code>.length</code> is a niche move, mostly used for the one specific case of "empty this array in place without changing the variable." For most resizing needs, methods like <code>.push</code>, <code>.pop</code>, <code>.slice</code>, and <code>.splice</code> are more expressive — they tell the reader exactly what you're doing.</p>
  `,

  /* 1.4 Mental model */
  'topics-9-8-1-4': `
    <p>An array carries its length as a built-in, always-accurate property. Every operation that adds or removes items updates <code>.length</code> transparently. Every operation that reads or iterates uses <code>.length</code> to know its bounds. The property is stored internally, so reading is instant — no counting happens at read time.</p>
    <p>The core relationship is identical to strings: <em>length is always one more than the last valid index</em>. If length is 5, indexes go 0 to 4. The last item is at <code>length - 1</code>. Position at <code>length</code> is one past the end (returns <code>undefined</code>). This offset generates the same off-by-one bugs as strings do — same rule, same fix.</p>
    <p>The additional mental hook for arrays: <em>length is a two-way channel</em>. Reading it asks "how many?" — always safe, always fast. WRITING to it commands the array to resize — safe for shrinking, safer than a loop, and much faster than repeatedly calling <code>.pop()</code> in a loop. Extending via length creates holes, which is why extending is rarely the right choice.</p>
    <p>The two-way behavior is what most cleanly separates array length from string length. Strings are immutable — length is a read-only descriptor. Arrays are mutable — length is both a descriptor AND a control. Setting it doesn't just report a fact; it changes the array to match.</p>
  `,

  /* 1.5 Step-by-step walkthrough */
  'topics-9-8-1-5': `
<pre class="language-javascript"><code class="language-javascript">// Scenario: a "history" feature where actions are logged, but only the
// most recent 5 are kept. When a new action is added, older ones are
// dropped automatically.

const MAX_HISTORY = 5;
const history = [];

function log(action) {
  history.push(action);
  if (history.length > MAX_HISTORY) {
    history.length = MAX_HISTORY;   // truncate to the max
  }
}

// Walk through what happens as actions are logged:

// Initial state:
//   history = []
//   history.length = 0

// log('open')
// Step 1: history.push('open')
//         history = ['open']
//         history.length = 1
// Step 2: history.length (1) > MAX_HISTORY (5)? No — skip the truncation.

// log('edit'), log('save'), log('close'), log('reopen')
// After each: history grows by 1. Length reaches 5. Still no truncation.
// history = ['open', 'edit', 'save', 'close', 'reopen']

// log('save-as')
// Step 3: history.push('save-as')
//         history = ['open', 'edit', 'save', 'close', 'reopen', 'save-as']
//         history.length = 6
// Step 4: 6 > 5 → truncate.
// Step 5: history.length = MAX_HISTORY
//         history.length is now 5.
//         The array is truncated in place — the LAST item ('save-as') is dropped.
//         history = ['open', 'edit', 'save', 'close', 'reopen']

// Wait — that's wrong. We wanted to keep 'save-as' as the newest and
// drop the OLDEST ('open'). Setting length just drops from the end.
//
// This shows why setting length is a specific tool for a specific job.
// For "keep only the last N", you actually want:
history.push(action);
if (history.length > MAX_HISTORY) {
  history.shift();   // remove from the START instead
}
// or, cleaner:
if (history.length > MAX_HISTORY) {
  history.splice(0, history.length - MAX_HISTORY);   // remove from front
}

// For "keep only the FIRST N", setting length DOES work correctly:
const results = ['a', 'b', 'c', 'd', 'e', 'f'];
results.length = 3;
results;   // ['a', 'b', 'c'] — kept the first 3

// Key observations:
//   - Reading .length: pure and safe, tells you the current count.
//   - Writing .length: an actual command — the array resizes.
//   - Writing SHORTER drops items from the END, not the front.
//   - If you want to drop from the front, use .shift() or .splice() instead.
//   - Writing LONGER creates holes and is almost always the wrong choice.

// The mental hook: setting length shorter is like cutting the end of a
// sausage — you keep everything before the cut, and lose everything after.</code></pre>
  `,

  /* --- Chunk 2: The Click --- */

  /* 2.0 Debugging clue */
  'topics-9-8-2-0': `
    <p>Array <code>.length</code> bugs come in a few recognizable shapes, mostly the same as string length bugs plus a couple of array-specific ones.</p>
    <p><strong>1. "TypeError: length is not a function"</strong>. You wrote <code>arr.length()</code> with parentheses. Fix: no parentheses.</p>
    <p><strong>2. Off-by-one on last item.</strong> <code>arr[arr.length]</code> is <code>undefined</code>. Fix: <code>arr[arr.length - 1]</code> or <code>arr.at(-1)</code>.</p>
    <p><strong>3. Loop runs one extra time.</strong> <code>for (let i = 0; i &lt;= arr.length; i++)</code> reads position <code>length</code> on the last iteration, which is <code>undefined</code>. Fix: <code>&lt;</code>, not <code>&lt;=</code>.</p>
    <p><strong>4. Truthiness check misses empty.</strong> <code>if (arr)</code> is TRUE for an empty array — you probably wanted <code>if (arr.length &gt; 0)</code>. Empty arrays are truthy in JavaScript.</p>
    <p><strong>5. RangeError when setting length.</strong> You tried <code>arr.length = -1</code> or <code>arr.length = 1.5</code>. Length must be a non-negative integer up to 2^32 - 1. Fix: use <code>Math.floor</code>, <code>Math.abs</code>, or validate before assigning.</p>
    <p><strong>6. Truncation dropped the wrong end.</strong> You set <code>arr.length = 5</code> to "keep 5" but wanted the LAST 5, not the FIRST 5. Setting length shortens from the end. Fix: use <code>arr.splice(0, arr.length - 5)</code> to drop from the front, or <code>arr.slice(-5)</code> to build a new array with the last 5.</p>
    <p><strong>7. Extending length created holes.</strong> You did <code>arr.length = 10</code> expecting a 10-item array of <code>undefined</code>, but you got an array with 10 empty "slots" that behave weirdly with iteration methods. Fix: use <code>Array(10).fill(undefined)</code> or <code>Array.from({length: 10})</code> instead.</p>
    <p><strong>8. Cleared array by reassignment, other references still have the old data.</strong> You did <code>arr = []</code> instead of <code>arr.length = 0</code>. The variable now points to a new empty array, but anything else holding the old array still has it. Fix: if you need to preserve the reference, use <code>arr.length = 0</code>. If you don't care about references, either works.</p>
    <p><strong>9. Length disagrees with what you see.</strong> You added items with <code>arr[10] = 'x'</code> on a 3-item array. Length is now 11, and positions 3 through 9 are holes. Fix: use <code>.push()</code> to add to the end, not direct indexed assignment beyond the length.</p>
  `,

  /* 2.1 The part that makes it click */
  'topics-9-8-2-1': `
    <p>Array <code>.length</code> is the string <code>.length</code> concept plus one power: <em>you can write to it</em>. Reading behaves the same way strings do — always available, always accurate, constant-time, and one more than the last valid index. Writing is the array-only extra — setting <code>.length</code> to a smaller number truncates the array in place; setting it larger extends with holes.</p>
    <p>The most useful practical write is <code>arr.length = 0</code>, which empties an array while keeping the same object. This is the standard way to clear an array without breaking references other code might hold to it. Setting to any other specific number is possible but rarely the clearest choice — <code>.slice()</code>, <code>.splice()</code>, <code>.pop()</code>, and <code>.shift()</code> usually communicate intent better.</p>
  `,

  /* 2.2 Common confusions */
  'topics-9-8-2-2': `
    <p><strong>Confusion: "an empty array is falsy"</strong></p>
    <p>It's actually truthy — this is different from empty strings (which are falsy). Use <code>arr.length === 0</code> to check for empty; don't rely on <code>if (arr)</code>.</p>
<pre class="language-javascript"><code class="language-javascript">Boolean('');    // false — empty string is falsy
Boolean([]);    // true — empty array is truthy
if ([]) { /* runs */ }
if ([].length === 0) { /* runs — the correct check */ }</code></pre>

    <p><strong>Confusion: "reading length is expensive on big arrays"</strong></p>
    <p>It's not. The array stores its length internally — reading it is a constant-time operation. Don't cache <code>arr.length</code> in a loop for performance reasons.</p>

    <p><strong>Confusion: "assigning to length works the same as on strings"</strong></p>
    <p>It doesn't. Strings are immutable — <code>str.length = 3</code> is silently ignored. Arrays are mutable — <code>arr.length = 3</code> actually truncates the array. This is a fundamental difference between the two types.</p>

    <p><strong>Confusion: "setting length to a bigger number fills with undefined"</strong></p>
    <p>It fills with HOLES, which behave subtly differently from <code>undefined</code>. Most iteration methods (<code>.forEach</code>, <code>.map</code>, <code>.filter</code>) SKIP holes but don't skip explicit <code>undefined</code>. If you truly want an array of <code>undefined</code>, use <code>new Array(n).fill(undefined)</code> or <code>Array.from({length: n})</code>.</p>
<pre class="language-javascript"><code class="language-javascript">const withHoles = [];
withHoles.length = 3;
withHoles;                          // [empty, empty, empty]
withHoles.map(x => 'y');            // [empty, empty, empty] — skipped!

const withUndefineds = new Array(3).fill(undefined);
withUndefineds;                     // [undefined, undefined, undefined]
withUndefineds.map(x => 'y');       // ['y', 'y', 'y'] — visited each</code></pre>

    <p><strong>Confusion: "length counts nested items"</strong></p>
    <p>It doesn't. Length is top-level only. <code>[[1, 2], [3, 4]].length</code> is 2, not 4. To count nested items, flatten first: <code>arr.flat().length</code>.</p>

    <p><strong>Confusion: "clearing an array with <code>arr = []</code> and <code>arr.length = 0</code> are the same"</strong></p>
    <p>They produce the same empty array, but they differ in what happens to OTHER references. <code>arr = []</code> creates a NEW empty array and points the variable at it — anything else holding the old array still has the old data. <code>arr.length = 0</code> modifies the existing array in place — all references see the update.</p>
<pre class="language-javascript"><code class="language-javascript">let list = [1, 2, 3];
const other = list;

list = [];              // list points to a NEW empty array
other;                  // still [1, 2, 3] — unchanged

list = [1, 2, 3];
const other2 = list;
list.length = 0;        // modify in place
other2;                 // [] — both see it now</code></pre>

    <p><strong>Confusion: "you can set length to any number"</strong></p>
    <p>Only non-negative integers up to 2^32 - 1. Negative numbers, decimals, and huge values throw <code>RangeError</code>.</p>

    <p><strong>Confusion: "length auto-updates when I set arr[999]"</strong></p>
    <p>Yes, but not in a useful way. <code>arr[999] = 'x'</code> on an empty array sets length to 1000 and creates 999 holes. This is legal but almost never what you want.</p>
  `,

  /* 2.3 Common mistakes */
  'topics-9-8-2-3': `
<pre class="language-javascript"><code class="language-javascript">// Calling length as a method
const items = ['a', 'b', 'c'];
items.length();
// wrong: TypeError — length is not a function
// fix: no parentheses
items.length;   // 3</code></pre>

<pre class="language-javascript"><code class="language-javascript">// Off-by-one on last item
const items = ['a', 'b', 'c'];
items[items.length];
// wrong: undefined — length is 3, last valid index is 2
// fix: length - 1
items[items.length - 1];   // 'c'</code></pre>

<pre class="language-javascript"><code class="language-javascript">// Loop off-by-one
const items = ['a', 'b', 'c'];
for (let i = 0; i <= items.length; i++) {
  console.log(items[i]);
}
// wrong: last iteration reads items[3] → undefined
// fix: < instead of <=
for (let i = 0; i < items.length; i++) {
  console.log(items[i]);
}</code></pre>

<pre class="language-javascript"><code class="language-javascript">// Using truthiness to check for empty
const items = [];
if (items) {
  // runs — empty array is truthy!
}
// fix: check length
if (items.length > 0) {
  // this runs only when non-empty
}</code></pre>

<pre class="language-javascript"><code class="language-javascript">// Truncating dropped the wrong end
const history = ['open', 'edit', 'save', 'close', 'reopen', 'save-as'];
history.length = 5;
console.log(history);
// wrong: ['open', 'edit', 'save', 'close', 'reopen'] — dropped 'save-as' from the end
// If you wanted to keep the LAST 5 (drop 'open' from the front):
const history2 = ['open', 'edit', 'save', 'close', 'reopen', 'save-as'];
history2.shift();   // ['edit', 'save', 'close', 'reopen', 'save-as']
// Or use slice for a new array:
const kept = history.slice(-5);   // ['edit', 'save', 'close', 'reopen', 'save-as']</code></pre>

<pre class="language-javascript"><code class="language-javascript">// Extending with length creates holes, not undefineds
const empty = [];
empty.length = 3;
empty.map(x => 'y');
console.log(empty);
// wrong: still [empty, empty, empty] — .map SKIPS holes
// fix: use fill or Array.from for actual values
const three = new Array(3).fill(undefined);
three.map(x => 'y');   // ['y', 'y', 'y']</code></pre>

<pre class="language-javascript"><code class="language-javascript">// Clearing with reassignment breaks shared references
let cart = [1, 2, 3];
const alsoCart = cart;
cart = [];
console.log(alsoCart);
// wrong: alsoCart is still [1, 2, 3] — you replaced cart, not the array
// fix: modify in place if references matter
cart = [1, 2, 3];
const alsoCart2 = cart;
cart.length = 0;
console.log(alsoCart2);   // [] — same object, now empty</code></pre>

<pre class="language-javascript"><code class="language-javascript">// Setting length to a bad value
const items = [1, 2, 3];
items.length = -1;
// wrong: RangeError: Invalid array length
// fix: validate the value first, or use Math.max
items.length = Math.max(0, someValue);</code></pre>

<pre class="language-javascript"><code class="language-javascript">// Assigning to a huge index inflates length
const items = ['a', 'b', 'c'];
items[999] = 'x';
items.length;   // 1000 — created 996 holes at positions 3-998
// This is legal but almost never what you want.
// fix: use .push() to add to the end
items.push('x');   // items.length is 4, no holes</code></pre>

<pre class="language-javascript"><code class="language-javascript">// Counting nested items with a single .length
const grid = [[1, 2], [3, 4], [5, 6]];
grid.length;   // 3, not 6
// fix: flatten first
grid.flat().length;   // 6</code></pre>
  `,

  /* --- Chunk 3: In Practice --- */

  /* 3.0 Tiny examples */
  'topics-9-8-3-0': `
<pre class="language-javascript"><code class="language-javascript">// Basic reading
[].length;                          // 0
['a'].length;                       // 1
['a', 'b', 'c'].length;             // 3

// With variables
const items = ['x', 'y', 'z'];
items.length;                       // 3

// Empty check
items.length === 0;                 // false
!items.length;                      // false
[].length === 0;                    // true

// Careful: truthiness
Boolean([]);                        // true — empty array is TRUTHY
Boolean('');                        // false — empty string is falsy (compare!)
if ([]) { /* runs */ }
if ([].length === 0) { /* runs */ }

// Nested — top-level count only
[[1, 2], [3, 4]].length;            // 2
[[1, 2], [3, 4]].flat().length;     // 4

// Length updates as items are added or removed
const arr = [];
arr.length;                         // 0
arr.push('a', 'b');
arr.length;                         // 2
arr.pop();
arr.length;                         // 1

// Last item using length
const list = ['red', 'green', 'blue'];
list[list.length - 1];              // 'blue'

// Loop bound
for (let i = 0; i < list.length; i++) { /* ... */ }

// Assign to length — truncate
const trim = [1, 2, 3, 4, 5];
trim.length = 3;
trim;                               // [1, 2, 3]

// Assign to length = 0 — clear in place
const cart = ['a', 'b', 'c'];
cart.length = 0;
cart;                               // []

// Assign to length larger — creates holes (usually bad)
const grow = ['a', 'b'];
grow.length = 5;
grow;                               // ['a', 'b', empty, empty, empty]
grow[3];                            // undefined

// Assigning to length is unique to arrays; on strings it's silently ignored
const s = 'hello';
s.length = 2;
s;                                  // 'hello' — unchanged
s.length;                           // 5

// Property, not method
typeof list.length;                 // 'number'
list.length();                      // TypeError — not callable</code></pre>
  `,

  /* 3.1 Real website uses */
  'topics-9-8-3-1': `
    <p><strong>Example: empty state for a list</strong></p>
<pre class="language-javascript"><code class="language-javascript">if (cart.length === 0) {
  cartEl.innerHTML = '&lt;p&gt;Your cart is empty.&lt;/p&gt;';
} else {
  renderCart(cart);
}</code></pre>

    <p><strong>Example: pluralizing a count label</strong></p>
<pre class="language-javascript"><code class="language-javascript">label.textContent = \`\${results.length} \${results.length === 1 ? 'result' : 'results'}\`;</code></pre>

    <p><strong>Example: disabling a "load more" button when done</strong></p>
<pre class="language-javascript"><code class="language-javascript">loadMoreBtn.disabled = loaded.length >= total;</code></pre>

    <p><strong>Example: clearing a list in place (preserving references)</strong></p>
<pre class="language-javascript"><code class="language-javascript">function resetHistory() {
  history.length = 0;   // clear without reassigning
}</code></pre>

    <p><strong>Example: enforcing a max on selected files</strong></p>
<pre class="language-javascript"><code class="language-javascript">fileInput.addEventListener('change', () => {
  const files = [...fileInput.files];
  if (files.length > 10) {
    error.textContent = 'Please select up to 10 files.';
  }
});</code></pre>

    <p><strong>Example: showing progress through a checklist</strong></p>
<pre class="language-javascript"><code class="language-javascript">const done = tasks.filter(t => t.completed);
progress.textContent = \`\${done.length}/\${tasks.length}\`;</code></pre>

    <p><strong>Example: keeping only the first N results</strong></p>
<pre class="language-javascript"><code class="language-javascript">// Preferred — creates a new array, doesn't mutate
const top10 = results.slice(0, 10);
// Alternative — mutates in place
results.length = 10;</code></pre>
  `,

  /* 3.2 Connects to */
  'topics-9-8-3-2': `
    <ul>
      <li><strong>String .length</strong> → shares the same core mechanics; the read side is identical</li>
      <li><strong>Array indexes</strong> → highest valid index is <code>length - 1</code></li>
      <li><strong>Last item</strong> → uses <code>arr[arr.length - 1]</code></li>
      <li><strong>Loop bounds</strong> → <code>for (let i = 0; i &lt; arr.length; i++)</code> is the idiom</li>
      <li><strong>Empty check</strong> → <code>arr.length === 0</code> (NOT truthiness — empty arrays are truthy)</li>
      <li><strong>Mutability</strong> → arrays let you set <code>.length</code>; strings don't</li>
      <li><strong>.push, .pop, .shift, .unshift</strong> → all update <code>.length</code> automatically</li>
      <li><strong>.slice() vs assigning length</strong> → slice returns a new array; length assignment mutates in place</li>
      <li><strong>Holes</strong> → created by extending length or by <code>arr[N] = ...</code> with a big gap; a JS quirk to avoid</li>
      <li><strong>Reference vs reassignment</strong> → <code>arr.length = 0</code> preserves references; <code>arr = []</code> replaces</li>
      <li><strong>Debugging</strong> → most bugs are off-by-one or forgetting empty-arrays-are-truthy</li>
    </ul>
  `,

  /* 3.3 See also */
  'topics-9-8-3-3': `
    <ul>
      <li>String .length (for the shared basics)</li>
      <li>Array indexes</li>
      <li>Last item</li>
      <li>Adding items (.push, .unshift)</li>
      <li>Removing items (.pop, .shift)</li>
      <li>.slice() and .splice()</li>
      <li>Mutation vs returning new array</li>
      <li>Empty array handling</li>
      <li>Reference vs reassignment</li>
      <li>Common array mistakes</li>
    </ul>
  `,

  /* ========================================================= 
   Sub-lesson: 3.10.8 Arrays → last item
 =======================================================*/

  /* --- Chunk 0: What & How --- */

  /* 0.0 What it is */
  'topics-9-7-0-0': `
    <p>The <strong>last item</strong> of an array is the value at the highest valid index — the one furthest from the start. If your array has 3 items, the last one is at index 2. If it has 100 items, the last is at index 99. The pattern is always the same: the last item lives at position <code>length - 1</code>, because indexes start at 0 while length counts from 1.</p>
    <p>Getting the last item is one of the most common array operations. The most recent message in a chat. The most recent entry in a log. The final step of a wizard. The last search result on the page. The last uploaded file. Any time you're dealing with something ordered where "the newest" or "the end" matters, you're reaching for the last item. There are two idiomatic ways to write it in modern JavaScript, and knowing both means you can read any codebase without pausing.</p>
  `,

  /* 0.1 Syntax */
  'topics-9-7-0-1': `
<pre class="language-javascript"><code class="language-javascript">const colors = ['red', 'green', 'blue'];

// The classic way — bracket notation with length - 1:
colors[colors.length - 1];      // "blue"

// The modern way — .at() with a negative index:
colors.at(-1);                  // "blue"

// Both work. Both give you the same value.
// Which one you use is style/team preference.

// Second-to-last, third-to-last, and so on:
colors[colors.length - 2];      // "green"
colors.at(-2);                  // "green"
colors.at(-3);                  // "red"

// Same pattern on any array — single item, one line, easy read
const messages = ['hi', 'sup', 'gtg'];
messages.at(-1);                // "gtg"

const scores = [90, 85, 72, 100];
scores.at(-1);                  // 100

// Empty array — no last item
const empty = [];
empty[empty.length - 1];        // undefined
empty.at(-1);                   // undefined
// Both approaches gracefully return undefined instead of erroring.

// Single-item array — first AND last are the same
const one = ['only'];
one[0];                         // "only"
one[one.length - 1];            // "only"
one.at(-1);                     // "only"

// Wrong: forgetting the -1 or -length
colors[colors.length];          // undefined — that's one past the end
colors.at(colors.length);       // undefined
// fix: subtract 1, or use .at(-1)

// Wrong: brackets with negative — doesn't work
colors[-1];                     // undefined
// fix: use .at(-1)</code></pre>
  `,

  /* 0.2 Anatomy / Breakdown */
  'topics-9-7-0-2': `
<pre class="language-javascript"><code class="language-javascript">const colors = ['red', 'green', 'blue'];

// Why the last item is at length - 1, visualized:
//
//   index:   0       1        2
//   value:   "red"   "green"  "blue"
//   length:  ────────3────────────────
//
// The array has 3 items → length = 3.
// The indexes go 0, 1, 2 → the last index is 2 = length - 1.
// This offset (indexes start at 0, length starts at 1) is why the last
// item is ALWAYS at length - 1, never at length.

// Approach 1 — bracket notation:
//
//   colors[colors.length - 1]
//   │      │      │        │
//   │      │      │        └── subtract 1 to get the last valid index
//   │      │      └─────────── the array's length (3)
//   │      └────────────────── the array we're reading from
//   └───────────────────────── bracket lookup

// JS evaluates the expression inside the brackets first:
//   colors.length         → 3
//   colors.length - 1     → 2
//   colors[2]             → "blue"

// Approach 2 — .at(-1):
//
//   colors.at(-1)
//   │      │  │
//   │      │  └── negative index — .at counts from the end
//   │      └───── the .at method
//   └──────────── the array

// .at() is a method that understands negative indexes.
// .at(-1) means "one from the end" = the last item.
// .at(-2) means "two from the end" = second-to-last.
// This is the same pattern as Python or Ruby's negative indexing —
// something bracket notation never got.

// Both approaches produce identical results. Choose based on team style:
// .at(-1) is shorter and reads clearer. arr[arr.length - 1] is universal
// (works even in very old browsers before 2022) and doesn't require knowing
// what .at() does.</code></pre>
  `,

  /* 0.3 Syntax Details That Matter */
  'topics-9-7-0-3': `
    <p><strong>The last valid index is always <code>length - 1</code>.</strong> This is because indexes are zero-based (start at 0) but length is one-based (counts from 1). A 5-item array has length 5 and indexes 0, 1, 2, 3, 4 — so the last valid index is 4. Trying to read at <code>length</code> gives <code>undefined</code> because that's one past the end.</p>
<pre class="language-javascript"><code class="language-javascript">const items = ['a', 'b', 'c', 'd', 'e'];
items.length;              // 5
items[items.length - 1];   // "e" — last valid item
items[items.length];       // undefined — one past the end</code></pre>

    <p><strong><code>.at()</code> supports negative indexes; brackets don't.</strong> <code>.at(-1)</code> is the last item. <code>arr[-1]</code> is <code>undefined</code>. This is the single biggest reason to prefer <code>.at()</code> for last-item access — it's shorter and doesn't require the length calculation. If your project supports modern browsers (2022 and later), just use <code>.at(-1)</code>.</p>
<pre class="language-javascript"><code class="language-javascript">const items = ['a', 'b', 'c'];
items.at(-1);              // "c" — works
items[-1];                 // undefined — brackets don't understand negatives</code></pre>

    <p><strong>Empty arrays return <code>undefined</code> for the last item.</strong> An empty array has length 0, so <code>length - 1</code> is <code>-1</code>, which we just learned brackets can't handle. <code>.at(-1)</code> on an empty array also returns <code>undefined</code>. Both approaches fail gracefully, but if your code assumes there IS a last item, you'll flow <code>undefined</code> into whatever operation comes next — and that's often where the real error appears.</p>
<pre class="language-javascript"><code class="language-javascript">const empty = [];
empty[empty.length - 1];   // undefined
empty.at(-1);              // undefined
empty.at(-1).name;         // TypeError: Cannot read properties of undefined

// Always guard when the array might be empty:
if (empty.length > 0) {
  const last = empty.at(-1);
  // safe to use
}

// Or use optional chaining:
empty.at(-1)?.name;        // undefined, no error</code></pre>

    <p><strong>A single-item array has the same first and last item.</strong> <code>['only'][0]</code> and <code>['only'].at(-1)</code> are both <code>"only"</code>. This is worth remembering because code that treats "first" and "last" as different things needs to handle the one-item case correctly — sometimes they overlap and that's fine, but sometimes it means your algorithm is doing double work on the same item.</p>

    <p><strong>Reading the last item doesn't remove it.</strong> Both <code>arr[arr.length - 1]</code> and <code>arr.at(-1)</code> are read-only. The item stays in the array after you look at it. If you want to read AND remove the last item, use <code>.pop()</code> — it returns the removed item and shortens the array by one.</p>
<pre class="language-javascript"><code class="language-javascript">const items = ['a', 'b', 'c'];

// Reading — array is unchanged
items.at(-1);              // "c"
items;                     // ['a', 'b', 'c'] — still 3 items

// Removing — array shrinks
const last = items.pop();  // "c"
items;                     // ['a', 'b'] — 2 items now</code></pre>

    <p><strong>The last item can be any type.</strong> Just like any other item — the "last" designation is only about position, not about what's stored there. It could be a string, a number, an object, another array, whatever. Whatever type your array holds, the last one is that type too.</p>
  `,

  /* --- Chunk 1: Why & When --- */

  /* 1.0 What problem it solves */
  'topics-9-7-1-0': `
    <p>You constantly need to know what's most recent. The last message in a chat window (to display it, or to scroll to it). The last entry in a log (to check the most recent event). The last item added to a cart (to highlight the newest addition). The last step in a wizard (to know if the user has finished). The last search result (to decide whether to load more). Any time "newest" or "most recent" or "end of the line" means something in your app, you're asking for the last item.</p>
    <p>The problem is that "last" isn't a fixed position — it depends on how many items are in the array right now. If your chat had 5 messages, the last one was at index 4. Now it has 6 messages, so the last is at index 5. Hardcoding a specific index would break the moment the array grows or shrinks. The <code>length - 1</code> pattern (or <code>.at(-1)</code>) works regardless of the array's current size, because it computes the last position on the fly.</p>
  `,

  /* 1.1 Why use it */
  'topics-9-7-1-1': `
    <p>Use last-item access whenever you need the most recent value in an ordered list. If you just pushed a new item and want to work with it immediately, that's the last item. If you're displaying a "most recent" widget, that's the last item. If you're implementing undo (revert the most recent action), that's the last item. If you're checking whether the array ends in a specific value (like "does this list end with a period?"), that's the last item.</p>
    <p>Between the two approaches — <code>arr[arr.length - 1]</code> vs <code>arr.at(-1)</code> — prefer <code>.at(-1)</code> in new code. It's shorter, reads better, and doesn't require the mental arithmetic of "length minus one." Use the bracket form when you need to support very old environments that don't have <code>.at()</code> (which is rare in modern web development — <code>.at()</code> has been widely supported since 2022).</p>
    <p>If you need to READ and REMOVE the last item, use <code>.pop()</code> instead of reading then splicing separately. <code>.pop()</code> does both operations in one call, returns the removed item, and is the standard "take the last one off" pattern.</p>
  `,

  /* 1.2 Where you use it */
  'topics-9-7-1-2': `
<pre class="language-javascript"><code class="language-javascript">// Displaying the most recent message
const lastMessage = messages.at(-1);
if (lastMessage) latestBanner.textContent = lastMessage.text;

// Scrolling to the most recent chat message
messagesEl.scrollTop = messagesEl.scrollHeight;
const newest = messages.at(-1);
if (newest) highlight(newest.id);

// Undo — check the last action in the history
const lastAction = history.at(-1);
if (lastAction) revert(lastAction);

// Confirming a wizard is complete
const lastStep = steps.at(-1);
if (currentStep === lastStep) enableSubmit();

// Checking if a filename has a specific extension
const ext = filename.split('.').at(-1);
if (ext === 'txt') { /* it's a text file */ }

// Getting the current URL segment (path-based routing)
const segments = location.pathname.split('/');
const current = segments.at(-1);   // "profile" from "/user/os/profile"

// The newest post in a feed
const newest = posts.at(-1);
render(newest);

// The "current" tab or step in a stepper UI
const current = tabs.at(-1);
current.classList.add('active');

// Reading the last item as part of building a UI
const summary = \`Last updated: \${logs.at(-1)?.timestamp ?? 'never'}\`;

// Anywhere you say "most recent" or "the newest one" — that's the last item.</code></pre>
  `,

  /* 1.3 Plain English explanation */
  'topics-9-7-1-3': `
    <p>Imagine a row of numbered lockers again. The last locker is the one at the highest number in the row. If your row has 5 lockers, they're numbered 0, 1, 2, 3, 4 — and the last one is locker 4. If you added a new locker to the end, now you have 6 lockers (numbered 0 through 5), and the last one is locker 5. The specific number changes as the row grows or shrinks, but "the last one" always means whichever locker is furthest to the right.</p>
    <p>The two approaches to reaching the last locker are basically the same idea expressed differently. The old way: "count how many lockers there are, subtract 1, and open that one." <code>length</code> tells you how many lockers exist, minus 1 because you started counting from 0. The new way: "just open the locker that's 1 back from the end." <code>.at(-1)</code> is that shortcut — you don't have to count, you just say "the last one, please."</p>
    <p>Once you internalize that the array's length is always one more than the last index, you'll stop tripping over the "off by one" gotcha. And once you get comfortable with <code>.at(-1)</code>, you'll rarely need to do the subtraction yourself — the method reads exactly like what you're trying to do, and the older bracket form becomes a fallback for old browsers or legacy code.</p>
  `,

  /* 1.4 Mental model */
  'topics-9-7-1-4': `
    <p>An array has a fixed relationship between its length and its indexes: length is always one more than the last index. This is because indexes count from 0. Every array with N items has indexes 0 through N-1, and length N. So the last item is always at position N-1, which is <code>length - 1</code>.</p>
    <p>Two ways to access position <code>length - 1</code>:</p>
    <p><strong>1. Do the math yourself:</strong> <code>arr[arr.length - 1]</code>. The brackets don't understand "last" — they just take whatever number you give them. So you compute the correct number (length minus one) and hand it to the brackets. This is the old, universal way.</p>
    <p><strong>2. Let the method do it:</strong> <code>arr.at(-1)</code>. The <code>.at()</code> method understands negative indexes as "from the end." <code>.at(-1)</code> is one from the end. <code>.at(-2)</code> is two from the end. This is the modern way.</p>
    <p>Both produce the same value. There is no functional difference; the choice is purely about readability and browser support. Use <code>.at(-1)</code> unless you have a specific reason not to.</p>
    <p>The mental picture: <em>the last item is always one step back from the end of the array</em>. Whether you compute "one step back" as <code>length - 1</code> (the bracket way) or as <code>-1</code> (the .at way), you're pointing at the same slot. The array itself doesn't have a special "last item pointer" — you just have two idioms for expressing "the one at the end."</p>
  `,

  /* 1.5 Step-by-step walkthrough */
  'topics-9-7-1-5': `
<pre class="language-javascript"><code class="language-javascript">// Scenario: a chat app where the newest message appears at the bottom
// and needs to be highlighted whenever a new one arrives.

const messages = [];

function receiveMessage(text) {
  messages.push({ text, time: Date.now() });
  highlightNewest();
}

function highlightNewest() {
  const newest = messages.at(-1);
  if (!newest) return;

  banner.textContent = \`New message: "\${newest.text}"\`;
  banner.classList.add('highlight');
}

// Walk through a few messages arriving:

// Initial state: messages = []
// receiveMessage('Hey') is called.

// Step 1: messages.push({ text: 'Hey', time: ... })
//         messages is now: [{ text: 'Hey', time: ... }]
//         messages.length is 1.
// Step 2: highlightNewest() runs.
// Step 3: newest = messages.at(-1)
//         .at(-1) means "one from the end" — the last item.
//         messages has 1 item, so the last item is at index 0.
//         newest = { text: 'Hey', time: ... }
// Step 4: newest is truthy — don't return early.
// Step 5: banner shows "New message: 'Hey'"

// receiveMessage('How are you?') is called.
// Step 6: messages.push({ text: 'How are you?', time: ... })
//         messages is now: [{Hey}, {How are you?}]
//         messages.length is 2.
// Step 7: highlightNewest() runs.
// Step 8: newest = messages.at(-1)
//         .at(-1) is now the second item (index 1).
//         newest = { text: 'How are you?', time: ... }
// Step 9: banner shows "New message: 'How are you?'"

// receiveMessage('Later!') is called.
// Step 10: messages has 3 items now.
//          messages.at(-1) is the third item (index 2).
//          banner shows "New message: 'Later!'"

// Key observation: the code never changes as messages arrive.
// .at(-1) always resolves to the current last item, no matter what
// the length is. This is what makes it useful — the position is
// computed on the fly every time.

// If you wanted to write the same thing with the old bracket form:
const newest = messages[messages.length - 1];
// Identical result. Slightly more verbose. Same lookup happens.</code></pre>
  `,

  /* --- Chunk 2: The Click --- */

  /* 2.0 Debugging clue */
  'topics-9-7-2-0': `
    <p>Last-item bugs cluster around a few patterns.</p>
    <p><strong>1. Off-by-one — using <code>length</code> instead of <code>length - 1</code>.</strong> You wrote <code>arr[arr.length]</code> expecting the last item, got <code>undefined</code>. That's because <code>length</code> is one past the last index. Fix: subtract 1, or use <code>.at(-1)</code>.</p>
    <p><strong>2. <code>arr[-1]</code> returns <code>undefined</code>.</strong> Brackets don't understand negative indexes in JavaScript (unlike Python or Ruby). Fix: use <code>.at(-1)</code> or <code>arr[arr.length - 1]</code>.</p>
    <p><strong>3. Last-item read on an empty array throws downstream.</strong> Empty array has no last item, so both approaches return <code>undefined</code>. If you then access a property (<code>arr.at(-1).name</code>), you get <code>TypeError: Cannot read property 'name' of undefined</code>. Fix: check length first, or use optional chaining (<code>arr.at(-1)?.name</code>).</p>
    <p><strong>4. Trying to modify the last item but reading a primitive copy.</strong> If your array holds primitives, <code>const last = arr.at(-1)</code> gives you a copy. Modifying <code>last</code> doesn't affect the array. Fix: assign directly with brackets — <code>arr[arr.length - 1] = newValue</code>.</p>
    <p><strong>5. Reading the last item repeatedly in a loop.</strong> You wrote <code>while (arr.at(-1) !== someTarget) { ... }</code>. This works, but if the loop body doesn't modify the array, you have an infinite loop. Make sure the body actually changes what "the last item" is (usually by pushing or popping).</p>
    <p><strong>6. Confusing <code>.at(-1)</code> with <code>.pop()</code>.</strong> <code>.at(-1)</code> reads without removing. <code>.pop()</code> removes and returns the removed item. If you meant "give me the last item AND take it off the array," you want <code>.pop()</code>. If you meant "just look at the last item," you want <code>.at(-1)</code>.</p>
    <p><strong>7. Assuming the last item stays the same after sorting/filtering.</strong> If you sort or filter the array, "the last item" now refers to a different value. If you're tracking a specific item, don't rely on its position — track it by an ID or a reference stored elsewhere.</p>
  `,

  /* 2.1 The part that makes it click */
  'topics-9-7-2-1': `
    <p>The last item of an array is always at position <code>length - 1</code>. This is a fixed relationship, not a design choice you can argue with — it's a direct consequence of indexes starting at 0 and length counting from 1. Once you internalize this offset, the last-item pattern stops being something to memorize and becomes obvious.</p>
    <p>Two idioms express the same lookup: <code>arr[arr.length - 1]</code> (old, universal) and <code>arr.at(-1)</code> (modern, cleaner). They produce identical values. Choose one based on your project's browser support and team conventions. If you're writing new code and don't have a constraint, use <code>.at(-1)</code> — it's shorter, safer, and reads exactly like what you're trying to do.</p>
  `,

  /* 2.2 Common confusions */
  'topics-9-7-2-2': `
    <p><strong>Confusion: "the last item is at index <code>length</code>"</strong></p>
    <p>It's at <code>length - 1</code>. Index <code>length</code> is one past the end and returns <code>undefined</code>. This is the same 0-based vs. 1-based mismatch that trips up almost every beginner. Memorize it once: <em>length is always one more than the last index</em>.</p>

    <p><strong>Confusion: "<code>arr[-1]</code> should work like in Python"</strong></p>
    <p>It doesn't. JavaScript brackets don't support negative indexes. Use <code>.at(-1)</code> for that behavior, or compute <code>length - 1</code> manually.</p>

    <p><strong>Confusion: "<code>.at(-1)</code> and <code>arr[arr.length - 1]</code> behave differently"</strong></p>
    <p>They don't for reading. Both return the same value. The differences are: <code>.at()</code> is a method (function call), brackets are direct property access. <code>.at()</code> supports negatives; brackets don't. <code>.at()</code> is read-only; brackets can also be used to write. For "just read the last item," they're interchangeable.</p>

    <p><strong>Confusion: "reading the last item pops it off"</strong></p>
    <p>It doesn't. Both <code>arr.at(-1)</code> and <code>arr[arr.length - 1]</code> are non-destructive reads. The item stays in the array. If you want to read AND remove, use <code>.pop()</code>.</p>
<pre class="language-javascript"><code class="language-javascript">const items = ['a', 'b', 'c'];
items.at(-1);        // "c"
items;               // still ['a', 'b', 'c']

items.pop();         // "c" — removes AND returns
items;               // ['a', 'b']</code></pre>

    <p><strong>Confusion: "empty arrays throw when accessing the last item"</strong></p>
    <p>They don't throw — both approaches return <code>undefined</code>. What throws is doing something with that <code>undefined</code> afterwards (like accessing a property on it).</p>

    <p><strong>Confusion: "<code>.at(-1)</code> is slow because it's a method call"</strong></p>
    <p>It's not meaningfully slower. Modern JS engines optimize it. Don't premature-optimize by preferring brackets for perceived speed — write for readability.</p>

    <p><strong>Confusion: "the last item has some special meaning to the array"</strong></p>
    <p>It doesn't. The array doesn't track which item is "last." The last item is just whatever happens to be at the highest current index. If you push a new item, the "last" instantly refers to that new item. If you pop the last, the previous item becomes the new last. It's a dynamic label, not a stored property.</p>
  `,

  /* 2.3 Common mistakes */
  'topics-9-7-2-3': `
<pre class="language-javascript"><code class="language-javascript">// Using length instead of length - 1
const items = ['a', 'b', 'c'];
const last = items[items.length];
// wrong: items[3] is undefined — length is 3, last index is 2
// fix: subtract 1
const last2 = items[items.length - 1];   // "c"
// or use .at(-1)
const last3 = items.at(-1);              // "c"</code></pre>

<pre class="language-javascript"><code class="language-javascript">// Using arr[-1] expecting the last item
const items = ['a', 'b', 'c'];
const last = items[-1];
// wrong: undefined — brackets don't do negative
// fix: use .at(-1) or length - 1
const last2 = items.at(-1);
const last3 = items[items.length - 1];</code></pre>

<pre class="language-javascript"><code class="language-javascript">// Reading last item on an empty array and using the result
const empty = [];
const name = empty.at(-1).name;
// wrong: TypeError — .at(-1) is undefined, undefined.name throws
// fix: check first, or use optional chaining
if (empty.length > 0) {
  const name = empty.at(-1).name;
}
// or
const name2 = empty.at(-1)?.name;   // undefined, no throw</code></pre>

<pre class="language-javascript"><code class="language-javascript">// Trying to modify via a primitive copy
const scores = [90, 85, 72];
let last = scores.at(-1);
last = 100;
console.log(scores);
// wrong: scores is still [90, 85, 72] — last was a copy
// fix: assign directly to the last position
scores[scores.length - 1] = 100;
// scores is now [90, 85, 100]</code></pre>

<pre class="language-javascript"><code class="language-javascript">// Confusing .at(-1) with .pop()
const items = ['a', 'b', 'c'];
const last = items.at(-1);
items;   // ['a', 'b', 'c'] — unchanged
// If you wanted to REMOVE the last item too:
const removed = items.pop();
items;   // ['a', 'b']
// pop returns the removed item, so you can use it either way</code></pre>

<pre class="language-javascript"><code class="language-javascript">// Loop that reads last item without changing it → infinite loop
const items = ['a', 'b', 'c'];
while (items.at(-1) !== 'x') {
  console.log('still not x');
  // no change to items → infinite loop!
}
// fix: modify items inside the loop, or break out
while (items.at(-1) !== 'x') {
  items.push('x');   // eventually adds 'x', ending the loop
}</code></pre>

<pre class="language-javascript"><code class="language-javascript">// Assuming the last item is stable across sort/filter
const tasks = ['a', 'b', 'c'];
const currentTask = tasks.at(-1);   // 'c'
tasks.sort();                        // stays ['a', 'b', 'c'] here, but reversed sort would change it
tasks.reverse();                     // ['c', 'b', 'a']
tasks.at(-1);                        // 'a' — no longer the same as currentTask
// fix: if you need to track a specific item, hold a reference to it directly
const target = tasks.at(-1);
// target is still the value 'a' (or whatever it was), regardless of array changes</code></pre>

<pre class="language-javascript"><code class="language-javascript">// Chaining .at(-1) into a longer expression without safety
const chatMessages = getMessages();
const lastText = chatMessages.at(-1).text.toUpperCase();
// wrong: if chatMessages is empty, .at(-1) is undefined and this throws
// fix: guard the chain
const lastText2 = chatMessages.at(-1)?.text?.toUpperCase() ?? '';</code></pre>
  `,

  /* --- Chunk 3: In Practice --- */

  /* 3.0 Tiny examples */
  'topics-9-7-3-0': `
<pre class="language-javascript"><code class="language-javascript">const colors = ['red', 'green', 'blue'];

// The two idioms — same result
colors[colors.length - 1];   // "blue"
colors.at(-1);               // "blue"

// Second-to-last
colors[colors.length - 2];   // "green"
colors.at(-2);               // "green"

// Third-to-last
colors.at(-3);               // "red"

// Empty array
[].at(-1);                   // undefined
[][-1];                      // undefined
[][[].length - 1];           // undefined ([].length is 0, [-1] is undefined)

// Single-item array — first and last are the same
['only'].at(-1);             // "only"
['only'][0];                 // "only"
['only'][['only'].length - 1]; // "only"

// Reading is non-destructive
const items = ['a', 'b', 'c'];
items.at(-1);                // "c"
items.length;                // still 3

// Removing is different (use .pop)
items.pop();                 // "c"
items;                       // ['a', 'b']

// Chaining
const users = [{ name: 'Os' }, { name: 'Sam' }];
users.at(-1).name;           // "Sam"
users.at(-1)?.name;          // "Sam"
[].at(-1)?.name;             // undefined, no throw

// arr[-1] doesn't work
[1, 2, 3][-1];               // undefined

// Modifying the last item — must use brackets, not .at()
const items2 = ['a', 'b', 'c'];
items2[items2.length - 1] = 'z';
items2;                      // ['a', 'b', 'z']
// .at() is read-only:
items2.at(-1) = 'y';         // SyntaxError</code></pre>
  `,

  /* 3.1 Real website uses */
  'topics-9-7-3-1': `
    <p><strong>Example: showing the newest chat message in a banner</strong></p>
<pre class="language-javascript"><code class="language-javascript">const newest = messages.at(-1);
if (newest) banner.textContent = newest.text;</code></pre>

    <p><strong>Example: highlighting the most recent action for undo</strong></p>
<pre class="language-javascript"><code class="language-javascript">const lastAction = history.at(-1);
undoBtn.disabled = !lastAction;
undoBtn.textContent = lastAction ? \`Undo: \${lastAction.name}\` : 'Nothing to undo';</code></pre>

    <p><strong>Example: getting the file extension from a filename</strong></p>
<pre class="language-javascript"><code class="language-javascript">const parts = filename.split('.');
const ext = parts.at(-1);   // "txt" from "notes.txt"</code></pre>

    <p><strong>Example: showing the last-updated timestamp from a log</strong></p>
<pre class="language-javascript"><code class="language-javascript">const latest = logs.at(-1);
statusLabel.textContent = latest
  ? \`Last updated: \${latest.timestamp}\`
  : 'No updates yet';</code></pre>

    <p><strong>Example: reading the current route segment</strong></p>
<pre class="language-javascript"><code class="language-javascript">const segments = location.pathname.split('/').filter(Boolean);
const current = segments.at(-1);   // "profile" from "/user/os/profile"</code></pre>

    <p><strong>Example: reading the last uploaded file's name</strong></p>
<pre class="language-javascript"><code class="language-javascript">const files = [...fileInput.files];
const lastFile = files.at(-1);
if (lastFile) console.log(\`Uploaded: \${lastFile.name}\`);</code></pre>

    <p><strong>Example: replacing the last item in a running total display</strong></p>
<pre class="language-javascript"><code class="language-javascript">const totals = [100, 150, 200];
totals[totals.length - 1] = 250;   // replace the last with a corrected value
render(totals);</code></pre>
  `,

  /* 3.2 Connects to */
  'topics-9-7-3-2': `
    <ul>
      <li><strong>Array indexes</strong> → the last valid index is always <code>length - 1</code></li>
      <li><strong>Array .length</strong> → what you subtract from to get the last index</li>
      <li><strong>First item</strong> → the mirror pattern; first is <code>arr[0]</code></li>
      <li><strong>.at()</strong> → the modern method that supports negative indexes</li>
      <li><strong>.pop()</strong> → the method that reads AND removes the last item</li>
      <li><strong>.push()</strong> → adds a new item to the end; the pushed item becomes the new last</li>
      <li><strong>Bracket notation</strong> → the underlying read operation; used with <code>length - 1</code></li>
      <li><strong>Optional chaining (<code>?.</code>)</strong> → safely reads properties when the last item might not exist</li>
      <li><strong>Empty array handling</strong> → last-item access returns <code>undefined</code>; guard against that</li>
      <li><strong>Sorting and filtering</strong> → changes which item is "last"; don't cache the position</li>
      <li><strong>Debugging</strong> → most last-item bugs are off-by-one or empty-array crashes</li>
    </ul>
  `,

  /* 3.3 See also */
  'topics-9-7-3-3': `
    <ul>
      <li>First item</li>
      <li>Array indexes</li>
      <li>Array .length</li>
      <li>Reading items with bracket notation</li>
      <li>.at() modern accessor</li>
      <li>.pop() — remove and return last</li>
      <li>Adding items with .push()</li>
      <li>Optional chaining</li>
      <li>Common array mistakes</li>
    </ul>
  `,

  /* ========================================================= 
   Sub-lesson: 3.10.10 Arrays → reading items with bracket notation
 =======================================================*/

  /* --- Chunk 0: What & How --- */

  /* 0.0 What it is */
  'topics-9-9-0-0': `
    <p><strong>Bracket notation</strong> is the standard way to read a specific item out of an array. You write the array's variable name, followed by square brackets containing the index of the item you want: <code>colors[0]</code>, <code>users[3]</code>, <code>scores[i]</code>. JavaScript looks up whatever is stored at that position and hands it back to you as a value. This is the same brackets you use when creating an array (<code>[1, 2, 3]</code>), but now they're doing a different job — access instead of creation.</p>
    <p>The syntax is intentionally short because reading items is the most common thing you do with arrays. You'll write brackets thousands of times: in loops (<code>arr[i]</code>), in conditionals (<code>if (users[0].role === 'admin')</code>), in expressions (<code>total + prices[i]</code>). It's worth internalizing the exact behavior once — what happens with valid indexes, invalid indexes, negative numbers, and the various edge cases — so you can read code that uses brackets without slowing down.</p>
  `,

  /* 0.1 Syntax */
  'topics-9-9-0-1': `
<pre class="language-javascript"><code class="language-javascript">const colors = ['red', 'green', 'blue'];

// Basic access — variable name, then brackets with the index
colors[0];              // "red"    — first item
colors[1];              // "green"  — second item
colors[2];              // "blue"   — last item

// The index can be a variable or an expression
const i = 1;
colors[i];              // "green"
colors[i + 1];          // "blue"
colors[colors.length - 1];  // "blue" — last item (index length - 1)

// Out of bounds — no error, just undefined
colors[3];              // undefined
colors[999];            // undefined
colors[-1];             // undefined (brackets don't do negative indexes)

// Using .at() for negative indexes (modern)
colors.at(0);           // "red"
colors.at(-1);          // "blue"  — last item
colors.at(-2);          // "green" — second-to-last

// Whatever you get is a real JavaScript value with its own type
typeof colors[0];       // "string"
colors[0].toUpperCase(); // "RED" — call methods on the returned value

// If the item is an object, you can chain into its properties
const users = [{ name: 'Os' }, { name: 'Sam' }];
users[0].name;          // "Os"
users[0]['name'];       // "Os" — same thing, object bracket notation

// Optional chaining prevents errors when the item might not exist
users[99]?.name;        // undefined — no throw

// Wrong: dot notation with a number
colors.0;               // SyntaxError — can't use dot with numeric keys
// fix: use brackets
colors[0];              // "red"

// Wrong: brackets around the variable name
[colors]0;              // SyntaxError — brackets go after, not around</code></pre>
  `,

  /* 0.2 Anatomy / Breakdown */
  'topics-9-9-0-2': `
<pre class="language-javascript"><code class="language-javascript">const colors = ['red', 'green', 'blue'];
const item = colors[1];

// Breaking down the access expression:
//
//   colors[1]
//   │      │
//   │      └── the INDEX — a number telling JS which position to read
//   └───────── the ARRAY — the container you're reading from
//
// The brackets are the ACCESS OPERATOR. They tell JS:
// "look up the value stored at this position in this array."

// Step by step, what JS does when it evaluates colors[1]:
//
// 1. Evaluate 'colors' — get the array reference
// 2. Evaluate '1' — get the number 1 (the index)
// 3. Look up position 1 in the array
// 4. Return the value at that position — "green"

// The returned value has no connection to the array anymore.
// It's just a value:
const item = colors[1];
// item is now the string "green"
// You could delete the array and 'item' would still hold "green"
// (for primitives — for objects, see the reference discussion in "array items")

// For objects, the returned value is a REFERENCE — see lesson 3.10.4

// Bracket notation is a READ by default. To WRITE, put it on the left of =:
colors[1] = 'lime';       // WRITE — replaces position 1
const x = colors[1];      // READ — copies out the current value

// The brackets syntax doesn't change; what changes is which side of = it's on.</code></pre>
  `,

  /* 0.3 Syntax Details That Matter */
  'topics-9-9-0-3': `
    <p><strong>The index must be a valid non-negative integer to find an item.</strong> Any other index — negative, non-integer, string that doesn't look like a number, or a number beyond the array's length — returns <code>undefined</code>. JavaScript doesn't throw. This is safer than crashing but means bad indexes silently produce bad values.</p>
<pre class="language-javascript"><code class="language-javascript">const items = ['a', 'b', 'c'];
items[0];             // "a" — valid
items[2];             // "c" — valid (last)
items[3];             // undefined — past the end
items[-1];            // undefined — negative doesn't work with brackets
items[1.5];           // undefined — non-integer
items['hello'];       // undefined — non-numeric string</code></pre>

    <p><strong>Negative indexes are silently ignored by brackets.</strong> <code>arr[-1]</code> is NOT the last item — it's <code>undefined</code>. If you want the last item without doing math, use <code>arr.at(-1)</code>, which is a modern method built for exactly this purpose. Otherwise use <code>arr[arr.length - 1]</code>.</p>
<pre class="language-javascript"><code class="language-javascript">const items = ['a', 'b', 'c'];
items[-1];                       // undefined
items.at(-1);                    // "c"
items[items.length - 1];         // "c"</code></pre>

    <p><strong>The index can be any expression that evaluates to a number.</strong> A literal number, a variable, a math expression, a function call, another array lookup — anything that produces a number is fair game. JavaScript evaluates the expression first, then uses the result as the index.</p>
<pre class="language-javascript"><code class="language-javascript">const items = ['a', 'b', 'c', 'd'];
const i = 2;
items[i];                     // "c"
items[i + 1];                 // "d"
items[Math.floor(Math.random() * items.length)];  // random item
items[getIndex()];            // whatever getIndex() returns
items[users.indexOf(current)];// index looked up from another array</code></pre>

    <p><strong>Bracket notation returns the value at that position, not a "pointer" to the array.</strong> When you do <code>const x = arr[0]</code>, <code>x</code> holds a copy of the value if it's a primitive (number, string, boolean, null, undefined), or a reference if it's an object. Modifying <code>x</code> won't affect the array for primitives; for objects, modifying <code>x</code>'s properties WILL affect the array's item because both point to the same object. This is covered in more depth in "array items/elements" — bracket notation is where you first encounter it.</p>

    <p><strong>Bracket notation works on any string-like array-like object.</strong> Strings (<code>'hello'[0]</code>), function arguments (<code>arguments[0]</code>), NodeLists (<code>links[0]</code>), and other iterables all support bracket-based reading. The syntax is consistent, so once you learn it for arrays, you can use it everywhere.</p>
<pre class="language-javascript"><code class="language-javascript">'hello'[0];                           // "h" — strings support brackets
document.querySelectorAll('a')[0];    // first &lt;a&gt; element
[[1, 2], [3, 4]][0];                  // [1, 2] — first item is itself an array
[[1, 2], [3, 4]][0][1];               // 2 — chain brackets for nested access</code></pre>

    <p><strong>Chain brackets to reach into nested structures.</strong> <code>grid[0][1]</code> reads the array at position 0 of <code>grid</code>, then the item at position 1 of that array. Same rule applies for arrays of objects with array properties: <code>users[0].orders[2]</code>. Each pair of brackets is one lookup.</p>
  `,

  /* --- Chunk 1: Why & When --- */

  /* 1.0 What problem it solves */
  'topics-9-9-1-0': `
    <p>An array is worthless if you can't reach into it and get specific values back out. Storing 100 items in a container is only useful if you have a way to say "give me item 27." Bracket notation is that mechanism — the one you'll use every time you need to read a value from a specific position, whether that's the first item, the last item, the item at some index computed by your loop counter, or the item that another function just told you about.</p>
    <p>The specific problem the syntax solves is <em>positional lookup</em>. Given an array and a number, hand me back the value at that position. Not "find the value that matches this criteria" (that's <code>.find()</code>). Not "give me all values that match" (that's <code>.filter()</code>). Just "give me the value at this specific index, right now." Bracket notation is the fastest, most direct way to do that — no method call, no callback, just a lookup by position.</p>
  `,

  /* 1.1 Why use it */
  'topics-9-9-1-1': `
    <p>Use bracket notation any time you need one specific item and you already know its position. If you know you want the first item, that's <code>arr[0]</code>. If you're inside a <code>for</code> loop with counter <code>i</code>, that's <code>arr[i]</code>. If you just called <code>.indexOf()</code> or <code>.findIndex()</code> and got a position back, that's <code>arr[thatIndex]</code>. All of these are the moment where "I know which slot" is true, and bracket notation is the tool.</p>
    <p>Don't use bracket notation to search — if you don't already know the position, don't hunt for it manually with a loop. Use <code>.find()</code> to get an item by criteria, <code>.findIndex()</code> if you want its position, <code>.includes()</code> to check yes/no, <code>.filter()</code> for all matches. These are purpose-built for those jobs and read cleaner than a manual bracket loop.</p>
    <p>Also don't use bracket notation to iterate when a cleaner alternative exists. <code>for...of</code> gives you the items directly without indexes. <code>.forEach()</code>, <code>.map()</code>, <code>.filter()</code> handle the iteration for you. Save bracket notation for cases where you specifically need the index — building lookup tables, working with two arrays in parallel by position, implementing algorithms where position matters (sorting, searching, matrix operations).</p>
  `,

  /* 1.2 Where you use it */
  'topics-9-9-1-2': `
<pre class="language-javascript"><code class="language-javascript">// Reading a specific position you already know
const first = users[0];
const last = users[users.length - 1];

// Inside a for loop with an index counter
for (let i = 0; i < items.length; i++) {
  console.log(i, items[i]);
}

// After a search that returned an index
const idx = users.findIndex(u => u.id === 42);
if (idx !== -1) {
  const user = users[idx];
}

// Comparing two arrays position by position
for (let i = 0; i < arr1.length; i++) {
  if (arr1[i] !== arr2[i]) {
    // mismatch at index i
  }
}

// Random item selection
const quotes = ['Just do it.', 'Think different.', 'Stay hungry.'];
const random = quotes[Math.floor(Math.random() * quotes.length)];

// Reaching into a nested array (grid, matrix)
const board = [
  [' ', ' ', 'X'],
  [' ', 'O', ' '],
  ['X', ' ', ' '],
];
board[0][2];        // 'X' — top-right cell
board[2][0];        // 'X' — bottom-left cell

// Reading a property of an item in an array
const currentUser = users[currentIndex].name;

// Working with parallel arrays (rare but sometimes practical)
const names = ['Os', 'Sam', 'Alex'];
const ages = [30, 25, 42];
for (let i = 0; i < names.length; i++) {
  console.log(\`\${names[i]} is \${ages[i]}\`);
}

// Any time you have "which position" as a known number, brackets give
// you the value at that position.</code></pre>
  `,

  /* 1.3 Plain English explanation */
  'topics-9-9-1-3': `
    <p>Think of an array like a row of lockers, each with a number on it. Bracket notation is the act of walking up to a specific locker and opening it to see what's inside. You tell the row "locker 3, please" — and it hands you whatever is in locker 3. You don't have to search, you don't have to guess, you just say the number and get the contents.</p>
    <p>The row is happy to open ANY locker you ask for. Locker 0? Sure, here's what's inside. Locker 999? Sure — but there's no locker 999, so you get nothing back (that's <code>undefined</code>). Locker -1? Same thing — no such locker, nothing back. The row doesn't warn you or complain; it just tells you honestly what's in the slot you asked about.</p>
    <p>Once you've opened the locker and pulled the contents out, that's now yours — you're holding a shirt, a phone, whatever. If the locker held a piece of paper, you have a copy of the paper. If the locker held a car key, you have a copy of the key that opens the same car. This is the primitive-vs-reference thing from the "array items" lesson: primitives are copied, objects are shared references. But mechanically, the process of opening the locker and pulling out the contents is always the same — bracket notation just hands you what's in the slot.</p>
  `,

  /* 1.4 Mental model */
  'topics-9-9-1-4': `
    <p>Bracket notation is a lookup operation: given an array and an index, return the value at that position. The array is a numbered set of slots; the index tells JavaScript which slot; the returned value is whatever's currently in that slot. That's the entire mechanism. Nothing else happens — no iteration, no searching, no comparison. Just a direct O(1) lookup.</p>
    <p>The key mental model: <em>brackets on the right side of <code>=</code> means READ; brackets on the left side means WRITE</em>. The syntax is identical either way — <code>arr[i]</code> — but the meaning flips based on position. <code>const x = arr[0]</code> reads the current value at position 0 into <code>x</code>. <code>arr[0] = x</code> writes <code>x</code> into position 0. Same brackets, opposite direction. Once you see this, the whole read/write API for arrays becomes one consistent syntax with one rule.</p>
    <p>The other mental model that matters: <em>the returned value is what's there NOW</em>. If the array had different contents earlier, bracket notation gives you the current contents. If someone else modifies the array in between the moment you write the code and the moment it runs, you'll get the new value, not the old one. This is why bracket notation inside a loop always reflects the current state — every iteration re-reads the position.</p>
    <p>Bracket notation is also non-destructive for reading. Reading <code>arr[0]</code> does not remove the item, does not shift the array, does not do anything to the array. The value is still at position 0 after you read it. This is different from methods like <code>.shift()</code> or <code>.pop()</code>, which read AND remove.</p>
  `,

  /* 1.5 Step-by-step walkthrough */
  'topics-9-9-1-5': `
<pre class="language-javascript"><code class="language-javascript">// Scenario: given a list of scores, find and display the highest one
// along with its position in the list.
const scores = [72, 85, 90, 65, 100, 88];

let highestScore = scores[0];   // start with the first
let highestIndex = 0;

for (let i = 1; i < scores.length; i++) {
  if (scores[i] > highestScore) {
    highestScore = scores[i];
    highestIndex = i;
  }
}

console.log(\`Highest: \${highestScore} at position \${highestIndex}\`);
// "Highest: 100 at position 4"

// What JS does, step by step, focusing on the bracket lookups:

// Step 1: scores[0] evaluates to 72.
//         highestScore = 72
//         highestIndex = 0

// Step 2: Loop starts with i = 1.
//         scores[1] evaluates to 85.
//         85 > 72 is true.
//         highestScore = 85
//         highestIndex = 1

// Step 3: i = 2.
//         scores[2] evaluates to 90.
//         90 > 85 is true.
//         highestScore = 90
//         highestIndex = 2

// Step 4: i = 3.
//         scores[3] evaluates to 65.
//         65 > 90 is false. Skip the update.

// Step 5: i = 4.
//         scores[4] evaluates to 100.
//         100 > 90 is true.
//         highestScore = 100
//         highestIndex = 4

// Step 6: i = 5.
//         scores[5] evaluates to 88.
//         88 > 100 is false. Skip.

// Step 7: i = 6. Condition i < scores.length (i < 6) is false. Loop ends.

// Step 8: The console.log outputs "Highest: 100 at position 4".

// Observations:
//   - Bracket notation was used 7 times in this loop (once outside, six inside).
//   - Each bracket lookup is fast and independent — same performance
//     for position 0 or position 999.
//   - The array wasn't modified — reading doesn't change anything.
//   - The pattern "arr[i] compared to something" is the fundamental shape
//     of most array algorithms.

// Modern equivalent using array methods (no manual brackets):
const highest = Math.max(...scores);
const index = scores.indexOf(highest);
// Both approaches work. The bracket-and-loop version is more verbose
// but shows exactly what's happening at each step — useful when learning,
// and sometimes clearer for beginners than the method-chain version.</code></pre>
  `,

  /* --- Chunk 2: The Click --- */

  /* 2.0 Debugging clue */
  'topics-9-9-2-0': `
    <p>Bracket-notation bugs cluster around a handful of patterns.</p>
    <p><strong>1. Off-by-one on first or last.</strong> You wrote <code>arr[1]</code> expecting the first item (it's the second) or <code>arr[arr.length]</code> expecting the last (it's <code>undefined</code>). Fix: first is <code>arr[0]</code>, last is <code>arr[arr.length - 1]</code> or <code>arr.at(-1)</code>.</p>
    <p><strong>2. Reading undefined and getting a downstream error.</strong> You wrote <code>users[99].name</code> but there's no user at index 99. <code>users[99]</code> returns <code>undefined</code>, and <code>undefined.name</code> throws <code>TypeError: Cannot read property 'name' of undefined</code>. Fix: check the index first, or use optional chaining: <code>users[99]?.name</code>.</p>
    <p><strong>3. Negative index returning <code>undefined</code>.</strong> You wrote <code>arr[-1]</code> expecting the last item (a habit from Python or Ruby). JavaScript brackets don't support negative indexes. Fix: <code>arr.at(-1)</code> or <code>arr[arr.length - 1]</code>.</p>
    <p><strong>4. String index that "looks numeric" behaves oddly.</strong> You wrote <code>arr['1']</code> and it worked because JS coerced the string to a number, but <code>arr['01']</code> or <code>arr[' 1 ']</code> or <code>arr['1abc']</code> won't work. Fix: keep indexes as actual numbers, not strings.</p>
    <p><strong>5. Loop bound off by one.</strong> You wrote <code>for (let i = 0; i &lt;= arr.length; i++)</code> and the last iteration reads position <code>length</code>, which is <code>undefined</code>. Fix: <code>&lt;</code>, not <code>&lt;=</code>.</p>
    <p><strong>6. Modifying and reading in the same expression.</strong> You wrote <code>arr[i++]</code> or <code>arr[--i]</code> and got confused about which value <code>i</code> had when the bracket ran. Fix: split into two lines. Do the increment/decrement first, then use the bracket separately.</p>
    <p><strong>7. Bracket returns an object, and you use it as a primitive.</strong> You wrote <code>users[0] + 1</code> expecting a number, but got <code>"[object Object]1"</code>. Fix: reach into the object's specific property: <code>users[0].age + 1</code>.</p>
    <p><strong>8. Confusing bracket read with bracket write.</strong> <code>arr[0]</code> alone in an expression reads. <code>arr[0] = x</code> writes. Two different jobs, same syntax; the difference is whether the brackets appear on the left of <code>=</code>.</p>
  `,

  /* 2.1 The part that makes it click */
  'topics-9-9-2-1': `
    <p>Bracket notation is a lookup: array plus index gives you the value at that position. It never searches, never iterates, never modifies. It just reaches into a specific slot and hands back what's there — or <code>undefined</code> if there's nothing there. The operation is instant, safe (never throws), and works for any valid array-like object in JavaScript.</p>
    <p>The other click: bracket notation is the read operation; assignment via brackets (<code>arr[i] = x</code>) is the write. Same syntax, opposite direction. Once you see that pattern, the whole array read/write API is one consistent syntax rule — brackets on the left of <code>=</code> is write, everywhere else is read. This symmetry makes bracket notation more powerful than it first appears: with just this one syntax, you can read any position, write any position, add to the end (<code>arr[arr.length] = x</code>), or extend past the end (which fills gaps with holes — usually not what you want, but legal).</p>
  `,

  /* 2.2 Common confusions */
  'topics-9-9-2-2': `
    <p><strong>Confusion: "brackets are the same as dot notation, just for numbers"</strong></p>
    <p>They're similar but not identical. Dot notation (<code>obj.name</code>) works for property access when the key is a valid identifier (letters, digits, underscores, no starting digit). Bracket notation (<code>obj['name']</code> or <code>arr[0]</code>) works for any key, including numbers and strings with special characters. Arrays specifically require brackets for numeric access — <code>arr.0</code> is a syntax error.</p>

    <p><strong>Confusion: "bracket notation throws when the index is out of bounds"</strong></p>
    <p>It doesn't. Out-of-bounds reads silently return <code>undefined</code>. This is safer than crashing but can propagate bad values downstream if you don't check.</p>

    <p><strong>Confusion: "arr[-1] gives the last item"</strong></p>
    <p>It doesn't — bracket notation doesn't understand negative indexes. Use <code>arr.at(-1)</code> or <code>arr[arr.length - 1]</code>. The Python habit doesn't carry over.</p>

    <p><strong>Confusion: "reading with brackets removes or affects the array"</strong></p>
    <p>It doesn't. Reads are non-destructive. The item stays at its position. Compare with <code>.shift()</code> or <code>.pop()</code>, which read AND remove.</p>

    <p><strong>Confusion: "brackets and .at() do exactly the same thing"</strong></p>
    <p>They're almost identical for non-negative indexes. The main difference: <code>.at()</code> supports negative indexes (<code>arr.at(-1)</code> is the last item), while brackets don't. Otherwise they behave the same for reading. <code>.at()</code> is read-only; you can't do <code>arr.at(0) = x</code>.</p>

    <p><strong>Confusion: "bracket notation on a string returns a character"</strong></p>
    <p>It returns a one-character string, not a "char" type. JavaScript doesn't have a separate char type. <code>'hello'[0]</code> returns the string <code>"h"</code>, which has its own <code>.length</code>, methods, etc.</p>

    <p><strong>Confusion: "if the array is const, I can't use bracket assignment"</strong></p>
    <p>You can. <code>const</code> prevents reassigning the variable itself (<code>colors = ['new']</code>), but it doesn't prevent modifying the array's contents. <code>colors[0] = 'x'</code> is allowed on a <code>const</code> array.</p>

    <p><strong>Confusion: "chained brackets like arr[0][1][2] are a different feature"</strong></p>
    <p>They're not — each pair of brackets is just one lookup, and the result of one lookup becomes the target of the next. <code>arr[0][1]</code> is <code>(arr[0])[1]</code>: first find <code>arr[0]</code>, then find position 1 in whatever that is.</p>
  `,

  /* 2.3 Common mistakes */
  'topics-9-9-2-3': `
<pre class="language-javascript"><code class="language-javascript">// Off-by-one on first
const items = ['a', 'b', 'c'];
const first = items[1];
// wrong: items[1] is "b", not "a"
// fix: first is at index 0
const first2 = items[0];</code></pre>

<pre class="language-javascript"><code class="language-javascript">// Off-by-one on last
const items = ['a', 'b', 'c'];
const last = items[items.length];
// wrong: items[3] is undefined — length is 3, last valid index is 2
// fix: use length - 1 or .at(-1)
const last2 = items[items.length - 1];   // "c"
const last3 = items.at(-1);              // "c"</code></pre>

<pre class="language-javascript"><code class="language-javascript">// Reading past the end and accessing a property
const users = [{ name: 'Os' }];
const name = users[5].name;
// wrong: users[5] is undefined — .name on undefined throws
// fix: check first, or use optional chaining
const name2 = users[5]?.name;    // undefined, no error</code></pre>

<pre class="language-javascript"><code class="language-javascript">// Using negative index expecting Python-style behavior
const items = ['a', 'b', 'c'];
const last = items[-1];
// wrong: items[-1] is undefined
// fix: use .at(-1) or length - 1
const last2 = items.at(-1);      // "c"</code></pre>

<pre class="language-javascript"><code class="language-javascript">// Loop bound uses <= instead of 
const items = ['a', 'b', 'c'];
for (let i = 0; i <= items.length; i++) {
  console.log(items[i]);
}
// wrong: last iteration reads items[3], which is undefined
// fix: use 
for (let i = 0; i < items.length; i++) {
  console.log(items[i]);
}</code></pre>

<pre class="language-javascript"><code class="language-javascript">// Trying dot notation with a number
const items = ['a', 'b', 'c'];
const first = items.0;
// wrong: SyntaxError — can't use dot with numeric keys
// fix: use brackets
const first2 = items[0];</code></pre>

<pre class="language-javascript"><code class="language-javascript">// Modifying the counter in the same line as the lookup
let i = 0;
const items = ['a', 'b', 'c'];
const value = items[i++];
// works but confusing — value is "a", i is now 1
// fix: split into two lines for clarity
const value2 = items[i];
i++;</code></pre>

<pre class="language-javascript"><code class="language-javascript">// Treating undefined result as a valid item
const items = ['a', 'b'];
const third = items[2];
console.log(third.toUpperCase());
// wrong: third is undefined — throws
// fix: check first
if (third) console.log(third.toUpperCase());
// or use optional chaining
console.log(items[2]?.toUpperCase());   // undefined, no throw</code></pre>

<pre class="language-javascript"><code class="language-javascript">// Reading an object item and using it directly in string ops
const users = [{ name: 'Os' }];
const greeting = 'Hello, ' + users[0];
// wrong: "Hello, [object Object]"
// fix: reach into the property you want
const greeting2 = 'Hello, ' + users[0].name;   // "Hello, Os"</code></pre>
  `,

  /* --- Chunk 3: In Practice --- */

  /* 3.0 Tiny examples */
  'topics-9-9-3-0': `
<pre class="language-javascript"><code class="language-javascript">const colors = ['red', 'green', 'blue'];

// Basic access
colors[0];              // "red"
colors[1];              // "green"
colors[2];              // "blue"

// Out of bounds
colors[3];              // undefined
colors[100];            // undefined
colors[-1];             // undefined

// .at() for negative
colors.at(-1);          // "blue"
colors.at(-2);          // "green"

// Last item, standard patterns
colors[colors.length - 1];   // "blue"
colors.at(-1);               // "blue"

// Index as a variable
const i = 1;
colors[i];              // "green"

// Index as an expression
colors[colors.length / 2 - 0.5 | 0];    // some middle-ish
colors[Math.floor(Math.random() * colors.length)];   // random

// Chained for nested arrays
const grid = [[1, 2], [3, 4]];
grid[0];                // [1, 2]
grid[0][1];             // 2
grid[1][0];             // 3

// Chained for arrays of objects
const users = [{ name: 'Os' }, { name: 'Sam' }];
users[0];               // { name: 'Os' }
users[0].name;          // "Os"
users[0]['name'];       // "Os" — object bracket notation
users[1].name;          // "Sam"

// Optional chaining for missing items
users[99]?.name;        // undefined — no throw

// Type of the returned value
typeof colors[0];       // "string"
typeof [1, 2, 3][0];    // "number"
typeof [true][0];       // "boolean"

// Bracket notation on strings too
'hello'[0];             // "h"
'hello'[4];             // "o"
'hello'.at(-1);         // "o"</code></pre>
  `,

  /* 3.1 Real website uses */
  'topics-9-9-3-1': `
    <p><strong>Example: reading the first item of a search-results list</strong></p>
<pre class="language-javascript"><code class="language-javascript">const topResult = results[0];
if (topResult) render(topResult);</code></pre>

    <p><strong>Example: using an index from findIndex to grab the item</strong></p>
<pre class="language-javascript"><code class="language-javascript">const idx = users.findIndex(u => u.id === targetId);
if (idx !== -1) {
  const user = users[idx];
  renderUserCard(user);
}</code></pre>

    <p><strong>Example: iterating with a counter to render list items with numbering</strong></p>
<pre class="language-javascript"><code class="language-javascript">for (let i = 0; i < tasks.length; i++) {
  console.log(\`\${i + 1}. \${tasks[i]}\`);
}</code></pre>

    <p><strong>Example: picking a random quote for a splash screen</strong></p>
<pre class="language-javascript"><code class="language-javascript">const quotes = ['Just do it.', 'Think different.', 'Stay hungry.'];
splash.textContent = quotes[Math.floor(Math.random() * quotes.length)];</code></pre>

    <p><strong>Example: reading a specific cell from a 2D grid</strong></p>
<pre class="language-javascript"><code class="language-javascript">const board = getGameBoard();
const centerCell = board[1][1];    // row 1, column 1
if (centerCell === 'X') { /* ... */ }</code></pre>

    <p><strong>Example: getting the last message in a chat history</strong></p>
<pre class="language-javascript"><code class="language-javascript">const lastMessage = messages.at(-1);
if (lastMessage) scrollToMessage(lastMessage.id);</code></pre>

    <p><strong>Example: safely reading a form field's Nth checkbox</strong></p>
<pre class="language-javascript"><code class="language-javascript">const checkboxes = document.querySelectorAll('input[type="checkbox"]');
const third = checkboxes[2];
if (third) third.checked = true;</code></pre>
  `,

  /* 3.2 Connects to */
  'topics-9-9-3-2': `
    <ul>
      <li><strong>Array indexes</strong> → the numbers you pass into the brackets</li>
      <li><strong>Array .length</strong> → the total count; last valid index is <code>length - 1</code></li>
      <li><strong>Updating items</strong> → the write side of the same bracket syntax (<code>arr[i] = value</code>)</li>
      <li><strong>Array items/elements</strong> → what the returned value is; primitive vs reference behavior</li>
      <li><strong>.at()</strong> → the modern accessor that supports negative indexes</li>
      <li><strong>.find(), .findIndex()</strong> → the search alternatives when you don't know the position</li>
      <li><strong>.includes()</strong> → yes/no check when you don't need the position at all</li>
      <li><strong>Optional chaining (<code>?.</code>)</strong> → prevents errors when the item might not exist</li>
      <li><strong>Nested arrays</strong> → chain brackets for multi-dimensional access</li>
      <li><strong>Strings</strong> → also support bracket notation for character access</li>
      <li><strong>NodeList / HTMLCollection</strong> → array-like; brackets work the same way</li>
      <li><strong>Debugging</strong> → most bracket-notation bugs are off-by-one or reading past the end</li>
    </ul>
  `,

  /* 3.3 See also */
  'topics-9-9-3-3': `
    <ul>
      <li>Array indexes</li>
      <li>First item</li>
      <li>Last item</li>
      <li>Array .length</li>
      <li>Updating items</li>
      <li>.at() modern accessor</li>
      <li>Array items/elements</li>
      <li>Optional chaining</li>
      <li>Nested arrays</li>
      <li>Common array mistakes</li>
    </ul>
  `,

  /* ========================================================= 
     Sub-lesson: 3.10.10 Arrays → updating items
   =======================================================*/

  /* --- Chunk 0: What & How --- */

  /* 0.0 What it is */
  'topics-9-10-0-0': `
    <p>The <code>=</code> assignment operator with bracket notation is how you change what's stored at a specific position in an array. You write the array's variable name, followed by square brackets containing the index you want to change, followed by <code>=</code> and the new value: <code>colors[0] = 'crimson'</code>, <code>users[3] = newUser</code>, <code>scores[i] = 100</code>. (The <code>i</code> in that last one is just a variable holding an index — <code>i</code> is a common convention short for "index," not required syntax; any variable name, literal number, or expression that produces a number works the same way.) JavaScript replaces whatever was at that position with the value on the right side of <code>=</code>. Nothing else in the array is touched — same length, same other items, just that one slot changed.</p>
    <p>This is the write side of the same bracket syntax you already know for reading. The brackets and index look identical to <code>arr[0]</code>; the only difference is that they appear on the left side of an <code>=</code>. That symmetry is the whole API: brackets on the right of <code>=</code> read the position, brackets on the left of <code>=</code> write to it. Once you learn one, you know the other — and this single mechanism handles everything from replacing an item you already have to extending the array past its current end.</p>
  `,

  /* 0.1 Syntax */
  'topics-9-10-0-1': `
<pre class="language-javascript"><code class="language-javascript">const colors = ['red', 'green', 'blue'];

// Basic write — replace the value at a specific index
colors[0] = 'crimson';       // colors is now ['crimson', 'green', 'blue']
colors[1] = 'lime';          // colors is now ['crimson', 'lime', 'blue']
colors[2] = 'navy';          // colors is now ['crimson', 'lime', 'navy']

// The index can be a variable or an expression
const i = 1;
colors[i] = 'olive';                    // writes at position 1
colors[i + 1] = 'teal';                 // writes at position 2
colors[colors.length - 1] = 'indigo';   // writes at the last position

// Writing at an index that doesn't exist yet EXTENDS the array
const items = ['a', 'b'];
items[2] = 'c';              // items is now ['a', 'b', 'c'] — length grew to 3
items[5] = 'f';              // items is now ['a', 'b', 'c', empty, empty, 'f']
                             // length is 6, positions 3 and 4 are HOLES

// Any value type is allowed on the right
colors[0] = 42;              // numbers work
colors[1] = true;            // booleans work
colors[2] = { hex: '#f00' }; // objects work
colors[0] = null;            // null works
colors[1] = undefined;       // even undefined works

// Writing into a nested array — chain brackets on the left
const grid = [[1, 2], [3, 4]];
grid[0][1] = 99;             // grid is now [[1, 99], [3, 4]]

// Writing a property on an object item — dot after the brackets
const users = [{ name: 'Os' }, { name: 'Sam' }];
users[0].name = 'Osiris';    // users[0] is now { name: 'Osiris' }

// const does NOT block bracket assignment
const fixed = ['a', 'b'];
fixed[0] = 'z';              // allowed — const locks the reference, not the contents
fixed = ['x', 'y'];          // TypeError — reassigning the variable is blocked

// Wrong: negative indexes silently create weird string keys, not "last"
colors[-1] = 'oops';         // does NOT set the last item — see the details piece

// Wrong: .at() is read-only
colors.at(0) = 'x';          // SyntaxError — .at() can't be on the left of =</code></pre>
  `,

  /* 0.2 Anatomy / Breakdown */
  'topics-9-10-0-2': `
<pre class="language-javascript"><code class="language-javascript">const colors = ['red', 'green', 'blue'];
colors[1] = 'lime';

// Breaking down the assignment expression:
//
//   colors[1] = 'lime';
//   │      │  │    │
//   │      │  │    └── the NEW VALUE — what will replace the current contents
//   │      │  └─────── the ASSIGNMENT OPERATOR — "put the right side into the left slot"
//   │      └────────── the INDEX — which position to write to
//   └───────────────── the ARRAY — the container you're writing into
//
// The brackets are still the ACCESS OPERATOR. Their position relative
// to = decides whether they READ or WRITE:
//
//   const x = colors[1];    // brackets on the RIGHT of = → READ
//   colors[1] = 'lime';     // brackets on the LEFT  of = → WRITE

// Step by step, what JS does when it evaluates colors[1] = 'lime':
//
// 1. Evaluate 'lime' — the right side. Get the string "lime".
// 2. Evaluate 'colors' — get the array reference.
// 3. Evaluate '1' — get the number 1 (the index).
// 4. Store "lime" at position 1 of the array.
// 5. Return the value that was written ("lime") as the expression's result.

// That last step matters: assignment is itself an expression, not just a statement.
// It returns the assigned value, so you can chain or capture it:
const written = (colors[0] = 'scarlet');
// colors[0] is now "scarlet", and 'written' also holds "scarlet".

// You can even chain multiple writes:
colors[0] = colors[1] = colors[2] = 'black';
// All three positions are now "black".
// (Reads right-to-left: set colors[2]='black', that returns 'black',
//  which then gets written into colors[1], which returns 'black' again,
//  which gets written into colors[0].)

// The array is MODIFIED IN PLACE. There is no new array.
// Any other variable pointing to the same array sees the change:
const alias = colors;
colors[0] = 'white';
// alias[0] is now "white" too — same array, one reference change is visible everywhere.</code></pre>
  `,

  /* 0.3 Syntax Details That Matter */
  'topics-9-10-0-3': `
    <p><strong>Bracket-on-left is a write; bracket-on-right is a read.</strong> The syntax is identical either way. The only thing that flips it from read to write is whether the brackets are on the left side of an <code>=</code>. This is the entire rule. Once you see it, the whole array read/write API collapses into one consistent pattern.</p>
<pre class="language-javascript"><code class="language-javascript">const arr = ['a', 'b', 'c'];
const x = arr[0];       // READ — brackets on right of =
arr[0] = 'z';           // WRITE — brackets on left of =</code></pre>

    <p><strong>Writing at an out-of-bounds index extends the array and creates HOLES.</strong> If you write to index <code>10</code> in a 3-item array, the array's <code>length</code> becomes <code>11</code>, positions <code>3</code> through <code>9</code> become empty slots ("holes"), and reading them returns <code>undefined</code>. The array is now "sparse." This is legal but almost never what you want — use <code>.push()</code> to append cleanly, and only write directly to an index if you already know that slot should exist.</p>
<pre class="language-javascript"><code class="language-javascript">const items = ['a', 'b', 'c'];
items[10] = 'z';
console.log(items.length);   // 11
console.log(items[5]);       // undefined
console.log(items);          // ['a', 'b', 'c', empty × 7, 'z']</code></pre>

    <p><strong>Negative and non-numeric indexes don't behave the way you'd expect.</strong> <code>arr[-1] = 'x'</code> does NOT set the last item — it adds a property literally named <code>"-1"</code> to the array object, which doesn't count toward <code>.length</code> and won't show up in loops or most methods. Same for string keys like <code>arr['name'] = 'x'</code>. Arrays are objects underneath, so this is technically allowed, but it defeats the point of using an array. If you want to write to the last item, use <code>arr[arr.length - 1] = x</code>.</p>
<pre class="language-javascript"><code class="language-javascript">const items = ['a', 'b', 'c'];
items[-1] = 'z';
console.log(items.length);            // still 3
console.log(items);                   // ['a', 'b', 'c']  ← 'z' is hidden
console.log(items[-1]);               // 'z'  ← it's there, but as a property
items[items.length - 1] = 'z';        // this is how you replace the last item
console.log(items);                   // ['a', 'b', 'z']</code></pre>

    <p><strong><code>const</code> does NOT prevent bracket assignment.</strong> <code>const</code> locks the variable to a specific array reference — you can't reassign the variable to a different array. But the array's contents are still mutable. <code>arr[0] = x</code> changes what's inside the array without changing which array the variable points to, so it's allowed. If you need a truly frozen array, use <code>Object.freeze(arr)</code>.</p>
<pre class="language-javascript"><code class="language-javascript">const arr = ['a', 'b'];
arr[0] = 'z';               // OK — modifying contents
arr = ['x', 'y'];           // TypeError — reassigning the variable
const frozen = Object.freeze(['a', 'b']);
frozen[0] = 'z';            // silently ignored (or throws in strict mode)</code></pre>

    <p><strong>Bracket assignment mutates the array in place — every reference to it sees the change.</strong> Arrays are reference types. If two variables point to the same array (or if the array was passed into a function), writing to a position updates the one and only underlying array. Every reference now sees the new value. This is different from primitives, where copying a value gives you a separate independent copy.</p>
<pre class="language-javascript"><code class="language-javascript">const original = [1, 2, 3];
const alias = original;
alias[0] = 99;
console.log(original);        // [99, 2, 3] — the original changed too</code></pre>

    <p><strong>Assignment is an expression and returns the assigned value.</strong> <code>arr[0] = 'x'</code> is not just a statement — the whole thing evaluates to <code>'x'</code>. That's why chained assignments (<code>a = b = c = 5</code>) work and why you can wrap an assignment in parentheses to capture the value while also writing it. You rarely need this on purpose, but it's worth knowing so unexpected chains don't confuse you.</p>
  `,

  /* --- Chunk 1: Why & When --- */

  /* 1.0 What problem it solves */
  'topics-9-10-1-0': `
    <p>Arrays are worthless if their contents can never change. The whole point of storing a list of scores, todos, cart items, or messages is that those things update over time — a score increases, a todo gets completed, a cart quantity changes, a message is edited. You need a way to reach into a specific slot and swap in a new value without rebuilding the entire array from scratch. Bracket assignment is that mechanism — the direct, positional write that lets you change one item and leave everything else alone.</p>
    <p>The specific problem the syntax solves is <em>positional replacement</em>. Given an array, an index, and a new value, replace whatever is at that position. Not "add a new item to the end" (that's <code>.push()</code>). Not "remove and insert" (that's <code>.splice()</code>). Not "produce a new array with every item transformed" (that's <code>.map()</code>). Just "the value at this specific slot needs to be this new value, right now, in place." Bracket assignment is the shortest, most direct way to express that intent.</p>
  `,

  /* 1.1 Why use it */
  'topics-9-10-1-1': `
    <p>Use bracket assignment any time you know the exact position of the item you want to change. If you know it's the first item, that's <code>arr[0] = newValue</code>. If you're inside a <code>for</code> loop with counter <code>i</code>, that's <code>arr[i] = newValue</code>. If you just called <code>.findIndex()</code> and got a position back, that's <code>arr[thatIndex] = newValue</code>. All of these are moments where "I know exactly which slot" is true, and bracket assignment is the tool. It's also the fastest way to change one item — no method call, no new array allocation, just a direct write.</p>
    <p>Don't use bracket assignment when you actually need to add, insert, or remove — those are structural changes and belong to <code>.push()</code>, <code>.unshift()</code>, <code>.splice()</code>, and their siblings. Also don't use it when you want a new array left over with the change applied instead of modifying the original — reach for <code>.map()</code>, the spread operator, or <code>.with()</code> (a modern method that returns a copy with one index changed). Bracket assignment is specifically for "I have this array, I want to modify it in place, I know the exact position." Any deviation from that shape usually means a different tool is the right one.</p>
  `,

  /* 1.2 Where you use it */
  'topics-9-10-1-2': `
<pre class="language-javascript"><code class="language-javascript">// Replacing an item at a known position
const colors = ['red', 'green', 'blue'];
colors[1] = 'lime';

// Updating a specific item found by index-search
const idx = users.findIndex(u => u.id === 42);
if (idx !== -1) {
  users[idx] = updatedUser;
}

// Bulk-transforming inside a for loop (mutating each item in place)
for (let i = 0; i < prices.length; i++) {
  prices[i] = prices[i] * 1.1;   // add 10% tax
}

// Toggling a boolean in a checkbox-state array
selected[i] = !selected[i];

// Updating one cell in a 2D grid (board games, spreadsheets)
const board = [
  [' ', ' ', ' '],
  [' ', ' ', ' '],
  [' ', ' ', ' '],
];
board[1][1] = 'X';       // center cell

// Updating a property on an object item (very common)
const users = [{ name: 'Os', age: 30 }];
users[0].age = 31;        // reach into the object at the array position

// Filling an array by writing to each position
const zeros = new Array(5);
for (let i = 0; i < zeros.length; i++) {
  zeros[i] = 0;
}

// Building up a lookup table by writing at computed indexes
const counts = [];
for (const item of items) {
  counts[item.id] = (counts[item.id] || 0) + 1;
}

// Swapping two positions using a temporary variable
const tmp = arr[i];
arr[i] = arr[j];
arr[j] = tmp;

// Any time you know "which position" and have a new value ready, brackets on
// the left of = will put that value there.</code></pre>
  `,

  /* 1.3 Plain English explanation */
  'topics-9-10-1-3': `
    <p>Think of an array like a row of lockers, each with a number on it. Reading with brackets was walking up to a locker and opening it to see what's inside. Bracket assignment is walking up to a locker, opening it, taking out whatever was there, and putting something new in. The locker still exists in the same spot, still has the same number, still holds one item — but the item is different now.</p>
    <p>The row is very cooperative. Tell it "locker 3, here's a new shirt" and it swaps out whatever was there. Tell it "locker 12, here's a phone" even if there is no locker 12 and it will build the locker on the spot — plus every locker between 3 and 12 that didn't exist yet, all sitting there empty. That's what "extending the array creates holes" means. The row didn't complain, but you now have a bunch of empty lockers you weren't expecting.</p>
    <p>The important part: the row itself is the same row. If your friend was also looking at the same row of lockers, they'd see your change too. This is the reference thing — arrays are shared by reference, so a write is visible to everyone holding the array. Bracket assignment isn't producing a "new row with one different locker." It's editing the original row that everyone can see.</p>
  `,

  /* 1.4 Mental model */
  'topics-9-10-1-4': `
    <p>Bracket assignment is a store operation: given an array, an index, and a value, place the value at that position in the array. The array is a numbered set of slots; the index tells JavaScript which slot; the value on the right of <code>=</code> is what gets placed there. That's the entire mechanism. Nothing else happens — no shifting of other items, no length recalculation for the general case, no new array. Just an in-place edit of one slot.</p>
    <p>The key mental model: <em>brackets on the left of <code>=</code> write; brackets on the right read</em>. The syntax is identical — <code>arr[i]</code> — but the meaning flips based on which side of <code>=</code> the expression sits on. <code>const x = arr[0]</code> reads. <code>arr[0] = x</code> writes. Same brackets, opposite direction. This is the same one-syntax-two-jobs pattern you've already seen for reading; internalizing it here is what makes the whole array API feel like one thing instead of two.</p>
    <p>The other mental model that matters: <em>bracket assignment mutates; it does not copy</em>. If <code>a</code> and <code>b</code> both point to the same array, writing through <code>a</code> changes what <code>b</code> sees. If you passed the array into a function, the function's writes are visible to the caller when the function returns. This is different from primitives (numbers, strings) where copying a value gives you an independent duplicate. With arrays, one write is one edit to the one underlying object that everyone shares.</p>
    <p>Finally: <em>writing to an index past the current length silently extends the array</em>. There is no bounds check. There is no error. If you write to <code>arr[500]</code>, the array is now at least 501 items long, with holes in between. This is a common source of bugs when an index is computed from something unreliable (user input, a stale variable, a wrong formula) — you don't crash, you just quietly grow the array. If bounds matter, check them yourself.</p>
  `,

  /* 1.5 Step-by-step walkthrough */
  'topics-9-10-1-5': `
<pre class="language-javascript"><code class="language-javascript">// Scenario: a quiz where the user can go back and change any answer.
// The answers array holds one entry per question. Whenever the user
// changes their answer to question N, we overwrite answers[N].
const answers = ['A', 'B', 'C', 'D', 'A'];

// The user goes back and changes question 2 from 'C' to 'B'.
answers[2] = 'B';

// Then changes question 4 from 'A' to 'D'.
answers[4] = 'D';

console.log(answers);
// ['A', 'B', 'B', 'D', 'D']

// What JS does, step by step, focusing on the two writes:

// Step 1: Evaluate answers[2] = 'B'.
//   1a. Evaluate the right side 'B'. Result: the string "B".
//   1b. Evaluate 'answers' on the left. Result: the array reference.
//   1c. Evaluate '2' as the index. Result: the number 2.
//   1d. Store "B" at position 2 of the array.
//        The array is now ['A', 'B', 'B', 'D', 'A'].
//   1e. The expression returns "B" (not usually captured).

// Step 2: Evaluate answers[4] = 'D'.
//   2a. Right side 'D'. Result: the string "D".
//   2b. Left side 'answers'. Result: same array reference.
//   2c. Index '4'. Result: the number 4.
//   2d. Store "D" at position 4 of the array.
//        The array is now ['A', 'B', 'B', 'D', 'D'].
//   2e. Expression returns "D".

// Observations:
//   - Only positions 2 and 4 changed. Every other item was untouched.
//   - The array's length did not change (writes were within existing bounds).
//   - No new array was created — this is the SAME array, edited in place.
//   - If any other code held a reference to 'answers', that code now
//     also sees the updated values on the next read.

// What if the user answered a NEW question we didn't have a slot for yet?
answers[5] = 'A';
// The array grows to length 6, and position 5 now holds 'A'.
// The array is now ['A', 'B', 'B', 'D', 'D', 'A'].

// What if they somehow skipped ahead and answered question 8?
answers[8] = 'C';
// Length is now 9, positions 6 and 7 are HOLES (empty slots).
// The array is now ['A', 'B', 'B', 'D', 'D', 'A', empty, empty, 'C'].
// This is legal but almost never what you want — usually you'd use .push()
// or fill the gap explicitly before jumping ahead.</code></pre>
  `,

  /* --- Chunk 2: The Click --- */

  /* 2.0 Debugging clue */
  'topics-9-10-2-0': `
    <p>Bracket-assignment bugs cluster around a handful of patterns. For each one, the buggy shape is on top and the diagnostic check that catches it is right below.</p>

    <p><strong>1. The change "didn't happen."</strong> You wrote to a position but reading it back shows the old value. Usually the index was wrong, or you wrote to a copy of the array instead of the original.</p>
<pre class="language-javascript"><code class="language-javascript">// BUG — value seems unchanged after the write
const colors = ['red', 'green', 'blue'];
colors[2] = 'lime';                // meant to change 'green' at index 1
console.log(colors[1]);            // still 'green' — where did my update go?

// DEBUG — log the whole array to see where the write actually landed
console.log(colors);               // ['red', 'green', 'lime']
                                   // wrote to slot 2, not the slot you were checking</code></pre>

    <p><strong>2. The array unexpectedly got much longer.</strong> You wrote to an index that was past the current end, silently extending the array and filling the gap with holes.</p>
<pre class="language-javascript"><code class="language-javascript">// BUG — length jumps far beyond what you expected
const arr = ['a', 'b', 'c'];
const i = 10;                     // i came from somewhere (loop counter, form input, etc.)
arr[i] = 'z';
console.log(arr.length);          // 11 — did NOT expect this

// DEBUG — same setup, but bounds-check i BEFORE writing
const arr2 = ['a', 'b', 'c'];
const i2 = 10;
if (i2 < 0 || i2 >= arr2.length) {
  console.warn('index out of range:', i2, 'length:', arr2.length);
} else {
  arr2[i2] = 'z';
}</code></pre>

    <p><strong>3. Weird holes appear in loops or method calls.</strong> Follow-on from #2: <code>.forEach()</code>, <code>.map()</code>, and <code>for...of</code> skip empty slots, so iteration seems to jump over positions that "should" be there.</p>
<pre class="language-javascript"><code class="language-javascript">// BUG — some indexes never fire in forEach
arr.forEach((v, i) => console.log(i, v));   // 0, 1, 2, 8, 9  (3–7 missing)

// DEBUG — count holes vs real items
console.log('length:', arr.length);
console.log('actual items:', arr.filter(() => true).length);
// if these don't match, the array has holes</code></pre>

    <p><strong>4. Another variable also changed.</strong> You wrote through one variable and a completely different variable now shows the new value. They point to the same array.</p>
<pre class="language-javascript"><code class="language-javascript">// BUG — mutating a shared reference
const original = [1, 2, 3];
const copy = original;            // NOT a copy — same reference
copy[0] = 99;
console.log(original[0]);         // 99

// DEBUG — check identity before writing
console.log(original === copy);   // true = same array, writes will affect both
// fix: make a real shallow copy
const realCopy = [...original];
console.log(original === realCopy); // false</code></pre>

    <p><strong>5. Negative-index write doesn't affect the last item.</strong> <code>arr[-1] = x</code> silently added a property named <code>"-1"</code> to the array object instead of updating the last item.</p>
<pre class="language-javascript"><code class="language-javascript">// BUG — thought this updated the last item
const arr = ['a', 'b', 'c'];
arr[-1] = 'z';
console.log(arr);                 // ['a', 'b', 'c']  ← unchanged
console.log(arr.length);          // still 3

// DEBUG — the phantom property is visible as a string key
console.log(arr[-1]);             // 'z'  ← it's there, just not IN the array
console.log(Object.keys(arr));    // ['0', '1', '2', '-1']  ← smoking gun
// fix: use the real last-index formula
arr[arr.length - 1] = 'z';</code></pre>

    <p><strong>6. "Assignment to constant variable" error even though you're not reassigning.</strong> You tried to reassign the whole array instead of writing to an index. <code>const</code> blocks the first; not the second.</p>
<pre class="language-javascript"><code class="language-javascript">// BUG — TypeError: Assignment to constant variable.
const arr = ['a', 'b'];
arr = ['x', 'y'];                 // reassigning the variable — blocked

// DEBUG — look at what's on the left of =
// if it's just the variable name, that's a reassignment
// if it's variableName[something], that's an index write (allowed)
arr[0] = 'x';                     // this is fine
arr[1] = 'y';                     // this is fine</code></pre>

    <p><strong>7. Nested write throws "Cannot set properties of undefined."</strong> You wrote <code>arr[i][j] = x</code> but <code>arr[i]</code> didn't exist yet, so there was nothing to write into.</p>
<pre class="language-javascript"><code class="language-javascript">// BUG — TypeError from the inner write
const grid = [];
grid[0][0] = 'X';                 // grid[0] is undefined

// DEBUG — read the intermediate step first
console.log('grid[0] is:', grid[0]);   // undefined — that's the problem
// fix: create the inner container before writing into it
grid[0] = [];
grid[0][0] = 'X';</code></pre>

    <p><strong>8. Writing an object into every position, then updating "one" updates all.</strong> You used <code>.fill()</code> with an object, or wrote the same object reference into multiple slots. Every slot held the same object, so one edit hit them all.</p>
<pre class="language-javascript"><code class="language-javascript">// BUG — updating grid[0] changes every position
const grid = new Array(3).fill({ x: 0 });
grid[0].x = 99;
console.log(grid[1].x);           // 99
console.log(grid[2].x);           // 99

// DEBUG — identity check between slots
console.log(grid[0] === grid[1]); // true — same object, edits are shared
// fix: build a fresh object per position
const grid2 = Array.from({ length: 3 }, () => ({ x: 0 }));
console.log(grid2[0] === grid2[1]); // false</code></pre>
  `,

  /* 2.1 The part that makes it click */
  'topics-9-10-2-1': `
    <p>Bracket assignment is a store: array plus index plus new value, and the value lands at that position in the array. It never inserts, never shifts, never copies. It just overwrites one slot — or creates that slot if it didn't exist yet. The operation is instant, in-place, and permanent for every reference to that array.</p>
    <p>The click that connects everything: <em>bracket assignment is the write side of the same syntax you already use to read</em>. <code>arr[i]</code> is the expression that means "position i of arr." Put it on the right of <code>=</code> and it reads that position. Put it on the left of <code>=</code> and it writes to that position. This single symmetry is the entire array read/write API — one syntax, one rule (left is write, right is read), one mental model. Every other array method is either a specialization of this (writing to <code>.length</code>, writing to <code>arr[arr.length]</code>) or a helper built on top of it. Once bracket assignment clicks, arrays feel like a very small, very consistent tool.</p>
  `,

  /* 2.2 Common confusions */
  'topics-9-10-2-2': `
    <p><strong>Confusion: "bracket assignment creates a new array with the change applied"</strong></p>
    <p>It doesn't. It mutates the existing array in place. Every reference to that array now sees the new value. If you need a new array with one change applied (common in React and other frameworks that expect immutable updates), use <code>.with(i, newValue)</code> or spread into a copy: <code>[...arr.slice(0, i), newValue, ...arr.slice(i + 1)]</code>.</p>

    <p><strong>Confusion: "<code>const</code> means the array can't be modified"</strong></p>
    <p><code>const</code> only prevents reassigning the variable itself. The array the variable points to is still mutable — you can write to indexes, push, pop, splice, and so on. If you want an actually immutable array, use <code>Object.freeze()</code>, but be aware it only freezes one level deep.</p>

    <p><strong>Confusion: "<code>arr[-1] = x</code> sets the last item"</strong></p>
    <p>It doesn't. Bracket notation doesn't understand negative indexes for either reads or writes. <code>arr[-1] = x</code> silently adds a property named <code>"-1"</code> to the array object — it won't show up in <code>.length</code>, iteration, or most methods. Use <code>arr[arr.length - 1] = x</code>. Also note: <code>.at(-1)</code> is read-only; you cannot assign to it.</p>

    <p><strong>Confusion: "writing to a large index just gets ignored"</strong></p>
    <p>It doesn't get ignored — it extends the array and fills the gap with empty slots ("holes"). <code>arr[100] = 'x'</code> on a 3-item array leaves you with a 101-item array with 97 holes. Reads from those holes return <code>undefined</code>, but iteration methods will skip them, which can lead to surprising bugs.</p>

    <p><strong>Confusion: "bracket assignment and <code>.push()</code> are interchangeable"</strong></p>
    <p>They overlap only for one specific case: <code>arr[arr.length] = x</code> is equivalent to <code>arr.push(x)</code> — both append one item to the end. Anywhere else, they're different: <code>.push()</code> always appends to the end; bracket assignment writes at a specific index (which may or may not be the end). Use <code>.push()</code> when you mean "append" — it's clearer and prevents accidental holes.</p>

    <p><strong>Confusion: "assignment returns nothing, so I can't use it in an expression"</strong></p>
    <p>Assignment IS an expression — it returns the value that was assigned. That's why <code>a = b = c = 5</code> works (each <code>=</code> returns the assigned value, which is then assigned by the one to its left). You rarely need to capture the return value, but it's worth knowing exists — it explains why chained assignments work and prevents surprise when you see them.</p>

    <p><strong>Confusion: "I can update a string character with brackets the same way"</strong></p>
    <p>You can't. <code>str[0] = 'X'</code> on a string looks like it should work, and it doesn't throw in non-strict mode, but strings are immutable in JavaScript — the assignment silently does nothing. If you need to "change a character," build a new string: <code>'X' + str.slice(1)</code>, or use <code>str.replace()</code>.</p>

    <p><strong>Confusion: "writing to a nested position needs a special syntax"</strong></p>
    <p>It doesn't. Chained brackets on the left work the same as chained brackets on the right: <code>grid[0][1] = x</code> is "reach into <code>grid[0]</code>, then write <code>x</code> to position 1 of whatever that is." Each pair of brackets is one step. The only rule: every step before the last one is a READ, and the last one is the WRITE — so all the earlier positions must already exist.</p>
  `,

  /* 2.3 Common mistakes */
  'topics-9-10-2-3': `
<pre class="language-javascript"><code class="language-javascript">// Writing to the wrong index by off-by-one
const items = ['a', 'b', 'c'];
items[items.length] = 'd';
// works but easy to get wrong — this appends because length is 3 and last valid is 2
// intent was "replace last item"? use length - 1
items[items.length - 1] = 'd';   // ['a', 'b', 'd']</code></pre>

<pre class="language-javascript"><code class="language-javascript">// Trying to update the last item with a negative index
const items = ['a', 'b', 'c'];
items[-1] = 'z';
// wrong: adds a property named "-1", does NOT touch the last item
// fix: compute the real index
items[items.length - 1] = 'z';   // ['a', 'b', 'z']</code></pre>

<pre class="language-javascript"><code class="language-javascript">// Writing past the end and creating holes accidentally
const items = ['a', 'b'];
items[10] = 'z';
// wrong: items is now length 11 with 8 empty slots
// fix: if you meant to append, use push
const items2 = ['a', 'b'];
items2.push('z');                // ['a', 'b', 'z']</code></pre>

<pre class="language-javascript"><code class="language-javascript">// Mutating a shared array without realizing it
function markFirstDone(list) {
  list[0].done = true;
}
const todos = [{ text: 'buy milk', done: false }];
markFirstDone(todos);
// todos[0].done is now true — the caller's array was mutated
// fix (if you want to leave the caller's array alone): copy first
function markFirstDoneCopy(list) {
  return [{ ...list[0], done: true }, ...list.slice(1)];
}</code></pre>

<pre class="language-javascript"><code class="language-javascript">// Trying to reassign a const array instead of writing an index
const colors = ['red', 'green'];
colors = ['blue', 'yellow'];
// wrong: TypeError — const blocks reassigning the variable
// fix: write each index, or use a let
colors[0] = 'blue';
colors[1] = 'yellow';</code></pre>

<pre class="language-javascript"><code class="language-javascript">// Filling an array with the same object reference
const grid = new Array(3).fill({ x: 0 });
grid[0].x = 99;
console.log(grid[1].x);
// wrong: 99 — all three positions hold the SAME object
// fix: build fresh objects per position
const grid2 = Array.from({ length: 3 }, () => ({ x: 0 }));
grid2[0].x = 99;
console.log(grid2[1].x);          // 0</code></pre>

<pre class="language-javascript"><code class="language-javascript">// Assigning to .at() as if it were a writable accessor
const items = ['a', 'b', 'c'];
items.at(-1) = 'z';
// wrong: SyntaxError — .at() is read-only
// fix: use bracket notation for writes
items[items.length - 1] = 'z';</code></pre>

<pre class="language-javascript"><code class="language-javascript">// Writing to a nested position that doesn't exist yet
const grid = [];
grid[0][0] = 'X';
// wrong: TypeError — grid[0] is undefined, can't set .0 on undefined
// fix: create the inner array first
const grid2 = [];
grid2[0] = [];
grid2[0][0] = 'X';                // [['X']]</code></pre>

<pre class="language-javascript"><code class="language-javascript">// Trying to "update" a character in a string
const word = 'cat';
word[0] = 'b';
console.log(word);
// wrong: still "cat" — strings are immutable, the write is silently ignored
// fix: build a new string
const word2 = 'b' + word.slice(1);   // "bat"</code></pre>
  `,

  /* --- Chunk 3: In Practice --- */

  /* 3.0 Tiny examples */
  'topics-9-10-3-0': `
<pre class="language-javascript"><code class="language-javascript">const colors = ['red', 'green', 'blue'];

// Basic replacement
colors[0] = 'crimson';       // ['crimson', 'green', 'blue']
colors[1] = 'lime';          // ['crimson', 'lime', 'blue']
colors[2] = 'navy';          // ['crimson', 'lime', 'navy']

// Replace the last item
colors[colors.length - 1] = 'indigo';    // ['crimson', 'lime', 'indigo']

// Append by writing to length position (equivalent to push)
colors[colors.length] = 'gold';          // ['crimson', 'lime', 'indigo', 'gold']

// Index from a variable
const i = 1;
colors[i] = 'olive';

// Index from an expression
colors[colors.length - 2] = 'teal';

// Toggle a boolean at position i
const flags = [false, false, true];
flags[0] = !flags[0];                    // [true, false, true]

// Increment a number at position i
const counts = [0, 0, 0];
counts[1] = counts[1] + 1;               // [0, 1, 0]
counts[1] += 1;                          // [0, 2, 0] — same, shorter

// Swap two positions
const arr = ['a', 'b', 'c'];
const tmp = arr[0];
arr[0] = arr[2];
arr[2] = tmp;                            // ['c', 'b', 'a']

// Update a property on an object item
const users = [{ name: 'Os', age: 30 }];
users[0].age = 31;                       // [{ name: 'Os', age: 31 }]

// Replace an entire object item
users[0] = { name: 'Osiris', age: 31 };

// Chained assignment across positions
const zeros = [1, 1, 1];
zeros[0] = zeros[1] = zeros[2] = 0;      // [0, 0, 0]

// Nested write (2D grid)
const grid = [[0, 0], [0, 0]];
grid[1][1] = 9;                          // [[0, 0], [0, 9]]

// Fill an array by writing to each position
const squares = new Array(5);
for (let i = 0; i < squares.length; i++) {
  squares[i] = i * i;
}
// [0, 1, 4, 9, 16]

// Assignment returns the assigned value
const captured = (colors[0] = 'black');
// captured is "black", colors[0] is also "black"</code></pre>
  `,

  /* 3.1 Real website uses */
  'topics-9-10-3-1': `
    <p><strong>Example: updating a cart item's quantity by index</strong></p>
<pre class="language-javascript"><code class="language-javascript">const idx = cart.findIndex(item => item.id === productId);
if (idx !== -1) {
  cart[idx].quantity = newQuantity;
  renderCart();
}</code></pre>

    <p><strong>Example: toggling a todo's done state</strong></p>
<pre class="language-javascript"><code class="language-javascript">function toggleTodo(i) {
  todos[i].done = !todos[i].done;
  render();
}</code></pre>

    <p><strong>Example: writing a player's move into a game board</strong></p>
<pre class="language-javascript"><code class="language-javascript">function placeMove(row, col, player) {
  if (board[row][col] === ' ') {
    board[row][col] = player;
    checkWin();
  }
}</code></pre>

    <p><strong>Example: applying tax to every price in place</strong></p>
<pre class="language-javascript"><code class="language-javascript">for (let i = 0; i < prices.length; i++) {
  prices[i] = prices[i] * 1.0725;
}</code></pre>

    <p><strong>Example: replacing a message after the user edits it</strong></p>
<pre class="language-javascript"><code class="language-javascript">function editMessage(messageId, newText) {
  const idx = messages.findIndex(m => m.id === messageId);
  if (idx !== -1) {
    messages[idx].text = newText;
    messages[idx].editedAt = Date.now();
  }
}</code></pre>

    <p><strong>Example: swapping two items in a re-orderable list</strong></p>
<pre class="language-javascript"><code class="language-javascript">function swap(a, b) {
  const tmp = items[a];
  items[a] = items[b];
  items[b] = tmp;
  renderList();
}</code></pre>

    <p><strong>Example: filling a schedule grid with default entries</strong></p>
<pre class="language-javascript"><code class="language-javascript">for (let day = 0; day &lt; 7; day++) {
  schedule[day] = [];
  for (let hour = 0; hour &lt; 24; hour++) {
    schedule[day][hour] = null;
  }
}</code></pre>

    <p><strong>Example: marking a form field as validated in a parallel state array</strong></p>
<pre class="language-javascript"><code class="language-javascript">fieldStates[fieldIndex] = { valid: true, message: '' };</code></pre>
  `,

  /* 3.2 Connects to */
  'topics-9-10-3-2': `
    <ul>
      <li><strong>Reading items with bracket notation</strong> → the read side of the same syntax; brackets on the right of <code>=</code></li>
      <li><strong>Array .length</strong> → writing past <code>length - 1</code> extends the array and can create holes</li>
      <li><strong>Array indexes</strong> → the numbers you put in the brackets; still 0-based</li>
      <li><strong>Mutation vs returning new array</strong> → bracket assignment is the classic mutation; <code>.with()</code>, <code>.map()</code>, spread are the immutable alternatives</li>
      <li><strong>const with arrays</strong> → doesn't block bracket assignment; only blocks reassigning the variable</li>
      <li><strong>References vs primitives</strong> → arrays are references; a write is visible through every variable pointing to the same array</li>
      <li><strong>.push() / .unshift()</strong> → the "append" and "prepend" specializations; use these when you mean "add to the end/start"</li>
      <li><strong>.splice()</strong> → for inserting or removing items structurally, not just replacing</li>
      <li><strong>.with(i, value)</strong> → modern method that returns a new array with one index replaced (no mutation)</li>
      <li><strong>.fill()</strong> → writes the same value into a range of positions in one call</li>
      <li><strong>Nested arrays / arrays of objects</strong> → chain brackets or add a property access to reach into nested structure</li>
      <li><strong>Object.freeze()</strong> → the way to actually block bracket assignment on an array</li>
      <li><strong>Debugging</strong> → most bracket-assignment bugs are wrong index, unexpected mutation, or accidental holes</li>
    </ul>
  `,

  /* 3.3 See also */
  'topics-9-10-3-3': `
    <ul>
      <li>Reading items with bracket notation</li>
      <li>Array .length</li>
      <li>First item</li>
      <li>Last item</li>
      <li>Adding items: push(), unshift()</li>
      <li>Removing items: pop(), shift()</li>
      <li>slice() and splice()</li>
      <li>Mutation vs returning new array</li>
      <li>Nested arrays</li>
      <li>Common array mistakes</li>
      <li>const declarations</li>
    </ul>
  `,

  /* ========================================================= 
     Sub-lesson: 3.10.11 Arrays → looping arrays
   =======================================================*/

  /* --- Chunk 0: What & How --- */

  /* 0.0 What it is */
  'topics-9-11-0-0': `
    <p>The <code>for</code> loop, <code>for...of</code> loop, and <code>.forEach()</code> method are the three main tools for walking through every item in an array — running the same block of code once per item, with each item available inside the block. The classic <code>for</code> loop uses a counter (a variable, by convention named <code>i</code>, short for "index") that starts at <code>0</code>, increases by <code>1</code> each pass, and stops when it reaches the array's length; inside the loop, <code>arr[i]</code> gives you the current item. <code>for...of</code> is a shorter form that hands you each item directly without a counter. <code>.forEach()</code> is a method you call on the array itself, passing a function that runs once per item.</p>
    <p>The underlying idea is the same for all three: visit every position in the array, in order, doing something with each item. The differences are ergonomic — how much boilerplate you write, whether the current index is available, and how much control you have over stopping early. The <code>for</code> loop is the most flexible (you can break out, skip iterations, count backwards, count in twos); <code>for...of</code> is the shortest when you just need each item; <code>.forEach()</code> reads naturally when you're already chaining array methods or writing in a callback-style codebase.</p>
  `,

  /* 0.1 Syntax */
  'topics-9-11-0-1': `
<pre class="language-javascript"><code class="language-javascript">const colors = ['red', 'green', 'blue'];

// Classic for loop — counter-based, most flexible
for (let i = 0; i < colors.length; i++) {
  console.log(i, colors[i]);
}
// 0 "red"
// 1 "green"
// 2 "blue"

// for...of — hands you each item directly, no counter
for (const color of colors) {
  console.log(color);
}
// "red"
// "green"
// "blue"

// for...of WITH index using .entries()
for (const [i, color] of colors.entries()) {
  console.log(i, color);
}

// .forEach — callback runs once per item
colors.forEach((color, i) => {
  console.log(i, color);
});

// while loop — less common but works
let i = 0;
while (i < colors.length) {
  console.log(colors[i]);
  i++;
}

// Break out early (works in for and for...of, NOT in forEach)
for (let i = 0; i < colors.length; i++) {
  if (colors[i] === 'green') break;
}

// Skip an iteration with continue
for (let i = 0; i < colors.length; i++) {
  if (colors[i] === 'green') continue;
  console.log(colors[i]);
}

// Walk backwards
for (let i = colors.length - 1; i >= 0; i--) {
  console.log(colors[i]);
}

// Every other item
for (let i = 0; i < colors.length; i += 2) {
  console.log(colors[i]);
}

// Wrong: for...in on an array — iterates KEYS as strings, includes inherited
for (const key in colors) {
  console.log(key);        // "0", "1", "2" (strings, not numbers)
}
// Use for...of for values, or .entries() for [index, value].</code></pre>
  `,

  /* 0.2 Anatomy / Breakdown */
  'topics-9-11-0-2': `
<pre class="language-javascript"><code class="language-javascript">const colors = ['red', 'green', 'blue'];

for (let i = 0; i < colors.length; i++) {
  console.log(colors[i]);
}

// Breaking down the for loop's header:
//
//   for (let i = 0; i < colors.length; i++)
//        │        │                 │
//        │        │                 └── UPDATE: runs after each pass (usually i++)
//        │        └───────────────────── CONDITION: checked before each pass — keep looping while true
//        └──────────────────────────── INIT: runs once, before the loop starts
//
// The body inside { } runs once per pass, with i holding the current index.

// Step by step, what JS does when the loop runs:
//
// 1. Run INIT: let i = 0. i is now 0.
// 2. Check CONDITION: is 0 < 3? Yes.
// 3. Run the body: console.log(colors[0]) → prints "red".
// 4. Run UPDATE: i++. i is now 1.
// 5. Check CONDITION: is 1 < 3? Yes.
// 6. Body: prints "green".
// 7. UPDATE: i is 2. CONDITION: 2 < 3? Yes. Body: prints "blue".
// 8. UPDATE: i is 3. CONDITION: 3 < 3? No. Loop ends.
//
// The three header pieces don't HAVE to be let i = 0, i < length, i++.
// You can start anywhere, count any way, stop on any condition. The
// convention exists because 99% of array loops walk 0 → length - 1.

// Anatomy of a for...of loop:
//
//   for (const color of colors) { ... }
//        │           │
//        │           └── the ARRAY (or any iterable) to walk through
//        └────────────── the LOOP VARIABLE — holds one item per pass
//
// The loop variable gets a fresh binding each pass — const is safe here
// because you're not reassigning it, JS re-declares it every iteration.

// Anatomy of a .forEach() call:
//
//   colors.forEach((color, i) => { ... });
//                   │      │
//                   │      └── OPTIONAL — the current index
//                   └────────── REQUIRED — the current item
//
// The callback runs once per item. Its return value is ignored.
// A third parameter (the whole array) is also available but rarely used.</code></pre>
  `,

  /* 0.3 Syntax Details That Matter */
  'topics-9-11-0-3': `
    <p><strong>Use <code>&lt;</code> in the condition, not <code>&lt;=</code>.</strong> The last valid index is <code>length - 1</code>, so <code>i &lt; arr.length</code> stops correctly. <code>i &lt;= arr.length</code> runs one extra pass where <code>arr[i]</code> is <code>undefined</code>. This is the single most common loop bug.</p>
<pre class="language-javascript"><code class="language-javascript">const items = ['a', 'b', 'c'];

for (let i = 0; i < items.length; i++) { console.log(items[i]); }
// "a", "b", "c"

for (let i = 0; i <= items.length; i++) { console.log(items[i]); }
// "a", "b", "c", undefined  ← the extra pass reads past the end</code></pre>

    <p><strong><code>for...of</code> iterates VALUES; <code>for...in</code> iterates KEYS.</strong> They look similar but do very different things, and mixing them up is a classic trap. On an array, <code>for...of</code> gives you each item; <code>for...in</code> gives you each index as a string, and worse, includes any properties added to the array or inherited from prototypes. Only use <code>for...in</code> on plain objects, never on arrays.</p>
<pre class="language-javascript"><code class="language-javascript">const items = ['a', 'b', 'c'];

for (const v of items) console.log(v);   // "a", "b", "c"  (values)
for (const k in items) console.log(k);   // "0", "1", "2"  (string keys)</code></pre>

    <p><strong><code>.forEach()</code> cannot be stopped with <code>break</code> or <code>return</code>.</strong> <code>break</code> throws a syntax error inside a callback, and <code>return</code> only exits that one callback call — the loop continues with the next item. If you need to stop early, use a regular <code>for</code> or <code>for...of</code>, or switch to <code>.some()</code> (which stops when the callback returns true) or <code>.every()</code> (stops when it returns false).</p>
<pre class="language-javascript"><code class="language-javascript">// Wrong: return doesn't stop forEach
[1, 2, 3].forEach(n => {
  if (n === 2) return;    // only skips this ONE iteration
  console.log(n);
});
// 1, 3

// Right: for...of with break
for (const n of [1, 2, 3]) {
  if (n === 2) break;
  console.log(n);
}
// 1</code></pre>

    <p><strong>Each header piece of the classic <code>for</code> loop can be omitted, though rarely useful.</strong> <code>for (;;) { }</code> is a legal infinite loop. Usually all three pieces are present because that's what makes the loop clearly bounded — but knowing they're optional helps you read unusual code.</p>

    <p><strong>Modifying the array's length while looping over it is a bug magnet.</strong> Adding items in a forward loop can cause an infinite loop; removing items shifts everything down, causing you to skip the item now at the current index. If you need to modify during iteration, walk backwards, or build a new array with <code>.filter()</code> / <code>.map()</code> and replace the original.</p>
<pre class="language-javascript"><code class="language-javascript">// Wrong: removing while walking forward skips items
const items = ['a', 'b', 'c', 'd'];
for (let i = 0; i < items.length; i++) {
  if (items[i] === 'b') items.splice(i, 1);
}
// After removing 'b' at index 1, 'c' shifts to index 1, but i moves to 2 — 'c' skipped.

// Fix: walk backwards
for (let i = items.length - 1; i >= 0; i--) {
  if (items[i] === 'b') items.splice(i, 1);
}
// Or better: use filter
const kept = items.filter(v => v !== 'b');</code></pre>

    <p><strong><code>.forEach()</code> and other array methods skip empty slots (holes) in sparse arrays.</strong> If you built holes by writing past the end (<code>arr[10] = 'x'</code> on a 3-item array), a classic <code>for</code> loop will visit those holes and read <code>undefined</code>, while <code>.forEach()</code> and <code>.map()</code> silently skip them. This causes surprising off-by-one results if you're not expecting it.</p>
  `,

  /* --- Chunk 1: Why & When --- */

  /* 1.0 What problem it solves */
  'topics-9-11-1-0': `
    <p>An array might hold 3 items or 3,000 — and often you don't know the number ahead of time (it comes from an API, a form, a database, user input). You can't write out <code>colors[0]</code>, <code>colors[1]</code>, <code>colors[2]</code> by hand for every possible length; that only works when you already know exactly how many items exist and which ones you want. Looping solves this: write the block of code once, describe what to do with "the current item," and JavaScript runs it however many times the array happens to have items. This is what makes arrays actually useful in real programs — the ability to write logic once and apply it to any length of data.</p>
    <p>The specific problem the syntax solves is <em>iteration</em>: given an ordered collection, visit each item, in order, doing something with each. Not "find the one matching item" (that's search). Not "get a summary value" (that's reduce). Just "walk through, one at a time, with the current item available." Every other array pattern — searching, filtering, summing, rendering a list to the DOM, calling an API for each entry — is iteration plus some extra logic on top. If you understand loops well, the rest of the array API stops looking like a pile of methods and starts looking like specialized shortcuts for common iteration jobs.</p>
  `,

  /* 1.1 Why use it */
  'topics-9-11-1-1': `
    <p>Use a loop any time you need to do something with more than one item and either (a) you don't know at write-time how many items there are, or (b) you'd be repeating the same line of code with just a different index. The moment you'd write <code>colors[0]; colors[1]; colors[2];</code> by hand, that's the signal that a loop belongs there instead. A loop scales to any length automatically, keeps the logic in one place, and stays correct when the data grows or shrinks.</p>
    <p>Choose which loop based on what the code needs. Need the index (to render numbered items, compare two arrays position-by-position, or write back into the array)? Use classic <code>for</code> or <code>.forEach((item, i) =&gt; ...)</code>. Need to stop early? Use <code>for</code> or <code>for...of</code> with <code>break</code>. Just want each item in order with no ceremony? <code>for...of</code> is the shortest. Doing a transformation, filter, or summary? Reach past raw loops for <code>.map()</code>, <code>.filter()</code>, <code>.reduce()</code> — they're loops with the boilerplate hidden AND they express intent (transform, keep-what-matches, boil-down) more directly than a bare <code>for</code>.</p>
  `,

  /* 1.2 Where you use it */
  'topics-9-11-1-2': `
<pre class="language-javascript"><code class="language-javascript">// Printing every item
for (const color of colors) {
  console.log(color);
}

// Totaling numbers in an array
let total = 0;
for (const price of prices) {
  total += price;
}

// Rendering a list of DOM cards
for (const product of products) {
  container.appendChild(makeCard(product));
}

// Building an HTML string from an array
let html = '';
for (const item of items) {
  html += \`<li>\${item}</li>\`;
}
list.innerHTML = html;

// Searching manually (usually .find() is better, but the raw loop shows the shape)
let found = null;
for (const user of users) {
  if (user.id === 42) {
    found = user;
    break;
  }
}

// Walking two arrays position by position (classic for is best here)
for (let i = 0; i < names.length; i++) {
  console.log(\`\${names[i]} is \${ages[i]}\`);
}

// Applying an update to every item in place
for (let i = 0; i < prices.length; i++) {
  prices[i] = prices[i] * 1.0725;   // add tax
}

// Filtering into a new array manually (.filter() usually cleaner)
const active = [];
for (const user of users) {
  if (user.active) active.push(user);
}

// Counting matches
let count = 0;
for (const msg of messages) {
  if (msg.unread) count++;
}

// Walking a 2D grid — nested loops
for (let row = 0; row < board.length; row++) {
  for (let col = 0; col < board[row].length; col++) {
    console.log(board[row][col]);
  }
}

// Any time the same logic applies to every item, or every item in a range,
// or every item until some condition — a loop is the tool.</code></pre>
  `,

  /* 1.3 Plain English explanation */
  'topics-9-11-1-3': `
    <p>Picture the row of lockers again. Looping is walking down the row from locker 0 to the last locker, opening each one and doing something with what's inside. You don't decide which lockers to visit — you visit them all, in order. The counter (<code>i</code>) is your position in the row; it starts at 0, moves up by one each step, and the walk ends when you'd step past the last locker.</p>
    <p>The three loop forms are just three ways to describe that walk. Classic <code>for</code> is you carrying a clipboard, writing down which locker number you're at and how to move to the next one. <code>for...of</code> is someone handing you the contents of each locker as you pass — you don't need the number, just the thing inside. <code>.forEach()</code> is telling a helper "here's what I want done with each locker, please walk it for me" — the helper does the walking, calls your instructions once per locker, and you never touch the counter yourself.</p>
    <p>All three end at the same place: every locker visited, whatever you wrote in the body run for every one. The choice between them is about what makes the code easier to read for THIS particular walk. Sometimes you need the locker number (which item is this?). Sometimes you only need the contents. Sometimes you want to stop early. Pick the loop that lets you say what you mean with the least noise.</p>
  `,

  /* 1.4 Mental model */
  'topics-9-11-1-4': `
    <p>A loop is one block of code paired with an instruction to run it many times, each time with a slightly different context (usually the current index or the current item). Write the body as if you only had one item to deal with; the loop's job is to feed each item to that body in turn. Every loop, regardless of form, follows this shape: <em>set up → check whether to continue → run the body → adjust → repeat</em>.</p>
    <p>The key mental model: <em>the loop variable changes each pass; everything else you reference is either constant or has to be updated deliberately inside the body</em>. This is why accumulator patterns (<code>total += price</code>) declare the accumulator OUTSIDE the loop — inside, it would reset to zero every pass. It's also why closures over the loop variable behave differently for <code>var</code> (shared binding across all iterations, a classic bug) vs <code>let</code> (fresh binding each iteration, what you almost always want).</p>
    <p>The other model that matters: <em>a loop is an expression of intent, not just a mechanism</em>. Reading <code>for (let i = 0; i &lt; arr.length; i++)</code> should read to you as "for each item in the array, in order." Reading <code>for...of</code> or <code>.forEach()</code> should also read as "for each item." When your loop needs a bunch of extra logic to skip items, break early, or track multiple things, that's often the code telling you a specialized array method (<code>.find()</code>, <code>.filter()</code>, <code>.reduce()</code>) would say what you actually mean more clearly.</p>
    <p>Finally: <em>loops always run in order, always start from the beginning by default, and always end at the last item unless you break out</em>. There's no random access, no parallelism, no skipping to the middle. This is the point — iteration is deterministic and complete. If you need to jump around, don't loop; use direct bracket access (<code>arr[i]</code>) with an index you computed some other way.</p>
  `,

  /* 1.5 Step-by-step walkthrough */
  'topics-9-11-1-5': `
<pre class="language-javascript"><code class="language-javascript">// Scenario: given an array of prices, sum them into a total.
const prices = [10, 25, 8, 42, 5];

let total = 0;
for (let i = 0; i < prices.length; i++) {
  total = total + prices[i];
}

console.log(total);   // 90

// What JS does, step by step:

// Setup:
//   total = 0
//   (i doesn't exist yet — it lives inside the for loop's header)

// Step 1: Run INIT: let i = 0.
//   State: i = 0, total = 0

// Step 2: Check CONDITION: is 0 < 5? Yes.
// Step 3: Run BODY: total = total + prices[0].
//   prices[0] is 10. total becomes 0 + 10 = 10.
// Step 4: Run UPDATE: i++. i is now 1.

// Step 5: CONDITION: 1 < 5? Yes.
// Step 6: BODY: total = 10 + prices[1] = 10 + 25 = 35.
// Step 7: UPDATE: i is now 2.

// Step 8: CONDITION: 2 < 5? Yes.
// Step 9: BODY: total = 35 + 8 = 43.
// Step 10: UPDATE: i is 3.

// Step 11: CONDITION: 3 < 5? Yes.
// Step 12: BODY: total = 43 + 42 = 85.
// Step 13: UPDATE: i is 4.

// Step 14: CONDITION: 4 < 5? Yes.
// Step 15: BODY: total = 85 + 5 = 90.
// Step 16: UPDATE: i is 5.

// Step 17: CONDITION: 5 < 5? NO. Loop ends. Control moves past the loop.

// Step 18: console.log(total) → prints 90.

// Observations:
//   - The body ran 5 times, once per item.
//   - i took values 0, 1, 2, 3, 4 during the body.
//   - i briefly became 5 to trigger the exit — but the body did NOT run at 5.
//   - total was declared OUTSIDE the loop so it survives across passes.
//     If we'd written let total = 0; inside, it would reset to 0 each pass
//     and the final result would just be the last price.

// Same job with for...of (no counter needed):
let total2 = 0;
for (const price of prices) {
  total2 += price;
}

// Same job with .forEach:
let total3 = 0;
prices.forEach(price => { total3 += price; });

// Same job with .reduce (the specialized "boil down to one value" method):
const total4 = prices.reduce((sum, price) => sum + price, 0);

// All four produce 90. The for and for...of loops are the underlying pattern;
// .forEach and .reduce are shortcuts built on top.</code></pre>
  `,

  /* --- Chunk 2: The Click --- */

  /* 2.0 Debugging clue */
  'topics-9-11-2-0': `
    <p>Loop bugs cluster around a handful of patterns. For each one, the buggy shape is on top and the diagnostic check that catches it is right below.</p>

    <p><strong>1. Off-by-one — one extra pass at the end.</strong> You used <code>&lt;=</code> instead of <code>&lt;</code>, so the loop runs one time past the last index and reads <code>undefined</code>.</p>
<pre class="language-javascript"><code class="language-javascript">// BUG — last iteration reads undefined
const items = ['a', 'b', 'c'];
for (let i = 0; i <= items.length; i++) {
  console.log(items[i]);
}
// "a", "b", "c", undefined

// DEBUG — log i and items.length at the top of the body
for (let i = 0; i <= items.length; i++) {
  console.log('i:', i, 'length:', items.length, 'item:', items[i]);
}
// when i === length, item is undefined — that's the extra pass
// fix: change <= to <</code></pre>

    <p><strong>2. Infinite loop — the update was forgotten or wrong.</strong> The condition never becomes false because <code>i</code> never changes (or changes the wrong direction), so the browser tab freezes.</p>
<pre class="language-javascript"><code class="language-javascript">// BUG — no i++ in a while loop, tab hangs
let i = 0;
while (i < items.length) {
  console.log(items[i]);
  // forgot i++
}

// DEBUG — add a safety counter that breaks out after N passes
let i2 = 0;
let safety = 0;
while (i2 < items.length) {
  console.log(items[i2]);
  if (++safety > 1000) { console.warn('runaway loop'); break; }
  i2++;    // the real fix
}</code></pre>

    <p><strong>3. <code>break</code> or <code>return</code> in <code>.forEach()</code> doesn't stop the loop.</strong> <code>break</code> is a syntax error inside a callback; <code>return</code> only skips this one iteration. The loop keeps going.</p>
<pre class="language-javascript"><code class="language-javascript">// BUG — return doesn't stop forEach
[1, 2, 3, 4].forEach(n => {
  if (n === 2) return;
  console.log(n);
});
// 1, 3, 4  — you wanted it to stop at 2

// DEBUG — swap to for...of with break
for (const n of [1, 2, 3, 4]) {
  if (n === 2) break;
  console.log(n);
}
// 1  — actually stops</code></pre>

    <p><strong>4. Removing items while walking forward skips items.</strong> <code>splice()</code> shifts every later item down by one, but your counter still increments — so the item that shifted into the current slot never gets visited.</p>
<pre class="language-javascript"><code class="language-javascript">// BUG — 'c' gets skipped
const items = ['a', 'b', 'c', 'd'];
for (let i = 0; i < items.length; i++) {
  console.log('visiting', i, items[i]);
  if (items[i] === 'b') items.splice(i, 1);
}
// visiting 0 a, visiting 1 b, visiting 2 d  ← 'c' never visited

// DEBUG — walk backwards so removal doesn't affect later indexes
const items2 = ['a', 'b', 'c', 'd'];
for (let i = items2.length - 1; i >= 0; i--) {
  console.log('visiting', i, items2[i]);
  if (items2[i] === 'b') items2.splice(i, 1);
}
// or better: filter into a new array
const kept = items.filter(v => v !== 'b');</code></pre>

    <p><strong>5. <code>for...in</code> used on an array — you got string keys, not values.</strong> <code>for...in</code> iterates enumerable keys, not values, and includes inherited/added properties. Almost always a bug on arrays.</p>
<pre class="language-javascript"><code class="language-javascript">// BUG — values look wrong because they're actually keys
const items = ['a', 'b', 'c'];
for (const x in items) {
  console.log(x);
}
// "0", "1", "2"  ← strings, not the values

// DEBUG — check the type
for (const x in items) {
  console.log(x, typeof x);   // "0" string, "1" string, "2" string
}
// fix: use for...of for values, or .entries() for [i, value]
for (const v of items) console.log(v);           // "a", "b", "c"
for (const [i, v] of items.entries()) console.log(i, v);</code></pre>

    <p><strong>6. <code>await</code> inside <code>.forEach()</code> doesn't actually wait.</strong> The callback returns a promise, but <code>.forEach()</code> ignores return values, so all iterations kick off in parallel and the code after the loop runs before any of them finish.</p>
<pre class="language-javascript"><code class="language-javascript">// BUG — "done" prints before any of the fetches finish
async function loadAll(urls) {
  urls.forEach(async url => {
    const data = await fetch(url);
    console.log('got', url);
  });
  console.log('done');
}

// DEBUG — use for...of instead; await works there naturally
async function loadAllFixed(urls) {
  for (const url of urls) {
    const data = await fetch(url);
    console.log('got', url);
  }
  console.log('done');
}</code></pre>

    <p><strong>7. Nested loops using the same counter name.</strong> Inner loop reuses <code>i</code>, quietly shadowing (or overwriting, with <code>var</code>) the outer loop's counter.</p>
<pre class="language-javascript"><code class="language-javascript">// BUG — with var, inner i overwrites outer i and the outer loop breaks
for (var i = 0; i < 3; i++) {
  for (var i = 0; i < 3; i++) {
    console.log(i);
  }
}
// runs 3 times total, not 9

// DEBUG — use let (fresh binding per scope) AND distinct names for clarity
for (let row = 0; row < 3; row++) {
  for (let col = 0; col < 3; col++) {
    console.log(row, col);
  }
}
// runs 9 times as intended</code></pre>

    <p><strong>8. Accumulator declared inside the loop resets every pass.</strong> The variable holding your running total or built-up array lives only for one iteration, so at the end you only have the last pass's contribution.</p>
<pre class="language-javascript"><code class="language-javascript">// BUG — total always ends up as the last price
const prices = [10, 20, 30];
for (const price of prices) {
  let total = 0;         // resets every pass
  total += price;
  console.log(total);    // 10, 20, 30
}

// DEBUG — declare the accumulator OUTSIDE the loop
let total = 0;
for (const price of prices) {
  total += price;
}
console.log(total);      // 60</code></pre>
  `,

  /* 2.1 The part that makes it click */
  'topics-9-11-2-1': `
    <p>A loop is "here's what to do with one item; do it for all of them, in order." Write the body as if you only had a single item to handle, then let the loop feed each item to that body in turn. The counter (<code>i</code>) or loop variable is the placeholder that changes each pass; everything else — accumulators, results, references to outside data — lives OUTSIDE the loop and persists across passes.</p>
    <p>The other click: <em>every array method is a loop underneath</em>. <code>.forEach()</code>, <code>.map()</code>, <code>.filter()</code>, <code>.reduce()</code>, <code>.find()</code>, <code>.some()</code>, <code>.every()</code> are all variations of "loop through the array, do X with each item, produce Y." Once you see this, the whole array API stops being a pile of methods to memorize and starts looking like a menu of specialized loops. Learn to write a raw <code>for</code> loop first; then reach for the specialized method only when it says what you mean more clearly than the raw loop does. Both are fine; both compile down to the same machine work; the choice is about what reads better to the next person (including future-you).</p>
  `,

  /* 2.2 Common confusions */
  'topics-9-11-2-2': `
    <p><strong>Confusion: "<code>for...in</code> and <code>for...of</code> are the same thing"</strong></p>
    <p>They're not. <code>for...in</code> iterates KEYS (as strings, including inherited properties on objects). <code>for...of</code> iterates VALUES (from any iterable — arrays, strings, Maps, Sets). On an array, <code>for...in</code> gives <code>"0"</code>, <code>"1"</code>, <code>"2"</code>; <code>for...of</code> gives the items. On a plain object, <code>for...of</code> throws — use <code>for...in</code> or <code>Object.keys()</code>. Rule of thumb: <code>for...of</code> for arrays, <code>for...in</code> only for objects when you specifically want the keys.</p>

    <p><strong>Confusion: "<code>.forEach()</code> returns the transformed array"</strong></p>
    <p>It doesn't — it returns <code>undefined</code>. Its job is side effects, not building a new array. If you want a transformed array back, use <code>.map()</code>. If you want a filtered array, use <code>.filter()</code>. <code>.forEach()</code> is only for cases where you're doing something with each item that doesn't produce a return value (logging, updating the DOM, mutating in place).</p>

    <p><strong>Confusion: "I can <code>break</code> out of <code>.forEach()</code>"</strong></p>
    <p>You can't. <code>break</code> is a syntax error inside a callback function. <code>return</code> works but only exits that one callback call — the loop keeps going. If early exit matters, use <code>for</code> or <code>for...of</code> with <code>break</code>, or switch to <code>.some()</code> / <code>.every()</code> / <code>.find()</code>, all of which stop as soon as their condition is satisfied.</p>

    <p><strong>Confusion: "<code>await</code> inside <code>.forEach()</code> waits for each fetch"</strong></p>
    <p>It doesn't. The <code>async</code> callback returns a promise, but <code>.forEach()</code> ignores return values, so all iterations start in parallel and the code AFTER the loop runs before any of them finish. Use <code>for...of</code> to await sequentially, or <code>Promise.all(arr.map(...))</code> to run in parallel and wait for all.</p>

    <p><strong>Confusion: "the loop variable persists after the loop"</strong></p>
    <p>Depends on how you declared it. With <code>let i</code> or <code>const item</code>, no — the variable is scoped to the loop and gone afterward. With <code>var i</code>, yes — <code>var</code> is function-scoped, so <code>i</code> leaks out into the surrounding function. Almost always use <code>let</code> for loop counters and <code>const</code> for <code>for...of</code> variables; that's the modern default.</p>

    <p><strong>Confusion: "changing the array's length mid-loop is safe"</strong></p>
    <p>It usually isn't. Adding items in a forward <code>for</code> loop can extend <code>length</code> and cause an infinite loop. Removing items shifts everything down and causes you to skip. If you need to modify during iteration, either walk backwards, or build a new array with <code>.filter()</code> / <code>.map()</code> and assign it back.</p>

    <p><strong>Confusion: "<code>for...of</code> is slower than a classic <code>for</code>"</strong></p>
    <p>In micro-benchmarks, sometimes — but almost never enough to matter in real code. Modern engines optimize both heavily. Pick the form that reads clearest for the job; only reach for raw <code>for</code> for performance if you've measured a real bottleneck.</p>

    <p><strong>Confusion: "nested loops always mean <code>i</code> and <code>j</code>"</strong></p>
    <p>They're a convention (again, from math), not a rule. Descriptive names — <code>row</code>/<code>col</code>, <code>outerIdx</code>/<code>innerIdx</code>, <code>userIdx</code>/<code>orderIdx</code> — read much more clearly in real code. Use <code>i</code>/<code>j</code> for genuinely generic algorithms; use descriptive names when the loops mean something specific.</p>
  `,

  /* 2.3 Common mistakes */
  'topics-9-11-2-3': `
<pre class="language-javascript"><code class="language-javascript">// Off-by-one with <=
const items = ['a', 'b', 'c'];
for (let i = 0; i <= items.length; i++) {
  console.log(items[i]);
}
// wrong: last pass logs undefined
// fix: use <
for (let i = 0; i < items.length; i++) {
  console.log(items[i]);
}</code></pre>

<pre class="language-javascript"><code class="language-javascript">// Forgetting the counter update — infinite loop
let i = 0;
while (i < items.length) {
  console.log(items[i]);
  // wrong: no i++, this hangs the tab
}
// fix: increment inside the body
let j = 0;
while (j < items.length) {
  console.log(items[j]);
  j++;
}</code></pre>

<pre class="language-javascript"><code class="language-javascript">// Trying to break out of forEach
[1, 2, 3, 4].forEach(n => {
  if (n === 3) break;
  console.log(n);
});
// wrong: SyntaxError — break isn't allowed inside a callback
// fix: use for...of
for (const n of [1, 2, 3, 4]) {
  if (n === 3) break;
  console.log(n);
}</code></pre>

<pre class="language-javascript"><code class="language-javascript">// Using for...in on an array
const items = ['a', 'b', 'c'];
for (const x in items) {
  console.log(x.toUpperCase());
}
// wrong: x is a string key ("0", "1", "2"), toUpperCase gives "0", "1", "2"
// fix: use for...of for values
for (const x of items) {
  console.log(x.toUpperCase());   // "A", "B", "C"
}</code></pre>

<pre class="language-javascript"><code class="language-javascript">// Removing items while walking forward
const items = ['a', 'b', 'c', 'd'];
for (let i = 0; i < items.length; i++) {
  if (items[i] === 'b') items.splice(i, 1);
}
// wrong: 'c' gets skipped because it shifts into index 1 after removing 'b'
// fix: walk backwards, or use filter
const kept = ['a', 'b', 'c', 'd'].filter(v => v !== 'b');   // ['a', 'c', 'd']</code></pre>

<pre class="language-javascript"><code class="language-javascript">// Awaiting inside forEach
async function loadAll(urls) {
  urls.forEach(async url => {
    await fetch(url);
  });
  console.log('done');
}
// wrong: 'done' prints before any fetch finishes
// fix: use for...of
async function loadAllFixed(urls) {
  for (const url of urls) {
    await fetch(url);
  }
  console.log('done');
}</code></pre>

<pre class="language-javascript"><code class="language-javascript">// Declaring the accumulator inside the loop
const prices = [10, 20, 30];
for (const p of prices) {
  let total = 0;
  total += p;
}
// wrong: total resets to 0 every pass — final total is unreachable
// fix: declare outside
let total = 0;
for (const p of prices) {
  total += p;
}
// total is 60</code></pre>

<pre class="language-javascript"><code class="language-javascript">// Reusing the same counter name in nested loops with var
for (var i = 0; i < 3; i++) {
  for (var i = 0; i < 3; i++) {
    console.log(i);
  }
}
// wrong: inner i overwrites outer i — outer loop runs once
// fix: use let and distinct names
for (let row = 0; row < 3; row++) {
  for (let col = 0; col < 3; col++) {
    console.log(row, col);
  }
}</code></pre>

<pre class="language-javascript"><code class="language-javascript">// Expecting forEach to return the built-up array
const doubled = [1, 2, 3].forEach(n => n * 2);
console.log(doubled);
// wrong: undefined — forEach always returns undefined
// fix: use map
const doubled2 = [1, 2, 3].map(n => n * 2);   // [2, 4, 6]</code></pre>
  `,

  /* --- Chunk 3: In Practice --- */

  /* 3.0 Tiny examples */
  'topics-9-11-3-0': `
<pre class="language-javascript"><code class="language-javascript">const colors = ['red', 'green', 'blue'];

// Print each item
for (const c of colors) console.log(c);

// Print with index
colors.forEach((c, i) => console.log(i, c));

// Total a number array
let total = 0;
for (const n of [10, 20, 30]) total += n;
// total === 60

// Find the biggest number
let max = -Infinity;
for (const n of [7, 2, 9, 3]) {
  if (n > max) max = n;
}
// max === 9

// Count how many match a condition
let unread = 0;
for (const m of messages) {
  if (m.read === false) unread++;
}

// Build a new array from an old one (manual — .map is cleaner)
const upper = [];
for (const c of colors) upper.push(c.toUpperCase());

// Search manually (early exit)
let found = null;
for (const u of users) {
  if (u.id === targetId) { found = u; break; }
}

// Walk backwards
for (let i = colors.length - 1; i >= 0; i--) {
  console.log(colors[i]);
}

// Every other item
for (let i = 0; i < colors.length; i += 2) {
  console.log(colors[i]);
}

// Nested loops for a 2D grid
const grid = [[1, 2], [3, 4]];
for (let r = 0; r < grid.length; r++) {
  for (let c = 0; c < grid[r].length; c++) {
    console.log(grid[r][c]);
  }
}

// Loop with break on a condition
for (const n of [1, 2, 3, 4, 5]) {
  if (n > 3) break;
  console.log(n);
}
// 1, 2, 3

// Loop with continue to skip
for (const n of [1, 2, 3, 4, 5]) {
  if (n % 2 === 0) continue;
  console.log(n);
}
// 1, 3, 5

// Get both index and item from for...of
for (const [i, c] of colors.entries()) {
  console.log(i, c);
}</code></pre>
  `,

  /* 3.1 Real website uses */
  'topics-9-11-3-1': `
    <p><strong>Example: rendering a list of product cards to the DOM</strong></p>
<pre class="language-javascript"><code class="language-javascript">for (const product of products) {
  const card = document.createElement('div');
  card.className = 'card';
  card.innerHTML = \`<h3>\${product.name}</h3><p>\${product.price}</p>\`;
  container.appendChild(card);
}</code></pre>

    <p><strong>Example: summing a shopping cart's line-item totals</strong></p>
<pre class="language-javascript"><code class="language-javascript">let subtotal = 0;
for (const item of cart) {
  subtotal += item.price * item.quantity;
}</code></pre>

    <p><strong>Example: counting unread messages for a notification badge</strong></p>
<pre class="language-javascript"><code class="language-javascript">let unread = 0;
for (const m of messages) {
  if (!m.read) unread++;
}
badge.textContent = unread;</code></pre>

    <p><strong>Example: attaching a click handler to every button in a group</strong></p>
<pre class="language-javascript"><code class="language-javascript">const buttons = document.querySelectorAll('.tab');
buttons.forEach((btn, i) => {
  btn.addEventListener('click', () => activateTab(i));
});</code></pre>

    <p><strong>Example: applying a tax rate to every price in place</strong></p>
<pre class="language-javascript"><code class="language-javascript">for (let i = 0; i < prices.length; i++) {
  prices[i] = prices[i] * 1.0725;
}</code></pre>

    <p><strong>Example: searching for the first matching user and stopping</strong></p>
<pre class="language-javascript"><code class="language-javascript">let match = null;
for (const u of users) {
  if (u.email === targetEmail) {
    match = u;
    break;
  }
}
if (match) showProfile(match);</code></pre>

    <p><strong>Example: rendering a tic-tac-toe board from a 2D array</strong></p>
<pre class="language-javascript"><code class="language-javascript">for (let row = 0; row < board.length; row++) {
  for (let col = 0; col < board[row].length; col++) {
    const cell = document.querySelector(\`[data-r="\${row}"][data-c="\${col}"]\`);
    cell.textContent = board[row][col];
  }
}</code></pre>

    <p><strong>Example: loading a list of URLs sequentially with await</strong></p>
<pre class="language-javascript"><code class="language-javascript">for (const url of urls) {
  const res = await fetch(url);
  const data = await res.json();
  results.push(data);
}</code></pre>
  `,

  /* 3.2 Connects to */
  'topics-9-11-3-2': `
    <ul>
      <li><strong>Reading items with bracket notation</strong> → what <code>arr[i]</code> does inside every classic <code>for</code> loop</li>
      <li><strong>Updating items</strong> → what <code>arr[i] = value</code> does when you loop to mutate in place</li>
      <li><strong>Array .length</strong> → the stopping point for almost every array loop</li>
      <li><strong>if / else</strong> → the conditional logic inside loop bodies (skip, count, filter, break)</li>
      <li><strong>break / continue</strong> → controlling flow inside classic <code>for</code> and <code>for...of</code></li>
      <li><strong>.forEach()</strong> → the callback-style loop for side effects</li>
      <li><strong>.map()</strong> → a loop that returns a new transformed array</li>
      <li><strong>.filter()</strong> → a loop that returns items matching a condition</li>
      <li><strong>.reduce()</strong> → a loop that boils an array down to one value</li>
      <li><strong>.find() / .some() / .every()</strong> → loops with a specific search intent, short-circuit on match</li>
      <li><strong>for...in</strong> → key iteration for OBJECTS (not arrays); easy to mix up with <code>for...of</code></li>
      <li><strong>let vs var</strong> → loop variable scoping; <code>let</code> gives per-iteration binding, <code>var</code> leaks</li>
      <li><strong>async / await</strong> → works inside <code>for</code> and <code>for...of</code>, breaks in <code>.forEach()</code></li>
      <li><strong>Nested arrays</strong> → nested loops walk each dimension</li>
      <li><strong>Debugging arrays</strong> → most loop bugs are off-by-one, wrong loop type, or accumulator scope</li>
    </ul>
  `,

  /* 3.3 See also */
  'topics-9-11-3-3': `
    <ul>
      <li>Reading items with bracket notation</li>
      <li>Updating items</li>
      <li>Array .length</li>
      <li>forEach(), map(), filter()</li>
      <li>reduce()</li>
      <li>includes() and find()</li>
      <li>for...of loops</li>
      <li>break and continue</li>
      <li>Nested arrays</li>
      <li>Common array mistakes</li>
      <li>let vs var</li>
    </ul>
  `,

















  /* ========================================================= 
   Sub-lesson: 3.10.21 Arrays → array of objects
 =======================================================*/

  /* --- Chunk 0: What & How --- */

  /* 0.0 What it is */
  'topics-9-20-0-0': `
    <p>An <strong>array of objects</strong> is exactly what it sounds like — an array whose items are all objects, usually with the same shape (same set of properties). It's the single most common data structure in real JavaScript. Every list of users, products, posts, tasks, orders, messages, or search results you'll ever work with is an array of objects. When you fetch data from an API, when you parse a CSV, when you read from a database, when you render a list of cards on a page — you're almost always dealing with an array of objects.</p>
    <p>The shape looks like this: <code>[{ id: 1, name: 'Os' }, { id: 2, name: 'Sam' }]</code>. The array gives you order and iteration ("here's a list of things"). The objects inside give each item structure ("each thing has these properties"). Together they model any collection where every item has multiple pieces of information — which is basically every real-world dataset. This lesson zooms in on the pattern itself: how to build one, how to reach into it, and the common operations that make arrays of objects the workhorse of JavaScript apps.</p>
  `,

  /* 0.1 Syntax */
  'topics-9-20-0-1': `
<pre class="language-javascript"><code class="language-javascript">// The basic shape — an array of object literals:
const users = [
  { id: 1, name: 'Os',   role: 'admin' },
  { id: 2, name: 'Sam',  role: 'user'  },
  { id: 3, name: 'Alex', role: 'user'  },
];

// Multi-line formatting is standard — one object per line, aligned properties
// are optional but common for readability.

// Same shape, different data — products, tasks, whatever
const products = [
  { id: 1, name: 'Coffee', price: 4, inStock: true  },
  { id: 2, name: 'Tea',    price: 3, inStock: true  },
  { id: 3, name: 'Cocoa',  price: 5, inStock: false },
];

// Empty array — starting state before data arrives
const posts = [];

// Reading — you index into the array to get an object, then property-access it
users[0];                   // { id: 1, name: 'Os', role: 'admin' }
users[0].name;              // 'Os'
users[0]['name'];           // 'Os' — same thing with bracket notation
users[1].role;              // 'user'
users.length;               // 3

// Adding a new object to the list
users.push({ id: 4, name: 'Priya', role: 'user' });
users.length;               // 4

// Finding a specific object by a property
const admin = users.find(u => u.role === 'admin');
// admin is the whole object: { id: 1, name: 'Os', role: 'admin' }

// Getting a list of one property from every object
const names = users.map(u => u.name);
// names is: ['Os', 'Sam', 'Alex', 'Priya']

// Filtering to keep only certain objects
const regularUsers = users.filter(u => u.role === 'user');
// regularUsers is: [{ Sam }, { Alex }, { Priya }]

// Wrong: forgetting the object braces — this becomes a flat list of values
const bad = [1, 'Os', 'admin', 2, 'Sam', 'user'];
// wrong: no structure — no way to tell which name belongs to which id
// fix: group related fields into objects
const good = [
  { id: 1, name: 'Os',  role: 'admin' },
  { id: 2, name: 'Sam', role: 'user'  },
];</code></pre>
  `,

  /* 0.2 Anatomy / Breakdown */
  'topics-9-20-0-2': `
<pre class="language-javascript"><code class="language-javascript">const users = [
  { id: 1, name: 'Os',   role: 'admin' },
  { id: 2, name: 'Sam',  role: 'user'  },
  { id: 3, name: 'Alex', role: 'user'  },
];

// Two layers of structure at once:
//
//   users               ← the ARRAY  (ordered, indexed by number)
//   users[0]            ← the OBJECT at position 0  (labeled by property name)
//   users[0].name       ← the VALUE inside that object
//
// Visualized:
//
//   users = [
//     [0] → { id: 1, name: 'Os',   role: 'admin' }
//     [1] → { id: 2, name: 'Sam',  role: 'user'  }
//     [2] → { id: 3, name: 'Alex', role: 'user'  }
//   ]
//
// The outer level uses NUMERIC indexes (0, 1, 2).
// Each inner object uses NAMED properties (id, name, role).
//
// You often chain both levels of access in a single expression:
//
//   users[0].name
//   │     │  │
//   │     │  └── property access — gets the "name" from the object
//   │     └───── array index — gets the object at position 0
//   └─────────── the array variable
//
// Step by step, what JS does:
//   1. Evaluate 'users' — get the array
//   2. Evaluate 'users[0]' — get the object at position 0
//   3. Evaluate 'users[0].name' — get the 'name' property of that object
//   4. Result: 'Os'

// The two levels of access aren't just for reading. They both work for writing:
users[0].name = 'Osvaldo';        // update a property on the first user
users.push({ id: 4, name: 'New' }); // add a whole new user to the array

// This two-level shape is why arrays of objects are so flexible: the array
// handles "which one" (position, iteration, count), the objects handle
// "what's it made of" (structured fields per item).</code></pre>
  `,

  /* 0.3 Syntax Details That Matter */
  'topics-9-20-0-3': `
    <p><strong>Every object in the array is usually the same shape.</strong> Nothing in JavaScript enforces this — you CAN mix shapes — but in practice, arrays of objects almost always have uniform structure. Every user has an <code>id</code> and a <code>name</code>. Every product has a <code>price</code>. Uniform shape means you can iterate confidently: <code>.map(u => u.name)</code> works because every <code>u</code> has a <code>name</code>. Mixed shapes force you to check each item's structure before using it, which is a code smell that usually means the data should be split into separate arrays.</p>
<pre class="language-javascript"><code class="language-javascript">// ✓ uniform — every item has id, name, role
const good = [
  { id: 1, name: 'Os',  role: 'admin' },
  { id: 2, name: 'Sam', role: 'user'  },
];

// ✗ mixed — some items have age, some don't, one is a string
const bad = [
  { id: 1, name: 'Os', age: 30 },
  { id: 2, name: 'Sam' },
  'anonymous',
];
// bad.map(u => u.age)  // [30, undefined, undefined] — mostly useless</code></pre>

    <p><strong>Reading requires two steps of access.</strong> First index into the array to get the object, then use property access to reach into that object. The syntax chains cleanly (<code>users[0].name</code>), but conceptually it's two operations: array lookup, then property lookup. Same for writing — <code>users[0].name = 'x'</code> is two steps.</p>

    <p><strong>Objects in the array are shared by reference.</strong> When you pull an object out with <code>const user = users[0]</code>, <code>user</code> and <code>users[0]</code> both point to the SAME object. Modifying properties on <code>user</code> modifies the object the array still points at. This is different from arrays of primitives, where extracting an item gives you an independent copy.</p>
<pre class="language-javascript"><code class="language-javascript">const users = [{ name: 'Os' }, { name: 'Sam' }];
const first = users[0];
first.name = 'Osvaldo';
users[0].name;              // 'Osvaldo' — the array's item changed too!

// If you want an independent copy of an item:
const copy = { ...users[0] };
copy.name = 'Different';
users[0].name;              // still 'Osvaldo' — copy is independent</code></pre>

    <p><strong>Finding by property is the most common lookup pattern.</strong> Instead of remembering the position of a specific object, you search by a property (usually an ID). <code>.find()</code> returns the first object whose callback returns true. <code>.findIndex()</code> returns the position of that object. <code>.filter()</code> returns all matching objects.</p>
<pre class="language-javascript"><code class="language-javascript">const users = [
  { id: 42, name: 'Os' },
  { id: 17, name: 'Sam' },
];

users.find(u => u.id === 42);       // { id: 42, name: 'Os' }
users.find(u => u.id === 999);      // undefined — no match
users.findIndex(u => u.id === 17);  // 1
users.filter(u => u.id > 20);       // [{ id: 42, name: 'Os' }]</code></pre>

    <p><strong>Extracting one property from every object is another core pattern.</strong> <code>.map(item => item.property)</code> gives you a flat array of just that property. Common uses: getting a list of names from users, a list of prices from products, a list of IDs to send to an API.</p>
<pre class="language-javascript"><code class="language-javascript">const users = [{ name: 'Os' }, { name: 'Sam' }, { name: 'Alex' }];
const names = users.map(u => u.name);   // ['Os', 'Sam', 'Alex']

const products = [{ price: 4 }, { price: 3 }, { price: 5 }];
const total = products.reduce((sum, p) => sum + p.price, 0);   // 12</code></pre>

    <p><strong>Updating one object in the array happens via find or findIndex.</strong> There's no "update by property" method built in. The pattern is: find the object (or its index), then modify. If you want to update immutably (without changing the original), map over the array and return a new object for the matching item.</p>
<pre class="language-javascript"><code class="language-javascript">// Mutating update (changes the array in place)
const idx = users.findIndex(u => u.id === 42);
if (idx !== -1) users[idx].name = 'Osvaldo';

// Immutable update (returns a new array with a new object)
const updated = users.map(u =>
  u.id === 42 ? { ...u, name: 'Osvaldo' } : u
);
// users is unchanged; 'updated' has the modified object</code></pre>

    <p><strong>Empty arrays and missing items are the two failure cases to guard.</strong> An empty array of objects still has <code>.length</code> 0 and all iteration methods handle it fine. But single-item lookups (<code>users.find(...)</code>, <code>users[0]</code>) can return <code>undefined</code>, and using that result as if it were an object throws. Optional chaining (<code>users.find(...)?.name</code>) is the standard defense.</p>
  `,

  /* --- Chunk 1: Why & When --- */

  /* 1.0 What problem it solves */
  'topics-9-20-1-0': `
    <p>Real-world data almost never fits into a flat list of single values. A list of users isn't just a list of names — each user has a name AND an email AND an ID AND a role AND probably ten other fields. A list of products isn't just prices — each product has a name, description, image, stock level, category. A single flat array can't represent this: <code>['Os', 'admin', 1, 'Sam', 'user', 2]</code> is unusable because there's no way to tell which fields belong together.</p>
    <p>Arrays of objects solve this by combining two structures: the array holds many things in order, and each object bundles the multiple fields of a single thing. You get both order AND structure at the same time. This is why every API response, every database query result, every parsed CSV, every list of anything meaningful in a real application ends up as an array of objects. It's not a design choice — it's the only shape that can carry the information faithfully.</p>
  `,

  /* 1.1 Why use it */
  'topics-9-20-1-1': `
    <p>Reach for an array of objects any time you have "a list of ___" where each item has multiple related pieces of data. A list of users where each user has a name and email. A list of tasks where each task has a title, due date, and completion status. A list of orders where each order has an ID, customer, items, and total. If you find yourself considering multiple parallel arrays (one for names, one for emails, one for roles), stop — you probably want one array of objects instead.</p>
    <p>The parallel-arrays alternative is worth calling out because it's a common beginner trap. <code>const names = ['Os', 'Sam']; const roles = ['admin', 'user'];</code> works for two fields, but breaks constantly: you have to keep both arrays in sync when adding, removing, sorting, or filtering, and every operation happens in two places. One array of objects is one source of truth: <code>const users = [{ name: 'Os', role: 'admin' }, { name: 'Sam', role: 'user' }]</code>. Adding a user is one push. Sorting sorts the whole record at once. Filtering keeps the whole record together. Nothing gets out of sync because there's only one place to change.</p>
    <p>The tradeoff: arrays of objects are heavier than flat arrays (each object has property-lookup overhead vs. direct value access), and they're harder to eyeball in the console than a simple list. For most real applications this doesn't matter — the readability and correctness benefits vastly outweigh the tiny performance cost. Save flat arrays for cases where the items really are just single values (a list of temperatures, a list of tags, a list of URLs).</p>
  `,

  /* 1.2 Where you use it */
  'topics-9-20-1-2': `
<pre class="language-javascript"><code class="language-javascript">// A list of users returned from an API
const users = await fetch('/api/users').then(r => r.json());
// users is [{ id, name, email, role, ... }, ...]

// A shopping cart
const cart = [
  { productId: 42, name: 'Coffee', price: 4, qty: 2 },
  { productId: 17, name: 'Tea',    price: 3, qty: 1 },
];

// Search results from a database query
const results = await db.query('SELECT * FROM posts LIMIT 20');
// results is [{ id, title, body, author_id, created_at }, ...]

// Rows parsed from a CSV
const rows = parseCsv(csvText);
// rows is [{ name: 'Os', age: '30' }, { name: 'Sam', age: '25' }]

// A list of DOM elements enriched with metadata
const cards = [...document.querySelectorAll('.card')].map(el => ({
  el,
  id: el.dataset.id,
  title: el.querySelector('h3').textContent,
}));

// Options in a dropdown
const options = [
  { value: 'us', label: 'United States' },
  { value: 'ca', label: 'Canada' },
  { value: 'mx', label: 'Mexico' },
];

// Navigation menu items
const navItems = [
  { path: '/',        label: 'Home',    icon: 'home'    },
  { path: '/about',   label: 'About',   icon: 'info'    },
  { path: '/contact', label: 'Contact', icon: 'mail'    },
];

// A history of user actions for undo
const history = [];
function doAction(action) {
  history.push({ type: action.type, data: action.data, time: Date.now() });
}

// Chat messages with sender and timestamp
const messages = [
  { from: 'Os',  text: 'hey',    time: 1234567890 },
  { from: 'Sam', text: 'hi',     time: 1234567900 },
];

// Anytime data has multiple fields per item and multiple items, this is
// the shape you'll reach for.</code></pre>
  `,

  /* 1.3 Plain English explanation */
  'topics-9-20-1-3': `
    <p>Imagine a filing cabinet. The cabinet as a whole is your array — it holds many folders in a specific order. Each folder is an object — it contains multiple pieces of information about one thing: a name label on the front, papers inside for different fields (address, phone, notes, whatever). You don't just have a stack of loose papers — that would be a flat array with no structure. You have organized folders, and the cabinet keeps them in order.</p>
    <p>To get to a specific field, you do two things: pull out the right folder (that's the array index — "folder 3, please"), then open it and read the specific paper you want ("the address, please"). That's exactly what <code>users[2].email</code> does: pull out user 2, then read the email field.</p>
    <p>The reason arrays of objects are everywhere in JavaScript is that real-world things have multiple properties, and you usually have many of them. A phone book isn't just a list of names — each entry has a name AND a number AND probably an address. A store's inventory isn't just prices — each product has a name AND price AND stock count. Once you start modeling anything real, you almost immediately need the "multiple things, each with multiple fields" shape. That's an array of objects, every time.</p>
  `,

  /* 1.4 Mental model */
  'topics-9-20-1-4': `
    <p>An array of objects is a two-level structure. The outer level is a list — ordered items you can index into, iterate over, count, and manipulate as a group. The inner level is a record — named fields you can read and write by property name. Together they give you "many records, in order," which is the fundamental shape of most real datasets.</p>
    <p>Access patterns split cleanly by which level you're operating on. Array-level operations use array methods and syntax: <code>users.length</code> for the count, <code>users[0]</code> for the first, <code>users.push(...)</code> to add, <code>users.map(...)</code> to transform, <code>users.filter(...)</code> to narrow, <code>users.find(...)</code> to locate. Object-level operations use property syntax: <code>user.name</code> to read, <code>user.name = 'x'</code> to write, <code>{ ...user, name: 'x' }</code> to copy with a change.</p>
    <p>The two levels chain when you need both. <code>users[0].name</code> is array-then-object. <code>users.map(u => u.name)</code> is array iteration where the callback does object property access. <code>users.find(u => u.id === 42).email</code> is find (array) then property access (object) — with the caveat that <code>.find()</code> can return undefined, so real code should guard the chain.</p>
    <p>The mental picture: <em>an array of objects is a spreadsheet</em>. The array is the rows. The properties are the columns. Each object is one row. Every row has the same columns. Adding a row is <code>.push</code>. Deleting a row is <code>.splice</code>. Sorting rows is <code>.sort</code>. Filtering rows is <code>.filter</code>. Getting one column across all rows is <code>.map(row => row.column)</code>. Getting one cell is <code>rows[i].column</code>. Once you see the spreadsheet shape, all the operations line up with things you already know how to do in a spreadsheet — and JavaScript is just the code version of those operations.</p>
  `,

  /* 1.5 Step-by-step walkthrough */
  'topics-9-20-1-5': `
<pre class="language-javascript"><code class="language-javascript">// Scenario: a shopping cart that supports adding items, updating quantities,
// removing items, and calculating a total. All using an array of objects.

const cart = [];

function addItem(product) {
  const existing = cart.find(item => item.productId === product.id);
  if (existing) {
    existing.qty += 1;
  } else {
    cart.push({
      productId: product.id,
      name: product.name,
      price: product.price,
      qty: 1,
    });
  }
  render();
}

function updateQty(productId, newQty) {
  const item = cart.find(item => item.productId === productId);
  if (item) item.qty = newQty;
  render();
}

function removeItem(productId) {
  const idx = cart.findIndex(item => item.productId === productId);
  if (idx !== -1) cart.splice(idx, 1);
  render();
}

function total() {
  return cart.reduce((sum, item) => sum + item.price * item.qty, 0);
}

// Walk through a user's session:

// Initial state: cart = []

// User clicks "Add Coffee" — product = { id: 1, name: 'Coffee', price: 4 }
// Step 1: cart.find checks for existing productId 1 → returns undefined
// Step 2: cart.push adds a new object
//         cart = [{ productId: 1, name: 'Coffee', price: 4, qty: 1 }]

// User clicks "Add Coffee" AGAIN
// Step 3: cart.find finds the existing coffee entry
// Step 4: existing.qty += 1
//         cart = [{ productId: 1, name: 'Coffee', price: 4, qty: 2 }]
//         (Notice: we didn't push a duplicate — we bumped qty on the existing object.)

// User clicks "Add Tea" — product = { id: 2, name: 'Tea', price: 3 }
// Step 5: cart.find for productId 2 → undefined
// Step 6: push a new object
//         cart = [
//           { productId: 1, name: 'Coffee', price: 4, qty: 2 },
//           { productId: 2, name: 'Tea',    price: 3, qty: 1 },
//         ]

// User changes Coffee qty from 2 to 5 via updateQty(1, 5)
// Step 7: cart.find for productId 1 → returns the coffee object
// Step 8: item.qty = 5 (mutates that object; the array holds a reference to it)
//         cart[0] is now { productId: 1, name: 'Coffee', price: 4, qty: 5 }

// User calls total()
// Step 9: .reduce walks each item
//         iteration 1: sum = 0 + 4*5 = 20
//         iteration 2: sum = 20 + 3*1 = 23
//         returns 23

// User removes Tea via removeItem(2)
// Step 10: cart.findIndex for productId 2 → returns 1
// Step 11: cart.splice(1, 1) removes that object from the array
//          cart = [{ productId: 1, name: 'Coffee', price: 4, qty: 5 }]

// Key patterns:
//   - .find() for "get the item where X matches"
//   - .findIndex() + .splice() for "remove the item where X matches"
//   - .reduce() for "add up something across all items"
//   - Direct property mutation (item.qty = 5) works because objects are
//     shared by reference — the array's item and the local 'item' variable
//     point to the same object.

// This is the shape of ~80% of real "manage a list of things" code.</code></pre>
  `,

  /* --- Chunk 2: The Click --- */

  /* 2.0 Debugging clue */
  'topics-9-20-2-0': `
    <p>Array-of-objects bugs cluster around a few very recognizable patterns.</p>
    <p><strong>1. "Cannot read properties of undefined (reading 'X')".</strong> You wrote <code>users[10].name</code> or <code>users.find(...).name</code> and the array didn't have an item at index 10, or find didn't match. The result is <code>undefined</code>, and <code>.name</code> on <code>undefined</code> throws. Fix: check first, or use optional chaining — <code>users[10]?.name</code>, <code>users.find(...)?.name</code>.</p>
    <p><strong>2. Modifying a shared object accidentally changes the array.</strong> You did <code>const user = users[0]; user.name = 'X';</code> and now <code>users[0].name</code> is also 'X'. That's not a bug — that's how object references work. If you want independent modification, make a copy first: <code>const user = { ...users[0] }</code>.</p>
    <p><strong>3. Sorting or filtering by position instead of by ID.</strong> You cached "the current user is at index 3" and then sorted the array. Now index 3 is a different user. Fix: track by a stable property (ID) and look up by ID each time you need the item.</p>
    <p><strong>4. <code>[object Object]</code> in your output.</strong> You did <code>console.log('user: ' + user)</code> or set <code>element.textContent = user</code>. Objects don't auto-stringify usefully — they become the literal text <code>"[object Object]"</code>. Fix: pick a property (<code>user.name</code>) or use <code>JSON.stringify(user)</code>.</p>
    <p><strong>5. <code>.map()</code> returned an array of undefineds.</strong> Your callback didn't return a value. <code>.map(u => { u.name })</code> uses a function body without a return — it always returns undefined. Fix: use an implicit return (<code>u => u.name</code>) or an explicit one (<code>u => { return u.name }</code>).</p>
    <p><strong>6. Shallow copy shares object items.</strong> <code>const copy = [...users]</code> makes a new array, but the items are still the same objects. Modifying <code>copy[0].name</code> changes <code>users[0].name</code> too. For fully independent copies: <code>const deep = users.map(u => ({ ...u }))</code>.</p>
    <p><strong>7. Comparing objects with <code>===</code> fails unexpectedly.</strong> Two objects with identical properties are NOT <code>===</code>-equal — reference equality only. Fix: compare by a stable property: <code>a.id === b.id</code>.</p>
    <p><strong>8. <code>.find()</code> found nothing and you didn't check.</strong> A common source of the "cannot read properties of undefined" error above. The pattern <code>const admin = users.find(u => u.role === 'admin')</code> works, but if there's no admin, <code>admin</code> is <code>undefined</code>. Always check or use optional chaining.</p>
    <p><strong>9. Iterating and mutating at the same time.</strong> You did <code>users.forEach((u, i) => { if (u.deleted) users.splice(i, 1) })</code>. Splicing while iterating skips items and produces wrong results. Fix: <code>users = users.filter(u => !u.deleted)</code>, or iterate in reverse.</p>
  `,

  /* 2.1 The part that makes it click */
  'topics-9-20-2-1': `
    <p>An array of objects is a spreadsheet: rows are items, columns are properties, and everything is accessible either by row-then-column (<code>users[0].name</code>) or by column-across-rows (<code>users.map(u => u.name)</code>). Once you see the spreadsheet analogy, all the operations line up: adding a row is push, filtering rows is filter, getting a column is map, sorting rows is sort, and grabbing one cell is index-then-property.</p>
    <p>The other click: objects inside the array are shared, not copied. Extracting an object from the array with <code>const user = users[0]</code> gives you the same object the array still holds. Mutating properties changes both. Reassigning the extracted variable (<code>user = { ... }</code>) only changes what the variable points to — the array still holds the original object. Understanding this reference behavior is what stops the "why did my array change on its own?" bugs from happening.</p>
  `,

  /* 2.2 Common confusions */
  'topics-9-20-2-2': `
    <p><strong>Confusion: "arrays of objects are a special JS feature"</strong></p>
    <p>They're not. It's just an array (a regular JavaScript array) where the items happen to be objects (regular JavaScript objects). There's no special syntax, no special methods, no distinct type — it's the composition of two things you already know.</p>

    <p><strong>Confusion: "each object in the array needs the exact same keys"</strong></p>
    <p>Not required by the language — but strongly recommended in practice. When shapes are uniform, iteration methods (<code>.map</code>, <code>.filter</code>, <code>.reduce</code>) work without special cases. When shapes vary, every callback needs to check what shape the current item is, which is a code smell.</p>

    <p><strong>Confusion: "I can compare two objects with <code>===</code>"</strong></p>
    <p>You can, but it checks reference identity, not content equality. Two objects with identical keys and values are NOT <code>===</code>-equal unless they're literally the same object. For content equality, compare specific properties or use a library.</p>
<pre class="language-javascript"><code class="language-javascript">const a = { id: 1, name: 'Os' };
const b = { id: 1, name: 'Os' };
a === b;                // false — different objects
a.id === b.id;          // true — value comparison</code></pre>

    <p><strong>Confusion: "<code>.find()</code> returns a copy"</strong></p>
    <p>It doesn't. It returns the same object reference the array holds. Modifying properties on the returned object modifies the array's item too.</p>

    <p><strong>Confusion: "shallow-copying the array with spread duplicates the objects"</strong></p>
    <p>It doesn't. <code>[...users]</code> makes a new array with new slots, but the slots hold the same object references. To copy objects too: <code>users.map(u => ({ ...u }))</code> for a one-level deep copy, or <code>structuredClone(users)</code> for a full deep copy.</p>

    <p><strong>Confusion: "if I use <code>const</code>, the objects inside can't change"</strong></p>
    <p>They can. <code>const users = [...]</code> means the variable <code>users</code> can't be reassigned. But you can still <code>users.push(...)</code>, <code>users[0].name = 'x'</code>, or anything else that mutates the array or its items.</p>

    <p><strong>Confusion: "the objects are stored by value inside the array"</strong></p>
    <p>They're stored by reference. Each slot in the array holds a pointer to an object elsewhere in memory. This is why extracting an item gives you the same object, why two array variables can share the same items, and why <code>[obj] === [obj]</code> compares references (and returns false because the outer arrays are different).</p>

    <p><strong>Confusion: "using an array of objects is slower than parallel arrays"</strong></p>
    <p>Slightly, in theory. Never enough to matter in real applications. The clarity and correctness benefit of arrays of objects outweighs any performance concern outside of extremely hot loops (which are rare in typical web code).</p>
  `,

  /* 2.3 Common mistakes */
  'topics-9-20-2-3': `
<pre class="language-javascript"><code class="language-javascript">// Accessing a property on a missing item
const users = [{ id: 1, name: 'Os' }];
const name = users[5].name;
// wrong: users[5] is undefined — .name on undefined throws
// fix: check first, or use optional chaining
const name2 = users[5]?.name;         // undefined, no throw</code></pre>

<pre class="language-javascript"><code class="language-javascript">// .find() with no match, then property access
const admin = users.find(u => u.role === 'admin');
console.log(admin.name);
// wrong: if no admin, admin is undefined → throws
// fix: check, or use optional chaining
console.log(admin?.name ?? 'no admin');</code></pre>

<pre class="language-javascript"><code class="language-javascript">// Modifying a shared object expecting the array not to change
const users = [{ name: 'Os' }, { name: 'Sam' }];
const first = users[0];
first.name = 'X';
console.log(users[0].name);
// This is EXPECTED behavior — 'first' is a reference to the same object
// If you wanted independent modification:
const copy = { ...users[0] };
copy.name = 'Different';
users[0].name;   // still 'X'</code></pre>

<pre class="language-javascript"><code class="language-javascript">// Concatenating an object directly (no .name)
const user = users[0];
alert('Hello, ' + user);
// wrong: "Hello, [object Object]"
// fix: reach into a property
alert('Hello, ' + user.name);</code></pre>

<pre class="language-javascript"><code class="language-javascript">// .map callback with no return
const names = users.map(u => { u.name });
console.log(names);
// wrong: [undefined, undefined, undefined]
// The { } makes it a function body; you need a return
// fix: implicit return with no braces, or explicit return
const names2 = users.map(u => u.name);              // implicit return
const names3 = users.map(u => { return u.name; }); // explicit return</code></pre>

<pre class="language-javascript"><code class="language-javascript">// Shallow-copying and modifying object properties
const users = [{ name: 'Os' }, { name: 'Sam' }];
const copy = [...users];
copy[0].name = 'Alex';
console.log(users[0].name);
// wrong: 'Alex' — objects are still shared
// fix: deep-copy the objects too
const deep = users.map(u => ({ ...u }));
deep[0].name = 'Alex';
users[0].name;   // still 'Os'</code></pre>

<pre class="language-javascript"><code class="language-javascript">// Sorting a shared array, breaking a cached position
const users = [{ id: 1 }, { id: 2 }, { id: 3 }];
const currentIndex = 0;
users.sort((a, b) => b.id - a.id);   // reverse
console.log(users[currentIndex].id);
// wrong: expected 1, got 3
// fix: track by ID, not position
const currentId = 1;
const currentUser = users.find(u => u.id === currentId);</code></pre>

<pre class="language-javascript"><code class="language-javascript">// Splicing while iterating
users.forEach((u, i) => {
  if (u.deleted) users.splice(i, 1);
});
// wrong: splicing shifts remaining items, forEach skips them
// fix: filter into a new array
const active = users.filter(u => !u.deleted);
// or iterate in reverse
for (let i = users.length - 1; i >= 0; i--) {
  if (users[i].deleted) users.splice(i, 1);
}</code></pre>

<pre class="language-javascript"><code class="language-javascript">// Comparing objects with ===
const target = { id: 1, name: 'Os' };
const found = users.find(u => u === target);
// wrong: === on objects checks reference; new object never matches
// fix: compare by ID
const found2 = users.find(u => u.id === target.id);</code></pre>
  `,

  /* --- Chunk 3: In Practice --- */

  /* 3.0 Tiny examples */
  'topics-9-20-3-0': `
<pre class="language-javascript"><code class="language-javascript">const users = [
  { id: 1, name: 'Os',   role: 'admin' },
  { id: 2, name: 'Sam',  role: 'user'  },
  { id: 3, name: 'Alex', role: 'user'  },
];

// Reading
users.length;                       // 3
users[0];                           // { id: 1, name: 'Os', role: 'admin' }
users[0].name;                      // 'Os'
users[0]['name'];                   // 'Os' — same thing

// Adding
users.push({ id: 4, name: 'Priya', role: 'user' });
users.length;                       // 4

// Updating a property on one item
users[0].role = 'superadmin';
users[0];                           // { id: 1, name: 'Os', role: 'superadmin' }

// Finding by property
users.find(u => u.id === 2);        // { id: 2, name: 'Sam', role: 'user' }
users.find(u => u.id === 999);      // undefined
users.findIndex(u => u.id === 2);   // 1
users.findIndex(u => u.id === 999); // -1

// Filtering
users.filter(u => u.role === 'user');   // 3 items

// Mapping to a single property
users.map(u => u.name);              // ['Os', 'Sam', 'Alex', 'Priya']
users.map(u => u.id);                // [1, 2, 3, 4]

// Mapping to a new object shape
users.map(u => ({ id: u.id, label: u.name.toUpperCase() }));

// Reducing to a single value
users.reduce((count, u) => u.role === 'user' ? count + 1 : count, 0);   // count of users

// Sorting by a property (mutating!)
[...users].sort((a, b) => a.name.localeCompare(b.name));   // sorted copy

// Checking existence
users.some(u => u.role === 'admin');    // true
users.every(u => u.id > 0);              // true

// Removing by ID
const removeId = 2;
const idx = users.findIndex(u => u.id === removeId);
if (idx !== -1) users.splice(idx, 1);

// Immutable update (returns new array)
const updated = users.map(u =>
  u.id === 1 ? { ...u, name: 'Osvaldo' } : u
);

// Optional chaining for safe access
users.find(u => u.id === 999)?.name;      // undefined, no throw</code></pre>
  `,

  /* 3.1 Real website uses */
  'topics-9-20-3-1': `
    <p><strong>Example: rendering a list of product cards</strong></p>
<pre class="language-javascript"><code class="language-javascript">list.innerHTML = products.map(p => \`
  &lt;article class="card"&gt;
    &lt;h3&gt;\${p.name}&lt;/h3&gt;
    &lt;p&gt;$\${p.price.toFixed(2)}&lt;/p&gt;
    &lt;button data-id="\${p.id}"&gt;Add to cart&lt;/button&gt;
  &lt;/article&gt;
\`).join('');</code></pre>

    <p><strong>Example: finding the current logged-in user from an array</strong></p>
<pre class="language-javascript"><code class="language-javascript">const currentUser = users.find(u => u.id === session.userId);
if (currentUser) profileEl.textContent = currentUser.name;</code></pre>

    <p><strong>Example: calculating the cart total</strong></p>
<pre class="language-javascript"><code class="language-javascript">const total = cart.reduce((sum, item) => sum + item.price * item.qty, 0);
totalEl.textContent = \`$\${total.toFixed(2)}\`;</code></pre>

    <p><strong>Example: filtering a list of tasks by status</strong></p>
<pre class="language-javascript"><code class="language-javascript">const active = tasks.filter(t => !t.completed);
const done   = tasks.filter(t =>  t.completed);
renderColumns(active, done);</code></pre>

    <p><strong>Example: updating one item by ID (immutably)</strong></p>
<pre class="language-javascript"><code class="language-javascript">const updated = todos.map(t =>
  t.id === targetId ? { ...t, completed: true } : t
);
setTodos(updated);</code></pre>

    <p><strong>Example: removing an item by ID (mutating)</strong></p>
<pre class="language-javascript"><code class="language-javascript">const idx = messages.findIndex(m => m.id === deletedId);
if (idx !== -1) messages.splice(idx, 1);
render();</code></pre>

    <p><strong>Example: building a dropdown from an options array</strong></p>
<pre class="language-javascript"><code class="language-javascript">select.innerHTML = countries.map(c =>
  \`&lt;option value="\${c.value}"&gt;\${c.label}&lt;/option&gt;\`
).join('');</code></pre>

    <p><strong>Example: pulling a specific field for a comma-separated summary</strong></p>
<pre class="language-javascript"><code class="language-javascript">const summary = users.map(u => u.name).join(', ');
// "Os, Sam, Alex, Priya"</code></pre>
  `,

  /* 3.2 Connects to */
  'topics-9-20-3-2': `
    <ul>
      <li><strong>Arrays</strong> → the outer structure that orders the items</li>
      <li><strong>Objects</strong> → the inner structure that groups properties per item</li>
      <li><strong>Array indexes</strong> → still used for positional access, then property access on the object</li>
      <li><strong>.find(), .findIndex()</strong> → the primary way to locate an object by a property</li>
      <li><strong>.filter()</strong> → narrow the list to matching objects</li>
      <li><strong>.map()</strong> → extract one property, or transform each object into a new shape</li>
      <li><strong>.reduce()</strong> → aggregate across objects (totals, counts, grouped results)</li>
      <li><strong>.some(), .every()</strong> → check if any/all objects match a condition</li>
      <li><strong>Spread operator (<code>...</code>)</strong> → shallow-copy an array; copy an object with changes</li>
      <li><strong>Optional chaining (<code>?.</code>)</strong> → safely access properties when the item might not exist</li>
      <li><strong>Reference behavior</strong> → objects extracted from the array share identity with the array's items</li>
      <li><strong>Sorting</strong> → sorting by a property requires a comparator: <code>(a, b) =&gt; a.field - b.field</code></li>
      <li><strong>Debugging</strong> → most bugs are missing items, shared-reference surprises, or [object Object] in output</li>
      <li><strong>JSON</strong> → arrays of objects are the standard shape of API responses; JSON.parse gives you exactly this</li>
      <li><strong>Rendering</strong> → the most common pattern in web dev is <code>list.map(item => \`&lt;template&gt;\`).join('')</code></li>
    </ul>
  `,

  /* 3.3 See also */
  'topics-9-20-3-3': `
    <ul>
      <li>What arrays are</li>
      <li>What objects are</li>
      <li>Array items/elements</li>
      <li>.find() and .findIndex()</li>
      <li>.filter()</li>
      <li>.map()</li>
      <li>.reduce()</li>
      <li>Spread operator</li>
      <li>Optional chaining</li>
      <li>Reference vs value</li>
      <li>Rendering a list to the DOM</li>
      <li>JSON.parse and JSON.stringify</li>
    </ul>
  `,

});