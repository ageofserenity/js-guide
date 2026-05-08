Object.assign(CONTENT, {

      /* ==========================================================
     SECTION 3: MAIN TOPIC GUIDES / LESSON CONTENT
     COVERS THE BASIC LESSONS 3.7 - 3.8
     ========================================================== */


  /* ========================================================= 
   Sub-lesson: 3.7.1 If / Else → what conditionals are
 =======================================================*/

  /* --- Chunk 0: What & How --- */

  /* 0.0 What it is */
  'topics-6-0-0-0': `
    <p>A conditional is code that asks a question and runs different blocks depending on the answer. "If this is true, do A. Otherwise, do B." That's the whole idea.</p>
    <p>Without conditionals, code can only run in a straight line — every line, every time. Conditionals are how a program makes decisions based on the data it has.</p>
  `,

  /* 0.1 Syntax */
  'topics-6-0-0-1': `
<pre class="language-javascript"><code class="language-javascript">const age = 20;

if (age >= 18) {
  console.log("You're an adult");
} else {
  console.log("You're a minor");
}

// prints: "You're an adult"</code></pre>
    <p>The condition <code>age &gt;= 18</code> is checked. If it's true, the first block runs. If it's false, the <code>else</code> block runs. Only one of the two ever runs — never both.</p>
  `,

  /* 0.2 Anatomy / Breakdown */
  'topics-6-0-0-2': `
<pre class="language-javascript"><code class="language-javascript">const score = 75;

if (score >= 90) {
  console.log("A");
} else if (score >= 70) {
  console.log("B");
} else {
  console.log("F");
}

// prints: "B"

// if           → keyword that starts the question
// (score >= 90) → the condition (must be in parens)
// { ... }      → the block that runs if the condition is true
// else if      → asks another question if the first was false
// else         → fallback that runs if nothing else matched
// only ONE block runs out of all of them</code></pre>
    <p>JavaScript checks each condition top-to-bottom. The first one that's true wins — its block runs, and the rest are skipped. If none match, the <code>else</code> runs (if it exists).</p>
  `,

  /* 0.3 Syntax Details That Matter */
  'topics-6-0-0-3': `
    <p>The condition goes in parentheses. The code to run goes in curly braces:</p>
<pre class="language-javascript"><code class="language-javascript">if (age >= 18) {           // condition in ( )
  console.log("adult");    // code in { }
}</code></pre>

    <p><code>else if</code> and <code>else</code> chain off the original <code>if</code>:</p>
<pre class="language-javascript"><code class="language-javascript">if (x > 0) {
  console.log("positive");
} else if (x < 0) {
  console.log("negative");
} else {
  console.log("zero");
}</code></pre>

    <p>You can have just <code>if</code>, just <code>if</code> + <code>else</code>, or a long chain — all valid:</p>
<pre class="language-javascript"><code class="language-javascript">// Just if — nothing happens if false
if (isLoggedIn) showDashboard();

// if + else — one of two paths
if (age >= 18) showAdult();
else showMinor();

// if + else if + else — many paths, one fallback
if (score >= 90) grade = "A";
else if (score >= 80) grade = "B";
else if (score >= 70) grade = "C";
else grade = "F";</code></pre>

    <p>Conditions don't have to be comparisons — any value works. JavaScript treats values as either "truthy" or "falsy":</p>
<pre class="language-javascript"><code class="language-javascript">if (cart.length) {           // any non-zero number is truthy
  console.log("cart has items");
}

if (user) {                   // any non-null object is truthy
  console.log("user is set");
}

if (input.value) {             // empty string is falsy, non-empty is truthy
  console.log("user typed something");
}</code></pre>

    <p>Falsy values: <code>false</code>, <code>0</code>, <code>""</code>, <code>null</code>, <code>undefined</code>, <code>NaN</code>. Everything else is truthy.</p>
  `,

  /* --- Chunk 1: Why & When --- */

  /* 1.0 What problem it solves */
  'topics-6-0-1-0': `
    <p>A program that always does the same thing can't react to its inputs. If the user is logged in, show the dashboard; if not, show the login page. If the cart is empty, hide the checkout button. If the password is wrong, show an error.</p>
    <p>Conditionals are how code branches based on data. Without them, every program would do the same thing in the same order, no matter what.</p>
  `,

  /* 1.1 Why use it */
  'topics-6-0-1-1': `
    <p>Use a conditional any time the code's behavior should depend on a value — user input, fetched data, the current state of the page, the time of day, anything.</p>
<pre class="language-javascript"><code class="language-javascript">// React to user state
if (user.isLoggedIn) {
  showDashboard();
} else {
  showLoginPage();
}

// React to data
if (cart.length === 0) {
  showEmptyCartMessage();
} else {
  showCheckoutButton();
}

// React to validation
if (email.includes("@")) {
  submitForm();
} else {
  showError("Invalid email");
}

// React to results
if (response.ok) {
  showSuccess();
} else {
  showError("Something went wrong");
}</code></pre>
    <p>Every meaningful program has conditionals. They're how code adapts to reality.</p>
  `,

  /* 1.2 Where you use it */
  'topics-6-0-1-2': `
    <p>Conditionals are everywhere. Almost any function with branching logic uses them.</p>
<pre class="language-javascript"><code class="language-javascript">// Form validation
function isValidEmail(email) {
  if (!email.includes("@")) return false;
  if (email.length < 3) return false;
  return true;
}

// Toggle UI state
if (sidebar.classList.contains("open")) {
  sidebar.classList.remove("open");
} else {
  sidebar.classList.add("open");
}

// Choose what to render
if (isLoading) {
  renderSpinner();
} else if (error) {
  renderError();
} else {
  renderData();
}

// Pricing logic
if (user.isMember) {
  price = price * 0.9;
}

// Permission checks
if (!user.canEdit) {
  return;
}</code></pre>
  `,

  /* 1.3 Plain English explanation */
  'topics-6-0-1-3': `
    <p>A conditional is the code version of "if this, do that." You ask a yes-or-no question. JavaScript checks the answer. If yes, it runs the block of code you wrote. If no, it skips it (or runs a different block).</p>
    <p>You can chain questions together: "if this, do A; otherwise if that, do B; otherwise, do C." JavaScript walks down the list, asking each question in order, and stops at the first yes. Only one block ever runs.</p>
    <p>Without conditionals, code is a straight line. With them, code is a flowchart — different paths through the same program based on what's true at the moment.</p>
  `,

  /* 1.4 Mental model */
  'topics-6-0-1-4': `
    <p>A conditional is a fork in the road. The condition decides which path the program takes.</p>
<pre class="language-javascript"><code class="language-javascript">//                ┌─── true ───→ block A runs
// (condition?) ──┤
//                └─── false ──→ block B runs (or nothing)

if (age >= 18) {
  // road A
} else {
  // road B
}</code></pre>
    <p>An <code>if/else if/else</code> chain is multiple forks in a row. Each one checks a condition; the first <code>true</code> takes its branch and you exit the whole chain. The rest never run.</p>
  `,

  /* 1.5 Step-by-step walkthrough */
  'topics-6-0-1-5': `
<pre class="language-javascript"><code class="language-javascript">const score = 85;

if (score >= 90) {
  console.log("A");
} else if (score >= 80) {
  console.log("B");
} else {
  console.log("F");
}

// prints: "B"

// JavaScript is thinking:
// Line 1: register score, value 85.
// Line 3: see if (score >= 90) → check 85 >= 90 → false. Skip the block.
// Line 5: see else if (score >= 80) → check 85 >= 80 → true. Run THIS block.
// Line 6: log "B".
// Line 7-9: skip the else — the chain already matched. Done.</code></pre>
  `,

  /* --- Chunk 2: The Click --- */

  /* 2.0 Debugging clue */
  'topics-6-0-2-0': `
    <p>If a conditional isn't running the branch you expect, log the condition itself to see what JavaScript is actually evaluating.</p>
<pre class="language-javascript"><code class="language-javascript">const age = "20";

console.log("age:", age, typeof age);
console.log("check:", age >= 18);

if (age >= 18) {
  console.log("adult");
} else {
  console.log("minor");
}

// prints:
//   age: 20 string
//   check: true
//   adult
// the comparison worked due to coercion, but spotting that age is a string can prevent bigger bugs later</code></pre>

    <p>If a condition is unexpectedly truthy or falsy, it's often because the value isn't what you think — log it with <code>typeof</code> to confirm.</p>
  `,

  /* 2.1 The part that makes it click */
  'topics-6-0-2-1': `
    <p>Conditionals don't decide "what should happen." They decide <strong>which block runs</strong>. The condition is the question; the blocks are the answers.</p>
    <p>Once you see this, the rest of conditional syntax falls into place. The parens hold the question. The braces hold the block to run if the answer is yes. <code>else if</code> and <code>else</code> are just additional blocks, attached as alternatives.</p>
  `,

  /* 2.2 Common confusions */
  'topics-6-0-2-2': `
    <p><strong>Confusion: <code>=</code> vs <code>===</code></strong></p>
<pre class="language-javascript"><code class="language-javascript">if (age = 18) { ... }     // wrong — = is assignment
if (age === 18) { ... }   // right — === is comparison

// the wrong one assigns 18 to age, then evaluates to 18 (truthy) → always runs the block
// always use === in conditions</code></pre>

    <p><strong>Confusion: only one branch runs</strong></p>
<pre class="language-javascript"><code class="language-javascript">const score = 95;

if (score >= 70) {
  console.log("passed");
} else if (score >= 90) {
  console.log("aced it");
}
// prints: "passed" — the first true match wins, never reaches "aced it"
// fix: order conditions from most specific to least specific
// if (score >= 90) "aced it" first, then else if (score >= 70) "passed"</code></pre>

    <p><strong>Confusion: separate ifs vs chained</strong></p>
<pre class="language-javascript"><code class="language-javascript">// Two SEPARATE ifs — both can run
if (score >= 70) console.log("passed");
if (score >= 90) console.log("aced it");
// score 95 → both print

// Chained — only ONE runs
if (score >= 70) console.log("passed");
else if (score >= 90) console.log("aced it");
// score 95 → only "passed" prints (and it's wrong because of order)</code></pre>

    <p><strong>Confusion: truthy and falsy</strong></p>
<pre class="language-javascript"><code class="language-javascript">if ("hello") { ... }     // runs — non-empty string is truthy
if ("") { ... }           // skips — empty string is falsy
if (0) { ... }            // skips — 0 is falsy
if (-1) { ... }           // runs — non-zero numbers are truthy
if ([]) { ... }           // runs — empty array is truthy (gotcha!)
if ({}) { ... }           // runs — empty object is truthy (gotcha!)</code></pre>

    <p><strong>Confusion: <code>else</code> doesn't take a condition</strong></p>
<pre class="language-javascript"><code class="language-javascript">if (x > 0) { ... }
else (x < 0) { ... }      // wrong — else doesn't take a condition
else { ... }              // correct — else is the catch-all

// for an alternate condition, use else if
else if (x < 0) { ... }</code></pre>
  `,

  /* 2.3 Common mistakes */
  'topics-6-0-2-3': `
<pre class="language-javascript"><code class="language-javascript">if (age = 18) { ... }
// wrong: = assigns instead of comparing
// fix: if (age === 18)</code></pre>

<pre class="language-javascript"><code class="language-javascript">if (score >= 70) { ... }
else if (score >= 90) { ... }
// score 95 matches the first → "aced" branch never runs
// fix: order from most specific to least — check >= 90 first</code></pre>

<pre class="language-javascript"><code class="language-javascript">if (x > 0) console.log("positive")
else
  console.log("not positive")
// works, but no braces — risky once you add more lines
// fix: use { } even for one-line bodies</code></pre>

<pre class="language-javascript"><code class="language-javascript">else (x < 0) { ... }
// wrong: else doesn't take a condition
// fix: else if (x < 0) { ... }</code></pre>

<pre class="language-javascript"><code class="language-javascript">if (cart.length = 0) { ... }
// wrong: assigns 0 to cart.length AND evaluates to 0 (falsy)
// fix: if (cart.length === 0)</code></pre>

<pre class="language-javascript"><code class="language-javascript">if (isReady)
  setUp();
  start();
// only setUp() is conditional — start() always runs
// fix: wrap both in braces — { setUp(); start(); }</code></pre>
  `,

  /* --- Chunk 3: In Practice --- */

  /* 3.0 Tiny examples */
  'topics-6-0-3-0': `
<pre class="language-javascript"><code class="language-javascript">// Just if
if (cart.length > 0) {
  console.log("cart has items");
}

// if + else
const age = 16;
if (age >= 18) {
  console.log("adult");
} else {
  console.log("minor");
}
// prints: "minor"

// if + else if + else
const score = 75;
if (score >= 90) {
  console.log("A");
} else if (score >= 80) {
  console.log("B");
} else if (score >= 70) {
  console.log("C");
} else {
  console.log("F");
}
// prints: "C"

// Truthiness check
const name = "Os";
if (name) {
  console.log("got a name:", name);
}
// prints: "got a name: Os"

// Negation
if (!isLoggedIn) {
  console.log("please log in");
}

// Combining conditions
if (age >= 18 && country === "US") {
  console.log("can vote");
}</code></pre>
  `,

  /* 3.1 Real website uses */
  'topics-6-0-3-1': `
    <p><strong>Example: showing/hiding UI based on state</strong></p>
<pre class="language-javascript"><code class="language-javascript">if (user.isLoggedIn) {
  dashboard.style.display = "block";
  loginForm.style.display = "none";
} else {
  dashboard.style.display = "none";
  loginForm.style.display = "block";
}</code></pre>

    <p><strong>Example: form validation</strong></p>
<pre class="language-javascript"><code class="language-javascript">function validateForm(data) {
  if (!data.email) {
    return "Email is required";
  }
  if (!data.email.includes("@")) {
    return "Invalid email format";
  }
  if (data.password.length < 8) {
    return "Password too short";
  }
  return null;
}

const error = validateForm({ email: "os", password: "12345" });
if (error) {
  showError(error);
} else {
  submitForm();
}
// prints validation result via showError</code></pre>

    <p><strong>Example: rendering different states</strong></p>
<pre class="language-javascript"><code class="language-javascript">function render(state) {
  if (state.isLoading) {
    showSpinner();
  } else if (state.error) {
    showError(state.error);
  } else if (state.items.length === 0) {
    showEmptyMessage();
  } else {
    showItems(state.items);
  }
}</code></pre>

    <p><strong>Example: pricing logic</strong></p>
<pre class="language-javascript"><code class="language-javascript">function calculatePrice(price, user) {
  if (user.isPremium) {
    return price * 0.8;       // 20% off
  } else if (user.hasDiscountCode) {
    return price * 0.9;       // 10% off
  } else {
    return price;             // full price
  }
}

console.log(calculatePrice(100, { isPremium: true }));
// prints: 80</code></pre>
  `,

  /* 3.2 Connects to */
  'topics-6-0-3-2': `
    <ul>
      <li><strong><code>if</code></strong> → the keyword that starts a conditional</li>
      <li><strong><code>else if</code></strong> → backup question if the first failed</li>
      <li><strong><code>else</code></strong> → fallback if nothing matched</li>
      <li><strong>Comparison operators</strong> → <code>===</code>, <code>!==</code>, <code>&lt;</code>, <code>&gt;</code></li>
      <li><strong>Logical operators</strong> → <code>&amp;&amp;</code>, <code>||</code>, <code>!</code> — combining checks</li>
      <li><strong>Truthy and falsy values</strong> → JavaScript's idea of "yes" and "no"</li>
      <li><strong>Boolean values</strong> → <code>true</code> and <code>false</code></li>
      <li><strong>Switch statements</strong> → an alternative for many specific values</li>
    </ul>
  `,

  /* 3.3 See also */
  'topics-6-0-3-3': `
    <ul>
      <li><code>if</code></li>
      <li><code>else if</code></li>
      <li><code>else</code></li>
      <li><code>switch</code></li>
      <li>Comparison operators</li>
      <li>Logical operators</li>
      <li>Truthy and falsy values</li>
      <li>Ternary operator (<code>? :</code>)</li>
    </ul>
  `,


  /* ========================================================= 
   Sub-lesson: 3.7.2 If / Else → if
 =======================================================*/

  /* --- Chunk 0: What & How --- */

  /* 0.0 What it is */
  'topics-6-1-0-0': `
    <p><code>if</code> is the keyword that starts a conditional. You write <code>if</code>, then a question in parentheses, then a block of code. JavaScript runs the block only if the question's answer is <code>true</code>.</p>
    <p>It's the simplest form of branching: "do this thing, but only if this condition holds."</p>
  `,

  /* 0.1 Syntax */
  'topics-6-1-0-1': `
<pre class="language-javascript"><code class="language-javascript">const isLoggedIn = true;

if (isLoggedIn) {
  console.log("Welcome back");
}

// prints: "Welcome back"</code></pre>
    <p>The condition <code>isLoggedIn</code> is checked. Because it's <code>true</code>, the block runs. If it had been <code>false</code>, the block would have been skipped and nothing would have printed.</p>
  `,

  /* 0.2 Anatomy / Breakdown */
  'topics-6-1-0-2': `
<pre class="language-javascript"><code class="language-javascript">const cartCount = 3;

if (cartCount > 0) {
  console.log("You have items in your cart");
}

// prints: "You have items in your cart"

// if              → keyword that starts the conditional
// (cartCount > 0) → the condition (must be in parens)
// { ... }         → the block — code that runs only if the condition is true
// console.log(...) → the actual work being done</code></pre>
    <p>The <code>if</code> by itself only handles the "true" case. If the condition is false, JavaScript just skips past the block and continues.</p>
  `,

  /* 0.3 Syntax Details That Matter */
  'topics-6-1-0-3': `
    <p>Parentheses around the condition are required:</p>
<pre class="language-javascript"><code class="language-javascript">if (age >= 18) { ... }     // correct
if age >= 18 { ... }       // wrong — SyntaxError</code></pre>

    <p>Curly braces are technically optional for a single statement — but always use them anyway:</p>
<pre class="language-javascript"><code class="length-javascript">if (isReady) start();          // works for one statement
if (isReady) {                  // safer — clearly scoped
  start();
}

// dangerous without braces:
if (isReady)
  start();
  cleanup();
// cleanup() always runs — only start() is conditional</code></pre>

    <p>The condition can be any expression that evaluates to truthy or falsy:</p>
<pre class="language-javascript"><code class="language-javascript">if (true) { ... }              // literal — always runs
if (age >= 18) { ... }         // comparison
if (cart.length) { ... }       // truthy check (0 is falsy, anything else is truthy)
if (user) { ... }              // truthy check (null/undefined are falsy)
if (!isLoading) { ... }        // negation — runs when isLoading is falsy
if (a && b) { ... }            // both must be truthy
if (a || b) { ... }            // at least one must be truthy</code></pre>

    <p><code>if</code> can stand alone — no <code>else</code> required:</p>
<pre class="language-javascript"><code class="language-javascript">if (cart.length === 0) {
  showEmptyMessage();
}
// nothing happens if cart is non-empty — that's fine
// not every if needs a paired else</code></pre>

    <p>Multiple statements all go inside the braces:</p>
<pre class="language-javascript"><code class="language-javascript">if (user.isLoggedIn) {
  showDashboard();
  hideLoginForm();
  loadUserData();
}
// all three lines run together, only when isLoggedIn is true</code></pre>
  `,

  /* --- Chunk 1: Why & When --- */

  /* 1.0 What problem it solves */
  'topics-6-1-1-0': `
    <p>Some code should only run when something is true. Show an error only if the input is invalid. Run a payment only if the cart isn't empty. Send a notification only if the user has alerts enabled.</p>
    <p><code>if</code> is the gatekeeper. It checks one thing, and either lets the block run or skips it. That's all.</p>
  `,

  /* 1.1 Why use it */
  'topics-6-1-1-1': `
    <p>Use <code>if</code> when something should happen <em>only sometimes</em> — when a condition holds. If you don't need a fallback for the false case, you don't need <code>else</code> at all.</p>
<pre class="language-javascript"><code class="language-javascript">// Only show the error if there is one
if (error) {
  showError(error);
}

// Only auto-save if there are unsaved changes
if (hasUnsavedChanges) {
  saveDraft();
}

// Only send the email if the user opted in
if (user.emailNotifications) {
  sendEmail();
}

// Only do cleanup if it's actually needed
if (timer) {
  clearTimeout(timer);
}</code></pre>
    <p>Lots of real code is sprinkled with standalone <code>if</code> statements like these. Each one guards a piece of work that shouldn't happen unconditionally.</p>
  `,

  /* 1.2 Where you use it */
  'topics-6-1-1-2': `
    <p>Standalone <code>if</code> shows up anywhere code is conditional but doesn't need a paired alternative.</p>
<pre class="language-javascript"><code class="language-javascript">// Guard clauses (early returns)
function processOrder(order) {
  if (!order) return;
  if (order.items.length === 0) return;
  // ... main logic
}

// Conditional UI updates
if (cart.length > 5) {
  showFreeShippingBadge();
}

// One-shot setup
if (!hasInitialized) {
  initApp();
  hasInitialized = true;
}

// Conditional logging or analytics
if (isDevelopment) {
  console.log("debug info:", data);
}

// Conditional cleanup
if (subscription) {
  subscription.unsubscribe();
}</code></pre>
  `,

  /* 1.3 Plain English explanation */
  'topics-6-1-1-3': `
    <p><code>if</code> is the keyword that asks a yes-or-no question. The block in braces is the action that happens if the answer is yes. If the answer is no, the action is skipped — and JavaScript just keeps going past the block.</p>
    <p>It's the simplest possible form of branching. There's no fallback, no chain, no alternative. Just one question and one block of code that depends on the answer.</p>
    <p>You'll write <code>if</code> by itself far more often than you write a full <code>if/else</code> chain. Most real code is dotted with little checks: "only do this if X."</p>
  `,

  /* 1.4 Mental model */
  'topics-6-1-1-4': `
    <p>An <code>if</code> is a gate. The condition decides whether the gate opens.</p>
<pre class="language-javascript"><code class="language-javascript">// (condition?)
//      ↓
//    true  ──→ open gate, run the block
//    false ──→ stay closed, skip the block
//
// either way, code continues after the block

if (isLoggedIn) {
  showDashboard();   // only runs if the gate opens
}
showFooter();        // always runs — outside the gate</code></pre>
    <p>The block in braces is what's behind the gate. Code after the block isn't conditional — it always runs, regardless of the condition.</p>
  `,

  /* 1.5 Step-by-step walkthrough */
  'topics-6-1-1-5': `
<pre class="language-javascript"><code class="language-javascript">const cart = ["hat", "shirt"];

if (cart.length > 0) {
  console.log("Showing checkout");
}
console.log("Done");

// prints:
//   Showing checkout
//   Done

// JavaScript is thinking:
// Line 1: register cart, value ["hat", "shirt"].
// Line 3: see if (cart.length > 0) → check 2 > 0 → true. Open the gate.
// Line 4: log "Showing checkout".
// Line 5: end of the if block.
// Line 6: log "Done" — runs regardless of the condition.

// If cart had been empty:
// Line 3: 0 > 0 → false. Skip lines 4-5.
// Line 6: log "Done" still runs.</code></pre>
  `,

  /* --- Chunk 2: The Click --- */

  /* 2.0 Debugging clue */
  'topics-6-1-2-0': `
    <p>If your <code>if</code> block isn't running when you expected it to, log the condition itself to see what JavaScript is actually evaluating:</p>
<pre class="language-javascript"><code class="language-javascript">const input = "0";

console.log("input:", input, typeof input);
console.log("check:", input > 0);

if (input > 0) {
  console.log("positive");
}
// prints:
//   input: 0 string
//   check: false
//   (no "positive" printed)
// the input is the string "0", not the number 0 — comparisons might surprise you
// fix: convert with Number(input) before comparing</code></pre>

    <p>If the block is running when you didn't expect it to, the condition is probably truthy by accident — assignment instead of comparison, or an unexpected truthy value.</p>
  `,

  /* 2.1 The part that makes it click */
  'topics-6-1-2-1': `
    <p><code>if</code> isn't about "doing two things." It's about <strong>doing one thing only sometimes</strong>. The block either runs or it doesn't — there's no alternative path.</p>
    <p>Once you separate "<code>if</code> alone" from "<code>if/else</code> together," you stop forcing every conditional into a paired structure. Most real conditionals are just gates, not forks.</p>
  `,

  /* 2.2 Common confusions */
  'topics-6-1-2-2': `
    <p><strong>Confusion: <code>=</code> vs <code>===</code> in the condition</strong></p>
<pre class="language-javascript"><code class="language-javascript">if (status = "ready") { ... }     // wrong — assignment, ALWAYS true
if (status === "ready") { ... }   // right — comparison

// = sets status to "ready" and the expression evaluates to "ready" (truthy) → block always runs</code></pre>

    <p><strong>Confusion: missing braces, multiple lines</strong></p>
<pre class="language-javascript"><code class="language-javascript">if (isReady)
  start();
  cleanup();
// only start() is inside the if — cleanup() always runs
// fix: always use braces:
if (isReady) {
  start();
  cleanup();
}</code></pre>

    <p><strong>Confusion: truthy values that look "empty"</strong></p>
<pre class="language-javascript"><code class="language-javascript">if ([]) { console.log("yes"); }    // prints "yes" — empty array is truthy
if ({}) { console.log("yes"); }    // prints "yes" — empty object is truthy
if ("0") { console.log("yes"); }   // prints "yes" — string "0" is truthy

// for "is the array empty?", check length:
if (items.length === 0) { ... }    // explicit and unambiguous</code></pre>

    <p><strong>Confusion: <code>if</code> doesn't need an <code>else</code></strong></p>
<pre class="language-javascript"><code class="language-javascript">// totally fine — no else required
if (cart.length === 0) {
  showEmptyMessage();
}

// also fine — many ifs in a row, each independent
if (user.isLoggedIn) showDashboard();
if (cart.length > 0) showCheckout();
if (hasNewMessages) showBadge();</code></pre>

    <p><strong>Confusion: condition that's always true or always false</strong></p>
<pre class="language-javascript"><code class="language-javascript">if (true) { ... }       // always runs — useless gate
if (false) { ... }      // never runs — dead code
if (1) { ... }          // always runs (truthy)
if (0) { ... }          // never runs (falsy)
// these usually mean a logic mistake — make the condition real</code></pre>
  `,

  /* 2.3 Common mistakes */
  'topics-6-1-2-3': `
<pre class="language-javascript"><code class="language-javascript">if (status = "ready") { ... }
// wrong: = is assignment — block always runs
// fix: if (status === "ready")</code></pre>

<pre class="language-javascript"><code class="language-javascript">if (cart.length = 0) { ... }
// wrong: assigns 0 to cart.length, evaluates to 0 (falsy) — block NEVER runs
// fix: if (cart.length === 0)</code></pre>

<pre class="language-javascript"><code class="language-javascript">if isLoggedIn { ... }
// SyntaxError — condition must be in parens
// fix: if (isLoggedIn) { ... }</code></pre>

<pre class="language-javascript"><code class="language-javascript">if (isReady)
  start();
  cleanup();
// only start() is conditional — cleanup() always runs
// fix: wrap both in braces</code></pre>

<pre class="language-javascript"><code class="language-javascript">if (cartItems !== null && cartItems.length > 0) { ... }
// works, but redundant — null doesn't have .length, and null is already falsy
// fix: if (cartItems && cartItems.length > 0) — relies on truthiness</code></pre>

<pre class="language-javascript"><code class="language-javascript">if (input == 0) { ... }
// works for input = 0, but also runs for "" "0" false [] — == coerces aggressively
// fix: use === for predictable comparisons</code></pre>
  `,

  /* --- Chunk 3: In Practice --- */

  /* 3.0 Tiny examples */
  'topics-6-1-3-0': `
<pre class="language-javascript"><code class="language-javascript">// Basic if with a comparison
const age = 20;
if (age >= 18) {
  console.log("can vote");
}
// prints: "can vote"

// Truthy check
const name = "Os";
if (name) {
  console.log("got a name");
}
// prints: "got a name"

// Negation — runs when something is FALSY
const isLoading = false;
if (!isLoading) {
  console.log("not loading");
}
// prints: "not loading"

// Combining with &&
const isLoggedIn = true;
const hasNotifications = true;
if (isLoggedIn && hasNotifications) {
  console.log("show alerts");
}
// prints: "show alerts"

// Multiple statements in the block
if (cart.length > 0) {
  console.log("checking out");
  startCheckout();
  hideEmptyMessage();
}

// Multiple separate ifs — each independent
if (user.isLoggedIn) showDashboard();
if (cart.length > 0)  showCheckout();
if (hasMessages)      showBadge();</code></pre>
  `,

  /* 3.1 Real website uses */
  'topics-6-1-3-1': `
    <p><strong>Example: only show error if there is one</strong></p>
<pre class="language-javascript"><code class="language-javascript">function showFormErrors(errors) {
  if (errors.length === 0) {
    return;       // nothing to show — exit early
  }
  errorBox.textContent = errors.join(", ");
  errorBox.classList.add("visible");
}

showFormErrors(["Email is required"]);
// shows the error box

showFormErrors([]);
// nothing happens — function exits at the if</code></pre>

    <p><strong>Example: conditional setup</strong></p>
<pre class="language-javascript"><code class="language-javascript">let hasInitialized = false;

function initOnce() {
  if (hasInitialized) return;     // already done — exit
  loadConfig();
  attachListeners();
  hasInitialized = true;
}

initOnce();
initOnce();
initOnce();
// loadConfig + attachListeners only run on the first call</code></pre>

    <p><strong>Example: cleanup that's only needed sometimes</strong></p>
<pre class="language-javascript"><code class="language-javascript">function disconnect() {
  if (socket) {
    socket.close();
    socket = null;
  }
  if (timer) {
    clearTimeout(timer);
    timer = null;
  }
}

disconnect();
// each cleanup runs only if its target actually exists</code></pre>

    <p><strong>Example: progressive feature gating</strong></p>
<pre class="language-javascript"><code class="language-javascript">function setupApp() {
  setupBasicUI();

  if (window.IntersectionObserver) {
    setupLazyLoading();
  }

  if (navigator.serviceWorker) {
    registerServiceWorker();
  }

  if (user.isPremium) {
    enablePremiumFeatures();
  }
}
// each feature is only set up if the environment supports it</code></pre>
  `,

  /* 3.2 Connects to */
  'topics-6-1-3-2': `
    <ul>
      <li><strong><code>else</code></strong> → the optional fallback when <code>if</code> is false</li>
      <li><strong><code>else if</code></strong> → chains additional conditions onto an <code>if</code></li>
      <li><strong>Comparison operators</strong> → <code>===</code>, <code>!==</code>, <code>&lt;</code>, <code>&gt;</code></li>
      <li><strong>Logical operators</strong> → <code>&amp;&amp;</code>, <code>||</code>, <code>!</code></li>
      <li><strong>Truthy and falsy values</strong> → which values "count as true" in conditions</li>
      <li><strong>Boolean values</strong> → the literal <code>true</code> and <code>false</code></li>
      <li><strong>Guard clauses</strong> → <code>if</code> at the top of a function for early exit</li>
      <li><strong>Code blocks</strong> → the <code>{ }</code> that holds what runs</li>
    </ul>
  `,

  /* 3.3 See also */
  'topics-6-1-3-3': `
    <ul>
      <li><code>else</code></li>
      <li><code>else if</code></li>
      <li>Comparison operators</li>
      <li>Logical operators</li>
      <li>Truthy and falsy values</li>
      <li>Guard clauses</li>
      <li>Ternary operator (<code>? :</code>)</li>
      <li>Code blocks</li>
    </ul>
  `,


  /* ========================================================= 
   Sub-lesson: 3.7.3 If / Else → else if
 =======================================================*/

  /* --- Chunk 0: What & How --- */

  /* 0.0 What it is */
  'topics-6-2-0-0': `
    <p><code>else if</code> is a backup question. After the first <code>if</code> fails, <code>else if</code> asks another question — and runs its block only if both the first <code>if</code> was false and this new condition is true.</p>
    <p>You chain as many <code>else if</code> blocks as you need. JavaScript checks them top-to-bottom and stops at the first one that's true.</p>
  `,

  /* 0.1 Syntax */
  'topics-6-2-0-1': `
<pre class="language-javascript"><code class="language-javascript">const score = 75;

if (score >= 90) {
  console.log("A");
} else if (score >= 80) {
  console.log("B");
} else if (score >= 70) {
  console.log("C");
}

// prints: "C"</code></pre>
    <p>Each <code>else if</code> is a follow-up question. JavaScript checked <code>&gt;= 90</code> (false), then <code>&gt;= 80</code> (false), then <code>&gt;= 70</code> (true) and ran that block.</p>
  `,

  /* 0.2 Anatomy / Breakdown */
  'topics-6-2-0-2': `
<pre class="language-javascript"><code class="language-javascript">const day = "Wednesday";

if (day === "Saturday") {
  console.log("weekend");
} else if (day === "Sunday") {
  console.log("weekend");
} else if (day === "Friday") {
  console.log("almost weekend");
}

// prints nothing — none of the conditions matched

// if (day === "Saturday")    → first question (failed: day is "Wednesday")
// else if (day === "Sunday") → next question (also failed)
// else if (day === "Friday") → next question (also failed)
// no else at the end       → so nothing runs at all</code></pre>
    <p>An <code>else if</code> chain only runs <em>one</em> block: the first one whose condition is true. If none match, nothing runs (unless there's an <code>else</code> at the end).</p>
  `,

  /* 0.3 Syntax Details That Matter */
  'topics-6-2-0-3': `
    <p><code>else if</code> attaches to a previous <code>if</code> — it can't appear on its own:</p>
<pre class="language-javascript"><code class="language-javascript">// Wrong — else if needs an if before it
else if (score >= 80) { ... }

// Right
if (score >= 90) { ... }
else if (score >= 80) { ... }</code></pre>

    <p>Each <code>else if</code> takes its own condition in parens:</p>
<pre class="language-javascript"><code class="language-javascript">if (x === 1) { ... }
else if (x === 2) { ... }     // own condition
else if (x === 3) { ... }     // own condition
else if (x === 4) { ... }     // own condition</code></pre>

    <p>The chain can be any length, with or without a final <code>else</code>:</p>
<pre class="language-javascript"><code class="language-javascript">// With a final else (catch-all)
if (status === "active")    { ... }
else if (status === "paused") { ... }
else if (status === "ended")  { ... }
else                          { console.log("unknown status"); }

// Without a final else — nothing runs if no condition matches
if (status === "active")    { ... }
else if (status === "paused") { ... }</code></pre>

    <p>Order matters — JavaScript checks top to bottom and stops at the first match:</p>
<pre class="language-javascript"><code class="language-javascript">// Wrong order — broader condition first
const score = 95;
if (score >= 70) { console.log("passed"); }
else if (score >= 90) { console.log("aced it"); }
// prints: "passed" — never reaches "aced it"

// Right order — most specific first
if (score >= 90) { console.log("aced it"); }
else if (score >= 70) { console.log("passed"); }
// prints: "aced it"</code></pre>

    <p>The conditions don't have to share the same variable — each can ask anything:</p>
<pre class="language-javascript"><code class="language-javascript">if (user.isAdmin) {
  console.log("admin");
} else if (cart.length > 0) {
  console.log("shopper");
} else if (Date.now() > deadline) {
  console.log("expired");
}
// totally unrelated checks — perfectly valid</code></pre>
  `,

  /* --- Chunk 1: Why & When --- */

  /* 1.0 What problem it solves */
  'topics-6-2-1-0': `
    <p>An <code>if/else</code> only handles two cases — yes or no. But sometimes the real world has more options. A score is A, B, C, D, or F. A status could be active, paused, ended, archived. Just <code>if/else</code> isn't enough for these multi-way decisions.</p>
    <p><code>else if</code> lets you build a ladder of options. The first match wins, the rest are skipped.</p>
  `,

  /* 1.1 Why use it */
  'topics-6-2-1-1': `
    <p>Use <code>else if</code> when there are more than two outcomes that you want to handle as one chain — only one of them should run.</p>
<pre class="language-javascript"><code class="language-javascript">// Score → letter grade
function getGrade(score) {
  if (score >= 90)      return "A";
  else if (score >= 80) return "B";
  else if (score >= 70) return "C";
  else if (score >= 60) return "D";
  else                  return "F";
}

console.log(getGrade(85));
// prints: "B"

// Status → action
if (order.status === "pending")   notifyUser();
else if (order.status === "shipped") trackShipment();
else if (order.status === "delivered") askForReview();</code></pre>
    <p>The chain handles all the cases at once, and exactly one branch runs.</p>
  `,

  /* 1.2 Where you use it */
  'topics-6-2-1-2': `
    <p><code>else if</code> shows up wherever there are several mutually exclusive options to handle.</p>
<pre class="language-javascript"><code class="language-javascript">// Pricing tiers
function getDiscount(user) {
  if (user.tier === "platinum")    return 0.30;
  else if (user.tier === "gold")    return 0.20;
  else if (user.tier === "silver")  return 0.10;
  else                              return 0;
}

// UI states
function render(state) {
  if (state.isLoading)              showSpinner();
  else if (state.error)             showError(state.error);
  else if (state.items.length === 0) showEmptyMessage();
  else                              showItems(state.items);
}

// HTTP status handling
if (response.status === 200)        handleSuccess();
else if (response.status === 401)   redirectToLogin();
else if (response.status === 404)   show404();
else if (response.status >= 500)    showServerError();
else                                showGenericError();</code></pre>
  `,

  /* 1.3 Plain English explanation */
  'topics-6-2-1-3': `
    <p><code>else if</code> is "if that wasn't it, what about this?" You ask a question, and if the answer is no, you ask another one. Then another. Each <code>else if</code> is a follow-up.</p>
    <p>JavaScript walks down the list one question at a time. The moment one question gets a yes, it runs that block and stops asking. Everything after is skipped.</p>
    <p>It's how you handle multiple-choice decisions cleanly — without writing a separate <code>if</code> for each option.</p>
  `,

  /* 1.4 Mental model */
  'topics-6-2-1-4': `
    <p>An <code>else if</code> chain is a ladder. JavaScript climbs from top to bottom, checking each rung. The first <code>true</code> rung — that block runs. The rest are ignored.</p>
<pre class="language-javascript"><code class="language-javascript">// if (A?)        ──→ true → run A's block, EXIT
// else if (B?)   ──→ true → run B's block, EXIT
// else if (C?)   ──→ true → run C's block, EXIT
// else           ──→ run the fallback, EXIT
//
// only ONE rung runs. The rest are skipped entirely.</code></pre>
    <p>Once a condition matches, the climbing stops. JavaScript doesn't keep checking the rest — it doesn't even read them.</p>
  `,

  /* 1.5 Step-by-step walkthrough */
  'topics-6-2-1-5': `
<pre class="language-javascript"><code class="language-javascript">const temp = 72;

if (temp < 32) {
  console.log("freezing");
} else if (temp < 60) {
  console.log("cold");
} else if (temp < 80) {
  console.log("comfortable");
} else {
  console.log("hot");
}

// prints: "comfortable"

// JavaScript is thinking:
// Line 1: register temp, value 72.
// Line 3: see if (temp < 32) → 72 < 32 → false. Skip the block.
// Line 5: see else if (temp < 60) → 72 < 60 → false. Skip the block.
// Line 7: see else if (temp < 80) → 72 < 80 → true. Run THIS block.
// Line 8: log "comfortable".
// Line 9-11: skip the else — chain already matched. Done.</code></pre>
  `,

  /* --- Chunk 2: The Click --- */

  /* 2.0 Debugging clue */
  'topics-6-2-2-0': `
    <p>If your <code>else if</code> never seems to run, an earlier condition is probably catching the case first. Trace the conditions in order with logs:</p>
<pre class="language-javascript"><code class="language-javascript">const score = 95;

console.log("score:", score);
console.log(">= 70?", score >= 70);
console.log(">= 90?", score >= 90);

if (score >= 70) {
  console.log("→ passed");
} else if (score >= 90) {
  console.log("→ aced it");
}

// prints:
//   score: 95
//   >= 70? true
//   >= 90? true
//   → passed
// "aced it" never runs because >= 70 matched first
// fix: reorder — most specific condition first</code></pre>

    <p>Rule: in any <code>else if</code> chain, the most specific or restrictive condition should come first. Broader conditions should come later — they catch what the specific ones don't.</p>
  `,

  /* 2.1 The part that makes it click */
  'topics-6-2-2-1': `
    <p>An <code>if/else if/else</code> chain is one decision, not many. JavaScript walks the chain looking for the first <code>true</code>, runs that block, and exits. The whole chain is one unit.</p>
    <p>This is fundamentally different from writing several separate <code>if</code> statements (which we'll cover in the "separate if vs chain" lesson). The chain commits to one and only one branch.</p>
  `,

  /* 2.2 Common confusions */
  'topics-6-2-2-2': `
    <p><strong>Confusion: order matters</strong></p>
<pre class="language-javascript"><code class="language-javascript">const score = 95;

// Wrong order
if (score >= 70) console.log("passed");
else if (score >= 90) console.log("aced it");
// prints: "passed" — first match wins, "aced it" never runs

// Right order
if (score >= 90) console.log("aced it");
else if (score >= 70) console.log("passed");
// prints: "aced it"</code></pre>

    <p><strong>Confusion: <code>else if</code> vs <code>else</code> + new <code>if</code></strong></p>
<pre class="language-javascript"><code class="language-javascript">// These are NOT the same:
if (a) { ... } else if (b) { ... }       // one chain — only one runs
if (a) { ... } else { if (b) { ... } }   // also one chain (just nested) — same behavior

// vs
if (a) { ... } if (b) { ... }            // TWO separate ifs — both can run!</code></pre>

    <p><strong>Confusion: <code>else if</code> doesn't need its own <code>else</code></strong></p>
<pre class="language-javascript"><code class="language-javascript">// Totally fine — no else at the end
if (status === "ok")    handleOk();
else if (status === "warn") handleWarn();
else if (status === "fail") handleFail();
// nothing runs if status is anything else — that's allowed</code></pre>

    <p><strong>Confusion: each <code>else if</code> needs its own condition</strong></p>
<pre class="language-javascript"><code class="language-javascript">if (x > 0) { ... }
else if { ... }            // SyntaxError — missing condition
else if (x < 0) { ... }    // correct</code></pre>

    <p><strong>Confusion: only one branch runs — total</strong></p>
<pre class="language-javascript"><code class="language-javascript">const x = 5;

if (x > 0) console.log("positive");
else if (x > 3) console.log("greater than 3");
else if (x === 5) console.log("exactly 5");

// prints: "positive"
// only the first match runs — even though all three are true</code></pre>
  `,

  /* 2.3 Common mistakes */
  'topics-6-2-2-3': `
<pre class="language-javascript"><code class="language-javascript">if (score >= 70) console.log("passed");
else if (score >= 90) console.log("aced it");
// score 95 → "passed" wins, "aced it" never runs
// fix: reorder — check >= 90 first</code></pre>

<pre class="language-javascript"><code class="language-javascript">if (status === "ok") handleOk();
else (status === "fail") handleFail();
// wrong: else doesn't take a condition
// fix: else if (status === "fail") handleFail();</code></pre>

<pre class="language-javascript"><code class="language-javascript">else if (x > 0) { ... }
// wrong: else if can't start a chain — needs an if before it
// fix: if (...) { ... } else if (x > 0) { ... }</code></pre>

<pre class="language-javascript"><code class="language-javascript">if (a) { ... }
else if (b) { ... }
if (c) { ... }
// the second if breaks the chain — it's a SEPARATE conditional
// might be intentional, but easy to misread as part of the chain
// fix: keep all parts of one decision in one chain, separate by adding } between</code></pre>

<pre class="language-javascript"><code class="language-javascript">if (a)
  doA();
else if (b)
  doB();
  doSomethingElse();
// doSomethingElse() always runs — it's not part of doB's branch
// fix: use braces around each branch's body</code></pre>

<pre class="language-javascript"><code class="language-javascript">if (status = "active") { ... }
else if (status = "paused") { ... }
// wrong: = is assignment — first branch always runs
// fix: use === in every condition</code></pre>
  `,

  /* --- Chunk 3: In Practice --- */

  /* 3.0 Tiny examples */
  'topics-6-2-3-0': `
<pre class="language-javascript"><code class="language-javascript">// Score → letter grade
const score = 82;
if (score >= 90) {
  console.log("A");
} else if (score >= 80) {
  console.log("B");
} else if (score >= 70) {
  console.log("C");
} else {
  console.log("F");
}
// prints: "B"

// Day type
const day = "Saturday";
if (day === "Saturday" || day === "Sunday") {
  console.log("weekend");
} else if (day === "Friday") {
  console.log("almost weekend");
} else {
  console.log("weekday");
}
// prints: "weekend"

// Sign of a number
const n = -3;
if (n > 0) {
  console.log("positive");
} else if (n < 0) {
  console.log("negative");
} else {
  console.log("zero");
}
// prints: "negative"

// Status messages — no else at the end
const status = "active";
if (status === "active")  console.log("running");
else if (status === "paused") console.log("on hold");
else if (status === "ended")  console.log("finished");
// prints: "running"</code></pre>
  `,

  /* 3.1 Real website uses */
  'topics-6-2-3-1': `
    <p><strong>Example: render based on UI state</strong></p>
<pre class="language-javascript"><code class="language-javascript">function render(state) {
  if (state.isLoading) {
    showSpinner();
  } else if (state.error) {
    showError(state.error);
  } else if (state.items.length === 0) {
    showEmptyMessage();
  } else {
    showItems(state.items);
  }
}
// exactly one branch handles each possible state</code></pre>

    <p><strong>Example: pricing tiers</strong></p>
<pre class="language-javascript"><code class="language-javascript">function getShippingCost(orderTotal) {
  if (orderTotal >= 100) {
    return 0;       // free shipping
  } else if (orderTotal >= 50) {
    return 5;
  } else {
    return 10;
  }
}

console.log(getShippingCost(75));
// prints: 5</code></pre>

    <p><strong>Example: HTTP response handling</strong></p>
<pre class="language-javascript"><code class="language-javascript">async function loadUser(id) {
  const response = await fetch("/api/users/" + id);
  
  if (response.status === 200) {
    return response.json();
  } else if (response.status === 401) {
    redirectToLogin();
  } else if (response.status === 404) {
    showError("User not found");
  } else if (response.status >= 500) {
    showError("Server error, try again");
  } else {
    showError("Something went wrong");
  }
}</code></pre>

    <p><strong>Example: time-of-day greeting</strong></p>
<pre class="language-javascript"><code class="language-javascript">function getGreeting() {
  const hour = new Date().getHours();
  
  if (hour < 12) {
    return "Good morning";
  } else if (hour < 17) {
    return "Good afternoon";
  } else if (hour < 21) {
    return "Good evening";
  } else {
    return "Good night";
  }
}

console.log(getGreeting());
// prints something like: "Good afternoon"</code></pre>
  `,

  /* 3.2 Connects to */
  'topics-6-2-3-2': `
    <ul>
      <li><strong><code>if</code></strong> → starts the chain</li>
      <li><strong><code>else</code></strong> → optional fallback at the end</li>
      <li><strong>Condition order</strong> → most specific first</li>
      <li><strong>Comparison operators</strong> → drive each condition</li>
      <li><strong>Logical operators</strong> → combine conditions</li>
      <li><strong>Switch statements</strong> → an alternative when comparing one value to many</li>
      <li><strong>Only one branch runs</strong> → the chain commits to one</li>
      <li><strong>Separate ifs vs chains</strong> → different patterns, different behavior</li>
    </ul>
  `,

  /* 3.3 See also */
  'topics-6-2-3-3': `
    <ul>
      <li><code>if</code></li>
      <li><code>else</code></li>
      <li><code>switch</code></li>
      <li>Condition order matters</li>
      <li>Only one branch runs</li>
      <li>Separate <code>if</code> vs <code>else if</code> chain</li>
      <li>Comparison operators</li>
      <li>Logical operators</li>
    </ul>
  `,


  /* ========================================================= 
   Sub-lesson: 3.7.4 If / Else → else
 =======================================================*/

  /* --- Chunk 0: What & How --- */

  /* 0.0 What it is */
  'topics-6-3-0-0': `
    <p><code>else</code> is the fallback at the end of an <code>if</code> or <code>if/else if</code> chain. It runs when nothing else matched.</p>
    <p>It doesn't take a condition — it's the "everything else" branch. If every <code>if</code> and <code>else if</code> above it was false, the <code>else</code> block runs.</p>
  `,

  /* 0.1 Syntax */
  'topics-6-3-0-1': `
<pre class="language-javascript"><code class="language-javascript">const age = 16;

if (age >= 18) {
  console.log("adult");
} else {
  console.log("minor");
}

// prints: "minor"</code></pre>
    <p>The <code>if</code> condition was false (16 isn't &gt;= 18), so JavaScript skipped the first block and ran the <code>else</code> block instead. <code>else</code> is the catch-all for "if didn't match."</p>
  `,

  /* 0.2 Anatomy / Breakdown */
  'topics-6-3-0-2': `
<pre class="language-javascript"><code class="language-javascript">const status = "unknown";

if (status === "active") {
  console.log("running");
} else if (status === "paused") {
  console.log("on hold");
} else {
  console.log("status not recognized");
}

// prints: "status not recognized"

// if (status === "active")    → first question — false, skip
// else if (status === "paused") → backup question — also false, skip
// else                          → fallback — no condition, just runs
// { ... }                       → block runs because everything above failed</code></pre>
    <p><code>else</code> has no parentheses and no condition. It's the catch-all that runs when none of the previous checks matched.</p>
  `,

  /* 0.3 Syntax Details That Matter */
  'topics-6-3-0-3': `
    <p><code>else</code> doesn't take parentheses or a condition:</p>
<pre class="language-javascript"><code class="language-javascript">if (x > 0) { ... } else { ... }       // correct
if (x > 0) { ... } else (x < 0) { ... } // wrong — else doesn't take a condition

// for an alternate condition, use else if:
if (x > 0) { ... } else if (x < 0) { ... }</code></pre>

    <p><code>else</code> always pairs with a previous <code>if</code> (or <code>else if</code>):</p>
<pre class="language-javascript"><code class="language-javascript">// Wrong — else can't stand alone
else { ... }

// Right
if (...) { ... }
else { ... }</code></pre>

    <p>There's at most one <code>else</code> in a chain — and it's always at the very end:</p>
<pre class="language-javascript"><code class="language-javascript">if (a) { ... }
else if (b) { ... }
else { ... }            // single else, comes last

// Wrong — multiple else, or else not at the end
if (a) { ... }
else { ... }
else if (b) { ... }     // SyntaxError</code></pre>

    <p><code>else</code> is optional — you can leave it off if there's nothing to do when nothing matches:</p>
<pre class="language-javascript"><code class="language-javascript">// With else
if (cart.length > 0) {
  showCheckout();
} else {
  showEmptyMessage();
}

// Without else — nothing happens if condition is false
if (cart.length > 0) {
  showCheckout();
}</code></pre>

    <p>The <code>else</code> block has its own braces and runs independently of the others:</p>
<pre class="language-javascript"><code class="language-javascript">if (user.isLoggedIn) {
  showDashboard();
  loadUserData();
} else {
  showLoginForm();
  trackVisitor();
}
// each block has its own work; only one block runs in any given pass</code></pre>
  `,

  /* --- Chunk 1: Why & When --- */

  /* 1.0 What problem it solves */
  'topics-6-3-1-0': `
    <p>Sometimes "the condition was false" needs its own response. If the user is logged in, show the dashboard — but if they're not, show the login form. If the cart has items, show checkout — but if it's empty, show a message.</p>
    <p><code>else</code> is the way to say "and if none of the above is true, do this instead." It catches every case the <code>if</code> chain didn't handle.</p>
  `,

  /* 1.1 Why use it */
  'topics-6-3-1-1': `
    <p>Use <code>else</code> when there's a clear "otherwise" path — something that should happen specifically when the <code>if</code> wasn't true.</p>
<pre class="language-javascript"><code class="language-javascript">// Show dashboard OR login
if (user.isLoggedIn) {
  showDashboard();
} else {
  showLoginForm();
}

// Allow OR block
if (user.canEdit) {
  enableEditMode();
} else {
  showReadOnly();
}

// Save OR cancel
if (form.isValid) {
  saveData();
} else {
  showErrors();
}</code></pre>
    <p>Skip <code>else</code> when nothing needs to happen in the false case — a standalone <code>if</code> is cleaner.</p>
  `,

  /* 1.2 Where you use it */
  'topics-6-3-1-2': `
    <p><code>else</code> shows up wherever a clear binary decision needs both paths handled.</p>
<pre class="language-javascript"><code class="language-javascript">// Toggle UI
if (sidebar.classList.contains("open")) {
  sidebar.classList.remove("open");
} else {
  sidebar.classList.add("open");
}

// Default behavior
function getDiscount(user) {
  if (user.isPremium) {
    return 0.20;
  } else {
    return 0;          // default for everyone else
  }
}

// Branching messages
if (response.ok) {
  showSuccess("Saved!");
} else {
  showError("Something went wrong");
}

// Catch-all in a longer chain
if (status === "ok")        handleOk();
else if (status === "warn") handleWarn();
else if (status === "fail") handleFail();
else                        handleUnknown();   // fallback for any other status</code></pre>
  `,

  /* 1.3 Plain English explanation */
  'topics-6-3-1-3': `
    <p><code>else</code> is "otherwise." It's the response when the question turned out to be no — when none of the conditions above matched.</p>
    <p>It doesn't ask its own question. It's just the catch-all block. If JavaScript walked all the way down the chain without finding a true condition, the <code>else</code> block is what runs.</p>
    <p>If you don't have anything specific to do in the "otherwise" case, you can leave <code>else</code> off entirely. It's only there when you want a clear fallback.</p>
  `,

  /* 1.4 Mental model */
  'topics-6-3-1-4': `
    <p><code>else</code> is the safety net at the bottom of the chain.</p>
<pre class="language-javascript"><code class="language-javascript">// if (A?)        ──→ true → run A's block, EXIT
// else if (B?)   ──→ true → run B's block, EXIT
// else if (C?)   ──→ true → run C's block, EXIT
// else           ──→ catch-all: run this if nothing matched
//
// without else: if nothing matched, nothing runs at all
// with else:    you're guaranteed to run exactly one block</code></pre>
    <p>The presence of <code>else</code> guarantees that <em>one</em> block will run. Without it, all the conditions can be false and the whole chain just does nothing.</p>
  `,

  /* 1.5 Step-by-step walkthrough */
  'topics-6-3-1-5': `
<pre class="language-javascript"><code class="language-javascript">const cartCount = 0;

if (cartCount > 0) {
  console.log("ready to checkout");
} else {
  console.log("your cart is empty");
}

// prints: "your cart is empty"

// JavaScript is thinking:
// Line 1: register cartCount, value 0.
// Line 3: see if (cartCount > 0) → check 0 > 0 → false. Skip the block.
// Line 5: see else → no condition to check, this is the catch-all. Run THIS block.
// Line 6: log "your cart is empty".
// Line 7: end of the if/else. Code continues normally.</code></pre>
  `,

  /* --- Chunk 2: The Click --- */

  /* 2.0 Debugging clue */
  'topics-6-3-2-0': `
    <p>If your <code>else</code> branch runs when you didn't expect it to, your <code>if</code> condition was false — log the condition to see why:</p>
<pre class="language-javascript"><code class="language-javascript">const isReady = "false";   // string, not boolean

console.log("isReady:", isReady, typeof isReady);
console.log("check:", !!isReady);

if (isReady) {
  console.log("starting");
} else {
  console.log("not ready");
}

// prints:
//   isReady: false string
//   check: true
//   starting
// "false" the STRING is truthy! the if branch ran, even though it looks like it shouldn't
// fix: don't store booleans as strings, or convert with === "true"</code></pre>

    <p>If <code>else</code> never seems to run, the <code>if</code> condition is always truthy — usually an assignment (<code>=</code>) instead of a comparison (<code>===</code>), or an unexpected truthy value.</p>
  `,

  /* 2.1 The part that makes it click */
  'topics-6-3-2-1': `
    <p><code>else</code> isn't a question. It's the answer to <em>"if not, then what?"</em></p>
    <p>That's why it doesn't take a condition. The condition was already asked — by the <code>if</code> above. <code>else</code> just covers everything that wasn't a yes.</p>
    <p>And once you've matched any branch in the chain — including <code>else</code> — the rest are skipped. The chain commits to one path.</p>
  `,

  /* 2.2 Common confusions */
  'topics-6-3-2-2': `
    <p><strong>Confusion: <code>else</code> doesn't take a condition</strong></p>
<pre class="language-javascript"><code class="language-javascript">if (x > 0) { ... }
else (x < 0) { ... }       // wrong — else doesn't take parens with a condition
else { ... }               // right — just the catch-all
else if (x < 0) { ... }    // right — if you want a condition, use else if</code></pre>

    <p><strong>Confusion: <code>else</code> matches the nearest <code>if</code></strong></p>
<pre class="language-javascript"><code class="language-javascript">if (a)
  if (b) console.log("both");
else console.log("not a");
// the else attaches to the INNER if (b), not the outer if (a)
// fix: use braces to make scope explicit
if (a) {
  if (b) console.log("both");
} else {
  console.log("not a");
}</code></pre>

    <p><strong>Confusion: <code>else</code> isn't required</strong></p>
<pre class="language-javascript"><code class="language-javascript">// Both are valid
if (cart.length > 0) {
  showCheckout();
}

if (cart.length > 0) {
  showCheckout();
} else {
  showEmptyMessage();
}
// no else means "do nothing if false" — that's a perfectly fine choice</code></pre>

    <p><strong>Confusion: only one block runs</strong></p>
<pre class="language-javascript"><code class="language-javascript">if (x > 0) {
  console.log("positive");
} else {
  console.log("not positive");
}
// if x is 5, only "positive" prints — never both</code></pre>

    <p><strong>Confusion: <code>else</code> in a chain catches "everything else"</strong></p>
<pre class="language-javascript"><code class="language-javascript">if (status === "active")     handleActive();
else if (status === "paused") handlePaused();
else                          handleAnythingElse();
// else covers status being "ended", "archived", null, undefined, anything not handled above
// it's not just for "no status" — it's for ANY case the chain didn't match</code></pre>
  `,

  /* 2.3 Common mistakes */
  'topics-6-3-2-3': `
<pre class="language-javascript"><code class="language-javascript">if (x > 0) { ... }
else (x < 0) { ... }
// wrong: else doesn't take a condition
// fix: else if (x < 0) { ... }</code></pre>

<pre class="language-javascript"><code class="language-javascript">else { console.log("nope"); }
// SyntaxError — else has no preceding if
// fix: pair with an if first</code></pre>

<pre class="language-javascript"><code class="language-javascript">if (x > 0) { ... }
else { ... }
else { ... }
// SyntaxError — only one else allowed per chain
// fix: use else if for additional branches, only one final else</code></pre>

<pre class="language-javascript"><code class="language-javascript">if (a)
  doA();
else
  doB();
  doSomething();
// doSomething() always runs — only doB() is part of the else
// fix: wrap in braces — else { doB(); doSomething(); }</code></pre>

<pre class="language-javascript"><code class="language-javascript">if (status === "ok") { ... }
else if (status === "fail") { ... }
// no else at the end — fine if intentional, but a bug if you forgot to handle other cases
// fix: add an else if you want a guaranteed fallback</code></pre>

<pre class="language-javascript"><code class="language-javascript">if (a)
  if (b) doX();
else doY();
// confusing — the else attaches to the INNER if(b), not the outer if(a)
// fix: always use braces with nested ifs:
//   if (a) { if (b) doX(); } else { doY(); }</code></pre>
  `,

  /* --- Chunk 3: In Practice --- */

  /* 3.0 Tiny examples */
  'topics-6-3-3-0': `
<pre class="language-javascript"><code class="language-javascript">// Basic if/else
const age = 16;
if (age >= 18) {
  console.log("adult");
} else {
  console.log("minor");
}
// prints: "minor"

// else as the catch-all of a chain
const grade = 65;
if (grade >= 90)      console.log("A");
else if (grade >= 80) console.log("B");
else if (grade >= 70) console.log("C");
else                  console.log("below 70");
// prints: "below 70"

// else as the default in a function
function classify(n) {
  if (n > 0) {
    return "positive";
  } else if (n < 0) {
    return "negative";
  } else {
    return "zero";
  }
}
classify(0);
// returns: "zero"

// Skipping else when nothing's needed
if (cart.length > 0) {
  showCheckout();
}
// no else — if cart is empty, nothing happens

// Toggle pattern
if (menu.classList.contains("open")) {
  menu.classList.remove("open");
} else {
  menu.classList.add("open");
}</code></pre>
  `,

  /* 3.1 Real website uses */
  'topics-6-3-3-1': `
    <p><strong>Example: login state</strong></p>
<pre class="language-javascript"><code class="language-javascript">if (user.isLoggedIn) {
  dashboard.style.display = "block";
  loginForm.style.display = "none";
} else {
  dashboard.style.display = "none";
  loginForm.style.display = "block";
}</code></pre>

    <p><strong>Example: form submit</strong></p>
<pre class="language-javascript"><code class="language-javascript">if (formIsValid()) {
  submitForm();
} else {
  highlightErrors();
  showErrorMessage("Please fix the highlighted fields");
}</code></pre>

    <p><strong>Example: response handling fallback</strong></p>
<pre class="language-javascript"><code class="language-javascript">async function loadData() {
  const response = await fetch("/api/data");
  
  if (response.ok) {
    const data = await response.json();
    render(data);
  } else {
    showError("Could not load data");
  }
}</code></pre>

    <p><strong>Example: feature gate with default</strong></p>
<pre class="language-javascript"><code class="language-javascript">function getMaxUploadSize(user) {
  if (user.isPremium) {
    return 1000;     // 1GB for premium
  } else if (user.isPro) {
    return 100;       // 100MB for pro
  } else {
    return 10;        // 10MB for everyone else
  }
}

console.log(getMaxUploadSize({ isPremium: false, isPro: false }));
// prints: 10</code></pre>
  `,

  /* 3.2 Connects to */
  'topics-6-3-3-2': `
    <ul>
      <li><strong><code>if</code></strong> → <code>else</code> always pairs with a preceding <code>if</code></li>
      <li><strong><code>else if</code></strong> → adds more questions before <code>else</code></li>
      <li><strong>One branch runs</strong> → including <code>else</code>, exactly one block runs (when present)</li>
      <li><strong>Optional fallback</strong> → <code>else</code> isn't required</li>
      <li><strong>Truthy and falsy</strong> → what makes the <code>if</code> condition fail (and <code>else</code> trigger)</li>
      <li><strong>Comparison operators</strong> → drive the original <code>if</code> condition</li>
      <li><strong>Ternary operator</strong> → a one-line shortcut for simple <code>if/else</code></li>
      <li><strong>Default behavior</strong> → <code>else</code> often holds the default case</li>
    </ul>
  `,

  /* 3.3 See also */
  'topics-6-3-3-3': `
    <ul>
      <li><code>if</code></li>
      <li><code>else if</code></li>
      <li><code>switch</code></li>
      <li>Ternary operator (<code>? :</code>)</li>
      <li>Default values</li>
      <li>Truthy and falsy</li>
      <li>Dangling else problem</li>
      <li>Code blocks</li>
    </ul>
  `,


  /* ========================================================= 
   Sub-lesson: 3.7.5 If / Else → switch
 =======================================================*/

  /* --- Chunk 0: What & How --- */

  /* 0.0 What it is */
  'topics-6-4-0-0': `
    <p><code>switch</code> is an alternative to a long <code>if/else if</code> chain when you're comparing one value against many specific options. You give it a value, list out the cases you care about, and it runs the block that matches.</p>
    <p>It's most useful when every branch is "is this value equal to X?" — like a status string, a menu choice, or a key code.</p>
  `,

  /* 0.1 Syntax */
  'topics-6-4-0-1': `
<pre class="language-javascript"><code class="language-javascript">const day = "Wednesday";

switch (day) {
  case "Monday":
    console.log("start of week");
    break;
  case "Wednesday":
    console.log("midweek");
    break;
  case "Friday":
    console.log("almost weekend");
    break;
  default:
    console.log("regular day");
}

// prints: "midweek"</code></pre>
    <p>JavaScript checks <code>day</code> against each <code>case</code> in order. When it finds a match, it runs that block until it hits <code>break</code>. If nothing matches, the <code>default</code> block runs.</p>
  `,

  /* 0.2 Anatomy / Breakdown */
  'topics-6-4-0-2': `
<pre class="language-javascript"><code class="language-javascript">const status = "shipped";

switch (status) {
  case "pending":
    console.log("awaiting payment");
    break;
  case "shipped":
    console.log("on the way");
    break;
  case "delivered":
    console.log("arrived");
    break;
  default:
    console.log("unknown status");
}

// prints: "on the way"

// switch (status)        → the value being checked
// case "pending":         → first option to compare against
// console.log(...)        → the block that runs if this case matches
// break                   → stops the switch — without this, JS keeps going!
// default                 → fallback if no case matches (like else)
// no break after default  → optional, since it's the last block anyway</code></pre>
    <p>Each <code>case</code> is followed by a colon, then the code to run, then <code>break</code> to exit. <code>default</code> is the catch-all at the end — it runs when no case matches.</p>
  `,

  /* 0.3 Syntax Details That Matter */
  'topics-6-4-0-3': `
    <p><code>switch</code> uses strict equality (<code>===</code>) — same rules as <code>===</code> in conditions:</p>
<pre class="language-javascript"><code class="language-javascript">switch (5) {
  case "5":
    console.log("string");    // does NOT match — different types
    break;
  case 5:
    console.log("number");    // matches
    break;
}
// prints: "number"</code></pre>

    <p><code>break</code> is critical — without it, execution "falls through" to the next case:</p>
<pre class="language-javascript"><code class="language-javascript">switch ("a") {
  case "a":
    console.log("A");
    // no break!
  case "b":
    console.log("B");      // also runs because of fall-through
    break;
  case "c":
    console.log("C");
    break;
}
// prints: "A" then "B" — the missing break leaks through</code></pre>

    <p>Intentional fall-through can group cases that share behavior:</p>
<pre class="language-javascript"><code class="language-javascript">switch (day) {
  case "Saturday":
  case "Sunday":
    console.log("weekend");
    break;
  case "Monday":
  case "Tuesday":
  case "Wednesday":
  case "Thursday":
  case "Friday":
    console.log("weekday");
    break;
}
// each case stacks. The block runs once when any of them matches.</code></pre>

    <p><code>default</code> is optional and can technically appear anywhere, but always put it last:</p>
<pre class="language-javascript"><code class="language-javascript">switch (status) {
  case "ok":   handleOk();   break;
  case "warn": handleWarn(); break;
  default:     handleOther();
  // break is optional here — nothing comes after
}</code></pre>

    <p>You can wrap a case's block in braces to declare local variables safely:</p>
<pre class="language-javascript"><code class="language-javascript">switch (action) {
  case "create": {
    const id = generateId();
    saveItem(id);
    break;
  }
  case "delete": {
    const id = getCurrentId();      // can reuse "id" name — own scope
    deleteItem(id);
    break;
  }
}
// without the braces, "id" in one case would conflict with "id" in another</code></pre>
  `,

  /* --- Chunk 1: Why & When --- */

  /* 1.0 What problem it solves */
  'topics-6-4-1-0': `
    <p>When you're checking one value against many specific options — <code>"a"</code>, <code>"b"</code>, <code>"c"</code> — an <code>if/else if</code> chain gets repetitive. You write the same comparison ("is x equal to...") over and over.</p>
    <p><code>switch</code> says "look at this value once, then list the options." It's flatter and clearer when the question is always "is the value equal to X?"</p>
  `,

  /* 1.1 Why use it */
  'topics-6-4-1-1': `
    <p>Use <code>switch</code> when you're comparing one value to many fixed options that you can list ahead of time.</p>
<pre class="language-javascript"><code class="language-javascript">// Repetitive with if/else
function getDayType(day) {
  if (day === "Saturday")      return "weekend";
  else if (day === "Sunday")    return "weekend";
  else if (day === "Friday")    return "almost weekend";
  else if (day === "Monday")    return "start of week";
  else                          return "weekday";
}

// Cleaner with switch
function getDayType(day) {
  switch (day) {
    case "Saturday":
    case "Sunday":
      return "weekend";
    case "Friday":
      return "almost weekend";
    case "Monday":
      return "start of week";
    default:
      return "weekday";
  }
}</code></pre>
    <p>Reach for <code>if/else if</code> when the conditions are different kinds of checks (range, type, complex logic). Reach for <code>switch</code> when you're just matching one value against a list.</p>
  `,

  /* 1.2 Where you use it */
  'topics-6-4-1-2': `
    <p><code>switch</code> shows up most when handling specific string or number values — statuses, action types, key codes, route names.</p>
<pre class="language-javascript"><code class="language-javascript">// Action handlers
switch (action.type) {
  case "ADD_ITEM":     return state.concat(action.item);
  case "REMOVE_ITEM":  return state.filter(i => i.id !== action.id);
  case "CLEAR":        return [];
  default:             return state;
}

// Keyboard shortcuts
switch (event.key) {
  case "Escape":       closeModal(); break;
  case "Enter":        submit(); break;
  case "ArrowUp":      moveSelection(-1); break;
  case "ArrowDown":    moveSelection(1); break;
}

// HTTP status categories
switch (Math.floor(response.status / 100)) {
  case 2: handleSuccess(); break;
  case 4: handleClientError(); break;
  case 5: handleServerError(); break;
  default: handleUnknown();
}</code></pre>
  `,

  /* 1.3 Plain English explanation */
  'topics-6-4-1-3': `
    <p><code>switch</code> is a way to handle "this could be one of several specific things." You hand it a value at the top, then list the options below. Whichever option matches, that block runs.</p>
    <p>Two things make <code>switch</code> different from <code>if</code>: it always compares against one specific value, and it has an unusual quirk called "fall-through" — without <code>break</code>, execution leaks into the next case. Always include <code>break</code> at the end of each case unless you're intentionally grouping them.</p>
    <p>Most of the time, <code>if/else if</code> can do the same job. <code>switch</code> just looks cleaner when you're matching against a flat list of values.</p>
  `,

  /* 1.4 Mental model */
  'topics-6-4-1-4': `
    <p>A <code>switch</code> is a labeled menu. You point at one item at the top; JavaScript runs straight down the menu and stops at the matching label.</p>
<pre class="language-javascript"><code class="language-javascript">// switch (value)
//   case "A":   block A    break;   ← if value === "A", run this and exit
//   case "B":   block B    break;   ← if value === "B", run this and exit
//   case "C":   block C    break;   ← if value === "C", run this and exit
//   default:    fallback           ← if nothing matched, run this</code></pre>
    <p>Without <code>break</code>, JavaScript falls through and keeps running the next labels too — sometimes useful (grouping cases), but the source of most <code>switch</code> bugs.</p>
  `,

  /* 1.5 Step-by-step walkthrough */
  'topics-6-4-1-5': `
<pre class="language-javascript"><code class="language-javascript">const action = "save";

switch (action) {
  case "create":
    console.log("creating");
    break;
  case "save":
    console.log("saving");
    break;
  case "delete":
    console.log("deleting");
    break;
  default:
    console.log("unknown action");
}

// prints: "saving"

// JavaScript is thinking:
// Line 1: register action, value "save".
// Line 3: see switch (action) → start matching against "save".
// Line 4: case "create" → "save" === "create" → false. Skip.
// Line 7: case "save" → "save" === "save" → true. Run THIS block.
// Line 8: log "saving".
// Line 9: see break → stop the whole switch. Skip the rest of the cases.
// Lines 10-15: never checked or run.</code></pre>
  `,

  /* --- Chunk 2: The Click --- */

  /* 2.0 Debugging clue */
  'topics-6-4-2-0': `
    <p>If multiple cases run when only one should, you forgot a <code>break</code>:</p>
<pre class="language-javascript"><code class="language-javascript">switch ("a") {
  case "a":
    console.log("a");
    // forgot break here!
  case "b":
    console.log("b");      // runs anyway — fall-through
    break;
  case "c":
    console.log("c");
    break;
}
// prints:
//   a
//   b
// fix: add break after the first case</code></pre>

    <p>If your case never matches when it should, check the type — <code>switch</code> uses strict equality, so <code>5</code> and <code>"5"</code> are different. Log <code>typeof value</code> alongside the value itself.</p>
  `,

  /* 2.1 The part that makes it click */
  'topics-6-4-2-1': `
    <p><code>switch</code> is one comparison, listed many ways. It checks the same value against each <code>case</code> using <code>===</code>, and runs the first match — but unlike an <code>if/else</code> chain, it keeps running past the match until it hits <code>break</code>.</p>
    <p>That fall-through behavior is the main thing that trips people up. Once you internalize "<code>case</code> + work + <code>break</code>" as one unit, <code>switch</code> becomes a clean tool for fixed-value branching.</p>
  `,

  /* 2.2 Common confusions */
  'topics-6-4-2-2': `
    <p><strong>Confusion: missing <code>break</code></strong></p>
<pre class="language-javascript"><code class="language-javascript">switch (level) {
  case 1: console.log("low");
  case 2: console.log("medium");
  case 3: console.log("high");
}
// level = 1 prints "low" "medium" "high" all together
// always include break unless you intentionally want fall-through</code></pre>

    <p><strong>Confusion: <code>switch</code> uses <code>===</code></strong></p>
<pre class="language-javascript"><code class="language-javascript">switch (5) {
  case "5":
    console.log("string match");    // doesn't run — types differ
    break;
  case 5:
    console.log("number match");    // runs
    break;
}
// switch is strict — like ===, not ==</code></pre>

    <p><strong>Confusion: intentional fall-through is allowed</strong></p>
<pre class="language-javascript"><code class="language-javascript">switch (day) {
  case "Saturday":
  case "Sunday":
    return "weekend";
  case "Monday":
  case "Tuesday":
  case "Wednesday":
  case "Thursday":
  case "Friday":
    return "weekday";
}
// stacking cases without breaks groups them — same block handles all
// this is the ONE place fall-through is normal</code></pre>

    <p><strong>Confusion: <code>switch</code> isn't a great fit for ranges</strong></p>
<pre class="language-javascript"><code class="language-javascript">// Bad fit for switch — checking ranges of a number
function getGrade(score) {
  switch (true) {            // forced switch — awkward
    case score >= 90: return "A";
    case score >= 80: return "B";
    default: return "F";
  }
}

// Better with if/else if
function getGrade(score) {
  if (score >= 90) return "A";
  else if (score >= 80) return "B";
  else return "F";
}</code></pre>

    <p><strong>Confusion: <code>default</code> placement</strong></p>
<pre class="language-javascript"><code class="language-javascript">// default can technically go anywhere, but ALWAYS put it last for readability:
switch (x) {
  case 1: handleOne(); break;
  case 2: handleTwo(); break;
  default: handleOther();
}</code></pre>
  `,

  /* 2.3 Common mistakes */
  'topics-6-4-2-3': `
<pre class="language-javascript"><code class="language-javascript">switch (status) {
  case "ok":
    console.log("good");
  case "fail":
    console.log("bad");
    break;
}
// status "ok" prints both "good" and "bad" — fall-through bug
// fix: add break after the first case</code></pre>

<pre class="language-javascript"><code class="language-javascript">switch (n) {
  case 1: ...; break;
  case "1": ...; break;     // never matches if n is the number 1
}
// switch uses === — types matter
// fix: pick one type and stick with it</code></pre>

<pre class="language-javascript"><code class="language-javascript">switch (action.type)
  case "ADD": ...;
  break;
// SyntaxError — body of switch must be in { }
// fix: wrap cases in braces:
//   switch (action.type) {
//     case "ADD": ...; break;
//   }</code></pre>

<pre class="language-javascript"><code class="language-javascript">switch (x) {
  case 1:
    const y = 5;
    break;
  case 2:
    const y = 10;     // SyntaxError — y already declared in same scope
    break;
}
// fix: wrap each case's body in braces to give it its own scope
//   case 1: { const y = 5; break; }
//   case 2: { const y = 10; break; }</code></pre>

<pre class="language-javascript"><code class="language-javascript">switch (score) {
  case score >= 90: console.log("A"); break;
  case score >= 80: console.log("B"); break;
}
// switch tests value === case-expression — comparing booleans here is awkward
// fix: use if/else if for ranges</code></pre>

<pre class="language-javascript"><code class="language-javascript">switch (status) {
  case "ok": handleOk(); break;
  case "fail": handleFail(); break;
}
// no default — silently does nothing for unknown status
// fix: add default to handle unexpected values</code></pre>
  `,

  /* --- Chunk 3: In Practice --- */

  /* 3.0 Tiny examples */
  'topics-6-4-3-0': `
<pre class="language-javascript"><code class="language-javascript">// Basic switch
const fruit = "apple";
switch (fruit) {
  case "apple":  console.log("red"); break;
  case "banana": console.log("yellow"); break;
  case "grape":  console.log("purple"); break;
  default:       console.log("unknown color");
}
// prints: "red"

// Grouping cases (intentional fall-through)
const day = "Saturday";
switch (day) {
  case "Saturday":
  case "Sunday":
    console.log("weekend");
    break;
  default:
    console.log("weekday");
}
// prints: "weekend"

// Returning from cases (no break needed)
function getEmoji(mood) {
  switch (mood) {
    case "happy":   return "😀";
    case "sad":     return "😢";
    case "angry":   return "😠";
    default:        return "🤔";
  }
}
console.log(getEmoji("happy"));
// prints: "😀"

// Number cases
const status = 200;
switch (status) {
  case 200: console.log("OK"); break;
  case 404: console.log("Not Found"); break;
  case 500: console.log("Server Error"); break;
  default:  console.log("Other status");
}
// prints: "OK"</code></pre>
  `,

  /* 3.1 Real website uses */
  'topics-6-4-3-1': `
    <p><strong>Example: keyboard handler</strong></p>
<pre class="language-javascript"><code class="language-javascript">document.addEventListener("keydown", (event) => {
  switch (event.key) {
    case "Escape":
      closeModal();
      break;
    case "Enter":
      submitForm();
      break;
    case "ArrowUp":
      moveSelection(-1);
      break;
    case "ArrowDown":
      moveSelection(1);
      break;
  }
});</code></pre>

    <p><strong>Example: order status badge</strong></p>
<pre class="language-javascript"><code class="language-javascript">function getStatusBadge(status) {
  switch (status) {
    case "pending":   return { text: "Pending",   color: "yellow" };
    case "shipped":   return { text: "Shipped",   color: "blue" };
    case "delivered": return { text: "Delivered", color: "green" };
    case "cancelled": return { text: "Cancelled", color: "gray" };
    default:          return { text: "Unknown",   color: "red" };
  }
}

const badge = getStatusBadge("shipped");
console.log(badge);
// prints: { text: "Shipped", color: "blue" }</code></pre>

    <p><strong>Example: simple state reducer</strong></p>
<pre class="language-javascript"><code class="language-javascript">function reducer(state, action) {
  switch (action.type) {
    case "INCREMENT":
      return state + 1;
    case "DECREMENT":
      return state - 1;
    case "RESET":
      return 0;
    default:
      return state;
  }
}

let count = 0;
count = reducer(count, { type: "INCREMENT" });
count = reducer(count, { type: "INCREMENT" });
console.log(count);
// prints: 2</code></pre>

    <p><strong>Example: routing</strong></p>
<pre class="language-javascript"><code class="language-javascript">function renderPage(path) {
  switch (path) {
    case "/":
      renderHome();
      break;
    case "/about":
      renderAbout();
      break;
    case "/contact":
      renderContact();
      break;
    default:
      render404();
  }
}</code></pre>
  `,

  /* 3.2 Connects to */
  'topics-6-4-3-2': `
    <ul>
      <li><strong><code>if/else if</code></strong> → the alternative for the same kind of branching</li>
      <li><strong><code>case</code></strong> → individual options inside a switch</li>
      <li><strong><code>break</code></strong> → exits the switch (and stops fall-through)</li>
      <li><strong><code>default</code></strong> → catch-all when no case matches</li>
      <li><strong>Strict equality (<code>===</code>)</strong> → how <code>switch</code> compares values</li>
      <li><strong>Fall-through</strong> → cases without <code>break</code> leak into the next</li>
      <li><strong>Action / event handling</strong> → switch is a fit for typed actions</li>
      <li><strong>Object lookups</strong> → an alternative when you have many simple branches</li>
    </ul>
  `,

  /* 3.3 See also */
  'topics-6-4-3-3': `
    <ul>
      <li><code>if/else if</code></li>
      <li><code>case</code> and <code>break</code></li>
      <li><code>default</code></li>
      <li>Fall-through</li>
      <li>Strict equality (<code>===</code>)</li>
      <li>Object lookup as an alternative to switch</li>
      <li>Pattern matching (advanced)</li>
      <li>Reducers</li>
    </ul>
  `,


  /* ========================================================= 
   Sub-lesson: 3.7.6 If / Else → condition inside parentheses
 =======================================================*/

  /* --- Chunk 0: What & How --- */

  /* 0.0 What it is */
  'topics-6-5-0-0': `
    <p>The condition in an <code>if</code> statement always goes inside parentheses: <code>if (...)</code>. The parens hold the question being asked. Whatever's inside has to evaluate to a value that JavaScript can read as truthy or falsy.</p>
    <p>The parens aren't decoration — they're required syntax. They tell JavaScript "here's the test."</p>
  `,

  /* 0.1 Syntax */
  'topics-6-5-0-1': `
<pre class="language-javascript"><code class="language-javascript">const isLoggedIn = true;

if (isLoggedIn) {
  console.log("Welcome back");
}

// prints: "Welcome back"

// the parens hold the condition
// the condition is whatever expression goes between ( and )</code></pre>
    <p>JavaScript evaluates the expression inside the parens, then decides whether to run the block. The parens are how it knows where the condition starts and ends.</p>
  `,

  /* 0.2 Anatomy / Breakdown */
  'topics-6-5-0-2': `
<pre class="language-javascript"><code class="language-javascript">const score = 75;

if (score >= 70 && score < 90) {
  console.log("passing grade");
}

// prints: "passing grade"

// (                        → opens the condition
// score >= 70 && score < 90 → the expression — JS evaluates it
// )                        → closes the condition
// score >= 70              → first comparison → true (75 >= 70)
// score < 90               → second comparison → true (75 < 90)
// && combines them         → true && true → true
// the whole expression evaluates to true → block runs</code></pre>
    <p>The parens can hold any expression — a single variable, a comparison, a function call, several conditions joined by <code>&amp;&amp;</code> or <code>||</code>. JavaScript reduces the whole thing to one truthy/falsy value before deciding what to do.</p>
  `,

  /* 0.3 Syntax Details That Matter */
  'topics-6-5-0-3': `
    <p>The parens are required — leaving them off is a SyntaxError:</p>
<pre class="language-javascript"><code class="language-javascript">if (age >= 18) { ... }     // correct
if age >= 18 { ... }       // SyntaxError</code></pre>

    <p>Anything that evaluates to a value works as a condition:</p>
<pre class="language-javascript"><code class="language-javascript">if (true)              { ... }     // literal boolean
if (age >= 18)         { ... }     // comparison
if (cart.length)       { ... }     // accessing a property
if (user)              { ... }     // checking if a variable has a value
if (isValid())         { ... }     // function call returning a value
if (x > 0 && y > 0)    { ... }     // combined with logical operators
if (!isLoading)        { ... }     // negation
if (typeof x === "number") { ... } // type check</code></pre>

    <p>JavaScript converts the result to a boolean using truthy/falsy rules:</p>
<pre class="language-javascript"><code class="language-javascript">// Falsy values — these all act like false
if (false)     { ... }   // skips
if (0)         { ... }   // skips
if ("")        { ... }   // skips — empty string
if (null)      { ... }   // skips
if (undefined) { ... }   // skips
if (NaN)       { ... }   // skips

// Everything else is truthy
if (1)        { ... }    // runs
if ("hi")     { ... }    // runs
if ([])       { ... }    // runs — empty array is TRUTHY
if ({})       { ... }    // runs — empty object is TRUTHY</code></pre>

    <p>You can combine conditions inside the parens:</p>
<pre class="language-javascript"><code class="language-javascript">if (age >= 18 && hasId)             { ... }   // AND — both must be true
if (isWeekend || isHoliday)          { ... }   // OR — either is enough
if (!isLoading && !error)            { ... }   // negate then combine
if ((a || b) && (c || d))            { ... }   // grouped with extra parens</code></pre>

    <p>Putting an assignment instead of a comparison is a classic trap:</p>
<pre class="language-javascript"><code class="language-javascript">if (status = "ready") { ... }     // wrong — = is assignment
if (status === "ready") { ... }   // right — === is comparison

// = assigns "ready" to status, evaluates to "ready" (truthy) → block ALWAYS runs</code></pre>
  `,

  /* --- Chunk 1: Why & When --- */

  /* 1.0 What problem it solves */
  'topics-6-5-1-0': `
    <p>JavaScript needs a clear boundary between "what's the question?" and "what's the answer?" The parens around the condition are that boundary. Inside them is the question; what comes next (in braces) is the answer.</p>
    <p>Without the parens, JavaScript wouldn't know where your condition ends and your code starts. They make the structure unambiguous.</p>
  `,

  /* 1.1 Why use it */
  'topics-6-5-1-1': `
    <p>Build the right condition for what you actually want to check. The parens can hold simple comparisons or complex combined expressions — the simpler, the better.</p>
<pre class="language-javascript"><code class="language-javascript">// Simple — easy to read
if (cart.length > 0) {
  showCheckout();
}

// Combined — clear when both checks are needed
if (user.isLoggedIn && user.isVerified) {
  showProfile();
}

// Avoid this — too many conditions in one place
if (user.isLoggedIn && user.isVerified && cart.length > 0 && !isLoading && !hasError && now < expiresAt) {
  doSomething();
}

// Better — extract into a named function
function isReadyToCheckout() {
  return user.isLoggedIn
      && user.isVerified
      && cart.length > 0
      && !isLoading
      && !hasError
      && now < expiresAt;
}

if (isReadyToCheckout()) {
  doSomething();
}</code></pre>
    <p>Long conditions stuffed into one set of parens are a code smell. Names are easier to read than expressions.</p>
  `,

  /* 1.2 Where you use it */
  'topics-6-5-1-2': `
    <p>Every <code>if</code>, <code>else if</code>, <code>while</code>, <code>do/while</code>, and ternary uses parens around its condition. They show up everywhere conditional logic does.</p>
<pre class="language-javascript"><code class="language-javascript">// In if statements
if (age >= 18) { ... }

// In else if
if (a) { ... }
else if (b) { ... }       // also has parens

// In while loops
while (count < 10) { ... }

// In do/while
do { ... } while (count < 10);

// In ternary expressions
const label = (age >= 18) ? "adult" : "minor";
// the parens are optional in ternaries, but help readability

// In return statements with conditions
return (value > 0) ? "positive" : "non-positive";</code></pre>
  `,

  /* 1.3 Plain English explanation */
  'topics-6-5-1-3': `
    <p>The parens are JavaScript's way of saying "the question is everything between these two marks." Whatever you put inside gets evaluated. The result — boiled down to true or false — decides whether the next block runs.</p>
    <p>The parens can be simple ("is x bigger than 0?") or complicated ("is x bigger than 0 AND is the user logged in AND is the time before midnight?"). However complex it gets, it has to live inside one set of parens, and it has to come out as truthy or falsy.</p>
    <p>The trick is keeping the question simple enough to read. If your parens are getting long, that's a sign to extract the logic into a well-named function or a couple of variables.</p>
  `,

  /* 1.4 Mental model */
  'topics-6-5-1-4': `
    <p>The parens hold an expression. JavaScript evaluates it down to a single truthy or falsy value, then decides whether to run the block.</p>
<pre class="language-javascript"><code class="language-javascript">if ( age >= 18 && hasId )
//   ↓ evaluate
//   ↓ age >= 18 → true
//   ↓ hasId    → true
//   ↓ true && true → true
//   ↓ block runs
{ ... }

if ( score >= 90 )
//   ↓ evaluate
//   ↓ score is 75 → false
//   ↓ block skipped
{ ... }</code></pre>
    <p>No matter how big the expression is, the parens always reduce it to one boolean answer. Everything else flows from that one yes/no.</p>
  `,

  /* 1.5 Step-by-step walkthrough */
  'topics-6-5-1-5': `
<pre class="language-javascript"><code class="language-javascript">const age = 22;
const hasId = true;

if (age >= 18 && hasId) {
  console.log("can enter");
}

// prints: "can enter"

// JavaScript is thinking:
// Line 1: register age, value 22.
// Line 2: register hasId, value true.
// Line 4: see if (...) → start evaluating the condition inside the parens.
//   first: age >= 18 → 22 >= 18 → true.
//   then: hasId → true.
//   then: true && true → true.
//   condition is true → run the block.
// Line 5: log "can enter".
// Line 6: end of the if. Done.</code></pre>
  `,

  /* --- Chunk 2: The Click --- */

  /* 2.0 Debugging clue */
  'topics-6-5-2-0': `
    <p>If your <code>if</code> isn't behaving like you expected, log the entire expression inside the parens — see what it actually evaluates to:</p>
<pre class="language-javascript"><code class="language-javascript">const age = "20";
const hasId = "true";

console.log("age >= 18:", age >= 18);
console.log("hasId truthy:", !!hasId);
console.log("combined:", age >= 18 && hasId);

if (age >= 18 && hasId) {
  console.log("entering");
}
// prints:
//   age >= 18: true     (string "20" gets coerced to number)
//   hasId truthy: true   (string "true" is truthy — even though it looks like false)
//   combined: true
//   entering

// the issue here: hasId is the STRING "true", not the boolean true
// "false" the string would also be truthy — that's a bigger bug waiting to happen</code></pre>

    <p>Logging the condition's pieces separately is the fastest way to see which part is wrong. Don't guess — let the console tell you.</p>
  `,

  /* 2.1 The part that makes it click */
  'topics-6-5-2-1': `
    <p>The parens always hold an expression. An expression always produces a value. JavaScript reads that value as truthy or falsy and uses that to decide whether to run the block.</p>
    <p>You're not "asking a question" in some special way — you're just writing an expression. The same kind of expression you'd put on the right side of <code>=</code> or pass into a function. <code>if</code> just adds the wrapping that turns the value into a yes/no decision.</p>
  `,

  /* 2.2 Common confusions */
  'topics-6-5-2-2': `
    <p><strong>Confusion: <code>=</code> vs <code>===</code> inside parens</strong></p>
<pre class="language-javascript"><code class="language-javascript">if (status = "ready") { ... }   // wrong — = is assignment, sets status to "ready"
if (status === "ready") { ... } // right — === is strict comparison
if (status == "ready") { ... }  // works, but == coerces — prefer ===</code></pre>

    <p><strong>Confusion: empty values aren't all falsy</strong></p>
<pre class="language-javascript"><code class="language-javascript">if ([]) { console.log("yes"); }     // prints "yes" — empty array is truthy!
if ({}) { console.log("yes"); }     // prints "yes" — empty object is truthy!
if ("") { ... }                      // does NOT run — empty string is falsy
if (0)  { ... }                      // does NOT run — 0 is falsy

// to check for empty array, use length:
if (items.length === 0) { ... }
if (Object.keys(obj).length === 0) { ... }</code></pre>

    <p><strong>Confusion: forgetting the parens entirely</strong></p>
<pre class="language-javascript"><code class="language-javascript">if isLoggedIn { ... }    // SyntaxError
if (isLoggedIn) { ... }  // correct — even simple values need ( )</code></pre>

    <p><strong>Confusion: extra parens are fine</strong></p>
<pre class="language-javascript"><code class="language-javascript">if ((x > 0)) { ... }                // works — extra parens around the expression
if (((x > 0))) { ... }              // also works, but pointless

// extra parens are useful when grouping with && and ||:
if ((a || b) && (c || d)) { ... }    // groups the ORs first</code></pre>

    <p><strong>Confusion: function call vs function reference</strong></p>
<pre class="language-javascript"><code class="language-javascript">function isValid() { return true; }

if (isValid)   { ... }   // checks if the function EXISTS — always truthy
if (isValid()) { ... }   // calls the function and uses the RESULT
// almost always you want to call it</code></pre>

    <p><strong>Confusion: <code>if</code> condition is just an expression</strong></p>
<pre class="language-javascript"><code class="language-javascript">// All of these are valid because they're all expressions:
if (5 + 3 > 2 * 4)            { ... }
if (Math.random() > 0.5)       { ... }
if (user.scores.reduce((a, b) => a + b, 0) > 100) { ... }
// the parens just hold whatever expression you want — JS evaluates it</code></pre>
  `,

  /* 2.3 Common mistakes */
  'topics-6-5-2-3': `
<pre class="language-javascript"><code class="language-javascript">if isReady { ... }
// SyntaxError — missing parens
// fix: if (isReady) { ... }</code></pre>

<pre class="language-javascript"><code class="language-javascript">if (status = "ready") { ... }
// wrong: = assigns instead of comparing — block always runs
// fix: if (status === "ready")</code></pre>

<pre class="language-javascript"><code class="language-javascript">if (cart.length = 0) { ... }
// wrong: assigns 0 to cart.length AND evaluates to 0 (falsy) — block NEVER runs
// fix: if (cart.length === 0)</code></pre>

<pre class="language-javascript"><code class="language-javascript">if (items.length) { ... }
// works: empty array has length 0 (falsy), non-empty has length > 0 (truthy)
// but it's implicit — if (items.length > 0) is more explicit</code></pre>

<pre class="language-javascript"><code class="language-javascript">if (isValid)   { ... }   // checks the function exists, not its return
// fix: if (isValid()) — call the function</code></pre>

<pre class="language-javascript"><code class="language-javascript">if (a > 0 || a < 100 && b > 0) { ... }
// works, but operator precedence might surprise — && binds tighter than ||
// fix: add parens to be explicit:
//   if ((a > 0 || a < 100) && b > 0) — or just refactor for clarity</code></pre>

<pre class="language-javascript"><code class="language-javascript">if (typeof x = "number") { ... }
// SyntaxError — = isn't valid here, and even fixing that, "number" should be compared
// fix: if (typeof x === "number")</code></pre>
  `,

  /* --- Chunk 3: In Practice --- */

  /* 3.0 Tiny examples */
  'topics-6-5-3-0': `
<pre class="language-javascript"><code class="language-javascript">// Truthy variable
const name = "Os";
if (name) {
  console.log("got a name:", name);
}
// prints: "got a name: Os"

// Comparison
const score = 80;
if (score >= 70) {
  console.log("passed");
}
// prints: "passed"

// Negation
const isLoading = false;
if (!isLoading) {
  console.log("ready");
}
// prints: "ready"

// AND
const age = 22;
const hasId = true;
if (age >= 18 && hasId) {
  console.log("can enter");
}
// prints: "can enter"

// OR
const day = "Saturday";
if (day === "Saturday" || day === "Sunday") {
  console.log("weekend");
}
// prints: "weekend"

// Function call result
function isValid(x) { return x > 0; }
if (isValid(5)) {
  console.log("valid");
}
// prints: "valid"

// typeof check
const value = 42;
if (typeof value === "number") {
  console.log("it's a number");
}
// prints: "it's a number"</code></pre>
  `,

  /* 3.1 Real website uses */
  'topics-6-5-3-1': `
    <p><strong>Example: form validation with combined conditions</strong></p>
<pre class="language-javascript"><code class="language-javascript">function validate(data) {
  if (data.email.includes("@") && data.password.length >= 8 && data.terms) {
    submit(data);
  } else {
    showErrors();
  }
}

validate({ email: "os@x.com", password: "longenough", terms: true });
// passes all checks → submits</code></pre>

    <p><strong>Example: extracting a complex condition</strong></p>
<pre class="language-javascript"><code class="language-javascript">function canCheckout(user, cart) {
  return user.isLoggedIn
      && user.isVerified
      && cart.length > 0
      && cart.every(item => item.inStock);
}

if (canCheckout(currentUser, cart)) {
  startCheckout();
}
// reads almost like English now</code></pre>

    <p><strong>Example: typeof and value checks</strong></p>
<pre class="language-javascript"><code class="language-javascript">function processInput(value) {
  if (typeof value === "string" && value.length > 0) {
    handleString(value);
  } else if (typeof value === "number" && value >= 0) {
    handleNumber(value);
  }
}

processInput("hello");
// matches first branch → handleString runs</code></pre>

    <p><strong>Example: optional chaining inside the condition</strong></p>
<pre class="language-javascript"><code class="language-javascript">const user = { profile: { name: "Os" } };

if (user?.profile?.name) {
  console.log("name:", user.profile.name);
}
// prints: "name: Os"
// the ?. avoids errors if any link in the chain is undefined</code></pre>
  `,

  /* 3.2 Connects to */
  'topics-6-5-3-2': `
    <ul>
      <li><strong><code>if</code></strong> → the keyword that uses the parens</li>
      <li><strong>Comparison operators</strong> → build the expressions inside</li>
      <li><strong>Logical operators</strong> → combine conditions inside the parens</li>
      <li><strong>Truthy and falsy</strong> → how the result is interpreted</li>
      <li><strong>Expressions</strong> → anything that evaluates to a value works</li>
      <li><strong>Function calls</strong> → can be used as conditions</li>
      <li><strong>Operator precedence</strong> → how complex expressions are evaluated</li>
      <li><strong>Optional chaining</strong> → safer property access inside conditions</li>
    </ul>
  `,

  /* 3.3 See also */
  'topics-6-5-3-3': `
    <ul>
      <li><code>if</code></li>
      <li>Comparison operators</li>
      <li>Logical operators (<code>&amp;&amp;</code>, <code>||</code>, <code>!</code>)</li>
      <li>Truthy and falsy values</li>
      <li>Operator precedence</li>
      <li>Optional chaining (<code>?.</code>)</li>
      <li>Boolean coercion</li>
      <li>Expression vs statement</li>
    </ul>
  `,


  /* ========================================================= 
   Sub-lesson: 3.7.7 If / Else → code block inside curly braces
 =======================================================*/

  /* --- Chunk 0: What & How --- */

  /* 0.0 What it is */
  'topics-6-6-0-0': `
    <p>The code block is the <code>{ ... }</code> part of an <code>if</code> statement. It holds the lines that should run when the condition is true. Everything between the opening <code>{</code> and closing <code>}</code> is the block.</p>
    <p>The block can be one line or hundreds. Whatever's inside runs together as a unit when (and only when) the condition matches.</p>
  `,

  /* 0.1 Syntax */
  'topics-6-6-0-1': `
<pre class="language-javascript"><code class="language-javascript">const isReady = true;

if (isReady) {
  console.log("starting up");
  loadConfig();
  attachListeners();
}

// prints: "starting up"
// then runs loadConfig() and attachListeners() — all three because they're in the same block</code></pre>
    <p>The braces group the three statements together. They all run as a unit when <code>isReady</code> is true. If it were false, none of them would run.</p>
  `,

  /* 0.2 Anatomy / Breakdown */
  'topics-6-6-0-2': `
<pre class="language-javascript"><code class="language-javascript">const cartCount = 3;

if (cartCount > 0) {
  console.log("you have items");
  enableCheckoutButton();
  showItemCount(cartCount);
}

// prints: "you have items"
// then enables the button and shows the count

// {                          → opens the block
// console.log(...)           → first statement, runs because condition is true
// enableCheckoutButton()      → second statement
// showItemCount(cartCount)    → third statement
// }                          → closes the block</code></pre>
    <p>The braces are the boundary. Everything inside runs together. Everything after the closing <code>}</code> is outside the block — it runs regardless of the condition.</p>
  `,

  /* 0.3 Syntax Details That Matter */
  'topics-6-6-0-3': `
    <p>Braces are technically optional for a single statement — but always use them anyway:</p>
<pre class="language-javascript"><code class="language-javascript">// Works — but risky once you add more lines
if (isReady) start();

// Always-safe
if (isReady) {
  start();
}

// The DANGER without braces:
if (isReady)
  start();
  cleanup();
// only start() is conditional — cleanup() ALWAYS runs
// the indentation is misleading, the parser doesn't care about whitespace</code></pre>

    <p>Variables declared with <code>let</code>/<code>const</code> inside a block stay inside it:</p>
<pre class="language-javascript"><code class="language-javascript">if (true) {
  const message = "hello";
  console.log(message);   // works — message exists here
}

console.log(message);     // ReferenceError — message is gone after the block
// blocks have their own scope (block scope)</code></pre>

    <p>Each branch of an <code>if/else</code> has its own block:</p>
<pre class="language-javascript"><code class="language-javascript">if (isLoggedIn) {
  showDashboard();         // block A
  loadUserData();           // block A
} else {
  showLoginForm();         // block B
  trackVisit();             // block B
}
// each block runs as one unit, depending on the condition</code></pre>

    <p>Empty blocks are valid (but rare):</p>
<pre class="language-javascript"><code class="language-javascript">if (isReady) {}            // valid — does nothing if isReady is true
if (isReady) {
  // intentionally empty
}
// usually a placeholder for code you'll fill in later</code></pre>

    <p>Blocks can contain anything — variables, function calls, more <code>if</code> statements, loops, returns:</p>
<pre class="language-javascript"><code class="language-javascript">if (data) {
  const total = data.items.reduce((sum, i) => sum + i.price, 0);
  
  if (total > 100) {
    console.log("big order");
  }
  
  for (const item of data.items) {
    console.log(item.name);
  }
  
  return total;
}
// blocks can contain any code that's valid in any function</code></pre>
  `,

  /* --- Chunk 1: Why & When --- */

  /* 1.0 What problem it solves */
  'topics-6-6-1-0': `
    <p>JavaScript needs a clear boundary between "what runs when the condition is true" and "what runs no matter what." The braces draw that line.</p>
    <p>Without them, the structure becomes ambiguous as soon as the conditional body has more than one line. Braces eliminate the ambiguity — everything inside them is the conditional body, and only that.</p>
  `,

  /* 1.1 Why use it */
  'topics-6-6-1-1': `
    <p>Always use braces, even for single statements. The cost is two extra characters; the benefit is bug-proof code that's easy to extend.</p>
<pre class="language-javascript"><code class="language-javascript">// Risky — works today, breaks the moment someone adds a line
if (user.isAdmin)
  enableAdminTools();

// Bug-proof — easy to extend later
if (user.isAdmin) {
  enableAdminTools();
}

// What happens when someone "adds a line" to the no-braces version:
if (user.isAdmin)
  enableAdminTools();
  logAdminAccess();    // ALWAYS runs — looks indented but isn't conditional
// admin actions get logged for non-admins too — security bug</code></pre>
    <p>This is one of the easiest "always use braces" rules to follow because it has no downside. Most teams enforce it through linters.</p>
  `,

  /* 1.2 Where you use it */
  'topics-6-6-1-2': `
    <p>Every <code>if</code>, <code>else if</code>, <code>else</code>, <code>for</code>, <code>while</code>, and function definition uses curly braces.</p>
<pre class="language-javascript"><code class="language-javascript">// if blocks
if (cond) { ... }
else if (other) { ... }
else { ... }

// loops
for (let i = 0; i < 10; i++) { ... }
while (running) { ... }

// function definitions
function setup() { ... }
const greet = (name) => { ... };

// switch case bodies (when you want block scope)
switch (action) {
  case "save": {
    const data = collect();   // own scope
    saveData(data);
    break;
  }
}

// standalone block (rare)
{
  const temp = computeTemp();    // creates a fresh scope
  console.log(temp);
}</code></pre>
  `,

  /* 1.3 Plain English explanation */
  'topics-6-6-1-3': `
    <p>The braces are like a fence around the conditional code. Inside the fence is "what to do if the condition is true." Outside the fence is regular code that always runs.</p>
    <p>Without the fence, JavaScript only attaches the next single statement to the <code>if</code>. Anything after that statement — even if it's indented to look like it's part of the conditional — runs unconditionally. That's a common source of bugs, especially when adding lines later.</p>
    <p>The simplest rule: always put the fence up. Even if your conditional has just one line right now, the fence makes it clear what's inside, what's outside, and lets you add more lines without surprises.</p>
  `,

  /* 1.4 Mental model */
  'topics-6-6-1-4': `
    <p>The braces define the conditional body. Everything inside is one unit. Everything outside is unrelated to the <code>if</code>.</p>
<pre class="language-javascript"><code class="language-javascript">if (condition) {
  // ┌─────────────── inside the block ───────────────┐
  //  these lines run TOGETHER, only when condition
  //  is true. They share the block's scope.
  // └────────────────────────────────────────────────┘
}
// these lines are OUTSIDE the block — they always run</code></pre>
    <p>Think of the braces as parentheses for code. Just like parens group an expression into one value, braces group statements into one block.</p>
  `,

  /* 1.5 Step-by-step walkthrough */
  'topics-6-6-1-5': `
<pre class="language-javascript"><code class="language-javascript">const isLoggedIn = true;

if (isLoggedIn) {
  console.log("welcome");
  showDashboard();
}
console.log("page rendered");

// prints:
//   welcome
//   page rendered
// (showDashboard runs in between but doesn't print here)

// JavaScript is thinking:
// Line 1: register isLoggedIn, value true.
// Line 3: see if (isLoggedIn) → true. Open the block.
// Line 4: log "welcome".
// Line 5: call showDashboard().
// Line 6: end of block — close it.
// Line 7: log "page rendered" — outside the block, always runs.

// If isLoggedIn had been false:
// Line 3: condition false → skip the entire block (lines 4–6).
// Line 7: log "page rendered" — still runs because it's outside the block.</code></pre>
  `,

  /* --- Chunk 2: The Click --- */

  /* 2.0 Debugging clue */
  'topics-6-6-2-0': `
    <p>If a line that looks like it should be conditional always runs, you're missing braces. The indentation is lying to you — JavaScript only attaches the very next statement to the <code>if</code>.</p>
<pre class="language-javascript"><code class="language-javascript">// scenario: cleanup runs even when isError is false
if (isError)
  showError();
  cleanup();
// the indent makes it LOOK like both are conditional, but only showError() is.
// cleanup() is just a regular line that runs every time.
// fix: wrap both in braces:
if (isError) {
  showError();
  cleanup();
}</code></pre>

    <p>If a variable seems to disappear after a block, that's block scope working as intended. Variables declared with <code>let</code>/<code>const</code> only live inside the braces where they were created.</p>
  `,

  /* 2.1 The part that makes it click */
  'topics-6-6-2-1': `
    <p>The braces aren't a style choice. They're the actual boundary of the conditional body. Without them, JavaScript only attaches the next statement to the <code>if</code> — everything after is unrelated, no matter how it looks.</p>
    <p>Once you treat <code>{</code> and <code>}</code> as required parts of every conditional, an entire category of bugs disappears. There's nothing to misinterpret about indented-but-unbraced code if you never write it.</p>
  `,

  /* 2.2 Common confusions */
  'topics-6-6-2-2': `
    <p><strong>Confusion: indentation doesn't determine scope</strong></p>
<pre class="language-javascript"><code class="language-javascript">if (isReady)
  setup();
  start();
  
// the indentation suggests both are conditional
// reality: only setup() is — start() always runs
// JavaScript doesn't care about whitespace; only braces matter</code></pre>

    <p><strong>Confusion: braces create their own scope</strong></p>
<pre class="language-javascript"><code class="language-javascript">if (true) {
  const message = "hi";
  console.log(message);   // works
}

console.log(message);
// ReferenceError — message is gone outside the block
// fix: declare the variable OUTSIDE the block, or use it only inside</code></pre>

    <p><strong>Confusion: empty block is fine</strong></p>
<pre class="language-javascript"><code class="language-javascript">if (isReady) {}                    // valid — does nothing
if (isReady) { /* TODO */ }        // also valid — placeholder for later</code></pre>

    <p><strong>Confusion: no semicolon after the closing brace</strong></p>
<pre class="language-javascript"><code class="language-javascript">if (cond) {
  doSomething();
}                  // no ; needed here

if (cond) {
  doSomething();
};                 // works, but the ; is meaningless — represents an empty statement</code></pre>

    <p><strong>Confusion: chaining if/else needs braces matched up</strong></p>
<pre class="language-javascript"><code class="language-javascript">// Wrong — extra brace breaks the chain
if (a) {
  doA();
}
} else {       // SyntaxError — closing brace doesn't pair with anything
  doB();
}

// Right — each branch has its own pair of braces
if (a) {
  doA();
} else {
  doB();
}</code></pre>

    <p><strong>Confusion: brace style varies, behavior doesn't</strong></p>
<pre class="language-javascript"><code class="language-javascript">// All three styles work identically
if (cond) {
  doSomething();
}

if (cond)
{
  doSomething();
}

if (cond) { doSomething(); }
// pick one style and be consistent — the parser doesn't care</code></pre>
  `,

  /* 2.3 Common mistakes */
  'topics-6-6-2-3': `
<pre class="language-javascript"><code class="language-javascript">if (isReady)
  setup();
  start();
// only setup() is conditional — start() always runs
// fix: wrap both in braces</code></pre>

<pre class="language-javascript"><code class="language-javascript">if (isReady) {
  const result = compute();
}
console.log(result);
// ReferenceError — result is local to the block
// fix: declare result outside, or use it inside</code></pre>

<pre class="language-javascript"><code class="language-javascript">if (cond) {
  doA();
} 
} else {
  doB();
}
// SyntaxError — extra closing brace
// fix: only one closing brace per opening brace</code></pre>

<pre class="language-javascript"><code class="language-javascript">if (cond) doSomething(),
          doMore();
// works because of the comma operator, but very hard to read
// fix: use braces and put each statement on its own line</code></pre>

<pre class="language-javascript"><code class="language-javascript">if (cond) {
  return result
}
// works — semicolons can sometimes be omitted
// but inconsistent style mixed across the file is a smell
// fix: pick a convention (with or without semicolons) and stick to it</code></pre>

<pre class="language-javascript"><code class="language-javascript">if (a) doA() else doB();
// SyntaxError — without braces, the structure gets confused
// fix: use braces, or put a semicolon after doA():
//   if (a) doA(); else doB();</code></pre>
  `,

  /* --- Chunk 3: In Practice --- */

  /* 3.0 Tiny examples */
  'topics-6-6-3-0': `
<pre class="language-javascript"><code class="language-javascript">// Single statement — still wrap in braces
if (isReady) {
  start();
}

// Multiple statements
if (cartCount > 0) {
  enableCheckoutButton();
  showItemCount(cartCount);
  hideEmptyMessage();
}

// Block with a local variable
if (data) {
  const formatted = JSON.stringify(data);
  console.log(formatted);
}

// Nested blocks
if (user.isLoggedIn) {
  if (user.isAdmin) {
    enableAdminPanel();
  }
}

// Both branches with their own blocks
if (isLoggedIn) {
  showDashboard();
  loadUserData();
} else {
  showLoginForm();
  trackVisit();
}

// Empty block (placeholder)
if (isPlaceholder) {
  // TODO: implement this case
}</code></pre>
  `,

  /* 3.1 Real website uses */
  'topics-6-6-3-1': `
    <p><strong>Example: multi-step setup based on a flag</strong></p>
<pre class="language-javascript"><code class="language-javascript">if (isFirstVisit) {
  showWelcomeTour();
  trackEvent("first_visit");
  saveToStorage("hasVisited", true);
}
// all three lines run together when it's the user's first visit</code></pre>

    <p><strong>Example: block-scoped variable for clarity</strong></p>
<pre class="language-javascript"><code class="language-javascript">if (response.ok) {
  const data = await response.json();
  const items = data.items;
  const total = items.reduce((sum, i) => sum + i.price, 0);
  console.log("total:", total);
}
// data, items, total only live inside the if block — they're not relevant outside</code></pre>

    <p><strong>Example: branching logic with separate blocks</strong></p>
<pre class="language-javascript"><code class="language-javascript">if (user.isPremium) {
  showPremiumContent();
  enableHighResVideos();
  hideAds();
} else {
  showAds();
  limitVideoQuality();
}
// each branch is its own grouped behavior</code></pre>

    <p><strong>Example: validation with multiple checks in one block</strong></p>
<pre class="language-javascript"><code class="language-javascript">if (formIsValid()) {
  const data = collectFormData();
  await sendToServer(data);
  resetForm();
  showSuccess();
}
// the whole "happy path" lives inside the if's block — runs only when valid</code></pre>
  `,

  /* 3.2 Connects to */
  'topics-6-6-3-2': `
    <ul>
      <li><strong><code>if</code></strong> → the keyword that owns the block</li>
      <li><strong><code>else</code></strong> → also has its own block</li>
      <li><strong>Block scope</strong> → <code>let</code>/<code>const</code> inside braces stay inside</li>
      <li><strong>Function body</strong> → also a block, follows the same rules</li>
      <li><strong>Loop bodies</strong> → also use braces the same way</li>
      <li><strong>Statements</strong> → each line inside the block is a statement</li>
      <li><strong>Indentation</strong> → for readability only — JavaScript doesn't use it for structure</li>
      <li><strong>Linting / style guides</strong> → most enforce always-braces</li>
    </ul>
  `,

  /* 3.3 See also */
  'topics-6-6-3-3': `
    <ul>
      <li><code>if</code> and <code>else</code></li>
      <li>Block scope</li>
      <li><code>let</code>, <code>const</code>, <code>var</code></li>
      <li>Function body</li>
      <li>Loop body</li>
      <li>Statements vs expressions</li>
      <li>Code style and linters</li>
      <li>Dangling else problem</li>
    </ul>
  `,


  /* ========================================================= 
   Sub-lesson: 3.7.8 If / Else → if as the first question
 =======================================================*/

  /* --- Chunk 0: What & How --- */

  /* 0.0 What it is */
  'topics-6-7-0-0': `
    <p>In any <code>if/else if/else</code> chain, the <code>if</code> is the first question JavaScript asks. It's checked first, top to bottom, before any of the other branches.</p>
    <p>If the <code>if</code> condition is true, its block runs and the chain is done — every <code>else if</code> and <code>else</code> below is skipped. The <code>if</code> is the gatekeeper of the whole chain.</p>
  `,

  /* 0.1 Syntax */
  'topics-6-7-0-1': `
<pre class="language-javascript"><code class="language-javascript">const grade = 95;

if (grade >= 90) {
  console.log("A");
} else if (grade >= 80) {
  console.log("B");
} else {
  console.log("C or below");
}

// prints: "A"
// the if matched on the first check — the rest of the chain was never even read</code></pre>
    <p>JavaScript starts at the <code>if</code>. If it matches, that block runs and the chain exits. The <code>else if</code> and <code>else</code> below are completely ignored — they don't get checked at all.</p>
  `,

  /* 0.2 Anatomy / Breakdown */
  'topics-6-7-0-2': `
<pre class="language-javascript"><code class="language-javascript">const balance = 500;

if (balance > 1000) {
  console.log("high balance");
} else if (balance > 100) {
  console.log("medium balance");
} else {
  console.log("low balance");
}

// prints: "medium balance"

// if (balance > 1000)        → THE FIRST QUESTION — checked first
// false (500 is not > 1000)  → skip this block, move to next branch
// else if (balance > 100)    → second question (only checked because if was false)
// true                        → run THIS block, exit chain
// else                        → never reached</code></pre>
    <p>The <code>if</code> always goes first. Whatever happens next depends on its answer. Once <code>if</code> matches, the rest of the chain doesn't exist as far as JavaScript is concerned.</p>
  `,

  /* 0.3 Syntax Details That Matter */
  'topics-6-7-0-3': `
    <p>The <code>if</code> is the only branch that <em>must</em> exist in a chain. <code>else if</code> and <code>else</code> are optional add-ons:</p>
<pre class="language-javascript"><code class="language-javascript">// Just if — minimum valid chain
if (cart.length > 0) {
  showCheckout();
}

// if + else
if (isLoggedIn) showDashboard();
else showLoginForm();

// if + else if + else
if (score >= 90) console.log("A");
else if (score >= 80) console.log("B");
else console.log("F");</code></pre>

    <p>You can have multiple <code>else if</code>s, but only one <code>if</code> at the start:</p>
<pre class="language-javascript"><code class="language-javascript">// Wrong — two ifs in a row create two SEPARATE chains
if (a > 0) { ... }
if (b > 0) { ... }       // not a continuation — its own conditional

// Right — one if starts the chain, then else if for follow-ups
if (a > 0) { ... }
else if (b > 0) { ... }   // continues the same chain</code></pre>

    <p>Order matters because the <code>if</code> is checked first. Whatever you put there is the first filter:</p>
<pre class="language-javascript"><code class="language-javascript">// Most specific check goes in the if, less specific in else if:
if (score >= 90) return "A";        // most specific first
else if (score >= 80) return "B";
else if (score >= 70) return "C";
else return "F";

// Reversed — broken!
if (score >= 70) return "C";        // catches everything 70+
else if (score >= 80) return "B";   // never reached for scores 80-89
else if (score >= 90) return "A";   // never reached for scores 90+
// score 95 → "C" (the if matched first)</code></pre>

    <p>The <code>if</code> condition can be anything that evaluates to truthy or falsy — same as a standalone <code>if</code>:</p>
<pre class="language-javascript"><code class="language-javascript">if (user)                  { ... }   // truthy check
if (cart.length > 0)        { ... }   // comparison
if (isReady && isVerified)  { ... }   // combined conditions
if (typeof x === "number")  { ... }   // type check
if (response.ok)            { ... }   // property access</code></pre>
  `,

  /* --- Chunk 1: Why & When --- */

  /* 1.0 What problem it solves */
  'topics-6-7-1-0': `
    <p>When you have multiple branches, JavaScript needs to know which one to check first. The <code>if</code> is that anchor. It's the first check, the entry point to the whole chain.</p>
    <p>Putting the most specific or most important condition in the <code>if</code> means that case gets handled first — before any broader fallbacks have a chance to claim it.</p>
  `,

  /* 1.1 Why use it */
  'topics-6-7-1-1': `
    <p>The <code>if</code> position is for the condition you want JavaScript to check first. Pick the case that's most specific, most important, or most likely.</p>
<pre class="language-javascript"><code class="language-javascript">// Most specific first — A grades require >= 90
if (score >= 90)      return "A";    // most specific
else if (score >= 80) return "B";
else if (score >= 70) return "C";
else                  return "F";

// Most important first — handle errors before normal cases
if (response.error)        showError();
else if (response.empty)   showEmpty();
else                       showData();

// Most common first — for performance, check what's likely
if (input === "")          return;     // common: empty input, exit fast
else if (input.length > 100) return;
else                       process(input);</code></pre>
    <p>Whichever condition is in the <code>if</code> position gets first dibs. Choose carefully.</p>
  `,

  /* 1.2 Where you use it */
  'topics-6-7-1-2': `
    <p>Every conditional chain starts with <code>if</code> — and what you put there sets up the rest.</p>
<pre class="language-javascript"><code class="language-javascript">// Render based on UI state
if (state.error)             showError();       // most urgent first
else if (state.isLoading)    showSpinner();
else if (state.items.empty)  showEmpty();
else                         showItems();

// HTTP responses
if (response.status === 200)       handleSuccess();   // happy path first
else if (response.status === 401)  redirectLogin();
else if (response.status === 404)  show404();
else                               showError();

// Form validation
if (!email)                  return "Email required";    // missing first
else if (!email.includes("@")) return "Invalid email";   // format second
else if (email.length > 100) return "Too long";
else                         return null;
</code></pre>
  `,

  /* 1.3 Plain English explanation */
  'topics-6-7-1-3': `
    <p>The <code>if</code> is "ask this question first." Whatever condition you put there is what JavaScript checks before anything else in the chain. If that question gets a yes, the whole chain ends — no other questions get asked.</p>
    <p>That's why ordering matters so much. Whichever case you want to win when there's overlap — that's the case that goes in the <code>if</code>. Everything else is a fallback below it.</p>
    <p>Think of it as the priority filter: the <code>if</code> grabs first, anything else only gets checked when the <code>if</code> didn't match.</p>
  `,

  /* 1.4 Mental model */
  'topics-6-7-1-4': `
    <p>The <code>if</code> is the first stop on a one-way street. JavaScript checks it. If it's true, exit immediately. If it's false, continue to the next stop.</p>
<pre class="language-javascript"><code class="language-javascript">// JavaScript walks the chain:
// ┌─→ if (A?)        → true → run A, EXIT
// │   else if (B?)   → never reached if A was true
// │   else if (C?)   → never reached
// │   else           → never reached
// │
// │   if (A?)        → false, keep walking
// └─→ else if (B?)   → true → run B, EXIT
//                    → false, keep walking
//                    → ... and so on</code></pre>
    <p>The <code>if</code> is the entry point. Whoever sits at that position in the chain has the highest priority — they get checked first, and if they match, nothing below them gets a chance.</p>
  `,

  /* 1.5 Step-by-step walkthrough */
  'topics-6-7-1-5': `
<pre class="language-javascript"><code class="language-javascript">const role = "admin";

if (role === "admin") {
  console.log("full access");
} else if (role === "editor") {
  console.log("edit access");
} else {
  console.log("read only");
}

// prints: "full access"

// JavaScript is thinking:
// Line 1: register role, value "admin".
// Line 3: see if (role === "admin") → check "admin" === "admin" → true.
// Line 4: log "full access".
// Line 5: see else if → since the if matched, SKIP this branch entirely. Don't even evaluate the condition.
// Line 7: see else → SKIP. Chain already finished.

// Compare to: if role had been "viewer":
// Line 3: "viewer" === "admin" → false. Skip the block.
// Line 5: now check else if → "viewer" === "editor" → false. Skip.
// Line 7: else runs as the fallback → "read only".</code></pre>
  `,

  /* --- Chunk 2: The Click --- */

  /* 2.0 Debugging clue */
  'topics-6-7-2-0': `
    <p>If a later branch isn't running when you expected, the <code>if</code> probably caught it first. Trace the conditions in order:</p>
<pre class="language-javascript"><code class="language-javascript">const score = 95;

console.log("if (score >= 70)?", score >= 70);
console.log("else if (score >= 90)?", score >= 90);

if (score >= 70) {
  console.log("→ passed");
} else if (score >= 90) {
  console.log("→ aced it");
}

// prints:
//   if (score >= 70)? true
//   else if (score >= 90)? true
//   → passed
// both conditions are true, but only the if branch runs because it's checked first
// fix: put the most specific condition (>= 90) in the if</code></pre>

    <p>Rule: the <code>if</code> claims the first match. If your "important" or "specific" case is somewhere later, it'll only run when nothing above it matched.</p>
  `,

  /* 2.1 The part that makes it click */
  'topics-6-7-2-1': `
    <p>The <code>if</code> isn't just where the chain starts visually — it's where the chain starts <em>logically</em>. Whatever condition sits in that spot is the first thing JavaScript checks, and the moment it matches, everything below it stops mattering.</p>
    <p>Put your top priority in the <code>if</code>. Everything below it is "what if not?"</p>
  `,

  /* 2.2 Common confusions */
  'topics-6-7-2-2': `
    <p><strong>Confusion: order matters because <code>if</code> goes first</strong></p>
<pre class="language-javascript"><code class="language-javascript">// Wrong order — broader condition in the if
if (n > 0)        console.log("positive");
else if (n > 100) console.log("big");
// for n = 500, "positive" wins — never reaches "big"

// Right order — most specific in the if
if (n > 100)      console.log("big");
else if (n > 0)   console.log("positive");
// for n = 500, "big" wins</code></pre>

    <p><strong>Confusion: a chain has only one <code>if</code></strong></p>
<pre class="language-javascript"><code class="language-javascript">// One chain, one if
if (a) { ... }
else if (b) { ... }
else { ... }

// vs two separate chains
if (a) { ... }
if (b) { ... }     // independent — its own if
// both can run because they're not connected</code></pre>

    <p><strong>Confusion: <code>if</code> alone vs <code>if</code> as part of a chain</strong></p>
<pre class="language-javascript"><code class="language-javascript">// if alone — gate, with no fallback
if (cart.length > 0) {
  showCheckout();
}

// if at the start of a chain — first question of many
if (cart.length > 0) {
  showCheckout();
} else if (cart.length === 0) {
  showEmpty();
}
// the if behaves the same way — what changes is whether it has chained branches</code></pre>

    <p><strong>Confusion: returning early bypasses the chain</strong></p>
<pre class="language-javascript"><code class="language-javascript">function check(value) {
  if (value === null) return "null";       // exits the function entirely
  else if (value === 0) return "zero";
  else return "other";
}

// when the if matches and returns, the rest of the function never runs
// you don't even need else here — the return makes else redundant:
function check(value) {
  if (value === null) return "null";
  if (value === 0) return "zero";
  return "other";
}</code></pre>

    <p><strong>Confusion: comparison precedence in the <code>if</code></strong></p>
<pre class="language-javascript"><code class="language-javascript">if (a > 0 && b > 0 || c > 0) { ... }
// && binds tighter than || — this evaluates as (a > 0 && b > 0) || c > 0
// fix: add explicit parens for clarity
if ((a > 0 && b > 0) || c > 0) { ... }</code></pre>
  `,

  /* 2.3 Common mistakes */
  'topics-6-7-2-3': `
<pre class="language-javascript"><code class="language-javascript">if (score >= 70) console.log("passed");
else if (score >= 90) console.log("aced it");
// score 95 → "passed" wins, "aced it" never runs
// fix: put >= 90 in the if (more specific first)</code></pre>

<pre class="language-javascript"><code class="language-javascript">if (a) { ... }
if (b) { ... }
// two separate ifs — both can run
// fix: if you want only one to run, chain with else if</code></pre>

<pre class="language-javascript"><code class="language-javascript">else if (something) { ... }
// SyntaxError — else if can't start a chain
// fix: must have an if first</code></pre>

<pre class="language-javascript"><code class="language-javascript">if (response.status === 200) handleSuccess();
else if (response.status === 200) handleAgain();
// the second branch never runs — same condition as the first
// fix: each branch should check something different</code></pre>

<pre class="language-javascript"><code class="language-javascript">if (n > 0)
  console.log("positive");
  console.log("really");
else if (n < 0)
  console.log("negative");
// the second console.log isn't part of the if — it always runs
// then else if has nothing to attach to → SyntaxError
// fix: always wrap in braces</code></pre>

<pre class="language-javascript"><code class="language-javascript">if (a > 0 && b > 0 || c > 0) { ... }
// works, but precedence isn't obvious — && binds tighter than ||
// fix: add parens — if ((a > 0 && b > 0) || c > 0)</code></pre>
  `,

  /* --- Chunk 3: In Practice --- */

  /* 3.0 Tiny examples */
  'topics-6-7-3-0': `
<pre class="language-javascript"><code class="language-javascript">// if as a standalone gate
if (cart.length > 0) {
  enableCheckout();
}

// if as the start of a two-branch chain
const isLoggedIn = false;
if (isLoggedIn) {
  console.log("dashboard");
} else {
  console.log("login");
}
// prints: "login"

// if as the first of a three-branch chain
const score = 85;
if (score >= 90)      console.log("A");
else if (score >= 80) console.log("B");
else                  console.log("below B");
// prints: "B"

// Most specific first — important ordering
const value = 100;
if (value > 50)  console.log("> 50");
else if (value > 25) console.log("> 25");
else if (value > 10) console.log("> 10");
else                 console.log("small");
// prints: "> 50" — first match wins

// if checking truthiness
const user = { name: "Os" };
if (user)         console.log("user exists");
else if (user === null) console.log("no user");
// prints: "user exists"</code></pre>
  `,

  /* 3.1 Real website uses */
  'topics-6-7-3-1': `
    <p><strong>Example: validation order matters</strong></p>
<pre class="language-javascript"><code class="language-javascript">function validateEmail(email) {
  if (!email)                      return "Email is required";    // most specific check first
  else if (!email.includes("@"))    return "Missing @";
  else if (email.length < 5)        return "Too short";
  else                              return null;
}

console.log(validateEmail(""));
// prints: "Email is required"
// the if catches the empty case before any other check would fail with an error</code></pre>

    <p><strong>Example: routing</strong></p>
<pre class="language-javascript"><code class="language-javascript">function getRoute(path) {
  if (path === "/")           return renderHome;       // exact match first
  else if (path.startsWith("/users/")) return renderUserProfile;
  else if (path.startsWith("/api/"))   return renderApiDocs;
  else                         return render404;
}

console.log(getRoute("/users/123"));
// prints: a reference to renderUserProfile
// "/" doesn't match, but "/users/" does — caught at the second branch</code></pre>

    <p><strong>Example: render priority</strong></p>
<pre class="language-javascript"><code class="language-javascript">function render(state) {
  if (state.error)             showError(state.error);       // errors win
  else if (state.isLoading)    showSpinner();                 // then loading
  else if (state.items.length === 0) showEmpty();             // then empty
  else                         showItems(state.items);         // finally happy path
}

render({ error: "Network failed", isLoading: true });
// even though isLoading is true, the if catches the error first → showError runs</code></pre>

    <p><strong>Example: pricing tiers</strong></p>
<pre class="language-javascript"><code class="language-javascript">function getDiscount(user) {
  if (user.tier === "platinum")    return 0.30;
  else if (user.tier === "gold")    return 0.20;
  else if (user.tier === "silver")  return 0.10;
  else                              return 0;
}

console.log(getDiscount({ tier: "gold" }));
// prints: 0.2
// the if checks "platinum" first; misses; the second branch matches</code></pre>
  `,

  /* 3.2 Connects to */
  'topics-6-7-3-2': `
    <ul>
      <li><strong><code>else if</code></strong> → backup questions checked only if the <code>if</code> failed</li>
      <li><strong><code>else</code></strong> → fallback when the <code>if</code> and all <code>else if</code>s failed</li>
      <li><strong>Condition order</strong> → most specific in the <code>if</code>, broader conditions later</li>
      <li><strong>Only one branch runs</strong> → including the <code>if</code> branch</li>
      <li><strong>Early return</strong> — common pattern with <code>if</code> at the top of a function</li>
      <li><strong>Guard clauses</strong> → <code>if</code> at the top of a function for early bail-outs</li>
      <li><strong>Comparison operators</strong> → drive the <code>if</code> condition</li>
      <li><strong>Logical operators</strong> → combine multiple checks in the <code>if</code></li>
    </ul>
  `,

  /* 3.3 See also */
  'topics-6-7-3-3': `
    <ul>
      <li><code>else if</code> as backup question</li>
      <li><code>else</code> as fallback</li>
      <li>Condition order matters</li>
      <li>Only one branch runs</li>
      <li>Guard clauses</li>
      <li>Early return pattern</li>
      <li>Operator precedence</li>
      <li>Truthy and falsy values</li>
    </ul>
  `,


  /* ========================================================= 
   Sub-lesson: 3.7.9 If / Else → else if as backup question
 =======================================================*/

  /* --- Chunk 0: What & How --- */

  /* 0.0 What it is */
  'topics-6-8-0-0': `
    <p><code>else if</code> is a backup question — JavaScript only asks it if the <code>if</code> above already said no. It's the next thing checked when the previous condition failed.</p>
    <p>You can stack as many <code>else if</code> branches as you want. Each one is "if everything above me was false, what about this?"</p>
  `,

  /* 0.1 Syntax */
  'topics-6-8-0-1': `
<pre class="language-javascript"><code class="language-javascript">const weather = "rainy";

if (weather === "sunny") {
  console.log("wear sunglasses");
} else if (weather === "rainy") {
  console.log("bring an umbrella");
} else if (weather === "snowy") {
  console.log("wear a coat");
}

// prints: "bring an umbrella"</code></pre>
    <p>JavaScript checked <code>"sunny"</code> first — false. Moved to the <code>else if</code> for <code>"rainy"</code> — true. Ran that block and exited. The <code>"snowy"</code> branch was never checked.</p>
  `,

  /* 0.2 Anatomy / Breakdown */
  'topics-6-8-0-2': `
<pre class="language-javascript"><code class="language-javascript">const minutes = 45;

if (minutes < 15) {
  console.log("almost done");
} else if (minutes < 30) {
  console.log("halfway");
} else if (minutes < 60) {
  console.log("getting there");
}

// prints: "getting there"

// if (minutes < 15)        → first question — false (45 not < 15)
// else if (minutes < 30)   → backup #1 — only checked because if was false. Also false.
// else if (minutes < 60)   → backup #2 — only checked because everything above failed. True!
// runs THIS block, exits chain</code></pre>
    <p>Each <code>else if</code> is gated by the ones before it. JavaScript only reaches a branch if every check above it was false.</p>
  `,

  /* 0.3 Syntax Details That Matter */
  'topics-6-8-0-3': `
    <p><code>else if</code> can't start a chain — it must follow an <code>if</code> (or another <code>else if</code>):</p>
<pre class="language-javascript"><code class="language-javascript">// Wrong — else if alone
else if (x > 0) { ... }    // SyntaxError

// Right — must follow an if
if (x > 0) { ... }
else if (x === 0) { ... }</code></pre>

    <p>Each <code>else if</code> takes its own condition in parens — same rules as <code>if</code>:</p>
<pre class="language-javascript"><code class="language-javascript">if (x > 0)             { ... }
else if (x < 0)         { ... }    // own condition
else if (x === 0)       { ... }    // own condition
else if (typeof x !== "number") { ... }  // anything that evaluates to truthy/falsy</code></pre>

    <p>You can have as many <code>else if</code> branches as you want — but only one of them will run:</p>
<pre class="language-javascript"><code class="language-javascript">if (status === "active")    { ... }
else if (status === "paused") { ... }
else if (status === "ended")  { ... }
else if (status === "archived") { ... }
else if (status === "deleted")  { ... }
// long chain — but JavaScript stops at the first match</code></pre>

    <p>Order matters. Each <code>else if</code> assumes <em>everything above it was false</em> — you can use that:</p>
<pre class="language-javascript"><code class="language-javascript">// Each branch can rely on the previous failing
if (n > 100)         console.log("very big");
else if (n > 50)     console.log("big");          // implicitly: 50 < n <= 100
else if (n > 10)     console.log("medium");       // implicitly: 10 < n <= 50
else if (n > 0)      console.log("small");        // implicitly: 0 < n <= 10
else                 console.log("zero or negative");

// you don't have to write n > 50 && n <= 100 — it's already implied</code></pre>

    <p>The conditions don't have to be related. <code>else if</code> can ask completely different questions:</p>
<pre class="language-javascript"><code class="language-javascript">if (user.isAdmin)         showAdminPanel();
else if (cart.length > 0)  showCheckout();         // unrelated to user.isAdmin
else if (Date.now() > expiresAt) showExpired();    // also unrelated
else                       showHome();
// totally legal — but harder to read. Each else if asks something different.</code></pre>
  `,

  /* --- Chunk 1: Why & When --- */

  /* 1.0 What problem it solves */
  'topics-6-8-1-0': `
    <p>Sometimes there are more than two cases — but you still want exactly one branch to run. <code>if/else</code> only handles "this or that." <code>else if</code> handles "this, or that, or that other thing, or finally that."</p>
    <p>It's the way to extend a yes/no decision into a multiple-choice decision while keeping the "only one path runs" guarantee.</p>
  `,

  /* 1.1 Why use it */
  'topics-6-8-1-1': `
    <p>Use <code>else if</code> when there are more than two outcomes and you want to handle them as one connected decision — not as separate independent checks.</p>
<pre class="language-javascript"><code class="language-javascript">// Wrong: separate ifs let multiple branches run
if (score >= 90) console.log("A");
if (score >= 80) console.log("B");      // also runs for score 95!
if (score >= 70) console.log("C");      // also runs for score 95!
// score 95 → "A" "B" "C" — three messages, probably not what you want

// Right: chained — only one branch runs
if (score >= 90) console.log("A");
else if (score >= 80) console.log("B");
else if (score >= 70) console.log("C");
// score 95 → "A" only</code></pre>
    <p>If only one path makes sense, chain them. If multiple paths can run independently, use separate <code>if</code>s.</p>
  `,

  /* 1.2 Where you use it */
  'topics-6-8-1-2': `
    <p><code>else if</code> shows up wherever a value falls into one of several distinct categories — score → grade, status → action, error code → message, role → permission level.</p>
<pre class="language-javascript"><code class="language-javascript">// Status → message
function getStatusMessage(status) {
  if (status === "loading")     return "Please wait...";
  else if (status === "success") return "Done!";
  else if (status === "error")   return "Something went wrong";
  else if (status === "idle")    return "Ready";
}

// Time of day → greeting
function getGreeting() {
  const hour = new Date().getHours();
  if (hour < 12)        return "Good morning";
  else if (hour < 17)   return "Good afternoon";
  else if (hour < 21)   return "Good evening";
  else                  return "Good night";
}

// Score → emoji
function scoreToEmoji(score) {
  if (score >= 90)      return "🌟";
  else if (score >= 70) return "✅";
  else if (score >= 50) return "⚠️";
  else                  return "❌";
}</code></pre>
  `,

  /* 1.3 Plain English explanation */
  'topics-6-8-1-3': `
    <p><code>else if</code> is "if the previous answer was no, ask this instead." It's the next question in line. JavaScript only gets to it when everything above it failed.</p>
    <p>You can stack as many as you need, like a flowchart with several steps. JavaScript walks down the list one question at a time, and the first "yes" wins. Everything below the winner gets skipped.</p>
    <p>This is what makes <code>else if</code> different from a separate <code>if</code>: it's connected to the chain. A separate <code>if</code> would still get checked even after one matched.</p>
  `,

  /* 1.4 Mental model */
  'topics-6-8-1-4': `
    <p><code>else if</code> is the "next" arrow in a flowchart of yes/no questions. JavaScript follows the arrows top to bottom, taking the first "yes" branch.</p>
<pre class="language-javascript"><code class="language-javascript">// if (A?)        ──→ true → run A, EXIT chain
//   ↓ false
// else if (B?)   ──→ true → run B, EXIT chain
//   ↓ false
// else if (C?)   ──→ true → run C, EXIT chain
//   ↓ false
// else           ──→ run fallback, EXIT chain
//
// only ONE block runs across the whole chain.
// the rest are skipped — not just unfinished, completely ignored.</code></pre>
    <p>Each <code>else if</code> has built-in "and the previous one was false." You don't have to repeat that check — it's automatic.</p>
  `,

  /* 1.5 Step-by-step walkthrough */
  'topics-6-8-1-5': `
<pre class="language-javascript"><code class="language-javascript">const role = "editor";

if (role === "admin") {
  console.log("full access");
} else if (role === "editor") {
  console.log("edit access");
} else if (role === "viewer") {
  console.log("read access");
} else {
  console.log("no access");
}

// prints: "edit access"

// JavaScript is thinking:
// Line 1: register role, value "editor".
// Line 3: see if (role === "admin") → "editor" === "admin" → false. Skip block.
// Line 5: see else if (role === "editor") → check this because the if was false.
//   "editor" === "editor" → true. Run THIS block.
// Line 6: log "edit access".
// Line 7: see else if → SKIP. The chain already matched, no more branches checked.
// Line 9: see else → SKIP. Done.</code></pre>
  `,

  /* --- Chunk 2: The Click --- */

  /* 2.0 Debugging clue */
  'topics-6-8-2-0': `
    <p>If an <code>else if</code> never runs when you expected, an earlier branch caught it first. Log the conditions in order to see which one matched:</p>
<pre class="language-javascript"><code class="language-javascript">const score = 92;

console.log(">= 70?", score >= 70);
console.log(">= 80?", score >= 80);
console.log(">= 90?", score >= 90);

if (score >= 70)        console.log("→ C");
else if (score >= 80)   console.log("→ B");
else if (score >= 90)   console.log("→ A");

// prints:
//   >= 70? true
//   >= 80? true
//   >= 90? true
//   → C
// "C" wins because it's the first true. "B" and "A" never get checked.
// fix: order specific to broad — >= 90, >= 80, >= 70</code></pre>

    <p>The fix is almost always: <strong>reorder so the most specific condition is first</strong>. The chain commits to the first match, so put what you really want to win at the top.</p>
  `,

  /* 2.1 The part that makes it click */
  'topics-6-8-2-1': `
    <p>An <code>else if</code> only runs when nothing above it ran. That's the whole rule. Each branch implicitly carries "and everything above me was false."</p>
    <p>Once you internalize this, you stop writing redundant conditions like <code>if (x &gt;= 90 &amp;&amp; x &lt; 100)</code> — you just write <code>else if (x &gt;= 90)</code> after a check for <code>&gt;= 100</code>, and the "less than 100" part is implied.</p>
  `,

  /* 2.2 Common confusions */
  'topics-6-8-2-2': `
    <p><strong>Confusion: order changes the result</strong></p>
<pre class="language-javascript"><code class="language-javascript">// Order A — broader first
if (n > 0) console.log("positive");
else if (n > 100) console.log("big");
// for n = 500, prints "positive" — "big" never reached

// Order B — specific first
if (n > 100) console.log("big");
else if (n > 0) console.log("positive");
// for n = 500, prints "big"</code></pre>

    <p><strong>Confusion: <code>else if</code> vs <code>else</code> + nested <code>if</code></strong></p>
<pre class="language-javascript"><code class="language-javascript">// These behave the same:
if (a) doA();
else if (b) doB();

if (a) doA();
else { if (b) doB(); }    // less common, more nesting

// always prefer else if — flatter, easier to read</code></pre>

    <p><strong>Confusion: implicit "and previous was false"</strong></p>
<pre class="language-javascript"><code class="language-javascript">// Don't do this — redundant
if (n > 100) console.log("big");
else if (n > 50 && n <= 100) console.log("medium");   // n <= 100 is already implied!

// Cleaner — the chain handles it
if (n > 100) console.log("big");
else if (n > 50) console.log("medium");   // by definition, n is also <= 100 here</code></pre>

    <p><strong>Confusion: separate <code>if</code>s let multiple branches run</strong></p>
<pre class="language-javascript"><code class="language-javascript">// Two SEPARATE ifs — both can run
if (user.isAdmin) showAdminPanel();
if (user.isEditor) showEditorPanel();
// admin who is also editor → both panels show

// Chained — only ONE runs
if (user.isAdmin) showAdminPanel();
else if (user.isEditor) showEditorPanel();
// admin who is also editor → only admin panel shows

// pick based on intent</code></pre>

    <p><strong>Confusion: each <code>else if</code> needs its own condition</strong></p>
<pre class="language-javascript"><code class="language-javascript">if (a > 0) { ... }
else if { ... }            // SyntaxError — missing condition
else if (b > 0) { ... }    // correct</code></pre>
  `,

  /* 2.3 Common mistakes */
  'topics-6-8-2-3': `
<pre class="language-javascript"><code class="language-javascript">if (score >= 70) console.log("passed");
else if (score >= 90) console.log("aced it");
// score 95 → "passed" wins, "aced it" never runs
// fix: reorder — most specific first</code></pre>

<pre class="language-javascript"><code class="language-javascript">else if (x > 0) { ... }
// SyntaxError — else if can't start a chain
// fix: must follow an if — if (...) { ... } else if (x > 0) { ... }</code></pre>

<pre class="language-javascript"><code class="language-javascript">if (a) { ... }
else (b > 0) { ... }
// wrong: else doesn't take a condition
// fix: else if (b > 0) { ... }</code></pre>

<pre class="language-javascript"><code class="language-javascript">if (n > 100) console.log("big");
else if (n > 50 && n <= 100) console.log("medium");
// works, but the && check is redundant — chain already implies it
// fix: else if (n > 50) — cleaner</code></pre>

<pre class="language-javascript"><code class="language-javascript">if (status === "active") handleActive();
else if (status === "active") handleAlsoActive();
// the second branch never runs — same condition as the first
// fix: each branch should test something different</code></pre>

<pre class="language-javascript"><code class="language-javascript">if (status === "ok")
  handleOk();
  log("ok");
else if (status === "fail")
  handleFail();
// log("ok") always runs — only handleOk() is part of the if branch
// then else if has nothing to attach to → SyntaxError
// fix: always wrap branch bodies in braces</code></pre>
  `,

  /* --- Chunk 3: In Practice --- */

  /* 3.0 Tiny examples */
  'topics-6-8-3-0': `
<pre class="language-javascript"><code class="language-javascript">// Two-branch chain
const isLoggedIn = false;
if (isLoggedIn) {
  console.log("welcome back");
} else if (!isLoggedIn) {
  console.log("please log in");
}
// prints: "please log in"

// Multi-branch chain
const grade = 75;
if (grade >= 90)      console.log("A");
else if (grade >= 80) console.log("B");
else if (grade >= 70) console.log("C");
else                  console.log("below C");
// prints: "C"

// Different conditions in each branch
const x = 10;
if (typeof x !== "number") console.log("not a number");
else if (x === 0)           console.log("zero");
else if (x % 2 === 0)       console.log("even");
else                        console.log("odd");
// prints: "even"

// Long chain with no else
const day = "Wednesday";
if (day === "Monday")    console.log("start");
else if (day === "Wednesday") console.log("middle");
else if (day === "Friday")    console.log("end");
// prints: "middle"
// nothing prints if day is something else — no fallback</code></pre>
  `,

  /* 3.1 Real website uses */
  'topics-6-8-3-1': `
    <p><strong>Example: pricing tiers</strong></p>
<pre class="language-javascript"><code class="language-javascript">function getPrice(quantity) {
  if (quantity >= 100)     return 0.50;       // bulk price
  else if (quantity >= 10) return 0.75;       // wholesale
  else                     return 1.00;       // retail
}

console.log(getPrice(15));
// prints: 0.75</code></pre>

    <p><strong>Example: notification level</strong></p>
<pre class="language-javascript"><code class="language-javascript">function alertLevel(unread) {
  if (unread === 0)       return "no alerts";
  else if (unread < 5)    return "few alerts";
  else if (unread < 20)   return "many alerts";
  else                    return "tons of alerts";
}

console.log(alertLevel(8));
// prints: "many alerts"</code></pre>

    <p><strong>Example: form validation chain</strong></p>
<pre class="language-javascript"><code class="language-javascript">function validatePassword(pw) {
  if (!pw)                       return "Password is required";
  else if (pw.length < 8)         return "Too short — 8+ characters";
  else if (pw.length > 64)        return "Too long";
  else if (!/[A-Z]/.test(pw))     return "Need an uppercase letter";
  else if (!/[0-9]/.test(pw))     return "Need a number";
  else                            return null;
}

console.log(validatePassword("hello"));
// prints: "Too short — 8+ characters"
// chain stops at the first failure — efficient and gives one error at a time</code></pre>

    <p><strong>Example: file size formatting</strong></p>
<pre class="language-javascript"><code class="language-javascript">function formatBytes(bytes) {
  if (bytes >= 1_000_000_000) return (bytes / 1e9).toFixed(1) + " GB";
  else if (bytes >= 1_000_000) return (bytes / 1e6).toFixed(1) + " MB";
  else if (bytes >= 1_000)     return (bytes / 1e3).toFixed(1) + " KB";
  else                         return bytes + " B";
}

console.log(formatBytes(1500000));
// prints: "1.5 MB"</code></pre>
  `,

  /* 3.2 Connects to */
  'topics-6-8-3-2': `
    <ul>
      <li><strong><code>if</code></strong> → must come before any <code>else if</code></li>
      <li><strong><code>else</code></strong> → optional fallback after the last <code>else if</code></li>
      <li><strong>Condition order</strong> → most specific first, otherwise broader matches catch first</li>
      <li><strong>Only one branch runs</strong> → the chain commits</li>
      <li><strong>Separate ifs vs chain</strong> → different patterns, different behavior</li>
      <li><strong>Switch statements</strong> → an alternative when comparing one value to many specific options</li>
      <li><strong>Implicit conditions</strong> → each branch already implies "previous was false"</li>
      <li><strong>Comparison operators</strong> → drive each <code>else if</code></li>
    </ul>
  `,

  /* 3.3 See also */
  'topics-6-8-3-3': `
    <ul>
      <li><code>if</code></li>
      <li><code>else</code></li>
      <li><code>switch</code></li>
      <li>Condition order matters</li>
      <li>Only one branch runs</li>
      <li>Separate <code>if</code> vs chain</li>
      <li>Comparison operators</li>
      <li>Logical operators</li>
    </ul>
  `,


  /* ========================================================= 
   Sub-lesson: 3.7.10 If / Else → else as fallback
 =======================================================*/

  /* --- Chunk 0: What & How --- */

  /* 0.0 What it is */
  'topics-6-9-0-0': `
    <p><code>else</code> at the end of an <code>if/else if</code> chain is the fallback — the catch-all that runs when nothing else matched. It's the safety net.</p>
    <p>It doesn't ask a question. It just runs whenever every condition above it failed. It guarantees that <em>something</em> happens, no matter what.</p>
  `,

  /* 0.1 Syntax */
  'topics-6-9-0-1': `
<pre class="language-javascript"><code class="language-javascript">const role = "guest";

if (role === "admin") {
  console.log("full access");
} else if (role === "editor") {
  console.log("edit access");
} else {
  console.log("limited access");
}

// prints: "limited access"</code></pre>
    <p>The <code>"admin"</code> check failed. The <code>"editor"</code> check failed. <code>else</code> caught it — running its block as the default for "anything not handled above."</p>
  `,

  /* 0.2 Anatomy / Breakdown */
  'topics-6-9-0-2': `
<pre class="language-javascript"><code class="language-javascript">const score = 45;

if (score >= 90) {
  console.log("A");
} else if (score >= 70) {
  console.log("passing");
} else {
  console.log("needs work");
}

// prints: "needs work"

// if (score >= 90)         → first question, false
// else if (score >= 70)    → second question, also false
// else                     → no condition — runs because everything above failed
// { console.log(...) }     → the fallback block</code></pre>
    <p><code>else</code> has no parens, no condition. It's just "if nothing else matched, do this." It's the chain's guarantee that something runs.</p>
  `,

  /* 0.3 Syntax Details That Matter */
  'topics-6-9-0-3': `
    <p><code>else</code> goes at the very end — only one per chain, and always last:</p>
<pre class="language-javascript"><code class="language-javascript">// Correct — single else at the end
if (a) { ... }
else if (b) { ... }
else { ... }

// Wrong — else not at the end
if (a) { ... }
else { ... }
else if (b) { ... }     // SyntaxError</code></pre>

    <p>The <code>else</code> is optional — leave it off if you don't need a fallback:</p>
<pre class="language-javascript"><code class="language-javascript">// With fallback — guaranteed to run something
if (status === "active")    handleActive();
else if (status === "paused") handlePaused();
else                          handleUnknown();    // fallback

// Without fallback — does nothing if status is unrecognized
if (status === "active")    handleActive();
else if (status === "paused") handlePaused();</code></pre>

    <p><code>else</code> covers <em>everything</em> not handled above — including unexpected values:</p>
<pre class="language-javascript"><code class="language-javascript">const role = null;

if (role === "admin")  showAdmin();
else if (role === "user") showUser();
else                    showGuest();
// role is null — none of the explicit checks matched, so the fallback runs
// fallback catches: undefined, null, "", 0, "guest", any unexpected string, etc.</code></pre>

    <p>Adding <code>else</code> after an early-returning chain is unnecessary:</p>
<pre class="language-javascript"><code class="language-javascript">// Both work — but the second is cleaner
function check(x) {
  if (x > 0) return "positive";
  else if (x < 0) return "negative";
  else return "zero";
}

function check(x) {
  if (x > 0) return "positive";
  if (x < 0) return "negative";
  return "zero";    // implicit fallback after returns
}
// when each branch returns, the function exits — no need for else</code></pre>
  `,

  /* --- Chunk 1: Why & When --- */

  /* 1.0 What problem it solves */
  'topics-6-9-1-0': `
    <p>An <code>if/else if</code> chain might miss every case. If none of the conditions match, the whole chain just does nothing — which is sometimes correct, but often a bug.</p>
    <p><code>else</code> is how you guarantee a behavior. "If everything above missed, run this." It's the safety net that makes sure you don't silently drop unexpected values.</p>
  `,

  /* 1.1 Why use it */
  'topics-6-9-1-1': `
    <p>Use <code>else</code> when you want a guaranteed default — something that runs no matter what. Skip it when "do nothing if nothing matches" is the intended behavior.</p>
<pre class="language-javascript"><code class="language-javascript">// With else — guaranteed handling
function getDiscount(tier) {
  if (tier === "platinum")    return 0.30;
  else if (tier === "gold")    return 0.20;
  else if (tier === "silver")  return 0.10;
  else                          return 0;       // default for any unknown tier
}

console.log(getDiscount("bronze"));
console.log(getDiscount(undefined));
// prints: 0, then 0
// no matter what tier you pass, you get a number back

// Without else — undefined for unknown tiers
function getDiscount(tier) {
  if (tier === "platinum")    return 0.30;
  else if (tier === "gold")    return 0.20;
  else if (tier === "silver")  return 0.10;
  // no fallback
}

console.log(getDiscount("bronze"));
// prints: undefined — silent gap</code></pre>
    <p>Defaults prevent surprises. The fallback turns "this might break" into "this can't break."</p>
  `,

  /* 1.2 Where you use it */
  'topics-6-9-1-2': `
    <p><code>else</code> shows up wherever there's a clear "default" — the catch-all path when none of the specific conditions hit.</p>
<pre class="language-javascript"><code class="language-javascript">// Default content
if (state.error)             showError();
else if (state.isLoading)    showSpinner();
else                         showItems();        // happy path is the fallback

// Default permission level
if (user.isAdmin)            return "all";
else if (user.isEditor)      return "edit";
else                         return "read";       // anyone else: read-only

// Default UI state
if (cart.length === 0)       message = "Cart is empty";
else if (cart.length === 1)  message = "1 item in cart";
else                         message = cart.length + " items in cart";

// Default error message
if (response.status === 200) handleOk();
else if (response.status === 404) showNotFound();
else                          showGenericError();    // anything else</code></pre>
  `,

  /* 1.3 Plain English explanation */
  'topics-6-9-1-3': `
    <p><code>else</code> is "otherwise, just do this." It's the catch-all at the bottom of the chain. JavaScript only reaches it when every <code>if</code> and <code>else if</code> above said no.</p>
    <p>It doesn't get its own condition — it doesn't need one. It's literally "everything that wasn't handled above lands here." Every unexpected value, every edge case, every typo in input. <code>else</code> catches it all.</p>
    <p>If you want a guaranteed behavior, add <code>else</code>. If "do nothing for unmatched cases" is fine, leave it off.</p>
  `,

  /* 1.4 Mental model */
  'topics-6-9-1-4': `
    <p><code>else</code> is the safety net at the end of the chain. It only catches things that fell through every condition above.</p>
<pre class="language-javascript"><code class="language-javascript">// if (A?)        → true → run A, EXIT
// else if (B?)   → true → run B, EXIT
// else if (C?)   → true → run C, EXIT
// else           → catch everything else → EXIT
//
// without else: if A, B, C all fail, NOTHING runs.
// with else:    something always runs (one of A, B, C, or else).</code></pre>
    <p>The presence of <code>else</code> turns the chain from "might do nothing" into "always does exactly one thing."</p>
  `,

  /* 1.5 Step-by-step walkthrough */
  'topics-6-9-1-5': `
<pre class="language-javascript"><code class="language-javascript">const day = "Tuesday";

if (day === "Saturday" || day === "Sunday") {
  console.log("weekend");
} else if (day === "Friday") {
  console.log("almost weekend");
} else {
  console.log("just a weekday");
}

// prints: "just a weekday"

// JavaScript is thinking:
// Line 1: register day, value "Tuesday".
// Line 3: see if (day === "Saturday" || day === "Sunday") → both false → false. Skip block.
// Line 5: see else if (day === "Friday") → "Tuesday" === "Friday" → false. Skip block.
// Line 7: see else → no condition, this runs because everything above failed.
// Line 8: log "just a weekday".
// Line 9: end of chain. Done.</code></pre>
  `,

  /* --- Chunk 2: The Click --- */

  /* 2.0 Debugging clue */
  'topics-6-9-2-0': `
    <p>If your <code>else</code> branch runs when you didn't expect it to, none of the <code>if</code> or <code>else if</code> conditions above matched. Log them in order to see why:</p>
<pre class="language-javascript"><code class="language-javascript">const role = "Admin";    // capital A

console.log("admin?", role === "admin");
console.log("editor?", role === "editor");

if (role === "admin")        console.log("→ full");
else if (role === "editor")  console.log("→ edit");
else                          console.log("→ default");

// prints:
//   admin? false
//   editor? false
//   → default
// "Admin" with a capital A doesn't match "admin" lowercase — strict equality is case-sensitive
// fix: normalize input — role.toLowerCase() === "admin"</code></pre>

    <p>Or the opposite: if <code>else</code> never runs and you expected it to, one of your earlier conditions is too broad and is catching everything.</p>
  `,

  /* 2.1 The part that makes it click */
  'topics-6-9-2-1': `
    <p><code>else</code> is the <em>only</em> branch in a chain that's not gated by a condition. It runs purely because nothing above it ran. That's its whole identity.</p>
    <p>Adding <code>else</code> means "I want exactly one branch in this chain to run, no matter what." Skipping it means "if nothing matches, I'm fine doing nothing."</p>
  `,

  /* 2.2 Common confusions */
  'topics-6-9-2-2': `
    <p><strong>Confusion: <code>else</code> doesn't take a condition</strong></p>
<pre class="language-javascript"><code class="language-javascript">if (x > 0) { ... }
else (x === 0) { ... }     // wrong — else doesn't take parens with a condition
else if (x === 0) { ... }  // right — for an alternate condition
else { ... }                // right — catch-all</code></pre>

    <p><strong>Confusion: only one <code>else</code> per chain</strong></p>
<pre class="language-javascript"><code class="language-javascript">if (a) { ... }
else { ... }
else { ... }       // SyntaxError — can't have two else branches
// fix: use else if for additional checks, only one final else</code></pre>

    <p><strong>Confusion: <code>else</code> matches the nearest <code>if</code></strong></p>
<pre class="language-javascript"><code class="language-javascript">if (a)
  if (b) console.log("both");
else console.log("not a");
// the else attaches to the INNER if (b) — visually misleading
// fix: always use braces with nested ifs
if (a) {
  if (b) console.log("both");
} else {
  console.log("not a");
}</code></pre>

    <p><strong>Confusion: <code>else</code> isn't required</strong></p>
<pre class="language-javascript"><code class="language-javascript">// No else — fine if "do nothing" is correct for unmatched cases
if (status === "ok")    handleOk();
else if (status === "fail") handleFail();
// status is "warning" → nothing happens, that might be intentional</code></pre>

    <p><strong>Confusion: <code>else</code> with returns is often unnecessary</strong></p>
<pre class="language-javascript"><code class="language-javascript">// Works, but verbose
function classify(n) {
  if (n > 0)      return "positive";
  else if (n < 0) return "negative";
  else            return "zero";
}

// Cleaner — return makes else redundant
function classify(n) {
  if (n > 0) return "positive";
  if (n < 0) return "negative";
  return "zero";    // the implicit fallback
}</code></pre>
  `,

  /* 2.3 Common mistakes */
  'topics-6-9-2-3': `
<pre class="language-javascript"><code class="language-javascript">if (x > 0) { ... }
else (x < 0) { ... }
// wrong: else doesn't take a condition
// fix: else if (x < 0) { ... }</code></pre>

<pre class="language-javascript"><code class="language-javascript">if (a) { ... }
else { ... }
else { ... }
// SyntaxError — only one else per chain
// fix: replace the second else with else if (...) or remove it</code></pre>

<pre class="language-javascript"><code class="language-javascript">if (a)
  doA();
else
  doB();
  doC();
// doC() always runs — only doB() is part of the else
// fix: wrap in braces — else { doB(); doC(); }</code></pre>

<pre class="language-javascript"><code class="language-javascript">if (status === "ok") handleOk();
else if (status === "fail") handleFail();
// no else, no default → unrecognized statuses silently do nothing
// fix: add else if a default behavior is needed</code></pre>

<pre class="language-javascript"><code class="language-javascript">function classify(n) {
  if (n > 0) return "positive";
  else if (n < 0) return "negative";
  else return "zero";
}
// works, but else is redundant after return
// fix: drop else — return ends the function anyway</code></pre>

<pre class="language-javascript"><code class="language-javascript">if (a)
  if (b) doX();
else doY();
// confusing — else attaches to the inner if(b), not if(a)
// fix: always use braces:
//   if (a) { if (b) doX(); } else { doY(); }</code></pre>
  `,

  /* --- Chunk 3: In Practice --- */

  /* 3.0 Tiny examples */
  'topics-6-9-3-0': `
<pre class="language-javascript"><code class="language-javascript">// Basic else as binary fallback
const isOnline = false;
if (isOnline) {
  console.log("connected");
} else {
  console.log("offline");
}
// prints: "offline"

// else at the end of a chain
const grade = 65;
if (grade >= 90)      console.log("A");
else if (grade >= 80) console.log("B");
else if (grade >= 70) console.log("C");
else                  console.log("below C");
// prints: "below C"

// Fallback default value
function getColor(name) {
  if (name === "red")   return "#ff0000";
  else if (name === "green") return "#00ff00";
  else if (name === "blue")  return "#0000ff";
  else                  return "#000000";    // default for unknown
}
getColor("orange");
// returns: "#000000"

// Catch unexpected values
const userInput = " Unknown ";
const cleaned = userInput.trim().toLowerCase();
if (cleaned === "yes")      console.log("confirmed");
else if (cleaned === "no")  console.log("declined");
else                        console.log("invalid input");
// prints: "invalid input"

// Skipping else when it's not needed
if (cart.length > 0) {
  showCheckout();
}
// no else — if cart is empty, nothing happens</code></pre>
  `,

  /* 3.1 Real website uses */
  'topics-6-9-3-1': `
    <p><strong>Example: render with default state</strong></p>
<pre class="language-javascript"><code class="language-javascript">function render(state) {
  if (state.error)              showError(state.error);
  else if (state.isLoading)     showSpinner();
  else if (state.items.length === 0) showEmpty();
  else                          showItems(state.items);
}

render({ error: null, isLoading: false, items: [{ id: 1 }] });
// hits the else → calls showItems with the data</code></pre>

    <p><strong>Example: HTTP error handling fallback</strong></p>
<pre class="language-javascript"><code class="language-javascript">function handleResponse(response) {
  if (response.status === 200)       showSuccess();
  else if (response.status === 401)  redirectLogin();
  else if (response.status === 404)  show404();
  else                                showGenericError();   // any other status code
}

handleResponse({ status: 503 });
// hits the else → showGenericError handles unexpected codes</code></pre>

    <p><strong>Example: feature gating with default</strong></p>
<pre class="language-javascript"><code class="language-javascript">function getMaxUploadSize(user) {
  if (user.isPremium)     return 1000;     // 1 GB
  else if (user.isPro)    return 100;       // 100 MB
  else                    return 10;        // default for free users
}

const limit = getMaxUploadSize({ isPremium: false, isPro: false });
console.log(limit);
// prints: 10
// every user gets a number, no matter what — the else guarantees it</code></pre>

    <p><strong>Example: form mode toggle</strong></p>
<pre class="language-javascript"><code class="language-javascript">function setFormMode(mode) {
  if (mode === "create")      enableCreateMode();
  else if (mode === "edit")    enableEditMode();
  else if (mode === "view")    enableViewMode();
  else                          enableViewMode();   // unknown mode → safe default
}

setFormMode("preview");
// "preview" doesn't match any case → falls through to the safe default</code></pre>
  `,

  /* 3.2 Connects to */
  'topics-6-9-3-2': `
    <ul>
      <li><strong><code>if</code></strong> → <code>else</code> always pairs with a preceding <code>if</code></li>
      <li><strong><code>else if</code></strong> → can stack between <code>if</code> and <code>else</code></li>
      <li><strong>Optional fallback</strong> → <code>else</code> isn't required, but useful for guaranteeing a behavior</li>
      <li><strong>Default values</strong> → <code>else</code> often holds the default case</li>
      <li><strong>Early return</strong> → returning in each branch can make <code>else</code> unnecessary</li>
      <li><strong>Switch <code>default</code></strong> → the equivalent of <code>else</code> in a <code>switch</code></li>
      <li><strong>Truthy and falsy</strong> → what makes the if condition fail and trigger else</li>
      <li><strong>Catch-all behavior</strong> → covering unexpected values</li>
    </ul>
  `,

  /* 3.3 See also */
  'topics-6-9-3-3': `
    <ul>
      <li><code>if</code></li>
      <li><code>else if</code></li>
      <li><code>switch</code> + <code>default</code></li>
      <li>Default values</li>
      <li>Early return pattern</li>
      <li>Truthy and falsy</li>
      <li>Dangling else problem</li>
      <li>Code blocks</li>
    </ul>
  `,

});
