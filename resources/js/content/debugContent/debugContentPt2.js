
Object.assign(CONTENT,{

/* ==========================================================
     SECTION 7: 7.5–7.9 (Console Tools, Variables, Functions, Arrays, Objects)
========================================================== */


/* ========================================================= 
   Sub-lesson: 7.5.1 Console Tools → console.log()
 =======================================================*/

  /* --- Chunk 0: What & How --- */

  /* 0.0 What it is */
  'debug-4-0-0-0': `
    <p><strong>console.log()</strong> is the built-in tool for inspecting any value from inside your running code. Not an error itself; it's the tool you use to find and fix almost every other error. Nearly every JavaScript bug is found by putting <code>console.log</code> in the right spot.</p>
    <p>Call it with any value — a variable, a string, an object, a DOM element, the result of an expression — and that value gets printed to the DevTools console panel so you can see it with your own eyes. It doesn't change your code's behavior. It doesn't fix anything. It just shows you what's actually happening at that exact moment in the code.</p>
  `,

  /* 0.1 Syntax */
  'debug-4-0-0-1': `
<pre class="language-javascript"><code class="language-javascript">// Basic form — log one value
console.log(user);

// Log multiple values in one call — separated by commas
console.log("user is:", user);
console.log("name:", user.name, "age:", user.age);

// Log an expression's result
console.log(items.length &gt; 0);
console.log(cart.total * 1.08);

// Log with a label for context (very common pattern)
console.log("BEFORE FILTER:", items);
console.log("AFTER FILTER:", filtered);</code></pre>

    <p>The shape is always the same: <code>console.log(</code> one or more values separated by commas <code>)</code>. Everything you pass gets printed on one line, space-separated.</p>
  `,

  /* 0.2 Anatomy / Breakdown */
  'debug-4-0-0-2': `
<pre class="language-javascript"><code class="language-javascript">console.log("user is:", user);
// │       │  │            │
// │       │  │            └── second argument — the value we care about
// │       │  └── first argument — a label so we know what this log is for
// │       └── the method name — always log, lowercase
// └── the console object — built into every browser

// under the hood:
// 1. console is a global object provided by the browser (like window, document).
// 2. .log is a method on that object.
// 3. calling it with () sends the arguments to DevTools' console panel.
// 4. DevTools prints each argument, space-separated, on one line.

// the label pattern:
// console.log("descriptive label:", value)
// is the single most useful habit in JS debugging.
// scanning 40 logs is impossible if they're all just numbers.
// "cart total:" 42 is instantly readable.</code></pre>
  `,

  /* 0.3 Syntax Details That Matter */
  'debug-4-0-0-3': `
    <p><strong>The parentheses are required.</strong> <code>console.log</code> without parentheses is just the function itself — the log doesn't actually run. Nothing appears in the console:</p>
<pre class="language-javascript"><code class="language-javascript">console.log        // this is the function value. it does not log anything.
console.log(user); // this calls the function. THIS logs.</code></pre>

    <p><strong>Multiple arguments are separated by commas, not <code>+</code>.</strong> Commas keep each value as its own type — objects stay clickable, numbers stay numbers. Using <code>+</code> forces string concatenation and loses that:</p>
<pre class="language-javascript"><code class="language-javascript">console.log("user:", user);        // ✓ user is still expandable as an object
console.log("user: " + user);      // ✗ prints "user: [object Object]" — useless

console.log("count:", 5);          // ✓ 5 is still a number
console.log("count: " + 5);        // works, but 5 is now part of a string</code></pre>

    <p><strong>Case matters.</strong> It's <code>console.log</code>, all lowercase. <code>Console.log</code>, <code>console.Log</code>, <code>console.LOG</code> all throw errors:</p>
<pre class="language-javascript"><code class="language-javascript">console.log(user);   // ✓
Console.log(user);   // ✗ ReferenceError: Console is not defined
console.Log(user);   // ✗ TypeError: console.Log is not a function</code></pre>

    <p><strong>The value is logged when the line runs, not when you look at the console.</strong> If the value changes later, the console still shows what it was at log time — mostly. Objects are the exception (see below).</p>

    <p><strong>Objects and arrays are logged by reference.</strong> This is subtle and can trick you: when you log an object, DevTools may show its <em>current</em> state when you expand it in the console, not its state at log time:</p>
<pre class="language-javascript"><code class="language-javascript">const user = { name: "Os" };
console.log(user);        // logs the object
user.name = "Alice";      // change it AFTER the log

// when you expand the logged object in DevTools, name may show "Alice"
// even though the log fired when name was "Os".
// this is because DevTools reads the object lazily.

// fix: log a snapshot if timing matters
console.log({ ...user });      // logs a copy — snapshot at log time
console.log(JSON.stringify(user));  // logs a string — definitely frozen</code></pre>

    <p><strong>Semicolons are optional but conventional.</strong> Same rules as any other JS statement.</p>
  `,

  /* --- Chunk 1: Why & When --- */

  /* 1.0 What problem it solves */
  'debug-4-0-1-0': `
    <p>When code isn't doing what you expect, you can't tell what's wrong just by reading it. The code says one thing; the values flowing through it might be another. A variable you thought was an array is actually undefined. A number you expected is a string. A function you thought returned something returned nothing. Reading the code doesn't tell you any of that — it only tells you what the code <em>says</em>, not what's actually happening.</p>
    <p><code>console.log</code> solves the "I can't see what's actually happening" problem. It lets you stop the guessing and look at the real values, at any point in the code, without changing anything about how the code runs. It turns invisible internal state into something you can see.</p>
  `,

  /* 1.1 Why use it */
  'debug-4-0-1-1': `
    <p>Because staring at code is the slowest possible way to find bugs. Reading through 30 lines trying to figure out why something is wrong is what beginners do. Experienced developers write one line of <code>console.log</code> and see the wrong value directly. It's faster, more reliable, and doesn't depend on your ability to mentally simulate the code correctly (which is exactly the ability that failed you when the bug happened).</p>
    <p>It's also cheap. A log costs one line of code and 3 seconds to add. If it doesn't help, delete it. If it does help, you just cut minutes or hours off the debugging session. The cost/benefit is so lopsided that "add a console.log" is the correct first move for almost every mystery.</p>
  `,

  /* 1.2 Where you use it */
  'debug-4-0-1-2': `
<pre class="language-javascript"><code class="language-javascript">// Right before the line you think is broken
console.log("about to filter:", items);
const filtered = items.filter(i =&gt; i.active);

// Inside a function, at the top — to confirm it runs and see its arguments
function calculateTotal(items) {
  console.log("calculateTotal called with:", items);
  // ...
}

// Inside a function, at the return — to see what it produced
function calculateTotal(items) {
  const total = /* ... */;
  console.log("calculateTotal returning:", total);
  return total;
}

// Inside a loop — to see each iteration
for (let item of items) {
  console.log("current item:", item);
  // ...
}

// Inside an event handler — to confirm it fires and see the event
btn.addEventListener("click", (event) =&gt; {
  console.log("clicked!", event);
});

// Before and after an operation — to see if the operation changed anything
console.log("before:", cart);
cart.push(newItem);
console.log("after:", cart);

// Inside a promise chain — to trace async values
fetch("/api/user")
  .then(res =&gt; {
    console.log("response:", res);
    return res.json();
  })
  .then(data =&gt; {
    console.log("data:", data);
  });

// Inside a condition — to see which branch runs
if (user.role === "admin") {
  console.log("took admin path");
} else {
  console.log("took user path");
}</code></pre>

    <p>The general rule: log wherever your mental model of what should be happening might be wrong. Anywhere you're guessing about a value, log it. Anywhere you're not sure if a line runs, log inside it.</p>
  `,

  /* 1.3 Plain English explanation */
  'debug-4-0-1-3': `
    <p>Imagine you're driving with a friend who's giving you directions from memory, and something's clearly wrong — you should have hit the highway by now. You pull over and ask them to actually look at the map instead of guessing. Once they look, they say "oh, we should have turned left three blocks ago."</p>
    <p><code>console.log</code> is looking at the map. Your code's guessing is you writing what you <em>think</em> is happening. The log makes the code stop guessing and show you the actual value. Nine times out of ten, the bug is right there — a value that's not what you thought it was.</p>
  `,

  /* 1.4 Mental model */
  'debug-4-0-1-4': `
    <p>Think of your running code as a factory conveyor belt. Values move down the belt from one line to the next, changing shape as they pass through functions and operations. When something comes out wrong at the end, you can't tell where it went wrong just by staring at the belt.</p>
    <p><code>console.log</code> is like taping a little camera to a specific spot on the belt. Every time a value passes that spot, the camera shows you what it looks like at that exact moment. Add a camera before the broken step, and another after, and you can see whether the value was already wrong before that step (bug is upstream) or whether the step itself is what broke it (bug is right there).</p>
    <p>The more cameras you add, the more precisely you can locate the bug. Every log is a checkpoint saying "at this exact point in the code, this value was this."</p>
  `,

  /* 1.5 Step-by-step walkthrough */
  'debug-4-0-1-5': `
<pre class="language-javascript"><code class="language-javascript">const user = { name: "Os", age: 30 };
console.log("user is:", user);

// what happens when this line runs:
// 1. JS reaches the console.log line.
// 2. it evaluates each argument, in order:
//    - "user is:" is already a string. its value is "user is:".
//    - user is a variable. JS looks it up. its value is { name: "Os", age: 30 }.
// 3. JS looks up the console object (a built-in global provided by the browser).
// 4. JS looks up the .log method on the console object.
// 5. JS calls console.log with the two evaluated arguments.
// 6. console.log passes those arguments to DevTools' console panel.
// 7. DevTools receives them and formats the output:
//    - the string "user is:" is printed as-is.
//    - the object { name: "Os", age: 30 } is printed as a preview,
//      with a small arrow you can click to expand.
// 8. one line of output appears in the console: user is: {name: "Os", age: 30}
// 9. code execution continues to the next line.

// what console.log does NOT do:
// - it doesn't stop execution.
// - it doesn't change any variable.
// - it doesn't return a value you care about (technically returns undefined).
// - it doesn't "watch" the value — it captures it at THIS moment only.

// if you want to see the value at another moment, add another log.</code></pre>
  `,

  /* --- Chunk 2: The Click --- */

  /* 2.0 Debugging clue */
  'debug-4-0-2-0': `
    <p>If you added a <code>console.log</code> and nothing shows up in the console, check these fast:</p>
<pre class="language-javascript"><code class="language-javascript">// Check 1: is DevTools open, and are you looking at the Console tab?
// If DevTools isn't open, logs still fire, but you can't see them.

// Check 2: is the console filter set to "All levels"?
// If it's set to "Errors" only, log-level messages are hidden.

// Check 3: is the log inside a code path that actually runs?
// The line has to execute for the log to fire.
function handleClick() {
  console.log("inside handler");   // only fires when handleClick is CALLED
}

// Check 4: did an earlier error stop execution?
// If line 10 throws and your log is on line 20, line 20 never ran.
// Scroll up in the console. Fix the first red error.

// Check 5: did you write console.log without parentheses?
console.log     // does nothing
console.log();  // logs (empty output)
console.log(x); // logs x</code></pre>
    <p>90% of "my log isn't working" is one of these five. Almost never a browser bug.</p>
  `,

  /* 2.1 The part that makes it click */
  'debug-4-0-2-1': `
    <p>The aha is realizing that <code>console.log</code> isn't a "special debugging feature" — it's just a normal function call, like anything else. <code>console</code> is a regular object. <code>log</code> is a regular method. Calling it prints something to DevTools. That's it.</p>
<pre class="language-javascript"><code class="language-javascript">// console.log is just a method call. same shape as:
Math.round(4.7);
Array.isArray(x);
document.querySelector(".btn");

// there's nothing magic about it. you're calling a function.
// the function happens to send its arguments to a panel in DevTools.
// you can call it anywhere any other line of code can run.</code></pre>
    <p>Once that clicks, you stop treating it as this "thing you do when something's wrong" and start using it constantly — mid-refactor, while writing new code, to confirm your assumptions in real time. It becomes a normal part of the coding rhythm, not a last-resort tool.</p>
  `,

  /* 2.2 Common confusions */
  'debug-4-0-2-2': `
    <p><strong>"I added a console.log but nothing shows up in the console."</strong> Almost always one of three things: (1) DevTools isn't open, (2) the console filter is hiding the log level, or (3) the line never ran because it's inside a function/condition that didn't fire. Add a log <em>before</em> the mystery log to see which is the case.</p>

    <p><strong>"My log shows the object's future state, not what it was at log time."</strong> This is the object-by-reference gotcha. DevTools reads objects lazily — when you click to expand them, it shows the current state, not a snapshot. If you need a frozen picture, log a copy: <code>console.log({ ...obj })</code> or <code>console.log(JSON.stringify(obj))</code>.</p>

    <p><strong>"console.log slowed my code down."</strong> Individual logs are fast. But logs inside tight loops that run thousands of times per frame — like inside a <code>mousemove</code> handler or an animation loop — can make DevTools sluggish. Remove them once you're done debugging, or wrap them in a condition that only fires occasionally.</p>

    <p><strong>"I'm logging but I still can't find the bug."</strong> You're probably logging in the wrong spot. If the log doesn't show the wrong value, the bug happens somewhere the log doesn't see. Add more logs in more places — before the log, after the log, inside the functions being called. Bracket the problem: find a spot where the value is correct, and a spot where it's wrong, and the bug is between them.</p>

    <p><strong>"Are these logs going to end up in production?"</strong> Yes, unless you remove them or your build tool strips them. Users won't see them (unless they open DevTools themselves), but they'll fire and take up cycles. For real projects, remove debug logs before shipping.</p>
  `,

  /* 2.3 Common mistakes */
  'debug-4-0-2-3': `
<pre class="language-javascript"><code class="language-javascript">// Mistake 1: forgetting parentheses
console.log user;   // ✗ SyntaxError
console.log         // ✗ silent — does nothing
console.log(user);  // ✓

// Mistake 2: using + instead of commas
console.log("user: " + user);   // ✗ prints "user: [object Object]"
console.log("user:", user);     // ✓ user stays clickable/expandable

// Mistake 3: logging with no label
console.log(x);
console.log(y);
console.log(z);
// three unlabeled values scroll by. which was which? no idea.
// fix:
console.log("x:", x);
console.log("y:", y);
console.log("z:", z);

// Mistake 4: logging an object and expecting a frozen snapshot
console.log(user);          // logs a reference
user.name = "changed";      // mutate the object
// expanding the log in DevTools may show "changed" instead of the original
// fix:
console.log({ ...user });                  // spread into a new object
console.log(JSON.stringify(user));         // freeze as a string

// Mistake 5: logging inside a tight loop
window.addEventListener("mousemove", (e) =&gt; {
  console.log("mouse:", e.clientX, e.clientY);   // fires 60+ times per second
});
// slows DevTools to a crawl. fix: log conditionally or remove after debugging.

// Mistake 6: leaving debug logs in production
console.log("user info:", user);   // exposes data to anyone with DevTools open
// fix: remove before shipping, or use a build step to strip them.

// Mistake 7: using console.log for something that should be console.error
try {
  doSomething();
} catch (err) {
  console.log(err);   // ✗ makes a real error look like normal output
}
// fix:
try {
  doSomething();
} catch (err) {
  console.error(err); // ✓ red, with stack trace, filterable as an error
}

// Mistake 8: assuming logs are synchronous with the visible UI
console.log("state:", state);
render(state);
// the log fires at the console.log line. render happens after.
// if render mutates state, expanding the logged object may show the post-render state.</code></pre>
  `,

  /* --- Chunk 3: In Practice --- */

  /* 3.0 Tiny examples */
  'debug-4-0-3-0': `
<pre class="language-javascript"><code class="language-javascript">// Log a variable
console.log(user);

// Log with a label
console.log("user:", user);

// Log multiple values
console.log("name:", user.name, "age:", user.age);

// Log an expression's result
console.log(items.length &gt; 0);

// Log inside a function
function calculateTotal(items) {
  console.log("calculateTotal called");
  return items.reduce((sum, i) =&gt; sum + i.price, 0);
}

// Log at each step
console.log("STEP 1:", items);
const filtered = items.filter(i =&gt; i.active);
console.log("STEP 2:", filtered);
const total = filtered.reduce((sum, i) =&gt; sum + i.price, 0);
console.log("STEP 3:", total);

// Log inside a loop
for (let i = 0; i &lt; items.length; i++) {
  console.log("iteration", i, "item:", items[i]);
}

// Log inside a click handler
btn.addEventListener("click", (e) =&gt; {
  console.log("clicked", e.target);
});

// Log the type as well as the value
console.log("x:", x, "type:", typeof x);

// Log a snapshot of an object
console.log("snapshot:", { ...user });

// Log with an emoji or marker to make it stand out
console.log("🔴 CART UPDATED:", cart);
console.log("=========== HERE ===========");</code></pre>
  `,

  /* 3.1 Real website uses */
  'debug-4-0-3-1': `
    <p><strong>Example: finding out why a total is wrong</strong></p>
<pre class="language-javascript"><code class="language-javascript">function calculateTotal(items) {
  let total = 0;
  for (let item of items) {
    console.log("current item:", item);
    console.log("adding price:", item.price);
    total += item.price;
    console.log("running total:", total);
  }
  return total;
}
// running this shows every step. if any log shows undefined or NaN,
// that's exactly where the bug lives. no more guessing.</code></pre>

    <p><strong>Example: confirming a fetch actually returned what you expected</strong></p>
<pre class="language-javascript"><code class="language-javascript">fetch("/api/user")
  .then(res =&gt; {
    console.log("status:", res.status);
    console.log("ok:", res.ok);
    return res.json();
  })
  .then(data =&gt; {
    console.log("data:", data);
    render(data);
  });
// if render breaks, you can see whether the API returned what you expected
// or whether the shape was totally different.</code></pre>

    <p><strong>Example: verifying an event listener actually fires</strong></p>
<pre class="language-javascript"><code class="language-javascript">document.querySelector(".save-btn").addEventListener("click", (e) =&gt; {
  console.log("save clicked!", e);
  saveForm();
});
// "clicking the save button does nothing" is either:
//   - the listener never fires (log doesn't appear → wrong selector, wrong element)
//   - the listener fires but saveForm is broken (log appears, then error)
// one console.log tells you which side of the wall the bug is on.</code></pre>

    <p><strong>Example: bracketing an async problem</strong></p>
<pre class="language-javascript"><code class="language-javascript">async function loadDashboard() {
  console.log("1. starting");
  const user = await fetchUser();
  console.log("2. got user:", user);
  const stats = await fetchStats(user.id);
  console.log("3. got stats:", stats);
  render(user, stats);
  console.log("4. rendered");
}
// if the dashboard never appears, the missing log tells you exactly which step hung.
// see "2" but never "3"? fetchStats is the problem.
// see "3" but not "4"? render is throwing.</code></pre>

    <p><strong>Example: quick "did this run" sanity check</strong></p>
<pre class="language-javascript"><code class="language-javascript">function handleSubmit(form) {
  console.log("handleSubmit ran");
  // ... the rest
}
// if the log doesn't appear when you expected, the function was never called.
// the bug isn't inside the function — it's whatever should have called it.</code></pre>
  `,

  /* 3.2 Connects to */
  'debug-4-0-3-2': `
    <ul>
      <li><strong><code>console.warn()</code></strong> → yellow-highlighted logs for concerning but non-fatal issues</li>
      <li><strong><code>console.error()</code></strong> → red logs for actual problems, with a stack trace</li>
      <li><strong><code>console.table()</code></strong> → arrays and objects displayed as a scannable table</li>
      <li><strong><code>console.dir()</code></strong> → expandable inspector view for DOM elements and objects</li>
      <li><strong><code>typeof</code></strong> → check the type of a value, often logged together with the value</li>
      <li><strong><code>Array.isArray()</code></strong> → confirm a value is an array specifically</li>
      <li><strong><code>debugger</code></strong> → pause execution to inspect all values at once</li>
      <li><strong>DevTools Console panel</strong> → where <code>console.log</code> output appears</li>
      <li><strong>Variables</strong> → most logs are checking what's in a variable</li>
      <li><strong>Functions</strong> → logging inside functions confirms they run and what they receive</li>
      <li><strong>Reading error messages</strong> → logs help identify what caused an error</li>
    </ul>
  `,

  /* 3.3 See also */
  'debug-4-0-3-3': `
    <ul>
      <li><code>console.warn()</code></li>
      <li><code>console.error()</code></li>
      <li><code>console.table()</code></li>
      <li><code>console.dir()</code></li>
      <li><code>typeof</code></li>
      <li><code>debugger</code></li>
      <li>Reading error messages</li>
      <li>Checking values before broken line</li>
      <li>DevTools Console panel</li>
      <li>Debugging variables</li>
      <li>Debugging functions</li>
    </ul>
  `,

  /* ========================================================= 
   Sub-lesson: 7.5.2 Console Tools → console.warn()
 =======================================================*/

  /* --- Chunk 0: What & How --- */

  /* 0.0 What it is */
  'debug-4-1-0-0': `
    <p><strong>console.warn()</strong> is a variant of <code>console.log</code> that prints its output as a yellow-highlighted warning message in DevTools. Same behavior as log (prints whatever you pass), but visually louder. Used to flag "this isn't broken, but it's suspicious" — a fallback firing, a deprecated function being called, a value that was unexpected but recoverable.</p>
    <p>Functionally it does the same job as <code>console.log</code>. Visually, it stands out — you can spot warnings in a wall of logs immediately, and DevTools counts them separately. The purpose isn't different behavior. It's different <em>importance</em>. Regular logs are "here's a value I want to see." Warnings are "here's something worth noticing."</p>
  `,

  /* 0.1 Syntax */
  'debug-4-1-0-1': `
<pre class="language-javascript"><code class="language-javascript">// Basic form — warn about one value
console.warn("cart is empty");

// Warn with a value alongside a label
console.warn("unexpected user role:", user.role);

// Warn about a condition
if (items.length === 0) {
  console.warn("attempted to render an empty item list");
}

// Warn about a deprecated function being called
function oldFunction() {
  console.warn("oldFunction is deprecated, use newFunction instead");
  // ... still runs
}</code></pre>

    <p>Same shape as <code>console.log</code>: <code>console.warn(</code> one or more values separated by commas <code>)</code>. The only difference is how the output looks in DevTools.</p>
  `,

  /* 0.2 Anatomy / Breakdown */
  'debug-4-1-0-2': `
<pre class="language-javascript"><code class="language-javascript">console.warn("cart is empty:", cart);
// │       │   │                │
// │       │   │                └── second argument — the value that's suspicious
// │       │   └── first argument — a description of what's wrong
// │       └── the method name — warn, lowercase
// └── the console object — same one console.log uses

// under the hood:
// 1. console.warn does everything console.log does — sends the args to DevTools.
// 2. DevTools tags this message as level "warning" instead of "info."
// 3. the console UI displays it with:
//    - yellow background highlight
//    - a warning triangle icon
//    - a collapsible stack trace showing the call site
// 4. DevTools' warning counter increments.
// 5. code execution continues to the next line.</code></pre>
  `,

  /* 0.3 Syntax Details That Matter */
  'debug-4-1-0-3': `
    <p><strong>The output is yellow-highlighted in DevTools and includes a stack trace.</strong> Unlike <code>console.log</code>, each warn line comes with a small arrow you can expand to see where in your code the warning came from:</p>
<pre class="language-javascript"><code class="language-javascript">console.log("hello");    // plain line, no trace
console.warn("hello");   // yellow line, with a stack trace showing the file and line number

// the stack trace is helpful because warnings often come from deep inside
// libraries or utility functions — the trace tells you WHERE it originated.</code></pre>

    <p><strong>Case matters.</strong> It's <code>console.warn</code>, lowercase. <code>console.Warn</code> or <code>console.WARN</code> throws:</p>
<pre class="language-javascript"><code class="language-javascript">console.warn("careful");   // ✓
console.Warn("careful");   // ✗ TypeError: console.Warn is not a function</code></pre>

    <p><strong>Warnings don't stop execution.</strong> They're just messages. Your code keeps running normally after the warn:</p>
<pre class="language-javascript"><code class="language-javascript">console.warn("this is fine");
doSomething();   // this still runs. warn doesn't throw, doesn't return, doesn't block.</code></pre>

    <p><strong>DevTools counts warnings separately.</strong> The little icons at the top-right of DevTools show error count and warning count. Warnings contribute to the warning count; regular logs don't count toward anything. This matters when you're scanning for suspicious activity — "3 warnings" is easier to notice than three specific messages buried in a hundred logs.</p>

    <p><strong>Warnings can be filtered.</strong> DevTools console has filter buttons at the top: All levels, Errors, Warnings, Info, Verbose. If you only want to see warns and errors, filter to just those and everything else disappears:</p>
<pre class="language-javascript"><code class="language-javascript">// with the filter set to "Warnings":
console.log("hello");        // hidden
console.warn("suspicious");  // shown
console.error("broken");     // hidden (unless "Errors" is also on)</code></pre>

    <p><strong>Multiple arguments work the same as log.</strong> Comma-separated, each value keeps its type:</p>
<pre class="language-javascript"><code class="language-javascript">console.warn("bad response:", response, "expected shape:", expectedShape);
// all four arguments show up on one yellow line, each keeping its type.</code></pre>
  `,

  /* --- Chunk 1: Why & When --- */

  /* 1.0 What problem it solves */
  'debug-4-1-1-0': `
    <p>The problem with <code>console.log</code> is that everything looks the same. If you have 40 logs printing during a page load, and one of them is actually important, you'll never notice it — it looks identical to the other 39. Regular logs are useful for inspection, but they're terrible for "hey, this specific thing needs your attention."</p>
    <p><code>console.warn</code> solves that. It gives you a way to mark specific messages as "louder" — yellow highlight, a warning icon, counted separately in the DevTools UI. When you scroll past 40 white logs, the one yellow warning jumps out. When you're scanning DevTools for signs of trouble, the warning counter tells you at a glance whether anything unusual happened.</p>
  `,

  /* 1.1 Why use it */
  'debug-4-1-1-1': `
    <p>Because silent success is a debugging trap. Code that quietly falls back to a default when the real value is missing "works" — but hides the fact that the real value was missing. Weeks later, someone reports a bug ("why does the page say Guest?") and there's no trace of why. If you had warned when the fallback fired, you'd have known immediately.</p>
    <p>Use <code>console.warn</code> to make recoverable-but-suspicious situations visible. The app keeps working. The user sees no error. But when a developer opens DevTools, the yellow message says "hey — this happened, thought you should know." That's the difference between a bug you can catch in seconds and one you can't catch at all.</p>
  `,

  /* 1.2 Where you use it */
  'debug-4-1-1-2': `
<pre class="language-javascript"><code class="language-javascript">// Right before a fallback value is used
const timeout = config.timeout || 5000;
if (!config.timeout) {
  console.warn("timeout not configured, using default 5000ms");
}

// When an API response is missing an optional field
if (!response.user) {
  console.warn("response missing user field:", response);
  return { name: "Guest" };
}

// When a deprecated function is called
function oldMethod() {
  console.warn("oldMethod is deprecated. use newMethod() instead.");
  return newMethod();
}

// When a value is technically valid but suspicious
if (items.length &gt; 10000) {
  console.warn("rendering", items.length, "items — check pagination");
}

// When a retry fires
if (attempt &gt; 1) {
  console.warn("retrying request, attempt", attempt);
}

// When a fetch response is not the expected shape
if (!Array.isArray(response.items)) {
  console.warn("response.items was not an array:", response.items);
  response.items = [];
}

// When user input is auto-corrected
if (input.value !== sanitized) {
  console.warn("input was sanitized:", input.value, "→", sanitized);
}</code></pre>

    <p>The pattern: use <code>console.warn</code> wherever your code says "this is unusual but I can keep going." Never use it for normal flow — that's what <code>console.log</code> is for during debugging, or nothing at all in production.</p>
  `,

  /* 1.3 Plain English explanation */
  'debug-4-1-1-3': `
    <p>Think of the console as a notebook where your code writes down what's happening. Regular <code>console.log</code> lines are written in pencil — just notes. <code>console.warn</code> lines are written in yellow highlighter — same information, but you can't miss them when you flip through.</p>
    <p>Nothing is broken. The car is still driving. But there's a yellow "check engine" light that just came on. You want to see it. You might not stop driving right now, but you're going to investigate soon.</p>
  `,

  /* 1.4 Mental model */
  'debug-4-1-1-4': `
    <p>Picture your app as a busy restaurant kitchen. <code>console.log</code> is a chef muttering to themselves as they work — "adding salt, plating up, order 42 ready." Useful during a shift, but background noise. <code>console.warn</code> is the chef ringing a small bell. Not a fire alarm — just a "look up." A dish left the pass without garnish. A ticket came in with a substitution the kitchen usually forgets. Nothing wrong; just something worth registering.</p>
    <p>The bell doesn't stop the kitchen. It doesn't demand an evacuation. It just makes sure the situation gets a moment of attention before everyone moves on. If the bell rings a lot, that's the signal — something is systematically off, even though every dish is going out.</p>
  `,

  /* 1.5 Step-by-step walkthrough */
  'debug-4-1-1-5': `
<pre class="language-javascript"><code class="language-javascript">const config = { retries: 3 };   // no timeout specified

if (!config.timeout) {
  console.warn("timeout not configured, using default 5000ms");
}
const timeout = config.timeout || 5000;

// what happens when this code runs:
// 1. JS reaches the if statement.
// 2. it evaluates !config.timeout.
//    - config.timeout is undefined (never set).
//    - !undefined is true.
// 3. the if block runs.
// 4. JS reaches the console.warn line.
// 5. it evaluates the argument: "timeout not configured, using default 5000ms".
// 6. JS looks up console.warn (the warn method on the built-in console object).
// 7. JS calls console.warn with the string argument.
// 8. DevTools receives the message and displays it with:
//    - yellow background
//    - warning triangle icon
//    - a stack trace pointing to this file and line
//    - the warning counter at the top of DevTools increments by 1
// 9. code execution continues past the if block.
// 10. the timeout variable is assigned 5000 (the fallback).
// 11. the rest of the code runs normally.

// note: the warn didn't affect the code's behavior AT ALL.
// it just made the fallback visible in the console.
// removing the warn would produce identical runtime behavior,
// but you'd lose the ability to notice the fallback fired.</code></pre>
  `,

  /* --- Chunk 2: The Click --- */

  /* 2.0 Debugging clue */
  'debug-4-1-2-0': `
    <p>If you're expecting warnings and not seeing them, check these in order:</p>
<pre class="language-javascript"><code class="language-javascript">// Check 1: DevTools is open and you're on the Console tab
// Warnings only appear where logs appear.

// Check 2: the filter dropdown includes "Warnings"
// If you filtered to "Errors" only, warnings are hidden.
// Set the dropdown to "All levels" or check the Warnings box.

// Check 3: the warn line was reached
// If the warn is inside an if that didn't match, or a function that wasn't called,
// it never fires.
if (condition) {
  console.warn("condition was true");   // only fires when condition is true
}

// Check 4: no earlier error stopped execution
// A thrown error before the warn line means the warn line never runs.
// Scroll up in the console. Fix the first red error.

// Check 5: the console was cleared
// DevTools clears the console on page reload unless "Preserve log" is checked.
// A warning from before the reload is gone.

// Check 6: it's spelled correctly
console.warn("hi");   // ✓
console.Warn("hi");   // ✗ TypeError (which itself would show in the console)</code></pre>
    <p>If you <em>are</em> seeing warnings and don't recognize them, expand the stack trace on each one. It tells you exactly which file and line fired the warn, even when it came from deep inside a library or utility.</p>
  `,

  /* 2.1 The part that makes it click */
  'debug-4-1-2-1': `
    <p>The aha is that <code>console.warn</code> isn't a different <em>tool</em> from <code>console.log</code> — it's the same tool with a different <em>label</em>. Under the hood, both send arguments to DevTools. The only real difference is one word DevTools uses to render it: level "info" for log, level "warning" for warn. That word triggers the yellow highlight, the icon, the counter, the filter behavior.</p>
<pre class="language-javascript"><code class="language-javascript">// same tool, different tag:
console.log("hello");    // tagged "info" → white text
console.warn("hello");   // tagged "warning" → yellow highlight, counted, filterable

// choosing which to call is choosing which tag to attach.
// nothing about the output content differs. the visibility differs.</code></pre>
    <p>Once that clicks, choosing between them becomes obvious: is this a "just show me this value" moment (log) or a "the person reading this later needs to notice this happened" moment (warn)?</p>
  `,

  /* 2.2 Common confusions */
  'debug-4-1-2-2': `
    <p><strong>"When should I use warn vs log vs error?"</strong> Log is for developer curiosity ("what's this value?"). Warn is for "something unusual happened but the app is fine." Error is for "something is actually broken." If you use warn where you mean log, your console gets noisy with yellow. If you use log where you mean warn, real problems get lost in a wall of white text.</p>

    <p><strong>"My warn doesn't have a stack trace."</strong> Modern DevTools show the trace expandable via an arrow next to the message. If you don't see the arrow, it might be a very recent warn that only shows the call site line (e.g., <code>app.js:42</code>), and clicking that line jumps you to the code. Different browsers format the trace slightly differently.</p>

    <p><strong>"warns still show up even when I filter to errors only."</strong> DevTools uses independent checkboxes per level — you can have warnings on while errors are off, or vice versa. If you want only errors, uncheck the Warnings box.</p>

    <p><strong>"I put a warn in and now the console is full of them."</strong> That's the warn doing its job — the condition you warned about is happening more often than you expected. That's information. Either the condition is fine and the warn is too aggressive (remove or narrow it), or the condition is a real problem happening constantly (fix the cause).</p>

    <p><strong>"Warns look like errors to non-developers."</strong> If your users open DevTools and see yellow warnings, some will think the site is broken. In production code, don't warn about internal-only concerns — only warn about things a developer (yourself or a teammate) would want to see.</p>
  `,

  /* 2.3 Common mistakes */
  'debug-4-1-2-3': `
<pre class="language-javascript"><code class="language-javascript">// Mistake 1: using warn for normal debug logs
console.warn("user:", user);   // ✗ everything gets yellow-highlighted, warn loses meaning
// fix: use log for inspection
console.log("user:", user);

// Mistake 2: warning without a message
console.warn(cart);   // yellow line with no context — what am I warning about?
// fix: always include a description
console.warn("cart is unexpectedly empty:", cart);

// Mistake 3: warning inside a fast-firing handler
window.addEventListener("mousemove", () =&gt; {
  console.warn("mouse moved");   // fires 60+ times per second → console flood
});
// fix: warn only for unusual events, not every event

// Mistake 4: using warn when you should throw or use error
if (!user) {
  console.warn("no user found");   // ✗ app continues in a broken state
  renderProfile(user);             // will crash trying to read user.name
}
// fix: warn is for RECOVERABLE issues. if the code can't continue, use error or throw.
if (!user) {
  console.error("no user found — cannot render");
  return;
}

// Mistake 5: leaving verbose warnings in production
console.warn("debug: entering handleClick");   // ✗ visible to any user with DevTools open
// fix: remove or gate behind a debug flag

// Mistake 6: warning without any actionable info
console.warn("something happened");   // useless — what? where? why?
// fix: include the specific value, condition, or ID
console.warn("payment failed for order", orderId, "reason:", errorCode);

// Mistake 7: confusing warn (a message) with throw (an actual error)
console.warn("bad input");   // just prints. code keeps running with bad input.
// if the input is actually invalid and shouldn't be processed, throw or return early.

// Mistake 8: forgetting parentheses
console.warn "bad input";   // ✗ SyntaxError
console.warn("bad input");  // ✓</code></pre>
  `,

  /* --- Chunk 3: In Practice --- */

  /* 3.0 Tiny examples */
  'debug-4-1-3-0': `
<pre class="language-javascript"><code class="language-javascript">// Simple warning
console.warn("cart is empty");

// Warning with a value
console.warn("unexpected value:", value);

// Warning with multiple values
console.warn("bad response:", response, "expected shape:", expectedShape);

// Warning about a fallback
if (!config.timeout) {
  console.warn("timeout missing, using default 5000");
}

// Warning about a deprecated function
function old() {
  console.warn("old() is deprecated, use current() instead");
  return current();
}

// Warning about a suspicious count
if (items.length &gt; 1000) {
  console.warn("large list rendered:", items.length);
}

// Warning about a retry
console.warn("retrying, attempt:", attempt);

// Warning about a missing optional field
if (!user.avatar) {
  console.warn("user has no avatar, using placeholder", user);
}

// Warning about auto-correction
if (input !== sanitized) {
  console.warn("input sanitized:", input, "→", sanitized);
}

// Warning about a fetch failure that's being retried
console.warn("fetch failed, retrying in 1s:", err.message);

// Warning about odd input types
if (typeof userId !== "string") {
  console.warn("userId should be a string, got:", typeof userId, userId);
}</code></pre>
  `,

  /* 3.1 Real website uses */
  'debug-4-1-3-1': `
    <p><strong>Example: catching silent fallbacks in a user profile page</strong></p>
<pre class="language-javascript"><code class="language-javascript">function loadUserProfile(userId) {
  return fetch("/api/users/" + userId)
    .then(res =&gt; res.json())
    .then(data =&gt; {
      let user = data.user;
      if (!user) {
        console.warn("user missing from API response, falling back to Guest", {
          userId,
          response: data,
        });
        user = { name: "Guest" };
      }
      renderProfile(user);
    });
}
// every time the fallback fires, DevTools shows a yellow warning with details.
// during development, you spot the problem immediately.
// in production logs, the pattern is trackable.</code></pre>

    <p><strong>Example: warning when a feature flag hits a legacy code path</strong></p>
<pre class="language-javascript"><code class="language-javascript">function renderChart(data) {
  if (!features.newChartEngine) {
    console.warn("using legacy chart engine — should be migrated");
    return renderLegacyChart(data);
  }
  return renderNewChart(data);
}
// helps you track which parts of the codebase are still using the old path.
// the warn cost is nothing; the visibility is high.</code></pre>

    <p><strong>Example: warning about slow performance thresholds</strong></p>
<pre class="language-javascript"><code class="language-javascript">const start = performance.now();
processHugeList(items);
const duration = performance.now() - start;

if (duration &gt; 500) {
  console.warn("processHugeList took", duration.toFixed(0), "ms for", items.length, "items");
}
// only warns when performance is notably worse than expected.
// helps catch performance regressions before they become bug reports.</code></pre>

    <p><strong>Example: warning when third-party data doesn't match your schema</strong></p>
<pre class="language-javascript"><code class="language-javascript">function normalizeProduct(raw) {
  if (typeof raw.price !== "number") {
    console.warn("product price is not a number:", raw);
  }
  if (!raw.id) {
    console.warn("product missing id:", raw);
  }
  return {
    id: raw.id || crypto.randomUUID(),
    price: Number(raw.price) || 0,
    name: raw.name || "Untitled",
  };
}
// the function still returns a valid product every time.
// but any drift in the incoming data is flagged for later investigation.</code></pre>

    <p><strong>Example: deprecation warning as you migrate an API</strong></p>
<pre class="language-javascript"><code class="language-javascript">export function fetchOldUser(id) {
  console.warn(
    "fetchOldUser is deprecated and will be removed in v3. " +
    "use fetchUser({ id }) instead."
  );
  return fetchUser({ id });
}
// existing code still works. the warn fires every time the old function is called.
// helps you find and update all remaining call sites before removing the old function.</code></pre>
  `,

  /* 3.2 Connects to */
  'debug-4-1-3-2': `
    <ul>
      <li><strong><code>console.log()</code></strong> → same shape, no visual highlighting; for routine inspection</li>
      <li><strong><code>console.error()</code></strong> → the next step up in severity; for actual problems, not just suspicious ones</li>
      <li><strong><code>console.info()</code></strong> → same as log in most browsers, sometimes styled differently</li>
      <li><strong><code>console.debug()</code></strong> → verbose-level logs, often hidden by default</li>
      <li><strong>DevTools filter levels</strong> → the "All / Errors / Warnings / Info / Verbose" dropdown</li>
      <li><strong>Stack traces</strong> → warnings include a collapsible trace showing where they came from</li>
      <li><strong>Fallback values</strong> → <code>||</code> and <code>??</code> operators often deserve a warn nearby</li>
      <li><strong>Deprecated code</strong> → warns are the standard way to flag deprecated function calls</li>
      <li><strong><code>try</code>/<code>catch</code></strong> → warn is often the right response for a recoverable caught error</li>
    </ul>
  `,

  /* 3.3 See also */
  'debug-4-1-3-3': `
    <ul>
      <li><code>console.log()</code></li>
      <li><code>console.error()</code></li>
      <li><code>console.info()</code></li>
      <li><code>console.table()</code></li>
      <li><code>console.dir()</code></li>
      <li>DevTools console filters</li>
      <li>Reading stack traces</li>
      <li>Silent failures</li>
      <li>Fallback values (<code>||</code>, <code>??</code>)</li>
      <li>Deprecation patterns</li>
    </ul>
  `,

  /* ========================================================= 
   Sub-lesson: 7.5.3 Console Tools → console.error()
 =======================================================*/

  /* --- Chunk 0: What & How --- */

  /* 0.0 What it is */
  'debug-4-2-0-0': `
    <p><strong>console.error()</strong> is the loudest member of the console family. It prints its arguments in red, with an error icon, a full stack trace, and counts toward the DevTools "errors" badge in the corner. It doesn't stop your code — the line runs, prints, and execution continues — but visually and conceptually it's saying "this is a problem."</p>
    <p>Used for actual failures your code caught but decided to keep going through: a fetch that returned 500, an operation that couldn't complete, invalid input that the app is refusing but not crashing on. Where <code>console.warn</code> means "something's off but we're fine," <code>console.error</code> means "something broke, log it loudly."</p>
  `,

  /* 0.1 Syntax */
  'debug-4-2-0-1': `
<pre class="language-javascript"><code class="language-javascript">// Basic form — one message
console.error("save failed");

// With a value alongside a label
console.error("save failed for user:", userId);

// Inside a catch block — the most common spot
try {
  saveData();
} catch (err) {
  console.error("save failed:", err);
}

// Logging an error object directly (best pattern)
console.error(err);

// Multiple pieces of context
console.error("API request failed", {
  url: "/api/users",
  status: response.status,
  body: await response.text(),
});</code></pre>

    <p>Same shape as <code>console.log</code> and <code>console.warn</code>: <code>console.error(</code> one or more comma-separated values <code>)</code>. What's different is how DevTools displays it — red text, error icon, expanded stack trace by default.</p>
  `,

  /* 0.2 Anatomy / Breakdown */
  'debug-4-2-0-2': `
<pre class="language-javascript"><code class="language-javascript">console.error("save failed:", err);
// │       │    │              │
// │       │    │              └── second argument — the error object (or details)
// │       │    └── first argument — a description of what failed
// │       └── the method name — error, lowercase
// └── the console object — same one console.log and console.warn use

// under the hood:
// 1. console.error does everything console.log does — sends the args to DevTools.
// 2. DevTools tags this message as level "error."
// 3. the console UI displays it with:
//    - red text
//    - red error icon (a filled red circle with an X or !)
//    - the stack trace expanded by default (not collapsed like console.warn)
//    - a red background or side-bar highlight
// 4. DevTools' error counter (top-right badge) increments.
// 5. many error monitoring tools (Sentry, LogRocket, etc.) capture console.error
//    calls automatically. this makes error() the tool of choice for production logging.
// 6. code execution continues to the next line. error() does NOT throw.</code></pre>
  `,

  /* 0.3 Syntax Details That Matter */
  'debug-4-2-0-3': `
    <p><strong>The output is red-highlighted in DevTools and the stack trace is expanded by default.</strong> Every error shows a full trace right there in the console — no arrow to click, no collapsing. This is intentional: for real errors, you want the trace visible immediately:</p>
<pre class="language-javascript"><code class="language-javascript">console.log("hello");     // plain line, no trace
console.warn("hello");    // yellow, trace collapsed behind an arrow
console.error("hello");   // red, trace shown right below the message</code></pre>

    <p><strong>Passing an Error object gives you the best output.</strong> When you pass a real <code>Error</code> (or subclass), DevTools shows the error's message, name, and native stack trace — not just the site where you called <code>console.error</code>:</p>
<pre class="language-javascript"><code class="language-javascript">// less useful — the trace only shows where console.error was called
console.error("save failed");

// much more useful — the trace shows where the error was originally thrown
try {
  saveData();
} catch (err) {
  console.error(err);
  // DevTools shows: TypeError: Cannot read properties of undefined (reading 'id')
  //   at saveData (data.js:42)
  //   at handleSubmit (form.js:88)
  //   at HTMLFormElement.&lt;anonymous&gt; (main.js:12)
}

// best — a description AND the error
console.error("save failed:", err);
// gives you a searchable label plus the full trace.</code></pre>

    <p><strong>console.error does NOT throw, does NOT return, does NOT stop execution.</strong> It's just a print. Code after the error line still runs:</p>
<pre class="language-javascript"><code class="language-javascript">console.error("this is bad");
doTheNextThing();   // still runs

// if you want to actually stop, throw:
throw new Error("this is bad");
// throw stops execution. console.error only prints.</code></pre>

    <p><strong>Case matters.</strong> It's <code>console.error</code>, lowercase. <code>console.Error</code> or <code>console.ERROR</code> throws its own error:</p>
<pre class="language-javascript"><code class="language-javascript">console.error("hi");   // ✓
console.Error("hi");   // ✗ TypeError: console.Error is not a function</code></pre>

    <p><strong>Error counts show at the top-right of DevTools.</strong> The red circle-with-number badge above the console tab tells you how many <code>console.error</code> calls have fired since the console was last cleared. This is a fast way to notice a spike of errors without watching the console:</p>
<pre class="language-javascript"><code class="language-javascript">// three console.error calls → the DevTools badge shows "3"
// click the badge to jump to the Console panel filtered to Errors only.</code></pre>

    <p><strong>Filtering behavior.</strong> The console filter dropdown has an "Errors" checkbox that toggles error-level messages independently. Filtering to Errors only is the fastest way to see just what's broken, ignoring routine logs:</p>
<pre class="language-javascript"><code class="language-javascript">// with the filter set to "Errors":
console.log("hi");        // hidden
console.warn("weird");    // hidden
console.error("broken");  // shown</code></pre>
  `,

  /* --- Chunk 1: Why & When --- */

  /* 1.0 What problem it solves */
  'debug-4-2-1-0': `
    <p>When something actually breaks in your code — a fetch fails, a required field is missing, a calculation produces <code>NaN</code>, a caught exception happens — you need that failure to be visible. If you log it with <code>console.log</code>, it looks like every other log and disappears into the noise. If you throw an error, execution stops (which might not be what you want if you can still recover). You need a middle option: "print this failure loudly, but keep the app running."</p>
    <p><code>console.error</code> is that middle option. It makes failures unmistakably visible in DevTools (red, iconed, counted), gives you a full stack trace, and integrates automatically with production error-monitoring tools — but it doesn't halt your program the way <code>throw</code> does. It's how you say "this is a real problem, capture it, but move on."</p>
  `,

  /* 1.1 Why use it */
  'debug-4-2-1-1': `
    <p>Because failures deserve visibility. Silent failures — errors that get caught and swallowed with no log at all — are the worst kind of bug because they're invisible until a user reports the symptoms. A caught exception with a <code>console.error</code> in the catch block gives you the diagnostic info you'd otherwise be missing.</p>
    <p>Production monitoring is the other big reason. Tools like Sentry, LogRocket, Datadog, and browser telemetry hook into <code>console.error</code> automatically. Every error you log gets captured, aggregated, and shown to you with counts, stack traces, and affected users. Logging with <code>console.log</code> or <code>console.warn</code> instead means the error monitoring tool never sees it — you've made the failure invisible to your own alerting system.</p>
  `,

  /* 1.2 Where you use it */
  'debug-4-2-1-2': `
<pre class="language-javascript"><code class="language-javascript">// Inside catch blocks — the most common location
try {
  await saveDocument();
} catch (err) {
  console.error("save failed:", err);
  showToast("Could not save. Try again.");
}

// After a failed fetch
const res = await fetch("/api/data");
if (!res.ok) {
  console.error("fetch failed:", res.status, res.statusText);
  return null;
}

// After a caught rejected promise
fetch("/api/data")
  .then(res =&gt; res.json())
  .then(data =&gt; render(data))
  .catch(err =&gt; {
    console.error("could not load data:", err);
    showErrorState();
  });

// When required data is missing
if (!user) {
  console.error("no user found — this should not happen");
  return;
}

// When an assertion about state fails
if (cart.items.length &lt; 0) {
  console.error("cart has negative item count?!", cart);
}

// When a callback receives unexpected input
function handleResponse(data) {
  if (!Array.isArray(data)) {
    console.error("expected array, got:", data);
    return;
  }
  data.forEach(process);
}

// When a critical browser API isn't available
if (!window.crypto?.randomUUID) {
  console.error("crypto.randomUUID not supported in this browser");
}

// Inside global error handlers
window.addEventListener("error", (e) =&gt; {
  console.error("uncaught error:", e.error);
});
window.addEventListener("unhandledrejection", (e) =&gt; {
  console.error("unhandled promise rejection:", e.reason);
});</code></pre>

    <p>The rule of thumb: if something failed and you're handling it (not letting it crash the app), <code>console.error</code> is how you make the failure visible.</p>
  `,

  /* 1.3 Plain English explanation */
  'debug-4-2-1-3': `
    <p>If <code>console.log</code> is a chef muttering to themselves and <code>console.warn</code> is a chef ringing a small "look up" bell, then <code>console.error</code> is the chef pulling the fire alarm — but the kitchen keeps cooking. Something actually went wrong. Not "hey, unusual thing happened" — actually wrong. A pan caught fire and got put out. An order was ruined and thrown away. The service continues, but the incident is very much on the record.</p>
    <p>You want that on record because otherwise no one knows the fire happened. The app didn't crash. The customer didn't complain (yet). But the failure occurred, and a developer opening DevTools tomorrow needs to see it in red.</p>
  `,

  /* 1.4 Mental model */
  'debug-4-2-1-4': `
    <p>Think of your app's runtime as a factory floor with three levels of communication: the intercom (log), the shift bell (warn), and the incident log (error). The incident log doesn't stop the factory. It doesn't send anyone home. But every time something breaks — even something the floor manager could handle without shutting down — it gets an entry in red.</p>
    <p>At the end of the day, the incident log is what you read. Not the intercom chatter. Not every bell ring. Just the red entries: "these things broke today. This many times. Here's what was happening when each one broke." That's what <code>console.error</code> creates — a permanent, filterable, monitored record of "things went wrong here" that doesn't require the app to stop running to capture it.</p>
  `,

  /* 1.5 Step-by-step walkthrough */
  'debug-4-2-1-5': `
<pre class="language-javascript"><code class="language-javascript">async function loadUser(id) {
  try {
    const res = await fetch("/api/users/" + id);
    if (!res.ok) throw new Error("HTTP " + res.status);
    return await res.json();
  } catch (err) {
    console.error("loadUser failed for id", id, err);
    return null;
  }
}

// what happens when the fetch fails (say, the server returns 500):
// 1. fetch resolves with a Response object where res.ok === false.
// 2. the "if (!res.ok)" condition is true.
// 3. "throw new Error('HTTP 500')" runs.
//    - JS creates a new Error object with message "HTTP 500" and a stack trace.
//    - the throw stops execution of the try block.
// 4. control jumps to the catch block.
// 5. the caught error is bound to "err" — includes message, name, and stack.
// 6. console.error runs with three arguments:
//    - "loadUser failed for id" (label)
//    - id (the specific user id)
//    - err (the full error object with stack trace)
// 7. DevTools receives the arguments and displays:
//    - a red line: loadUser failed for id 42 Error: HTTP 500
//    - a stack trace showing where the Error was thrown
//    - the top-right error counter increments
//    - Sentry/LogRocket/etc. capture the error automatically
// 8. the catch block continues. "return null" runs.
// 9. loadUser resolves with null. calling code can check for null and show a fallback.

// note: the app didn't crash. the user isn't shown a broken screen.
// but the failure is fully visible and captured in monitoring.
// that's the whole point of console.error.</code></pre>
  `,

  /* --- Chunk 2: The Click --- */

  /* 2.0 Debugging clue */
  'debug-4-2-2-0': `
    <p>If a bug report says "the app just doesn't do anything," open DevTools and filter the console to Errors only. Nine times out of ten, you'll see a red message that tells you exactly what broke and where. That's the fastest way in.</p>
<pre class="language-javascript"><code class="language-javascript">// The red error tells you three things immediately:
// 1. WHAT broke — the message
// 2. WHERE it broke — the top line of the stack trace
// 3. HOW it got there — the rest of the stack, showing the call chain

// Example red message you'd see:
// TypeError: Cannot read properties of null (reading 'value')
//   at handleSubmit (form.js:42)
//   at HTMLFormElement.&lt;anonymous&gt; (main.js:12)

// reading it in order:
// - form.js line 42 — that's the actual bug site
// - main.js line 12 — that's who called handleSubmit
// - "null (reading 'value')" — someone tried to read .value on null
// - the fix: find what's null on line 42 (probably a querySelector that returned null)</code></pre>

    <p>If you're expecting errors and don't see red, check the filter. "All levels" or the "Errors" checkbox must be on. Filtering to just Logs will hide errors as effectively as filtering to just Errors would hide logs.</p>
  `,

  /* 2.1 The part that makes it click */
  'debug-4-2-2-1': `
    <p>The aha is that <code>console.error</code> is <em>logging</em>, not throwing. It looks angry, feels serious, prints in red — but it's just a print. Your code doesn't stop. Nothing crashes. It's a display choice, not a control-flow choice:</p>
<pre class="language-javascript"><code class="language-javascript">// console.error → prints, keeps going
console.error("bad!");
console.log("still running");   // this fires

// throw → stops execution here
throw new Error("bad!");
console.log("never runs");   // this does NOT fire</code></pre>
    <p>Once that clicks, choosing between them becomes clear: use <code>console.error</code> when you want the app to keep running while making sure the failure is visible. Use <code>throw</code> when you actually need to stop and let higher-level code decide what to do. They're not the same operation with different volumes — they do fundamentally different things.</p>
  `,

  /* 2.2 Common confusions */
  'debug-4-2-2-2': `
    <p><strong>"Does console.error stop my code?"</strong> No. It's a print. It has no effect on execution. If you want to stop, use <code>throw</code>. If you want to log the error <em>and</em> stop, do both:</p>
<pre class="language-javascript"><code class="language-javascript">console.error("this is bad:", err);
throw err;
// this is a common pattern in strict code — log for visibility, then rethrow.</code></pre>

    <p><strong>"When should I use error vs warn?"</strong> Error is for "something failed" — a fetch returned an error status, a save didn't work, an exception was caught. Warn is for "something unusual but recoverable happened" — a fallback fired, a deprecated function was called. If a user would experience the issue as a problem, use error. If only a developer would care, use warn.</p>

    <p><strong>"Does console.error affect performance?"</strong> A single call is negligible. But because errors are captured by production monitoring tools, a runaway loop of <code>console.error</code> calls can flood the monitoring service and hit rate limits. Make sure you're not firing errors inside tight loops or high-frequency handlers.</p>

    <p><strong>"Do I need to pass an Error object, or can I just pass a string?"</strong> Either works, but Error objects are dramatically better. They carry a real stack trace showing where the error was created — not just where you called <code>console.error</code>. When a caught exception is available, always log the error itself, not a stringified version of it.</p>

    <p><strong>"My console.error is red but it doesn't show a stack trace."</strong> If you passed only a plain string, the trace shown is the call site of <code>console.error</code> itself, which may not be helpful. Pass the Error object (or a caught <code>err</code>) as one of the arguments to get the original stack.</p>

    <p><strong>"Will users see console.error messages?"</strong> No — not unless they open DevTools. But some monitoring tools display errors in overlays during development, and old versions of some browsers write to the OS's error log. In production, they're invisible to normal users but captured by monitoring services.</p>
  `,

  /* 2.3 Common mistakes */
  'debug-4-2-2-3': `
<pre class="language-javascript"><code class="language-javascript">// Mistake 1: using console.log for actual errors
try {
  saveDocument();
} catch (err) {
  console.log(err);   // ✗ error looks like a routine log; monitoring won't capture it
}
// fix:
try {
  saveDocument();
} catch (err) {
  console.error("save failed:", err);
}

// Mistake 2: swallowing the error object
try {
  saveDocument();
} catch (err) {
  console.error("something failed");   // ✗ no info about what actually broke
}
// fix: include the error itself
try {
  saveDocument();
} catch (err) {
  console.error("save failed:", err);
}

// Mistake 3: assuming console.error stops execution
if (!user) {
  console.error("no user!");
  renderProfile(user);   // ✗ still runs, crashes reading user.name
}
// fix: use return, throw, or an early exit
if (!user) {
  console.error("no user!");
  return;
}

// Mistake 4: firing console.error in a fast loop
items.forEach(item =&gt; {
  if (!item.valid) console.error("invalid item:", item);
});
// if items has 10,000 invalid entries, you flood the console AND monitoring.
// fix: log a summary once instead
const invalid = items.filter(i =&gt; !i.valid);
if (invalid.length &gt; 0) {
  console.error("invalid items:", invalid.length, invalid.slice(0, 5));
}

// Mistake 5: using console.error when the situation is actually recoverable
if (!config.theme) {
  console.error("no theme configured");   // ✗ this is fine, just fell back to a default
}
// fix: warn is more appropriate
if (!config.theme) {
  console.warn("no theme configured, using default");
}

// Mistake 6: passing only a stringified error
try {
  saveDocument();
} catch (err) {
  console.error("save failed: " + err);   // ✗ loses the stack trace
}
// fix: pass the error object as a separate argument
try {
  saveDocument();
} catch (err) {
  console.error("save failed:", err);
}

// Mistake 7: catching an error just to log it, when throwing was fine
async function loadData() {
  try {
    return await fetchData();
  } catch (err) {
    console.error("fetchData failed:", err);
    // now the calling code doesn't know anything went wrong
  }
}
// fix: either handle it fully (return a fallback) or rethrow so callers can react
async function loadData() {
  try {
    return await fetchData();
  } catch (err) {
    console.error("fetchData failed:", err);
    throw err;   // let the caller decide
  }
}

// Mistake 8: leaving debug console.error calls in production for non-error cases
console.error("i got here");   // ✗ pollutes error monitoring with noise
// fix: use console.log for tracing, save console.error for real failures</code></pre>
  `,

  /* --- Chunk 3: In Practice --- */

  /* 3.0 Tiny examples */
  'debug-4-2-3-0': `
<pre class="language-javascript"><code class="language-javascript">// Simple error message
console.error("save failed");

// Error with an object
console.error("save failed:", err);

// Logging a caught exception
try {
  doThing();
} catch (err) {
  console.error(err);
}

// Logging with context
try {
  saveOrder(order);
} catch (err) {
  console.error("saveOrder failed for order", order.id, err);
}

// After a failed fetch
if (!res.ok) {
  console.error("fetch failed:", res.status, res.statusText);
}

// In a promise catch
fetch("/api/x")
  .catch(err =&gt; console.error("network error:", err));

// When a required value is missing
if (!token) {
  console.error("auth token missing — cannot make request");
  return;
}

// When state is invalid
if (cart.total &lt; 0) {
  console.error("cart total went negative", cart);
}

// Uncaught error handler
window.addEventListener("error", (e) =&gt; {
  console.error("uncaught error:", e.error);
});

// Unhandled promise rejection
window.addEventListener("unhandledrejection", (e) =&gt; {
  console.error("unhandled rejection:", e.reason);
});

// Log AND rethrow (common pattern for strict layers)
try {
  risky();
} catch (err) {
  console.error("risky failed:", err);
  throw err;
}

// Log with a JSON context object
console.error("request failed", { url, status, body });</code></pre>
  `,

  /* 3.1 Real website uses */
  'debug-4-2-3-1': `
    <p><strong>Example: reporting a failed save without crashing the app</strong></p>
<pre class="language-javascript"><code class="language-javascript">async function saveDraft(draft) {
  try {
    const res = await fetch("/api/drafts", {
      method: "POST",
      body: JSON.stringify(draft),
    });
    if (!res.ok) throw new Error("HTTP " + res.status);
    return await res.json();
  } catch (err) {
    console.error("saveDraft failed:", err);
    showToast("Couldn't save. We'll retry in the background.");
    queueForRetry(draft);
    return null;
  }
}
// the user sees a friendly toast.
// the developer sees a red error in DevTools with full context.
// production monitoring captures the failure automatically.
// the draft goes into a retry queue instead of being lost.</code></pre>

    <p><strong>Example: global error handler for uncaught errors</strong></p>
<pre class="language-javascript"><code class="language-javascript">window.addEventListener("error", (event) =&gt; {
  console.error("uncaught:", event.error || event.message, {
    filename: event.filename,
    line: event.lineno,
    col: event.colno,
  });
});

window.addEventListener("unhandledrejection", (event) =&gt; {
  console.error("unhandled promise rejection:", event.reason);
});
// catches errors that escaped every try/catch.
// gives you a fallback net so failures still show up in monitoring.</code></pre>

    <p><strong>Example: validating a critical assumption early</strong></p>
<pre class="language-javascript"><code class="language-javascript">function chargeCustomer(orderId, amount) {
  if (typeof amount !== "number" || amount &lt;= 0) {
    console.error("invalid charge amount", { orderId, amount });
    throw new Error("Invalid charge amount");
  }
  return processPayment(orderId, amount);
}
// the log happens BEFORE the throw so you have the context in monitoring.
// then the throw stops the operation.</code></pre>

    <p><strong>Example: reporting a browser API that's missing</strong></p>
<pre class="language-javascript"><code class="language-javascript">function generateId() {
  if (!window.crypto?.randomUUID) {
    console.error("crypto.randomUUID not supported — falling back to Math.random");
    return String(Math.random()).slice(2);
  }
  return crypto.randomUUID();
}
// gives you visibility into how often you're hitting the fallback,
// which tells you when you can safely delete it.</code></pre>

    <p><strong>Example: making a caught error visible AND propagating it</strong></p>
<pre class="language-javascript"><code class="language-javascript">async function loadUserSettings(userId) {
  try {
    return await api.getSettings(userId);
  } catch (err) {
    console.error("loadUserSettings failed for", userId, err);
    throw err;   // let the calling code (React error boundary, etc.) also handle it
  }
}
// the "log and rethrow" pattern gives you both the visibility of a red error
// and the correctness of letting higher-level code decide the response.</code></pre>
  `,

  /* 3.2 Connects to */
  'debug-4-2-3-2': `
    <ul>
      <li><strong><code>console.log()</code></strong> → for routine inspection; use error instead when a failure occurred</li>
      <li><strong><code>console.warn()</code></strong> → for recoverable oddities; use error for actual failures</li>
      <li><strong><code>try</code>/<code>catch</code></strong> → the natural home of <code>console.error</code></li>
      <li><strong><code>throw</code></strong> → stops execution; often used together with <code>console.error</code></li>
      <li><strong>Error object</strong> → pass a real <code>Error</code> to get proper stack traces</li>
      <li><strong>Stack traces</strong> → errors show them expanded by default</li>
      <li><strong>Promise <code>.catch()</code></strong> → common spot for <code>console.error</code> in async code</li>
      <li><strong><code>window.onerror</code> / <code>unhandledrejection</code></strong> → global fallback for uncaught errors</li>
      <li><strong>Production error monitoring</strong> → Sentry, LogRocket, etc. capture <code>console.error</code> automatically</li>
      <li><strong>DevTools error badge</strong> → the red count in the top-right corner reflects <code>console.error</code> calls</li>
    </ul>
  `,

  /* 3.3 See also */
  'debug-4-2-3-3': `
    <ul>
      <li><code>console.log()</code></li>
      <li><code>console.warn()</code></li>
      <li><code>console.table()</code></li>
      <li><code>console.dir()</code></li>
      <li><code>throw</code></li>
      <li><code>try</code>/<code>catch</code></li>
      <li>Error object</li>
      <li>Stack traces</li>
      <li>Promise <code>.catch()</code></li>
      <li>Global error handlers</li>
      <li>Reading error messages</li>
      <li>Debugging async</li>
    </ul>
  `,

  /* ========================================================= 
   Sub-lesson: 7.5.4 Console Tools → console.table()
 =======================================================*/

  /* --- Chunk 0: What & How --- */

  /* 0.0 What it is */
  'debug-4-3-0-0': `
    <p><strong>console.table()</strong> takes an array or an object and prints it to DevTools as a real, scrollable, sortable table — rows and columns, headers, cell values, the works. Instead of an expandable object preview you'd get from <code>console.log</code>, you see the data laid out in a grid you can scan with your eyes.</p>
    <p>Same tool family as <code>console.log</code>. Same "just print this" purpose. What's different is the visualization. When you're staring at 30 items and trying to figure out "which one has the missing price?" — the object-by-object output of <code>console.log</code> makes you click each one open. <code>console.table</code> shows them all at once in a grid, and the answer jumps out.</p>
  `,

  /* 0.1 Syntax */
  'debug-4-3-0-1': `
<pre class="language-javascript"><code class="language-javascript">// Basic form — pass an array of objects
console.table(users);

// Pass an object of objects (the outer keys become the row labels)
console.table({
  alice: { age: 30, role: "admin" },
  bob:   { age: 25, role: "user"  },
});

// Pass a plain array of primitives
console.table([1, 2, 3, 4, 5]);

// Pass an array of objects with a column filter (only show certain fields)
console.table(users, ["name", "email"]);

// Combine with a label using console.log first
console.log("USERS:");
console.table(users);</code></pre>

    <p>The shape: <code>console.table(</code> data <code>)</code>, or <code>console.table(</code> data<code>,</code> columns <code>)</code> where <code>columns</code> is an array of property names to include. Anything that has a repeating structure (rows of similar-shaped objects) tables well.</p>
  `,

  /* 0.2 Anatomy / Breakdown */
  'debug-4-3-0-2': `
<pre class="language-javascript"><code class="language-javascript">console.table(users, ["name", "email"]);
// │       │     │       │
// │       │     │       └── second (optional) argument — array of column names to show
// │       │     └── first argument — the data (array or object)
// │       └── the method name — table, lowercase
// └── the console object — same one console.log uses

// example input:
const users = [
  { id: 1, name: "Alice", email: "alice@x.com", role: "admin" },
  { id: 2, name: "Bob",   email: "bob@x.com",   role: "user"  },
];

// console.table(users) prints roughly:
// ┌─────────┬────┬─────────┬─────────────┬────────┐
// │ (index) │ id │  name   │    email    │  role  │
// ├─────────┼────┼─────────┼─────────────┼────────┤
// │    0    │ 1  │ 'Alice' │ 'alice@x.com'│'admin' │
// │    1    │ 2  │  'Bob'  │ 'bob@x.com' │ 'user' │
// └─────────┴────┴─────────┴─────────────┴────────┘

// what DevTools does under the hood:
// 1. inspects the data structure to figure out row shape.
// 2. collects the union of all keys across the rows → those become columns.
// 3. renders each row as a table row, filling in cells for each column.
// 4. adds an "(index)" column with the array index or object key.
// 5. makes column headers clickable to sort rows by that column.</code></pre>
  `,

  /* 0.3 Syntax Details That Matter */
  'debug-4-3-0-3': `
    <p><strong>The data needs to have a repeating structure to be useful.</strong> An array of objects with similar keys → beautiful table. A single object with mixed types → still tables, but less useful. A random string → a one-cell table. <code>console.table</code> works best on rows of similar things:</p>
<pre class="language-javascript"><code class="language-javascript">// GREAT — array of similar-shaped objects
console.table([
  { name: "Alice", age: 30 },
  { name: "Bob",   age: 25 },
]);

// OK — object of objects (outer keys become the (index) column)
console.table({
  a: { count: 1 },
  b: { count: 2 },
});

// WORKS but underwhelming — array of primitives (one column: Values)
console.table([1, 2, 3]);

// TERRIBLE — a single object with unrelated properties
console.table({ name: "Alice", scores: [1, 2, 3], parent: someObj });
// tries its best but you don't get a useful grid.</code></pre>

    <p><strong>The second argument is a whitelist of columns to display.</strong> Useful when your objects have 20 fields but you only care about 3:</p>
<pre class="language-javascript"><code class="language-javascript">const users = [
  { id: 1, name: "Alice", email: "a@x.com", createdAt: "...", role: "admin", /* many more */ },
  // ...
];

// too many columns to read comfortably
console.table(users);

// just the two columns you care about
console.table(users, ["name", "role"]);

// note: the (index) column always appears — you can't hide it.
// note: unknown column names are silently ignored.</code></pre>

    <p><strong>Nested objects and arrays don't table well.</strong> If a cell would contain another object, DevTools shows a placeholder like <code>Object</code> or <code>Array(3)</code> instead of the nested contents. You can click those cells to expand them in a side panel, but the grid itself only shows one level deep:</p>
<pre class="language-javascript"><code class="language-javascript">console.table([
  { name: "Alice", tags: ["admin", "vip"] },
  { name: "Bob",   tags: ["user"] },
]);
// the "tags" column shows "Array(2)" and "Array(1)" — not the actual strings.
// to see them, flatten or stringify first:
console.table(users.map(u =&gt; ({ ...u, tags: u.tags.join(", ") })));</code></pre>

    <p><strong>Column headers are clickable to sort.</strong> DevTools lets you click a column header to sort the table by that column, ascending or descending. This is where <code>console.table</code> becomes genuinely powerful for scanning — sort by price to find the outlier, sort by date to find the oldest, sort by role to group.</p>

    <p><strong>Case matters.</strong> It's <code>console.table</code>, lowercase. <code>console.Table</code> throws:</p>
<pre class="language-javascript"><code class="language-javascript">console.table(users);   // ✓
console.Table(users);   // ✗ TypeError: console.Table is not a function</code></pre>

    <p><strong>It also logs the raw data below the table.</strong> DevTools shows the table AND the original data structure right below it, expandable like a normal <code>console.log</code>. This means you don't lose anything by using table over log — you get both.</p>
  `,

  /* --- Chunk 1: Why & When --- */

  /* 1.0 What problem it solves */
  'debug-4-3-1-0': `
    <p>When you log an array of 20 objects, DevTools shows something like <code>(20) [{...}, {...}, ...]</code>, and you have to click each one open to inspect it. If you're trying to find one bad row among many, that's slow and error-prone — you're scrolling through 20 expandable groups, all shaped the same, looking for the one that's different.</p>
    <p><code>console.table</code> solves that. Instead of 20 collapsed objects, you get 20 rows of a grid — every field visible at once, aligned in columns. The bad row jumps out visually because it's the one with an empty cell, an <code>undefined</code>, or a wildly different value. You spot the problem in seconds instead of minutes.</p>
  `,

  /* 1.1 Why use it */
  'debug-4-3-1-1': `
    <p>Because grid-shaped data is easier for eyes to scan than a stack of expandable objects. Your visual system is built to compare things across rows and columns — that's how spreadsheets work. When your data is repetitive (rows of users, rows of order items, rows of API responses), turning it into a table lets your eyes do the work of "which one is different" instead of forcing you to click through each item.</p>
    <p>The sortable columns push this further: click "price" and the outlier is at the top. Click "createdAt" and you find the oldest. Click "role" and everything with the same role clumps together. That's inspection speed you can't get from <code>console.log</code> — you'd have to write filter/sort code yourself, and by then the debugging session is already long.</p>
  `,

  /* 1.2 Where you use it */
  'debug-4-3-1-2': `
<pre class="language-javascript"><code class="language-javascript">// Inspecting an array of items you fetched from an API
console.table(response.users);

// Inspecting the results of a filter or map
const active = users.filter(u =&gt; u.active);
console.table(active);

// Comparing rows to find the odd one out
console.table(cartItems);   // spot the item with the missing price at a glance

// Debugging a data-transform pipeline
console.table(rawItems);
const step1 = rawItems.map(normalize);
console.table(step1);
const step2 = step1.filter(isValid);
console.table(step2);

// Showing the state of an object collection keyed by ID
console.table(usersById);

// Only the columns that matter
console.table(orders, ["id", "customerId", "total", "status"]);

// A snapshot of a loop's progress
const stats = items.map(item =&gt; ({
  name: item.name,
  processed: item.done,
  duration: item.time,
}));
console.table(stats);

// Debugging complex arrays — see all fields at once
console.table(cart.items);

// Inspecting a Map (convert to array of pairs first)
console.table([...myMap.entries()].map(([k, v]) =&gt; ({ key: k, value: v })));

// Inspecting form field state
const fields = Array.from(form.elements).map(el =&gt; ({
  name: el.name,
  value: el.value,
  valid: el.validity.valid,
}));
console.table(fields);</code></pre>

    <p>The pattern to reach for: any time you're about to log an array of objects and expect to compare them, use table instead of log. If you're logging a single value or a single object, stick with log.</p>
  `,

  /* 1.3 Plain English explanation */
  'debug-4-3-1-3': `
    <p>Imagine you're checking a list of 30 orders on a clipboard. If someone hands you 30 separate index cards, each with the same fields, you have to read each card top to bottom — and to compare two orders, you have to hold both cards side by side. You can find the odd one out, but it takes a while.</p>
    <p>Now imagine the same 30 orders in a single spreadsheet — one row per order, one column per field. You can scan a whole column at once and instantly spot the empty cell, the zero, the misspelled name. That's the difference between <code>console.log</code> and <code>console.table</code>. Same data, but the grid layout lets your eyes work in a way the stack of cards can't.</p>
  `,

  /* 1.4 Mental model */
  'debug-4-3-1-4': `
    <p>Think of <code>console.log</code> as a filing cabinet drawer full of folders — each folder is an object, each is closed by default, you have to open one at a time to see what's inside. <code>console.table</code> is that same information printed as a poster on the wall — every folder's contents visible at once, arranged in a grid, so you don't have to open anything to scan across them.</p>
    <p>The wall-poster view isn't better for detailed exploration of a single folder (that's what expanding an object gives you). It's better for comparing across folders, spotting outliers, and finding the one that doesn't match the pattern. When you know you're going to compare items, put them on the wall. When you're inspecting one thing deeply, use the drawer.</p>
  `,

  /* 1.5 Step-by-step walkthrough */
  'debug-4-3-1-5': `
<pre class="language-javascript"><code class="language-javascript">const cartItems = [
  { id: "a1", name: "shirt", price: 20, qty: 2 },
  { id: "a2", name: "shoes", price: 50, qty: 1 },
  { id: "a3", name: "hat",   price: undefined, qty: 1 },   // bug: missing price
];

console.table(cartItems);

// what happens when this line runs:
// 1. JS reaches the console.table line.
// 2. it evaluates the argument: the cartItems array.
// 3. JS looks up console.table on the console object.
// 4. JS calls console.table with the array.
// 5. DevTools receives the array and inspects it:
//    - it's an array of 3 objects.
//    - each object has keys: id, name, price, qty.
//    - the union of keys becomes the column set.
// 6. DevTools renders a grid:
//    ┌─────────┬──────┬─────────┬───────────┬─────┐
//    │ (index) │  id  │  name   │   price   │ qty │
//    ├─────────┼──────┼─────────┼───────────┼─────┤
//    │    0    │ 'a1' │ 'shirt' │    20     │  2  │
//    │    1    │ 'a2' │ 'shoes' │    50     │  1  │
//    │    2    │ 'a3' │  'hat'  │ undefined │  1  │   ← empty/undefined cell
//    └─────────┴──────┴─────────┴───────────┴─────┘
// 7. below the grid, DevTools also prints the raw array (expandable).
// 8. code execution continues.

// scanning the "price" column, "undefined" pops out.
// that's the bad row. bug found without expanding a single object.
// clicking the "price" header would sort by price, putting undefined at the top or bottom.</code></pre>
  `,

  /* --- Chunk 2: The Click --- */

  /* 2.0 Debugging clue */
  'debug-4-3-2-0': `
    <p>If <code>console.table</code> looks weird or empty:</p>
<pre class="language-javascript"><code class="language-javascript">// The table is empty:
console.table([]);
// nothing to show. add a log before to confirm the array is actually empty.

// The table has only one column called "Values":
console.table([1, 2, 3]);
// the array is primitives, not objects — one column is all you get.

// Cells show "Object" or "Array(N)" instead of values:
console.table([{ name: "a", tags: ["x"] }]);
// nested fields don't expand in the grid. flatten first:
console.table([{ name: "a", tags: "x" }]);

// Columns you expected are missing:
console.table(users, ["name", "roll"]);   // "roll" isn't a real field → silently dropped
// double-check spelling of column names. table doesn't error on unknown keys.

// The table shows headers you didn't expect:
// If some objects have extra keys, DevTools includes them all in the columns.
// items with missing keys show blank cells — often that IS the bug you're hunting.</code></pre>

    <p>The empty/undefined cell is the whole point. <code>console.table</code> is designed to make missing data visually obvious. If a row has a blank cell where the others have values, that's your bug.</p>
  `,

  /* 2.1 The part that makes it click */
  'debug-4-3-2-1': `
    <p>The aha is that <code>console.table</code> isn't a "different tool" from <code>console.log</code> — it's the same "just print this" idea, but formatted for arrays-of-similar-things. The data is unchanged. The output location is unchanged. Only the visualization changes:</p>
<pre class="language-javascript"><code class="language-javascript">// same array, two different views
console.log(users);     // (3) [Object, Object, Object]  ← collapsed, need to click each
console.table(users);   // a grid                         ← all fields visible at once</code></pre>
    <p>Once that clicks, choosing when to use it becomes automatic: whenever you're about to log a list of objects and expect to look at more than one, use table. The moment you feel yourself about to click open several objects in a row to compare them — that's the signal.</p>
  `,

  /* 2.2 Common confusions */
  'debug-4-3-2-2': `
    <p><strong>"Can I put anything in console.table?"</strong> Yes, but it's only useful for repeating structures. A single object shows a two-column table of key/value pairs. A primitive shows a one-cell grid. Arrays of similar-shaped objects are where table shines. If the data doesn't have a natural row-and-column shape, stick with <code>console.log</code>.</p>

    <p><strong>"Why are my nested arrays showing 'Array(3)' instead of values?"</strong> The grid only renders one level deep. Cells that would contain objects or arrays show a placeholder. Click them to expand in a side panel, or flatten the data first (join arrays into strings, spread object properties into top-level keys).</p>

    <p><strong>"The (index) column is weird — can I hide it?"</strong> No. DevTools always adds an (index) column showing the array index (for arrays) or object key (for objects). You can't turn it off, but you can ignore it when scanning.</p>

    <p><strong>"Sorting doesn't seem to work."</strong> Click the column header — the little arrow indicates the sort direction. Click again to reverse. If your data has mixed types in a column (numbers and strings), the sort order will be strange because JavaScript's default comparison mixes types.</p>

    <p><strong>"My table only shows some of my rows."</strong> DevTools may truncate very long tables with a "show more" affordance. If you have 10,000 rows, the browser won't render them all at once by default. For huge datasets, filter or slice first: <code>console.table(users.slice(0, 100))</code>.</p>

    <p><strong>"Should I use table in production code?"</strong> Same rules as any console call — remove or gate debug tables before shipping. Users won't see them, but they contribute noise and consume CPU rendering when DevTools is open.</p>
  `,

  /* 2.3 Common mistakes */
  'debug-4-3-2-3': `
<pre class="language-javascript"><code class="language-javascript">// Mistake 1: passing a single object hoping for a row
console.table(user);   // shows key/value pairs, not a row
// fix: wrap in an array if you want a "row"
console.table([user]);

// Mistake 2: expecting nested objects to expand
console.table([{ name: "a", meta: { role: "admin" } }]);
// "meta" cell shows "Object" — not "role: admin"
// fix: flatten before logging
console.table([{ name: "a", role: user.meta.role }]);

// Mistake 3: passing a non-uniform array
console.table([
  { name: "Alice", age: 30 },
  "just a string",
  42,
  { name: "Bob", email: "b@x.com" },
]);
// the table gets confused. one column for each unique key across everything.
// fix: filter to just the shape you want
console.table(items.filter(i =&gt; typeof i === "object"));

// Mistake 4: misspelling column names in the whitelist
console.table(users, ["nam", "email"]);   // "nam" is silently dropped
// fix: double-check property names or leave out the second argument

// Mistake 5: using table for a single value
console.table("hello");   // a one-cell table with "hello" — pointless
// fix: use console.log for single values
console.log("hello");

// Mistake 6: forgetting console.log before/after
console.table(users);
// no label. was this "before filter" or "after filter"?
// fix: label the table
console.log("USERS BEFORE FILTER:");
console.table(users);

// Mistake 7: expecting Map or Set to render nicely
console.table(myMap);   // shows one row per entry, but oddly formatted
// fix: convert to a friendlier shape first
console.table([...myMap.entries()].map(([k, v]) =&gt; ({ key: k, value: v })));

// Mistake 8: dumping huge arrays and watching DevTools stall
console.table(bigArray);   // 50,000 rows will lag the console
// fix: sample or slice
console.table(bigArray.slice(0, 100));
console.log("total:", bigArray.length);</code></pre>
  `,

  /* --- Chunk 3: In Practice --- */

  /* 3.0 Tiny examples */
  'debug-4-3-3-0': `
<pre class="language-javascript"><code class="language-javascript">// Array of objects
console.table([
  { name: "Alice", age: 30 },
  { name: "Bob",   age: 25 },
]);

// Array with a column filter
console.table(users, ["name", "email"]);

// Object of objects (keys become the (index))
console.table({
  alice: { age: 30, role: "admin" },
  bob:   { age: 25, role: "user"  },
});

// Simple array of primitives
console.table([10, 20, 30]);

// After a filter
const active = users.filter(u =&gt; u.active);
console.table(active);

// After a map
const summaries = orders.map(o =&gt; ({
  id: o.id,
  total: o.total,
  status: o.status,
}));
console.table(summaries);

// Flattened nested data
console.table(users.map(u =&gt; ({
  name: u.name,
  role: u.meta.role,
  tags: u.tags.join(", "),
})));

// Labeling the table
console.log("CART ITEMS:");
console.table(cart.items);

// Combined with typeof for type auditing
console.table(items.map(i =&gt; ({
  name: i.name,
  price: i.price,
  priceType: typeof i.price,
})));

// Sortable stats view
console.table(items.map(i =&gt; ({
  name: i.name,
  count: i.count,
  avg: i.total / i.count,
})));

// Convert a Map to a table
console.table([...userMap.entries()].map(([k, v]) =&gt; ({ key: k, ...v })));

// Convert a Set to a table
console.table([...tagSet].map(t =&gt; ({ tag: t })));</code></pre>
  `,

  /* 3.1 Real website uses */
  'debug-4-3-3-1': `
    <p><strong>Example: finding the item with the missing field in a cart</strong></p>
<pre class="language-javascript"><code class="language-javascript">// user complaint: "the checkout total is wrong"
console.table(cart.items);
// ┌─────────┬──────┬─────────┬───────┬─────┐
// │ (index) │  id  │  name   │ price │ qty │
// ├─────────┼──────┼─────────┼───────┼─────┤
// │    0    │ 'a1' │ 'shirt' │  20   │  2  │
// │    1    │ 'a2' │ 'shoes' │  50   │  1  │
// │    2    │ 'a3' │  'hat'  │       │  1  │   ← the empty price cell IS the bug
// └─────────┴──────┴─────────┴───────┴─────┘
// bug found in a single glance instead of clicking through three objects.</code></pre>

    <p><strong>Example: comparing raw vs. transformed data during a bug hunt</strong></p>
<pre class="language-javascript"><code class="language-javascript">function normalizeUser(u) {
  return {
    id:    u.id,
    name:  u.first_name + " " + u.last_name,
    email: u.email?.toLowerCase(),
  };
}

const raw = await fetchUsers();
console.log("RAW:");
console.table(raw, ["id", "first_name", "last_name", "email"]);

const normalized = raw.map(normalizeUser);
console.log("NORMALIZED:");
console.table(normalized);

// side-by-side tables let you visually verify the transform did what you expected.
// any row where "name" is just " " (space) means both first_name and last_name were empty.
// any row where "email" is undefined means the email was null and .toLowerCase failed.</code></pre>

    <p><strong>Example: auditing form field state during validation</strong></p>
<pre class="language-javascript"><code class="language-javascript">form.addEventListener("submit", (e) =&gt; {
  e.preventDefault();
  
  const fields = Array.from(form.elements).map(el =&gt; ({
    name: el.name,
    value: el.value,
    required: el.required,
    valid: el.validity?.valid,
    validationMessage: el.validationMessage,
  }));
  
  console.table(fields);
  
  // if the form isn't submitting when you expected it to,
  // the table shows every field's state at once.
  // the invalid field jumps out because its "valid" cell is false.
});</code></pre>

    <p><strong>Example: inspecting async pipeline state at each step</strong></p>
<pre class="language-javascript"><code class="language-javascript">async function processOrders(orders) {
  console.log("STEP 1 — INPUT:");
  console.table(orders, ["id", "total", "status"]);
  
  const validated = orders.filter(o =&gt; o.status === "pending");
  console.log("STEP 2 — VALIDATED:");
  console.table(validated, ["id", "total"]);
  
  const enriched = await Promise.all(validated.map(fetchOrderDetails));
  console.log("STEP 3 — ENRICHED:");
  console.table(enriched, ["id", "customer", "total", "items"]);
  
  return enriched;
}
// three snapshots of the same data as it flows through the pipeline.
// where the data suddenly loses rows or fields is where the bug lives.</code></pre>

    <p><strong>Example: profiling something quick without a real profiler</strong></p>
<pre class="language-javascript"><code class="language-javascript">const timings = tasks.map(task =&gt; {
  const start = performance.now();
  runTask(task);
  return {
    name: task.name,
    ms: (performance.now() - start).toFixed(1),
  };
});

console.table(timings);
// click the "ms" column header to sort — slowest task jumps to the top.
// a quick, disposable poor-man's profiler right in DevTools.</code></pre>
  `,

  /* 3.2 Connects to */
  'debug-4-3-3-2': `
    <ul>
      <li><strong><code>console.log()</code></strong> → the general-purpose printer; use table for repeating-structure data instead</li>
      <li><strong><code>console.warn()</code></strong> / <strong><code>console.error()</code></strong> → different severities, but no table equivalents; log severity separately</li>
      <li><strong><code>console.dir()</code></strong> → alternative for exploring a single deep object structure</li>
      <li><strong>Arrays of objects</strong> → the ideal input shape for <code>console.table</code></li>
      <li><strong><code>.map()</code>, <code>.filter()</code></strong> → often combined with table to reshape data before viewing</li>
      <li><strong><code>Array.from()</code></strong> → converts NodeLists, sets, maps into arrays that table can render</li>
      <li><strong>DevTools column sorting</strong> → click headers to sort table rows</li>
      <li><strong>Debugging data pipelines</strong> → table between steps to see the transformation</li>
      <li><strong>Debugging DOM collections</strong> → convert NodeLists to arrays for tabular inspection</li>
    </ul>
  `,

  /* 3.3 See also */
  'debug-4-3-3-3': `
    <ul>
      <li><code>console.log()</code></li>
      <li><code>console.dir()</code></li>
      <li><code>console.group()</code> / <code>console.groupEnd()</code></li>
      <li><code>typeof</code></li>
      <li><code>Array.isArray()</code></li>
      <li>Array methods (<code>map</code>, <code>filter</code>)</li>
      <li>Debugging arrays</li>
      <li>Debugging objects</li>
      <li>Debugging data pipelines</li>
    </ul>
  `,
});