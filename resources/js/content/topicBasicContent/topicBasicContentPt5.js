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
if (isLoggedIn) {
  showDashboard();
}

// if + else — one of two paths
if (age >= 18) {
  showAdult();
} else {
  showMinor();
}

// if + else if + else — many paths, one fallback
if (score >= 90) {
  grade = "A";
} else if (score >= 80) {
  grade = "B";
} else if (score >= 70) {
  grade = "C";
} else {
  grade = "F";
}</code></pre>

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
  if (!email.includes("@")) {
    return false;
  }
  if (email.length < 3) {
    return false;
  }
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
// cleanup() always runs — only start() is conditional

// safe with braces:
if (isReady) {
  start();
  cleanup();
}</code></pre>


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
  if (!order) {
    return;
  }
  if (order.items.length === 0) {
    return;
  }
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
if (user.isLoggedIn) {
  showDashboard();
}
if (cart.length > 0) {
  showCheckout();
}
if (hasMessages) {
  showBadge();
}</code></pre>
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
  if (score >= 90) {
    return "A";
  } else if (score >= 80) {
    return "B";
  } else if (score >= 70) {
    return "C";
  } else if (score >= 60) {
    return "D";
  } else {
    return "F";
  }
}

console.log(getGrade(85));
// prints: "B"

// Status → action
if (order.status === "pending") {
  notifyUser();
} else if (order.status === "shipped") {
  trackShipment();
} else if (order.status === "delivered") {
  askForReview();
}</code></pre>
    <p>The chain handles all the cases at once, and exactly one branch runs.</p>
  `,

  /* 1.2 Where you use it */
  'topics-6-2-1-2': `
    <p><code>else if</code> shows up wherever there are several mutually exclusive options to handle.</p>
<pre class="language-javascript"><code class="language-javascript">// Pricing tiers
function getDiscount(user) {
  if (user.tier === "platinum")    
    return 0.30;
  else if (user.tier === "gold")    
    return 0.20;
  else if (user.tier === "silver")  
    return 0.10;
  else                              
    return 0;
}

// UI states
function render(state) {
  if (state.isLoading)              
    showSpinner();
  else if (state.error)             
    showError(state.error);
  else if (state.items.length === 0) 
    showEmptyMessage();
  else                              
    showItems(state.items);
}

// HTTP status handling
if (response.status === 200)        
  handleSuccess();
else if (response.status === 401)   
  redirectToLogin();
else if (response.status === 404)   
  show404();
else if (response.status >= 500)    
  showServerError();
else                                
    showGenericError();</code></pre>
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
if (status === "ok")          
handleOk();
else if (status === "warn") 
  handleWarn();
else if (status === "fail") 
  handleFail();
else                        
  handleUnknown();   // fallback for any other status</code></pre>
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
  if (day === "Saturday")      
    return "weekend";
  else if (day === "Sunday")    
    return "weekend";
  else if (day === "Friday")    
    return "almost weekend";
  else if (day === "Monday")    
    return "start of week";
  else                          
      return "weekday";
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
  case "ADD_ITEM":     
    return state.concat(action.item);
  case "REMOVE_ITEM":  
    return state.filter(i => i.id !== action.id);
  case "CLEAR":        
    return [];
  default:             
    return state;
}

// Keyboard shortcuts
switch (event.key) {
  case "Escape": closeModal(); 
    break;
  case "Enter": submit(); 
    break;
  case "ArrowUp": moveSelection(-1); 
    break;
  case "ArrowDown": moveSelection(1); 
    break;
}

