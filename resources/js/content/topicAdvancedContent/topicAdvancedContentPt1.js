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

     
});