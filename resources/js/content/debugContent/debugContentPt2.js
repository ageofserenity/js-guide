
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

  /* ========================================================= 
   Sub-lesson: 7.5.5 Console Tools → console.dir()
 =======================================================*/

  /* --- Chunk 0: What & How --- */

  /* 0.0 What it is */
  'debug-4-4-0-0': `
    <p><strong>console.dir()</strong> prints an interactive, deeply-expandable object tree to DevTools. It's the tool for looking at an object's actual JavaScript structure — every property, every method, every nested value — instead of the "friendly" preview that <code>console.log</code> gives you. The name is short for "directory," as in "show me the directory listing of this object."</p>
    <p>It matters most for DOM elements. Where <code>console.log(myDiv)</code> prints the element's HTML markup (which looks like the page you can already see), <code>console.dir(myDiv)</code> prints the element as a JavaScript object — every property, every event handler, every computed style — so you can see what your code can actually access on it.</p>
  `,

  /* 0.1 Syntax */
  'debug-4-4-0-1': `
<pre class="language-javascript"><code class="language-javascript">// Basic form — inspect any object
console.dir(user);

// The killer use case: inspect a DOM element as a JS object
const btn = document.querySelector("button");
console.dir(btn);

// Optional second argument: control depth and other display options
console.dir(obj, { depth: 3, colors: true });    // more common in Node than browsers

// Contrast with console.log
console.log(btn);   // shows &lt;button&gt;Click&lt;/button&gt; — HTML preview
console.dir(btn);   // shows { accessKey, ariaLabel, className, ...50+ props }</code></pre>

    <p>Shape: <code>console.dir(</code> any value <code>)</code>. Almost always used for exploration — "what properties does this thing actually have?" — rather than for casual value inspection.</p>
  `,

  /* 0.2 Anatomy / Breakdown */
  'debug-4-4-0-2': `
<pre class="language-javascript"><code class="language-javascript">console.dir(myElement);
// │       │   │
// │       │   └── argument — the object or DOM element to inspect
// │       └── the method name — dir, lowercase
// └── the console object — same one console.log uses

// under the hood, what DevTools does differently vs console.log:
// 1. console.log(domElement) → renders the ELEMENT view (its HTML markup)
// 2. console.dir(domElement) → renders the OBJECT view (its JS properties)
// 
// for plain objects, they're nearly identical (both show a tree).
// for DOM elements, they're completely different views of the same thing.

// example output for console.dir(button):
// button.my-btn
// ├── accessKey: ""
// ├── ariaLabel: null
// ├── attributes: NamedNodeMap
// ├── autofocus: false
// ├── className: "my-btn primary"
// ├── click: ƒ click()
// ├── clientHeight: 32
// ├── ... (dozens more)
// └── __proto__: HTMLButtonElement
//     ├── ... (all inherited methods and properties)

// vs console.log(button):
// &lt;button class="my-btn primary"&gt;Save&lt;/button&gt;
// (just the HTML preview — no property tree)</code></pre>
  `,

  /* 0.3 Syntax Details That Matter */
  'debug-4-4-0-3': `
    <p><strong>For plain JS objects, <code>console.dir</code> and <code>console.log</code> look nearly identical.</strong> Both show an expandable tree. The difference emerges with DOM elements:</p>
<pre class="language-javascript"><code class="language-javascript">const user = { name: "Alice", age: 30 };
console.log(user);   // { name: "Alice", age: 30 }
console.dir(user);   // { name: "Alice", age: 30 }
// visually the same for plain objects.

const btn = document.querySelector("button");
console.log(btn);   // &lt;button&gt;Save&lt;/button&gt;         ← HTML preview
console.dir(btn);   // HTMLButtonElement { ... }      ← JS object tree
// dramatically different for DOM elements.</code></pre>

    <p><strong>The output expands as a tree with property values and types.</strong> Everything on the object — including inherited members via <code>__proto__</code> — is browsable:</p>
<pre class="language-javascript"><code class="language-javascript">console.dir(document.body);
// clicking the tree lets you drill into:
// - direct properties (id, className, children, innerHTML, ...)
// - accessors (offsetWidth, scrollTop, ...)
// - methods (appendChild, addEventListener, ...)
// - the prototype chain (HTMLBodyElement → HTMLElement → Element → Node → EventTarget)</code></pre>

    <p><strong>The second-argument options object is browser-inconsistent.</strong> Node.js supports options like <code>{ depth: 2, colors: true, showHidden: false }</code>. Browsers largely ignore this argument. Don't rely on it in browser code:</p>
<pre class="language-javascript"><code class="language-javascript">// works in Node:
console.dir(obj, { depth: 5, colors: true });

// in the browser, the options are typically ignored.
// stick to the one-argument form:
console.dir(obj);</code></pre>

    <p><strong>Case matters.</strong> It's <code>console.dir</code>, lowercase. <code>console.Dir</code> or <code>console.DIR</code> throws:</p>
<pre class="language-javascript"><code class="language-javascript">console.dir(obj);   // ✓
console.Dir(obj);   // ✗ TypeError: console.Dir is not a function</code></pre>

    <p><strong>The output is a live, interactive view — not a snapshot.</strong> Same object-by-reference gotcha as <code>console.log</code>: when you expand a <code>console.dir</code> entry, DevTools reads the object's current state, not its state at the time of the call:</p>
<pre class="language-javascript"><code class="language-javascript">const state = { count: 0 };
console.dir(state);
state.count = 99;
// expanding the logged tree may show count: 99, not count: 0.
// to freeze, spread or stringify first:
console.dir({ ...state });
console.log(JSON.stringify(state));</code></pre>

    <p><strong>Node vs browser display differences.</strong> In browsers, <code>console.dir</code> gives you an interactive tree in DevTools. In Node.js, it prints to stdout as formatted text, respecting <code>util.inspect</code> options. Same tool name, subtly different output medium.</p>
  `,

  /* --- Chunk 1: Why & When --- */

  /* 1.0 What problem it solves */
  'debug-4-4-1-0': `
    <p>When you log a DOM element with <code>console.log</code>, DevTools shows the element the same way it would in the Elements panel — as HTML markup. That's useful if you want to see how the tag looks, but useless if you want to know what JavaScript properties are available on it. "What events does this element have?" "What's its computed <code>tabIndex</code>?" "Does it have a <code>dataset</code> value I forgot about?" — you can't answer those from an HTML preview.</p>
    <p><code>console.dir</code> solves that. It shows you the element the way JavaScript sees it: a big object with all its properties, methods, and inheritance chain. When you're debugging DOM code and need to know what's actually available to work with, <code>console.dir</code> gives you the truth. It also matters for other host objects (like <code>window</code>, <code>document</code>, <code>Response</code>) that <code>console.log</code> prettifies away.</p>
  `,

  /* 1.1 Why use it */
  'debug-4-4-1-1': `
    <p>Because the HTML preview lies about what your JavaScript can touch. An <code>&lt;input&gt;</code> element in HTML has attributes like <code>type</code>, <code>value</code>, <code>placeholder</code>. But the actual DOM element in JS has all of those <em>plus</em> <code>validity</code>, <code>form</code>, <code>selectionStart</code>, <code>selectionEnd</code>, <code>files</code> (for file inputs), <code>indeterminate</code> (for checkboxes), and dozens more. Reading the HTML tells you nothing about those. <code>console.dir</code> shows you every one, in a browsable tree.</p>
    <p>It's also invaluable when you're exploring an unfamiliar API. Fetch returns a <code>Response</code> object; <code>console.log(response)</code> shows a compact summary; <code>console.dir(response)</code> shows you every property and method available — so you can figure out how to use it without hunting through documentation.</p>
  `,

  /* 1.2 Where you use it */
  'debug-4-4-1-2': `
<pre class="language-javascript"><code class="language-javascript">// Inspecting a DOM element as a JS object
const btn = document.querySelector("button");
console.dir(btn);

// Inspecting an input to see what state it's tracking
console.dir(document.querySelector("input[type=file]"));
// reveals: files, validity, form, defaultValue, selectionStart, ...

// Exploring what a fetch Response can do
const res = await fetch("/api/data");
console.dir(res);   // headers, status, ok, redirected, type, body, ...

// Inspecting the global window object
console.dir(window);   // every browser API in one browsable tree

// Inspecting document.body's real structure
console.dir(document.body);

// Inspecting an event object in detail
btn.addEventListener("click", (e) =&gt; console.dir(e));
// vs console.log(e) which shows a minimal preview

// Inspecting a NodeList that console.log makes opaque
console.dir(document.querySelectorAll(".item"));

// Inspecting a class instance's prototype chain
class Widget { /* ... */ }
const w = new Widget();
console.dir(w);   // includes __proto__ with all methods

// Comparing computed values inside a running event handler
input.addEventListener("input", (e) =&gt; {
  console.dir(e.target);   // full input state: value, validity, selection...
});

// Exploring a library object to see what's available
import { db } from "some-library";
console.dir(db);</code></pre>

    <p>The general pattern: when you'd normally reach for <code>console.log</code> but want the object <em>itself</em>, not a friendly summary, use <code>console.dir</code>.</p>
  `,

  /* 1.3 Plain English explanation */
  'debug-4-4-1-3': `
    <p>Imagine every DOM element is like an appliance — a blender, say. When you log it with <code>console.log</code>, it's like DevTools shows you a photo of the blender sitting on a counter. You can see it, but you can't see what buttons it has, what settings it exposes, what the motor's rated for. <code>console.dir</code> is like DevTools handing you the owner's manual — every button, every setting, every internal component listed and explorable.</p>
    <p>For a plain JS object, both views basically show the same thing (a plain object is mostly just its listed properties). But for anything richer — a DOM element, a browser API, a class instance — the manual view (<code>dir</code>) tells you far more than the photo view (<code>log</code>).</p>
  `,

  /* 1.4 Mental model */
  'debug-4-4-1-4': `
    <p>Think of every object in JavaScript as having two sides: the presentation face and the machinery inside. <code>console.log</code> shows you the presentation face — how the object wants to be summarized, how DevTools thinks you'd like to see it at a glance. <code>console.dir</code> shows you the machinery — every property, method, inherited feature, and internal slot the object actually carries.</p>
    <p>For simple plain objects, the presentation face IS the machinery — there's nothing hidden. For complex host objects (DOM, browser APIs), the presentation face hides most of the machinery to save space. <code>console.dir</code> flips that hood open. When you need to know what's actually there, <code>dir</code> is the wrench that pops the panel.</p>
  `,

  /* 1.5 Step-by-step walkthrough */
  'debug-4-4-1-5': `
<pre class="language-javascript"><code class="language-javascript">const input = document.querySelector("input[type=email]");
console.dir(input);

// what happens when this line runs:
// 1. document.querySelector finds the first email input on the page.
// 2. that DOM element (an HTMLInputElement) is stored in "input."
// 3. JS reaches the console.dir line.
// 4. it evaluates the argument: the input element.
// 5. JS calls console.dir with that element.
// 6. DevTools receives the element and inspects its full property list:
//    - own properties on the element itself
//    - inherited properties from HTMLInputElement.prototype
//    - inherited properties from HTMLElement.prototype
//    - inherited properties from Element.prototype
//    - inherited properties from Node.prototype
//    - inherited properties from EventTarget.prototype
// 7. DevTools renders a tree in the console:
//    input#email.form-field
//    ├── accept: ""
//    ├── align: ""
//    ├── autocomplete: "email"
//    ├── autofocus: false
//    ├── checked: false
//    ├── defaultValue: ""
//    ├── files: null
//    ├── form: HTMLFormElement
//    ├── formAction: "https://..."
//    ├── labels: NodeList(1)
//    ├── name: "email"
//    ├── placeholder: "you@example.com"
//    ├── selectionEnd: 0
//    ├── selectionStart: 0
//    ├── type: "email"
//    ├── validationMessage: "Please fill in this field."
//    ├── validity: ValidityState
//    ├── value: ""
//    ├── ... (50+ more properties)
//    └── __proto__: HTMLInputElement
// 8. every entry is clickable to expand nested objects.
// 9. code execution continues to the next line.

// same input passed to console.log would just show:
// &lt;input type="email" name="email" class="form-field"&gt;
// which tells you almost nothing about what you can access from JS.</code></pre>
  `,

  /* --- Chunk 2: The Click --- */

  /* 2.0 Debugging clue */
  'debug-4-4-2-0': `
    <p>If you're not sure whether a property exists on an object, <code>console.dir</code> answers instantly:</p>
<pre class="language-javascript"><code class="language-javascript">// "does this input have a .files property?"
const input = document.querySelector("input");
console.dir(input);
// scan the tree — if "files" is listed, yes; if not, no.

// "what methods can I call on a fetch Response?"
const res = await fetch("/api/data");
console.dir(res);
// scroll to __proto__ — every method (json, text, blob, clone, arrayBuffer) is there.

// "why does my e.target look different from what I expected?"
btn.addEventListener("click", (e) =&gt; console.dir(e.target));
// see the exact element and every property it actually has.

// "what's on this class instance?"
console.dir(new SomeClass());
// direct properties + prototype methods, all visible.</code></pre>
    <p>If <code>console.dir</code> and <code>console.log</code> look identical for what you're logging, it's a plain object — either view is fine. The difference only matters for DOM elements and host objects.</p>
  `,

  /* 2.1 The part that makes it click */
  'debug-4-4-2-1': `
    <p>The aha: <code>console.log</code> and <code>console.dir</code> aren't different tools that do different things — they're the same tool that asks DevTools for different <em>views</em>. Same input, two ways of rendering. For plain objects, DevTools has only one useful view, so the two commands overlap. For DOM elements, DevTools has a special "friendly HTML preview" view (log) and a "raw JS object tree" view (dir):</p>
<pre class="language-javascript"><code class="language-javascript">// same element, two different views:
console.log(el);   // "how the HTML looks"     — for reading structure
console.dir(el);   // "what the JS object is"  — for exploring the API

// choosing which is choosing what you're asking DevTools to show.
// there's no data difference. only rendering.</code></pre>
    <p>Once that clicks, using them together is a natural rhythm: <code>console.log</code> when you want the HTML preview, <code>console.dir</code> when you want the property list. Both, one after the other, when you want both perspectives.</p>
  `,

  /* 2.2 Common confusions */
  'debug-4-4-2-2': `
    <p><strong>"console.log and console.dir look the same for my object — did I do something wrong?"</strong> No — you're just logging a plain JS object, which both methods render identically. The difference only becomes visible for DOM elements and browser host objects. If you want to see the split, try <code>console.log(document.body)</code> then <code>console.dir(document.body)</code>.</p>

    <p><strong>"Why does the tree include __proto__?"</strong> Because that's how JavaScript objects work. Every object has a prototype chain — methods inherited from parent classes. <code>console.dir</code> shows the whole chain so you can see every method and property you can access, not just the ones defined directly on the instance. Click <code>__proto__</code> to expand the parent's methods.</p>

    <p><strong>"The tree is huge. How do I find what I want?"</strong> Use DevTools' search: with the console focused, Ctrl/Cmd+F opens a search box. Type the property name and it jumps to it. For deeply nested exploration, click carefully — one branch at a time — instead of expanding everything.</p>

    <p><strong>"Can I use console.dir in production code?"</strong> Same rules as any console call: remove or gate before shipping. Because <code>console.dir</code> produces a large object tree, calling it in a loop can noticeably slow down DevTools.</p>

    <p><strong>"Why does console.dir show old values sometimes?"</strong> Same object-by-reference issue as <code>console.log</code>. The tree is expanded lazily when you click it, so it reads whatever the current state of the object is — not the state at the moment of the call. If you need a snapshot, spread or stringify first.</p>

    <p><strong>"Why does Node's console.dir look different from the browser's?"</strong> Because Node prints to stdout as text, while the browser renders an interactive tree in DevTools. Same idea, different output medium. Node also supports options like <code>{ depth: 3 }</code> that browsers largely ignore.</p>
  `,

  /* 2.3 Common mistakes */
  'debug-4-4-2-3': `
<pre class="language-javascript"><code class="language-javascript">// Mistake 1: using dir for plain object logs
console.dir({ name: "Alice", age: 30 });
// works, but the same as console.log for plain objects. no benefit.
// fix: reserve dir for DOM elements and host objects where it actually differs.
console.log({ name: "Alice", age: 30 });

// Mistake 2: relying on the second argument in browsers
console.dir(obj, { depth: 5, colors: true });
// browsers ignore this. only Node respects those options.
// fix: don't pass options in browser code.
console.dir(obj);

// Mistake 3: using dir when you actually want the HTML preview
console.dir(document.body);   // shows a giant JS object tree
// if you wanted to see the HTML structure of body:
console.log(document.body);

// Mistake 4: expecting a frozen snapshot
const state = { count: 0 };
console.dir(state);
state.count = 99;
// expanding the tree may show count: 99, not 0
// fix: snapshot first
console.dir({ ...state });

// Mistake 5: dir'ing enormous objects like window
console.dir(window);   // window has thousands of properties
// works, but the tree is huge and DevTools may lag
// fix: narrow down to what you actually care about
console.dir(window.location);

// Mistake 6: using dir on a NodeList and expecting a tabular view
const items = document.querySelectorAll("li");
console.dir(items);   // shows a NodeList object tree, not a friendly list
// fix: for scanning multiple elements, table works better
console.table([...items].map(el =&gt; ({
  tag: el.tagName,
  text: el.textContent.slice(0, 30),
})));

// Mistake 7: forgetting parentheses
console.dir document.body;   // ✗ SyntaxError
console.dir(document.body);  // ✓

// Mistake 8: mixing up dir and dirxml
console.dirxml(document.body);   // deprecated in most browsers, avoid
console.dir(document.body);      // use this instead</code></pre>
  `,

  /* --- Chunk 3: In Practice --- */

  /* 3.0 Tiny examples */
  'debug-4-4-3-0': `
<pre class="language-javascript"><code class="language-javascript">// Any DOM element
console.dir(document.querySelector("button"));

// The whole body
console.dir(document.body);

// An input element to see every state property
console.dir(document.querySelector("input"));

// A form to see all fields via .elements
console.dir(document.querySelector("form"));

// Explore the window object
console.dir(window);

// Explore document
console.dir(document);

// Explore the location object
console.dir(window.location);

// Explore a fetch Response
const res = await fetch("/api/data");
console.dir(res);

// Explore an event object
btn.addEventListener("click", (e) =&gt; console.dir(e));

// Compare log vs dir
console.log(document.body);   // HTML preview
console.dir(document.body);   // JS object tree

// A class instance
class Widget {
  constructor(name) { this.name = name; }
  render() {}
}
console.dir(new Widget("test"));

// A NodeList
console.dir(document.querySelectorAll("a"));

// A style declaration
console.dir(getComputedStyle(document.body));

// A Range object
const range = document.createRange();
console.dir(range);</code></pre>
  `,

  /* 3.1 Real website uses */
  'debug-4-4-3-1': `
    <p><strong>Example: figuring out why an input isn't validating</strong></p>
<pre class="language-javascript"><code class="language-javascript">const email = document.querySelector("input[type=email]");
console.dir(email);
// scan the tree for the validity object:
// validity:
//   valid: false
//   valueMissing: true          ← the field is required and empty
//   typeMismatch: false
//   patternMismatch: false
//   badInput: false
//   customError: false
// tells you exactly which validation constraint is failing.
// no more staring at "why isn't submit working" — the reason is in the tree.</code></pre>

    <p><strong>Example: exploring a browser API you've never used</strong></p>
<pre class="language-javascript"><code class="language-javascript">// You want to work with the clipboard but forget what's available
console.dir(navigator.clipboard);
// tree reveals:
//   read: ƒ read()
//   readText: ƒ readText()
//   write: ƒ write()
//   writeText: ƒ writeText()
// there — you can see exactly which methods exist without hunting through docs.</code></pre>

    <p><strong>Example: comparing what a variable holds vs. what its HTML looks like</strong></p>
<pre class="language-javascript"><code class="language-javascript">const target = event.target;

console.log("HTML view:");
console.log(target);            // &lt;button class="btn"&gt;Save&lt;/button&gt;

console.log("JS object view:");
console.dir(target);            // full property tree — className, dataset, disabled, form, ...

// two views of the exact same reference, side by side.
// helpful for confirming "yes, this is the button I think it is,
// AND its .disabled property is currently true — that's why nothing happens."</code></pre>

    <p><strong>Example: understanding a fetch response before you consume it</strong></p>
<pre class="language-javascript"><code class="language-javascript">const res = await fetch("/api/data");
console.dir(res);
// reveals every property and method:
//   ok: true
//   status: 200
//   headers: Headers
//   redirected: false
//   type: "basic"
//   url: "https://..."
//   __proto__:
//     json: ƒ json()
//     text: ƒ text()
//     blob: ƒ blob()
//     formData: ƒ formData()
//     arrayBuffer: ƒ arrayBuffer()
//     clone: ƒ clone()
// now you know: "if I need the raw text instead of JSON, res.text() is my method."</code></pre>

    <p><strong>Example: debugging an event object mid-handler</strong></p>
<pre class="language-javascript"><code class="language-javascript">form.addEventListener("submit", (e) =&gt; {
  console.dir(e);
  // gives you every property of the SubmitEvent:
  //   submitter: HTMLButtonElement    ← which button caused the submit
  //   target: HTMLFormElement
  //   defaultPrevented: false
  //   isTrusted: true
  //   ... and every inherited method.
  // useful when you're not sure what data the event carries.
});</code></pre>
  `,

  /* 3.2 Connects to */
  'debug-4-4-3-2': `
    <ul>
      <li><strong><code>console.log()</code></strong> → the friendly preview; use dir when you want the raw object structure</li>
      <li><strong><code>console.table()</code></strong> → grid view for arrays of similar objects; different visualization</li>
      <li><strong>DOM elements</strong> → the primary use case for <code>console.dir</code></li>
      <li><strong>Prototype chain</strong> → <code>__proto__</code> in the tree shows inherited methods</li>
      <li><strong>DevTools Console</strong> → where the interactive tree appears</li>
      <li><strong><code>Object.keys()</code>, <code>Object.getOwnPropertyNames()</code></strong> → programmatic alternatives when you want to list keys in code</li>
      <li><strong><code>for...in</code></strong> → iterates enumerable properties, similar to what dir surfaces</li>
      <li><strong>Browser APIs</strong> — <code>fetch</code>, <code>navigator</code>, <code>document</code>, <code>location</code> — all worth exploring with dir</li>
      <li><strong>Debugging DOM</strong> → dir is the fastest way to see DOM element state</li>
    </ul>
  `,

  /* 3.3 See also */
  'debug-4-4-3-3': `
    <ul>
      <li><code>console.log()</code></li>
      <li><code>console.table()</code></li>
      <li><code>Object.keys()</code></li>
      <li><code>Object.getOwnPropertyNames()</code></li>
      <li><code>Object.getPrototypeOf()</code></li>
      <li>Prototype chain</li>
      <li>DOM elements as JS objects</li>
      <li>Debugging DOM</li>
      <li>Debugging events</li>
      <li>Fetch Response object</li>
    </ul>
  `,

  /* ========================================================= 
   Sub-lesson: 7.5.6 Console Tools → typeof
 =======================================================*/

  /* --- Chunk 0: What & How --- */

  /* 0.0 What it is */
  'debug-4-5-0-0': `
    <p><strong>typeof</strong> is a built-in JavaScript operator that returns a string describing the type of any value. Not a function, not a method — an operator, like <code>+</code> or <code>!</code>. Put it in front of any value and it evaluates to one of a small fixed set of strings: <code>"string"</code>, <code>"number"</code>, <code>"boolean"</code>, <code>"undefined"</code>, <code>"object"</code>, <code>"function"</code>, <code>"symbol"</code>, or <code>"bigint"</code>.</p>
    <p>For debugging, it's the fastest way to answer "what kind of thing is this?" A value that looks like a number in the console might actually be the string <code>"5"</code>. A variable you thought was an object might be <code>null</code>. <code>typeof</code> cuts through the display ambiguity and tells you what JavaScript actually sees.</p>
  `,

  /* 0.1 Syntax */
  'debug-4-5-0-1': `
<pre class="language-javascript"><code class="language-javascript">// Basic form — put typeof before any value
typeof 42;              // "number"
typeof "hello";         // "string"
typeof true;            // "boolean"
typeof undefined;       // "undefined"
typeof null;            // "object"   ← historical quirk (see below)
typeof {};              // "object"
typeof [];              // "object"   ← arrays are objects
typeof function() {};   // "function"
typeof Symbol();        // "symbol"
typeof 10n;             // "bigint"

// Common debugging use — log the type alongside the value
console.log("x:", x, "type:", typeof x);

// Common check — is this a certain type?
if (typeof value === "string") { /* ... */ }
if (typeof callback === "function") callback();
if (typeof user === "undefined") return;

// Parentheses are optional but often used for clarity
typeof x;
typeof(x);   // same thing</code></pre>

    <p>Shape: <code>typeof</code> followed by any value or expression. Always evaluates to one of the 8 type strings.</p>
  `,

  /* 0.2 Anatomy / Breakdown */
  'debug-4-5-0-2': `
<pre class="language-javascript"><code class="language-javascript">typeof value
// │      │
// │      └── the value or expression being inspected
// └── the operator — always lowercase, no parentheses required

// under the hood:
// 1. JS evaluates the expression to the right of typeof.
// 2. it looks at the resulting value's internal type tag.
// 3. it returns a string describing that type.

// the 8 possible return values:
// ┌──────────────┬─────────────────────────────────────────────┐
// │ return value │ what it means                               │
// ├──────────────┼─────────────────────────────────────────────┤
// │ "string"     │ a string primitive                          │
// │ "number"     │ a number (int, float, NaN, Infinity)        │
// │ "boolean"    │ true or false                               │
// │ "undefined"  │ undefined, or an undeclared variable        │
// │ "object"     │ any object, array, or null                  │
// │ "function"   │ any function (including arrow, async, etc.) │
// │ "symbol"     │ a Symbol primitive                          │
// │ "bigint"     │ a BigInt primitive                          │
// └──────────────┴─────────────────────────────────────────────┘

// two things stand out:
// - null returns "object" (a bug baked into the language since 1995 — kept for compatibility)
// - arrays return "object" (use Array.isArray() to distinguish arrays specifically)</code></pre>
  `,

  /* 0.3 Syntax Details That Matter */
  'debug-4-5-0-3': `
    <p><strong><code>typeof null</code> is <code>"object"</code>.</strong> This is a famous quirk. In the earliest days of JavaScript, <code>null</code> was represented internally with a type tag of 0, which happened to match the tag for objects. It was fixed briefly and then reverted for backward compatibility. Result: <code>typeof null === "object"</code>, even though <code>null</code> is not really an object. If you're checking for null, use <code>=== null</code> directly, not <code>typeof</code>:</p>
<pre class="language-javascript"><code class="language-javascript">typeof null === "object";    // true — this is the quirk
value === null;              // the right way to check for null</code></pre>

    <p><strong>Arrays return <code>"object"</code>.</strong> Arrays are objects under the hood, so <code>typeof</code> can't tell them apart from other objects. To specifically check for arrays, use <code>Array.isArray()</code>:</p>
<pre class="language-javascript"><code class="language-javascript">typeof [];                   // "object"
typeof {};                   // "object"
// both return "object" — typeof can't distinguish arrays from plain objects.

Array.isArray([]);           // true
Array.isArray({});           // false
// Array.isArray CAN distinguish them.</code></pre>

    <p><strong><code>NaN</code> returns <code>"number"</code>.</strong> <code>NaN</code> ("Not a Number") is, ironically, still a number type. This means <code>typeof NaN === "number"</code>, which can be misleading. To check for <code>NaN</code>, use <code>Number.isNaN()</code>:</p>
<pre class="language-javascript"><code class="language-javascript">typeof NaN;                  // "number" — yes, really
Number.isNaN(NaN);           // true — the proper NaN check</code></pre>

    <p><strong><code>typeof</code> on an undeclared variable does NOT throw.</strong> This is unusual — normally, referencing an undeclared variable throws <code>ReferenceError</code>. <code>typeof</code> is a special case that returns <code>"undefined"</code> without crashing:</p>
<pre class="language-javascript"><code class="language-javascript">console.log(undefinedVar);           // ReferenceError
console.log(typeof undefinedVar);    // "undefined" — no error

// this is a common trick to safely check "is this variable defined at all?"
if (typeof MY_FEATURE_FLAG !== "undefined") {
  // safe to use MY_FEATURE_FLAG
}</code></pre>

    <p><strong>All function types return <code>"function"</code>.</strong> Regular functions, arrow functions, async functions, generator functions — all return <code>"function"</code>. This is convenient because it means one check catches "is this callable?":</p>
<pre class="language-javascript"><code class="language-javascript">typeof function() {};            // "function"
typeof (() =&gt; {});               // "function"
typeof async function() {};      // "function"
typeof function*() {};           // "function"
typeof class Foo {};             // "function" — classes are technically functions</code></pre>

    <p><strong>Parentheses are optional.</strong> <code>typeof</code> is an operator, so it doesn't need parentheses around its operand. But you can use them for grouping when the expression is complex:</p>
<pre class="language-javascript"><code class="language-javascript">typeof x;                    // ✓ common
typeof(x);                   // ✓ also fine
typeof x + " tail";          // "&lt;typestring&gt; tail" — evaluated left to right, then concatenated
typeof (x + " tail");        // "string" — the whole expression is inspected</code></pre>

    <p><strong>Case matters.</strong> Always lowercase <code>typeof</code>. <code>Typeof</code> or <code>TYPEOF</code> are treated as regular identifiers (variable names), which will throw <code>ReferenceError</code> if undeclared:</p>
<pre class="language-javascript"><code class="language-javascript">typeof x;    // ✓
Typeof x;    // ✗ SyntaxError or ReferenceError depending on parser</code></pre>

    <p><strong>The result is always a string.</strong> Whatever you compare it against must also be a string, quoted:</p>
<pre class="language-javascript"><code class="language-javascript">if (typeof x === "string") { }        // ✓
if (typeof x === string)   { }        // ✗ ReferenceError: string is not defined
if (typeof x == "String")  { }        // ✗ case matters — never matches</code></pre>
  `,

  /* --- Chunk 1: Why & When --- */

  /* 1.0 What problem it solves */
  'debug-4-5-1-0': `
    <p>When code is behaving strangely, the fastest path to the bug is often "what type is this variable really?" A comparison that should be true is false. A math operation returns <code>NaN</code>. A function call fails with "x is not a function." Every one of these bugs has the same root cause: a value has a different type than you thought. You wrote code assuming a number, but you got a string. You wrote code expecting an object, but you got <code>null</code>. Staring at the value in the console isn't always enough — <code>"5"</code> and <code>5</code> look identical when printed.</p>
    <p><code>typeof</code> solves that. It cuts through the visual similarity and tells you exactly what JavaScript sees. Once you know a value's real type, the fix is usually obvious: convert the string to a number, check for null before accessing properties, verify the callback was actually passed. <code>typeof</code> is how you find the "type mismatch" family of bugs in seconds instead of minutes.</p>
  `,

  /* 1.1 Why use it */
  'debug-4-5-1-1': `
    <p>Because type mismatches are one of the most common bug sources in JavaScript. The language is loosely typed — variables can hold anything, and operations that mix types often "succeed" in surprising ways. <code>"5" + 1</code> is <code>"51"</code>, not <code>6</code>. <code>null.name</code> throws. <code>undefined === false</code> is <code>false</code>. Every one of these behaviors becomes clear the moment you know what type each value actually is.</p>
    <p>Beyond debugging, <code>typeof</code> is also how you write defensively. A function that might receive a callback needs to check <code>typeof cb === "function"</code> before calling. Code that reads config values needs to check <code>typeof val === "undefined"</code> to apply defaults safely. These small checks prevent whole categories of runtime errors.</p>
  `,

  /* 1.2 Where you use it */
  'debug-4-5-1-2': `
<pre class="language-javascript"><code class="language-javascript">// Logging alongside a value to see its type
console.log("x:", x, "type:", typeof x);

// Checking type before an operation that requires it
if (typeof value === "string") {
  return value.trim();
}

// Confirming a callback is actually a function
function runIfCallable(cb) {
  if (typeof cb === "function") cb();
}

// Guarding against undefined variables (no ReferenceError)
if (typeof window !== "undefined") {
  // safe to use window (also works in Node where window doesn't exist)
}

// Detecting whether a feature flag is set
if (typeof FEATURE_ENABLED !== "undefined") {
  useFeature();
}

// Debugging why a comparison isn't working
console.log(x === y, typeof x, typeof y);

// Debugging why an if branch isn't taken
if (x) {
  console.log("truthy path", typeof x, x);
} else {
  console.log("falsy path", typeof x, x);
}

// Runtime type validation at function boundaries
function setPrice(price) {
  if (typeof price !== "number") {
    throw new TypeError("price must be a number, got " + typeof price);
  }
  // ...
}

// Working with mixed-type data (like values from user input or JSON)
values.forEach(v =&gt; {
  console.log(v, "→", typeof v);
});

// Deciding how to handle a polymorphic argument
function handle(input) {
  if (typeof input === "string") return handleString(input);
  if (typeof input === "number") return handleNumber(input);
  if (typeof input === "object" &amp;&amp; input !== null) return handleObject(input);
  throw new Error("unsupported input type: " + typeof input);
}

// Checking types in a data-transform pipeline
console.table(items.map(i =&gt; ({
  name: i.name,
  priceType: typeof i.price,
  price: i.price,
})));

// Distinguishing "empty" from "missing"
if (typeof user.name === "undefined") {
  // name is missing
} else if (user.name === "") {
  // name is empty string
}</code></pre>

    <p>General rule: whenever a value isn't behaving like you expected, log its <code>typeof</code> as your first move. Whenever you're writing code that assumes a specific type, guard the assumption with a <code>typeof</code> check.</p>
  `,

  /* 1.3 Plain English explanation */
  'debug-4-5-1-3': `
    <p>Think of every variable in JavaScript as a labeled box. The label tells you what kind of thing is inside — a number, a piece of text, a list, a function, and so on. Most of the time you don't need to look at the label because the box's contents are obvious. But when something's wrong and the code isn't behaving right, the label is the first thing you check.</p>
    <p><code>typeof</code> is peeling back the wrapper and reading the label. You point it at a variable and it tells you the type. That one word is often enough to spot the bug — "oh, that's supposed to be a number but the label says string, that's why my math is broken." No detective work, no guessing.</p>
  `,

  /* 1.4 Mental model */
  'debug-4-5-1-4': `
    <p>Imagine every value in your code is a container in a shipping warehouse. From a distance, they all look similar — boxes, crates, envelopes. Zoom in and each one has a small tag: FOOD, ELECTRONICS, DOCUMENTS, FRAGILE. The tag doesn't tell you what's inside, but it tells you what <em>kind</em> of thing is inside — and that's usually what you need to know when handling it.</p>
    <p><code>typeof</code> is you walking up to a container and reading its tag. Whenever a package isn't behaving the way you expected — heavier than it should be, ringing when it shouldn't, showing up at the wrong destination — the tag is the first clue. Almost every "package behaved wrong" mystery in the warehouse turns out to be "someone put the wrong contents in the wrong tag." <code>typeof</code> is how you catch it.</p>
  `,

  /* 1.5 Step-by-step walkthrough */
  'debug-4-5-1-5': `
<pre class="language-javascript"><code class="language-javascript">// Scenario: a form saves numbers as strings, and totals come out wrong.

const inputA = document.querySelector("#price-a");
const inputB = document.querySelector("#price-b");

console.log("A value:", inputA.value, "typeof:", typeof inputA.value);
console.log("B value:", inputB.value, "typeof:", typeof inputB.value);

const total = inputA.value + inputB.value;
console.log("total:", total, "typeof:", typeof total);

// what happens when this code runs (say inputs contain "10" and "5"):
// 1. inputA.value is read from the DOM.
//    - DOM input .value is ALWAYS a string, even for numeric-looking content.
//    - value stored: "10" (a string).
// 2. first console.log fires:
//    - "A value: 10 typeof: string"
//    - the string "10" looks like a number in the console!
// 3. inputB.value read the same way. value: "5" (string).
// 4. second log: "B value: 5 typeof: string"
// 5. inputA.value + inputB.value evaluates:
//    - + on two strings concatenates them.
//    - "10" + "5" = "105", not 15.
// 6. third log: "total: 105 typeof: string"
// 7. the total is displayed as $105 — the bug.
//
// without typeof, "10" and 10 look identical in the console.
// WITH typeof, the mismatch is instantly obvious.
// the fix: coerce with Number(), parseFloat(), or unary +
const total = Number(inputA.value) + Number(inputB.value);
console.log("total:", total, "typeof:", typeof total);
// "total: 15 typeof: number" — correct now.</code></pre>
  `,

  /* --- Chunk 2: The Click --- */

  /* 2.0 Debugging clue */
  'debug-4-5-2-0': `
    <p>When something isn't matching, isn't calling, isn't calculating, log the <code>typeof</code> of both sides:</p>
<pre class="language-javascript"><code class="language-javascript">// "why is x === y false when they look the same?"
console.log("x:", x, typeof x);
console.log("y:", y, typeof y);
// if the types differ, that's the bug.

// "why is my sum coming out weird?"
console.log("a:", a, typeof a);
console.log("b:", b, typeof b);
// one of them is probably a string. + on strings concatenates.

// "why is 'x is not a function' being thrown?"
console.log(typeof x);
// if it says "undefined" or "object", x isn't callable.

// "why does this look like an object but throw when I access properties?"
console.log(typeof x, x);
// if typeof is "object" but the value is null, that's the bug (null is "object" per the quirk).

// "why does JSON.parse blow up?"
console.log(typeof jsonString);
// if it's not "string", JSON.parse throws a cryptic error.</code></pre>
    <p>Almost every "unexpected value" bug can be diagnosed with two <code>typeof</code> logs. That's the debugging clue: when in doubt, log the type alongside the value.</p>
  `,

  /* 2.1 The part that makes it click */
  'debug-4-5-2-1': `
    <p>The aha is realizing that JavaScript's loose typing is why so many bugs are silent. In a strictly-typed language, passing a string where a number is expected throws immediately — you find the bug the moment it happens. In JavaScript, the wrong type just <em>works</em> in surprising ways: strings concatenate with <code>+</code>, objects convert to <code>"[object Object]"</code>, <code>undefined</code> quietly becomes <code>NaN</code> in math. Nothing crashes; the output is just wrong:</p>
<pre class="language-javascript"><code class="language-javascript">"5" + 1;               // "51", not 6 — string concatenation wins
undefined + 1;         // NaN — no error, just wrong
null.name;             // TypeError — the ONE case it does crash
[] + [];               // "" — arrays coerce to empty strings
{ } + { };             // "[object Object][object Object]" or NaN, depending on context</code></pre>
    <p>Once that clicks, <code>typeof</code> becomes the natural response to any "why is this wrong" moment. You stop assuming and start checking. The check takes 2 seconds and eliminates entire categories of mystery bugs.</p>
  `,

  /* 2.2 Common confusions */
  'debug-4-5-2-2': `
    <p><strong>"Why does <code>typeof null</code> return <code>"object"</code>?"</strong> It's a bug in JavaScript's original implementation from 1995 that was never fixed for backward compatibility. Millions of lines of code implicitly rely on it, so it stays. Use <code>=== null</code> to check for null specifically.</p>

    <p><strong>"Why does <code>typeof []</code> return <code>"object"</code>?"</strong> Because arrays ARE objects in JavaScript — a special kind, but objects. <code>typeof</code> only distinguishes the top-level type, not subtypes. Use <code>Array.isArray()</code> when you specifically need "is this an array?"</p>

    <p><strong>"Why does <code>typeof NaN</code> return <code>"number"</code>?"</strong> Because <code>NaN</code> is technically a numeric value — a special one that means "invalid number result." The type is still <code>"number"</code>; you just have to check for NaN specifically with <code>Number.isNaN()</code>.</p>

    <p><strong>"typeof and instanceof — what's the difference?"</strong> <code>typeof</code> works on primitives and returns a fixed string. <code>instanceof</code> works on objects and checks whether they were made from a specific constructor. Different tools for different questions:</p>
<pre class="language-javascript"><code class="language-javascript">typeof "hi";               // "string"
typeof new String("hi");   // "object" — String OBJECT, not primitive

new Date() instanceof Date;    // true
typeof new Date();             // "object" — doesn't tell you it's a Date</code></pre>

    <p><strong>"Is <code>typeof</code> a function?"</strong> No — it's an operator. That's why <code>typeof x</code> works without parentheses. You can add them for clarity (<code>typeof(x)</code>), but they're grouping the operand, not a function call.</p>

    <p><strong>"Why doesn't <code>typeof undeclaredVar</code> throw a ReferenceError?"</strong> It's a special safety allowance in the language spec. Normally, reading an undeclared variable throws — but <code>typeof</code> is designed for exactly the "is this defined?" check, so it's exempt. That's why <code>typeof MY_FLAG !== "undefined"</code> is a safe existence check.</p>

    <p><strong>"Should I use <code>typeof x === "undefined"</code> or <code>x === undefined</code>?"</strong> Prefer <code>x === undefined</code> in modern code — it's clearer. Use <code>typeof</code> only when <code>x</code> might not be declared at all (like feature-flag or environment-detection code).</p>
  `,

  /* 2.3 Common mistakes */
  'debug-4-5-2-3': `
<pre class="language-javascript"><code class="language-javascript">// Mistake 1: comparing typeof result to the wrong string
if (typeof x === "String") { }    // ✗ never matches — case matters
if (typeof x === "string") { }    // ✓

// Mistake 2: not quoting the type string
if (typeof x === string) { }      // ✗ ReferenceError: string is not defined
if (typeof x === "string") { }    // ✓

// Mistake 3: using typeof to detect null
if (typeof value === "object") {
  // value could be null here — typeof null is "object"
  value.name;                     // ✗ TypeError: Cannot read properties of null
}
// fix: check for null explicitly first
if (value !== null &amp;&amp; typeof value === "object") {
  value.name;                     // ✓
}

// Mistake 4: using typeof to detect arrays
if (typeof x === "object") {
  x.forEach(fn);                  // ✗ crashes if x is a plain object, not an array
}
// fix: Array.isArray
if (Array.isArray(x)) {
  x.forEach(fn);
}

// Mistake 5: using typeof to detect NaN
if (typeof x === "number" &amp;&amp; isNaN(x)) { }   // works but weird
// fix: use Number.isNaN directly
if (Number.isNaN(x)) { }

// Mistake 6: expecting typeof to distinguish int vs float
typeof 42;                        // "number"
typeof 42.5;                      // "number"
// they're the same type. use Number.isInteger() if you need to distinguish.

// Mistake 7: forgetting that typeof always returns a string
const t = typeof value;
if (t === undefined) { }          // ✗ t is the STRING "undefined", not the value undefined
if (t === "undefined") { }        // ✓

// Mistake 8: putting typeof inside an operator chain wrong
if (typeof x + y === "number") { }
// evaluates as (typeof x) + y first — the string "&lt;type&gt;undefined" or "&lt;type&gt;5"
// then compares that mess to "number" — always false.
// fix: parenthesize
if (typeof (x + y) === "number") { }

// Mistake 9: expecting typeof to catch classes
class Foo {}
typeof new Foo();                 // "object" — no info about which class
typeof Foo;                       // "function" — because classes are functions
// fix: use instanceof for class checks
new Foo() instanceof Foo;         // true

// Mistake 10: assuming typeof will save you from every type bug
function double(n) {
  if (typeof n !== "number") return;   // guards against non-numbers
  return n * 2;
}
double(NaN);                      // returns NaN — typeof was "number" but NaN is bad
// fix: also check for NaN
function double(n) {
  if (typeof n !== "number" || Number.isNaN(n)) return;
  return n * 2;
}</code></pre>
  `,

  /* --- Chunk 3: In Practice --- */

  /* 3.0 Tiny examples */
  'debug-4-5-3-0': `
<pre class="language-javascript"><code class="language-javascript">// Primitives
typeof "hello";          // "string"
typeof 42;               // "number"
typeof true;             // "boolean"
typeof undefined;        // "undefined"
typeof null;             // "object"  ← quirk
typeof Symbol();         // "symbol"
typeof 10n;              // "bigint"

// Reference types
typeof {};               // "object"
typeof [];               // "object"
typeof function() {};    // "function"
typeof (() =&gt; {});       // "function"
typeof class Foo {};     // "function"

// Special numeric values
typeof NaN;              // "number"
typeof Infinity;         // "number"

// The undeclared safety
typeof undeclaredThing;  // "undefined" — no ReferenceError

// Logging alongside the value
console.log("x:", x, "type:", typeof x);

// Common type guards
if (typeof cb === "function") cb();
if (typeof s === "string") s.trim();
if (typeof n === "number") n.toFixed(2);
if (typeof obj === "object" &amp;&amp; obj !== null) obj.name;

// Detecting whether an environment variable exists
if (typeof window !== "undefined") { /* browser code */ }
if (typeof process !== "undefined") { /* Node code */ }

// Debugging a comparison
console.log(a === b, typeof a, typeof b);

// Debugging math weirdness
console.log("result:", x + y, "types:", typeof x, typeof y);

// Runtime type check at a function boundary
function greet(name) {
  if (typeof name !== "string") throw new TypeError("name must be a string");
  return "Hello, " + name;
}

// Auditing an array of mixed values
values.forEach(v =&gt; console.log(v, "→", typeof v));

// Table view of types
console.table(items.map(i =&gt; ({ name: i.name, priceType: typeof i.price })));</code></pre>
  `,

  /* 3.1 Real website uses */
  'debug-4-5-3-1': `
    <p><strong>Example: finding the "string-that-looks-like-a-number" bug</strong></p>
<pre class="language-javascript"><code class="language-javascript">// user complaint: "the total is being concatenated instead of summed"
const priceA = document.querySelector("#a").value;
const priceB = document.querySelector("#b").value;
console.log("A:", priceA, typeof priceA);   // A: 10 string
console.log("B:", priceB, typeof priceB);   // B: 5 string
console.log("A + B:", priceA + priceB);     // "105" — concatenation, not sum

// typeof revealed the strings. fix: coerce.
const total = Number(priceA) + Number(priceB);
console.log("total:", total, typeof total); // total: 15 number</code></pre>

    <p><strong>Example: guarding a callback that might not exist</strong></p>
<pre class="language-javascript"><code class="language-javascript">function fetchData(url, onSuccess, onError) {
  fetch(url)
    .then(res =&gt; res.json())
    .then(data =&gt; {
      if (typeof onSuccess === "function") onSuccess(data);
    })
    .catch(err =&gt; {
      if (typeof onError === "function") onError(err);
    });
}
// caller can omit either callback safely.
// without the typeof check, calling undefined() throws "onSuccess is not a function".</code></pre>

    <p><strong>Example: environment detection for cross-platform code</strong></p>
<pre class="language-javascript"><code class="language-javascript">// Same code needs to run in the browser AND in Node.js during SSR.

function getGlobalObject() {
  if (typeof globalThis !== "undefined") return globalThis;
  if (typeof window !== "undefined") return window;
  if (typeof global !== "undefined") return global;
  throw new Error("no global object found");
}
// typeof safely checks each candidate without crashing on the ones that don't exist.
// direct reference (window.X) would throw ReferenceError in Node.</code></pre>

    <p><strong>Example: debugging why an equality check keeps failing</strong></p>
<pre class="language-javascript"><code class="language-javascript">const stored = localStorage.getItem("count");   // always a string, or null
const current = 5;

if (stored === current) { /* never true */ }

console.log(stored, typeof stored);     // "5" string
console.log(current, typeof current);   // 5 number
// typeof made the mismatch obvious.

// fix: coerce
if (Number(stored) === current) { /* correct */ }</code></pre>

    <p><strong>Example: validating an API response's shape</strong></p>
<pre class="language-javascript"><code class="language-javascript">function normalizeUser(raw) {
  if (typeof raw !== "object" || raw === null) {
    console.error("normalizeUser: expected object, got", typeof raw, raw);
    return null;
  }
  return {
    id:    typeof raw.id === "number" ? raw.id : Number(raw.id),
    name:  typeof raw.name === "string" ? raw.name : String(raw.name || ""),
    admin: typeof raw.admin === "boolean" ? raw.admin : Boolean(raw.admin),
  };
}
// each field is coerced only if it doesn't match the expected type.
// prevents subtle bugs from data that's mostly-but-not-quite the right shape.</code></pre>

    <p><strong>Example: an auditing table of a data structure</strong></p>
<pre class="language-javascript"><code class="language-javascript">// You want to see all the types in an object at a glance
console.table(
  Object.entries(user).map(([key, val]) =&gt; ({
    key,
    value: val,
    type: typeof val,
    isArray: Array.isArray(val),
    isNull: val === null,
  }))
);
// gives you a grid showing every field, its value, and its true type.
// perfect for figuring out "which field is the wrong type?"</code></pre>
  `,

  /* 3.2 Connects to */
  'debug-4-5-3-2': `
    <ul>
      <li><strong><code>Array.isArray()</code></strong> → distinguishes arrays from other objects (typeof can't)</li>
      <li><strong><code>Number.isNaN()</code></strong> → detects the NaN value specifically (typeof NaN is "number")</li>
      <li><strong><code>Number.isInteger()</code></strong> → distinguishes int from float (typeof can't)</li>
      <li><strong><code>instanceof</code></strong> → checks class/constructor for objects (typeof only returns "object")</li>
      <li><strong><code>=== null</code></strong> → the right way to check for null (typeof null is "object")</li>
      <li><strong><code>console.log()</code></strong> → typeof is almost always logged alongside a value</li>
      <li><strong><code>console.table()</code></strong> → useful for auditing types across many rows</li>
      <li><strong>Type coercion</strong> → understanding types is the first step to understanding coercion</li>
      <li><strong><code>===</code> vs <code>==</code></strong> → strict equality checks type too; typeof helps explain results</li>
      <li><strong>Truthy/falsy</strong> → different types have different truthiness rules</li>
      <li><strong>Debugging variables</strong> → typeof is the primary tool for variable-type bugs</li>
    </ul>
  `,

  /* 3.3 See also */
  'debug-4-5-3-3': `
    <ul>
      <li><code>Array.isArray()</code></li>
      <li><code>Number.isNaN()</code></li>
      <li><code>Number.isInteger()</code></li>
      <li><code>instanceof</code></li>
      <li><code>=== null</code></li>
      <li><code>console.log()</code></li>
      <li><code>console.table()</code></li>
      <li>Type coercion</li>
      <li>Strict vs loose equality</li>
      <li>Debugging variables</li>
      <li>Debugging null / undefined</li>
    </ul>
  `,

  /* ========================================================= 
   Sub-lesson: 7.5.7 Console Tools → Array.isArray()
 =======================================================*/

  /* --- Chunk 0: What & How --- */

  /* 0.0 What it is */
  'debug-4-6-0-0': `
    <p><strong>Array.isArray()</strong> is a built-in method that answers exactly one question: "is this value an array?" You pass in any value, and it returns <code>true</code> if the value is a real JavaScript array, or <code>false</code> for everything else. That's the whole tool.</p>
    <p>It exists because <code>typeof</code> can't answer that question. <code>typeof []</code> returns <code>"object"</code> — the same as <code>typeof {}</code> or <code>typeof null</code>. You can't tell an array from a plain object from a null value using <code>typeof</code> alone. <code>Array.isArray()</code> fills that gap and gives you a reliable yes/no on arrays specifically.</p>
  `,

  /* 0.1 Syntax */
  'debug-4-6-0-1': `
<pre class="language-javascript"><code class="language-javascript">// Basic form — pass any value, get true or false
Array.isArray([1, 2, 3]);        // true
Array.isArray("hello");          // false
Array.isArray({ length: 3 });    // false — object with a length isn't an array
Array.isArray(null);             // false
Array.isArray(undefined);        // false

// Common guard pattern
if (Array.isArray(items)) {
  items.forEach(process);
}

// Common debug pattern — log alongside the value
console.log("items:", items, "isArray:", Array.isArray(items));

// Common validation pattern
function processList(list) {
  if (!Array.isArray(list)) {
    throw new TypeError("expected an array, got " + typeof list);
  }
  // ... safe to use array methods
}</code></pre>

    <p>Shape: <code>Array.isArray(</code> anything <code>)</code>. Always returns a boolean.</p>
  `,

  /* 0.2 Anatomy / Breakdown */
  'debug-4-6-0-2': `
<pre class="language-javascript"><code class="language-javascript">Array.isArray(value);
// │    │       │
// │    │       └── the value being tested — anything at all
// │    └── the method name — isArray, camelCase
// └── the Array global — the built-in Array constructor

// under the hood:
// 1. JS looks up Array.isArray (a static method on the Array constructor).
// 2. it inspects the argument's internal type marker.
// 3. if the marker says "Array exotic object," it returns true.
// 4. everything else returns false.
//
// this is a static method on Array, NOT a method on array instances.
// you always call it as Array.isArray(x), never as x.isArray().

// what counts as "true":
Array.isArray([]);                    // true — empty array
Array.isArray([1, 2, 3]);             // true — regular array
Array.isArray(new Array(5));          // true — constructor-created array
Array.isArray(Array.from("abc"));     // true — Array.from returns arrays
Array.isArray([].slice());            // true — .slice returns an array

// what looks like an array but isn't:
Array.isArray("hello");               // false — string, has length and indices
Array.isArray({ 0: "a", length: 1 }); // false — array-like object, but not an array
Array.isArray(arguments);             // false — the arguments object is array-like
Array.isArray(document.querySelectorAll("div")); // false — NodeList is NOT an array
Array.isArray(new Set([1, 2, 3]));    // false — Set is iterable but not an array</code></pre>
  `,

  /* 0.3 Syntax Details That Matter */
  'debug-4-6-0-3': `
    <p><strong>It's a static method on <code>Array</code>, not on array instances.</strong> You call it as <code>Array.isArray(x)</code>, never as <code>x.isArray()</code>:</p>
<pre class="language-javascript"><code class="language-javascript">Array.isArray([1, 2, 3]);   // ✓
[1, 2, 3].isArray();        // ✗ TypeError: [...].isArray is not a function

// the reason: if isArray were an instance method, you couldn't safely call it on
// non-arrays (arr.isArray() would crash if arr wasn't actually an array).
// making it static means Array.isArray(anything) is always safe.</code></pre>

    <p><strong>It's stricter than a "looks like an array" check.</strong> Many things in JavaScript are array-like — they have a <code>length</code> property and numeric indices — but aren't actual arrays. <code>Array.isArray</code> returns <code>false</code> for all of them:</p>
<pre class="language-javascript"><code class="language-javascript">// array-like but NOT arrays:
Array.isArray("hello");                          // false — strings have .length and indices
Array.isArray({ length: 3, 0: "a" });            // false — object with numeric keys
Array.isArray(arguments);                         // false — arguments object
Array.isArray(document.querySelectorAll("div")); // false — NodeList
Array.isArray(document.forms);                    // false — HTMLCollection

// convert them if you want to use array methods:
const realArray = Array.from(nodeList);
Array.isArray(realArray);                         // true</code></pre>

    <p><strong>Iterables aren't arrays either.</strong> <code>Set</code>, <code>Map</code>, and generators are iterable (you can use <code>for...of</code> on them), but they're not arrays. <code>Array.isArray</code> returns <code>false</code>:</p>
<pre class="language-javascript"><code class="language-javascript">Array.isArray(new Set([1, 2, 3]));    // false
Array.isArray(new Map());              // false
Array.isArray("abc");                  // false — strings are iterable but not arrays

// convert with Array.from or spread:
Array.isArray([...new Set([1, 2, 3])]);   // true</code></pre>

    <p><strong>Works safely on <code>null</code> and <code>undefined</code>.</strong> Unlike calling a method on those values (which throws), <code>Array.isArray(null)</code> just returns <code>false</code>. This makes it a safe guard even when you don't know if the value exists:</p>
<pre class="language-javascript"><code class="language-javascript">Array.isArray(null);        // false — no error
Array.isArray(undefined);   // false — no error

// safe pattern:
if (Array.isArray(data?.items)) {
  data.items.forEach(process);   // guaranteed safe here
}</code></pre>

    <p><strong>It works across "realms" (iframes, worker contexts).</strong> An array created in a different iframe or context is still recognized as an array. This is a subtle-but-important reason to prefer <code>Array.isArray</code> over the older <code>instanceof Array</code> check:</p>
<pre class="language-javascript"><code class="language-javascript">// in an iframe, arrays are technically different from parent-window arrays.
const iframeArray = iframe.contentWindow.someArray;

iframeArray instanceof Array;    // false — different realm
Array.isArray(iframeArray);      // true — realm-safe check</code></pre>

    <p><strong>Case matters.</strong> Exactly <code>Array.isArray</code> — capital <code>A</code> in <code>Array</code>, lowercase <code>i</code>, capital <code>A</code> again. Anything else is a runtime error:</p>
<pre class="language-javascript"><code class="language-javascript">Array.isArray(x);     // ✓
array.isArray(x);     // ✗ ReferenceError: array is not defined
Array.IsArray(x);     // ✗ TypeError: Array.IsArray is not a function
Array.isarray(x);     // ✗ TypeError: Array.isarray is not a function</code></pre>

    <p><strong>The return value is always exactly <code>true</code> or <code>false</code>.</strong> Not truthy or falsy — the real boolean values. Safe to use in strict comparisons:</p>
<pre class="language-javascript"><code class="language-javascript">Array.isArray([]) === true;          // true
Array.isArray("hello") === false;    // true</code></pre>
  `,

  /* --- Chunk 1: Why & When --- */

  /* 1.0 What problem it solves */
  'debug-4-6-1-0': `
    <p>Detecting arrays in JavaScript is harder than it looks. <code>typeof [] === "object"</code> — same as a plain object, same as <code>null</code>. If you write <code>if (typeof x === "object") x.forEach(...)</code>, your code crashes when <code>x</code> is a plain object or <code>null</code>. You need a way to tell arrays apart, and <code>typeof</code> can't do it.</p>
    <p><code>Array.isArray()</code> solves that. It's the definitive answer to "is this specifically an array?" It handles all the edge cases correctly — array-like objects, NodeLists, iterables, arrays from other realms — and returns a clean boolean. Any code that needs to call array methods (<code>.forEach</code>, <code>.map</code>, <code>.filter</code>, etc.) can guard with <code>Array.isArray</code> and be safe.</p>
  `,

  /* 1.1 Why use it */
  'debug-4-6-1-1': `
    <p>Because "assume it's an array" is a common source of runtime crashes. APIs sometimes return <code>{ items: [...] }</code>, sometimes <code>{ items: null }</code>, sometimes <code>{ items: { error: "..." } }</code>. Calling <code>.forEach</code> on any non-array throws. One <code>Array.isArray</code> check up front turns "crashes on bad data" into "gracefully handles bad data."</p>
    <p>It's also the correct tool for the job. Alternatives — <code>instanceof Array</code>, checking for a <code>length</code> property, checking for a <code>.push</code> method — all have edge cases where they get the wrong answer. <code>Array.isArray</code> is the one built-in that's designed for this specific question and handles every case correctly.</p>
  `,

  /* 1.2 Where you use it */
  'debug-4-6-1-2': `
<pre class="language-javascript"><code class="language-javascript">// Guarding array methods against non-array input
if (Array.isArray(items)) {
  items.forEach(process);
}

// Validating an API response field
const data = await res.json();
if (!Array.isArray(data.users)) {
  console.error("expected data.users to be an array, got:", data.users);
  return;
}

// Debugging why an array method is throwing
console.log(items, "isArray:", Array.isArray(items));

// Distinguishing arrays from plain objects
if (Array.isArray(value)) {
  handleList(value);
} else if (typeof value === "object" &amp;&amp; value !== null) {
  handleObject(value);
}

// Polymorphic function that accepts either one item or many
function addItems(input) {
  const items = Array.isArray(input) ? input : [input];
  items.forEach(addOne);
}

// Recursive tree walking — differentiating array nodes from leaf values
function walk(node) {
  if (Array.isArray(node)) {
    node.forEach(walk);
  } else if (typeof node === "object" &amp;&amp; node !== null) {
    Object.values(node).forEach(walk);
  } else {
    processLeaf(node);
  }
}

// Data normalization — coerce array-like into a real array
function toArray(value) {
  if (Array.isArray(value)) return value;
  if (value == null) return [];
  return [value];
}

// Combined with typeof for full type auditing
console.table(items.map(i =&gt; ({
  value: i,
  type: typeof i,
  isArray: Array.isArray(i),
  isNull: i === null,
})));

// Runtime type check before calling array methods on unknown data
function sumAll(input) {
  if (!Array.isArray(input)) {
    throw new TypeError("sumAll expects an array");
  }
  return input.reduce((a, b) =&gt; a + b, 0);
}

// Guarding against arguments object confusion
function collect(...args) {
  // args is a real array (rest params), but if this were a regular function
  // and we used "arguments," we'd need Array.from(arguments) to be safe.
}</code></pre>

    <p>General rule: whenever code assumes it's dealing with an array — before calling array methods, before iterating — a <code>Array.isArray</code> check is the safe guard. Especially important for data from APIs, user input, or third-party libraries.</p>
  `,

  /* 1.3 Plain English explanation */
  'debug-4-6-1-3': `
    <p>Imagine you're sorting through a stack of packages and only want to pull out the shoeboxes. A shoebox and a shoebox-shaped candle box look the same from a distance, and <code>typeof</code> just tells you "it's a box." That's not enough — you need to know specifically "is this a shoebox?"</p>
    <p><code>Array.isArray</code> is you flipping the package over and checking for the shoebox brand stamp. Either it's stamped (<code>true</code>) or it isn't (<code>false</code>). No ambiguity, no false positives from lookalikes. Whenever your code is about to treat something as a shoebox (open the lid, put shoes in it), you check the stamp first. If the stamp isn't there, you don't open it — because whatever's inside might not survive the operation.</p>
  `,

  /* 1.4 Mental model */
  'debug-4-6-1-4': `
    <p>Think of JavaScript's type system as a big warehouse of containers, and arrays as one specific type of container — a labeled crate that always comes with a printed "ARRAY" stamp on the bottom. Plain objects also live in this warehouse, but they don't have that stamp. Neither do strings, NodeLists, arguments objects, or Sets — they might look like arrays from the outside (numbered slots, a length), but flip them over and the stamp isn't there.</p>
    <p><code>Array.isArray</code> is the stamp-checker. It's not fooled by shape or appearance. It reads the internal label directly. When your code says "I need a real array here — with real array methods that work correctly," the stamp-checker is what makes sure you have one before you try to use it.</p>
  `,

  /* 1.5 Step-by-step walkthrough */
  'debug-4-6-1-5': `
<pre class="language-javascript"><code class="language-javascript">// Scenario: a function fails intermittently. Sometimes the API returns
// { items: [...] }, sometimes { items: null }, sometimes { items: {} }.

async function renderList() {
  const res = await fetch("/api/items");
  const data = await res.json();
  
  console.log("data.items:", data.items, "isArray:", Array.isArray(data.items));
  
  if (!Array.isArray(data.items)) {
    console.warn("items is not an array, treating as empty");
    return renderEmptyState();
  }
  
  data.items.forEach(renderItem);
}

// what happens on a "good" call (items is an array):
// 1. fetch returns data.
// 2. data.items is [obj, obj, obj].
// 3. console.log prints: data.items: [Object, Object, Object] isArray: true
// 4. Array.isArray returns true.
// 5. the "if (!Array.isArray)" check is false → skipped.
// 6. data.items.forEach runs successfully.

// what happens on a "bad" call (items is null):
// 1. fetch returns data.
// 2. data.items is null.
// 3. console.log prints: data.items: null isArray: false
// 4. Array.isArray returns false.
// 5. the "if (!Array.isArray)" check is true → block runs.
// 6. console.warn prints the message.
// 7. renderEmptyState() runs.
// 8. renderList returns without ever calling .forEach on null.

// WITHOUT the Array.isArray check:
// step 5-6 would be: data.items.forEach(...)
// null.forEach → TypeError: Cannot read properties of null (reading 'forEach')
// the app crashes visibly, users see a broken UI, and the actual cause
// (API returned unexpected data) is buried under a confusing stack trace.

// WITH the check:
// the same input produces a graceful fallback and a clear log message.
// no crash, no confusion, no users staring at a blank screen.</code></pre>
  `,

  /* --- Chunk 2: The Click --- */

  /* 2.0 Debugging clue */
  'debug-4-6-2-0': `
    <p>If <code>.forEach is not a function</code>, <code>.map is not a function</code>, or similar errors appear, the value probably isn't an array. Confirm with <code>Array.isArray</code>:</p>
<pre class="language-javascript"><code class="language-javascript">// error: "TypeError: items.forEach is not a function"
// step 1: log what items actually is
console.log("items:", items);
console.log("typeof:", typeof items);
console.log("isArray:", Array.isArray(items));

// possible outputs:
// isArray: false, typeof: object → probably a plain object or null
// isArray: false, typeof: string → the "value" is a string (maybe wasn't parsed as JSON)
// isArray: false, typeof: undefined → the field is missing or misspelled
// isArray: true → the error is coming from somewhere else, not this array

// each answer points to a different bug source.</code></pre>

    <p>Another common clue: when a NodeList doesn't work with array methods, <code>Array.isArray</code> confirms why:</p>
<pre class="language-javascript"><code class="language-javascript">const nodes = document.querySelectorAll(".item");
console.log(Array.isArray(nodes));   // false — it's a NodeList, not an array

// NodeLists have .forEach in modern browsers but NOT .map/.filter/.reduce.
// convert with Array.from or spread to get real arrays.
const asArray = Array.from(nodes);
console.log(Array.isArray(asArray)); // true</code></pre>
  `,

  /* 2.1 The part that makes it click */
  'debug-4-6-2-1': `
    <p>The aha is realizing that JavaScript has many "array-like" things — collections with numeric indices and a length — that are NOT actual arrays. Strings, NodeLists, HTMLCollections, the arguments object, jQuery objects, objects with fake length properties. All look like arrays. None of them ARE arrays. And most array methods only work on real arrays:</p>
<pre class="language-javascript"><code class="language-javascript">// this looks like it should work:
const nodes = document.querySelectorAll("div");
const arr = nodes.map(n =&gt; n.textContent);
// TypeError: nodes.map is not a function
// because NodeList has .forEach but not .map/.filter/.reduce (until recently, spotty).

// Array.isArray tells you why:
Array.isArray(nodes);   // false — that's the whole story.

// convert to a real array first:
const arr = Array.from(nodes).map(n =&gt; n.textContent);
// or
const arr = [...nodes].map(n =&gt; n.textContent);</code></pre>
    <p>Once that clicks, you stop assuming "it has indices and length, so it must be an array" and start checking. That habit prevents a huge percentage of "why doesn't this method work" bugs.</p>
  `,

  /* 2.2 Common confusions */
  'debug-4-6-2-2': `
    <p><strong>"Why not just use <code>instanceof Array</code>?"</strong> It usually works, but it fails across "realms" — arrays created in a different iframe or worker context are not <code>instanceof Array</code> of your window, even though they behave identically. <code>Array.isArray</code> handles cross-realm arrays correctly and is the recommended check.</p>

    <p><strong>"Why isn't a NodeList an array? It has length and forEach."</strong> Because NodeList is a separate built-in type designed to represent a live collection of DOM nodes. It shares some methods with arrays but isn't in the array prototype chain. Use <code>Array.from(nodeList)</code> or <code>[...nodeList]</code> to convert.</p>

    <p><strong>"Is an empty array still an array?"</strong> Yes. <code>Array.isArray([])</code> returns <code>true</code>. Emptiness has nothing to do with type — an empty array is still fully an array, with all array methods available.</p>

    <p><strong>"What about sparse arrays with 'missing' indexes?"</strong> Still arrays. <code>Array.isArray([1, , 3])</code> is <code>true</code>. The gaps don't change the type.</p>

    <p><strong>"Does Array.isArray work on typed arrays like Uint8Array?"</strong> No. Typed arrays are their own thing — <code>Array.isArray(new Uint8Array())</code> returns <code>false</code>. If you need to check for typed arrays specifically, use <code>ArrayBuffer.isView(x)</code> or <code>instanceof</code>.</p>

    <p><strong>"Can I detect array-like objects with Array.isArray?"</strong> No — that's the whole point. If you specifically need "does it look like an array?" (has length, has numeric indices), you'd write your own check. <code>Array.isArray</code> answers "is this an actual JavaScript array specifically?"</p>

    <p><strong>"Why does Array.isArray(null) return false instead of throwing?"</strong> Because it's designed as a safe check. Any value, including <code>null</code> and <code>undefined</code>, can be passed without crashing. That's a feature — you don't have to guard the check itself.</p>
  `,

  /* 2.3 Common mistakes */
  'debug-4-6-2-3': `
<pre class="language-javascript"><code class="language-javascript">// Mistake 1: calling isArray as an instance method
[1, 2, 3].isArray();        // ✗ TypeError: [...].isArray is not a function
Array.isArray([1, 2, 3]);   // ✓

// Mistake 2: using typeof to detect arrays
if (typeof x === "array") { }   // ✗ never true — typeof arrays is "object"
if (Array.isArray(x)) { }        // ✓

// Mistake 3: relying on instanceof across realms
someIframeArray instanceof Array;   // ✗ false if the array is from another window/frame
Array.isArray(someIframeArray);      // ✓ true

// Mistake 4: assuming array-like things are arrays
const nodes = document.querySelectorAll("div");
nodes.map(n =&gt; n.textContent);      // ✗ TypeError — NodeList has no .map (in some browsers)
Array.from(nodes).map(...);          // ✓

// Mistake 5: not guarding before array methods on unknown data
const users = data.users;
users.forEach(process);              // ✗ crashes if users is null or undefined
if (Array.isArray(users)) users.forEach(process);   // ✓

// Mistake 6: checking for arrays with truthy checks
if (items &amp;&amp; items.length) { }       // ✗ true for strings, array-likes, objects with length
if (Array.isArray(items) &amp;&amp; items.length) { }   // ✓ only true for non-empty arrays

// Mistake 7: expecting arguments object to be an array
function collect() {
  arguments.map(x =&gt; x * 2);         // ✗ TypeError — arguments has no .map
  Array.from(arguments).map(x =&gt; x * 2);   // ✓
  // better: use rest parameters instead of arguments
}
function collect(...args) {
  args.map(x =&gt; x * 2);              // ✓ args IS a real array
}

// Mistake 8: capitalization or spelling
array.isArray(x);   // ✗ ReferenceError
Array.IsArray(x);   // ✗ TypeError
Array.isarray(x);   // ✗ TypeError
Array.isArray(x);   // ✓

// Mistake 9: forgetting that null needs its own check
if (Array.isArray(x)) { }
// Array.isArray(null) is false — you don't need "if (x !== null &amp;&amp; Array.isArray(x))"
// because if x is null, isArray already returns false.

// Mistake 10: treating a Set or Map as an array
Array.isArray(new Set([1, 2, 3]));   // false
Array.isArray(new Map());            // false
// convert if you need array behavior:
Array.isArray([...new Set([1, 2, 3])]);   // true</code></pre>
  `,

  /* --- Chunk 3: In Practice --- */

  /* 3.0 Tiny examples */
  'debug-4-6-3-0': `
<pre class="language-javascript"><code class="language-javascript">// Basic returns
Array.isArray([]);                       // true
Array.isArray([1, 2, 3]);                // true
Array.isArray(new Array(5));             // true

// Not arrays
Array.isArray("hello");                  // false
Array.isArray(42);                       // false
Array.isArray({});                       // false
Array.isArray(null);                     // false
Array.isArray(undefined);                // false
Array.isArray(new Set([1, 2, 3]));       // false
Array.isArray(document.querySelectorAll("div"));  // false
Array.isArray({ 0: "a", length: 1 });    // false

// Guard before array methods
if (Array.isArray(items)) items.forEach(process);

// One-line polymorphic normalizer
const toArray = v =&gt; (Array.isArray(v) ? v : [v]);

// Combined with a null check
if (Array.isArray(data?.users)) {
  data.users.forEach(render);
}

// Auditing types
console.log(items, "isArray:", Array.isArray(items));

// Table audit
console.table(values.map(v =&gt; ({
  value: v,
  type: typeof v,
  isArray: Array.isArray(v),
})));

// Converting a NodeList to a real array
const nodes = document.querySelectorAll(".item");
console.log(Array.isArray(nodes));                    // false
console.log(Array.isArray(Array.from(nodes)));        // true
console.log(Array.isArray([...nodes]));               // true

// Validating a function argument
function process(items) {
  if (!Array.isArray(items)) {
    throw new TypeError("expected array, got " + typeof items);
  }
  return items.map(transform);
}

// Recursive walk
function walk(node) {
  if (Array.isArray(node)) node.forEach(walk);
  else console.log("leaf:", node);
}

// Sanitizing before returning
function getItems(data) {
  return Array.isArray(data?.items) ? data.items : [];
}

// Filtering to only array values in a mixed collection
const arrays = mixed.filter(Array.isArray);</code></pre>
  `,

  /* 3.1 Real website uses */
  'debug-4-6-3-1': `
    <p><strong>Example: gracefully handling an unreliable API response</strong></p>
<pre class="language-javascript"><code class="language-javascript">async function loadProducts() {
  try {
    const res = await fetch("/api/products");
    const data = await res.json();
    
    if (!Array.isArray(data.products)) {
      console.warn("products missing or wrong shape:", data);
      return [];
    }
    
    return data.products;
  } catch (err) {
    console.error("failed to load products:", err);
    return [];
  }
}
// caller can safely do: products.forEach(render)
// even if the API returned { products: null } or { products: { error: "..." } }.</code></pre>

    <p><strong>Example: polymorphic function that accepts single item OR array</strong></p>
<pre class="language-javascript"><code class="language-javascript">function addToCart(itemOrItems) {
  const items = Array.isArray(itemOrItems) ? itemOrItems : [itemOrItems];
  items.forEach(item =&gt; {
    cart.push(item);
    incrementBadge();
  });
}

addToCart({ id: 1, name: "shirt" });                         // works
addToCart([{ id: 1 }, { id: 2 }, { id: 3 }]);                // also works
// one code path, safe for either input shape.</code></pre>

    <p><strong>Example: normalizing NodeList to array for map/filter</strong></p>
<pre class="language-javascript"><code class="language-javascript">const buttons = document.querySelectorAll("button");

// NodeList.map doesn't exist in some browsers → convert first
const labels = Array.from(buttons).map(b =&gt; b.textContent);

// or use spread
const labels2 = [...buttons].map(b =&gt; b.textContent);

console.log(Array.isArray(buttons));      // false — NodeList
console.log(Array.isArray(labels));       // true — real array</code></pre>

    <p><strong>Example: recursive JSON tree walker (arrays vs. objects vs. leaves)</strong></p>
<pre class="language-javascript"><code class="language-javascript">function findAllStrings(node, results = []) {
  if (typeof node === "string") {
    results.push(node);
  } else if (Array.isArray(node)) {
    node.forEach(child =&gt; findAllStrings(child, results));
  } else if (typeof node === "object" &amp;&amp; node !== null) {
    Object.values(node).forEach(child =&gt; findAllStrings(child, results));
  }
  return results;
}

const data = {
  name: "Alice",
  tags: ["admin", "vip"],
  nested: { greeting: "hi", numbers: [1, 2, 3] },
};

findAllStrings(data);   // ["Alice", "admin", "vip", "hi"]
// Array.isArray is critical here — treating an array as an object
// (with Object.values) would also work but be confusingly indirect.</code></pre>

    <p><strong>Example: form field with variable arity (many or one)</strong></p>
<pre class="language-javascript"><code class="language-javascript">const formData = new FormData(form);
const tags = formData.getAll("tag");
// getAll always returns an array — but sometimes just [oneItem]

if (!Array.isArray(tags) || tags.length === 0) {
  showError("Please select at least one tag");
  return;
}

// safely proceed
tags.forEach(saveTag);</code></pre>

    <p><strong>Example: debug audit of unknown data</strong></p>
<pre class="language-javascript"><code class="language-javascript">function inspect(value, label = "value") {
  console.group(label);
  console.log("value:", value);
  console.log("typeof:", typeof value);
  console.log("Array.isArray:", Array.isArray(value));
  console.log("=== null:", value === null);
  console.log("=== undefined:", value === undefined);
  console.groupEnd();
}

inspect(rawApiResponse, "API response");
inspect(rawApiResponse.items, "items");
inspect(rawApiResponse.items?.[0], "first item");
// three quick checks tell you the exact shape of the data you're working with.</code></pre>
  `,

  /* 3.2 Connects to */
  'debug-4-6-3-2': `
    <ul>
      <li><strong><code>typeof</code></strong> → returns "object" for arrays; use isArray to distinguish</li>
      <li><strong><code>instanceof Array</code></strong> → older alternative; fails across iframe realms</li>
      <li><strong><code>Array.from()</code></strong> → converts array-likes and iterables into real arrays</li>
      <li><strong>Spread operator</strong> → <code>[...iterable]</code> also converts to array</li>
      <li><strong><code>ArrayBuffer.isView()</code></strong> → similar tool for detecting typed arrays</li>
      <li><strong>Array methods</strong> → <code>.forEach</code>, <code>.map</code>, <code>.filter</code>, <code>.reduce</code> require an actual array</li>
      <li><strong>NodeList</strong> → common source of "looks like array but isn't" bugs</li>
      <li><strong><code>arguments</code> object</strong> → also array-like, not an array; use rest params instead</li>
      <li><strong><code>Set</code> and <code>Map</code></strong> → iterable but not arrays</li>
      <li><strong>Debugging arrays</strong> → isArray is often the first check when array bugs appear</li>
    </ul>
  `,

  /* 3.3 See also */
  'debug-4-6-3-3': `
    <ul>
      <li><code>typeof</code></li>
      <li><code>instanceof</code></li>
      <li><code>Array.from()</code></li>
      <li><code>Array.of()</code></li>
      <li>Spread operator</li>
      <li>NodeList vs Array</li>
      <li>arguments object</li>
      <li>Iterables (Set, Map)</li>
      <li>Debugging arrays</li>
      <li>Debugging API responses</li>
    </ul>
  `,

  /* ========================================================= 
   Sub-lesson: 7.5.8 Console Tools → debugger
 =======================================================*/

  /* --- Chunk 0: What & How --- */

  /* 0.0 What it is */
  'debug-4-7-0-0': `
    <p><strong>debugger</strong> is a built-in JavaScript keyword that pauses execution at the line where it appears — as long as DevTools is open. When JS hits a <code>debugger;</code> statement, the browser stops your code mid-run and puts you inside DevTools' Sources panel, where every variable in scope is visible and inspectable, and you can step through the next lines one at a time.</p>
    <p>Where <code>console.log</code> is a camera that captures values as they pass, <code>debugger</code> is a pause button that freezes the whole scene. You're not looking at a snapshot printed to the console — you're standing inside the running code, able to look around, evaluate expressions, and walk forward at your own pace. It's the difference between reading a game recap and pausing the live broadcast.</p>
  `,

  /* 0.1 Syntax */
  'debug-4-7-0-1': `
<pre class="language-javascript"><code class="language-javascript">// Basic form — one line, one keyword
debugger;

// Placed anywhere execution would normally go
function calculateTotal(items) {
  debugger;                       // pause here
  let total = 0;
  for (let item of items) {
    total += item.price;
  }
  return total;
}

// Conditional pause — only stop when something's wrong
if (total &lt; 0) {
  debugger;
}

// Inside an event handler — pause on user interaction
btn.addEventListener("click", (event) =&gt; {
  debugger;
  handleClick(event);
});

// Inside a loop — pause on a specific iteration
items.forEach((item, i) =&gt; {
  if (i === 5) debugger;
  process(item);
});</code></pre>

    <p>The whole "syntax" is one word plus a semicolon: <code>debugger;</code>. No arguments, no parentheses. When execution reaches it, the browser stops if DevTools is open. If DevTools isn't open, the line is silently ignored — no error, no side effects.</p>
  `,

  /* 0.2 Anatomy / Breakdown */
  'debug-4-7-0-2': `
<pre class="language-javascript"><code class="language-javascript">debugger;
// │        │
// │        └── semicolon — required per standard JS statement rules (optional in ASI-friendly places)
// └── the keyword — always lowercase, no arguments, no parentheses

// what happens under the hood, when JS reaches this line:
// 1. the JS engine reaches the debugger statement.
// 2. it asks the browser: "is a debugger attached and listening?"
// 3. if YES (DevTools is open):
//    - execution pauses immediately, BEFORE the next line runs.
//    - the browser opens the Sources panel in DevTools.
//    - it highlights the debugger line in the code.
//    - the Scope pane shows every variable in current scope.
//    - the Call Stack pane shows how execution got here.
//    - the Watch pane lets you evaluate expressions.
//    - the step controls (▶ ⤳ ⤵ ⤴) become active.
// 4. if NO (DevTools closed, no debugger listening):
//    - the statement is silently skipped.
//    - execution continues to the next line as if nothing happened.
// 5. when you press "resume" (or ▶ or F8), execution continues normally.

// side-by-side comparison:
// console.log(x)  →  reads x, prints it, keeps running
// debugger        →  freezes the whole world; you can inspect ALL variables at once</code></pre>
  `,

  /* 0.3 Syntax Details That Matter */
  'debug-4-7-0-3': `
    <p><strong>The keyword is exactly <code>debugger</code>, lowercase.</strong> <code>Debugger</code> or <code>DEBUGGER</code> are treated as regular identifiers (variable names), which throws <code>ReferenceError</code> if undeclared:</p>
<pre class="language-javascript"><code class="language-javascript">debugger;       // ✓ pauses (when DevTools is open)
Debugger;       // ✗ ReferenceError: Debugger is not defined
DEBUGGER;       // ✗ ReferenceError: DEBUGGER is not defined</code></pre>

    <p><strong>It's a statement, not a function call. No parentheses, no arguments.</strong> Anything after it becomes a syntax error:</p>
<pre class="language-javascript"><code class="language-javascript">debugger;          // ✓
debugger();        // ✗ SyntaxError: Unexpected token '('
debugger("hi");    // ✗ SyntaxError
debugger x;        // ✗ SyntaxError</code></pre>

    <p><strong>DevTools MUST be open for it to trigger.</strong> If the panel is closed, <code>debugger</code> is completely ignored — like the statement wasn't even there. This is intentional: users shouldn't have their browser freeze on production code because of leftover debugger statements:</p>
<pre class="language-javascript"><code class="language-javascript">debugger;   // DevTools open:   execution pauses, you're in the debugger
debugger;   // DevTools closed: line is skipped, code runs normally
// same code, different behavior depending on whether anyone's watching.</code></pre>

    <p><strong>It pauses BEFORE the line runs.</strong> The next line is not executed until you resume. This lets you inspect state exactly as it was going into the line you're about to run:</p>
<pre class="language-javascript"><code class="language-javascript">let x = 10;
debugger;         // paused here — x is 10
x = 20;           // not yet executed
console.log(x);   // not yet executed
// pressing "step over" moves you forward one line at a time.</code></pre>

    <p><strong>Conditional pauses work naturally.</strong> Wrap <code>debugger</code> in an <code>if</code> to only pause when a specific condition is met — much faster than stepping through 100 loop iterations to reach the one that matters:</p>
<pre class="language-javascript"><code class="language-javascript">for (let i = 0; i &lt; 1000; i++) {
  if (items[i].price &lt; 0) {
    debugger;   // pause only when a negative price shows up
  }
  process(items[i]);
}
// with a plain "debugger;" you'd pause 1000 times.
// with the if wrapper, you pause only on the interesting iteration.</code></pre>

    <p><strong>Not affected by console filters.</strong> Unlike <code>console.log</code> which the console filter can hide, <code>debugger</code> either pauses or doesn't. There's no "filtered out" state. If DevTools is open and the line executes, execution stops.</p>

    <p><strong>Removing debugger statements before shipping is important.</strong> Even though users without DevTools open aren't affected, leftover debugger statements can:</p>
<pre class="language-javascript"><code class="language-javascript">// - trip up any user who happens to have DevTools open (developers, curious users)
// - be picked up by browser extensions that monitor for debug statements
// - occasionally cause automated tools (crawlers, screenshotting tools) to hang
// - signal "unfinished code" to anyone reading the source

// a good habit: only add debugger during active debugging, remove before committing.
// many linters flag debugger statements as errors in production builds.</code></pre>
  `,

  /* --- Chunk 1: Why & When --- */

  /* 1.0 What problem it solves */
  'debug-4-7-1-0': `
    <p><code>console.log</code> is great for one or two values, but breaks down when the bug involves complex state. If you need to know the value of 8 different variables, the current call stack, what the loop counter is, what an event object looks like, and what the DOM state is — all at the same moment — you'd need 20 console.log lines just to capture the picture. And even then, you'd only see the snapshot, not the surrounding state.</p>
    <p><code>debugger</code> solves that by pausing everything. Every variable in every enclosing scope is visible in the Scope pane. The full call stack is right there. You can evaluate any expression you want, mid-pause, without editing the code. When the bug is complicated enough that "log more values" isn't practical, <code>debugger</code> is what gets you the whole picture at once.</p>
  `,

  /* 1.1 Why use it */
  'debug-4-7-1-1': `
    <p>Because it turns debugging from "guess and log" into "look and see." With <code>console.log</code>, you guess which values are wrong, add logs, run the code, read the logs, then guess again. Each cycle takes time. With <code>debugger</code>, you pause once and every value is right there — no guessing what to log because everything is visible.</p>
    <p>It's also the only practical way to debug some situations. Recursive functions where the bug depends on the depth. Event handlers where the state changes rapidly. Async code where you need to see state at a specific await point. Loops where the bug happens on iteration 47. All of these are painful with logs and easy with <code>debugger</code>.</p>
  `,

  /* 1.2 Where you use it */
  'debug-4-7-1-2': `
<pre class="language-javascript"><code class="language-javascript">// At the start of a function you don't understand
function mysteryFunction(a, b, c) {
  debugger;
  // step through, watch how the arguments transform
}

// Right before a line that's throwing
const total = items.reduce((sum, item) =&gt; sum + item.price, 0);
debugger;
document.querySelector(".total").textContent = "$" + total;   // this line throws

// Inside an event handler to see what triggered it
btn.addEventListener("click", (event) =&gt; {
  debugger;
  handleClick(event);
});

// Conditional pause for a specific iteration
items.forEach((item, i) =&gt; {
  if (item.status === "invalid") debugger;
  process(item);
});

// Before and after a state change — see what changed
debugger;
state.count++;
render();
debugger;

// Inside a promise chain
fetch("/api/data")
  .then(res =&gt; {
    debugger;
    return res.json();
  })
  .then(data =&gt; {
    debugger;
    render(data);
  });

// Inside an async function at an await point
async function loadUser(id) {
  const res = await fetch("/api/users/" + id);
  debugger;
  const data = await res.json();
  debugger;
  return data;
}

// Inside a callback that's misbehaving
document.addEventListener("keydown", (e) =&gt; {
  if (e.key === "Enter") {
    debugger;
    submit();
  }
});

// In a recursive function
function walk(node, depth = 0) {
  if (depth &gt; 5) debugger;
  node.children.forEach(child =&gt; walk(child, depth + 1));
}

// When you don't know where the bug is — start at the beginning
function main() {
  debugger;
  // step through the whole thing until something looks wrong
}</code></pre>

    <p>General rule: reach for <code>debugger</code> when a bug involves more than one or two variables, or when the state is changing in ways that are hard to trace with logs alone. For simple "what is this value" checks, <code>console.log</code> is faster. For "how did we get into this state," <code>debugger</code> is the right tool.</p>
  `,

  /* 1.3 Plain English explanation */
  'debug-4-7-1-3': `
    <p>Imagine watching a movie of your code running. <code>console.log</code> is you shouting "pause and read the subtitle at frame 4237" — a quick check, but you can only see one thing at a time. <code>debugger</code> is you hitting the pause button on the remote and getting up to walk around inside the frozen frame. Every character is standing still. You can look under the table, check what's in the drawer, read the letter on the desk. Nothing moves until you press play.</p>
    <p>That's what makes it so useful. The code stops behaving like a stream of events you observe from outside and starts behaving like a paused world you can inspect from inside. When you press play again, it picks up exactly where it left off. Nothing was lost, nothing was changed — you just got to look around for as long as you needed.</p>
  `,

  /* 1.4 Mental model */
  'debug-4-7-1-4': `
    <p>Think of your running program as a fast-moving assembly line. <code>console.log</code> is a security camera pointed at one spot — every time something rolls past, you get a snapshot. Useful, but limited. You can only see what's directly in front of the lens, and you only see it in the exact moment it passed.</p>
    <p><code>debugger</code> is the emergency stop button on the whole assembly line. Press it and everything freezes — every worker, every belt, every partly-assembled part. Now you can walk down the line and inspect anything. You can check what raw materials came in, what tools each worker is holding, what the shift log says, what's in the finished-goods bin. You can even ask "what would happen if I changed this value right now?" and try it, before pressing "resume."</p>
    <p>You wouldn't stop the whole assembly line for a small question — that's what the cameras are for. But when you need the full picture, the stop button is worth more than a dozen cameras.</p>
  `,

  /* 1.5 Step-by-step walkthrough */
  'debug-4-7-1-5': `
<pre class="language-javascript"><code class="language-javascript">function calculateTotal(items) {
  let total = 0;
  for (let item of items) {
    debugger;                      // ← pause here
    total += item.price;
  }
  return total;
}

calculateTotal([
  { name: "shirt", price: 20 },
  { name: "shoes", price: 50 },
]);

// what happens when this code runs, with DevTools open:
// 1. calculateTotal is called with the two-item array.
// 2. total is declared and set to 0.
// 3. the for loop starts with the first item: { name: "shirt", price: 20 }.
// 4. execution reaches the debugger statement — EXECUTION STOPS.
// 5. the browser opens DevTools' Sources panel and highlights the debugger line.
// 6. the Scope pane shows the current scope:
//    - Local:
//        item = { name: "shirt", price: 20 }
//        total = 0
//    - Block:
//        (loop variables)
//    - Closure (if any):
//        ...
//    - Global:
//        ...
// 7. the Call Stack pane shows: calculateTotal → &lt;anonymous&gt;
// 8. you can hover over any variable in the code to see its current value.
// 9. you can type in the Console panel — expressions run in this paused scope:
//    - typing "item.price * 2" evaluates to 40 (in the current frame's scope).
//    - typing "items[1]" shows the second item.
// 10. you can add "total + item.price" to the Watch pane to see what the next line will produce.
// 11. you press F10 (or the "step over" button ⤳).
//    - the next line runs: total += item.price → total becomes 20.
//    - execution pauses again at the debugger line? no — the loop continues to the next iteration.
// 12. the loop reaches iteration 2 (item = shoes). debugger triggers again.
//    - total is now 20, item is the shoes object.
// 13. you press F8 (or "resume" ▶) to run to completion — no more pauses.
// 14. calculateTotal returns 70. execution continues normally.

// what you learned from ONE pause that would take multiple console.logs:
// - the current item's full shape
// - the running total at this iteration
// - the entire call stack
// - the ability to test expressions live
// - the ability to hover any variable to see its value</code></pre>
  `,

  /* --- Chunk 2: The Click --- */

  /* 2.0 Debugging clue */
  'debug-4-7-2-0': `
    <p>If <code>debugger;</code> doesn't seem to be pausing:</p>
<pre class="language-javascript"><code class="language-javascript">// Check 1: is DevTools open?
// Right-click the page → Inspect → open the DevTools panel.
// Then RELOAD or re-trigger the action.
// If DevTools was closed when the line was reached, it did nothing.

// Check 2: did the code path even reach the debugger line?
// Add a console.log just above it to confirm the line runs:
console.log("about to pause");
debugger;
// no "about to pause" log = the line wasn't reached (early return, error, wrong branch).

// Check 3: is it spelled correctly?
debbuger;   // ✗ ReferenceError: debbuger is not defined
debugger;   // ✓

// Check 4: are you looking at the right DevTools instance?
// If your code runs inside an iframe, the DevTools attached to the parent page
// won't catch a debugger inside the iframe. Right-click INSIDE the iframe first
// to open DevTools scoped to that frame.

// Check 5: is "Deactivate breakpoints" toggled on?
// The button in the DevTools Sources panel (looks like a slashed-out circle)
// temporarily disables ALL breakpoints, including debugger statements.
// Click it to toggle back on.

// Check 6: are you in production code where the bundler stripped it?
// Some build tools (Webpack, Rollup with minification, terser) remove
// debugger statements automatically in production builds.
// This only happens in prod builds — dev builds keep them.</code></pre>
    <p>If pausing works but you don't know what to do next: the four main controls are Resume (F8), Step Over (F10), Step Into (F11), and Step Out (Shift+F11). Start with Step Over — it runs the next line and pauses again — until something interesting happens.</p>
  `,

  /* 2.1 The part that makes it click */
  'debug-4-7-2-1': `
    <p>The aha is realizing that <code>debugger</code> gives you access to the paused scope in the Console panel too. Not just the variable inspector — you can TYPE expressions in the console while paused, and they evaluate in the paused function's scope:</p>
<pre class="language-javascript"><code class="language-javascript">function process(item) {
  const price = item.price * 1.08;
  debugger;                        // paused here
  return price;
}

// with execution paused, you can type in the DevTools console:
//   &gt; item              → { name: "shirt", price: 20 }
//   &gt; item.price        → 20
//   &gt; price             → 21.6
//   &gt; item.price * 2    → 40   ← runs as if you were inside the function
//   &gt; price = 999       → 999   ← YES, you can mutate paused state
// the paused scope becomes an interactive REPL.
// you can test theories ("what if this were 999?") without editing code.</code></pre>
    <p>Once that clicks, debugger sessions stop feeling like "I have to plan every log ahead of time" and start feeling like "I can just explore." The paused scope is a living environment you can poke at.</p>
  `,

  /* 2.2 Common confusions */
  'debug-4-7-2-2': `
    <p><strong>"debugger doesn't pause — did I break it?"</strong> Almost always DevTools isn't open. The statement only fires when a debugger is listening. Open DevTools and re-trigger the code path. If it still doesn't pause, check that "Deactivate breakpoints" isn't toggled on.</p>

    <p><strong>"Do users get affected by debugger statements?"</strong> Only if they have DevTools open. For 99% of users, <code>debugger</code> in production code has zero visible effect. But it's still bad practice — anyone who opens DevTools (developers, curious users, browser extensions) will hit the pause. Remove before shipping.</p>

    <p><strong>"Should I use debugger instead of console.log?"</strong> Different tools for different situations. Logs are lighter, faster to add, and easier to leave in during exploration. Debugger pauses everything and shows you the whole state. Use logs when you know what you want to see; use debugger when you don't. Many debugging sessions use both.</p>

    <p><strong>"What's the difference between debugger and breakpoints?"</strong> Behavior-wise, almost nothing. A breakpoint (set by clicking the line number in DevTools) does the same thing as <code>debugger;</code>. The difference is: breakpoints live in DevTools (not your code, and lost when you refresh unless persisted), while <code>debugger;</code> lives in your code (survives refresh, gets checked into source if you're not careful). Use breakpoints for casual exploration; use <code>debugger</code> when you specifically want the pause to be in the code.</p>

    <p><strong>"debugger paused, but I can't see my variables — the Scope pane is empty."</strong> Usually you're paused at a line where the scope hasn't finished being set up (e.g., before a variable's declaration executes). Step forward one line and the variable will appear in the Scope pane.</p>

    <p><strong>"Can I set a debugger statement to only pause when a condition is true?"</strong> Yes — wrap it in an <code>if</code>. This is often more useful than a plain <code>debugger;</code> because it avoids pausing on every irrelevant iteration.</p>

    <p><strong>"Does debugger work in Node.js?"</strong> Yes, but you have to run Node with an inspector flag (<code>node --inspect app.js</code>) and connect a debugger (Chrome's <code>chrome://inspect</code> or an IDE). Without the flag, the statement is a no-op.</p>
  `,

  /* 2.3 Common mistakes */
  'debug-4-7-2-3': `
<pre class="language-javascript"><code class="language-javascript">// Mistake 1: expecting debugger to work without DevTools open
debugger;
// if DevTools is closed, this line does nothing.
// fix: open DevTools BEFORE the code runs, then reload or re-trigger.

// Mistake 2: using debugger like a function
debugger();       // ✗ SyntaxError
debugger("hi");   // ✗ SyntaxError
// fix: it's a statement, not a call
debugger;

// Mistake 3: spelling it wrong
debbuger;         // ✗ ReferenceError
Debugger;         // ✗ ReferenceError
// fix: lowercase, one word, no typos
debugger;

// Mistake 4: leaving debugger statements in production
export function process(x) {
  debugger;   // ✗ any user with DevTools open will freeze here
  return x * 2;
}
// fix: remove before committing/deploying, or use a linter rule
// (eslint's "no-debugger" rule catches these automatically)

// Mistake 5: putting debugger in a place that never runs
if (false) debugger;         // never triggers
const fn = () =&gt; debugger;   // never triggers unless fn() is called
// fix: check the surrounding condition/scope; log around it to confirm the line runs

// Mistake 6: pausing 1000 times in a loop
for (let i = 0; i &lt; 1000; i++) {
  debugger;              // pauses on every iteration — unusable
  process(items[i]);
}
// fix: conditional pause
for (let i = 0; i &lt; 1000; i++) {
  if (i === 500 || items[i].error) debugger;
  process(items[i]);
}

// Mistake 7: forgetting to resume, then panicking
// You're paused. Nothing responds. The page seems frozen.
// It IS frozen — you paused it. Press F8 or the ▶ button in DevTools to resume.
// The page will pick up right where it stopped.

// Mistake 8: expecting debugger to catch async errors that happen later
async function fetchData() {
  debugger;                    // pauses at line 1
  const res = await fetch();   // ... but this rejects LATER, not now
  return res.json();
}
// fix: put debugger AFTER the await, or use "Pause on exceptions" in DevTools
async function fetchData() {
  try {
    const res = await fetch();
    debugger;                  // now this pauses AFTER the await resolves
    return res.json();
  } catch (err) {
    debugger;                  // pauses when the fetch rejects
    throw err;
  }
}

// Mistake 9: assuming debugger will work in a bundled build with minification
// Terser and other minifiers may strip debugger statements from production bundles.
// fix: use debugger only during development, or configure your bundler to keep them.

// Mistake 10: using debugger without knowing the step controls
// You pause, then don't know how to move forward, so you just press Resume and lose context.
// fix: learn F10 (step over — next line), F11 (step into — enter a function call),
// Shift+F11 (step out — run to the end of the current function), F8 (resume everything).</code></pre>
  `,

  /* --- Chunk 3: In Practice --- */

  /* 3.0 Tiny examples */
  'debug-4-7-3-0': `
<pre class="language-javascript"><code class="language-javascript">// The basic form
debugger;

// At the start of a function
function fn() {
  debugger;
  // ...
}

// Right before a suspicious line
debugger;
someOperation();

// Conditional pause
if (value &lt; 0) debugger;

// Inside a loop, on a specific iteration
items.forEach((item, i) =&gt; {
  if (i === 5) debugger;
  process(item);
});

// Inside an event handler
btn.addEventListener("click", (e) =&gt; {
  debugger;
  handleClick(e);
});

// After an await
async function load() {
  const res = await fetch(url);
  debugger;
  return res.json();
}

// Inside a catch block
try {
  save();
} catch (err) {
  debugger;
  console.error(err);
}

// Inside a callback that's misbehaving
setInterval(() =&gt; {
  debugger;
  tick();
}, 1000);

// In a recursive call at a certain depth
function walk(node, depth = 0) {
  if (depth === 3) debugger;
  node.children?.forEach(c =&gt; walk(c, depth + 1));
}

// Before and after a state change
debugger;
state.count++;
debugger;

// When you want to explore a class instance's runtime state
class Widget {
  render() {
    debugger;
    // inspect "this" in the debugger
  }
}</code></pre>
  `,

  /* 3.1 Real website uses */
  'debug-4-7-3-1': `
    <p><strong>Example: finding the exact iteration that breaks a loop</strong></p>
<pre class="language-javascript"><code class="language-javascript">function calculateTotals(orders) {
  let grandTotal = 0;
  for (let order of orders) {
    if (isNaN(order.total)) debugger;   // pause on the bad row
    grandTotal += order.total;
  }
  return grandTotal;
}

// when the loop hits the first order with NaN, execution pauses.
// the Scope pane shows the exact order, its full shape, and grandTotal so far.
// you can hover order.items or evaluate order.discount in the console
// to find what's producing the NaN — all without adding a single log.</code></pre>

    <p><strong>Example: debugging why a click handler fires unexpectedly</strong></p>
<pre class="language-javascript"><code class="language-javascript">closeBtn.addEventListener("click", (event) =&gt; {
  debugger;
  // when you pause here, the Call Stack pane tells you HOW this handler was invoked:
  // - was it a real user click?
  // - did another script call .click() on the button?
  // - did an event bubble from a child?
  // the Scope pane shows the event object — event.target, event.currentTarget, event.isTrusted.
  // (event.isTrusted is false for programmatic clicks — that alone may explain the bug.)
  closeModal();
});</code></pre>

    <p><strong>Example: stepping through a complex data transformation</strong></p>
<pre class="language-javascript"><code class="language-javascript">function normalize(raw) {
  debugger;                                  // ← pause at entry
  const trimmed = raw.trim();
  const words = trimmed.split(/\\s+/);        // press F10 (step over)
  const cleaned = words.filter(w =&gt; w);      // watch each intermediate value
  const joined = cleaned.join(" ");          // in the Scope pane as you go
  return joined.toLowerCase();
}

// stepping line-by-line, you SEE each transformation happen:
// trimmed = "  Hello   World  "  →  "Hello   World"
// words = ["Hello", "World"]
// cleaned = ["Hello", "World"]
// joined = "Hello World"
// return: "hello world"
// no console.logs needed. every intermediate is visible in real time.</code></pre>

    <p><strong>Example: pausing to explore an unfamiliar object</strong></p>
<pre class="language-javascript"><code class="language-javascript">const res = await fetch("/api/data");
debugger;
// with paused execution, type in the DevTools console:
//   &gt; res
//   &gt; res.headers
//   &gt; res.headers.get("content-type")
//   &gt; await res.clone().json()
// you can await inside the paused console — try everything without changing your code.
// once you know the shape, resume and write your real handling logic.</code></pre>

    <p><strong>Example: debugging a race condition in async code</strong></p>
<pre class="language-javascript"><code class="language-javascript">async function saveDraft(draft) {
  debugger;                              // pause 1: entering
  const validated = await validate(draft);
  debugger;                              // pause 2: after validation
  const saved = await postToServer(validated);
  debugger;                              // pause 3: after save
  updateUI(saved);
}

// three pauses show you exactly what draft, validated, and saved look like
// at each await boundary. if the wrong data reached the server,
// you'll see which step produced it — without ever touching a console.log.</code></pre>

    <p><strong>Example: conditional debug in a rare failure path</strong></p>
<pre class="language-javascript"><code class="language-javascript">function chargeCard(order) {
  const attempts = order.chargeAttempts;
  
  // only pause when we're on the last attempt and about to fail permanently
  if (attempts === 3) debugger;
  
  return payments.charge(order);
}
// most attempts pass through without pausing.
// the one problematic case — the third failed attempt — freezes for inspection.
// you can look at the order, the previous attempt results, the whole context.</code></pre>
  `,

  /* 3.2 Connects to */
  'debug-4-7-3-2': `
    <ul>
      <li><strong><code>console.log()</code></strong> → lightweight alternative when you know what value you want to see</li>
      <li><strong><code>console.dir()</code></strong> → similar exploration but in the console, not paused</li>
      <li><strong>DevTools Breakpoints</strong> → same behavior as <code>debugger</code>, but set by clicking the line number</li>
      <li><strong>DevTools Sources panel</strong> → where the paused code lives during a debugger session</li>
      <li><strong>Scope pane</strong> → shows all in-scope variables while paused</li>
      <li><strong>Call Stack pane</strong> → shows how you got to this point</li>
      <li><strong>Watch expressions</strong> → let you monitor specific expressions across steps</li>
      <li><strong>Step controls</strong> — F10 (over), F11 (into), Shift+F11 (out), F8 (resume)</li>
      <li><strong>Conditional breakpoints</strong> → set a condition in DevTools without wrapping in <code>if</code></li>
      <li><strong>Pause on exceptions</strong> → DevTools setting that pauses on every thrown error</li>
      <li><strong>Blackboxing</strong> → tell DevTools to skip over library code when stepping</li>
      <li><strong>Async debugging</strong> → debugger is invaluable for tracing awaits</li>
    </ul>
  `,

  /* 3.3 See also */
  'debug-4-7-3-3': `
    <ul>
      <li><code>console.log()</code></li>
      <li><code>console.dir()</code></li>
      <li>DevTools Breakpoints</li>
      <li>DevTools Sources panel</li>
      <li>Step controls (F10, F11, F8)</li>
      <li>Scope pane</li>
      <li>Call Stack pane</li>
      <li>Watch expressions</li>
      <li>Conditional breakpoints</li>
      <li>Pause on exceptions</li>
      <li>Blackboxing</li>
      <li>Debugging async code</li>
    </ul>
  `,

  /* ========================================================= 
   Sub-lesson: 7.5.9 Console Tools → checking values before the broken line
 =======================================================*/

  /* --- Chunk 0: What & How --- */

  /* 0.0 What it is */
  'debug-4-8-0-0': `
    <p><strong>Checking values before the broken line</strong> is the single most useful debugging technique in JavaScript. It's not a tool — it's a habit: whenever a specific line throws an error or produces the wrong output, you put a <code>console.log</code> on the line directly above it and log every value that line depends on.</p>
    <p>The idea is stupid-simple, but it's the fastest bug-finder there is. The broken line broke because it received values it wasn't expecting — a <code>null</code> instead of an object, a string instead of a number, an empty array instead of a full one. Logging those values just before they get used shows you the mismatch instantly. You go from "why is this line failing?" to "oh, that variable is undefined here" in about 5 seconds.</p>
  `,

  /* 0.1 Syntax */
  'debug-4-8-0-1': `
<pre class="language-javascript"><code class="language-javascript">// The pattern — one log line before the broken line, listing every input it uses.

// Given a broken line like:
document.querySelector(".total").textContent = "$" + total;
// TypeError: Cannot set properties of null (setting 'textContent')

// Add a log directly above:
console.log("total:", total);
console.log("element:", document.querySelector(".total"));
document.querySelector(".total").textContent = "$" + total;

// Or condensed:
console.log("total:", total, "element:", document.querySelector(".total"));
document.querySelector(".total").textContent = "$" + total;

// General shape:
// 1. identify the line that's broken.
// 2. list every variable/expression that line uses.
// 3. log all of them, WITH LABELS, on the line just above.
// 4. run and read the log.
// 5. compare each value to what you expected it to be.
// 6. the mismatch IS the bug.</code></pre>
  `,

  /* 0.2 Anatomy / Breakdown */
  'debug-4-8-0-2': `
<pre class="language-javascript"><code class="language-javascript">// The technique broken into its parts:

// 1. THE BROKEN LINE
//    → the line that throws, or produces obviously wrong output.
//    → this is your anchor. everything happens right above it.

// 2. THE INPUTS
//    → every variable, property, or expression the broken line reads.
//    → if the broken line uses cart.total and user.name, those are your inputs.
//    → for method calls like x.forEach(...), x IS an input.

// 3. THE LOG
//    → console.log with LABELS for each input, printed above the broken line.
//    → typeof included when the type is suspicious.
//    → don't log the whole world — just the inputs to THIS line.

// 4. THE MENTAL COMPARISON
//    → look at each logged value. is it what you expected?
//    → if yes: the bug is inside the operation, not the inputs. move down.
//    → if no: the bug is BEFORE this line. follow the wrong value upstream.

// example:
function checkout(cart, user) {
  console.log("cart:", cart, "user:", user);          // ← THE LOG
  const total = cart.total * (1 + user.taxRate);      // ← THE BROKEN LINE
  showTotal(total);
}
// cart = { items: [...], total: 42 }        expected. ok.
// user = null                                UNEXPECTED. that's the bug source.
// follow user upstream: why is user null here?
// found it — the caller didn't pass user in.</code></pre>
  `,

  /* 0.3 Syntax Details That Matter */
  'debug-4-8-0-3': `
    <p><strong>Log EVERY input to the broken line, not just the one you suspect.</strong> If the broken line uses three variables, log all three. It's tempting to only log the one you think is the problem — but half the time, the bug is in the one you didn't log:</p>
<pre class="language-javascript"><code class="language-javascript">// broken line:
result[i] = items[i].price * discount;

// tempting (but incomplete):
console.log("price:", items[i].price);
result[i] = items[i].price * discount;

// better — log everything the line touches:
console.log("i:", i, "items[i]:", items[i], "discount:", discount);
result[i] = items[i].price * discount;
// now if i is wrong, or items[i] is undefined, or discount is a string, you see it immediately.</code></pre>

    <p><strong>Always label your logs.</strong> Unlabeled logs become impossible to read once there are more than one or two. When you're staring at three lines that say <code>undefined</code>, <code>{items: [...]}</code>, <code>null</code>, you can't tell which is which:</p>
<pre class="language-javascript"><code class="language-javascript">// hard to read:
console.log(cart);
console.log(user);
console.log(total);

// easy to read:
console.log("cart:", cart);
console.log("user:", user);
console.log("total:", total);</code></pre>

    <p><strong>Include the type when the value could be the wrong type.</strong> String-vs-number and object-vs-null mix-ups are common. <code>typeof</code> alongside the value catches both:</p>
<pre class="language-javascript"><code class="language-javascript">// value alone might not reveal the bug:
console.log("count:", count);           // "5" or 5? can't tell.

// with type:
console.log("count:", count, "type:", typeof count);   // "5 type: string" — bug is obvious.</code></pre>

    <p><strong>Log the raw input, not a version you've already transformed.</strong> The point is to see what the broken line actually receives. If you log a stringified or reformatted version, you may hide the very quirk that's causing the bug:</p>
<pre class="language-javascript"><code class="language-javascript">// misleading — you can't tell if data is null or an object:
console.log("data: " + JSON.stringify(data));

// clearer — you see exactly what data is:
console.log("data:", data);
// null shows as "null", an object shows as expandable {...}</code></pre>

    <p><strong>Log MULTIPLE things in one line, comma-separated.</strong> Cleaner than many separate calls:</p>
<pre class="language-javascript"><code class="language-javascript">// three lines of noise:
console.log("i:", i);
console.log("item:", item);
console.log("prev:", prev);

// one clean line:
console.log("i:", i, "item:", item, "prev:", prev);</code></pre>

    <p><strong>Put the log DIRECTLY above the broken line.</strong> Not five lines above, not inside a function called earlier. The values might change between "above" and "here." The log has to capture the state at the exact moment the broken line runs:</p>
<pre class="language-javascript"><code class="language-javascript">// too far away — items might be modified in between:
console.log("items:", items);
items = items.filter(i =&gt; i.active);
items.forEach(save);           // ← the broken line

// directly above — captures the actual state at the failure point:
items = items.filter(i =&gt; i.active);
console.log("items:", items);
items.forEach(save);</code></pre>

    <p><strong>If the broken line is inside a loop, log the loop variables too.</strong> The bug might be "iteration 47 has a bad value" — you need <code>i</code> or the current item logged so you know which iteration failed:</p>
<pre class="language-javascript"><code class="language-javascript">for (let i = 0; i &lt; items.length; i++) {
  console.log("i:", i, "items[i]:", items[i]);
  total += items[i].price;
}
// output tells you which specific iteration had a missing price.</code></pre>

    <p><strong>Remove the logs when done.</strong> Once the bug is found and fixed, the logs served their purpose. Leaving them in clutters the console for the next debugging session — and, in production, exposes internal state to anyone with DevTools open.</p>
  `,

  /* --- Chunk 1: Why & When --- */

  /* 1.0 What problem it solves */
  'debug-4-8-1-0': `
    <p>Every runtime bug in JavaScript comes down to one of two things: a line got the wrong input, or a line did the wrong thing with the right input. The second case is rare — most functions and operators work correctly. The first case is almost every bug. If you check the inputs and they're wrong, you've narrowed the search space enormously: you don't need to look at the broken line at all; you need to look at wherever the bad input came from.</p>
    <p>This technique is how you make that split. Log the inputs, compare to expectations, and either the inputs are wrong (bug is upstream) or the inputs are fine (bug is in the operation itself). Either answer cuts the search in half — and repeating the technique upstream cuts it in half again. Compound "halving" is why this technique finds bugs so fast: three or four rounds of it can localize almost any bug.</p>
  `,

  /* 1.1 Why use it */
  'debug-4-8-1-1': `
    <p>Because staring at the broken line hoping to spot the bug rarely works. The broken line looks reasonable — that's why you wrote it. What's not visible is what value flowed <em>into</em> it. Loading the actual runtime values into your view is what turns "staring at code" into "reading data." Reading data is faster and more reliable.</p>
    <p>It's also the technique that scales. Any bug — from a simple typo to a complex race condition — can be diagnosed by "log the inputs, look at the values, compare to expected." Once this becomes a reflex, most debugging sessions become mechanical: identify the broken line, log its inputs, spot the mismatch, move upstream. No inspiration required.</p>
  `,

  /* 1.2 Where you use it */
  'debug-4-8-1-2': `
<pre class="language-javascript"><code class="language-javascript">// Before a line that's throwing
console.log("cart:", cart, "user:", user);
const total = cart.items.reduce((s, i) =&gt; s + i.price, 0) * (1 + user.taxRate);

// Before a DOM operation that fails
console.log("el:", el, "text:", text);
el.textContent = text;

// Before a fetch call to see what URL and options you're actually sending
console.log("url:", url, "options:", options);
const res = await fetch(url, options);

// Before a JSON.parse call
console.log("raw:", raw, "typeof:", typeof raw);
const parsed = JSON.parse(raw);

// Before a math operation producing NaN
console.log("a:", a, "b:", b, "typeof:", typeof a, typeof b);
const result = a + b;

// Before an if branch that's wrong
console.log("user:", user, "isAdmin:", user?.isAdmin);
if (user.isAdmin) { }

// Inside a loop, before a broken iteration line
for (let i = 0; i &lt; items.length; i++) {
  console.log("i:", i, "items[i]:", items[i]);
  process(items[i]);
}

// Before a method call that throws "not a function"
console.log("obj:", obj, "typeof method:", typeof obj.method);
obj.method();

// Before a property access on something that might be null
console.log("data:", data);
render(data.title);

// Before assigning to a form field
console.log("input:", input, "value:", newValue);
input.value = newValue;

// Before dispatching to a state store or a callback
console.log("action:", action, "state:", state);
dispatch(action);

// Before an async operation completes and things start acting weird
console.log("about to save. draft:", draft);
await save(draft);
console.log("saved. response:", response);   // ← also log after, for comparison</code></pre>

    <p>Anywhere the code isn't doing what you expected, the log-before-the-line technique applies. It's the default first move.</p>
  `,

  /* 1.3 Plain English explanation */
  'debug-4-8-1-3': `
    <p>Imagine a machine on an assembly line that keeps producing broken parts. You have two options: try to figure out what the machine is doing wrong from the outside, or open the intake chute and check what raw material is coming in. Nine times out of ten, the raw material is the wrong material — someone loaded the wrong stock, and the machine is doing its job correctly on garbage input.</p>
    <p>Logging the values before the broken line is opening the intake chute. Instead of blaming the machine (the broken line), you check what's being fed into it. Almost always, the "wrong input" is what you find — and then the question becomes "where is that wrong input coming from?" That's an entirely different question, one you can answer by doing the same technique one step upstream.</p>
  `,

  /* 1.4 Mental model */
  'debug-4-8-1-4': `
    <p>Think of your code as a chain of pipes carrying values from one operation to the next. When something wrong comes out the end, the broken pipe isn't necessarily the last one — the wrong thing might have entered the system three pipes earlier and just flowed through. What you need to know is: at each pipe, what came in?</p>
    <p>The log-before-the-line technique is you tapping the pipe right before the broken one and looking inside. If what's flowing in is what you expected, the current pipe is the one leaking. If what's flowing in is already wrong, walk one pipe upstream and tap again. Keep walking upstream, tapping and reading, until you find the pipe where the correct value goes in and the wrong value comes out. That pipe is your bug.</p>
    <p>You never have to guess. You just keep asking "is the input to this pipe correct?" and walking backward until the answer is "yes, but the output isn't." That's where the fix goes.</p>
  `,

  /* 1.5 Step-by-step walkthrough */
  'debug-4-8-1-5': `
<pre class="language-javascript"><code class="language-javascript">// Scenario: a cart total display shows "$NaN" and you don't know why.

// Original code:
function updateTotal(cart, taxRate) {
  const subtotal = cart.items.reduce((s, item) =&gt; s + item.price, 0);
  const total = subtotal * (1 + taxRate);
  document.querySelector(".total").textContent = "$" + total.toFixed(2);
}

// Step 1: identify the broken line.
// The display shows "$NaN" — the broken line is the toFixed call that produced the bad total.
// Specifically, "total" is NaN before it gets displayed.

// Step 2: log every input to that line.
// The bad line: total.toFixed(2)
// Its input: total.
// But total came from subtotal * (1 + taxRate). Log both.
function updateTotal(cart, taxRate) {
  const subtotal = cart.items.reduce((s, item) =&gt; s + item.price, 0);
  console.log("subtotal:", subtotal, "taxRate:", taxRate);
  const total = subtotal * (1 + taxRate);
  console.log("total:", total, "typeof:", typeof total);
  document.querySelector(".total").textContent = "$" + total.toFixed(2);
}

// Step 3: run it. Read the logs.
// subtotal: 42.5   taxRate: undefined
// total: NaN   typeof: number

// Step 4: compare. taxRate is undefined. That's the bug source — not "total," not the reduce.
// A number times (1 + undefined) = number * NaN = NaN.

// Step 5: follow taxRate upstream.
// Where does taxRate come from? The caller.
updateTotal(cart, user.taxRate);   // ← caller
// log at the caller too:
console.log("user:", user, "user.taxRate:", user?.taxRate);
updateTotal(cart, user.taxRate);
// output: user: { id: 1, name: "Alice" }   user.taxRate: undefined
// user is defined, but user.taxRate isn't a property on the user object.

// Step 6: fix.
// user.taxRate should have been user.tax_rate (API returned snake_case).
// or maybe the field name was rewritten and this caller wasn't updated.
// either way, THAT is the fix location.

// Time spent: about 30 seconds. Bug found by logging inputs and following the bad value upstream.
// Without this technique: stare at reduce, wonder about item.price, blame toFixed, etc.
// With it: mechanical. Bug found in one round of log-and-read.</code></pre>
  `,

  /* --- Chunk 2: The Click --- */

  /* 2.0 Debugging clue */
  'debug-4-8-2-0': `
    <p>If a log shows the correct value but the next line still misbehaves, the bug is inside the operation itself (rare — usually a typo, a wrong operator, or a misunderstanding of how the operation works). If a log shows an unexpected value, the bug is upstream — walk one step earlier and repeat:</p>
<pre class="language-javascript"><code class="language-javascript">// pattern: log inputs → compare to expected → decide direction.

// case A: input is what you expected
console.log("items:", items);             // items: [{...}, {...}, {...}]  ← looks fine
items.forEach(save);                      // still fails? bug is INSIDE save.

// case B: input is not what you expected
console.log("items:", items);             // items: null                    ← there's the bug
items.forEach(save);                      // don't debug this line — debug what set items to null.

// this simple decision — "is the input right?" — routes the entire investigation.
// wrong input → move upstream
// right input → the current line has the bug</code></pre>

    <p>If the log doesn't appear at all, the surrounding code isn't reaching this line. Add a log <em>before</em> the log to prove the previous line ran. If that also doesn't appear, work backward until you find where execution actually stopped.</p>
  `,

  /* 2.1 The part that makes it click */
  'debug-4-8-2-1': `
    <p>The aha is that "the broken line" is almost always innocent. The line that throws is where the wrong value gets USED, not where it gets CREATED. Blaming the line that throws is like blaming the last person to touch a broken vase — they probably didn't break it, they just happened to be holding it when everyone noticed the crack:</p>
<pre class="language-javascript"><code class="language-javascript">// the line that throws:
el.textContent = "$" + total;      // "Cannot read properties of null..."

// the actual bug:
const el = document.querySelector(".totall");   // ← typo, way upstream, hours ago
// el was null the whole time. the crash line just happened to be where it got used.</code></pre>
    <p>Once you accept that the throw location is usually not the bug location, you stop staring at the throw line and start following values upstream. That's the mindset shift the technique enables.</p>
  `,

  /* 2.2 Common confusions */
  'debug-4-8-2-2': `
    <p><strong>"But I already read the code — I don't need to log it."</strong> Reading the code tells you what the code says. Logging tells you what it's actually doing. Those are different pieces of information. The reason bugs happen is that the code isn't doing what you think it's doing. Reading harder won't reveal that. Logging will.</p>

    <p><strong>"I logged the value, and it looks right. Now what?"</strong> Move down. The bug is inside the operation on the broken line. Read that line carefully — is the operator right? Are you calling the right method? Is there an off-by-one? Is a typo in a property name? If those all check out, you've found a rare "code itself is wrong" case (usually a syntactic misunderstanding), and you fix it.</p>

    <p><strong>"I logged the value, and it's wrong. Now what?"</strong> Follow the value upstream. Find the line that assigned the wrong value. Log the inputs to <em>that</em> line. Repeat. This is the "walking backward through the pipes" pattern — each round narrows the bug's location by half.</p>

    <p><strong>"How is this different from just using console.log?"</strong> It IS console.log — but with a specific, targeted purpose: log the inputs to a specific broken line to check what it's actually seeing. General console.log is "print anything I want." This technique is "print the exact inputs to the exact failure point." The narrow focus is what makes it fast.</p>

    <p><strong>"What if the broken line is inside a library I can't edit?"</strong> Log the arguments you're passing INTO the library. If those are wrong, you don't need to open the library. If those are correct and the library still misbehaves, you've found a real library bug (or a misunderstanding of its API).</p>

    <p><strong>"What if there's no obvious 'broken line' — the output is just wrong?"</strong> Then work backward from the wrong output. Where is that value being set or displayed? Log the inputs to that line. Follow the value backward until you find the point where the wrong value was introduced. Same technique, just from the visible symptom instead of a thrown error.</p>

    <p><strong>"Can I skip this and use the debugger instead?"</strong> Yes — <code>debugger</code> plus stepping accomplishes the same goal (see the values at any point). But adding two lines of <code>console.log</code> is usually faster than opening DevTools' Sources panel, setting breakpoints, and stepping. Reach for logs first for quick checks; reach for <code>debugger</code> when the bug is complex enough to warrant a full session.</p>
  `,

  /* 2.3 Common mistakes */
  'debug-4-8-2-3': `
<pre class="language-javascript"><code class="language-javascript">// Mistake 1: only logging the one variable you suspect
const total = cart.total * (1 + user.taxRate);
console.log("total:", total);   // ← too late, and only logs the result
// fix: log the INPUTS, not the result
console.log("cart.total:", cart.total, "user.taxRate:", user.taxRate);
const total = cart.total * (1 + user.taxRate);

// Mistake 2: logging without a label
console.log(x);
console.log(y);
console.log(z);
// three unlabeled values scroll by. you can't tell which is which.
// fix:
console.log("x:", x, "y:", y, "z:", z);

// Mistake 3: logging way above the broken line
console.log("items:", items);
// ... 40 lines of other code that might modify items ...
items.forEach(save);   // broken line
// the log doesn't reflect the state at the failure point.
// fix: put the log DIRECTLY above the broken line.

// Mistake 4: logging a stringified version
console.log("data: " + JSON.stringify(data));
// hides the fact that data might be null, undefined, or an object.
// fix:
console.log("data:", data);

// Mistake 5: assuming the log location is where execution reached
if (someCondition) {
  console.log("here!");   // if you don't see this, the condition was false
  process();
}
// fix: log the condition too
console.log("someCondition:", someCondition);
if (someCondition) {
  console.log("inside true branch");
  process();
}

// Mistake 6: staring at the broken line instead of logging its inputs
// you can read a broken line for an hour and not spot the bug.
// two log lines and 5 seconds of reading them will find it.

// Mistake 7: giving up when the first log shows nothing wrong
console.log("items:", items);   // items: [{...}, {...}, {...}]  ← looks right!
items.forEach(save);            // still fails.
// fix: if the input is right but the line still fails, log ONE LEVEL DEEPER
console.log("items:", items);
console.log("first item:", items[0]);
console.log("first item's price:", items[0]?.price);
items.forEach(save);

// Mistake 8: fixing the bug based on assumption, not the log
// "I bet total is undefined" → skip logging, add "|| 0" fallback
const total = something?.total || 0;
// this "works" but you never learned what the actual value was.
// the same bug may be about to bite you somewhere else. always confirm with a log.

// Mistake 9: leaving debug logs in production
console.log("user data:", user);   // ships to prod
// fix: remove logs once the bug is confirmed found and fixed.

// Mistake 10: logging AFTER the broken line
save(items);
console.log("saved!");   // never fires because save threw
// fix: the log has to be BEFORE the line that fails.</code></pre>
  `,

  /* --- Chunk 3: In Practice --- */

  /* 3.0 Tiny examples */
  'debug-4-8-3-0': `
<pre class="language-javascript"><code class="language-javascript">// The core pattern
console.log("x:", x);
brokenLine(x);

// Two inputs
console.log("a:", a, "b:", b);
brokenLine(a, b);

// With types
console.log("x:", x, "typeof:", typeof x);
brokenLine(x);

// With array shape info
console.log("items:", items, "length:", items?.length);
items.forEach(process);

// With element existence check
const el = document.querySelector(".total");
console.log("el:", el);
el.textContent = "$" + total;

// Before a method call
console.log("obj:", obj, "typeof method:", typeof obj?.method);
obj.method();

// Before a math op
console.log("a:", a, "b:", b, "types:", typeof a, typeof b);
const sum = a + b;

// Inside a loop
for (let i = 0; i &lt; items.length; i++) {
  console.log("i:", i, "items[i]:", items[i]);
  process(items[i]);
}

// Before a fetch
console.log("url:", url, "options:", options);
const res = await fetch(url, options);

// Before a JSON operation
console.log("raw:", raw, "typeof:", typeof raw);
const parsed = JSON.parse(raw);

// Before a property access
console.log("data:", data);
render(data.user.name);

// Before an if branch
console.log("user:", user, "user?.isAdmin:", user?.isAdmin);
if (user.isAdmin) { }

// Before an assignment to the DOM
console.log("input:", input, "value:", newValue);
input.value = newValue;

// Before a dispatch or state update
console.log("action:", action, "current state:", state);
dispatch(action);

// Bracketing an async operation
console.log("about to save:", draft);
const saved = await save(draft);
console.log("saved:", saved);</code></pre>
  `,

  /* 3.1 Real website uses */
  'debug-4-8-3-1': `
    <p><strong>Example: catching a null query selector before the crash</strong></p>
<pre class="language-javascript"><code class="language-javascript">// crash: "Cannot set properties of null (setting 'textContent')"
// broken line:
document.querySelector(".total").textContent = "$" + total;

// log its inputs:
const el = document.querySelector(".total");
console.log("el:", el, "total:", total);
el.textContent = "$" + total;

// output:
// el: null   total: 42
// el is null. selector didn't match anything.
// the bug is either the selector string (typo?) or timing (element doesn't exist yet).
// go check the HTML for ".total" class or move the code to after DOMContentLoaded.</code></pre>

    <p><strong>Example: finding the item breaking a total calculation</strong></p>
<pre class="language-javascript"><code class="language-javascript">// broken output: total shows NaN
function calculateTotal(items) {
  let total = 0;
  for (const item of items) {
    console.log("item:", item, "price:", item.price, "type:", typeof item.price);
    total += item.price;
  }
  return total;
}

// output:
// item: {name: "shirt", price: 20}   price: 20   type: number
// item: {name: "hat", price: "N/A"}  price: "N/A"  type: string   ← here
// item: {name: "shoes", price: 50}   price: 50   type: number
// the middle item has a string "N/A" where a number should be.
// fix upstream — either sanitize incoming data or filter out invalid items.</code></pre>

    <p><strong>Example: debugging a form submission that's sending wrong data</strong></p>
<pre class="language-javascript"><code class="language-javascript">form.addEventListener("submit", (e) =&gt; {
  e.preventDefault();
  
  const values = readFormValues(form);
  console.log("about to send. values:", values);
  fetch("/api/submit", { method: "POST", body: JSON.stringify(values) });
});

// output:
// about to send. values: { name: "", email: "alice@x.com", age: NaN }
// name is empty, age is NaN — both readFormValues bugs.
// no need to look at fetch or the server. bug is in readFormValues.</code></pre>

    <p><strong>Example: catching an event handler firing on the wrong element</strong></p>
<pre class="language-javascript"><code class="language-javascript">document.querySelectorAll(".delete-btn").forEach(btn =&gt; {
  btn.addEventListener("click", (e) =&gt; {
    const id = e.currentTarget.dataset.id;
    console.log("delete clicked. id:", id, "target:", e.currentTarget);
    deleteItem(id);
  });
});

// output on click:
// delete clicked. id: undefined   target: &lt;button class="delete-btn"&gt;
// id is undefined. the button doesn't have a data-id attribute.
// bug is in the HTML template that generates these buttons — missing data-id.</code></pre>

    <p><strong>Example: bracketing an async op to isolate where things go wrong</strong></p>
<pre class="language-javascript"><code class="language-javascript">async function saveDraft(draft) {
  console.log("input draft:", draft);
  
  const validated = validate(draft);
  console.log("after validate:", validated);
  
  const serialized = serialize(validated);
  console.log("after serialize:", serialized);
  
  const res = await fetch("/api/drafts", { method: "POST", body: serialized });
  console.log("response status:", res.status);
  
  const parsed = await res.json();
  console.log("response body:", parsed);
  
  return parsed;
}

// four logs turn a mystery async chain into a step-by-step visible pipeline.
// wherever the value first becomes wrong, that's the buggy step.</code></pre>

    <p><strong>Example: proving execution reaches a line at all</strong></p>
<pre class="language-javascript"><code class="language-javascript">// suspected bug: "the code doesn't run this branch"

if (user.role === "admin") {
  console.log("admin branch — user:", user);   // ← does this fire?
  showAdminPanel();
}

// if you never see "admin branch," the condition is false.
// then log the condition's inputs:
console.log("user.role:", user.role, "typeof:", typeof user.role);
if (user.role === "admin") {
  showAdminPanel();
}
// output: user.role: "Admin"   typeof: string
// case mismatch — "Admin" !== "admin". easy fix.</code></pre>
  `,

  /* 3.2 Connects to */
  'debug-4-8-3-2': `
    <ul>
      <li><strong><code>console.log()</code></strong> → the tool you use to actually do the logging</li>
      <li><strong><code>console.warn()</code>, <code>console.error()</code></strong> → same "log the inputs" idea, different severity</li>
      <li><strong><code>console.table()</code></strong> → useful when the "input" is an array of objects</li>
      <li><strong><code>console.dir()</code></strong> → deep inspection alongside a value log</li>
      <li><strong><code>typeof</code></strong> → often included in the log to reveal type mismatches</li>
      <li><strong><code>Array.isArray()</code></strong> → often included when the input might be a non-array</li>
      <li><strong><code>debugger</code></strong> → the "pause and see everything at once" alternative</li>
      <li><strong>Reading error messages</strong> → tells you WHICH line is broken; then log its inputs</li>
      <li><strong>Stack traces</strong> → identify the broken line's location; log directly above it</li>
      <li><strong>Debugging variables</strong> → this technique IS variable debugging, applied at a specific point</li>
      <li><strong>Debugging DOM</strong> → often used before DOM operations that might hit null</li>
      <li><strong>Debugging async</strong> → especially useful for bracketing awaits with logs</li>
    </ul>
  `,

  /* 3.3 See also */
  'debug-4-8-3-3': `
    <ul>
      <li><code>console.log()</code></li>
      <li><code>console.warn()</code></li>
      <li><code>console.error()</code></li>
      <li><code>console.table()</code></li>
      <li><code>console.dir()</code></li>
      <li><code>typeof</code></li>
      <li><code>Array.isArray()</code></li>
      <li><code>debugger</code></li>
      <li>Reading error messages</li>
      <li>Reading stack traces</li>
      <li>Debugging variables</li>
      <li>Debugging DOM</li>
      <li>Debugging async</li>
      <li>Bracketing bugs (before/after logs)</li>
    </ul>
  `,
});