// HTTP status categories
switch (Math.floor(response.status / 100)) {
  case 2: handleSuccess(); 
    break;
  case 4: handleClientError(); 
    break;
  case 5: handleServerError(); 
    break;
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
if (score >= 90)      
  return "A";    // most specific
else if (score >= 80) 
  return "B";
else if (score >= 70) 
  return "C";
else                  
  return "F";

// Most important first — handle errors before normal cases
if (response.error)        
  showError();
else if (response.empty)   
  showEmpty();
else                       
    showData();

// Most common first — for performance, check what's likely
if (input === "")          
  return;     // common: empty input, exit fast
else if (input.length > 100) 
  return;
else                       
  process(input);</code></pre>
    <p>Whichever condition is in the <code>if</code> position gets first dibs. Choose carefully.</p>
  `,

  /* 1.2 Where you use it */
  'topics-6-7-1-2': `
    <p>Every conditional chain starts with <code>if</code> — and what you put there sets up the rest.</p>
<pre class="language-javascript"><code class="language-javascript">// Render based on UI state
if (state.error)             
  showError();       // most urgent first
else if (state.isLoading)    
  showSpinner();
else if (state.items.empty)  
  showEmpty();
else                         
  showItems();

// HTTP responses
if (response.status === 200)       
  handleSuccess();   // happy path first
else if (response.status === 401)  
  redirectLogin();
else if (response.status === 404)  
  show404();
else                               
  showError();

// Form validation
if (!email)                  
  return "Email required";    // missing first
else if (!email.includes("@")) 
  return "Invalid email";   // format second
else if (email.length > 100) 
  return "Too long";
else                         
    return null;
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
if (score >= 90) 
  console.log("A");
if (score >= 80) 
  console.log("B");      // also runs for score 95!
if (score >= 70) 
  console.log("C");      // also runs for score 95!
// score 95 → "A" "B" "C" — three messages, probably not what you want

// Right: chained — only one branch runs
if (score >= 90) 
  console.log("A");
else if (score >= 80) 
  console.log("B");
else if (score >= 70) 
  console.log("C");
// score 95 → "A" only</code></pre>
    <p>If only one path makes sense, chain them. If multiple paths can run independently, use separate <code>if</code>s.</p>
  `,

  /* 1.2 Where you use it */
  'topics-6-8-1-2': `
    <p><code>else if</code> shows up wherever a value falls into one of several distinct categories — score → grade, status → action, error code → message, role → permission level.</p>
<pre class="language-javascript"><code class="language-javascript">// Status → message
function getStatusMessage(status) {
  if (status === "loading")     
    return "Please wait...";
  else if (status === "success") 
    return "Done!";
  else if (status === "error")   
    return "Something went wrong";
  else if (status === "idle")    
    return "Ready";
}

// Time of day → greeting
function getGreeting() {
  const hour = new Date().getHours();
  if (hour < 12)        
    return "Good morning";
  else if (hour < 17)   
    return "Good afternoon";
  else if (hour < 21)   
    return "Good evening";
  else                  
      return "Good night";
}

// Score → emoji
function scoreToEmoji(score) {
  if (score >= 90)      
    return "🌟";
  else if (score >= 70) 
    return "✅";
  else if (score >= 50) 
    return "⚠️";
  else                  
      return "❌";
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
  if (tier === "platinum")    
    return 0.30;
  else if (tier === "gold")    
    return 0.20;
  else if (tier === "silver")  
    return 0.10;
  else                          
    return 0;       // default for any unknown tier
}

console.log(getDiscount("bronze"));
console.log(getDiscount(undefined));
// prints: 0, then 0
// no matter what tier you pass, you get a number back

// Without else — undefined for unknown tiers
function getDiscount(tier) {
  if (tier === "platinum")    
    return 0.30;
  else if (tier === "gold")    
    return 0.20;
  else if (tier === "silver")  
    return 0.10;
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
if (state.error)             
  showError();
else if (state.isLoading)    
  showSpinner();
else                         
  showItems();        // happy path is the fallback

// Default permission level
if (user.isAdmin)            
  return "all";
else if (user.isEditor)      
  return "edit";
else                         
  return "read";       // anyone else: read-only

// Default UI state
if (cart.length === 0)       
  message = "Cart is empty";
else if (cart.length === 1)  
  message = "1 item in cart";
else                         
  message = cart.length + " items in cart";

// Default error message
if (response.status === 200) 
  handleOk();
else if (response.status === 404) 
  showNotFound();
else                          
  showGenericError();    // anything else</code></pre>
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

    /* ========================================================= 
   Sub-lesson: 3.7.11 If / Else → else does not need parentheses
 =======================================================*/

  /* --- Chunk 0: What & How --- */

  /* 0.0 What it is */
  'topics-6-10-0-0': `
    <p>Unlike <code>if</code> and <code>else if</code>, <code>else</code> doesn't take a condition — and it doesn't take parentheses. It's just the word <code>else</code> followed directly by a block of code.</p>
    <p>The reason: <code>else</code> isn't asking a question. It's the catch-all that runs when every condition above has already been checked and failed. There's nothing left to check.</p>
  `,

  /* 0.1 Syntax */
  'topics-6-10-0-1': `
<pre class="language-javascript"><code class="language-javascript">const isOnline = false;

if (isOnline) {
  console.log("connected");
} else {
  console.log("offline");
}

// prints: "offline"
// notice: else has no ( ) after it — just goes straight to {</code></pre>
    <p><code>if</code> needs parens because it has a condition to evaluate. <code>else</code> has nothing to evaluate, so it skips straight to its block.</p>
  `,

  /* 0.2 Anatomy / Breakdown */
  'topics-6-10-0-2': `
<pre class="language-javascript"><code class="language-javascript">const day = "Tuesday";

if (day === "Saturday") {
  console.log("weekend");
} else if (day === "Friday") {
  console.log("almost weekend");
} else {
  console.log("regular day");
}

// prints: "regular day"

// if              → keyword
// (day === ...)   → condition in parens
// { ... }         → block

// else if         → keyword pair
// (day === ...)   → condition in parens
// { ... }         → block

// else            → keyword only — NO parens, NO condition
// { ... }         → block runs whenever everything above failed</code></pre>
    <p>The pattern: <code>if</code> and <code>else if</code> always have parens because they need a condition. <code>else</code> never has parens because it doesn't.</p>
  `,

  /* 0.3 Syntax Details That Matter */
  'topics-6-10-0-3': `
    <p>Putting parens after <code>else</code> is a syntax error in spirit — JavaScript will misread it:</p>
<pre class="language-javascript"><code class="language-javascript">if (x > 0) { ... }
else (x < 0) { ... }
// JS parses this as: else { (x < 0) }; { ... }
// the (x < 0) becomes a meaningless expression, then { ... } is treated as a separate empty block
// fix: if you want a condition, use else if (x < 0) { ... }
//      if you don't, use else { ... }</code></pre>

    <p>Don't confuse <code>else</code> with <code>else if</code> — they're spelled almost the same but behave differently:</p>
<pre class="language-javascript"><code class="language-javascript">// else (no parens, no condition) — catch-all
if (x > 0) { ... }
else { ... }

// else if (with parens, with condition) — backup question
if (x > 0) { ... }
else if (x === 0) { ... }</code></pre>

    <p>The block after <code>else</code> uses braces just like any other block:</p>
<pre class="language-javascript"><code class="language-javascript">if (cart.length > 0) {
  showCheckout();
} else {
  showEmptyMessage();
  trackEvent("empty_cart_view");     // multiple statements all run together
}</code></pre>

    <p>Technically, the braces are optional for a single statement (same as <code>if</code>), but always use them:</p>
<pre class="language-javascript"><code class="language-javascript">// Works without braces — risky once you add lines
if (a) doA();
else doB();

// Always-safe with braces
if (a) {
  doA();
} else {
  doB();
}</code></pre>
  `,

  /* --- Chunk 1: Why & When --- */

  /* 1.0 What problem it solves */
  'topics-6-10-1-0': `
    <p>JavaScript needs to know whether a branch has a condition or not. The parens are how it knows. <code>if (...)</code> says "here's something to evaluate." <code>else</code> with no parens says "no condition — just run my block as the fallback."</p>
    <p>If <code>else</code> took parens, it'd be ambiguous with <code>else if</code>. The lack of parens is what makes <code>else</code> recognizable as the catch-all.</p>
  `,

  /* 1.1 Why use it */
  'topics-6-10-1-1': `
    <p>Recognize the pattern: every branch with a condition has parens, the catch-all doesn't.</p>
<pre class="language-javascript"><code class="language-javascript">if (a > 0)             { ... }    // condition → parens
else if (a < 0)         { ... }    // condition → parens
else if (a === 0)       { ... }    // condition → parens
else                    { ... }    // no condition → no parens

// remembering this also helps debug: if you see else (something), it's a typo
// either drop the parens to make it the catch-all, or add "if" to make it else if</code></pre>
  `,

  /* 1.2 Where you use it */
  'topics-6-10-1-2': `
    <p>This rule applies wherever you write an <code>if/else</code> chain — every chain that has an <code>else</code> uses the no-parens form.</p>
<pre class="language-javascript"><code class="language-javascript">// Two-branch
if (isLoggedIn) 
  showDashboard();
else            
    showLogin();

// Three-branch
if (n > 0)      
  console.log("positive");
else if (n < 0) 
  console.log("negative");
else            
  console.log("zero");

// Long chain
if (status === "ok")        
  handleOk();
else if (status === "warn")  
  handleWarn();
else if (status === "fail")  
  handleFail();
else                          
  handleUnknown();    // still no parens

// Inside functions, returning from each branch
function classify(n) {
  if (n > 0)      
    return "positive";
  else if (n < 0) 
    return "negative";
  else            
    return "zero";          // else, no parens
}</code></pre>
  `,

  /* 1.3 Plain English explanation */
  'topics-6-10-1-3': `
    <p><code>if</code> says "if this question is true." It has a question, so it has parens.</p>
    <p><code>else if</code> says "if not, then if this question is true." Also has a question, also has parens.</p>
    <p><code>else</code> just says "otherwise." No question — it runs whenever nothing else matched. Since there's no question, there's nothing to put in parens.</p>
    <p>It's a tiny rule, but easy to get wrong if you're typing fast or thinking <code>else</code> behaves like <code>else if</code>.</p>
  `,

  /* 1.4 Mental model */
  'topics-6-10-1-4': `
    <p>Parens hold the question. <code>else</code> isn't a question — so no parens.</p>
<pre class="language-javascript"><code class="language-javascript">if (x > 0) { ... }       // question: "is x > 0?"   → needs parens
else if (x < 0) { ... }   // question: "is x < 0?"   → needs parens
else { ... }              // no question — just runs → no parens

// the rule is mechanical: condition exists → parens. No condition → no parens.</code></pre>
    <p>Think of <code>else</code> as the "default" or "otherwise" case. Defaults don't have conditions — they're what happens when no specific case applies.</p>
  `,

  /* 1.5 Step-by-step walkthrough */
  'topics-6-10-1-5': `
<pre class="language-javascript"><code class="language-javascript">const value = "hello";

if (typeof value === "number") {
  console.log("a number");
} else if (typeof value === "boolean") {
  console.log("a boolean");
} else {
  console.log("something else");
}

// prints: "something else"

// JavaScript is thinking:
// Line 1: register value, holds the string "hello".
// Line 3: see if (typeof value === "number") → typeof "hello" is "string", not "number" → false. Skip block.
// Line 5: see else if (typeof value === "boolean") → "string" === "boolean" → false. Skip block.
// Line 7: see else → no parens, no condition. Runs because everything above failed.
// Line 8: log "something else".
// Line 9: end of chain. Done.</code></pre>
  `,

  /* --- Chunk 2: The Click --- */

  /* 2.0 Debugging clue */
  'topics-6-10-2-0': `
    <p>If you accidentally write <code>else (something)</code>, you'll often get strange results — JavaScript may not throw a clear error. Look for the missing <code>if</code>:</p>
<pre class="language-javascript"><code class="language-javascript">if (x > 0) {
  console.log("positive");
} else (x < 0) {
  console.log("negative");
}

// JS reads this as something like:
//   else { (x < 0) }     ← the (x < 0) becomes a meaningless expression
//   { console.log("negative"); }    ← then a SEPARATE block always runs!
// "negative" prints whenever the if was false, even when x is 0 — broken logic
// fix: change to else if (x < 0)</code></pre>

    <p>If you see strange behavior in a chain, scan each branch and confirm: <code>if</code> and <code>else if</code> have parens, <code>else</code> doesn't.</p>
  `,

  /* 2.1 The part that makes it click */
  'topics-6-10-2-1': `
    <p>Parens in JavaScript always wrap something that needs evaluating — function arguments, expressions, conditions. <code>else</code> has nothing to evaluate, so it has no parens. Same logic across the language.</p>
    <p>Once you see the pattern — "parens hold things to evaluate" — the rule for <code>else</code> isn't a special exception. It's just consistency.</p>
  `,

  /* 2.2 Common confusions */
  'topics-6-10-2-2': `
    <p><strong>Confusion: writing <code>else (condition)</code></strong></p>
<pre class="language-javascript"><code class="language-javascript">if (a) { ... }
else (b) { ... }       // wrong — this isn't a condition for else
else if (b) { ... }    // right — for an alternate condition
else { ... }            // right — catch-all</code></pre>

    <p><strong>Confusion: thinking <code>else</code> needs <em>something</em></strong></p>
<pre class="language-javascript"><code class="language-javascript">if (x > 0) { ... }
else true { ... }      // wrong — else takes nothing between the keyword and {
else { ... }            // right — just the keyword and the block</code></pre>

    <p><strong>Confusion: confusing <code>else</code> and <code>else if</code> while typing</strong></p>
<pre class="language-javascript"><code class="language-javascript">// Easy mistake to make:
if (a) doA();
else (b) doB();        // typed "else" but meant "else if"

// Two fixes depending on intent:
else if (b) doB();     // if you wanted another condition
else doB();             // if you wanted a catch-all</code></pre>

    <p><strong>Confusion: parens around the body</strong></p>
<pre class="language-javascript"><code class="language-javascript">if (a) { doA(); }
else { doB(); }         // braces are correct — the BODY uses { }
else (doB());           // wrong — that's not a body, it's a function call</code></pre>

    <p><strong>Confusion: the rule isn't unique to <code>else</code></strong></p>
<pre class="language-javascript"><code class="language-javascript">// Same logic applies to other "no condition" keywords:
try        { ... }       // try has no condition — no parens
catch (err) { ... }      // catch has a binding — uses parens
finally    { ... }       // finally has no condition — no parens
do         { ... }       // do has no condition — no parens
while (x)  { ... }        // while has a condition — uses parens
// "needs evaluation → parens" is a consistent JS rule</code></pre>
  `,

  /* 2.3 Common mistakes */
  'topics-6-10-2-3': `
<pre class="language-javascript"><code class="language-javascript">if (x > 0) { ... }
else (x < 0) { ... }
// JS misreads this — fallback always runs
// fix: else if (x < 0) — if you meant a condition</code></pre>

<pre class="language-javascript"><code class="language-javascript">if (a) doA();
else if doB();
// SyntaxError — else if needs a condition
// fix: else if (b) doB(); — or just else doB();</code></pre>

<pre class="language-javascript"><code class="language-javascript">if (a) { ... } else (true) { ... }
// (true) is a valid expression but it's not a condition for else
// fix: drop the parens — else { ... }</code></pre>

<pre class="language-javascript"><code class="language-javascript">if (a) doA();
else if (b)
  doB();
else
  doC();
  doD();
// doD always runs — only doC is part of else
// fix: wrap each branch in braces</code></pre>

<pre class="language-javascript"><code class="language-javascript">if (a) { ... }
else (someCondition || true) { ... }
// JS doesn't error here — it just evaluates (someCondition || true) as an expression and discards the result
// then { ... } becomes a SEPARATE block that always runs
// fix: use else if (someCondition || true) { ... }</code></pre>
  `,

  /* --- Chunk 3: In Practice --- */

  /* 3.0 Tiny examples */
  'topics-6-10-3-0': `
<pre class="language-javascript"><code class="language-javascript">// Simple two-branch
const x = -5;
if (x >= 0) {
  console.log("non-negative");
} else {
  console.log("negative");
}
// prints: "negative"

// Multi-branch ending in else
const grade = 60;
if (grade >= 90)      console.log("A");
else if (grade >= 70) console.log("C");
else                  console.log("below C");
// prints: "below C"

// else inside a function
function categorize(n) {
  if (n > 0)      return "positive";
  else if (n < 0) return "negative";
  else            return "zero";
}
console.log(categorize(0));
// prints: "zero"

// else with multiple statements
const isOnline = false;
if (isOnline) {
  syncData();
} else {
  showOfflineMessage();
  queueForSync();
  console.log("offline mode");
}

// else attached to else if
const day = "Friday";
if (day === "Saturday")      console.log("weekend");
else if (day === "Sunday")    console.log("weekend");
else if (day === "Friday")    console.log("almost there");
else                          console.log("midweek");
// prints: "almost there"</code></pre>
  `,

  /* 3.1 Real website uses */
  'topics-6-10-3-1': `
    <p><strong>Example: render branches</strong></p>
<pre class="language-javascript"><code class="language-javascript">function render(state) {
  if (state.error) {
    showError(state.error);
  } else if (state.isLoading) {
    showSpinner();
  } else {
    showItems(state.items);    // catch-all, no parens
  }
}</code></pre>

    <p><strong>Example: form mode default</strong></p>
<pre class="language-javascript"><code class="language-javascript">function setFormMode(mode) {
  if (mode === "create") {
    enableCreateMode();
  } else if (mode === "edit") {
    enableEditMode();
  } else {
    enableViewMode();         // default — no parens, no condition
  }
}

setFormMode("preview");
// "preview" doesn't match any case → falls to the else, enables view mode</code></pre>

    <p><strong>Example: simple toggle</strong></p>
<pre class="language-javascript"><code class="language-javascript">if (sidebar.classList.contains("open")) {
  sidebar.classList.remove("open");
} else {
  sidebar.classList.add("open");
}
// classic two-branch with else for the opposite state — no parens needed</code></pre>

    <p><strong>Example: status with default error</strong></p>
<pre class="language-javascript"><code class="language-javascript">function describeStatus(code) {
  if (code === 200)      return "OK";
  else if (code === 404) return "Not Found";
  else if (code >= 500)  return "Server Error";
  else                   return "Unknown";    // catches any other code
}

console.log(describeStatus(418));
// prints: "Unknown"</code></pre>
  `,

  /* 3.2 Connects to */
  'topics-6-10-3-2': `
    <ul>
      <li><strong><code>if</code></strong> → uses parens because it has a condition</li>
      <li><strong><code>else if</code></strong> → uses parens because it has a condition</li>
      <li><strong>Code blocks</strong> → braces hold the body, not parens</li>
      <li><strong>Parens vs braces</strong> → parens hold expressions, braces hold blocks</li>
      <li><strong>Default behavior</strong> → <code>else</code> often holds the default</li>
      <li><strong>Switch <code>default</code></strong> → similar idea — no condition, just a fallback</li>
      <li><strong>Try/catch/finally</strong> → similar pattern (<code>finally</code> has no parens either)</li>
      <li><strong>Common typos</strong> → typing <code>else (...)</code> instead of <code>else if (...)</code></li>
    </ul>
  `,

  /* 3.3 See also */
  'topics-6-10-3-3': `
    <ul>
      <li><code>if</code> and <code>else if</code></li>
      <li>Code blocks</li>
      <li>Parens vs braces</li>
      <li>Switch <code>default</code></li>
      <li><code>finally</code> in try/catch</li>
      <li>Statements vs expressions</li>
      <li>Dangling else problem</li>
      <li>Common typos in conditionals</li>
    </ul>
  `,

  /* ========================================================= 
   Sub-lesson: 3.7.12 If / Else → condition order matters
 =======================================================*/

  /* --- Chunk 0: What & How --- */

  /* 0.0 What it is */
  'topics-6-11-0-0': `
    <p>In an <code>if / else if / else</code> chain, JavaScript checks the conditions <strong>top-down</strong> and stops at the first one that's true. Whatever runs is decided by which condition is reached <em>first</em>, not which one is the "best fit."</p>
    <p>That means the order you write the branches in directly controls which one wins. Two chains with the same conditions in different orders can produce completely different results.</p>
  `,

  /* 0.1 Syntax */
  'topics-6-11-0-1': `
<pre class="language-javascript"><code class="language-javascript">const score = 95;

if (score >= 60) {
  console.log("passing");
} else if (score >= 90) {
  console.log("excellent");
}

// prints: "passing"
// "excellent" is never reached — score >= 60 was true first, chain stopped.</code></pre>
    <p>The <code>>= 90</code> branch is unreachable here. Not because it's wrong, but because <code>>= 60</code> sits above it and catches the value first.</p>
  `,

  /* 0.2 Anatomy / Breakdown */
  'topics-6-11-0-2': `
<pre class="language-javascript"><code class="language-javascript">const score = 95;

if (score >= 90) {            // checked first  → true → runs
  console.log("excellent");
} else if (score >= 60) {     // never checked — chain already stopped
  console.log("passing");
}

// prints: "excellent"

// if (...)        → first question, checked at the top
// else if (...)   → only checked if everything above was false
// order top→down  → JS stops at the first true condition

// flip the order and the answer flips with it.</code></pre>
    <p>Same value, same conditions — the only thing that changed is the order, and the result changed completely.</p>
  `,

  /* 0.3 Syntax Details That Matter */
  'topics-6-11-0-3': `
    <p>The rule of thumb: <strong>narrower conditions go first, wider ones go after.</strong></p>
<pre class="language-javascript"><code class="language-javascript">// Wrong order — wider check first swallows everything
if (n > 0)       console.log("positive");
else if (n > 100) console.log("big");      // unreachable: n > 100 also satisfies n > 0

// Right order — narrower (more specific) check first
if (n > 100)     console.log("big");
else if (n > 0)   console.log("positive");</code></pre>

    <p>This applies whenever conditions <em>overlap</em>. If conditions are mutually exclusive (only one can be true at a time), order doesn't change the result:</p>
<pre class="language-javascript"><code class="language-javascript">// Mutually exclusive — order doesn't matter
if (day === "Saturday") { ... }
else if (day === "Sunday") { ... }
// "Saturday" and "Sunday" can never both be true, so order is safe either way

// Overlapping — order is everything
if (age >= 18) { ... }
else if (age >= 21) { ... }    // unreachable — anyone 21+ already matched 18+</code></pre>

    <p>JavaScript will not warn you about an unreachable branch. It runs the chain top-down and silently skips past anything blocked by an earlier branch.</p>
<pre class="language-javascript"><code class="language-javascript">if (true) {
  console.log("always");
} else if (somethingComplicated()) {
  console.log("never reached");      // dead code — JS doesn't flag it
}</code></pre>

    <p>The fix is mechanical: when conditions overlap, sort them so the most specific case is at the top.</p>
  `,

  /* --- Chunk 1: Why & When --- */

  /* 1.0 What problem it solves */
  'topics-6-11-1-0': `
    <p>An <code>if / else if</code> chain is a <em>race</em>, not a search. JavaScript doesn't look at all the branches and pick the best one — it walks them in order and takes the first match.</p>
    <p>Knowing this lets you control which branch wins by controlling where you put it. It also explains why "the right code" can still produce wrong results: the conditions might all be correct, but the order is wrong.</p>
  `,

  /* 1.1 Why use it */
  'topics-6-11-1-1': `
    <p>Putting the most specific case first is how chains stay correct as values change.</p>
<pre class="language-javascript"><code class="language-javascript">function gradeOf(score) {
  if (score >= 90) 
    return "A";
  else if (score >= 80) 
    return "B";
  else if (score >= 70) 
    return "C";
  else if (score >= 60) 
    return "D";
  else                   
    return "F";
}

// 95 → A    (first match wins, doesn't fall to B/C/D)
// 72 → C    (skips A, B, lands on >= 70)
// 50 → F    (nothing matched, fallback runs)

// flip the order and every score above 60 returns "D" — the chain breaks.</code></pre>
    <p>The chain reads like a sieve: tightest filter first, loosest last. Each branch only catches what slipped past the one above it.</p>
  `,

  /* 1.2 Where you use it */
  'topics-6-11-1-2': `
    <p>Anywhere conditions overlap — numeric ranges, type checks that include each other, status codes that share families.</p>
<pre class="language-javascript"><code class="language-javascript">// Numeric ranges (overlapping by definition)
if (price >= 1000)     
  applyHugeDiscount();
else if (price >= 500) 
  applyBigDiscount();
else if (price >= 100) 
  applySmallDiscount();
else                    
  applyNoDiscount();

// HTTP status families (5xx is a subset of "not 200")
if (status === 200)        
  showSuccess();
else if (status >= 500)    
  showServerError();
else if (status >= 400)    
  showClientError();
else                        
    showUnknown();

// Type checks — narrower first
if (Array.isArray(value))         
  handleArray(value);
else if (typeof value === "object") 
  handleObject(value);   // arrays are also "object"
else                                
  handlePrimitive(value);

// User permission tiers
if (user.isAdmin)      
  showEverything();
else if (user.isPaid)  
  showPaidFeatures();
else                    
  showFreeFeatures();</code></pre>
  `,

  /* 1.3 Plain English explanation */
  'topics-6-11-1-3': `
    <p>Imagine a bouncer at a club checking IDs against a list of rules, top to bottom. The first rule that matches your ID is the one that decides what happens to you. Every rule below it gets ignored, even if it would have matched too.</p>
    <p>So if the first rule on the list is "let in anyone over 18" and the second is "give VIP access to anyone over 21," nobody ever gets VIP — they all match the first rule and get sent to the regular line. Not because the VIP rule is wrong, but because nobody ever reaches it.</p>
    <p>To fix it: put the VIP rule first. Now anyone over 21 matches there and stops. Everyone 18–20 falls past it and matches the second rule. The order is the logic.</p>
  `,

  /* 1.4 Mental model */
  'topics-6-11-1-4': `
    <p>An <code>if / else if</code> chain is a <strong>filter stack</strong>: each branch only sees what fell through the one above it.</p>
<pre class="language-javascript"><code class="language-javascript">value
  │
  ▼
[ if (score >= 90) ]   → catches A's       → done
  │ (only B–F continue)
  ▼
[ else if (>= 80) ]    → catches B's       → done
  │ (only C–F continue)
  ▼
[ else if (>= 70) ]    → catches C's       → done
  │
  ▼
[ else ]               → catches everyone else

// each branch's "true zone" is whatever's left after the branches above already grabbed their share.</code></pre>
    <p>Put the tightest filter at the top. Each branch below it only deals with the values that survived.</p>
  `,

  /* 1.5 Step-by-step walkthrough */
  'topics-6-11-1-5': `
<pre class="language-javascript"><code class="language-javascript">const n = 150;

if (n > 0) {
  console.log("positive");
} else if (n > 100) {
  console.log("big");
} else {
  console.log("zero or negative");
}

// prints: "positive"

// JavaScript is thinking:
// Line 1: register n, value 150.
// Line 3: see if (n > 0) → 150 > 0 → true. Run this block.
// Line 4: log "positive".
// Line 5: see else if — chain already matched, SKIP without checking the condition.
// Line 7: see else — chain already matched, SKIP.
// Done.

// Notice: n > 100 was true too, but JS never even checked it.
// To get "big" for n=150, the n > 100 branch must come BEFORE n > 0.</code></pre>
  `,

  /* --- Chunk 2: The Click --- */

  /* 2.0 Debugging clue */
  'topics-6-11-2-0': `
    <p>If the wrong branch is running and the conditions all "look right," check the order. Specifically: is there a wider/looser condition above the one that should be matching?</p>
<pre class="language-javascript"><code class="language-javascript">// "Why does score 95 print 'passing' instead of 'excellent'?"
if (score >= 60) console.log("passing");        // ← this catches 95 first
else if (score >= 90) console.log("excellent"); // ← unreachable for score >= 60

// fix: put the narrower (>= 90) check above the wider (>= 60) one</code></pre>
    <p>Quick test: trace the value through each branch top-down. The first <code>true</code> you hit is what runs. If that's not the branch you wanted, the order is wrong, not the conditions.</p>
  `,

  /* 2.1 The part that makes it click */
  'topics-6-11-2-1': `
    <p>The chain doesn't pick the <em>best</em> match. It picks the <em>first</em> match.</p>
    <p>Once you see that, two rules drop out of it: (1) order overlapping conditions narrow→wide, top→bottom, and (2) any branch below an always-true condition is dead code that JavaScript will never run.</p>
  `,

  /* 2.2 Common confusions */
  'topics-6-11-2-2': `
    <p><strong>Confusion: thinking JS picks the "most specific" branch</strong></p>
<pre class="language-javascript"><code class="language-javascript">// Many people expect this to print "big" for n = 150.
if (n > 0)        console.log("positive");
else if (n > 100) console.log("big");

// JS doesn't compare branches. It walks the list and stops at the first true.
// Order is the only thing that decides specificity.</code></pre>

    <p><strong>Confusion: order doesn't matter when conditions are mutually exclusive</strong></p>
<pre class="language-javascript"><code class="language-javascript">// These can never both be true, so order is safe either way:
if (day === "Mon") { ... }
else if (day === "Tue") { ... }

// These overlap — order matters:
if (n >= 0)  { ... }
else if (n >= 10) { ... }    // dead — anything >= 10 is also >= 0</code></pre>

    <p><strong>Confusion: separate <code>if</code> statements behave the same as <code>else if</code></strong></p>
<pre class="language-javascript"><code class="language-javascript">// else if chain — only ONE branch runs
if (score >= 90)      console.log("A");
else if (score >= 60) console.log("passing");

// Separate ifs — every true branch runs
if (score >= 90) console.log("A");
if (score >= 60) console.log("passing");
// score = 95 prints BOTH "A" and "passing" — they're independent checks, no chain to stop them.</code></pre>

    <p><strong>Confusion: the <code>else</code> branch is "for everything else" — even if a higher branch should have caught it</strong></p>
<pre class="language-javascript"><code class="language-javascript">if (status >= 400) showError();
else if (status === 404) showNotFound();   // unreachable — 404 already matched >= 400
else                       showOk();
// "for everything else" only means "for what fell through to here."</code></pre>
  `,

  /* 2.3 Common mistakes */
  'topics-6-11-2-3': `
<pre class="language-javascript"><code class="language-javascript">if (n > 0)        console.log("positive");
else if (n > 100) console.log("big");
// "big" never prints — n > 0 catches everything first.
// fix: swap the order — narrower (n > 100) goes first.</code></pre>

<pre class="language-javascript"><code class="language-javascript">if (typeof v === "object")          handleObject(v);
else if (Array.isArray(v))           handleArray(v);
// arrays are also typeof "object" — handleArray is unreachable.
// fix: check Array.isArray FIRST, then fall through to the general object branch.</code></pre>

<pre class="language-javascript"><code class="language-javascript">if (true)               doThing();
else if (someCondition)  doOtherThing();
// dead code — anything below an always-true if can never run.
// fix: remove the always-true branch, or replace it with a real condition.</code></pre>

<pre class="language-javascript"><code class="language-javascript">if (user)            showProfile();
else if (user.isAdmin) showAdminPanel();
// adminPanel never runs — every admin is also a user, so the first branch always wins.
// fix: put isAdmin first, then fall through to the generic user branch.</code></pre>

<pre class="language-javascript"><code class="language-javascript">if (price >= 100) applyDiscount("10%");
else if (price >= 500) applyDiscount("25%");
else if (price >= 1000) applyDiscount("50%");
// every big spender gets the smallest discount — order is reversed.
// fix: highest threshold first, lowest last.</code></pre>
  `,

  /* --- Chunk 3: In Practice --- */

  /* 3.0 Tiny examples */
  'topics-6-11-3-0': `
<pre class="language-javascript"><code class="language-javascript">// Grade chain — narrower (higher) thresholds first
function grade(s) {
  if (s >= 90) return "A";
  else if (s >= 80) return "B";
  else if (s >= 70) return "C";
  else               return "F";
}
console.log(grade(85));   // "B"

// Discount tiers — highest tier first
function discount(price) {
  if (price >= 1000) return 0.5;
  else if (price >= 500) return 0.25;
  else if (price >= 100) return 0.1;
  else                    return 0;
}
console.log(discount(750));   // 0.25

// Type narrowing — most specific check first
function describe(v) {
  if (Array.isArray(v))            return "array";
  else if (typeof v === "object")   return "object";
  else if (typeof v === "function") return "function";
  else                              return typeof v;
}
console.log(describe([1, 2]));    // "array"
console.log(describe({}));         // "object"

// Permission tier — highest privilege first
function landingPage(user) {
  if (user.isAdmin)   return "/admin";
  else if (user.isPaid) return "/dashboard";
  else                  return "/welcome";
}

// Wrong order — every admin lands on /welcome
function landingPageBad(user) {
  if (user)            return "/welcome";   // catches everyone
  else if (user.isAdmin) return "/admin";    // unreachable
}</code></pre>
  `,

  /* 3.1 Real website uses */
  'topics-6-11-3-1': `
    <p><strong>Example: HTTP response handling</strong></p>
<pre class="language-javascript"><code class="language-javascript">function handleResponse(status) {
  if (status === 401)        redirectToLogin();      // most specific first
  else if (status === 404)   showNotFound();
  else if (status >= 500)    showServerError();
  else if (status >= 400)    showClientError();      // generic 4xx fallback
  else if (status >= 200)    showSuccess();
  else                        showUnknown();
}
// 401 and 404 must come before the generic >= 400 branch — otherwise they get swallowed.</code></pre>

    <p><strong>Example: shipping cost tiers</strong></p>
<pre class="language-javascript"><code class="language-javascript">function shippingCost(weightLbs) {
  if (weightLbs >= 50)      return 25;
  else if (weightLbs >= 20)  return 15;
  else if (weightLbs >= 5)   return 8;
  else                        return 5;
}
// heaviest tier first — flipping the order would charge $5 for everything.</code></pre>

    <p><strong>Example: render priority</strong></p>
<pre class="language-javascript"><code class="language-javascript">function renderView(state) {
  if (state.error)        return showError(state.error);    // errors trump everything
  else if (state.isLoading) return showSpinner();
  else if (state.items.length === 0) return showEmpty();
  else                       return showList(state.items);
}
// error first → never get stuck rendering a stale list when something failed.</code></pre>

    <p><strong>Example: feature gating</strong></p>
<pre class="language-javascript"><code class="language-javascript">function getPlanFeatures(user) {
  if (user.plan === "enterprise") return enterpriseFeatures;
  else if (user.plan === "pro")    return proFeatures;
  else if (user.plan === "free")   return freeFeatures;
  else                              return guestFeatures;
}
// each tier is mutually exclusive here, so order doesn't change correctness —
// but listing them highest-to-lowest keeps the chain readable.</code></pre>
  `,

  /* 3.2 Connects to */
  'topics-6-11-3-2': `
    <ul>
      <li><strong><code>if</code> / <code>else if</code> / <code>else</code></strong> → the chain whose order this lesson is about</li>
      <li><strong>Only one branch runs</strong> → the reason order matters at all</li>
      <li><strong>Comparison operators</strong> → <code>>=</code> vs <code>></code> create overlapping ranges</li>
      <li><strong>Logical operators</strong> → <code>&&</code> and <code>||</code> can make broad conditions accidentally</li>
      <li><strong>Switch statements</strong> → cases run top-down too; same ordering trap</li>
      <li><strong>Truthy and falsy</strong> → <code>if (user)</code> catches more than just admins</li>
      <li><strong>Guard clauses</strong> → early <code>return</code>s rely on the same first-match-wins rule</li>
      <li><strong>Dead code</strong> → unreachable branches caused by ordering</li>
    </ul>
  `,

  /* 3.3 See also */
  'topics-6-11-3-3': `
    <ul>
      <li>Only one branch runs</li>
      <li>Separate <code>if</code> vs <code>else if</code> chain</li>
      <li>Comparison operators in conditions</li>
      <li>Logical operators in conditions</li>
      <li>Truthy and falsy values</li>
      <li>Switch statements</li>
      <li>Guard clauses</li>
      <li>Dead code / unreachable branches</li>
    </ul>
  `,

  /* ========================================================= 
   Sub-lesson: 3.7.13 If / Else → only one branch runs
 =======================================================*/

  /* --- Chunk 0: What & How --- */

  /* 0.0 What it is */
  'topics-6-12-0-0': `
    <p>In an <code>if / else if / else</code> chain, exactly <strong>one</strong> branch runs — never two, never zero (if there's an <code>else</code>). The moment a condition is true, JavaScript runs that block and skips everything else in the chain.</p>
    <p>This is what makes a chain different from writing several separate <code>if</code> statements. The chain is a single decision; separate <code>if</code>s are independent decisions.</p>
  `,

  /* 0.1 Syntax */
  'topics-6-12-0-1': `
<pre class="language-javascript"><code class="language-javascript">const score = 95;

if (score >= 90) {
  console.log("A");
} else if (score >= 80) {
  console.log("B");
} else if (score >= 70) {
  console.log("C");
} else {
  console.log("F");
}

// prints: "A" — only one branch runs
// the >= 80 and >= 70 branches are skipped, even though they're also true.</code></pre>
    <p>One match, one block, done. The chain doesn't keep checking after it finds a winner.</p>
  `,

  /* 0.2 Anatomy / Breakdown */
  'topics-6-12-0-2': `
<pre class="language-javascript"><code class="language-javascript">const x = 10;

if (x > 0) {           // checked → true → run this block, then exit the chain
  console.log("positive");
} else if (x > 5) {    // never checked
  console.log("big");
} else if (x === 10) { // never checked, even though it's true
  console.log("ten");
}

// prints: "positive"

// if      → first check, takes the win if true
// else if → only checked if everything above was false
// else    → only runs if NOTHING above matched
// the chain is one decision with multiple options, not a list of yes/no questions.</code></pre>
    <p>Once any branch runs, the chain is over. The remaining branches don't get checked at all — JavaScript moves on to whatever code comes after the chain.</p>
  `,

  /* 0.3 Syntax Details That Matter */
  'topics-6-12-0-3': `
    <p>The "only one runs" rule is about the <strong>chain</strong>, not about <code>if</code> in general. Two separate <code>if</code> statements are not a chain — they're independent and both can run.</p>
<pre class="language-javascript"><code class="language-javascript">// CHAIN — only one branch runs
if (n > 0)        console.log("positive");
else if (n > 100) console.log("big");
// n = 150 prints only "positive". The chain stopped.

// SEPARATE IFs — every true condition runs
if (n > 0)   console.log("positive");
if (n > 100) console.log("big");
// n = 150 prints BOTH "positive" and "big". Two independent checks.</code></pre>

    <p>What links branches into a single chain is the keyword <code>else</code>. Drop the <code>else</code> and you've broken the chain into separate decisions.</p>
<pre class="language-javascript"><code class="language-javascript">if (a) doA();
else if (b) doB();      // chained — only one of these can run
else doC();

if (a) doA();
if (b) doB();           // not chained — independent
if (c) doC();           // can all run at the same time</code></pre>

    <p>Inside a function, <code>return</code> ends the chain even without <code>else</code> — because the function exits before the next <code>if</code> can run.</p>
<pre class="language-javascript"><code class="language-javascript">function classify(n) {
  if (n > 0) return "positive";
  if (n < 0) return "negative";    // works like else if — earlier return prevents this from running for positives
  return "zero";
}
// the return statements are what enforce "only one runs," not the if structure itself.</code></pre>

    <p>Without an <code>else</code> at the end, it's possible for <em>zero</em> branches to run — every condition can be false:</p>
<pre class="language-javascript"><code class="language-javascript">if (x > 100) doSomething();
else if (x > 50) doOther();
// if x = 5, neither block runs. That's fine — but if you need a guaranteed action, add else.</code></pre>
  `,

  /* --- Chunk 1: Why & When --- */

  /* 1.0 What problem it solves */
  'topics-6-12-1-0': `
    <p>Most decisions in real code are "pick exactly one." Render <em>this</em> view, not several. Show <em>this</em> error message, not three at once. Charge <em>this</em> price tier, not all of them.</p>
    <p>The chain enforces that automatically. You don't have to write <code>return</code> after each branch or manually skip the rest — the structure itself guarantees that only one path through the chain ever runs.</p>
  `,

  /* 1.1 Why use it */
  'topics-6-12-1-1': `
    <p>The chain is how you say "these options are alternatives, not additions." It's the difference between a multiple-choice question and a checklist.</p>
<pre class="language-javascript"><code class="language-javascript">// Chain — alternatives. One winner.
if (user.isAdmin)       
  showAdminDashboard();
else if (user.isPaid)    
  showPaidDashboard();
else                      
  showFreeDashboard();
// admin sees admin only — never sees paid or free dashboards stacked together.

// Separate ifs — checklist. Multiple winners possible.
if (user.hasUnreadMessages) 
  showMessageBadge();
if (user.hasNewFollowers)   
  showFollowerBadge();
if (user.hasPendingInvites) 
  showInviteBadge();
// any combination of badges can show — these aren't alternatives.</code></pre>
    <p>If you find yourself writing <code>if</code>s and then realizing "wait, I only want one of these to happen," that's the signal to chain them with <code>else if</code>.</p>
  `,

  /* 1.2 Where you use it */
  'topics-6-12-1-2': `
    <p>Anywhere the result is "pick one option" — UI states, classifications, tier lookups, error mapping.</p>
<pre class="language-javascript"><code class="language-javascript">// UI render — only one view at a time
if (loading)        
  return <Spinner />;
else if (error)     
  return <ErrorView />;
else                
  return <Content />;

// Classification — every input lands in exactly one bucket
function size(bytes) {
  if (bytes < 1024)              
    return "small";
  else if (bytes < 1024 * 1024)  
    return "medium";
  else                            
    return "large";
}

// Permission tier — pick highest tier user qualifies for
if (user.isAdmin)      
  grant("all");
else if (user.isPaid)  
  grant("paid");
else                    
  grant("basic");

// Error mapping — show one message per error
if (err.code === "NETWORK")   
  showOfflineBanner();
else if (err.code === "AUTH")  
  redirectToLogin();
else                            
  showGenericError();</code></pre>
  `,

  /* 1.3 Plain English explanation */
  'topics-6-12-1-3': `
    <p>Think of a chain like a single elevator that stops at one floor. You press a button, the elevator picks one floor based on the rules, and it stops there. It doesn't visit every floor that could have matched — it picks one and stops.</p>
    <p>Separate <code>if</code> statements are like pressing every button on a control panel. Each one runs on its own, regardless of what the others do. If two are true, two things happen.</p>
    <p>The <code>else if</code> keyword is what tells JavaScript "this is part of the same decision as the <code>if</code> above." Once any branch wins, the whole decision is settled and the chain ends.</p>
  `,

  /* 1.4 Mental model */
  'topics-6-12-1-4': `
    <p>A chain is a <strong>single switch</strong> with multiple positions. The switch is in exactly one position at a time — never two.</p>
<pre class="language-javascript"><code class="language-javascript">    if      else if    else if    else
     │         │          │         │
     ▼         ▼          ▼         ▼
   [path]   [path]     [path]    [path]
     ↑
     └── only one path is "active" per run

// vs. separate ifs — multiple independent switches
   if         if         if
    │          │          │
    ▼          ▼          ▼
  [path]    [path]    [path]    ← all can be active at once</code></pre>
    <p>One chain = one decision. The number of branches doesn't change that — five branches still means one winner, not five.</p>
  `,

  /* 1.5 Step-by-step walkthrough */
  'topics-6-12-1-5': `
<pre class="language-javascript"><code class="language-javascript">const role = "editor";

if (role === "admin") {
  console.log("admin tools");
} else if (role === "editor") {
  console.log("editor tools");
} else if (role === "viewer") {
  console.log("read-only");
} else {
  console.log("no access");
}

console.log("done");

// prints:
// editor tools
// done

// JavaScript is thinking:
// Line 1: register role, value "editor".
// Line 3: see if (role === "admin") → "editor" === "admin" → false. Skip block.
// Line 5: see else if (role === "editor") → true. Run this block.
// Line 6: log "editor tools".
// Line 7: chain done — skip every remaining else if and the else.
// Line 13: log "done" (this isn't part of the chain — runs normally).</code></pre>
  `,

  /* --- Chunk 2: The Click --- */

  /* 2.0 Debugging clue */
  'topics-6-12-2-0': `
    <p>If multiple things are happening when you only wanted one, check whether the branches are actually <em>chained</em>:</p>
<pre class="language-javascript"><code class="language-javascript">// Looks like a chain — isn't
if (n > 0)   console.log("positive");
if (n > 100) console.log("big");
// for n = 150, both lines run. They're independent.

// Actual chain — only one runs
if (n > 0)        console.log("positive");
else if (n > 100)  console.log("big");
// for n = 150, only "positive" runs.</code></pre>
    <p>The fix is almost always one missing word: <code>else</code>. If you see two <code>if</code> statements that should have been alternatives, prepend <code>else</code> to the second one.</p>
  `,

  /* 2.1 The part that makes it click */
  'topics-6-12-2-1': `
    <p><code>else if</code> isn't a fancier <code>if</code>. It's the thing that <em>links</em> branches together so JavaScript treats them as one decision.</p>
    <p>Once you see that, the rule "only one branch runs" stops being a rule to memorize — it's just what a chain <em>is</em>. A chain that ran multiple branches wouldn't be a chain anymore; it'd just be a list of separate <code>if</code>s.</p>
  `,

  /* 2.2 Common confusions */
  'topics-6-12-2-2': `
    <p><strong>Confusion: thinking <code>if</code> + <code>if</code> is a chain</strong></p>
<pre class="language-javascript"><code class="language-javascript">// Two independent statements, NOT a chain
if (a) doA();
if (b) doB();
// both can run if both are true

// Actual chain — only one runs
if (a) doA();
else if (b) doB();</code></pre>

    <p><strong>Confusion: thinking <code>else</code> always runs at the end</strong></p>
<pre class="language-javascript"><code class="language-javascript">// else only runs if NOTHING above matched
if (a) doA();
else if (b) doB();
else doC();
// if a is true, only doA runs. doC is skipped — even though it's at the end.</code></pre>

    <p><strong>Confusion: assuming a missing <code>else</code> means "default zero"</strong></p>
<pre class="language-javascript"><code class="language-javascript">if (x > 0) console.log("positive");
else if (x < 0) console.log("negative");
// if x === 0, NEITHER runs. There's no else, so zero branches matched.
// fix: add else { console.log("zero"); } if you need a guaranteed action.</code></pre>

    <p><strong>Confusion: <code>return</code> changes the rules</strong></p>
<pre class="language-javascript"><code class="language-javascript">function classify(n) {
  if (n > 0) return "positive";
  if (n < 0) return "negative";   // looks like a separate if, but acts like else if
  return "zero";
}
// inside a function, an early return makes the next if effectively unreachable for the matched case.
// only one return ever happens — but it's the function exiting, not the chain enforcing it.</code></pre>

    <p><strong>Confusion: thinking <code>else if</code> is a separate keyword</strong></p>
<pre class="language-javascript"><code class="language-javascript">// else if is just: else { if (...) { ... } }
// it's two keywords — else, then a nested if — that JS treats as a chain.
// you can write it the long way and it behaves the same:

if (a) {
  doA();
} else {
  if (b) doB();
  else doC();
}
// same as:
if (a) doA();
else if (b) doB();
else doC();</code></pre>
  `,

  /* 2.3 Common mistakes */
  'topics-6-12-2-3': `
<pre class="language-javascript"><code class="language-javascript">if (n > 0)   console.log("positive");
if (n > 100) console.log("big");
// both run when n > 100 — wasn't intended as a chain.
// fix: change the second to "else if (n > 100)".</code></pre>

<pre class="language-javascript"><code class="language-javascript">if (status === "ok")  showSuccess();
if (status === "error") showError();
if (status === "loading") showSpinner();
// for status = "ok", only one is true so it works by accident —
// but the structure invites bugs if conditions ever overlap.
// fix: chain with else if so the structure says "pick one."</code></pre>

<pre class="language-javascript"><code class="language-javascript">if (user.isAdmin) {
  showAdmin();
}
showRegular();
// showRegular ALWAYS runs — it's not part of the if.
// fix: put showRegular in an else block.
if (user.isAdmin) {
  showAdmin();
} else {
  showRegular();
}</code></pre>

<pre class="language-javascript"><code class="language-javascript">if (a) doA();
else if (b) doB();
// expected this to handle ALL cases — but if both a and b are false, nothing runs.
// fix: add an else for the catch-all if you need one.</code></pre>

<pre class="language-javascript"><code class="language-javascript">if (a) doA();
else if (b) doB(); doC();
// doC is OUTSIDE the chain — it always runs.
// fix: wrap branches in braces { } if multiple statements should run together.</code></pre>
  `,

  /* --- Chunk 3: In Practice --- */

  /* 3.0 Tiny examples */
  'topics-6-12-3-0': `
<pre class="language-javascript"><code class="language-javascript">// Chain — exactly one branch runs
const day = "Wednesday";
if (day === "Saturday" || day === "Sunday") {
  console.log("weekend");
} else if (day === "Friday") {
  console.log("almost weekend");
} else {
  console.log("weekday");
}
// prints: "weekday"

// Chain with no else — zero or one runs
const temp = 70;
if (temp >= 90)      console.log("hot");
else if (temp <= 32) console.log("freezing");
// prints nothing — neither matched, and there's no else.

// Separate ifs — multiple can run
const flags = { isNew: true, isOnSale: true };
if (flags.isNew)    console.log("NEW");
if (flags.isOnSale) console.log("SALE");
// prints both: "NEW" and "SALE"

// Inside a function — early returns enforce one-result
function statusLabel(s) {
  if (s === "ok")   return "✓";
  if (s === "warn") return "⚠";
  if (s === "fail") return "✗";
  return "?";   // catch-all
}
console.log(statusLabel("warn"));   // "⚠"

// Mixed — one chain, then independent code after
if (user.isAdmin)    setupAdminTools();
else if (user.isPaid) setupPaidTools();
else                  setupBasicTools();

logPageView();   // runs no matter which branch ran above</code></pre>
  `,

  /* 3.1 Real website uses */
  'topics-6-12-3-1': `
    <p><strong>Example: render exactly one view</strong></p>
<pre class="language-javascript"><code class="language-javascript">function render(state) {
  if (state.error)     return showError(state.error);
  else if (state.isLoading) return showSpinner();
  else if (state.items.length === 0) return showEmpty();
  else                  return showList(state.items);
}
// at any moment, the page shows ONE of these — never error + spinner stacked.</code></pre>

    <p><strong>Example: badge stack (separate ifs on purpose)</strong></p>
<pre class="language-javascript"><code class="language-javascript">function renderBadges(product) {
  const badges = [];
  if (product.isNew)       badges.push("NEW");
  if (product.isOnSale)    badges.push("SALE");
  if (product.isExclusive) badges.push("EXCLUSIVE");
  return badges;
}
// here we WANT all matching badges to show — separate ifs, no chain.</code></pre>

    <p><strong>Example: route guarding</strong></p>
<pre class="language-javascript"><code class="language-javascript">function guardRoute(req) {
  if (!req.user)            return redirect("/login");
  else if (!req.user.verified) return redirect("/verify");
  else if (req.path.startsWith("/admin") && !req.user.isAdmin) return redirect("/403");
  else                      return next();   // allow request through
}
// only one redirect happens — chained because the checks are alternatives.</code></pre>

    <p><strong>Example: form validation message</strong></p>
<pre class="language-javascript"><code class="language-javascript">function emailError(value) {
  if (!value)                return "Email is required";
  else if (!value.includes("@")) return "Email must include @";
  else if (value.length > 100) return "Email is too long";
  else                        return "";   // valid
}
// show ONE error message at a time — chained for that reason.</code></pre>
  `,

  /* 3.2 Connects to */
  'topics-6-12-3-2': `
    <ul>
      <li><strong><code>else if</code></strong> → the keyword that links branches into a chain</li>
      <li><strong>Separate <code>if</code> vs <code>else if</code> chain</strong> → the difference between independent and chained checks</li>
      <li><strong>Condition order matters</strong> → which branch wins depends on order; only-one-runs is why it matters</li>
      <li><strong>Code blocks</strong> → braces define what counts as part of a branch</li>
      <li><strong>Switch statements</strong> → similar one-winner behavior with <code>break</code> or fall-through</li>
      <li><strong>Guard clauses</strong> → early <code>return</code>s create a chain-like effect inside functions</li>
      <li><strong>Default <code>else</code></strong> → ensures one branch always runs</li>
      <li><strong>Dead code</strong> → branches the chain can never reach</li>
    </ul>
  `,

  /* 3.3 See also */
  'topics-6-12-3-3': `
    <ul>
      <li>Separate <code>if</code> vs <code>else if</code> chain</li>
      <li>Condition order matters</li>
      <li>Code blocks and braces</li>
      <li>Switch statements and <code>break</code></li>
      <li>Guard clauses</li>
      <li>Early <code>return</code> patterns</li>
      <li>Catch-all <code>else</code></li>
      <li>Truthy and falsy values</li>
    </ul>
  `,

/* ========================================================= 
   Sub-lesson: 3.7.14 If / Else → separate if vs else if chain
 =======================================================*/

  /* --- Chunk 0: What & How --- */

  /* 0.0 What it is */
  'topics-6-13-0-0': `
    <p>Two <code>if</code> statements written one after another are <strong>not</strong> the same as an <code>if / else if</code> chain. They look almost identical on the page, but they behave very differently.</p>
    <p>Separate <code>if</code>s are independent — each one is its own decision, and any number of them can run. A chain is one decision with multiple options — exactly one branch runs.</p>
  `,

  /* 0.1 Syntax */
  'topics-6-13-0-1': `
<pre class="language-javascript"><code class="language-javascript">// Separate ifs — independent
if (n > 0) {
  console.log("positive");
}
if (n > 100) {
  console.log("big");
}

// Chain — one decision
if (n > 0) {
  console.log("positive");
} else if (n > 100) {
  console.log("big");
}</code></pre>
    <p>The only difference is the word <code>else</code>. That one word changes whether the second check is independent or part of the same decision as the first.</p>
  `,

  /* 0.2 Anatomy / Breakdown */
  'topics-6-13-0-2': `
<pre class="language-javascript"><code class="language-javascript">const n = 150;

// SEPARATE IFS — both are checked, both can run
if (n > 0) {
  console.log("positive");   // runs (true)
}
if (n > 100) {
  console.log("big");        // also runs (true)
}
// prints: "positive" then "big" — two outputs

// CHAIN — only the first match runs
if (n > 0) {
  console.log("positive");   // runs (true)
} else if (n > 100) {
  console.log("big");        // skipped — chain already won
}
// prints: "positive" only — one output

// the value, the conditions, and the blocks are identical.
// the only thing that changed is "else if" vs "if".</code></pre>
    <p>That single keyword tells JavaScript whether these are alternatives (chain) or unrelated checks (separate).</p>
  `,

  /* 0.3 Syntax Details That Matter */
  'topics-6-13-0-3': `
    <p><code>else if</code> must come <em>immediately</em> after the closing brace of the previous branch. Putting any code between them breaks the chain:</p>
<pre class="language-javascript"><code class="language-javascript">// Chain — else if directly after the if's closing brace
if (a) {
  doA();
} else if (b) {
  doB();
}

// NOT a chain — there's code between them
if (a) {
  doA();
}
console.log("hi");
else if (b) {       // SyntaxError — else if has nothing to attach to
  doB();
}</code></pre>

    <p>You can mix chains and separate <code>if</code>s in the same function. Each chain is its own decision; everything outside the chain is independent:</p>
<pre class="language-javascript"><code class="language-javascript">// Chain decides which view to show — exactly one
if (state.error) {
  showError();
} else if (state.isLoading) {
  showSpinner();
} else {
  showContent();
}

// Separate ifs — independent badges, any combination can show
if (user.hasMessages) {
  showMessageBadge();
}
if (user.hasInvites) {
  showInviteBadge();
}</code></pre>

    <p>An <code>else</code> always belongs to the <strong>nearest <code>if</code> above it</strong>. If you have a separate <code>if</code> in between, the <code>else</code> attaches to that one — not the one you might have meant:</p>
<pre class="language-javascript"><code class="language-javascript">if (a) {
  doA();
}
if (b) {
  doB();
} else {
  doFallback();    // attaches to "if (b)", NOT to "if (a)"
}
// if a is true and b is false → runs doA AND doFallback
// because doFallback is the else for b, not for the whole thing.</code></pre>

    <p>The fix is to chain them properly with <code>else if</code> if that's what was intended.</p>
  `,

  /* --- Chunk 1: Why & When --- */

  /* 1.0 What problem it solves */
  'topics-6-13-1-0': `
    <p>Real code has both kinds of decisions. Some are "pick one" (which view, which error message, which tier). Others are "any of these might apply" (which badges, which warnings, which side effects).</p>
    <p>JavaScript needs a way to express both. Chaining with <code>else if</code> handles "pick one." Writing separate <code>if</code>s handles "check each independently." Knowing which one you want is the difference between code that works and code that has subtle bugs.</p>
  `,

  /* 1.1 Why use it */
  'topics-6-13-1-1': `
    <p>Use a <strong>chain</strong> when the branches are alternatives — when running two of them at once would be wrong:</p>
<pre class="language-javascript"><code class="language-javascript">// Wrong with separate ifs — could show two views at once
if (state.isLoading) {
  showSpinner();
}
if (state.error) {
  showError();
}
// if both are true (rare but possible during a retry), both render — broken UI

// Right with a chain — only one view shows
if (state.error) {
  showError();
} else if (state.isLoading) {
  showSpinner();
} else {
  showContent();
}</code></pre>

    <p>Use <strong>separate <code>if</code>s</strong> when the checks are independent — when each one might or might not apply, and they don't interfere with each other:</p>
<pre class="language-javascript"><code class="language-javascript">// Right with separate ifs — each badge is its own decision
if (product.isNew) {
  addBadge("NEW");
}
if (product.isOnSale) {
  addBadge("SALE");
}
if (product.isLimitedStock) {
  addBadge("LOW STOCK");
}
// a product can be NEW + SALE + LOW STOCK all at once — all three should show.</code></pre>

    <p>The test: <em>"If two of these conditions are true at the same time, do I want both blocks to run, or just one?"</em> Both → separate ifs. Just one → chain.</p>
  `,

  /* 1.2 Where you use it */
  'topics-6-13-1-2': `
<pre class="language-javascript"><code class="language-javascript">// CHAIN — UI state (one view at a time)
if (loading) {
  showSpinner();
} else if (error) {
  showError();
} else {
  showContent();
}

// CHAIN — classification (every input gets one label)
function priceTier(price) {
  if (price >= 1000) {
    return "premium";
  } else if (price >= 100) {
    return "standard";
  } else {
    return "budget";
  }
}

// SEPARATE IFS — collecting validation errors
const errors = [];
if (!email) {
  errors.push("Email required");
}
if (!password) {
  errors.push("Password required");
}
if (password && password.length < 8) {
  errors.push("Password too short");
}
// each check is independent — we want ALL the errors, not just the first.

// SEPARATE IFS — feature flags
if (features.darkMode) {
  enableDarkMode();
}
if (features.betaSearch) {
  enableBetaSearch();
}
if (features.newDashboard) {
  enableNewDashboard();
}
// features are independent — any combination can be on.</code></pre>
  `,

  /* 1.3 Plain English explanation */
  'topics-6-13-1-3': `
    <p>Picture an HR form. Some questions are "pick one" — like marital status. Single, married, divorced, widowed: you pick exactly one bubble. That's a chain.</p>
    <p>Other questions are "check all that apply" — like skills. JavaScript, HTML, CSS, Python: you can check zero, one, or all of them. Each box is independent. That's separate <code>if</code>s.</p>
    <p>The mistake people make is treating "check all that apply" code like "pick one," or vice versa. The form question is the same in both cases — but the right answer depends on whether the options are exclusive or independent.</p>
  `,

  /* 1.4 Mental model */
  'topics-6-13-1-4': `
    <p>A chain is <strong>one switch</strong>. Separate <code>if</code>s are <strong>multiple light switches</strong> in the same room.</p>
<pre class="language-javascript"><code class="language-javascript">// CHAIN — one switch, one position
[ if (a) ] ─→ [ else if (b) ] ─→ [ else if (c) ] ─→ [ else ]
       └────── only ONE position is "on" at a time ──────┘

// SEPARATE IFS — independent switches, any combination
[ if (a) ]      [ if (b) ]      [ if (c) ]
    │               │                │
    ▼               ▼                ▼
   on/off          on/off           on/off       ← each one independent</code></pre>
    <p>When you write your code, ask: <em>"Am I flipping one switch, or am I checking three different switches?"</em> The answer tells you whether to chain.</p>
  `,

  /* 1.5 Step-by-step walkthrough */
  'topics-6-13-1-5': `
<pre class="language-javascript"><code class="language-javascript">const n = 150;

// SEPARATE IFS
if (n > 0) {
  console.log("positive");
}
if (n > 100) {
  console.log("big");
}

// JavaScript is thinking:
// Line 3: see if (n > 0) → 150 > 0 → true. Run block. Log "positive".
// Line 5: this is a NEW if statement (no else attached) — check it independently.
// Line 6: 150 > 100 → true. Run block. Log "big".
// Result: both lines printed.

// ────────────────────────────────────

const n2 = 150;

// CHAIN
if (n2 > 0) {
  console.log("positive");
} else if (n2 > 100) {
  console.log("big");
}

// JavaScript is thinking:
// Line 3: see if (n2 > 0) → true. Run block. Log "positive".
// Line 5: see else if — but the chain already matched. Skip without checking.
// Result: only "positive" printed.</code></pre>
  `,

  /* --- Chunk 2: The Click --- */

  /* 2.0 Debugging clue */
  'topics-6-13-2-0': `
    <p>Two of the most common bug patterns:</p>
    <p><strong>Pattern 1 — multiple things happening when only one should:</strong></p>
<pre class="language-javascript"><code class="language-javascript">// Bug: both error AND content render
if (state.error) {
  showError();
}
if (state.hasContent) {
  showContent();
}
// fix: chain them so only one runs at a time.</code></pre>

    <p><strong>Pattern 2 — only the first thing happening when several should:</strong></p>
<pre class="language-javascript"><code class="language-javascript">// Bug: only "NEW" shows, "SALE" never does
if (product.isNew) {
  addBadge("NEW");
} else if (product.isOnSale) {
  addBadge("SALE");
}
// fix: separate ifs — both are independent and should run.</code></pre>

    <p>If you're getting too many results, you probably need a chain. If you're getting too few, you probably wrote a chain when you needed separate <code>if</code>s.</p>
  `,

  /* 2.1 The part that makes it click */
  'topics-6-13-2-1': `
    <p>The word <code>else</code> isn't decoration — it's the <strong>link</strong> between branches. It says "this check only matters if the previous one didn't match."</p>
    <p>Without <code>else</code>, the next <code>if</code> doesn't know about the previous one. They live in completely separate worlds. With <code>else</code>, they're linked into a single decision and only one can win.</p>
    <p>So the question isn't "should I use <code>if</code> or <code>else if</code>?" — it's "are these checks related to each other or not?"</p>
  `,

  /* 2.2 Common confusions */
  'topics-6-13-2-2': `
    <p><strong>Confusion: visual similarity</strong></p>
<pre class="language-javascript"><code class="language-javascript">// Look almost identical on screen, behave totally differently
if (a) { ... }
if (b) { ... }     // independent — both can run

if (a) { ... }
else if (b) { ... }  // chained — only one can run
// the difference is one word: "else"</code></pre>

    <p><strong>Confusion: thinking <code>else</code> applies to a chain "as a whole"</strong></p>
<pre class="language-javascript"><code class="language-javascript">if (a) {
  doA();
}
if (b) {
  doB();
} else {
  doFallback();
}
// doFallback is the else for "if (b)" only — NOT a fallback for the whole structure.
// a = true, b = false → doA runs, then doFallback runs.</code></pre>

    <p><strong>Confusion: returns inside functions blur the line</strong></p>
<pre class="language-javascript"><code class="language-javascript">function classify(n) {
  if (n > 0) {
    return "positive";
  }
  if (n < 0) {
    return "negative";
  }
  return "zero";
}
// these are SEPARATE ifs, but they ACT like a chain because of the early returns.
// once "return" runs, the function exits, so later ifs can't run anyway.
// this pattern is called "guard clauses" — common and clean inside functions.</code></pre>

    <p><strong>Confusion: thinking <code>else</code> needs to be on a new line / styled a certain way</strong></p>
<pre class="language-javascript"><code class="language-javascript">// All three are valid and equivalent:

if (a) {
  doA();
} else if (b) {
  doB();
}

if (a) {
  doA();
}
else if (b) {
  doB();
}

if (a) { doA(); } else if (b) { doB(); }
// the chain works because "else" follows the closing brace —
// whitespace/newlines don't matter to JS.</code></pre>

    <p><strong>Confusion: thinking separate <code>if</code>s are "wrong" or sloppy</strong></p>
<pre class="language-javascript"><code class="language-javascript">// Separate ifs are correct here — every applicable badge should show.
if (product.isNew) {
  addBadge("NEW");
}
if (product.isOnSale) {
  addBadge("SALE");
}
if (product.isExclusive) {
  addBadge("EXCLUSIVE");
}
// converting this to a chain would be a BUG, not an improvement.</code></pre>
  `,

  /* 2.3 Common mistakes */
  'topics-6-13-2-3': `
<pre class="language-javascript"><code class="language-javascript">// Mistake: separate ifs when you wanted alternatives
if (status === "loading") {
  showSpinner();
}
if (status === "error") {
  showError();
}
if (status === "ok") {
  showContent();
}
// works by accident because conditions are mutually exclusive,
// but the structure says "any of these can happen" — misleading.
// fix: chain with else if to express "pick one".</code></pre>

<pre class="language-javascript"><code class="language-javascript">// Mistake: chained when you wanted independent checks
if (user.hasUnreadMessages) {
  showMessageBadge();
} else if (user.hasNewFollowers) {
  showFollowerBadge();
} else if (user.hasPendingInvites) {
  showInviteBadge();
}
// only ONE badge ever shows — but a user could have all three!
// fix: separate ifs so all applicable badges show.</code></pre>

<pre class="language-javascript"><code class="language-javascript">// Mistake: else attaching to the wrong if
if (a) {
  doA();
}
if (b) {
  doB();
} else {
  doFallback();    // attaches to (b), not (a)
}
// fix: if you wanted one decision, chain them:
if (a) {
  doA();
} else if (b) {
  doB();
} else {
  doFallback();
}</code></pre>

<pre class="language-javascript"><code class="language-javascript">// Mistake: code accidentally between if and else if
if (a) {
  doA();
}
console.log("done with a");
else if (b) {       // SyntaxError — else if can't attach across other code
  doB();
}
// fix: move the console.log out of the chain, or remove "else".</code></pre>

<pre class="language-javascript"><code class="language-javascript">// Mistake: thinking "I'll just write three ifs, they're cleaner"
// when alternatives are needed
if (price >= 1000) {
  applyDiscount(0.5);
}
if (price >= 500) {
  applyDiscount(0.25);
}
if (price >= 100) {
  applyDiscount(0.1);
}
// for price = 1500, ALL THREE discounts apply!
// fix: chain them so only the highest tier applies.</code></pre>
  `,

  /* --- Chunk 3: In Practice --- */

  /* 3.0 Tiny examples */
  'topics-6-13-3-0': `
<pre class="language-javascript"><code class="language-javascript">// Chain — pick one priority level
const priority = 5;
if (priority >= 8) {
  console.log("urgent");
} else if (priority >= 4) {
  console.log("normal");
} else {
  console.log("low");
}
// prints: "normal" — exactly one.

// Separate ifs — collect all matching tags
const post = { isPinned: true, hasImage: true, isEdited: false };
const tags = [];
if (post.isPinned) {
  tags.push("📌");
}
if (post.hasImage) {
  tags.push("🖼");
}
if (post.isEdited) {
  tags.push("✏️");
}
console.log(tags);   // ["📌", "🖼"] — both that applied

// Mixed in one function
function describeUser(user) {
  // Chain — pick one tier
  let tier;
  if (user.isAdmin) {
    tier = "admin";
  } else if (user.isPaid) {
    tier = "paid";
  } else {
    tier = "free";
  }

  // Separate ifs — collect all flags
  const flags = [];
  if (user.isVerified) {
    flags.push("verified");
  }
  if (user.isBeta) {
    flags.push("beta");
  }

  return { tier, flags };
}

// Inside a function — early returns act like a chain
function classify(n) {
  if (n > 0) {
    return "positive";
  }
  if (n < 0) {
    return "negative";
  }
  return "zero";
}
// only one return runs, even though these look like separate ifs.</code></pre>
  `,

  /* 3.1 Real website uses */
  'topics-6-13-3-1': `
    <p><strong>Example: render exactly one main view (chain)</strong></p>
<pre class="language-javascript"><code class="language-javascript">function renderApp(state) {
  if (state.error) {
    showErrorScreen(state.error);
  } else if (state.isLoading) {
    showLoadingScreen();
  } else if (!state.user) {
    showLoginScreen();
  } else {
    showDashboard(state);
  }
}
// only one screen at a time — chain is required.</code></pre>

    <p><strong>Example: collect all form errors (separate ifs)</strong></p>
<pre class="language-javascript"><code class="language-javascript">function validateForm(form) {
  const errors = [];

  if (!form.email) {
    errors.push("Email is required");
  }
  if (form.email && !form.email.includes("@")) {
    errors.push("Email must include @");
  }
  if (!form.password) {
    errors.push("Password is required");
  }
  if (form.password && form.password.length < 8) {
    errors.push("Password too short");
  }

  return errors;
}
// independent checks — we want ALL the errors, not just the first.</code></pre>

    <p><strong>Example: show all matching product badges (separate ifs)</strong></p>
<pre class="language-javascript"><code class="language-javascript">function renderBadges(product) {
  const container = document.querySelector(".badges");
  container.innerHTML = "";

  if (product.isNew) {
    container.appendChild(makeBadge("NEW"));
  }
  if (product.isOnSale) {
    container.appendChild(makeBadge("SALE"));
  }
  if (product.stock < 5) {
    container.appendChild(makeBadge("LOW STOCK"));
  }
  if (product.isExclusive) {
    container.appendChild(makeBadge("EXCLUSIVE"));
  }
}
// a product can be NEW + SALE + LOW STOCK all at once.</code></pre>

    <p><strong>Example: route guard with early returns (chain-like via guard clauses)</strong></p>
<pre class="language-javascript"><code class="language-javascript">function checkAccess(user, page) {
  if (!user) {
    return "redirect:/login";
  }
  if (!user.verified) {
    return "redirect:/verify-email";
  }
  if (page.requiresAdmin && !user.isAdmin) {
    return "redirect:/403";
  }
  return "allow";
}
// separate ifs in syntax, but the early returns make only one outcome happen.</code></pre>
  `,

  /* 3.2 Connects to */
  'topics-6-13-3-2': `
    <ul>
      <li><strong>Only one branch runs</strong> → why chains behave the way they do</li>
      <li><strong><code>else if</code></strong> → the keyword that turns separate <code>if</code>s into a chain</li>
      <li><strong>Condition order matters</strong> → only matters inside a chain; doesn't apply to separate <code>if</code>s</li>
      <li><strong>Guard clauses</strong> → using early <code>return</code>s inside functions to mimic chain behavior</li>
      <li><strong>Truthy and falsy</strong> → drives the conditions in either pattern</li>
      <li><strong>Code blocks</strong> → braces define what counts as part of one branch</li>
      <li><strong>Switch statements</strong> → built-in "pick one" structure for many alternatives</li>
      <li><strong>Common mistakes</strong> → choosing the wrong pattern is one of the most frequent JS bugs</li>
    </ul>
  `,

  /* 3.3 See also */
  'topics-6-13-3-3': `
    <ul>
      <li>Only one branch runs</li>
      <li><code>else if</code> as backup question</li>
      <li>Condition order matters</li>
      <li>Guard clauses</li>
      <li>Early <code>return</code> patterns</li>
      <li>Switch statements</li>
      <li>Code blocks and braces</li>
      <li>Truthy and falsy values</li>
    </ul>
  `,

  /* ========================================================= 
   Sub-lesson: 3.7.15 If / Else → comparison operators in conditions
 =======================================================*/

  /* --- Chunk 0: What & How --- */

  /* 0.0 What it is */
  'topics-6-14-0-0': `
    <p>Comparison operators are the small symbols that turn two values into a yes/no answer: <code>===</code>, <code>!==</code>, <code>&gt;</code>, <code>&lt;</code>, <code>&gt;=</code>, <code>&lt;=</code>. They're what most <code>if</code> conditions are built from.</p>
    <p>Every comparison takes a left value, a right value, and produces a single boolean (<code>true</code> or <code>false</code>). That boolean is what JavaScript actually checks when deciding whether to run the branch.</p>
  `,

  /* 0.1 Syntax */
  'topics-6-14-0-1': `
<pre class="language-javascript"><code class="language-javascript">const temp = 75;

if (temp > 70) {
  console.log("warm");
}
// prints: "warm"
// temp > 70 → 75 > 70 → true → block runs</code></pre>
    <p>The condition <code>temp &gt; 70</code> is just an expression that evaluates to <code>true</code> or <code>false</code>. The <code>if</code> doesn't care how that boolean was produced — only whether the result is truthy.</p>
  `,

  /* 0.2 Anatomy / Breakdown */
  'topics-6-14-0-2': `
<pre class="language-javascript"><code class="language-javascript">const balance = 200;

if (balance >= 100) {
  console.log("eligible");
}

// balance     → left side: the value being checked
// >=          → operator: "greater than or equal to"
// 100         → right side: the value being compared against
// balance >= 100 → evaluates to true (200 is >= 100)
// the whole condition reduces to one boolean</code></pre>
    <p>Each operator follows the same shape: <em>left, operator, right</em>. JavaScript looks at both sides, applies the rule, and produces one true/false result.</p>
  `,

  /* 0.3 Syntax Details That Matter */
  'topics-6-14-0-3': `
    <p>JavaScript has six core comparison operators. Three of them check equality, three check ordering:</p>
<pre class="language-javascript"><code class="language-javascript">// Equality
a === b      // strict equal: same value AND same type
a !== b      // strict not equal: different value or different type

// Ordering
a > b        // greater than
a < b        // less than
a >= b       // greater than or equal
a <= b       // less than or equal</code></pre>

    <p><code>===</code> is the strict equality check. It returns <code>true</code> only if both values are the same type AND the same value:</p>
<pre class="language-javascript"><code class="language-javascript">5 === 5            // true
5 === "5"          // false — number vs string, different types
"hi" === "hi"      // true
true === true      // true
null === undefined // false — different types</code></pre>

    <p>There's also a loose equality operator <code>==</code> (and its opposite <code>!=</code>), but it does type coercion that often causes bugs. <strong>Avoid <code>==</code>. Always use <code>===</code>:</strong></p>
<pre class="language-javascript"><code class="language-javascript">5 == "5"           // true — JS converts "5" to 5 before comparing
"" == 0            // true — both become 0
false == 0         // true — both become 0
null == undefined  // true — special-cased to be equal

// === avoids all this confusion:
5 === "5"          // false — different types, end of story</code></pre>

    <p>Comparison operators only return booleans. Mixing them up with assignment (<code>=</code>) is one of the most common bugs:</p>
<pre class="language-javascript"><code class="language-javascript">// Wrong — single = is assignment, not comparison
if (status = "ready") {
  // ...
}
// this assigns "ready" to status, then evaluates "ready" (truthy) → block always runs

// Right — === compares
if (status === "ready") {
  // ...
}</code></pre>

    <p>Ordering operators (<code>&gt;</code>, <code>&lt;</code>, <code>&gt;=</code>, <code>&lt;=</code>) work on numbers and strings. With strings, they compare alphabetically based on character codes:</p>
<pre class="language-javascript"><code class="language-javascript">10 > 5             // true
"apple" < "banana" // true — "a" comes before "b"
"Z" < "a"          // true — uppercase letters have lower codes than lowercase
"10" < "9"         // true — string compare: "1" comes before "9"</code></pre>

    <p>That last one is a classic trap — <code>"10" &lt; "9"</code> is <code>true</code> because it's comparing strings character by character, not numbers. Always make sure both sides are the type you expect.</p>
  `,

  /* --- Chunk 1: Why & When --- */

  /* 1.0 What problem it solves */
  'topics-6-14-1-0': `
    <p>Conditions need a way to ask specific questions about values: "is this exactly that?", "is this big enough?", "is this past the limit?". Comparison operators are how you ask those questions in JavaScript.</p>
    <p>Without them, every condition would have to be a raw boolean variable. With them, you can compare any two values directly and get an answer in one expression.</p>
  `,

  /* 1.1 Why use it */
  'topics-6-14-1-1': `
    <p>Each operator answers a different kind of question. Pick the one that matches what you actually want to ask:</p>
<pre class="language-javascript"><code class="language-javascript">// "Is it exactly this value?" → ===
if (role === "admin") {
  enableAdminTools();
}

// "Is it not this value?" → !==
if (status !== "archived") {
  showItem();
}

// "Is it past this threshold?" → > or >=
if (score >= 60) {
  pass();
}

// "Is it under this limit?" → < or <=
if (attempts < 3) {
  allowRetry();
}</code></pre>

    <p>The operator you choose is the question you're asking. Mixing them up changes the meaning entirely — <code>&gt;</code> and <code>&gt;=</code> only differ at the boundary, but at that boundary they behave opposite.</p>
  `,

  /* 1.2 Where you use it */
  'topics-6-14-1-2': `
<pre class="language-javascript"><code class="language-javascript">// Permission checks (===)
if (user.plan === "premium") {
  showPremiumFeatures();
}

// Filtering exclusions (!==)
const visible = items.filter(item => item.status !== "deleted");

// Numeric thresholds (>=)
if (cart.subtotal >= 50) {
  applyFreeShipping();
}

// Boundaries (<)
if (passwordAttempts < maxAttempts) {
  allowLogin();
} else {
  lockAccount();
}

// Range checks (combining with logical operators)
if (age >= 13 && age <= 19) {
  console.log("teenager");
}

// Null checks (===)
if (data === null) {
  showEmpty();
}

// Existence (!==)
if (response.error !== undefined) {
  handleError(response.error);
}</code></pre>
  `,

  /* 1.3 Plain English explanation */
  'topics-6-14-1-3': `
    <p>Comparison operators are the question marks of code. Each one is asking a question about two values, and the answer is always yes or no.</p>
    <p><code>===</code> asks "is this <em>exactly</em> the same?" Not just similar — same value, same type, no conversions allowed. <code>!==</code> asks the opposite: "is this <em>not</em> the same?"</p>
    <p><code>&gt;</code>, <code>&lt;</code>, <code>&gt;=</code>, and <code>&lt;=</code> ask about size or order. Bigger, smaller, at-or-above, at-or-below. The "or equal" versions include the boundary itself.</p>
    <p>Whatever question you ask, JavaScript answers with a single <code>true</code> or <code>false</code>. That answer is what your <code>if</code> branches on.</p>
  `,

  /* 1.4 Mental model */
  'topics-6-14-1-4': `
    <p>Each comparison is a tiny question that returns a yes/no card. The <code>if</code> only looks at the card.</p>
<pre class="language-javascript"><code class="language-javascript">     score >= 60
         │
         ▼
   ┌───────────┐
   │ comparison │ ← runs the check
   └─────┬─────┘
         ▼
      [ true ]   ← the card it produces
         │
         ▼
       if (...)  ← the if just sees the card

// the if doesn't know or care what the comparison was —
// it only sees the resulting boolean.</code></pre>
    <p>Once you see comparisons as "expressions that produce booleans," any condition becomes simple to read: <em>"first reduce the expression to true or false, then ask if it's truthy."</em></p>
  `,

  /* 1.5 Step-by-step walkthrough */
  'topics-6-14-1-5': `
<pre class="language-javascript"><code class="language-javascript">const password = "abc";
const minLength = 8;

if (password.length >= minLength) {
  console.log("password OK");
} else {
  console.log("password too short");
}

// prints: "password too short"

// JavaScript is thinking:
// Line 1: register password, value "abc".
// Line 2: register minLength, value 8.
// Line 4: see if (...) — start evaluating the condition.
//         password.length → reads .length on "abc" → 3
//         minLength → 8
//         3 >= 8 → false
//         the condition reduces to: if (false)
// Line 5: false is falsy → skip this block.
// Line 6: see else → run this block.
// Line 7: log "password too short".</code></pre>
  `,

  /* --- Chunk 2: The Click --- */

  /* 2.0 Debugging clue */
  'topics-6-14-2-0': `
    <p>If a condition isn't behaving the way you expect, log the comparison directly to see what JavaScript actually sees:</p>
<pre class="language-javascript"><code class="language-javascript">const userId = "42";

console.log("userId:", userId, typeof userId);
console.log("compare:", userId === 42);

if (userId === 42) {
  console.log("match");
} else {
  console.log("no match");
}

// prints:
//   userId: 42 string
//   compare: false
//   no match

// the value LOOKS like 42, but it's the string "42".
// === checks types too, so they're not equal.
// fix: convert with Number(userId), or compare with the string "42".</code></pre>

    <p>The two most common comparison bugs:</p>
    <ol>
      <li><strong>Using <code>=</code> instead of <code>===</code></strong> — this assigns instead of comparing, and the condition almost always evaluates to truthy.</li>
      <li><strong>Comparing different types</strong> — strings and numbers that look the same aren't equal under <code>===</code>.</li>
    </ol>
  `,

  /* 2.1 The part that makes it click */
  'topics-6-14-2-1': `
    <p>An <code>if</code> doesn't compare anything itself. It just checks whether the value inside the parens is truthy. Comparison operators are what produce the boolean that the <code>if</code> reads.</p>
    <p>So <code>if (x &gt;= 10)</code> isn't really "if x is at least 10." It's two steps: first compute <code>x &gt;= 10</code>, then ask "is that result truthy?" Once you see that split, you can put any boolean expression in an <code>if</code> — the <code>if</code> doesn't care where the boolean came from.</p>
  `,

  /* 2.2 Common confusions */
  'topics-6-14-2-2': `
    <p><strong>Confusion: <code>=</code> vs <code>===</code></strong></p>
<pre class="language-javascript"><code class="language-javascript">// Wrong — assignment, not comparison
if (status = "active") {
  console.log("active");
}
// this ASSIGNS "active" to status, then evaluates "active" (truthy) → block ALWAYS runs

// Right — comparison
if (status === "active") {
  console.log("active");
}</code></pre>

    <p><strong>Confusion: <code>==</code> vs <code>===</code></strong></p>
<pre class="language-javascript"><code class="language-javascript">// == does type coercion (often surprising)
0 == "0"        // true
0 == ""         // true
"" == false     // true
null == undefined // true

// === requires same type AND value (predictable)
0 === "0"       // false
0 === ""        // false
"" === false    // false
null === undefined // false

// Always use === unless you have a very specific reason not to.</code></pre>

    <p><strong>Confusion: <code>&gt;=</code> vs <code>&gt;</code></strong></p>
<pre class="language-javascript"><code class="language-javascript">// They differ ONLY at the boundary
const score = 60;

if (score >= 60) { /* runs */ }    // 60 IS >= 60 → true
if (score > 60)  { /* skips */ }   // 60 is NOT > 60 → false

// Pick based on whether the boundary value should pass or fail.
// "passing grade is 60" → score >= 60 (60 itself passes)
// "must beat 60" → score > 60 (60 itself doesn't beat it)</code></pre>

    <p><strong>Confusion: comparing objects</strong></p>
<pre class="language-javascript"><code class="language-javascript">const a = { id: 1 };
const b = { id: 1 };

a === b   // false — different objects in memory, even though contents match
a === a   // true — same reference

// === on objects only checks if it's the SAME object, not if contents match.
// To compare contents, check fields directly:
a.id === b.id   // true</code></pre>

    <p><strong>Confusion: comparing strings as numbers</strong></p>
<pre class="language-javascript"><code class="language-javascript">// Strings compare alphabetically, not numerically
"10" < "9"      // true — "1" comes before "9" in character order
"100" < "20"    // true — same trap

// Convert to numbers if you mean numeric comparison
Number("10") < Number("9")    // false — actual number compare
parseInt("10") < parseInt("9") // false</code></pre>

    <p><strong>Confusion: <code>NaN</code> doesn't equal anything</strong></p>
<pre class="language-javascript"><code class="language-javascript">const result = Number("hello");   // NaN

result === NaN     // false — NaN is not equal to itself!
result === result  // false — even comparing to itself

// To check for NaN, use Number.isNaN():
Number.isNaN(result)   // true</code></pre>
  `,

  /* 2.3 Common mistakes */
  'topics-6-14-2-3': `
<pre class="language-javascript"><code class="language-javascript">if (status = "ready") {
  start();
}
// = is assignment — block always runs because "ready" is truthy
// fix: use === for comparison
if (status === "ready") {
  start();
}</code></pre>

<pre class="language-javascript"><code class="language-javascript">if (count == 0) {
  console.log("empty");
}
// works, but == coerces types — risky habit
// fix: use === for predictable comparison
if (count === 0) {
  console.log("empty");
}</code></pre>

<pre class="language-javascript"><code class="language-javascript">if (userId === 42) {
  // ...
}
// fails when userId is the string "42" instead of the number 42
// fix: make sure both sides have the same type, or convert first
if (Number(userId) === 42) {
  // ...
}</code></pre>

<pre class="language-javascript"><code class="language-javascript">if (price > 100 || 200) {
  // ...
}
// wrong — this evaluates as (price > 100) || 200 — the 200 is truthy by itself
// fix: write each side of OR as its own full comparison
if (price > 100 || price > 200) {
  // ...
}</code></pre>

<pre class="language-javascript"><code class="language-javascript">if (a === b === c) {
  // ...
}
// wrong — this evaluates left-to-right: (a === b) → true/false, then compares THAT to c
// fix: combine with &&
if (a === b && b === c) {
  // ...
}</code></pre>

<pre class="language-javascript"><code class="language-javascript">if (result === NaN) {
  // ...
}
// NaN is never equal to anything, including itself
// fix: use Number.isNaN()
if (Number.isNaN(result)) {
  // ...
}</code></pre>
  `,

  /* --- Chunk 3: In Practice --- */

  /* 3.0 Tiny examples */
  'topics-6-14-3-0': `
<pre class="language-javascript"><code class="language-javascript">// Strict equality — exact value match
const role = "admin";
if (role === "admin") {
  console.log("welcome admin");
}

// Strict inequality — exclude one case
const view = "list";
if (view !== "grid") {
  renderListLayout();
}

// Numeric threshold
const battery = 15;
if (battery <= 20) {
  console.log("low battery warning");
}

// String comparison
const name = "Alice";
if (name < "M") {
  console.log("first half of alphabet");
}

// Combining with logical operators
const age = 25;
if (age >= 18 && age < 65) {
  console.log("working age");
}

// Inside a function
function isPositive(n) {
  return n > 0;
}
console.log(isPositive(5));    // true
console.log(isPositive(-2));   // false
console.log(isPositive(0));    // false — exactly 0 doesn't pass</code></pre>
  `,

  /* 3.1 Real website uses */
  'topics-6-14-3-1': `
    <p><strong>Example: feature flag check</strong></p>
<pre class="language-javascript"><code class="language-javascript">function shouldShowBeta(user) {
  if (user.plan === "pro" && user.optedInToBeta === true) {
    return true;
  }
  return false;
}</code></pre>

    <p><strong>Example: form field validation</strong></p>
<pre class="language-javascript"><code class="language-javascript">function validateAge(input) {
  const value = Number(input);

  if (Number.isNaN(value)) {
    return "Age must be a number";
  }
  if (value < 0) {
    return "Age can't be negative";
  }
  if (value > 150) {
    return "Please enter a realistic age";
  }
  return null;
}</code></pre>

    <p><strong>Example: pagination button states</strong></p>
<pre class="language-javascript"><code class="language-javascript">function updatePagination(currentPage, totalPages) {
  const prevBtn = document.querySelector(".prev");
  const nextBtn = document.querySelector(".next");

  if (currentPage <= 1) {
    prevBtn.disabled = true;
  } else {
    prevBtn.disabled = false;
  }

  if (currentPage >= totalPages) {
    nextBtn.disabled = true;
  } else {
    nextBtn.disabled = false;
  }
}</code></pre>

    <p><strong>Example: filter list by status</strong></p>
<pre class="language-javascript"><code class="language-javascript">function getActiveTickets(tickets) {
  return tickets.filter(function (ticket) {
    return ticket.status !== "closed" && ticket.status !== "archived";
  });
}</code></pre>
  `,

  /* 3.2 Connects to */
  'topics-6-14-3-2': `
    <ul>
      <li><strong>Truthy and falsy values</strong> → what comparison results get treated as in conditions</li>
      <li><strong>Logical operators</strong> → combining multiple comparisons with <code>&&</code> and <code>||</code></li>
      <li><strong><code>=</code> vs <code>===</code></strong> → assignment vs comparison, a frequent bug source</li>
      <li><strong>Type coercion</strong> → why <code>==</code> behaves unpredictably and <code>===</code> doesn't</li>
      <li><strong>Numbers vs strings</strong> → string comparisons follow alphabetical order, not numeric</li>
      <li><strong><code>NaN</code></strong> → the special value that's not equal to anything, even itself</li>
      <li><strong>Object identity</strong> → <code>===</code> on objects checks reference equality, not contents</li>
      <li><strong>Boolean expressions</strong> → comparisons are the most common way to produce them</li>
    </ul>
  `,

  /* 3.3 See also */
  'topics-6-14-3-3': `
    <ul>
      <li>Logical operators in conditions</li>
      <li>Truthy and falsy values</li>
      <li>Type coercion and <code>==</code> vs <code>===</code></li>
      <li>Comparing numbers vs comparing strings</li>
      <li><code>Number.isNaN()</code> and <code>Number.isFinite()</code></li>
      <li>Object equality and reference comparison</li>
      <li>Operator precedence in conditions</li>
      <li>Common typos: <code>=</code> vs <code>==</code> vs <code>===</code></li>
    </ul>
  `,

});
